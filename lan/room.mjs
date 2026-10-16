// Authoritative match room for LAN / internet play (V7-05, V7-12). Pure logic: no sockets here (server.mjs adds HTTP + SSE).
//
//  * ONE authoritative engine runs here: validation, dice, settlement. Clients send intents (an action input or a decision choice) and
//    receive the resulting public state and events. Clients never execute rules and never receive the RNG seed.
//  * Seats: 'A' (Player 1, the host), 'B' (Player 2), 'S' (spectators, read-only). Control follows `waitingFor`: an action may be sent
//    only by the seat whose Turn it is; a pending decision only by the seat it is addressed to (a defender's decision during the other
//    side's Turn goes to the defender). Neutral steps (pre-game, end of Drive) may be sent by either player.
//  * Every command carries `commandId` (idempotent: a repeat returns the stored acknowledgement and changes nothing) and `baseRev`
//    (the revision the sender had seen: a command against an older revision is rejected as stale and the sender resynchronises).
//  * Everything that happens is appended to a journal (JSON lines). Resuming a room replays the journal with the same engine, which
//    reproduces the state, the dice and any pending decision exactly. The journal is private to the host (it holds the seed).
//  * Compatibility: a client must declare the same protocol and rules code (and a supported rules edition) to take a seat.
import { createHash, randomBytes, timingSafeEqual } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { fileStore } from './store.mjs';

export const PROTOCOL = 1;
export const MAX_PENDING_IDS = 400;
const sha = (s) => createHash('sha256').update(s).digest('hex');
const safeEq = (a, b) => { const x = Buffer.from(String(a)); const y = Buffer.from(String(b)); return x.length === y.length && timingSafeEqual(x, y); };
const clone = (x) => JSON.parse(JSON.stringify(x));

export function newCode() { // 8 characters, no look-alikes
  const alphabet = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  const b = randomBytes(8);
  return Array.from(b, (x) => alphabet[x % alphabet.length]).join('');
}

/** What a client may see: the state without the RNG seed (and without the in-flight action's pre-roll snapshot, which carries it). */
export function publicState(state) {
  const s = { ...state, rng: { seed: 0, counter: state.rng.counter } };
  if (state.pending) s.pending = { ...state.pending, base: null };
  return s;
}

const fail = (code, message, extra = {}) => ({ ok: false, code, message, ...extra });

export class Room {
  /**
   * @param {object} o
   * @param {object} o.engine        the engine module (lan/engine.mjs)
   * @param {string} o.code          the room code (kept in memory; its hash is journaled)
   * @param {string} [o.journal]     journal file path (omit for an in-memory room)
   * @param {object} [o.store]       a journal store (store.mjs); wins over `journal`. With an async store every state change goes through tx().
   * @param {() => number} [o.seed]  seed source (tests may fix it)
   */
  constructor({ engine, code, journal = null, store = null, seed = () => randomBytes(4).readUInt32BE(0) }) {
    this.E = engine; this.code = code; this.codeHash = sha(code); this.journal = journal; this.store = store ?? (journal ? fileStore(journal) : null); this.seedFn = seed;
    this._tx = null; this._txSnap = null; this._chain = Promise.resolve(); this.lockedUntil = 0;
    this.id = `room-${sha(code).slice(0, 10)}`;
    this.seats = { A: null, B: null }; // { name, tokenHash, since }
    this.spectators = new Map(); // tokenHash -> { name }
    this.subs = new Set(); // { seat, send }
    this.state = null; this.initial = null; this.rev = 0; this.cmds = []; this.createdAt = new Date().toISOString();
    this.acks = new Map(); // commandId -> ack (bounded)
    this.fingerprint = engine.BUILD_FINGERPRINT;
    this.failedCodeAttempts = 0;
  }

  get started() { return !!this.state; }
  get completedAt() {
    if (this.state?.phase !== 'fullTime') return null;
    const at = Date.parse(this.cmds.at(-1)?.at ?? '');
    return Number.isFinite(at) ? at : null;
  }

  // ---------------------------------------------------------------- journal
  _write(rec) {
    if (!this.store) return;
    if (this._tx) { this._tx.recs.push(rec); return; }
    const r = this.store.append([JSON.stringify(rec)]);
    if (r && typeof r.then === 'function') throw new Error('an asynchronous store must be used through room.tx()');
  }
  _later(f) { if (this._tx) this._tx.after.push(f); else f(); }

  // ---------------------------------------------------------------- transactions (write-ahead, all-or-nothing)
  _snap() { return { state: this.state, initial: this.initial, rev: this.rev, cmds: this.cmds.length, acks: new Map(this.acks), seats: clone(this.seats), spectators: new Map(this.spectators), final: this._finalHistory }; }
  _restore(n) { this.state = n.state; this.initial = n.initial; this.rev = n.rev; this.cmds.length = n.cmds; this.acks = n.acks; this.seats = n.seats; this.spectators = n.spectators; this._finalHistory = n.final; }

  /**
   * Run a synchronous state change (join, start, command) so that it becomes visible only AFTER its journal records are durable.
   * Operations are serialised. If the store cannot persist, the change is rolled back, nobody is told about it, and the caller gets
   * { ok:false, code:'store_unavailable' } (retryable). Nothing is acknowledged, broadcast or lost silently.
   */
  tx(op) {
    const run = async () => {
      const snap = this._snap();
      this._tx = { recs: [], after: [] };
      let result;
      try { result = op(); } catch (e) { this._tx = null; this._restore(snap); throw e; }
      const tx = this._tx; this._tx = null;
      if (this._needHeader && this.store) tx.recs.unshift(this._needHeader);
      if (tx.recs.length && this.store) {
        this._txSnap = snap; // readers keep seeing the last durable state while the write is in flight
        try { await this.store.append(tx.recs.map((r) => JSON.stringify(r))); }
        catch (e) { this._restore(snap); this._txSnap = null; return fail('store_unavailable', `The recovery store could not save this change, so nothing was changed (${e.message}). Try again in a moment.`, { retryable: true }); }
        this._txSnap = null; this._needHeader = null;
      }
      for (const f of tx.after) { try { f(); } catch { /* a closed connection must not undo a durable change */ } }
      return result;
    };
    const p = this._chain.then(run, run);
    this._chain = p.then(() => undefined, () => undefined);
    return p;
  }

  /** Rebuild a room from journal lines or a journal file (host restart / cold start). Tokens survive so clients reconnect; dice and pending decisions are reproduced by replay. */
  static resume({ engine, code, journal, lines }) {
    if (!lines) {
      if (!existsSync(journal)) throw new Error(`journal not found: ${journal}`);
      lines = readFileSync(journal, 'utf8').split('\n').filter(Boolean);
    }
    lines = lines.map((l) => (typeof l === 'string' ? JSON.parse(l) : l));
    const head = lines.find((l) => l.k === 'room');
    if (!head) throw new Error('journal has no room header');
    if (!safeEq(head.codeHash, sha(code))) throw new Error('the room code does not match this journal');
    const r = new Room({ engine, code, journal: null });
    r.createdAt = head.createdAt;
    for (const l of lines) {
      if (l.k === 'seat') r.seats[l.seat] = { name: l.name, tokenHash: l.tokenHash, since: l.at };
      else if (l.k === 'release') r.seats[l.seat] = null;
      else if (l.k === 'start') { r._begin(l.initial); }
      else if (l.k === 'cmd') {
        const res = r._apply(l.seat, l.kind, l.input, l.choice, l.commandId, true, l.at);
        if (!res.ok) throw new Error(`journal replay failed at rev ${l.rev}: ${res.message}`);
        if (r.rev !== l.rev) throw new Error(`journal replay diverged at rev ${l.rev} (got ${r.rev})`);
        r.acks.set(`${l.seat}:${l.commandId}`, { ok: true, rev: r.rev, status: res.status });
        if (r.acks.size > MAX_PENDING_IDS) r.acks.delete(r.acks.keys().next().value);
      }
    }
    if (journal) { r.journal = journal; r.store = fileStore(journal); } // new commands append from here on
    return r;
  }

  open() {
    const rec = { k: 'room', codeHash: this.codeHash, createdAt: this.createdAt, protocol: PROTOCOL, engine: this.fingerprint.version };
    if (this.store && this.store.durable) this._needHeader = rec; // written by the first successful tx(); until then nothing else may be persisted
    else this._write(rec);
    return this;
  }

  // ---------------------------------------------------------------- compatibility and seats
  compat(client = {}) {
    const fp = this.fingerprint;
    if (client.protocol !== PROTOCOL) return `Different network protocol (client ${client.protocol ?? 'unknown'}, host ${PROTOCOL}). Use the same Bloodboard release on every device.`;
    if (client.rulesHash !== fp.rulesHash) return `Different rules code (client ${client.engineVersion ?? 'unknown'}, host ${fp.version}). Use the same Bloodboard release on every device so both coaches get identical rules.`;
    const ed = this.state?.rulesEdition ?? 'faq2026';
    if (Array.isArray(client.editions) && !client.editions.includes(ed)) return `The match runs rules edition "${ed}", which this client does not support.`;
    return null;
  }

  /** Take or re-take a seat. Returns the token (shown once; only its hash is kept). */
  join({ code, seat, name, token, client }) {
    if (token) {
      const h = sha(token);
      for (const s of ['A', 'B']) if (this.seats[s] && safeEq(this.seats[s].tokenHash, h)) { const c = this.compat(client); if (c) return fail('incompatible', c); return { ok: true, seat: s, token, resumed: true }; }
      if (this.spectators.has(h)) { const c = this.compat(client); if (c) return fail('incompatible', c); return { ok: true, seat: 'S', token, resumed: true }; }
    }
    if (token) return fail('unauthorized', 'This seat token is no longer valid. Rejoin with the room code.');
    if (this.lockedUntil && Date.now() >= this.lockedUntil) { this.lockedUntil = 0; this.failedCodeAttempts = 0; }
    if (this.failedCodeAttempts >= 20) { if (!this.lockedUntil) this.lockedUntil = Date.now() + 15 * 60_000; return fail('locked', 'Too many wrong room codes. New joins are paused for 15 minutes (a saved seat still reconnects).'); }
    if (!code || !safeEq(String(code).trim().toUpperCase(), this.code)) { this.failedCodeAttempts++; return fail('bad_code', 'Wrong room code.'); }
    const c = this.compat(client); if (c) return fail('incompatible', c);
    const nm = String(name ?? '').trim().slice(0, 40) || 'Coach';
    const t = randomBytes(24).toString('hex'); const h = sha(t);
    if (seat === 'S') { this.spectators.set(h, { name: nm }); this._presence(); return { ok: true, seat: 'S', token: t }; }
    if (seat !== 'A' && seat !== 'B') return fail('bad_request', 'Choose seat A, B or S (spectator).');
    if (this.seats[seat]) return fail('seat_taken', `Seat ${seat} (${seat === 'A' ? 'Player 1, host' : 'Player 2'}) is already taken. Reconnect with your saved token or pick the other seat.`);
    this.seats[seat] = { name: nm, tokenHash: h, since: new Date().toISOString() };
    this._write({ k: 'seat', seat, name: nm, tokenHash: h, at: this.seats[seat].since });
    this._presence();
    return { ok: true, seat, token: t };
  }

  /** Explicit release is allowed in a lobby or finished game; a live game keeps ownership until the host archives it. */
  release({ token }) {
    const seat = this.seatOf(token);
    if (!seat) return fail('unauthorized', 'Unknown seat token.');
    if (seat !== 'S' && this.started && this.state.phase !== 'fullTime') return fail('match_in_progress', 'During a match, disconnect temporarily or ask Player 1 to archive and restart.');
    if (seat === 'S') this.spectators.delete(sha(token));
    else { this.seats[seat] = null; this._write({ k: 'release', seat, at: new Date().toISOString() }); }
    this._later(() => {
      for (const sub of [...this.subs]) if (sub.tokenHash === sha(token)) {
        sub.send({ type: 'error', code: 'seat_released', message: 'Your seat was released.' }); this.subs.delete(sub);
      }
    });
    this._presence();
    return { ok: true };
  }

  seatOf(token) {
    if (!token) return null;
    const h = sha(String(token));
    for (const s of ['A', 'B']) if (this.seats[s] && safeEq(this.seats[s].tokenHash, h)) return s;
    return this.spectators.has(h) ? 'S' : null;
  }

  // ---------------------------------------------------------------- start
  _begin(initial) {
    this.initial = clone(initial); this.state = clone(initial); this.rev = 0; this.cmds = [];
  }

  /** Player 1 (the host) hands in the match as built by the normal match set-up. The server replaces the dice seed with its own. */
  start({ token, state }) {
    const seat = this.seatOf(token);
    if (seat !== 'A') return fail('forbidden', 'Only Player 1 (the host) starts the match.');
    if (this.started) return fail('already_started', 'The match has already started.');
    const E = this.E;
    const errs = E.validateState(state);
    if (errs.length) return fail('bad_state', `The match state is not valid: ${errs.slice(0, 3).join('; ')}`);
    if (!state.match) return fail('bad_state', 'Only full matches can be played over the network (a match set-up with two teams).');
    if (state.log.length || state.phase !== 'pregame') return fail('bad_state', 'The match must be at its start (pre-game) with no recorded actions.');
    if (state.rulesEdition !== undefined && state.rulesEdition !== 'faq2026') return fail('bad_state', `Unsupported rules edition "${state.rulesEdition}".`);
    const c = this.compat({ protocol: PROTOCOL, rulesHash: this.fingerprint.rulesHash, engineVersion: this.fingerprint.version, editions: ['faq2026'] }); void c;
    const s = clone(state); s.rng = { seed: this.seedFn() >>> 0, counter: 0 };
    // The network match is played by two human seats: any computer-coach settings from the set-up are dropped (takeover by a coach needs the owner's permission and is not part of this release).
    if (s.match?.options) { delete s.match.options.computer; delete s.match.options.coaches; }
    this._begin(s);
    this._write({ k: 'start', initial: this.initial, at: new Date().toISOString() });
    this._broadcastSnapshots();
    return { ok: true, rev: this.rev };
  }

  // ---------------------------------------------------------------- commands
  owner() { return this.state ? this.E.waitingFor(this.state) : null; }

  /**
   * @param {{token: string, commandId: string, baseRev: number, kind: 'action'|'decision', input?: object, choice?: {requestId: string, optionId: string}}} c
   */
  command(c) {
    const seat = this.seatOf(c.token);
    if (!seat) return fail('unauthorized', 'Unknown seat token. Join the room first.');
    if (seat === 'S') return fail('spectator', 'Spectators cannot send commands.');
    if (!this.started) return fail('not_started', 'The match has not started yet.');
    if (typeof c.commandId !== 'string' || !/^[A-Za-z0-9_-]{6,64}$/.test(c.commandId)) return fail('bad_request', 'commandId must be 6-64 characters (letters, digits, - _).');
    const key = `${seat}:${c.commandId}`;
    const prior = this.acks.get(key);
    if (prior) return { ...prior, duplicate: true };
    if (c.baseRev !== this.rev) return fail('stale', `Your view is out of date (you sent revision ${c.baseRev}; the match is at ${this.rev}). Resynchronise and decide again.`, { rev: this.rev });
    const res = this._apply(seat, c.kind, c.input, c.choice, c.commandId, false);
    if (res.ok) { this.acks.set(key, { ok: true, rev: res.rev, status: res.status }); if (this.acks.size > MAX_PENDING_IDS) this.acks.delete(this.acks.keys().next().value); }
    return res;
  }

  _apply(seat, kind, input, choice, commandId, replaying, recordedAt) {
    const E = this.E;
    const s = this.state;
    if (s.phase === 'fullTime') return fail('game_over', 'The match is over.');
    if (kind === 'action' && input && input.kind === 'coachChange') return fail('forbidden', 'Coach changes are not available in network matches.');
    if (kind === 'decision' && !s.pending) return fail('no_decision', 'There is no decision pending.', { rev: this.rev });
    const owner = E.waitingFor(s);
    if (owner !== null && owner !== seat) return fail('not_your_turn', `It is ${s.teams[owner].name}'s ${s.pending ? 'decision' : 'move'} (Player ${owner === 'A' ? '1' : '2'}).`, { rev: this.rev, waitingFor: owner });
    let out;
    let title = '';
    if (kind === 'decision') {
      if (!s.pending) return fail('no_decision', 'There is no decision pending.', { rev: this.rev });
      if (!choice || typeof choice.requestId !== 'string' || typeof choice.optionId !== 'string') return fail('bad_request', 'A decision needs requestId and optionId.');
      out = E.decide(s, { requestId: choice.requestId, optionId: choice.optionId });
    } else if (kind === 'action') {
      if (s.pending) return fail('decision_pending', 'A decision must be answered first.', { rev: this.rev });
      if (!input || typeof input !== 'object' || typeof input.kind !== 'string') return fail('bad_request', 'An action needs an input.');
      if (input.kind === 'coachChange') return fail('forbidden', 'Coach changes are not available in network matches.');
      if (typeof input.team === 'string' && input.team !== seat) return fail('not_your_turn', 'That input is for the other coach.', { rev: this.rev });
      title = E.describeInput(s, input);
      out = E.execute(s, input);
    } else return fail('bad_request', 'kind must be "action" or "decision".');
    if (out.status === 'illegal') return fail('illegal', out.error ?? 'That is not allowed.', { rev: this.rev });
    const before = s;
    this.state = out.state; this.rev++;
    const rec = { k: 'cmd', rev: this.rev, seat, commandId, kind, ...(kind === 'decision' ? { choice } : { input }), at: recordedAt ?? new Date().toISOString() };
    if (!replaying) this._write(rec);
    this.cmds.push(rec);
    const logFrom = before.log.length;
    const update = {
      type: 'update', rev: this.rev, by: seat, status: out.status, title, isDecision: kind === 'decision',
      events: out.events ?? [], logFrom, logEntries: this.state.log.slice(logFrom), state: this._wire(this.state), waitingFor: E.waitingFor(this.state),
    };
    if (!replaying) this._broadcast(update);
    return { ok: true, rev: this.rev, status: out.status };
  }

  /** The state as sent in an update: public, and without the log (the receiver appends `logEntries` to the log it already has). */
  _wire(state) { const p = publicState(state); return { ...p, log: [] }; }

  // ---------------------------------------------------------------- views
  snapshot(seat) {
    const E = this.E;
    const st = this._txSnap ? this._txSnap.state : this.state; // the last durable state while a write is in flight
    const rev = this._txSnap ? this._txSnap.rev : this.rev;
    return {
      type: 'snapshot', protocol: PROTOCOL, room: this.id, seat, rev, started: !!st,
      seats: this.seatsView(), engine: { version: this.fingerprint.version, rulesHash: this.fingerprint.rulesHash },
      ...(st ? { state: publicState(st), waitingFor: E.waitingFor(st), over: st.phase === 'fullTime' } : {}),
    };
  }

  seatsView() {
    const connected = (s) => [...this.subs].some((x) => x.seat === s);
    return { A: this.seats.A ? { name: this.seats.A.name, connected: connected('A') } : null, B: this.seats.B ? { name: this.seats.B.name, connected: connected('B') } : null, spectators: [...this.subs].filter((x) => x.seat === 'S').length };
  }

  /** Register a live connection (SSE). Returns the snapshot to send first and an `unsubscribe`. */
  subscribe(token, send) {
    const seat = this.seatOf(token);
    if (!seat) return null;
    const sub = { seat, send, tokenHash: sha(token) };
    this.subs.add(sub);
    this._presence();
    return { snapshot: this.snapshot(seat), unsubscribe: () => { this.subs.delete(sub); this._presence(); } };
  }

  _broadcast(msg) { this._later(() => { for (const s of [...this.subs]) { try { s.send(msg); } catch { this.subs.delete(s); } } }); }
  _broadcastSnapshots() { this._later(() => { for (const s of [...this.subs]) { try { s.send(this.snapshot(s.seat)); } catch { this.subs.delete(s); } } }); }
  _presence() { this._later(() => { const m = { type: 'presence', seats: this.seatsView() }; for (const s of [...this.subs]) { try { s.send(m); } catch { this.subs.delete(s); } } }); }

  /** The canonical match history (verified by re-execution), or the reason there is none yet. */
  history({ partial = false } = {}) {
    if (!this.started) return fail('not_started', 'The match has not started.');
    if (this._txSnap) return fail('busy', 'The last move is being saved; try again in a moment.');
    // A canonical history carries the match's dice seed (that is what makes it verifiable). Handing it out mid-match would hand out the future
    // dice, so players get it only at full time. The host's journal on its own disk is the save/resume mechanism; `partial` is for the host process and tests.
    if (!partial && this.state.phase !== 'fullTime') return fail('not_finished', 'The verified history is available at full time (it contains the dice seed, which stays secret during the match).');
    const E = this.E;
    const mk = (t) => ({ controller: { kind: 'human' }, name: this.seats[t]?.name ?? this.state.teams[t].name });
    const r = E.toHistory(this.state, { source: 'multiplayer', initial: this.initial, participants: { A: { ...mk('A'), controller: { kind: 'human' } }, B: { ...mk('B'), controller: { kind: 'human' } } } });
    if (!r.ok) return fail('no_history', r.error);
    const out = { ok: true, text: E.serializeHistory(r.history), history: r.history };
    // at full time the export is fixed once, so both coaches (and any later download) get byte-identical files
    if (this.state.phase === 'fullTime') { if (this._finalHistory && this._finalHistory.rev === this.rev) return this._finalHistory.out; this._finalHistory = { rev: this.rev, out }; }
    return out;
  }
}

export function saveRoomCode(file, code) { writeFileSync(file, code + '\n', { mode: 0o600 }); }

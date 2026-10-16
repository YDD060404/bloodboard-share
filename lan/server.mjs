#!/usr/bin/env node
// Bloodboard match server for LAN (V7-05) and, behind a tunnel or port-forward, internet play (V7-12).
//
//   node lan/server.mjs [--port 8787] [--host 0.0.0.0|127.0.0.1] [--web ../web] [--code ABCD2345] [--journal-dir ./rooms] [--resume rooms/room-….jsonl]
//
// It serves the Bloodboard web app AND the match API from one origin, so another device only needs a browser pointed at the printed URL.
// HTTP + Server-Sent Events (no extra packages). One room per server process. Authority, ownership, idempotency and replay-safe journaling live
// in room.mjs. This server never touches the online-coach bridge, AI provider credentials, local files other than the web build and its own
// journal, and exposes no shell.
import http from 'node:http';
import { randomUUID } from 'node:crypto';
import https from 'node:https';
import os from 'node:os';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { dirname, extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PROTOCOL, Room, newCode } from './room.mjs';
import { fileStore, storeFromEnv } from './store.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.map': 'application/json' };

export async function createServer(opts = {}) {
  const engine = opts.engine ?? (await import(pathToFileUrl(opts.enginePath ?? join(here, 'engine.mjs'))));
  const code = (opts.code ?? newCode()).toUpperCase();
  let room;
  let mutationChain = Promise.resolve();
  let recoveryRequired = false;
  const mutate = (op) => { const p = mutationChain.then(op, op); mutationChain = p.then(() => undefined, () => undefined); return p; };
  const store = opts.store ?? null;
  let resumedFrom = null;
  if (store) {
    // hosted/cold-start path: the room lives in a durable store; a restart (or a free host waking from sleep) replays it
    const lines = await store.load();
    if (lines.length) { room = Room.resume({ engine, code, lines }); room.store = store; resumedFrom = `${store.label} (${lines.length} records, revision ${room.rev})`; }
    else { room = new Room({ engine, code, store, seed: opts.seed }); room.open(); const o = await room.tx(() => undefined); if (o && o.ok === false) throw new Error(o.message); }
  } else if (opts.resume) { room = Room.resume({ engine, code, journal: opts.resume }); resumedFrom = opts.resume; }
  else {
    const journal = opts.journalDir ? join(opts.journalDir, `room-${Date.now().toString(36)}.jsonl`) : null;
    room = new Room({ engine, code, journal, seed: opts.seed }); room.open();
  }
  const bootedAt = new Date().toISOString();
  const webDir = opts.webDir ? resolve(opts.webDir) : null;
  const sockets = new Set();
  const mode = opts.mode === 'internet' ? 'internet' : 'lan';
  const tls = opts.tls && opts.tls.key && opts.tls.cert ? opts.tls : null;
  const trustProxy = !!opts.trustProxy;
  const proxyHops = Math.max(1, opts.proxyHops ?? 1); // with a trusted proxy chain, the address added by the nearest proxy is the one believed (the client may forge earlier entries)
  const perMinute = opts.ratePerMinute ?? (mode === 'internet' ? 240 : 1200);
  const joinsPerMinute = opts.joinsPerMinute ?? (mode === 'internet' ? 20 : 60);
  const maxStreamsPerIp = opts.maxStreamsPerIp ?? 8;
  const idleMs = (opts.idleMinutes ?? (mode === 'internet' ? 360 : 0)) * 60_000;
  let lastActivity = Date.now(), expired = false;
  const hits = new Map(), joinHits = new Map(), streams = new Map();
  const clientIp = (req) => { if (trustProxy) { const parts = String(req.headers['x-forwarded-for'] ?? '').split(',').map((x) => x.trim()).filter(Boolean); const f = parts.length ? (proxyHops === 1 && !opts.proxyFirst ? parts[parts.length - 1] : parts[Math.max(0, parts.length - proxyHops)]) : ''; if (f) return f; } return req.socket.remoteAddress ?? '?'; };
  const over = (map, ip, limit) => { const now = Date.now(); const arr = (map.get(ip) ?? []).filter((t) => now - t < 60_000); arr.push(now); map.set(ip, arr); if (map.size > 5000) for (const [k, v] of map) if (!v.length || now - v[v.length - 1] > 60_000) map.delete(k); return arr.length > limit; };
  const isSecure = (req) => !!tls || (trustProxy && String(req.headers['x-forwarded-proto'] ?? '').split(',')[0].trim() === 'https');

  // Server authority owns the grace period, so closing every browser cannot strand finished seats.
  const graceMs = opts.completedGraceMs ?? 60_000;
  if (!Number.isFinite(graceMs) || graceMs <= 0) throw new Error('completedGraceMs must be positive.');
  const now = opts.now ?? Date.now;
  const reopenAt = () => room.completedAt === null ? null : room.completedAt + graceMs;
  async function archiveRoom(automatic = false) {
    const old = room;
    const activeStore = old.store;
    const fresh = new Room({ engine, code, seed: opts.seed });
    const resetId = randomUUID();
    let durableBefore = null;
    try {
      const header = JSON.stringify({ k: 'room', codeHash: fresh.codeHash, createdAt: fresh.createdAt, resetId, protocol: PROTOCOL, engine: fresh.fingerprint.version });
      // A durable replacement preserves the complete old journal before exposing fresh seats.
      // Store adapters reject an unsupported reset instead of falling back to delete/append.
      if (activeStore) {
        if (!activeStore.replaceJournal) throw new Error('This store does not support safe journal replacement.');
        const lines = await activeStore.load();
        const head = lines[0] ? JSON.parse(lines[0]) : null;
        if (!head || head.k !== 'room' || head.createdAt !== old.createdAt || head.codeHash !== old.codeHash) throw new Error('The durable room identity could not be confirmed.');
        // A resumed lobby can retain an older engine version in its original header.
        // Compare the actual durable journal, not that historical version to the running binary.
        durableBefore = [...lines];
        await activeStore.replaceJournal([header]);
      }
      fresh.store = activeStore;
      room = fresh; resumedFrom = null;
      old._broadcast({ type: 'error', code: 'room_reset', automatic, message: automatic ? 'Full time: the match was archived after one minute. Join again to start a fresh match.' : 'The host archived the old room. Join again to start a fresh match.' });
      return { status: 200, body: { ok: true, archived: !!activeStore } };
    } catch {
      // A failed response may follow a durable commit. Freeze writes if current storage cannot confirm the old room.
      try {
        const lines = activeStore ? await activeStore.load() : [];
        recoveryRequired = !!activeStore && (!durableBefore || lines.length !== durableBefore.length || lines.some((line, i) => line !== durableBefore[i]));
      } catch { recoveryRequired = true; }
      // Transport errors can be ambiguous after a durable commit. Do not claim nothing changed.
      return { status: 503, body: { ok: false, code: 'store_unavailable', message: 'The reset could not be confirmed. Your old journal is retained. Reconnect to check the room; if necessary ask the server owner to restart recovery.' } };
    }
  }
  let closing = false;
  async function closeFinishedRoom() {
    if (closing || recoveryRequired || expired || reopenAt() === null || now() < reopenAt()) return;
    closing = true;
    try {
      await mutate(async () => {
        // Recheck after pending writes/manual resets: never close a newer match or a live match.
        if (!recoveryRequired && !expired && reopenAt() !== null && now() >= reopenAt()) await archiveRoom(true);
      });
    } finally { closing = false; }
  }

  const send = (res, status, body, headers = {}) => {
    const text = typeof body === 'string' ? body : JSON.stringify(body);
    res.writeHead(status, { 'Content-Type': typeof body === 'string' ? 'text/plain; charset=utf-8' : 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', ...headers });
    res.end(text);
  };
  const readBody = (req, limit) => new Promise((ok, no) => {
    let n = 0, over = false; const chunks = [];
    req.on('data', (c) => { n += c.length; if (n > limit) { if (!over) { over = true; chunks.length = 0; no(Object.assign(new Error('payload too large'), { status: 413 })); } } else if (!over) chunks.push(c); });
    req.on('end', () => { try { ok(chunks.length ? JSON.parse(Buffer.concat(chunks).toString('utf8')) : {}); } catch { no(Object.assign(new Error('invalid JSON'), { status: 400 })); } });
    req.on('error', no);
  });
  const sameOrigin = (req) => { const o = req.headers.origin; if (!o) return true; try { return new URL(o).host === req.headers.host; } catch { return false; } };

  const server = (tls ? https.createServer(tls, handler) : http.createServer(handler));
  async function handler(req, res) {
    try {
      const url = new URL(req.url, 'http://x');
      res.setHeader('X-Frame-Options', 'DENY'); res.setHeader('Referrer-Policy', 'no-referrer');
      if (tls) res.setHeader('Strict-Transport-Security', 'max-age=31536000');
      const ip = clientIp(req);
      if (url.pathname.startsWith('/api/') && url.pathname !== '/api/ping') {
        if (expired) return send(res, 410, { ok: false, code: 'expired', message: 'This room expired after a long idle period. Ask the host to resume it from its journal.' });
        if (url.pathname !== '/api/events' && over(hits, ip, perMinute)) return send(res, 429, { ok: false, code: 'rate_limited', message: 'Too many requests from this address. Wait a minute.' }, { 'Retry-After': '60' });
        if (url.pathname === '/api/join' && over(joinHits, ip, joinsPerMinute)) return send(res, 429, { ok: false, code: 'rate_limited', message: 'Too many join attempts from this address. Wait a minute.' }, { 'Retry-After': '60' });
        lastActivity = Date.now();
      }
      if (!sameOrigin(req)) return send(res, 403, { ok: false, code: 'origin', message: 'Cross-origin requests are refused.' });
      if (url.pathname === '/api/ping') return send(res, 200, { bloodboardLan: true, application: 'Broadboard Online', roomLifecycle: 1, protocol: PROTOCOL, version: room.fingerprint.version, rulesHash: room.fingerprint.rulesHash, started: room.started, seats: room.seatsView(), room: room.id, mode, secure: isSecure(req), expired, recoveryRequired, idleMinutes: idleMs / 60_000, over: room.started && room.state.phase === 'fullTime', reopenAt: reopenAt(), rev: room.rev, store: store ? { kind: store.kind, durable: !!store.durable } : { kind: 'file', durable: false }, bootedAt, resumedFrom: resumedFrom ? true : false });
      if (recoveryRequired && url.pathname.startsWith('/api/') && url.pathname !== '/api/ping') return send(res, 503, { ok: false, code: 'recovery_required', message: 'Reset confirmation was interrupted. The journal is preserved; the owner must restart the server to recover its durable state.' });
      if (url.pathname === '/api/join' && req.method === 'POST') {
        const b = await readBody(req, 16_000);
        const r = await mutate(() => room.tx(() => room.join({ code: b.code, seat: b.seat, name: b.name, token: b.token, client: b.client })));
        return send(res, r.ok ? 200 : r.code === 'store_unavailable' ? 503 : r.code === 'locked' ? 429 : r.code === 'incompatible' ? 409 : 403, r);
      }
      if (url.pathname === '/api/start' && req.method === 'POST') {
        const b = await readBody(req, 8_000_000);
        const r = await mutate(() => room.tx(() => room.start({ token: b.token, state: b.state })));
        return send(res, r.ok ? 200 : r.code === 'store_unavailable' ? 503 : r.code === 'forbidden' ? 403 : 422, r);
      }
      if (url.pathname === '/api/command' && req.method === 'POST') {
        const b = await readBody(req, 64_000);
        const r = await mutate(() => room.tx(() => room.command(b)));
        const status = r.ok ? 200 : { store_unavailable: 503, unauthorized: 401, spectator: 403, not_your_turn: 403, stale: 409, illegal: 422, no_decision: 409, decision_pending: 409, game_over: 409, not_started: 409, bad_request: 400, forbidden: 403 }[r.code] ?? 400;
        return send(res, status, r);
      }
      if (url.pathname === '/api/reset' && req.method === 'POST') {
        const b = await readBody(req, 2_000);
        const result = await mutate(async () => {
          if (room.seatOf(b.token) !== 'A') return { status: 403, body: { ok: false, code: 'forbidden', message: 'Only Player 1 can archive and reopen this room.' } };
          const live = room.started && room.state.phase !== 'fullTime';
          if (live && b.abandon !== true) return { status: 409, body: { ok: false, code: 'match_in_progress', message: 'Confirm abandonment before reopening an unfinished match.' } };
          return archiveRoom();
        });
        return send(res, result.status, result.body);
      }
      if (url.pathname === '/api/leave' && req.method === 'POST') {
        const b = await readBody(req, 2_000);
        const r = await mutate(() => room.tx(() => room.release({ token: b.token })));
        return send(res, r.ok ? 200 : r.code === 'store_unavailable' ? 503 : r.code === 'match_in_progress' ? 409 : 401, r);
      }
      if (url.pathname === '/api/state') {
        const seat = room.seatOf(url.searchParams.get('token'));
        if (!seat) return send(res, 401, { ok: false, code: 'unauthorized', message: 'Unknown seat token.' });
        return send(res, 200, room.snapshot(seat));
      }
      if (url.pathname === '/api/history') {
        const seat = room.seatOf(url.searchParams.get('token'));
        if (!seat) return send(res, 401, { ok: false, code: 'unauthorized', message: 'Unknown seat token.' });
        const r = room.history();
        if (!r.ok) return send(res, 409, r);
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Content-Disposition': 'attachment; filename="bloodboard-lan-match.history.json"', 'Cache-Control': 'no-store' });
        return res.end(r.text);
      }
      if (url.pathname === '/api/events') {
        const token = url.searchParams.get('token');
        if ((streams.get(ip) ?? 0) >= maxStreamsPerIp) return send(res, 429, { ok: false, code: 'rate_limited', message: 'Too many open connections from this address.' }, { 'Retry-After': '10' });
        streams.set(ip, (streams.get(ip) ?? 0) + 1); res.on('close', () => streams.set(ip, Math.max(0, (streams.get(ip) ?? 1) - 1)));
        res.writeHead(200, { 'Content-Type': 'text/event-stream; charset=utf-8', 'Cache-Control': 'no-store', Connection: 'keep-alive', 'X-Accel-Buffering': 'no' });
        const write = (m) => res.write(`data: ${JSON.stringify({ ...m, reopenAt: reopenAt() })}\n\n`);
        const sub = room.subscribe(token, write);
        if (!sub) { write({ type: 'error', code: 'unauthorized', message: 'Unknown seat token.' }); return res.end(); }
        write(sub.snapshot);
        const beat = setInterval(() => { try { res.write(': keep-alive\n\n'); } catch { /* closed */ } }, 15_000);
        req.on('close', () => { clearInterval(beat); sub.unsubscribe(); });
        return undefined;
      }
      if (url.pathname.startsWith('/api/')) return send(res, 404, { ok: false, code: 'not_found', message: 'Unknown API route.' });
      // static web app
      if (!webDir) return send(res, 404, 'No web build is configured for this server (use --web).');
      let rel = normalize(decodeURIComponent(url.pathname)).replace(/^([/\\])+/, '');
      if (!rel || rel.endsWith(sep)) rel = join(rel, 'index.html');
      const file = resolve(webDir, rel);
      if (file !== webDir && !file.startsWith(webDir + sep)) return send(res, 403, 'Forbidden');
      if (!existsSync(file) || !statSync(file).isFile()) return send(res, 404, 'Not found');
      res.writeHead(200, { 'Content-Type': MIME[extname(file).toLowerCase()] ?? 'application/octet-stream', 'Cache-Control': 'no-cache' });
      return res.end(readFileSync(file));
    } catch (e) {
      if (e.status === 413) res.on('finish', () => req.destroy());
      send(res, e.status ?? 500, { ok: false, code: e.status === 413 ? 'too_large' : e.status === 400 ? 'bad_request' : 'server_error', message: e.status ? e.message : 'Internal error.' });
    }
  }
  server.headersTimeout = 15_000; server.requestTimeout = 30_000;
  const idleTimer = idleMs ? setInterval(() => { if (!expired && Date.now() - lastActivity > idleMs) { expired = true; room.close?.(); for (const sk of sockets) sk.destroy(); } }, 30_000) : null;
  idleTimer?.unref?.();
  const finishedTimer = setInterval(() => { void closeFinishedRoom().catch(() => undefined); }, opts.completedPollMs ?? 1000);
  finishedTimer.unref?.();
  server.on('connection', (s) => { sockets.add(s); s.on('close', () => sockets.delete(s)); });

  const listen = (port = opts.port ?? 0, host = opts.host ?? '127.0.0.1') => new Promise((ok, no) => { server.once('error', no); server.listen(port, host, () => ok(server.address().port)); });
  const close = () => new Promise((ok) => { if (idleTimer) clearInterval(idleTimer); clearInterval(finishedTimer); for (const s of sockets) s.destroy(); server.close(() => ok()); });
  return { get room() { return room; }, get reopenAt() { return reopenAt(); }, server, code, listen, close, mode, secure: !!tls, get expired() { return expired; }, expireNow: () => { expired = true; for (const sk of sockets) sk.destroy(); } };
}

function pathToFileUrl(p) { return new URL(`file://${resolve(p)}`).href; }

export function lanAddresses() {
  const out = [];
  for (const [name, list] of Object.entries(os.networkInterfaces())) for (const a of list ?? []) if (a.family === 'IPv4' && !a.internal) out.push({ name, address: a.address });
  return out;
}

// ------------------------------------------------------------------ CLI
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const flag = (n, d) => { const i = process.argv.indexOf(`--${n}`); return i > 0 ? process.argv[i + 1] : d; };
  const has = (n) => process.argv.includes(`--${n}`);
  // HOSTED (free hosting such as Render): the platform provides HTTPS and a $PORT; the disk is ephemeral, so a durable store and a fixed room code are REQUIRED.
  const hosted = has('hosted') || process.env.BLOODBOARD_HOSTED === '1' || process.env.RENDER === 'true';
  const mode = hosted ? 'internet' : flag('mode', 'lan');
  if (!['lan', 'internet'].includes(mode)) { console.error('--mode must be lan or internet'); process.exit(2); }
  // internet mode listens on loopback by default: it is meant to sit behind a tunnel / reverse proxy that provides TLS
  const host = flag('host', hosted ? '0.0.0.0' : mode === 'internet' ? '127.0.0.1' : '0.0.0.0');
  const certFile = flag('tls-cert'), keyFile = flag('tls-key');
  const tls = certFile && keyFile ? { cert: readFileSync(certFile), key: readFileSync(keyFile) } : null;
  const loopback = host === '127.0.0.1' || host === 'localhost' || host === '::1';
  if (mode === 'internet' && !loopback && !tls && !hosted && !has('allow-plain-http')) {
    console.error('Refusing to serve internet play over plain HTTP on a public address.\nUse --tls-cert/--tls-key, or keep --host 127.0.0.1 behind a TLS tunnel/reverse proxy (see docs/INTERNET.md), or pass --allow-plain-http if you accept that anyone on the path can read and alter the match.');
    process.exit(2);
  }
  const webDefault = [join(here, '..', 'web'), join(here, '..', 'dist', 'web')].find((d) => existsSync(join(d, 'index.html')));
  let code = flag('code'), store = null;
  if (hosted) {
    code = (process.env.BLOODBOARD_ROOM_CODE ?? '').trim().toUpperCase();
    if (!/^[A-Z0-9]{8,24}$/.test(code)) { console.error('Hosted mode needs BLOODBOARD_ROOM_CODE: 8-24 letters/digits (set it as a secret environment variable; share it only with your friends).'); process.exit(2); }
    try { store = storeFromEnv(process.env, { code, journalPath: join(here, 'rooms', 'hosted-room.jsonl') }); }
    catch (e) { console.error(`Recovery store configuration error: ${e.message}`); process.exit(2); }
    if (!store.durable && process.env.BLOODBOARD_ALLOW_EPHEMERAL !== '1') { console.error('Hosted mode refuses to run without a durable recovery store: this host loses its disk whenever it sleeps or restarts, which would silently lose active matches.\nSet UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN (free Upstash Redis; see docs/RENDER_FREE.md). To accept losing matches on restart, set BLOODBOARD_ALLOW_EPHEMERAL=1.'); process.exit(2); }
  }
  const publicUrl = flag('public-url', process.env.RENDER_EXTERNAL_URL);
  const srv = await createServer({ ratePerMinute: process.env.BLOODBOARD_RATE_PER_MINUTE ? Number(process.env.BLOODBOARD_RATE_PER_MINUTE) : undefined, joinsPerMinute: process.env.BLOODBOARD_JOINS_PER_MINUTE ? Number(process.env.BLOODBOARD_JOINS_PER_MINUTE) : undefined, mode, tls, trustProxy: hosted || has('trust-proxy'), idleMinutes: hosted ? 0 : flag('idle-minutes') ? Number(flag('idle-minutes')) : undefined, code, store, webDir: flag('web', webDefault), journalDir: hosted ? undefined : flag('journal-dir', join(here, 'rooms')), resume: hosted ? undefined : flag('resume') });
  const port = await srv.listen(Number(flag('port', process.env.PORT ?? '8787')), host);
  const scheme = tls ? 'https' : 'http';
  const addrs = loopback ? [{ name: 'loopback', address: host === '::1' ? '[::1]' : '127.0.0.1' }] : lanAddresses();
  const urls = addrs.map((a) => `${scheme}://${a.address}:${port}/`);
  console.log(`BLOODBOARD_LAN_READY ${JSON.stringify({ port, host, urls, publicUrl: publicUrl ?? null, mode, secure: !!tls, hosted, store: store ? store.kind : 'file', room: srv.room.id, protocol: PROTOCOL, version: srv.room.fingerprint.version, resumed: !!flag('resume') || (hosted && srv.room.started), revision: srv.room.rev })}`);
  if (hosted) {
    console.log(`\nBloodboard hosted match server ${srv.room.fingerprint.version}\n  Public address: ${publicUrl ?? '(set by the host platform)'}\n  Recovery store: ${store.label}${store.durable ? ' (sealed)' : ' (NOT durable)'}\n  Room state:     ${srv.room.started ? `match restored at revision ${srv.room.rev}` : 'no match yet'}\n`);
  } else {
  const where = mode === 'internet'
    ? `  Connection mode: INTERNET (${tls ? 'HTTPS on this server' : 'plain HTTP here — TLS must come from your tunnel/proxy'})\n  Local address:   ${urls.join('  ')}\n  Public address:  ${publicUrl ?? '(start your tunnel / port-forward and give Player 2 its https:// address; see docs/INTERNET.md)'}`
    : `  Connection mode: LAN (same network, plain HTTP)\n  Open on this computer and on the other device:\n${urls.map((u) => `    ${u}`).join('\n') || '    (no network address found; connect both devices to the same network)'}`;
  console.log(`\nBloodboard match server ${srv.room.fingerprint.version}\n  Room code:  ${srv.code}   (give this to Player 2 over a private channel; it is not stored in plain text)\n${where}\n  Player 1 (host) takes seat A, sets up the match and starts it; Player 2 joins with the code.\n  This server only serves the game and the match; it never exposes AI credentials, files or a shell. Stop it with Ctrl-C.\n`);
  }
  const stop = () => { void srv.close().then(() => process.exit(0)); };
  process.on('SIGINT', stop); process.on('SIGTERM', stop);
}

// Durable journal stores for the match room (V7-14: free hosting with an ephemeral disk).
//
// A store holds ONE ordered list of journal lines (strings) for the current room plus archived lists of finished rooms. The room appends a
// line only through `append`, and a command is acknowledged only after `append` resolved (see Room.tx in room.mjs): if a store cannot
// persist, the room refuses the command and nothing changes. No store silently drops a write.
//
//   fileStore(path)           the original behaviour (a JSONL file). Fine on a computer you own; LOST on free hosting that wipes its disk.
//   memoryStore()             tests only.
//   upstashStore({url,token}) Upstash Redis over its REST API (plain fetch, no npm package). Free tier: no card; data survives restarts.
//
// Every line is optionally sealed with AES-256-GCM (sealLine/openLine) so the store provider never sees dice seeds, teams or token hashes
// in clear text. The key is derived from the room code plus an optional BLOODBOARD_STORE_KEY; the code itself is never stored.
import { createCipheriv, createDecipheriv, createHash, randomBytes, randomUUID } from 'node:crypto';
import { appendFileSync, existsSync, mkdirSync, readFileSync, renameSync, writeFileSync, copyFileSync, unlinkSync, constants } from 'node:fs';
import { dirname } from 'node:path';

export const deriveKey = (code, extra = '') => createHash('sha256').update(`bloodboard-journal/1\n${String(code).toUpperCase()}\n${extra}`).digest();

export function sealLine(key, line) {
  const iv = randomBytes(12);
  const c = createCipheriv('aes-256-gcm', key, iv);
  const enc = Buffer.concat([c.update(line, 'utf8'), c.final()]);
  return `e1.${Buffer.concat([iv, c.getAuthTag(), enc]).toString('base64url')}`;
}
export function openLine(key, text) {
  if (!text.startsWith('e1.')) throw new Error('journal line is not sealed (unknown format)');
  const raw = Buffer.from(text.slice(3), 'base64url');
  const d = createDecipheriv('aes-256-gcm', key, raw.subarray(0, 12));
  d.setAuthTag(raw.subarray(12, 28));
  return Buffer.concat([d.update(raw.subarray(28)), d.final()]).toString('utf8');
}

/** The interface every store implements. `append` may be sync or async; `load` returns the lines of the current room (oldest first). */
export function fileStore(path) {
  return {
    kind: 'file', durable: false, label: `file ${path}`,
    append(lines) { mkdirSync(dirname(path), { recursive: true }); appendFileSync(path, lines.join('\n') + '\n'); },
    load() { return existsSync(path) ? readFileSync(path, 'utf8').split('\n').filter(Boolean) : []; },
    archive() { if (existsSync(path)) renameSync(path, `${path}.archived-${Date.now()}`); },
    replaceJournal(lines) {
      mkdirSync(dirname(path), { recursive: true });
      const id = randomUUID(), staged = `${path}.pending-${id}`, archive = `${path}.archived-${id}`;
      try {
        writeFileSync(staged, lines.join('\n') + '\n', { flag: 'wx', mode: 0o600 });
        if (existsSync(path)) copyFileSync(path, archive, constants.COPYFILE_EXCL);
        renameSync(staged, path);
      } finally { if (existsSync(staged)) unlinkSync(staged); }
    },
    async health() { return { ok: true }; },
  };
}

export function memoryStore() {
  const s = { kind: 'memory', durable: false, label: 'memory', lines: [], archives: [], failNext: 0, writes: 0,
    append(lines) { if (s.failNext > 0) { s.failNext--; throw new Error('simulated store outage'); } s.lines.push(...lines); s.writes++; },
    load() { return [...s.lines]; },
    archive() { s.archives.push(s.lines); s.lines = []; },
    replaceJournal(lines) { if (s.failNext > 0) { s.failNext--; throw new Error('simulated store outage'); } s.archives.push([...s.lines]); s.lines = [...lines]; },
    async health() { return { ok: true }; } };
  return s;
}

/** Upstash Redis REST. One list `<prefix>:current`; finished rooms are renamed to `<prefix>:archive:<time>` and expire after 30 days. */
export function upstashStore({ url, token, prefix = 'bloodboard:room', fetchImpl = globalThis.fetch, timeoutMs = 8000, retries = 2 }) {
  if (!url || !token) throw new Error('Upstash store needs UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN.');
  const base = url.replace(/\/+$/, '');
  const key = `${prefix}:current`;
  async function pipeline(cmds) {
    let last;
    for (let i = 0; i <= retries; i++) {
      try {
        const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), timeoutMs);
        const r = await fetchImpl(`${base}/multi-exec`, { method: 'POST', headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }, body: JSON.stringify(cmds), signal: ctl.signal });
        clearTimeout(t);
        const body = await r.json().catch(() => null);
        if (!r.ok) throw new Error(`Upstash HTTP ${r.status}${body?.error ? `: ${body.error}` : ''}`);
        if (!Array.isArray(body)) throw new Error('Upstash returned an unexpected answer');
        const bad = body.find((x) => x && x.error);
        if (bad) throw new Error(`Upstash error: ${bad.error}`);
        return body.map((x) => x.result);
      } catch (e) { last = e; if (i < retries) await new Promise((ok) => setTimeout(ok, 250 * (i + 1))); }
    }
    throw new Error(`recovery store unavailable: ${last?.message ?? last}`);
  }
  return {
    kind: 'upstash', durable: true, label: `Upstash Redis ${new URL(base).host}`,
    async append(lines) { await pipeline([['RPUSH', key, ...lines]]); },
    async load() { const [r] = await pipeline([['LRANGE', key, 0, -1]]); return Array.isArray(r) ? r : []; },
    async archive() { const stamp = Date.now(); await pipeline([['RENAMENX', key, `${prefix}:archive:${stamp}`], ['EXPIRE', `${prefix}:archive:${stamp}`, 30 * 86400]]); },
    async replaceJournal(lines) {
      const archive = `${prefix}:archive:reset-${randomUUID()}`;
      const script = `
        if redis.call('EXISTS', KEYS[2]) == 1 then
          local current = redis.call('LRANGE', KEYS[1], 0, -1)
          if #current ~= #ARGV then return redis.error_reply('reset confirmation mismatch') end
          for i = 1, #ARGV do if current[i] ~= ARGV[i] then return redis.error_reply('reset confirmation mismatch') end end
          return 1
        end
        if redis.call('EXISTS', KEYS[1]) == 1 then
          local kind = redis.call('TYPE', KEYS[1]).ok
          if kind ~= 'list' then return redis.error_reply('current journal is not a list') end
          redis.call('RENAME', KEYS[1], KEYS[2])
        end
        redis.call('RPUSH', KEYS[1], unpack(ARGV))
        return 1`;
      // One server-side operation, with an idempotent confirmation on transport retry. No archive expiry.
      const [result] = await pipeline([['EVAL', script, 2, key, archive, ...lines]]);
      if (result !== 1) throw new Error('Reset was not confirmed by the recovery store.');
    },
    async health() { try { await pipeline([['PING']]); return { ok: true }; } catch (e) { return { ok: false, error: e.message }; } },
  };
}

/** Wrap a store so every line is sealed on the way in and opened on the way out. */
export function sealedStore(inner, key) {
  return {
    ...inner, sealed: true,
    append(lines) { return inner.append(lines.map((l) => sealLine(key, l))); },
    load() { const r = inner.load(); const open = (ls) => ls.map((l) => openLine(key, l)); return r && typeof r.then === 'function' ? r.then(open) : open(r); },
    archive() { return inner.archive(); },
    replaceJournal: inner.replaceJournal ? (lines) => inner.replaceJournal(lines.map((l) => sealLine(key, l))) : undefined,
  };
}

/** Pick a store from the environment (hosted deployment). */
export function storeFromEnv(env = process.env, { code, journalPath } = {}) {
  const kind = (env.BLOODBOARD_STORE ?? (env.UPSTASH_REDIS_REST_URL ? 'upstash' : 'file')).toLowerCase();
  let inner;
  if (kind === 'upstash') inner = upstashStore({ url: env.UPSTASH_REDIS_REST_URL, token: env.UPSTASH_REDIS_REST_TOKEN, prefix: env.BLOODBOARD_STORE_PREFIX || 'bloodboard:room' });
  else if (kind === 'file') inner = fileStore(journalPath);
  else throw new Error(`BLOODBOARD_STORE must be "upstash" or "file" (got "${kind}").`);
  return inner.durable ? sealedStore(inner, deriveKey(code, env.BLOODBOARD_STORE_KEY ?? '')) : inner;
}

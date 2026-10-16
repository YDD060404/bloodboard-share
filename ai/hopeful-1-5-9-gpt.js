// Hopeful 1.5.9-GPT checkpoint candidate: option-preserving cycle replacement. Not a complete Drive-plan upgrade.
(function(){
/** Reply evidence for the existing bounded search. Critical costs retain
 * scoring/ball-loss checks and conservative proxies. They are not an exact
 * opponent-turn EV. Partial positional estimates may only hurt a comparison,
 * never establish a positive advantage or cancel a critical cost.
 */
const mass=x=>Number.isFinite(x)&&x>=0&&x<=1+1e-8 ? Math.min(x,1) : 0;
const negative=x=>Number.isFinite(x)?Math.min(0,x):0;
function replyEvidence(line) {
  const total=negative(line.replyAdjustment);
  const split=Number.isFinite(line.criticalReplyAdjustment)&&Number.isFinite(line.positionReplyAdjustment);
  return {observed:mass(line.observedReplyMass),complete:Math.min(mass(line.checkedReplyMass),mass(line.boundedReplyMass)),
    critical:split?negative(line.criticalReplyAdjustment):total,
    position:split?negative(line.positionReplyAdjustment):0,total,split};
}


// Same finite horizon is necessary even for heuristic comparisons. Do not
// compare one conditional own follow-up against immediate End. This does not
// certify identical discovered policies or complete opponent Turn coverage.
function selectorScope(line){
 const phases=new Set((line.reply || []).map(r=>
  ['after first action','first action failure/reply'].includes(r.stage)?'first-action':
  ['after examined follow-up','follow-up failure/reply'].includes(r.stage)?'conditional-follow-up':null));
 return phases.size===1&&!phases.has(null)?[...phases][0]:null;
}
function compareSelectorReplies(challenger,incumbent){
 const c=replyEvidence(challenger),i=replyEvidence(incumbent);
 const scope=selectorScope(challenger),sameScope=scope!==null&&scope===selectorScope(incumbent);
 const paired=c.split&&i.split&&sameScope&&c.observed>0&&i.observed>0;
 const bounded=paired&&c.complete>=1-1e-8&&i.complete>=1-1e-8;
 if(bounded)return {delta:c.total-i.total,bounded:true,mode:'bounded-relative',scope,
  challengerCritical:c.critical,incumbentCritical:i.critical,
  criticalDelta:c.critical-i.critical,positionDelta:c.position-i.position};
 if(paired){
  // The incumbent already has these costs. Charging only the challenger's
  // absolute cost biases the decision toward the incumbent, including a
  // riskier move. Preserve both costs explicitly; partial evidence earns no
  // positive reply credit and soft gains cannot cancel critical worsening.
  const criticalDelta=Math.min(0,c.critical-i.critical);
  const positionDelta=Math.min(0,c.position-i.position);
  return {delta:criticalDelta+positionDelta,bounded:false,mode:'partial-relative-no-positive-credit',scope,
   challengerCritical:c.critical,incumbentCritical:i.critical,criticalDelta,positionDelta,
   interpretation:'relative bounded-search estimates, not a proved safety advantage or complete Turn EV'};
 }
 return {delta:c.critical,bounded:false,mode:'critical-only-unmatched',scope,
  challengerCritical:c.critical,incumbentCritical:i.critical,criticalDelta:c.critical,positionDelta:0,
  interpretation:'missing or mismatched counterpart; no relative safety claim'};
}

const __evidenceRegister=c=>bloodboard.register({...c,id:'hopeful-1-5-9-gpt',name:'Hopeful 1.5.9-GPT',version:'1.5.9'});
/* Hopeful 1.5.9-GPT — Bloodboard V5.8 / Strategy API 1.2.
 * Tactical source: HOPEFUL_TACTICAL_FRAMEWORK.md (20 principles and six recorded games, 2026-10-01).
 * Engine odds and geometric estimates are explicitly separated. No RNG/hidden state.
 * The 60-second limit is a ceiling; search returns early when relevant work is covered.
 */
(function () {
  'use strict';
  const CFG = {
    timeLimitMs: 60000, searchShare: 0.80, maxSearchMs: 48000,
    shortlist: 15, deepen: 4, preparation: 4, replies: 3,
    turnover: 62, carrierTurnover: 95, optionalRush: 12,
    touchdown: 1500, possession: 160, opponentScore: 480,
    carrierDown: 110, carrierCrowd: 180, unresolved: 120,
    thresholds: { attackerOneDie: 0.90, attackerTwoDice: 0.95 }
  };
  const other = t => t === 'A' ? 'B' : 'A';
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const num = (x, d = 0) => Number.isFinite(x) ? x : d;
  const has = (p, s) => (p?.skills || []).some(x => x === s || x.startsWith(s + '('));
  const dist = (a, b) => a && b ? Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y)) : 99;
  const sqKey = p => `${p.x},${p.y}`;
  const find = (o, id) => o.players.find(p => p.id === id);
  const onPitch = p => p?.location === 'pitch' && !!p.pos;
  const standing = p => onPitch(p) && p.stance === 'standing';
  const tz = p => standing(p) && p.tackleZone !== false && !p.distracted;
  const holder = o => o.ball?.kind === 'held' ? find(o, o.ball.playerId) : null;
  const goal = (o, t) => o.pitch?.endZone?.[t] ?? (t === 'A' ? 25 : 0);
  const height = o => o.pitch?.height ?? (o.format === 'sevens' ? 11 : 15);
  const width = o => o.pitch?.width ?? (o.format === 'sevens' ? 20 : 26);
  const goalDist = (o, t, p) => Math.abs(goal(o, t) - p.x);
  const edge = (o, p) => Math.min(p.y, height(o) - 1 - p.y);
  const crowdEdge = (o, p) => Math.min(edge(o, p), p.x, width(o) - 1 - p.x);
  const usefulSkill = p => ['block', 'dodge', 'guard', 'standFirm', 'sidestep'].filter(s => has(p, s)).length;
  const unreliable = p => ['boneHead', 'reallyStupid', 'unchannelledFury', 'animalSavagery', 'takeRoot', 'bloodlust'].filter(s => has(p, s)).length;
  const round = x => Math.round(num(x) * 1000) / 1000;
  const available = (o, p) => onPitch(p) && p.stance !== 'stunned' &&
    (o.activation?.playerId === p.id && !o.activation.over || !p.activated && p.canBeActivated !== false);
  const movementLeft = (o, p) => {
    if (o.active !== p.team || !available(o, p) || p.rooted) return 0;
    const used = o.activation?.playerId === p.id ? num(o.activation.maUsed) : p.stance === 'prone' ? 3 : 0;
    return Math.max(0, p.ma - used);
  };
  const destOf = c => c.destination || c.input?.path?.at(-1)?.to || null;
  const valueCache = new WeakMap(), routeCache = new WeakMap();

  function heapPush(heap, row) {
    let i = heap.length; heap.push(row);
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (heap[parent][0] <= row[0]) break;
      heap[i] = heap[parent]; i = parent;
    }
    heap[i] = row;
  }
  function heapPop(heap) {
    const root = heap[0], last = heap.pop();
    if (!heap.length) return root;
    let i = 0;
    while (i * 2 + 1 < heap.length) {
      let child = i * 2 + 1;
      if (child + 1 < heap.length && heap[child + 1][0] < heap[child][0]) child++;
      if (last[0] <= heap[child][0]) break;
      heap[i] = heap[child]; i = child;
    }
    heap[i] = last; return root;
  }

  function zones(o, team) {
    const m = new Map();
    for (const p of o.players.filter(p => p.team === team && tz(p))) {
      for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) {
        if (!dx && !dy) continue;
        const c = { x: p.pos.x + dx, y: p.pos.y + dy };
        m.set(sqKey(c), (m.get(sqKey(c)) || 0) + 1);
      }
    }
    return m;
  }

  // A bounded geometric path measure, NOT a probability. Actual execution uses engine paths.
  // Occupied cells and Tackle Zones affect the corridor; this distinguishes screening from chasing.
  function corridor(o, team, carrier, approach = false) {
    if (!carrier?.pos) return { cost: 0, extra: 0, path: [] };
    let cached = routeCache.get(o);
    if (!cached) { cached = new Map(); routeCache.set(o, cached); }
    const cacheKey = `${team}:${carrier.id}:${approach ? 'approach' : 'score'}`;
    if (cached.has(cacheKey)) return cached.get(cacheKey);
    const w = width(o), h = height(o), n = w * h;
    const start = carrier.pos.y * w + carrier.pos.x, gx = goal(o, team);
    const ballCarrier = approach ? holder(o) : null;
    const blocked = new Set(o.players.filter(p => onPitch(p) && p.id !== carrier.id).map(p => sqKey(p.pos)));
    const z = zones(o, other(team));
    const costs = Array(n).fill(Infinity), parents = Array(n).fill(-1), heap = [];
    costs[start] = 0;
    heapPush(heap, [0, start]);
    let end = -1;
    while (heap.length) {
      const [best, at] = heapPop(heap);
      if (best !== costs[at]) continue;
      const x = at % w, y = Math.floor(at / w);
      if (approach ? ballCarrier?.pos && dist({ x, y }, ballCarrier.pos) === 1 : x === gx) { end = at; break; }
      if (approach && best > carrier.ma + 6) break;
      for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) {
        if (!dx && !dy) continue;
        const nx = x + dx, ny = y + dy;
        if (nx < 0 || nx >= w || ny < 0 || ny >= h || blocked.has(`${nx},${ny}`)) continue;
        const idx = ny * w + nx;
        const markings = z.get(`${nx},${ny}`) || 0;
        const leaving = z.get(`${x},${y}`) || 0;
        const cost = 1 + (leaving ? 2.5 + markings : markings * 0.65) +
          (ny === 0 || ny === h - 1 ? 1.8 : 0) + Math.abs(dy) * 0.015 +
          ((team === 'A' && dx < 0) || (team === 'B' && dx > 0) ? 0.05 : 0);
        const next = best + cost;
        if (next < costs[idx]) { costs[idx] = next; parents[idx] = at; heapPush(heap, [next, idx]); }
      }
    }
    const path = [];
    if (end >= 0) for (let at = end; at !== start && at >= 0; at = parents[at]) path.push({ x: at % w, y: Math.floor(at / w) });
    path.reverse();
    const base = approach ? Math.max(0, dist(carrier.pos, ballCarrier?.pos) - 1) : goalDist(o, team, carrier.pos);
    const cost = end < 0 ? base + 24 : costs[end];
    const result = { cost, extra: Math.max(0, cost - base), path, closedInStaticBoard: end < 0 };
    cached.set(cacheKey, result); return result;
  }

  // Screening is valued by the approach routes it obstructs. These weighted
  // distances are geometric estimates; exact Blitz odds still come from the engine.
  function pressure(o, carrier) {
    const foes = o.players.filter(p => p.team !== carrier.team && standing(p) && !p.rooted)
      .filter(p => dist(p.pos, carrier.pos) <= p.ma + 5)
      .sort((a, b) => dist(a.pos, carrier.pos) - dist(b.pos, carrier.pos)).slice(0, 4);
    let access = 0;
    for (const q of foes) {
      const route = corridor(o, q.team, q, true);
      access += clamp((q.ma + 3 - route.cost) / Math.max(1, q.ma + 3), 0, 1) *
        (1 + Math.max(0, q.st - carrier.st) * 0.25);
    }
    return { access, attackers: foes.length };
  }

  function outcomeValue(ex, me, baseline) {
    let value = 0, known = 0;
    for (const out of ex.outcomes || []) if (out.observation) {
      value += out.p * boardValue(out.observation, me); known += out.p;
    }
    const missing = clamp(1 - known, 0, 1);
    const unknown = clamp(Math.max(num(ex.unresolvedMass), num(ex.rest?.p), missing), 0, 1);
    return { value: value + missing * baseline, unknown, known };
  }

  // A straggler can become useful next Turn without reaching the ball now.
  // Support slots follow the attack/defense corridor, rather than one pile on the ball.
  function supportSlots(o, team) {
    const car = holder(o), at = car?.pos || (o.ball.kind === 'ground' ? o.ball.pos : null);
    if (!at) return [];
    const slots = [];
    const add = c => { if (c.x >= 0 && c.x < width(o) && c.y > 0 && c.y < height(o) - 1) slots.push(c); };
    const forward = team === 'A' ? 1 : -1;
    const attacking = car?.team === team;
    for (const dx of attacking ? [0, 2, 4] : [-2, 0, 2]) for (const dy of [-2, 2])
      add({ x: at.x + (attacking ? forward * dx : dx), y: at.y + dy });
    // Rear protection needs an actual rear approach, not an obligatory cage corner.
    if (attacking && o.players.some(p => p.team !== team && tz(p) &&
      (p.pos.x - at.x) * forward < 0 && dist(p.pos, at) <= p.ma + 3))
      for (const dy of [-2, 2]) add({ x: at.x - forward * 2, y: at.y + dy });
    if (car) for (const c of corridor(o, car.team, car).path.slice(0, car.ma + 2)) {
      add({ x: c.x, y: c.y - 2 }); add({ x: c.x, y: c.y + 2 });
    }
    // Cover genuine downfield receivers on defense as well as the ball route.
    if (car?.team !== team) for (const q of o.players.filter(p => p.team !== team && standing(p) &&
      goalDist(o, p.team, p.pos) <= p.ma + 2)) {
      for (const dy of [-1, 1]) add({ x: q.pos.x, y: q.pos.y + dy });
    }
    return slots;
  }
  const supportDistance = (slots, pos) => slots.reduce((best, c) => Math.min(best,
    dist(c, pos) + Math.abs(c.y - pos.y) * 0.1), 99);
  const pushSquares = (from, to) => {
    const dx = Math.sign(to.x - from.x), dy = Math.sign(to.y - from.y);
    return dx && dy ? [{ x: to.x + dx, y: to.y + dy }, { x: to.x + dx, y: to.y }, { x: to.x, y: to.y + dy }] :
      dx ? [-1, 0, 1].map(y => ({ x: to.x + dx, y: to.y + y })) :
      [-1, 0, 1].map(x => ({ x: to.x + x, y: to.y + dy }));
  };
  const inside = (o, p) => p.x >= 0 && p.x < width(o) && p.y >= 0 && p.y < height(o);
  const occupant = (o, pos, except) => o.players.find(p => onPitch(p) && p.id !== except && sqKey(p.pos) === sqKey(pos));
  function forcedSurf(o, attacker, defender, from = attacker?.pos, blitz = false) {
    if (!from || !defender?.pos || defender.rooted || dist(from, defender.pos) !== 1) return false;
    if (has(defender, 'standFirm') && !(blitz && has(attacker, 'juggernaut'))) return false;
    if (has(defender, 'sidestep') && !has(attacker, 'grab')) return false;
    const squares = pushSquares(from, defender.pos);
    return squares.some(c => !inside(o, c)) && !squares.some(c => inside(o, c) && !occupant(o, c));
  }

  // Pending push options are authoritative; chain continuation is a bounded
  // geometry estimate, NOT an injury or throw-in probability calculation.
  function pushProjection(o, attacker, from, victim, to, depth = 0) {
    if (!victim?.pos || depth > 4 || victim.rooted) return null;
    const clone = { ...o, players: o.players.map(p => ({ ...p, pos: p.pos && { ...p.pos } })), ball: { ...o.ball } };
    const v = find(clone, victim.id), old = { ...v.pos };
    if (!inside(clone, to)) {
      v.location = 'reserves'; v.pos = null;
      if (clone.ball.kind === 'held' && clone.ball.playerId === v.id) clone.ball = { kind: 'ground', pos: old };
      return clone;
    }
    const occ = occupant(clone, to, v.id);
    if (occ) {
      const jugg = has(attacker, 'juggernaut') && o.activation?.action === 'blitz' && occ.team !== attacker.team;
      if (occ.rooted || has(occ, 'standFirm') && !jugg) return null;
      let squares = pushSquares(old, occ.pos);
      const sidestep = has(occ, 'sidestep') && !(has(attacker, 'grab') && occ.team !== attacker.team);
      const free = [];
      if (sidestep) for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) {
        const c = { x: occ.pos.x + dx, y: occ.pos.y + dy };
        if ((dx || dy) && inside(clone, c) && !occupant(clone, c)) free.push(c);
      }
      if (free.length) squares = free;
      else {
        const empty = squares.filter(c => inside(clone, c) && !occupant(clone, c));
        if (empty.length) squares = empty;
        else if (squares.some(c => !inside(clone, c))) squares = squares.filter(c => !inside(clone, c)).slice(0, 1);
        else squares = squares.filter(c => inside(clone, c));
      }
      const projected = squares.map(c => pushProjection(clone, attacker, old, occ, c, depth + 1)).filter(Boolean);
      if (!projected.length) return null;
      projected.sort((a, b) => (sidestep && occ.team !== o.team ? -1 : 1) * (boardValue(b, o.team) - boardValue(a, o.team)));
      const after = projected[0]; find(after, victim.id).pos = { ...to }; return after;
    }
    v.pos = { ...to }; return clone;
  }

  function boardValue(o, me) {
    let cached = valueCache.get(o);
    if (cached?.has(me)) return cached.get(me);
    const opp = other(me), car = holder(o);
    const ours = o.players.filter(p => p.team === me && onPitch(p));
    const theirs = o.players.filter(p => p.team === opp && onPitch(p));
    let v = CFG.touchdown * ((o.score?.[me] || 0) - (o.score?.[opp] || 0));
    v += 1.2 * ((o.rerolls?.[me] || 0) - (o.rerolls?.[opp] || 0));
    const ballAt = car?.pos || (o.ball?.kind === 'ground' ? o.ball.pos : null);
    const slots = ballAt ? supportSlots(o, me) : [];
    // Positive readiness credit avoids rewarding the removal of a remote teammate.
    // Saturates before contact: no incentive to pile everyone adjacent to the ball.
    for (const p of ours) if (standing(p) && !p.rooted && p.id !== car?.id && slots.length)
      v += Math.max(0, width(o) - Math.max(3, supportDistance(slots, p.pos))) * 0.8;
    // Value next-Turn activity, not only the carrier. This is a role-weighted
    // heuristic; real Block result states determine whether a screen is lost.
    const activity = p => (10 + Math.min(p.st, 5) + usefulSkill(p) * 1.5) *
      (p.stance === 'standing' ? 1 : p.stance === 'prone' ? 0.55 : 0.25);
    v += ours.reduce((sum, p) => sum + activity(p), 0) - theirs.reduce((sum, p) => sum + activity(p), 0);
    // Useful standing players and connected coverage; no bonus for contacting irrelevant enemies.
    for (const p of ours) if (standing(p)) {
      const relevant = ballAt ? dist(p.pos, ballAt) <= 8 : true;
      v += relevant ? 3 + Math.min(p.st, 5) * 0.3 : 1;
      if (crowdEdge(o, p.pos) === 0 && theirs.some(q => tz(q) && dist(q.pos, p.pos) <= 2)) v -= 3;
      if (crowdEdge(o, p.pos) <= 1 && theirs.some(q => tz(q) && forcedSurf(o, q, p))) v -= 18 + usefulSkill(p) * 2;
    }
    for (const p of theirs) if (standing(p)) v -= ballAt && dist(p.pos, ballAt) <= 8 ? 2.5 : 0.6;
    if (car?.team === me && car.pos) {
      v += CFG.possession + (width(o) - 1 - goalDist(o, me, car.pos)) * 10;
      // Carrier role is useful only with a delivery schedule. Strength alone
      // must not make a slow lineman preferable to a reliable scoring receiver.
      v += car.ma * 2 + (7 - car.ag) * 1.2 + (has(car, 'sureHands') ? 3 : 0) +
        (has(car, 'dodge') ? 2 : 0) - unreliable(car) * 4;
      const guards = ours.filter(p => p.id !== car.id && tz(p));
      const close = guards.filter(p => dist(p.pos, car.pos) <= 2);
      // Cover actual approach directions. An empty backfield does not justify
      // keeping two men behind the carrier simply to complete an X.
      const threats = theirs.filter(p => tz(p) && dist(p.pos, car.pos) <= p.ma + 3);
      const sectors = new Map();
      for (const q of threats) {
        const angle = Math.round(Math.atan2(q.pos.y - car.pos.y, q.pos.x - car.pos.x) * 4 / Math.PI);
        const protectedBy = guards.filter(p => dist(p.pos, car.pos) <= 5 &&
          dist(p.pos, q.pos) < dist(car.pos, q.pos) &&
          dist(p.pos, q.pos) + dist(p.pos, car.pos) <= dist(car.pos, q.pos) + 2);
        sectors.set(angle, Math.max(sectors.get(angle) || 0, Math.min(2, protectedBy.length)));
      }
      v += [...sectors.values()].reduce((sum, n) => sum + n * 2.8, 0);
      const markers = theirs.filter(p => tz(p) && dist(p.pos, car.pos) === 1);
      v -= 10 * markers.length;
      // An outer screen matters even when it is not adjacent to the carrier.
      // Same-side piles do not magically protect every opponent approach.
      v -= pressure(o, car).access * 6;
      v -= edge(o, car.pos) === 0 ? 23 : edge(o, car.pos) === 1 ? 6 : 0;
      const lane = corridor(o, me, car);
      v -= Math.min(20, lane.extra) * 1.2;
      const remaining = Math.max(0, o.turnsPerHalf - (o.turn?.[me] || 0) + (o.active === me ? 1 : 0));
      const futureTurns = Math.max(0, o.turnsPerHalf - (o.turn?.[me] || 0));
      const currentMove = movementLeft(o, car);
      const deliveryBudget = car.ma * futureTurns + currentMove;
      // Secure ends the activation. A used carrier cannot be credited with a
      // fresh full MA this Turn; a real hand-off receiver can still spend its MA.
      const scoringSlack = deliveryBudget - goalDist(o, me, car.pos);
      v -= clamp(-scoringSlack, 0, 25) * 9;
      v -= clamp(lane.cost - deliveryBudget, 0, 20) * 2.5;
      if (o.active === me && available(o, car)) v += currentMove * 0.4;
      // A forward lane needs protectors who can accompany it, not a stationary cross cage.
      for (const p of guards) {
        const toLane = lane.path.slice(0, Math.max(2, car.ma)).reduce((d, c) => Math.min(d, dist(c, p.pos)), 99);
        if (toLane <= 2) v += (3 - toLane) * 0.7;
      }
      v -= unreliable(car) * 2;
    } else if (car?.team === opp && car.pos) {
      v -= CFG.possession + (width(o) - 1 - goalDist(o, opp, car.pos)) * 2.4;
      const lane = corridor(o, opp, car);
      v += Math.min(20, lane.extra) * 4;
      const ownZ = zones(o, me);
      const likely = lane.path.slice(0, Math.max(3, car.ma));
      for (const p of ours.filter(tz)) {
        const d = likely.reduce((best, c) => Math.min(best, dist(c, p.pos)), 99);
        // Intercept the forward route and its ends. Do not reward a defensive cage around our own irrelevant player.
        if (d <= 2) v += (3 - d) * 2;
        const prog = opp === 'A' ? p.pos.x - car.pos.x : car.pos.x - p.pos.x;
        if (prog >= 1 && prog <= car.ma + 2 && Math.abs(p.pos.y - car.pos.y) <= 4) v += 1.6;
      }
      if (goalDist(o, opp, car.pos) <= car.ma + 2) v -= 35 / (1 + lane.extra * 0.15);
      v += (ownZ.get(sqKey(car.pos)) || 0) * 3;
    } else if (ballAt) {
      const dOurs = ours.reduce((best, p) => Math.min(best, dist(p.pos, ballAt)), 99);
      const dTheirs = theirs.reduce((best, p) => Math.min(best, dist(p.pos, ballAt)), 99);
      v += clamp(dTheirs - dOurs, -12, 12) * 4;
      v += Math.min(3, ours.filter(p => tz(p) && dist(p.pos, ballAt) <= 1).length) * 5;
      v -= Math.min(3, theirs.filter(p => tz(p) && dist(p.pos, ballAt) <= 1).length) * 5;
    }
    if (!cached) { cached = new Map(); valueCache.set(o, cached); }
    cached.set(me, v); return v;
  }

  function projected(o, c) {
    const dst = destOf(c), actor = find(o, c.actorId), target = find(o, c.targetId);
    const clone = { ...o, players: o.players.map(p => ({ ...p, pos: p.pos && { ...p.pos } })), ball: { ...o.ball } };
    const p = actor && find(clone, actor.id);
    if (p && dst && (!['pass', 'handoff'].includes(c.family) || c.input.path?.length)) p.pos = { ...(c.input.path?.length ? c.input.path[c.input.path.length-1].to : dst) };
    if (p && c.kind === 'standUp') { p.stance = 'standing'; p.tackleZone = true; }
    if (p && ['pickup', 'secure'].includes(c.kind)) clone.ball = { kind: 'held', playerId: p.id };
    if (target && ['pass', 'handoff'].includes(c.family)) clone.ball = { kind: 'held', playerId: target.id };
    return clone;
  }

  function cheapScore(o, c, me, rootValue) {
    const p = find(o, c.actorId), target = find(o, c.targetId), car = holder(o);
    let score = boardValue(projected(o, c), me) - rootValue;
    if (c.builtIn != null) score += clamp(c.builtIn, -30, 30) * 0.22;
    score += num(c.pTouchdown) * CFG.touchdown;
    score -= num(c.pTurnover) * (car?.team === me ? CFG.carrierTurnover : CFG.turnover);
    if (['block', 'blitz', 'special', 'foul'].includes(c.family) && target?.pos) {
      const relevant = target.id === car?.id || (car && dist(target.pos, car.pos) <= 3) ||
        (o.ball.kind === 'ground' && dist(target.pos, o.ball.pos) <= 3);
      score += relevant ? target.id === car?.id ? 26 : 8 : -9;
      if (c.family === 'foul') score -= relevant ? 10 : 28;
      if (['block', 'blitz'].includes(c.family) && forcedSurf(o, p, target, destOf(c) || p?.pos, c.family === 'blitz')) score += 18;
    }
    if (c.kind === 'standUp') score += 2;
    const rushes = c.rushes ?? Math.max(0, (c.input.path?.length || 0) - (p?.ma || 6));
    if (rushes > 0 && !num(c.pTouchdown) && c.kind !== 'score') score -= rushes * CFG.optionalRush;
    if (c.family === 'endTurn') score = -1;
    if (c.family === 'endActivation') score = -0.1;
    return score;
  }

  function canonical(c, observation) {
    if (!c?.input || c.legal === false) return null;
    const p = c.input;
    const family = c.family || (p.kind === 'playerAction' ? p.action : p.kind);
    // Legacy exact transfer records omit targetId. Recover the receiver from
    // the legal input, so cheap ranking sees the actual prospective carrier.
    const actor = observation?.players && find(observation,p.playerId);
    const receiver = family === 'pass' && actor && p.passTarget ?
      observation.players.find(q => q.team === actor.team && q.id !== actor.id &&
        standing(q) && sqKey(q.pos) === sqKey(p.passTarget)) : null;
    return { ...c, family, actorId: c.actorId ?? c.playerId ?? p.playerId ?? null,
      targetId: c.targetId ?? p.handoffTarget ?? receiver?.id ?? p.blockTarget ?? p.blitzTarget ?? p.specialTarget ?? p.foulTarget ?? null,
      builtIn: c.builtInValue ?? c.builtIn?.builtInValue ?? null };
  }

  async function chooseAction(o, legacy, sv) {
    const start = Date.now(), me = o.team, opp = other(me);
    const budget = Math.max(300, Math.min(CFG.maxSearchMs, (o.timeLimitMs || CFG.timeLimitMs) * CFG.searchShare));
    const left = () => budget - (Date.now() - start);
    const big = budget >= 20000;
    const trace = { coach: 'Hopeful 1.5.9-GPT', objective: '', drivePlan: o.drivePlan || null, safetyTargets: CFG.thresholds,
      scope: 'bounded own preparation / opponent reply / next-turn opportunity; not a full three-turn solution',
      geometricEstimates: true, search: { budgetMs: budget, calls: 0, errors: [], incomplete: 0 }, lines: [] };
    const explored = new Map();
    const call = async fn => {
      if (left() < 180) return null;
      trace.search.calls++;
      try { const r = await fn(); if (r?.ok === false) { trace.search.errors.push(r.code); return null; }
        if (r?.exact === false || num(r?.unresolvedMass) > 0) trace.search.incomplete++; return r;
      } catch (e) { trace.search.errors.push(String(e).slice(0, 100)); return null; }
    };
    const note = async (stage, headline, extra = {}) => {
      // Presentation cannot invalidate an otherwise legal coach answer.
      if (typeof sv.progress === 'function') try { await sv.progress({ stage, headline, ...extra }); }
      catch (e) { trace.search.errors.push('progress: ' + String(e).slice(0, 80)); }
    };
    const capMs = (max = 800) => Math.max(100, Math.min(max, left() - 200));
    const explore = (input, opts) => {
      const { maxMs, ...policy } = opts;
      const key = JSON.stringify([input, policy]);
      if (explored.has(key)) { trace.search.cacheHits = (trace.search.cacheHits || 0) + 1; return explored.get(key); }
      const pending = call(() => sv.explore(input, opts)).then(r => {
        // A partial or failed result cannot poison a later request with a
        // larger time allowance. Only reusable completed evidence is retained.
        if (!r?.ok || r.exact === false || outcomeValue(r, me, 0).unknown > 1e-8) explored.delete(key);
        return r;
      });
      explored.set(key, pending); return pending;
    };
    const rootValue = boardValue(o, me), car = holder(o);
    const incumbentInput = o.builtInChoice?.endTurn ? { kind: 'endTurn' } :
      legacy.find(c => c.id === o.builtInChoice?.candidateId)?.input;
    const fallback = reason => {
      trace.selection = { incumbent: incumbentInput, override: false, intentionalFallback: true, reason };
      trace.search.elapsedMs = Date.now() - start;
      return incumbentInput ? { input: incumbentInput, why: `Hopeful 1.5.9-GPT: retain the built-in incumbent (${reason}).`, trace } : null;
    };
    trace.incumbent = incumbentInput;
    const lastTurn = (o.turn?.[me] || 0) >= o.turnsPerHalf;
    const protectingLead = (o.score?.[me] || 0) > (o.score?.[opp] || 0);
    trace.objective = lastTurn && protectingLead ? 'protect lead / deny opponent final score' : lastTurn ? 'last scoring opportunity' : car?.team === me ? 'protected advance' : car?.team === opp ? 'deny route / recover ball' : 'secure loose ball';
    const pool = new Map();
    const add = c => { const x = canonical(c,o); if (x) {
      const p = find(o, x.actorId);
      // Rooted movement is a legal engine no-op, not a zero-risk pickup.
      if (p?.rooted && (x.input.path?.length || 0) > 0) return;
      const k = JSON.stringify(x.input), old = pool.get(k);
      x.movementCycle = movementCycle(o,x.input,o.movementMemory);
      if (x.movementCycle && k !== JSON.stringify(incumbentInput)) { trace.search.cyclesRejected = (trace.search.cyclesRejected || 0) + 1; return; }
      if (!old || (old.pTurnover == null && x.pTurnover != null)) pool.set(k, x);
    } };
    legacy.forEach(add);
    add({ input: { kind: 'endTurn' }, kind: 'endTurn', label: 'End the Turn', pTurnover: 0, pTouchdown: 0 });
    if (o.activation && !o.activation.over) add({ input: { kind: 'endActivation' }, kind: 'endActivation', label: 'End the activation', pTurnover: 0 });
    const fetch = async (opts, pages = 1) => {
      const result = [];
      let offset = 0;
      for (let page = 0; page < pages && left() > budget * 0.52; page++) {
        const r = await call(() => sv.candidates({ precision: 'none', limit: 100, maxMs: capMs(), offset, ...opts }));
        if (!r) break;
        for (const c of r.candidates || []) { add(c); result.push(c); }
        if (!r.hasMore || r.nextOffset === offset) break;
        offset = r.nextOffset;
      }
      return result;
    };
    await note('objective', `Objective: ${trace.objective}. Checking complete routes, ball safety and useful stand-ups.`);
    await fetch({ families: ['standUp', 'ttm', 'special', 'endActivation'] });
    // Reserve normal pickups and transfers separately: a global prefix of
    // Secure actions must not crowd out the more mobile alternative.
    if (o.ball.kind === 'ground') await fetch({ families: ['move', 'secure'], region: { within: [o.ball.pos] }, sort: 'steps' });
    if (car?.team === me && available(o, car)) {
      await fetch({ players: [car.id], families: ['pass', 'handoff'], sort: 'goalDistance' }, 2);
    }
    if (car?.team === me && available(o, car)) await fetch({ families: ['move', 'blitz'], players: [car.id], sort: 'goalDistance' }, 3);
    const anchor = car?.pos || (o.ball.kind === 'ground' ? o.ball.pos : null);
    const cells = new Map();
    const cell = (x, y) => { if (x >= 0 && x < width(o) && y >= 0 && y < height(o)) cells.set(`${x},${y}`, { x, y }); };
    if (anchor) {
      // Future protection, diagonal corners, and forward defensive depth are all candidates.
      for (let dx = -3; dx <= 3; dx++) for (let dy = -3; dy <= 3; dy++) cell(anchor.x + dx, anchor.y + dy);
      const direction = car?.team === opp ? (opp === 'A' ? 1 : -1) : (me === 'A' ? 1 : -1);
      for (let dx = 4; dx <= 7; dx++) for (const dy of [-3, -1, 1, 3]) cell(anchor.x + direction * dx, anchor.y + dy);
    }
    const rootLane = car ? corridor(o, car.team, car) : null;
    for (const c of rootLane?.path.slice(0, (car?.ma || 6) + 2) || []) for (let dy = -1; dy <= 1; dy++) cell(c.x, c.y + dy);
    const actors = o.players.filter(p => p.team === me && available(o, p));
    const slots = supportSlots(o, me), reinforcement = [];
    // Local milestones are reachable even when the strategic support area is not.
    // The engine supplies the actual route and failure odds; never add a Rush here.
    for (const p of actors.filter(p => standing(p) && !p.rooted && p.id !== car?.id &&
      slots.length && supportDistance(slots, p.pos) > 3)) {
      if (left() < budget * 0.60) break;
      const destinations = [];
      const range = movementLeft(o, p), current = supportDistance(slots, p.pos);
      for (let x = Math.max(0, p.pos.x - range); x <= Math.min(width(o) - 1, p.pos.x + range); x++)
        for (let y = Math.max(1, p.pos.y - range); y <= Math.min(height(o) - 2, p.pos.y + range); y++) {
          const c = { x, y }, d = supportDistance(slots, c);
          if (dist(p.pos, c) <= range && d < current - 1 && !occupant(o, c)) destinations.push(c);
        }
      destinations.sort((a, b) => supportDistance(slots, a) - supportDistance(slots, b) || dist(a, p.pos) - dist(b, p.pos));
      if (!destinations.length) continue;
      const moves = await fetch({ families: ['move'], players: [p.id], maxRushes: 0,
        region: { within: destinations.slice(0, 12) }, sort: 'steps' });
      for (const n of moves) {
        const c = pool.get(JSON.stringify(n.input));
        if (c) { c.reinforcement = { initialDistance: current, distance: supportDistance(slots, destOf(c)) }; reinforcement.push(c); }
      }
    }
    // Per-player requests avoid a pool prefix containing only the first player's moves.
    for (const p of actors.sort((a, b) => dist(a.pos, anchor) - dist(b.pos, anchor))) {
      if (left() < budget * 0.55) break;
      await fetch({ families: ['move'], players: [p.id], maxRushes: 0, ...(cells.size ? { region: { within: [...cells.values()] } } : {}), sort: 'steps' }, big ? 2 : 1);
    }
    // A teammate can be the obstacle, even if moving it has no immediate reward.
    // Identify gates by removing ONLY that friendly occupant in a geometric copy,
    // then validate both the real vacating action and the real carrier continuation.
    const unblockers = [];
    if (car?.team === me && available(o, car) && rootLane) {
      for (const p of actors.filter(p => p.id !== car.id && dist(p.pos, car.pos) <= 3)) {
        if (left() < budget * 0.45) break;
        const relaxed = corridor({ ...o, players: o.players.filter(q => q.id !== p.id) }, me, car);
        const improvement = rootLane.cost - relaxed.cost;
        if (improvement < 0.8 || !relaxed.path.some(c => sqKey(c) === sqKey(p.pos))) continue;
        const route = new Set(relaxed.path.slice(0, car.ma + 1).map(sqKey));
        const destinations = [];
        for (let dx = -2; dx <= 2; dx++) for (let dy = -2; dy <= 2; dy++) {
          const c = { x: p.pos.x + dx, y: p.pos.y + dy };
          if ((dx || dy) && c.x >= 0 && c.x < width(o) && c.y >= 0 && c.y < height(o) && !route.has(sqKey(c))) destinations.push(c);
        }
        if (!destinations.length) continue;
        const moves = await fetch({ families: ['move'], players: [p.id], maxRushes: 0,
          region: { within: destinations }, sort: 'steps' });
        for (const n of moves.slice(0, 3)) {
          const candidate = pool.get(JSON.stringify(n.input));
          if (candidate) { candidate.unblocks = { carrier: car.id, geometricGain: round(improvement) }; unblockers.push(candidate); }
        }
      }
    }
    // Reserve direct/one-step sideline attacks outside the ball-centered target prefix.
    const edgeTargets = o.players.filter(p => p.team === opp && standing(p) && crowdEdge(o, p.pos) <= 1);
    if (edgeTargets.length) await fetch({ families: ['block', 'blitz'], targets: edgeTargets.map(p => p.id), maxRushes: 0, sort: 'steps' });
    const targetIds = o.players.filter(p => p.team === opp && standing(p) && anchor && dist(p.pos, anchor) <= 8).map(p => p.id);
    if (targetIds.length) await fetch({ families: ['block', 'blitz', 'foul', 'special'], targets: targetIds, maxRushes: 0 }, big ? 2 : 1);

    // Missing engine candidate families are proposed explicitly; the engine validates every proposal.
    const movePool = [...pool.values()];
    for (const p of actors) for (const q of o.players.filter(q => q.team === opp && standing(q))) {
      if (!anchor || dist(q.pos, anchor) > 4) continue;
      const special = has(p, 'hypnoticGaze') ? 'hypnoticGaze' : has(p, 'chainsaw') ? 'chainsaw' : has(p, 'stab') ? 'stab' : has(p, 'breatheFire') ? 'breatheFire' : null;
      if (!special) continue;
      const approaches = movePool.filter(c => c.actorId === p.id && c.family === 'move' && destOf(c) && dist(destOf(c), q.pos) === 1)
        .sort((a, b) => (a.input.path?.length || 0) - (b.input.path?.length || 0)).slice(0, 2);
      if (dist(p.pos, q.pos) === 1) approaches.unshift({ input: { path: [] } });
      for (const approach of approaches) add({ input: { kind: 'playerAction', playerId: p.id, action: 'special', special, specialTarget: q.id, path: approach.input.path || [] },
        kind: special, family: 'special', actorId: p.id, targetId: q.id, label: `${p.name}: ${special} ${q.name}` });
    }
    trace.strategicContacts = [];
    const contacts = left() > budget * 0.52 ? await strategicContacts(o,[...pool.values()],
      opts => call(() => sv.candidates(opts)),capMs(700),trace.strategicContacts) : [];
    contacts.forEach(c => { add(c); const held = pool.get(JSON.stringify(c.input)); if (held) held.strategicContact = true; });
    trace.movingTransfers = movingPassProposals(o,[...pool.values()]);
    trace.movingTransfers.forEach(add);
    const all = [...pool.values()];
    for (const c of all) if (c.rushes == null && c.input.kind === 'playerAction') {
      const p = find(o, c.actorId), used = o.activation?.playerId === p?.id ? o.activation.maUsed : 0;
      c.rushes = Math.max(0, (c.input.path?.length || 0) - Math.max(0, (p?.ma || 6) - num(used) - (p?.stance === 'prone' ? 3 : 0)));
    }
    for (const c of all) {
      c.cheap = cheapScore(o, c, me, rootValue);
      const dst = destOf(c), p = find(o, c.actorId);
      if (car?.team === opp && p && c.family === 'move' && dst && dist(dst, car.pos) === 1 &&
          o.players.some(q => q.team === me && q.id !== p.id && available(o, q) && standing(q) && dist(q.pos, car.pos) <= 2)) {
        c.assistFor = car.id;
      }
      if (car?.team === me && p && p.id !== car.id && c.family === 'move' && dst &&
          dist(dst, car.pos) >= 2 && dist(dst, car.pos) <= 4 &&
          o.players.some(q => q.team === opp && standing(q) && dist(dst, q.pos) < dist(car.pos, q.pos))) c.outerScreen = car.id;
    }
    all.sort((a, b) => b.cheap - a.cheap);
    const selected = new Map();
    const take = (list, n) => list.slice(0, n).forEach(c => selected.set(JSON.stringify(c.input), c));
    take(all.filter(c => c.kind === 'score' || num(c.pTouchdown) > 0).sort((a, b) => num(b.pTouchdown) - num(a.pTouchdown)), 3);
    take(all.filter(c => c.kind === 'secure'), 2);
    take(all.filter(c => c.kind === 'pickup' && c.family !== 'secure'), 3);
    take(all.filter(c => ['pass', 'handoff'].includes(c.family)), 3);
    take(all.filter(c => c.family === 'special'), 2);
    take(all.filter(c => c.kind === 'standUp'), 2);
    take(all.filter(c => c.builtIn != null).sort((a, b) => b.builtIn - a.builtIn), 2);
    take(all, big ? CFG.shortlist : 10);
    take(all.filter(c => ['endTurn', 'endActivation'].includes(c.family)), 2);
    const advances = car?.team === me ? all.filter(c => c.actorId === car.id && c.family === 'move' && destOf(c) &&
      goalDist(o, me, destOf(c)) < goalDist(o, me, car.pos) && !num(c.rushes)) : [];
    const forward = [...new Set([
      ...advances.slice().sort((a,b) => b.cheap - a.cheap).slice(0,2),
      ...advances.slice().sort((a,b) => goalDist(o,me,destOf(a))-goalDist(o,me,destOf(b)) || b.cheap-a.cheap).slice(0,1)
    ])];
    const escapes = car?.team === me ? all.filter(c => c.actorId === car.id && c.family === 'move' && destOf(c) &&
      o.players.filter(p => p.team === opp && tz(p) && dist(p.pos, destOf(c)) === 1).length <
      o.players.filter(p => p.team === opp && tz(p) && dist(p.pos, car.pos) === 1).length).slice(0, 2) : [];
    // A static cage score must never prune every genuine advance before we can
    // examine the protectors that accompany it. Keep strategic alternatives.
    const regroup = reinforcement.sort((a, b) => b.cheap - a.cheap).slice(0, 2);
    // Preserve normal deployment by unmarked players. The global geometric
    // ranking otherwise fills the shortlist with a marked teammate's unsafe
    // long routes. This is a candidate hint; explore still determines the odds.
    const enemyZones = zones(o, opp), safeActors = new Set();
    const freeDeploy = all.filter(c => {
      const p = find(o, c.actorId);
      if (!p || p.id === car?.id || c.family !== 'move' || !c.input.path?.length ||
          c.rushes || unreliable(p) || !standing(p)) return false;
      const departures = [p.pos, ...c.input.path.slice(0, -1).map(step => step.to)];
      return departures.every(at => !enemyZones.get(sqKey(at)));
    }).filter(c => {
      if (safeActors.has(c.actorId)) return false;
      safeActors.add(c.actorId); return true;
    }).slice(0, 3);
    const surfs = all.filter(c => ['block', 'blitz'].includes(c.family) && forcedSurf(o, find(o, c.actorId), find(o, c.targetId), destOf(c) || find(o, c.actorId)?.pos, c.family === 'blitz')).slice(0, 2);
    // Retain already-generated low-risk blocks against players touching our
    // carrier. Geometry-only move reservations can otherwise crowd these out.
    // This admits alternatives; it does not force a block or change its value.
    const carrierSafety = car?.team === me ? all.filter(c =>
      ['block', 'blitz'].includes(c.family) && c.pTurnover != null &&
      Number.isFinite(c.pTurnover) && c.pTurnover <= 0.03 &&
      tz(find(o, c.targetId)) && dist(find(o, c.targetId).pos, car.pos) === 1)
      .sort((a, b) => a.pTurnover - b.pTurnover || Number(b.family === 'block') - Number(a.family === 'block') || num(b.builtIn) - num(a.builtIn))
      .filter((c, i, list) => list.findIndex(x => x.targetId === c.targetId) === i).slice(0, 2) : [];
    for (const c of carrierSafety) c.carrierSafety = car.id;
    // A loose ball near our End Zone also needs scoring-lane screens, not
    // just pickup candidates. Reserve two existing moves into the diagonal
    // squares on the opponent's goalward side; exact exploration decides.
    const looseEmergency = o.ball.kind === 'ground' && o.players.some(p => p.team === opp && onPitch(p) && ['standing', 'prone'].includes(p.stance) && !p.rooted &&
      dist(p.pos, anchor) + goalDist(o, opp, anchor) <= p.ma - (p.stance === 'prone' ? 3 : 0) + (has(p, 'sprint') ? 3 : 2));
    const goalward = opp === 'A' ? 1 : -1;
    const screenedActors = new Set();
    const exposure = c => [find(o, c.actorId)?.pos, ...c.input.path.slice(0, -1).map(s => s.to)]
      .filter(p => p && enemyZones.get(sqKey(p))).length;
    const looseScreens = looseEmergency ? all.filter(c => c.family === 'move' && c.input.path?.length &&
      destOf(c)?.x === anchor.x + goalward && Math.abs(destOf(c).y - anchor.y) === 1 &&
      !c.rushes && !unreliable(find(o, c.actorId)))
      .sort((a,b) => exposure(a)-exposure(b) || b.cheap-a.cheap).filter(c => {
        if (screenedActors.has(c.actorId)) return false; screenedActors.add(c.actorId); return true;
      }).slice(0, 2) : [];
    for (const c of looseScreens) c.looseScreen = true;
    const required = [...new Set([...looseScreens, ...carrierSafety, ...all.filter(c => c.strategicContact), ...all.filter(c => c.movingTransfer), ...unblockers.slice(0, 3), ...forward, ...escapes, ...freeDeploy, ...regroup, ...surfs,
      ...all.filter(c => c.assistFor).slice(0, 2), ...all.filter(c => c.outerScreen).slice(0, 2),
      ...all.filter(c => num(c.pTouchdown) > 0).slice(0, 2),
      ...all.filter(c => c.targetId === car?.id && ['block', 'blitz', 'special'].includes(c.family)).slice(0, 2)])];
    const incumbent = incumbentInput && pool.get(JSON.stringify(incumbentInput));
    const short = [...new Set([...(incumbent ? [incumbent] : []), ...required, ...[...selected.values()].sort((a, b) => b.cheap - a.cheap)
      .filter(c => !required.includes(c))])].slice(0, big ? 23 : 14);
    // Preserve the baseline end-turn for a fair comparison even with a full shortlist.
    const end = all.find(c => c.family === 'endTurn');
    if (end && !short.includes(end)) short.push(end);
    const stop = all.find(c => c.family === 'endActivation');
    if (incumbent?.movementCycle && stop && !short.includes(stop)) short.push(stop);
    const exOpts = () => ({ observations: true, maxOutcomes: big ? 40 : 16, maxKeep: 256, threshold: 0.0001, maxLeaves: big ? 3500 : 1200,
      maxMs: capMs(big ? 1300 : 600), decisions: 'builtin', perspective: me });
    const lines = [];
    trace.search.generationMs = Date.now() - start;
    for (const c of short) {
      if (c.movementCycle) continue;
      if (left() < Math.max(500, budget * 0.24)) break;
      const ex = await explore(c.input, exOpts());
      if (!ex?.ok || !ex.outcomes?.length) continue;
      const evaluated = outcomeValue(ex, me, rootValue), unknown = evaluated.unknown;
      let v = evaluated.value;
      const opportunity = Math.min(30, actors.filter(p => available(o, p)).length * 2);
      const risk = (car?.team === me ? CFG.carrierTurnover : CFG.turnover) + opportunity;
      v -= num(ex.pTurnover) * risk + unknown * CFG.unresolved;
      // Every needless step consumes a finite activation. This prevents oscillating
      // between equal squares and repeatedly spending movement on tiny bonuses.
      if (!ex.pTouchdown) v -= (c.input.path?.length || 0) * 0.6;
      if (c.actorId === car?.id && car.team === me && destOf(c)) {
        const retreat = goalDist(o, me, destOf(c)) - goalDist(o, me, car.pos);
        if (retreat > 0) v -= retreat * 4;
      }
      const rushes = num(c.rushes, Math.max(0, (c.input.path?.length || 0) - (find(o, c.actorId)?.ma || 6)));
      if (rushes && !ex.pTouchdown) v -= CFG.optionalRush * rushes;
      if (c.family === 'foul') v -= 10;
      c.strategicDelta = strategicDelta(o,c,ex,o.drivePlan); v += c.strategicDelta;
      c.ex = ex; c.value = v; c.baseValue = v; c.unknown = unknown; c.terminalScoreMass = observedTerminalScore(ex,me,o);
      lines.push(c);
      if (num(ex.pTouchdown) >= 0.999999 && unknown < 1e-6) {
        trace.search.elapsedMs = Date.now() - start;
        return { input: c.input, why: `Hopeful 1.5.9-GPT: certain touchdown — ${c.label}.`, trace: { ...trace, chosen: c.label } };
      }
      if (lines.length % 4 === 0) await note('outcomes', `Checked ${lines.length} action outcome trees (${all.length} proposed actions).`,
        { evaluating: [c.label], best: { label: lines.slice().sort((a, b) => b.value - a.value)[0].label } });
    }
    if (!lines.length) {
      return fallback('no usable root outcome tree');
    }
    lines.sort((a, b) => b.value - a.value);
    trace.search.rootEvaluationMs = Date.now() - start - trace.search.generationMs;
    // Preparation: score our second legal action before considering the opponent's reply.
    // This makes a Gaze, assist, screen, or hand-off worth doing even without immediate positional reward.
    const deepen = lines.slice(0, big ? CFG.deepen : 2);
    for (const c of lines.filter(c => carrierSafety.includes(c))) if (!deepen.includes(c)) deepen.push(c);
    for (const c of lines.filter(c => c.unblocks).slice(0, 3)) if (!deepen.includes(c)) deepen.push(c);
    for (const c of lines.filter(c => forward.includes(c)).slice(0, 2)) if (!deepen.includes(c)) deepen.push(c);
    for (const c of lines.filter(c => ['pass', 'handoff', 'special'].includes(c.family)).slice(0, 2)) if (!deepen.includes(c)) deepen.push(c);
    for (const c of lines.filter(c => c.assistFor || c.targetId === car?.id && car?.team === opp).slice(0, 2)) if (!deepen.includes(c)) deepen.push(c);
    const recoveryAfter = async e => {
      let gain = 0, recovered = 0;
      const plans = [];
      const branches = (e.outcomes || []).filter(b => b.key && b.observation && b.active === me &&
        !b.turnover && !b.touchdown && b.observation.ball.kind === 'ground').sort((a, b) => b.p - a.p).slice(0, 2);
      for (const b of branches) {
        if (left() < Math.max(3500, budget * 0.26)) break;
        const base = boardValue(b.observation, me);
        const r = await call(() => sv.candidates({ from: b.key, families: ['move', 'secure'],
          region: { within: [b.observation.ball.pos] }, maxRushes: 0, precision: 'none', limit: 35, maxMs: capMs() }));
        const next = (r?.candidates || []).map(canonical).filter(Boolean);
        next.forEach(n => n.cheap = cheapScore(b.observation, n, me, base));
        next.sort((a, b) => b.cheap - a.cheap);
        let best = 0, bestPlan = null;
        for (const n of next.slice(0, 2)) {
          if (left() < Math.max(3000, budget * 0.24)) break;
          const ex = await explore(n.input, { ...exOpts(), from: b.key, maxMs: capMs(700) });
          if (!ex?.outcomes?.length) continue;
          const value = outcomeValue(ex, me, base);
          const g = value.value - base - num(ex.pTurnover) * CFG.turnover - value.unknown * CFG.unresolved;
          if (g > best) {
            best = g;
            bestPlan = { input: n.input, label: n.label, pRecovered: ex.outcomes.reduce((sum, out) =>
              sum + (out.observation && holder(out.observation)?.team === me ? out.p : 0), 0),
              pTurnover: num(ex.pTurnover), unresolved: value.unknown };
          }
        }
        if (bestPlan) {
          gain += b.p * best; recovered += b.p * bestPlan.pRecovered;
          plans.push({ ball: b.observation.ball.pos, branchMass: b.p, ...bestPlan });
        }
      }
      return { gain, recovered, plans };
    };
    for (const c of deepen) {
      if (left() < Math.max(4500, budget * 0.25)) break;
      const first = c.ex.outcomes.filter(x => x.key && x.observation && x.active === me && !x.touchdown && !x.turnover)
        .sort((a, b) => b.p - a.p).slice(0, 2);
      c.preparationPlans = []; c.preparationGain = 0; c.preparedScore = 0;
      c.preparedBranches = new Map();
      for (const out of first) {
        if (left() < Math.max(4000, budget * 0.25)) break;
        const ob = out.observation, h = holder(ob), base = boardValue(ob, me);
        const fam = h?.team === me ? ['move', 'pass', 'handoff', 'block', 'blitz'] : ['secure', 'block', 'blitz', 'move'];
        const r = await call(() => sv.candidates({ from: out.key, families: fam, precision: 'none', limit: 70, maxMs: capMs() }));
        const nextMap = new Map();
        const put = n => { const v = canonical(n,ob); if (v) nextMap.set(JSON.stringify(v.input), v); };
        (r?.candidates || []).forEach(put);
        if (h?.team === me && available(ob, h)) {
          const routes = await call(() => sv.candidates({ from: out.key, players: [h.id], families: ['move', 'pass', 'handoff'],
            precision: 'none', ...(lastTurn ? {} : { maxRushes: 0 }), sort: 'goalDistance', limit: 100, maxMs: capMs() }));
          (routes?.candidates || []).forEach(put);
        } else if (h?.team === opp) {
          // A shared pool prefix can consist entirely of one helper's moves.
          // Explicitly reserve attacks on the carrier after an assist or Gaze.
          const attacks = await call(() => sv.candidates({ from: out.key, targets: [h.id], families: ['block', 'blitz', 'special'],
            precision: 'none', maxRushes: 0, sort: 'steps', limit: 45, maxMs: capMs() }));
          (attacks?.candidates || []).forEach(put);
        } else if (ob.ball.kind === 'ground') {
          const pickups = await call(() => sv.candidates({ from: out.key, families: ['secure', 'move'],
            region: { within: [ob.ball.pos] }, precision: 'none', sort: 'steps', limit: 35, maxMs: capMs() }));
          (pickups?.candidates || []).forEach(put);
        }
        // After the carrier moves/transfers, query escorts individually. A
        // general pool prefix can otherwise contain only that carrier's moves.
        if (h?.team === me && (c.actorId === car?.id || ['pass', 'handoff'].includes(c.family))) {
          const supportCells = [];
          for (let dx = -3; dx <= 3; dx++) for (let dy = -3; dy <= 3; dy++) {
            const at = { x: h.pos.x + dx, y: h.pos.y + dy };
            if ((dx || dy) && at.x >= 0 && at.x < width(ob) && at.y >= 0 && at.y < height(ob)) supportCells.push(at);
          }
          const escorts = ob.players.filter(p => p.team === me && p.id !== h.id && available(ob, p))
            .sort((a, b) => dist(a.pos, h.pos) - dist(b.pos, h.pos)).slice(0, 2);
          for (const p of escorts) {
            if (left() < Math.max(4500, budget * 0.28)) break;
            const supports = await call(() => sv.candidates({ from: out.key, players: [p.id], families: ['move', 'block'],
              precision: 'none', maxRushes: 0, region: { within: supportCells }, limit: 50, sort: 'steps', maxMs: capMs(500) }));
            (supports?.candidates || []).forEach(put);
          }
        }
        const next = [...nextMap.values()];
        next.forEach(n => n.cheap = cheapScore(ob, n, me, base)); next.sort((a, b) => b.cheap - a.cheap);
        const reserve = lastTurn ? next.filter(n => n.kind === 'score' || num(n.pTouchdown) > 0).slice(0, 3) :
          h?.team === opp ? next.filter(n => n.targetId === h.id && ['block', 'blitz', 'special'].includes(n.family)).slice(0, 2) : [];
        const continuation = h?.team === me ? next.filter(n => n.actorId === h.id && n.family === 'move').slice(0, 1) : [];
        const shortlist = [...new Set([...reserve, ...continuation, ...next.slice(0, big ? CFG.preparation : 2)])];
        let best = 0, bestChance = 0, bestLine = null, bestOutcome = null;
        for (const n of shortlist) {
          if (left() < Math.max(3500, budget * 0.24)) break;
          if (n.actorId === c.actorId && n.family === c.family && (n.input.path?.length || 0)) {
            const route = [find(o, c.actorId)?.pos, ...(c.input.path || []).map(s => s.to), ...n.input.path.map(s => s.to)]
              .filter(Boolean).map(sqKey);
            // Reject a loop BEFORE it earns a preparation bonus, not only
            // when attempting to merge the two movements afterwards.
            if (new Set(route).size !== route.length) continue;
          }
          const e = await explore(n.input, { ...exOpts(), from: out.key, maxMs: capMs(900) });
          if (!e?.outcomes?.length) continue;
          const evaluated = outcomeValue(e, me, base);
          let gain = evaluated.value - base - num(e.pTurnover) * (h?.team === me ? CFG.carrierTurnover : CFG.turnover)
            - evaluated.unknown * CFG.unresolved;
          if (!e.pTouchdown) gain -= (n.input.path?.length || 0) * 0.6 + num(n.rushes) * CFG.optionalRush;
          if (h?.team === me && n.actorId === h.id && destOf(n)) {
            gain -= Math.max(0, goalDist(ob, me, destOf(n)) - goalDist(ob, me, h.pos)) * 4;
          }
          const strategic = strategicDelta(ob,n,e,o.drivePlan,o); gain += strategic;
          let recovery = null;
          if (h?.team === opp && n.targetId === h.id && ['block', 'blitz', 'special'].includes(n.family)) {
            recovery = await recoveryAfter(e);
            gain += recovery.gain * 0.8;
          }
          const chance = num(e.pTouchdown);
          const better = lastTurn && chance > 0 ? chance > bestChance + 1e-8 ||
            Math.abs(chance - bestChance) <= 1e-8 && gain > best : bestChance <= 0 && gain > best;
          if (better) {
            best = gain; bestChance = chance; bestOutcome = e;
            bestLine = { label: n.label, input: n.input, pTouchdown: chance, pTurnover: e.pTurnover,
              unresolved: evaluated.unknown, strategicDelta: strategic, ...(recovery?.plans.length ? { recovery } : {}) };
          }
        }
        if (!bestLine) continue;
        // These are conditional proposals, not persistent promises to execute a
        // second player. Never use their imagined position as current safety.
        const continuationCredit = preparationCredit(ob,bestOutcome,best,me);
        c.preparationGain += out.p * continuationCredit;
        c.preparedScore += out.p * bestChance;
        c.preparedBranches.set(out.key, { ex: bestOutcome, plan: bestLine });
        c.preparationPlans.push({ branchMass: out.p, continuationCredit, ...bestLine });
        if (!c.preparation || out.p > c.preparationMass) {
          c.preparation = bestLine; c.preparationMass = out.p;
        }
        // A deterministic same-player prefix can be returned as one legal full
        // route. Verify the combined action instead of multiplying guessed odds.
        if (c !== incumbent && bestOutcome && out.p > 0.999999 && !c.ex.pTurnover &&
            bestLine.input.playerId === c.input.playerId && bestLine.input.action === c.input.action &&
            ['move', 'pass', 'handoff', 'secure', 'blitz'].includes(c.input.action) &&
            (c.input.path?.length || 0) > 0 && (bestLine.input.path?.length || 0) > 0) {
          const merged = { ...bestLine.input, path: [...c.input.path, ...bestLine.input.path] };
          const visited = [find(o, c.actorId)?.pos, ...merged.path.map(step => step.to)].filter(Boolean).map(sqKey);
          // A prefix and a follow-up may each be legal yet jointly backtrack.
          // Retain the separate proposal instead of spending movement on a loop.
          if (new Set(visited).size !== visited.length) continue;
          const whole = await explore(merged, exOpts());
          if (whole?.ok && whole.outcomes?.length) {
            const ev = outcomeValue(whole, me, rootValue);
            const risk = (car?.team === me ? CFG.carrierTurnover : CFG.turnover) + Math.min(30, actors.length * 2);
            let value = ev.value - num(whole.pTurnover) * risk - ev.unknown * CFG.unresolved;
            const p = find(o, c.actorId), used = o.activation?.playerId === p?.id ? num(o.activation.maUsed) : 0;
            const rushes = Math.max(0, merged.path.length - Math.max(0, (p?.ma || 6) - used - (p?.stance === 'prone' ? 3 : 0)));
            if (!whole.pTouchdown) value -= merged.path.length * 0.6 + rushes * CFG.optionalRush;
            const destination = merged.path.at(-1)?.to;
            if (p?.id === car?.id && car?.team === me && destination) {
              value -= Math.max(0, goalDist(o, me, destination) - goalDist(o, me, car.pos)) * 4;
            }
            c.destination = destination;
            c.input = merged; c.rushes = rushes; c.label = bestLine.label; c.ex = whole; c.terminalScoreMass = observedTerminalScore(whole,me,o);
            c.strategicDelta = strategicDelta(o,c,whole,o.drivePlan); value += c.strategicDelta;
            c.value = value; c.baseValue = value;
            c.preparation = null; c.preparationPlans = []; c.preparationGain = 0; c.preparedScore = 0; c.unknown = ev.unknown;
            c.preparedBranches.clear();
            break;
          }
        }
      }
      c.value += c.preparationGain;
      await note('preparation', `Checking actual assist, carrier escape and recovery chains for ${c.label}.`,
        { best: c.preparation && { label: c.preparation.label, pTouchdown: c.preparation.pTouchdown, pTurnover: c.preparation.pTurnover } });
    }

    trace.search.preparationMs = Date.now() - start - trace.search.generationMs - trace.search.rootEvaluationMs;
    // Compare direct and examined two-action scoring routes BEFORE choosing a final-turn attempt.
    // A tiny direct chance must not suppress a more reliable pass / hand-off / Gaze preparation.
    if (lastTurn && !protectingLead) {
      const scoringLines = lines.filter(c => num(c.ex.pTouchdown) + num(c.preparedScore) > 0)
        .sort((a, b) => (num(b.ex.pTouchdown) + num(b.preparedScore)) - (num(a.ex.pTouchdown) + num(a.preparedScore)));
      if (scoringLines.length) {
        const best = scoringLines[0], chance = Math.min(1, num(best.ex.pTouchdown) + num(best.preparedScore));
        trace.chosen = best.label;
        trace.scoringComparison = scoringLines.map(c => ({ label: c.label, direct: c.ex.pTouchdown, conditionalFollowUp: c.preparedScore || 0, followUp: c.preparation?.label }));
        trace.search.elapsedMs = Date.now() - start;
        return { input: best.input, why: `Hopeful 1.5.9-GPT: final-turn scoring route (${Math.round(chance * 100)}% on examined branches).${best.preparation ? ` Follow-up: ${best.preparation.label}.` : ''}`, trace: compactCoachTrace(trace) };
      }
    }

    const cycleStop=cycleStopReference(o,incumbent,stop,lines);
    const comparisonIncumbent=cycleStop || incumbent;
    // Equal reply checks for each contender; any unresolved threat is penalised, never labelled safe.
    // Every line starts with the same coverage charge, including those the
    // remaining time cannot reach. Refund only the mass actually examined.
    for (const c of lines) {
      c.checkedReplyMass = 0;
      c.replyTerminalMass = clamp(num(c.ex.pTouchdown) + num(c.preparedScore), 0, 1);
      c.uncheckedReplyMass = 1 - c.replyTerminalMass;
      c.value -= c.uncheckedReplyMass * 18;
    }
    lines.sort((a, b) => b.value - a.value);
    const candidates = lines.slice(0, big ? CFG.deepen : 2);
    if (comparisonIncumbent?.ex && !candidates.includes(comparisonIncumbent)) candidates.unshift(comparisonIncumbent);
    for (const c of lines.filter(c => forward.includes(c)).slice(0, 2)) if (!candidates.includes(c)) candidates.push(c);
    for (const c of lines.filter(c => escapes.includes(c)).slice(0, 1)) if (!candidates.includes(c)) candidates.push(c);
    for (const c of lines.filter(c => c.targetId === car?.id && car?.team === opp).slice(0, 1)) if (!candidates.includes(c)) candidates.push(c);
    for (const c of lines.filter(c => regroup.includes(c) || surfs.includes(c)).slice(0, 2)) if (!candidates.includes(c)) candidates.push(c);
    for (const c of lines.filter(c => looseScreens.includes(c))) if (!candidates.includes(c)) candidates.push(c);
    for (const c of lines.filter(c => carrierSafety.includes(c)).slice(0, 2)) if (!candidates.includes(c)) candidates.push(c);
    for (const c of lines.filter(c => freeDeploy.includes(c)).slice(0, 2)) if (!candidates.includes(c)) candidates.push(c);
    if (!candidates.includes(end) && end?.ex) candidates.push(end);
    const checked = [];
    const assessContender = async c => {
      if (left() < 1200) return false;
      c.replyAttempted = true;
      const important = c.ex.outcomes.filter(out => out.key && out.observation && !out.touchdown).sort((a, b) => b.p - a.p).slice(0, big ? 2 : 1);
      c.reply = []; let adjustment = 0, criticalAdjustment = 0, positionAdjustment = 0, checkedMass = 0, boundedMass = 0, observedMass = 0;
      for (const out of important) {
        if (left() < 900) break;
        const prepared = c.preparedBranches?.get(out.key);
        // Real conditional support states, including failures, rather than an
        // imagined safe endpoint or the carrier's incomplete intermediate pose.
        const second = prepared?.ex ? prepared.ex.outcomes.filter(b => b.key && b.observation && !b.touchdown)
          .sort((a, b) => b.p - a.p).slice(0, 2) : [out];
        for (const branch of second) {
          if (left() < 900) break;
          let next = branch;
          const branchMass = out.p * (prepared?.ex ? branch.p : 1);
          if (next.active === me) {
            const e = await explore({ kind: 'endTurn' }, { from: next.key, observations: true, maxOutcomes: 4, maxLeaves: 400, maxMs: capMs(450), perspective: me });
            const transitions = e?.outcomes?.filter(x => x.active === opp && x.key && x.observation && !x.touchdown)
              .sort((a, b) => b.p - a.p) || [];
            next = transitions[0];
            if (!next) continue;
            const reply = await replyAssessment(next, sv, call, capMs, me, left, big);
            const mass = branchMass * next.p;
            adjustment += mass * Math.min(0, reply.adjustment);
            criticalAdjustment += mass * Math.min(0,reply.criticalAdjustment);
            positionAdjustment += mass * Math.min(0,reply.positionAdjustment);
            checkedMass += reply.unknown ? 0 : mass;
            boundedMass += reply.essentialComplete ? mass : 0;
            observedMass += reply.failed ? 0 : mass;
            c.reply.push({ p: round(mass), stage: prepared?.ex ? 'after examined follow-up' : 'after first action',
              followUp: prepared?.plan?.label, ...reply });
          } else if (next?.key && next.active === opp) {
            const reply = await replyAssessment(next, sv, call, capMs, me, left, big);
            adjustment += branchMass * Math.min(0, reply.adjustment);
            criticalAdjustment += branchMass * Math.min(0,reply.criticalAdjustment);
            positionAdjustment += branchMass * Math.min(0,reply.positionAdjustment);
            checkedMass += reply.unknown ? 0 : branchMass;
            boundedMass += reply.essentialComplete ? branchMass : 0;
            observedMass += reply.failed ? 0 : branchMass;
            c.reply.push({ p: round(branchMass), stage: prepared?.ex ? 'follow-up failure/reply' : 'first action failure/reply', ...reply });
          }
        }
      }
      c.replyAdjustment = adjustment; c.criticalReplyAdjustment = criticalAdjustment; c.positionReplyAdjustment = positionAdjustment; c.checkedReplyMass = checkedMass; c.boundedReplyMass = boundedMass; c.observedReplyMass = observedMass;
      // Position heuristic already handles every outcome; reply corrections apply only to computed branches.
      const priorUnchecked = c.uncheckedReplyMass;
      c.uncheckedReplyMass = clamp(1 - c.replyTerminalMass - checkedMass, 0, 1);
      c.value += adjustment + (priorUnchecked - c.uncheckedReplyMass) * 18;
      if (checkedMass > 0 || num(c.ex.pTouchdown) > 0.999999) checked.push(c);
      await note('reply', `Reply threats checked for ${checked.length} competing lines.`, { best: { label: c.label, value: round(c.value), pTurnover: c.ex.pTurnover, pTouchdown: c.ex.pTouchdown } });
      return true;
    };
    for (const c of candidates) { if (!await assessContender(c)) break; }
    trace.search.finalistReplyChecks = [];
    // Each pass checks a previously unattempted EXISTING root line. There
    // are at most lines.length passes and all share the original deadline.
    for (let pass=0;pass<lines.length;pass++) {
      const c=provisionalContender(lines,comparisonIncumbent);
      if (!c || c.replyAttempted || c.replyTerminalMass>=0.999999 || left()<1200) break;
      await note('finalist reply', `Checking the provisional winner's opponent response: ${c.label}.`, { evaluating:[c.label] });
      const before=contenderEvidence(c,comparisonIncumbent?.ex ? comparisonIncumbent : c), started=Date.now();
      if (!await assessContender(c)) break;
      trace.search.finalistReplyChecks.push({ label:c.label, before, observedMass:num(c.observedReplyMass),
        checkedMass:num(c.checkedReplyMass), elapsedMs:Date.now()-started,
        after:contenderEvidence(c,comparisonIncumbent?.ex ? comparisonIncumbent : c) });
    }
    // Keep every explored line in the race. Missing reply work is not a filter
    // that changes the action space according to where the deadline fell.
    const ranked = lines;
    ranked.sort((a, b) => b.value - a.value || num(a.ex.pTurnover) - num(b.ex.pTurnover));
    let best = ranked[0];
    if (best.family === 'endTurn') {
      // All useful, roll-free stand-ups must be checked before ending the team's Turn.
      const stand = lines.filter(c => c.kind === 'standUp' && num(c.ex.pTurnover) < 1e-8 && c.baseValue > end.baseValue + 0.5).sort((a, b) => b.baseValue - a.baseValue)[0];
      if (stand) best = stand;
    }
    // Balanced is the incumbent, not another geometric score. Replacement
    // requires completed first-action evidence and a margin. Reply advantages
    // count only when both bounded threat checks cover comparable branch mass;
    // absence of a reply must never make a challenger look safer.
    if (incumbentInput && !incumbent?.ex && !incumbent?.movementCycle) return fallback('incumbent comparison could not be evaluated');
    if (comparisonIncumbent?.ex && !comparisonIncumbent.movementCycle) {
      const comparison = c => contenderEvidence(c,comparisonIncumbent);
      // A line can still win without a reply check when its completed action
      // has a clear direct benefit. This avoids restoring checked-only pruning.
      const challengers = ranked.filter(c => c !== comparisonIncumbent).map(c => ({ c, evidence: comparison(c) }))
        .filter(x => x.evidence.eligible).sort((a, b) => b.evidence.effectiveGain - a.evidence.effectiveGain);
      const selected = challengers[0];
      best = selected?.c || comparisonIncumbent;
      trace.selection = { incumbent: incumbentInput, override: !!selected,
        reason: selected ? 'completed action advantage exceeds uncertainty/risk margin' : 'no challenger clears the evidence margin',
        evidence: selected?.evidence, challengers: ranked.filter(c => c !== comparisonIncumbent).map(c => ({ label: c.label, ...comparison(c) })) };
    }
    if (incumbent?.movementCycle) trace.selection = {...trace.selection, incumbent:incumbentInput,override:true,
      cycleReplacement:cycleStop ? {input:cycleStop.input,reason:'deterministic normal stop preserves other-player options'} : null,
      reason:cycleStop ? 'reject movement cycle; compare alternatives against the verified End Activation reference' :
        'reject a repeated-square movement in an unchanged activation; choose an explored legal alternative'};
    trace.movement = { visited: o.movementMemory?.visited || [], cyclesRejected: trace.search.cyclesRejected || 0, incumbentCycle: !!incumbent?.movementCycle };
    trace.search.forward = forward.map(c => ({ label: c.label, family: c.family, destination: destOf(c), value: c.value }));
    trace.lines = lines.slice(0, 24).map(c => ({ label: c.label, kind: c.kind, pTurnover: round(c.ex.pTurnover), pTouchdown: round(c.ex.pTouchdown), terminalScoreMass: round(c.terminalScoreMass), unresolved: round(c.unknown),
      firstAction: round(c.baseValue), strategicDelta: round(c.strategicDelta), strategicContact: c.strategicContact, reinforcement: c.reinforcement, carrierSafety: c.carrierSafety, looseScreen: c.looseScreen, unblocks: c.unblocks, assistFor: c.assistFor, outerScreen: c.outerScreen,
      preparation: c.preparation, preparationPlans: c.preparationPlans, preparationGain: round(c.preparationGain), criticalReplyAdjustment:round(c.criticalReplyAdjustment), positionReplyAdjustment:round(c.positionReplyAdjustment),
      reply: c.reply, checkedReplyMass: round(c.checkedReplyMass), boundedReplyMass: round(c.boundedReplyMass),
      observedReplyMass: round(c.observedReplyMass),
      uncheckedReplyMass: c.uncheckedReplyMass, value: round(c.value) }));
    trace.chosen = best.label;
    trace.search.finalWinnerReply = { attempted:!!best.replyAttempted, observedMass:num(best.observedReplyMass), checkedMass:num(best.checkedReplyMass), terminalMass:num(best.replyTerminalMass), status:best.replyTerminalMass>=0.999999 ? 'terminal' : !best.replyAttempted ? 'budget-limited' : num(best.observedReplyMass)<=0 ? 'query-failed-or-unobserved' : num(best.checkedReplyMass)>=1-best.replyTerminalMass-1e-8 ? 'bounded-covered' : 'partial', remainingBudgetMs:Math.max(0,left()), scope:'bounded selected branches, not exhaustive opponent Turn' };
    trace.search.proposed = all.length; trace.search.explored = lines.length; trace.search.elapsedMs = Date.now() - start;
    trace.search.replyAndSelectionMs = trace.search.elapsedMs - trace.search.generationMs - trace.search.rootEvaluationMs - trace.search.preparationMs;
    trace.search.coverage = { rootCount: lines.length, proposedCount: all.length,
      rootKnownMassMean: lines.reduce((sum, c) => sum + 1 - c.unknown, 0) / lines.length,
      withReplyChecks: lines.filter(c => c.reply?.length).length,
      fullyCheckedReplyMassMean: lines.reduce((sum, c) => sum + num(c.checkedReplyMass), 0) / lines.length,
      scope: 'coverage of retained action branches; not a probability of optimal play or complete opponent-turn search' };
    return { input: best.input, why: `Hopeful 1.5.9-GPT: ${trace.objective} — ${best.label}; engine turnover ${Math.round(best.ex.pTurnover * 100)}%, touchdown ${Math.round(best.ex.pTouchdown * 100)}%.${best.preparation ? ` Follow-up: ${best.preparation.label}.` : ''}`, trace: compactCoachTrace(trace) };
  }

  // threats.scoring deliberately excludes ground balls. Reserve a small,
  // goal-directed pickup check and continue from real success states with the
  // same actor's remaining MA. Never reset the activation or multiply marginal
  // probabilities from unrelated positions. This is a discovered route lower
  // bound, not a complete opposing Turn or a sum of competing pickup routes.
  async function pickupScoreThreat(out, sv, call, capMs, me, left) {
    const ob = out.observation, opp = other(me);
    const report = { lowerBound: 0, unresolved: 0, incomplete: false, lines: [],
      scope: 'at most two pickups and two success states per pickup; same-activation direct scoring continuation' };
    if (ob.active !== opp || ob.ball?.kind !== 'ground') return report;
    const ball = ob.ball.pos;
    const pickers = ob.players.filter(p => p.team === opp && available(ob, p) && !p.rooted &&
      dist(p.pos, ball) + goalDist(ob, opp, ball) <= movementLeft(ob, p) + (has(p, 'sprint') ? 3 : 2))
      .sort((a, b) => a.ag - b.ag || Number(has(b, 'sureHands')) - Number(has(a, 'sureHands')) ||
        dist(a.pos, ball) - dist(b.pos, ball));
    if (!pickers.length) return report;
    if (left() < 1600) { report.incomplete = true; return report; }
    const continuing = ob.activation && !ob.activation.over &&
      ['blitz', 'pass', 'handoff', 'secure'].includes(ob.activation.action) ? ob.activation.action : null;
    const r = await call(() => sv.candidates({ from: out.key, team: opp,
      players: pickers.slice(0, 2).map(p => p.id), families: continuing ? ['move', continuing] : ['move'],
      region: { within: [ball] }, precision: 'none', limit: 6, maxMs: capMs(450) }));
    if (!r?.ok) { report.incomplete = true; return report; }
    const seen = new Set();
    const pickups = (r.candidates || []).map(canonical).filter(c => c && c.kind === 'pickup' &&
      !c.targetId && !seen.has(c.actorId) && seen.add(c.actorId)).slice(0, 2);
    if (pickers.length > 2 || r.hasMore || r.truncated?.length) report.incomplete = true;
    for (const c of pickups) {
      if (left() < 1200) { report.incomplete = true; break; }
      const ex = await call(() => sv.explore(c.input, { from: out.key, team: opp, perspective: me,
        observations: true, decisions: 'builtin', maxOutcomes: 24, maxKeep: 256,
        maxLeaves: 2400, threshold: 0.0001, maxMs: capMs(750) }));
      if (!ex?.ok || !ex.outcomes?.length) { report.incomplete = true; continue; }
      // explore uses our perspective; opponent terminal scores are separate.
      let pScore = num(ex.pOpponentTouchdown), checkedSuccessMass = 0, continuationUnknown = 0;
      const success = ex.outcomes.filter(b => b.active === opp && !b.turnover && !b.touchdown &&
        b.observation?.ball.kind === 'held' && b.observation.ball.playerId === c.actorId);
      const branches = [];
      for (const b of success.slice().sort((a, z) => z.p - a.p).slice(0, 2)) {
        if (!b.key || left() < 600) { report.incomplete = true; break; }
        // The host's direct-scoring service uses action='move'. Continuing a
        // declared Blitz/Pass/etc must retain that action and spent MA instead.
        const act = b.observation.activation;
        let sc;
        if (act?.playerId === c.actorId && !act.over && act.action !== 'move') {
          const goalX = b.observation.pitch.endZone[opp];
          const routes = await call(() => sv.candidates({ from: b.key, team: opp,
            players: [c.actorId], families: [act.action], region: { x0: goalX, x1: goalX },
            sort: 'steps', precision: 'exact', limit: 6, maxMs: capMs(650) }));
          if (routes?.ok) sc = { ok: true, threats: (routes.candidates || []).filter(x => x.kind === 'score' && !x.targetId),
            truncated: routes.hasMore || routes.truncated?.length, exact: routes.exact };
        } else sc = await call(() => sv.threats.scoring({ from: b.key, team: opp,
          players: [c.actorId], maxMs: capMs(650) }));
        if (!sc?.ok) { report.incomplete = true; continue; }
        const best = (sc.threats || []).slice().sort((a, z) => num(z.pTouchdown) - num(a.pTouchdown))[0];
        const conditional = num(best?.pTouchdown);
        pScore += b.p * conditional; checkedSuccessMass += b.p;
        continuationUnknown += b.p * num(best?.unresolved);
        branches.push({ mass: b.p, conditionalScore: conditional,
          maUsed: b.observation.activation?.maUsed, continuation: best?.input,
          unresolved: num(best?.unresolved) });
        if (sc.truncated || sc.exact === false || best?.exact === false || num(best?.unresolved) > 1e-8) report.incomplete = true;
      }
      const missing = Math.max(num(ex.unresolvedMass), num(ex.rest?.p),
        success.reduce((sum, b) => sum + b.p, 0) - checkedSuccessMass) + continuationUnknown;
      report.unresolved = Math.max(report.unresolved, missing);
      if (missing > 1e-8) report.incomplete = true;
      report.lowerBound = Math.max(report.lowerBound, pScore);
      report.lines.push({ label: c.label, input: c.input, pScoreLowerBound: pScore,
        pickupTurnover: num(ex.pTurnover), unresolved: missing, branches });
    }
    return report;
  }

  // Reuse an already explored opponent contact action. A push alone can
  // open a pickup-scoring lane. Check two real continuation states, keeping
  // the current actor's activation and all remaining movement unchanged.
  async function groundReplyFollowup(ex, sv, call, capMs, me, left) {
    const opp = other(me);
    const report = { lowerBound: 0, checkedMass: 0, unexaminedMass: 0, incomplete: false, branches: [],
      scope: 'two retained opponent contact outcomes, then bounded pickup-scoring continuations; not a complete opponent Turn' };
    const eligible = (ex.outcomes || []).filter(b => b.observation && b.active === opp &&
      !b.turnover && !b.touchdown && b.observation.ball?.kind === 'ground');
    for (const b of eligible.filter(b=>b.key).slice().sort((a,z) => z.p-a.p).slice(0,2)) {
      if (left() < 1800) { report.incomplete = true; break; }
      const threat = await pickupScoreThreat(b, sv, call, capMs, me, left);
      report.lowerBound += b.p * threat.lowerBound;
      report.checkedMass += b.p;
      report.branches.push({ mass: b.p, activation: b.observation.activation, ...threat });
      if (threat.incomplete) report.incomplete = true;
    }
    report.unexaminedMass = Math.max(0, eligible.reduce((n,b) => n+b.p,0)-report.checkedMass) +
      Math.max(num(ex.unresolvedMass),num(ex.rest?.p));
    if (report.unexaminedMass > 1e-8) report.incomplete = true;
    return report;
  }

  // Narrow opponent routes, backed by retained terminal observations. The
  // direct-scoring API excludes transfers. Cheap legal candidates propose
  // direct routes, then explore supplies retained terminal scores. Geometric
  // ordering is only a search priority, never a success probability.
  async function retainedDirectScore(out, sv, call, capMs, me, left) {
    const opp = other(me), ob = out.observation, car = holder(ob);
    const report = { lowerBound: 0, incomplete: false, unresolved: 0, input: null };
    if (out.turnover || out.touchdown || ob.active !== opp || car?.team !== opp ||
        !available(ob,car) || !standing(car) || car.rooted ||
        goalDist(ob,opp,car.pos) > movementLeft(ob,car) + (has(car,'sprint') ? 3 : 2)) return report;
    if (left() < 600) { report.incomplete = true; return report; }
    const act = ob.activation, gx=goal(ob,opp);
    const family=act?.playerId===car.id && !act.over ? act.action : 'move';
    // Cheap engine legality/routes first. Exact candidate plans followed by
    // explore were duplicating enumeration and could exhaust this allowance
    // before any terminal score was observed.
    const r=await call(()=>sv.candidates({from:out.key,team:opp,players:[car.id],
      families:[family],region:{x0:gx,x1:gx},sort:'steps',precision:'none',limit:16,maxMs:capMs(300)}));
    if (!r?.ok) { report.incomplete=true; return report; }
    const danger=c=>{
      let at=car.pos,n=0;
      for (const step of c.input.path || []) {
        if (ob.players.some(q=>q.team===me && tz(q) && dist(q.pos,at)===1)) n++;
        at=step.to;
      }
      return n+num(c.rushes);
    };
    const routes=(r.candidates || []).filter(c=>c.input && c.kind==='score' && !c.targetId)
      .sort((a,b)=>danger(a)-danger(b) || (a.input.path?.length || 0)-(b.input.path?.length || 0));
    if (r.hasMore || r.truncated?.length || routes.length>2) report.incomplete=true;
    for (const route of routes.slice(0,2)) {
      if (left()<350) { report.incomplete=true; break; }
      const ex=await call(()=>sv.explore(route.input,{from:out.key,team:opp,perspective:me,
        observations:true,decisions:'builtin',maxOutcomes:20,maxKeep:256,maxLeaves:1800,
        threshold:0.0001,maxMs:capMs(550)}));
      if (!ex?.ok || !ex.outcomes?.length) { report.incomplete=true; continue; }
      const bound=observedTerminalScore(ex,opp,ob);
      if (bound>report.lowerBound) { report.lowerBound=bound; report.input=route.input; }
      const known=ex.outcomes.reduce((n,b)=>n+(b.observation ? num(b.p) : 0),0);
      const missing=Math.max(num(ex.unresolvedMass),num(ex.rest?.p),Math.max(0,1-known));
      report.unresolved=Math.max(report.unresolved,missing);
      if (missing>1e-8) report.incomplete=true;
    }
    return report;
  }

  async function transferScoreThreat(out, sv, call, capMs, me, left) {
    const opp = other(me), ob = out.observation, car = holder(ob);
    const report = { lowerBound:0, incomplete:false, unresolved:0, lines:[],
      scope:'at most two legal Pass/Handoff routes and two retained success states per route; receiver direct TD only' };
    if (out.turnover || out.touchdown || ob.active!==opp || car?.team!==opp || !available(ob,car)) return report;
    const receivers = ob.players.filter(p => p.team===opp && p.id!==car.id && standing(p) &&
      (goalDist(ob,opp,p.pos)===0 || available(ob,p) && !p.rooted &&
        goalDist(ob,opp,p.pos)<=movementLeft(ob,p)+(has(p,'sprint') ? 3 : 2)));
    if (!receivers.length) return report;
    if (left()<900) { report.incomplete=true; return report; }
    const r = await call(() => sv.candidates({ from:out.key, team:opp, players:[car.id],
      targets:receivers.map(p=>p.id), families:['handoff','pass'], precision:'none', sort:'steps', limit:16, maxMs:capMs(500) }));
    if (!r?.ok) { report.incomplete=true; return report; }
    const routes = (r.candidates || []).map(c=>canonical(c,ob)).filter(c=>c && ['handoff','pass'].includes(c.family) &&
      receivers.some(p=>p.id===c.targetId)).sort((a,b)=>
        Number(a.family==='pass')-Number(b.family==='pass') ||
        (a.input.path?.length || 0)-(b.input.path?.length || 0) ||
        find(ob,a.targetId).ag-find(ob,b.targetId).ag ||
        goalDist(ob,opp,find(ob,a.targetId).pos)-goalDist(ob,opp,find(ob,b.targetId).pos));
    // Prioritize a short, reliable transfer plus a different family when
    // offered; equivalent path variants must not crowd Pass out of the check.
    const chosen = routes.length ? [routes[0]] : [];
    const second = routes.find(c=>c.family!==chosen[0]?.family) || routes.find(c=>c.targetId!==chosen[0]?.targetId);
    if (second) chosen.push(second);
    if (r.hasMore || r.truncated?.length || routes.length>chosen.length) report.incomplete=true;
    for (const c of chosen) {
      if (left()<700) { report.incomplete=true; break; }
      const ex = await call(() => sv.explore(c.input, { from:out.key, team:opp, perspective:me,
        observations:true, decisions:'builtin', maxOutcomes:24, maxKeep:256, maxLeaves:2400,
        threshold:0.0001, maxMs:capMs(650) }));
      if (!ex?.ok || !ex.outcomes?.length) { report.incomplete=true; continue; }
      let pScore = observedTerminalScore(ex,opp,ob), checkedMass=0, downstreamUnknown=0;
      const successes = ex.outcomes.filter(b=>b.observation && b.active===opp && !b.turnover && !b.touchdown &&
        holder(b.observation)?.team===opp && b.observation.ball.playerId!==car.id);
      const branches=[];
      for (const b of successes.filter(b=>b.key).slice().sort((a,z)=>z.p-a.p).slice(0,2)) {
        if (left()<600) { report.incomplete=true; break; }
        const continuation = await retainedDirectScore(b,sv,call,capMs,me,left);
        pScore += b.p*continuation.lowerBound; checkedMass += b.p;
        downstreamUnknown += b.p*continuation.unresolved;
        branches.push({ mass:b.p, receiverId:b.observation.ball.playerId,
          activation:b.observation.activation, ...continuation });
        if (continuation.incomplete) report.incomplete=true;
      }
      const missing = Math.max(num(ex.unresolvedMass),num(ex.rest?.p),
        Math.max(0,successes.reduce((n,b)=>n+b.p,0)-checkedMass)) + downstreamUnknown;
      if (missing>1e-8) report.incomplete=true;
      report.unresolved=Math.max(report.unresolved,missing);
      // Different transfer inputs are alternative policies, not disjoint events.
      report.lowerBound=Math.max(report.lowerBound,pScore);
      report.lines.push({ label:c.label,input:c.input,scoreLowerBound:pScore,unresolved:missing,branches });
    }
    return report;
  }

  async function heldReplyFollowup(ex, sv, call, capMs, me, left) {
    const opp=other(me);
    const report={lowerBound:0,checkedMass:0,unexaminedMass:0,incomplete:false,branches:[],
      scope:'two retained contact outcomes; direct score or one transfer then receiver score; not a complete opposing Turn'};
    const eligible=(ex.outcomes || []).filter(b=>b.observation && b.active===opp && !b.turnover && !b.touchdown && holder(b.observation)?.team===opp);
    for (const b of eligible.filter(b=>b.key).slice().sort((a,z)=>z.p-a.p).slice(0,2)) {
      if (left()<900) { report.incomplete=true; break; }
      const direct=await retainedDirectScore(b,sv,call,capMs,me,left);
      const transfer=await transferScoreThreat(b,sv,call,capMs,me,left);
      const bound=Math.max(direct.lowerBound,transfer.lowerBound);
      report.lowerBound += b.p*bound; report.checkedMass += b.p;
      report.branches.push({mass:b.p,direct,transfer,scoreLowerBound:bound});
      if (direct.incomplete || transfer.incomplete) report.incomplete=true;
    }
    report.unexaminedMass=Math.max(0,eligible.reduce((n,b)=>n+b.p,0)-report.checkedMass)+Math.max(num(ex.unresolvedMass),num(ex.rest?.p));
    if (report.unexaminedMass>1e-8) report.incomplete=true;
    return report;
  }

  // Keep reply traces below the host payload limit. Full real states stay in
  // services, not the report; repeated paths/activation objects add no evidence
  // to the scoring correction. Preserve branch masses and unresolved flags.
  function transferThreatSummary(r) {
    return {lowerBound:r.lowerBound,incomplete:r.incomplete,unresolved:r.unresolved,scope:r.scope,
      lines:r.lines.map(l=>({label:l.label,action:l.input.action,actorId:l.input.playerId,
        targetId:l.input.handoffTarget || null,scoreLowerBound:l.scoreLowerBound,unresolved:l.unresolved,
        branches:l.branches.map(b=>({mass:b.mass,receiverId:b.receiverId,lowerBound:b.lowerBound,
          incomplete:b.incomplete,unresolved:b.unresolved,maUsed:b.activation?.maUsed,
          destination:b.input?.path?.at(-1)?.to || null}))}))};
  }
  function heldThreatSummary(r) {
    return {lowerBound:r.lowerBound,checkedMass:r.checkedMass,unexaminedMass:r.unexaminedMass,
      incomplete:r.incomplete,scope:r.scope,branches:r.branches.map(b=>({mass:b.mass,
        scoreLowerBound:b.scoreLowerBound,direct:b.direct.lowerBound,transfer:b.transfer.lowerBound,
        incomplete:b.direct.incomplete || b.transfer.incomplete,
        unresolved:Math.max(b.direct.unresolved,b.transfer.unresolved)}))};
  }
  function compactCoachTrace(trace) {
    if (JSON.stringify(trace).length<=38000) return trace;
    const compact=JSON.parse(JSON.stringify(trace,(_key,value)=>{
      if (value?.kind==='playerAction' && Array.isArray(value.path) && value.path.length) {
        const {path,...rest}=value;
        return {...rest,pathSummary:{steps:path.length,destination:path.at(-1)?.to}};
      }
      return value;
    }));
    compact.compacted=true;
    compact.pathDetails='Repeated proposed paths summarized; the returned action and match history keep the complete executed input.';
    if (JSON.stringify(compact).length<=38000) return compact;
    // Keep every candidate's aggregate evidence even if rich preparation/reply
    // diagnostics must be reduced. Do not lose search, selection or chosen.
    compact.lines=(compact.lines || []).map(l=>({label:l.label,kind:l.kind,pTurnover:l.pTurnover,
      pTouchdown:l.pTouchdown,terminalScoreMass:l.terminalScoreMass,unresolved:l.unresolved,
      firstAction:l.firstAction,strategicDelta:l.strategicDelta,preparationGain:l.preparationGain,
      criticalReplyAdjustment:l.criticalReplyAdjustment,positionReplyAdjustment:l.positionReplyAdjustment,
      value:l.value,checkedReplyMass:l.checkedReplyMass,boundedReplyMass:l.boundedReplyMass,
      observedReplyMass:l.observedReplyMass,uncheckedReplyMass:l.uncheckedReplyMass,
      reply:(l.reply || []).map(r=>({p:r.p,stage:r.stage,adjustment:r.adjustment,
        criticalAdjustment:r.criticalAdjustment,positionAdjustment:r.positionAdjustment,
        directScore:r.directScore,unknown:r.unknown,essentialComplete:r.essentialComplete,failed:r.failed,
        transferContinuation:r.transferContinuation && {lowerBound:r.transferContinuation.lowerBound,
          incomplete:r.transferContinuation.incomplete,unresolved:r.transferContinuation.unresolved},
        heldReplyContinuation:r.heldReplyContinuation && {lowerBound:r.heldReplyContinuation.lowerBound,
          incomplete:r.heldReplyContinuation.incomplete,checkedMass:r.heldReplyContinuation.checkedMass,
          unexaminedMass:r.heldReplyContinuation.unexaminedMass}}))}));
    return compact;
  }

  async function replyAssessment(out, sv, call, capMs, me, left, big) {
    const opp = other(me), ob = out.observation, car = holder(ob);
    const report = { adjustment: 0, directScore: null, carrierThreat: null, unknown: false, essentialComplete: true, failed: false, reply: null };
    // All added transfer/contact continuation work shares this small local
    // allowance AND the original module deadline; no global depth expansion.
    const heldDeadline=Date.now()+Math.min(big ? 2600 : 1300,Math.max(0,left()-900));
    const heldLeft=()=>Math.min(left(),heldDeadline-Date.now());
    const heldCap=(n=650)=>Math.min(capMs(n),Math.max(50,heldLeft()-100));
    const engineCall = call;
    call = async fn => { const r = await engineCall(fn); if (!r) report.failed = true; return r; };
    const scoring = await call(() => sv.threats.scoring({ from: out.key, team: opp, maxMs: capMs() }));
    if (scoring?.ok) {
      const p = Math.max(0, ...(scoring.threats || []).map(x => num(x.pTouchdown)));
      report.directScore = p; report.adjustment -= p * CFG.opponentScore;
      if ((scoring.threats || []).some(x => x.exact === false || num(x.unresolved) > 1e-8)) report.unknown = true;
      if (scoring.truncated || scoring.exact === false) report.unknown = true;
    } else { report.unknown = true; report.essentialComplete = false; }
    if (scoring?.truncated || scoring?.exact === false || scoring?.threats?.some(x => x.exact === false || num(x.unresolved) > 1e-8)) report.essentialComplete = false;
    if (ob.ball?.kind === 'ground') {
      const continuation = await pickupScoreThreat(out, sv, call, capMs, me, left);
      report.pickupContinuation = continuation;
      const direct = num(report.directScore);
      // These are alternative ways to score, not independent events to add.
      report.directScore = Math.max(direct, continuation.lowerBound);
      report.adjustment -= Math.max(0, continuation.lowerBound - direct) * CFG.opponentScore;
      if (continuation.incomplete) { report.unknown = true; report.essentialComplete = false; }
    }
    if (car?.team === opp) {
      const continuation=await transferScoreThreat(out,sv,call,heldCap,me,heldLeft);
      report.transferContinuation=transferThreatSummary(continuation);
      const direct=num(report.directScore);
      report.directScore=Math.max(direct,continuation.lowerBound);
      report.adjustment-=Math.max(0,continuation.lowerBound-direct)*CFG.opponentScore;
      if (continuation.incomplete) { report.unknown=true; report.essentialComplete=false; }
    }
    if (car?.team === me && left() <= 500) { report.unknown = true; report.essentialComplete = false; }
    if (car?.team === me && left() > 500) {
      const attackers = ob.players.filter(p => p.team === opp && standing(p) && !p.rooted && dist(p.pos, car.pos) <= p.ma + 3)
        .sort((a, b) => dist(a.pos, car.pos) - dist(b.pos, car.pos));
      // A shared enumeration deadline previously favoured early player IDs:
      // a slow first attack could hide a much stronger second attacker. Give
      // each contender its own bounded query and retain every unresolved flag.
      const rows = []; let truncated = false;
      for (const a of attackers.slice(0, 4)) {
        if (left() < 900) { truncated = true; break; }
        const r = await call(() => sv.threats.blitz({ from: out.key, team: opp, targets: [car.id],
          attackers: [a.id], squares: 'best', precision: 'fast', limit: 4, maxMs: capMs(big ? 850 : 500) }));
        if (r?.ok) rows.push(...(r.blitzes || []));
        if (!r?.ok || r.truncated || r.exact === false) truncated = true;
      }
      const bl = { ok: true, blitzes: rows, truncated };
      if (attackers.length > 4) { report.unknown = true; report.essentialComplete = false; }
      if (bl?.ok) {
        const threats = (bl.blitzes || []).flatMap(row => row.variants.map(v => ({ attackerId: row.attackerId, ...v })));
        threats.sort((a, b) => num(b.pTargetDown) * CFG.carrierDown + num(b.pTargetCrowd) * CFG.carrierCrowd -
          num(a.pTargetDown) * CFG.carrierDown - num(a.pTargetCrowd) * CFG.carrierCrowd);
        const worst = threats[0];
        if (worst) {
          const chooser = worst.block?.chooser;
          const dice = worst.block?.dice;
          const threshold = chooser === 'attacker' ? dice === 1 ? 0.90 : dice === 2 ? 0.95 : null : null;
          report.carrierThreat = { attackerId: worst.attackerId, dice, chooser, pTurnover: round(worst.pTurnover), pBallFreed: null, pTargetDown: round(worst.pTargetDown), apiBallFreedIgnored: true,
            pCrowd: round(worst.pTargetCrowd), threshold, meetsTarget: threshold == null ? null : worst.pTurnover >= threshold,
            exact: worst.exact, unresolved: worst.unresolved };
          // Recalculate possession loss from public result states. The V5.6 blitz
          // service's pBallFreed includes unchanged defender possession in this perspective.
          let loss = num(worst.pTargetDown);
          if (worst.input && left() > 1400) {
            const actual = await call(() => sv.explore(worst.input, { from: out.key, team: opp, perspective: me,
              observations: true, decisions: 'builtin', maxOutcomes: 24, maxKeep: 256, maxLeaves: 2400, maxMs: capMs(1000) }));
            if (actual?.ok && actual.outcomes?.length) {
              let known = 0, freed = 0;
              for (const branch of actual.outcomes) if (branch.observation) {
                known += branch.p;
                if (holder(branch.observation)?.team !== me) freed += branch.p;
              }
              const missing = Math.max(num(actual.rest?.p), num(actual.unresolvedMass), 1 - known);
              report.carrierThreat.pBallFreed = round(freed);
              report.carrierThreat.possessionUnknown = round(missing);
              report.carrierThreat.lossSource = 'public outcome observations';
              // Unknown branches keep the conservative down proxy as a floor.
              loss = missing < 1e-8 ? freed : Math.max(loss, freed);
              if (missing > 1e-8) { report.unknown = true; report.essentialComplete = false; }
            } else { report.unknown = true; report.essentialComplete = false; }
          } else if (worst.input) { report.unknown = true; report.essentialComplete = false; }
          report.adjustment -= loss * CFG.carrierDown + num(worst.pTargetCrowd) * CFG.carrierCrowd;
          if (worst.exact === false || num(worst.unresolved) > 1e-8) report.unknown = true;
        }
        if (bl.truncated || bl.exact === false) { report.unknown = true; report.essentialComplete = false; }
        // The service can omit a partly enumerated attack row when its time cap ends.
        // Missing rows cannot mean zero threat. Keep a conservative geometric bound.
        if (!worst && report.unknown && ob.players.some(p => p.team === opp && standing(p) && dist(p.pos, car.pos) <= p.ma + 3)) {
          report.adjustment -= CFG.carrierDown * 0.65;
        }
      } else report.unknown = true;
    }
    // Preserve scoring/ball-carrier threat checks separately from positional estimates.
    report.criticalAdjustment=report.adjustment;
    // Opponent actions can include pickup, pass and cage-opening; score by our evaluation after their action.
    if (left() > 1200) {
      const r = await call(() => sv.candidates({ from: out.key, team: opp, families: ['block', 'blitz', 'secure', 'pass', 'handoff', 'move'],
        ...(car ? { players: ob.players.filter(p => p.team === opp && standing(p) && (p.id === car.id || dist(p.pos, car.pos) <= p.ma + 2)).map(p => p.id) } : {}),
        precision: 'none', sort: 'goalDistance', limit: 45, maxMs: capMs() }));
      if (!r?.ok || r.complete === false || r.hasMore || r.truncated?.length) report.unknown = true;
      if (!r?.ok || r.truncated?.length) report.essentialComplete = false;
      const blocks = await call(() => sv.candidates({ from: out.key, team: opp, families: ['block'],
        precision: 'none', limit: 25, maxMs: capMs(500) }));
      if (!blocks?.ok || blocks.hasMore) report.unknown = true;
      if (!blocks?.ok || blocks.truncated?.length) report.essentialComplete = false;
      const replyMap = new Map();
      for (const row of [...(r?.candidates || []), ...(blocks?.candidates || [])]) {
        const c = canonical(row,ob); if (c) replyMap.set(JSON.stringify(c.input), c);
      }
      const replies = [...replyMap.values()];
      const base = boardValue(ob, me);
      replies.forEach(c => c.cheap = cheapScore(ob, c, opp, boardValue(ob, opp)));
      replies.sort((a, b) => b.cheap - a.cheap);
      let worst = 0, worstOutcome = null, followupsChecked = 0, heldFollowupsChecked = 0;
      const contact = replies.filter(c => c.family === 'block').slice(0, 1);
      const examined = [...new Set([...contact, ...replies.slice(0, big ? CFG.replies : 1)])];
      for (const c of examined) {
        if (left() < 700) { report.unknown = true; report.essentialComplete = false; break; }
        const ex = await call(() => sv.explore(c.input, { from: out.key, team: opp, perspective: me, observations: true, decisions: 'builtin', maxOutcomes: 16, maxKeep: 256,
          maxLeaves: 1400, maxMs: capMs() }));
        if (!ex?.ok || !ex.outcomes?.length) { report.unknown = true; report.essentialComplete = false; continue; }
        const evaluated = outcomeValue(ex, me, base);
        // A touchdown resets the Drive: withdrawn pitch players and the lost
        // ball are consequences of that score, not an extra material disaster.
        const scoreResetCorrection = ex.outcomes.reduce((sum, b) => {
          const ob2 = b.observation;
          if (!ob2) return sum;
          const delta = (ob2.score?.[opp] || 0) - (ob.score?.[opp] || 0);
          return delta > 0 ? sum + b.p * (base - delta * CFG.touchdown - boardValue(ob2, me)) : sum;
        }, 0);
        const scored = ex.outcomes.reduce((sum, b) => sum + (b.observation ? b.p * Math.max(0,
          (b.observation.score?.[opp] || 0) - (ob.score?.[opp] || 0)) : 0), 0);
        let delta = evaluated.value - base + scoreResetCorrection + scored * (CFG.touchdown - CFG.opponentScore)
          - evaluated.unknown * CFG.unresolved;
        let followup = null, continuationDanger=scored;
        const contactNearBall = ob.ball?.kind === 'ground' && ['block', 'blitz'].includes(c.family) &&
          dist(find(ob, c.targetId)?.pos, ob.ball.pos) <= 2;
        if (followupsChecked < 1 && contactNearBall) {
          followupsChecked++;
          followup = await groundReplyFollowup(ex, sv, call, capMs, me, left);
          // Terminal touchdowns already counted by the first action are
          // excluded from followup; these probabilities belong to later play.
          delta -= followup.lowerBound * CFG.opponentScore; continuationDanger+=followup.lowerBound;
          report.groundReplyContinuation = { label: c.label, scoreLowerBound: followup.lowerBound,
            checkedMass: followup.checkedMass, unexaminedMass: followup.unexaminedMass, incomplete: followup.incomplete }; 
          if (followup.incomplete) { report.unknown = true; report.essentialComplete = false; }
        } else if (contactNearBall) {
          report.groundReplySkipped = (report.groundReplySkipped || 0) + 1;
          report.unknown = true; report.essentialComplete = false;
        }
        const heldContact = car?.team===opp && ['block','blitz'].includes(c.family) &&
          ob.players.some(p=>p.team===opp && available(ob,p) && standing(p) &&
            goalDist(ob,opp,p.pos)<=movementLeft(ob,p)+(has(p,'sprint') ? 3 : 2) && dist(p.pos,find(ob,c.targetId)?.pos)<=2);
        if (heldContact && heldFollowupsChecked<1) {
          heldFollowupsChecked++;
          const continuation=await heldReplyFollowup(ex,sv,call,heldCap,me,heldLeft);
          // Only later terminal scores, excluding the first action's TDs.
          delta-=continuation.lowerBound*CFG.opponentScore; continuationDanger+=continuation.lowerBound;
          report.heldReplyContinuation={label:c.label,...heldThreatSummary(continuation)};
          if (continuation.incomplete) { report.unknown=true; report.essentialComplete=false; }
        } else if (heldContact) {
          report.heldReplySkipped=(report.heldReplySkipped || 0)+1;
          report.unknown=true; report.essentialComplete=false;
        }
        if (evaluated.unknown > 1e-8) report.unknown = true;
        if (evaluated.unknown > 0.02) report.essentialComplete = false;
        // First-action TD and later nonterminal scoring branches are disjoint
        // for this examined route; alternative routes use the worst cost, not a sum.
        report.criticalAdjustment=Math.min(report.criticalAdjustment,-Math.min(1,continuationDanger)*CFG.opponentScore);
        if (delta < worst) {
          worst = delta; report.reply = { label: c.label, valueChange: round(delta), unresolved: round(evaluated.unknown) };
          worstOutcome = ex.outcomes.filter(b => b.key && b.observation && !b.touchdown).sort((a, b) => b.p - a.p)[0] || null;
        }
      }
      // Threat-specific penalties and reply losses overlap; take the worse rather than double-counting.
      report.adjustment = Math.min(report.adjustment, worst);
      // Third ply: our next scoring opportunity after the examined opponent reply.
      // This is conditional on one reply branch, not a proof about their entire Turn.
      if (worstOutcome && left() > 1600 && holder(worstOutcome.observation)?.team === me) {
        let future = worstOutcome;
        let transitionMass = 1;
        if (future.active === opp) {
          const finish = await call(() => sv.explore({ kind: 'endTurn' }, { from: future.key, team: opp, perspective: me,
            observations: true, maxOutcomes: 3, maxLeaves: 250, maxMs: capMs(400) }));
          future = finish?.outcomes?.find(b => b.key && b.active === me && b.observation);
          transitionMass = num(future?.p);
          if (!finish?.ok || num(finish.unresolvedMass) > 1e-8 || num(finish.rest?.p) > 1e-8) report.unknown = true;
        }
        if (future?.key && future.active === me) {
          const chances = await call(() => sv.threats.scoring({ from: future.key, team: me, maxMs: capMs(700) }));
          if (chances?.ok) {
            const probability = Math.max(0, ...(chances.threats || []).map(b => num(b.pTouchdown)));
            report.nextTurn = { conditionalDirectScore: round(probability), replyBranchMass: round(worstOutcome.p),
              turnTransitionMass: round(transitionMass),
              scope: 'one examined opponent action, then end Turn; other opponent actions not simulated' };
            report.adjustment += 18 * worstOutcome.p * transitionMass * probability;
            if (chances.truncated || chances.exact === false || chances.threats?.some(b => b.exact === false || num(b.unresolved) > 1e-8)) report.unknown = true;
          } else report.unknown = true;
        } else report.unknown = true;
      }
    } else { report.unknown = true; report.essentialComplete = false; }
    if (report.unknown) report.adjustment -= 4;
    report.adjustment = round(report.adjustment);
    report.criticalAdjustment=round(Math.min(0,report.criticalAdjustment));
    report.positionAdjustment=round(Math.min(0,report.adjustment-report.criticalAdjustment));
    return report;
  }

  function faceValue(id, attacker, defender, o) {
    const ownAttacker = attacker?.team === o.team;
    const ball = holder(o);
    const ownFalls = id === 'playerDown' || (id === 'bothDown' && !has(attacker, 'block') && !has(attacker, 'wrestle'));
    const targetFalls = id === 'pow' || (id === 'stumble' && (!has(defender, 'dodge') || has(attacker, 'tackle'))) ||
      (id === 'bothDown' && !has(defender, 'block'));
    let v = ownFalls ? -150 : 0;
    if (targetFalls) v += defender?.id === ball?.id ? 100 : 30;
    else if (['push', 'stumble'].includes(id)) v += 7;
    if (['push', 'stumble', 'pow'].includes(id) && forcedSurf(o, attacker, defender, attacker?.pos, o.activation?.action === 'blitz')) v += 64;
    // A push can enable a Frenzy second Block. This is a tactical hint only;
    // it is not an assertion that both Blocks will succeed or stay favorable.
    if (id === 'push' && has(attacker, 'frenzy') && has(attacker, 'block') && defender?.pos &&
      edge(o, defender.pos) === 1 && attacker.st >= defender.st && !has(defender, 'sidestep') && !has(defender, 'standFirm') &&
      attacker.pos?.x === defender.pos.x && edge(o, attacker.pos) === 2) v += 35;
    if (id === 'bothDown' && has(attacker, 'wrestle')) v -= 5;
    return ownAttacker ? v : -v;
  }

  async function chooseDecision(o, req) {
    const options = req.options || [], ids = options.map(x => x.id), ctx = req.context || {};
    const answer = (id, why) => ids.includes(id) ? { optionId: id, why: `Hopeful 1.5.9-GPT: ${why}` } : null;
    const car = holder(o), actor = find(o, ctx.attacker || o.activation?.playerId), target = find(o, ctx.defender || ctx.target || ctx.victim);
    if (req.type === 'kickOrReceive') return answer('receive', 'receive to control the first drive');
    if (['touchback', 'highKick'].includes(req.type)) {
      const candidates = options.map(opt => ({ opt, p: find(o, opt.id) })).filter(x => standing(x.p) && x.p.team === o.team);
      candidates.sort((a, b) => {
        const value = p => p.st * 2 + p.ma * 1.3 + (7 - p.ag) * 1.2 + (has(p, 'sureHands') ? 4 : 0) +
          (has(p, 'block') ? 2 : 0) + (has(p, 'dodge') ? 2 : 0) - unreliable(p) * 8 - (has(p, 'loner') ? 2 : 0) - (has(p, 'noBall') ? 1000 : 0);
        return value(b.p) - value(a.p);
      });
      return candidates[0] ? answer(candidates[0].opt.id, 'reliable carrier with scoring mobility and strength') : null;
    }
    if (req.type === 'blockDie') {
      const rated = options.map(opt => ({ opt, value: faceValue(opt.id, actor, target, o) })).sort((a, b) => b.value - a.value);
      return rated[0] ? answer(rated[0].opt.id, 'protect the ball and avoid an unnecessary turnover') : null;
    }
    if (req.type === 'reroll') {
      const last = (o.turn?.[o.team] || 0) >= o.turnsPerHalf;
      // The failure consequence is in the offered 'none' label, not necessarily
      // in the prompt/kind. Read it so Leap, landing and activation failures are covered.
      const failure = options.find(opt => opt.id === 'none')?.label || '';
      const preserveTurn = /turnover/i.test(failure);
      const actorHasBall = !!actor && !!car && actor.id === car.id;
      const pickResource = critical => {
        if (ids.includes('skill')) return 'skill'; // certain skill retry, no team resource
        const direct = ['veteran', 'star', 'team', 'leader'].filter(id => ids.includes(id));
        if (!critical && ids.includes('pro')) return 'pro';
        const reliable = direct.find(id => {
          const label = options.find(opt => opt.id === id)?.label || '';
          const loner = /Loner\s+(\d)\+/.exec(label);
          return !loner || (7 - Number(loner[1])) / 6 >= 2 / 3;
        });
        if (reliable) return reliable;
        if (ids.includes('pro')) return 'pro';
        return direct[0] || (ids.includes('mascot') ? 'mascot' : null);
      };
      if (ctx.kind === 'blockDice') {
        const pool = ctx.pool || [];
        if (!pool.length || !actor || !target) return null;
        const values = pool.map(face => faceValue(face, actor, target, { ...o, team: actor.team }));
        const best = ctx.chooser === 'defender' ? Math.min(...values) : Math.max(...values);
        const targetCarrier = target.id === car?.id && target.team !== o.team;
        const scoringGate = last && car?.team === o.team && target.team !== o.team &&
          dist(target.pos, car.pos) <= 2 && goalDist(o, o.team, car.pos) <= car.ma + 2 &&
          goalDist(o, o.team, target.pos) < goalDist(o, o.team, car.pos);
        const mustRetry = best < 0 || ((targetCarrier || scoringGate) && best < 25);
        if (!mustRetry) return answer('none', 'keep useful dice; a reroll must serve the ball or scoring route');
        const bad = pool.slice().sort((a, b) => faceValue(a, actor, target, o) - faceValue(b, actor, target, o))[0];
        for (const id of ['brawler', 'hatred']) if (ids.includes(id)) return answer(id, 'use a reliable free block retry');
        // Prefer a certain pool retry to Pro's extra 3+ hurdle in a critical job.
        const resource = pickResource(true);
        if (resource) return answer(resource, targetCarrier ? 'critical ball-carrier block: retry a result that leaves the ball protected' : 'protect the Turn or open the final scoring route');
        for (const id of [`star1:${bad}`, `pro:${bad}`]) if (ids.includes(id)) return answer(id, 'retry the critical block die');
      } else {
        const ballJob = ['pickup', 'catch', 'pass', 'bloodlust'].includes(ctx.kind) || /ball|touchdown|score/i.test(req.prompt);
        const gazeNearBall = /hypnotic|gaze/i.test(ctx.kind || '') && car?.team === other(o.team) &&
          actor?.pos && car.pos && dist(actor.pos, car.pos) <= 3;
        const strategicActivation = usefulActivationRetry(o,req,actor);
        const important = preserveTurn || strategicActivation || ballJob || actorHasBall || gazeNearBall ||
          ['dodge', 'rush'].includes(ctx.kind);
        const resource = pickResource(preserveTurn || strategicActivation || actorHasBall || last || gazeNearBall);
        if (resource && (important || resource === 'skill' || resource === 'pro'))
          return answer(resource, strategicActivation ? 'restore a useful near-ball contact activation with expiring surplus resources' : preserveTurn || last ? 'critical failed test: preserve the Turn or the last scoring opportunity' : 'retry a ball-related job with the most suitable available resource');
      }
      return answer('none', 'preserve rerolls for important jobs');
    }
    if (['pushSquare', 'sidestepSquare', 'grabSquare', 'trickster'].includes(req.type) && target) {
      const rate = opt => {
        if (!opt.square) return boardValue(o, o.team);
        const clone = actor && target.pos ? pushProjection(o, actor, actor.pos, target, opt.square) : null;
        return clone ? boardValue(clone, o.team) : -Infinity;
      };
      const sorted = options.slice().sort((a, b) => rate(b) - rate(a));
      return answer(sorted[0].id, 'push or step to improve the ball route and avoid the sideline');
    }
    if (req.type === 'followUp' && actor && ids.includes('yes') && ids.includes('no')) {
      const dst = options.find(x => x.id === 'yes').square;
      if (!dst) return answer('no', 'hold the useful position');
      const c = { input: { path: [{ to: dst }] }, actorId: actor.id, destination: dst, family: 'move' };
      return answer(boardValue(projected(o, c), o.team) > boardValue(o, o.team) + 0.3 ? 'yes' : 'no', 'follow only if it improves protection or the route');
    }
    if (req.type === 'bloodlust' || /bite|Thrall/i.test(req.prompt)) {
      const candidates = options.map(opt => ({ opt, p: find(o, opt.id) })).filter(x => x.p && x.p.team === o.team && x.p.id !== car?.id);
      if (candidates.length) {
        candidates.sort((a, b) => (usefulSkill(a.p) + (a.p.ma > 6 ? 2 : 0) + (car && dist(a.p.pos, car.pos) <= 1 ? 4 : 0)) -
          (usefulSkill(b.p) + (b.p.ma > 6 ? 2 : 0) + (car && dist(b.p.pos, car.pos) <= 1 ? 4 : 0)));
        return answer(candidates[0].opt.id, 'feed on the least essential eligible teammate, preserving the ball and screen');
      }
    }
    if (['bribe', 'argueTheCall'].includes(req.type)) return answer('yes', 'retain a useful player');
    if (req.type === 'wrestle') {
      // The engine's Wrestle request omits attacker/defender context: infer the
      // current attacker from the activation, and leave ambiguous cases to preview.
      if (!actor) return null;
      if (actor.team === o.team) return answer(!has(actor, 'block') || target?.id === car?.id ? 'yes' : 'no', 'avoid attacker knockdown, or bring down their carrier');
      if (!has(actor, 'block') && actor.id !== car?.id) return answer('no', 'allow their attacker knockdown and turnover');
      return answer('yes', 'neutralise the opposing attacker without armour rolls');
    }
    // Rules whose options require hidden engine mechanics remain under the authoritative preview policy.
    // This is deliberate, visible delegation, not an arbitrary first-option guess.
    return null;
  }

  // Strategic state is public, bounded JSON owned by the host. Worker globals
  // are intentionally not used as persistent storage (one Worker per request).
  function remainingTurns(o, team, includeCurrent = true) {
    return Math.max(0, o.turnsPerHalf - num(o.turn?.[team]) +
      (includeCurrent && o.active === team ? 1 : 0));
  }

  function driveFacts(o, team) {
    const car = holder(o), foe = other(team);
    const ours = o.players.filter(p => p.team === team && onPitch(p));
    const theirs = o.players.filter(p => p.team === foe && onPitch(p));
    const lane = car?.pos ? corridor(o, car.team, car) : null;
    const isOwn = car?.team === team;
    const markers = car ? o.players.filter(p => p.team !== car.team && tz(p) && dist(p.pos, car.pos) === 1).length : 0;
    const currentMove = isOwn ? movementLeft(o, car) : 0;
    // Ordinary carrying estimate only: no invented Rush, transfer or threat
    // probabilities. An exhausted current activation cannot use its MA twice.
    const need = isOwn ? o.active === team ?
      1 + Math.ceil(Math.max(0, lane.cost - currentMove) / Math.max(1, car.ma)) :
      Math.max(1, Math.ceil(lane.cost / Math.max(1, car.ma))) : null;
    const left = remainingTurns(o, team);
    const dangerous = isOwn && (markers > 0 || edge(o, car.pos) <= 1 ||
      unreliable(car) > 0 || pressure(o, car).access >= 0.8 || lane.closedInStaticBoard);
    const emergency = car?.team === foe && goalDist(o, foe, car.pos) <= car.ma + 2;
    return { car, ours, theirs, lane, markers, need, currentMove, left, dangerous, emergency,
      deficit: num(o.score?.[foe]) - num(o.score?.[team]),
      possession: isOwn ? 'ours' : car ? 'theirs' : o.ball?.kind === 'ground' ? 'loose' : 'none' };
  }

  function buildDrivePlan(o, previous) {
    const f = driveFacts(o, o.team), turn = Math.max(1, num(o.turn?.[o.team], 1));
    const urgent = f.possession === 'ours' && (f.deficit > 0 || f.dangerous || f.left <= f.need);
    const carryEarliest = f.need == null ? null : turn + (o.active === o.team ? 0 : 1) + f.need - 1;
    const earliest = carryEarliest == null ? null : Math.min(o.turnsPerHalf, carryEarliest);
    const sameDrive = previous?.schema === 'hopeful-drive/1' && previous.team === o.team &&
      previous.half === o.half && previous.drive === o.drive && previous.format === o.format;
    let reset = !sameDrive ? 'new Drive or match context' :
      previous.possession !== f.possession ? 'possession changed' :
      previous.primaryCarrier !== (f.car?.id || null) ? 'carrier changed' :
      previous.ourCount !== f.ours.length || previous.theirCount !== f.theirs.length ? 'numbers changed' :
      previous.emergency !== f.emergency ? 'immediate scoring threat changed' :
      previous.dangerous !== !!f.dangerous ? 'carrier safety changed' :
      previous.laneCost != null && f.lane && f.lane.cost > previous.laneCost + 3 ? 'main route obstructed' :
      previous.score !== `${num(o.score?.A)}:${num(o.score?.B)}` ? 'score changed' : null;
    // A bounded control window, not an instruction to wait until Turn 8/6.
    // Shorten it when numbers or the delivery clock leave no slack. Engine
    // previews still decide whether declining a current score is actually safe.
    const opponentTurns = remainingTurns(o, other(o.team), false);
    const controlSlack = f.ours.length < f.theirs.length ? 0 :
      Math.max(0, Math.min(2, f.left - num(f.need,1), opponentTurns));
    const freshTarget = earliest == null ? null : urgent ? earliest :
      Math.min(o.turnsPerHalf, earliest + controlSlack);
    const target = !reset && !urgent && previous.targetScoringWindow &&
      previous.targetScoringWindow.target >= earliest ? previous.targetScoringWindow.target : freshTarget;
    const roleRank = p => p.ma + (7 - p.ag) * 2 + (has(p, 'sureHands') ? 5 : 0) - unreliable(p) * 5;
    const backup = f.ours.filter(p => p.id !== f.car?.id && !has(p, 'noBall') && !has(p, 'myBall'))
      .sort((a,b) => roleRank(b) - roleRank(a) || a.id.localeCompare(b.id))[0];
    const naturalSide = !f.lane?.path.length ? f.car?.pos?.y ?? Math.floor(height(o)/2) :
      f.lane.path[Math.min(f.lane.path.length - 1, Math.max(0, num(f.car?.ma) - 1))].y;
    const preferredY = reset ? naturalSide : previous.preferredY;
    // A lane is a soft strategic preference. It never prohibits a legal score,
    // escape, sack, pickup or a demonstrably better complete tactical line.
    return { schema: 'hopeful-drive/1', team: o.team, half: o.half, drive: o.drive, format: o.format,
      possession: f.possession, primaryCarrier: f.car?.id || null, backupCarrier: backup?.id || null,
      preferredY, backupY: height(o) - 1 - preferredY,
      targetScoringWindow: earliest == null ? null : { earliest, target, latest: o.turnsPerHalf,
        opponentTurnsIfScoreNow: opponentTurns, carryEarliest,
        carryWithinHalf: carryEarliest <= o.turnsPerHalf, currentOrdinaryMovement: f.currentMove,
        basis: urgent ? 'conversion urgency' : 'bounded control slack and numbers' },
      driveUrgency: f.emergency ? 'emergency defense' : urgent ? 'convert now' :
        f.possession === 'ours' ? 'controlled advance' : f.possession === 'loose' ? 'recover' : 'pressure / counterattack',
      defensiveObjective: f.emergency ? 'prevent immediate score' : 'compress routes and seek recoverable sacks',
      emergency: !!f.emergency, dangerous: !!f.dangerous,
      ourCount: f.ours.length, theirCount: f.theirs.length, laneCost: f.lane?.cost ?? null,
      score: `${num(o.score?.A)}:${num(o.score?.B)}`, updatedTurn: turn,
      revisionReason: reset || 'plan retained; clock recomputed',
      persistence: o.coachContext !== undefined ? 'host context' : 'host context unavailable; rebuilt from public board' };
  }

  function strategicDelta(o, c, ex, plan, origin = o) {
    const car = holder(o), anchor = holder(origin), me = origin.team;
    if (!plan || plan.possession !== 'ours' || !car?.pos || !anchor?.pos || car.team !== me || anchor.team !== me) return 0;
    // The SAME small lane/progress potential applies to real Carry, Handoff
    // and Pass outcomes. Printed receiver MA is already valued by boardValue.
    // Keep the root anchor for follow-ups so splitting a route cannot multiply
    // its capped progress reward. Terminal, Turnover and unknown branches earn
    // no imagined successful transfer or endpoint benefit.
    const potential = (ob, p) =>
      (plan.dangerous ? 0 : -Math.min(2, Math.abs(p.pos.y - plan.preferredY) * 0.2)) +
      (plan.driveUrgency === 'convert now' ?
        clamp(goalDist(origin,me,anchor.pos) - goalDist(ob,me,p.pos),-3,3) : 0);
    const before = potential(o,car);
    return (ex.outcomes || []).reduce((sum, b) => {
      if (!b.observation || b.turnover || b.touchdown) return sum;
      const after = holder(b.observation);
      return after?.team === me && after.pos ? sum + num(b.p) * (potential(b.observation,after) - before) : sum;
    },0);
  }

  function stallEligibility(o, plan) {
    const f = driveFacts(o, o.team), car = f.car, foe = other(o.team);
    const no = reason => ({ allowed: false, reason });
    if (f.possession !== 'ours' || f.deficit > 0 || f.dangerous || f.left <= 1) return no('score, safety or deadline requires conversion');
    if (!car || !standing(car) || unreliable(car) || has(car, 'loner') || edge(o, car.pos) < 2) return no('carrier reliability or sideline');
    if (goalDist(o, o.team, car.pos) > 2 || f.lane.cost > 2.1) return no('future scoring window not sufficiently secured');
    if (o.strategicPublic?.wizardAvailable?.[foe] !== false) return no('opponent Wizard availability unknown or available');
    if (f.theirs.some(p => p.star || ['bombardier','throwTeamMate','kickTeamMate','ballAndChain'].some(s => has(p,s))))
      return no('special long-range conversion not certified');
    const path = [car.pos, ...f.lane.path];
    // Deliberately pessimistic range test, not a computed Blitz probability.
    // Include prone and stunned players; they may act in a subsequent Turn.
    if (f.theirs.some(p => !p.rooted && path.some(s => dist(p.pos,s) <= p.ma + (has(p,'sprint') ? 3 : 2) + 3)))
      return no('opponent can approach carrier or final route');
    if (f.ours.length < f.theirs.length) return no('numbers disadvantage');
    if (plan.targetScoringWindow?.target <= num(o.turn?.[o.team])) return no('target scoring window reached');
    return { allowed: true, reason: 'bounded safe delay; deny opponent an early counter-Drive',
      opponentTurnsIfScoreNow: remainingTurns(o, foe, false), assumptions: 'public Wizard unavailable; no ranged special; pessimistic one-activation reach exclusion, not exhaustive team search' };
  }

  function usefulActivationRetry(o, req, actor) {
    const kind = req.context?.kind;
    if (!['boneHead','reallyStupid','unchannelledFury'].includes(kind) || !actor?.pos) return false;
    const rr = num(o.rerolls?.[o.team]), left = remainingTurns(o, o.team), car = holder(o);
    if (rr < 2 || rr < left || !car) return false;
    const act = o.activation;
    if (!act || act.playerId !== actor.id || act.over) return false;
    const targetId = act.blitzTarget || req.context?.target || req.context?.defender;
    const target = targetId ? find(o, targetId) : null;
    const nearBall = dist(actor.pos, car.pos) <= 5;
    if (act.action === 'block') return nearBall && o.players.some(p => p.team !== actor.team &&
      standing(p) && dist(p.pos, actor.pos) === 1 && dist(p.pos, car.pos) <= 4);
    if (act.action === 'blitz') return !!target && target.team !== actor.team &&
      (target.id === car.id || nearBall && dist(target.pos, car.pos) <= 4);
    return false;
  }

  async function strategicContacts(o, pool, query, maxMs, diagnostics = []) {
    const car = holder(o), anchor = car?.pos || (o.ball?.kind === 'ground' ? o.ball.pos : null);
    if (!anchor || maxMs < 150) return [];
    // Admit at most two existing, direct near-ball blocks. They still receive
    // the unchanged risk/material/reply comparison; contact is not rewarded.
    const options = pool.filter(c => {
      const p = find(o,c.actorId), q = find(o,c.targetId);
      return c.family === 'block' && available(o,p) && p.id !== car?.id &&
        standing(p) && standing(q) && dist(p.pos,q.pos) === 1 &&
        dist(q.pos,anchor) <= 4 && !unreliable(p) &&
        (has(p,'block') || has(p,'wrestle') || p.st > q.st);
    }).sort((a,b) => dist(find(o,a.targetId).pos,anchor)-dist(find(o,b.targetId).pos,anchor) ||
      num(b.builtIn)-num(a.builtIn) || a.actorId.localeCompare(b.actorId));
    const admitted = [], seen = new Set();
    for (const c of options) {
      if (seen.has(c.actorId)) continue;
      seen.add(c.actorId);
      const r = await query({families:['block'],players:[c.actorId],targets:[c.targetId],
        precision:'exact',limit:1,maxMs:Math.max(100,Math.floor(maxMs/2))});
      const measured = r?.ok && r.candidates?.find(x => x.legal && x.family === 'block');
      diagnostics.push({actor:c.actorId,target:c.targetId,pTurnover:measured?.pTurnover,
        unresolved:measured?.unresolved,status:r?.ok?'measured':'unavailable'});
      if (measured && num(measured.pTurnover,1) <= 0.03 && num(measured.unresolved,1) <= 0.01)
        admitted.push({...measured,strategicContact:true});
      if (seen.size >= 2) break;
    }
    return admitted;
  }

  async function strategicAction(o, legacy, services) {
    const started = Date.now();
    const plan = buildDrivePlan(o, o.coachContext?.drivePlan);
    const movementMemory = observedMovement(o,o.coachContext?.movementMemory);
    const stall = stallEligibility(o, plan);
    if (stall.allowed && available(o, holder(o))) {
      const car = holder(o), squares = [-1,0,1].map(dy => ({ x: goal(o,o.team), y: car.pos.y + dy }));
      const family = o.activation?.playerId === car.id && !o.activation.over ? o.activation.action : 'move';
      try {
        const scores = await services.candidates({ players: [car.id], families: [family],
          region: { within: squares }, precision: 'exact', limit: 6, maxMs: 1200 });
        const certain = scores?.ok && (scores.candidates || []).some(c => num(c.pTouchdown) >= 1 - 1e-8 &&
          c.exact === true && num(c.pTurnover,1) < 1e-8 && !num(c.unresolved));
        if (certain) {
          // Preserve useful free stand-ups rather than abandoning the other
          // players just because our carrier has reached a stalling position.
          const free = legacy.find(c => c.kind === 'standUp' && num(c.pTurnover,1) < 1e-8);
          const input = free?.input || { kind: 'endTurn' };
          const ex = await services.explore(input, { observations: true, perspective: o.team,
            threshold: 0, maxOutcomes: 4, maxLeaves: 400, maxMs: 700 });
          const valid = ex?.ok && !num(ex.pTurnover) && !num(ex.pTouchdown) &&
            outcomeValue(ex,o.team,0).unknown < 1e-8 && ex.outcomes.every(b =>
              b.observation && holder(b.observation)?.id === car.id &&
              stallEligibility({ ...b.observation, active: o.team, turn: o.turn,
                strategicPublic: o.strategicPublic },plan).allowed);
          if (valid) return { input, coachContext: { drivePlan: plan },
            why: `Hopeful 1.5.9-GPT: controlled delay preserves the scoring route and denies an early counter-Drive.${free ? ' Complete useful free stand-up first.' : ''}`,
            trace: { coach: 'Hopeful 1.5.9-GPT', objective: 'controlled delay', drivePlan: plan,
              tempo: stall, chosen: free?.label || 'End the Turn', search: { elapsedMs: Date.now()-started,
                scope: 'exact immediate score and delay action; conservative spatial exclusion, not a full opponent Turn' } } };
          stall.allowed = false;
          stall.reason = 'engine delay preview has crowd/ball risk or unresolved outcomes';
        } else { stall.allowed = false; stall.reason = 'certain immediate scoring route not verified'; }
      } catch { stall.allowed = false; stall.reason = 'delay could not be verified; retain tactical conversion'; }
    }
    const result = await chooseAction({ ...o, drivePlan: plan, movementMemory,
      timeLimitMs: Math.max(400,(o.timeLimitMs || CFG.timeLimitMs) - (Date.now()-started)) }, legacy, services);
    if (result?.trace) result.trace.tempo = stall;
    return result ? { ...result, coachContext: { drivePlan: plan,
      movementMemory: rememberMovement(o,o.coachContext?.movementMemory,result.input) } } : result;
  }

  async function strategicDecision(o, request, services) {
    const result = await chooseDecision(o, request, services);
    return result ? { ...result, coachContext: { drivePlan: buildDrivePlan(o, o.coachContext?.drivePlan),
      movementMemory: observedMovement(o,o.coachContext?.movementMemory) } } : result;
  }

  function chooseSetup(o, req) {
    if (!Array.isArray(req.fixedPlayerIds) || !Array.isArray(req.legalSquares)) return null;
    const team = o.team, receiving = o.kicking !== team;
    const players = req.fixedPlayerIds.map(id => find(o,id));
    if (players.some(p => !p) || !players.length) return null;
    const foes = o.players.filter(p => p.team !== team && ['pitch','reserves'].includes(p.location) && !p.benched);
    const fast = foes.some(p => p.ma >= 8) || foes.filter(p => p.ma >= 7).length >= foes.length / 2;
    const bash = foes.filter(p => p.st >= 4 || has(p,'guard') || has(p,'mightyBlow')).length >= 3;
    const behind = num(o.score?.[team]) < num(o.score?.[other(team)]);
    const timeShort = remainingTurns(o,team,false) <= 2 && num(o.turn?.[team]) > 0;
    const attacking = receiving || behind && timeShort;
    const mid = (height(o)-1)/2, direction = team === 'A' ? -1 : 1;
    const legal = new Set(req.legalSquares.map(sqKey));
    const centre = req.legalSquares.filter(s => s.y >= req.centreRows.min && s.y <= req.centreRows.max);
    const line = req.minLine, count = players.length;
    const roleValue = (p,role) => {
      const handling = has(p,'noBall') || has(p,'myBall') ? -100 : (7-p.ag)*3 + p.ma +
        (has(p,'sureHands') ? 7 : 0) + (has(p,'dodge') ? 2 : 0) - unreliable(p)*7;
      if (role === 'recovery' || role === 'backup') return handling;
      if (role === 'safety') return p.ma*2 + (has(p,'tackle') ? 5 : 0) + (has(p,'wrestle') ? 3 : 0) +
        (has(p,'block') ? 2 : 0) - unreliable(p)*4;
      if (role === 'line') return p.av*2 + p.st*3 + (has(p,'block') ? 3 : 0) +
        (has(p,'regeneration') ? 2 : 0) - Math.max(0,handling-12)*2 - (p.star ? 7 : 0) -
        (['catch','pass','sureHands'].some(s=>has(p,s)) ? 4 : 0);
      return p.st*2 + p.ma + usefulSkill(p)*2 - unreliable(p)*2;
    };
    let best = null;
    // Jointly compare small complete layouts. Slots are regenerated from N,
    // opponent speed/strength, receive/kick and clock; not a deleted template.
    for (const spread of [1,2,3]) for (const depthShift of [0,1]) {
      const occupied = new Set(), slots = [];
      const put = (x,y,role) => {
        const preferred = {x,y:Math.round(y)};
        const wideCount = side => slots.filter(c => side === 'upper' ? c.y < req.centreRows.min : c.y > req.centreRows.max).length;
        const candidates = role === 'line' ? centre.filter(c => c.x === req.lineOfScrimmage) :
          req.legalSquares.filter(c => c.y > 0 && c.y < height(o)-1 &&
            (c.y >= req.centreRows.min && c.y <= req.centreRows.max ||
              wideCount(c.y < req.centreRows.min ? 'upper' : 'lower') < req.maxWide));
        const slot = candidates.filter(c => !occupied.has(sqKey(c))).sort((a,b) =>
          dist(a,preferred)-dist(b,preferred) || Math.abs(a.y-mid)-Math.abs(b.y-mid) || a.x-b.x)[0];
        if (!slot || !legal.has(sqKey(slot))) return false;
        occupied.add(sqKey(slot)); slots.push({ ...slot,role }); return true;
      };
      const lineSpread = bash && !receiving ? 2 : 1;
      for (let i=0;i<line;i++) put(req.lineOfScrimmage,mid+(i-(line-1)/2)*lineSpread,'line');
      const offLine = count-line;
      // With fewer players, retain coverage roles but shrink unsupported gaps.
      const deep = receiving ? (o.format === 'sevens' ? 3 : 4) : fast && !attacking ? 5 : 3;
      const rear = req.lineOfScrimmage + direction*(deep+depthShift);
      if (offLine>0) put(rear,mid-(offLine>=4 ? spread : 0),receiving ? 'recovery':'safety');
      if (offLine>1) put(rear+direction,mid+spread,receiving ? 'backup':'safety');
      const screenCount = Math.max(0,offLine-2);
      for (let i=0;i<screenCount;i++) {
        const row = Math.floor(i/4), inRow = Math.min(4,screenCount-row*4);
        const y = mid+(i%4-(inRow-1)/2)*Math.min(spread*2,screenCount>=6?3:2);
        const depth = (receiving ? 1 : bash ? 2 : attacking ? 1 : 3)+row+depthShift;
        put(req.lineOfScrimmage+direction*depth,y,'screen');
      }
      if (slots.length!==count) continue;
      const assigned = [], unused = new Set(players);
      // Assign protected roles first, then optimize all player/slot exchanges.
      for (const ix of slots.map((s,i)=>i).sort((a,b)=>
        (slots[a].role==='line'?1:0)-(slots[b].role==='line'?1:0))) {
        const p=[...unused].sort((a,b)=>roleValue(b,slots[ix].role)-roleValue(a,slots[ix].role) || a.id.localeCompare(b.id))[0];
        assigned[ix]=p;unused.delete(p);
      }
      const pairValue = (p,s) => roleValue(p,s.role) -
        (s.role==='line'?0:foes.filter(q => q.pos && dist(q.pos,s)<=1).length*(8+Math.max(0,11-p.av)));
      for(let pass=0;pass<3;pass++) for(let i=0;i<count;i++) for(let j=i+1;j<count;j++) {
        const before=pairValue(assigned[i],slots[i])+pairValue(assigned[j],slots[j]);
        const after=pairValue(assigned[i],slots[j])+pairValue(assigned[j],slots[i]);
        if(after>before+.01) [assigned[i],assigned[j]]=[assigned[j],assigned[i]];
      }
      let value=assigned.reduce((v,p,i)=>v+pairValue(p,slots[i]),0);
      const coverage = slots.filter(s=>s.role!=='line');
      // Measure both flanks and central coverage, instead of rewarding width
      // itself. Sparse teams must not stretch unsupported gaps.
      for (const y of [req.centreRows.min,mid,req.centreRows.max])
        value-=Math.min(...coverage.map(s=>Math.abs(s.y-y)),height(o))*(fast?2:1);
      for(let i=0;i<coverage.length;i++) {
        const nearest=coverage.filter((_,j)=>j!==i).reduce((d,s)=>Math.min(d,dist(s,coverage[i])),99);
        if(coverage.length>1) value-=Math.max(0,nearest-3)*(count<10?3:1);
      }
      if(receiving) {
        // Recovery reach is based on actual MA/reliability over plausible
        // landing coverage; these are geometry estimates, not pickup odds.
        const recovery=slots.map((s,i)=>({s,p:assigned[i]})).filter(x=>['recovery','backup'].includes(x.s.role));
        for(const landing of centre.filter(s=>s.x===rear && [req.centreRows.min,Math.round(mid),req.centreRows.max].includes(s.y)))
          value-=Math.min(...recovery.map(x=>Math.max(0,dist(x.s,landing)-x.p.ma)))*3;
      }
      if(!best || value>best.value) best={value,slots,assigned,spread,depthShift};
    }
    if(!best) return null;
    const positions={...req.defaultPositions};
    best.assigned.forEach((p,i)=>positions[p.id]={x:best.slots[i].x,y:best.slots[i].y});
    return { positions, coachContext:{drivePlan:buildDrivePlan(o,null)},
      why:`Hopeful 1.5.9-GPT: ${receiving?'receiving recovery and protection':'kicking screen and safety'}; ${count} fielded, ${fast?'fast':'ordinary'} opponent, ${bash?'physical':'mobile'} matchup; joint role assignment across six regenerated formations.` };
  }

  // Propose complete Pass activations using already-generated carrier routes.
  // Geometry ranks proposals only; the existing engine exploration owns legality,
  // pass/catch odds and receiver continuation. No extra passing-value bonus.
  function movingPassProposals(o, candidates) {
    const car = holder(o);
    if (!car || car.team !== o.team || !standing(car) || !available(o,car) ||
        car.pa == null || car.rooted || has(car,'noBall') ||
        (o.activation && (o.activation.playerId !== car.id ||
          o.activation.action !== 'pass' || o.activation.ballActionDone))) return [];
    const zonesAgainst = zones(o,other(o.team));
    const markers = at => num(zonesAgainst.get(sqKey(at)));
    const remaining = Math.max(0,car.ma - num(o.activation?.maUsed));
    const routes = candidates.filter(c => c.actorId === car.id && c.family === 'move' &&
      c.input.path?.length && c.input.path.length <= remaining && !num(c.rushes) && destOf(c));
    const receivers = o.players.filter(p => p.team === o.team && p.id !== car.id &&
      standing(p) && !p.distracted && !has(p,'noBall') && !has(p,'myBall') &&
      goalDist(o,o.team,p.pos) < goalDist(o,o.team,car.pos));
    const proposed = [];
    for (const receiver of receivers) {
      const before = dist(car.pos,receiver.pos);
      const approaches = routes.map(c => {
        const at = destOf(c), after = dist(at,receiver.pos);
        const departures = [car.pos,...c.input.path.slice(0,-1).map(s => s.to)];
        return {c,at,after,distanceSquared:(at.x-receiver.pos.x)**2+(at.y-receiver.pos.y)**2,
          departureMarkers:departures.reduce((n,s)=>n+markers(s),0),
          improvement:before-after, markerImprovement:markers(car.pos)-markers(at)};
      }).filter(r => r.after > 0 && (r.improvement >= 2 || r.markerImprovement > 0))
        .sort((a,b) => a.departureMarkers-b.departureMarkers || markers(a.at)-markers(b.at) ||
          a.distanceSquared-b.distanceSquared || a.c.input.path.length-b.c.input.path.length);
      const best = approaches[0];
      if (!best) continue;
      proposed.push({ input:{kind:'playerAction',playerId:car.id,action:'pass',
          path:best.c.input.path,passTarget:{...receiver.pos}},
        family:'pass',kind:'pass',actorId:car.id,targetId:receiver.id,
        destination:{...best.at},rushes:0,movingTransfer:true,
        transferHint:{receiverGoalDistance:goalDist(o,o.team,receiver.pos),
          distanceReduction:best.improvement,departureMarkers:best.departureMarkers},
        label:`${car.name}: move then pass to ${receiver.name}` });
    }
    return proposed.sort((a,b) => a.transferHint.departureMarkers-b.transferHint.departureMarkers ||
      a.transferHint.receiverGoalDistance-b.transferHint.receiverGoalDistance ||
      b.transferHint.distanceReduction-a.transferHint.distanceReduction).slice(0,2);
  }

  // A past square is dominated only within the SAME activation and unchanged
  // public world. Store actual progress, not an assumed successful whole path.
  function movementWorld(o, actorId) {
    const act=o.activation?.playerId===actorId ? o.activation : null;
    return JSON.stringify([o.ball, o.score, o.weather,o.rerolls,o.used,
      [num(act?.blocksDone),!!act?.ballActionDone,!!act?.specialDone,!!act?.foulDone,act?.bloodlust ?? null],
      o.players.filter(p => p.id !== actorId).map(p => [p.id,p.team,p.pos,p.location,
        p.stance,p.distracted,p.tackleZone,p.rooted,p.activated,p.st,p.skills,p.usage]),
      (() => {const p=find(o,actorId);return p && [p.stance,p.distracted,p.rooted,p.skills,p.usage];})()]);
  }

  function movementKey(o, playerId, action) {
    return JSON.stringify([o.team,o.half,o.drive,o.turn?.[o.team],playerId,action]);
  }

  function observedMovement(o, previous) {
    const act=o.activation,p=act && find(o,act.playerId);
    if (!p?.pos || act.over || !previous || previous.playerId!==p.id ||
        previous.key!==movementKey(o,p.id,act.action) ||
        previous.world!==movementWorld(o,p.id)) return null;
    const visited=(previous.visited || []).slice();
    // A pending failed roll may stop part-way through a submitted path.
    // Only add its observed prefix; never ban squares not actually reached.
    const at=(previous.plannedPath || []).findIndex(s => sqKey(s)===sqKey(p.pos));
    if (at>=0) for (const s of previous.plannedPath.slice(0,at+1))
      if (!visited.some(q => sqKey(q)===sqKey(s))) visited.push({...s});
    if (!visited.some(q => sqKey(q)===sqKey(p.pos))) visited.push({...p.pos});
    return {...previous,visited:visited.slice(-24),
      plannedPath:(previous.plannedPath || []).slice(at>=0 ? at+1 : 0)};
  }

  function movementCycle(o, input, memory) {
    if (!memory || input.kind!=='playerAction' || input.playerId!==memory.playerId ||
        has(find(o,input.playerId),'ballAndChain') ||
        !['move','blitz'].includes(input.action) || input.blockTarget || input.blitzTarget ||
        !input.path?.length) return false;
    // Crossing an old square toward a new destination can be a useful detour.
    // Picking up a loose ball en route also changes the world even if the
    // destination itself was visited before.
    if (o.ball?.kind==='ground' && input.path.some(s => sqKey(s.to)===sqKey(o.ball.pos))) return false;
    const visited=new Set(memory.visited.map(sqKey));
    return visited.has(sqKey(input.path[input.path.length-1].to));
  }

  function rememberMovement(o, previous, input) {
    const observed=observedMovement(o,previous);
    if (!input || input.kind!=='playerAction' || !input.path?.length ||
        !['move','blitz'].includes(input.action)) return observed;
    const p=find(o,input.playerId);
    if (!p?.pos) return null;
    const same=observed?.playerId===p.id && observed.key===movementKey(o,p.id,input.action);
    const record={playerId:p.id,key:movementKey(o,p.id,input.action),world:movementWorld(o,p.id),
      visited:same ? observed.visited : [{...p.pos}],
      plannedPath:input.path.map(s => ({...s.to})).slice(0,24)};
    let bytes=0;
    for (const ch of JSON.stringify(record)) {const n=ch.codePointAt(0);bytes+=n<128 ? 1 : n<2048 ? 2 : n<65536 ? 3 : 4;}
    // Leave space for Drive context in the host's 8 KB envelope. Large exotic
    // observations lose this optional optimisation, not the legal action/plan.
    return bytes<=6000 ? record : null;
  }

  // Only actual first-action terminal observations count. Aggregate pTouchdown
  // may extrapolate unexpanded mass; a label or proposed follow-up is not proof.
  function observedTerminalScore(ex, me, before) {
    return clamp((ex.outcomes || []).filter(out => out.observation && !out.turnover &&
      out.touchdown === me && num(out.observation.score?.[me]) > num(before.score?.[me]))
      .reduce((mass,out) => mass + num(out.p),0),0,1);
  }

  // The provisional and final selectors must use the SAME incumbent margin.
  // Reply work is allocated to the contender that would actually be played,
  // rather than only the original static-score prefix.
  function contenderEvidence(c, incumbent) {
    const replyBasis=compareSelectorReplies(c,incumbent),paired=replyBasis.bounded;
    const firstGain=c.baseValue+num(c.preparationGain)-incumbent.baseValue-num(incumbent.preparationGain);
    const replyDelta=replyBasis.delta;
    const riskIncrease=Math.max(0,num(c.ex.pTurnover)-num(incumbent.ex.pTurnover));
    const margin=(num(c.ex.pTurnover)<1e-8 && c.family!=='endTurn' ? 0.5 : 4)+riskIncrease*30+num(c.unknown)*CFG.unresolved;
    const gain=firstGain+replyDelta;
    const unknown = num(c.unknown), terminalScoreMass = num(c.terminalScoreMass);
    // Retain the normal gate for positional/tactical speculation. A witnessed
    // first-action TD can clear it only after paying a full TD-sized reserve
    // for every unobserved branch, on top of the original risk/unknown charges.
    // This is a conservative policy allowance, not an exact EV lower bound.
    const terminalEvidence = terminalScoreMass > 0 && terminalScoreMass > unknown;
    const uncertaintyReserve = unknown > 0.05 && terminalEvidence ? unknown * CFG.touchdown : 0;
    const effectiveGain = gain - uncertaintyReserve;
    const uncertaintyAllowed = unknown <= 0.05 || terminalEvidence;
    return {pairedBoundedReplies:paired,replyBasis,firstGain,replyDelta,gain,margin,terminalScoreMass,
      uncertaintyReserve,effectiveGain,
      uncertaintyTreatment:unknown<=0.05 ? 'normal gate' : terminalEvidence ? 'witnessed TD with reserve' : 'hard cap',
      eligible:uncertaintyAllowed && effectiveGain>margin};
  }


  // A rejected movement cycle is no longer an admissible incumbent. In an
  // ordinary, roll-free activation, use End Activation as the replacement
  // reference: V6 voluntary End Turn calls this same operation first, while
  // stopping alone leaves the option to act with another player. This is an
  // action-option argument, not a proof that any resulting route is safe.
  function cycleStopReference(o, incumbent, stop, lines) {
    const act=o.activation, actor=act && find(o,act.playerId), ex=stop?.ex;
    if (!incumbent?.movementCycle || o.phase!=='play' || o.pending || !act || act.over ||
        act.action!=='move' || !actor || actor.team!==o.team || actor.star || has(actor,'bloodlust') ||
        act.bloodlust==='hungry' || stop?.input?.kind!=='endActivation' ||
        ex?.exact!==true || ex.leaves!==1 || num(stop.unknown,1)>1e-8 ||
        num(ex.unresolvedMass,1)>1e-8 || num(ex.rest?.p,1)>1e-8 ||
        num(ex.pTurnover,1)>1e-8 || num(ex.pTouchdown,1)>1e-8 ||
        num(ex.pOpponentTouchdown,1)>1e-8 || ex.outcomes?.length!==1) return null;
    const branch=ex.outcomes[0], after=branch.observation;
    if (!after || !branch.key || branch.completed!==true || branch.turnover || branch.touchdown ||
        num(branch.p)<1-1e-8 || branch.active!==o.team || after.active!==o.team || after.activation || after.pending) return null;
    const sameBoard=ob=>JSON.stringify([
      ob.phase,ob.active,ob.half,ob.drive,ob.turn,ob.score,ob.weather,ob.ball,ob.used,ob.teams,
      ob.players.map(p=>{const copy={...p};if(p.id===actor.id)delete copy.canBeActivated;return copy;})
    ]);
    if (sameBoard(o)!==sameBoard(after) ||
        !lines.some(c=>c.input?.kind==='playerAction' && c.actorId!==actor.id && c.ex?.ok===true &&
          after.players.some(p=>p.id===c.actorId && p.team===o.team && p.canBeActivated===true && available(after,p)))) return null;
    return stop;
  }

  function provisionalContender(lines, incumbent) {
    if (incumbent && !incumbent.movementCycle) {
      if (!incumbent.ex) return null;
      const rows=lines.filter(c=>c!==incumbent).map(c=>({c,evidence:contenderEvidence(c,incumbent)}))
        .filter(row=>row.evidence.eligible).sort((a,b)=>b.evidence.effectiveGain-a.evidence.effectiveGain);
      return rows[0]?.c || incumbent;
    }
    let best=[...lines].sort((a,b)=>b.value-a.value || num(a.ex.pTurnover)-num(b.ex.pTurnover))[0] || null;
    if (best?.family==='endTurn') {
      const stand=lines.filter(c=>c.kind==='standUp' && num(c.ex.pTurnover)<1e-8 && c.baseValue>best.baseValue+0.5)
        .sort((a,b)=>b.baseValue-a.baseValue)[0];
      if (stand) best=stand;
    }
    return best;
  }

  function preparationCredit(before, ex, gain, me) {
    const positive = Math.max(0,gain);
    // Discount speculative positional preparation as before, but do not
    // discount an engine-observed TD merely because another player scores.
    // The enclosing first-branch probability is applied by the caller.
    const base = boardValue(before,me);
    const terminal = (ex?.outcomes || []).reduce((sum,b) => {
      if (!b.touchdown || !b.observation ||
          num(b.observation.score?.[me]) <= num(before.score?.[me])) return sum;
      return sum + num(b.p) * Math.max(0,boardValue(b.observation,me)-base);
    },0);
    return positive * 0.8 + Math.min(positive,terminal) * 0.2;
  }

  __evidenceRegister({ id: 'hopeful-1-5-6-gpt', name: 'Hopeful 1.5.9-GPT', version: '1.5.6', apiVersion: 1, apiMinor: 2,
    requires: ['candidates', 'explore', 'threats.blitz', 'threats.scoring', 'progress'], timeLimitMs: CFG.timeLimitMs,
    description: 'Activation-scoped movement memory; bounded moving Pass; dynamic Drive windows, bounded safe delay, optional host context and setup, selective near-ball contact admission and expiring-resource retries; opponent contact-to-pickup scoring continuations; critical loose-ball scoring-lane screens, pickup-scoring replies and low-risk carrier protection; ball-first coach: delivery clock, mobile pickups and relays, fair support/reply comparisons, contact management and active ball recovery; bounded engine search, 60-second ceiling.',
    chooseAction: strategicAction, chooseDecision: strategicDecision, chooseSetup });
})();

})();

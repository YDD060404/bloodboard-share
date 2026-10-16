import { createRequire } from 'module'; const require = createRequire(import.meta.url);
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/engine/index.ts
var engine_exports = {};
__export(engine_exports, {
  ADVANCEMENT_COSTS: () => ADVANCEMENT_COSTS,
  ADVANCEMENT_TITLES: () => ADVANCEMENT_TITLES,
  ADV_KIND_LABEL: () => ADV_KIND_LABEL,
  ALL_STAR_DEFAULTS: () => ALL_STAR_DEFAULTS,
  ANALYTICS_SCHEMA: () => ANALYTICS_SCHEMA,
  ATTEMPT_FORMAT: () => ATTEMPT_FORMAT,
  BLOCK_FACE_LABEL: () => BLOCK_FACE_LABEL,
  BLOCK_FACE_P: () => BLOCK_FACE_P,
  BLOODLUST_RULE: () => BLOODLUST_RULE,
  BRAWLIN_BRUTES_PAGE: () => BRAWLIN_BRUTES_PAGE,
  BUILD_FINGERPRINT: () => BUILD_FINGERPRINT,
  CAPTAIN_PAGE: () => CAPTAIN_PAGE,
  CAPTAIN_RULE: () => CAPTAIN_RULE,
  CAT_NAME: () => CAT_NAME,
  CHAR_LABEL: () => CHAR_LABEL,
  CHAR_TABLE: () => CHAR_TABLE,
  D6_LEVEL_NAMES: () => D6_LEVEL_NAMES,
  D6_TILT_LEVELS: () => D6_TILT_LEVELS,
  DEFAULT_RULER_WIDTH: () => DEFAULT_RULER_WIDTH,
  DESPERATE: () => DESPERATE,
  DESPERATE_MEASURE: () => DESPERATE_MEASURE,
  DESPERATE_NUMBER: () => DESPERATE_NUMBER,
  DESPERATE_RULE: () => DESPERATE_RULE,
  DICE_CODE_TEXT: () => DICE_CODE_TEXT,
  DIFFICULTY_TILT: () => DIFFICULTY_TILT,
  DRAFT_BUDGETS: () => DRAFT_BUDGETS,
  DRAFT_TEMPLATE: () => DRAFT_TEMPLATE,
  EXERCISE_FORMAT: () => EXERCISE_FORMAT,
  EXERCISE_PACK_FORMAT: () => EXERCISE_PACK_FORMAT,
  FIREBALL_RULE: () => FIREBALL_RULE,
  FROG: () => FROG,
  HISTORY_BATCH_FORMAT: () => HISTORY_BATCH_FORMAT,
  HISTORY_FORMAT: () => HISTORY_FORMAT,
  HISTORY_VERSION: () => HISTORY_VERSION,
  INDUCEMENTS: () => INDUCEMENTS,
  INDUCEMENT_BY_ID: () => INDUCEMENT_BY_ID,
  LEAGUES_PAGE: () => LEAGUES_PAGE,
  LEAGUE_RULES: () => LEAGUE_RULES,
  LESSON_ORIGIN: () => LESSON_ORIGIN,
  MATCHED: () => MATCHED,
  MATCH_KIND_LABEL: () => MATCH_KIND_LABEL,
  MATCH_RULES: () => MATCH_RULES,
  MAX_ADVANCEMENTS: () => MAX_ADVANCEMENTS,
  MEGA_STARS: () => MEGA_STARS,
  MEGA_STAR_COST: () => MEGA_STAR_COST,
  MERCENARY: () => MERCENARY,
  MIRROR_MARK: () => MIRROR_MARK,
  OFFICIAL_TIERS: () => OFFICIAL_TIERS,
  PETTY_CASH_TOP_UP: () => PETTY_CASH_TOP_UP,
  POLICY_ASSUMPTIONS: () => POLICY_ASSUMPTIONS,
  PRAYERS: () => PRAYERS,
  PRAYER_RULE: () => PRAYER_RULE,
  ROSTERS: () => ROSTERS,
  ROSTER_BY_ID: () => ROSTER_BY_ID,
  RULES: () => R,
  RULESETS: () => RULESETS,
  ReplaySession: () => ReplaySession,
  RngDice: () => RngDice,
  SEVENS_DRAFT: () => SEVENS_DRAFT,
  SEVENS_INDUCEMENT_PAGE: () => SEVENS_INDUCEMENT_PAGE,
  SEVENS_INSIGNIFICANT: () => SEVENS_INSIGNIFICANT,
  SEVENS_PRAYERS: () => SEVENS_PRAYERS,
  SKILLS: () => SKILLS,
  SKILL_BY_ID: () => SKILL_BY_ID,
  SKILL_TABLE: () => SKILL_TABLE,
  SOURCE_TIERS: () => SOURCE_TIERS,
  SPECIALS: () => SPECIALS,
  SPECIAL_RULES_PAGES: () => SPECIAL_RULES_PAGES,
  SPECIAL_RULE_PAGE: () => SPECIAL_RULE_PAGE,
  SPP_AWARD: () => SPP_AWARD,
  SPP_LABEL: () => SPP_LABEL,
  STARS: () => STARS,
  STAR_BY_ID: () => STAR_BY_ID,
  STAR_LIST_PAGE: () => STAR_LIST_PAGE,
  STAR_MAX: () => STAR_MAX,
  STAR_RULE: () => STAR_RULE,
  STAR_RULES_IMPLEMENTED: () => STAR_RULES_IMPLEMENTED,
  SWARMING_RULE: () => SWARMING_RULE,
  ScriptedDice: () => ScriptedDice,
  TIERS: () => TIERS,
  TRAINING_GRADER: () => GRADER,
  TRAINING_VERSION: () => TRAINING_VERSION,
  WIZARD_RULE: () => WIZARD_RULE,
  ZAP_RULE: () => ZAP_RULE,
  actionOptions: () => actionOptions,
  activationBlockReason: () => activationBlockReason,
  addStar: () => addStar,
  advancementBlocked: () => advancementBlocked,
  advancementCost: () => advancementCost,
  advancementValue: () => advancementValue,
  applyAdvancement: () => applyAdvancement,
  applyEntry: () => applyEntry,
  applyMatchSpp: () => applyMatchSpp,
  applyWireUpdate: () => applyWireUpdate,
  assessReplay: () => assessReplay,
  assistReason: () => assistReason,
  attemptStatus: () => attemptStatus,
  authorExercise: () => authorExercise,
  autoSkills: () => autoSkills,
  backToSetup: () => backToSetup,
  ballHolder: () => ballHolder,
  ballSquare: () => ballSquare,
  biteTargetAdjacent: () => biteTargetAdjacent,
  blockBlockedReason: () => blockBlockedReason,
  blockBreakdown: () => blockBreakdown,
  blockFirstOutcomes: () => blockFirstOutcomes,
  blockStrength: () => blockStrength,
  blockTargets: () => blockTargets,
  bloodlustSettled: () => bloodlustSettled,
  board: () => board_exports,
  boughtSkillCategory: () => boughtSkillCategory,
  budgetsFor: () => budgetsFor,
  buildScenario: () => buildScenario,
  buildTeam: () => buildTeam,
  buildWorkbookState: () => buildWorkbookState,
  builtinFormation: () => builtinFormation,
  builtinTeam: () => builtinTeam,
  canScoreWithoutDice: () => canScoreWithoutDice,
  canUse: () => canUse,
  captainOnPitch: () => captainOnPitch,
  charOptions: () => charOptions,
  charRestriction: () => charRestriction,
  checkCompatibility: () => checkCompatibility,
  checkExercise: () => checkExercise,
  checkGoal: () => checkGoal,
  checkTacticalExercise: () => checkTacticalExercise,
  cheeringBonus: () => cheeringBonus,
  chooseRosterBuiltin: () => chooseRosterBuiltin,
  cloneState: () => cloneState,
  coachOf: () => coachOf,
  computerPreMatch: () => computerPreMatch,
  createMatch: () => createMatch,
  crowdPushSquares: () => crowdPushSquares,
  currentTeamValue: () => currentTeamValue,
  customPlayer: () => customPlayer,
  d6SuccessProb: () => d6SuccessProb,
  d6SuccessProbW: () => d6SuccessProbW,
  d6TiltWeights: () => d6TiltWeights,
  d6WeightsFor: () => d6WeightsFor,
  decide: () => decide,
  defaultFormation: () => defaultFormation,
  defaultMvpNominees: () => defaultMvpNominees,
  defaultRubric: () => defaultRubric,
  defaultSwarming: () => defaultSwarming,
  describeInput: () => describeInput,
  describeMatchInput: () => describeMatchInput,
  desperateInputReason: () => desperateInputReason,
  desperateLeft: () => desperateLeft,
  desperateOf: () => desperateOf,
  diceCode: () => diceCode,
  difficultyExamples: () => difficultyExamples,
  difficultyFactors: () => difficultyFactors,
  dodgeChance: () => dodgeChance,
  draftTemplate: () => draftTemplate,
  eligibleSkills: () => eligibleSkills,
  execute: () => execute,
  exerciseMoves: () => exerciseMoves,
  expectedProfile: () => expectedProfile,
  exploreOutcomes: () => exploreOutcomes,
  fansRange: () => fansRange,
  findPlayer: () => findPlayer,
  findPosition: () => findPosition,
  fireballTargets: () => fireballTargets,
  formatOfTeam: () => formatOfTeam,
  formationSlots: () => formationSlots,
  foulAssists: () => foulAssists,
  foulTargets: () => foulTargets,
  gated: () => gated,
  getPlayer: () => getPlayer,
  gradeAttempt: () => gradeAttempt,
  groupIssues: () => groupIssues,
  groupRoom: () => groupRoom,
  hasPrayer: () => hasPrayer,
  hasSkill: () => hasSkill,
  hasTackleZone: () => hasTackleZone,
  hasTeamCaptainRule: () => hasTeamCaptainRule,
  importAttempt: () => importAttempt,
  importExercises: () => importExercises,
  importHistories: () => importHistories,
  inNoMansLand: () => inNoMansLand,
  inOwnHalf: () => inOwnHalf,
  inPitchHalf: () => inPitchHalf,
  inTeamArea: () => inTeamArea,
  induceLeft: () => induceLeft,
  induced: () => induced,
  inducementCost: () => inducementCost,
  inducementFor: () => inducementFor,
  inducementsFor: () => inducementsFor,
  inducementsNotOffered: () => inducementsNotOffered,
  interceptMods: () => interceptMods,
  interceptors: () => interceptors,
  isEventTier: () => isEventTier,
  isMatchInput: () => isMatchInput,
  isMegaStar: () => isMegaStar,
  isOpen: () => isOpen,
  isRetiredPosition: () => isRetiredPosition,
  isSevens: () => isSevens,
  isStar: () => isStar,
  isTournamentTeam: () => isTournamentTeam,
  journeymenFor: () => journeymenFor,
  jumpMods: () => jumpMods,
  jumpOptions: () => jumpOptions,
  jumpedSquare: () => jumpedSquare,
  kickLands: () => kickLands,
  kickerCandidates: () => kickerCandidates,
  label: () => label,
  lastEvents: () => lastEvents,
  leagueInducementOptions: () => leagueInducementOptions,
  leagueMatchTeam: () => leagueMatchTeam,
  leagueStarOptions: () => leagueStarOptions,
  leagueStarReason: () => leagueStarReason,
  legacyMatchId: () => legacyMatchId,
  lessonLabel: () => lessonLabel,
  lessonSquare: () => lessonSquare,
  losColumn: () => losColumn,
  makePack: () => makePack,
  markersOf: () => markersOf,
  matchAnalytics: () => matchAnalytics,
  matchInputReason: () => matchInputReason,
  matchKey: () => matchKey,
  matchSpp: () => matchSpp,
  maxRushes: () => maxRushes,
  meetsGoal: () => meetsGoal,
  mirrorTeamCopy: () => mirrorTeamCopy,
  moveReach: () => moveReach,
  movementBudget: () => movementBudget,
  mustAdvance: () => mustAdvance,
  mvpEligible: () => mvpEligible,
  newAllStarSquad: () => newAllStarSquad,
  newAttempt: () => newAttempt,
  newGame: () => newGame,
  newMatchId: () => newMatchId,
  newTeam: () => newTeam,
  newTeamDef: () => newTeamDef,
  nextNumber: () => nextNumber,
  onLineOfScrimmageCentre: () => onLineOfScrimmageCentre,
  onPitch: () => onPitch,
  other: () => other,
  outcomeFactor: () => outcomeFactor,
  parseHistory: () => parseHistory,
  parseLessonLabel: () => parseLessonLabel,
  parseSaveFile: () => parseSaveFile,
  parseTeamDef: () => parseTeamDef,
  parseWorkbookAnswer: () => parseWorkbookAnswer,
  passBlockedReason: () => passBlockedReason,
  passInfo: () => passInfo,
  pitch: () => pitch,
  pitchVariant: () => pitchVariant,
  planAction: () => planAction,
  playerAt: () => playerAt,
  playerCategories: () => playerCategories,
  playerFromPosition: () => playerFromPosition,
  playerFromRoster: () => playerFromRoster,
  playerFromStar: () => playerFromStar,
  playerValue: () => playerValue,
  playsForText: () => playsForText,
  positionValue: () => positionValue,
  postGameSpp: () => postGameSpp,
  prayersOf: () => prayersOf,
  preMatchFunds: () => preMatchFunds,
  previewDecision: () => previewDecision,
  publicExercise: () => publicExercise,
  purchaseCost: () => purchaseCost,
  pushOptions: () => pushOptions,
  pushesIntoCrowd: () => pushesIntoCrowd,
  raisedDead: () => raisedDead,
  razzlePairReason: () => razzlePairReason,
  razzleSecondReason: () => razzleSecondReason,
  reachableSquares: () => reachableSquares,
  reconstructInitial: () => reconstructInitial,
  removeStar: () => removeStar,
  replayAttempt: () => replayAttempt,
  resultOf: () => resultOf,
  rollRandomSkill: () => rollRandomSkill,
  rosterInfos: () => rosterInfos,
  rosterLeague: () => rosterLeague,
  rosterScore: () => rosterScore,
  rosterSpecialRules: () => rosterSpecialRules,
  rulesFor: () => rulesFor,
  rushChance: () => rushChance,
  safestRoute: () => safestRoute,
  secureReason: () => secureReason,
  serializeHistory: () => serializeHistory,
  serializeTraining: () => serializeTraining,
  setCaptain: () => setCaptain,
  setVeteran: () => setVeteran,
  setupCandidates: () => setupCandidates,
  skillFromTable: () => skillFromTable,
  skillName: () => skillName,
  skillPointAllowance: () => skillPointAllowance,
  skillRestriction: () => skillRestriction,
  skillWorth: () => skillWorth,
  solveExercise: () => solveExercise,
  sourceTier: () => sourceTier,
  specialRulePage: () => specialRulePage,
  spendTeamReroll: () => spendTeamReroll,
  sppAward: () => sppAward,
  sppTotal: () => sppTotal,
  starAddReason: () => starAddReason,
  starChoiceKey: () => starChoiceKey,
  starChoices: () => starChoices,
  starMarker: () => starMarker,
  starOf: () => starOf,
  starPlaysFor: () => starPlaysFor,
  starReady: () => starReady,
  starRuleRef: () => starRuleRef,
  starSupported: () => starSupported,
  starsCost: () => starsCost,
  startPlay: () => startPlay,
  startRuleInfo: () => startRuleInfo,
  startRuleReason: () => startRuleReason,
  startRuleTargets: () => startRuleTargets,
  stepNode: () => stepNode,
  swarmingCandidates: () => swarmingCandidates,
  teamBudget: () => teamBudget,
  teamCost: () => teamCost,
  teamLeague: () => teamLeague,
  teamSkillPoints: () => teamSkillPoints,
  teamSpecialRules: () => teamSpecialRules,
  teamValue: () => teamValue,
  testWeights: () => testWeights,
  throwARockReason: () => throwARockReason,
  throwablePlayers: () => throwablePlayers,
  tierInfo: () => tierInfo,
  tiltedChance: () => tiltedChance,
  toBatch: () => toBatch,
  toHistory: () => toHistory,
  toSaveFile: () => toSaveFile,
  trapdoors: () => trapdoors,
  ttmBlockedReason: () => ttmBlockedReason,
  ttmRange: () => ttmRange,
  twoD6AtLeast: () => twoD6AtLeast,
  usePitch: () => usePitch,
  useTeamReroll: () => useTeamReroll,
  usesSevensInsignificantException: () => usesSevensInsignificantException,
  validateAttemptShape: () => validateAttemptShape,
  validateBuild: () => validateBuild,
  validateDriveSetup: () => validateDriveSetup,
  validateExerciseShape: () => validateExerciseShape,
  validateFormalStart: () => validateFormalStart,
  validateHistoryShape: () => validateHistoryShape,
  validateInput: () => validateInput,
  validatePosition: () => validatePosition,
  validateState: () => validateState,
  validateTeamDef: () => validateTeamDef,
  verifyHistory: () => verifyHistory,
  verifyLog: () => verifyLog,
  violationCode: () => violationCode,
  vomitTargets: () => vomitTargets,
  whatIfMove: () => whatIfMove,
  wizardReason: () => wizardReason,
  wizardWindowOpen: () => wizardWindowOpen,
  zapChance: () => zapChance
});

// src/engine/dice.ts
function fmix32(h) {
  h = h >>> 0;
  h ^= h >>> 16;
  h = Math.imul(h, 2246822507) >>> 0;
  h ^= h >>> 13;
  h = Math.imul(h, 3266489909) >>> 0;
  h ^= h >>> 16;
  return h >>> 0;
}
function nextU32(rng) {
  const c = rng.counter >>> 0;
  const hi = Math.floor(rng.counter / 4294967296) >>> 0;
  const v = fmix32((fmix32(Math.imul(c, 2654435769) + 2135587861 + Math.imul(hi, 1663821227) >>> 0) ^ rng.seed >>> 0) + 1663821227);
  rng.counter += 1;
  return v;
}
function rollDie(rng, sides) {
  const limit = Math.floor(4294967296 / sides) * sides;
  for (; ; ) {
    const u = nextU32(rng);
    if (u < limit) return u % sides + 1;
  }
}
var DIFFICULTY_TILT = [0, 0.1, 0.2, 0.35];
var D6_TILT_LEVELS = [0, 0.15, 0.3, 0.5];
var D6_LEVEL_NAMES = ["Off (standard dice)", "Slight", "Moderate", "Strong"];
function d6TiltWeights(level, dir) {
  const t = D6_TILT_LEVELS[Math.max(0, Math.min(3, Math.round(level)))] ?? 0;
  return [1, 2, 3, 4, 5, 6].map((f) => (1 + dir * t * (f - 3.5) / 2.5) / 6);
}
function rollWeightedD6(rng, w) {
  const u = nextU32(rng) / 4294967296;
  let acc = 0;
  for (let i = 0; i < 5; i++) {
    acc += w[i];
    if (u < acc) return i + 1;
  }
  return 6;
}
function d6SuccessProbW(target, modifier, w) {
  let n = 0;
  for (let f = 1; f <= 6; f++) if (d6Success(f, target, modifier)) n += w ? w[f - 1] : 1 / 6;
  return n;
}
function d6AtLeastW(x, w) {
  let n = 0;
  for (let f = Math.max(1, x); f <= 6; f++) n += w ? w[f - 1] : 1 / 6;
  return Math.min(1, n);
}
function randomSeed() {
  const a = new Uint32Array(1);
  try {
    globalThis.crypto.getRandomValues(a);
    return a[0] >>> 0;
  } catch {
    return Math.floor(Math.random() * 4294967296) >>> 0 || 1;
  }
}
function blockFace(n) {
  switch (n) {
    case 1:
      return "playerDown";
    case 2:
      return "bothDown";
    case 3:
    case 4:
      return "push";
    case 5:
      return "stumble";
    default:
      return "pow";
  }
}
var BLOCK_FACE_LABEL = {
  playerDown: "Player Down",
  bothDown: "Both Down",
  push: "Push Back",
  stumble: "Stumble",
  pow: "POW!"
};
var BLOCK_FACE_P = {
  playerDown: 1 / 6,
  bothDown: 1 / 6,
  push: 2 / 6,
  stumble: 1 / 6,
  pow: 1 / 6
};
var noChoose = () => {
  throw new Error("choose() is only available while planning");
};
var RngDice = class {
  constructor(rng) {
    this.rng = rng;
    this.mode = "rng";
    this.choose = noChoose;
  }
  roll(spec) {
    if (spec.weightOf) {
      const combos = allFaces(spec.dice);
      const ws = combos.map((f) => Math.max(0, spec.weightOf(f)));
      const total = ws.reduce((a, b) => a + b, 0);
      const u = nextU32(this.rng) / 4294967296 * total;
      let acc = 0;
      let pick = combos[combos.length - 1];
      for (let i = 0; i < combos.length; i++) {
        acc += ws[i];
        if (u < acc) {
          pick = combos[i];
          break;
        }
      }
      return { faces: pick.slice(), value: spec.interpret(pick.slice()) };
    }
    const w = spec.weights;
    const faces = spec.dice.map((sides) => w && sides === 6 ? rollWeightedD6(this.rng, w) : rollDie(this.rng, sides));
    return { faces, value: spec.interpret(faces) };
  }
};
function allFaces(dice) {
  const total = dice.reduce((a, b) => a * b, 1);
  const out = [];
  for (let n = 0; n < total; n++) {
    const f = dice.map(() => 1);
    let r = n;
    for (let i = dice.length - 1; i >= 0; i--) {
      f[i] = r % dice[i] + 1;
      r = Math.floor(r / dice[i]);
    }
    out.push(f);
  }
  return out;
}
var ScriptedDice = class {
  constructor(faces) {
    this.faces = faces;
    this.mode = "scripted";
    this.choose = noChoose;
    this.i = 0;
  }
  roll(spec) {
    const faces = spec.dice.map(() => {
      if (this.i >= this.faces.length) throw new Error("ScriptedDice exhausted");
      return this.faces[this.i++];
    });
    return { faces, value: spec.interpret(faces) };
  }
  get used() {
    return this.i;
  }
};
var groupCache = /* @__PURE__ */ new Map();
function groupOutcomes(spec) {
  const keyOf = spec.key ?? ((v) => JSON.stringify(v));
  const w = spec.weights;
  const cacheId = spec.cacheKey && !spec.weightOf ? `${pitchVariant()}|${spec.cacheKey}#${spec.dice.join(",")}${w ? `#w${w.map((x) => x.toFixed(6)).join(",")}` : ""}` : void 0;
  if (cacheId) {
    const c = groupCache.get(cacheId);
    if (c) {
      for (const g of c.length > 3 ? [c[0], c[c.length - 1]] : c) {
        if (keyOf(spec.interpret(g.faces.slice())) !== g.key) throw new Error(`Roll cache key collision: ${spec.cacheKey}`);
      }
      return c;
    }
  }
  const total = spec.dice.reduce((a, b) => a * b, 1);
  const map = /* @__PURE__ */ new Map();
  const faces = spec.dice.map(() => 1);
  for (let n = 0; n < total; n++) {
    let r = n;
    for (let i = spec.dice.length - 1; i >= 0; i--) {
      faces[i] = r % spec.dice[i] + 1;
      r = Math.floor(r / spec.dice[i]);
    }
    const value = spec.interpret(faces.slice());
    const k = keyOf(value);
    let pf = 1 / total;
    if (spec.weightOf) pf = Math.max(0, spec.weightOf(faces.slice())) / total;
    else if (w) {
      pf = 1;
      for (let i = 0; i < faces.length; i++) pf *= spec.dice[i] === 6 ? w[faces[i] - 1] : 1 / spec.dice[i];
    }
    const g = map.get(k);
    if (g) g.p += pf;
    else map.set(k, { key: k, p: pf, faces: faces.slice(), value });
  }
  const groups = [...map.values()];
  if (spec.weightOf) {
    const sum2 = groups.reduce((a, g) => a + g.p, 0);
    if (sum2 > 0) for (const g of groups) g.p /= sum2;
  }
  if (cacheId) {
    if (groupCache.size > 5e3) groupCache.clear();
    groupCache.set(cacheId, groups);
  }
  return groups;
}
var PruneSignal = class {
  constructor(p) {
    this.p = p;
  }
};
var EnumDice = class {
  constructor(frame, push, threshold, onPruned) {
    this.push = push;
    this.threshold = threshold;
    this.onPruned = onPruned;
    this.mode = "enumerate";
    this.i = 0;
    this.path = frame.path.slice();
    this.p = frame.p;
  }
  /** V5.6: index of the next branch point (read-only; lets a decision hook record where in the path it branched). */
  get cursor() {
    return this.i;
  }
  branch(groups, lost) {
    if (this.i < this.path.length) {
      const g = groups[this.path[this.i++]];
      if (!g) throw new Error("Enumeration path mismatch");
      return g.value;
    }
    if (lost > 0) this.onPruned(this.p * lost);
    let best = 0;
    for (let j = 1; j < groups.length; j++) if (groups[j].p > groups[best].p) best = j;
    for (let j = 0; j < groups.length; j++) {
      if (j === best) continue;
      const pj = this.p * groups[j].p;
      if (pj >= this.threshold) this.push({ path: [...this.path, j], p: pj });
      else this.onPruned(pj);
    }
    this.p *= groups[best].p;
    this.path.push(best);
    this.i++;
    if (this.p < this.threshold) throw new PruneSignal(this.p);
    return groups[best].value;
  }
  roll(spec) {
    const groups = groupOutcomes(spec);
    const g = this.branch(groups.map((x) => ({ p: x.p, value: x })), 0);
    return { faces: g.faces, value: g.value };
  }
  choose(outcomes) {
    const total = outcomes.reduce((a, o) => a + o.p, 0);
    return this.branch(outcomes, Math.max(0, 1 - total));
  }
};
var TraceDice = class {
  constructor() {
    this.mode = "trace";
  }
  choose(outcomes, prefer) {
    const pool = prefer ? outcomes.filter((o) => prefer(o.value)) : [];
    const from = pool.length ? pool : outcomes;
    return from.reduce((a, b) => b.p > a.p ? b : a).value;
  }
  roll(spec) {
    const groups = groupOutcomes(spec);
    const pool = spec.prefer ? groups.filter((x) => spec.prefer(x.value)) : [];
    const from = pool.length ? pool : groups;
    const g = from.reduce((a, b) => b.p > a.p ? b : a);
    return { faces: g.faces, value: g.value };
  }
};
var legacyD6Floor = false;
function useD6Edition(s) {
  legacyD6Floor = s.rulesEdition !== "faq2026";
}
function clampD6(n) {
  return Math.min(6, n);
}
function d6Success(natural, target, modifier) {
  if (natural === 1) return false;
  if (natural === 6) return true;
  const v = clampD6(natural + modifier);
  return (legacyD6Floor ? Math.max(1, v) : v) >= target;
}
function d6SuccessProb(target, modifier) {
  let n = 0;
  for (let f = 1; f <= 6; f++) if (d6Success(f, target, modifier)) n++;
  return n / 6;
}
function twoD6AtLeast(target, modifier = 0) {
  let n = 0;
  for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (a + b + modifier >= target) n++;
  return n / 36;
}

// src/engine/variant.ts
var std = (page, title) => ({ page, title });
var sev = (page, title) => ({ page, title, source: "sevens" });
var RULESETS = {
  standard: {
    variant: "standard",
    label: "Standard (11-a-side)",
    pitch: { w: 26, h: 15, wide: 4, losA: 12, losB: 13 },
    playersPerDrive: 11,
    maxPerWideZone: 2,
    turnsPerHalf: 8,
    timeOutBackFrom: 6,
    kickDistance: "d6",
    event4: "solidDefence",
    kickoffPlayersBonus: 3,
    pitchInvasion: "d3",
    throwInDistance: "2d6",
    injuryTables: "standard",
    argueTable: "standard",
    spp: true,
    refs: {
      pitch: std(23, "The Blood Bowl Pitch"),
      setup: std(47, "Set-up"),
      kickoff: std(47, "The Kick-off"),
      events: std(48, "Kick-off Event Table"),
      injury: std(66, "Injury Roll"),
      argue: std(69, "Argue the Call"),
      throwIn: std(73, "Throw-ins"),
      veteran: std(0, "\u2014"),
      draft: std(89, "Team Draft"),
      staff: std(90, "Sideline Staff")
    }
  },
  sevens: {
    variant: "sevens",
    label: "Blood Bowl Sevens",
    // Spike! 22 p.7: Wide Zones 2 squares, Centre Field 7; the printed pitch is 20 × 11 squares —
    // End Zone + 6 squares to each Line of Scrimmage, 6 squares of No Man's Land between them.
    pitch: { w: 20, h: 11, wide: 2, losA: 6, losB: 13 },
    playersPerDrive: 7,
    maxPerWideZone: 1,
    turnsPerHalf: 6,
    timeOutBackFrom: 5,
    kickDistance: "lowerOf2d6",
    event4: "alertDefence",
    kickoffPlayersBonus: 1,
    pitchInvasion: "one",
    throwInDistance: "d6plus2",
    injuryTables: "sevens",
    argueTable: "amateur",
    spp: false,
    source: "sevens",
    refs: {
      pitch: sev(7, "The Blood Bowl Sevens Pitch"),
      setup: sev(10, "Sevens Set-up"),
      kickoff: sev(10, "Sevens Kick-off"),
      events: sev(11, "Sevens Kick-off Event Table"),
      injury: sev(12, "Sevens Injury Tables"),
      argue: sev(13, "Amateur Referees"),
      throwIn: sev(13, "Sevens Throw-ins"),
      veteran: sev(13, "Veterans"),
      draft: sev(8, "Drafting a Blood Bowl Sevens Team"),
      staff: sev(9, "Hiring Sideline Staff")
    }
  }
};
function rulesFor(s) {
  return RULESETS[s?.variant === "sevens" ? "sevens" : "standard"];
}
function isSevens(s) {
  return s?.variant === "sevens";
}
var current = RULESETS.standard.pitch;
var currentVariant = "standard";
function usePitch(v) {
  if (v && typeof v === "object") useD6Edition(v);
  const variant = typeof v === "string" ? v : v?.variant === "sevens" ? "sevens" : "standard";
  if (variant === currentVariant) return;
  currentVariant = variant;
  current = RULESETS[variant].pitch;
}
function pitch() {
  return current;
}
function pitchVariant() {
  return currentVariant;
}
function inTeamArea(team2, x) {
  return team2 === "A" ? x <= current.losA : x >= current.losB;
}
function inPitchHalf(team2, x) {
  const half = current.w / 2;
  return team2 === "A" ? x < half : x >= half;
}
function inNoMansLand(x) {
  return x > current.losA && x < current.losB;
}

// src/engine/board.ts
var board_exports = {};
__export(board_exports, {
  D8_DIRS: () => D8_DIRS,
  DIRS8: () => DIRS8,
  FACING_LABEL: () => FACING_LABEL,
  PITCH_H: () => PITCH_H,
  PITCH_W: () => PITCH_W,
  RANGE_LABEL: () => RANGE_LABEL,
  RANGE_MOD: () => RANGE_MOD,
  add: () => add,
  adjacent: () => adjacent,
  dist: () => dist,
  eq: () => eq,
  facingDirection: () => facingDirection,
  facingDirections: () => facingDirections,
  fmt: () => fmt,
  inBounds: () => inBounds,
  inScoringEndZone: () => inScoringEndZone,
  isWideZone: () => isWideZone,
  key: () => key,
  neighbours: () => neighbours,
  passRange: () => passRange,
  pushSquares: () => pushSquares,
  rulerOverlaps: () => rulerOverlaps,
  scoringEndZoneX: () => scoringEndZoneX,
  throwInDirections: () => throwInDirections
});
var PITCH_W = 26;
var PITCH_H = 15;
function inBounds(c) {
  const g = pitch();
  return c.x >= 0 && c.x < g.w && c.y >= 0 && c.y < g.h;
}
function eq(a, b) {
  return !!a && !!b && a.x === b.x && a.y === b.y;
}
function add(a, d2) {
  return { x: a.x + d2.x, y: a.y + d2.y };
}
function dist(a, b) {
  return Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y));
}
function adjacent(a, b) {
  return dist(a, b) === 1;
}
var DIRS8 = [
  { x: -1, y: -1 },
  { x: 0, y: -1 },
  { x: 1, y: -1 },
  { x: -1, y: 0 },
  { x: 1, y: 0 },
  { x: -1, y: 1 },
  { x: 0, y: 1 },
  { x: 1, y: 1 }
];
function neighbours(c) {
  return DIRS8.map((d2) => add(c, d2)).filter(inBounds);
}
function key(c) {
  return `${c.x},${c.y}`;
}
function fmt(c) {
  if (!c) return "\u2014";
  return `${String.fromCharCode(65 + c.x)}${c.y + 1}`;
}
function scoringEndZoneX(team2) {
  return team2 === "A" ? pitch().w - 1 : 0;
}
function inScoringEndZone(team2, c) {
  return c.x === scoringEndZoneX(team2);
}
function isWideZone(c) {
  const g = pitch();
  return c.y < g.wide || c.y >= g.h - g.wide;
}
var D8_DIRS = {
  1: { x: -1, y: -1 },
  2: { x: 0, y: -1 },
  3: { x: 1, y: -1 },
  4: { x: -1, y: 0 },
  5: { x: 1, y: 0 },
  6: { x: -1, y: 1 },
  7: { x: 0, y: 1 },
  8: { x: 1, y: 1 }
};
function pushSquares(attacker, defender) {
  const dx = Math.sign(defender.x - attacker.x);
  const dy = Math.sign(defender.y - attacker.y);
  if (dx !== 0 && dy !== 0) {
    return [
      { x: defender.x + dx, y: defender.y + dy },
      { x: defender.x + dx, y: defender.y },
      { x: defender.x, y: defender.y + dy }
    ];
  }
  if (dx !== 0) {
    return [
      { x: defender.x + dx, y: defender.y },
      { x: defender.x + dx, y: defender.y - 1 },
      { x: defender.x + dx, y: defender.y + 1 }
    ];
  }
  return [
    { x: defender.x, y: defender.y + dy },
    { x: defender.x - 1, y: defender.y + dy },
    { x: defender.x + 1, y: defender.y + dy }
  ];
}
var RANGE_ROWS = [
  /* b=0 */
  [3, 6, 10, 13],
  /* b=1 */
  [3, 6, 10, 13],
  /* b=2 */
  [2, 6, 10, 13],
  /* b=3 */
  [-1, 6, 9, 12],
  /* b=4 */
  [-1, 5, 9, 12],
  /* b=5 */
  [-1, -1, 8, 11],
  /* b=6 */
  [-1, -1, 8, 11],
  /* b=7 */
  [-1, -1, 7, 10],
  /* b=8 */
  [-1, -1, -1, 10],
  /* b=9 */
  [-1, -1, -1, 9]
];
function passRange(from, to) {
  const ax = Math.abs(to.x - from.x);
  const ay = Math.abs(to.y - from.y);
  const a = Math.max(ax, ay);
  const b = Math.min(ax, ay);
  if (a === 0) return null;
  if (b >= RANGE_ROWS.length) return null;
  const [q, s, l, bomb] = RANGE_ROWS[b];
  if (q >= 0 && a <= q) return "quick";
  if (s >= 0 && a <= s) return "short";
  if (l >= 0 && a <= l) return "long";
  if (bomb >= 0 && a <= bomb) return "bomb";
  return null;
}
var RANGE_LABEL = {
  quick: "Quick Pass",
  short: "Short Pass",
  long: "Long Pass",
  bomb: "Long Bomb"
};
var RANGE_MOD = {
  quick: 0,
  short: -1,
  long: -2,
  bomb: -3
};
function rulerOverlaps(from, landing, sq, rulerWidth) {
  if (eq(sq, from)) return false;
  const h = rulerWidth / 2;
  const vx = landing.x - from.x;
  const vy = landing.y - from.y;
  const len = Math.hypot(vx, vy);
  if (len === 0) return false;
  const ux = vx / len;
  const uy = vy / len;
  const nx = -uy;
  const ny = ux;
  const eps = 1e-9;
  const cx = sq.x - from.x;
  const cy = sq.y - from.y;
  const halfProj = (a, b) => 0.5 * (Math.abs(a) + Math.abs(b));
  const far = len + halfProj(ux, uy);
  const cu = cx * ux + cy * uy;
  const cn = cx * nx + cy * ny;
  const eu = halfProj(ux, uy);
  const en = halfProj(nx, ny);
  let rectHit = true;
  if (cu + eu <= 0 + eps || cu - eu >= far - eps) rectHit = false;
  if (rectHit && (cn + en <= -h + eps || cn - en >= h - eps)) rectHit = false;
  if (rectHit) {
    const corners = [
      [0, -h],
      [0, h],
      [far, -h],
      [far, h]
    ].map(([u, n]) => [u * ux + n * nx, u * uy + n * ny]);
    const xs = corners.map((c) => c[0]);
    const ys = corners.map((c) => c[1]);
    if (Math.max(...xs) <= cx - 0.5 + eps || Math.min(...xs) >= cx + 0.5 - eps) rectHit = false;
    if (rectHit && (Math.max(...ys) <= cy - 0.5 + eps || Math.min(...ys) >= cy + 0.5 - eps)) rectHit = false;
  }
  if (rectHit) return true;
  const dxs = Math.max(Math.abs(cx) - 0.5, 0);
  const dys = Math.max(Math.abs(cy) - 0.5, 0);
  return Math.hypot(dxs, dys) < h - eps;
}
function throwInDirections(last, out) {
  const g = pitch();
  const isCorner = (last.x === 0 || last.x === g.w - 1) && (last.y === 0 || last.y === g.h - 1);
  const ix = last.x === 0 ? 1 : -1;
  const iy = last.y === 0 ? 1 : -1;
  if (isCorner) {
    return { corner: true, dirs: [{ x: ix, y: 0 }, { x: ix, y: iy }, { x: 0, y: iy }] };
  }
  let inward;
  if (out.y < 0) inward = { x: 0, y: 1 };
  else if (out.y >= g.h) inward = { x: 0, y: -1 };
  else if (out.x < 0) inward = { x: 1, y: 0 };
  else inward = { x: -1, y: 0 };
  const rot = (v) => {
    if (inward.y === -1) return v;
    if (inward.y === 1) return { x: -v.x, y: -v.y };
    if (inward.x === -1) return { x: v.y, y: -v.x };
    return { x: -v.y, y: v.x };
  };
  const up3 = [{ x: -1, y: -1 }, { x: 0, y: -1 }, { x: 1, y: -1 }];
  return { corner: false, dirs: up3.map(rot) };
}
function facingDirections(facing) {
  const f = facing === "x-" ? { x: -1, y: 0 } : facing === "x+" ? { x: 1, y: 0 } : facing === "y-" ? { x: 0, y: -1 } : { x: 0, y: 1 };
  const left = { x: f.y, y: -f.x };
  return [
    { x: f.x + left.x, y: f.y + left.y },
    { x: f.x, y: f.y },
    { x: f.x - left.x, y: f.y - left.y }
  ];
}
function facingDirection(facing, d6) {
  return facingDirections(facing)[Math.ceil(d6 / 2) - 1];
}
var FACING_LABEL = {
  "x-": "towards the left End Zone",
  "x+": "towards the right End Zone",
  "y-": "towards the top Sideline",
  "y+": "towards the bottom Sideline"
};

// src/engine/context.ts
var DEFAULT_POLICY = {
  useTeamRerolls: true,
  usePro: true,
  useSkillRerolls: true,
  followUp: true
};
var NeedDecision = class {
  constructor(request) {
    this.request = request;
  }
};
var ActionStop = class {
  constructor(reason) {
    this.reason = reason;
  }
};
var IllegalAction = class extends Error {
};
var Ctx = class {
  constructor(s, dice, mode, recorded, policy, decider) {
    this.s = s;
    this.dice = dice;
    this.mode = mode;
    this.recorded = recorded;
    this.policy = policy;
    this.decider = decider;
    this.events = [];
    this.steps = [];
    this.turnover = null;
    this.touchdown = null;
    this.completed = false;
    /** Set once the team Turn has been ended in this run, so it is never ended twice. */
    this.turnEnded = false;
    /** Probability mass (conditional) lost inside exact sub-solvers; informational. */
    this.unresolvedExtra = 0;
    /**
     * Bloodlust failed during this input (p.125): a Pass or Hand-off that now
     * needs a Thrall bite without one adjacent is simply not made (the dice have
     * been rolled), instead of making the input illegal.
     */
    this.hungryNow = false;
    /** Guffle Pusmaw's Quick Bite took the ball during this input: it causes no Turnover (p.201). */
    this.quickBite = false;
    this.seq = 0;
    this.recordedIdx = 0;
    this.newDecisions = [];
    /** Dice rolled since the last event (execution only); attached to the next event. */
    this.pendingDice = [];
  }
  emit(type, text, rule2, data) {
    const e = { type, text };
    if (rule2) e.rule = rule2;
    if (data) e.data = data;
    if (this.mode === "execute") {
      if (this.pendingDice.length) {
        e.dice = this.pendingDice;
        this.pendingDice = [];
      }
      e.snap = snapshot(this.s);
    }
    this.events.push(e);
  }
  roll(spec) {
    const team2 = spec.judgeFor ?? spec.by;
    if (spec.judge && team2) {
      const f = difficultyFactors(this.s, team2);
      if (f) {
        const judge = spec.judge;
        const interpret = spec.interpret;
        spec = { ...spec, weightOf: (faces) => outcomeFactor(f, judge(interpret(faces))) };
      }
    }
    const r = this.dice.roll(spec);
    if (this.mode === "execute") {
      if (spec.display === "block") {
        this.pendingDice.push({ kind: "block", faces: r.faces.slice(), block: r.faces.map(blockFace) });
      } else {
        spec.dice.forEach((sides, i) => {
          const kind = sides === 3 ? "d3" : sides === 6 ? "d6" : sides === 8 ? "d8" : sides === 16 ? "d16" : "random";
          const last = this.pendingDice[this.pendingDice.length - 1];
          if (i > 0 && last && last.kind === kind && (kind !== "random" || last.sides === sides)) last.faces.push(r.faces[i]);
          else this.pendingDice.push(kind === "random" ? { kind, sides, faces: [r.faces[i]] } : { kind, faces: [r.faces[i]] });
        });
      }
    }
    return r;
  }
  /** Attach dice that were rolled but not yet reported to a final event. */
  flushDice() {
    if (this.pendingDice.length) this.emit("note", "Dice rolled.");
  }
  /**
   * Ask a coach to decide. With a single option the answer is automatic.
   * In execute mode the answer comes from the recorded decisions (replay) or
   * the engine pauses (NeedDecision). In plan mode the policy decides.
   */
  ask(req) {
    const id = `${this.seq++}:${req.type}`;
    const full = { ...req, id };
    if (full.options.length === 1) return full.options[0].id;
    if (this.mode === "execute") {
      const rec = this.recorded[this.recordedIdx];
      if (!rec) throw new NeedDecision(full);
      if (rec.requestId !== id) throw new Error(`Decision replay mismatch: expected ${id}, got ${rec.requestId}`);
      this.recordedIdx++;
      const opt = full.options.find((o) => o.id === rec.optionId);
      if (!opt) throw new Error(`Invalid option ${rec.optionId} for ${id}`);
      this.newDecisions.push(rec);
      this.emit("decision", `${this.s.teams[full.team].name} coach: ${opt.label}`, full.rule, { requestId: id, option: opt.id, decisionType: full.type });
      return opt.id;
    }
    if (!this.decider) return full.options[0].id;
    return this.decider(full, this);
  }
  /** Record a step for plan traces (ignored during execution). */
  step(rec) {
    if (this.mode === "plan") this.steps.push(rec);
  }
  setTurnover(reason, rule2) {
    if (!this.turnover) {
      this.turnover = { reason, rule: rule2 };
      this.emit("turnover", `Turnover: ${reason}`, rule2);
    }
  }
};
function difficultyFactors(s, team2) {
  const o = s.match?.options;
  if (!team2 || !o?.computer || !o.difficulty) return null;
  const lv = (n) => DIFFICULTY_TILT[Math.max(0, Math.min(3, Math.round(Number(n) || 0)))] ?? 0;
  const h = lv(o.difficulty.player);
  const c = lv(o.difficulty.computer);
  if (!h && !c) return null;
  return team2 === o.computer.team ? { good: 1 + c, bad: 1 - h } : { good: 1 - h, bad: 1 + c };
}
function outcomeFactor(f, benefit) {
  const b = Math.max(-1, Math.min(1, Number(benefit) || 0));
  return b > 0 ? Math.pow(f.good, b) : b < 0 ? Math.pow(f.bad, -b) : 1;
}
function testWeights(s, team2, good) {
  const f = difficultyFactors(s, team2);
  if (!f) return null;
  const raw = [1, 2, 3, 4, 5, 6].map((n) => {
    const g = good(n);
    return outcomeFactor(f, typeof g === "number" ? g : g ? 1 : -1);
  });
  const sum2 = raw.reduce((a, b) => a + b, 0);
  return raw.map((x) => x / sum2);
}
function tiltedChance(s, team2, dice, hit, judge) {
  const f = difficultyFactors(s, team2);
  let num = 0;
  let den = 0;
  for (const faces of allFaces(dice)) {
    const w = f ? outcomeFactor(f, judge(faces)) : 1;
    den += w;
    if (hit(faces)) num += w;
  }
  return den ? num / den : 0;
}
function difficultyExamples(player, computer) {
  const s = { match: { options: { computer: { team: "B" }, difficulty: { player, computer } } } };
  const test = (x) => (f) => f[0] >= x;
  const judgeOf = (hit) => (f) => hit(f) ? 1 : -1;
  const row = (what, dice, hit) => ({ what, standard: tiltedChance({}, "A", dice, hit, () => 0), human: tiltedChance(s, "A", dice, hit, judgeOf(hit)), computer: tiltedChance(s, "B", dice, hit, judgeOf(hit)) });
  const faceV = (n) => n === 1 ? -1 : n === 2 ? -0.5 : n <= 4 ? 0.33 : 1;
  const bad2 = (f) => f[0] <= 2 && f[1] <= 2;
  const block = { what: "Two Block dice, the attacker chooses: only Player Down / Both Down (no Block skill)", standard: tiltedChance({}, "A", [6, 6], bad2, () => 0), human: tiltedChance(s, "A", [6, 6], bad2, (f) => Math.max(faceV(f[0]), faceV(f[1]))), computer: tiltedChance(s, "B", [6, 6], bad2, (f) => Math.max(faceV(f[0]), faceV(f[1]))) };
  return [row("A 4+ test (Dodge, Pick-up\u2026) succeeds", [6], test(4)), row("A 2+ test (Rush, Pro 3+ aside) succeeds", [6], test(2)), row("Armour Roll 9+ breaks (made against the other side)", [6, 6], (f) => f[0] + f[1] >= 9), block];
}
function d6WeightsFor(s, team2) {
  return testWeights(s, team2, (n) => n >= 4);
}
function snapshot(s) {
  return {
    players: s.players.map((p) => [p.id, p.pos ? p.pos.x : -1, p.pos ? p.pos.y : -1, p.stance, p.location]),
    ball: JSON.parse(JSON.stringify(s.ball))
  };
}

// src/engine/rules.ts
var R = {
  diceRolls: { page: 32, title: "Dice rolls & target numbers" },
  modifiers: { page: 33, title: "Modifying dice rolls / natural 1 & 6" },
  rerolls: { page: 33, title: "Re-rolls and Team Re-rolls" },
  scatter: { page: 34, title: "Deviate, Scatter and Bouncing Balls" },
  turnover: { page: 35, title: "The Turnover" },
  armourValue: { page: 37, title: "Armour Value & Armour Rolls" },
  tackleZones: { page: 38, title: "Tackle Zones, Marking, Open players" },
  distracted: { page: 39, title: "Distracted" },
  prone: { page: 39, title: "Prone and Stunned players" },
  placedProne: { page: 39, title: "Placed Prone" },
  fallsOver: { page: 40, title: "Falls Over" },
  knockedDown: { page: 40, title: "Knocked Down" },
  weather: { page: 46, title: "The Weather" },
  turn: { page: 50, title: "A Team's Turn" },
  actions: { page: 51, title: "Declaring Actions" },
  forgo: { page: 52, title: "Forego Activation" },
  move: { page: 54, title: "Move Actions" },
  standUp: { page: 54, title: "Standing Up" },
  dodge: { page: 55, title: "Dodging" },
  jump: { page: 56, title: "Jumping over Players" },
  pickUp: { page: 57, title: "Picking up the Ball" },
  rush: { page: 58, title: "Rushing" },
  secure: { page: 59, title: "Secure the Ball Actions" },
  block: { page: 60, title: "Block Actions" },
  assists: { page: 61, title: "Assisting a Block Action" },
  blockDice: { page: 62, title: "Block Dice" },
  push: { page: 62, title: "Pushed Player" },
  chainPush: { page: 63, title: "Chain Pushes" },
  crowdPush: { page: 63, title: "Pushed into the Crowd" },
  followUp: { page: 63, title: "Follow-up" },
  blitz: { page: 64, title: "Blitz Actions" },
  injury: { page: 66, title: "Injury Rolls" },
  stuntyInjury: { page: 66, title: "Stunty Injury Table" },
  casualty: { page: 67, title: "Casualty Rolls" },
  crowdInjury: { page: 68, title: "Injury by the Crowd" },
  foul: { page: 69, title: "Foul Actions" },
  pass: { page: 70, title: "Pass Actions" },
  passRange: { page: 71, title: "Passing Range Chart" },
  passTest: { page: 71, title: "Test for Accuracy" },
  interception: { page: 71, title: "Interceptions" },
  resolvePass: { page: 71, title: "Resolve Pass Action" },
  catch: { page: 72, title: "Catching the Ball" },
  throwIn: { page: 73, title: "Throw-ins" },
  cornerThrowIn: { page: 73, title: "Corner Throw-ins" },
  handoff: { page: 74, title: "Hand-off Actions" },
  ttm: { page: 76, title: "Throw Team-mate Actions" },
  touchdown: { page: 80, title: "Touchdown!" },
  tdOpponentTurn: { page: 80, title: "Scoring during your opponent's turn" },
  stalling: { page: 80, title: "Stalling" },
  crowdTakesAction: { page: 81, title: "The Crowd Takes Action" },
  skillUse: { page: 121, title: "Skill Use (Active / Passive)" },
  traitUse: { page: 122, title: "Traits" }
};

// src/engine/skills.ts
var S = (d2) => d2;
var SKILLS = [
  S({ id: "accurate", name: "Accurate", category: "Passing", active: true, mandatory: false, page: 123, support: "implemented", summary: "+1 to the Passing Ability Test for a Quick or Short Pass." }),
  S({ id: "alwaysHungry", name: "Always Hungry", category: "Trait", active: true, mandatory: true, page: 123, support: "implemented", summary: "Throw Team-mate: roll a D6 before the Passing Ability Test; on a 1 roll again: 2+ the team-mate squirms free (Fumbled Throw), 1 the team-mate is eaten (Turnover)." }),
  S({ id: "animalSavagery", name: "Animal Savagery", category: "Trait", active: false, mandatory: true, page: 123, support: "implemented", summary: "After declaring an Action: D6 (+2 for a Block or Blitz), 4+ acts as declared. On 1-3 an adjacent Standing team-mate (the coach's choice) is Knocked Down \u2014 Claws and Mighty Blow must be used on its Armour Roll; no Turnover unless it held the ball \u2014 or, with none adjacent, the player is Distracted.", note: "Interpretation: after lashing out the declared Action is not performed (the activation ends)." }),
  S({ id: "animosity", name: "Animosity", category: "Trait", active: true, mandatory: true, page: 123, support: "implemented", keyworded: true, summary: "Pass/Hand-off to a team-mate with the keyword: roll a D6, on a 1 the player refuses and the activation ends." }),
  S({ id: "armBar", name: "Arm Bar", category: "Strength", active: true, mandatory: false, page: 123, support: "implemented", summary: "If an opponent Falls Over dodging/jumping/leaping out of this Tackle Zone, +1 to the Armour or Injury Roll." }),
  S({ id: "ballAndChain", name: "Ball & Chain", category: "Trait", active: true, mandatory: true, page: 124, support: "implemented", summary: "The only Action is the Ball & Chain Special Action: each step the Throw-in Template faces an End Zone or a Sideline and a D6 picks the square (no Dodges, no Shadowing or Tentacles); a Standing player there is Blocked (Foul Appearance ignored; against a team-mate this coach picks the result), a Prone / Stunned one is Pushed Back with an Armour Roll, the ball Bounces (no Turnover); off the pitch: the crowd. Up to MA steps, Rushes as normal (a failed Rush moves first). Knocked Down, Falls Over or Placed Prone: an Injury Roll at once, Stunned counts as Knocked-out.", note: "Each step is planned and confirmed on its own (choose the facing, Confirm). Interpretation: going into the crowd is a Turnover." }),
  S({ id: "bigHand", name: "Big Hand", category: "Mutation", active: true, mandatory: false, page: 124, support: "implemented", summary: "Ignores all negative modifiers when picking up the ball." }),
  S({ id: "block", name: "Block", category: "General", active: true, mandatory: false, page: 124, support: "implemented", summary: "May choose not to be Knocked Down on a Both Down result." }),
  S({ id: "bloodlust", name: "Bloodlust", category: "Trait", active: false, mandatory: true, page: 125, support: "implemented", valued: true, summary: "After declaring an Action: D6 (+1 for a Block or Blitz); below X+ or a natural 1: the Action may become a Move Action, and the player must bite an adjacent Thrall Lineman (Injury Roll, Casualty \u2192 Badly Hurt) before a Pass, a Hand-off or scoring, or at the end of the activation \u2014 otherwise Turnover, Distracted, the ball dropped.", note: "A Thrall is a team-mate with the Thrall keyword (custom League players)." }),
  S({ id: "bombardier", name: "Bombardier", category: "Trait", active: true, mandatory: false, page: 125, support: "implemented", summary: "Throw Bomb Special Action (one per Turn, no move first): thrown like a Pass (range, Passing Ability Test, Pass skills except On the Ball, Interceptions). Where it comes to rest \u2014 or in the hands of a player who drops it, or of a fumbling thrower \u2014 it explodes: the player in the square is hit, each adjacent player on 4+; Standing \u2192 Knocked Down, Prone / Stunned \u2192 Armour Roll. Caught or intercepted: thrown again at once.", note: "Interpretations: a bomb that leaves the pitch explodes harmlessly in the crowd; a Safe Pass natural 1 keeps the bomb, which fizzles out; a player without Passing Ability who catches it cannot throw it (it explodes). Previews stop exploring below 1 in 10,000." }),
  S({ id: "boneHead", name: "Bone Head", category: "Trait", active: false, mandatory: true, page: 126, support: "implemented", summary: "After declaring an Action roll a D6: on a 1 the player becomes Distracted." }),
  S({ id: "brawler", name: "Brawler", category: "Strength", active: true, mandatory: false, page: 126, support: "implemented", summary: "When it declares a Block Action, may re-roll a single Both Down result \u2014 once per Block Action (FAQ 2026; earlier matches keep their recorded behaviour)." }),
  S({ id: "breakTackle", name: "Break Tackle", category: "Strength", active: true, mandatory: false, page: 126, support: "implemented", summary: "Once per Turn, +1 (ST 3 or less), +2 (ST 4) or +3 (ST 5+) to a Dodge Agility Test." }),
  S({ id: "breatheFire", name: "Breathe Fire", category: "Trait", active: true, mandatory: false, page: 126, support: "implemented", summary: "Breathe Fire Special Action: D6 against a Standing opponent this player Marks (\u22121 if its ST is 5+): 1 this player is Knocked Down, 2-3 nothing, 4+ the target is Placed Prone, a natural 6 Knocks it Down; may replace the Block of a Blitz; the activation ends." }),
  S({ id: "bullseye", name: "Bullseye", category: "Strength", active: true, mandatory: false, page: 126, support: "implemented", summary: "A Superb Throw lands in the target square without scattering." }),
  S({ id: "cannoneer", name: "Cannoneer", category: "Passing", active: true, mandatory: false, page: 126, support: "implemented", summary: "+1 to the Passing Ability Test for a Long Pass or Long Bomb." }),
  S({ id: "catch", name: "Catch", category: "Agility", active: true, mandatory: false, page: 126, support: "implemented", summary: "May re-roll a failed Agility Test to Catch the ball." }),
  S({ id: "chainsaw", name: "Chainsaw", category: "Trait", active: true, mandatory: true, page: 126, support: "implemented", summary: "Chainsaw Attack Special Action: D6, 1 Kick-back (this player is Knocked Down), 2+ an Armour Roll +3 against an adjacent Standing opponent; may replace the Block of a Blitz; may be used for a Foul (+3, Kick-back first). +3 to Armour Rolls against this player whenever it goes down.", note: "Iron Hard Skin cancels the +3 against its owner." }),
  S({ id: "claws", name: "Claws", category: "Mutation", active: false, mandatory: false, page: 127, support: "implemented", summary: "Armour of a player it Knocks Down in a Block breaks on a natural 8+." }),
  S({ id: "cloudBurster", name: "Cloud Burster", category: "Passing", active: true, mandatory: false, page: 127, support: "implemented", summary: "Opponents may not Intercept this player's passes." }),
  S({ id: "dauntless", name: "Dauntless", category: "General", active: true, mandatory: false, page: 127, support: "implemented", summary: "Blocking a stronger player: roll D6 + ST; if higher than the target's ST, use the target's ST." }),
  S({ id: "decay", name: "Decay", category: "Trait", active: false, mandatory: true, page: 127, support: "implemented", summary: "+1 to Casualty Rolls against this player." }),
  S({ id: "defensive", name: "Defensive", category: "Agility", active: true, mandatory: false, page: 127, support: "implemented", summary: "In the opponent's Turn, opponents Marked by this player cannot use Guard." }),
  S({ id: "dirtyPlayer", name: "Dirty Player", category: "Devious", active: true, mandatory: false, page: 127, support: "implemented", summary: "Foul Action: +1 to the Armour Roll or the Injury Roll (chosen after the roll)." }),
  S({ id: "disturbingPresence", name: "Disturbing Presence", category: "Mutation", active: false, mandatory: true, page: 127, support: "implemented", summary: "-1 to opponents' Pass, Catch and Intercept tests for each such player within 3 squares." }),
  S({ id: "divingCatch", name: "Diving Catch", category: "Agility", active: true, mandatory: false, page: 127, support: "implemented", summary: "May try to Catch a pass, throw-in or kick-off landing in an empty square next to them (not a bouncing ball); +1 to Catch a pass in the target square.", note: "Interpretation: the diving player catches from their own square (they are not moved); one attempt, the active team's coach (the receiving team's at a kick-off) choosing first; a failed attempt bounces the ball from the landing square." }),
  S({ id: "divingTackle", name: "Diving Tackle", category: "Agility", active: true, mandatory: false, page: 127, support: "implemented", summary: "After an opponent's Dodge/Jump/Leap test, apply -2 and be Placed Prone in the vacated square." }),
  S({ id: "dodge", name: "Dodge", category: "Agility", active: true, mandatory: false, page: 127, support: "implemented", summary: "Once per Turn re-roll a Dodge test; Stumble becomes Push Back." }),
  S({ id: "drunkard", name: "Drunkard", category: "Trait", active: false, mandatory: true, page: 127, support: "implemented", summary: "-1 to Rush rolls." }),
  S({ id: "dumpOff", name: "Dump-off", category: "Passing", active: true, mandatory: false, page: 128, support: "implemented", summary: "Targeted by a Block or a Special Action while holding the ball: may first make a Quick Pass (normal rules, never a Turnover)." }),
  S({ id: "extraArms", name: "Extra Arms", category: "Mutation", active: true, mandatory: false, page: 128, support: "implemented", summary: "+1 to Catch, Pick Up and Intercept." }),
  S({ id: "eyeGouge", name: "Eye Gouge", category: "Devious", active: true, mandatory: false, page: 128, support: "implemented", summary: "Opponents it Pushes Back cannot assist until next activated." }),
  S({ id: "fend", name: "Fend", category: "General", active: true, mandatory: false, page: 128, support: "implemented", summary: "When Pushed Back by a Block, the blocker may not Follow-up." }),
  S({ id: "foulAppearance", name: "Foul Appearance", category: "Mutation", active: false, mandatory: true, page: 128, support: "implemented", summary: "A player blocking it rolls a D6 first: on a 1 the Block is cancelled and its activation ends." }),
  S({ id: "frenzy", name: "Frenzy", category: "General", active: true, mandatory: true, page: 128, support: "implemented", summary: "Must Follow-up; if the target is still Standing, must Block it again." }),
  S({ id: "fumblerooski", name: "Fumblerooski", category: "Devious", active: true, mandatory: false, page: 128, support: "implemented", summary: "During a Move Action with the ball: may leave the ball in a square the player moves out of (no Turnover).", note: "In the plan: tick Fumblerooski to leave the ball in the square the move starts from (plan the move in parts to drop it further on). The computer opponent does not use it." }),
  S({ id: "giveAndGo", name: "Give and Go", category: "Passing", active: true, mandatory: false, page: 128, support: "implemented", summary: "After a Quick Pass or Hand-off without a Turnover, may keep moving." }),
  S({ id: "grab", name: "Grab", category: "Strength", active: true, mandatory: false, page: 128, support: "implemented", summary: "Block Action: push the target into any unoccupied adjacent square; target cannot Sidestep (FAQ 2026 clarifications apply to new matches)." }),
  S({ id: "guard", name: "Guard", category: "Strength", active: true, mandatory: false, page: 129, support: "implemented", summary: "Assists Blocks however many opponents are Marking it." }),
  S({ id: "hailMaryPass", name: "Hail Mary Pass", category: "Passing", active: true, mandatory: false, page: 129, support: "implemented", summary: "May pass to any square as a Long Bomb; never Accurate; cannot be Intercepted." }),
  S({ id: "hatred", name: "Hatred", category: "Trait", active: true, mandatory: true, page: 129, support: "implemented", keyworded: true, summary: "Blocking a player with the keyword: may re-roll a single Player Down result." }),
  S({ id: "hitAndRun", name: "Hit and Run", category: "Agility", active: true, mandatory: false, page: 129, support: "implemented", summary: "After a Block, may move one free square ending unmarked. FAQ 2026: also after a Blitz Stab (the activation then ends)." }),
  S({ id: "horns", name: "Horns", category: "Mutation", active: true, mandatory: false, page: 129, support: "implemented", summary: "+1 ST for Blocks during a Blitz." }),
  S({ id: "hypnoticGaze", name: "Hypnotic Gaze", category: "Trait", active: true, mandatory: false, page: 129, support: "implemented", summary: "Hypnotic Gaze Special Action (move first): D6 3+ against an adjacent Standing opponent \u2014 it is Distracted; the activation ends either way." }),
  S({ id: "insignificant", name: "Insignificant", category: "Trait", active: false, mandatory: true, page: 129, support: "implemented", summary: "Team Draft List: no more players with this Trait than players without it (checked when building a team)." }),
  S({ id: "ironHardSkin", name: "Iron Hard Skin", category: "Mutation", active: false, mandatory: false, page: 129, support: "implemented", summary: "Opponents cannot modify Armour Rolls against it; Claws does not work against it." }),
  S({ id: "juggernaut", name: "Juggernaut", category: "Strength", active: true, mandatory: false, page: 129, support: "implemented", summary: "Blitz: Both Down may be treated as Push Back; target cannot use Fend, Stand Firm or Wrestle." }),
  S({ id: "jumpUp", name: "Jump Up", category: "Agility", active: true, mandatory: false, page: 130, support: "implemented", summary: "Stands up for free; may Block from Prone after an Agility Test (+1)." }),
  S({ id: "kick", name: "Kick", category: "General", active: true, mandatory: false, page: 130, support: "implemented", summary: "Kicking player may make the kick Deviate D3 instead of D6 squares (match play).", note: "Match play only: chosen when the kick is placed, before the Deviation roll." }),
  S({ id: "kickTeamMate", name: "Kick Team-mate", category: "Trait", active: false, mandatory: false, page: 130, support: "implemented", summary: "Kick Team-mate Special Action (one per Turn, move first allowed): like Throw Team-mate but not the team's Throw Team-mate Action; a Fumbled kick is an Injury Roll for the kicked player (Stunned counts as Knocked-out; the ball Bounces)." }),
  S({ id: "leader", name: "Leader", category: "Passing", active: false, mandatory: false, page: 130, support: "implemented", summary: "A Leader on the pitch at the start of a half gives one Leader Re-roll for that half, usable while a Leader is on the pitch; lost if every Leader becomes a Casualty or is Sent-off before it is used." }),
  S({ id: "leap", name: "Leap", category: "Agility", active: true, mandatory: false, page: 130, support: "implemented", summary: "May Leap over any adjacent square like a Jump; negative modifiers reduced by 1 (minimum -1)." }),
  S({ id: "lethalFlight", name: "Lethal Flight", category: "Devious", active: true, mandatory: false, page: 130, support: "implemented", summary: "Thrown by a team-mate and crash-landing on an opponent (also after a Bounce) who is Knocked Down: +1 to their Armour or Injury Roll (chosen after the roll); a Casualty is credited to this player (SPP in League matches).", note: "Needs the Right Stuff Trait." }),
  S({ id: "loneFouler", name: "Lone Fouler", category: "Devious", active: true, mandatory: false, page: 130, support: "implemented", summary: "Foul Action with no Offensive or Defensive Assists: may re-roll a failed Armour Roll." }),
  S({ id: "loner", name: "Loner", category: "Trait", active: false, mandatory: true, page: 131, support: "implemented", valued: true, summary: "Using a Team Re-roll requires a D6 roll of X+ or the re-roll is lost." }),
  S({ id: "mightyBlow", name: "Mighty Blow", category: "Strength", active: true, mandatory: false, page: 131, support: "implemented", summary: "+1 to the Armour or Injury Roll of a player it Knocks Down in a Block." }),
  S({ id: "monstrousMouth", name: "Monstrous Mouth", category: "Mutation", active: true, mandatory: false, page: 131, support: "implemented", summary: "Chomp Special Action: D6 3+ against a Standing opponent this player Marks \u2014 it cannot leave its square while this player Marks it; may replace the Block of a Blitz (the Blitz goes on). Strip Ball cannot be used against this player.", note: "Interpretation: Chomped stops the player's own movement (moves, Dodges, Jumps, Follow-ups); a Block can still Push it Back." }),
  S({ id: "multipleBlock", name: "Multiple Block", category: "Strength", active: true, mandatory: false, page: 132, support: "implemented", summary: "When declaring a Block Action: Block two different opponents it Marks at the same time, at ST \u22122 for both, no Follow-up; both are resolved in full even if one causes a Turnover. Not with Frenzy.", note: "Interpretation: both strengths (Dauntless first, then \u22122) are fixed before any dice; the dice are rolled one Block after the other; if the first Block knocks the blocker down, a Player Down / Both Down in the second only affects the target and the blocker's Active skills (e.g. Tackle) no longer apply (p.123); Pile Driver is not used. The computer opponent does not use Multiple Block." }),
  S({ id: "myBall", name: "My Ball", category: "Trait", active: false, mandatory: true, page: 132, support: "implemented", summary: "May not Pass or Hand-off the ball." }),
  S({ id: "nervesOfSteel", name: "Nerves of Steel", category: "Passing", active: true, mandatory: false, page: 132, support: "implemented", summary: "Ignores Marking modifiers when Catching or Passing." }),
  S({ id: "noBall", name: "No Ball", category: "Trait", active: false, mandatory: true, page: 132, support: "implemented", summary: "Automatically fails to Catch or Pick Up; cannot Intercept." }),
  S({ id: "onTheBall", name: "On the Ball", category: "Passing", active: true, mandatory: false, page: 132, support: "implemented", summary: "When an opponent passes (after the target is declared, before the Passing Ability Test): move up to 3 squares, no Rush, one player at a time; a fall ends the moves. At the kick-off (after the Deviation): one Open receiving player moves up to 3 squares in their own half (not on a Touchback).", note: "The coach picks a player and a destination; the route with the fewest Dodges is walked (Jumps and Leaps not offered). The computer opponent does not use On the Ball; previews assume it is not used." }),
  S({ id: "pass", name: "Pass", category: "Passing", active: true, mandatory: false, page: 132, support: "implemented", summary: "May re-roll a failed Passing Ability Test." }),
  S({ id: "pickMeUp", name: "Pick-me-up", category: "Trait", active: true, mandatory: false, page: 132, support: "implemented", summary: "At the end of the opponent's Turn, Prone team-mates within 3 squares stand up on a 5+." }),
  S({ id: "pileDriver", name: "Pile Driver", category: "Devious", active: true, mandatory: false, page: 133, support: "implemented", summary: "After Knocking Down an opponent in a Block Action and still Marking them: a free Foul on them, then this player is Placed Prone and the activation ends.", note: "The free Foul is not the team's Foul Action of the Turn (interpretation)." }),
  S({ id: "plagueRidden", name: "Plague Ridden", category: "Trait", active: false, mandatory: false, page: 133, support: "implemented", summary: "Once per game: a Dead result (not saved by an Apothecary) from this player's Block adds a new Lineman of the Team Roster to the Reserves Box (not against Big Guys or players with Decay, Regeneration or Stunty).", note: "Matches only (the new player needs a Team Roster); hiring the player after the game is not part of this app." }),
  S({ id: "pogo", name: "Pogo", category: "Trait", active: true, mandatory: false, page: 133, support: "implemented", summary: "May Pogo over any adjacent square like a Jump, ignoring negative modifiers." }),
  S({ id: "prehensileTail", name: "Prehensile Tail", category: "Mutation", active: true, mandatory: false, page: 133, support: "implemented", summary: "-1 to opponents Dodging, Jumping or Leaping out of its Tackle Zone." }),
  S({ id: "pro", name: "Pro", category: "General", active: true, mandatory: false, page: 133, support: "implemented", summary: "Once per activation, on a 3+ re-roll one dice (not Armour/Injury/Casualty)." }),
  S({ id: "projectileVomit", name: "Projectile Vomit", category: "Trait", active: true, mandatory: false, page: 133, support: "implemented", summary: "Special Action (or instead of a Blitz's Block): D6 2+ \u2192 unmodified Armour Roll for an adjacent Standing opponent; on a 1 \u2192 unmodified Armour Roll for this player." }),
  S({ id: "punt", name: "Punt", category: "Passing", active: true, mandatory: false, page: 134, support: "implemented", summary: "Punt Special Action (one per Turn): move first, then with the ball face the Throw-in Template to an End Zone or a Sideline; D6 direction, D6 distance; catch or Bounce where it lands. No Turnover if it ends on the ground; a Turnover if an opponent has it or it went into the crowd. Kick: may re-roll the direction and/or the distance.", note: "Interpretation: 'in the crowd' is the punted ball leaving the pitch in flight; a later Bounce out of the pitch is thrown in without a Turnover (unless an opponent ends with the ball). The computer opponent does not punt." }),
  S({ id: "putTheBootIn", name: "Put the Boot In", category: "Devious", active: true, mandatory: false, page: 134, support: "implemented", summary: "Gives Offensive Assists to a team-mate's Foul however many opponents Mark this player (not while Marked by a Defensive player in the opponent's Turn)." }),
  S({ id: "quickFoul", name: "Quick Foul", category: "Devious", active: true, mandatory: false, page: 134, support: "implemented", summary: "The activation does not end after a Foul: the player may keep moving with any movement left." }),
  S({ id: "reallyStupid", name: "Really Stupid", category: "Trait", active: false, mandatory: true, page: 135, support: "implemented", summary: "After declaring an Action roll a D6 (+2 with a helpful adjacent team-mate): on 1-3 becomes Distracted." }),
  S({ id: "regeneration", name: "Regeneration", category: "Trait", active: false, mandatory: false, page: 135, support: "implemented", summary: "On a Casualty, a 4+ sends the player to the Reserves instead." }),
  S({ id: "rightStuff", name: "Right Stuff", category: "Trait", active: false, mandatory: true, page: 135, support: "implemented", summary: "Can be thrown by a team-mate with Throw Team-mate, even if Prone." }),
  S({ id: "saboteur", name: "Saboteur", category: "Devious", active: true, mandatory: false, page: 135, support: "implemented", summary: "Knocked Down by an opposition Block: D6 4+ before the Armour Roll \u2014 the blocker is also Knocked Down (no Turnover unless holding the ball) and this player is Knocked-out." }),
  S({ id: "safePairOfHands", name: "Safe Pair of Hands", category: "Agility", active: true, mandatory: false, page: 135, support: "implemented", summary: "When going down with the ball, may place it in an adjacent unoccupied square instead of Bouncing." }),
  S({ id: "safePass", name: "Safe Pass", category: "Passing", active: true, mandatory: false, page: 135, support: "implemented", summary: "A natural 1 on the Passing Ability Test is not a Fumble: keep the ball, activation ends, no Turnover." }),
  S({ id: "secretWeapon", name: "Secret Weapon", category: "Trait", active: false, mandatory: true, page: 135, support: "implemented", summary: "Sent-off at the end of each Drive the player took part in (match play; Argue the Call / Bribes offered).", note: "Match play only. Practice positions have no Drives, so it has no effect there." }),
  S({ id: "shadowing", name: "Shadowing", category: "Devious", active: true, mandatory: false, page: 135, support: "implemented", summary: "When an opponent Dodges out of its Tackle Zone, on a 4+ move into the vacated square (MA times per Turn)." }),
  S({ id: "sidestep", name: "Sidestep", category: "Agility", active: true, mandatory: false, page: 135, support: "implemented", summary: "When Pushed Back, its coach chooses any adjacent unoccupied square." }),
  S({ id: "sneakyGit", name: "Sneaky Git", category: "Devious", active: true, mandatory: false, page: 136, support: "implemented", summary: "Not Sent-off for a natural double on the Foul's Armour Roll unless the armour is broken." }),
  S({ id: "sprint", name: "Sprint", category: "Agility", active: true, mandatory: false, page: 136, support: "implemented", summary: "May Rush one extra time during a Move Action." }),
  S({ id: "stab", name: "Stab", category: "Trait", active: true, mandatory: false, page: 136, support: "implemented", summary: "Stab Special Action (any number per Turn): an unmodified Armour Roll against an adjacent Standing opponent, an Injury Roll if broken; may replace the Block of a Blitz; the activation ends." }),
  S({ id: "standFirm", name: "Stand Firm", category: "Strength", active: true, mandatory: false, page: 136, support: "implemented", summary: "May choose not to be Pushed Back (including Chain Pushes)." }),
  S({ id: "steadyFooting", name: "Steady Footing", category: "General", active: true, mandatory: false, page: 136, support: "implemented", summary: "When it would be Knocked Down or Fall Over, a 6 on a D6 keeps it on its feet. FAQ 2026: after a failed Dodge, Rush or Jump the player stays Standing and the submitted path may continue (matches started before the FAQ keep the earlier handling)." }),
  S({ id: "stripBall", name: "Strip Ball", category: "General", active: true, mandatory: false, page: 136, support: "implemented", summary: "A ball carrier it Pushes Back drops the ball." }),
  S({ id: "strongArm", name: "Strong Arm", category: "Strength", active: true, mandatory: false, page: 136, support: "implemented", summary: "+1 to the Passing Ability Test of a Throw Team-mate Action." }),
  S({ id: "stunty", name: "Stunty", category: "Trait", active: false, mandatory: true, page: 136, support: "implemented", summary: "Ignores Marking modifiers when Dodging; -1 to Intercept; uses the Stunty Injury Table." }),
  S({ id: "sureFeet", name: "Sure Feet", category: "Agility", active: true, mandatory: false, page: 136, support: "implemented", summary: "Once per Turn re-roll a Rush." }),
  S({ id: "sureHands", name: "Sure Hands", category: "General", active: true, mandatory: false, page: 136, support: "implemented", summary: "May re-roll a failed Pick Up (not Secure the Ball); Strip Ball does not work against it." }),
  S({ id: "swoop", name: "Swoop", category: "Trait", active: true, mandatory: false, page: 137, support: "implemented", summary: "When thrown (not a Fumbled Throw): may travel with the Throw-in Template from the target square (D6 direction, D6 squares) instead of scattering, and then may re-roll the landing test.", note: "Interpretation: the template is placed on the target square. Previews assume Swoop is not used (you choose during execution)." }),
  S({ id: "tackle", name: "Tackle", category: "General", active: true, mandatory: false, page: 137, support: "implemented", summary: "Opponents dodging out of its Tackle Zone cannot use Dodge; Stumble ignores Dodge when it blocks." }),
  S({ id: "takeRoot", name: "Take Root", category: "Trait", active: false, mandatory: true, page: 137, support: "implemented", summary: "After declaring an Action while Standing: D6, on a 1 the player is Rooted \u2014 no moving (a planned move is not made), no Follow-up, cannot be Pushed Back \u2014 until Knocked Down, Placed Prone or the end of the Drive." }),
  S({ id: "taunt", name: "Taunt", category: "General", active: true, mandatory: false, page: 137, support: "implemented", summary: "When Pushed Back by a Block, may force the blocker to Follow-up." }),
  S({ id: "tentacles", name: "Tentacles", category: "Mutation", active: true, mandatory: false, page: 137, support: "implemented", summary: "Opponent leaving its Tackle Zone: D6 + own ST - their ST >= 6 holds them in place." }),
  S({ id: "thickSkull", name: "Thick Skull", category: "Strength", active: false, mandatory: false, page: 137, support: "implemented", summary: "Injury 8 is Stunned instead of KO (Stunty: 7 instead of KO)." }),
  S({ id: "throwTeamMate", name: "Throw Team-mate", category: "Trait", active: true, mandatory: false, page: 137, support: "implemented", summary: "May declare Throw Team-mate Actions (p.76-78)." }),
  S({ id: "timmmber", name: "Timmm-ber!", category: "Trait", active: false, mandatory: false, page: 137, support: "implemented", summary: "MA 2 or less: +1 per adjacent Open Standing team-mate to the stand-up roll." }),
  S({ id: "titchy", name: "Titchy", category: "Trait", active: false, mandatory: true, page: 138, support: "implemented", summary: "+1 to Dodge; does not apply the -1 Marking modifier to opponents dodging into its Tackle Zone." }),
  S({ id: "trickster", name: "Trickster", category: "Trait", active: true, mandatory: false, page: 138, support: "implemented", summary: "Targeted by a Block or a Special Action (not a Ball & Chain Block): before the dice, may move to any unoccupied square next to the acting player; placed on the ball, may try to pick it up. FAQ 2026: a rooted player cannot move; the Chomped state is cleared (earlier matches: held in place)." }),
  S({ id: "twoHeads", name: "Two Heads", category: "Mutation", active: true, mandatory: false, page: 138, support: "implemented", summary: "+1 to Dodge." }),
  S({ id: "unchannelledFury", name: "Unchannelled Fury", category: "Trait", active: false, mandatory: true, page: 138, support: "implemented", summary: "After declaring an Action roll a D6 (+2 for Block/Blitz): on 1-3 the activation ends." }),
  S({ id: "unsteady", name: "Unsteady", category: "Trait", active: false, mandatory: true, page: 138, support: "implemented", summary: "May not declare Secure the Ball Actions." }),
  S({ id: "veryLongLegs", name: "Very Long Legs", category: "Mutation", active: true, mandatory: false, page: 138, support: "implemented", summary: "+1 to Leap/Jump, +2 to Intercept; ignores Cloud Burster." }),
  S({ id: "violentInnovator", name: "Violent Innovator", category: "Devious", active: true, mandatory: false, page: 138, support: "implemented", summary: "A Casualty this player causes with a Special Action earns Star Player Points (2 SPP, League matches).", note: "Needs a Trait with a Special Action; in this app the Special Action offered is Projectile Vomit (the others are not implemented yet)." }),
  S({ id: "wrestle", name: "Wrestle", category: "General", active: true, mandatory: false, page: 138, support: "implemented", summary: "On Both Down, may Place both players Prone (no Armour Rolls)." })
];
var SKILL_BY_ID = Object.fromEntries(SKILLS.map((s) => [s.id, s]));
function skillName(ref) {
  const def = SKILL_BY_ID[ref.id];
  const base = def ? def.name : ref.id;
  if (ref.value !== void 0) return `${base} (${ref.value}+)`;
  if (ref.keyword) return `${base} (${ref.keyword})`;
  return base;
}
function gated(id) {
  return SKILL_BY_ID[id]?.support === "unsupported" || PENDING_VERIFICATION.has(id);
}
var PENDING_VERIFICATION = /* @__PURE__ */ new Set([]);
var BLOCKS_ACTIVATION = ["animalSavagery", "bloodlust", "takeRoot", "ballAndChain"];
var BLOCKS_BEING_BLOCKED = ["ballAndChain", "saboteur", "trickster"];

// src/engine/state.ts
function other(t) {
  return t === "A" ? "B" : "A";
}
function getPlayer(s, id) {
  const p = s.players.find((q) => q.id === id);
  if (!p) throw new Error(`Unknown player ${id}`);
  return p;
}
function findPlayer(s, id) {
  if (!id) return void 0;
  return s.players.find((q) => q.id === id);
}
function onPitch(p) {
  return p.location === "pitch" && !!p.pos;
}
function playerAt(s, c) {
  if (!inBounds(c)) return void 0;
  return s.players.find((p) => onPitch(p) && eq(p.pos, c));
}
function pitchPlayers(s, team2) {
  return s.players.filter((p) => onPitch(p) && (!team2 || p.team === team2));
}
function hasSkill(p, id) {
  return p.skills.some((sk4) => sk4.id === id);
}
function skillValue(p, id) {
  return p.skills.find((sk4) => sk4.id === id)?.value;
}
function skillKeywords(p, id) {
  return p.skills.filter((sk4) => sk4.id === id && sk4.keyword).map((sk4) => sk4.keyword);
}
function isStanding(p) {
  return onPitch(p) && p.stance === "standing";
}
function hasTackleZone(p) {
  return isStanding(p) && !p.distracted;
}
function canUse(p, id) {
  if (!hasSkill(p, id)) return false;
  const def = SKILL_BY_ID[id];
  if (!def || !def.active) return true;
  if (id === "jumpUp") return onPitch(p) && !p.distracted && (p.stance === "standing" || p.stance === "prone");
  return hasTackleZone(p);
}
function markersOf(s, sq, team2) {
  const opp = other(team2);
  return s.players.filter((p) => p.team === opp && hasTackleZone(p) && adjacent(p.pos, sq));
}
function isMarked(s, p) {
  return !!p.pos && markersOf(s, p.pos, p.team).length > 0;
}
function isOpen(s, p) {
  return isStanding(p) && !isMarked(s, p);
}
function ballHolder(s) {
  return s.ball.kind === "held" ? findPlayer(s, s.ball.playerId) : void 0;
}
function ballSquare(s) {
  if (s.ball.kind === "ground") return s.ball.pos;
  if (s.ball.kind === "held") return findPlayer(s, s.ball.playerId)?.pos ?? null;
  return null;
}
function hasBall(s, p) {
  return s.ball.kind === "held" && s.ball.playerId === p.id;
}
function leaderOnPitch(s, team2) {
  return pitchPlayers(s, team2).some((p) => hasSkill(p, "leader"));
}
function playersWithin(s, c, range, team2) {
  return pitchPlayers(s, team2).filter((p) => dist(p.pos, c) <= range);
}
function cloneState(s) {
  const g = s;
  if (g && typeof g === "object" && g.format === "bloodboard-state") usePitch(g.variant ?? "standard");
  return deepCopy(s);
}
function deepCopy(v) {
  if (v === null || typeof v !== "object") return v;
  if (Array.isArray(v)) {
    const out2 = new Array(v.length);
    for (let i = 0; i < v.length; i++) {
      const x = v[i];
      out2[i] = x === void 0 ? null : deepCopy(x);
    }
    return out2;
  }
  const out = {};
  for (const k in v) {
    const x = v[k];
    if (x === void 0 || typeof x === "function") continue;
    out[k] = deepCopy(x);
  }
  return out;
}
function label(p) {
  if (/^[XY]\d+$/.test(p.name)) return p.name;
  return `#${p.number} ${p.position}`;
}
function isChomped(s, p) {
  if (!p.chompedBy || !p.pos) return false;
  const c = findPlayer(s, p.chompedBy);
  return !!c && hasTackleZone(c) && !!c.pos && adjacent(c.pos, p.pos);
}
function heldInPlace(s, p) {
  if (p.rooted) return "Rooted (Take Root, p.137): this player may not leave their square.";
  if (isChomped(s, p)) return "Chomped (Monstrous Mouth, p.131): this player cannot leave their square while the chomping player Marks them.";
  return null;
}
var faq2026 = (s) => s.rulesEdition === "faq2026";

// src/engine/stardata.ts
var sk = (...xs) => xs.map((x) => typeof x === "string" ? { id: x } : typeof x[1] === "number" ? { id: x[0], value: x[1] } : { id: x[0], keyword: x[1] });
var STAR_DATA = [
  { id: "akhorne", name: "Akhorne the Squirrel", page: 195, cost: 8e4, ma: 7, st: 1, ag: 2, pa: null, av: 6, skills: sk("claws", "dauntless", "dodge", "frenzy", "jumpUp", ["loner", 4], "noBall", "sidestep", "stunty", "titchy"), keywords: ["Squirrel", "Blitzer"], playsFor: [], rule: { name: "Blind Rage", per: "always", summary: "May re-roll the D6 for Dauntless." } },
  { id: "anqiPanqi", name: "Anqi Panqi", page: 195, cost: 19e4, ma: 7, st: 4, ag: 5, pa: 6, av: 10, skills: sk("block", "grab", ["loner", 4], "standFirm", "unsteady"), keywords: ["Lizardman", "Blocker"], playsFor: ["Lustrian Superleague"], rule: { name: "Savage Blow", per: "game", summary: "Once per game, on a Block Action: re-roll any number of the Block dice." } },
  { id: "barik", name: "Barik Farblast", page: 195, cost: 8e4, ma: 6, st: 3, ag: 4, pa: 3, av: 9, skills: sk("cannoneer", "hailMaryPass", ["loner", 4], "pass", "secretWeapon", "sureHands", "thickSkull"), keywords: ["Dwarf", "Thrower"], playsFor: ["Old World Classic", "Worlds Edge Superleague"], rule: { name: "Blast It!", per: "always", summary: "Hail Mary Pass: may re-roll the scatter results; a team-mate catching it gets +1." } },
  { id: "bilerot", name: "Bilerot Vomitflesh", page: 195, cost: 18e4, ma: 4, st: 5, ag: 4, pa: 6, av: 10, skills: sk("dirtyPlayer", "disturbingPresence", "foulAppearance", "loneFouler", ["loner", 4], "regeneration", "unsteady"), keywords: ["Human", "Blocker"], playsFor: ["Favoured of Nurgle"], rule: { name: "Putrid Regurgitation", per: "half", summary: "Once per half: a Projectile Vomit Special Action, even after a Block Action this Turn." } },
  { id: "blackGobbo", name: "The Black Gobbo", page: 196, cost: 21e4, ma: 6, st: 2, ag: 3, pa: 3, av: 8, skills: sk("bombardier", "disturbingPresence", "dodge", ["loner", 3], "sidestep", "sneakyGit", "stab", "stunty"), keywords: ["Goblin", "Special"], playsFor: ["Badlands Brawl", "Underworld Challenge"], rule: { name: "Sneakiest of the Lot", per: "always", summary: "His team may declare two Foul Actions per Turn, one of them by the Black Gobbo." } },
  { id: "boa", name: "Boa Kon'ssstriktr", page: 196, cost: 18e4, ma: 6, st: 3, ag: 3, pa: 4, av: 9, skills: sk("dodge", "fend", "hypnoticGaze", ["loner", 4], "prehensileTail", "safePairOfHands", "sidestep"), keywords: ["Snakeman", "Runner"], playsFor: ["Lustrian Superleague"], rule: { name: "Look Into My Eyes", per: "game", summary: "Once per game, starting his activation Marking the ball carrier: D6 2+ takes the ball; his activation ends." } },
  { id: "bomber", name: "Bomber Dribblesnot", page: 196, cost: 8e4, ma: 6, st: 2, ag: 3, pa: 3, av: 8, skills: sk("accurate", "bombardier", "dodge", ["loner", 4], "rightStuff", "secretWeapon", "stunty"), keywords: ["Goblin", "Special"], playsFor: ["Badlands Brawl", "Underworld Challenge"], rule: { name: "Kaboom!", per: "game", summary: "Once per game, an opponent who catches his bomb has it explode instead of throwing it on." } },
  { id: "karina", name: "Captain Karina von Riesz", page: 196, cost: 23e4, ma: 7, st: 4, ag: 2, pa: 3, av: 9, skills: sk(["bloodlust", 2], "dodge", "hypnoticGaze", "jumpUp", ["loner", 4], "regeneration"), keywords: ["Vampire", "Runner"], playsFor: ["Sylvanian Spotlight"], rule: { name: "Tasty Morsel", per: "game", summary: "Once per game, after a failed Bloodlust roll: bite an opposition player (ST 3 or less, not a Star Player) as if a Thrall." } },
  { id: "cindy", name: "Cindy Piewhistle", page: 197, cost: 1e5, ma: 5, st: 2, ag: 3, pa: 3, av: 7, skills: sk("accurate", "bombardier", "dodge", ["loner", 4], "secretWeapon", "stunty"), keywords: ["Halfling", "Special"], playsFor: ["Halfling Thimble Cup", "Old World Classic"], rule: { name: "All You Can Eat", per: "game", summary: "Once per game: two Throw Bomb Actions in one activation, then D6 1-3 she is Sent-off." } },
  { id: "luthor", name: "Count Luthor von Drakenborg", page: 197, cost: 3e5, ma: 6, st: 5, ag: 2, pa: 3, av: 10, skills: sk("block", "hypnoticGaze", ["loner", 4], "regeneration", "sidestep"), keywords: ["Vampire", "Blocker"], playsFor: ["Sylvanian Spotlight"], rule: { name: "Star of the Show", per: "game", summary: "Once per game, scoring a Touchdown: +1 Team Re-roll until the end of the next Drive." } },
  { id: "crumbleberry", name: "Crumbleberry", page: 197, cost: 25e4, pair: "grak", ma: 5, st: 2, ag: 3, pa: 5, av: 7, skills: sk("dodge", "lethalFlight", ["loner", 4], "rightStuff", "stunty", "sureHands"), keywords: ["Halfling", "Lineman"], playsFor: [], rule: { name: "I'll Carry You", per: "always", summary: "Hired with Grak. While Grak carries him, Grak has Break Tackle and Dodge." } },
  { id: "deeproot", name: "Deeproot Strongbranch", page: 197, cost: 28e4, ma: 2, st: 7, ag: 5, pa: 4, av: 11, skills: sk("block", "bullseye", ["loner", 4], "mightyBlow", "standFirm", "strongArm", "thickSkull", "throwTeamMate", "timmmber"), keywords: ["Treeman", "Big Guy"], playsFor: ["Woodland League"], rule: { name: "Reliable", per: "always", summary: "A Fumbled Throw Team-mate: the thrown player Bounces but always lands safely." } },
  { id: "dribl", name: "Dribl", page: 198, cost: 23e4, pair: "drull", ma: 8, st: 2, ag: 3, pa: 4, av: 8, skills: sk("dirtyPlayer", "dodge", ["loner", 4], "quickFoul", "sidestep", "sneakyGit", "stunty"), keywords: ["Skink", "Special"], playsFor: ["Lustrian Superleague"], rule: { name: "A Sneaky Pair", per: "always", summary: "Hired with Drull. Foul or Stab against a player Marked by both: +1 to the roll." } },
  { id: "drull", name: "Drull", page: 198, cost: 23e4, pair: "dribl", ma: 8, st: 2, ag: 3, pa: 4, av: 8, skills: sk("dodge", ["loner", 4], "sidestep", "stab", "stunty"), keywords: ["Skink", "Special"], playsFor: ["Lustrian Superleague"], rule: { name: "A Sneaky Pair", per: "always", summary: "Hired with Dribl. Foul or Stab against a player Marked by both: +1 to the roll." } },
  { id: "eldril", name: "Eldril Sidewinder", page: 198, cost: 22e4, ma: 8, st: 3, ag: 2, pa: 3, av: 8, skills: sk("catch", "dodge", "hypnoticGaze", ["loner", 4], "nervesOfSteel", "onTheBall"), keywords: ["Elf", "Catcher"], playsFor: ["Elven Kingdoms League"], rule: { name: "Mesmerizing Dance", per: "half", summary: "Once per half: re-roll a Hypnotic Gaze roll." } },
  { id: "estelle", name: "Estelle la Veneaux", page: 198, cost: 19e4, ma: 6, st: 3, ag: 3, pa: 4, av: 8, skills: sk("disturbingPresence", "dodge", "guard", ["loner", 4], "sidestep"), keywords: ["Human", "Lineman"], playsFor: ["Lustrian Superleague"], rule: { name: "Baleful Hex", per: "game", summary: "Once per game, starting her activation: an opponent within 5 squares, D6 2+ becomes Distracted and cannot be activated in their team's next Turn." } },
  { id: "fungus", name: "Fungus the Loon", page: 199, cost: 8e4, ma: 4, st: 7, ag: 3, pa: null, av: 8, skills: sk("ballAndChain", ["loner", 4], "mightyBlow", "noBall", "secretWeapon", "stunty"), keywords: ["Goblin", "Special"], playsFor: ["Badlands Brawl", "Underworld Challenge"], rule: { name: "Whirling Dervish", per: "activation", summary: "Once per activation: re-roll the D6 for the direction his Ball & Chain moves." } },
  { id: "glart", name: "Glart Smashrip", page: 199, cost: 175e3, ma: 5, st: 4, ag: 4, pa: 6, av: 9, skills: sk("block", "claws", "grab", "juggernaut", ["loner", 4], "standFirm"), keywords: ["Skaven", "Blocker"], playsFor: ["Underworld Challenge"], rule: { name: "Frenzied Rush", per: "half", summary: "Once per half, declaring a Blitz: gains Frenzy for the activation (no Grab that Turn)." } },
  { id: "gloriel", name: "Gloriel Summerbloom", page: 199, cost: 15e4, ma: 7, st: 2, ag: 2, pa: 2, av: 8, skills: sk("accurate", "dodge", ["loner", 3], "pass", "sidestep", "sureHands"), keywords: ["Elf", "Thrower"], playsFor: ["Elven Kingdoms League"], rule: { name: "Shot to Nothing", per: "game", summary: "Once per game, when activated: gains Hail Mary Pass for the activation." } },
  { id: "glotl", name: "Glotl Stop", page: 199, cost: 26e4, ma: 6, st: 6, ag: 5, pa: 6, av: 10, skills: sk("animalSavagery", "frenzy", ["loner", 4], "mightyBlow", "prehensileTail", "standFirm", "thickSkull"), keywords: ["Lizardman", "Big Guy"], playsFor: ["Lustrian Superleague"], rule: { name: "Primal Savagery", per: "game", summary: "Once per game, failing Animal Savagery: may lash out at an opposition player instead of a team-mate." } },
  { id: "grak", name: "Grak", page: 200, cost: 25e4, pair: "crumbleberry", ma: 5, st: 5, ag: 4, pa: 4, av: 10, skills: sk("boneHead", "kickTeamMate", ["loner", 4], "mightyBlow", "thickSkull"), keywords: ["Ogre", "Big Guy"], playsFor: [], rule: { name: "I'll Carry You", per: "half", summary: "Hired with Crumbleberry. Once per half, starting his activation next to Crumbleberry: carry him and set him down next to Grak at the end." } },
  { id: "grashnak", name: "Grashnak Blackhoof", page: 200, cost: 24e4, ma: 6, st: 6, ag: 4, pa: 6, av: 9, skills: sk("frenzy", "horns", ["loner", 4], "mightyBlow", "thickSkull", "unchannelledFury"), keywords: ["Minotaur", "Big Guy"], playsFor: ["Chaos Clash"], rule: { name: "Gored by the Bull", per: "game", summary: "Once per game, blocking during a Blitz: one extra Block die (max 3), also for a Frenzy second Block." } },
  { id: "gretchen", name: "Gretchen W\xE4chter", page: 200, cost: 18e4, ma: 7, st: 3, ag: 2, pa: null, av: 9, skills: sk("disturbingPresence", "dodge", "foulAppearance", "jumpUp", ["loner", 4], "noBall", "regeneration", "shadowing", "sidestep"), keywords: ["Undead", "Wraith", "Special"], playsFor: ["Sylvanian Spotlight"], rule: { name: "Incorporeal", per: "game", summary: "Once per game, when activated: no Dodge rolls to leave Marked squares during the activation." } },
  { id: "griff", name: "Griff Oberwald", page: 200, cost: 3e5, ma: 7, st: 4, ag: 2, pa: 3, av: 9, skills: sk("block", "dodge", "fend", ["loner", 3], "sprint", "sureFeet"), keywords: ["Human", "Blitzer"], playsFor: ["Old World Classic"], rule: { name: "Consummate Professional", per: "game", summary: "Once per game: +1 to an Agility Test, after the roll." } },
  { id: "grim", name: "Grim Ironjaw", page: 201, cost: 19e4, ma: 5, st: 4, ag: 3, pa: 6, av: 9, skills: sk("block", "dauntless", "frenzy", ["hatred", "Big Guy"], ["loner", 4], "multipleBlock", "thickSkull"), keywords: ["Dwarf", "Special"], playsFor: ["Worlds Edge Superleague"], rule: { name: "Slayer", per: "game", summary: "Once per game, Knocking Down an opposition Big Guy with a Block: +1 to the Armour or Injury Roll (after the roll)." } },
  { id: "grombrindal", name: "Grombrindal", page: 201, cost: 17e4, ma: 5, st: 3, ag: 3, pa: 4, av: 10, skills: sk("block", "breakTackle", "dauntless", ["loner", 4], "mightyBlow", "standFirm", "sureFeet", "thickSkull"), keywords: ["Dwarf", "Blocker"], playsFor: ["Halfling Thimble Cup", "Old World Classic", "Worlds Edge Superleague"], rule: { name: "Wisdom of the White Dwarf", per: "game", summary: "Once per game, when activated: a team-mate within 2 squares gains Break Tackle, Dauntless, Mighty Blow or Sure Feet until the end of the Turn." } },
  { id: "guffle", name: "Guffle Pusmaw", page: 201, cost: 15e4, ma: 5, st: 4, ag: 4, pa: 6, av: 10, skills: sk("foulAppearance", ["loner", 4], "monstrousMouth", "nervesOfSteel", "onTheBall", "plagueRidden"), keywords: ["Human", "Blocker"], playsFor: ["Favoured of Nurgle"], rule: { name: "Quick Bite", per: "game", summary: "Once per game, Marking an opponent who catches the ball: an Armour Roll against them; broken \u2014 Guffle takes the ball (no Turnover)." } },
  { id: "hakflem", name: "Hakflem Skuttlespike", page: 201, cost: 2e5, ma: 8, st: 3, ag: 2, pa: 3, av: 8, skills: sk("dodge", "extraArms", ["loner", 4], "prehensileTail", "twoHeads"), keywords: ["Skaven", "Runner"], playsFor: ["Underworld Challenge"], rule: { name: "Treacherous", per: "game", summary: "Once per game, when activated next to a team-mate holding the ball: take it; the team-mate is Knocked Down (no Turnover)." } },
  { id: "helmut", name: "Helmut Wulf", page: 202, cost: 14e4, ma: 6, st: 3, ag: 3, pa: null, av: 9, skills: sk("chainsaw", ["loner", 4], "noBall", "pro", "secretWeapon", "standFirm"), keywords: ["Human", "Special"], playsFor: ["Old World Classic"], rule: { name: "Old Pro", per: "game", summary: "Once per game: use Pro to re-roll one die of an Armour Roll." } },
  { id: "hthark", name: "H'Thark the Unstoppable", page: 202, cost: 3e5, ma: 6, st: 6, ag: 4, pa: 6, av: 10, skills: sk("block", "breakTackle", "defensive", "juggernaut", ["loner", 4], "sprint", "sureFeet", "thickSkull", "unsteady"), keywords: ["Dwarf", "Blitzer"], playsFor: ["Badlands Brawl", "Favoured of Hashut"], rule: { name: "Unstoppable Momentum", per: "always", summary: "Blocking during a Blitz: may re-roll one Block die." } },
  { id: "ivan", name: "Ivan 'the Animal' Deathshroud", page: 202, cost: 21e4, ma: 6, st: 4, ag: 4, pa: 5, av: 9, skills: sk("block", "disturbingPresence", ["hatred", "Dwarf"], "juggernaut", ["loner", 4], "regeneration", "stripBall", "tackle"), keywords: ["Undead", "Human", "Skeleton", "Blitzer"], playsFor: ["Sylvanian Spotlight"], rule: { name: "Dwarven Scourge", per: "game", summary: "Once per game, Knocking Down an opponent with a Block: +1 (+2 against a Dwarf) to the Armour or Injury Roll." } },
  { id: "ivar", name: "Ivar Eriksson", page: 202, cost: 215e3, ma: 6, st: 4, ag: 3, pa: 4, av: 9, skills: sk("block", "guard", ["loner", 4], "tackle"), keywords: ["Human", "Blitzer"], playsFor: ["Old World Classic"], rule: { name: "Raiding Party", per: "drive", summary: "Once per Drive, starting his activation: an Open team-mate within 5 squares moves 1 square to Mark an opponent." } },
  { id: "jeremiahKool", name: "Jeremiah Kool", page: 203, cost: 3e5, ma: 8, st: 3, ag: 1, pa: 2, av: 9, skills: sk("block", "dodge", "divingCatch", "dumpOff", ["loner", 4], "nervesOfSteel", "onTheBall", "pass", "sidestep"), keywords: ["Elf", "Runner"], playsFor: ["Elven Kingdoms League"], rule: { name: "The Flashing Blade", per: "game", summary: "Once per game, starting his activation: a Stab against an opponent he Marks, then a Move Action." } },
  { id: "jordell", name: "Jordell Freshbreeze", page: 203, cost: 28e4, ma: 8, st: 3, ag: 1, pa: 3, av: 8, skills: sk("block", "divingCatch", "dodge", "leap", ["loner", 4], "sidestep", "steadyFooting"), keywords: ["Elf", "Blitzer"], playsFor: ["Elven Kingdoms League", "Woodland League"], rule: { name: "Swift as the Breeze", per: "game", summary: "Once per game: a Dodge, Leap or Rush test passes on 2+ regardless of modifiers." } },
  { id: "josefBugmanStar", name: "Josef Bugman", page: 203, cost: 18e4, ma: 5, st: 3, ag: 3, pa: 4, av: 9, skills: sk("block", "drunkard", "fend", ["loner", 3], "tackle", "taunt", "thickSkull"), keywords: ["Dwarf", "Blocker"], playsFor: ["Old World Classic", "Worlds Edge Superleague"], rule: { name: "Dwarfen Grit", per: "game", summary: "Once per game, when his armour is broken: re-roll that Armour Roll." } },
  { id: "karla", name: "Karla von Kill", page: 203, cost: 21e4, ma: 6, st: 4, ag: 3, pa: 3, av: 9, skills: sk("block", "dauntless", "dodge", "jumpUp", ["loner", 4]), keywords: ["Human", "Blitzer"], playsFor: ["Lustrian Superleague", "Old World Classic"], rule: { name: "Indomitable", per: "game", summary: "Once per game, a successful Dauntless roll: her ST becomes double the target's." } },
  { id: "kiroth", name: "Kiroth Krakeneye", page: 204, cost: 16e4, ma: 7, st: 3, ag: 2, pa: 3, av: 8, skills: sk("disturbingPresence", "foulAppearance", ["loner", 4], "onTheBall", "tackle", "tentacles"), keywords: ["Elf", "Runner"], playsFor: ["Elven Kingdoms League"], rule: { name: "Black Ink", per: "game", summary: "Once per game, starting an activation: an opponent he Marks becomes Distracted until next activated." } },
  { id: "kreek", name: "Kreek Rustgouger", page: 204, cost: 18e4, ma: 4, st: 7, ag: 4, pa: null, av: 10, skills: sk("ballAndChain", ["loner", 4], "mightyBlow", "noBall", "prehensileTail", "secretWeapon"), keywords: ["Skaven", "Big Guy", "Special"], playsFor: ["Underworld Challenge"], rule: { name: "I'll Be Back", per: "game", summary: "The first time he would be Sent-off for Secret Weapon he stays in the game (no Argue the Call)." } },
  { id: "lordBorak", name: "Lord Borak the Despoiler", page: 204, cost: 27e4, ma: 5, st: 5, ag: 3, pa: 5, av: 10, skills: sk("block", "dirtyPlayer", "leader", ["loner", 3], "mightyBlow", "putTheBootIn", "sneakyGit"), keywords: ["Human", "Blocker"], playsFor: ["Chaos Clash"], rule: { name: "Lord of Chaos", per: "game", summary: "Once per game, on a Block Action: re-roll one Block die." } },
  { id: "maple", name: "Maple Highgrove", page: 204, cost: 21e4, ma: 3, st: 5, ag: 5, pa: 5, av: 11, skills: sk("brawler", "grab", ["loner", 4], "mightyBlow", "standFirm", "tentacles", "thickSkull"), keywords: ["Treeman", "Big Guy"], playsFor: ["Woodland League"], rule: { name: "Vicious Vines", per: "half", summary: "Once per half: a Block Action against an opponent 2 squares away (no Follow-up)." } },
  { id: "maxSpleenripper", name: "Max Spleenripper", page: 205, cost: 13e4, ma: 5, st: 4, ag: 4, pa: null, av: 9, skills: sk("chainsaw", ["loner", 4], "noBall", "secretWeapon"), keywords: ["Human", "Special"], playsFor: ["Favoured of Khorne"], rule: { name: "Maximum Carnage", per: "game", summary: "Once per game, after a Chainsaw Attack: another Chainsaw Attack against a different opponent." } },
  { id: "mightyZug", name: "The Mighty Zug", page: 205, cost: 22e4, ma: 5, st: 5, ag: 4, pa: 6, av: 10, skills: sk("block", ["loner", 4], "mightyBlow", "unsteady"), keywords: ["Human", "Blocker"], playsFor: ["Old World Classic", "Worlds Edge Superleague"], rule: { name: "Crushing Blow", per: "game", summary: "Once per game, Knocking Down an opponent with a Block: +1 to the Armour Roll (after the roll)." } },
  { id: "morgNThorg", name: "Morg 'n' Thorg", page: 205, cost: 34e4, ma: 6, st: 6, ag: 3, pa: 4, av: 11, skills: sk("block", "bullseye", ["hatred", "Undead"], ["loner", 4], "mightyBlow", "thickSkull", "throwTeamMate"), keywords: ["Ogre", "Big Guy"], playsFor: [], except: ["Sylvanian Spotlight"], rule: { name: "The Ballista", per: "game", summary: "Once per game: re-roll the Passing Ability Test of a Throw Team-mate Action." } },
  { id: "nobbla", name: "Nobbla Blackwart", page: 205, cost: 12e4, ma: 6, st: 2, ag: 3, pa: null, av: 8, skills: sk("block", "chainsaw", "dodge", ["loner", 4], "noBall", "saboteur", "secretWeapon", "stunty"), keywords: ["Goblin", "Special"], playsFor: ["Badlands Brawl", "Underworld Challenge"], rule: { name: "Kick 'em While They're Down!", per: "game", summary: "Once per game: a Chainsaw Attack against a Prone or Stunned opponent (not a Foul; never Sent-off for it)." } },
  { id: "puggy", name: "Puggy Baconbreath", page: 206, cost: 13e4, ma: 5, st: 3, ag: 3, pa: 3, av: 8, skills: sk("block", "dodge", ["loner", 3], "nervesOfSteel", "rightStuff", "stunty"), keywords: ["Halfling", "Blitzer"], playsFor: ["Halfling Thimble Cup", "Old World Classic"], rule: { name: "Halfling Luck", per: "game", summary: "Once per game: re-roll one die he rolled (not an Armour, Injury or Casualty Roll)." } },
  { id: "rashnak", name: "Rashnak Backstabber", page: 206, cost: 13e4, ma: 7, st: 3, ag: 3, pa: 5, av: 8, skills: sk(["loner", 4], "shadowing", "sidestep", "sneakyGit", "stab"), keywords: ["Goblin", "Special"], playsFor: ["Badlands Brawl"], rule: { name: "Toxin Connoisseur", per: "game", summary: "Once per game, breaking armour with a Stab: +1 to the Injury Roll (after the roll)." } },
  { id: "ripper", name: "Ripper Bolgrot", page: 206, cost: 25e4, ma: 5, st: 6, ag: 5, pa: 4, av: 10, skills: sk("bullseye", "grab", ["loner", 4], "mightyBlow", "regeneration", "throwTeamMate"), keywords: ["Troll", "Big Guy"], playsFor: ["Badlands Brawl", "Underworld Challenge"], rule: { name: "Thinking Man's Troll", per: "half", summary: "Once per half: re-roll one die he rolled (not an Armour, Injury or Casualty Roll)." } },
  { id: "rodney", name: "Rodney Roachbait", page: 206, cost: 7e4, ma: 6, st: 2, ag: 3, pa: 4, av: 7, skills: sk("catch", "divingCatch", "jumpUp", ["loner", 4], "onTheBall", "sidestep", "stunty", "wrestle"), keywords: ["Gnome", "Special"], playsFor: ["Woodland League"], rule: { name: "Catch of the Day", per: "half", summary: "Once per half, Standing at the start of his activation within 3 squares of the ball on the ground: D6 3+ and he has the ball." } },
  { id: "rowana", name: "Rowana Forestfoot", page: 207, cost: 16e4, ma: 6, st: 3, ag: 3, pa: 4, av: 8, skills: sk("dodge", "dumpOff", "guard", "horns", "jumpUp", "leap", ["loner", 4]), keywords: ["Gnome", "Blocker"], playsFor: ["Woodland League"], rule: { name: "Bounding Leap", per: "game", summary: "Once per game, declaring a Leap: no negative modifiers to the Agility Test, and she may re-roll it." } },
  { id: "roxanna", name: "Roxanna Darknail", page: 207, cost: 27e4, ma: 8, st: 3, ag: 1, pa: 3, av: 8, skills: sk("dodge", "frenzy", "jumpUp", "juggernaut", "leap", ["loner", 4]), keywords: ["Elf", "Special"], playsFor: ["Elven Kingdoms League"], rule: { name: "Slashing Nails", per: "half", summary: "Once per half, declaring a Blitz: gains Claws for the activation." } },
  { id: "rumbelow", name: "Rumbelow Sheepskin", page: 207, cost: 17e4, ma: 6, st: 3, ag: 3, pa: 5, av: 8, skills: sk("block", "horns", "juggernaut", ["loner", 4], "tackle", "thickSkull"), keywords: ["Halfling", "Blitzer"], playsFor: ["Halfling Thimble Cup"], rule: { name: "Ram", per: "game", summary: "Once per game, Knocking Down an opponent with a Block: +1 to the Armour or Injury Roll (after the roll)." } },
  { id: "scrappa", name: "Scrappa Sorehead", page: 207, cost: 12e4, ma: 7, st: 2, ag: 3, pa: 4, av: 8, skills: sk("dirtyPlayer", "dodge", ["loner", 4], "pogo", "rightStuff", "sprint", "stunty", "sureFeet"), keywords: ["Goblin", "Special"], playsFor: ["Badlands Brawl", "Underworld Challenge"], rule: { name: "Yoink!", per: "game", summary: "Once per game, attempting an Interception: D6 2+ intercepts automatically." } },
  { id: "scyla", name: "Scyla Anfingrimm", page: 208, cost: 2e5, ma: 5, st: 5, ag: 4, pa: 6, av: 10, skills: sk("claws", "frenzy", ["loner", 4], "mightyBlow", "prehensileTail", "thickSkull", "unchannelledFury"), keywords: ["Spawn", "Big Guy"], playsFor: ["Favoured of Khorne"], rule: { name: "Fury of the Blood God", per: "game", summary: "Once per game, rolling a 1 for Unchannelled Fury on a Block: two Block Actions instead." } },
  { id: "skitter", name: "Skitter Stab-Stab", page: 208, cost: 17e4, ma: 9, st: 2, ag: 2, pa: 4, av: 8, skills: sk("dodge", ["loner", 4], "prehensileTail", "shadowing", "stab"), keywords: ["Skaven", "Runner"], playsFor: ["Underworld Challenge"], rule: { name: "Master Assassin", per: "game", summary: "Once per game, on a Stab: re-roll the Armour Roll." } },
  { id: "skrorg", name: "Skrorg Snowpelt", page: 208, cost: 24e4, ma: 5, st: 5, ag: 4, pa: 6, av: 9, skills: sk("block", "claws", "disturbingPresence", "juggernaut", ["loner", 4], "mightyBlow"), keywords: ["Yhetee", "Big Guy"], playsFor: ["Old World Classic", "Worlds Edge Superleague"], rule: { name: "Pump Up the Crowd", per: "game", summary: "Once per game, a Casualty from his Block: +1 Team Re-roll until the end of the Drive." } },
  { id: "skrull", name: "Skrull Halfheight", page: 208, cost: 15e4, ma: 6, st: 3, ag: 4, pa: 3, av: 9, skills: sk("accurate", ["loner", 4], "nervesOfSteel", "pass", "regeneration", "sureHands", "thickSkull"), keywords: ["Undead", "Dwarf", "Skeleton", "Thrower"], playsFor: ["Sylvanian Spotlight", "Worlds Edge Superleague"], rule: { name: "Strong Passing Game", per: "game", summary: "Once per game, on a Pass Action: add his ST to the Passing Ability Test result (max 6)." } },
  { id: "lucien", name: "Lucien Swift", page: 209, cost: 3e5, pair: "valen", ma: 7, st: 3, ag: 2, pa: 3, av: 9, skills: sk("block", ["loner", 4], "mightyBlow", "tackle"), keywords: ["Elf", "Blitzer"], playsFor: ["Elven Kingdoms League"], rule: { name: "Working in Tandem", per: "always", summary: "Hired with Valen. Blocking an opponent also Marked by Valen: re-roll one Block die." } },
  { id: "valen", name: "Valen Swift", page: 209, cost: 3e5, pair: "lucien", ma: 7, st: 3, ag: 2, pa: 2, av: 9, skills: sk("accurate", ["loner", 4], "nervesOfSteel", "pass", "safePass", "sureHands"), keywords: ["Elf", "Thrower"], playsFor: ["Elven Kingdoms League"], rule: { name: "Working in Tandem", per: "always", summary: "Hired with Lucien. A Pass to Lucien's square: no range modifier." } },
  { id: "swiftvine", name: "Swiftvine Glimmershard", page: 209, cost: 11e4, ma: 7, st: 2, ag: 3, pa: 5, av: 7, skills: sk("disturbingPresence", "fend", ["loner", 4], "sidestep", "stab", "stunty"), keywords: ["Spite", "Special"], playsFor: ["Woodland League"], rule: { name: "Furious Outburst", per: "half", summary: "Once per half, Standing at the start of her activation: jump next to a Standing opponent within 3 squares, Stab, then move up to 3 squares; counts as the Blitz." } },
  { id: "thorsson", name: "Thorsson Stoutmead", page: 209, cost: 17e4, ma: 6, st: 3, ag: 4, pa: 3, av: 8, skills: sk("block", "drunkard", ["loner", 4], "thickSkull"), keywords: ["Human", "Lineman"], playsFor: ["Old World Classic", "Worlds Edge Superleague"], rule: { name: "Beer Barrel Bash", per: "drive", summary: "Once per Drive, starting his activation: an opponent within 3 squares, D6 3+ Knocked Down, 2 nothing, 1 Thorsson Falls Over; his activation ends." } },
  { id: "varag", name: "Varag Ghoul-Chewer", page: 210, cost: 26e4, ma: 6, st: 5, ag: 3, pa: 5, av: 10, skills: sk("block", ["hatred", "Undead"], "jumpUp", ["loner", 4], "mightyBlow", "thickSkull", "unsteady"), keywords: ["Orc", "Blocker"], playsFor: ["Badlands Brawl"], rule: { name: "Krump and Smash", per: "game", summary: "Once per game, Knocking Down an opponent with a Block: re-roll the Armour Roll." } },
  { id: "wilhelm", name: "Wilhelm Chaney", page: 210, cost: 22e4, ma: 8, st: 4, ag: 3, pa: 4, av: 9, skills: sk("catch", "claws", "frenzy", ["loner", 4], "regeneration", "wrestle"), keywords: ["Undead", "Werewolf", "Blitzer"], playsFor: ["Sylvanian Spotlight"], rule: { name: "Savage Mauling", per: "game", summary: "Once per game: re-roll an Injury Roll he makes against an opponent." } },
  { id: "willow", name: "Willow Rosebark", page: 210, cost: 16e4, ma: 6, st: 4, ag: 3, pa: 5, av: 9, skills: sk("dauntless", ["loner", 4], "sidestep", "thickSkull"), keywords: ["Dryad", "Blitzer"], playsFor: ["Woodland League"], rule: { name: "Woodland Fury", per: "game", summary: "Once per game, a Block that would Knock her Down: re-roll one Block die." } },
  { id: "withergrasp", name: "Withergrasp Doubledrool", page: 210, cost: 17e4, ma: 6, st: 3, ag: 3, pa: 4, av: 9, skills: sk("foulAppearance", ["loner", 4], "prehensileTail", "tackle", "tentacles", "twoHeads", "wrestle"), keywords: ["Beastman", "Blocker"], playsFor: ["Favoured of Nurgle"], rule: { name: "Watch Out!", per: "drive", summary: "The first time each Drive he is Blocked by an opponent he counts as having Dodge." } },
  { id: "zolcath", name: "Zolcath the Zoat", page: 211, cost: 22e4, ma: 5, st: 5, ag: 4, pa: 5, av: 10, skills: sk("disturbingPresence", "juggernaut", ["loner", 4], "mightyBlow", "prehensileTail", "regeneration", "sureFeet"), keywords: ["Zoat", "Big Guy"], playsFor: ["Elven Kingdoms League", "Lustrian Superleague"], rule: { name: "Excuse me, are you a Zoat?", per: "game", summary: "Once per game, when activated: an opponent within 3 squares becomes Distracted." } },
  { id: "zzharg", name: "Zzharg Madeye", page: 211, cost: 13e4, ma: 4, st: 4, ag: 4, pa: 3, av: 10, skills: sk("cannoneer", "hailMaryPass", ["loner", 4], "nervesOfSteel", "secretWeapon", "thickSkull"), keywords: ["Dwarf", "Special"], playsFor: ["Favoured of Hashut"], rule: { name: "Blastin' Solves Everything", per: "half", summary: "Once per half, starting his activation: blast a Standing opponent within 3 squares (D6 3+ hit, 2 the other coach picks a nearby player, 1 Zzharg) \u2014 an Armour Roll; his activation ends." } }
];

// src/engine/stars.ts
var STARS = STAR_DATA;
var STAR_BY_ID = Object.fromEntries(STARS.map((s) => [s.id, s]));
var STAR_RULE = { page: 148, title: "Star Players" };
var STAR_LIST_PAGE = 194;
var STAR_MAX = 2;
var STAR_RULES_IMPLEMENTED = /* @__PURE__ */ new Set([
  "akhorne",
  "anqiPanqi",
  "lordBorak",
  "hthark",
  "willow",
  "grashnak",
  "karla",
  "lucien",
  "valen",
  "mightyZug",
  "grim",
  "ivan",
  "rumbelow",
  "varag",
  "wilhelm",
  "josefBugmanStar",
  "griff",
  "jordell",
  "puggy",
  "ripper",
  "morgNThorg",
  "eldril",
  "skrull",
  "rowana",
  "withergrasp",
  "kreek",
  "luthor",
  "skrorg",
  "glart",
  "roxanna",
  "gloriel",
  "deeproot",
  "blackGobbo",
  "dribl",
  "drull",
  "scrappa",
  "skitter",
  "rashnak",
  // Start-of-activation rules and Action variants (starActions.ts) and the remaining hooks:
  "barik",
  "bilerot",
  "boa",
  "bomber",
  "karina",
  "cindy",
  "grak",
  "crumbleberry",
  "estelle",
  "fungus",
  "glotl",
  "grombrindal",
  "guffle",
  "hakflem",
  "helmut",
  "ivar",
  "jeremiahKool",
  "kiroth",
  "maple",
  "maxSpleenripper",
  "nobbla",
  "rodney",
  "scyla",
  "swiftvine",
  "thorsson",
  "zolcath",
  "zzharg",
  "gretchen"
]);
function starSupported(id) {
  return STAR_RULES_IMPLEMENTED.has(id);
}
function starRuleRef(st) {
  return { page: st.page, title: `${st.name}: ${st.rule.name}` };
}
function playsForText(st) {
  if (!st.playsFor.length) return st.except?.length ? `any team except ${st.except.join(" or ")}` : "any team";
  return st.playsFor.join(" or ");
}
function starPlaysFor(st, league, rules) {
  if (!st.playsFor.length) return !st.except?.some((x) => x === league || rules.includes(x));
  return st.playsFor.some((x) => x === league || rules.includes(x));
}
function starChoiceKey(id) {
  const st = STAR_BY_ID[id];
  return st?.pair ? [id, st.pair].sort().join("+") : id;
}
function starsCost(players) {
  const seen = /* @__PURE__ */ new Set();
  let n = 0;
  for (const p of players) {
    if (!p.star) continue;
    const k = starChoiceKey(p.star);
    if (seen.has(k)) continue;
    seen.add(k);
    n += STAR_BY_ID[p.star]?.cost ?? 0;
  }
  return n;
}
function starChoices(players) {
  return new Set(players.filter((p) => p.star).map((p) => starChoiceKey(p.star))).size;
}
function starSkills(st) {
  return st.skills.map((k) => ({ ...k }));
}
function starOf(p) {
  return p?.star ? STAR_BY_ID[p.star] : void 0;
}
function isStar(p, id) {
  return !!p && p.star === id;
}
function starMarker(s, per) {
  switch (per) {
    case "half":
      return `h${s.match?.half ?? s.turn.half}`;
    case "drive":
      return `d${s.match?.drive ?? 0}`;
    case "activation":
      return `a${s.turn.half}${s.turn.active}${s.teams[s.turn.active].turn}`;
    default:
      return "game";
  }
}
function starReady(s, p, id) {
  if (!p || p.star !== id) return false;
  if (p.frog) return false;
  const st = STAR_BY_ID[id];
  if (!st || !starSupported(id)) return false;
  if (st.rule.per === "always") return true;
  return !(p.starUsed ?? []).includes(starMarker(s, st.rule.per));
}
function spendStar(ctx, p, text) {
  const st = starOf(p);
  if (!st) return;
  if (st.rule.per !== "always") p.starUsed = [...p.starUsed ?? [], starMarker(ctx.s, st.rule.per)];
  ctx.emit("status", `${st.name} \u2014 ${st.rule.name}: ${text}`, starRuleRef(st), { playerId: p.id, star: st.id });
}
function askStar(ctx, p, prompt, useLabel, helps, noLabel = "Do not use it now") {
  const st = starOf(p);
  if (!st) return false;
  const c = ctx.ask({
    type: "starRule",
    team: p.team,
    prompt: `${st.name} \u2014 ${st.rule.name}: ${prompt}`,
    options: [
      { id: "use", label: useLabel },
      { id: "no", label: noLabel }
    ],
    rule: starRuleRef(st),
    context: { star: st.id, helps }
  });
  return c === "use";
}
function sneakyPair(s, p, target) {
  if (p.star !== "dribl" && p.star !== "drull") return false;
  const marks = (id) => s.players.some((q) => q.star === id && q.team === p.team && q.location === "pitch" && q.stance === "standing" && !q.distracted && !!q.pos && !!target.pos && Math.max(Math.abs(q.pos.x - target.pos.x), Math.abs(q.pos.y - target.pos.y)) === 1);
  return marks("dribl") && marks("drull");
}
var AGILITY_TESTS = /* @__PURE__ */ new Set(["dodge", "jump", "pickup", "catch", "intercept", "landing"]);
function starTestBonus(s, p, kind) {
  if (AGILITY_TESTS.has(kind) && starReady(s, p, "griff")) return { id: "griff", value: 1, what: "Griff Oberwald's Consummate Professional, once per game" };
  if (kind === "pass" && starReady(s, p, "skrull")) return { id: "skrull", value: p.st, what: "Skrull Halfheight's Strong Passing Game, once per game" };
  return null;
}
function starPassOn2(s, p, kind, subkind) {
  if (!starReady(s, p, "jordell")) return false;
  return kind === "dodge" || kind === "rush" || kind === "jump" && subkind === "leap";
}
function starTestReroll(s, p, kind) {
  if (kind === "ttm" && starReady(s, p, "morgNThorg")) return { id: "morgNThorg", what: "Morg 'n' Thorg's The Ballista (once per game)" };
  if (kind === "hypnoticGaze" && starReady(s, p, "eldril")) return { id: "eldril", what: "Eldril Sidewinder's Mesmerizing Dance (once per half)" };
  if (starReady(s, p, "puggy")) return { id: "puggy", what: "Puggy Baconbreath's Halfling Luck (once per game)" };
  if (starReady(s, p, "ripper")) return { id: "ripper", what: "Ripper Bolgrot's Thinking Man's Troll (once per half)" };
  return null;
}
function foulTakenReason(s, p) {
  if (!s.turn.used.foul) return null;
  const by = s.turn.used.foulBy ?? [];
  const gobbo = s.players.some((q) => q.team === p.team && q.star === "blackGobbo" && q.location === "pitch");
  if (gobbo && by.length < 2) {
    const gobboFouled = by.some((id) => s.players.find((q) => q.id === id)?.star === "blackGobbo");
    if (gobboFouled || p.star === "blackGobbo") return null;
    return "Sneakiest of the Lot (the Black Gobbo, p.196): the team's second Foul Action this Turn must be declared by the Black Gobbo.";
  }
  return "The Foul Action has already been declared this Turn (p.69).";
}
function starOnDeclare(ctx, p, act) {
  const s = ctx.s;
  if (act.action === "blitz" && starReady(s, p, "glart") && askStar(ctx, p, "gain Frenzy for this Blitz (he may not use Grab this Turn)?", "Use Frenzied Rush: Frenzy", true)) {
    grantTempSkill(p, "frenzy", "activation");
    act.starFlags = [...act.starFlags ?? [], "noGrab"];
    spendStar(ctx, p, `${p.name} gains Frenzy until the end of his activation and may not use Grab this Turn.`);
  }
  if (act.action === "blitz" && starReady(s, p, "roxanna") && askStar(ctx, p, "gain Claws for this Blitz?", "Use Slashing Nails: Claws", true)) {
    grantTempSkill(p, "claws", "activation");
    spendStar(ctx, p, `${p.name} gains Claws until the end of her activation.`);
  }
  if (act.action === "pass" && starReady(s, p, "gloriel") && askStar(ctx, p, "gain Hail Mary Pass for this activation?", "Use Shot to Nothing: Hail Mary Pass", false)) {
    grantTempSkill(p, "hailMaryPass", "activation");
    spendStar(ctx, p, `${p.name} gains Hail Mary Pass until the end of her activation.`);
  }
}
function grabForbidden(s, p) {
  const a = s.turn.activation;
  return !!a && a.playerId === p.id && !!a.starFlags?.includes("noGrab");
}
function dropTempSkills(s, until) {
  const drop = until === "drive" ? ["activation", "turn", "drive"] : until === "turn" ? ["activation", "turn"] : ["activation"];
  for (const p of s.players) if (p.skills.some((k) => k.until && drop.includes(k.until))) p.skills = p.skills.filter((k) => !k.until || !drop.includes(k.until));
}
function grantTempSkill(p, id, until) {
  if (p.skills.some((k) => k.id === id)) return false;
  p.skills.push({ id, until });
  return true;
}

// src/engine/roll.ts
var shownD6 = (s, v) => s.rulesEdition === "faq2026" ? clampD6(v) : Math.max(1, clampD6(v));
var VETERAN_KINDS = /* @__PURE__ */ new Set(["pickup", "secure", "catch", "pass"]);
var VETERAN_RULE = { page: 13, title: "Veterans", source: "sevens" };
function veteranRerollFor(spec) {
  return spec.player.veteran === "ready" && VETERAN_KINDS.has(spec.kind) && !spec.notBall;
}
function modSum(mods) {
  return mods.reduce((a, m) => a + m.value, 0);
}
function fmtMods(mods) {
  if (!mods.length) return "no modifiers";
  return mods.map((m) => `${m.value >= 0 ? "+" : ""}${m.value} ${m.label}`).join(", ");
}
function spendTeamReroll(t, n = 1) {
  t.rerolls -= n;
  if (t.bonusRerolls) t.bonusRerolls = Math.max(0, t.bonusRerolls - n);
}
var CAPTAIN_RULE = { page: 155, title: "Team Captain" };
function captainOnPitch(s, team2) {
  if (!s.teams[team2].specialRules?.includes("Team Captain")) return void 0;
  return pitchPlayers(s, team2).find((p) => p.captain);
}
function useTeamReroll(ctx, team2, what = "") {
  const t = ctx.s.teams[team2];
  const bonus = (t.bonusRerolls ?? 0) > 0;
  spendTeamReroll(t);
  ctx.emit("reroll", `Team Re-roll used${what} (${t.rerolls} Team Re-roll${t.rerolls === 1 ? "" : "s"} left).`, R.rerolls);
  const cap = captainOnPitch(ctx.s, team2);
  if (!cap) return;
  const r = ctx.roll({ dice: [6], interpret: ([n]) => n === 6 ? "S" : "F", cacheKey: "captain6", by: team2, judge: (v) => v === "S" ? 1 : -1 });
  const free = r.value === "S";
  if (free) {
    t.rerolls += 1;
    if (bonus) t.bonusRerolls = (t.bonusRerolls ?? 0) + 1;
  }
  ctx.emit("roll", `Team Captain ${label(cap)}: rolled ${r.faces[0]} \u2014 ${free ? "a natural 6, the Team Re-roll is free" : "the Team Re-roll is spent"}.`, CAPTAIN_RULE, { playerId: cap.id, captainFree: free });
}
function mascotAvailable(ctx, team2) {
  return ctx.s.turn.active === team2 && !!ctx.s.teams[team2].mascotReroll;
}
function mascotCheck(ctx, team2) {
  const t = ctx.s.teams[team2];
  t.mascotReroll = false;
  const r = ctx.roll({ dice: [6], interpret: ([n]) => n >= 4 ? "S" : "F", cacheKey: "mascot4", by: team2, judge: (v) => v === "S" ? 1 : -1 });
  const rule2 = { page: 144, title: "Team Mascot" };
  ctx.emit("roll", `Team Mascot: ${r.faces[0]} \u2014 ${r.value === "S" ? "the Team Re-roll can be used" : "the Mascot is ineffective: its Team Re-roll is lost for this half"}.`, rule2);
  return r.value === "S";
}
function mascotCaptainFree(ctx, team2) {
  const cap = captainOnPitch(ctx.s, team2);
  if (!cap) return false;
  const r = ctx.roll({ dice: [6], interpret: ([n]) => n === 6 ? "S" : "F", cacheKey: "captain6", by: team2, judge: (v) => v === "S" ? 1 : -1 });
  const free = r.value === "S";
  if (free) ctx.s.teams[team2].mascotReroll = true;
  ctx.emit("roll", `Team Captain ${label(cap)}: rolled ${r.faces[0]} \u2014 ${free ? "a natural 6, the Team Mascot's re-roll is free and can be used again (with a new D6 4+)" : "the Team Mascot's re-roll is spent"}.`, CAPTAIN_RULE, { playerId: cap.id, captainFree: free, mascot: true });
  return free;
}
function teamRerollsAvailable(ctx, p) {
  const s = ctx.s;
  if (s.turn.active !== p.team) return { team: false, leader: false };
  const t = s.teams[p.team];
  return { team: t.rerolls > 0, leader: t.leaderReroll && leaderOnPitch(s, p.team) };
}
function proAvailable(ctx, p) {
  const a = ctx.s.turn.activation;
  return !!a && a.playerId === p.id && !a.proUsed && canUse(p, "pro");
}
function lonerValue(p) {
  return hasSkill(p, "loner") ? skillValue(p, "loner") ?? 4 : void 0;
}
function rollTest(ctx, spec) {
  const outcomeOf = spec.outcome ?? ((n, m) => d6Success(n, spec.target, m) ? "S" : "F");
  const isSuccess = spec.isSuccess ?? ((o) => o === "S");
  const mod = modSum(spec.mods);
  const late = spec.lateMalus;
  const bonus = spec.bonus;
  const sb = starTestBonus(ctx.s, spec.player, spec.kind);
  const s2 = starPassOn2(ctx.s, spec.player, spec.kind, spec.subkind);
  const starRr = starTestReroll(ctx.s, spec.player, spec.kind);
  if (ctx.mode === "plan") recordStep(ctx, spec, outcomeOf, isSuccess, mod);
  if (spec.autoFail) {
    ctx.emit("roll", `${spec.label}: automatically fails (${spec.autoFail}).`, spec.rule, { kind: spec.kind, playerId: spec.player.id, auto: true });
    return { outcome: "F", success: false, natural: 1, modTotal: mod, rerolled: false, lateOutcome: "F" };
  }
  const cacheable = !spec.outcome || !!spec.outcomeKey;
  const doRoll = () => ctx.roll({
    dice: [6],
    interpret: ([n]) => {
      const v2 = { o: outcomeOf(n, mod) };
      if (bonus) v2.b = outcomeOf(n, mod + bonus.value);
      if (late !== void 0) {
        v2.l = outcomeOf(n, mod + late);
        if (bonus) v2.bl = outcomeOf(n, mod + bonus.value + late);
      }
      if (sb) v2.g = outcomeOf(n, mod + sb.value);
      if (s2) v2.j = n >= 2 ? "S" : v2.o;
      return v2;
    },
    by: spec.player.team,
    // Difficulty house rule: a success is good for the tested player's team (with any help that turns it into one).
    judge: (v2) => isSuccess(v2.o) || !!sb && isSuccess(v2.g) || !!s2 && isSuccess(v2.j) ? 1 : -1,
    // Plan traces follow the outcome that is good for the ACTIVE team.
    prefer: spec.player.team === ctx.s.turn.active ? (v2) => isSuccess(v2.o) && (late === void 0 || isSuccess(v2.l)) : (v2) => !isSuccess(v2.o),
    cacheKey: cacheable ? `t|${spec.outcomeKey ?? "std"}|${spec.target}|${mod}|${bonus?.value ?? 0}|${late ?? "x"}|${sb?.value ?? 0}|${s2 ? 1 : 0}` : void 0
  });
  let bonusUsed = false;
  const describe2 = (n, o, prefix) => {
    const tot = mod + (bonusUsed && bonus ? bonus.value : 0);
    const modTxt = spec.mods.length || bonusUsed ? `, ${fmtMods(spec.mods)}${bonusUsed && bonus ? `, +${bonus.value} ${bonus.name}` : ""}` : "";
    const res = isSuccess(o) ? "success" : o === "F" ? "failed" : o;
    ctx.emit("roll", `${prefix}${spec.label}: rolled ${n}${tot ? ` (counts as ${shownD6(ctx.s, n + tot)})` : ""}; needs ${spec.target}+${modTxt} \u2014 ${res}.`, spec.rule, {
      kind: spec.kind,
      playerId: spec.player.id,
      natural: n,
      target: spec.target,
      modifier: tot,
      outcome: o
    });
  };
  let r = doRoll();
  let natural = r.faces[0];
  let v = r.value;
  let outcome = v.o;
  describe2(natural, outcome, "");
  let rerolled = false;
  const offerBonus = () => {
    if (!bonus || bonusUsed || isSuccess(outcome) || !isSuccess(v.b)) return;
    const choice = ctx.ask({
      type: "breakTackle",
      team: spec.player.team,
      prompt: `${label(spec.player)} rolled ${natural} for ${spec.label}. Apply ${bonus.name} (+${bonus.value}, once per turn) to succeed?`,
      options: [
        { id: "use", label: `Use ${bonus.name} (+${bonus.value})` },
        { id: "no", label: `Keep ${bonus.name} for later` }
      ],
      rule: { page: 126, title: bonus.name }
    });
    if (choice === "use") {
      bonusUsed = true;
      bonus.markUsed();
      outcome = v.b;
      ctx.emit("roll", `${bonus.name} applied (+${bonus.value}): ${spec.label} succeeds.`, { page: 126, title: bonus.name });
    }
  };
  offerBonus();
  const offerStar = () => {
    if (isSuccess(outcome)) return;
    if (sb && v.g !== void 0 && isSuccess(v.g) && starReady(ctx.s, spec.player, sb.id)) {
      if (askStar(ctx, spec.player, `${spec.label}: rolled ${natural}. Apply +${sb.value} (${sb.what}) to succeed?`, `Use it: +${sb.value}`, true, "Keep it for later")) {
        spendStar(ctx, spec.player, `+${sb.value} to ${spec.label} \u2014 ${natural} counts as ${shownD6(ctx.s, natural + mod + sb.value)}.`);
        outcome = v.g;
      }
    } else if (s2 && v.j !== void 0 && isSuccess(v.j) && starReady(ctx.s, spec.player, "jordell")) {
      if (askStar(ctx, spec.player, `${spec.label}: rolled ${natural}. Pass it on a 2+ regardless of modifiers?`, "Use it: the test passes", true, "Keep it for later")) {
        spendStar(ctx, spec.player, `${spec.label} passes on a 2+ regardless of modifiers (rolled ${natural}).`);
        outcome = v.j;
      }
    }
  };
  offerStar();
  while (!isSuccess(outcome) && !rerolled) {
    const options = [];
    if (spec.skillReroll?.available && canUse(spec.player, spec.skillReroll.id)) {
      options.push({ id: "skill", label: `Re-roll with ${spec.skillReroll.name}` });
    }
    if (spec.proAllowed && proAvailable(ctx, spec.player)) {
      options.push({ id: "pro", label: "Use Pro (needs 3+ to re-roll)" });
    }
    if (veteranRerollFor(spec)) options.push({ id: "veteran", label: "Use the Veteran re-roll (once per game)" });
    if (starRr && starReady(ctx.s, spec.player, starRr.id)) options.push({ id: "star", label: `Re-roll with ${starRr.what}` });
    const tr = teamRerollsAvailable(ctx, spec.player);
    const lonerX = lonerValue(spec.player);
    if (spec.teamReroll && tr.team) {
      options.push({ id: "team", label: `Use a Team Re-roll (${ctx.s.teams[spec.player.team].rerolls} left)${lonerX ? ` \u2014 Loner ${lonerX}+ check` : ""}` });
    }
    if (spec.teamReroll && tr.leader) {
      options.push({ id: "leader", label: `Use the Leader Re-roll${lonerX ? ` \u2014 Loner ${lonerX}+ check` : ""}` });
    }
    if (spec.teamReroll && mascotAvailable(ctx, spec.player.team)) {
      options.push({ id: "mascot", label: `Use the Team Mascot's Team Re-roll (D6 4+ first)${lonerX ? ` \u2014 Loner ${lonerX}+ check` : ""}` });
    }
    if (!options.length) break;
    options.push({ id: "none", label: `No re-roll (${spec.onFail})` });
    const choice = ctx.ask({
      type: "reroll",
      team: spec.player.team,
      prompt: `${label(spec.player)} \u2014 ${spec.label} failed (rolled ${natural}, needs ${spec.target}+${spec.mods.length ? ` with ${fmtMods(spec.mods)}` : ""}). Re-roll?`,
      options,
      rule: R.rerolls,
      context: { natural, target: spec.target, mods: spec.mods, kind: spec.kind }
    });
    if (choice === "none") break;
    if (choice === "mascot" && !mascotCheck(ctx, spec.player.team)) continue;
    rerolled = true;
    if (choice === "skill") {
      spec.skillReroll?.markUsed?.();
      ctx.emit("reroll", `${label(spec.player)} uses ${spec.skillReroll?.name} to re-roll.`, spec.rule);
    } else if (choice === "veteran") {
      spec.player.veteran = "used";
      ctx.emit("reroll", `${label(spec.player)} uses the Veteran's once-per-game re-roll.`, VETERAN_RULE, { playerId: spec.player.id });
    } else if (choice === "star") {
      spendStar(ctx, spec.player, `re-roll of ${spec.label}.`);
    } else if (choice === "pro") {
      const act = ctx.s.turn.activation;
      if (act) act.proUsed = true;
      const pro = ctx.roll({ dice: [6], interpret: ([n]) => n >= 3 ? "S" : "F", cacheKey: "pro3", by: spec.player.team, judge: (v2) => v2 === "S" ? 1 : -1 });
      ctx.emit("roll", `Pro: rolled ${pro.faces[0]}; needs 3+ \u2014 ${pro.value === "S" ? "the dice is re-rolled" : "no re-roll"}.`, { page: 133, title: "Pro" });
      if (pro.value !== "S") break;
    } else if (choice === "team" || choice === "leader" || choice === "mascot") {
      const t = ctx.s.teams[spec.player.team];
      if (choice === "team") useTeamReroll(ctx, spec.player.team);
      else if (choice === "mascot") {
        if (faq2026(ctx.s)) mascotCaptainFree(ctx, spec.player.team);
      } else {
        t.leaderReroll = false;
        ctx.emit("reroll", `Leader Re-roll used (${t.rerolls} Team Re-roll${t.rerolls === 1 ? "" : "s"} left).`, R.rerolls);
      }
      if (lonerX) {
        const lr = ctx.roll({ dice: [6], interpret: ([n]) => n >= lonerX ? "S" : "F", cacheKey: `loner${lonerX}`, by: spec.player.team, judge: (v2) => v2 === "S" ? 1 : -1 });
        ctx.emit("roll", `Loner (${lonerX}+): rolled ${lr.faces[0]} \u2014 ${lr.value === "S" ? "the re-roll can be used" : "the Team Re-roll is lost"}.`, { page: 131, title: "Loner" });
        if (lr.value !== "S") break;
      }
    }
    r = doRoll();
    natural = r.faces[0];
    v = r.value;
    outcome = bonusUsed ? v.b : v.o;
    describe2(natural, outcome, "Re-roll \u2014 ");
    offerBonus();
    offerStar();
  }
  const lateOutcome = late === void 0 ? void 0 : bonusUsed ? v.bl : v.l;
  return { outcome, success: isSuccess(outcome), natural, modTotal: mod + (bonusUsed && bonus ? bonus.value : 0), rerolled, lateOutcome };
}
function recordTestStep(ctx, spec) {
  if (ctx.mode !== "plan") return;
  const outcomeOf = spec.outcome ?? ((n, m) => d6Success(n, spec.target, m) ? "S" : "F");
  const isSuccess = spec.isSuccess ?? ((o) => o === "S");
  recordStep(ctx, spec, outcomeOf, isSuccess, modSum(spec.mods));
}
function recordStep(ctx, spec, outcomeOf, isSuccess, mod) {
  let pSingle = 0;
  let pAfterLate = 0;
  const sb = starTestBonus(ctx.s, spec.player, spec.kind);
  const s2 = starPassOn2(ctx.s, spec.player, spec.kind, spec.subkind);
  const okFace = (f) => isSuccess(outcomeOf(f, mod)) || !!sb && isSuccess(outcomeOf(f, mod + sb.value)) || s2 && f >= 2;
  const w = testWeights(ctx.s, spec.player.team, okFace);
  const pf = (f) => w ? w[f - 1] : 1 / 6;
  for (let f = 1; f <= 6; f++) {
    if (okFace(f)) pSingle += pf(f);
    if (spec.lateMalus !== void 0 && isSuccess(outcomeOf(f, mod + spec.lateMalus))) pAfterLate += pf(f);
  }
  if (spec.autoFail) pSingle = 0;
  const rerolls = [];
  let q = 0;
  if (spec.skillReroll?.available && canUse(spec.player, spec.skillReroll.id)) {
    rerolls.push(spec.skillReroll.name);
    q = 1;
  }
  const tr = teamRerollsAvailable(ctx, spec.player);
  const lonerX = lonerValue(spec.player);
  if (spec.teamReroll && (tr.team || tr.leader)) {
    rerolls.push(lonerX ? `Team Re-roll (Loner ${lonerX}+)` : "Team Re-roll");
    q = Math.max(q, lonerX ? d6AtLeastW(lonerX, testWeights(ctx.s, spec.player.team, (f) => f >= lonerX)) : 1);
  }
  if (spec.proAllowed && proAvailable(ctx, spec.player)) {
    rerolls.push("Pro (3+)");
    q = Math.max(q, d6AtLeastW(3, testWeights(ctx.s, spec.player.team, (f) => f >= 3)));
  }
  if (veteranRerollFor(spec)) {
    rerolls.push("Veteran (once per game)");
    q = 1;
  }
  const starRr = starTestReroll(ctx.s, spec.player, spec.kind);
  if (starRr && starReady(ctx.s, spec.player, starRr.id)) {
    rerolls.push(starRr.what);
    q = 1;
  }
  const extra = { ...spec.extra ?? {} };
  if (spec.lateMalus !== void 0) extra.pIfDivingTackle = pAfterLate;
  if (spec.bonus) extra.bonus = `${spec.bonus.name} +${spec.bonus.value} available`;
  if (sb) extra.star = `${sb.what}: +${sb.value} after the roll if it turns a failure into a success (included)`;
  else if (s2) extra.star = "Jordell Freshbreeze's Swift as the Breeze: passes on a 2+ (included)";
  ctx.step({
    kind: spec.kind,
    label: spec.label,
    playerId: spec.player.id,
    at: spec.at ?? (spec.player.pos ? { ...spec.player.pos } : void 0),
    dice: "D6",
    target: spec.target,
    mods: spec.mods,
    pSingle,
    rerolls,
    pWithReroll: rerolls.length && !spec.autoFail ? pSingle + (1 - pSingle) * q * pSingle : void 0,
    onFail: spec.onFail,
    rule: spec.rule,
    extra,
    by: spec.player.team === ctx.s.turn.active ? "active" : "opponent"
  });
}
function plainD6(ctx, text, rule2, success, cacheKey, hopeFor = "S", by) {
  const r = ctx.roll({ dice: [6], interpret: ([n2]) => success(n2) ? "S" : "F", cacheKey, prefer: (v) => v === hopeFor, by });
  const n = r.faces[0];
  ctx.emit("roll", `${text}: rolled ${n} \u2014 ${r.value === "S" ? "success" : "failed"}.`, rule2, { natural: n });
  return { n, ok: r.value === "S" };
}

// src/engine/advancement.ts
var CAT_NAME = { A: "Agility", D: "Devious", G: "General", M: "Mutation", P: "Passing", S: "Strength" };
var ALL_CATS = ["A", "D", "G", "M", "P", "S"];
var SKILL_TABLE = {
  A: ["catch", "divingCatch", "divingTackle", "dodge", "defensive", "hitAndRun", "jumpUp", "leap", "safePairOfHands", "sidestep", "sprint", "sureFeet"],
  D: ["dirtyPlayer", "eyeGouge", "fumblerooski", "lethalFlight", "loneFouler", "pileDriver", "putTheBootIn", "quickFoul", "saboteur", "shadowing", "sneakyGit", "violentInnovator"],
  G: ["block", "dauntless", "fend", "frenzy", "kick", "pro", "steadyFooting", "stripBall", "sureHands", "tackle", "taunt", "wrestle"],
  M: ["bigHand", "claws", "disturbingPresence", "extraArms", "foulAppearance", "horns", "ironHardSkin", "monstrousMouth", "prehensileTail", "tentacles", "twoHeads", "veryLongLegs"],
  P: ["accurate", "cannoneer", "cloudBurster", "dumpOff", "giveAndGo", "hailMaryPass", "leader", "nervesOfSteel", "onTheBall", "pass", "punt", "safePass"],
  S: ["armBar", "brawler", "breakTackle", "bullseye", "grab", "guard", "juggernaut", "mightyBlow", "multipleBlock", "standFirm", "strongArm", "thickSkull"]
};
var ELITE_SKILLS = ["block", "dodge", "guard", "mightyBlow"];
var ADVANCEMENT_COSTS = {
  randomPrimary: [3, 4, 6, 8, 10, 15],
  primary: [6, 8, 12, 16, 20, 30],
  secondary: [10, 12, 16, 20, 24, 34],
  characteristic: [14, 16, 20, 24, 28, 38]
};
var ADVANCEMENT_TITLES = ["Experienced", "Veteran", "Emerging Star", "Star", "Superstar", "Legend"];
var MAX_ADVANCEMENTS = 6;
var ADV_KIND_LABEL = {
  randomPrimary: "Randomly select a Primary Skill",
  primary: "Choose a Primary Skill",
  secondary: "Choose a Secondary Skill",
  characteristic: "Characteristic Improvement"
};
var VALUE_INCREASE = { primary: 2e4, secondary: 4e4, elite: 1e4, av: 1e4, ma: 2e4, pa: 2e4, ag: 3e4, st: 6e4 };
var CHAR_MAX = { ma: 9, st: 8, ag: 1, pa: 1, av: 11 };
var CHAR_LABEL = { ma: "MA", st: "ST", ag: "AG", pa: "PA", av: "AV" };
var CHAR_TABLE = {
  1: ["av"],
  2: ["av", "pa"],
  3: ["av", "ma", "pa"],
  4: ["av", "ma", "pa"],
  5: ["ma", "pa"],
  6: ["ag", "ma"],
  7: ["ag", "st"],
  8: ["ma", "st", "ag", "pa", "av"]
};
function skillFromTable(cat, first, second) {
  const half = first <= 3 ? 0 : 6;
  return SKILL_TABLE[cat][half + second - 1];
}
function skillCategory(id) {
  for (const c of ALL_CATS) if (SKILL_TABLE[c].includes(id)) return c;
  return null;
}
var has = (p, id) => p.skills.some((s) => s.id === id);
var SPECIAL_ACTION_TRAITS = ["ballAndChain", "bombardier", "breatheFire", "chainsaw", "hypnoticGaze", "kickTeamMate", "projectileVomit", "stab"];
var BALL_AND_CHAIN_EXCLUDES = ["divingTackle", "eyeGouge", "frenzy", "grab", "hitAndRun", "leap", "multipleBlock", "onTheBall", "shadowing", "steadyFooting"];
var NO_BALL_UNUSABLE = ["catch", "divingCatch", "safePairOfHands", "sureHands", "bigHand", "extraArms", "accurate", "cannoneer", "cloudBurster", "dumpOff", "giveAndGo", "hailMaryPass", "nervesOfSteel", "pass", "punt", "safePass", "fumblerooski"];
var MY_BALL_UNUSABLE = ["accurate", "cannoneer", "cloudBurster", "dumpOff", "giveAndGo", "hailMaryPass", "pass", "punt", "safePass", "fumblerooski"];
function skillRestriction(p, id) {
  const def = SKILL_BY_ID[id];
  if (!def) return "Unknown skill.";
  if (has(p, id)) return "Already has this skill.";
  const name = (x) => SKILL_BY_ID[x]?.name ?? x;
  if ((id === "bullseye" || id === "strongArm") && !has(p, "throwTeamMate")) return `${def.name} needs the Throw Team-mate Trait (p.${def.page}).`;
  if (id === "lethalFlight" && !has(p, "rightStuff")) return "Lethal Flight needs the Right Stuff Trait (p.130).";
  if (id === "saboteur" && !has(p, "secretWeapon")) return "Saboteur needs the Secret Weapon Trait (p.135).";
  if (id === "violentInnovator" && !SPECIAL_ACTION_TRAITS.some((t) => has(p, t))) return "Violent Innovator needs a Trait that allows a Special Action (p.138).";
  const pairs = [
    ["frenzy", ["grab", "hitAndRun", "multipleBlock"]],
    ["leap", ["pogo"]]
  ];
  for (const [a, bs] of pairs) {
    if (id === a) {
      const clash = bs.find((b) => has(p, b));
      if (clash) return `${def.name} cannot be taken by a player with ${name(clash)} (p.${def.page}).`;
    }
    if (bs.includes(id) && has(p, a)) return `${def.name} cannot be taken by a player with ${name(a)} (p.${SKILL_BY_ID[a].page}).`;
  }
  if (has(p, "ballAndChain") && BALL_AND_CHAIN_EXCLUDES.includes(id)) return `A Ball & Chain player cannot have ${def.name} (p.124).`;
  if (has(p, "noBall") && NO_BALL_UNUSABLE.includes(id)) return `No Ball (p.132): this player could never use ${def.name}.`;
  if (has(p, "myBall") && MY_BALL_UNUSABLE.includes(id)) return `My Ball (p.132): this player could never use ${def.name}.`;
  return null;
}
function eligibleSkills(p, cat) {
  return SKILL_TABLE[cat].filter((id) => !skillRestriction(p, id));
}
function advancementCount(p) {
  return p.advancements?.length ?? 0;
}
function advancementCost(p, kind) {
  const n = advancementCount(p);
  if (n >= MAX_ADVANCEMENTS) return null;
  return ADVANCEMENT_COSTS[kind][n];
}
function timesImproved(p, c) {
  return (p.advancements ?? []).filter((a) => a.char === c).length;
}
function charRestriction(p, c) {
  if (timesImproved(p, c) >= 2) return `${CHAR_LABEL[c]} has already been improved twice (p.37).`;
  const v = p[c];
  if (v === null) return 'PA "-" cannot be improved.';
  if (c === "ag" || c === "pa") {
    if (v <= CHAR_MAX[c]) return `${CHAR_LABEL[c]} is already at its best (${CHAR_MAX[c]}+, p.37).`;
  } else if (v >= CHAR_MAX[c]) return `${CHAR_LABEL[c]} is already at its maximum (${CHAR_MAX[c]}${c === "av" ? "+" : ""}, p.37).`;
  return null;
}
function charOptions(p, d8) {
  return (CHAR_TABLE[d8] ?? []).filter((c) => !charRestriction(p, c));
}
function advancementBlocked(p, kind) {
  const cost = advancementCost(p, kind);
  if (cost === null) return "A Legend (six advancements) cannot advance further (p.97).";
  if ((p.spp ?? 0) < cost) return `Needs ${cost} SPP (has ${p.spp ?? 0}).`;
  const cats = kind === "secondary" ? p.secondary ?? [] : kind === "characteristic" ? ALL_CATS : p.primary ?? [];
  if (kind !== "characteristic") {
    if (!cats.length) return kind === "secondary" ? "This player has no Secondary skill categories." : "This player has no Primary skill categories.";
    if (!cats.some((c) => eligibleSkills(p, c).length)) return "No skill in these categories can be taken.";
  }
  return null;
}
function mustAdvance(p) {
  const c = advancementCost(p, "characteristic");
  return c !== null && (p.spp ?? 0) >= c;
}
function rollRandomSkill(p, cat, d6) {
  if (!eligibleSkills(p, cat).length) return { rolls: [], choices: [] };
  const rolls = [];
  const pick = () => {
    for (let guard = 0; guard < 500; guard++) {
      const a = d6();
      const b = d6();
      rolls.push([a, b]);
      const id = skillFromTable(cat, a, b);
      if (!skillRestriction(p, id)) return id;
    }
    throw new Error("Random skill: no eligible result");
  };
  const first = pick();
  const second = pick();
  return { rolls, choices: first === second ? [first] : [first, second] };
}
function valueForSkill(kind, id) {
  return VALUE_INCREASE[kind] + (ELITE_SKILLS.includes(id) ? VALUE_INCREASE.elite : 0);
}
function applyAdvancement(p, ch) {
  const why = advancementBlocked(p, ch.kind);
  if (why) throw new Error(why);
  const cost = advancementCost(p, ch.kind);
  const out = { ...p, skills: p.skills.map((s) => ({ ...s })), advancements: [...p.advancements ?? []] };
  const rec = { kind: ch.kind, spp: cost, value: 0 };
  const addSkill2 = (id, cat, from) => {
    const cats = from === "primary" ? p.primary ?? [] : p.secondary ?? [];
    if (!cats.includes(cat)) throw new Error(`${CAT_NAME[cat]} is not one of this player's ${from === "primary" ? "Primary" : "Secondary"} categories.`);
    if (!SKILL_TABLE[cat].includes(id)) throw new Error(`${SKILL_BY_ID[id]?.name ?? id} is not ${/^[AEIOU]/.test(CAT_NAME[cat]) ? "an" : "a"} ${CAT_NAME[cat]} skill (p.121).`);
    const r = skillRestriction(p, id);
    if (r) throw new Error(r);
    out.skills.push({ id });
    rec.skill = id;
    rec.cat = cat;
    rec.value = valueForSkill(from, id);
  };
  if (ch.kind === "randomPrimary") {
    const allowed = ch.rolls.map(([a, b]) => skillFromTable(ch.cat, a, b)).filter((id) => !skillRestriction(p, id)).slice(0, 2);
    if (!allowed.includes(ch.skill)) throw new Error("The skill must be one of the two randomly rolled skills (p.97).");
    addSkill2(ch.skill, ch.cat, "primary");
    rec.rolls = ch.rolls.map((r) => r.slice());
  } else if (ch.kind === "primary" || ch.kind === "secondary") {
    addSkill2(ch.skill, ch.cat, ch.kind);
  } else {
    const cc = ch;
    rec.rolls = [[cc.d8]];
    if ("char" in cc) {
      const ch2 = cc;
      if (!charOptions(p, ch2.d8).includes(ch2.char)) throw new Error(`A D8 roll of ${ch2.d8} does not allow improving ${CHAR_LABEL[ch2.char]} (or it cannot be improved further).`);
      const c = ch2.char;
      if (c === "ag" || c === "pa") out[c] = p[c] - 1;
      else out[c] = p[c] + 1;
      rec.char = c;
      rec.value = VALUE_INCREASE[c];
    } else addSkill2(cc.skill, cc.cat, cc.as);
  }
  out.spp = (p.spp ?? 0) - cost;
  out.advancements = [...p.advancements ?? [], rec];
  return out;
}
function advancementValue(p) {
  return (p.advancements ?? []).reduce((a, r) => a + r.value, 0);
}
var SPP_AWARD = { completion: 1, ttm: 1, landing: 1, interception: 2, casualty: 2, touchdown: 3, mvp: 4 };
var BRAWLIN_BRUTES_PAGE = 154;
function sppAward(kind, specialRules) {
  if (specialRules?.includes("Brawlin' Brutes")) {
    if (kind === "casualty") return 3;
    if (kind === "touchdown") return 2;
  }
  return SPP_AWARD[kind];
}
var SPP_LABEL = { completion: "Completion", ttm: "Superb Throw Team-mate", landing: "Landed safely", interception: "Interception", casualty: "Casualty", touchdown: "Touchdown", mvp: "Most Valuable Player" };

// src/engine/rosters.ts
var LEAGUES_PAGE = 152;
var SPECIAL_RULES_PAGES = "154-155";
var sk2 = (...ids) => ids.map((x) => Array.isArray(x) ? typeof x[1] === "number" ? { id: x[0], value: x[1] } : { id: x[0], keyword: x[1] } : { id: x });
var ROSTERS = [
  {
    id: "bretonnian",
    name: "Bretonnian",
    page: 162,
    rerollCost: 6e4,
    apothecary: true,
    leagues: ["Old World Classic"],
    specialRules: [],
    color: "#2451b3",
    accent: "#f5d77a",
    positions: [
      { id: "squire", name: "Bretonnian Squire", qty: "0-16", keywords: ["Human", "Lineman"], ma: 6, st: 3, ag: 3, pa: 4, av: 8, skills: sk2("wrestle"), cost: 5e4, primary: ["G"], secondary: ["A", "S"] },
      { id: "knightCatcher", name: "Bretonnian Knight Catcher", qty: "0-2", keywords: ["Catcher", "Human"], ma: 7, st: 3, ag: 3, pa: 4, av: 9, skills: sk2("catch", "dauntless", "nervesOfSteel"), cost: 85e3, primary: ["A", "G"], secondary: ["S"] },
      { id: "knightThrower", name: "Bretonnian Knight Thrower", qty: "0-2", keywords: ["Human", "Thrower"], ma: 6, st: 3, ag: 3, pa: 3, av: 9, skills: sk2("dauntless", "nervesOfSteel", "pass"), cost: 8e4, primary: ["G", "P"], secondary: ["A", "S"] },
      { id: "grailKnight", name: "Grail Knight", qty: "0-2", keywords: ["Blitzer", "Human"], ma: 7, st: 3, ag: 3, pa: 4, av: 10, skills: sk2("block", "dauntless", "steadyFooting"), cost: 95e3, primary: ["G", "S"], secondary: ["A"] }
    ]
  },
  {
    id: "tombKings",
    name: "Tomb Kings",
    page: 187,
    rerollCost: 6e4,
    apothecary: false,
    leagues: ["Sylvanian Spotlight"],
    specialRules: ["Masters of Undeath"],
    color: "#d9a82e",
    accent: "#1b2a3a",
    positions: [
      { id: "skeleton", name: "Skeleton Lineman", qty: "0-16", keywords: ["Human", "Lineman", "Skeleton", "Undead"], ma: 5, st: 3, ag: 4, pa: 6, av: 8, skills: sk2("regeneration", "thickSkull"), cost: 4e4, primary: ["G"], secondary: ["A", "D", "S"] },
      { id: "tkThrower", name: "Tomb Kings Thrower", qty: "0-2", keywords: ["Human", "Skeleton", "Thrower", "Undead"], ma: 6, st: 3, ag: 4, pa: 3, av: 9, skills: sk2("pass", "regeneration", "sureHands", "thickSkull"), cost: 65e3, primary: ["G", "P"], secondary: ["A", "D", "S"] },
      { id: "tkBlitzer", name: "Tomb Kings Blitzer", qty: "0-2", keywords: ["Blitzer", "Human", "Skeleton", "Undead"], ma: 6, st: 3, ag: 4, pa: 5, av: 9, skills: sk2("block", "regeneration", "thickSkull"), cost: 85e3, primary: ["G", "S"], secondary: ["A", "D"] },
      { id: "tombGuardian", name: "Tomb Guardian", qty: "0-4", keywords: ["Big Guy", "Blocker", "Human", "Undead"], ma: 4, st: 5, ag: 5, pa: 6, av: 10, skills: sk2("brawler", "decay", "regeneration"), cost: 115e3, primary: ["S"], secondary: ["A", "G"] }
    ]
  },
  {
    id: "human",
    name: "Human",
    page: 173,
    rerollCost: 5e4,
    apothecary: true,
    leagues: ["Old World Classic"],
    specialRules: ["Team Captain"],
    color: "#f3efe4",
    accent: "#1d3f8f",
    positions: [
      { id: "lineman", name: "Human Lineman", qty: "0-16", keywords: ["Human", "Lineman"], ma: 6, st: 3, ag: 3, pa: 4, av: 9, skills: [], cost: 5e4, primary: ["G"], secondary: ["A", "D", "S"] },
      { id: "halfling", name: "Halfling Hopeful", qty: "0-3", keywords: ["Halfling", "Lineman"], ma: 5, st: 2, ag: 3, pa: 4, av: 7, skills: sk2("dodge", "rightStuff", "stunty"), cost: 3e4, primary: ["A"], secondary: ["D", "G", "S"] },
      { id: "catcher", name: "Human Catcher", qty: "0-2", keywords: ["Catcher", "Human"], ma: 8, st: 3, ag: 3, pa: 4, av: 8, skills: sk2("catch", "dodge"), cost: 75e3, primary: ["A", "G"], secondary: ["D", "P", "S"] },
      { id: "thrower", name: "Human Thrower", qty: "0-2", keywords: ["Human", "Thrower"], ma: 6, st: 3, ag: 3, pa: 3, av: 9, skills: sk2("pass", "sureHands"), cost: 75e3, primary: ["G", "P"], secondary: ["A", "D", "S"] },
      { id: "blitzer", name: "Human Blitzer", qty: "0-2", keywords: ["Blitzer", "Human"], ma: 7, st: 3, ag: 3, pa: 4, av: 9, skills: sk2("block", "tackle"), cost: 85e3, primary: ["G", "S"], secondary: ["A", "D"] },
      { id: "ogre", name: "Ogre", qty: "0-1", keywords: ["Big Guy", "Ogre"], ma: 5, st: 5, ag: 4, pa: 5, av: 10, skills: sk2("boneHead", ["loner", 3], "mightyBlow", "thickSkull", "throwTeamMate"), cost: 14e4, primary: ["S"], secondary: ["A", "G"] }
    ]
  },
  {
    id: "orc",
    name: "Orc",
    page: 182,
    rerollCost: 6e4,
    apothecary: true,
    leagues: ["Badlands Brawl"],
    specialRules: ["Brawlin' Brutes", "Team Captain"],
    color: "#b3261e",
    accent: "#fbe9d0",
    positions: [
      { id: "lineman", name: "Orc Lineman", qty: "0-16", keywords: ["Lineman", "Orc"], ma: 5, st: 3, ag: 3, pa: 4, av: 10, skills: [], cost: 5e4, primary: ["G", "S"], secondary: ["A", "D"] },
      { id: "goblin", name: "Goblin Lineman", qty: "0-4", keywords: ["Goblin", "Lineman"], ma: 6, st: 2, ag: 3, pa: 4, av: 8, skills: sk2("dodge", "rightStuff", "stunty"), cost: 4e4, primary: ["A", "D"], secondary: ["G", "P", "S"] },
      { id: "thrower", name: "Orc Thrower", qty: "0-2", keywords: ["Orc", "Thrower"], ma: 6, st: 3, ag: 3, pa: 3, av: 9, skills: sk2("pass", "sureHands"), cost: 75e3, primary: ["G", "P"], secondary: ["A", "D", "S"] },
      { id: "blitzer", name: "Orc Blitzer", qty: "0-2", keywords: ["Blitzer", "Orc"], ma: 6, st: 3, ag: 3, pa: 4, av: 10, skills: sk2("block", "breakTackle"), cost: 85e3, primary: ["G", "S"], secondary: ["A", "D"] },
      { id: "bigUn", name: "Big Un Blocker", qty: "0-2", keywords: ["Blocker", "Orc"], ma: 5, st: 4, ag: 4, pa: 6, av: 10, skills: sk2("mightyBlow", "taunt", "thickSkull", "unsteady"), cost: 95e3, primary: ["G", "S"], secondary: ["A", "D"] },
      { id: "troll", name: "Troll", qty: "0-1", keywords: ["Big Guy", "Troll"], ma: 4, st: 5, ag: 5, pa: 5, av: 10, skills: sk2("alwaysHungry", ["loner", 4], "mightyBlow", "projectileVomit", "reallyStupid", "regeneration", "throwTeamMate"), cost: 115e3, primary: ["S"], secondary: ["A", "G", "P"] }
    ]
  },
  {
    // Printed p.176. Leagues: Lustrian Superleague. Special rules: none.
    id: "lizardmen",
    name: "Lizardmen",
    page: 176,
    rerollCost: 7e4,
    apothecary: true,
    leagues: ["Lustrian Superleague"],
    specialRules: [],
    color: "#1f7a55",
    accent: "#f2cf5b",
    positions: [
      { id: "skink", name: "Skink Lineman", qty: "0-16", keywords: ["Lineman", "Lizardman"], ma: 8, st: 2, ag: 3, pa: 4, av: 8, skills: sk2("dodge", "stunty"), cost: 6e4, primary: ["A"], secondary: ["G", "D", "P", "S"] },
      { id: "chameleon", name: "Chameleon Skink", qty: "0-2", keywords: ["Lizardman", "Thrower"], ma: 7, st: 2, ag: 3, pa: 3, av: 8, skills: sk2("dodge", "onTheBall", "shadowing", "stunty"), cost: 7e4, primary: ["A", "P"], secondary: ["G", "D", "S"] },
      { id: "saurus", name: "Saurus Blocker", qty: "0-6", keywords: ["Blocker", "Lizardman"], ma: 6, st: 4, ag: 5, pa: 6, av: 10, skills: sk2("juggernaut", "unsteady"), cost: 9e4, primary: ["G", "S"], secondary: ["A"] },
      { id: "kroxigor", name: "Kroxigor", qty: "0-1", keywords: ["Big Guy", "Lizardman"], ma: 6, st: 5, ag: 5, pa: 6, av: 10, skills: sk2("boneHead", ["loner", 4], "mightyBlow", "prehensileTail", "thickSkull"), cost: 14e4, primary: ["S"], secondary: ["A", "G"] }
    ]
  },
  {
    // Printed p.178. Leagues: Chaos Clash or Old World Classic; with Chaos Clash the team gains Favoured of Khorne.
    id: "norse",
    name: "Norse",
    page: 178,
    rerollCost: 6e4,
    apothecary: true,
    leagues: ["Chaos Clash", "Old World Classic"],
    specialRules: [],
    leagueRules: { "Chaos Clash": ["Favoured of Khorne"] },
    color: "#27466b",
    accent: "#e8eef6",
    positions: [
      { id: "raider", name: "Norse Raider", qty: "0-16", keywords: ["Human", "Lineman"], ma: 6, st: 3, ag: 3, pa: 4, av: 8, skills: sk2("block", "drunkard", "thickSkull", "unsteady"), cost: 5e4, primary: ["G"], secondary: ["A", "P", "S"] },
      { id: "beerBoar", name: "Beer Boar", qty: "0-2", keywords: ["Animal", "Special"], ma: 5, st: 1, ag: 3, pa: null, av: 6, skills: sk2("dodge", "noBall", "pickMeUp", "stunty", "titchy"), cost: 2e4, primary: [], secondary: ["A"] },
      { id: "berserker", name: "Norse Berserker", qty: "0-2", keywords: ["Blitzer", "Human"], ma: 6, st: 3, ag: 3, pa: 5, av: 8, skills: sk2("block", "frenzy", "jumpUp"), cost: 9e4, primary: ["G", "S"], secondary: ["A", "P"] },
      { id: "valkyrie", name: "Valkyrie", qty: "0-2", keywords: ["Catcher", "Human", "Thrower"], ma: 7, st: 3, ag: 3, pa: 3, av: 8, skills: sk2("catch", "dauntless", "pass", "stripBall"), cost: 95e3, primary: ["A", "G", "P"], secondary: ["S"] },
      { id: "ulfwerener", name: "Ulfwerener", qty: "0-2", keywords: ["Blocker", "Human"], ma: 6, st: 4, ag: 4, pa: 6, av: 9, skills: sk2("frenzy", "unsteady"), cost: 105e3, primary: ["G", "S"], secondary: ["A"] },
      { id: "yhetee", name: "Yhetee", qty: "0-1", keywords: ["Big Guy", "Yhetee"], ma: 5, st: 5, ag: 4, pa: 6, av: 9, skills: sk2("claws", "disturbingPresence", "frenzy", ["loner", 4], "unchannelledFury"), cost: 14e4, primary: ["S"], secondary: ["A", "G"] }
    ]
  },
  {
    // V5: printed p.160 (PDF p.162), transcribed from the page image.
    id: "amazon",
    name: "Amazon",
    page: 160,
    rerollCost: 6e4,
    apothecary: true,
    leagues: ["Lustrian Superleague"],
    specialRules: [],
    color: "#1f7a4d",
    accent: "#f2d16b",
    positions: [
      { id: "eagleWarrior", name: "Eagle Warrior", qty: "0-16", keywords: ["Human", "Lineman"], ma: 6, st: 3, ag: 3, pa: 4, av: 8, skills: sk2("dodge"), cost: 5e4, primary: ["G"], secondary: ["A", "S"] },
      { id: "pythonWarrior", name: "Python Warrior", qty: "0-2", keywords: ["Human", "Thrower"], ma: 6, st: 3, ag: 3, pa: 3, av: 8, skills: sk2("dodge", "onTheBall", "pass", "safePass"), cost: 8e4, primary: ["G", "P"], secondary: ["A", "S"] },
      { id: "piranhaWarrior", name: "Piranha Warrior", qty: "0-2", keywords: ["Blitzer", "Human"], ma: 7, st: 3, ag: 3, pa: 4, av: 8, skills: sk2("dodge", "hitAndRun", "jumpUp"), cost: 9e4, primary: ["A", "G"], secondary: ["S"] },
      { id: "jaguarWarrior", name: "Jaguar Warrior", qty: "0-2", keywords: ["Blocker", "Human"], ma: 6, st: 4, ag: 3, pa: 4, av: 9, skills: sk2("defensive", "dodge"), cost: 11e4, primary: ["G", "S"], secondary: ["A"] }
    ]
  },
  {
    // V5: printed p.161 (PDF p.163), transcribed from the page image.
    id: "blackOrc",
    name: "Black Orc",
    page: 161,
    rerollCost: 6e4,
    apothecary: true,
    leagues: ["Badlands Brawl"],
    specialRules: ["Brawlin' Brutes", "Bribery and Corruption"],
    color: "#2b2b2b",
    accent: "#e8b64a",
    positions: [
      { id: "goblinBruiser", name: "Goblin Bruiser", qty: "0-16", keywords: ["Goblin", "Lineman"], ma: 6, st: 2, ag: 3, pa: 4, av: 8, skills: sk2("dodge", "rightStuff", "stunty", "thickSkull"), cost: 45e3, primary: ["A", "D"], secondary: ["G", "P", "S"] },
      { id: "blackOrc", name: "Black Orc", qty: "0-6", keywords: ["Blocker", "Orc"], ma: 4, st: 4, ag: 4, pa: 5, av: 10, skills: sk2("brawler", "grab"), cost: 9e4, primary: ["G", "S"], secondary: ["A", "D"] },
      { id: "trainedTroll", name: "Trained Troll", qty: "0-1", keywords: ["Big Guy", "Troll"], ma: 4, st: 5, ag: 5, pa: 5, av: 10, skills: sk2("alwaysHungry", "mightyBlow", "projectileVomit", "reallyStupid", "regeneration", "throwTeamMate"), cost: 115e3, primary: ["S"], secondary: ["A", "G", "P"] }
    ]
  },
  {
    // V5: printed p.167 (PDF p.169), transcribed from the page image.
    id: "dwarf",
    name: "Dwarf",
    page: 167,
    rerollCost: 6e4,
    apothecary: true,
    leagues: ["Worlds Edge Superleague"],
    specialRules: ["Brawlin' Brutes", "Bribery and Corruption"],
    color: "#2f5d8a",
    accent: "#f0c75e",
    positions: [
      { id: "lineman", name: "Dwarf Lineman", qty: "0-16", keywords: ["Dwarf", "Lineman"], ma: 4, st: 3, ag: 4, pa: 5, av: 10, skills: sk2("block", "defensive", "thickSkull"), cost: 7e4, primary: ["D", "G"], secondary: ["S"] },
      { id: "runner", name: "Dwarf Runner", qty: "0-2", keywords: ["Dwarf", "Runner"], ma: 6, st: 3, ag: 3, pa: 4, av: 9, skills: sk2("sprint", "sureHands", "thickSkull"), cost: 8e4, primary: ["G", "P"], secondary: ["A", "S"] },
      { id: "blitzer", name: "Dwarf Blitzer", qty: "0-2", keywords: ["Blitzer", "Dwarf"], ma: 5, st: 3, ag: 4, pa: 4, av: 10, skills: sk2("block", "divingTackle", "tackle", "thickSkull"), cost: 1e5, primary: ["G", "S"], secondary: ["P"] },
      { id: "trollSlayer", name: "Troll Slayer", qty: "0-2", keywords: ["Dwarf", "Special"], ma: 5, st: 3, ag: 4, pa: 5, av: 9, skills: sk2("block", "dauntless", "frenzy", ["hatred", "Troll"], "thickSkull"), cost: 95e3, primary: ["G", "S"], secondary: ["D"] },
      { id: "deathroller", name: "Deathroller", qty: "0-1", keywords: ["Big Guy", "Dwarf", "Special"], ma: 5, st: 7, ag: 5, pa: null, av: 11, skills: sk2("breakTackle", "dirtyPlayer", "juggernaut", ["loner", 4], "mightyBlow", "noBall", "secretWeapon", "standFirm"), cost: 17e4, primary: ["D", "S"], secondary: ["G"] }
    ]
  },
  {
    // V5: printed p.163 (PDF p.165), transcribed from the page image.
    id: "chaosChosen",
    name: "Chaos Chosen",
    page: 163,
    rerollCost: 5e4,
    apothecary: true,
    leagues: ["Chaos Clash"],
    specialRules: [],
    favouredOf: ["Hashut", "Khorne", "Nurgle", "Slaanesh", "Tzeentch", "Undivided"],
    groups: [
      { id: "bigGuy", max: 1, positions: ["troll", "ogre", "minotaur"], text: "A Chaos Chosen team may have a single Big Guy, chosen from the following" }
    ],
    color: "#5b1a1a",
    accent: "#d9c27a",
    positions: [
      { id: "beastman", name: "Beastmen Lineman", qty: "0-16", keywords: ["Beastman", "Lineman"], ma: 6, st: 3, ag: 3, pa: 3, av: 9, skills: sk2("horns", "thickSkull"), cost: 55e3, primary: ["G", "M"], secondary: ["A", "D", "P", "S"] },
      { id: "chosen", name: "Chaos Chosen", qty: "0-4", keywords: ["Blocker", "Human"], ma: 5, st: 4, ag: 3, pa: 5, av: 10, skills: sk2("armBar"), cost: 1e5, primary: ["G", "M", "S"], secondary: ["A", "D"] },
      { id: "troll", name: "Troll", qty: "0-1", keywords: ["Big Guy", "Troll"], ma: 4, st: 5, ag: 5, pa: 5, av: 10, skills: sk2("alwaysHungry", ["loner", 4], "mightyBlow", "projectileVomit", "reallyStupid", "regeneration", "throwTeamMate"), cost: 115e3, primary: ["M", "S"], secondary: ["A", "G", "P"] },
      { id: "ogre", name: "Ogre", qty: "0-1", keywords: ["Big Guy", "Ogre"], ma: 5, st: 5, ag: 4, pa: 5, av: 10, skills: sk2("boneHead", ["loner", 4], "mightyBlow", "thickSkull", "throwTeamMate"), cost: 14e4, primary: ["M", "S"], secondary: ["A", "G"] },
      { id: "minotaur", name: "Minotaur", qty: "0-1", keywords: ["Big Guy", "Minotaur"], ma: 5, st: 5, ag: 4, pa: 6, av: 9, skills: sk2("frenzy", "horns", ["loner", 4], "mightyBlow", "thickSkull", "unchannelledFury"), cost: 15e4, primary: ["M", "S"], secondary: ["A", "G"] }
    ]
  },
  {
    // V5: printed p.164 (PDF p.166), transcribed from the page image.
    id: "chaosDwarf",
    name: "Chaos Dwarf",
    page: 164,
    rerollCost: 7e4,
    apothecary: true,
    leagues: ["Badlands Brawl", "Chaos Clash"],
    specialRules: ["Favoured of Hashut"],
    color: "#7a2e12",
    accent: "#e3c16f",
    positions: [
      { id: "hobgoblin", name: "Hobgoblin Lineman", qty: "0-16", keywords: ["Goblin", "Lineman"], ma: 6, st: 3, ag: 3, pa: 4, av: 8, skills: [], cost: 4e4, primary: ["D"], secondary: ["A", "G", "S"] },
      { id: "sneakyStabba", name: "Sneaky Stabba", qty: "0-2", keywords: ["Goblin", "Special"], ma: 6, st: 3, ag: 3, pa: 5, av: 8, skills: sk2("shadowing", "stab"), cost: 6e4, primary: ["D", "G"], secondary: ["A", "S"] },
      { id: "blocker", name: "Chaos Dwarf Blocker", qty: "0-4", keywords: ["Blocker", "Dwarf"], ma: 4, st: 3, ag: 4, pa: 6, av: 10, skills: sk2("block", "ironHardSkin", "thickSkull"), cost: 7e4, primary: ["G", "S"], secondary: ["A", "D", "M"] },
      { id: "flamesmith", name: "Flamesmith", qty: "0-2", keywords: ["Dwarf", "Special"], ma: 5, st: 3, ag: 4, pa: 6, av: 10, skills: sk2("brawler", "breatheFire", "disturbingPresence", "thickSkull"), cost: 8e4, primary: ["G", "S"], secondary: ["A", "D", "M"] },
      { id: "bullCentaur", name: "Bull Centaur", qty: "0-2", keywords: ["Blitzer", "Dwarf"], ma: 6, st: 4, ag: 4, pa: 6, av: 10, skills: sk2("sprint", "sureFeet", "thickSkull", "unsteady"), cost: 13e4, primary: ["G", "S"], secondary: ["A", "D", "M"] },
      { id: "minotaur", name: "Minotaur", qty: "0-1", keywords: ["Big Guy", "Minotaur"], ma: 5, st: 5, ag: 4, pa: 6, av: 9, skills: sk2("frenzy", "horns", ["loner", 4], "mightyBlow", "thickSkull", "unchannelledFury"), cost: 15e4, primary: ["M", "S"], secondary: ["A", "G"] }
    ]
  },
  {
    // V5: printed p.165 (PDF p.167), transcribed from the page image.
    id: "chaosRenegade",
    name: "Chaos Renegade",
    page: 165,
    rerollCost: 7e4,
    apothecary: true,
    leagues: ["Chaos Clash"],
    specialRules: [],
    favouredOf: ["Khorne", "Nurgle", "Slaanesh", "Tzeentch", "Undivided"],
    groups: [
      { id: "bigGuy", max: 3, positions: ["troll", "ogre", "minotaur", "ratOgre"], text: "A Chaos Renegade team may have up to three Big Guy players, chosen from the following" }
    ],
    color: "#4a2d6b",
    accent: "#e6d3a3",
    positions: [
      { id: "human", name: "Renegade Human", qty: "0-16", keywords: ["Human", "Lineman"], ma: 6, st: 3, ag: 3, pa: 4, av: 9, skills: sk2(["animosity", "all"]), cost: 5e4, primary: ["D", "G", "M"], secondary: ["A", "S"] },
      { id: "goblin", name: "Renegade Goblin", qty: "0-1", keywords: ["Goblin", "Lineman"], ma: 6, st: 2, ag: 3, pa: 4, av: 8, skills: sk2(["animosity", "all"], "dodge", "rightStuff", "stunty"), cost: 4e4, primary: ["A", "D", "M"], secondary: ["G", "P"] },
      { id: "orc", name: "Renegade Orc", qty: "0-1", keywords: ["Lineman", "Orc"], ma: 5, st: 3, ag: 3, pa: 4, av: 10, skills: sk2(["animosity", "all"]), cost: 5e4, primary: ["D", "G", "M"], secondary: ["A", "S"] },
      { id: "skaven", name: "Renegade Skaven", qty: "0-1", keywords: ["Lineman", "Skaven"], ma: 7, st: 3, ag: 3, pa: 4, av: 8, skills: sk2(["animosity", "all"]), cost: 5e4, primary: ["D", "G", "M"], secondary: ["A", "S"] },
      { id: "darkElf", name: "Renegade Dark Elf", qty: "0-1", keywords: ["Elf", "Lineman"], ma: 6, st: 3, ag: 2, pa: 3, av: 9, skills: sk2(["animosity", "all"]), cost: 65e3, primary: ["A", "D", "G", "M"], secondary: ["S"] },
      { id: "thrower", name: "Renegade Human Thrower", qty: "0-1", keywords: ["Human", "Thrower"], ma: 6, st: 3, ag: 3, pa: 3, av: 9, skills: sk2(["animosity", "all"], "pass", "sureHands"), cost: 75e3, primary: ["D", "G", "M", "P"], secondary: ["A", "S"] },
      { id: "troll", name: "Troll", qty: "0-1", keywords: ["Big Guy", "Troll"], ma: 4, st: 5, ag: 5, pa: 5, av: 10, skills: sk2("alwaysHungry", ["loner", 4], "mightyBlow", "projectileVomit", "reallyStupid", "regeneration", "throwTeamMate"), cost: 115e3, primary: ["S"], secondary: ["A", "G", "M", "P"] },
      { id: "ogre", name: "Ogre", qty: "0-1", keywords: ["Big Guy", "Ogre"], ma: 5, st: 5, ag: 4, pa: 5, av: 10, skills: sk2("boneHead", ["loner", 3], "mightyBlow", "thickSkull", "throwTeamMate"), cost: 14e4, primary: ["S"], secondary: ["A", "G", "M"] },
      { id: "minotaur", name: "Minotaur", qty: "0-1", keywords: ["Big Guy", "Minotaur"], ma: 5, st: 5, ag: 4, pa: 6, av: 9, skills: sk2("frenzy", "horns", ["loner", 4], "mightyBlow", "thickSkull", "unchannelledFury"), cost: 15e4, primary: ["S"], secondary: ["A", "G", "M"] },
      { id: "ratOgre", name: "Rat Ogre", qty: "0-1", keywords: ["Big Guy", "Skaven"], ma: 6, st: 5, ag: 4, pa: 6, av: 9, skills: sk2("animalSavagery", "frenzy", ["loner", 4], "mightyBlow", "prehensileTail"), cost: 15e4, primary: ["S"], secondary: ["A", "G", "M"] }
    ]
  },
  {
    // V5: printed p.166 (PDF p.168), transcribed from the page image.
    id: "darkElf",
    name: "Dark Elf",
    page: 166,
    rerollCost: 5e4,
    apothecary: true,
    leagues: ["Elven Kingdoms League"],
    specialRules: [],
    color: "#3b1f5c",
    accent: "#d8c7f0",
    positions: [
      { id: "lineman", name: "Dark Elf Lineman", qty: "0-16", keywords: ["Elf", "Lineman"], ma: 6, st: 3, ag: 2, pa: 3, av: 9, skills: [], cost: 65e3, primary: ["A", "G"], secondary: ["D", "S"] },
      { id: "runner", name: "Dark Elf Runner", qty: "0-2", keywords: ["Elf", "Runner"], ma: 7, st: 3, ag: 2, pa: 3, av: 8, skills: sk2("dumpOff", "punt"), cost: 8e4, primary: ["A", "G", "P"], secondary: ["D", "S"] },
      { id: "assassin", name: "Dark Elf Assassin", qty: "0-2", keywords: ["Elf", "Special"], ma: 7, st: 3, ag: 2, pa: 4, av: 8, skills: sk2("hitAndRun", "shadowing", "stab"), cost: 9e4, primary: ["A", "D"], secondary: ["G", "S"] },
      { id: "blitzer", name: "Dark Elf Blitzer", qty: "0-2", keywords: ["Blitzer", "Elf"], ma: 7, st: 3, ag: 2, pa: 3, av: 9, skills: sk2("block"), cost: 105e3, primary: ["A", "G"], secondary: ["D", "P", "S"] },
      { id: "witchElf", name: "Witch Elf", qty: "0-2", keywords: ["Elf", "Special"], ma: 7, st: 3, ag: 2, pa: 4, av: 8, skills: sk2("dodge", "frenzy", "jumpUp"), cost: 11e4, primary: ["A", "G"], secondary: ["D", "S"] }
    ]
  },
  {
    // V5: printed p.168 (PDF p.170), transcribed from the page image.
    id: "elvenUnion",
    name: "Elven Union",
    page: 168,
    rerollCost: 5e4,
    apothecary: true,
    leagues: ["Elven Kingdoms League"],
    specialRules: [],
    color: "#e8e1c8",
    accent: "#2b4a9b",
    positions: [
      { id: "lineman", name: "Elf Lineman", qty: "0-16", keywords: ["Elf", "Lineman"], ma: 6, st: 3, ag: 2, pa: 3, av: 8, skills: sk2("fumblerooski"), cost: 65e3, primary: ["A", "G"], secondary: ["S"] },
      { id: "thrower", name: "Elf Thrower", qty: "0-2", keywords: ["Elf", "Thrower"], ma: 6, st: 3, ag: 2, pa: 2, av: 8, skills: sk2("hailMaryPass", "pass"), cost: 75e3, primary: ["A", "G", "P"], secondary: ["S"] },
      { id: "catcher", name: "Elf Catcher", qty: "0-2", keywords: ["Catcher", "Elf"], ma: 8, st: 3, ag: 2, pa: 4, av: 8, skills: sk2("catch", "divingCatch", "nervesOfSteel"), cost: 1e5, primary: ["A", "G"], secondary: ["S"] },
      { id: "blitzer", name: "Elf Blitzer", qty: "0-2", keywords: ["Blitzer", "Elf"], ma: 7, st: 3, ag: 2, pa: 3, av: 9, skills: sk2("block", "sidestep"), cost: 115e3, primary: ["A", "G"], secondary: ["P", "S"] }
    ]
  },
  {
    // V5: printed p.169 (PDF p.171), transcribed from the page image.
    id: "gnome",
    name: "Gnome",
    page: 169,
    rerollCost: 6e4,
    apothecary: true,
    leagues: ["Halfling Thimble Cup", "Woodland League"],
    specialRules: [],
    color: "#6b8f3a",
    accent: "#f4e6c4",
    positions: [
      { id: "lineman", name: "Gnome Lineman", qty: "0-16", keywords: ["Gnome", "Lineman"], ma: 5, st: 2, ag: 3, pa: 4, av: 7, skills: sk2("jumpUp", "rightStuff", "stunty", "wrestle"), cost: 4e4, primary: ["A"], secondary: ["D", "G", "S"] },
      { id: "woodlandFox", name: "Woodland Fox", qty: "0-2", keywords: ["Animal", "Runner"], ma: 7, st: 2, ag: 2, pa: null, av: 6, skills: sk2("dodge", "myBall", "sidestep", "stunty"), cost: 5e4, primary: [], secondary: ["A"] },
      { id: "illusionist", name: "Gnome Illusionist", qty: "0-2", keywords: ["Gnome", "Special"], ma: 5, st: 2, ag: 3, pa: 3, av: 7, skills: sk2("jumpUp", "stunty", "trickster", "wrestle"), cost: 5e4, primary: ["A", "P"], secondary: ["D", "G"] },
      { id: "beastmaster", name: "Gnome Beastmaster", qty: "0-2", keywords: ["Blocker", "Gnome"], ma: 5, st: 2, ag: 3, pa: 4, av: 8, skills: sk2("guard", "jumpUp", "stunty", "wrestle"), cost: 55e3, primary: ["A"], secondary: ["D", "G", "S"] },
      { id: "treeman", name: "Altern Forest Treeman", qty: "0-2", keywords: ["Big Guy", "Treeman"], ma: 2, st: 6, ag: 5, pa: 5, av: 11, skills: sk2("mightyBlow", "standFirm", "strongArm", "takeRoot", "thickSkull", "throwTeamMate", "timmmber"), cost: 12e4, primary: ["S"], secondary: ["A", "G", "P"] }
    ]
  },
  {
    // V5: printed p.170 (PDF p.172), transcribed from the page image.
    id: "goblin",
    name: "Goblin",
    page: 170,
    rerollCost: 6e4,
    apothecary: true,
    leagues: ["Badlands Brawl", "Underworld Challenge"],
    specialRules: ["Bribery and Corruption"],
    color: "#d9b32e",
    accent: "#2a2a2a",
    positions: [
      { id: "lineman", name: "Goblin Lineman", qty: "0-16", keywords: ["Goblin", "Lineman"], ma: 6, st: 2, ag: 3, pa: 4, av: 8, skills: sk2("dodge", "rightStuff", "stunty"), cost: 4e4, primary: ["A", "D"], secondary: ["G", "P", "S"] },
      { id: "loony", name: "Loony", qty: "0-1", keywords: ["Goblin", "Special"], ma: 6, st: 2, ag: 3, pa: null, av: 8, skills: sk2("chainsaw", "noBall", "secretWeapon", "stunty"), cost: 4e4, primary: ["D"], secondary: ["A", "G", "S"] },
      { id: "bomma", name: "Bomma", qty: "0-1", keywords: ["Goblin", "Special"], ma: 6, st: 2, ag: 3, pa: 4, av: 8, skills: sk2("bombardier", "dodge", "secretWeapon", "stunty"), cost: 45e3, primary: ["D", "P"], secondary: ["A", "G", "S"] },
      { id: "ooligan", name: "Ooligan", qty: "0-1", keywords: ["Goblin", "Special"], ma: 6, st: 2, ag: 3, pa: 5, av: 8, skills: sk2("dirtyPlayer", "disturbingPresence", "dodge", "rightStuff", "stunty", "taunt"), cost: 6e4, primary: ["A", "D"], secondary: ["G", "S"] },
      { id: "doomDiver", name: "Doom Diver", qty: "0-1", keywords: ["Goblin", "Special"], ma: 6, st: 2, ag: 3, pa: 6, av: 8, skills: sk2("dodge", "rightStuff", "stunty", "swoop"), cost: 65e3, primary: ["A"], secondary: ["D", "G", "S"] },
      { id: "fanatic", name: "Fanatic", qty: "0-1", keywords: ["Goblin", "Special"], ma: 3, st: 7, ag: 3, pa: null, av: 8, skills: sk2("ballAndChain", "noBall", "secretWeapon", "stunty"), cost: 7e4, primary: ["D", "S"], secondary: ["A", "G"] },
      { id: "pogoer", name: "Pogoer", qty: "0-1", keywords: ["Goblin", "Special"], ma: 7, st: 2, ag: 3, pa: 4, av: 8, skills: sk2("dodge", "pogo", "stunty"), cost: 75e3, primary: ["A"], secondary: ["D", "G", "S"] },
      { id: "trainedTroll", name: "Trained Troll", qty: "0-2", keywords: ["Big Guy", "Troll"], ma: 4, st: 5, ag: 5, pa: 5, av: 10, skills: sk2("alwaysHungry", "mightyBlow", "projectileVomit", "reallyStupid", "regeneration", "throwTeamMate"), cost: 115e3, primary: ["S"], secondary: ["A", "G", "P"] }
    ]
  },
  {
    // V5: printed p.171 (PDF p.173), transcribed from the page image.
    id: "halfling",
    name: "Halfling",
    page: 171,
    rerollCost: 6e4,
    apothecary: true,
    leagues: ["Halfling Thimble Cup", "Woodland League"],
    specialRules: [],
    color: "#2e7d32",
    accent: "#fff3d6",
    positions: [
      { id: "hopeful", name: "Halfling Hopeful", qty: "0-16", keywords: ["Halfling", "Lineman"], ma: 5, st: 2, ag: 3, pa: 4, av: 7, skills: sk2("dodge", "rightStuff", "stunty"), cost: 3e4, primary: ["A"], secondary: ["D", "G", "S"] },
      { id: "hefty", name: "Halfling Hefty", qty: "0-2", keywords: ["Blocker", "Halfling"], ma: 5, st: 2, ag: 3, pa: 3, av: 8, skills: sk2("dodge", "fend", "stunty"), cost: 5e4, primary: ["A", "P"], secondary: ["D", "G", "S"] },
      { id: "catcher", name: "Halfling Catcher", qty: "0-2", keywords: ["Catcher", "Halfling"], ma: 5, st: 2, ag: 3, pa: 4, av: 7, skills: sk2("catch", "dodge", "rightStuff", "sprint", "stunty"), cost: 55e3, primary: ["A"], secondary: ["D", "G", "S"] },
      { id: "treeman", name: "Altern Forest Treeman", qty: "0-2", keywords: ["Big Guy", "Treeman"], ma: 2, st: 6, ag: 5, pa: 5, av: 11, skills: sk2("mightyBlow", "standFirm", "strongArm", "takeRoot", "thickSkull", "throwTeamMate", "timmmber"), cost: 12e4, primary: ["S"], secondary: ["A", "G", "P"] }
    ]
  },
  {
    // 2026 table: Spike! Journal 21, printed p.172 (the page replaces the earlier rulebook p.172 table). Adjudicated per field for the two
    // disputed values (docs/HIGH_ELF_ADJUDICATION.md): Lineman Secondary = S (printed page + independent roster database; the Chinese quick
    // reference alone lists P,S) and Dragon Prince keywords = Elf, Blitzer, Runner (official designer article + database + quick reference; the
    // printed page omits Blitzer). Each is one data value: change it there if an official erratum says otherwise.
    id: "highElf",
    name: "High Elf",
    page: 172,
    rerollCost: 5e4,
    apothecary: true,
    leagues: ["Elven Kingdoms League"],
    specialRules: [],
    color: "#f4f1ea",
    accent: "#9b1c1c",
    positions: [
      { id: "lineman", name: "High Elf Lineman", qty: "0-16", keywords: ["Elf", "Lineman"], ma: 6, st: 3, ag: 2, pa: 3, av: 9, skills: [], cost: 65e3, primary: ["A", "G"], secondary: ["S"] },
      { id: "phoenixWarrior", name: "Phoenix Warrior", qty: "0-2", keywords: ["Elf", "Thrower"], ma: 6, st: 3, ag: 2, pa: 2, av: 9, skills: sk2("cloudBurster", "pass", "safePass"), cost: 9e4, primary: ["A", "G", "P"], secondary: ["S"] },
      { id: "dragonPrince", name: "Dragon Prince", qty: "0-2", keywords: ["Elf", "Blitzer", "Runner"], ma: 8, st: 3, ag: 2, pa: 4, av: 9, skills: sk2("block", "myBall", "steadyFooting"), cost: 11e4, primary: ["A", "G"], secondary: ["S"] },
      { id: "whiteLion", name: "White Lion", qty: "0-2", keywords: ["Elf", "Blitzer"], ma: 7, st: 3, ag: 2, pa: 3, av: 9, skills: sk2("claws", "wrestle"), cost: 11e4, primary: ["A", "G"], secondary: ["P", "S"] }
    ],
    // The earlier table (rulebook p.172): kept only to load teams saved under it.
    retiredPositions: [
      { id: "thrower", name: "High Elf Thrower", qty: "0-2", keywords: ["Elf", "Thrower"], ma: 6, st: 3, ag: 2, pa: 2, av: 9, skills: sk2("cloudBurster", "pass", "safePass"), cost: 1e5, primary: ["A", "G", "P"], secondary: ["S"] },
      { id: "catcher", name: "High Elf Catcher", qty: "0-4", keywords: ["Elf", "Catcher"], ma: 8, st: 3, ag: 2, pa: 3, av: 8, skills: sk2("catch"), cost: 9e4, primary: ["A", "G"], secondary: ["S"] },
      { id: "blitzer", name: "High Elf Blitzer", qty: "0-2", keywords: ["Elf", "Blitzer"], ma: 7, st: 3, ag: 2, pa: 4, av: 9, skills: sk2("block"), cost: 1e5, primary: ["A", "G"], secondary: ["P", "S"] }
    ]
  },
  {
    // V5: printed p.174 (PDF p.176), transcribed from the page image.
    id: "imperialNobility",
    name: "Imperial Nobility",
    page: 174,
    rerollCost: 6e4,
    apothecary: true,
    leagues: ["Old World Classic"],
    specialRules: [],
    color: "#6d1f2f",
    accent: "#f1d98a",
    positions: [
      { id: "retainer", name: "Imperial Retainer", qty: "0-16", keywords: ["Human", "Lineman"], ma: 6, st: 3, ag: 3, pa: 4, av: 8, skills: sk2("fend"), cost: 45e3, primary: ["G"], secondary: ["A", "S"] },
      { id: "thrower", name: "Imperial Thrower", qty: "0-2", keywords: ["Human", "Thrower"], ma: 6, st: 3, ag: 3, pa: 2, av: 9, skills: sk2("giveAndGo", "pass", "pro"), cost: 75e3, primary: ["G", "P"], secondary: ["A", "S"] },
      { id: "bodyguard", name: "Bodyguard", qty: "0-4", keywords: ["Blocker", "Human"], ma: 5, st: 3, ag: 3, pa: 4, av: 9, skills: sk2("standFirm", "wrestle"), cost: 85e3, primary: ["G", "S"], secondary: ["A"] },
      { id: "nobleBlitzer", name: "Noble Blitzer", qty: "0-2", keywords: ["Blitzer", "Human"], ma: 7, st: 3, ag: 3, pa: 4, av: 9, skills: sk2("block", "catch", "pro"), cost: 9e4, primary: ["A", "G"], secondary: ["P", "S"] },
      { id: "ogre", name: "Ogre", qty: "0-1", keywords: ["Big Guy", "Ogre"], ma: 5, st: 5, ag: 4, pa: 5, av: 10, skills: sk2("boneHead", ["loner", 3], "mightyBlow", "thickSkull", "throwTeamMate"), cost: 14e4, primary: ["S"], secondary: ["A", "G"] }
    ]
  },
  {
    // V5: printed p.175 (PDF p.177), transcribed from the page image.
    id: "khorne",
    name: "Khorne",
    page: 175,
    rerollCost: 6e4,
    apothecary: true,
    leagues: ["Chaos Clash"],
    specialRules: ["Brawlin' Brutes", "Favoured of Khorne"],
    color: "#8b0f0f",
    accent: "#1a1a1a",
    positions: [
      { id: "marauder", name: "Bloodborn Marauder", qty: "0-16", keywords: ["Human", "Lineman"], ma: 6, st: 3, ag: 3, pa: 4, av: 8, skills: sk2("frenzy"), cost: 5e4, primary: ["G", "M"], secondary: ["A", "D", "S"] },
      { id: "khorngor", name: "Khorngor", qty: "0-2", keywords: ["Beastman", "Runner"], ma: 6, st: 3, ag: 3, pa: 4, av: 9, skills: sk2("horns", "juggernaut", "jumpUp", "thickSkull"), cost: 7e4, primary: ["G", "M", "S"], secondary: ["A", "D", "P"] },
      { id: "bloodseeker", name: "Bloodseeker", qty: "0-4", keywords: ["Blocker", "Human"], ma: 5, st: 4, ag: 4, pa: 6, av: 10, skills: sk2("frenzy"), cost: 105e3, primary: ["G", "M", "S"], secondary: ["A", "D"] },
      { id: "bloodspawn", name: "Bloodspawn", qty: "0-1", keywords: ["Big Guy", "Spawn"], ma: 5, st: 5, ag: 4, pa: 6, av: 9, skills: sk2("claws", "frenzy", ["loner", 4], "mightyBlow", "unchannelledFury"), cost: 16e4, primary: ["M", "S"], secondary: ["A", "G"] }
    ]
  },
  {
    // V5: printed p.177 (PDF p.179), transcribed from the page image.
    id: "necromantic",
    name: "Necromantic Horror",
    page: 177,
    rerollCost: 7e4,
    apothecary: false,
    leagues: ["Sylvanian Spotlight"],
    specialRules: ["Masters of Undeath"],
    color: "#556b2f",
    accent: "#f0e68c",
    positions: [
      { id: "zombie", name: "Zombie Lineman", qty: "0-16", keywords: ["Human", "Lineman", "Undead", "Zombie"], ma: 4, st: 3, ag: 4, pa: 6, av: 9, skills: sk2("eyeGouge", "regeneration", "unsteady"), cost: 4e4, primary: ["D", "G"], secondary: ["A", "S"] },
      { id: "ghoul", name: "Ghoul Runner", qty: "0-2", keywords: ["Ghoul", "Runner", "Undead"], ma: 7, st: 3, ag: 3, pa: 3, av: 8, skills: sk2("dodge", "regeneration"), cost: 75e3, primary: ["A", "G"], secondary: ["D", "P", "S"] },
      { id: "wraith", name: "Wraith", qty: "0-2", keywords: ["Blocker", "Undead", "Wraith"], ma: 6, st: 3, ag: 3, pa: null, av: 9, skills: sk2("block", "foulAppearance", "noBall", "regeneration", "sidestep"), cost: 85e3, primary: ["G", "S"], secondary: ["A", "D"] },
      { id: "fleshGolem", name: "Flesh Golem", qty: "0-2", keywords: ["Blocker", "Construct", "Undead"], ma: 4, st: 4, ag: 4, pa: 6, av: 10, skills: sk2("regeneration", "standFirm", "thickSkull", "unsteady"), cost: 11e4, primary: ["G", "S"], secondary: ["A", "D"] },
      { id: "werewolf", name: "Werewolf", qty: "0-2", keywords: ["Blitzer", "Undead", "Werewolf"], ma: 8, st: 3, ag: 3, pa: 3, av: 9, skills: sk2("claws", "frenzy", "regeneration"), cost: 12e4, primary: ["A", "G"], secondary: ["D", "P", "S"] }
    ]
  },
  {
    // V5: printed p.179 (PDF p.181), transcribed from the page image.
    id: "nurgle",
    name: "Nurgle",
    page: 179,
    rerollCost: 6e4,
    apothecary: false,
    leagues: ["Chaos Clash"],
    specialRules: ["Brawlin' Brutes", "Favoured of Nurgle"],
    color: "#7b8c3a",
    accent: "#3a2a1a",
    positions: [
      { id: "rotter", name: "Rotter Lineman", qty: "0-16", keywords: ["Human", "Lineman"], ma: 5, st: 3, ag: 4, pa: 6, av: 9, skills: sk2("decay", "plagueRidden"), cost: 4e4, primary: ["D", "G", "M"], secondary: ["A", "S"] },
      { id: "pestigor", name: "Pestigor", qty: "0-2", keywords: ["Beastman", "Runner"], ma: 6, st: 3, ag: 3, pa: 4, av: 9, skills: sk2("horns", "plagueRidden", "regeneration", "steadyFooting", "thickSkull"), cost: 7e4, primary: ["G", "M", "S"], secondary: ["A", "D", "P"] },
      { id: "bloater", name: "Bloater", qty: "0-4", keywords: ["Blocker", "Human"], ma: 4, st: 4, ag: 4, pa: 6, av: 10, skills: sk2("disturbingPresence", "foulAppearance", "plagueRidden", "regeneration", "standFirm", "unsteady"), cost: 11e4, primary: ["G", "M", "S"], secondary: ["A", "D"] },
      { id: "rotspawn", name: "Rotspawn", qty: "0-1", keywords: ["Big Guy", "Spawn"], ma: 4, st: 5, ag: 5, pa: 6, av: 10, skills: sk2("disturbingPresence", "foulAppearance", ["loner", 4], "mightyBlow", "pickMeUp", "plagueRidden", "reallyStupid", "regeneration", "tentacles"), cost: 14e4, primary: ["S"], secondary: ["D", "G", "M"] }
    ]
  },
  {
    // V5: printed p.180 (PDF p.182), transcribed from the page image.
    id: "ogre",
    name: "Ogre",
    page: 180,
    rerollCost: 7e4,
    apothecary: true,
    leagues: ["Badlands Brawl", "Worlds Edge Superleague"],
    specialRules: ["Brawlin' Brutes", "Low Cost Linemen"],
    color: "#8a5a2b",
    accent: "#f4e2c1",
    positions: [
      { id: "gnoblar", name: "Gnoblar Lineman", qty: "0-16", keywords: ["Gnoblar", "Lineman"], ma: 5, st: 1, ag: 3, pa: 4, av: 6, skills: sk2("dodge", "rightStuff", "sidestep", "stunty", "titchy"), cost: 15e3, primary: ["A", "D"], secondary: ["G"] },
      { id: "ogreBlocker", name: "Ogre Blocker", qty: "0-5", keywords: ["Big Guy", "Blocker", "Ogre"], ma: 5, st: 5, ag: 4, pa: 5, av: 10, skills: sk2("boneHead", "mightyBlow", "thickSkull", "throwTeamMate"), cost: 14e4, primary: ["S"], secondary: ["A", "D", "G", "P"] },
      { id: "runtPunter", name: "Ogre Runt Punter", qty: "0-1", keywords: ["Big Guy", "Ogre", "Thrower"], ma: 5, st: 5, ag: 4, pa: 4, av: 10, skills: sk2("boneHead", "kickTeamMate", "mightyBlow", "thickSkull"), cost: 145e3, primary: ["P", "S"], secondary: ["A", "D", "G"] }
    ]
  },
  {
    // V5: printed p.181 (PDF p.183), transcribed from the page image.
    id: "oldWorldAlliance",
    name: "Old World Alliance",
    page: 181,
    rerollCost: 7e4,
    apothecary: true,
    leagues: ["Old World Classic"],
    specialRules: [],
    groups: [
      { id: "bigGuy", max: 1, positions: ["ogre", "treeman"], text: "An Old World Alliance team may have a single Big Guy, chosen from the following" }
    ],
    color: "#1d4e89",
    accent: "#f2f2f2",
    positions: [
      { id: "humanLineman", name: "Human Lineman", qty: "0-16", keywords: ["Human", "Lineman"], ma: 6, st: 3, ag: 3, pa: 4, av: 9, skills: [], cost: 5e4, primary: ["G"], secondary: ["A", "S"] },
      { id: "halfling", name: "Halfling Hopeful", qty: "0-3", keywords: ["Halfling", "Lineman"], ma: 5, st: 2, ag: 3, pa: 4, av: 7, skills: sk2("dodge", "rightStuff", "stunty"), cost: 3e4, primary: ["A"], secondary: ["G", "S"] },
      { id: "humanCatcher", name: "Human Catcher", qty: "0-1", keywords: ["Catcher", "Human"], ma: 8, st: 3, ag: 3, pa: 4, av: 8, skills: sk2("catch", "dodge"), cost: 75e3, primary: ["A", "G"], secondary: ["P", "S"] },
      { id: "dwarfLineman", name: "Dwarf Lineman", qty: "0-3", keywords: ["Dwarf", "Lineman"], ma: 4, st: 3, ag: 4, pa: 5, av: 10, skills: sk2("block", "defensive", "thickSkull"), cost: 7e4, primary: ["D", "G"], secondary: ["S"] },
      { id: "humanThrower", name: "Human Thrower", qty: "0-1", keywords: ["Human", "Thrower"], ma: 6, st: 3, ag: 3, pa: 3, av: 9, skills: sk2("pass", "sureHands"), cost: 75e3, primary: ["G", "P"], secondary: ["A", "S"] },
      { id: "dwarfRunner", name: "Dwarf Runner", qty: "0-1", keywords: ["Dwarf", "Runner"], ma: 6, st: 3, ag: 3, pa: 4, av: 9, skills: sk2("sprint", "sureHands", "thickSkull"), cost: 8e4, primary: ["G", "P"], secondary: ["A", "S"] },
      { id: "humanBlitzer", name: "Human Blitzer", qty: "0-1", keywords: ["Blitzer", "Human"], ma: 7, st: 3, ag: 3, pa: 4, av: 9, skills: sk2("block", "tackle"), cost: 85e3, primary: ["G", "S"], secondary: ["A"] },
      { id: "dwarfBlitzer", name: "Dwarf Blitzer", qty: "0-1", keywords: ["Blitzer", "Dwarf"], ma: 5, st: 3, ag: 4, pa: 4, av: 10, skills: sk2("block", "divingTackle", "tackle", "thickSkull"), cost: 1e5, primary: ["G", "S"], secondary: ["P"] },
      { id: "trollSlayer", name: "Troll Slayer", qty: "0-1", keywords: ["Dwarf", "Special"], ma: 5, st: 3, ag: 4, pa: 5, av: 9, skills: sk2("block", "dauntless", "frenzy", ["hatred", "Troll"], "thickSkull"), cost: 95e3, primary: ["G", "S"], secondary: ["A"] },
      { id: "ogre", name: "Ogre", qty: "0-1", keywords: ["Big Guy", "Ogre"], ma: 5, st: 5, ag: 4, pa: 5, av: 10, skills: sk2("boneHead", ["loner", 3], "mightyBlow", "thickSkull", "throwTeamMate"), cost: 14e4, primary: ["S"], secondary: ["A", "G"] },
      { id: "treeman", name: "Altern Forest Treeman", qty: "0-1", keywords: ["Big Guy", "Treeman"], ma: 2, st: 6, ag: 5, pa: 5, av: 11, skills: sk2(["loner", 4], "mightyBlow", "standFirm", "strongArm", "takeRoot", "thickSkull", "throwTeamMate", "timmmber"), cost: 12e4, primary: ["S"], secondary: ["A", "G", "P"] }
    ]
  },
  {
    // V5: printed p.183 (PDF p.185), transcribed from the page image.
    id: "shamblingUndead",
    name: "Shambling Undead",
    page: 183,
    rerollCost: 7e4,
    apothecary: false,
    leagues: ["Sylvanian Spotlight"],
    specialRules: ["Masters of Undeath"],
    color: "#3d5a5a",
    accent: "#e3e3c7",
    positions: [
      { id: "skeleton", name: "Skeleton Lineman", qty: "0-16", keywords: ["Human", "Lineman", "Skeleton", "Undead"], ma: 5, st: 3, ag: 4, pa: 6, av: 8, skills: sk2("regeneration", "thickSkull"), cost: 4e4, primary: ["G"], secondary: ["A", "D", "S"] },
      { id: "zombie", name: "Zombie Lineman", qty: "0-16", keywords: ["Human", "Lineman", "Undead", "Zombie"], ma: 4, st: 3, ag: 4, pa: 6, av: 9, skills: sk2("eyeGouge", "regeneration", "unsteady"), cost: 4e4, primary: ["D", "G"], secondary: ["A", "S"] },
      { id: "ghoul", name: "Ghoul Runner", qty: "0-2", keywords: ["Ghoul", "Runner", "Undead"], ma: 7, st: 3, ag: 3, pa: 3, av: 8, skills: sk2("dodge", "regeneration"), cost: 75e3, primary: ["A", "G"], secondary: ["D", "P", "S"] },
      { id: "wight", name: "Wight Blitzer", qty: "0-2", keywords: ["Blitzer", "Human", "Skeleton", "Undead"], ma: 6, st: 3, ag: 3, pa: 5, av: 9, skills: sk2("block", "regeneration", "tackle", "thickSkull"), cost: 95e3, primary: ["G", "S"], secondary: ["A", "D"] },
      { id: "mummy", name: "Mummy", qty: "0-2", keywords: ["Big Guy", "Blocker", "Human", "Undead"], ma: 3, st: 5, ag: 5, pa: 6, av: 10, skills: sk2("mightyBlow", "regeneration"), cost: 125e3, primary: ["S"], secondary: ["A", "G"] }
    ]
  },
  {
    // V5: printed p.184 (PDF p.186), transcribed from the page image.
    id: "skaven",
    name: "Skaven",
    page: 184,
    rerollCost: 5e4,
    apothecary: true,
    leagues: ["Underworld Challenge"],
    specialRules: [],
    color: "#3f6b2a",
    accent: "#e8e0c0",
    positions: [
      { id: "clanrat", name: "Skaven Clanrat", qty: "0-16", keywords: ["Lineman", "Skaven"], ma: 7, st: 3, ag: 3, pa: 4, av: 8, skills: [], cost: 5e4, primary: ["D", "G"], secondary: ["A", "M", "S"] },
      { id: "thrower", name: "Skaven Thrower", qty: "0-2", keywords: ["Skaven", "Thrower"], ma: 7, st: 3, ag: 3, pa: 2, av: 8, skills: sk2("pass", "sureHands"), cost: 8e4, primary: ["G", "P"], secondary: ["A", "D", "M", "S"] },
      { id: "gutterRunner", name: "Gutter Runner", qty: "0-2", keywords: ["Runner", "Skaven"], ma: 9, st: 2, ag: 2, pa: 4, av: 8, skills: sk2("dodge", "stab"), cost: 85e3, primary: ["A", "D", "G"], secondary: ["M", "S"] },
      { id: "blitzer", name: "Skaven Blitzer", qty: "0-2", keywords: ["Blitzer", "Skaven"], ma: 8, st: 3, ag: 3, pa: 4, av: 9, skills: sk2("block", "stripBall"), cost: 9e4, primary: ["G", "S"], secondary: ["A", "D", "M"] },
      { id: "ratOgre", name: "Rat Ogre", qty: "0-1", keywords: ["Big Guy", "Skaven"], ma: 6, st: 5, ag: 4, pa: 6, av: 9, skills: sk2("animalSavagery", "frenzy", ["loner", 4], "mightyBlow", "prehensileTail"), cost: 15e4, primary: ["S"], secondary: ["A", "G", "M"] }
    ]
  },
  {
    // V5: printed p.185 (PDF p.187), transcribed from the page image.
    id: "slann",
    name: "Slann",
    page: 185,
    rerollCost: 5e4,
    apothecary: true,
    leagues: ["Lustrian Superleague"],
    specialRules: [],
    color: "#2a8a8a",
    accent: "#f6e27f",
    positions: [
      { id: "lineman", name: "Slann Lineman", qty: "0-16", keywords: ["Lineman", "Lizardman"], ma: 6, st: 3, ag: 3, pa: 4, av: 9, skills: sk2("pogo"), cost: 6e4, primary: ["G"], secondary: ["A", "S"] },
      { id: "catcher", name: "Slann Catcher", qty: "0-2", keywords: ["Catcher", "Lizardman"], ma: 7, st: 2, ag: 2, pa: 3, av: 8, skills: sk2("divingCatch", "onTheBall", "pogo", "veryLongLegs"), cost: 8e4, primary: ["A", "G"], secondary: ["P", "S"] },
      { id: "blitzer", name: "Slann Blitzer", qty: "0-2", keywords: ["Blitzer", "Lizardman"], ma: 7, st: 3, ag: 3, pa: 4, av: 9, skills: sk2("divingTackle", "hitAndRun", "jumpUp", "pogo"), cost: 1e5, primary: ["A", "G", "S"], secondary: ["P"] },
      { id: "kroxigor", name: "Kroxigor", qty: "0-1", keywords: ["Big Guy", "Lizardman"], ma: 6, st: 5, ag: 5, pa: 6, av: 10, skills: sk2("boneHead", ["loner", 4], "mightyBlow", "prehensileTail", "thickSkull"), cost: 14e4, primary: ["S"], secondary: ["A", "G"] }
    ]
  },
  {
    // V5: printed p.186 (PDF p.188), transcribed from the page image.
    id: "snotling",
    name: "Snotling",
    page: 186,
    rerollCost: 7e4,
    apothecary: true,
    leagues: ["Underworld Challenge"],
    specialRules: ["Bribery and Corruption", "Low Cost Linemen", "Swarming"],
    color: "#9ccc65",
    accent: "#5d2e0f",
    positions: [
      { id: "lineman", name: "Snotling Lineman", qty: "0-16", keywords: ["Lineman", "Snotling"], ma: 5, st: 1, ag: 3, pa: 4, av: 6, skills: sk2("dodge", "insignificant", "rightStuff", "sidestep", "stunty", "titchy"), cost: 15e3, primary: ["A", "D"], secondary: ["G"] },
      { id: "funHoppa", name: "Fun-hoppa", qty: "0-2", keywords: ["Snotling", "Special"], ma: 6, st: 1, ag: 3, pa: 4, av: 6, skills: sk2("dodge", "pogo", "rightStuff", "sidestep", "stunty"), cost: 2e4, primary: ["A", "D"], secondary: ["G"] },
      { id: "stiltyRunna", name: "Stilty Runna", qty: "0-2", keywords: ["Runner", "Snotling"], ma: 6, st: 1, ag: 3, pa: 4, av: 6, skills: sk2("dodge", "rightStuff", "sidestep", "sprint", "stunty"), cost: 2e4, primary: ["A", "D"], secondary: ["G"] },
      { id: "fungusFlinga", name: "Fungus Flinga", qty: "0-2", keywords: ["Snotling", "Special"], ma: 5, st: 1, ag: 3, pa: 4, av: 6, skills: sk2("bombardier", "dodge", "rightStuff", "secretWeapon", "sidestep", "stunty", "titchy"), cost: 3e4, primary: ["A", "D", "P"], secondary: ["G"] },
      { id: "pumpWagon", name: "Pump Wagon", qty: "0-2", keywords: ["Big Guy", "Snotling", "Special"], ma: 5, st: 5, ag: 5, pa: 6, av: 9, skills: sk2("dirtyPlayer", "juggernaut", "mightyBlow", "reallyStupid", "standFirm"), cost: 1e5, primary: ["D", "S"], secondary: ["A", "G"] },
      { id: "trainedTroll", name: "Trained Troll", qty: "0-2", keywords: ["Big Guy", "Troll"], ma: 4, st: 5, ag: 5, pa: 5, av: 10, skills: sk2("alwaysHungry", "mightyBlow", "projectileVomit", "reallyStupid", "regeneration", "throwTeamMate"), cost: 115e3, primary: ["S"], secondary: ["A", "G", "P"] }
    ]
  },
  {
    // V5: printed p.188 (PDF p.190), transcribed from the page image.
    id: "underworld",
    name: "Underworld Denizens",
    page: 188,
    rerollCost: 7e4,
    apothecary: true,
    leagues: ["Underworld Challenge"],
    specialRules: ["Bribery and Corruption"],
    groups: [
      { id: "bigGuy", max: 1, positions: ["troll", "ratOgre"], text: "An Underworld Denizens team may have a single Big Guy, chosen from the following" }
    ],
    color: "#4f6b1f",
    accent: "#f3e0b5",
    positions: [
      { id: "goblin", name: "Goblin Lineman", qty: "0-16", keywords: ["Goblin", "Lineman"], ma: 6, st: 2, ag: 3, pa: 4, av: 8, skills: sk2("dodge", "rightStuff", "stunty"), cost: 4e4, primary: ["A", "D", "M"], secondary: ["G", "P", "S"] },
      { id: "snotling", name: "Snotling Lineman", qty: "0-6", keywords: ["Lineman", "Snotling"], ma: 5, st: 1, ag: 3, pa: 4, av: 6, skills: sk2("dodge", "insignificant", "rightStuff", "sidestep", "stunty", "titchy"), cost: 15e3, primary: ["A", "D", "M"], secondary: ["G"] },
      { id: "clanrat", name: "Skaven Clanrat", qty: "0-3", keywords: ["Lineman", "Skaven"], ma: 7, st: 3, ag: 3, pa: 4, av: 8, skills: sk2(["animosity", "Goblin"]), cost: 5e4, primary: ["D", "G", "M"], secondary: ["A", "S"] },
      { id: "thrower", name: "Skaven Thrower", qty: "0-1", keywords: ["Skaven", "Thrower"], ma: 7, st: 3, ag: 3, pa: 2, av: 8, skills: sk2(["animosity", "Goblin"], "pass", "sureHands"), cost: 8e4, primary: ["G", "M", "P"], secondary: ["A", "D", "S"] },
      { id: "gutterRunner", name: "Gutter Runner", qty: "0-1", keywords: ["Runner", "Skaven"], ma: 9, st: 2, ag: 2, pa: 4, av: 8, skills: sk2(["animosity", "Goblin"], "dodge", "stab"), cost: 85e3, primary: ["A", "D", "G", "M"], secondary: ["S"] },
      { id: "blitzer", name: "Skaven Blitzer", qty: "0-1", keywords: ["Blitzer", "Skaven"], ma: 8, st: 3, ag: 3, pa: 4, av: 9, skills: sk2(["animosity", "Goblin"], "block", "stripBall"), cost: 9e4, primary: ["G", "M", "S"], secondary: ["A", "D"] },
      { id: "troll", name: "Troll", qty: "0-1", keywords: ["Big Guy", "Troll"], ma: 4, st: 5, ag: 5, pa: 5, av: 10, skills: sk2("alwaysHungry", ["loner", 4], "mightyBlow", "projectileVomit", "reallyStupid", "regeneration", "throwTeamMate"), cost: 115e3, primary: ["M", "S"], secondary: ["A", "G", "P"] },
      { id: "ratOgre", name: "Rat Ogre", qty: "0-1", keywords: ["Big Guy", "Skaven"], ma: 6, st: 5, ag: 4, pa: 6, av: 9, skills: sk2("animalSavagery", "frenzy", ["loner", 4], "mightyBlow", "prehensileTail"), cost: 15e4, primary: ["M", "S"], secondary: ["A", "G"] }
    ]
  },
  {
    // V5: printed p.189 (PDF p.191), transcribed from the page image.
    id: "vampire",
    name: "Vampire",
    page: 189,
    rerollCost: 6e4,
    apothecary: true,
    leagues: ["Sylvanian Spotlight"],
    specialRules: ["Masters of Undeath"],
    color: "#5a0f1f",
    accent: "#f0e2d0",
    positions: [
      { id: "thrall", name: "Thrall Lineman", qty: "0-16", keywords: ["Human", "Lineman", "Thrall"], ma: 6, st: 3, ag: 3, pa: 4, av: 8, skills: [], cost: 4e4, primary: ["G"], secondary: ["A", "S"] },
      { id: "runner", name: "Vampire Runner", qty: "0-2", keywords: ["Runner", "Undead", "Vampire"], ma: 8, st: 3, ag: 2, pa: 3, av: 8, skills: sk2(["bloodlust", 2], "hypnoticGaze", "regeneration"), cost: 1e5, primary: ["A", "G"], secondary: ["P", "S"] },
      { id: "thrower", name: "Vampire Thrower", qty: "0-2", keywords: ["Thrower", "Undead", "Vampire"], ma: 6, st: 4, ag: 2, pa: 2, av: 9, skills: sk2(["bloodlust", 2], "hypnoticGaze", "pass", "regeneration"), cost: 11e4, primary: ["A", "G", "P"], secondary: ["S"] },
      { id: "blitzer", name: "Vampire Blitzer", qty: "0-2", keywords: ["Blitzer", "Undead", "Vampire"], ma: 6, st: 4, ag: 2, pa: 4, av: 9, skills: sk2(["bloodlust", 3], "hypnoticGaze", "juggernaut", "regeneration"), cost: 11e4, primary: ["A", "G", "S"], secondary: [] },
      { id: "vargheist", name: "Vargheist", qty: "0-1", keywords: ["Big Guy", "Undead", "Vampire"], ma: 5, st: 5, ag: 4, pa: 6, av: 10, skills: sk2(["bloodlust", 3], "claws", "frenzy", ["loner", 4], "regeneration"), cost: 15e4, primary: ["S"], secondary: ["A", "G"] }
    ]
  },
  {
    // V5: printed p.190 (PDF p.192), transcribed from the page image.
    id: "woodElf",
    name: "Wood Elf",
    page: 190,
    rerollCost: 5e4,
    apothecary: true,
    leagues: ["Elven Kingdoms League", "Woodland League"],
    specialRules: [],
    color: "#2f6b3a",
    accent: "#e9d9a6",
    positions: [
      { id: "lineman", name: "Wood Elf Lineman", qty: "0-16", keywords: ["Elf", "Lineman"], ma: 7, st: 3, ag: 2, pa: 3, av: 8, skills: [], cost: 65e3, primary: ["A", "G"], secondary: ["S"] },
      { id: "thrower", name: "Wood Elf Thrower", qty: "0-2", keywords: ["Elf", "Thrower"], ma: 7, st: 3, ag: 2, pa: 2, av: 8, skills: sk2("pass", "safePairOfHands"), cost: 85e3, primary: ["A", "G", "P"], secondary: ["S"] },
      { id: "catcher", name: "Wood Elf Catcher", qty: "0-2", keywords: ["Catcher", "Elf"], ma: 8, st: 2, ag: 2, pa: 3, av: 8, skills: sk2("catch", "dodge", "sprint"), cost: 9e4, primary: ["A", "G"], secondary: ["P", "S"] },
      { id: "wardancer", name: "Wardancer", qty: "0-2", keywords: ["Blitzer", "Elf"], ma: 8, st: 3, ag: 2, pa: 3, av: 8, skills: sk2("block", "dodge", "leap"), cost: 13e4, primary: ["A", "G"], secondary: ["P", "S"] },
      { id: "treeman", name: "Loren Forest Treeman", qty: "0-1", keywords: ["Big Guy", "Treeman"], ma: 2, st: 6, ag: 5, pa: 5, av: 11, skills: sk2(["loner", 4], "mightyBlow", "standFirm", "strongArm", "takeRoot", "thickSkull", "throwTeamMate"), cost: 12e4, primary: ["S"], secondary: ["A", "G", "P"] }
    ]
  }
];
function rosterLeague(r, chosen) {
  if (!r) return chosen;
  if (chosen && r.leagues.includes(chosen)) return chosen;
  return r.leagues.length === 1 ? r.leagues[0] : void 0;
}
function rosterSpecialRules(r, league, favoured) {
  if (!r) return [];
  const l = rosterLeague(r, league);
  const fav = favoured && r.favouredOf?.includes(favoured) ? [`Favoured of ${favoured}`] : [];
  return [...r.specialRules, ...fav, ...(l && r.leagueRules?.[l]) ?? []];
}
var SPECIAL_RULE_PAGE = {
  "Brawlin' Brutes": 154,
  "Bribery and Corruption": 154,
  "Low Cost Linemen": 155,
  "Masters of Undeath": 155,
  Swarming: 155,
  "Team Captain": 155
};
function specialRulePage(rule2) {
  return SPECIAL_RULE_PAGE[rule2] ?? 154;
}
var ROSTER_BY_ID = Object.fromEntries(ROSTERS.map((r) => [r.id, r]));
function findPosition(r, id) {
  if (!r || !id) return void 0;
  return r.positions.find((x) => x.id === id) ?? r.retiredPositions?.find((x) => x.id === id);
}
function isRetiredPosition(r, id) {
  return !!r && !!id && !r.positions.some((x) => x.id === id) && !!r.retiredPositions?.some((x) => x.id === id);
}

// src/engine/inducements.ts
var any = () => null;
var bc = (rules) => rules.includes("Bribery and Corruption");
var INDUCEMENTS = [
  { id: "prayer", name: "Prayer to Nuffle", page: 142, max: () => 3, cost: () => 1e4, unavailable: any, summary: "A D16 each on the Prayers to Nuffle table (p.143) in the pre-game (no result twice); lasts for the game." },
  { id: "partTimeCoach", name: "Part-time Assistant Coach", page: 144, max: () => 5, cost: () => 2e4, unavailable: any, summary: "+1 Assistant Coach for the game each (Brilliant Coaching)." },
  { id: "tempCheerleader", name: "Temp Agency Cheerleader", page: 144, max: () => 5, cost: () => 5e3, unavailable: any, summary: "+1 Cheerleader for the game each (Cheering Fans)." },
  { id: "teamMascot", name: "Team Mascot", page: 144, max: () => 1, cost: () => 25e3, unavailable: any, summary: "An extra Team Re-roll each half \u2014 roll a D6 before using it: 1-3 it is lost for the half. Re-roll a natural 1 for Cheering Fans." },
  { id: "weatherMage", name: "Weather Mage", page: 144, max: () => 1, cost: () => 25e3, unavailable: any, summary: "Once per game, at the start of one of your Turns: roll on the Weather Table with a modifier from \u22122 to +2." },
  { id: "blitzersBestKeg", name: "Blitzer's Best Keg", page: 144, max: () => 2, cost: () => 5e4, unavailable: any, summary: "+1 to each roll to recover a Knocked-out player, per Keg." },
  { id: "bribe", name: "Bribe", page: 144, max: (r) => bc(r) ? 6 : 3, cost: (r) => bc(r) ? 5e4 : 1e5, unavailable: any, summary: "When a player is Sent-off (after Argue the Call): D6 2+ and the player stays, no Turnover. 0-6 at 50,000 gp for Bribery and Corruption teams." },
  { id: "extraTraining", name: "Extra Team Training", page: 145, max: () => 8, cost: () => 1e5, unavailable: any, summary: "+1 Team Re-roll for the game each (replenished at half-time like the others)." },
  {
    id: "mortuaryAssistant",
    name: "Mortuary Assistant",
    page: 145,
    max: () => 1,
    cost: () => 1e5,
    unavailable: (r) => r.includes("Masters of Undeath") ? null : "only for teams with Masters of Undeath",
    summary: "Once per game: re-roll a failed Regeneration roll."
  },
  {
    id: "plagueDoctor",
    name: "Plague Doctor",
    page: 145,
    max: () => 1,
    cost: () => 1e5,
    unavailable: (r) => r.includes("Favoured of Nurgle") ? null : "only for teams Favoured of Nurgle",
    summary: "Once per game: re-roll a failed Regeneration roll, or use it as an Apothecary."
  },
  {
    id: "riotousRookies",
    name: "Riotous Rookies",
    page: 145,
    max: () => 1,
    cost: () => 15e4,
    unavailable: (r) => r.includes("Low Cost Linemen") ? null : "only for teams with Low Cost Linemen",
    summary: "2D3+1 Journeymen (roster Linemen with Loner (4+)) join the team for this game."
  },
  {
    id: "wanderingApothecary",
    name: "Wandering Apothecary",
    page: 146,
    max: () => 2,
    cost: () => 1e5,
    unavailable: (_r, ro) => ro && !ro.apothecary ? "not for teams that cannot hire an Apothecary" : null,
    summary: "Once per game each: use it like the team\u2019s Apothecary."
  },
  { id: "halflingMasterChef", name: "Halfling Master Chef", page: 146, max: () => 1, cost: (_r, ro) => ro?.id === "halfling" ? 1e5 : 3e5, unavailable: any, summary: "At the start of each half roll 3D6: each 4+ gives you a Team Re-roll for the half and takes one from the opponent. 100,000 gp for Halfling teams." },
  { id: "biasedReferee", name: "Biased Referee: Dodgy League Rep", page: 146, max: () => 1, cost: (r) => bc(r) ? 8e4 : 12e4, unavailable: any, summary: 'Close Scrutiny: after an opposition Foul that is not Sent-off, D6 5+ sends the fouler off. "I didn\u2019t see a thing": +1 to Argue the Call (a natural 1 still ejects the coach). 80,000 gp for Bribery and Corruption teams.' },
  { id: "wizard", name: "Wizard: Sports-Wizard", page: 149, max: () => 1, cost: () => 15e4, unavailable: any, summary: "Once per game, at the end of any Turn before the next begins: Fireball (a square: everyone in or next to it is hit on a 4+ \u2014 Knocked Down, +1 Armour) or Zap! (a player: D6 \u2265 ST or a 6 turns them into a Frog until the end of the Drive)." },
  { id: "josefBugman", name: "Infamous Coaching Staff: Josef Bugman", page: 147, max: () => 1, cost: () => 1e5, unavailable: any, summary: "Bugman's XXXXXX: +1 to recover Knocked-out players. Dwarfen Wisdom: once per game, after the set-ups and before the kick-off, set up D3 of your players again." }
];
var DESPERATE_MEASURE = {
  id: "desperateMeasure",
  name: "Desperate Measure",
  page: 15,
  max: () => 5,
  cost: () => 5e4,
  unavailable: any,
  summary: "Sevens only: a D8 each on the Desperate Measures table in the pre-game (duplicates re-rolled) \u2014 You Dope!, Razzle-Dazzle, Hangover, Grudge Match, Set Piece, Sports Espionage, Discarded Banana Skin, Magic Scroll; each once per game."
};
var INDUCEMENT_BY_ID = Object.fromEntries([...INDUCEMENTS, DESPERATE_MEASURE].map((d2) => [d2.id, d2]));
var SEVENS_INDUCEMENT_PAGE = 14;
var SEVENS_LIST = {
  tempCheerleader: { max: () => 2, cost: () => 15e3 },
  partTimeCoach: { max: () => 2, cost: () => 15e3 },
  blitzersBestKeg: { max: () => 2, cost: () => 5e4 },
  prayer: { max: () => 2, cost: () => 5e3, page: 15, summary: "A D8 each on the Sevens Prayers to Nuffle table (Spike! 22 p.15) in the pre-game (no result twice); lasts for the game." },
  extraTraining: { max: () => 6, cost: () => 125e3 },
  bribe: { max: () => 2, cost: (r) => bc(r) ? 5e4 : 1e5, summary: "When a player is Sent-off (after Argue the Call): D6 2+ and the player stays, no Turnover. 0-2 in Sevens (50,000 gp each for Bribery and Corruption teams)." },
  wanderingApothecary: { max: () => 1, cost: () => 1e5, summary: "Once per game: use it like an Apothecary \u2014 in Sevens it patches up a Knocked-out player (there is no Casualty Roll to repeat)." },
  mortuaryAssistant: { max: () => 1, cost: () => 1e5 },
  plagueDoctor: { max: () => 1, cost: () => 1e5 },
  halflingMasterChef: { max: () => 1, cost: (_r, ro) => ro?.id === "halfling" ? 1e5 : 3e5 }
};
function inducementsFor(variant) {
  if (variant !== "sevens") return INDUCEMENTS;
  const out = [];
  for (const d2 of INDUCEMENTS) {
    const o = SEVENS_LIST[d2.id];
    if (!o) continue;
    out.push({ ...d2, max: o.max, cost: o.cost, page: o.page ?? SEVENS_INDUCEMENT_PAGE, summary: o.summary ?? d2.summary });
  }
  out.push(DESPERATE_MEASURE);
  return out;
}
function inducementFor(id, variant) {
  return inducementsFor(variant).find((d2) => d2.id === id);
}
function inducementsNotOffered(variant) {
  if (variant !== "sevens")
    return [
      { name: "Desperate Measures", why: "Blood Bowl Sevens only (Spike! 22 p.15).", kind: "rules" },
      { name: "Other named Biased Referees, Infamous Coaching Staff and Wizards", why: "The rulebook gives only the Dodgy League Rep, Josef Bugman and the Sports-Wizard (pp.146-149); the others are in other publications, not supplied.", kind: "rules" }
    ];
  const std2 = INDUCEMENTS.filter((d2) => !SEVENS_LIST[d2.id]).map((d2) => ({ name: d2.name, why: "Not on the Blood Bowl Sevens Inducement list (Spike! 22 p.14).", kind: "rules" }));
  return [
    ...std2,
    { name: "Mercenary Players", why: "Not on the Blood Bowl Sevens Inducement list (Spike! 22 p.14).", kind: "rules" },
    { name: "Star Players", why: "Not on the Blood Bowl Sevens Inducement list (Spike! 22 p.14) \u2014 the All-Star Match (Exhibition) is the custom variant with Star Players.", kind: "rules" }
  ];
}
var MERCENARY = { page: 147, extra: 3e4, skillCost: 5e4, max: 3 };
function inducementCost(list, rules, roster, variant) {
  let n = 0;
  for (const [id, k] of Object.entries(list ?? {})) {
    const d2 = variant === "sevens" ? inducementFor(id, "sevens") ?? INDUCEMENT_BY_ID[id] : INDUCEMENT_BY_ID[id];
    if (d2 && k > 0) n += d2.cost(rules, roster) * k;
  }
  return n;
}
function induced(s, team2, id) {
  return s.match?.inducements?.[team2]?.[id] ?? 0;
}
function induceLeft(s, team2, id) {
  return Math.max(0, induced(s, team2, id) - (s.teams[team2].induceUsed?.[id] ?? 0));
}
function spendInduce(s, team2, id) {
  const t = s.teams[team2];
  t.induceUsed = { ...t.induceUsed ?? {}, [id]: (t.induceUsed?.[id] ?? 0) + 1 };
}
var INDUCE_RULE = (id) => ({ page: INDUCEMENT_BY_ID[id]?.page ?? 141, title: INDUCEMENT_BY_ID[id]?.name ?? "Inducements" });

// src/engine/matched.ts
var TIERS = [1, 2, 3, 4];
var MATCHED = {
  standard: {
    source: "Blood Bowl rulebook, Matched Play",
    page: "110-113",
    skillPoints: { 1: 6, 2: 8, 3: 9, 4: 10 },
    secondaryMax: { 1: 1, 2: 2, 3: 3, 4: 4 },
    eliteMax: 4,
    starCost: 2,
    starsMax: { 1: 1, 2: 2, 3: 2, 4: 2 },
    budgets: [11e5, 115e4, 12e5],
    defaultBudget: 11e5,
    fansFrom: 0
  },
  sevens: {
    source: "Spike! Journal 22, Blood Bowl Sevens Matched Play",
    page: "18-19",
    skillPoints: { 1: 1, 2: 2, 3: 3, 4: 4 },
    secondaryMax: { 1: 1, 2: 1, 3: 1, 4: 1 },
    eliteMax: 2,
    starCost: null,
    starsMax: { 1: 0, 2: 0, 3: 0, 4: 0 },
    budgets: [6e5],
    defaultBudget: 6e5,
    fansFrom: 0
  }
};
var OFFICIAL_TIERS = {
  date: "May 2026",
  source: "Blood Bowl Team Tiers, Games Workshop (May 2026)",
  url: "https://assets.warhammer-community.com/eng_20-05_blood_bowl_teamtiers-rhnqpyom8r-4rpfatdubw.pdf",
  tiers: {
    amazon: 1,
    chaosDwarf: 1,
    darkElf: 1,
    highElf: 1,
    lizardmen: 1,
    norse: 1,
    oldWorldAlliance: 1,
    underworld: 1,
    woodElf: 1,
    bretonnian: 2,
    dwarf: 2,
    elvenUnion: 2,
    human: 2,
    imperialNobility: 2,
    necromantic: 2,
    orc: 2,
    shamblingUndead: 2,
    skaven: 2,
    tombKings: 2,
    vampire: 2,
    blackOrc: 3,
    chaosChosen: 3,
    chaosRenegade: 3,
    khorne: 3,
    nurgle: 3,
    gnome: 4,
    goblin: 4,
    halfling: 4,
    ogre: 4,
    snotling: 4
  }
};
var MEGA_STARS = ["griff", "hakflem", "hthark", "ivan", "morgNThorg"];
var MEGA_STAR_COST = 4;
var isMegaStar = (starId) => !!starId && MEGA_STARS.includes(starId);
function tierInfo(rosterId, format) {
  const off = rosterId ? OFFICIAL_TIERS.tiers[rosterId] : void 0;
  if (format === "sevens") {
    const src = rosterId ? SOURCE_TIERS.sevens[rosterId] : void 0;
    if (src) return { tier: src.tier, kind: "source", label: `Tier ${src.tier} (Spike! 22)`, ref: src.ref };
    if (off) return { tier: off, kind: "suggested", label: `Tier ${off} (May 2026 list \u2014 no Sevens list in the sources)`, ref: `${OFFICIAL_TIERS.source}; Spike! 22 p.19 says Sevens has its own list, which is not in the supplied sources.` };
    return { tier: null, kind: "none", label: "No official Tier (legacy / custom roster) \u2014 choose an event Tier", ref: "Not on the May 2026 list." };
  }
  if (off) return { tier: off, kind: "official", label: `Tier ${off} (official, ${OFFICIAL_TIERS.date})`, ref: OFFICIAL_TIERS.source };
  return { tier: null, kind: "none", label: "No official Tier (legacy / custom roster) \u2014 choose an event Tier", ref: "Not on the May 2026 list." };
}
function isEventTier(rosterId, format, tier) {
  if (!tier) return false;
  const info = tierInfo(rosterId, format);
  return info.tier !== tier || info.kind === "none";
}
var SOURCE_TIERS = {
  standard: Object.fromEntries(Object.entries(OFFICIAL_TIERS.tiers).map(([id, t]) => [id, { tier: t, ref: `${OFFICIAL_TIERS.source}` }])),
  sevens: {
    norse: { tier: 1, ref: 'Spike! 22 p.26 ("as a Tier 1 team, you only get 1 Skill Point")' },
    goblin: { tier: 4, ref: 'Spike! 22 p.27 ("you have 4 Skill Points to spend")' },
    chaosChosen: { tier: 2, ref: 'Spike! 22 p.29 ("Chaos Chosen are Tier 2")' }
  }
};
var formatOfTeam = (t) => t.variant === "sevens" ? "sevens" : "standard";
var matchedFormat = (t) => MATCHED[formatOfTeam(t)];
function isTournamentTeam(t) {
  return t.kind === "tournament" && t.play === "tournament";
}
function sourceTier(rosterId, format) {
  return rosterId ? SOURCE_TIERS[format][rosterId] : void 0;
}
function skillPointAllowance(t) {
  if (!isTournamentTeam(t) || !t.tier) return 0;
  return matchedFormat(t).skillPoints[t.tier];
}
function boughtSkillCategory(t, p, skillId, cats) {
  const c = skillCategory(skillId);
  if (!c) return null;
  if (cats.primary.includes(c)) return "primary";
  if (cats.secondary.includes(c)) return "secondary";
  void t;
  void p;
  return null;
}
function starChoiceSummary(players, pairKey) {
  const keys = /* @__PURE__ */ new Map();
  for (const p of players) if (p.star) keys.set(pairKey(p.star), p.star);
  let mega = 0;
  for (const id of keys.values()) if (isMegaStar(id)) mega++;
  return { choices: keys.size, mega };
}
function skillPointUse(t, catsOf, starChoices2, megaStars = 0) {
  let primary = 0;
  let secondary = 0;
  let elite = 0;
  const eliteBySkill = {};
  for (const p of t.players) {
    if (!p.boughtSkill) continue;
    const cat = boughtSkillCategory(t, p, p.boughtSkill, catsOf(p));
    if (cat === "secondary") secondary++;
    else primary++;
    if (ELITE_SKILLS.includes(p.boughtSkill)) {
      elite++;
      eliteBySkill[p.boughtSkill] = (eliteBySkill[p.boughtSkill] ?? 0) + 1;
    }
  }
  const F = matchedFormat(t);
  const stars = F.starCost ? (starChoices2 - megaStars) * F.starCost + megaStars * MEGA_STAR_COST : 0;
  return { allowance: skillPointAllowance(t), spent: primary + secondary * 2 + stars, primary, secondary, elite, eliteBySkill, eliteMostSame: Math.max(0, ...Object.values(eliteBySkill)), stars, megaStars };
}
function matchedIssues(t, catsOf, starChoices2, skillName2, out, megaStars = 0) {
  const bought = t.players.filter((p) => p.boughtSkill);
  if (!isTournamentTeam(t)) {
    if (bought.length) out.push({ level: t.kind === "league" ? "error" : "warning", text: t.kind === "league" ? "League teams do not buy skills with Skill Points: they advance with Star Player Points (p.97)." : `Exhibition team: the ${bought.length} skill${bought.length === 1 ? "" : "s"} bought with Skill Points ${bought.length === 1 ? "is" : "are"} not used (Exhibition matches play without purchased skills).` });
    return;
  }
  const F = matchedFormat(t);
  const pg = t.variant === "sevens" ? `Spike! 22 p.19` : "p.112";
  if (!t.tier) {
    out.push({ level: "error", text: `Choose the team's Tier (1-4): it sets its Skill Points (${pg}). The Tier list is in the Blood Bowl Designers' Commentary.` });
    return;
  }
  const u = skillPointUse(t, catsOf, starChoices2, megaStars);
  if (u.spent > u.allowance) out.push({ level: "error", text: `Skill Points: ${u.spent} spent, but a Tier ${t.tier} team has ${u.allowance} (${pg}).` });
  if (u.secondary > F.secondaryMax[t.tier]) out.push({ level: "error", text: t.variant === "sevens" ? `${u.secondary} Secondary skills: a Sevens team may buy only one (${pg}).` : `${u.secondary} Secondary skills: a Tier ${t.tier} team may buy at most ${F.secondaryMax[t.tier]} (${pg}).` });
  if (t.variant === "sevens") {
    if (u.elite > F.eliteMax) out.push({ level: "error", text: `${u.elite} Elite skills bought (Block, Dodge, Guard, Mighty Blow): at most ${F.eliteMax} in a Sevens Matched Play roster (${pg}).` });
  } else {
    for (const [id, n] of Object.entries(u.eliteBySkill)) if (n > F.eliteMax) out.push({ level: "error", text: `${n} \xD7 ${skillName2(id)} bought: each individual Elite skill (Block, Dodge, Guard, Mighty Blow) may be bought at most ${F.eliteMax} times in a Matched Play roster (${pg}; FAQ May 2026).` });
  }
  if (F.starCost && starChoices2 > F.starsMax[t.tier]) out.push({ level: "error", text: `${starChoices2} Star Players: a Tier ${t.tier} team may have at most ${F.starsMax[t.tier]} (p.113).` });
  if (megaStars > 1) out.push({ level: "error", text: `${megaStars} Mega-stars: a team may only ever have a single Mega-star (p.113; May 2026 list).` });
  if (!F.starCost && starChoices2 > 0 && !t.allStar) out.push({ level: "error", text: "Blood Bowl Sevens Matched Play buys only skills with Skill Points; the Sevens Inducements (Spike! 22 p.16) include no Star Players." });
  for (const p of bought) {
    const id = p.boughtSkill;
    if (p.star) out.push({ level: "error", text: `#${p.number} ${p.name}: Star Players cannot be given additional skills (p.112).` });
    else if (!boughtSkillCategory(t, p, id, catsOf(p))) out.push({ level: "error", text: `#${p.number} ${p.name}: ${skillName2(id)} is neither a Primary nor a Secondary skill for this player.` });
    if (p.skills.some((k) => k.id === id)) out.push({ level: "error", text: `#${p.number} ${p.name} already has ${skillName2(id)}.` });
  }
}

// src/engine/teams.ts
var MATCH_KIND_LABEL = {
  league: "League",
  tournament: "Tournament / Exhibition"
};
var DRAFT_TEMPLATE = {
  budget: 1e6,
  minPlayers: 11,
  maxPlayers: 16,
  maxRerolls: 8,
  apothecaryCost: 5e4,
  assistantCost: 1e4,
  maxAssistants: 6,
  cheerleaderCost: 1e4,
  maxCheerleaders: 6,
  fanCost: 5e3,
  minFans: 1,
  maxFans: 3,
  pages: "89-91"
};
var SEVENS_DRAFT = {
  budget: 6e5,
  minPlayers: 7,
  maxPlayers: 11,
  maxNonLineman: 4,
  /** Spike! 22 sets no maximum; the rulebook draft limit (p.90) is kept. */
  maxRerolls: 8,
  rerollCost: 1e5,
  apothecaryCost: 8e4,
  assistantCost: 2e4,
  maxAssistants: 3,
  cheerleaderCost: 2e4,
  maxCheerleaders: 3,
  fanCost: 2e4,
  minFans: 1,
  maxFans: 5,
  pages: "8-9"
};
function draftTemplate(t) {
  return t.variant === "sevens" ? SEVENS_DRAFT : DRAFT_TEMPLATE;
}
function playerCategories(t, p) {
  const r = t.rosterId ? ROSTER_BY_ID[t.rosterId] : void 0;
  const pos = findPosition(r, p.positionId);
  if (pos) return { primary: pos.primary.slice(), secondary: pos.secondary.slice(), fromRoster: true };
  return { primary: (p.primary ?? []).slice(), secondary: (p.secondary ?? []).slice(), fromRoster: false };
}
function newTeamDef(kind, rosterId, name, id, variant) {
  const r = rosterId ? ROSTER_BY_ID[rosterId] : void 0;
  return {
    format: "bloodboard-team",
    version: 1,
    id,
    kind: variant === "sevens" ? "tournament" : kind,
    ...variant === "sevens" ? { variant: "sevens" } : {},
    name,
    rosterId,
    color: r?.color ?? "#1f4e9c",
    accent: r?.accent ?? "#f4f1e8",
    rerolls: kind === "league" ? 2 : 0,
    apothecary: false,
    assistantCoaches: 0,
    cheerleaders: 0,
    dedicatedFans: 1,
    players: [],
    updatedAt: (/* @__PURE__ */ new Date(0)).toISOString()
  };
}
function playerFromRoster(r, positionId, number, id) {
  const pos = r.positions.find((p) => p.id === positionId);
  if (!pos) throw new Error(`Unknown position ${positionId}`);
  return { id, number, name: pos.name, positionId: pos.id, position: pos.name, keywords: pos.keywords.slice(), ma: pos.ma, st: pos.st, ag: pos.ag, pa: pos.pa, av: pos.av, skills: pos.skills.map((s) => ({ ...s })) };
}
function teamLeague(t) {
  return rosterLeague(t.rosterId ? ROSTER_BY_ID[t.rosterId] : void 0, t.league);
}
function teamSpecialRules(t) {
  return rosterSpecialRules(t.rosterId ? ROSTER_BY_ID[t.rosterId] : void 0, t.league, t.favoured);
}
var CAPTAIN_PAGE = 155;
function hasTeamCaptainRule(t) {
  return teamSpecialRules(t).includes("Team Captain");
}
function setCaptain(t, playerId) {
  for (const p of t.players) {
    if (p.id === playerId) p.captain = true;
    else if (p.captain) delete p.captain;
  }
}
function captainIssues(t, out) {
  const caps = t.players.filter((p) => p.captain);
  if (!caps.length) return;
  if (!hasTeamCaptainRule(t)) {
    out.push({ level: "error", text: `Only teams with the Team Captain special rule have a Team Captain (p.${CAPTAIN_PAGE}).` });
    return;
  }
  if (caps.length > 1) out.push({ level: "error", text: `${caps.length} Team Captains nominated: choose one (p.${CAPTAIN_PAGE}).` });
  for (const c of caps) if (c.keywords.includes("Big Guy")) out.push({ level: "error", text: `#${c.number} ${c.name} cannot be the Team Captain: a Big Guy can never be nominated (p.${CAPTAIN_PAGE}).` });
}
function leagueIssues(t, out) {
  const r = t.rosterId ? ROSTER_BY_ID[t.rosterId] : void 0;
  if (!r) return;
  if (t.league !== void 0 && !r.leagues.includes(t.league)) out.push({ level: "error", text: `${r.name} teams play in ${r.leagues.join(" or ")}, not ${t.league} (p.${LEAGUES_PAGE}).` });
  else if (r.leagues.length > 1 && !t.league) out.push({ level: "error", text: `Choose the team's League: ${r.leagues.join(" or ")} (p.${LEAGUES_PAGE}; it cannot be changed later).` });
  if (r.favouredOf) {
    if (!t.favoured) out.push({ level: "error", text: `Choose the team's alignment \u2014 Favoured of ${r.favouredOf.join(", ")} (p.154; it cannot be changed later).` });
    else if (!r.favouredOf.includes(t.favoured)) out.push({ level: "error", text: `${r.name} teams may be Favoured of ${r.favouredOf.join(", ")}, not ${t.favoured} (p.154).` });
  } else if (t.favoured) out.push({ level: "error", text: `${r.name} teams do not choose an alignment (Favoured of\u2026, p.154).` });
}
function groupIssues(t, out = []) {
  const r = t.rosterId ? ROSTER_BY_ID[t.rosterId] : void 0;
  for (const g of r?.groups ?? []) {
    const n = t.players.filter((p) => p.positionId && g.positions.includes(p.positionId)).length;
    if (n > g.max) {
      const names = g.positions.map((id) => r.positions.find((x) => x.id === id)?.name ?? id).join(", ");
      out.push({ level: t.kind === "tournament" || t.variant === "sevens" ? "error" : "warning", text: `${n} players from ${names}: ${g.text.replace(/:$/, "")} \u2014 at most ${g.max} (${r.name} Team Roster, p.${r.page}).` });
    }
  }
  return out;
}
function groupRoom(t, positionId) {
  const r = t.rosterId ? ROSTER_BY_ID[t.rosterId] : void 0;
  let room = Infinity;
  for (const g of r?.groups ?? []) {
    if (!g.positions.includes(positionId)) continue;
    const n = t.players.filter((p) => p.positionId && g.positions.includes(p.positionId)).length;
    room = Math.min(room, g.max - n);
  }
  return room;
}
function teamCost(t) {
  const r = t.rosterId ? ROSTER_BY_ID[t.rosterId] : void 0;
  const T = draftTemplate(t);
  const merc = t.players.reduce((a, p) => a + (p.mercenary ? MERCENARY.extra + (p.mercSkill ? MERCENARY.skillCost : 0) : 0), 0);
  const players = t.players.reduce((a, p) => a + (p.star ? 0 : findPosition(r, p.positionId)?.cost ?? 0), 0);
  const rerolls = (t.variant === "sevens" ? SEVENS_DRAFT.rerollCost : r?.rerollCost ?? 0) * t.rerolls;
  const staff = (t.apothecary ? T.apothecaryCost : 0) + t.assistantCoaches * T.assistantCost + t.cheerleaders * T.cheerleaderCost;
  const fans = (isTournamentTeam(t) ? t.dedicatedFans : Math.max(0, t.dedicatedFans - 1)) * T.fanCost;
  const inducements = inducementCost(t.inducements, teamSpecialRules(t), r, t.variant === "sevens" ? "sevens" : "standard") + merc + starsCost(t.players);
  return { players, rerolls, staff, fans, inducements, total: players + rerolls + staff + fans + inducements };
}
var DRAFT_BUDGETS = [1e6, 11e5, 115e4, 12e5];
function teamBudget(t) {
  if (t.allStar) return t.allStar.budget ?? Number.POSITIVE_INFINITY;
  if (t.budgetCustom && t.budget && t.budget > 0) return t.budget;
  if (t.variant === "sevens") return SEVENS_DRAFT.budget;
  if (isTournamentTeam(t)) return t.budget && MATCHED.standard.budgets.includes(t.budget) ? t.budget : MATCHED.standard.defaultBudget;
  return t.kind === "tournament" && t.budget ? t.budget : DRAFT_TEMPLATE.budget;
}
function budgetsFor(t) {
  if (t.variant === "sevens") return [SEVENS_DRAFT.budget];
  return isTournamentTeam(t) ? MATCHED.standard.budgets : DRAFT_BUDGETS;
}
function fansRange(t) {
  const T = draftTemplate(t);
  return { min: isTournamentTeam(t) ? 0 : T.minFans, max: T.maxFans };
}
function teamSkillPoints(t) {
  const sc = starChoiceSummary(t.players, starChoiceKey);
  return skillPointUse(t, (p) => playerCategories(t, p), sc.choices, sc.mega);
}
function inducementIssues(t, out) {
  const list = Object.entries(t.inducements ?? {}).filter(([, k]) => k > 0);
  const mercs = t.players.filter((p) => p.mercenary);
  const stars = t.players.filter((p) => p.star);
  if (!list.length && !mercs.length && !stars.length) return;
  if (t.allStar) {
    if (list.length || mercs.length) out.push({ level: "error", text: "An All-Star squad has Star Players only (no Inducements or Mercenaries)." });
    return;
  }
  if (t.kind === "league") {
    if (!t.preMatch || t.players.some((p) => (p.star || p.mercenary) && !p.temporary)) {
      out.push({ level: "error", text: "League teams buy Inducements and Star Players for one match in the pre-match step (Petty Cash and Treasury, p.94) \u2014 not on the saved team." });
      return;
    }
  }
  const sevens = t.variant === "sevens";
  if (sevens && (mercs.length || stars.length)) out.push({ level: "error", text: `${mercs.length ? "Mercenary Players" : "Star Players"} are not on the Blood Bowl Sevens Inducement list (Spike! 22 p.${SEVENS_INDUCEMENT_PAGE}).` });
  const r = t.rosterId ? ROSTER_BY_ID[t.rosterId] : void 0;
  const rules = teamSpecialRules(t);
  for (const [id, k] of list) {
    const d2 = inducementFor(id, sevens ? "sevens" : "standard");
    if (!d2) {
      out.push({ level: "error", text: INDUCEMENT_BY_ID[id] ? `${INDUCEMENT_BY_ID[id].name}: ${sevens ? `not on the Blood Bowl Sevens Inducement list (Spike! 22 p.${SEVENS_INDUCEMENT_PAGE})` : "Blood Bowl Sevens only (Spike! 22 p.15)"}.` : `Unknown Inducement "${id}".` });
      continue;
    }
    const why = d2.unavailable(rules, r);
    if (why) out.push({ level: "error", text: `${d2.name}: ${why} (p.${d2.page}).` });
    if (k > d2.max(rules)) out.push({ level: "error", text: `${k} \xD7 ${d2.name}: at most ${d2.max(rules)} (p.${d2.page}).` });
  }
  if (mercs.length > MERCENARY.max) out.push({ level: "error", text: `${mercs.length} Mercenary Players: at most ${MERCENARY.max} (p.${MERCENARY.page}).` });
  for (const p of mercs) {
    if (!p.mercSkill) continue;
    const pos = r?.positions.find((x) => x.id === p.positionId);
    const cat = skillCategory(p.mercSkill);
    if (!SKILL_BY_ID[p.mercSkill]) out.push({ level: "error", text: `#${p.number}: unknown skill "${p.mercSkill}".` });
    else if (!pos || !cat || !pos.primary.includes(cat)) out.push({ level: "error", text: `#${p.number} ${p.name}: a Mercenary's extra skill must be one of the position's Primary skills (p.${MERCENARY.page}).` });
    else if (p.skills.some((k) => k.id === p.mercSkill)) out.push({ level: "error", text: `#${p.number} ${p.name} already has ${SKILL_BY_ID[p.mercSkill].name}.` });
  }
  starIssues(t, rules, out);
}
function starIssues(t, rules, out) {
  const stars = t.players.filter((p) => p.star);
  if (!stars.length) return;
  const league = teamLeague(t);
  const n = starChoices(stars);
  if (n > STAR_MAX) out.push({ level: "error", text: `${n} Star Players: a team may hire at most ${STAR_MAX} (a pair counts as one, p.${STAR_RULE.page}).` });
  const mega = starChoiceSummary(stars, starChoiceKey).mega;
  if (mega > 1 && !isTournamentTeam(t)) out.push({ level: "warning", text: `${mega} Mega-stars: in Matched Play a team may have only one (p.113); allowed here because this is not a Tournament team.` });
  const seen = /* @__PURE__ */ new Set();
  for (const p of stars) {
    const st = STAR_BY_ID[p.star];
    if (!st) {
      out.push({ level: "error", text: `#${p.number}: unknown Star Player "${p.star}".` });
      continue;
    }
    if (seen.has(st.id)) out.push({ level: "error", text: `${st.name} is hired twice.` });
    seen.add(st.id);
    if (!starSupported(st.id)) out.push({ level: "error", text: `${st.name}: their special rule "${st.rule.name}" is not implemented yet, so they cannot play.` });
    if (!starPlaysFor(st, league, rules)) out.push({ level: "error", text: `${st.name} plays for ${playsForText(st)} \u2014 not for this team (${league ?? "no League"}${rules.length ? `; ${rules.join(", ")}` : ""}, p.${STAR_LIST_PAGE}).` });
    if (st.pair && !stars.some((q) => q.star === st.pair)) out.push({ level: "error", text: `${st.name} must be hired together with ${STAR_BY_ID[st.pair]?.name ?? st.pair} (p.${st.page}).` });
    const same = p.ma === st.ma && p.st === st.st && p.ag === st.ag && p.pa === st.pa && p.av === st.av && JSON.stringify(p.skills) === JSON.stringify(st.skills);
    if (!same) out.push({ level: "error", text: `#${p.number} ${st.name}: Star Players play with their printed profile (p.${st.page}).` });
    if (p.mercenary || p.captain || p.veteran) out.push({ level: "error", text: `#${p.number} ${st.name}: a Star Player cannot be a Mercenary, the Team Captain or the Veteran.` });
    if (st.id === "josefBugmanStar" && (t.inducements?.josefBugman ?? 0) > 0) out.push({ level: "error", text: "A team that hired Josef Bugman as Infamous Coaching Staff cannot also hire him as a Star Player (p.147)." });
  }
}
function starAddReason(t, id) {
  const st = STAR_BY_ID[id];
  if (!st) return "Unknown Star Player.";
  if (t.allStar) return allStarAddReason(t, id);
  if (t.kind === "league") return "League teams hire Star Players for one match in the pre-match Inducements step (Petty Cash and Treasury, p.94): Match set-up \u2192 League \u2192 Pre-match Inducements.";
  if (t.variant === "sevens") return "Blood Bowl Sevens: the Sevens Inducements (Spike! 22 p.16) include no Star Players (an All-Star Sevens match is a custom Exhibition variant).";
  if (!starSupported(id)) return `Their special rule "${st.rule.name}" is not implemented yet.`;
  if (!starPlaysFor(st, teamLeague(t), teamSpecialRules(t))) return `Plays for ${playsForText(st)} (p.${STAR_LIST_PAGE}).`;
  if (t.players.some((p) => p.star === id)) return "Already hired.";
  const key3 = starChoiceKey(id);
  if (!t.players.some((p) => p.star && starChoiceKey(p.star) === key3) && starChoices(t.players) >= STAR_MAX) return `At most ${STAR_MAX} Star Players (p.${STAR_RULE.page}).`;
  const places = st.pair ? 2 : 1;
  if (t.players.length + places > DRAFT_TEMPLATE.maxPlayers) return `No room: a team may never have more than ${DRAFT_TEMPLATE.maxPlayers} players (p.${STAR_RULE.page}).`;
  if (id === "josefBugmanStar" && (t.inducements?.josefBugman ?? 0) > 0) return "The team hired Josef Bugman as Infamous Coaching Staff (p.147).";
  if (isTournamentTeam(t)) {
    if (!t.tier) return "Choose the team's Tier first: in Matched Play a Star Player costs 2 Skill Points (p.113).";
    const F = MATCHED.standard;
    const choices = starChoices(t.players);
    if (choices >= F.starsMax[t.tier]) return `A Tier ${t.tier} team may have at most ${F.starsMax[t.tier]} Star Player${F.starsMax[t.tier] === 1 ? "" : "s"} (p.113).`;
    const mega = isMegaStar(id);
    if (mega && starChoiceSummary(t.players, starChoiceKey).mega >= 1) return "A team may only ever have a single Mega-star (p.113).";
    const cost = mega ? MEGA_STAR_COST : F.starCost ?? 2;
    const u = teamSkillPoints(t);
    if (u.allowance - u.spent < cost) return `Needs ${cost} Skill Points${mega ? " (a Mega-star)" : ""} (${u.allowance - u.spent} left of ${u.allowance}, p.113).`;
  }
  const left = teamBudget(t) - teamCost(t).total;
  if (st.cost > left) return `Costs ${st.cost.toLocaleString("en-GB")} gp \u2014 ${Math.max(0, left).toLocaleString("en-GB")} gp left of the ${teamBudget(t).toLocaleString("en-GB")} gp budget.`;
  return null;
}
var ALL_STAR_DEFAULTS = { standard: { maxStars: 16, budget: null }, sevens: { maxStars: 11, budget: null } };
function newAllStarSquad(id, name, variant = "standard", opts = {}) {
  const d2 = ALL_STAR_DEFAULTS[variant === "sevens" ? "sevens" : "standard"];
  const t = newTeamDef("tournament", void 0, name, id, variant === "sevens" ? "sevens" : void 0);
  t.play = "exhibition";
  t.allStar = { budget: opts.budget === void 0 ? d2.budget : opts.budget, maxStars: opts.maxStars ?? d2.maxStars };
  t.rerolls = 0;
  t.dedicatedFans = 1;
  t.color = "#6b3fa0";
  t.accent = "#ffd76a";
  return t;
}
function allStarAddReason(t, id) {
  const st = STAR_BY_ID[id];
  if (!st || !t.allStar) return "Unknown Star Player.";
  if (!starSupported(id)) return `Their special rule "${st.rule.name}" is not implemented yet.`;
  if (t.players.some((p) => p.star === id)) return "Already in this squad (each Star Player once per squad).";
  const places = st.pair && !t.players.some((p) => p.star === st.pair) ? 2 : 1;
  if (t.players.length + places > t.allStar.maxStars) return `Squad limit: at most ${t.allStar.maxStars} Star Players${st.pair ? ` (${st.name} comes with ${STAR_BY_ID[st.pair]?.name ?? st.pair})` : ""}.`;
  if (t.allStar.budget !== null) {
    const left = t.allStar.budget - starsCost(t.players);
    const fee = st.pair && t.players.some((p) => p.star === st.pair) ? 0 : st.cost;
    if (fee > left) return `Costs ${fee.toLocaleString("en-GB")} gp \u2014 ${Math.max(0, left).toLocaleString("en-GB")} gp left of the squad budget.`;
  }
  return null;
}
function allStarIssues(t, out) {
  const a = t.allStar;
  const sevens = t.variant === "sevens";
  out.push({ level: "warning", text: `All-Star Match \u2014 a custom Exhibition variant (not rulebook play): Star Players only, no two-Star cap, squad limit ${a.maxStars}, ${a.budget === null ? "unrestricted budget" : `budget ${a.budget.toLocaleString("en-GB")} gp`}.` });
  const others = t.players.filter((p) => !p.star);
  if (others.length) out.push({ level: "error", text: "An All-Star squad has Star Players only." });
  if (t.players.length < 3) out.push({ level: "error", text: `${t.players.length} Star Player${t.players.length === 1 ? "" : "s"}: an All-Star squad needs at least 3 (the Line of Scrimmage needs three players, p.47).` });
  else if (t.players.length < (sevens ? 7 : 11)) out.push({ level: "warning", text: `${t.players.length} Star Players: the squad will set up all of them (fewer than ${sevens ? 7 : 11}, p.47).` });
  if (t.players.length > a.maxStars) out.push({ level: "error", text: `${t.players.length} Star Players: this squad allows at most ${a.maxStars}.` });
  if (t.players.length > (sevens ? SEVENS_DRAFT.maxPlayers : DRAFT_TEMPLATE.maxPlayers)) out.push({ level: "error", text: `A team may never have more than ${sevens ? SEVENS_DRAFT.maxPlayers : DRAFT_TEMPLATE.maxPlayers} players.` });
  const seen = /* @__PURE__ */ new Set();
  for (const p of t.players) {
    if (!p.star) continue;
    const st = STAR_BY_ID[p.star];
    if (!st) {
      out.push({ level: "error", text: `#${p.number}: unknown Star Player "${p.star}".` });
      continue;
    }
    if (seen.has(st.id)) out.push({ level: "error", text: `${st.name} is in the squad twice (each Star Player once per squad).` });
    seen.add(st.id);
    if (!starSupported(st.id)) out.push({ level: "error", text: `${st.name}: their special rule is not implemented yet.` });
    if (st.pair && !t.players.some((q) => q.star === st.pair)) out.push({ level: "error", text: `${st.name} must be hired together with ${STAR_BY_ID[st.pair]?.name ?? st.pair} (p.${st.page}).` });
    const same = p.ma === st.ma && p.st === st.st && p.ag === st.ag && p.pa === st.pa && p.av === st.av && JSON.stringify(p.skills) === JSON.stringify(st.skills);
    if (!same) out.push({ level: "error", text: `#${p.number} ${st.name}: Star Players play with their printed profile (p.${st.page}).` });
  }
  if (a.budget !== null && starsCost(t.players) > a.budget) out.push({ level: "error", text: `The squad's hiring fees are ${starsCost(t.players).toLocaleString("en-GB")} gp: over its ${a.budget.toLocaleString("en-GB")} gp budget.` });
  if (t.rerolls < 0 || t.rerolls > 8) out.push({ level: "error", text: "Team Re-rolls: 0-8." });
  return out;
}
function playerFromStar(id, number, playerId) {
  const st = STAR_BY_ID[id];
  if (!st) throw new Error(`Unknown Star Player ${id}`);
  return { id: playerId, number, name: st.name, position: st.name, keywords: st.keywords.slice(), ma: st.ma, st: st.st, ag: st.ag, pa: st.pa, av: st.av, skills: starSkills(st), star: st.id };
}
function addStar(t, id, newId) {
  const st = STAR_BY_ID[id];
  if (!st) return [];
  const ids = st.pair && !t.players.some((p) => p.star === st.pair) ? [id, st.pair] : [id];
  const added = [];
  for (const sid of ids) {
    const used = new Set(t.players.map((p2) => p2.number));
    let n = 1;
    while (used.has(n)) n++;
    const p = playerFromStar(sid, n, newId());
    t.players.push(p);
    added.push(p);
  }
  return added;
}
function removeStar(t, id) {
  const st = STAR_BY_ID[id];
  t.players = t.players.filter((p) => p.star !== id && (!st?.pair || p.star !== st.pair));
}
function expectedProfile(t, pos, p) {
  return t.variant === "sevens" && p.veteran ? pos.ma - 1 : pos.ma;
}
function setVeteran(t, playerId) {
  for (const p of t.players) {
    if (p.veteran && p.id !== playerId) {
      p.veteran = void 0;
      p.ma += 1;
    }
  }
  const v = t.players.find((p) => p.id === playerId);
  if (v && !v.veteran) {
    v.veteran = true;
    v.ma -= 1;
  }
}
var SEVENS_INSIGNIFICANT = {
  label: "Sevens exception: Insignificant ignored when drafting",
  text: "Blood Bowl Sevens in Bloodboard: the Insignificant limit (no more players with the Trait than without it, rulebook p.129) is ignored when drafting a Sevens team \u2014 the chosen house setting, following the optional NAF BB2025 Sevens recommendation (not a Games Workshop erratum). The Trait stays on the players; the 600,000 gp budget, the roster position limits, at most four non-Linemen, 7-11 players and seven players on the pitch (Swarming aside) still apply. 11-a-side teams keep the rulebook limit.",
  source: "NAF Recommendations and Clarifications for BB2025 \u2014 Sevens (optional, event-declared)"
};
function usesSevensInsignificantException(t) {
  if (t.variant !== "sevens") return false;
  const insig = t.players.filter((p) => p.skills.some((k) => k.id === "insignificant")).length;
  return insig > t.players.length - insig;
}
function validateTeamDef(t) {
  const out = [];
  const available = t.players.filter((p) => !p.unavailable);
  if (!t.name.trim()) out.push({ level: "error", text: "The team needs a name." });
  if (available.length < 1) out.push({ level: "error", text: "The team has no available players." });
  const nums = /* @__PURE__ */ new Set();
  for (const p of t.players) {
    if (nums.has(p.number)) out.push({ level: "error", text: `Two players wear #${p.number}.` });
    nums.add(p.number);
    for (const sk4 of p.skills) {
      const def = SKILL_BY_ID[sk4.id];
      if (!def) out.push({ level: "error", text: `#${p.number} has an unknown skill "${sk4.id}".` });
      else if (def.support === "unsupported") out.push({ level: "warning", text: `#${p.number} ${p.name}: ${def.name} is not implemented \u2014 ${def.note ?? "affected actions are disabled"}` });
    }
  }
  const insig = t.players.filter((p) => p.skills.some((k) => k.id === "insignificant")).length;
  const evolvedLeague = t.kind === "league" && (!!t.sppMatches?.length || t.players.some((p) => (p.spp ?? 0) > 0 || !!p.advancements?.length));
  if (insig > t.players.length - insig && t.variant !== "sevens" && !evolvedLeague) out.push({ level: t.kind === "tournament" ? "error" : "warning", text: `${insig} players with Insignificant: ${t.kind === "league" ? "an initial League Team Draft List" : "a Team Draft List"} may not include more of them than players without it (p.129). A League team may exceed this later by hiring and firing (FAQ May 2026).` });
  if (t.allStar) return allStarIssues(t, out);
  leagueIssues(t, out);
  captainIssues(t, out);
  groupIssues(t, out);
  inducementIssues(t, out);
  if (t.variant === "sevens") return validateSevensDraft(t, out);
  if (t.players.length > DRAFT_TEMPLATE.maxPlayers) out.push({ level: t.kind === "tournament" ? "error" : "warning", text: `${t.players.length} players: a team may never have more than 16 (p.89).` });
  if (t.players.some((p) => p.veteran)) out.push({ level: "error", text: "Only Blood Bowl Sevens teams have a Veteran." });
  if (t.kind === "league") {
    if (available.length < 11) out.push({ level: "warning", text: `Only ${available.length} available players: the team will set up as many as it can (p.47).` });
    if (t.rerolls > 8) out.push({ level: "warning", text: "More than 8 Team Re-rolls (the draft limit is 8, p.90)." });
    skillPointIssues(t, out);
    return out;
  }
  const r = t.rosterId ? ROSTER_BY_ID[t.rosterId] : void 0;
  if (!r) {
    out.push({ level: "error", text: "Choose an official Team Roster." });
    return out;
  }
  if (t.players.length < DRAFT_TEMPLATE.minPlayers) out.push({ level: "error", text: `${t.players.length} players: a drafted team needs at least 11 (p.89).` });
  for (const pos of r.positions) {
    const max = Number(pos.qty.split("-")[1]);
    const n = t.players.filter((p) => p.positionId === pos.id).length;
    if (n > max) out.push({ level: "error", text: `${n} \xD7 ${pos.name}: the roster allows ${pos.qty}.` });
  }
  for (const p of t.players) {
    if (p.star) continue;
    const pos = r.positions.find((x) => x.id === p.positionId);
    if (!pos) {
      if (isRetiredPosition(r, p.positionId)) out.push({ level: "error", text: `#${p.number} ${p.name} is a retired ${r.name} position (earlier table): it can no longer be hired. The saved team still loads; replace this player with a position of the current table.` });
      else out.push({ level: "error", text: `#${p.number} is not a ${r.name} roster player.` });
      continue;
    }
    const same = pos.ma === p.ma && pos.st === p.st && pos.ag === p.ag && pos.pa === p.pa && pos.av === p.av && JSON.stringify(pos.skills) === JSON.stringify(p.skills);
    if (!same) out.push({ level: "error", text: `#${p.number} ${p.name}: tournament teams use the roster profile unchanged.` });
    if (p.unavailable) out.push({ level: "error", text: `#${p.number} is marked unavailable (league option).` });
  }
  if (t.rerolls < 0 || t.rerolls > DRAFT_TEMPLATE.maxRerolls) out.push({ level: "error", text: "Team Re-rolls: 0-8 (p.90)." });
  if (t.apothecary && !r.apothecary) out.push({ level: "error", text: `${r.name} teams cannot hire an Apothecary.` });
  if (t.assistantCoaches < 0 || t.assistantCoaches > DRAFT_TEMPLATE.maxAssistants) out.push({ level: "error", text: "Assistant Coaches: 0-6 (p.90)." });
  if (t.cheerleaders < 0 || t.cheerleaders > DRAFT_TEMPLATE.maxCheerleaders) out.push({ level: "error", text: "Cheerleaders: 0-6 (p.90)." });
  const fr = fansRange(t);
  if (t.dedicatedFans < fr.min || t.dedicatedFans > fr.max) out.push({ level: "error", text: isTournamentTeam(t) ? `Dedicated Fans: ${fr.min}-${fr.max} (Matched Play teams start at 0, p.110).` : "Dedicated Fans: 1-3 when drafting (p.91)." });
  const cost = teamCost(t);
  const budget = teamBudget(t);
  const budgets = budgetsFor(t);
  if (t.budget !== void 0 && !t.budgetCustom && !budgets.includes(t.budget)) out.push({ level: isTournamentTeam(t) ? "warning" : "error", text: `Team Draft Budget ${t.budget.toLocaleString("en-GB")} gp: choose ${budgets.map((b) => b.toLocaleString("en-GB")).join(", ")} (${isTournamentTeam(t) ? "p.110 \u2014 using the default" : "pp.89, 110"}), or mark it as custom rules.` });
  if (t.budgetCustom) out.push({ level: "warning", text: `Custom rules: a ${budget.toLocaleString("en-GB")} gp Team Draft Budget set by the event or the coaches (the rulebook's usual values are ${budgets.map((b) => b.toLocaleString("en-GB")).join(", ")} gp).` });
  if (cost.total > budget) out.push({ level: "error", text: `Team costs ${cost.total.toLocaleString("en-GB")} gp: over the ${budget.toLocaleString("en-GB")} gp Team Draft Budget (${t.budgetCustom ? "custom rules" : budget === DRAFT_TEMPLATE.budget ? "p.89" : "p.110"}).` });
  skillPointIssues(t, out);
  return out;
}
function skillPointIssues(t, out) {
  const sc = starChoiceSummary(t.players, starChoiceKey);
  matchedIssues(t, (p) => playerCategories(t, p), sc.choices, (id) => SKILL_BY_ID[id]?.name ?? id, out, sc.mega);
}
function validateSevensDraft(t, out) {
  const S2 = SEVENS_DRAFT;
  const pg = (n) => `Sevens p.${n}`;
  if (t.kind !== "tournament") out.push({ level: "error", text: "Sevens teams play Exhibition matches: Sevens League play (random-skill advancement, Spike! 22 pp.14-17) is not implemented." });
  const r = t.rosterId ? ROSTER_BY_ID[t.rosterId] : void 0;
  if (!r) {
    out.push({ level: "error", text: "Choose an official Team Roster." });
    return out;
  }
  if (t.players.length < S2.minPlayers) out.push({ level: "error", text: `${t.players.length} players: a Sevens team needs at least ${S2.minPlayers} (${pg(8)}).` });
  if (t.players.length > S2.maxPlayers) out.push({ level: "error", text: `${t.players.length} players: a Sevens team may never have more than ${S2.maxPlayers} (${pg(8)}).` });
  for (const pos of r.positions) {
    const max = Number(pos.qty.split("-")[1]);
    const n = t.players.filter((p) => p.positionId === pos.id).length;
    if (n > max) out.push({ level: "error", text: `${n} \xD7 ${pos.name}: the roster allows ${pos.qty} (still applies in Sevens, ${pg(8)}).` });
  }
  const nonLine = t.players.filter((p) => !p.keywords.includes("Lineman")).length;
  if (nonLine > S2.maxNonLineman) out.push({ level: "error", text: `${nonLine} players without the Lineman keyword: a Sevens team can include no more than ${S2.maxNonLineman} (${pg(8)}).` });
  for (const p of t.players) {
    if (p.star) continue;
    const pos = r.positions.find((x) => x.id === p.positionId);
    if (!pos) {
      if (isRetiredPosition(r, p.positionId)) out.push({ level: "error", text: `#${p.number} ${p.name} is a retired ${r.name} position (earlier table): it can no longer be hired. The saved team still loads; replace this player with a position of the current table.` });
      else out.push({ level: "error", text: `#${p.number} is not a ${r.name} roster player.` });
      continue;
    }
    const same = expectedProfile(t, pos, p) === p.ma && pos.st === p.st && pos.ag === p.ag && pos.pa === p.pa && pos.av === p.av && JSON.stringify(pos.skills) === JSON.stringify(p.skills);
    if (!same) out.push({ level: "error", text: `#${p.number} ${p.name}: Sevens teams use the roster profile unchanged${p.veteran ? " (the Veteran with MA \u22121)" : ""}.` });
    if (p.unavailable) out.push({ level: "error", text: `#${p.number} is marked unavailable (league option).` });
  }
  const vets = t.players.filter((p) => p.veteran);
  if (vets.length !== 1) out.push({ level: "error", text: `Choose exactly one Lineman as the team's Veteran (${vets.length} chosen, ${pg(13)}).` });
  for (const v of vets) if (!v.keywords.includes("Lineman")) out.push({ level: "error", text: `#${v.number} ${v.name} cannot be the Veteran: it must be a Lineman (${pg(13)}).` });
  if (t.rerolls < 0 || t.rerolls > S2.maxRerolls) out.push({ level: "error", text: `Team Re-rolls: 0-${S2.maxRerolls} (p.90; ${S2.rerollCost / 1e3}k each in Sevens, ${pg(9)}).` });
  if (t.apothecary && !r.apothecary) out.push({ level: "error", text: `${r.name} teams cannot hire an Apothecary.` });
  if (t.assistantCoaches < 0 || t.assistantCoaches > S2.maxAssistants) out.push({ level: "error", text: `Assistant Coaches: 0-${S2.maxAssistants} in Sevens (${pg(9)}).` });
  if (t.cheerleaders < 0 || t.cheerleaders > S2.maxCheerleaders) out.push({ level: "error", text: `Cheerleaders: 0-${S2.maxCheerleaders} in Sevens (${pg(9)}).` });
  const fr = fansRange(t);
  if (t.dedicatedFans < fr.min || t.dedicatedFans > fr.max) out.push({ level: "error", text: `Dedicated Fans: ${fr.min}-${fr.max} in Sevens (${isTournamentTeam(t) ? `Matched Play teams start at 0, ${pg(18)}` : pg(9)}).` });
  const cost = teamCost(t);
  const sb = teamBudget(t);
  if (t.budgetCustom) out.push({ level: "warning", text: `Custom rules: a ${sb.toLocaleString("en-GB")} gp Sevens Team Draft Budget (standard Sevens: ${S2.budget.toLocaleString("en-GB")} gp, ${pg(8)}).` });
  if (cost.total > sb) out.push({ level: "error", text: `Team costs ${cost.total.toLocaleString("en-GB")} gp: over the ${sb.toLocaleString("en-GB")} gp Sevens Team Draft Budget (${t.budgetCustom ? "custom rules" : pg(8)}).` });
  skillPointIssues(t, out);
  return out;
}
function parseTeamDef(text) {
  let v;
  try {
    v = JSON.parse(text);
  } catch (e) {
    return { ok: false, errors: [`Not JSON: ${e.message}`] };
  }
  const t = v;
  const errors = [];
  if (t.format !== "bloodboard-team" || t.version !== 1) errors.push('Not a Bloodboard team file (format "bloodboard-team", version 1).');
  if (t.kind !== "league" && t.kind !== "tournament") errors.push('kind must be "league" or "tournament".');
  if (t.variant !== void 0 && t.variant !== "standard" && t.variant !== "sevens") errors.push('variant must be "sevens" or absent.');
  if (!Array.isArray(t.players)) errors.push("players must be a list.");
  if (typeof t.name !== "string") errors.push("name is missing.");
  if (errors.length) return { ok: false, errors };
  return { ok: true, team: t };
}

// src/engine/spp.ts
var SPP_RULE = { page: 96, title: "Earning Star Player Points" };
function awardSpp(ctx, p, kind) {
  var _a;
  const m = ctx.s.match;
  if (!p || !m || m.kind !== "league" || ctx.mode === "plan" || p.star) return;
  const book = m.spp ?? (m.spp = {});
  const t = book[_a = p.id] ?? (book[_a] = {});
  t[kind] = (t[kind] ?? 0) + 1;
  const rules = ctx.s.teams[p.team].specialRules;
  const n = sppAward(kind, rules);
  const brutes = n !== SPP_AWARD[kind];
  ctx.emit("note", `${label(p)} earns ${n} SPP (${SPP_LABEL[kind]}${brutes ? ", Brawlin' Brutes" : ""}).`, brutes ? { page: BRAWLIN_BRUTES_PAGE, title: "Brawlin' Brutes" } : SPP_RULE, { spp: kind, playerId: p.id });
}
function sppTotal(t, specialRules) {
  if (!t) return 0;
  let n = 0;
  for (const k of Object.keys(SPP_AWARD)) n += (t[k] ?? 0) * sppAward(k, specialRules);
  return n;
}
function matchSpp(m, s) {
  const out = {};
  for (const [id, t] of Object.entries(m?.spp ?? {})) {
    const team2 = s?.players.find((p) => p.id === id)?.team;
    out[id] = sppTotal(t, team2 ? s?.teams[team2].specialRules : void 0);
  }
  return out;
}
function matchKey(s) {
  return `${s.rng.seed}:${s.match?.teamIds.A ?? ""}:${s.match?.teamIds.B ?? ""}`;
}
function mvpEligible(s, team2) {
  const played = s.match?.played;
  return s.players.filter((p) => p.team === team2 && !p.star && (played ? played.includes(p.id) : true)).sort((a, b) => a.number - b.number);
}
function postGameSpp(s, team2) {
  const book = s.match?.spp ?? {};
  const rows = [];
  for (const p of s.players) {
    if (p.team !== team2) continue;
    const t = book[p.id];
    const total = sppTotal(t, s.teams[team2].specialRules);
    if (total > 0) rows.push({ id: p.id, defId: p.defId, number: p.number, name: p.name, tally: { ...t }, total });
  }
  return rows.sort((a, b) => b.total - a.total || a.number - b.number);
}
function defaultMvpNominees(s, team2) {
  const earned = matchSpp(s.match, s);
  return mvpEligible(s, team2).slice().sort((a, b) => (earned[b.id] ?? 0) - (earned[a.id] ?? 0) || a.number - b.number).slice(0, 6).map((p) => p.id);
}
function applyMatchSpp(def, s, team2, opts = {}) {
  const m = s.match;
  if (!m || m.kind !== "league") throw new Error("Only League matches award Star Player Points (p.96).");
  if (s.phase !== "fullTime") throw new Error("Star Player Points are added after the final whistle.");
  const key3 = matchKey(s);
  if (m.sppApplied?.[team2] || def.sppMatches?.includes(key3)) throw new Error("These Star Player Points have already been added to the team.");
  const out = { ...def, players: def.players.map((p) => ({ ...p })), sppMatches: [...def.sppMatches ?? [], key3] };
  const added = [];
  for (const row of postGameSpp(s, team2)) {
    const tp = row.defId ? out.players.find((p) => p.id === row.defId) : void 0;
    if (!tp) continue;
    tp.spp = (tp.spp ?? 0) + row.total;
    added.push({ defId: tp.id, name: row.name, spp: row.total });
  }
  const hired = [];
  const r = def.rosterId ? ROSTER_BY_ID[def.rosterId] : void 0;
  if (opts.hireRaised !== false && r) {
    for (const p of raisedDead(s, team2)) {
      if (out.players.length >= 16) break;
      const nums = new Set(out.players.map((q) => q.number));
      let n = p.number;
      while (nums.has(n)) n++;
      const np = playerFromRoster(r, p.raised, n, `${key3}-raised-${p.id}`);
      out.players.push(np);
      hired.push(`#${np.number} ${np.name}`);
    }
  }
  return { team: out, added, hired };
}
function raisedDead(s, team2) {
  return s.players.filter((p) => p.team === team2 && p.raised);
}

// src/engine/setup.ts
var DEFAULT_RULER_WIDTH = 1.8;
function newTeam(id, name, rosterId) {
  const r = rosterId ? ROSTER_BY_ID[rosterId] : void 0;
  return {
    id,
    name,
    rosterId,
    color: r?.color ?? (id === "A" ? "#1f4e9c" : "#8c1c1c"),
    accent: r?.accent ?? "#f4f1e8",
    rerolls: 2,
    leaderReroll: false,
    score: 0,
    turn: 1
  };
}
function newGame(opts = {}) {
  return {
    format: "bloodboard-state",
    version: 1,
    phase: "setup",
    rulesEdition: "faq2026",
    weather: opts.weather ?? "perfect",
    teams: {
      A: newTeam("A", opts.a?.name ?? "Home", opts.a?.roster),
      B: newTeam("B", opts.b?.name ?? "Away", opts.b?.roster)
    },
    players: [],
    ball: { kind: "none" },
    turn: {
      active: "A",
      half: 2,
      used: { blitz: false, pass: false, handoff: false, foul: false, secure: false, ttm: false, bomb: false, punt: false, ktm: false },
      stunnedAtStart: [],
      activation: null
    },
    rng: { seed: opts.seed ?? randomSeed(), counter: 0 },
    options: { rulerWidth: DEFAULT_RULER_WIDTH },
    log: [],
    pending: null
  };
}
function nextPlayerId(s, team2) {
  let n = 1;
  while (s.players.some((p) => p.id === `${team2}${n}`)) n++;
  return `${team2}${n}`;
}
function nextNumber(s, team2) {
  let n = 1;
  while (s.players.some((p) => p.team === team2 && p.number === n)) n++;
  return n;
}
function playerFromPosition(s, team2, pos, at, number) {
  return {
    id: nextPlayerId(s, team2),
    team: team2,
    number: number ?? nextNumber(s, team2),
    name: pos.name,
    position: pos.name,
    keywords: pos.keywords.slice(),
    ma: pos.ma,
    st: pos.st,
    ag: pos.ag,
    pa: pos.pa,
    av: pos.av,
    skills: pos.skills.map((x) => ({ ...x })),
    location: at ? "pitch" : "reserves",
    pos: at ? { ...at } : null,
    stance: "standing",
    distracted: false,
    activated: false,
    usage: {}
  };
}
function customPlayer(s, team2, p, at) {
  return {
    id: nextPlayerId(s, team2),
    team: team2,
    number: p.number ?? nextNumber(s, team2),
    name: p.name ?? p.position,
    position: p.position,
    keywords: p.keywords ?? [],
    ma: p.ma ?? 6,
    st: p.st ?? 3,
    ag: p.ag ?? 3,
    pa: p.pa === void 0 ? 4 : p.pa,
    av: p.av ?? 9,
    skills: (p.skills ?? []).map((x) => ({ ...x })),
    location: at ? "pitch" : "reserves",
    pos: at ? { ...at } : null,
    stance: p.stance ?? "standing",
    distracted: p.distracted ?? false,
    activated: false,
    usage: {}
  };
}
function validatePosition(s) {
  usePitch(s);
  const out = [];
  const onP = s.players.filter(onPitch);
  for (let i = 0; i < onP.length; i++) {
    const p = onP[i];
    if (!inBounds(p.pos)) out.push({ level: "error", text: `#${p.number} (${p.team}) is off the pitch.` });
    for (let j = i + 1; j < onP.length; j++) if (eq(p.pos, onP[j].pos)) out.push({ level: "error", text: `Two players share ${fmt(p.pos)}.` });
  }
  for (const t of ["A", "B"]) {
    const n = onP.filter((p) => p.team === t).length;
    if (n > 11) out.push({ level: "warning", text: `${s.teams[t].name} has ${n} players on the pitch (normally at most 11).` });
    const tm = s.teams[t];
    if (tm.turn < 0 || tm.turn > 8) out.push({ level: "error", text: `${tm.name}: the Turn marker must be between 0 and 8.` });
  }
  if (s.teams[s.turn.active].turn < 1) out.push({ level: "error", text: "The active team must be on Turn 1-8." });
  if (s.ball.kind === "held") {
    const h = s.players.find((p) => p.id === s.ball.playerId);
    if (!h || !onPitch(h)) out.push({ level: "error", text: "The ball carrier must be on the pitch." });
    else if (h.stance !== "standing") out.push({ level: "error", text: "Only a Standing player can hold the ball." });
    else if (inScoringEndZone(h.team, h.pos)) out.push({ level: "error", text: "A Standing ball carrier in the opposition End Zone would already have scored." });
  } else if (s.ball.kind === "ground") {
    const b = s.ball.pos;
    if (!inBounds(b)) out.push({ level: "error", text: "The ball is off the pitch." });
    if (onP.some((p) => eq(p.pos, b))) out.push({ level: "error", text: `A loose ball cannot share ${fmt(b)} with a player: give it to the player or move it.` });
  } else {
    out.push({ level: "warning", text: "There is no ball on the pitch." });
  }
  for (const p of s.players) {
    for (const sk4 of p.skills) {
      const def = SKILL_BY_ID[sk4.id];
      if (!def) out.push({ level: "error", text: `#${p.number} (${p.team}) has an unknown skill "${sk4.id}".` });
      else if (def.support === "unsupported") out.push({ level: "warning", text: `#${p.number} (${s.teams[p.team].name}) has ${def.name}: not implemented \u2014 ${def.note ?? "affected actions are disabled"}` });
    }
    if (p.distracted && p.stance !== "standing") out.push({ level: "error", text: `#${p.number}: only Standing players can be Distracted.` });
  }
  return out;
}
function startPlay(state) {
  const s = cloneState(state);
  s.phase = "play";
  s.pending = null;
  s.turn.activation = null;
  s.turn.used = { blitz: false, pass: false, handoff: false, foul: false, secure: false, ttm: false, bomb: false, punt: false, ktm: false };
  s.touchdown = void 0;
  for (const p of s.players) {
    p.activated = false;
    p.usage = {};
    if (p.location !== "pitch") p.pos = null;
    if (p.stance !== "standing") p.distracted = false;
  }
  s.turn.stunnedAtStart = s.players.filter((p) => p.team === s.turn.active && p.location === "pitch" && p.stance === "stunned").map((p) => p.id);
  return s;
}
function backToSetup(state) {
  const s = cloneState(state);
  s.phase = "setup";
  s.pending = null;
  s.turn.activation = null;
  return s;
}

// src/engine/prayers.ts
var PRAYER_RULE = { page: 143, title: "Prayers to Nuffle" };
var PRAYERS = {
  1: { name: "Treacherous Trapdoor", text: "Each time a player from either team enters a Trapdoor square, roll a D6: on a 1 the player falls through (an Injury Roll as if Pushed into the Crowd; the ball Bounces from the Trapdoor)." },
  2: { name: "Friends with the Ref", text: "When you Argue the Call, a 5 or 6 keeps the player." },
  3: { name: "Stiletto", text: "A random player of your team gains Stab for the game." },
  4: { name: "Iron Man", text: "A player of your choice improves their AV by 1 (max 11+) for the game." },
  5: { name: "Knuckle Dusters", text: "A player of your choice gains Mighty Blow for the game." },
  6: { name: "Bad Habits", text: "D3 random opposition players gain Loner (2+) for the game." },
  7: { name: "Greasy Cleats", text: "A random opposition player has MA \u22121 (min 1) for the game." },
  8: { name: "Blessing of Nuffle", text: "A random player of your team gains Pro for the game." },
  9: { name: "Moles under the Pitch", text: "Opposition players apply \u22121 when they Rush." },
  10: { name: "Perfect Passing", text: "Completions earn 2 SPP (League play only)." },
  11: { name: "Dazzling Catching", text: "Catching a Pass earns 1 SPP (League play only)." },
  12: { name: "Fan Interaction", text: "A Casualty from a Push into the Crowd earns the pusher 2 SPP (League play only)." },
  13: { name: "Fouling Frenzy", text: "A Casualty from a Foul earns 2 SPP (League play only)." },
  14: { name: "Throw a Rock", text: "Once per game, at the start of your Turn before any activation: a random opposition player on the pitch; D6 4+ and they are Knocked Down." },
  15: { name: "Under Scrutiny", text: "An opposition player who Fouls is automatically Sent-off if they break armour." },
  16: { name: "Intensive Training", text: "A random player of your team gains one Primary skill of your choice for the game." }
};
function prayersOf(s, team2) {
  return s.match?.prayers?.[team2] ?? [];
}
function hasPrayer(s, team2, n) {
  return prayersOf(s, team2).includes(n);
}
function playing(s, team2) {
  return s.players.filter((p) => p.team === team2 && !p.star && (p.location === "pitch" || p.location === "reserves"));
}
function randomPlayer(ctx, list, team2, why) {
  if (!list.length) return void 0;
  if (list.length === 1) return list[0];
  const r = ctx.roll({ dice: [list.length], interpret: ([n]) => n, by: team2 });
  const p = list[r.value - 1];
  ctx.emit("roll", `${why}: D${list.length} ${r.value} \u2014 ${label(p)}.`, PRAYER_RULE, { playerId: p.id });
  return p;
}
function choosePlayer(ctx, list, team2, prompt, order) {
  if (!list.length) return void 0;
  const sorted = list.slice().sort(order);
  const id = ctx.ask({ type: "prayerPick", team: team2, prompt, options: sorted.map((p) => ({ id: p.id, label: `${label(p)} (${p.position}, ST ${p.st}, AV ${p.av}+)` })), rule: PRAYER_RULE });
  return sorted.find((p) => p.id === id) ?? sorted[0];
}
var addSkill = (p, id, value) => {
  if (!p.skills.some((k) => k.id === id)) p.skills.push(value !== void 0 ? { id, value } : { id });
};
var SEVENS_PRAYERS = { 1: 1, 2: 3, 3: 4, 4: 5, 5: 8, 6: 9, 7: 15, 8: 16 };
var SEVENS_PRAYER_RULE = { page: 15, title: "Prayers to Nuffle (Blood Bowl Sevens, Spike! Journal 22)" };
function rollPrayers(ctx, team2, count) {
  const s = ctx.s;
  const m = s.match;
  const got = [];
  const sevens = s.variant === "sevens";
  const die = sevens ? 8 : 16;
  const rule2 = sevens ? SEVENS_PRAYER_RULE : PRAYER_RULE;
  for (let i = 0; i < Math.min(count, die); i++) {
    let n = 0;
    let face = 0;
    for (let guard = 0; guard < 100; guard++) {
      const r = ctx.roll({ dice: [die], interpret: ([x]) => x, cacheKey: sevens ? "prayer8" : "prayer16", by: team2 });
      face = r.value;
      n = sevens ? SEVENS_PRAYERS[face] : face;
      if (!got.includes(n)) break;
      ctx.emit("roll", `Prayer to Nuffle (${s.teams[team2].name}): D${die} ${face} \u2014 already received, rolled again.`, rule2);
    }
    got.push(n);
    ctx.emit("roll", `Prayer to Nuffle (${s.teams[team2].name}): D${die} ${face} \u2014 ${PRAYERS[n].name}: ${PRAYERS[n].text}`, rule2, { team: team2, prayer: n });
    applyPrayer(ctx, team2, n);
  }
  m.prayers = { A: m.prayers?.A ?? [], B: m.prayers?.B ?? [], [team2]: [...m.prayers?.[team2] ?? [], ...got] };
}
function applyPrayer(ctx, team2, n) {
  const s = ctx.s;
  const opp = other(team2);
  switch (n) {
    case 3: {
      const p = randomPlayer(ctx, playing(s, team2), team2, "Stiletto");
      if (p) {
        addSkill(p, "stab");
        ctx.emit("status", `Stiletto: ${label(p)} gains Stab for the game.`, PRAYER_RULE, { playerId: p.id });
      }
      break;
    }
    case 4: {
      const p = choosePlayer(ctx, playing(s, team2).filter((q) => q.av < 11), team2, "Iron Man: choose a player to improve their AV by 1 (max 11+).", (a, b) => b.st - a.st || b.ag - a.ag);
      if (p) {
        p.av = Math.min(11, p.av + 1);
        ctx.emit("status", `Iron Man: ${label(p)} has AV ${p.av}+ for the game.`, PRAYER_RULE, { playerId: p.id });
      }
      break;
    }
    case 5: {
      const p = choosePlayer(ctx, playing(s, team2).filter((q) => !hasSkill(q, "mightyBlow")), team2, "Knuckle Dusters: choose a player to gain Mighty Blow.", (a, b) => b.st - a.st || Number(hasSkill(b, "block")) - Number(hasSkill(a, "block")));
      if (p) {
        addSkill(p, "mightyBlow");
        ctx.emit("status", `Knuckle Dusters: ${label(p)} gains Mighty Blow for the game.`, PRAYER_RULE, { playerId: p.id });
      }
      break;
    }
    case 6: {
      const k = ctx.roll({ dice: [3], interpret: ([x]) => x, by: team2 }).value;
      ctx.emit("roll", `Bad Habits: D3 ${k} opposition players.`, PRAYER_RULE);
      const done = [];
      for (let i = 0; i < k; i++) {
        const p = randomPlayer(ctx, playing(s, opp).filter((q) => !done.includes(q.id)), team2, "Bad Habits");
        if (!p) break;
        done.push(p.id);
        p.skills = p.skills.filter((x) => x.id !== "loner");
        p.skills.push({ id: "loner", value: 2 });
        ctx.emit("status", `Bad Habits: ${label(p)} gains Loner (2+) for the game.`, PRAYER_RULE, { playerId: p.id });
      }
      break;
    }
    case 7: {
      const p = randomPlayer(ctx, playing(s, opp), team2, "Greasy Cleats");
      if (p) {
        p.ma = Math.max(1, p.ma - 1);
        ctx.emit("status", `Greasy Cleats: ${label(p)} has MA ${p.ma} for the game.`, PRAYER_RULE, { playerId: p.id });
      }
      break;
    }
    case 8: {
      const p = randomPlayer(ctx, playing(s, team2), team2, "Blessing of Nuffle");
      if (p) {
        addSkill(p, "pro");
        ctx.emit("status", `Blessing of Nuffle: ${label(p)} gains Pro for the game.`, PRAYER_RULE, { playerId: p.id });
      }
      break;
    }
    case 16: {
      const p = randomPlayer(ctx, playing(s, team2), team2, "Intensive Training");
      if (!p) break;
      const r = ROSTER_BY_ID[s.teams[team2].rosterId ?? ""];
      const pos = r?.positions.find((x) => x.name === p.position);
      const cats = pos?.primary ?? [];
      const skills = cats.flatMap((c) => SKILL_TABLE[c] ?? []).filter((id2) => !hasSkill(p, id2) && SKILL_BY_ID[id2]);
      if (!skills.length) {
        ctx.emit("note", `Intensive Training: ${label(p)} has no Primary skill left to learn.`, PRAYER_RULE);
        break;
      }
      const id = ctx.ask({ type: "prayerPick", team: team2, prompt: `Intensive Training: choose a Primary skill for ${label(p)} (${cats.join(", ")}).`, options: skills.map((k) => ({ id: k, label: `${SKILL_BY_ID[k].name} (${skillCategory(k) ?? ""})` })), rule: PRAYER_RULE });
      addSkill(p, skills.includes(id) ? id : skills[0]);
      ctx.emit("status", `Intensive Training: ${label(p)} gains ${SKILL_BY_ID[skills.includes(id) ? id : skills[0]].name} for the game.`, PRAYER_RULE, { playerId: p.id });
      break;
    }
    default:
      break;
  }
}
function throwARockReason(s, team2) {
  if (!hasPrayer(s, team2, 14)) return `${s.teams[team2].name} did not receive Throw a Rock.`;
  if (s.teams[team2].induceUsed?.throwARock) return "Throw a Rock is used once per game.";
  if (s.phase !== "play" || s.match?.pendingPhase || s.turn.active !== team2) return "Throw a Rock is used at the start of one of your Turns (p.143).";
  if (s.turn.activation || s.players.some((p) => p.team === team2 && p.activated)) return "Throw a Rock is used before any player is activated (p.143).";
  if (!pitchPlayers(s, other(team2)).length) return "No opposition player is on the pitch.";
  return null;
}
function trapdoors(s) {
  return s.variant === "sevens" ? [
    { x: 5, y: 1 },
    { x: 14, y: 9 }
  ] : [
    { x: 6, y: 1 },
    { x: 19, y: 13 }
  ];
}
function molesUnder(s, p) {
  return hasPrayer(s, p.team === "A" ? "B" : "A", 9);
}

// src/engine/injury.ts
function goDown(ctx, p, cause) {
  const s = ctx.s;
  const rule2 = cause.kind === "knockedDown" ? R.knockedDown : cause.kind === "fellOver" ? R.fallsOver : R.placedProne;
  const act = s.turn.activation;
  const isActivePlayer = !!act && act.playerId === p.id;
  if (cause.kind !== "placedProne" && canUse(p, "steadyFooting")) {
    const sf = rollTest(ctx, {
      kind: "steadyFooting",
      player: p,
      label: `${label(p)} Steady Footing`,
      target: 6,
      mods: [],
      rule: { page: 136, title: "Steady Footing" },
      teamReroll: true,
      proAllowed: true,
      onFail: "goes down"
    });
    if (sf.success) {
      ctx.emit("status", `${label(p)} keeps their footing (Steady Footing) and stays Standing${isActivePlayer ? "; no Turnover" : ""}.`, { page: 136, title: "Steady Footing" });
      return { avoided: true, removed: false };
    }
  }
  const saboteurReady = cause.kind === "knockedDown" && !!cause.inBlock && !!cause.by && cause.by.team !== p.team && canUse(p, "saboteur") && !gated("saboteur");
  const hadBall = hasBall(s, p);
  let ballPlaced = false;
  if (hadBall && canUse(p, "safePairOfHands") && p.pos) {
    const free = neighbours(p.pos).filter((c) => !playerAt(s, c));
    if (free.length) {
      const choice = ctx.ask({
        type: "safePairOfHands",
        team: p.team,
        prompt: `${label(p)} is going down with the ball. Use Safe Pair of Hands to place it in an adjacent unoccupied square?`,
        options: [
          ...free.map((c) => ({ id: `${c.x},${c.y}`, label: `Place the ball in ${fmt(c)}`, square: c })),
          { id: "no", label: "Let the ball bounce" }
        ],
        rule: { page: 135, title: "Safe Pair of Hands" }
      });
      if (choice !== "no") {
        const [x, y] = choice.split(",").map(Number);
        s.ball = { kind: "ground", pos: { x, y } };
        ballPlaced = true;
        ctx.emit("ball", `${label(p)} places the ball in ${fmt({ x, y })} (Safe Pair of Hands).`, { page: 135, title: "Safe Pair of Hands" });
      }
    }
  }
  p.stance = "prone";
  p.distracted = false;
  const landedOnBall = s.ball.kind === "ground" && !!p.pos && s.ball.pos.x === p.pos.x && s.ball.pos.y === p.pos.y;
  const verb = cause.kind === "knockedDown" ? "is Knocked Down" : cause.kind === "fellOver" ? "Falls Over" : "is Placed Prone";
  ctx.emit("status", `${label(p)} ${verb} in ${fmt(p.pos)} (${cause.reason}).`, rule2, { playerId: p.id, kind: cause.kind });
  if (p.rooted) {
    p.rooted = false;
    ctx.emit("note", `${label(p)} is no longer Rooted.`, { page: 137, title: "Take Root" });
  }
  if (p.team === s.turn.active && !cause.betweenTurns) {
    if (cause.noTurnover) {
      if (hadBall) ctx.setTurnover(`${label(p)} went down with the ball`, R.turnover);
    } else {
      if (cause.kind === "fellOver" && isActivePlayer) ctx.setTurnover(`${label(p)} fell over`, R.turnover);
      if (cause.kind === "knockedDown") ctx.setTurnover(`${label(p)} was Knocked Down`, R.turnover);
      if (cause.kind === "placedProne" && hadBall) ctx.setTurnover(`${label(p)} was Placed Prone with the ball`, R.turnover);
    }
  }
  if (isActivePlayer && act) act.over = true;
  const from = p.pos;
  if (landedOnBall && from) {
    ctx.emit("ball", `The loose ball in ${fmt(from)} bounces away from the fallen player.`, R.scatter);
    bounce(ctx, from);
  }
  let removed = false;
  if (saboteurReady && cause.by && saboteur(ctx, p, cause.by)) {
    removed = true;
  } else if (hasSkill(p, "ballAndChain")) {
    ctx.emit("note", `${label(p)} has Ball & Chain: an Injury Roll is made at once (Stunned counts as Knocked-out).`, { page: 124, title: "Ball & Chain" });
    removed = injuryRoll(ctx, p, [], false, { stunnedAsKO: true, credit: casualtyCredit(p, cause) });
  } else if (cause.kind !== "placedProne") {
    removed = armourAndInjury(ctx, p, cause);
  }
  if (hadBall && !ballPlaced && from) {
    ctx.emit("ball", `The ball bounces from ${fmt(from)}.`, R.scatter);
    bounce(ctx, from);
  }
  return { avoided: false, removed };
}
var MOD_SOURCE_NAME = { mightyBlow: "Mighty Blow", armBar: "Arm Bar", dirtyPlayer: "Dirty Player", lethalFlight: "Lethal Flight", star: "Star Player rule" };
var MOD_SOURCE_PAGE = { mightyBlow: 131, armBar: 123, dirtyPlayer: 127, lethalFlight: 130, star: 148 };
function srcName(src) {
  const st = src.skill === "star" && src.who.star ? STAR_BY_ID[src.who.star] : void 0;
  return st ? `${st.rule.name} (${st.name})` : MOD_SOURCE_NAME[src.skill];
}
function srcRule(src) {
  const st = src.skill === "star" && src.who.star ? STAR_BY_ID[src.who.star] : void 0;
  return st ? starRuleRef(st) : { page: MOD_SOURCE_PAGE[src.skill], title: MOD_SOURCE_NAME[src.skill] };
}
var srcValue = (src) => src.value ?? 1;
function oldPro(ctx, helmut, target, faces, broken, breaks) {
  if (!helmut || !starReady(ctx.s, helmut, "helmut") || !hasSkill(helmut, "pro")) return null;
  const mine = helmut.id === target.id;
  if (mine ? !broken : broken) return null;
  const c = ctx.ask({
    type: "starRule",
    team: helmut.team,
    prompt: `Old Pro (Helmut Wulf, once per game): use Pro (3+) to re-roll one die of the Armour Roll ${faces[0]}+${faces[1]} ${mine ? "against him" : `against ${label(target)}`}?`,
    options: [
      { id: "d0", label: `Re-roll the ${faces[0]}` },
      { id: "d1", label: `Re-roll the ${faces[1]}` },
      { id: "no", label: "No" }
    ],
    rule: starRuleRef(STAR_BY_ID.helmut),
    context: { star: "helmut", pick: true }
  });
  if (c === "no") return null;
  spendStar(ctx, helmut, `Pro to re-roll one die of the Armour Roll.`);
  const pr = ctx.roll({ dice: [6], interpret: ([n]) => n >= 3 ? "S" : "F", cacheKey: "pro3", by: helmut.team, judge: (v) => v === "S" ? 1 : -1 });
  ctx.emit("roll", `Pro: rolled ${pr.faces[0]}; needs 3+ \u2014 ${pr.value === "S" ? "the die is re-rolled" : "no re-roll"}.`, { page: 133, title: "Pro" });
  if (pr.value !== "S") return null;
  const i = c === "d0" ? 0 : 1;
  const one = ctx.roll({ dice: [6], interpret: ([n]) => n, cacheKey: "d6plain", by: target.team === "A" ? "B" : "A", judge: (n) => {
    const o = faces.slice();
    o[c === "d0" ? 0 : 1] = n;
    return breaks(o[0], o[1]) ? 1 : -1;
  } });
  const out = faces.slice();
  out[i] = one.value;
  ctx.emit("roll", `Old Pro: the ${faces[i]} is re-rolled \u2192 ${one.value}. Armour Roll ${out[0]}+${out[1]} \u2014 ${breaks(out[0], out[1]) ? "armour broken" : "armour holds"}.`, starRuleRef(STAR_BY_ID.helmut), { playerId: target.id, faces: out, armour: true, broken: breaks(out[0], out[1]) });
  return out;
}
function starBlockSources(s, by, p) {
  if (starReady(s, by, "mightyZug")) return [{ who: by, skill: "star", used: false, value: 1, stage: "armour" }];
  if (starReady(s, by, "grim") && p.keywords.includes("Big Guy")) return [{ who: by, skill: "star", used: false, value: 1, stage: "either" }];
  if (starReady(s, by, "ivan")) return [{ who: by, skill: "star", used: false, value: p.keywords.includes("Dwarf") ? 2 : 1, stage: "either" }];
  if (starReady(s, by, "rumbelow")) return [{ who: by, skill: "star", used: false, value: 1, stage: "either" }];
  return [];
}
function casualtyCredit(p, cause) {
  if (cause.credit) return cause.credit;
  if (cause.inBlock && cause.by && cause.by.team !== p.team) return cause.by;
  if (cause.kind === "fellOver" && cause.armBar?.length) return cause.armBar.find((q) => hasSkill(q, "armBar"));
  return void 0;
}
function armourAndInjury(ctx, p, cause) {
  const s = ctx.s;
  const ihs = hasSkill(p, "ironHardSkin");
  const sources = [];
  const byOpp = !!(cause.inBlock && cause.by && cause.by.team !== p.team);
  if (byOpp && canUse(cause.by, "mightyBlow")) sources.push({ who: cause.by, skill: "mightyBlow", used: false });
  if (cause.kind === "fellOver" && cause.armBar?.length) {
    const ab = cause.armBar.find((q) => canUse(q, "armBar"));
    if (ab) sources.push({ who: ab, skill: "armBar", used: false });
  }
  if (cause.lethalFlight && !gated("lethalFlight") && hasSkill(cause.lethalFlight, "lethalFlight") && cause.lethalFlight.team !== p.team) sources.push({ who: cause.lethalFlight, skill: "lethalFlight", used: false });
  if (byOpp) sources.push(...starBlockSources(s, cause.by, p));
  const sav = cause.savagery;
  const claws = !!((cause.inBlock && cause.by && cause.by.team !== p.team && hasSkill(cause.by, "claws") || sav && hasSkill(sav, "claws")) && !ihs);
  const chainsaw = hasSkill(p, "chainsaw") && !ihs ? 3 : 0;
  const savMB = sav && hasSkill(sav, "mightyBlow") && !ihs ? 1 : 0;
  const fixedMods = [];
  if (chainsaw) fixedMods.push(chainsaw);
  if (savMB) fixedMods.push(savMB);
  if (cause.armourMod) fixedMods.push(cause.armourMod);
  const fixed = fixedMods.reduce((a, b) => a + b, 0);
  const modTxt = `${chainsaw ? " +3 Chainsaw" : ""}${savMB ? " +1 Mighty Blow (Animal Savagery)" : ""}${cause.armourMod ? ` +${cause.armourMod} ${cause.reason}` : ""}`;
  let broken = false;
  let prefix = "";
  for (; ; ) {
    const armourSources = ihs ? [] : sources.filter((x) => !x.used && (x.stage ?? "either") !== "injury");
    const optionalTotal = armourSources.reduce((a2, x) => a2 + srcValue(x), 0);
    const ar = ctx.roll({
      dice: [6, 6],
      // Armour and Injury Rolls are made by the opposing coach (difficulty house rule owner).
      by: p.team === "A" ? "B" : "A",
      interpret: ([a2, b2]) => {
        const sum3 = a2 + b2;
        const base = sum3 + fixed >= p.av || claws && sum3 >= 8;
        let need2 = 99;
        if (base) need2 = 0;
        else if (sum3 + fixed + optionalTotal >= p.av) need2 = p.av - sum3 - fixed;
        return { need: need2 };
      },
      // Difficulty house rule: broken armour is good for the coach making the roll (the opposing side).
      judge: (v) => v.need === 0 ? 1 : v.need === 99 ? -1 : 0.5,
      prefer: () => true,
      cacheKey: `armour|${p.av}|${fixed}|${claws}|${optionalTotal}`
    });
    let [a, b] = ar.faces;
    let need = ar.value.need;
    broken = need === 0;
    ctx.emit("roll", `${prefix}Armour Roll for ${label(p)}: ${a}+${b}=${a + b}${modTxt} vs AV ${p.av}+${claws ? " (Claws: natural 8+ breaks)" : ""} \u2014 ${broken ? "armour broken" : "armour holds"}.`, R.armourValue, { playerId: p.id, faces: [a, b], av: p.av, broken, armour: true });
    const needOf = (x, y) => x + y + fixed >= p.av || claws && x + y >= 8 ? 0 : x + y + fixed + optionalTotal >= p.av ? p.av - x - y - fixed : 99;
    const helmut = p.star === "helmut" ? p : byOpp && cause.by?.star === "helmut" ? cause.by : void 0;
    const redo = oldPro(ctx, helmut, p, [a, b], broken, (x, y) => needOf(x, y) === 0);
    if (redo) {
      [a, b] = redo;
      need = needOf(a, b);
      broken = need === 0;
    }
    const sum2 = a + b;
    if (!broken && need < 99) {
      let extra = 0;
      for (const src of armourSources) {
        if (broken || src.used) continue;
        const nm = srcName(src);
        const v = srcValue(src);
        const breaks = extra + v >= need;
        const onlyArmour = src.stage === "armour";
        const choice = ctx.ask({
          type: src.skill === "star" ? "starRule" : src.skill,
          team: src.who.team,
          prompt: `Armour Roll ${sum2} vs AV ${p.av}+. ${label(src.who)} may apply ${nm} (+${v}) to the Armour Roll${breaks ? " to break the armour" : ""}${onlyArmour ? "" : ", or save it for the Injury Roll"}.`,
          options: [
            { id: "armour", label: `Apply ${nm} to the Armour Roll` },
            onlyArmour ? { id: "no", label: "Do not use it now" } : { id: "save", label: "Keep it for the Injury Roll" }
          ],
          rule: srcRule(src),
          context: { stage: "armour", breaks, ...src.skill === "star" ? { star: src.who.star } : {} }
        });
        if (choice === "armour") {
          src.used = true;
          extra += v;
          if (extra >= need) broken = true;
          if (src.skill === "star") spendStar(ctx, src.who, `+${v} to the Armour Roll of ${label(p)}.`);
          ctx.emit("roll", `${nm} +${v} applied to the Armour Roll \u2192 ${sum2 + fixed + extra} \u2014 ${broken ? "armour broken" : "armour still holds"}.`, R.armourValue, { playerId: p.id, armour: true, broken });
        }
      }
    }
    if (!broken && byOpp && starReady(s, cause.by, "varag") && askStar(ctx, cause.by, `the armour of ${label(p)} held (${sum2}). Re-roll the Armour Roll?`, "Re-roll the Armour Roll", true)) {
      spendStar(ctx, cause.by, `the Armour Roll against ${label(p)} is re-rolled.`);
      prefix = "Re-roll \u2014 ";
      continue;
    }
    if (broken && starReady(s, p, "josefBugmanStar") && askStar(ctx, p, `his armour is broken (${sum2}). Have the Armour Roll re-rolled?`, "Re-roll the Armour Roll", true)) {
      spendStar(ctx, p, `the Armour Roll against ${label(p)} is re-rolled.`);
      for (const x of sources) if (x.skill !== "star") x.used = false;
      prefix = "Re-roll \u2014 ";
      continue;
    }
    break;
  }
  if (!broken) return false;
  const remaining = sources.filter((x) => !x.used && (x.stage ?? "either") !== "armour");
  const plague = cause.inBlock && cause.by && cause.by.team !== p.team && hasSkill(cause.by, "plagueRidden") ? cause.by : void 0;
  return injuryRoll(ctx, p, remaining, false, { credit: casualtyCredit(p, cause), plague, rerollBy: byOpp ? cause.by : void 0 });
}
function injuryResult(p, total, sevens = false) {
  const stunty = hasSkill(p, "stunty");
  const ts = hasSkill(p, "thickSkull");
  if (sevens) {
    if (total <= (stunty ? 6 : 7) + (ts ? 1 : 0)) return "stunned";
    if (total <= (stunty ? 8 : 9)) return "ko";
    if (total <= 10) return "bh";
    if (total === 11) return "sh";
    return "dead";
  }
  if (stunty) {
    if (total <= (ts ? 7 : 6)) return "stunned";
    if (total <= 8) return "ko";
    if (total === 9) return "bh";
    return "cas";
  }
  if (total <= (ts ? 8 : 7)) return "stunned";
  if (total <= 9) return "ko";
  return "cas";
}
var INJ_LABEL = { stunned: "Stunned", ko: "Knocked-out", bh: "Badly Hurt (Casualty)", cas: "Casualty", sh: "Seriously Hurt (Casualty)", dead: "Dead (Casualty)" };
function injuryRoll(ctx, p, sources, crowd, opts = {}) {
  const n = sources.reduce((a2, x) => a2 + srcValue(x), 0);
  const dbl = !!opts.out;
  const RS = rulesFor(ctx.s);
  const sevens = RS.injuryTables === "sevens";
  const rollInjury = () => ctx.roll({
    dice: [6, 6],
    by: p.team === "A" ? "B" : "A",
    interpret: ([a2, b2]) => {
      const res = [];
      for (let k2 = 0; k2 <= n; k2++) res.push(injuryResult(p, a2 + b2 + k2, sevens));
      return res.join("/") + (dbl ? `|${a2 === b2 ? "D" : "N"}` : "");
    },
    // Difficulty house rule: the worse the injury, the better for the coach making the roll (the opposing side).
    judge: (v) => INJURY_WORTH[v.split("|")[0].split("/")[0]] ?? 0,
    prefer: () => true,
    cacheKey: `inj${sevens ? "7" : ""}|${hasSkill(p, "stunty")}|${hasSkill(p, "thickSkull")}|${n}${dbl ? "|dbl" : ""}`
  });
  const table = sevens ? hasSkill(p, "stunty") ? " (Sevens Stunty Injury Table)" : " (Sevens Injury Table)" : hasSkill(p, "stunty") ? " (Stunty table)" : "";
  const report = (r, prefix) => {
    const [a2, b2] = r.faces;
    const res0 = r.value.split("|")[0].split("/")[0];
    ctx.emit("roll", `${prefix}Injury Roll for ${label(p)}: ${a2}+${b2}=${a2 + b2}${table}${hasSkill(p, "thickSkull") ? " (Thick Skull)" : ""} \u2014 ${INJ_LABEL[res0]}.`, sevens ? RS.refs.injury : hasSkill(p, "stunty") ? R.stuntyInjury : R.injury, { playerId: p.id, faces: [a2, b2], result: res0 });
  };
  let ir = rollInjury();
  report(ir, "");
  const w = opts.rerollBy;
  if (w && w.team !== p.team && starReady(ctx.s, w, "wilhelm")) {
    const best = ir.value.split("|")[0].split("/")[n];
    if (askStar(ctx, w, `Injury Roll ${ir.faces[0] + ir.faces[1]} (${INJ_LABEL[ir.value.split("|")[0].split("/")[0]]}). Re-roll it?`, "Re-roll the Injury Roll", best === "stunned" || best === "ko")) {
      spendStar(ctx, w, `the Injury Roll against ${label(p)} is re-rolled.`);
      ir = rollInjury();
      report(ir, "Re-roll \u2014 ");
    }
  }
  const [a, b] = ir.faces;
  if (opts.out) opts.out.faces = [a, b];
  const results = ir.value.split("|")[0].split("/");
  let k = 0;
  for (const src of sources) {
    const v = srcValue(src);
    if (results[k + v] === results[k]) continue;
    const nm = srcName(src);
    const choice = ctx.ask({
      type: src.skill === "star" ? "starRule" : src.skill,
      team: src.who.team,
      prompt: `Injury Roll ${a + b + k} (${INJ_LABEL[results[k]]}). Apply ${nm} (+${v}) to make it ${INJ_LABEL[results[k + v]]}?`,
      options: [
        { id: "use", label: `Apply ${nm} (+${v})` },
        { id: "no", label: "Do not apply it" }
      ],
      rule: srcRule(src),
      context: { stage: "injury", helps: true, ...src.skill === "star" ? { star: src.who.star } : {} }
    });
    if (choice === "use") {
      k += v;
      if (src.skill === "star") spendStar(ctx, src.who, `+${v} to the Injury Roll of ${label(p)}.`);
      ctx.emit("roll", `${nm} +${v} applied to the Injury Roll \u2192 ${a + b + k}: ${INJ_LABEL[results[k]]}.`, R.injury);
    }
  }
  let result = results[k];
  if (opts.stunnedAsKO && result === "stunned") {
    result = "ko";
    ctx.emit("note", `Ball & Chain: Stunned counts as Knocked-out.`, { page: 124, title: "Ball & Chain" });
  }
  if (opts.casAsBadlyHurt && (result === "cas" || result === "sh" || result === "dead")) result = "bh";
  return applyInjury(ctx, p, result, crowd, opts);
}
function applyInjury(ctx, p, result, crowd, opts) {
  const credit = opts.credit;
  if (result === "stunned") {
    if (crowd) {
      moveOffPitch(p, "reserves");
      ctx.emit("injury", `${label(p)} would be Stunned by the crowd and is placed in the Reserves Box instead.`, R.crowdInjury, { playerId: p.id, result: "reserves" });
      return true;
    }
    p.stance = "stunned";
    ctx.emit("injury", `${label(p)} is Stunned.`, R.injury, { playerId: p.id, result: "stunned" });
    return false;
  }
  if (result === "ko") {
    if (useApothecary(ctx, p, `${label(p)} is Knocked-out.`, crowd ? "Patch-up: the player goes to the Reserves Box instead (Injury by the Crowd)." : "Patch-up: the player stays in their square, Stunned.")) {
      if (crowd) {
        moveOffPitch(p, "reserves");
        ctx.emit("injury", `The Apothecary patches up ${label(p)}: Reserves Box instead of the KO box.`, APO, { playerId: p.id, result: "reserves" });
        return true;
      }
      p.stance = "stunned";
      ctx.emit("injury", `The Apothecary patches up ${label(p)}, who is Stunned instead of Knocked-out.`, APO, { playerId: p.id, result: "stunned" });
      return false;
    }
    moveOffPitch(p, "ko");
    ctx.emit("injury", `${label(p)} is Knocked-out and goes to the KO box.`, R.injury, { playerId: p.id, result: "ko" });
    return true;
  }
  if (credit && credit.team !== p.team && !crowd) awardSpp(ctx, credit, "casualty");
  if (ctx.mode === "plan") {
    moveOffPitch(p, "cas");
    ctx.emit("injury", `${label(p)} suffers a Casualty.`, R.casualty, { playerId: p.id, result: "cas" });
    checkLeaderLoss(ctx, p.team);
    return true;
  }
  if (hasSkill(p, "regeneration")) {
    const rg = ctx.roll({ dice: [6], interpret: ([n]) => n >= 4 ? "S" : "F", cacheKey: "regen", prefer: () => true, by: p.team });
    let ok = rg.value === "S";
    ctx.emit("roll", `Regeneration for ${label(p)}: rolled ${rg.faces[0]}; needs 4+ \u2014 ${ok ? "regenerates" : "fails"}.`, { page: 135, title: "Regeneration" });
    const helpers = ["mortuaryAssistant", "plagueDoctor"].filter((id) => induceLeft(ctx.s, p.team, id) > 0);
    if (!ok && helpers.length) {
      const c = ctx.ask({
        type: "regenReroll",
        team: p.team,
        prompt: `${label(p)} failed to Regenerate. Re-roll it (once per game)?`,
        options: [...helpers.map((id) => ({ id, label: `Use the ${INDUCEMENT_BY_ID[id].name}` })), { id: "no", label: "No re-roll" }],
        rule: INDUCE_RULE(helpers[0])
      });
      if (c !== "no") {
        spendInduce(ctx.s, p.team, c);
        const rg2 = ctx.roll({ dice: [6], interpret: ([n]) => n >= 4 ? "S" : "F", cacheKey: "regen", prefer: () => true, by: p.team });
        ok = rg2.value === "S";
        ctx.emit("roll", `${INDUCEMENT_BY_ID[c].name}: Regeneration re-rolled \u2014 ${rg2.faces[0]}; ${ok ? "regenerates" : "fails"}.`, INDUCE_RULE(c), { playerId: p.id });
      }
    }
    if (ok) {
      moveOffPitch(p, "reserves");
      ctx.emit("injury", `${label(p)} regenerates and is placed in the Reserves Box.`, { page: 135, title: "Regeneration" }, { playerId: p.id, result: "reserves" });
      return true;
    }
  }
  let cas = "Badly Hurt";
  const sevens = rulesFor(ctx.s).injuryTables === "sevens";
  if (p.frog) {
    ctx.emit("roll", `${label(p)} is a Frog: no Casualty Roll \u2014 Badly Hurt (Zap!, p.149).`, { page: 149, title: "Wizard: Zap!" }, { playerId: p.id, result: cas });
  } else if (sevens) {
    cas = result === "sh" ? "Seriously Hurt" : result === "dead" ? "Dead" : "Badly Hurt";
    ctx.emit("roll", `${label(p)} suffers a Casualty: ${cas} (Sevens Injury Table \u2014 no Casualty Roll${opts.casAsBadlyHurt ? "; treated as Badly Hurt" : ""}).`, rulesFor(ctx.s).refs.injury, { playerId: p.id, result: cas });
    if (ctx.s.teams[p.team].apothecary === "available") ctx.emit("note", "Sevens: there is no Casualty Roll to repeat, so the Apothecary cannot patch up a Casualty (it can still patch up a Knocked-out player; see docs/SEVENS_RULES.md, interpretation 2).", rulesFor(ctx.s).refs.injury);
  } else if (result === "cas") {
    const decay = hasSkill(p, "decay") ? 1 : 0;
    const cr = ctx.roll({
      dice: [16],
      interpret: ([n]) => casualtyName(n + decay),
      cacheKey: `cas|${decay}`,
      // Difficulty house rule: a worse Casualty is better for the other side.
      judge: (v) => CASUALTY_WORTH[v] ?? 0,
      judgeFor: p.team === "A" ? "B" : "A",
      prefer: () => true
    });
    cas = cr.value;
    ctx.emit("roll", `Casualty Roll for ${label(p)}: D16 ${cr.faces[0]}${decay ? " +1 Decay" : ""} \u2014 ${cas}.`, R.casualty, { playerId: p.id, result: cas });
  } else if (opts.casAsBadlyHurt) {
    ctx.emit("roll", `${label(p)} suffers a Casualty, treated as Badly Hurt.`, R.casualty);
  } else {
    ctx.emit("roll", `${label(p)} suffers a Badly Hurt Casualty (Stunty Injury Table 9).`, R.stuntyInjury);
  }
  if (!sevens && !p.frog && useApothecary(ctx, p, `${label(p)} is a Casualty (${cas}).`, "The opposing coach makes a second Casualty Roll and you choose either result; Badly Hurt = patched up to the Reserves Box.")) {
    let second = "Badly Hurt";
    if (result === "cas") {
      const decay = hasSkill(p, "decay") ? 1 : 0;
      const cr2 = ctx.roll({ dice: [16], interpret: ([n]) => casualtyName(n + decay), cacheKey: `cas|${decay}`, prefer: () => true, judge: (v) => CASUALTY_WORTH[v] ?? 0, judgeFor: p.team === "A" ? "B" : "A" });
      second = cr2.value;
      ctx.emit("roll", `Apothecary: second Casualty Roll for ${label(p)}: D16 ${cr2.faces[0]}${decay ? " +1 Decay" : ""} \u2014 ${second}.`, APO, { playerId: p.id, result: second });
    }
    let chosen = cas;
    if (second !== cas) {
      const pick = ctx.ask({
        type: "apothecary",
        team: p.team,
        prompt: `Apothecary for ${label(p)}: choose the Casualty result to apply.`,
        options: [
          { id: "first", label: `First roll: ${cas}` },
          { id: "second", label: `Second roll: ${second}` }
        ],
        rule: APO
      });
      chosen = pick === "second" ? second : cas;
    }
    if (chosen === "Badly Hurt") {
      moveOffPitch(p, "reserves");
      ctx.emit("injury", `The Apothecary patches up ${label(p)} (Badly Hurt): Reserves Box instead of the Casualty Box.`, APO, { playerId: p.id, result: "reserves" });
      return true;
    }
    cas = chosen;
  }
  moveOffPitch(p, "cas");
  p.casualtyResult = cas;
  ctx.emit("injury", `${label(p)} is a Casualty (${cas}) and goes to the Casualty box.`, R.casualty, { playerId: p.id, result: "cas", casualty: cas });
  const sk4 = opts.rerollBy;
  if (sk4 && sk4.team !== p.team && starReady(ctx.s, sk4, "skrorg")) {
    const t = ctx.s.teams[sk4.team];
    t.rerolls += 1;
    t.bonusRerolls = (t.bonusRerolls ?? 0) + 1;
    spendStar(ctx, sk4, `${t.name} gain a Team Re-roll until the end of this Drive.`);
  }
  checkLeaderLoss(ctx, p.team);
  if (cas === "Dead" && opts.plague) plagueRidden(ctx, opts.plague, p);
  if (cas === "Dead") mastersOfUndeath(ctx, p);
  return true;
}
var MASTERS_OF_UNDEATH_RULE = { page: 155, title: "Masters of Undeath" };
function mastersOfUndeath(ctx, victim) {
  const s = ctx.s;
  const undead = victim.team === "A" ? "B" : "A";
  const t = s.teams[undead];
  const rule2 = MASTERS_OF_UNDEATH_RULE;
  if (!s.match || !t.specialRules?.includes("Masters of Undeath") || t.raiseDeadUsed) return;
  if (victim.st > 4 || hasSkill(victim, "stunty")) {
    ctx.emit("note", `Masters of Undeath: ${label(victim)} cannot be raised (${victim.st > 4 ? `ST ${victim.st}, more than 4` : "Stunty"}).`, rule2);
    return;
  }
  const r = ROSTER_BY_ID[t.rosterId ?? ""];
  const lines = r?.positions.filter((x) => x.keywords.includes("Lineman")) ?? [];
  if (!lines.length) {
    ctx.emit("note", `Masters of Undeath: ${t.name} have no Team Roster Lineman to raise.`, rule2);
    return;
  }
  const c = ctx.ask({
    type: "raiseDead",
    team: undead,
    prompt: `Masters of Undeath (once per game): ${label(victim)} is Dead. Raise the Dead \u2014 add a Lineman to your Reserves Box?`,
    options: [...lines.map((x) => ({ id: lines.length === 1 ? "yes" : `pos:${x.id}`, label: `Raise the Dead: add a ${x.name}` })), { id: "no", label: "Not now" }],
    rule: rule2
  });
  if (c === "no") return;
  const pos = lines.length === 1 ? lines[0] : lines.find((x) => `pos:${x.id}` === c) ?? lines[0];
  t.raiseDeadUsed = true;
  const used = new Set(s.players.filter((q) => q.team === undead).map((q) => q.number));
  let n = 1;
  while (used.has(n)) n++;
  const np = playerFromPosition(s, undead, pos, null, n);
  np.location = "reserves";
  np.raised = pos.id;
  s.players.push(np);
  ctx.emit("status", `Masters of Undeath: ${t.name} Raise the Dead \u2014 ${label(np)} joins the Reserves Box.`, rule2, { playerId: np.id });
}
function plagueRidden(ctx, by, victim) {
  const s = ctx.s;
  const rule2 = { page: 133, title: "Plague Ridden" };
  if (!s.match || by.plagueUsed || gated("plagueRidden")) return;
  if (victim.keywords.some((k) => k.toLowerCase() === "big guy") || ["decay", "regeneration", "stunty"].some((k) => hasSkill(victim, k))) return;
  const r = ROSTER_BY_ID[s.teams[by.team].rosterId ?? ""];
  const pos = r?.positions.find((x) => x.keywords.includes("Lineman") && x.qty.endsWith("16")) ?? r?.positions.find((x) => x.keywords.includes("Lineman"));
  if (!pos) {
    ctx.emit("note", `Plague Ridden: ${s.teams[by.team].name} have no Team Roster Lineman to add.`, rule2);
    return;
  }
  const c = ctx.ask({
    type: "plagueRidden",
    team: by.team,
    prompt: `Plague Ridden (once per game): add a new ${pos.name} to your Reserves Box?`,
    options: [
      { id: "yes", label: `Add a ${pos.name}` },
      { id: "no", label: "Not now" }
    ],
    rule: rule2
  });
  if (c !== "yes") return;
  by.plagueUsed = true;
  const used = new Set(s.players.filter((q) => q.team === by.team).map((q) => q.number));
  let n = 1;
  while (used.has(n)) n++;
  const np = playerFromPosition(s, by.team, pos, null, n);
  np.location = "reserves";
  s.players.push(np);
  ctx.emit("status", `Plague Ridden: ${label(np)} joins ${s.teams[by.team].name} in the Reserves Box.`, rule2, { playerId: np.id });
}
var APO = { page: 68, title: "Apothecaries" };
var INJURY_WORTH = { stunned: 0, ko: 0.6, cas: 0.9, bh: 0.8, sh: 0.9, dead: 1 };
var CASUALTY_WORTH = { "Badly Hurt": 0.3, "Seriously Hurt": 0.55, "Serious Injury": 0.7, "Lasting Injury": 0.85, Dead: 1 };
function casualtyName(t) {
  return t <= 8 ? "Badly Hurt" : t <= 10 ? "Seriously Hurt" : t <= 12 ? "Serious Injury" : t <= 14 ? "Lasting Injury" : "Dead";
}
function useApothecary(ctx, p, what, effect) {
  const t = ctx.s.teams[p.team];
  if (ctx.mode === "plan") return false;
  if (p.frog) return false;
  const source = t.apothecary === "available" ? "own" : induceLeft(ctx.s, p.team, "wanderingApothecary") > 0 ? "wanderingApothecary" : induceLeft(ctx.s, p.team, "plagueDoctor") > 0 ? "plagueDoctor" : null;
  if (!source) return false;
  const name = source === "own" ? "the Apothecary" : source === "wanderingApothecary" ? "a Wandering Apothecary" : "the Plague Doctor";
  const choice = ctx.ask({
    type: "apothecary",
    team: p.team,
    prompt: `${what} Use ${name} (once per game)? ${effect}`,
    options: [
      { id: "use", label: `Use ${name}` },
      { id: "keep", label: `Keep ${name}` }
    ],
    rule: source === "own" ? APO : INDUCE_RULE(source)
  });
  if (choice !== "use") return false;
  if (source === "own") t.apothecary = "used";
  else spendInduce(ctx.s, p.team, source);
  ctx.emit("decision", `${t.name} use ${name} on ${label(p)}.`, source === "own" ? APO : INDUCE_RULE(source), { playerId: p.id });
  return true;
}
function checkLeaderLoss(ctx, team2) {
  const t = ctx.s.teams[team2];
  if (!t.leaderReroll) return;
  const leaders = ctx.s.players.filter((q) => q.team === team2 && hasSkill(q, "leader"));
  if (leaders.length && leaders.every((q) => q.location === "cas" || q.location === "sentOff")) {
    t.leaderReroll = false;
    ctx.emit("note", `${t.name} lose their unused Leader Re-roll: no player with Leader remains in the game.`, { page: 130, title: "Leader" });
  }
}
function moveOffPitch(p, where) {
  p.location = where;
  p.pos = null;
  p.stance = "standing";
  p.distracted = false;
}
function crowdInjury(ctx, p) {
  injuryRoll(ctx, p, [], true);
}
function saboteur(ctx, p, by) {
  const rule2 = { page: 135, title: "Saboteur" };
  const c = ctx.ask({
    type: "saboteur",
    team: p.team,
    prompt: `${label(p)} has been Knocked Down by ${label(by)}. Set off the sabotaged weapon (D6 4+: ${label(by)} is also Knocked Down and ${label(p)} is Knocked-out)?`,
    options: [
      { id: "yes", label: "Roll for Saboteur" },
      { id: "no", label: "No" }
    ],
    rule: rule2
  });
  if (c !== "yes") return false;
  const r = ctx.roll({ dice: [6], interpret: ([n]) => n >= 4 ? "boom" : "dud", cacheKey: "sab4", by: p.team, judge: (v) => v === "boom" ? 1 : -1 });
  ctx.emit("roll", `Saboteur: rolled ${r.faces[0]} \u2014 ${r.value === "boom" ? "the sabotaged weapon goes off!" : "nothing happens"}.`, rule2);
  if (r.value !== "boom") return false;
  if (by.location === "pitch" && by.stance === "standing") goDown(ctx, by, { kind: "knockedDown", reason: "sabotaged weapon", noTurnover: true });
  if (p.location === "pitch") applyInjury(ctx, p, "ko", false, {});
  return true;
}
var TRAPDOOR_RULE = { page: 143, title: "Treacherous Trapdoor" };
function trapdoorCheck(ctx, p) {
  const s = ctx.s;
  if (!p.pos || p.location !== "pitch" || !(hasPrayer(s, "A", 1) || hasPrayer(s, "B", 1))) return false;
  if (!trapdoors(s).some((t) => t.x === p.pos.x && t.y === p.pos.y)) return false;
  const r = ctx.roll({ dice: [6], interpret: ([n]) => n === 1 ? "F" : "S", cacheKey: "trapdoor" });
  const from = { ...p.pos };
  ctx.emit("roll", `Treacherous Trapdoor in ${fmt(from)}: ${label(p)} rolls ${r.faces[0]} \u2014 ${r.value === "F" ? "the Trapdoor falls open!" : "it holds"}.`, TRAPDOOR_RULE, { playerId: p.id });
  if (r.value === "S") return false;
  const hadBall = hasBall(s, p);
  const active2 = s.turn.activation?.playerId === p.id;
  injuryRoll(ctx, p, [], true);
  if (p.location === "pitch") moveOffPitch(p, "reserves");
  if (active2) ctx.setTurnover(`${label(p)} fell through a Trapdoor`, TRAPDOOR_RULE);
  if (hadBall) {
    s.ball = { kind: "ground", pos: from };
    ctx.emit("ball", `The ball bounces from the Trapdoor in ${fmt(from)}.`, R.scatter);
    bounce(ctx, from);
  }
  return true;
}

// src/engine/desperate.ts
var DESPERATE_RULE = { page: 15, title: "Desperate Measures (Spike! Journal 22)" };
var DESPERATE = {
  1: { id: "youDope", name: "You Dope!", text: "After both teams have set up, before the kick-off: one of your players has ST or AG improved by 1 for the rest of the game; at the end of each Drive they took part in, D6 1-2: Knocked-out (no recovery roll that time)." },
  2: { id: "razzleDazzle", name: "Razzle-Dazzle", text: "When you activate a player: they may declare two different Actions this activation \u2014 not two that both contain a Move Action." },
  3: { id: "hangover", name: "Hangover", text: "Before either team sets up at the start of the game: one opposition player cannot take part in the first Drive." },
  4: { id: "grudgeMatch", name: "Grudge Match", text: "When you activate a player: they may Foul even if your team already declared a Foul this Turn, and cannot be Sent-off for this Foul." },
  5: { id: "setPiece", name: "Set Piece", text: "With a Pass Action: the Pass is Accurate on any roll of 2+ (the thrower\u2019s PA is ignored) and the receiver catches it on any roll of 2+ (their AG is ignored)." },
  6: { id: "sportsEspionage", name: "Sports Espionage", text: "When your team suffers a Turnover: gain two Team Re-rolls once it has been resolved (not for the dice that caused it)." },
  7: { id: "bananaSkin", name: "Discarded Banana Skin", text: "When an opposition player enters the Tackle Zone of one of your players: they are Placed Prone and their activation ends (a Turnover only if they held the ball)." },
  8: { id: "magicScroll", name: "Magic Scroll", text: "Before either team sets up: your team gains a free Sports-Wizard Inducement (rulebook p.149)." }
};
var DESPERATE_NUMBER = Object.fromEntries(Object.entries(DESPERATE).map(([n, d2]) => [d2.id, Number(n)]));
function desperateOf(s, team2) {
  return s.match?.desperate?.[team2] ?? [];
}
function desperateLeft(s, team2, id) {
  const n = DESPERATE_NUMBER[id];
  return desperateOf(s, team2).includes(n) && !(s.match?.desperateUsed?.[team2] ?? []).includes(n);
}
function spendDesperate(ctx, team2, id, text) {
  const m = ctx.s.match;
  const n = DESPERATE_NUMBER[id];
  m.desperateUsed = { A: [...m.desperateUsed?.A ?? []], B: [...m.desperateUsed?.B ?? []] };
  m.desperateUsed[team2].push(n);
  ctx.emit("note", `${ctx.s.teams[team2].name} use a Desperate Measure \u2014 ${DESPERATE[n].name}: ${text}`, DESPERATE_RULE, { team: team2, desperate: id });
}
function rollDesperate(ctx, team2, count) {
  const s = ctx.s;
  const m = s.match;
  const got = [];
  for (let i = 0; i < Math.min(count, 8); i++) {
    for (let guard = 0; guard < 100; guard++) {
      const r = ctx.roll({ dice: [8], interpret: ([n2]) => n2, by: team2 });
      const n = r.value;
      if (got.includes(n)) {
        ctx.emit("roll", `${s.teams[team2].name} Desperate Measure: D8 ${n} \u2014 already rolled, roll again.`, DESPERATE_RULE, { team: team2 });
        continue;
      }
      got.push(n);
      ctx.emit("roll", `${s.teams[team2].name} Desperate Measure: D8 ${n} \u2014 ${DESPERATE[n].name}. ${DESPERATE[n].text}`, DESPERATE_RULE, { team: team2, desperate: DESPERATE[n].id });
      break;
    }
  }
  m.desperate = { A: [...m.desperate?.A ?? []], B: [...m.desperate?.B ?? []] };
  m.desperate[team2] = got;
  if (got.includes(8)) {
    const ind = m.inducements ?? (m.inducements = { A: {}, B: {} });
    ind[team2] = { ...ind[team2] ?? {}, wizard: (ind[team2]?.wizard ?? 0) + 1 };
    spendDesperate(ctx, team2, "magicScroll", "a free Sports-Wizard joins the team for this game (rulebook p.149).");
  }
}
function askHangover(ctx, team2) {
  const s = ctx.s;
  if (!desperateLeft(s, team2, "hangover")) return;
  const opp = other(team2);
  const list = s.players.filter((p2) => p2.team === opp && (p2.location === "reserves" || p2.location === "pitch") && !p2.benched).sort((a, b) => b.st - a.st || a.number - b.number);
  if (!list.length) return;
  const id = ctx.ask({
    type: "desperate",
    team: team2,
    prompt: `Hangover (Desperate Measure): choose an opposition player who cannot take part in the first Drive \u2014 now or never (before either team sets up).`,
    options: [...list.map((p2) => ({ id: p2.id, label: `${label(p2)} (${p2.position}, ST ${p2.st}, AG ${p2.ag}+)` })), { id: "no", label: "Do not use it" }],
    context: { measure: "hangover" },
    rule: DESPERATE_RULE
  });
  if (id === "no") return;
  const p = findPlayer(s, id);
  if (!p) return;
  p.benched = true;
  p.benchedWhy = "Hangover";
  spendDesperate(ctx, team2, "hangover", `${label(p)} cannot take part in the first Drive.`);
}
function askYouDope(ctx) {
  const s = ctx.s;
  const m = s.match;
  const order = [m.kicking, other(m.kicking)];
  for (const team2 of order) {
    if (!desperateLeft(s, team2, "youDope")) continue;
    const list = pitchPlayers(s, team2).filter((p2) => !p2.doped).sort((a, b) => a.number - b.number);
    if (!list.length) continue;
    const id = ctx.ask({
      type: "desperate",
      team: team2,
      prompt: `You Dope! (Desperate Measure): improve a player's ST or AG by 1 for the rest of the game? At the end of every Drive they take part in, a D6 of 1-2 Knocks them Out. (Not now: ask again at the next kick-off.)`,
      options: [{ id: "no", label: "Not now" }, ...list.map((p2) => ({ id: p2.id, label: `${label(p2)} (${p2.position}, ST ${p2.st}, AG ${p2.ag}+)` }))],
      context: { measure: "youDope" },
      rule: DESPERATE_RULE
    });
    if (id === "no") continue;
    const p = findPlayer(s, id);
    if (!p) continue;
    const stat = ctx.ask({
      type: "desperate",
      team: team2,
      prompt: `You Dope!: improve ${label(p)}'s ST (${p.st}) or AG (${p.ag}+)?`,
      options: [
        { id: "st", label: `ST ${p.st} \u2192 ${Math.min(8, p.st + 1)}` },
        { id: "ag", label: `AG ${p.ag}+ \u2192 ${Math.max(1, p.ag - 1)}+` }
      ],
      context: { measure: "youDopeStat", playerId: p.id },
      rule: DESPERATE_RULE
    });
    if (stat === "ag") p.ag = Math.max(1, p.ag - 1);
    else p.st = Math.min(8, p.st + 1);
    p.doped = stat === "ag" ? "ag" : "st";
    spendDesperate(ctx, team2, "youDope", `${label(p)} has ${stat === "ag" ? `AG ${p.ag}+` : `ST ${p.st}`} for the rest of the game (a D6 at the end of each Drive they take part in: 1-2 Knocked-out).`);
  }
}
function youDopeEndOfDrive(ctx) {
  const s = ctx.s;
  const out = /* @__PURE__ */ new Set();
  for (const p of s.players) {
    if (!p.doped || !p.inDrive || !(p.location === "pitch" || p.location === "reserves")) continue;
    const r = ctx.roll({ dice: [6], interpret: ([n]) => n, by: p.team, judge: (n) => n <= 2 ? -1 : 1 });
    const ill = r.value <= 2;
    ctx.emit("roll", `You Dope! \u2014 ${label(p)}: D6 ${r.value} \u2014 ${ill ? "falls ill and is Knocked-out (no recovery roll at this End of Drive)" : "fine"}.`, DESPERATE_RULE, { playerId: p.id });
    if (ill) {
      p.location = "ko";
      p.pos = null;
      out.add(p.id);
    }
  }
  return out;
}
function askSportsEspionage(ctx, team2) {
  const s = ctx.s;
  if (!desperateLeft(s, team2, "sportsEspionage")) return;
  const use = ctx.ask({
    type: "desperate",
    team: team2,
    prompt: "Sports Espionage (Desperate Measure): gain two Team Re-rolls now that the Turnover has been resolved? (They last until half-time like your other Team Re-rolls.)",
    options: [
      { id: "use", label: "Use Sports Espionage (+2 Team Re-rolls)" },
      { id: "no", label: "Keep it for a later Turnover" }
    ],
    context: { measure: "sportsEspionage" },
    rule: DESPERATE_RULE
  });
  if (use !== "use") return;
  s.teams[team2].rerolls += 2;
  spendDesperate(ctx, team2, "sportsEspionage", `+2 Team Re-rolls (now ${s.teams[team2].rerolls}).`);
}
function bananaSkinWanted(s, p, from) {
  const opp = other(p.team);
  if (!desperateLeft(s, opp, "bananaSkin") || !p.pos) return null;
  const q = pitchPlayers(s, opp).find((x) => x.pos && hasTackleZone(x) && adjacent(x.pos, p.pos) && !adjacent(x.pos, from));
  return q ?? null;
}
function askBananaSkin(ctx, p, from) {
  const s = ctx.s;
  const q = bananaSkinWanted(s, p, from);
  if (!q) return false;
  const opp = q.team;
  const use = ctx.ask({
    type: "desperate",
    team: opp,
    prompt: `Discarded Banana Skin (Desperate Measure): ${label(p)} has entered the Tackle Zone of ${label(q)} in ${fmt(p.pos)}. Place them Prone and end their activation?${s.ball.kind === "held" && s.ball.playerId === p.id ? " They hold the ball: a Turnover." : ""}`,
    options: [
      { id: "no", label: "Not now" },
      { id: "use", label: "Use the Banana Skin" }
    ],
    context: { measure: "bananaSkin", playerId: p.id },
    rule: DESPERATE_RULE
  });
  if (use !== "use") return false;
  spendDesperate(ctx, opp, "bananaSkin", `${label(p)} slips on a Banana Skin in ${fmt(p.pos)}.`);
  return true;
}
var HAS_MOVE = ["move", "blitz", "pass", "handoff", "secure", "foul", "ttm"];
function razzlePairReason(first, second) {
  if (first === second) return "Razzle-Dazzle: not the same Action twice.";
  if (HAS_MOVE.includes(first) && HAS_MOVE.includes(second)) return "Razzle-Dazzle: not two Actions that both contain a Move Action.";
  if (first === "special" || second === "special") return "Razzle-Dazzle: Special Actions are not combined in this version.";
  return null;
}

// src/engine/move.ts
function maxRushes(p) {
  return 2 + (canUse(p, "sprint") ? 1 : 0);
}
function breakTackleValue(p) {
  return p.st >= 5 ? 3 : p.st === 4 ? 2 : 1;
}
function standUp(ctx, p, act) {
  if (p.stance !== "prone") return true;
  if (canUse(p, "jumpUp")) {
    p.stance = "standing";
    ctx.emit("move", `${label(p)} stands up for free (Jump Up).`, { page: 130, title: "Jump Up" }, { playerId: p.id, standUp: true });
    return true;
  }
  if (p.ma <= 2) {
    const mods = [];
    if (hasSkill(p, "timmmber")) {
      const helpers = pitchPlayers(ctx.s, p.team).filter((q) => q.id !== p.id && adjacent(q.pos, p.pos) && isOpen(ctx.s, q)).length;
      if (helpers) mods.push({ label: `Timmm-ber! x${helpers}`, value: helpers });
    }
    const res = rollTest(ctx, {
      kind: "standUp",
      player: p,
      label: `${label(p)} stands up (MA ${p.ma})`,
      target: 4,
      mods,
      rule: R.standUp,
      teamReroll: true,
      proAllowed: true,
      onFail: "stays Prone and the activation ends"
    });
    if (!res.success) {
      ctx.emit("status", `${label(p)} fails to stand up and remains Prone; the activation ends.`, R.standUp);
      act.over = true;
      return false;
    }
    p.stance = "standing";
    act.maUsed = Math.max(act.maUsed, p.ma);
    ctx.emit("move", `${label(p)} stands up using their full Move Allowance.`, R.standUp, { playerId: p.id, standUp: true });
    return true;
  }
  p.stance = "standing";
  act.maUsed += 3;
  ctx.emit("move", `${label(p)} stands up (3 squares of Move Allowance).`, R.standUp, { playerId: p.id, standUp: true });
  return true;
}
function payMovement(ctx, p, act, cost, fallAt, why) {
  const maLeft = Math.max(0, p.ma - act.maUsed);
  const rushNeeded = Math.max(0, cost - maLeft);
  if (rushNeeded > maxRushes(p) - act.rushesUsed) throw new IllegalAction(`${label(p)} does not have enough movement to ${why}.`);
  act.maUsed += Math.min(cost, maLeft);
  for (let i = 0; i < rushNeeded; i++) {
    act.rushesUsed += 1;
    const mods = [];
    if (ctx.s.weather === "blizzard") mods.push({ label: "Blizzard", value: -1 });
    if (hasSkill(p, "drunkard")) mods.push({ label: "Drunkard", value: -1 });
    if (molesUnder(ctx.s, p)) mods.push({ label: "Moles under the Pitch", value: -1 });
    const res = rollTest(ctx, {
      kind: "rush",
      player: p,
      at: fallAt ?? p.pos,
      label: `Rush ${act.rushesUsed} to ${why}`,
      target: 2,
      mods,
      rule: R.rush,
      skillReroll: { id: "sureFeet", name: "Sure Feet", available: canUse(p, "sureFeet") && !p.usage.sureFeet, markUsed: () => p.usage.sureFeet = true },
      teamReroll: true,
      proAllowed: true,
      onFail: "falls over \u2014 Turnover"
    });
    if (!res.success) {
      if (fallAt && !eq(fallAt, p.pos)) {
        const from = p.pos;
        p.pos = { ...fallAt };
        ctx.emit("move", `${label(p)} rushes from ${fmt(from)} into ${fmt(fallAt)} and trips.`, R.rush, { playerId: p.id, from, to: fallAt });
      }
      if (!(goDown(ctx, p, { kind: "fellOver", reason: "failed Rush" }).avoided && faq2026(ctx.s))) throw new ActionStop("fell");
    }
  }
}
function chooseOne(ctx, list, type, prompt, rule2, allowDecline) {
  if (!list.length) return null;
  const opts = list.map((q) => ({ id: q.id, label: `Use ${label(q)}`, square: q.pos ?? void 0 }));
  if (allowDecline) opts.push({ id: "none", label: "Do not use it", square: void 0 });
  const choice = ctx.ask({ type, team: list[0].team, prompt, options: opts, rule: rule2 });
  if (choice === "none") return null;
  return list.find((q) => q.id === choice) ?? null;
}
function tentacles(ctx, p, from) {
  const ts = markersOf(ctx.s, from, p.team).filter((q) => canUse(q, "tentacles"));
  const t = chooseOne(ctx, ts, "tentacles", `${label(p)} is trying to leave ${fmt(from)}. Use Tentacles to hold them in place?`, { page: 137, title: "Tentacles" }, true);
  if (!t) return false;
  const r = ctx.roll({
    dice: [6],
    interpret: ([n2]) => n2 === 6 || n2 !== 1 && n2 + t.st - p.st >= 6 ? "held" : "free",
    cacheKey: `tent|${t.st - p.st}`,
    by: t.team,
    judge: (v) => v === "held" ? 1 : -1,
    prefer: (v) => v === "free"
  });
  const n = r.faces[0];
  ctx.emit("roll", `Tentacles (${label(t)}): rolled ${n} +${t.st} ST \u2212${p.st} ST = ${n + t.st - p.st}; needs 6+ \u2014 ${r.value === "held" ? `${label(p)} is held and the activation ends` : "no effect"}.`, { page: 137, title: "Tentacles" });
  return r.value === "held";
}
function moveStep(ctx, p, act, step, opts = {}) {
  const s = ctx.s;
  const from = p.pos;
  const to = step.to;
  if (!inBounds(to)) throw new IllegalAction("Players can never voluntarily move off the pitch.");
  if (playerAt(s, to)) throw new IllegalAction(`${fmt(to)} is occupied.`);
  const held = heldInPlace(s, p);
  if (held) throw new IllegalAction(held);
  const isJump = step.kind !== "step";
  if (!isJump && !adjacent(from, to)) throw new IllegalAction(`${fmt(to)} is not adjacent to ${fmt(from)}.`);
  if (isJump) {
    if (dist(from, to) !== 2) throw new IllegalAction("A Jump/Leap must land two squares away.");
    const mid = jumpedSquare(s, p, from, to, step.kind);
    if (!mid) throw new IllegalAction(`No valid square to ${step.kind} over between ${fmt(from)} and ${fmt(to)}.`);
  }
  const cost = isJump ? 2 : 1;
  let bounding = false;
  if (step.kind === "leap" && starReady(s, p, "rowana")) {
    const hurt = Math.max(markersOf(s, from, p.team).length, markersOf(s, to, p.team).length) > 0;
    bounding = askStar(ctx, p, `Leap ${fmt(from)} \u2192 ${fmt(to)} with no negative modifiers, and a re-roll if it fails?`, "Use Bounding Leap", hurt);
    if (bounding) spendStar(ctx, p, `no negative modifiers for this Leap, and she may re-roll it.`);
  }
  payMovement(ctx, p, act, cost, isJump ? null : to, `move to ${fmt(to)}`);
  const markersFrom = markersOf(s, from, p.team);
  const leaving = markersFrom.length > 0;
  if (leaving && tentacles(ctx, p, from)) {
    act.over = true;
    throw new ActionStop("held");
  }
  const dtCandidates = leaving ? markersFrom.filter((q) => canUse(q, "divingTackle")) : [];
  const ptCount = leaving && markersFrom.some((q) => canUse(q, "prehensileTail")) ? 1 : 0;
  const armBar = markersFrom.filter((q) => canUse(q, "armBar"));
  if (!isJump) {
    p.pos = { ...to };
    ctx.emit("move", `${label(p)} moves ${fmt(from)} \u2192 ${fmt(to)}.`, R.move, { playerId: p.id, from, to });
    const incorporeal = !!act.starFlags?.includes("incorporeal");
    if (leaving && incorporeal) ctx.emit("note", `${label(p)} leaves ${fmt(from)} without a Dodge roll (Incorporeal).`, { page: 200, title: "Gretchen W\xE4chter: Incorporeal" });
    if (leaving && !incorporeal) {
      const markersTo = markersOf(s, to, p.team).filter((q) => !hasSkill(q, "titchy"));
      const mods = [];
      if (markersTo.length && !hasSkill(p, "stunty")) mods.push({ label: `Marked x${markersTo.length} in ${fmt(to)}`, value: -markersTo.length });
      if (ptCount) mods.push({ label: "Prehensile Tail", value: -1 });
      if (canUse(p, "twoHeads")) mods.push({ label: "Two Heads", value: 1 });
      if (hasSkill(p, "titchy")) mods.push({ label: "Titchy", value: 1 });
      const tackle = markersFrom.some((q) => canUse(q, "tackle"));
      const btAvail = canUse(p, "breakTackle") && !p.usage.breakTackle;
      const res = rollTest(ctx, {
        kind: "dodge",
        player: p,
        label: `Dodge from ${fmt(from)} to ${fmt(to)}`,
        target: p.ag,
        mods,
        rule: R.dodge,
        skillReroll: { id: "dodge", name: tackle ? "Dodge (cancelled by Tackle)" : "Dodge", available: canUse(p, "dodge") && !p.usage.dodgeReroll && !tackle, markUsed: () => p.usage.dodgeReroll = true },
        teamReroll: true,
        proAllowed: true,
        bonus: btAvail ? { id: "breakTackle", name: "Break Tackle", value: breakTackleValue(p), markUsed: () => p.usage.breakTackle = true } : void 0,
        lateMalus: dtCandidates.length ? -2 : void 0,
        onFail: "falls over \u2014 Turnover",
        extra: tackle ? { tackle: true } : void 0
      });
      let ok = res.success;
      if (ok && dtCandidates.length && res.lateOutcome === "F") {
        const dt = chooseOne(ctx, dtCandidates, "divingTackle", `${label(p)} dodged successfully (rolled ${res.natural}). Use Diving Tackle (\u22122, the tackler is Placed Prone in ${fmt(from)})?`, { page: 127, title: "Diving Tackle" }, true);
        if (dt) {
          ok = false;
          dt.pos = { ...from };
          ctx.emit("roll", `Diving Tackle by ${label(dt)}: \u22122 turns the Dodge into a failure.`, { page: 127, title: "Diving Tackle" });
          goDown(ctx, dt, { kind: "placedProne", reason: "Diving Tackle" });
        }
      }
      if (ok || !faq2026(ctx.s)) shadowing(ctx, p, from, markersFrom);
      if (!ok) {
        if (!(goDown(ctx, p, { kind: "fellOver", reason: "failed Dodge", armBar }).avoided && faq2026(ctx.s))) throw new ActionStop("fell");
      }
    }
  } else {
    const mods = jumpMods(s, p, from, to, step.kind, bounding);
    const verb = step.kind === "step" ? "Move" : step.kind === "jump" ? "Jump" : step.kind === "leap" ? "Leap" : "Pogo";
    const res = rollTest(ctx, {
      kind: "jump",
      player: p,
      at: to,
      label: `${verb} from ${fmt(from)} to ${fmt(to)}`,
      target: p.ag,
      mods,
      rule: step.kind === "jump" ? R.jump : { page: step.kind === "leap" ? 130 : 133, title: verb },
      outcome: (n, m) => n === 1 ? "F1" : d6Success(n, p.ag, m) ? "S" : "F",
      outcomeKey: `jump${p.ag}`,
      subkind: step.kind,
      skillReroll: bounding ? { id: "leap", name: "Bounding Leap (Rowana Forestfoot)", available: true } : void 0,
      teamReroll: true,
      proAllowed: true,
      lateMalus: dtCandidates.length ? -2 : void 0,
      onFail: "falls over \u2014 Turnover"
    });
    let outcome = res.outcome;
    let diver = null;
    if (outcome === "S" && dtCandidates.length && res.lateOutcome !== "S") {
      diver = chooseOne(ctx, dtCandidates, "divingTackle", `${label(p)} landed the ${verb} (rolled ${res.natural}). Use Diving Tackle (\u22122, the tackler is Placed Prone in ${fmt(from)})?`, { page: 127, title: "Diving Tackle" }, true);
      if (diver) {
        outcome = res.lateOutcome;
        ctx.emit("roll", `Diving Tackle by ${label(diver)}: \u22122 turns the ${verb} into a failure.`, { page: 127, title: "Diving Tackle" });
      }
    }
    if (outcome === "F1") {
      ctx.emit("move", `${label(p)} rolled a natural 1 and falls over in ${fmt(from)}.`, R.jump);
      goDown(ctx, p, { kind: "fellOver", reason: `failed ${verb} (natural 1)`, armBar });
      throw new ActionStop("fell");
    }
    p.pos = { ...to };
    ctx.emit("move", `${label(p)} ${verb === "Pogo" ? "pogoes" : verb.toLowerCase() + "s"} ${fmt(from)} \u2192 ${fmt(to)}.`, step.kind === "jump" ? R.jump : { page: 130, title: verb }, { playerId: p.id, from, to, kind: step.kind });
    if (diver) {
      diver.pos = { ...from };
      goDown(ctx, diver, { kind: "placedProne", reason: "Diving Tackle" });
    }
    if (outcome !== "S") {
      if (!(goDown(ctx, p, { kind: "fellOver", reason: `failed ${verb}`, armBar }).avoided && faq2026(ctx.s))) throw new ActionStop("fell");
    }
  }
  if (askBananaSkin(ctx, p, from)) {
    goDown(ctx, p, { kind: "placedProne", reason: "Discarded Banana Skin" });
    act.over = true;
    throw new ActionStop("banana skin");
  }
  if (trapdoorCheck(ctx, p)) throw new ActionStop("trapdoor");
  if (s.ball.kind === "ground" && eq(s.ball.pos, p.pos) && !opts.noPickup) {
    pickUp(ctx, p);
  }
  if (hasBall(s, p) && inScoringEndZone(p.team, p.pos)) checkTouchdown(ctx, true);
}
function shadowing(ctx, p, from, markersFrom) {
  const cands = markersFrom.filter((q) => canUse(q, "shadowing") && (q.usage.shadowing ?? 0) < q.ma);
  if (!cands.length || playerAt(ctx.s, from)) return;
  const sh = chooseOne(ctx, cands, "shadowing", `${label(p)} dodged out of ${fmt(from)}. Use Shadowing (4+) to follow into the vacated square?`, { page: 135, title: "Shadowing" }, true);
  if (!sh) return;
  sh.usage.shadowing = (sh.usage.shadowing ?? 0) + 1;
  const r = plainD6(ctx, `Shadowing (${label(sh)}) needs 4+`, { page: 135, title: "Shadowing" }, (n) => n >= 4, "shadow4", "F", sh.team);
  if (r.ok && !playerAt(ctx.s, from)) {
    const old = sh.pos;
    sh.pos = { ...from };
    ctx.emit("move", `${label(sh)} shadows from ${fmt(old)} into ${fmt(from)}.`, { page: 135, title: "Shadowing" }, { playerId: sh.id, from: old, to: from });
  }
}
function pickUp(ctx, p) {
  const s = ctx.s;
  const mods = [];
  const m = markersOf(s, p.pos, p.team).length;
  const big = canUse(p, "bigHand");
  if (m && !big) mods.push({ label: `Marked x${m}`, value: -m });
  if (s.weather === "pouringRain" && !big) mods.push({ label: "Pouring Rain", value: -1 });
  if (canUse(p, "extraArms")) mods.push({ label: "Extra Arms", value: 1 });
  const res = rollTest(ctx, {
    kind: "pickup",
    player: p,
    label: `${label(p)} picks up the ball in ${fmt(p.pos)}`,
    target: p.ag,
    mods,
    rule: R.pickUp,
    skillReroll: { id: "sureHands", name: "Sure Hands", available: canUse(p, "sureHands") },
    teamReroll: true,
    proAllowed: true,
    onFail: "the ball bounces \u2014 Turnover",
    autoFail: hasSkill(p, "noBall") ? "No Ball" : void 0
  });
  if (res.success) {
    s.ball = { kind: "held", playerId: p.id };
    ctx.emit("ball", `${label(p)} picks up the ball.`, R.pickUp, { holder: p.id });
    return;
  }
  ctx.setTurnover(`${label(p)} failed to pick up the ball`, R.turnover);
  const act = s.turn.activation;
  if (act) act.over = true;
  bounce(ctx, p.pos);
  throw new ActionStop("pickup failed");
}
function jumpedSquare(s, p, from, to, kind) {
  if (dist(from, to) !== 2) return null;
  const cands = [];
  for (let dx = -1; dx <= 1; dx++)
    for (let dy = -1; dy <= 1; dy++) {
      if (!dx && !dy) continue;
      const c = { x: from.x + dx, y: from.y + dy };
      if (!inBounds(c)) continue;
      if (adjacent(c, to) && !adjacent(from, to)) cands.push(c);
    }
  for (const c of cands) {
    const occ = playerAt(s, c);
    if (kind === "jump") {
      if (occ && occ.stance !== "standing") return c;
    } else if (kind === "leap" && canUse(p, "leap")) return c;
    else if (kind === "pogo" && canUse(p, "pogo")) return c;
  }
  return null;
}
function jumpMods(s, p, from, to, kind, bounding = false) {
  const markersFrom = markersOf(s, from, p.team);
  const ptCount = markersFrom.length > 0 && markersFrom.some((q) => canUse(q, "prehensileTail")) ? 1 : 0;
  const markersTo = markersOf(s, to, p.team).filter((q) => q.id !== p.id).length;
  const worst = Math.max(markersFrom.length, markersTo);
  let neg = -worst - ptCount;
  if (kind === "leap" && neg < 0) neg = Math.min(-1, neg + 1);
  if (kind === "pogo" || bounding) neg = 0;
  const mods = [];
  if (neg) mods.push({ label: kind === "leap" ? `Marked (max of ${markersFrom.length}/${markersTo})${ptCount ? " + Prehensile Tail" : ""}, Leap \u22121` : `Marked (max of ${markersFrom.length}/${markersTo})${ptCount ? " + Prehensile Tail" : ""}`, value: neg });
  if (canUse(p, "veryLongLegs")) mods.push({ label: "Very Long Legs", value: 1 });
  return mods;
}

// src/engine/routes.ts
function movementBudget(s, playerId, pathSoFar = []) {
  usePitch(s);
  const p = getPlayer(s, playerId);
  if (!p.pos || p.location !== "pitch" || p.stance === "stunned") return null;
  const act = s.turn.activation && s.turn.activation.playerId === p.id ? s.turn.activation : null;
  let maLeft = act ? Math.max(0, p.ma - act.maUsed) : p.ma;
  let rushesLeft = act ? Math.max(0, maxRushes(p) - act.rushesUsed) : maxRushes(p);
  let standUp2 = "none";
  if (!act && p.stance === "prone") {
    if (canUse(p, "jumpUp")) standUp2 = "free";
    else if (p.ma <= 2) {
      standUp2 = "roll4";
      maLeft = 0;
    } else {
      standUp2 = "costs3";
      maLeft = p.ma - 3;
    }
  }
  let from = p.pos;
  for (const st of pathSoFar) {
    const cost = st.kind === "step" ? 1 : 2;
    const fromMa = Math.min(cost, maLeft);
    maLeft -= fromMa;
    rushesLeft -= cost - fromMa;
    from = st.to;
  }
  if (rushesLeft < 0) return null;
  return { from, maLeft, rushesLeft, standUp: standUp2 };
}
function reachableSquares(s, playerId, pathSoFar = [], opts = {}) {
  usePitch(s);
  const b = movementBudget(s, playerId, pathSoFar);
  if (!b) return [];
  const p = getPlayer(s, playerId);
  const total = b.maLeft + b.rushesLeft;
  const blocked = new Set(opts.revisit ? [] : pathSoFar.map((st) => `${st.to.x},${st.to.y}`));
  if (p.pos && !opts.revisit) blocked.add(`${p.pos.x},${p.pos.y}`);
  const seen = /* @__PURE__ */ new Map([[`${b.from.x},${b.from.y}`, 0]]);
  const q = [b.from];
  const out = [];
  while (q.length) {
    const c = q.shift();
    const d2 = seen.get(`${c.x},${c.y}`);
    if (d2 >= total) continue;
    for (const n of neighbours(c)) {
      const k = `${n.x},${n.y}`;
      if (seen.has(k) || blocked.has(k)) continue;
      const occ = playerAt(s, n);
      if (occ && occ.id !== p.id) continue;
      seen.set(k, d2 + 1);
      out.push({ c: n, steps: d2 + 1, rushes: Math.max(0, d2 + 1 - b.maLeft) });
      q.push(n);
    }
  }
  return out;
}
function dodgeChance(s, p, from, to) {
  return dodgeChanceWith(p, markersOf(s, from, p.team), markersOf(s, to, p.team));
}
function dodgeChanceWith(p, markersFrom, markersToAll) {
  if (!markersFrom.length) return 1;
  let mod = 0;
  const markersTo = markersToAll.filter((q) => !hasSkill(q, "titchy"));
  if (markersTo.length && !hasSkill(p, "stunty")) mod -= markersTo.length;
  if (markersFrom.some((q) => canUse(q, "prehensileTail"))) mod -= 1;
  if (canUse(p, "twoHeads")) mod += 1;
  if (hasSkill(p, "titchy")) mod += 1;
  const one = d6SuccessProb(p.ag, mod);
  const tackle = markersFrom.some((q) => canUse(q, "tackle"));
  const reroll = canUse(p, "dodge") && !p.usage.dodgeReroll && !tackle;
  return reroll ? one + (1 - one) * one : one;
}
function rushChance(s, p) {
  let mod = 0;
  if (s.weather === "blizzard") mod -= 1;
  if (hasSkill(p, "drunkard")) mod -= 1;
  if (molesUnder(s, p)) mod -= 1;
  const one = d6SuccessProb(2, mod);
  return canUse(p, "sureFeet") && !p.usage.sureFeet ? one + (1 - one) * one : one;
}
function safestRoute(s, playerId, to, pathSoFar = [], opts = {}) {
  usePitch(s);
  const b = movementBudget(s, playerId, pathSoFar);
  if (!b) return null;
  const p = getPlayer(s, playerId);
  const total = b.maLeft + b.rushesLeft;
  const ball = s.ball.kind === "ground" ? s.ball.pos : null;
  const key3 = (c) => c.x * 15 + c.y;
  const blocked = new Set(opts.revisit ? [] : pathSoFar.map((st) => key3(st.to)));
  if (p.pos && !opts.revisit) blocked.add(key3(p.pos));
  const occupied = /* @__PURE__ */ new Set();
  for (const q of s.players) if (q.location === "pitch" && q.pos && !(opts.revisit && q.id === p.id)) occupied.add(key3(q.pos));
  const markCache = /* @__PURE__ */ new Map();
  const marks = (c) => {
    const k = key3(c);
    let m = markCache.get(k);
    if (!m) {
      m = markersOf(s, c, p.team);
      markCache.set(k, m);
    }
    return m;
  };
  const pRush = rushChance(s, p);
  const EPS = 1e-12;
  const best = /* @__PURE__ */ new Map();
  const better = (a, c) => a.cost < c.cost - EPS ? true : a.cost > c.cost + EPS ? false : a.steps !== c.steps ? a.steps < c.steps : a.turns < c.turns;
  const start = { c: b.from, steps: 0, dir: -1, cost: 0, turns: 0, dodges: 0, prev: null };
  const heap = [];
  const push = (n) => {
    heap.push(n);
    let i = heap.length - 1;
    while (i > 0) {
      const par = i - 1 >> 1;
      if (!better(heap[i], heap[par])) break;
      [heap[i], heap[par]] = [heap[par], heap[i]];
      i = par;
    }
  };
  const pop = () => {
    const top = heap[0];
    const last = heap.pop();
    if (heap.length) {
      heap[0] = last;
      let i = 0;
      for (; ; ) {
        const l = 2 * i + 1;
        const r = l + 1;
        let m = i;
        if (l < heap.length && better(heap[l], heap[m])) m = l;
        if (r < heap.length && better(heap[r], heap[m])) m = r;
        if (m === i) break;
        [heap[i], heap[m]] = [heap[m], heap[i]];
        i = m;
      }
    }
    return top;
  };
  const far = (c) => Math.max(Math.abs(c.x - to.x), Math.abs(c.y - to.y));
  push(start);
  let goal = null;
  while (heap.length) {
    const cur = pop();
    if (cur.c.x === to.x && cur.c.y === to.y && cur.steps > 0) {
      if (!goal || better(cur, goal)) goal = cur;
      continue;
    }
    if (goal && cur.cost > goal.cost + EPS) break;
    if (cur.steps >= total) continue;
    const fromMarks = marks(cur.c);
    const nb = neighbours(cur.c);
    nb.forEach((n, dir) => {
      const k0 = key3(n);
      if (blocked.has(k0)) return;
      if (occupied.has(k0)) return;
      const steps = cur.steps + 1;
      if (steps + far(n) > total) return;
      const isGoal = n.x === to.x && n.y === to.y;
      if (ball && ball.x === n.x && ball.y === n.y && !isGoal) return;
      let pStep = fromMarks.length ? dodgeChanceWith(p, fromMarks, marks(n)) : 1;
      if (steps > b.maLeft) pStep *= pRush;
      if (pStep <= 0) return;
      const dodged = fromMarks.length > 0;
      const node = { c: n, steps, dir, cost: cur.cost - Math.log(pStep), turns: cur.turns + (cur.dir >= 0 && cur.dir !== dir ? 1 : 0), dodges: cur.dodges + (dodged ? 1 : 0), prev: cur };
      const k = (k0 * 32 + steps) * 8 + dir;
      const old = best.get(k);
      if (old && !better(node, old)) return;
      best.set(k, node);
      push(node);
    });
  }
  if (!goal) return null;
  const path = [];
  for (let n = goal; n && n.prev; n = n.prev) path.unshift({ to: { ...n.c }, kind: "step" });
  const rushes = Math.max(0, goal.steps - b.maLeft);
  const shortest = reachableSquares(s, playerId, pathSoFar, opts).find((r) => r.c.x === to.x && r.c.y === to.y)?.steps ?? goal.steps;
  return { path, pSafe: Math.exp(-goal.cost), dodges: goal.dodges, rushes, detour: goal.steps > shortest };
}
function jumpOptions(s, playerId, pathSoFar = []) {
  usePitch(s);
  const b = movementBudget(s, playerId, pathSoFar);
  if (!b || b.maLeft + b.rushesLeft < 2) return [];
  const p = getPlayer(s, playerId);
  if (!p.pos) return [];
  const from = b.from;
  const out = [];
  const pRush = rushChance(s, p);
  for (let dx = -2; dx <= 2; dx++)
    for (let dy = -2; dy <= 2; dy++) {
      if (Math.max(Math.abs(dx), Math.abs(dy)) !== 2) continue;
      const to = { x: from.x + dx, y: from.y + dy };
      if (!inBounds(to)) continue;
      const occ = playerAt(s, to);
      if (occ && occ.id !== p.id) continue;
      let best = null;
      for (const kind of ["jump", "leap", "pogo"]) {
        if (kind !== "jump" && !canUse(p, kind)) continue;
        const over = jumpedSquare(s, p, from, to, kind);
        if (!over) continue;
        const mods = jumpMods(s, p, from, to, kind);
        const m = mods.reduce((a, x) => a + x.value, 0);
        const pTest = d6SuccessProb(p.ag, m);
        const rushes = Math.max(0, 2 - b.maLeft);
        const o = { to, kind, over, target: p.ag, mods, rushes, pTest, pRushes: Math.pow(pRush, rushes) };
        if (!best || o.pTest > best.pTest + 1e-9) best = o;
      }
      if (best) out.push(best);
    }
  return out;
}

// src/engine/onTheBall.ts
var OTB_RULE = { page: 132, title: "On the Ball" };
function shortMoves(ctx, p, limit, allowed) {
  const s = ctx.s;
  const start = p.pos;
  const best = /* @__PURE__ */ new Map();
  let frontier = [{ c: start, path: [], dodges: 0 }];
  best.set(`${start.x},${start.y}`, frontier[0]);
  for (let step = 0; step < limit; step++) {
    const next = [];
    for (const n of frontier) {
      const leaving = markersOf(s, n.c, p.team).length > 0;
      for (const c of neighbours(n.c)) {
        if (!inBounds(c) || playerAt(s, c)) continue;
        const k = `${c.x},${c.y}`;
        const node = { c, path: [...n.path, { to: c, kind: "step" }], dodges: n.dodges + (leaving ? 1 : 0) };
        const old = best.get(k);
        if (old && (old.dodges < node.dodges || old.dodges === node.dodges && old.path.length <= node.path.length)) continue;
        best.set(k, node);
        next.push(node);
      }
    }
    frontier = next;
  }
  const out = [];
  for (const n of best.values()) if (n.path.length && allowed(n.c)) out.push({ to: n.c, path: n.path, dodges: n.dodges });
  out.sort((a, b) => a.dodges - b.dodges || a.path.length - b.path.length || a.to.x - b.to.x || a.to.y - b.to.y);
  return out;
}
function freeMove(ctx, p, path) {
  const limit = path.length;
  const tmp = { playerId: p.id, action: "move", maUsed: Math.max(0, p.ma - limit), rushesUsed: maxRushes(p), blocksDone: 0, ballActionDone: false, proUsed: true, stallingCandidate: false, over: false };
  try {
    for (const st of path) moveStep(ctx, p, tmp, st, { noPickup: true });
  } catch (e) {
    if (e instanceof ActionStop) return false;
    throw e;
  }
  return true;
}
function onTheBallPass(ctx, passer) {
  const s = ctx.s;
  if (gated("onTheBall")) return;
  const team2 = passer.team === "A" ? "B" : "A";
  const moved = /* @__PURE__ */ new Set();
  for (let guard = 0; guard < 16; guard++) {
    const cands = pitchPlayers(s, team2).filter((q2) => !moved.has(q2.id) && canUse(q2, "onTheBall") && !heldInPlace(s, q2) && Math.min(3, q2.ma) > 0);
    if (!cands.length) return;
    const pick = ctx.ask({
      type: "onTheBall",
      team: team2,
      prompt: `${label(passer)} is about to pass. Move a player with On the Ball (up to 3 squares, no Rush) before the Passing Ability Test?`,
      options: [{ id: "none", label: "No (more) On the Ball moves" }, ...cands.map((q2) => ({ id: q2.id, label: `Move ${label(q2)}`, square: q2.pos }))],
      rule: OTB_RULE
    });
    if (pick === "none") return;
    const q = cands.find((c) => c.id === pick);
    moved.add(q.id);
    if (!moveOnTheBall(ctx, q, () => true)) return;
  }
}
function moveOnTheBall(ctx, q, allowed) {
  const moves = shortMoves(ctx, q, Math.min(3, q.ma), allowed);
  if (!moves.length) return true;
  const dest = ctx.ask({
    type: "onTheBall",
    team: q.team,
    prompt: `On the Ball: where does ${label(q)} move (route with the fewest Dodges)?`,
    options: [{ id: "stay", label: "Stay put" }, ...moves.map((m2) => ({ id: `${m2.to.x},${m2.to.y}`, label: `${fmt(m2.to)}${m2.dodges ? ` (${m2.dodges} Dodge${m2.dodges > 1 ? "s" : ""})` : ""}`, square: m2.to }))],
    rule: OTB_RULE,
    context: { mover: q.id }
  });
  if (dest === "stay") return true;
  const m = moves.find((x) => `${x.to.x},${x.to.y}` === dest);
  ctx.emit("move", `${label(q)} uses On the Ball.`, OTB_RULE, { playerId: q.id });
  const ok = freeMove(ctx, q, m.path);
  if (!ok) ctx.emit("note", `${label(q)}'s On the Ball move ends.`, OTB_RULE);
  return ok;
}
function onTheBallKickoff(ctx, receiving, ownHalf) {
  const s = ctx.s;
  if (gated("onTheBall")) return;
  const cands = pitchPlayers(s, receiving).filter((q) => canUse(q, "onTheBall") && hasTackleZone(q) && isOpen(s, q) && !heldInPlace(s, q));
  if (!cands.length) return;
  const pick = ctx.ask({
    type: "onTheBall",
    team: receiving,
    prompt: isSevens(s) ? "On the Ball: move one Open player up to 3 squares \u2014 No Man's Land included, not past the halfway line \u2014 before the Kick-off Event?" : "On the Ball: move one Open player up to 3 squares in your half before the Kick-off Event?",
    options: [{ id: "none", label: "No On the Ball move" }, ...cands.map((q) => ({ id: q.id, label: `Move ${label(q)}`, square: q.pos }))],
    rule: OTB_RULE
  });
  if (pick === "none") return;
  moveOnTheBall(ctx, cands.find((c) => c.id === pick), ownHalf);
}

// src/engine/pass.ts
function passBlockedReason(ctx, p) {
  if (p.pa === null) return 'This player has no Passing Ability (PA "-"); the rulebook gives no rule for such a pass, so Pass Actions are disabled.';
  if (hasSkill(p, "myBall")) return "My Ball: this player may not declare Pass Actions (p.132).";
  const otb = gated("onTheBall") ? pitchPlayers(ctx.s, other(p.team)).find((q) => canUse(q, "onTheBall")) : void 0;
  if (otb) return `Not available yet: ${label(otb)} has On the Ball (p.132), so Pass Actions are disabled in this version.`;
  const dc = gated("divingCatch") ? pitchPlayers(ctx.s).find((q) => canUse(q, "divingCatch")) : void 0;
  if (dc) return `Not available yet: ${label(dc)} has Diving Catch (p.127), so Pass Actions are disabled in this version.`;
  return null;
}
function passInfo(ctx, p, from, target, hailMary) {
  if (!inBounds(target)) return "The target square must be on the pitch.";
  if (eq(from, target)) return "Choose a different target square.";
  let range;
  if (hailMary) {
    if (!canUse(p, "hailMaryPass")) return "This player does not have Hail Mary Pass.";
    range = "bomb";
  } else {
    range = passRange(from, target);
    if (!range) return "The target square is out of range (Passing Range Chart, p.71).";
  }
  if (ctx.s.weather === "blizzard" && (range === "long" || range === "bomb")) return "Blizzard: only Quick or Short Passes are allowed (p.46).";
  const mods = [];
  const tandem = !hailMary && p.star === "valen" && playerAt(ctx.s, target)?.star === "lucien" && playerAt(ctx.s, target)?.team === p.team;
  if (RANGE_MOD[range] && !tandem) mods.push({ label: hailMary ? "Hail Mary (Long Bomb)" : RANGE_LABEL[range], value: RANGE_MOD[range] });
  const tmp = { ...p, pos: from };
  const m = markersOf(ctx.s, from, p.team).length;
  if (m && !canUse(tmp, "nervesOfSteel")) mods.push({ label: `Marked x${m}`, value: -m });
  if (ctx.s.weather === "verySunny") mods.push({ label: "Very Sunny", value: -1 });
  mods.push(...disturbingPresenceMods(ctx, tmp));
  if (canUse(p, "accurate") && (range === "quick" || range === "short")) mods.push({ label: "Accurate", value: 1 });
  if (canUse(p, "cannoneer") && (range === "long" || range === "bomb")) mods.push({ label: "Cannoneer", value: 1 });
  return { range, mods, hailMary };
}
function animosity(ctx, p, receiver, act) {
  if (!receiver || receiver.team !== p.team || !hasSkill(p, "animosity")) return true;
  const kws = skillKeywords(p, "animosity");
  const applies = kws.some((k) => k.toLowerCase() === "all" || receiver.keywords.includes(k));
  if (!applies) return true;
  const r = rollTest(ctx, {
    kind: "animosity",
    player: p,
    label: `Animosity (${kws.join(", ")}) towards ${label(receiver)}`,
    target: 2,
    mods: [],
    rule: { page: 123, title: "Animosity" },
    teamReroll: true,
    proAllowed: true,
    onFail: "refuses; activation ends"
  });
  if (!r.success) {
    ctx.emit("status", `${label(p)} refuses to give the ball to ${label(receiver)}; the activation ends.`, { page: 123, title: "Animosity" });
    act.over = true;
    return false;
  }
  return true;
}
function interceptors(ctx, thrower, from, landing) {
  const cloud = canUse(thrower, "cloudBurster");
  return pitchPlayers(ctx.s, other(thrower.team)).filter(
    (q) => hasTackleZone(q) && !hasSkill(q, "noBall") && rulerOverlaps(from, landing, q.pos, ctx.s.options.rulerWidth) && (!cloud || canUse(q, "veryLongLegs"))
  );
}
function interceptAttempt(ctx, q, accurate, what, onFail) {
  if (starReady(ctx.s, q, "scrappa") && askStar(ctx, q, `roll a D6 \u2014 on a 2+ he intercepts ${what} automatically?`, "Use Yoink! (D6 2+)", true, "Roll to Intercept as normal")) {
    const r = ctx.roll({ dice: [6], interpret: ([n]) => n >= 2 ? "S" : "F", cacheKey: "yoink2", by: q.team, judge: (v) => v === "S" ? 1 : -1, prefer: (v) => v === "F" });
    spendStar(ctx, q, `D6 ${r.faces[0]} \u2014 ${r.value === "S" ? "he intercepts automatically" : "no luck: he rolls to Intercept as normal"}.`);
    if (r.value === "S") return true;
  }
  return rollTest(ctx, { kind: "intercept", player: q, label: `${label(q)} intercepts${what === "the pass" ? "" : ` ${what}`}`, target: q.ag, mods: interceptMods(ctx, q, accurate), rule: R.interception, teamReroll: false, proAllowed: false, onFail }).success;
}
function interceptMods(ctx, q, accurate) {
  const mods = [{ label: accurate ? "Accurate Pass" : "Inaccurate Pass", value: accurate ? -3 : -2 }];
  const m = markersOf(ctx.s, q.pos, q.team).length;
  if (m) mods.push({ label: `Marked x${m}`, value: -m });
  if (ctx.s.weather === "pouringRain") mods.push({ label: "Pouring Rain", value: -1 });
  if (hasSkill(q, "stunty")) mods.push({ label: "Stunty", value: -1 });
  if (canUse(q, "extraArms")) mods.push({ label: "Extra Arms", value: 1 });
  if (canUse(q, "veryLongLegs")) mods.push({ label: "Very Long Legs", value: 2 });
  mods.push(...disturbingPresenceMods(ctx, q));
  return mods;
}
function performPass(ctx, p, target, hailMary, act) {
  const s = ctx.s;
  if (!hasBall(s, p)) {
    ctx.emit("note", `${label(p)} is not holding the ball, so no pass can be made.`, R.pass);
    act.over = true;
    return;
  }
  const why = passBlockedReason(ctx, p);
  if (why) throw new IllegalAction(why);
  const from = p.pos;
  const info = passInfo(ctx, p, from, target, hailMary);
  if (typeof info === "string") throw new IllegalAction(info);
  const receiver = playerAt(s, target);
  requireBite(ctx, p, act, "pass");
  if (!animosity(ctx, p, receiver, act)) throw new ActionStop("animosity");
  act.ballActionDone = true;
  ctx.emit("declare", `${label(p)} throws a ${hailMary ? "Hail Mary Pass" : RANGE_LABEL[info.range]} at ${fmt(target)}${receiver ? ` (${label(receiver)})` : ""}.`, R.pass, { from, target, range: info.range, hailMary });
  onTheBallPass(ctx, p);
  const info2 = passInfo(ctx, p, from, target, hailMary);
  if (typeof info2 !== "string") info.mods = info2.mods;
  const safePass = canUse(p, "safePass");
  const setPiece = !!act.setPiece && !hailMary;
  const pa = setPiece ? 2 : p.pa;
  const res = rollTest(ctx, {
    kind: "pass",
    player: p,
    label: `Passing Ability Test (${hailMary ? "Hail Mary" : RANGE_LABEL[info.range]})${setPiece ? " \u2014 Set Piece: Accurate on any 2+" : ""}`,
    target: pa,
    mods: setPiece ? [] : info.mods,
    rule: R.passTest,
    outcome: (n, m) => {
      if (n === 1) return safePass ? "safe" : "fumble";
      if (setPiece) return "accurate";
      const mod = Math.max(1, Math.min(6, n + m));
      if (n !== 6 && mod <= 1) return "fumble";
      if (d6Success(n, pa, m)) return hailMary ? "inaccurate" : "accurate";
      return "inaccurate";
    },
    outcomeKey: `pass${pa}|${safePass}|${hailMary}|${setPiece}`,
    isSuccess: (o) => o === (hailMary ? "inaccurate" : "accurate"),
    skillReroll: { id: "pass", name: "Pass", available: canUse(p, "pass") },
    teamReroll: true,
    proAllowed: true,
    onFail: "Inaccurate (Scatter 3) or Fumbled"
  });
  const outcome = res.outcome;
  if (outcome === "safe") {
    ctx.emit("ball", `Safe Pass: the natural 1 is not a Fumble \u2014 ${label(p)} keeps the ball and the activation ends (no Turnover).`, { page: 135, title: "Safe Pass" });
    act.over = true;
    return;
  }
  if (outcome === "fumble") {
    ctx.emit("ball", `Fumbled Pass! The ball bounces from ${fmt(from)}.`, R.passTest);
    ctx.setTurnover(`${label(p)} fumbled the pass`, R.turnover);
    act.over = true;
    s.ball = { kind: "ground", pos: { ...from } };
    bounce(ctx, from);
    throw new ActionStop("fumble");
  }
  const accurate = outcome === "accurate";
  s.ball = { kind: "none" };
  let landing = target;
  let out = null;
  if (accurate) {
    ctx.emit("ball", `Accurate Pass: the ball is heading for ${fmt(target)}.`, R.passTest);
  } else {
    const sc = hailMary && p.star === "barik" ? ctx.mode === "plan" ? blastItPlan(ctx, p, target) : blastIt(ctx, p, target) : scatter(ctx, target, 3, "Inaccurate Pass");
    if ("land" in sc) landing = sc.land;
    else {
      landing = null;
      out = sc;
    }
  }
  if (landing && !hailMary) {
    const cands = interceptors(ctx, p, from, landing);
    if (cands.length) {
      const pick = ctx.ask({
        type: "interceptor",
        team: other(p.team),
        prompt: `The Range Ruler from ${fmt(from)} to ${fmt(landing)} covers ${cands.length} of your Standing players. Attempt an Interception?`,
        options: [
          ...cands.map((q) => ({ id: q.id, label: `Intercept with ${label(q)}`, square: q.pos })),
          { id: "none", label: "No interception attempt" }
        ],
        rule: R.interception,
        context: { from, landing, accurate }
      });
      if (pick !== "none") {
        const q = cands.find((c) => c.id === pick);
        if (interceptAttempt(ctx, q, accurate, "the pass", "the pass continues")) {
          s.ball = { kind: "held", playerId: q.id };
          ctx.emit("ball", `${label(q)} intercepts the pass!`, R.interception, { holder: q.id });
          awardSpp(ctx, q, "interception");
          ctx.setTurnover("the pass was intercepted", R.interception);
          act.over = true;
          checkTouchdown(ctx, false);
          throw new ActionStop("intercepted");
        }
      }
    }
  } else if (landing && hailMary) {
    ctx.emit("note", "A Hail Mary Pass cannot be Intercepted.", { page: 129, title: "Hail Mary Pass" });
  }
  if (landing) {
    ctx.emit("ball", `The ball lands in ${fmt(landing)}.`, R.resolvePass, { landing });
    const direct = ballArrives(ctx, landing, hailMary && p.star === "barik" ? p.team === "A" ? "barikA" : "barikB" : eq(landing, target) ? setPiece && receiver ? "setPiece" : "passTarget" : "pass");
    const h0 = ballHolder(s);
    if (direct && accurate && h0 && h0.team === p.team && h0.id !== p.id) awardSpp(ctx, p, "completion");
  } else if (out) {
    throwIn(ctx, out.last, out.off);
  }
  act.over = !(act.razzle && !act.razzle.second);
  const h = ballHolder(s);
  if ((!h || h.team !== p.team) && !ctx.quickBite) ctx.setTurnover("no team-mate caught the pass", R.resolvePass);
  checkTouchdown(ctx, true);
  if (ctx.turnover) throw new ActionStop("pass failed");
  if (canUse(p, "giveAndGo") && info.range === "quick" && !hailMary) {
    act.over = false;
    ctx.emit("note", "Give and Go: the passer may continue moving.", { page: 128, title: "Give and Go" });
  }
}
function blastIt(ctx, p, target) {
  const r = ctx.roll({ dice: [8, 8, 8], interpret: (f) => f.join(","), cacheKey: "d8x3" });
  let faces = r.faces.slice();
  const path = () => scatterPath(target, faces);
  const txt = (x) => "land" in x ? fmt(x.land) : `out of the pitch after ${fmt(x.last)}`;
  ctx.emit("ball", `Hail Mary Pass: Scatter (3) from ${fmt(target)} \u2014 D8 ${faces.join(", ")} \u2192 ${txt(path())}.`, R.scatter, { d8: faces, result: path() });
  const subsets = [[0], [1], [2], [0, 1], [0, 2], [1, 2], [0, 1, 2]];
  const best = blastItBest(ctx.s, p, target, faces, { useSkillRerolls: true, usePro: true, useTeamRerolls: true });
  const tag = (id) => id === best.choice ? ` \u2014 best: ${Math.round(best.ev * 100)}% your team ends with the ball` : "";
  const c = ctx.ask({
    type: "starRule",
    team: p.team,
    prompt: `Blast It! (Barik Farblast): the ball would come down ${txt(path())} (${Math.round(best.keep * 100)}% your team ends with the ball). Re-roll any of the scatter dice (${faces.join(", ")})?`,
    options: [{ id: "none", label: `Keep them${tag("none")}` }, ...subsets.map((sub) => ({ id: sub.join(""), label: `Re-roll ${sub.map((i) => `die ${i + 1} (${faces[i]})`).join(" + ")}${tag(sub.join(""))}` }))],
    rule: starRuleRef(STAR_BY_ID.barik),
    context: { star: "barik", pick: true, best: best.choice }
  });
  if (c !== "none") {
    const idx = c.split("").map(Number);
    const again = ctx.roll({ dice: idx.map(() => 8), interpret: (f) => f.join(","), cacheKey: `d8x${idx.length}` });
    idx.forEach((i, k) => faces[i] = again.faces[k]);
    faces = faces.slice();
    ctx.emit("ball", `Blast It!: re-rolled \u2192 D8 ${faces.join(", ")} \u2192 ${txt(path())}.`, starRuleRef(STAR_BY_ID.barik), { d8: faces, result: path() });
  }
  return path();
}
function blastItPlan(ctx, p, target) {
  const outs = blastItOutcomes(ctx.s, p, target, ctx.policy);
  const r = ctx.dice.choose(outs.map((o) => ({ key: o.key, p: o.p, value: o.value })));
  ctx.emit("ball", `Hail Mary Pass: Scatter (3) from ${fmt(target)} with Blast It! (the best re-roll assumed) \u2192 ${"land" in r ? fmt(r.land) : `out of the pitch after ${fmt(r.last)}`}.`, starRuleRef(STAR_BY_ID.barik), { result: r });
  return r;
}
function handoffBlockedReason(ctx, p, receiver) {
  if (hasSkill(p, "myBall")) return "My Ball: this player may not declare Hand-off Actions (p.132).";
  if (receiver.team !== p.team) return "Hand-offs go to a team-mate.";
  if (!hasTackleZone(receiver)) return "The receiver must be a Standing team-mate who has not lost their Tackle Zone (p.74).";
  void ctx;
  return null;
}
function performHandoff(ctx, p, receiver, act) {
  const s = ctx.s;
  if (!hasBall(s, p)) {
    ctx.emit("note", `${label(p)} is not holding the ball, so no hand-off can be made.`, R.handoff);
    act.over = true;
    return;
  }
  const why = handoffBlockedReason(ctx, p, receiver);
  if (why) throw new IllegalAction(why);
  if (!p.pos || !receiver.pos || !adjacent(p.pos, receiver.pos)) throw new IllegalAction("The receiver must be adjacent to finish a Hand-off.");
  requireBite(ctx, p, act, "handoff");
  if (receiver.location !== "pitch" || receiver.stance !== "standing") {
    ctx.emit("status", `${label(receiver)} can no longer take the Hand-off (bitten), so it is not made; ${label(p)} keeps the ball and the activation ends.`, R.handoff, { playerId: p.id });
    act.over = true;
    throw new ActionStop("handoff: receiver bitten");
  }
  if (!animosity(ctx, p, receiver, act)) throw new ActionStop("animosity");
  act.ballActionDone = true;
  ctx.emit("declare", `${label(p)} hands the ball to ${label(receiver)}.`, R.handoff);
  s.ball = { kind: "none" };
  const ok = catchAttempt(ctx, receiver, "handoff");
  if (!ok) {
    s.ball = { kind: "ground", pos: { ...receiver.pos } };
    bounce(ctx, receiver.pos);
  }
  act.over = !(act.razzle && !act.razzle.second);
  const h = ballHolder(s);
  if ((!h || h.team !== p.team) && !ctx.quickBite) ctx.setTurnover("the hand-off was not caught", R.handoff);
  checkTouchdown(ctx, true);
  if (ctx.turnover) throw new ActionStop("handoff failed");
  if (canUse(p, "giveAndGo")) {
    act.over = false;
    ctx.emit("note", "Give and Go: the player may continue moving.", { page: 128, title: "Give and Go" });
  }
}
function dumpOffPass(ctx, p, target) {
  const s = ctx.s;
  const rule2 = { page: 128, title: "Dump-off" };
  const from = p.pos;
  const info = passInfo(ctx, p, from, target, false);
  if (typeof info === "string" || info.range !== "quick" || p.pa === null) return;
  const receiver = playerAt(s, target);
  ctx.emit("declare", `${label(p)} dumps the ball off: a Quick Pass to ${fmt(target)}${receiver ? ` (${label(receiver)})` : ""}.`, rule2, { from, target, range: "quick" });
  const safePass = canUse(p, "safePass");
  const pa = p.pa;
  const res = rollTest(ctx, {
    kind: "pass",
    player: p,
    label: "Passing Ability Test (Quick Pass, Dump-off)",
    target: pa,
    mods: info.mods,
    rule: R.passTest,
    outcome: (n, m) => {
      if (n === 1) return safePass ? "safe" : "fumble";
      const mod = Math.max(1, Math.min(6, n + m));
      if (n !== 6 && mod <= 1) return "fumble";
      return d6Success(n, pa, m) ? "accurate" : "inaccurate";
    },
    outcomeKey: `pass${pa}|${safePass}|false`,
    isSuccess: (o) => o === "accurate",
    skillReroll: { id: "pass", name: "Pass", available: canUse(p, "pass") },
    teamReroll: false,
    proAllowed: false,
    onFail: "Inaccurate (Scatter 3) or Fumbled"
  });
  if (res.outcome === "safe") {
    ctx.emit("ball", `Safe Pass: ${label(p)} keeps the ball.`, { page: 135, title: "Safe Pass" });
    return;
  }
  if (res.outcome === "fumble") {
    ctx.emit("ball", `Fumbled Dump-off! The ball bounces from ${fmt(from)} (no Turnover).`, rule2);
    s.ball = { kind: "ground", pos: { ...from } };
    bounce(ctx, from);
    return;
  }
  const accurate = res.outcome === "accurate";
  s.ball = { kind: "none" };
  let landing = target;
  let out = null;
  if (!accurate) {
    const sc = scatter(ctx, target, 3, "Inaccurate Pass");
    if ("land" in sc) landing = sc.land;
    else {
      landing = null;
      out = sc;
    }
  }
  if (landing) {
    const cands = interceptors(ctx, p, from, landing);
    if (cands.length) {
      const pick = ctx.ask({
        type: "interceptor",
        team: other(p.team),
        prompt: `The Range Ruler of the Dump-off covers ${cands.length} of your Standing players. Attempt an Interception?`,
        options: [...cands.map((q) => ({ id: q.id, label: `Intercept with ${label(q)}`, square: q.pos })), { id: "none", label: "No interception attempt" }],
        rule: R.interception,
        context: { from, landing, accurate }
      });
      if (pick !== "none") {
        const q = cands.find((c) => c.id === pick);
        if (interceptAttempt(ctx, q, accurate, "the pass", "the pass continues")) {
          s.ball = { kind: "held", playerId: q.id };
          ctx.emit("ball", `${label(q)} intercepts the Dump-off!`, R.interception, { holder: q.id });
          awardSpp(ctx, q, "interception");
          checkTouchdown(ctx, false);
          return;
        }
      }
    }
    ctx.emit("ball", `The ball lands in ${fmt(landing)}.`, R.resolvePass, { landing });
    ballArrives(ctx, landing, eq(landing, target) ? "passTarget" : "pass");
  } else if (out) throwIn(ctx, out.last, out.off);
  checkTouchdown(ctx, false);
}

// src/engine/foul.ts
var FOUL_RULE = { page: 69, title: "Foul Actions" };
var ARGUE_RULE = { page: 69, title: "Argue the Call" };
var BRIBERY_CORRUPTION_RULE = { page: 154, title: "Bribery and Corruption" };
var BRIBE_RULE = { page: 144, title: "Bribes" };
function foulTargets(s, p, from = p.pos) {
  if (!from) return [];
  return pitchPlayers(s).filter((q) => q.team !== p.team && q.stance !== "standing" && !!q.pos && adjacent(q.pos, from));
}
function foulAssistReason(s, helper, against, offensive) {
  if (!hasTackleZone(helper) || helper.eyeGouged) return "no Tackle Zone";
  if (!helper.pos || !against.pos || !adjacent(helper.pos, against.pos)) return "not adjacent";
  if (!offensive && against.stance !== "standing") return "not Marking";
  const markers = markersOf(s, helper.pos, helper.team).filter((m) => m.id !== against.id);
  if (!markers.length) return null;
  if (offensive && canUse(helper, "putTheBootIn")) {
    const cancelled = markers.some((m) => canUse(m, "defensive") && m.team !== s.turn.active);
    return cancelled ? "Put the Boot In cancelled by Defensive" : null;
  }
  return "Marked by another opposition player";
}
function foulAssists(s, fouler, target) {
  const off = pitchPlayers(s, fouler.team).filter((q) => q.id !== fouler.id && !foulAssistReason(s, q, target, true));
  const def = pitchPlayers(s, target.team).filter((q) => q.id !== target.id && !foulAssistReason(s, q, fouler, false));
  return { off, def };
}
function coachEjected(s, team2) {
  return s.match ? !!s.match.coachEjected[team2] : !!s.teams[team2].coachEjected;
}
function ejectCoach(s, team2) {
  if (s.match) s.match.coachEjected[team2] = true;
  else s.teams[team2].coachEjected = true;
}
function sendOff(ctx, p, why) {
  const s = ctx.s;
  let result = "sentOff";
  const amateur = rulesFor(s).argueTable === "amateur";
  const rule2 = amateur ? rulesFor(s).refs.argue : ARGUE_RULE;
  if (!coachEjected(s, p.team)) {
    const argue = ctx.ask({
      type: "argueTheCall",
      team: p.team,
      prompt: `${label(p)} is Sent-off (${why}). Argue the Call?`,
      options: [
        { id: "yes", label: amateur ? "Argue the Call (D6: 5-6 keeps the player \u2014 Amateur Referees)" : "Argue the Call (D6: 6 keeps the player, 1 ejects the coach)" },
        { id: "no", label: "Accept it" }
      ],
      rule: rule2
    });
    if (argue === "yes") {
      const rep = induced(s, p.team, "biasedReferee") ? 1 : 0;
      const friends = hasPrayer(s, p.team, 2) ? 5 : 6;
      const rollArgue = () => amateur ? ctx.roll({ dice: [6], interpret: ([n2]) => n2 + rep >= 5 ? "ok" : "no", cacheKey: `argue7|${rep}`, by: p.team, judge: (v) => v === "ok" ? 1 : -1 }) : ctx.roll({ dice: [6], interpret: ([n2]) => n2 === 1 ? "out" : n2 + rep >= friends ? "ok" : "no", cacheKey: `argue|${rep}|${friends}`, by: p.team, judge: (v) => v === "ok" ? 1 : v === "out" ? -1 : -0.6 });
      let r = rollArgue();
      const t = s.teams[p.team];
      if (r.faces[0] === 1 && t.specialRules?.includes("Bribery and Corruption") && !t.briberyUsed) {
        const again = ctx.ask({
          type: "briberyCorruption",
          team: p.team,
          prompt: `Argue the Call: rolled a 1. Bribery and Corruption (once per game): re-roll the D6?`,
          options: [
            { id: "yes", label: "Re-roll the D6 (Bribery and Corruption)" },
            { id: "no", label: "Keep the 1" }
          ],
          rule: BRIBERY_CORRUPTION_RULE
        });
        if (again === "yes") {
          t.briberyUsed = true;
          ctx.emit("reroll", `Argue the Call: 1 \u2014 Bribery and Corruption: ${t.name} re-roll the D6 (once per game).`, BRIBERY_CORRUPTION_RULE);
          r = rollArgue();
        }
      }
      const n = r.faces[0];
      if (rep) ctx.emit("note", `Dodgy League Rep: +1 to Argue the Call ("I didn't see a thing").`, INDUCE_RULE("biasedReferee"));
      if (r.value === "out") {
        ejectCoach(s, p.team);
        ctx.emit("roll", `Argue the Call: ${n} \u2014 "You're outta here!" The coach is ejected and ${label(p)} is still Sent-off.`, rule2);
      } else if (r.value === "ok") {
        result = "argued";
        ctx.emit("roll", `Argue the Call: ${n} \u2014 ${amateur ? '"Well, when you put it like that\u2026"' : "the referee is swayed;"} ${label(p)} is not Sent-off.`, rule2);
      } else ctx.emit("roll", `Argue the Call: ${n} \u2014 ${amateur ? `"I don't care!"` : "the referee does not care;"} ${label(p)} is still Sent-off.`, rule2);
    }
  }
  const m = s.match;
  if (result === "sentOff" && m && m.bribes[p.team] > 0) {
    const use = ctx.ask({
      type: "bribe",
      team: p.team,
      prompt: `Use a Bribe for ${label(p)}? (${m.bribes[p.team]} left)`,
      options: [
        { id: "yes", label: "Use a Bribe (2+: not Sent-off, no Turnover)" },
        { id: "no", label: "Keep the Bribe" }
      ],
      rule: BRIBE_RULE
    });
    if (use === "yes") {
      m.bribes[p.team] -= 1;
      const r = ctx.roll({ dice: [6], interpret: ([n]) => n >= 2 ? "ok" : "no", cacheKey: "bribe", by: p.team, judge: (v) => v === "ok" ? 1 : -1 });
      if (r.value === "ok") result = "bribed";
      ctx.emit("roll", `Bribe: ${r.faces[0]} \u2014 ${result === "bribed" ? `${label(p)} is not Sent-off` : "the referee pockets it and sends the player off anyway"}.`, BRIBE_RULE);
    }
  }
  if (result === "sentOff") {
    const from = p.pos ? { ...p.pos } : null;
    const hadBall = hasBall(s, p);
    moveOffPitch(p, "sentOff");
    ctx.emit("status", `${label(p)} is Sent-off and takes no further part in the game.`, FOUL_RULE, { playerId: p.id, sentOff: true });
    checkLeaderLoss(ctx, p.team);
    if (hadBall && from) {
      s.ball = { kind: "ground", pos: from };
      ctx.emit("ball", `The ball bounces from ${fmt(from)}.`, R.scatter);
      bounce(ctx, from);
    }
  }
  return result;
}
function performFoul(ctx, p, target, act, opts = {}) {
  const s = ctx.s;
  if (target.team === p.team || target.location !== "pitch" || target.stance === "standing" || !target.pos || !p.pos || !adjacent(p.pos, target.pos)) {
    throw new IllegalAction("A Foul needs a Prone or Stunned opposition player adjacent to the fouler (p.69).");
  }
  if (p.stance !== "standing") throw new IllegalAction("The fouler must be Standing.");
  if (opts.chainsaw && !hasSkill(p, "chainsaw")) throw new IllegalAction("Only a player with Chainsaw can use a chainsaw for the Foul.");
  const rule2 = FOUL_RULE;
  act.foulDone = true;
  ctx.emit("declare", `${label(p)} ${opts.free ? "makes a free Foul (Pile Driver) on" : "fouls"} ${label(target)} in ${fmt(target.pos)}${opts.chainsaw ? " with the chainsaw" : ""}.`, rule2, { playerId: p.id, target: target.id, foul: true });
  if (opts.chainsaw) {
    const kb = rollTest(ctx, { kind: "chainsaw", player: p, label: `${label(p)} Chainsaw (Kick-back on a 1)`, target: 2, mods: [], rule: { page: 126, title: "Chainsaw" }, teamReroll: true, proAllowed: true, onFail: "Kick-back: the player is Knocked Down" });
    if (!kb.success) {
      ctx.emit("status", "Kick-back! The chainsaw bucks and the fouler is Knocked Down.", { page: 126, title: "Chainsaw" });
      act.over = true;
      goDown(ctx, p, { kind: "knockedDown", reason: "chainsaw Kick-back" });
      throw new ActionStop("kick-back");
    }
  }
  const ihs = hasSkill(target, "ironHardSkin");
  const { off: offAvail, def } = foulAssists(s, p, target);
  let off = offAvail;
  if (faq2026(s) && offAvail.length && !ihs) {
    const pick = ctx.ask({
      type: "foulAssist",
      team: p.team,
      prompt: `Foul on ${label(target)}: ${offAvail.length} Offensive Assist${offAvail.length === 1 ? "" : "s"} available (+1 each). Choose how many to apply before the Armour Roll${def.length ? ` (the ${def.length} Defensive Assist${def.length === 1 ? "" : "s"} always apply)` : ""}.`,
      options: Array.from({ length: offAvail.length + 1 }, (_, i) => offAvail.length - i).map((k) => ({ id: String(k), label: k === offAvail.length ? `Apply all ${k} (+${k})` : k === 0 ? "Apply none" : `Apply ${k} (+${k})` })),
      rule: FOUL_RULE,
      context: { kind: "foulAssist", fouler: p.id, target: target.id, offensive: offAvail.map((q) => q.id), defensive: def.length }
    });
    off = offAvail.slice(0, Math.max(0, Math.min(offAvail.length, Number(pick) || 0)));
  }
  const assistMod = off.length - def.length;
  const chainsawMod = opts.chainsaw ? 3 : 0;
  const pairMod = sneakyPair(s, p, target) ? 1 : 0;
  const fixed = ihs ? 0 : assistMod + chainsawMod + pairMod;
  const dirty = canUse(p, "dirtyPlayer");
  const dpSource = dirty ? { who: p, skill: "dirtyPlayer", used: false } : null;
  const lone = canUse(p, "loneFouler") && off.length === 0 && def.length === 0;
  const sneaky = canUse(p, "sneakyGit");
  const modTxt = ihs ? " (Iron Hard Skin: no modifiers)" : `${off.length || def.length ? ` ${assistMod >= 0 ? "+" : ""}${assistMod} assists (${off.length} offensive, ${def.length} defensive)` : ""}${chainsawMod ? " +3 chainsaw" : ""}${pairMod ? " +1 A Sneaky Pair (Dribl & Drull)" : ""}`;
  const armourRoll = () => ctx.roll({
    dice: [6, 6],
    by: p.team,
    interpret: ([a, b]) => ({ sum: a + b, dbl: a === b }),
    key: (v) => `${v.sum}|${v.dbl ? 1 : 0}`,
    // Difficulty house rule: broken armour is good for the fouler's side, a double (Sent-off) bad.
    judge: (v) => Math.max(-1, (v.sum + fixed >= target.av ? 1 : -1) - (v.dbl && !canUse(p, "sneakyGit") ? 0.8 : 0)),
    prefer: () => true,
    cacheKey: "foularmour"
  });
  let ar = armourRoll();
  let sum2 = ar.value.sum + fixed;
  let broken = sum2 >= target.av;
  ctx.emit("roll", `Foul Armour Roll for ${label(target)}: ${ar.faces[0]}+${ar.faces[1]}=${ar.value.sum}${modTxt} \u2192 ${sum2} vs AV ${target.av}+ \u2014 ${broken ? "armour broken" : "armour holds"}${ar.value.dbl ? " (a natural double!)" : ""}.`, rule2, { playerId: target.id, faces: ar.faces, av: target.av, broken, armour: true, foul: true });
  if (!broken && lone) {
    const c = ctx.ask({
      type: "reroll",
      team: p.team,
      prompt: `Armour Roll ${sum2} vs AV ${target.av}+ failed. Use Lone Fouler to re-roll it (no assists on this Foul)?`,
      options: [
        { id: "skill", label: "Re-roll the Armour Roll (Lone Fouler)" },
        { id: "none", label: "Keep the result" }
      ],
      rule: { page: 130, title: "Lone Fouler" },
      context: { kind: "loneFouler" }
    });
    if (c === "skill") {
      ar = armourRoll();
      sum2 = ar.value.sum + fixed;
      broken = sum2 >= target.av;
      ctx.emit("roll", `Lone Fouler re-roll: ${ar.faces[0]}+${ar.faces[1]}=${ar.value.sum}${modTxt} \u2192 ${sum2} \u2014 ${broken ? "armour broken" : "armour holds"}${ar.value.dbl ? " (a natural double!)" : ""}.`, { page: 130, title: "Lone Fouler" }, { playerId: target.id, faces: ar.faces, av: target.av, broken, armour: true, foul: true });
    }
  }
  if (!broken && dpSource && !ihs && sum2 + 1 >= target.av) {
    const c = ctx.ask({
      type: "dirtyPlayer",
      team: p.team,
      prompt: `Armour Roll ${sum2} vs AV ${target.av}+. Apply Dirty Player (+1) to break the armour, or keep it for the Injury Roll?`,
      options: [
        { id: "armour", label: "Apply Dirty Player to the Armour Roll" },
        { id: "save", label: "Keep it for the Injury Roll" }
      ],
      rule: { page: 127, title: "Dirty Player" },
      context: { stage: "armour", breaks: true }
    });
    if (c === "armour") {
      dpSource.used = true;
      broken = true;
      ctx.emit("roll", `Dirty Player +1 applied to the Armour Roll \u2192 ${sum2 + 1} \u2014 armour broken.`, { page: 127, title: "Dirty Player" }, { playerId: target.id, armour: true, broken: true, foul: true });
    }
  }
  let doubled = ar.value.dbl;
  if (doubled && sneaky && !broken) {
    doubled = false;
    ctx.emit("note", `Sneaky Git: the double on the Armour Roll goes unnoticed (armour not broken).`, { page: 136, title: "Sneaky Git" });
  }
  if (broken) {
    const out = {};
    const hadBall = hasBall(s, target);
    injuryRoll(ctx, target, dpSource && !dpSource.used ? [dpSource] : [], false, { out, rerollBy: p });
    if (out.faces && out.faces[0] === out.faces[1]) {
      doubled = true;
      ctx.emit("note", "A natural double on the Injury Roll: the referee saw the Foul.", rule2);
    }
    void hadBall;
  }
  if (!doubled && broken && hasPrayer(s, p.team === "A" ? "B" : "A", 15)) {
    doubled = true;
    ctx.emit("note", "Under Scrutiny (Prayer to Nuffle): the fouler broke armour and is Sent-off.", PRAYER_RULE);
  }
  act.over = (!canUse(p, "quickFoul") || !!opts.free) && !(act.razzle && !act.razzle.second);
  if (doubled && act.grudge) {
    doubled = false;
    ctx.emit("note", `Grudge Match (Desperate Measure): ${label(p)} cannot be Sent-off for this Foul.`, DESPERATE_RULE);
  }
  if (doubled) {
    ctx.emit("note", `The referee spots the Foul (natural double): ${label(p)} is Sent-off.`, rule2);
    const res = sendOff(ctx, p, "Foul");
    if (res !== "bribed" && p.team === s.turn.active) {
      act.over = true;
      ctx.setTurnover(res === "argued" ? `${label(p)} was caught fouling (Argue the Call kept them on the pitch, but the Turnover stands)` : `${label(p)} was Sent-off for fouling`, FOUL_RULE);
      throw new ActionStop("sent off");
    }
  }
  const opp = p.team === "A" ? "B" : "A";
  if (p.location === "pitch" && induced(s, opp, "biasedReferee") && !act.grudge) {
    const r = ctx.roll({ dice: [6], interpret: ([n]) => n >= 5 ? "out" : "ok", cacheKey: "scrutiny", by: opp, judge: (v) => v === "out" ? 1 : -1 });
    ctx.emit("roll", `Close Scrutiny (${s.teams[opp].name}'s Dodgy League Rep): ${r.faces[0]} \u2014 ${r.value === "out" ? `${label(p)} is Sent-off` : "nothing happens"}.`, INDUCE_RULE("biasedReferee"));
    if (r.value === "out") {
      const res = sendOff(ctx, p, "Close Scrutiny");
      if (res !== "bribed" && p.team === s.turn.active) {
        act.over = true;
        ctx.setTurnover(res === "argued" ? `${label(p)} was caught by Close Scrutiny (Argue the Call kept them on the pitch, but the Turnover stands)` : `${label(p)} was Sent-off (Close Scrutiny)`, INDUCE_RULE("biasedReferee"));
        throw new ActionStop("sent off");
      }
    }
  }
  if (!act.over && canUse(p, "quickFoul")) ctx.emit("note", "Quick Foul: the player may continue moving.", { page: 134, title: "Quick Foul" });
}

// src/engine/reactions.ts
var FA_RULE = { page: 128, title: "Foul Appearance" };
var TRICKSTER_RULE = { page: 138, title: "Trickster" };
var DUMP_OFF_RULE = { page: 128, title: "Dump-off" };
function foulAppearance(ctx, att, def, act, what) {
  if (!hasSkill(def, "foulAppearance")) return;
  const fa = rollTest(ctx, {
    kind: "foulAppearance",
    player: att,
    label: `Foul Appearance of ${label(def)}`,
    target: 2,
    mods: [],
    rule: FA_RULE,
    teamReroll: true,
    proAllowed: true,
    onFail: `the ${what} is cancelled and the activation ends`
  });
  if (!fa.success) {
    ctx.emit("block", `${label(att)} is put off by ${label(def)}: the ${what} is cancelled and the activation ends.`, FA_RULE);
    act.over = true;
    throw new ActionStop("foul appearance");
  }
}
function targetReactions(ctx, att, def, opts) {
  if (def.team === att.team) return;
  if (opts.trickster) trickster(ctx, att, def);
  dumpOff(ctx, def);
  if (ctx.touchdown) throw new ActionStop("touchdown");
}
function trickster(ctx, att, def) {
  const s = ctx.s;
  if (gated("trickster") || !canUse(def, "trickster") || !att.pos || !def.pos || (faq2026(s) ? def.rooted : heldInPlace(s, def))) return;
  const squares = neighbours(att.pos).filter((c) => inBounds(c) && !playerAt(s, c));
  if (!squares.length) return;
  const pick = ctx.ask({
    type: "trickster",
    team: def.team,
    prompt: `${label(def)} may use Trickster: move to another square next to ${label(att)} before the dice are rolled?`,
    options: [{ id: "stay", label: "Stay where they are" }, ...squares.map((c) => ({ id: `${c.x},${c.y}`, label: `Move to ${fmt(c)}${s.ball.kind === "ground" && eq(s.ball.pos, c) ? " (the ball is there)" : ""}`, square: c }))],
    context: { target: def.id, attacker: att.id },
    rule: TRICKSTER_RULE
  });
  if (pick === "stay") return;
  const [x, y] = pick.split(",").map(Number);
  const from = def.pos;
  def.pos = { x, y };
  if (def.chompedBy && faq2026(s)) {
    def.chompedBy = void 0;
    ctx.emit("status", `${label(def)} is no longer Chomped.`, TRICKSTER_RULE, { playerId: def.id });
  }
  ctx.emit("move", `${label(def)} uses Trickster: ${fmt(from)} \u2192 ${fmt(def.pos)}.`, TRICKSTER_RULE, { playerId: def.id, from, to: def.pos });
  if (s.ball.kind === "ground" && eq(s.ball.pos, def.pos)) {
    const mods = markersOf(s, def.pos, def.team).length && !canUse(def, "bigHand") ? [{ label: `Marked x${markersOf(s, def.pos, def.team).length}`, value: -markersOf(s, def.pos, def.team).length }] : [];
    if (s.weather === "pouringRain" && !canUse(def, "bigHand")) mods.push({ label: "Pouring Rain", value: -1 });
    if (canUse(def, "extraArms")) mods.push({ label: "Extra Arms", value: 1 });
    const res = rollTest(ctx, {
      kind: "pickup",
      player: def,
      label: `${label(def)} picks up the ball in ${fmt(def.pos)}`,
      target: def.ag,
      mods,
      rule: R.pickUp,
      skillReroll: { id: "sureHands", name: "Sure Hands", available: canUse(def, "sureHands") },
      teamReroll: false,
      proAllowed: false,
      onFail: "the ball bounces",
      autoFail: hasSkill(def, "noBall") ? "No Ball" : void 0
    });
    if (res.success) {
      s.ball = { kind: "held", playerId: def.id };
      ctx.emit("ball", `${label(def)} picks up the ball.`, R.pickUp, { holder: def.id });
    } else bounce(ctx, def.pos);
  }
}
function dumpOff(ctx, def) {
  const s = ctx.s;
  if (gated("dumpOff") || !canUse(def, "dumpOff") || !hasBall(s, def) || hasSkill(def, "myBall") || def.pa === null || !def.pos) return;
  const from = def.pos;
  const mates2 = [];
  const others = [];
  for (let x2 = from.x - 3; x2 <= from.x + 3; x2++)
    for (let y2 = from.y - 3; y2 <= from.y + 3; y2++) {
      const c = { x: x2, y: y2 };
      if (!inBounds(c) || eq(c, from) || passRange(from, c) !== "quick") continue;
      const q = playerAt(s, c);
      if (q && q.team === def.team && hasTackleZone(q)) {
        const mod = catchMods(ctx, q, "pass").reduce((a, m) => a + m.value, 0);
        let pc = 0;
        for (let f = 1; f <= 6; f++) if (d6Success(f, q.ag, mod)) pc += 1 / 6;
        mates2.push({ id: `${x2},${y2}`, label: `Quick Pass to ${label(q)} (${fmt(c)}, catch ${Math.round(pc * 100)}%)`, square: c });
      } else if (!q) others.push({ id: `${x2},${y2}`, label: `Quick Pass to ${fmt(c)}`, square: c });
    }
  if (!mates2.length && !others.length) return;
  const pick = ctx.ask({
    type: "dumpOff",
    team: def.team,
    prompt: `${label(def)} is targeted while holding the ball. Use Dump-off to make a Quick Pass first (no Turnover)?`,
    options: [{ id: "no", label: "Keep the ball" }, ...mates2, ...others],
    rule: DUMP_OFF_RULE
  });
  if (pick === "no") return;
  const [x, y] = pick.split(",").map(Number);
  dumpOffPass(ctx, def, { x, y });
  checkTouchdown(ctx, false);
}
function pileDriver(ctx, att, def, act) {
  if (gated("pileDriver") || !canUse(att, "pileDriver") || def.location !== "pitch" || def.stance === "standing" || !att.pos || !def.pos || !adjacent(att.pos, def.pos)) return;
  const rule2 = { page: 133, title: "Pile Driver" };
  const opts = [
    { id: "no", label: "No Pile Driver" },
    { id: "yes", label: `Foul ${label(def)} (Pile Driver), then be Placed Prone` }
  ];
  if (hasSkill(att, "chainsaw")) opts.push({ id: "chainsaw", label: `Foul ${label(def)} with the chainsaw (Pile Driver), then be Placed Prone` });
  const c = ctx.ask({ type: "pileDriver", team: att.team, prompt: `Pile Driver: make a free Foul on ${label(def)}? ${label(att)} is then Placed Prone and the activation ends.`, options: opts, rule: rule2 });
  if (c === "no") return;
  performFoul(ctx, att, def, act, { free: true, chainsaw: c === "chainsaw" });
  if (att.location === "pitch" && att.stance === "standing") goDown(ctx, att, { kind: "placedProne", reason: "Pile Driver" });
  act.over = true;
  throw new ActionStop("pile driver");
}

// src/engine/specials.ts
var SPECIALS = {
  projectileVomit: { id: "projectileVomit", name: "Projectile Vomit", skill: "projectileVomit", page: 133, targeted: true, blitz: true, move: false },
  stab: { id: "stab", name: "Stab", skill: "stab", page: 136, targeted: true, blitz: true, move: false },
  chainsaw: { id: "chainsaw", name: "Chainsaw Attack", skill: "chainsaw", page: 126, targeted: true, blitz: true, move: false },
  breatheFire: { id: "breatheFire", name: "Breathe Fire", skill: "breatheFire", page: 126, targeted: true, blitz: true, move: false },
  monstrousMouth: { id: "monstrousMouth", name: "Chomp", skill: "monstrousMouth", page: 131, targeted: true, blitz: true, move: false },
  hypnoticGaze: { id: "hypnoticGaze", name: "Hypnotic Gaze", skill: "hypnoticGaze", page: 129, targeted: true, blitz: false, move: true },
  bombardier: { id: "bombardier", name: "Throw Bomb", skill: "bombardier", page: 125, targeted: false, blitz: false, move: false, once: "bomb" },
  punt: { id: "punt", name: "Punt", skill: "punt", page: 134, targeted: false, blitz: false, move: true, once: "punt" },
  kickTeamMate: { id: "kickTeamMate", name: "Kick Team-mate", skill: "kickTeamMate", page: 130, targeted: false, blitz: false, move: true, once: "ktm" },
  ballAndChain: { id: "ballAndChain", name: "Ball & Chain", skill: "ballAndChain", page: 124, targeted: false, blitz: false, move: false }
};
var SPECIAL_ORDER = ["projectileVomit", "stab", "chainsaw", "breatheFire", "monstrousMouth", "hypnoticGaze", "bombardier", "punt", "kickTeamMate", "ballAndChain"];
var rule = (id) => ({ page: SPECIALS[id].page, title: SPECIALS[id].name });
function specialsOf(p) {
  return SPECIAL_ORDER.filter((id) => hasSkill(p, SPECIALS[id].skill) || id === "projectileVomit" && p.star === "bilerot");
}
function specialTargets(s, p, id, from = p.pos) {
  if (!from || !SPECIALS[id].targeted) return [];
  return pitchPlayers(s).filter((q) => q.team !== p.team && q.stance === "standing" && !!q.pos && adjacent(q.pos, from));
}
function vi(p) {
  return hasSkill(p, "violentInnovator") ? p : void 0;
}
function specialArmour(ctx, v, mod, why, rl, credit, stabBy, attacker) {
  const s = ctx.s;
  const hadBall = hasBall(s, v);
  const from = v.pos ? { ...v.pos } : null;
  const pair = stabBy && sneakyPair(s, stabBy, v) ? 1 : 0;
  const m = hasSkill(v, "ironHardSkin") ? 0 : mod + pair;
  const rollIt = () => ctx.roll({ dice: [6, 6], interpret: ([a, b]) => a + b + m >= v.av ? "broken" : "holds", cacheKey: `armourfixed|${v.av}|${m}`, by: v.team === "A" ? "B" : "A", judge: (x) => x === "broken" ? 1 : -1 });
  let ar = rollIt();
  const report = (prefix) => {
    const [a, b] = ar.faces;
    ctx.emit("roll", `${prefix}Armour Roll for ${label(v)} (${why}${pair && m ? ", +1 A Sneaky Pair" : ""}): ${a}+${b}${m ? ` +${m}` : ""}=${a + b + m} vs AV ${v.av}+ \u2014 ${ar.value === "broken" ? "armour broken" : "armour holds, nothing happens"}.`, rl, { playerId: v.id, faces: [a, b], av: v.av, broken: ar.value === "broken", armour: true });
  };
  report("");
  const helmut = attacker?.star === "helmut" ? attacker : v.star === "helmut" ? v : void 0;
  const redo = oldPro(ctx, helmut, v, ar.faces, ar.value === "broken", (a, b) => a + b + m >= v.av);
  if (redo) ar = { faces: redo, value: redo[0] + redo[1] + m >= v.av ? "broken" : "holds" };
  if (ar.value !== "broken" && stabBy && starReady(s, stabBy, "skitter") && askStar(ctx, stabBy, `the armour of ${label(v)} held. Re-roll the Armour Roll?`, "Re-roll the Armour Roll", true)) {
    spendStar(ctx, stabBy, `the Stab's Armour Roll is re-rolled.`);
    ar = rollIt();
    report("Re-roll \u2014 ");
  }
  if (ar.value !== "broken") return;
  const toxin = stabBy && starReady(s, stabBy, "rashnak") ? [{ who: stabBy, skill: "star", used: false, value: 1, stage: "injury" }] : [];
  injuryRoll(ctx, v, toxin, false, { credit });
  if (hadBall && from && (v.location !== "pitch" || v.stance !== "standing")) {
    if (v.team === s.turn.active) ctx.setTurnover(`${label(v)} lost the ball`, R.turnover);
    s.ball = { kind: "ground", pos: from };
    ctx.emit("ball", `The ball bounces from ${fmt(from)}.`, R.scatter);
    bounce(ctx, from);
  }
}
function performTargetedSpecial(ctx, p, target, act, id, blitz, downTarget = false) {
  const info = SPECIALS[id];
  if (!info.targeted) throw new IllegalAction(`${info.name} does not target a player.`);
  if (!hasSkill(p, info.skill) && !(id === "projectileVomit" && p.star === "bilerot")) throw new IllegalAction(`This player cannot perform ${info.name}.`);
  if (p.stance !== "standing" || !p.pos) throw new IllegalAction(`${info.name}: the player must be Standing.`);
  if (target.team === p.team || target.location !== "pitch" || (downTarget ? target.stance === "standing" : target.stance !== "standing") || !target.pos || !adjacent(target.pos, p.pos)) {
    throw new IllegalAction(`${info.name} needs a ${downTarget ? "Prone or Stunned" : "Standing"} opposition player next to this player (p.${info.page}).`);
  }
  if ((id === "breatheFire" || id === "monstrousMouth") && !hasTackleZone(p)) throw new IllegalAction(`${info.name}: the player must Mark the target.`);
  const rl = rule(id);
  ctx.emit("declare", `${label(p)} uses ${info.name} on ${label(target)}${blitz ? " instead of the Block" : ""}.`, rl, { playerId: p.id, target: target.id, special: id });
  if (!downTarget) {
    foulAppearance(ctx, p, target, act, info.name);
    targetReactions(ctx, p, target, { trickster: true });
  }
  if (target.location !== "pitch" || (downTarget ? target.stance === "standing" : target.stance !== "standing") || !target.pos || !adjacent(target.pos, p.pos)) {
    ctx.emit("note", `${label(target)} is no longer a Standing player next to ${label(p)}: ${info.name} has no effect.`, rl);
    act.over = true;
    return;
  }
  act.specialDone = true;
  switch (id) {
    case "projectileVomit": {
      const r = rollTest(ctx, { kind: "projectileVomit", player: p, label: `${label(p)} Projectile Vomit`, target: 2, mods: [], rule: rl, teamReroll: true, proAllowed: true, onFail: "covers themselves in bile (own Armour Roll)", at: target.pos });
      const victim = r.success ? target : p;
      ctx.emit("status", r.success ? `${label(p)} vomits on ${label(target)}.` : `${label(p)} covers themselves in acidic bile!`, rl, { playerId: victim.id });
      specialArmour(ctx, victim, 0, "cannot be modified", rl, victim === target ? vi(p) : void 0);
      act.over = true;
      return;
    }
    case "stab":
      specialArmour(ctx, target, 0, "Stab: cannot be modified", rl, vi(p), p);
      act.over = true;
      return;
    case "chainsaw": {
      const r = rollTest(ctx, { kind: "chainsaw", player: p, label: `${label(p)} Chainsaw Attack (Kick-back on a 1)`, target: 2, mods: [], rule: rl, teamReroll: true, proAllowed: true, onFail: "Kick-back: the player is Knocked Down", at: target.pos });
      act.over = true;
      if (!r.success) {
        ctx.emit("status", "Kick-back! The chainsaw bucks and hits its owner.", rl);
        goDown(ctx, p, { kind: "knockedDown", reason: "chainsaw Kick-back" });
        throw new ActionStop("kick-back");
      }
      specialArmour(ctx, target, 3, "+3 chainsaw", rl, vi(p), void 0, p);
      if (starReady(ctx.s, p, "maxSpleenripper") && p.location === "pitch" && p.stance === "standing" && !ctx.turnover) {
        const more = specialTargets(ctx.s, p, "chainsaw").filter((q) => q.id !== target.id);
        if (more.length) {
          const id2 = ctx.ask({ type: "starRule", team: p.team, prompt: "Maximum Carnage (Max Spleenripper, once per game): another Chainsaw Attack on a different opponent?", options: [...more.map((q) => ({ id: q.id, label: `Chainsaw ${label(q)}`, square: q.pos ?? void 0 })), { id: "no", label: "No" }], rule: starRuleRef(STAR_BY_ID.maxSpleenripper), context: { star: "maxSpleenripper", helps: true } });
          const q2 = more.find((q) => q.id === id2);
          if (q2) {
            spendStar(ctx, p, `a second Chainsaw Attack, on ${label(q2)}.`);
            performTargetedSpecial(ctx, p, q2, act, "chainsaw", false);
          }
        }
      }
      return;
    }
    case "breatheFire": {
      const big = target.st >= 5;
      const r = rollTest(ctx, {
        kind: "breatheFire",
        player: p,
        label: `${label(p)} Breathe Fire at ${label(target)}`,
        target: 4,
        mods: big ? [{ label: "target ST 5+", value: -1 }] : [],
        rule: rl,
        outcome: (n, m) => n === 6 ? "kd" : n === 1 || n + m <= 1 ? "self" : n + m <= 3 ? "none" : "prone",
        outcomeKey: `bf${big ? 1 : 0}`,
        isSuccess: (o) => o === "kd" || o === "prone",
        teamReroll: true,
        proAllowed: true,
        onFail: "1: the player is Knocked Down; 2-3: nothing happens",
        at: target.pos
      });
      act.over = true;
      if (r.outcome === "self") {
        ctx.emit("status", `${label(p)} is caught by their own flames!`, rl);
        goDown(ctx, p, { kind: "knockedDown", reason: "Breathe Fire backfires" });
        throw new ActionStop("breathe fire");
      }
      if (r.outcome === "none") {
        ctx.emit("status", "The flames miss: nothing happens.", rl);
        return;
      }
      if (r.outcome === "kd") goDown(ctx, target, { kind: "knockedDown", reason: "Breathe Fire (natural 6)", credit: vi(p) });
      else goDown(ctx, target, { kind: "placedProne", reason: "Breathe Fire" });
      checkTouchdown(ctx, false);
      return;
    }
    case "monstrousMouth": {
      const r = rollTest(ctx, { kind: "chomp", player: p, label: `${label(p)} Chomp`, target: 3, mods: [], rule: rl, teamReroll: true, proAllowed: true, onFail: "nothing happens", at: target.pos });
      if (r.success) {
        target.chompedBy = p.id;
        ctx.emit("status", `${label(target)} is Chomped: they cannot leave their square while ${label(p)} Marks them.`, rl, { playerId: target.id, chomped: true });
      } else ctx.emit("status", "The jaws snap shut on nothing.", rl);
      if (!blitz) act.over = true;
      return;
    }
    case "hypnoticGaze": {
      const r = rollTest(ctx, { kind: "hypnoticGaze", player: p, label: `${label(p)} Hypnotic Gaze`, target: 3, mods: [], rule: rl, teamReroll: true, proAllowed: true, onFail: "nothing happens", at: target.pos });
      if (r.success) {
        target.distracted = true;
        ctx.emit("status", `${label(target)} is hypnotised: Distracted until next activated (no Tackle Zone).`, rl, { playerId: target.id });
      } else ctx.emit("status", "The gaze has no effect.", rl);
      act.over = true;
      return;
    }
    default:
      throw new IllegalAction(`${info.name} is not a targeted Special Action.`);
  }
}
var BOMB_RULE = rule("bombardier");
function performThrowBomb(ctx, p, target, hailMary, act) {
  if (!hasSkill(p, "bombardier")) throw new IllegalAction("Only a player with Bombardier can Throw a Bomb (p.125).");
  if (p.pa === null) throw new IllegalAction('This player has no Passing Ability (PA "-").');
  if (p.stance !== "standing" || !p.pos) throw new IllegalAction("The bomber must be Standing.");
  const info = passInfo(ctx, p, p.pos, target, hailMary);
  if (typeof info === "string") throw new IllegalAction(info);
  act.ballActionDone = true;
  act.specialDone = true;
  act.over = true;
  throwBomb(ctx, p, target, hailMary, 0);
}
function throwBomb(ctx, p, target, hailMary, depth) {
  const s = ctx.s;
  if (depth > 20) {
    ctx.emit("note", "The bomb has been thrown back and forth long enough: it fizzles out.", BOMB_RULE);
    return;
  }
  const from = p.pos;
  const info = passInfo(ctx, p, from, target, hailMary);
  if (typeof info === "string") throw new IllegalAction(info);
  ctx.emit("declare", `${label(p)} throws a bomb (${hailMary ? "Hail Mary" : RANGE_LABEL[info.range]}) at ${fmt(target)}.`, BOMB_RULE, { from, target, bomb: true });
  const pa = p.pa;
  const safePass = canUse(p, "safePass");
  const res = rollTest(ctx, {
    kind: "bomb",
    player: p,
    label: `Passing Ability Test (Throw Bomb, ${hailMary ? "Hail Mary" : RANGE_LABEL[info.range]})`,
    target: pa,
    mods: info.mods,
    rule: BOMB_RULE,
    outcome: (n, m) => {
      if (n === 1) return safePass ? "safe" : "fumble";
      if (n !== 6 && clampD6(n + m) <= 1) return "fumble";
      if (d6Success(n, pa, m)) return hailMary ? "inaccurate" : "accurate";
      return "inaccurate";
    },
    outcomeKey: `bomb${pa}|${safePass}|${hailMary}`,
    isSuccess: (o) => o === (hailMary ? "inaccurate" : "accurate"),
    skillReroll: { id: "pass", name: "Pass", available: canUse(p, "pass") },
    teamReroll: true,
    proAllowed: true,
    onFail: "Inaccurate (Scatter 3) or Fumbled (explodes in the thrower's square)",
    at: target
  });
  if (res.outcome === "safe") {
    ctx.emit("status", `Safe Pass: the natural 1 is not a Fumble \u2014 ${label(p)} keeps hold of the bomb, which is not thrown and fizzles out (interpretation).`, { page: 135, title: "Safe Pass" });
    return;
  }
  if (res.outcome === "fumble") {
    ctx.emit("status", `Fumbled bomb! It explodes in ${label(p)}'s square.`, BOMB_RULE);
    explode(ctx, from, p);
    return;
  }
  let landing = target;
  if (res.outcome === "inaccurate") {
    const sc = scatter(ctx, target, 3, "Inaccurate bomb");
    landing = "land" in sc ? sc.land : null;
  }
  if (!landing) {
    ctx.emit("status", "The bomb sails into the crowd and explodes harmlessly off the pitch (interpretation).", BOMB_RULE);
    return;
  }
  if (!hailMary) {
    const cands = interceptors(ctx, p, from, landing);
    if (cands.length) {
      const pick = ctx.ask({
        type: "interceptor",
        team: other(p.team),
        prompt: `A bomb is flying over ${cands.length} of your Standing players. Attempt to Intercept it (the interceptor must then throw it)?`,
        options: [{ id: "none", label: "Let it fly" }, ...cands.map((q) => ({ id: q.id, label: `Intercept with ${label(q)}`, square: q.pos }))],
        rule: R.interception,
        context: { from, landing, accurate: res.outcome === "accurate", bomb: true }
      });
      if (pick !== "none") {
        const q = cands.find((c) => c.id === pick);
        if (interceptAttempt(ctx, q, res.outcome === "accurate", "the bomb", "the bomb flies on")) {
          ctx.emit("status", `${label(q)} intercepts the bomb and must throw it at once!`, BOMB_RULE);
          rethrow(ctx, q, depth + 1);
          return;
        }
      }
    }
  }
  ctx.emit("status", `The bomb comes down in ${fmt(landing)}.`, BOMB_RULE, { landing });
  const occ = playerAt(s, landing);
  if (occ && hasTackleZone(occ) && !hasSkill(occ, "noBall")) {
    const cr = rollTest(ctx, {
      kind: "catch",
      player: occ,
      label: `${label(occ)} catches the bomb`,
      target: occ.ag,
      mods: catchMods(ctx, occ, eq(landing, target) ? "passTarget" : "pass"),
      rule: BOMB_RULE,
      skillReroll: { id: "catch", name: "Catch", available: canUse(occ, "catch") },
      teamReroll: true,
      proAllowed: false,
      onFail: "the bomb explodes in their square",
      notBall: true
    });
    if (cr.success) {
      if (occ.team !== p.team && depth === 0 && starReady(ctx.s, p, "bomber") && askStar(ctx, p, `${label(occ)} caught the bomb. Make it explode now instead of being thrown on?`, "Kaboom!: it explodes", true)) {
        spendStar(ctx, p, `the bomb explodes in ${label(occ)}'s hands.`);
        explode(ctx, landing, p);
        return;
      }
      ctx.emit("status", `${label(occ)} catches the bomb and must throw it again at once!`, BOMB_RULE);
      rethrow(ctx, occ, depth + 1);
      return;
    }
    ctx.emit("status", `${label(occ)} drops the bomb!`, BOMB_RULE);
  }
  explode(ctx, landing, p);
}
function bombTargets(s, p) {
  const from = p.pos;
  const scored = [];
  const g = pitch();
  for (let x = 0; x < g.w; x++)
    for (let y = 0; y < g.h; y++) {
      const c = { x, y };
      if (eq(c, from)) continue;
      const r = passRange(from, c);
      if (!r || s.weather === "blizzard" && (r === "long" || r === "bomb")) continue;
      let v = 0;
      let near = false;
      for (const q of pitchPlayers(s)) {
        if (!q.pos) continue;
        const d2 = Math.max(Math.abs(q.pos.x - x), Math.abs(q.pos.y - y));
        if (d2 > 1) continue;
        near = true;
        const w = d2 === 0 ? 1 : 0.5;
        v += q.team === p.team ? -2 * w : w;
      }
      if (near) scored.push({ c, v });
    }
  scored.sort((a, b) => b.v - a.v || a.c.x - b.c.x || a.c.y - b.c.y);
  return scored.map((x) => x.c);
}
function rethrow(ctx, q, depth) {
  if (q.pa === null) {
    ctx.emit("status", `${label(q)} has no Passing Ability (PA "-") and cannot throw the bomb: it explodes in their hands (interpretation).`, BOMB_RULE);
    explode(ctx, q.pos, q);
    return;
  }
  const targets = bombTargets(ctx.s, q);
  if (!targets.length) {
    explode(ctx, q.pos, q);
    return;
  }
  const pick = ctx.ask({
    type: "bombThrow",
    team: q.team,
    prompt: `${label(q)} must throw the bomb again at once. Choose the target square.`,
    options: targets.map((c) => ({ id: `${c.x},${c.y}`, label: `${fmt(c)}${playerAt(ctx.s, c) ? ` (${label(playerAt(ctx.s, c))})` : ""}`, square: c })),
    rule: BOMB_RULE
  });
  const [x, y] = pick.split(",").map(Number);
  throwBomb(ctx, q, { x, y }, false, depth);
}
function explode(ctx, sq, thrower) {
  const s = ctx.s;
  ctx.emit("status", `BOOM! The bomb explodes in ${fmt(sq)}.`, BOMB_RULE, { explosion: sq });
  const hit = [];
  const occ = playerAt(s, sq);
  if (occ) hit.push(occ);
  for (const c of neighbours(sq)) {
    const q = playerAt(s, c);
    if (!q) continue;
    const r = ctx.roll({ dice: [6], interpret: ([n]) => n >= 4 ? "hit" : "miss", cacheKey: "blast4" });
    ctx.emit("roll", `Blast for ${label(q)}: rolled ${r.faces[0]} \u2014 ${r.value === "hit" ? "hit" : "missed"}.`, BOMB_RULE);
    if (r.value === "hit") hit.push(q);
  }
  for (const q of hit) {
    if (q.location !== "pitch") continue;
    const credit = q.team !== thrower.team ? vi(thrower) : void 0;
    if (q.stance === "standing") goDown(ctx, q, { kind: "knockedDown", reason: "bomb blast", credit });
    else armourAndInjury(ctx, q, { kind: "knockedDown", reason: "bomb blast", credit });
  }
  checkTouchdown(ctx, false);
}
var PUNT_RULE = rule("punt");
function performPunt(ctx, p, facing, act) {
  const s = ctx.s;
  act.specialDone = true;
  act.over = true;
  if (!hasBall(s, p)) throw new IllegalAction(`${label(p)} must be holding the ball to Punt it (p.134).`);
  act.ballActionDone = true;
  const kick = canUse(p, "kick");
  ctx.emit("declare", `${label(p)} punts the ball ${FACING_LABEL[facing]}.`, PUNT_RULE, { facing });
  const dirRoll = () => ctx.roll({ dice: [6], interpret: ([n2]) => n2, cacheKey: "puntdir" });
  let d2 = dirRoll();
  ctx.emit("roll", `Punt direction: D6 ${d2.value} (${d2.value <= 2 ? "left diagonal" : d2.value <= 4 ? "straight" : "right diagonal"}).`, PUNT_RULE);
  if (kick) {
    const c = ctx.ask({ type: "punt", team: p.team, prompt: `Punt direction D6 ${d2.value}. Re-roll it (Kick)?`, options: [{ id: "keep", label: "Keep the direction" }, { id: "reroll", label: "Re-roll the direction (Kick)" }], rule: { page: 130, title: "Kick" } });
    if (c === "reroll") {
      d2 = dirRoll();
      ctx.emit("roll", `Kick: direction re-rolled \u2014 D6 ${d2.value}.`, { page: 130, title: "Kick" });
    }
  }
  const distRoll = () => ctx.roll({ dice: [6], interpret: ([n2]) => n2, cacheKey: "puntdist" });
  let n = distRoll();
  ctx.emit("roll", `Punt distance: D6 ${n.value} squares.`, PUNT_RULE);
  if (kick) {
    const c = ctx.ask({ type: "punt", team: p.team, prompt: `Punt distance ${n.value}. Re-roll it (Kick)?`, options: [{ id: "keep", label: "Keep the distance" }, { id: "reroll", label: "Re-roll the distance (Kick)" }], rule: { page: 130, title: "Kick" } });
    if (c === "reroll") {
      n = distRoll();
      ctx.emit("roll", `Kick: distance re-rolled \u2014 D6 ${n.value}.`, { page: 130, title: "Kick" });
    }
  }
  const dir = facingDirection(facing, d2.value);
  let cur = p.pos;
  s.ball = { kind: "none" };
  for (let i = 0; i < n.value; i++) {
    const next = add(cur, dir);
    if (!inBounds(next)) {
      ctx.emit("ball", `The punt goes into the crowd beyond ${fmt(cur)}: Turnover, and the fans throw it back.`, PUNT_RULE);
      ctx.setTurnover("the Punt went into the crowd", PUNT_RULE);
      throwIn(ctx, cur, next);
      checkTouchdown(ctx, false);
      throw new ActionStop("punt out");
    }
    cur = next;
  }
  ctx.emit("ball", `The punt comes down in ${fmt(cur)}.`, PUNT_RULE, { landing: cur });
  ballArrives(ctx, cur, "punt");
  const ball = s.ball;
  const h = ball.kind === "held" ? s.players.find((q) => q.id === ball.playerId) : void 0;
  checkTouchdown(ctx, false);
  if (h && h.team !== p.team) {
    ctx.setTurnover("an opposition player has the ball after the Punt", PUNT_RULE);
    throw new ActionStop("punt caught");
  }
}
var BNC_RULE = rule("ballAndChain");
function ballAndChainStep(ctx, p, facing, act) {
  const s = ctx.s;
  if (!hasSkill(p, "ballAndChain")) throw new IllegalAction("Only a Ball & Chain player makes this Special Action.");
  if (p.stance !== "standing" || !p.pos) throw new IllegalAction("The Ball & Chain player must be Standing.");
  const maLeft = p.ma - act.maUsed;
  const rushLeft = maxRushes(p) - act.rushesUsed;
  if (maLeft <= 0 && rushLeft <= 0) throw new IllegalAction(`${label(p)} has no movement left.`);
  let rushFailed = false;
  if (maLeft > 0) act.maUsed += 1;
  else {
    act.rushesUsed += 1;
    const mods = [];
    if (s.weather === "blizzard") mods.push({ label: "Blizzard", value: -1 });
    if (hasSkill(p, "drunkard")) mods.push({ label: "Drunkard", value: -1 });
    if (molesUnder(s, p)) mods.push({ label: "Moles under the Pitch", value: -1 });
    const res = rollTest(ctx, {
      kind: "rush",
      player: p,
      label: `Rush ${act.rushesUsed} (Ball & Chain)`,
      target: 2,
      mods,
      rule: R.rush,
      skillReroll: { id: "sureFeet", name: "Sure Feet", available: canUse(p, "sureFeet") && !p.usage.sureFeet, markUsed: () => p.usage.sureFeet = true },
      teamReroll: true,
      proAllowed: true,
      onFail: "moves, then Falls Over"
    });
    rushFailed = !res.success;
  }
  let r = ctx.roll({ dice: [6], interpret: ([n]) => n, cacheKey: "bncdir" });
  const from = p.pos;
  if (starReady(s, p, "fungus")) {
    const to0 = add(from, facingDirection(facing, r.value));
    const occ0 = inBounds(to0) ? playerAt(s, to0) : void 0;
    const bad = !inBounds(to0) || !!occ0 && occ0.team === p.team;
    if (askStar(ctx, p, `the direction D6 is ${r.value} (\u2192 ${inBounds(to0) ? fmt(to0) : "off the pitch"}). Re-roll it?`, "Re-roll the direction", bad, "Keep it")) {
      spendStar(ctx, p, `the direction D6 ${r.value} is re-rolled.`);
      r = ctx.roll({ dice: [6], interpret: ([n]) => n, cacheKey: "bncdir" });
    }
  }
  const to = add(from, facingDirection(facing, r.value));
  ctx.emit("roll", `Ball & Chain: template ${FACING_LABEL[facing]}, D6 ${r.value} \u2192 ${inBounds(to) ? fmt(to) : "off the pitch"}.`, BNC_RULE, { playerId: p.id, from, to });
  if (!inBounds(to)) {
    ctx.emit("move", `${label(p)} whirls off the pitch into the crowd!`, BNC_RULE, { playerId: p.id, crowd: true });
    moveOffPitch(p, "reserves");
    act.over = true;
    ctx.setTurnover(`${label(p)} went into the crowd`, BNC_RULE);
    crowdInjury(ctx, p);
    throw new ActionStop("crowd");
  }
  const occ = playerAt(s, to);
  if (occ && occ.stance === "standing") {
    performBlock(ctx, p, occ, { isBlitz: false, declaredBlock: false, ballAndChain: true }, act);
  } else if (occ) {
    ctx.emit("push", `${label(p)} crashes into the fallen ${label(occ)}.`, BNC_RULE);
    const out = pushAway(ctx, p, from, occ);
    if (!out.crowd && occ.location === "pitch") armourAndInjury(ctx, occ, { kind: "knockedDown", reason: "hit by the Ball & Chain", credit: vi(p) });
    if (!playerAt(s, to) && p.location === "pitch" && p.stance === "standing") moveInto(ctx, p, to);
  } else moveInto(ctx, p, to);
  if (rushFailed && p.location === "pitch" && p.stance === "standing") {
    if (!(goDown(ctx, p, { kind: "fellOver", reason: "failed Rush" }).avoided && faq2026(ctx.s))) throw new ActionStop("fell");
  }
  if (ctx.turnover) throw new ActionStop("turnover");
}
function moveInto(ctx, p, to) {
  const s = ctx.s;
  const from = p.pos;
  p.pos = { ...to };
  ctx.emit("move", `${label(p)} moves ${fmt(from)} \u2192 ${fmt(to)} (Ball & Chain).`, BNC_RULE, { playerId: p.id, from, to });
  if (s.ball.kind === "ground" && eq(s.ball.pos, to)) {
    ctx.emit("ball", "The ball is sent bouncing (no Turnover).", BNC_RULE);
    bounce(ctx, to);
  }
}

// src/engine/traits.ts
var SAVAGERY_RULE = { page: 123, title: "Animal Savagery" };
var BLOODLUST_RULE = { page: 125, title: "Bloodlust" };
var TAKE_ROOT_RULE = { page: 137, title: "Take Root" };
function animalSavagery(ctx, p, act) {
  const blockish = act.action === "block" || act.action === "blitz";
  const r = rollTest(ctx, {
    kind: "animalSavagery",
    player: p,
    label: `${label(p)} Animal Savagery`,
    target: 4,
    mods: blockish ? [{ label: "Block/Blitz declared", value: 2 }] : [],
    rule: SAVAGERY_RULE,
    teamReroll: true,
    proAllowed: true,
    onFail: faq2026(ctx.s) ? "lashes out at a team-mate" : "lashes out at a team-mate; the activation ends"
  });
  if (r.success) return true;
  const goOn = () => {
    if (!faq2026(ctx.s)) {
      act.over = true;
      return false;
    }
    if (p.distracted || ctx.turnover || p.stance !== "standing" || p.location !== "pitch") {
      act.over = true;
      return false;
    }
    return true;
  };
  const mates2 = pitchPlayers(ctx.s, p.team).filter((q) => q.id !== p.id && q.stance === "standing" && adjacent(q.pos, p.pos));
  const foes = starReady(ctx.s, p, "glotl") ? pitchPlayers(ctx.s, p.team === "A" ? "B" : "A").filter((q) => q.stance === "standing" && adjacent(q.pos, p.pos)) : [];
  if (foes.length) {
    const pick0 = ctx.ask({
      type: "animalSavagery",
      team: p.team,
      prompt: `${label(p)} lashes out (Animal Savagery). Primal Savagery (once per game): lash out at an opposition player instead?`,
      options: [...foes.map((q) => ({ id: q.id, label: `${label(q)} (${fmt(q.pos)}) \u2014 opposition, Primal Savagery`, square: q.pos })), ...mates2.map((q) => ({ id: q.id, label: `${label(q)} (${fmt(q.pos)})`, square: q.pos }))],
      rule: SAVAGERY_RULE
    });
    const foe = foes.find((q) => q.id === pick0);
    if (foe) {
      spendStar(ctx, p, `${label(p)} lashes out at the opposition player ${label(foe)} instead${faq2026(ctx.s) ? "." : "; the activation ends."}`);
      goDown(ctx, foe, { kind: "knockedDown", reason: "Animal Savagery (Primal Savagery)", savagery: p });
      return goOn();
    }
    const mate = mates2.find((q) => q.id === pick0);
    ctx.emit("status", `${label(p)} lashes out at ${label(mate)}${faq2026(ctx.s) ? "." : "; the activation ends."}`, SAVAGERY_RULE, { playerId: mate.id });
    goDown(ctx, mate, { kind: "knockedDown", reason: "Animal Savagery", savagery: p, noTurnover: true });
    return goOn();
  }
  if (!mates2.length) {
    p.distracted = true;
    act.over = true;
    ctx.emit("status", `${label(p)} lashes out, but no Standing team-mate is adjacent: they are Distracted and the activation ends.`, SAVAGERY_RULE);
    return false;
  }
  const pick = ctx.ask({
    type: "animalSavagery",
    team: p.team,
    prompt: `${label(p)} lashes out (Animal Savagery). Choose the adjacent Standing team-mate who is Knocked Down.`,
    options: mates2.map((q) => ({ id: q.id, label: `${label(q)} (${fmt(q.pos)})`, square: q.pos })),
    rule: SAVAGERY_RULE
  });
  const victim = mates2.find((q) => q.id === pick);
  ctx.emit("status", `${label(p)} lashes out at ${label(victim)}${faq2026(ctx.s) ? "." : "; the activation ends."}`, SAVAGERY_RULE, { playerId: victim.id });
  goDown(ctx, victim, { kind: "knockedDown", reason: "Animal Savagery", savagery: p, noTurnover: true });
  return goOn();
}
function takeRoot(ctx, p) {
  if (p.stance !== "standing" || p.rooted) return;
  const r = rollTest(ctx, {
    kind: "takeRoot",
    player: p,
    label: `${label(p)} Take Root`,
    target: 2,
    mods: [],
    rule: TAKE_ROOT_RULE,
    teamReroll: true,
    proAllowed: true,
    onFail: "becomes Rooted (cannot move or be Pushed Back)"
  });
  if (r.success) return;
  p.rooted = true;
  ctx.emit("status", `${label(p)} takes root: Rooted until Knocked Down, Placed Prone or the end of the Drive (no moving, no Follow-up, cannot be Pushed Back).`, TAKE_ROOT_RULE, { playerId: p.id, rooted: true });
}
function bloodlust(ctx, p, act) {
  const x = skillValue(p, "bloodlust") ?? 2;
  const blockish = act.action === "block" || act.action === "blitz";
  const r = rollTest(ctx, {
    kind: "bloodlust",
    player: p,
    label: `${label(p)} Bloodlust (${x}+)`,
    target: x,
    mods: blockish ? [{ label: "Block/Blitz declared", value: 1 }] : [],
    rule: BLOODLUST_RULE,
    teamReroll: true,
    proAllowed: true,
    onFail: "must bite a Thrall this activation (or Turnover)"
  });
  if (r.success) return;
  act.bloodlust = "hungry";
  ctx.hungryNow = true;
  ctx.emit("status", `${label(p)} is overcome by Bloodlust: they must bite a Thrall team-mate this activation.`, BLOODLUST_RULE, { playerId: p.id });
  if (act.action !== "move") {
    const c = ctx.ask({
      type: "bloodlust",
      team: p.team,
      prompt: `Bloodlust: keep the declared ${act.action === "blitz" ? "Blitz" : act.action} Action or change it to a Move Action? (${act.action === "blitz" ? "The Blitz still counts as the Blitz of this Turn." : "Once-per-Turn Actions still count as declared."})`,
      options: [
        { id: "keep", label: "Keep the declared Action" },
        { id: "move", label: "Change to a Move Action" }
      ],
      rule: BLOODLUST_RULE
    });
    if (c === "move") {
      act.action = "move";
      act.blitzTarget = void 0;
      ctx.emit("declare", `${label(p)} changes to a Move Action (Bloodlust).`, BLOODLUST_RULE, { playerId: p.id, action: "move" });
    }
  }
}
function thrallsNear(ctx, p) {
  if (!p.pos) return [];
  return pitchPlayers(ctx.s, p.team).filter((q) => q.id !== p.id && q.keywords.some((k) => k.toLowerCase() === "thrall") && adjacent(q.pos, p.pos));
}
function morselsNear(ctx, p) {
  return biteTargets(ctx.s, p).filter((q) => q.team !== p.team && adjacent(q.pos, p.pos));
}
function biteTargets(s, p) {
  if (!p.pos) return [];
  const thralls = pitchPlayers(s, p.team).filter((q) => q.id !== p.id && !!q.pos && q.keywords.some((k) => k.toLowerCase() === "thrall"));
  const morsels = starReady(s, p, "karina") ? pitchPlayers(s, p.team === "A" ? "B" : "A").filter((q) => !!q.pos && q.st <= 3 && !q.star) : [];
  return [...morsels, ...thralls];
}
function biteTargetAdjacent(s, p) {
  return !!p.pos && biteTargets(s, p).some((q) => adjacent(q.pos, p.pos));
}
function mayStillMove(p, act) {
  if (p.stance !== "standing" || p.rooted) return false;
  switch (act.action) {
    case "move":
    case "blitz":
      return true;
    case "pass":
    case "handoff":
      return !act.ballActionDone || canUse(p, "giveAndGo");
    case "secure":
    case "ttm":
      return !act.ballActionDone;
    case "foul":
      return !act.foulDone || canUse(p, "quickFoul");
    case "special":
      return !!act.special && !!SPECIALS[act.special]?.move && !act.specialDone;
    default:
      return false;
  }
}
function bloodlustSettled(s, p, act) {
  if (act.bloodlust !== "hungry" || act.over || act.playerId !== p.id || p.location !== "pitch" || !p.pos) return false;
  if (act.razzle && !act.razzle.second) return false;
  const mainPending = act.action === "blitz" && act.blocksDone === 0 || act.action === "foul" && !act.foulDone || act.action === "special" && !act.specialDone || act.action === "ttm" && !act.ballActionDone;
  if (mainPending) return false;
  const reach = mayStillMove(p, act) ? reachableSquares(s, p.id) : [];
  if (!reach.length) return true;
  if (biteTargetAdjacent(s, p)) return false;
  const targets = biteTargets(s, p);
  return !reach.some((r) => targets.some((q) => adjacent(q.pos, r.c)));
}
function bite(ctx, p, thrall, act) {
  const s = ctx.s;
  act.bloodlust = "fed";
  if (thrall.team !== p.team) spendStar(ctx, p, `${label(p)} bites the opposition player ${label(thrall)} as if a Thrall.`);
  ctx.emit("status", `${label(p)} bites ${label(thrall)} (Bloodlust).`, BLOODLUST_RULE, { playerId: thrall.id });
  const hadBall = hasBall(s, thrall);
  const from = thrall.pos ? { ...thrall.pos } : null;
  injuryRoll(ctx, thrall, [], false, { casAsBadlyHurt: true });
  if (hadBall && from && (thrall.location !== "pitch" || thrall.stance !== "standing")) {
    if (thrall.team === p.team) ctx.setTurnover(`${label(thrall)} dropped the ball after being bitten`, BLOODLUST_RULE);
    s.ball = { kind: "ground", pos: from };
    bounce(ctx, from);
  }
}
function chooseThrall(ctx, p, why, allowNone, noneLabel = "Not now") {
  const th = [...morselsNear(ctx, p), ...thrallsNear(ctx, p)];
  if (!th.length) return null;
  const opts = th.map((q) => ({ id: q.id, label: `Bite ${label(q)}${q.team !== p.team ? " (opposition \u2014 Tasty Morsel, once per game)" : ""}`, square: q.pos }));
  if (allowNone) opts.push({ id: "none", label: noneLabel });
  const pick = ctx.ask({ type: "bloodlust", team: p.team, prompt: `Bloodlust: ${why}`, options: opts, rule: BLOODLUST_RULE });
  return th.find((q) => q.id === pick) ?? null;
}
function requireBite(ctx, p, act, what) {
  if (act.bloodlust !== "hungry") return;
  const th = chooseThrall(ctx, p, `bite a Thrall before the ${what === "pass" ? "Pass" : "Hand-off"}.`, false);
  if (!th) {
    const why = `Bloodlust: ${label(p)} must bite an adjacent Thrall Lineman before a ${what === "pass" ? "Pass" : "Hand-off"} (p.125), and none is adjacent`;
    if (!ctx.hungryNow) throw new IllegalAction(`${why}.`);
    ctx.emit("status", `${why}: the ${what === "pass" ? "Pass" : "Hand-off"} is not made.`, BLOODLUST_RULE, { playerId: p.id });
    throw new ActionStop("bloodlust: no Thrall");
  }
  bite(ctx, p, th, act);
  if (ctx.turnover) throw new ActionStop("turnover");
}
function bloodlustMayScore(ctx, h) {
  const act = ctx.s.turn.activation;
  if (!act || act.playerId !== h.id || act.bloodlust !== "hungry") return true;
  const th = chooseThrall(ctx, h, "bite a Thrall now so the Touchdown can be scored?", true);
  if (!th) return false;
  bite(ctx, h, th, act);
  return !ctx.turnover;
}
function bloodlustEnd(ctx, p, act) {
  if (act.bloodlust !== "hungry" || p.location !== "pitch") return;
  const th = chooseThrall(ctx, p, `${label(p)}'s activation ends \u2014 bite a Thrall team-mate now? Without a bite: Turnover, Distracted, and the ball is dropped.`, true, "No bite (Turnover)");
  if (th) {
    bite(ctx, p, th, act);
    return;
  }
  const s = ctx.s;
  act.bloodlust = "fed";
  p.distracted = p.stance === "standing";
  ctx.setTurnover(`${label(p)} did not bite a Thrall (Bloodlust)`, BLOODLUST_RULE);
  if (hasBall(s, p) && p.pos) {
    const from = { ...p.pos };
    ctx.emit("ball", `${label(p)} drops the ball (Bloodlust).`, BLOODLUST_RULE);
    s.ball = { kind: "ground", pos: from };
    bounce(ctx, from);
  }
  void hasSkill;
  void R;
}

// src/engine/ball.ts
var catchTarget = (p, kind) => kind === "setPiece" ? 2 : p.ag;
var DIVING_CATCH_KINDS = ["pass", "passTarget", "throwIn", "kick", "barikA", "barikB"];
function scatterPath(from, dirs) {
  let cur = from;
  for (const d2 of dirs) {
    const next = add(cur, D8_DIRS[d2]);
    if (!inBounds(next)) return { last: cur, off: next };
    cur = next;
  }
  return { land: cur };
}
function throwInResult(last, off, dirDie, distance) {
  const t = throwInDirections(last, off);
  const dir = t.dirs[Math.ceil(dirDie / 2) - 1];
  let cur = last;
  for (let i = 1; i < distance; i++) {
    const next = add(cur, dir);
    if (!inBounds(next)) return { last: cur, off: next };
    cur = next;
  }
  return { land: cur };
}
function disturbingPresenceMods(ctx, p) {
  if (!p.pos) return [];
  const n = pitchPlayers(ctx.s, other(p.team)).filter((q) => hasSkill(q, "disturbingPresence") && dist(q.pos, p.pos) <= 3).length;
  return n ? [{ label: `Disturbing Presence x${n}`, value: -n }] : [];
}
function catchMods(ctx, p, kind) {
  const mods = [];
  if (kind === "setPiece") return mods;
  if (kind === "bounce") mods.push({ label: "bouncing ball", value: -1 });
  if (kind === "throwIn") mods.push({ label: "thrown-in ball", value: -1 });
  const m = markersOf(ctx.s, p.pos, p.team).length;
  if (m && !canUse(p, "nervesOfSteel")) mods.push({ label: `Marked x${m}`, value: -m });
  if (ctx.s.weather === "pouringRain") mods.push({ label: "Pouring Rain", value: -1 });
  if (canUse(p, "extraArms")) mods.push({ label: "Extra Arms", value: 1 });
  if (kind === "passTarget" && canUse(p, "divingCatch")) mods.push({ label: "Diving Catch (target square)", value: 1 });
  if (kind === "barikA" && p.team === "A" || kind === "barikB" && p.team === "B") mods.push({ label: "Blast It! (Barik Farblast)", value: 1 });
  mods.push(...disturbingPresenceMods(ctx, p));
  return mods;
}
function divingCatchers(s, sq, team2) {
  if (gated("divingCatch")) return [];
  return pitchPlayers(s, team2).filter((q) => canUse(q, "divingCatch") && !hasSkill(q, "noBall") && dist(q.pos, sq) === 1);
}
function divingCatch(ctx, sq, kind, first) {
  const s = ctx.s;
  const lead = first ?? s.turn.active;
  const order = [lead, other(lead)];
  for (const t of order) {
    const cands = divingCatchers(s, sq, t);
    if (!cands.length) continue;
    const pick = ctx.ask({
      type: "divingCatch",
      team: t,
      prompt: `The ball is landing in ${fmt(sq)}. Try a Diving Catch?`,
      options: [...cands.map((q2) => ({ id: q2.id, label: `Diving Catch with ${label(q2)}`, square: q2.pos })), { id: "none", label: "No Diving Catch" }],
      rule: { page: 127, title: "Diving Catch" }
    });
    if (pick === "none") continue;
    const q = cands.find((c) => c.id === pick);
    ctx.emit("ball", `${label(q)} dives for the ball landing in ${fmt(sq)}!`, { page: 127, title: "Diving Catch" }, { playerId: q.id });
    return catchAttempt(ctx, q, kind === "passTarget" ? "pass" : kind) ? "caught" : "failed";
  }
  return "none";
}
function checkTouchdown(ctx, stopNow) {
  if (ctx.touchdown) {
    if (stopNow) throw new ActionStop("touchdown");
    return true;
  }
  const h = ballHolder(ctx.s);
  if (!h || !h.pos || h.stance !== "standing") return false;
  if (!inScoringEndZone(h.team, h.pos)) return false;
  if (!bloodlustMayScore(ctx, h)) return false;
  ctx.touchdown = { team: h.team, playerId: h.id };
  awardSpp(ctx, h, "touchdown");
  ctx.s.teams[h.team].score += 1;
  const during = ctx.s.turn.active;
  ctx.emit("touchdown", `TOUCHDOWN! ${label(h)} scores for ${ctx.s.teams[h.team].name}.`, h.team === during ? R.touchdown : R.tdOpponentTurn, { team: h.team, playerId: h.id });
  if (starReady(ctx.s, h, "luthor")) {
    const t = ctx.s.teams[h.team];
    t.nextDriveRerolls = (t.nextDriveRerolls ?? 0) + 1;
    spendStar(ctx, h, `${t.name} gain a Team Re-roll until the end of the next Drive.`);
  }
  if (h.team === during) ctx.setTurnover("a Touchdown was scored", R.turnover);
  if (stopNow) throw new ActionStop("touchdown");
  return true;
}
function ballArrives(ctx, sq, kind) {
  if (ctx.mode === "plan") {
    planChain(ctx, { t: "arrive", sq, kind });
    return false;
  }
  return execArrive(ctx, sq, kind, 0);
}
function bounce(ctx, from) {
  if (ctx.mode === "plan") return planChain(ctx, { t: "bounce", from });
  execBounce(ctx, from, 0);
}
function throwIn(ctx, last, off) {
  if (ctx.mode === "plan") return planChain(ctx, { t: "throwIn", last, off });
  execThrowIn(ctx, last, off, 0);
}
function execArrive(ctx, sq, kind, depth) {
  if (depth > 400) throw new Error("Ball resolution did not terminate");
  const p = playerAt(ctx.s, sq);
  if (!p) {
    if (kind === "bounce") {
      ctx.s.ball = { kind: "ground", pos: sq };
      ctx.emit("ball", `The ball comes to rest in ${fmt(sq)}.`, R.scatter, { to: sq });
      return false;
    }
    if (DIVING_CATCH_KINDS.includes(kind)) {
      const dc = divingCatch(ctx, sq, kind);
      if (dc === "caught") return false;
      if (dc === "failed") {
        execBounce(ctx, sq, depth + 1);
        return false;
      }
    }
    ctx.emit("ball", `The ball lands in the empty square ${fmt(sq)} and bounces.`, kind === "throwIn" ? R.throwIn : R.resolvePass);
    execBounce(ctx, sq, depth + 1);
    return false;
  }
  const ok = catchAttempt(ctx, p, kind);
  if (ok) return true;
  execBounce(ctx, sq, depth + 1);
  return false;
}
function kickDivingCatch(ctx, sq, receiving) {
  return divingCatch(ctx, sq, "kick", receiving);
}
function catchAttempt(ctx, p, kind) {
  const how = kind === "bounce" ? "bouncing ball" : kind === "throwIn" ? "thrown-in ball" : kind === "handoff" ? "hand-off" : kind === "kick" ? "kick-off" : kind === "punt" ? "punt" : "pass";
  if (!hasTackleZone(p)) {
    const why = p.stance !== "standing" ? p.stance === "prone" ? "Prone" : "Stunned" : "Distracted";
    ctx.emit("roll", `${label(p)} is ${why} and automatically fails to catch the ${how}.`, R.catch, { playerId: p.id, auto: true });
    return false;
  }
  const mods = catchMods(ctx, p, kind);
  const res = rollTest(ctx, {
    kind: "catch",
    player: p,
    label: `${label(p)} catches the ${how} in ${fmt(p.pos)}${kind === "setPiece" ? " (Set Piece: any 2+)" : ""}`,
    target: catchTarget(p, kind),
    mods,
    rule: R.catch,
    skillReroll: { id: "catch", name: "Catch", available: canUse(p, "catch") },
    teamReroll: true,
    proAllowed: true,
    onFail: "the ball bounces",
    autoFail: hasSkill(p, "noBall") ? "No Ball" : void 0
  });
  if (res.success) {
    ctx.s.ball = { kind: "held", playerId: p.id };
    ctx.emit("ball", `${label(p)} catches the ball.`, R.catch, { holder: p.id });
    quickBite(ctx, p);
    checkTouchdown(ctx, false);
    return true;
  }
  return false;
}
function quickBite(ctx, p) {
  const s = ctx.s;
  if (!p.pos) return;
  const g = markersOf(s, p.pos, p.team).find((q) => starReady(s, q, "guffle"));
  if (!g) return;
  if (!askStar(ctx, g, `${label(p)} caught the ball next to Guffle. Make an Armour Roll against them (broken: Guffle takes the ball)?`, "Use Quick Bite", true)) return;
  const r = ctx.roll({ dice: [6, 6], interpret: ([a, b]) => a + b >= p.av ? "broken" : "holds", cacheKey: `armourfixed|${p.av}|0`, by: g.team, judge: (v) => v === "broken" ? 1 : -1 });
  spendStar(ctx, g, `Armour Roll against ${label(p)}: ${r.faces[0]}+${r.faces[1]}=${r.faces[0] + r.faces[1]} vs AV ${p.av}+ \u2014 ${r.value === "broken" ? "armour broken: Guffle takes the ball (no Turnover)" : "armour holds"}.`);
  if (r.value === "broken") {
    s.ball = { kind: "held", playerId: g.id };
    ctx.quickBite = true;
    ctx.emit("ball", `${label(g)} has the ball.`, starRuleRef(STAR_BY_ID.guffle), { holder: g.id });
  }
}
function execBounce(ctx, from, depth) {
  if (depth > 400) throw new Error("Ball resolution did not terminate");
  const r = ctx.roll({ dice: [8], interpret: ([d3]) => scatterPath(from, [d3]), cacheKey: `bounce|${from.x},${from.y}` });
  const d2 = r.faces[0];
  if ("off" in r.value) {
    ctx.emit("ball", `The ball bounces (D8: ${d2}) out of the pitch from ${fmt(from)}.`, R.scatter, { d8: d2 });
    execThrowIn(ctx, r.value.last, r.value.off, depth + 1);
    return;
  }
  const to = r.value.land;
  ctx.s.ball = { kind: "ground", pos: to };
  ctx.emit("ball", `The ball bounces (D8: ${d2}) from ${fmt(from)} to ${fmt(to)}.`, R.scatter, { d8: d2, from, to });
  execArrive(ctx, to, "bounce", depth + 1);
}
function scatter(ctx, from, n, why) {
  const r = ctx.roll({
    dice: Array.from({ length: n }, () => 8),
    interpret: (faces) => scatterPath(from, faces),
    cacheKey: `scatter${n}|${from.x},${from.y}`
  });
  ctx.emit("ball", `${why}: Scatter (${n}) from ${fmt(from)} \u2014 D8 ${r.faces.join(", ")} \u2192 ${"land" in r.value ? fmt(r.value.land) : `out of the pitch after ${fmt(r.value.last)}`}.`, R.scatter, { d8: r.faces, result: r.value });
  return r.value;
}
function execThrowIn(ctx, last, off, depth) {
  if (depth > 400) throw new Error("Ball resolution did not terminate");
  const t = throwInDirections(last, off);
  const sevens = rulesFor(ctx.s).throwInDistance === "d6plus2";
  const r = sevens ? ctx.roll({ dice: [6, 6], interpret: ([dd2, a2]) => throwInResult(last, off, dd2, a2 + 2), cacheKey: `throwin7|${last.x},${last.y}|${off.x},${off.y}` }) : ctx.roll({
    dice: [6, 6, 6],
    interpret: ([dd2, a2, b2]) => throwInResult(last, off, dd2, a2 + b2),
    cacheKey: `throwin|${last.x},${last.y}|${off.x},${off.y}`
  });
  const [dd, a, b] = r.faces;
  const dirTxt = t.corner ? `D3 ${Math.ceil(dd / 2)}` : `D6 ${dd}`;
  const distTxt = sevens ? `distance D6+2: ${a}+2=${a + 2}` : `distance ${a}+${b}=${a + b}`;
  const rule2 = sevens && !t.corner ? rulesFor(ctx.s).refs.throwIn : t.corner ? R.cornerThrowIn : R.throwIn;
  if ("off" in r.value) {
    ctx.emit("ball", `Throw-in from ${fmt(last)} (${t.corner ? "corner, " : ""}${dirTxt}, ${distTxt}) \u2014 the ball leaves the pitch again after ${fmt(r.value.last)}.`, rule2);
    execThrowIn(ctx, r.value.last, r.value.off, depth + 1);
    return;
  }
  const to = r.value.land;
  ctx.s.ball = { kind: "ground", pos: to };
  ctx.emit("ball", `Throw-in from ${fmt(last)} (${t.corner ? "corner, " : ""}${dirTxt}, ${distTxt}, counting ${fmt(last)} as the first square) lands in ${fmt(to)}.`, rule2, { to });
  execArrive(ctx, to, "throwIn", depth + 1);
}
function ballDisplacedBy(ctx, p) {
  if (ctx.s.ball.kind === "ground" && p.pos && eq(ctx.s.ball.pos, p.pos)) {
    ctx.emit("ball", `${label(p)} is moved onto the ball, which bounces (no Turnover).`, R.push);
    bounce(ctx, p.pos);
  }
}
var rrKey = (r) => `${r.team}|${r.leader ? 1 : 0}|${r.pro ? 1 : 0}|${r.free ?? 0}|${r.mascot ? 1 : 0}|${(r.used ?? []).join(".")}`;
var rrUsed = (r, tag) => !!r.used?.includes(tag);
var rrWith = (r, tag) => ({ ...r, used: [...r.used ?? [], tag].sort() });
function stateKey(st) {
  if (st.t === "arrive") return `a${st.x},${st.y},${st.kind},${rrKey(st.rr)}`;
  if (st.t === "bounce") return `b${st.x},${st.y},${rrKey(st.rr)}`;
  return `t${st.lx},${st.ly},${st.ox},${st.oy},${rrKey(st.rr)}`;
}
var chainCache = /* @__PURE__ */ new Map();
function boardKey(s) {
  const act = s.turn.activation;
  return JSON.stringify([
    s.players.filter((p) => p.location === "pitch").map((p) => [p.id, p.team, p.pos?.x, p.pos?.y, p.stance, p.distracted ? 1 : 0, p.ag, p.av, p.skills.map((k) => k.id + (k.value ?? "")).join("."), p.captain && s.teams[p.team].specialRules?.includes("Team Captain") ? 1 : 0, p.star ?? "", (p.starUsed ?? []).join("."), p.veteran ?? ""]),
    s.weather,
    s.turn.active,
    act?.playerId ?? "",
    s.variant ?? "",
    s.rulesEdition ?? "legacy",
    s.match?.half ?? s.turn.half,
    s.match?.drive ?? 0,
    s.teams.A.turn,
    s.teams.B.turn
  ]);
}
function solveBallChain(s, start, policy) {
  const act = s.turn.activation;
  const rr0 = { team: s.teams[s.turn.active].rerolls, leader: s.teams[s.turn.active].leaderReroll, pro: !!act?.proUsed, mascot: !!s.teams[s.turn.active].mascotReroll };
  const startState = start.t === "arrive" ? { t: "arrive", x: start.sq.x, y: start.sq.y, kind: start.kind, rr: rr0 } : start.t === "bounce" ? { t: "bounce", x: start.from.x, y: start.from.y, rr: rr0 } : { t: "throwIn", lx: start.last.x, ly: start.last.y, ox: start.off.x, oy: start.off.y, rr: rr0 };
  const wk = s.match?.options.difficulty && s.match.options.computer ? `|d${s.match.options.difficulty.player},${s.match.options.difficulty.computer},${s.match.options.computer.team}` : "";
  const ck = `${boardKey(s)}|${stateKey(startState)}|${policy.useSkillRerolls ? 1 : 0}${policy.usePro ? 1 : 0}${policy.useTeamRerolls ? 1 : 0}${wk}`;
  const cached = chainCache.get(ck);
  if (cached) return cached;
  const leaderOk = leaderOnPitch(s, s.turn.active);
  const captainP = captainOnPitch(s, s.turn.active) ? testWeights(s, s.turn.active, (f) => f === 6)?.[5] ?? 1 / 6 : 0;
  const pseudoCtx = { s };
  const trans = /* @__PURE__ */ new Map();
  const caught = (p, rr, m, out) => {
    const g = p.pos ? markersOf(s, p.pos, p.team).find((q) => starReady(s, q, "guffle") && !rrUsed(rr, `s:${q.id}`)) : void 0;
    if (!g) {
      out.push({ p: m, absorb: { holder: p.id, rr } });
      return;
    }
    const rg = rrWith(rr, `s:${g.id}`);
    const broke = (f) => f[0] + f[1] >= p.av;
    const qb = tiltedChance(s, g.team, [6, 6], broke, (f) => broke(f) ? 1 : -1);
    out.push({ p: m * qb, absorb: { holder: g.id, rr: rg, bite: true } });
    out.push({ p: m * (1 - qb), absorb: { holder: p.id, rr: rg } });
  };
  const catchTransitions = (p, kind, st, x, y) => {
    const out = [];
    const bounceFrom = (rr) => ({ t: "bounce", x, y, rr });
    if (!hasTackleZone(p) || hasSkill(p, "noBall")) {
      out.push({ p: 1, next: bounceFrom(st.rr) });
      return out;
    }
    const mod = modSum(catchMods(pseudoCtx, p, kind));
    const starTag = `s:${p.id}`;
    const sb = starTestBonus(s, p, "catch");
    const tgt0 = catchTarget(p, kind);
    const w = testWeights(s, p.team, (f) => d6Success(f, tgt0, mod) || !!sb && d6Success(f, tgt0, mod + sb.value));
    const pf = (f) => w ? w[f - 1] : 1 / 6;
    const starRr = starTestReroll(s, p, "catch");
    const once = (rr) => {
      let ok = 0;
      let bonus = 0;
      let fail = 0;
      const bonusReady = !!sb && !rrUsed(rr, starTag);
      const tgt = catchTarget(p, kind);
      for (let f = 1; f <= 6; f++) {
        if (d6Success(f, tgt, mod)) ok += pf(f);
        else if (bonusReady && d6Success(f, tgt, mod + sb.value)) bonus += pf(f);
        else fail += pf(f);
      }
      return [ok, bonus, fail];
    };
    const settle = (m, rr, onFail) => {
      const [ok, bonus, fail] = once(rr);
      if (ok > 0) caught(p, rr, m * ok, out);
      if (bonus > 0) caught(p, rrWith(rr, starTag), m * bonus, out);
      if (fail > 0) onFail(m * fail, rr);
    };
    const toBounce = (m, rr) => {
      if (m > 0) out.push({ p: m, next: bounceFrom(rr) });
    };
    const isActive = p.team === s.turn.active;
    const lonerX = lonerValue(p);
    const lonerP = lonerX ? d6AtLeastW(lonerX, testWeights(s, p.team, (f) => f >= lonerX)) : 1;
    const reroll = (m, rr) => {
      if (policy.useSkillRerolls && canUse(p, "catch")) return settle(m, rr, toBounce);
      if (policy.useSkillRerolls && starRr && !rrUsed(rr, starTag)) return settle(m, rrWith(rr, starTag), toBounce);
      if (policy.usePro && !!act && act.playerId === p.id && !rr.pro && canUse(p, "pro")) {
        const r2 = { ...rr, pro: true };
        const proP = d6AtLeastW(3, testWeights(s, p.team, (f) => f >= 3));
        settle(m * proP, r2, toBounce);
        return toBounce(m * (1 - proP), r2);
      }
      if (policy.useSkillRerolls && p.veteran === "ready" && !rrUsed(rr, `v:${p.id}`)) return settle(m, rrWith(rr, `v:${p.id}`), toBounce);
      if (!isActive || !policy.useTeamRerolls) return toBounce(m, rr);
      if (rr.team > 0) {
        const branches = captainP > 0 ? [
          { q: 1 - captainP, rr: { ...rr, team: rr.team - 1 } },
          { q: captainP, rr: { ...rr, free: (rr.free ?? 0) + 1 } }
        ] : [{ q: 1, rr: { ...rr, team: rr.team - 1 } }];
        for (const b of branches) {
          settle(m * b.q * lonerP, b.rr, toBounce);
          toBounce(m * b.q * (1 - lonerP), b.rr);
        }
        return;
      }
      if (rr.leader && leaderOk) {
        const r2 = { ...rr, leader: false };
        settle(m * lonerP, r2, toBounce);
        return toBounce(m * (1 - lonerP), r2);
      }
      if (rr.mascot) {
        const r2 = { ...rr, mascot: false };
        const mascotP = d6AtLeastW(4, testWeights(s, p.team, (f) => f >= 4));
        const free = faq2026(s) ? captainP : 0;
        const rFree = { ...rr, mascot: true };
        if (free > 0) {
          settle(m * mascotP * free * lonerP, rFree, toBounce);
          toBounce(m * mascotP * free * (1 - lonerP), rFree);
        }
        settle(m * mascotP * (1 - free) * lonerP, r2, toBounce);
        toBounce(m * mascotP * (1 - free) * (1 - lonerP), r2);
        return toBounce(m * (1 - mascotP), r2);
      }
      toBounce(m, rr);
    };
    settle(1, st.rr, reroll);
    return out;
  };
  const transitions = (st) => {
    const k = stateKey(st);
    const c = trans.get(k);
    if (c) return c;
    let out = [];
    if (st.t === "arrive") {
      const sq = { x: st.x, y: st.y };
      const pl = playerAt(s, sq);
      if (!pl) {
        const dc = DIVING_CATCH_KINDS.includes(st.kind) ? divingCatchers(s, sq, s.turn.active)[0] ?? divingCatchers(s, sq, other(s.turn.active))[0] : void 0;
        if (st.kind === "bounce") out.push({ p: 1, absorb: { rest: sq, rr: st.rr } });
        else if (dc) out = catchTransitions(dc, st.kind === "passTarget" ? "pass" : st.kind, st, st.x, st.y);
        else out.push({ p: 1, next: { t: "bounce", x: st.x, y: st.y, rr: st.rr } });
      } else out = catchTransitions(pl, st.kind, st, st.x, st.y);
    } else if (st.t === "bounce") {
      for (let d2 = 1; d2 <= 8; d2++) {
        const r = scatterPath({ x: st.x, y: st.y }, [d2]);
        if ("off" in r) out.push({ p: 1 / 8, next: { t: "throwIn", lx: r.last.x, ly: r.last.y, ox: r.off.x, oy: r.off.y, rr: st.rr } });
        else out.push({ p: 1 / 8, next: { t: "arrive", x: r.land.x, y: r.land.y, kind: "bounce", rr: st.rr } });
      }
    } else {
      const agg = /* @__PURE__ */ new Map();
      const sevens = rulesFor(s).throwInDistance === "d6plus2";
      for (let dd = 1; dd <= 6; dd++)
        for (let a = 1; a <= 6; a++)
          for (let b = 1; b <= 6; b++) {
            const r = throwInResult({ x: st.lx, y: st.ly }, { x: st.ox, y: st.oy }, dd, sevens ? a + 2 : a + b);
            const next = "off" in r ? { t: "throwIn", lx: r.last.x, ly: r.last.y, ox: r.off.x, oy: r.off.y, rr: st.rr } : { t: "arrive", x: r.land.x, y: r.land.y, kind: "throwIn", rr: st.rr };
            const nk = stateKey(next);
            const e = agg.get(nk);
            if (e) e.p += 1 / 216;
            else agg.set(nk, { p: 1 / 216, next });
          }
      out = [...agg.values()];
    }
    trans.set(k, out);
    return out;
  };
  const noFree = (r) => {
    if (r.free === void 0) return r;
    const { free: _f, ...rest } = r;
    return rest;
  };
  const shapeOf = (r) => {
    if (r.free === void 0) return 0;
    if (r.used === void 0) return 1;
    const k = Object.keys(r);
    return k.indexOf("used") < k.indexOf("free") ? 2 : 1;
  };
  const withShape = (r, v, f) => {
    const core = noFree(r);
    if (v === 0) return core;
    if (v === 2) return { ...core, free: f };
    const { used, ...head } = core;
    return used === void 0 ? { ...head, free: f } : { ...head, free: f, used };
  };
  const withFree = (r, f) => f > 0 ? { ...r, free: f } : noFree(r);
  const baseIds = /* @__PURE__ */ new Map();
  const baseRep = [];
  const baseOf = (st) => {
    const k = stateKey({ ...st, rr: noFree(st.rr) });
    let b = baseIds.get(k);
    if (b === void 0) {
      b = baseRep.length;
      baseIds.set(k, b);
      baseRep.push(st);
    }
    return b;
  };
  const absorbKey = (a, r) => a.holder ? `held:${a.holder}${a.bite ? ":bite" : ""}|${rrKey(r)}` : `rest:${a.rest?.x},${a.rest?.y}|${rrKey(r)}`;
  const absIds = /* @__PURE__ */ new Map();
  const absRep = [];
  const absBaseOf = (a) => {
    const k = absorbKey(a, noFree(a.rr));
    let b = absIds.get(k);
    if (b === void 0) {
      b = absRep.length;
      absIds.set(k, b);
      absRep.push(a);
    }
    return b;
  };
  const tmpl = [];
  const templateOf = (b, v) => {
    const have = tmpl[b * 3 + v];
    if (have) return have;
    const rep = { ...baseRep[b], rr: withShape(baseRep[b].rr, v, v) };
    const f0 = rep.rr.free ?? 0;
    const list = transitions(rep);
    const t = { p: new Float64Array(list.length), to: new Int32Array(list.length), abs: new Uint8Array(list.length), df: new Int32Array(list.length), shape: new Uint8Array(list.length), rr: [] };
    list.forEach((tr, i) => {
      t.p[i] = tr.p;
      const r = tr.absorb ? tr.absorb.rr : tr.next.rr;
      const df = (r.free ?? 0) - f0;
      if (df < 0) throw new Error("ball chain: Team Captain free count decreased");
      t.df[i] = df;
      t.shape[i] = shapeOf(r);
      t.rr[i] = r;
      if (tr.absorb) {
        t.abs[i] = 1;
        t.to[i] = absBaseOf(tr.absorb);
      } else t.to[i] = baseOf(tr.next);
    });
    tmpl[b * 3 + v] = t;
    return t;
  };
  const sidRows = [];
  const sidBase = [];
  const sidFree = [];
  const sidShape = [];
  const sidOf = (b, f, shape) => {
    const row = sidRows[b] ?? (sidRows[b] = []);
    let id = row[f];
    if (id === void 0) {
      id = sidBase.length;
      row[f] = id;
      sidBase.push(b);
      sidFree.push(f);
      sidShape.push(shape);
    }
    return id;
  };
  const aidRows = [];
  const aidBase = [];
  const aidFree = [];
  const aidP = [];
  const aidRR = [];
  const aidSeen = [];
  const aidOf = (b, f) => {
    const row = aidRows[b] ?? (aidRows[b] = []);
    let id = row[f];
    if (id === void 0) {
      id = aidBase.length;
      row[f] = id;
      aidBase.push(b);
      aidFree.push(f);
      aidP.push(0);
      aidRR.push(void 0);
      aidSeen.push(false);
    }
    return id;
  };
  const absorbedOrder = [];
  let fIds = [sidOf(baseOf(startState), startState.rr.free ?? 0, shapeOf(startState.rr))];
  let fM = [1];
  const slotGen = [];
  const slotAt = [];
  let iter = 0;
  let remaining = 1;
  while (fIds.length && iter < 5e3) {
    iter++;
    const nIds = [];
    const nM = [];
    for (let i = 0; i < fIds.length; i++) {
      const sid = fIds[i];
      const m = fM[i];
      const f = sidFree[sid];
      const t = templateOf(sidBase[sid], sidShape[sid]);
      const n = t.p.length;
      for (let j = 0; j < n; j++) {
        const pm = m * t.p[j];
        if (pm <= 0) continue;
        if (t.abs[j]) {
          const a = aidOf(t.to[j], f + t.df[j]);
          if (aidSeen[a]) aidP[a] += pm;
          else {
            aidSeen[a] = true;
            aidP[a] = pm;
            aidRR[a] = t.rr[j];
            absorbedOrder.push(a);
          }
        } else {
          const ns = sidOf(t.to[j], f + t.df[j], t.shape[j]);
          if (slotGen[ns] === iter) nM[slotAt[ns]] += pm;
          else {
            slotGen[ns] = iter;
            slotAt[ns] = nIds.length;
            nIds.push(ns);
            nM.push(pm);
          }
        }
      }
    }
    fIds = nIds;
    fM = nM;
    remaining = 0;
    for (let i = 0; i < fM.length; i++) remaining += fM[i];
    if (remaining < 1e-15) break;
  }
  const outcomes = absorbedOrder.map((a) => {
    const rep = absRep[aidBase[a]];
    const rr = withFree(aidRR[a], aidFree[a]);
    return { key: absorbKey(rep, rr), p: aidP[a], holder: rep.holder, rest: rep.rest, rr, bite: rep.bite };
  }).sort((a, b) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0);
  const res = { outcomes, unresolved: fIds.length ? remaining : 0 };
  if (chainCache.size > 2e3) chainCache.clear();
  chainCache.set(ck, res);
  return res;
}
var choiceLists = /* @__PURE__ */ new WeakMap();
function planChain(ctx, start) {
  const s = ctx.s;
  if (start.t === "arrive" && start.kind !== "bounce") {
    const p = playerAt(s, start.sq);
    if (p && hasTackleZone(p)) {
      recordTestStep(ctx, {
        kind: "catch",
        player: p,
        label: `${label(p)} catches the ${start.kind === "throwIn" ? "thrown-in ball" : start.kind === "handoff" ? "hand-off" : start.kind === "kick" ? "kick-off" : "pass"} in ${fmt(p.pos)}`,
        target: catchTarget(p, start.kind),
        mods: catchMods(ctx, p, start.kind),
        rule: R.catch,
        skillReroll: { id: "catch", name: "Catch", available: canUse(p, "catch") },
        teamReroll: true,
        proAllowed: true,
        onFail: "the ball bounces (the whole bounce chain is resolved exactly)",
        autoFail: hasSkill(p, "noBall") ? "No Ball" : void 0,
        at: p.pos ?? void 0
      });
    }
  }
  const res = solveBallChain(s, start, ctx.policy);
  if (res.unresolved > 0) ctx.unresolvedExtra += res.unresolved;
  const active2 = s.turn.active;
  let choices = choiceLists.get(res);
  if (!choices) {
    choices = res.outcomes.map((o) => ({ key: o.key, p: o.p, value: o }));
    choiceLists.set(res, choices);
  }
  const pick = ctx.dice.choose(
    choices,
    (o) => {
      if (!o.holder) return false;
      const h = findPlayer(s, o.holder);
      return !!h && h.team === active2;
    }
  );
  const t = s.teams[active2];
  spendTeamReroll(t, t.rerolls - pick.rr.team);
  const cap = pick.rr.free ? captainOnPitch(s, active2) : void 0;
  if (cap) ctx.emit("note", `Team Captain ${label(cap)}: a natural 6 made ${pick.rr.free === 1 ? "a Team Re-roll" : `${pick.rr.free} Team Re-rolls`} used in this ball chain free.`, CAPTAIN_RULE, { playerId: cap.id, captainFree: true });
  t.leaderReroll = pick.rr.leader;
  if (s.turn.activation) s.turn.activation.proUsed = pick.rr.pro;
  if (pick.rr.mascot === false && t.mascotReroll) t.mascotReroll = false;
  for (const tag of pick.rr.used ?? []) {
    const who = findPlayer(s, tag.slice(2));
    if (!who) continue;
    if (tag.startsWith("v:")) who.veteran = "used";
    else if (!(who.star === "guffle" && pick.bite)) spendStar(ctx, who, "used during this ball chain (included in the exact chain preview).");
  }
  const origin = start.t === "arrive" ? start.sq : start.t === "bounce" ? start.from : start.last;
  if (pick.holder) {
    s.ball = { kind: "held", playerId: pick.holder };
    const h = findPlayer(s, pick.holder);
    if (pick.bite) {
      spendStar(ctx, h, "Quick Bite: armour broken \u2014 Guffle takes the ball (no Turnover).");
      ctx.quickBite = true;
    }
    ctx.emit("ball", `Ball from ${fmt(origin)} ends ${pick.bite ? "with Guffle after his Quick Bite" : "caught"} by ${label(h)} (exact chain probability ${(pick.p * 100).toFixed(2)}%).`, R.catch, { holder: h.id, chain: true });
    checkTouchdown(ctx, false);
  } else if (pick.rest) {
    s.ball = { kind: "ground", pos: { ...pick.rest } };
    ctx.emit("ball", `Ball from ${fmt(origin)} comes to rest in ${fmt(pick.rest)} (exact chain probability ${(pick.p * 100).toFixed(2)}%).`, R.scatter, { to: pick.rest, chain: true });
  }
}
var BLAST_SUBSETS = [[0], [1], [2], [0, 1], [0, 2], [1, 2], [0, 1, 2]];
var scatterKey = (r) => "land" in r ? `land:${r.land.x},${r.land.y}` : `out:${r.last.x},${r.last.y},${r.off.x},${r.off.y}`;
function blastValue(s, barik, policy) {
  const memo = /* @__PURE__ */ new Map();
  const kind = barik.team === "A" ? "barikA" : "barikB";
  return (r) => {
    const k = scatterKey(r);
    const m = memo.get(k);
    if (m !== void 0) return m;
    const res = solveBallChain(s, "land" in r ? { t: "arrive", sq: r.land, kind } : { t: "throwIn", last: r.last, off: r.off }, policy);
    let v = 0;
    for (const o of res.outcomes) if (o.holder && findPlayer(s, o.holder)?.team === barik.team) v += o.p;
    memo.set(k, v);
    return v;
  };
}
function blastTables(target, value) {
  const R2 = [];
  const T = new Float64Array(512);
  for (let n = 0; n < 512; n++) {
    const r = scatterPath(target, [Math.floor(n / 64) + 1, Math.floor(n / 8) % 8 + 1, n % 8 + 1]);
    R2.push(r);
    T[n] = value(r);
  }
  const idx = (a, b, c) => a * 64 + b * 8 + c;
  const avg = (keepA, keepB, keepC) => {
    let sum2 = 0;
    let n = 0;
    for (let a = 0; a < 8; a++) {
      if (keepA !== null && a !== keepA) continue;
      for (let b = 0; b < 8; b++) {
        if (keepB !== null && b !== keepB) continue;
        for (let c = 0; c < 8; c++) {
          if (keepC !== null && c !== keepC) continue;
          sum2 += T[idx(a, b, c)];
          n++;
        }
      }
    }
    return sum2 / n;
  };
  const memo = /* @__PURE__ */ new Map();
  const ev = (a, b, c, sub) => {
    const k = `${sub.includes(0) ? "*" : a}${sub.includes(1) ? "*" : b}${sub.includes(2) ? "*" : c}`;
    let v = memo.get(k);
    if (v === void 0) {
      v = avg(sub.includes(0) ? null : a, sub.includes(1) ? null : b, sub.includes(2) ? null : c);
      memo.set(k, v);
    }
    return v;
  };
  const best = (a, b, c) => {
    let out = { choice: "none", sub: [], ev: T[idx(a, b, c)] };
    for (const sub of BLAST_SUBSETS) {
      const v = ev(a, b, c, sub);
      if (v > out.ev + 1e-12) out = { choice: sub.join(""), sub, ev: v };
    }
    return out;
  };
  return { R: R2, T, idx, best };
}
function blastItBest(s, barik, target, faces, policy) {
  const t = blastTables(target, blastValue(s, barik, policy));
  const [a, b, c] = faces.map((f) => f - 1);
  const b0 = t.best(a, b, c);
  return { choice: b0.choice, ev: b0.ev, keep: t.T[t.idx(a, b, c)] };
}
var blastCache = /* @__PURE__ */ new Map();
function blastItOutcomes(s, barik, target, policy) {
  const tm = s.teams[s.turn.active];
  const ck = `${boardKey(s)}|${barik.id}|${target.x},${target.y}|${tm.rerolls},${tm.leaderReroll ? 1 : 0},${tm.mascotReroll ? 1 : 0},${s.turn.activation?.proUsed ? 1 : 0}|${policy.useSkillRerolls ? 1 : 0}${policy.usePro ? 1 : 0}${policy.useTeamRerolls ? 1 : 0}`;
  const cached = blastCache.get(ck);
  if (cached) return cached;
  const t = blastTables(target, blastValue(s, barik, policy));
  const W = new Float64Array(512);
  for (let a = 0; a < 8; a++)
    for (let b = 0; b < 8; b++)
      for (let c = 0; c < 8; c++) {
        const { sub } = t.best(a, b, c);
        const n = 8 ** sub.length;
        for (let x = 0; x < (sub.includes(0) ? 8 : 1); x++)
          for (let y = 0; y < (sub.includes(1) ? 8 : 1); y++)
            for (let z = 0; z < (sub.includes(2) ? 8 : 1); z++) W[t.idx(sub.includes(0) ? x : a, sub.includes(1) ? y : b, sub.includes(2) ? z : c)] += 1 / 512 / n;
      }
  const agg = /* @__PURE__ */ new Map();
  for (let n = 0; n < 512; n++) {
    if (W[n] <= 0) continue;
    const r = t.R[n];
    const k = scatterKey(r);
    const e = agg.get(k);
    if (e) e.p += W[n];
    else agg.set(k, { key: k, p: W[n], value: r });
  }
  const out = [...agg.values()].sort((a, b) => a.key < b.key ? -1 : 1);
  if (blastCache.size > 200) blastCache.clear();
  blastCache.set(ck, out);
  return out;
}

// src/engine/starActions.ts
var INFO = {
  kiroth: { ends: false },
  gretchen: { ends: false },
  zolcath: { ends: false },
  estelle: { ends: false },
  boa: { ends: false },
  hakflem: { ends: false },
  ivar: { ends: false },
  grombrindal: { ends: false },
  rodney: { ends: false },
  grak: { ends: false },
  jeremiahKool: { ends: false, actions: ["move"] },
  thorsson: { ends: true },
  zzharg: { ends: true },
  swiftvine: { ends: true },
  maple: { ends: true, actions: ["block"] },
  nobbla: { ends: true, actions: ["special"], special: "chainsaw" },
  bilerot: { ends: true, actions: ["special"], special: "projectileVomit" },
  cindy: { ends: false, actions: ["special"], special: "bombardier" }
};
function startRuleInfo(p) {
  const st = p.star ? STAR_BY_ID[p.star] : void 0;
  const i = st ? INFO[st.id] : void 0;
  return st && i ? { star: st.id, name: st.rule.name, summary: st.rule.summary, ...i } : null;
}
var within = (a, b, n) => !!a.pos && !!b.pos && dist(a.pos, b.pos) <= n;
var opps = (s, p) => pitchPlayers(s, other(p.team));
var mates = (s, p) => pitchPlayers(s, p.team).filter((q) => q.id !== p.id);
var freeSq = (s, c) => inBounds(c) && !playerAt(s, c);
function candidates(s, p) {
  switch (p.star) {
    case "kiroth":
    case "jeremiahKool":
      return hasTackleZone(p) ? opps(s, p).filter((q) => q.stance === "standing" && within(p, q, 1)) : [];
    case "zolcath":
      return opps(s, p).filter((q) => q.stance === "standing" && within(p, q, 3));
    case "estelle":
      return opps(s, p).filter((q) => within(p, q, 5));
    case "boa":
      return hasTackleZone(p) ? opps(s, p).filter((q) => hasBall(s, q) && within(p, q, 1)) : [];
    case "hakflem":
      return mates(s, p).filter((q) => hasBall(s, q) && within(p, q, 1));
    case "ivar":
      return mates(s, p).filter((q) => isOpen(s, q) && within(p, q, 5) && ivarSquares(s, q).length > 0);
    case "grombrindal":
      return mates(s, p).filter((q) => within(p, q, 2) && GROMBRINDAL_SKILLS.some((k) => !q.skills.some((x) => x.id === k)));
    case "thorsson":
    case "zzharg":
      return opps(s, p).filter((q) => q.stance === "standing" && within(p, q, 3));
    case "swiftvine":
      return p.stance === "standing" && !s.turn.used.blitz ? opps(s, p).filter((q) => q.stance === "standing" && within(p, q, 3) && neighbours(q.pos).some((c) => freeSq(s, c) || !!p.pos && eq(c, p.pos))) : [];
    case "grak": {
      const c = s.players.find((q) => q.team === p.team && q.star === "crumbleberry" && q.location === "pitch" && q.pos);
      return c && within(p, c, 1) && !hasBall(s, c) ? [c] : [];
    }
    case "maple":
      return hasTackleZone(p) ? opps(s, p).filter((q) => q.stance === "standing" && !!q.pos && !!p.pos && dist(p.pos, q.pos) === 2) : [];
    case "nobbla":
      return p.stance === "standing" ? opps(s, p).filter((q) => q.stance !== "standing" && within(p, q, 1)) : [];
    case "bilerot":
      return p.stance === "standing" ? opps(s, p).filter((q) => q.stance === "standing" && within(p, q, 1)) : [];
    default:
      return [];
  }
}
var GROMBRINDAL_SKILLS = ["breakTackle", "dauntless", "mightyBlow", "sureFeet"];
function ivarSquares(s, q) {
  if (!q.pos) return [];
  return neighbours(q.pos).filter((c) => freeSq(s, c) && !(s.ball.kind === "ground" && eq(s.ball.pos, c)) && opps(s, q).some((o) => hasTackleZone(o) && !!o.pos && adjacent(o.pos, c)));
}
function startRuleReason(s, p, action, special) {
  const info = startRuleInfo(p);
  if (!info) return "This player has no Star Player rule to use at the start of the activation.";
  if (!starReady(s, p, info.star)) return `${info.name} has already been used (${STAR_BY_ID[info.star].rule.per === "half" ? "once per half" : STAR_BY_ID[info.star].rule.per === "drive" ? "once per Drive" : "once per game"}).`;
  if (s.turn.activation && s.turn.activation.playerId === p.id) return `${info.name} is used at the start of the activation.`;
  if (action && info.actions && !info.actions.includes(action)) return `${info.name} is used with a ${info.actions.join(" / ")} Action.`;
  if (info.special && special && info.special !== special) return `${info.name} is used with the ${info.special} Special Action.`;
  if (p.star === "rodney") {
    if (p.stance !== "standing") return "Catch of the Day: Rodney must be Standing at the start of his activation.";
    if (!(s.ball.kind === "ground" && p.pos && dist(p.pos, s.ball.pos) <= 3)) return "Catch of the Day: the ball must be on the ground within 3 squares.";
    return null;
  }
  if (p.star === "cindy" || p.star === "gretchen") return null;
  if (!candidates(s, p).length) {
    const why = {
      kiroth: "no opposition player is Marked by Kiroth",
      jeremiahKool: "no opposition player is Marked by Jeremiah",
      zolcath: "no Standing opposition player within 3 squares",
      estelle: "no opposition player within 5 squares",
      boa: "Boa is not Marking the ball carrier",
      hakflem: "no team-mate next to Hakflem holds the ball",
      ivar: "no Open team-mate within 5 squares can step next to an opponent",
      grombrindal: "no team-mate within 2 squares",
      thorsson: "no Standing opposition player within 3 squares",
      zzharg: "no Standing opposition player within 3 squares",
      swiftvine: s.turn.used.blitz ? "the Blitz of this Turn has been used (Furious Outburst counts as the Blitz)" : "no Standing opposition player within 3 squares",
      grak: "Grak is not next to Crumbleberry (who must not hold the ball)",
      maple: "no Standing opposition player exactly 2 squares away",
      nobbla: "no Prone or Stunned opposition player next to Nobbla",
      bilerot: "no Standing opposition player next to Bilerot"
    };
    return `${info.name}: ${why[p.star] ?? "not possible now"}.`;
  }
  return null;
}
function pickAsk(ctx, p, prompt, list, opt, extra = []) {
  const st = STAR_BY_ID[p.star];
  const id = ctx.ask({ type: "starRule", team: p.team, prompt: `${st.name} \u2014 ${st.rule.name}: ${prompt}`, options: [...list.map(opt), ...extra], rule: starRuleRef(st), context: { star: st.id, pick: true } });
  return list.find((x) => x.id === id) ?? null;
}
var playerOpt = (q) => ({ id: q.id, label: `${label(q)} (${fmt(q.pos)})`, square: q.pos ?? void 0 });
var sqId = (c) => `${c.x},${c.y}`;
function pickSquare(ctx, p, prompt, squares, extra = []) {
  const list = squares.map((c) => ({ id: sqId(c), c }));
  const got = pickAsk(ctx, p, prompt, list, (x) => ({ id: x.id, label: fmt(x.c), square: x.c }), extra);
  return got ? got.c : null;
}
function useStartRule(ctx, p, act, preset = {}) {
  const s = ctx.s;
  const st = STAR_BY_ID[p.star];
  const rl = starRuleRef(st);
  const pick = (c, who, prompt, list, opt, extra = []) => {
    const pre = preset.target ? list.find((x) => x.id === preset.target) : void 0;
    return pre ?? pickAsk(c, who, prompt, list, opt, extra);
  };
  const d6 = (key3, hope) => {
    const r = ctx.roll({ dice: [6], interpret: ([n]) => n, cacheKey: key3, by: p.team, prefer: (n) => hope(n) });
    return r.value;
  };
  switch (p.star) {
    case "kiroth":
    case "zolcath": {
      const q = pick(ctx, p, "choose the opposition player who becomes Distracted.", candidates(s, p), playerOpt);
      if (!q) return;
      q.distracted = true;
      spendStar(ctx, p, `${label(q)} becomes Distracted until they are next activated.`);
      return;
    }
    case "estelle": {
      const q = pick(ctx, p, "choose an opposition player within 5 squares (D6 2+: Distracted and cannot be activated in their next Turn).", candidates(s, p), playerOpt);
      if (!q) return;
      const n = d6("hex2", (x) => x >= 2);
      if (n >= 2) {
        q.distracted = q.stance === "standing";
        q.hexed = { half: s.turn.half, turn: s.teams[q.team].turn + 1 };
      }
      spendStar(ctx, p, `D6 ${n} \u2014 ${n >= 2 ? `${label(q)} becomes Distracted and cannot be activated during their team's next Turn` : "nothing happens"}.`);
      return;
    }
    case "boa": {
      const q = candidates(s, p)[0];
      const n = d6("boa2", (x) => x >= 2);
      if (n < 2) {
        spendStar(ctx, p, `D6 ${n} \u2014 nothing happens.`);
        return;
      }
      s.ball = { kind: "held", playerId: p.id };
      spendStar(ctx, p, `D6 ${n} \u2014 ${label(q)} loses the ball and ${label(p)} takes it; his activation ends.`);
      ctx.emit("ball", `${label(p)} has the ball.`, rl, { holder: p.id });
      act.over = true;
      checkTouchdown(ctx, false);
      throw new ActionStop("look into my eyes");
    }
    case "hakflem": {
      const q = pick(ctx, p, "take the ball from this team-mate (who is Knocked Down, no Turnover)?", candidates(s, p), playerOpt);
      if (!q) return;
      s.ball = { kind: "held", playerId: p.id };
      spendStar(ctx, p, `${label(p)} takes the ball from ${label(q)}, who is Knocked Down (no Turnover).`);
      goDown(ctx, q, { kind: "knockedDown", reason: "Treacherous", noTurnover: true });
      return;
    }
    case "ivar": {
      const q = pick(ctx, p, "choose an Open team-mate within 5 squares to move 1 square (ending Marking an opponent).", candidates(s, p), playerOpt);
      if (!q) return;
      const to = pickSquare(ctx, p, `where does ${label(q)} move?`, ivarSquares(s, q));
      if (!to) return;
      const from = q.pos;
      q.pos = { ...to };
      spendStar(ctx, p, `${label(q)} moves ${fmt(from)} \u2192 ${fmt(to)}.`);
      ctx.emit("move", `${label(q)} moves ${fmt(from)} \u2192 ${fmt(to)} (Raiding Party).`, rl, { playerId: q.id, from, to });
      return;
    }
    case "grombrindal": {
      const q = pick(ctx, p, "choose a team-mate within 2 squares.", candidates(s, p), playerOpt);
      if (!q) return;
      const skills = GROMBRINDAL_SKILLS.filter((k2) => !q.skills.some((x) => x.id === k2)).map((id) => ({ id }));
      const names = { breakTackle: "Break Tackle", dauntless: "Dauntless", mightyBlow: "Mighty Blow", sureFeet: "Sure Feet" };
      const k = pick(ctx, p, `which skill does ${label(q)} gain until the end of the Turn?`, skills, (x) => ({ id: x.id, label: names[x.id] }));
      if (!k) return;
      grantTempSkill(q, k.id, "turn");
      spendStar(ctx, p, `${label(q)} gains ${names[k.id]} until the end of the Turn.`);
      return;
    }
    case "rodney": {
      const n = d6("rodney3", (x) => x >= 3);
      if (n >= 3) {
        s.ball = { kind: "held", playerId: p.id };
        spendStar(ctx, p, `D6 ${n} \u2014 ${label(p)} hooks the ball and has it.`);
        checkTouchdown(ctx, true);
      } else spendStar(ctx, p, `D6 ${n} \u2014 nothing happens.`);
      return;
    }
    case "jeremiahKool": {
      const q = pick(ctx, p, "Stab this opposition player (then a Move Action)?", candidates(s, p), playerOpt);
      if (!q) return;
      spendStar(ctx, p, `${label(p)} stabs ${label(q)} before his Move Action.`);
      foulAppearance(ctx, p, q, act, "Stab");
      targetReactions(ctx, p, q, { trickster: true });
      if (q.location === "pitch" && q.stance === "standing" && q.pos && p.pos && adjacent(q.pos, p.pos)) specialArmour(ctx, q, 0, "Stab: cannot be modified", { page: 136, title: "Stab" }, void 0, p);
      else ctx.emit("note", `${label(q)} is no longer next to ${label(p)}: the Stab has no effect.`, rl);
      if (ctx.turnover) throw new ActionStop("turnover");
      return;
    }
    case "gretchen": {
      act.starFlags = [...act.starFlags ?? [], "incorporeal"];
      spendStar(ctx, p, `no Dodge rolls for leaving Marked squares until the end of her activation.`);
      return;
    }
    case "grak": {
      const c = candidates(s, p)[0];
      c.location = "reserves";
      c.carriedFrom = { ...c.pos };
      c.pos = null;
      c.carriedBy = p.id;
      grantTempSkill(p, "breakTackle", "activation");
      grantTempSkill(p, "dodge", "activation");
      spendStar(ctx, p, `${label(p)} picks up Crumbleberry, who is set down next to him at the end of the activation; meanwhile Grak has Break Tackle and Dodge (I'll Carry You).`);
      return;
    }
    case "thorsson": {
      const q = pick(ctx, p, "choose a Standing opposition player within 3 squares (D6 3+ Knocked Down, 2 nothing, 1 Thorsson Falls Over; his activation ends).", candidates(s, p), playerOpt);
      if (!q) return;
      const n = d6("thorsson", (x) => x >= 3);
      spendStar(ctx, p, `D6 ${n} \u2014 ${n >= 3 ? `${label(q)} is Knocked Down` : n === 2 ? "nothing happens" : `${label(p)} Falls Over`}; his activation ends.`);
      act.over = true;
      if (n >= 3) goDown(ctx, q, { kind: "knockedDown", reason: "Beer Barrel Bash" });
      else if (n === 1) goDown(ctx, p, { kind: "fellOver", reason: "Beer Barrel Bash" });
      checkTouchdown(ctx, false);
      throw new ActionStop("beer barrel bash");
    }
    case "zzharg": {
      const q = pick(ctx, p, "choose a Standing opposition player within 3 squares to blast (D6 3+ hit, 2 the opposing coach picks a player near them, 1 Zzharg is hit).", candidates(s, p), playerOpt);
      if (!q) return;
      const n = d6("zzharg", (x) => x >= 3);
      let hit = q;
      if (n === 2) {
        const near = s.players.filter((x) => x.location === "pitch" && x.pos && x.id !== p.id && q.pos && dist(x.pos, q.pos) <= 3);
        const id = ctx.ask({ type: "starRule", team: other(p.team), prompt: `"Blastin' Solves Everything" (Zzharg Madeye): D6 2 \u2014 choose the player within 3 squares of ${label(q)} who is hit instead.`, options: near.map(playerOpt), rule: rl, context: { star: "zzharg", pick: true } });
        hit = near.find((x) => x.id === id) ?? q;
      } else if (n === 1) hit = p;
      spendStar(ctx, p, `D6 ${n} \u2014 ${label(hit)} is hit: an Armour Roll; his activation ends.`);
      act.over = true;
      specialArmour(ctx, hit, 0, "Blastin' Solves Everything", rl);
      checkTouchdown(ctx, false);
      throw new ActionStop("blastin");
    }
    case "swiftvine": {
      const q = pick(ctx, p, "choose a Standing opposition player within 3 squares to leap next to and Stab (this is the Blitz of the Turn; the activation then ends).", candidates(s, p), playerOpt);
      if (!q) return;
      const land2 = pickSquare(ctx, p, `where next to ${label(q)} does she land?`, neighbours(q.pos).filter((c) => freeSq(s, c) || !!p.pos && eq(c, p.pos)));
      if (!land2) return;
      s.turn.used.blitz = true;
      const from = p.pos;
      p.pos = { ...land2 };
      spendStar(ctx, p, `${label(p)} springs ${fmt(from)} \u2192 ${fmt(land2)} and Stabs ${label(q)} (the Blitz of this Turn).`);
      ctx.emit("move", `${label(p)} is placed in ${fmt(land2)} (Furious Outburst).`, rl, { playerId: p.id, from, to: land2 });
      if (!hasBall(s, p)) ballDisplacedBy(ctx, p);
      foulAppearance(ctx, p, q, act, "Stab");
      targetReactions(ctx, p, q, { trickster: true });
      if (p.stance === "standing" && q.location === "pitch" && q.stance === "standing" && q.pos && p.pos && adjacent(q.pos, p.pos)) specialArmour(ctx, q, 0, "Stab: cannot be modified", { page: 136, title: "Stab" }, void 0, p);
      if (p.location === "pitch" && p.stance === "standing" && !ctx.turnover) {
        const here = p.pos;
        const around = [];
        for (let dx = -3; dx <= 3; dx++) for (let dy = -3; dy <= 3; dy++) {
          const c = { x: here.x + dx, y: here.y + dy };
          if ((dx || dy) && freeSq(s, c)) around.push(c);
        }
        const to = pickSquare(ctx, p, "she may now place herself in an unoccupied square within 3 squares.", around, [{ id: "stay", label: `Stay in ${fmt(here)}` }]);
        if (to) {
          p.pos = { ...to };
          ctx.emit("move", `${label(p)} is placed in ${fmt(to)} (Furious Outburst).`, rl, { playerId: p.id, from: here, to });
          if (!hasBall(s, p)) ballDisplacedBy(ctx, p);
        }
      }
      act.over = true;
      checkTouchdown(ctx, false);
      throw new ActionStop("furious outburst");
    }
    default:
      return;
  }
}
function setDownCarried(ctx, grak) {
  const s = ctx.s;
  const c = s.players.find((q) => q.carriedBy === grak.id);
  if (!c) return;
  c.carriedBy = void 0;
  const from = c.carriedFrom;
  c.carriedFrom = void 0;
  const rl = starRuleRef(STAR_BY_ID.grak);
  const at = grak.location === "pitch" && grak.pos ? grak.pos : from;
  const squares = at ? neighbours(at).filter((x) => inBounds(x) && !playerAt(s, x)) : [];
  if (!squares.length) {
    ctx.emit("status", `No free square next to Grak: Crumbleberry goes to the Reserves Box.`, rl, { playerId: c.id });
    return;
  }
  const to = pickSquare(ctx, grak, "where is Crumbleberry set down (next to Grak)?", squares) ?? squares[0];
  c.location = "pitch";
  c.pos = { ...to };
  c.stance = "standing";
  ctx.emit("move", `Crumbleberry is set down in ${fmt(to)} (I'll Carry You).`, rl, { playerId: c.id, to });
  ballDisplacedBy(ctx, c);
}
function bilerotAfterBlock(ctx, p, act, vomit) {
  const s = ctx.s;
  if (p.star !== "bilerot" || !starReady(s, p, "bilerot") || p.location !== "pitch" || p.stance !== "standing" || ctx.turnover) return;
  const list = candidates(s, p);
  if (!list.length) return;
  const q = pickAsk(ctx, p, "use Projectile Vomit now as well?", list, (x) => ({ ...playerOpt(x), label: `Vomit on ${label(x)}` }), [{ id: "no", label: "No" }]);
  if (!q) return;
  void act;
  vomit(q);
}
function chooseStarPlayer(ctx, p, prompt, list) {
  if (!list.length) throw new IllegalAction("No player to choose.");
  return pickAsk(ctx, p, prompt, list, playerOpt) ?? list[0];
}
function startRuleTargets(s, p) {
  return candidates(s, p);
}

// src/engine/turn.ts
var ACTIVATION_TRAITS = ["boneHead", "reallyStupid", "unchannelledFury", "animalSavagery", "bloodlust", "takeRoot"];
function canScoreWithoutDice(s, p) {
  if (!p.pos || p.stance !== "standing" || !hasBall(s, p)) return false;
  if (ACTIVATION_TRAITS.some((t) => hasSkill(p, t))) return false;
  if (inScoringEndZone(p.team, p.pos)) return true;
  const budget = p.ma;
  const seen = /* @__PURE__ */ new Map();
  const q = [{ c: p.pos, d: 0 }];
  seen.set(`${p.pos.x},${p.pos.y}`, 0);
  const marked = (c) => markersOf(s, c, p.team).length > 0;
  while (q.length) {
    const { c, d: d2 } = q.shift();
    if (d2 > 0 && inScoringEndZone(p.team, c)) return true;
    if (d2 >= budget) continue;
    if (marked(c)) continue;
    for (const n of neighbours(c)) {
      const k = `${n.x},${n.y}`;
      if (seen.has(k)) continue;
      const occ = playerAt(s, n);
      if (occ && occ.id !== p.id) continue;
      seen.set(k, d2 + 1);
      q.push({ c: n, d: d2 + 1 });
    }
  }
  return false;
}
function activationTraits(ctx, p, act) {
  const blockish = act.action === "block" || act.action === "blitz";
  if (hasSkill(p, "boneHead")) {
    const r = rollTest(ctx, { kind: "boneHead", player: p, label: `${label(p)} Bone Head`, target: 2, mods: [], rule: { page: 126, title: "Bone Head" }, teamReroll: true, proAllowed: true, onFail: "becomes Distracted; activation ends" });
    if (!r.success) {
      p.distracted = true;
      act.over = true;
      ctx.emit("status", `${label(p)} is Distracted (Bone Head); the activation ends.`, { page: 126, title: "Bone Head" });
      return false;
    }
  }
  if (hasSkill(p, "reallyStupid")) {
    const helper = pitchPlayers(ctx.s, p.team).some((q) => q.id !== p.id && hasTackleZone(q) && !hasSkill(q, "reallyStupid") && adjacent(q.pos, p.pos));
    const r = rollTest(ctx, {
      kind: "reallyStupid",
      player: p,
      label: `${label(p)} Really Stupid`,
      target: 4,
      mods: helper ? [{ label: "helpful team-mate adjacent", value: 2 }] : [],
      rule: { page: 135, title: "Really Stupid" },
      teamReroll: true,
      proAllowed: true,
      onFail: "becomes Distracted; activation ends"
    });
    if (!r.success) {
      p.distracted = true;
      act.over = true;
      ctx.emit("status", `${label(p)} is Distracted (Really Stupid); the activation ends.`, { page: 135, title: "Really Stupid" });
      return false;
    }
  }
  if (hasSkill(p, "unchannelledFury")) {
    const r = rollTest(ctx, {
      kind: "unchannelledFury",
      player: p,
      label: `${label(p)} Unchannelled Fury`,
      target: 4,
      mods: blockish ? [{ label: "Block/Blitz declared", value: 2 }] : [],
      rule: { page: 138, title: "Unchannelled Fury" },
      teamReroll: true,
      proAllowed: true,
      onFail: "the activation ends"
    });
    if (!r.success && r.natural === 1 && act.action === "block" && starReady(ctx.s, p, "scyla") && askStar(ctx, p, "Unchannelled Fury rolled a 1. Perform two Block Actions instead?", "Use Fury of the Blood God: two Blocks", true)) {
      act.starFlags = [...act.starFlags ?? [], "twoBlocks"];
      spendStar(ctx, p, `${label(p)} performs two Block Actions instead (the first one fully resolved first).`);
      return true;
    }
    if (!r.success) {
      act.over = true;
      ctx.emit("status", `${label(p)} rages incoherently (Unchannelled Fury); the activation ends.`, { page: 138, title: "Unchannelled Fury" });
      return false;
    }
  }
  if (hasSkill(p, "animalSavagery") && !animalSavagery(ctx, p, act)) return false;
  if (hasSkill(p, "bloodlust")) bloodlust(ctx, p, act);
  if (hasSkill(p, "takeRoot")) takeRoot(ctx, p);
  return true;
}
function startActivation(ctx, p, action, blitzTarget, special) {
  const s = ctx.s;
  const act = {
    playerId: p.id,
    action,
    blitzTarget,
    maUsed: 0,
    rushesUsed: 0,
    blocksDone: 0,
    ballActionDone: false,
    proUsed: false,
    stallingCandidate: false,
    over: false
  };
  if (action === "special" && special) act.special = special;
  p.activated = true;
  s.turn.betweenTurns = false;
  const wasDistracted = p.distracted;
  p.distracted = false;
  p.eyeGouged = false;
  act.stallingCandidate = canScoreWithoutDice(s, p);
  s.turn.activation = act;
  if (action === "blitz") s.turn.used.blitz = true;
  if (action === "pass") s.turn.used.pass = true;
  if (action === "handoff") s.turn.used.handoff = true;
  if (action === "secure") s.turn.used.secure = true;
  if (action === "ttm") s.turn.used.ttm = true;
  if (action === "foul") {
    s.turn.used.foul = true;
    s.turn.used.foulBy = [...s.turn.used.foulBy ?? [], p.id];
  }
  if (action === "special" && special === "bombardier") s.turn.used.bomb = true;
  if (action === "special" && special === "punt") s.turn.used.punt = true;
  if (action === "special" && special === "kickTeamMate") s.turn.used.ktm = true;
  const ph = s.match?.pendingPhase;
  if (ph && ph.type === "charge") {
    if (!ph.activated.includes(p.id)) ph.activated.push(p.id);
    if (action === "blitz") ph.blitz = true;
    if (action === "ttm") ph.ttm = true;
    if (action === "special" && special === "kickTeamMate") ph.ktm = true;
  }
  const names = { move: "Move", blitz: "Blitz", block: "Block", pass: "Pass", handoff: "Hand-off", secure: "Secure the Ball", foul: "Foul", ttm: "Throw Team-mate", special: "Special" };
  const tgt = blitzTarget ? findPlayer(s, blitzTarget) : void 0;
  const SPECIAL_NAME = { projectileVomit: "Projectile Vomit", punt: "Punt", stab: "Stab", chainsaw: "Chainsaw Attack", breatheFire: "Breathe Fire", hypnoticGaze: "Hypnotic Gaze", monstrousMouth: "Chomp", bombardier: "Throw Bomb", kickTeamMate: "Kick Team-mate", ballAndChain: "Ball & Chain" };
  const what = action === "special" && special && SPECIAL_NAME[special] ? `${SPECIAL_NAME[special]} Special Action` : `${names[action]} Action`;
  ctx.emit("declare", `${label(p)} declares a ${what}${tgt ? ` targeting ${label(tgt)}` : ""}${wasDistracted ? " (no longer Distracted)" : ""}.`, action === "blitz" ? R.blitz : R.actions, { playerId: p.id, action, blitzTarget, special });
  starOnDeclare(ctx, p, act);
  return act;
}
function endActivation(ctx) {
  const s = ctx.s;
  const act = s.turn.activation;
  if (!act) return;
  const p = findPlayer(s, act.playerId);
  if (p && act.bloodlust === "hungry" && !ctx.turnover && !ctx.touchdown) {
    bloodlustEnd(ctx, p, act);
    if (!ctx.turnover && hasBall(s, p)) checkTouchdown(ctx, false);
  }
  if (p) setDownCarried(ctx, p);
  s.turn.activation = null;
  dropTempSkills(s, "activation");
  if (!p) return;
  ctx.emit("activation", `${label(p)}'s activation ends.`, R.turn, { playerId: p.id });
  if (act.stallingCandidate && !ctx.touchdown && !ctx.turnover) {
    const gaveAway = (act.action === "pass" || act.action === "handoff") && !hasBall(s, p);
    if (!gaveAway) crowdTakesAction(ctx, p, "finished the activation without scoring");
  }
}
function crowdTakesAction(ctx, p, why) {
  const s = ctx.s;
  const turnNo = s.teams[p.team].turn;
  ctx.emit("note", `${label(p)} could have scored without rolling any dice but ${why}: Stalling!`, R.stalling);
  if (p.location !== "pitch" || p.stance !== "standing") {
    ctx.emit("note", `${label(p)} is no longer Standing, so the Crowd Takes Action roll has no effect.`, R.crowdTakesAction);
    return;
  }
  const r = ctx.roll({ dice: [6], interpret: ([n2]) => n2 >= turnNo ? "hit" : "miss", cacheKey: `crowd${turnNo}`, prefer: (v) => v === "miss" });
  const n = r.faces[0];
  ctx.emit("roll", `The Crowd Takes Action: rolled ${n} vs Turn ${turnNo} \u2014 ${r.value === "hit" ? "the player is hit" : "missed"}.`, R.crowdTakesAction, { natural: n, turn: turnNo });
  if (r.value === "hit") {
    goDown(ctx, p, { kind: "knockedDown", reason: "hit by the crowd for Stalling" });
  }
}
function endTurn(ctx, reason) {
  const s = ctx.s;
  if (ctx.turnEnded) return;
  const team2 = s.turn.active;
  if (reason === "voluntary") {
    if (s.turn.activation) endActivation(ctx);
    if (!ctx.turnover && !ctx.touchdown) {
      const h = ballHolder(s);
      if (h && h.team === team2 && !h.activated && canScoreWithoutDice(s, h)) {
        h.activated = true;
        ctx.emit("note", `${label(h)} holds the ball, could score without rolling dice and was not activated: ending the Turn counts as foregoing their activation.`, R.forgo);
        crowdTakesAction(ctx, h, "the Turn ended without them scoring");
      }
    }
    if (ctx.turnover) reason = "turnover";
  } else {
    const a0 = s.turn.activation;
    const ap = a0 ? findPlayer(s, a0.playerId) : void 0;
    if (ap) setDownCarried(ctx, ap);
    s.turn.activation = null;
    dropTempSkills(s, "activation");
  }
  ctx.turnEnded = true;
  if (ctx.touchdown) {
    finishDrive(ctx);
    return;
  }
  for (const id of s.turn.stunnedAtStart) {
    const p = findPlayer(s, id);
    if (p && p.location === "pitch" && p.stance === "stunned") {
      p.stance = "prone";
      ctx.emit("status", `${label(p)} rolls over from Stunned to Prone.`, R.prone, { playerId: p.id });
    }
  }
  const opp = other(team2);
  const helpers = pitchPlayers(s, opp).filter((q) => canUse(q, "pickMeUp"));
  if (helpers.length) {
    const prone = pitchPlayers(s, opp).filter((q) => q.stance === "prone" && helpers.some((h) => h.id !== q.id && dist(h.pos, q.pos) <= 3));
    for (const q of prone) {
      const r = ctx.roll({ dice: [6], interpret: ([n]) => n >= 5 ? "S" : "F", cacheKey: "pmu5", by: q.team, judge: (v) => v === "S" ? 1 : -1 });
      ctx.emit("roll", `Pick-me-up for ${label(q)}: rolled ${r.faces[0]}; needs 5+ \u2014 ${r.value === "S" ? "stands up" : "stays Prone"}.`, { page: 132, title: "Pick-me-up" });
      if (r.value === "S") q.stance = "standing";
    }
  }
  ctx.emit("turn", `${s.teams[team2].name} Turn ${s.teams[team2].turn} ends${reason === "turnover" ? " (Turnover)" : ""}.`, reason === "turnover" ? R.turnover : R.turn);
  if (reason === "turnover") askSportsEspionage(ctx, team2);
  startNextTurn(ctx);
  s.turn.betweenTurns = true;
  s.turn.wizardDeclined = [];
}
function startNextTurn(ctx) {
  const s = ctx.s;
  const next = other(s.turn.active);
  if (s.teams[next].turn >= rulesFor(s).turnsPerHalf) {
    s.phase = "halfOver";
    s.turn.activation = null;
    ctx.emit("turn", `End of the half: ${s.teams[next].name} has no Turns left.`, R.turn);
    return;
  }
  s.teams[next].turn += 1;
  s.turn.active = next;
  s.turn.used = { blitz: false, pass: false, handoff: false, foul: false, secure: false, ttm: false, bomb: false, punt: false, ktm: false };
  s.turn.activation = null;
  for (const p of s.players) {
    p.activated = false;
    p.usage = {};
  }
  dropTempSkills(s, "turn");
  s.turn.stunnedAtStart = s.players.filter((p) => p.team === next && p.location === "pitch" && p.stance === "stunned").map((p) => p.id);
  ctx.emit("turn", `${s.teams[next].name} Turn ${s.teams[next].turn} begins.`, R.turn, { team: next, turn: s.teams[next].turn });
}
function finishDrive(ctx) {
  const s = ctx.s;
  const td = ctx.touchdown;
  if (!td || s.phase === "touchdown") return;
  ctx.turnEnded = true;
  s.phase = "touchdown";
  s.turn.activation = null;
  s.turn.betweenTurns = true;
  s.turn.wizardDeclined = [];
  s.touchdown = { team: td.team, playerId: td.playerId, duringTeamTurn: s.turn.active };
  ctx.emit("turn", `The Drive ends with a Touchdown for ${s.teams[td.team].name}. Score ${s.teams.A.name} ${s.teams.A.score} \u2013 ${s.teams.B.score} ${s.teams.B.name}.`, R.touchdown);
}
function forgo(ctx, p) {
  const s = ctx.s;
  if (s.turn.activation) endActivation(ctx);
  if (ctx.turnover) throw new ActionStop("turnover");
  p.activated = true;
  s.turn.betweenTurns = false;
  ctx.emit("activation", `${label(p)} foregoes their activation.`, R.forgo, { playerId: p.id });
  if (canScoreWithoutDice(s, p)) crowdTakesAction(ctx, p, "foregoes their activation");
}

// src/engine/wizard.ts
var WIZARD_RULE = { page: 149, title: "Wizard: Sports-Wizard" };
var FIREBALL_RULE = { page: 149, title: "Wizard: Fireball" };
var ZAP_RULE = { page: 149, title: "Wizard: Zap!" };
var FROG = {
  ma: 5,
  st: 1,
  ag: 2,
  pa: null,
  av: 5,
  skills: ["dodge", "leap", "noBall", "stunty", "titchy", "veryLongLegs"],
  keywords: ["Frog", "Special"]
};
function wizardWindowOpen(s) {
  if (s.pending || !s.match || !s.turn.betweenTurns) return false;
  if (s.phase === "touchdown" || s.phase === "halfOver") return true;
  if (s.phase !== "play" || s.match.pendingPhase) return false;
  return !s.turn.activation && !s.players.some((p) => p.team === s.turn.active && p.activated);
}
function wizardReason(s, team2, input) {
  if (induceLeft(s, team2, "wizard") < 1) return s.match?.inducements?.[team2]?.wizard ? "The Sports-Wizard casts once per game (p.149)." : `${s.teams[team2].name} have no Sports-Wizard.`;
  if (!wizardWindowOpen(s)) return "A Sports-Wizard casts at the end of a Turn, before the next Turn begins (p.149): after a Turn ends and before the next Turn's first activation.";
  if (!input) return null;
  if (input.spell === "none") return s.turn.wizardDeclined?.includes(team2) ? "Already decided for this gap between Turns." : null;
  if (input.spell === "fireball") {
    if (!input.square || !inBounds(input.square)) return "Fireball: choose a square on the pitch (p.149).";
    return null;
  }
  if (input.spell === "zap") {
    const q = input.target ? findPlayer(s, input.target) : void 0;
    if (!q || q.location !== "pitch" || !q.pos) return "Zap!: choose a player on the pitch (p.149).";
    return null;
  }
  return "Choose Fireball or Zap!.";
}
function fireballTargets(s, sq) {
  return pitchPlayers(s).filter((p) => !!p.pos && dist(p.pos, sq) <= 1).sort((a, b) => a.team === b.team ? a.number - b.number : a.team < b.team ? -1 : 1);
}
function zapChance(p, w) {
  let q = 0;
  for (let n = 1; n <= 6; n++) if (n === 6 || n !== 1 && n >= p.st) q += w ? w[n - 1] : 1 / 6;
  return q;
}
function castWizard(ctx, input) {
  const s = ctx.s;
  const why = wizardReason(s, input.team, input);
  if (why) throw new IllegalAction(why);
  const team2 = input.team;
  if (input.spell === "none") {
    s.turn.wizardDeclined = [...s.turn.wizardDeclined ?? [], team2];
    ctx.emit("note", `${s.teams[team2].name} keep their Sports-Wizard for later.`, WIZARD_RULE, { team: team2 });
    return;
  }
  spendInduce(s, team2, "wizard");
  const dead = s.phase !== "play";
  if (input.spell === "fireball") {
    const sq = input.square;
    const targets = fireballTargets(s, sq);
    ctx.emit("declare", `${s.teams[team2].name} \u2014 Sports-Wizard casts a Fireball at ${fmt(sq)} (${targets.length ? targets.map((p) => label(p)).join(", ") : "nobody there"}).`, FIREBALL_RULE, { team: team2, square: sq, spell: "fireball" });
    const hits = [];
    for (const p of targets) {
      const r2 = ctx.roll({ dice: [6], interpret: ([n2]) => n2 >= 4 ? "hit" : "miss", cacheKey: "fireball4", by: team2, judge: (v) => v === "hit" === (p.team !== team2) ? 1 : -1, prefer: (v) => v === "hit" === (p.team !== s.turn.active) });
      ctx.emit("roll", `Fireball \u2014 ${label(p)}: D6 ${r2.faces[0]} \u2014 ${r2.value === "hit" ? "hit" : "avoids it"}.`, FIREBALL_RULE, { playerId: p.id, natural: r2.faces[0] });
      if (r2.value === "hit") hits.push(p);
    }
    for (const p of hits) {
      if (p.location !== "pitch" || !p.pos) continue;
      if (dead && hasBall(s, p)) {
        s.ball = { kind: "none" };
        ctx.emit("note", "The Drive is over: the ball stays out of play.", FIREBALL_RULE);
      }
      if (p.stance === "standing") goDown(ctx, p, { kind: "knockedDown", reason: "Fireball", betweenTurns: true, noTurnover: true, armourMod: 1 });
      else armourAndInjury(ctx, p, { kind: "knockedDown", reason: "Fireball", betweenTurns: true, noTurnover: true, armourMod: 1 });
    }
    return;
  }
  const q = findPlayer(s, input.target);
  const r = ctx.roll({ dice: [6], interpret: ([n2]) => n2 === 6 || n2 !== 1 && n2 >= q.st ? "frog" : "nothing", cacheKey: `zap|${q.st}`, by: team2, judge: (v) => v === "frog" === (q.team !== team2) ? 1 : -1, prefer: (v) => v === "frog" === (q.team !== s.turn.active) });
  const n = r.faces[0];
  ctx.emit("declare", `${s.teams[team2].name} \u2014 Sports-Wizard casts Zap! at ${label(q)}.`, ZAP_RULE, { team: team2, target: q.id, spell: "zap" });
  ctx.emit("roll", `Zap! \u2014 ${label(q)}: D6 ${n} vs ST ${q.st} \u2014 ${r.value === "frog" ? "turned into a Frog until the end of the Drive" : "nothing happens"}.`, ZAP_RULE, { playerId: q.id, natural: n });
  if (r.value !== "frog") return;
  const carried = hasBall(s, q);
  turnIntoFrog(q);
  ctx.emit("status", `${label(q)} is a Frog: MA 5, ST 1, AG 2+, PA -, AV 5+ \u2014 Dodge, Leap, No Ball, Stunty, Titchy, Very Long Legs.`, ZAP_RULE, { playerId: q.id, frog: true });
  if (carried && q.pos) {
    if (dead) {
      s.ball = { kind: "none" };
      return;
    }
    s.ball = { kind: "ground", pos: { ...q.pos } };
    ctx.emit("ball", `The ball Bounces from ${fmt(q.pos)} (the Frog cannot hold it).`, ZAP_RULE);
    bounce(ctx, q.pos);
  }
}
function turnIntoFrog(p) {
  if (p.frog) return;
  p.frog = { ma: p.ma, st: p.st, ag: p.ag, pa: p.pa, av: p.av, skills: p.skills.filter((k) => !k.until).map((k) => ({ ...k })), keywords: p.keywords.slice(), position: p.position };
  p.ma = FROG.ma;
  p.st = FROG.st;
  p.ag = FROG.ag;
  p.pa = FROG.pa;
  p.av = FROG.av;
  p.skills = FROG.skills.map((id) => ({ id }));
  p.keywords = FROG.keywords.slice();
  p.position = "Frog";
}
function restoreFrog(p) {
  const f = p.frog;
  if (!f) return false;
  p.ma = f.ma;
  p.st = f.st;
  p.ag = f.ag;
  p.pa = f.pa;
  p.av = f.av;
  p.skills = f.skills.map((k) => ({ ...k }));
  p.keywords = f.keywords.slice();
  p.position = f.position;
  p.frog = void 0;
  return true;
}

// src/engine/match.ts
var MATCH_RULES = {
  structure: { page: 44, title: "A Game of Two Halves" },
  fans: { page: 45, title: "The Fans" },
  weather: { page: 46, title: "The Weather" },
  kicking: { page: 46, title: "Determine Kicking Team" },
  setup: { page: 47, title: "Start of a Drive: Set-up" },
  kickoff: { page: 47, title: "The Kick-off" },
  events: { page: 48, title: "Kick-off Event Table" },
  touchback: { page: 49, title: "Touchbacks" },
  endOfDrive: { page: 82, title: "The End of a Drive" },
  restart: { page: 83, title: "Restarting / Ending the Game" },
  argue: { page: 69, title: "Argue the Call" },
  bribe: { page: 144, title: "Bribes" },
  apothecary: { page: 68, title: "Apothecaries" }
};
function inOwnHalf(team2, c) {
  return inTeamArea(team2, c.x);
}
function losColumn(team2) {
  return team2 === "A" ? pitch().losA : pitch().losB;
}
function onLineOfScrimmageCentre(team2, c) {
  return c.x === losColumn(team2) && !isWideZone(c);
}
function setupCandidates(s, team2) {
  return s.players.filter((p) => p.team === team2 && (p.location === "pitch" || p.location === "reserves") && !p.benched);
}
function validateDriveSetup(s, team2, opts = {}) {
  usePitch(s);
  const out = [];
  const R2 = rulesFor(s);
  const g = pitch();
  const pg = R2.source ? `Sevens p.${R2.refs.setup.page}` : "p.47";
  const cands = setupCandidates(s, team2);
  const on = s.players.filter((p) => p.team === team2 && p.location === "pitch");
  const extra = opts.swarming ?? s.match?.swarmed?.[team2] ?? 0;
  const need = Math.min(R2.playersPerDrive, cands.length - extra);
  const name = s.teams[team2].name;
  if (on.length !== need + extra) out.push({ level: "error", text: `${name}: set up ${need} players (${on.length} on the pitch). Teams set up ${R2.playersPerDrive} players, or all of them if fewer are available (${pg}).` });
  for (const p of on) {
    if (!p.pos || !inBounds(p.pos)) out.push({ level: "error", text: `#${p.number} is off the pitch.` });
    else if (!inOwnHalf(team2, p.pos)) out.push({ level: "error", text: R2.source ? `#${p.number} is outside your area: set up between your End Zone and your Line of Scrimmage \u2014 never in No Man's Land (${pg}).` : `#${p.number} is in the opponent's half: set up in your own half (p.47).` });
    if (p.benched) out.push({ level: "error", text: `#${p.number} cannot play this Drive (${p.benchedWhy ?? "Sweltering Heat"}).` });
  }
  const cap = cands.find((p) => p.captain);
  if (cap && cap.location !== "pitch" && s.teams[team2].specialRules?.includes("Team Captain")) out.push({ level: "error", text: `${name}: the Team Captain #${cap.number} ${cap.name} must be set up if able (p.155).` });
  const los = on.filter((p) => p.pos && onLineOfScrimmageCentre(team2, p.pos)).length;
  const rows = `rows ${g.wide + 1}-${g.h - g.wide}`;
  if (need <= 3) {
    if (los < on.length) out.push({ level: "error", text: `${name} can only field ${need} players: all must be on the Line of Scrimmage in the Centre Field (${R2.source ? `${pg}; a coach may instead Concede Without Penalty, which Bloodboard does not offer` : "p.47"}).` });
  } else if (los < 3) out.push({ level: "error", text: `${name}: at least 3 players must be on the Line of Scrimmage in the Centre Field (column ${String.fromCharCode(65 + losColumn(team2))}, ${rows}) \u2014 ${los} there now (${pg}).` });
  const top = on.filter((p) => p.pos && p.pos.y < g.wide).length;
  const bottom = on.filter((p) => p.pos && p.pos.y >= g.h - g.wide).length;
  const max = R2.maxPerWideZone;
  if (top > max) out.push({ level: "error", text: `${name}: ${top} players in the top Wide Zone (rows 1-${g.wide}); at most ${max} (${pg}).` });
  if (bottom > max) out.push({ level: "error", text: `${name}: ${bottom} players in the bottom Wide Zone (rows ${g.h - g.wide + 1}-${g.h}); at most ${max} (${pg}).` });
  return out;
}
var FORMATION_A = [
  { x: 12, y: 6 },
  { x: 12, y: 7 },
  { x: 12, y: 8 },
  { x: 10, y: 5 },
  { x: 10, y: 9 },
  { x: 9, y: 7 },
  { x: 8, y: 4 },
  { x: 8, y: 10 },
  { x: 7, y: 7 },
  { x: 5, y: 6 },
  { x: 5, y: 8 }
];
var SEVENS_FORMATION_A = [
  { x: 6, y: 4 },
  { x: 6, y: 5 },
  { x: 6, y: 6 },
  { x: 4, y: 3 },
  { x: 4, y: 7 },
  { x: 3, y: 5 },
  { x: 1, y: 5 }
];
function formationSlots(s, team2) {
  usePitch(s);
  const slots = rulesFor(s).variant === "sevens" ? SEVENS_FORMATION_A : FORMATION_A;
  const w = pitch().w;
  return slots.map((c) => team2 === "A" ? { ...c } : { x: w - 1 - c.x, y: c.y });
}
function defaultFormation(s, team2) {
  usePitch(s);
  const slots = rulesFor(s).variant === "sevens" ? SEVENS_FORMATION_A : FORMATION_A;
  const w = pitch().w;
  let cands = setupCandidates(s, team2).slice().sort((a, b) => a.number - b.number);
  const capRule = !!s.teams[team2].specialRules?.includes("Team Captain");
  if (cands.length > slots.length) {
    const keepers = cands.filter((p) => capRule && p.captain || !!p.star).slice(0, slots.length);
    if (keepers.length) {
      const others = cands.filter((p) => !keepers.includes(p));
      const fielded = /* @__PURE__ */ new Set([...keepers, ...others.slice(0, slots.length - keepers.length)]);
      cands = [...cands.filter((p) => fielded.has(p)), ...cands.filter((p) => !fielded.has(p))];
    }
  }
  const out = {};
  cands.forEach((p, i) => {
    const slot = i < slots.length ? slots[i] : null;
    out[p.id] = slot ? team2 === "A" ? { ...slot } : { x: w - 1 - slot.x, y: slot.y } : null;
  });
  return out;
}
function kickerCandidates(s, team2) {
  const on = pitchPlayers(s, team2);
  const good = on.filter((p) => p.pos && p.pos.x !== losColumn(team2) && !isWideZone(p.pos));
  return good.length ? good : on;
}
function validateFormalStart(s) {
  const out = validatePosition(s).filter((i) => i.level === "error" || !/no ball|normally at most 11/.test(i.text));
  if (s.ball.kind === "none") out.push({ level: "error", text: "There is no ball on the pitch. In a match the ball is always in play once it has been kicked off (p.47-49): place the ball (on a player or loose), or start this position as a practice scenario." });
  const most = rulesFor(s).playersPerDrive;
  for (const t of ["A", "B"]) {
    const n = pitchPlayers(s, t).length;
    if (n > most) out.push({ level: "error", text: `${s.teams[t].name} has ${n} players on the pitch: a team may field at most ${most} (p.47).` });
    if (n === 0) out.push({ level: "error", text: `${s.teams[t].name} has no players on the pitch.` });
  }
  return out;
}
var MIRROR_MARK = "*";
function mirrorTeamCopy(def) {
  const c = JSON.parse(JSON.stringify(def));
  c.id = `${def.id}*p2`;
  c.name = def.name.endsWith(MIRROR_MARK) ? def.name : `${def.name}${MIRROR_MARK}`;
  c.color = def.accent;
  c.accent = def.color;
  c.players = c.players.map((p) => ({ ...p, id: `${p.id}*p2` }));
  return c;
}
function createMatch(kind, a, b, options, seed) {
  const errors = [];
  const mirror = a.id === b.id;
  if (mirror) b = mirrorTeamCopy(b);
  else if (a.color === b.color && a.accent === b.accent) b = { ...b, color: a.accent, accent: a.color };
  for (const [t, label3] of [
    [a, "Home team"],
    [b, "Away team"]
  ]) {
    const errs = validateTeamDef(t).filter((i) => i.level === "error");
    errs.forEach((e) => errors.push(`${label3} (${t.name}): ${e.text}`));
    if (kind === "tournament" && t.kind !== "tournament") errors.push(`${label3} (${t.name}) is a League team; a Tournament / Exhibition match needs two teams built with the tournament template.`);
    if (t.variant === "sevens" && kind !== "tournament") errors.push(`${label3} (${t.name}) is a Sevens team: Sevens teams play Exhibition matches (Sevens League play is not implemented).`);
  }
  if ((a.variant ?? "standard") !== (b.variant ?? "standard")) errors.push("A Blood Bowl Sevens team can only play another Sevens team (and a standard team another standard team).");
  if (errors.length) return { ok: false, errors };
  const variant = a.variant === "sevens" ? "sevens" : "standard";
  usePitch(variant);
  const s = newGame({ a: { name: a.name, roster: a.rosterId }, b: { name: b.name, roster: b.rosterId }, seed });
  if (variant === "sevens") s.variant = "sevens";
  s.phase = "pregame";
  s.weather = "perfect";
  s.turn.half = 1;
  s.title = `${a.name} v ${b.name}`;
  for (const [id, def] of [
    ["A", a],
    ["B", b]
  ]) {
    const t = s.teams[id];
    t.name = def.name;
    t.rosterId = def.rosterId;
    t.color = def.color;
    t.accent = def.accent;
    t.rerolls = def.rerolls;
    const league = teamLeague(def);
    if (league) t.league = league;
    const rules = teamSpecialRules(def);
    if (rules.length) t.specialRules = rules;
    t.score = 0;
    t.turn = 0;
    if (def.apothecary) t.apothecary = "available";
    for (const pd of def.players) {
      if (pd.unavailable) continue;
      s.players.push({
        id: `${id}${pd.number}`,
        team: id,
        number: pd.number,
        name: pd.name,
        position: pd.position,
        keywords: pd.keywords.slice(),
        ma: pd.ma,
        st: pd.st,
        ag: pd.ag,
        pa: pd.pa,
        av: pd.av,
        skills: pd.skills.map((x) => ({ ...x })),
        location: "reserves",
        pos: null,
        stance: "standing",
        distracted: false,
        activated: false,
        usage: {},
        defId: pd.id,
        ...variant === "sevens" && pd.veteran ? { veteran: "ready" } : {},
        ...pd.captain && rules.includes("Team Captain") ? { captain: true } : {},
        ...pd.mercenary ? { mercenary: true } : {},
        ...pd.star ? { star: pd.star } : {},
        ...pd.journeyman ? { journeyman: true } : {}
      });
      const np = s.players[s.players.length - 1];
      if (np.captain && !np.skills.some((k) => k.id === "pro")) np.skills.push({ id: "pro" });
      if (np.mercenary) {
        if (!np.skills.some((k) => k.id === "loner")) np.skills.push({ id: "loner", value: 4 });
        if (pd.mercSkill && !np.skills.some((k) => k.id === pd.mercSkill)) np.skills.push({ id: pd.mercSkill });
      }
      if (pd.boughtSkill && isTournamentTeam(def) && !np.skills.some((k) => k.id === pd.boughtSkill)) np.skills.push({ id: pd.boughtSkill });
    }
    t.leaderReroll = false;
  }
  if (options.difficulty) {
    const lv = (n) => Math.max(0, Math.min(3, Math.round(Number(n) || 0)));
    const d2 = options.difficulty;
    options = { ...options };
    if (!options.computer) delete options.difficulty;
    else options.difficulty = { player: lv(d2.player), computer: lv(d2.computer) };
  }
  const ind = { A: { ...a.inducements ?? {} }, B: { ...b.inducements ?? {} } };
  for (const t of ["A", "B"]) for (const k of Object.keys(ind[t])) if (!ind[t][k]) delete ind[t][k];
  const has3 = (t, id) => ind[t][id] ?? 0;
  for (const t of ["A", "B"]) {
    s.teams[t].rerolls += has3(t, "extraTraining");
  }
  s.match = {
    kind,
    options,
    teamIds: { A: a.id, B: b.id },
    ...mirror ? { mirror: { team: "B", of: a.id } } : {},
    rosterRerolls: { A: a.rerolls + has3("A", "extraTraining"), B: b.rerolls + has3("B", "extraTraining") },
    dedicatedFans: { A: a.dedicatedFans, B: b.dedicatedFans },
    // Part-time Assistant Coaches and Temp Agency Cheerleaders (p.144): for the duration of the game.
    assistantCoaches: { A: a.assistantCoaches + has3("A", "partTimeCoach"), B: b.assistantCoaches + has3("B", "partTimeCoach") },
    cheerleaders: { A: a.cheerleaders + has3("A", "tempCheerleader"), B: b.cheerleaders + has3("B", "tempCheerleader") },
    half: 1,
    drive: 0,
    setupDone: { A: false, B: false },
    // Bribes bought as Inducements (p.144).
    bribes: { A: has3("A", "bribe"), B: has3("B", "bribe") },
    ...Object.keys(ind.A).length || Object.keys(ind.B).length ? { inducements: ind } : {},
    coachEjected: { A: false, B: false },
    driveMods: []
  };
  const matched = {};
  for (const [t, def] of [["A", a], ["B", b]]) {
    if (!isTournamentTeam(def) || !def.tier) continue;
    const u = teamSkillPoints(def);
    matched[t] = { tier: def.tier, allowance: u.allowance, spent: u.spent, skills: def.players.filter((p) => p.boughtSkill).map((p) => `#${p.number} ${p.boughtSkill}`), format: def.variant === "sevens" ? "sevens" : "standard" };
  }
  if (Object.keys(matched).length) s.match.matched = matched;
  const pre = {};
  for (const [t, def] of [["A", a], ["B", b]]) if (def.preMatch) pre[t] = { ...def.preMatch };
  if (Object.keys(pre).length) s.match.preMatch = pre;
  if (a.allStar || b.allStar) s.match.allStar = { A: a.allStar ? { ...a.allStar } : null, B: b.allStar ? { ...b.allStar } : null };
  return { ok: true, errors: [], state: s };
}
function describeMatchInput(s, input) {
  switch (input.kind) {
    case "pregame":
      return "Pre-game sequence";
    case "setupTeam":
      return `${s.teams[input.team].name}: set-up for Drive ${s.match?.drive ?? ""}`.trim();
    case "kickoff": {
      const k = findPlayer(s, input.kicker);
      return `${k ? label(k) : input.kicker} kicks off towards ${fmt(input.target)}`;
    }
    case "solidDefence":
      return "Solid Defence set-up";
    case "quickSnap":
      return s.match?.pendingPhase?.type === "quickSnap" && s.match.pendingPhase.alert ? "Alert Defence moves" : "Quick Snap moves";
    case "endCharge":
      return "End the Charge!";
    case "swarming":
      return `Swarming: ${Object.keys(input.positions).length} more Linemen set up`;
    case "dwarfenWisdom":
      return `Dwarfen Wisdom: ${Object.keys(input.positions).length} players set up again`;
    case "weatherMage":
      return `${s.teams[input.team].name}: Weather Mage (${input.modifier >= 0 ? "+" : ""}${input.modifier})`;
    case "throwARock":
      return `${s.teams[input.team].name}: Throw a Rock`;
    case "nextDrive":
      return "End of Drive";
    case "mvp":
      return `${s.teams[input.team].name}: Most Valuable Player`;
    case "coachChange": {
      const t = s.teams[input.team]?.name ?? input.team;
      const c = input.coach;
      if (!c) return `${t}: the human coach takes control`;
      const who = `${c.name ?? c.ai}${c.version ? ` ${c.version}` : ""}`;
      if (c.takeover) return `${t}: ${who} takes over (${TAKEOVER_TEXT[c.takeover.mode]})`;
      return `${t}: coached by ${who}`;
    }
  }
}
var TAKEOVER_TEXT = { activation: "one player activation", turn: "the rest of this Turn", untilBack: "until the human coach takes control back" };
function coachOf(s, team2) {
  const o = s.match?.options;
  if (!o) return null;
  if (o.coaches) return o.coaches[team2] ?? null;
  if (o.computer?.team === team2) return { ai: `bloodboard-${o.computer.style ?? "balanced"}`, ...o.computer.style ? { style: o.computer.style } : {} };
  return null;
}
function coachText(c) {
  if (!c) return "the human coach";
  return `the computer (${c.name ?? c.ai}${c.version ? ` ${c.version}` : ""})`;
}
function coachChange(ctx, team2, coach) {
  const s = ctx.s;
  const o = s.match.options;
  const before = coachOf(s, team2);
  const coaches = { ...o.coaches ?? (o.computer ? { [o.computer.team]: coachOf(s, o.computer.team) } : {}) };
  const id = (s.log[s.log.length - 1]?.id ?? 0) + 1;
  if (coach) {
    const c = { ai: coach.ai };
    if (coach.name) c.name = String(coach.name).slice(0, 100);
    if (coach.version) c.version = String(coach.version).slice(0, 30);
    if (coach.takeover) c.takeover = { mode: coach.takeover.mode, half: s.match.half === 2 ? 2 : 1, turn: s.teams[team2].turn, since: id };
    coaches[team2] = c;
  } else delete coaches[team2];
  s.match.options = { ...o, coaches };
  const t = s.teams[team2].name;
  const now = coaches[team2] ?? null;
  const text = now?.takeover ? `${t}: temporary coaching takeover \u2014 ${coachText(now)} coaches the team for ${TAKEOVER_TEXT[now.takeover.mode]}.` : before?.takeover && !now ? `${t}: the takeover ends \u2014 the human coach has control again.` : `${t}: coach changed from ${coachText(before)} to ${coachText(now)}. The board, score, Turns, players, re-rolls and rules are unchanged.`;
  ctx.emit("note", text, void 0, { coachChange: true, team: team2, from: before?.ai ?? "human", to: now?.ai ?? "human", takeover: now?.takeover?.mode ?? null });
}
function isMatchInput(input) {
  return ["pregame", "setupTeam", "kickoff", "solidDefence", "quickSnap", "endCharge", "nextDrive", "mvp", "swarming", "dwarfenWisdom", "weatherMage", "throwARock", "coachChange"].includes(input.kind);
}
function matchInputReason(s, input) {
  usePitch(s);
  const m = s.match;
  if (!m) return "This is not a match: match inputs need a game created from two saved teams.";
  if (s.pending) return "Finish the pending decision first.";
  switch (input.kind) {
    case "coachChange": {
      if (input.team !== "A" && input.team !== "B") return "Unknown team.";
      const c = input.coach;
      if (c === null) return null;
      if (!c || typeof c.ai !== "string" || !c.ai.trim() || c.ai.length > 80) return "Name the AI file (its id) of the new coach.";
      if (c.takeover) {
        if (!["activation", "turn", "untilBack"].includes(c.takeover.mode)) return "Unknown kind of takeover.";
        if (coachOf(s, input.team)) return "A takeover is for a team the human coaches.";
        if (c.takeover.mode !== "untilBack") {
          if (s.phase !== "play" || m.pendingPhase) return "A takeover for one activation or the rest of the Turn starts during the team\u2019s own Turn.";
          if (s.turn.active !== input.team) return "It is not this team\u2019s Turn.";
        }
      }
      return null;
    }
    case "pregame":
      return s.phase === "pregame" ? null : "The pre-game sequence has already been played.";
    case "setupTeam": {
      if (s.phase !== "driveSetup") return "Teams can only set up at the start of a Drive.";
      const kicking = m.kicking;
      if (input.team !== kicking && !m.setupDone[kicking]) return "The kicking team sets up first (p.47).";
      if (m.setupDone[input.team]) return "This team has already set up for this Drive.";
      const trial = cloneState(s);
      const err = applyPositions(trial, input.team, input.positions);
      if (err) return err;
      const issues = validateDriveSetup(trial, input.team).filter((i) => i.level === "error");
      return issues.length ? issues.map((i) => i.text).join(" ") : null;
    }
    case "swarming": {
      const ph = m.pendingPhase;
      if (s.phase !== "kickoff" || ph?.type !== "swarming") return "Swarming is not being resolved.";
      const ids = Object.keys(input.positions);
      if (ids.length > ph.max) return `Swarming: at most ${ph.max} more Linemen may be set up (D3 rolled, p.155).`;
      for (const id of ids) {
        const p = findPlayer(s, id);
        if (!p || p.team !== ph.team) return `Only ${s.teams[ph.team].name} players can be set up now.`;
        if (p.location !== "reserves" || p.benched) return `#${p.number} is not in the Reserves Box and available.`;
        if (!p.keywords.includes("Lineman")) return `#${p.number} ${p.position} is not a Lineman: Swarming sets up only Lineman players (p.155).`;
      }
      const trial = cloneState(s);
      const current2 = {};
      for (const p of pitchPlayers(trial, ph.team)) current2[p.id] = p.pos;
      const err = applyPositions(trial, ph.team, { ...current2, ...input.positions });
      if (err) return err;
      const issues = validateDriveSetup(trial, ph.team, { swarming: (m.swarmed?.[ph.team] ?? 0) + ids.length }).filter((i) => i.level === "error");
      return issues.length ? issues.map((i) => i.text).join(" ") : null;
    }
    case "dwarfenWisdom": {
      const ph = m.pendingPhase;
      if (s.phase !== "kickoff" || ph?.type !== "dwarfenWisdom") return "Dwarfen Wisdom is not being used.";
      const moved = Object.keys(input.positions).filter((id) => !eq(findPlayer(s, id)?.pos, input.positions[id]));
      if (moved.length > ph.max) return `Dwarfen Wisdom: at most ${ph.max} players may be set up again (D3 rolled, p.147).`;
      for (const id of moved) {
        const p = findPlayer(s, id);
        if (!p || p.team !== ph.team || p.location !== "pitch") return `Only ${s.teams[ph.team].name} players on the pitch can be set up again.`;
      }
      const trial = cloneState(s);
      const current2 = {};
      for (const p of pitchPlayers(trial, ph.team)) current2[p.id] = p.pos;
      const err = applyPositions(trial, ph.team, { ...current2, ...input.positions });
      if (err) return err;
      const issues = validateDriveSetup(trial, ph.team).filter((i) => i.level === "error");
      return issues.length ? issues.map((i) => i.text).join(" ") : null;
    }
    case "weatherMage": {
      if (s.phase !== "play" || m.pendingPhase) return "The Weather Mage is used at the start of one of your Turns (p.144).";
      if (s.turn.active !== input.team) return "It is not this team's Turn.";
      if (induceLeft(s, input.team, "weatherMage") < 1) return `${s.teams[input.team].name} have no Weather Mage to use (once per game, p.144).`;
      if (s.turn.activation || s.players.some((p) => p.team === input.team && p.activated)) return "The Weather Mage is used at the start of a Turn, before any player is activated (p.144).";
      if (!Number.isInteger(input.modifier) || input.modifier < -2 || input.modifier > 2) return "The Weather Mage applies a modifier from \u22122 to +2 (p.144).";
      return null;
    }
    case "throwARock":
      return throwARockReason(s, input.team);
    case "kickoff": {
      if (s.phase === "kickoff" && m.pendingPhase?.type === "swarming") return "Swarming first: the extra Linemen are set up before the kick (p.155).";
      if (s.phase === "kickoff" && m.pendingPhase?.type === "dwarfenWisdom") return "Dwarfen Wisdom first: the players are set up again before the kick (p.147).";
      if (s.phase !== "kickoff" || m.kick) return "The ball can only be kicked once both teams have set up.";
      const kicking = m.kicking;
      const kicker = findPlayer(s, input.kicker);
      if (!kicker || !kickerCandidates(s, kicking).some((p) => p.id === kicker.id)) return "Nominate a kicking player who is on the pitch, not on the Line of Scrimmage and not in a Wide Zone (unless there is no other option, p.47).";
      if (!inBounds(input.target) || !inOwnHalf(other(kicking), input.target)) return rulesFor(s).source ? "The kick must target a square in the receiving team's area, between its End Zone and its Line of Scrimmage (p.47; see docs/SEVENS_RULES.md, interpretation 1)." : "The kick must target a square in the opponent's half (p.47).";
      if (input.useKick && !hasSkill(kicker, "kick")) return "Only a kicker with the Kick skill can Deviate D3 squares (p.130).";
      return null;
    }
    case "solidDefence": {
      const ph = m.pendingPhase;
      if (s.phase !== "kickoff" || ph?.type !== "solidDefence") return "Solid Defence is not being resolved.";
      const moved = Object.keys(input.positions).filter((id) => {
        const p = findPlayer(s, id);
        const to = input.positions[id];
        return !p || !eq(p.pos, to);
      });
      if (moved.length > ph.max) return `Solid Defence: at most ${ph.max} players may be set up again.`;
      for (const id of moved) {
        const p = findPlayer(s, id);
        if (!p || p.team !== ph.team || p.location !== "pitch") return "Only players of the kicking team on the pitch can be set up again.";
        if (!isOpen(s, p)) return `#${p.number} is not Open (an opposition player is Marking them), so they cannot be selected (p.48).`;
        if (input.positions[id] === null) return "Players selected for Solid Defence must be set up again on the pitch.";
      }
      const trial = cloneState(s);
      const current2 = {};
      for (const p of pitchPlayers(trial, ph.team)) current2[p.id] = p.pos;
      const err = applyPositions(trial, ph.team, { ...current2, ...input.positions });
      if (err) return err;
      const issues = validateDriveSetup(trial, ph.team).filter((i) => i.level === "error");
      return issues.length ? issues.map((i) => i.text).join(" ") : null;
    }
    case "quickSnap": {
      const ph = m.pendingPhase;
      if (s.phase !== "kickoff" || ph?.type !== "quickSnap") return "Quick Snap is not being resolved.";
      const what = ph.alert ? "Alert Defence" : "Quick Snap";
      const ids = Object.keys(input.moves);
      if (ids.length > ph.max) return `${what}: at most ${ph.max} players may move.`;
      const trial = cloneState(s);
      for (const id of ids) {
        const p = findPlayer(trial, id);
        const to = input.moves[id];
        if (!p || p.team !== ph.team || p.location !== "pitch" || !p.pos) return `Only ${ph.alert ? "kicking" : "receiving"} players on the pitch can move.`;
        if (!isOpen(s, findPlayer(s, id))) return `#${p.number} is not Open, so they cannot be selected (p.48).`;
        if (!inBounds(to) || !adjacent(p.pos, to)) return `#${p.number} may only move one square.`;
        if (playerAt(trial, to)) return `${fmt(to)} is occupied.`;
        p.pos = { ...to };
      }
      return null;
    }
    case "endCharge":
      return m.pendingPhase?.type === "charge" ? null : "No Charge! is in progress.";
    case "nextDrive":
      return s.phase === "touchdown" || s.phase === "halfOver" ? null : "The Drive has not ended yet.";
    case "mvp": {
      if (m.kind !== "league") return "Only League matches award Star Player Points, so there is no MVP roll (p.96).";
      if (s.phase !== "fullTime") return "The Most Valuable Player is chosen after the final whistle (p.96).";
      if (input.team !== "A" && input.team !== "B") return "Unknown team.";
      if (m.mvp?.[input.team]) return `${s.teams[input.team].name} have already rolled for their MVP.`;
      const ids = input.nominees ?? [];
      if (!ids.length || ids.length > 6) return "Nominate one to six players (p.96).";
      if (new Set(ids).size !== ids.length) return "Each player can be nominated once.";
      const played = mvpEligible(s, input.team).map((p) => p.id);
      const bad = ids.find((id) => !played.includes(id));
      if (bad) return `${findPlayer(s, bad) ? label(findPlayer(s, bad)) : bad} cannot be nominated: only players of this team who played in the match can be the MVP (p.96).`;
      return null;
    }
  }
  return "Unknown input.";
}
function applyPositions(s, team2, positions) {
  const taken = /* @__PURE__ */ new Set();
  for (const p of s.players) if (p.team !== team2 && p.location === "pitch" && p.pos) taken.add(`${p.pos.x},${p.pos.y}`);
  for (const id of Object.keys(positions)) {
    const p = findPlayer(s, id);
    if (!p || p.team !== team2) return `Unknown player ${id} for ${s.teams[team2].name}.`;
    if (positions[id] && !(p.location === "pitch" || p.location === "reserves")) return `#${p.number} is not available (${p.location}).`;
    if (positions[id] && p.benched) return `#${p.number} cannot be set up this Drive (${p.benchedWhy ?? "Sweltering Heat"}).`;
  }
  for (const p of s.players) {
    if (p.team !== team2 || !(p.location === "pitch" || p.location === "reserves")) continue;
    const to = positions[p.id];
    if (!to) {
      p.location = "reserves";
      p.pos = null;
      continue;
    }
    if (!inBounds(to)) return `${fmt(to)} is off the pitch.`;
    const k = `${to.x},${to.y}`;
    if (taken.has(k)) return `Two players cannot share ${fmt(to)}.`;
    taken.add(k);
    p.location = "pitch";
    p.pos = { ...to };
    p.stance = "standing";
    p.distracted = false;
  }
  return null;
}
function resolveMatchInput(ctx, input) {
  const s = ctx.s;
  const why = matchInputReason(s, input);
  if (why) throw new IllegalAction(why);
  switch (input.kind) {
    case "pregame":
      return pregame(ctx);
    case "setupTeam":
      return setupTeam(ctx, input.team, input.positions);
    case "kickoff":
      return kickoff(ctx, input.kicker, input.target, !!input.useKick);
    case "solidDefence":
      return solidDefence(ctx, input.positions);
    case "quickSnap":
      return quickSnap(ctx, input.moves);
    case "endCharge":
      return endCharge(ctx, "the kicking coach ends the Charge");
    case "swarming":
      return swarming(ctx, input.positions);
    case "dwarfenWisdom":
      return dwarfenWisdom(ctx, input.positions);
    case "weatherMage":
      return weatherMage(ctx, input.team, input.modifier);
    case "throwARock":
      return throwARock(ctx, input.team);
    case "nextDrive":
      return nextDrive(ctx);
    case "mvp":
      return rollMvp(ctx, input.team, input.nominees);
    case "coachChange":
      return coachChange(ctx, input.team, input.coach);
  }
}
function rollMvp(ctx, team2, nominees) {
  const s = ctx.s;
  const m = s.match;
  const rule2 = { page: 96, title: "Most Valuable Player" };
  ctx.emit("declare", `${s.teams[team2].name} nominate for MVP: ${nominees.map((id, i) => `${i + 1} ${label(getPlayer(s, id))}`).join(", ")}.`, rule2, { team: team2, nominees });
  for (let guard = 0; guard < 100; guard++) {
    const n = d(ctx, 6);
    if (n <= nominees.length) {
      const p = getPlayer(s, nominees[n - 1]);
      m.mvp = { ...m.mvp ?? {}, [team2]: p.id };
      ctx.emit("roll", `MVP roll: ${n} \u2014 ${label(p)} is ${s.teams[team2].name}'s Most Valuable Player.`, rule2, { team: team2, playerId: p.id, roll: n });
      awardSpp(ctx, p, "mvp");
      return;
    }
    ctx.emit("roll", `MVP roll: ${n} \u2014 no player has that number; roll again.`, rule2, { team: team2, roll: n });
  }
}
var WEATHER_NAME = { swelteringHeat: "Sweltering Heat", verySunny: "Very Sunny", perfect: "Perfect Conditions", pouringRain: "Pouring Rain", blizzard: "Blizzard" };
function weatherFor(total) {
  if (total <= 2) return "swelteringHeat";
  if (total === 3) return "verySunny";
  if (total <= 10) return "perfect";
  if (total === 11) return "pouringRain";
  return "blizzard";
}
function d(ctx, sides, by) {
  return ctx.roll({ dice: [sides], interpret: ([n]) => n, cacheKey: `die${sides}`, by: sides === 6 ? by : void 0, ...sides === 6 && by ? { judge: (n) => (n - 3.5) / 2.5 } : {} }).value;
}
function rollWeather(ctx, why) {
  const r = ctx.roll({ dice: [6, 6], interpret: ([a, b]) => a + b, cacheKey: "weather2d6" });
  const w = weatherFor(r.value);
  ctx.s.weather = w;
  ctx.emit("roll", `${why}: 2D6 ${r.faces[0]}+${r.faces[1]}=${r.value} \u2014 ${WEATHER_NAME[w]}.`, MATCH_RULES.weather, { weather: w });
  return w;
}
function pregame(ctx) {
  const s = ctx.s;
  const m = s.match;
  const dif = m.options.computer && m.options.difficulty;
  if (dif && (dif.player || dif.computer)) {
    const names = ["Off", "Slight", "Moderate", "Strong"];
    ctx.emit("note", `House rule (not Blood Bowl rules): difficulty \u2014 human side ${names[dif.player] ?? dif.player}, computer side (${s.teams[m.options.computer.team].name}) ${names[dif.computer] ?? dif.computer}. Every consequential roll is weighed by who its result helps; neutral rolls are unchanged; the previews use the same odds.`, void 0, { houseRule: "difficulty", player: dif.player, computer: dif.computer });
  }
  for (const t of ["A", "B"]) {
    const k = induced(s, t, "prayer");
    if (k) rollPrayers(ctx, t, k);
  }
  for (const t of ["A", "B"]) {
    if (!induced(s, t, "riotousRookies")) continue;
    const r = ROSTER_BY_ID[s.teams[t].rosterId ?? ""];
    const pos = r?.positions.find((x) => x.keywords.includes("Lineman") && x.qty.endsWith("16")) ?? r?.positions.find((x) => x.keywords.includes("Lineman"));
    if (!pos) continue;
    const a = d(ctx, 3, t);
    const b = d(ctx, 3, t);
    const n = a + b + 1;
    const added = [];
    for (let i = 0; i < n; i++) {
      const used = new Set(s.players.filter((q) => q.team === t).map((q) => q.number));
      let num = 1;
      while (used.has(num)) num++;
      const np = playerFromPosition(s, t, pos, null, num);
      np.location = "reserves";
      np.journeyman = true;
      if (!np.skills.some((k) => k.id === "loner")) np.skills.push({ id: "loner", value: 4 });
      s.players.push(np);
      added.push(`#${num}`);
    }
    ctx.emit("roll", `Riotous Rookies (${s.teams[t].name}): 2D3+1 = ${a}+${b}+1 = ${n} Journeymen ${pos.name}s (Loner (4+)) join for this game: ${added.join(", ")}.`, INDUCE_RULE("riotousRookies"), { team: t });
  }
  for (const t of ["A", "B"]) {
    const k = induced(s, t, "desperateMeasure");
    if (k) rollDesperate(ctx, t, k);
  }
  for (const t of ["A", "B"]) askHangover(ctx, t);
  if (m.options.rules === "full") {
    const ff = { A: 0, B: 0 };
    for (const t of ["A", "B"]) {
      const d3 = d(ctx, 3);
      ff[t] = d3 + m.dedicatedFans[t];
      ctx.emit("roll", `${s.teams[t].name} Fan Factor: D3 ${d3} Fair-weather Fans + ${m.dedicatedFans[t]} Dedicated Fans = ${ff[t]}.`, MATCH_RULES.fans, { team: t });
    }
    m.fanFactor = ff;
    rollWeather(ctx, "Weather");
  } else {
    m.fanFactor = void 0;
    s.weather = "perfect";
    ctx.emit("note", "Introductory rules (p.44): equal Fan Factor, Perfect Conditions and no Kick-off Events.", MATCH_RULES.structure);
  }
  let winner = null;
  for (let i = 0; i < 50 && !winner; i++) {
    const a = d(ctx, 6, "A");
    const b = d(ctx, 6, "B");
    ctx.emit("roll", `Roll-off for the kicking team: ${s.teams.A.name} ${a}, ${s.teams.B.name} ${b}${a === b ? " \u2014 tie, roll again" : ""}.`, MATCH_RULES.kicking);
    if (a !== b) winner = a > b ? "A" : "B";
  }
  const w = winner ?? "A";
  const choice = ctx.ask({
    type: "kickOrReceive",
    team: w,
    prompt: `${s.teams[w].name} won the roll-off. Kick (defence) or receive (offence)?`,
    options: [
      { id: "receive", label: "Receive the ball" },
      { id: "kick", label: "Kick off" }
    ],
    rule: MATCH_RULES.kicking
  });
  m.kicking = choice === "kick" ? w : other(w);
  m.receivedFirst = other(m.kicking);
  m.half = 1;
  s.turn.half = 1;
  m.drive = 1;
  m.setupDone = { A: false, B: false };
  m.swarmed = void 0;
  m.wisdomAsked = void 0;
  s.turn.active = m.kicking;
  s.phase = "driveSetup";
  ctx.emit("note", `${s.teams[m.kicking].name} kick off; ${s.teams[m.receivedFirst].name} receive. Set up, starting with the kicking team (p.47).`, MATCH_RULES.setup);
}
function setupTeam(ctx, team2, positions) {
  const s = ctx.s;
  const m = s.match;
  const err = applyPositions(s, team2, positions);
  if (err) throw new IllegalAction(err);
  m.setupDone[team2] = true;
  const n = pitchPlayers(s, team2).length;
  ctx.emit("note", `${s.teams[team2].name} set up ${n} players for Drive ${m.drive}.`, rulesFor(s).source ? rulesFor(s).refs.setup : MATCH_RULES.setup, { team: team2 });
  if (m.setupDone.A && m.setupDone.B) {
    s.phase = "kickoff";
    s.turn.active = m.kicking;
    const kicking = m.kicking;
    const swarmers = [kicking, other(kicking)].filter((t) => swarmingCandidates(s, t).length > 0);
    if (swarmers.length) return startSwarming(ctx, swarmers[0], swarmers[1]);
    afterSetups(ctx);
  }
}
function afterSetups(ctx) {
  const s = ctx.s;
  const m = s.match;
  const kicking = m.kicking;
  for (const t of [kicking, other(kicking)]) {
    if (induceLeft(s, t, "josefBugman") < 1 || m.wisdomAsked?.includes(t)) continue;
    m.wisdomAsked = [...m.wisdomAsked ?? [], t];
    const c = ctx.ask({
      type: "dwarfenWisdom",
      team: t,
      prompt: `Josef Bugman's Dwarfen Wisdom (once per game): remove D3 of your players from the pitch and set them up again now?`,
      options: [
        { id: "no", label: "Not this Drive" },
        { id: "use", label: "Use Dwarfen Wisdom (D3 players)" }
      ],
      rule: INDUCE_RULE("josefBugman")
    });
    if (c === "use") {
      spendInduce(s, t, "josefBugman");
      const n = d(ctx, 3, t);
      m.pendingPhase = { type: "dwarfenWisdom", team: t, max: n };
      s.turn.active = t;
      ctx.emit("roll", `Dwarfen Wisdom: ${s.teams[t].name} roll a D3: ${n} \u2014 up to ${n} player${n === 1 ? "" : "s"} may be set up again.`, INDUCE_RULE("josefBugman"), { team: t });
      return;
    }
  }
  s.turn.active = kicking;
  ctx.emit("note", `${s.teams[kicking].name}: nominate a kicker and place the kick in the opponent's half (p.47).`, MATCH_RULES.kickoff);
}
function dwarfenWisdom(ctx, positions) {
  const s = ctx.s;
  const m = s.match;
  const ph = m.pendingPhase;
  const current2 = {};
  for (const p of pitchPlayers(s, ph.team)) current2[p.id] = p.pos;
  const moved = Object.keys(positions).filter((id) => !eq(findPlayer(s, id)?.pos, positions[id]));
  const err = applyPositions(s, ph.team, { ...current2, ...positions });
  if (err) throw new IllegalAction(err);
  ctx.emit("move", `Dwarfen Wisdom: ${s.teams[ph.team].name} set up ${moved.length} player${moved.length === 1 ? "" : "s"} again.`, INDUCE_RULE("josefBugman"), { team: ph.team });
  m.pendingPhase = void 0;
  afterSetups(ctx);
}
function throwARock(ctx, team2) {
  const s = ctx.s;
  spendInduce(s, team2, "throwARock");
  s.turn.betweenTurns = false;
  const opp = pitchPlayers(s, other(team2)).sort((a, b) => a.number - b.number);
  const pick = opp.length === 1 ? 1 : ctx.roll({ dice: [opp.length], interpret: ([n]) => n, by: team2 }).value;
  const p = opp[pick - 1];
  const r = ctx.roll({ dice: [6], interpret: ([n]) => n >= 4 ? "S" : "F", cacheKey: "rock4", by: team2, judge: (v) => v === "S" ? 1 : -1 });
  ctx.emit("roll", `Throw a Rock (${s.teams[team2].name}): D${opp.length} ${pick} \u2014 ${label(p)}; D6 ${r.faces[0]} \u2014 ${r.value === "S" ? "the rock hits: Knocked Down" : "it misses"}.`, PRAYER_RULE, { playerId: p.id });
  if (r.value === "S" && p.stance === "standing") goDown(ctx, p, { kind: "knockedDown", reason: "Throw a Rock", noTurnover: true });
}
function weatherMage(ctx, team2, mod) {
  const s = ctx.s;
  spendInduce(s, team2, "weatherMage");
  s.turn.betweenTurns = false;
  const r = ctx.roll({ dice: [6, 6], interpret: ([a, b]) => a + b, cacheKey: "weather2d6" });
  const total = Math.max(2, Math.min(12, r.value + mod));
  const w = weatherFor(total);
  s.weather = w;
  ctx.emit("roll", `Weather Mage (${s.teams[team2].name}): 2D6 ${r.faces[0]}+${r.faces[1]}${mod ? ` ${mod > 0 ? "+" : "\u2212"}${Math.abs(mod)}` : ""} = ${total} \u2014 ${WEATHER_NAME[w]}.`, INDUCE_RULE("weatherMage"), { weather: w });
}
var SWARMING_RULE = { page: 155, title: "Swarming" };
function swarmingCandidates(s, team2) {
  if (!s.match || !s.teams[team2].specialRules?.includes("Swarming")) return [];
  return s.players.filter((p) => p.team === team2 && p.location === "reserves" && !p.benched && p.keywords.includes("Lineman"));
}
function startSwarming(ctx, team2, next) {
  const s = ctx.s;
  const m = s.match;
  const n = d(ctx, 3, team2);
  const max = Math.min(n, swarmingCandidates(s, team2).length);
  m.pendingPhase = { type: "swarming", team: team2, max, ...next ? { next } : {} };
  s.turn.active = team2;
  ctx.emit("roll", `Swarming: ${s.teams[team2].name} roll a D3: ${n} \u2014 up to ${max} more Lineman player${max === 1 ? "" : "s"} may be set up from the Reserves Box.`, SWARMING_RULE, { team: team2 });
}
function swarming(ctx, positions) {
  const s = ctx.s;
  const m = s.match;
  const ph = m.pendingPhase;
  const current2 = {};
  for (const p of pitchPlayers(s, ph.team)) current2[p.id] = p.pos;
  const err = applyPositions(s, ph.team, { ...current2, ...positions });
  if (err) throw new IllegalAction(err);
  const ids = Object.keys(positions);
  m.swarmed = { ...m.swarmed ?? {}, [ph.team]: (m.swarmed?.[ph.team] ?? 0) + ids.length };
  ctx.emit("move", `Swarming: ${s.teams[ph.team].name} set up ${ids.length} more Lineman player${ids.length === 1 ? "" : "s"}${ids.length ? ` (${ids.map((id) => `${label(getPlayer(s, id))} in ${fmt(positions[id])}`).join(", ")})` : ""} \u2014 ${pitchPlayers(s, ph.team).length} on the pitch.`, SWARMING_RULE, { team: ph.team });
  m.pendingPhase = void 0;
  if (ph.next && swarmingCandidates(s, ph.next).length) return startSwarming(ctx, ph.next);
  afterSetups(ctx);
}
function defaultSwarming(s, team2) {
  usePitch(s);
  const ph = s.match?.pendingPhase;
  if (ph?.type !== "swarming" || ph.team !== team2) return {};
  const g = pitch();
  const R2 = rulesFor(s);
  const los = losColumn(team2);
  const dir = team2 === "A" ? -1 : 1;
  const trial = cloneState(s);
  const out = {};
  const cands = swarmingCandidates(s, team2).slice(0, ph.max);
  const midY = Math.floor(g.h / 2);
  const squares = [];
  for (let back = 1; back < g.w; back++) {
    const x = los + dir * back;
    if (x < 0 || x >= g.w) break;
    const ys = Array.from({ length: g.h }, (_, y) => y).sort((a, b) => Math.abs(a - midY) - Math.abs(b - midY));
    for (const y of ys) squares.push({ x, y });
  }
  for (const p of cands) {
    const sq = squares.find((c) => {
      if (!inOwnHalf(team2, c) || playerAt(trial, c)) return false;
      const wide = c.y < g.wide ? "top" : c.y >= g.h - g.wide ? "bottom" : null;
      if (wide) {
        const n = pitchPlayers(trial, team2).filter((q) => q.pos && (wide === "top" ? q.pos.y < g.wide : q.pos.y >= g.h - g.wide)).length;
        if (n >= R2.maxPerWideZone) return false;
      }
      return true;
    });
    if (!sq) break;
    out[p.id] = sq;
    const tp = getPlayer(trial, p.id);
    tp.location = "pitch";
    tp.pos = { ...sq };
  }
  return out;
}
function deviate(from, dir, distance) {
  let cur = from;
  for (let i = 0; i < distance; i++) {
    cur = add(cur, D8_DIRS[dir]);
    if (!inBounds(cur)) return null;
  }
  return cur;
}
function kickoff(ctx, kickerId, target, useKick) {
  const s = ctx.s;
  const m = s.match;
  const kicking = m.kicking;
  const kicker = getPlayer(s, kickerId);
  askYouDope(ctx);
  for (const p of s.players) if (p.location === "pitch") p.inDrive = true;
  m.played = [.../* @__PURE__ */ new Set([...m.played ?? [], ...s.players.filter((p) => p.location === "pitch").map((p) => p.id)])];
  if (s.teams.A.turn === 0 && s.teams.B.turn === 0) {
    for (const t of ["A", "B"]) {
      const leaders = pitchPlayers(s, t).filter((p) => hasSkill(p, "leader"));
      s.teams[t].leaderReroll = leaders.length > 0;
      if (leaders.length) ctx.emit("note", `${s.teams[t].name} gain a Leader Re-roll for this half (${leaders.map((p) => label(p)).join(", ")} on the pitch).`, { page: 130, title: "Leader" }, { team: t });
      if (induced(s, t, "teamMascot")) {
        s.teams[t].mascotReroll = true;
        ctx.emit("note", `${s.teams[t].name}: the Team Mascot's Team Re-roll is available this half (roll 4+ to use it).`, INDUCE_RULE("teamMascot"), { team: t });
      }
    }
    for (const t of ["A", "B"]) {
      if (!induced(s, t, "halflingMasterChef")) continue;
      const o = other(t);
      const r2 = ctx.roll({ dice: [6, 6, 6], interpret: (f) => f.filter((x) => x >= 4).length, cacheKey: "chef3d6", by: t, judge: (k2) => (k2 - 1.5) / 1.5 });
      const k = r2.value;
      const lose = Math.min(k, Math.max(0, s.teams[o].rerolls - (s.teams[o].bonusRerolls ?? 0)));
      s.teams[t].rerolls += k;
      s.teams[o].rerolls -= lose;
      ctx.emit("roll", `Halfling Master Chef (${s.teams[t].name}): 3D6 ${r2.faces.join(", ")} \u2014 ${k} \xD7 4+: ${s.teams[t].name} gain ${k} Team Re-roll${k === 1 ? "" : "s"} for the half${lose ? `, ${s.teams[o].name} lose ${lose}` : ""} (${s.teams[t].rerolls} v ${s.teams[o].rerolls}).`, INDUCE_RULE("halflingMasterChef"), { team: t });
    }
  }
  s.turn.active = kicking;
  s.ball = { kind: "none" };
  ctx.emit("declare", `${label(kicker)} kicks off towards ${fmt(target)}${useKick ? " (Kick: the ball Deviates D3 squares)" : ""}.`, MATCH_RULES.kickoff, { target });
  const lower2 = !useKick && rulesFor(s).kickDistance === "lowerOf2d6";
  const r = lower2 ? ctx.roll({ dice: [8, 6, 6], interpret: ([dir, a, b]) => ({ dir, n: Math.min(a, b) }), cacheKey: "deviate2d6low" }) : ctx.roll({ dice: [8, useKick ? 3 : 6], interpret: ([dir, n]) => ({ dir, n }), cacheKey: `deviate${useKick ? 3 : 6}` });
  const landing = deviate(target, r.value.dir, r.value.n);
  const dist2 = lower2 ? `2D6 ${r.faces[1]}, ${r.faces[2]} (the lower: ${r.value.n})` : `${useKick ? "D3" : "D6"} ${r.value.n}`;
  ctx.emit("ball", `The kick Deviates: D8 ${r.value.dir}, ${dist2} \u2192 ${landing ? fmt(landing) : "off the pitch"}.`, lower2 ? rulesFor(s).refs.kickoff : MATCH_RULES.kickoff, { landing });
  m.kick = { kicker: kicker.id, target, landing, scatterInAir: false };
  const receiving = other(kicking);
  const otbArea = s.variant === "sevens" && m.options.sevensOnTheBall === "ownArea" ? (c) => inTeamArea(receiving, c.x) : (c) => inPitchHalf(receiving, c.x);
  if (landing && kickLands(kicking, landing)) onTheBallKickoff(ctx, receiving, otbArea);
  if (m.options.rules === "full") kickoffEvent(ctx);
  if (!m.pendingPhase) landKick(ctx);
}
function kickLands(kicking, c) {
  return !!c && inBounds(c) && !inOwnHalf(kicking, c);
}
var EVENT_NAMES = {
  2: "Get the Ref",
  3: "Time-out",
  4: "Solid Defence",
  5: "High Kick",
  6: "Cheering Fans",
  7: "Brilliant Coaching",
  8: "Changing Weather",
  9: "Quick Snap",
  10: "Charge!",
  11: "Dodgy Snack",
  12: "Pitch Invasion"
};
function kickoffEvent(ctx) {
  const s = ctx.s;
  const m = s.match;
  const kicking = m.kicking;
  const receiving = other(kicking);
  const r = ctx.roll({ dice: [6, 6], interpret: ([a, b]) => a + b, cacheKey: "kickoff2d6" });
  const n = r.value;
  const RS = rulesFor(s);
  const name = n === 4 && RS.event4 === "alertDefence" ? "Alert Defence" : EVENT_NAMES[n];
  m.kickoffEvent = { roll: n, name };
  const rule2 = RS.refs.events;
  ctx.emit("roll", `Kick-off Event: 2D6 ${r.faces[0]}+${r.faces[1]}=${n} \u2014 ${name}${RS.source ? " (Sevens table)" : ""}.`, rule2, { event: n });
  const both = (label22, bonus) => {
    const a = d(ctx, 6, "A") + bonus("A");
    const b = d(ctx, 6, "B") + bonus("B");
    ctx.emit("roll", `${label22}: ${s.teams.A.name} ${a}, ${s.teams.B.name} ${b}.`, rule2);
    return a === b ? ["A", "B"] : [a > b ? "A" : "B"];
  };
  switch (n) {
    case 2:
      m.bribes.A += 1;
      m.bribes.B += 1;
      ctx.emit("note", "Each team receives a free Bribe (usable when a player is Sent-off; in this version only Secret Weapons are Sent-off, at the end of a Drive).", rule2);
      break;
    case 3: {
      const back = s.teams[kicking].turn >= RS.timeOutBackFrom;
      for (const t of ["A", "B"]) s.teams[t].turn = Math.max(0, s.teams[t].turn + (back ? -1 : 1));
      ctx.emit("note", `Time-out: both Turn markers move ${back ? "back" : "forward"} one space (${s.teams.A.name} ${s.teams.A.turn}, ${s.teams.B.name} ${s.teams.B.turn}).`, rule2);
      break;
    }
    case 4: {
      if (RS.event4 === "alertDefence") {
        const max2 = d(ctx, 3) + 1;
        m.pendingPhase = { type: "quickSnap", team: kicking, max: max2, alert: true };
        ctx.emit("note", `Alert Defence: ${s.teams[kicking].name} may move up to ${max2} Open players one square each (even into No Man's Land).`, rule2);
        break;
      }
      const max = d(ctx, 3) + 3;
      m.pendingPhase = { type: "solidDefence", team: kicking, max };
      ctx.emit("note", `Solid Defence: ${s.teams[kicking].name} may set up again up to ${max} Open players.`, rule2);
      break;
    }
    case 5: {
      const L = m.kick?.landing;
      const open = L && inOwnHalf(receiving, L) && !playerAt(s, L) ? pitchPlayers(s, receiving).filter((p) => isOpen(s, p) && p.stance === "standing") : [];
      if (!open.length) {
        ctx.emit("note", "High Kick: no Open player can be placed under the ball.", rule2);
        break;
      }
      const pick = ctx.ask({
        type: "highKick",
        team: receiving,
        prompt: `High Kick: place one Open player in ${fmt(L)}, where the ball will land?`,
        options: [...open.map((p) => ({ id: p.id, label: `${label(p)} (${fmt(p.pos)})`, square: p.pos })), { id: "none", label: "Do not move anyone" }],
        rule: rule2
      });
      if (pick !== "none") {
        const p = getPlayer(s, pick);
        p.pos = { ...L };
        ctx.emit("move", `${label(p)} is placed under the ball in ${fmt(L)} (High Kick).`, rule2);
      }
      break;
    }
    case 6: {
      const cheer = (t) => {
        let r2 = d(ctx, 6, t);
        if (r2 === 1 && induced(s, t, "teamMascot")) {
          const again = d(ctx, 6, t);
          ctx.emit("reroll", `Team Mascot: ${s.teams[t].name} re-roll their natural 1 for Cheering Fans \u2014 ${again}.`, INDUCE_RULE("teamMascot"));
          r2 = again;
        }
        return r2 + m.cheerleaders[t];
      };
      const ca = cheer("A");
      const cb = cheer("B");
      ctx.emit("roll", `Cheering Fans (D6 + Cheerleaders): ${s.teams.A.name} ${ca}, ${s.teams.B.name} ${cb}.`, rule2);
      const winners = ca === cb ? ["A", "B"] : [ca > cb ? "A" : "B"];
      m.cheering = winners.map((t) => ({ team: t, turn: s.teams[t].turn + 1, used: false }));
      ctx.emit("note", `${winners.map((t) => s.teams[t].name).join(" and ")}: the first Block Action in the next Turn receives an extra Offensive Assist.`, rule2);
      break;
    }
    case 7: {
      const winners = both("Brilliant Coaching (D6 + Assistant Coaches)", (t) => m.assistantCoaches[t]);
      for (const t of winners) {
        s.teams[t].rerolls += 1;
        s.teams[t].bonusRerolls = (s.teams[t].bonusRerolls ?? 0) + 1;
      }
      ctx.emit("note", `${winners.map((t) => s.teams[t].name).join(" and ")} gain a free Team Re-roll for this Drive.`, rule2);
      break;
    }
    case 8: {
      const w = rollWeather(ctx, "Changing Weather");
      if (w === "perfect" && m.kick) {
        m.kick.scatterInAir = true;
        ctx.emit("note", "Perfect Conditions: the ball will Scatter (3) in the air before it lands.", rule2);
      }
      break;
    }
    case 9: {
      const max = d(ctx, 3) + RS.kickoffPlayersBonus;
      m.pendingPhase = { type: "quickSnap", team: receiving, max };
      ctx.emit("note", `Quick Snap: ${s.teams[receiving].name} may move up to ${max} Open players one square each${RS.source ? " (even into No Man's Land)" : ""}.`, rule2);
      break;
    }
    case 10: {
      const max = d(ctx, 3) + RS.kickoffPlayersBonus;
      m.pendingPhase = { type: "charge", team: kicking, max, activated: [], blitz: false, ttm: false };
      s.phase = "play";
      s.turn.active = kicking;
      s.turn.activation = null;
      s.turn.used = { blitz: false, pass: false, handoff: false, foul: false, secure: false, ttm: false, bomb: false, punt: false, ktm: false };
      for (const p of s.players) p.activated = false;
      ctx.emit("note", `Charge!: ${s.teams[kicking].name} may activate up to ${max} Open players for a free Move Action (one may Blitz, one may Throw a Team-mate, one may Kick a Team-mate). A player who Falls Over or is Knocked Down ends the Charge.`, rule2);
      break;
    }
    case 11: {
      const a = d(ctx, 6, "A");
      const b = d(ctx, 6, "B");
      ctx.emit("roll", `Dodgy Snack: ${s.teams.A.name} ${a}, ${s.teams.B.name} ${b}.`, rule2);
      const affected = a === b ? ["A", "B"] : [a < b ? "A" : "B"];
      for (const t of affected) {
        const on = pitchPlayers(s, t);
        if (!on.length) continue;
        const p = on[d(ctx, on.length) - 1];
        const roll = d(ctx, 6);
        if (roll >= 2) {
          m.driveMods.push({ playerId: p.id, ma: p.ma, av: p.av });
          p.ma = Math.max(1, p.ma - 1);
          p.av = Math.max(2, p.av - 1);
          ctx.emit("status", `Dodgy Snack: ${label(p)} (randomly selected) rolls ${roll}: \u22121 MA and \u22121 AV for this Drive.`, rule2, { playerId: p.id });
        } else {
          p.location = "reserves";
          p.pos = null;
          ctx.emit("status", `Dodgy Snack: ${label(p)} (randomly selected) rolls 1 and spends the Drive in the lavatory (Reserves Box).`, rule2, { playerId: p.id });
        }
      }
      break;
    }
    case 12: {
      const ff = m.fanFactor ?? { A: 0, B: 0 };
      const a = d(ctx, 6, "A") + ff.A;
      const b = d(ctx, 6, "B") + ff.B;
      ctx.emit("roll", `Pitch Invasion (D6 + Fan Factor): ${s.teams.A.name} ${a}, ${s.teams.B.name} ${b}.`, rule2);
      const affected = a === b ? ["A", "B"] : [a < b ? "A" : "B"];
      for (const t of affected) {
        const count = RS.pitchInvasion === "one" ? 1 : d(ctx, 3);
        const pool = pitchPlayers(s, t).slice();
        const hit = [];
        for (let i = 0; i < count && pool.length; i++) hit.push(pool.splice(d(ctx, pool.length) - 1, 1)[0]);
        for (const p of hit) {
          p.stance = "stunned";
          p.distracted = false;
          ctx.emit("status", `Pitch Invasion: ${label(p)} is Placed Prone and Stunned.`, rule2, { playerId: p.id });
        }
      }
      break;
    }
  }
}
function landKick(ctx) {
  const s = ctx.s;
  const m = s.match;
  const kick = m.kick;
  const kicking = m.kicking;
  const receiving = other(kicking);
  let L = kick.landing;
  if (L && kick.scatterInAir) {
    const r = ctx.roll({ dice: [8, 8, 8], interpret: (f) => scatterPath(L, f), cacheKey: `scatter3|${L.x},${L.y}` });
    const sc = r.value;
    L = "land" in sc ? sc.land : null;
    ctx.emit("ball", `The ball Scatters (3) in the air: D8 ${r.faces.join(", ")} \u2192 ${L ? fmt(L) : "off the pitch"}.`, MATCH_RULES.events);
  }
  if (!kickLands(kicking, L)) {
    const own = rulesFor(s).source ? "behind the kicking team's Line of Scrimmage" : "in the kicking team's half";
    ctx.emit("ball", `The ball ${L ? `comes down in ${fmt(L)}, ${own}` : "leaves the pitch"}: Touchback (p.49).`, MATCH_RULES.touchback);
    touchback(ctx);
  } else {
    const p = playerAt(s, L);
    s.ball = { kind: "ground", pos: { ...L } };
    if (p) {
      ctx.emit("ball", `The ball comes down on ${label(p)} in ${fmt(L)}.`, MATCH_RULES.touchback);
      if (!catchAttempt(ctx, p, "kick")) kickBounce(ctx, L, 0);
    } else {
      const dc = kickDivingCatch(ctx, L, receiving);
      if (dc === "failed") kickBounce(ctx, L, 0);
      else if (dc === "none") {
        ctx.emit("ball", `The ball lands in ${fmt(L)} and bounces.`, MATCH_RULES.touchback);
        kickBounce(ctx, L, 0);
      }
    }
  }
  m.kick = void 0;
  m.pendingPhase = void 0;
  startReceivingTurn(ctx);
}
function kickBounce(ctx, from, depth) {
  const s = ctx.s;
  const kicking = s.match.kicking;
  if (depth > 200) throw new Error("Kick-off bounce did not terminate");
  const r = ctx.roll({ dice: [8], interpret: ([dd]) => scatterPath(from, [dd]), cacheKey: `bounce|${from.x},${from.y}` });
  const sc = r.value;
  if (!("land" in sc) || !kickLands(kicking, sc.land)) {
    const own = rulesFor(s).source ? "behind the kicking team's Line of Scrimmage" : "into the kicking team's half";
    ctx.emit("ball", `The ball bounces (D8: ${r.faces[0]}) ${"land" in sc ? `${own} (${fmt(sc.land)})` : "off the pitch"}: Touchback (p.49).`, MATCH_RULES.touchback);
    touchback(ctx);
    return;
  }
  const to = sc.land;
  s.ball = { kind: "ground", pos: { ...to } };
  ctx.emit("ball", `The ball bounces (D8: ${r.faces[0]}) from ${fmt(from)} to ${fmt(to)}.`, { page: 34, title: "Bouncing Balls" }, { to });
  const p = playerAt(s, to);
  if (p) {
    if (!catchAttempt(ctx, p, "bounce")) kickBounce(ctx, to, depth + 1);
    return;
  }
  ctx.emit("ball", `The ball comes to rest in ${fmt(to)}.`, { page: 34, title: "Bouncing Balls" });
}
function touchback(ctx) {
  const s = ctx.s;
  const receiving = other(s.match.kicking);
  const standing = pitchPlayers(s, receiving).filter((p) => p.stance === "standing" && !hasSkill(p, "noBall"));
  if (standing.length) {
    const pick2 = ctx.ask({
      type: "touchback",
      team: receiving,
      prompt: "Touchback: give the ball to one of your Standing players.",
      options: standing.map((p) => ({ id: p.id, label: `${label(p)} (${fmt(p.pos)})`, square: p.pos })),
      rule: MATCH_RULES.touchback
    });
    s.ball = { kind: "held", playerId: pick2 };
    ctx.emit("ball", `Touchback: ${label(getPlayer(s, pick2))} is given the ball.`, MATCH_RULES.touchback, { holder: pick2 });
    return;
  }
  const squares = [];
  for (let x2 = 0; x2 < pitch().w; x2++) for (let y2 = 0; y2 < pitch().h; y2++) if (inOwnHalf(receiving, { x: x2, y: y2 }) && !playerAt(s, { x: x2, y: y2 })) squares.push({ x: x2, y: y2 });
  const pick = ctx.ask({
    type: "touchback",
    team: receiving,
    prompt: "Touchback: no Standing player can take the ball \u2014 place it on an unoccupied square in your half.",
    options: squares.map((c) => ({ id: `${c.x},${c.y}`, label: fmt(c), square: c })),
    rule: MATCH_RULES.touchback
  });
  const [x, y] = pick.split(",").map(Number);
  s.ball = { kind: "ground", pos: { x, y } };
  ctx.emit("ball", `Touchback: the ball is placed in ${fmt({ x, y })}.`, MATCH_RULES.touchback);
}
function startReceivingTurn(ctx) {
  const s = ctx.s;
  const kicking = s.match.kicking;
  s.phase = "play";
  s.turn.active = kicking;
  s.turn.activation = null;
  ctx.turnEnded = true;
  startNextTurn(ctx);
}
function solidDefence(ctx, positions) {
  const s = ctx.s;
  const m = s.match;
  const ph = m.pendingPhase;
  const current2 = {};
  for (const p of pitchPlayers(s, ph.team)) current2[p.id] = p.pos;
  const moved = Object.keys(positions).filter((id) => !eq(findPlayer(s, id)?.pos, positions[id]));
  const err = applyPositions(s, ph.team, { ...current2, ...positions });
  if (err) throw new IllegalAction(err);
  ctx.emit("move", `Solid Defence: ${s.teams[ph.team].name} set up ${moved.length} player${moved.length === 1 ? "" : "s"} again.`, MATCH_RULES.events);
  m.pendingPhase = void 0;
  landKick(ctx);
}
function quickSnap(ctx, moves) {
  const s = ctx.s;
  const m = s.match;
  const alert = m.pendingPhase?.type === "quickSnap" && m.pendingPhase.alert;
  for (const id of Object.keys(moves)) {
    const p = getPlayer(s, id);
    const from = p.pos;
    p.pos = { ...moves[id] };
    ctx.emit("move", `${alert ? "Alert Defence" : "Quick Snap"}: ${label(p)} moves ${fmt(from)} \u2192 ${fmt(p.pos)}.`, rulesFor(s).refs.events, { playerId: p.id });
  }
  m.pendingPhase = void 0;
  landKick(ctx);
}
function endCharge(ctx, why) {
  const s = ctx.s;
  const m = s.match;
  if (m.pendingPhase?.type !== "charge") return;
  s.turn.activation = null;
  ctx.emit("note", `The Charge ends (${why}).`, MATCH_RULES.events);
  m.pendingPhase = void 0;
  s.phase = "kickoff";
  ctx.turnover = null;
  landKick(ctx);
}
function chargeReason(s, p, action, special) {
  const ph = s.match?.pendingPhase;
  if (!ph || ph.type !== "charge") return null;
  if (p.team !== ph.team) return "During Charge! only the kicking team acts.";
  if (ph.activated.length >= ph.max && !ph.activated.includes(p.id)) return `Charge!: all ${ph.max} selected players have been activated.`;
  if (!isOpen(s, p)) return "Charge!: only Open players can be selected (p.48).";
  if (action === "blitz" && ph.blitz) return "Charge!: one player has already performed the free Blitz.";
  if (action === "ttm" && ph.ttm) return "Charge!: one player has already performed the free Throw Team-mate.";
  if (action === "special" && special === "kickTeamMate") return ph.ktm ? "Charge!: one player has already performed the free Kick Team-mate." : null;
  if (!["move", "blitz", "ttm"].includes(action)) return "Charge!: selected players perform a free Move Action (one may Blitz, one may Throw a Team-mate, one may Kick a Team-mate).";
  return null;
}
function nextDrive(ctx) {
  const s = ctx.s;
  const m = s.match;
  const scored = s.phase === "touchdown" ? s.touchdown?.team ?? null : null;
  endOfDrive(ctx);
  let halfDone = !scored;
  let kicking = scored ?? m.kicking;
  if (scored && s.teams[other(kicking)].turn >= rulesFor(s).turnsPerHalf) halfDone = true;
  if (halfDone) {
    if (m.half === 1) {
      m.half = 2;
      s.turn.half = 2;
      for (const t of ["A", "B"]) {
        s.teams[t].turn = 0;
        s.teams[t].rerolls = m.rosterRerolls[t];
        s.teams[t].leaderReroll = false;
      }
      kicking = m.receivedFirst ? m.receivedFirst : other(kicking);
      ctx.emit("turn", `Half-time. Team Re-rolls are replenished. ${s.teams[kicking].name} kick off the second half (p.83).`, MATCH_RULES.restart);
    } else {
      const score = { A: s.teams.A.score, B: s.teams.B.score };
      m.result = { winner: score.A === score.B ? null : score.A > score.B ? "A" : "B", score };
      s.phase = "fullTime";
      ctx.emit("turn", `Full time: ${s.teams.A.name} ${score.A} \u2013 ${score.B} ${s.teams.B.name}${m.result.winner ? ` \u2014 ${s.teams[m.result.winner].name} win` : " \u2014 a draw"}.`, MATCH_RULES.restart);
      return;
    }
  }
  m.kicking = kicking;
  m.drive += 1;
  for (const t of ["A", "B"]) {
    const n = s.teams[t].nextDriveRerolls ?? 0;
    if (!n) continue;
    s.teams[t].rerolls += n;
    s.teams[t].bonusRerolls = (s.teams[t].bonusRerolls ?? 0) + n;
    s.teams[t].nextDriveRerolls = 0;
    ctx.emit("note", `${s.teams[t].name}: +${n} Team Re-roll for this Drive (Star of the Show), lost if unused at its end.`, { page: 197, title: "Count Luthor von Drakenborg: Star of the Show" });
  }
  m.setupDone = { A: false, B: false };
  m.swarmed = void 0;
  m.wisdomAsked = void 0;
  s.turn.betweenTurns = false;
  s.turn.wizardDeclined = [];
  s.phase = "driveSetup";
  s.turn.active = kicking;
  s.touchdown = void 0;
  ctx.emit("note", `Drive ${m.drive}: ${s.teams[kicking].name} kick off. Set up, starting with the kicking team (p.47).`, MATCH_RULES.setup);
}
function endOfDrive(ctx) {
  const s = ctx.s;
  const m = s.match;
  const rule2 = MATCH_RULES.endOfDrive;
  ctx.emit("turn", "End of the Drive.", rule2);
  for (const p of s.players) {
    if (!p.inDrive || !hasSkill(p, "secretWeapon") || p.location === "sentOff") continue;
    if (starReady(s, p, "kreek")) {
      spendStar(ctx, p, `${label(p)} would be Sent-off (Secret Weapon) but stays in the game this time.`);
      continue;
    }
    let sentOff = true;
    const amateur = rulesFor(s).argueTable === "amateur";
    const argueRule = amateur ? rulesFor(s).refs.argue : MATCH_RULES.argue;
    if (!m.coachEjected[p.team]) {
      const argue = ctx.ask({
        type: "argueTheCall",
        team: p.team,
        prompt: `${label(p)} is Sent-off (Secret Weapon). Argue the Call?`,
        options: [
          { id: "yes", label: amateur ? "Argue the Call (D6: 5-6 keeps the player)" : "Argue the Call (D6)" },
          { id: "no", label: "Accept it" }
        ],
        rule: argueRule
      });
      if (argue === "yes") {
        const n = d(ctx, 6, p.team);
        if (amateur) {
          sentOff = n < 5;
          ctx.emit("roll", `Argue the Call: ${n} \u2014 ${sentOff ? `"I don't care!" ${label(p)} is still Sent-off` : `"Well, when you put it like that\u2026" ${label(p)} is not Sent-off`}.`, argueRule);
        } else if (n === 1) {
          m.coachEjected[p.team] = true;
          ctx.emit("roll", `Argue the Call: ${n} \u2014 "You're outta here!" The coach is ejected and the player is still Sent-off.`, MATCH_RULES.argue);
        } else if (n === 6) {
          sentOff = false;
          ctx.emit("roll", `Argue the Call: ${n} \u2014 the referee is swayed; ${label(p)} is not Sent-off.`, MATCH_RULES.argue);
        } else ctx.emit("roll", `Argue the Call: ${n} \u2014 the referee does not care; ${label(p)} is still Sent-off.`, MATCH_RULES.argue);
      }
    }
    if (sentOff && m.bribes[p.team] > 0) {
      const use = ctx.ask({
        type: "bribe",
        team: p.team,
        prompt: `Use a Bribe for ${label(p)}? (${m.bribes[p.team]} left)`,
        options: [
          { id: "yes", label: "Use a Bribe (2+ keeps the player)" },
          { id: "no", label: "Keep the Bribe" }
        ],
        rule: MATCH_RULES.bribe
      });
      if (use === "yes") {
        m.bribes[p.team] -= 1;
        const n = d(ctx, 6, p.team);
        sentOff = n === 1;
        ctx.emit("roll", `Bribe: ${n} \u2014 ${sentOff ? "the referee pockets it and sends the player off anyway" : `${label(p)} is not Sent-off`}.`, MATCH_RULES.bribe);
      }
    }
    if (sentOff) {
      p.location = "sentOff";
      p.pos = null;
      ctx.emit("status", `${label(p)} is Sent-off (Secret Weapon, p.135).`, { page: 135, title: "Secret Weapon" }, { playerId: p.id });
    }
  }
  for (const p of s.players) {
    p.benched = false;
    p.benchedWhy = void 0;
  }
  if (s.weather === "swelteringHeat") {
    const n = d(ctx, 3);
    ctx.emit("roll", `Sweltering Heat: D3 ${n} \u2014 each team randomly selects ${n} player${n === 1 ? "" : "s"} from those on the pitch.`, MATCH_RULES.weather);
    for (const t of ["A", "B"]) {
      const pool = pitchPlayers(s, t).slice();
      for (let i = 0; i < n && pool.length; i++) {
        const p = pool.splice(d(ctx, pool.length) - 1, 1)[0];
        p.benched = true;
        ctx.emit("status", `${label(p)} faints in the heat and cannot be set up for the next Drive.`, MATCH_RULES.weather, { playerId: p.id });
      }
    }
  }
  const ill = youDopeEndOfDrive(ctx);
  for (const p of s.players.filter((q) => q.location === "ko" && !ill.has(q.id))) {
    const n = d(ctx, 6, p.team);
    const kegs = induced(s, p.team, "blitzersBestKeg");
    const bug = induced(s, p.team, "josefBugman") ? 1 : 0;
    const tot = n + kegs + bug;
    if (tot >= 4) p.location = "reserves";
    ctx.emit("roll", `Recover ${label(p)}: ${n}${kegs ? ` +${kegs} Blitzer's Best Keg${kegs > 1 ? "s" : ""}` : ""}${bug ? " +1 Bugman's XXXXXX" : ""}${kegs || bug ? ` = ${tot}` : ""} \u2014 ${tot >= 4 ? "recovers (Reserves Box)" : "stays Knocked-out"}.`, rule2, { playerId: p.id });
  }
  for (const p of s.players) if (restoreFrog(p)) ctx.emit("status", `${label(p)} is no longer a Frog (end of the Drive).`, ZAP_RULE, { playerId: p.id });
  for (const t of ["A", "B"]) {
    const left = s.teams[t].bonusRerolls ?? 0;
    if (left) {
      s.teams[t].rerolls = Math.max(0, s.teams[t].rerolls - left);
      ctx.emit("note", `${s.teams[t].name}: the unused Brilliant Coaching re-roll is lost (p.48).`, MATCH_RULES.events);
    }
    s.teams[t].bonusRerolls = 0;
  }
  for (const mod of m.driveMods) {
    const p = findPlayer(s, mod.playerId);
    if (p) {
      p.ma = mod.ma;
      p.av = mod.av;
    }
  }
  m.driveMods = [];
  m.cheering = void 0;
  m.kickoffEvent = void 0;
  for (const p of s.players) {
    if (p.location === "pitch") {
      p.location = "reserves";
      p.pos = null;
    }
    p.stance = "standing";
    p.distracted = false;
    p.activated = false;
    p.eyeGouged = false;
    p.usage = {};
    p.inDrive = false;
    p.rooted = false;
    p.chompedBy = void 0;
    p.carriedBy = void 0;
    p.carriedFrom = void 0;
  }
  dropTempSkills(s, "drive");
  s.ball = { kind: "none" };
  s.turn.activation = null;
  s.turn.stunnedAtStart = [];
}
function cheeringBonus(s, team2) {
  const c = s.match?.cheering?.find((x) => x.team === team2);
  return !!c && !c.used && s.turn.active === team2 && s.teams[team2].turn === c.turn;
}
function useCheeringBonus(s, team2) {
  const c = s.match?.cheering?.find((x) => x.team === team2);
  if (c) c.used = true;
}

// src/engine/block.ts
function assistEligible(ctx, helper, target, other3, helperIsAttackerSide) {
  void other3;
  return assistReason(ctx.s, helper, target, helperIsAttackerSide) === null;
}
function assistReason(s, helper, target, helperIsAttackerSide) {
  if (helper.location !== "pitch" || !helper.pos) return "not on the pitch";
  if (helper.stance !== "standing") return helper.stance === "prone" ? "Prone (no Tackle Zone)" : "Stunned (no Tackle Zone)";
  if (helper.distracted) return "Distracted (no Tackle Zone)";
  if (!hasTackleZone(helper) || helper.eyeGouged) return "has no Tackle Zone";
  if (!target.pos || !adjacent(helper.pos, target.pos)) return `not adjacent to ${label(target)} (does not Mark them)`;
  const markers = markersOf(s, helper.pos, helper.team).filter((m) => m.id !== target.id);
  if (!markers.length) return null;
  const who = markers.map((m) => label(m)).join(", ");
  if (!canUse(helper, "guard")) return `Marked by ${who}`;
  if (helperIsAttackerSide) {
    const defensive = markersOf(s, helper.pos, helper.team).some((m) => canUse(m, "defensive") && m.team !== s.turn.active);
    if (defensive) return `Marked by ${who}; Guard is cancelled by Defensive`;
  }
  return null;
}
function blockStrength(ctx, att, def, bc2, attBaseOverride) {
  const notes = [];
  const attBase = attBaseOverride ?? att.st;
  let attST = attBase;
  if (bc2.isBlitz && canUse(att, "horns")) {
    attST += 1;
    notes.push("Horns +1");
  }
  const sameTeam = def.team === att.team;
  const offAssists = sameTeam ? [] : pitchPlayers(ctx.s, att.team).filter((q) => q.id !== att.id && assistEligible(ctx, q, def, att, true));
  const defAssists = sameTeam ? [] : pitchPlayers(ctx.s, def.team).filter((q) => q.id !== def.id && assistEligible(ctx, q, att, def, false));
  attST += offAssists.length;
  if (bc2.declaredBlock && !bc2.isBlitz && cheeringBonus(ctx.s, att.team)) {
    attST += 1;
    notes.push("Cheering Fans +1 Offensive Assist");
  }
  const defST = def.st + defAssists.length;
  let dice = 1;
  let chooser = "attacker";
  if (attST > defST) {
    dice = attST > 2 * defST ? 3 : 2;
  } else if (defST > attST) {
    dice = defST > 2 * attST ? 3 : 2;
    chooser = "defender";
  }
  return { attST, defST, attBase, offAssists, defAssists, dice, chooser, notes };
}
function blockBlockedReason(ctx, att, def, bc2) {
  if (def.team === att.team && !bc2?.ballAndChain) return "You can only Block opposition players.";
  if (def.location !== "pitch" || def.stance !== "standing") return "The target of a Block must be a Standing player (p.60).";
  if (!hasTackleZone(att)) return "The blocker must be Standing and not Distracted to Mark the target (p.60).";
  if (bc2?.reach) {
    if (!att.pos || !def.pos || Math.max(Math.abs(att.pos.x - def.pos.x), Math.abs(att.pos.y - def.pos.y)) !== 2) return "Vicious Vines: the target must be exactly 2 squares away.";
  } else if (!att.pos || !def.pos || !adjacent(att.pos, def.pos)) return "The target must be adjacent (Marked by the blocker).";
  for (const id of BLOCKS_BEING_BLOCKED) {
    if (hasSkill(def, id) && gated(id)) return `Not available yet: Blocks against a player with ${SKILL_BY_ID[id]?.name ?? id} are disabled in this version.`;
  }
  if (hasSkill(def, "dumpOff") && hasBall(ctx.s, def) && gated("dumpOff")) return "Not available yet: Blocks against a ball carrier with Dump-off are disabled in this version.";
  return null;
}
function rollPool(ctx, n, judge) {
  const r = ctx.roll({
    dice: Array.from({ length: n }, () => 6),
    interpret: (faces) => faces.map(blockFace).sort(),
    key: (v) => v.join(","),
    cacheKey: `block${n}`,
    display: "block",
    ...judge ? { judge: judge.value, judgeFor: judge.team } : {}
  });
  return r.value;
}
function blockFaceValue(face, att, def, isBlitz) {
  let f = face;
  if (f === "stumble") f = canUse(def, "dodge") && !canUse(att, "tackle") ? "push" : "pow";
  switch (f) {
    case "pow":
      return 1;
    case "push":
      return 0.33;
    case "playerDown":
      return -1;
    case "bothDown": {
      const attUp = canUse(att, "block");
      const defUp = canUse(def, "block");
      let sc;
      if (attUp && !defUp) sc = 1;
      else if (attUp && defUp) sc = 0;
      else if (!attUp && !defUp) sc = canUse(att, "wrestle") ? 0.17 : -0.5;
      else sc = canUse(att, "wrestle") ? 0 : -1;
      if (isBlitz && canUse(att, "juggernaut")) sc = Math.max(sc, 0.33);
      return sc;
    }
    default:
      return 0;
  }
}
function poolText(pool) {
  return pool.map((f) => BLOCK_FACE_LABEL[f]).join(" / ");
}
function effectiveFace(f, att, def) {
  if (f !== "stumble") return f;
  const dodge = canUse(def, "dodge") && !canUse(att, "tackle");
  return dodge ? "push" : "pow";
}
function performBlock(ctx, att, def, bc2, act, second = false) {
  const why = blockBlockedReason(ctx, att, def, bc2);
  if (why) throw new IllegalAction(why);
  const attFrom = att.pos;
  ctx.emit("block", `${label(att)} ${second ? "blocks again (Frenzy)" : "blocks"} ${label(def)} in ${fmt(def.pos)}.`, bc2.isBlitz ? R.blitz : R.block, { attacker: att.id, defender: def.id });
  if (!bc2.ballAndChain) foulAppearance(ctx, att, def, act, "Block");
  targetReactions(ctx, att, def, { trickster: !bc2.ballAndChain });
  const watchOut = def.team !== att.team && starReady(ctx.s, def, "withergrasp") && grantTempSkill(def, "dodge", "activation");
  if (watchOut) spendStar(ctx, def, `the first Block against ${label(def)} this Drive \u2014 he counts as having Dodge for it.`);
  try {
    const attBase = dauntless(ctx, att, def);
    const st = blockStrength(ctx, att, def, bc2, attBase);
    if (bc2.declaredBlock && !bc2.isBlitz) useCheeringBonus(ctx.s, att.team);
    const eff = blockDiceAndChoice(ctx, att, def, bc2, act, st);
    resolveBlockResult(ctx, att, def, eff, bc2, act, attFrom);
  } finally {
    if (watchOut) def.skills = def.skills.filter((k) => !(k.id === "dodge" && k.until));
  }
}
function dauntless(ctx, att, def) {
  let attBase = att.st;
  if (canUse(att, "dauntless") && def.st > att.st) {
    const need = def.st - att.st + 1;
    const d2 = rollTest(ctx, {
      kind: "dauntless",
      player: att,
      label: `Dauntless (D6 + ST ${att.st} must beat ST ${def.st})`,
      target: need,
      mods: [],
      outcome: (n) => n + att.st > def.st ? "S" : "F",
      outcomeKey: `daunt${att.st}v${def.st}`,
      rule: { page: 127, title: "Dauntless" },
      // Akhorne the Squirrel's Blind Rage (p.195): he may re-roll the D6 for Dauntless.
      skillReroll: starReady(ctx.s, att, "akhorne") ? { id: "dauntless", name: "Blind Rage (Akhorne the Squirrel)", available: true } : void 0,
      teamReroll: true,
      proAllowed: true,
      onFail: `Strength stays ${att.st}`
    });
    if (d2.success) {
      attBase = def.st;
      ctx.emit("block", `Dauntless: ${label(att)} counts as ST ${def.st} for this Block.`, { page: 127, title: "Dauntless" });
      if (starReady(ctx.s, att, "karla") && askStar(ctx, att, `Dauntless worked. Raise her ST to double the target's (${2 * def.st}) for this Block?`, `Use Indomitable: ST ${2 * def.st}`, true)) {
        attBase = 2 * def.st;
        spendStar(ctx, att, `${label(att)} counts as ST ${attBase} for this Block.`);
      }
    }
  }
  return attBase;
}
function blockDiceAndChoice(ctx, att, def, bc2, act, st) {
  const s = ctx.s;
  goredByTheBull(ctx, att, bc2, act, st);
  const assistTxt = `${st.offAssists.length} offensive / ${st.defAssists.length} defensive assist${st.defAssists.length === 1 ? "" : "s"}`;
  ctx.emit("block", `Strength ${st.attST} vs ${st.defST} (${assistTxt}${st.notes.length ? ", " + st.notes.join(", ") : ""}) \u2192 ${st.dice} block ${st.dice === 1 ? "die" : "dice"}${st.dice > 1 ? `, ${st.chooser === "attacker" ? "attacker" : "defender"} chooses` : ""}.`, R.assists, {
    attST: st.attST,
    defST: st.defST,
    dice: st.dice,
    chooser: st.chooser,
    offAssists: st.offAssists.map((p) => p.id),
    defAssists: st.defAssists.map((p) => p.id)
  });
  if (ctx.mode === "plan") {
    ctx.step({
      kind: "block",
      label: `Block ${label(def)}: ST ${st.attST} vs ${st.defST}`,
      playerId: att.id,
      dice: `${st.dice} block ${st.dice === 1 ? "die" : "dice"}`,
      mods: [],
      pSingle: null,
      rerolls: [],
      onFail: "",
      rule: R.blockDice,
      extra: { dice: st.dice, chooser: st.chooser, attST: st.attST, defST: st.defST, offAssists: st.offAssists.length, defAssists: st.defAssists.length, defenderId: def.id }
    });
  }
  const poolValue = (p) => {
    const v = p.map((f) => blockFaceValue(f, att, def, !!bc2.isBlitz));
    return st.chooser === "attacker" ? Math.max(...v) : Math.min(...v);
  };
  const whole = def.team !== att.team ? { team: att.team, value: poolValue } : void 0;
  let pool = rollPool(ctx, st.dice, whole);
  ctx.emit("roll", `Block dice: ${poolText(pool)}.`, R.blockDice, { pool });
  const opts = [];
  const tr = teamRerollsAvailable(ctx, att);
  const lonerX = lonerValue(att);
  if (tr.team) opts.push({ id: "team", label: `Team Re-roll: re-roll all dice (${s.teams[att.team].rerolls} left)${lonerX ? ` \u2014 Loner ${lonerX}+` : ""}` });
  if (tr.leader) opts.push({ id: "leader", label: `Leader Re-roll: re-roll all dice${lonerX ? ` \u2014 Loner ${lonerX}+` : ""}` });
  if (mascotAvailable(ctx, att.team)) opts.push({ id: "mascot", label: `Team Mascot's Team Re-roll (D6 4+ first): re-roll all dice${lonerX ? ` \u2014 Loner ${lonerX}+` : ""}` });
  if (att.veteran === "ready" && veteranWouldGoDown(pool, st.chooser === "attacker" || def.team === att.team, att)) opts.push({ id: "veteran", label: "Veteran re-roll: re-roll all dice (once per game)" });
  const uniq = [...new Set(pool)];
  if (proAvailable(ctx, att)) for (const f of uniq) opts.push({ id: `pro:${f}`, label: `Pro (3+): re-roll one ${BLOCK_FACE_LABEL[f]} die` });
  if (bc2.declaredBlock && canUse(att, "brawler") && !(faq2026(s) && act.brawlerUsed) && pool.includes("bothDown")) opts.push({ id: "brawler", label: "Brawler: re-roll one Both Down die" });
  const hk = skillKeywords(att, "hatred");
  if (canUse(att, "hatred") && pool.includes("playerDown") && hk.some((k) => def.keywords.includes(k))) opts.push({ id: "hatred", label: `Hatred (${hk.join(", ")}): re-roll one Player Down die` });
  const one = starOneDie(ctx, att, def, bc2, pool, st);
  if (one) for (const f of uniq) opts.push({ id: `star1:${f}`, label: `${one}: re-roll one ${BLOCK_FACE_LABEL[f]} die` });
  if (!bc2.ballAndChain && starReady(s, att, "anqiPanqi")) for (const sub of faceSubsets(pool)) opts.push({ id: `anqi:${sub.join("+")}`, label: `Savage Blow (Anqi Panqi, once per game): re-roll ${sub.map((f) => BLOCK_FACE_LABEL[f]).join(" + ")}` });
  if (opts.length) {
    opts.push({ id: "none", label: "Keep these dice" });
    const ask = (options) => ctx.ask({
      type: "reroll",
      team: att.team,
      prompt: `Block dice: ${poolText(pool)} (${st.chooser === "attacker" ? "you choose" : "the defender chooses"}). Re-roll?`,
      options,
      rule: R.rerolls,
      context: { pool, chooser: st.chooser, kind: "blockDice", attacker: att.id, defender: def.id }
    });
    let choice2 = ask(opts);
    if (choice2 === "mascot" && !mascotCheck(ctx, att.team)) {
      const rest = opts.filter((o) => o.id !== "mascot");
      choice2 = rest.length > 1 ? ask(rest) : "none";
    }
    if (choice2 === "veteran") {
      att.veteran = "used";
      ctx.emit("reroll", `${label(att)} uses the Veteran's once-per-game re-roll on the block dice.`, VETERAN_RULE, { playerId: att.id });
      pool = rollPool(ctx, st.dice, whole);
      ctx.emit("roll", `Block dice re-rolled: ${poolText(pool)}.`, R.blockDice, { pool });
    } else if (choice2 === "team" || choice2 === "leader" || choice2 === "mascot") {
      const t = s.teams[att.team];
      if (choice2 === "team") useTeamReroll(ctx, att.team, " on the block dice");
      else if (choice2 === "mascot") {
        ctx.emit("reroll", "Team Mascot's Team Re-roll used on the block dice.", { page: 144, title: "Team Mascot" });
        if (faq2026(s)) mascotCaptainFree(ctx, att.team);
      } else {
        t.leaderReroll = false;
        ctx.emit("reroll", `Leader Re-roll used on the block dice (${t.rerolls} left).`, R.rerolls);
      }
      let ok = true;
      if (lonerX) {
        const lr = ctx.roll({ dice: [6], interpret: ([n]) => n >= lonerX ? "S" : "F", cacheKey: `loner${lonerX}`, by: att.team, judge: (v) => v === "S" ? 1 : -1 });
        ok = lr.value === "S";
        ctx.emit("roll", `Loner (${lonerX}+): rolled ${lr.faces[0]} \u2014 ${ok ? "re-roll allowed" : "the Team Re-roll is lost"}.`, { page: 131, title: "Loner" });
      }
      if (ok) {
        pool = rollPool(ctx, st.dice, whole);
        ctx.emit("roll", `Block dice re-rolled: ${poolText(pool)}.`, R.blockDice, { pool });
      }
    } else if (choice2.startsWith("anqi:")) {
      const faces2 = choice2.slice(5).split("+");
      spendStar(ctx, att, `re-rolls ${faces2.length === 1 ? "one Block die" : `${faces2.length} Block dice`} (${faces2.map((f) => BLOCK_FACE_LABEL[f]).join(", ")}).`);
      const rest = pool.slice();
      for (const f of faces2) rest.splice(rest.indexOf(f), 1);
      const fresh = rollPool(ctx, faces2.length, whole ? { team: att.team, value: (f) => poolValue([...rest, ...f]) } : void 0);
      pool = [...rest, ...fresh].sort();
      ctx.emit("roll", `Savage Blow: ${faces2.length} ${faces2.length === 1 ? "die" : "dice"} re-rolled \u2192 ${poolText(fresh)}. Dice now: ${poolText(pool)}.`, R.blockDice, { pool });
    } else if (choice2 !== "none") {
      let face;
      let allowed = true;
      if (choice2.startsWith("star1:")) {
        face = choice2.slice(6);
        spendStar(ctx, att, `re-rolls one ${BLOCK_FACE_LABEL[face]} Block die.`);
      } else if (choice2.startsWith("pro:")) {
        face = choice2.slice(4);
        act.proUsed = true;
        const pr = ctx.roll({ dice: [6], interpret: ([n]) => n >= 3 ? "S" : "F", cacheKey: "pro3", by: att.team, judge: (v) => v === "S" ? 1 : -1 });
        allowed = pr.value === "S";
        ctx.emit("roll", `Pro: rolled ${pr.faces[0]}; needs 3+ \u2014 ${allowed ? "re-roll" : "no re-roll"}.`, { page: 133, title: "Pro" });
      } else {
        face = choice2 === "brawler" ? "bothDown" : "playerDown";
        if (choice2 === "brawler") act.brawlerUsed = true;
      }
      if (allowed) {
        const idx0 = pool.indexOf(face);
        const others = [...pool.slice(0, idx0), ...pool.slice(idx0 + 1)];
        const one2 = ctx.roll({ dice: [6], interpret: ([n]) => blockFace(n), cacheKey: "blockface1", display: "block", ...whole ? { judge: (f) => poolValue([...others, f]), judgeFor: att.team } : {} });
        const idx = pool.indexOf(face);
        pool = [...pool.slice(0, idx), ...pool.slice(idx + 1), one2.value].sort();
        ctx.emit("roll", `${choice2.startsWith("star1") ? "Star Player re-roll" : choice2.startsWith("pro") ? "Pro" : choice2 === "brawler" ? "Brawler" : "Hatred"}: one ${BLOCK_FACE_LABEL[face]} die re-rolled \u2192 ${BLOCK_FACE_LABEL[one2.value]}. Dice now: ${poolText(pool)}.`, R.blockDice, { pool });
      }
    }
  }
  const chooserTeam = st.chooser === "attacker" || def.team === att.team ? att.team : def.team;
  const faces = [...new Set(pool)];
  const choice = ctx.ask({
    type: "blockDie",
    team: chooserTeam,
    prompt: `${st.chooser === "attacker" ? "Attacker" : "Defender"} chooses the block result: ${poolText(pool)}.`,
    options: faces.map((f) => ({ id: f, label: BLOCK_FACE_LABEL[f], detail: faceDetail(f, att, def, bc2) })),
    rule: R.blockDice,
    context: { pool, attacker: att.id, defender: def.id }
  });
  const chosen = choice;
  const eff = effectiveFace(chosen, att, def);
  ctx.emit("block", `Result: ${BLOCK_FACE_LABEL[chosen]}${chosen === "stumble" ? eff === "push" ? " (target has Dodge \u2192 Push Back)" : canUse(def, "dodge") ? " (Tackle cancels Dodge \u2192 POW!)" : " (no Dodge \u2192 POW!)" : ""}.`, R.blockDice, { result: chosen, effective: eff });
  if (chosen === "stumble" && canUse(def, "dodge") && !canUse(att, "tackle")) ctx.emit("note", `${label(def)} uses Dodge against the Stumble (always beneficial, applied automatically).`, { page: 127, title: "Dodge" });
  return eff;
}
function starRuleLabel(id) {
  const d2 = STAR_BY_ID[id];
  return `${d2.rule.name} (${d2.name}${d2.rule.per === "game" ? ", once per game" : d2.rule.per === "half" ? ", once per half" : ""})`;
}
function starOneDie(ctx, att, def, bc2, pool, st) {
  const s = ctx.s;
  if (bc2.ballAndChain) return null;
  if (starReady(s, att, "lordBorak")) return starRuleLabel("lordBorak");
  if (bc2.isBlitz && starReady(s, att, "hthark")) return starRuleLabel("hthark");
  if (starReady(s, att, "willow") && veteranWouldGoDown(pool, st.chooser === "attacker" || def.team === att.team, att)) return starRuleLabel("willow");
  if (starReady(s, att, "lucien") && s.players.some((v) => v.star === "valen" && v.team === att.team && hasTackleZone(v) && !!v.pos && !!def.pos && adjacent(v.pos, def.pos))) return starRuleLabel("lucien");
  if (starReady(s, att, "puggy")) return starRuleLabel("puggy");
  if (starReady(s, att, "ripper")) return starRuleLabel("ripper");
  return null;
}
function faceSubsets(pool) {
  const counts = /* @__PURE__ */ new Map();
  for (const f of pool) counts.set(f, (counts.get(f) ?? 0) + 1);
  let out = [[]];
  for (const [f, c] of counts) {
    const next = [];
    for (const base of out) for (let k = 0; k <= c; k++) next.push([...base, ...Array.from({ length: k }, () => f)]);
    out = next;
  }
  return out.filter((x) => x.length).map((x) => x.sort()).sort((a, b) => a.length - b.length || a.join().localeCompare(b.join()));
}
function goredByTheBull(ctx, att, bc2, act, st) {
  if (!bc2.isBlitz || att.star !== "grashnak" || st.dice >= 3) return;
  let use = !!act.starFlags?.includes("gored");
  if (!use && starReady(ctx.s, att, "grashnak")) {
    use = askStar(ctx, att, `Roll one more Block die (${st.dice} \u2192 ${st.dice + 1})${st.chooser === "defender" ? " \u2014 the defender still chooses the result" : ""}?`, `Use Gored by the Bull: ${st.dice + 1} dice`, st.chooser === "attacker");
    if (use) {
      spendStar(ctx, att, `one more Block die for this Blitz (also for a Frenzy second Block).`);
      act.starFlags = [...act.starFlags ?? [], "gored"];
    }
  }
  if (!use) return;
  st.dice += 1;
  st.notes.push("Gored by the Bull +1 die");
}
function veteranWouldGoDown(pool, attackerChooses, att) {
  const down = (f) => f === "playerDown" || f === "bothDown" && !canUse(att, "block");
  return attackerChooses ? pool.every(down) : pool.some(down);
}
function performMultipleBlock(ctx, att, d1, d2, act) {
  if (d1.id === d2.id) throw new IllegalAction("Multiple Block needs two different targets (p.132).");
  for (const d3 of [d1, d2]) {
    const why = blockBlockedReason(ctx, att, d3);
    if (why) throw new IllegalAction(why);
  }
  const attFrom = att.pos;
  const rule2 = { page: 132, title: "Multiple Block" };
  const bc2 = { isBlitz: false, declaredBlock: true, multiple: true };
  ctx.emit("block", `${label(att)} uses Multiple Block on ${label(d1)} and ${label(d2)} (ST \u22122 for both Blocks).`, rule2, { attacker: att.id, defender: d1.id, defender2: d2.id });
  for (const d3 of [d1, d2]) foulAppearance(ctx, att, d3, act, "Block");
  for (const d3 of [d1, d2]) targetReactions(ctx, att, d3, { trickster: true });
  const pairs = [];
  for (const d3 of [d1, d2]) {
    const base = dauntless(ctx, att, d3);
    pairs.push({ d: d3, st: blockStrength(ctx, att, d3, bc2, Math.max(1, base - 2)) });
  }
  useCheeringBonus(ctx.s, att.team);
  let stop = null;
  for (const { d: d3, st } of pairs) {
    const attDown = att.location !== "pitch" || att.stance !== "standing";
    if (d3.location !== "pitch" || d3.stance !== "standing" || !d3.pos || !adjacent(attFrom, d3.pos)) {
      ctx.emit("note", `${label(d3)} is no longer a Standing player next to the blocker: that Block has no effect.`, rule2);
      continue;
    }
    ctx.emit("block", `${label(att)} blocks ${label(d3)} in ${fmt(d3.pos)} (Multiple Block).`, rule2, { attacker: att.id, defender: d3.id });
    try {
      const eff = blockDiceAndChoice(ctx, att, d3, bc2, act, st);
      resolveBlockResult(ctx, att, d3, eff, { ...bc2, attackerDown: attDown }, act, attFrom);
    } catch (e) {
      if (!(e instanceof ActionStop)) throw e;
      stop = stop ?? e;
    }
  }
  act.blocksDone = 2;
  act.over = true;
  checkTouchdown(ctx, true);
  if (stop || ctx.turnover) throw stop ?? new ActionStop("turnover");
  hitAndRun(ctx, att, act);
}
function faceDetail(f, att, def, bc2) {
  switch (effectiveFace(f, att, def)) {
    case "playerDown":
      return "Attacker is Knocked Down (Turnover).";
    case "bothDown": {
      const a = canUse(att, "block") ? "attacker stays up (Block)" : "attacker down (Turnover)";
      const d2 = canUse(def, "block") ? "defender stays up (Block)" : "defender down";
      return `${a}; ${d2}${bc2.isBlitz && canUse(att, "juggernaut") ? "; Juggernaut may treat as Push" : ""}.`;
    }
    case "push":
      return f === "stumble" ? "Defender Dodges: Push Back." : "Defender is Pushed Back.";
    default:
      return "Defender is Pushed Back and Knocked Down.";
  }
}
function resolveBlockResult(ctx, att, def, eff, bc2, act, attFrom) {
  const jugg = bc2.isBlitz && canUse(att, "juggernaut");
  if (bc2.attackerDown && (eff === "playerDown" || eff === "bothDown")) {
    ctx.emit("note", `${label(att)} is already down: the ${eff === "playerDown" ? "Player Down" : "Both Down"} result only affects ${label(def)}.`, { page: 132, title: "Multiple Block" });
    if (eff === "bothDown" && !canUse(def, "block")) goDown(ctx, def, { kind: "knockedDown", by: att, inBlock: true, reason: "Both Down" });
    checkTouchdown(ctx, false);
    return;
  }
  if (eff === "playerDown") {
    goDown(ctx, att, { kind: "knockedDown", by: def, inBlock: true, reason: "Player Down" });
    act.over = true;
    checkTouchdown(ctx, false);
    throw new ActionStop("attacker down");
  }
  if (eff === "bothDown") {
    let asPush = false;
    if (jugg) {
      const c = ctx.ask({
        type: "juggernaut",
        team: att.team,
        prompt: "Both Down: use Juggernaut to treat it as a Push Back?",
        options: [
          { id: "push", label: "Treat as Push Back (Juggernaut)" },
          { id: "both", label: "Keep Both Down" }
        ],
        rule: { page: 129, title: "Juggernaut" }
      });
      asPush = c === "push";
    }
    if (asPush) {
      ctx.emit("block", "Juggernaut: Both Down is treated as Push Back.", { page: 129, title: "Juggernaut" });
      resolvePush(ctx, att, def, bc2, act, attFrom, false);
      return;
    }
    let wrestle = false;
    if (canUse(att, "wrestle")) {
      const c = ctx.ask({
        type: "wrestle",
        team: att.team,
        prompt: "Both Down: use Wrestle? Both players are Placed Prone (no Armour Rolls).",
        options: [
          { id: "yes", label: "Use Wrestle (both Placed Prone)" },
          { id: "no", label: "Do not use Wrestle" }
        ],
        rule: { page: 138, title: "Wrestle" }
      });
      wrestle = c === "yes";
    }
    if (!wrestle && canUse(def, "wrestle") && !jugg) {
      const c = ctx.ask({
        type: "wrestle",
        team: def.team,
        prompt: `Both Down: ${label(def)} may use Wrestle \u2014 both players are Placed Prone (no Armour Rolls).`,
        options: [
          { id: "yes", label: "Use Wrestle (both Placed Prone)" },
          { id: "no", label: "Do not use Wrestle" }
        ],
        rule: { page: 138, title: "Wrestle" }
      });
      wrestle = c === "yes";
    }
    if (wrestle) {
      ctx.emit("block", "Wrestle: both players are Placed Prone.", { page: 138, title: "Wrestle" });
      goDown(ctx, att, { kind: "placedProne", reason: "Wrestle" });
      goDown(ctx, def, { kind: "placedProne", reason: "Wrestle" });
      act.over = true;
      checkTouchdown(ctx, false);
      throw new ActionStop("wrestle");
    }
    const attBlock = canUse(att, "block");
    const defBlock = canUse(def, "block");
    if (attBlock) ctx.emit("note", `${label(att)} uses Block and is not Knocked Down (always beneficial, applied automatically).`, { page: 124, title: "Block" });
    if (defBlock) ctx.emit("note", `${label(def)} uses Block and is not Knocked Down (always beneficial, applied automatically).`, { page: 124, title: "Block" });
    let attackerDown = false;
    if (!attBlock) {
      const r = goDown(ctx, att, { kind: "knockedDown", by: def, inBlock: true, reason: "Both Down" });
      attackerDown = !r.avoided;
    }
    let defDown = false;
    if (!defBlock) defDown = !goDown(ctx, def, { kind: "knockedDown", by: att, inBlock: true, reason: "Both Down" }).avoided;
    checkTouchdown(ctx, false);
    if (attackerDown) {
      act.over = true;
      throw new ActionStop("attacker down");
    }
    if (defDown && !bc2.multiple) pileDriver(ctx, att, def, act);
    afterBlock(ctx, att, def, bc2, act, false, false);
    return;
  }
  resolvePush(ctx, att, def, bc2, act, attFrom, eff === "pow");
}
function resolvePush(ctx, att, def, bc2, act, attFrom, pow) {
  const s = ctx.s;
  const jugg = bc2.isBlitz && canUse(att, "juggernaut");
  const defFrom = def.pos;
  let standFirm = false;
  if (def.rooted) {
    standFirm = true;
    ctx.emit("push", `${label(def)} is Rooted and cannot be Pushed Back.`, { page: 137, title: "Take Root" });
  } else if (canUse(def, "standFirm") && !jugg) {
    const c = ctx.ask({
      type: "standFirm",
      team: def.team,
      prompt: `${label(def)} may use Stand Firm and not be Pushed Back.`,
      options: [
        { id: "yes", label: "Use Stand Firm (stay put)" },
        { id: "no", label: "Allow the push" }
      ],
      rule: { page: 136, title: "Stand Firm" }
    });
    standFirm = c === "yes";
  }
  let out = { moved: false, crowd: false, to: null };
  const pushedAround = [];
  if (standFirm) {
    if (!def.rooted) ctx.emit("push", `${label(def)} uses Stand Firm and is not pushed.`, { page: 136, title: "Stand Firm" });
  } else {
    out = pushPlayer(ctx, att, attFrom, def, true, bc2, jugg, pushedAround);
    if (out.moved && canUse(att, "eyeGouge")) {
      def.eyeGouged = true;
      ctx.emit("note", `Eye Gouge: ${label(def)} cannot provide assists until next activated.`, { page: 128, title: "Eye Gouge" });
    }
  }
  let followed = false;
  const cannotFollow = bc2.multiple || bc2.reach || att.rooted || isChomped(s, att) && !(bc2.ballAndChain && faq2026(s));
  if (out.moved && !playerAt(s, defFrom) && att.stance === "standing" && att.pos && eq(att.pos, attFrom) && cannotFollow) {
    ctx.emit("note", bc2.multiple ? "Multiple Block: no Follow-up (p.132)." : bc2.reach ? "Vicious Vines: no Follow-up (p.204)." : `${label(att)} cannot leave their square: no Follow-up.`, bc2.multiple ? { page: 132, title: "Multiple Block" } : bc2.reach ? { page: 204, title: "Maple Highgrove: Vicious Vines" } : att.rooted ? { page: 137, title: "Take Root" } : { page: 131, title: "Monstrous Mouth" });
  } else if (out.moved && !playerAt(s, defFrom) && att.stance === "standing" && att.pos && eq(att.pos, attFrom)) {
    const frenzy = hasSkill(att, "frenzy") && canUse(att, "frenzy");
    const fendBlocks = canUse(def, "fend") && !jugg && !out.crowd && !bc2.ballAndChain ? true : false;
    let fend = false;
    if (fendBlocks && !frenzy) {
      const c = ctx.ask({
        type: "fend",
        team: def.team,
        prompt: `${label(def)} may use Fend to stop ${label(att)} following up.`,
        options: [
          { id: "yes", label: "Use Fend (no Follow-up)" },
          { id: "no", label: "Allow Follow-up" }
        ],
        rule: { page: 128, title: "Fend" }
      });
      fend = c === "yes";
    } else if (fendBlocks && frenzy) {
      const c = ctx.ask({
        type: "fend",
        team: def.team,
        prompt: `${label(def)} may use Fend to stop the Frenzied ${label(att)} following up.`,
        options: [
          { id: "yes", label: "Use Fend (no Follow-up)" },
          { id: "no", label: "Allow Follow-up" }
        ],
        rule: { page: 128, title: "Fend" }
      });
      fend = c === "yes";
    }
    if (fend) {
      ctx.emit("push", `${label(def)} uses Fend: no Follow-up.`, { page: 128, title: "Fend" });
    } else if (frenzy) {
      followed = true;
      ctx.emit("note", "Frenzy: the blocker must Follow-up.", { page: 128, title: "Frenzy" });
    } else {
      let forced = false;
      if (canUse(def, "taunt") && !att.rooted) {
        const c = ctx.ask({
          type: "taunt",
          team: def.team,
          prompt: `${label(def)} may use Taunt to force ${label(att)} to Follow-up.`,
          options: [
            { id: "yes", label: "Force the Follow-up (Taunt)" },
            { id: "no", label: "Do not use Taunt" }
          ],
          rule: { page: 137, title: "Taunt" }
        });
        forced = c === "yes";
      }
      if (forced) {
        followed = true;
        ctx.emit("note", "Taunt: the blocker must Follow-up.", { page: 137, title: "Taunt" });
      } else {
        const c = ctx.ask({
          type: "followUp",
          team: att.team,
          prompt: `Follow-up into ${fmt(defFrom)}?`,
          options: [
            { id: "yes", label: `Follow-up into ${fmt(defFrom)}`, square: defFrom },
            { id: "no", label: "Stay put" }
          ],
          rule: R.followUp
        });
        followed = c === "yes";
      }
    }
    if (followed) {
      att.pos = { ...defFrom };
      ctx.emit("move", `${label(att)} follows up into ${fmt(defFrom)} (free move).`, R.followUp, { playerId: att.id, from: attFrom, to: defFrom });
    }
  }
  if (out.moved && !out.crowd && hasBall(s, def) && canUse(att, "stripBall") && !canUse(def, "sureHands") && !canUse(def, "monstrousMouth")) {
    const c = ctx.ask({
      type: "stripBall",
      team: att.team,
      prompt: `Use Strip Ball to make ${label(def)} drop the ball in ${fmt(def.pos)}?`,
      options: [
        { id: "yes", label: "Strip the ball" },
        { id: "no", label: "Do not use Strip Ball" }
      ],
      rule: { page: 136, title: "Strip Ball" }
    });
    if (c === "yes") {
      ctx.emit("ball", `${label(def)} drops the ball (Strip Ball).`, { page: 136, title: "Strip Ball" });
      s.ball = { kind: "ground", pos: { ...def.pos } };
      bounce(ctx, def.pos);
    }
  }
  for (const q of pushedAround) if (q.location === "pitch") ballDisplacedBy(ctx, q);
  if (pow && def.location === "pitch" && def.stance === "standing") {
    const down = !goDown(ctx, def, { kind: "knockedDown", by: att, inBlock: true, reason: "POW!" }).avoided;
    if (down && !bc2.multiple) pileDriver(ctx, att, def, act);
  }
  for (const q of [...pushedAround, ...att.pos && !eq(att.pos, attFrom) ? [att] : []]) trapdoorCheck(ctx, q);
  afterBlock(ctx, att, def, bc2, act, true, out.moved || standFirm);
}
function pushesIntoCrowd(s, fromSq, victimPos) {
  const sq = pushSquares(fromSq, victimPos);
  if (sq.some((c) => inBounds(c) && !playerAt(s, c))) return false;
  return sq.some((c) => !inBounds(c));
}
function crowdPushSquares(s, victim) {
  const v = victim.pos;
  if (!v || victim.location !== "pitch" || victim.rooted) return [];
  if (canUse(victim, "standFirm")) return [];
  if (canUse(victim, "sidestep") && neighbours(v).some((c) => inBounds(c) && !playerAt(s, c))) return [];
  return neighbours(v).filter((a) => inBounds(a) && pushesIntoCrowd(s, a, v));
}
function pushAway(ctx, att, fromSq, victim) {
  const moved = [];
  if (victim.rooted) {
    ctx.emit("push", `${label(victim)} is Rooted and cannot be Pushed Back.`, { page: 137, title: "Take Root" });
    return { moved: false, crowd: false, to: null };
  }
  const out = pushPlayer(ctx, att, fromSq, victim, false, { isBlitz: false, declaredBlock: false, ballAndChain: true }, false, moved);
  for (const q of moved) if (q.location === "pitch") ballDisplacedBy(ctx, q);
  for (const q of moved) trapdoorCheck(ctx, q);
  return out;
}
function pushPlayer(ctx, att, fromSq, victim, first, bc2, jugg, moved) {
  const s = ctx.s;
  const vFrom = victim.pos;
  const grab = canUse(att, "grab") && !grabForbidden(s, att);
  const grabUse = first && bc2.declaredBlock && grab;
  const sidestepBlocked = faq2026(s) ? grabUse : grab;
  const empty = (c) => inBounds(c) && !playerAt(s, c);
  let candidates2 = [];
  let decider = att.team;
  let decType = "pushSquare";
  const adjEmpty = neighbours(vFrom).filter(empty);
  if (canUse(victim, "sidestep") && !(sidestepBlocked && victim.team !== att.team) && adjEmpty.length) {
    const c = ctx.ask({
      type: "skill",
      team: victim.team,
      prompt: `${label(victim)} may use Sidestep and choose the push square.`,
      context: { skill: "sidestep" },
      options: [
        { id: "yes", label: "Use Sidestep" },
        { id: "no", label: "Let the opponent choose" }
      ],
      rule: { page: 135, title: "Sidestep" }
    });
    if (c === "yes") {
      candidates2 = adjEmpty;
      decider = victim.team;
      decType = "sidestepSquare";
    }
  }
  if (!candidates2.length && grabUse && adjEmpty.length) {
    const c = ctx.ask({
      type: "skill",
      team: att.team,
      prompt: `${label(att)} may use Grab to push ${label(victim)} into any unoccupied adjacent square.`,
      context: { skill: "grab" },
      options: [
        { id: "yes", label: "Use Grab" },
        { id: "no", label: "Normal push" }
      ],
      rule: { page: 128, title: "Grab" }
    });
    if (c === "yes") {
      candidates2 = adjEmpty;
      decType = "grabSquare";
    }
  }
  let crowd = false;
  if (!candidates2.length) {
    const sq = pushSquares(fromSq, vFrom);
    const free = sq.filter(empty);
    if (free.length) candidates2 = free;
    else if (pushesIntoCrowd(s, fromSq, vFrom)) crowd = true;
    else candidates2 = sq.filter((c) => inBounds(c));
  }
  if (crowd) {
    const offSq = pushSquares(fromSq, vFrom).find((c) => !inBounds(c));
    ctx.emit("push", `${label(victim)} is pushed out of ${fmt(vFrom)} into the crowd!`, R.crowdPush, { playerId: victim.id, from: vFrom, crowd: true });
    const hadBall = hasBall(s, victim);
    moveOffPitch(victim, "reserves");
    victim.location = "reserves";
    if (victim.team === s.turn.active) ctx.setTurnover(`${label(victim)} was pushed into the crowd`, R.crowdPush);
    crowdInjury(ctx, victim);
    if (hadBall) {
      ctx.emit("ball", `The ball goes into the crowd with ${label(victim)} and is thrown in.`, R.crowdPush);
      throwIn(ctx, vFrom, offSq);
    }
    return { moved: true, crowd: true, to: null };
  }
  let options = candidates2.slice();
  for (; ; ) {
    if (!options.length) {
      ctx.emit("push", `${label(victim)} cannot be pushed anywhere and stays in ${fmt(vFrom)}.`, R.chainPush);
      return { moved: false, crowd: false, to: null };
    }
    const pick = ctx.ask({
      type: decType,
      team: decider,
      prompt: `Choose where ${label(victim)} is pushed${options.some((c) => playerAt(s, c)) ? " (occupied squares cause a Chain Push)" : ""}.`,
      options: options.map((c) => ({ id: `${c.x},${c.y}`, label: `${fmt(c)}${playerAt(s, c) ? ` (chain push ${label(playerAt(s, c))})` : ""}`, square: c })),
      context: { victim: victim.id, from: vFrom, attacker: att.id },
      rule: decType === "pushSquare" ? R.push : decType === "sidestepSquare" ? { page: 135, title: "Sidestep" } : { page: 128, title: "Grab" }
    });
    const [x, y] = pick.split(",").map(Number);
    const to = { x, y };
    const occ = playerAt(s, to);
    if (occ) {
      if (occ.rooted) {
        ctx.emit("push", `${label(occ)} is Rooted; ${label(victim)} cannot be pushed into ${fmt(to)}.`, { page: 137, title: "Take Root" });
        options = options.filter((c2) => !eq(c2, to));
        continue;
      }
      if (canUse(occ, "standFirm") && !(jugg && occ.team !== att.team)) {
        const c = ctx.ask({
          type: "standFirm",
          team: occ.team,
          prompt: `${label(occ)} is about to be chain-pushed. Use Stand Firm?`,
          options: [
            { id: "yes", label: "Use Stand Firm" },
            { id: "no", label: "Allow the chain push" }
          ],
          rule: { page: 136, title: "Stand Firm" }
        });
        if (c === "yes") {
          ctx.emit("push", `${label(occ)} uses Stand Firm; ${label(victim)} cannot be pushed into ${fmt(to)}.`, { page: 136, title: "Stand Firm" });
          options = options.filter((c2) => !eq(c2, to));
          continue;
        }
      }
      ctx.emit("push", `Chain push: ${label(occ)} in ${fmt(to)} will be pushed too.`, R.chainPush);
      const sub = pushPlayer(ctx, att, vFrom, occ, false, bc2, jugg, moved);
      if (!sub.moved) {
        options = options.filter((c2) => !eq(c2, to));
        continue;
      }
    }
    victim.pos = { ...to };
    moved.push(victim);
    ctx.emit("push", `${label(victim)} is pushed ${fmt(vFrom)} \u2192 ${fmt(to)}.`, first ? R.push : R.chainPush, { playerId: victim.id, from: vFrom, to });
    return { moved: true, crowd: false, to };
  }
}
function afterBlock(ctx, att, def, bc2, act, wasPush, pushResolved) {
  checkTouchdown(ctx, true);
  if (ctx.turnover) throw new ActionStop("turnover");
  if (bc2.multiple) return;
  act.blocksDone += 1;
  if (wasPush && pushResolved && hasSkill(att, "frenzy") && canUse(att, "frenzy") && act.blocksDone === 1 && def.location === "pitch" && def.stance === "standing" && att.pos && def.pos && adjacent(att.pos, def.pos)) {
    if (bc2.isBlitz) {
      const maLeft = att.ma - act.maUsed;
      const rushLeft = 2 + (canUse(att, "sprint") ? 1 : 0) - act.rushesUsed;
      if (maLeft <= 0 && rushLeft <= 0) {
        ctx.emit("note", "Frenzy: no movement left, so no second Block.", { page: 128, title: "Frenzy" });
        hitAndRun(ctx, att, act);
        return;
      }
      payMovement(ctx, att, act, 1, null, "make the second Frenzy Block");
    }
    ctx.emit("note", "Frenzy: the target is still Standing \u2014 the blocker must Block again.", { page: 128, title: "Frenzy" });
    performBlock(ctx, att, def, bc2, act, true);
    return;
  }
  hitAndRun(ctx, att, act);
}
function hitAndRun(ctx, att, act) {
  if (!canUse(att, "hitAndRun") || !att.pos || heldInPlace(ctx.s, att)) return;
  const s = ctx.s;
  const opp = pitchPlayers(s, att.team === "A" ? "B" : "A");
  const squares = neighbours(att.pos).filter((c2) => !playerAt(s, c2) && !opp.some((q) => adjacent(q.pos, c2)));
  if (!squares.length) return;
  const c = ctx.ask({
    type: "hitAndRun",
    team: att.team,
    prompt: "Hit and Run: move one free square ending away from all opposition players?",
    options: [{ id: "stay", label: "Stay" }, ...squares.map((q) => ({ id: `${q.x},${q.y}`, label: `Move to ${fmt(q)}`, square: q }))],
    rule: { page: 129, title: "Hit and Run" }
  });
  if (c === "stay") return;
  const [x, y] = c.split(",").map(Number);
  const from = att.pos;
  att.pos = { x, y };
  ctx.emit("move", `${label(att)} uses Hit and Run: ${fmt(from)} \u2192 ${fmt(att.pos)}.`, { page: 129, title: "Hit and Run" });
  if (s.ball.kind === "ground" && eq(s.ball.pos, att.pos)) pickUp(ctx, att);
  checkTouchdown(ctx, true);
  void act;
}

// src/engine/special.ts
var TTM_RULE = { page: 76, title: "Throw Team-mate Actions" };
var TTM_RANGE_RULE = { page: 77, title: "Throw Team-mate: Measure Range / Test for Accuracy" };
var TTM_LAND_RULE = { page: 78, title: "Throw Team-mate: Landing" };
function ttmBlockedReason(s, p) {
  if (!hasSkill(p, "throwTeamMate")) return "Only players with the Throw Team-mate Trait can declare this Action (p.76).";
  if (s.turn.used.ttm) return "A Throw Team-mate Action has already been declared this Turn (p.76).";
  if (p.pa === null) return 'This player has no Passing Ability (PA "-"), so the Passing Ability Test for the throw cannot be made.';
  const mates2 = pitchPlayers(s, p.team).filter((q) => q.id !== p.id && hasSkill(q, "rightStuff"));
  if (!mates2.length) return "No team-mate with the Right Stuff Trait is on the pitch (p.135).";
  return null;
}
function ttmRange(from, target) {
  const r = passRange(from, target);
  return r === "quick" || r === "short" ? r : null;
}
function ttmTargetReason(from, target) {
  if (!inBounds(target)) return "The target square must be on the pitch.";
  if (eq(from, target)) return "Choose a different target square.";
  if (!ttmRange(from, target)) return "The target square must be within Quick Throw or Short Throw range (p.76-77).";
  return null;
}
function ttmMods(ctx, p, from, range) {
  const mods = [];
  if (range === "short") mods.push({ label: "Short Throw", value: -1 });
  const m = markersOf(ctx.s, from, p.team).length;
  if (m) mods.push({ label: `Marked x${m}`, value: -m });
  if (ctx.s.weather === "verySunny") mods.push({ label: "Very Sunny", value: -1 });
  mods.push(...disturbingPresenceMods(ctx, { ...p, pos: from }));
  if (canUse(p, "strongArm")) mods.push({ label: "Strong Arm", value: 1 });
  return mods;
}
function throwablePlayers(s, p, from = p.pos) {
  return pitchPlayers(s, p.team).filter((q) => q.id !== p.id && hasSkill(q, "rightStuff") && !!q.pos && adjacent(q.pos, from));
}
function performThrowTeamMate(ctx, p, thrownId, target, act, kick = false) {
  const s = ctx.s;
  const from = p.pos;
  const thrown = getPlayer(s, thrownId);
  const held = heldInPlace(s, thrown);
  if (held) throw new IllegalAction(held);
  if (kick && !hasSkill(p, "kickTeamMate")) throw new IllegalAction("Only a player with Kick Team-mate can kick a team-mate (p.130).");
  if (thrown.team !== p.team || thrown.id === p.id) throw new IllegalAction("Choose a team-mate to throw.");
  if (thrown.location !== "pitch" || !thrown.pos || !adjacent(thrown.pos, from)) throw new IllegalAction("The thrown team-mate must be adjacent to the thrower (p.76).");
  if (!hasSkill(thrown, "rightStuff")) throw new IllegalAction("Only a team-mate with the Right Stuff Trait can be thrown (p.135).");
  if (p.pa === null) throw new IllegalAction('This player has no Passing Ability (PA "-").');
  const why = ttmTargetReason(from, target);
  if (why) throw new IllegalAction(why);
  const range = ttmRange(from, target);
  act.ballActionDone = true;
  const carried = hasBall(s, thrown);
  const wasDown = thrown.stance !== "standing" || thrown.distracted;
  const verb = kick ? "Kick" : "Throw";
  ctx.emit("declare", kick ? `${label(p)} kicks ${label(thrown)} (Kick Team-mate, ${range === "quick" ? "Quick" : "Short"} range) at ${fmt(target)}.` : `${label(p)} picks up ${label(thrown)} for a ${range === "quick" ? "Quick" : "Short"} Throw at ${fmt(target)}.`, kick ? KTM_RULE : TTM_RULE, { from, target, range, thrown: thrown.id });
  let fumbled = false;
  if (hasSkill(p, "alwaysHungry")) {
    const ah = rollTest(ctx, {
      kind: "alwaysHungry",
      player: p,
      label: `${label(p)} Always Hungry`,
      target: 2,
      mods: [],
      rule: { page: 123, title: "Always Hungry" },
      teamReroll: true,
      proAllowed: true,
      onFail: "tries to eat the team-mate"
    });
    if (!ah.success) {
      const sq = rollTest(ctx, {
        kind: "squirm",
        player: p,
        label: `${label(thrown)} tries to squirm free`,
        target: 2,
        mods: [],
        rule: { page: 123, title: "Always Hungry" },
        teamReroll: true,
        proAllowed: true,
        onFail: "is eaten"
      });
      if (!sq.success) {
        const at = thrown.pos;
        thrown.location = "cas";
        thrown.pos = null;
        thrown.stance = "standing";
        thrown.casualtyResult = "Eaten";
        ctx.emit("injury", `${label(p)} eats ${label(thrown)}! The player is removed from the game (no Apothecary, no Regeneration).`, { page: 123, title: "Always Hungry" }, { playerId: thrown.id, result: "eaten", from: at });
        if (carried) {
          s.ball = { kind: "ground", pos: { ...from } };
          ctx.emit("ball", `The ball bounces from ${fmt(from)}.`, R.scatter);
          bounce(ctx, from);
        }
        if (carried || !faq2026(ctx.s)) ctx.setTurnover(`${label(thrown)} was eaten${faq2026(ctx.s) ? " while holding the ball" : ""}`, { page: 123, title: "Always Hungry" });
        act.over = true;
        throw new ActionStop("eaten");
      }
      fumbled = true;
      ctx.emit("status", `${label(thrown)} squirms free: the throw is automatically a Fumbled Throw.`, { page: 123, title: "Always Hungry" });
    }
  }
  let quality = "fumble";
  if (!fumbled) {
    const pa = p.pa;
    const res = rollTest(ctx, {
      kind: "ttm",
      player: p,
      label: `Passing Ability Test (${range === "quick" ? "Quick" : "Short"} ${verb})`,
      target: pa,
      mods: ttmMods(ctx, p, from, range),
      rule: TTM_RANGE_RULE,
      outcome: (n, m) => {
        if (n === 1) return "fumble";
        if (n !== 6 && clampD6(n + m) <= 1) return "fumble";
        return d6Success(n, pa, m) ? "superb" : "subpar";
      },
      outcomeKey: `ttm${pa}`,
      isSuccess: (o) => o === "superb",
      teamReroll: true,
      proAllowed: true,
      onFail: "Subpar Throw (landing \u22121) or Fumbled Throw",
      at: target
    });
    quality = res.outcome;
  }
  if (quality === "fumble" && kick) {
    ctx.emit("status", `Fumbled kick! ${label(thrown)} is hurt instead of flying.`, KTM_RULE, { playerId: thrown.id });
    const at = { ...thrown.pos };
    injuryRoll(ctx, thrown, [], false, { stunnedAsKO: true });
    if (carried && (thrown.location !== "pitch" || thrown.stance !== "standing")) {
      s.ball = { kind: "ground", pos: at };
      ctx.emit("ball", `The ball bounces from ${fmt(at)}.`, R.scatter);
      ctx.setTurnover(`${label(thrown)} lost the ball`, KTM_RULE);
      bounce(ctx, at);
    }
    act.over = true;
    if (ctx.turnover) throw new ActionStop("ktm fumble");
    return;
  }
  const start = thrown.pos;
  thrown.location = "reserves";
  thrown.pos = null;
  let flight;
  let swooped = false;
  if (quality === "fumble") {
    ctx.emit("status", `Fumbled Throw! ${label(thrown)} is dropped and bounces from ${fmt(from)}.`, TTM_RANGE_RULE);
    const r = ctx.roll({ dice: [8], interpret: ([d2]) => scatterPath(from, [d2]), cacheKey: `bounce|${from.x},${from.y}` });
    flight = r.value;
    ctx.emit("move", `${label(thrown)} bounces (D8: ${r.faces[0]}) ${"land" in flight ? `to ${fmt(flight.land)}` : "off the pitch"}.`, R.scatter, { thrown: thrown.id });
  } else if (quality === "superb" && canUse(p, "bullseye")) {
    flight = { land: target };
    ctx.emit("move", `Superb Throw with Bullseye: ${label(thrown)} lands in the target square ${fmt(target)} without scattering.`, { page: 126, title: "Bullseye" }, { thrown: thrown.id });
  } else if (swooped = swoopChoice(ctx, thrown, target)) {
    flight = swoopFlight(ctx, thrown, target, swooped);
  } else {
    const r = ctx.roll({ dice: [8, 8, 8], interpret: (faces) => scatterPath(target, faces), cacheKey: `scatter3|${target.x},${target.y}` });
    flight = r.value;
    ctx.emit(
      "move",
      `${quality === "superb" ? "Superb" : "Subpar"} Throw: ${label(thrown)} scatters (3) from ${fmt(target)} \u2014 D8 ${r.faces.join(", ")} \u2192 ${"land" in flight ? fmt(flight.land) : `off the pitch after ${fmt(flight.last)}`}.`,
      TTM_RANGE_RULE,
      { thrown: thrown.id, d8: r.faces }
    );
  }
  const landMods = [];
  if (quality === "subpar") landMods.push({ label: "Subpar Throw", value: -1 });
  if (quality === "fumble") landMods.push({ label: "Fumbled Throw", value: -1 });
  const reliable = quality === "fumble" && p.star === "deeproot" && !kick;
  if (reliable) ctx.emit("status", `Reliable (Deeproot Strongbranch): ${label(thrown)} bounces but will land safely.`, { page: 197, title: "Deeproot Strongbranch: Reliable" }, { playerId: p.id, star: "deeproot" });
  const landed = land(ctx, thrown, flight, landMods, wasDown, carried, start, 0, !!swooped, reliable);
  if (landed) {
    awardSpp(ctx, thrown, "landing");
    if (quality === "superb") awardSpp(ctx, p, "ttm");
  }
  act.over = true;
}
var KTM_RULE = { page: 130, title: "Kick Team-mate" };
var SWOOP_RULE = { page: 137, title: "Swoop" };
function swoopChoice(ctx, thrown, target) {
  if (!hasSkill(thrown, "swoop") || gated("swoop")) return false;
  const c = ctx.ask({
    type: "swoop",
    team: thrown.team,
    prompt: `${label(thrown)} has Swoop: Scatter as normal, or travel from ${fmt(target)} with the Throw-in Template (D6 direction, D6 squares; the landing may then be re-rolled)?`,
    options: [
      { id: "scatter", label: "Scatter as normal" },
      ...["x-", "x+", "y-", "y+"].map((f) => ({ id: f, label: `Swoop ${FACING_LABEL[f]}` }))
    ],
    rule: SWOOP_RULE
  });
  return c === "scatter" ? false : c;
}
function swoopFlight(ctx, thrown, from, facing) {
  const r = ctx.roll({ dice: [6, 6], interpret: ([d2, n]) => ({ d: d2, n }), cacheKey: "swoop" });
  const dir = facingDirection(facing, r.value.d);
  let cur = from;
  for (let i = 0; i < r.value.n; i++) {
    const next = add(cur, dir);
    if (!inBounds(next)) {
      ctx.emit("move", `${label(thrown)} swoops (D6 ${r.value.d}, ${r.value.n} squares) off the pitch after ${fmt(cur)}.`, SWOOP_RULE, { thrown: thrown.id });
      return { last: cur, off: next };
    }
    cur = next;
  }
  ctx.emit("move", `${label(thrown)} swoops from ${fmt(from)} (D6 ${r.value.d}, ${r.value.n} squares) \u2192 ${fmt(cur)}.`, SWOOP_RULE, { thrown: thrown.id });
  return { land: cur };
}
function intoCrowd(ctx, thrown, last, off, carried) {
  ctx.emit("move", `${label(thrown)} lands in the crowd beyond ${fmt(last)}!`, TTM_RANGE_RULE, { thrown: thrown.id, crowd: true });
  ctx.setTurnover(`${label(thrown)} was thrown into the crowd`, TTM_RANGE_RULE);
  crowdInjury(ctx, thrown);
  if (carried) {
    ctx.emit("ball", `The ball goes into the crowd with ${label(thrown)} and is thrown in.`, R.throwIn);
    throwIn(ctx, last, off);
  }
}
function land(ctx, thrown, flight, landMods, wasDown, carried, start, depth, swooped, safe = false) {
  const s = ctx.s;
  if (depth > 60) throw new Error("Throw Team-mate landing did not terminate");
  if ("off" in flight) {
    intoCrowd(ctx, thrown, flight.last, flight.off, carried);
    return false;
  }
  const sq = flight.land;
  const occ = playerAt(s, sq);
  if (occ) {
    ctx.emit("status", `${label(thrown)} crash-lands on ${label(occ)} in ${fmt(sq)}!`, TTM_LAND_RULE, { thrown: thrown.id, on: occ.id });
    const wasStunned = occ.stance === "stunned";
    const lf = occ.team !== thrown.team && hasSkill(thrown, "lethalFlight") && !gated("lethalFlight") ? thrown : void 0;
    goDown(ctx, occ, { kind: "knockedDown", reason: "crash-landed on by a thrown player", lethalFlight: lf, credit: lf });
    if (wasStunned && occ.location === "pitch" && occ.stance === "prone") occ.stance = "stunned";
    const r = ctx.roll({ dice: [8], interpret: ([d2]) => scatterPath(sq, [d2]), cacheKey: `bounce|${sq.x},${sq.y}` });
    const next = r.value;
    ctx.emit("move", `${label(thrown)} bounces (D8: ${r.faces[0]}) ${"land" in next ? `to ${fmt(next.land)}` : "off the pitch"}.`, R.scatter, { thrown: thrown.id });
    if ("off" in next) {
      intoCrowd(ctx, thrown, next.last, next.off, carried);
      return false;
    }
    if (playerAt(s, next.land)) {
      return land(ctx, thrown, next, landMods, wasDown, carried, start, depth + 1, swooped, safe);
    }
    place(thrown, next.land);
    goDown(ctx, thrown, { kind: "fellOver", reason: "crash landing" });
    if (carried) ctx.setTurnover(`${label(thrown)} was thrown with the ball and did not land safely`, TTM_LAND_RULE);
    return false;
  }
  place(thrown, sq);
  if (safe) {
    thrown.stance = "standing";
    thrown.distracted = false;
    ctx.emit("move", `${label(thrown)} lands safely on their feet in ${fmt(sq)} (Reliable, no landing roll).`, { page: 197, title: "Deeproot Strongbranch: Reliable" }, { thrown: thrown.id, landed: true });
    if (!carried && s.ball.kind === "ground" && eq(s.ball.pos, sq)) ballDisplacedBy(ctx, thrown);
    if (carried) checkTouchdown(ctx, false);
    return true;
  }
  const m = markersOf(s, sq, thrown.team).length;
  const mods = [...landMods];
  if (m) mods.push({ label: `Marked x${m} in ${fmt(sq)}`, value: -m });
  const res = rollTest(ctx, {
    kind: "landing",
    player: thrown,
    label: `${label(thrown)} lands in ${fmt(sq)}`,
    target: thrown.ag,
    mods,
    rule: TTM_LAND_RULE,
    teamReroll: true,
    proAllowed: false,
    skillReroll: swooped ? { id: "swoop", name: "Swoop", available: true } : void 0,
    onFail: carried ? "Falls Over with the ball \u2014 Turnover" : "Falls Over (no Turnover)",
    autoFail: wasDown ? "was Prone, Stunned or Distracted when thrown" : void 0,
    at: sq
  });
  if (res.success) {
    thrown.stance = "standing";
    thrown.distracted = false;
    ctx.emit("move", `${label(thrown)} lands on their feet in ${fmt(sq)}${thrown.activated ? "" : " and can still be activated this Turn"}.`, TTM_LAND_RULE, { thrown: thrown.id, landed: true });
    if (!carried && s.ball.kind === "ground" && eq(s.ball.pos, sq)) ballDisplacedBy(ctx, thrown);
    if (carried) checkTouchdown(ctx, false);
    return true;
  }
  goDown(ctx, thrown, { kind: "fellOver", reason: "failed to land" });
  if (carried) ctx.setTurnover(`${label(thrown)} was thrown with the ball and did not land safely`, TTM_LAND_RULE);
  void start;
  return false;
}
function place(p, sq) {
  p.location = "pitch";
  p.pos = { ...sq };
}
function vomitTargets(s, p, from = p.pos) {
  return pitchPlayers(s).filter((q) => q.team !== p.team && q.stance === "standing" && !!q.pos && adjacent(q.pos, from));
}

// src/engine/actions.ts
var OFFERED_SPECIALS = ["projectileVomit", "punt", "stab", "breatheFire", "monstrousMouth", "hypnoticGaze", "chainsaw", "bombardier", "kickTeamMate", "ballAndChain"];
function activationBlockReason(s, p) {
  if (s.phase !== "play") return "The game is not in play.";
  if (s.pending) return "Finish the pending decision first.";
  if (p.team !== s.turn.active) return "It is not this team's Turn.";
  if (p.location !== "pitch") return "The player is not on the pitch.";
  if (p.stance === "stunned") return "Stunned players cannot be activated (p.39).";
  const act = s.turn.activation;
  if (act && act.playerId === p.id && !act.over) return null;
  if (p.activated) return "This player has already been activated this Turn.";
  if (p.hexed && p.hexed.half === s.turn.half && p.hexed.turn === s.teams[p.team].turn) return "Baleful Hex (Estelle la Veneaux, p.198): this player cannot be activated this Turn.";
  const bad = p.skills.find((sk4) => BLOCKS_ACTIVATION.includes(sk4.id) && gated(sk4.id));
  if (bad) return `Not available yet: ${SKILL_BY_ID[bad.id]?.name ?? bad.id} (p.${SKILL_BY_ID[bad.id]?.page}) \u2014 this player cannot be activated in this version.`;
  return null;
}
function actionOptions(s, p) {
  usePitch(s);
  const base = activationBlockReason(s, p);
  const act = s.turn.activation;
  const continuing = !!act && act.playerId === p.id && !act.over;
  const res = [];
  const bnc = hasSkill(p, "ballAndChain") && !gated("ballAndChain");
  const add2 = (action, lbl, reason, unsupported = false, special) => {
    const charge = continuing ? null : chargeReason(s, p, action, special);
    const chain = bnc && !continuing && lbl !== SPECIALS.ballAndChain.name ? "A Ball & Chain player can only declare the Ball & Chain Special Action (p.124)." : null;
    res.push({ action, label: lbl, enabled: !base && !charge && !reason && !chain && !unsupported, reason: base ?? charge ?? chain ?? reason ?? void 0, unsupported });
  };
  if (continuing) {
    const a = act;
    const names = { move: "Move", blitz: "Blitz", block: "Block", pass: "Pass", handoff: "Hand-off", secure: "Secure the Ball", foul: "Foul", ttm: "Throw Team-mate", special: "Special" };
    add2(a.action, `Continue ${a.special ? SPECIALS[a.special].name : names[a.action]}`, null);
    if (a.special) res[res.length - 1].special = a.special;
    if (a.razzle && !a.razzle.second) {
      for (const x of ["block", "move", "blitz", "pass", "handoff", "secure", "foul"]) {
        if (x === a.action) continue;
        add2(x, `${names[x]} (second Action, Razzle-Dazzle)`, razzleSecondReason(s, p, a, x));
      }
    }
    return res;
  }
  const opp = pitchPlayers(s, other(p.team));
  const standing = p.stance === "standing";
  const adjTargets = opp.filter((q) => q.stance === "standing" && p.pos && adjacent(q.pos, p.pos));
  add2("move", "Move", null);
  let blockReason = null;
  if (!standing && !canUse(p, "jumpUp")) blockReason = "Only Standing players (or Prone players with Jump Up) can declare a Block.";
  else if (!adjTargets.length && startRuleReason(s, p, "block") !== null) blockReason = "No adjacent Standing opposition player to Block.";
  add2("block", "Block", blockReason);
  add2("blitz", "Blitz", s.turn.used.blitz ? "The Blitz Action has already been declared this Turn." : null);
  add2("pass", "Pass", s.turn.used.pass ? "The Pass Action has already been declared this Turn." : passBlockedReasonState(s, p));
  add2("handoff", "Hand-off", s.turn.used.handoff ? "The Hand-off Action has already been declared this Turn." : hasSkill(p, "myBall") ? "My Ball: cannot Hand-off (p.132)." : null);
  add2("secure", "Secure the Ball", s.turn.used.secure ? "The Secure the Ball Action has already been declared this Turn." : secureReason(s, p));
  add2("foul", "Foul", foulTakenReason(s, p) ?? foulReason(s, p));
  if (hasSkill(p, "throwTeamMate")) add2("ttm", "Throw Team-mate", ttmBlockedReason(s, p));
  for (const id of specialsOf(p)) {
    const info = SPECIALS[id];
    if (!OFFERED_SPECIALS.includes(id)) {
      add2("special", info.name, null, true);
      res[res.length - 1].reason = `Not available yet: the ${info.name} Special Action (p.${info.page}) is disabled in this version.`;
      res[res.length - 1].special = id;
      continue;
    }
    let why = null;
    if (info.once && s.turn.used[info.once]) why = `Only one ${info.name} Special Action per Turn (p.${info.page}).`;
    else if (!standing && !info.move) why = `Only a Standing player can use ${info.name}.`;
    else if (info.targeted && !info.move && !(p.pos && specialTargets(s, p, id).length) && startRuleReason(s, p, "special", id) !== null) why = `No Standing opposition player is adjacent (p.${info.page}).`;
    if (!why && !hasSkill(p, info.skill) && p.star === "bilerot") why = startRuleReason(s, p, "special", id);
    add2("special", info.name, why, false, id);
    res[res.length - 1].special = id;
  }
  return res;
}
function foulReason(s, p) {
  const targets = pitchPlayers(s, other(p.team)).filter((q) => q.stance !== "standing");
  if (!targets.length) return "No Prone or Stunned opposition player is on the pitch to foul (p.69).";
  return null;
}
function passBlockedReasonState(s, p) {
  const ctxLike = { s };
  return passBlockedReason(ctxLike, p);
}
function secureReason(s, p) {
  if (s.ball.kind !== "ground") return "The ball must be loose on the ground (p.59).";
  if (p.keywords.some((k) => k.toLowerCase() === "big guy")) return "Big Guy players cannot declare Secure the Ball (p.51).";
  if (hasSkill(p, "unsteady")) return "Unsteady: cannot declare Secure the Ball (p.138).";
  const ball = s.ball.pos;
  const near = pitchPlayers(s, other(p.team)).find((q) => hasTackleZone(q) && dist(q.pos, ball) <= 2);
  if (near) return `${label(near)} (Standing, not Distracted) is within 2 squares of the ball (p.59).`;
  return null;
}
function runInput(ctx, input, opts) {
  try {
    resolveInput(ctx, input);
    ctx.completed = !ctx.turnover && !ctx.touchdown;
  } catch (e) {
    if (!(e instanceof ActionStop)) throw e;
  }
  if (opts.preview) return;
  const s = ctx.s;
  if (s.match?.pendingPhase?.type === "charge" && s.phase === "play") {
    if (ctx.turnover) {
      endCharge(ctx, "a selected player went down");
      return;
    }
    const act0 = s.turn.activation;
    if (act0 && input.kind === "playerAction") {
      const p = findPlayer(s, act0.playerId);
      const done = act0.over || !p || p.location !== "pitch" || p.stance !== "standing" || act0.action === "move" && p && act0.maUsed >= p.ma && act0.rushesUsed >= maxRushes(p) || !!p && bloodlustSettled(s, p, act0);
      if (done) endActivation(ctx);
    }
    const ph = s.match.pendingPhase;
    if (ph.type === "charge" && !s.turn.activation && ph.activated.length >= ph.max) endCharge(ctx, `all ${ph.max} selected players have been activated`);
    return;
  }
  if (ctx.touchdown) {
    if (s.turn.activation) s.turn.activation = null;
    finishDrive(ctx);
    return;
  }
  if (ctx.turnover) {
    endTurn(ctx, "turnover");
    return;
  }
  const act = s.turn.activation;
  if (act && input.kind === "playerAction") {
    const p = findPlayer(s, act.playerId);
    const razzleOpen = !!act.razzle && !act.razzle.second;
    const done = act.over || !p || p.location !== "pitch" || p.stance !== "standing" || !razzleOpen && act.action === "block" && act.blocksDone > 0 || !razzleOpen && act.action === "secure" && act.ballActionDone || !razzleOpen && act.action === "move" && p && act.maUsed >= p.ma && act.rushesUsed >= maxRushes(p) || // Bloodlust (p.125): a hungry player who can no longer reach a Thrall — the Turnover is resolved now.
    bloodlustSettled(s, p, act);
    if (done) {
      try {
        endActivation(ctx);
      } catch (e) {
        if (!(e instanceof ActionStop)) throw e;
      }
      if (ctx.touchdown) finishDrive(ctx);
      else if (ctx.turnover) endTurn(ctx, "turnover");
    }
  }
}
function resolveInput(ctx, input) {
  const s = ctx.s;
  if (isMatchInput(input)) {
    resolveMatchInput(ctx, input);
    return;
  }
  if (input.kind === "wizard") {
    castWizard(ctx, input);
    return;
  }
  if (s.phase !== "play") throw new IllegalAction("The game is not in play (touchdown, end of half or setup).");
  switch (input.kind) {
    case "endActivation":
      endActivation(ctx);
      return;
    case "forgo": {
      const p = getPlayer(s, input.playerId);
      if (p.team !== s.turn.active || p.activated) throw new IllegalAction("This player cannot forego an activation now.");
      forgo(ctx, p);
      return;
    }
    case "endTurn":
      if (s.match?.pendingPhase?.type === "charge") {
        if (s.turn.activation) endActivation(ctx);
        endCharge(ctx, "the kicking coach ends the Charge");
        return;
      }
      endTurn(ctx, "voluntary");
      return;
    case "playerAction":
      resolvePlayerAction(ctx, input);
      return;
  }
}
function resolvePlayerAction(ctx, input) {
  const s = ctx.s;
  const p = getPlayer(s, input.playerId);
  let act = s.turn.activation;
  const initialTarget = input.blockTarget ? findPlayer(s, input.blockTarget) : void 0;
  const targetWasStanding = !!initialTarget && initialTarget.team !== p.team && initialTarget.location === "pitch" && initialTarget.stance === "standing";
  let activationChangedTarget = false;
  if (act && act.playerId !== p.id) {
    endActivation(ctx);
    if (ctx.turnover || ctx.touchdown) throw new ActionStop("turnover");
    act = null;
  }
  const why = activationBlockReason(s, p);
  if (why) throw new IllegalAction(why);
  const dm = input.desperate;
  if (dm) {
    const reason = desperateInputReason(s, p, input);
    if (reason) throw new IllegalAction(reason);
  }
  if (act && act.action !== input.action && act.razzle && !act.razzle.second) {
    const r2 = razzleSecondReason(s, p, act, input.action);
    if (r2) throw new IllegalAction(r2);
    beginRazzleSecond(ctx, p, act, input);
  }
  if (act && act.action !== input.action) throw new IllegalAction(`This player already declared a ${act.action} Action.`);
  if (!act) {
    const declWhy = declarationReason(s, p, input);
    if (declWhy) throw new IllegalAction(declWhy);
    if (input.action === "blitz") {
      if (!input.blitzTarget) throw new IllegalAction("A Blitz must declare its target (p.64).");
      const t = findPlayer(s, input.blitzTarget);
      if (!t || t.team === p.team || t.location !== "pitch" || t.stance !== "standing") throw new IllegalAction("The Blitz target must be a Standing opposition player.");
    }
    if (input.starRule) {
      const sr = startRuleReason(s, p, input.action, input.special);
      if (sr) throw new IllegalAction(sr);
      if (input.starTarget && !startRuleTargets(s, p).some((q) => q.id === input.starTarget)) throw new IllegalAction("The chosen player cannot be the target of this Star Player rule now.");
    } else if (input.starTarget) throw new IllegalAction("A Star Player rule target needs starRule.");
    act = startActivation(ctx, p, input.action, input.blitzTarget, input.special ?? (input.vomitTarget ? "projectileVomit" : void 0));
    if (dm === "razzleDazzle") {
      act.razzle = { first: input.action };
      spendDesperate(ctx, p.team, "razzleDazzle", `${label(p)} may declare a second, different Action this activation (not two that both contain a Move).`);
    }
    if (dm === "grudgeMatch") {
      act.grudge = true;
      spendDesperate(ctx, p.team, "grudgeMatch", `${label(p)} may Foul even though the team already declared a Foul this Turn, and cannot be Sent-off for it.`);
    }
    if (!activationTraits(ctx, p, act)) throw new ActionStop("activation roll failed");
    activationChangedTarget = targetWasStanding && !!initialTarget && (initialTarget.stance !== "standing" || initialTarget.location !== "pitch");
    if (input.starRule && !["maple", "nobbla", "bilerot", "cindy"].includes(p.star ?? "")) useStartRule(ctx, p, act, { target: input.starTarget });
    if (p.rooted && input.path.length) {
      ctx.emit("status", `${label(p)} is Rooted and cannot move: the planned move is not made (the activation continues).`, { page: 137, title: "Take Root" }, { playerId: p.id });
      throw new ActionStop("rooted");
    }
  } else if (input.starRule) {
    throw new IllegalAction("A Star Player rule used at the start of an activation must be chosen when the Action is declared.");
  }
  const a = act;
  if (dm === "setPiece" && !a.setPiece) {
    a.setPiece = true;
    spendDesperate(ctx, p.team, "setPiece", `${label(p)}'s Pass is Accurate on any 2+ and is caught on any 2+.`);
  }
  if (p.stance === "prone") {
    if (input.action === "block") {
      if (!canUse(p, "jumpUp")) throw new IllegalAction("A Prone player can only Block with Jump Up.");
      const res = rollTest(ctx, {
        kind: "jumpUp",
        player: p,
        label: `${label(p)} Jump Up to Block`,
        target: p.ag,
        mods: [{ label: "Jump Up", value: 1 }],
        rule: { page: 130, title: "Jump Up" },
        teamReroll: true,
        proAllowed: true,
        onFail: "stays Prone; activation ends"
      });
      if (!res.success) {
        a.over = true;
        ctx.emit("status", `${label(p)} fails to Jump Up and stays Prone; the activation ends.`, { page: 130, title: "Jump Up" });
        throw new ActionStop("jump up failed");
      }
      p.stance = "standing";
      ctx.emit("move", `${label(p)} jumps up to Block.`, { page: 130, title: "Jump Up" });
    } else if (!standUp(ctx, p, a)) {
      throw new ActionStop("failed to stand");
    }
  }
  if (p.stance !== "standing") throw new IllegalAction("The player must be Standing.");
  const spId = input.special ?? (a.action === "special" ? a.special : void 0) ?? (input.vomitTarget ? "projectileVomit" : void 0);
  if (a.action === "special" && a.special && input.special && input.special !== a.special) throw new IllegalAction(`This player declared ${SPECIALS[a.special].name}: it cannot become ${SPECIALS[input.special].name}.`);
  if (input.path.length && a.action === "block") throw new IllegalAction("A Block Action does not include movement.");
  if (input.path.length && a.action === "special" && !(spId && SPECIALS[spId].move)) throw new IllegalAction(`${spId ? SPECIALS[spId].name : "This Special Action"} does not include movement.`);
  if (input.path.length && a.ballActionDone && !canUse(p, "giveAndGo")) throw new IllegalAction("This player cannot move after passing or handing off.");
  if (input.path.length && a.foulDone && !canUse(p, "quickFoul")) throw new IllegalAction("The Foul has been made: the player cannot move any further (p.69).");
  if (input.path.length && a.specialDone && a.action === "special") throw new IllegalAction("The Special Action has been made: no more movement.");
  if (input.leaveBall) {
    if (gated("fumblerooski") || !canUse(p, "fumblerooski")) throw new IllegalAction("Only a player with Fumblerooski can leave the ball behind (p.128).");
    if (a.action !== "move") throw new IllegalAction("Fumblerooski is used during a Move Action (p.128).");
    if (!hasBall(s, p) || !input.path.length) throw new IllegalAction("Fumblerooski: the player must hold the ball and move out of the square (p.128).");
    s.ball = { kind: "ground", pos: { ...p.pos } };
    ctx.emit("ball", `${label(p)} leaves the ball in ${fmt(p.pos)} (Fumblerooski, no Turnover).`, { page: 128, title: "Fumblerooski" }, { to: p.pos });
  }
  input.path.forEach((step, i) => {
    const last = i === input.path.length - 1;
    moveStep(ctx, p, a, step, { noPickup: a.action === "secure" && last });
  });
  switch (a.action) {
    case "blitz": {
      if (input.blockTarget2) throw new IllegalAction("Multiple Block is used with a Block Action, not a Blitz (p.132).");
      const spTarget = input.specialTarget ?? input.vomitTarget;
      if (spId && spTarget) {
        const info = SPECIALS[spId];
        if (!info.blitz || !OFFERED_SPECIALS.includes(spId) || !hasSkill(p, info.skill)) throw new IllegalAction(`${info.name} cannot replace the Block of a Blitz.`);
        if (input.blockTarget) throw new IllegalAction(`Choose either a Block or ${info.name} for the Blitz, not both.`);
        if (spTarget !== a.blitzTarget) throw new IllegalAction("A Blitz can only target its declared target.");
        if (a.blocksDone > 0) throw new IllegalAction("The Blitz has already made its Block.");
        payMovement(ctx, p, a, 1, null, `${info.name} during the Blitz`);
        a.blocksDone = 1;
        performTargetedSpecial(ctx, p, getPlayer(s, spTarget), a, spId, true);
        if (faq2026(s) && spId === "stab" && !ctx.turnover && !ctx.touchdown && p.location === "pitch" && p.stance === "standing") hitAndRun(ctx, p, a);
        break;
      }
      if (input.blockTarget) {
        if (input.blockTarget !== a.blitzTarget) throw new IllegalAction("A Blitz can only Block its declared target.");
        if (a.blocksDone > 0) throw new IllegalAction("The Blitz has already made its Block.");
        const def = getPlayer(s, input.blockTarget);
        if (activationChangedTarget) {
          ctx.emit("note", `${label(def)} is no longer a Standing target after the activation effect: the declared Blitz cannot Block them, but movement may continue.`, R.blitz);
          break;
        }
        const why2 = blockBlockedReason(ctx, p, def);
        if (why2) throw new IllegalAction(why2);
        payMovement(ctx, p, a, 1, null, "Block during the Blitz");
        performBlock(ctx, p, def, { isBlitz: true, declaredBlock: false }, a);
      }
      break;
    }
    case "block": {
      if (input.starRule && p.star === "maple") {
        const targets = startRuleTargets(s, p);
        const given = input.blockTarget ? targets.find((q) => q.id === input.blockTarget) : void 0;
        if (input.blockTarget && !given) throw new IllegalAction("Vicious Vines: the target must be a Standing opposition player exactly 2 squares away.");
        const def2 = given ?? chooseStarTarget(ctx, p, "choose the Standing opposition player 2 squares away to Block (no Follow-up).", targets);
        spendStar(ctx, p, `${label(p)} Blocks ${label(def2)} from 2 squares away (no Follow-up).`);
        performBlock(ctx, p, def2, { isBlitz: false, declaredBlock: true, reach: true }, a);
        a.over = true;
        break;
      }
      if (!input.blockTarget) throw new IllegalAction("Choose a target for the Block.");
      let def = getPlayer(s, input.blockTarget);
      if (activationChangedTarget && !input.blockTarget2) {
        const targets = pitchPlayers(s, other(p.team)).filter((q) => !blockBlockedReason(ctx, p, q));
        if (!targets.length) {
          a.over = true;
          ctx.emit("note", `${label(p)} has no Standing opponent to Block after the activation effect; the activation ends without another Block.`, R.block);
          break;
        }
        def = chooseStarTarget(ctx, p, "the activation effect removed the planned target. Choose a Standing opponent to Block.", targets);
      }
      if (input.blockTarget2) {
        if (gated("multipleBlock") || !canUse(p, "multipleBlock")) throw new IllegalAction("Only a player with Multiple Block can Block two players (p.132).");
        performMultipleBlock(ctx, p, def, getPlayer(s, input.blockTarget2), a);
        a.over = true;
        break;
      }
      performBlock(ctx, p, def, { isBlitz: false, declaredBlock: true }, a);
      if (a.starFlags?.includes("twoBlocks") && p.location === "pitch" && p.stance === "standing" && !ctx.turnover) {
        const next = pitchPlayers(s, other(p.team)).filter((q) => q.stance === "standing" && !!q.pos && !!p.pos && adjacent(q.pos, p.pos));
        if (next.length) {
          const d2 = chooseStarTarget(ctx, p, "the second Block Action: choose its target.", next);
          a.blocksDone = 0;
          a.starFlags = a.starFlags.filter((f) => f !== "twoBlocks");
          performBlock(ctx, p, d2, { isBlitz: false, declaredBlock: true }, a);
        }
      }
      bilerotAfterBlock(ctx, p, a, (q) => performTargetedSpecial(ctx, p, q, a, "projectileVomit", false));
      a.over = !(a.razzle && !a.razzle.second);
      break;
    }
    case "foul": {
      if (!input.foulTarget) break;
      if (a.foulDone) throw new IllegalAction("This player has already made their Foul (p.69).");
      if (input.useChainsaw && gated("chainsaw")) throw new IllegalAction("The chainsaw cannot be used for a Foul in this version.");
      performFoul(ctx, p, getPlayer(s, input.foulTarget), a, { chainsaw: !!input.useChainsaw });
      break;
    }
    case "pass":
      if (input.passTarget) performPass(ctx, p, input.passTarget, !!input.hailMary, a);
      break;
    case "handoff":
      if (input.handoffTarget) performHandoff(ctx, p, getPlayer(s, input.handoffTarget), a);
      break;
    case "secure":
      secureTheBall(ctx, p, a);
      break;
    case "ttm":
      if (input.throwTarget && input.thrownPlayerId) performThrowTeamMate(ctx, p, input.thrownPlayerId, input.throwTarget, a);
      else if (input.throwTarget || input.thrownPlayerId) throw new IllegalAction("Choose both the team-mate to throw and the target square.");
      break;
    case "special": {
      if (!spId) throw new IllegalAction("Choose which Special Action to perform.");
      const info = SPECIALS[spId];
      const bilerot = spId === "projectileVomit" && p.star === "bilerot";
      if (!hasSkill(p, info.skill) && !bilerot) throw new IllegalAction(`This player cannot perform ${info.name}.`);
      const target = input.specialTarget ?? input.vomitTarget ?? (bilerot && input.starRule ? chooseStarTarget(ctx, p, "choose the Standing opponent next to Bilerot to vomit on.", startRuleTargets(s, p)).id : void 0);
      if (input.starRule && p.star === "nobbla" && spId === "chainsaw") {
        const targets = startRuleTargets(s, p);
        const given = target ? targets.find((q2) => q2.id === target) : void 0;
        if (target && !given) throw new IllegalAction("Kick 'em While They're Down!: the target must be a Prone or Stunned opposition player next to Nobbla.");
        const q = given ?? chooseStarTarget(ctx, p, "choose the Prone or Stunned opposition player for the Chainsaw Attack.", targets);
        spendStar(ctx, p, `${label(p)} uses the Chainsaw Attack on the fallen ${label(q)} (not a Foul).`);
        performTargetedSpecial(ctx, p, q, a, "chainsaw", false, true);
        break;
      }
      if (bilerot && info.targeted && target) {
        if (!starReady(s, p, "bilerot")) throw new IllegalAction("Putrid Regurgitation has been used this half.");
        spendStar(ctx, p, "Projectile Vomit (once per half).");
      }
      if (info.targeted) {
        if (target) performTargetedSpecial(ctx, p, getPlayer(s, target), a, spId, false);
        else if (!info.move) throw new IllegalAction(`Choose the player to use ${info.name} on.`);
      } else if (spId === "bombardier") {
        if (!input.bombTarget) throw new IllegalAction("Choose the target square for the bomb.");
        const cindy = !!input.starRule && p.star === "cindy";
        if (cindy) spendStar(ctx, p, `${label(p)} will throw two bombs this activation (then D6 1-3: Sent-off).`);
        performThrowBomb(ctx, p, input.bombTarget, !!input.hailMary, a);
        if (cindy) cindySecondBomb(ctx, p, a);
      } else if (spId === "punt") {
        if (input.facing) performPunt(ctx, p, input.facing, a);
      } else if (spId === "kickTeamMate") {
        if (input.throwTarget && input.thrownPlayerId) performThrowTeamMate(ctx, p, input.thrownPlayerId, input.throwTarget, a, true);
        else if (input.throwTarget || input.thrownPlayerId) throw new IllegalAction("Choose both the team-mate to kick and the target square.");
      } else if (spId === "ballAndChain") {
        if (input.path.length) throw new IllegalAction("A Ball & Chain player moves only with the Throw-in Template (p.124).");
        if (!input.facing) throw new IllegalAction("Choose which way the Throw-in Template faces.");
        ballAndChainStep(ctx, p, input.facing, a);
      }
      break;
    }
    default:
      break;
  }
  if (hasBall(s, p)) checkTouchdown(ctx, true);
}
var chooseStarTarget = chooseStarPlayer;
function cindySecondBomb(ctx, p, a) {
  const s = ctx.s;
  if (ctx.turnover || p.location !== "pitch" || p.stance !== "standing" || !p.pos) {
    ctx.emit("note", "All You Can Eat: Cindy cannot throw the second bomb.", { page: 197, title: "Cindy Piewhistle: All You Can Eat" });
    return;
  }
  const targets = bombTargets(s, p).filter((c) => passRangeOk(s, p, c));
  if (targets.length) {
    const id = ctx.ask({ type: "starRule", team: p.team, prompt: "All You Can Eat (Cindy Piewhistle): choose the target square of the second bomb.", options: targets.map((c) => ({ id: `${c.x},${c.y}`, label: fmt(c), square: c })), rule: { page: 197, title: "Cindy Piewhistle: All You Can Eat" }, context: { star: "cindy", pick: true } });
    const [x, y] = id.split(",").map(Number);
    performThrowBomb(ctx, p, { x, y }, false, a);
  }
  if (p.location !== "pitch") return;
  const r = ctx.roll({ dice: [6], interpret: ([n]) => n, cacheKey: "cindy", by: p.team, prefer: (n) => n >= 4 });
  ctx.emit("roll", `All You Can Eat: D6 ${r.value} \u2014 ${r.value <= 3 ? "Cindy is Sent-off" : "she stays in the game"}.`, { page: 197, title: "Cindy Piewhistle: All You Can Eat" });
  if (r.value <= 3) {
    const res = sendOff(ctx, p, "All You Can Eat");
    if (res !== "bribed" && p.team === s.turn.active) {
      a.over = true;
      ctx.setTurnover(`${label(p)} was Sent-off (All You Can Eat)`, { page: 197, title: "Cindy Piewhistle: All You Can Eat" });
      throw new ActionStop("sent off");
    }
  }
}
function passRangeOk(s, p, c) {
  return !!p.pos && passInfo({ s }, p, p.pos, c, false) !== null && typeof passInfo({ s }, p, p.pos, c, false) !== "string";
}
function secureTheBall(ctx, p, a) {
  const s = ctx.s;
  if (s.ball.kind !== "ground" || !eq(s.ball.pos, p.pos)) {
    ctx.setTurnover("the Secure the Ball move did not finish on the ball", R.secure);
    a.over = true;
    throw new ActionStop("secure failed");
  }
  const mods = [];
  if (s.weather === "pouringRain") mods.push({ label: "Pouring Rain", value: -1 });
  const res = rollTest(ctx, {
    kind: "secure",
    player: p,
    label: `${label(p)} secures the ball in ${fmt(p.pos)}`,
    target: 2,
    mods,
    rule: R.secure,
    teamReroll: true,
    proAllowed: true,
    onFail: "the ball bounces \u2014 Turnover",
    autoFail: hasSkill(p, "noBall") ? "No Ball" : void 0
  });
  a.ballActionDone = true;
  a.over = !res.success || !(a.razzle && !a.razzle.second);
  if (res.success) {
    s.ball = { kind: "held", playerId: p.id };
    ctx.emit("ball", `${label(p)} secures the ball; the activation ends.`, R.secure, { holder: p.id });
    checkTouchdown(ctx, true);
    return;
  }
  ctx.setTurnover(`${label(p)} failed to secure the ball`, R.secure);
  bounce(ctx, p.pos);
  throw new ActionStop("secure failed");
}
function desperateInputReason(s, p, input) {
  const id = input.desperate;
  if (!id) return null;
  const name = DESPERATE[DESPERATE_NUMBER[id]].name;
  if (!s.match || s.variant !== "sevens") return `${name}: Desperate Measures are a Blood Bowl Sevens Inducement (Spike! 22 p.15).`;
  if (!desperateLeft(s, p.team, id)) return `${name}: the team has not rolled this Desperate Measure, or has used it (once per game).`;
  const act = s.turn.activation;
  const continuing = !!act && act.playerId === p.id && !act.over;
  if (id === "razzleDazzle") {
    if (continuing) return "Razzle-Dazzle is used when the player is activated.";
    if (input.action === "special") return "Razzle-Dazzle: Special Actions are not combined with a second Action in this version.";
  }
  if (id === "grudgeMatch") {
    if (input.action !== "foul") return "Grudge Match is used with a Foul Action.";
    if (continuing) return "Grudge Match is used when the player is activated.";
  }
  if (id === "setPiece") {
    if (input.action !== "pass" || !input.passTarget) return "Set Piece is used with a Pass Action, when the ball is thrown.";
    if (input.hailMary) return "Set Piece: not with a Hail Mary Pass (it can never be Accurate).";
    if (continuing && act?.ballActionDone) return "The Pass has been made.";
  }
  return null;
}
function razzleSecondReason(s, p, act, action) {
  if (!act.razzle) return "No Razzle-Dazzle on this activation.";
  if (act.razzle.second) return "The second Action has been declared.";
  const pair = razzlePairReason(act.razzle.first, action);
  if (pair) return pair;
  if (p.stance !== "standing") return "The player must be Standing.";
  const used = s.turn.used;
  if (action === "blitz" && used.blitz) return "The Blitz Action has already been declared this Turn.";
  if (action === "pass") return used.pass ? "The Pass Action has already been declared this Turn." : passBlockedReasonState(s, p);
  if (action === "handoff" && used.handoff) return "The Hand-off Action has already been declared this Turn.";
  if (action === "secure") return used.secure ? "The Secure the Ball Action has already been declared this Turn." : secureReason(s, p);
  if (action === "foul") return foulTakenReason(s, p) ?? foulReason(s, p);
  if (action === "block" && !pitchPlayers(s, other(p.team)).some((q) => q.stance === "standing" && q.pos && p.pos && adjacent(q.pos, p.pos))) return "No adjacent Standing opposition player to Block.";
  return null;
}
function beginRazzleSecond(ctx, p, act, input) {
  const s = ctx.s;
  const action = input.action;
  if (action === "blitz") {
    const t = input.blitzTarget ? findPlayer(s, input.blitzTarget) : void 0;
    if (!t || t.team === p.team || t.location !== "pitch" || t.stance !== "standing") throw new IllegalAction("A Blitz must declare a Standing opposition player as its target (p.64).");
    act.blitzTarget = t.id;
    s.turn.used.blitz = true;
  }
  if (action === "pass") s.turn.used.pass = true;
  if (action === "handoff") s.turn.used.handoff = true;
  if (action === "secure") s.turn.used.secure = true;
  if (action === "foul") {
    s.turn.used.foul = true;
    s.turn.used.foulBy = [...s.turn.used.foulBy ?? [], p.id];
  }
  act.razzle.second = action;
  act.action = action;
  act.blocksDone = 0;
  const names = { move: "Move", blitz: "Blitz", block: "Block", pass: "Pass", handoff: "Hand-off", secure: "Secure the Ball", foul: "Foul", ttm: "Throw Team-mate", special: "Special" };
  ctx.emit("declare", `${label(p)} declares a second Action (Razzle-Dazzle): ${names[action]}.`, DESPERATE_RULE, { playerId: p.id, action, razzle: true });
}
function declarationReason(s, p, input) {
  const opt = findOption(actionOptions(s, p), input);
  if (opt?.enabled) return null;
  const grudge = input.desperate === "grudgeMatch" && input.action === "foul" && !!opt && !activationBlockReason(s, p) && foulTakenReason(s, p) !== null && !foulReason(s, p);
  return grudge ? null : opt?.reason ?? "This Action cannot be declared.";
}
function findOption(opts, input) {
  return opts.find((o) => o.action === input.action && (input.action !== "special" || o.special === input.special));
}

// src/engine/planner.ts
function faceScore(face, att, def, isBlitz) {
  let f = face;
  if (f === "stumble") f = canUse(def, "dodge") && !canUse(att, "tackle") ? "push" : "pow";
  switch (f) {
    case "pow":
      return 3;
    case "push":
      return 1;
    case "playerDown":
      return -3;
    case "bothDown": {
      const attUp = canUse(att, "block");
      const defUp = canUse(def, "block");
      let sc;
      if (attUp && !defUp) sc = 3;
      else if (attUp && defUp) sc = 0;
      else if (!attUp && !defUp) sc = canUse(att, "wrestle") ? 0.5 : -1.5;
      else sc = canUse(att, "wrestle") ? 0 : -3;
      if (isBlitz && canUse(att, "juggernaut")) sc = Math.max(sc, 1);
      return sc;
    }
    default:
      return 0;
  }
}
function interceptChance(ctx, q, accurate) {
  const s = ctx.s;
  const mod = modSum(interceptMods(ctx, q, accurate));
  const sb = starTestBonus(s, q, "intercept");
  const ok = (f) => d6Success(f, q.ag, mod) || !!sb && d6Success(f, q.ag, mod + sb.value);
  const w = testWeights(s, q.team, ok);
  let pr = 0;
  for (let f = 1; f <= 6; f++) if (ok(f)) pr += w ? w[f - 1] : 1 / 6;
  if (starReady(s, q, "scrappa")) {
    const y = d6AtLeastW(2, testWeights(s, q.team, (f) => f >= 2));
    pr = y + (1 - y) * pr;
  }
  return pr;
}
function makeDecider(policy) {
  return (req, ctx) => {
    const ids = req.options.map((o) => o.id);
    const has3 = (id) => ids.includes(id);
    const s = ctx.s;
    switch (req.type) {
      case "reroll": {
        if (req.context && req.context.kind === "blockDice") {
          const pool = req.context.pool;
          const act = s.turn.activation;
          const att = findPlayer(s, req.context.attacker);
          const def = findPlayer(s, req.context.defender);
          if (!att || !def) return "none";
          const isBlitz = act?.action === "blitz";
          const scores = pool.map((f) => faceScore(f, att, def, isBlitz));
          const chooserAtt = req.context.chooser === "attacker";
          const result = chooserAtt ? Math.max(...scores) : Math.min(...scores);
          if (result >= 0) return "none";
          if (policy.useSkillRerolls && has3("veteran")) return "veteran";
          if (policy.useTeamRerolls && has3("team")) return "team";
          if (policy.useTeamRerolls && has3("leader")) return "leader";
          if (policy.useTeamRerolls && has3("mascot")) return "mascot";
          const worst = pool[scores.indexOf(Math.min(...scores))];
          if (chooserAtt) {
            const bad = pool.filter((f, i) => scores[i] < 0).sort();
            if (bad.length && has3(`anqi:${bad.join("+")}`)) return `anqi:${bad.join("+")}`;
          }
          if (has3(`star1:${worst}`)) return `star1:${worst}`;
          if (has3("brawler") && worst === "bothDown") return "brawler";
          if (has3("hatred") && worst === "playerDown") return "hatred";
          if (policy.usePro && has3(`pro:${worst}`)) return `pro:${worst}`;
          return "none";
        }
        if (policy.useSkillRerolls && has3("skill")) return "skill";
        if (policy.useSkillRerolls && has3("star")) return "star";
        if (policy.usePro && has3("pro")) return "pro";
        if (policy.useSkillRerolls && has3("veteran")) return "veteran";
        if (policy.useTeamRerolls && has3("team")) return "team";
        if (policy.useTeamRerolls && has3("leader")) return "leader";
        if (policy.useTeamRerolls && has3("mascot")) return "mascot";
        return "none";
      }
      case "blockDie": {
        const attId = req.context?.attacker;
        const defId = req.context?.defender;
        const att = findPlayer(s, attId);
        const def = findPlayer(s, defId);
        if (!att || !def) return ids[0];
        const isBlitz = s.turn.activation?.action === "blitz";
        const pref = { pow: 0.03, stumble: 0.02, bothDown: 0.01, push: 0, playerDown: 0 };
        const attChooses = req.team === att.team;
        const scored = req.options.map((o) => ({ id: o.id, sc: faceScore(o.id, att, def, isBlitz) + (attChooses ? pref[o.id] ?? 0 : -(pref[o.id] ?? 0)) }));
        scored.sort((a, b) => attChooses ? b.sc - a.sc : a.sc - b.sc);
        return scored[0].id;
      }
      case "followUp":
        return policy.followUp ? "yes" : "no";
      // Sevens Desperate Measures: previews assume the opponent keeps a Banana Skin; a team's own choices are asked.
      case "desperate":
        if (req.context?.measure === "youDopeStat") return "st";
        if (req.context?.measure === "sportsEspionage") return "use";
        return has3("no") ? "no" : ids[0];
      case "standFirm":
      case "fend":
      case "stripBall":
        return has3("yes") ? "yes" : ids[0];
      case "taunt":
        return "no";
      case "wrestle": {
        const act = s.turn.activation;
        const att = act ? findPlayer(s, act.playerId) : void 0;
        if (!att) return "no";
        if (req.team === att.team) return canUse(att, "block") ? "no" : "yes";
        return canUse(att, "block") ? "yes" : "no";
      }
      case "juggernaut": {
        const act = s.turn.activation;
        const att = act ? findPlayer(s, act.playerId) : void 0;
        return att && canUse(att, "block") ? "both" : "push";
      }
      case "mightyBlow":
      case "armBar":
      case "dirtyPlayer":
      case "lethalFlight":
        if (has3("armour")) return req.context?.breaks ? "armour" : "save";
        return has3("use") ? "use" : ids[0];
      case "interceptor": {
        const cands = req.options.filter((o) => o.id !== "none");
        if (!cands.length) return "none";
        const accurate = req.context?.accurate !== false;
        let best = cands[0].id;
        let bestP = -1;
        for (const o of cands) {
          const q = findPlayer(s, o.id);
          if (!q) continue;
          const pr = interceptChance(ctx, q, accurate);
          if (pr > bestP) {
            bestP = pr;
            best = o.id;
          }
        }
        return best;
      }
      case "divingTackle":
      case "tentacles":
      case "shadowing":
        return ids.find((i) => i !== "none") ?? "none";
      case "breakTackle":
        return "use";
      case "hitAndRun":
        return "stay";
      case "skill":
        return req.context?.skill === "sidestep" ? "yes" : "no";
      case "safePairOfHands":
        return ids[0];
      case "starRule":
        if (req.context?.star === "barik" && typeof req.context.best === "string" && has3(req.context.best)) return req.context.best;
        if (req.context?.star === "zzharg" && req.context.pick) {
          const pl = req.options.map((o) => findPlayer(s, o.id)).filter((x) => !!x);
          const theirs = pl.filter((x) => x.team !== req.team).sort((a, b) => a.av - b.av);
          const ours = pl.filter((x) => x.team === req.team).sort((a, b) => b.av - a.av);
          return (theirs[0] ?? ours[0])?.id ?? ids[0];
        }
        if (req.context?.star === "swiftvine" && req.context.pick) {
          const sv = s.players.find((x) => x.star === "swiftvine" && x.team === req.team && x.location === "pitch");
          let best = ids[0];
          let bestN = Infinity;
          for (const o of req.options) {
            const sq = o.square ?? (o.id === "stay" ? sv?.pos ?? void 0 : void 0);
            if (!sq) continue;
            const n = markersOf(s, sq, req.team).filter((x) => x.id !== sv?.id).length;
            if (n < bestN) {
              bestN = n;
              best = o.id;
            }
          }
          return best;
        }
        if (has3("armour")) return req.context?.breaks ? "armour" : has3("save") ? "save" : "no";
        if (has3("use")) return req.context?.helps ? "use" : has3("no") ? "no" : ids[ids.length - 1];
        return ids[0];
      default:
        return ids[0];
    }
  };
}
var POLICY_ASSUMPTIONS = [
  "Re-rolls: a failed roll is re-rolled with a skill first (Dodge, Sure Feet, Sure Hands, Catch, Pass), then Pro, then a Team/Leader Re-roll (when that column allows team re-rolls). You still choose every re-roll during execution.",
  "Block dice: the choosing coach takes the result that is best for them (knock-down without falling > push > nothing > both down > player down), taking Block, Dodge, Tackle, Wrestle and Juggernaut into account. The attacker re-rolls block dice only when every result is bad for them.",
  "Pushes: the first listed push square is assumed (you pick the real one during execution). The defender uses Stand Firm, Fend and Sidestep; Taunt is not used.",
  "Mighty Blow / Arm Bar: applied to the Armour Roll only if that breaks the armour, otherwise to the Injury Roll.",
  "Opponents always use Diving Tackle, Tentacles and Shadowing when able, and always attempt the most likely Interception.",
  "Casualty and Regeneration rolls are not explored in previews: they do not change anything else during the Turn.",
  "Fouls: a Sent-off fouler always Argues the Call; Dirty Player is used like Mighty Blow; Lone Fouler re-rolls a failed Armour Roll.",
  "Targets of a Block: previews assume Trickster and Dump-off are not used and Saboteur is always rolled; Pile Driver is not used (you choose during execution).",
  "On the Ball: previews of a Pass assume the opponents do not move with On the Ball (if they do, the Passing modifiers are recomputed before the roll).",
  "Throw Team-mate: previews assume a thrown player with Swoop Scatters as normal; Lethal Flight is used like Mighty Blow. A Punt with Kick is not re-rolled.",
  "Throw Bomb: outcomes less likely than 1 in 10,000 are not explored (shown as not explored); a player who catches the bomb throws it at the square worst for the other team.",
  "Star Players: a rule that helps is used (Griff's +1 after the roll, Puggy's / Ripper's re-roll after the skill re-rolls, Guffle's Quick Bite after a catch next to him, the ball chains included); Barik's Blast It! re-rolls the scatter dice that give his team the best chance of ending with the ball."
];
function stripped(s) {
  return cloneState({ ...s, log: [], pending: null });
}
var FrameHeap = class {
  constructor() {
    this.a = [];
  }
  get size() {
    return this.a.length;
  }
  push(f) {
    const a = this.a;
    a.push(f);
    let i = a.length - 1;
    while (i > 0) {
      const p = i - 1 >> 1;
      if (a[p].p >= a[i].p) break;
      [a[p], a[i]] = [a[i], a[p]];
      i = p;
    }
  }
  pop() {
    const a = this.a;
    if (!a.length) return void 0;
    const top = a[0];
    const last = a.pop();
    if (a.length) {
      a[0] = last;
      let i = 0;
      for (; ; ) {
        const l = 2 * i + 1;
        const r = l + 1;
        let m = i;
        if (l < a.length && a[l].p > a[m].p) m = l;
        if (r < a.length && a[r].p > a[m].p) m = r;
        if (m === i) break;
        [a[m], a[i]] = [a[i], a[m]];
        i = m;
      }
    }
    return top;
  }
  mass() {
    return this.a.reduce((s, f) => s + f.p, 0);
  }
};
function enumerate(base, input, policy, threshold, maxLeaves, onLeaf, wrapDecider) {
  const illegal = {};
  const heap = new FrameHeap();
  heap.push({ path: [], p: 1 });
  let unresolved = 0;
  let unresolvedTurnover = 0;
  let leaves = 0;
  let explored = 0;
  const decider = wrapDecider ? wrapDecider(makeDecider(policy)) : makeDecider(policy);
  const pushFrame = (f) => heap.push(f);
  let cur = null;
  const active2 = base.turn.active;
  const turnedOver = (c) => !!c && !!c.turnover && c.touchdown?.team !== active2;
  const pruned = (pp) => {
    unresolved += pp;
    if (turnedOver(cur)) unresolvedTurnover += pp;
  };
  while (heap.size) {
    if (leaves >= maxLeaves) {
      unresolved += heap.mass();
      break;
    }
    const frame = heap.pop();
    const work = cloneState(base);
    const src = new EnumDice(frame, pushFrame, threshold, pruned);
    const ctx = new Ctx(work, src, "plan", [], policy, decider);
    cur = ctx;
    try {
      runInput(ctx, input, { preview: true });
    } catch (e) {
      if (e instanceof PruneSignal) {
        unresolved += e.p;
        if (turnedOver(ctx)) unresolvedTurnover += e.p;
        continue;
      }
      if (e instanceof IllegalAction || e instanceof NeedDecision) {
        unresolved += src.p;
        const msg = e instanceof IllegalAction ? e.message : "an unanswered decision";
        illegal[msg] = (illegal[msg] ?? 0) + src.p;
        continue;
      }
      throw e;
    }
    leaves++;
    explored += src.p;
    onLeaf({ p: src.p, ctx, path: src.path.slice() });
  }
  return { unresolved, unresolvedTurnover, leaves, explored, illegal };
}
function emptySummary() {
  return {
    explored: 0,
    unresolved: 0,
    leaves: 0,
    pCompleted: 0,
    pTurnover: 0,
    pTouchdownActive: 0,
    pTouchdownOpp: 0,
    pActorDown: 0,
    pActorRemoved: 0,
    pActorFell: 0,
    pTargetDown: 0,
    pTargetRemoved: 0,
    pTargetKO: 0,
    pTargetCas: 0,
    pTargetArmourBroken: 0,
    pTargetPushed: 0,
    pTargetCrowd: 0,
    pTarget2Down: 0,
    pIntercepted: 0,
    pActiveHasBall: 0,
    pOppHasBall: 0,
    pBallGround: 0,
    pBallWithReceiver: 0,
    pBallWithActor: 0,
    blockResult: {},
    passResult: {},
    fallSquares: {},
    illegal: {}
  };
}
function summarise(base, input, policy, opts) {
  const sum2 = emptySummary();
  const active2 = base.turn.active;
  const pi = input.kind === "playerAction" ? input : null;
  const actorId = pi?.playerId;
  const targetId = pi?.blockTarget ?? pi?.foulTarget ?? pi?.specialTarget ?? pi?.vomitTarget ?? pi?.handoffTarget;
  const receiverAt = pi?.passTarget;
  const baseReceiver = receiverAt ? base.players.find((q) => q.location === "pitch" && q.pos && eq(q.pos, receiverAt)) : pi?.handoffTarget ? findPlayer(base, pi.handoffTarget) : void 0;
  const r = enumerate(base, input, policy, opts.threshold, opts.maxLeaves, ({ p, ctx }) => {
    const s = ctx.s;
    if (ctx.completed || ctx.touchdown?.team === active2) sum2.pCompleted += p;
    if (ctx.turnover && ctx.touchdown?.team !== active2) sum2.pTurnover += p;
    if (ctx.touchdown) {
      if (ctx.touchdown.team === active2) sum2.pTouchdownActive += p;
      else sum2.pTouchdownOpp += p;
    }
    const actor = actorId ? findPlayer(s, actorId) : void 0;
    if (actor) {
      if (actor.location !== "pitch") sum2.pActorRemoved += p;
      if (actor.location !== "pitch" || actor.stance !== "standing") sum2.pActorDown += p;
    }
    let fell = false;
    let targetBroken = false;
    let pushed = false;
    let crowd = false;
    let blockResult;
    let passResult;
    let intercepted = false;
    for (const e of ctx.events) {
      const d2 = e.data ?? {};
      if (e.type === "status" && d2.playerId === actorId && d2.kind === "fellOver") fell = true;
      if (e.type === "roll" && d2.playerId === targetId && d2.armour === true && d2.broken === true) targetBroken = true;
      if (e.type === "push" && d2.playerId === targetId) {
        pushed = true;
        if (d2.crowd) crowd = true;
      }
      if (e.type === "block" && typeof d2.result === "string" && !blockResult) blockResult = d2.effective;
      if (e.type === "roll" && d2.kind === "pass" && typeof d2.outcome === "string") passResult = d2.outcome;
      if (e.type === "ball" && typeof e.text === "string" && e.text.includes("intercepts the pass")) intercepted = true;
    }
    if (fell) {
      sum2.pActorFell += p;
      const k = actor?.pos ? fmt(actor.pos) : "off pitch";
      sum2.fallSquares[k] = (sum2.fallSquares[k] ?? 0) + p;
    }
    if (targetId) {
      const t = findPlayer(s, targetId);
      if (t && t.team !== active2) {
        if (t.location !== "pitch" || t.stance !== "standing") sum2.pTargetDown += p;
        if (t.location !== "pitch") sum2.pTargetRemoved += p;
        if (t.location === "ko") sum2.pTargetKO += p;
        if (t.location === "cas") sum2.pTargetCas += p;
        if (targetBroken) sum2.pTargetArmourBroken += p;
        if (pushed) sum2.pTargetPushed += p;
        if (crowd) sum2.pTargetCrowd += p;
      }
    }
    if (pi?.blockTarget2) {
      const t2 = findPlayer(s, pi.blockTarget2);
      if (t2 && (t2.location !== "pitch" || t2.stance !== "standing")) sum2.pTarget2Down += p;
    }
    if (blockResult) sum2.blockResult[blockResult] = (sum2.blockResult[blockResult] ?? 0) + p;
    if (passResult) sum2.passResult[passResult] = (sum2.passResult[passResult] ?? 0) + p;
    if (intercepted) sum2.pIntercepted += p;
    const b = s.ball;
    if (b.kind === "held") {
      const h = findPlayer(s, b.playerId);
      if (h?.team === active2) sum2.pActiveHasBall += p;
      else sum2.pOppHasBall += p;
      if (baseReceiver && b.playerId === baseReceiver.id) sum2.pBallWithReceiver += p;
      if (actorId && b.playerId === actorId) sum2.pBallWithActor += p;
    } else if (b.kind === "ground") sum2.pBallGround += p;
  });
  sum2.explored = r.explored;
  sum2.unresolved = r.unresolved;
  sum2.leaves = r.leaves;
  sum2.illegal = r.illegal;
  return sum2;
}
function blockAnalysis(s, step, att, def, isBlitz) {
  const ex = step.extra;
  const faces = ["playerDown", "bothDown", "push", "stumble", "pow"];
  const atLeastOne = {};
  for (const f of faces) atLeastOne[f] = 0;
  const fac = att.team !== def.team ? difficultyFactors(s, att.team) : null;
  const chosen = {};
  const n = ex.dice;
  const total = Math.pow(6, n);
  const idx = Array.from({ length: n }, () => 1);
  const rows = [];
  let wsum = 0;
  for (let k = 0; k < total; k++) {
    let r = k;
    for (let i = 0; i < n; i++) {
      idx[i] = r % 6 + 1;
      r = Math.floor(r / 6);
    }
    const pool = idx.map((v) => v === 1 ? "playerDown" : v === 2 ? "bothDown" : v <= 4 ? "push" : v === 5 ? "stumble" : "pow");
    const vals = pool.map((f) => blockFaceValue(f, att, def, isBlitz));
    const w = fac ? outcomeFactor(fac, ex.chooser === "attacker" ? Math.max(...vals) : Math.min(...vals)) : 1;
    rows.push({ pool, w });
    wsum += w;
  }
  for (const { pool, w } of rows) {
    const p = w / wsum;
    for (const f of new Set(pool)) atLeastOne[f] += p;
    const pref = { pow: 0.03, stumble: 0.02, bothDown: 0.01, push: 0, playerDown: 0 };
    const scores = pool.map((f) => faceScore(f, att, def, isBlitz) + (ex.chooser === "attacker" ? pref[f] : -pref[f]));
    const pick = ex.chooser === "attacker" ? pool[scores.indexOf(Math.max(...scores))] : pool[scores.indexOf(Math.min(...scores))];
    let eff = pick;
    if (pick === "stumble") eff = canUse(def, "dodge") && !canUse(att, "tackle") ? "push" : "pow";
    chosen[eff] = (chosen[eff] ?? 0) + p;
  }
  void BLOCK_FACE_P;
  const faceNotes = {};
  const dodge = canUse(def, "dodge") && !canUse(att, "tackle");
  faceNotes.playerDown = "Attacker Knocked Down \u2192 Turnover";
  faceNotes.bothDown = `${canUse(att, "block") ? "Attacker stays up (Block)" : canUse(att, "wrestle") ? "Attacker may Wrestle (both Placed Prone)" : "Attacker down \u2192 Turnover"}; ${canUse(def, "block") ? "defender stays up (Block)" : "defender down"}${isBlitz && canUse(att, "juggernaut") ? "; Juggernaut: may be a Push" : ""}`;
  faceNotes.push = "Defender Pushed Back";
  faceNotes.stumble = dodge ? "Defender has Dodge \u2192 Push Back" : canUse(def, "dodge") ? "Tackle cancels Dodge \u2192 POW!" : "No Dodge \u2192 POW!";
  faceNotes.pow = "Defender Pushed Back and Knocked Down";
  return { dice: ex.dice, chooser: ex.chooser, attST: ex.attST, defST: ex.defST, offAssists: ex.offAssists, defAssists: ex.defAssists, atLeastOne, chosen, faceNotes };
}
function preflight(state, base, input) {
  if (state.pending) return ["A decision is pending."];
  if (isMatchInput(input)) return ["Match sequence steps (set-up, kick-off, end of Drive) are not planned: they are resolved directly."];
  if (input.kind === "wizard") {
    const why = wizardReason(state, input.team, input);
    return why ? [why] : [];
  }
  if (state.phase !== "play") return ["The game is not in play."];
  if (input.kind !== "playerAction") return [];
  const errors = [];
  const p = findPlayer(base, input.playerId);
  if (!p) return ["Unknown player."];
  const act = base.turn.activation;
  if (!(act && act.playerId === p.id)) {
    const why = declarationReason(base, p, input);
    if (why) return [why];
  }
  if (input.action === "secure" && base.ball.kind === "ground") {
    const bp = base.ball.pos;
    const idx = input.path.findIndex((st) => eq(st.to, bp));
    if (idx !== input.path.length - 1) errors.push("Secure the Ball: the move must end on the ball (and not pass over it earlier).");
  }
  return errors;
}
function trace(base, input, policy) {
  const ctx = new Ctx(cloneState(base), new TraceDice(), "plan", [], policy, makeDecider(policy));
  try {
    runInput(ctx, input, { preview: true });
  } catch (e) {
    if (e instanceof IllegalAction) return { errors: [e.message], ctx };
    throw e;
  }
  return { errors: [], ctx };
}
function validateInput(state, input) {
  usePitch(state);
  if (isMatchInput(input)) {
    const why = matchInputReason(state, input);
    return why ? [why] : [];
  }
  const base = stripped(state);
  const pre = preflight(state, base, input);
  if (pre.length) return pre;
  return trace(base, input, { ...DEFAULT_POLICY }).errors;
}
function planAction(state, input, options = {}) {
  usePitch(state);
  const bomb = input.kind === "playerAction" && input.special === "bombardier";
  const opts = { threshold: options.threshold ?? (bomb ? 1e-4 : 1e-9), maxLeaves: options.maxLeaves ?? (bomb ? 8e3 : 6e4), followUp: options.followUp ?? true };
  const base = stripped(state);
  const res = {
    ok: false,
    errors: [],
    input,
    steps: [],
    withTeamRerolls: null,
    withoutTeamRerolls: null,
    assumptions: [],
    traceEvents: [],
    teamRerollsAvailable: base.teams[base.turn.active].rerolls
  };
  res.errors = preflight(state, base, input);
  if (res.errors.length) return res;
  const act0 = base.turn.activation;
  if (input.kind === "playerAction" && act0 && act0.playerId !== input.playerId && act0.bloodlust === "hungry") {
    const v = findPlayer(base, act0.playerId);
    if (v && v.location === "pitch") {
      const turnover = !biteTargetAdjacent(base, v);
      res.endsHungry = {
        playerId: v.id,
        turnover,
        text: turnover ? `Bloodlust: ${label(v)} has not bitten a Thrall and none is next to them \u2014 ending that activation is a Turnover, so this Action would not be taken. End ${label(v)}'s activation (Turnover), or move them next to a Thrall first.` : `Bloodlust: ${label(v)}'s activation ends first \u2014 you choose to bite the Thrall next to them (or not: Turnover, and this Action is not taken).`
      };
      if (turnover) {
        res.errors = [res.endsHungry.text];
        return res;
      }
    }
  }
  const policy = { ...DEFAULT_POLICY, followUp: opts.followUp };
  const tr = trace(base, input, policy);
  if (tr.errors.length) {
    res.errors = tr.errors;
    return res;
  }
  const traceCtx = tr.ctx;
  res.steps = traceCtx.steps;
  res.traceEvents = traceCtx.events;
  if (input.kind === "playerAction") {
    const p = findPlayer(traceCtx.s, input.playerId);
    if (p?.pos) res.finalSquare = p.pos;
    const bstep = traceCtx.steps.find((st) => st.kind === "block");
    if (bstep) {
      const att = getPlayer(base, input.playerId);
      const def = findPlayer(base, bstep.extra?.defenderId ?? "");
      if (def) res.block = blockAnalysis(base, bstep, att, def, input.action === "blitz");
    }
    if (input.action === "pass" && input.passTarget) res.pass = passPreview(base, traceCtx, input);
  }
  res.withTeamRerolls = summarise(base, input, { ...policy, useTeamRerolls: true }, opts);
  const trAvail = base.teams[base.turn.active].rerolls > 0 || base.teams[base.turn.active].leaderReroll;
  res.withoutTeamRerolls = trAvail ? summarise(base, input, { ...policy, useTeamRerolls: false }, opts) : res.withTeamRerolls;
  res.assumptions = POLICY_ASSUMPTIONS.slice();
  if (!opts.followUp) res.assumptions.push("Follow-up: you do not follow up after a push.");
  else res.assumptions.push("Follow-up: you follow up after a push (unless Fend stops it).");
  const bad = /* @__PURE__ */ new Set([...Object.keys(res.withTeamRerolls.illegal), ...Object.keys(res.withoutTeamRerolls.illegal)]);
  if (bad.size) {
    res.errors = [...bad].map((m) => `In some dice outcomes the rest of this plan would be illegal: ${m}`);
    return res;
  }
  res.ok = true;
  return res;
}
function passPreview(base, traceCtx, input) {
  const p = findPlayer(traceCtx.s, input.playerId);
  if (!p?.pos || !input.passTarget || p.pa === null) return void 0;
  const ctx = new Ctx(cloneState(traceCtx.s), new TraceDice(), "plan", [], DEFAULT_POLICY, null);
  const info = passInfo(ctx, p, p.pos, input.passTarget, !!input.hailMary);
  if (typeof info === "string") return void 0;
  const setPiece = input.desperate === "setPiece" && !input.hailMary;
  const m = setPiece ? 0 : modSum(info.mods);
  const pa = setPiece ? 2 : p.pa;
  const safe = canUse(p, "safePass");
  let acc = 0;
  let inacc = 0;
  let fum = 0;
  const outcome = (n) => {
    if (n === 1) return safe ? "safe" : "fumble";
    if (setPiece) return "accurate";
    const mod = Math.max(1, Math.min(6, n + m));
    if (n !== 6 && mod <= 1) return "fumble";
    if (n === 6 || mod >= pa) return input.hailMary ? "inaccurate" : "accurate";
    return "inaccurate";
  };
  const wp = testWeights(ctx.s, p.team, (n) => outcome(n) === (input.hailMary ? "inaccurate" : "accurate"));
  const pf = (n) => wp ? wp[n - 1] : 1 / 6;
  for (let n = 1; n <= 6; n++) {
    const o = outcome(n);
    if (o === "fumble") fum += pf(n);
    else if (o === "accurate") acc += pf(n);
    else if (o === "inaccurate") inacc += pf(n);
  }
  const ints = input.hailMary ? [] : interceptors(ctx, p, p.pos, input.passTarget).map((q) => {
    const im = modSum(interceptMods(ctx, q, true));
    return { id: q.id, label: label(q), p: d6SuccessProbW(q.ag, im, testWeights(ctx.s, q.team, (f) => d6Success(f, q.ag, im))) };
  });
  void base;
  return {
    range: input.hailMary ? "Hail Mary (Long Bomb)" : RANGE_LABEL[passRange(p.pos, input.passTarget) ?? "quick"],
    target: input.passTarget,
    pa: p.pa,
    mods: info.mods,
    pAccurate: acc,
    pInaccurate: inacc,
    pFumble: fum,
    interceptorsIfAccurate: ints,
    hailMary: !!input.hailMary
  };
}
function exploreOutcomes(state, input, options, visit) {
  usePitch(state);
  const base = stripped(state);
  const errors = preflight(state, base, input);
  if (errors.length) return { ok: false, errors, explored: 0, unresolved: 1, unresolvedTurnover: 0, leaves: 0 };
  const policy = { ...DEFAULT_POLICY, followUp: options.followUp ?? true, useTeamRerolls: options.useTeamRerolls ?? true };
  const tr = trace(base, input, policy);
  if (tr.errors.length) return { ok: false, errors: tr.errors, explored: 0, unresolved: 1, unresolvedTurnover: 0, leaves: 0 };
  const active2 = base.turn.active;
  const r = enumerate(
    base,
    input,
    policy,
    options.threshold ?? 1e-9,
    options.maxLeaves ?? 6e4,
    ({ p, ctx, path }) => {
      visit({ p, state: ctx.s, completed: !!ctx.completed || ctx.touchdown?.team === active2, turnover: !!ctx.turnover && ctx.touchdown?.team !== active2, touchdown: ctx.touchdown?.team ?? null, path, run: ctx });
    },
    options.wrapDecider
  );
  const bad = Object.keys(r.illegal);
  if (bad.length) return { ok: false, errors: bad.map((m) => `In some dice outcomes the rest of this plan would be illegal: ${m}`), explored: r.explored, unresolved: r.unresolved, unresolvedTurnover: r.unresolvedTurnover, leaves: r.leaves };
  return { ok: true, errors: [], explored: r.explored, unresolved: r.unresolved, unresolvedTurnover: r.unresolvedTurnover, leaves: r.leaves };
}
function previewDecision(state, req) {
  usePitch(state);
  const ctx = new Ctx(cloneState(state), new TraceDice(), "plan", [], DEFAULT_POLICY, null);
  const id = makeDecider(DEFAULT_POLICY)(req, ctx);
  return req.options.some((o) => o.id === id) ? id : req.options[0].id;
}
var StepPause = class {
  constructor(node) {
    this.node = node;
  }
};
var StepDice = class {
  constructor(path, meta, active2) {
    this.path = path;
    this.meta = meta;
    this.active = active2;
    this.mode = "enumerate";
    this.i = 0;
    this.p = 1;
  }
  take(branches, make) {
    if (this.i < this.path.length) {
      const g = branches[this.path[this.i++]];
      if (!g) throw new Error("Step path mismatch");
      this.p *= g.p;
      return g.value;
    }
    throw new StepPause(make());
  }
  roll(spec) {
    const groups = groupOutcomes(spec);
    const sum2 = groups.reduce((a, g2) => a + g2.p, 0);
    const g = this.take(
      groups.map((x) => ({ p: x.p, value: x })),
      () => ({
        node: "chance",
        p: this.p,
        path: this.path.slice(),
        dice: spec.dice.slice(),
        display: spec.display,
        by: spec.by ?? null,
        unresolved: Math.max(0, 1 - sum2),
        branches: groups.map((x, index) => ({ index, p: x.p, label: x.key.length > 80 ? x.key.slice(0, 77) + "\u2026" : x.key, faces: x.faces.slice() })),
        events: this.meta.events().slice()
      })
    );
    return { faces: g.faces, value: g.value };
  }
  choose(outcomes) {
    const dec = outcomes[0]?.decision;
    if (dec) {
      return this.take(outcomes, () => ({
        node: "decision",
        p: this.p,
        path: this.path.slice(),
        team: dec.team,
        requestId: dec.requestId,
        type: dec.type,
        prompt: dec.prompt,
        defaultIndex: Math.max(0, outcomes.findIndex((o) => o.decision.dflt)),
        branches: outcomes.map((o, index) => {
          const d2 = o.decision;
          return { index, p: 1, label: d2.label, detail: d2.detail, id: d2.id };
        }),
        events: this.meta.events().slice()
      }));
    }
    const sum2 = outcomes.reduce((a, o) => a + o.p, 0);
    return this.take(outcomes, () => ({
      node: "chance",
      p: this.p,
      path: this.path.slice(),
      dice: [],
      by: null,
      unresolved: Math.max(0, 1 - sum2),
      branches: outcomes.map((o, index) => ({ index, p: o.p, label: (JSON.stringify(o.value) ?? String(o.value)).slice(0, 80) })),
      events: this.meta.events().slice()
    }));
  }
};
function stepNode(state, input, path, options = {}) {
  usePitch(state);
  const base = stripped(state);
  const errors = preflight(state, base, input);
  if (errors.length) return { node: "illegal", errors };
  const policy = { ...DEFAULT_POLICY, followUp: options.followUp ?? true, useTeamRerolls: options.useTeamRerolls ?? true };
  const active2 = base.turn.active;
  const control = options.controlTeam ?? active2;
  const baseDecider = makeDecider(policy);
  let ctxRef = null;
  const dice = new StepDice(path, { events: () => ctxRef ? ctxRef.events : [] }, active2);
  const decider = (req, ctx2) => {
    if (!options.controlAll && req.team !== control) return baseDecider(req, ctx2);
    const dflt = baseDecider(req, ctx2);
    const outcomes = req.options.map((o) => ({ key: o.id, p: 1, value: o.id, decision: { requestId: req.id, type: req.type, prompt: req.prompt, team: req.team, label: o.label, detail: o.detail, id: o.id, dflt: o.id === dflt } }));
    return ctx2.dice.choose(outcomes);
  };
  const ctx = new Ctx(cloneState(base), dice, "plan", [], policy, decider);
  ctxRef = ctx;
  try {
    runInput(ctx, input, { preview: true });
  } catch (e) {
    if (e instanceof StepPause) return e.node;
    if (e instanceof IllegalAction) return { node: "illegal", errors: [e.message] };
    if (e instanceof NeedDecision) return { node: "illegal", errors: ["an unanswered decision"] };
    if (e instanceof Error && !/path mismatch/.test(e.message)) return { node: "illegal", errors: [e.message] };
    throw e;
  }
  return {
    node: "terminal",
    p: dice.p,
    path: path.slice(),
    completed: !!ctx.completed || ctx.touchdown?.team === active2,
    turnover: !!ctx.turnover && ctx.touchdown?.team !== active2,
    touchdown: ctx.touchdown?.team ?? null,
    events: ctx.events.slice(),
    state: ctx.s
  };
}

// src/engine/engine.ts
function describeInput(s, input) {
  if (input.kind === "endTurn") return `${s.teams[s.turn.active].name}: End Turn`;
  if (input.kind === "endActivation") {
    const p2 = findPlayer(s, s.turn.activation?.playerId);
    return p2 ? `${label(p2)}: End activation` : "End activation";
  }
  if (input.kind === "forgo") {
    const p2 = findPlayer(s, input.playerId);
    return p2 ? `${label(p2)}: Forego activation` : "Forego activation";
  }
  if (input.kind === "wizard") {
    const t2 = s.teams[input.team].name;
    if (input.spell === "none") return `${t2}: keep the Sports-Wizard`;
    if (input.spell === "fireball") return `${t2}: Sports-Wizard \u2014 Fireball at ${fmt(input.square ?? null)}`;
    const q = findPlayer(s, input.target);
    return `${t2}: Sports-Wizard \u2014 Zap! ${q ? label(q) : input.target}`;
  }
  if (input.kind !== "playerAction") return describeMatchInput(s, input);
  const p = findPlayer(s, input.playerId);
  const who = p ? label(p) : input.playerId;
  const names = { move: "Move", blitz: "Blitz", block: "Block", pass: "Pass", handoff: "Hand-off", secure: "Secure the Ball", foul: "Foul", ttm: "Throw Team-mate", special: "Special" };
  const parts = [`${who} \u2014 ${names[input.action]}`];
  if (input.path.length) parts.push(`move ${input.path.length} square${input.path.length === 1 ? "" : "s"} to ${fmt(input.path[input.path.length - 1].to)}`);
  const t = findPlayer(s, input.blockTarget ?? input.handoffTarget);
  if (input.blockTarget && t) parts.push(`block ${label(t)}`);
  if (input.handoffTarget && t) parts.push(`hand-off to ${label(t)}`);
  if (input.passTarget) parts.push(`${input.hailMary ? "Hail Mary" : "pass"} to ${fmt(input.passTarget)}`);
  const f = findPlayer(s, input.foulTarget);
  if (f) parts.push(`foul ${label(f)}${input.useChainsaw ? " with the chainsaw" : ""}`);
  const sp = findPlayer(s, input.specialTarget ?? input.vomitTarget);
  if (sp) parts.push(`${input.special ?? "projectileVomit"} on ${label(sp)}`.replace("projectileVomit", "Projectile Vomit"));
  if (input.blockTarget2) {
    const t2 = findPlayer(s, input.blockTarget2);
    if (t2) parts.push(`and ${label(t2)} (Multiple Block)`);
  }
  if (input.leaveBall) parts.push("leaving the ball behind (Fumblerooski)");
  return parts.join(", ");
}
function stripForBase(s) {
  const b = cloneState({ ...s, pending: null });
  return b;
}
function forLog(events) {
  return events.map((e) => {
    if (!e.snap) return e;
    const { snap: _snap, ...rest } = e;
    void _snap;
    return rest;
  });
}
function finish(ctx, base, input, plan, decisions) {
  const s = ctx.s;
  ctx.flushDice();
  s.pending = null;
  const outcome = ctx.touchdown ? "touchdown" : ctx.turnover ? "turnover" : ctx.completed ? "completed" : "stopped";
  const entry = {
    id: (base.log[base.log.length - 1]?.id ?? 0) + 1,
    team: base.turn.active,
    turn: base.teams[base.turn.active].turn,
    title: describeInput(base, input),
    plan,
    input,
    events: forLog(ctx.events),
    decisions,
    outcome
  };
  s.log = [...base.log, entry];
  const status = ctx.touchdown ? "touchdown" : ctx.turnover ? "turnover" : "completed";
  return { status, state: s, events: ctx.events };
}
function run(base, input, decisions, plan, original, dice) {
  const work = cloneState(base);
  const src = dice ? dice(work) : new RngDice(work.rng);
  const ctx = new Ctx(work, src, "execute", decisions, DEFAULT_POLICY, null);
  try {
    runInput(ctx, input, { preview: false });
  } catch (e) {
    if (e instanceof NeedDecision) {
      work.pending = { base, input, decisions, request: e.request, events: forLog(ctx.events), plan };
      return { status: "awaitingDecision", state: work, events: ctx.events, decision: e.request };
    }
    if (e instanceof IllegalAction) {
      return { status: "illegal", state: original, events: [], error: e.message };
    }
    if (e instanceof ActionStop) {
    } else {
      throw e;
    }
  }
  return finish(ctx, base, input, plan, decisions);
}
function execute(state, input, plan, dice) {
  if (state.pending) return { status: "illegal", state, events: [], error: "A decision is pending." };
  if (state.phase !== "play" && !isMatchInput(input) && input.kind !== "wizard") return { status: "illegal", state, events: [], error: "The game is not in play." };
  const errors = validateInput(state, input);
  if (errors.length) return { status: "illegal", state, events: [], error: errors.join(" ") };
  const base = stripForBase(state);
  return run(base, input, [], plan, state, dice);
}
function decide(state, choice, dice) {
  const pend = state.pending;
  if (!pend) return { status: "illegal", state, events: [], error: "No decision is pending." };
  if (choice.requestId !== pend.request.id) return { status: "illegal", state, events: [], error: `Decision ${choice.requestId} does not match the pending request ${pend.request.id}.` };
  const opt = pend.request.options.find((o) => o.id === choice.optionId);
  if (!opt) return { status: "illegal", state, events: [], error: `Unknown option ${choice.optionId}.` };
  const rec = { requestId: pend.request.id, team: pend.request.team, prompt: pend.request.prompt, optionId: opt.id, label: opt.label };
  return run(pend.base, pend.input, [...pend.decisions, rec], pend.plan, state, dice);
}
function lastEvents(state) {
  if (state.pending) return state.pending.events;
  return state.log[state.log.length - 1]?.events ?? [];
}

// src/engine/fingerprint.ts
var BUILD_FINGERPRINT = {
  "version": "0.2.0",
  "engineHash": "8ffd4c86ed2f6f0471fac87b8493e04a1bfeec216a7ebf511702835bb9f9a84d",
  "rulesHash": "ef05264a2b584e775696b0bb3a6ce0a8e308b9eb585e73236dd8ff20da7610cf",
  "apiHash": "a9a1ef052c4ae583eb768db306f34be82a5d9d94a56477c2b1e85d4d71833278",
  "saveFormatVersion": 2,
  "aiApiVersion": "2.0"
};

// src/engine/serialize.ts
function newMatchId() {
  const r = () => Math.floor(Math.random() * 4294967296).toString(36);
  return `m-${Date.now().toString(36)}-${r()}${r()}`;
}
function legacyMatchId(state) {
  const first = state.log?.[0] ? JSON.stringify([state.log[0].input, state.log[0].events?.[0]?.text ?? ""]) : "";
  let h = 2166136261;
  for (const c of `${state.rng?.seed}|${state.title ?? ""}|${first}`) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0;
  return `legacy-${state.rng?.seed ?? 0}-${h.toString(36)}`;
}
function toSaveFile(state, name, notes, opts = {}) {
  const copy = JSON.parse(JSON.stringify(state));
  const meta = {
    saveFormatVersion: 2,
    matchId: opts.matchId ?? (state.match ? legacyMatchId(state) : newMatchId()),
    displayName: name,
    createdAt: opts.createdAt ?? (/* @__PURE__ */ new Date()).toISOString(),
    matchFormat: state.match ? state.variant === "sevens" ? "sevens" : "standard" : "practice",
    engineVersion: BUILD_FINGERPRINT.version,
    engineHash: BUILD_FINGERPRINT.engineHash,
    rulesHash: BUILD_FINGERPRINT.rulesHash,
    aiApiVersion: BUILD_FINGERPRINT.aiApiVersion,
    ...opts.initial ? { initial: JSON.parse(JSON.stringify(opts.initial)) } : {},
    ...opts.coachContext ? { coachContext: JSON.parse(JSON.stringify(opts.coachContext)) } : {}
  };
  return { format: "bloodboard-position", version: 2, name, savedAt: (/* @__PURE__ */ new Date()).toISOString(), notes, state: copy, meta };
}
function checkCompatibility(save) {
  const m = save.meta;
  if (!m) return { rules: "older-format", note: "Saved by Bloodboard V5 or earlier (no rules fingerprint). The position loads; Replay re-executes the recorded history under the current rules and only plays it if it reproduces exactly." };
  const ed = save.state && save.state.rulesEdition;
  if (ed !== void 0 && ed !== "faq2026") return { rules: "different-rules", note: `This file was saved under rules edition "${String(ed)}", which this build does not support. It cannot be opened as a playable game.` };
  if (m.rulesHash === BUILD_FINGERPRINT.rulesHash) return { rules: "same", note: "Saved by the same rules code." };
  return { rules: "different-rules", note: `Saved by engine ${m.engineVersion} whose rules code differs from this build's (${BUILD_FINGERPRINT.version}). The position loads as saved; Replay verifies the history under the current rules before playing it, and stays position-only if it does not reproduce.` };
}
var isObj = (v) => !!v && typeof v === "object" && !Array.isArray(v);
var isInt = (v) => typeof v === "number" && Number.isInteger(v);
function validateState(v) {
  const e = [];
  if (!isObj(v)) return ["state must be an object"];
  if (v.format !== "bloodboard-state") e.push('state.format must be "bloodboard-state"');
  if (v.version !== 1) e.push("state.version must be 1");
  if (v.variant !== void 0 && v.variant !== "standard" && v.variant !== "sevens") e.push('state.variant must be "standard" or "sevens" when present');
  if (v.rulesEdition !== void 0 && v.rulesEdition !== "faq2026") e.push(`state.rulesEdition "${String(v.rulesEdition)}" is not supported by this build (supported: faq2026, or absent for legacy games)`);
  if (!["setup", "play", "touchdown", "halfOver", "pregame", "driveSetup", "kickoff", "fullTime"].includes(v.phase)) e.push("state.phase is invalid");
  if (v.match !== void 0) {
    const m = v.match;
    if (!isObj(m)) e.push("state.match must be an object");
    else {
      if (m.kind !== "league" && m.kind !== "tournament") e.push('state.match.kind must be "league" or "tournament"');
      if (m.half !== 1 && m.half !== 2) e.push("state.match.half must be 1 or 2");
    }
  } else if (["pregame", "driveSetup", "kickoff", "fullTime"].includes(v.phase)) e.push(`state.phase "${v.phase}" needs state.match`);
  if (!["perfect", "verySunny", "pouringRain", "blizzard", "swelteringHeat"].includes(v.weather)) e.push("state.weather is invalid");
  if (v.clock !== void 0) {
    const c = v.clock;
    if (!isObj(c) || !["totalMs", "A", "B"].every((k) => typeof c[k] === "number" && c[k] >= 0)) e.push("state.clock must hold non-negative totalMs, A and B (milliseconds) when present");
  }
  if (!isObj(v.teams) || !isObj(v.teams.A) || !isObj(v.teams.B)) e.push("state.teams.A and .B are required");
  else
    for (const t of ["A", "B"]) {
      const tm = v.teams[t];
      if (!isInt(tm.rerolls) || tm.rerolls < 0) e.push(`teams.${t}.rerolls must be a non-negative integer`);
      if (!isInt(tm.turn) || tm.turn < 0 || tm.turn > 8) e.push(`teams.${t}.turn must be 0-8`);
      if (!isInt(tm.score)) e.push(`teams.${t}.score must be an integer`);
    }
  if (!Array.isArray(v.players)) e.push("state.players must be an array");
  else
    v.players.forEach((p, i) => {
      if (!isObj(p)) {
        e.push(`players[${i}] must be an object`);
        return;
      }
      if (typeof p.id !== "string") e.push(`players[${i}].id must be a string`);
      if (p.team !== "A" && p.team !== "B") e.push(`players[${i}].team must be A or B`);
      for (const k of ["ma", "st", "ag", "av", "number"]) if (!isInt(p[k])) e.push(`players[${i}].${k} must be an integer`);
      if (p.pa !== null && !isInt(p.pa)) e.push(`players[${i}].pa must be an integer or null`);
      if (!["pitch", "reserves", "ko", "cas", "sentOff"].includes(p.location)) e.push(`players[${i}].location is invalid`);
      if (!["standing", "prone", "stunned"].includes(p.stance)) e.push(`players[${i}].stance is invalid`);
      if (p.location === "pitch" && !isObj(p.pos)) e.push(`players[${i}].pos is required on the pitch`);
      if (!Array.isArray(p.skills)) e.push(`players[${i}].skills must be an array`);
      else p.skills.forEach((s) => {
        if (!isObj(s) || typeof s.id !== "string" || !SKILL_BY_ID[s.id]) e.push(`players[${i}] has an unknown skill ${JSON.stringify(s)}`);
      });
    });
  if (!isObj(v.ball) || !["held", "ground", "none"].includes(v.ball.kind)) e.push("state.ball is invalid");
  if (!isObj(v.rng) || !isInt(v.rng.seed) || !isInt(v.rng.counter)) e.push("state.rng must have integer seed and counter");
  if (!isObj(v.turn) || !["A", "B"].includes(v.turn.active)) e.push("state.turn.active must be A or B");
  if (!Array.isArray(v.log)) e.push("state.log must be an array");
  return e;
}
function parseSaveFile(text) {
  let raw;
  try {
    raw = JSON.parse(text);
  } catch (err) {
    return { ok: false, errors: [`Not valid JSON: ${err.message}`] };
  }
  if (!isObj(raw)) return { ok: false, errors: ["The file must contain a JSON object."] };
  const state = raw.format === "bloodboard-position" ? raw.state : raw.format === "bloodboard-state" ? raw : void 0;
  if (!state) return { ok: false, errors: ["This is not a Bloodboard position file."] };
  const errors = validateState(state);
  if (errors.length) return { ok: false, errors };
  const save = raw.format === "bloodboard-position" ? raw : { format: "bloodboard-position", version: 1, name: "Imported position", savedAt: (/* @__PURE__ */ new Date()).toISOString(), state };
  const st = save.state;
  if (!st.options) st.options = { rulerWidth: 1.8 };
  for (const p of st.players) if (!p.usage) p.usage = {};
  return { ok: true, save };
}

// src/engine/analytics.ts
var ANALYTICS_SCHEMA = "match-analytics/1";
var TEAMS = ["A", "B"];
var emptyActions = () => ({ move: 0, blitz: 0, block: 0, pass: 0, handoff: 0, secure: 0, foul: 0, ttm: 0, special: 0 });
function matchAnalytics(s) {
  const teams = {};
  const activity = {};
  for (const t of TEAMS) {
    const mine = s.players.filter((p) => p.team === t);
    const onPitch2 = mine.filter((p) => p.location === "pitch");
    teams[t] = {
      score: s.teams[t].score,
      standing: onPitch2.filter((p) => p.stance === "standing").length,
      prone: onPitch2.filter((p) => p.stance === "prone").length,
      stunned: onPitch2.filter((p) => p.stance === "stunned").length,
      reserves: mine.filter((p) => p.location === "reserves").length,
      ko: mine.filter((p) => p.location === "ko").length,
      casualties: mine.filter((p) => p.location === "cas").length,
      sentOff: mine.filter((p) => p.location === "sentOff").length,
      marked: onPitch2.filter((p) => p.stance === "standing" && isMarked(s, p)).length,
      rerolls: s.teams[t].rerolls
    };
    activity[t] = { actions: emptyActions(), blocks: 0, turnovers: 0, touchdowns: 0 };
  }
  for (const e of s.log) {
    const a = activity[e.team];
    if (!a) continue;
    const input = e.input;
    if (input.kind === "playerAction" && input.action && input.action in a.actions) a.actions[input.action]++;
    if (e.outcome === "turnover") a.turnovers++;
    if (e.outcome === "touchdown") a.touchdowns++;
  }
  for (const t of TEAMS) activity[t].blocks = activity[t].actions.block + activity[t].actions.blitz;
  const holder = ballHolder(s);
  const goal = holder?.pos ? Math.abs(scoringEndZoneX(holder.team) - holder.pos.x) : null;
  return {
    schema: ANALYTICS_SCHEMA,
    phase: s.phase,
    half: s.match?.half ?? s.turn.half,
    turn: { A: s.teams.A.turn, B: s.teams.B.turn },
    active: s.turn.active,
    possession: holder ? holder.team : null,
    ballLoose: s.ball.kind === "ground",
    carrierGoalDistance: goal,
    teams,
    activity,
    basis: { entries: s.log.length },
    outlook: { available: false, reason: "These are measured counts, not predictions. A win-chance figure needs a sampling estimator with a stated sample count and uncertainty: hosts offer it only as an optional, separately labelled policy-conditioned estimate (src/platform/win-estimate.ts), never inside these counts." }
  };
}

// src/engine/replay.ts
var clone = (x) => JSON.parse(JSON.stringify(x));
var PLAYER_KEEP = ["id", "team", "number", "name", "position", "keywords", "ma", "st", "ag", "pa", "av", "skills", "defId", "captain", "mercenary", "star", "journeyman"];
function reconstructInitial(saved) {
  if (!saved.match || saved.log.length === 0) return null;
  const base = newGame({ a: { name: saved.teams.A.name, roster: saved.teams.A.rosterId }, b: { name: saved.teams.B.name, roster: saved.teams.B.rosterId }, seed: saved.rng.seed });
  const s = base;
  if (saved.variant) s.variant = saved.variant;
  if (saved.rulesEdition) s.rulesEdition = saved.rulesEdition;
  else delete s.rulesEdition;
  s.phase = "pregame";
  s.weather = "perfect";
  s.turn.half = 1;
  if (saved.title) s.title = saved.title;
  s.options = clone(saved.options);
  const m = clone(saved.match);
  for (const t of ["A", "B"]) {
    const st = saved.teams[t];
    const nt = newTeam(t, st.name, st.rosterId);
    Object.assign(nt, { color: st.color, accent: st.accent, rerolls: m.rosterRerolls[t], leaderReroll: false, score: 0, turn: 0 });
    if (st.league) nt.league = st.league;
    if (st.specialRules) nt.specialRules = st.specialRules.slice();
    if (st.apothecary) nt.apothecary = "available";
    s.teams[t] = nt;
  }
  s.players = saved.players.map((p) => {
    const q = {};
    for (const k of PLAYER_KEEP) if (p[k] !== void 0) q[k] = clone(p[k]);
    Object.assign(q, { location: "reserves", pos: null, stance: "standing", distracted: false, activated: false, usage: {} });
    if (p.veteran) q.veteran = "ready";
    return q;
  });
  undoPregamePrayers(s, saved.log[0]);
  const ind = m.inducements;
  s.match = {
    kind: m.kind,
    options: m.options,
    teamIds: m.teamIds,
    ...m.mirror ? { mirror: m.mirror } : {},
    rosterRerolls: m.rosterRerolls,
    dedicatedFans: m.dedicatedFans,
    assistantCoaches: m.assistantCoaches,
    cheerleaders: m.cheerleaders,
    half: 1,
    drive: 0,
    setupDone: { A: false, B: false },
    bribes: { A: ind?.A?.bribe ?? 0, B: ind?.B?.bribe ?? 0 },
    ...ind ? { inducements: ind } : {},
    coachEjected: { A: false, B: false },
    driveMods: [],
    ...m.matched ? { matched: m.matched } : {},
    ...m.preMatch ? { preMatch: m.preMatch } : {},
    ...m.allStar ? { allStar: m.allStar } : {}
  };
  return s;
}
function undoPregamePrayers(s, first) {
  const skillByName = (name) => Object.keys(SKILL_BY_ID).find((id) => SKILL_BY_ID[id].name === name);
  const drop = (p, id) => {
    if (id) p.skills = p.skills.filter((k) => k.id !== id);
  };
  for (const e of first.events ?? []) {
    if (e.type !== "status") continue;
    const pid = e.data?.playerId;
    const p = pid ? s.players.find((q) => q.id === pid) : void 0;
    if (!p) continue;
    const t = e.text;
    if (t.startsWith("Stiletto:")) drop(p, "stab");
    else if (t.startsWith("Iron Man:")) p.av = Math.max(1, p.av - 1);
    else if (t.startsWith("Knuckle Dusters:")) drop(p, "mightyBlow");
    else if (t.startsWith("Bad Habits:")) drop(p, "loner");
    else if (t.startsWith("Greasy Cleats:")) p.ma += 1;
    else if (t.startsWith("Blessing of Nuffle:")) drop(p, "pro");
    else if (t.startsWith("Intensive Training:")) {
      const m = /gains (.+) for the game/.exec(t);
      if (m) drop(p, skillByName(m[1]));
    }
  }
}
function applyEntry(prev, entry) {
  let out = execute(prev, clone(entry.input), entry.plan);
  if (out.status === "illegal") return { state: prev, ok: false, error: out.error ?? "illegal" };
  let k = 0;
  while (out.state.pending) {
    const d2 = entry.decisions[k++];
    if (!d2) return { state: out.state, ok: false, error: "a decision is pending but none was recorded" };
    out = decide(out.state, { requestId: d2.requestId, optionId: d2.optionId });
    if (out.status === "illegal") return { state: prev, ok: false, error: `recorded decision refused: ${out.error ?? "illegal"}` };
  }
  return { state: out.state, ok: true, events: out.events };
}
var evKey = (e) => JSON.stringify([e.input, e.decisions.map((d2) => [d2.requestId, d2.optionId]), e.events, e.outcome]);
function verifyLog(initial, log) {
  let s = clone(initial);
  for (let i = 0; i < log.length; i++) {
    const r = applyEntry(s, log[i]);
    if (!r.ok) return { ok: false, at: i, error: r.error };
    s = r.state;
    const made = s.log[s.log.length - 1];
    if (!made || evKey(made) !== evKey(log[i])) return { ok: false, at: i, error: "the replayed events differ from the recorded events (dice or outcome)" };
  }
  return { ok: true, final: s };
}
function assessReplay(saved, storedInitial) {
  const log = saved.log ?? [];
  const mk = (grade, reason, extra = {}, initial = null) => ({ assessment: { grade, reason, entries: log.length, initialFrom: "none", ...extra }, initial, log, saved });
  if (!saved.match) return mk("position-only", "This is a practice position, not a match: it has no recorded match history to replay.");
  if (log.length === 0) return mk("position-only", "The file has no recorded history.");
  if (storedInitial) {
    const v2 = verifyLog(storedInitial, log);
    if (v2.ok) return mk("replayable", "The initial state is stored and the recorded history reproduces exactly.", { initialFrom: "stored" }, storedInitial);
    return mk("position-only", `The stored initial state does not reproduce the history (entry ${(v2.at ?? 0) + 1}: ${v2.error}).`, { firstMismatch: v2.at, initialFrom: "stored" });
  }
  const init = reconstructInitial(saved);
  if (!init) return mk("unsupported", "The initial state could not be reconstructed.");
  const v = verifyLog(init, log);
  if (v.ok) return mk("replayable-after-migration", "The file has no stored initial state; it was reconstructed from the saved teams and verified: re-executing every recorded input and decision reproduces every recorded die and outcome.", { initialFrom: "reconstructed" }, init);
  return mk("position-only", `The recorded history cannot be reproduced from a reconstructed start (entry ${(v.at ?? 0) + 1}: ${v.error}). Only the saved position can be viewed; nothing was invented.`, { firstMismatch: v.at, initialFrom: "reconstructed" });
}
var ReplaySession = class {
  constructor(match, every = 12) {
    this.match = match;
    this.cps = /* @__PURE__ */ new Map();
    this.cur = 0;
    if (!match.initial) throw new Error("ReplaySession needs a replayable match");
    this.count = match.log.length;
    this.every = every;
    this.cps.set(0, clone(match.initial));
  }
  /** The state after `i` recorded entries (0 = the start). Never mutates earlier states or the source. */
  stateAt(i) {
    const idx = Math.max(0, Math.min(this.count, i));
    let from = idx;
    while (!this.cps.has(from)) from--;
    let s = this.cps.get(from);
    for (let j = from; j < idx; j++) {
      const r = applyEntry(s, this.match.log[j]);
      if (!r.ok) throw new Error(`replay failed at entry ${j + 1}: ${r.error}`);
      s = r.state;
      if ((j + 1) % this.every === 0) this.cps.set(j + 1, s);
    }
    this.cur = idx;
    return s;
  }
  /** Events (with board snapshots) that executing recorded entry `i` (0-based) produces from the state before it. Display only; never changes state. */
  eventsFor(i) {
    if (i < 0 || i >= this.count) return null;
    const keep = this.cur;
    const r = applyEntry(clone(this.stateAt(i)), this.match.log[i]);
    this.cur = keep;
    return r.ok ? r.events ?? null : null;
  }
  get index() {
    return this.cur;
  }
  step(d2) {
    return this.stateAt(this.cur + d2);
  }
  /** Entry indices (state indices) at which a boundary happens, for "jump to turn / drive / touchdown". */
  markers() {
    const turns = [], drives = [], touchdowns = [];
    let lastTurnKey = "";
    this.match.log.forEach((e, i) => {
      const k = `${e.team}:${e.turn}`;
      if (e.input.kind === "playerAction" && k !== lastTurnKey) {
        lastTurnKey = k;
        turns.push(i);
      }
      if (e.input.kind === "nextDrive" || e.input.kind === "pregame") drives.push(i + 1);
      if (e.outcome === "touchdown") touchdowns.push(i + 1);
    });
    return { turns, drives, touchdowns };
  }
};

// src/engine/history.ts
var HISTORY_FORMAT = "bloodboard-history";
var HISTORY_VERSION = 1;
var HISTORY_BATCH_FORMAT = "bloodboard-history-batch";
var clone2 = (x) => JSON.parse(JSON.stringify(x));
var EDITIONS = /* @__PURE__ */ new Set(["faq2026", "legacy"]);
var editionOf = (s) => s.rulesEdition ?? "legacy";
function identityOf(seed, edition, teams, log) {
  let a = 2166136261, b = 5381;
  const feed = (str) => {
    for (let i = 0; i < str.length; i++) {
      const c = str.charCodeAt(i);
      a = Math.imul(a ^ c, 16777619) >>> 0;
      b = Math.imul(b, 33) + c >>> 0;
    }
  };
  feed(`${seed}|${edition}|${teams.join("/")}|${log.length}`);
  for (const e of log) feed(JSON.stringify([e.input, e.decisions.map((d2) => d2.optionId), e.outcome]));
  return `h-${a.toString(36)}${b.toString(36)}`;
}
function resultOf(state) {
  const A = state.teams.A.score, B = state.teams.B.score;
  const completed = state.phase === "fullTime";
  return { score: { A, B }, winner: !completed ? null : A === B ? "draw" : A > B ? "A" : "B", completed, entries: state.log.length };
}
function toHistory(state, opts) {
  if (!state.match) return { ok: false, error: "This is a practice position, not a match: there is no match history to export." };
  if (state.log.length === 0) return { ok: false, error: "The match has no recorded history yet." };
  const rep = assessReplay(state, opts.initial ?? null);
  if (!rep.initial || !rep.assessment.grade.startsWith("replayable")) return { ok: false, error: `The history does not reproduce under the current rules (${rep.assessment.reason})` };
  const mk = (t) => ({ name: state.teams[t].name, roster: state.teams[t].rosterId, controller: { kind: "human" }, ...opts.participants?.[t] });
  const edition = editionOf(state);
  const seed = state.rng.seed;
  const history = {
    format: HISTORY_FORMAT,
    version: HISTORY_VERSION,
    id: identityOf(seed, edition, [state.teams.A.name, state.teams.B.name], state.log),
    source: opts.source,
    title: state.title ?? `${state.teams.A.name} vs ${state.teams.B.name}`,
    createdAt: opts.createdAt ?? (/* @__PURE__ */ new Date()).toISOString(),
    rulesEdition: edition,
    engine: { version: BUILD_FINGERPRINT.version, engineHash: BUILD_FINGERPRINT.engineHash, rulesHash: BUILD_FINGERPRINT.rulesHash, apiHash: BUILD_FINGERPRINT.apiHash },
    variant: state.variant ?? "standard",
    seed,
    participants: { A: mk("A"), B: mk("B") },
    initial: clone2(rep.initial),
    log: clone2(state.log),
    result: resultOf(state),
    verified: { method: "replay", ok: true, entries: state.log.length, at: (/* @__PURE__ */ new Date()).toISOString() },
    ...opts.extensions ? { extensions: clone2(opts.extensions) } : {}
  };
  return { ok: true, history };
}
function verifyHistory(h) {
  if (!EDITIONS.has(h.rulesEdition)) return { grade: "refused", reason: `Unsupported rules edition "${h.rulesEdition}": this build knows faq2026 and legacy and will not guess.` };
  const initEdition = editionOf(h.initial);
  if (initEdition !== h.rulesEdition) return { grade: "refused", reason: `The stored initial state is edition "${initEdition}" but the history says "${h.rulesEdition}".` };
  const v = verifyLog(h.initial, h.log);
  if (!v.ok) return { grade: "refused", reason: `The recorded history does not reproduce (entry ${(v.at ?? 0) + 1}: ${v.error}).`, firstMismatch: v.at };
  const fin = v.final;
  const r = resultOf(fin);
  if (r.score.A !== h.result.score.A || r.score.B !== h.result.score.B || r.completed !== h.result.completed) return { grade: "refused", reason: "The stored result differs from the result of re-executing the log." };
  if (identityOf(h.seed, h.rulesEdition, [h.initial.teams.A.name, h.initial.teams.B.name], h.log) !== h.id) return { grade: "refused", reason: "The history id does not match its contents." };
  const same = h.engine.rulesHash === BUILD_FINGERPRINT.rulesHash;
  return { grade: same ? "verified" : "verified-other-rules-code", reason: same ? "Re-executed with this build: every input, decision, die and the result reproduce." : `Written by engine ${h.engine.version} with different rules code; re-execution under this build still reproduces every die and the result.`, final: fin };
}
function serializeHistory(h) {
  return JSON.stringify(h);
}
var isObj2 = (v) => !!v && typeof v === "object" && !Array.isArray(v);
function validateHistoryShape(v) {
  const e = [];
  if (!isObj2(v)) return ["history must be an object"];
  if (v.format !== HISTORY_FORMAT) e.push(`format must be "${HISTORY_FORMAT}"`);
  if (typeof v.version !== "number") e.push("version must be a number");
  else if (v.version > HISTORY_VERSION) e.push(`history version ${v.version} is newer than this build supports (${HISTORY_VERSION}); update Bloodboard`);
  else if (v.version < 1) e.push("history version is invalid");
  for (const k of ["id", "title", "createdAt", "rulesEdition", "source"]) if (typeof v[k] !== "string") e.push(`${k} must be a string`);
  if (!["game", "lab", "multiplayer", "training"].includes(v.source)) e.push("source is invalid");
  if (typeof v.seed !== "number") e.push("seed must be a number");
  if (!isObj2(v.initial) || v.initial.format !== "bloodboard-state") e.push("initial must be a bloodboard-state");
  if (!Array.isArray(v.log)) e.push("log must be an array");
  if (!isObj2(v.result) || !isObj2(v.result.score)) e.push("result.score is required");
  if (!isObj2(v.participants) || !isObj2(v.participants.A) || !isObj2(v.participants.B)) e.push("participants.A and .B are required");
  return e;
}
function parseHistory(text) {
  let v;
  try {
    v = JSON.parse(text);
  } catch {
    return { ok: false, errors: ["not valid JSON"] };
  }
  const errors = validateHistoryShape(v);
  if (errors.length) return { ok: false, errors };
  return { ok: true, history: v };
}
function toBatch(games, label3, createdAt = (/* @__PURE__ */ new Date()).toISOString()) {
  let a = 5381;
  for (const g of games) for (const c of g.id) a = Math.imul(a, 33) + c.charCodeAt(0) >>> 0;
  return { format: HISTORY_BATCH_FORMAT, version: 1, id: `hb-${games.length}-${a.toString(36)}`, label: label3, createdAt, games };
}
function importHistories(text) {
  let v;
  try {
    v = JSON.parse(text);
  } catch {
    return { ok: false, errors: ["not valid JSON"] };
  }
  const games = isObj2(v) && v.format === HISTORY_BATCH_FORMAT ? Array.isArray(v.games) ? v.games : [] : [v];
  if (isObj2(v) && v.format === HISTORY_BATCH_FORMAT && v.version > 1) return { ok: false, errors: [`batch version ${String(v.version)} is newer than this build supports`] };
  if (!games.length) return { ok: false, errors: ["the file contains no games"] };
  const reports = [], verified = [];
  for (const g of games) {
    const shape = validateHistoryShape(g);
    if (shape.length) {
      reports.push({ id: String(g?.id ?? "?"), title: String(g?.title ?? "?"), grade: "refused", reason: shape.join("; ") });
      continue;
    }
    const h = g;
    const r = verifyHistory(h);
    reports.push({ id: h.id, title: h.title, grade: r.grade, reason: r.reason });
    if (r.grade !== "refused") verified.push(h);
  }
  return { ok: true, reports, verified };
}

// src/engine/teambuild.ts
var has2 = (p, id) => p.skills.some((k) => k.id === id);
function positionValue(p) {
  let v = 40;
  v += 11 * (p.st - 3) + (p.st >= 5 ? 4 : 0);
  v += 3 * (p.ma - 6);
  v += 6 * (3 - p.ag);
  v += 2.5 * (p.av - 9);
  if (p.pa !== null && p.pa <= 3) v += 2;
  const S2 = {
    block: 11,
    dodge: 8,
    guard: 8,
    mightyBlow: 6,
    sureHands: 5,
    catch: 5,
    pass: 3,
    tackle: 4,
    frenzy: 3,
    claws: 6,
    juggernaut: 3,
    standFirm: 4,
    thickSkull: 2,
    sprint: 2,
    sureFeet: 2,
    horns: 3,
    wrestle: 5,
    sidestep: 5,
    jumpUp: 2,
    leader: 3,
    accurate: 2,
    strongArm: 1,
    stripBall: 3,
    divingTackle: 2,
    grab: 3,
    breakTackle: 2,
    multipleBlock: 2,
    defensive: 3,
    fend: 2,
    dauntless: 3,
    disturbingPresence: 3,
    foulAppearance: 3,
    extraArms: 2,
    twoHeads: 3,
    bigHand: 2,
    prehensileTail: 2,
    tentacles: 3,
    ironHardSkin: 3,
    regeneration: 4,
    kick: 2,
    stab: 3,
    hypnoticGaze: 3,
    safePairOfHands: 1,
    steadyFooting: 2,
    pro: 3,
    brawler: 3,
    armBar: 1,
    shadowing: 2,
    dirtyPlayer: 1,
    sneakyGit: 1,
    onTheBall: 2,
    nervesOfSteel: 1,
    // drawbacks
    loner: -7,
    boneHead: -8,
    reallyStupid: -12,
    wildAnimal: -8,
    animalSavagery: -8,
    unchannelledFury: -7,
    stunty: -5,
    decay: -4,
    insignificant: -3,
    noBall: -6,
    secretWeapon: -12,
    takeRoot: -5,
    titchy: 1,
    rightStuff: 0,
    alwaysHungry: -1,
    throwTeamMate: 2,
    bloodlust: -4,
    plagueRidden: 1
  };
  for (const k of p.skills) v += S2[k.id] ?? 1;
  return v;
}
function lineman(r) {
  return r.positions.find((p) => p.keywords.includes("Lineman") && /-1[26]$/.test(p.qty)) ?? r.positions.find((p) => p.keywords.includes("Lineman")) ?? r.positions.reduce((a, b) => b.cost < a.cost ? b : a);
}
function buildTeam(rosterId, o) {
  const r = ROSTER_BY_ID[rosterId];
  if (!r) return null;
  const sevens = o.format === "sevens";
  const t = newTeamDef("tournament", rosterId, o.name ?? `${r.name}${sevens ? " Sevens" : ""}`, o.id, sevens ? "sevens" : void 0);
  t.play = o.play;
  if (o.play === "tournament") {
    t.dedicatedFans = 0;
    if (o.tier) t.tier = o.tier;
  }
  if (o.budget) {
    t.budget = o.budget;
    if (o.budgetCustom) t.budgetCustom = true;
  }
  if (r.leagues.length > 1) t.league = r.leagues[0];
  if (r.favouredOf) t.favoured = r.favouredOf.includes("Undivided") ? "Undivided" : r.favouredOf[0];
  const budget = teamBudget(t);
  const line = lineman(r);
  const minPlayers = sevens ? SEVENS_DRAFT.minPlayers : DRAFT_TEMPLATE.minPlayers;
  const maxNonLine = sevens ? SEVENS_DRAFT.maxNonLineman : 99;
  const rrCost = sevens ? SEVENS_DRAFT.rerollCost : r.rerollCost;
  const baseRR = sevens ? 1 : 2;
  const apoCost = r.apothecary && !sevens ? 5e4 : 0;
  const insigLine = line.skills.some((k) => k.id === "insignificant");
  let n = 1;
  const add2 = (pos) => t.players.push(playerFromRoster(r, pos.id, n, `${o.id}-${n++}`));
  const count = (id) => t.players.filter((p) => p.positionId === id).length;
  const spent = () => teamCost(t).total;
  const reserve = (players) => players * line.cost + baseRR * rrCost + apoCost;
  const cands = r.positions.filter((p) => p.id !== line.id);
  const lv = positionValue(line);
  for (let guard = 0; guard < 40; guard++) {
    const nonLine = t.players.filter((p) => !p.keywords.includes("Lineman")).length;
    const need = Math.max(0, minPlayers - t.players.length - 1);
    let best = null;
    for (const pos of cands) {
      const max = Number(pos.qty.split("-")[1]);
      if (count(pos.id) >= max || groupRoom(t, pos.id) <= 0) continue;
      if (!pos.keywords.includes("Lineman") && nonLine >= maxNonLine) continue;
      if (spent() + pos.cost + reserve(need) > budget) continue;
      const gain = positionValue(pos) - lv;
      if (gain <= 2) continue;
      const big = pos.keywords.includes("Big Guy");
      const dup = count(pos.id);
      let score = gain / Math.max(1, (pos.cost - line.cost * 0.6) / 1e4);
      score *= Math.pow(0.8, dup);
      if (big && sevens && t.players.some((p) => p.keywords.includes("Big Guy"))) score *= 0.3;
      const handler = has2(pos, "sureHands") || has2(pos, "pass") || has2(pos, "catch");
      if (handler && !t.players.some((p) => has2(p, "sureHands") || has2(p, "pass") || has2(p, "catch"))) score *= 1.4;
      if (pos.keywords.includes("Blitzer") && !t.players.some((p) => p.keywords.includes("Blitzer"))) score *= 1.3;
      if (insigLine && sevens) score *= 1.2;
      if (!best || score > best.score) best = { pos, score };
    }
    if (!best) break;
    add2(best.pos);
  }
  while (t.players.length < minPlayers && spent() + line.cost <= budget) add2(line);
  const fits = (x) => teamCost({ ...t, ...x }).total <= budget;
  while (t.rerolls < baseRR && fits({ rerolls: t.rerolls + 1 })) t.rerolls += 1;
  if (r.apothecary && fits({ apothecary: true })) t.apothecary = true;
  if (!sevens) {
    if (fits({ rerolls: t.rerolls + 1 })) t.rerolls += 1;
    if (t.players.length < 12 && spent() + line.cost <= budget) add2(line);
  } else if (t.players.length < 8 && spent() + line.cost <= budget) add2(line);
  const maxRR = sevens ? SEVENS_DRAFT.maxRerolls : DRAFT_TEMPLATE.maxRerolls;
  while (t.rerolls < Math.min(maxRR, sevens ? 3 : 4) && fits({ rerolls: t.rerolls + 1 })) t.rerolls += 1;
  const T = sevens ? SEVENS_DRAFT : DRAFT_TEMPLATE;
  if (o.play === "tournament") {
    const maxFans = sevens ? SEVENS_DRAFT.maxFans : DRAFT_TEMPLATE.maxFans;
    for (let g = 0; g < 30; g++) {
      if (t.assistantCoaches < T.maxAssistants && fits({ assistantCoaches: t.assistantCoaches + 1 })) t.assistantCoaches += 1;
      else if (t.dedicatedFans < maxFans && fits({ dedicatedFans: t.dedicatedFans + 1 })) t.dedicatedFans += 1;
      else if (t.cheerleaders < T.maxCheerleaders && fits({ cheerleaders: t.cheerleaders + 1 })) t.cheerleaders += 1;
      else break;
    }
  } else {
    while (t.players.length < (sevens ? 9 : 13) && spent() + line.cost <= budget && count(line.id) < Number(line.qty.split("-")[1]) && groupRoom(t, line.id) > 0) add2(line);
    while (t.assistantCoaches < Math.min(2, T.maxAssistants) && fits({ assistantCoaches: t.assistantCoaches + 1 })) t.assistantCoaches += 1;
    while (t.cheerleaders < Math.min(2, T.maxCheerleaders) && fits({ cheerleaders: t.cheerleaders + 1 })) t.cheerleaders += 1;
  }
  if (sevens) {
    const vet = t.players.find((p) => p.keywords.includes("Lineman"));
    if (vet) setVeteran(t, vet.id);
  }
  if (hasTeamCaptainRule(t)) {
    const c = t.players.find((p) => p.keywords.includes("Blitzer")) ?? t.players.find((p) => !p.keywords.includes("Big Guy"));
    if (c) setCaptain(t, c.id);
  }
  t.players.sort((a, b) => Number(a.keywords.includes("Lineman")) - Number(b.keywords.includes("Lineman")));
  t.players.forEach((p, i) => p.number = i + 1);
  if (o.play === "tournament" && t.tier && o.skills !== false) autoSkills(t);
  t.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
  return validateTeamDef(t).some((i) => i.level === "error") ? null : t;
}
function skillWorth(p, id) {
  if (has2(p, id)) return 0;
  const big = p.keywords.includes("Big Guy");
  const agile = p.ag <= 3 && p.ma >= 6;
  const handler = has2(p, "pass") || has2(p, "catch") || p.keywords.includes("Thrower") || p.keywords.includes("Catcher") || p.keywords.includes("Runner");
  const blitzer = p.keywords.includes("Blitzer");
  const strong = p.st >= 4;
  const hasBlock = has2(p, "block");
  const hasDodge = has2(p, "dodge");
  const drawback = has2(p, "noBall") || has2(p, "secretWeapon");
  const W = {
    block: hasBlock ? 0 : blitzer ? 16 : big ? 11 : 13,
    dodge: hasDodge ? 0 : agile ? handler ? 13 : 10 : 5,
    guard: strong ? 11 : p.st >= 3 ? 6 : 1,
    mightyBlow: strong ? hasBlock ? 10 : 7 : blitzer && hasBlock ? 6 : 2,
    sureHands: handler && !drawback ? 12 : 2,
    wrestle: hasBlock ? 0 : 7,
    tackle: blitzer ? 7 : 3,
    sidestep: agile ? hasDodge ? 8 : 6 : 3,
    standFirm: big ? 8 : 3,
    stripBall: blitzer && hasBlock ? 7 : 2,
    catch: p.keywords.includes("Catcher") || has2(p, "sureHands") ? 7 : 2,
    fend: agile ? 4 : 2,
    sureFeet: p.ma >= 7 ? 5 : 2,
    sprint: p.ma >= 7 ? 4 : 1,
    diving: 0,
    divingTackle: agile ? 4 : 2,
    jumpUp: big ? 3 : 2,
    juggernaut: blitzer ? 5 : 2,
    grab: strong && hasBlock ? 6 : 2,
    brawler: strong ? 5 : 2,
    thickSkull: 3,
    pro: 3,
    leader: handler ? 5 : 1,
    accurate: has2(p, "pass") ? 5 : 1,
    nervesOfSteel: has2(p, "pass") ? 3 : 1,
    dauntless: p.st <= 3 && blitzer ? 5 : 2,
    frenzy: blitzer && hasBlock ? 3 : 1,
    claws: strong ? 7 : 5,
    horns: blitzer ? 4 : 2,
    kick: 3,
    defensive: 4,
    steadyFooting: 3,
    armBar: 2,
    breakTackle: strong ? 4 : 2,
    safePairOfHands: 2,
    extraArms: handler ? 5 : 1,
    twoHeads: agile ? 5 : 2,
    bigHand: handler ? 3 : 1,
    disturbingPresence: 3,
    foulAppearance: 3,
    ironHardSkin: 3,
    tentacles: 3,
    prehensileTail: 3
  };
  return W[id] ?? 0;
}
function autoSkills(t, keep = false) {
  if (!t.tier) return t;
  const F = MATCHED[t.variant === "sevens" ? "sevens" : "standard"];
  if (!keep) for (const p of t.players) delete p.boughtSkill;
  const tier = t.tier;
  for (let guard = 0; guard < 16; guard++) {
    const u = teamSkillPoints(t);
    const left = u.allowance - u.spent;
    if (left <= 0) break;
    let best = null;
    for (const p of t.players) {
      if (p.star || p.boughtSkill) continue;
      const cats = playerCategories(t, p);
      for (const cat of [...cats.primary, ...cats.secondary]) {
        const secondary = !cats.primary.includes(cat);
        const cost = secondary ? 2 : 1;
        if (cost > left) continue;
        if (secondary && u.secondary >= F.secondaryMax[tier]) continue;
        for (const id of Object.keys(SKILL_BY_ID)) {
          if (skillCategory(id) !== cat) continue;
          if (ELITE_SKILLS.includes(id) && (t.variant === "sevens" ? u.elite : u.eliteBySkill[id] ?? 0) >= F.eliteMax) continue;
          if (skillRestriction(p, id)) continue;
          const w = skillWorth(p, id);
          if (w <= 0) continue;
          const score = secondary ? w / 1.7 : w;
          if (!best || score > best.score) best = { p, id, cost, score };
        }
      }
    }
    if (!best || best.score < 3) break;
    best.p.boughtSkill = best.id;
  }
  return t;
}

// src/engine/formation.ts
var prof = (p) => positionValue({ ma: p.ma, st: p.st, ag: p.ag, pa: p.pa, av: p.av, skills: p.skills, keywords: p.keywords });
var sk3 = (p, id) => p.skills.some((k) => k.id === id);
var lineScore = (p) => p.st * 3 + p.av + (sk3(p, "block") ? 1.5 : 0) + (sk3(p, "guard") ? 2 : 0) + (sk3(p, "standFirm") ? 1.5 : 0) + (sk3(p, "mightyBlow") ? 1 : 0) - (sk3(p, "loner") ? 0.5 : 0);
function builtinFormation(s, team2) {
  const base = defaultFormation(s, team2);
  const baseIds = Object.keys(base).filter((id) => base[id]);
  const legacy = (why) => ({ positions: base, fielded: baseIds, why, fellBack: true });
  const slots = formationSlots(s, team2);
  const cands = setupCandidates(s, team2);
  const count = Math.min(slots.length, cands.length);
  if (count === 0) return legacy("No players available.");
  const cap = !!s.teams[team2].specialRules?.includes("Team Captain");
  const must = cands.filter((p) => cap && p.captain || !!p.star).slice(0, count);
  const rest = cands.filter((p) => !must.includes(p)).sort((a, b) => prof(b) - prof(a) || a.number - b.number);
  const fielded = [...must, ...rest.slice(0, count - must.length)];
  const lineN = Math.min(3, fielded.length);
  const byLine = fielded.slice().sort((a, b) => lineScore(b) - lineScore(a) || a.number - b.number);
  const line = byLine.slice(0, lineN);
  const back = fielded.filter((p) => !line.includes(p)).sort((a, b) => prof(b) - prof(a) || a.number - b.number);
  const positions = {};
  for (const p of cands) positions[p.id] = null;
  line.forEach((p, i) => positions[p.id] = { ...slots[i] });
  back.forEach((p, i) => positions[p.id] = { ...slots[lineN + i] });
  const bad = matchInputReason(s, { kind: "setupTeam", team: team2, positions });
  if (bad) return legacy(`Built formation rejected (${bad}); legacy default used.`);
  return { positions, fielded: fielded.map((p) => p.id), why: `Fielded the ${count} highest-value players${must.length ? ` (${must.length} required: Captain / Star)` : ""}; the sturdiest hold the Line of Scrimmage.`, fellBack: false };
}

// src/engine/lifecycle.ts
var key2 = (r, f, p, b) => `${r}|${f}|${p}|${b ?? ""}`;
var cache = /* @__PURE__ */ new Map();
function builtinTeam(rosterId, o0) {
  let o = o0;
  if (o.play === "tournament" && !o.tier) {
    const tier = tierInfo(rosterId, o.format).tier;
    if (!tier) return null;
    o = { ...o, tier };
  }
  const k = key2(rosterId, o.format, o.play, o.budget) + `|${o.id}|${o.name ?? ""}|${o.tier ?? ""}`;
  if (!cache.has(k)) cache.set(k, buildTeam(rosterId, o));
  const t = cache.get(k);
  return t ? JSON.parse(JSON.stringify(t)) : null;
}
function rosterInfos(format, play, budget) {
  return ROSTERS.map((r) => ({
    id: r.id,
    name: r.name,
    leagues: r.leagues.slice(),
    specialRules: r.specialRules.slice(),
    rerollCost: r.rerollCost,
    apothecary: r.apothecary,
    ...r.favouredOf ? { favouredOf: r.favouredOf.slice() } : {},
    positions: r.positions.map((p) => ({ id: p.id, name: p.name, cost: p.cost, qty: p.qty, ma: p.ma, st: p.st, ag: p.ag, pa: p.pa, av: p.av, skills: p.skills.map((k) => k.value ? `${k.id}(${k.value})` : k.id), keywords: p.keywords.slice() })),
    draftable: !!builtinTeam(r.id, { format, play, budget, id: "probe", name: "probe" })
  }));
}
function rosterScore(rosterId, o) {
  const t = builtinTeam(rosterId, { ...o, id: "score", name: "score" });
  if (!t) return -Infinity;
  const r = ROSTER_BY_ID[rosterId];
  const n = o.format === "sevens" ? 7 : 11;
  const vals = t.players.map((p) => {
    const pos = findPosition(r, p.positionId);
    return pos ? positionValue({ ...pos, skills: [...pos.skills, ...p.skills] }) : 0;
  }).sort((a, b) => b - a).slice(0, n);
  return vals.reduce((a, b) => a + b, 0);
}
function chooseRosterBuiltin(o) {
  const scores = ROSTERS.filter((r2) => !(o.exclude ?? []).includes(r2.id)).map((r2) => ({ rosterId: r2.id, score: rosterScore(r2.id, o) })).filter((x) => Number.isFinite(x.score)).sort((a, b) => b.score - a.score || (a.rosterId < b.rosterId ? -1 : 1));
  if (!scores.length) throw new Error("No roster can be drafted for this format.");
  const best = scores[0];
  let pick = best;
  if (!o.deterministic && o.rand) {
    const pool = scores.filter((x) => x.score >= best.score * 0.92);
    pick = pool[Math.min(pool.length - 1, Math.floor(o.rand() * pool.length))];
  }
  const r = ROSTER_BY_ID[pick.rosterId];
  return { rosterId: pick.rosterId, ...r.leagues.length > 1 ? { league: r.leagues[0] } : {}, why: `${r.name}: ${o.deterministic || !o.rand ? "the best" : "one of the best"} draft for ${o.format} (built-in draft score ${pick.score.toFixed(1)}).`, scores: scores.slice(0, 6) };
}
var CODES = [
  [/budget|over\b.*gp|exceeds/i, "budget"],
  [/at least|too few|minimum/i, "too-few-players"],
  [/more than 16|too many players|maximum/i, "too-many-players"],
  [/big guy|group|may have a single|at most/i, "position-limit"],
  [/re-?roll/i, "rerolls"],
  [/apothecary/i, "apothecary"],
  [/skill|primary|secondary/i, "skills"],
  [/captain/i, "captain"],
  [/veteran/i, "veteran"],
  [/league|favoured/i, "league"],
  [/wear|number/i, "numbers"],
  [/name/i, "name"]
];
var violationCode = (text) => CODES.find(([re]) => re.test(text))?.[1] ?? "rules";
function validateBuild(t, expect) {
  const issues = validateTeamDef(t);
  const v = issues.map((i) => ({ level: i.level, code: violationCode(i.text), text: i.text }));
  if (expect?.format && (t.variant === "sevens" ? "sevens" : "standard") !== expect.format) v.push({ level: "error", code: "format", text: `The team is a ${t.variant === "sevens" ? "Sevens" : "standard 11-a-side"} team but this match is ${expect.format}.` });
  if (expect?.rosterId && !t.allStar && t.rosterId !== expect.rosterId) v.push({ level: "error", code: "roster", text: `The team's roster is ${t.rosterId ?? "unknown"} but the chosen roster is ${expect.rosterId}.` });
  let cost = 0;
  let budget = 0;
  try {
    cost = teamCost(t).total;
    budget = teamBudget(t);
  } catch {
  }
  return { ok: !v.some((x) => x.level === "error"), violations: v, cost, budget };
}

// src/engine/league.ts
var LEAGUE_RULES = { tv: { page: 91, title: "Team Value" }, journeymen: { page: 94, title: "Take on Journeymen" }, inducements: { page: 94, title: "Inducements (League Play)" } };
var PETTY_CASH_TOP_UP = 5e4;
function playerValue(t, p) {
  if (p.star) return 0;
  const r = t.rosterId ? ROSTER_BY_ID[t.rosterId] : void 0;
  const base = findPosition(r, p.positionId)?.cost ?? 0;
  return base + advancementValue(p);
}
function teamValue(t) {
  const r = t.rosterId ? ROSTER_BY_ID[t.rosterId] : void 0;
  const T = draftTemplate(t);
  const players = t.players.filter((p) => !p.temporary).reduce((a, p) => a + playerValue(t, p), 0);
  const rerolls = (r?.rerollCost ?? 0) * t.rerolls;
  const staff = (t.apothecary ? T.apothecaryCost : 0) + t.assistantCoaches * T.assistantCost + t.cheerleaders * T.cheerleaderCost;
  return players + rerolls + staff;
}
function journeymenFor(t) {
  const r = t.rosterId ? ROSTER_BY_ID[t.rosterId] : void 0;
  if (!r || t.kind !== "league") return [];
  const able = t.players.filter((p) => !p.unavailable && !p.temporary).length;
  const need = Math.max(0, 11 - able);
  if (!need) return [];
  const pos = r.positions.find((x) => x.keywords.includes("Lineman") && x.qty === "0-16") ?? r.positions.find((x) => x.qty === "0-16");
  if (!pos) return [];
  const used = new Set(t.players.map((p) => p.number));
  const out = [];
  for (let i = 0; i < need; i++) {
    let n = 1;
    while (used.has(n)) n++;
    used.add(n);
    const p = playerFromRoster(r, pos.id, n, `${t.id}-journeyman-${i + 1}`);
    p.skills = [...p.skills.filter((k) => k.id !== "loner"), { id: "loner", value: 4 }];
    p.name = `Journeyman ${pos.name}`;
    p.temporary = true;
    p.journeyman = true;
    out.push(p);
  }
  return out;
}
function currentTeamValue(t) {
  const unavailable = t.players.filter((p) => p.unavailable && !p.temporary).reduce((a, p) => a + playerValue(t, p), 0);
  const journeymen = journeymenFor(t).reduce((a, p) => a + playerValue(t, p), 0);
  return teamValue(t) - unavailable + journeymen;
}
function preMatchFunds(a, b, spentByHigher = 0) {
  const ctv = { A: currentTeamValue(a), B: currentTeamValue(b) };
  const tre = { A: Math.max(0, a.treasury ?? 0), B: Math.max(0, b.treasury ?? 0) };
  if (ctv.A === ctv.B) return { ctv, higher: null, funds: { A: { pettyCash: 0, treasuryMax: 0 }, B: { pettyCash: 0, treasuryMax: 0 } } };
  const higher = ctv.A > ctv.B ? "A" : "B";
  const lower = higher === "A" ? "B" : "A";
  const diff = Math.abs(ctv.A - ctv.B);
  const funds = { A: { pettyCash: 0, treasuryMax: 0 }, B: { pettyCash: 0, treasuryMax: 0 } };
  funds[higher] = { pettyCash: 0, treasuryMax: tre[higher] };
  funds[lower] = { pettyCash: diff + Math.max(0, spentByHigher), treasuryMax: Math.min(PETTY_CASH_TOP_UP, tre[lower]) };
  return { ctv, higher, funds };
}
function purchaseCost(t, buy) {
  const r = t.rosterId ? ROSTER_BY_ID[t.rosterId] : void 0;
  const players = buy.stars.map((id) => ({ star: id }));
  return inducementCost(buy.inducements, teamSpecialRules(t), r) + starsCost(players);
}
function leagueStarReason(t, buy, id, available) {
  const st = STAR_BY_ID[id];
  if (!st) return "Unknown Star Player.";
  if (!starSupported(id)) return `Their special rule "${st.rule.name}" is not implemented yet.`;
  if (!starPlaysFor(st, teamLeague(t), teamSpecialRules(t))) return `Plays for ${playsForText(st)}.`;
  if (buy.stars.includes(id)) return "Already hired.";
  const all = [...buy.stars.map((x) => ({ star: x })), { star: id }];
  if (starChoices(all) > STAR_MAX) return `At most ${STAR_MAX} Star Players (a pair counts as one, p.148).`;
  const extra = st.pair && !buy.stars.includes(st.pair) ? 2 : 1;
  const onTeam = t.players.filter((p) => !p.unavailable).length + journeymenFor(t).length + buy.stars.length;
  if (onTeam + extra > 16) return "No room: a team may never have more than 16 players (p.148).";
  const fee = starsCost(all) - starsCost(buy.stars.map((x) => ({ star: x })));
  if (fee > available) return `Costs ${fee.toLocaleString("en-GB")} gp \u2014 ${Math.max(0, available).toLocaleString("en-GB")} gp left to spend.`;
  return null;
}
function leagueStarOptions(t, buy, available) {
  const league = teamLeague(t);
  const rules = teamSpecialRules(t);
  return STARS.filter((st) => starPlaysFor(st, league, rules)).map((st) => ({ id: st.id, name: st.name, cost: st.cost, pair: st.pair, reason: leagueStarReason(t, buy, st.id, available) }));
}
function leagueInducementOptions(t, buy) {
  const r = t.rosterId ? ROSTER_BY_ID[t.rosterId] : void 0;
  const rules = teamSpecialRules(t);
  return INDUCEMENTS.map((d2) => ({ id: d2.id, name: d2.name, cost: d2.cost(rules, r), max: d2.max(rules), have: buy.inducements[d2.id] ?? 0, reason: d2.unavailable(rules, r) }));
}
function leagueMatchTeam(t, buy, funds, ctv) {
  const errors = [];
  const cost = purchaseCost(t, buy);
  const treasurySpent = Math.max(0, cost - funds.pettyCash);
  if (treasurySpent > funds.treasuryMax) errors.push(`The purchases cost ${cost.toLocaleString("en-GB")} gp: more than the ${funds.pettyCash.toLocaleString("en-GB")} gp Petty Cash${funds.treasuryMax ? ` + ${funds.treasuryMax.toLocaleString("en-GB")} gp of Treasury` : ""} (p.94).`);
  const rules = teamSpecialRules(t);
  const r = t.rosterId ? ROSTER_BY_ID[t.rosterId] : void 0;
  for (const [id, k2] of Object.entries(buy.inducements)) {
    if (!k2) continue;
    const d2 = INDUCEMENT_BY_ID[id];
    if (!d2) errors.push(`Unknown Inducement "${id}".`);
    else if (d2.unavailable(rules, r)) errors.push(`${d2.name}: ${d2.unavailable(rules, r)} (p.${d2.page}).`);
    else if (k2 > d2.max(rules)) errors.push(`${k2} \xD7 ${d2.name}: at most ${d2.max(rules)} (p.${d2.page}).`);
  }
  for (const id of buy.stars) {
    const st = STAR_BY_ID[id];
    if (!st) errors.push(`Unknown Star Player "${id}".`);
    else if (st.pair && !buy.stars.includes(st.pair)) errors.push(`${st.name} must be hired together with ${STAR_BY_ID[st.pair]?.name ?? st.pair} (p.${st.page}).`);
    else if (!starPlaysFor(st, teamLeague(t), rules)) errors.push(`${st.name} plays for ${playsForText(st)} \u2014 not for this team.`);
  }
  if (starChoices(buy.stars.map((x) => ({ star: x }))) > STAR_MAX) errors.push(`At most ${STAR_MAX} Star Players (p.148).`);
  if (errors.length) return { ok: false, errors };
  const team2 = JSON.parse(JSON.stringify(t));
  team2.players.push(...journeymenFor(t));
  const used = new Set(team2.players.map((p) => p.number));
  let k = 0;
  for (const id of buy.stars) {
    let n = 1;
    while (used.has(n)) n++;
    used.add(n);
    const p = playerFromStar(id, n, `${t.id}-star-${id}-${k++}`);
    p.temporary = true;
    team2.players.push(p);
  }
  team2.inducements = Object.fromEntries(Object.entries(buy.inducements).filter(([, v]) => v > 0));
  team2.preMatch = { ctv, pettyCash: funds.pettyCash, treasurySpent };
  void starChoiceKey;
  void MERCENARY;
  return { ok: true, team: team2, treasurySpent };
}
function computerPreMatch(t, funds) {
  const buy = { inducements: {}, stars: [] };
  let money = funds.pettyCash;
  if (money <= 0) return buy;
  const stars = leagueStarOptions(t, buy, money).filter((o) => !o.reason && !o.pair).sort((x, y) => y.cost - x.cost);
  if (stars[0]) {
    buy.stars.push(stars[0].id);
    money -= stars[0].cost;
  }
  const want = ["wanderingApothecary", "bribe", "blitzersBestKeg", "prayer", "extraTraining", "partTimeCoach", "tempCheerleader"];
  for (let pass = 0; pass < 3; pass++)
    for (const id of want) {
      const o = leagueInducementOptions(t, buy).find((x) => x.id === id);
      if (!o || o.reason || o.have >= o.max || o.cost > money) continue;
      buy.inducements[id] = o.have + 1;
      money -= o.cost;
    }
  return buy;
}

// src/engine/teaching.ts
function label2(p) {
  return /^[XY]\d+$/.test(p.name) ? p.name : label(p);
}
var LESSON_ORIGIN = { x: 9, y: 5 };
function lessonSquare(col, row) {
  return { x: LESSON_ORIGIN.x + col, y: LESSON_ORIGIN.y + row };
}
function lessonLabel(c) {
  return `${String.fromCharCode(65 + c.x - LESSON_ORIGIN.x)}${c.y - LESSON_ORIGIN.y + 1}`;
}
function parseLessonLabel(text) {
  const m = /^\s*([A-Za-z])\s*(\d{1,2})\s*$/.exec(text);
  if (!m) return null;
  return lessonSquare(m[1].toUpperCase().charCodeAt(0) - 65, Number(m[2]) - 1);
}
function buildWorkbookState(pos, seed = 1) {
  const s = newGame({ a: { name: "X team" }, b: { name: "Y team" }, seed });
  s.teams.A.color = "#1f4e9c";
  s.teams.A.accent = "#f4f1e8";
  s.teams.B.color = "#9c2a1f";
  s.teams.B.accent = "#f4f1e8";
  s.teams.A.rerolls = 0;
  s.teams.B.rerolls = 0;
  s.teams.A.turn = 1;
  s.teams.B.turn = 0;
  s.turn.active = "A";
  for (const c of pos.cells) {
    const team2 = c.id.startsWith("X") ? "A" : "B";
    const p = customPlayer(s, team2, { position: "Lineman", ma: 6, st: pos.strength[c.id] ?? pos.defaultST, ag: 3, pa: 4, av: 9, skills: pos.guard.includes(c.id) ? [{ id: "guard" }] : [] }, lessonSquare(c.col, c.row));
    p.id = c.id;
    p.number = Number(c.id.slice(1)) || p.number;
    p.name = c.id;
    s.players.push(p);
  }
  s.ball = { kind: "none" };
  return startPlay(s);
}
function diceCode(dice, chooser) {
  if (dice === 1) return "1D";
  return chooser === "attacker" ? `${dice}D` : `-${dice}D`;
}
var DICE_CODE_TEXT = {
  "3D": "3 dice, the attacker chooses",
  "2D": "2 dice, the attacker chooses",
  "1D": "1 die",
  "-2D": "2 dice, the defender chooses",
  "-3D": "3 dice, the defender chooses"
};
function assistLines(s, helpers, target, attackerSide) {
  return helpers.map((q) => {
    const why = assistReason(s, q, target, attackerSide);
    const guard = q.skills.some((k) => k.id === "guard");
    let reason;
    if (why === null) {
      const marked = pitchPlayers(s, other(q.team)).filter((m) => m.id !== target.id && m.pos && q.pos && adjacent(m.pos, q.pos) && m.stance === "standing" && !m.distracted);
      reason = marked.length ? `assists: Marked by ${marked.map(label2).join(", ")}, but Guard lets it assist anyway` : `assists: it Marks ${label2(target)} and no other opponent Marks it`;
    } else reason = `no assist: ${why}`;
    return { id: q.id, label: label2(q), assists: why === null, guard, reason };
  });
}
function blockBreakdown(s, attackerId, defenderId) {
  const att = getPlayer(s, attackerId);
  const def = getPlayer(s, defenderId);
  const ctx = new Ctx(cloneState(s), new TraceDice(), "plan", [], DEFAULT_POLICY, null);
  const a2 = getPlayer(ctx.s, attackerId);
  const d2 = getPlayer(ctx.s, defenderId);
  const st = blockStrength(ctx, a2, d2, { isBlitz: false, declaredBlock: true });
  const near = (t, team2, skip) => pitchPlayers(s, team2).filter((q) => q.id !== skip && q.pos && t.pos && adjacent(q.pos, t.pos));
  const offensive = assistLines(s, near(def, att.team, att.id), def, true);
  const defensive = assistLines(s, near(att, def.team, def.id), att, false);
  const code = diceCode(st.dice, st.chooser);
  const lines = [];
  const offN = offensive.filter((x) => x.assists).length;
  const defN = defensive.filter((x) => x.assists).length;
  lines.push(`${label2(att)} has ST ${att.st}; ${label2(def)} has ST ${def.st}.`);
  if (offensive.length) for (const x of offensive) lines.push(`Offensive: ${x.label} \u2014 ${x.reason}.`);
  else lines.push(`Offensive: no other ${s.teams[att.team].name} player is next to ${label2(def)}.`);
  if (defensive.length) for (const x of defensive) lines.push(`Defensive: ${x.label} \u2014 ${x.reason}.`);
  else lines.push(`Defensive: no other ${s.teams[def.team].name} player is next to ${label2(att)}.`);
  for (const n of st.notes) lines.push(`Also: ${n}.`);
  lines.push(`Strength: ${att.st} + ${offN} = ${st.attST} against ${def.st} + ${defN} = ${st.defST}.`);
  if (st.attST === st.defST) lines.push("Equal Strength: 1 Block die (p.60).");
  else if (st.chooser === "attacker") lines.push(st.dice === 3 ? `${st.attST} is more than double ${st.defST}: 3 dice, the attacker chooses (p.60).` : `${st.attST} is stronger (but not more than double): 2 dice, the attacker chooses (p.60).`);
  else lines.push(st.dice === 3 ? `${st.defST} is more than double ${st.attST}: 3 dice, the defender chooses (p.60).` : `${st.defST} is stronger (but not more than double): 2 dice, the defender chooses (p.60).`);
  return { attacker: att.id, defender: def.id, attBase: att.st, defBase: def.st, offensive, defensive, attST: st.attST, defST: st.defST, dice: st.dice, chooser: st.chooser, code, lines };
}
function meetsGoal(b, dice = 2) {
  return b.chooser === "attacker" && b.dice >= dice;
}
function moveReach(s, playerId, ma) {
  const p = getPlayer(s, playerId);
  if (!p.pos) return [];
  const budget = ma ?? p.ma;
  const seen = /* @__PURE__ */ new Map([[`${p.pos.x},${p.pos.y}`, 0]]);
  const q = [p.pos];
  const out = [];
  while (q.length) {
    const c = q.shift();
    const d2 = seen.get(`${c.x},${c.y}`);
    if (d2 >= budget) continue;
    for (const n of neighbours(c)) {
      const k = `${n.x},${n.y}`;
      if (seen.has(k) || playerAt(s, n)) continue;
      seen.set(k, d2 + 1);
      out.push(n);
      q.push(n);
    }
  }
  return out;
}
function whatIfMove(s, moverId, to, attackerId, defenderId) {
  const t = cloneState(s);
  const p = getPlayer(t, moverId);
  p.pos = { ...to };
  return { label: `${label2(p)} to ${lessonLabel(to)}`, state: t, breakdown: blockBreakdown(t, attackerId, defenderId) };
}
function pushOptions(s, attackerId, targetId) {
  const a = getPlayer(s, attackerId);
  const d2 = getPlayer(s, targetId);
  if (!a.pos || !d2.pos) return [];
  return pushSquares(a.pos, d2.pos).filter((c) => inBounds(c) && !playerAt(s, c));
}
function blockFirstOutcomes(s, blockerId, targetId, finalAtt, finalDef) {
  const out = [];
  const blocker = getPlayer(s, blockerId);
  const target = getPlayer(s, targetId);
  const from = { ...blocker.pos };
  const tFrom = { ...target.pos };
  for (const sq of pushOptions(s, blockerId, targetId)) {
    for (const down of [false, true]) {
      for (const follow of [false, true]) {
        const t = cloneState(s);
        const tg = getPlayer(t, targetId);
        tg.pos = { ...sq };
        if (down) tg.stance = "prone";
        if (follow) getPlayer(t, blockerId).pos = { ...tFrom };
        const verb = down ? "knocked down" : "pushed";
        out.push({ label: `${label2(target)} ${verb} into ${lessonLabel(sq)}${follow ? `, ${label2(blocker)} follows up` : ""}`, state: t, breakdown: blockBreakdown(t, finalAtt, finalDef) });
      }
    }
  }
  {
    const t = cloneState(s);
    getPlayer(t, targetId).stance = "prone";
    getPlayer(t, blockerId).stance = "prone";
    out.push({ label: `Both Down: ${label2(blocker)} and ${label2(target)} are knocked down in place`, state: t, breakdown: blockBreakdown(t, finalAtt, finalDef) });
  }
  {
    const t = cloneState(s);
    getPlayer(t, blockerId).stance = "prone";
    out.push({ label: `Attacker Down: ${label2(blocker)} is knocked down in ${lessonLabel(from)}`, state: t, breakdown: blockBreakdown(t, finalAtt, finalDef) });
  }
  return out.filter((w) => findPlayer(w.state, finalAtt)?.stance === "standing");
}
function blockTargets(s, playerId) {
  const p = getPlayer(s, playerId);
  return pitchPlayers(s, other(p.team)).filter((q) => q.stance === "standing" && q.pos && p.pos && adjacent(q.pos, p.pos));
}
function inGrid(spec, c) {
  const col = c.x - LESSON_ORIGIN.x;
  const row = c.y - LESSON_ORIGIN.y;
  return col >= 0 && row >= 0 && col < spec.cols && row < spec.rows;
}
function allowedBlockers(s, spec) {
  if (spec.blockers && spec.blockers.length) return spec.blockers;
  return s.players.filter((p) => p.team === "A" && p.id !== spec.attacker && p.location === "pitch").map((p) => p.id);
}
function firstTargetsFor(s, spec, blocker) {
  return blockTargets(s, blocker).map((q) => q.id).filter((id) => id !== spec.defender && (!spec.firstTargets || spec.firstTargets.includes(id)));
}
function exerciseMoves(s, spec) {
  const out = [];
  for (const m of spec.movers ?? []) {
    const p = getPlayer(s, m);
    const squares = spec.kind === "moveOne" ? neighbours(p.pos).filter((c) => !playerAt(s, c)) : moveReach(s, m, p.ma);
    for (const c of squares) if (inGrid(spec, c)) out.push({ mover: m, to: c });
  }
  return out;
}
function firstBlockOutcomes(s, spec, blocker, target) {
  return blockFirstOutcomes(s, blocker, target, spec.attacker, spec.defender).map((w) => ({ label: w.label, code: w.breakdown.code, ok: meetsGoal(w.breakdown) }));
}
function pushOutcomes(s, spec, to) {
  const blocker = (spec.blockers ?? [])[0];
  const target = (spec.firstTargets ?? [])[0];
  const out = [];
  for (const follow of [false, true]) {
    const t = cloneState(s);
    const tg = getPlayer(t, target);
    const from = { ...tg.pos };
    tg.pos = { ...to };
    if (follow) getPlayer(t, blocker).pos = from;
    const b = blockBreakdown(t, spec.attacker, spec.defender);
    out.push({ label: `${target} pushed into ${lessonLabel(to)}${follow ? `, ${blocker} follows up` : ", no follow-up"}`, code: b.code, ok: meetsGoal(b) });
  }
  return out;
}
function checkExercise(spec, answer) {
  const s = buildWorkbookState(spec);
  if (answer.kind === "count") {
    const b = blockBreakdown(s, spec.attacker, spec.defender);
    const ok2 = b.code === answer.code;
    return { correct: ok2, answerText: answer.code, summary: ok2 ? `Correct: ${DICE_CODE_TEXT[b.code]}.` : `Not quite: it is ${b.code} (${DICE_CODE_TEXT[b.code]}), not ${answer.code}.`, breakdown: b };
  }
  if (answer.kind === "move") {
    const here = eq(findPlayer(s, answer.mover)?.pos, answer.to);
    const legal = here && spec.kind === "normalMove" || exerciseMoves(s, spec).some((m) => m.mover === answer.mover && eq(m.to, answer.to));
    const text = (spec.movers ?? []).length > 1 ? `${answer.mover} -> ${lessonLabel(answer.to)}` : lessonLabel(answer.to);
    if (!legal) return { correct: false, answerText: text, summary: spec.kind === "moveOne" ? `${answer.mover} can only move one square, into an empty square.` : `${answer.mover} cannot reach ${lessonLabel(answer.to)} with a normal Move (empty squares only, no Rushing).` };
    const w = whatIfMove(s, answer.mover, answer.to, spec.attacker, spec.defender);
    if (here) w.label = `${answer.mover} staying on ${lessonLabel(answer.to)}`;
    const ok2 = meetsGoal(w.breakdown);
    return { correct: ok2, answerText: text, summary: ok2 ? `Yes: after ${w.label} X1's Block is ${w.breakdown.code}.` : `After ${w.label} X1's Block is ${w.breakdown.code} (${DICE_CODE_TEXT[w.breakdown.code]}) \u2014 the goal is 2D.`, breakdown: w.breakdown, state: w.state };
  }
  if (answer.kind === "first") {
    const blockers = answer.blocker ? [answer.blocker] : allowedBlockers(s, spec).filter((b) => firstTargetsFor(s, spec, b).includes(answer.target));
    if (!blockers.length) return { correct: false, answerText: answer.blocker ?? answer.target, summary: `No allowed X player can Block ${answer.target} first.` };
    const lines2 = [];
    for (const b of blockers) {
      const targets = answer.blocker ? firstTargetsFor(s, spec, b) : [answer.target];
      for (const t of targets) for (const o of firstBlockOutcomes(s, spec, b, t)) lines2.push({ ...o, label: `${b} blocks ${t}: ${o.label}` });
    }
    const ok2 = lines2.some((l) => l.ok);
    const who = answer.blocker ?? answer.target;
    return {
      correct: ok2,
      answerText: who,
      summary: ok2 ? `Yes: ${answer.blocker ? `a Block by ${who}` : `blocking ${who}`} can give X1 a 2D Block \u2014 with the right result (see the list).` : `No result of ${answer.blocker ? `a Block by ${who}` : `blocking ${who}`} gives X1 a 2D Block.`,
      outcomes: lines2
    };
  }
  const opts = pushOptions(s, (spec.blockers ?? [])[0], (spec.firstTargets ?? [])[0]);
  if (!opts.some((c) => eq(c, answer.to))) return { correct: false, answerText: lessonLabel(answer.to), summary: `${(spec.firstTargets ?? [])[0]} cannot be pushed into ${lessonLabel(answer.to)}: the push squares are ${opts.map(lessonLabel).join(", ")} (p.62).` };
  const lines = pushOutcomes(s, spec, answer.to);
  const ok = lines.some((l) => l.ok);
  return { correct: ok, answerText: lessonLabel(answer.to), summary: ok ? `Yes: with Y2 in ${lessonLabel(answer.to)} X1's Block can be 2D.` : `With Y2 in ${lessonLabel(answer.to)} X1's Block is still not 2D.`, outcomes: lines };
}
function solveExercise(spec) {
  const s = buildWorkbookState(spec);
  const initial = blockBreakdown(s, spec.attacker, spec.defender);
  const answers = [];
  const lines = [];
  if (spec.kind === "count") {
    return { initial, answers: [initial.code], lines: initial.lines, code: initial.code };
  }
  lines.push(`As printed, X1's Block on Y1 is ${initial.code} (ST ${initial.attST} v ${initial.defST}).`);
  if (spec.kind === "moveOne" || spec.kind === "normalMove") {
    const stay = spec.kind === "normalMove" ? (spec.movers ?? []).map((m) => ({ mover: m, to: { ...getPlayer(s, m).pos } })) : [];
    for (const m of [...stay, ...exerciseMoves(s, spec)]) {
      const r = checkExercise(spec, { kind: "move", mover: m.mover, to: m.to });
      if (r.correct) {
        answers.push(r.answerText);
        lines.push(`${m.mover} to ${lessonLabel(m.to)}: ${r.breakdown?.code} (ST ${r.breakdown?.attST} v ${r.breakdown?.defST}).`);
      }
    }
  } else if (spec.kind === "blockFirst") {
    const targets = /* @__PURE__ */ new Set();
    for (const b of allowedBlockers(s, spec)) for (const t of firstTargetsFor(s, spec, b)) targets.add(t);
    for (const t of [...targets].sort()) {
      const r = checkExercise(spec, { kind: "first", target: t });
      if (r.correct) {
        answers.push(t);
        for (const o of r.outcomes ?? []) if (o.ok) lines.push(`${o.label} \u2192 ${o.code}.`);
      }
    }
  } else if (spec.kind === "whoBlocks") {
    for (const b of allowedBlockers(s, spec)) {
      const r = checkExercise(spec, { kind: "first", blocker: b, target: "" });
      if (r.correct) {
        answers.push(b);
        for (const o of r.outcomes ?? []) if (o.ok) lines.push(`${o.label} \u2192 ${o.code}.`);
      }
    }
  } else if (spec.kind === "pushSquare") {
    for (const c of pushOptions(s, (spec.blockers ?? [])[0], (spec.firstTargets ?? [])[0])) {
      const r = checkExercise(spec, { kind: "push", to: c });
      if (r.correct) {
        answers.push(lessonLabel(c));
        for (const o of r.outcomes ?? []) if (o.ok) lines.push(`${o.label} \u2192 ${o.code}.`);
      }
    }
  }
  if (!answers.length) lines.push("No choice reaches a 2D Block for X1.");
  return { initial, answers, lines };
}
function parseWorkbookAnswer(spec, text) {
  const t = text.trim();
  if (spec.kind === "count") return ["1D", "2D", "3D", "-2D", "-3D"].includes(t) ? { kind: "count", code: t } : null;
  if (spec.kind === "moveOne" || spec.kind === "normalMove") {
    const m = /^(X\d+)\s*->\s*([A-Z]\d+)$/.exec(t);
    const mover = m ? m[1] : (spec.movers ?? [])[0];
    const sq2 = parseLessonLabel(m ? m[2] : t);
    return mover && sq2 ? { kind: "move", mover, to: sq2 } : null;
  }
  if (spec.kind === "whoBlocks") return { kind: "first", blocker: t, target: "" };
  if (spec.kind === "blockFirst") return { kind: "first", target: t };
  const sq = parseLessonLabel(t);
  return sq ? { kind: "push", to: sq } : null;
}
function buildScenario(spec, seed) {
  const s = newGame({ a: spec.teams.A, b: spec.teams.B, seed, weather: spec.weather });
  s.teams.A.rerolls = spec.rerolls?.A ?? 1;
  s.teams.B.rerolls = spec.rerolls?.B ?? 1;
  s.teams.A.turn = spec.turn?.A ?? 3;
  s.teams.B.turn = spec.turn?.B ?? 2;
  s.turn.active = "A";
  for (const sp of spec.players) {
    const r = ROSTER_BY_ID[sp.roster];
    const pos = r?.positions.find((x) => x.id === sp.position);
    if (!pos) throw new Error(`Unknown roster position ${sp.roster}/${sp.position}`);
    const p = playerFromPosition(s, sp.team, pos, { x: sp.at[0], y: sp.at[1] }, sp.number);
    p.id = sp.id;
    if (sp.stance) p.stance = sp.stance;
    if (sp.extraSkills) p.skills = [...p.skills, ...sp.extraSkills.map((k) => ({ ...k }))];
    s.players.push(p);
  }
  for (const t of ["A", "B"]) s.teams[t].leaderReroll = s.players.some((p) => p.team === t && p.skills.some((k) => k.id === "leader"));
  const b = spec.ball;
  if (b && "holder" in b) s.ball = { kind: "held", playerId: b.holder };
  else if (b && "at" in b) s.ball = { kind: "ground", pos: { x: b.at[0], y: b.at[1] } };
  else s.ball = { kind: "none" };
  return startPlay(s);
}
function checkGoal(s, goal, startLogLength = 0) {
  const entries = s.log.slice(startLogLength);
  const turnover = entries.some((e) => e.outcome === "turnover");
  let done = false;
  let text = "";
  switch (goal.kind) {
    case "touchdown":
      done = s.teams.A.score > 0 || entries.some((e) => e.outcome === "touchdown");
      text = done ? "Touchdown!" : "";
      break;
    case "reach": {
      const p = findPlayer(s, goal.player);
      const [x0, y0, x1, y1] = goal.area;
      done = !!p && p.location === "pitch" && p.stance === "standing" && !!p.pos && p.pos.x >= x0 && p.pos.x <= x1 && p.pos.y >= y0 && p.pos.y <= y1;
      text = done ? `${p ? label2(p) : goal.player} made it.` : "";
      break;
    }
    case "holds": {
      done = s.ball.kind === "held" && s.ball.playerId === goal.player;
      text = done ? "The ball is safely held." : "";
      break;
    }
    case "down": {
      const p = findPlayer(s, goal.player);
      done = !!p && (p.location !== "pitch" || p.stance !== "standing");
      text = done ? `${p ? label2(p) : goal.player} is down.` : "";
      break;
    }
    case "action":
      done = entries.some((e) => e.input.kind === "playerAction" && e.input.action === goal.action && e.outcome !== "turnover");
      text = done ? "Action completed." : "";
      break;
    case "info":
      return { done: false, failed: false, text: "" };
  }
  const failed = !done && (turnover || s.phase !== "play");
  if (failed) text = turnover ? "Turnover \u2014 the attempt failed. Reset to try again with the same dice, or pick a new seed." : "The Drive is over.";
  return { done, failed, text };
}

// src/engine/training.ts
var EXERCISE_FORMAT = "bloodboard-exercise";
var EXERCISE_PACK_FORMAT = "bloodboard-exercise-pack";
var ATTEMPT_FORMAT = "bloodboard-attempt";
var TRAINING_VERSION = 1;
var GRADER = { id: "bloodboard-tactical-rubric", version: "1.0.0" };
var clone3 = (x) => JSON.parse(JSON.stringify(x));
var isObj3 = (v) => !!v && typeof v === "object" && !Array.isArray(v);
var OBJECTIVES = ["score", "keep-ball", "recover-ball", "stop-carrier", "no-turnover"];
var KNOWN_COMPONENTS = ["objective", "turnoverFree", "ballSecurity", "carrierProtection", "progress"];
function defaultRubric(kind) {
  const base = {
    score: [{ id: "objective", weight: 3 }, { id: "turnoverFree", weight: 1 }, { id: "ballSecurity", weight: 1 }, { id: "progress", weight: 1 }],
    "keep-ball": [{ id: "objective", weight: 3 }, { id: "turnoverFree", weight: 1 }, { id: "carrierProtection", weight: 1 }],
    "recover-ball": [{ id: "objective", weight: 3 }, { id: "turnoverFree", weight: 1 }, { id: "ballSecurity", weight: 1 }],
    "stop-carrier": [{ id: "objective", weight: 3 }, { id: "turnoverFree", weight: 1 }],
    "no-turnover": [{ id: "objective", weight: 1 }]
  };
  return { id: `rubric-${kind}`, version: 1, components: base[kind], minSamples: 50, samples: 200 };
}
function fnv(parts) {
  let a = 2166136261, b = 5381;
  for (const str of parts) for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    a = Math.imul(a ^ c, 16777619) >>> 0;
    b = Math.imul(b, 33) + c >>> 0;
  }
  return `x-${a.toString(36)}${b.toString(36)}`;
}
var exerciseHash = (e) => fnv([JSON.stringify(e.start), e.side, JSON.stringify(e.objective), JSON.stringify(e.constraints), JSON.stringify(e.rubric)]);
function authorExercise(position, o) {
  const errors = [];
  if (!/^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/.test(o.id)) errors.push('The exercise id must be 1-64 characters: letters, digits, "." "_" "-".');
  if (!o.title?.trim()) errors.push("A title is required.");
  if (!OBJECTIVES.includes(o.objective?.kind)) errors.push(`Unknown objective "${String(o.objective?.kind)}". Supported: ${OBJECTIVES.join(", ")}.`);
  const side = o.side ?? position.turn.active;
  const verr = validateState(position);
  if (verr.length) errors.push(`The position is not a valid game state: ${verr.slice(0, 3).join("; ")}`);
  if (position.phase !== "play") errors.push(`The position must be in play (it is in "${position.phase}"). Set-up and kick-off positions cannot be practised as exercises.`);
  if (position.pending) errors.push("The position has an unresolved decision pending. Resolve it first: exercises starting inside a decision are not supported.");
  if (position.turn.active !== side) errors.push(`The side to act (${side}) must be the team whose Turn it is (${position.turn.active}).`);
  if (o.constraints?.maxActions !== void 0 && !(Number.isInteger(o.constraints.maxActions) && o.constraints.maxActions >= 1)) errors.push("maxActions must be a whole number of at least 1.");
  const rubric = o.rubric ?? defaultRubric(o.objective?.kind ?? "score");
  errors.push(...validateRubric(rubric));
  if (errors.length) return { ok: false, errors };
  const start = clone3(position);
  start.log = [];
  start.pending = null;
  delete start.title;
  delete start.notes;
  const ex = {
    format: EXERCISE_FORMAT,
    version: TRAINING_VERSION,
    id: o.id,
    hash: "",
    title: o.title.trim(),
    ...o.description ? { description: o.description } : {},
    createdAt: o.createdAt ?? (/* @__PURE__ */ new Date()).toISOString(),
    ...o.author ? { author: o.author } : {},
    side,
    start,
    rulesEdition: position.rulesEdition ?? "legacy",
    variant: position.variant ?? "standard",
    engine: { version: BUILD_FINGERPRINT.version, engineHash: BUILD_FINGERPRINT.engineHash, rulesHash: BUILD_FINGERPRINT.rulesHash },
    objective: clone3(o.objective),
    constraints: clone3(o.constraints ?? {}),
    rubric: clone3(rubric),
    ...o.hints?.length ? { hints: [...o.hints] } : {},
    ...o.references?.length ? { references: clone3(o.references) } : {},
    ...o.source ? { source: o.source } : {}
  };
  ex.hash = exerciseHash(ex);
  return { ok: true, exercise: ex };
}
function validateRubric(r) {
  const e = [];
  if (!isObj3(r) || !Array.isArray(r.components) || !r.components.length) return ["The rubric needs at least one component."];
  if (!r.components.some((c) => c.id === "objective")) e.push('The rubric must include the "objective" component.');
  for (const c of r.components) {
    if (typeof c.id !== "string") e.push("A rubric component has no id.");
    if (!(typeof c.weight === "number" && c.weight > 0 && Number.isFinite(c.weight))) e.push(`Rubric component "${c.id}" needs a positive weight.`);
  }
  if (new Set(r.components.map((c) => c.id)).size !== r.components.length) e.push("Rubric components must be unique.");
  return e;
}
function publicExercise(ex) {
  const { references: _drop, ...rest } = clone3(ex);
  void _drop;
  return rest;
}
function validateExerciseShape(v) {
  const e = [];
  if (!isObj3(v)) return ["an exercise must be an object"];
  if (v.format !== EXERCISE_FORMAT) e.push(`format must be "${EXERCISE_FORMAT}"`);
  if (typeof v.version !== "number") e.push("version must be a number");
  else if (v.version > TRAINING_VERSION) e.push(`exercise version ${v.version} is newer than this build supports (${TRAINING_VERSION})`);
  for (const k of ["id", "hash", "title", "side", "rulesEdition"]) if (typeof v[k] !== "string") e.push(`${k} must be a string`);
  if (v.side !== "A" && v.side !== "B") e.push('side must be "A" or "B"');
  if (!isObj3(v.objective) || !OBJECTIVES.includes(v.objective.kind)) e.push("objective.kind is missing or unsupported");
  if (!isObj3(v.rubric) || !Array.isArray(v.rubric.components)) e.push("rubric.components is missing");
  else e.push(...validateRubric(v.rubric));
  if (!isObj3(v.constraints)) e.push("constraints is missing");
  if (!isObj3(v.start)) e.push("start (the position) is missing");
  else {
    const se = validateState(v.start);
    if (se.length) e.push(`start is not a valid state: ${se.slice(0, 2).join("; ")}`);
  }
  return e;
}
function checkTacticalExercise(ex) {
  const errors = validateExerciseShape(ex);
  const notes = [];
  if (errors.length) return { ok: false, errors, notes };
  if (ex.rulesEdition !== "faq2026" && ex.rulesEdition !== "legacy") errors.push(`Unsupported rules edition "${ex.rulesEdition}": this build knows faq2026 and legacy and will not guess.`);
  if ((ex.start.rulesEdition ?? "legacy") !== ex.rulesEdition) errors.push("The start position's rules edition differs from the exercise's.");
  if (exerciseHash(ex) !== ex.hash) errors.push("The exercise hash does not match its content: the file was edited or damaged.");
  if (ex.start.pending) errors.push("The start position has a pending decision, which is unsupported.");
  if (ex.engine?.rulesHash !== BUILD_FINGERPRINT.rulesHash) notes.push(`Authored with engine ${ex.engine?.version ?? "unknown"} (different rules code). The position loads as stored; scoring re-executes under this build.`);
  return { ok: errors.length === 0, errors, notes };
}
function serializeTraining(ex) {
  return JSON.stringify(ex);
}
function makePack(id, title, exercises, createdAt = (/* @__PURE__ */ new Date()).toISOString()) {
  return { format: EXERCISE_PACK_FORMAT, version: TRAINING_VERSION, id, title, createdAt, exercises: clone3(exercises) };
}
function importExercises(text, existing) {
  const rep = { added: [], skipped: [], conflicts: [], errors: [] };
  let v;
  try {
    v = JSON.parse(text);
  } catch (e) {
    rep.errors.push(`The file is not valid JSON (${e.message}).`);
    return rep;
  }
  if (isObj3(v) && (v.format === "bloodboard-history" || v.format === "bloodboard-history-batch")) {
    rep.errors.push("This is a game history, not an exercise. Open it with History / Replay.");
    return rep;
  }
  if (isObj3(v) && v.format === ATTEMPT_FORMAT) {
    rep.errors.push("This is an attempt record, not an exercise. Import it from the exercise's attempts.");
    return rep;
  }
  let list;
  if (isObj3(v) && v.format === EXERCISE_PACK_FORMAT) {
    if (typeof v.version === "number" && v.version > TRAINING_VERSION) {
      rep.errors.push(`Pack version ${v.version} is newer than this build supports.`);
      return rep;
    }
    if (!Array.isArray(v.exercises)) {
      rep.errors.push("The pack has no exercises array.");
      return rep;
    }
    list = v.exercises;
  } else if (isObj3(v) && v.format === EXERCISE_FORMAT) list = [v];
  else {
    rep.errors.push("Not a Bloodboard exercise or exercise pack.");
    return rep;
  }
  const byId = new Map(existing.map((x) => [x.id, x]));
  const seen = /* @__PURE__ */ new Map();
  for (const raw of list) {
    const id = isObj3(raw) && typeof raw.id === "string" ? raw.id : "(no id)";
    const ex = raw;
    const chk = checkTacticalExercise(ex);
    if (!chk.ok) {
      rep.errors.push(`${id}: ${chk.errors.join(" ")}`);
      continue;
    }
    const prior = byId.get(ex.id) ?? seen.get(ex.id);
    if (prior) {
      if (prior.hash === ex.hash) rep.skipped.push({ id: ex.id, reason: "already present (identical content)" });
      else rep.conflicts.push({ id: ex.id, reason: "an exercise with this id but different content exists; it was NOT overwritten (rename one to keep both)" });
      continue;
    }
    seen.set(ex.id, ex);
    rep.added.push(clone3(ex));
  }
  return rep;
}
function newAttempt(ex, actor, opts = {}) {
  const startedAt = opts.startedAt ?? (/* @__PURE__ */ new Date()).toISOString();
  return {
    format: ATTEMPT_FORMAT,
    version: TRAINING_VERSION,
    id: opts.id ?? `att-${fnv([ex.hash, startedAt, actor.kind, String(opts.retryIndex ?? 0)])}`,
    exerciseId: ex.id,
    exerciseHash: ex.hash,
    rubric: { id: ex.rubric.id, version: ex.rubric.version },
    actor: clone3(actor),
    labels: { hintsUsed: 0, adviceUsed: false, retryIndex: opts.retryIndex ?? 0, undos: 0 },
    startedAt,
    elapsedMs: 0,
    status: "in-progress",
    log: [],
    engine: { version: BUILD_FINGERPRINT.version, engineHash: BUILD_FINGERPRINT.engineHash, rulesHash: BUILD_FINGERPRINT.rulesHash }
  };
}
function attemptStatus(ex, s, actions) {
  return finishedCheck(ex, s, actions);
}
function finishedCheck(ex, s, actions) {
  if (s.pending) return { finished: false };
  if (s.touchdown || s.teams[ex.side].score > ex.start.teams[ex.side].score) return { finished: true, why: "touchdown" };
  if (s.phase !== "play") return { finished: true, why: `phase changed to ${s.phase}` };
  if (s.turn.active !== ex.side || s.turn.half !== ex.start.turn.half) return { finished: true, why: "the Turn ended" };
  if (ex.constraints.maxActions !== void 0 && actions >= ex.constraints.maxActions) return { finished: true, why: "action limit reached" };
  return { finished: false };
}
function replayAttempt(ex, a) {
  if (a.exerciseHash !== ex.hash) return { ok: false, error: "This attempt was recorded against a different version of the exercise.", finished: false, actions: 0 };
  const v = verifyLog(ex.start, a.log);
  if (!v.ok) return { ok: false, error: `The attempt does not reproduce under the current rules (entry ${(v.at ?? 0) + 1}: ${v.error}).`, finished: false, actions: a.log.length };
  const s = v.final;
  const f = finishedCheck(ex, s, a.log.length);
  return { ok: true, state: s, finished: f.finished, why: f.why, actions: a.log.length };
}
function validateAttemptShape(v) {
  const e = [];
  if (!isObj3(v)) return ["an attempt must be an object"];
  if (v.format !== ATTEMPT_FORMAT) e.push(`format must be "${ATTEMPT_FORMAT}"`);
  if (typeof v.version !== "number") e.push("version must be a number");
  else if (v.version > TRAINING_VERSION) e.push(`attempt version ${v.version} is newer than this build supports`);
  for (const k of ["id", "exerciseId", "exerciseHash"]) if (typeof v[k] !== "string") e.push(`${k} must be a string`);
  if (!Array.isArray(v.log)) e.push("log must be an array");
  if (!isObj3(v.actor) || v.actor.kind !== "human" && v.actor.kind !== "coach") e.push("actor.kind must be human or coach");
  if (!isObj3(v.labels)) e.push("labels is missing");
  return e;
}
function importAttempt(text, exercises, existing) {
  let v;
  try {
    v = JSON.parse(text);
  } catch (e) {
    return { ok: false, error: `The file is not valid JSON (${e.message}).` };
  }
  if (isObj3(v) && v.format !== ATTEMPT_FORMAT) return { ok: false, error: "Not an attempt record." };
  const errs = validateAttemptShape(v);
  if (errs.length) return { ok: false, error: errs.join("; ") };
  const a = v;
  const ex = exercises.find((x) => x.id === a.exerciseId);
  if (!ex) return { ok: false, error: `The exercise "${a.exerciseId}" is not in your library. Import the exercise first.` };
  if (ex.hash !== a.exerciseHash) return { ok: false, error: "The attempt belongs to a different version of this exercise (content differs)." };
  const dup = existing.find((x) => x.id === a.id);
  if (dup && JSON.stringify(dup.log) !== JSON.stringify(a.log)) return { ok: false, error: "An attempt with this id but different content exists; it was not overwritten." };
  const p = replayAttempt(ex, a);
  if (!p.ok) return { ok: false, error: p.error ?? "does not reproduce" };
  return { ok: true, attempt: clone3(a), duplicate: !!dup, exercise: ex };
}
var LIMITS = [
  "Plan quality grades the committed action sequence replayed on alternate dice seeds; it does not see how the player would adapt after bad dice.",
  "Components are 0-1 rates under this exercise's declared rubric. The number is not a calibrated playing strength or a rating.",
  "Pending decisions in a sample use the recorded choice when the same question is asked, otherwise the first option offered."
];
var seedFor = (ex, tag, i) => {
  let h = 2166136261;
  for (const c of `${ex.hash}|${tag}|${i}`) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0;
  return h >>> 0;
};
function goalDistance(s, team2, carrier) {
  const p = carrier;
  if (!p.pos) return null;
  return Math.abs(scoringEndZoneX(team2) - p.pos.x);
}
function factsOf(ex, s, log, startCarrierDist) {
  const side = ex.side;
  const turnover = log.some((e) => e.team === side && e.outcome === "turnover");
  const scored = s.teams[side].score > ex.start.teams[side].score;
  const holder = ballHolder(s);
  const mine = !!holder && holder.team === side;
  const f = finishedCheck(ex, s, log.length);
  let objective = false;
  switch (ex.objective.kind) {
    case "score":
      objective = scored;
      break;
    case "keep-ball":
      objective = mine && !turnover;
      break;
    case "recover-ball":
      objective = mine;
      break;
    case "stop-carrier":
      objective = !(holder && holder.team !== side && holder.stance === "standing");
      break;
    case "no-turnover":
      objective = !turnover;
      break;
  }
  const hadBall = startCarrierDist !== null;
  let adj = null;
  if (mine && holder && holder.pos) adj = playersWithin(s, holder.pos, 1, side === "A" ? "B" : "A").filter((p) => p.stance === "standing").length;
  else if (hadBall) adj = 3;
  let progress = null;
  if (hadBall && startCarrierDist > 0) {
    progress = 0;
    if (mine && holder) {
      const d2 = goalDistance(s, side, holder);
      if (d2 !== null) progress = Math.max(0, Math.min(1, 1 - d2 / startCarrierDist));
    }
  }
  if (scored) progress = 1;
  const summary = scored ? "touchdown" : holder ? `${holder.team === side ? "own" : "opposing"} player holds the ball` : "ball loose or off the pitch";
  return { objective, turnover, scored, carrierKept: mine, carrierStanding: !!holder && mine && holder.stance === "standing", adjacentEnemies: adj, progress, actions: log.length, finishedBecause: f.finished ? f.why ?? null : null, summary };
}
function startCarrierDistance(ex) {
  usePitch(ex.start);
  const h = ballHolder(ex.start);
  if (!h || h.team !== ex.side) return null;
  return goalDistance(ex.start, ex.side, h);
}
function playSample(ex, inputs, seed) {
  let s = cloneState(ex.start);
  s.rng = { seed, counter: 0 };
  let ran = 0;
  let ranAll = true;
  for (const step of inputs) {
    if (finishedCheck(ex, s, ran).finished) {
      ranAll = ran === inputs.length;
      break;
    }
    const entry = { id: 0, team: ex.side, turn: s.turn.active === ex.side ? 0 : 0, title: "", input: step.input, events: [], decisions: [], outcome: "completed" };
    const r = tryStep(s, entry, step.decisions);
    if (!r) {
      ranAll = false;
      break;
    }
    s = r;
    ran++;
  }
  if (ran < inputs.length) ranAll = false;
  return { facts: factsOf(ex, s, s.log, startCarrierDistance(ex)), ranAll };
}
function tryStep(prev, entry, recorded) {
  let out = execute(prev, clone3(entry.input));
  if (out.status === "illegal") return null;
  let guard = 0;
  while (out.state.pending && guard++ < 50) {
    const req = out.state.pending.request;
    const rec = recorded.find((d2) => d2.requestId === req.id);
    const opt = rec && req.options.some((o) => o.id === rec.optionId) ? rec.optionId : req.options[0].id;
    out = decide(out.state, { requestId: req.id, optionId: opt });
    if (out.status === "illegal") return null;
  }
  return out.state.pending ? null : out.state;
}
function wilson(k, n) {
  if (n === 0) return [0, 1];
  const z = 1.96, p = k / n, d2 = 1 + z * z / n, c = p + z * z / (2 * n), w = z * Math.sqrt(p * (1 - p) / n + z * z / (4 * n * n));
  return [Math.max(0, (c - w) / d2), Math.min(1, (c + w) / d2)];
}
function evalSequence(ex, steps, tag, samples) {
  const minSamples = ex.rubric.minSamples ?? 50;
  const vals = {};
  let ranAll = 0;
  for (let i = 0; i < samples; i++) {
    const { facts, ranAll: ra } = playSample(ex, steps, seedFor(ex, tag, i));
    if (ra) ranAll++;
    const push = (id, v) => {
      if (v !== null) (vals[id] ?? (vals[id] = [])).push(v);
    };
    push("objective", facts.objective ? 1 : 0);
    push("turnoverFree", facts.turnover ? 0 : 1);
    push("ballSecurity", facts.carrierKept && facts.carrierStanding ? 1 : 0);
    push("carrierProtection", facts.adjacentEnemies === null ? null : 1 - Math.min(1, facts.adjacentEnemies / 3));
    push("progress", facts.progress);
  }
  const comps = ex.rubric.components.map((c) => {
    if (!KNOWN_COMPONENTS.includes(c.id)) return { id: c.id, weight: c.weight, available: false, mean: null, ci95: null, note: "unknown component for this grader version: ignored" };
    const v = vals[c.id] ?? [];
    if (v.length < Math.max(1, Math.ceil(samples / 2))) return { id: c.id, weight: c.weight, available: false, mean: null, ci95: null, note: "not measurable in most samples (e.g. no ball carrier): excluded" };
    const mean = v.reduce((a, b) => a + b, 0) / v.length;
    const binary = v.every((x) => x === 0 || x === 1);
    const ci = binary ? wilson(v.filter((x) => x === 1).length, v.length) : (() => {
      const sd = Math.sqrt(v.reduce((a, b) => a + (b - mean) ** 2, 0) / v.length);
      const h = 1.96 * sd / Math.sqrt(v.length);
      return [Math.max(0, mean - h), Math.min(1, mean + h)];
    })();
    return { id: c.id, weight: c.weight, available: true, mean, ci95: ci };
  });
  const av = comps.filter((c) => c.available);
  const objective = comps.find((c) => c.id === "objective");
  if (samples < minSamples) return { comps, total: null, ci: null, ranAll, reason: `ungraded: ${samples} samples is below the exercise's minimum of ${minSamples}` };
  if (!objective?.available) return { comps, total: null, ci: null, ranAll, reason: "ungraded: the objective component could not be measured" };
  const W = av.reduce((a, c) => a + c.weight, 0);
  const total = av.reduce((a, c) => a + c.weight * c.mean, 0) / W;
  const lo = av.reduce((a, c) => a + c.weight * c.ci95[0], 0) / W;
  const hi = av.reduce((a, c) => a + c.weight * c.ci95[1], 0) / W;
  return { comps, total, ci: [lo, hi], ranAll };
}
var stepsOf = (log) => log.map((e) => ({ input: e.input, decisions: e.decisions.map((d2) => ({ requestId: d2.requestId, optionId: d2.optionId })) }));
function stepFindings(ex, a, samples, tag) {
  usePitch(ex.start);
  const steps = stepsOf(a.log);
  const reached = new Array(steps.length).fill(0), turn = new Array(steps.length).fill(0), lost = new Array(steps.length).fill(0);
  for (let k = 0; k < samples; k++) {
    let s = cloneState(ex.start);
    s.rng = { seed: seedFor(ex, tag, k), counter: 0 };
    let ran = 0;
    for (let i = 0; i < steps.length; i++) {
      if (finishedCheck(ex, s, ran).finished) break;
      const holderBefore = ballHolder(s);
      const entry = { id: 0, team: ex.side, turn: 0, title: "", input: steps[i].input, events: [], decisions: [], outcome: "completed" };
      const r = tryStep(s, entry, steps[i].decisions);
      if (!r) break;
      reached[i]++;
      const last = r.log[r.log.length - 1];
      if (last && last.team === ex.side && last.outcome === "turnover") turn[i]++;
      const holderAfter = ballHolder(r);
      if (holderBefore && holderBefore.team === ex.side && !(holderAfter && holderAfter.team === ex.side)) lost[i]++;
      s = r;
      ran++;
    }
  }
  return steps.map((_, i) => {
    const n = reached[i];
    const rate = n ? turn[i] / n : null;
    const ci = n ? wilson(turn[i], n) : null;
    const flag = n < 20 ? "thin" : rate !== null && ci !== null && rate >= 0.15 && ci[0] >= 0.05 ? "risk" : "ok";
    const pct2 = (x) => `${Math.round(x * 100)}%`;
    const title = a.log[i]?.title || `action ${i + 1}`;
    const note = n === 0 ? "No alternate-dice replay reached this step." : flag === "thin" ? `Only ${n} replays reached this step: too few to say anything about it.` : `${turn[i]} of the ${n} replays that reached this step ended the Turn in a Turnover here (${pct2(rate)}, 95% interval ${pct2(ci[0])}\u2013${pct2(ci[1])})${lost[i] ? `; the ball carrier was lost at it in ${lost[i]}` : ""}.`;
    return { step: i + 1, title, reached: n, turnovers: turn[i], ballLost: lost[i], turnoverRate: rate, turnoverCi95: ci, ballLostRate: n ? lost[i] / n : null, flag, note };
  });
}
function divergenceOf(ex, a, yourTotal, yourCi, refs) {
  if (yourTotal === null || !yourCi) return void 0;
  const better = refs.filter((r) => r.total !== null && r.ci && r.ci[0] > yourCi[1]).sort((x, y) => y.total - x.total)[0];
  if (!better) return void 0;
  const mine = a.log.map((e) => e.input);
  let k = 0;
  while (k < mine.length && k < better.inputs.length && JSON.stringify(mine[k]) === JSON.stringify(better.inputs[k])) k++;
  const stateAt = (inputs, upTo) => {
    let s = cloneState(ex.start);
    for (let i = 0; i < upTo; i++) {
      const r = tryStep(s, { id: 0, team: ex.side, turn: 0, title: "", input: inputs[i], events: [], decisions: [], outcome: "completed" }, []);
      if (!r) return null;
      s = r;
    }
    return s;
  };
  const sy = stateAt(mine, k), st = stateAt(better.inputs, k);
  let yours = k < mine.length && sy ? describeInput(sy, mine[k]) : "you stopped here";
  let theirs = k < better.inputs.length && st ? describeInput(st, better.inputs[k]) : "it ended here";
  if (yours === theirs && k < mine.length && k < better.inputs.length) {
    const via = (i) => i.kind === "playerAction" && i.path.length ? ` (route: ${i.path.map((q) => `${q.to.x},${q.to.y}`).join(" \u2192 ")})` : "";
    yours += via(mine[k]);
    theirs += via(better.inputs[k]);
  }
  return { reference: better.label, step: k + 1, yours, theirs, referenceTotal: better.total, yourTotal, note: "The other line scored higher with an interval clearly above yours under the same method. It is one legal alternative, not the only accepted answer." };
}
function gradeAttempt(ex, a, opts = {}) {
  const samples = opts.samples ?? ex.rubric.samples ?? 200;
  const base = { grader: { ...GRADER }, exerciseHash: ex.hash, limits: [...LIMITS], hints: { used: a.labels.hintsUsed }, labels: clone3(a.labels) };
  const rp = replayAttempt(ex, a);
  const emptyQuality = (reason) => ({ graded: false, reason, total: null, ci95: null, components: [], samples: 0, plannedThroughSamples: 0, decisionPolicy: "recorded choice when the same question is asked, else first option", scale: "0-1 component rates; not a rating" });
  if (!rp.ok || !rp.state) return { ...base, legal: { ok: false, reason: rp.error }, realized: { objectiveAchieved: null, turnover: false, scored: false, actions: a.log.length, finishedBecause: null, finalSummary: "did not reproduce" }, quality: emptyQuality("ungraded: the attempt is not legal under the current rules") };
  const facts = factsOf(ex, rp.state, a.log, startCarrierDistance(ex));
  const realized = { objectiveAchieved: facts.objective, turnover: facts.turnover, scored: facts.scored, actions: a.log.length, finishedBecause: rp.why ?? null, finalSummary: facts.summary };
  if (!a.log.length) return { ...base, legal: { ok: true }, realized, quality: emptyQuality("ungraded: the attempt has no actions") };
  const ev = evalSequence(ex, stepsOf(a.log), `attempt:${a.id}`, samples);
  const report = {
    ...base,
    legal: { ok: true },
    realized,
    quality: { graded: ev.total !== null, ...ev.reason ? { reason: ev.reason } : {}, total: ev.total, ci95: ev.ci, components: ev.comps, samples, plannedThroughSamples: ev.ranAll, decisionPolicy: "recorded choice when the same question is asked, else first option", scale: "0-1 weighted mean of the declared components; not a rating" }
  };
  if (report.quality.graded) report.steps = stepFindings(ex, a, samples, `attempt:${a.id}`);
  if (ex.references?.length) {
    const evs = ex.references.map((r) => ({ r, e: evalSequence(ex, r.inputs.map((input) => ({ input, decisions: [] })), `ref:${r.label}`, samples) }));
    report.referenceComparison = evs.map(({ r, e }) => ({ label: r.label, total: e.total, actions: r.inputs.length }));
    const dv = divergenceOf(ex, a, ev.total, ev.ci, evs.map(({ r, e }) => ({ label: r.label, total: e.total, ci: e.ci, inputs: r.inputs })));
    if (dv) report.divergence = dv;
  }
  return report;
}

// src/engine/lan.ts
function applyWireUpdate(prev, u) {
  if (!prev) return { ok: false, reason: "no state yet" };
  if (prev.log.length !== u.logFrom) return { ok: false, reason: `log length ${prev.log.length} does not match the update (${u.logFrom})` };
  return { ok: true, state: { ...u.state, log: [...prev.log, ...u.logEntries] } };
}

// src/ai/engine.ts
var E = void 0;
function bindEngine(api) {
  E = api;
}

// src/ai/evaluate.ts
var BASE_WEIGHTS = {
  td: 100,
  hold: 28,
  progress: 1.4,
  scoreThreat: 30,
  carrierMarked: 0.4,
  carrierExposed: 0.5,
  cage: 1.5,
  receivers: 1.2,
  oppProgress: 1.4,
  oppScoreThreat: 30,
  pressure: 5,
  pressureReach: 1,
  contain: 0.3,
  shape: 0.1,
  screen: 1.3,
  looseBall: 14,
  ballChase: 1.2,
  standing: 6,
  prone: 3,
  stunned: 2,
  marking: 0.35,
  marked: 0.35,
  reroll: 5,
  turnoverCost: 1,
  crowd: 1
};
var activeCoach = null;
function setCoachParams(p) {
  activeCoach = p;
}
function coachParams() {
  return activeCoach;
}
function styleWeights(style) {
  const w = styleWeightsBase(style);
  return activeCoach?.weights ? activeCoach.weights(w) : w;
}
function styleWeightsBase(style) {
  const w = { ...BASE_WEIGHTS };
  if (style === "offensive") {
    w.progress *= 1.35;
    w.receivers *= 1.8;
    w.pressure *= 1.2;
    w.pressureReach *= 1.3;
    w.marking *= 1.5;
    w.screen *= 0.7;
    w.cage *= 0.8;
    w.turnoverCost *= 0.85;
  } else if (style === "defensive") {
    w.carrierMarked *= 1.25;
    w.carrierExposed *= 1.4;
    w.cage *= 1.6;
    w.screen *= 1.6;
    w.pressure *= 1.3;
    w.oppProgress *= 1.25;
    w.progress *= 0.8;
    w.receivers *= 0.6;
    w.marked *= 1.5;
    w.turnoverCost *= 1.25;
    w.crowd *= 1.25;
  }
  return w;
}
function emphasise(w, obj) {
  const x = { ...w };
  switch (obj) {
    case "stopScore":
      x.oppScoreThreat *= 1.4;
      x.pressure *= 1.5;
      x.screen *= 1.4;
      break;
    case "protectCarrier":
      x.carrierMarked *= 1.4;
      x.carrierExposed *= 1.4;
      x.cage *= 1.4;
      break;
    case "recoverBall":
    case "contestBall":
      x.looseBall *= 1.4;
      break;
    case "advance":
      x.progress *= 1.15;
      x.receivers *= 1.2;
      break;
    case "pressureCarrier":
      x.pressure *= 1.3;
      x.pressureReach *= 1.3;
      break;
    default:
      break;
  }
  return x;
}
function clockAdjusted(w, s, team2) {
  const m = s.match;
  if (!m || m.half !== 2) return w;
  const left = E.rulesFor(s).turnsPerHalf - s.teams[team2].turn;
  if (left > 2) return w;
  const diff = s.teams[team2].score - s.teams[team2 === "A" ? "B" : "A"].score;
  if (!diff) return w;
  const x = { ...w };
  if (diff < 0) {
    x.turnoverCost *= 0.7;
    x.scoreThreat *= 1.3;
    x.progress *= 1.2;
    x.receivers *= 1.3;
  } else {
    x.turnoverCost *= 1.25;
    x.carrierExposed *= 1.3;
    x.carrierMarked *= 1.2;
    x.oppScoreThreat *= 1.25;
    x.screen *= 1.2;
  }
  return x;
}
var other2 = (t) => t === "A" ? "B" : "A";
var lastX = () => E.pitch().w - 1;
var lastY = () => E.pitch().h - 1;
var goalX = (t) => t === "A" ? lastX() : 0;
var dGoal = (t, c) => Math.abs(goalX(t) - c.x);
var cheb = (a, b) => Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y));
function horizonFor(s, team2) {
  const tph = E.rulesFor(s).turnsPerHalf;
  return { ourNext: s.teams[team2].turn < tph, oppNext: s.teams[other2(team2)].turn < tph };
}
function playerWorth(p) {
  let v = 1 + 0.18 * Math.max(0, p.st - 3);
  for (const k of p.skills) if (["block", "dodge", "guard", "mightyBlow", "tackle", "sureHands", "catch", "pass", "leader"].includes(k.id)) v += 0.06;
  return v;
}
var up = (p) => p.location === "pitch" && p.stance === "standing";
var active = (p) => up(p) && !p.distracted;
function reachChance(need, ma) {
  if (need <= ma) return 1;
  if (need === ma + 1) return 5 / 6;
  if (need === ma + 2) return 25 / 36;
  return 0;
}
function evaluate(s, team2, w, hz, driveOver = false) {
  const opp = other2(team2);
  const t = {};
  const add2 = (k, v) => {
    if (v) t[k] = (t[k] ?? 0) + v;
  };
  add2("score", w.td * (s.teams[team2].score - s.teams[opp].score));
  const tph = E.rulesFor(s).turnsPerHalf;
  add2("rerolls", s.teams[team2].rerolls * w.reroll * (0.1 + 0.9 * Math.max(0, tph - s.teams[team2].turn) / (tph - 1)));
  let ours = 0;
  let theirs = 0;
  for (const p of s.players) {
    if (p.location !== "pitch") continue;
    const v = playerWorth(p) * (p.stance === "standing" ? w.standing : p.stance === "prone" ? w.prone : w.stunned);
    if (p.team === team2) ours += v;
    else theirs -= v;
  }
  add2("players", ours);
  add2("opponents", theirs);
  if (driveOver) return { total: sum(t), terms: t };
  const g = grid(s);
  const tzOf = (tm) => tm === "A" ? g.tzA : g.tzB;
  const marks = (c, tm) => tzOf(other2(tm))[c.x * 15 + c.y];
  const pitch2 = g.pitch;
  let mk = 0;
  for (const p of pitch2) {
    if (!active(p)) continue;
    const n = Math.min(3, marks(p.pos, p.team));
    if (!n) continue;
    mk += p.team === team2 ? -w.marked * n : w.marking * n;
  }
  add2("marking", mk);
  if (hz.oppNext && w.crowd) {
    let cr = 0;
    for (const p of pitch2) {
      if (p.team !== team2 || !up(p)) continue;
      const c = p.pos;
      if (c.x !== 0 && c.x !== lastX() && c.y !== 0 && c.y !== lastY()) continue;
      const sq = E.crowdPushSquares(s, p);
      if (!sq.length) continue;
      let pThreat = 0;
      for (const a of sq) {
        const q = g.occ[a.x * 15 + a.y];
        if (q && q.team === opp && active(q)) pThreat = Math.max(pThreat, 0.6);
        else if (!q) {
          for (const r of pitch2) if (r.team === opp && active(r) && cheb(r.pos, a) <= r.ma + 1) pThreat = Math.max(pThreat, 0.25);
        }
      }
      if (pThreat) cr -= pThreat * (2 / 3) * (w.standing * playerWorth(p) + 2);
    }
    add2("crowd", w.crowd * cr);
  }
  const ball = s.ball;
  const holder = ball.kind === "held" ? pitch2.find((p) => p.id === ball.playerId) : void 0;
  if (holder && holder.pos) {
    const c = holder.pos;
    if (holder.team === team2) {
      const markers = marks(c, team2);
      let cage = 0;
      let recv = 0;
      const dg = dGoal(team2, c);
      let follow = 0;
      for (const q of pitch2) {
        if (q.team !== team2 || q.id === holder.id) continue;
        const d2 = cheb(q.pos, c);
        if (active(q)) follow += Math.min(lastX() - dGoal(team2, q.pos), lastX() - dg + 3);
        if (d2 === 1 && up(q)) cage += q.pos.x !== c.x && q.pos.y !== c.y ? 1 : 0.5;
        if (active(q) && dGoal(team2, q.pos) < dg && d2 <= 6 && marks(q.pos, team2) === 0) recv++;
      }
      const exp = hz.oppNext ? exposureG(g, team2, holder) : { p: 0, n: 0 };
      const expEff = Math.min(1, exp.p * (1 + 0.05 * Math.min(exp.n, 4)));
      const edge = c.y === 0 || c.y === lastY() || c.x === 0 || c.x === lastX() ? 1.25 : 1;
      const pKeep = hz.oppNext ? Math.max(0.05, (1 - Math.min(0.9, w.carrierExposed * expEff * edge)) * Math.pow(1 - Math.min(0.9, w.carrierMarked * edge), markers)) : 1;
      let threat = 0;
      if (hz.ourNext && dg <= holder.ma + 2) threat = w.scoreThreat * reachChance(dg, holder.ma) * (markers ? 0.5 : 1);
      const supp = hz.ourNext ? w.receivers * Math.min(recv, 3) : 0;
      const turnsLeft = Math.max(0, tph - s.teams[team2].turn);
      const pace = Math.max(3, holder.ma - 2);
      const need = dg <= holder.ma + 2 ? 1 : 1 + Math.ceil((dg - holder.ma - 2) / pace);
      const timeF = hz.ourNext ? Math.pow(0.6, Math.max(0, need - turnsLeft)) : 1;
      const prog = Math.min(w.progress * (lastX() - dg) * (hz.ourNext ? timeF : 0.25), Math.max(0, 0.85 * w.td - w.hold - threat - supp));
      add2("ball", w.hold);
      add2("progress", prog);
      add2("scoreThreat", threat);
      add2("support", supp);
      add2("support", w.shape * follow);
      add2("carrierSafety", -(1 - pKeep) * (w.hold + prog + threat + supp) + w.cage * (E.isSevens(s) ? 0.7 : 1) * Math.min(cage, 4));
    } else {
      const markersUs = marks(c, opp);
      const dg = dGoal(opp, c);
      add2("ball", -w.hold);
      add2("oppProgress", -w.oppProgress * (lastX() - dg) * (hz.oppNext ? 1 : 0.25));
      if (hz.oppNext && dg <= holder.ma + 2) add2("oppThreat", -w.oppScoreThreat * reachChance(dg, holder.ma) * Math.pow(0.5, markersUs));
      let theirRecv = false;
      let reachers = 0;
      let screens = 0;
      const ourX = goalX(opp);
      const lo = Math.min(c.x, ourX);
      const hi = Math.max(c.x, ourX);
      let contain = 0;
      for (const q of pitch2) {
        if (!active(q)) continue;
        const qc = q.pos;
        if (q.team === team2) contain += Math.max(-8, Math.min(0, 3 - cheb(qc, c)));
        if (q.team === opp) {
          if (q.id !== holder.id && cheb(qc, c) <= 4 && dGoal(opp, qc) <= q.ma + 1 && marks(qc, opp) === 0) theirRecv = true;
        } else {
          if (cheb(qc, c) - 1 <= q.ma + 2) reachers++;
          if (qc.x > lo && qc.x < hi && Math.abs(qc.y - c.y) <= 3) screens++;
        }
      }
      if (hz.oppNext && theirRecv) add2("oppThreat", -w.oppScoreThreat * 0.25 * Math.pow(0.6, markersUs));
      add2("pressure", w.pressure * Math.min(markersUs, 3));
      if (hz.ourNext) add2("pressure", w.pressureReach * Math.min(3, reachers));
      if (hz.oppNext) add2("screen", w.screen * Math.min(screens, 5));
      add2("pressure", w.contain * contain);
    }
  } else if (ball.kind === "ground") {
    const b = ball.pos;
    let dUs = 99;
    let dThem = 99;
    for (const q of pitch2) {
      if (!active(q)) continue;
      const d2 = cheb(q.pos, b);
      if (q.team === team2) dUs = Math.min(dUs, d2);
      else dThem = Math.min(dThem, d2);
    }
    add2("looseBall", w.looseBall * Math.max(-1, Math.min(1, (dThem - dUs) / 3)));
    let near = 0;
    for (const q of pitch2) if (active(q) && cheb(q.pos, b) <= 2) near += q.team === team2 ? 1 : -1;
    add2("looseBall", -w.ballChase * Math.min(dUs, 12) + w.ballChase * 0.5 * Math.max(-3, Math.min(3, near)));
    add2("looseBall", 0.4 * (lastX() - dGoal(team2, b) - (lastX() - dGoal(opp, b))) * 0.3);
  }
  return { total: sum(t), terms: t };
}
function sum(t) {
  let x = 0;
  for (const k in t) x += t[k];
  return x;
}
function grid(s) {
  const occ = new Array(26 * 15);
  const tzA = new Int8Array(26 * 15);
  const tzB = new Int8Array(26 * 15);
  const pitch2 = [];
  for (const p of s.players) {
    if (p.location !== "pitch" || !p.pos) continue;
    pitch2.push(p);
    occ[p.pos.x * 15 + p.pos.y] = p;
    if (!E.hasTackleZone(p)) continue;
    const tz = p.team === "A" ? tzA : tzB;
    for (let dx = -1; dx <= 1; dx++)
      for (let dy = -1; dy <= 1; dy++) {
        if (!dx && !dy) continue;
        const x = p.pos.x + dx;
        const y = p.pos.y + dy;
        if (x >= 0 && x <= lastX() && y >= 0 && y <= lastY()) tz[x * 15 + y]++;
      }
  }
  return { pitch: pitch2, occ, tzA, tzB };
}
function exposureG(g, team2, holder) {
  const opp = other2(team2);
  const c = holder.pos;
  const ourTz = team2 === "A" ? g.tzA : g.tzB;
  const theirTz = team2 === "A" ? g.tzB : g.tzA;
  let best = 0;
  const who = /* @__PURE__ */ new Set();
  const inb = (x, y) => x >= 0 && x <= lastX() && y >= 0 && y <= lastY();
  for (let dx = -1; dx <= 1; dx++)
    for (let dy = -1; dy <= 1; dy++) {
      if (!dx && !dy) continue;
      const n = { x: c.x + dx, y: c.y + dy };
      if (!inb(n.x, n.y)) continue;
      if (g.occ[n.x * 15 + n.y]) continue;
      let walkIn = false;
      let assists = 0;
      for (let ex = -1; ex <= 1; ex++)
        for (let ey = -1; ey <= 1; ey++) {
          if (!ex && !ey) continue;
          const mx = n.x + ex;
          const my = n.y + ey;
          if (!inb(mx, my) || mx === c.x && my === c.y) continue;
          const o = g.occ[mx * 15 + my];
          if (!o && ourTz[mx * 15 + my] === 0) walkIn = true;
          if (o && o.team === team2 && up(o) && !o.distracted && E.hasTackleZone(o) && theirTz[mx * 15 + my] === 0) assists++;
        }
      const tzN = ourTz[n.x * 15 + n.y];
      const blockF = assists === 0 ? 1 : assists === 1 ? 0.65 : 0.4;
      for (const q of g.pitch) {
        if (q.team !== opp || q.stance === "stunned" || cheb(q.pos, c) <= 1) continue;
        const qc = q.pos;
        const reach = reachChance(cheb(qc, n), q.ma - (q.stance === "prone" ? 3 : 0));
        if (reach <= 0) continue;
        const free = walkIn || cheb(qc, n) === 1 && ourTz[qc.x * 15 + qc.y] === 0;
        let pIn = 1;
        if (!free) {
          const one = E.d6SuccessProb(q.ag, -tzN);
          pIn = E.hasSkill(q, "dodge") ? one + (1 - one) * one : one;
        }
        const pr = reach * pIn * blockF;
        if (pr > 0.01) {
          who.add(q.id);
          if (pr > best) best = pr;
        }
      }
    }
  return { p: best, n: who.size };
}
function evalTotal(s, team2, w, hz, driveOver = false) {
  return evaluate(s, team2, w, hz, driveOver).total;
}

// src/ai/types.ts
var OBJECTIVE_LABEL = {
  score: "Take the scoring chance",
  stopScore: "Stop the opponent scoring",
  recoverBall: "Recover the loose ball",
  protectCarrier: "Protect the ball carrier",
  advance: "Advance the attack",
  pressureCarrier: "Pressure their ball carrier",
  contestBall: "Contest the loose ball",
  position: "Improve positioning",
  disrupt: "Disrupt the opponent"
};

// src/ai/brain.ts
var DEFAULTS = { threshold: 1e-4, maxLeaves: 2500, maxExplored: 12, minGain: 0.5 };
var up2 = (p) => p.location === "pitch" && p.stance === "standing" && !!p.pos;
var activeUp = (p) => up2(p) && !p.distracted;
var pct = (x) => `${Math.round(x * 100)}%`;
function holderOf(s) {
  return s.ball.kind === "held" ? E.findPlayer(s, s.ball.playerId) : void 0;
}
function valueWith(b, id, to, ballTo) {
  const wp = b.work.players.find((q) => q.id === id);
  const saved = { pos: wp.pos, stance: wp.stance, ball: b.work.ball };
  if (to) {
    wp.pos = { ...to };
    wp.stance = "standing";
  }
  if (ballTo === "pickup") b.work.ball = { kind: "held", playerId: id };
  else if (ballTo) b.work.ball = { kind: "held", playerId: ballTo.holder };
  const v = evalTotal(b.work, b.team, b.w, b.hz);
  wp.pos = saved.pos;
  wp.stance = saved.stance;
  b.work.ball = saved.ball;
  return v;
}
function inScoringZone(team2, c) {
  return c.x === goalX(team2);
}
function chooseObjective(s, team2, style) {
  const opp = other2(team2);
  const hz = horizonFor(s, team2);
  const h = holderOf(s);
  const pitch2 = s.players.filter((p) => p.location === "pitch" && p.pos);
  if (h && h.team === team2 && h.pos) {
    const act = s.turn.activation;
    const canAct2 = !h.activated || act?.playerId === h.id && !act.over;
    if (canAct2 && h.stance === "standing") {
      const ez = E.reachableSquares(s, h.id).filter((r) => inScoringZone(team2, r.c));
      let best = 0;
      for (const r of ez.slice(0, 6)) {
        const route = E.safestRoute(s, h.id, r.c);
        if (route) best = Math.max(best, route.pSafe);
      }
      if (best >= 0.3) return { id: "score", urgent: true, why: `${E.label(h)} can reach the End Zone this Turn (about ${pct(best)} without Team Re-rolls)` };
    }
    const markers = E.markersOf(s, h.pos, team2).length;
    const threats = pitch2.filter((q) => q.team === opp && activeUp(q) && cheb(q.pos, h.pos) > 1 && cheb(q.pos, h.pos) - 1 <= q.ma + 2).length;
    const cage = pitch2.filter((q) => q.team === team2 && q.id !== h.id && up2(q) && cheb(q.pos, h.pos) === 1).length;
    if (markers) return { id: "protectCarrier", urgent: true, why: `${E.label(h)} holds the ball and is Marked by ${markers} opponent${markers > 1 ? "s" : ""}` };
    const obj = coachParams()?.objectives;
    if (hz.oppNext && threats >= (obj?.protectThreats ?? (style === "defensive" ? 1 : 2)) && cage < (obj?.protectCageBelow ?? (style === "offensive" ? 1 : 2))) return { id: "protectCarrier", urgent: false, why: `${threats} opponent${threats > 1 ? "s" : ""} could reach ${E.label(h)} next Turn` };
    return { id: "advance", urgent: false, why: `${E.label(h)} has the ball, ${dGoal(team2, h.pos)} squares from the End Zone` };
  }
  if (h && h.team === opp && h.pos) {
    const dg = dGoal(opp, h.pos);
    if (hz.oppNext && dg <= h.ma + 2) return { id: "stopScore", urgent: true, why: `${E.label(h)} could score next Turn (${dg} squares from our End Zone, MA ${h.ma})` };
    return { id: "pressureCarrier", urgent: false, why: `${E.label(h)} has the ball, ${dg} squares from our End Zone` };
  }
  if (s.ball.kind === "ground") {
    const b = s.ball.pos;
    const near = (tm) => Math.min(99, ...pitch2.filter((q) => q.team === tm && activeUp(q)).map((q) => cheb(q.pos, b)));
    const dUs = near(team2);
    const dThem = near(opp);
    if (dThem <= 3 || dThem <= dUs) return { id: "recoverBall", urgent: true, why: `the ball is loose; nearest opponent ${dThem} square${dThem === 1 ? "" : "s"} away, nearest team-mate ${dUs}` };
    return { id: "contestBall", urgent: false, why: `the ball is loose; nearest team-mate ${dUs} squares away` };
  }
  return { id: "position", urgent: false, why: "no one has the ball" };
}
function canAct(s, p) {
  return !E.activationBlockReason(s, p);
}
function blockScore(code) {
  return { "3D": 3, "2D": 2, "1D": 1, "-2D": -1, "-3D": -2 }[code] ?? 0;
}
function genForPlayer(b, p) {
  const s = b.s;
  const out = [];
  let best = 0;
  if (!p.pos || !canAct(s, p)) return { cands: out, best };
  const opts = E.actionOptions(s, p);
  const on = (a) => opts.find((o) => o.action === a && o.enabled);
  const act = s.turn.activation;
  const continuing = !!act && act.playerId === p.id && !act.over;
  const moveAction = continuing ? act.action : on("move") ? "move" : null;
  const holder = holderOf(s);
  const carrying = holder?.id === p.id;
  const who = E.label(p);
  const failBase = 3 + (carrying ? 22 : 0) + 4;
  if (moveAction && ["move", "blitz", "handoff", "pass", "secure"].includes(moveAction)) {
    const startMarked = E.markersOf(s, p.pos, b.team).length > 0 && p.stance === "standing";
    const dodgeP = startMarked ? E.d6SuccessProb(p.ag, 0) : 1;
    const reach = E.reachableSquares(s, p.id);
    const scored = [];
    const loose = s.ball.kind === "ground" ? s.ball.pos : null;
    for (const r of reach) {
      const pr = Math.pow(5 / 6, r.rushes) * dodgeP;
      const isTD = carrying && inScoringZone(b.team, r.c);
      const pickup = !!loose && loose.x === r.c.x && loose.y === r.c.y;
      const v = isTD ? b.V0 + b.w.td : valueWith(b, p.id, r.c, pickup ? "pickup" : void 0);
      const pSucc = pickup ? pr * E.d6SuccessProb(p.ag, -E.markersOf(s, r.c, b.team).length) : pr;
      scored.push({ c: r.c, pre: pSucc * (v - b.V0) - (1 - pSucc) * failBase, v });
    }
    scored.sort((x, y) => y.pre - x.pre);
    const keep = scored.slice(0, 3);
    if (carrying) {
      const byAdvance = /* @__PURE__ */ new Map();
      for (const k of scored) {
        const d2 = dGoal(b.team, k.c);
        const list = byAdvance.get(d2) ?? [];
        if (list.length < 2) list.push(k);
        byAdvance.set(d2, list);
      }
      const lists = [...byAdvance.values()].sort((x, y) => y[0].pre - x[0].pre);
      lists.forEach((list, i) => {
        for (const k of list.slice(0, i < 3 ? 2 : 1)) if (!keep.includes(k)) keep.push(k);
      });
    }
    if (loose && !keep.some((k) => k.c.x === loose.x && k.c.y === loose.y)) {
      const ballSq = scored.find((k) => k.c.x === loose.x && k.c.y === loose.y);
      if (ballSq) keep.push(ballSq);
    }
    if (carrying) {
      const td = scored.filter((k) => inScoringZone(b.team, k.c)).slice(0, 2);
      for (const k of td) if (!keep.includes(k)) keep.push(k);
    }
    const hungry = continuing && act.bloodlust === "hungry";
    const thralls = hungry ? s.players.filter((q) => q.team === b.team && q.id !== p.id && q.location === "pitch" && q.pos && q.keywords.some((k) => k.toLowerCase() === "thrall")) : [];
    const nextToThrall = (c) => thralls.some((q) => cheb(q.pos, c) === 1);
    if (hungry) {
      const biteSq = scored.filter((k) => nextToThrall(k.c)).slice(0, 2);
      for (const k of biteSq) if (!keep.includes(k)) keep.push(k);
    }
    for (const k of keep) {
      const route = E.safestRoute(s, p.id, k.c);
      if (!route) continue;
      const pickup = !!loose && loose.x === k.c.x && loose.y === k.c.y;
      const pSucc = pickup ? route.pSafe * E.d6SuccessProb(p.ag, -E.markersOf(s, k.c, b.team).length) : route.pSafe;
      const pre = pSucc * (k.v - b.V0) - (1 - pSucc) * failBase + (hungry && nextToThrall(k.c) ? pSucc * failBase * 2 : 0);
      best = Math.max(best, route.pSafe >= 0.999 ? pre : 0);
      const kind = pickup ? "pickup" : carrying && inScoringZone(b.team, k.c) ? "score" : carrying ? "carry" : continuing ? "continue" : "move";
      out.push({
        input: { kind: "playerAction", playerId: p.id, action: moveAction, path: route.path },
        label: `${who}: ${pickup ? "pick up the ball in" : kind === "score" ? "run in to score at" : "move to"} ${E.board.fmt(k.c)}`,
        kind,
        playerId: p.id,
        prescore: pre
      });
    }
    if (p.stance === "prone" && !continuing) {
      const v = valueWith(b, p.id, p.pos);
      const pre = v - b.V0;
      best = Math.max(best, pre);
      out.push({ input: { kind: "playerAction", playerId: p.id, action: "move", path: [] }, label: `${who}: stand up`, kind: "standUp", playerId: p.id, prescore: pre });
    }
  }
  const opps2 = b.s.players.filter((q) => q.team === b.opp && up2(q));
  const keyTarget = (q) => !!holder && !!holder.pos && (holder.id === q.id || holder.team === b.team && cheb(q.pos, holder.pos) === 1);
  if (on("block") && p.stance === "standing") {
    for (const q of opps2) {
      if (cheb(q.pos, p.pos) !== 1) continue;
      const bb = E.blockBreakdown(s, p.id, q.id);
      const pre = 4 + blockScore(bb.code) * 2 + (holder?.id === q.id ? 25 : 0);
      out.push({ input: { kind: "playerAction", playerId: p.id, action: "block", path: [], blockTarget: q.id }, label: `${who}: Block ${E.label(q)} (${bb.code})`, kind: "block", playerId: p.id, prescore: pre, key: keyTarget(q) });
    }
  }
  const blitzDone = continuing && act.action === "blitz" && act.blocksDone > 0;
  if (on("blitz") && !blitzDone) {
    const mb = E.movementBudget(s, p.id);
    const total = mb ? mb.maLeft + mb.rushesLeft : 0;
    const reach = new Map(E.reachableSquares(s, p.id).map((r) => [`${r.c.x},${r.c.y}`, r]));
    const ourCarrier = holder && holder.team === b.team ? holder : void 0;
    const prio = (q) => (holder?.id === q.id ? 100 : 0) + (ourCarrier && cheb(q.pos, ourCarrier.pos) === 1 ? 40 : 0) + (ourCarrier ? 10 - Math.min(10, cheb(q.pos, ourCarrier.pos)) : 0) + q.st;
    const declared = continuing ? act.blitzTarget : void 0;
    const targets = opps2.filter((q) => (!declared || q.id === declared) && cheb(q.pos, p.pos) - 1 <= total - 1).sort((x, y) => prio(y) - prio(x)).slice(0, 4);
    for (const q of targets) {
      let bestSq = null;
      const squares = cheb(q.pos, p.pos) === 1 ? [p.pos] : [];
      for (const n of E.board.neighbours(q.pos)) {
        const r = reach.get(`${n.x},${n.y}`);
        if (r && r.steps <= total - 1) squares.push(n);
      }
      for (const c of squares) {
        const wp = b.work.players.find((x) => x.id === p.id);
        const saved = wp.pos;
        wp.pos = { ...c };
        const code = E.blockBreakdown(b.work, p.id, q.id).code;
        wp.pos = saved;
        const r = reach.get(`${c.x},${c.y}`);
        const steps = r ? r.steps : 0;
        const risk = r ? Math.pow(5 / 6, Math.max(0, steps + 1 - (mb?.maLeft ?? 0))) : 1;
        const score = blockScore(code) * risk - steps * 0.01;
        if (!bestSq || score > bestSq.score) bestSq = { c, score, steps };
      }
      if (!bestSq) continue;
      const route = bestSq.c === p.pos ? { path: [], pSafe: 1 } : E.safestRoute(s, p.id, bestSq.c);
      if (!route || route.path.length > total - 1) continue;
      out.push({
        input: { kind: "playerAction", playerId: p.id, action: "blitz", path: route.path, blitzTarget: q.id, blockTarget: q.id },
        label: `${who}: Blitz ${E.label(q)}${route.path.length ? ` from ${E.board.fmt(bestSq.c)}` : ""}`,
        kind: "blitz",
        playerId: p.id,
        prescore: 5 + bestSq.score * 2 + (holder?.id === q.id ? 30 : 0) - (1 - route.pSafe) * 10,
        key: keyTarget(q)
      });
    }
  }
  if (carrying && p.stance === "standing") {
    const mates2 = b.s.players.filter((q) => q.team === b.team && q.id !== p.id && activeUp(q));
    if (on("pass") && p.pa !== null) {
      const rows = [];
      for (const q of mates2) {
        const rng = E.board.passRange(p.pos, q.pos);
        if (!rng || rng === "bomb") continue;
        const base = rng === "quick" ? 0.72 : rng === "short" ? 0.58 : 0.42;
        const pr = base * E.d6SuccessProb(q.ag, -E.markersOf(s, q.pos, b.team).length);
        const v = inScoringZone(b.team, q.pos) ? b.V0 + b.w.td : valueWith(b, q.id, null, { holder: q.id });
        rows.push({ input: { kind: "playerAction", playerId: p.id, action: "pass", path: [], passTarget: { ...q.pos } }, label: `${who}: ${rng} pass to ${E.label(q)}`, kind: "pass", playerId: p.id, prescore: pr * (v - b.V0) - (1 - pr) * 25 });
      }
      rows.sort((x, y) => y.prescore - x.prescore);
      out.push(...rows.slice(0, 3));
    }
    if (on("handoff")) {
      const mb = E.movementBudget(s, p.id);
      const total = mb ? mb.maLeft + mb.rushesLeft : 0;
      const reach = new Map(E.reachableSquares(s, p.id).map((r) => [`${r.c.x},${r.c.y}`, r]));
      const rows = [];
      for (const q of mates2) {
        if (cheb(q.pos, p.pos) - 1 > total) continue;
        let sq = cheb(q.pos, p.pos) === 1 ? p.pos : null;
        if (!sq) {
          let bestSteps = 99;
          for (const n of E.board.neighbours(q.pos)) {
            const r = reach.get(`${n.x},${n.y}`);
            if (r && r.steps < bestSteps) {
              bestSteps = r.steps;
              sq = n;
            }
          }
        }
        if (!sq) continue;
        const route = sq === p.pos ? { path: [], pSafe: 1 } : E.safestRoute(s, p.id, sq);
        if (!route) continue;
        const pr = route.pSafe * E.d6SuccessProb(q.ag, -E.markersOf(s, q.pos, b.team).length + 1);
        const wp = b.work.players.find((x) => x.id === p.id);
        const saved = wp.pos;
        wp.pos = { ...sq };
        const v = inScoringZone(b.team, q.pos) ? b.V0 + b.w.td : valueWith(b, q.id, null, { holder: q.id });
        wp.pos = saved;
        rows.push({ input: { kind: "playerAction", playerId: p.id, action: "handoff", path: route.path, handoffTarget: q.id }, label: `${who}: hand the ball to ${E.label(q)}`, kind: "handoff", playerId: p.id, prescore: pr * (v - b.V0) - (1 - pr) * 25 });
      }
      rows.sort((x, y) => y.prescore - x.prescore);
      out.push(...rows.slice(0, 2));
    }
  }
  if (on("secure") && s.ball.kind === "ground") {
    const route = E.safestRoute(s, p.id, s.ball.pos);
    if (route) {
      const v = valueWith(b, p.id, s.ball.pos, "pickup");
      const pr = route.pSafe * (5 / 6);
      out.push({ input: { kind: "playerAction", playerId: p.id, action: "secure", path: route.path }, label: `${who}: Secure the Ball in ${E.board.fmt(s.ball.pos)}`, kind: "secure", playerId: p.id, prescore: pr * (v - b.V0) - (1 - pr) * failBase });
    }
  }
  const pv = opts.find((o) => o.action === "special" && o.special === "projectileVomit" && o.enabled);
  if (pv) {
    for (const q of opps2) {
      if (cheb(q.pos, p.pos) !== 1) continue;
      out.push({ input: { kind: "playerAction", playerId: p.id, action: "special", special: "projectileVomit", path: [], vomitTarget: q.id }, label: `${who}: Projectile Vomit on ${E.label(q)}`, kind: "vomit", playerId: p.id, prescore: 3 + (holder?.id === q.id ? 20 : 0) });
    }
  }
  if (on("foul") && !carrying && p.stance === "standing") {
    const downs = b.s.players.filter((q) => q.team === b.opp && q.location === "pitch" && q.pos && q.stance !== "standing");
    const reachF = downs.length ? E.reachableSquares(s, p.id) : [];
    const rowsF = [];
    for (const q of downs) {
      let sq = cheb(q.pos, p.pos) === 1 ? p.pos : null;
      if (!sq) {
        let bestSteps = 99;
        for (const r of reachF) {
          if (cheb(r.c, q.pos) !== 1 || r.rushes > 0) continue;
          const steps = cheb(r.c, p.pos);
          if (steps < bestSteps) {
            bestSteps = steps;
            sq = r.c;
          }
        }
      }
      if (!sq) continue;
      const route = sq === p.pos ? { path: [], pSafe: 1 } : E.safestRoute(s, p.id, sq);
      if (!route || route.pSafe < 0.99) continue;
      const wp = b.work.players.find((x) => x.id === p.id);
      const saved = wp.pos;
      wp.pos = { ...sq };
      const as = E.foulAssists(b.work, wp, b.work.players.find((x) => x.id === q.id));
      wp.pos = saved;
      const net = as.off.length - as.def.length;
      let pBreak = 0;
      for (let d1 = 1; d1 <= 6; d1++) for (let d2 = 1; d2 <= 6; d2++) if (d1 + d2 + net >= q.av) pBreak += 1 / 36;
      const pRemoved = pBreak * (15 / 36);
      const pSent = 1 / 6 + Math.max(0, pBreak - 1 / 6) * (1 / 6);
      rowsF.push({ input: { kind: "playerAction", playerId: p.id, action: "foul", path: route.path, foulTarget: q.id }, label: `${who}: Foul ${E.label(q)}`, kind: "foul", playerId: p.id, prescore: 6 * pRemoved - 8 * pSent });
    }
    rowsF.sort((x, y) => y.prescore - x.prescore);
    out.push(...rowsF.slice(0, 1));
  }
  if (on("ttm")) {
    for (const tp of E.throwablePlayers(s, p)) {
      if (holder?.id !== tp.id) continue;
      const targets = [];
      const mid = lastY() / 2;
      for (let y = 1; y < lastY(); y++) {
        const c = { x: goalX(b.team), y };
        if (E.ttmRange(p.pos, c) && !E.playerAt(s, c)) targets.push(c);
      }
      targets.sort((x, y) => Math.abs(x.y - mid) - Math.abs(y.y - mid));
      for (const c of targets.slice(0, 2)) {
        out.push({ input: { kind: "playerAction", playerId: p.id, action: "ttm", path: [], thrownPlayerId: tp.id, throwTarget: c }, label: `${who}: throw ${E.label(tp)} (with the ball) at ${E.board.fmt(c)}`, kind: "ttm", playerId: p.id, prescore: 30 });
      }
    }
  }
  starCandidates(b, p, out, holder);
  desperateCandidates(b, p, out);
  return { cands: out, best: Math.max(0, best) };
}
function desperateCandidates(b, p, out) {
  const s = b.s;
  if (s.variant !== "sevens" || !s.match?.desperate) return;
  const setPiece = E.desperateLeft(s, b.team, "setPiece");
  const grudge = E.desperateLeft(s, b.team, "grudgeMatch");
  if (!setPiece && !grudge) return;
  const mine = out.filter((c) => c.playerId === p.id && !c.star && c.input.kind === "playerAction");
  for (const c of mine) {
    const inp = c.input;
    if (setPiece && inp.action === "pass" && inp.passTarget && !inp.hailMary) out.push({ ...c, input: { ...inp, desperate: "setPiece" }, label: `${c.label} (Set Piece)`, prescore: c.prescore + 1, star: true, reserve: 1.5 });
    if (grudge && inp.action === "foul" && !s.turn.activation) out.push({ ...c, input: { ...inp, desperate: "grudgeMatch" }, label: `${c.label} (Grudge Match: no Sent-off)`, prescore: c.prescore + 0.5, star: true, reserve: 1.5 });
  }
}
var STAR_RESERVE = { game: 1.5, half: 0.8, drive: 0.5, activation: 0, always: 0 };
var ENDING_RULES = ["thorsson", "zzharg", "swiftvine", "boa", "rodney"];
var HELPING_RULES = ["kiroth", "zolcath", "jeremiahKool", "gretchen"];
function starCandidates(b, p, out, holder) {
  const s = b.s;
  const info = E.startRuleInfo(p);
  if (!info || !p.pos) return;
  const act = s.turn.activation;
  if (act && act.playerId === p.id) return;
  if (!E.starReady(s, p, info.star)) return;
  const reserve = STAR_RESERVE[E.STAR_BY_ID[info.star].rule.per] ?? 1;
  const who = E.label(p);
  const ourCarrier = holder && holder.team === b.team ? holder : void 0;
  const prio = (q) => (holder?.id === q.id ? 100 : 0) + (ourCarrier?.pos && q.pos && cheb(q.pos, ourCarrier.pos) === 1 ? 40 : 0) + q.st * 2 + (info.star === "zzharg" ? 11 - q.av : 0);
  const star = (input, label3, kind, prescore) => out.push({ input: { ...input, starRule: true }, label: label3, kind, playerId: p.id, prescore, star: true, reserve });
  if (ENDING_RULES.includes(info.star)) {
    if (E.startRuleReason(s, p, "move") !== null) return;
    if (info.star === "rodney" || info.star === "boa") {
      star({ kind: "playerAction", playerId: p.id, action: "move", path: [] }, `${who}: ${info.name}`, "star", 20);
      return;
    }
    const targets2 = E.startRuleTargets(s, p).sort((x, y) => prio(y) - prio(x)).slice(0, 2);
    for (const q of targets2) star({ kind: "playerAction", playerId: p.id, action: "move", path: [], starTarget: q.id }, `${who}: ${info.name} on ${E.label(q)}`, "star", 5 + prio(q) / 10);
    return;
  }
  if (HELPING_RULES.includes(info.star)) {
    const mine = out.filter((c) => c.playerId === p.id && !c.star && c.input.kind === "playerAction" && (!info.actions || info.actions.includes(c.input.action)));
    if (info.star === "gretchen") {
      const dodges = (c) => c.input.kind === "playerAction" && c.input.path.length > 0 && E.markersOf(s, p.pos, b.team).length > 0;
      for (const c of mine.filter(dodges).sort((x, y) => y.prescore - x.prescore).slice(0, 2)) {
        if (E.startRuleReason(s, p, c.input.action) !== null) continue;
        star(c.input, `${c.label} (Incorporeal first)`, c.kind, c.prescore + 1);
      }
      return;
    }
    const targets2 = E.startRuleTargets(s, p).sort((x, y) => prio(y) - prio(x));
    if (!targets2.length) return;
    for (const c of mine.sort((x, y) => y.prescore - x.prescore).slice(0, 2)) {
      const inp = c.input;
      if (E.startRuleReason(s, p, inp.action, inp.special) !== null) continue;
      const q = targets2.find((t) => t.id !== inp.blockTarget) ?? targets2[0];
      star({ ...inp, starTarget: q.id }, `${c.label} (${info.name} on ${E.label(q)} first)`, c.kind, c.prescore + 1);
    }
    return;
  }
  const targets = E.startRuleTargets(s, p);
  if (!targets.length) return;
  if (info.star === "maple" && E.startRuleReason(s, p, "block") === null) {
    for (const q of targets.sort((x, y) => prio(y) - prio(x)).slice(0, 2)) star({ kind: "playerAction", playerId: p.id, action: "block", path: [], blockTarget: q.id }, `${who}: Vicious Vines \u2014 Block ${E.label(q)} from 2 squares away`, "block", 6 + prio(q) / 10);
  } else if (info.star === "nobbla" && E.startRuleReason(s, p, "special", "chainsaw") === null) {
    for (const q of targets.slice(0, 2)) star({ kind: "playerAction", playerId: p.id, action: "special", special: "chainsaw", path: [], specialTarget: q.id }, `${who}: Chainsaw Attack on ${E.label(q)} (Prone)`, "star", 5);
  } else if (info.star === "bilerot" && E.startRuleReason(s, p, "special", "projectileVomit") === null) {
    for (const q of targets.sort((x, y) => prio(y) - prio(x)).slice(0, 2)) star({ kind: "playerAction", playerId: p.id, action: "special", special: "projectileVomit", path: [], specialTarget: q.id }, `${who}: Putrid Regurgitation on ${E.label(q)}`, "vomit", 5 + prio(q) / 10);
  }
}
function supportUplift(b, st) {
  const none = { value: 0, helpers: [] };
  const h = holderOf(st);
  if (!h || h.team !== b.team || !h.pos || st.phase !== "play") return none;
  const work = E.cloneState(st);
  const c = h.pos;
  const base = evalTotal(work, b.team, b.w, b.hz);
  let cur = base;
  const act = work.turn.activation;
  const helpers = work.players.filter(
    (q) => q.team === b.team && q.id !== h.id && q.location === "pitch" && q.pos && q.stance === "standing" && !q.activated && !q.distracted && !(act && act.playerId === q.id) && cheb(q.pos, c) - 1 <= q.ma && E.markersOf(work, q.pos, b.team).length === 0
  );
  const ids = helpers.map((q) => q.id);
  const reach = /* @__PURE__ */ new Map();
  for (const q of helpers) reach.set(q.id, E.reachableSquares(work, q.id).filter((r) => r.rushes === 0 && cheb(r.c, c) === 1).map((r) => r.c));
  for (let i = 0; i < 4 && helpers.length; i++) {
    const options = [];
    for (const q of helpers) {
      for (const to of reach.get(q.id) ?? []) {
        if (E.playerAt(work, to)) continue;
        const saved = q.pos;
        q.pos = { ...to };
        const v = evalTotal(work, b.team, b.w, b.hz);
        q.pos = saved;
        if (v > cur + 0.1) options.push({ q, to, v });
      }
    }
    options.sort((x, y) => y.v - x.v);
    let placed = false;
    for (const o of options.slice(0, 6)) {
      const route = E.safestRoute(work, o.q.id, o.to);
      if (!route || route.pSafe < 0.999) continue;
      o.q.pos = { ...o.to };
      cur = o.v;
      helpers.splice(helpers.indexOf(o.q), 1);
      placed = true;
      break;
    }
    if (!placed) break;
  }
  return { value: Math.max(0, cur - base), helpers: ids };
}
function explore(b, cand, restOfTurn, opts) {
  const limits = cand.kind === "ttm" ? { threshold: 1e-5, maxLeaves: 6e3 } : cand.kind === "foul" ? { threshold: Math.max(opts.threshold, 3e-4), maxLeaves: Math.min(opts.maxLeaves, 400) } : cand.kind === "pass" ? { threshold: 5e-3, maxLeaves: 200 } : cand.kind === "block" || cand.kind === "blitz" || cand.kind === "carry" || cand.kind === "handoff" ? { threshold: Math.max(opts.threshold, 3e-4), maxLeaves: Math.min(opts.maxLeaves, 700) } : { threshold: opts.threshold, maxLeaves: opts.maxLeaves };
  let sumV = 0;
  let sumVTO = 0;
  let pTO = 0;
  let pTD = 0;
  let pOppTD = 0;
  let pDone = 0;
  let pLost = 0;
  let pLostTO = 0;
  let pFreed = 0;
  let pHeld = 0;
  let explored = 0;
  const terms = {};
  const hadBall = holderOf(b.s)?.team === b.team;
  const theyHadBall = holderOf(b.s)?.team === b.opp;
  let main = null;
  const foulTarget = cand.kind === "foul" && cand.input.kind === "playerAction" ? cand.input.foulTarget : void 0;
  let pFoulRemoved = 0;
  const r = E.exploreOutcomes(b.s, cand.input, { ...limits, followUp: true }, (leaf) => {
    if (foulTarget) {
      const t = leaf.state.players.find((q) => q.id === foulTarget);
      if (t && t.location !== "pitch") pFoulRemoved += leaf.p;
    }
    const driveOver = !!leaf.touchdown;
    const ev = evaluate(leaf.state, b.team, b.w, b.hz, driveOver);
    const v = ev.total;
    sumV += leaf.p * v;
    explored += leaf.p;
    for (const k2 in ev.terms) terms[k2] = (terms[k2] ?? 0) + leaf.p * ev.terms[k2];
    if (leaf.turnover) {
      pTO += leaf.p;
      sumVTO += leaf.p * v;
    }
    if (leaf.touchdown === b.team) pTD += leaf.p;
    else if (leaf.touchdown) pOppTD += leaf.p;
    if (leaf.completed) pDone += leaf.p;
    const bl = leaf.state.ball;
    const h = bl.kind === "held" ? leaf.state.players.find((q) => q.id === bl.playerId) : void 0;
    if (hadBall && !leaf.touchdown && (!h || h.team !== b.team)) {
      pLost += leaf.p;
      if (leaf.turnover) pLostTO += leaf.p;
    }
    if (theyHadBall && (!h || h.team !== b.opp)) pFreed += leaf.p;
    if (!leaf.turnover && !driveOver && h && h.team === b.team) {
      pHeld += leaf.p;
      if (!main || leaf.p > main.p) main = { p: leaf.p, state: E.cloneState(leaf.state) };
    }
  });
  if (!r.ok) {
    cand.error = r.errors[0];
    return;
  }
  const un = Math.max(0, r.unresolved);
  if (explored <= 0) {
    cand.error = "no outcome could be enumerated";
    return;
  }
  const unTO = Math.min(un, Math.max(0, r.unresolvedTurnover));
  const unOK = un - unTO;
  const exOK = explored - pTO;
  const vTO = pTO > 0 ? sumVTO / pTO : sumV / explored;
  const vOK = exOK > 1e-12 ? (sumV - sumVTO) / exOK : sumV / explored;
  const pTurn = pTO + unTO;
  const charge = pTurn * restOfTurn * b.w.turnoverCost;
  cand.gainStatic = sumV + unTO * vTO + unOK * vOK - b.V0 - charge;
  if (foulTarget) {
    const t = b.s.players.find((q) => q.id === foulTarget);
    if (t) cand.gainStatic += pFoulRemoved / explored * 0.5 * (b.w.standing - (t.stance === "stunned" ? b.w.stunned : b.w.prone)) * playerWorth(t);
  }
  const k = exOK > 1e-12 ? (exOK + unOK) / exOK : 1;
  const m = main;
  const touchesSupport = ["carry", "pickup", "secure", "handoff", "pass", "score"].includes(cand.kind) || cand.playerId !== null && b.helpers.includes(cand.playerId);
  cand.support = !m ? 0 : touchesSupport ? supportUplift(b, m.state).value : b.U0;
  cand.gainSupported = cand.gainStatic + pHeld * k * cand.support - b.U0;
  cand.gain = cand.gainSupported;
  cand.pSuccess = pDone * k;
  cand.pTurnover = pTurn;
  cand.pTouchdown = pTD * k;
  cand.pOppTouchdown = pOppTD * k;
  cand.pBallLost = pLost - pLostTO + (pLost - pLostTO) * (k - 1) + (pTO > 0 ? pLostTO * (pTO + unTO) / pTO : 0);
  cand.pBallFreed = pFreed * k;
  cand.unresolved = un;
  if (explored > 0) {
    const keys = /* @__PURE__ */ new Set([...Object.keys(b.terms), ...Object.keys(terms)]);
    cand.drivers = [...keys].map((k2) => [k2, (terms[k2] ?? 0) / explored - (b.terms[k2] ?? 0)]).filter(([, d2]) => Math.abs(d2) >= 0.5).sort((x, y) => Math.abs(y[1]) - Math.abs(x[1])).slice(0, 3);
  }
}
var DRIVER_TEXT = {
  score: ["scores", "concedes"],
  players: ["gets a player back on its feet", "risks our player"],
  opponents: ["knocks an opponent down", "lets an opponent back into play"],
  ball: ["gains the ball", "risks the ball"],
  carrierSafety: ["makes the ball carrier safer", "exposes the ball carrier"],
  progress: ["moves the ball forward", "moves the ball back"],
  scoreThreat: ["sets up a score next Turn", "reduces our scoring threat"],
  oppProgress: ["pushes their ball carrier back", "lets their ball carrier advance"],
  oppThreat: ["reduces their scoring threat", "increases their scoring threat"],
  pressure: ["puts pressure on their ball carrier", "releases their ball carrier"],
  screen: ["screens our End Zone", "opens a route to our End Zone"],
  looseBall: ["gets closer to the loose ball", "lets them get closer to the loose ball"],
  marking: ["ties up opponents", "leaves our players marked"],
  support: ["creates receiving options", "removes receiving options"],
  rerolls: ["keeps Team Re-rolls", "may use a Team Re-roll"],
  crowd: ["keeps a player away from a crowd push", "leaves a player where he can be pushed into the crowd"]
};
function describe(cand, obj) {
  const parts = [];
  if (cand.pTouchdown && cand.pTouchdown > 0.01) parts.push(`${pct(cand.pTouchdown)} to score`);
  else if (cand.pSuccess !== void 0 && cand.pSuccess < 0.999) parts.push(`${pct(cand.pSuccess)} to succeed`);
  if (cand.pTurnover && cand.pTurnover > 5e-3) parts.push(`${pct(cand.pTurnover)} Turnover risk`);
  if (cand.pBallLost && cand.pBallLost > 0.01) parts.push(`${pct(cand.pBallLost)} to lose the ball`);
  if (cand.pBallFreed && cand.pBallFreed > 0.01) parts.push(`${pct(cand.pBallFreed)} to knock the ball loose`);
  const drivers = (cand.drivers ?? []).map(([k, d2]) => k === "ball" && d2 > 0 && (cand.pBallFreed ?? 0) > 0 ? "knocks the ball loose" : DRIVER_TEXT[k]?.[d2 > 0 ? 0 : 1]).filter(Boolean);
  const because = drivers.length ? ` \u2014 ${drivers.slice(0, 2).join(" and ")}` : "";
  const stall = cand.stallAvoided && cand.stallAvoided > 0.5 ? " Waiting would let the Crowd Take Action for Stalling (p.80-81)." : "";
  return `${OBJECTIVE_LABEL[obj.id]}: ${obj.why}. Chose ${cand.label}${because}${parts.length ? ` (${parts.join(", ")}; estimates, see the plan)` : ""}.${stall}`;
}
function* think(s, team2, options) {
  E.usePitch(s);
  const t0 = Date.now();
  const opts = { ...DEFAULTS, ...coachParams()?.search ?? {}, ...options };
  const hz = horizonFor(s, team2);
  const objective = chooseObjective(s, team2, options.style);
  const w = clockAdjusted(emphasise(styleWeights(options.style), objective.id), s, team2);
  const base = evaluate(s, team2, w, hz);
  const b = { s, team: team2, opp: other2(team2), w, hz, V0: base.total, U0: 0, helpers: [], terms: base.terms, work: E.cloneState(s) };
  const u0 = supportUplift(b, s);
  b.U0 = u0.value;
  b.helpers = u0.helpers;
  const endTurn2 = { kind: "endTurn" };
  const mine = s.players.filter((p) => p.team === team2 && p.location === "pitch");
  const gens = /* @__PURE__ */ new Map();
  for (const p of mine) {
    gens.set(p.id, genForPlayer(b, p));
  }
  yield "candidates";
  const all = [];
  for (const g of gens.values()) all.push(...g.cands);
  const always = /* @__PURE__ */ new Set(["score", "carry", "ttm", "vomit", "handoff", "pickup", "secure"]);
  const caps = { block: 8, blitz: 6, pass: 2, foul: 2 };
  const used = {};
  const sorted = all.slice().sort((x, y) => y.prescore - x.prescore);
  const chosen = [];
  let others = 0;
  const perTarget = {};
  for (const c of sorted) {
    const tgt = c.input.kind === "playerAction" ? c.input.blockTarget ?? c.input.blitzTarget : void 0;
    if (c.key && tgt) {
      const k = `${c.kind}:${tgt}`;
      if ((perTarget[k] ?? 0) < 3) {
        chosen.push(c);
        perTarget[k] = (perTarget[k] ?? 0) + 1;
      }
    } else if (always.has(c.kind) || c.key || c.star) chosen.push(c);
    else if (caps[c.kind] !== void 0) {
      if (c.kind === "pass" && c.prescore < -5) continue;
      if ((used[c.kind] ?? 0) < caps[c.kind]) {
        chosen.push(c);
        used[c.kind] = (used[c.kind] ?? 0) + 1;
      }
    } else if (others < opts.maxExplored) {
      chosen.push(c);
      others++;
    }
  }
  for (const c of chosen) {
    explore(b, c, 0, opts);
    if (c.reserve && c.gain !== void 0 && !c.error) {
      c.gain -= c.reserve;
      c.gainStatic = c.gainStatic - c.reserve;
      c.gainSupported = c.gain;
    }
    yield c.label;
  }
  const safeValue = /* @__PURE__ */ new Map();
  for (const c of chosen) {
    if (c.error || c.gain === void 0 || !c.playerId || (c.pTurnover ?? 1) > 0.02) continue;
    safeValue.set(c.playerId, Math.max(safeValue.get(c.playerId) ?? 0, c.gain));
  }
  for (const c of chosen) {
    if (c.error || c.gain === void 0) continue;
    let rest = 0;
    for (const [id, v] of safeValue) if (id !== c.playerId) rest += v;
    c.charge = (c.pTurnover ?? 0) * Math.min(40, rest) * w.turnoverCost;
    c.gain -= c.charge;
    c.gainStatic = c.gainStatic - c.charge;
    c.gainSupported = c.gain;
  }
  const act = s.turn.activation;
  if (act && !act.over && act.playerId) {
    const cont = Math.max(0, ...chosen.filter((c) => c.playerId === act.playerId && !c.error && c.gain !== void 0).map((c) => c.gain));
    if (cont > 0)
      for (const c of chosen) {
        if (c.error || c.gain === void 0 || c.playerId === act.playerId) continue;
        c.forfeit = cont;
        c.gain -= cont;
        c.gainStatic = c.gainStatic - cont;
        c.gainSupported = c.gain;
      }
  }
  const stall = stallingRisk(s, team2, base.terms);
  if (stall > 0)
    for (const c of chosen) {
      if (c.error || c.gain === void 0 || !(c.pTouchdown && c.pTouchdown > 0)) continue;
      c.stallAvoided = stall * c.pTouchdown;
      c.gain += c.stallAvoided;
      c.gainStatic = c.gainStatic + c.stallAvoided;
      c.gainSupported = c.gain;
    }
  const ranked = chosen.filter((c) => c.gain !== void 0 && !c.error).sort((x, y) => y.gain - x.gain);
  let top = ranked[0];
  let later = null;
  if (top && top.gain > opts.minGain && (top.pTurnover ?? 0) >= 0.08) {
    const safe = ranked.filter((c) => c.playerId !== top.playerId && (c.pTurnover ?? 1) < 0.01 && c.gain > opts.minGain)[0];
    if (safe) {
      later = top;
      top = safe;
    }
  }
  if (!top || top.gain <= opts.minGain) {
    top = ranked.filter((c) => (c.gainStatic ?? 0) > opts.minGain && c.gain > -opts.minGain).sort((x, y) => y.gainStatic - x.gainStatic)[0];
  }
  let obj = objective;
  if (top && (top.pTouchdown ?? 0) >= 0.3 && obj.id !== "score") obj = { id: "score", urgent: true, why: `${pct(top.pTouchdown)} chance to score now` };
  const candidates2 = [...ranked, ...all.filter((c) => !ranked.includes(c))];
  if (!top) {
    return {
      input: endTurn2,
      objective: obj,
      chosen: null,
      candidates: candidates2,
      reason: `${OBJECTIVE_LABEL[obj.id]}: ${obj.why}. No remaining action improves the position enough \u2014 ending the Turn.`,
      value: base.total,
      terms: base.terms,
      support: b.U0,
      millis: Date.now() - t0
    };
  }
  const reason = describe(top, obj) + (later ? ` Safe actions first: ${later.label} (${pct(later.pTurnover)} Turnover risk) can come after.` : "");
  return { input: top.input, objective: obj, chosen: top, candidates: candidates2, reason, value: base.total, terms: base.terms, support: b.U0, millis: Date.now() - t0 };
}
function wizardChoice(s, team2, style) {
  if (E.wizardReason(s, team2) !== null) return null;
  if (s.phase !== "play" || s.turn.active !== team2) return null;
  E.usePitch(s);
  const hz = horizonFor(s, team2);
  const objective = chooseObjective(s, team2, style);
  const w = clockAdjusted(emphasise(styleWeights(style), objective.id), s, team2);
  const base = evaluate(s, team2, w, hz);
  const b = { s, team: team2, opp: other2(team2), w, hz, V0: base.total, U0: 0, helpers: [], terms: base.terms, work: E.cloneState(s) };
  const holder = holderOf(s);
  const ourCarrier = holder && holder.team === team2 ? holder : void 0;
  const opps2 = s.players.filter((q) => q.team === b.opp && q.location === "pitch" && !!q.pos);
  const cands = [];
  const prio = (q) => (holder?.id === q.id ? 100 : 0) + (ourCarrier?.pos && q.pos && cheb(q.pos, ourCarrier.pos) <= 1 ? 30 : 0) + (q.stance === "standing" ? 5 : 0) + 20 * E.zapChance(q);
  for (const q of opps2.slice().sort((x, y) => prio(y) - prio(x)).slice(0, 3)) {
    cands.push({ input: { kind: "wizard", team: team2, spell: "zap", target: q.id }, label: `Sports-Wizard: Zap! ${E.label(q)}`, kind: "wizard", playerId: null, prescore: prio(q) });
  }
  const scored = [];
  const W = E.pitch().w;
  const H = E.pitch().h;
  for (let x = 0; x < W; x++)
    for (let y = 0; y < H; y++) {
      const c = { x, y };
      let v = 0;
      for (const q of E.fireballTargets(s, c)) {
        const mine = q.team === team2;
        const w0 = (q.stance === "standing" ? 3 : 1) + (holder?.id === q.id ? 10 : 0);
        v += mine ? -1.5 * w0 : w0;
      }
      if (v > 0) scored.push({ c, v });
    }
  scored.sort((x, y) => y.v - x.v);
  for (const k of scored.slice(0, 3)) cands.push({ input: { kind: "wizard", team: team2, spell: "fireball", square: k.c }, label: `Sports-Wizard: Fireball at ${E.board.fmt(k.c)}`, kind: "wizard", playerId: null, prescore: k.v });
  for (const c of cands) explore(b, c, 0, { ...DEFAULTS, threshold: 3e-4, maxLeaves: 800 });
  const ok = cands.filter((c) => !c.error && c.gain !== void 0).sort((x, y) => y.gain - x.gain);
  const best = ok[0];
  const tph = E.rulesFor(s).turnsPerHalf;
  const played = (s.match?.half === 2 ? tph : 0) + s.teams[team2].turn;
  const reserve = 1 + 3 * Math.max(0, 1 - played / (2 * tph));
  if (!best || best.gain <= reserve) return null;
  return { input: best.input, gain: best.gain, why: `${best.label}: expected gain ${best.gain.toFixed(1)} \u2014 more than keeping the once-per-game spell for later (${reserve.toFixed(1)}).` };
}
function stallingRisk(s, team2, terms) {
  const b = s.ball;
  if (b.kind !== "held") return 0;
  const h = E.findPlayer(s, b.playerId);
  if (!h || h.team !== team2 || h.location !== "pitch" || h.stance !== "standing") return 0;
  const act = s.turn.activation;
  const candidate = act && act.playerId === h.id && !act.over ? act.stallingCandidate : !h.activated && E.canScoreWithoutDice(s, h);
  if (!candidate) return 0;
  const turnNo = s.teams[team2].turn;
  const pHit = Math.max(0, 7 - turnNo) / 6;
  if (pHit <= 0) return 0;
  const worth = Math.max(0, (terms.ball ?? 0) + (terms.progress ?? 0) + (terms.scoreThreat ?? 0));
  return pHit * worth;
}
function severity(label3) {
  const order = ["Badly Hurt", "Seriously Hurt", "Serious Injury", "Lasting Injury", "Dead"];
  const i = order.findIndex((o) => label3.includes(o));
  return i < 0 ? 0 : i;
}
function desperateAnswer(s, req, team2) {
  const ids = req.options.map((o) => o.id);
  const measure = req.context?.measure;
  const pl = (id) => s.players.find((q) => q.id === id);
  switch (measure) {
    case "hangover": {
      const val = (q) => (q.skills.some((k) => ["sureHands", "pass", "catch"].includes(k.id)) ? 3 : 0) + (q.keywords.includes("Blitzer") ? 2 : 0) + q.st + (7 - q.ag) * 0.5;
      const best = ids.filter((id) => id !== "no").map((id) => pl(id)).filter((q) => !!q).sort((a, b2) => val(b2) - val(a))[0];
      return best ? { optionId: best.id, why: `Hangover: ${E.label(best)} misses the first Drive.` } : { optionId: "no", why: "No one worth it." };
    }
    case "youDope": {
      const cands = ids.filter((id) => id !== "no").map((id) => pl(id)).filter((q) => !!q && !q.keywords.includes("Big Guy"));
      const best = cands.sort((a, b2) => b2.st - a.st || a.ag - b2.ag)[0];
      return best ? { optionId: best.id, why: `You Dope!: ${E.label(best)} gets stronger.` } : { optionId: "no", why: "Not now." };
    }
    case "youDopeStat": {
      const q = pl(String(req.context?.playerId ?? ""));
      return { optionId: q && q.st <= 2 && q.ag >= 3 ? "ag" : "st", why: "You Dope!: the more useful characteristic." };
    }
    case "sportsEspionage": {
      const left = E.rulesFor(s).turnsPerHalf - s.teams[team2].turn;
      return { optionId: left >= 1 && ids.includes("use") ? "use" : "no", why: left >= 1 ? "Sports Espionage: two Team Re-rolls for the rest of the half." : "Keep it for the next half." };
    }
    case "bananaSkin": {
      const q = pl(String(req.context?.playerId ?? ""));
      const act = s.turn.activation;
      const carrier = s.ball.kind === "held" ? pl(s.ball.playerId) : void 0;
      const threat = !!q && !!carrier && carrier.team === team2 && !!carrier.pos && !!q.pos && Math.max(Math.abs(carrier.pos.x - q.pos.x), Math.abs(carrier.pos.y - q.pos.y)) <= 1;
      const use = !!q && (carrier && carrier.id === q.id || act?.playerId === q.id && act.action === "blitz" && act.blocksDone === 0 || threat);
      return { optionId: use ? "use" : "no", why: use ? "Discarded Banana Skin: stop this player now." : "Keep the Banana Skin for a bigger threat." };
    }
  }
  return { optionId: ids.includes("no") ? "no" : ids[0], why: "Not now." };
}
function answerDecision(s, req, team2, style) {
  E.usePitch(s);
  const ids = req.options.map((o) => o.id);
  const hz = horizonFor(s, team2);
  const w = styleWeights(style);
  const valueIf = (mut) => {
    const x = E.cloneState(s);
    mut(x);
    return evalTotal(x, team2, w, hz);
  };
  switch (req.type) {
    case "desperate":
      return desperateAnswer(s, req, team2);
    case "kickOrReceive":
      return { optionId: ids.includes("receive") ? "receive" : ids[0], why: "Receive: start the Drive with the ball." };
    case "argueTheCall":
      return { optionId: ids.includes("yes") ? "yes" : ids[0], why: "Argue the Call: nothing to lose but a small chance." };
    case "bribe":
      return { optionId: ids.includes("yes") ? "yes" : ids[0], why: "Use the Bribe to keep the player." };
    case "touchback":
    case "highKick": {
      let best = ids[0];
      let bestV = -Infinity;
      for (const o of req.options) {
        if (o.id === "none") continue;
        const v = valueIf((x) => {
          if (req.type === "touchback") {
            const pl = x.players.find((q) => q.id === o.id);
            if (pl) x.ball = { kind: "held", playerId: pl.id };
            else if (o.square) x.ball = { kind: "ground", pos: { ...o.square } };
          } else {
            const pl = x.players.find((q) => q.id === o.id);
            const L = x.match?.kick?.landing;
            if (pl && L) pl.pos = { ...L };
          }
        });
        if (v > bestV) {
          bestV = v;
          best = o.id;
        }
      }
      return { optionId: best, why: req.type === "touchback" ? "Give the ball to the safest player." : "Put a player under the ball." };
    }
    case "pushSquare":
    case "sidestepSquare":
    case "grabSquare": {
      const victim = req.context?.victim;
      let best = ids[0];
      let bestV = -Infinity;
      for (const o of req.options) {
        if (!o.square || !victim) continue;
        const v = valueIf((x) => {
          const pl = x.players.find((q) => q.id === victim);
          const occ = E.playerAt(x, o.square);
          if (pl) pl.pos = { ...o.square };
          if (occ) occ.pos = null;
        });
        if (v > bestV) {
          bestV = v;
          best = o.id;
        }
      }
      return { optionId: best, why: "Push to the square that leaves the best position." };
    }
    case "followUp": {
      const sq = req.options.find((o) => o.id === "yes")?.square;
      const act = s.turn.activation;
      const att = act ? E.findPlayer(s, act.playerId) : void 0;
      if (!sq || !att || att.team !== team2) return { optionId: E.previewDecision(s, req), why: "Default follow-up choice." };
      const vYes = valueIf((x) => {
        const pl = x.players.find((q) => q.id === att.id);
        if (pl) pl.pos = { ...sq };
      });
      const vNo = evalTotal(s, team2, w, hz);
      return { optionId: vYes >= vNo - 0.2 ? "yes" : "no", why: vYes >= vNo - 0.2 ? "Follow up." : "Stay put: following up would weaken our position." };
    }
    case "trickster": {
      const act = s.turn.activation;
      const me = s.players.find((q) => q.id === req.context?.target);
      const attId = req.context?.attacker ?? act?.playerId;
      const risk = (c) => {
        const assists = s.players.filter((q) => q.team !== team2 && q.id !== attId && q.location === "pitch" && q.stance === "standing" && !q.distracted && q.pos && cheb(q.pos, c) === 1).length;
        const edge = c.y === 0 || c.y === lastY() ? 0.5 : 0;
        return assists + edge;
      };
      if (!me?.pos) return { optionId: "stay", why: "Stay put." };
      let best = "stay";
      let bestR = risk(me.pos);
      for (const o of req.options) {
        if (!o.square) continue;
        const r = risk(o.square) - (s.ball.kind === "ground" && s.ball.pos.x === o.square.x && s.ball.pos.y === o.square.y ? 0.25 : 0);
        if (r < bestR - 1e-9) {
          bestR = r;
          best = o.id;
        }
      }
      return { optionId: best, why: best === "stay" ? "Trickster: no better square next to the blocker." : "Trickster: step away from the other opponents who could assist the Block." };
    }
    case "apothecary": {
      if (ids.includes("first") && ids.includes("second")) {
        const [a, c] = [req.options.find((o) => o.id === "first"), req.options.find((o) => o.id === "second")];
        return { optionId: severity(a.label) <= severity(c.label) ? "first" : "second", why: "Choose the lighter injury." };
      }
      const cas = /Casualty/.test(req.prompt) && !/Badly Hurt\)/.test(req.prompt);
      return { optionId: cas && ids.includes("use") ? "use" : ids.includes("keep") ? "keep" : ids[0], why: cas ? "Use the Apothecary on a serious injury." : "Keep the Apothecary for a worse injury." };
    }
    default:
      return { optionId: E.previewDecision(s, req), why: "Same choice the previews assume." };
  }
}
var starterSelection = { on: true };
function matchStepFor(s, team2, _style) {
  E.usePitch(s);
  const m = s.match;
  if (!m || s.pending) return null;
  if (s.phase === "driveSetup") {
    const settingUp = m.kicking && m.setupDone[m.kicking] ? other2(m.kicking) : m.kicking;
    if (settingUp !== team2) return null;
    if (!starterSelection.on) return { input: { kind: "setupTeam", team: team2, positions: E.defaultFormation(s, team2) }, why: "Standard set-up: three on the Line of Scrimmage, the rest in a compact block behind." };
    const f = E.builtinFormation(s, team2);
    return { input: { kind: "setupTeam", team: team2, positions: f.positions }, why: `Set-up: ${f.why}` };
  }
  if (s.phase === "kickoff" && !m.pendingPhase && m.kicking === team2) {
    const cands = E.kickerCandidates(s, team2);
    const kicker = cands.find((p) => E.hasSkill(p, "kick")) ?? cands[0];
    if (!kicker) return null;
    const useKick = E.hasSkill(kicker, "kick");
    const recv = other2(team2);
    const los = E.losColumn(recv);
    let best = { x: recv === "A" ? Math.floor(los / 2) : Math.ceil((los + lastX()) / 2), y: Math.floor(lastY() / 2) };
    let bestScore = -1;
    const lower2 = !useKick && E.rulesFor(s).kickDistance === "lowerOf2d6";
    const dmax = useKick ? 3 : 6;
    const pDist = (n) => lower2 ? (13 - 2 * n) / 36 : 1 / dmax;
    for (let x = 0; x <= lastX(); x++)
      for (let y = 0; y <= lastY(); y++) {
        if (!E.inOwnHalf(recv, { x, y })) continue;
        let p = 0;
        for (let d2 = 1; d2 <= 8; d2++) {
          const dir = E.board.D8_DIRS[d2];
          for (let n = 1; n <= dmax; n++) {
            const c = { x: x + dir.x * n, y: y + dir.y * n };
            if (E.kickLands(team2, c)) p += pDist(n) / 8;
          }
        }
        const depth = Math.abs(x - los);
        const score = p + depth * 4e-3;
        if (score > bestScore) {
          bestScore = score;
          best = { x, y };
        }
      }
    return { input: { kind: "kickoff", kicker: kicker.id, target: best, useKick }, why: `Kick to ${E.board.fmt(best)}: the landing spot least likely to be a Touchback.` };
  }
  if (s.phase === "kickoff" && m.pendingPhase?.type === "swarming" && m.pendingPhase.team === team2) {
    const positions = E.defaultSwarming(s, team2);
    const n = Object.keys(positions).length;
    return { input: { kind: "swarming", positions }, why: `Swarming: ${n} more Lineman player${n === 1 ? "" : "s"} set up behind the Line of Scrimmage.` };
  }
  if (s.phase === "kickoff" && m.pendingPhase?.type === "solidDefence" && m.pendingPhase.team === team2) return { input: { kind: "solidDefence", positions: {} }, why: "Keep the set-up." };
  if (s.phase === "kickoff" && m.pendingPhase?.type === "dwarfenWisdom" && m.pendingPhase.team === team2) return { input: { kind: "dwarfenWisdom", positions: {} }, why: "Keep the set-up." };
  if (s.phase === "kickoff" && m.pendingPhase?.type === "quickSnap" && m.pendingPhase.team === team2) {
    const moves = {};
    const dx = team2 === "A" ? 1 : -1;
    let n = 0;
    const taken = new Set(s.players.filter((p) => p.location === "pitch" && p.pos).map((p) => `${p.pos.x},${p.pos.y}`));
    for (const p of s.players.filter((q) => q.team === team2 && q.location === "pitch" && q.pos && E.isOpen(s, q))) {
      if (n >= m.pendingPhase.max) break;
      const to = { x: p.pos.x + dx, y: p.pos.y };
      if (!E.board.inBounds(to) || taken.has(`${to.x},${to.y}`)) continue;
      taken.delete(`${p.pos.x},${p.pos.y}`);
      taken.add(`${to.x},${to.y}`);
      moves[p.id] = to;
      n++;
    }
    return { input: { kind: "quickSnap", moves }, why: `${m.pendingPhase.alert ? "Alert Defence" : "Quick Snap"}: ${n} player${n === 1 ? "" : "s"} step forward.` };
  }
  return null;
}

// src/ai/registry.ts
var PREFERENCES = {
  riskTolerance: { text: "Accept riskier actions (+) or avoid Turnovers more (\u2212).", apply: (w, v) => w.turnoverCost *= 1 - 0.4 * v },
  aggression: { text: "Mark, press and block more (+) or less (\u2212).", apply: (w, v) => {
    w.pressure *= 1 + 0.4 * v;
    w.pressureReach *= 1 + 0.4 * v;
    w.marking *= 1 + 0.5 * v;
  } },
  ballSecurity: { text: "Protect the ball carrier more (+) or less (\u2212).", apply: (w, v) => {
    w.carrierMarked *= 1 + 0.4 * v;
    w.carrierExposed *= 1 + 0.4 * v;
    w.cage *= 1 + 0.5 * v;
  } },
  tempo: { text: "Move the ball forward faster (+) or slower (\u2212).", apply: (w, v) => {
    w.progress *= 1 + 0.35 * v;
    w.receivers *= 1 + 0.5 * v;
  } },
  defence: { text: "Screen the End Zone and contain more (+) or less (\u2212).", apply: (w, v) => {
    w.screen *= 1 + 0.5 * v;
    w.contain *= 1 + 0.5 * v;
    w.oppProgress *= 1 + 0.3 * v;
  } },
  attrition: { text: "Value knocking opponents down and keeping own players up more (+) or less (\u2212).", apply: (w, v) => {
    w.standing *= 1 + 0.3 * v;
    w.prone *= 1 + 0.3 * v;
    w.stunned *= 1 + 0.3 * v;
  } }
};
var isNum = (x) => typeof x === "number" && Number.isFinite(x);
function profileWeights(base, p, c) {
  const w = { ...base };
  const P = p?.parameters;
  if (!P) return w;
  const mult = (m) => {
    for (const [k, x] of Object.entries(m ?? {})) if (k in w && isNum(x)) w[k] *= x;
  };
  const prefs = (m) => {
    for (const [k, x] of Object.entries(m ?? {})) if (PREFERENCES[k] && isNum(x)) PREFERENCES[k].apply(w, Math.max(-1, Math.min(1, x)));
  };
  mult(P.weights);
  prefs(P.preferences);
  for (const cond of P.conditions ?? []) {
    const wh = cond.when;
    if (wh.scoreDiff && (c.scoreDiff < wh.scoreDiff[0] || c.scoreDiff > wh.scoreDiff[1])) continue;
    if (wh.turnsLeft && (c.turnsLeft < wh.turnsLeft[0] || c.turnsLeft > wh.turnsLeft[1])) continue;
    if (wh.half && wh.half !== c.half) continue;
    if (wh.possession && wh.possession !== c.possession) continue;
    if (wh.format && wh.format !== c.format) continue;
    mult(cond.weights);
    prefs(cond.preferences);
  }
  return w;
}

// src/ai/driver.ts
function waitingFor(s) {
  if (s.pending) return s.pending.request.team;
  const m = s.match;
  if (s.phase === "play") {
    if (m?.pendingPhase?.type === "charge") return m.pendingPhase.team;
    return s.turn.active;
  }
  if (!m) return null;
  if (s.phase === "driveSetup") return m.kicking && m.setupDone[m.kicking] ? E.other(m.kicking) : m.kicking ?? null;
  if (s.phase === "kickoff") {
    if (m.pendingPhase && m.pendingPhase.type !== "charge") return m.pendingPhase.team;
    return m.kicking ?? null;
  }
  return null;
}
function aiToAct(s, team2) {
  return waitingFor(s) === team2;
}
function profileContext(s, team2) {
  const opp = team2 === "A" ? "B" : "A";
  const holder = s.ball.kind === "held" ? s.players.find((p) => p.id === s.ball.playerId) : void 0;
  const per = E.rulesFor(s).turnsPerHalf;
  return {
    scoreDiff: s.teams[team2].score - s.teams[opp].score,
    turnsLeft: Math.max(0, per - s.teams[team2].turn),
    half: (s.match?.half ?? 1) === 2 ? 2 : 1,
    possession: holder ? holder.team === team2 ? "us" : "them" : "loose",
    format: s.variant === "sevens" ? "sevens" : "standard"
  };
}
function paramsFor(s, team2, spec) {
  const prof2 = spec?.profile;
  if (!prof2) return null;
  const ctx = profileContext(s, team2);
  const P = prof2.parameters ?? {};
  return { weights: (w) => profileWeights(w, prof2, ctx), objectives: P.objectives, search: P.search };
}
function withParams(params, fn) {
  setCoachParams(params);
  try {
    return fn();
  } finally {
    setCoachParams(null);
  }
}
function* hooked(params, inner) {
  for (; ; ) {
    const r = withParams(params, () => inner.next());
    if (r.done) return r.value;
    yield r.value;
  }
}
function* planNext(s, team2, style, options = {}, spec) {
  return yield* hooked(paramsFor(s, team2, spec), planNextInner(s, team2, style, options));
}
function* planNextInner(s, team2, style, options = {}) {
  if (!aiToAct(s, team2)) return null;
  if (s.pending) {
    const req = s.pending.request;
    const a = answerDecision(s, req, team2, style);
    return { type: "decision", requestId: req.id, optionId: a.optionId, why: a.why };
  }
  if (s.phase === "play") {
    if (!s.match?.pendingPhase) {
      const wz = wizardChoice(s, team2, style);
      if (wz) return { type: "step", input: wz.input, why: wz.why };
    }
    if (!E.throwARockReason(s, team2)) return { type: "step", input: { kind: "throwARock", team: team2 }, why: "Throw a Rock (Prayer to Nuffle): a free chance to Knock Down an opponent before the Turn starts." };
    const d2 = yield* think(s, team2, { ...options, style });
    return { type: "action", input: d2.input, why: d2.reason, decision: d2 };
  }
  const st = matchStepFor(s, team2, style);
  return st ? { type: "step", input: st.input, why: st.why } : null;
}
function nextMove(s, team2, style, options = {}, spec) {
  const g = planNext(s, team2, style, options, spec);
  for (; ; ) {
    const r = g.next();
    if (r.done) return r.value;
  }
}

// src/platform/research/teams.ts
function team(id, rosterId, comp, rerolls, sevens = false) {
  const t = sevens ? newTeamDef("tournament", rosterId, `${rosterId} sevens`, id, "sevens") : newTeamDef("tournament", rosterId, `${rosterId} ${id}`, id);
  let n = 1;
  for (const [pos, k] of comp) for (let i = 0; i < k; i++) t.players.push(playerFromRoster(ROSTER_BY_ID[rosterId], pos, n, `${id}-${n++}`));
  t.rerolls = sevens ? 1 : rerolls;
  t.apothecary = !sevens;
  if (sevens) {
    const vet = t.players.find((p) => p.keywords.includes("Lineman"));
    if (vet) setVeteran(t, vet.id);
  }
  return t;
}
var ROSTERS2 = {
  human: {
    standard: () => team("hum", "human", [["lineman", 7], ["blitzer", 2], ["catcher", 2], ["thrower", 1]], 3),
    sevens: () => team("hum7", "human", [["blitzer", 2], ["catcher", 1], ["lineman", 5]], 1, true)
  },
  orc: {
    standard: () => team("orc", "orc", [["lineman", 7], ["blitzer", 2], ["bigUn", 2]], 3),
    sevens: () => team("orc7", "orc", [["blitzer", 2], ["bigUn", 1], ["lineman", 4]], 1, true)
  }
};
var custom = /* @__PURE__ */ new Map();
var buildTeam2 = (roster, format) => {
  const c = custom.get(roster);
  if (c) return JSON.parse(JSON.stringify(c));
  if (roster.startsWith("draft:")) {
    const id = roster.slice(6);
    const t = buildTeam(id, { format, play: "exhibition", id: `d-${id}` });
    if (!t) throw new Error(`Roster "${id}" cannot be drafted for ${format}.`);
    return t;
  }
  const r = ROSTERS2[roster];
  if (!r) throw new Error(`Unknown roster "${roster}" (available: ${Object.keys(ROSTERS2).join(", ")}, draft:<id>, or a registered team)`);
  return r[format]();
};

// src/platform/lan-engine.ts
bindEngine(engine_exports);
export {
  ADVANCEMENT_COSTS,
  ADVANCEMENT_TITLES,
  ADV_KIND_LABEL,
  ALL_STAR_DEFAULTS,
  ANALYTICS_SCHEMA,
  ATTEMPT_FORMAT,
  BLOCK_FACE_LABEL,
  BLOCK_FACE_P,
  BLOODLUST_RULE,
  BRAWLIN_BRUTES_PAGE,
  BUILD_FINGERPRINT,
  CAPTAIN_PAGE,
  CAPTAIN_RULE,
  CAT_NAME,
  CHAR_LABEL,
  CHAR_TABLE,
  D6_LEVEL_NAMES,
  D6_TILT_LEVELS,
  DEFAULT_RULER_WIDTH,
  DESPERATE,
  DESPERATE_MEASURE,
  DESPERATE_NUMBER,
  DESPERATE_RULE,
  DICE_CODE_TEXT,
  DIFFICULTY_TILT,
  DRAFT_BUDGETS,
  DRAFT_TEMPLATE,
  EXERCISE_FORMAT,
  EXERCISE_PACK_FORMAT,
  FIREBALL_RULE,
  FROG,
  HISTORY_BATCH_FORMAT,
  HISTORY_FORMAT,
  HISTORY_VERSION,
  INDUCEMENTS,
  INDUCEMENT_BY_ID,
  LEAGUES_PAGE,
  LEAGUE_RULES,
  LESSON_ORIGIN,
  MATCHED,
  MATCH_KIND_LABEL,
  MATCH_RULES,
  MAX_ADVANCEMENTS,
  MEGA_STARS,
  MEGA_STAR_COST,
  MERCENARY,
  MIRROR_MARK,
  OFFICIAL_TIERS,
  PETTY_CASH_TOP_UP,
  POLICY_ASSUMPTIONS,
  PRAYERS,
  PRAYER_RULE,
  ROSTERS,
  ROSTER_BY_ID,
  R as RULES,
  RULESETS,
  ReplaySession,
  RngDice,
  SEVENS_DRAFT,
  SEVENS_INDUCEMENT_PAGE,
  SEVENS_INSIGNIFICANT,
  SEVENS_PRAYERS,
  SKILLS,
  SKILL_BY_ID,
  SKILL_TABLE,
  SOURCE_TIERS,
  SPECIALS,
  SPECIAL_RULES_PAGES,
  SPECIAL_RULE_PAGE,
  SPP_AWARD,
  SPP_LABEL,
  STARS,
  STAR_BY_ID,
  STAR_LIST_PAGE,
  STAR_MAX,
  STAR_RULE,
  STAR_RULES_IMPLEMENTED,
  SWARMING_RULE,
  ScriptedDice,
  TIERS,
  GRADER as TRAINING_GRADER,
  TRAINING_VERSION,
  WIZARD_RULE,
  ZAP_RULE,
  actionOptions,
  activationBlockReason,
  addStar,
  advancementBlocked,
  advancementCost,
  advancementValue,
  applyAdvancement,
  applyEntry,
  applyMatchSpp,
  applyWireUpdate,
  assessReplay,
  assistReason,
  attemptStatus,
  authorExercise,
  autoSkills,
  backToSetup,
  ballHolder,
  ballSquare,
  biteTargetAdjacent,
  blockBlockedReason,
  blockBreakdown,
  blockFirstOutcomes,
  blockStrength,
  blockTargets,
  bloodlustSettled,
  board_exports as board,
  boughtSkillCategory,
  budgetsFor,
  buildScenario,
  buildTeam2 as buildTeam,
  buildWorkbookState,
  builtinFormation,
  builtinTeam,
  canScoreWithoutDice,
  canUse,
  captainOnPitch,
  charOptions,
  charRestriction,
  checkCompatibility,
  checkExercise,
  checkGoal,
  checkTacticalExercise,
  cheeringBonus,
  chooseRosterBuiltin,
  cloneState,
  coachOf,
  computerPreMatch,
  createMatch,
  crowdPushSquares,
  currentTeamValue,
  customPlayer,
  d6SuccessProb,
  d6SuccessProbW,
  d6TiltWeights,
  d6WeightsFor,
  decide,
  defaultFormation,
  defaultMvpNominees,
  defaultRubric,
  defaultSwarming,
  describeInput,
  describeMatchInput,
  desperateInputReason,
  desperateLeft,
  desperateOf,
  diceCode,
  difficultyExamples,
  difficultyFactors,
  dodgeChance,
  draftTemplate,
  eligibleSkills,
  execute,
  exerciseMoves,
  expectedProfile,
  exploreOutcomes,
  fansRange,
  findPlayer,
  findPosition,
  fireballTargets,
  formatOfTeam,
  formationSlots,
  foulAssists,
  foulTargets,
  gated,
  getPlayer,
  gradeAttempt,
  groupIssues,
  groupRoom,
  hasPrayer,
  hasSkill,
  hasTackleZone,
  hasTeamCaptainRule,
  importAttempt,
  importExercises,
  importHistories,
  inNoMansLand,
  inOwnHalf,
  inPitchHalf,
  inTeamArea,
  induceLeft,
  induced,
  inducementCost,
  inducementFor,
  inducementsFor,
  inducementsNotOffered,
  interceptMods,
  interceptors,
  isEventTier,
  isMatchInput,
  isMegaStar,
  isOpen,
  isRetiredPosition,
  isSevens,
  isStar,
  isTournamentTeam,
  journeymenFor,
  jumpMods,
  jumpOptions,
  jumpedSquare,
  kickLands,
  kickerCandidates,
  label,
  lastEvents,
  leagueInducementOptions,
  leagueMatchTeam,
  leagueStarOptions,
  leagueStarReason,
  legacyMatchId,
  lessonLabel,
  lessonSquare,
  losColumn,
  makePack,
  markersOf,
  matchAnalytics,
  matchInputReason,
  matchKey,
  matchSpp,
  maxRushes,
  meetsGoal,
  mirrorTeamCopy,
  moveReach,
  movementBudget,
  mustAdvance,
  mvpEligible,
  newAllStarSquad,
  newAttempt,
  newGame,
  newMatchId,
  newTeam,
  newTeamDef,
  nextMove,
  nextNumber,
  onLineOfScrimmageCentre,
  onPitch,
  other,
  outcomeFactor,
  parseHistory,
  parseLessonLabel,
  parseSaveFile,
  parseTeamDef,
  parseWorkbookAnswer,
  passBlockedReason,
  passInfo,
  pitch,
  pitchVariant,
  planAction,
  playerAt,
  playerCategories,
  playerFromPosition,
  playerFromRoster,
  playerFromStar,
  playerValue,
  playsForText,
  positionValue,
  postGameSpp,
  prayersOf,
  preMatchFunds,
  previewDecision,
  publicExercise,
  purchaseCost,
  pushOptions,
  pushesIntoCrowd,
  raisedDead,
  razzlePairReason,
  razzleSecondReason,
  reachableSquares,
  reconstructInitial,
  removeStar,
  replayAttempt,
  resultOf,
  rollRandomSkill,
  rosterInfos,
  rosterLeague,
  rosterScore,
  rosterSpecialRules,
  rulesFor,
  rushChance,
  safestRoute,
  secureReason,
  serializeHistory,
  serializeTraining,
  setCaptain,
  setVeteran,
  setupCandidates,
  skillFromTable,
  skillName,
  skillPointAllowance,
  skillRestriction,
  skillWorth,
  solveExercise,
  sourceTier,
  specialRulePage,
  spendTeamReroll,
  sppAward,
  sppTotal,
  starAddReason,
  starChoiceKey,
  starChoices,
  starMarker,
  starOf,
  starPlaysFor,
  starReady,
  starRuleRef,
  starSupported,
  starsCost,
  startPlay,
  startRuleInfo,
  startRuleReason,
  startRuleTargets,
  stepNode,
  swarmingCandidates,
  teamBudget,
  teamCost,
  teamLeague,
  teamSkillPoints,
  teamSpecialRules,
  teamValue,
  testWeights,
  throwARockReason,
  throwablePlayers,
  tierInfo,
  tiltedChance,
  toBatch,
  toHistory,
  toSaveFile,
  trapdoors,
  ttmBlockedReason,
  ttmRange,
  twoD6AtLeast,
  usePitch,
  useTeamReroll,
  usesSevensInsignificantException,
  validateAttemptShape,
  validateBuild,
  validateDriveSetup,
  validateExerciseShape,
  validateFormalStart,
  validateHistoryShape,
  validateInput,
  validatePosition,
  validateState,
  validateTeamDef,
  verifyHistory,
  verifyLog,
  violationCode,
  vomitTargets,
  waitingFor,
  whatIfMove,
  wizardReason,
  wizardWindowOpen,
  zapChance
};

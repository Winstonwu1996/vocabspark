/* ─── Know U. Learning — 统一进度数据合并策略 (Sync Stabilization v1) ───

   单一可信合并语义。被三处共用，消除"修一处被另一处还原"：
   1. lib/syncMerge.js   — 客户端 409 冲突双向合并 (mergeProgress)
   2. pages/vocab.js     — 云端→React state 应用 (mergeReviewEntry 等)
   3. pages/api/sync.js  — 服务端字段守卫 (applyProgressGuards)

   设计原则：
   - 纯函数，无 React / 无浏览器 / 无 Node 专有 API，前端 bundle 与 API route 均可 import。
   - reviewWordData 改为 "review event recency wins"，允许 forgot 合法降级
     (旧实现 reviewLevel max 会把降级当数据丢失，导致 due 反复弹回)。
   - 所有日期比较统一走 toTime() 规范化 (约束6：nextReviewDate 历史数据
     存在 "YYYY-MM-DD" 纯日期 与 完整 ISO 两种格式混用，字符串比较会误判)。
*/

import { mergeLensUsage, mergeSidekickUsage } from './daily-quota.js'; // Step 3: history 每日配额 union merge

var MAX_REVIEW_LEVEL = 4; // REVIEW_INTERVAL_DAYS.length - 1

/* ─── 日期 → 毫秒时间戳；非法/缺失视为 0 (最旧)。约束6 核心工具 ─── */
export var toTime = function (x) {
  if (!x) return 0;
  var t = new Date(x).getTime();
  return Number.isFinite(t) ? t : 0;
};

/* ─── 取较新 / 较早 / 较新 ISO（全部基于 toTime，混合格式安全） ─── */
export var newerISO = function (a, b) {
  if (!a) return b;
  if (!b) return a;
  return toTime(a) >= toTime(b) ? a : b;
};
export var earlierISO = function (a, b) {
  if (!a) return b;
  if (!b) return a;
  return toTime(a) <= toTime(b) ? a : b;
};
export var maxISO = function (a, b) {
  return newerISO(a, b);
};

/* ─── reviewHistory 并集去重，按 (date|mode|result) 组合 key，时间升序 ─── */
export var unionReviewHistory = function (a, b) {
  var seen = Object.create(null);
  var out = [];
  var all = (Array.isArray(a) ? a : []).concat(Array.isArray(b) ? b : []);
  all.forEach(function (h) {
    if (!h) return;
    var k = String(h.date || "") + "|" + String(h.mode || "") + "|" + String(h.result || "");
    if (seen[k]) return;
    seen[k] = true;
    out.push(h);
  });
  out.sort(function (x, y) {
    return toTime(x && x.date) - toTime(y && y.date);
  });
  return out;
};

/* ─── 单词条 SRS recency：max(srsUpdatedAt, 最新 reviewHistory.date)，否则退到 fallbackTime ───
   只用"真实活动时间"，绝不看通用 updatedAt，也绝不看 nextReviewDate。
   - Codex P1：meaning/phonetic 懒加载会刷新通用 updatedAt，若用它做 recency，
     "只补释义的旧 SRS 数据" 会错误赢过另一设备刚完成的复习。
   - Codex P2：用 max(srsUpdatedAt, history) 而非硬优先 srsUpdatedAt。
   - 真实数据验证 (test 3) 暴露：nextReviewDate 是"未来复习计划"不是"活动时间"，
     用它当 recency 会让 level 高但无 history 的旧云端词（其 nextReviewDate 在未来）
     赢过本地刚 forgot 的降级。故 recency 不含 nextReviewDate；无活动信号时退到
     fallbackTime（顶层 updatedAt）。 ─── */
export var entryRecency = function (e, fallbackTime) {
  if (!e) return fallbackTime || 0;
  var bySrs = toTime(e.srsUpdatedAt);
  var hist = Array.isArray(e.reviewHistory) ? e.reviewHistory : [];
  var byHist = 0;
  for (var i = 0; i < hist.length; i++) {
    var t = toTime(hist[i] && hist[i].date);
    if (t > byHist) byHist = t;
  }
  var srsRecency = Math.max(bySrs, byHist);
  if (srsRecency) return srsRecency;
  return fallbackTime || 0;
};

export var normalizeLevel = function (lvl) {
  var n = Number(lvl);
  if (!Number.isFinite(n) || n < 0) return 0;
  if (n > MAX_REVIEW_LEVEL) return MAX_REVIEW_LEVEL;
  return n;
};

/* ─── 单个 reviewWordData entry 合并：recency 更新的一方赢 (含 reviewLevel + nextReviewDate)。
       关键修复：允许 forgot 导致的 level 合法降级，不再无脑 max level。
       reviewHistory 始终取并集 (历史不丢)。
       ctx.localFallback / ctx.serverFallback：entry 完全无日期时用顶层 updatedAt 兜底。 ─── */
export var mergeReviewEntry = function (local, server, ctx) {
  if (!local) return server;
  if (!server) return local;
  ctx = ctx || {};
  var lr = entryRecency(local, ctx.localFallback || 0);
  var sr = entryRecency(server, ctx.serverFallback || 0);

  // recency 更新的赢；完全平局 (同时间戳，极罕见且无信号区分) 保守取较高 level，避免无谓降级
  var winner;
  if (lr > sr) winner = local;
  else if (sr > lr) winner = server;
  else winner = (Number(local.reviewLevel) || 0) >= (Number(server.reviewLevel) || 0) ? local : server;

  var mergedHist = unionReviewHistory(local.reviewHistory, server.reviewHistory);

  return {
    word: local.word || server.word,
    phonetic: local.phonetic || server.phonetic || "",
    meaning: local.meaning || server.meaning || "",
    firstLearnedAt: earlierISO(local.firstLearnedAt, server.firstLearnedAt),
    reviewLevel: normalizeLevel(winner.reviewLevel),
    nextReviewDate: winner.nextReviewDate || newerISO(local.nextReviewDate, server.nextReviewDate),
    reviewHistory: mergedHist,
    consecutiveForgot: winner.consecutiveForgot != null
      ? winner.consecutiveForgot
      : (local.consecutiveForgot != null ? local.consecutiveForgot : server.consecutiveForgot),
    guessCorrect: winner.guessCorrect != null
      ? winner.guessCorrect
      : (local.guessCorrect != null ? local.guessCorrect : server.guessCorrect),
    // srsUpdatedAt 只取 winner，不取 max (Codex P1)：若 winner 靠 history recency 胜出但自身
    // 无 srsUpdatedAt，取 max 会把 loser 的旧 srsUpdatedAt 写进来，下轮 entryRecency 又优先看
    // 它 → 反而掩盖 winner 更新的 history。winner 无 srsUpdatedAt 时留空，让 recency fallback 到 history。
    srsUpdatedAt: winner.srsUpdatedAt,
    // updatedAt 仅作通用 meta 时间 (含 meaning 更新)，不参与 SRS recency 判定
    updatedAt: maxISO(local.updatedAt, server.updatedAt),
  };
};

/* ─── topicId 字典并集：union by key，键冲突时 newer 一方赢。不丢任何 topic。 ─── */
var unionByTopic = function (a, b, localNewer) {
  a = a && typeof a === "object" ? a : {};
  b = b && typeof b === "object" ? b : {};
  return localNewer ? Object.assign({}, b, a) : Object.assign({}, a, b);
};

/* R5 (sync 重构 §3): learningReceipts = { topicId: { lensId: receipt } } —— 两层 union。
   原 passthrough (newer 整体赢) 会丢 newer 侧没碰的 topic/lens 的 grandfather 凭据 (workflow P1)。
   topic union → 同 topic 内 lensId union → leaf 冲突 newer 赢 (凭据是幂等完成标记, 谁赢都对)。 */
var mergeLearningReceipts = function (a, b, localNewer) {
  a = a && typeof a === "object" ? a : {};
  b = b && typeof b === "object" ? b : {};
  var out = {};
  var topics = Object.keys(a).concat(Object.keys(b));
  topics.forEach(function (t) {
    if (out[t]) return;
    var at = a[t] && typeof a[t] === "object" ? a[t] : {};
    var bt = b[t] && typeof b[t] === "object" ? b[t] : {};
    out[t] = localNewer ? Object.assign({}, bt, at) : Object.assign({}, at, bt);
  });
  return out;
};

/* R5: reviewPool = { words: [{word}], concepts: [{conceptId}] } —— 按 key union 去重 (不丢任一端的待推词)。
   原 passthrough newer 整体赢 → 丢另一端积累的复习词 (bridge 喂词来源)。 */
var mergeReviewPool = function (a, b, localNewer) {
  a = a && typeof a === "object" ? a : { words: [], concepts: [] };
  b = b && typeof b === "object" ? b : { words: [], concepts: [] };
  var first = localNewer ? a : b, second = localNewer ? b : a; // newer 先入 → dup 时 newer 的 metadata 留
  var unionBy = function (arrA, arrB, keyOf) {
    var seen = {}, out = [];
    (Array.isArray(arrA) ? arrA : []).concat(Array.isArray(arrB) ? arrB : []).forEach(function (item) {
      var k = keyOf(item);
      if (k == null) { out.push(item); return; }
      if (!Object.prototype.hasOwnProperty.call(seen, k)) { seen[k] = 1; out.push(item); }
    });
    return out;
  };
  return {
    words: unionBy(first.words, second.words, function (w) { return w && w.word; }),
    concepts: unionBy(first.concepts, second.concepts, function (c) { return c && c.conceptId; }),
  };
};

/* R5 (workflow P1): inProgress = { topicId: { turnIndex, conversationLog, lensId, savedAt } }。
   原 unionByTopic 同 topic 靠 blob 级 updatedAt 选赢家 → 无关 vocab 写入 bump updatedAt 会让
   "刚在这门课推进到更高轮次"的设备反而输, resume 退回较旧轮次 + 丢 conversationLog。
   改: 同 topic 取 savedAt 较新的记录 (谁最近在这门课上动过谁赢; savedAt 缺失 → 退回 localNewer)。 */
var mergeInProgress = function (a, b, localNewer) {
  a = a && typeof a === "object" ? a : {};
  b = b && typeof b === "object" ? b : {};
  var out = {};
  Object.keys(a).concat(Object.keys(b)).forEach(function (t) {
    if (Object.prototype.hasOwnProperty.call(out, t)) return;
    var ra = a[t], rb = b[t];
    if (ra == null) { out[t] = rb; return; }
    if (rb == null) { out[t] = ra; return; }
    var ta = toTime(ra.savedAt), tb = toTime(rb.savedAt);
    if (ta === tb) out[t] = localNewer ? ra : rb;
    else out[t] = ta > tb ? ra : rb;
  });
  return out;
};

/* R5 (workflow P1): userWorldview 原走 passthrough (newer 整体赢) → 丢另一端的 selfDisclosure /
   valueEmphasis / unansweredHooks / topicsCompleted (都是跨课累积的 append-only 数组, 是 AI sidekick
   读回个性化的"学生画像记忆")。标量/对象字段 newer 赢 (passthrough base), 累积数组 union 不丢。 */
var _unionScalarArr = function (a, b, newerFirst) {
  var first = newerFirst ? a : b, second = newerFirst ? b : a;
  var seen = {}, out = [];
  (Array.isArray(first) ? first : []).concat(Array.isArray(second) ? second : []).forEach(function (v) {
    var k = (typeof v === "object") ? JSON.stringify(v) : String(v);
    if (!Object.prototype.hasOwnProperty.call(seen, k)) { seen[k] = 1; out.push(v); }
  });
  return out;
};
var mergeUserWorldview = function (a, b, localNewer) {
  if (!a || typeof a !== "object") return b;
  if (!b || typeof b !== "object") return a;
  // 初始 seed (buildInitialWorldviewSeed: initialSeed=true, 全是 placeholder 假设, 非真实画像) 不得靠
  // 更新的 updatedAt 覆盖另一端真实 worldview 的标量字段 (reasoningStyle/knowledgeAnchors 等)。
  // 一端是 seed、另一端不是 → 真实端做标量 base; 两端都 seed 或都非 seed → 维持 newer 赢。
  // (selfDisclosure/valueEmphasis 等累积数组下面照常 union, 不受影响 —— 新设备首拉也不丢本地新披露。)
  // gated on initialSeed: 对所有非 seed 的既有数据完全 inert, 零回归。
  var aSeed = a.initialSeed === true, bSeed = b.initialSeed === true;
  var scalarLocalNewer = localNewer;
  if (aSeed && !bSeed) scalarLocalNewer = false;      // a 是 seed → 另一端(真实)标量赢
  else if (bSeed && !aSeed) scalarLocalNewer = true;  // b 是 seed → 另一端(真实)标量赢
  var merged = scalarLocalNewer ? Object.assign({}, b, a) : Object.assign({}, a, b);
  // selfDisclosure: dedupe by topic|turn|content, 取最近 30 条 (与单机 cap 一致)
  var sdSeen = {}, sd = [];
  (Array.isArray(a.selfDisclosure) ? a.selfDisclosure : []).concat(Array.isArray(b.selfDisclosure) ? b.selfDisclosure : []).forEach(function (d) {
    if (!d) return;
    var k = (d.topic || "") + "|" + (d.turn != null ? d.turn : "") + "|" + (d.content || "");
    if (!Object.prototype.hasOwnProperty.call(sdSeen, k)) { sdSeen[k] = 1; sd.push(d); }
  });
  sd.sort(function (x, y) { return toTime(x && x.at) - toTime(y && y.at); }); // 旧→新
  merged.selfDisclosure = sd.slice(-30);
  merged.valueEmphasis = _unionScalarArr(a.valueEmphasis, b.valueEmphasis, localNewer);
  merged.unansweredHooks = _unionScalarArr(a.unansweredHooks, b.unansweredHooks, localNewer);
  merged.topicsCompleted = _unionScalarArr(a.topicsCompleted, b.topicsCompleted, localNewer);
  // 一端 seed 一端真实: 合并结果已含真实端标量, 不再是 pristine seed → 清掉 initialSeed 标志,
  // 否则下次合并会把这份"已真实"的 worldview 当 seed, 让对端再次抢标量。两端同态时不动。
  if (aSeed !== bSeed) delete merged.initialSeed;
  return merged;
};

/* historyData.profile 也可能是 placeholder (atlas/sample 流自动存的占位, placeholder=true, 非真实填写)。
   同 initialSeed worldview: 一端 placeholder 一端真实 → 真实端赢, 不让占位靠更新 updatedAt 覆盖真实 profile;
   两端同态 (都真实/都占位/都无) → 维持 newer 赢 (与原 passthrough 一致)。gated on placeholder, 对真实
   profile 完全 inert, 零回归。返回布尔: profile 胜出侧是否 local —— curriculum 须跟随同侧 (派生自 profile)。 */
var historyProfileWinnerIsLocal = function (a, b, localNewer) {
  var aObj = a && typeof a === "object", bObj = b && typeof b === "object";
  if (aObj && !bObj) return true;    // 只有 local 有 → local
  if (bObj && !aObj) return false;   // 只有 server 有 → server
  if (aObj && bObj) {
    var aPlace = a.placeholder === true, bPlace = b.placeholder === true;
    if (aPlace && !bPlace) return false; // a 占位 → 真实 server 赢
    if (bPlace && !aPlace) return true;  // b 占位 → 真实 local 赢
  }
  return localNewer;                  // 同态 / 都无 → newer 赢 (同原 passthrough)
};

/* ─── historyData 合并（History 模块进度，寄生在 vocabspark_v1 blob 里）───
   修复：旧 mergeProgress 白名单遗漏 historyData → 409 冲突/登录合并会整体丢弃
   用户的历史进度（completedTopics / inProgress / transcripts / worldview …）。
   completedTopics / inProgress / transcripts 是 topicId 字典 → union 不丢任何 topic；
   标量字段（worldview/profile/curriculum）newer 赢；history stats 累加字段取 max；
   其余未显式处理的子字段 passthrough（newer 赢）防未来字段再被悄悄丢。 ─── */
export var mergeHistoryData = function (local, server, localNewer) {
  if (!local) return server;
  if (!server) return local;
  // passthrough base：先并所有键（newer 赢标量冲突），再用精确逻辑覆盖关键字段
  var merged = localNewer
    ? Object.assign({}, server, local)
    : Object.assign({}, local, server);
  merged.completedTopics = unionByTopic(local.completedTopics, server.completedTopics, localNewer);
  merged.inProgress = mergeInProgress(local.inProgress, server.inProgress, localNewer); // R5: 同 topic 取 savedAt 较新
  merged.transcripts = unionByTopic(local.transcripts, server.transcripts, localNewer);
  var lhs = local.stats || {};
  var shs = server.stats || {};
  if (local.stats || server.stats) {
    // Codex P2：stats 不能整体重建（会丢其它子字段）→ passthrough base 保留其余子字段，
    // 再用 union 后的 completedTopics 重算关键字段，保证与并集一致（topicsCompleted ≥ 实际完成数）。
    var baseStats = localNewer
      ? Object.assign({}, shs, lhs)
      : Object.assign({}, lhs, shs);
    var completedCount = Object.keys(merged.completedTopics || {}).length;
    var sumXp = 0;
    Object.keys(merged.completedTopics || {}).forEach(function (t) {
      var ct = merged.completedTopics[t];
      sumXp += Number(ct && ct.xpEarned) || 0;
    });
    baseStats.totalXp = Math.max(Number(lhs.totalXp) || 0, Number(shs.totalXp) || 0, sumXp);
    baseStats.topicsCompleted = Math.max(Number(lhs.topicsCompleted) || 0, Number(shs.topicsCompleted) || 0, completedCount);
    merged.stats = baseStats;
  }
  // Step 3 (v1.2 §6): 每日配额不能走默认 passthrough (newer-wins 整体替换会丢同日另一端扣减)。
  // 用 mergeDailyQuota: 跨日取较新 date 全量, 同日 union usedLensIds / eventIds 去重。
  // 条件触发 — 只在 history 真写了这两个字段时生效, 否则 inert (不影响现有 vocab 用户)。
  if (local.dailyLensUsage || server.dailyLensUsage) {
    merged.dailyLensUsage = mergeLensUsage(local.dailyLensUsage, server.dailyLensUsage);
  }
  if (local.dailySidekickUsage || server.dailySidekickUsage) {
    merged.dailySidekickUsage = mergeSidekickUsage(local.dailySidekickUsage, server.dailySidekickUsage);
  }
  // R5 (sync 重构 §3): 以下三字段原走 passthrough (newer 整体赢) → 跨设备/409 合并会整体丢另一端数据。
  // 改 field-level union, 不丢任一端 (grandfather 凭据 / bridge 待推词 / 各 topic 的 sidekick 历史)。
  if (local.learningReceipts || server.learningReceipts) {
    merged.learningReceipts = mergeLearningReceipts(local.learningReceipts, server.learningReceipts, localNewer);
  }
  if (local.reviewPool || server.reviewPool) {
    merged.reviewPool = mergeReviewPool(local.reviewPool, server.reviewPool, localNewer);
  }
  if (local.sidekickLogs || server.sidekickLogs) {
    // topicId→数组 字典: union by topic (同 topic newer 赢), 不再丢 newer 侧没碰的 topic 的日志。
    merged.sidekickLogs = unionByTopic(local.sidekickLogs, server.sidekickLogs, localNewer);
  }
  if (local.userWorldview || server.userWorldview) {
    merged.userWorldview = mergeUserWorldview(local.userWorldview, server.userWorldview, localNewer);
  }
  // profile + curriculum 必须同侧 (curriculum 由 profile.city/grade 派生)。先定 profile 胜出侧 (placeholder
  // 让位真实, 否则 newer), curriculum 跟随同侧 —— 否则真实 profile 会配上占位的 Irvine/grade-7 curriculum,
  // reload 后显示错误的课纲 banner (Codex P2)。
  if (local.profile || server.profile || local.curriculum || server.curriculum) {
    var profLocalWins = historyProfileWinnerIsLocal(local.profile, server.profile, localNewer);
    if (local.profile || server.profile) merged.profile = profLocalWins ? local.profile : server.profile;
    if (local.curriculum || server.curriculum) {
      // curriculum 优先取 profile 胜出侧; 该侧若没有 (部分/历史 blob), 退到另一侧 —— 绝不把已有 curriculum
      // 覆盖成 undefined (Codex P2)。两侧都有时即与真实 profile 配对。
      var curWin = profLocalWins ? local.curriculum : server.curriculum;
      var curAlt = profLocalWins ? server.curriculum : local.curriculum;
      merged.curriculum = (curWin != null) ? curWin : curAlt;
    }
  }
  return merged;
};

/* ─── bridgeQueue 合并（history→vocab 推荐生词独立队列，同样寄生在 blob 里，同样曾被丢）─── */
export var mergeBridgeQueue = function (local, server, localNewer) {
  if (!local) return server;
  if (!server) return local;
  var merged = localNewer
    ? Object.assign({}, server, local)
    : Object.assign({}, local, server);
  merged.history = unionByTopic(local.history, server.history, localNewer);
  return merged;
};

/* ─── 主入口：合并 local + server 顶层数据 (409 冲突双向合并) ─── */
export var mergeProgress = function (local, server) {
  if (!local) return server;
  if (!server) return local;

  var lTime = toTime(local.updatedAt);
  var sTime = toTime(server.updatedAt);
  var localNewer = lTime >= sTime;

  var merged = {};

  // stats：累加字段取 max；streak 用 newer；lastStudyDate 取新
  var ls = local.stats || {};
  var ss = server.stats || {};
  merged.stats = {
    xp: Math.max(Number(ls.xp) || 0, Number(ss.xp) || 0),
    total: Math.max(Number(ls.total) || 0, Number(ss.total) || 0),
    correct: Math.max(Number(ls.correct) || 0, Number(ss.correct) || 0),
    streak: localNewer ? (Number(ls.streak) || 0) : (Number(ss.streak) || 0),
    bestStreak: Math.max(Number(ls.bestStreak) || 0, Number(ss.bestStreak) || 0),
    lastStudyDate: newerISO(ls.lastStudyDate, ss.lastStudyDate),
  };

  // pet：totalFed 较大的整体 + unlocked 并集 + totalFed 取 max
  if (local.pet || server.pet) {
    var lFed = Number(local.pet && local.pet.totalFed) || 0;
    var sFed = Number(server.pet && server.pet.totalFed) || 0;
    var basePet;
    if (lFed > sFed) basePet = local.pet;
    else if (sFed > lFed) basePet = server.pet;
    else basePet = localNewer ? local.pet : server.pet;
    basePet = basePet || local.pet || server.pet;
    var lUnlocked = (local.pet && local.pet.unlocked) || [];
    var sUnlocked = (server.pet && server.pet.unlocked) || [];
    var unionUnlocked = Array.from(new Set(lUnlocked.concat(sUnlocked)));
    merged.pet = Object.assign({}, basePet, {
      unlocked: unionUnlocked,
      totalFed: Math.max(lFed, sFed),
    });
  }

  // wordStatusMap：dict merge，localNewer 的字段赢
  var lWsm = local.wordStatusMap || {};
  var sWsm = server.wordStatusMap || {};
  merged.wordStatusMap = localNewer
    ? Object.assign({}, sWsm, lWsm)
    : Object.assign({}, lWsm, sWsm);

  // reviewWordData：词级 recency 合并 (新策略)
  var lRwd = local.reviewWordData || {};
  var sRwd = server.reviewWordData || {};
  var ctx = { localFallback: lTime, serverFallback: sTime };
  var allWords = new Set(Object.keys(lRwd).concat(Object.keys(sRwd)));
  merged.reviewWordData = {};
  allWords.forEach(function (w) {
    merged.reviewWordData[w] = mergeReviewEntry(lRwd[w], sRwd[w], ctx);
  });

  // session：同清单取 idx 较大；不同清单取 newer
  var lSession = local.session;
  var sSession = server.session;
  if (lSession && sSession) {
    var lIdx = Number(lSession.idx) || 0;
    var sIdx = Number(sSession.idx) || 0;
    var sameList = JSON.stringify(lSession.wordList || []) === JSON.stringify(sSession.wordList || []);
    if (sameList) merged.session = lIdx >= sIdx ? lSession : sSession;
    else merged.session = localNewer ? lSession : sSession;
  } else {
    merged.session = lSession || sSession;
  }

  // profile / wordInput：较长的赢 (append-only 假设)；长度接近用 newer。
  // 空串不靠虚高 updatedAt 覆盖另一端真实内容 (Codex P2): 新设备先开 /history 时本地 vocab 字段空、但
  // updatedAt 因 seed 虚高 → 原 "<阈值用 newer" 分支会让空本地抹掉云端短 profile/wordInput。非空必胜空,
  // 与 append-only "较长赢" 假设一致 (空=无内容, 非清空意图); 两端皆非空时逻辑不变, 零回归。
  var lProfile = local.profile || "";
  var sProfile = server.profile || "";
  if (lProfile && !sProfile) merged.profile = lProfile;
  else if (sProfile && !lProfile) merged.profile = sProfile;
  else merged.profile = Math.abs(lProfile.length - sProfile.length) < 20
    ? (localNewer ? lProfile : sProfile)
    : (lProfile.length > sProfile.length ? lProfile : sProfile);

  var lInput = local.wordInput || "";
  var sInput = server.wordInput || "";
  var pickedInput;
  if (lInput && !sInput) pickedInput = lInput;
  else if (sInput && !lInput) pickedInput = sInput;
  else pickedInput = Math.abs(lInput.length - sInput.length) < 50
    ? (localNewer ? lInput : sInput)
    : (lInput.length > sInput.length ? lInput : sInput);
  // 第三批：合并层也对胜出方 stable dedupe，跟客户端 load/upload 去重一致。
  // 只去重不改"哪边胜出"，distinct 词数不变 → 不丢词、不触发守卫缩水判定。
  merged.wordInput = (function () {
    if (typeof pickedInput !== "string" || !pickedInput) return pickedInput;
    var parts = pickedInput.split(/[\n,，、]+/).map(function (w) { return w.trim(); }).filter(Boolean);
    var deduped = dedupeWordsStable(parts);
    return deduped.length === parts.length ? pickedInput : deduped.join("\n");
  })();

  // settings：整体 newer 赢
  merged.settings = localNewer
    ? Object.assign({}, server.settings || {}, local.settings || {})
    : Object.assign({}, local.settings || {}, server.settings || {});

  // 其他顶层字段
  merged.targetDate = newerISO(local.targetDate, server.targetDate) || local.targetDate || server.targetDate;
  merged.completedWords = (function () {
    var seen = Object.create(null);
    var out = [];
    var all = (Array.isArray(local.completedWords) ? local.completedWords : [])
      .concat(Array.isArray(server.completedWords) ? server.completedWords : []);
    all.forEach(function (x) {
      var k = typeof x === "string" ? x : (x && x.word ? x.word : JSON.stringify(x));
      if (k != null && !seen[k]) { seen[k] = true; out.push(x); }
    });
    return out;
  })();
  merged.schemaVersion = Math.max(local.schemaVersion || 0, server.schemaVersion || 0);
  merged.tipDismissed = local.tipDismissed || server.tipDismissed || false;

  // historyData / bridgeQueue：曾被白名单遗漏 → 409/登录合并整体丢历史进度 + bridge 队列。
  // 显式合并，按 topicId union 不丢任何 topic。
  if (local.historyData || server.historyData) {
    merged.historyData = mergeHistoryData(local.historyData, server.historyData, localNewer);
  }
  if (local.bridgeQueue || server.bridgeQueue) {
    merged.bridgeQueue = mergeBridgeQueue(local.bridgeQueue, server.bridgeQueue, localNewer);
  }
  // studyGoal：另一个寄生字段，简单 newer-wins / non-empty 兜底（防一并丢失）
  if (local.studyGoal || server.studyGoal) {
    merged.studyGoal = localNewer
      ? (local.studyGoal || server.studyGoal)
      : (server.studyGoal || local.studyGoal);
  }

  merged.updatedAt = localNewer ? local.updatedAt : server.updatedAt;

  return merged;
};

/* ─── 反丢失校验：merged 不该比 server 少关键字段 ─── */
export var validateProgressMerge = function (merged, server) {
  if (!merged || !server) return true;
  if (Object.keys(merged.wordStatusMap || {}).length < Object.keys(server.wordStatusMap || {}).length) return false;
  if (Object.keys(merged.reviewWordData || {}).length < Object.keys(server.reviewWordData || {}).length) return false;
  if ((merged.stats && merged.stats.xp || 0) < (server.stats && server.stats.xp || 0)) return false;
  // 反丢失：History 进度 + bridge 队列不该比 server 少 (修复白名单遗漏后的安全网)。
  // 仅 merge 路径调用，此时三者都已 union → 必然 ≥ server，故为回归 tripwire。
  // Codex P3：补 inProgress / transcripts（根因文档列出的历史进度字段）。
  var mh = merged.historyData || {};
  var sh = server.historyData || {};
  if (Object.keys(mh.completedTopics || {}).length < Object.keys(sh.completedTopics || {}).length) return false;
  if (Object.keys(mh.inProgress || {}).length < Object.keys(sh.inProgress || {}).length) return false;
  if (Object.keys(mh.transcripts || {}).length < Object.keys(sh.transcripts || {}).length) return false;
  var mBq = (merged.bridgeQueue && merged.bridgeQueue.history) || {};
  var sBq = (server.bridgeQueue && server.bridgeQueue.history) || {};
  if (Object.keys(mBq).length < Object.keys(sBq).length) return false;
  return true;
};

/* ─── 服务端字段守卫 (从 pages/api/sync.js applyFieldGuards 抽取，逻辑保持一致) ───
   除用户主动操作 wordInput (intent='user_edit_wordInput'/'user_upload'/'user_clear') 外，
   关键字段 push 时比云端少 → 保留云端 + 记入 rejected。
   返回 { safe, rejected }。 ─── */
var objKeyCount = function (o) { return o && typeof o === "object" ? Object.keys(o).length : 0; };
var arrLen = function (a) { return Array.isArray(a) ? a.length : 0; };
var num = function (v) { var n = Number(v); return Number.isFinite(n) ? n : 0; };

// pet 对象级守卫用：cloud 的这些标量字段非空时不该被默认/陈旧快照清空。
// 含 lastFeedAt (calcDecayedHunger 据它算饥饿衰减，丢了会错算) 与 evolvedAt (进化时间戳)。
var PET_SCALAR_FIELDS = ["name", "happiness", "hunger", "equipped", "species", "createdAt", "lastFeedAt", "evolvedAt"];
// "有值"判定：数字(含 0)/对象/布尔均算有值；null/undefined/空串算空。
var petFieldPresent = function (v) {
  if (v === undefined || v === null) return false;
  if (typeof v === "string") return v !== "";
  return true;
};
// 标量相等（equipped 是对象 → 按 JSON 值比较，避免引用不同误判改动）。
var petValEq = function (a, b) {
  var na = a === undefined ? null : a;
  var nb = b === undefined ? null : b;
  if ((na && typeof na === "object") || (nb && typeof nb === "object")) {
    return JSON.stringify(na) === JSON.stringify(nb);
  }
  return na === nb;
};
// wordInput 守卫按 distinct 词数判断缩水（而非字符长度）：纯去重 distinct 不变 → 天然放行。
var countDistinctWordsForGuard = function (wi) {
  if (!wi) return 0;
  var seen = Object.create(null), n = 0;
  String(wi).split(/[\n,，、]+/).forEach(function (w) {
    var k = w.trim().toLowerCase();
    if (k && !seen[k]) { seen[k] = true; n++; }
  });
  return n;
};

export var applyProgressGuards = function (incoming, cloud, intent) {
  if (!cloud) return { safe: incoming || {}, rejected: [] };
  if (!incoming || typeof incoming !== "object") {
    return { safe: cloud, rejected: ["_entire_payload_invalid"] };
  }

  var safe = Object.assign({}, incoming);
  var rejected = [];

  if (objKeyCount(incoming.wordStatusMap) < objKeyCount(cloud.wordStatusMap)) {
    safe.wordStatusMap = cloud.wordStatusMap;
    rejected.push("wordStatusMap");
  }

  if (objKeyCount(incoming.reviewWordData) < objKeyCount(cloud.reviewWordData)) {
    safe.reviewWordData = cloud.reviewWordData;
    rejected.push("reviewWordData");
  }

  // pet：对象级合并守卫（取代旧"整字段回退"，复用 mergeProgress 的 pet 合并思路）。
  // 旧实现仅在 totalFed 倒退或 unlocked 缩水时把整个字段回退到 cloud.pet —— 两个副作用：
  //   1) 反丢失有缺口 (Codex P2)：若 totalFed/unlocked 未变但 cloud 改了 name/happiness/...，
  //      默认/陈旧 pet 快照不触发 petBad，会悄悄覆盖云端这些非空标量。
  //   2) 过度回退：incoming 合法喂食 (totalFed 更高) 但 unlocked 偶发缩水时，整字段回退会把
  //      incoming 更高的 totalFed/新 name 一起退回 cloud —— 那才是真数据丢失。
  // 改为：totalFed 取 max（挡倒退）、unlocked 取并集（挡缩水）、标量 base = totalFed 较高者
  // （更"进化"= 更权威；平局取 incoming —— 落后版本会先 409 走 mergeProgress 客户端合并，不会到这），
  // 再用 cloud 的非空标量填补 base 的空缺，默认/残缺快照不能清空云端权威字段。
  var ip = incoming.pet || {};
  var cp = cloud.pet || {};
  if (cp && (cp.totalFed || cp.unlocked || cp.species)) {
    var ipFed = num(ip.totalFed);
    var cpFed = num(cp.totalFed);
    var ipUnlocked = Array.isArray(ip.unlocked) ? ip.unlocked : [];
    var cpUnlocked = Array.isArray(cp.unlocked) ? cp.unlocked : [];

    var basePet = ipFed >= cpFed ? ip : cp;
    var mergedPet = Object.assign({}, basePet);
    mergedPet.totalFed = Math.max(ipFed, cpFed);
    mergedPet.unlocked = Array.from(new Set(cpUnlocked.concat(ipUnlocked)));
    PET_SCALAR_FIELDS.forEach(function (k) {
      if (!petFieldPresent(mergedPet[k]) && petFieldPresent(cp[k])) mergedPet[k] = cp[k];
    });

    // 仅当合并实际改写了 incoming 的提交值才记 rejected（保持 rejected="有拦截动作"的审计语义）。
    var petAdjusted =
      mergedPet.totalFed !== ipFed ||
      mergedPet.unlocked.length !== ipUnlocked.length ||
      PET_SCALAR_FIELDS.some(function (k) { return !petValEq(mergedPet[k], ip[k]); });
    if (petAdjusted) {
      safe.pet = mergedPet;
      rejected.push("pet");
    }
  }

  var is = incoming.stats || {};
  var cs = cloud.stats || {};
  if (cs && Object.keys(cs).length > 0) {
    var safeStats = Object.assign({}, is);
    var statsAdjusted = false;
    ["xp", "total", "correct", "bestStreak"].forEach(function (k) {
      if (num(is[k]) < num(cs[k])) {
        safeStats[k] = num(cs[k]);
        statsAdjusted = true;
      }
    });
    if (statsAdjusted) {
      safe.stats = safeStats;
      rejected.push("stats(adjusted)");
    }
  }

  var iWi = incoming.wordInput || "";
  var cWi = cloud.wordInput || "";
  // 按 distinct 词数比较（非字符长度）：纯去重（distinct 不变、仅少了重复条目）天然放行，
  // 只有 distinct 真减少（删词）才需用户 intent。这样客户端可在 save/sync 时自动去重，无需 hack intent。
  if (countDistinctWordsForGuard(iWi) < countDistinctWordsForGuard(cWi)) {
    var allowedIntents = ["user_edit_wordInput", "user_upload", "user_clear"];
    if (!intent || allowedIntents.indexOf(intent) === -1) {
      safe.wordInput = cWi;
      rejected.push("wordInput");
    }
  }

  // Codex P1：historyData 服务端守卫。普通写入（非 409 merge）携带缩水的历史进度时，
  // 旧守卫不拦 → 直接覆盖云端（与本 P0 同类数据丢失，不同触发路径）。
  // 只守真正 append-only 的子字段：completedTopics / transcripts。
  // ⚠️ 故意不守 inProgress 与 bridgeQueue.history：二者会被正常流程合法删除
  //   （完成 topic → clearInProgress 删该条；bridge 词被消费 → delete 队列条目），
  //   按"缩水=拒绝"会在每次完成/消费时误伤、把已完成会话/已消费队列复活。
  // 触发时保守 union：并集不丢 topic，键冲突 cloud 赢（不让本地默认值覆盖云端权威值）。
  if (cloud.historyData) {
    var ih = incoming.historyData || {};
    var ch = cloud.historyData;
    // Codex Round 3 P1：base 必须是 cloud、再叠 incoming —— 否则 guard 触发时以 incoming 为 base，
    // 会把 cloud 独有的子字段 (userWorldview/profile/curriculum/stats/englishLevel/reviewPool/sidekickLogs…)
    // 一并丢掉。{...ch, ...ih}: incoming 的新值仍赢, incoming 缺的字段保留 cloud, 不清空云端。
    var safeHist = Object.assign({}, ch, ih);
    var histAdjusted = false;
    ["completedTopics", "transcripts"].forEach(function (k) {
      if (objKeyCount(ih[k]) < objKeyCount(ch[k])) {
        safeHist[k] = Object.assign({}, ih[k] || {}, ch[k] || {});
        histAdjusted = true;
      }
    });
    if (histAdjusted) {
      safe.historyData = safeHist;
      rejected.push("historyData");
    }
  }

  return { safe: safe, rejected: rejected };
};

/* ─── canonicalize：v1 提供稳定去重工具 (供 save/sync/merge 三层调用)。
   wordInput 完整 stable dedupe + session 迁移在第三批接入；此处先提供纯函数能力，
   默认 options 不改写数据，保证第一批零行为变更。 ─── */
export var dedupeWordsStable = function (words) {
  var seen = Object.create(null);
  var out = [];
  for (var i = 0; i < words.length; i++) {
    var w = words[i];
    if (w == null) continue;
    var key = String(w).trim().toLowerCase();
    if (!key || seen[key]) continue;
    seen[key] = true;
    out.push(w); // 保留首次出现的原始大小写形式 (约束4)
  }
  return out;
};

export var canonicalizeProgress = function (data, options) {
  if (!data || typeof data !== "object") return data;
  options = options || {};
  var out = Object.assign({}, data);
  if (options.dedupeWordInput && typeof out.wordInput === "string") {
    var parts = out.wordInput.split(/[\n,，、]+/).map(function (w) { return w.trim(); }).filter(Boolean);
    out.wordInput = dedupeWordsStable(parts).join("\n");
  }
  return out;
};

/* ─── 客户端推送前的"反数据丢失"闸门判定（纯函数）。从 _doSync 抽出，可单测。
   ★ 设计修正（chompcloudusa 实测线上事故）：原先用两个【绝对启发式】判断本地是否
   "看起来危险"，但二者都会误伤正常用户、把同步永久卡死：
     1) rwd < wsm*0.3：大量"只点'✅能'/快筛跳过"的词只写 wordStatusMap 不写 reviewWordData
        → rwd 天然远低于 wsm（实测 wsm45/rwd7）→ 被当数据丢失 → 每次同步都被拦、recover
        拉云端也是同样低比例 → reGate 仍 blocked → 永久 error，手动重试也失败。
     2) pet 默认 && 已学>50：不玩宠物的用户 pet 永远 default → 同样误伤。
   真正可靠的反丢失保护是【与云端逐字段对比】，而非客户端无云端基线的绝对猜测：
     · 服务端 applyProgressGuards：本地各字段 < 云端 → 保留云端（权威）。
     · 客户端 _cloudReadyRef：云端没加载完不许推（防 mount race）。
   故此处不再做绝对启发式拦截，恒放行；data-loss 交给上述两道权威防线。
   返回 { blocked, reason }。 ─── */
export var detectSyncGate = function (fullData) {
  if (!fullData || typeof fullData !== "object") return { blocked: false, reason: null };
  return { blocked: false, reason: null };
};

/* ─── 服务端 sync 决策（纯函数，不碰 IO）。把 /api/sync handler 的"读取结果 → 决定响应"
   逻辑抽出来，让 HTTP 层行为可单测（Codex 多次指出集成层缺自动化测试）。
   handler 负责真正的 DB 读/写，本函数只做决策。
   入参 opts:
     - current:       supabase 读到的行 { version, progress_data } | null
     - readErr:       supabase 读取错误 | null（PGRST116 = 无记录，属正常）
     - incoming:      客户端 payload（progress_data）
     - clientVersion: 客户端持有的版本号 | null
     - intent:        'user_edit_wordInput' 等 | undefined
   返回（互斥）:
     - { action:'read_error', status:500 }                    ← fail closed
     - { action:'conflict',   status:409, serverVersion, serverData }
     - { action:'write',      newVersion, safe, rejected }    ← handler 据此 upsert + 200 ─── */
export var planSyncOutcome = function (opts) {
  opts = opts || {};
  var current = opts.current || null;
  var readErr = opts.readErr || null;

  // fail closed (Codex P1)：读云失败（非 no-row）绝不当 cloud=null
  if (readErr && readErr.code !== "PGRST116") {
    return { action: "read_error", status: 500 };
  }

  var serverVersion = current ? (current.version || 0) : 0;
  var cloudData = current ? current.progress_data : null;
  var cv = typeof opts.clientVersion === "number" ? opts.clientVersion : null;

  // 版本冲突 → 409，客户端 mergeProgress 后重推
  if (cv !== null && cv < serverVersion) {
    return { action: "conflict", status: 409, serverVersion: serverVersion, serverData: cloudData };
  }

  // 字段守卫 + 写入计划
  var guard = applyProgressGuards(opts.incoming, cloudData, opts.intent);
  return {
    action: "write",
    serverVersion: serverVersion, // 供 handler 审计日志 (cloudVersion)
    newVersion: serverVersion + 1,
    safe: guard.safe,
    rejected: guard.rejected,
  };
};

export default mergeProgress;

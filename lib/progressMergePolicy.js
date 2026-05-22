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

/* ─── 单词条 SRS recency：max(srsUpdatedAt, 最新 reviewHistory.date) > nextReviewDate > fallback ───
   只用 srsUpdatedAt 与 reviewHistory（真实复习事件时间），绝不看通用 updatedAt。
   - Codex P1：meaning/phonetic 懒加载会刷新通用 updatedAt，若用它做 recency，
     "只补释义的旧 SRS 数据" 会错误赢过另一设备刚完成的复习。
   - Codex P2：用 max(srsUpdatedAt, history) 而非硬优先 srsUpdatedAt —— 否则
     "旧 srsUpdatedAt + 更新的 reviewHistory" 时 history 会被忽略。 ─── */
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
  var byNext = toTime(e.nextReviewDate);
  if (byNext) return byNext;
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

  // profile / wordInput：较长的赢 (append-only 假设)；长度接近用 newer
  var lProfile = local.profile || "";
  var sProfile = server.profile || "";
  merged.profile = Math.abs(lProfile.length - sProfile.length) < 20
    ? (localNewer ? lProfile : sProfile)
    : (lProfile.length > sProfile.length ? lProfile : sProfile);

  var lInput = local.wordInput || "";
  var sInput = server.wordInput || "";
  merged.wordInput = Math.abs(lInput.length - sInput.length) < 50
    ? (localNewer ? lInput : sInput)
    : (lInput.length > sInput.length ? lInput : sInput);

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
  merged.updatedAt = localNewer ? local.updatedAt : server.updatedAt;

  return merged;
};

/* ─── 反丢失校验：merged 不该比 server 少关键字段 ─── */
export var validateProgressMerge = function (merged, server) {
  if (!merged || !server) return true;
  if (Object.keys(merged.wordStatusMap || {}).length < Object.keys(server.wordStatusMap || {}).length) return false;
  if (Object.keys(merged.reviewWordData || {}).length < Object.keys(server.reviewWordData || {}).length) return false;
  if ((merged.stats && merged.stats.xp || 0) < (server.stats && server.stats.xp || 0)) return false;
  return true;
};

/* ─── 服务端字段守卫 (从 pages/api/sync.js applyFieldGuards 抽取，逻辑保持一致) ───
   除用户主动操作 wordInput (intent='user_edit_wordInput'/'user_upload'/'user_clear') 外，
   关键字段 push 时比云端少 → 保留云端 + 记入 rejected。
   返回 { safe, rejected }。 ─── */
var objKeyCount = function (o) { return o && typeof o === "object" ? Object.keys(o).length : 0; };
var arrLen = function (a) { return Array.isArray(a) ? a.length : 0; };
var num = function (v) { var n = Number(v); return Number.isFinite(n) ? n : 0; };

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

  var ip = incoming.pet || {};
  var cp = cloud.pet || {};
  if (cp && (cp.totalFed || cp.unlocked || cp.species)) {
    var petBad = false;
    if (num(ip.totalFed) < num(cp.totalFed)) petBad = true;
    if (arrLen(ip.unlocked) < arrLen(cp.unlocked)) petBad = true;
    if (petBad) {
      safe.pet = cloud.pet;
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
  if (iWi.length < cWi.length) {
    var allowedIntents = ["user_edit_wordInput", "user_upload", "user_clear"];
    if (!intent || allowedIntents.indexOf(intent) === -1) {
      safe.wordInput = cWi;
      rejected.push("wordInput");
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

export default mergeProgress;

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
  merged.inProgress = unionByTopic(local.inProgress, server.inProgress, localNewer);
  merged.transcripts = unionByTopic(local.transcripts, server.transcripts, localNewer);
  var lhs = local.stats || {};
  var shs = server.stats || {};
  if (local.stats || server.stats) {
    merged.stats = {
      totalXp: Math.max(Number(lhs.totalXp) || 0, Number(shs.totalXp) || 0),
      topicsCompleted: Math.max(Number(lhs.topicsCompleted) || 0, Number(shs.topicsCompleted) || 0),
    };
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

  // profile / wordInput：较长的赢 (append-only 假设)；长度接近用 newer
  var lProfile = local.profile || "";
  var sProfile = server.profile || "";
  merged.profile = Math.abs(lProfile.length - sProfile.length) < 20
    ? (localNewer ? lProfile : sProfile)
    : (lProfile.length > sProfile.length ? lProfile : sProfile);

  var lInput = local.wordInput || "";
  var sInput = server.wordInput || "";
  var pickedInput = Math.abs(lInput.length - sInput.length) < 50
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
  // 反丢失：History 进度（completedTopics）+ bridge 队列不该比 server 少 (修复白名单遗漏后的安全网)
  var mCt = (merged.historyData && merged.historyData.completedTopics) || {};
  var sCt = (server.historyData && server.historyData.completedTopics) || {};
  if (Object.keys(mCt).length < Object.keys(sCt).length) return false;
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
  // 按 distinct 词数比较（非字符长度）：纯去重（distinct 不变、仅少了重复条目）天然放行，
  // 只有 distinct 真减少（删词）才需用户 intent。这样客户端可在 save/sync 时自动去重，无需 hack intent。
  if (countDistinctWordsForGuard(iWi) < countDistinctWordsForGuard(cWi)) {
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

/* ─── 客户端推送前的"反数据丢失"闸门判定（纯函数）。从 _doSync 抽出，可单测。
   触发即说明本地快照"看起来危险"（可能是 race/mount bug 让本地比云端少）。
   第二批：触发后不再静默 return（活锁 → version 冻结），而是 pull-merge-repush。
   返回 { blocked, reason }。 ─── */
export var detectSyncGate = function (fullData) {
  if (!fullData || typeof fullData !== "object") return { blocked: false, reason: null };
  // 保护1：reviewWordData 比 wordStatusMap 少太多（wsm>20 才判，避免新用户误伤）
  var wsmCount = objKeyCount(fullData.wordStatusMap);
  var rwdCount = objKeyCount(fullData.reviewWordData);
  if (wsmCount > 20 && rwdCount < wsmCount * 0.3) {
    return { blocked: true, reason: "reviewWordData_too_small" };
  }
  // 保护2：pet 看似 default/缺失，但 stats 显示已学 50+ 词（mount race 兜底）
  var pet = fullData.pet;
  var statsTotal = num(fullData.stats && fullData.stats.total);
  var petLooksDefault = !pet || (num(pet.totalFed) === 0 && (!pet.unlocked || pet.unlocked.length === 0));
  if (petLooksDefault && statsTotal > 50) {
    return { blocked: true, reason: "pet_looks_default" };
  }
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

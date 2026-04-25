/* ─── Know U. Learning — 跨设备同步合并策略 ───
   场景：客户端推送时遇到 409（服务端已有更新版本），需要把客户端 local 和服务端
   serverData 智能合并，避免任何一方进度丢失（A 设备学过的词不能被 B 设备的状态覆盖）。

   字段级策略：
   - 累加型 (stats.xp/total/correct, pet.totalFed)：取 max（单调递增不会回退）
   - 字典型 (wordStatusMap, reviewWordData)：merge by key，冲突取较新/较高级
   - 数组型 (reviewHistory, pet.unlocked)：union 去重
   - session：取 idx 较大或 updatedAt 较新的
   - profile/wordInput：取较长的（append-only 假设）
   - settings：updatedAt 较新的整体赢
*/

/* ─── 数组并集去重（按 keyFn） ─── */
var unionByKey = function(a, b, keyFn) {
  var seen = new Set();
  var result = [];
  var arrA = Array.isArray(a) ? a : [];
  var arrB = Array.isArray(b) ? b : [];
  arrA.concat(arrB).forEach(function(item) {
    var k = keyFn(item);
    if (k != null && !seen.has(k)) {
      seen.add(k);
      result.push(item);
    }
  });
  return result;
};

/* ─── 取较新的 ISO timestamp（null/undefined 取另一个） ─── */
var newerISO = function(a, b) {
  if (!a) return b;
  if (!b) return a;
  return new Date(a) >= new Date(b) ? a : b;
};

/* ─── 取较早的 ISO timestamp（用于 firstLearnedAt） ─── */
var earlierISO = function(a, b) {
  if (!a) return b;
  if (!b) return a;
  return new Date(a) <= new Date(b) ? a : b;
};

/* ─── 单个 reviewWordData entry 合并 ─── */
var mergeReviewEntry = function(local, server) {
  if (!local) return server;
  if (!server) return local;
  var lLevel = Number(local.reviewLevel) || 0;
  var sLevel = Number(server.reviewLevel) || 0;
  // reviewLevel 取 max — 高 level 表示更熟练，回退会让用户体验"忘了"
  var winnerLevel = Math.max(lLevel, sLevel);
  // nextReviewDate 取 winner level 对应的（一般是较高 level 那边）
  var winnerNext = lLevel >= sLevel ? local.nextReviewDate : server.nextReviewDate;
  // reviewHistory 数组并集，按 date 去重，按时间升序
  var mergedHist = unionByKey(
    local.reviewHistory || [],
    server.reviewHistory || [],
    function(h) { return h.date; }
  );
  mergedHist.sort(function(a, b) {
    return new Date(a.date || 0) - new Date(b.date || 0);
  });
  return {
    word: local.word || server.word,
    phonetic: local.phonetic || server.phonetic || "",
    meaning: local.meaning || server.meaning || "",
    firstLearnedAt: earlierISO(local.firstLearnedAt, server.firstLearnedAt),
    reviewLevel: winnerLevel,
    nextReviewDate: winnerNext || newerISO(local.nextReviewDate, server.nextReviewDate),
    reviewHistory: mergedHist,
    consecutiveForgot: Math.min(local.consecutiveForgot || 0, server.consecutiveForgot || 0),
    guessCorrect: local.guessCorrect != null ? local.guessCorrect : server.guessCorrect,
  };
};

/* ─── 主入口：合并 local + server 数据 ─── */
export var mergeStates = function(local, server) {
  if (!local) return server;
  if (!server) return local;

  // 整体时间戳，决定 settings/profile 这种"无字段级时戳"字段谁赢
  var lTime = local.updatedAt ? new Date(local.updatedAt).getTime() : 0;
  var sTime = server.updatedAt ? new Date(server.updatedAt).getTime() : 0;
  var localNewer = lTime >= sTime;

  var merged = {};

  // ─── stats: 累加字段取 max ───
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

  // ─── pet: 选 totalFed 较大的整体 + unlocked 数组并集 ───
  if (local.pet || server.pet) {
    var lFed = Number(local.pet?.totalFed) || 0;
    var sFed = Number(server.pet?.totalFed) || 0;
    var basePet;
    if (lFed > sFed) basePet = local.pet;
    else if (sFed > lFed) basePet = server.pet;
    else basePet = localNewer ? local.pet : server.pet;
    basePet = basePet || local.pet || server.pet;
    var lUnlocked = local.pet?.unlocked || [];
    var sUnlocked = server.pet?.unlocked || [];
    var unionUnlocked = Array.from(new Set(lUnlocked.concat(sUnlocked)));
    merged.pet = Object.assign({}, basePet, {
      unlocked: unionUnlocked,
      totalFed: Math.max(lFed, sFed), // 喂食次数单调递增
    });
  }

  // ─── wordStatusMap: dict merge，localNewer 的字段赢 ───
  var lWsm = local.wordStatusMap || {};
  var sWsm = server.wordStatusMap || {};
  if (localNewer) {
    merged.wordStatusMap = Object.assign({}, sWsm, lWsm);
  } else {
    merged.wordStatusMap = Object.assign({}, lWsm, sWsm);
  }

  // ─── reviewWordData: 按词级 merge（reviewLevel max + reviewHistory union）───
  var lRwd = local.reviewWordData || {};
  var sRwd = server.reviewWordData || {};
  var allWords = new Set(Object.keys(lRwd).concat(Object.keys(sRwd)));
  merged.reviewWordData = {};
  allWords.forEach(function(w) {
    merged.reviewWordData[w] = mergeReviewEntry(lRwd[w], sRwd[w]);
  });

  // ─── session: 取 idx 较大的整体 session（防止"学过的进度被回退"）───
  var lSession = local.session;
  var sSession = server.session;
  if (lSession && sSession) {
    var lIdx = Number(lSession.idx) || 0;
    var sIdx = Number(sSession.idx) || 0;
    // wordList 不同时，取 idx 较大的（假设是同一天的同一份清单不同进度）
    // 如果 wordList 完全不同（如不同设备启动了不同 setup），取 updatedAt 较新的
    var sameList = JSON.stringify(lSession.wordList || []) === JSON.stringify(sSession.wordList || []);
    if (sameList) {
      merged.session = lIdx >= sIdx ? lSession : sSession;
    } else {
      merged.session = localNewer ? lSession : sSession;
    }
  } else {
    merged.session = lSession || sSession;
  }

  // ─── profile / wordInput: 较长的赢（append-only 假设）但允许 newer 短的覆盖 ───
  var lProfile = local.profile || "";
  var sProfile = server.profile || "";
  if (Math.abs(lProfile.length - sProfile.length) < 20) {
    // 长度差不多 — 用 newer
    merged.profile = localNewer ? lProfile : sProfile;
  } else {
    merged.profile = lProfile.length > sProfile.length ? lProfile : sProfile;
  }
  var lInput = local.wordInput || "";
  var sInput = server.wordInput || "";
  if (Math.abs(lInput.length - sInput.length) < 50) {
    merged.wordInput = localNewer ? lInput : sInput;
  } else {
    merged.wordInput = lInput.length > sInput.length ? lInput : sInput;
  }

  // ─── settings: 整体 newer 赢 ───
  merged.settings = localNewer
    ? Object.assign({}, server.settings || {}, local.settings || {})
    : Object.assign({}, local.settings || {}, server.settings || {});

  // ─── 其他顶层字段（targetDate, completedWords, schemaVersion, tipDismissed 等）───
  merged.targetDate = newerISO(local.targetDate, server.targetDate) || local.targetDate || server.targetDate;
  merged.completedWords = unionByKey(
    local.completedWords || [],
    server.completedWords || [],
    function(x) { return typeof x === 'string' ? x : (x?.word || JSON.stringify(x)); }
  );
  merged.schemaVersion = Math.max(local.schemaVersion || 0, server.schemaVersion || 0);
  merged.tipDismissed = local.tipDismissed || server.tipDismissed || false;

  // updatedAt：取较新的
  merged.updatedAt = lTime >= sTime ? local.updatedAt : server.updatedAt;

  return merged;
};

/* ─── 反丢失保护：判断 merged 是否合理（防止 merge 后字段反而比 server 少）─── */
export var validateMerged = function(merged, server) {
  if (!merged || !server) return true;
  var mWsm = Object.keys(merged.wordStatusMap || {}).length;
  var sWsm = Object.keys(server.wordStatusMap || {}).length;
  // merged 的 wordStatusMap 不该比 server 少（应该是 ≥）
  if (mWsm < sWsm) return false;
  var mRwd = Object.keys(merged.reviewWordData || {}).length;
  var sRwd = Object.keys(server.reviewWordData || {}).length;
  if (mRwd < sRwd) return false;
  // stats.xp 不该回退
  if ((merged.stats?.xp || 0) < (server.stats?.xp || 0)) return false;
  return true;
};

export default mergeStates;

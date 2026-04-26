/* ─── Know U. Learning — History Module Storage Layer ────────────────
 *
 * 职责:
 *   - 加载用户 profile（来自 vocabspark_v1 主存档）
 *   - 持久化 historyData（completedTopics + userWorldview + xp）
 *   - 提供 profile-derived initial worldview seed
 *
 * Key 结构:
 *   localStorage.vocabspark_v1.historyData = {
 *     completedTopics: { [topicId]: { completedAt, transcript, xpEarned, masteryResults } }
 *     userWorldview: { ... }
 *     stats: { totalXp, topicsCompleted }
 *   }
 *
 * 不引入新 storage key — 复用 vocab/writing 共享的 vocabspark_v1。
 */

import { buildInitialWorldviewSeed } from './history-prompts';
import { inferCurriculum } from './curriculum-data';

var SKEY = "vocabspark_v1";

// ─── 通用 load/save (复用 vocab.js 的模式) ───────────────────────────
export var loadAll = function() {
  if (typeof window === "undefined") return null;
  try {
    var raw = localStorage.getItem(SKEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.warn("[history-storage] loadAll failed:", e.message);
    return null;
  }
};

export var saveAll = function(data) {
  if (typeof window === "undefined") return;
  try {
    var existing = null;
    try { var raw = localStorage.getItem(SKEY); if (raw) existing = JSON.parse(raw); } catch (e) {}
    var merged = Object.assign({}, existing || {}, data, { updatedAt: new Date().toISOString() });
    localStorage.setItem(SKEY, JSON.stringify(merged));
  } catch (e) {
    console.warn("[history-storage] saveAll failed:", e.message);
  }
};

// ─── Profile 加载 ───────────────────────────────────────────────────
export var loadProfile = function() {
  var all = loadAll();
  if (!all) return { profile: "", studyGoal: "", stats: { xp: 0 } };
  return {
    profile: all.profile || "",
    studyGoal: all.studyGoal || "",
    stats: all.stats || { xp: 0, total: 0, correct: 0 },
    pet: all.pet || null,
  };
};

// ─── Profile 解析 — 抽出 userName / userAge / userSchool ─────────────
export var parseProfileFields = function(profileText) {
  var fields = {
    userName: "你",
    userAge: 13,
    userSchool: "你的学校",
    userPriorCity: "中国",
    userInterest: "",
    userParentWord: "爸妈",
  };

  if (!profileText) return fields;

  // 简易关键词提取（vocab.js 已有 profile 文本约定）
  // 名字（"我叫 Willow" / "Willow 是我"）
  var nameMatch = profileText.match(/我叫\s*([A-Za-z一-龥]+)/);
  if (nameMatch) fields.userName = nameMatch[1];

  // 年龄/年级（"7 年级" → 13；"6 年级" → 12 等）
  var gradeMatch = profileText.match(/(\d+)\s*年级/);
  if (gradeMatch) {
    var grade = parseInt(gradeMatch[1]);
    fields.userAge = 5 + grade; // 1 年级 ≈ 6 岁，n 年级 ≈ 5+n
  }
  var ageMatch = profileText.match(/(\d+)\s*岁/);
  if (ageMatch) fields.userAge = parseInt(ageMatch[1]);

  // 学校 — 支持多种写法
  // (a) "Sierra Vista Middle School" / "Sierra Vista 中学"
  // (b) "Irvine 公立 XX 中学" 取 XX 中学部分
  // (c) "在 XX 学校" 取 XX 学校
  var schoolPatterns = [
    /([A-Z][A-Za-z]+(?:\s+[A-Z][A-Za-z]+)*\s*Middle\s*School)/,        // Sierra Vista Middle School
    /([A-Z][A-Za-z]+(?:\s+[A-Z][A-Za-z]+)+)\s*中学/,                   // Sierra Vista 中学
    /([A-Z][A-Za-z]+)\s*中学/,                                          // Sierra 中学
    /([一-鿿]{2,5}(?:中学|初中|公立学校))/,                       // 中文校名
  ];
  for (var p = 0; p < schoolPatterns.length; p++) {
    var m = profileText.match(schoolPatterns[p]);
    if (m) { fields.userSchool = m[1] + (m[0].includes("中学") && !m[1].includes("中学") ? " 中学" : ""); break; }
  }

  // 城市（O4：从 profile 文本里抓城市，不要默认 Irvine）
  var cityPatterns = [
    /(?:在|住在|现在在|位于)\s*([A-Z][a-zA-Z]{2,15}(?:\s+[A-Z][a-zA-Z]+)*)\s*(?:的|，|。|，|\s)/,
    /([A-Z][a-zA-Z]{2,15}(?:\s+[A-Z][a-zA-Z]+)*)\s*(?:公立|私立|Middle\s*School|的初中|的中学)/,
  ];
  for (var ci = 0; ci < cityPatterns.length; ci++) {
    var cityM = profileText.match(cityPatterns[ci]);
    if (cityM && cityM[1]) {
      fields.userCity = cityM[1].trim();
      break;
    }
  }
  // 中文城市名兜底
  var cnCityMatch = profileText.match(/(?:在|住在|现在在)\s*(尔湾|库比蒂诺|帕罗奥图|弗里蒙特|圣马力诺|波士顿|纽约|西雅图|贝尔维尤|亚凯迪亚|钻石吧)/);
  if (cnCityMatch) fields.userCity = cnCityMatch[1];

  // 父母称呼
  if (profileText.match(/妈妈|妈/)) fields.userParentWord = "妈妈";
  else if (profileText.match(/爸爸|爸/)) fields.userParentWord = "爸爸";

  return fields;
};

// ─── 占位符注入 — 把 {{userName}} 等替换成 profile 值 ────────────────
export var injectPlaceholders = function(text, fields) {
  if (!text) return "";
  var f = fields || {};
  return text
    .replace(/\{\{userName\|"?([^"}|]*)"?\}\}/g, function(m, fb) { return f.userName || fb || "你"; })
    .replace(/\{\{userName\}\}/g, f.userName || "你")
    .replace(/\{\{userAge\|"?([^"}|]*)"?\}\}/g, function(m, fb) { return f.userAge || fb || "13"; })
    .replace(/\{\{userAge\}\}/g, String(f.userAge || "13"))
    .replace(/\{\{userSchool\|"?([^"}|]*)"?\}\}/g, function(m, fb) { return f.userSchool || fb || "你的学校"; })
    .replace(/\{\{userSchool\}\}/g, f.userSchool || "你的学校")
    .replace(/\{\{userPriorCity\|"?([^"}|]*)"?\}\}/g, function(m, fb) { return f.userPriorCity || fb || "中国"; })
    .replace(/\{\{userPriorCity\}\}/g, f.userPriorCity || "中国")
    .replace(/\{\{userInterest\|"?([^"}|]*)"?\}\}/g, function(m, fb) { return f.userInterest || fb || ""; })
    .replace(/\{\{userInterest\}\}/g, f.userInterest || "")
    .replace(/\{\{userParentWord\|"?([^"}|]*)"?\}\}/g, function(m, fb) { return f.userParentWord || fb || "爸妈"; })
    .replace(/\{\{userParentWord\}\}/g, f.userParentWord || "爸妈");
};

// ─── userWorldview 持久化 ────────────────────────────────────────────
export var loadWorldview = function() {
  var all = loadAll();
  if (!all || !all.historyData || !all.historyData.userWorldview) {
    return null;
  }
  return all.historyData.userWorldview;
};

export var saveWorldview = function(worldview) {
  var all = loadAll() || {};
  var historyData = all.historyData || {};
  historyData.userWorldview = worldview;
  saveAll({ historyData: historyData });
};

export var getOrSeedWorldview = function(profile) {
  var existing = loadWorldview();
  if (existing) return existing;
  // 第一次启动 — profile-derived seed
  var seed = buildInitialWorldviewSeed(profile);
  saveWorldview(seed);
  return seed;
};

export var addSelfDisclosure = function(topicId, turnN, content) {
  var wv = loadWorldview() || buildInitialWorldviewSeed("");
  wv.selfDisclosure = wv.selfDisclosure || [];
  wv.selfDisclosure.push({
    topic: topicId,
    turn: turnN,
    content: content,
    at: new Date().toISOString()
  });
  // 保持最近 30 条，避免无限增长
  if (wv.selfDisclosure.length > 30) wv.selfDisclosure = wv.selfDisclosure.slice(-30);
  saveWorldview(wv);
};

// ─── Topic 完成持久化 ───────────────────────────────────────────────
export var saveTopicCompletion = function(topicId, payload) {
  var all = loadAll() || {};
  var historyData = all.historyData || {};
  historyData.completedTopics = historyData.completedTopics || {};
  historyData.completedTopics[topicId] = Object.assign(
    { completedAt: new Date().toISOString() },
    historyData.completedTopics[topicId] || {},
    payload
  );

  // 累加 XP 到全局 stats（跟 vocab/writing 共享）
  var stats = all.stats || { xp: 0, total: 0, correct: 0, streak: 0, bestStreak: 0 };
  if (payload.xpEarned) {
    stats.xp = (stats.xp || 0) + payload.xpEarned;
  }

  saveAll({ historyData: historyData, stats: stats });
};

export var loadTopicProgress = function(topicId) {
  var all = loadAll();
  if (!all || !all.historyData || !all.historyData.completedTopics) return null;
  return all.historyData.completedTopics[topicId] || null;
};

// ─── In-progress session (O6: 分段学习) ─────────────────────────────
// 用户做到一半离开，下次进 history 能问"继续上次?"
export var saveInProgress = function(topicId, payload) {
  var all = loadAll() || {};
  var historyData = all.historyData || {};
  historyData.inProgress = historyData.inProgress || {};
  historyData.inProgress[topicId] = Object.assign({}, payload, {
    savedAt: new Date().toISOString()
  });
  saveAll({ historyData: historyData });
};

export var loadInProgress = function(topicId) {
  var all = loadAll();
  if (!all || !all.historyData || !all.historyData.inProgress) return null;
  var session = all.historyData.inProgress[topicId];
  if (!session) return null;
  // 7 天前的丢弃
  if (session.savedAt) {
    var ageDays = (Date.now() - new Date(session.savedAt).getTime()) / (24 * 3600 * 1000);
    if (ageDays > 7) return null;
  }
  return session;
};

export var clearInProgress = function(topicId) {
  var all = loadAll() || {};
  var historyData = all.historyData || {};
  if (historyData.inProgress) delete historyData.inProgress[topicId];
  saveAll({ historyData: historyData });
};

// ─── 转录持久化（用于 worldview snapshot 生成）────────────────────────
export var saveTranscript = function(topicId, transcript) {
  var all = loadAll() || {};
  var historyData = all.historyData || {};
  historyData.transcripts = historyData.transcripts || {};
  historyData.transcripts[topicId] = transcript;
  saveAll({ historyData: historyData });
};

// ─── XP helpers ─────────────────────────────────────────────────────
export var addXp = function(amount) {
  var all = loadAll() || {};
  var stats = all.stats || { xp: 0, total: 0, correct: 0 };
  stats.xp = (stats.xp || 0) + amount;
  saveAll({ stats: stats });
  return stats.xp;
};

export var getXp = function() {
  var all = loadAll();
  return (all && all.stats && all.stats.xp) || 0;
};

// ─── History profile（专门给 history 模块用的结构化 profile）────────────
// 跟 vocab profile (`profile` 字段) 共存 — vocab 是自由文本，history 是字段化
// 优先用 historyProfile，没有时回退到 parseProfileFields(vocab.profile)
export var loadHistoryProfile = function() {
  var all = loadAll();
  if (!all || !all.historyData) return null;
  return all.historyData.profile || null;
};

export var saveHistoryProfile = function(profile) {
  var all = loadAll() || {};
  var historyData = all.historyData || {};
  historyData.profile = profile;
  // 同时也写到 curriculum 字段
  if (profile.city || profile.schoolType || profile.grade) {
    historyData.curriculum = inferCurriculum({
      city: profile.city,
      schoolType: profile.schoolType,
      grade: profile.grade,
    });
  }
  saveAll({ historyData: historyData });
};

export var loadCurriculum = function() {
  var all = loadAll();
  return (all && all.historyData && all.historyData.curriculum) || null;
};

// ─── Walkthrough 已看（U4） ────────────────────────────────────────
export var hasSeenWalkthrough = function() {
  var all = loadAll();
  return !!(all && all.historyData && all.historyData.walkthroughSeen);
};
export var markWalkthroughSeen = function() {
  var all = loadAll() || {};
  var historyData = all.historyData || {};
  historyData.walkthroughSeen = new Date().toISOString();
  saveAll({ historyData: historyData });
};

// ─── Sidekick log 持久化 (U8) ──────────────────────────────────────
// 关掉浮窗再打开还能看到之前的追问历史
export var saveSidekickLog = function(topicId, log) {
  var all = loadAll() || {};
  var historyData = all.historyData || {};
  historyData.sidekickLogs = historyData.sidekickLogs || {};
  // 只保留最近 30 条
  historyData.sidekickLogs[topicId] = (log || []).slice(-30);
  saveAll({ historyData: historyData });
};

export var loadSidekickLog = function(topicId) {
  var all = loadAll();
  if (!all || !all.historyData || !all.historyData.sidekickLogs) return [];
  return all.historyData.sidekickLogs[topicId] || [];
};

// ─── 英文比例偏好（N3: low / balanced / high） ─────────────────────
export var loadEnglishLevel = function() {
  var all = loadAll();
  return (all && all.historyData && all.historyData.englishLevel) || "balanced";
};

export var saveEnglishLevel = function(level) {
  // level: "low" / "balanced" / "high"
  var all = loadAll() || {};
  var historyData = all.historyData || {};
  historyData.englishLevel = level;
  saveAll({ historyData: historyData });
};

// ─── Review Pool — 错的词和概念存进来供后续 vocab 模块复习 ────────────
// 跟 vocab 模块的 wordInput/reviewWordData 体系打通（Plan B α 阶段升级）
// MVP 阶段：先存到 historyData.reviewPool，后续 vocab 模块可以读
export var saveReviewPool = function(topicId, payload) {
  var all = loadAll() || {};
  var historyData = all.historyData || {};
  historyData.reviewPool = historyData.reviewPool || { words: [], concepts: [] };
  if (payload.words && payload.words.length > 0) {
    payload.words.forEach(function(w) {
      // 避免重复加入同一个词
      var exists = historyData.reviewPool.words.find(function(ex) { return ex.word === w.word; });
      if (!exists) {
        historyData.reviewPool.words.push(Object.assign({ source: topicId, addedAt: new Date().toISOString() }, w));
      }
    });
  }
  if (payload.concepts && payload.concepts.length > 0) {
    payload.concepts.forEach(function(c) {
      var exists = historyData.reviewPool.concepts.find(function(ex) { return ex.conceptId === c.conceptId; });
      if (!exists) {
        historyData.reviewPool.concepts.push(Object.assign({ source: topicId, addedAt: new Date().toISOString() }, c));
      }
    });
  }
  saveAll({ historyData: historyData });
};

export var loadReviewPool = function() {
  var all = loadAll();
  return (all && all.historyData && all.historyData.reviewPool) || { words: [], concepts: [] };
};

// ─── 跨模块桥接：history → vocab（独立队列，绝不直接污染用户主词单）──
//
// **设计原则（重要）**：
// 用户的 Vocab 主词单 (`localStorage.vocabspark_v1.wordInput`) + SRS 进度 (`reviewWordData`)
// 是用户**自己导入 / 自己背了 N 天**的资产。绝不能因为 history 通关就被污染。
//
// 改用独立队列 `vocabspark_v1.bridgeQueue.history[topicId]`：
// - history 通关时：写入此队列
// - 用户在 vocab 模块**主动看到提示**："📚 来自 history 的词 (4)"
// - 用户可选：「加入主词单」/ 「跳过」/ 「稍后再说」
// - **只有用户点"加入"才合并到 wordInput**，加入后从队列移除
//
// 数据形态：
// {
//   "magna-carta-1215": {
//     pushedAt: "2026-04-26T12:00:00Z",
//     words: [
//       { word: "tyranny", source: { module: "history", topicId: "magna-carta-1215" },
//         contextSentence: "The barons accused King John of tyranny.",
//         priority: "must-memorize" | "review-error" }
//     ]
//   }
// }
export var bridgeReviewToVocab = function(words, opts) {
  if (!words || words.length === 0) return { pushed: 0 };
  opts = opts || {};
  var topicId = opts.topicId || "unknown";
  var priority = opts.priority || "must-memorize";

  var all = loadAll() || {};
  var bridgeQueue = (all.bridgeQueue && typeof all.bridgeQueue === "object") ? all.bridgeQueue : {};
  var historyQueue = (bridgeQueue.history && typeof bridgeQueue.history === "object") ? bridgeQueue.history : {};

  // 已存在主词单的词不重复推（避免用户已经在背的词又出现在推荐里）
  var existingMain = new Set(
    (all.wordInput || "").split(/\n/).map(function(w) { return w.trim().toLowerCase(); }).filter(Boolean)
  );

  // 已在该 topic 队列里的词也不重复
  var existingTopicQueue = new Set();
  if (historyQueue[topicId] && Array.isArray(historyQueue[topicId].words)) {
    historyQueue[topicId].words.forEach(function(w) {
      existingTopicQueue.add((w.word || "").toLowerCase());
    });
  }

  var newWords = [];
  words.forEach(function(w) {
    var word = (w.word || w.en || "").trim();
    if (!word) return;
    var lc = word.toLowerCase();
    if (existingMain.has(lc) || existingTopicQueue.has(lc)) return;
    newWords.push({
      word: word,
      source: { module: "history", topicId: topicId },
      contextSentence: w.example || w.sentence || w.contextSentence || null,
      cnGloss: w.cn || w.cnGloss || null,
      ipa: w.ipa || null,
      priority: priority,
    });
  });
  if (newWords.length === 0) return { pushed: 0 };

  // 合并到 historyQueue[topicId]
  var existingWords = (historyQueue[topicId] && historyQueue[topicId].words) || [];
  historyQueue[topicId] = {
    pushedAt: new Date().toISOString(),
    words: existingWords.concat(newWords),
  };
  bridgeQueue.history = historyQueue;
  saveAll({ bridgeQueue: bridgeQueue });

  return { pushed: newWords.length, queueKey: topicId };
};

// 用户在 vocab 模块决定接受/跳过 history 推荐时调用
// accept: 把指定 words 合并到 wordInput（按 vocab 现有逻辑启 SRS）+ 从队列移除
// dismiss: 仅从队列移除，不加入
export var resolveHistoryBridge = function(topicId, action, selectedWords) {
  var all = loadAll() || {};
  var bridgeQueue = all.bridgeQueue || {};
  var historyQueue = bridgeQueue.history || {};
  if (!historyQueue[topicId]) return { resolved: 0 };

  var queue = historyQueue[topicId];
  var wordsInQueue = queue.words || [];

  // 没指定就处理整个 topic 队列
  var targetSet = selectedWords && selectedWords.length
    ? new Set(selectedWords.map(function(w) { return (w || "").toLowerCase(); }))
    : null;

  var toAccept = [];
  var remaining = [];
  wordsInQueue.forEach(function(w) {
    if (targetSet === null || targetSet.has(w.word.toLowerCase())) {
      toAccept.push(w);
    } else {
      remaining.push(w);
    }
  });

  if (action === "accept" && toAccept.length > 0) {
    // 合并到 wordInput
    var existingWordInput = all.wordInput || "";
    var existingMain = new Set(
      existingWordInput.split(/\n/).map(function(w) { return w.trim().toLowerCase(); }).filter(Boolean)
    );
    var newWordsToAdd = toAccept
      .map(function(w) { return w.word; })
      .filter(function(w) { return w && !existingMain.has(w.toLowerCase()); });
    if (newWordsToAdd.length > 0) {
      var combined = existingWordInput
        ? (existingWordInput.replace(/\s+$/, "") + "\n" + newWordsToAdd.join("\n"))
        : newWordsToAdd.join("\n");
      saveAll({ wordInput: combined });
    }
  }

  // 从队列移除（accept 和 dismiss 都移除）
  if (remaining.length === 0) {
    delete historyQueue[topicId];
  } else {
    historyQueue[topicId] = { pushedAt: queue.pushedAt, words: remaining };
  }
  bridgeQueue.history = historyQueue;
  saveAll({ bridgeQueue: bridgeQueue });

  return { resolved: toAccept.length, action: action };
};

// 列出所有待处理的 history bridge 队列（用于 vocab 模块顶部显示通知）
export var listPendingHistoryBridges = function() {
  var all = loadAll() || {};
  var historyQueue = (all.bridgeQueue && all.bridgeQueue.history) || {};
  var result = [];
  Object.keys(historyQueue).forEach(function(topicId) {
    var q = historyQueue[topicId];
    if (q && q.words && q.words.length > 0) {
      result.push({
        topicId: topicId,
        words: q.words,
        pushedAt: q.pushedAt,
      });
    }
  });
  return result;
};

// ─── 把 history profile 转成 ProfileFields（用于占位符注入） ──────────
export var historyProfileToFields = function(profile) {
  if (!profile) return null;
  return {
    userName: profile.name || "你",
    userAge: profile.age || (profile.grade ? 5 + parseInt(profile.grade) : 13),
    userSchool: profile.schoolName || (profile.city ? profile.city + " 公立学校" : "你的学校"),
    userPriorCity: profile.fromCity || "中国",
    userInterest: profile.interest || "",
    userParentWord: profile.parentWord || "爸妈",
  };
};

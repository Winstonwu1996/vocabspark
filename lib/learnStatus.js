/* ─── Know U. Learning — 学习状态判定（纯函数，便于回归测试） ───────────────
 *
 * 把"学习流程该给词打什么状态"和"新词池怎么挑"抽成纯函数，
 * 这样全用户学习流的核心语义可单测（Codex 第三方审计要求）。
 *
 * 状态语义约定：
 *   unlearned  从没学过 / 未记录
 *   learning   学习中（新词学完，含猜错/跳过猜词 —— 新词第一次本就不该会，不是"错误"）
 *   mastered   已掌握（新词猜对，或复习记得）
 *   uncertain  模糊（复习时 fuzzy）
 *   error      复习时忘记（remembered/fuzzy/forgot 里的 forgot）—— 真·需要重点攻克
 *   skipped    快筛跳过
 *
 * ★ 关键：error 只来自"复习时忘记"。新词第一次猜错绝不标 error，
 *   否则会被当未学反复重学（数据流失/重复学习根因，chompcloud 实测）。
 * ──────────────────────────────────────────────────────────────────────── */

// 复习结果 → 状态。三处复习出口（quick / deep）共用，避免漂移。
export var REVIEW_RESULT_STATUS = { remembered: "mastered", fuzzy: "uncertain", forgot: "error" };

// 学习页（新词 teach 阶段）Active Recall 自测 → 状态。
// ★ 绝不含 error：error 只来自复习 forgot。新词阶段"想不起"(hard) 跟"模糊"(fuzzy) 一样
//   进 uncertain（重点巩固 / 聚焦复习）—— 不被回收成新词重学、可经复习恢复 mastered。
//   easy→mastered 在调用处仍带"不降级"守卫（只从 unlearned/learning 升级）。
export var ACTIVE_RECALL_STATUS = { easy: "mastered", fuzzy: "uncertain", hard: "uncertain" };

/**
 * 新词完成学习时该写入 wordStatusMap 的状态。
 * 返回 null 表示"不更新"（保护已有 mastered/learning/uncertain/error 不被新词流程降级）。
 * @param {string|undefined} currentStatus 该词当前状态
 * @param {boolean|null} guessCorrect 猜词结果：true 猜对 / false 猜错 / null 跳过猜词
 */
export var decideNewWordStatus = function (currentStatus, guessCorrect) {
  var shouldUpdate = !currentStatus || currentStatus === "unlearned" || currentStatus === "skipped";
  if (!shouldUpdate) return null;
  if (guessCorrect === true) return "mastered";
  // 猜错或跳过：标"学习中"进入间隔复习，不再标 error。
  return "learning";
};

/**
 * 新词学习池：只挑"从没学过"的词（unlearned / 未记录）。
 * error（复习忘记）、mastered、learning、uncertain、skipped 一律排除 ——
 * 它们各有归宿（复习 / 深度复习），不该被当新词重教。
 * @param {string[]} words
 * @param {Object} wordStatusMap
 */
export var selectUnlearnedWords = function (words, wordStatusMap) {
  wordStatusMap = wordStatusMap || {};
  return (words || []).filter(function (w) {
    var s = wordStatusMap[w];
    return !s || s === "unlearned";
  });
};

/**
 * 恢复学习 session 时清洗：剔除"已学会"的词（mastered/learning/uncertain/error/skipped），
 * 只保留 unlearned/未记录，重置 idx=0、learned=[]。
 * 目的：陈旧 / 被多设备覆盖的 session 不再让用户重复学已掌握的词。
 *   - session 无效 / 空 wordList → 原样返回（调用方据此跳过 resume）。
 *   - 没有任何词需要剔除（健康全新 batch）→ 原样返回，不打扰 idx/learned。
 *   - 全部已学完 → 返回 null（无需 resume）。
 *   - 否则 → 返回 { wordList: 剩余未学, idx: 0, learned: [] }。
 * @param {{wordList:string[], idx:number, learned:string[]}} session
 * @param {Object} wordStatusMap
 */
export var sanitizeResumeSession = function (session, wordStatusMap) {
  if (!session || !Array.isArray(session.wordList) || session.wordList.length === 0) return session;
  var remaining = selectUnlearnedWords(session.wordList, wordStatusMap || {});
  if (remaining.length === 0) return null;
  if (remaining.length === session.wordList.length) return session; // 健康：无已学词混入，不动
  return { wordList: remaining, idx: 0, learned: [] };
};

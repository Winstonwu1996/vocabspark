/* ─── 每日新词目标：什么时候「知道」，什么时候「先别定死」──────────────────
 *
 * 梧桐实测反馈：「每次登录都自动变成只学 10 个词，但我设置的是 30」。
 *
 * 根因不是数据坏了（云端设置一直是 30、前几天都真学满 30），而是加载时序：
 *   · dailyNewWords 的 React 初始值写死 10；
 *   · 真实设置要么从本机 localStorage 读（快），要么等云端拉回来（一次网络往返）；
 *   · 而【登出会清掉本机记录】(handleLogout 删 SKEY，为共用电脑时不泄漏进度)。
 *   → 重新登录后本机无设置可读，只能等云端；这段空窗里全站按默认 10 显示，
 *     她若在窗口内点「开始学习」，这一轮就被锁成 10 个词。
 *
 * 修法两层：
 *   ① readSavedDailyNewWords：首屏【同步】读本机已存设置，消除「本机有数据却还闪 10」的窗口
 *      （userTier 已用同一模式，见 pages/vocab.js 的 useState 惰性初始化）
 *   ② isDailyTargetKnown：本机读不到且已登录时，明确表示「还不知道」——
 *      调用方据此等云端到位再定词数，而不是拿默认 10 把这一轮锁死。
 *
 * 单独成模块：pages/vocab.js 只有 default export，内联函数测不到。
 * （此前审查用变异测试证明过「手抄副本的测试是假保护」，故让生产与测试共用实现。）
 */

// 仅用于「真的没有任何依据」时的兜底展示；不再用它去锁定学习轮次。
export var DEFAULT_DAILY_NEW_WORDS = 10;

/**
 * 从已保存的进度 JSON 字符串里同步取出「每日新词数」。
 * 取不到返回 null —— 语义是「还不知道」，绝不静默降级成 10。
 *
 * @param {string|null} rawJson localStorage 里 SKEY 的原文
 * @returns {number|null}
 */
export function readSavedDailyNewWords(rawJson) {
  if (!rawJson) return null;
  try {
    var d = JSON.parse(rawJson);
    var n = d && d.settings ? d.settings.dailyNewWords : null;
    return isUsableTarget(n) ? Number(n) : null;
  } catch (e) {
    return null;
  }
}

/** 合法的每日目标：正整数。0 / 负数 / NaN / 非数字都算「无效」。 */
export function isUsableTarget(n) {
  var v = Number(n);
  return Number.isFinite(v) && v > 0;
}

/**
 * 当前是否已经「知道」用户的每日目标。
 *
 * 未登录：本机就是唯一真源，读到什么算什么（读不到 = 新用户，用默认值即可）。
 * 已登录：本机没有时必须等云端 —— 否则就会拿默认 10 把这一轮锁死（梧桐的 bug）。
 *
 * @param {{saved:number|null, cloudApplied:boolean, loggedIn:boolean}} s
 * @returns {boolean}
 */
export function isDailyTargetKnown(s) {
  var o = s || {};
  if (isUsableTarget(o.saved)) return true;   // 本机已有设置
  if (!o.loggedIn) return true;               // 游客：本机即真源
  return !!o.cloudApplied;                    // 已登录：等云端到位
}

/**
 * 计算本轮实际要学多少个新词。
 * 目标未知时返回 null —— 调用方应当等待，而不是退回默认值。
 *
 * @param {{target:number|null, known:boolean, available:number, cap:number}} s
 *   cap = 档位硬上限（免费档 10 / 付费 Infinity），available = 还剩多少没学的词
 * @returns {number|null}
 */
export function planNewWordCount(s) {
  var o = s || {};
  if (!o.known) return null;
  if (!isUsableTarget(o.target)) return null;
  var cap = Number.isFinite(o.cap) ? o.cap : Infinity;
  var avail = Number.isFinite(o.available) ? o.available : 0;
  return Math.max(0, Math.min(Number(o.target), cap, avail));
}

export default readSavedDailyNewWords;

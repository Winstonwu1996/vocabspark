/* ─── Know U. Learning — 学习时间追踪（基于活跃行为） ─── */

var TIMER_KEY = 'knowu_learning_time';
var ACTIVITY_KEY = 'knowu_last_active';
var IDLE_THRESHOLD = 60000; // 60 秒无操作视为离开
var TUTOR_RATE_USD = 100; // 国内/加州 1v1 私教行情
var CNY_RATE = 7;

export var loadLearningTime = function() {
  try {
    var raw = localStorage.getItem(TIMER_KEY);
    if (!raw) return { totalMinutes: 0, todayMinutes: 0, todayDate: null };
    var d = JSON.parse(raw);
    var today = new Date().toDateString();
    if (d.todayDate !== today) { d.todayMinutes = 0; d.todayDate = today; }
    return d;
  } catch(e) { return { totalMinutes: 0, todayMinutes: 0, todayDate: null }; }
};

export var saveLearningTime = function(data) {
  try {
    data.todayDate = new Date().toDateString();
    localStorage.setItem(TIMER_KEY, JSON.stringify(data));
  } catch(e) {}
};

/* 记录用户活跃（被 click/keydown/scroll/touch 触发） */
export var markActive = function() {
  try { localStorage.setItem(ACTIVITY_KEY, String(Date.now())); } catch(e) {}
};

/* 检查用户是否在过去 60 秒内有操作 */
export var isUserActive = function() {
  try {
    var last = parseInt(localStorage.getItem(ACTIVITY_KEY) || '0');
    return (Date.now() - last) < IDLE_THRESHOLD;
  } catch(e) { return false; }
};

/* 仅在用户确实活跃时才累加 1 分钟 */
export var tickIfActive = function() {
  if (!isUserActive()) return null; // 不活跃，不计时
  if (document.hidden) return null; // 页面不可见，不计时
  var d = loadLearningTime();
  d.totalMinutes = (d.totalMinutes || 0) + 1;
  d.todayMinutes = (d.todayMinutes || 0) + 1;
  saveLearningTime(d);
  return d;
};

/* 安装活跃检测监听器（返回清理函数） */
export var installActivityListeners = function() {
  var handler = function() { markActive(); };
  var events = ['click', 'keydown', 'scroll', 'touchstart', 'mousemove'];
  events.forEach(function(e) { window.addEventListener(e, handler, { passive: true }); });
  // 首次标记活跃
  markActive();
  return function() {
    events.forEach(function(e) { window.removeEventListener(e, handler); });
  };
};

export var calcSavings = function(totalMinutes) {
  var hours = totalMinutes / 60;
  var usd = Math.round(hours * TUTOR_RATE_USD);
  var cny = Math.round(usd * CNY_RATE);
  return { hours: Math.round(hours * 10) / 10, usd: usd, cny: cny };
};

export var formatTime = function(minutes) {
  if (minutes < 60) return minutes + " \u5206\u949f";
  var h = Math.floor(minutes / 60);
  var m = minutes % 60;
  return h + " \u5c0f\u65f6" + (m > 0 ? " " + m + " \u5206\u949f" : "");
};

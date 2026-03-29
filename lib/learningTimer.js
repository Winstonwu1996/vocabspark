/* ─── Know U. Learning — 学习时间追踪 ─── */

var TIMER_KEY = 'knowu_learning_time';
var TUTOR_RATE_USD = 50; // 优质私教 $50/小时
var CNY_RATE = 7.3;

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

export var addMinute = function() {
  var d = loadLearningTime();
  d.totalMinutes = (d.totalMinutes || 0) + 1;
  d.todayMinutes = (d.todayMinutes || 0) + 1;
  saveLearningTime(d);
  return d;
};

export var calcSavings = function(totalMinutes) {
  var hours = totalMinutes / 60;
  var usd = Math.round(hours * TUTOR_RATE_USD);
  var cny = Math.round(usd * CNY_RATE);
  return { hours: Math.round(hours * 10) / 10, usd: usd, cny: cny };
};

export var formatTime = function(minutes) {
  if (minutes < 60) return minutes + " 分钟";
  var h = Math.floor(minutes / 60);
  var m = minutes % 60;
  return h + " 小时" + (m > 0 ? " " + m + " 分钟" : "");
};

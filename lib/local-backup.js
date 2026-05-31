/* ─── lib/local-backup.js — 客户端进度兜底备份 ──────────────────────────
   高风险 sync 重构期的安全网 (创始人要求: 保证核心用户进度可备份恢复)。
   在 sync 引擎初始化「之前」快照共享 blob (vocabspark_v1), 万一新同步污染了它,
   这里有可恢复的历史状态。两层:
     1. snapshotPreMigrationOnce() — 只写一次、永不覆盖、永不滚掉的「改动前」状态。
        新代码第一次跑、sync 动手之前调一次 → 永久保留的已知良好恢复点。
     2. snapshotBackup() — 每次启动 (sync 前) 滚动快照, 保留最近 KEEP 份不同状态。
   纯 localStorage, 无网络 / 无 PII 外传 / 失败静默 (兜底绝不影响主流程)。 */

var SKEY = 'vocabspark_v1';
var BAK_PREFIX = 'vocabspark_v1__bak__';
var PREMIGRATION_KEY = 'vocabspark_v1__premigration_bak';
var KEEP = 3;

function _ls() {
  if (typeof window === 'undefined' || !window.localStorage) return null;
  return window.localStorage;
}

export function listBackups() {
  var out = [];
  var LS = _ls();
  if (!LS) return out;
  try {
    for (var i = 0; i < LS.length; i++) {
      var k = LS.key(i);
      if (k && k.indexOf(BAK_PREFIX) === 0) out.push({ key: k, ts: k.slice(BAK_PREFIX.length) });
    }
    // ISO 时间戳 (冒号/点换成 -) 字典序即时间序
    out.sort(function (a, b) { return a.ts < b.ts ? -1 : (a.ts > b.ts ? 1 : 0); });
  } catch (e) {}
  return out;
}

// 永久「改动前」快照: 只在不存在时写一次, 之后永不覆盖/滚掉 → 始终能回到上线前的良好状态。
export function snapshotPreMigrationOnce() {
  var LS = _ls();
  if (!LS) return;
  try {
    if (LS.getItem(PREMIGRATION_KEY) != null) return;
    var cur = LS.getItem(SKEY);
    if (cur != null) LS.setItem(PREMIGRATION_KEY, cur);
  } catch (e) {}
}

// 滚动快照: 与最近一份相同则跳过; 否则存一份并修剪到最近 KEEP 份。
export function snapshotBackup() {
  var LS = _ls();
  if (!LS) return;
  try {
    var cur = LS.getItem(SKEY);
    if (cur == null) return; // 无数据不备份
    var baks = listBackups();
    if (baks.length) {
      var lastVal = null;
      try { lastVal = LS.getItem(baks[baks.length - 1].key); } catch (e) {}
      if (lastVal === cur) return; // 与最近备份相同 → 不重复存
    }
    var stamp = new Date().toISOString().replace(/[:.]/g, '-');
    LS.setItem(BAK_PREFIX + stamp, cur);
    baks = listBackups();
    while (baks.length > KEEP) {
      try { LS.removeItem(baks.shift().key); } catch (e) {}
    }
  } catch (e) {
    // 配额超限 / 隐私模式等 → 静默, 备份失败绝不阻塞主流程
  }
}

// 启动时一次性调用: 先存永久「改动前」点, 再滚动快照。
export function backupOnBoot() {
  snapshotPreMigrationOnce();
  snapshotBackup();
}

// 恢复: 把指定备份 (或永久 premigration) 写回主 blob。返回是否成功。
export function restoreBackup(key) {
  var LS = _ls();
  if (!LS) return false;
  try {
    var srcKey = key || PREMIGRATION_KEY;
    var v = LS.getItem(srcKey);
    if (v == null) return false;
    LS.setItem(SKEY, v);
    return true;
  } catch (e) { return false; }
}

// 测试/诊断用
export var _keys = { SKEY: SKEY, BAK_PREFIX: BAK_PREFIX, PREMIGRATION_KEY: PREMIGRATION_KEY, KEEP: KEEP };

/* 单测: lib/local-backup.js — 滚动备份 + 永久 premigration + 恢复。
   跑: node scripts/test-local-backup.mjs */

// ── 极简 localStorage mock (顺序可控 → 测 listBackups 排序) ──
function makeLS() {
  var store = {};
  return {
    get length() { return Object.keys(store).length; },
    key: function (i) { return Object.keys(store)[i]; },
    getItem: function (k) { return Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null; },
    setItem: function (k, v) { store[k] = String(v); },
    removeItem: function (k) { delete store[k]; },
    _dump: function () { return store; },
  };
}

global.window = { localStorage: null };
// 动态 import 后再注入 localStorage (模块用 window.localStorage)
var mod = await import('../lib/local-backup.js');
var pass = 0, fail = 0;
function ok(name, cond) { if (cond) { pass++; console.log('  ✓ ' + name); } else { fail++; console.log('  ✗ FAIL: ' + name); } }

// helper: 用不同时间戳跑 snapshotBackup (mock Date 不可行 → 改 blob 内容确保去重逻辑, 时间戳靠真实 now 但加 sleep 太慢
// → 直接验证行为: 相同内容不重复存; 不同内容新增; 超 KEEP 修剪)
function freshLS() { var ls = makeLS(); global.window.localStorage = ls; return ls; }

console.log('\n[1] snapshotPreMigrationOnce: 只写一次, 永不覆盖');
{
  var ls = freshLS();
  ls.setItem('vocabspark_v1', '{"v":1}');
  mod.snapshotPreMigrationOnce();
  ok('premigration 备份已建', ls.getItem('vocabspark_v1__premigration_bak') === '{"v":1}');
  // blob 变了, 再调 → 不覆盖 premigration
  ls.setItem('vocabspark_v1', '{"v":2}');
  mod.snapshotPreMigrationOnce();
  ok('premigration 永不覆盖 (仍是 v1)', ls.getItem('vocabspark_v1__premigration_bak') === '{"v":1}');
}

console.log('\n[2] snapshotBackup: 去重 + 新增');
{
  var ls = freshLS();
  ls.setItem('vocabspark_v1', '{"a":1}');
  mod.snapshotBackup();
  ok('首次快照建 1 份', mod.listBackups().length === 1);
  mod.snapshotBackup(); // 内容没变
  ok('内容相同 → 不重复 (仍 1 份)', mod.listBackups().length === 1);
}

console.log('\n[3] snapshotBackup: 超 KEEP(2) 先修剪最旧再写');
{
  var ls = freshLS();
  // 塞 3 个旧备份, 再快照新内容 → 先修剪到 KEEP-1=1 再写 → 共 2 份
  ls.setItem('vocabspark_v1__bak__2026-01-01T00-00-00-000Z', '{"old":1}');
  ls.setItem('vocabspark_v1__bak__2026-01-02T00-00-00-000Z', '{"old":2}');
  ls.setItem('vocabspark_v1__bak__2026-01-03T00-00-00-000Z', '{"old":3}');
  ls.setItem('vocabspark_v1', '{"new":1}');
  mod.snapshotBackup();
  var baks = mod.listBackups();
  ok('修剪到 KEEP=2 份', baks.length === 2);
  ok('删的是最旧 (2026-01-01/02 不在了)', baks.every(function (b) { return b.ts.indexOf('2026-01-01') !== 0 && b.ts.indexOf('2026-01-02') !== 0; }));
  ok('最新内容在', ls.getItem(baks[baks.length - 1].key) === '{"new":1}');
}

console.log('\n[3b] 大 blob 超 MAX_BACKUP_CHARS → 跳过备份 (Codex P2)');
{
  var ls = freshLS();
  var big = '{"x":"' + 'a'.repeat(600000) + '"}'; // > 500K 字符
  ls.setItem('vocabspark_v1', big);
  mod.snapshotPreMigrationOnce();
  mod.snapshotBackup();
  ok('大 blob 不写 premigration', ls.getItem('vocabspark_v1__premigration_bak') == null);
  ok('大 blob 不写滚动备份', mod.listBackups().length === 0);
}

console.log('\n[4] restoreBackup: 写回主 blob');
{
  var ls = freshLS();
  ls.setItem('vocabspark_v1', '{"good":1}');
  mod.snapshotPreMigrationOnce(); // 存 good
  ls.setItem('vocabspark_v1', '{"corrupted":1}'); // 模拟污染
  var okRestore = mod.restoreBackup(); // 无参 → 恢复 premigration
  ok('restore 返回 true', okRestore === true);
  ok('主 blob 恢复成 good', ls.getItem('vocabspark_v1') === '{"good":1}');
  ok('恢复不存在的 key → false', mod.restoreBackup('vocabspark_v1__bak__nope') === false);
}

console.log('\n[5] 边界: 无 blob / 无 window 不报错');
{
  var ls = freshLS();
  mod.snapshotBackup(); // 无 vocabspark_v1
  ok('无主 blob → 不建备份, 不抛', mod.listBackups().length === 0);
  global.window.localStorage = null;
  var threw = false;
  try { mod.snapshotBackup(); mod.backupOnBoot(); mod.restoreBackup(); } catch (e) { threw = true; }
  ok('localStorage 不可用 → 静默不抛', threw === false);
}

console.log('\n[6] clearBackups: 登出/重置清掉所有备份键 (Codex P1 隐私)');
{
  var ls = freshLS();
  ls.setItem('vocabspark_v1', '{"d":1}');
  mod.snapshotPreMigrationOnce();
  mod.snapshotBackup();
  ok('清前有 premigration + 滚动备份', ls.getItem('vocabspark_v1__premigration_bak') != null && mod.listBackups().length >= 1);
  mod.clearBackups();
  ok('清后 premigration 没了', ls.getItem('vocabspark_v1__premigration_bak') == null);
  ok('清后滚动备份没了', mod.listBackups().length === 0);
  // 主 blob 不受影响 (clearBackups 只清备份键)
  ok('主 blob 不受影响', ls.getItem('vocabspark_v1') === '{"d":1}');
}

console.log('\n──────────────────────────');
console.log('PASS ' + pass + ' / FAIL ' + fail);
if (fail > 0) process.exit(1);

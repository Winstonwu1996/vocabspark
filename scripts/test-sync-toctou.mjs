/* /api/sync 的 TOCTOU 写入语义测试（handler 的 DB IO 层）
   运行：node scripts/test-sync-toctou.mjs

   回归的 bug：handler 先 select version=V，再无条件 upsert version=V+1。
   读与写之间没有原子性 —— 两个并发请求（手机 + iPad，或 flushSync 撞定时同步）
   都读到 V、都通过 clientVersion 检查、都写 V+1：后落库的整体覆盖先落库的，
   而先写方收到 ok:true 且版本号一致，永远不会触发 409 合并 → 静默丢进度。

   修复：改成版本条件写 update ... where user_id=? and version=:serverVersion。
   抢输的一方影响 0 行 → 转 409，复用客户端既有 mergeStates 重推路径。

   ⚠️ 本测试 import 生产代码 lib/syncWrite.js 的 performVersionedWrite —— 不是手抄副本。
   早期版本抄了一份 handler 逻辑，结果把生产守卫整段删掉测试仍全绿（变异测试实证），
   那是假保护。现在改坏生产逻辑，这里必挂。
*/

import { performVersionedWrite, isDuplicateKeyError } from "../lib/syncWrite.js";

// ── 内存表：模拟 Postgres 行 + 条件更新语义 ──
function makeDb(initialRow) {
  return {
    row: initialRow ? { ...initialRow } : null,
    // 记录实际发生的写入，供断言
    writes: [],
  };
}

// ── db 适配器：把内存表包成 lib/syncWrite.js 约定的接口 ──
function makeMemAdapter(db) {
  return {
    async updateIfVersion({ userId, data, newVersion, expectedVersion }) {
      if (!db.row) return { rows: 0, error: null };
      if (db.row.user_id !== userId) return { rows: 0, error: null };
      if (db.row.version !== expectedVersion) return { rows: 0, error: null };   // 抢输
      db.row = { ...db.row, progress_data: data, version: newVersion };
      db.writes.push({ kind: "update", version: newVersion, data });
      return { rows: 1, error: null };
    },
    async insertFirst({ userId, data, newVersion }) {
      if (db.row) return { error: { code: "23505", message: "duplicate key value violates unique constraint" } };
      db.row = { user_id: userId, progress_data: data, version: newVersion };
      db.writes.push({ kind: "insert", version: newVersion, data });
      return { error: null };
    },
    async refetch(userId) {
      if (!db.row || db.row.user_id !== userId) {
        return { data: null, error: { code: "PGRST116", message: "no rows" } };
      }
      return { data: { ...db.row }, error: null };
    },
  };
}

// 调用生产函数（而非副本）
async function performWrite(sbOrDb, args) {
  return performVersionedWrite(sbOrDb, args);
}

let pass = 0, fail = 0;
const ok = (name, cond) => { if (cond) { pass++; console.log("  ✅ " + name); } else { fail++; console.log("  ❌ " + name); } };
const eq = (name, got, want) => {
  const same = JSON.stringify(got) === JSON.stringify(want);
  if (!same) console.log(`     got=${JSON.stringify(got)} want=${JSON.stringify(want)}`);
  ok(name, same);
};

const UID = "u1";

console.log("\n── 正常路径：无并发 ──");
{
  const db = makeDb({ user_id: UID, version: 5, progress_data: { xp: 100 } });
  const sb = makeMemAdapter(db);
  const r = await performWrite(sb, {
    userId: UID,
    current: { version: 5, progress_data: { xp: 100 } },
    plan: { serverVersion: 5, newVersion: 6, safe: { xp: 150 } },
  });
  eq("版本匹配 → 200 写入成功", { s: r.status, v: r.version }, { s: 200, v: 6 });
  eq("数据已落库", db.row.progress_data, { xp: 150 });
  eq("版本已递增", db.row.version, 6);
}

console.log("\n── TOCTOU 核心回归：读到写之间被抢改 ──");
{
  // 手机和 iPad 都读到 version=5
  const db = makeDb({ user_id: UID, version: 5, progress_data: { xp: 100 } });
  const sb = makeMemAdapter(db);

  // iPad 先落库：version 变成 6
  const ipad = await performWrite(sb, {
    userId: UID,
    current: { version: 5, progress_data: { xp: 100 } },
    plan: { serverVersion: 5, newVersion: 6, safe: { xp: 200, ipadWords: 3 } },
  });
  eq("iPad(先到) → 200", ipad.status, 200);

  // 手机拿着陈旧的 serverVersion=5 来写 —— 旧代码会无条件覆盖 iPad 的数据
  const phone = await performWrite(sb, {
    userId: UID,
    current: { version: 5, progress_data: { xp: 100 } }, // 手机读到的是旧快照
    plan: { serverVersion: 5, newVersion: 6, safe: { xp: 150, phoneWords: 2 } },
  });

  eq("手机(抢输) → 409 而不是静默覆盖", phone.status, 409);
  ok("409 带上最新 serverVersion 供客户端合并", phone.serverVersion === 6);
  eq("409 带上最新 serverData 供客户端合并", phone.serverData, { xp: 200, ipadWords: 3 });
  eq("iPad 的数据没有被覆盖（不丢进度）", db.row.progress_data, { xp: 200, ipadWords: 3 });
  eq("只发生了一次写入", db.writes.length, 1);
}

console.log("\n── 新用户首行：并发插入 ──");
{
  const db = makeDb(null); // 表里还没有这个用户
  const sb = makeMemAdapter(db);

  const first = await performWrite(sb, {
    userId: UID, current: null,
    plan: { serverVersion: 0, newVersion: 1, safe: { xp: 10 } },
  });
  eq("首次插入 → 200", { s: first.status, v: first.version }, { s: 200, v: 1 });

  // 另一设备同时也认为自己是首次
  const second = await performWrite(sb, {
    userId: UID, current: null,
    plan: { serverVersion: 0, newVersion: 1, safe: { xp: 99 } },
  });
  eq("并发首次插入(抢输) → 409 而不是 500", second.status, 409);
  eq("409 带上已存在的数据", second.serverData, { xp: 10 });
  eq("先写入的数据未被覆盖", db.row.progress_data, { xp: 10 });
}

console.log("\n── 连续正常写入（版本链不断）──");
{
  const db = makeDb({ user_id: UID, version: 1, progress_data: { n: 1 } });
  const sb = makeMemAdapter(db);
  let v = 1;
  for (let i = 2; i <= 5; i++) {
    const r = await performWrite(sb, {
      userId: UID,
      current: { version: v, progress_data: { n: v } },
      plan: { serverVersion: v, newVersion: i, safe: { n: i } },
    });
    if (r.status !== 200) { ok(`第 ${i} 次写入应成功`, false); break; }
    v = i;
  }
  eq("连续 4 次写入后版本为 5", db.row.version, 5);
  eq("最终数据正确", db.row.progress_data, { n: 5 });
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);

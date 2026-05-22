/* sync API 决策层集成测试：lib/progressMergePolicy.js 的 planSyncOutcome
   运行：node scripts/test-sync-api.mjs
   覆盖 SYNC_STABILIZATION_v1.md 回归清单的 "sync API" 部分（HTTP 层决策，
   纯函数单测 test-progress-merge-policy.mjs 未覆盖）。

   planSyncOutcome 是 /api/sync handler 抽出的纯决策函数：
   读取结果 → { read_error 500 | conflict 409 | write }。 */

import { planSyncOutcome } from "../lib/progressMergePolicy.js";

var pass = 0, fail = 0;
function ok(name, cond) {
  if (cond) { pass++; console.log("  ✅ " + name); }
  else { fail++; console.log("  ❌ " + name); }
}
function eq(name, a, b) {
  var same = JSON.stringify(a) === JSON.stringify(b);
  if (!same) console.log("     got=" + JSON.stringify(a) + " want=" + JSON.stringify(b));
  ok(name, same);
}

console.log("\n── fail-closed 读 (Codex P1) ──");
var rRead = planSyncOutcome({ current: null, readErr: { code: "08006", message: "conn lost" }, incoming: { wordInput: "a" }, clientVersion: 0 });
eq("读云失败 (非 PGRST116) → read_error 500", { a: rRead.action, s: rRead.status }, { a: "read_error", s: 500 });
var rNoRow = planSyncOutcome({ current: null, readErr: { code: "PGRST116", message: "no rows" }, incoming: { wordInput: "a" }, clientVersion: null });
eq("PGRST116 无记录 (首次用户) → write newVersion 1", { a: rNoRow.action, v: rNoRow.newVersion }, { a: "write", v: 1 });

console.log("\n── 版本冲突 409 ──");
var rConf = planSyncOutcome({ current: { version: 10, progress_data: { wordInput: "cloud" } }, readErr: null, incoming: { wordInput: "local" }, clientVersion: 5 });
eq("clientVersion < serverVersion → conflict 409", { a: rConf.action, s: rConf.status, sv: rConf.serverVersion }, { a: "conflict", s: 409, sv: 10 });
eq("conflict 带 serverData (云端权威)", rConf.serverData, { wordInput: "cloud" });
var rMatch = planSyncOutcome({ current: { version: 10, progress_data: {} }, readErr: null, incoming: { wordInput: "x" }, clientVersion: 10 });
eq("clientVersion == serverVersion → write newVersion 11", { a: rMatch.action, v: rMatch.newVersion }, { a: "write", v: 11 });
var rAhead = planSyncOutcome({ current: { version: 10, progress_data: {} }, readErr: null, incoming: { wordInput: "x" }, clientVersion: 15 });
eq("clientVersion > serverVersion → write (不冲突)", { a: rAhead.action, v: rAhead.newVersion }, { a: "write", v: 11 });
var rNullCv = planSyncOutcome({ current: { version: 3, progress_data: {} }, readErr: null, incoming: { wordInput: "x" }, clientVersion: null });
eq("clientVersion null (旧客户端) → write, 不冲突", { a: rNullCv.action, v: rNullCv.newVersion }, { a: "write", v: 4 });

console.log("\n── 字段守卫 (与 applyProgressGuards 同源) ──");
var rGuard = planSyncOutcome({
  current: { version: 5, progress_data: { reviewWordData: { a: {}, b: {} }, wordStatusMap: { a: 1, b: 1 } } },
  readErr: null,
  incoming: { reviewWordData: { a: {} }, wordStatusMap: { a: 1 } },
  clientVersion: 5,
});
ok("reviewWordData 变少 → write 但 rejected 含 reviewWordData", rGuard.action === "write" && rGuard.rejected.indexOf("reviewWordData") >= 0);
ok("被拒字段保留云端 (safe.reviewWordData 有 2 词)", Object.keys(rGuard.safe.reviewWordData).length === 2);
ok("wordStatusMap 变少也被拒", rGuard.rejected.indexOf("wordStatusMap") >= 0);

var rWiNoIntent = planSyncOutcome({
  current: { version: 5, progress_data: { wordInput: "a\nb\nc\nd" } },
  readErr: null, incoming: { wordInput: "a\nb" }, clientVersion: 5,
});
ok("wordInput 变小 + 无 intent → 被拒 + 保留云端", rWiNoIntent.rejected.indexOf("wordInput") >= 0 && rWiNoIntent.safe.wordInput === "a\nb\nc\nd");
var rWiIntent = planSyncOutcome({
  current: { version: 5, progress_data: { wordInput: "a\nb\nc\nd" } },
  readErr: null, incoming: { wordInput: "a\nb" }, clientVersion: 5, intent: "user_edit_wordInput",
});
ok("wordInput 变小 + 合法 intent → 放行 (去重/删词)", rWiIntent.rejected.indexOf("wordInput") < 0 && rWiIntent.safe.wordInput === "a\nb");

console.log("\n── 正常写入无拒绝 ──");
var rClean = planSyncOutcome({
  current: { version: 7, progress_data: { reviewWordData: { a: {} } } },
  readErr: null,
  incoming: { reviewWordData: { a: {}, b: {} } }, // 增加, 不触发守卫
  clientVersion: 7,
});
ok("字段增加 → write, rejected 空", rClean.action === "write" && rClean.rejected.length === 0);
eq("newVersion = serverVersion + 1", rClean.newVersion, 8);

console.log("\n──────────────────────────────");
console.log("通过 " + pass + " / " + (pass + fail));
if (fail > 0) { console.log("❌ 有失败用例"); process.exit(1); }
console.log("✅ 全部通过");

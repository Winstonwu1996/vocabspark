// pickSupabaseUserId 回归测试 — 修 X-User-Id 漏发导致重度用户被 100/h IP 限流的根因
// 运行：node scripts/test-get-auth-userid.mjs
import { pickSupabaseUserId } from '../lib/getAuthUserId.js';

var pass = 0, fail = 0;
var eq = function (name, got, want) {
  var ok = got === want;
  if (ok) { pass++; console.log("  ✅ " + name); }
  else { fail++; console.log("  ❌ " + name + " — got " + JSON.stringify(got) + " want " + JSON.stringify(want)); }
};

var UID = "d3906a86-3167-4219-be9b-93365afff7c7";

console.log("\n── 新格式（@supabase/auth-js v2，user 拆到独立 -user key）──");
eq("user 在 -auth-token-user → 返回 user.id",
  pickSupabaseUserId([
    ["sb-pzadkflzktvppwkezwxu-auth-token", JSON.stringify({ access_token: "jwt", refresh_token: "rt", expires_at: 1 })],
    ["sb-pzadkflzktvppwkezwxu-auth-token-user", JSON.stringify({ user: { id: UID, email: "x@y.z" } })],
  ]),
  UID);

// ★ 线上 chompcloud bug 复现：旧逻辑只看主 key 拿不到 user → null → 漏发 X-User-Id
eq("回归：主 key 不含 user（v2 现行）→ 仍能从 -user key 拿到 id",
  pickSupabaseUserId([
    ["sb-pzadkflzktvppwkezwxu-auth-token", JSON.stringify({ access_token: "jwt", refresh_token: "rt" })], // 无 user
    ["sb-pzadkflzktvppwkezwxu-auth-token-user", JSON.stringify({ user: { id: UID } })],
  ]),
  UID);

console.log("\n── 老格式（user 嵌在主 -auth-token 值里）──");
eq("嵌入式 user 在主 key → 返回 user.id",
  pickSupabaseUserId([
    ["sb-pzadkflzktvppwkezwxu-auth-token", JSON.stringify({ access_token: "jwt", user: { id: UID } })],
  ]),
  UID);

console.log("\n── 优先级 + 干扰项 ──");
eq("新+老格式同时存在 → 优先采用 -user key（新格式）",
  pickSupabaseUserId([
    ["sb-x-auth-token", JSON.stringify({ user: { id: "OLD_ID" } })],
    ["sb-y-auth-token-user", JSON.stringify({ user: { id: "NEW_ID" } })],
  ]),
  "NEW_ID");
eq("无关 sb- key 不被误读", pickSupabaseUserId([
  ["sb-something-else", JSON.stringify({ user: { id: "X" } })],
  ["sb-z-auth-token-code-verifier", JSON.stringify({ user: { id: "Y" } })],
]), null);

console.log("\n── 边界 / 容错 ──");
eq("空数组 → null", pickSupabaseUserId([]), null);
eq("非数组输入 → null", pickSupabaseUserId(null), null);
eq("非数组输入（对象）→ null", pickSupabaseUserId({}), null);
eq("entry 不是 [k,v] 对 → 安全跳过", pickSupabaseUserId([null, "x", ["only-one"]]), null);
eq("value 非 JSON → 跳过该 entry 不抛", pickSupabaseUserId([
  ["sb-ref-auth-token-user", "not-json!@#"],
  ["sb-ref-auth-token", JSON.stringify({ user: { id: UID } })],
]), UID);
eq("user.id 非 string → 不采用",
  pickSupabaseUserId([["sb-x-auth-token-user", JSON.stringify({ user: { id: 12345 } })]]),
  null);
eq("user.id 空 string → 不采用",
  pickSupabaseUserId([["sb-x-auth-token-user", JSON.stringify({ user: { id: "" } })]]),
  null);
eq("缺 user 字段 → null",
  pickSupabaseUserId([["sb-x-auth-token-user", JSON.stringify({ session: {} })]]),
  null);
eq("空 localStorage value → 不抛",
  pickSupabaseUserId([["sb-x-auth-token", ""]]),
  null);

console.log("\n──────────────────────────────");
console.log("通过 " + pass + " / " + (pass + fail));
if (fail > 0) { console.log("❌ 有用例失败"); process.exit(1); }
console.log("✅ 全部通过");

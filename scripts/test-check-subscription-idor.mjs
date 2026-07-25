/* check-subscription 的 IDOR 防护语义测试
   运行：node scripts/test-check-subscription-idor.mjs

   ⚠️ 本测试 import 生产代码 lib/subscriptionAuth.js 的 decideSubscriptionAccess ——
   不是手抄副本。早期版本抄了一份 handler 的鉴权分支，结果把生产守卫整段删掉，
   npm test 依然 19 passed 全绿（变异测试实证）。那是假保护。

   回归的漏洞：该端点零鉴权 + service_role key(绕 RLS)，
   任何人 GET ?userId=<别人的 uuid> 即可读到他人的订阅档位/账期/到期日。

   铁律（chompcloud「付费用户被锁在付费墙后」事故的教训）：
   「查不了」≠「没订阅」。任何无法核实身份的情况都不能返回权威的 200-free ——
   那与「DB 确认无订阅」字节相同，调用方无法区分，会据以降级：
   lib/membership.js 连续 3 次失败(约 4.5s)即提交 TIER_STATES.ERROR，
   而 lib/history-tiers.js 对 error 态是 fail-closed → 付费用户被挡在已购课程外。
*/

import { decideSubscriptionAccess } from "../lib/subscriptionAuth.js";

let pass = 0, fail = 0;
const eq = (name, got, want) => {
  const same = JSON.stringify(got) === JSON.stringify(want);
  if (same) { pass++; console.log("  ✅ " + name); }
  else { fail++; console.log("  ❌ " + name); console.log(`     got=${JSON.stringify(got)}\n     want=${JSON.stringify(want)}`); }
};
const ok = (name, cond) => eq(name, !!cond, true);

const OWNER = "11111111-1111-1111-1111-111111111111";
const OTHER = "22222222-2222-2222-2222-222222222222";

console.log("\n── 本人查本人：放行（付费用户必须能拿到真实订阅）──");
{
  const g = decideSubscriptionAccess({ verifiedUserId: OWNER, queryUserId: OWNER });
  ok("token 与 userId 匹配 → allow", g.allow === true);
  ok("放行时不带 status/body（交给 handler 查 DB）", g.status === undefined);
}

console.log("\n── IDOR：拿自己的 token 查别人 ──");
{
  const g = decideSubscriptionAccess({ verifiedUserId: OWNER, queryUserId: OTHER });
  ok("不匹配 → 拒绝", g.allow === false);
  eq("标记为 idor", g.reason, "idor");
  eq("返回 503 而不是 200-free（关键：200-free 会被调用方当权威结论降级）", g.status, 503);
  ok("带 transient 标记供调用方保持状态", g.body.transient === true);
  ok("不泄漏任何订阅字段", g.body.tier === undefined && g.body.expiresAt === undefined && g.body.isActive === undefined);
}

console.log("\n── 无法核实身份（无 token / token 失效 / 验证服务不可达）──");
{
  const g = decideSubscriptionAccess({ verifiedUserId: null, queryUserId: OWNER });
  ok("无法核实 → 拒绝", g.allow === false);
  eq("标记为 unverified", g.reason, "unverified");
  eq("503 transient（绝不判 free，否则付费用户被锁）", g.status, 503);
  ok("transient:true", g.body.transient === true);
  ok("不返回 tier（调用方据此保持缓存不降级）", g.body.tier === undefined);
}
{
  const g = decideSubscriptionAccess({ verifiedUserId: undefined, queryUserId: OWNER });
  eq("undefined 同样按无法核实处理", g.status, 503);
}
{
  const g = decideSubscriptionAccess({ verifiedUserId: "", queryUserId: OWNER });
  eq("空串同样按无法核实处理", g.status, 503);
}

console.log("\n── 铁律断言：任何拒绝路径都不能返回 200-free ──");
{
  const cases = [
    { verifiedUserId: null, queryUserId: OWNER, name: "无 token" },
    { verifiedUserId: OWNER, queryUserId: OTHER, name: "越权" },
    { verifiedUserId: "", queryUserId: OWNER, name: "空 token" },
  ];
  let violated = 0;
  for (const c of cases) {
    const g = decideSubscriptionAccess(c);
    // 200 + tier:'free' 是「DB 确认无订阅」的权威语义，拒绝路径绝不能与之混淆
    if (g.status === 200 || (g.body && g.body.tier === "free")) {
      violated++;
      console.log(`     ✗ ${c.name} 返回了 free 语义`);
    }
  }
  eq("三条拒绝路径都不返回 free 语义", violated, 0);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);

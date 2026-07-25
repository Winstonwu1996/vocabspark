/* check-subscription 的 IDOR 防护语义测试
   运行：node scripts/test-check-subscription-idor.mjs

   回归的漏洞：该端点零鉴权 + service_role key(绕 RLS)，
   任何人 GET ?userId=<别人的 uuid> 即可读到他人的订阅档位/账期/到期日。

   修复要点(以及为什么不是简单地返 401)：
   三个调用方(vocab _loadTier / plan checkSub / lib/membership useMembership)
   的错误分支会把「非 200」记为 tier 查询失败，连续失败进 ERROR 态并触发 tierLost
   —— 付费用户在 token 尚未就绪的瞬间会被误判降级(chompcloud 被锁事故同类风险)。
   所以鉴权不通过时返回 200 + 「无订阅」语义：不泄漏他人数据，也不触发降级路径。

   这里测的是 handler 的鉴权分支语义（用 mock 替掉 verifyAuth 与 DB）。
*/

let pass = 0, fail = 0;
const eq = (name, got, want) => {
  const same = JSON.stringify(got) === JSON.stringify(want);
  if (same) { pass++; console.log("  ✅ " + name); }
  else { fail++; console.log("  ❌ " + name); console.log(`     got=${JSON.stringify(got)}\n     want=${JSON.stringify(want)}`); }
};
const ok = (name, cond) => eq(name, !!cond, true);

// ── 复刻 handler 的鉴权分支（与 pages/api/stripe/check-subscription.js 同构）──
// verifyAuthMock: (req) => { userId }  ; dbMock: (userId) => { data, error }
async function handleCheckSubscription(req, verifyAuthMock, dbMock) {
  if (req.method !== "GET") return { status: 405, body: { error: "Method not allowed" } };

  const userId = req.query.userId;
  if (!userId) return { status: 400, body: { error: "Missing userId" } };

  const { userId: verifiedUserId } = await verifyAuthMock(req);
  // ① 无 token：可能是付费用户会话未就绪 → transient，绝不判 free
  if (!verifiedUserId) {
    return { status: 503, body: { error: "tier check unavailable", transient: true } };
  }
  // ② token 不匹配：明确越权 → 200 + 无订阅（不泄漏，也不触发调用方降级）
  if (verifiedUserId !== userId) {
    return { status: 200, body: { tier: "free", isActive: false } };
  }

  const { data, error } = await dbMock(userId);
  if (error) return { status: 503, body: { error: "tier check unavailable", transient: true } };
  if (!data || data.length === 0) return { status: 200, body: { tier: "free", isActive: false } };

  const sub = data[0];
  return {
    status: 200,
    body: {
      tier: sub.tier,
      billingCycle: sub.billing_cycle,
      byoKey: sub.byo_key,
      expiresAt: sub.expires_at,
      isActive: true,
    },
  };
}

const PAID_ROW = [{ tier: "pro", billing_cycle: "yearly", byo_key: false, expires_at: "2027-01-01T00:00:00Z" }];
const dbPaid = async () => ({ data: PAID_ROW, error: null });
const dbNone = async () => ({ data: [], error: null });
const dbDown = async () => ({ data: null, error: { message: "connection lost" } });

const OWNER = "11111111-1111-1111-1111-111111111111";
const OTHER = "22222222-2222-2222-2222-222222222222";

console.log("\n── 本人查本人：必须拿到真实订阅（付费用户不能被误降级）──");
{
  const r = await handleCheckSubscription(
    { method: "GET", query: { userId: OWNER } },
    async () => ({ userId: OWNER }),
    dbPaid
  );
  eq("token 与 userId 匹配 → 200", r.status, 200);
  eq("返回真实档位 pro", r.body.tier, "pro");
  ok("isActive 为 true", r.body.isActive === true);
}

console.log("\n── IDOR：拿自己的 token 查别人 ──");
{
  const r = await handleCheckSubscription(
    { method: "GET", query: { userId: OTHER } },   // 查别人
    async () => ({ userId: OWNER }),               // 但 token 是自己的
    dbPaid                                          // DB 里那人是付费的
  );
  eq("不匹配 → 200（不是 401，避免触发调用方降级）", r.status, 200);
  eq("不泄漏他人档位，返回 free", r.body.tier, "free");
  ok("不泄漏 isActive", r.body.isActive === false);
  ok("不泄漏到期日", r.body.expiresAt === undefined);
  ok("不泄漏账期", r.body.billingCycle === undefined);
}

console.log("\n── 无 token（游客 / 付费用户 token 未就绪）──");
{
  const r = await handleCheckSubscription(
    { method: "GET", query: { userId: OWNER } },
    async () => ({ userId: null }),  // 没 token
    dbPaid                            // 这人其实是付费的
  );
  // 关键：不能判 free —— 付费用户会话未刷新时判 free 会把他锁进付费墙(chompcloud 老坑)
  eq("无 token → 503 transient（不确认状态，不误判 free）", r.status, 503);
  ok("503 标记 transient 供调用方保持缓存", r.body.transient === true);
  ok("不返回 tier，调用方不会降级", r.body.tier === undefined);
}

console.log("\n── 既有行为不能被破坏 ──");
{
  const r = await handleCheckSubscription(
    { method: "GET", query: { userId: OWNER } },
    async () => ({ userId: OWNER }),
    dbNone
  );
  eq("本人 + 确认无订阅 → 200 free", { s: r.status, t: r.body.tier, a: r.body.isActive }, { s: 200, t: "free", a: false });
}
{
  const r = await handleCheckSubscription(
    { method: "GET", query: { userId: OWNER } },
    async () => ({ userId: OWNER }),
    dbDown
  );
  eq("本人 + DB 故障 → 503 transient（绝不当成无订阅）", { s: r.status, t: r.body.transient }, { s: 503, t: true });
  ok("503 时不返回 tier（调用方据此保持缓存不降级）", r.body.tier === undefined);
}
{
  const r = await handleCheckSubscription({ method: "GET", query: {} }, async () => ({ userId: OWNER }), dbPaid);
  eq("缺 userId → 400", r.status, 400);
}
{
  const r = await handleCheckSubscription({ method: "POST", query: { userId: OWNER } }, async () => ({ userId: OWNER }), dbPaid);
  eq("非 GET → 405", r.status, 405);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);

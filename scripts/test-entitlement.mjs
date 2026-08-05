/* history 服务端付费闸的判定语义测试
   运行：node scripts/test-entitlement.mjs

   ⚠️ 本测试 import 生产代码 lib/entitlement-server.js 的 decideTopicAccess /
   resolveEntitlement —— 不是手抄副本。参见 test-check-subscription-idor.mjs 的教训：
   抄一份 handler 分支的测试，在生产守卫被整段删掉后依然全绿，那是假保护。

   守的是什么：
   在此之前 history 付费闸只在客户端，/api/narrative 与 /api/chat(-stream) 零 tier 检查，
   免费用户深链进付费课即可拿到整篇授权课文、或驱动完整付费课堂。

   两条互相拉扯的铁律，本测试同时钉死：
   ①「查不了」≠「没订阅」——付费用户绝不能因 Supabase 抖动被锁在已购课程外
      （chompcloud 事故 / commit 2fdfdc0 的教训）。
   ② 但 fail-open 不能变成「挂机期间谁都能拿付费课文」——所以只对
      **已验明身份** 的调用者放行，验不出来的一律按游客判。
*/

// entitlement-server 在模块加载时就读 env（SUPA_URL / ANON_KEY / SERVICE_KEY），
// 所以必须先把假配置塞进 process.env 再动态 import —— 静态 import 会被提升到前面，
// 拿到空配置直接走「未配置」短路分支，⑤ 组的故障分类就全测不到了。
process.env.NEXT_PUBLIC_SUPABASE_URL = "https://test.supabase.co";
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "anon-test-key";
process.env.SUPABASE_SERVICE_ROLE_KEY = "service-test-key";
// Upstash 也给上：不给的话缓存/宽限相关分支会静默跳过，⑤ 里的「近期验证过」测不到。
process.env.UPSTASH_REDIS_REST_URL = "https://test.upstash.io";
process.env.UPSTASH_REDIS_REST_TOKEN = "upstash-test-token";

const { decideTopicAccess, resolveEntitlement } = await import("../lib/entitlement-server.js");

let pass = 0, fail = 0;
const ok = (name, cond) => {
  if (cond) { pass++; console.log("  ✅ " + name); }
  else { fail++; console.log("  ❌ " + name); }
};
const eq = (name, got, want) => {
  const same = JSON.stringify(got) === JSON.stringify(want);
  if (same) { pass++; console.log("  ✅ " + name); }
  else { fail++; console.log("  ❌ " + name); console.log(`     got=${JSON.stringify(got)} want=${JSON.stringify(want)}`); }
};

// 三档代表课程（取自 lib/history-tiers.js 的真实数据，非虚构 id）
const TRIAL = "magna-carta-1215";      // accessTier=guest —— 未登录也能试
const FREE  = "tang-song-china";       // accessTier=free  —— 需登录的免费档
const PAID  = "enlightenment";         // accessTier=pro   —— 付费课

// ─────────────────────────────────────────────────────────────────
console.log("\n── ① 正常判定（验证成功，档位确定）──");
{
  const guest = { tier: "guest", transient: false, verified: false, userId: null };
  ok("游客进试用课 → 放行", decideTopicAccess(guest, TRIAL).allow === true);
  ok("游客进免费档课 → 拦（free 档需登录）", decideTopicAccess(guest, FREE).allow === false);
  ok("游客进付费课 → 拦", decideTopicAccess(guest, PAID).allow === false);
  eq("拦截理由标注为档位不足", decideTopicAccess(guest, PAID).reason, "tier-insufficient");

  const free = { tier: "free", transient: false, verified: true, userId: "u1" };
  ok("登录免费用户进免费档课 → 放行", decideTopicAccess(free, FREE).allow === true);
  ok("登录免费用户进付费课 → 拦", decideTopicAccess(free, PAID).allow === false);

  const pro = { tier: "pro", transient: false, verified: true, userId: "u2" };
  ok("付费用户进付费课 → 放行", decideTopicAccess(pro, PAID).allow === true);
  ok("付费用户进免费课 → 放行", decideTopicAccess(pro, TRIAL).allow === true);
}

// ─────────────────────────────────────────────────────────────────
console.log("\n── ② 铁律①：验证服务抽风时，已验明身份者绝不被拦 ──");
console.log("   （付费孩子正在上课，Supabase 抖一下不能打断）");
{
  // 身份验过了，只是订阅表查不到 —— tier 会退成 'free'，但 transient=true
  const subDown = { tier: "free", transient: true, verified: true, userId: "u3" };
  ok("查不到档位但身份已验 → 付费课放行", decideTopicAccess(subDown, PAID).allow === true);
  eq("理由标注为已验证放行", decideTopicAccess(subDown, PAID).reason, "transient-verified-fail-open");
  ok("免费课同样放行", decideTopicAccess(subDown, FREE).allow === true);

  // 认证服务挂了，但这个 token 几分钟前刚验过（近期验证宽限）
  const graced = { tier: "free", transient: true, verified: true, userId: "u4", graced: true };
  ok("近期验证过的 token（认证服务挂了）→ 付费课放行，课不中断", decideTopicAccess(graced, PAID).allow === true);
}

// ─────────────────────────────────────────────────────────────────
console.log("\n── ③ 铁律②：抽风不能变成陌生人白嫖付费课 ──");
{
  // 认证服务挂了 + 从没见过这个 token → 身份不明
  const unknown = { tier: "guest", transient: true, verified: false, userId: null };
  ok("身份验不出来 + 抽风 → 付费课必须拦", decideTopicAccess(unknown, PAID).allow === false);
  eq("理由与「档位不足」区分开，便于线上排查", decideTopicAccess(unknown, PAID).reason, "transient-unverified-deny");
  ok("但试用课仍放行（本来就对游客开放，不该被抽风误伤）",
     decideTopicAccess(unknown, TRIAL).allow === true);

  // 防回归：verified=false 时绝不能采信 ent.tier
  const spoofed = { tier: "pro", transient: true, verified: false, userId: null };
  ok("未验明身份时即便 tier 写着 pro 也不采信 → 付费课拦",
     decideTopicAccess(spoofed, PAID).allow === false);
}

// ─────────────────────────────────────────────────────────────────
console.log("\n── ④ 无 topicId（vocab 路径）不受付费闸影响 ──");
{
  const guest = { tier: "guest", transient: false, verified: false, userId: null };
  ok("不传 topicId → 放行（vocab 的内容生成不该被 history 闸拦）",
     decideTopicAccess(guest, null).allow === true);
  eq("理由标注 no-topic", decideTopicAccess(guest, undefined).reason, "no-topic");
}

// ─────────────────────────────────────────────────────────────────
// resolveEntitlement 的 transient 分类：把 fetch 换掉，模拟 Supabase 各种故障。
// 这是「查不了 vs 没订阅」的分界线所在，最值得钉死。
console.log("\n── ⑤ resolveEntitlement：故障分类（stub fetch 模拟 Supabase）──");
{
  const realFetch = globalThis.fetch;
  const stub = (handler) => { globalThis.fetch = handler; };
  const restore = () => { globalThis.fetch = realFetch; };
  const jsonRes = (status, body) => ({
    ok: status >= 200 && status < 300, status,
    json: async () => body, text: async () => JSON.stringify(body),
  });

  // 没带 token → 明确的游客身份，不是抽风
  {
    const ent = await resolveEntitlement("");
    ok("无 token → transient=false（明确游客，不该触发 fail-open）", ent.transient === false);
    ok("无 token → verified=false", ent.verified === false);
  }

  // token 无效（GoTrue 明确判 401）→ 定性拒绝，不是抽风
  {
    stub(async (url) => String(url).includes("/auth/v1/user") ? jsonRes(401, {}) : jsonRes(200, []));
    const ent = await resolveEntitlement("bad-token");
    restore();
    ok("token 无效(401) → transient=false（凭证问题 ≠ 服务问题）", ent.transient === false);
    ok("token 无效 → 付费课被拦", decideTopicAccess(ent, PAID).allow === false);
  }

  // GoTrue 5xx + 没见过的 token → transient 但身份不明 → 拦付费课
  {
    stub(async (url) => {
      const u = String(url);
      if (u.includes("/auth/v1/user")) return jsonRes(503, {});
      return jsonRes(200, { result: null });          // Upstash「没见过这个 token」
    });
    const ent = await resolveEntitlement("never-seen-token");
    restore();
    ok("GoTrue 5xx + 陌生 token → transient=true", ent.transient === true);
    ok("GoTrue 5xx + 陌生 token → verified=false", ent.verified === false);
    ok("→ 付费课必须拦（不给陌生人白嫖）", decideTopicAccess(ent, PAID).allow === false);
    ok("→ 试用课仍放行", decideTopicAccess(ent, TRIAL).allow === true);
  }

  // GoTrue 5xx + 近期验证过的 token → 宽限放行（正在上课的孩子）
  {
    stub(async (url) => {
      const u = String(url);
      if (u.includes("/auth/v1/user")) return jsonRes(503, {});
      if (u.includes("/get/") && u.includes("entseen")) return jsonRes(200, { result: "u-known" });
      return jsonRes(200, { result: null });
    });
    const ent = await resolveEntitlement("recently-verified-token");
    restore();
    ok("GoTrue 5xx + 近期验证过 → verified=true（宽限）", ent.verified === true);
    ok("→ 付费课放行，课不中断", decideTopicAccess(ent, PAID).allow === true);
  }

  // 认证通过、订阅表 5xx → 绝不能当成「无订阅」
  {
    stub(async (url) => {
      const u = String(url);
      if (u.includes("/auth/v1/user")) return jsonRes(200, { id: "u-paid" });
      if (u.includes("/rest/v1/user_subscriptions")) return jsonRes(500, {});
      return jsonRes(200, { result: null });          // 缓存未命中
    });
    const ent = await resolveEntitlement("good-token");
    restore();
    ok("订阅表 5xx → transient=true（查不了 ≠ 没订阅）", ent.transient === true);
    ok("订阅表 5xx → verified=true（身份是验过的）", ent.verified === true);
    ok("→ 付费课放行（这正是 2fdfdc0 事故要防的误锁）",
       decideTopicAccess(ent, PAID).allow === true);
  }

  // 认证通过、订阅表明确返回空 → 真 free，付费课要拦
  {
    stub(async (url) => {
      const u = String(url);
      if (u.includes("/auth/v1/user")) return jsonRes(200, { id: "u-free" });
      if (u.includes("/rest/v1/user_subscriptions")) return jsonRes(200, []);
      return jsonRes(200, { result: null });
    });
    const ent = await resolveEntitlement("good-token-free-user");
    restore();
    ok("订阅表确认无订阅 → transient=false（这是权威结论）", ent.transient === false);
    eq("→ tier=free", ent.tier, "free");
    ok("→ 付费课拦", decideTopicAccess(ent, PAID).allow === false);
    ok("→ 免费档课放行", decideTopicAccess(ent, FREE).allow === true);
  }
}

console.log(`\n${fail === 0 ? "✅" : "❌"} ${pass} passed, ${fail} failed\n`);
process.exit(fail === 0 ? 0 : 1);

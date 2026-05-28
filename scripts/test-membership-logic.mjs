/* 纯逻辑单测: lib/membership-logic.js
   运行: node scripts/test-membership-logic.mjs

   覆盖 Step 1 useUserTier hook 的核心决策逻辑:
   5 状态生命周期 + 错误重试 + tierLost 信号 + cache 写入策略

   不测 React hook 本身 (mount / useEffect / Supabase auth subscription),
   那些留给 Step 4-10 真接 UI 时的 integration smoke. 纯逻辑覆盖足以保证
   决策树正确, hook 内部只是把这些 helper 串起来调用 setState.
*/

import {
  TIER_STATES,
  TIER_CACHE_KEY,
  POLL_INTERVAL_MS,
  MAX_RETRIES,
  RETRY_BASE_MS,
  decideOnResponse,
  decideOnError,
  isDowngrade,
  isUpgrade,
  shouldWriteCache,
  hashUserId,
} from "../lib/membership-logic.js";

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

// ════════════════════════════════════════════════════════════
console.log("\n── TIER_STATES + 常量 ──");
// ════════════════════════════════════════════════════════════
eq("5 状态完整", Object.keys(TIER_STATES).sort(), ["ACTIVE","ERROR","FREE","GUEST","LOADING"]);
ok("TIER_STATES.LOADING == 'loading'", TIER_STATES.LOADING === "loading");
ok("TIER_STATES.ACTIVE == 'active'", TIER_STATES.ACTIVE === "active");
ok("TIER_STATES.FREE == 'free'", TIER_STATES.FREE === "free");
ok("TIER_STATES.GUEST == 'guest'", TIER_STATES.GUEST === "guest");
ok("TIER_STATES.ERROR == 'error'", TIER_STATES.ERROR === "error");
ok("TIER_CACHE_KEY == 'vocabspark_tier' (跟 vocab.js 一致)", TIER_CACHE_KEY === "vocabspark_tier");
ok("MAX_RETRIES = 3 (跟规划一致)", MAX_RETRIES === 3);
ok("RETRY_BASE_MS = 1500 (跟规划一致)", RETRY_BASE_MS === 1500);
ok("POLL_INTERVAL_MS = 30000 (规划 §7)", POLL_INTERVAL_MS === 30000);

// ════════════════════════════════════════════════════════════
console.log("\n── decideOnResponse (active 路径) ──");
// ════════════════════════════════════════════════════════════
var activeRes = decideOnResponse(
  { isActive: true, tier: "pro", expiresAt: "2026-12-31T00:00:00Z", billingCycle: "monthly", byoKey: false },
  0
);
eq("active: action=commit-active", activeRes.action, "commit-active");
eq("active: state=ACTIVE", activeRes.state, "active");
eq("active: tier=pro", activeRes.tier, "pro");
eq("active: expiresAt 透传", activeRes.expiresAt, "2026-12-31T00:00:00Z");
eq("active: billingCycle 透传", activeRes.billingCycle, "monthly");
eq("active: byoKey=false", activeRes.byoKey, false);
eq("active: nextFalseCount 重置=0", activeRes.nextFalseCount, 0);

var activeByo = decideOnResponse({ isActive: true, tier: "basic", byoKey: true }, 0);
eq("byoKey=true 正确透传", activeByo.byoKey, true);

var activeMissing = decideOnResponse({ isActive: true, tier: "pro" }, 0);
eq("expiresAt 缺失 → null", activeMissing.expiresAt, null);
eq("billingCycle 缺失 → null", activeMissing.billingCycle, null);
eq("byoKey 缺失 → false", activeMissing.byoKey, false);

// active 即使在 falseCount > 0 也立刻 commit
var activeAfterFalse = decideOnResponse({ isActive: true, tier: "basic" }, 2);
eq("isActive:true 中途出现立刻 commit (不等 retry 凑齐)", activeAfterFalse.action, "commit-active");
eq("commit-active 重置 falseCount", activeAfterFalse.nextFalseCount, 0);

// ════════════════════════════════════════════════════════════
console.log("\n── decideOnResponse (isActive:false 路径 · 重试 → free) ──");
// ════════════════════════════════════════════════════════════
var false1 = decideOnResponse({ isActive: false }, 0);
eq("第 1 次 false: action=retry", false1.action, "retry");
eq("第 1 次 false: delayMs=1500", false1.delayMs, 1500);
eq("第 1 次 false: nextFalseCount=1", false1.nextFalseCount, 1);

var false2 = decideOnResponse({ isActive: false }, 1);
eq("第 2 次 false: action=retry", false2.action, "retry");
eq("第 2 次 false: delayMs=3000 (指数退避)", false2.delayMs, 3000);
eq("第 2 次 false: nextFalseCount=2", false2.nextFalseCount, 2);

var false3 = decideOnResponse({ isActive: false }, 2);
eq("第 3 次 false: action=commit-free (3 次都 false 确认真 free)", false3.action, "commit-free");
eq("第 3 次 false: state=FREE", false3.state, "free");
eq("第 3 次 false: tier='free'", false3.tier, "free");
eq("第 3 次 false: nextFalseCount 重置", false3.nextFalseCount, 0);

// missing tier 字段或 null 也按 false 处理
var missingActive = decideOnResponse({ tier: "pro" }, 0);
eq("缺 isActive 字段: 按 false 处理", missingActive.action, "retry");
var nullResponse = decideOnResponse(null, 0);
eq("null response: 按 false 处理", nullResponse.action, "retry");
var emptyResponse = decideOnResponse({}, 0);
eq("空 response: 按 false 处理", emptyResponse.action, "retry");

// ════════════════════════════════════════════════════════════
console.log("\n── decideOnError (网络/HTTP 错误 · 重试 → error) ──");
// ════════════════════════════════════════════════════════════
var err1 = decideOnError(0);
eq("第 1 次 error: action=retry", err1.action, "retry");
eq("第 1 次 error: delayMs=1500", err1.delayMs, 1500);
eq("第 1 次 error: nextRetryCount=1", err1.nextRetryCount, 1);

var err2 = decideOnError(1);
eq("第 2 次 error: delayMs=3000", err2.delayMs, 3000);
eq("第 2 次 error: nextRetryCount=2", err2.nextRetryCount, 2);

var err3 = decideOnError(2);
eq("第 3 次 error: action=commit-error", err3.action, "commit-error");
eq("第 3 次 error: nextRetryCount 重置", err3.nextRetryCount, 0);

// 自定义 maxRetries
var customErr = decideOnError(0, 1);
eq("maxRetries=1 第 1 次 error 立刻 commit-error", customErr.action, "commit-error");

// ════════════════════════════════════════════════════════════
console.log("\n── isDowngrade (active → 降级 = tierLost) ──");
// ════════════════════════════════════════════════════════════
ok("active → free 是降级", isDowngrade("active", "free") === true);
ok("active → guest 是降级 (logout)", isDowngrade("active", "guest") === true);
ok("active → error 是降级", isDowngrade("active", "error") === true);
ok("active → active 不算降级", isDowngrade("active", "active") === false);
ok("active → loading 不算降级 (回 loading 不是真降)", isDowngrade("active", "loading") === false);
ok("loading → free 不算降级 (从来没 active 过)", isDowngrade("loading", "free") === false);
ok("free → guest 不算降级 (没有 active 历史)", isDowngrade("free", "guest") === false);
ok("free → error 不算降级", isDowngrade("free", "error") === false);

// ════════════════════════════════════════════════════════════
console.log("\n── isUpgrade (free/guest/error → active = tierRestored) ──");
// ════════════════════════════════════════════════════════════
ok("free → active 是升级", isUpgrade("free", "active") === true);
ok("guest → active 是升级 (登录拿到付费)", isUpgrade("guest", "active") === true);
ok("error → active 是升级 (服务恢复)", isUpgrade("error", "active") === true);
ok("loading → active 不算 (首次进入不算 restore)", isUpgrade("loading", "active") === false);
ok("active → active 不算", isUpgrade("active", "active") === false);
ok("free → free 不算", isUpgrade("free", "free") === false);

// ════════════════════════════════════════════════════════════
console.log("\n── shouldWriteCache (LOADING/ERROR 不写防误信) ──");
// ════════════════════════════════════════════════════════════
ok("ACTIVE 写 cache", shouldWriteCache("active") === true);
ok("FREE 写 cache", shouldWriteCache("free") === true);
ok("GUEST 写 cache", shouldWriteCache("guest") === true);
ok("LOADING 绝不写 cache (避免持久化中间态)", shouldWriteCache("loading") === false);
ok("ERROR 绝不写 cache (规划 §7 Codex P0-4 要求)", shouldWriteCache("error") === false);

// ════════════════════════════════════════════════════════════
console.log("\n── hashUserId (PII 保护 + funnel 关联) ──");
// ════════════════════════════════════════════════════════════
var uid1 = hashUserId("00000000-0000-0000-0000-000000000001");
var uid2 = hashUserId("00000000-0000-0000-0000-000000000002");
ok("hashUserId 输出非空字符串", typeof uid1 === "string" && uid1.length > 0);
ok("hashUserId 不同 user 不同 hash", uid1 !== uid2);
ok("hashUserId 相同输入相同输出 (deterministic)", hashUserId("abc") === hashUserId("abc"));
ok("hashUserId(null) 返回 null", hashUserId(null) === null);
ok("hashUserId('') 返回 null", hashUserId("") === null);
ok("hash 不包含原始 user_id 字符 (PII safety)", uid1.indexOf("0000") === -1);

// ════════════════════════════════════════════════════════════
console.log("\n── 端到端场景: 首次 mount 真 free 用户 ──");
// ════════════════════════════════════════════════════════════
// 模拟 hook 内 loadTier 跑 3 轮都返回 isActive:false 的状态机
var s = { falseCount: 0, retryCount: 0, state: "loading" };
function step(response) {
  var r = decideOnResponse(response, s.falseCount);
  if (r.action === "retry") {
    s.falseCount = r.nextFalseCount;
    return "retry-" + r.delayMs;
  } else if (r.action === "commit-free") {
    s.falseCount = r.nextFalseCount;
    s.state = "free";
    return "commit-free";
  } else if (r.action === "commit-active") {
    s.falseCount = r.nextFalseCount;
    s.state = "active";
    return "commit-active";
  }
}
ok("Round 1: false → retry 1500", step({isActive:false}) === "retry-1500");
ok("Round 2: false → retry 3000", step({isActive:false}) === "retry-3000");
ok("Round 3: false → commit-free", step({isActive:false}) === "commit-free");
eq("最终 state=free", s.state, "free");
eq("falseCount 重置=0", s.falseCount, 0);

// ════════════════════════════════════════════════════════════
console.log("\n── 端到端场景: 中途 isActive:true 切换 ──");
// ════════════════════════════════════════════════════════════
var s2 = { falseCount: 0, state: "loading" };
function step2(response) {
  var r = decideOnResponse(response, s2.falseCount);
  s2.falseCount = r.nextFalseCount;
  if (r.action !== "retry") s2.state = r.state;
  return r.action;
}
ok("Round 1: false → retry", step2({isActive:false}) === "retry");
eq("falseCount=1", s2.falseCount, 1);
ok("Round 2: 用户买单了, isActive:true → commit-active 立刻", step2({isActive:true, tier:"basic"}) === "commit-active");
eq("最终 state=active", s2.state, "active");
eq("falseCount 重置 (active 路径)", s2.falseCount, 0);

// ════════════════════════════════════════════════════════════
console.log("\n── 端到端场景: 网络挂掉 3 次 → ERROR fail-closed ──");
// ════════════════════════════════════════════════════════════
var s3 = { retryCount: 0, state: "loading" };
function step3() {
  var r = decideOnError(s3.retryCount);
  s3.retryCount = r.nextRetryCount;
  if (r.action === "commit-error") {
    s3.state = "error";
    return "commit-error";
  }
  return "retry-" + r.delayMs;
}
ok("Network err 1: retry 1500", step3() === "retry-1500");
ok("Network err 2: retry 3000", step3() === "retry-3000");
ok("Network err 3: commit-error", step3() === "commit-error");
eq("最终 state=error (fail-closed)", s3.state, "error");

// ════════════════════════════════════════════════════════════
console.log("\n── 状态转换矩阵: 关键 active → 降级 → 升级回环 ──");
// ════════════════════════════════════════════════════════════
// 模拟: loading → active → free → active (退费后重新订阅)
var transitions = [
  ["loading", "active"],
  ["active", "free"],
  ["free", "active"],
];
ok("loading → active 首次拿到, 不算 upgrade", isUpgrade(transitions[0][0], transitions[0][1]) === false);
ok("loading → active 不算 downgrade", isDowngrade(transitions[0][0], transitions[0][1]) === false);
ok("active → free 退费, 算 downgrade (tierLost=true)", isDowngrade(transitions[1][0], transitions[1][1]) === true);
ok("free → active 重新订阅, 算 upgrade (清 tierLost)", isUpgrade(transitions[2][0], transitions[2][1]) === true);

// ════════════════════════════════════════════════════════════
console.log("\n══════════════════════════════════════════════════");
console.log("结果: " + pass + " 通过, " + fail + " 失败");
if (fail > 0) {
  console.log("❌ 单测有失败, Step 2 之前必须修");
  process.exit(1);
} else {
  console.log("✅ 全部通过, useUserTier hook 决策核心已锁定");
  console.log("");
  console.log("注: React hook 本身 (mount/useEffect/Supabase auth 订阅) 留给");
  console.log("    Step 4-10 真接 UI 时 integration smoke. 纯逻辑覆盖足以保证");
  console.log("    决策树正确, hook 内部仅是把这些 helper 串起来 setState.");
  process.exit(0);
}

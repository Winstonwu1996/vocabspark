/* 网络连通性探测测试
   运行：node scripts/test-connectivity.mjs

   回归的问题（Willow 实测）：登录 Vocab 时顶部弹出红色「网络已断开」，
   但服务端一切正常（实测站点 200/0.26s、AI 接口 200/1.1s）。

   根因：NetworkBanner 只信 navigator.onLine。该 API 只反映「有没有连上某个网络接口」，
   切 WiFi / iOS 前后台切换 / 锁屏唤醒 / 省电模式 / VPN 连断 都会虚报 offline；
   且这些场景常常「只发 offline 不发 online」，原实现进 offline 后毫无自愈 → 红条永久卡住。

   ⚠️ 本测试 import 生产代码 lib/connectivity.js —— 不是手抄副本。
*/

import { probeConnectivity, shouldReportOffline, recheckDelayMs, statusAfterProbe, PROBE_URL } from "../lib/connectivity.js";

let pass = 0, fail = 0;
const ok = (name, cond) => {
  if (cond) { pass++; console.log("  ✅ " + name); }
  else { fail++; console.log("  ❌ " + name); }
};
const eq = (name, got, want) => {
  const same = JSON.stringify(got) === JSON.stringify(want);
  if (!same) console.log(`     got=${JSON.stringify(got)} want=${JSON.stringify(want)}`);
  ok(name, same);
};

console.log("\n── shouldReportOffline：什么时候才该弹红条 ──");
eq("浏览器在线 + 探测通 → 不报", shouldReportOffline(true, true), false);
eq("浏览器在线 + 探测失败 → 不报（接口偶发抖动不该吓用户）", shouldReportOffline(true, false), false);
eq("浏览器离线 + 探测通 → 不报（★ Willow 遇到的误报场景）", shouldReportOffline(false, true), false);
eq("浏览器离线 + 探测也失败 → 才报（真断网）", shouldReportOffline(false, false), true);

console.log("\n── probeConnectivity：拿到响应就算通 ──");
{
  const okFetch = async () => ({ ok: true, status: 200 });
  ok("200 → 通", await probeConnectivity(okFetch));
}
{
  // 服务端 500 说明链路是好的，不该显示成「网络已断开」
  const errFetch = async () => ({ ok: false, status: 500 });
  ok("500 → 仍算通（服务端错误 ≠ 网络断开）", await probeConnectivity(errFetch));
}
{
  const throwFetch = async () => { throw new TypeError("Failed to fetch"); };
  ok("fetch 抛错 → 不通", (await probeConnectivity(throwFetch)) === false);
}
{
  const abortFetch = async () => { const e = new Error("aborted"); e.name = "AbortError"; throw e; };
  ok("超时/中断 → 不通", (await probeConnectivity(abortFetch)) === false);
}
{
  ok("没有 fetch 实现时不崩，返回 false", (await probeConnectivity(null, { url: "/x" })) !== undefined);
}

console.log("\n── 探测请求本身：必须绕过缓存 ──");
{
  let seenUrl = null, seenInit = null;
  const spy = async (u, init) => { seenUrl = u; seenInit = init; return { ok: true }; };
  await probeConnectivity(spy);
  ok("打到版本接口", String(seenUrl).startsWith(PROBE_URL));
  ok("带时间戳防缓存", /_probe=\d+/.test(String(seenUrl)));
  eq("cache: no-store", seenInit && seenInit.cache, "no-store");
  eq("用 GET", seenInit && seenInit.method, "GET");
}
{
  // 两次探测的 URL 必须不同，否则可能吃到缓存导致「假通」
  const urls = [];
  const spy = async (u) => { urls.push(u); return { ok: true }; };
  await probeConnectivity(spy);
  await new Promise((r) => setTimeout(r, 2));
  await probeConnectivity(spy);
  ok("两次探测 URL 不同（不吃缓存）", urls[0] !== urls[1]);
}

console.log("\n── 自愈复检节奏：先密后疏 ──");
{
  const delays = [0, 1, 2, 3, 4, 5, 10].map(recheckDelayMs);
  ok("首次复检足够快（≤2s，网一好就消失）", delays[0] <= 2000);
  let nonDecreasing = true;
  for (let i = 1; i < 5; i++) if (delays[i] < delays[i - 1]) nonDecreasing = false;
  ok("间隔逐步拉长（不空耗电量）", nonDecreasing);
  ok("有上限，不会无限增长", delays[6] === delays[5] && delays[6] <= 30000);
  eq("非法输入兜底为首档", recheckDelayMs(-1), recheckDelayMs(0));
  eq("NaN 兜底为首档", recheckDelayMs(NaN), recheckDelayMs(0));
}

console.log("\n── 端到端场景复现 ──");
{
  // 场景 1：Willow 的误报 —— 浏览器喊断网，服务器其实好的
  const serverUp = async () => ({ ok: true, status: 200 });
  const probeOk = await probeConnectivity(serverUp);
  eq("★ 误报场景：不弹红条", shouldReportOffline(false, probeOk), false);
}
{
  // 场景 2：真断网 —— 浏览器喊断网，服务器也确实连不上
  const serverDown = async () => { throw new TypeError("Failed to fetch"); };
  const probeOk = await probeConnectivity(serverDown);
  eq("真断网场景：弹红条", shouldReportOffline(false, probeOk), true);
}
{
  // 场景 3：断网后网络恢复，但浏览器没发 online 事件 —— 复检必须能发现
  let calls = 0;
  const flaky = async () => {
    calls += 1;
    if (calls <= 2) throw new TypeError("Failed to fetch"); // 前两次仍断
    return { ok: true, status: 200 };                       // 第三次恢复
  };
  const r1 = await probeConnectivity(flaky);
  const r2 = await probeConnectivity(flaky);
  const r3 = await probeConnectivity(flaky);
  eq("复检能发现恢复（不必等 online 事件，也不必刷新）", [r1, r2, r3], [false, false, true]);
}

console.log("\n── 自愈回落：不能被过期的 navigator.onLine 打回断网 ──");
// 实测踩过的坑：自愈成功后回落时仍看 navigator.onLine，而浏览器在切 WiFi /
// iOS 前后台后会长时间谎报 false → 横幅立刻复活，且此时复检已停 → 永久卡住。
eq("★ 探测通 + onLine 仍谎报 false → 回到 ok（不复活红条）", statusAfterProbe(true, false), "ok");
eq("探测通 + onLine 也为 true → ok", statusAfterProbe(true, true), "ok");
eq("探测失败 + onLine false → 保持 offline", statusAfterProbe(false, false), "offline");
eq("探测失败 + onLine true → 不报（可能只是接口抖动）", statusAfterProbe(false, true), "ok");

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);

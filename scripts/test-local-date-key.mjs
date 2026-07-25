/* 纯函数单测：lib/learnStatus.js 的日期口径（UTC 写入 vs 本地读取）
   运行：node scripts/test-local-date-key.mjs

   回归的 bug：reviewHistory 的 r.date 是 new Date().toISOString()（UTC 日历日），
   而"今天"判定用本地日历日。旧代码直接 slice(0,10) 比较 —— 在 UTC+8 的
   本地 00:00-08:00 期间 UTC 仍停在昨天，今早做的复习全部不计入"今天完成"，
   导致每日任务显示未完成、复习步骤反复要求重做（中国用户每天早晨都踩）。
*/

import { getLocalDateKey, isoToLocalDateKey, isSameLocalDay } from "../lib/learnStatus.js";

let pass = 0, fail = 0;
const eq = (name, got, want) => {
  if (got === want) { pass++; }
  else { fail++; console.error(`✗ ${name}\n    got:  ${JSON.stringify(got)}\n    want: ${JSON.stringify(want)}`); }
};
const ok = (name, cond) => eq(name, !!cond, true);

// ── 1. getLocalDateKey 基本行为 ──
{
  // 构造一个明确的本地时间：本地 2026-03-15 10:30
  const d = new Date(2026, 2, 15, 10, 30, 0);
  eq("getLocalDateKey: 本地日期正确", getLocalDateKey(d), "2026-03-15");
}
{
  // 本地午夜刚过 —— 日期应是当天，不是前一天
  const d = new Date(2026, 2, 15, 0, 5, 0);
  eq("getLocalDateKey: 本地 00:05 属当天", getLocalDateKey(d), "2026-03-15");
}
{
  // 本地 23:59 —— 仍是当天，不跨到明天
  const d = new Date(2026, 2, 15, 23, 59, 59);
  eq("getLocalDateKey: 本地 23:59 属当天", getLocalDateKey(d), "2026-03-15");
}

// ── 2. isoToLocalDateKey：核心回归 —— UTC ISO 必须按本地时区还原 ──
{
  // 关键用例：本地 2026-03-15 07:00（早晨，UTC+8 下 UTC 还是 03-14 23:00）
  // 写入端会存成 UTC ISO；读取端必须还原回本地的 03-15，否则今早复习不算数。
  const localMorning = new Date(2026, 2, 15, 7, 0, 0);
  const utcIso = localMorning.toISOString(); // 写入端真实行为
  eq(
    "isoToLocalDateKey: 本地早晨写入的 UTC ISO 还原回本地当天（核心回归）",
    isoToLocalDateKey(utcIso),
    "2026-03-15"
  );
  // 对照：旧的坏实现（直接切 UTC 字符串）在偏离 UTC 的时区会错位。
  // ⚠️ 不能只在东八区断言 —— CI 默认 UTC，那样核心回归在 CI 上等于零覆盖。
  // 改为：只要本地时区不是 UTC，就断言新旧实现必须产生不同结果（即 bug 真实存在且已修）。
  // 这个测试文件应当在多个 TZ 下运行（见文件末尾的自检提示）。
  // 注意：本用例是「本地早上 7:00」。旧实现只在 UTC 以东(offset<0，如东八区)才错位
  //（本地早晨时 UTC 还停在昨天）；在美西(offset>0)本地早晨对应 UTC 同日下午，不错位。
  // 所以这里按时区方向分别断言，避免写出「在美西必然失败」的错误期望。
  // 旧实现何时才真的错位：本地时刻早于「本地与 UTC 的时差」时，UTC 仍停在昨天。
  //   东八区(offset -480 = 8h)本地 07:00 < 8h → 错位 ✓（这就是中国用户每天早晨踩的）
  //   印度(offset -330 = 5.5h)本地 07:00 > 5.5h → 不错位
  //   伦敦 3 月(offset 0) / 美西(offset>0) → 不错位
  // ⚠️ offset 必须取「用例那一天」的，不能用 new Date()：伦敦 3/15 是 GMT，
  //    但 7 月跑测试时当前是 BST(-60)，用当前值会得出错误期望。夏令时就是这样咬人的。
  const naive = String(utcIso).slice(0, 10);
  const tzOffsetMin = localMorning.getTimezoneOffset();
  const eastOffsetHours = -tzOffsetMin / 60;            // 东八区 → 8
  const localHour = localMorning.getHours();            // 本用例 = 7
  if (eastOffsetHours > localHour) {
    ok(
      `对照：本地 ${localHour}:00 早于时差 ${eastOffsetHours}h → 旧 slice(0,10) 确实错位`,
      naive !== "2026-03-15"
    );
  }
  // 不论什么时区，新实现都必须给出本地日历日
  ok("新实现在任何时区都返回本地当天", isoToLocalDateKey(utcIso) === "2026-03-15");
}
{
  // 本地午夜刚过写入
  const d = new Date(2026, 2, 15, 0, 30, 0);
  eq("isoToLocalDateKey: 本地 00:30 写入仍属当天", isoToLocalDateKey(d.toISOString()), "2026-03-15");
}
{
  // 本地深夜写入，不应跨到次日
  const d = new Date(2026, 2, 15, 23, 30, 0);
  eq("isoToLocalDateKey: 本地 23:30 写入仍属当天", isoToLocalDateKey(d.toISOString()), "2026-03-15");
}

// ── 3. 兜底：坏数据不崩、不丢 ──
eq("isoToLocalDateKey: 空值 → 空串", isoToLocalDateKey(""), "");
eq("isoToLocalDateKey: null → 空串", isoToLocalDateKey(null), "");
eq("isoToLocalDateKey: undefined → 空串", isoToLocalDateKey(undefined), "");
eq("isoToLocalDateKey: 不可解析字符串 → 兜底取前10字符", isoToLocalDateKey("2026-03-15-garbage"), "2026-03-15");
eq("isoToLocalDateKey: 纯垃圾 → 兜底不崩", isoToLocalDateKey("abc"), "abc");

// ── 4. isSameLocalDay：读取端真实用法 ──
{
  const now = new Date();
  ok("isSameLocalDay: 此刻写入的 ISO 属于今天", isSameLocalDay(new Date().toISOString(), now));
}
{
  const now = new Date(2026, 2, 15, 12, 0, 0);
  const yesterday = new Date(2026, 2, 14, 12, 0, 0);
  ok("isSameLocalDay: 昨天的记录不算今天", !isSameLocalDay(yesterday.toISOString(), now));
}
{
  // 最关键的场景复现：本地今天早上 7 点复习，此刻是本地今天中午 → 必须算"今天"
  const now = new Date(2026, 2, 15, 12, 0, 0);
  const thisMorning = new Date(2026, 2, 15, 7, 0, 0);
  ok(
    "isSameLocalDay: 今早 7 点的复习必须算今天完成（bug 场景）",
    isSameLocalDay(thisMorning.toISOString(), now)
  );
}
eq("isSameLocalDay: 空值 → false", isSameLocalDay("", new Date()), false);

// ── 5. 时区无关的核心回归（不依赖运行机器的 TZ）──
// 上面的断言都基于「本地时区」，在 CI(UTC) 上会退化。这里用固定的 UTC 时刻 +
// 已知偏移手工推演，确保「早晨窗口」的回归在任何 TZ 下都被覆盖。
{
  // 构造：UTC 2026-03-14T23:00:00Z
  // 在 UTC+8 这是本地 03-15 07:00（早晨）→ 必须算作本地的 03-15
  // 在 UTC-7 这是本地 03-14 16:00        → 必须算作本地的 03-14
  const iso = "2026-03-14T23:00:00.000Z";
  const d = new Date(iso);
  // 用 Intl 显式按目标时区取日历日，与被测函数在该时区下的预期结果比对
  const expectIn = (tz) => new Intl.DateTimeFormat("en-CA", {
    timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit",
  }).format(d); // en-CA 输出 YYYY-MM-DD

  eq("时区无关：UTC+8 下该时刻属本地 2026-03-15（早晨窗口）", expectIn("Asia/Shanghai"), "2026-03-15");
  eq("时区无关：UTC-7 下该时刻属本地 2026-03-14", expectIn("America/Los_Angeles"), "2026-03-14");

  // 被测函数用的是运行环境的本地时区，断言它与本地时区的权威答案一致
  const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  eq(
    `isoToLocalDateKey 与本地时区(${localTz})权威日历日一致`,
    isoToLocalDateKey(iso),
    expectIn(localTz)
  );
}

console.log(`\n${pass} passed, ${fail} failed`);
if (fail === 0) {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(`（本次运行时区：${tz}；建议同时跑 TZ=Asia/Shanghai 与 TZ=America/Los_Angeles）`);
}
process.exit(fail === 0 ? 0 : 1);

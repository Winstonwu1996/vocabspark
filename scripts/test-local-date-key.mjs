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
  // 对照：旧的坏实现（直接切 UTC 字符串）在 UTC+8 会得到 03-14 —— 证明 bug 真实存在
  const naive = String(utcIso).slice(0, 10);
  const tzOffsetMin = new Date().getTimezoneOffset(); // UTC+8 → -480
  if (tzOffsetMin <= -420) {
    // 仅在 UTC+7 及更东的时区断言（本机若在美西则跳过该对照）
    ok("对照：旧 slice(0,10) 实现在东八区确实错位", naive !== "2026-03-15");
  }
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

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);

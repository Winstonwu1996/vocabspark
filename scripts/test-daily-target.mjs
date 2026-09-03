/* 每日新词目标：加载时序测试
   运行：node scripts/test-daily-target.mjs

   回归的问题（梧桐实测）：「每次登录都自动变成只学 10 个词，但我设置的是 30」。
   云端设置一直是 30、前几天都真学满 30 —— 不是数据坏，是加载时序：
   登出会清掉本机设置(SKEY)，重新登录后本机无从读起，dailyNewWords 停在默认 10，
   若此时点开始学习，这一轮就被锁成 10 个词。

   ⚠️ 本测试 import 生产代码 lib/dailyTarget.js —— 不是手抄副本。
*/

import {
  readSavedDailyNewWords, isUsableTarget, isDailyTargetKnown,
  planNewWordCount, DEFAULT_DAILY_NEW_WORDS,
} from "../lib/dailyTarget.js";

let pass = 0, fail = 0;
const ok = (n, c) => { if (c) { pass++; console.log("  ✅ " + n); } else { fail++; console.log("  ❌ " + n); } };
const eq = (n, g, w) => {
  const same = JSON.stringify(g) === JSON.stringify(w);
  if (!same) console.log(`     got=${JSON.stringify(g)} want=${JSON.stringify(w)}`);
  ok(n, same);
};

console.log("\n── 同步读取已保存的设置 ──");
eq("能读出 30（她的真实设置）", readSavedDailyNewWords(JSON.stringify({ settings: { dailyNewWords: 30 } })), 30);
eq("字符串数字也认", readSavedDailyNewWords(JSON.stringify({ settings: { dailyNewWords: "25" } })), 25);
eq("登出后本机被清空 → null（不是 10）", readSavedDailyNewWords(null), null);
eq("空串 → null", readSavedDailyNewWords(""), null);
eq("坏 JSON 不崩 → null", readSavedDailyNewWords("{不是json"), null);
eq("没有 settings → null", readSavedDailyNewWords(JSON.stringify({ stats: {} })), null);
eq("值为 0 视为无效 → null", readSavedDailyNewWords(JSON.stringify({ settings: { dailyNewWords: 0 } })), null);
eq("负数视为无效 → null", readSavedDailyNewWords(JSON.stringify({ settings: { dailyNewWords: -5 } })), null);

console.log("\n── isUsableTarget ──");
[[30,true],[1,true],[0,false],[-1,false],[null,false],[undefined,false],["abc",false],[NaN,false]]
  .forEach(([v, w]) => eq(`${JSON.stringify(v)} → ${w}`, isUsableTarget(v), w));

console.log("\n── 「是否已经知道目标」──");
eq("★ 已登录 + 本机无设置 + 云端未到 → 不知道（必须等）",
   isDailyTargetKnown({ saved: null, cloudApplied: false, loggedIn: true }), false);
eq("已登录 + 本机无设置 + 云端已到 → 知道",
   isDailyTargetKnown({ saved: null, cloudApplied: true, loggedIn: true }), true);
eq("已登录 + 本机有 30 → 立刻就知道（不必等云端）",
   isDailyTargetKnown({ saved: 30, cloudApplied: false, loggedIn: true }), true);
eq("游客 + 本机无设置 → 知道（本机即真源，用默认值）",
   isDailyTargetKnown({ saved: null, cloudApplied: false, loggedIn: false }), true);
eq("空参数不崩", isDailyTargetKnown(), true);

console.log("\n── 定词数：未知时绝不退回默认值 ──");
eq("★ 目标未知 → 返回 null（调用方须等待，不能拿 10 锁死）",
   planNewWordCount({ target: null, known: false, available: 100, cap: Infinity }), null);
eq("目标已知 30、词够、无上限 → 30",
   planNewWordCount({ target: 30, known: true, available: 100, cap: Infinity }), 30);
eq("剩余词不够 → 按剩余给",
   planNewWordCount({ target: 30, known: true, available: 7, cap: Infinity }), 7);
eq("免费档上限 10 → 被 cap 到 10",
   planNewWordCount({ target: 30, known: true, available: 100, cap: 10 }), 10);
eq("known 但 target 无效 → null（不猜）",
   planNewWordCount({ target: 0, known: true, available: 100, cap: Infinity }), null);
eq("没有可学的词 → 0", planNewWordCount({ target: 30, known: true, available: 0, cap: Infinity }), 0);

console.log("\n── 端到端复现梧桐的场景 ──");
{
  // 她的真实数据：云端 settings.dailyNewWords = 30
  const cloudBlob = JSON.stringify({ settings: { dailyNewWords: 30 } });

  // 场景 A：保持登录（本机还留着设置）→ 首屏就是 30，无空窗
  const savedA = readSavedDailyNewWords(cloudBlob);
  eq("A 保持登录：首屏直接 30", savedA, 30);
  ok("A 目标已知，可立即开始", isDailyTargetKnown({ saved: savedA, cloudApplied: false, loggedIn: true }));
  eq("A 本轮给 30 个词", planNewWordCount({ target: savedA, known: true, available: 100, cap: Infinity }), 30);

  // 场景 B：重新登录（登出清空了本机）→ 本机读不到
  const savedB = readSavedDailyNewWords(null);
  eq("B 重新登录：本机读不到", savedB, null);
  const knownB0 = isDailyTargetKnown({ saved: savedB, cloudApplied: false, loggedIn: true });
  eq("★ B 云端未到时：判定为『不知道』——旧代码正是在这里用 10 锁死", knownB0, false);
  eq("★ B 此刻不允许定词数", planNewWordCount({ target: savedB, known: knownB0, available: 100, cap: Infinity }), null);

  // 云端到位后
  const cloudTarget = 30;
  const knownB1 = isDailyTargetKnown({ saved: cloudTarget, cloudApplied: true, loggedIn: true });
  ok("B 云端到位后：已知", knownB1);
  eq("★ B 最终给 30 个词，不是 10", planNewWordCount({ target: cloudTarget, known: knownB1, available: 100, cap: Infinity }), 30);
}

console.log("\n── 兜底常量没被误当成「设置值」──");
ok("默认常量存在且为正数", isUsableTarget(DEFAULT_DAILY_NEW_WORDS));
ok("默认值不参与『已知』判定（本机 null 时仍判未知）",
   isDailyTargetKnown({ saved: null, cloudApplied: false, loggedIn: true }) === false);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);

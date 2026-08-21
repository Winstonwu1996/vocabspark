/* 复习进度口径测试
   运行：node scripts/test-review-progress.mjs

   回归的问题（梧桐实测）：
     「只要给某个复习中的单词标记了不熟，总共要复习的单词数就会变多，
       按这个逻辑似乎永远都做不完。」

   根因：进度条写的是 idx+1 / queue.length，而 maybeRelearnSameSession 会把
   「不熟/忘了」的词重排到队尾（forgot 最多 2 次、fuzzy 1 次）。分母是「还要答多少题」，
   学生却读成「还剩多少个单词」→ 每标一次不熟分母就涨 → 感觉永远做不完。

   ⚠️ 本测试 import 生产代码 lib/reviewProgress.js —— 不是手抄副本。
*/

import { computeReviewProgress } from "../lib/reviewProgress.js";

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

const W = (n) => Array.from({ length: n }, (_, i) => ({ word: "w" + i }));

// 复刻生产的重排规则，用来生成「真实会出现的队列」（只用于造数据，不是被测逻辑）
function simulateQueue(initial, answers) {
  let queue = initial.slice();
  const relearn = {};
  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    const r = answers[i] || "remembered";
    if (r === "forgot" || r === "fuzzy") {
      const max = r === "forgot" ? 2 : 1;
      const n = relearn[item.word] || 0;
      if (n < max) { relearn[item.word] = n + 1; queue = queue.concat([item]); }
    }
  }
  return queue;
}

console.log("\n── 核心回归：标「不熟」后分母不能变大 ──");
{
  const initial = W(10);
  // 前 3 个 fuzzy、接着 2 个 forgot（梧桐的典型场景）
  const answers = ["fuzzy","fuzzy","fuzzy","forgot","forgot"];
  const queue = simulateQueue(initial, answers);

  ok(`重排确实让队列变长（${initial.length} → ${queue.length}），即旧分母会涨`, queue.length > initial.length);

  // 新口径：无论队列涨到多长，分母恒等于去重单词数
  const denoms = new Set();
  for (let i = 0; i < queue.length; i++) {
    denoms.add(computeReviewProgress(queue, i).totalWords);
  }
  eq("整轮过程中分母恒定不变", [...denoms], [10]);
}

console.log("\n── 分子：加练不重复计数，且单调不减 ──");
{
  const queue = simulateQueue(W(5), ["forgot","fuzzy"]);
  let prev = 0;
  let monotonic = true;
  for (let i = 0; i < queue.length; i++) {
    const p = computeReviewProgress(queue, i);
    if (p.doneWords < prev) monotonic = false;
    prev = p.doneWords;
  }
  ok("已完成数单调不减", monotonic);
  const last = computeReviewProgress(queue, queue.length - 1);
  eq("走到队尾时 已完成 == 总数（能做完）", [last.doneWords, last.totalWords], [5, 5]);
}

console.log("\n── 加练标记：区分首次 vs 再练 ──");
{
  const queue = simulateQueue(W(3), ["forgot"]);   // w0 被重排 1 次
  eq("第 1 题是首次", computeReviewProgress(queue, 0).isRelearn, false);
  eq("第 2 题是首次", computeReviewProgress(queue, 1).isRelearn, false);
  eq("第 3 题是首次", computeReviewProgress(queue, 2).isRelearn, false);
  const last = computeReviewProgress(queue, 3);
  eq("第 4 题（w0 重排）标记为加练", last.isRelearn, true);
  eq("加练轮次 = 2", last.relearnRound, 2);
  eq("加练不推进分子（仍是 3/3）", [last.doneWords, last.totalWords], [3, 3]);
}

console.log("\n── 「永远做不完」不成立：重排有上限，队列必然收敛 ──");
{
  // 最坏情况：每题都标 forgot，且重排出现后继续标 forgot
  let queue = W(4);
  const relearn = {};
  let i = 0, guard = 0;
  while (i < queue.length && guard < 1000) {
    const item = queue[i];
    const n = relearn[item.word] || 0;
    if (n < 2) { relearn[item.word] = n + 1; queue = queue.concat([item]); }  // forgot 上限 2
    i++; guard++;
  }
  ok("最坏情况仍会终止（不是无限循环）", guard < 1000);
  eq("4 个词 × (1 首次 + 2 加练) = 12 题", queue.length, 12);
  const fin = computeReviewProgress(queue, queue.length - 1);
  eq("但分母始终是 4 个词", [fin.doneWords, fin.totalWords], [4, 4]);
}

console.log("\n── 边界：坏数据不崩 ──");
eq("空队列", computeReviewProgress([], 0), { totalWords: 0, doneWords: 0, isRelearn: false, relearnRound: 0 });
eq("null 队列", computeReviewProgress(null, 0), { totalWords: 0, doneWords: 0, isRelearn: false, relearnRound: 0 });
{
  const p = computeReviewProgress([{ word: "a" }, null, { word: "" }, { word: "a" }], 3);
  eq("含 null/空词条目：只算有效词", [p.doneWords, p.totalWords], [1, 1]);
  eq("重复的 a 标为加练", p.isRelearn, true);
}
{
  const q = [{ word: "A" }, { word: " a " }];
  const p = computeReviewProgress(q, 1);
  eq("大小写/空格视为同一个词", [p.doneWords, p.totalWords, p.isRelearn], [1, 1, true]);
}
{
  const p = computeReviewProgress([{ word: "a" }], 99);   // idx 越界
  eq("idx 越界不崩", [p.doneWords, p.totalWords], [1, 1]);
  const p2 = computeReviewProgress([{ word: "a" }], -5);  // 负 idx
  eq("负 idx 不崩", p2.totalWords, 1);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);

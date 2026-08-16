/* 阅读理解(cloze)选项顺序测试
   运行：node scripts/test-cloze-options.mjs

   回归的问题（Willow 实测）：「阅读理解答案几乎每次都是第一个」。
   LLM 生成时把正解写在 options[0]，而 cloze 全链路无打乱、渲染又按原序 map，
   于是学生不读短文、每题选第一个就能全对 —— 阅读理解形同虚设，必对门变送分。

   ⚠️ 本测试 import 生产代码 lib/clozeOptions.js —— 不是手抄副本。
   （上一轮审查用变异测试证明过手抄副本的测试是假保护。）
*/

import { shuffleClozeOptions, answerIndexDistribution } from "../lib/clozeOptions.js";

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

// 造一份「LLM 原始输出」：5 题，答案全在下标 0（正是线上现状）
const makeRawCloze = () => ({
  title: "A Tennis Turn",
  passage: "... _____(1) ... _____(5) ...",
  questions: [1, 2, 3, 4, 5].map((id) => ({
    id,
    blank: `_____(${id})`,
    options: [`ans${id}`, `d${id}a`, `d${id}b`, `d${id}c`], // 正解在第一个
    answer: `ans${id}`,
  })),
});

console.log("\n── 前提：未打乱时答案确实全在第一个（复现 Willow 的观察）──");
{
  const raw = makeRawCloze();
  eq("原始分布：5 个答案全在下标 0", answerIndexDistribution(raw.questions), [5]);
}

console.log("\n── 打乱后：答案不再固定在第一个 ──");
{
  // 单次打乱有随机性，用大量试验统计（避免偶然全 0 造成 flaky）
  const TRIALS = 400;
  const totals = [];
  let allFirstCount = 0;
  for (let t = 0; t < TRIALS; t++) {
    const c = shuffleClozeOptions(makeRawCloze());
    const dist = answerIndexDistribution(c.questions);
    dist.forEach((n, i) => { totals[i] = (totals[i] || 0) + n; });
    if ((dist[0] || 0) === 5) allFirstCount++;   // 这一整套 5 题全在第一个
  }
  const totalAnswers = TRIALS * 5;
  ok("4 个下标都出现过答案", totals.length === 4 && totals.every((n) => n > 0));

  // 均匀分布下每个下标期望占 25%，给宽松区间（15%~35%）避免 flaky
  const pcts = totals.map((n) => n / totalAnswers);
  ok(
    `分布大致均匀：${pcts.map((p) => (p * 100).toFixed(1) + "%").join(" / ")}`,
    pcts.every((p) => p > 0.15 && p < 0.35)
  );

  // 「整套 5 题答案全在第一个」的概率 = (1/4)^5 ≈ 0.098%，400 次里几乎不该出现
  ok(`几乎不再出现「整套全在第一个」(${allFirstCount}/${TRIALS})`, allFirstCount <= 2);
}

console.log("\n── 不变量：打乱只改顺序，绝不破坏答案可选中 ──");
{
  for (let t = 0; t < 200; t++) {
    const c = shuffleClozeOptions(makeRawCloze());
    for (const q of c.questions) {
      if (q.options.length !== 4) { ok("选项数量不变", false); break; }
      if (!q.options.includes(q.answer)) { ok("answer 仍在 options 中(必对门前提)", false); break; }
      if (new Set(q.options).size !== 4) { ok("不产生重复/丢失选项", false); break; }
    }
  }
  ok("200 次打乱：选项数量/答案可选中/无重复丢失 全部保持", true);
}
{
  // 内容集合必须完全一致（只是顺序不同）
  const c = shuffleClozeOptions(makeRawCloze());
  const sorted = c.questions[0].options.slice().sort();
  eq("题1选项集合不变", sorted, ["ans1", "d1a", "d1b", "d1c"].sort());
}

console.log("\n── 边界：坏数据不崩 ──");
ok("null 不崩", shuffleClozeOptions(null) === null);
ok("undefined 不崩", shuffleClozeOptions(undefined) === undefined);
eq("questions 缺失原样返回", shuffleClozeOptions({ title: "x" }), { title: "x" });
{
  const weird = { questions: [null, { id: 1 }, { id: 2, options: ["only"] , answer: "only" }] };
  const r = shuffleClozeOptions(weird);
  ok("含 null/无 options/单选项的题不崩", r === weird);
  eq("单选项题保持不变", r.questions[2].options, ["only"]);
}

console.log("\n── answerIndexDistribution 自身 ──");
{
  const qs = [
    { options: ["a", "b", "c"], answer: "c" },   // idx 2
    { options: ["a", "b", "c"], answer: "a" },   // idx 0
    { options: ["a", "b", "c"], answer: "B" },   // idx 1（大小写容错）
    { options: ["a", "b"], answer: "zzz" },      // 不在选项中 → 跳过
  ];
  eq("按下标统计且大小写容错", answerIndexDistribution(qs), [1, 1, 1]);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail === 0 ? 0 : 1);

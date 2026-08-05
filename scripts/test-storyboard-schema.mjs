/* storyboard / notebook 双 schema 兼容回归测试
   运行：node scripts/test-storyboard-schema.mjs

   ⚠️ 直接跑生产代码（lib/history-runtime.js 的 getEffectiveTurns、
   notebooks 的 loadNotebook），不是手抄副本 —— 见 test-check-subscription-idor.mjs 的教训。

   守两个曾经上线的 P1：

   ① 课程停在第一屏（enlightenment 默认 lens = 5★ 必学核心课）
      Schema B 的 36 个节点只写 nodeId 没写 id → nodeToTurn 的 `n` 全是 undefined
      → 页面按 `log.find(e => e.turn === turn.n)` 去重时，第 2 节起每节都命中第 1 节
      记录（undefined === undefined）→ 第 2-12 节永不渲染，孩子看到一屏后全是死点击。

   ② 复习页整页白屏（7 门上线课、42 张考点卡）
      老 schema 把 xiaoweiNote 放在卡片顶层，新 schema 放在 storyAnchor 下。
      渲染层直读 card.storyAnchor.xiaoweiNote.cn → TypeError → app 级 ErrorBoundary
      吃掉整页 → 学生交完学习回执就再也进不了 mastery 关。

   两条都不是「理论上可能」——都是扫描真实数据扫出来的，所以本测试直接断言真实数据。
*/

const RT = await import("../lib/history-runtime.js");
const T = await import("../lib/history-topics.js");
const SB = await import("../lib/history-storyboards/index.js");
const NB = await import("../lib/history-storyboards/notebooks/index.js");

let pass = 0, fail = 0;
const ok = (name, cond) => {
  if (cond) { pass++; console.log("  ✅ " + name); }
  else { fail++; console.log("  ❌ " + name); }
};

const topicIds = T.TOPIC_REGISTRY.map((r) => r.id);

// storyboard 已改为按需加载（2026-08-05 瘦身：71 门静态引入 7.4MB → 按门加载）。
// 同步 API 读的是已加载缓存，所以这里要先把全部课程载入 —— 生产环境页面只预加载当前
// 这一门（见 pages/history/[topicId].js 的 urlResolved 闸），测试要覆盖全部所以全载。
// 顺带也验了 preloadStoryboard 本身：71 门都能加载成功。
let preloadFail = [];
for (const id of topicIds) {
  try {
    const mod = await SB.preloadStoryboard(id);
    if (!mod && SB.hasStoryboard(id)) preloadFail.push(id + '(返回空)');
  } catch (e) { preloadFail.push(id + '(' + (e && e.message || 'throw') + ')'); }
}

// ─────────────────────────────────────────────────────────────────
console.log("\n── ⓪ 按需加载：全部课程都能成功载入 ──");
{
  ok(`71 门课 preloadStoryboard 全部成功${preloadFail.length ? " ← 失败: " + preloadFail.slice(0,5).join(", ") : ""}`,
     preloadFail.length === 0);
  // 未预加载时同步 API 必须抛出「可定位」的错，而不是静默返回空数组骗过下游
  ok("未注册的 topic hasStoryboard 为 false", SB.hasStoryboard("__not_a_topic__") === false);
  // 降级契约：加载失败/未加载时 getEffectiveTurns 不能抛（会在渲染体里炸成整页白屏）
  let threw = false;
  try { RT.getEffectiveTurns("__not_a_topic__", null, null); } catch (e) { threw = true; }
  ok("getEffectiveTurns 对未知 topic 不抛错（抛了会整页白屏）", !threw);
}

console.log("\n── ① 每个 lens 的每个节点都必须有可用的去重键（turn.n）──");
{
  const broken = [];
  for (const tid of topicIds) {
    let lenses = [];
    try { lenses = SB.listLenses ? SB.listLenses(tid) : []; } catch (e) { /* 无 lens */ }
    if (!lenses.length) lenses = [{ id: null }];
    for (const L of lenses) {
      let turns = [];
      try { turns = RT.getEffectiveTurns(tid, T.getTopic(tid), L.id); } catch (e) { continue; }
      if (!turns.length) continue;
      const nil = turns.filter((t) => t.n === undefined || t.n === null);
      if (nil.length) broken.push(`${tid}/${L.id || "default"} (${nil.length}/${turns.length})`);
    }
  }
  ok(`全部课程 lens 无 turn.n 缺失（否则课程停在第一屏）${broken.length ? " ← " + broken.join(", ") : ""}`,
     broken.length === 0);

  // 去重键还必须在 lens 内唯一 —— 两节共用一个键同样会让后一节被吃掉
  const dup = [];
  for (const tid of topicIds) {
    let lenses = [];
    try { lenses = SB.listLenses ? SB.listLenses(tid) : []; } catch (e) {}
    if (!lenses.length) lenses = [{ id: null }];
    for (const L of lenses) {
      let turns = [];
      try { turns = RT.getEffectiveTurns(tid, T.getTopic(tid), L.id); } catch (e) { continue; }
      const keys = turns.map((t) => t.n);
      if (new Set(keys).size !== keys.length) dup.push(`${tid}/${L.id || "default"}`);
    }
  }
  ok(`去重键在 lens 内唯一${dup.length ? " ← " + dup.join(", ") : ""}`, dup.length === 0);
}

// ─────────────────────────────────────────────────────────────────
console.log("\n── ② 已写好的授权正文必须真的被投递（不能让 AI 现编）──");
{
  const undelivered = [];
  for (const tid of topicIds) {
    let lenses = [];
    try { lenses = SB.listLenses ? SB.listLenses(tid) : []; } catch (e) {}
    if (!lenses.length) lenses = [{ id: null }];
    for (const L of lenses) {
      let turns = [];
      try { turns = RT.getEffectiveTurns(tid, T.getTopic(tid), L.id); } catch (e) { continue; }
      const miss = turns.filter((t) => {
        const node = t._storyboardNode;
        if (!node) return false;
        const authored = node.content || node.bodyCn || node.bodyEn;
        return !!authored && !t._prewrittenContent;
      });
      if (miss.length) undelivered.push(`${tid}/${L.id || "default"} (${miss.length})`);
    }
  }
  ok(`无「写了正文却不投递」的节点${undelivered.length ? " ← " + undelivered.join(", ") : ""}`,
     undelivered.length === 0);

  // 投递出来的内容必须能按语言取到（getPrewrittenContent 是页面实际调用的入口）
  let sampled = 0, readable = 0;
  for (const tid of topicIds) {
    let lenses = [];
    try { lenses = SB.listLenses ? SB.listLenses(tid) : []; } catch (e) {}
    if (!lenses.length) lenses = [{ id: null }];
    for (const L of lenses) {
      let turns = [];
      try { turns = RT.getEffectiveTurns(tid, T.getTopic(tid), L.id); } catch (e) { continue; }
      for (const t of turns) {
        if (!t._prewrittenContent) continue;
        sampled++;
        if (RT.getPrewrittenContent(t, "cn")) readable++;
      }
    }
  }
  ok(`所有 prewritten 节点都能取到中文正文（${readable}/${sampled}）`,
     sampled > 0 && readable === sampled);
}

// ─────────────────────────────────────────────────────────────────
console.log("\n── ③ 考点卡渲染取值不得因 schema 差异抛错（白屏根因）──");
{
  // 复刻渲染层的取值方式：必须两处 schema 都读得到，且 isStory 分支不能裸读嵌套路径
  const readNote = (card) => card.xiaoweiNote || (card.storyAnchor && card.storyAnchor.xiaoweiNote);
  const crashers = [];
  let totalCards = 0, storyCards = 0, nested = 0, topLevel = 0;

  for (const tid of NB.listNotebookTopics()) {
    let nb;
    try { nb = NB.loadNotebook(tid); } catch (e) { continue; }
    for (const card of (nb && nb.mainConcepts) || []) {
      totalCards++;
      const isStory = !!(card.storyAnchor && card.storyAnchor.covered);
      if (!isStory) continue;
      storyCards++;
      if (card.storyAnchor.xiaoweiNote) nested++;
      else if (card.xiaoweiNote) topLevel++;
      // 生产代码若直读 card.storyAnchor.xiaoweiNote.cn，这类卡就会抛 TypeError
      if (!card.storyAnchor.xiaoweiNote) crashers.push(tid);
      // 兜底读法必须对两种 schema 都有效
      const note = readNote(card);
      if (!note) crashers.push(tid + "(两处都没有)");
    }
  }
  console.log(`     数据现状：${totalCards} 张卡，其中故事覆盖 ${storyCards} 张（嵌套 ${nested} / 顶层 ${topLevel}）`);
  ok("老 schema（顶层 xiaoweiNote）确实存在 —— 说明兜底不是多余的",
     topLevel > 0);
  ok(`兜底读法对所有故事卡都取得到内容${crashers.length ? "" : ""}`,
     crashers.filter((c) => c.includes("两处都没有")).length === 0);

  // 断言渲染层源码没有回退成裸读嵌套路径（防止后人"顺手简化"把 bug 改回来）
  const fs = await import("node:fs");
  const files = [
    "components/history-engine/ConceptReview.js",
    "components/history-engine/CompletionScreen.js",
  ];
  for (const f of files) {
    const src = fs.readFileSync(new URL("../" + f, import.meta.url), "utf8");
    ok(`${f} 未裸读 storyAnchor.xiaoweiNote.xx（会让 ${topLevel} 张老卡白屏）`,
       !/storyAnchor\.xiaoweiNote\.(cn|en)/.test(src));
  }
}

console.log(`\n${fail === 0 ? "✅" : "❌"} ${pass} passed, ${fail} failed\n`);
process.exit(fail === 0 ? 0 : 1);

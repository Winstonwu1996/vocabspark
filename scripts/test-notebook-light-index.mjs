/* 同伴笔记本「轻量索引」漂移守护
   运行：node scripts/test-notebook-light-index.mjs

   为什么需要这个测试：
   lib/history-storyboards/notebooks/light-index.js 是**自动生成**的标题副本（8KB），
   让课程列表页不必把 3.5MB 完整笔记本拖进客户端包。副本 = 有漂移风险：
   谁改了某门课的 topicNameCn 却忘了重新生成，列表页就会显示旧标题，
   而且**不会有任何报错**——这正是最难发现的一类 bug。

   本测试直接对比两边真实数据。漂移 → npm test 红。
   修法：node scripts/gen-notebook-light-index.mjs

   顺带守住一条更要命的不变量：
   getTopic() 对 63 门 base-content 课是靠 buildPreviewTopic 兜底的，
   而它的存在性判定现在依赖 light-index。索引缺一门 = 那门课从课程列表**整个消失**。
*/

const NB = await import("../lib/history-storyboards/notebooks/index.js");
const LIGHT = await import("../lib/history-storyboards/notebooks/light-index.js");
const T = await import("../lib/history-topics.js");

let pass = 0, fail = 0;
const ok = (name, cond) => {
  if (cond) { pass++; console.log("  ✅ " + name); }
  else { fail++; console.log("  ❌ " + name); }
};

const ids = NB.listNotebookTopics();

console.log("\n── ① 轻量索引与笔记本必须一一对应 ──");
{
  const lightIds = Object.keys(LIGHT.NOTEBOOK_NAMES);
  const missing = ids.filter((id) => !LIGHT.NOTEBOOK_NAMES[id]);
  const extra = lightIds.filter((id) => !ids.includes(id));
  ok(`索引条目数与笔记本一致（${lightIds.length} vs ${ids.length}）`, lightIds.length === ids.length);
  ok(`没有笔记本有、索引缺的课${missing.length ? " ← " + missing.join(", ") : ""}（缺=该课从列表消失）`,
     missing.length === 0);
  ok(`没有索引有、笔记本已删的课${extra.length ? " ← " + extra.join(", ") : ""}`, extra.length === 0);
}

console.log("\n── ② 标题内容不得漂移（改了笔记本忘了重新生成）──");
{
  // 必须加载完整笔记本才能对比 —— 生产环境只在进课时加载当前一门
  const drift = [];
  for (const id of ids) {
    try { await NB.preloadNotebook(id); } catch (e) { drift.push(id + "(加载失败)"); continue; }
    const nb = NB.loadNotebook(id) || {};
    const light = LIGHT.NOTEBOOK_NAMES[id] || {};
    if ((nb.topicNameEn || "") !== (light.en || "")) drift.push(`${id}.en`);
    if ((nb.topicNameCn || "") !== (light.cn || "")) drift.push(`${id}.cn`);
  }
  ok(`71 门课标题与笔记本逐字一致${drift.length ? " ← 漂移: " + drift.slice(0, 6).join(", ") + "（跑 node scripts/gen-notebook-light-index.mjs）" : ""}`,
     drift.length === 0);
}

console.log("\n── ③ 课程列表不能因按需加载而少课（回归红线）──");
{
  // 这一条是本次瘦身最容易踩的坑：buildPreviewTopic 若仍用 mastery 判存在性，
  // 列表页拿不到 notebook → 63 门 base-content 课全部消失。
  const available = T.getAvailableTopics();
  ok(`getAvailableTopics 返回非空（${available.length} 门）`, available.length > 0);
  ok("每门课都有可显示的标题（列表页只读 title/year/throughLine）",
     available.every((t) => t && t.title && (t.title.cn || t.title.en)));
  const noTitle = available.filter((t) => !t.title || (!t.title.cn && !t.title.en)).map((t) => t.id);
  ok(`没有标题为空的课${noTitle.length ? " ← " + noTitle.join(", ") : ""}`, noTitle.length === 0);

  // preview 课（靠笔记本兜底的那 63 门）必须在列表里
  const previews = available.filter((t) => t.isPreview);
  ok(`base-content preview 课仍在列表中（${previews.length} 门）`, previews.length > 0);
}

console.log("\n── ④ 课内数据在预加载后才需要就位 ──");
{
  // ②已把全部 notebook 预加载，此处 mastery 应可用
  const withMastery = T.TOPIC_REGISTRY
    .map((r) => T.getTopic(r.id))
    .filter((t) => t && t.isPreview && t.masteryChecks && t.masteryChecks.required);
  ok(`预加载后 preview 课能拿到 masteryChecks（${withMastery.length} 门）`, withMastery.length > 0);
}

console.log(`\n${fail === 0 ? "✅" : "❌"} ${pass} passed, ${fail} failed\n`);
process.exit(fail === 0 ? 0 : 1);

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

console.log("\n── ⑤ notebook chunk 加载失败时不得白屏（按需加载新增的失败面）──");
{
  // 按需加载引入了一个此前不存在的状态：hasNotebook=true 但 loadNotebook=null
  // （注册了、但 chunk 没拉下来 / 还没拉）。以前这两者是等价的，所有下游都默认
  // "有就一定拿得到"。现在必须逐个确认下游接得住 null，否则就是整页白屏。
  const fs = await import("node:fs");
  const read = (p) => fs.readFileSync(new URL("../" + p, import.meta.url), "utf8");

  // MasteryGate 是最危险的一处：topic.masteryChecks 对 63 门 base-content 课
  // 由 notebook 派生，加载失败 → undefined → 裸读 .required 直接 TypeError
  const mg = read("components/history-engine/MasteryGate.js");
  ok("MasteryGate 不裸读 topic.masteryChecks.required（裸读=整页白屏）",
     !/var checks = topic\.masteryChecks\.required/.test(mg));
  ok("MasteryGate 缺考核题时不调 onPass（那会没考核就判通过并发 XP）",
     !/!checks[\s\S]{0,400}props\.onPass/.test(mg));

  // 三个 notebook 消费点必须都对 null 有守卫
  for (const [f, marker] of [
    ["components/history-engine/CompletionScreen.js", /\{notebookData && \(/],
    ["pages/history/[topicId].js", /\{notebookData && notebookData\.preview && \(/],
    ["components/history-engine/ConceptReview.js", /if \(!notebookData \|\|/],
  ]) {
    ok(`${f.split("/").pop()} 对 notebookData=null 有守卫`, marker.test(read(f)));
  }

  // hasNotebook 必须是"查注册表"而不是"查已加载"——否则未加载时它会返回 false，
  // 课程列表和 UI 分支会误判成"这门课没有笔记本"
  ok("hasNotebook 未加载时仍返回 true（查注册表而非缓存）",
     NB.hasNotebook(ids[0]) === true);
}

console.log("\n── ⑥ 工具链不能被按需加载搞坏（Codex 复审抓到的两条）──");
{
  const fs = await import("node:fs");
  const read = (p) => fs.readFileSync(new URL("../" + p, import.meta.url), "utf8");

  // 生成器第一版忘了预加载 → 跑一次把 71 条标题全写成空 → 课程列表降级成原始 topicId，
  // 而且不报任何错。这是"修复文档说的正确操作反而毁掉文件"的陷阱。
  const gen = read("scripts/gen-notebook-light-index.mjs");
  ok("生成器读 notebook 前先 preload（否则会把标题全写空）",
     /await\s+NB\.preloadNotebook\(/.test(gen));
  ok("生成器有全空自检闸（产出垃圾比不产出更危险，会静默覆盖好文件）",
     /emptyTitles\.length === ids\.length/.test(gen));

  // 内容审计脚本仍 import 已删除的 STORYBOARDS/NOTEBOOKS → 模块加载即 SyntaxError，
  // 整套 SOP lint 静默失效（脚本根本没跑，看起来像"没问题"）
  for (const f of ["scripts/audit-engagement-hooks.mjs", "scripts/check-node-length.mjs", "scripts/check-cn-lens-leak.mjs"]) {
    const src = read(f);
    ok(`${f.split("/").pop()} 不再 import 已删除的注册表导出`,
       !/import \{[^}]*\b(STORYBOARDS|NOTEBOOKS)\b[^}]*\} from/.test(src));
  }

  // 客户端代码绝不能调全量加载（那会把 7.4MB/3.5MB 又拉回来，瘦身白做）
  for (const f of ["pages/history/[topicId].js", "pages/history/index.js",
                   "components/history-engine/CompletionScreen.js", "components/history-engine/ConceptReview.js",
                   "lib/history-topics.js", "lib/history-runtime.js"]) {
    ok(`${f.split("/").pop()} 未调用 loadAllStoryboards/loadAllNotebooks（会撤销瘦身）`,
       !/loadAll(Storyboards|Notebooks)\s*\(/.test(read(f)));
  }
}

console.log(`\n${fail === 0 ? "✅" : "❌"} ${pass} passed, ${fail} failed\n`);
process.exit(fail === 0 ? 0 : 1);

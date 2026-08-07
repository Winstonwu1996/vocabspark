/* 生成同伴笔记本「轻量标题索引」
   运行：node scripts/gen-notebook-light-index.mjs

   为什么要这个副本：完整 notebook 共 3.5MB，但课程列表只需要每门课的标题。
   之前 history-topics.js 静态引入全部 notebook 拿标题，把 4.19MB 拖进
   /history、/history/[topicId]、/atlas-lab 三个页面的客户端包。

   ⚠️ 改了任何 notebook 的 topicNameEn/topicNameCn 后重新跑本脚本。
   scripts/test-notebook-light-index.mjs 会在 npm test 时校验漂移。
*/
import fs from 'node:fs';

const NB = await import('../lib/history-storyboards/notebooks/index.js');
const ids = NB.listNotebookTopics();

// ⚠️ 必须先预加载：notebook 已改为按需加载，loadNotebook 读的是缓存。
// 少了这一步，71 条标题会全部生成为空字符串，课程列表随即降级成原始 topicId
// —— 而且**不报任何错**。（Codex 复审抓到，本脚本第一版就踩了。）
for (const id of ids) {
  await NB.preloadNotebook(id);
}

const rows = [];
const emptyTitles = [];
for (const id of ids) {
  const nb = NB.loadNotebook(id) || {};
  const en = nb.topicNameEn || '';
  const cn = nb.topicNameCn || '';
  if (!en && !cn) emptyTitles.push(id);
  rows.push(`  '${id}': { en: ${JSON.stringify(en)}, cn: ${JSON.stringify(cn)} },`);
}

// 自检闸：生成器产出垃圾比不生成更危险（会静默覆盖好文件）。
// 全空 = 几乎肯定是预加载/加载链坏了，宁可不写。
if (emptyTitles.length === ids.length) {
  console.error(`✗ 全部 ${ids.length} 门课标题为空 —— 加载链有问题，拒绝写入（旧文件保持不动）`);
  process.exit(1);
}
if (emptyTitles.length) {
  console.warn(`⚠️ ${emptyTitles.length} 门课标题为空: ${emptyTitles.slice(0, 5).join(', ')}`);
}

const out = `// ─── 同伴笔记本「轻量索引」（自动生成，勿手改）────────────────────────
// 生成脚本：scripts/gen-notebook-light-index.mjs
//
// 为什么存在：完整 notebook 共 3.5MB，但课程列表页(CourseBrowser)只需要每门课的**标题**。
// 此前 history-topics.js 静态引入全部 notebook 拿标题 → 4.19MB 被拖进
// /history、/history/[topicId]、/atlas-lab 三个页面的客户端包。
// 现在标题走这份 ~8KB 的索引，完整 notebook 改为按需加载。
//
// ⚠️ 改了任何 notebook 的 topicNameEn/topicNameCn 后必须重新生成：
//     node scripts/gen-notebook-light-index.mjs
//   scripts/test-notebook-light-index.mjs 会在 npm test 时校验两者一致，漂移会直接红。
export var NOTEBOOK_NAMES = {
${rows.join('\n')}
};

export var hasNotebookName = function(topicId) {
  return Boolean(topicId && NOTEBOOK_NAMES[topicId]);
};
`;

const dest = new URL('../lib/history-storyboards/notebooks/light-index.js', import.meta.url);
fs.writeFileSync(dest, out);
console.log(`✓ 生成 ${ids.length} 条标题，${Buffer.byteLength(out, 'utf8')} 字节`);

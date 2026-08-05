import fs from 'node:fs';
const NB = await import('../lib/history-storyboards/notebooks/index.js');
const ids = NB.listNotebookTopics();
const rows = ids.map(id => {
  const nb = NB.loadNotebook(id) || {};
  return `  '${id}': { en: ${JSON.stringify(nb.topicNameEn || '')}, cn: ${JSON.stringify(nb.topicNameCn || '')} },`;
}).join('\n');
const out = `// ─── 同伴笔记本「轻量索引」（自动生成，勿手改）────────────────────────
// 生成脚本：scripts/gen-notebook-light-index.mjs
//
// 为什么存在：完整 notebook 共 3.5MB，但课程列表页(CourseBrowser)只需要每门课的**标题**。
// 此前 history-topics.js 静态引入全部 notebook 拿标题 → 4.19MB 被拖进
// /history、/history/[topicId]、/atlas-lab 三个页面的客户端包。
// 现在标题走这份 ~6KB 的索引，完整 notebook 改为按需加载。
//
// ⚠️ 改了任何 notebook 的 topicNameEn/topicNameCn 后必须重新生成：
//     node scripts/gen-notebook-light-index.mjs
//   scripts/test-notebook-light-index.mjs 会在 npm test 时校验两者一致，漂移会直接红。
export var NOTEBOOK_NAMES = {
${rows}
};

export var hasNotebookName = function(topicId) {
  return Boolean(topicId && NOTEBOOK_NAMES[topicId]);
};
`;
fs.writeFileSync(new URL('../lib/history-storyboards/notebooks/light-index.js', import.meta.url), out);
console.log('生成', ids.length, '条，字节:', Buffer.byteLength(out,'utf8'));

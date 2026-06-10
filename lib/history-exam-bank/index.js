// ─── history exam-bank: AP 真题映射 + 原创仿真题 ────────────────────────
// realExamRefs  = College Board 官方真实考过的 FRQ (年份/题型/主题概括), 零原文复制。
// practiceQuestions = 我们按 AP 题型自研的仿真练习, 非真题。
// 数据按 topicId 分文件; 渲染见 components/history-engine/ExamBankSection.js。
// 覆盖全部 5★ + 4★ 课程 (32 门, 2026-06)。
// 懒加载: 只在选中某门时按需 import 该门数据, 不把全部 32 门打进 review chunk。

var LOADERS = {
  // 5★
  'age-of-exploration-1492': function() { return import('./age-of-exploration-1492.js'); },
  'enlightenment': function() { return import('./enlightenment.js'); },
  'french-revolution-1789': function() { return import('./french-revolution-1789.js'); },
  'industrial-revolution-1800': function() { return import('./industrial-revolution-1800.js'); },
  'scramble-for-africa-1884': function() { return import('./scramble-for-africa-1884.js'); },
  'world-war-two-1942': function() { return import('./world-war-two-1942.js'); },
  'cold-war-1962': function() { return import('./cold-war-1962.js'); },
  'constitutional-convention-1787': function() { return import('./constitutional-convention-1787.js'); },
  'slavery-abolition-1850': function() { return import('./slavery-abolition-1850.js'); },
  'civil-war-1861': function() { return import('./civil-war-1861.js'); },
  'civil-rights-1965': function() { return import('./civil-rights-1965.js'); },
  'asian-imperialism-1839': function() { return import('./asian-imperialism-1839.js'); },
  // 4★
  'islamic-rise': function() { return import('./islamic-rise.js'); },
  'tang-song-china': function() { return import('./tang-song-china.js'); },
  'mongol-empire': function() { return import('./mongol-empire.js'); },
  'renaissance-1500': function() { return import('./renaissance-1500.js'); },
  'reformation-1517': function() { return import('./reformation-1517.js'); },
  'gunpowder-empires-1600': function() { return import('./gunpowder-empires-1600.js'); },
  'world-war-one-1914': function() { return import('./world-war-one-1914.js'); },
  'decolonization-1960': function() { return import('./decolonization-1960.js'); },
  'american-revolution-1776': function() { return import('./american-revolution-1776.js'); },
  'hamilton-jefferson-1790s': function() { return import('./hamilton-jefferson-1790s.js'); },
  'reconstruction-1877': function() { return import('./reconstruction-1877.js'); },
  'gilded-age-1890': function() { return import('./gilded-age-1890.js'); },
  'progressive-era-1910': function() { return import('./progressive-era-1910.js'); },
  'great-depression-1933': function() { return import('./great-depression-1933.js'); },
  'haitian-revolution-1791': function() { return import('./haitian-revolution-1791.js'); },
  'meiji-restoration-1868': function() { return import('./meiji-restoration-1868.js'); },
  'russian-revolution-1917': function() { return import('./russian-revolution-1917.js'); },
  'trade-networks-1200': function() { return import('./trade-networks-1200.js'); },
  'latin-american-independence-1810': function() { return import('./latin-american-independence-1810.js'); },
  'vietnam-war-1965': function() { return import('./vietnam-war-1965.js'); },
};

export function hasExamBank(topicId) {
  return !!LOADERS[topicId];
}

// 异步: 返回 Promise<bank | null>。调用方需 await / .then。
export function loadExamBank(topicId) {
  var loader = LOADERS[topicId];
  if (!loader) return Promise.resolve(null);
  return loader().then(function(m) { return m.default || m; });
}

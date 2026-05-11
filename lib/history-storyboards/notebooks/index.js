// ─── 同伴笔记本索引 v1 ───────────────────────────
// Registry for Companion Notebook architecture (Xiaowei's Notebook).
//
// 每个 Topic 一个 notebook 文件，导出 { notebook, default }。
// 此处只做 registry 注册 + 三个 helper：hasNotebook / loadNotebook / listNotebookTopics。

import * as enlightenmentNotebook from './enlightenment.js';

export var NOTEBOOKS = {
  'enlightenment': enlightenmentNotebook,
};

export var hasNotebook = function (topicId) {
  return Boolean(NOTEBOOKS[topicId]);
};

export var loadNotebook = function (topicId) {
  var mod = NOTEBOOKS[topicId];
  if (!mod) return null;
  return mod.default || mod.notebook;
};

export var listNotebookTopics = function () {
  return Object.keys(NOTEBOOKS);
};

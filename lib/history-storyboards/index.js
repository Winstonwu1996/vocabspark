// ─── History Storyboards Index ──────────────────────────────────
//
// Story-First Pedagogy 模型（见 docs/STORY_FIRST_PEDAGOGY.md）
//
// 每个 Topic 一份 storyboard——按 Topic ID 索引——
// 灰度迁移：现有 conversationTurns 保留兼容——新模型用 storyboard——
// 见 lib/history-prompts.js → 优先 storyboard / 没有 fallback conversationTurns
//
// 当前迁移进度：
//   ✅ magna-carta-1215    storyboard v0（POC）
//   ⏳ crusades-1099       待 review POC 后迁移
//   ⏳ black-death-1347    待
//   ⏳ renaissance-1500    待
//   ⏳ reformation-1517    待
//   ⏳ age-of-exploration-1492 待
//   ⏳ mali-empire-1235    待

import magnaCarta1215 from './magna-carta-1215.js';

export var STORYBOARDS = {
  'magna-carta-1215': magnaCarta1215,
};

// 检查 Topic 是否有 storyboard（决定走新模型 or 旧 conversationTurns）
export var hasStoryboard = function(topicId) {
  return Boolean(STORYBOARDS[topicId]);
};

// 加载 storyboard
export var loadStoryboard = function(topicId) {
  if (!STORYBOARDS[topicId]) {
    throw new Error('Storyboard not found for topic: ' + topicId);
  }
  return STORYBOARDS[topicId];
};

// 列出所有有 storyboard 的 Topic ID
export var listStoryboards = function() {
  return Object.keys(STORYBOARDS);
};

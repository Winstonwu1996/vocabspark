// ─── history-runtime — Story-First Pedagogy 运行时适配器 ─────────
//
// 桥接：旧的 conversationTurns 数据 ←→ 新的 storyboard 数据
// 目标：让 pages/history.js 的代码不需要大改——
// 通过统一接口拿到当前 turn / 当前 node，按需调用对应 prompt builder
//
// 用法：
//   var effectiveTurns = getEffectiveTurns(topicId, topicData);
//   var turn = effectiveTurns[turnIndex];
//   if (turn._storyboardNode) {
//     // 走 Story-First 新模型
//     prompt = buildStoryboardTurnPrompt(turn._storyboardNode, ...)
//   } else {
//     // 走旧 conversationTurns 模型
//     prompt = buildNarrativeTurnPrompt(turn, ...)
//   }

import { hasStoryboard, hasLenses, loadStoryboard, listLenses, getLensMeta } from './history-storyboards/index.js';

// ─── 把 storyboard 节点 map 成 turn-like shape ──
//
// 旧 conversationTurns 字段：
//   { n, role, move, ai_seed, expectsInput, inputPrompt, autoAdvance, ... }
//
// 新 storyboard 节点字段：
//   { id, phase, cosplay, narrativeRef, deliverGoal, engagementHook,
//     expectedLength, expectsRealAnswer }
//
// 映射规则：
//   n              ← node.id
//   role           ← 'ai'（storyboard 全部是 AI 输出节点；用户输入随时进）
//   move           ← node.phase（hook/story/synthesis/meta）
//   expectsInput   ← node.expectsRealAnswer（synthesis/meta 等真答；其他用 engagement hook 不强制）
//   autoAdvance    ← false（永远等用户点继续 or 输入——保持节奏控制权在用户）
//   inputPrompt    ← node.engagementHook（提示用户当前钩子）
//   _storyboardNode ← 原节点（让 prompt builder 拿到）
var nodeToTurn = function(node) {
  return {
    n: node.id,
    role: 'ai',
    move: node.phase,
    expectsInput: !!node.expectsRealAnswer,
    autoAdvance: false,
    inputPrompt: node.engagementHook,
    _storyboardNode: node,
    // ⭐ Opus prewritten content（如果有）——runtime 可直接交付，跳过 AI 生成
    _prewrittenContent: node.content || null,
  };
};

// ─── 拿到 prewritten content（按用户语言）──
// 调用方：pages/history.js 在 fetch 当前轮 AI 回复前先 check
// 如有 prewritten → 直接 push 到 conversationLog，跳过 callAPIStream
export var getPrewrittenContent = function(turn, lang) {
  if (!turn || !turn._prewrittenContent) return null;
  lang = lang || 'cn';
  return turn._prewrittenContent[lang] || turn._prewrittenContent.cn || null;
};

// ─── 主 API：拿到 Topic 的"有效 turn 数组" ──
// 优先 storyboard——没有 storyboard 时 fallback 到 topic.conversationTurns
// v2 支持 lens 选择：getEffectiveTurns(topicId, topicData, 'king-john')
export var getEffectiveTurns = function(topicId, topicData, lensId) {
  if (hasStoryboard(topicId)) {
    var sb = loadStoryboard(topicId, lensId);
    return sb.map(nodeToTurn);
  }
  return (topicData && topicData.conversationTurns) || [];
};

// ─── v2 lens 相关 API（pages/history.js 用）──
export var hasTopicLenses = function(topicId) {
  return hasLenses(topicId);
};
export var getTopicLenses = function(topicId) {
  return listLenses(topicId);
};
export var getTopicLensMeta = function(topicId, lensId) {
  return getLensMeta(topicId, lensId);
};

// ─── 检查 Topic 是否走 Story-First 新模型 ──
export var isStoryboardTopic = function(topicId) {
  return hasStoryboard(topicId);
};

// ─── 根据 effective turn 拿到 storyboard node（如果有）──
export var getStoryboardNode = function(turn) {
  return (turn && turn._storyboardNode) || null;
};

// ─── 拿到 storyboard 完整 + 当前位置 + 进度 ──
export var getStoryboardProgress = function(topicId, turnIndex) {
  if (!hasStoryboard(topicId)) return null;
  var sb = loadStoryboard(topicId);
  return {
    currentNodeIdx: turnIndex,
    currentNode: sb[turnIndex] || null,
    nextNode: sb[turnIndex + 1] || null,
    totalNodes: sb.length,
    phase: (sb[turnIndex] || {}).phase || 'unknown',
    isComplete: turnIndex >= sb.length,
  };
};

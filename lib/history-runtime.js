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
import { getSourcingBridge } from './history-storyboards/sourcing-bridges.js';

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
// ─── N6 检索门（5-22 teach 重设计 / Package 2）──────────────────────
// 学习科学审计：teach 全程零检索练习，所有输出延到 N11-N12。在"拐点"
// （角色核心张力已立、事件考验还没开始）插一次生成式检索，激活 schema。
// 用 idx===5（N6, 0-based）。只在 lens 足够长（>=9 节）时启用，避免短 lens
// 太靠近结尾。不插节点——只翻 expectsInput，turnIndex 语义不变（零数据风险）。
var RETRIEVAL_GATE_IDX = 5;
var RETRIEVAL_GATE_MIN_NODES = 9;
var RETRIEVAL_PROMPT =
  '停一下，先别急着往下看。到这里为止，这个人面对的最核心的矛盾或选择是什么？' +
  '凭印象用一句话写下来 —— 不用往回翻，写错也没关系（中英文都行）。';

var nodeToTurn = function(node, idx, allNodes, topicId, lensId) {
  var total = allNodes ? allNodes.length : null;
  var isRetrievalGate = (idx === RETRIEVAL_GATE_IDX)
    && total >= RETRIEVAL_GATE_MIN_NODES
    && !node.expectsRealAnswer;
  // N10 双 lens sourcing bridge（Package 3）——in-place，不插节点
  var bridge = (topicId && !node.expectsRealAnswer)
    ? getSourcingBridge(topicId, lensId, idx) : null;
  // ─── 5-26 P0 (Codex 复核): 单 lens 输入门 ≤2 节流 ─────────────────
  // 用户实测「快速回想」类互动一个 lens 出现 3+ 次, 密度过大 → 只保留:
  //   ① N6 retrieval gate (本来就 1 个固定的 cross-lens 检索)
  //   ② lens 末节 (最后一个 expectsRealAnswer 节点, 通常 N11 或 N12)
  // 中间所有 expectsRealAnswer 节点 + sourcing bridge 一律压成只读 (继续滚动而不需输入)。
  // 数据字段 (_sourcingBridge / _storyboardNode 等) 仍生成, 渲染层可独立显示叙事卡片。
  var lastExpectsIdx = -1;
  if (allNodes) {
    for (var i = 0; i < allNodes.length; i++) {
      if (allNodes[i].expectsRealAnswer) lastExpectsIdx = i;
    }
  }
  var isLastExpects = !!node.expectsRealAnswer && idx === lastExpectsIdx;
  // Schema B（enlightenment 的两个 lens + medieval-japan/tokimune-defender，共 36 节点）
  // 只写了 nodeId 没写 id。此前 n 直接取 node.id → 全为 undefined，而页面按
  // `conversationLog.find(e => e.turn === turn.n)` 去重：第 1 节记下 undefined 之后，
  // 后续每节都命中 `undefined === undefined` → 第 2-12 节永不渲染，课程停在第一屏。
  // 受害的是 enlightenment 的 **默认 lens**（5★ 必学核心课）。
  // 下面 _nodeId 早就写了同款兜底，这里漏了。
  var nodeKey = node.id || node.nodeId || null;
  // 同一批节点把正文写在 bodyCn/bodyEn 而非 content，导致 12×2 节已审校的授权正文
  // 从不投递、改由 AI 从空脚手架现编（史实失控 + 白烧 token）。这里归一化成 {cn,en}。
  var prewritten = node.content
    || ((node.bodyCn || node.bodyEn) ? { cn: node.bodyCn || null, en: node.bodyEn || null } : null);
  return {
    n: nodeKey,
    role: 'ai',
    move: node.phase,
    expectsInput: isRetrievalGate || isLastExpects,
    autoAdvance: false,
    inputPrompt: bridge ? null : (isRetrievalGate ? RETRIEVAL_PROMPT : node.engagementHook),
    _storyboardNode: node,
    // ⭐ Opus prewritten content（如果有）——runtime 可直接交付，跳过 AI 生成
    _prewrittenContent: prewritten,
    // ── 5-22 teach 重设计：归一化字段（纯附加，render-time only，不进存档）──
    //   两套 schema 统一出口：
    //     Schema A (13 topics): engagementHook（反思问句）
    //     Schema B (enlightenment / 部分 medieval-japan): themeCn/themeEn（带走一句）
    //   下游 UI 用 _themeCn ?? _hook 兜底，做到 15 topic 全覆盖、零新内容
    _idx: typeof idx === 'number' ? idx : null,
    _total: allNodes ? allNodes.length : null,
    _nodeId: node.nodeId || node.id || null,
    _themeCn: node.themeCn || null,
    _themeEn: node.themeEn || null,
    _hook: node.engagementHook || null,
    _crossLensHook: node.crossLensHook || null,
    _retrievalGate: isRetrievalGate,
    _sourcingBridge: bridge,
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
    return sb.map(function(node, idx) { return nodeToTurn(node, idx, sb, topicId, lensId); });
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

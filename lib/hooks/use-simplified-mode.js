// lib/hooks/use-simplified-mode.js
//
// Single source of truth for "simplified UI mode" decision in /history pages.
// 5-5 founder rule (R5 systemic): simplifiedMode 计算散在 IntroScreen / GeographySection /
// LensSelector / Walkthrough trigger / CN-EN toggle 等多处, 容易 drift.
// 所有"是否要 simplify UI"的判断都走这个 hook.
//
// Inputs:
//   - pendingRole: localStorage-loaded role object (异步, 首次 render 可能 null)
//   - embedded: state set after URL parse (异步)
//   - fromAtlas: state set after URL parse (异步)
//   - hasLensesForTopic: synchronous lookup
//
// Outputs:
//   - simplifiedMode: bool — 隐藏 ThroughLineMap / Geography(主组件)/ "AI 英文比例" 三档 toggle
//   - hideEnglishLevelToggle: bool — IntroScreen 三档无效, conversation 二档保留
//   - skipWalkthrough: bool — atlas/embedded/role 流程下不弹 Walkthrough
//   - skipProfileBlock: bool — atlas/embedded/role 流程下自动 placeholder profile, 不阻塞 setup
//   - hasPendingRole: derived bool

import { useMemo } from 'react';

export function useSimplifiedMode(opts) {
  opts = opts || {};
  var pendingRole = opts.pendingRole;
  var embedded = opts.embedded;
  var fromAtlas = opts.fromAtlas;
  var hasLensesForTopic = !!opts.hasLensesForTopic;

  return useMemo(function () {
    var hasPendingRole = !!(pendingRole && pendingRole.figure);
    // 同步 URL fallback — 覆盖首次 render 时 state 还没 set 的 race condition
    var urlFlags = (typeof window !== 'undefined') ? new URLSearchParams(window.location.search) : null;
    var urlEmbedded = !!(urlFlags && urlFlags.get('embedded') === '1');
    var urlFromAtlas = !!(urlFlags && urlFlags.get('from') === 'atlas');
    var urlRole = !!(urlFlags && urlFlags.get('role') === '1');

    var isEmbedded = !!embedded || urlEmbedded;
    var isFromAtlas = !!fromAtlas || urlFromAtlas;
    var hasRoleFlag = urlRole;

    var simplifiedMode = hasPendingRole || isEmbedded || isFromAtlas || hasRoleFlag;

    return {
      hasPendingRole: hasPendingRole,
      isEmbedded: isEmbedded,
      isFromAtlas: isFromAtlas,
      simplifiedMode: simplifiedMode,
      // englishLevel 三档 (low/balanced/high) 在 lens 模式下只用 cn/en 二档,toggle 冗余
      // (注:conversation 顶部的二档 EN/中 toggle 不受这个影响,那个是 lens 用的核心切换)
      hideEnglishLevelToggle: simplifiedMode || hasLensesForTopic,
      skipWalkthrough: isEmbedded || isFromAtlas || hasRoleFlag,
      skipProfileBlock: isEmbedded || isFromAtlas || hasRoleFlag,
    };
  }, [pendingRole, embedded, fromAtlas, hasLensesForTopic]);
}

// ─── history-engine: HistoryProToolsMount (Step 10 · 静态可 import 的本地 loader) ──
// history 首页静态 import 本文件 (本文件无 membership, 只有 react + 动态 import())。
// 内部懒加载 HistoryProTools (含 useUserTier → membership)。
//
// flag off 时首页不渲染 <HistoryProToolsMount/> → 本组件不挂载 → import('./HistoryProTools')
// 永不触发 → membership/useUserTier 不进 flag-off 运行路径, 首页 bundle 零 paywall 依赖。
//
// 这是纯增量 UI (Pro 工具区): 懒块加载失败时静默不渲染 (无 fallback modal) —— 不影响选课。
import React, { useState, useEffect } from 'react';

export function HistoryProToolsMount() {
  var [Tools, setTools] = useState(null);
  useEffect(function () {
    var mounted = true;
    import('./HistoryProTools').then(function (m) {
      if (mounted) setTools(function () { return m.HistoryProTools; });
    }).catch(function () { /* 静默: Pro 工具区只是增量, 加载失败不阻塞选课 */ });
    return function () { mounted = false; };
  }, []);

  if (Tools) return <Tools />;
  return null;
}

export default HistoryProToolsMount;

// ─── AtlasUpgradeMount (Step 4b-2 · 静态可 import 的本地 loader) ───────────
// AtlasLabPage 静态 import 本文件 (本文件无 membership, 只有 react + 动态 import())。
// flag-off 时父页不渲染 <AtlasUpgradeMount/> → 内部 import('./AtlasUpgradeModal') 永不触发
// → UpgradeModal/history-tiers 不进 flag-off Atlas 运行路径 (同 CourseGateMount 隔离模式)。
import React, { useState, useEffect } from 'react';

export function AtlasUpgradeMount(props) {
  var [Modal, setModal] = useState(null);
  useEffect(function () {
    var mounted = true;
    import('./AtlasUpgradeModal').then(function (m) {
      if (mounted) setModal(function () { return m.AtlasUpgradeModal; });
    }).catch(function () {
      // 懒块加载失败: 不卡 Atlas, 直接关 (父页 onClose 清 gateDenied)。
      if (mounted && typeof props.onClose === 'function') props.onClose();
    });
    return function () { mounted = false; };
  }, []);
  if (!Modal) return null;
  return <Modal {...props} />;
}

export default AtlasUpgradeMount;

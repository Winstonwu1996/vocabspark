// ─── AtlasUpgradeModal (Step 4b-2 · 父页升级 modal · 懒加载目标) ───────────
// iframe 内子页被 tier 拒 → postMessage 回父页 → 父页关 iframe → 渲染本 modal。
//
// 纯展示: 只需 message 带来的 requiredTier + 纯函数 counts, **不调 useUserTier / 无 membership**。
// 经 AtlasUpgradeMount 懒加载, flag-off 时父页不渲染 → 本块永不进 Atlas 运行路径。
import React from 'react';
import { useRouter } from 'next/router';
import { TOPIC_REGISTRY } from '../lib/history-topics';
import { getAccessibleTopicCounts } from '../lib/history-tiers';
import { UpgradeModal } from './history-engine/UpgradeModal';

export function AtlasUpgradeModal(props) {
  var router = useRouter();
  var availableIds = (TOPIC_REGISTRY || [])
    .filter(function (r) { return r.available; })
    .map(function (r) { return r.id; });
  return (
    <UpgradeModal
      reason={props.reason || 'locked-course'}
      requiredTier={props.requiredTier || 'basic'}
      counts={getAccessibleTopicCounts(availableIds)}
      onClose={props.onClose}
      onUpgrade={function () { router.push('/plan'); }} // 父页非 iframe, 整页跳转正确
    />
  );
}

export default AtlasUpgradeModal;

// ─── history-engine: CourseGate (Step 4b-1 · flag on 才懒加载挂载) ────
// 进课 tier gate 的"决策上报 + 升级 modal"组件。
//
// 隔离原则 (同 Step 4a P0-1): useUserTier → membership 全在本文件, 经
// CourseGateMount 懒加载, flag off 时永不挂载 → useUserTier 永不调用 →
// 无新 /api/stripe/check-subscription 请求 (播放器页 supabase 是 baseline, 不在本范围)。
//
// hooks 规则: useUserTier 在本组件顶层无条件调用 (不在 handler / 条件里)。
// 决策结论通过 onAccessChange 上报给播放器页, 由页面在「开始学习」时据此放行/拦截。
import React, { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { TOPIC_REGISTRY } from '../../lib/history-topics';
import { loadAll } from '../../lib/history-storage';
import { useUserTier } from '../../lib/membership';
import { computeGateAccess, getTopicAccessTier, getAccessibleTopicCounts } from '../../lib/history-tiers';
import { UpgradeModal } from './UpgradeModal';

/**
 * @param {object} props
 *   - topicId, lensId        当前课 / 视角
 *   - onAccessChange(access) 上报 gate 结论 ('loading'|'allow'|'view-only-grandfathered'|'deny'|'error-blocked')
 *   - showModal              页面判定「用户点了进课但被拦」时置 true → 渲染 UpgradeModal
 *   - onCloseModal()         关闭 modal
 */
export function CourseGate(props) {
  var topicId = props.topicId;
  var lensId = props.lensId;
  var tierInfo = useUserTier();
  var router = useRouter();

  // learningReceipts (grandfather 用) — 读一次, topicId/lensId 变才重读
  var learningReceipts = useMemo(function () {
    try {
      var all = loadAll();
      return (all && all.historyData && all.historyData.learningReceipts) || null;
    } catch (e) { return null; }
  }, [topicId, lensId]);

  var access = computeGateAccess(tierInfo, topicId, lensId, learningReceipts);

  // 上报 gate 结论给播放器页 — 带 topicId/lensId 标签 (Codex P1: 防 stale,
  // 播放器页据此判断结论是否对应"当前"topic+lens, 不吃旧 lens 的陈旧 allow)。
  useEffect(function () {
    if (typeof props.onAccessChange === 'function') props.onAccessChange(access, topicId, lensId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access, topicId, lensId]);

  if (!props.showModal) return null;

  var availableIds = (TOPIC_REGISTRY || [])
    .filter(function (r) { return r.available; })
    .map(function (r) { return r.id; });

  return (
    <UpgradeModal
      reason="locked-course"
      requiredTier={getTopicAccessTier(topicId)}
      counts={getAccessibleTopicCounts(availableIds)}
      onClose={props.onCloseModal}
      onUpgrade={function () { router.push('/plan'); }}
    />
  );
}

export default CourseGate;

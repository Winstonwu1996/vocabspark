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

  // learningReceipts (grandfather 用) — topicId/lensId 变重读。
  // Codex P2-e (round5): 把 tier 信息列为依赖。否则学完当前 lens (saveLearningReceipt
  // 写了 localStorage) 后, 若 tier poll 把同一挂载页转档 (退订/到期/订阅 API 故障/降级),
  // 这个 memo 仍是完成前的旧快照 → computeGateAccess 看不到刚存的 receipt → 误 deny 而非
  // view-only-grandfathered。tier 转档正是 grandfather 被调用的时机, 此时重读即可接住。
  // Codex (round6) 修正: 不能只依赖 state —— Pro→Basic 降级时 state 仍是 'active' 只有 tier 变,
  //   会漏掉重读。故 state + tier 都入依赖。
  var tierState = tierInfo && tierInfo.state;
  var tierTier = tierInfo && tierInfo.tier;
  var learningReceipts = useMemo(function () {
    try {
      var all = loadAll();
      return (all && all.historyData && all.historyData.learningReceipts) || null;
    } catch (e) { return null; }
  }, [topicId, lensId, tierState, tierTier]);

  var access = computeGateAccess(tierInfo, topicId, lensId, learningReceipts);

  // 上报 gate 结论给播放器页 — 带 topicId/lensId 标签 (Codex P1: 防 stale,
  // 播放器页据此判断结论是否对应"当前"topic+lens, 不吃旧 lens 的陈旧 allow)。
  useEffect(function () {
    if (typeof props.onAccessChange === 'function') props.onAccessChange(access, topicId, lensId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access, topicId, lensId]);

  // Step 4b-2 (方案 B / Codex round10 P2-h): 在 Atlas iframe 内被真 deny 时, 不在小框里渲染
  // 子页 UpgradeModal / 不 router.push('/plan') (那会把方案页挤进 iframe), 而是 postMessage
  // 回父页 → 父页关 iframe + 在 Atlas 层弹升级。error-blocked (网络失败) 不回传, 仍在 iframe
  // 内显示网络重试 modal (是网络问题, 不是 tier 拒绝)。
  var inIframe = typeof window !== 'undefined' && window.parent && window.parent !== window;
  var goesToParent = !!props.embedded && inIframe && access === 'deny';
  useEffect(function () {
    if (!props.showModal || !goesToParent) return;
    try {
      window.parent.postMessage({
        source: 'history-engine',
        type: 'gate-denied',
        topicId: topicId,
        requiredTier: getTopicAccessTier(topicId),
      }, '*');
    } catch (e) {}
    if (typeof props.onCloseModal === 'function') props.onCloseModal(); // 关子页 modal, 父页接管
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.showModal, goesToParent, topicId]);

  if (!props.showModal) return null;
  if (goesToParent) return null; // 嵌入态真 deny: 交父页弹升级, iframe 内不渲染

  // 升级动作: 嵌入态 (iframe) → 回传父页 (同 P2-h, 父页关 iframe + 整页弹升级);
  // 非嵌入 → 整页跳 /plan。view-only 占位屏 / UpgradeModal 共用。
  var doUpgrade = function () {
    if (props.embedded && inIframe) {
      try {
        window.parent.postMessage({
          source: 'history-engine', type: 'gate-denied',
          topicId: topicId, requiredTier: getTopicAccessTier(topicId),
        }, '*');
      } catch (e) {}
      if (typeof props.onCloseModal === 'function') props.onCloseModal();
    } else {
      router.push('/plan');
    }
  };

  // Step 4b-3 (方案 A): view-only-grandfathered = 缺 tier 但已学过 → 只读占位屏。
  // 不回放原始对话 (transcript 未按 lens 存), 给「已学过 ✓ + 重新学需升级」。
  if (access === 'view-only-grandfathered') {
    return (
      <ViewOnlyGrandfatherModal
        requiredTier={getTopicAccessTier(topicId)}
        onUpgrade={doUpgrade}
        onClose={props.onCloseModal}
      />
    );
  }

  // Codex P2-g (round10): error-blocked (tier 查询 API 耗尽重试) 不是真 deny —— 用户可能是
  // 已付费会员, 只是 check-subscription 临时故障。不能弹「升级」modal (误导付费用户 + 无重试)。
  // 改弹网络重试提示, 把 UpgradeModal 留给真正的 tier deny。
  // (注: round7 已处理 chunk 加载失败的同类提示, 那条在 CourseGateMount; 这条是 tier 查询失败,
  //  chunk 已加载, 在本组件处理。)
  if (access === 'error-blocked') {
    return <GateNetworkErrorModal onClose={props.onCloseModal} />;
  }

  var availableIds = (TOPIC_REGISTRY || [])
    .filter(function (r) { return r.available; })
    .map(function (r) { return r.id; });

  return (
    <UpgradeModal
      reason="locked-course"
      requiredTier={getTopicAccessTier(topicId)}
      counts={getAccessibleTopicCounts(availableIds)}
      onClose={props.onCloseModal}
      onUpgrade={doUpgrade}
    />
  );
}

// Step 4b-3 (方案 A): grandfather 只读占位屏。已学过但缺 tier 的 lens —— 给可见确认 + 重学升级入口。
// 故意不回放原始对话 (transcript 未按 lens 存; 见 docs/STEP_4B3_GRANDFATHER_DESIGN.md)。自包含, 无 membership。
function ViewOnlyGrandfatherModal(props) {
  // Codex round1 P2-b: requiredTier 'free'/'guest' 时只需免费账号/登录, 不是付费升级 ——
  // 不能误标 "升级 Basic"。区分免费账号 vs 付费两档文案。
  var rt = props.requiredTier;
  var isFreeAcct = (rt === 'free' || rt === 'guest');
  var tierName = (rt === 'pro') ? 'Pro' : 'Basic';
  var bodyText = isFreeAcct
    ? '这个视角你之前完成过,一直为你保留。想重新学一遍,登录一个免费账号就行。'
    : ('这个视角你之前完成过,一直为你保留。想重新学一遍,需要升级到 ' + tierName + '。');
  var ctaText = isFreeAcct ? '登录免费账号重新学' : ('升级 ' + tierName + ' 重新学');
  var overlay = {
    position: 'fixed', inset: 0, zIndex: 2300, background: 'rgba(28,22,18,0.55)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
  };
  var card = {
    background: '#fffdf8', borderRadius: 16, padding: '24px 22px', maxWidth: 360,
    width: '100%', boxShadow: '0 12px 40px rgba(0,0,0,0.28)', textAlign: 'center',
    fontFamily: 'inherit', color: '#2c2420',
  };
  var primaryBtn = {
    width: '100%', padding: '11px 0', borderRadius: 999, border: 'none',
    background: '#c46b30', color: '#fff8e8', fontSize: 15, fontWeight: 600,
    cursor: 'pointer', fontFamily: 'inherit', marginBottom: 10,
  };
  var ghostBtn = {
    width: '100%', padding: '9px 0', borderRadius: 999,
    border: '1px solid rgba(44,36,32,0.2)', background: 'transparent',
    color: '#6b5b50', fontSize: 14, cursor: 'pointer', fontFamily: 'inherit',
  };
  return (
    <div style={overlay} onClick={props.onClose}>
      <div style={card} onClick={function (e) { e.stopPropagation(); }}>
        <div style={{ fontSize: 30, marginBottom: 10 }}>✓</div>
        <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>你已经学过这个视角</div>
        <div style={{ fontSize: 13.5, lineHeight: 1.6, color: '#6b5b50', marginBottom: 18 }}>
          {bodyText}
        </div>
        <button style={primaryBtn} onClick={props.onUpgrade}>{ctaText}</button>
        <button style={ghostBtn} onClick={props.onClose}>先这样</button>
      </div>
    </div>
  );
}

// 自包含网络重试提示 — tier 查询失败 (error-blocked) 时显示, 人话 + 刷新入口, 不弹升级。
function GateNetworkErrorModal(props) {
  function reload() {
    if (typeof window !== 'undefined' && window.location) window.location.reload();
  }
  var overlay = {
    position: 'fixed', inset: 0, zIndex: 2300, background: 'rgba(28,22,18,0.55)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
  };
  var card = {
    background: '#fffdf8', borderRadius: 16, padding: '24px 22px', maxWidth: 340,
    width: '100%', boxShadow: '0 12px 40px rgba(0,0,0,0.28)', textAlign: 'center',
    fontFamily: 'inherit', color: '#2c2420',
  };
  var primaryBtn = {
    width: '100%', padding: '11px 0', borderRadius: 999, border: 'none',
    background: '#c46b30', color: '#fff8e8', fontSize: 15, fontWeight: 600,
    cursor: 'pointer', fontFamily: 'inherit', marginBottom: 10,
  };
  var ghostBtn = {
    width: '100%', padding: '9px 0', borderRadius: 999,
    border: '1px solid rgba(44,36,32,0.2)', background: 'transparent',
    color: '#6b5b50', fontSize: 14, cursor: 'pointer', fontFamily: 'inherit',
  };
  return (
    <div style={overlay} onClick={props.onClose}>
      <div style={card} onClick={function (e) { e.stopPropagation(); }}>
        <div style={{ fontSize: 30, marginBottom: 10 }}>📡</div>
        <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>网络好像有点不稳</div>
        <div style={{ fontSize: 13.5, lineHeight: 1.6, color: '#6b5b50', marginBottom: 18 }}>
          暂时没法确认你的会员状态。刷新一下页面通常就好了。
        </div>
        <button style={primaryBtn} onClick={reload}>刷新重试</button>
        <button style={ghostBtn} onClick={props.onClose}>先不了</button>
      </div>
    </div>
  );
}

export default CourseGate;

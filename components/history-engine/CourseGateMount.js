// ─── history-engine: CourseGateMount (Step 4b-1 · 静态可 import 的本地 loader) ──
// 播放器页静态 import 本文件 (本文件无 membership/supabase, 只有 react + 动态 import())。
// 内部懒加载 CourseGate (含 useUserTier → membership)。
//
// flag off 时播放器页不渲染 <CourseGateMount/> → 本组件不挂载 → useEffect 里的
// import('./CourseGate') 永不触发 → membership/useUserTier 不进 flag-off 运行路径。
// (同 Step 4a CourseBrowserPaywallLoader 验证过的本地 loader 模式, 不用 dynamic ssr:false。)
import React, { useState, useEffect } from 'react';
// getTopicAccessTier 来自 history-tiers (纯模块, 无 membership/supabase) — 用于懒块加载
// 失败时算 fail-closed/open fallback。安全静态 import (不引入 paywall runtime)。
import { getTopicAccessTier } from '../../lib/history-tiers';

export function CourseGateMount(props) {
  var [Gate, setGate] = useState(null);
  var [importFailed, setImportFailed] = useState(false);
  useEffect(function () {
    var mounted = true;
    import('./CourseGate').then(function (m) {
      if (mounted) setGate(function () { return m.CourseGate; });
    }).catch(function () {
      if (mounted) setImportFailed(true); // 落定到 state, 由下方 effect 据当前 topic/lens 上报
    });
    return function () { mounted = false; };
  }, []);

  // Codex P2 (round2→5): 懒块加载失败的 fallback 上报。
  // round2: 懒块失败时 gate 永不上报 → freshGateAccess 永远 'loading' → 挂起点击卡死, 需上报。
  // round3: 本路径跑在 useUserTier **之前**, 不知用户身份 (游客/注册 free/付费) → 不能把
  //   'free' 课判 allow (会让未注册游客进「注册才可学」的 free 课)。只 guest 试用课对所有人
  //   开放 → allow; 其余 fail-closed 'error-blocked' (留 IntroScreen, A1 设计)。
  // round5: 必须随 topicId/lensId 变**重新上报** —— 否则 chunk 失败后用户切课/切 lens,
  //   旧标签结论对新 lens 算 'loading' → gateChecking 永不解除卡死。故依赖列表含 topic/lens。
  useEffect(function () {
    if (!importFailed) return;
    if (typeof props.onAccessChange !== 'function') return;
    var req = getTopicAccessTier(props.topicId);
    var fallback = (req === 'guest') ? 'allow' : 'error-blocked';
    props.onAccessChange(fallback, props.topicId, props.lensId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [importFailed, props.topicId, props.lensId]);

  if (Gate) return <Gate {...props} />;

  // Codex P2 (round7): 懒块加载失败 + 用户已点进课被拦 (showModal) → Gate 仍 null,
  // UpgradeModal 无法渲染 → 「开始学习」点了像没反应。渲染自包含 fallback 提示 (不依赖
  // 失败的 chunk, 无 membership), 给用户反馈 + 刷新重试入口。仅在被拦时显示, 不打扰未点击的人。
  if (importFailed && props.showModal) {
    return <ChunkFailFallback onClose={props.onCloseModal} />;
  }
  return null; // 懒块加载中: gate 还没结论 (freshGateAccess 维持 'loading')
}

// 自包含 fallback modal — 权限模块加载失败时给用户人话提示 + 刷新入口。
// 故意不 import 任何 membership/重组件, 保持本文件在 flag-off 时零 paywall 依赖。
function ChunkFailFallback(props) {
  function reload() {
    if (typeof window !== 'undefined' && window.location) window.location.reload();
  }
  var overlay = {
    position: 'fixed', inset: 0, zIndex: 2300,
    background: 'rgba(28,22,18,0.55)',
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
          暂时没法确认你的学习权限。刷新一下页面通常就好了。
        </div>
        <button style={primaryBtn} onClick={reload}>刷新重试</button>
        <button style={ghostBtn} onClick={props.onClose}>先不了</button>
      </div>
    </div>
  );
}

export default CourseGateMount;

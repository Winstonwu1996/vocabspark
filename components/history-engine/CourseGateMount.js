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

  if (!Gate) return null; // 懒块到位前: gate 还没结论 (freshGateAccess 维持 'loading')
  return <Gate {...props} />;
}

export default CourseGateMount;

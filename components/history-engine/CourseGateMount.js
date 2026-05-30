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
  useEffect(function () {
    var mounted = true;
    import('./CourseGate').then(function (m) {
      if (mounted) setGate(function () { return m.CourseGate; });
    }).catch(function () {
      // Codex P2 (round2): 懒块加载失败时 gate 永不上报 → 播放器页 freshGateAccess 永远
      // 'loading' → 挂起点击卡死。需上报 fallback 让 pending 解除。
      // Codex P2 (round3) 修正: 本 catch 跑在 useUserTier **之前** —— 此刻完全不知用户
      // 身份 (游客 / 注册 free / 付费)。所以不能像 computeGateAccess 的 error 分支那样
      // 把 'free' 课判 allow: 那会让**未注册游客**进到「注册才可学」的 free 课。
      // 唯一对所有人开放的是 guest 试用课 (req==='guest')。其余一律 fail-closed:
      // - 'error-blocked' → 播放器页留在 IntroScreen 不进对话 (A1 设计, 营销页仍可见)。
      // 代价: 注册 free 用户遇 chunk 加载失败时也被挡 (网络抖动罕见), 换「绝不漏过付费/
      // 注册墙」的安全。注: 此刻 Gate 仍 null, UpgradeModal 无法渲染, 故只能 fail-closed。
      if (mounted && typeof props.onAccessChange === 'function') {
        var req = getTopicAccessTier(props.topicId);
        var fallback = (req === 'guest') ? 'allow' : 'error-blocked';
        props.onAccessChange(fallback, props.topicId, props.lensId);
      }
    });
    return function () { mounted = false; };
  }, []);
  if (!Gate) return null; // 懒块到位前: gate 还没结论 (freshGateAccess 维持 'loading')
  return <Gate {...props} />;
}

export default CourseGateMount;

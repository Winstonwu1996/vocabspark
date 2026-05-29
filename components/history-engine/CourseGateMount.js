// ─── history-engine: CourseGateMount (Step 4b-1 · 静态可 import 的本地 loader) ──
// 播放器页静态 import 本文件 (本文件无 membership/supabase, 只有 react + 动态 import())。
// 内部懒加载 CourseGate (含 useUserTier → membership)。
//
// flag off 时播放器页不渲染 <CourseGateMount/> → 本组件不挂载 → useEffect 里的
// import('./CourseGate') 永不触发 → membership/useUserTier 不进 flag-off 运行路径。
// (同 Step 4a CourseBrowserPaywallLoader 验证过的本地 loader 模式, 不用 dynamic ssr:false。)
import React, { useState, useEffect } from 'react';

export function CourseGateMount(props) {
  var [Gate, setGate] = useState(null);
  useEffect(function () {
    var mounted = true;
    import('./CourseGate').then(function (m) {
      if (mounted) setGate(function () { return m.CourseGate; });
    }).catch(function () { /* 懒块加载失败 → 不渲染 gate, 播放器页按 gateAccess=null 乐观放行 */ });
    return function () { mounted = false; };
  }, []);
  if (!Gate) return null; // 懒块到位前: gate 还没结论 (gateAccess 维持 null → 页面乐观)
  return <Gate {...props} />;
}

export default CourseGateMount;

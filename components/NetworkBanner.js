/* ─── Know U. Learning — 全局网络状态横幅 ───
   两件事：
   U3 慢网络降级：navigator.connection.effectiveType ∈ {slow-2g, 2g, 3g} → 提示加载会变慢
   U4 断网恢复：window online/offline 事件 → 顶部 banner 提示，重连后 3s 自动消失

   设计原则：
   - 仅做 UI 提示，不降级 prompt 内容（质量不动）
   - SSR 安全（typeof window !== 'undefined' 守护）
   - Network Information API 浏览器兼容性差（Safari/Firefox 都没有）
     → 不支持时优雅降级为只检测 offline
*/
import { useState, useEffect } from 'react';
import { C, FONT } from '../lib/theme';

// 慢网络判定：3g 及以下都算慢（地铁/校园弱信号常见 3g）
var SLOW_TYPES = { 'slow-2g': 1, '2g': 1, '3g': 1 };

export default function NetworkBanner() {
  // 状态机：'ok' | 'slow' | 'offline' | 'recovering'
  // ok        → 不渲染
  // slow      → 黄 banner 常驻（直到网速变好或断网）
  // offline   → 红 banner 常驻（直到 online 事件触发）
  // recovering → 绿 banner 显示 3 秒后自动回到 ok（或 slow，看当前网速）
  var stateTuple = useState('ok');
  var status = stateTuple[0];
  var setStatus = stateTuple[1];

  useEffect(function () {
    if (typeof window === 'undefined') return;

    // 拿到 connection 对象（带 prefix 兜底，但实际只 Chrome/Edge 系支持）
    var conn = navigator.connection ||
               navigator.mozConnection ||
               navigator.webkitConnection ||
               null;

    // 计算当前应该是什么状态（不含 recovering，那个是过渡态）
    var computeStatus = function () {
      if (!navigator.onLine) return 'offline';
      if (conn && conn.effectiveType && SLOW_TYPES[conn.effectiveType]) {
        return 'slow';
      }
      return 'ok';
    };

    var recoverTimer = null;

    var handleOffline = function () {
      if (recoverTimer) { clearTimeout(recoverTimer); recoverTimer = null; }
      setStatus('offline');
      console.warn('[NetworkBanner] 网络已断开');
    };

    var handleOnline = function () {
      // 从 offline 恢复 → 先显示 recovering 3s 再回到正常状态
      setStatus('recovering');
      console.warn('[NetworkBanner] 网络已恢复');
      if (recoverTimer) clearTimeout(recoverTimer);
      recoverTimer = setTimeout(function () {
        setStatus(computeStatus());
        recoverTimer = null;
      }, 3000);
    };

    var handleConnChange = function () {
      // connection 变化时只在非 offline/recovering 状态下更新（避免覆盖恢复动画）
      setStatus(function (prev) {
        if (prev === 'offline' || prev === 'recovering') return prev;
        var next = computeStatus();
        if (next === 'slow') {
          console.warn('[NetworkBanner] 检测到慢网络：' + (conn && conn.effectiveType));
        }
        return next;
      });
    };

    // 初始状态
    setStatus(computeStatus());
    if (computeStatus() === 'slow') {
      console.warn('[NetworkBanner] 当前网络较慢：' + (conn && conn.effectiveType));
    }

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);
    if (conn && typeof conn.addEventListener === 'function') {
      conn.addEventListener('change', handleConnChange);
    }

    return function () {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
      if (conn && typeof conn.removeEventListener === 'function') {
        conn.removeEventListener('change', handleConnChange);
      }
      if (recoverTimer) clearTimeout(recoverTimer);
    };
  }, []);

  if (status === 'ok') return null;

  // banner 配色：offline 红 / slow 金 / recovering 绿
  var palette = {
    offline:    { bg: C.red,   text: '#fff',         icon: '📡', msg: '网络已断开，重连后将自动继续' },
    slow:       { bg: C.gold,  text: '#fff',         icon: '⚠️', msg: '网络较慢，加载可能延长 30 秒' },
    recovering: { bg: C.green, text: '#fff',         icon: '✅', msg: '已恢复，正在继续...' },
  };
  var p = palette[status];
  if (!p) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,           // 高于 navbar / 弹窗 overlay 之外的常规层
        background: p.bg,
        color: p.text,
        fontFamily: FONT,
        fontSize: 14,
        fontWeight: 600,
        padding: '10px 16px',
        textAlign: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        animation: 'fadeUp 0.25s ease-out',
        letterSpacing: '0.01em',
      }}
    >
      <span style={{ marginRight: 8 }}>{p.icon}</span>
      {p.msg}
    </div>
  );
}

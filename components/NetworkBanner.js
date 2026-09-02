/* ─── Know U. Learning — 全局网络状态横幅 ───
   两件事：
   U3 慢网络降级：navigator.connection.effectiveType ∈ {slow-2g, 2g, 3g} → 提示加载会变慢
   U4 断网恢复：window online/offline 事件 → 顶部 banner 提示，重连后 3s 自动消失

   ⚠️ navigator.onLine 只是「怀疑信号」，不是判据（Willow 实测：登录 Vocab 时误报
   「网络已断开」，而服务端一切正常）。该 API 只反映「有没有连上某个网络接口」，
   切 WiFi / iOS 前后台切换 / 锁屏唤醒 / 省电模式 / VPN 连断 都会虚报 offline；
   且这些场景常常「只发 offline 不发 online」，原实现进 offline 后毫无自愈 → 红条永久卡住。
   现在：收到 offline 先探一次服务器，真连不上才报；报了之后持续复检，网好自动消失。

   设计原则：
   - 仅做 UI 提示，不降级 prompt 内容（质量不动）
   - SSR 安全（typeof window !== 'undefined' 守护）
   - Network Information API 浏览器兼容性差（Safari/Firefox 都没有）
     → 不支持时优雅降级为只检测 offline
*/
import { useState, useEffect } from 'react';
import { C, FONT } from '../lib/theme';
import { probeConnectivity, shouldReportOffline, recheckDelayMs } from '../lib/connectivity';

// 5-5: 阈值收紧 — Chrome 经常把正常 4G/WiFi 误判成 'effectiveType=3g'
//      (基于 RTT/带宽综合推算,不等于真的 3G 网络)。3g 误报率太高,顶部全屏
//      banner 扰动 + 30 秒提示让用户先入为主以为系统慢。
//      只在真正慢的网络(slow-2g/2g)或 RTT 极高(>2000ms)/带宽极低(<150kbps) 时触发。
var SLOW_TYPES = { 'slow-2g': 1, '2g': 1 };
// 真实指标兜底 — 即使 effectiveType=3g/4g, 若 RTT 或 downlink 极差也认为慢
var RTT_THRESHOLD_MS = 2000;        // > 2 秒延迟才算慢
var DOWNLINK_THRESHOLD_MBPS = 0.15; // < 150 kbps 才算慢

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
    // 5-5: 三层判定 — effectiveType 精确慢档 OR RTT 极高 OR downlink 极低
    // trustOnline=false 用于「探测已证实能连上」之后的回落：
    // 此时 navigator.onLine 可能仍谎报 false（切 WiFi / iOS 前后台的已知行为），
    // 不能让它把状态又打回 offline —— 那会让横幅在自愈后立刻复活并永久卡住。
    var computeStatus = function (trustOnline) {
      if (trustOnline !== false && !navigator.onLine) return 'offline';
      if (!conn) return 'ok';
      var effSlow = conn.effectiveType && SLOW_TYPES[conn.effectiveType];
      var rttHigh = typeof conn.rtt === 'number' && conn.rtt > RTT_THRESHOLD_MS;
      var dlLow   = typeof conn.downlink === 'number' && conn.downlink < DOWNLINK_THRESHOLD_MBPS;
      if (effSlow || rttHigh || dlLow) return 'slow';
      return 'ok';
    };

    var recoverTimer = null;
    var recheckTimer = null;
    var recheckAttempt = 0;
    var disposed = false;

    var clearRecheck = function () {
      if (recheckTimer) { clearTimeout(recheckTimer); recheckTimer = null; }
      recheckAttempt = 0;
    };

    // 断网期间持续复检：网一恢复就自动切 recovering，不需要用户刷新。
    // （浏览器常常只发 offline 不发 online，光等事件会让红条永久卡住。）
    var scheduleRecheck = function () {
      if (disposed || recheckTimer) return;
      var delay = recheckDelayMs(recheckAttempt);
      recheckAttempt += 1;
      recheckTimer = setTimeout(async function () {
        recheckTimer = null;
        if (disposed) return;
        var okNow = await probeConnectivity();
        console.warn('[NetworkBanner] 复检 #' + recheckAttempt + ' probe=' + okNow + ' onLine=' + navigator.onLine);
        if (disposed) return;
        if (okNow || navigator.onLine) {
          clearRecheck();
          markRecovered();
        } else {
          scheduleRecheck();
        }
      }, delay);
    };

    var markRecovered = function () {
      setStatus('recovering');
      console.warn('[NetworkBanner] 网络已恢复');
      if (recoverTimer) clearTimeout(recoverTimer);
      recoverTimer = setTimeout(function () {
        if (disposed) return;
        // 探测已证实可达 → 回落时不信 navigator.onLine，否则会被它打回 offline
        setStatus(computeStatus(false));
        recoverTimer = null;
      }, 3000);
    };

    var handleOffline = async function () {
      if (recoverTimer) { clearTimeout(recoverTimer); recoverTimer = null; }
      // 先验证再报：navigator.onLine 误报率高，直接弹红条会吓到用户
      var probeOk = await probeConnectivity();
      if (disposed) return;
      if (!shouldReportOffline(navigator.onLine, probeOk)) {
        console.warn('[NetworkBanner] 收到 offline 事件但服务器可达，判定为误报，不提示');
        return;
      }
      setStatus('offline');
      console.warn('[NetworkBanner] 网络已断开（探测确认）');
      clearRecheck();
      scheduleRecheck();
    };

    var handleOnline = function () {
      clearRecheck();
      markRecovered();
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

    // 初始状态：navigator.onLine 为 false 时同样先探测，避免刚进页面就误报红条
    var initial = computeStatus();
    if (initial === 'offline') {
      probeConnectivity().then(function (probeOk) {
        if (disposed) return;
        if (!shouldReportOffline(navigator.onLine, probeOk)) {
          console.warn('[NetworkBanner] 启动时 onLine=false 但服务器可达，判定为误报');
          // 同 markRecovered：探测已证实可达，回落时不信 navigator.onLine
          setStatus(computeStatus(false));
          return;
        }
        setStatus('offline');
        clearRecheck();
        scheduleRecheck();
      });
    } else {
      setStatus(initial);
      if (initial === 'slow') {
        console.warn('[NetworkBanner] 当前网络较慢：' + (conn && conn.effectiveType));
      }
    }

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);
    if (conn && typeof conn.addEventListener === 'function') {
      conn.addEventListener('change', handleConnChange);
    }

    return function () {
      disposed = true;
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
      if (conn && typeof conn.removeEventListener === 'function') {
        conn.removeEventListener('change', handleConnChange);
      }
      if (recoverTimer) clearTimeout(recoverTimer);
      if (recheckTimer) clearTimeout(recheckTimer);
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

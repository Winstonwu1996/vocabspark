/* ─── Know U. Learning — 新版本提示横幅 ───
   场景：用户长时间停在一个旧标签页，期间我们发了新版（修了 bug）。
   旧 tab 的 JS bundle 不会自动更新，用户继续踩已修复的问题且无感知。

   机制：
   - 客户端 bundle 在 build 时烘焙了 NEXT_PUBLIC_BUILD_ID（当前页面的版本）。
   - 轮询 /api/version 拿"线上当前版本"，不一致 → 说明发了新版。
   - 只提示，绝不自动刷新：刷新会丢失正在进行的学习 / 复习状态，必须用户主动点。
   - 可关闭；关闭后记住该版本，不再为同一版本重复打扰；更新的版本再次出现才重弹。

   设计原则（对齐 NetworkBanner / BetaBadge）：
   - SSR 安全（typeof window 守护）
   - 失败 fail-open（拿不到版本号就当无事，绝不阻塞）
   - dev 环境（build id = 'dev'）永不触发
*/
import { useState, useEffect, useRef } from 'react';
import { C, FONT } from '../lib/theme';

var CURRENT_BUILD = process.env.NEXT_PUBLIC_BUILD_ID || 'dev';
var POLL_INTERVAL_MS = 5 * 60 * 1000; // 5 分钟轮询一次（叠加 tab 重新可见时即时检查）

export default function UpdateBanner() {
  var stateTuple = useState(false);
  var show = stateTuple[0];
  var setShow = stateTuple[1];

  // 触发本次提示的线上版本号；关闭时记入 dismissedRef，避免同一版本反复弹，
  // 但若之后又发了"更新的版本"（latest 再次变化）则重新弹。
  var latestRef = useRef(null);
  var dismissedRef = useRef(null);

  useEffect(function () {
    if (typeof window === 'undefined') return;
    // dev / 无 build id 时不启用（本地两端都是 'dev'，永远相等也无意义）
    if (!CURRENT_BUILD || CURRENT_BUILD === 'dev') return;

    var stopped = false;
    var inFlight = false; // 防止慢网络下轮询请求重叠堆积

    var check = function () {
      // 标签页不可见时不查（省请求；变可见会再触发一次 check）
      if (document.visibilityState === 'hidden' || inFlight) return;
      inFlight = true;
      fetch('/api/version', { cache: 'no-store' })
        .then(function (res) { return res.ok ? res.json() : null; })
        .then(function (data) {
          if (stopped || !data || !data.version) return;
          var latest = data.version;
          // 收敛分支：线上版本回到当前/dev/已忽略版本（如回滚），主动收掉横条，避免卡住误报
          if (latest === 'dev' || latest === CURRENT_BUILD || latest === dismissedRef.current) {
            latestRef.current = null;
            setShow(false);
            return;
          }
          latestRef.current = latest;
          setShow(true);
        })
        .catch(function () { /* fail-open：网络/接口异常不打扰用户 */ })
        .then(function () { inFlight = false; });
    };

    var onVisible = function () {
      if (document.visibilityState === 'visible') check();
    };

    check();
    var timer = setInterval(check, POLL_INTERVAL_MS);
    document.addEventListener('visibilitychange', onVisible);

    return function () {
      stopped = true;
      clearInterval(timer);
      document.removeEventListener('visibilitychange', onVisible);
    };
  }, []);

  if (!show) return null;

  var handleReload = function () {
    window.location.reload();
  };

  var handleDismiss = function () {
    dismissedRef.current = latestRef.current; // 记住这个版本，下次 check 不再弹它
    setShow(false);
  };

  return (
    <div
      role="region"
      aria-label="新版本提示"
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1001, // 略高于 BetaBadge(1000)，低于 modal(1500+)
        background: C.accent,
        color: '#fff8e8',
        fontFamily: FONT,
        fontSize: 14,
        fontWeight: 600,
        // iOS home indicator 安全区：基础 12px + 安全区内边距
        padding: '12px 16px calc(12px + env(safe-area-inset-bottom, 0px))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        flexWrap: 'wrap',
        boxShadow: '0 -2px 12px rgba(0,0,0,0.18)',
        animation: 'fadeUp 0.25s ease-out',
        letterSpacing: '0.01em',
      }}
    >
      <span aria-live="polite">✨ 有新版本可用，刷新即可获得最新修复</span>
      <button
        onClick={handleReload}
        style={{
          background: '#fff8e8',
          color: C.accent,
          border: 'none',
          borderRadius: 999,
          padding: '6px 16px',
          fontSize: 13,
          fontWeight: 800,
          cursor: 'pointer',
          fontFamily: 'inherit',
        }}
      >
        点此刷新
      </button>
      <button
        onClick={handleDismiss}
        aria-label="稍后再说"
        style={{
          background: 'transparent',
          color: '#fff8e8',
          border: '1px solid rgba(255,248,232,0.5)',
          borderRadius: 999,
          padding: '6px 12px',
          fontSize: 13,
          fontWeight: 600,
          cursor: 'pointer',
          fontFamily: 'inherit',
        }}
      >
        稍后
      </button>
    </div>
  );
}

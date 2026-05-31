import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import NetworkBanner from "../components/NetworkBanner";
import UpdateBanner from "../components/UpdateBanner";
import BetaBadge from "../components/BetaBadge";
import ErrorBoundary from "../components/ErrorBoundary";
import { trackFunnel } from "../lib/analytics";
import { supabase } from "../lib/supabase";
import { clearBackups } from "../lib/local-backup";
import { resetCloudReadyOnSignOut } from "../lib/sync-client-singleton";
// 副作用 import：触发 sentry.client.config.js 初始化（仅在浏览器）
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("../sentry.client.config");
}

export default function App({ Component, pageProps }) {
  var router = useRouter();
  useEffect(function() {
    var handleRouteChange = function(url) {
      // 通用路由打点 — 路由变化时记录到达页面（去掉 query 仅留 pathname）
      var pathname = (url || '').split('?')[0];
      trackFunnel('route_change', { path: pathname });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return function() {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // 全局登出兜底: 任何页面登出 (SIGNED_OUT) 都清掉进度兜底备份键 —— 否则共享浏览器上
  // vocabspark_v1__premigration_bak / __bak__* 仍留完整进度/画像 blob (workflow P1 隐私)。
  // 放 _app 覆盖所有登出入口 (vocab 自己的 handleLogout 已清; home/writing/plan/history 等只 signOut)。
  useEffect(function() {
    var sub = supabase.auth.onAuthStateChange(function(event) {
      if (event === 'SIGNED_OUT') {
        try { clearBackups(); } catch (e) {}
        // 重锁共享同步实例的 push 闸门, 防换账号先开 /history 时用前一账号就绪态误推 (Codex P1)
        try { resetCloudReadyOnSignOut(); } catch (e) {}
      }
    });
    return function() {
      try { sub && sub.data && sub.data.subscription && sub.data.subscription.unsubscribe(); } catch (e) {}
    };
  }, []);

  return (
    <ErrorBoundary>
      <NetworkBanner />
      <UpdateBanner />
      <Component {...pageProps} />
      <BetaBadge />
      <Analytics />
    </ErrorBoundary>
  );
}

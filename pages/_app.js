import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import NetworkBanner from "../components/NetworkBanner";
import { trackFunnel } from "../lib/analytics";
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

  return (
    <>
      <NetworkBanner />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

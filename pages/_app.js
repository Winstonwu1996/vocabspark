import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
// 副作用 import：触发 sentry.client.config.js 初始化（仅在浏览器）
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("../sentry.client.config");
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

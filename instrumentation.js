// Next.js instrumentation hook — Sentry v10 推荐入口
// 根据 runtime 加载对应的 Sentry 配置
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }
  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}

// 捕获 Next.js 14.2+ 的请求级错误（API/SSR/RSC）
export { captureRequestError as onRequestError } from "@sentry/nextjs";

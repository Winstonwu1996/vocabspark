// Sentry 前端配置（浏览器）
// graceful degrade: 没 DSN 就不初始化，不影响应用
import * as Sentry from "@sentry/nextjs";

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

if (dsn) {
  Sentry.init({
    dsn,
    tracesSampleRate: 0.1, // 10% 性能采样，控制成本
    enabled: process.env.NODE_ENV === "production",
    environment: process.env.NODE_ENV,
    // 发布前不需要 session replay；保持轻量
  });
}

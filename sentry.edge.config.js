// Sentry Edge Runtime 配置（chat-stream.js 等 edge function）
// 仅使用 web 标准 API；保持最小集，避免 Node 专属功能在 Edge 报错
import * as Sentry from "@sentry/nextjs";

const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN || process.env.SENTRY_DSN;

if (dsn) {
  Sentry.init({
    dsn,
    tracesSampleRate: 0.1,
    enabled: process.env.NODE_ENV === "production",
    environment: process.env.NODE_ENV,
  });
}

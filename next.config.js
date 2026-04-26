/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/', destination: '/home' },
    ];
  },
  async redirects() {
    return [
      // /atlas-lab → /atlas-lab/byzantine-rise（默认登录 Topic）
      // 边缘缓存 + SSG 兼容；不再用 getStaticProps 的 redirect（Next 14 SSG 不允许）
      { source: '/atlas-lab', destination: '/atlas-lab/byzantine-rise', permanent: false },
    ];
  },
  // Atlas 模块的 historical-basemaps GeoJSON（32MB / 23 文件）只在 build 时被
  // lib/atlas-renderer.js 读取，运行时不需要。从所有 Vercel function bundle 排除，
  // 避免逼近 50MB unzipped 上限。
  // 注：当前所有 atlas 页都是 SSG（fallback: false），不会创建 Lambda；
  // 此配置作为防御性，若未来切换 ISR/SSR 时自动生效。
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'data/atlas/historical-basemaps/**',
        'data/atlas/raw/**',
        'data/ap-ced/**',
      ],
    },
  },
};

// Sentry webpack 包装（@sentry/nextjs v8，Next 14 Pages Router 原生支持）
// graceful degrade：DSN 不存在时 sentry.*.config.js 内运行时跳过 init。
// 没 SENTRY_AUTH_TOKEN 时禁用 source map 上传，避免 build 出错。
const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(nextConfig, {
  silent: true,
  telemetry: false,
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  sourcemaps: {
    disable: !process.env.SENTRY_AUTH_TOKEN,
  },
  disableLogger: true,
  automaticVercelMonitors: false,
});

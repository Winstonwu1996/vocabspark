/** @type {import('next').NextConfig} */
// 部署版本号：build 时注入 → 烘焙进客户端 bundle。客户端持有"打开页面那一刻的
// build"，运行时的 /api/version 返回"当前线上 build"，两者不一致即说明发了新版 →
// 提示用户刷新。优先 VERCEL_DEPLOYMENT_ID（每次重新部署都变，能识别"同一 commit
// 重新部署/回滚"，commit SHA 识别不了）；本地 dev 两者都是 'dev'，不会误报。
// 注：需在 Vercel 项目开启 "Automatically expose System Environment Variables"，
//     否则线上退化为 'dev' 静默禁用（不会误报，只是不提示）。
const BUILD_ID =
  process.env.VERCEL_DEPLOYMENT_ID ||
  process.env.VERCEL_GIT_COMMIT_SHA ||
  'dev';

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BUILD_ID: BUILD_ID,
  },
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
  async headers() {
    return [
      {
        // 自托管字体永久缓存。Next 对 public/ 的默认头是 max-age=0, must-revalidate ——
        // 那会让**每次打开页面**都为 4 个字体文件各发一次条件请求去问"变了没"。
        // 对大陆用户（要跨太平洋问美国服务器）这 4 个来回是实打实的延迟，
        // 会把自托管省下来的时间又还回去。
        // 文件名带 Google 的内容哈希，内容变了文件名一定变，所以 immutable 是安全的。
        source: '/fonts/:file*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
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

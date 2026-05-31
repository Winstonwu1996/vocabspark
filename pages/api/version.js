// 当前线上部署的版本号。运行时读取 Vercel 注入的 VERCEL_GIT_COMMIT_SHA
// （build 时同一个值被烘焙进客户端 bundle 的 NEXT_PUBLIC_BUILD_ID）。
// 客户端轮询本接口，发现返回值 ≠ 自身 bundle 的 build → 弹"有新版本"提示。
// no-store：绝不能被 CDN/浏览器缓存，否则新版发布后仍返回旧 SHA，提示永不触发。

export default function handler(req, res) {
  // 与 next.config.js 的 NEXT_PUBLIC_BUILD_ID 同一优先级，保证两端可直接比较
  const version =
    process.env.VERCEL_DEPLOYMENT_ID ||
    process.env.VERCEL_GIT_COMMIT_SHA ||
    'dev';

  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
  res.setHeader('CDN-Cache-Control', 'no-store');
  res.status(200).json({ version });
}

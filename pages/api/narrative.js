// pages/api/narrative.js
//
// 服务端 endpoint：根据 topicId 返回该 Topic 的 canonical narrative
// （metadata + body）。客户端在 history page mount 时拉取一次，
// 之后所有 turn prompt 构建都用 cached 内容。
//
// 走这条路而不是直接 webpack 打包 .md 是因为：
//   1. 内容可以热更新（改 .md 后刷新页面即生效，不用 rebuild）
//   2. .md 不进客户端 bundle（38 个 Topic × 8K = 节省 ~300KB 首屏）
//   3. 服务端可以做 cache headers / fact-check 拦截

import { loadNarrative, hasNarrative } from '../../lib/history-narratives/loader.js';

export default function handler(req, res) {
  const { topicId } = req.query;

  if (!topicId || typeof topicId !== 'string') {
    return res.status(400).json({ error: 'topicId required' });
  }

  if (!hasNarrative(topicId)) {
    // 没 narrative 返回 404，客户端 fallback 走旧 prompt builder
    return res.status(404).json({ error: 'narrative not found', topicId });
  }

  try {
    const { metadata, body } = loadNarrative(topicId);
    // 1 小时强缓存 + 边缘缓存：narrative 修改频率低
    res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400');
    res.status(200).json({ topicId, metadata, body });
  } catch (e) {
    console.error('[api/narrative]', topicId, e.message);
    res.status(500).json({ error: 'load failed', message: e.message });
  }
}

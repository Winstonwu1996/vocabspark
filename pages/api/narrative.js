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

import path from 'path';
import { loadNarrative, hasNarrative } from '../../lib/history-narratives/loader.js';
import { getBearerToken, checkTopicAccess } from '../../lib/entitlement-server.js';

export default async function handler(req, res) {
  const { topicId: rawTopicId } = req.query;

  if (!rawTopicId || typeof rawTopicId !== 'string') {
    return res.status(400).json({ error: 'topicId required' });
  }

  // 路径消毒：topicId 直接拼进 path.join(NARRATIVE_DIR, topicId + '.md')，
  // 而 path.join 会解析 '..' → 可逃出目录读任意 .md。basename 掐掉所有路径分隔。
  const topicId = path.basename(rawTopicId);
  if (topicId !== rawTopicId) {
    return res.status(400).json({ error: 'invalid topicId' });
  }

  // ─── 付费闸（服务端）───
  // 此前零鉴权：免费用户深链进付费课，整篇授权课文就落进 network tab。
  // 客户端 gate 保不住收入，必须在吐内容的这一层拦。
  // transient（Supabase 抽风）一律放行 —— 付费孩子不能被验证服务抖动挡在课外。
  const gate = await checkTopicAccess(getBearerToken(req), topicId);
  if (!gate.allow) {
    return res.status(403).json({ error: 'upgrade required', topicId, tier: gate.tier });
  }
  if (gate.transient) {
    console.warn('[api/narrative] entitlement transient → fail-open', topicId);
  }

  if (!hasNarrative(topicId)) {
    // 没 narrative 返回 404，客户端 fallback 走旧 prompt builder
    return res.status(404).json({ error: 'narrative not found', topicId });
  }

  try {
    const { metadata, body } = loadNarrative(topicId);
    // ⚠️ 响应现在因人而异（付费闸）→ 绝不能进 CDN 共享缓存，否则付费用户的课文
    // 会被边缘缓存发给免费用户，闸等于白加。只保留浏览器私有短缓存。
    res.setHeader('Cache-Control', 'private, max-age=300, no-store');
    res.status(200).json({ topicId, metadata, body });
  } catch (e) {
    console.error('[api/narrative]', topicId, e.message);
    res.status(500).json({ error: 'load failed', message: e.message });
  }
}

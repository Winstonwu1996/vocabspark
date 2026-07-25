import { checkRateLimit } from "../../lib/ratelimit";

// 允许的来源：本站页面。tts 是 GET（<audio>/fetch 直连），不能要求自定义 header 鉴权，
// 因此用「同源 + IP 限流」而不是 token —— 既堵住被当免费 TTS 代理白嫖，又不改任何调用方。
function isAllowedOrigin(req) {
  var host = req.headers.host || "";
  var ref = req.headers.referer || req.headers.origin || "";
  // 无 Referer 仍放行：同源 <audio src> / 部分浏览器隐私设置本来就不发 Referer，
  // 拒绝会误伤真实用户。⚠️ 但这也意味着同源检查只能挡「浏览器里的跨站盗链」，
  // 挡不住 curl/脚本（不发 Referer 即可绕过）——脚本白嫖靠下面的 IP 限流兜底。
  if (!ref) return true;
  try {
    var refHost = new URL(ref).host;
    return refHost === host;
  } catch (e) {
    return false; // referer 存在但畸形 → 拒绝
  }
}

export default async function handler(req, res) {
  var { text } = req.query;
  if (!text || !text.trim()) return res.status(400).json({ error: "text required" });

  // ─── 滥用防护（原先此端点完全无鉴权无限流，是个开放的外发 fetch 代理）───
  if (!isAllowedOrigin(req)) {
    return res.status(403).json({ error: "forbidden" });
  }
  var ip =
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    req.headers["x-real-ip"] ||
    "unknown";
  // 正常朗读：一个词一次、整句分块也就几次；240/小时对真人绰绰有余，脚本刷则挡住。
  var rl = await checkRateLimit("tts:" + ip, 240, 60 * 60 * 1000);
  if (!rl.allowed) {
    return res.status(429).json({ error: "语音请求过于频繁，请稍后再试" });
  }

  /* 单段上限：客户端会对长句分块；此处防止异常长 URL / 滥用 */
  var clean = text.slice(0, 450).trim();
  var url =
    "https://translate.google.com/translate_tts?ie=UTF-8&tl=en-US&client=gtx&ttsspeed=0.85&q=" +
    encodeURIComponent(clean);

  for (var attempt = 0; attempt < 2; attempt++) {
    try {
      var r = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
        signal: AbortSignal.timeout(15000),
      });
      if (r.status === 429) {
        if (attempt < 1) { await new Promise(function(resolve) { setTimeout(resolve, 2000); }); continue; }
        return res.status(503).json({ error: "语音服务繁忙，请稍后重试" });
      }
      if (!r.ok) return res.status(502).json({ error: "语音服务暂时不可用" });
      var buf = await r.arrayBuffer();
      if (!buf || buf.byteLength === 0) return res.status(502).json({ error: "语音生成失败，请重试" });
      res.setHeader("Content-Type", "audio/mpeg");
      res.setHeader("Cache-Control", "public, max-age=86400");
      return res.send(Buffer.from(buf));
    } catch (e) {
      if (e.name === "AbortError") {
        return res.status(504).json({ error: "语音加载超时，请重试" });
      }
      console.error("[TTS]", e.message);
      if (attempt < 1) continue;
      return res.status(500).json({ error: "语音服务出错，请重试" });
    }
  }
}

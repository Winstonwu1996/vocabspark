export default async function handler(req, res) {
  var { text } = req.query;
  if (!text || !text.trim()) return res.status(400).json({ error: "text required" });

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

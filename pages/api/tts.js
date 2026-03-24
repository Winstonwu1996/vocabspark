export default async function handler(req, res) {
  var { text } = req.query;
  if (!text || !text.trim()) return res.status(400).json({ error: "text required" });

  var clean = text.slice(0, 200).trim();
  var url =
    "https://translate.google.com/translate_tts?ie=UTF-8&tl=en-US&client=gtx&ttsspeed=0.85&q=" +
    encodeURIComponent(clean);

  try {
    var r = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
    });
    if (!r.ok) return res.status(502).json({ error: "tts upstream failed: " + r.status });
    var buf = await r.arrayBuffer();
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "public, max-age=86400");
    res.send(Buffer.from(buf));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

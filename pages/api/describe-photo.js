export const config = {
  api: {
    bodyParser: {
      sizeLimit: '15mb',
    },
  },
};

const VALID_MIMES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  var { imageBase64, mimeType } = req.body || {};
  if (!imageBase64 || !mimeType) return res.status(400).json({ error: '缺少图片数据，请重试或换一张较小的照片' });

  if (!VALID_MIMES.includes(mimeType)) {
    return res.status(400).json({ error: '仅支持 JPEG、PNG、GIF、WebP 格式的图片' });
  }

  // Base64 10MB limit (~7.5MB actual image)
  if (imageBase64.length > 10 * 1024 * 1024) {
    return res.status(413).json({ error: '图片太大，请使用小于 8MB 的文件' });
  }

  var apiKey = process.env.GOOGLE_AI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: '服务未配置图像分析密钥' });

  var model = process.env.GEMINI_VISION_MODEL || 'gemini-2.0-flash';
  var url = 'https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent?key=' + apiKey;

  try {
    var response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(25000),
      body: JSON.stringify({
        contents: [{
          parts: [
            { text: "请用简短的中文描述这张照片里看到的内容，50字以内，口语化，描述场景、地点、人物、氛围等。不要加任何前缀或多余说明。" },
            { inline_data: { mime_type: mimeType, data: imageBase64 } }
          ]
        }],
        generationConfig: { maxOutputTokens: 120 }
      })
    });
    var data = await response.json();
    if (data.error) {
      var msg = data.error.message || JSON.stringify(data.error);
      console.error('[describe-photo] API error:', msg);
      return res.status(502).json({ error: '图像分析服务出错，请重试' });
    }
    var description = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
    var block = data.candidates?.[0]?.finishReason || data.promptFeedback?.blockReason;
    if (!description) {
      console.warn('[describe-photo] Empty description. Block reason:', block || 'unknown');
      return res.status(502).json({ error: block ? '内容未通过安全策略，请换一张照片' : '未生成描述，请换一张照片重试' });
    }
    return res.json({ description });
  } catch (e) {
    if (e.name === 'AbortError') {
      return res.status(504).json({ error: '图像分析超时，请重试或换一张较小的照片' });
    }
    console.error('[describe-photo]', e.message);
    return res.status(500).json({ error: '图像分析失败，请重试' });
  }
}

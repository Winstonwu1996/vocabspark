export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  var { imageBase64, mimeType } = req.body;
  if (!imageBase64 || !mimeType) return res.status(400).json({ error: 'missing data' });

  var apiKey = process.env.GOOGLE_AI_API_KEY;
  var url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + apiKey;

  try {
    var response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
    var description = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '';
    if (!description) return res.status(502).json({ error: 'no description returned' });
    res.json({ description });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

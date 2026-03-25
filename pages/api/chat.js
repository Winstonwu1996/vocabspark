let providerStartCursor = 0;

const buildProviders = () => {
  const providers = [];

  if (process.env.DEEPSEEK_API_KEY) {
    providers.push({
      name: "deepseek-a",
      family: "deepseek",
      url: "https://api.deepseek.com/v1/chat/completions",
      apiKey: () => process.env.DEEPSEEK_API_KEY,
      model: "deepseek-chat",
    });
  }

  if (process.env.DEEPSEEK_API_KEY_2) {
    providers.push({
      name: "deepseek-b",
      family: "deepseek",
      url: "https://api.deepseek.com/v1/chat/completions",
      apiKey: () => process.env.DEEPSEEK_API_KEY_2,
      model: "deepseek-chat",
    });
  }

  if (process.env.GOOGLE_AI_API_KEY) {
    providers.push({
      name: "gemini",
      family: "gemini",
      url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
      apiKey: () => process.env.GOOGLE_AI_API_KEY,
      model: "gemini-2.5-flash-lite",
    });
  }

  return providers;
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const providerPacing = {
  "deepseek-a": { nextAt: 0, gapMs: 180 },
  "deepseek-b": { nextAt: 0, gapMs: 180 },
  gemini: { nextAt: 0, gapMs: 350 },
};

async function applyProviderPacing(providerName) {
  const slot = providerPacing[providerName];
  if (!slot) return;
  const now = Date.now();
  if (slot.nextAt > now) {
    await sleep(slot.nextAt - now);
  }
  slot.nextAt = Date.now() + slot.gapMs;
}

function tryJSON(text) {
  try {
    const c = String(text || "").replace(/```\w*\s*/g, "").replace(/```/g, "").trim();
    try {
      return JSON.parse(c);
    } catch (e) {}
    const start = c.indexOf("{");
    const end = c.lastIndexOf("}");
    if (start !== -1 && end > start) {
      let jsonStr = c.substring(start, end + 1);
      jsonStr = jsonStr.replace(/,\s*}/g, "}").replace(/,\s*]/g, "]");
      try {
        return JSON.parse(jsonStr);
      } catch (e) {}
      jsonStr = jsonStr.replace(/\n/g, "\\n").replace(/\r/g, "");
      try {
        return JSON.parse(jsonStr);
      } catch (e) {}
    }
    return null;
  } catch (e) {
    return null;
  }
}

function addSpeakMarkers(text) {
  if (!text) return text;
  return text
    .split("\n")
    .map((line) => {
      if (line.includes("[🔊]")) return line;
      let clean = line.replace(/\*\*/g, "").replace(/\*/g, "").trim();
      clean = clean.replace(/^[\d]+\.\s*/, "").replace(/^[-–—*•]\s*/, "");
      clean = clean.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}]/gu, "").trim();
      const enOnly = clean
        .replace(/（[^）]*）/g, "")
        .replace(/\([^)]*\)/g, "")
        .replace(/[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef，。、；：""''！？]+/g, "")
        .trim();
      const endsEn = /[.!?;]$/.test(enOnly);
      const engWords = (enOnly.match(/[A-Za-z]{2,}/g) || []).length;
      const engChars = (enOnly.match(/[A-Za-z]/g) || []).length;
      const total = enOnly.replace(/[\s.,;:!?'"()\-—–;]/g, "").length;
      const ratio = total > 0 ? engChars / total : 0;
      if (endsEn && engWords >= 3 && ratio >= 0.6) {
        return line + " [🔊]";
      }
      return line;
    })
    .join("\n");
}

function buildSys(profile) {
  const p = String(profile || "").slice(0, 1000);
  return "你是一个幽默、有耐心且精通中英双语的词汇导师。风格像一个很酷的大姐姐——会用梗、会吐槽、偶尔抖机灵，但绝不油腻。\n\n【学生画像】\n" + p + "\n\n你必须深度利用上面的学生画像。每一个例句、每一个画面、每一个比喻，都必须和这个学生的具体爱好、常去的地方、日常生活紧密关联。让学生觉得\"这说的就是我的生活\"。";
}

function buildGuessPrompt(word, learned) {
  const ctx = learned.length > 0 ? "\n学生之前学过：" + learned.join(", ") : "";
  return "单词：" + word + ctx + "\n\n请执行 Step 1（猜）：\n\n1. 给出这个单词的IPA音标\n2. 给出一个生动的英文语境句（1-2句），用 _____ 代替目标单词，深度使用学生画像中的具体场景。\n3. 给出 4 个中文选项（A/B/C/D），其中只有 1 个是正确含义。\n\nIMPORTANT: 直接输出JSON，不要任何前导文字：\n" + '{"phonetic":"/音标/","context":"语境句","options":{"A":"选项A","B":"选项B","C":"选项C","D":"选项D"},"answer":"字母","hint":"提示"}';
}

function buildTeachPrompt(word, learned) {
  const ctx = learned.length > 0 ? "\n学生之前学过：" + learned.join(", ") + "。请在\"连\"环节与这些词建立联系。" : "";
  return "单词：" + word + ctx + "\n\n请依次执行 3 个环节。\n\n重要格式规则：[🔊] 标记只能放在完整英文例句的最末尾（紧跟在句号/感叹号之后），绝对不要插在句子中间或单词后面。\n\n【教 · Teach】\n从以下方法中挑最适合的 3 种，每种 2-4 句话：\n1. 词根词缀解剖 🧩\n2. 趣味谐音/联想 🧠（仅在巧妙时用）\n3. 画面感记忆 🖼️（用学生画像场景）\n4. 近义词找茬 🔍\n5. 词义光谱法 📶\n6. 词源故事 📖\n\n【连 · Connect】\n与学过的词建立联系。\n\n【练 · Apply】\n- 2 个高频搭配，格式：搭配词组 [🔊]\n- 2 个情景造句，格式：完整英文句。 [🔊]（中文翻译）\n每个造句需结合学生画像不同爱好/场景。\n\n要求：400-500字，朋友聊天语气，释义用中文，例句用英文，多换行。统一用直引号\"\"，不要用花引号或反引号。";
}

function buildSpectrumPrompt(word) {
  return "单词：" + word + "\n\n设计\"词义光谱排序\"游戏。找2个含义相近但程度不同的常见词，组成从弱到强的3词光谱。写2-3句沉浸式场景描述（用学生画像场景），及排序正确后的解读。\n\nIMPORTANT: 直接输出JSON：\n" + '{"spectrum_words":["弱","中","强(目标词)"],"scenario":"场景","decoded":"解读"}';
}

function buildReviewPrompt(words) {
  return "学生刚学完5个词：" + words.join(", ") + "\n\n设计互动复习关卡。直接输出JSON：\n" + '{"type":"fill_blank","title":"标题","intro":"场景描述","questions":[{"id":1,"sentence":"含_____的句","options":["词1","词2","词3"],"answer":"答案","explanation":"解释"},{"id":2,"sentence":"...","options":["..."],"answer":"...","explanation":"..."},{"id":3,"sentence":"...","options":["..."],"answer":"...","explanation":"..."},{"id":4,"sentence":"...","options":["..."],"answer":"...","explanation":"..."},{"id":5,"sentence":"...","options":["..."],"answer":"...","explanation":"..."}]}' + "\n\n每题对应一个词，options含正确答案和2个干扰词，场景结合学生画像。";
}

function buildClozePrompt(words) {
  return "学生刚学完10个词：" + words.join(", ") + "\n\n请写一篇120-150词的英文小短文（故事/日记/场景描述），深度结合学生画像的生活场景。短文中自然嵌入这10个词中的5个，将这5个词替换为 _____(1), _____(2) 等编号空格。\n\n在短文后给出5个填空题，每题3个选项（从10个词中选）。\n\nIMPORTANT: 直接输出JSON：\n" + '{"title":"短文标题","passage":"短文正文，含_____(1)等空格","questions":[{"id":1,"blank":"_____(1)","options":["词1","词2","词3"],"answer":"正确词","explanation":"为什么选这个词"},{"id":2,"blank":"_____(2)","options":["..."],"answer":"...","explanation":"..."},{"id":3,"blank":"_____(3)","options":["..."],"answer":"...","explanation":"..."},{"id":4,"blank":"_____(4)","options":["..."],"answer":"...","explanation":"..."},{"id":5,"blank":"_____(5)","options":["..."],"answer":"...","explanation":"..."}]}';
}

async function callProvider(provider, system, message, maxTokens, timeoutMs) {
  const response = await fetch(provider.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${provider.apiKey()}`,
    },
    body: JSON.stringify({
      model: provider.model,
      max_tokens: maxTokens,
      messages: [
        { role: "system", content: system },
        { role: "user", content: message },
      ],
    }),
    signal: AbortSignal.timeout(timeoutMs),
  });

  if (response.status === 429) {
    const err = new Error("rate_limited");
    err.status = 429;
    throw err;
  }

  if (!response.ok) {
    const body = await response.text();
    const err = new Error(`${provider.name} error ${response.status}: ${body}`);
    err.status = response.status;
    throw err;
  }

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content || "";
  return text;
}

async function callWithRetry(provider, system, message, maxTokens, timeoutMs) {
  for (let attempt = 0; attempt <= 2; attempt++) {
    try {
      await applyProviderPacing(provider.name);
      return await callProvider(provider, system, message, maxTokens, timeoutMs);
    } catch (err) {
      if (err.status === 429 && attempt < 2) {
        await sleep(1000 * Math.pow(2, attempt));
        continue;
      }
      throw err;
    }
  }
}

function buildOrderedProviders(preferredProviders) {
  const providers = buildProviders();
  const deepseekProviders = providers.filter((p) => p.family === "deepseek");
  const fallbackProviders = providers.filter((p) => p.family !== "deepseek");

  let orderedProviders;
  if (deepseekProviders.length > 0) {
    const start = providerStartCursor % deepseekProviders.length;
    providerStartCursor = (providerStartCursor + 1) % deepseekProviders.length;
    orderedProviders = deepseekProviders
      .slice(start)
      .concat(deepseekProviders.slice(0, start))
      .concat(fallbackProviders);
  } else {
    orderedProviders = providers;
  }

  if (Array.isArray(preferredProviders) && preferredProviders.length > 0) {
    const prefSet = new Set(preferredProviders);
    const preferred = orderedProviders.filter((p) => prefSet.has(p.name));
    const rest = orderedProviders.filter((p) => !prefSet.has(p.name));
    orderedProviders = preferred.concat(rest);
  }

  return orderedProviders;
}

async function requestText({ system, message, maxTokens, timeoutMs, preferredProviders }) {
  const orderedProviders = buildOrderedProviders(preferredProviders);
  const errors = [];

  for (const provider of orderedProviders) {
    try {
      const startedAt = Date.now();
      const text = await callWithRetry(provider, system, message, maxTokens, timeoutMs);
      return {
        text,
        provider: provider.name,
        providerFamily: provider.family || provider.name,
        latencyMs: Date.now() - startedAt,
      };
    } catch (err) {
      console.error(`[${provider.name}] failed:`, err.message);
      errors.push(`${provider.name}: ${err.message}`);
    }
  }

  const error = new Error("All providers failed");
  error.details = errors;
  throw error;
}

function validateGuess(guess) {
  return !!(guess && guess.context && guess.options && guess.answer);
}

function validateSpectrum(spectrum, word) {
  return !!(
    spectrum &&
    Array.isArray(spectrum.spectrum_words) &&
    spectrum.spectrum_words.length === 3 &&
    spectrum.spectrum_words.some((item) => String(item || "").toLowerCase().includes(String(word || "").toLowerCase()))
  );
}

function validateReview(review) {
  return !!(review && Array.isArray(review.questions) && review.questions.length === 5);
}

function validateCloze(cloze) {
  return !!(cloze && Array.isArray(cloze.questions) && cloze.questions.length === 5 && cloze.passage);
}

async function compileWordPack({ word, learned, system, timeoutMs, providerHint }) {
  const preferredProviders = providerHint ? [providerHint] : undefined;
  const [guessResult, teachResult, spectrumResult] = await Promise.all([
    requestText({ system, message: buildGuessPrompt(word, learned), maxTokens: 1500, timeoutMs, preferredProviders }),
    requestText({ system, message: buildTeachPrompt(word, learned), maxTokens: 1200, timeoutMs: Math.max(timeoutMs, 20000), preferredProviders }),
    requestText({ system, message: buildSpectrumPrompt(word), maxTokens: 900, timeoutMs, preferredProviders }),
  ]);

  const guess = tryJSON(guessResult.text);
  const spectrum = tryJSON(spectrumResult.text);
  const teach = addSpeakMarkers(teachResult.text || "");

  if (!validateGuess(guess)) {
    throw new Error(`Invalid guess payload for ${word}`);
  }
  if (!teach || teach.length < 80) {
    throw new Error(`Invalid teach payload for ${word}`);
  }
  if (!validateSpectrum(spectrum, word)) {
    throw new Error(`Invalid spectrum payload for ${word}`);
  }

  return {
    word,
    guess,
    teach,
    spectrum,
    providers: {
      guess: guessResult.provider,
      teach: teachResult.provider,
      spectrum: spectrumResult.provider,
    },
  };
}

async function compileChapter(body) {
  const chapterWords = Array.isArray(body.chapterWords) ? body.chapterWords.map((item) => String(item || "").trim().toLowerCase()).filter(Boolean) : [];
  const learned = Array.isArray(body.learned) ? body.learned.map((item) => String(item || "").trim().toLowerCase()).filter(Boolean) : [];
  const profile = String(body.profile || "");

  if (!profile.trim()) {
    const err = new Error("Missing profile");
    err.status = 400;
    throw err;
  }
  if (!chapterWords.length || chapterWords.length > 5) {
    const err = new Error("chapterWords must contain 1 to 5 words");
    err.status = 400;
    throw err;
  }

  const timeoutMs = Number(process.env.CHAT_PROVIDER_TIMEOUT_MS || 15000);
  const system = buildSys(profile);
  const shardProviders = ["deepseek-a", "deepseek-b", "gemini"];

  const wordPacks = await Promise.all(
    chapterWords.map((word, index) =>
      compileWordPack({
        word,
        learned: learned.concat(chapterWords.slice(0, index)),
        system,
        timeoutMs,
        providerHint: shardProviders[index % shardProviders.length],
      })
    )
  );

  const chapterLearnedCount = learned.length + chapterWords.length;
  let review = null;
  let cloze = null;

  if (chapterLearnedCount % 10 === 0) {
    const clozeResult = await requestText({
      system,
      message: buildClozePrompt(learned.slice(-5).concat(chapterWords)),
      maxTokens: 1500,
      timeoutMs: Math.max(timeoutMs, 20000),
    });
    cloze = tryJSON(clozeResult.text);
    if (!validateCloze(cloze)) {
      throw new Error("Invalid cloze payload for chapter");
    }
  } else if (chapterLearnedCount % 5 === 0) {
    const reviewResult = await requestText({
      system,
      message: buildReviewPrompt(chapterWords),
      maxTokens: 1500,
      timeoutMs,
    });
    review = tryJSON(reviewResult.text);
    if (!validateReview(review)) {
      throw new Error("Invalid review payload for chapter");
    }
  }

  return {
    mode: "chapter_v4",
    chapterWords,
    learnedCountBefore: learned.length,
    learnedCountAfter: chapterLearnedCount,
    words: wordPacks,
    review,
    cloze,
  };
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { system, message, maxTokens, preferredProviders, mode } = req.body || {};
  const providers = buildProviders();
  if (!providers.length) {
    return res.status(500).json({ error: "No provider API keys configured" });
  }

  try {
    if (mode === "chapter_v4") {
      const payload = await compileChapter(req.body || {});
      res.setHeader("X-Chapter-Mode", "v4");
      return res.status(200).json(payload);
    }

    if (!system || !message) {
      return res.status(400).json({ error: "Missing system or message" });
    }

    const timeoutMs = Number(process.env.CHAT_PROVIDER_TIMEOUT_MS || 15000);
    const result = await requestText({
      system,
      message,
      maxTokens: maxTokens || 2000,
      timeoutMs,
      preferredProviders,
    });

    res.setHeader("X-Provider", result.provider);
    res.setHeader("X-Provider-Family", result.providerFamily);
    res.setHeader("X-Provider-Latency-Ms", String(result.latencyMs));
    return res.status(200).json({ text: result.text });
  } catch (err) {
    const status = err.status || 500;
    return res.status(status).json({
      error: err.message || "All providers failed",
      details: err.details || undefined,
    });
  }
}

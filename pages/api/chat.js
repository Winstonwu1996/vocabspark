// VocabSpark V5-Factory API
// Two-stage commit: compile chapter → validate → publish

const SYSTEM_PROMPT = `你是一位顶级语言学习专家和教学设计师。`;

const providers = {
  "deepseek-a": {
    url: "https://api.deepseek.com/chat/completions",
    key: process.env.DEEPSEEK_API_KEY,
    model: "deepseek-chat",
  },
  "deepseek-b": {
    url: "https://api.deepseek.com/chat/completions", 
    key: process.env.DEEPSEEK_API_KEY_2,
    model: "deepseek-chat",
  },
  "gemini": {
    url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent",
    key: process.env.GEMINI_API_KEY,
    model: "gemini-1.5-flash",
  },
};

// Global concurrency control
const globalLimiter = {
  active: 0,
  max: 4,
  queue: [],
  
  async acquire() {
    return new Promise((resolve) => {
      if (this.active < this.max) {
        this.active++;
        resolve();
      } else {
        this.queue.push(resolve);
      }
    });
  },
  
  release() {
    this.active--;
    if (this.queue.length > 0) {
      this.active++;
      const next = this.queue.shift();
      next();
    }
  }
};

async function callProvider(provider, system, message, maxTokens = 2000, timeoutMs = 20000) {
  const config = providers[provider];
  if (!config) throw new Error(`Unknown provider: ${provider}`);

  const startTime = Date.now();
  
  try {
    await globalLimiter.acquire();
    
    let response;
    if (provider === "gemini") {
      response = await fetch(config.url + `?key=${config.key}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(timeoutMs),
        body: JSON.stringify({
          contents: [{ parts: [{ text: `${system}\n\n${message}` }] }],
          generationConfig: { maxOutputTokens: maxTokens, temperature: 0.7 }
        }),
      });
    } else {
      response = await fetch(config.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${config.key}`,
        },
        signal: AbortSignal.timeout(timeoutMs),
        body: JSON.stringify({
          model: config.model,
          max_tokens: maxTokens,
          temperature: 0.7,
          messages: [
            { role: "system", content: system },
            { role: "user", content: message },
          ],
        }),
      });
    }

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    const latency = Date.now() - startTime;
    
    let text;
    if (provider === "gemini") {
      text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    } else {
      text = data.choices?.[0]?.message?.content || "";
    }

    return { text, latency, provider };
    
  } finally {
    globalLimiter.release();
  }
}

async function requestWithBudget(system, message, maxTokens, totalBudgetMs = 25000) {
  const startTime = Date.now();
  const providerOrder = ["deepseek-a", "deepseek-b", "gemini"];
  
  for (const provider of providerOrder) {
    const elapsed = Date.now() - startTime;
    const remaining = totalBudgetMs - elapsed;
    
    if (remaining < 5000) break; // Not enough budget for another attempt
    
    try {
      console.log(`[${provider}] attempting with ${remaining}ms budget remaining`);
      const result = await callProvider(provider, system, message, maxTokens, Math.min(remaining - 1000, 30000));
      console.log(`[${provider}] success in ${result.latency}ms`);
      return result;
    } catch (error) {
      console.error(`[${provider}] failed: ${error.message}`);
      continue;
    }
  }
  
  throw new Error(`All providers failed within ${totalBudgetMs}ms budget`);
}

// Prompt builders
function buildGuessPrompt(word, learned) {
  const context = learned.length > 0 ? `已学词汇：${learned.join(", ")}` : "";
  return `${context}\n\n为「${word}」设计英语理解猜测题。创造一个生活场景句子，单词用下划线遮盖，给4个选项（A-D），确保有一个明显正确答案。\n\n直接输出JSON：\n{"question":"句子_____遮盖","options":["A选项","B选项","C选项","D选项"],"answer":"B","explanation":"为什么选B"}`;
}

function buildTeachPrompt(word, learned) {
  const context = learned.length > 0 ? `已学词汇：${learned.join(", ")}` : "";
  return `${context}\n\n为「${word}」写专业教学内容。包含：词汇解析、记忆技巧、使用场景。语言生动、有趣，适合中国学生。300-500字。`;
}

function buildSpectrumPrompt(word) {
  return `为单词「${word}」设计词义光谱排序游戏。找2个含义相近但程度不同的常见词，组成从弱到强的3词光谱。写2-3句沉浸式场景描述，及排序正确后的解读。\n\n直接输出JSON：\n{"spectrum_words":["弱","中","强(目标词)"],"scenario":"场景","decoded":"解读"}`;
}

function buildReviewPrompt(words) {
  return `基于已学单词：${words.join(", ")}\n\n设计5题选择复习。每题4选项，测试词汇掌握。\n\n直接输出JSON：\n{"questions":[{"question":"题目","options":["A","B","C","D"],"answer":"B"}]}`;
}

function buildClozePrompt(words) {
  return `基于已学单词：${words.join(", ")}\n\n创作一段150字短文，包含这些词汇的运用，然后设计3个完形填空。\n\n直接输出JSON：\n{"passage":"短文内容","questions":[{"blank":"题目","options":["A","B","C","D"],"answer":"B"}]}`;
}

// Validation functions
function validateGuessPayload(obj) {
  if (!obj || typeof obj !== 'object') return null;
  if (!obj.question || !Array.isArray(obj.options) || obj.options.length !== 4) return null;
  if (!obj.answer || !["A","B","C","D"].includes(obj.answer)) return null;
  return obj;
}

function validateSpectrumPayload(obj) {
  if (!obj || typeof obj !== 'object') return null;
  if (!Array.isArray(obj.spectrum_words) || obj.spectrum_words.length !== 3) return null;
  if (!obj.scenario || !obj.decoded) return null;
  return obj;
}

// Chapter compilation engine
async function compileChapter(words, learned = [], profile = {}) {
  const startTime = Date.now();
  const chapterMetrics = {
    startTime,
    words: words.length,
    tasks: words.length * 2, // guess + teach for each word
    failures: [],
    retries: 0,
  };
  
  console.log(`Starting chapter compilation: ${words.length} words`);
  
  try {
    // Stage 1: Compile core content (guess + teach) with controlled concurrency
    const corePromises = [];
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const wordLearned = [...learned, ...words.slice(0, i)];
      
      // Guess task
      corePromises.push(
        requestWithBudget(SYSTEM_PROMPT, buildGuessPrompt(word, wordLearned), 1500, 25000)
          .then(result => ({ word, type: 'guess', ...result }))
          .catch(error => ({ word, type: 'guess', error: error.message }))
      );
      
      // Teach task  
      corePromises.push(
        requestWithBudget(SYSTEM_PROMPT, buildTeachPrompt(word, wordLearned), 2000, 45000)
          .then(result => ({ word, type: 'teach', ...result }))
          .catch(error => ({ word, type: 'teach', error: error.message }))
      );
    }
    
    const coreResults = await Promise.all(corePromises);
    
    // Process core results
    const chapterData = {};
    let coreFailures = 0;
    
    for (const result of coreResults) {
      if (!chapterData[result.word]) {
        chapterData[result.word] = { word: result.word };
      }
      
      if (result.error) {
        chapterData[result.word][result.type + '_error'] = result.error;
        chapterMetrics.failures.push(`${result.word}:${result.type}`);
        coreFailures++;
      } else if (result.type === 'guess') {
        const validated = validateGuessPayload(tryParseJSON(result.text));
        chapterData[result.word].guess = validated;
        chapterData[result.word].guessRaw = result.text;
      } else if (result.type === 'teach') {
        chapterData[result.word].teach = result.text;
      }
    }
    
    // Fail fast if too many core failures
    if (coreFailures > words.length) {
      throw new Error(`Too many core failures: ${coreFailures}/${words.length * 2}`);
    }
    
    // Stage 2: Background spectrum tasks (non-blocking)
    const spectrumPromises = words.map(word => 
      requestWithBudget(SYSTEM_PROMPT, buildSpectrumPrompt(word), 1500, 20000)
        .then(result => ({ word, spectrum: validateSpectrumPayload(tryParseJSON(result.text)) }))
        .catch(() => ({ word, spectrum: null }))
    );
    
    const spectrumResults = await Promise.all(spectrumPromises);
    for (const result of spectrumResults) {
      if (chapterData[result.word]) {
        chapterData[result.word].spectrum = result.spectrum;
      }
    }
    
    // Stage 3: Generate gates (review + cloze)
    const gates = {};
    
    if (words.length >= 5) {
      try {
        const reviewResult = await requestWithBudget(SYSTEM_PROMPT, buildReviewPrompt(words), 1800, 25000);
        gates.review = tryParseJSON(reviewResult.text);
      } catch (e) {
        gates.review = null;
      }
      
      try {
        const clozeResult = await requestWithBudget(SYSTEM_PROMPT, buildClozePrompt(words), 2000, 25000);
        gates.cloze = tryParseJSON(clozeResult.text);
      } catch (e) {
        gates.cloze = null;
      }
    }
    
    // Final compilation
    const totalTime = Date.now() - startTime;
    const chapter = {
      chapterId: `ch_${words.join('_').substring(0, 20)}_${Date.now()}`,
      status: 'ready',
      words: words.map(word => chapterData[word]).filter(Boolean),
      gates,
      metadata: {
        compiledAt: Date.now(),
        compileTimeMs: totalTime,
        wordsTotal: words.length,
        wordsReady: Object.keys(chapterData).length,
        metrics: chapterMetrics
      }
    };
    
    // Validate chapter completeness
    const readyCount = chapter.words.filter(w => w.guess && w.teach).length;
    if (readyCount < words.length * 0.8) {
      throw new Error(`Chapter validation failed: only ${readyCount}/${words.length} words ready`);
    }
    
    console.log(`Chapter compiled successfully in ${totalTime}ms: ${readyCount}/${words.length} words ready`);
    return chapter;
    
  } catch (error) {
    const totalTime = Date.now() - startTime;
    console.error(`Chapter compilation failed after ${totalTime}ms:`, error.message);
    
    return {
      chapterId: `ch_failed_${Date.now()}`,
      status: 'failed', 
      error: error.message,
      metadata: {
        compiledAt: Date.now(),
        compileTimeMs: totalTime,
        metrics: chapterMetrics
      }
    };
  }
}

function tryParseJSON(text) {
  const raw = String(text || "").trim();
  try {
    return JSON.parse(raw);
  } catch {}

  // Handle markdown fenced JSON blocks: ```json ... ``` or ``` ... ```
  const fenced = raw.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (fenced && fenced[1]) {
    try {
      return JSON.parse(fenced[1].trim());
    } catch {}
  }

  return null;
}

// Main API handler
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { mode, chapterWords, learned, profile } = req.body;
  
  if (mode === 'chapter_v5') {
    if (!chapterWords || !Array.isArray(chapterWords)) {
      return res.status(400).json({ error: 'chapterWords array required' });
    }
    
    try {
      const chapter = await compileChapter(chapterWords, learned, profile);
      return res.status(200).json(chapter);
    } catch (error) {
      console.error('Chapter compilation error:', error);
      return res.status(500).json({ 
        error: 'Chapter compilation failed',
        details: error.message 
      });
    }
  }
  
  // Legacy single-request mode fallback
  const { system, message, maxTokens } = req.body;
  try {
    const result = await requestWithBudget(system || SYSTEM_PROMPT, message, maxTokens || 2000);
    return res.status(200).json({ text: result.text });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export const config = {
  maxDuration: 300,
};
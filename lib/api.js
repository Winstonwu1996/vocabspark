/* ─── Know U. Learning — 共享 API 调用工具 ─── */

export var FETCH_TIMEOUT_MS = 35000;
export var FETCH_TIMEOUT_LONG_MS = 55000;

export var fetchWithTimeout = function(url, options, timeoutMs) {
  timeoutMs = timeoutMs || FETCH_TIMEOUT_MS;
  var controller = new AbortController();
  var timer = setTimeout(function() { controller.abort(); }, timeoutMs);
  options = Object.assign({}, options, { signal: controller.signal });
  return fetch(url, options).finally(function() { clearTimeout(timer); });
};

export var callWithClientRetry = function(fn, maxRetries) {
  maxRetries = maxRetries || 1;
  return fn().catch(function(err) {
    if (maxRetries > 0) {
      return new Promise(function(resolve) { setTimeout(resolve, 1500); })
        .then(function() { return callWithClientRetry(fn, maxRetries - 1); });
    }
    throw err;
  });
};

/* 读取用户自带的 API Key（如果有） */
var getUserApiKeys = function() {
  try {
    var raw = localStorage.getItem('knowu_byo_keys');
    if (!raw) return undefined;
    var keys = JSON.parse(raw);
    if (keys.deepseek || keys.gemini) return keys;
  } catch(e) {}
  return undefined;
};

export var callAPI = async (sys, msg, opts) => {
  opts = opts || {};
  const response = await fetchWithTimeout("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      system: sys,
      message: msg,
      maxTokens: opts.maxTokens || 900,
      preferredProviders: opts.preferredProviders || undefined,
      userApiKeys: getUserApiKeys(),
    }),
  }, FETCH_TIMEOUT_LONG_MS);
  const data = await response.json();
  if (data.error) throw new Error(data.error);
  return data.text;
};

export var callAPIFast = async (sys, msg, opts) => {
  opts = opts || {};
  const response = await fetchWithTimeout("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      system: sys,
      message: msg,
      maxTokens: opts.maxTokens || 1500,
      preferredProviders: opts.preferredProviders || undefined,
      userApiKeys: getUserApiKeys(),
    }),
  });
  const data = await response.json();
  if (data.error) throw new Error(data.error);
  return data.text;
};

/* ─── Streaming: teach 专用 SSE 流式调用 ───
 *  opts: { maxTokens, preferredProviders }
 *  onChunk(partialText): 每次收到增量，回调累计文本
 *  返回 fullText（与 callAPI 同契约）
 *
 *  容错链：
 *    0) NEXT_PUBLIC_ENABLE_STREAMING !== "true"  → 直接 callAPI
 *    1) sessionStorage 标记 knowu_stream_disabled → 直接 callAPI
 *    2) fetch/parse 任何错误 → 标记 disabled + callAPI fallback
 */
export var callAPIStream = async (sys, msg, opts, onChunk) => {
  opts = opts || {};
  var enabled = false;
  try {
    if (typeof process !== "undefined" && process.env && process.env.NEXT_PUBLIC_ENABLE_STREAMING === "true") enabled = true;
    if (typeof window !== "undefined" && window.__forceStreaming === true) enabled = true;
    if (typeof window !== "undefined") {
      try {
        if (localStorage.getItem("knowu_force_streaming") === "1") enabled = true;
      } catch (e) {}
    }
  } catch (e) {}
  if (!enabled) return callAPI(sys, msg, opts);

  if (typeof window !== "undefined") {
    try {
      if (sessionStorage.getItem("knowu_stream_disabled") === "1") return callAPI(sys, msg, opts);
    } catch (e) {}
  }

  var startedAt = Date.now();
  var firstChunkMs = null;
  var chunkCount = 0;

  var recordStat = function(outcome, extra) {
    if (typeof window === "undefined") return;
    try {
      window.__streamStats = window.__streamStats || [];
      window.__streamStats.push(Object.assign({
        t: new Date().toISOString(),
        outcome: outcome,
        totalMs: Date.now() - startedAt,
        firstChunkMs: firstChunkMs,
        chunks: chunkCount,
      }, extra || {}));
      if (window.__streamStats.length > 30) window.__streamStats.shift();
    } catch (e) {}
  };

  var disableAndFallback = function(reason) {
    if (typeof window !== "undefined") {
      try { sessionStorage.setItem("knowu_stream_disabled", "1"); } catch (e) {}
    }
    recordStat("fallback", { reason: reason });
    console.warn("[callAPIStream] fallback:", reason);
    return callAPI(sys, msg, opts);
  };

  try {
    var controller = new AbortController();
    var timeoutId = setTimeout(function() { controller.abort(); }, FETCH_TIMEOUT_LONG_MS);
    var response;
    try {
      response = await fetch("/api/chat-stream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: sys,
          message: msg,
          // 2500 tokens 给 teach JSON 充足空间（JSON 比 Markdown 长 20-30% 因字段名+引号开销）
          // 避免在 scenarios 段被 token 限制截断
          maxTokens: opts.maxTokens || 2500,
          preferredProviders: opts.preferredProviders || undefined,
          userApiKeys: getUserApiKeys(),
        }),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeoutId);
    }

    if (!response.ok || !response.body) {
      return disableAndFallback("http_" + (response && response.status));
    }

    var reader = response.body.getReader();
    var decoder = new TextDecoder();
    var fullText = "";
    var buffer = "";

    while (true) {
      var chunk;
      try {
        chunk = await reader.read();
      } catch (e) {
        return disableAndFallback("read_error");
      }
      if (chunk.done) break;
      buffer += decoder.decode(chunk.value, { stream: true });
      var lines = buffer.split("\n");
      buffer = lines.pop() || "";
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (!line) continue;
        // SSE keep-alive comments (DeepSeek 高负载时会发 ": keep-alive")
        if (line.charAt(0) === ":") continue;
        if (!line.startsWith("data: ")) continue;
        var payload = line.slice(6).trim();
        if (payload === "[DONE]") continue;
        try {
          var json = JSON.parse(payload);
          var delta = json && json.choices && json.choices[0] && json.choices[0].delta && json.choices[0].delta.content;
          if (delta) {
            fullText += delta;
            chunkCount += 1;
            if (firstChunkMs == null) firstChunkMs = Date.now() - startedAt;
            if (onChunk) {
              try { onChunk(fullText); } catch (e) {}
            }
          }
        } catch (e) {
          // 单行 JSON 解析失败不致命，继续下一行
        }
      }
    }

    if (!fullText) return disableAndFallback("empty_stream");
    recordStat("success");
    return fullText;
  } catch (err) {
    return disableAndFallback((err && err.message) || "unknown");
  }
};

/* ─── Partial JSON Parser ───
 * 用于 streaming JSON 场景：每个 chunk 到达时尝试解析截断的 JSON
 * 策略：
 *   1) 直接 JSON.parse（完整情况）
 *   2) 自动补齐未闭合的字符串、对象、数组、末尾逗号
 *   3) 失败返回 null（调用方继续等下一个 chunk）
 */
export var parsePartialJSON = (text) => {
  if (!text || typeof text !== "string") return null;
  // 剥离可能的 markdown 包裹（```json ... ```）
  var s = text.replace(/```\w*\s*/g, "").replace(/```/g, "").trim();
  // 找到第一个 { 开始
  var start = s.indexOf("{");
  if (start === -1) return null;
  s = s.substring(start);

  // 先试直接 parse
  try { return JSON.parse(s); } catch(e) {}

  // 扫描当前未闭合状态
  var inString = false;
  var escape = false;
  var braceDepth = 0;
  var bracketDepth = 0;
  for (var i = 0; i < s.length; i++) {
    var c = s[i];
    if (escape) { escape = false; continue; }
    if (c === "\\") { escape = true; continue; }
    if (inString) {
      if (c === '"') inString = false;
      continue;
    }
    if (c === '"') inString = true;
    else if (c === "{") braceDepth++;
    else if (c === "}") braceDepth--;
    else if (c === "[") bracketDepth++;
    else if (c === "]") bracketDepth--;
  }

  var fixed = s;
  // 闭合未结束的字符串
  if (inString) fixed += '"';
  // 去掉悬挂的末尾逗号（如 "a": 1,  → "a": 1）
  fixed = fixed.replace(/,(\s*)$/, "$1");
  // 闭合数组和对象
  while (bracketDepth > 0) { fixed += "]"; bracketDepth--; }
  while (braceDepth > 0) { fixed += "}"; braceDepth--; }

  try { return JSON.parse(fixed); } catch(e) {}

  // 二次清理：去掉 trailing comma + 不完整的 key
  try {
    var cleaned = fixed
      .replace(/,(\s*[}\]])/g, "$1")  // 数组/对象前的末尾逗号
      .replace(/:\s*,/g, ':"",')       // 空 value 补空字符串
      .replace(/"\s*:\s*$/g, '":""');  // 末尾悬挂的 key
    return JSON.parse(cleaned);
  } catch(e) { return null; }
};

export var tryJSON = (text) => {
  try {
    var c = text.replace(/```\w*\s*/g, "").replace(/```/g, "").trim();
    try { return JSON.parse(c); } catch(e) {}
    var start = c.indexOf("{");
    var end = c.lastIndexOf("}");
    if (start !== -1 && end > start) {
      var jsonStr = c.substring(start, end + 1);
      jsonStr = jsonStr.replace(/,\s*}/g, "}").replace(/,\s*]/g, "]");
      try { return JSON.parse(jsonStr); } catch(e) {}
      jsonStr = jsonStr.replace(/\n/g, "\\n").replace(/\r/g, "");
      try { return JSON.parse(jsonStr); } catch(e) {}
    }
    return null;
  } catch(e) { return null; }
};

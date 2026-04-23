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
          // 1500 tokens 给 teach 足够空间（中英混合约 1000 字），不再被 length 截断
          maxTokens: opts.maxTokens || 1500,
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

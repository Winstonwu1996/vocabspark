/* ─── Know U. Learning — 共享 API 调用工具 ─── */

import { supabase } from './supabase';
import { pickSupabaseUserId } from './getAuthUserId';

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
    // 429 不重试——重试只会撞同一个限流窗口，徒增延迟还把 toast 顺序搞乱。直接穿透给 UI。
    if (err && err.isRateLimit) throw err;
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

/* 读 Supabase 已登录用户的 user.id（软认证；服务端基于此走 user-level rate limit）
 * 软认证理由：攻击者伪造 user.id 只会用掉别人的 quota，不会突破上限。
 * 真要严格验证 token 留 phase 2。
 *
 * ★ 实现（chompcloud 线上事故修复）：
 * 不再直读 localStorage `sb-<ref>-auth-token` 取 `t.user?.id` —— @supabase/auth-js v2
 * 已把 user 拆到独立 `sb-<ref>-auth-token-user` key，老逻辑读不到 → 返回 null →
 * /api/chat 没 X-User-Id → 被当游客走 100/h IP 限流 → 5 分钟烧光、每词加载不出来。
 *
 * 新实现：
 *  1) 主路径：订阅 supabase.auth 事件，缓存当前 userId。同步可读，跟随 Supabase 版本升级。
 *  2) Fallback：缓存未就绪（首次 mount 极早期）时扫 localStorage，覆盖新/旧两种 key 布局
 *     （见 lib/getAuthUserId.js 的 pickSupabaseUserId 纯函数）。
 */
var _cachedUserId = null;
if (typeof window !== "undefined") {
  // 初次读取（异步；订阅未触发前由 fallback 兜底）
  try {
    supabase.auth.getSession().then(function (res) {
      var u = res && res.data && res.data.session && res.data.session.user;
      if (u && typeof u.id === "string") _cachedUserId = u.id;
    }).catch(function () { /* 失败 → 用 fallback */ });
  } catch (e) { /* 安全降级 */ }
  // 订阅：登录/登出/token refresh 时刷新缓存。回调内仅写变量，不 await 任何 supabase 方法
  // （避免 onAuthStateChange 回调死锁，参考 vocab.js authfix 经验）。
  try {
    supabase.auth.onAuthStateChange(function (_event, session) {
      var u = session && session.user;
      _cachedUserId = u && typeof u.id === "string" ? u.id : null;
    });
  } catch (e) { /* 安全降级 */ }
}

var getCurrentUserId = function() {
  if (_cachedUserId) return _cachedUserId;
  if (typeof window === "undefined") return null;
  try {
    return pickSupabaseUserId(Object.entries(localStorage));
  } catch (e) { return null; }
};

var rateLimitHeaders = function() {
  var h = { "Content-Type": "application/json" };
  var uid = getCurrentUserId();
  if (uid) h["X-User-Id"] = uid;
  return h;
};

/* 快筛短释义：走 /api/quick-def（DeepSeek + 缓存，替代不可靠的 MyMemory 机翻）。
 * fail-open：任何失败/429/超时都返 ""，快筛没释义也能继续（只看英文词判断）。 */
export var fetchQuickDef = async function (word) {
  var w = String(word || "").trim();
  if (!w) return "";
  try {
    var resp = await fetchWithTimeout("/api/quick-def?word=" + encodeURIComponent(w), {
      method: "GET",
      headers: rateLimitHeaders(),
    }, FETCH_TIMEOUT_MS);
    if (!resp.ok) return "";
    var data = await resp.json();
    return (data && typeof data.zh === "string") ? data.zh : "";
  } catch (e) {
    return "";
  }
};

/* RateLimitError：可被调用方/UI 识别的限流专用错误（区别于网络错误）。
 * 用法：try { await callAPI(...) } catch (e) { if (e.isRateLimit) ... } */
export class RateLimitError extends Error {
  constructor(message) {
    super(message || "请求过于频繁，请稍后再试");
    this.name = "RateLimitError";
    this.isRateLimit = true;
    this.status = 429;
  }
}

/* 客户端 429 全局事件：
 * 由 callAPI/callAPIFast/callAPIStream 在收到 429 时 dispatch；
 * UI 层（pages/vocab.js 等）监听 'knowu:rate-limited' 自定义事件 → 弹 toast。
 * 不强制 UI 监听 — 没监听就只是静默退化（保持向后兼容）。 */
var dispatchRateLimited = function (route) {
  if (typeof window === "undefined") return;
  try {
    window.dispatchEvent(new CustomEvent("knowu:rate-limited", {
      detail: { route: route, ts: Date.now() },
    }));
  } catch (e) { /* old browser 无 CustomEvent → 安全降级 */ }
};

export var callAPI = async (sys, msg, opts) => {
  opts = opts || {};
  const response = await fetchWithTimeout("/api/chat", {
    method: "POST",
    headers: rateLimitHeaders(),
    body: JSON.stringify({
      system: sys,
      message: msg,
      maxTokens: opts.maxTokens || 900,
      preferredProviders: opts.preferredProviders || undefined,
      userApiKeys: getUserApiKeys(),
    }),
  }, FETCH_TIMEOUT_LONG_MS);
  if (response.status === 429) {
    dispatchRateLimited("/api/chat");
    throw new RateLimitError();
  }
  const data = await response.json();
  if (data.error) throw new Error(data.error);
  return data.text;
};

export var callAPIFast = async (sys, msg, opts) => {
  opts = opts || {};
  const response = await fetchWithTimeout("/api/chat", {
    method: "POST",
    headers: rateLimitHeaders(),
    body: JSON.stringify({
      system: sys,
      message: msg,
      maxTokens: opts.maxTokens || 1500,
      preferredProviders: opts.preferredProviders || undefined,
      userApiKeys: getUserApiKeys(),
    }),
  });
  if (response.status === 429) {
    dispatchRateLimited("/api/chat");
    throw new RateLimitError();
  }
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
      // 之前 disabled=1 是永久（直到刷页面），一次失败 → session 永远 fallback。
      // 改用 disabledUntil timestamp，5 分钟后自动重试 streaming，让短暂失败可恢复。
      var until = Number(sessionStorage.getItem("knowu_stream_disabled_until") || 0);
      if (until && Date.now() < until) return callAPI(sys, msg, opts);
      // 兼容旧标记：清除并继续尝试
      if (sessionStorage.getItem("knowu_stream_disabled") === "1") {
        sessionStorage.removeItem("knowu_stream_disabled");
      }
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
      try {
        // 5 分钟自愈窗口（之前是永久禁用直到刷新）
        sessionStorage.setItem("knowu_stream_disabled_until", String(Date.now() + 5 * 60 * 1000));
      } catch (e) {}
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
        headers: rateLimitHeaders(),
        body: JSON.stringify({
          system: sys,
          message: msg,
          maxTokens: opts.maxTokens || 2500,
          preferredProviders: opts.preferredProviders || undefined,
          userApiKeys: getUserApiKeys(),
          // jsonMode: true 时让 provider 开启 JSON mode（DeepSeek/OpenAI 兼容），
          // 强制严格输出合法 JSON，且不提前停止在 JSON 中间
          jsonMode: !!opts.jsonMode,
          // cacheKey: 可选，传入后服务端检查 teach 缓存。命中秒回；未命中时完成后写入。
          cacheKey: opts.cacheKey || undefined,
        }),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timeoutId);
    }

    if (response && response.status === 429) {
      // 流式端点限流：抛 RateLimitError 让上层 toast 显示，不再 silent fallback。
      dispatchRateLimited("/api/chat-stream");
      throw new RateLimitError();
    }
    if (!response.ok || !response.body) {
      return disableAndFallback("http_" + (response && response.status));
    }

    var reader = response.body.getReader();
    var decoder = new TextDecoder();
    var fullText = "";
    var buffer = "";

    // P1-3（延迟审计）：流读循环加 inactivity 超时。provider"连上但不吐字节"的静默挂起时，
    // 旧逻辑要干等服务端 120s（甚至 edge 180s）才 fallback，正砸在首词进页面最敏感处。
    // 健康流即使慢也会持续吐 token / SSE keep-alive（": keep-alive"），所以"30s 完全无字节" =
    // 真挂了 → 立即 cancel + fallback 到非流式 callAPI。不动服务端 120s 总上限（teach 合法长生成）。
    var INACTIVITY_MS = 30000;
    while (true) {
      var chunk;
      var inactivityTimer = null;
      try {
        chunk = await Promise.race([
          reader.read(),
          new Promise(function (_, reject) { inactivityTimer = setTimeout(function () { reject(new Error("stream_inactivity")); }, INACTIVITY_MS); }),
        ]);
        clearTimeout(inactivityTimer);
      } catch (e) {
        clearTimeout(inactivityTimer);
        // 释放 reader 锁，防止流连接悬挂无法被 GC
        try { reader.cancel(); } catch (_) {}
        return disableAndFallback(e && e.message === "stream_inactivity" ? "stream_inactivity" : "read_error");
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
    // 429 必须穿透：否则被 disableAndFallback → callAPI 二次撞同 limit, UI 拿不到限流提示
    if (err && err.isRateLimit) {
      recordStat("ratelimited");
      throw err;
    }
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

/* ═══ Teach Architecture (Phase 1.5) — Classifier + Dynamic Generator ═══
 * 核心思想：
 *   Step 1: 轻量 classifier 决定词型和方法组合
 *   Step 2: generator 只含选中方法的 schema，prompt 减半
 * 好处：
 *   - prompt 空间被解放 → 可以写更详尽的 schema 和示例
 *   - 每种方法独立可扩展，加新方法 0 动现有代码
 *   - 分类结果 localStorage 缓存，同词直接复用
 */

// 10 种方法的 schema 片段（给 generator 注入）
export var METHOD_SCHEMAS = {
  root: '🧩 词根词缀 root\n{"type":"root", "parts":[{"part":"前缀","meaning":"含义"},...2-4个], "synthesis":"综合含义描述", "anchor":"（可选）画像短句 ≤20 字"}',
  mnemonic: '🧠 谐音联想 mnemonic\n{"type":"mnemonic", "soundAlike":"中文谐音", "interpretation":"→ 含义解释", "anchor":"（可选）画像场景"}',
  image: '🖼️ 画面记忆 image\n{"type":"image", "scene":"场景描述", "mapping":"→ 含义映射", "anchor":"（可选）画像短句"}',
  nuance: '🔍 近义词辨析 nuance\n{"type":"nuance", "compareWith":"对比的词", "target":{"word":"目标词","nuance":"细微差异描述"}, "other":{"word":"对比词","nuance":"细微差异"}}',
  scale: '📶 程度光谱 scale\n{"type":"scale", "words":["弱","中弱","中强","强/目标词"], "description":"强度维度说明"}',
  etymology: '📖 词源故事 etymology\n{"type":"etymology", "origin":"来源（语族/根源）", "story":"简短典故 ≤40 字"}',
  collocation: '🔗 搭配学习 collocation\n{"type":"collocation", "items":[{"phrase":"搭配词组","zh":"中文含义"},...2-3个]}',
  antonym: '⚖️ 反义对比 antonym\n{"type":"antonym", "opposite":"反义词", "contrast":"对比说明（语义轴/强度）"}',
  family: '🧬 词性家族 family\n{"type":"family", "members":[{"word":"词","pos":"adj/n/v/adv","meaning":"含义"},...3-4个]}',
  microstory: '🎬 微故事 microstory\n{"type":"microstory", "scene":"核心场景（≤20 字）", "interpretation":"→ 含义解读"}'
};

// 10 种方法的示例（给 generator 模仿质感）
export var METHOD_EXAMPLES = {
  root: '示例（intelligent）：\n{"type":"root", "parts":[{"part":"inter-","meaning":"之间"},{"part":"legere","meaning":"选择"},{"part":"-ent","meaning":"形容词后缀"}], "synthesis":"在信息间做选择 = 聪明", "anchor":"王者五分路秒选最优 = intelligent"}',
  mnemonic: '示例（perpetual）：\n{"type":"mnemonic", "soundAlike":"陪 pet 永远", "interpretation":"陪宠物永不停歇 = 永久的", "anchor":"王者赛季循环 = perpetually"}',
  image: '示例（abandon）：\n{"type":"image", "scene":"一艘空船漂向雾里", "mapping":"→ 人走光了，完全舍弃", "anchor":"高地被破时弃塔的瞬间"}',
  nuance: '示例（intelligent）：\n{"type":"nuance", "compareWith":"smart", "target":{"word":"intelligent","nuance":"深度思考（研究 AI 论文）"}, "other":{"word":"smart","nuance":"灵光机灵（套路打野）"}}',
  scale: '示例（ecstatic）：\n{"type":"scale", "words":["glad","delighted","thrilled","ecstatic"], "description":"开心强度从一般到封顶"}',
  etymology: '示例（sabotage）：\n{"type":"etymology", "origin":"法语 sabot（木鞋）", "story":"19 世纪工人把木鞋扔进机器捣乱 → 破坏"}',
  collocation: '示例（abandon）：\n{"type":"collocation", "items":[{"phrase":"abandon a plan","zh":"放弃计划"},{"phrase":"abandon ship","zh":"弃船/退出危局"},{"phrase":"abandon hope","zh":"放弃希望"}]}',
  antonym: '示例（ignorance）：\n{"type":"antonym", "opposite":"knowledge", "contrast":"无知 ↔ 知识，中间还有 awareness（意识到）"}',
  family: '示例（intelligent）：\n{"type":"family", "members":[{"word":"intelligent","pos":"adj","meaning":"聪明的"},{"word":"intelligence","pos":"n","meaning":"智力/情报"},{"word":"intellectual","pos":"adj","meaning":"智识的"},{"word":"intelligently","pos":"adv","meaning":"聪明地"}]}',
  microstory: '示例（democracy）：\n{"type":"microstory", "scene":"每人一票决定命运", "interpretation":"→ 民主 = 平等参与决策"}'
};

// 视觉锚格式（按词的抽象度选）
// 质量铁律：锚点是给学生"秒懂词义"的画面，不是创意秀场。诡异/牵强的锚点比没有更糟
//（用户实测反馈：有的锚点看了反而困惑）。
var VISUAL_ANCHOR_RULES = '\n【锚点质量铁律】\n' +
  '- emoji 必须直接画出词义核心——没学过这个词的学生看 emoji 也能猜到词义方向；严禁牵强联想、抽象拼贴、内部梗\n' +
  '- text 必须一句话把 emoji 和词义连起来，读完就明白"为什么是这几个 emoji"\n' +
  '- 只用人人认识的常见 emoji；找不到贴切的就少放一个，绝不硬凑\n' +
  '- 输出前自检：emojis+text 组合能让不懂这个词的人大致猜到意思吗？不能就重写';
export var VISUAL_ANCHOR_FORMATS = {
  L1: 'L1 具象/动作词 → 3 emoji + 一句动态画面\n示例：{"emojis":"🚢💨🌫️","text":"空船漂雾里"}' + VISUAL_ANCHOR_RULES,
  L2: 'L2 中度抽象词 → 2 emoji + 带情境短语\n示例：{"emojis":"🥳💥","text":"派对嗨翻天"}' + VISUAL_ANCHOR_RULES,
  L3: 'L3 高度抽象/概念词 → 1-2 emoji + 典型使用情境短语\n示例：{"emojis":"🎩","text":"米其林摆盘 / Apple 发布会文案"}' + VISUAL_ANCHOR_RULES,
  L4: 'L4 极抽象/专业词 → 跳过 emoji，1 句典型语境句\n示例：{"emojis":"","text":"Scientists propose a hypothesis before running experiments."}'
};

// Classifier system prompt
export var buildClassifySys = function() {
  return "你是英语学习策略规划师，基于 SLA（二语习得）研究为每个单词选最适合的记忆方法。严格输出 JSON，不加任何说明文字。";
};

// Classifier user prompt — 让 AI 判定词型、选方法、选对比词、判抽象度
export var buildClassifyPrompt = function(word, profile, learned) {
  var profileBrief = String(profile || "").slice(0, 200);
  var learnedList = (Array.isArray(learned) && learned.length > 0) ? learned.slice(-15).join(", ") : "";
  return "单词：" + word + "\n" +
    "画像：" + (profileBrief || "通用学生") + "\n" +
    (learnedList ? "最近学过：" + learnedList + "\n" : "") +
    "\n【任务】判定词型 + 选 2-3 种记忆方法 + 选对比词 + 判抽象度\n\n" +
    "【方法池 — type 字段必须是以下 10 个英文小写 key 之一（不要带 emoji、不要带中文）】\n" +
    "root | mnemonic | image | nuance | scale | etymology | collocation | antonym | family | microstory\n\n" +
    "各方法简介：\n" +
    "- root（词根词缀）：适合学术词，词根+词缀拼意\n" +
    "- mnemonic（谐音联想）：适合抽象难记词，用中文谐音\n" +
    "- image（画面记忆）：适合具象动作/场景\n" +
    "- nuance（近义辨析）：适合需要区分细微差异\n" +
    "- scale（程度光谱）：适合有强弱梯度的形容词/动词\n" +
    "- etymology（词源故事）：适合有有趣历史背景\n" +
    "- collocation（搭配）：适合有固定高频搭配的动词/名词\n" +
    "- antonym（反义对比）：适合有明显反义\n" +
    "- family（词性家族）：适合衍生词多的词根词\n" +
    "- microstory（微故事）：适合抽象概念词\n\n" +
    "【词型（带明确判定依据）】\n" +
    "A 程度词 — 有强弱梯度的形容词或情感动词\n" +
    "   例：ecstatic > thrilled > delighted > glad；adore > love > like > dislike > loathe\n" +
    "B 搭配型 — 中性动词或抽象名词，有固定高频搭配（abandon+plan/ship/hope，require+action）\n" +
    "   例：abandon, require, ignorance, acquire\n" +
    "C 词根型 — 学术词，词根+词缀清晰可拼意（inter-+legere=intelligent，bio-+log-+-ical=biological）\n" +
    "   例：intelligent, biological, democracy（dem-+-ocracy）\n" +
    "D 难记型 — 抽象、发音无线索、学生容易忘（perpetual, ambulance, hearse）\n" +
    "   例：perpetual, ambulance, hearse, epitome\n" +
    "E 抽象概念 — 纯概念性，无具象画面（democracy, paradox, rhetoric）\n" +
    "   注意：democracy 兼具 C（词根 dem-+-ocracy）和 E（抽象），优先 C\n" +
    "F 多义词 — 有 2+ 核心不同意义（run=跑/运行/经营，break=打破/休息/机会）\n\n" +
    "【推荐组合（基于 SLA 研究）】\n" +
    "A → scale + nuance\n" +
    "B → collocation + nuance\n" +
    "C → root + family\n" +
    "D → mnemonic + image\n" +
    "E → microstory + antonym\n" +
    "F → image + nuance\n\n" +
    "【第 3 种方法（谨慎，一般 2 种够）】\n" +
    "仅在词兼具明显多特征时加。不强求。\n\n" +
    "【对比词 — 关键规则】\n" +
    "comparedWith 必须和目标词有**明确的语义关系**之一：\n" +
    "- 近义词（力度不同：intelligent vs smart；reject vs refuse）\n" +
    "- 反义词（ignorance vs knowledge；reject vs accept）\n" +
    "- 形近易混（abandon vs abundant）\n" +
    "- 同根词（intelligent vs intelligence）\n" +
    "- 明确场景关联（teammate 和 opponent）\n\n" +
    "🚫 禁止：目标词和对比词语义无关（如 reject 和 mysterious 毫无语义关系，绝不能配对）\n" +
    "🚫 禁止：为了\"用上学过的词\"而硬凑 — 如果学过的词里没有语义相关的，**忽略**\"最近学过\"列表，选一个合适的通用词\n\n" +
    "❗❗【method 必须与 comparedWith 关系一致】❗❗\n" +
    "- 选 nuance（近义辨析）→ comparedWith **必须是近义词**（同方向、细微差异）\n" +
    "- 选 antonym（反义对比）→ comparedWith **必须是反义词**（相反方向）\n" +
    "- 选 family（词性家族）→ comparedWith 必须是同根不同词性\n" +
    "🚫 严禁组合：nuance method + 反义对比词（如 ignorance vs knowledge 用 nuance 是错的，应改用 antonym）\n" +
    "🚫 严禁组合：antonym method + 近义对比词（如 intelligent vs smart 用 antonym 是错的，应改用 nuance）\n\n" +
    "选择优先级：\n" +
    "1. 先从目标词的语义圈里找（近义/反义/形近/同根）\n" +
    "2. 再检查最近学过的词里是否有上述语义圈内的词\n" +
    "3. 有就用学过的词（记忆强化效果最好）\n" +
    "4. 没有就选通用常见词（不要比目标词更生僻）\n\n" +
    "【抽象度】\n" +
    "L1 具象/动作（abandon, explode, crush）\n" +
    "L2 中度抽象（ecstatic, intelligent, mysterious, perpetual）\n" +
    "L3 高度抽象/概念（sophisticated, paradox, rhetoric, democracy）\n" +
    "L4 极抽象/专业（hypothesis, entropy, paradigm）\n\n" +
    "【输出格式 — 严格 JSON】\n" +
    '{\n' +
    '  "wordType": "A",\n' +
    '  "methods": [\n' +
    '    {"type": "scale", "reason": "≤15 字理由"},\n' +
    '    {"type": "nuance", "reason": "≤15 字理由"}\n' +
    '  ],\n' +
    '  "comparedWith": "thrilled",\n' +
    '  "abstractLevel": "L2"\n' +
    '}\n\n' +
    '注意：methods[].type 必须是 root/mnemonic/image/nuance/scale/etymology/collocation/antonym/family/microstory 其中之一，全小写英文，不带 emoji 和中文。\n\n' +
    "直接输出 JSON，不要任何其他文字。";
};

// Classifier 主调用：cache-first + fallback
export var callClassify = async function(word, profile, learned) {
  var cacheKey = "knowu_classify_v1_" + String(word || "").toLowerCase();
  // 1. Cache hit → 直接返回
  if (typeof window !== "undefined") {
    try {
      var cached = localStorage.getItem(cacheKey);
      if (cached) {
        var parsed = JSON.parse(cached);
        if (parsed && parsed.wordType && Array.isArray(parsed.methods) && parsed.methods.length > 0) {
          return parsed;
        }
      }
    } catch (e) {}
  }
  // 2. Call /api/chat via callAPIFast
  try {
    var sys = buildClassifySys();
    var usr = buildClassifyPrompt(word, profile, learned);
    var raw = await callAPIFast(sys, usr, { maxTokens: 300 });
    var result = tryJSON(raw);
    if (result && result.wordType && Array.isArray(result.methods) && result.methods.length > 0) {
      // Normalize：即使 AI 返回 "🎬 microstory" 这种带 emoji 的 type，也清洗成纯英文 key
      result.methods = result.methods.map(function(m) {
        if (!m) return null;
        var typeRaw = String(m.type || "").toLowerCase();
        // 匹配已知方法名（取第一个命中的）
        var known = ["root","mnemonic","image","nuance","scale","etymology","collocation","antonym","family","microstory"];
        var normalized = null;
        for (var i = 0; i < known.length; i++) {
          if (typeRaw.indexOf(known[i]) !== -1) { normalized = known[i]; break; }
        }
        if (!normalized) return null;
        return { type: normalized, reason: m.reason || "" };
      }).filter(function(m){ return m !== null; });

      if (result.methods.length === 0) {
        // 全部 method 清洗后都无效 — 走 fallback
        throw new Error("all methods invalid after normalize");
      }

      // 3. Cache for future
      if (typeof window !== "undefined") {
        try { localStorage.setItem(cacheKey, JSON.stringify(result)); } catch (e) {}
      }
      return result;
    }
  } catch (err) {
    console.warn("[callClassify] failed:", (err && err.message) || err);
  }
  // 4. Fallback — 通用方法集（image + nuance 最通用）
  return {
    wordType: "F",
    methods: [
      { type: "image", reason: "fallback: 通用画面记忆" },
      { type: "nuance", reason: "fallback: 通用同义辨析" }
    ],
    comparedWith: null,
    abstractLevel: "L2"
  };
};

/* ─── F1: tap-to-translate Achieve3000 式即时翻译 ──────────────────
 *
 * 检测对话里的英文词/短语，让用户点击查看中文翻译。
 *
 * 设计：
 *   - 跳过 mustMemorize 词（已经金色 chip）
 *   - 跳过 glossary 名词（已经蓝色虚线）
 *   - 跳过常见 stop words
 *   - 检测剩下的：≥2 词的短语 OR 单词 ≥5 字符
 *   - 点击 → 调 LLM 即时翻译，显示在 phrase 下方
 *   - 缓存到 sessionStorage，避免重复 API 调用
 */

import { callAPIFast } from './api';

// 常见 stop words — 不需要翻译的高频虚词
var STOP_WORDS = new Set([
  "the", "and", "but", "for", "with", "this", "that", "have", "has", "had",
  "from", "you", "your", "yours", "his", "her", "its", "their", "our", "ours",
  "mine", "them", "they", "these", "those", "was", "were", "are", "will",
  "would", "could", "should", "can", "may", "might", "must", "just", "like",
  "more", "less", "very", "also", "than", "then", "when", "what", "where",
  "why", "how", "who", "which", "while", "after", "before", "into", "over",
  "under", "again", "both", "each", "few", "most", "some", "such", "here",
  "there", "now", "way", "all", "any", "one", "two", "three", "four", "five",
  "year", "years", "day", "days", "time", "people", "make", "made", "take",
  "took", "see", "saw", "say", "said", "get", "got", "use", "used", "do",
  "did", "does", "go", "went", "gone", "come", "came", "even", "ever", "old",
  "new", "good", "best", "well", "much", "many", "lot", "still", "only",
  "first", "last", "next", "every", "much", "great"
]);

// ─── 检测英文短语/词 (Achieve3000 式更广覆盖) ────────────────────
// 设计：每个英文词（≥3 字符且不在 STOP_WORDS）都可点查翻译。
// 让用户的 "覆盖感" 像 Achieve3000 — 几乎每个英文都能查。
export var findEnglishPhrases = function(text, skipRanges) {
  if (!text) return [];
  skipRanges = skipRanges || [];

  // 匹配单个英文词（含可选所有格 's）—— 2 字符以上
  // 让每个有意义的英文词都被识别
  var wordRe = /[A-Za-z]{2,}(?:'[a-z]+)?/g;

  var hits = [];
  var m;
  while ((m = wordRe.exec(text)) !== null) {
    var word = m[0];
    var start = m.index;
    var end = start + word.length;

    // 跳过 skipRanges 重叠（must-memorize / glossary 已占用）
    var overlap = skipRanges.find(function(r) {
      return start < r.end && end > r.start;
    });
    if (overlap) continue;

    // 跳过 stop words（极常见的虚词不需要翻）
    if (STOP_WORDS.has(word.toLowerCase())) continue;

    hits.push({ phrase: word, start: start, end: end });
  }

  // 合并相邻的 hits 成短语（让"King John"作为一个 hit 而不是 2 个）
  // 条件：两个 hit 之间只有空格 (≤ 2 个空格字符)
  var merged = [];
  for (var i = 0; i < hits.length; i++) {
    var cur = hits[i];
    if (merged.length > 0) {
      var prev = merged[merged.length - 1];
      var gap = text.substring(prev.end, cur.start);
      // 仅在间隔是单个空格时合并
      if (gap === " ") {
        prev.end = cur.end;
        prev.phrase = text.substring(prev.start, prev.end);
        continue;
      }
    }
    merged.push(Object.assign({}, cur));
  }
  return merged;
};

// ─── 翻译缓存 ───────────────────────────────────────────────────
var memCache = {};

var loadCache = function() {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem("vocabspark_translations") || "{}");
  } catch (e) { return {}; }
};

var saveCache = function(cache) {
  if (typeof window === "undefined") return;
  try {
    // S12: LRU — 超过 100 条时按时间裁掉最早的
    var keys = Object.keys(cache);
    if (keys.length > 100) {
      // cache 没存时间戳，简单按 keys 顺序裁掉前面的（JSON.parse 顺序不稳但够用）
      var toKeep = keys.slice(-100);
      var trimmed = {};
      toKeep.forEach(function(k) { trimmed[k] = cache[k]; });
      cache = trimmed;
    }
    localStorage.setItem("vocabspark_translations", JSON.stringify(cache));
  } catch (e) {
    // quota exceeded? 清掉再试
    try { localStorage.removeItem("vocabspark_translations"); } catch (e2) {}
  }
};

// ─── 翻译单个短语 ───────────────────────────────────────────────
export var translatePhrase = async function(phrase) {
  var key = phrase.toLowerCase().trim();
  if (memCache[key]) return memCache[key];

  var stored = loadCache();
  if (stored[key]) {
    memCache[key] = stored[key];
    return stored[key];
  }

  // 调 LLM 翻译
  var sys = "You translate English to Chinese. Output ONLY the Chinese translation. No quotes, no markdown, no explanation. If the input is a phrase, give natural Chinese (not literal word-by-word).";
  var prompt = "Translate: " + phrase;
  try {
    var result = await callAPIFast(sys, prompt);
    var cn = (result || "").trim().replace(/^["']|["']$/g, "");
    if (!cn) cn = "(翻译失败)";
    memCache[key] = cn;
    stored[key] = cn;
    saveCache(stored);
    return cn;
  } catch (e) {
    return "(网络问题，再试一次)";
  }
};

// 同步预查（不调 API） — 用于决定 popover 是否要显示 loading
export var getCachedTranslation = function(phrase) {
  var key = phrase.toLowerCase().trim();
  if (memCache[key]) return memCache[key];
  var stored = loadCache();
  return stored[key] || null;
};

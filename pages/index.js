import { useState, useRef, useEffect, useCallback } from "react";
import Head from "next/head";
import { supabase } from '../lib/supabase';
import * as XLSX from 'xlsx';

/* ═══════════════════════════════════════════════════════
   VocabSpark v8 — AI 词汇导师
   v8 变更：预加载优化 · TTS 升级(真人录音+神经语音) · 进度里程碑 · 滑入动画 · 答案填入 · 庆祝效果
   ═══════════════════════════════════════════════════════ */

var C = {
  bg: "#faf7f2", card: "#ffffff", accent: "#d45d3c", accentLight: "#fef0ec",
  teal: "#2a7a6e", tealLight: "#e8f5f2",
  purple: "#6c5ce7", purpleLight: "#f0edff", gold: "#e6a817", goldLight: "#fef9e7",
  text: "#2c2420", textSec: "#7a6e64", border: "#e8e0d6",
  green: "#22a06b", greenLight: "#e6fcf5", red: "#e53e3e", redLight: "#fef2f2",
  dark: "#161b22", darkPanel: "#1c2333", darkBorder: "#30363d", darkGreen: "#3fb950", darkBlue: "#2f81f7",
  shadow: "0 2px 12px rgba(44,36,32,0.06)",
};
var FONT = "'DM Sans','Noto Sans SC',sans-serif";
var DAILY_LIMIT = 10;
var DAILY_KEY = 'vocabspark_daily';
var DAILY_NEW_QUOTA_KEY = 'vocabspark_daily_new_quota_v1';
var DEEP_REVIEW_DAILY_KEY = 'vocabspark_deep_review_daily_v1';
var STUDY_STREAK_KEY = 'vocabspark_study_streak_v1';
var PHOTO_LIMIT = 5;
var PROFILE_MAX = 1000;
var PROFILE_TEXTAREA_PLACEHOLDER =
  "写几句孩子的情况，例如：年级、城市、好朋友、爱好、最近喜欢的动画或歌……写越多 AI 越了解孩子，学单词越有趣！";

var PROFILE_GUIDE_EXAMPLES = [
  "• 年级、所在城市 / 学校简称",
  "• 好朋友的名字（例：Emily）",
  "• 教练或老师的称呼（例：网球教练 Ms. Lee）",
  "• Willow 今天和 Emily 打了一场超刺激的网球！",
  "• Willow 最近在追《鬼灭之刃》，超喜欢炭治郎",
  "• 上周末去了 Irvine Spectrum，吃了抹茶冰淇淋",
  "• Willow 的偶像是 Taylor Swift，已刷了 100 遍 Eras Tour"
];

var PROFILE_DEFAULT_EXAMPLE = "Willow，6年级，在 Irvine 读书\n好朋友：Emily、Sophia\n爱好：网球（教练 Ms. Lee）、画画\n最近在追《鬼灭之刃》，最喜欢炭治郎\n偶像是 Taylor Swift\n上周末和 Emily 去 Irvine Spectrum 吃了抹茶冰淇淋";

var STUDY_GOAL_OPTIONS = [
  { key: "ssat", label: "备考 SSAT", desc: "冲刺 SSAT 词汇部分" },
  { key: "isee", label: "备考 ISEE", desc: "ISEE 词汇与阅读备考" },
  { key: "sat", label: "备考 SAT", desc: "SAT 高频核心词" },
  { key: "toefl", label: "备考 TOEFL", desc: "托福词汇与学术表达" },
  { key: "ielts", label: "备考 IELTS", desc: "雅思词汇与写作用词" },
  { key: "other", label: "其他", desc: "有其他考试或学习目标" },
];

var WORD_STATUS_KEY = "vocabspark_word_status_v1";
var REVIEW_WORD_DATA_KEY = "vocabspark_review_word_data_v1";
var WORD_STATUS_META = {
  unlearned: { icon: "⚪", text: "未学", color: "#98a2b3" },
  learning: { icon: "🔵", text: "学习中", color: "#2f81f7" },
  mastered: { icon: "🟢", text: "已掌握", color: "#22a06b" },
  uncertain: { icon: "🟡", text: "不确定", color: "#e6a817" },
  error: { icon: "🔴", text: "易错", color: "#e53e3e" },
  skipped: { icon: "⏭️", text: "已跳过", color: "#94a3b8" },
};

/** 缩小边长并转 JPEG base64，避免请求体过大（Next 默认 1MB）及加速上传 */
var compressImageToJpegBase64 = function(file, maxEdge) {
  maxEdge = maxEdge || 1280;
  return new Promise(function(resolve, reject) {
    if (typeof window === "undefined" || typeof document === "undefined") {
      reject(new Error("仅在浏览器内可用"));
      return;
    }
    var url = URL.createObjectURL(file);
    var img = new window.Image();
    img.onload = function() {
      URL.revokeObjectURL(url);
      try {
        var w = img.naturalWidth || img.width;
        var h = img.naturalHeight || img.height;
        if (!w || !h) {
          reject(new Error("无法读取图片"));
          return;
        }
        var scale = Math.min(1, maxEdge / Math.max(w, h));
        var cw = Math.max(1, Math.round(w * scale));
        var ch = Math.max(1, Math.round(h * scale));
        var canvas = document.createElement("canvas");
        canvas.width = cw;
        canvas.height = ch;
        var ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("无法处理图片"));
          return;
        }
        ctx.drawImage(img, 0, 0, cw, ch);
        var dataUrl = canvas.toDataURL("image/jpeg", 0.82);
        var idx = dataUrl.indexOf(",");
        if (idx < 0) {
          reject(new Error("压缩失败"));
          return;
        }
        resolve(dataUrl.slice(idx + 1));
      } catch (e) {
        reject(e);
      }
    };
    img.onerror = function() {
      URL.revokeObjectURL(url);
      reject(new Error("HEIC_OR_UNSUPPORTED"));
    };
    img.src = url;
  });
};

var fileToBase64Raw = function(file) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onload = function(ev) {
      var r = ev.target.result;
      if (typeof r !== "string") {
        reject(new Error("读取失败"));
        return;
      }
      var i = r.indexOf(",");
      resolve(i >= 0 ? r.slice(i + 1) : r);
    };
    reader.onerror = function() { reject(new Error("读取失败")); };
    reader.readAsDataURL(file);
  });
};

/* ─── Sound Effects (Web Audio API, zero dependencies) ─── */
var audioCtx = null;
var getAudioCtx = () => { if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); return audioCtx; };

var playTone = (freq, dur, type) => {
  try {
    var ctx = getAudioCtx();
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = type || "sine";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime + dur);
  } catch(e) {}
};

var sfx = {
  correct: () => { playTone(523, 0.12, "sine"); setTimeout(() => playTone(659, 0.12, "sine"), 100); setTimeout(() => playTone(784, 0.25, "sine"), 200); },
  wrong: () => { playTone(200, 0.15, "square"); setTimeout(() => playTone(180, 0.25, "square"), 120); },
  spectrumWin: () => { playTone(523, 0.1, "sine"); setTimeout(() => playTone(659, 0.1, "sine"), 80); setTimeout(() => playTone(784, 0.1, "sine"), 160); setTimeout(() => playTone(1047, 0.3, "sine"), 240); },
  spectrumFail: () => { playTone(300, 0.12, "sawtooth"); setTimeout(() => playTone(250, 0.2, "sawtooth"), 100); },
  complete: () => { [523,659,784,1047,784,1047].forEach((f,i) => setTimeout(() => playTone(f, 0.15, "sine"), i * 100)); },
  click: () => { playTone(800, 0.05, "sine"); },
};

/* ─── Prompt Builders ─── */
var buildSys = (profile, goal, goalCustom) => {
  var p = (profile || '').slice(0, PROFILE_MAX);
  var goalText = "";
  if (goal) {
    if (goal === "other" && goalCustom) {
      goalText = "\n\n【学习目的】\n" + goalCustom.slice(0, 100) + "\n请在教学中适当贴合该目标，例如选用相关的例句语境。";
    } else {
      var found = STUDY_GOAL_OPTIONS.find(function(o) { return o.key === goal; });
      goalText = found ? "\n\n【学习目的】\n" + found.label + "（" + found.desc + "）\n请在教学中适当贴合该目标，例如选用与考试/阅读/写作相关的例句语境。" : "";
    }
  }
  return "你是一个幽默、有耐心且精通中英双语的词汇导师。风格像一个很酷的大姐姐——会用梗、会吐槽、偶尔抖机灵，但绝不油腻。\n\n【学生画像】\n" + p + goalText + "\n\n你必须深度利用上面的学生画像。每一个例句、每一个画面、每一个比喻，都必须和这个学生的具体爱好、常去的地方、日常生活紧密关联。让学生觉得\"这说的就是我的生活\"。";
};

var buildGuessPrompt = (word, learned) => {
  var ctx = learned.length > 0 ? "\n学生之前学过：" + learned.join(", ") : "";
  return "单词：" + word + ctx + "\n\n请执行 Step 1（猜）：\n\n1. 给出这个单词的IPA音标\n2. 给出一个生动的英文语境句（1-2句），用 _____ 代替目标单词，深度使用学生画像中的具体场景。\n3. 给出 4 个中文选项（A/B/C/D），其中只有 1 个是正确含义。\n\nIMPORTANT: 直接输出JSON，不要任何前导文字：\n" + '{"phonetic":"/音标/","context":"语境句","options":{"A":"选项A","B":"选项B","C":"选项C","D":"选项D"},"answer":"字母","hint":"提示"}';
};

var buildTeachPrompt = (word, learned) => {
  var ctx = learned.length > 0 ? "\n学生之前学过：" + learned.join(", ") + "。请在\"连\"环节与这些词建立联系。" : "";
  return "单词：" + word + ctx + "\n\n请依次执行 3 个环节。\n\n重要格式规则：[🔊] 标记只能放在完整英文例句的最末尾（紧跟在句号/感叹号之后），绝对不要插在句子中间或单词后面。\n\n【教 · Teach】\n从以下方法中挑最适合的 3 种，每种 2-4 句话：\n1. 词根词缀解剖 🧩\n2. 趣味谐音/联想 🧠（仅在巧妙时用）\n3. 画面感记忆 🖼️（用学生画像场景）\n4. 近义词找茬 🔍\n5. 词义光谱法 📶\n6. 词源故事 📖\n\n【连 · Connect】\n与学过的词建立联系。\n\n【练 · Apply】\n- 2 个高频搭配，格式：搭配词组 [🔊]\n- 2 个情景造句，格式：完整英文句。 [🔊]（中文翻译）\n每个造句需结合学生画像不同爱好/场景。\n\n要求：400-500字，朋友聊天语气，释义用中文，例句用英文，多换行。统一用直引号\"\"，不要用花引号或反引号。";
};

var buildSpectrumPrompt = (word) => {
  return "单词：" + word + "\n\n设计\"词义光谱排序\"游戏。找2个含义相近但程度不同的常见词，组成从弱到强的3词光谱。写2-3句沉浸式场景描述（用学生画像场景），及排序正确后的解读。\n\nIMPORTANT: 直接输出JSON：\n" + '{"spectrum_words":["弱","中","强(目标词)"],"scenario":"场景","decoded":"解读"}';
};

var buildReviewPrompt = (words) => {
  return "学生刚学完5个词：" + words.join(", ") + "\n\n设计互动复习关卡。直接输出JSON：\n" + '{"type":"fill_blank","title":"标题","intro":"场景描述","questions":[{"id":1,"sentence":"含_____的句","options":["词1","词2","词3"],"answer":"答案","explanation":"解释"},{"id":2,"sentence":"...","options":["..."],"answer":"...","explanation":"..."},{"id":3,"sentence":"...","options":["..."],"answer":"...","explanation":"..."},{"id":4,"sentence":"...","options":["..."],"answer":"...","explanation":"..."},{"id":5,"sentence":"...","options":["..."],"answer":"...","explanation":"..."}]}' + "\n\n每题对应一个词，options含正确答案和2个干扰词，场景结合学生画像。";
};

var buildClozePrompt = (words) => {
  return "学生刚学完10个词：" + words.join(", ") + "\n\n请写一篇120-150词的英文小短文（故事/日记/场景描述），深度结合学生画像的生活场景。短文中自然嵌入这10个词中的5个，将这5个词替换为 _____(1), _____(2) 等编号空格。\n\n在短文后给出5个填空题，每题3个选项（从10个词中选）。\n\nIMPORTANT: 直接输出JSON：\n" + '{"title":"短文标题","passage":"短文正文，含_____(1)等空格","questions":[{"id":1,"blank":"_____(1)","options":["词1","词2","词3"],"answer":"正确词","explanation":"为什么选这个词"},{"id":2,"blank":"_____(2)","options":["..."],"answer":"...","explanation":"..."},{"id":3,"blank":"_____(3)","options":["..."],"answer":"...","explanation":"..."},{"id":4,"blank":"_____(4)","options":["..."],"answer":"...","explanation":"..."},{"id":5,"blank":"_____(5)","options":["..."],"answer":"...","explanation":"..."}]}';
};

var buildReviewTeachPrompt = (word, learned, reviewCount) => {
  return "单词复习：" + word +
    "\n这是学生第 " + reviewCount + " 次复习这个词。" +
    "\n学生之前学过但记忆模糊，需要巩固。" +
    "\n\n请用一个全新的生活场景帮助记忆（不要重复之前例子），要求：" +
    "\n1) 2-3句生动场景（结合学生画像）" +
    "\n2) 一个易混词对比" +
    "\n3) 一个简短记忆口诀" +
    "\n4) 一道SSAT风格单选题（含答案与解释）" +
    "\n\n输出格式：Markdown，200-250字，朋友聊天语气。";
};

/* ─── TTS: server proxy (Google Neural) → speechSynthesis fallback ─── */
var audioCache = {};     // sentence text → Audio object (server TTS)
var dictAudioCache = {}; // word → Audio object (Free Dictionary API, real human recording)

var _speakFallback = (text) => {
  if (typeof window === "undefined") return;
  window.speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US"; u.rate = 0.82;
  var voices = window.speechSynthesis.getVoices();
  var pref = voices.find(v => /Google US English Female|Microsoft Aria Online|Microsoft Jenny Online|Samantha|Karen|Victoria/i.test(v.name))
    || voices.find(v => v.lang.startsWith("en-US")) || voices.find(v => v.lang.startsWith("en"));
  if (pref) u.voice = pref;
  window.speechSynthesis.speak(u);
};

/** Google TTS 代理有单段长度限制；按空格切分后顺序播放，避免长句在约 200 字处被截断 */
var splitTtsChunks = function(s, maxLen) {
  maxLen = maxLen || 220;
  var chunks = [];
  var rest = s.trim();
  while (rest.length > maxLen) {
    var slice = rest.slice(0, maxLen);
    var cut = slice.lastIndexOf(" ");
    if (cut < Math.floor(maxLen * 0.4)) cut = maxLen;
    chunks.push(rest.slice(0, cut).trim());
    rest = rest.slice(cut).trim();
  }
  if (rest) chunks.push(rest);
  return chunks;
};

var speakSeq = 0;
var lastSpeakAudio = null;

var speak = async (text) => {
  if (typeof window === "undefined") return;
  var clean = text.replace(/[🔊\[\]]/g, "").trim();
  if (!clean) return;
  speakSeq++;
  var mySeq = speakSeq;
  if (lastSpeakAudio) {
    try {
      lastSpeakAudio.pause();
      lastSpeakAudio.currentTime = 0;
    } catch (e) {}
    lastSpeakAudio = null;
  }
  var chunks = splitTtsChunks(clean, 220);
  try {
    for (var i = 0; i < chunks.length; i++) {
      if (mySeq !== speakSeq) return;
      var ch = chunks[i];
      var audio;
      if (audioCache[ch]) {
        audio = audioCache[ch];
        audio.currentTime = 0;
      } else {
        var r = await fetch("/api/tts?text=" + encodeURIComponent(ch), { signal: AbortSignal.timeout(10000) });
        if (!r.ok) throw new Error("tts " + r.status);
        var blob = await r.blob();
        var blobUrl = URL.createObjectURL(blob);
        audio = new Audio(blobUrl);
        audioCache[ch] = audio;
      }
      lastSpeakAudio = audio;
      await new Promise(function(resolve, reject) {
        audio.onended = function() { resolve(); };
        audio.onerror = function() { reject(new Error("audio")); };
        audio.play().catch(reject);
      });
    }
  } catch (e) {
    if (mySeq === speakSeq) _speakFallback(clean);
  } finally {
    if (mySeq === speakSeq) lastSpeakAudio = null;
  }
};

var speakWord = async (word) => {
  if (typeof window === "undefined") return;
  var w = word.replace(/[🔊\[\]]/g, "").trim().toLowerCase();
  if (!w) return;
  if (dictAudioCache[w]) { try { dictAudioCache[w].currentTime = 0; dictAudioCache[w].play(); return; } catch(e) {} }
  try {
    var r = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(w));
    var data = await r.json();
    var audioUrl = data?.[0]?.phonetics?.find(p => p.audio)?.audio;
    if (audioUrl) {
      if (audioUrl.startsWith("//")) audioUrl = "https:" + audioUrl;
      var audio = new Audio(audioUrl);
      dictAudioCache[w] = audio;
      audio.play();
      return;
    }
  } catch(e) {}
  await speak(w);
};

var SpeakBtn = ({ text, size }) => {
  var s = size || 28;
  return <button onClick={() => speak(text)} title={"播放: " + text} style={{ background: C.accentLight, border: "none", borderRadius: "50%", width: s, height: s, display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: Math.round(s*0.5), verticalAlign: "middle", marginLeft: 4, flexShrink: 0 }}>🔊</button>;
};

var SpeakWordBtn = ({ text, size }) => {
  var s = size || 38;
  return <button onClick={() => speakWord(text)} title={"朗读单词: " + text} style={{ background: C.accentLight, border: "none", borderRadius: "50%", width: s, height: s, display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: Math.round(s*0.5), verticalAlign: "middle", marginLeft: 4, flexShrink: 0 }}>🔊</button>;
};

var BrandSparkIcon = ({ size, marginBottom }) => {
  var box = size != null ? size : 56;
  var radius = Math.max(12, Math.round(box * 0.286));
  var icon = Math.round(box * 0.5);
  var mb = marginBottom != null ? marginBottom : 14;
  var mbStr = typeof mb === "number" ? mb + "px" : mb;
  return (
    <div
      aria-hidden
      style={{
        width: box,
        height: box,
        borderRadius: radius,
        background: "linear-gradient(145deg, " + C.accent + " 0%, " + C.gold + " 100%)",
        boxShadow: "0 10px 28px rgba(212, 93, 60, 0.32), inset 0 1px 0 rgba(255,255,255,0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto " + mbStr,
      }}
    >
      <svg width={icon} height={icon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
          d="M13 2L4 14.5h6.5L11 22l8.5-12.5H13L13 2z"
          fill="#fff"
          stroke="#fff"
          strokeWidth="0.6"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

var AppHeroHeader = ({ stats, studyStreak }) => {
  var pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
  var hasStats = stats.xp > 0;
  return (
    <div style={{ background:"linear-gradient(135deg, "+C.card+" 0%, "+C.tealLight+" 50%, "+C.accentLight+" 100%)", borderRadius:16, padding:"18px 18px 14px", marginBottom:14, border:"1px solid "+C.border, boxShadow:"0 4px 20px rgba(44,36,32,0.08)" }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:10 }}>
        <div style={{ display:"flex", alignItems:"center", gap:12, minWidth:0 }}>
          <BrandSparkIcon size={44} marginBottom={0} />
          <div style={{minWidth:0}}>
            <h1 style={{ fontSize:22, margin:0, fontWeight:800, letterSpacing:"-0.03em", lineHeight:1.1 }}>
              <span style={{ color: C.text }}>Vocab</span><span style={{ color: C.accent }}>Spark</span>
              <span style={{fontSize:9,fontWeight:600,marginLeft:5,verticalAlign:"middle",color:C.textSec,opacity:0.5}}>v3.1</span>
            </h1>
            <p style={{ margin:"3px 0 0", fontSize:12, color:C.textSec, fontWeight:500, fontStyle:"italic", whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>The AI that truly knows your child.</p>
          </div>
        </div>
      </div>
      {(hasStats || (studyStreak && studyStreak.streak > 0)) && (
        <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginTop:12 }}>
          {hasStats && <span style={{...S.heroStatPillGold, padding:"5px 12px", fontSize:12}}>{"⚡ " + stats.xp + " XP"}</span>}
          {studyStreak && studyStreak.streak > 0 && <span style={{...S.heroStatPillAccent, padding:"5px 12px", fontSize:12}}>{"🔥 连续 " + studyStreak.streak + " 天" + (studyStreak.todayDone ? " ✓" : "")}</span>}
          {hasStats && <span style={{...S.heroStatPillGreen, padding:"5px 12px", fontSize:12}}>{"✅ 正确率 " + pct + "%"}</span>}
        </div>
      )}
    </div>
  );
};

/* ─── Resilience helpers ─── */
var FETCH_TIMEOUT_MS = 25000; // 服务端 15s 超时 + 429 重试 3s + 5s 余量

var fetchWithTimeout = function(url, options, timeoutMs) {
  timeoutMs = timeoutMs || FETCH_TIMEOUT_MS;
  var controller = new AbortController();
  var timer = setTimeout(function() { controller.abort(); }, timeoutMs);
  options = Object.assign({}, options, { signal: controller.signal });
  return fetch(url, options).finally(function() { clearTimeout(timer); });
};

var callWithClientRetry = function(fn, maxRetries) {
  maxRetries = maxRetries || 1;
  return fn().catch(function(err) {
    if (maxRetries > 0) {
      return new Promise(function(resolve) { setTimeout(resolve, 1500); })
        .then(function() { return callWithClientRetry(fn, maxRetries - 1); });
    }
    throw err;
  });
};

/* ─── API Calls (server-side proxy, key hidden) ─── */
var callAPI = async (sys, msg, opts) => {
  opts = opts || {};
  const response = await fetchWithTimeout("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      system: sys,
      message: msg,
      maxTokens: 1200,
      preferredProviders: opts.preferredProviders || undefined,
    }),
  });
  const data = await response.json();
  if (data.error) throw new Error(data.error);
  return data.text;
};

var callAPIFast = async (sys, msg, opts) => {
  opts = opts || {};
  const response = await fetchWithTimeout("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      system: sys,
      message: msg,
      maxTokens: 1500,
      preferredProviders: opts.preferredProviders || undefined,
    }),
  });
  const data = await response.json();
  if (data.error) throw new Error(data.error);
  return data.text;
};

var tryJSON = (text) => {
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

var parseFile = async (file) => {
  var text = await file.text();
  var words = text.split(/[\n\r,，、\t]+/)
    .map(w => w.trim().toLowerCase())
    .filter(w => w && /^[a-zA-Z][a-zA-Z\s\-']{0,40}$/.test(w) && w.length >= 2);
  return [...new Set(words)];
};

var shuffle = (a) => { a = [...a]; for (var i = a.length-1; i > 0; i--) { var j = Math.floor(Math.random()*(i+1)); [a[i],a[j]] = [a[j],a[i]]; } return a; };

var Disclaimer = () => (
  <div style={{ textAlign:"center", fontSize:12, color:C.textSec, padding:"10px 0 4px", lineHeight:1.7, borderTop:"1px solid "+C.border, marginTop:8 }}>
    VocabSpark 专注于理解与记忆 · 拼写练习推荐搭配<strong>百词斩</strong>等工具
  </div>
);

function PrivacyNotice() {
  var [open, setOpen] = useState(false);
  return (
    <div style={{textAlign:"center",padding:"6px 0 10px",fontSize:11,color:C.textSec,fontFamily:FONT}}>
      <button onClick={function(){setOpen(function(v){return !v;});}} style={{background:"transparent",border:"none",color:C.textSec,fontFamily:FONT,fontSize:11,cursor:"pointer",textDecoration:"underline",padding:0}}>
        🔒 隐私声明
      </button>
      {open && (
        <div style={{background:C.bg,border:"1px solid "+C.border,borderRadius:12,padding:"16px 18px",marginTop:8,textAlign:"left",lineHeight:1.9,maxWidth:480,margin:"8px auto 0",fontSize:12}}>
          <div style={{fontWeight:700,marginBottom:8,fontSize:13}}>🔒 数据隐私承诺</div>
          <p style={{margin:"0 0 8px"}}>您在「学生画像」中填写的文字及上传的照片，<strong>仅用于</strong>由 AI 生成个性化学习内容（例句、讲解、记忆场景），不作任何其他用途。</p>
          <div style={{color:C.textSec}}>
            • 所有数据在传输和存储过程中均采用 HTTPS 加密保护<br/>
            • 您的原始信息不会被开发者读取、分析，或以任何形式向第三方披露<br/>
            • AI 内容生成通过 DeepSeek 及 Google AI API 接口完成，相关数据处理遵守各服务商隐私政策<br/>
            • 您可随时要求删除账户及全部数据，请发邮件至 <a href="mailto:Winstonwu1996@icloud.com" style={{color:C.accent,textDecoration:"none"}}>Winstonwu1996@icloud.com</a>
          </div>
        </div>
      )}
    </div>
  );
}

var PRESETS = {
  "SSAT 高频 50 词": "aberration\nabhor\nabstain\nadmonish\narduous\naudacious\nbenevolent\ncandid\ncapricious\ncompel\ncontempt\ncunning\ndaunt\ndiligent\ndiscern\neloquent\nempathy\nenigma\nfervent\nfrugal\ngregarious\nhaughty\nimplore\nincessant\njubilant\nlethargy\nlucid\nmalice\nmollify\nnovice\nobstinate\nopulent\npacify\npragmatic\nprudent\nrebuke\nresilient\nsagacious\nserene\ntaciturn\ntenacious\ntrivial\nunanimous\nvehement\nvenerate\nvolatile\nwary\nzealous\nambiguous\nbenign",
  "SSAT 情感词": "elated\nmelancholy\nindignant\napprehensive\ncontrite\njubilant\ndespondent\nexuberant\nserene\nvexed",
  "SSAT 动作词": "implore\nadmonish\ncompel\nrebuke\nmollify\npacify\nvenerate\nabhor\ndiscern\nrelinquish",
};

/* ─── Storage: localStorage ─── */
var SKEY = "vocabspark_v1";         // permanent key — never change this
var SKEY_OLD = "vocabspark_release_2"; // migration source
var CONC_KEY = "vocabspark_concurrency_cap_v1";
var loadSave = async () => {
  try {
    if (typeof window === "undefined") return null;
    // Migrate from old key if present
    var oldRaw = localStorage.getItem(SKEY_OLD);
    if (oldRaw) {
      try {
        var oldData = JSON.parse(oldRaw);
        var migrated = { schemaVersion: 1, completedWords: [], ...oldData };
        localStorage.setItem(SKEY, JSON.stringify(migrated));
        localStorage.removeItem(SKEY_OLD);
      } catch(e) {}
    }
    var r = localStorage.getItem(SKEY);
    return r ? JSON.parse(r) : null;
  } catch(e) { return null; }
};
var doSave = async (d) => {
  try {
    if (typeof window === "undefined") return;
    localStorage.setItem(SKEY, JSON.stringify({ schemaVersion: 1, completedWords: [], updatedAt: new Date().toISOString(), ...d }));
  } catch(e) {}
};

/* ─── Markdown + Speak ─── */
var addSpeakMarkers = (text) => {
  if (!text) return text;
  return text.split("\n").map(line => {
    if (line.includes("[🔊]")) return line;
    var clean = line.replace(/\*\*/g, "").replace(/\*/g, "").trim();
    clean = clean.replace(/^[\d]+\.\s*/, "").replace(/^[-–—*•]\s*/, "");
    clean = clean.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}]/gu, "").trim();
    var enOnly = clean
      .replace(/（[^）]*）/g, "").replace(/\([^)]*\)/g, "")
      .replace(/[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef，。、；：""''！？]+/g, "")
      .trim();
    var endsEn = /[.!?;]$/.test(enOnly);
    var engWords = (enOnly.match(/[A-Za-z]{2,}/g) || []).length;
    var engChars = (enOnly.match(/[A-Za-z]/g) || []).length;
    var total = enOnly.replace(/[\s.,;:!?'"()\-—–;]/g, "").length;
    var ratio = total > 0 ? engChars / total : 0;
    if (endsEn && engWords >= 3 && ratio >= 0.6) {
      return line + " [🔊]";
    }
    return line;
  }).join("\n");
};

var cleanForSpeak = (text) => {
  return text
    .replace(/\*\*/g, "").replace(/\*/g, "")
    .replace(/^[\d]+[.)]\s*/, "")
    .replace(/^[-–—*•←→]\s*/, "")
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{1F1E0}-\u{1F1FF}]/gu, "")
    .replace(/（[^）]*）/g, "")
    .replace(/\([^)]*[\u4e00-\u9fff][^)]*\)/g, "")
    .replace(/[\u4e00-\u9fff\u3000-\u303f\uff00-\uffef，。、；：""''！？]+/g, "")
    .replace(/\[🔊\]/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

var RL = ({ text }) => {
  var parts = text.split(/(\[🔊\])/g);
  return <span style={{display:"flex",alignItems:"flex-end",flexWrap:"wrap",gap:2}}>{parts.map((part, i) => {
    if (part === "[🔊]") {
      var prev = parts.slice(0, i).join("");
      var speakText = cleanForSpeak(prev);
      return speakText.length > 3 ? <SpeakBtn key={i} text={speakText} size={24} /> : null;
    }
    // Bug 5: normalize backtick quotes + bold/italic
    var html = part
      .replace(/`(.+?)`/g, "<em>$1</em>")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>");
    return <span key={i} dangerouslySetInnerHTML={{ __html: html }} />;
  })}</span>;
};

var Md = ({ text }) => {
  if (!text) return null;
  return text.split("\n").map((line, i) => {
    if (line.trim() === "---") return <hr key={i} style={{ border:"none", height:1, background:C.border, margin:"14px 0" }} />;
    if (line.startsWith("### ")) return <div key={i} style={{ fontWeight:700, fontSize:15, margin:"14px 0 6px", color:C.teal, display:"flex", alignItems:"flex-end", gap:4 }}><RL text={line.slice(4)} /></div>;
    if (line.startsWith("## ")) return <div key={i} style={{ fontWeight:700, fontSize:17, margin:"18px 0 8px", color:C.accent, display:"flex", alignItems:"flex-end", gap:4 }}><RL text={line.slice(3)} /></div>;
    return line.trim() ? <div key={i} style={{ margin:"5px 0", lineHeight:1.85, fontSize:15, display:"flex", alignItems:"flex-end", gap:4 }}><RL text={line} /></div> : <div key={i} style={{ height:6 }} />;
  });
};

/* ═══ MAIN APP ═══ */
export default function App() {
  var [screen, setScreen] = useState("setup");
  var [showWelcome, setShowWelcome] = useState(true);
  var [showTipJar, setShowTipJar] = useState(false);
  var [tipDismissed, setTipDismissed] = useState(false);
  var [showSettings, setShowSettings] = useState(false);
  var [dailyNewWords, setDailyNewWords] = useState(20);
  var [targetDate, setTargetDate] = useState("");
  var [deepReviewDailyCap, setDeepReviewDailyCap] = useState(8);
  var [profile, setProfile] = useState("");
  var [studyGoal, setStudyGoal] = useState("");
  var [studyGoalCustom, setStudyGoalCustom] = useState("");
  var [wordInput, setWordInput] = useState("");
  var [wordList, setWordList] = useState([]);
  var [fileLabel, setFileLabel] = useState("");
  var [wordStatusMap, setWordStatusMap] = useState({});
  var [reviewWordData, setReviewWordData] = useState({});
  var [wordStatusFilter, setWordStatusFilter] = useState("all");
  var [wordSearch, setWordSearch] = useState("");
  var [showDueOnly, setShowDueOnly] = useState(false);
  var [wordSortMode, setWordSortMode] = useState("default");
  var [selectedWords, setSelectedWords] = useState({});
  var [wordPage, setWordPage] = useState(1);
  var [wordPageSize, setWordPageSize] = useState(120);
  var [wordDensity, setWordDensity] = useState("cozy");
  var [showTaskOrderHint, setShowTaskOrderHint] = useState(true);
  var [showProfileGuide, setShowProfileGuide] = useState(false);
  var [helpTip, setHelpTip] = useState(null);
  var [streakToast, setStreakToast] = useState(null);
  var [loginToast, setLoginToast] = useState(null);
  var [screeningWords, setScreeningWords] = useState([]);
  var [screeningIdx, setScreeningIdx] = useState(0);
  var [screeningStats, setScreeningStats] = useState({ known: 0, unknown: 0 });
  var [screeningFlipped, setScreeningFlipped] = useState(false);
  var [screeningDef, setScreeningDef] = useState(null); // { meaning, phonetic, loading }
  var screeningDefCache = useRef({});
  var [quickReviewQueue, setQuickReviewQueue] = useState([]);
  var [quickReviewIdx, setQuickReviewIdx] = useState(0);
  var [quickReviewFlipped, setQuickReviewFlipped] = useState(false);
  var [quickReviewStats, setQuickReviewStats] = useState({ remembered:0, fuzzy:0, forgot:0 });
  var [deepReviewQueue, setDeepReviewQueue] = useState([]);
  var [deepReviewIdx, setDeepReviewIdx] = useState(0);
  var [deepReviewContent, setDeepReviewContent] = useState("");
  var [deepReviewLoading, setDeepReviewLoading] = useState(false);
  var [deepQuiz, setDeepQuiz] = useState(null);
  var [deepQuizSelect, setDeepQuizSelect] = useState("");
  var [deepQuizSubmitted, setDeepQuizSubmitted] = useState(false);
  var [deepLoadSec, setDeepLoadSec] = useState(0);
  var [deepSessionStats, setDeepSessionStats] = useState({ remembered:0, fuzzy:0, forgot:0 });
  var deepReviewCacheRef = useRef({});
  var deepReviewInflightRef = useRef({});
  var fileRef = useRef(null);
  var [setupTab, setSetupTab] = useState("profile");
  var [profileLocked, setProfileLocked] = useState(false);

  var [idx, setIdx] = useState(0);
  var [phase, setPhase] = useState("guess");
  var [loading, setLoading] = useState(false);
  var [error, setError] = useState("");
  var [learned, setLearned] = useState([]);

  var [guessData, setGuessData] = useState(null);
  var [selectedOption, setSelectedOption] = useState("");
  var [guessSubmitted, setGuessSubmitted] = useState(false);
  var [showHint, setShowHint] = useState(false);
  var [phonetic, setPhonetic] = useState("");
  var [shakeWrong, setShakeWrong] = useState(false);
  var [bounceCorrect, setBounceCorrect] = useState(false);

  var [teachContent, setTeachContent] = useState("");
  var [spectrumData, setSpectrumData] = useState(null);
  var [specSlots, setSpecSlots] = useState([null,null,null]);
  var [specPool, setSpecPool] = useState([]);
  var [specStatus, setSpecStatus] = useState("idle");

  var [reviewData, setReviewData] = useState(null);
  var [reviewAnswers, setReviewAnswers] = useState({});
  var [reviewSubmitted, setReviewSubmitted] = useState(false);

  var [clozeData, setClozeData] = useState(null);
  var [clozeAnswers, setClozeAnswers] = useState({});
  var [clozeSubmitted, setClozeSubmitted] = useState(false);

  var [loadingTip, setLoadingTip] = useState("");
  var [phaseDir, setPhaseDir] = useState(1);
  var [showConfetti, setShowConfetti] = useState(false);
  var [showShare, setShowShare] = useState(false);

  // ── Auth & Daily Limit ──
  var [user, setUser] = useState(null);
  var userRef = useRef(null);
  var [showLogin, setShowLogin] = useState(false);
  var [loginEmail, setLoginEmail] = useState('');
  var [loginSent, setLoginSent] = useState(false);
  var [loginLoading, setLoginLoading] = useState(false);
  var [otpCode, setOtpCode] = useState('');
  var [otpError, setOtpError] = useState('');
  var [todayCount, setTodayCount] = useState(0);
  var [showLimitModal, setShowLimitModal] = useState(false);

  var [stats, setStats] = useState({ correct:0, total:0, streak:0, bestStreak:0, xp:0 });
  var [wordTimings, setWordTimings] = useState({});
  var [wordStart, setWordStart] = useState(null);

  var dataCache = useRef({});
  var [batchProgress, setBatchProgress] = useState(0);
  var [batchTotal, setBatchTotal] = useState(0);
  var [batchTip, setBatchTip] = useState("");
  var [batchGroupNo, setBatchGroupNo] = useState(1);
  var [batchUiPct, setBatchUiPct] = useState(0);
  var [smoothLessonPct, setSmoothLessonPct] = useState(0);
  var [speedWaitSec, setSpeedWaitSec] = useState(0);
  var batchProgressR = useRef(0);
  var batchTotalR = useRef(0);
  var lessonProgressTargetRef = useRef(0);
  var batchLoadStartRef = useRef(0);
  batchProgressR.current = batchProgress;
  batchTotalR.current = batchTotal;

  var contentEndRef = useRef(null);
  var topRef = useRef(null);
  var photoRef = useRef(null);
  var teachTimeoutRef = useRef(null);
  var speedWaitAbortRef = useRef(false);
  var [photoLoading, setPhotoLoading] = useState(false);

  useEffect(function() { if (typeof window !== "undefined") window.speechSynthesis?.getVoices(); }, []);
  useEffect(function() {
    if (screen === "deep_review") {
      var w = deepReviewQueue[deepReviewIdx];
      if (w) loadDeepReviewContent(w);
    }
  }, [screen, deepReviewIdx]);

  useEffect(function() {
    if (!deepReviewLoading) return;
    var id = setInterval(function(){ setDeepLoadSec(function(s){ return s + 1; }); }, 1000);
    return function(){ clearInterval(id); };
  }, [deepReviewLoading]);
  useEffect(function() {
    if (phase !== "batch_loading") {
      setBatchUiPct(0);
      return;
    }
    batchLoadStartRef.current = typeof performance !== "undefined" ? performance.now() : 0;
    setBatchUiPct(0);

    var id = setInterval(function() {
      var tot = batchTotalR.current;
      var prog = batchProgressR.current;
      var real = tot > 0 ? (100 * prog) / tot : 0;
      var elapsed = (typeof performance !== "undefined" ? performance.now() : 0) - batchLoadStartRef.current;

      // UX curve: front slow, back fast, continuous (independent from discrete task jumps)
      var fake;
      if (elapsed < 12000) {
        // 0 -> 22
        var t1 = elapsed / 12000;
        fake = 22 * (1 - Math.pow(1 - t1, 2));
      } else if (elapsed < 36000) {
        // 22 -> 78
        var t2 = (elapsed - 12000) / 24000;
        fake = 22 + 56 * t2;
      } else {
        // 78 -> 95 (slow finish before final release)
        var t3 = Math.min(1, (elapsed - 36000) / 14000);
        fake = 78 + 17 * t3;
      }

      var target = real >= 100 ? 100 : fake;

      setBatchUiPct(function(d) {
        var alpha = target < 85 ? 0.08 : 0.18; // back-half accelerates
        var next = d + (target - d) * alpha;
        if (Math.abs(target - next) < 0.25) next = target;
        if (next > 100) next = 100;
        return next;
      });
    }, 48);

    return function() { clearInterval(id); };
  }, [phase]);
  useEffect(function() { if (topRef.current) topRef.current.scrollIntoView({ behavior:"smooth", block:"start" }); }, [phase, idx]);
  useEffect(function() { if (guessSubmitted || reviewSubmitted || clozeSubmitted) setTimeout(function() { if (contentEndRef.current) contentEndRef.current.scrollIntoView({ behavior:"smooth", block:"end" }); }, 200); }, [guessSubmitted, reviewSubmitted, clozeSubmitted]);

  useEffect(function() {
    loadSave().then(function(d) {
      try {
        if (d?.settings?.dailyNewWords) setDailyNewWords(d.settings.dailyNewWords);
        if (d?.settings?.targetDate) setTargetDate(d.settings.targetDate);
        if (d?.settings?.deepReviewDailyCap) setDeepReviewDailyCap(d.settings.deepReviewDailyCap);
        if (d?.profile) { setProfile(d.profile); setProfileLocked(true); }
        if (d?.settings?.studyGoal) setStudyGoal(d.settings.studyGoal);
        if (d?.settings?.studyGoalCustom) setStudyGoalCustom(d.settings.studyGoalCustom);
        if (d?.stats) setStats(function(s) { return {...s, ...(d.stats||{})}; });
        if (d?.profile) setShowWelcome(false);
        if (d?.tipDismissed) setTipDismissed(true);
        if (d?.session?.wordList?.length > 0 && d?.session?.idx < d.session.wordList.length) {
          setWordList(d.session.wordList);
          setIdx(d.session.idx);
          setLearned(d.session.learned || []);
          setWordInput(d.session.wordList.join("\n"));
        }
      } catch(e) {}
    }).catch(function() {});

    try {
      var rawStatus = localStorage.getItem(WORD_STATUS_KEY);
      if (rawStatus) setWordStatusMap(JSON.parse(rawStatus) || {});
    } catch (e) {}

    try {
      var rawReviewData = localStorage.getItem(REVIEW_WORD_DATA_KEY);
      if (rawReviewData) setReviewWordData(JSON.parse(rawReviewData) || {});
    } catch (e) {}
  }, []);

  // ── Daily count helpers ──
  var getLocalDateKey = function() {
    var d = new Date();
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
  };

  var getDailyState = function() {
    try {
      var today = getLocalDateKey();
      if (typeof window === "undefined") return {count:0, date:today};
      var stored = JSON.parse(localStorage.getItem(DAILY_KEY) || '{}');
      return stored.date === today ? stored : {count:0, date:today};
    } catch(e) { return {count:0, date:getLocalDateKey()}; }
  };

  var getDeepReviewDailyState = function() {
    try {
      var today = getLocalDateKey();
      if (typeof window === "undefined") return { date: today, count: 0 };
      var stored = JSON.parse(localStorage.getItem(DEEP_REVIEW_DAILY_KEY) || '{}');
      return stored.date === today ? stored : { date: today, count: 0 };
    } catch (e) {
      return { date: getLocalDateKey(), count: 0 };
    }
  };

  var incrementDeepReviewDailyCount = function() {
    var curr = getDeepReviewDailyState();
    var next = { date: curr.date, count: (curr.count || 0) + 1 };
    try {
      if (typeof window !== "undefined") localStorage.setItem(DEEP_REVIEW_DAILY_KEY, JSON.stringify(next));
    } catch (e) {}
    return next.count;
  };

  var incrementDailyCount = function() {
    try {
      var today = getLocalDateKey();
      var curr = getDailyState();
      var next = {date:today, count:(curr.date===today ? curr.count : 0)+1};
      localStorage.setItem(DAILY_KEY, JSON.stringify(next));
      setTodayCount(next.count);
      return next.count;
    } catch(e) { return 0; }
  };

  var getNewWordQuotaState = function() {
    try {
      var today = getLocalDateKey();
      if (typeof window === "undefined") {
        return { date: today, quota: dailyNewWords || 20, consumed: 0 };
      }
      var stored = JSON.parse(localStorage.getItem(DAILY_NEW_QUOTA_KEY) || '{}');
      if (stored.date === today) {
        return {
          date: today,
          quota: Number.isFinite(stored.quota) ? stored.quota : (dailyNewWords || 20),
          consumed: Number.isFinite(stored.consumed) ? stored.consumed : 0,
        };
      }
      return { date: today, quota: dailyNewWords || 20, consumed: 0 };
    } catch (e) {
      return { date: getLocalDateKey(), quota: dailyNewWords || 20, consumed: 0 };
    }
  };

  var saveNewWordQuotaState = function(state) {
    try {
      if (typeof window === "undefined") return;
      localStorage.setItem(DAILY_NEW_QUOTA_KEY, JSON.stringify(state));
    } catch (e) {}
  };

  var getRemainingNewWordQuota = function() {
    var s = getNewWordQuotaState();
    return Math.max(0, (s.quota || 0) - (s.consumed || 0));
  };

  var consumeNewWordQuota = function(n) {
    var amount = n || 1;
    var s = getNewWordQuotaState();
    var next = {
      date: s.date,
      quota: s.quota,
      consumed: Math.min(s.quota, (s.consumed || 0) + amount),
    };
    saveNewWordQuotaState(next);
    return next;
  };

  // ── Study Streak (consecutive days) helpers ──
  var getStudyStreak = function() {
    try {
      var stored = JSON.parse(localStorage.getItem(STUDY_STREAK_KEY) || '{}');
      // { lastDate: "2026-03-27", streak: 5, todayDone: true }
      var today = getLocalDateKey();
      if (!stored.lastDate) return { streak: 0, todayDone: false };
      if (stored.lastDate === today) return { streak: stored.streak || 0, todayDone: !!stored.todayDone };
      // Check if yesterday
      var last = new Date(stored.lastDate + "T12:00:00");
      var now = new Date(today + "T12:00:00");
      var diffDays = Math.round((now - last) / 86400000);
      if (diffDays === 1) return { streak: stored.streak || 0, todayDone: false }; // streak continues, today not yet done
      return { streak: 0, todayDone: false }; // streak broken
    } catch (e) { return { streak: 0, todayDone: false }; }
  };

  var markStudyStreakToday = function() {
    try {
      var today = getLocalDateKey();
      var current = getStudyStreak();
      if (current.todayDone) return current; // already marked today
      var newStreak = current.streak + 1;
      var next = { lastDate: today, streak: newStreak, todayDone: true };
      localStorage.setItem(STUDY_STREAK_KEY, JSON.stringify(next));
      return { streak: newStreak, todayDone: true };
    } catch (e) { return { streak: 0, todayDone: false }; }
  };

  var STREAK_MILESTONES = {
    1: { emoji: "🌱", msg: "第一天，好的开始！" },
    3: { emoji: "🌿", msg: "连续 3 天！习惯正在养成" },
    5: { emoji: "🌳", msg: "连续 5 天！了不起的坚持" },
    7: { emoji: "🔥", msg: "整整一周！你太棒了" },
    14: { emoji: "⭐", msg: "连续两周！学霸气质拉满" },
    21: { emoji: "🏆", msg: "21 天习惯养成！" },
    30: { emoji: "💎", msg: "连续一个月！传奇级坚持" },
    50: { emoji: "👑", msg: "50 天！无人能挡" },
    100: { emoji: "🏅", msg: "100 天！你是传说" },
  };

  var getStreakDisplay = function(days) {
    if (days <= 0) return null;
    // Find the highest milestone <= days
    var milestones = [100,50,30,21,14,7,5,3,1];
    for (var i = 0; i < milestones.length; i++) {
      if (days >= milestones[i]) {
        var m = STREAK_MILESTONES[milestones[i]];
        return { emoji: m.emoji, msg: m.msg, days: days };
      }
    }
    return { emoji: "🌱", msg: "继续加油！", days: days };
  };

  // ── Cloud sync helpers ──
  var syncToCloud = async function(data) {
    var u = userRef.current;
    if (!u) return;
    try {
      await supabase.from('user_progress').upsert(
        {user_id: u.id, progress_data: data, updated_at: new Date().toISOString()},
        {onConflict: 'user_id'}
      );
    } catch(e) { console.warn('sync error', e); }
  };

  var loadFromCloud = async function(userId) {
    try {
      var {data} = await supabase
        .from('user_progress').select('progress_data, updated_at')
        .eq('user_id', userId).single();
      if (!data?.progress_data) return null;
      return { ...data.progress_data, updatedAt: data.updated_at || data.progress_data.updatedAt };
    } catch(e) { return null; }
  };

  // ── Auth actions ──
  var handleLoginEmail = async function() {
    if (!loginEmail.trim()) return;
    setLoginLoading(true);
    try {
      var {error} = await supabase.auth.signInWithOtp({
        email: loginEmail.trim(),
        options: {
          shouldCreateUser: true,
          emailRedirectTo: window.location.origin,
        }
      });
      if (error) throw error;
      setLoginSent(true);
    } catch(e) {
      var msg = (e.message || '').toLowerCase();
      if (msg.includes('rate limit')) {
        alert('📬 邮件发送太频繁了，请等 1~2 分钟后再试。\n\n如果刚才已经发过，请检查邮箱（包括垃圾邮件），点击邮件中的按钮即可登录。');
      } else {
        alert('发送失败：' + e.message);
      }
    }
    finally { setLoginLoading(false); }
  };

  var handleVerifyOtp = async function() {
    if (!otpCode.trim() || otpCode.trim().length < 6) return;
    setLoginLoading(true);
    setOtpError('');
    try {
      var { error } = await supabase.auth.verifyOtp({
        email: loginEmail.trim(),
        token: otpCode.trim(),
        type: 'email',
      });
      if (error) throw error;
      setShowLogin(false);
      setLoginSent(false);
      setLoginEmail('');
      setOtpCode('');
      window.scrollTo(0, 0);
    } catch(e) {
      setOtpError('验证失败：' + (e.message === 'Token has expired or is invalid' ? '验证码已过期或不正确，请重新发送' : e.message));
    } finally {
      setLoginLoading(false);
    }
  };

  var handleLogout = async function() {
    await supabase.auth.signOut();
    setUser(null); userRef.current = null;
  };

  var handleFactoryReset = async function() {
    if (!confirm('🚨 危险操作：确认要清除所有学习记录、画像和单词本，从零开始吗？此操作不可逆！')) return;
    try {
      if (typeof window !== "undefined") {
        localStorage.removeItem(SKEY);
        localStorage.removeItem(SKEY_OLD);
        localStorage.removeItem(CONC_KEY);
        localStorage.removeItem(WORD_STATUS_KEY);
        localStorage.removeItem(REVIEW_WORD_DATA_KEY);
        localStorage.removeItem(DAILY_KEY);
        localStorage.removeItem(DAILY_NEW_QUOTA_KEY);
        localStorage.removeItem(DEEP_REVIEW_DAILY_KEY);
        localStorage.removeItem(STUDY_STREAK_KEY);
      }
    } catch (e) {}
    
    setWordList([]);
    setLearned([]);
    setIdx(0);
    setProfile("");
    setTargetDate("");
    setWordStatusMap({});
    setWordDetailsMap({});
    setStats({ xp: 0, streak: 0, lastStudyDate: null });
    setWordInput("");
    
    var emptyData = {
      wordList: [],
      learned: [],
      idx: 0,
      profile: "",
      targetDate: "",
      wordStatusMap: {},
      wordDetailsMap: {},
      stats: { xp: 0, streak: 0, lastStudyDate: null },
      updatedAt: new Date().getTime()
    };
    if (userRef.current) {
      await syncToCloud(emptyData);
    }
    
    alert('✅ 所有记录已清除，应用已重置为初始状态。');
    setSetupTab("profile");
  };

  var handlePhotoUpload = async function(e) {
    var file = e.target.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;
    if (!userRef.current) {
      alert('📷 照片上传功能需要注册账号\n\n注册免费，还可解锁每日无限学习 🎉');
      if (photoRef.current) photoRef.current.value = '';
      return;
    }
    var existingPhotos = (profile.match(/📷 /g) || []).length;
    if (existingPhotos >= PHOTO_LIMIT) {
      alert('最多上传 ' + PHOTO_LIMIT + ' 张照片\n\n如需更换，请先在文本框中删除旧的照片描述（以 📷 开头的行）');
      if (photoRef.current) photoRef.current.value = '';
      return;
    }
    if (profile.length >= PROFILE_MAX - 60) {
      alert('画像已接近上限（' + PROFILE_MAX + ' 字），请先精简现有内容再添加照片');
      if (photoRef.current) photoRef.current.value = '';
      return;
    }
    setPhotoLoading(true);
    try {
      var base64;
      var mimeOut = "image/jpeg";
      try {
        base64 = await compressImageToJpegBase64(file, 1280);
      } catch (compErr) {
        if (file.size > 3.5 * 1024 * 1024) {
          alert("图片体积较大，或苹果「实况/HEIC」格式浏览器无法直接处理。\n\n请：导出为 JPG/PNG，或截图后再上传。");
          return;
        }
        base64 = await fileToBase64Raw(file);
        mimeOut = file.type && file.type.startsWith("image/") ? file.type : "image/jpeg";
      }
      var resp = await fetch('/api/describe-photo', {
        method: 'POST', headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: base64, mimeType: mimeOut }),
      });
      var data;
      try {
        data = await resp.json();
      } catch (jsonErr) {
        throw new Error("服务器响应异常 (HTTP " + resp.status + ")");
      }
      if (!resp.ok || data.error) {
        throw new Error(typeof data.error === "string" ? data.error : "上传失败 HTTP " + resp.status);
      }
      if (data.description) {
        setProfile(function(prev) {
          return prev + (prev && !prev.endsWith("\n") ? "\n" : "") + "📷 " + data.description;
        });
      } else {
        throw new Error("未收到描述，请换一张照片重试");
      }
    } catch (err) {
      alert("照片处理失败：" + err.message);
    } finally {
      setPhotoLoading(false);
      if (photoRef.current) photoRef.current.value = "";
    }
  };

  // ── Auth state listener ──
  var handleAuthUser = async function(u, event) {
    setUser(u); userRef.current = u;
    if (u && (event === 'SIGNED_IN' || event === 'INITIAL_SESSION' || event === 'TOKEN_REFRESHED')) {
      // Close login modal if still open & show success toast
      if (event === 'SIGNED_IN') {
        setLoginToast("✅ 登录成功！" + (u.email || ""));
        setTimeout(function() { setLoginToast(null); }, 4000);
      }
      setShowLogin(false); setLoginSent(false); setLoginEmail(''); setOtpCode('');
      var cloudData = await loadFromCloud(u.id);
      if (cloudData) {
        var localData = await loadSave();
        var localTs = new Date(localData?.updatedAt || 0).getTime() || 0;
        var cloudTs = new Date(cloudData?.updatedAt || 0).getTime() || 0;
        var useCloud = cloudTs > localTs || (!localTs && (cloudData?.stats?.xp||0) >= (localData?.stats?.xp||0));
        if (useCloud) {
          await doSave(cloudData);
          if (cloudData.stats) setStats(function(s) { return {...s, ...cloudData.stats}; });
        } else {
          await syncToCloud(localData);
        }
      } else {
        var localData = await loadSave();
        if (localData) await syncToCloud(localData);
      }
    }
  };

  useEffect(function() {
    setTodayCount(getDailyState().count);

    // Explicitly check for existing session on mount (handles Magic Link redirect)
    supabase.auth.getSession().then(function(result) {
      var u = result?.data?.session?.user || null;
      if (u) handleAuthUser(u, 'INITIAL_SESSION');
    });

    var {data: {subscription}} = supabase.auth.onAuthStateChange(async function(event, session) {
      var u = session?.user || null;
      await handleAuthUser(u, event);
    });
    return function() { subscription.unsubscribe(); };
  }, []);

  var sysP = buildSys(profile, studyGoal, studyGoalCustom);

  var save = function(s, session) {
    setStats(s);
    loadSave().then(function(d) {
      var data = {...(d||{}), profile, stats: s, session: session || d?.session};
      doSave(data);
      syncToCloud(data);
    });
  };

  var updateDailyNewWords = (n) => {
    setDailyNewWords(n);
    loadSave().then(d => {
      var nextData = {...(d||{}), settings: {...(d?.settings||{}), dailyNewWords: n}};
      doSave(nextData);
      syncToCloud(nextData);
    });
    var quotaState = getNewWordQuotaState();
    saveNewWordQuotaState({
      date: quotaState.date,
      quota: n,
      consumed: Math.min(quotaState.consumed || 0, n),
    });
  };

  var updateTargetDate = function(v) {
    setTargetDate(v || "");
    loadSave().then(function(d) {
      var nextData = { ...(d || {}), settings: { ...(d?.settings || {}), targetDate: v || "" } };
      doSave(nextData);
      syncToCloud(nextData);
    });
  };

  var updateDeepReviewDailyCap = function(v) {
    var cap = Math.max(1, Math.min(30, Number(v) || 1));
    setDeepReviewDailyCap(cap);
    loadSave().then(function(d) {
      var nextData = { ...(d || {}), settings: { ...(d?.settings || {}), deepReviewDailyCap: cap } };
      doSave(nextData);
      syncToCloud(nextData);
    });
  };

  var saveSession = function(wl, i, lrn) {
    loadSave().then(function(d) { doSave({...(d||{}), profile, stats, session: { wordList: wl, idx: i, learned: lrn }}); });
  };

  var resetLearningProgress = function() {
    if (!confirm("⚠️ 确认重置学习进度？\n\n将清除：\n· 所有单词的学习状态\n· 复习记录与复习计划\n· 统计数据（XP、正确率等）\n· 今日学习配额\n\n不会清除：\n· 词表内容\n· 学生画像\n· 每日目标设置\n· 连续学习天数\n\n此操作不可撤销。")) return;
    // 清除学习状态
    setWordStatusMap({});
    setReviewWordData({});
    var newStats = { correct:0, total:0, streak:0, bestStreak:0, xp:0 };
    setStats(newStats);
    setTodayCount(0);
    // 清除学习会话
    setWordList([]);
    setIdx(0);
    setLearned([]);
    // 清除 localStorage
    localStorage.removeItem(WORD_STATUS_KEY);
    localStorage.removeItem(REVIEW_WORD_DATA_KEY);
    localStorage.removeItem(DAILY_KEY);
    localStorage.removeItem(DAILY_NEW_QUOTA_KEY);
    localStorage.removeItem(DEEP_REVIEW_DAILY_KEY);
    // 同步到本地和云端
    loadSave().then(function(d) {
      var nextData = {...(d||{}), stats: newStats, completedWords: [], session: null, wordStatusMap: {}, reviewWordData: {}};
      doSave(nextData);
      syncToCloud(nextData);
    });
    // 成功提示
    setLoginToast("✅ 学习进度已重置");
    setTimeout(function() { setLoginToast(null); }, 3000);
  };

  var currentWord = wordList[idx] || "";

  var getProfileKeywords = function() {
    if (!profile) return [];
    var keywords = [];
    var nameMatch = profile.match(/[A-Z][a-z]+/g);
    if (nameMatch) keywords = keywords.concat(nameMatch.slice(0, 3));
    var places = profile.match(/(?:Irvine|Spectrum|大华|H Mart|Trader|Ralphs|Costco|Target)[^\n,，]*/gi);
    if (places) keywords = keywords.concat(places.slice(0, 2));
    var hobbies = profile.match(/(?:网球|游泳|烘焙|钢琴|篮球|足球|跑步|画画|舞蹈|吉他|鬼灭|哈利|Taylor|anime|tennis|swim|bak)/gi);
    if (hobbies) keywords = keywords.concat(hobbies.slice(0, 3));
    return [...new Set(keywords)];
  };

  var makeBatchTip = function(wordNum, word, total) {
    var kw = getProfileKeywords();
    var tips = [
      "🧠 正在为 " + word + " 编写专属记忆法...",
      "📖 用你的生活场景造句中...",
      "✨ 精心挑选最有效的教学方法...",
      "🎮 设计词义光谱挑战...",
      "🧩 把 " + word + " 和你学过的词串联起来...",
    ];
    if (kw.length > 0) tips.push("🎯 正在用「" + kw[Math.floor(Math.random()*kw.length)] + "」相关的场景编写例句...");
    if (kw.length > 1) tips.push("🌟 AI 老师找到了一个和「" + kw[Math.floor(Math.random()*kw.length)] + "」有关的绝妙比喻...");
    return tips[Math.floor(Math.random() * tips.length)];
  };

  var parseWordsFromInput = function(input) {
    return (input || "")
      .split(/[\n,，、]+/)
      .map(function(w) { return w.trim(); })
      .filter(function(w) { return !!w; });
  };

  var getAutoWordStatus = function(word, index, sourceWords) {
    var inLearned = learned.includes(word);
    if (!inLearned) {
      return index <= idx ? "learning" : "unlearned";
    }
    return "learning";
  };

  var getWordStatus = function(word, index, sourceWords) {
    var manual = wordStatusMap[word];
    if (manual) return manual;
    return getAutoWordStatus(word, index, sourceWords);
  };

  var updateManualWordStatus = function(word, nextStatus) {
    var next = { ...(wordStatusMap || {}) };
    if (!nextStatus) delete next[word];
    else next[word] = nextStatus;
    setWordStatusMap(next);
    try { localStorage.setItem(WORD_STATUS_KEY, JSON.stringify(next)); } catch(e) {}
  };

  var upsertReviewWordData = function(word, patch) {
    if (!word) return;
    setReviewWordData(function(prev) {
      var base = prev[word] || { word: word, reviewHistory: [] };
      var next = { ...prev, [word]: { ...base, ...patch } };
      try { localStorage.setItem(REVIEW_WORD_DATA_KEY, JSON.stringify(next)); } catch(e) {}
      return next;
    });
  };

  var REVIEW_INTERVAL_DAYS = [1, 3, 7, 14, 30];
  var addDaysISO = function(days) {
    var d = new Date();
    d.setDate(d.getDate() + days);
    d.setHours(0,0,0,0);
    return d.toISOString();
  };
  var isDueDate = function(iso) {
    if (!iso) return false;
    var t = new Date(iso).getTime();
    if (!Number.isFinite(t)) return false;
    var now = new Date();
    now.setHours(0,0,0,0);
    return t <= now.getTime();
  };

  var reviewAgeText = function(iso) {
    if (!iso) return "未复习";
    var t = new Date(iso).getTime();
    if (!Number.isFinite(t)) return "未复习";
    var now = new Date();
    var days = Math.floor((now.getTime() - t) / 86400000);
    if (days <= 0) return "今天复习";
    if (days === 1) return "昨天复习";
    return days + "天前复习";
  };

  /* ─── BATCH LOAD: concurrency-limited (max 5) with real progress ─── */
  var loadBatch = async function(startIdx, lrn, words, opts) {
    opts = opts || {};
    var wl = words || wordList;
    var endIdx = Math.min(startIdx + 5, wl.length);
    var batchWords = wl.slice(startIdx, endIdx);
    var total = batchWords.length;
    if (total === 0) return;
    // Streaming mode: start as soon as first word is ready
    var enableStreaming = true;
    var streamStartThreshold = 1; // Always start after 1 word ready
    setBatchTotal(total * 2);
    setBatchProgress(0);
    setBatchGroupNo(Math.floor(startIdx / 5) + 1);
    setPhase("batch_loading");
    setBatchTip(makeBatchTip(0, batchWords[0], total));

    // ── Phase B: fire review/cloze pre-fetch independently (doesn't affect progress bar) ──
    var endMilestone = lrn.length + batchWords.length;
    var willCloze  = endMilestone % 10 === 0;
    var willReview = endMilestone % 5 === 0 && !willCloze;
    if (willReview && !dataCache.current["_review_" + endMilestone]) {
      callAPIFast(sysP, buildReviewPrompt(batchWords))
        .then(function(raw) { dataCache.current["_review_" + endMilestone] = tryJSON(raw) || null; })
        .catch(function(err) { console.warn("[loadBatch] review pre-fetch failed:", err.message); });
    }
    if (willCloze && !dataCache.current["_cloze_" + endMilestone]) {
      callAPIFast(sysP, buildClozePrompt([...lrn.slice(-5), ...batchWords]))
        .then(function(raw) { dataCache.current["_cloze_" + endMilestone] = tryJSON(raw) || null; })
        .catch(function(err) { console.warn("[loadBatch] cloze pre-fetch failed:", err.message); });
    }

    // ── Word audio pre-fetch: Free Dictionary API (fire and forget) ──
    batchWords.forEach(function(word) {
      var w = word.toLowerCase();
      if (dictAudioCache[w]) return;
      fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(w))
        .then(function(r) { return r.json(); })
        .then(function(data) {
          var audioUrl = data?.[0]?.phonetics?.find(function(p) { return p.audio; })?.audio;
          if (audioUrl) {
            if (audioUrl.startsWith("//")) audioUrl = "https:" + audioUrl;
            dictAudioCache[w] = new Audio(audioUrl);
          }
        })
        .catch(function() {});
    });

    var tasks = [];
    var completed = 0;
    var tipWordIdx = 0;
    var shardProviders = ["deepseek-a", "deepseek-b"]; // A/B split for 5-word pack
    var batchStartedAtMs = Date.now();
    var readyWordSet = new Set();
    var earlyStartResolved = false;
    var resolveEarlyStart = null;
    var earlyStartPromise = enableStreaming ? new Promise(function(r) { resolveEarlyStart = r; }) : null;
    var tryResolveEarlyStart = function(force) {
      if (!enableStreaming || earlyStartResolved) return;
      if (force || readyWordSet.size >= streamStartThreshold) {
        earlyStartResolved = true;
        setBatchTip(readyWordSet.size > 0 ? "✅ 首词已就绪，正在为你打开学习页面..." : "⏳ 加载完成，正在进入学习...");
        setBatchProgress(function() { return batchTotalR.current || 0; });
        setTimeout(function() {
          if (resolveEarlyStart) resolveEarlyStart();
        }, readyWordSet.size > 0 ? 400 : 200);
      }
    };
    var dynamicCap = 3;
    try {
      if (typeof window !== "undefined") {
        var savedCap = Number(localStorage.getItem(CONC_KEY) || "3");
        dynamicCap = Math.max(2, Math.min(4, savedCap || 3));
      }
    } catch (e) {}
    for (var i = 0; i < batchWords.length; i++) {
      var w = batchWords[i];
      if (dataCache.current[w]) {
        completed += 2;
        if (dataCache.current[w].teach || dataCache.current[w].guess) readyWordSet.add(w);
        continue;
      }
      dataCache.current[w] = { guess: null, guessRaw: null, teach: null, spectrum: null };
      var wLrn = [...lrn, ...batchWords.slice(0, i)];
      (function(word, learned, providerHint) {
        var preferred = providerHint ? [providerHint] : undefined;
        // Block on guess + teach; spectrum runs in background to preserve pack smoothness.
        tasks.push(function() {
          return callWithClientRetry(function() {
            return callAPIFast(sysP, buildGuessPrompt(word, learned), { preferredProviders: preferred });
          }).then(function(raw) {
            dataCache.current[word].guess = raw ? tryJSON(raw) : null;
            dataCache.current[word].guessRaw = raw;
            // Word is ready if teach is done (guess can be null — UI handles gracefully)
            if (dataCache.current[word].teach && (dataCache.current[word].guess || dataCache.current[word].guessRaw)) {
              readyWordSet.add(word);
              tryResolveEarlyStart();
            }
          }).catch(function(err) {
            console.warn("[loadBatch] guess failed for " + word + ":", err.message);
            dataCache.current[word].guessFailed = true;
            // Even if guess failed, if teach is ready, consider the word ready
            if (dataCache.current[word].teach) {
              readyWordSet.add(word);
              tryResolveEarlyStart();
            }
          });
        });
        tasks.push(function() {
          return callWithClientRetry(function() {
            return callAPI(sysP, buildTeachPrompt(word, learned), { preferredProviders: preferred });
          }).then(function(raw) {
            dataCache.current[word].teach = raw ? addSpeakMarkers(raw) : null;
            // Word is ready if teach loaded (guess can be partial or failed)
            if (dataCache.current[word].teach && (dataCache.current[word].guess || dataCache.current[word].guessRaw || dataCache.current[word].guessFailed)) {
              readyWordSet.add(word);
              tryResolveEarlyStart();
            }
          }).catch(function(err) {
            console.warn("[loadBatch] teach failed for " + word + ":", err.message);
            dataCache.current[word].teachFailed = true;
            // If guess is done/attempted, word is as ready as it'll get
            if (dataCache.current[word].guess || dataCache.current[word].guessRaw || dataCache.current[word].guessFailed) {
              readyWordSet.add(word);
              tryResolveEarlyStart();
            }
          });
        });
        callWithClientRetry(function() {
          return callAPIFast(sysP, buildSpectrumPrompt(word), { preferredProviders: preferred });
        }).then(function(raw) {
          dataCache.current[word].spectrum = raw ? tryJSON(raw) : null;
        }).catch(function(err) {
          console.warn("[loadBatch] spectrum failed for " + word + ":", err.message);
        });
      })(w, wLrn, shardProviders[i % shardProviders.length]);
    }

    tryResolveEarlyStart();

    var totalTasks = completed + tasks.length;
    setBatchTotal(totalTasks);
    setBatchProgress(completed);

    var running = 0;
    var taskIdx = 0;
    var runAllPromise = new Promise(function(resolve) {
      if (tasks.length === 0) { resolve(); return; }
      function next() {
        while (running < dynamicCap && taskIdx < tasks.length) {
          running++;
          var t = tasks[taskIdx++];
          t().finally(function() {
            running--;
            completed++;
            setBatchProgress(completed);
            if (completed % 2 === 0) {
              tipWordIdx++;
              if (tipWordIdx < batchWords.length) {
                setBatchTip(makeBatchTip(tipWordIdx, batchWords[tipWordIdx], total));
              }
            }
            if (completed >= totalTasks) {
              resolve();
            } else {
              next();
            }
          });
        }
      }
      next();
    });

    var finalizeBatch = function() {
      setBatchProgress(totalTasks);
      setBatchTip("✅ " + total + " 个词全部就绪，开始学习！");
      try {
        if (typeof window !== "undefined") {
          var elapsedMs = Date.now() - batchStartedAtMs;
          var currentCap = dynamicCap;
          var nextCap = currentCap;
          if (elapsedMs > 45000) nextCap = Math.max(2, currentCap - 1);
          else if (elapsedMs < 20000) nextCap = Math.min(4, currentCap + 1);
          localStorage.setItem(CONC_KEY, String(nextCap));
        }
      } catch (e) {}
    };

    if (enableStreaming) {
      // Safety: when ALL tasks finish, always resolve earlyStartPromise
      // to prevent deadlock if no word had both guess+teach succeed
      runAllPromise.then(function() {
        finalizeBatch();
        tryResolveEarlyStart(true); // force resolve
      }).catch(function() {
        tryResolveEarlyStart(true); // force resolve even on error
      });
      // Safety timeout: if nothing resolves within 35s, force enter learning
      var safetyTimer = setTimeout(function() {
        tryResolveEarlyStart(true);
      }, 35000);
      await earlyStartPromise;
      clearTimeout(safetyTimer);
      return;
    }

    await runAllPromise;
    finalizeBatch();
    await new Promise(function(r) { setTimeout(r, 400); });
  };

  var applyWordData = function(word) {
    var d = dataCache.current[word];
    setGuessData(null); setSelectedOption(""); setGuessSubmitted(false);
    setShowHint(false); setTeachContent(""); setSpectrumData(null);
    setSpecSlots([null,null,null]); setSpecPool([]); setSpecStatus("idle");
    setReviewData(null); setReviewAnswers({}); setReviewSubmitted(false); setPhonetic("");
    setClozeData(null); setClozeAnswers({}); setClozeSubmitted(false);
    setShakeWrong(false); setBounceCorrect(false);
    setWordStart(Date.now());

    if (d?.guess?.context && d?.guess?.options) {
      setGuessData(d.guess);
      if (d.guess.phonetic) setPhonetic(d.guess.phonetic);
    } else if (d?.guessFailed && !d?.guess) {
      setGuessData({ context: "内容加载失败", options: null, _failed: true });
    } else {
      setGuessData({ context: (d?.guessRaw||"").substring(0,300) || "格式异常", options: null });
    }
    if (d?.teach) {
      setTeachContent(d.teach);
    } else if (d?.teachFailed) {
      setTeachContent("__FAILED__");
    } else {
      // teach 数据可能还在加载中（streaming 模式），设置安全超时
      if (teachTimeoutRef.current) clearTimeout(teachTimeoutRef.current);
      teachTimeoutRef.current = setTimeout(function() {
        setTeachContent(function(prev) { return prev || "__FAILED__"; });
      }, 20000);
    }
    if (d?.spectrum?.spectrum_words) setSpectrumData(d.spectrum);
    setPhaseDir(1); setPhase("guess");
  };

  var submitGuess = function() {
    if (!selectedOption) return;
    setGuessSubmitted(true);
    var correct = guessData?.answer && selectedOption === guessData.answer;

    if (correct) { sfx.correct(); setBounceCorrect(true); setTimeout(function() { setBounceCorrect(false); }, 600); }
    else { sfx.wrong(); setShakeWrong(true); setTimeout(function() { setShakeWrong(false); }, 500); }

    var newStreak = correct ? stats.streak+1 : 0;
    save({ ...stats, total: stats.total+1, correct: stats.correct+(correct?1:0), streak: newStreak, bestStreak: correct ? Math.max(stats.bestStreak, newStreak) : stats.bestStreak, xp: stats.xp+(correct?15:5) });

    if (correct && (newStreak === 3 || newStreak === 5 || newStreak === 10 || newStreak === 15 || newStreak === 20)) {
      var msgs = { 3:"三连对！不错！", 5:"五连对！厉害了！", 10:"十连对！太强了！", 15:"十五连！学霸无疑！", 20:"二十连！无人能挡！" };
      setStreakToast(msgs[newStreak] || ("连对 "+newStreak+"！"));
      setTimeout(function(){ setStreakToast(null); }, 2000);
    }

    setTimeout(function() { setPhaseDir(1); setPhase("teach"); }, 800);
  };

  var skipGuess = function() {
    save({ ...stats, total: stats.total+1, streak: 0, xp: stats.xp+3 });
    setPhaseDir(1); setPhase("teach");
  };

  var handleFile = async (e) => {
    var file = e.target.files?.[0]; if (!file) return;
    setFileLabel("⏳ 正在解析 " + file.name + " ...");
    setError("");
    try {
      var words = [];
      if (/\.(xlsx|xls)$/i.test(file.name)) {
        var buf = new Uint8Array(await file.arrayBuffer());
        var wb = XLSX.read(buf, {type:'array'});
        var ws = wb.Sheets[wb.SheetNames[0]];
        var rows = XLSX.utils.sheet_to_json(ws, {header:1, defval:''});
        words = rows.flat()
          .map(function(c) { return String(c).trim().toLowerCase(); })
          .filter(function(w) { return /^[a-z][a-z\s'\-]{0,30}$/.test(w); });
        if (!words.length) { setError("未能从 Excel 提取英文单词。请确认表格中有一列英文单词，或将文件另存为 CSV 后上传。"); setFileLabel(file.name); return; }
      } else {
        words = await parseFile(file);
        if (!words.length) { setError("未能提取词汇，请确认文件每行一个英文单词。"); setFileLabel(file.name); return; }
      }
      setWordInput(words.join("\n")); setError(""); setSetupTab("words");
      setFileLabel("✅ " + file.name + "（" + words.length + " 个词）");
    } catch (err) { setError("文件解析失败: " + err.message); setFileLabel(file.name); }
    if (fileRef.current) fileRef.current.value = "";
  };

  var startLearning = async function(resumeIdx) {
    var rawWords = wordInput.trim().split(/[\n,，、]+/).map(function(w) { return w.trim().toLowerCase(); }).filter(Boolean);
    if (!rawWords.length) { setError("请输入至少一个单词"); return; }
    if (!profile.trim()) { setError("请先填写并保存学生画像"); return; }
    
    var startIdx = typeof resumeIdx === "number" ? resumeIdx : 0;
    var words = rawWords;
    if (startIdx === 0) {
      var unlearned = rawWords.filter(w => !wordStatusMap[w] || wordStatusMap[w] === "unlearned");
      if (unlearned.length === 0) unlearned = rawWords;
      var remainingQuota = getRemainingNewWordQuota();
      if (remainingQuota <= 0) {
        // 不硬挡，而是弹确认框让用户决定是否超额学习
        if (!confirm("🎉 今日 " + (dailyNewWords||20) + " 个新词目标已完成！\n\n想继续超额学习吗？点「确定」继续。")) {
          return;
        }
        // 超额模式：再给一批词
        words = unlearned.slice(0, dailyNewWords || 20);
      } else {
        words = unlearned.slice(0, Math.min(dailyNewWords || 20, remainingQuota));
      }
    }
    
    var startLearned = startIdx > 0 ? words.slice(0, startIdx) : [];
    setWordList(words); setIdx(startIdx); setLearned(startLearned); setError("");
    dataCache.current = {};
    setScreen("learning");
    saveSession(words, startIdx, startLearned);
    await loadBatch(startIdx, startLearned, words, { streaming: true });
    applyWordData(words[startIdx]);
  };

  // ── Quick Screening Mode ──
  var fetchScreeningDef = function(word) {
    if (screeningDefCache.current[word]) {
      setScreeningDef(screeningDefCache.current[word]);
      return;
    }
    setScreeningDef({ zh: "", loading: true });
    // Chinese translation only (faster for screening)
    fetch("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(word) + "&langpair=en|zh-CN")
      .then(function(r) { return r.json(); })
      .then(function(data) {
        var zh = data?.responseData?.translatedText || "";
        var cleanZh = (zh && zh.toLowerCase() !== word.toLowerCase()) ? zh : "";
        var result = { zh: cleanZh, loading: false };
        screeningDefCache.current[word] = result;
        setScreeningDef(result);
      })
      .catch(function() {
        var result = { zh: "", loading: false };
        screeningDefCache.current[word] = result;
        setScreeningDef(result);
      });
  };

  // Pre-fetch next words for smoother screening
  var prefetchScreeningDefs = function(words, startIdx) {
    for (var i = startIdx; i < Math.min(startIdx + 3, words.length); i++) {
      var w = words[i];
      if (!screeningDefCache.current[w]) {
        (function(word) {
          fetch("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(word) + "&langpair=en|zh-CN")
            .then(function(r) { return r.json(); })
            .then(function(d) {
              var zh = d?.responseData?.translatedText || "";
              screeningDefCache.current[word] = { zh: (zh && zh.toLowerCase() !== word.toLowerCase()) ? zh : "", loading: false };
            })
            .catch(function() { screeningDefCache.current[word] = { zh: "", loading: false }; });
        })(w);
      }
    }
  };

  var startScreening = function() {
    var allWords = parseWordsFromInput(wordInput);
    var toScreen = allWords.filter(function(w) { return !wordStatusMap[w] || wordStatusMap[w] === "unlearned"; });
    if (toScreen.length === 0) { setError("没有未学习的词需要筛选"); return; }
    setScreeningWords(toScreen);
    setScreeningIdx(0);
    setScreeningFlipped(false);
    setScreeningDef(null);
    setScreeningStats({ known: 0, unknown: 0 });
    setScreen("screening");
    prefetchScreeningDefs(toScreen, 0);
  };

  var screeningMarkWord = function(known) {
    var word = screeningWords[screeningIdx];
    if (known) {
      var next = { ...(wordStatusMap || {}), [word]: "skipped" };
      setWordStatusMap(next);
      try { localStorage.setItem(WORD_STATUS_KEY, JSON.stringify(next)); } catch(e) {}
    }
    var newUnknown = known ? screeningStats.unknown : screeningStats.unknown + 1;
    var quota = dailyNewWords || 20;
    setScreeningStats(function(prev) {
      return known ? { ...prev, known: prev.known + 1 } : { ...prev, unknown: prev.unknown + 1 };
    });
    // Smart quota alert: unknown count reached daily learning target
    if (!known && newUnknown === quota && screeningIdx + 1 < screeningWords.length) {
      setScreen("screening_quota");
      return;
    }
    if (screeningIdx + 1 >= screeningWords.length) {
      setScreen("screening_done");
    } else {
      setScreeningIdx(screeningIdx + 1);
      setScreeningFlipped(false);
      setScreeningDef(null);
      prefetchScreeningDefs(screeningWords, screeningIdx + 2);
    }
  };

  var teachToSpectrum = () => {
    if (spectrumData?.spectrum_words) {
      setSpecPool(shuffle(spectrumData.spectrum_words));
      setSpecSlots([null,null,null]); setSpecStatus("idle");
      setPhaseDir(1); setPhase("spectrum");
    } else {
      goNextWord();
    }
  };

  var moveToSlot = (word) => {
    if (specStatus === "success") return;
    var ei = specSlots.findIndex(s => s === null); if (ei === -1) return;
    sfx.click();
    var ns = [...specSlots]; ns[ei] = word;
    setSpecSlots(ns); setSpecPool(specPool.filter(w => w !== word)); setSpecStatus("idle");
  };
  var returnFromSlot = (word, i) => {
    if (specStatus === "success" || !word) return;
    sfx.click();
    var ns = [...specSlots]; ns[i] = null;
    setSpecSlots(ns); setSpecPool([...specPool, word]); setSpecStatus("idle");
  };
  var checkSpectrum = () => {
    if (specSlots.includes(null)) return;
    if (specSlots.join(",") === spectrumData.spectrum_words.join(",")) {
      setSpecStatus("success"); sfx.spectrumWin();
      save({ ...stats, xp: stats.xp+10 });
    } else {
      setSpecStatus("error"); sfx.spectrumFail();
      setTimeout(() => { setSpecPool(shuffle(spectrumData.spectrum_words)); setSpecSlots([null,null,null]); setSpecStatus("idle"); }, 1200);
    }
  };

  var waitAndEnterNextWord = async function(nextIdx, learnedSnapshot) {
    var nextWord = wordList[nextIdx];
    if (!nextWord) return;

    var ready = function() {
      var d = dataCache.current[nextWord];
      return !!(d && d.guess && d.teach);
    };

    if (ready()) {
      setIdx(nextIdx);
      applyWordData(nextWord);
      return;
    }

    setPhase("speed_wait");
    setSpeedWaitSec(0);
    speedWaitAbortRef.current = false;

    var start = Date.now();
    while (!ready() && !speedWaitAbortRef.current && Date.now() - start < 18000) {
      setSpeedWaitSec(Math.floor((Date.now() - start) / 1000));
      await new Promise(function(r) { setTimeout(r, 240); });
    }

    if (!ready() || speedWaitAbortRef.current) {
      // 清除可能损坏的缓存并重新加载
      dataCache.current[nextWord] = null;
      await loadBatch(nextIdx, learnedSnapshot, undefined, { streaming: true });
    }

    setIdx(nextIdx);
    applyWordData(nextWord);
  };

  var goNextWord = async function() {
    // Check daily limit for guests
    if (!userRef.current) {
      var ds = getDailyState();
      if (ds.count >= DAILY_LIMIT) { setShowLimitModal(true); return; }
      incrementDailyCount();
    }
    if (wordStart) {
      setWordTimings(function(prev) { return { ...prev, [currentWord]: { start: wordStart, end: Date.now(), duration: Date.now() - wordStart } }; });
    }
    var newLearned = [...learned, currentWord];
    setLearned(newLearned);
    var nextIdx = idx + 1;

    // Collect basic review data from normal learning flow (P0)
    try {
      var answerKey = guessData?.answer;
      var meaning = answerKey && guessData?.options ? (guessData.options[answerKey] || "") : "";
      var guessed = !!selectedOption;
      var guessCorrect = guessed && answerKey ? selectedOption === answerKey : null;
      var oldItem = reviewWordData[currentWord] || { reviewHistory: [] };
      var isFirstLearnToday = !oldItem.firstLearnedAt;
      upsertReviewWordData(currentWord, {
        word: currentWord,
        phonetic: phonetic || oldItem.phonetic || "",
        meaning: meaning || oldItem.meaning || "",
        firstLearnedAt: oldItem.firstLearnedAt || new Date().toISOString(),
        guessCorrect: guessCorrect,
        reviewLevel: Number.isFinite(oldItem.reviewLevel) ? oldItem.reviewLevel : 0,
        nextReviewDate: oldItem.nextReviewDate || addDaysISO(REVIEW_INTERVAL_DAYS[0]),
      });
      if (isFirstLearnToday) {
        consumeNewWordQuota(1);
      }
      if (guessCorrect === true && !wordStatusMap[currentWord]) {
        updateManualWordStatus(currentWord, "mastered");
      }
      if (guessCorrect === false && !wordStatusMap[currentWord]) {
        updateManualWordStatus(currentWord, "error");
      }
    } catch(e) {}
    // Persist completed word permanently (survives session resets)
    loadSave().then(function(d) {
      var existing = d?.completedWords || [];
      if (!existing.includes(currentWord)) {
        doSave({ ...(d||{}), completedWords: [...existing, currentWord] });
      }
    });
    saveSession(wordList, nextIdx, newLearned);

    if (newLearned.length > 0 && newLearned.length % 10 === 0) {
      // Phase B: instant if pre-fetched during batch loading
      var cachedCloze = dataCache.current["_cloze_" + newLearned.length];
      if (cachedCloze?.questions) {
        setClozeData(cachedCloze); setClozeAnswers({}); setClozeSubmitted(false); setPhase("cloze"); return;
      }
      // Phase A: switch phase immediately so spinner shows, then fetch
      setPhase("cloze"); setLoadingTip("📝 正在生成阅读理解短文...");
      try {
        var raw = await callAPIFast(sysP, buildClozePrompt(newLearned.slice(-10)));
        var parsed = tryJSON(raw);
        if (parsed?.questions) {
          setClozeData(parsed); setClozeAnswers({}); setClozeSubmitted(false);
        } else {
          if (nextIdx < wordList.length) { setIdx(nextIdx); applyWordData(wordList[nextIdx]); }
          else { sfx.complete(); setPhase("done"); }
        }
      } catch (e) {
        setError(e.message || "阅读挑战生成失败，已自动继续学习");
        if (nextIdx < wordList.length) { setIdx(nextIdx); applyWordData(wordList[nextIdx]); }
        else { sfx.complete(); setPhase("done"); }
      }
      return;
    }

    if (newLearned.length > 0 && newLearned.length % 5 === 0) {
      // Phase B: instant if pre-fetched during batch loading
      var cachedReview = dataCache.current["_review_" + newLearned.length];
      if (cachedReview?.questions) {
        setReviewData(cachedReview); setReviewAnswers({}); setReviewSubmitted(false); setPhase("review"); return;
      }
      // Phase A: switch phase immediately so spinner shows, then fetch
      setPhase("review"); setLoadingTip("🎮 设计互动复习挑战中...");
      try {
        var raw = await callAPIFast(sysP, buildReviewPrompt(newLearned.slice(-5)));
        var parsed = tryJSON(raw);
        if (parsed?.questions) {
          setReviewData(parsed); setReviewAnswers({}); setReviewSubmitted(false);
        } else {
          if (nextIdx < wordList.length) { setIdx(nextIdx); applyWordData(wordList[nextIdx]); }
          else { sfx.complete(); setPhase("done"); }
        }
      } catch (e) {
        setError(e.message || "复习关卡生成失败，已自动继续学习");
        if (nextIdx < wordList.length) { setIdx(nextIdx); applyWordData(wordList[nextIdx]); }
        else { sfx.complete(); setPhase("done"); }
      }
      return;
    }

    if (nextIdx >= wordList.length) { sfx.complete(); setPhase("done"); saveSession(wordList, nextIdx, newLearned); return; }

    if (userRef.current && newLearned.length === 10 && !tipDismissed) { setShowTipJar(true); }

    await waitAndEnterNextWord(nextIdx, newLearned);
  };

  var submitReview = () => {
    setReviewSubmitted(true);
    var c = 0;
    reviewData?.questions?.forEach(q => { if (reviewAnswers[q.id] === q.answer) c++; });
    if (c >= 4) sfx.correct(); else if (c >= 2) sfx.click(); else sfx.wrong();
    save({ ...stats, xp: stats.xp + c*10 });
    if (c === reviewData?.questions?.length) {
      setShowConfetti(true);
      setTimeout(function() { setShowConfetti(false); }, 2600);
    }
  };

  var afterReview = async function() {
    var nextIdx = idx + 1;
    if (nextIdx >= wordList.length) { sfx.complete(); setPhase("done"); return; }
    await loadBatch(nextIdx, learned, undefined, { streaming: true });
    setIdx(nextIdx);
    applyWordData(wordList[nextIdx]);
  };

  var submitCloze = () => {
    setClozeSubmitted(true);
    var c = 0;
    clozeData?.questions?.forEach(q => { if (clozeAnswers[q.id] === q.answer) c++; });
    if (c >= 4) sfx.correct(); else if (c >= 2) sfx.click(); else sfx.wrong();
    save({ ...stats, xp: stats.xp + c * 15 });
  };

  var afterCloze = async function() {
    var nextIdx = idx + 1;
    if (nextIdx >= wordList.length) { sfx.complete(); setPhase("done"); return; }
    if (userRef.current && learned.length >= 10 && !tipDismissed) { setShowTipJar(true); }
    await loadBatch(nextIdx, learned, undefined, { streaming: true });
    setIdx(nextIdx);
    applyWordData(wordList[nextIdx]);
  };

  var progress = wordList.length > 0 ? ((idx + (["teach","spectrum","done"].includes(phase) ? 1 : 0)) / wordList.length) * 100 : 0;
  lessonProgressTargetRef.current = progress;

  useEffect(function() {
    if (screen !== "learning") {
      setSmoothLessonPct(0);
      return;
    }
    var id = setInterval(function() {
      var t = lessonProgressTargetRef.current;
      setSmoothLessonPct(function(s) {
        var next = s + (t - s) * 0.12;
        if (Math.abs(t - next) < 0.35) next = t;
        return next;
      });
    }, 72);
    return function() { clearInterval(id); };
  }, [screen, progress]);

  var getDailyPlan = function() {
    var words = parseWordsFromInput(wordInput);
    var todayKey = getLocalDateKey();

    var toReview = words.filter(function(w, i) {
      var s = getWordStatus(w, i, words);
      if (s === "unlearned" || s === "skipped") return false;
      var d = reviewWordData[w] || {};
      return isDueDate(d.nextReviewDate);
    });

    var deepPool = words.filter(function(w, i) {
      var s = getWordStatus(w, i, words);
      var d = reviewWordData[w] || {};
      return s === "error" || s === "uncertain" || (d.consecutiveForgot || 0) >= 2;
    });

    var deepLimit = deepReviewDailyCap || 8;
    var deepUsedToday = getDeepReviewDailyState().count || 0;
    var deepToday = deepPool.slice(0, Math.max(0, deepLimit - deepUsedToday));

    var quotaState = getNewWordQuotaState();
    var unlearned = words.filter(function(w, i) {
      var s = getWordStatus(w, i, words);
      return s === "unlearned";
    });
    var remainingNewQuota = Math.max(0, (quotaState.quota || 0) - (quotaState.consumed || 0));
    var newWordsToday = unlearned.slice(0, remainingNewQuota);

    var quickDoneToday = Object.values(reviewWordData || {}).some(function(item) {
      return (item.reviewHistory || []).some(function(r) {
        return r.mode === "quick" && String(r.date || "").slice(0,10) === todayKey;
      });
    });

    var deepDoneCountToday = Object.values(reviewWordData || {}).reduce(function(acc, item) {
      var c = (item.reviewHistory || []).filter(function(r) {
        return r.mode === "deep" && String(r.date || "").slice(0,10) === todayKey;
      }).length;
      return acc + c;
    }, 0);

    var newLearnedToday = Math.min(quotaState.quota || 0, quotaState.consumed || 0);

    var quickMin = Math.ceil((toReview.length * 5) / 60);
    var deepMin = deepToday.length * 2;
    var newMin = Math.ceil(newWordsToday.length * 1.5);

    var quickDone = quickDoneToday || toReview.length === 0;
    var deepLocked = !quickDone;
    var deepDone = !deepLocked && (deepToday.length === 0 || deepUsedToday >= deepLimit);
    var newDone = newLearnedToday >= (quotaState.quota || dailyNewWords || 20);

    return {
      toReview: toReview,
      deepToday: deepToday,
      deepLocked: deepLocked,
      quickDone: quickDone,
      deepDone: deepDone,
      newDone: newDone,
      deepDoneCountToday: deepDoneCountToday,
      deepUsedToday: deepUsedToday,
      deepCap: deepLimit,
      newLearnedToday: newLearnedToday,
      newWordsToday: newWordsToday,
      newQuota: quotaState.quota || dailyNewWords || 20,
      newRemainingQuota: remainingNewQuota,
      quickMin: quickMin,
      deepMin: deepMin,
      newMin: newMin,
      totalMin: quickMin + deepMin + newMin,
    };
  };

  var rankPriority = function(status, reviewData) {
    var dueBoost = reviewData?.nextReviewDate && isDueDate(reviewData.nextReviewDate) ? 10 : 0;
    if (status === "error") return 100 + dueBoost;
    if (status === "uncertain") return 80 + dueBoost;
    if (status === "learning") return 60 + dueBoost;
    if (status === "mastered") return 30 + dueBoost;
    return 0 + dueBoost;
  };

  var getStudyPlanPrediction = function() {
    var words = parseWordsFromInput(wordInput);
    var totalWords = words.length;
    var skippedCount = 0;
    var learnedCount = 0; // actually learned via AI (not skipped)
    var unlearnedCount = 0;
    words.forEach(function(w, i) {
      var s = getWordStatus(w, i, words);
      if (s === "skipped") skippedCount++;
      else if (s === "unlearned") unlearnedCount++;
      else learnedCount++;
    });
    var dueCount = words.filter(function(w, i) {
      var s = getWordStatus(w, i, words);
      if (s === "unlearned" || s === "skipped") return false;
      var d = reviewWordData[w] || {};
      return d.nextReviewDate && isDueDate(d.nextReviewDate);
    }).length;

    var deepUsedToday = getDeepReviewDailyState().count || 0;
    var deepLeftToday = Math.max(0, (deepReviewDailyCap || 8) - deepUsedToday);

    // Prediction: use screening pass rate to estimate how many unscreened words need learning
    var screenedTotal = skippedCount + learnedCount; // words that have been through some process
    // Use screening stats if available (from current session), otherwise use wordStatusMap ratio
    var allSkipped = words.filter(function(w) { return wordStatusMap[w] === "skipped"; }).length;
    var allProcessed = words.filter(function(w) { return wordStatusMap[w] && wordStatusMap[w] !== "unlearned"; }).length;
    var unknownRate = allProcessed > 0 ? Math.max(0, 1 - (allSkipped / allProcessed)) : 1;
    var predictedNeedLearn = unlearnedCount > 0 && allSkipped > 0
      ? Math.round(unlearnedCount * unknownRate)
      : unlearnedCount;
    var totalNeedLearn = learnedCount > 0 ? (unlearnedCount) : predictedNeedLearn; // if no AI learning yet, show prediction
    var waitingForAI = unlearnedCount; // actual unlearned count

    return {
      totalWords: totalWords,
      learnedCount: learnedCount,
      skippedCount: skippedCount,
      unlearnedCount: unlearnedCount,
      dueCount: dueCount,
      deepUsedToday: deepUsedToday,
      deepLeftToday: deepLeftToday,
      unknownRate: unknownRate,
      predictedNeedLearn: predictedNeedLearn,
      waitingForAI: waitingForAI,
    };
  };

  var getPhaseExecutionSnapshot = function() {
    var statsView = getStatsSnapshot();
    var planView = getStudyPlanPrediction();
    var words = parseWordsFromInput(wordInput);
    var hasWords = words.length > 0;
    var learnedCount = statsView.totalWords - (statsView.statuses.unlearned || 0);
    var focusCount = (statsView.statuses.uncertain || 0) + (statsView.statuses.error || 0);

    var p0Ready = hasWords && (learnedCount > 0 || Number(statsView.answered || 0) > 0);
    var p1Ready = p0Ready && (Number(statsView.quickReviews || 0) + Number(statsView.deepReviews || 0) > 0 || !!targetDate);
    var managementSignals = Object.keys(wordStatusMap || {}).length > 0 || !!wordSearch.trim() || wordSortMode !== "default" || showDueOnly;
    var p2Ready = p1Ready && hasWords && (managementSignals || statsView.totalReviews > 0);

    return {
      P0: p0Ready,
      P1: p1Ready,
      P2: p2Ready,
      learnedCount: learnedCount,
      totalWords: statsView.totalWords,
      focusCount: focusCount,
      dueCount: planView.dueCount,
    };
  };

  var getWordRows = function() {
    var words = parseWordsFromInput(wordInput);
    var rows = words.map(function(w, i) {
      var status = getWordStatus(w, i, words);
      var d = reviewWordData[w] || {};
      var due = !!(d.nextReviewDate && isDueDate(d.nextReviewDate) && status !== "unlearned");
      return {
        word: w,
        index: i,
        status: status,
        reviewData: d,
        due: due,
        priority: rankPriority(status, d),
      };
    });

    var q = wordSearch.trim().toLowerCase();
    if (q) {
      rows = rows.filter(function(r) {
        var meaning = String(r.reviewData?.meaning || "").toLowerCase();
        return r.word.toLowerCase().includes(q) || meaning.includes(q);
      });
    }
    if (wordStatusFilter !== "all") {
      rows = rows.filter(function(r) { return r.status === wordStatusFilter; });
    }
    if (showDueOnly) {
      rows = rows.filter(function(r) { return r.due; });
    }

    if (wordSortMode === "alpha") {
      rows.sort(function(a, b) { return a.word.localeCompare(b.word); });
    } else if (wordSortMode === "status") {
      var order = { error: 0, uncertain: 1, learning: 2, mastered: 3, unlearned: 4 };
      rows.sort(function(a, b) {
        var oa = Number.isFinite(order[a.status]) ? order[a.status] : 99;
        var ob = Number.isFinite(order[b.status]) ? order[b.status] : 99;
        if (oa !== ob) return oa - ob;
        return a.word.localeCompare(b.word);
      });
    } else if (wordSortMode === "priority") {
      rows.sort(function(a, b) {
        if (a.priority !== b.priority) return b.priority - a.priority;
        return a.word.localeCompare(b.word);
      });
    } else if (wordSortMode === "due") {
      rows.sort(function(a, b) {
        var adRaw = a.reviewData?.nextReviewDate ? new Date(a.reviewData.nextReviewDate).getTime() : Infinity;
        var bdRaw = b.reviewData?.nextReviewDate ? new Date(b.reviewData.nextReviewDate).getTime() : Infinity;
        var ad = Number.isFinite(adRaw) ? adRaw : Infinity;
        var bd = Number.isFinite(bdRaw) ? bdRaw : Infinity;
        if (ad !== bd) return ad - bd;
        return a.word.localeCompare(b.word);
      });
    }

    return rows;
  };

  useEffect(function(){
    setWordPage(1);
  }, [wordSearch, wordStatusFilter, showDueOnly, wordSortMode]);

  var toggleWordSelection = function(word) {
    setSelectedWords(function(prev) {
      var next = { ...prev };
      if (next[word]) delete next[word];
      else next[word] = true;
      return next;
    });
  };

  var applyBulkStatus = function(nextStatus) {
    var selected = Object.keys(selectedWords).filter(function(w) { return selectedWords[w]; });
    if (!selected.length) return;

    var words = parseWordsFromInput(wordInput);
    var learnedSet = new Set((learned || []).concat(words.slice(0, Math.max(0, idx + 1))));

    var next = { ...(wordStatusMap || {}) };
    selected.forEach(function(w) {
      if (!learnedSet.has(w)) return; // keep parity with single-word guard: only learned words can be manually marked
      if (!nextStatus || nextStatus === "unlearned") delete next[w];
      else next[w] = nextStatus;
    });
    setWordStatusMap(next);
    try { localStorage.setItem(WORD_STATUS_KEY, JSON.stringify(next)); } catch (e) {}
    setSelectedWords({});
  };

  var getStatsSnapshot = function() {
    var words = parseWordsFromInput(wordInput);
    var reviewRecords = Object.values(reviewWordData || {});
    var totalReviews = reviewRecords.reduce(function(acc, item) {
      return acc + ((item.reviewHistory || []).length || 0);
    }, 0);
    var quickReviews = reviewRecords.reduce(function(acc, item) {
      return acc + (item.reviewHistory || []).filter(function(r) { return r.mode === "quick"; }).length;
    }, 0);
    var deepReviews = reviewRecords.reduce(function(acc, item) {
      return acc + (item.reviewHistory || []).filter(function(r) { return r.mode === "deep"; }).length;
    }, 0);
    var correct = Number(stats.correct || 0);
    var total = Number(stats.total || 0);
    var accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

    var statuses = { unlearned: 0, learning: 0, mastered: 0, uncertain: 0, error: 0 };
    words.forEach(function(w, i) {
      var s = getWordStatus(w, i, words);
      statuses[s] = (statuses[s] || 0) + 1;
    });

    var dueCount = words.filter(function(w, i) {
      var s = getWordStatus(w, i, words);
      if (s === "unlearned" || s === "skipped") return false;
      var d = reviewWordData[w] || {};
      return d.nextReviewDate && isDueDate(d.nextReviewDate);
    }).length;

    return {
      totalWords: words.length,
      statuses: statuses,
      dueCount: dueCount,
      xp: Number(stats.xp || 0),
      bestStreak: Number(stats.bestStreak || 0),
      currentStreak: Number(stats.streak || 0),
      accuracy: accuracy,
      answered: total,
      totalReviews: totalReviews,
      quickReviews: quickReviews,
      deepReviews: deepReviews,
    };
  };

  var startQuickReview = function(mode) {
    mode = mode || "all"; // all | due | focus
    var words = parseWordsFromInput(wordInput);
    var queue = words
      .filter(function(w, i) {
        var s = getWordStatus(w, i, words);
        if (s === "unlearned" || s === "skipped") return false;
        var d = reviewWordData[w] || {};
        // skipped words already filtered above by status check
        if (mode === "due") return isDueDate(d.nextReviewDate);
        if (mode === "focus") return s === "uncertain" || s === "error";
        return true;
      })
      .map(function(w, i) {
        var d = reviewWordData[w] || {};
        var status = getWordStatus(w, i, words);
        return {
          word: w,
          phonetic: d.phonetic || "",
          meaning: d.meaning || "（释义将随学习自动补全）",
          _priority: rankPriority(status, d),
        };
      })
      .sort(function(a, b) { return b._priority - a._priority || a.word.localeCompare(b.word); });

    if (!queue.length) {
      setError(mode === "due" ? "今天没有到期复习词" : mode === "focus" ? "目前没有🟡/🔴重点词" : "暂无可复习单词，请先学习几个词");
      return;
    }

    setQuickReviewQueue(queue);
    setQuickReviewIdx(0);
    setQuickReviewFlipped(false);
    setQuickReviewStats({ remembered:0, fuzzy:0, forgot:0 });
    setScreen("quick_review");
  };

  var markQuickReview = function(result) {
    var item = quickReviewQueue[quickReviewIdx];
    if (!item) return;
    var map = { remembered: "mastered", fuzzy: "uncertain", forgot: "error" };
    var nextStatus = map[result] || "uncertain";

    updateManualWordStatus(item.word, nextStatus);

    var oldItem = reviewWordData[item.word] || { reviewHistory: [] };
    var prevLevel = Number.isFinite(oldItem.reviewLevel) ? oldItem.reviewLevel : 0;
    var nextLevel = prevLevel;
    if (result === "remembered") nextLevel = Math.min(REVIEW_INTERVAL_DAYS.length - 1, prevLevel + 1);
    if (result === "forgot") nextLevel = 0;
    var nextReviewDate = addDaysISO(REVIEW_INTERVAL_DAYS[nextLevel]);

    var hist = [...(oldItem.reviewHistory || []), { date: new Date().toISOString(), mode: "quick", result: result }];
    upsertReviewWordData(item.word, { reviewHistory: hist, reviewLevel: nextLevel, nextReviewDate: nextReviewDate });

    setQuickReviewStats(function(prev){ return { ...prev, [result]: (prev[result] || 0) + 1 }; });

    var nextIdx = quickReviewIdx + 1;
    if (nextIdx >= quickReviewQueue.length) {
      setScreen("quick_review_done");
      return;
    }
    setQuickReviewIdx(nextIdx);
    setQuickReviewFlipped(false);
  };

  var startDeepReview = function() {
    var todayDeep = getDeepReviewDailyState().count || 0;
    if (todayDeep >= (deepReviewDailyCap || 8)) {
      setError("🔴 今日深度攻克已达上限（" + (deepReviewDailyCap || 8) + "）。请先做快速复习，或明天继续。");
      setSetupTab("plan");
      setScreen("setup");
      return;
    }

    var words = parseWordsFromInput(wordInput);
    var queue = words
      .filter(function(w, i) {
        var s = getWordStatus(w, i, words);
        return s === "uncertain" || s === "error";
      })
      .map(function(w, i) {
        var d = reviewWordData[w] || {};
        var s = getWordStatus(w, i, words);
        return { word: w, _priority: rankPriority(s, d) };
      })
      .sort(function(a, b) { return b._priority - a._priority || a.word.localeCompare(b.word); })
      .map(function(x) { return x.word; });

    var leftCap = Math.max(0, (deepReviewDailyCap || 8) - todayDeep);
    queue = queue.slice(0, leftCap);

    if (!queue.length) {
      setError("目前没有可进行深度复习的🟡/🔴词");
      setSetupTab("words");
      setScreen("setup");
      return;
    }
    setDeepReviewQueue(queue);
    setDeepReviewIdx(0);
    setDeepReviewContent("");
    setDeepSessionStats({ remembered:0, fuzzy:0, forgot:0 });
    setScreen("deep_review");
  };

  var parseDeepQuiz = function(lines, startIdx) {
    var pool = startIdx >= 0 ? lines.slice(startIdx) : lines;
    var opts = pool.filter(function(l){ return /^[A-D][\).、:：\s]/i.test(l); }).slice(0,4);
    if (opts.length < 2) return null;
    var stem = pool.find(function(l){ return !/^[A-D][\).、:：\s]/i.test(l) && !/答案|answer/i.test(l) && !/ssat|选择题|single choice|question/i.test(l); }) || "请选择最合适选项";
    var answerLine = pool.find(function(l){ return /答案|answer/i.test(l); }) || "";
    var answerMatch = answerLine.match(/[A-D]/i);
    var answer = answerMatch ? answerMatch[0].toUpperCase() : "";
    var mapped = opts.map(function(l){
      var m = l.match(/^([A-D])[\).、:：\s]*(.*)$/i);
      return { key: m ? m[1].toUpperCase() : "", text: m ? m[2] : l };
    }).filter(function(o){ return o.key; });
    return { question: stem, options: mapped, answer: answer };
  };

  var splitDeepReviewParts = function(text) {
    var lines = String(text || "").split(/\n+/).map(function(s){ return s.trim(); }).filter(Boolean);
    var qIdx = lines.findIndex(function(l){ return /ssat|选择题|single choice|question/i.test(l); });
    var quiz = parseDeepQuiz(lines, qIdx);
    var teachLines = qIdx >= 0 ? lines.slice(0, qIdx) : lines;
    teachLines = teachLines.filter(function(l){ return !/^[A-D][\).、:：\s]/i.test(l) && !/答案|answer/i.test(l); });
    return { teach: teachLines.join("\n\n"), quiz: quiz };
  };

  var fetchDeepReviewPayload = async function(word) {
    if (!word) return { teach: "暂无内容", quiz: null };
    if (deepReviewCacheRef.current[word]) return deepReviewCacheRef.current[word];
    if (deepReviewInflightRef.current[word]) return deepReviewInflightRef.current[word];

    var p = (async function(){
      try {
        var d = reviewWordData[word] || {};
        var reviewCount = (d.reviewHistory || []).length + 1;
        var raw = await callAPIFast(sysP, buildReviewTeachPrompt(word, learned, reviewCount));
        var text = raw || "生成失败，请重试";
        var parts = splitDeepReviewParts(text);
        var payload = { teach: parts.teach || text, quiz: parts.quiz || null };
        deepReviewCacheRef.current[word] = payload;
        return payload;
      } catch (e) {
        var payload = { teach: "生成失败，请重试", quiz: null };
        deepReviewCacheRef.current[word] = payload;
        return payload;
      } finally {
        delete deepReviewInflightRef.current[word];
      }
    })();

    deepReviewInflightRef.current[word] = p;
    return p;
  };

  var prefetchDeepReview = function(word) {
    if (!word) return;
    if (deepReviewCacheRef.current[word] || deepReviewInflightRef.current[word]) return;
    fetchDeepReviewPayload(word).catch(function(){});
  };

  var loadDeepReviewContent = async function(word) {
    if (!word) return;
    setDeepReviewLoading(true);
    setDeepLoadSec(0);
    setDeepReviewContent("");
    setDeepQuiz(null);
    setDeepQuizSelect("");
    setDeepQuizSubmitted(false);
    var payload = await fetchDeepReviewPayload(word);
    setDeepReviewContent(payload.teach || "暂无内容");
    setDeepQuiz(payload.quiz || null);
    setDeepReviewLoading(false);

    // Prefetch next word during current review to avoid per-word waits
    var nextWord = deepReviewQueue[deepReviewIdx + 1];
    if (nextWord) prefetchDeepReview(nextWord);
  };

  var getTimingStats = () => {
    var entries = Object.entries(wordTimings).filter(([_,v]) => v.duration);
    if (!entries.length) return null;
    entries.sort((a,b) => a[1].duration - b[1].duration);
    return { fastest: entries[0], slowest: entries[entries.length-1], avg: Math.round(entries.reduce((s,e) => s+e[1].duration, 0) / entries.length / 1000) };
  };

  // ── SCREENING MODE ──
  if (screen === "screening") {
    var scWord = screeningWords[screeningIdx];
    var scTotal = screeningWords.length;
    var scDone = screeningStats.known + screeningStats.unknown;
    var scPct = Math.round((scDone / scTotal) * 100);
    return (
      <div style={S.root}><div className="vs-desktop-container" style={S.container}>
        <div style={S.topBar}>
          <button style={S.backBtn} onClick={function(){ if (scDone > 0 && !confirm("已筛选 " + scDone + " 个词，确定退出？进度会保留。")) return; setScreen("screening_done"); }}>←</button>
          <div style={{fontSize:13,color:C.textSec}}>快筛 {screeningIdx+1}/{scTotal}</div>
          <div style={{fontSize:12,color:C.teal,fontWeight:600}}>⏭️{screeningStats.known} ❌{screeningStats.unknown}</div>
        </div>
        <div style={{height:4,background:C.border,borderRadius:2,marginBottom:8,overflow:"hidden"}}>
          <div style={{height:"100%",width:scPct+"%",background:"linear-gradient(90deg,"+C.teal+","+C.green+")",borderRadius:2,transition:"width 0.3s ease"}} />
        </div>
        {/* 实时待学习提示条 */}
        {(() => {
          var _quota = dailyNewWords || 20;
          var _unk = screeningStats.unknown;
          var _hasGoal = !!dailyNewWords;
          var _reachedGoal = _unk >= _quota;
          var _nearGoal = _unk >= _quota - 3 && _unk < _quota;
          return <div style={{background:_reachedGoal ? C.accentLight : _nearGoal ? C.goldLight : C.tealLight, border:"1px solid " + (_reachedGoal ? C.accent+"44" : _nearGoal ? C.gold+"44" : C.teal+"44"), borderRadius:8, padding:"6px 12px", marginBottom:12, fontSize:12, color:_reachedGoal ? C.accent : C.text, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <span>
              {_hasGoal
                ? (_reachedGoal
                    ? "🎯 已筛出 " + _unk + " 个待学词，达到今日目标！"
                    : "📝 待学习：" + _unk + " / " + _quota + "（今日目标）")
                : "📝 已筛出 " + _unk + " 个待学习的词"}
            </span>
            {_unk > 0 && <button onClick={function(){ setScreen("screening_done"); }} style={{background:"none",border:"none",color:_reachedGoal ? C.accent : C.teal,fontFamily:FONT,fontSize:12,fontWeight:700,cursor:"pointer",padding:"2px 6px",whiteSpace:"nowrap"}}>开始学习 →</button>}
          </div>;
        })()}
        <div style={{...S.card, textAlign:"center", padding:"36px 24px"}}>
          {!screeningFlipped ? (
            <>
              <div style={{fontSize:12,color:C.textSec,marginBottom:10,fontWeight:600}}>先想想这个词的意思，再翻转验证 👇</div>
              <h2 style={{fontSize:38,margin:"0 0 6px",letterSpacing:1,color:C.text}}>{scWord}</h2>
              <div style={{fontSize:13,color:C.textSec,marginBottom:28}}>第 {screeningIdx+1} / {scTotal} 个</div>
              <button onClick={function(){ setScreeningFlipped(true); fetchScreeningDef(scWord); }} style={{...S.primaryBtn,width:"100%",justifyContent:"center",fontSize:16,padding:"14px 24px",background:C.teal}}>🔄 翻转查看释义</button>
              <button onClick={function(){ screeningMarkWord(false); }} style={{background:"transparent",border:"none",color:C.textSec,fontFamily:FONT,fontSize:13,cursor:"pointer",marginTop:12,padding:"6px 0"}}>完全没见过，直接标不认识 →</button>
            </>
          ) : (
            <>
              <h2 style={{fontSize:32,margin:"0 0 8px",letterSpacing:1,color:C.text}}>{scWord}</h2>
              <div style={{background:C.bg,border:"1px solid "+C.border,borderRadius:10,padding:"14px 16px",marginBottom:20,textAlign:"center",minHeight:50}}>
                {screeningDef?.loading ? (
                  <div style={{color:C.textSec,fontSize:13}}>加载释义中...</div>
                ) : (
                  <>
                    {screeningDef?.zh && <div style={{fontSize:20,fontWeight:700,color:C.text}}>{screeningDef.zh}</div>}
                    {!screeningDef?.zh && <div style={{fontSize:14,color:C.textSec}}>暂无释义，请根据自己的判断标记</div>}
                  </>
                )}
              </div>
              <div style={{fontSize:13,fontWeight:600,color:C.textSec,marginBottom:10}}>看了释义，你确认认识这个词吗？</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
                <button onClick={function(){ screeningMarkWord(true); }} style={{padding:"16px 14px",background:C.greenLight,border:"2px solid "+C.green,borderRadius:14,cursor:"pointer",fontFamily:FONT,fontSize:15,fontWeight:700,color:C.green}}>✅ 确认认识</button>
                <button onClick={function(){ screeningMarkWord(false); }} style={{padding:"16px 14px",background:C.redLight,border:"2px solid "+C.red,borderRadius:14,cursor:"pointer",fontFamily:FONT,fontSize:15,fontWeight:700,color:C.red}}>❌ 不认识</button>
              </div>
            </>
          )}
        </div>
        {screeningStats.unknown > 0 && scDone >= 5 && (
          <button style={{...S.primaryBtn,width:"100%",justifyContent:"center",marginTop:16,background:C.teal}} onClick={function(){ setScreen("screening_done"); }}>⏩ 够了，开始学习不认识的词</button>
        )}
      </div></div>
    );
  }

  if (screen === "screening_quota") {
    var _sqQuota = dailyNewWords || 20;
    var _sqRemaining = screeningWords.length - screeningIdx - 1;
    return (
      <div style={S.root}><div className="vs-desktop-container" style={S.container}>
        <div style={{...S.card, textAlign:"center", padding:"32px 24px"}}>
          <div style={{fontSize:48,marginBottom:8}}>🎯</div>
          <h2 style={{fontSize:20,margin:"0 0 8px",color:C.text}}>今日学习目标已达成！</h2>
          <div style={{fontSize:14,color:C.textSec,lineHeight:1.7,marginBottom:20}}>
            你已筛出 <strong style={{color:C.accent,fontSize:18}}>{_sqQuota}</strong> 个不认识的词，<br/>
            正好是你设定的每日精读数量。
          </div>
          <div style={{background:C.tealLight,border:"1px solid "+C.teal+"44",borderRadius:10,padding:"14px",fontSize:13,color:C.teal,lineHeight:1.6,marginBottom:20,textAlign:"left"}}>
            ✅ 已认识 <strong>{screeningStats.known}</strong> 个（已跳过，不再出现）<br/>
            ❌ 不认识 <strong>{screeningStats.unknown}</strong> 个（等待 AI 精读）<br/>
            📋 未筛选 <strong>{_sqRemaining}</strong> 个（下次继续）
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            <button style={{...S.primaryBtn,width:"100%",justifyContent:"center",fontSize:16,padding:"14px 24px"}} onClick={function(){ setScreen("setup"); startLearning(0); }}>✨ 开始 AI 精读（{_sqQuota} 个词）</button>
            <button style={{...S.primaryBtn,width:"100%",justifyContent:"center",background:C.teal}} onClick={function(){
              setScreeningIdx(screeningIdx + 1);
              setScreeningFlipped(false);
              setScreeningDef(null);
              setScreen("screening");
              prefetchScreeningDefs(screeningWords, screeningIdx + 2);
            }}>🔄 继续筛选剩余 {_sqRemaining} 个词</button>
            <button style={{...S.ghostBtn,width:"100%",justifyContent:"center"}} onClick={function(){ setScreen("screening_done"); }}>查看筛选结果</button>
          </div>
        </div>
      </div></div>
    );
  }

  if (screen === "screening_done") {
    var scKnown = screeningStats.known;
    var scUnknown = screeningStats.unknown;
    var scScreened = scKnown + scUnknown;
    var scRemaining = screeningWords.length - scScreened;
    var unlearnedNow = parseWordsFromInput(wordInput).filter(function(w) { return !wordStatusMap[w] || wordStatusMap[w] === "unlearned"; }).length;
    return (
      <div style={S.root}><div className="vs-desktop-container" style={S.container}>
        <div style={{...S.card, textAlign:"center", padding:"32px 24px"}}>
          <div style={{fontSize:48,marginBottom:8}}>🎯</div>
          <h2 style={{fontSize:22,margin:"0 0 16px",color:C.text}}>快筛完成！</h2>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:20}}>
            <div style={{background:C.greenLight,borderRadius:10,padding:"14px 10px"}}>
              <div style={{fontSize:26,fontWeight:800,color:C.green}}>{scKnown}</div>
              <div style={{fontSize:12,color:C.textSec}}>已认识</div>
            </div>
            <div style={{background:C.redLight,borderRadius:10,padding:"14px 10px"}}>
              <div style={{fontSize:26,fontWeight:800,color:C.red}}>{scUnknown}</div>
              <div style={{fontSize:12,color:C.textSec}}>不认识</div>
            </div>
            <div style={{background:C.bg,borderRadius:10,padding:"14px 10px"}}>
              <div style={{fontSize:26,fontWeight:800,color:C.textSec}}>{scRemaining}</div>
              <div style={{fontSize:12,color:C.textSec}}>未筛选</div>
            </div>
          </div>
          {scKnown > 0 && (
            <div style={{background:C.tealLight,border:"1px solid "+C.teal+"44",borderRadius:10,padding:"12px 14px",fontSize:13,color:C.teal,lineHeight:1.6,marginBottom:16,textAlign:"left"}}>
              ✅ <strong>{scKnown}</strong> 个已认识的词已标为「已跳过」，不会出现在学习和复习中。
            </div>
          )}
          <div style={{fontSize:14,color:C.text,marginBottom:20,lineHeight:1.7}}>
            当前词库还有 <strong style={{color:C.accent}}>{unlearnedNow}</strong> 个未学习的词等待 AI 深度教学
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {unlearnedNow > 0 && (
              <button style={{...S.primaryBtn,width:"100%",justifyContent:"center",fontSize:16,padding:"14px 24px"}} onClick={function(){ setScreen("setup"); startLearning(0); }}>✨ 开始学习不认识的词</button>
            )}
            {scRemaining > 0 && (
              <button style={{...S.primaryBtn,width:"100%",justifyContent:"center",background:C.teal}} onClick={function(){ startScreening(); }}>🔄 继续筛选剩余 {scRemaining} 个词</button>
            )}
            <button style={{...S.ghostBtn,width:"100%",justifyContent:"center"}} onClick={function(){ setScreen("setup"); }}>← 返回首页</button>
          </div>
        </div>
      </div></div>
    );
  }

  if (screen === "quick_review") {
    var qr = quickReviewQueue[quickReviewIdx];
    return (
      <div style={S.root}><div className="vs-desktop-container" style={S.container}>
        <div style={S.topBar}><button style={S.backBtn} onClick={() => setScreen("setup")}>←</button><div style={{fontSize:13,color:C.textSec}}>快速复习 {quickReviewIdx+1}/{quickReviewQueue.length}</div></div>
        <div style={{...S.card, textAlign:"center", padding:"30px 20px"}}>
          <div style={S.tag}>🔄 快速复习</div>
          <h2 style={{fontSize:34,margin:"8px 0 4px"}}>{qr?.word}</h2>
          {!!qr?.phonetic && <div style={{fontSize:14,color:C.textSec,marginBottom:16}}>{qr.phonetic}</div>}
          {!quickReviewFlipped ? (
            <button style={S.primaryBtn} onClick={() => setQuickReviewFlipped(true)}>翻转查看 👆</button>
          ) : (
            <>
              <div style={{margin:"8px 0 16px",padding:"12px 14px",background:C.bg,border:"1px solid "+C.border,borderRadius:10,textAlign:"left",lineHeight:1.7}}>
                释义：{qr?.meaning || "（暂无）"}
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
                <button style={{...S.primaryBtn,background:C.green,borderColor:C.green,justifyContent:"center",padding:"10px 8px"}} onClick={() => markQuickReview("remembered")}>🟢 彻底掌握</button>
                <button style={{...S.primaryBtn,background:C.gold,borderColor:C.gold,justifyContent:"center",padding:"10px 8px"}} onClick={() => markQuickReview("fuzzy")}>🟡 仍不确定</button>
                <button style={{...S.primaryBtn,background:C.red,borderColor:C.red,justifyContent:"center",padding:"10px 8px"}} onClick={() => markQuickReview("forgot")}>🔴 面临易错</button>
              </div>
            </>
          )}
        </div>
      </div></div>
    );
  }

  if (screen === "quick_review_done") {
    var qrTotal = (quickReviewStats.remembered||0) + (quickReviewStats.fuzzy||0) + (quickReviewStats.forgot||0);
    var qrPct = qrTotal > 0 ? Math.round(((quickReviewStats.remembered||0) / qrTotal) * 100) : 0;
    return (
      <div style={S.root}><div className="vs-desktop-container" style={S.container}>
        <div style={{...S.card,textAlign:"center",padding:"30px 20px"}}>
          <div style={{fontSize:40,marginBottom:8,animation:"bounce 0.5s ease-out"}}>{qrPct >= 80 ? "🌟" : qrPct >= 50 ? "💪" : "📖"}</div>
          <div style={S.tag}>📊 复习完成</div>
          <p style={{fontSize:13,color:C.accent,fontWeight:600,margin:"6px 0 10px"}}>{qrPct >= 80 ? "记忆力超强！" : qrPct >= 50 ? "还不错，继续巩固！" : "多复习几次就好了！"}</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:14}}>
            <div style={{background:C.greenLight,borderRadius:10,padding:"10px 6px"}}><div style={{fontSize:22,fontWeight:800,color:C.green}}>{quickReviewStats.remembered}</div><div style={{fontSize:11,color:C.textSec}}>彻底掌握</div></div>
            <div style={{background:C.goldLight,borderRadius:10,padding:"10px 6px"}}><div style={{fontSize:22,fontWeight:800,color:C.gold}}>{quickReviewStats.fuzzy}</div><div style={{fontSize:11,color:C.textSec}}>仍不确定</div></div>
            <div style={{background:C.redLight,borderRadius:10,padding:"10px 6px"}}><div style={{fontSize:22,fontWeight:800,color:C.red}}>{quickReviewStats.forgot}</div><div style={{fontSize:11,color:C.textSec}}>面临易错</div></div>
          </div>
          <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
            {(quickReviewStats.forgot > 0 || quickReviewStats.fuzzy > 0) && <button style={{...S.primaryBtn,background:C.red}} onClick={startDeepReview}>🔴 重点攻克</button>}
            <button style={S.primaryBtn} onClick={() => setScreen("setup")}>← 返回主页</button>
          </div>
        </div>
      </div></div>
    );
  }

  if (screen === "deep_review") {
    var dw = deepReviewQueue[deepReviewIdx];
    var finishDeep = function(result){
      var oldItem = reviewWordData[dw] || { reviewHistory: [] };
      var prevLevel = Number.isFinite(oldItem.reviewLevel) ? oldItem.reviewLevel : 0;
      var nextLevel = prevLevel;
      if (result === "remembered") nextLevel = Math.min(REVIEW_INTERVAL_DAYS.length - 1, prevLevel + 1);
      if (result === "forgot") nextLevel = 0;
      var statusMap = { remembered: "mastered", fuzzy: "uncertain", forgot: "error" };
      var hist = [...(oldItem.reviewHistory || []), { date: new Date().toISOString(), mode: "deep", result: result }];
      upsertReviewWordData(dw, { reviewHistory: hist, reviewLevel: nextLevel, nextReviewDate: addDaysISO(REVIEW_INTERVAL_DAYS[nextLevel]) });
      updateManualWordStatus(dw, statusMap[result] || "uncertain");
      incrementDeepReviewDailyCount();
      setDeepSessionStats(function(prev){ return { ...prev, [result]: (prev[result] || 0) + 1 }; });
      var n = deepReviewIdx + 1;
      if (n >= deepReviewQueue.length) setScreen("deep_review_done"); else setDeepReviewIdx(n);
    };
    return (
      <div style={S.root}><div className="vs-desktop-container" style={S.container}>
        <div style={S.topBar}><button style={S.backBtn} onClick={() => setScreen("setup")}>←</button><div style={{fontSize:13,color:C.textSec}}>重点攻克 {deepReviewIdx+1}/{deepReviewQueue.length}</div></div>
        <div style={{...S.card, padding:"24px 20px"}}>
          <div style={{...S.tag, background:C.redLight, color:C.red}}>🔴 深度复习</div>
          <h2 style={{fontSize:30,margin:"8px 0 10px"}}>{dw}</h2>
          {deepReviewLoading ? <div style={{padding:"8px 0"}}>
            <div style={{background:C.border,borderRadius:8,height:18,width:"60%",marginBottom:10,animation:"skeletonPulse 1.2s ease-in-out infinite"}}/>
            <div style={{background:C.border,borderRadius:8,height:14,width:"100%",marginBottom:8,animation:"skeletonPulse 1.2s ease-in-out infinite",animationDelay:"0.1s"}}/>
            <div style={{background:C.border,borderRadius:8,height:14,width:"85%",marginBottom:8,animation:"skeletonPulse 1.2s ease-in-out infinite",animationDelay:"0.2s"}}/>
            <div style={{background:C.border,borderRadius:8,height:14,width:"92%",marginBottom:8,animation:"skeletonPulse 1.2s ease-in-out infinite",animationDelay:"0.3s"}}/>
            <div style={{background:C.border,borderRadius:8,height:40,width:"100%",marginBottom:8,animation:"skeletonPulse 1.2s ease-in-out infinite",animationDelay:"0.4s"}}/>
            <div style={{textAlign:"center",fontSize:13,color:C.textSec,marginTop:10}}>AI 正在生成复习讲解... 已等待 {deepLoadSec}s · {deepLoadSec < 4 ? "生成新场景" : deepLoadSec < 8 ? "生成对比点" : "生成SSAT仿真题"}</div>
          </div> : <div style={{marginBottom:16}}><Md text={deepReviewContent || "暂无内容"} /></div>}

          {!deepReviewLoading && deepQuiz && (
            <div style={{border:"1px solid "+C.border,borderRadius:12,padding:"12px 12px",background:C.bg,marginBottom:12}}>
              <div style={{fontWeight:700,marginBottom:8}}>🧪 SSAT 仿真题</div>
              <div style={{fontSize:14,lineHeight:1.7,marginBottom:10}}>{deepQuiz.question}</div>
              <div style={{display:"grid",gap:8}}>
                {deepQuiz.options.map(function(op){
                  var picked = deepQuizSelect === op.key;
                  var ok = deepQuizSubmitted && op.key === deepQuiz.answer;
                  var bad = deepQuizSubmitted && picked && op.key !== deepQuiz.answer;
                  return <button key={op.key} disabled={deepQuizSubmitted} onClick={function(){setDeepQuizSelect(op.key);}} style={{...S.optionBtn,justifyContent:"flex-start",background:ok?C.greenLight:bad?C.redLight:picked?C.accentLight:C.bg,borderColor:ok?C.green:bad?C.red:picked?C.accent:C.border,color:ok?C.green:bad?C.red:C.text}}><span style={S.optionKey}>{op.key}</span>{op.text}</button>;
                })}
              </div>
              {!deepQuizSubmitted ? (
                <div style={{marginTop:10}}><button style={S.primaryBtn} disabled={!deepQuizSelect} onClick={function(){setDeepQuizSubmitted(true);}}>提交答案</button></div>
              ) : (
                <div style={{marginTop:10,fontSize:13,color:C.textSec}}>正确答案：<b>{deepQuiz.answer || "未提供"}</b></div>
              )}
            </div>
          )}

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginTop:8}}>
            <button style={{...S.primaryBtn,background:C.green,borderColor:C.green,justifyContent:"center",padding:"10px 8px"}} onClick={function(){finishDeep("remembered");}}>🟢 彻底掌握</button>
            <button style={{...S.primaryBtn,background:C.gold,borderColor:C.gold,justifyContent:"center",padding:"10px 8px"}} onClick={function(){finishDeep("fuzzy");}}>🟡 仍不确定</button>
            <button style={{...S.primaryBtn,background:C.red,borderColor:C.red,justifyContent:"center",padding:"10px 8px"}} onClick={function(){finishDeep("forgot");}}>🔴 面临易错</button>
          </div>
        </div>
      </div></div>
    );
  }

  if (screen === "deep_review_done") {
    var drTotal = (deepSessionStats.remembered||0) + (deepSessionStats.fuzzy||0) + (deepSessionStats.forgot||0);
    var drPct = drTotal > 0 ? Math.round(((deepSessionStats.remembered||0) / drTotal) * 100) : 0;
    return (
      <div style={S.root}><div className="vs-desktop-container" style={S.container}>
        <div style={{...S.card,textAlign:"center",padding:"30px 20px"}}>
          <div style={{fontSize:40,marginBottom:8,animation:"bounce 0.5s ease-out"}}>{drPct >= 80 ? "🏆" : drPct >= 50 ? "💪" : "🔥"}</div>
          <div style={{...S.tag,background:C.redLight,color:C.red}}>✅ 重点攻克完成</div>
          <p style={{fontSize:13,color:C.accent,fontWeight:600,margin:"6px 0 10px"}}>{drPct >= 80 ? "攻克效果显著！" : drPct >= 50 ? "有进步，再接再厉！" : "别灰心，难词需要多轮攻克！"}</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:14}}>
            <div style={{background:C.greenLight,borderRadius:10,padding:"10px 6px"}}><div style={{fontSize:22,fontWeight:800,color:C.green}}>{deepSessionStats.remembered}</div><div style={{fontSize:11,color:C.textSec}}>彻底掌握</div></div>
            <div style={{background:C.goldLight,borderRadius:10,padding:"10px 6px"}}><div style={{fontSize:22,fontWeight:800,color:C.gold}}>{deepSessionStats.fuzzy}</div><div style={{fontSize:11,color:C.textSec}}>仍不确定</div></div>
            <div style={{background:C.redLight,borderRadius:10,padding:"10px 6px"}}><div style={{fontSize:22,fontWeight:800,color:C.red}}>{deepSessionStats.forgot}</div><div style={{fontSize:11,color:C.textSec}}>面临易错</div></div>
          </div>
          <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
            <button style={{...S.primaryBtn,background:C.teal}} onClick={function(){startQuickReview("due");}}>继续今日复习</button>
            <button style={S.primaryBtn} onClick={() => { setSetupTab("words"); setScreen("setup"); }}>返回词汇状态</button>
          </div>
        </div>
      </div></div>
    );
  }

  /* ═══ SETUP SCREEN ═══ */
  if (screen === "setup") {
    var hasSession = wordList.length > 0 && idx < wordList.length && idx > 0;
    var dailyPlan = getDailyPlan();
    return (
    <div style={S.root}>
      <Head>
        <title>VocabSpark — AI 词汇导师</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="AI 驱动的英语词汇学习工具，专为华裔孩子设计。用孩子自己的生活场景讲单词，过目不忘 🎉" />
        <meta property="og:title" content="VocabSpark — AI 英语词汇导师" />
        <meta property="og:description" content="AI 用孩子自己的生活场景讲单词，猜→教→练，过目不忘。免费试用！" />
        <meta property="og:url" content="https://vocabspark.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vocabspark.vercel.app/og-cover.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <div className="vs-desktop-container" style={S.container}>

      {showWelcome && (
        <div style={{ position:"fixed", top:0, left:0, right:0, bottom:0, background:"rgba(0,0,0,0.55)", zIndex:999, display:"flex", alignItems:"center", justifyContent:"center", padding:20, fontFamily:FONT }}>
          <div style={{ background:C.card, borderRadius:20, padding:"32px 28px", maxWidth:480, width:"100%", boxShadow:"0 20px 60px rgba(0,0,0,0.25)", animation:"fadeUp 0.25s ease-out" }}>
            <BrandSparkIcon size={52} marginBottom={10} />
            <h2 style={{ fontSize:26, fontWeight:800, textAlign:"center", margin:"0 0 6px", letterSpacing:"-0.03em", lineHeight:1.1, color:C.text }}>
              欢迎使用 <span style={{ color:C.text }}>Vocab</span><span style={{ color:C.accent }}>Spark</span>
            </h2>
            <p style={{ fontSize:13, color:C.textSec, fontStyle:"italic", textAlign:"center", margin:"0 0 18px", letterSpacing:"0.02em" }}>The AI that truly knows your child.</p>
            <div style={{ fontSize:14, lineHeight:1.85, color:C.text }}>
              <p style={{ margin:"0 0 12px" }}><strong>VocabSpark</strong> 是 AI 驱动的英语词汇学习工具，通过<strong>猜 → 讲 → 光谱排序 → 复习</strong>帮孩子把单词记牢。</p>
              <p style={{ margin:0, padding:"12px 14px", background:C.tealLight, borderRadius:12, fontSize:13, lineHeight:1.75, border:"1px solid rgba(42,122,110,0.12)" }}>
                <strong>开始前请先设置「学生画像」</strong><br/>
                填写年级、爱好、常去的地方等。AI 会据此定制讲解和例句；也可以稍后用「照片日记」补充，越具体越有趣。
              </p>
            </div>
            <button onClick={() => { setShowWelcome(false); setSetupTab("profile"); setTimeout(function(){ var el = document.getElementById("vocabspark-profile-section"); if(el) el.scrollIntoView({behavior:"smooth",block:"start"}); }, 120); }} style={{ ...S.bigBtn, marginTop:16, width:"100%" }}>👍 我知道了，开始设置</button>
            <Disclaimer />
          </div>
        </div>
      )}

      <AppHeroHeader stats={stats} studyStreak={getStudyStreak()} />

      {/* 连续学习激励条 */}
      {(() => {
        var _sk = getStudyStreak();
        var _disp = getStreakDisplay(_sk.streak);
        if (!_disp) return null;
        if (_sk.todayDone) {
          // 今天已完成，显示鼓励
          return <div style={{background:"linear-gradient(135deg, "+C.goldLight+" 0%, "+C.greenLight+" 100%)",border:"1px solid "+C.green+"44",borderRadius:12,padding:"10px 14px",marginBottom:12,display:"flex",alignItems:"center",gap:10}}>
            <span style={{fontSize:24}}>{_disp.emoji}</span>
            <div>
              <div style={{fontSize:13,fontWeight:700,color:C.green}}>✅ 今日目标已完成！连续 {_disp.days} 天</div>
              <div style={{fontSize:11,color:C.textSec}}>{_disp.msg}  还想学可以继续~</div>
            </div>
          </div>;
        } else {
          // 今天还没完成，提醒保持连续
          return <div style={{background:"linear-gradient(135deg, "+C.goldLight+" 0%, "+C.accentLight+" 100%)",border:"1px solid "+C.gold+"44",borderRadius:12,padding:"10px 14px",marginBottom:12,display:"flex",alignItems:"center",gap:10}}>
            <span style={{fontSize:24}}>🔥</span>
            <div>
              <div style={{fontSize:13,fontWeight:700,color:C.accent}}>已连续 {_disp.days} 天，别断了！</div>
              <div style={{fontSize:11,color:C.textSec}}>今天还没完成学习，完成后连续天数 +1</div>
            </div>
          </div>;
        }
      })()}

      {(() => { var _hasWords = parseWordsFromInput(wordInput).length > 0; return <div style={{...S.card, marginBottom:14, borderColor:C.teal, background:C.tealLight}}>
        <div style={{fontWeight:800,fontSize:15,marginBottom:8,color:C.teal,display:"flex",justifyContent:"space-between"}}>
          <span>🏠 今日任务</span>
          {_hasWords && <span style={{fontSize:12,fontWeight:600}}>总计：约 {dailyPlan.totalMin} 分钟</span>}
        </div>

        {!_hasWords ? (
          <>
            <div style={{background:C.card,border:"1px dashed "+C.teal,borderRadius:10,padding:"20px 16px",textAlign:"center"}}>
              <div style={{fontSize:28,marginBottom:8}}>📚</div>
              <div style={{fontWeight:700,fontSize:15,color:C.text,marginBottom:6}}>导入你的第一个词表，开始学习吧！</div>
              <div style={{fontSize:13,color:C.textSec,marginBottom:14,lineHeight:1.6}}>在「词汇表」页签中粘贴单词（每行一个），AI 会为孩子量身定制学习内容。</div>
              <button style={{...S.smallBtn,background:C.teal,color:"#fff",border:"none",padding:"8px 20px",fontSize:14,fontWeight:600}} onClick={function(){ setSetupTab("words"); setTimeout(function(){ var el = document.getElementById("vocabspark-profile-section"); if(el) el.scrollIntoView({behavior:"smooth",block:"start"}); }, 120); }}>前往词汇表 →</button>
            </div>
            <div style={{background:C.card,border:"1px solid "+C.border,borderRadius:10,padding:"14px 16px",marginTop:10}}>
              <div style={{fontSize:12,color:C.teal,fontWeight:700,marginBottom:6}}>AI 定制效果预览</div>
              <div style={{fontSize:13,color:C.text,lineHeight:1.7,background:C.tealLight,borderRadius:8,padding:"10px 12px"}}>
                <div style={{fontWeight:700,marginBottom:4}}>abandon</div>
                <div>普通教材：<span style={{color:C.textSec}}>to leave completely and finally</span></div>
                <div style={{marginTop:4}}>VocabSpark：<span style={{color:C.accent,fontWeight:600}}>Willow 正和 Emily 打网球，突然下暴雨 — they had to <u>abandon</u> the match and run to Irvine Spectrum for matcha ice cream!</span></div>
              </div>
              <div style={{fontSize:11,color:C.textSec,marginTop:6,textAlign:"center"}}>填写「画像」后，所有例句都会围绕孩子的真实生活</div>
            </div>
          </>
        ) : (
          <>
            {showTaskOrderHint && (
              <div style={{fontSize:12,color:C.textSec,marginBottom:8,display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,background:C.card,border:"1px solid "+C.border,borderRadius:8,padding:"6px 8px"}}>
                <span>建议顺序：先复习，再攻克，最后学新词</span>
                <button style={{...S.smallBtn,padding:"2px 8px"}} onClick={function(){setShowTaskOrderHint(false);}}>跳过建议</button>
              </div>
            )}

            <div className="vs-task-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8}}>
              <div style={{background:C.card,border:"1px solid "+C.border,borderRadius:8,padding:"10px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                <div>
                  <div style={{fontWeight:800,fontSize:14,marginBottom:2,whiteSpace:"nowrap",letterSpacing:"-0.02em"}}>① 快速复习</div>
                  <div style={{fontSize:11,color:C.textSec,marginBottom:4}}>约 {dailyPlan.quickMin} 分钟</div>
                  <div style={{fontSize:11,color:dailyPlan.quickDone?C.green:C.textSec,fontWeight:dailyPlan.quickDone?600:500,minHeight:16}}>{dailyPlan.quickDone ? "✅ 已完成" : (dailyPlan.toReview.length === 0 ? "🎉 无到期" : "待审 " + dailyPlan.toReview.length)}</div>
                </div>
                <button style={{...S.smallBtn,background:dailyPlan.quickDone?C.card:C.teal,color:dailyPlan.quickDone?C.teal:"#fff",border:dailyPlan.quickDone?"1px solid "+C.teal:"none",width:"100%",marginTop:10,padding:"6px 0",fontSize:13,fontWeight:600}} onClick={function(){startQuickReview("due");}}>{dailyPlan.quickDone?"再复习":"开始"}</button>
              </div>

              <div style={{background:C.card,border:"1px solid "+C.border,borderRadius:8,padding:"10px",display:"flex",flexDirection:"column",justifyContent:"space-between",opacity:dailyPlan.deepLocked?0.7:1}}>
                <div>
                  <div style={{fontWeight:800,fontSize:14,marginBottom:2,whiteSpace:"nowrap",letterSpacing:"-0.02em"}}>② 重点攻克</div>
                  <div style={{fontSize:11,color:C.textSec,marginBottom:4}}>约 {dailyPlan.deepMin} 分钟</div>
                  <div style={{fontSize:11,color:dailyPlan.deepLocked?C.textSec:dailyPlan.deepDone?C.green:C.textSec,fontWeight:dailyPlan.deepDone?600:500,minHeight:16}}>
                    {dailyPlan.deepLocked ? "🔒 待解锁" : (dailyPlan.deepDone ? "✅ 已完成" : dailyPlan.deepUsedToday + "/" + dailyPlan.deepCap + " 词")}
                  </div>
                </div>
                <button style={{...S.smallBtn,background:dailyPlan.deepLocked?C.textSec:dailyPlan.deepDone?C.card:C.red,color:dailyPlan.deepDone?C.red:"#fff",border:dailyPlan.deepDone?"1px solid "+C.red:"none",width:"100%",marginTop:10,padding:"6px 0",fontSize:13,fontWeight:600}} disabled={dailyPlan.deepLocked} onClick={startDeepReview}>
                  {dailyPlan.deepLocked?"锁定":(dailyPlan.deepDone?"继续":"开始")}
                </button>
              </div>

              <div style={{background:C.card,border:"1px solid "+C.border,borderRadius:8,padding:"10px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                <div>
                  <div style={{fontWeight:800,fontSize:14,marginBottom:2,whiteSpace:"nowrap",letterSpacing:"-0.02em"}}>③ 学习新词</div>
                  <div style={{fontSize:11,color:C.textSec,marginBottom:4}}>约 {dailyPlan.newMin} 分钟</div>
                  <div style={{fontSize:11,color:dailyPlan.newDone?C.green:C.textSec,fontWeight:dailyPlan.newDone?600:500,minHeight:16}}>
                    {dailyPlan.newDone ? "✅ 已达标" : "可学 " + dailyPlan.newRemainingQuota}
                  </div>
                </div>
                <button style={{...S.smallBtn,background:dailyPlan.newDone?C.card:C.accent,color:dailyPlan.newDone?C.accent:"#fff",border:dailyPlan.newDone?"1px solid "+C.accent:"none",width:"100%",marginTop:10,padding:"6px 0",fontSize:13,fontWeight:600}} onClick={function(){startLearning(0);}}>
                  {dailyPlan.newDone?"继续":"开始"}
                </button>
              </div>
            </div>
          </>
        )}
      </div>; })()}

      {hasSession && (
        <div style={{ ...S.card, background: C.tealLight, borderColor: C.teal, marginBottom: 14 }}>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: C.teal }}>📌 上次学到第 {idx+1} 个词（共 {wordList.length} 个）</div>
          <button style={{ ...S.primaryBtn, background: C.teal }} onClick={async function() { setScreen("learning"); await loadBatch(idx, learned, undefined, { streaming: true }); applyWordData(wordList[idx]); }}>继续学习 →</button>
        </div>
      )}

      {/* Account status banner */}
      {user ? (
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",background:C.tealLight,border:"1px solid "+C.teal,borderRadius:10,padding:"10px 16px",marginBottom:12,fontSize:13}}>
          <div><span style={{color:C.teal,fontWeight:700}}>✅ 已登录</span><span style={{color:C.textSec,marginLeft:8}}>{user.email}</span><span style={{color:C.teal,marginLeft:8,fontSize:12}}>· 无限学习已解锁</span></div>
          <button onClick={handleLogout} style={{background:"transparent",border:"none",color:C.textSec,fontSize:12,cursor:"pointer",fontFamily:FONT}}>退出</button>
        </div>
      ) : (
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",background:todayCount>0?C.goldLight:C.tealLight,border:"1px solid "+(todayCount>0?C.gold:C.teal),borderRadius:10,padding:"10px 16px",marginBottom:12,fontSize:13,flexWrap:"wrap",gap:8}}>
          <div style={{lineHeight:1.6}}>{todayCount > 0
            ? <><strong>🎁 推广期免费</strong>：登录后无限学习 &amp; 跨设备同步<br/><span style={{fontSize:12,color:C.textSec}}>未登录用户每日上限 {DAILY_LIMIT} 词，今日已学 {todayCount} 词</span></>
            : <><span style={{color:C.teal}}>☁️</span> 登录后可<strong>跨设备同步</strong>进度 &amp; 每日<strong>无限学习</strong><span style={{fontSize:12,color:C.textSec,marginLeft:4}}>（推广期免费）</span></>
          }</div>
          <button onClick={() => setShowLogin(true)} style={{background:C.accent,color:"#fff",border:"none",borderRadius:8,padding:"7px 16px",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:FONT,whiteSpace:"nowrap"}}>登录 / 注册</button>
        </div>
      )}

      <div id="vocabspark-profile-section" style={{...S.tabBar}}>
        <button style={{...(setupTab==="profile"?S.tabActive:S.tab)}} onClick={() => setSetupTab("profile")}>👤 画像</button>
        <button style={{...(setupTab==="goal"?S.tabActive:S.tab)}} onClick={() => setSetupTab("goal")}>🎯 目的</button>
        <button style={{...(setupTab==="words"?S.tabActive:S.tab)}} onClick={() => setSetupTab("words")}>📝 词汇表</button>
        <button style={{...(setupTab==="plan"?S.tabActive:S.tab)}} onClick={() => setSetupTab("plan")}>📅 计划</button>
        <button style={{...(setupTab==="stats"?S.tabActive:S.tab)}} onClick={() => setSetupTab("stats")}>📊 统计</button>
      </div>
      {setupTab === "profile" && (
        <div style={S.setupCard}>
          <div style={S.setupHint}>{profileLocked ? "✅ 画像已保存" : "🌟 把这里想象成孩子的秘密日记——告诉 AI 她的世界，越真实越有趣，AI 造的句子会让她惊喜！"}</div>
          {profileLocked ? (
            <div><div style={S.profilePrev}>{profile.slice(0,250)}{profile.length>250?"...":""}</div><button style={S.smallBtn} onClick={() => setProfileLocked(false)}>✏️ 编辑</button></div>
          ) : (
            <div>
              {/* 默认示例提示 */}
              {!profile.trim() && (
                <div style={{background:C.goldLight,border:"1px solid "+C.gold+"55",borderRadius:10,padding:"12px 14px",marginBottom:12,fontSize:13,lineHeight:1.7}}>
                  <div style={{fontWeight:700,marginBottom:4,color:C.text}}>👇 下面已预填了一个示例，请替换成你孩子的真实信息</div>
                  <div style={{color:C.textSec,fontSize:12}}>写得越具体，AI 生成的例句越贴近孩子的真实生活，学习效果越好。</div>
                  <button style={{background:C.gold,color:"#fff",border:"none",borderRadius:8,padding:"6px 14px",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:FONT,marginTop:8}} onClick={function(){ setProfile(PROFILE_DEFAULT_EXAMPLE); }}>📝 填入示例，我来修改</button>
                </div>
              )}
              <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:10}}>
                {["💬 今天最开心的事","🎬 最近在追的剧/动画","🌟 最近认识的新朋友","📍 上周末去了哪里","😋 最近特别想吃什么","🎵 最近单曲循环的歌","😤 最近让你烦心的事","🐾 有没有喜欢的宠物"].map(function(p) {
                  return <button key={p} onClick={function() { setProfile(function(prev) { return prev + (prev && !prev.endsWith('\n') ? '\n' : '') + p + '：'; }); }} style={{background:C.accentLight,border:"1px solid "+C.accent+"44",borderRadius:20,padding:"4px 12px",fontSize:12,color:C.accent,cursor:"pointer",fontFamily:FONT,fontWeight:500}}>{p}</button>;
                })}
              </div>
              <div style={{marginBottom:8}}>
                <button onClick={function(){ setShowProfileGuide(!showProfileGuide); }} style={{background:"transparent",border:"none",color:C.accent,fontSize:12,cursor:"pointer",fontFamily:FONT,fontWeight:600,padding:0}}>
                  {showProfileGuide ? "▼ 收起写作示例" : "▶ 不知道写什么？看看示例"}
                </button>
                {showProfileGuide && (
                  <div style={{background:C.accentLight,border:"1px solid "+C.accent+"33",borderRadius:8,padding:"10px 14px",marginTop:6,fontSize:12,color:C.text,lineHeight:1.8}}>
                    <div style={{fontWeight:600,marginBottom:4}}>可以写这些（把名字换成孩子的）：</div>
                    {PROFILE_GUIDE_EXAMPLES.map(function(ex, i) { return <div key={i}>{ex}</div>; })}
                  </div>
                )}
              </div>
              <textarea style={S.textarea} value={profile} onChange={e => setProfile(e.target.value)} rows={8} placeholder={PROFILE_TEXTAREA_PLACEHOLDER} />
              <div style={{display:"flex",justifyContent:"flex-end",fontSize:12,marginTop:3,marginBottom:4,color:profile.length>PROFILE_MAX?C.red:profile.length>800?C.gold:C.textSec}}>
                {profile.length} / {PROFILE_MAX} 字{profile.length>PROFILE_MAX?" · 已超出上限，请精简":profile.length>800?" · 建议精简":""}
              </div>
              <div style={{display:"flex",alignItems:"flex-start",gap:10,margin:"6px 0 12px"}}>
                <button onClick={function() { photoRef.current?.click(); }} disabled={photoLoading} style={{background:C.tealLight,border:"1px solid "+C.teal+"55",borderRadius:8,padding:"8px 14px",fontSize:13,color:C.teal,cursor:photoLoading?"not-allowed":"pointer",fontFamily:FONT,fontWeight:600,opacity:photoLoading?0.7:1,flexShrink:0,whiteSpace:"nowrap"}}>
                  {photoLoading ? "🔍 AI 正在读图..." : user ? "📷 照片日记（" + Math.max(0, PHOTO_LIMIT - (profile.match(/📷 /g)||[]).length) + "/" + PHOTO_LIMIT + " 剩余）" : "📷 照片日记（需注册）"}
                </button>
                <span style={{fontSize:12,color:C.textSec,lineHeight:1.5,flex:1,minWidth:0}}>懒得逐字写？选几张这几天有意思的照片也行，AI 会解析画面并写入画像，用来生成后面的课件与例句。</span>
                <input ref={photoRef} type="file" accept="image/*" style={{display:"none"}} onChange={handlePhotoUpload} />
              </div>
              <button style={{...S.tealBtn,opacity:profile.length>PROFILE_MAX?0.45:1,cursor:profile.length>PROFILE_MAX?"not-allowed":"pointer"}} disabled={profile.length>PROFILE_MAX} onClick={() => { setProfileLocked(true); loadSave().then(d => doSave({...(d||{}), profile, stats})); }}>💾 保存画像</button>
            </div>
          )}
        </div>
      )}
      {setupTab === "goal" && (
        <div style={S.setupCard}>
          <div style={S.setupHint}>告诉我们背单词的目的，AI 会根据目标调整教学风格和例句选择。</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
            {STUDY_GOAL_OPTIONS.map(function(opt) {
              var selected = studyGoal === opt.key;
              return <button key={opt.key} onClick={function(){
                var newGoal = selected ? "" : opt.key;
                setStudyGoal(newGoal);
                loadSave().then(function(d) {
                  var nextData = {...(d||{}), settings: {...(d?.settings||{}), studyGoal: newGoal}};
                  doSave(nextData);
                  syncToCloud(nextData);
                });
              }} style={{
                background: selected ? C.tealLight : C.card,
                border: "1.5px solid " + (selected ? C.teal : C.border),
                borderRadius: 12,
                padding: "14px 12px",
                textAlign: "left",
                cursor: "pointer",
                fontFamily: FONT,
                transition: "all 0.15s ease",
              }}>
                <div style={{fontSize:14,fontWeight:700,color: selected ? C.teal : C.text,marginBottom:2}}>{selected ? "✅ " : ""}{opt.label}</div>
                <div style={{fontSize:12,color:C.textSec,lineHeight:1.4}}>{opt.desc}</div>
              </button>;
            })}
          </div>
          {studyGoal === "other" && (
            <div style={{marginBottom:14}}>
              <div style={{fontSize:13,fontWeight:600,color:C.text,marginBottom:6}}>请输入你的学习目标：</div>
              <input type="text" value={studyGoalCustom} onChange={function(e){ setStudyGoalCustom(e.target.value); }} placeholder="例如：备考 GRE、准备面试英语…" maxLength={100} style={{width:"100%",padding:"10px 14px",borderRadius:10,border:"1.5px solid "+C.border,fontFamily:FONT,fontSize:14,outline:"none",boxSizing:"border-box"}} />
              <button style={{...S.tealBtn,marginTop:8,opacity:studyGoalCustom.trim()?1:0.5}} disabled={!studyGoalCustom.trim()} onClick={function(){
                loadSave().then(function(d) {
                  var nextData = {...(d||{}), settings: {...(d?.settings||{}), studyGoal: "other", studyGoalCustom: studyGoalCustom.trim()}};
                  doSave(nextData);
                  syncToCloud(nextData);
                });
              }}>💾 保存</button>
            </div>
          )}
          {studyGoal && (studyGoal !== "other" || studyGoalCustom.trim()) && (
            <div style={{background:C.tealLight,border:"1px solid "+C.teal+"44",borderRadius:10,padding:"12px 14px",fontSize:13,color:C.teal,lineHeight:1.6}}>
              ✅ 已设置目标：<strong>{studyGoal === "other" ? studyGoalCustom : STUDY_GOAL_OPTIONS.find(function(o){return o.key===studyGoal;})?.label}</strong>
              <br/><span style={{fontSize:12,color:C.textSec}}>AI 生成的教学内容会贴合此目标。随时可以更改。</span>
            </div>
          )}
          {!studyGoal && (
            <div style={{fontSize:12,color:C.textSec,lineHeight:1.6}}>💡 选择一个最接近的考试目标即可。设置后 AI 会在例句和教学中适当偏向该目标场景。</div>
          )}
        </div>
      )}
      {setupTab === "plan" && (() => {
        var planView = getStudyPlanPrediction();
        var _needLearn = planView.predictedNeedLearn + (planView.learnedCount > 0 ? 0 : 0);
        var _totalToStudy = planView.learnedCount + planView.predictedNeedLearn;
        var _estDays = _totalToStudy > planView.learnedCount ? Math.ceil((_totalToStudy - planView.learnedCount) / (dailyNewWords || 20)) : 0;
        var _estDate = _estDays > 0 ? new Date(Date.now() + _estDays * 86400000) : null;
        var _estDateStr = _estDate ? (_estDate.getMonth()+1) + " 月 " + _estDate.getDate() + " 日" : null;
        var _hasScreeningData = planView.skippedCount > 0;
        var _unknownPct = Math.round(planView.unknownRate * 100);
        return <div style={S.setupCard}>
          <div style={S.setupHint}>控制每天的学习节奏，系统会自动安排任务。</div>

          {/* 词库概览 */}
          <div style={{background:C.bg,border:"1px solid "+C.border,borderRadius:10,padding:"12px 14px",fontSize:13,lineHeight:1.8,marginBottom:14}}>
            <div>📚 词库：<strong>{planView.totalWords}</strong> 个词</div>
            {planView.learnedCount > 0 && <div>📖 已通过 AI 学习：<strong>{planView.learnedCount}</strong> 个</div>}
            {planView.skippedCount > 0 && <div>⏭️ 快筛已跳过：<strong>{planView.skippedCount}</strong> 个（不参与学习和复习）</div>}
            <div>📝 待学习：<strong>{planView.unlearnedCount}</strong> 个
              {_hasScreeningData && planView.unlearnedCount > 0 && <span style={{color:C.textSec}}>（预估其中约 <strong style={{color:C.accent}}>{planView.predictedNeedLearn}</strong> 个需要学习，基于 {_unknownPct}% 不认识率）</span>}
            </div>
            <div>📅 今日到期复习：<strong>{planView.dueCount}</strong> 个</div>
            {planView.unlearnedCount > 50 && (
              <div style={{marginTop:6}}>
                <button style={{background:C.teal,color:"#fff",border:"none",borderRadius:8,padding:"6px 14px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:FONT}} onClick={function(){ startScreening(); }}>🃏 用快筛过滤已认识的词 →</button>
              </div>
            )}
          </div>

          {/* 每日精读数 — 主控 */}
          <div style={{marginBottom:16}}>
            <div style={{fontSize:13,fontWeight:700,color:C.text,marginBottom:6}}>每天 AI 精读几个新词？</div>
            <div style={{fontSize:11,color:C.textSec,marginBottom:6}}>快筛时，筛出这么多不认识的词就会提醒你开始精读</div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
              {[5,10,15,20,25,30,50].map(function(n) { return <button key={n} onClick={function(){updateDailyNewWords(n);}} style={dailyNewWords===n ? {...S.ghostBtn, background:C.accent, color:"#fff", borderColor:C.accent, padding:"8px 14px"} : {...S.ghostBtn, padding:"8px 14px"}}>{n}</button>; })}
            </div>
            {planView.predictedNeedLearn > 0 && _estDateStr && (
              <div style={{fontSize:12,color:C.teal,marginTop:8,lineHeight:1.6}}>
                📈 按每天 {dailyNewWords || 20} 个新词，<strong>预计 {_estDays} 天后（{_estDateStr}）</strong>可完成
                {_hasScreeningData && <span style={{color:C.textSec}}>（基于快筛 {_unknownPct}% 不认识率推算）</span>}
              </div>
            )}
            {planView.predictedNeedLearn === 0 && planView.unlearnedCount === 0 && planView.learnedCount > 0 && (
              <div style={{fontSize:12,color:C.green,marginTop:8}}>🎉 所有词汇已学完！继续复习巩固吧。</div>
            )}
          </div>

          {/* 深度攻克上限 — 附说明 */}
          <div style={{marginBottom:14}}>
            <div style={{fontSize:13,fontWeight:700,color:C.text,marginBottom:4}}>每日深度攻克上限</div>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <input type="number" min={1} max={30} value={deepReviewDailyCap} onChange={function(e){updateDeepReviewDailyCap(e.target.value);}} style={{width:80,padding:"9px 10px",border:"1px solid "+C.border,borderRadius:8,fontFamily:FONT,fontSize:13}} />
              <span style={{fontSize:12,color:C.textSec}}>个/天</span>
            </div>
            <div style={{fontSize:11,color:C.textSec,marginTop:4,lineHeight:1.5}}>💡 深度攻克 = 对易错词、不确定词的强化复习（和新词学习互不影响）。建议 5~10 个/天，避免疲劳。</div>
            <div style={{fontSize:12,color:C.text,marginTop:4}}>🔴 今日已攻克 {planView.deepUsedToday}，剩余 <strong>{planView.deepLeftToday}</strong></div>
          </div>

          <div style={{display:"flex",gap:10,flexWrap:"wrap",marginTop:12}}>
            <button style={{...S.primaryBtn,background:C.teal}} onClick={function(){setSetupTab("words");}}>📝 去管理词汇 →</button>
            <button style={{...S.primaryBtn,background:C.red}} onClick={startDeepReview}>🔴 开始深度攻克</button>
          </div>
        </div>;
      })()}

      {setupTab === "words" && (
        <div style={S.setupCard}>
          <div style={S.setupHint}>词库管理：导入、筛选、状态维护与批量操作。</div>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
            <div style={S.uploadRow}>
              <button style={S.uploadBtn} onClick={() => fileRef.current?.click()}>📁 上传</button>
              <span style={{fontSize:13,color:C.textSec}}>{fileLabel||".xlsx .csv .txt 均支持"}</span>
              <input ref={fileRef} type="file" accept=".csv,.tsv,.txt,.xlsx,.xls" style={{display:"none"}} onChange={handleFile} />
            </div>
            <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:4}}>
              <button onClick={resetLearningProgress} style={{padding:"5px 10px",background:C.red+"18",color:C.red,border:"1px solid "+C.red+"33",borderRadius:8,fontFamily:FONT,fontSize:12,fontWeight:600,cursor:"pointer",whiteSpace:"nowrap"}}>🔄 重置进度</button>
              <span onClick={function(){setHelpTip(helpTip==="reset"?null:"reset");}} style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:18,height:18,borderRadius:999,background:C.border,color:C.textSec,fontSize:11,fontWeight:700,cursor:"pointer",userSelect:"none",flexShrink:0}}>?</span>
            </div>
          </div>
          {helpTip === "reset" && <div style={{background:C.accentLight,border:"1px solid "+C.accent+"33",borderRadius:10,padding:"10px 14px",fontSize:12,color:C.text,lineHeight:1.7,marginBottom:10}}>
            <strong>重置进度</strong>：换词表后建议重置，清除旧词的学习状态和统计数据，从零开始。<br/>
            <span style={{color:C.textSec}}>会清除：单词状态、复习记录、XP 和正确率、今日配额<br/>不会清除：词表内容、学生画像、每日目标、连续学习天数</span>
            <div style={{textAlign:"right",marginTop:4}}><span onClick={function(){setHelpTip(null);}} style={{color:C.accent,cursor:"pointer",fontWeight:600}}>收起</span></div>
          </div>}
          <div style={S.presetRow}>{Object.keys(PRESETS).map(n => <button key={n} style={S.presetBtn} onClick={() => setWordInput(PRESETS[n])}>{n}</button>)}</div>

          {(() => {
            var words = parseWordsFromInput(wordInput);
            var counts = { unlearned:0, learning:0, mastered:0, uncertain:0, error:0 };
            var dueCount = 0;
            words.forEach(function(w, i){
              var s = getWordStatus(w, i, words);
              counts[s] = (counts[s] || 0) + 1;
              var d = reviewWordData[w] || {};
              if (isDueDate(d.nextReviewDate)) dueCount++;
            });
            var focusCount = (counts.uncertain || 0) + (counts.error || 0);
            var rows = getWordRows();
            var totalRows = rows.length;
            var totalPages = Math.max(1, Math.ceil(totalRows / wordPageSize));
            var safePage = Math.min(wordPage, totalPages);
            var pageStart = (safePage - 1) * wordPageSize;
            var pageRows = rows.slice(pageStart, pageStart + wordPageSize);
            var filteredWordKeys = rows.map(function(r){ return r.word; });
            var selectedCount = Object.keys(selectedWords).filter(function(k){ return selectedWords[k]; }).length;
            var allFilteredSelected = filteredWordKeys.length > 0 && filteredWordKeys.every(function(w){ return !!selectedWords[w]; });
            return <>
              <div style={{display:"flex",gap:10,flexWrap:"wrap",margin:"8px 0 10px",fontSize:12,color:C.textSec}}>
                <button onClick={function(){setWordStatusFilter("all");}} style={{padding:"4px 8px",borderRadius:999,background:wordStatusFilter==="all"?C.accentLight:C.bg,border:"1px solid "+(wordStatusFilter==="all"?C.accent:C.border),color:wordStatusFilter==="all"?C.accent:C.textSec,fontWeight:700,cursor:"pointer"}}>全部 {words.length}</button>
                {Object.keys(WORD_STATUS_META).map(function(k){
                  var m = WORD_STATUS_META[k];
                  var active = wordStatusFilter===k;
                  return <button key={k} onClick={function(){setWordStatusFilter(k);}} style={{padding:"4px 8px",borderRadius:999,background:active?C.accentLight:C.bg,border:"1px solid "+(active?C.accent:C.border),color:m.color,fontWeight:700,cursor:"pointer"}}>{m.icon} {m.text} {counts[k]||0}</button>;
                })}
              </div>

              {dueCount > 0 && <div style={{display:"flex",alignItems:"center",gap:8,padding:"6px 10px",background:C.goldLight,border:"1px solid "+C.gold+"44",borderRadius:8,fontSize:12,color:C.gold,fontWeight:600,margin:"0 0 8px"}}>
                <span>⏰ {dueCount} 个词到期待复习</span>
                {focusCount > 0 && <span style={{color:C.red}}>· 🔴 {focusCount} 个重点词</span>}
              </div>}
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,margin:"0 0 10px"}}>
                <input value={wordSearch} onChange={function(e){setWordSearch(e.target.value);}} placeholder="搜索单词/释义" style={{padding:"8px 10px",border:"1px solid "+C.border,borderRadius:8,fontFamily:FONT,fontSize:13}} />
                <select value={wordSortMode} onChange={function(e){setWordSortMode(e.target.value);}} style={{padding:"8px 10px",border:"1px solid "+C.border,borderRadius:8,fontFamily:FONT,fontSize:13,background:C.card}}>
                  <option value="default">默认顺序</option>
                  <option value="alpha">按字母排序</option>
                  <option value="status">按状态排序</option>
                  <option value="priority">按复习优先级</option>
                  <option value="due">按到期时间</option>
                </select>
              </div>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10,fontSize:12,color:C.textSec,flexWrap:"wrap",gap:8}}>
                <label style={{display:"flex",alignItems:"center",gap:6,cursor:"pointer"}}>
                  <input type="checkbox" checked={showDueOnly} onChange={function(e){setShowDueOnly(e.target.checked);}} /> 仅看逾期复习
                </label>
                <div style={{display:"flex",alignItems:"center",gap:6}}>
                  <span>视图：</span>
                  <button style={wordDensity==="compact"?{...S.smallBtn,background:C.accentLight,borderColor:C.accent,color:C.accent}:{...S.smallBtn}} onClick={function(){setWordDensity("compact");}}>紧凑</button>
                  <button style={wordDensity==="cozy"?{...S.smallBtn,background:C.accentLight,borderColor:C.accent,color:C.accent}:{...S.smallBtn}} onClick={function(){setWordDensity("cozy");}}>舒适</button>
                </div>
                <span>筛选后 {totalRows} 个词</span>
              </div>

              <div style={{fontSize:12,color:C.textSec,fontWeight:700,margin:"0 0 8px"}}>复习入口</div>
              {dueCount > 0 && (
                <div style={{background:C.tealLight,border:"1px solid "+C.teal,borderRadius:10,padding:"9px 12px",fontSize:13,margin:"0 0 10px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,flexWrap:"wrap"}}>
                  <span style={{color:C.teal,fontWeight:700}}>📅 今天有 {dueCount} 个词需要复习</span>
                  <button style={{...S.smallBtn,background:C.teal,color:"#fff",border:"none"}} onClick={function(){startQuickReview("due");}}>开始快速复习 →</button>
                </div>
              )}
              <div style={{display:"flex",gap:10,margin:"0 0 12px",flexWrap:"wrap"}}>
                <button style={{...S.primaryBtn,background:C.teal}} onClick={function(){startQuickReview("all");}}>🔄 快速复习已学词</button>
                <button style={{...S.primaryBtn,background:C.red}} onClick={startDeepReview}>🔴 重点攻克 {focusCount}</button>
              </div>

              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"0 0 8px",gap:8,flexWrap:"wrap"}}>
                <div style={{fontSize:12,color:C.textSec,fontWeight:700}}>词汇状态（可多选批量标注）</div>
                <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                  <button style={S.smallBtn} onClick={function(){
                    if (allFilteredSelected) {
                      setSelectedWords({});
                      return;
                    }
                    var next = {};
                    filteredWordKeys.forEach(function(w){ next[w] = true; });
                    setSelectedWords(next);
                  }}>{allFilteredSelected ? "取消全选" : "全选筛选结果"}</button>
                  {selectedCount > 0 && <>
                    <button style={{...S.smallBtn,borderColor:C.green,color:C.green}} onClick={function(){applyBulkStatus("mastered");}}>批量🟢</button>
                    <button style={{...S.smallBtn,borderColor:C.gold,color:C.gold}} onClick={function(){applyBulkStatus("uncertain");}}>批量🟡</button>
                    <button style={{...S.smallBtn,borderColor:C.red,color:C.red}} onClick={function(){applyBulkStatus("error");}}>批量🔴</button>
                    <button style={S.smallBtn} onClick={function(){applyBulkStatus("unlearned");}}>清除标注</button>
                  </>}
                </div>
              </div>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"0 0 8px",fontSize:12,color:C.textSec}}>
                <div>第 {safePage}/{totalPages} 页</div>
                <div style={{display:"flex",gap:6,alignItems:"center"}}>
                  <select value={wordPageSize} onChange={function(e){setWordPageSize(Number(e.target.value)||120);}} style={{padding:"4px 6px",border:"1px solid "+C.border,borderRadius:6,fontFamily:FONT,fontSize:12}}>
                    <option value={80}>80/页</option>
                    <option value={120}>120/页</option>
                    <option value={200}>200/页</option>
                  </select>
                  <button style={S.smallBtn} disabled={safePage<=1} onClick={function(){setWordPage(function(p){return Math.max(1,p-1);});}}>上一页</button>
                  <button style={S.smallBtn} disabled={safePage>=totalPages} onClick={function(){setWordPage(function(p){return Math.min(totalPages,p+1);});}}>下一页</button>
                </div>
              </div>

              <div style={{maxHeight:280,overflow:"auto",border:"1px solid "+C.border,borderRadius:12,background:C.bg,marginBottom:12}}>
                {totalRows === 0 ? <div style={{padding:14,fontSize:13,color:C.textSec}}>没有匹配结果。试试清空筛选或修改搜索词。</div> : pageRows.map(function(row, i){ 
                  var w = row.word;
                  var s = row.status;
                  var m = WORD_STATUS_META[s] || WORD_STATUS_META.unlearned;
                  var learnedWord = learned.includes(w) || row.index <= idx;
                  var d = row.reviewData || {};
                  var overdue = row.due;
                  var checked = !!selectedWords[w];
                  return <div key={w+"_"+i} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"9px 12px",borderBottom:i===pageRows.length-1?"none":"1px solid "+C.border,background:checked?C.accentLight:"transparent"}}>
                    <div style={{display:"flex",alignItems:"center",gap:10,minWidth:0}}>
                      <input type="checkbox" checked={checked} onChange={function(){toggleWordSelection(w);}} />
                      <button
                        onClick={function(){
                          if (!learnedWord) return;
                          var seq = ["mastered","uncertain","error"];
                          var cur = wordStatusMap[w] || "mastered";
                          var next = seq[(seq.indexOf(cur) + 1) % seq.length];
                          updateManualWordStatus(w, next);
                        }}
                        disabled={!learnedWord}
                        style={{border:"none",background:"transparent",fontSize:18,cursor:learnedWord?"pointer":"not-allowed",opacity:learnedWord?1:0.55}}
                        title={learnedWord?"点击切换状态 🟢→🟡→🔴":"未学习词不可手动标注"}
                      >{m.icon}</button>
                      <div style={{minWidth:0}}>
                        {wordDensity === "compact" ? (
                          <div style={{fontWeight:700,fontSize:13,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:220,color:m.color}}>
                            {w} · {m.text}{overdue ? " ⚠️" : ""}
                          </div>
                        ) : (
                          <>
                            <div style={{fontWeight:700,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:180}}>{w}</div>
                            <div style={{fontSize:11,color:m.color,fontWeight:700}}>{m.text} · {reviewAgeText(d.lastReviewDate)} {overdue ? "⚠️" : ""}</div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>;
                })}
              </div>
            </>;
          })()}

          <div style={{fontSize:12,color:C.textSec,fontWeight:700,margin:"2px 0 8px"}}>编辑词表</div>
          <textarea style={S.textarea} value={wordInput} onChange={e => setWordInput(e.target.value)} rows={5} placeholder="arduous\nbenevolent" />
          <div style={{fontSize:13,color:C.textSec,marginTop:4}}>{wordInput.trim() ? "共 "+parseWordsFromInput(wordInput).length+" 个词" : ""}</div>

          {(() => {
            var _allWords = parseWordsFromInput(wordInput);
            var _unlearnedCount = _allWords.filter(function(w){ return !wordStatusMap[w] || wordStatusMap[w] === "unlearned"; }).length;
            if (_allWords.length === 0) return null;
            return <div style={{marginTop:14}}>
              <div style={{fontSize:15,fontWeight:700,color:C.text,marginBottom:10}}>选择学习方式</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:14}}>
                {/* 快筛模式 */}
                <div style={{background:C.tealLight,border:"1.5px solid "+C.teal+"66",borderRadius:14,padding:"18px 14px",textAlign:"center"}}>
                  <div style={{fontSize:28,marginBottom:6}}>🃏</div>
                  <div style={{fontSize:15,fontWeight:700,color:C.teal,marginBottom:4}}>快筛模式</div>
                  <div style={{fontSize:12,color:C.textSec,lineHeight:1.5,marginBottom:12}}>翻牌看释义，认识的跳过<br/>不认识的留给 AI 教<br/><strong>适合大量词汇快速过滤</strong></div>
                  <button style={{...S.primaryBtn,width:"100%",justifyContent:"center",padding:"10px 16px",background:C.teal,fontSize:14}} onClick={function(){ startScreening(); }}>开始快筛（{_unlearnedCount} 词）</button>
                </div>
                {/* 精读模式 */}
                <div style={{background:C.accentLight,border:"1.5px solid "+C.accent+"66",borderRadius:14,padding:"18px 14px",textAlign:"center"}}>
                  <div style={{fontSize:28,marginBottom:6}}>✨</div>
                  <div style={{fontSize:15,fontWeight:700,color:C.accent,marginBottom:4}}>精读模式</div>
                  <div style={{fontSize:12,color:C.textSec,lineHeight:1.5,marginBottom:12}}>AI 量身定制教学内容<br/>猜 → 讲 → 练 → 复习<br/><strong>适合重点深度记忆</strong></div>
                  <button style={{...S.primaryBtn,width:"100%",justifyContent:"center",padding:"10px 16px",fontSize:14}} onClick={function(){ startLearning(0); }}>开始精读（{Math.min(_unlearnedCount, dailyNewWords||20)} 词）</button>
                </div>
              </div>
              {_unlearnedCount > 50 && (
                <div style={{background:C.goldLight,border:"1px solid "+C.gold+"44",borderRadius:10,padding:"10px 14px",fontSize:12,color:C.textSec,lineHeight:1.6,marginBottom:12}}>
                  💡 词库有 <strong>{_unlearnedCount}</strong> 个未学词，建议先用「快筛模式」过滤掉已认识的，再用「精读模式」深度学习不认识的词，效率更高！
                </div>
              )}
              <div style={{textAlign:"center"}}>
                <button style={{background:"transparent",border:"1px solid "+C.border,color:C.textSec,fontFamily:FONT,fontSize:12,cursor:"pointer",borderRadius:8,padding:"6px 14px"}} onClick={function(){ setSetupTab("plan"); }}>📅 学习计划设置 →</button>
              </div>
            </div>;
          })()}
        </div>
      )}

      {setupTab === "stats" && (() => {
        var statsView = getStatsSnapshot();
        var planView = getStudyPlanPrediction();
        var phaseView = getPhaseExecutionSnapshot();
        return <div style={S.setupCard}>
          <div style={S.setupHint}>学习统计中心：查看学习成效、复习量和当前词库健康度。</div>
          {statsView.totalWords > 0 && (() => {
            var _nonSkippedTotal = Math.max(1, statsView.totalWords - (statsView.statuses.skipped||0));
            var masteredPct = Math.round(((statsView.statuses.mastered||0) / _nonSkippedTotal) * 100);
            var healthColor = masteredPct >= 60 ? C.green : masteredPct >= 30 ? C.gold : C.accent;
            var healthLabel = masteredPct >= 60 ? "优秀" : masteredPct >= 30 ? "良好" : "起步中";
            return <div style={{display:"flex",alignItems:"center",gap:14,background:"linear-gradient(135deg, "+C.tealLight+" 0%, "+C.accentLight+" 100%)",border:"1px solid "+C.border,borderRadius:12,padding:"14px 16px",marginBottom:12}}>
              <div style={{position:"relative",width:56,height:56,flexShrink:0}}>
                <svg width="56" height="56" viewBox="0 0 56 56"><circle cx="28" cy="28" r="24" fill="none" stroke={C.border} strokeWidth="5"/><circle cx="28" cy="28" r="24" fill="none" stroke={healthColor} strokeWidth="5" strokeLinecap="round" strokeDasharray={2*Math.PI*24} strokeDashoffset={2*Math.PI*24*(1-masteredPct/100)} transform="rotate(-90 28 28)"/></svg>
                <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",fontSize:14,fontWeight:800,color:healthColor}}>{masteredPct}%</div>
              </div>
              <div>
                <div style={{fontWeight:700,fontSize:14,color:C.text}}>词库健康度：<span style={{color:healthColor}}>{healthLabel}</span></div>
                <div style={{fontSize:12,color:C.textSec,marginTop:2}}>{statsView.statuses.mastered||0} 个已掌握 / {_nonSkippedTotal} 个词汇{(statsView.statuses.skipped||0) > 0 ? "（不含 " + (statsView.statuses.skipped||0) + " 个快筛跳过）" : ""}</div>
              </div>
            </div>;
          })()}
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:10,marginBottom:12}}>
            <div style={S.statCard}><div style={S.statNum}>{statsView.totalWords}</div><div style={S.statLabel}>词库总数</div></div>
            <div style={S.statCard}><div style={S.statNum}>{statsView.dueCount}</div><div style={S.statLabel}>今日到期复习</div></div>
            <div style={S.statCard}><div style={S.statNum}>{statsView.accuracy}%</div><div style={S.statLabel}>猜词正确率</div></div>
            <div style={S.statCard}><div style={S.statNum}>{statsView.xp}</div><div style={S.statLabel}>累计 XP</div></div>
            <div style={S.statCard}><div style={S.statNum}>{statsView.bestStreak}</div><div style={S.statLabel}>最佳连对</div></div>
            <div style={S.statCard}><div style={S.statNum}>{statsView.totalReviews}</div><div style={S.statLabel}>总复习次数</div></div>
            <div style={S.statCard}><div style={S.statNum}>{planView.deepUsedToday}/{deepReviewDailyCap}</div><div style={S.statLabel}>深度攻克今日用量</div></div>
            <div style={S.statCard}><div style={S.statNum}>{planView.skippedCount}</div><div style={S.statLabel}>快筛已跳过</div></div>
            <div style={S.statCard}><div style={S.statNum}>{planView.unlearnedCount}</div><div style={S.statLabel}>待学习词数</div></div>
            <div style={S.statCard}><div style={S.statNum}>{planView.skippedCount > 0 ? Math.round(planView.unknownRate*100)+"%" : "-"}</div><div style={S.statLabel}>预估不认识率</div></div>
          </div>
          <div style={{background:C.bg,border:"1px solid "+C.border,borderRadius:10,padding:"10px 12px",marginBottom:10}}>
            <div style={{fontWeight:700,fontSize:13,marginBottom:8}}>词汇状态分布</div>
            {Object.keys(WORD_STATUS_META).map(function(k){
              var m = WORD_STATUS_META[k];
              var c = statsView.statuses[k] || 0;
              var total = Math.max(1, statsView.totalWords);
              var pct = Math.round((c / total) * 100);
              return <div key={k} style={{marginBottom:8}}>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4}}><span style={{color:m.color,fontWeight:700}}>{m.icon} {m.text}</span><span>{c} ({pct}%)</span></div>
                <div style={{height:6,background:C.border,borderRadius:999,overflow:"hidden"}}><div style={{height:"100%",width:pct+"%",background:m.color,borderRadius:999}}/></div>
              </div>;
            })}
          </div>
          <div style={{background:C.bg,border:"1px dashed "+C.border,borderRadius:10,padding:"10px 12px",marginBottom:10}}>
            <div style={{fontWeight:700,fontSize:13,marginBottom:6}}>🚦 P0 / P1 / P2 阶段看板</div>
            <div style={{display:"flex",gap:8,flexWrap:"wrap",fontSize:12,marginBottom:6}}>
              <span style={{padding:"2px 8px",borderRadius:999,background:phaseView.P0?C.greenLight:C.redLight,color:phaseView.P0?C.green:C.red,fontWeight:700}}>P0 基础学习 {phaseView.P0?"✅":"⏳"}</span>
              <span style={{padding:"2px 8px",borderRadius:999,background:phaseView.P1?C.greenLight:C.redLight,color:phaseView.P1?C.green:C.red,fontWeight:700}}>P1 复习与计划 {phaseView.P1?"✅":"⏳"}</span>
              <span style={{padding:"2px 8px",borderRadius:999,background:phaseView.P2?C.greenLight:C.redLight,color:phaseView.P2?C.green:C.red,fontWeight:700}}>P2 管理与统计 {phaseView.P2?"✅":"⏳"}</span>
            </div>
            <div style={{fontSize:12,color:C.textSec,lineHeight:1.7}}>当前进度：已学习 {phaseView.learnedCount}/{phaseView.totalWords}，到期 {phaseView.dueCount}，重点词 {phaseView.focusCount}。</div>
          </div>
          <div style={{background:C.goldLight,border:"1px solid "+C.gold,borderRadius:10,padding:"12px 14px",fontSize:13,lineHeight:1.6,color:C.text}}>
            <div style={{fontWeight:700,marginBottom:4}}>⚡ 行动建议 (Action Items)</div>
            <ul style={{margin:0,paddingLeft:20}}>
              {statsView.dueCount > 0 && <li><strong>有 {statsView.dueCount} 个到期词待复习</strong>，建议先做快速复习清空队列。</li>}
              {(statsView.statuses.uncertain||0) + (statsView.statuses.error||0) > 0 && <li><strong>你的易错/不确定词有 {(statsView.statuses.uncertain||0) + (statsView.statuses.error||0)} 个</strong>，请在精力充沛时优先点击“深度攻克”。</li>}
              {planView.unlearnedCount > 0 && <li><strong>待学习新词还有 {planView.unlearnedCount} 个</strong>{planView.skippedCount > 0 ? "（预估约 " + planView.predictedNeedLearn + " 个需要学习）" : ""}，每天 {dailyNewWords || 20} 个继续加油！</li>}
              {statsView.dueCount === 0 && ((statsView.statuses.uncertain||0) + (statsView.statuses.error||0)) === 0 && <li><strong>太棒了！</strong>今天的复习压力已清空，尽情探索新单词吧。</li>}
            </ul>
          </div>
          <div style={{marginTop:16,padding:"16px",background:C.redLight,border:"1px dashed "+C.red,borderRadius:10,textAlign:"center"}}>
            <div style={{fontWeight:700,fontSize:14,color:C.red,marginBottom:8}}>🚨 危险区域 (Danger Zone)</div>
            <div style={{fontSize:12,color:C.textSec,marginBottom:12,lineHeight:1.6}}>清空当前账号的所有学习进度、单词本、学生画像与积分，从零开始。<br/><strong>注意：此操作不可逆！</strong></div>
            <button onClick={handleFactoryReset} style={{...S.smallBtn,background:C.red,color:"#fff",border:"none",padding:"8px 16px",fontWeight:600}}>⚠️ 初始化（清除所有记录）</button>
          </div>
        </div>;
      })()}
      {error && <div style={S.error}>{error}</div>}
      {parseWordsFromInput(wordInput).length > 0 && <button style={S.bigBtn} onClick={() => startLearning(0)}>✨ 开始学习</button>}
      <Disclaimer />

      <div style={{ textAlign:"center", padding:"24px 0 8px", fontSize:13, lineHeight:1.8, color:C.textSec }}>
        <div>Made with ❤️ by Willow's 👨‍👧</div>
        <div style={{ fontStyle:"italic" }}>献给 Willow 和所有征战复杂单词的孩子们，加油！</div>
        <div style={{ marginTop:6, fontSize:12 }}>问题反馈：<a href="mailto:Winstonwu1996@icloud.com" style={{ color:C.accent, textDecoration:"none" }}>Winstonwu1996@icloud.com</a> ✉️</div>
        <div style={{ marginTop:4, fontSize:12, display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap", alignItems:"center" }}>
          <a href="https://buymeacoffee.com/winstonwu1996" target="_blank" rel="noreferrer" style={{ color:C.gold, textDecoration:"none", fontWeight:600 }}>☕ 请开发者喝杯咖啡</a>
          <button onClick={()=>setShowShare(true)} style={{ background:"transparent", border:"none", color:C.accent, fontFamily:FONT, fontSize:12, fontWeight:600, cursor:"pointer", padding:0 }}>🔗 推荐给朋友</button>
        </div>
        <div style={{ marginTop:4, fontSize:11, color:C.border }}>VocabSpark v3.1</div>
      </div>
      <PrivacyNotice />

      </div>

      {/* ── LOGIN MODAL (setup screen) ── */}
      {showLogin && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.55)",zIndex:1001,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>{ if(!loginLoading){setShowLogin(false);setLoginSent(false);setLoginEmail('');setOtpCode('');setOtpError('');window.scrollTo(0,0);} }}>
          <div style={{background:C.card,borderRadius:20,padding:"32px 24px",maxWidth:380,width:"100%",boxShadow:"0 20px 60px rgba(0,0,0,0.25)",fontFamily:FONT,animation:"fadeUp 0.25s ease-out"}} onClick={e=>e.stopPropagation()}>
            {!loginSent ? (
              <>
                <div style={{fontSize:36,textAlign:"center",marginBottom:8}}>🔑</div>
                <h3 style={{fontSize:19,fontWeight:700,textAlign:"center",margin:"0 0 4px"}}>登录 / 注册</h3>
                <p style={{fontSize:13,color:C.textSec,textAlign:"center",lineHeight:1.6,margin:"0 0 20px"}}>新用户输入邮箱即自动注册，老用户同一邮箱直接登录</p>
                <div style={{background:C.tealLight,borderRadius:10,padding:"12px 14px",marginBottom:20,fontSize:13,lineHeight:1.9,color:C.text}}>
                  ✅ 每日无限学习（未登录用户 {DAILY_LIMIT} 词/天）<br/>
                  ☁️ 进度云端同步，换设备不丢<br/>
                  📊 完整学习历史记录<br/>
                  <span style={{fontSize:12,color:C.textSec}}>推广期完全免费，无需付费</span>
                </div>
                <div style={{fontSize:13,fontWeight:600,marginBottom:6,color:C.text}}>邮箱地址</div>
                <input type="email" value={loginEmail} onChange={e=>setLoginEmail(e.target.value)} onKeyDown={e=>{ if(e.key==='Enter') handleLoginEmail(); }} placeholder="your@email.com" style={{width:"100%",padding:"10px 14px",borderRadius:10,border:"1.5px solid "+C.border,fontFamily:FONT,fontSize:14,outline:"none",marginBottom:12,boxSizing:"border-box"}} />
                <button style={{...S.primaryBtn,width:"100%",justifyContent:"center",opacity:loginLoading?0.6:1}} onClick={handleLoginEmail} disabled={loginLoading||!loginEmail.trim()}>{loginLoading ? "发送中..." : "✉️ 发送验证码"}</button>
                <div style={{fontSize:12,color:C.textSec,textAlign:"center",marginTop:12,lineHeight:1.6}}>无需密码 · 输入邮件中的 6 位验证码即可登录<br/>新老用户都用同一个邮箱，系统自动识别</div>
                <button style={{background:"transparent",border:"none",color:C.textSec,fontFamily:FONT,fontSize:13,cursor:"pointer",width:"100%",marginTop:12,padding:"4px 0"}} onClick={()=>{setShowLogin(false);setLoginEmail('');window.scrollTo(0,0);}}>暂时不用</button>
              </>
            ) : (
              <>
                <div style={{fontSize:48,textAlign:"center",marginBottom:12}}>📬</div>
                <h3 style={{fontSize:18,fontWeight:700,textAlign:"center",margin:"0 0 8px"}}>验证码已发送</h3>
                <p style={{fontSize:14,color:C.textSec,textAlign:"center",lineHeight:1.7,margin:"0 0 16px"}}>已发送 6 位验证码到 <strong>{loginEmail}</strong><br/>请查看邮箱（含垃圾邮件文件夹）</p>
                <input type="text" inputMode="numeric" maxLength={6} value={otpCode} onChange={function(e){ setOtpCode(e.target.value.replace(/[^0-9]/g,'')); setOtpError(''); }} onKeyDown={function(e){ if(e.key==='Enter') handleVerifyOtp(); }} placeholder="输入 6 位验证码" style={{width:"100%",padding:"14px 16px",borderRadius:10,border:"1.5px solid "+C.border,fontFamily:FONT,fontSize:22,fontWeight:700,textAlign:"center",letterSpacing:"0.3em",outline:"none",marginBottom:8,boxSizing:"border-box"}} autoFocus />
                {otpError && <div style={{fontSize:12,color:C.red,textAlign:"center",marginBottom:8}}>{otpError}</div>}
                <button style={{...S.primaryBtn,width:"100%",justifyContent:"center",opacity:loginLoading||otpCode.length<6?0.6:1}} onClick={handleVerifyOtp} disabled={loginLoading||otpCode.length<6}>{loginLoading ? "验证中..." : "✓ 验证登录"}</button>
                <div style={{background:C.bg,borderRadius:10,padding:"10px 14px",fontSize:12,color:C.textSec,marginTop:12,lineHeight:1.6,textAlign:"center"}}>没收到？请检查垃圾邮件文件夹<br/><button style={{background:"transparent",border:"none",color:C.accent,fontFamily:FONT,fontSize:12,fontWeight:600,cursor:"pointer",padding:0,marginTop:4}} onClick={function(){setLoginSent(false);setOtpCode('');setOtpError('');}}>← 重新发送</button></div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── SHARE MODAL (setup screen) ── */}
      {showShare && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.55)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>{setShowShare(false);window.scrollTo(0,0);}}>
          <div style={{background:C.card,borderRadius:20,padding:"28px 24px",maxWidth:380,width:"100%",boxShadow:"0 20px 60px rgba(0,0,0,0.25)",fontFamily:FONT,textAlign:"center",animation:"fadeUp 0.25s ease-out"}} onClick={e=>e.stopPropagation()}>
            <div style={{fontSize:36,marginBottom:6}}>📤</div>
            <h3 style={{fontSize:18,fontWeight:700,margin:"0 0 4px"}}>推荐给朋友</h3>
            <p style={{fontSize:13,color:C.textSec,lineHeight:1.6,margin:"0 0 18px"}}>觉得好用？让身边的华人朋友也试试~</p>
            <div style={{background:C.bg,borderRadius:12,padding:14,marginBottom:14,display:"inline-block"}}>
              <img src={"https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https%3A%2F%2Fvocabspark.vercel.app&bgcolor=faf7f2&color=2c2420&margin=6"} width={160} height={160} alt="QR Code" style={{display:"block",borderRadius:6}} />
            </div>
            <div style={{fontSize:12,color:C.textSec,marginBottom:16}}>📱 手机扫码 / 长按保存发朋友圈</div>
            <div style={{background:C.accentLight,borderRadius:10,padding:"10px 14px",marginBottom:16,fontSize:13,color:C.text,lineHeight:1.7,textAlign:"left"}}>{"发现一个免费 AI 英语词汇 App，专为华人孩子设计！AI 用孩子自己的生活场景讲单词，我家娃超喜欢 🎉\n👉 vocabspark.vercel.app"}</div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {typeof navigator !== "undefined" && navigator.share && (
                <button style={{...S.primaryBtn,width:"100%",justifyContent:"center"}} onClick={async()=>{ try { await navigator.share({ title:"VocabSpark — AI 英语词汇导师", text:"发现一个免费 AI 英语词汇 App，专为华人孩子设计！AI 用孩子自己的生活场景讲单词，我家娃超喜欢 🎉", url:"https://vocabspark.vercel.app" }); } catch(e){} }}>📱 分享到微信 / 其他 App</button>
              )}
              <button style={{...S.primaryBtn,width:"100%",justifyContent:"center",background:C.teal}} onClick={()=>{ navigator.clipboard?.writeText("发现一个免费 AI 英语词汇 App，专为华人孩子设计！AI 用孩子自己的生活场景讲单词，我家娃超喜欢 🎉 vocabspark.vercel.app").then(()=>alert("✅ 已复制！可以粘贴到微信/抖音/朋友圈")).catch(()=>alert("请手动复制上方链接")); }}>📋 复制邀请文案</button>
              <button style={{background:"transparent",border:"none",color:C.textSec,fontFamily:FONT,fontSize:13,cursor:"pointer",padding:"4px 0"}} onClick={()=>{setShowShare(false);window.scrollTo(0,0);}}>关闭</button>
            </div>
          </div>
        </div>
      )}

      {loginToast && (
        <div style={{position:"fixed",top:80,left:"50%",transform:"translateX(-50%)",zIndex:1200,background:C.green,color:"#fff",padding:"12px 28px",borderRadius:20,fontSize:15,fontWeight:700,boxShadow:"0 6px 24px rgba(0,0,0,0.2)",animation:"fadeUp 0.3s ease-out",whiteSpace:"nowrap"}}>
          {loginToast}
        </div>
      )}

      <style>{globalCSS}</style>
    </div>
  );}

  /* ═══ LEARNING SCREEN ═══ */
  return (
    <div style={S.root}>
      <Head>
        <title>VocabSpark — {currentWord || "学习中"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <div className="vs-desktop-container" style={S.container}>
      <div ref={topRef} />
      {/* Daily limit banner for guests */}
      {!user && todayCount > 0 && (
        <div onClick={() => setShowLogin(true)} style={{fontSize:12,textAlign:"center",padding:"5px 12px",cursor:"pointer",borderRadius:8,margin:"4px 0",background: todayCount>=DAILY_LIMIT ? C.redLight : todayCount>=7 ? C.goldLight : C.accentLight,color: todayCount>=DAILY_LIMIT ? C.red : todayCount>=7 ? C.gold : C.accent,fontFamily:FONT,fontWeight:600}}>
          {todayCount>=DAILY_LIMIT ? "非注册用户今日 "+DAILY_LIMIT+" 词已学完 · 注册后无限继续 →" : "今日已学 "+todayCount+" / "+DAILY_LIMIT+" 词（非注册用户上限）· 注册后无限学习 →"}
        </div>
      )}
      <div style={S.topBar}>
        <button style={S.backBtn} aria-label="返回主页" onClick={function(){ if (phase === "done" || confirm("确定要退出学习吗？进度已自动保存。")) setScreen("setup"); }}>←</button>
        <div style={S.progressWrap}>
          <div style={{...S.progressTrack, position:"relative", overflow:"visible"}}>
            <div style={{...S.progressFill, width: smoothLessonPct + "%", transition: "none"}} />
            {wordList.map(function(_,i) {
              if ((i+1) % 5 !== 0 || i+1 >= wordList.length) return null;
              var isCloze = (i+1) % 10 === 0;
              var pos = ((i+1) / wordList.length) * 100;
              return <div key={i} style={{position:"absolute",top:"50%",left:pos+"%",transform:"translate(-50%,-50%)",width:8,height:8,borderRadius:"50%",background:isCloze?C.teal:C.purple,border:"1.5px solid "+C.card,zIndex:1}} />;
            })}
          </div>
          <span style={S.progressText}><strong>{Math.min(idx+1,wordList.length)}</strong>/{wordList.length}</span>
        </div>
        <div style={S.xpBadge}>{"⚡"+stats.xp}</div>
        <button style={S.settingsBtn} onClick={() => setShowSettings(true)} title="设置" aria-label="打开设置">⚙️</button>
      </div>

      {/* ── SETTINGS MODAL ── */}
      {showSettings && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",zIndex:999,display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"60px 16px 16px",overflowY:"auto"}}>
          <div style={{background:C.card,borderRadius:16,width:"100%",maxWidth:600,boxShadow:"0 20px 60px rgba(0,0,0,0.2)",fontFamily:FONT}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 20px 0"}}>
              <h3 style={{fontSize:18,fontWeight:700,margin:0}}>⚙️ 设置</h3>
              <button onClick={() => { setShowSettings(false); window.scrollTo(0,0); }} style={{background:"transparent",border:"none",fontSize:22,cursor:"pointer",color:C.textSec,padding:"0 4px"}}>×</button>
            </div>
            <div style={{display:"flex",borderBottom:"1px solid "+C.border,margin:"16px 20px 0"}}>
              <button style={setupTab==="profile"?{...S.tab,...S.tabActive}:S.tab} onClick={() => setSetupTab("profile")}>👤 学生画像</button>
              <button style={setupTab==="plan"?{...S.tab,...S.tabActive}:S.tab} onClick={() => setSetupTab("plan")}>🎯 计划</button>
              <button style={setupTab==="words"?{...S.tab,...S.tabActive}:S.tab} onClick={() => setSetupTab("words")}>📝 词汇</button>
              <button style={setupTab==="stats"?{...S.tab,...S.tabActive}:S.tab} onClick={() => setSetupTab("stats")}>📊 统计</button>
              <button style={setupTab==="account"?{...S.tab,...S.tabActive}:S.tab} onClick={() => setSetupTab("account")}>🔑 账号</button>
            </div>
            <div style={{padding:"16px 20px 20px"}}>
              {setupTab === "profile" && (
                <div>
                  <div style={S.setupHint}>{profileLocked ? "✅ 画像已保存" : "🌟 像写日记一样告诉 AI 你的世界，信息越真实越有趣！"}</div>
                  {profileLocked ? (
                    <div><div style={S.profilePrev}>{profile.slice(0,250)}{profile.length>250?"...":""}</div><button style={S.smallBtn} onClick={() => setProfileLocked(false)}>✏️ 编辑</button></div>
                  ) : (
                    <div>
                      <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:8}}>
                        {["💬 今天最开心的事","🎬 最近追的剧","📍 上周末去了哪里","😋 最近想吃什么","🎵 最近单曲循环"].map(function(p) {
                          return <button key={p} onClick={function() { setProfile(function(prev) { return prev + (prev && !prev.endsWith('\n') ? '\n' : '') + p + '：'; }); }} style={{background:C.accentLight,border:"1px solid "+C.accent+"44",borderRadius:20,padding:"3px 10px",fontSize:11,color:C.accent,cursor:"pointer",fontFamily:FONT}}>{p}</button>;
                        })}
                      </div>
                      <textarea style={S.textarea} value={profile} onChange={e => setProfile(e.target.value)} rows={8} placeholder={PROFILE_TEXTAREA_PLACEHOLDER} />
                      <div style={{display:"flex",justifyContent:"flex-end",fontSize:11,marginTop:3,marginBottom:4,color:profile.length>PROFILE_MAX?C.red:profile.length>800?C.gold:C.textSec}}>
                        {profile.length} / {PROFILE_MAX} 字{profile.length>PROFILE_MAX?" · 超出上限":profile.length>800?" · 建议精简":""}
                      </div>
                      <div style={{display:"flex",alignItems:"flex-start",gap:10,margin:"6px 0 10px"}}>
                        <button onClick={function() { photoRef.current?.click(); }} disabled={photoLoading} style={{background:C.tealLight,border:"1px solid "+C.teal+"55",borderRadius:8,padding:"7px 12px",fontSize:12,color:C.teal,cursor:photoLoading?"not-allowed":"pointer",fontFamily:FONT,fontWeight:600,opacity:photoLoading?0.7:1,flexShrink:0,whiteSpace:"nowrap"}}>
                          {photoLoading ? "🔍 AI 正在读图..." : user ? "📷 照片日记（" + Math.max(0, PHOTO_LIMIT - (profile.match(/📷 /g)||[]).length) + "/" + PHOTO_LIMIT + "）" : "📷 照片日记（需注册）"}
                        </button>
                        <span style={{fontSize:11,color:C.textSec,lineHeight:1.5,flex:1,minWidth:0}}>懒得逐字写？选几张这几天有意思的照片也行，AI 会解析画面并写入画像，用来生成后面的课件与例句。</span>
                        <input ref={photoRef} type="file" accept="image/*" style={{display:"none"}} onChange={handlePhotoUpload} />
                      </div>
                      <button style={{...S.tealBtn,opacity:profile.length>PROFILE_MAX?0.45:1,cursor:profile.length>PROFILE_MAX?"not-allowed":"pointer"}} disabled={profile.length>PROFILE_MAX} onClick={() => { setProfileLocked(true); loadSave().then(d => doSave({...(d||{}), profile, stats})); }}>💾 保存</button>
                    </div>
                  )}
                </div>
              )}
              {setupTab === "plan" && (() => {
                var _pv = getStudyPlanPrediction();
                var _needLearn = _pv.predictedNeedLearn;
                var _ed = _needLearn > 0 ? Math.ceil(_needLearn / (dailyNewWords || 20)) : 0;
                return <div>
                  <div style={S.setupHint}>控制学习节奏，系统自动安排每日任务。</div>
                  <div style={{marginBottom:12}}>
                    <div style={{fontWeight:700,fontSize:13,marginBottom:6}}>每天学几个新词？</div>
                    <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                      {[5,10,15,20,25,30].map(function(n){ return <button key={n} onClick={function(){updateDailyNewWords(n);}} style={dailyNewWords===n ? {...S.ghostBtn, background:C.accent, color:"#fff", borderColor:C.accent, padding:"6px 12px"} : {...S.ghostBtn, padding:"6px 12px"}}>{n}</button>; })}
                    </div>
                    {_needLearn > 0 && <div style={{fontSize:11,color:C.teal,marginTop:6}}>预估还需学习约 {_needLearn} 词{_pv.skippedCount > 0 ? "（基于快筛推算）" : ""}，按此速度约 {_ed} 天完成</div>}
                  </div>
                  <div style={{marginBottom:12}}>
                    <div style={{fontWeight:700,fontSize:13,marginBottom:6}}>每日深度攻克上限</div>
                    <div style={{display:"flex",alignItems:"center",gap:8}}>
                      <input type="number" min={1} max={30} value={deepReviewDailyCap} onChange={function(e){updateDeepReviewDailyCap(e.target.value);}} style={{width:80,padding:"8px 10px",border:"1px solid "+C.border,borderRadius:8,fontFamily:FONT,fontSize:13}} />
                      <span style={{fontSize:12,color:C.textSec}}>个/天</span>
                    </div>
                    <div style={{fontSize:11,color:C.textSec,marginTop:4}}>💡 强化易错词复习，建议 5~10 个/天</div>
                  </div>
                  <button style={{...S.primaryBtn,background:C.teal}} onClick={function(){ setShowSettings(false); setScreen("setup"); setSetupTab("plan"); }}>查看完整计划 →</button>
                </div>;
              })()}
              {setupTab === "words" && (
                <div>
                  <div style={S.setupHint}>学习中如需做标记/复习，建议进入「词汇状态面板」。修改词表后可重新开始。</div>

                  <div style={{marginBottom:16}}>
                    <div style={{fontWeight:700,fontSize:14,marginBottom:8}}>📅 每日新词数</div>
                    <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
                      {[10,15,20,25,30,50].map(n => (
                        <button key={n} onClick={()=>updateDailyNewWords(n)} style={dailyNewWords===n ? {...S.ghostBtn, background:C.accent, color:"#fff", borderColor:C.accent, padding:"8px 14px"} : {...S.ghostBtn, padding:"8px 14px"}}>{n}</button>
                      ))}
                    </div>
                  </div>

                  <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:12}}>
                    <button style={{...S.primaryBtn,background:C.teal}} onClick={() => { setShowSettings(false); setScreen("setup"); setSetupTab("words"); }}>🧭 打开词汇状态面板</button>
                    <button style={S.ghostBtn} onClick={() => { setShowSettings(false); startQuickReview("all"); }}>🔄 快速复习</button>
                    <button style={{...S.ghostBtn,borderColor:C.red,color:C.red}} onClick={() => { setShowSettings(false); startDeepReview(); }}>🔴 重点攻克</button>
                  </div>

                  <div style={S.presetRow}>{Object.keys(PRESETS).map(n => <button key={n} style={S.presetBtn} onClick={() => setWordInput(PRESETS[n])}>{n}</button>)}</div>
                  <textarea style={S.textarea} value={wordInput} onChange={e => setWordInput(e.target.value)} rows={8} placeholder="arduous\nbenevolent" />
                  <div style={{fontSize:13,color:C.textSec,margin:"6px 0 12px"}}>{wordInput.trim() ? "共 "+wordInput.trim().split(/[\n,，、]+/).filter(w=>w.trim()).length+" 个词" : ""}</div>
                  <button style={S.primaryBtn} onClick={() => { setShowSettings(false); startLearning(0); }}>✨ 重新开始</button>
                </div>
              )}
              {setupTab === "stats" && (() => {
                var sv = getStatsSnapshot();
                var pv = getStudyPlanPrediction();
                var ph = getPhaseExecutionSnapshot();
                return <div>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:10,marginBottom:12}}>
                    <div style={S.statCard}><div style={S.statNum}>{sv.accuracy}%</div><div style={S.statLabel}>正确率</div></div>
                    <div style={S.statCard}><div style={S.statNum}>{sv.dueCount}</div><div style={S.statLabel}>到期词</div></div>
                    <div style={S.statCard}><div style={S.statNum}>{sv.quickReviews}</div><div style={S.statLabel}>快速复习</div></div>
                    <div style={S.statCard}><div style={S.statNum}>{sv.deepReviews}</div><div style={S.statLabel}>深度复习</div></div>
                    <div style={S.statCard}><div style={S.statNum}>{pv.skippedCount}</div><div style={S.statLabel}>快筛跳过</div></div>
                    <div style={S.statCard}><div style={S.statNum}>{pv.unlearnedCount}</div><div style={S.statLabel}>待学习词数</div></div>
                  </div>
                  <div style={{fontSize:12,color:C.textSec,marginBottom:10}}>阶段概览：P0 {ph.P0?"✅":"⏳"} · P1 {ph.P1?"✅":"⏳"} · P2 {ph.P2?"✅":"⏳"}</div>
                  <button style={{...S.primaryBtn,background:C.teal}} onClick={() => { setShowSettings(false); setScreen("setup"); setSetupTab("stats"); }}>打开完整统计页</button>
                </div>;
              })()}
              {setupTab === "account" && (
                <div>
                  {user ? (
                    <div>
                      <div style={{background:C.tealLight,border:"1px solid "+C.teal,borderRadius:12,padding:"16px 18px",marginBottom:16}}>
                        <div style={{fontWeight:700,fontSize:15,marginBottom:4,color:C.teal}}>✅ 已登录</div>
                        <div style={{fontSize:13,color:C.textSec,marginBottom:12}}>{user.email}</div>
                        <div style={{fontSize:13,color:C.text,lineHeight:1.9}}>
                          🎉 <strong>推广期</strong> · 每日无限学习<br/>
                          ☁️ 学习进度自动云端同步<br/>
                          📱 跨设备继续学习
                        </div>
                      </div>
                      <button style={{...S.primaryBtn,background:C.textSec}} onClick={handleLogout}>退出登录</button>
                    </div>
                  ) : (
                    <div>
                      <div style={{background:C.goldLight,border:"1px solid "+C.gold,borderRadius:12,padding:"16px 18px",marginBottom:16}}>
                        <div style={{fontWeight:700,fontSize:15,marginBottom:4}}>🎁 推广期福利</div>
                        <div style={{fontSize:13,color:C.text,lineHeight:1.9,marginBottom:12}}>
                          注册账号，现在完全免费：<br/>
                          ✅ 每日<strong>无限</strong>学习（免费版每日 {DAILY_LIMIT} 词）<br/>
                          ☁️ 学习进度云端同步，换手机不丢<br/>
                          📊 完整学习历史记录
                        </div>
                        <div style={{background:C.bg,borderRadius:8,padding:"8px 12px",fontSize:13,color:C.textSec}}>
                          非注册用户每日上限 {DAILY_LIMIT} 词，今日已学 {todayCount} 词
                        </div>
                      </div>
                      <button style={S.primaryBtn} onClick={() => { setShowSettings(false); setShowLogin(true); }}>登录 / 注册</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {streakToast && (
        <div style={{position:"fixed",top:80,left:"50%",transform:"translateX(-50%)",zIndex:1100,background:"linear-gradient(135deg, "+C.gold+" 0%, "+C.accent+" 100%)",color:"#fff",padding:"10px 24px",borderRadius:20,fontSize:15,fontWeight:800,boxShadow:"0 6px 24px rgba(0,0,0,0.2)",animation:"fadeUp 0.3s ease-out",whiteSpace:"nowrap"}}>
          🔥 {streakToast}
        </div>
      )}

      {loginToast && (
        <div style={{position:"fixed",top:80,left:"50%",transform:"translateX(-50%)",zIndex:1200,background:C.green,color:"#fff",padding:"12px 28px",borderRadius:20,fontSize:15,fontWeight:700,boxShadow:"0 6px 24px rgba(0,0,0,0.2)",animation:"fadeUp 0.3s ease-out",whiteSpace:"nowrap"}}>
          {loginToast}
        </div>
      )}

      {phase !== "review" && phase !== "done" && phase !== "batch_loading" && phase !== "cloze" && phase !== "speed_wait" && (
        <div style={{...S.wordHeader, boxShadow: stats.streak >= 5 ? "0 0 0 2px "+C.gold+", 0 0 18px "+C.gold+"55" : C.shadow, border: stats.streak >= 5 ? "1px solid "+C.gold : "1px solid "+C.border, animation: stats.streak >= 5 ? "glowPulse 2s ease-in-out infinite" : "fadeUp 0.3s ease-out"}}>
          <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
            <h2 style={S.wordTitle}>{currentWord}</h2>
            {phonetic && <span style={S.phoneticText}>{phonetic}</span>}
            <SpeakWordBtn text={currentWord} size={38} />
          </div>
          {stats.streak > 0 && <div style={S.streakBadge}>{stats.streak >= 5 ? "🔥×"+stats.streak : "🔥 "+stats.streak}</div>}
        </div>
      )}

      {error && <div style={S.error}>{error}<button onClick={() => {setError("");loadBatch(idx, learned, undefined, { streaming: true }).then(function() { applyWordData(currentWord); });}} style={S.retryBtn}>🔄 重试</button></div>}

      {phase === "batch_loading" && (
        <div style={{...S.card, textAlign:"center", padding:"40px 24px"}}>
          <BrandSparkIcon size={48} marginBottom={16} />
          <h3 style={{fontSize:18, fontWeight:700, margin:"0 0 8px"}}>正在准备第 {batchGroupNo} 组学习内容</h3>
          {Math.floor(idx / 5) === 0 && (
            <p style={{fontSize:13, color:C.textSec, margin:"0 0 12px", lineHeight:1.65, padding:"10px 14px", background:C.tealLight, borderRadius:10, border:"1px solid rgba(42,122,110,0.12)"}}>
              💡 首次加载会稍慢一些，AI 正在根据学生画像量身定制内容，请耐心稍等片刻～
            </p>
          )}
          <div style={{display:"flex",flexWrap:"wrap",gap:6,justifyContent:"center",margin:"8px 0 16px"}}>
            {wordList.slice(idx, Math.min(idx+5, wordList.length)).map(function(w, i) {
              var loaded = dataCache.current[w] && (dataCache.current[w].guess || dataCache.current[w].teach);
              return <span key={w} style={{padding:"4px 12px",borderRadius:20,fontSize:12,fontWeight:600,border:"1px solid "+(loaded?C.green:C.border),background:loaded?C.greenLight:C.bg,color:loaded?C.green:C.textSec,transition:"all 0.3s ease"}}>{loaded?"✓ ":""}{w}</span>;
            })}
          </div>
          <p style={{fontSize:14, color:C.textSec, marginBottom:20, lineHeight:1.6}}>{batchTip}</p>
          <div style={{background:C.border, borderRadius:8, height:12, overflow:"hidden", marginBottom:12}}>
            <div style={{height:"100%", background:"linear-gradient(90deg, "+C.accent+", "+C.gold+")", borderRadius:8, transition:"none", width: batchUiPct + "%"}} />
          </div>
          <div style={{fontSize:13, color:C.textSec}}>{Math.min(100, Math.round(batchUiPct))}%</div>
        </div>
      )}

      {phase === "speed_wait" && (
        <div style={{...S.card, textAlign:"center", padding:"34px 24px"}}>
          <div style={{fontSize:36,marginBottom:8,animation:"bounce 1s ease-in-out infinite"}}>{speedWaitSec < 3 ? "⚡" : speedWaitSec < 6 ? "🚀" : "🔧"}</div>
          <div style={S.tag}>⚡ 你太厉害了</div>
          <p style={{fontSize:14, color:C.textSec, marginBottom:14, lineHeight:1.7}}>
            你的学习速度比 AI 定制内容还快，正在补齐下一词，请稍等一下下哦～
          </p>
          {wordList[idx+1] && <div style={{fontSize:16,fontWeight:700,color:C.accent,marginBottom:12}}>下一个词：{wordList[idx+1]}</div>}
          <div style={{background:C.border, borderRadius:999, height:10, overflow:"hidden", marginBottom:10}}>
            <div style={{height:"100%", width: (((speedWaitSec % 6) + 1) * 16) + "%", background:"linear-gradient(90deg, "+C.teal+", "+C.accent+")", borderRadius:999, transition:"width 0.42s ease"}} />
          </div>
          <div style={{fontSize:12, color:C.textSec}}>已等待 {speedWaitSec}s，马上进入</div>
          {speedWaitSec >= 5 && <button style={{...S.ghostBtn, marginTop:12, fontSize:13}} onClick={function() { speedWaitAbortRef.current = true; }}>🔄 重新加载此词</button>}
        </div>
      )}

      {phase === "guess" && (
        <div style={{...S.card, animation: shakeWrong ? "shake 0.4s ease" : bounceCorrect ? "bounce 0.5s ease" : phaseDir===1 ? "slideInRight 0.28s ease-out" : "fadeUp 0.3s ease-out"}}>
          <div style={S.tag}>🎯 猜一猜</div>
          {!guessData ? <div style={{padding:"8px 0"}}>
            <div style={{background:C.border,borderRadius:8,height:60,marginBottom:12,animation:"skeletonPulse 1.2s ease-in-out infinite"}}/>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {[1,2,3,4].map(function(k){ return <div key={k} style={{background:C.border,borderRadius:8,height:38,animation:"skeletonPulse 1.2s ease-in-out infinite",animationDelay:k*0.1+"s"}}/>; })}
            </div>
            <div style={{textAlign:"center",marginTop:14,fontSize:13,color:C.textSec}}>{loadingTip||"🧠 AI 老师正在备课..."}</div>
            <div style={{textAlign:"center",fontSize:12,color:C.textSec,marginTop:4}}>正在为你生成专属学习内容，首次会稍慢，之后越来越快 ✨</div>
          </div> : <>
            <div style={S.contextBox}>
              <span style={{flex:1,lineHeight:1.8}}>
                {guessData.context.replace(/_+/g, "\x00").split("\x00").map(function(seg, i, arr) {
                  if (i === arr.length - 1) return <span key={i}>{seg}</span>;
                  var isCorrect = selectedOption === guessData.answer;
                  return [
                    <span key={"t"+i}>{seg}</span>,
                    guessSubmitted
                      ? <span key={"f"+i} style={{fontWeight:700, color: isCorrect ? C.green : C.red, display:"inline-block", animation:"fillIn 0.4s ease-out", padding:"0 2px", borderRadius:4, background: isCorrect ? C.greenLight : C.redLight}}>{guessData.answer}</span>
                      : <span key={"b"+i} style={{letterSpacing:3, color:C.textSec, fontWeight:700}}>___</span>
                  ];
                })}
              </span>
              <SpeakBtn text={guessData.context.replace(/_+/g, currentWord)} size={26} />
            </div>
            {guessData.options ? <div style={S.optionGrid}>{Object.entries(guessData.options).map(([k,v]) => {
              var sel=selectedOption===k, ok=guessSubmitted&&k===guessData.answer, bad=guessSubmitted&&sel&&k!==guessData.answer;
              var bg=C.bg, bdr=C.border, clr=C.text;
              if(ok){bg=C.greenLight;bdr=C.green;clr=C.green;} else if(bad){bg=C.redLight;bdr=C.red;clr=C.red;} else if(sel){bg=C.accentLight;bdr=C.accent;clr=C.accent;}
              var shadow = ok ? "0 0 0 2px "+C.green+"33" : bad ? "0 0 0 2px "+C.red+"33" : sel ? "0 0 0 2px "+C.accent+"33" : "none";
              return <button key={k} disabled={guessSubmitted} style={{...S.optionBtn,background:bg,borderColor:bdr,color:clr,boxShadow:shadow}} onClick={()=>setSelectedOption(k)}><span style={S.optionKey}>{k}</span>{v}{ok?" ✓":""}{bad?" ✗":""}</button>;
            })}</div> : guessData._failed ? <div style={{textAlign:"center",padding:"12px 0"}}><div style={{fontSize:14,color:C.red,marginBottom:12}}>猜题加载失败</div><button style={S.primaryBtn} onClick={function(){setGuessData(null);callWithClientRetry(function(){return callAPIFast(sysP,buildGuessPrompt(currentWord,learned));}).then(function(raw){var parsed=tryJSON(raw);if(parsed?.context&&parsed?.options){dataCache.current[currentWord].guess=parsed;dataCache.current[currentWord].guessFailed=false;setGuessData(parsed);}else{setGuessData({context:"格式异常",options:null});}}).catch(function(){setGuessData({context:"内容加载失败",options:null,_failed:true});});}}>重试</button><button style={{...S.ghostBtn,marginLeft:8}} onClick={skipGuess}>直接学习 →</button></div> : <div style={{fontSize:14,color:C.textSec,marginBottom:14}}>选项异常，请跳过</div>}
            {!guessSubmitted && guessData.hint && <button style={S.hintBtn} onClick={()=>setShowHint(true)}>{showHint?"💡 "+guessData.hint:"💡 提示"}</button>}
            {guessSubmitted && <div style={{...S.resultBanner, background:selectedOption===guessData.answer?C.greenLight:C.goldLight, borderColor:selectedOption===guessData.answer?C.green:C.gold}}>{selectedOption===guessData.answer?"🎉 猜对了！+15 XP":"😯 正确答案："+guessData.answer+"—"+guessData.options[guessData.answer]}<div style={{fontSize:13,marginTop:4,color:C.textSec}}>✨ 即将进入学习...</div></div>}
            {!guessSubmitted && <div style={S.btnRow}>
              {guessData.options && <button style={S.primaryBtn} onClick={submitGuess} disabled={!selectedOption||loading}>提交 →</button>}
              <button style={guessData.options?S.ghostBtn:S.primaryBtn} onClick={skipGuess} disabled={loading}>{guessData.options?"跳过":"→ 直接学习"}</button>
            </div>}
          </>}
        </div>
      )}

      {phase === "teach" && <div style={{...S.card, animation: phaseDir===1 ? "slideInRight 0.28s ease-out" : "fadeUp 0.3s ease-out"}}>
        <div style={{...S.tag,background:C.tealLight,color:C.teal}}>📖 学习笔记</div>
        {teachContent === "__FAILED__" ? <div style={{textAlign:"center",padding:"20px 0"}}><div style={{fontSize:14,color:C.red,marginBottom:12}}>讲解内容加载失败</div><button style={S.primaryBtn} onClick={function(){setTeachContent("");callWithClientRetry(function(){return callAPI(sysP,buildTeachPrompt(currentWord,learned));}).then(function(raw){var content=raw?addSpeakMarkers(raw):null;if(content){dataCache.current[currentWord].teach=content;dataCache.current[currentWord].teachFailed=false;setTeachContent(content);}else{setTeachContent("__FAILED__");}}).catch(function(){setTeachContent("__FAILED__");});}}>重试</button><button style={{...S.ghostBtn,marginLeft:8}} onClick={function(){if(spectrumData){setPhaseDir(1);setPhase("spectrum");}else goNextWord();}}>跳过此词 →</button></div>
        : !teachContent ? <div style={{padding:"8px 0"}}>
          <div style={{background:C.border,borderRadius:8,height:20,width:"70%",marginBottom:10,animation:"skeletonPulse 1.2s ease-in-out infinite"}}/>
          <div style={{background:C.border,borderRadius:8,height:14,width:"100%",marginBottom:8,animation:"skeletonPulse 1.2s ease-in-out infinite",animationDelay:"0.1s"}}/>
          <div style={{background:C.border,borderRadius:8,height:14,width:"90%",marginBottom:8,animation:"skeletonPulse 1.2s ease-in-out infinite",animationDelay:"0.2s"}}/>
          <div style={{background:C.border,borderRadius:8,height:14,width:"95%",marginBottom:8,animation:"skeletonPulse 1.2s ease-in-out infinite",animationDelay:"0.3s"}}/>
          <div style={{background:C.border,borderRadius:8,height:14,width:"60%",marginBottom:12,animation:"skeletonPulse 1.2s ease-in-out infinite",animationDelay:"0.4s"}}/>
          <div style={{textAlign:"center",fontSize:13,color:C.textSec,marginTop:8}}>{loadingTip||"📖 正在用你的生活场景编写专属讲解..."}</div>
        </div> : <>
          <div style={{marginBottom:20}}><Md text={teachContent} /></div>
          <button style={S.primaryBtn} onClick={teachToSpectrum} disabled={loading}>{spectrumData?"🎮 词义光谱挑战 →":"→ 下一个词"}</button>
        </>}
      </div>}

      {phase === "spectrum" && spectrumData && <div style={{...S.specCard, animation: phaseDir===1 ? "slideInRight 0.28s ease-out" : "fadeUp 0.3s ease-out"}}>
        <div style={S.specTag}>🎮 词义光谱挑战</div>
        <div style={S.specHint}>按程度【从弱到强】排列！</div>
        {spectrumData.scenario && <div style={S.specScenario}>{spectrumData.scenario}</div>}
        <div style={S.specSlotRow}>{specSlots.map((w,i) => {
          var labels=["较弱 →","中等 →","最强 ★"];
          var bc=specStatus==="success"?C.darkGreen:specStatus==="error"?C.red:C.darkBorder;
          var bgc=specStatus==="success"?C.darkGreen+"22":specStatus==="error"?C.red+"22":C.dark;
          return <div key={i} onClick={()=>returnFromSlot(w,i)} style={{...S.specSlot,borderColor:bc,background:bgc,cursor:w&&specStatus!=="success"?"pointer":"default"}}>{w||<span style={{color:C.darkBorder,fontSize:12}}>{labels[i]}</span>}</div>;
        })}</div>
        {specStatus!=="success" && <div style={S.specPoolRow}>{specPool.map(w => <button key={w} onClick={()=>moveToSlot(w)} style={S.specPoolBtn}>{w}</button>)}</div>}
        {specSlots.every(s=>s!==null) && specStatus==="idle" && <button onClick={checkSpectrum} style={S.specCheckBtn}>[ 验证排序 ]</button>}
        {specStatus==="error" && <div style={{color:C.red,textAlign:"center",padding:10,fontWeight:700,animation:"shake 0.4s ease"}}>⚠️ 再试一次！</div>}
        {specStatus==="success" && <div style={S.specDecoded}>
          <div style={{color:C.darkGreen,fontWeight:700,marginBottom:8}}>✓ 正确！+10 XP</div>
          <div style={{lineHeight:1.7,fontSize:14}}>{spectrumData.decoded}</div>
          <button onClick={goNextWord} disabled={loading} style={{...S.specCheckBtn,marginTop:16,background:C.darkGreen}}>
            {idx+1>=wordList.length&&(learned.length+1)%5!==0?"🎉 完成！":(learned.length+1)%10===0?"📝 阅读填空挑战":(learned.length+1)%5===0?"🏆 复习关卡":"→ "+wordList[idx+1]}
          </button>
        </div>}
      </div>}

      {phase === "review" && <div style={{...S.card, animation:"slideInRight 0.28s ease-out"}}>
        <div style={{...S.tag,background:C.purpleLight,color:C.purple}}>🏆 复习关卡</div>
        {!reviewData?.questions ? <div style={{padding:"8px 0"}}>
          <div style={{background:C.border,borderRadius:8,height:18,width:"55%",marginBottom:10,animation:"skeletonPulse 1.2s ease-in-out infinite"}}/>
          <div style={{background:C.border,borderRadius:8,height:14,width:"80%",marginBottom:12,animation:"skeletonPulse 1.2s ease-in-out infinite",animationDelay:"0.1s"}}/>
          {[1,2,3].map(function(k){ return <div key={k} style={{marginBottom:12}}><div style={{background:C.border,borderRadius:8,height:14,width:"90%",marginBottom:6,animation:"skeletonPulse 1.2s ease-in-out infinite",animationDelay:k*0.1+"s"}}/><div style={{display:"flex",gap:8}}>{[1,2,3].map(function(j){return <div key={j} style={{background:C.border,borderRadius:8,height:32,flex:1,animation:"skeletonPulse 1.2s ease-in-out infinite",animationDelay:(k*0.1+j*0.05)+"s"}}/>;})}</div></div>; })}
          <div style={{textAlign:"center",fontSize:13,color:C.textSec,marginTop:8}}>{loadingTip||"🎮 设计互动复习挑战中..."}</div>
        </div> : <>
          <div style={{fontWeight:600,fontSize:17,marginBottom:4}}>{reviewData.title}</div>
          <div style={{color:C.textSec,fontSize:14,marginBottom:16}}>{reviewData.intro}</div>
          {reviewData.questions.map((q,qi) => {
            var ans=reviewAnswers[q.id], ok=reviewSubmitted&&ans===q.answer, bad=reviewSubmitted&&ans&&ans!==q.answer;
            return <div key={q.id} style={S.reviewQ}>
              <div style={{fontWeight:600,fontSize:14,marginBottom:8,lineHeight:1.7}}>{(qi+1)+". "+q.sentence}</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:4}}>{q.options.map(opt => {
                var s=ans===opt, o=reviewSubmitted&&opt===q.answer, b=reviewSubmitted&&s&&opt!==q.answer;
                var bg=C.bg,bd=C.border,cl=C.text; if(o){bg=C.greenLight;bd=C.green;cl=C.green;}else if(b){bg=C.redLight;bd=C.red;cl=C.red;}else if(s){bg=C.accentLight;bd=C.accent;cl=C.accent;}
                return <button key={opt} disabled={reviewSubmitted} style={{...S.reviewOpt,background:bg,borderColor:bd,color:cl}} onClick={()=>setReviewAnswers(a=>({...a,[q.id]:opt}))}>{opt}{o?" ✓":""}{b?" ✗":""}</button>;
              })}</div>
              {reviewSubmitted&&bad&&<div style={{fontSize:13,color:C.teal,marginTop:4}}>{"✅ "+q.answer+" — "+q.explanation}</div>}
              {reviewSubmitted&&ok&&<div style={{fontSize:13,color:C.green,marginTop:4}}>{"✓ "+q.explanation}</div>}
            </div>;
          })}
          {!reviewSubmitted ? <button style={S.primaryBtn} onClick={submitReview} disabled={Object.keys(reviewAnswers).length<reviewData.questions.length}>✓ 提交</button>
          : (() => { var rc=reviewData.questions.filter(q=>reviewAnswers[q.id]===q.answer).length, rt=reviewData.questions.length, rpct=Math.round(rc/rt*100); return <div>
            <div style={{...S.reviewScore,animation:"fadeUp 0.3s ease-out"}}>
              <div style={{fontSize:28,marginBottom:4}}>{rpct>=80?"🌟":rpct>=50?"👍":"💪"}</div>
              {"得分："+rc+"/"+rt+" ("+rpct+"%) · +"+rc*10+" XP"}
            </div>
            <button style={S.primaryBtn} onClick={afterReview}>{idx+1>=wordList.length?"🎉 完成！":"→ "+wordList[idx+1]}</button></div>; })()}
        </>}
      </div>}

      {phase === "cloze" && <div style={{...S.card, animation:"slideInRight 0.28s ease-out"}}>
        <div style={{...S.tag,background:C.goldLight,color:C.gold}}>📝 阅读填空挑战</div>
        {!clozeData?.questions ? <div style={{padding:"8px 0"}}>
          <div style={{background:C.border,borderRadius:8,height:18,width:"50%",marginBottom:10,animation:"skeletonPulse 1.2s ease-in-out infinite"}}/>
          <div style={{background:C.border,borderRadius:8,height:80,width:"100%",marginBottom:12,animation:"skeletonPulse 1.2s ease-in-out infinite",animationDelay:"0.15s"}}/>
          {[1,2].map(function(k){ return <div key={k} style={{marginBottom:10}}><div style={{background:C.border,borderRadius:8,height:14,width:"85%",marginBottom:6,animation:"skeletonPulse 1.2s ease-in-out infinite",animationDelay:k*0.12+"s"}}/><div style={{display:"flex",gap:8}}>{[1,2,3].map(function(j){return <div key={j} style={{background:C.border,borderRadius:8,height:32,flex:1,animation:"skeletonPulse 1.2s ease-in-out infinite",animationDelay:(k*0.1+j*0.05)+"s"}}/>;})}</div></div>; })}
          <div style={{textAlign:"center",fontSize:13,color:C.textSec,marginTop:8}}>{loadingTip||"📝 正在生成阅读理解短文..."}</div>
        </div> : <>
          <div style={{fontWeight:600,fontSize:17,marginBottom:8}}>{clozeData.title}</div>
          <div style={{background:C.bg,borderRadius:10,padding:"16px 18px",marginBottom:20,borderLeft:"3px solid "+C.gold,fontSize:15,lineHeight:2}}>
            {clozeData.passage}
          </div>
          {clozeData.questions.map((q,qi) => {
            var ans=clozeAnswers[q.id], ok=clozeSubmitted&&ans===q.answer, bad=clozeSubmitted&&ans&&ans!==q.answer;
            return <div key={q.id} style={S.reviewQ}>
              <div style={{fontWeight:600,fontSize:14,marginBottom:8}}>{q.blank}</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:4}}>{q.options.map(opt => {
                var s=ans===opt, o=clozeSubmitted&&opt===q.answer, b=clozeSubmitted&&s&&opt!==q.answer;
                var bg=C.bg,bd=C.border,cl=C.text; if(o){bg=C.greenLight;bd=C.green;cl=C.green;}else if(b){bg=C.redLight;bd=C.red;cl=C.red;}else if(s){bg=C.accentLight;bd=C.accent;cl=C.accent;}
                return <button key={opt} disabled={clozeSubmitted} style={{...S.reviewOpt,background:bg,borderColor:bd,color:cl}} onClick={()=>setClozeAnswers(a=>({...a,[q.id]:opt}))}>{opt}{o?" ✓":""}{b?" ✗":""}</button>;
              })}</div>
              {clozeSubmitted&&bad&&<div style={{fontSize:13,color:C.teal,marginTop:4}}>{"✅ "+q.answer+" — "+q.explanation}</div>}
              {clozeSubmitted&&ok&&<div style={{fontSize:13,color:C.green,marginTop:4}}>{"✓ "+q.explanation}</div>}
            </div>;
          })}
          {!clozeSubmitted ? <button style={S.primaryBtn} onClick={submitCloze} disabled={Object.keys(clozeAnswers).length<clozeData.questions.length}>✓ 提交</button>
          : (() => { var cc=clozeData.questions.filter(q=>clozeAnswers[q.id]===q.answer).length, ct=clozeData.questions.length, cpct=Math.round(cc/ct*100); return <div>
            <div style={{...S.reviewScore,animation:"fadeUp 0.3s ease-out"}}>
              <div style={{fontSize:28,marginBottom:4}}>{cpct>=80?"🌟":cpct>=50?"👍":"💪"}</div>
              {"得分："+cc+"/"+ct+" ("+cpct+"%) · +"+cc*15+" XP"}
            </div>
            <button style={S.primaryBtn} onClick={afterCloze}>{idx+1>=wordList.length?"🎉 完成！":"→ 继续学习"}</button></div>; })()}
        </>}
      </div>}

      {showTipJar && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",zIndex:999,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
          <div style={{background:C.card,borderRadius:16,padding:"32px 24px",maxWidth:420,width:"100%",boxShadow:"0 20px 60px rgba(0,0,0,0.2)",textAlign:"center",fontFamily:FONT}}>
            <div style={{fontSize:48,marginBottom:8}}>☕</div>
            <h3 style={{fontSize:20,fontWeight:700,margin:"0 0 8px"}}>喜欢 VocabSpark 吗？</h3>
            <p style={{fontSize:14,color:C.textSec,lineHeight:1.7,margin:"0 0 20px"}}>这个工具由一位中国爸爸开发，希望帮助所有努力学习英语的孩子们。持续开发和 AI 运行都有成本，你的支持是最大的动力！</p>
            <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:16}}>
              {[["☕ $10 — 一杯咖啡","10"],["🍕 $25 — 一顿午餐","25"],["🎁 $50 — 加满油","50"]].map(([label,amt]) => (
                <button key={amt} onClick={()=>window.open("https://buymeacoffee.com/winstonwu1996?amount="+amt,"_blank")} style={{padding:"12px 16px",background:C.bg,border:"1.5px solid "+C.border,borderRadius:10,fontFamily:FONT,fontSize:15,cursor:"pointer",fontWeight:600,textAlign:"left"}}>{label}</button>
              ))}
              <button onClick={()=>{ var a=prompt("自定义金额 ($):"); if(a) window.open("https://buymeacoffee.com/winstonwu1996?amount="+a,"_blank"); }} style={{padding:"12px 16px",background:C.bg,border:"1.5px solid "+C.border,borderRadius:10,fontFamily:FONT,fontSize:15,cursor:"pointer",fontWeight:600,textAlign:"left"}}>💝 自定义金额</button>
            </div>
            <button onClick={()=>{ setShowTipJar(false); setTipDismissed(true); loadSave().then(d=>doSave({...(d||{}),tipDismissed:true})); window.scrollTo(0,0); }} style={{background:"transparent",border:"none",color:C.textSec,fontFamily:FONT,fontSize:14,cursor:"pointer",padding:8}}>暂时跳过，继续学习 →</button>
            <div style={{marginTop:8,fontSize:12,color:C.textSec,lineHeight:1.6}}>VocabSpark 由独立开发者维护，AI 调用有真实成本。<br/>你的支持让更多孩子能免费使用这个工具 ❤️</div>
          </div>
        </div>
      )}

      {phase === "done" && (() => {
        var ts = getTimingStats();
        var accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        var encourageMsg = accuracy >= 80 ? "太棒了，正确率超高！" : accuracy >= 50 ? "不错的开始，继续加油！" : "没关系，多练几次就好了！";
        // Mark daily streak on completion
        var _streakInfo = markStudyStreakToday();
        var _streakDisp = getStreakDisplay(_streakInfo.streak);
        return <div style={{...S.card,textAlign:"center",padding:"40px 22px"}}>
          <div style={{fontSize:56,marginBottom:12,animation:"bounce 0.6s ease-out"}}>🎉</div>
          <h2 style={{fontSize:24,fontWeight:700,margin:"0 0 4px"}}>全部学完！</h2>
          <p style={{color:C.textSec,marginBottom:4}}>{"今天学了 "+wordList.length+" 个词 · "+stats.xp+" XP"}</p>
          <p style={{color:C.accent,fontSize:13,fontWeight:600,marginBottom:_streakDisp ? 8 : 16}}>{encourageMsg}</p>
          {_streakDisp && (
            <div style={{background:"linear-gradient(135deg, "+C.goldLight+" 0%, "+C.accentLight+" 100%)",borderRadius:12,padding:"12px 16px",marginBottom:16,border:"1px solid "+C.gold+"44"}}>
              <div style={{fontSize:28,marginBottom:4}}>{_streakDisp.emoji}</div>
              <div style={{fontSize:15,fontWeight:800,color:C.text}}>🔥 连续学习第 {_streakDisp.days} 天</div>
              <div style={{fontSize:13,color:C.accent,fontWeight:600,marginTop:2}}>{_streakDisp.msg}</div>
            </div>
          )}

          {/* 今日报告卡 */}
          <div style={{background:"linear-gradient(135deg, "+C.tealLight+" 0%, "+C.accentLight+" 100%)",borderRadius:14,padding:"18px 16px",marginBottom:16,border:"1px solid "+C.border}}>
            <div style={{fontWeight:800,fontSize:14,color:C.teal,marginBottom:12}}>📋 今日学习报告</div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:8,marginBottom:12}}>
              <div style={{textAlign:"center"}}><div style={{fontSize:22,fontWeight:800,color:C.green}}>{stats.correct}</div><div style={{fontSize:11,color:C.textSec}}>猜对</div></div>
              <div style={{textAlign:"center"}}><div style={{fontSize:22,fontWeight:800,color:C.red}}>{stats.total-stats.correct}</div><div style={{fontSize:11,color:C.textSec}}>猜错</div></div>
              <div style={{textAlign:"center"}}><div style={{fontSize:22,fontWeight:800,color:C.accent}}>{accuracy}%</div><div style={{fontSize:11,color:C.textSec}}>正确率</div></div>
              <div style={{textAlign:"center"}}><div style={{fontSize:22,fontWeight:800,color:C.gold}}>{stats.bestStreak}</div><div style={{fontSize:11,color:C.textSec}}>最佳连对</div></div>
            </div>
            {ts && <div style={{background:"rgba(255,255,255,0.7)",borderRadius:10,padding:"10px 14px",textAlign:"left",fontSize:13,lineHeight:1.7}}>
              <div>⚡ <strong>最快：</strong>{ts.fastest[0]} ({Math.round(ts.fastest[1].duration/1000)}s)</div>
              <div>🐢 <strong>最慢：</strong>{ts.slowest[0]} ({Math.round(ts.slowest[1].duration/1000)}s)</div>
              <div>📊 <strong>平均：</strong>{ts.avg}s/词</div>
            </div>}
          </div>

          <div style={S.doneWords}>{wordList.map(w => <span key={w} style={S.doneTag} onClick={()=>speak(w)}>{w+" 🔊"}</span>)}</div>

          {!tipDismissed && <div style={{marginTop:20,padding:"16px 20px",background:C.goldLight,borderRadius:12,fontSize:14,lineHeight:1.7,textAlign:"center"}}>
            <div style={{marginBottom:8}}>☕ 如果 VocabSpark 帮到了你，考虑请开发者喝杯咖啡？</div>
            <div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap"}}>
              <button onClick={()=>window.open("https://buymeacoffee.com/winstonwu1996","_blank")} style={{padding:"8px 20px",background:C.gold,color:"#fff",border:"none",borderRadius:8,fontFamily:FONT,fontSize:14,fontWeight:600,cursor:"pointer"}}>☕ 支持一下</button>
              <button onClick={()=>setShowShare(true)} style={{padding:"8px 20px",background:C.accent,color:"#fff",border:"none",borderRadius:8,fontFamily:FONT,fontSize:14,fontWeight:600,cursor:"pointer"}}>🔗 推荐给朋友</button>
              <button onClick={()=>{setTipDismissed(true);loadSave().then(d=>doSave({...(d||{}),tipDismissed:true}));}} style={{padding:"8px 16px",background:"transparent",border:"none",color:C.textSec,fontFamily:FONT,fontSize:13,cursor:"pointer"}}>下次再说</button>
            </div>
          </div>}

          <button style={{...S.primaryBtn,marginTop:20}} onClick={() => { saveSession([],0,[]); setScreen("setup"); }}>← 回到主页</button>
        </div>;
      })()}

      {/* ── LOGIN MODAL ── */}
      {showLogin && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.55)",zIndex:1001,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>{ if(!loginLoading){setShowLogin(false);setLoginSent(false);setLoginEmail('');setOtpCode('');setOtpError('');window.scrollTo(0,0);} }}>
          <div style={{background:C.card,borderRadius:20,padding:"32px 24px",maxWidth:380,width:"100%",boxShadow:"0 20px 60px rgba(0,0,0,0.25)",fontFamily:FONT,animation:"fadeUp 0.25s ease-out"}} onClick={e=>e.stopPropagation()}>
            {!loginSent ? (
              <>
                <div style={{fontSize:36,textAlign:"center",marginBottom:8}}>🔑</div>
                <h3 style={{fontSize:19,fontWeight:700,textAlign:"center",margin:"0 0 4px"}}>登录 / 注册</h3>
                <p style={{fontSize:13,color:C.textSec,textAlign:"center",lineHeight:1.6,margin:"0 0 20px"}}>新用户输入邮箱即自动注册，老用户同一邮箱直接登录</p>
                <div style={{background:C.tealLight,borderRadius:10,padding:"12px 14px",marginBottom:20,fontSize:13,lineHeight:1.9,color:C.text}}>
                  ✅ 每日无限学习（未登录用户 {DAILY_LIMIT} 词/天）<br/>
                  ☁️ 进度云端同步，换设备不丢<br/>
                  📊 完整学习历史记录<br/>
                  <span style={{fontSize:12,color:C.textSec}}>推广期完全免费，无需付费</span>
                </div>
                <div style={{fontSize:13,fontWeight:600,marginBottom:6,color:C.text}}>邮箱地址</div>
                <input
                  type="email" value={loginEmail}
                  onChange={e=>setLoginEmail(e.target.value)}
                  onKeyDown={e=>{ if(e.key==='Enter') handleLoginEmail(); }}
                  placeholder="your@email.com"
                  style={{width:"100%",padding:"10px 14px",borderRadius:10,border:"1.5px solid "+C.border,fontFamily:FONT,fontSize:14,outline:"none",marginBottom:12,boxSizing:"border-box"}}
                />
                <button style={{...S.primaryBtn,width:"100%",justifyContent:"center",opacity:loginLoading?0.6:1}} onClick={handleLoginEmail} disabled={loginLoading||!loginEmail.trim()}>
                  {loginLoading ? "发送中..." : "✉️ 发送验证码"}
                </button>
                <div style={{fontSize:12,color:C.textSec,textAlign:"center",marginTop:12,lineHeight:1.6}}>
                  无需密码 · 输入邮件中的 6 位验证码即可登录<br/>
                  注册即表示同意服务条款
                </div>
                <button style={{background:"transparent",border:"none",color:C.textSec,fontFamily:FONT,fontSize:13,cursor:"pointer",width:"100%",marginTop:12,padding:"4px 0"}} onClick={()=>{setShowLogin(false);setLoginEmail('');window.scrollTo(0,0);}}>暂时不用</button>
              </>
            ) : (
              <>
                <div style={{fontSize:48,textAlign:"center",marginBottom:12}}>📬</div>
                <h3 style={{fontSize:18,fontWeight:700,textAlign:"center",margin:"0 0 8px"}}>验证码已发送</h3>
                <p style={{fontSize:14,color:C.textSec,textAlign:"center",lineHeight:1.7,margin:"0 0 16px"}}>已发送 6 位验证码到 <strong>{loginEmail}</strong><br/>请查看邮箱（含垃圾邮件文件夹）</p>
                <input type="text" inputMode="numeric" maxLength={6} value={otpCode} onChange={function(e){ setOtpCode(e.target.value.replace(/[^0-9]/g,'')); setOtpError(''); }} onKeyDown={function(e){ if(e.key==='Enter') handleVerifyOtp(); }} placeholder="输入 6 位验证码" style={{width:"100%",padding:"14px 16px",borderRadius:10,border:"1.5px solid "+C.border,fontFamily:FONT,fontSize:22,fontWeight:700,textAlign:"center",letterSpacing:"0.3em",outline:"none",marginBottom:8,boxSizing:"border-box"}} autoFocus />
                {otpError && <div style={{fontSize:12,color:C.red,textAlign:"center",marginBottom:8}}>{otpError}</div>}
                <button style={{...S.primaryBtn,width:"100%",justifyContent:"center",opacity:loginLoading||otpCode.length<6?0.6:1}} onClick={handleVerifyOtp} disabled={loginLoading||otpCode.length<6}>{loginLoading ? "验证中..." : "✓ 验证登录"}</button>
                <div style={{background:C.bg,borderRadius:10,padding:"10px 14px",fontSize:12,color:C.textSec,marginTop:12,lineHeight:1.6,textAlign:"center"}}>没收到？请检查垃圾邮件文件夹<br/><button style={{background:"transparent",border:"none",color:C.accent,fontFamily:FONT,fontSize:12,fontWeight:600,cursor:"pointer",padding:0,marginTop:4}} onClick={function(){setLoginSent(false);setOtpCode('');setOtpError('');}}>← 重新发送</button></div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── DAILY LIMIT MODAL ── */}
      {showLimitModal && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.55)",zIndex:1001,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>{setShowLimitModal(false);window.scrollTo(0,0);}}>
          <div style={{background:C.card,borderRadius:20,padding:"32px 24px",maxWidth:360,width:"100%",boxShadow:"0 20px 60px rgba(0,0,0,0.25)",fontFamily:FONT,textAlign:"center",animation:"fadeUp 0.25s ease-out"}} onClick={e=>e.stopPropagation()}>
            <div style={{fontSize:48,marginBottom:8}}>🌟</div>
            <h3 style={{fontSize:19,fontWeight:700,margin:"0 0 8px"}}>今天表现很棒！</h3>
            <p style={{fontSize:14,color:C.textSec,lineHeight:1.7,margin:"0 0 20px"}}>今日 {DAILY_LIMIT} 词（非注册用户上限）已学完<br/>注册账号，每日无限继续学习 🚀</p>
            <div style={{background:C.goldLight,borderRadius:10,padding:"12px 14px",marginBottom:20,fontSize:13,lineHeight:1.9,textAlign:"left"}}>
              🎁 <strong>推广期福利</strong><br/>
              ✅ 每日无限学习<br/>
              ☁️ 进度同步，换手机不丢<br/>
              📊 学习历史记录
            </div>
            <button style={{...S.primaryBtn,width:"100%",justifyContent:"center",marginBottom:10}} onClick={()=>{setShowLimitModal(false);setShowLogin(true);window.scrollTo(0,0);}}>🔑 免费注册，继续学习</button>
            <button style={{background:"transparent",border:"none",color:C.textSec,fontFamily:FONT,fontSize:13,cursor:"pointer",padding:"4px 0"}} onClick={()=>{setShowLimitModal(false);window.scrollTo(0,0);}}>明天再来</button>
          </div>
        </div>
      )}

      {/* ── SHARE MODAL ── */}
      {showShare && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.55)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>{setShowShare(false);window.scrollTo(0,0);}}>
          <div style={{background:C.card,borderRadius:20,padding:"28px 24px",maxWidth:380,width:"100%",boxShadow:"0 20px 60px rgba(0,0,0,0.25)",fontFamily:FONT,textAlign:"center",animation:"fadeUp 0.25s ease-out"}} onClick={e=>e.stopPropagation()}>
            <div style={{fontSize:36,marginBottom:6}}>📤</div>
            <h3 style={{fontSize:18,fontWeight:700,margin:"0 0 4px"}}>推荐给朋友</h3>
            <p style={{fontSize:13,color:C.textSec,lineHeight:1.6,margin:"0 0 18px"}}>觉得好用？让身边的华人朋友也试试~</p>

            {/* QR Code — desktop 扫码，手机长按保存 */}
            <div style={{background:C.bg,borderRadius:12,padding:14,marginBottom:14,display:"inline-block"}}>
              <img src={"https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https%3A%2F%2Fvocabspark.vercel.app&bgcolor=faf7f2&color=2c2420&margin=6"} width={160} height={160} alt="QR Code" style={{display:"block",borderRadius:6}} />
            </div>
            <div style={{fontSize:12,color:C.textSec,marginBottom:16}}>📱 手机扫码 / 长按保存发朋友圈</div>

            {/* 邀请文案 */}
            <div style={{background:C.accentLight,borderRadius:10,padding:"10px 14px",marginBottom:16,fontSize:13,color:C.text,lineHeight:1.7,textAlign:"left"}}>
              {"发现一个免费 AI 英语词汇 App，专为华人孩子设计！AI 用孩子自己的生活场景讲单词，我家娃超喜欢 🎉\n👉 vocabspark.vercel.app"}
            </div>

            {/* 按钮区 */}
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {typeof navigator !== "undefined" && navigator.share && (
                <button style={{...S.primaryBtn,width:"100%",justifyContent:"center"}} onClick={async()=>{
                  try { await navigator.share({ title:"VocabSpark — AI 英语词汇导师", text:"发现一个免费 AI 英语词汇 App，专为华人孩子设计！👉 vocabspark.vercel.app", url:"https://vocabspark.vercel.app" }); } catch(e){}
                }}>📱 分享到微信 / 其他 App</button>
              )}
              <button style={{...S.primaryBtn,width:"100%",justifyContent:"center",background:C.teal}} onClick={()=>{
                navigator.clipboard?.writeText("发现一个免费 AI 英语词汇 App，专为华人孩子设计！AI 用孩子自己的生活场景讲单词，我家娃超喜欢 🎉 vocabspark.vercel.app").then(()=>alert("✅ 已复制！可以粘贴到微信/抖音/朋友圈")).catch(()=>alert("请手动复制上方链接"));
              }}>📋 复制邀请文案</button>
              <button style={{background:"transparent",border:"none",color:C.textSec,fontFamily:FONT,fontSize:13,cursor:"pointer",padding:"4px 0"}} onClick={()=>{setShowShare(false);window.scrollTo(0,0);}}>关闭</button>
            </div>
          </div>
        </div>
      )}

      {showConfetti && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,pointerEvents:"none",zIndex:9999,overflow:"hidden"}}>
          {Array.from({length:40}).map(function(_,i) {
            var colors = [C.gold, C.accent, C.teal, C.purple, C.green, "#ff6b6b", "#ffd93d", "#6bcb77", "#a78bfa", "#f472b6"];
            var col = colors[i % colors.length];
            var left = (Math.sin(i * 137.5 * Math.PI / 180) * 0.5 + 0.5) * 100;
            var delay = (i % 10) * 0.1;
            var dur = 1.6 + (i % 6) * 0.25;
            var size = 6 + (i % 5) * 4;
            var shapes = ["50%", "2px", "0", "50% 0 50% 50%"];
            return <div key={i} style={{position:"absolute",top:"-20px",left:left+"%",width:size,height:size*((i%3===2)?0.5:1),background:col,borderRadius:shapes[i%4],opacity:0.9,animation:"confettiFall "+dur+"s "+delay+"s ease-in forwards",transform:"rotate("+(i*53)+"deg)"}} />;
          })}
        </div>
      )}

      <Disclaimer />
      <div style={{ textAlign:"center", padding:"24px 0 8px", fontSize:13, lineHeight:1.8, color:C.textSec }}>
        <div>Made with ❤️ by Willow's 👨‍👧</div>
        <div style={{ fontStyle:"italic" }}>献给 Willow 和所有征战复杂单词的孩子们，加油！</div>
        <div style={{ marginTop:6, fontSize:12 }}>问题反馈：<a href="mailto:Winstonwu1996@icloud.com" style={{ color:C.accent, textDecoration:"none" }}>Winstonwu1996@icloud.com</a> ✉️</div>
        <div style={{ marginTop:4, fontSize:12, display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap", alignItems:"center" }}>
          <a href="https://buymeacoffee.com/winstonwu1996" target="_blank" rel="noreferrer" style={{ color:C.gold, textDecoration:"none", fontWeight:600 }}>☕ 请开发者喝杯咖啡</a>
          <button onClick={()=>setShowShare(true)} style={{ background:"transparent", border:"none", color:C.accent, fontFamily:FONT, fontSize:12, fontWeight:600, cursor:"pointer", padding:0 }}>🔗 推荐给朋友</button>
        </div>
        <div style={{ marginTop:4, fontSize:11, color:C.border }}>VocabSpark v3.1</div>
      </div>
      <PrivacyNotice />

      <div ref={contentEndRef} />
      </div>
      <style>{globalCSS}</style>
    </div>
  );
}

/* ─── CSS ─── */
var globalCSS = [
  "@keyframes spin { to { transform: rotate(360deg); } }",
  "@keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }",
  "@keyframes slideInRight { from { opacity:0; transform:translateX(36px); } to { opacity:1; transform:translateX(0); } }",
  "@keyframes shake { 0%,100% { transform:translateX(0); } 20% { transform:translateX(-8px); } 40% { transform:translateX(8px); } 60% { transform:translateX(-5px); } 80% { transform:translateX(5px); } }",
  "@keyframes bounce { 0% { transform:scale(1); } 30% { transform:scale(1.04); } 60% { transform:scale(0.98); } 100% { transform:scale(1); } }",
  "@keyframes fillIn { from { opacity:0; transform:scale(1.15); } to { opacity:1; transform:scale(1); } }",
  "@keyframes glowPulse { 0%,100% { box-shadow:0 0 0 2px " + C.gold + ", 0 0 18px " + C.gold + "44; } 50% { box-shadow:0 0 0 3px " + C.gold + ", 0 0 28px " + C.gold + "77; } }",
  "@keyframes confettiFall { 0% { transform:translateY(0) rotate(0deg); opacity:1; } 100% { transform:translateY(105vh) rotate(720deg); opacity:0; } }",
  "textarea:focus, input:focus, select:focus { border-color: " + C.accent + " !important; outline: none; box-shadow: 0 0 0 2px " + C.accent + "22; }",
  "button:hover:not(:disabled) { filter: brightness(0.96); }",
  "button:active:not(:disabled) { transform: scale(0.98); }",
  "button { transition: transform 0.1s ease, filter 0.15s ease, box-shadow 0.15s ease; }",
  "button:disabled { opacity: 0.45; cursor: not-allowed !important; }",
  "* { box-sizing: border-box; }",
  "@media (max-width: 480px) { .vs-task-grid { grid-template-columns: 1fr !important; } }",
  "@media (min-width: 768px) { .vs-desktop-container { max-width: 720px !important; padding-left: 24px !important; padding-right: 24px !important; } }",
  "@media (min-width: 1024px) { .vs-desktop-container { max-width: 780px !important; } }",
  "@keyframes skeletonPulse { 0% { opacity:0.4; } 50% { opacity:0.7; } 100% { opacity:0.4; } }"
].join("\n");

var S = {
  root:{background:C.bg,minHeight:"100vh",fontFamily:FONT,color:C.text},
  container:{maxWidth:660,margin:"0 auto",padding:"12px 16px 60px"},
  header:{textAlign:"center"},
  heroTitle:{fontSize:34,fontWeight:800,margin:"0 0 10px",letterSpacing:"-0.03em",lineHeight:1.05},
  heroTaglineCn:{fontSize:15,fontWeight:500,color:C.text,margin:0,lineHeight:1.5,maxWidth:360,marginLeft:"auto",marginRight:"auto"},
  heroTaglineEn:{fontSize:13,color:C.textSec,fontStyle:"italic",margin:"10px 0 0",fontFamily:FONT,letterSpacing:"0.02em"},
  heroStatRow:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:8,marginTop:18},
  heroStatPillGold:{padding:"7px 14px",background:C.goldLight,borderRadius:999,fontSize:13,fontWeight:700,color:"#9a7209",border:"1px solid rgba(230,168,23,0.35)",fontFamily:FONT},
  heroStatPillAccent:{padding:"7px 14px",background:C.accentLight,borderRadius:999,fontSize:13,fontWeight:700,color:C.accent,border:"1px solid rgba(212,93,60,0.28)",fontFamily:FONT},
  heroStatPillGreen:{padding:"7px 14px",background:C.greenLight,borderRadius:999,fontSize:13,fontWeight:700,color:C.green,border:"1px solid rgba(34,160,107,0.28)",fontFamily:FONT},
  tabBar:{display:"flex",marginBottom:0,background:C.card,borderRadius:"12px 12px 0 0",border:"1px solid "+C.border,borderBottom:"none",overflow:"hidden"},
  tab:{flex:1,padding:"13px 16px",background:"transparent",border:"none",borderBottom:"2px solid transparent",fontFamily:FONT,fontSize:14,fontWeight:600,color:C.textSec,cursor:"pointer"},
  tabActive:{flex:1,padding:"13px 16px",background:"transparent",border:"none",borderBottom:"2px solid "+C.accent,fontFamily:FONT,fontSize:14,fontWeight:600,color:C.accent,cursor:"pointer"},
  setupCard:{background:C.card,borderRadius:"0 0 12px 12px",border:"1px solid "+C.border,padding:"18px 20px",marginBottom:14,boxShadow:C.shadow},
  setupHint:{fontSize:13,color:C.textSec,marginBottom:14,lineHeight:1.6},
  profilePrev:{background:C.bg,borderRadius:8,padding:"12px 14px",fontSize:13,lineHeight:1.7,color:C.textSec,marginBottom:10},
  smallBtn:{padding:"6px 14px",background:"transparent",border:"1px solid "+C.border,borderRadius:8,fontFamily:FONT,fontSize:13,cursor:"pointer",color:C.textSec},
  tealBtn:{padding:"10px 20px",background:C.teal,color:"#fff",border:"none",borderRadius:8,fontFamily:FONT,fontSize:14,fontWeight:600,cursor:"pointer",marginTop:8},
  uploadRow:{display:"flex",alignItems:"center",gap:10},
  uploadBtn:{padding:"7px 14px",background:C.tealLight,color:C.teal,border:"1px solid "+C.teal+"33",borderRadius:8,fontFamily:FONT,fontSize:13,fontWeight:600,cursor:"pointer"},
  presetRow:{display:"flex",flexWrap:"wrap",gap:8,marginBottom:12},
  presetBtn:{padding:"6px 14px",background:C.purpleLight,color:C.purple,border:"none",borderRadius:20,fontFamily:FONT,fontSize:13,fontWeight:600,cursor:"pointer"},
  textarea:{width:"100%",padding:"12px 14px",fontFamily:FONT,fontSize:14,lineHeight:1.7,color:C.text,background:C.bg,border:"1px solid "+C.border,borderRadius:10,resize:"vertical"},
  bigBtn:{display:"block",width:"100%",padding:"15px",background:C.accent,color:"#fff",border:"none",borderRadius:12,fontFamily:FONT,fontSize:17,fontWeight:700,cursor:"pointer",marginTop:8},
  error:{padding:"10px 14px",background:C.redLight,color:C.red,borderRadius:8,fontSize:14,marginBottom:10,lineHeight:1.5},
  retryBtn:{display:"block",marginTop:8,padding:"8px 16px",background:C.accent,color:"#fff",border:"none",borderRadius:8,fontFamily:FONT,fontSize:14,fontWeight:600,cursor:"pointer"},
  topBar:{display:"flex",alignItems:"center",gap:10,padding:"6px 0 14px"},
  backBtn:{padding:"5px 12px",background:"transparent",border:"1px solid "+C.border,borderRadius:8,fontFamily:FONT,fontSize:16,color:C.textSec,cursor:"pointer"},
  progressWrap:{flex:1,display:"flex",alignItems:"center",gap:8},
  progressTrack:{flex:1,height:6,background:C.border,borderRadius:3},
  progressFill:{height:"100%",background:C.accent,borderRadius:3,transition:"width 0.4s ease"},
  progressText:{fontSize:13,color:C.textSec,fontWeight:600},
  xpBadge:{padding:"4px 10px",background:C.goldLight,borderRadius:12,fontSize:13,fontWeight:700,color:C.gold},
  settingsBtn:{padding:"5px 8px",background:"transparent",border:"1px solid "+C.border,borderRadius:8,fontSize:18,cursor:"pointer",color:C.textSec,lineHeight:1},
  wordHeader:{background:C.card,borderRadius:14,border:"1px solid "+C.border,padding:"18px 20px 14px",marginBottom:10,boxShadow:C.shadow,animation:"fadeUp 0.3s ease-out",display:"flex",justifyContent:"space-between",alignItems:"center"},
  wordTitle:{fontSize:30,fontWeight:700,margin:0},
  phoneticText:{fontSize:16,color:C.textSec,fontWeight:400,fontStyle:"italic"},
  streakBadge:{padding:"4px 12px",background:C.goldLight,borderRadius:16,fontSize:13,fontWeight:700,color:C.gold},
  card:{background:C.card,borderRadius:14,border:"1px solid "+C.border,padding:"20px",boxShadow:C.shadow,animation:"fadeUp 0.3s ease-out",marginBottom:10},
  tag:{display:"inline-block",padding:"4px 14px",background:C.accentLight,color:C.accent,borderRadius:20,fontSize:14,fontWeight:700,marginBottom:14},
  contextBox:{background:C.bg,borderRadius:10,padding:"16px 18px",marginBottom:16,borderLeft:"3px solid "+C.accent,fontSize:16,lineHeight:1.8,display:"flex",alignItems:"flex-start",gap:8},
  optionGrid:{display:"flex",flexDirection:"column",gap:8,marginBottom:14},
  optionBtn:{display:"flex",alignItems:"center",gap:10,padding:"12px 16px",background:C.bg,border:"1.5px solid "+C.border,borderRadius:10,fontFamily:FONT,fontSize:15,cursor:"pointer",textAlign:"left",transition:"all 0.15s",lineHeight:1.5},
  optionKey:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:26,height:26,borderRadius:"50%",background:C.border,fontWeight:700,fontSize:13,flexShrink:0},
  hintBtn:{padding:"8px 16px",background:C.goldLight,border:"none",borderRadius:8,fontFamily:FONT,fontSize:14,cursor:"pointer",color:C.gold,fontWeight:600,marginBottom:14},
  resultBanner:{padding:"14px 18px",borderRadius:10,border:"1.5px solid",marginBottom:14,fontWeight:600,fontSize:15,animation:"fadeUp 0.3s ease-out"},
  btnRow:{display:"flex",gap:10,flexWrap:"wrap"},
  primaryBtn:{padding:"12px 24px",background:C.accent,color:"#fff",border:"none",borderRadius:10,fontFamily:FONT,fontSize:15,fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:8},
  ghostBtn:{padding:"12px 18px",background:"transparent",color:C.textSec,border:"1px solid "+C.border,borderRadius:10,fontFamily:FONT,fontSize:14,cursor:"pointer"},
  specCard:{background:C.darkPanel,borderRadius:14,border:"1px solid "+C.darkBorder,padding:"22px",boxShadow:"0 10px 30px rgba(0,0,0,0.3)",animation:"fadeUp 0.3s ease-out",marginBottom:10,color:"#c9d1d9",fontFamily:"'Courier New',Courier,monospace"},
  specTag:{display:"inline-block",padding:"4px 14px",background:C.darkGreen+"22",color:C.darkGreen,borderRadius:20,fontSize:14,fontWeight:700,marginBottom:10,fontFamily:FONT},
  specHint:{fontSize:14,color:C.darkBlue,marginBottom:14,fontWeight:600},
  specScenario:{padding:"14px 16px",borderLeft:"2px solid "+C.darkBorder,marginBottom:20,lineHeight:1.7,fontSize:15},
  specSlotRow:{display:"flex",gap:10,marginBottom:16},
  specSlot:{flex:1,height:56,display:"flex",alignItems:"center",justifyContent:"center",border:"1px dashed "+C.darkBorder,background:C.dark,borderRadius:6,fontSize:15,fontWeight:700,color:"#c9d1d9",transition:"all 0.2s"},
  specPoolRow:{display:"flex",gap:10,marginBottom:16,minHeight:48},
  specPoolBtn:{flex:1,background:C.darkPanel,border:"1px solid "+C.darkBorder,color:"#c9d1d9",padding:"12px 0",borderRadius:6,cursor:"pointer",fontSize:15,fontWeight:700,fontFamily:"'Courier New',Courier,monospace"},
  specCheckBtn:{width:"100%",background:C.darkBlue,color:"#fff",border:"none",padding:"14px",borderRadius:6,fontSize:16,fontWeight:700,cursor:"pointer",fontFamily:"'Courier New',Courier,monospace"},
  specDecoded:{background:C.dark,padding:"16px",borderRadius:6,borderLeft:"3px solid "+C.darkGreen,marginTop:16,lineHeight:1.7},
  loadingBox:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,padding:"28px",color:C.textSec,fontSize:15},
  spinner:{display:"inline-block",width:20,height:20,border:"2px solid "+C.border,borderTopColor:C.accent,borderRadius:"50%",animation:"spin 0.7s linear infinite"},
  reviewQ:{padding:"14px 0",borderBottom:"1px solid "+C.border,marginBottom:4},
  reviewOpt:{padding:"8px 16px",background:C.bg,border:"1.5px solid "+C.border,borderRadius:8,fontFamily:FONT,fontSize:14,cursor:"pointer",fontWeight:600,transition:"all 0.15s"},
  reviewScore:{padding:"12px 16px",background:C.goldLight,borderRadius:10,fontSize:16,fontWeight:700,color:C.gold,textAlign:"center",marginBottom:14},
  doneStats:{display:"flex",justifyContent:"center",gap:24,marginBottom:16},
  doneStat:{textAlign:"center"},
  doneStatNum:{fontSize:28,fontWeight:700,color:C.accent},
  doneStatLabel:{fontSize:13,color:C.textSec},
  doneWords:{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",marginTop:8},
  doneTag:{padding:"6px 14px",background:C.accentLight,color:C.accent,borderRadius:20,fontSize:14,fontWeight:600,cursor:"pointer"},
  statCard:{background:C.bg,border:"1px solid "+C.border,borderRadius:10,padding:"10px 12px",textAlign:"center"},
  statNum:{fontSize:22,fontWeight:800,color:C.accent,lineHeight:1.1},
  statLabel:{fontSize:12,color:C.textSec,marginTop:4},
};

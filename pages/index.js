import { useState, useRef, useEffect, useCallback } from "react";
import Head from "next/head";

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
var buildSys = (profile) => {
  return "你是一个幽默、有耐心且精通中英双语的词汇导师。风格像一个很酷的大姐姐——会用梗、会吐槽、偶尔抖机灵，但绝不油腻。\n\n【学生画像】\n" + profile + "\n\n你必须深度利用上面的学生画像。每一个例句、每一个画面、每一个比喻，都必须和这个学生的具体爱好、常去的地方、日常生活紧密关联。让学生觉得\"这说的就是我的生活\"。";
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

var speak = async (text) => {
  if (typeof window === "undefined") return;
  var clean = text.replace(/[🔊\[\]]/g, "").trim();
  if (!clean) return;
  if (audioCache[clean]) { try { audioCache[clean].currentTime = 0; audioCache[clean].play(); return; } catch(e) {} }
  try {
    var r = await fetch("/api/tts?text=" + encodeURIComponent(clean));
    if (!r.ok) throw new Error("tts " + r.status);
    var blob = await r.blob();
    var url = URL.createObjectURL(blob);
    var audio = new Audio(url);
    audioCache[clean] = audio;
    audio.play();
  } catch(e) {
    _speakFallback(clean);
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

/* ─── API Calls (server-side proxy, key hidden) ─── */
var callAPI = async (sys, msg) => {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ system: sys, message: msg, maxTokens: 2000 }),
  });
  const data = await response.json();
  if (data.error) throw new Error(data.error);
  return data.text;
};

var callAPIFast = async (sys, msg) => {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ system: sys, message: msg, maxTokens: 1500 }),
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

var PRESETS = {
  "SSAT 高频 50 词": "aberration\nabhor\nabstain\nadmonish\narduous\naudacious\nbenevolent\ncandid\ncapricious\ncompel\ncontempt\ncunning\ndaunt\ndiligent\ndiscern\neloquent\nempathy\nenigma\nfervent\nfrugal\ngregarious\nhaughty\nimplore\nincessant\njubilant\nlethargy\nlucid\nmalice\nmollify\nnovice\nobstinate\nopulent\npacify\npragmatic\nprudent\nrebuke\nresilient\nsagacious\nserene\ntaciturn\ntenacious\ntrivial\nunanimous\nvehement\nvenerate\nvolatile\nwary\nzealous\nambiguous\nbenign",
  "SSAT 情感词": "elated\nmelancholy\nindignant\napprehensive\ncontrite\njubilant\ndespondent\nexuberant\nserene\nvexed",
  "SSAT 动作词": "implore\nadmonish\ncompel\nrebuke\nmollify\npacify\nvenerate\nabhor\ndiscern\nrelinquish",
};

/* ─── Storage: localStorage ─── */
var SKEY = "vocabspark_v1";         // permanent key — never change this
var SKEY_OLD = "vocabspark_release_2"; // migration source
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
    localStorage.setItem(SKEY, JSON.stringify({ schemaVersion: 1, completedWords: [], ...d }));
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
  var [profile, setProfile] = useState("");
  var [wordInput, setWordInput] = useState("");
  var [wordList, setWordList] = useState([]);
  var [fileLabel, setFileLabel] = useState("");
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

  var [stats, setStats] = useState({ correct:0, total:0, streak:0, bestStreak:0, xp:0 });
  var [wordTimings, setWordTimings] = useState({});
  var [wordStart, setWordStart] = useState(null);

  var dataCache = useRef({});
  var [batchProgress, setBatchProgress] = useState(0);
  var [batchTotal, setBatchTotal] = useState(0);
  var [batchTip, setBatchTip] = useState("");

  var contentEndRef = useRef(null);
  var topRef = useRef(null);

  useEffect(function() { if (typeof window !== "undefined") window.speechSynthesis?.getVoices(); }, []);
  useEffect(function() { if (topRef.current) topRef.current.scrollIntoView({ behavior:"smooth", block:"start" }); }, [phase, idx]);
  useEffect(function() { if (guessSubmitted || reviewSubmitted || clozeSubmitted) setTimeout(function() { if (contentEndRef.current) contentEndRef.current.scrollIntoView({ behavior:"smooth", block:"end" }); }, 200); }, [guessSubmitted, reviewSubmitted, clozeSubmitted]);

  useEffect(function() {
    loadSave().then(function(d) {
      try {
        if (d?.profile) { setProfile(d.profile); setProfileLocked(true); }
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
  }, []);

  var sysP = buildSys(profile);

  var save = function(s, session) {
    setStats(s);
    loadSave().then(function(d) { doSave({...(d||{}), profile, stats: s, session: session || d?.session}); });
  };

  var saveSession = function(wl, i, lrn) {
    loadSave().then(function(d) { doSave({...(d||{}), profile, stats, session: { wordList: wl, idx: i, learned: lrn }}); });
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

  /* ─── BATCH LOAD: concurrency-limited (max 5) with real progress ─── */
  var loadBatch = async function(startIdx, lrn, words) {
    var wl = words || wordList;
    var endIdx = Math.min(startIdx + 5, wl.length);
    var batchWords = wl.slice(startIdx, endIdx);
    var total = batchWords.length;
    if (total === 0) return;
    setBatchTotal(total * 3);
    setBatchProgress(0);
    setPhase("batch_loading");
    setBatchTip(makeBatchTip(0, batchWords[0], total));

    // ── Phase B: fire review/cloze pre-fetch independently (doesn't affect progress bar) ──
    var endMilestone = lrn.length + batchWords.length;
    var willCloze  = endMilestone % 10 === 0;
    var willReview = endMilestone % 5 === 0 && !willCloze;
    if (willReview && !dataCache.current["_review_" + endMilestone]) {
      callAPIFast(sysP, buildReviewPrompt(batchWords))
        .then(function(raw) { dataCache.current["_review_" + endMilestone] = tryJSON(raw) || null; })
        .catch(function() {});
    }
    if (willCloze && !dataCache.current["_cloze_" + endMilestone]) {
      callAPIFast(sysP, buildClozePrompt([...lrn.slice(-5), ...batchWords]))
        .then(function(raw) { dataCache.current["_cloze_" + endMilestone] = tryJSON(raw) || null; })
        .catch(function() {});
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
    for (var i = 0; i < batchWords.length; i++) {
      var w = batchWords[i];
      if (dataCache.current[w]) { completed += 3; continue; }
      dataCache.current[w] = { guess: null, guessRaw: null, teach: null, spectrum: null };
      var wLrn = [...lrn, ...batchWords.slice(0, i)];
      (function(word, learned) {
        tasks.push(function() {
          return callAPIFast(sysP, buildGuessPrompt(word, learned)).then(function(raw) {
            dataCache.current[word].guess = raw ? tryJSON(raw) : null;
            dataCache.current[word].guessRaw = raw;
          }).catch(function() {});
        });
        tasks.push(function() {
          return callAPI(sysP, buildTeachPrompt(word, learned)).then(function(raw) {
            dataCache.current[word].teach = raw ? addSpeakMarkers(raw) : null;
          }).catch(function() {});
        });
        tasks.push(function() {
          return callAPIFast(sysP, buildSpectrumPrompt(word)).then(function(raw) {
            dataCache.current[word].spectrum = raw ? tryJSON(raw) : null;
          }).catch(function() {});
        });
      })(w, wLrn);
    }

    var totalTasks = completed + tasks.length;
    setBatchTotal(totalTasks);
    setBatchProgress(completed);

    var running = 0;
    var taskIdx = 0;
    await new Promise(function(resolve) {
      if (tasks.length === 0) { resolve(); return; }
      function next() {
        while (running < 5 && taskIdx < tasks.length) {
          running++;
          var t = tasks[taskIdx++];
          t().finally(function() {
            running--;
            completed++;
            setBatchProgress(completed);
            if (completed % 3 === 0) {
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

    setBatchProgress(totalTasks);
    setBatchTip("✅ " + total + " 个词全部就绪，开始学习！");
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
    } else {
      setGuessData({ context: (d?.guessRaw||"").substring(0,300) || "格式异常", options: null });
    }
    if (d?.teach) setTeachContent(d.teach);
    if (d?.spectrum?.spectrum_words) setSpectrumData(d.spectrum);
    setPhaseDir(1); setPhase("guess");
  };

  var submitGuess = function() {
    if (!selectedOption) return;
    setGuessSubmitted(true);
    var correct = guessData?.answer && selectedOption === guessData.answer;

    if (correct) { sfx.correct(); setBounceCorrect(true); setTimeout(function() { setBounceCorrect(false); }, 600); }
    else { sfx.wrong(); setShakeWrong(true); setTimeout(function() { setShakeWrong(false); }, 500); }

    save({ ...stats, total: stats.total+1, correct: stats.correct+(correct?1:0), streak: correct ? stats.streak+1 : 0, bestStreak: correct ? Math.max(stats.bestStreak, stats.streak+1) : stats.bestStreak, xp: stats.xp+(correct?15:5) });

    setTimeout(function() { setPhaseDir(1); setPhase("teach"); }, 800);
  };

  var skipGuess = function() {
    save({ ...stats, total: stats.total+1, streak: 0, xp: stats.xp+3 });
    setPhaseDir(1); setPhase("teach");
  };

  var handleFile = async (e) => {
    var file = e.target.files?.[0]; if (!file) return;
    if (/\.(xlsx|xls)$/i.test(file.name)) {
      setError("暂不支持 .xlsx 文件。请在 Excel 中另存为 CSV 格式后上传，或直接复制粘贴单词到下方输入框。");
      return;
    }
    setFileLabel(file.name);
    try {
      var words = await parseFile(file);
      if (!words.length) setError("未能提取词汇，请确认文件每行一个英文单词。");
      else { setWordInput(words.join("\n")); setError(""); setSetupTab("words"); }
    } catch (err) { setError("文件解析失败: " + err.message); }
    if (fileRef.current) fileRef.current.value = "";
  };

  var startLearning = async function(resumeIdx) {
    var words = wordInput.trim().split(/[\n,，、]+/).map(function(w) { return w.trim().toLowerCase(); }).filter(Boolean);
    if (!words.length) { setError("请输入至少一个单词"); return; }
    if (!profile.trim()) { setError("请先填写并保存学生画像"); return; }
    var startIdx = typeof resumeIdx === "number" ? resumeIdx : 0;
    var startLearned = startIdx > 0 ? words.slice(0, startIdx) : [];
    setWordList(words); setIdx(startIdx); setLearned(startLearned); setError("");
    dataCache.current = {};
    setScreen("learning");
    saveSession(words, startIdx, startLearned);
    await loadBatch(startIdx, startLearned, words);
    applyWordData(words[startIdx]);
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

  var goNextWord = async function() {
    if (wordStart) {
      setWordTimings(function(prev) { return { ...prev, [currentWord]: { start: wordStart, end: Date.now(), duration: Date.now() - wordStart } }; });
    }
    var newLearned = [...learned, currentWord];
    setLearned(newLearned);
    var nextIdx = idx + 1;
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
      } catch (e) { setError(e.message); }
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
      } catch (e) { setError(e.message); }
      return;
    }

    if (nextIdx >= wordList.length) { sfx.complete(); setPhase("done"); saveSession(wordList, nextIdx, newLearned); return; }

    if (newLearned.length === 10 && !tipDismissed) { setShowTipJar(true); }

    setIdx(nextIdx);
    applyWordData(wordList[nextIdx]);
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
    await loadBatch(nextIdx, learned);
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
    if (learned.length >= 10 && !tipDismissed) { setShowTipJar(true); }
    await loadBatch(nextIdx, learned);
    setIdx(nextIdx);
    applyWordData(wordList[nextIdx]);
  };

  var progress = wordList.length > 0 ? ((idx + (["teach","spectrum","done"].includes(phase) ? 1 : 0)) / wordList.length) * 100 : 0;

  var getTimingStats = () => {
    var entries = Object.entries(wordTimings).filter(([_,v]) => v.duration);
    if (!entries.length) return null;
    entries.sort((a,b) => a[1].duration - b[1].duration);
    return { fastest: entries[0], slowest: entries[entries.length-1], avg: Math.round(entries.reduce((s,e) => s+e[1].duration, 0) / entries.length / 1000) };
  };

  /* ═══ SETUP SCREEN ═══ */
  if (screen === "setup") {
    var hasSession = wordList.length > 0 && idx < wordList.length && idx > 0;
    return (
    <div style={S.root}>
      <Head>
        <title>VocabSpark — AI 词汇导师</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <div style={S.container}>

      {showWelcome && (
        <div style={{ position:"fixed", top:0, left:0, right:0, bottom:0, background:"rgba(0,0,0,0.5)", zIndex:999, display:"flex", alignItems:"center", justifyContent:"center", padding:20 }}>
          <div style={{ background:C.card, borderRadius:16, padding:"32px 28px", maxWidth:480, width:"100%", boxShadow:"0 20px 60px rgba(0,0,0,0.2)" }}>
            <div style={{ fontSize:40, textAlign:"center", marginBottom:12 }}>📚</div>
            <h2 style={{ fontSize:22, fontWeight:700, textAlign:"center", margin:"0 0 16px", fontFamily:FONT }}>Welcome to VocabSpark!</h2>
            <div style={{ fontSize:14, lineHeight:1.8, color:C.text, fontFamily:FONT }}>
              <p style={{ margin:"0 0 12px" }}>VocabSpark 是一款 AI 驱动的英语词汇学习工具，通过<strong>猜测→讲解→光谱排序→复习</strong>的互动流程帮助孩子高效记忆单词。</p>
              <p style={{ margin:"0 0 12px", padding:"10px 14px", background:C.tealLight, borderRadius:8, fontSize:13 }}>
                <strong>开始前请先设置「学生画像」：</strong><br/>
                填写孩子的年级、爱好、常去的地方等信息。AI 会用这些信息定制专属的讲解场景和例句，信息越丰富效果越好。
              </p>
            </div>
            <button onClick={() => setShowWelcome(false)} style={{ ...S.bigBtn, marginTop:4 }}>👍 我知道了，开始设置</button>
            <Disclaimer />
          </div>
        </div>
      )}

      <div style={S.header}>
        <span style={{ fontSize:44 }}>📚</span>
        <h1 style={S.heroTitle}>VocabSpark</h1>
        <p style={S.heroSub}>AI 词汇导师 · 猜→教→练，过目不忘</p>
        {stats.xp > 0 && <div style={S.statsBadge}>{"⚡ "+stats.xp+" XP · 🔥 最佳连对 "+stats.bestStreak+" · ✅ "+(stats.total>0?Math.round(stats.correct/stats.total*100):0)+"%"}</div>}
      </div>

      {hasSession && (
        <div style={{ ...S.card, background: C.tealLight, borderColor: C.teal, marginBottom: 14 }}>
          <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: C.teal }}>📌 上次学到第 {idx+1} 个词（共 {wordList.length} 个）</div>
          <button style={{ ...S.primaryBtn, background: C.teal }} onClick={async function() { setScreen("learning"); await loadBatch(idx, learned); applyWordData(wordList[idx]); }}>继续学习 →</button>
        </div>
      )}

      <div style={S.tabBar}>
        <button style={setupTab==="profile"?S.tabActive:S.tab} onClick={() => setSetupTab("profile")}>👤 学生画像</button>
        <button style={setupTab==="words"?S.tabActive:S.tab} onClick={() => setSetupTab("words")}>📝 词汇</button>
      </div>
      {setupTab === "profile" && (
        <div style={S.setupCard}>
          <div style={S.setupHint}>{profileLocked ? "✅ 画像已保存" : "👨‍👩‍👧 家长填写孩子信息，设置得越丰富，AI 讲解越贴近生活，记忆越深刻！"}</div>
          {profileLocked ? (
            <div><div style={S.profilePrev}>{profile.slice(0,250)}{profile.length>250?"...":""}</div><button style={S.smallBtn} onClick={() => setProfileLocked(false)}>✏️ 编辑</button></div>
          ) : (
            <div><textarea style={S.textarea} value={profile} onChange={e => setProfile(e.target.value)} rows={12} placeholder={"请填写以下信息（越详细越好）：\n\n• 基本信息：年级、城市\n• 好朋友的名字：如 Emily, Lucas\n• 老师的名字：如 Mr. Johnson\n• 偶像是谁：如 Taylor Swift, 大谷翔平\n• 喜欢的动画/电影：如 鬼灭之刃、哈利波特\n• 兴趣爱好：如 打网球、游泳、烘焙、弹钢琴\n• 喜欢的食物：如 抹茶冰淇淋、寿司\n• 讨厌的食物：如 苦瓜、香菜\n• 常去的地方：如 Irvine Spectrum、大华超市"} /><button style={S.tealBtn} onClick={() => { setProfileLocked(true); loadSave().then(d => doSave({...(d||{}), profile, stats})); }}>💾 保存</button></div>
          )}
        </div>
      )}
      {setupTab === "words" && (
        <div style={S.setupCard}>
          <div style={S.setupHint}>上传 CSV/TXT 文件、选预设，或手动输入（每行一个单词）<br/><span style={{color:C.accent}}>💡 Excel 用户：选中单词列 → 复制 → 粘贴到下方输入框即可</span></div>
          <div style={S.uploadRow}>
            <button style={S.uploadBtn} onClick={() => fileRef.current?.click()}>📁 上传</button>
            <span style={{fontSize:13,color:C.textSec}}>{fileLabel||".csv .txt（Excel 请先另存为 CSV）"}</span>
            <input ref={fileRef} type="file" accept=".csv,.tsv,.txt" style={{display:"none"}} onChange={handleFile} />
          </div>
          <div style={S.presetRow}>{Object.keys(PRESETS).map(n => <button key={n} style={S.presetBtn} onClick={() => setWordInput(PRESETS[n])}>{n}</button>)}</div>
          <textarea style={S.textarea} value={wordInput} onChange={e => setWordInput(e.target.value)} rows={6} placeholder="arduous\nbenevolent" />
          <div style={{fontSize:13,color:C.textSec,marginTop:4}}>{wordInput.trim() ? "共 "+wordInput.trim().split(/[\n,，、]+/).filter(w=>w.trim()).length+" 个词" : ""}</div>
        </div>
      )}
      {error && <div style={S.error}>{error}</div>}
      <button style={S.bigBtn} onClick={() => startLearning(0)}>✨ 开始学习</button>
      <Disclaimer />

      <div style={{ textAlign:"center", padding:"24px 0 8px", fontSize:13, lineHeight:1.8, color:C.textSec }}>
        <div>Made with ❤️ by Willow 的爸爸</div>
        <div style={{ fontStyle:"italic" }}>献给 Willow 和她的朋友们，加油！</div>
        <div style={{ marginTop:6, fontSize:12 }}>问题反馈：<a href="mailto:Winstonwu1996@icloud.com" style={{ color:C.accent, textDecoration:"none" }}>Winstonwu1996@icloud.com</a> ✉️</div>
        <div style={{ marginTop:4, fontSize:12, display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap", alignItems:"center" }}>
          <a href="https://buymeacoffee.com/winstonwu1996" target="_blank" rel="noreferrer" style={{ color:C.gold, textDecoration:"none", fontWeight:600 }}>☕ 请开发者喝杯咖啡</a>
          <button onClick={()=>setShowShare(true)} style={{ background:"transparent", border:"none", color:C.accent, fontFamily:FONT, fontSize:12, fontWeight:600, cursor:"pointer", padding:0 }}>🔗 推荐给朋友</button>
        </div>
      </div>

      </div>
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
      <div style={S.container}>
      <div ref={topRef} />
      <div style={S.topBar}>
        <button style={S.backBtn} onClick={() => setScreen("setup")}>←</button>
        <div style={S.progressWrap}>
          <div style={{...S.progressTrack, position:"relative", overflow:"visible"}}>
            <div style={{...S.progressFill, width:progress+"%"}} />
            {wordList.map(function(_,i) {
              if ((i+1) % 5 !== 0 || i+1 >= wordList.length) return null;
              var isCloze = (i+1) % 10 === 0;
              var pos = ((i+1) / wordList.length) * 100;
              return <div key={i} style={{position:"absolute",top:"50%",left:pos+"%",transform:"translate(-50%,-50%)",width:8,height:8,borderRadius:"50%",background:isCloze?C.teal:C.purple,border:"1.5px solid "+C.card,zIndex:1}} />;
            })}
          </div>
          <span style={S.progressText}>{Math.min(idx+1,wordList.length)}/{wordList.length}</span>
        </div>
        <div style={S.xpBadge}>{"⚡"+stats.xp}</div>
        <button style={S.settingsBtn} onClick={() => setShowSettings(true)} title="设置">⚙️</button>
      </div>

      {/* ── SETTINGS MODAL ── */}
      {showSettings && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",zIndex:999,display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"60px 16px 16px",overflowY:"auto"}}>
          <div style={{background:C.card,borderRadius:16,width:"100%",maxWidth:600,boxShadow:"0 20px 60px rgba(0,0,0,0.2)",fontFamily:FONT}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 20px 0"}}>
              <h3 style={{fontSize:18,fontWeight:700,margin:0}}>⚙️ 设置</h3>
              <button onClick={() => setShowSettings(false)} style={{background:"transparent",border:"none",fontSize:22,cursor:"pointer",color:C.textSec,padding:"0 4px"}}>×</button>
            </div>
            <div style={{display:"flex",borderBottom:"1px solid "+C.border,margin:"16px 20px 0"}}>
              <button style={setupTab==="profile"?{...S.tab,...S.tabActive}:S.tab} onClick={() => setSetupTab("profile")}>👤 学生画像</button>
              <button style={setupTab==="words"?{...S.tab,...S.tabActive}:S.tab} onClick={() => setSetupTab("words")}>📝 词汇</button>
            </div>
            <div style={{padding:"16px 20px 20px"}}>
              {setupTab === "profile" && (
                <div>
                  <div style={S.setupHint}>{profileLocked ? "✅ 画像已保存" : "👨‍👩‍👧 信息越丰富，AI 讲解越贴近生活！"}</div>
                  {profileLocked ? (
                    <div><div style={S.profilePrev}>{profile.slice(0,250)}{profile.length>250?"...":""}</div><button style={S.smallBtn} onClick={() => setProfileLocked(false)}>✏️ 编辑</button></div>
                  ) : (
                    <div><textarea style={S.textarea} value={profile} onChange={e => setProfile(e.target.value)} rows={10} placeholder={"基本信息：年级、城市\n爱好：网球、烘焙...\n常去地方：Irvine Spectrum..."} /><button style={S.tealBtn} onClick={() => { setProfileLocked(true); loadSave().then(d => doSave({...(d||{}), profile, stats})); }}>💾 保存</button></div>
                  )}
                </div>
              )}
              {setupTab === "words" && (
                <div>
                  <div style={S.setupHint}>修改词汇列表后，点「重新开始」从第一个词开始学习。</div>
                  <div style={S.presetRow}>{Object.keys(PRESETS).map(n => <button key={n} style={S.presetBtn} onClick={() => setWordInput(PRESETS[n])}>{n}</button>)}</div>
                  <textarea style={S.textarea} value={wordInput} onChange={e => setWordInput(e.target.value)} rows={8} placeholder="arduous\nbenevolent" />
                  <div style={{fontSize:13,color:C.textSec,margin:"6px 0 12px"}}>{wordInput.trim() ? "共 "+wordInput.trim().split(/[\n,，、]+/).filter(w=>w.trim()).length+" 个词" : ""}</div>
                  <button style={S.primaryBtn} onClick={() => { setShowSettings(false); startLearning(0); }}>✨ 重新开始</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {phase !== "review" && phase !== "done" && phase !== "batch_loading" && phase !== "cloze" && (
        <div style={{...S.wordHeader, boxShadow: stats.streak >= 5 ? "0 0 0 2px "+C.gold+", 0 0 18px "+C.gold+"55" : C.shadow, border: stats.streak >= 5 ? "1px solid "+C.gold : "1px solid "+C.border, animation: stats.streak >= 5 ? "glowPulse 2s ease-in-out infinite" : "fadeUp 0.3s ease-out"}}>
          <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"}}>
            <h2 style={S.wordTitle}>{currentWord}</h2>
            {phonetic && <span style={S.phoneticText}>{phonetic}</span>}
            <SpeakWordBtn text={currentWord} size={38} />
          </div>
          {stats.streak > 0 && <div style={S.streakBadge}>{stats.streak >= 5 ? "🔥×"+stats.streak : "🔥 "+stats.streak}</div>}
        </div>
      )}

      {error && <div style={S.error}>{error}<button onClick={() => {setError("");loadBatch(idx, learned).then(function() { applyWordData(currentWord); });}} style={S.retryBtn}>🔄 重试</button></div>}

      {phase === "batch_loading" && (
        <div style={{...S.card, textAlign:"center", padding:"40px 24px"}}>
          <div style={{fontSize:40, marginBottom:16}}>📚</div>
          <h3 style={{fontSize:18, fontWeight:700, margin:"0 0 8px"}}>正在准备第 {Math.floor(idx/5)+1} 组学习内容</h3>
          <p style={{fontSize:14, color:C.textSec, marginBottom:20, lineHeight:1.6}}>{batchTip}</p>
          <div style={{background:C.border, borderRadius:8, height:12, overflow:"hidden", marginBottom:12}}>
            <div style={{height:"100%", background:"linear-gradient(90deg, "+C.accent+", "+C.gold+")", borderRadius:8, transition:"width 0.3s ease", width: (batchTotal > 0 ? Math.round(batchProgress/batchTotal*100) : 0)+"%"}} />
          </div>
          <div style={{fontSize:13, color:C.textSec}}>{batchTotal > 0 ? Math.round(batchProgress/batchTotal*100) : 0}%</div>
        </div>
      )}

      {phase === "guess" && (
        <div style={{...S.card, animation: shakeWrong ? "shake 0.4s ease" : bounceCorrect ? "bounce 0.5s ease" : phaseDir===1 ? "slideInRight 0.28s ease-out" : "fadeUp 0.3s ease-out"}}>
          <div style={S.tag}>🎯 猜一猜</div>
          {!guessData ? <div style={S.loadingBox}><span style={S.spinner}/> <div style={{textAlign:"center"}}><div>{loadingTip||"🧠 AI 老师正在备课..."}</div><div style={{fontSize:12,color:C.textSec,marginTop:6}}>正在为你生成专属学习内容，首次会稍慢，之后越来越快 ✨</div></div></div> : <>
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
              return <button key={k} disabled={guessSubmitted} style={{...S.optionBtn,background:bg,borderColor:bdr,color:clr}} onClick={()=>setSelectedOption(k)}><span style={S.optionKey}>{k}</span>{v}{ok?" ✓":""}{bad?" ✗":""}</button>;
            })}</div> : <div style={{fontSize:14,color:C.textSec,marginBottom:14}}>选项异常，请跳过</div>}
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
        {!teachContent ? <div style={S.loadingBox}><span style={S.spinner}/> <div style={{textAlign:"center"}}>{loadingTip||"📖 正在用你的生活场景编写专属讲解..."}</div></div> : <>
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
        {!reviewData?.questions ? <div style={S.loadingBox}><span style={S.spinner}/> <div style={{textAlign:"center"}}>{loadingTip||"🎮 设计互动复习挑战中..."}</div></div> : <>
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
          : <div><div style={S.reviewScore}>{"得分："+reviewData.questions.filter(q=>reviewAnswers[q.id]===q.answer).length+"/"+reviewData.questions.length+" · +"+reviewData.questions.filter(q=>reviewAnswers[q.id]===q.answer).length*10+" XP"}</div><button style={S.primaryBtn} onClick={afterReview}>{idx+1>=wordList.length?"🎉 完成！":"→ "+wordList[idx+1]}</button></div>}
        </>}
      </div>}

      {phase === "cloze" && <div style={{...S.card, animation:"slideInRight 0.28s ease-out"}}>
        <div style={{...S.tag,background:C.goldLight,color:C.gold}}>📝 阅读填空挑战</div>
        {!clozeData?.questions ? <div style={S.loadingBox}><span style={S.spinner}/> <div style={{textAlign:"center"}}>{loadingTip||"📝 正在生成阅读理解短文..."}</div></div> : <>
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
          : <div><div style={S.reviewScore}>{"得分："+clozeData.questions.filter(q=>clozeAnswers[q.id]===q.answer).length+"/"+clozeData.questions.length+" · +"+clozeData.questions.filter(q=>clozeAnswers[q.id]===q.answer).length*15+" XP"}</div><button style={S.primaryBtn} onClick={afterCloze}>{idx+1>=wordList.length?"🎉 完成！":"→ 继续学习"}</button></div>}
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
            <button onClick={()=>{ setShowTipJar(false); setTipDismissed(true); loadSave().then(d=>doSave({...(d||{}),tipDismissed:true})); }} style={{background:"transparent",border:"none",color:C.textSec,fontFamily:FONT,fontSize:14,cursor:"pointer",padding:8}}>暂时跳过，继续学习 →</button>
            <div style={{marginTop:8,fontSize:12,color:C.textSec,lineHeight:1.6}}>VocabSpark 由独立开发者维护，AI 调用有真实成本。<br/>你的支持让更多孩子能免费使用这个工具 ❤️</div>
          </div>
        </div>
      )}

      {phase === "done" && (() => {
        var ts = getTimingStats();
        return <div style={{...S.card,textAlign:"center",padding:"40px 22px"}}>
          <div style={{fontSize:56,marginBottom:12}}>🎉</div>
          <h2 style={{fontSize:24,fontWeight:700,margin:"0 0 4px"}}>全部学完！</h2>
          <p style={{color:C.textSec,marginBottom:16}}>{"今天学了 "+wordList.length+" 个词 · "+stats.xp+" XP"}</p>
          <div style={S.doneStats}>
            <div style={S.doneStat}><div style={S.doneStatNum}>{stats.correct}</div><div style={S.doneStatLabel}>猜对</div></div>
            <div style={S.doneStat}><div style={S.doneStatNum}>{stats.total-stats.correct}</div><div style={S.doneStatLabel}>猜错</div></div>
            <div style={S.doneStat}><div style={S.doneStatNum}>{stats.bestStreak}</div><div style={S.doneStatLabel}>最佳连对</div></div>
          </div>
          {ts && <div style={{background:C.bg,borderRadius:10,padding:"14px 18px",marginBottom:16,textAlign:"left",fontSize:14,lineHeight:1.7}}>
            <div>⚡ <strong>最快掌握：</strong>{ts.fastest[0]} ({Math.round(ts.fastest[1].duration/1000)}秒)</div>
            <div>🐢 <strong>最耗时：</strong>{ts.slowest[0]} ({Math.round(ts.slowest[1].duration/1000)}秒)</div>
            <div>📊 <strong>平均用时：</strong>{ts.avg}秒/词</div>
          </div>}
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

      {/* ── SHARE MODAL ── */}
      {showShare && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.55)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>setShowShare(false)}>
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
              <button style={{background:"transparent",border:"none",color:C.textSec,fontFamily:FONT,fontSize:13,cursor:"pointer",padding:"4px 0"}} onClick={()=>setShowShare(false)}>关闭</button>
            </div>
          </div>
        </div>
      )}

      {showConfetti && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,pointerEvents:"none",zIndex:9999,overflow:"hidden"}}>
          {Array.from({length:24}).map(function(_,i) {
            var colors = [C.gold, C.accent, C.teal, C.purple, C.green, "#ff6b6b", "#ffd93d", "#6bcb77"];
            var col = colors[i % colors.length];
            var left = (Math.sin(i * 137.5 * Math.PI / 180) * 0.5 + 0.5) * 100;
            var delay = (i % 8) * 0.12;
            var dur = 1.8 + (i % 5) * 0.2;
            var size = 8 + (i % 4) * 4;
            return <div key={i} style={{position:"absolute",top:"-20px",left:left+"%",width:size,height:size,background:col,borderRadius:i%3===0?"50%":"2px",animation:"confettiFall "+dur+"s "+delay+"s ease-in forwards",transform:"rotate("+(i*53)+"deg)"}} />;
          })}
        </div>
      )}

      <Disclaimer />
      <div style={{ textAlign:"center", padding:"24px 0 8px", fontSize:13, lineHeight:1.8, color:C.textSec }}>
        <div>Made with ❤️ by Willow 的爸爸</div>
        <div style={{ fontStyle:"italic" }}>献给 Willow 和她的朋友们，加油！</div>
        <div style={{ marginTop:6, fontSize:12 }}>问题反馈：<a href="mailto:Winstonwu1996@icloud.com" style={{ color:C.accent, textDecoration:"none" }}>Winstonwu1996@icloud.com</a> ✉️</div>
        <div style={{ marginTop:4, fontSize:12, display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap", alignItems:"center" }}>
          <a href="https://buymeacoffee.com/winstonwu1996" target="_blank" rel="noreferrer" style={{ color:C.gold, textDecoration:"none", fontWeight:600 }}>☕ 请开发者喝杯咖啡</a>
          <button onClick={()=>setShowShare(true)} style={{ background:"transparent", border:"none", color:C.accent, fontFamily:FONT, fontSize:12, fontWeight:600, cursor:"pointer", padding:0 }}>🔗 推荐给朋友</button>
        </div>
      </div>

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
  "textarea:focus { border-color: " + C.accent + " !important; outline: none; }",
  "button:hover:not(:disabled) { filter: brightness(0.96); }",
  "button:disabled { opacity: 0.45; cursor: not-allowed !important; }",
  "* { box-sizing: border-box; }"
].join("\n");

var S = {
  root:{background:C.bg,minHeight:"100vh",fontFamily:FONT,color:C.text},
  container:{maxWidth:660,margin:"0 auto",padding:"12px 16px 60px"},
  header:{textAlign:"center",padding:"28px 0 20px"},
  heroTitle:{fontSize:30,fontWeight:700,margin:"10px 0 2px",letterSpacing:"-0.02em"},
  heroSub:{fontSize:14,color:C.textSec,margin:0},
  statsBadge:{display:"inline-block",marginTop:12,padding:"6px 16px",background:C.goldLight,borderRadius:20,fontSize:13,fontWeight:600,color:C.gold},
  tabBar:{display:"flex",marginBottom:0,background:C.card,borderRadius:"12px 12px 0 0",border:"1px solid "+C.border,borderBottom:"none",overflow:"hidden"},
  tab:{flex:1,padding:"13px 16px",background:"transparent",border:"none",borderBottom:"2px solid transparent",fontFamily:FONT,fontSize:14,fontWeight:600,color:C.textSec,cursor:"pointer"},
  tabActive:{flex:1,padding:"13px 16px",background:"transparent",border:"none",borderBottom:"2px solid "+C.accent,fontFamily:FONT,fontSize:14,fontWeight:600,color:C.accent,cursor:"pointer"},
  setupCard:{background:C.card,borderRadius:"0 0 12px 12px",border:"1px solid "+C.border,padding:"18px 20px",marginBottom:14,boxShadow:C.shadow},
  setupHint:{fontSize:13,color:C.textSec,marginBottom:14,lineHeight:1.6},
  profilePrev:{background:C.bg,borderRadius:8,padding:"12px 14px",fontSize:13,lineHeight:1.7,color:C.textSec,marginBottom:10},
  smallBtn:{padding:"6px 14px",background:"transparent",border:"1px solid "+C.border,borderRadius:8,fontFamily:FONT,fontSize:13,cursor:"pointer",color:C.textSec},
  tealBtn:{padding:"10px 20px",background:C.teal,color:"#fff",border:"none",borderRadius:8,fontFamily:FONT,fontSize:14,fontWeight:600,cursor:"pointer",marginTop:8},
  uploadRow:{display:"flex",alignItems:"center",gap:10,marginBottom:10},
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
};

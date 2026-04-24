import React, { useState, useRef, useEffect, useCallback } from "react";
import Head from "next/head";
import { supabase } from '../lib/supabase';
import { C, FONT, FONT_DISPLAY, NUM, globalCSS, S, getWordTheme } from '../lib/theme';
import { FETCH_TIMEOUT_MS, FETCH_TIMEOUT_LONG_MS, fetchWithTimeout, callWithClientRetry, callAPI, callAPIFast, callAPIStream, tryJSON, parsePartialJSON, callClassify, METHOD_SCHEMAS, METHOD_EXAMPLES, VISUAL_ANCHOR_FORMATS } from '../lib/api';
import { BrandUIcon, BrandSparkIcon, BrandNavBar, AppHeroHeader } from '../components/BrandNavBar';
import UserCenter from '../components/UserCenter';
import { loadLearningTime, tickIfActive, installActivityListeners, calcSavings, formatTime } from '../lib/learningTimer';
import * as XLSX from 'xlsx';

/* ═══════════════════════════════════════════════════════
   Vocab by Know U. — AI 英语私教 · 词汇课
   Know U. Learning 系列产品
   ═══════════════════════════════════════════════════════ */
var DAILY_LIMIT_GUEST = 5;
var DAILY_LIMIT_REGISTERED = 10;
var DAILY_KEY = 'vocabspark_daily';
var DAILY_NEW_QUOTA_KEY = 'vocabspark_daily_new_quota_v1';
var DEEP_REVIEW_DAILY_KEY = 'vocabspark_deep_review_daily_v1';
var STUDY_STREAK_KEY = 'vocabspark_study_streak_v1';
var PHOTO_LIMIT = 5;
var PROFILE_MAX = 1000;
var PROFILE_TEXTAREA_PLACEHOLDER =
  "写几句学习者的情况，例如：年龄/年级、城市、好朋友、爱好、最近喜欢的动画或歌……写越多 AI 越了解，学单词越有趣！";

var PROFILE_GUIDE_EXAMPLES = [
  "• 年龄/年级、所在城市",
  "• 好朋友的名字（例：Emily、Sophia）",
  "• 教练或老师的称呼（例：网球教练 Ms. Lee）",
  "• Willow 今天和 Emily 打了一场超刺激的网球！",
  "• 最近在追《鬼灭之刃》，超喜欢炭治郎",
  "• 上周末去了 Irvine Spectrum，吃了抹茶冰淇淋",
  "• 偶像是 Taylor Swift，已刷了 100 遍 Eras Tour"
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

// GOAL_DIRECTIVES — 把"我的目标"从一句话装饰升级为真正影响 AI 输出的教学指令
// 每个目标定义：受众/难度/风格/cloze 风格/例句场景偏好
// buildSys 会展开成 4-5 行明确指令，guess/teach/cloze 调 AI 时全部带上
var GOAL_DIRECTIVES = {
  ssat: {
    audience: "美国私立中学 6-8 年级，备考 SSAT (Middle/Upper Level)",
    difficulty: "词汇难度对应 SSAT 高频词（≈ 中学进阶到高一基础），避免 GRE 级生僻词",
    style: "用中学生熟悉的口语 + 校园场景，例句活泼带流行文化梗，避免学术术语和过长复杂句",
    clozeStyle: "150-180 词叙事性短文，含校园冲突/友谊/家庭/兴趣，5 题 4 选项",
    sceneTags: "校园 / 朋友 / 运动 / anime/K-pop/Taylor Swift / 家庭 / 周末 hangout",
  },
  isee: {
    audience: "美国私立中学 5-8 年级，备考 ISEE (Lower/Middle/Upper)",
    difficulty: "词汇贴 ISEE 同义辨析与句子完型常考词，难度跟 SSAT 接近",
    style: "中学生友好 + 句子结构稍正式（ISEE 偏书面），例句重在精准表达",
    clozeStyle: "150-180 词，含一个对比/转折结构，5 题 4 选项",
    sceneTags: "校园 / 文化活动 / 阅读体验 / 团队合作 / 思考瞬间",
  },
  sat: {
    audience: "美国高中 9-11 年级，备考 SAT (Reading & Writing)",
    difficulty: "SAT Reading 高频词 + 过渡词 + 学术词汇（如 paradigm, contend, undermine）",
    style: "略正式但仍鲜活，可融入辩论/社会观察/科学常识，鼓励逻辑性表达",
    clozeStyle: "200-250 词议论或叙事+议论混合，含 1 个论点或转折，5 题 4 选项",
    sceneTags: "学术讨论 / 时事观察 / 文化思辨 / 大学申请 / 科技伦理",
  },
  toefl: {
    audience: "中国高中/大学生，备考 TOEFL iBT",
    difficulty: "TOEFL 5500 词表 + Academic Word List（AWL），偏学术",
    style: "学术中性，偏说明文/议论文，避免太多本土俚语；多用名词化和被动语态",
    clozeStyle: "200-280 词学术风格短文（说明文为主），TOEFL Reading 风格，5 题 4 选项",
    sceneTags: "北美校园生活 / 学术研究 / 科技 / 历史 / 自然现象 / 文化对比",
  },
  ielts: {
    audience: "中国学生（高中/大学/职场），备考 IELTS",
    difficulty: "IELTS Band 6.5+ 词汇 + 写作高分词（如 substantial, mitigate, prevalent）",
    style: "BBC 英式风格，议论文偏多，可用更复杂的复合句；避免美式俚语",
    clozeStyle: "200-260 词 IELTS Reading 风格，常含数据/观点对比，5 题 4 选项",
    sceneTags: "环境 / 教育政策 / 移民 / 科技伦理 / 健康议题 / 城市化",
  },
};

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

/* ─── 学习宠物系统 ─── */
// 进化阶梯：累计喂养次数 → 物种 / 形象。emoji 取代图片资源，零依赖 + 跨平台一致
var PET_STAGES = [
  { minFed: 0,   level: 1,  species: "kitten",   emoji: "🐱", title: "小奶猫" },
  { minFed: 10,  level: 5,  species: "cat",      emoji: "😼", title: "中猫" },
  { minFed: 30,  level: 15, species: "tiger",    emoji: "🐯", title: "小老虎" },
  { minFed: 100, level: 30, species: "lion",     emoji: "🦁", title: "雄狮" },
];

// 根据累计喂养次数推算当前阶段
var getPetStage = function(totalFed) {
  var n = Number(totalFed) || 0;
  var current = PET_STAGES[0];
  for (var i = 0; i < PET_STAGES.length; i++) {
    if (n >= PET_STAGES[i].minFed) current = PET_STAGES[i];
  }
  return current;
};

// 下一个进化阶段（用于"还差 N 顿到下一级"的预告）
var getNextPetStage = function(totalFed) {
  var n = Number(totalFed) || 0;
  for (var i = 0; i < PET_STAGES.length; i++) {
    if (PET_STAGES[i].minFed > n) return PET_STAGES[i];
  }
  return null; // 已最高级
};

// 计算从 lastFeedAt 到现在的"自然饥饿衰减"（每天 -30）
// 用户离线期间饱食度也会下降，这是"宠物需要照顾"的核心机制
var calcDecayedHunger = function(pet) {
  if (!pet) return 100;
  var hunger = Number(pet.hunger);
  if (!Number.isFinite(hunger)) hunger = 100;
  if (!pet.lastFeedAt) return hunger;
  try {
    var elapsed = (Date.now() - new Date(pet.lastFeedAt).getTime()) / 86400000; // 天
    if (elapsed <= 0) return hunger;
    var decayed = hunger - elapsed * 30;
    return Math.max(0, Math.min(100, decayed));
  } catch (e) { return hunger; }
};

// 判断宠物情绪（影响 UI 表情/状态文案）
var getPetMood = function(pet) {
  if (!pet) return { emoji: "😴", label: "还没醒来", color: "#98a2b3" };
  var hunger = calcDecayedHunger(pet);
  var happiness = Number(pet.happiness) || 50;
  if (hunger < 10 || happiness < 20) return { emoji: "😢", label: "难过", color: "#e53e3e" };
  if (hunger < 30) return { emoji: "😟", label: "饿了", color: "#e6a817" };
  if (hunger > 60 && happiness > 60) return { emoji: "😊", label: "开心", color: "#22a06b" };
  return { emoji: "😐", label: "一般", color: "#94a3b8" };
};

// 喂食成本：每顿 10 XP
var PET_FEED_COST_XP = 10;
// 喂食增益：饱食度 +25，开心度 +5（饿狠了 +15）
var PET_FEED_HUNGER_DELTA = 25;
var PET_FEED_HAPPINESS_DELTA_NORMAL = 5;
var PET_FEED_HAPPINESS_DELTA_RESCUE = 15; // 饥饿 < 20 时喂养"救命粮"额外加分

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
  if (goal === "other" && goalCustom) {
    goalText = "\n\n【学习目标】\n" + goalCustom.slice(0, 100) +
      "\n请在词汇难度、例句风格、cloze 文体上贴合该目标。";
  } else if (goal && GOAL_DIRECTIVES[goal]) {
    var dir = GOAL_DIRECTIVES[goal];
    var found = STUDY_GOAL_OPTIONS.find(function(o) { return o.key === goal; });
    var label = found ? found.label : goal;
    goalText = "\n\n【学习目标】" + label +
      "\n- 目标受众：" + dir.audience +
      "\n- 词汇难度：" + dir.difficulty +
      "\n- 教学风格：" + dir.style +
      "\n- 例句优先采用：" + dir.sceneTags +
      "\n- Cloze 文体：" + dir.clozeStyle +
      "\n以上四条贯穿你所有输出（猜词例句、teach 场景、scenarios、cloze 短文）。";
  } else if (goal) {
    var found2 = STUDY_GOAL_OPTIONS.find(function(o) { return o.key === goal; });
    if (found2) goalText = "\n\n【学习目标】" + found2.label + "（" + found2.desc + "）\n请贴合该目标。";
  }
  return "你是幽默有耐心的中英双语词汇导师，风格轻松活泼——会用梗、偶尔吐槽抖机灵。\n\n【学习画像】\n" + p + goalText + "\n\n深度利用画像：例句、画面、比喻必须紧扣用户的爱好、常去地方、日常生活。让用户觉得\"说的就是我\"。";
};

var buildGuessPrompt = (word, learned) => {
  var ctx = learned.length > 0 ? "\n之前学过：" + learned.join(", ") : "";
  return "单词：" + word + ctx + "\n\n请执行 Step 1（猜）：\n\n" +
    "1. 给出这个单词的IPA音标\n" +
    "2. context 字段：1-2 句**纯英文**语境句（⚠️ 必须全英文，不能含任何中文、拼音、中文标点），用 _____ 代替目标单词，深度利用学习画像的场景（兴趣/常去地方/日常）。\n" +
    "   ✅ 好范例：\"William just pulled off a clutch Pentakill in Honor of Kings, and immediately rushed to _____ the new season pass before the Jay Chou collab skin expired.\"\n" +
    "   ❌ 禁止：中英混合（如\"William 在《王者荣耀》里 _____\"）、纯中文、中文标点\n" +
    "3. 给出 4 个中文选项（A/B/C/D），只有 1 个正确含义\n\n" +
    "IMPORTANT: 直接输出JSON，不要任何前导文字：\n" +
    '{"phonetic":"/音标/","context":"English-only sentence with _____","options":{"A":"中文选项A","B":"中文选项B","C":"中文选项C","D":"中文选项D"},"answer":"字母","hint":"中文提示"}';
};

// Phase 1.5：generator prompt — 接受 classifyResult，动态裁剪 schema 到选中方法
var buildTeachPrompt = (word, learned, classifyResult) => {
  var cls = classifyResult || {
    wordType: "F",
    methods: [{type:"image"},{type:"nuance"}],
    comparedWith: null,
    abstractLevel: "L2"
  };
  var methodTypes = (cls.methods || [])
    .map(function(m){ return m && m.type; })
    .filter(function(t){ return t && METHOD_SCHEMAS[t]; });
  if (methodTypes.length === 0) methodTypes = ["image","nuance"]; // 最终兜底

  var methodSchemasBlock = methodTypes.map(function(t){ return METHOD_SCHEMAS[t]; }).join("\n\n");
  var methodExamplesBlock = methodTypes.map(function(t){ return METHOD_EXAMPLES[t]; }).join("\n\n");
  var visualAnchorHint = VISUAL_ANCHOR_FORMATS[cls.abstractLevel] || VISUAL_ANCHOR_FORMATS.L2;

  var learnedLine = (learned && learned.length > 0)
    ? "学过的词：" + learned.slice(-15).join(", ") + "（【连】优先引用其中相关词）\n"
    : "";
  var comparedHint = cls.comparedWith
    ? "【分类器推荐对比词】：" + cls.comparedWith + "（可直接采用）\n"
    : "";

  return "# 任务\n" +
    "为单词 \"" + word + "\" 生成学习笔记 JSON。不要输出任何 JSON 之外的文字。\n" +
    learnedLine + comparedHint + "\n" +

    "# 分类器决策（必须遵守）\n" +
    "- 词型：" + cls.wordType + "\n" +
    "- 使用的方法（严格 " + methodTypes.length + " 种）：" + methodTypes.join(" + ") + "\n" +
    "- 视觉锚级别：" + cls.abstractLevel + "\n\n" +

    "# 你要用的方法 schema（仅此 " + methodTypes.length + " 种）\n" +
    methodSchemasBlock + "\n\n" +

    "# 方法示例（按此质感输出）\n" +
    methodExamplesBlock + "\n\n" +

    "# 视觉锚格式\n" +
    visualAnchorHint + "\n\n" +

    "# 顶层 schema（必须完整输出 7 个字段）\n" +
    "{\n" +
    '  "definition": {"pos":"vt./adj./n. 等英文缩写","zh":"核心中文释义 ≤15 字，多义用斜杠分隔"},\n' +
    '  "opening": "画像化开场 50-80 字，2-3 句口语化。要把【用户画像里的具体场景】和【本词的含义/感觉】真正联系起来，不是空喊名字。让用户读完第一句就觉得\'这词跟我的世界有关\'",\n' +
    '  "wordType": "' + cls.wordType + '",\n' +
    '  "teach": {\n' +
    '    "methods": [ ... ],  // 严格 ' + methodTypes.length + ' 个，按上面 schema\n' +
    '    "visualAnchor": {"emojis":"...","text":"..."}\n' +
    '  },\n' +
    '  "connect": {\n' +
    '    "comparedWith": "' + (cls.comparedWith || '对比词') + '",\n' +
    '    "points": [\n' +
    '      {"word":"...","meaning":"含义（场景）≤15 字"},\n' +
    '      {"word":"...","meaning":"含义（场景）≤15 字"}\n' +
    '    ]\n' +
    '  },\n' +
    '  "use": {\n' +
    '    "collocations": [\n' +
    '      {"phrase":"...","zh":"..."},\n' +
    '      {"phrase":"...","zh":"..."}\n' +
    '    ],\n' +
    '    "scenarios": [\n' +
    '      {"sceneZh":"中文场景 5-10 字：","en":"完整英文句。","zh":"中文翻译"},\n' +
    '      {"sceneZh":"...","en":"...","zh":"..."}\n' +
    '    ]\n' +
    '  },\n' +
    '  "closing": "结束鼓励 50-80 字，2-3 句。要把本词的【应用场景/精神】跟【用户的具体世界】结合 — 一句肯定她已经会的、一句指出这词能让她在自己的世界里更准确地表达什么。要像懂她的朋友说话，不是老师下结论"\n' +
    "}\n\n" +

    "# 微型完整示例（让你看到完整 7 字段输出的样子 — 学此整体结构与 opening/closing 的口吻，不是学此词内容）\n" +
    "{\n" +
    '  "definition": {"pos":"adj.","zh":"永久的 / 持续不停的"},\n' +
    '  "opening": "William，你打排位连败时那种\'怎么这局还没完\'的熟悉感，就是 perpetual。不是真的永远，但感觉上就是停不下来的那种持续。",\n' +
    '  "wordType": "D",\n' +
    '  "teach": {\n' +
    '    "methods": [\n' +
    '      {"type":"mnemonic","soundAlike":"陪 pet 永远","interpretation":"陪宠物永不停歇 = 永久的"},\n' +
    '      {"type":"image","scene":"刻着爪印的老时钟永不停摆","mapping":"时钟永动 = perpetual"}\n' +
    '    ],\n' +
    '    "visualAnchor": {"emojis":"♾️⏰🐾","text":"陪宠物永不停歇"}\n' +
    '  },\n' +
    '  "connect": {\n' +
    '    "comparedWith": "eternal",\n' +
    '    "points": [\n' +
    '      {"word":"eternal","meaning":"永恒（抽象情感）"},\n' +
    '      {"word":"perpetual","meaning":"永久（持续动感）"}\n' +
    '    ]\n' +
    '  },\n' +
    '  "use": {\n' +
    '    "collocations": [\n' +
    '      {"phrase":"perpetual motion","zh":"永动机"},\n' +
    '      {"phrase":"perpetual student","zh":"万年学生"}\n' +
    '    ],\n' +
    '    "scenarios": [\n' +
    '      {"sceneZh":"王者赛季体验：","en":"Honor of Kings seasons feel perpetual.","zh":"王者赛季没完没了。"},\n' +
    '      {"sceneZh":"Taylor 粉丝：","en":"Her fans\' love is perpetual.","zh":"她粉丝的爱永续。"}\n' +
    '    ]\n' +
    '  },\n' +
    '  "closing": "你以前可能会说 \'always\' 或 \'forever\'，其实那种带点疲惫感的\'没完没了\'就是 perpetual 的精髓。下次写排位日记或吐槽训练强度，这词比 always 更有画面。"\n' +
    "}\n\n" +

    "# ❗❗ 关键完整性约束 ❗❗\n" +
    "你的输出必须包含以下 7 个顶层字段（一个都不能少）：\n" +
    "1. definition (必有，{pos:'词性英文缩写', zh:'≤15 字核心释义'})\n" +
    "2. opening (必有，50-80 字共情画像)\n" +
    "3. wordType (必有，= \"" + cls.wordType + "\")\n" +
    "4. teach { methods, visualAnchor } (必有)\n" +
    "5. connect { comparedWith, points } (必有)\n" +
    "6. use { collocations, scenarios } (必有)\n" +
    "7. closing (必有，50-80 字鼓励+应用建议)\n" +
    "生成完 teach.methods 不能停！必须继续生成 visualAnchor → connect → use → closing 剩余部分。\n" +
    "只有所有 7 个字段都输出后才能结束 JSON。\n\n" +

    "# 其他约束\n" +
    "- 整个输出是单个合法的、可 JSON.parse 解析的对象\n" +
    "- 不要 markdown 代码块标记（```json 或 ```）\n" +
    "- 不要叙述性修饰：\"想象你...\"、\"让你变...\"、\"这就是...的核心\"\n" +
    "- 释义中文，例句英文，直引号 \"\"\n" +
    "- use.scenarios 严格 2 个，use.collocations 严格 2 个\n" +
    "- 画像化：例句深度利用学生画像（兴趣、常去地方、日常）\n\n" +

    "直接输出纯 JSON（5 个顶层字段完整）。";
};

// Phase 2 Round 1.5：spectrum phase 按词型路由不同玩法
// A 程度词 → 行为一致性判断（behavior_match）— 真正测使用感
// 其他词型（Round 2-4 逐步实现）：暂时走 legacy gradient 保证不回归
var buildSpectrumPrompt = (word, classifyResult) => {
  var wordType = classifyResult?.wordType || null;
  switch (wordType) {
    case "A": return buildBehaviorMatchPrompt(word);
    case "B": return buildCollocationFillPrompt(word);
    case "C": return buildMorphFillPrompt(word);
    case "D": return buildMnemonicFillPrompt(word);
    case "E":
    case "F": return buildContextChoicePrompt(word, wordType);
    default: return buildLegacyGradientPrompt(word);
  }
};

// Legacy 光谱排序（保留：A 类替换后，其他词型暂时用，Round 2-4 逐步替换）
var buildLegacyGradientPrompt = (word) => {
  return "单词：" + word + "\n\n设计\"词义光谱排序\"游戏。找2个含义相近但程度/强度不同的常见词，组成从弱到强的3词光谱。写2-3句沉浸式场景描述（用学习画像场景），场景中必须按从弱到强的顺序展示三个词的用法。排序正确后给出解读。\n\n注意：spectrum_words 数组必须严格按照程度从弱到强排列，确保语义强度递增。例如 dislike < hate < loathe，或 smile < grin < beam。\n\nIMPORTANT: 直接输出JSON：\n" + '{"spectrum_words":["最弱","中等","最强"],"scenario":"场景（必须按弱→中→强顺序描述）","decoded":"解读（解释为什么这个顺序正确）"}';
};

// A 程度词 → 情境强度选择（核心升级：替代拖动光谱）
// 给一个场景，4 个程度词选一个最贴切的（目标词应是正解）
// 测的是"情境→词的匹配能力"，和 SSAT/SAT 选择题格式一致
// A 程度词 → 行为一致性判断（真正测使用感，不是识别目标词）
// 之前 gradient_choice 让目标词成为选项之一 → 学生看顶部大字就能选对（无效）
// 新设计：4 个选项是【行为描述】不是词 → 必须理解目标词的使用强度才能判断
var buildBehaviorMatchPrompt = (word) => {
  return "为 \"" + word + "\" 设计【行为一致性判断】题。\n\n" +
    "【任务】场景 + 问题 + 4 个行为描述，测学生是否真正理解 \"" + word + "\" 的使用强度和语义。\n\n" +
    "【场景】1-2 句画像化（深度用学生兴趣/常去地方/日常），描述一个让人 " + word + " 的事件。\n" +
    "可以让 \"" + word + "\" 出现在场景或问题里（便于给上下文），重点是选项必须是行为。\n\n" +
    "【问题】询问该状态下的典型行为。例：\n" +
    "- \"How would someone feeling " + word + " likely react?\"\n" +
    "- \"Which behavior best fits a " + word + " state?\"\n\n" +
    "【4 个行为描述选项 — 关键】\n" +
    "🚫 **禁止**是同义词（如 glad/delighted/thrilled/ecstatic）— 那测的是认词不是理解\n" +
    "✅ 必须是**具体的行为、动作、表情、语言**\n" +
    "- 1 个正解：精准符合 " + word + " 的强度和语义\n" +
    "- 3 个干扰：强度不够 / 方向偏离 / 完全无关 — 都是合理但不贴切的行为\n" +
    "每个选项 ≤ 15 英文词，尽量画像化（王者/Taylor/AI 项目等）\n\n" +
    "【参考示例】（学风格，不是学 ecstatic 内容）\n" +
    "{\n" +
    '  "scenario": "Willow\'s tennis team just pulled off a stunning comeback in the regional final.",\n' +
    '  "question": "How would a player feeling ecstatic about this likely react?",\n' +
    '  "options": {\n' +
    '    "A": "Quietly packing her gear and leaving.",\n' +
    '    "B": "Screaming and jumping up and down, arms raised.",\n' +
    '    "C": "Smiling politely to the losing team.",\n' +
    '    "D": "Texting her mom with a thumbs-up emoji."\n' +
    '  },\n' +
    '  "answer": "B",\n' +
    '  "explanation": "ecstatic 是极度狂喜，尖叫跳跃最贴合；其他太克制或方向偏离"\n' +
    "}\n\n" +
    "【输出严格 JSON】\n" +
    '{\n' +
    '  "type": "behavior_match",\n' +
    '  "scenario": "1-2 句画像化场景",\n' +
    '  "question": "询问符合该状态行为的问题（英文）",\n' +
    '  "options": {"A":"行为描述 1","B":"行为描述 2","C":"行为描述 3","D":"行为描述 4"},\n' +
    '  "answer": "正确行为的字母",\n' +
    '  "explanation": "为什么这个行为最符合 ' + word + '（≤40 字，中文）"\n' +
    "}\n\n" +
    "直接输出 JSON，不要 markdown 代码块标记。";
};

// B 搭配型 → 固定搭配填空
// 测的是：是否知道这个词的典型搭配（make/take/pay/do + N，或 + preposition）
// 4 个选项是【搭配候选词】（动词或介词），目标词在句子里给出，让学生选搭配
var buildCollocationFillPrompt = (word) => {
  return "为 \"" + word + "\" 设计【固定搭配填空】题。\n\n" +
    "❗❗【绝对铁律 — 违反则题目无效】❗❗\n" +
    "1. options 4 个候选词 **绝对不能包含 \"" + word + "\" 本身**（包括原形/复数/过去式/ing/任何变体）\n" +
    "2. sentence 必须**明确包含 \"" + word + "\" 原形**，且 ___ 空格在另一个位置\n" +
    "3. 用户要选的是【与 " + word + " 搭配的另一半词】，不是 " + word + " 本身\n" +
    "🚫 错误示范：'Willow had to ___ the project' + options[abandon, pursue, embrace, review] —— 这就是把目标词放选项里，闭眼可选\n" +
    "✅ 正确做法：'Willow had to abandon ___ the project' + options[in, on, of, at] 或类似搭配介词/补语\n" +
    "或：'Willow refused to ___ abandon her plan' + options[completely, suddenly, totally, instantly] 选副词搭配\n\n" +
    "【任务】场景 + 一句带空格的英文 + 4 个搭配候选，测学生是否掌握 \"" + word + "\" 的典型搭配（动词搭配/介词搭配/副词搭配/常见宾语等）。\n\n" +
    "【场景】1 句画像化（用学生兴趣/朋友/日常），引出需要用 \"" + word + "\" 表达的情境。\n\n" +
    "【句子】1 句完整英文，**必须明示出现 \"" + word + "\" 原形** + 1 个空格 ___ 给搭配候选\n" +
    "空格处填的是【与 " + word + " 搭配的另一半】（动词/介词/副词/宾语名词），不是 " + word + " 本身\n\n" +
    "【4 个搭配选项 — 关键】\n" +
    "✅ 1 个正解：" + word + " 真正的固定/常用搭配的【另一半】\n" +
    "✅ 3 个干扰：合理但跟 \"" + word + "\" 搭起来不地道的【其他词】\n" +
    "🚫 严禁选项里出现 \"" + word + "\" 或它的任何词形变化\n\n" +
    "【参考示例 1】（动词搭配 — 学风格）\n" +
    "{\n" +
    '  "scenario": "Willow\'s tennis coach is retiring after 20 years; the team plans a ceremony.",\n' +
    '  "sentence": "The team decided to ___ tribute to Coach Lee at the farewell party.",\n' +
    '  "options": {"A":"pay","B":"make","C":"do","D":"give"},\n' +
    '  "answer": "A",\n' +
    '  "explanation": "pay tribute to 是固定搭配（致敬/缅怀），其他动词都不与 tribute 搭配"\n' +
    "}\n\n" +
    "【参考示例 2】（宾语搭配 — 适合 abandon/acquire 这类动词）\n" +
    "{\n" +
    '  "scenario": "Willow finally finished a long React project after weeks of debugging.",\n' +
    '  "sentence": "She refused to abandon her ___ even when the bugs seemed endless.",\n' +
    '  "options": {"A":"happiness","B":"hope","C":"breakfast","D":"hairstyle"},\n' +
    '  "answer": "B",\n' +
    '  "explanation": "abandon hope/dream/plan 是常见高频搭配（放弃希望/梦想/计划）；其他词与 abandon 搭起来不自然"\n' +
    "}\n\n" +
    "【输出严格 JSON】\n" +
    '{\n' +
    '  "type": "collocation_fill",\n' +
    '  "scenario": "1 句画像化场景",\n' +
    '  "sentence": "1 句明示含 ' + word + ' 原形 + ___ 的英文",\n' +
    '  "options": {"A":"非 ' + word + ' 的搭配词","B":"...","C":"...","D":"..."},\n' +
    '  "answer": "正确搭配的字母",\n' +
    '  "explanation": "为什么这个搭配最地道（≤40 字，中文，可附其他选项不搭的简短说明）"\n' +
    "}\n\n" +
    "直接输出 JSON，不要 markdown 代码块标记。";
};

// C 词根型 → 词根拆解 + 同根词形变填空
// 测的是：词根理解 + 词性辨析（看场景需要 verb / adj / noun，从 4 个同根词选）
// 4 个选项都是同根词的不同词形，迫使学生理解词根+词缀含义
var buildMorphFillPrompt = (word) => {
  return "为 \"" + word + "\" 设计【词根拆解 + 词形辨析】题。\n\n" +
    "【任务】先简短拆解词根，再给一个场景 + 一句空格句，4 个选项都是【" + word + " 的同根词不同词形】（动词/形容词/名词/副词）。\n\n" +
    "【词根拆解】1 行：用「+」连接前缀 + 词根 + 后缀，每段标含义\n" +
    "例：comprehend → com- (一起) + -prehend (抓住) → 全部抓住 = 理解\n\n" +
    "【场景】1 句画像化（用学生世界），引出需要某种词形的情境\n\n" +
    "【句子】1 句完整英文，留 ___ 给目标词形\n" +
    "句子的【语法位置】决定要哪种词形（need a noun / need a verb / need an adj 等）\n\n" +
    "【4 个选项 — 关键】\n" +
    "✅ 都是 \"" + word + "\" 的同根词形（不同词性或不同前缀）\n" +
    "✅ 1 个正解：词性 + 含义都对\n" +
    "✅ 3 个干扰：词形对但词性错（语法位置不对），或词形对但语义偏移\n\n" +
    "【参考示例】（学风格，不是学 comprehend 内容）\n" +
    "{\n" +
    '  "morph": "com- (一起) + -prehend (抓住) → 全部抓住 = 理解",\n' +
    '  "scenario": "Willow stayed up debugging her React project, but the bug kept reappearing.",\n' +
    '  "sentence": "She just couldn\'t ___ why the same error popped up after every fix.",\n' +
    '  "options": {"A":"comprehend","B":"comprehensive","C":"comprehension","D":"comprehensible"},\n' +
    '  "answer": "A",\n' +
    '  "explanation": "couldn\'t 后接动词原形，A 是 verb；B/D 是 adj，C 是 noun，都不对"\n' +
    "}\n\n" +
    "【输出严格 JSON】\n" +
    '{\n' +
    '  "type": "morph_fill",\n' +
    '  "morph": "前缀 + 词根 + 后缀 → 含义推导",\n' +
    '  "scenario": "1 句画像化场景",\n' +
    '  "sentence": "1 句含 ___ 的英文",\n' +
    '  "options": {"A":"同根词形 1","B":"同根词形 2","C":"同根词形 3","D":"同根词形 4"},\n' +
    '  "answer": "正确词形的字母",\n' +
    '  "explanation": "为什么这个词形对（含语法位置 + 干扰为何不对，≤50 字，中文）"\n' +
    "}\n\n" +
    "直接输出 JSON，不要 markdown 代码块标记。";
};

// D 难记型 → 谐音/画面 → 拼写辨识
// 测的是：谐音和画面记忆是否真正建立 → 能否从相似拼写的"难记词"里锁定目标词
// 4 个选项是发音相近的难记英文词（不告诉是哪个），只给中文/谐音/画面线索
var buildMnemonicFillPrompt = (word) => {
  return "为 \"" + word + "\" 设计【谐音 + 画面 → 拼写辨识】题。\n\n" +
    "❗❗【谐音 hint 质量铁律】❗❗\n" +
    "1. 必须真的【发音相近】 — 把谐音读出来，听感要和英文实际发音类似（不是字面拼字母）\n" +
    "2. 必须【自然好记】 — 像顺口溜或日常短语，不是拗口生造\n" +
    "3. 必须【关联含义】 — 谐音的中文场景应该能联想到词的含义\n" +
    "4. 🚫 严禁不雅、低俗、令人困惑的谐音（如 \"屁头没\"、\"大爷的\" 之类）\n" +
    "5. 🚫 严禁谐音和含义完全脱节（如 epitome 含义 \"典型/缩影\"，谐音 \"爱屁头没\" 既不雅也无关）\n" +
    "6. 如果实在编不出好谐音，宁可改用【画面联想】或【词根拆解】当主线索\n\n" +
    "好谐音示例：\n" +
    "- perpetual: \"陪 pet 永远\" — 发音 pər-PET-chu-əl 接近，宠物陪伴 → 永远\n" +
    "- ambulance: \"俺不能死\" — 发音 AM-byə-ləns 接近，救护车送医 → 不能死\n" +
    "- ephemeral: \"易腐没了\" — ee-FEM-er-əl 接近，易腐 → 短暂的\n\n" +
    "差谐音反例（绝不模仿）：\n" +
    "- epitome: \"爱屁头没\" — 又脏又拗口，和\"典型/缩影\"无任何关联\n" +
    "- 这种情况应该改用画面联想：\"金字塔尖 = 完美典型的 epitome\"\n\n" +
    "【任务】给中文意思 + 谐音/画面线索 + 画面线索，4 个发音相近的英文词，让学生从拼写中辨认 \"" + word + "\"。\n\n" +
    "【中文 hint】1 行核心中文意思（≤10 字）\n" +
    "【谐音 hint】1 行【自然好记 + 关联含义】的中文谐音（如 \"陪 pet 永远\" 对 perpetual）\n" +
    "  如果该词谐音难做或会变成强行/不雅，**就把这一行写成画面联想**（如 \"金字塔尖=典型缩影\" 对 epitome），并保留 imageHint\n" +
    "【画面 hint】1 行场景化画面（≤20 字，结合学生世界）\n\n" +
    "【4 个选项 — 关键】\n" +
    "✅ 1 个正解：" + word + " 本身\n" +
    "✅ 3 个干扰：必须是【与 " + word + " 拼写相近 / 发音相近 / 容易混淆】的真实英文词\n" +
    "  - 同前缀（per- / pre- / pro- / epi- / ambi-）但不同含义的词\n" +
    "  - 同后缀但不同词根的词\n" +
    "  - 拼写差 1-2 字母容易看混的词\n" +
    "🚫 不要选完全不相关、明显不可能的词作干扰\n\n" +
    "【参考示例】（学风格，不是学 perpetual 内容）\n" +
    "{\n" +
    '  "meaningZh": "永久的 / 持续不断的",\n' +
    '  "soundHint": "陪 pet 永远（pər-PET-chu-əl）",\n' +
    '  "imageHint": "刻着爪印的老时钟，永不停摆",\n' +
    '  "options": {"A":"perpetual","B":"perplexed","C":"preposterous","D":"perceptive"},\n' +
    '  "answer": "A",\n' +
    '  "explanation": "perpetual = 永久；perplexed 困惑；preposterous 荒谬；perceptive 敏锐 — 都以 per- 开头但完全不同"\n' +
    "}\n\n" +
    "【输出严格 JSON】\n" +
    '{\n' +
    '  "type": "mnemonic_fill",\n' +
    '  "meaningZh": "中文核心含义 ≤10 字",\n' +
    '  "soundHint": "谐音线索（含发音）",\n' +
    '  "imageHint": "画面线索 ≤20 字",\n' +
    '  "options": {"A":"...","B":"...","C":"...","D":"..."},\n' +
    '  "answer": "正解字母",\n' +
    '  "explanation": "正解+3 个干扰各自含义对比（≤60 字，中文）"\n' +
    "}\n\n" +
    "直接输出 JSON，不要 markdown 代码块标记。";
};

// E 抽象 / F 多义 → 语境契合度选择
// E 类（democracy/paradox/rhetoric）：测理解词的核心概念是否到位
// F 类（run/break）：测能否识别多义中目标义项
// 4 个英文场景句，选最契合 word 核心义/目标义的那个
var buildContextChoicePrompt = (word, wordType) => {
  var isF = wordType === "F";
  var typeNote = isF
    ? "F 类多义词 — 4 个场景里 word 都是真实的英文用法，但只有 1 个用的是【目标义项】（最常用的核心义），另 3 个是其他义项（不算错但不是这次学的核心）。"
    : "E 类抽象词 — 4 个场景都涉及 word 的语义场，但只有 1 个真正契合 word 的【核心定义】，另 3 个偏离或近义而不准。";
  return "为 \"" + word + "\" 设计【语境契合度选择】题。\n\n" +
    "【任务】" + typeNote + "\n\n" +
    "【场景设计】4 个英文场景句（每句 1-2 句，画像化，可融入学生兴趣）\n" +
    "✅ 1 个正解：完美契合 " + word + " 的核心义\n" +
    "✅ 3 个干扰：合理但不贴 — 偏义、近义而非精准、或他义混淆\n" +
    "🚫 不要给明显不相关的句子（那是送分题，无价值）\n\n" +
    "【参考示例 — E 类抽象 democracy】（学风格）\n" +
    "{\n" +
    '  "question": "下面哪个场景最契合 democracy 的核心含义？",\n' +
    '  "options": {\n' +
    '    "A":"The teacher decided who would lead the project without asking the class.",\n' +
    '    "B":"Willow\'s tennis team voted on which tournament to enter; majority chose nationals.",\n' +
    '    "C":"The coach gave strict orders that everyone followed without question.",\n' +
    '    "D":"Two friends quietly agreed on a movie without telling others."\n' +
    '  },\n' +
    '  "answer": "B",\n' +
    '  "explanation": "democracy = 多数人集体决策。B 全员投票按多数 = 民主；A 是独裁，C 是命令，D 是私下协商"\n' +
    "}\n\n" +
    "【参考示例 — F 类多义 run（核心义=经营/运营）】\n" +
    "{\n" +
    '  "question": "下面哪个 run 是【经营/运营】的意思？",\n' +
    '  "options": {\n' +
    '    "A":"She runs three miles every morning before school.",\n' +
    '    "B":"The river runs through the valley toward the ocean.",\n' +
    '    "C":"Willow\'s mom runs a small bakery near Irvine Spectrum.",\n' +
    '    "D":"The new engine runs smoothly even at high speed."\n' +
    '  },\n' +
    '  "answer": "C",\n' +
    '  "explanation": "C = 经营/运营（管理一家面包店）；A 跑步；B 流过；D 运转 — 都是 run 的合法义但不是这次学的"\n' +
    "}\n\n" +
    "【输出严格 JSON】\n" +
    '{\n' +
    '  "type": "context_choice",\n' +
    '  "wordType": "' + wordType + '",\n' +
    '  "question": "下面哪个场景最契合 ' + word + ' 的' + (isF ? '【核心义项】？' : '核心含义？') + '",\n' +
    '  "options": {"A":"完整英文场景","B":"...","C":"...","D":"..."},\n' +
    '  "answer": "正解字母",\n' +
    '  "explanation": "正解为何契合 + 3 个干扰各自偏在哪（≤80 字，中文）"\n' +
    "}\n\n" +
    "直接输出 JSON，不要 markdown 代码块标记。";
};

// Round 4：5 词关卡改为 Speed Match —— 限时词↔含义快速配对
// 比传统填空更快、更紧张，是经典间隔强化技巧（active recall + retrieval pressure）
var buildReviewPrompt = (words) => {
  return "刚学完 5 个词：" + words.join(", ") +
    "\n\n设计【Speed Match 速配】复习关卡。给每个词配一个【极简精准的中文含义】（≤8 字，画像化更佳）。" +
    "\n\n【铁律】" +
    "\n- meaning 必须 ≤8 字，能让学生 1 秒识别匹配" +
    "\n- 5 个 meaning 之间不能有歧义重叠（每个 meaning 只能对应唯一的 word）" +
    "\n- 含义要抓【核心义】，不要泛泛用'重要的/特别的'之类模糊形容" +
    "\n- 画像融入：能用学生熟悉的场景就用（例：'网球训练' 比 '体育锻炼' 好）" +
    "\n\n【参考示例】" +
    "\n{\"type\":\"speed_match\",\"title\":\"⚡ 速配挑战\",\"intro\":\"30 秒内把英文词和中文含义配对！\",\"pairs\":[{\"word\":\"ecstatic\",\"meaning\":\"狂喜的\"},{\"word\":\"nimble\",\"meaning\":\"敏捷的\"},{\"word\":\"oblique\",\"meaning\":\"斜的/拐弯的\"},{\"word\":\"perpetual\",\"meaning\":\"永久不停\"},{\"word\":\"subtle\",\"meaning\":\"微妙细致\"}]}" +
    "\n\n直接输出 JSON：" +
    '{"type":"speed_match","title":"⚡ 速配挑战","intro":"30 秒内把英文词和中文含义配对！","pairs":[{"word":"...","meaning":"≤8 字精准含义"},{"word":"...","meaning":"..."},{"word":"...","meaning":"..."},{"word":"...","meaning":"..."},{"word":"...","meaning":"..."}]}';
};

// 校验 cloze 题目：passage 里不能出现任何答案词（送分题检测）
// 返回 null 如果有效；返回错误原因字符串如果无效
var validateCloze = function(parsed) {
  if (!parsed || !parsed.passage || !Array.isArray(parsed.questions)) return "缺少必要字段";
  if (parsed.questions.length === 0) return "题目为空";
  var passage = String(parsed.passage || "");
  // 去除占位符本身，只检查"非占位符"的部分
  var cleaned = passage.replace(/_{2,}\s*\(\d+\)/g, ""); // 去除 _____(N) 形式
  cleaned = cleaned.replace(/[\*_`]/g, "").toLowerCase(); // 去 markdown + 小写
  // 对每个答案词，生成词形变体，检查是否出现在 passage 非占位符部分
  for (var i = 0; i < parsed.questions.length; i++) {
    var ans = String(parsed.questions[i].answer || "").toLowerCase().trim();
    if (!ans) continue;
    var stem = ans.replace(/e$/, "");
    var variants = [ans, ans + "s", ans + "es", ans + "ed", ans + "ing", ans + "ly", ans + "ion", stem + "ed", stem + "ing"];
    for (var j = 0; j < variants.length; j++) {
      var v = variants[j];
      var re = new RegExp("\\b" + v.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&") + "\\b", "i");
      if (re.test(cleaned)) {
        return "答案词 \"" + ans + "\" 明文出现在 passage 中（变体: " + v + "）";
      }
    }
  }
  // 校验占位符数量是否匹配
  var placeholders = (passage.match(/_{2,}\s*\(\d+\)/g) || []).length;
  if (placeholders !== parsed.questions.length) {
    return "占位符数量(" + placeholders + ")与题目数量(" + parsed.questions.length + ")不匹配";
  }
  return null;
};

// Round 4：SSAT 风格短文 + 每空 4 选项（6-8 年级 SSAT Middle Level 阅读长度）
// 150-180 词比 220-280 更符合 6-8 年级注意力跨度，5 题节奏紧凑
var buildClozePrompt = (words) => {
  return "刚学完的词：" + words.join(", ") +
    "\n\n请写一篇【SSAT 风格】英文短文：150-180 词，叙事性（带场景、人物、转折），深度结合学习画像，让学生像在做真题一样。" +
    "\n\n【铁律 - 必须严格遵守】" +
    "\n1. 短文恰好 5 个空格：_____(1) 到 _____(5)" +
    "\n2. 🚫 5 个答案词（" + words.join(", ") + "）禁止以任何形式明文出现在 passage（含原形/复数/过去式/ing/词根变形/加粗引号等）" +
    "\n3. 只能在占位符位置代表，passage 其他地方提到目标词概念时用同义改述" +
    "\n4. questions 恰好 5 个，每空对应一题" +
    "\n5. 🎯【SSAT 真题标准】每空 **4 个选项**（不是 3 个）：1 答案 + 3 干扰" +
    "\n6. 干扰项设计原则（重要）：" +
    "\n   - 1 个【词性正确但语义偏】（学生能排除部分错误后还要思考）" +
    "\n   - 1 个【近义但语境不贴】（测精准理解）" +
    "\n   - 1 个【完全无关的高频词】（送分项，给基础分）" +
    "\n7. passage 必须有上下文线索（前后句暗示空格的语义），不是纯孤立填空" +
    "\n" +
    "\n【叙事质感】不要写'Willow learned X today'流水账。要写：" +
    "\n- 一个完整的小故事（去打球/参加活动/朋友冲突/项目挑战等）" +
    "\n- 有起承转合（背景 → 事件 → 转折/感受 → 结果）" +
    "\n- 自然嵌入空格（让学生从上下文推理，不是猜词）" +
    "\n" +
    "\n✅ 好例子节选：'Yesterday Willow's tennis match took an unexpected turn. Her opponent, usually _____(1) and predictable, suddenly switched to a sharp slice that...'" +
    "\n（_____(1) 暗示某种性格/打法，前文 'predictable' 给线索）" +
    "\n" +
    "\nIMPORTANT: 直接输出 JSON：\n" +
    '{"title":"短文标题（≤20 字英文，吸引人）","passage":"150-180 词叙事性英文短文，含 _____(1) 到 _____(5)","questions":[{"id":1,"blank":"_____(1)","options":["选项1","选项2","选项3","选项4"],"answer":"正确词","explanation":"为什么选这个词 + 干扰项各自偏在哪"},{"id":2,"blank":"_____(2)","options":["..."],"answer":"...","explanation":"..."},{"id":3,"blank":"_____(3)","options":["..."],"answer":"...","explanation":"..."},{"id":4,"blank":"_____(4)","options":["..."],"answer":"...","explanation":"..."},{"id":5,"blank":"_____(5)","options":["..."],"answer":"...","explanation":"..."}]}';
};

var buildReviewTeachPrompt = (word, learned, reviewCount) => {
  return "单词复习：" + word +
    "\n这是第 " + reviewCount + " 次复习这个词。" +
    "\n之前学过但记忆模糊，需要巩固。" +
    "\n\n请用一个全新的生活场景帮助记忆（不要重复之前例子），要求：" +
    "\n1) 2-3句生动场景（结合学习画像）" +
    "\n2) 一个易混词对比" +
    "\n3) 一个简短记忆口诀" +
    "\n4) 一道**有效的** SSAT 风格选择题（关键：必须真正考察记忆，不能送分）" +
    "\n\n【题目设计铁律 - 必须严格遵守】" +
    "\n❌ 绝对禁止：题干中以任何形式出现目标词 \"" + word + "\"（包括加粗、引号、大小写变体、词根、词形变化）" +
    "\n❌ 绝对禁止：把 \"" + word + "\" 的中文翻译直接放在题干或问题里" +
    "\n✅ 正确做法：出一道【英文语境填空题】或【英文定义选词题】" +
    "\n   - 题干用英文描述一个情景 / 给一个定义 / 空一个关键词" +
    "\n   - 4 个选项都是英文单词（目标词 " + word + " 是正确答案）" +
    "\n   - 3 个干扰项应该是同难度的【易混词】或【形似词】或【同主题近义但不贴切的词】" +
    "\n   - 用户要通过理解情景，从 4 个词里识别出 " + word + " 才是答案" +
    "\n" +
    "\n✅ 好的例子（假设目标词 amorphous）：" +
    "\n   题干: The artist's sculpture was deliberately _____, lacking any recognizable form or symmetry." +
    "\n   A) geometric  B) amorphous  C) symmetrical  D) uniform" +
    "\n   答案: B" +
    "\n   （题干测试\"没有固定形状\"的语义，干扰项都是和形状相关的形容词）" +
    "\n" +
    "\n❌ 坏的例子（绝对不要这样出）：" +
    "\n   题干: The cloud was **amorphous**, spreading everywhere.  ← 题干已经给出了答案词！" +
    "\n   A) Defined  B) Shapeless  C) Solid  D) Bright" +
    "\n   （这题等于送分，用户已经知道在复习 amorphous，直接选它的同义词即可）" +
    "\n" +
    "\n【输出格式 - 严格遵守】" +
    "\n✏️ SSAT 仿真题" +
    "\n[英文题干，不含目标词]" +
    "\nA) 选项词1" +
    "\nB) 选项词2" +
    "\nC) 选项词3" +
    "\nD) 选项词4" +
    "\n答案：X" +
    "\n" +
    "\n输出格式：Markdown，200-250字，朋友聊天语气（但 SSAT 题用标准英文）。";
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

/* ─── Brand: imported from components/BrandNavBar.js ─── */

/* ─── Resilience helpers & API: imported from lib/api.js ─── */

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
    Vocab by Know U. 专注于理解与记忆 · 拼写练习推荐搭配<strong>百词斩</strong>等工具<br/><span style={{fontSize:10,opacity:0.5}}>v3.29</span>
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
          <p style={{margin:"0 0 8px"}}>您在「学习画像」中填写的文字及上传的照片，<strong>仅用于</strong> AI 生成个性化学习内容（例句、讲解、记忆场景），不作任何其他用途。</p>
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
var PRESETS_BY_GOAL = {
  ssat: PRESETS,
  isee: {
    "ISEE 核心词 30": "abstract\naccumulate\nacknowledge\nadversity\nalleviate\nambiguous\nanalyze\nbeneficial\ncomprehensive\nconsequence\ncontribute\nconventional\ncritical\ndemonstrate\ndiverse\nemphasize\nevidence\nflexible\nfundamental\ngenerate\nidentify\ninfluence\ninnovate\njustify\nmaintain\nobserve\nperspective\nsignificant\nstrategy\nvalid",
    "ISEE 阅读词": "allude\ncompelling\ninfer\nnarrative\npersuasive\nsynthesis\nthematic\nunderlying\nconvey\ndepict",
  },
  sat: {
    "SAT 高频 30 词": "ambivalent\nanachronism\naudacious\nbolster\ncandor\nconvivial\ndeference\nenigmatic\nflagrant\ngregarious\nhypothetical\ninherent\njuxtapose\nlethargic\nmeticulous\nnuance\nobstinate\nprecarious\nquandary\nrecalcitrant\nsagacious\ntangible\nubiquitous\nvenerable\nwhimsical\nzealot\npragmatic\nambiguous\nbenevolent\nvolatile",
    "SAT 写作高频": "advocate\nassert\nconcede\ncorroborate\ndelineate\nelaborate\nexemplify\nimplicate\nsubstantiate\nundermine",
  },
  toefl: {
    "TOEFL 学术词 30": "abstract\nacademic\naccess\naccumulate\nachieve\nacknowledge\nadapt\nadequate\nadjacent\nadjust\nadminister\nadvocate\naffect\naggregate\nallocate\nalternative\nambiguous\namend\nanalogy\nanalyze\nannual\nanticipate\napparent\nappend\napproximate\narbitrary\nassess\nassume\nattribute\nbenefit",
    "TOEFL 听力场景词": "faculty\nsyllabus\nhypothesis\nmethodology\nempirical\nqualitative\nquantitative\ndissertation\ncurriculum\nprerequisite",
  },
  ielts: {
    "IELTS 写作词 30": "albeit\nalleviate\naugment\ncategorize\ncircumstance\ncomprise\nconcur\nconsiderable\ncontemporary\ncontrast\nconvene\ncorrelate\ndemonstrate\ndeplete\ndesignate\ndetermine\ndiminish\ndiscrepancy\ndistinct\ndominate\nentail\nenvisage\nerode\nevaluate\nexacerbate\nexhibit\nfluctuate\nhinder\nillustrate\nincidence",
    "IELTS 口语表达词": "absolutely\nactually\nbasically\ncertainly\ndefinitely\nfrankly\ngenerally\nhonestly\noccasionally\nultimately",
  },
};

/* ─── Storage: localStorage ─── */
var SKEY = "vocabspark_v1";         // permanent key — never change this
var SKEY_OLD = "vocabspark_release_2"; // migration source
var CONC_KEY = "vocabspark_concurrency_cap_v1";
/* ─── 本地存储层（统一到 SKEY，不再用独立 key） ─── */
var loadSave = async () => {
  try {
    if (typeof window === "undefined") return null;
    // 一次性迁移：从旧 key 和独立 key 合并到 SKEY
    var oldRaw = localStorage.getItem(SKEY_OLD);
    if (oldRaw) {
      try { var od = JSON.parse(oldRaw); localStorage.setItem(SKEY, JSON.stringify({ schemaVersion: 2, completedWords: [], ...od })); localStorage.removeItem(SKEY_OLD); } catch(e) { console.warn('[loadSave] SKEY_OLD migration failed:', e.message); }
    }
    var r = localStorage.getItem(SKEY);
    var d = r ? JSON.parse(r) : null;
    // 迁移独立 key 到 SKEY（只做一次）
    // 注意：undefined < 2 是 false（NaN 比较），要显式判断 !== 2
    if (d && d.schemaVersion !== 2) {
      try { var ws = localStorage.getItem(WORD_STATUS_KEY); if (ws) { d.wordStatusMap = JSON.parse(ws); localStorage.removeItem(WORD_STATUS_KEY); } } catch(e) { console.warn('[loadSave] wordStatusMap migration failed:', e.message); }
      try { var rd = localStorage.getItem(REVIEW_WORD_DATA_KEY); if (rd) { d.reviewWordData = JSON.parse(rd); localStorage.removeItem(REVIEW_WORD_DATA_KEY); } } catch(e) { console.warn('[loadSave] reviewWordData migration failed:', e.message); }
      d.schemaVersion = 2;
      localStorage.setItem(SKEY, JSON.stringify(d));
    }
    return d;
  } catch(e) { console.warn('[loadSave] failed (returning null):', e.message); return null; }
};
var doSave = async (d) => {
  try {
    if (typeof window === "undefined") return;
    var existing = null;
    try { var raw = localStorage.getItem(SKEY); if (raw) existing = JSON.parse(raw); } catch(e) { console.warn('[doSave] read existing failed:', e.message); }
    var merged = { schemaVersion: 2, completedWords: [], ...(existing || {}), ...d, updatedAt: new Date().toISOString() };
    localStorage.setItem(SKEY, JSON.stringify(merged));
  } catch(e) { console.warn('[doSave] write failed (data may be lost):', e.message); }
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

// P2-9: 识别【教】【连】【用】【练】段，给每段加色条 + 背景区分
// 【用】是 L1.1 后的新命名（替代【练】），保留【练】向后兼容旧缓存数据
var SECTION_STYLES = {
  "教": { color: C.purple, bg: C.purpleLight, icon: "📖" },
  "连": { color: C.gold,   bg: C.goldLight,   icon: "🔗" },
  "用": { color: C.green,  bg: C.greenLight,  icon: "✨" },
  "练": { color: C.green,  bg: C.greenLight,  icon: "✏️" },
};
var Md = ({ text }) => {
  if (!text) return null;
  var lines = text.split("\n");
  var blocks = [];
  var currentSection = null;
  var currentContent = [];
  var flush = function() {
    if (currentContent.length === 0 && !currentSection) return;
    var key = "b" + blocks.length;
    if (currentSection && SECTION_STYLES[currentSection]) {
      var s = SECTION_STYLES[currentSection];
      blocks.push(
        <div key={key} style={{ borderLeft:"3px solid "+s.color, background:s.bg+"55", borderRadius:"0 10px 10px 0", padding:"10px 14px 10px 14px", margin:"14px 0" }}>
          <div style={{ fontWeight:700, fontSize:13, color:s.color, marginBottom:6 }}>{s.icon} 【{currentSection}】</div>
          {currentContent}
        </div>
      );
    } else {
      blocks.push(<div key={key}>{currentContent}</div>);
    }
    currentContent = [];
  };
  lines.forEach(function(line, i) {
    // 检测【X】section 标记
    var m = line.match(/^【([教连练])】\s*$/);
    if (m) {
      flush();
      currentSection = m[1];
      return;
    }
    // 普通行渲染
    if (line.trim() === "---") {
      currentContent.push(<hr key={"hr"+i} style={{ border:"none", height:1, background:C.border, margin:"14px 0" }} />);
    } else if (line.startsWith("### ")) {
      currentContent.push(<div key={"h3"+i} style={{ fontWeight:700, fontSize:15, margin:"14px 0 6px", color:C.teal, display:"flex", alignItems:"flex-end", gap:4 }}><RL text={line.slice(4)} /></div>);
    } else if (line.startsWith("## ")) {
      currentContent.push(<div key={"h2"+i} style={{ fontWeight:700, fontSize:17, margin:"18px 0 8px", color:C.accent, display:"flex", alignItems:"flex-end", gap:4 }}><RL text={line.slice(3)} /></div>);
    } else if (line.trim()) {
      currentContent.push(<div key={"p"+i} style={{ margin:"5px 0", lineHeight:1.85, fontSize:15, display:"flex", alignItems:"flex-end", gap:4 }}><RL text={line} /></div>);
    } else {
      currentContent.push(<div key={"sp"+i} style={{ height:6 }} />);
    }
  });
  flush();
  return blocks;
};

/* ═══ TeachJSON 渲染（Phase 1：统一简洁样式）═══
 * Phase 2 将为每种 method type 做专属视觉组件
 * 当前：所有 method 共用 MethodCard 壳，内部按字段展示列表
 */
// 每种方法的视觉语言：图标 + 名字 + 主题色（避免所有 method 卡看起来一样导致疲劳）
var METHOD_META = {
  root:       { icon: "🧩", name: "词根",       accent: "#7c3aed", bg: "linear-gradient(135deg, #ede9fe 0%, #f5f3ff 60%, #fff 100%)", border: "#c4b5fd" }, // 紫
  mnemonic:   { icon: "🧠", name: "谐音",       accent: "#db2777", bg: "linear-gradient(135deg, #fce7f3 0%, #fdf2f8 60%, #fff 100%)", border: "#f9a8d4" }, // 粉紫
  image:      { icon: "🖼️", name: "画面",       accent: "#0891b2", bg: "linear-gradient(135deg, #cffafe 0%, #ecfeff 60%, #fff 100%)", border: "#67e8f9" }, // 青
  nuance:     { icon: "🔍", name: "近义辨析",   accent: "#ca8a04", bg: "linear-gradient(135deg, #fef9c3 0%, #fffbeb 60%, #fff 100%)", border: "#fde047" }, // 金
  scale:      { icon: "📶", name: "程度光谱",   accent: "#d97706", bg: "linear-gradient(135deg, #fed7aa 0%, #fff7ed 60%, #fff 100%)", border: "#fdba74" }, // 暖橙
  etymology:  { icon: "📖", name: "词源",       accent: "#78716c", bg: "linear-gradient(135deg, #f5f5f4 0%, #fafaf9 60%, #fff 100%)", border: "#d6d3d1" }, // 古风暖灰
  collocation:{ icon: "🔗", name: "搭配",       accent: "#0284c7", bg: "linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 60%, #fff 100%)", border: "#7dd3fc" }, // 海蓝
  antonym:    { icon: "⚖️", name: "反义",       accent: "#6366f1", bg: "linear-gradient(90deg, #fee2e2 0%, #fff 50%, #dbeafe 100%)", border: "#a5b4fc" }, // 红→蓝（视觉对立）
  family:     { icon: "🧬", name: "词性家族",   accent: "#059669", bg: "linear-gradient(135deg, #d1fae5 0%, #ecfdf5 60%, #fff 100%)", border: "#6ee7b7" }, // 翠绿
  microstory: { icon: "🎬", name: "微故事",     accent: "#e11d48", bg: "linear-gradient(135deg, #ffe4e6 0%, #fff1f2 60%, #fff 100%)", border: "#fda4af" }, // 玫瑰
};

var MethodBody = ({ m, accent }) => {
  var c = accent || C.accent;
  switch (m.type) {
    case "root":
      // 词根：积木拼接视觉 — 每个 part 是一块"LEGO"
      return <>
        <div style={{ display:"flex", flexWrap:"wrap", gap:6, alignItems:"center", margin:"4px 0 8px" }}>
          {(m.parts || []).map((p, i) => (
            <React.Fragment key={i}>
              <div style={{
                display:"inline-flex", flexDirection:"column", alignItems:"center",
                padding:"6px 12px",
                background:"#fff", border:"2px solid "+c,
                borderRadius:8, boxShadow:"0 2px 0 "+c,
                minWidth:60, textAlign:"center",
              }}>
                <code style={{ fontWeight:800, color:c, fontSize:14, fontFamily:"'Inter','Menlo',monospace" }}>{p.part}</code>
                <span style={{ fontSize:11, color:C.textSec, marginTop:2 }}>{p.meaning}</span>
              </div>
              {i < (m.parts || []).length - 1 && <span style={{ color:c, fontWeight:700 }}>+</span>}
            </React.Fragment>
          ))}
        </div>
        {m.synthesis && (
          <div style={{ padding:"8px 12px", background:"rgba(255,255,255,0.7)", borderRadius:8, fontSize:14, fontWeight:600, color:C.text }}>
            <span style={{ color:c, marginRight:6 }}>→</span>{m.synthesis}
          </div>
        )}
        {m.anchor && <div style={{ marginTop:6, fontSize:13, color:C.textSec, fontStyle:"italic" }}>💡 {m.anchor}</div>}
      </>;
    case "mnemonic":
      // 谐音：大字突出
      return <>
        <div style={{ fontSize:20, fontWeight:700, color:c, margin:"4px 0 6px", lineHeight:1.3, fontFamily:FONT_DISPLAY }}>
          "{m.soundAlike}"
        </div>
        <div style={{ fontSize:14, color:C.text, margin:"3px 0" }}>→ {m.interpretation}</div>
        {m.anchor && <div style={{ marginTop:6, fontSize:13, color:C.textSec, fontStyle:"italic" }}>💡 {m.anchor}</div>}
      </>;
    case "image":
      // 画面：场景描述用"剧本"风格
      return <>
        <div style={{
          padding:"8px 12px", background:"rgba(255,255,255,0.7)", borderRadius:8,
          fontSize:14.5, fontStyle:"italic", lineHeight:1.6, color:C.text,
          borderLeft:"3px solid "+c,
        }}>
          🎬 {m.scene}
        </div>
        <div style={{ fontSize:14, margin:"6px 0 0" }}><span style={{color:c, fontWeight:700}}>↳</span> {m.mapping}</div>
        {m.anchor && <div style={{ marginTop:6, fontSize:13, color:C.textSec, fontStyle:"italic" }}>💡 {m.anchor}</div>}
      </>;
    case "nuance":
      // 近义辨析：左右双栏对比
      return (
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, margin:"4px 0" }}>
          <div style={{ padding:"10px 12px", background:"rgba(255,255,255,0.85)", borderRadius:8, borderTop:"3px solid "+c }}>
            <div style={{ fontWeight:800, color:c, fontSize:14, marginBottom:4, fontFamily:"'Inter',"+FONT }}>{m.target?.word}</div>
            <div style={{ fontSize:13, color:C.text, lineHeight:1.5 }}>{m.target?.nuance}</div>
          </div>
          <div style={{ padding:"10px 12px", background:"rgba(255,255,255,0.6)", borderRadius:8, borderTop:"3px solid "+C.textSec+"66" }}>
            <div style={{ fontWeight:700, color:C.textSec, fontSize:14, marginBottom:4, fontFamily:"'Inter',"+FONT }}>{m.other?.word}</div>
            <div style={{ fontSize:13, color:C.text, lineHeight:1.5 }}>{m.other?.nuance}</div>
          </div>
        </div>
      );
    case "scale":
      // 程度光谱：用渐变条 + 词标签
      var scaleWords = m.words || [];
      return <>
        {scaleWords.length > 0 && (
          <div style={{ position:"relative", margin:"6px 0 8px" }}>
            <div style={{ height:4, background:"linear-gradient(90deg, "+c+"33 0%, "+c+" 100%)", borderRadius:2, marginBottom:8 }} />
            <div style={{ display:"flex", justifyContent:"space-between", gap:6, flexWrap:"wrap" }}>
              {scaleWords.map((w, i) => (
                <span key={i} style={{
                  padding:"4px 10px",
                  background:"#fff",
                  border:"1.5px solid "+c+"99",
                  borderRadius:999,
                  fontSize:13, fontWeight:700, color:c,
                  fontFamily:"'Inter',"+FONT,
                  boxShadow:"0 1px 2px "+c+"22",
                }}>{w}</span>
              ))}
            </div>
            <div style={{ display:"flex", justifyContent:"space-between", fontSize:10, color:C.textSec, marginTop:4, padding:"0 4px" }}>
              <span>弱</span><span>强</span>
            </div>
          </div>
        )}
        {m.description && <div style={{ fontSize:13, color:C.textSec }}>{m.description}</div>}
      </>;
    case "etymology":
      return <>
        <div style={{ fontSize:13.5, color:C.textSec, margin:"3px 0" }}><strong style={{color:c}}>源自</strong> {m.origin}</div>
        <div style={{ fontSize:14, margin:"6px 0", lineHeight:1.6, fontStyle:"italic" }}>{m.story}</div>
      </>;
    case "collocation":
      return <>
        {(m.items || []).map((it, i) => (
          <div key={i} style={{ fontSize:14, margin:"3px 0", padding:"4px 0" }}>
            <strong style={{ color:c, fontFamily:"'Inter',"+FONT }}>{it.phrase}</strong>
            <span style={{ color:C.textSec, marginLeft:6, fontSize:13 }}>{it.zh}</span>
          </div>
        ))}
      </>;
    case "antonym":
      // 反义：视觉对立
      return (
        <div style={{ display:"flex", alignItems:"center", gap:10, margin:"4px 0", padding:"6px 0" }}>
          <span style={{ fontSize:18, color:c, fontWeight:800 }}>↔</span>
          <div style={{ flex:1 }}>
            <div style={{ fontWeight:800, color:c, fontSize:15, fontFamily:"'Inter',"+FONT }}>{m.opposite}</div>
            <div style={{ fontSize:13, color:C.text, marginTop:2 }}>{m.contrast}</div>
          </div>
        </div>
      );
    case "family":
      return <>
        {(m.members || []).map((member, i) => (
          <div key={i} style={{ display:"flex", alignItems:"baseline", gap:8, fontSize:14, margin:"3px 0" }}>
            <strong style={{ color:c, fontFamily:"'Inter',"+FONT }}>{member.word}</strong>
            <span style={{
              padding:"1px 6px", background:c+"22", color:c,
              borderRadius:4, fontSize:10, fontWeight:700, letterSpacing:"0.05em",
            }}>{member.pos}</span>
            <span style={{ color:C.text }}>{member.meaning}</span>
          </div>
        ))}
      </>;
    case "microstory":
      return <>
        <div style={{ padding:"8px 12px", background:"rgba(255,255,255,0.7)", borderRadius:8, fontSize:14, fontStyle:"italic", lineHeight:1.6, borderLeft:"3px solid "+c }}>
          "{m.scene}"
        </div>
        <div style={{ fontSize:14, margin:"6px 0 0" }}><span style={{color:c, fontWeight:700}}>↳</span> {m.interpretation}</div>
      </>;
    default:
      return <div style={{ fontSize:13, color:C.textSec }}>[未知方法类型: {m.type}]</div>;
  }
};

// MethodCard — 按 method.type 套用差异化主题色（避免视觉疲劳）
// theme prop 是从 wordType 推出的 fallback 主题（暂未深度使用）
var MethodCard = ({ method, theme }) => {
  var meta = METHOD_META[method.type] || { icon:"📝", name:method.type || "方法", accent: C.purple, bg: "#f9f8f5", border: C.border };
  return (
    <div style={{
      marginBottom: 14,
      padding: "12px 14px 14px",
      background: meta.bg,
      borderRadius: 12,
      border: "1px solid " + meta.border,
      boxShadow: "0 1px 3px " + meta.accent + "10, 0 4px 10px " + meta.accent + "08",
    }}>
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        marginBottom: 8,
        padding: "3px 9px",
        background: "rgba(255,255,255,0.7)",
        border: "1px solid " + meta.accent + "33",
        borderRadius: 999,
        fontSize: 11.5,
        fontWeight: 700,
        color: meta.accent,
        letterSpacing: "0.04em",
      }}>
        <span style={{ fontSize: 13, lineHeight: 1 }}>{meta.icon}</span>
        <span>{meta.name}</span>
      </div>
      <MethodBody m={method} accent={meta.accent} />
    </div>
  );
};

// VisualAnchor — 升级为"记忆锚点卡"
// emoji 大字符（48px）+ 衬线字体的锚点文字 + 主题色渐变 + sticky 行为
// 这是 teach 页的视觉记忆核心，应该是页面的"主角"
var VisualAnchorBlock = ({ anchor, theme }) => {
  if (!anchor) return null;
  var t = theme || { accent: "#c46b30", light: "#fdf1e8", border: "#e5c7b0" };
  return (
    <div style={{
      marginBottom: 16,
      padding: "20px 16px 18px",
      background: "linear-gradient(135deg, " + t.light + " 0%, #fff 70%, " + t.light + "55 100%)",
      border: "1.5px solid " + t.border,
      borderRadius: 16,
      textAlign: "center",
      position: "sticky",
      top: 8,
      zIndex: 5,
      boxShadow: "0 4px 16px " + t.accent + "1a, 0 1px 3px " + t.accent + "10",
    }}>
      <div style={{ fontSize: 11, color: t.accent, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 8, opacity: 0.75 }}>
        🎯 记忆锚点
      </div>
      {anchor.emojis && (
        <div style={{ fontSize: 48, lineHeight: 1, letterSpacing: 4, marginBottom: 10, animation: "fadeUp 0.4s ease-out" }}>
          {anchor.emojis}
        </div>
      )}
      <div style={{
        fontSize: 17,
        color: C.text,
        fontWeight: 600,
        fontFamily: FONT_DISPLAY,
        lineHeight: 1.4,
        letterSpacing: "-0.01em",
      }}>
        {anchor.text}
      </div>
    </div>
  );
};

var ConnectBlock = ({ connect }) => {
  if (!connect || !Array.isArray(connect.points) || connect.points.length === 0) return null;
  return (
    <div style={{ marginBottom:12, padding:"10px 12px", background:C.goldLight+"55", borderRadius:10, borderLeft:"3px solid "+C.gold }}>
      <div style={{ fontSize:13, fontWeight:700, color:C.gold, marginBottom:6 }}>
        🔗 对比 {connect.comparedWith}
      </div>
      {connect.points.map((p, i) => (
        <div key={i} style={{ fontSize:14, margin:"3px 0" }}>
          • <strong style={{ color:C.accent }}>{p.word}</strong> = {p.meaning}
        </div>
      ))}
    </div>
  );
};

// Use 区：搭配 + 场景。Phase B 升级：scenarios 改 iMessage 风格对话泡泡
var UseBlock = ({ use }) => {
  if (!use) return null;
  var collocations = Array.isArray(use.collocations) ? use.collocations : [];
  var scenarios = Array.isArray(use.scenarios) ? use.scenarios : [];
  if (collocations.length === 0 && scenarios.length === 0) return null;
  return (
    <div style={{ marginBottom: 14, padding: "14px 14px", background: C.greenLight + "55", borderRadius: 12, border: "1px solid " + C.green + "33" }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: C.green, marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
        ✨ 场景应用
      </div>
      {collocations.length > 0 && (
        <div style={{ marginBottom: scenarios.length > 0 ? 14 : 0 }}>
          <div style={{ fontSize: 11, color: C.textSec, marginBottom: 6, fontWeight: 700, letterSpacing: "0.05em" }}>常见搭配</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {collocations.map((c, i) => (
              <div key={i} style={{
                display: "inline-flex", alignItems: "center", gap: 4,
                padding: "4px 10px",
                background: "#fff",
                border: "1px solid " + C.green + "55",
                borderRadius: 999,
                fontSize: 13,
              }}>
                <strong style={{ color: C.green, fontFamily: "'Inter'," + FONT }}>{c.phrase}</strong>
                <SpeakBtn text={c.phrase} size={16} />
                <span style={{ color: C.textSec, fontSize: 12 }}>{c.zh}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {scenarios.length > 0 && (
        <div>
          <div style={{ fontSize: 11, color: C.textSec, marginBottom: 8, fontWeight: 700, letterSpacing: "0.05em" }}>真实场景</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {scenarios.map((s, i) => (
              <div key={i}>
                {s.sceneZh && (
                  <div style={{ fontSize: 11, color: C.textSec, marginBottom: 4, paddingLeft: 6, fontWeight: 600 }}>
                    📍 {s.sceneZh}
                  </div>
                )}
                {/* iMessage 风格对话泡泡 */}
                <div style={{ display: "flex", alignItems: "flex-end", gap: 6, marginBottom: 4 }}>
                  <div style={{
                    flexShrink: 0,
                    width: 24, height: 24,
                    borderRadius: "50%",
                    background: C.green + "33",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12,
                  }}>
                    💬
                  </div>
                  <div style={{
                    background: "#fff",
                    padding: "8px 12px",
                    borderRadius: "16px 16px 16px 4px",
                    border: "1px solid " + C.green + "44",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                    maxWidth: "85%",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}>
                    <span style={{ fontSize: 14, fontStyle: "italic", color: C.text, fontFamily: "'Inter'," + FONT, lineHeight: 1.5 }}>
                      {s.en}
                    </span>
                    <SpeakBtn text={s.en} size={18} />
                  </div>
                </div>
                {s.zh && (
                  <div style={{ paddingLeft: 36, fontSize: 12, color: C.textSec, fontStyle: "italic" }}>
                    {s.zh}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// 连续学习日历：最近 30 天点亮已学日。强化"不断签"动机（损失厌恶 > 追求收获 2-3×）
// 7 列网格（周日→周六），按真实日历对齐
var StreakCalendar = ({ history, streak, todayDone }) => {
  var doneSet = new Set(history || []);
  var today = new Date();
  // 取最近 35 天（5 周），保证视觉填满
  var days = [];
  for (var i = 34; i >= 0; i--) {
    var d = new Date(today);
    d.setDate(today.getDate() - i);
    var iso = d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,'0') + "-" + String(d.getDate()).padStart(2,'0');
    days.push({ iso: iso, day: d.getDate(), dow: d.getDay(), isToday: i === 0, done: doneSet.has(iso) });
  }
  // 找出第一天是周几，前面补空格
  var firstDow = days[0].dow;
  var paddedDays = [];
  for (var p = 0; p < firstDow; p++) paddedDays.push(null);
  paddedDays = paddedDays.concat(days);
  // 计算这 30 天里实际学习天数
  var activeCount = days.filter(function(d){ return d.done; }).length;
  // milestone 文案
  var milestoneEmoji = streak >= 30 ? "💎" : streak >= 14 ? "⭐" : streak >= 7 ? "🔥" : streak >= 3 ? "🌳" : "🌱";
  var milestoneText = streak >= 30 ? "传奇坚持" : streak >= 14 ? "学霸气质" : streak >= 7 ? "整整一周" : streak >= 3 ? "习惯萌芽" : streak >= 1 ? "起步中" : "今天开始";
  return (
    <div style={{ marginBottom: 14, padding: "14px 16px", background: "linear-gradient(135deg, #fff 0%, "+C.accentLight+"55 100%)", border: "1px solid "+C.border, borderRadius: 12 }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom: 12 }}>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 2 }}>
            🗓️ 学习日历 <span style={{ color: C.textSec, fontWeight: 400, fontSize: 12 }}>· 最近 30 天</span>
          </div>
          <div style={{ fontSize: 11, color: C.textSec }}>
            {activeCount} 天 / 30 天 学习
          </div>
        </div>
        <div style={{ textAlign:"right" }}>
          <div style={{ display:"flex", alignItems:"center", gap:4, justifyContent:"flex-end" }}>
            <span style={{ fontSize: 18 }}>{milestoneEmoji}</span>
            <span style={{ fontSize: 22, fontWeight: 900, color: C.accent, fontFamily: FONT_DISPLAY, lineHeight: 1 }}>{streak || 0}</span>
            <span style={{ fontSize: 11, color: C.textSec, fontWeight: 600 }}>天</span>
          </div>
          <div style={{ fontSize: 10, color: C.textSec, marginTop: 2 }}>{milestoneText}</div>
        </div>
      </div>
      {/* 周标签 */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3, marginBottom: 4 }}>
        {["日","一","二","三","四","五","六"].map(function(w, i){
          return <div key={i} style={{ fontSize: 9, color: C.textSec, textAlign: "center", fontWeight: 600 }}>{w}</div>;
        })}
      </div>
      {/* 日历网格 */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3 }}>
        {paddedDays.map(function(d, i){
          if (!d) return <div key={i} style={{ aspectRatio: "1", borderRadius: 4 }} />;
          var bg = "#f3f0eb";
          var color = C.textSec;
          var border = "1px solid transparent";
          if (d.done) { bg = "linear-gradient(135deg, "+C.accent+" 0%, "+C.gold+" 100%)"; color = "#fff"; }
          if (d.isToday) {
            border = "2px solid " + (d.done ? C.accent : C.gold);
            if (!d.done) bg = "#fff";
          }
          return (
            <div key={i} title={d.iso + (d.done ? " ✓" : "")} style={{
              aspectRatio: "1",
              background: bg,
              borderRadius: 4,
              border: border,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 10, fontWeight: 700,
              color: color,
              fontFamily: "'Inter',"+FONT,
            }}>
              {d.day}
            </div>
          );
        })}
      </div>
      {!todayDone && streak > 0 && (
        <div style={{ marginTop: 10, padding: "8px 12px", background: C.goldLight, border: "1px dashed " + C.gold + "88", borderRadius: 8, fontSize: 12, color: C.gold, fontWeight: 700, textAlign:"center" }}>
          ⚠️ 今天还没学，别让 {streak} 天的 streak 断了！
        </div>
      )}
    </div>
  );
};

// Closing：老师悄悄话折叠卡，默认收起，tap 揭晓 — 增加期待感和"私房话"的亲密感
var ClosingNote = ({ text }) => {
  var [open, setOpen] = useState(false);
  if (!text) return null;
  return (
    <div style={{ margin: "18px 0 4px" }}>
      {!open ? (
        <button onClick={function(){ setOpen(true); }} style={{
          width: "100%",
          padding: "12px 14px",
          background: "linear-gradient(135deg, " + C.tealLight + " 0%, #fff 100%)",
          border: "1.5px dashed " + C.teal + "88",
          borderRadius: 12,
          cursor: "pointer",
          fontFamily: FONT,
          textAlign: "left",
          color: C.teal,
          fontWeight: 700,
          fontSize: 14,
          display: "flex",
          alignItems: "center",
          gap: 8,
          transition: "all 0.2s",
        }}>
          <span style={{ fontSize: 18 }}>💌</span>
          <span style={{ flex: 1 }}>给你的悄悄话（点击展开）</span>
          <span style={{ fontSize: 16, opacity: 0.6 }}>▾</span>
        </button>
      ) : (
        <div style={{
          padding: "14px 16px",
          background: "linear-gradient(135deg, " + C.tealLight + " 0%, #fff 70%, " + C.tealLight + "55 100%)",
          border: "1.5px solid " + C.teal + "55",
          borderRadius: 12,
          boxShadow: "0 2px 8px " + C.teal + "1a",
          animation: "fadeUp 0.3s ease-out",
        }}>
          <div style={{ fontSize: 11, color: C.teal, fontWeight: 700, letterSpacing: "0.08em", marginBottom: 6, opacity: 0.85 }}>
            💌 给你的悄悄话
          </div>
          <div style={{
            fontSize: 14.5,
            lineHeight: 1.8,
            color: C.text,
            fontFamily: FONT_DISPLAY,
            fontStyle: "italic",
            fontWeight: 500,
          }}>
            {text}
          </div>
        </div>
      )}
    </div>
  );
};

var TeachJSON = ({ data, streaming }) => {
  if (!data) return null;
  // 按 wordType 取主题（A/B/C/D/E/F），影响 visualAnchor 和 method 卡的色彩
  var theme = getWordTheme(data.wordType);
  return (
    <div>
      {/* Opening 日记式开场：左侧角色头像 + 右侧 Fraunces 衬线文字，像翻开一本日记 */}
      {data.opening && (
        <div style={{
          display: "flex",
          gap: 12,
          margin: "0 0 18px",
          padding: "14px 14px 14px 12px",
          background: "linear-gradient(135deg, #fef9f3 0%, #fff 60%, #fef9f3 100%)",
          border: "1px solid " + theme.border + "55",
          borderLeft: "4px solid " + theme.accent,
          borderRadius: "4px 14px 14px 4px",
          boxShadow: "0 1px 2px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.04)",
        }}>
          <div style={{
            flexShrink: 0,
            width: 36, height: 36,
            background: theme.light,
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20,
            border: "1.5px solid " + theme.border,
          }}>
            {theme.icon}
          </div>
          <div style={{
            flex: 1,
            fontSize: 14.5,
            lineHeight: 1.75,
            color: C.text,
            fontFamily: FONT_DISPLAY,
            fontWeight: 500,
            letterSpacing: "-0.005em",
            paddingTop: 4,
          }}>
            {data.opening}
          </div>
        </div>
      )}
      {Array.isArray(data.teach?.methods) && data.teach.methods.map((m, i) => (
        <MethodCard key={i} method={m} theme={theme} />
      ))}
      {data.teach?.visualAnchor && <VisualAnchorBlock anchor={data.teach.visualAnchor} theme={theme} />}
      {data.connect && <ConnectBlock connect={data.connect} />}
      {data.use && <UseBlock use={data.use} />}
      {data.closing && <ClosingNote text={data.closing} />}
      {streaming && (
        <span style={{ display:"inline-block", width:8, height:16, background:C.accent, marginLeft:2, verticalAlign:"-2px", animation:"cursorBlink 0.9s steps(1) infinite" }} aria-hidden="true" />
      )}
    </div>
  );
};

/* ═══ Phase 2 Output Games — 按词型路由的独立玩法组件 ═══
 * Round 1.5: behavior_match (A 程度词 — 行为一致性判断)
 * Round 2-4: collocation_fill / morph_fill / mnemonic_fill / context_choice
 */

// A 程度词 → 行为一致性判断
// 场景 + 问题 + 4 个行为描述（不是同义词），测使用感
var BehaviorMatchGame = ({ data, onCorrect, onNext, sfx, loading, nextLabel }) => {
  var [selected, setSelected] = useState(null);
  var [submitted, setSubmitted] = useState(false);
  if (!data) return null;
  var isCorrect = submitted && selected === data.answer;
  var optKeys = ["A","B","C","D"];

  return (
    <>
      <div style={S.specTag}>🎭 行为匹配</div>
      <div style={{ fontSize:13, color:C.textSec, marginBottom:10 }}>判断哪个行为最符合这个词的使用场景</div>
      {/* 场景卡 */}
      <div style={{
        padding:"12px 14px", marginBottom:12, background:C.bg,
        borderLeft:"3px solid "+C.accent, borderRadius:"0 10px 10px 0",
        fontSize:15, lineHeight:1.7, color:C.text
      }}>
        {data.scenario}
      </div>
      {/* 问题 */}
      {data.question && (
        <div style={{ fontWeight:700, fontSize:15, marginBottom:12, color:C.text, padding:"0 2px" }}>
          {data.question}
        </div>
      )}
      {/* 4 个选项（行为描述 — 长度较长） */}
      <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:14 }}>
        {optKeys.map(function(k){
          var option = data.options?.[k] || "";
          var isSel = selected === k;
          var isAns = k === data.answer;
          var bg = C.bg, bdr = C.border, clr = C.text, shadow = "none";
          if (submitted) {
            if (isAns) { bg = C.greenLight; bdr = C.green; clr = C.green; shadow = "0 0 0 2px "+C.green+"33"; }
            else if (isSel) { bg = C.redLight; bdr = C.red; clr = C.red; shadow = "0 0 0 2px "+C.red+"33"; }
            else { bg = C.bg; bdr = C.border; clr = C.textSec; }
          } else if (isSel) {
            bg = C.accentLight; bdr = C.accent; clr = C.accent; shadow = "0 0 0 2px "+C.accent+"33";
          }
          return (
            <button
              key={k}
              disabled={submitted}
              onClick={function(){ if (!submitted) setSelected(k); }}
              style={{
                display:"flex", alignItems:"flex-start", gap:10,
                padding:"12px 14px",
                background: bg, border:"2px solid "+bdr, borderRadius:10,
                cursor: submitted ? "default" : "pointer",
                color: clr, fontWeight:500, textAlign:"left",
                fontSize:14, lineHeight:1.5, transition:"all 0.2s", boxShadow: shadow,
                fontFamily: FONT
              }}
            >
              <span style={{
                display:"inline-flex", alignItems:"center", justifyContent:"center",
                width:24, height:24, borderRadius:"50%",
                background: clr+"22", color: clr, fontSize:12, fontWeight:700,
                flexShrink:0, marginTop:1
              }}>{k}</span>
              <span style={{ flex:1, fontFamily:"'Inter',"+FONT }}>{option}</span>
              {submitted && isAns && <span style={{ color:C.green, fontWeight:700, marginLeft:4 }}>✓</span>}
              {submitted && isSel && !isAns && <span style={{ color:C.red, fontWeight:700, marginLeft:4 }}>✗</span>}
            </button>
          );
        })}
      </div>
      {/* 提交按钮 / 解析 */}
      {!submitted && (
        <button
          onClick={function(){
            if (!selected) return;
            setSubmitted(true);
            if (selected === data.answer) {
              if (sfx?.spectrumWin) sfx.spectrumWin();
              if (onCorrect) onCorrect();
            } else if (sfx?.spectrumFail) sfx.spectrumFail();
          }}
          disabled={!selected}
          style={{
            ...S.specCheckBtn,
            opacity: selected ? 1 : 0.5,
            cursor: selected ? "pointer" : "not-allowed"
          }}
        >✓ 提交答案</button>
      )}
      {submitted && (
        <div style={{ ...S.specDecoded, marginTop:4 }}>
          <div style={{ color: isCorrect ? C.green : C.gold, fontWeight:700, marginBottom:8 }}>
            {isCorrect ? "✓ 正确！+10 XP" : "💛 差一点！答案是 "+data.answer+" — 这个词会在复习里再见你"}
          </div>
          {data.explanation && (
            <div style={{ lineHeight:1.7, fontSize:14, color:C.text }}>{data.explanation}</div>
          )}
          <button
            onClick={onNext}
            disabled={loading}
            style={{
              ...S.specCheckBtn, marginTop:16,
              background:"linear-gradient(135deg, "+C.green+" 0%, #2eb67a 100%)",
              boxShadow:"0 4px 12px "+C.green+"55"
            }}
          >{nextLabel || "→ 下一个词"}</button>
        </div>
      )}
    </>
  );
};

// B 搭配型 → 固定搭配填空
// scenario + sentence (含 ___) + 4 个搭配候选
var CollocationFillGame = ({ data, onCorrect, onNext, sfx, loading, nextLabel }) => {
  var [selected, setSelected] = useState(null);
  var [submitted, setSubmitted] = useState(false);
  if (!data) return null;
  var isCorrect = submitted && selected === data.answer;
  var optKeys = ["A","B","C","D"];
  // 把 ___ 替换为高亮的填空标记，让所选选项动态嵌入
  var renderSentence = function() {
    var s = data.sentence || "";
    var parts = s.split(/_{2,}/);
    if (parts.length < 2) return <span>{s}</span>;
    var fill = selected ? data.options?.[selected] : "______";
    var fillColor = !submitted ? C.accent : (selected === data.answer ? C.green : C.red);
    return <span>{parts[0]}<span style={{ display:"inline-block", padding:"0 8px", background:fillColor+"22", color:fillColor, borderRadius:6, fontWeight:700, minWidth:60, textAlign:"center" }}>{fill}</span>{parts.slice(1).join("___")}</span>;
  };
  return (
    <>
      <div style={S.specTag}>🔗 固定搭配</div>
      <div style={{ fontSize:13, color:C.textSec, marginBottom:10 }}>选出最地道的搭配填进句子</div>
      <div style={{ padding:"12px 14px", marginBottom:12, background:C.bg, borderLeft:"3px solid "+C.teal, borderRadius:"0 10px 10px 0", fontSize:14, lineHeight:1.7, color:C.text }}>
        {data.scenario}
      </div>
      <div style={{ padding:"14px 14px", marginBottom:14, background:C.tealLight, border:"1px solid "+C.teal+"33", borderRadius:10, fontSize:16, lineHeight:1.9, color:C.text, fontFamily:"'Inter',"+FONT }}>
        {renderSentence()}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:14 }}>
        {optKeys.map(function(k){
          var option = data.options?.[k] || "";
          var isSel = selected === k;
          var isAns = k === data.answer;
          var bg = C.bg, bdr = C.border, clr = C.text, shadow = "none";
          if (submitted) {
            if (isAns) { bg = C.greenLight; bdr = C.green; clr = C.green; shadow = "0 0 0 2px "+C.green+"33"; }
            else if (isSel) { bg = C.redLight; bdr = C.red; clr = C.red; shadow = "0 0 0 2px "+C.red+"33"; }
            else { bg = C.bg; bdr = C.border; clr = C.textSec; }
          } else if (isSel) { bg = C.accentLight; bdr = C.accent; clr = C.accent; shadow = "0 0 0 2px "+C.accent+"33"; }
          return (
            <button key={k} disabled={submitted} onClick={function(){ if (!submitted) setSelected(k); }} style={{ display:"flex", alignItems:"center", gap:8, padding:"12px 14px", background:bg, border:"2px solid "+bdr, borderRadius:10, cursor:submitted?"default":"pointer", color:clr, fontWeight:600, textAlign:"left", fontSize:15, transition:"all 0.2s", boxShadow:shadow, fontFamily:"'Inter',"+FONT }}>
              <span style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:24, height:24, borderRadius:"50%", background:clr+"22", color:clr, fontSize:12, fontWeight:700, flexShrink:0 }}>{k}</span>
              <span style={{ flex:1 }}>{option}</span>
              {submitted && isAns && <span style={{ color:C.green, fontWeight:700 }}>✓</span>}
              {submitted && isSel && !isAns && <span style={{ color:C.red, fontWeight:700 }}>✗</span>}
            </button>
          );
        })}
      </div>
      {!submitted && (
        <button onClick={function(){
          if (!selected) return;
          setSubmitted(true);
          if (selected === data.answer) { if (sfx?.spectrumWin) sfx.spectrumWin(); if (onCorrect) onCorrect(); }
          else if (sfx?.spectrumFail) sfx.spectrumFail();
        }} disabled={!selected} style={{ ...S.specCheckBtn, opacity:selected?1:0.5, cursor:selected?"pointer":"not-allowed" }}>✓ 提交答案</button>
      )}
      {submitted && (
        <div style={{ ...S.specDecoded, marginTop:4 }}>
          <div style={{ color:isCorrect?C.green:C.gold, fontWeight:700, marginBottom:8 }}>{isCorrect?"✓ 正确！+10 XP":"💛 差一点！答案是 "+data.answer+" — 这个词会在复习里再见你"}</div>
          {data.explanation && <div style={{ lineHeight:1.7, fontSize:14, color:C.text }}>{data.explanation}</div>}
          <button onClick={onNext} disabled={loading} style={{ ...S.specCheckBtn, marginTop:16, background:"linear-gradient(135deg, "+C.green+" 0%, #2eb67a 100%)", boxShadow:"0 4px 12px "+C.green+"55" }}>{nextLabel || "→ 下一个词"}</button>
        </div>
      )}
    </>
  );
};

// C 词根型 → 词根拆解 + 词形辨析
// morph card + scenario + sentence (含 ___) + 4 个同根词形候选
var MorphFillGame = ({ data, onCorrect, onNext, sfx, loading, nextLabel }) => {
  var [selected, setSelected] = useState(null);
  var [submitted, setSubmitted] = useState(false);
  if (!data) return null;
  var isCorrect = submitted && selected === data.answer;
  var optKeys = ["A","B","C","D"];
  var renderSentence = function() {
    var s = data.sentence || "";
    var parts = s.split(/_{2,}/);
    if (parts.length < 2) return <span>{s}</span>;
    var fill = selected ? data.options?.[selected] : "______";
    var fillColor = !submitted ? C.accent : (selected === data.answer ? C.green : C.red);
    return <span>{parts[0]}<span style={{ display:"inline-block", padding:"0 8px", background:fillColor+"22", color:fillColor, borderRadius:6, fontWeight:700, minWidth:80, textAlign:"center" }}>{fill}</span>{parts.slice(1).join("___")}</span>;
  };
  return (
    <>
      <div style={S.specTag}>🧬 词根拆解</div>
      <div style={{ fontSize:13, color:C.textSec, marginBottom:10 }}>看词根理解，选对词形填空</div>
      {data.morph && (
        <div style={{ padding:"12px 14px", marginBottom:12, background:C.purpleLight, border:"1px solid "+C.purple+"44", borderRadius:10, fontSize:14.5, lineHeight:1.7, color:C.text, fontFamily:"'Inter',"+FONT, fontWeight:600 }}>
          🧬 {data.morph}
        </div>
      )}
      <div style={{ padding:"12px 14px", marginBottom:12, background:C.bg, borderLeft:"3px solid "+C.teal, borderRadius:"0 10px 10px 0", fontSize:14, lineHeight:1.7, color:C.text }}>
        {data.scenario}
      </div>
      <div style={{ padding:"14px 14px", marginBottom:14, background:C.tealLight, border:"1px solid "+C.teal+"33", borderRadius:10, fontSize:16, lineHeight:1.9, color:C.text, fontFamily:"'Inter',"+FONT }}>
        {renderSentence()}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:14 }}>
        {optKeys.map(function(k){
          var option = data.options?.[k] || "";
          var isSel = selected === k;
          var isAns = k === data.answer;
          var bg = C.bg, bdr = C.border, clr = C.text, shadow = "none";
          if (submitted) {
            if (isAns) { bg = C.greenLight; bdr = C.green; clr = C.green; shadow = "0 0 0 2px "+C.green+"33"; }
            else if (isSel) { bg = C.redLight; bdr = C.red; clr = C.red; shadow = "0 0 0 2px "+C.red+"33"; }
            else { bg = C.bg; bdr = C.border; clr = C.textSec; }
          } else if (isSel) { bg = C.accentLight; bdr = C.accent; clr = C.accent; shadow = "0 0 0 2px "+C.accent+"33"; }
          return (
            <button key={k} disabled={submitted} onClick={function(){ if (!submitted) setSelected(k); }} style={{ display:"flex", alignItems:"center", gap:8, padding:"12px 14px", background:bg, border:"2px solid "+bdr, borderRadius:10, cursor:submitted?"default":"pointer", color:clr, fontWeight:600, textAlign:"left", fontSize:14, transition:"all 0.2s", boxShadow:shadow, fontFamily:"'Inter',"+FONT }}>
              <span style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:24, height:24, borderRadius:"50%", background:clr+"22", color:clr, fontSize:12, fontWeight:700, flexShrink:0 }}>{k}</span>
              <span style={{ flex:1, wordBreak:"break-word" }}>{option}</span>
              {submitted && isAns && <span style={{ color:C.green, fontWeight:700 }}>✓</span>}
              {submitted && isSel && !isAns && <span style={{ color:C.red, fontWeight:700 }}>✗</span>}
            </button>
          );
        })}
      </div>
      {!submitted && (
        <button onClick={function(){
          if (!selected) return;
          setSubmitted(true);
          if (selected === data.answer) { if (sfx?.spectrumWin) sfx.spectrumWin(); if (onCorrect) onCorrect(); }
          else if (sfx?.spectrumFail) sfx.spectrumFail();
        }} disabled={!selected} style={{ ...S.specCheckBtn, opacity:selected?1:0.5, cursor:selected?"pointer":"not-allowed" }}>✓ 提交答案</button>
      )}
      {submitted && (
        <div style={{ ...S.specDecoded, marginTop:4 }}>
          <div style={{ color:isCorrect?C.green:C.gold, fontWeight:700, marginBottom:8 }}>{isCorrect?"✓ 正确！+10 XP":"💛 差一点！答案是 "+data.answer+" — 这个词会在复习里再见你"}</div>
          {data.explanation && <div style={{ lineHeight:1.7, fontSize:14, color:C.text }}>{data.explanation}</div>}
          <button onClick={onNext} disabled={loading} style={{ ...S.specCheckBtn, marginTop:16, background:"linear-gradient(135deg, "+C.green+" 0%, #2eb67a 100%)", boxShadow:"0 4px 12px "+C.green+"55" }}>{nextLabel || "→ 下一个词"}</button>
        </div>
      )}
    </>
  );
};

// D 难记型 → 谐音 + 画面 → 拼写辨识
// meaningZh + soundHint + imageHint + 4 个相似拼写候选
var MnemonicFillGame = ({ data, onCorrect, onNext, sfx, loading, nextLabel }) => {
  var [selected, setSelected] = useState(null);
  var [submitted, setSubmitted] = useState(false);
  if (!data) return null;
  var isCorrect = submitted && selected === data.answer;
  var optKeys = ["A","B","C","D"];
  return (
    <>
      <div style={S.specTag}>🧠 谐音辨认</div>
      <div style={{ fontSize:13, color:C.textSec, marginBottom:10 }}>看线索，从 4 个相似拼写中找到目标词</div>
      {/* 三条线索卡 */}
      <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:14 }}>
        {data.meaningZh && (
          <div style={{ padding:"10px 12px", background:C.accentLight, border:"1px solid "+C.accent+"33", borderRadius:10, fontSize:14, color:C.text }}>
            <span style={{ fontWeight:700, color:C.accent, marginRight:6 }}>含义</span>{data.meaningZh}
          </div>
        )}
        {data.soundHint && (
          <div style={{ padding:"10px 12px", background:C.purpleLight, border:"1px solid "+C.purple+"44", borderRadius:10, fontSize:14, color:C.text, fontFamily:"'Inter',"+FONT }}>
            <span style={{ fontWeight:700, color:C.purple, marginRight:6 }}>谐音</span>{data.soundHint}
          </div>
        )}
        {data.imageHint && (
          <div style={{ padding:"10px 12px", background:C.tealLight, border:"1px solid "+C.teal+"33", borderRadius:10, fontSize:14, color:C.text }}>
            <span style={{ fontWeight:700, color:C.teal, marginRight:6 }}>画面</span>{data.imageHint}
          </div>
        )}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:14 }}>
        {optKeys.map(function(k){
          var option = data.options?.[k] || "";
          var isSel = selected === k;
          var isAns = k === data.answer;
          var bg = C.bg, bdr = C.border, clr = C.text, shadow = "none";
          if (submitted) {
            if (isAns) { bg = C.greenLight; bdr = C.green; clr = C.green; shadow = "0 0 0 2px "+C.green+"33"; }
            else if (isSel) { bg = C.redLight; bdr = C.red; clr = C.red; shadow = "0 0 0 2px "+C.red+"33"; }
            else { bg = C.bg; bdr = C.border; clr = C.textSec; }
          } else if (isSel) { bg = C.accentLight; bdr = C.accent; clr = C.accent; shadow = "0 0 0 2px "+C.accent+"33"; }
          return (
            <button key={k} disabled={submitted} onClick={function(){ if (!submitted) setSelected(k); }} style={{ display:"flex", alignItems:"center", gap:8, padding:"14px 14px", background:bg, border:"2px solid "+bdr, borderRadius:10, cursor:submitted?"default":"pointer", color:clr, fontWeight:700, textAlign:"left", fontSize:15, transition:"all 0.2s", boxShadow:shadow, fontFamily:"'Inter',"+FONT }}>
              <span style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:24, height:24, borderRadius:"50%", background:clr+"22", color:clr, fontSize:12, fontWeight:700, flexShrink:0 }}>{k}</span>
              <span style={{ flex:1, wordBreak:"break-word" }}>{option}</span>
              {submitted && isAns && <span style={{ color:C.green, fontWeight:700 }}>✓</span>}
              {submitted && isSel && !isAns && <span style={{ color:C.red, fontWeight:700 }}>✗</span>}
            </button>
          );
        })}
      </div>
      {!submitted && (
        <button onClick={function(){
          if (!selected) return;
          setSubmitted(true);
          if (selected === data.answer) { if (sfx?.spectrumWin) sfx.spectrumWin(); if (onCorrect) onCorrect(); }
          else if (sfx?.spectrumFail) sfx.spectrumFail();
        }} disabled={!selected} style={{ ...S.specCheckBtn, opacity:selected?1:0.5, cursor:selected?"pointer":"not-allowed" }}>✓ 提交答案</button>
      )}
      {submitted && (
        <div style={{ ...S.specDecoded, marginTop:4 }}>
          <div style={{ color:isCorrect?C.green:C.gold, fontWeight:700, marginBottom:8 }}>{isCorrect?"✓ 正确！+10 XP":"💛 差一点！答案是 "+data.answer+" — 这个词会在复习里再见你"}</div>
          {data.explanation && <div style={{ lineHeight:1.7, fontSize:14, color:C.text }}>{data.explanation}</div>}
          <button onClick={onNext} disabled={loading} style={{ ...S.specCheckBtn, marginTop:16, background:"linear-gradient(135deg, "+C.green+" 0%, #2eb67a 100%)", boxShadow:"0 4px 12px "+C.green+"55" }}>{nextLabel || "→ 下一个词"}</button>
        </div>
      )}
    </>
  );
};

// E 抽象 / F 多义 → 语境契合度选择
// question + 4 个完整英文场景，选最契合目标词核心义/目标义的那个
var ContextChoiceGame = ({ data, onCorrect, onNext, sfx, loading, nextLabel }) => {
  var [selected, setSelected] = useState(null);
  var [submitted, setSubmitted] = useState(false);
  if (!data) return null;
  var isCorrect = submitted && selected === data.answer;
  var optKeys = ["A","B","C","D"];
  var isF = data.wordType === "F";
  return (
    <>
      <div style={S.specTag}>{isF ? "🎯 义项辨别" : "🌐 语境契合"}</div>
      <div style={{ fontSize:13, color:C.textSec, marginBottom:10 }}>{isF ? "从 4 个不同义项里找出目标义" : "判断哪个语境最契合这个词"}</div>
      {data.question && (
        <div style={{ fontWeight:700, fontSize:15, marginBottom:12, color:C.text, padding:"10px 12px", background:C.bg, borderLeft:"3px solid "+C.accent, borderRadius:"0 10px 10px 0" }}>
          {data.question}
        </div>
      )}
      <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:14 }}>
        {optKeys.map(function(k){
          var option = data.options?.[k] || "";
          var isSel = selected === k;
          var isAns = k === data.answer;
          var bg = C.bg, bdr = C.border, clr = C.text, shadow = "none";
          if (submitted) {
            if (isAns) { bg = C.greenLight; bdr = C.green; clr = C.green; shadow = "0 0 0 2px "+C.green+"33"; }
            else if (isSel) { bg = C.redLight; bdr = C.red; clr = C.red; shadow = "0 0 0 2px "+C.red+"33"; }
            else { bg = C.bg; bdr = C.border; clr = C.textSec; }
          } else if (isSel) { bg = C.accentLight; bdr = C.accent; clr = C.accent; shadow = "0 0 0 2px "+C.accent+"33"; }
          return (
            <button key={k} disabled={submitted} onClick={function(){ if (!submitted) setSelected(k); }} style={{ display:"flex", alignItems:"flex-start", gap:10, padding:"12px 14px", background:bg, border:"2px solid "+bdr, borderRadius:10, cursor:submitted?"default":"pointer", color:clr, fontWeight:500, textAlign:"left", fontSize:14, lineHeight:1.5, transition:"all 0.2s", boxShadow:shadow, fontFamily:FONT }}>
              <span style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", width:24, height:24, borderRadius:"50%", background:clr+"22", color:clr, fontSize:12, fontWeight:700, flexShrink:0, marginTop:1 }}>{k}</span>
              <span style={{ flex:1, fontFamily:"'Inter',"+FONT }}>{option}</span>
              {submitted && isAns && <span style={{ color:C.green, fontWeight:700, marginLeft:4 }}>✓</span>}
              {submitted && isSel && !isAns && <span style={{ color:C.red, fontWeight:700, marginLeft:4 }}>✗</span>}
            </button>
          );
        })}
      </div>
      {!submitted && (
        <button onClick={function(){
          if (!selected) return;
          setSubmitted(true);
          if (selected === data.answer) { if (sfx?.spectrumWin) sfx.spectrumWin(); if (onCorrect) onCorrect(); }
          else if (sfx?.spectrumFail) sfx.spectrumFail();
        }} disabled={!selected} style={{ ...S.specCheckBtn, opacity:selected?1:0.5, cursor:selected?"pointer":"not-allowed" }}>✓ 提交答案</button>
      )}
      {submitted && (
        <div style={{ ...S.specDecoded, marginTop:4 }}>
          <div style={{ color:isCorrect?C.green:C.gold, fontWeight:700, marginBottom:8 }}>{isCorrect?"✓ 正确！+10 XP":"💛 差一点！答案是 "+data.answer+" — 这个词会在复习里再见你"}</div>
          {data.explanation && <div style={{ lineHeight:1.7, fontSize:14, color:C.text }}>{data.explanation}</div>}
          <button onClick={onNext} disabled={loading} style={{ ...S.specCheckBtn, marginTop:16, background:"linear-gradient(135deg, "+C.green+" 0%, #2eb67a 100%)", boxShadow:"0 4px 12px "+C.green+"55" }}>{nextLabel || "→ 下一个词"}</button>
        </div>
      )}
    </>
  );
};

// Round 4：Speed Match 速配 —— 5 词关卡升级
// 限时 30s 把 5 个英文词配对到对应中文含义，错配 -2s 惩罚
// 设计参考 Quizlet Match Mode：retrieval pressure + 即时反馈 = 强化短期记忆
var SpeedMatchGame = ({ data, onCorrect, onNext, sfx, loading, nextLabel }) => {
  var [matched, setMatched] = useState({}); // { word: meaning }
  var [selectedWord, setSelectedWord] = useState(null);
  var [selectedMeaning, setSelectedMeaning] = useState(null);
  var [wrongFlash, setWrongFlash] = useState(null); // {word,meaning} for red flash
  var [secondsLeft, setSecondsLeft] = useState(30);
  var [done, setDone] = useState(false);
  var [score, setScore] = useState(0);
  var startedRef = useRef(false);
  var pairs = data?.pairs || [];
  var total = pairs.length;
  // 打乱 meaning 顺序（不打乱 word 顺序，让用户专注配对而非搜索）
  var meaningOrderRef = useRef(null);
  if (meaningOrderRef.current === null && pairs.length) {
    var shuffled = pairs.map(function(p){ return p.meaning; });
    for (var i = shuffled.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = shuffled[i]; shuffled[i] = shuffled[j]; shuffled[j] = t;
    }
    meaningOrderRef.current = shuffled;
  }
  var meaningOrder = meaningOrderRef.current || [];

  // 倒计时
  useEffect(function(){
    if (done || !data) return;
    if (!startedRef.current) startedRef.current = true;
    if (secondsLeft <= 0) { setDone(true); return; }
    var t = setTimeout(function(){ setSecondsLeft(function(s){ return s - 1; }); }, 1000);
    return function(){ clearTimeout(t); };
  }, [secondsLeft, done, data]);

  // 全部配完 → 完成
  useEffect(function(){
    if (Object.keys(matched).length === total && total > 0 && !done) {
      setDone(true);
      var finalScore = total * 10 + Math.max(0, secondsLeft) * 2;
      setScore(finalScore);
      if (sfx?.correct) sfx.correct();
      if (onCorrect) onCorrect(finalScore);
    }
  }, [matched, total, done]);

  // 用户选 word + meaning 后判断
  useEffect(function(){
    if (!selectedWord || !selectedMeaning) return;
    var correctMeaning = pairs.find(function(p){ return p.word === selectedWord; })?.meaning;
    if (correctMeaning === selectedMeaning) {
      // 配对成功
      setMatched(function(prev){ var next = { ...prev }; next[selectedWord] = selectedMeaning; return next; });
      if (sfx?.click) sfx.click();
      setSelectedWord(null);
      setSelectedMeaning(null);
    } else {
      // 错配：闪红 + 倒计时 -2s
      setWrongFlash({ word: selectedWord, meaning: selectedMeaning });
      if (sfx?.wrong) sfx.wrong();
      setSecondsLeft(function(s){ return Math.max(0, s - 2); });
      setTimeout(function(){
        setWrongFlash(null);
        setSelectedWord(null);
        setSelectedMeaning(null);
      }, 400);
    }
  }, [selectedWord, selectedMeaning]);

  if (!data) return null;
  var matchedCount = Object.keys(matched).length;
  var pct = total ? Math.round(matchedCount / total * 100) : 0;
  var timerColor = secondsLeft > 15 ? C.green : secondsLeft > 5 ? C.gold : C.red;

  return (
    <>
      <div style={{...S.tag, background:C.purpleLight, color:C.purple, marginBottom:8}}>{data.title || "⚡ 速配挑战"}</div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12, fontSize:13, color:C.textSec }}>
        <div>{data.intro || "把英文词和中文含义配对"}</div>
        <div style={{ display:"flex", gap:14, alignItems:"center" }}>
          <span>已配 <strong style={{color:C.green}}>{matchedCount}</strong>/{total}</span>
          <span style={{ padding:"4px 10px", background:timerColor+"22", color:timerColor, borderRadius:8, fontWeight:700, fontFamily:"'Inter',"+FONT, minWidth:40, textAlign:"center" }}>⏱ {secondsLeft}s</span>
        </div>
      </div>
      {/* 进度条 */}
      <div style={{ height:6, background:C.border, borderRadius:3, overflow:"hidden", marginBottom:14 }}>
        <div style={{ height:"100%", width:pct+"%", background:"linear-gradient(90deg,"+C.teal+","+C.green+")", transition:"width 0.3s" }} />
      </div>

      {/* 配对区 */}
      {!done && (
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:14 }}>
          {/* 左列：英文词 */}
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {pairs.map(function(p){
              var isMatched = !!matched[p.word];
              var isSel = selectedWord === p.word;
              var isWrong = wrongFlash?.word === p.word;
              var bg = C.bg, bdr = C.border, clr = C.text;
              if (isMatched) { bg = C.greenLight; bdr = C.green; clr = C.green; }
              else if (isWrong) { bg = C.redLight; bdr = C.red; clr = C.red; }
              else if (isSel) { bg = C.accentLight; bdr = C.accent; clr = C.accent; }
              return (
                <button key={p.word} disabled={isMatched} onClick={function(){
                  if (isMatched) return;
                  setSelectedWord(isSel ? null : p.word);
                }} style={{
                  padding:"12px 14px", background:bg, border:"2px solid "+bdr, borderRadius:10,
                  cursor: isMatched?"default":"pointer", color:clr, fontWeight:700, fontSize:15,
                  fontFamily:"'Inter',"+FONT, textAlign:"center", transition:"all 0.15s",
                  boxShadow: isSel?"0 0 0 2px "+C.accent+"33":"none",
                  opacity: isMatched?0.6:1
                }}>
                  {p.word} {isMatched && "✓"}
                </button>
              );
            })}
          </div>
          {/* 右列：中文含义（打乱） */}
          <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
            {meaningOrder.map(function(meaning){
              var matchedWord = Object.keys(matched).find(function(w){ return matched[w] === meaning; });
              var isMatched = !!matchedWord;
              var isSel = selectedMeaning === meaning;
              var isWrong = wrongFlash?.meaning === meaning;
              var bg = C.bg, bdr = C.border, clr = C.text;
              if (isMatched) { bg = C.greenLight; bdr = C.green; clr = C.green; }
              else if (isWrong) { bg = C.redLight; bdr = C.red; clr = C.red; }
              else if (isSel) { bg = C.tealLight; bdr = C.teal; clr = C.teal; }
              return (
                <button key={meaning} disabled={isMatched} onClick={function(){
                  if (isMatched) return;
                  setSelectedMeaning(isSel ? null : meaning);
                }} style={{
                  padding:"12px 14px", background:bg, border:"2px solid "+bdr, borderRadius:10,
                  cursor: isMatched?"default":"pointer", color:clr, fontWeight:600, fontSize:14,
                  fontFamily:FONT, textAlign:"center", transition:"all 0.15s",
                  boxShadow: isSel?"0 0 0 2px "+C.teal+"33":"none",
                  opacity: isMatched?0.6:1
                }}>
                  {meaning} {isMatched && "✓"}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 完成态 */}
      {done && (
        <div style={{ ...S.reviewScore, animation:"fadeUp 0.3s ease-out", marginTop:8 }}>
          <div style={{ fontSize:32, marginBottom:6 }}>{matchedCount === total ? "🌟" : matchedCount >= total*0.6 ? "👍" : "💪"}</div>
          <div style={{ fontSize:16, fontWeight:700, marginBottom:4 }}>
            {matchedCount === total ? "全部配对成功！" : "时间到 — " + matchedCount + "/" + total + " 配对"}
          </div>
          <div style={{ fontSize:14, color:C.textSec }}>
            +{score || matchedCount * 10} XP
            {matchedCount === total && secondsLeft > 0 && <span style={{color:C.gold,marginLeft:6}}>（速度奖励 +{secondsLeft*2}）</span>}
          </div>
          {/* 完成后展示所有正确配对（让用户确认/复习） */}
          <div style={{ marginTop:14, display:"flex", flexDirection:"column", gap:6 }}>
            {pairs.map(function(p){
              var got = matched[p.word] === p.meaning;
              return (
                <div key={p.word} style={{
                  display:"flex", justifyContent:"space-between", alignItems:"center",
                  padding:"8px 12px", background:got?C.greenLight:C.redLight,
                  border:"1px solid "+(got?C.green+"33":C.red+"33"), borderRadius:8, fontSize:14
                }}>
                  <span style={{ fontWeight:700, color:got?C.green:C.red, fontFamily:"'Inter',"+FONT }}>{p.word}</span>
                  <span style={{ color:got?C.green:C.text }}>{got?"✓":"→"} {p.meaning}</span>
                </div>
              );
            })}
          </div>
          <button style={{...S.primaryBtn, marginTop:16}} onClick={onNext} disabled={loading}>
            {nextLabel || "→ 下一个词"}
          </button>
        </div>
      )}
    </>
  );
};

/* ═══ MAIN APP ═══ */
export default function App() {
  var [screen, setScreen] = useState("setup");
  var [learningTime, setLearningTime] = useState({ totalMinutes: 0, todayMinutes: 0 });
  var [showWelcome, setShowWelcome] = useState(true);
  var [showUserCenter, setShowUserCenter] = useState(false);
  useEffect(function() {
    if (typeof window !== "undefined") {
      var params = new URLSearchParams(window.location.search);
      if (params.get("from") === "home") setShowWelcome(false);
    }
  }, []);
  var [showTipJar, setShowTipJar] = useState(false);
  var [tipDismissed, setTipDismissed] = useState(false);
  var [showSettings, setShowSettings] = useState(false);
  var [dailyNewWords, setDailyNewWords] = useState(10);
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
  var [syncStatus, setSyncStatus] = useState("idle"); // idle | syncing | synced | error
  var syncVersionRef = useRef(0); // 服务端版本号
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
  var [showResetConfirm, setShowResetConfirm] = useState(false);
  var [resetInProgress, setResetInProgress] = useState(false);
  var [reviewFeedback, setReviewFeedback] = useState(null);
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

  var [teachContent, setTeachContent] = useState("");        // Markdown 降级（旧路径 / JSON fallback）
  var [teachData, setTeachData] = useState(null);            // JSON 结构（Phase 1 新路径，优先使用）
  var [teachWaitSec, setTeachWaitSec] = useState(0); // teach 加载已等待秒数（用于进度反馈）
  var [teachStreaming, setTeachStreaming] = useState(false); // 是否在流式生成中（用于显示光标+禁用按钮）
  var [recallChoice, setRecallChoice] = useState(null); // active recall 自测：null / "easy" / "fuzzy" / "hard"
  var [showMyDict, setShowMyDict] = useState(false); // "我的词典"模态
  var [showShareCard, setShowShareCard] = useState(false); // 战绩分享卡模态
  // 番茄钟：null = 自由 / { mode, startedAt, durationMs }
  var [focusSession, setFocusSession] = useState(null);
  var [focusElapsedSec, setFocusElapsedSec] = useState(0);
  var [showFocusModal, setShowFocusModal] = useState(false);
  var [focusEndedSnapshot, setFocusEndedSnapshot] = useState(null); // { wordsLearned, mode, durationSec }
  // 学习宠物：默认初始化（首次进入自动创建）
  var [pet, setPet] = useState(null); // null = 还没加载；object = 已就绪
  var [showPet, setShowPet] = useState(false); // 宠物详情模态
  var [petToast, setPetToast] = useState(null); // 喂食/进化时的小气泡提示
  var [reward, setReward] = useState(null); // 答对视觉爆发 { amount, kind: 'normal'|'double'|'combo', id }
  var rewardTimerRef = useRef(null);

  // 触发答对视觉爆发：xp 飘字 + 屏幕短闪 + 偶尔大奖
  // 10% 概率触发"双倍 +20"，5% 概率触发"连击 +30"（可变奖励 → 多巴胺 4× 强）
  var triggerReward = function(baseAmount) {
    var amount = baseAmount || 10;
    var kind = "normal";
    var roll = Math.random();
    if (roll < 0.05) { amount = amount * 3; kind = "combo"; }
    else if (roll < 0.15) { amount = amount * 2; kind = "double"; }
    setReward({ amount: amount, kind: kind, id: Date.now() });
    if (rewardTimerRef.current) clearTimeout(rewardTimerRef.current);
    rewardTimerRef.current = setTimeout(function(){ setReward(null); }, 1400);
    return amount; // 返回真实加分（可能被双倍/三倍）让调用方写 stats
  };
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
  var [userTier, setUserTier] = useState(function() {
    // 从 localStorage 恢复上次的 tier，避免每次刷新都默认 free
    if (typeof window !== "undefined") {
      try { return localStorage.getItem("vocabspark_tier") || "free"; } catch(e) {}
    }
    return "free";
  });
  // tier 是否已从网络确认过（用于限制检查：未确认前放行，避免误伤付费用户）
  var [tierLoaded, setTierLoaded] = useState(false);
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
  // Round 1.5+：预取串行化 —— inflight 记录已入队的 batchStart，promise 是当前 chain 尾巴
  var preloadChainRef = useRef({ inflight: new Set(), promise: Promise.resolve() });
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
  var teachPollRef = useRef(null);
  var spectrumPollRef = useRef(null);
  var guessPollRef = useRef(null);
  var guessTimeoutRef = useRef(null);
  var speedWaitAbortRef = useRef(false);
  var [photoLoading, setPhotoLoading] = useState(false);

  useEffect(function() { if (typeof window !== "undefined") window.speechSynthesis?.getVoices(); }, []);

  // 进入 teach phase 时，当 teach 内容就绪，自动朗读一次目标词（L1 改进：词级 auto-play）
  // 用 ref 记录已朗读的词，避免同一词在 teach ↔ spectrum 切换时重复播放
  var teachAutoPlayedRef = useRef(null);
  useEffect(function() {
    if (phase !== "teach") return;
    if (!currentWord) return;
    // 兼容 JSON + Markdown 两种路径：任一有内容且非失败态即可
    var hasJSON = !!teachData;
    var hasMd = teachContent && teachContent !== "__FAILED__";
    if (!hasJSON && !hasMd) return;
    if (teachAutoPlayedRef.current === currentWord) return; // 同词不重复
    teachAutoPlayedRef.current = currentWord;
    // 延迟 350ms 让切换动画完成后再播放，体验更顺
    var timer = setTimeout(function() {
      if (typeof window !== "undefined") speakWord(currentWord);
    }, 350);
    return function() { clearTimeout(timer); };
  }, [phase, teachContent, teachData, currentWord]);
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
        // 恢复词表：严格仅从 wordInput 字段恢复
        // 绝不使用 session.wordList 回填 wordInput —— session 只是学习中的子集，不是全量词表
        if (d?.wordInput) setWordInput(d.wordInput);
        if (d?.session?.wordList?.length > 0 && d?.session?.idx < d.session.wordList.length) {
          setWordList(d.session.wordList);
          setIdx(d.session.idx);
          setLearned(d.session.learned || []);
        }
        // 学习宠物：首次访问自动初始化（用 setPet，不调 savePet 避免初始化触发 sync）
        if (d?.pet) setPet(d.pet);
        else { var initial = defaultPet(); setPet(initial); doSave({ pet: initial }); }
      } catch(e) {}
    }).catch(function() {});

    // wordStatusMap 和 reviewWordData 现在统一从 SKEY 加载（loadSave 负责迁移）
    loadSave().then(function(d2) {
      if (d2?.wordStatusMap) setWordStatusMap(d2.wordStatusMap);
      if (d2?.reviewWordData) setReviewWordData(d2.reviewWordData);
    }).catch(function() {});
  }, []);

  // ── 词表自动保存（防止 textarea 编辑后未持久化） ──
  var wordInputSaveTimer = useRef(null);
  useEffect(function() {
    if (wordInputSaveTimer.current) clearTimeout(wordInputSaveTimer.current);
    wordInputSaveTimer.current = setTimeout(function() {
      if (wordInput && wordInput.trim()) {
        loadSave().then(function(d) {
          d = d || {};
          if (d.wordInput !== wordInput) {
            // 防大数据丢失：如果旧词表明显比新词表大（差距 >100 词），拒绝保存
            // 这种情况通常是 bug（session 回填、状态错乱等）导致的意外缩减
            var oldCount = (d.wordInput || '').split('\n').filter(Boolean).length;
            var newCount = wordInput.split('\n').filter(Boolean).length;
            if (oldCount > 100 && newCount < oldCount / 2) {
              console.warn('[wordInput autosave] blocked: oldCount=' + oldCount + ' newCount=' + newCount + ' (too much shrinkage)');
              return;
            }
            d.wordInput = wordInput;
            doSave(d);
            if (userRef.current) syncToCloud();
          }
        });
      }
    }, 2000);
    return function() { if (wordInputSaveTimer.current) clearTimeout(wordInputSaveTimer.current); };
  }, [wordInput]);

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
      // 优先从 SKEY 读（跨设备同步），fallback 到独立 key（向后兼容）
      var stored = null;
      try {
        var sraw = localStorage.getItem(SKEY);
        var sdata = sraw ? JSON.parse(sraw) : null;
        if (sdata?.dailyNewQuotaState) stored = sdata.dailyNewQuotaState;
      } catch(e) {}
      if (!stored) {
        try { stored = JSON.parse(localStorage.getItem(DAILY_NEW_QUOTA_KEY) || '{}'); } catch(e) { stored = {}; }
      }
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
      // 同时写入独立 key（向后兼容）和 SKEY（云同步）
      localStorage.setItem(DAILY_NEW_QUOTA_KEY, JSON.stringify(state));
      doSave({ dailyNewQuotaState: state });
      if (userRef.current) syncToCloud();
    } catch (e) { console.warn('[saveNewWordQuotaState] failed:', e.message); }
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
  // 数据结构：{ lastDate, streak, todayDone, history: ["YYYY-MM-DD", ...] }
  // history 用于日历视图渲染，最多保留 90 天
  var getStudyStreak = function() {
    try {
      var stored = JSON.parse(localStorage.getItem(STUDY_STREAK_KEY) || '{}');
      var today = getLocalDateKey();
      var history = Array.isArray(stored.history) ? stored.history : (stored.lastDate ? [stored.lastDate] : []);
      if (!stored.lastDate) return { streak: 0, todayDone: false, history: history };
      if (stored.lastDate === today) return { streak: stored.streak || 0, todayDone: !!stored.todayDone, history: history };
      // Check if yesterday
      var last = new Date(stored.lastDate + "T12:00:00");
      var now = new Date(today + "T12:00:00");
      var diffDays = Math.round((now - last) / 86400000);
      if (diffDays === 1) return { streak: stored.streak || 0, todayDone: false, history: history };
      return { streak: 0, todayDone: false, history: history };
    } catch (e) { return { streak: 0, todayDone: false, history: [] }; }
  };

  var markStudyStreakToday = function() {
    try {
      var today = getLocalDateKey();
      var current = getStudyStreak();
      if (current.todayDone) return current; // already marked today
      var newStreak = current.streak + 1;
      // 加入今天到 history（去重 + 截断到最近 90 天）
      var history = (current.history || []).filter(function(d){ return d !== today; });
      history.push(today);
      if (history.length > 90) history = history.slice(-90);
      var next = { lastDate: today, streak: newStreak, todayDone: true, history: history };
      localStorage.setItem(STUDY_STREAK_KEY, JSON.stringify(next));
      return { streak: newStreak, todayDone: true, history: history };
    } catch (e) { return { streak: 0, todayDone: false, history: [] }; }
  };

  /* ─── 学习宠物：加载 / 持久化 / 喂食 ─── */
  // 默认初始化的宠物
  var defaultPet = function() {
    return {
      name: "小毛球",
      species: "kitten",
      hunger: 80,
      happiness: 70,
      totalFed: 0,
      lastFeedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };
  };

  // 写宠物到 SKEY + 同步云端
  // 关键：同步写 localStorage（不走异步 loadSave().then），避免用户关弹窗后立即刷新导致写丢失
  var savePet = function(p) {
    setPet(p);
    try {
      var raw = localStorage.getItem(SKEY);
      var existing = raw ? JSON.parse(raw) : {};
      var merged = Object.assign({}, existing, { pet: p, updatedAt: new Date().toISOString() });
      localStorage.setItem(SKEY, JSON.stringify(merged));
    } catch(e) { console.warn('[savePet] write failed:', e.message); }
    if (userRef.current) syncToCloud();
  };

  // 喂食：消耗 XP，提升饱食度和开心度
  // 返回 { ok, msg }
  var feedPet = function() {
    if (!pet) return { ok: false, msg: "宠物还没醒来" };
    if (!stats || (stats.xp || 0) < PET_FEED_COST_XP) {
      return { ok: false, msg: "XP 不够 — 再答对几题攒攒" };
    }
    var currentHunger = calcDecayedHunger(pet);
    if (currentHunger >= 100) {
      return { ok: false, msg: pet.name + " 已经吃饱了，过会儿再来" };
    }
    var isRescue = currentHunger < 20;
    var newHunger = Math.min(100, currentHunger + PET_FEED_HUNGER_DELTA);
    var happinessDelta = isRescue ? PET_FEED_HAPPINESS_DELTA_RESCUE : PET_FEED_HAPPINESS_DELTA_NORMAL;
    var newHappiness = Math.min(100, (pet.happiness || 50) + happinessDelta);
    var newTotalFed = (pet.totalFed || 0) + 1;
    // 进化检测
    var oldStage = getPetStage(pet.totalFed || 0);
    var newStage = getPetStage(newTotalFed);
    var evolved = newStage.species !== oldStage.species;
    var nextPet = Object.assign({}, pet, {
      hunger: newHunger,
      happiness: newHappiness,
      totalFed: newTotalFed,
      lastFeedAt: new Date().toISOString(),
      species: newStage.species,
    });
    if (evolved) nextPet.evolvedAt = new Date().toISOString();
    savePet(nextPet);
    // 扣 XP
    save(Object.assign({}, stats, { xp: (stats.xp || 0) - PET_FEED_COST_XP }));
    // 提示
    var msg;
    if (evolved) msg = "🎉 " + pet.name + " 进化成了 " + newStage.title + "！";
    else if (isRescue) msg = "🍖 " + pet.name + " 救命粮！开心 +" + happinessDelta;
    else msg = "🍖 " + pet.name + " 吃饱了 (饱 +" + PET_FEED_HUNGER_DELTA + ")";
    setPetToast(msg);
    if (sfx?.correct) try { sfx.correct(); } catch(e) {}
    setTimeout(function(){ setPetToast(null); }, 2400);
    return { ok: true, msg: msg };
  };

  // 改名
  var renamePet = function(newName) {
    if (!pet || !newName || !newName.trim()) return;
    var clean = newName.trim().slice(0, 12);
    savePet(Object.assign({}, pet, { name: clean }));
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

  // ─── 深度合并：取两端各字段最丰富的数据，不丢失任何一方 ───
  // 核心原则：永远不用空数据覆盖非空数据
  /* ═══════════════════════════════════════════════════════
     云端同步层 v2 — 服务端权威 + 版本号冲突检测

     核心原则：
     1. 每次变更 → 立即写 localStorage → debounce 推云端
     2. 服务端有版本号，客户端带版本号推送
     3. 版本冲突时拉取服务端数据（服务端赢）
     4. 新设备登录 → 直接拉云端数据覆盖本地
     5. visibilitychange/beforeunload → 强制刷新
     ═══════════════════════════════════════════════════════ */

  var _syncTimer = null;
  var _syncInFlight = false;
  var _syncPending = false;
  var _syncRetryCount = 0;
  var MAX_SYNC_RETRIES = 3;

  // 获取当前 access token 用于 API 身份验证
  // 服务端用此 token 验证用户，防止越权改/读他人数据
  var accessTokenRef = useRef(null); // 缓存供 beforeunload 同步路径用
  var getAuthHeaders = async function(includeContentType) {
    var headers = {};
    if (includeContentType) headers['Content-Type'] = 'application/json';
    try {
      var { data } = await supabase.auth.getSession();
      var token = data?.session?.access_token;
      if (token) {
        headers['Authorization'] = 'Bearer ' + token;
        accessTokenRef.current = token;
      }
    } catch(e) { console.warn('[auth] getSession failed:', e.message); }
    return headers;
  };

  var syncToCloud = function() {
    if (_syncTimer) clearTimeout(_syncTimer);
    _syncTimer = setTimeout(function() { _doSync(); }, 500);
  };

  var _doSync = async function() {
    if (_syncInFlight) { _syncPending = true; return; }
    var u = userRef.current;
    if (!u) return;
    _syncInFlight = true;
    setSyncStatus("syncing");
    try {
      var fullData = await loadSave();
      if (!fullData) { _syncInFlight = false; setSyncStatus("idle"); return; }
      // 反数据丢失保护：如果本地 reviewWordData 比 wordStatusMap 少太多，拒绝同步
      // 这种情况通常是迁移 bug 或数据损坏导致，同步会把云端历史覆盖掉
      var wsmCount = Object.keys(fullData.wordStatusMap || {}).length;
      var rwdCount = Object.keys(fullData.reviewWordData || {}).length;
      if (wsmCount > 20 && rwdCount < wsmCount * 0.3) {
        console.warn('[sync] blocked: reviewWordData (' + rwdCount + ') much smaller than wordStatusMap (' + wsmCount + '). Possible data loss. Skip sync to protect cloud data.');
        _syncInFlight = false; setSyncStatus("error");
        return;
      }
      fullData.updatedAt = new Date().toISOString();
      var r = await fetch('/api/sync', {
        method: 'POST',
        headers: await getAuthHeaders(true),
        body: JSON.stringify({ userId: u.id, data: fullData, clientVersion: syncVersionRef.current }),
      });
      if (r.status === 409) {
        // 版本冲突 — 服务端有更新的数据，拉取并应用
        var conflict = await r.json();
        console.warn('[sync] version conflict: client=' + syncVersionRef.current + ' server=' + conflict.serverVersion);
        if (conflict.serverData) {
          syncVersionRef.current = conflict.serverVersion;
          await doSave(conflict.serverData);
          _applyCloudData(conflict.serverData);
          setSyncStatus("synced");
          setTimeout(function(){ setSyncStatus("idle"); }, 2500); // 2.5s 后复位 ✓ 不再常驻
        }
        _syncRetryCount = 0;
      } else if (r.ok) {
        var result = await r.json();
        syncVersionRef.current = result.version;
        _syncRetryCount = 0;
        setSyncStatus("synced");
        setTimeout(function(){ setSyncStatus("idle"); }, 2500); // 2.5s 后复位 ✓ 不再常驻
      } else {
        throw new Error('sync failed: ' + r.status);
      }
    } catch(e) {
      console.warn('[sync] error:', e.message);
      _syncRetryCount++;
      if (_syncRetryCount <= MAX_SYNC_RETRIES) {
        // 指数退避重试
        setTimeout(function() { _doSync(); }, 1000 * Math.pow(2, _syncRetryCount));
        setSyncStatus("syncing");
      } else {
        setSyncStatus("error");
      }
    } finally {
      _syncInFlight = false;
      if (_syncPending) { _syncPending = false; syncToCloud(); }
    }
  };

  var loadFromCloud = async function(userId) {
    try {
      var r = await fetch('/api/load?userId=' + userId, {
        headers: await getAuthHeaders(false),
      });
      var json = await r.json();
      syncVersionRef.current = json.version || 0;
      return json.data || null;
    } catch(e) { console.warn('[loadFromCloud] failed:', e.message); return null; }
  };

  // 将云端数据应用到 React state
  var _applyCloudData = function(d) {
    if (!d) return;
    if (d.wordInput) setWordInput(d.wordInput);
    if (d.profile) { setProfile(d.profile); setProfileLocked(true); }
    if (d.stats) setStats(function(s) { return {...s, ...d.stats}; });
    if (d.wordStatusMap) setWordStatusMap(d.wordStatusMap);
    if (d.reviewWordData) setReviewWordData(d.reviewWordData);
    if (d.settings?.studyGoal) setStudyGoal(d.settings.studyGoal);
    if (d.settings?.dailyNewWords) setDailyNewWords(d.settings.dailyNewWords);
    if (d.settings?.deepReviewDailyCap) setDeepReviewDailyCap(d.settings.deepReviewDailyCap);
    if (d.pet) setPet(d.pet);
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
    // 先同步最新数据到云端
    if (userRef.current) {
      try {
        var fullData = await loadSave();
        if (fullData) {
          fullData.updatedAt = new Date().toISOString();
          await fetch('/api/sync', {
            method: 'POST',
            headers: await getAuthHeaders(true),
            body: JSON.stringify({ userId: userRef.current.id, data: fullData }),
          });
        }
      } catch(e) { console.warn('[logout-sync] failed:', e.message); }
    }
    await supabase.auth.signOut();
    accessTokenRef.current = null; // 清掉缓存的 token
    // 清理本地数据，防止下一个用户看到
    try {
      localStorage.removeItem(SKEY);
      localStorage.removeItem(SKEY_OLD);
      localStorage.removeItem(WORD_STATUS_KEY);
      localStorage.removeItem(REVIEW_WORD_DATA_KEY);
      localStorage.removeItem(DAILY_KEY);
      localStorage.removeItem(DAILY_NEW_QUOTA_KEY);
      localStorage.removeItem(DEEP_REVIEW_DAILY_KEY);
      localStorage.removeItem(STUDY_STREAK_KEY);
      localStorage.removeItem("vocabspark_tier");
    } catch(e) {}
    setUser(null); userRef.current = null;
    setUserTier("free");
    // 重置 React 状态
    setWordInput(""); setProfile(""); setProfileLocked(false);
    setStats({ correct:0, total:0, streak:0, bestStreak:0, xp:0 });
    setWordStatusMap({}); setReviewWordData({});
    setStudyGoal(""); setStudyGoalCustom("");
    setShowWelcome(true);
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
      await syncToCloud();
    }
    
    alert('✅ 所有记录已清除，应用已重置为初始状态。');
    setSetupTab("profile");
  };

  var handlePhotoUpload = async function(e) {
    var file = e.target.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;
    if (!userRef.current) {
      alert('📷 照片上传功能需要注册账号\n\n注册免费，还可解锁每日 '+DAILY_LIMIT_REGISTERED+' 词学习 + 云同步 🎉');
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
  // ── Auth handler: 服务端权威，云端数据覆盖本地 ──
  var _authHandled = useRef(false);
  var handleAuthUser = async function(u, event) {
    setUser(u); userRef.current = u;
    if (u && (event === 'SIGNED_IN' || event === 'INITIAL_SESSION' || event === 'TOKEN_REFRESHED')) {
      // 防止 getSession + onAuthStateChange 双重触发
      if (_authHandled.current) return;
      _authHandled.current = true;
      setTimeout(function() { _authHandled.current = false; }, 3000);

      // 提前缓存 access token 给 beforeunload 同步路径用
      try {
        var { data: sess } = await supabase.auth.getSession();
        if (sess?.session?.access_token) accessTokenRef.current = sess.session.access_token;
      } catch(e) { console.warn('[handleAuthUser] cache token failed:', e.message); }

      if (event === 'SIGNED_IN') {
        setLoginToast("✅ 登录成功！" + (u.email || ""));
        setTimeout(function() { setLoginToast(null); }, 4000);
      }
      setShowLogin(false); setLoginSent(false); setLoginEmail(''); setOtpCode('');

      // 服务端权威：拉取云端数据
      // 重置场景无需特殊分支 —— resetLearningProgress 已经 await /api/reset
      // 完成后云端就是清零数据，这里 loadFromCloud 读到的也是清零，自然正确
      var cloudData = await loadFromCloud(u.id);
      if (cloudData) {
        await doSave(cloudData);
        _applyCloudData(cloudData);
        setShowWelcome(false);
      } else {
        syncToCloud();
      }
      _loadTier(u.id);
    }
  };

  var _loadTier = async function(userId) {
    try {
      var r = await fetch('/api/stripe/check-subscription?userId=' + userId);
      var j = await r.json();
      if (j && typeof j.tier === "string") {
        var t = j.isActive ? j.tier : "free";
        setUserTier(t);
        // 写入缓存：确认是 free 时也写入 "free"（覆盖之前错误的 "pro" 缓存）
        // 但只在 API 明确返回时才写（isActive 是个明确信号）
        try { localStorage.setItem("vocabspark_tier", t); } catch(e) {}
      }
      setTierLoaded(true);
    } catch(e) {
      // 网络失败：不改状态，但也不标记 loaded（让保护层继续放行）
      console.warn('[tier] load failed, keeping cached value:', e.message);
    }
  };

  // 番茄钟倒计时 effect — 每秒更新 elapsed，到时间触发结束 snapshot
  useEffect(function() {
    if (!focusSession) { setFocusElapsedSec(0); return; }
    var tick = function() {
      var elapsed = Math.floor((Date.now() - focusSession.startedAt) / 1000);
      setFocusElapsedSec(elapsed);
      if (elapsed * 1000 >= focusSession.durationMs) {
        // 时间到 — 用 wordsLearnedAtStart 算这场学了几个词
        var learnedNow = (learned || []).length;
        var diff = learnedNow - (focusSession.wordsLearnedAtStart || 0);
        setFocusEndedSnapshot({ wordsLearned: diff, mode: focusSession.mode, durationSec: Math.floor(focusSession.durationMs / 1000) });
        setFocusSession(null);
      }
    };
    tick();
    var id = setInterval(tick, 1000);
    return function() { clearInterval(id); };
  }, [focusSession]);

  // 启动番茄钟
  var startFocusSession = function(mode) {
    var durationMs;
    if (mode === "sprint") durationMs = 5 * 60 * 1000;       // 5 分钟冲刺
    else if (mode === "focus") durationMs = 15 * 60 * 1000;  // 15 分钟专注
    else { setFocusSession(null); setShowFocusModal(false); return; } // free
    setFocusSession({ mode: mode, startedAt: Date.now(), durationMs: durationMs, wordsLearnedAtStart: (learned || []).length });
    setShowFocusModal(false);
  };

  // ─── 学习计时器（用户活跃时才计时：click/keydown/scroll/touch） ───
  useEffect(function() {
    setLearningTime(loadLearningTime());
    var cleanup = installActivityListeners();
    var interval = setInterval(function() {
      var d = tickIfActive();
      if (d) setLearningTime({ totalMinutes: d.totalMinutes, todayMinutes: d.todayMinutes });
    }, 60000);
    return function() { cleanup(); clearInterval(interval); };
  }, []);

  // ── 页面关闭/隐藏时强制同步，防止数据丢失 ──
  useEffect(function() {
    var flushSync = function() {
      if (!userRef.current) return;
      // 清除 debounce 定时器，立即同步
      if (_syncTimer) { clearTimeout(_syncTimer); _syncTimer = null; }
      var fullData = null;
      try {
        var raw = localStorage.getItem(SKEY);
        if (raw) fullData = JSON.parse(raw);
      } catch(e) {}
      if (!fullData) return;
      fullData.updatedAt = new Date().toISOString();
      // beforeunload 是同步路径，无法 await getSession()
      // 用缓存的 accessTokenRef（最近一次 sync 时更新），并在 body 里也带上 _authToken 兜底（sendBeacon 不能带 header）
      var token = accessTokenRef.current || '';
      var payload = { userId: userRef.current.id, data: fullData, clientVersion: syncVersionRef.current, _authToken: token };
      try {
        var body = JSON.stringify(payload);
        // keepalive fetch 有 64KB 限制，大数据时退回 sendBeacon
        if (body.length < 60000) {
          fetch('/api/sync', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
            body: body,
            keepalive: true,
          }).catch(function(e){ console.warn('[flushSync] keepalive failed:', e?.message); });
        } else {
          navigator.sendBeacon('/api/sync', new Blob([body], { type: 'application/json' }));
        }
      } catch(e) {
        console.warn('[flushSync] send failed:', e.message);
        try { navigator.sendBeacon('/api/sync', new Blob([JSON.stringify(payload)], { type: 'application/json' })); } catch(e2) {}
      }
    };
    var handleBeforeUnload = function() { flushSync(); };
    var handleVisChange = function() { if (document.visibilityState === 'hidden') flushSync(); };
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisChange);
    return function() {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisChange);
    };
  }, []);

  useEffect(function() {
    setTodayCount(getDailyState().count);

    // Explicitly check for existing session on mount (handles Magic Link redirect)
    supabase.auth.getSession().then(function(result) {
      var u = result?.data?.session?.user || null;
      if (u) {
        handleAuthUser(u, 'INITIAL_SESSION');
        // 独立加载 tier（不依赖 handleAuthUser 的 _authHandled 锁）
        _loadTier(u.id);
      }
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
    // 同步写 SKEY，避免快速刷新（如喂宠物后立即关弹窗刷新）导致 stats 丢失
    try {
      var raw = localStorage.getItem(SKEY);
      var existing = raw ? JSON.parse(raw) : {};
      var merged = Object.assign({}, existing, {
        profile: profile,
        stats: s,
        session: session || existing.session,
        updatedAt: new Date().toISOString(),
      });
      localStorage.setItem(SKEY, JSON.stringify(merged));
    } catch(e) { console.warn('[save] write failed:', e.message); }
    syncToCloud();
  };

  var updateDailyNewWords = (n) => {
    setDailyNewWords(n);
    loadSave().then(d => {
      var nextData = {...(d||{}), settings: {...(d?.settings||{}), dailyNewWords: n}};
      doSave(nextData);
      syncToCloud();
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
      syncToCloud();
    });
  };

  var updateDeepReviewDailyCap = function(v) {
    var cap = Math.max(1, Math.min(30, Number(v) || 1));
    setDeepReviewDailyCap(cap);
    loadSave().then(function(d) {
      var nextData = { ...(d || {}), settings: { ...(d?.settings || {}), deepReviewDailyCap: cap } };
      doSave(nextData);
      syncToCloud();
    });
  };

  var saveSession = function(wl, i, lrn) {
    loadSave().then(function(d) {
      doSave({...(d||{}), profile, stats, session: { wordList: wl, idx: i, learned: lrn }});
      if (userRef.current) syncToCloud();
    });
  };

  var resetLearningProgress = async function() {
    // 二次确认已经在 UI 层完成（点"重置进度"展开红色警告面板，再点"确认重置"）
    // 不再用 native confirm()：会被浏览器"阻止此网站弹出对话框"拦截，导致 reset 静默失败
    // 登录用户：调用专用 /api/reset —— 服务端权威清零 + bump version，拿到清零 data 作为 SoT
    // 游客：本地直接构造清零 data
    var cleared;
    var newVersion = 0;
    if (userRef.current) {
      try {
        var r = await fetch('/api/reset', {
          method: 'POST',
          headers: await getAuthHeaders(true),
          body: JSON.stringify({ userId: userRef.current.id }),
        });
        if (!r.ok) throw new Error('reset api ' + r.status);
        var json = await r.json();
        cleared = json.data;
        newVersion = json.version || 0;
      } catch(e) {
        alert('重置失败：网络异常，请稍后再试。\n' + (e.message || ''));
        return;
      }
    } else {
      // 游客：读取本地保留字段 + 清零其他字段
      var existing = {};
      try { existing = JSON.parse(localStorage.getItem(SKEY) || '{}'); } catch(e) {}
      cleared = {
        schemaVersion: 2,
        profile: existing.profile,
        wordInput: existing.wordInput,
        settings: existing.settings,
        tipDismissed: existing.tipDismissed,
        stats: { correct:0, total:0, streak:0, bestStreak:0, xp:0 },
        wordStatusMap: {},
        reviewWordData: {},
        completedWords: [],
        session: null,
        dailyNewQuotaState: null,
        updatedAt: new Date().toISOString(),
      };
    }
    // 本地与云端对齐 —— 服务端已经是权威清零，本地只需镜像
    try { localStorage.setItem(SKEY, JSON.stringify(cleared)); } catch(e) {}
    syncVersionRef.current = newVersion;
    // 清辅助 key
    try { localStorage.removeItem(WORD_STATUS_KEY); } catch(e) {}
    try { localStorage.removeItem(REVIEW_WORD_DATA_KEY); } catch(e) {}
    try { localStorage.removeItem(DAILY_KEY); } catch(e) {}
    try { localStorage.removeItem(DAILY_NEW_QUOTA_KEY); } catch(e) {}
    try { localStorage.removeItem(DEEP_REVIEW_DAILY_KEY); } catch(e) {}
    // 清 Phase 1.5 AI 缓存（让重置后的单词走全新生成路径）
    try {
      var toDelete = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && (k.indexOf('knowu_classify_v1_') === 0 || k.indexOf('vocabspark_teach_') === 0)) toDelete.push(k);
      }
      toDelete.forEach(function(k) { try { localStorage.removeItem(k); } catch(e) {} });
    } catch(e) {}
    // 硬刷 —— 干净地从服务端权威数据重建 React state
    try { window.location.reload(); } catch(e) {}
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
    doSave({ wordStatusMap: next });
    if (userRef.current) syncToCloud();
  };

  var upsertReviewWordData = function(word, patch) {
    if (!word) return;
    setReviewWordData(function(prev) {
      var base = prev[word] || { word: word, reviewHistory: [] };
      var next = { ...prev, [word]: { ...base, ...patch } };
      doSave({ reviewWordData: next });
      if (userRef.current) syncToCloud();
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
    var silent = opts.silent || false; // silent = background pre-load, no UI changes
    // Streaming mode: start as soon as first word is ready
    var enableStreaming = !silent && opts.streaming !== false;
    var streamStartThreshold = 1; // Always start after 1 word ready
    if (!silent) {
      setBatchTotal(total * 2);
      setBatchProgress(0);
      setBatchGroupNo(Math.floor(startIdx / 5) + 1);
      setPhase("batch_loading");
      setBatchTip(makeBatchTip(0, batchWords[0], total));
    }

    // ── Phase B: review/cloze pre-fetch ──
    // milestone 必须用 startIdx + batchWords.length（"学完此批后的总进度"），
    // 不能用 lrn.length + batchWords.length（lrn 在 silent preload 时是 stale 的，会算错 key）
    // silent 也允许预生成（这才能让 cloze 在用户进入 batch 2 之前就准备好）
    var endMilestone = startIdx + batchWords.length;
    var willCloze  = endMilestone % 10 === 0;
    var willReview = endMilestone % 5 === 0 && !willCloze;
    if (willReview && !dataCache.current["_review_" + endMilestone]) {
      callAPIFast(sysP, buildReviewPrompt(batchWords))
        .then(function(raw) { dataCache.current["_review_" + endMilestone] = tryJSON(raw) || null; })
        .catch(function(err) { console.warn("[loadBatch] review pre-fetch failed:", err.message); });
    }
    if (willCloze && !dataCache.current["_cloze_" + endMilestone]) {
      // cloze 需要前 5 词作上下文 — 用 wl.slice(startIdx-5, startIdx) 取前一组的词
      var prevBatchWords = startIdx >= 5 ? wl.slice(startIdx - 5, startIdx) : [];
      callAPIFast(sysP, buildClozePrompt([...prevBatchWords, ...batchWords]))
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

    // ── Phase 1.5 v2：Scheduled Task Insertion ──
    // 核心：classify 独立跑（不占 task slot），teach task 在 classify resolve 后动态入队。
    // 解决 v1 缺陷：v1 的 teach task 在 slot 里 await classify，浪费 ~3s × N slot。
    //
    // 流水线：
    //   t=0: 5 classify 并行发出（非 task，独立 fetch）
    //   t=0: 5 guess task 立即入队 → Cap 3 slot 跑
    //   t~3s: classify 陆续完成 → 对应 teach task 动态入队
    //   t~3+6s: teach 完成 → 全 batch 在 ~12s 完成（对齐 Phase 1）
    var classifyByWord = {};
    batchWords.forEach(function(w) {
      if (dataCache.current[w]) return;
      classifyByWord[w] = callClassify(w, profile, lrn).catch(function() { return null; });
    });

    var tasks = [];
    var completed = 0;
    var tipWordIdx = 0;
    var shardProviders = ["deepseek-a", "deepseek-b"];
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
        var elapsed = Date.now() - batchStartedAtMs;
        var minDisplayMs = 5000;
        var delay = Math.max(readyWordSet.size > 0 ? 400 : 200, minDisplayMs - elapsed);
        setTimeout(function() {
          if (resolveEarlyStart) resolveEarlyStart();
        }, delay);
      }
    };
    // Phase 2 Round 1.5：Cap 3 → 5（上限 6）缓解切词卡顿
    // 原因：Phase 1.5 多了 classify 步骤，Cap=3 下 5 词流水线 ~15-20s，部分用户学快会追上
    // Cap=5 让 teach 更多并发跑，切词稳定
    var dynamicCap = 5;
    try {
      if (typeof window !== "undefined") {
        var savedCap = Number(localStorage.getItem(CONC_KEY) || "5");
        dynamicCap = Math.max(3, Math.min(6, savedCap || 5));
      }
    } catch (e) {}

    // pokeQueue: classify 完成后动态 push teach task 时唤醒 runner（下方 runAllPromise 里赋值）
    var pokeQueue = null;
    // expectedTaskCount：预期要跑的 task 总数（1 guess + 1 teach 每个新词）
    var expectedTaskCount = 0;

    for (var i = 0; i < batchWords.length; i++) {
      var w = batchWords[i];
      if (dataCache.current[w]) {
        completed += 2;
        if (dataCache.current[w].teach || dataCache.current[w].teachJSON || dataCache.current[w].guess) readyWordSet.add(w);
        continue;
      }
      dataCache.current[w] = { guess: null, guessRaw: null, teach: null, teachJSON: null, spectrum: null };
      expectedTaskCount += 2; // 1 guess + 1 teach
      var wLrn = [...lrn, ...batchWords.slice(0, i)];
      (function(word, learned, providerHint) {
        var preferred = providerHint ? [providerHint] : undefined;

        // === Guess task（立即入队，不依赖 classify）===
        tasks.push(function() {
          return callWithClientRetry(function() {
            return callAPIFast(sysP, buildGuessPrompt(word, learned), { preferredProviders: preferred });
          }).then(function(raw) {
            dataCache.current[word].guess = raw ? tryJSON(raw) : null;
            dataCache.current[word].guessRaw = raw;
            if ((dataCache.current[word].teach || dataCache.current[word].teachJSON) && (dataCache.current[word].guess || dataCache.current[word].guessRaw)) {
              readyWordSet.add(word);
              tryResolveEarlyStart();
            }
          }).catch(function(err) {
            console.warn("[loadBatch] guess failed for " + word + ":", err.message);
            dataCache.current[word].guessFailed = true;
            if (dataCache.current[word].teach || dataCache.current[word].teachJSON) {
              readyWordSet.add(word);
              tryResolveEarlyStart();
            }
          });
        });

        // === Teach task（延迟入队 — classify resolve 后才 push 进 queue）===
        // 关键：task 函数本身不 await classify，进 slot 后立即 callAPIStream，不浪费 slot 时间
        classifyByWord[word].then(function(cls) {
          tasks.push(function() {
            return callWithClientRetry(function() {
              return callAPIStream(sysP, buildTeachPrompt(word, learned, cls), { preferredProviders: preferred, jsonMode: true }, function(partial) {
                if (!dataCache.current[word]) return;
                var parsed = parsePartialJSON(partial);
                if (parsed && parsed.opening) {
                  dataCache.current[word].teachJSON = parsed;
                } else {
                  dataCache.current[word].teach = partial;
                }
                dataCache.current[word].teachStreaming = true;
                if (!dataCache.current[word]._streamReadyTriggered) {
                  dataCache.current[word]._streamReadyTriggered = true;
                  readyWordSet.add(word);
                  tryResolveEarlyStart();
                }
              });
            }).then(function(raw) {
              var finalJSON = raw ? (tryJSON(raw) || parsePartialJSON(raw)) : null;
              if (finalJSON && finalJSON.opening && finalJSON.teach) {
                dataCache.current[word].teachJSON = finalJSON;
                dataCache.current[word].teach = null;
              } else {
                dataCache.current[word].teach = raw ? addSpeakMarkers(raw) : null;
                dataCache.current[word].teachJSON = null;
              }
              dataCache.current[word].teachStreaming = false;
              if ((dataCache.current[word].teachJSON || dataCache.current[word].teach) && !dataCache.current[word]._streamReadyTriggered) {
                dataCache.current[word]._streamReadyTriggered = true;
                readyWordSet.add(word);
                tryResolveEarlyStart();
              }
            }).catch(function(err) {
              console.warn("[loadBatch] teach failed for " + word + ":", err.message);
              dataCache.current[word].teachFailed = true;
              dataCache.current[word].teachStreaming = false;
              if (dataCache.current[word].guess || dataCache.current[word].guessRaw || dataCache.current[word].guessFailed) {
                readyWordSet.add(word);
                tryResolveEarlyStart();
              }
            });
          });
          // teach task 已入队，唤醒 runner 检查新 task（如果 runner 已 idle）
          if (pokeQueue) pokeQueue();
        });

        // Spectrum (fire and forget, waits for classify to route to right game type)
        // Phase 2 Round 1: spectrum prompt 按 wordType 路由（A → gradient_choice，其他 legacy）
        classifyByWord[word].then(function(cls) {
          return callWithClientRetry(function() {
            return callAPIFast(sysP, buildSpectrumPrompt(word, cls), { preferredProviders: preferred });
          });
        }).then(function(raw) {
          dataCache.current[word].spectrum = raw ? tryJSON(raw) : null;
        }).catch(function(err) {
          console.warn("[loadBatch] spectrum failed for " + word + ":", err.message);
        });
      })(w, wLrn, shardProviders[i % shardProviders.length]);
    }

    tryResolveEarlyStart();

    // totalTasks = 已 cache（completed）+ 预期要跑（expectedTaskCount）
    // v1 用 tasks.length 计算会错（teach 还未 push），v2 用 expected 准确
    var totalTasks = completed + expectedTaskCount;
    if (!silent) { setBatchTotal(totalTasks); setBatchProgress(completed); }

    var running = 0;
    var taskIdx = 0;
    var runAllPromise = new Promise(function(resolve) {
      if (totalTasks <= completed) { resolve(); return; }
      function next() {
        while (running < dynamicCap && taskIdx < tasks.length) {
          running++;
          var t = tasks[taskIdx++];
          t().finally(function() {
            running--;
            completed++;
            if (!silent) {
              if (!earlyStartResolved) {
                setBatchProgress(completed);
                if (completed % 2 === 0) {
                  tipWordIdx++;
                  if (tipWordIdx < batchWords.length) {
                    setBatchTip(makeBatchTip(tipWordIdx, batchWords[tipWordIdx], total));
                  }
                }
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
      pokeQueue = next; // 暴露给 classify.then 回调：新 teach task 入队后唤醒 runner
      next();
    });

    var finalizeBatch = function() {
      if (!silent) {
        setBatchProgress(totalTasks);
        setBatchTip("✅ " + total + " 个词全部就绪，开始学习！");
      }
      try {
        if (typeof window !== "undefined") {
          var elapsedMs = Date.now() - batchStartedAtMs;
          var currentCap = dynamicCap;
          var nextCap = currentCap;
          if (elapsedMs > 45000) nextCap = Math.max(3, currentCap - 1);
          else if (elapsedMs < 20000) nextCap = Math.min(6, currentCap + 1);
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
    if (!silent) await new Promise(function(r) { setTimeout(r, 400); });
  };

  var applyWordData = function(word) {
    var d = dataCache.current[word];
    if (teachPollRef.current) clearInterval(teachPollRef.current);
    if (teachTimeoutRef.current) clearTimeout(teachTimeoutRef.current);
    if (spectrumPollRef.current) clearInterval(spectrumPollRef.current);
    if (guessPollRef.current) clearInterval(guessPollRef.current);
    if (guessTimeoutRef.current) clearTimeout(guessTimeoutRef.current);
    setGuessData(null); setSelectedOption(""); setGuessSubmitted(false);
    setShowHint(false); setTeachContent(""); setTeachData(null); setSpectrumData(null);
    setSpecSlots([null,null,null]); setSpecPool([]); setSpecStatus("idle");
    setReviewData(null); setReviewAnswers({}); setReviewSubmitted(false); setPhonetic("");
    setClozeData(null); setClozeAnswers({}); setClozeSubmitted(false);
    setShakeWrong(false); setBounceCorrect(false);
    setRecallChoice(null); // 新词进入 teach 时清掉旧的自测结果
    setWordStart(Date.now());

    if (d?.guess?.context && d?.guess?.options) {
      setGuessData(d.guess);
      if (d.guess.phonetic) setPhonetic(d.guess.phonetic);
    } else if (d?.guessFailed && !d?.guess) {
      setGuessData({ context: "内容加载失败", options: null, _failed: true });
    } else if (d?.guessRaw) {
      // 响应到达但 JSON parse 失败 — 显示原始文本
      setGuessData({ context: d.guessRaw.substring(0,300) || "格式异常", options: null });
    } else {
      // guess 还在加载中 — 保持 guessData=null（UI 自动显示骨架屏），启动轮询
      var guessPollWord = word;
      guessPollRef.current = setInterval(function() {
        var cached = dataCache.current[guessPollWord];
        if (cached?.guess?.context && cached?.guess?.options) {
          setGuessData(cached.guess);
          if (cached.guess.phonetic) setPhonetic(cached.guess.phonetic);
          clearInterval(guessPollRef.current);
          clearTimeout(guessTimeoutRef.current);
        } else if (cached?.guessFailed) {
          setGuessData({ context: "内容加载失败", options: null, _failed: true });
          clearInterval(guessPollRef.current);
          clearTimeout(guessTimeoutRef.current);
        } else if (cached?.guessRaw) {
          setGuessData({ context: cached.guessRaw.substring(0,300) || "格式异常", options: null });
          clearInterval(guessPollRef.current);
          clearTimeout(guessTimeoutRef.current);
        }
      }, 200);
      // 25s 超时兜底（实际 guess 通常 5-10s 到达）
      guessTimeoutRef.current = setTimeout(function() {
        if (guessPollRef.current) clearInterval(guessPollRef.current);
        setGuessData(function(prev) { return prev || { context: "内容加载失败", options: null, _failed: true }; });
      }, 25000);
    }
    // Phase 1：优先 JSON（teachJSON），降级 Markdown（teach）
    var teachStreamingActive = !!d?.teachStreaming;
    setTeachStreaming(teachStreamingActive);
    if (d?.teachJSON && d.teachJSON.opening) {
      setTeachData(d.teachJSON);
      setTeachWaitSec(0);
    }
    if (d?.teach && !teachStreamingActive && !d?.teachJSON) {
      setTeachContent(d.teach);
      setTeachWaitSec(0);
    } else if (d?.teachFailed) {
      setTeachContent("__FAILED__");
      setTeachWaitSec(0);
      setTeachStreaming(false);
    } else if (teachStreamingActive || (!d?.teachJSON && !d?.teach)) {
      // 关键修复：teachStreaming=true 时必须启动轮询（即使 teachJSON 已有中间态）
      // 否则 streaming 完成后 teachStreaming=false 无人监听，UI 卡在"正在生成..."
      // 两种情况：(a) 还没开始生成 (b) 正在 streaming 中 — 都用轮询捡增量
      if (teachTimeoutRef.current) clearTimeout(teachTimeoutRef.current);
      if (teachPollRef.current) clearInterval(teachPollRef.current);
      var pollWord = word;
      var startT = Date.now();
      setTeachWaitSec(0);
      // streaming 阶段已有部分内容时，先渲染一次，避免 skeleton 抖动
      if (d?.teach) setTeachContent(d.teach);
      teachPollRef.current = setInterval(function() {
        var cached = dataCache.current[pollWord];
        // JSON 优先
        if (cached?.teachJSON && cached.teachJSON.opening) {
          setTeachData(cached.teachJSON);
          setTeachWaitSec(0);
          setTeachStreaming(!!cached.teachStreaming);
          if (!cached.teachStreaming) {
            clearInterval(teachPollRef.current);
            clearTimeout(teachTimeoutRef.current);
          }
          return;
        }
        // Markdown 降级
        if (cached?.teach) {
          setTeachContent(cached.teach);
          setTeachWaitSec(0);
          setTeachStreaming(!!cached.teachStreaming);
          if (!cached.teachStreaming) {
            clearInterval(teachPollRef.current);
            clearTimeout(teachTimeoutRef.current);
          }
        } else if (cached?.teachFailed) {
          setTeachContent("__FAILED__");
          setTeachWaitSec(0);
          setTeachStreaming(false);
          clearInterval(teachPollRef.current);
          clearTimeout(teachTimeoutRef.current);
        } else {
          setTeachWaitSec(Math.floor((Date.now() - startT) / 1000));
        }
      }, 200);
      // 超时 35s：大部分正常请求 15s 内完成
      teachTimeoutRef.current = setTimeout(function() {
        if (teachPollRef.current) clearInterval(teachPollRef.current);
        // 如果 JSON 还没到，降级显示失败
        var cached = dataCache.current[pollWord];
        if (!cached?.teachJSON) {
          setTeachContent(function(prev) { return prev || "__FAILED__"; });
        }
        setTeachWaitSec(0);
        setTeachStreaming(false);
      }, 35000);
    }
    if (spectrumPollRef.current) clearInterval(spectrumPollRef.current);
    // Phase 2: 兼容新旧 spectrum 格式
    // - 旧 gradient: { spectrum_words, scenario, decoded }
    // - 新 gradient_choice: { type: "gradient_choice", scenario, options, answer, ... }
    var spectrumReady = function(sp) { return !!(sp && (sp.spectrum_words || sp.type)); };
    if (spectrumReady(d?.spectrum)) {
      setSpectrumData(d.spectrum);
    } else {
      // spectrum 数据可能还在加载中，轮询等待
      var specWord = word;
      spectrumPollRef.current = setInterval(function() {
        var cached = dataCache.current[specWord];
        if (spectrumReady(cached?.spectrum)) {
          setSpectrumData(cached.spectrum);
          clearInterval(spectrumPollRef.current);
        }
      }, 500);
      // 45 秒后停止轮询（spectrum 不是必须的，超时就跳过）
      setTimeout(function() {
        if (spectrumPollRef.current) clearInterval(spectrumPollRef.current);
      }, 45000);
    }
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
      var newWordInput = words.join("\n");
      // 如果已有词表（>50 词），给用户合并/替换的选择
      var existingCount = (wordInput || '').split('\n').filter(Boolean).length;
      var finalWordInput = newWordInput;
      if (existingCount > 50) {
        var choice = confirm("检测到你已有 " + existingCount + " 个词的词表。\n\n点「确定」：合并新词到现有词表（推荐，不丢旧词）\n点「取消」：放弃上传");
        if (!choice) { setFileLabel(file.name); return; }
        // 合并去重
        var existingWords = (wordInput || '').split('\n').map(w => w.trim().toLowerCase()).filter(Boolean);
        var seen = new Set(existingWords);
        var mergedList = [...existingWords];
        words.forEach(w => {
          var lw = w.trim().toLowerCase();
          if (lw && !seen.has(lw)) { seen.add(lw); mergedList.push(lw); }
        });
        finalWordInput = mergedList.join("\n");
        setFileLabel("✅ " + file.name + "（合并后 " + mergedList.length + " 词，新增 " + (mergedList.length - existingCount) + " 词）");
      } else {
        setFileLabel("✅ " + file.name + "（" + words.length + " 个词）");
      }
      setWordInput(finalWordInput); setError(""); setSetupTab("words");
      // 立即保存词库到本地和云端
      var d = await loadSave() || {};
      d.wordInput = finalWordInput;
      await doSave(d);
      if (userRef.current) syncToCloud();
    } catch (err) { setError("文件解析失败: " + err.message); setFileLabel(file.name); }
    if (fileRef.current) fileRef.current.value = "";
  };

  var startLearning = async function(resumeIdx) {
    var rawWords = wordInput.trim().split(/[\n,，、]+/).map(function(w) { return w.trim().toLowerCase(); }).filter(Boolean);
    if (!rawWords.length) { setError("请输入至少一个单词"); return; }
    if (!profile.trim()) {
      if (!confirm("还没有填写「学习画像」，AI 例句暂时不会个性化。\n\n建议先填写画像，效果更好！\n\n点「确定」继续学习，「取消」去填画像。")) {
        setSetupTab("profile"); setScreen("setup"); return;
      }
    }
    
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
      doSave({ wordStatusMap: next });
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
    // Phase 2 兼容两种 spectrum 数据格式
    if (spectrumData?.spectrum_words) {
      // Legacy 拖动排序
      setSpecPool(shuffle(spectrumData.spectrum_words));
      setSpecSlots([null,null,null]); setSpecStatus("idle");
      setPhaseDir(1); setPhase("spectrum");
    } else if (spectrumData?.type) {
      // 新 Phase 2 玩法（gradient_choice 等）— 不需要 pool 初始化，组件自己管理 state
      setPhaseDir(1); setPhase("spectrum");
    } else {
      // 无 spectrum 数据（生成失败或超时）— 直接进下一词
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
      // 真正的切词 gate：只要 guess 到达就能进猜词页（第一阶段）
      // Teach 是后续阶段，即使未 ready，applyWordData 的轮询会在用户进 teach 页时接住
      // 之前要求 teach 同时 ready 是过度保守 — 让用户等不必要的时间
      return !!(d && d.guess);
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
    // 缩短到 12s（之前 18s 太久，加重焦虑）
    while (!ready() && !speedWaitAbortRef.current && Date.now() - start < 12000) {
      setSpeedWaitSec(Math.floor((Date.now() - start) / 1000));
      await new Promise(function(r) { setTimeout(r, 240); });
    }

    if (!ready() || speedWaitAbortRef.current) {
      // Fallback：用 silent 模式补救加载，**不**触发 batch_loading UI
      // （避免给用户"开始新一组"的错觉 — 之前用 streaming:true 会切到 batch_loading 屏，
      // 让用户以为"刚学的几个词不算了，要重新一组"）
      dataCache.current[nextWord] = null;
      console.warn('[waitAndEnterNextWord] timeout, silent fallback for', nextWord);
      try {
        await loadBatch(nextIdx, learnedSnapshot, undefined, { silent: true, streaming: false });
      } catch(e) { console.warn('[fallback loadBatch] failed:', e?.message); }
    }

    setIdx(nextIdx);
    applyWordData(nextWord);
  };

  var goNextWord = async function() {
    // Check daily limit (guests: 5, free registered: 10, basic/pro: unlimited)
    var ds = getDailyState();
    var isPaid = userTier === "basic" || userTier === "pro";
    // 关键保护：已登录用户如果 tier 还没从网络确认过，永远不触发限制
    // 这防止了 localStorage 缓存了 "free" 但用户实际是 Pro 的竞态场景
    var tierNotConfirmed = userRef.current && !tierLoaded;
    var limit = (isPaid || tierNotConfirmed) ? Infinity : (userRef.current ? DAILY_LIMIT_REGISTERED : DAILY_LIMIT_GUEST);
    if (!isPaid && !tierNotConfirmed && ds.count >= limit) { setShowLimitModal(true); return; }
    incrementDailyCount();
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
      // 关键修复：无论猜词结果如何，只要用户完成了这个词的学习流程，
      // 都要更新 wordStatusMap，否则这个词明天还会被当"未学"重新安排
      // 同时，如果词原本是 unlearned 或 skipped（快筛跳过），现在完成了深度学习，也要升级
      var currentStatus = wordStatusMap[currentWord];
      var shouldUpdateStatus = !currentStatus || currentStatus === "unlearned" || currentStatus === "skipped";
      if (shouldUpdateStatus) {
        if (guessCorrect === true) updateManualWordStatus(currentWord, "mastered");
        else if (guessCorrect === false) updateManualWordStatus(currentWord, "error");
        else updateManualWordStatus(currentWord, "learning"); // 跳过猜词 → learning（学习中）
      }
    } catch(e) {}
    // Persist completed word permanently (survives session resets)
    loadSave().then(function(d) {
      var existing = d?.completedWords || [];
      if (!existing.includes(currentWord)) {
        doSave({ ...(d||{}), completedWords: [...existing, currentWord] });
        if (userRef.current) syncToCloud();
      }
    });
    saveSession(wordList, nextIdx, newLearned);

    if (newLearned.length > 0 && newLearned.length % 10 === 0) {
      // Phase B: instant if pre-fetched during batch loading
      var cachedCloze = dataCache.current["_cloze_" + newLearned.length];
      if (cachedCloze?.questions) {
        // 即使是缓存也要校验（预取时可能没校验）
        var cacheErr = validateCloze(cachedCloze);
        if (!cacheErr) {
          setClozeData(cachedCloze); setClozeAnswers({}); setClozeSubmitted(false); setPhase("cloze"); return;
        } else {
          console.warn('[cloze] cached invalid:', cacheErr);
          dataCache.current["_cloze_" + newLearned.length] = null; // 清缓存
        }
      }
      // Phase A: switch phase immediately so spinner shows, then fetch
      setPhase("cloze"); setLoadingTip("📝 正在生成阅读理解短文...");
      try {
        // 最多重试 2 次，如果生成的题目"送分"（答案词明文出现）
        var parsed = null;
        var validationErr = null;
        for (var attempt = 0; attempt < 2; attempt++) {
          var raw = await callAPIFast(sysP, buildClozePrompt(newLearned.slice(-10)));
          parsed = tryJSON(raw);
          if (!parsed?.questions || !Array.isArray(parsed.questions) || parsed.questions.length === 0) {
            validationErr = "解析失败";
            continue;
          }
          if (!parsed.questions.every(function(q) { return q.answer && q.options; })) {
            validationErr = "题目字段缺失";
            continue;
          }
          validationErr = validateCloze(parsed);
          if (!validationErr) break; // 通过校验
          console.warn('[cloze] attempt ' + (attempt+1) + ' rejected:', validationErr);
        }
        if (!validationErr) {
          setClozeData(parsed); setClozeAnswers({}); setClozeSubmitted(false);
        } else {
          // 校验始终失败 → 跳过阅读挑战，继续学下个词（用户友好）
          console.warn('[cloze] skipped after retries:', validationErr);
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
      // Round 4：复习数据有两种合法格式
      // - speed_match: { type:"speed_match", pairs:[{word,meaning}] }
      // - fill_blank（旧）: { questions:[{...}] }
      var isValidReview = function(d) {
        if (!d) return false;
        if (d.type === "speed_match" && Array.isArray(d.pairs) && d.pairs.length > 0) return true;
        if (Array.isArray(d.questions) && d.questions.length > 0 && d.questions.every(function(q){ return q.answer && q.options; })) return true;
        return false;
      };
      // Phase B: instant if pre-fetched during batch loading
      var cachedReview = dataCache.current["_review_" + newLearned.length];
      if (isValidReview(cachedReview)) {
        setReviewData(cachedReview); setReviewAnswers({}); setReviewSubmitted(false); setPhase("review"); return;
      }
      // Phase A: switch phase immediately so spinner shows, then fetch
      setPhase("review"); setLoadingTip("🎮 设计互动复习挑战中...");
      try {
        var raw = await callAPIFast(sysP, buildReviewPrompt(newLearned.slice(-5)));
        var parsed = tryJSON(raw);
        if (isValidReview(parsed)) {
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

    // 注：之前这里有 posInBatch === 1/3 的额外 silent loadBatch 触发，
    // 现已移除 —— useEffect 的 preloadChainRef 已统一管理所有预取（按 tier 串行），
    // 重复触发反而会绕过 chain 跟前台 batch 抢资源，拖慢首组加载。

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

  // Phase 2 Round 1.5+：进学习页按 tier 串行预取多组（silent 模式，不影响 UI）
  // 游客 5 词 / 免费 10 / Basic 20 / Pro 30 — 预取到对应深度
  // 关键 1：串行执行（chain），避免多个 silent loadBatch 同时打爆 DeepSeek API
  // 关键 2：前台 batch 加载中（phase === "batch_loading"）时不启动 silent，
  //   否则 silent batch 5 跟 batch 1 同时跑 = 20 路并发 → 限流拖慢前台
  useEffect(function() {
    if (screen !== "learning") return;
    if (!wordList || wordList.length === 0) return;
    if (phase === "batch_loading") return; // 让前台 batch 优先抢 DeepSeek 资源

    var maxPreloadWords;
    if (userTier === "pro") maxPreloadWords = 30;
    else if (userTier === "basic") maxPreloadWords = 20;
    else if (userRef.current) maxPreloadWords = 10; // 免费注册用户
    else maxPreloadWords = 5; // 游客

    var currentBatchStart = Math.floor(idx / 5) * 5;
    var nextBatchStart = currentBatchStart + 5;
    var preloadLimit = Math.min(idx + maxPreloadWords, wordList.length);

    // 收集需要预取且未在 chain 中的 batchStart
    var toQueue = [];
    for (var start = nextBatchStart; start < preloadLimit; start += 5) {
      if (preloadChainRef.current.inflight.has(start)) continue;
      var needsLoad = false;
      for (var bi = start; bi < Math.min(start + 5, wordList.length); bi++) {
        if (!dataCache.current[wordList[bi]]) { needsLoad = true; break; }
      }
      if (needsLoad) toQueue.push(start);
    }

    // 串行追加到 chain：上一个 silent loadBatch 完成后才启动下一个
    // 这样前台 batch + 单个 silent batch 同时跑（API 压力 ~2 倍，可控）
    // 而不是前台 + N 个 silent 同时跑（API 压力 ~4-7 倍，会被限流）
    toQueue.forEach(function(start) {
      preloadChainRef.current.inflight.add(start);
      var lrnSnap = learned;
      // 关键：每环都加 .catch 在 chain 层面 —— 防止单个 batch reject 让整条 promise 永远 reject
      // 否则后续 .then 永不执行，preload chain 死掉，下次 useEffect 重跑也加不进新任务
      preloadChainRef.current.promise = preloadChainRef.current.promise
        .then(function() {
          // 双重检查：链中前一组完成期间，本组可能已被 cache 命中（极少见，但保险）
          var stillNeeds = false;
          for (var bi = start; bi < Math.min(start + 5, wordList.length); bi++) {
            if (!dataCache.current[wordList[bi]]) { stillNeeds = true; break; }
          }
          if (!stillNeeds) return;
          return loadBatch(start, lrnSnap, undefined, { silent: true, streaming: false })
            .catch(function(err){
              // 单个 silent batch 失败不应阻塞 chain；log 给诊断，inflight 会在 finally 清掉
              console.warn('[preload] batch start=' + start + ' failed:', err?.message || err);
            });
        })
        .catch(function(err) {
          // 兜底：理论上前面 .catch 已吞了所有 error；这层是为了 chain 的 promise 永不 reject
          console.warn('[preload] chain unexpected reject at start=' + start + ':', err?.message || err);
        })
        .finally(function(){
          preloadChainRef.current.inflight.delete(start);
        });
    });
  }, [screen, userTier, idx, phase]); // 加 phase：从 batch_loading 切到 guess 时重跑，启动 silent chain

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
    doSave({ wordStatusMap: next });
    if (userRef.current) syncToCloud();
    setSelectedWords({});
  };

  var getStatsSnapshot = function() {
    var words = parseWordsFromInput(wordInput);
    var wordSet = new Set(words.map(function(w) { return w.toLowerCase(); }));
    var reviewRecords = Object.keys(reviewWordData || {}).filter(function(k) {
      return wordSet.has(k.toLowerCase());
    }).map(function(k) { return reviewWordData[k]; });
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

    var _intervalDays = REVIEW_INTERVAL_DAYS[nextLevel];
    var _fbText = result === "remembered" ? "✅ 下次复习在 " + _intervalDays + " 天后" : result === "forgot" ? "🔄 明天再复习" : "📝 " + _intervalDays + " 天后复习";
    setReviewFeedback({ text: _fbText, color: result === "remembered" ? C.green : result === "forgot" ? C.red : C.gold });
    setTimeout(function(){ setReviewFeedback(null); }, 1500);

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
    var stem = pool.find(function(l){ return !/^[A-D][\).、:：\s]/i.test(l) && !/答案|answer/i.test(l) && !/ssat|选择题|single choice|question|仿真题/i.test(l); }) || "请选择最合适选项";
    // 多种格式提取答案：
    // "答案：B" / "Answer: B" / "正确答案是B" / "答案是 B" / "**B**" at end of line
    var answer = "";
    for (var i = 0; i < pool.length; i++) {
      var l = pool[i];
      // 明确的"答案"行
      if (/答案|answer|正确/i.test(l)) {
        var m = l.match(/[A-D]/i);
        if (m) { answer = m[0].toUpperCase(); break; }
      }
    }
    // 兜底：如果没找到答案行，扫描全文找 "答案是X" / "(X)" 等模式
    if (!answer) {
      var fullText = pool.join(" ");
      var fallback = fullText.match(/答案[是为：:\s]*([A-D])/i) || fullText.match(/correct[^A-D]*([A-D])/i) || fullText.match(/\*\*([A-D])\*\*/);
      if (fallback) answer = fallback[1].toUpperCase();
    }
    // 最终兜底：如果题目中有加粗/标记的选项，取第一个
    if (!answer && opts.length > 0) {
      var boldOpt = opts.find(function(l){ return /\*\*/.test(l) || /✓|✅|√/.test(l); });
      if (boldOpt) {
        var bm = boldOpt.match(/^([A-D])/i);
        if (bm) answer = bm[1].toUpperCase();
      }
    }
    var mapped = opts.map(function(l){
      var m = l.match(/^([A-D])[\).、:：\s]*(.*)$/i);
      return { key: m ? m[1].toUpperCase() : "", text: m ? m[2] : l };
    }).filter(function(o){ return o.key; });
    return { question: stem, options: mapped, answer: answer };
  };

  var splitDeepReviewParts = function(text, targetWord) {
    var lines = String(text || "").split(/\n+/).map(function(s){ return s.trim(); }).filter(Boolean);
    var qIdx = lines.findIndex(function(l){ return /ssat|选择题|single choice|question|仿真题/i.test(l); });
    var quiz = parseDeepQuiz(lines, qIdx);
    var teachLines = qIdx >= 0 ? lines.slice(0, qIdx) : lines;
    teachLines = teachLines.filter(function(l){ return !/^[A-D][\).、:：\s]/i.test(l) && !/答案|answer/i.test(l); });

    // 校验：题干不能出现目标词（送分题检测）
    // 目标词 + 简单词形变化（去 e, 加 s/ed/ing/ly）都要检查
    if (quiz && targetWord) {
      var w = String(targetWord).toLowerCase().trim();
      var stem = w.replace(/e$/, ""); // 去掉结尾 e 得词根
      var variants = [w, w + "s", w + "es", w + "ed", w + "ing", w + "ly", w + "ion", stem + "ed", stem + "ing", stem + "ion"];
      var questionText = (quiz.question || "").toLowerCase();
      // 去掉 markdown 加粗/斜体标记后检测
      var cleanQ = questionText.replace(/[\*_`]/g, "");
      var leaked = variants.some(function(v) {
        // 用单词边界确保不是子串误匹配（例如 "ate" 不应匹配 "hesitate"）
        var re = new RegExp("\\b" + v.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&") + "\\b", "i");
        return re.test(cleanQ);
      });
      if (leaked) {
        console.warn('[review quiz] blocked: question contains target word "' + w + '". Q: ' + quiz.question);
        quiz = null; // 抛弃这道送分题
      }
    }

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
        var parts = splitDeepReviewParts(text, word);
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

  // ── USER CENTER (rendered on ALL screens) ──
  var userCenterEl = <UserCenter open={showUserCenter} onClose={function(){ setShowUserCenter(false); }} user={user} stats={stats} studyStreak={getStudyStreak()} studyGoal={studyGoal} dailyNewWords={dailyNewWords} deepReviewDailyCap={deepReviewDailyCap} userTier={userTier} newLearnedToday={getNewWordQuotaState().consumed || 0} onLogin={function(){ setShowUserCenter(false); setShowLogin(true); }} onLogout={function(){ handleLogout(); setShowUserCenter(false); }} />;

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
            <button style={{...S.primaryBtn,width:"100%",justifyContent:"center",fontSize:16,padding:"14px 24px"}} onClick={function(){ startLearning(0); }}>✨ 开始 AI 精读（{_sqQuota} 个词）</button>
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
              <button style={{...S.primaryBtn,width:"100%",justifyContent:"center",fontSize:16,padding:"14px 24px"}} onClick={function(){ startLearning(0); }}>✨ 开始学习不认识的词</button>
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
              {reviewFeedback && <div style={{textAlign:"center",padding:"8px 0",fontSize:14,fontWeight:700,color:reviewFeedback.color,transition:"opacity 0.3s"}}>{reviewFeedback.text}</div>}
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
      var _dIntervalDays = REVIEW_INTERVAL_DAYS[nextLevel];
      var _dFbText = result === "remembered" ? "✅ 下次复习在 " + _dIntervalDays + " 天后" : result === "forgot" ? "🔄 明天再复习" : "📝 " + _dIntervalDays + " 天后复习";
      setReviewFeedback({ text: _dFbText, color: result === "remembered" ? C.green : result === "forgot" ? C.red : C.gold });
      setTimeout(function(){ setReviewFeedback(null); }, 1500);
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
                  return <button key={op.key} data-option-btn="true" data-selected={picked ? "true" : "false"} disabled={deepQuizSubmitted} onClick={function(){setDeepQuizSelect(op.key);}} style={{...S.optionBtn,justifyContent:"flex-start",background:ok?C.greenLight:bad?C.redLight:picked?C.accentLight:"#fff",borderColor:ok?C.green:bad?C.red:picked?C.accent:C.border,color:ok?C.green:bad?C.red:C.text}}><span data-option-key="true" style={S.optionKey}>{op.key}</span>{op.text}</button>;
                })}
              </div>
              {!deepQuizSubmitted ? (
                <div style={{marginTop:10}}><button style={S.primaryBtn} disabled={!deepQuizSelect} onClick={function(){setDeepQuizSubmitted(true);}}>提交答案</button></div>
              ) : (
                <div style={{marginTop:10,fontSize:13,color:C.textSec}}>{deepQuiz.answer ? <>正确答案：<b>{deepQuiz.answer}</b></> : <span style={{color:C.gold}}>AI 未明确标注答案，请根据讲解内容判断</span>}</div>
              )}
            </div>
          )}

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginTop:8}}>
            <button style={{...S.primaryBtn,background:C.green,borderColor:C.green,justifyContent:"center",padding:"10px 8px"}} onClick={function(){finishDeep("remembered");}}>🟢 彻底掌握</button>
            <button style={{...S.primaryBtn,background:C.gold,borderColor:C.gold,justifyContent:"center",padding:"10px 8px"}} onClick={function(){finishDeep("fuzzy");}}>🟡 仍不确定</button>
            <button style={{...S.primaryBtn,background:C.red,borderColor:C.red,justifyContent:"center",padding:"10px 8px"}} onClick={function(){finishDeep("forgot");}}>🔴 面临易错</button>
          </div>
          {reviewFeedback && <div style={{textAlign:"center",padding:"8px 0",fontSize:14,fontWeight:700,color:reviewFeedback.color,transition:"opacity 0.3s"}}>{reviewFeedback.text}</div>}
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
        <title>Vocab by Know U. — AI 英语私教 · 词汇课</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="像私教一样懂你的 AI 英语老师，用你的生活场景教单词，真正的 1 对 1 因材施教 🎉" />
        <meta property="og:title" content="Vocab by Know U. — AI 英语私教" />
        <meta property="og:description" content="像私教一样懂你的 AI 英语老师，1 对 1 因材施教。每天免费体验！" />
        <meta property="og:url" content="https://knowulearning.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://knowulearning.com/og-cover.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <div className="vs-desktop-container" style={S.container}>

      {showWelcome && (
        <div style={{ position:"fixed", top:0, left:0, right:0, bottom:0, background:C.overlay,backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)", zIndex:999, display:"flex", alignItems:"center", justifyContent:"center", padding:20, fontFamily:FONT }}>
          <div style={{ background:C.card, borderRadius:20, padding:"32px 28px", maxWidth:480, width:"100%", boxShadow:"0 20px 60px rgba(0,0,0,0.25)", animation:"fadeUp 0.25s ease-out" }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12, marginBottom:4 }}>
              <BrandUIcon size={44} />
              <h2 style={{ fontSize:32, fontWeight:900, margin:0, letterSpacing:"-0.04em", lineHeight:1, color:C.text, textShadow:"0 2px 4px rgba(44,36,32,0.15)" }}>Vocab</h2>
            </div>
            <p style={{ fontSize:12, color:C.textSec, textAlign:"center", margin:"0 0 18px", fontWeight:500 }}>Your 1-on-1 AI English Tutor.</p>
            <div style={{ fontSize:14, lineHeight:1.85, color:C.text }}>
              <p style={{ margin:"0 0 12px" }}><strong>Know U.</strong> 是你的 AI 英语私教。它像最好的 1 对 1 老师一样，了解你的兴趣和生活，用你最容易理解的方式教英语。通过<strong>猜 → 讲 → 排序 → 复习</strong>，真正记住每个词。</p>
              <p style={{ margin:0, padding:"12px 14px", background:C.tealLight, borderRadius:12, fontSize:13, lineHeight:1.75, border:"1px solid rgba(42,122,110,0.12)" }}>
                <strong>开始前请先设置「学习画像」</strong><br/>
                填写你的兴趣爱好、常去的地方等。AI 会据此定制讲解和例句；也可以稍后用「照片日记」补充，越具体越有趣。
              </p>
            </div>
            <button onClick={() => { setShowWelcome(false); setSetupTab("profile"); setTimeout(function(){ var el = document.getElementById("vocabspark-profile-section"); if(el) el.scrollIntoView({behavior:"smooth",block:"start"}); }, 120); }} style={{ ...S.bigBtn, marginTop:16, width:"100%" }}>👍 我知道了，开始设置</button>
            <Disclaimer />
          </div>
        </div>
      )}

      <AppHeroHeader stats={stats} studyStreak={getStudyStreak()} user={user} onUserCenterClick={function(){ setShowUserCenter(true); }} syncStatus={syncStatus} />

      {/* 我的小本本卡：整合 宠物 + streak + XP + 词数，用叙事化文案替代散落的数据条
          替代旧的"连续学习激励条"，把分散的成长信号收成一个"温暖的我的世界" */}
      {(() => {
        var _sk = getStudyStreak();
        var _rwdCount = Object.keys(reviewWordData || {}).length;
        var _stage = pet ? getPetStage(pet.totalFed || 0) : null;
        var _hasAny = pet || _sk.streak > 0 || _rwdCount > 0 || (stats?.xp || 0) > 0;
        if (!_hasAny) return null;
        var todayDone = _sk.todayDone;
        // 第二行精简数据：词数 · XP · streak（用 mono 数字 + 短词），去掉"学了/累计/连续"啰嗦词
        var stats2 = [];
        if (_rwdCount > 0) stats2.push({n: _rwdCount, label: "词"});
        if ((stats?.xp || 0) > 0) stats2.push({n: stats.xp, label: "XP"});
        if (_sk.streak > 0) stats2.push({n: _sk.streak, label: "天 🔥"});
        return (
          <button
            onClick={function(){ if (pet) setShowPet(true); }}
            style={{
              width:"100%", textAlign:"left", marginBottom:14,
              padding:"14px 16px",
              background: todayDone
                ? "linear-gradient(135deg, "+C.greenLight+" 0%, #fff 60%, "+C.tealLight+" 100%)"
                : "linear-gradient(135deg, "+C.accentLight+" 0%, #fff 60%, "+C.goldLight+" 100%)",
              border: "1px solid " + (todayDone ? C.green+"33" : C.accent+"33"),
              borderRadius: 14,
              fontFamily: FONT,
              cursor: pet ? "pointer" : "default",
              display:"flex", alignItems:"center", gap:14,
              boxShadow: "0 1px 2px rgba(0,0,0,0.03), 0 4px 12px rgba(0,0,0,0.04)",
            }}
          >
            {/* 圆形头像 */}
            <div style={{
              width: 56, height: 56, flexShrink: 0,
              background: "rgba(255,255,255,0.7)",
              borderRadius: "50%",
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize: 36, lineHeight: 1,
              boxShadow: "inset 0 0 0 1px " + (todayDone ? C.green+"33" : C.accent+"22") + ", 0 1px 3px rgba(0,0,0,0.05)",
            }}>
              {_stage ? _stage.emoji : "🌱"}
            </div>
            <div style={{flex:1, minWidth:0}}>
              {/* 第一行：宠物名 · Lv N — 大字 Fraunces */}
              <div style={{fontSize:16, color:C.text, fontWeight:800, fontFamily:FONT_DISPLAY, letterSpacing:"-0.01em", marginBottom:4, display:"flex", alignItems:"baseline", gap:6}}>
                <span style={{color:C.accent}}>{pet ? pet.name : "🌱"}</span>
                {_stage && <span style={{...NUM, fontSize:12, color:C.textSec, fontWeight:700}}>· Lv {_stage.level}</span>}
              </div>
              {/* 第二行：数字 mono · 简短 label */}
              {stats2.length > 0 && (
                <div style={{fontSize:12, color:C.textSec, display:"flex", gap:10, alignItems:"center", flexWrap:"wrap"}}>
                  {stats2.map(function(s, i){
                    return <span key={i} style={{display:"inline-flex", alignItems:"baseline", gap:3}}>
                      <strong style={{...NUM, fontSize:13, color:C.text, fontWeight:800}}>{s.n}</strong>
                      <span>{s.label}</span>
                    </span>;
                  })}
                </div>
              )}
              {stats2.length === 0 && (
                <div style={{fontSize:11, color:C.textSec}}>{todayDone ? "✅ 今天完成" : "📖 一起加油"}</div>
              )}
            </div>
            {pet && <div style={{fontSize:18, color:C.textSec, flexShrink:0, opacity:0.6}}>›</div>}
          </button>
        );
      })()}

      {(() => {
        var _hasWords = parseWordsFromInput(wordInput).length > 0;
        if (!_hasWords) {
          // 无词表时保留引导卡（不展开示例了，让首屏更精简）
          return (
            <div style={{...S.card, marginBottom:14, borderColor:C.border, background:C.bg, borderLeft:"3px solid "+C.accent}}>
              <div style={{fontWeight:800,fontSize:15,marginBottom:10,color:C.accent}}>⚡ 今日任务</div>
              <div style={{background:C.card,border:"1px dashed "+C.teal,borderRadius:10,padding:"20px 16px",textAlign:"center"}}>
                <img src="/ai-illustration.png" alt="" style={{width:"50%",maxWidth:140,margin:"4px auto 14px",display:"block",opacity:0.9}} />
                <div style={{fontWeight:700,fontSize:15,color:C.text,marginBottom:10}}>导入你的第一个词表，开始学习吧！</div>
                <button style={{...S.smallBtn,background:C.teal,color:"#fff",border:"none",padding:"10px 26px",fontSize:14,fontWeight:700}} onClick={function(){ setSetupTab("words"); setTimeout(function(){ var el = document.getElementById("vocabspark-profile-section"); if(el) el.scrollIntoView({behavior:"smooth",block:"start"}); }, 120); }}>前往词库 →</button>
              </div>
            </div>
          );
        }

        // 计算"当前应该做哪一步"
        var stepDef;
        if (!dailyPlan.quickDone && dailyPlan.toReview.length > 0) {
          stepDef = {
            id:"review", icon:"🔄", title:"快速复习", color:C.teal,
            sub: dailyPlan.toReview.length + " 个词到期 · 约 " + dailyPlan.quickMin + " 分钟",
            cta: "▶ 开始复习 · " + dailyPlan.toReview.length + " 词",
            onClick: function(){ startQuickReview("due"); },
          };
        } else if (dailyPlan.quickDone && !dailyPlan.deepDone && !dailyPlan.deepLocked) {
          stepDef = {
            id:"deep", icon:"🎯", title:"重点攻克", color:C.red,
            sub: "易错词强化 · 约 " + dailyPlan.deepMin + " 分钟",
            cta: "▶ 开始攻克",
            onClick: startDeepReview,
          };
        } else if ((dailyPlan.quickDone || dailyPlan.toReview.length === 0) && (dailyPlan.deepDone || dailyPlan.deepLocked) && !dailyPlan.newDone) {
          var remain = Math.max(0, dailyPlan.newQuota - (dailyPlan.newLearnedToday || 0));
          stepDef = {
            id:"new", icon:"📖", title:"学习新词", color:C.accent,
            sub: remain + " 个词待学 · 约 " + dailyPlan.newMin + " 分钟",
            cta: "▶ 开始学习 · 剩 " + remain + " 词",
            onClick: function(){ startLearning(0); },
          };
        } else {
          // 全部完成
          stepDef = {
            id:"done", icon:"🎉", title:"今日任务完成！", color:C.green,
            sub: "保持节奏，明天见～ 还想学的话可以再复习一遍",
            cta: "🔄 再复习一遍",
            onClick: function(){ startQuickReview("all"); },
            allDone: true,
          };
        }

        // 已完成步骤的小战绩
        var doneItems = [];
        if (dailyPlan.quickDone && stepDef.id !== "review") doneItems.push("复习 " + (dailyPlan.toReview.length + (dailyPlan.quickReviewedToday || 0)) + " 词");
        else if (!dailyPlan.quickDone && dailyPlan.toReview.length === 0 && stepDef.id !== "review") doneItems.push("无到期复习");
        if (dailyPlan.deepDone && stepDef.id !== "deep") doneItems.push("攻克 " + (dailyPlan.deepUsedToday || 0) + " 词");
        else if (dailyPlan.deepLocked && stepDef.id !== "deep" && !dailyPlan.deepDone) doneItems.push("攻克未解锁");
        if (dailyPlan.newDone && stepDef.id !== "new") doneItems.push("新学 " + (dailyPlan.newLearnedToday || 0) + " 词");

        // 三步整体进度（用于全局 stepper）
        var totalSteps = 3;
        var doneSteps = (dailyPlan.quickDone ? 1 : 0) + (dailyPlan.deepDone || dailyPlan.deepLocked ? 1 : 0) + (dailyPlan.newDone ? 1 : 0);
        // 三步定义（含状态判断），用于 stepper 渲染
        var stepDefs = [
          { id:"review", icon:"🔄", label:"复习", done:dailyPlan.quickDone, current:stepDef.id === "review", locked:false },
          { id:"deep",   icon:"🎯", label:"攻克", done:dailyPlan.deepDone || dailyPlan.deepLocked, current:stepDef.id === "deep", locked:dailyPlan.deepLocked && !dailyPlan.deepDone },
          { id:"new",    icon:"📖", label:"新词", done:dailyPlan.newDone, current:stepDef.id === "new", locked:false },
        ];

        return (
          <div style={{...S.card, marginBottom:14, padding:"16px 18px"}}>
            {/* "上次学到第 N 词"小条 — 整合自原 teal banner，避免色彩跳脱 */}
            {hasSession && (
              <button onClick={async function(){ setScreen("learning"); await loadBatch(idx, learned, undefined, { streaming: true }); applyWordData(wordList[idx]); }} style={{
                display:"flex", alignItems:"center", justifyContent:"space-between",
                width:"100%", marginBottom:12, padding:"8px 12px",
                background:C.accentLight,
                border:"1px solid "+C.accent+"33",
                borderRadius:8, cursor:"pointer", fontFamily:FONT, textAlign:"left",
              }}>
                <span style={{fontSize:12, color:C.accent, fontWeight:600}}>
                  📌 上次学到 <strong style={{fontFamily:FONT_DISPLAY,fontSize:13}}>{idx+1}</strong>/{wordList.length} 词
                </span>
                <span style={{fontSize:12, color:C.accent, fontWeight:700}}>继续 →</span>
              </button>
            )}
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
              <div style={{fontSize:14,fontWeight:800,color:C.text,letterSpacing:"-0.01em",fontFamily:FONT_DISPLAY}}>📚 今日任务</div>
              <div style={{fontSize:11,fontWeight:600,color:C.textSec}}>
                <span style={{color:C.text,fontWeight:800,fontFamily:FONT_DISPLAY,fontSize:13}}>{doneSteps}</span>/{totalSteps} 步 · 约 {dailyPlan.totalMin} 分钟
              </div>
            </div>
            {/* 三段 stepper：恢复"今天 3 件事"的全局感，每段标注状态 */}
            <div style={{display:"flex", gap:6, marginBottom:14}}>
              {stepDefs.map(function(s, i){
                // 颜色逻辑：done 绿 / current accent / locked 灰边 / 待办浅灰
                var bg, border, labelColor;
                if (s.done) { bg = C.green; border = C.green; labelColor = C.green; }
                else if (s.current) { bg = stepDef.color || C.accent; border = stepDef.color || C.accent; labelColor = stepDef.color || C.accent; }
                else if (s.locked) { bg = "rgba(0,0,0,0.05)"; border = C.border; labelColor = C.textSec; }
                else { bg = "rgba(0,0,0,0.05)"; border = C.border; labelColor = C.textSec; }
                return (
                  <div key={s.id} style={{flex:1, textAlign:"center"}}>
                    <div style={{
                      height: 6, background: bg, border:"1px solid "+border,
                      borderRadius: 3, marginBottom: 4,
                      transition: "all 0.3s",
                      boxShadow: s.current ? "0 0 0 3px " + (stepDef.color || C.accent) + "22" : "none",
                    }} />
                    <div style={{
                      fontSize: 10.5,
                      fontWeight: s.current ? 800 : s.done ? 700 : 600,
                      color: labelColor,
                      letterSpacing: "0.02em",
                      transition: "color 0.3s",
                    }}>
                      {s.done ? "✓ " : s.current ? "▶ " : s.locked ? "🔒 " : ""}{s.label}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* 当前步骤行 */}
            <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
              <div style={{
                width:46, height:46, borderRadius:12,
                background:stepDef.color+"22",
                display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:24, flexShrink:0,
              }}>{stepDef.icon}</div>
              <div style={{flex:1, minWidth:0}}>
                <div style={{fontSize:16, fontWeight:800, color:C.text, marginBottom:2, fontFamily:FONT_DISPLAY}}>
                  {stepDef.title}
                </div>
                <div style={{fontSize:12, color:C.textSec, lineHeight:1.5}}>{stepDef.sub}</div>
              </div>
            </div>
            {/* CTA 按钮 */}
            <button onClick={stepDef.onClick} style={{
              display:"block", width:"100%",
              padding:"14px 0",
              background: stepDef.allDone
                ? "linear-gradient(135deg, "+C.green+" 0%, "+C.teal+" 100%)"
                : "linear-gradient(135deg, "+C.accent+" 0%, "+C.gold+" 100%)",
              color:"#fff",
              border:"none",
              borderRadius:12,
              fontFamily:FONT,
              fontSize:15, fontWeight:800,
              cursor:"pointer",
              boxShadow:"0 4px 12px " + (stepDef.allDone ? C.green : C.accent) + "55",
              letterSpacing:"0.02em",
            }}>{stepDef.cta}</button>
            {/* 已完成步骤折成小字（战绩） */}
            {doneItems.length > 0 && (
              <div style={{
                marginTop:14, paddingTop:12,
                borderTop:"1px dashed "+C.border,
                fontSize:12, color:C.textSec,
                display:"flex", alignItems:"center", gap:14, flexWrap:"wrap",
              }}>
                <span style={{fontWeight:700, color:C.text}}>已完成</span>
                {doneItems.map(function(t, i){
                  return <span key={i} style={{display:"inline-flex", alignItems:"center", gap:4}}>
                    <span style={{color:C.green, fontWeight:800}}>✓</span>
                    {t}
                  </span>;
                })}
              </div>
            )}
            {/* 二级操作（替补按钮 — 切换到不是当前步骤的） */}
            {!stepDef.allDone && doneItems.length > 0 && (
              <div style={{display:"flex",gap:8,marginTop:10}}>
                {stepDef.id !== "review" && dailyPlan.toReview.length > 0 && (
                  <button style={{...S.smallBtn, flex:1, padding:"7px 0", fontSize:12, background:"transparent", border:"1px solid "+C.border, color:C.teal}} onClick={function(){startQuickReview("due");}}>🔄 复习</button>
                )}
                {stepDef.id !== "deep" && !dailyPlan.deepLocked && (
                  <button style={{...S.smallBtn, flex:1, padding:"7px 0", fontSize:12, background:"transparent", border:"1px solid "+C.border, color:C.red}} onClick={startDeepReview}>🎯 攻克</button>
                )}
                {stepDef.id !== "new" && (
                  <button style={{...S.smallBtn, flex:1, padding:"7px 0", fontSize:12, background:"transparent", border:"1px solid "+C.border, color:C.accent}} onClick={function(){startLearning(0);}}>📖 新词</button>
                )}
              </div>
            )}
          </div>
        );
      })()}

      {/* "上次学到第 N 词"入口已整合到今日任务卡顶部小条 — 不再单独色卡突兀 */}

      {/* 未登录用户：精简提示条（仅在快接近上限时显示，不再用大蓝色 banner 抢主流程位置） */}
      {!user && todayCount >= DAILY_LIMIT_GUEST - 2 && (
        <div onClick={() => setShowLogin(true)} style={{
          marginBottom: 12,
          padding: "8px 14px",
          background: todayCount >= DAILY_LIMIT_GUEST ? C.redLight : C.goldLight,
          border: "1px solid " + (todayCount >= DAILY_LIMIT_GUEST ? C.red+"55" : C.gold+"55"),
          borderRadius: 10,
          fontSize: 12,
          color: todayCount >= DAILY_LIMIT_GUEST ? C.red : C.gold,
          fontWeight: 600,
          cursor: "pointer",
          textAlign: "center",
        }}>
          {todayCount >= DAILY_LIMIT_GUEST
            ? "⚠️ 游客今日 " + DAILY_LIMIT_GUEST + " 词上限已到 · 注册后每日 " + DAILY_LIMIT_REGISTERED + " 词 →"
            : "🎓 还能学 " + (DAILY_LIMIT_GUEST - todayCount) + " 词 · 注册后每日 " + DAILY_LIMIT_REGISTERED + " 词无限听 →"
          }
        </div>
      )}

      <div id="vocabspark-profile-section" style={{...S.tabBar}}>
        <button style={{...(setupTab==="profile"?S.tabActive:S.tab)}} onClick={() => setSetupTab("profile")}>👤 我是谁</button>
        <button style={{...(setupTab==="goal"?S.tabActive:S.tab)}} onClick={() => setSetupTab("goal")}>🎯 我的目标</button>
        <button style={{...(setupTab==="words"?S.tabActive:S.tab)}} onClick={() => setSetupTab("words")}>📝 词库</button>
        <button style={{...(setupTab==="stats"?S.tabActive:S.tab)}} onClick={() => setSetupTab("stats")}>📊 我的成绩</button>
      </div>
      {setupTab === "profile" && (
        <div style={S.setupCard}>
          <div style={S.setupHint}>{profileLocked ? "✅ 画像已保存 — AI 会用它为你定制每一个例句" : "🌟 告诉 AI 你的世界——兴趣爱好、日常生活，越真实越有趣，AI 造的句子会让你惊喜！"}</div>
          {profileLocked ? (() => {
            // 画像质量评估
            var len = profile.length;
            var quality, qColor, qLabel, qHint;
            if (len >= 200) { quality = 100; qColor = C.green; qLabel = "画像丰富"; qHint = "AI 能生成高度个性化的例句"; }
            else if (len >= 100) { quality = 66; qColor = C.gold; qLabel = "画像良好"; qHint = "补充更多细节（爱好/朋友/地点）能让 AI 更懂你"; }
            else { quality = 33; qColor = C.accent; qLabel = "画像较简单"; qHint = "建议补充到 100 字以上，AI 会用这些素材编织例句"; }
            return <div>
              {/* 画像质量评分卡 */}
              <div style={{background:"linear-gradient(135deg, "+qColor+"11 0%, "+qColor+"22 100%)",border:"1px solid "+qColor+"33",borderRadius:12,padding:"12px 14px",marginBottom:12}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
                  <div style={{fontSize:13,fontWeight:700,color:qColor}}>✨ {qLabel}</div>
                  <div style={{fontSize:12,color:C.textSec}}>{len} 字</div>
                </div>
                <div style={{height:6,background:"#fff",borderRadius:3,overflow:"hidden",marginBottom:6}}>
                  <div style={{height:"100%",width:quality+"%",background:"linear-gradient(90deg, "+qColor+" 0%, "+qColor+"aa 100%)",borderRadius:3,transition:"width 0.3s"}} />
                </div>
                <div style={{fontSize:11,color:C.textSec,lineHeight:1.5}}>{qHint}</div>
              </div>
              <div style={S.profilePrev}>{profile.slice(0,250)}{profile.length>250?"...":""}</div>
              <button style={{...S.smallBtn,marginTop:10}} onClick={() => setProfileLocked(false)}>✏️ 编辑画像</button>
            </div>;
          })() : (
            <div>
              {/* 引导卡（精简）—— 一句话 + 两个并列动作（填示例 / 用 chip 拼） */}
              {!profile.trim() && (
                <div style={{background:C.goldLight,border:"1px solid "+C.gold+"55",borderRadius:10,padding:"12px 14px",marginBottom:12,fontSize:13,lineHeight:1.7}}>
                  <div style={{fontWeight:700,marginBottom:6,color:C.text}}>👇 不知道写啥？两条路：</div>
                  <div style={{color:C.textSec,fontSize:12,marginBottom:8}}>① 直接填个示例改一改 ② 点下方的小标签往里加内容</div>
                  <button style={{background:C.gold,color:"#fff",border:"none",borderRadius:8,padding:"6px 14px",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:FONT}} onClick={function(){ setProfile(PROFILE_DEFAULT_EXAMPLE); }}>📝 填入示例</button>
                </div>
              )}
              <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:10}}>
                {["💬 今天最开心的事","🎬 最近在追的剧/动画","🌟 最近认识的新朋友","📍 上周末去了哪里","😋 最近特别想吃什么","🎵 最近单曲循环的歌","😤 最近让你烦心的事","🐾 有没有喜欢的宠物"].map(function(p) {
                  return <button key={p} onClick={function() { setProfile(function(prev) { return prev + (prev && !prev.endsWith('\n') ? '\n' : '') + p + '：'; }); }} style={{background:C.accentLight,border:"1px solid "+C.accent+"44",borderRadius:20,padding:"4px 12px",fontSize:12,color:C.accent,cursor:"pointer",fontFamily:FONT,fontWeight:500}}>{p}</button>;
                })}
              </div>
              {/* "看示例"折叠已删除 — 上方"填入示例"按钮 + chip 标签 + textarea placeholder 已经够引导，避免信息过载 */}
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
              <button style={{...S.tealBtn,opacity:profile.length>PROFILE_MAX?0.45:1,cursor:profile.length>PROFILE_MAX?"not-allowed":"pointer"}} disabled={profile.length>PROFILE_MAX} onClick={() => { setProfileLocked(true); loadSave().then(d => doSave({...(d||{}), profile, stats})); if (!wordInput.trim()) { setTimeout(function(){ setSetupTab("words"); }, 300); } }}>💾 保存画像</button>
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
                  syncToCloud();
                });
              }} style={{
                background: selected ? C.accentLight : "#fff",
                border: "2px solid " + (selected ? C.accent : C.border),
                borderRadius: 14,
                padding: "14px 14px",
                textAlign: "left",
                cursor: "pointer",
                fontFamily: FONT,
                transition: "all 0.15s ease",
                boxShadow: selected ? "0 6px 18px "+C.accent+"33" : "0 1px 2px rgba(44,36,32,0.04)",
                transform: selected ? "translateY(-1px)" : "none",
                position: "relative",
              }}
              onMouseEnter={function(e){ if(!selected){ e.currentTarget.style.borderColor = C.accent+"66"; e.currentTarget.style.background = C.accentLight+"55"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(196,107,48,0.12)"; } }}
              onMouseLeave={function(e){ if(!selected){ e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 1px 2px rgba(44,36,32,0.04)"; } }}>
                {selected && <div style={{position:"absolute",top:8,right:10,width:22,height:22,borderRadius:"50%",background:C.accent,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,boxShadow:"0 2px 6px "+C.accent+"66"}}>✓</div>}
                <div style={{fontSize:14,fontWeight:700,color: selected ? C.accent : C.text,marginBottom:2,paddingRight:selected?28:0}}>{opt.label}</div>
                <div style={{fontSize:12,color:selected?C.accent:C.textSec,opacity:selected?0.9:1,lineHeight:1.4}}>{opt.desc}</div>
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
                  syncToCloud();
                });
              }}>💾 保存</button>
            </div>
          )}
          {studyGoal && (studyGoal !== "other" || studyGoalCustom.trim()) && (() => {
            var dir = GOAL_DIRECTIVES[studyGoal];
            var label = studyGoal === "other" ? studyGoalCustom : STUDY_GOAL_OPTIONS.find(function(o){return o.key===studyGoal;})?.label;
            return (
              <div style={{background:C.tealLight,border:"1px solid "+C.teal+"44",borderRadius:10,padding:"14px 16px",fontSize:13,color:C.text,lineHeight:1.7}}>
                <div style={{fontWeight:700,color:C.teal,marginBottom:8,fontSize:13.5}}>✅ AI 已切换到「{label}」模式</div>
                {dir ? (
                  <div style={{fontSize:12.5,lineHeight:1.85,color:C.text}}>
                    <div>📊 <strong>词汇难度</strong>：{dir.difficulty}</div>
                    <div>🎨 <strong>教学风格</strong>：{dir.style.split('，')[0]}</div>
                    <div>📝 <strong>例句场景</strong>：{dir.sceneTags}</div>
                    <div>📖 <strong>Cloze 文体</strong>：{dir.clozeStyle.split('，')[0]}</div>
                    <div style={{marginTop:6,fontSize:11,color:C.textSec,fontStyle:"italic"}}>以上四条贯穿所有 AI 输出（猜词例句、teach 场景、cloze 短文）。换目标可立即切换风格。</div>
                  </div>
                ) : (
                  <div style={{fontSize:12,color:C.textSec}}>AI 会贴合该目标调整教学内容。</div>
                )}
              </div>
            );
          })()}
          {!studyGoal && (
            <div style={{fontSize:12,color:C.textSec,lineHeight:1.6}}>💡 选择一个最接近的考试目标即可。设置后 AI 会在例句和教学中适当偏向该目标场景。</div>
          )}

          {/* ───── 学习节奏（从原 plan tab 拆并入此） ───── */}
          {(() => {
            var planView = getStudyPlanPrediction();
            var _estDays = planView.unlearnedCount > 0 ? Math.ceil(planView.unlearnedCount / (dailyNewWords || 20)) : 0;
            var _estDate = _estDays > 0 ? new Date(Date.now() + _estDays * 86400000) : null;
            var _estDateStr = _estDate ? (_estDate.getMonth()+1) + " 月 " + _estDate.getDate() + " 日" : null;
            return <div style={{marginTop:24, paddingTop:18, borderTop:"1px dashed "+C.border}}>
              <div style={{fontSize:11,fontWeight:800,color:C.textSec,letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:14}}>⏱ 学习节奏</div>
              {/* 每日新词目标 — 三档 */}
              <div style={{marginBottom:18}}>
                <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",marginBottom:8}}>
                  <div style={{fontSize:14,fontWeight:700,color:C.text}}>每日新词目标</div>
                  <div style={{fontSize:12,color:C.textSec}}>当前 <strong style={{color:C.accent}}>{dailyNewWords || 20}</strong> 词/天</div>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:8}}>
                  {[
                    { n:10, label:"轻松", desc:"10 词/天", icon:"🌱" },
                    { n:20, label:"标准", desc:"20 词/天", icon:"🎯" },
                    { n:30, label:"冲刺", desc:"30 词/天", icon:"🚀" },
                  ].map(function(opt) {
                    var selected = dailyNewWords === opt.n;
                    return <button key={opt.n} onClick={function(){updateDailyNewWords(opt.n);}} style={{background:selected?C.accentLight:"#fff",border:"2px solid "+(selected?C.accent:C.border),borderRadius:12,padding:"10px 6px",cursor:"pointer",fontFamily:FONT,textAlign:"center",transition:"all 0.15s ease",boxShadow:selected?"0 4px 12px "+C.accent+"33":"0 1px 2px rgba(44,36,32,0.04)"}}>
                      <div style={{fontSize:20,marginBottom:2}}>{opt.icon}</div>
                      <div style={{fontSize:13,fontWeight:700,color:selected?C.accent:C.text}}>{opt.label}</div>
                      <div style={{fontSize:10,color:C.textSec,marginTop:2}}>{opt.desc}</div>
                    </button>;
                  })}
                </div>
                <details style={{fontSize:12,color:C.textSec}}>
                  <summary style={{cursor:"pointer",padding:"4px 0",userSelect:"none"}}>其他档位（5 / 15 / 25 / 50）</summary>
                  <div style={{display:"flex",gap:6,flexWrap:"wrap",paddingTop:6}}>
                    {[5,15,25,50].map(function(n) { return <button key={n} onClick={function(){updateDailyNewWords(n);}} style={dailyNewWords===n ? {...S.ghostBtn, background:C.accent, color:"#fff", borderColor:C.accent, padding:"6px 14px"} : {...S.ghostBtn, padding:"6px 14px"}}>{n}</button>; })}
                  </div>
                </details>
                {planView.unlearnedCount > 0 && _estDateStr && (
                  <div style={{background:C.tealLight,border:"1px solid "+C.teal+"33",borderRadius:10,padding:"10px 12px",fontSize:12,color:C.teal,marginTop:10,lineHeight:1.6}}>
                    📈 按每天 {dailyNewWords || 20} 个新词，<strong>预计 {_estDays} 天后（{_estDateStr}）</strong>可学完
                  </div>
                )}
              </div>
              {/* 攻克上限 */}
              <div>
                <div style={{fontSize:14,fontWeight:700,color:C.text,marginBottom:4}}>每日深度攻克上限</div>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <input type="number" min={1} max={30} value={deepReviewDailyCap} onChange={function(e){updateDeepReviewDailyCap(e.target.value);}} style={{width:80,padding:"9px 10px",border:"1px solid "+C.border,borderRadius:8,fontFamily:FONT,fontSize:13}} />
                  <span style={{fontSize:12,color:C.textSec}}>个/天</span>
                </div>
                <div style={{fontSize:11,color:C.textSec,marginTop:4,lineHeight:1.5}}>💡 攻克 = 对易错/不确定词的强化复习。建议 5~10 个/天，避免疲劳。</div>
                <div style={{fontSize:12,color:C.text,marginTop:4}}>🔴 今日已攻克 {planView.deepUsedToday}，剩余 <strong>{planView.deepLeftToday}</strong></div>
              </div>
            </div>;
          })()}
        </div>
      )}
      {/* plan tab 已拆除：词库仪表盘 + 快筛 已并入"词库" tab；每日新词 + 攻克上限 已并入"我的目标" tab */}

      {setupTab === "words" && (
        <div style={S.setupCard}>
          {/* 词库仪表盘（从原 plan tab 迁移） — 顶部 4 格统计 */}
          {(() => {
            var planView = getStudyPlanPrediction();
            if (planView.totalWords === 0) return null;
            return <div style={{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:8,marginBottom:14}}>
              <div style={{background:"linear-gradient(135deg, "+C.tealLight+" 0%, #fff 100%)",border:"1px solid "+C.teal+"33",borderRadius:10,padding:"10px 12px"}}>
                <div style={{fontSize:10,color:C.textSec,fontWeight:700,letterSpacing:"0.05em",marginBottom:2}}>📚 词库总数</div>
                <div style={{fontSize:22,fontWeight:800,color:C.teal,lineHeight:1,fontFamily:FONT_DISPLAY}}>{planView.totalWords}</div>
              </div>
              <div style={{background:"linear-gradient(135deg, "+C.accentLight+" 0%, #fff 100%)",border:"1px solid "+C.accent+"33",borderRadius:10,padding:"10px 12px"}}>
                <div style={{fontSize:10,color:C.textSec,fontWeight:700,letterSpacing:"0.05em",marginBottom:2}}>📝 待学习</div>
                <div style={{fontSize:22,fontWeight:800,color:C.accent,lineHeight:1,fontFamily:FONT_DISPLAY}}>{planView.unlearnedCount}</div>
              </div>
              {planView.learnedCount > 0 && <div style={{background:"linear-gradient(135deg, "+C.greenLight+" 0%, #fff 100%)",border:"1px solid "+C.green+"33",borderRadius:10,padding:"10px 12px"}}>
                <div style={{fontSize:10,color:C.textSec,fontWeight:700,letterSpacing:"0.05em",marginBottom:2}}>📖 已学过</div>
                <div style={{fontSize:22,fontWeight:800,color:C.green,lineHeight:1,fontFamily:FONT_DISPLAY}}>{planView.learnedCount}</div>
              </div>}
              {planView.dueCount > 0 && <div style={{background:"linear-gradient(135deg, "+C.goldLight+" 0%, #fff 100%)",border:"1px solid "+C.gold+"33",borderRadius:10,padding:"10px 12px"}}>
                <div style={{fontSize:10,color:C.textSec,fontWeight:700,letterSpacing:"0.05em",marginBottom:2}}>📅 今日到期</div>
                <div style={{fontSize:22,fontWeight:800,color:C.gold,lineHeight:1,fontFamily:FONT_DISPLAY}}>{planView.dueCount}</div>
              </div>}
            </div>;
          })()}
          {(() => {
            var _allWords = parseWordsFromInput(wordInput);
            var _unlearnedCount = _allWords.filter(function(w){ return !wordStatusMap[w] || wordStatusMap[w] === "unlearned"; }).length;
            if (_allWords.length === 0) return <div style={S.setupHint}>👇 先导入词表或选择预设词库，开始你的学习之旅！</div>;
            return <div style={{marginBottom:14}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:10}}>
                <button style={{background:"#fff",border:"1.5px solid "+C.border,borderRadius:14,padding:"16px 12px",textAlign:"center",cursor:"pointer",fontFamily:FONT,boxShadow:C.shadowSoft,transition:"all 0.2s ease",borderTop:"3px solid "+C.teal}} onClick={function(){ startScreening(); }}
                  onMouseEnter={function(e){ e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 20px rgba(74,109,140,0.15)"; e.currentTarget.style.borderColor=C.teal+"66"; }}
                  onMouseLeave={function(e){ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow=C.shadowSoft; e.currentTarget.style.borderColor=C.border; e.currentTarget.style.borderTopColor=C.teal; }}>
                  <div style={{fontSize:26,marginBottom:6}}>🃏</div>
                  <div style={{fontSize:14,fontWeight:700,color:C.teal,marginBottom:2}}>快筛模式</div>
                  <div style={{fontSize:11,color:C.textSec,lineHeight:1.4,marginBottom:10}}>认识就跳过，过滤词表</div>
                  <div style={{display:"inline-block",padding:"4px 12px",background:C.tealLight,borderRadius:20,fontSize:12,fontWeight:700,color:C.teal}}>{_unlearnedCount} 词待筛</div>
                </button>
                <button style={{background:"#fff",border:"1.5px solid "+C.border,borderRadius:14,padding:"16px 12px",textAlign:"center",cursor:"pointer",fontFamily:FONT,boxShadow:C.shadowSoft,transition:"all 0.2s ease",borderTop:"3px solid "+C.accent}} onClick={function(){ startLearning(0); }}
                  onMouseEnter={function(e){ e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 20px rgba(196,107,48,0.18)"; e.currentTarget.style.borderColor=C.accent+"66"; }}
                  onMouseLeave={function(e){ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow=C.shadowSoft; e.currentTarget.style.borderColor=C.border; e.currentTarget.style.borderTopColor=C.accent; }}>
                  <div style={{fontSize:26,marginBottom:6}}>✨</div>
                  <div style={{fontSize:14,fontWeight:700,color:C.accent,marginBottom:2}}>精读模式</div>
                  <div style={{fontSize:11,color:C.textSec,lineHeight:1.4,marginBottom:10}}>AI 定制 · 深度学习</div>
                  <div style={{display:"inline-block",padding:"4px 12px",background:C.accentLight,borderRadius:20,fontSize:12,fontWeight:700,color:C.accent}}>{Math.min(_unlearnedCount, dailyNewWords||10)} 词精读</div>
                </button>
              </div>
              {_unlearnedCount > 50 && (
                <div style={{background:C.goldLight,border:"1px solid "+C.gold+"44",borderRadius:8,padding:"8px 12px",fontSize:12,color:C.textSec,lineHeight:1.5,marginBottom:10}}>
                  💡 词库 <strong>{_unlearnedCount}</strong> 个未学词，建议先快筛再精读
                </div>
              )}
            </div>;
          })()}
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
            <div style={S.uploadRow}>
              <button style={S.uploadBtn} onClick={() => fileRef.current?.click()}>📁 上传</button>
              <span style={{fontSize:13,color:C.textSec}}>{fileLabel||".xlsx .csv .txt 均支持"}</span>
              <input ref={fileRef} type="file" accept=".csv,.tsv,.txt,.xlsx,.xls" style={{display:"none"}} onChange={handleFile} />
            </div>
            <div style={{marginLeft:"auto",display:"flex",alignItems:"center",gap:6}}>
              {/* 重置进度改为低调文字链接，避免误点；点击后才展开说明 */}
              <button onClick={function(){setHelpTip(helpTip==="reset"?null:"reset");}} style={{padding:"4px 10px",background:"transparent",color:C.textSec,border:"none",fontFamily:FONT,fontSize:12,cursor:"pointer",textDecoration:"underline dashed",textUnderlineOffset:3,whiteSpace:"nowrap"}}>重置进度</button>
            </div>
          </div>
          {helpTip === "reset" && <div style={{background:C.redLight,border:"1px solid "+C.red+"33",borderRadius:10,padding:"12px 14px",fontSize:12,color:C.text,lineHeight:1.7,marginBottom:10}}>
            <div style={{fontWeight:700,color:C.red,marginBottom:4}}>⚠️ 重置进度（谨慎操作）</div>
            <span style={{color:C.textSec}}>换词表后建议重置。<br/>会清除：单词状态、复习记录、XP 和正确率、今日配额<br/>不会清除：词表内容、学习画像、每日目标、连续学习天数</span>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:10}}>
              <button onClick={function(){setHelpTip(null);}} style={{background:"transparent",border:"none",color:C.textSec,fontSize:12,cursor:"pointer",padding:0,fontFamily:FONT}}>取消</button>
              <button onClick={function(){ setHelpTip(null); setShowResetConfirm(true); }} style={{padding:"6px 14px",background:C.red,color:"#fff",border:"none",borderRadius:8,fontFamily:FONT,fontSize:12,fontWeight:700,cursor:"pointer"}}>确认重置</button>
            </div>
          </div>}
          {(() => {
            var hasUserWords = wordInput.trim().length > 0;
            if (hasUserWords) return null;
            var goalPresets = (studyGoal && PRESETS_BY_GOAL[studyGoal]) ? PRESETS_BY_GOAL[studyGoal] : PRESETS;
            var goalLabel = studyGoal && STUDY_GOAL_OPTIONS.find(function(o){return o.key===studyGoal;});
            return <div style={{marginBottom:10}}>
              <div style={{fontSize:12,color:C.textSec,fontWeight:700,marginBottom:6}}>
                {goalLabel ? "📋 推荐词表（" + goalLabel.label + "）" : "📋 预设词表（设置「学习目的」可获得针对性推荐）"}
              </div>
              <div style={S.presetRow}>{Object.keys(goalPresets).map(function(n) {
                return <button key={n} style={S.presetBtn} onClick={function(){
                  var existingCount = (wordInput || '').split('\n').filter(Boolean).length;
                  var presetWords = goalPresets[n];
                  var finalInput = presetWords;
                  if (existingCount > 50) {
                    // 已有大词表，合并而非替换
                    if (!confirm("检测到你已有 " + existingCount + " 个词的词表。\n\n点「确定」：合并预设词到现有词表（不丢旧词）\n点「取消」：放弃")) return;
                    var existingWords = wordInput.split('\n').map(w => w.trim().toLowerCase()).filter(Boolean);
                    var seen = new Set(existingWords);
                    var merged = [...existingWords];
                    presetWords.split('\n').forEach(w => {
                      var lw = w.trim().toLowerCase();
                      if (lw && !seen.has(lw)) { seen.add(lw); merged.push(lw); }
                    });
                    finalInput = merged.join('\n');
                  }
                  setWordInput(finalInput);
                  loadSave().then(function(d) { d = d || {}; d.wordInput = finalInput; doSave(d); if (userRef.current) syncToCloud(); });
                }}>{n}</button>;
              })}</div>
            </div>;
          })()}

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
                            {w} · {m.text}{Number.isFinite(d.reviewLevel) && d.reviewLevel > 0 ? " L"+d.reviewLevel : ""}{overdue ? " ⚠️" : ""}
                          </div>
                        ) : (
                          <>
                            <div style={{fontWeight:700,fontSize:14,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:180}}>{w}</div>
                            <div style={{fontSize:11,color:m.color,fontWeight:700}}>
                              {m.text}
                              {Number.isFinite(d.reviewLevel) && d.reviewLevel > 0 && <span style={{marginLeft:4,fontSize:10,color:C.textSec}}>{"▪".repeat(Math.min(d.reviewLevel, 5))}</span>}
                              {" · "}{reviewAgeText(d.lastReviewDate)} {overdue ? "⚠️" : ""}
                              {d.nextReviewDate && !overdue && s !== "unlearned" && <span style={{fontSize:10,color:C.textSec,marginLeft:4}}>{"→ " + Math.max(0, Math.ceil((new Date(d.nextReviewDate).getTime() - new Date().setHours(0,0,0,0)) / 86400000)) + "天后"}</span>}
                            </div>
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

        </div>
      )}

      {setupTab === "stats" && (() => {
        var statsView = getStatsSnapshot();
        var planView = getStudyPlanPrediction();
        var phaseView = getPhaseExecutionSnapshot();
        var streakInfo = getStudyStreak();
        // 统一 section header 样式
        var sectionHeader = function(text) {
          return <div style={{
            fontSize: 11, fontWeight: 800, color: C.textSec,
            letterSpacing: "0.1em", margin: "18px 4px 8px",
            textTransform: "uppercase", display:"flex", alignItems:"center", gap:6,
          }}>{text}</div>;
        };
        return <div style={S.setupCard}>

          {/* ───── 📊 这周表现（数据展示）───── */}
          {sectionHeader("📊 这周表现")}

          {/* 连续学习日历：最近 30 天点亮已学日 */}
          <StreakCalendar history={streakInfo.history} streak={streakInfo.streak} todayDone={streakInfo.todayDone} />

          {statsView.totalWords > 0 && (() => {
            // 学习进度 = 已接触的词 / 已接触的词总数（不是全词库！这样才公平）
            var _touched = (statsView.statuses.mastered||0) + (statsView.statuses.uncertain||0) + (statsView.statuses.error||0) + (statsView.statuses.learning||0);
            var _mastered = statsView.statuses.mastered || 0;
            var _skipped = statsView.statuses.skipped || 0;
            var _engaged = _touched + _skipped; // 已做过任何处理的词
            var masteredPct = _touched > 0 ? Math.round((_mastered / _touched) * 100) : 0;
            var healthColor = masteredPct >= 70 ? C.green : masteredPct >= 40 ? C.gold : C.accent;
            var healthLabel = masteredPct >= 70 ? "优秀" : masteredPct >= 40 ? "良好" : _touched > 0 ? "进步中" : "待开始";
            return <div style={{display:"flex",alignItems:"center",gap:14,background:"linear-gradient(135deg, "+C.tealLight+" 0%, "+C.accentLight+" 100%)",border:"1px solid "+C.border,borderRadius:12,padding:"14px 16px",marginBottom:12}}>
              <div style={{position:"relative",width:56,height:56,flexShrink:0}}>
                <svg width="56" height="56" viewBox="0 0 56 56"><circle cx="28" cy="28" r="24" fill="none" stroke={C.border} strokeWidth="5"/><circle cx="28" cy="28" r="24" fill="none" stroke={healthColor} strokeWidth="5" strokeLinecap="round" strokeDasharray={2*Math.PI*24} strokeDashoffset={2*Math.PI*24*(1-masteredPct/100)} transform="rotate(-90 28 28)"/></svg>
                <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",fontSize:14,fontWeight:800,color:healthColor}}>{masteredPct}%</div>
              </div>
              <div>
                <div style={{fontWeight:700,fontSize:14,color:C.text}}>学过词掌握率：<span style={{color:healthColor}}>{healthLabel}</span></div>
                <div style={{fontSize:12,color:C.textSec,marginTop:2}}>在 {_touched} 个学过的词中掌握 {_mastered} 个{_skipped > 0 ? "，快筛认识 " + _skipped + " 个" : ""}</div>
              </div>
            </div>;
          })()}

          {/* 学习成就总览 - 突出真实数据 */}
          <div style={{background:"linear-gradient(135deg, "+C.goldLight+" 0%, "+C.accentLight+" 100%)",border:"1px solid "+C.gold+"33",borderRadius:12,padding:"12px 14px",marginBottom:12}}>
            <div style={{fontSize:12,fontWeight:700,color:C.gold,marginBottom:8}}>🏆 累计学习成就</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:8}}>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:20,fontWeight:800,color:C.accent}}>{statsView.xp}</div>
                <div style={{fontSize:10,color:C.textSec}}>累计 XP</div>
              </div>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:20,fontWeight:800,color:C.green}}>{statsView.statuses.mastered || 0}</div>
                <div style={{fontSize:10,color:C.textSec}}>已掌握</div>
              </div>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:20,fontWeight:800,color:C.teal}}>{statsView.answered}</div>
                <div style={{fontSize:10,color:C.textSec}}>累计答题</div>
              </div>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:20,fontWeight:800,color:C.gold}}>{statsView.bestStreak}</div>
                <div style={{fontSize:10,color:C.textSec}}>最佳连对</div>
              </div>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:10,marginBottom:12}}>
            <div style={S.statCard}><div style={S.statNum}>{statsView.totalWords}</div><div style={S.statLabel}>词库总数</div></div>
            <div style={S.statCard}><div style={S.statNum}>{statsView.dueCount}</div><div style={S.statLabel}>今日到期复习</div></div>
            <div style={S.statCard}><div style={S.statNum}>{statsView.accuracy}%</div><div style={S.statLabel}>答题正确率</div></div>
            <div style={S.statCard}><div style={S.statNum}>{statsView.totalReviews}</div><div style={S.statLabel}>累计复习次数</div></div>
            <div style={S.statCard}><div style={S.statNum}>{planView.deepUsedToday}/{deepReviewDailyCap}</div><div style={S.statLabel}>今日已复习</div></div>
            <div style={S.statCard}><div style={S.statNum}>{planView.skippedCount}</div><div style={S.statLabel}>快筛认识</div></div>
          </div>
          {(() => {
            // 大词库用户（>500 词）隐藏"未学"条，只看学过的词的状态分布
            var _touched = (statsView.statuses.mastered||0) + (statsView.statuses.uncertain||0) + (statsView.statuses.error||0) + (statsView.statuses.learning||0) + (statsView.statuses.skipped||0);
            var isBigLibrary = statsView.totalWords > 500;
            var denom = isBigLibrary ? Math.max(1, _touched) : Math.max(1, statsView.totalWords);
            var keysToShow = isBigLibrary ? Object.keys(WORD_STATUS_META).filter(function(k){ return k !== "unlearned"; }) : Object.keys(WORD_STATUS_META);
            return <div style={{background:C.bg,border:"1px solid "+C.border,borderRadius:10,padding:"10px 12px",marginBottom:10}}>
              <div style={{fontWeight:700,fontSize:13,marginBottom:8}}>{isBigLibrary ? "学过词的状态分布（" + _touched + " 个）" : "词汇状态分布"}</div>
              {keysToShow.map(function(k){
                var m = WORD_STATUS_META[k];
                var c = statsView.statuses[k] || 0;
                var pct = Math.round((c / denom) * 100);
                return <div key={k} style={{marginBottom:8}}>
                  <div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:4}}><span style={{color:m.color,fontWeight:700}}>{m.icon} {m.text}</span><span>{c} ({pct}%)</span></div>
                  <div style={{height:6,background:C.border,borderRadius:999,overflow:"hidden"}}><div style={{height:"100%",width:pct+"%",background:m.color,borderRadius:999}}/></div>
                </div>;
              })}
              {isBigLibrary && <div style={{fontSize:11,color:C.textSec,marginTop:6,opacity:0.8}}>💡 大词库模式：只显示已接触过的词，不会被"未学"淹没</div>}
            </div>;
          })()}
          {(() => {
            var _words = parseWordsFromInput(wordInput);
            var _upcoming = { today: 0, tomorrow: 0, thisWeek: 0, later: 0 };
            var _now = new Date(); _now.setHours(0,0,0,0);
            var _todayMs = _now.getTime();
            var _tomorrowMs = _todayMs + 86400000;
            var _weekMs = _todayMs + 7 * 86400000;
            _words.forEach(function(w) {
              var d = reviewWordData[w] || {};
              if (!d.nextReviewDate) return;
              var t = new Date(d.nextReviewDate).getTime();
              if (!Number.isFinite(t)) return;
              if (t <= _todayMs) _upcoming.today++;
              else if (t <= _tomorrowMs) _upcoming.tomorrow++;
              else if (t <= _weekMs) _upcoming.thisWeek++;
              else _upcoming.later++;
            });
            var _hasAny = _upcoming.today + _upcoming.tomorrow + _upcoming.thisWeek + _upcoming.later > 0;
            if (!_hasAny) return null;
            return <div style={{background:C.bg,border:"1px solid "+C.border,borderRadius:10,padding:"10px 12px",marginBottom:10}}>
              <div style={{fontWeight:700,fontSize:13,marginBottom:8}}>📅 复习日程概览</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:8}}>
                <div style={{textAlign:"center",padding:"8px 4px",background:_upcoming.today > 0 ? C.redLight : C.card,borderRadius:8,border:"1px solid "+(_upcoming.today > 0 ? C.red+"44" : C.border)}}>
                  <div style={{fontSize:18,fontWeight:800,color:_upcoming.today > 0 ? C.red : C.textSec}}>{_upcoming.today}</div>
                  <div style={{fontSize:11,color:C.textSec}}>今天到期</div>
                </div>
                <div style={{textAlign:"center",padding:"8px 4px",background:C.card,borderRadius:8,border:"1px solid "+C.border}}>
                  <div style={{fontSize:18,fontWeight:800,color:C.gold}}>{_upcoming.tomorrow}</div>
                  <div style={{fontSize:11,color:C.textSec}}>明天</div>
                </div>
                <div style={{textAlign:"center",padding:"8px 4px",background:C.card,borderRadius:8,border:"1px solid "+C.border}}>
                  <div style={{fontSize:18,fontWeight:800,color:C.teal}}>{_upcoming.thisWeek}</div>
                  <div style={{fontSize:11,color:C.textSec}}>本周内</div>
                </div>
                <div style={{textAlign:"center",padding:"8px 4px",background:C.card,borderRadius:8,border:"1px solid "+C.border}}>
                  <div style={{fontSize:18,fontWeight:800,color:C.textSec}}>{_upcoming.later}</div>
                  <div style={{fontSize:11,color:C.textSec}}>更远</div>
                </div>
              </div>
              <div style={{fontSize:11,color:C.textSec,marginTop:8,lineHeight:1.5}}>间隔重复规则：答对后按 1→3→7→14→30 天递增复习间隔，答错则重置为 1 天。</div>
            </div>;
          })()}
          {/* "学习建议"已删除 — 跟主屏今日任务卡 CTA 重复（主屏已主动指引"该做什么"） */}

          {/* ───── 📚 我的内容（可点击查看的成果）───── */}
          {(() => {
            var rwdCount = Object.keys(reviewWordData || {}).length;
            if (rwdCount === 0) return null;
            return <>
              {sectionHeader("📚 我的内容")}
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:8 }}>
                <button onClick={function(){ setShowMyDict(true); }} style={{
                  padding: "12px 12px",
                  background: "linear-gradient(135deg, " + C.purpleLight + " 0%, #fff 100%)",
                  border: "1.5px solid " + C.purple + "55",
                  borderRadius: 12,
                  cursor: "pointer",
                  fontFamily: FONT,
                  textAlign: "left",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <div style={{ fontSize: 22 }}>📖</div>
                  <div style={{ flex: 1, minWidth:0 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.purple, marginBottom: 1 }}>我的词典</div>
                    <div style={{ fontSize: 11, color: C.textSec, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{rwdCount} 个词</div>
                  </div>
                </button>
                <button onClick={function(){ setShowShareCard(true); }} style={{
                  padding: "12px 12px",
                  background: "linear-gradient(135deg, " + C.goldLight + " 0%, #fff 100%)",
                  border: "1.5px solid " + C.gold + "55",
                  borderRadius: 12,
                  cursor: "pointer",
                  fontFamily: FONT,
                  textAlign: "left",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <div style={{ fontSize: 22 }}>🏆</div>
                  <div style={{ flex: 1, minWidth:0 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: C.gold, marginBottom: 1 }}>战绩卡片</div>
                    <div style={{ fontSize: 11, color: C.textSec, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>分享给爸妈</div>
                  </div>
                </button>
              </div>
            </>;
          })()}

          {/* "P0/P1/P2 学习进度看板"已删除 — 是开发阶段术语，普通用户看不懂"P0 基础学习"是什么 */}

          {/* ───── ⚙️ 学习设置（工具/管理）───── */}
          {sectionHeader("⚙️ 学习设置")}
          <div style={{padding:"14px 16px",background:C.redLight,border:"1px dashed "+C.red+"66",borderRadius:10}}>
            <div style={{fontWeight:700,fontSize:13,color:C.red,marginBottom:4}}>⚠️ 初始化数据</div>
            <div style={{fontSize:11,color:C.textSec,marginBottom:10,lineHeight:1.6}}>清空所有学习进度 / 词库 / 画像 / 积分 — <strong>不可逆</strong></div>
            <button onClick={handleFactoryReset} style={{...S.smallBtn,background:"transparent",color:C.red,border:"1px solid "+C.red,padding:"7px 16px",fontWeight:700,fontSize:12}}>初始化所有数据</button>
          </div>
        </div>;
      })()}
      {error && <div style={S.error}>{error}</div>}
      <Disclaimer />

      <div style={{ textAlign:"center", padding:"24px 0 8px", fontSize:13, lineHeight:1.8, color:C.textSec }}>
        <div>Made with ❤️ by a dad for his daughter, and for you.</div>
        <div style={{ fontStyle:"italic" }}>为女儿而写，献给每一位认真学习的你</div>
        <div style={{ marginTop:6, fontSize:12 }}>问题反馈：<a href="mailto:Winstonwu1996@icloud.com" style={{ color:C.accent, textDecoration:"none" }}>Winstonwu1996@icloud.com</a> ✉️</div>
        <div style={{ marginTop:4, fontSize:12, display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap", alignItems:"center" }}>
          <a href="https://buymeacoffee.com/winstonwu1996" target="_blank" rel="noreferrer" style={{ color:C.gold, textDecoration:"none", fontWeight:600 }}>☕ 请开发者喝杯咖啡</a>
          <button onClick={()=>setShowShare(true)} style={{ background:"transparent", border:"none", color:C.accent, fontFamily:FONT, fontSize:12, fontWeight:600, cursor:"pointer", padding:0 }}>🔗 推荐给朋友</button>
        </div>
        <div style={{ marginTop:4, fontSize:11, color:C.border }}>Vocab by Know U.</div>
      </div>
      <PrivacyNotice />

      </div>

      {/* ── LOGIN MODAL (setup screen) ── */}
      {showLogin && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:C.overlay,backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",zIndex:1001,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>{ if(!loginLoading){setShowLogin(false);setLoginSent(false);setLoginEmail('');setOtpCode('');setOtpError('');window.scrollTo(0,0);} }}>
          <div style={{background:C.card,borderRadius:20,padding:"32px 24px",maxWidth:380,width:"100%",boxShadow:"0 20px 60px rgba(0,0,0,0.25)",fontFamily:FONT,animation:"fadeUp 0.25s ease-out"}} onClick={e=>e.stopPropagation()}>
            {!loginSent ? (
              <>
                <div style={{fontSize:36,textAlign:"center",marginBottom:8}}>🔑</div>
                <h3 style={{fontSize:19,fontWeight:700,textAlign:"center",margin:"0 0 4px"}}>登录 / 注册</h3>
                <p style={{fontSize:13,color:C.textSec,textAlign:"center",lineHeight:1.6,margin:"0 0 20px"}}>新用户输入邮箱即自动注册，老用户同一邮箱直接登录</p>
                <div style={{background:C.tealLight,borderRadius:10,padding:"12px 14px",marginBottom:20,fontSize:13,lineHeight:1.9,color:C.text}}>
                  ✅ 每日 {DAILY_LIMIT_REGISTERED} 词（未登录仅 {DAILY_LIMIT_GUEST} 词/天）<br/>
                  ☁️ 进度云端同步，换设备不丢<br/>
                  📊 完整学习历史记录<br/>
                  <span style={{fontSize:12,color:C.textSec}}>注册免费，基础功能永久可用</span>
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
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:C.overlay,backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>{setShowShare(false);window.scrollTo(0,0);}}>
          <div style={{background:C.card,borderRadius:20,padding:"28px 24px",maxWidth:380,width:"100%",boxShadow:"0 20px 60px rgba(0,0,0,0.25)",fontFamily:FONT,textAlign:"center",animation:"fadeUp 0.25s ease-out"}} onClick={e=>e.stopPropagation()}>
            <div style={{fontSize:36,marginBottom:6}}>📤</div>
            <h3 style={{fontSize:18,fontWeight:700,margin:"0 0 4px"}}>推荐给朋友</h3>
            <p style={{fontSize:13,color:C.textSec,lineHeight:1.6,margin:"0 0 18px"}}>觉得好用？让身边的华人朋友也试试~</p>
            <div style={{background:C.bg,borderRadius:12,padding:14,marginBottom:14,display:"inline-block"}}>
              <img src={"https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https%3A%2F%2Fknowulearning.com&bgcolor=faf7f2&color=2c2420&margin=6"} width={160} height={160} alt="QR Code" style={{display:"block",borderRadius:6}} />
            </div>
            <div style={{fontSize:12,color:C.textSec,marginBottom:16}}>📱 手机扫码 / 长按保存发朋友圈</div>
            <div style={{background:C.accentLight,borderRadius:10,padding:"10px 14px",marginBottom:16,fontSize:13,color:C.text,lineHeight:1.7,textAlign:"left"}}>{"AI 英语私教，效果堪比真人私教，用你的真实生活场景 1 对 1 教英语 🎉\n👉 knowulearning.com"}</div>
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {typeof navigator !== "undefined" && navigator.share && (
                <button style={{...S.primaryBtn,width:"100%",justifyContent:"center"}} onClick={async()=>{ try { await navigator.share({ title:"Vocab by Know U. — AI 英语私教", text:"AI 英语私教，效果堪比真人私教，用你的真实生活场景 1 对 1 教英语 🎉", url:"https://knowulearning.com" }); } catch(e){} }}>📱 分享到微信 / 其他 App</button>
              )}
              <button style={{...S.primaryBtn,width:"100%",justifyContent:"center",background:C.teal}} onClick={()=>{ navigator.clipboard?.writeText("AI 英语私教，效果堪比真人私教，用你的真实生活场景 1 对 1 教英语 🎉 knowulearning.com").then(()=>alert("✅ 已复制！可以粘贴到微信/抖音/朋友圈")).catch(()=>alert("请手动复制上方链接")); }}>📋 复制邀请文案</button>
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

      {/* 学习宠物：右下角浮动按钮 — 仅学习屏显示（setup 屏的"我的小本本"卡已整合入口，不再重复浮窗） */}
      {pet && screen !== "setup" && (() => {
        var stage = getPetStage(pet.totalFed || 0);
        var mood = getPetMood(pet);
        var hunger = calcDecayedHunger(pet);
        return (
          <button onClick={function(){ setShowPet(true); }} style={{
            position: "fixed",
            bottom: 18,
            right: 18,
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #fff 0%, " + C.accentLight + " 100%)",
            border: "2px solid " + (hunger < 20 ? C.red : hunger < 40 ? C.gold : C.accent + "66"),
            boxShadow: "0 4px 16px rgba(196,107,48,0.25), 0 1px 3px rgba(0,0,0,0.1)",
            cursor: "pointer",
            zIndex: 1000,
            fontSize: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: FONT,
            transition: "transform 0.15s",
            animation: hunger < 20 ? "petShake 1.2s ease-in-out infinite" : "none",
          }} title={pet.name + " · " + mood.label} aria-label="打开宠物">
            <span>{stage.emoji}</span>
            {/* 状态徽章右下角小点 */}
            <span style={{
              position: "absolute",
              bottom: -2, right: -2,
              fontSize: 14,
              background: "#fff",
              borderRadius: "50%",
              padding: 2,
              lineHeight: 1,
              border: "1px solid " + C.border,
            }}>{mood.emoji}</span>
          </button>
        );
      })()}

      {/* 宠物喂食小气泡（喂食成功 / 进化时展示） */}
      {petToast && (
        <div style={{
          position: "fixed",
          bottom: 90,
          right: 18,
          maxWidth: 240,
          padding: "10px 14px",
          background: C.accent,
          color: "#fff",
          borderRadius: 12,
          fontSize: 13,
          fontWeight: 700,
          boxShadow: "0 6px 24px rgba(196,107,48,0.35)",
          animation: "fadeUp 0.3s ease-out",
          zIndex: 1100,
          fontFamily: FONT,
        }}>
          {petToast}
        </div>
      )}

      {/* 宠物详情模态：饱食度 + 开心度 + 喂食 + 改名 + 进化预告 */}
      {showPet && pet && (() => {
        var stage = getPetStage(pet.totalFed || 0);
        var nextStage = getNextPetStage(pet.totalFed || 0);
        var mood = getPetMood(pet);
        var hunger = Math.round(calcDecayedHunger(pet));
        var happiness = Math.round(pet.happiness || 0);
        var canFeed = (stats?.xp || 0) >= PET_FEED_COST_XP && hunger < 100;
        var feedHint;
        if ((stats?.xp || 0) < PET_FEED_COST_XP) feedHint = "XP 不够 — 再答对几题攒攒";
        else if (hunger >= 100) feedHint = pet.name + " 已经吃饱了";
        else feedHint = "消耗 " + PET_FEED_COST_XP + " XP 给 " + pet.name + " 喂一顿";
        return (
          <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",zIndex:1500,display:"flex",alignItems:"center",justifyContent:"center",padding:16,fontFamily:FONT}} onClick={function(){ setShowPet(false); }}>
            <div onClick={function(e){e.stopPropagation();}} style={{background:C.card,borderRadius:18,maxWidth:380,width:"100%",padding:"24px 22px 20px",boxShadow:"0 20px 60px rgba(0,0,0,0.35)",border:"1px solid "+C.border,position:"relative"}}>
              <button onClick={function(){ setShowPet(false); }} aria-label="关闭" style={{position:"absolute",top:8,right:8,width:36,height:36,background:"rgba(0,0,0,0.04)",border:"none",borderRadius:"50%",fontSize:20,cursor:"pointer",color:C.textSec,padding:0,lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center",zIndex:10,fontFamily:"system-ui,sans-serif",fontWeight:600,transition:"all 0.15s"}} onMouseEnter={function(e){e.currentTarget.style.background="rgba(0,0,0,0.1)";e.currentTarget.style.color=C.text;}} onMouseLeave={function(e){e.currentTarget.style.background="rgba(0,0,0,0.04)";e.currentTarget.style.color=C.textSec;}}>×</button>

              {/* 大字符宠物 + 名字 */}
              <div style={{textAlign:"center", marginBottom: 12}}>
                <div style={{fontSize: 80, lineHeight: 1, marginBottom: 8, animation: hunger < 20 ? "petShake 1.2s ease-in-out infinite" : (mood.emoji === "😊" ? "petBounce 2s ease-in-out infinite" : "none")}}>
                  {stage.emoji}
                </div>
                <div style={{display:"inline-flex",alignItems:"center",gap:8}}>
                  <input
                    value={pet.name || ""}
                    onChange={function(e){ renamePet(e.target.value); }}
                    maxLength={12}
                    style={{
                      fontSize: 18, fontWeight: 800, color: C.text,
                      fontFamily: FONT_DISPLAY, textAlign: "center",
                      border: "none", borderBottom: "1px dashed " + C.border,
                      background: "transparent", padding: "2px 6px",
                      width: 130, outline: "none",
                    }}
                  />
                </div>
                <div style={{fontSize: 12, color: C.textSec, marginTop: 4}}>
                  Lv {stage.level} · {stage.title} · {mood.emoji} {mood.label}
                </div>
              </div>

              {/* 饱食度 / 开心度 进度条 */}
              <div style={{marginBottom:14}}>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:C.textSec,marginBottom:3,fontWeight:600}}>
                  <span>🍖 饱食度</span><span>{hunger}/100</span>
                </div>
                <div style={{height:8, background:C.border, borderRadius:4, overflow:"hidden", marginBottom:10}}>
                  <div style={{height:"100%", width:hunger+"%", background: hunger > 60 ? C.green : hunger > 30 ? C.gold : C.red, transition: "width 0.4s"}} />
                </div>
                <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:C.textSec,marginBottom:3,fontWeight:600}}>
                  <span>💖 开心度</span><span>{happiness}/100</span>
                </div>
                <div style={{height:8, background:C.border, borderRadius:4, overflow:"hidden"}}>
                  <div style={{height:"100%", width:happiness+"%", background: "linear-gradient(90deg, "+C.purple+", "+C.accent+")", transition: "width 0.4s"}} />
                </div>
              </div>

              {/* 进化预告 */}
              {nextStage && (
                <div style={{padding:"8px 12px", background:C.tealLight+"99", border:"1px solid "+C.teal+"33", borderRadius:8, fontSize:12, color:C.teal, marginBottom:14, textAlign:"center"}}>
                  距离 <strong>{nextStage.title}</strong> {nextStage.emoji} 还差 <strong>{nextStage.minFed - (pet.totalFed||0)}</strong> 顿饭
                </div>
              )}
              {!nextStage && (
                <div style={{padding:"8px 12px", background:C.goldLight, border:"1px solid "+C.gold+"55", borderRadius:8, fontSize:12, color:C.gold, marginBottom:14, textAlign:"center", fontWeight:700}}>
                  👑 已达最高等级 — 传奇宠物
                </div>
              )}

              {/* 喂食按钮 */}
              <button onClick={function(){ var r = feedPet(); if (!r.ok) setPetToast(r.msg) || setTimeout(function(){ setPetToast(null); }, 2400); }} disabled={!canFeed} style={{
                width: "100%",
                padding: "14px 0",
                background: canFeed ? "linear-gradient(135deg, "+C.accent+" 0%, "+C.gold+" 100%)" : C.border,
                color: canFeed ? "#fff" : C.textSec,
                border: "none",
                borderRadius: 12,
                fontFamily: FONT,
                fontSize: 15,
                fontWeight: 700,
                cursor: canFeed ? "pointer" : "not-allowed",
                boxShadow: canFeed ? "0 4px 12px "+C.accent+"55" : "none",
                marginBottom: 8,
              }}>
                🍖 喂一顿（-{PET_FEED_COST_XP} XP）
              </button>
              <div style={{fontSize:11,color:C.textSec,textAlign:"center",lineHeight:1.5}}>
                {feedHint}<br/>
                当前 XP：<strong style={{color:C.accent}}>{stats?.xp || 0}</strong>
              </div>

              {/* 累计统计 */}
              <div style={{marginTop:16,paddingTop:12,borderTop:"1px solid "+C.border,display:"flex",justifyContent:"space-around",fontSize:11,color:C.textSec,textAlign:"center"}}>
                <div><strong style={{color:C.text,fontSize:14,display:"block"}}>{pet.totalFed || 0}</strong>累计喂养</div>
                <div><strong style={{color:C.text,fontSize:14,display:"block"}}>Lv {stage.level}</strong>当前等级</div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* 番茄钟模式选择 */}
      {showFocusModal && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1500,display:"flex",alignItems:"center",justifyContent:"center",padding:16,fontFamily:FONT}} onClick={function(){ setShowFocusModal(false); }}>
          <div onClick={function(e){e.stopPropagation();}} style={{background:C.card,borderRadius:16,maxWidth:380,width:"100%",padding:"22px 22px 18px",boxShadow:"0 20px 60px rgba(0,0,0,0.35)",border:"1px solid "+C.border}}>
            <div style={{fontSize:18,fontWeight:800,color:C.text,fontFamily:FONT_DISPLAY,marginBottom:6,textAlign:"center"}}>⏱ 选个学习节奏</div>
            <div style={{fontSize:12,color:C.textSec,marginBottom:16,textAlign:"center",lineHeight:1.6}}>
              选定后顶部会显示倒计时。<br/>不会强制中断 — 时间到只是提醒一下你的努力。
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:8}}>
              {[
                { mode:"sprint", emoji:"⚡", title:"5 分钟冲刺", desc:"看你能学多少词", color:C.accent },
                { mode:"focus",  emoji:"🌳", title:"15 分钟专注", desc:"安静学一组",     color:C.teal },
                { mode:"free",   emoji:"🌊", title:"自由模式",   desc:"随心学，不计时", color:C.textSec },
              ].map(function(m){
                return (
                  <button key={m.mode} onClick={function(){ startFocusSession(m.mode); }} style={{
                    display:"flex",alignItems:"center",gap:12,padding:"12px 14px",
                    background:"#fff", border:"1.5px solid "+m.color+"55",
                    borderRadius:12, cursor:"pointer", fontFamily:FONT, textAlign:"left",
                  }}>
                    <span style={{fontSize:24, lineHeight:1}}>{m.emoji}</span>
                    <div style={{flex:1}}>
                      <div style={{fontSize:14,fontWeight:700,color:m.color,marginBottom:2}}>{m.title}</div>
                      <div style={{fontSize:11,color:C.textSec}}>{m.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 番茄钟时间到弹窗 */}
      {focusEndedSnapshot && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:1500,display:"flex",alignItems:"center",justifyContent:"center",padding:16,fontFamily:FONT}}>
          <div style={{background:C.card,borderRadius:16,maxWidth:340,width:"100%",padding:"24px 22px",boxShadow:"0 20px 60px rgba(0,0,0,0.35)",border:"2px solid "+C.gold,textAlign:"center"}}>
            <div style={{fontSize:48,marginBottom:8}}>{focusEndedSnapshot.wordsLearned >= 5 ? "🏆" : focusEndedSnapshot.wordsLearned >= 2 ? "🎯" : "💪"}</div>
            <div style={{fontSize:20,fontWeight:800,color:C.text,fontFamily:FONT_DISPLAY,marginBottom:6}}>时间到！</div>
            <div style={{fontSize:14,color:C.text,marginBottom:14,lineHeight:1.7}}>
              这次{focusEndedSnapshot.mode === "sprint" ? "冲刺" : "专注"} {Math.floor(focusEndedSnapshot.durationSec/60)} 分钟，<br/>你学了 <strong style={{color:C.accent,fontSize:18,fontFamily:FONT_DISPLAY}}>{focusEndedSnapshot.wordsLearned}</strong> 个词。
            </div>
            {focusEndedSnapshot.wordsLearned >= 5 && (
              <div style={{padding:"6px 12px",background:C.goldLight,borderRadius:8,fontSize:11,color:C.gold,fontWeight:700,marginBottom:12,display:"inline-block"}}>
                超过平均水平，太棒了！
              </div>
            )}
            <button onClick={function(){ setFocusEndedSnapshot(null); }} style={{
              width:"100%", padding:"12px 0",
              background: "linear-gradient(135deg, "+C.accent+" 0%, "+C.gold+" 100%)",
              color:"#fff", border:"none", borderRadius:10,
              fontFamily:FONT, fontSize:14, fontWeight:700, cursor:"pointer",
            }}>继续学习</button>
          </div>
        </div>
      )}

      {/* 战绩分享卡模态：精美卡片让用户截屏发给家长 — 社交认可强化下次学习动机 */}
      {showShareCard && pet && (() => {
        var streakInfo = getStudyStreak();
        var rwdEntries = Object.values(reviewWordData || {});
        var totalLearned = rwdEntries.length;
        var masteredCount = rwdEntries.filter(function(w){ return wordStatusMap[w.word] === "mastered"; }).length;
        var accuracy = stats?.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        var stage = getPetStage(pet.totalFed || 0);
        // 取最近 5 个学的词作"代表词"
        var recentWords = rwdEntries
          .sort(function(a,b){ return new Date(b.firstLearnedAt||0) - new Date(a.firstLearnedAt||0); })
          .slice(0, 5)
          .map(function(w){ return w.word; });
        var displayName = (profile || "我").split(/[，。\n,.]/)[0].trim().slice(0, 8) || "学习者";
        var dateStr = new Date().toLocaleDateString("zh-CN", { month:"long", day:"numeric" });
        return (
          <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.7)",zIndex:1500,display:"flex",alignItems:"center",justifyContent:"center",padding:16,fontFamily:FONT,overflowY:"auto"}} onClick={function(){ setShowShareCard(false); }}>
            <div onClick={function(e){e.stopPropagation();}} style={{maxWidth:380,width:"100%"}}>
              {/* 截图引导（在卡片上方） */}
              <div style={{textAlign:"center", color:"#fff", fontSize:13, marginBottom:12, opacity:0.85}}>
                📸 长按或截屏保存图片 → 发给爸妈或朋友
              </div>
              {/* 卡片本体 */}
              <div style={{
                background: "linear-gradient(160deg, " + C.goldLight + " 0%, #fff 35%, " + C.accentLight + " 100%)",
                borderRadius: 20,
                padding: "26px 22px 22px",
                border: "2px solid " + C.gold + "55",
                boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* 装饰圆点 */}
                <div style={{position:"absolute",top:-30,right:-30,width:120,height:120,borderRadius:"50%",background:C.accent+"22"}} />
                <div style={{position:"absolute",bottom:-40,left:-40,width:140,height:140,borderRadius:"50%",background:C.gold+"22"}} />
                {/* 内容 */}
                <div style={{position:"relative", zIndex:1}}>
                  {/* 顶部：品牌 + 日期 */}
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18,fontSize:11,color:C.textSec,fontWeight:600}}>
                    <span>🧠 Know U. Vocab</span>
                    <span>{dateStr}</span>
                  </div>
                  {/* 标题 + 用户 */}
                  <div style={{textAlign:"center",marginBottom:20}}>
                    <div style={{fontSize:13,color:C.textSec,marginBottom:4,fontWeight:600,letterSpacing:"0.05em"}}>📊 我的学习战绩</div>
                    <div style={{fontSize:24,fontWeight:900,color:C.text,fontFamily:FONT_DISPLAY,letterSpacing:"-0.02em"}}>{displayName} 的进度</div>
                  </div>
                  {/* 大数字 三栏 */}
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:18}}>
                    <div style={{textAlign:"center",padding:"12px 4px",background:"#fff",borderRadius:12,border:"1px solid "+C.border}}>
                      <div style={{fontSize:24,fontWeight:900,color:C.accent,fontFamily:FONT_DISPLAY,lineHeight:1}}>{totalLearned}</div>
                      <div style={{fontSize:10,color:C.textSec,marginTop:4,fontWeight:600}}>已学词数</div>
                    </div>
                    <div style={{textAlign:"center",padding:"12px 4px",background:"#fff",borderRadius:12,border:"1px solid "+C.border}}>
                      <div style={{fontSize:24,fontWeight:900,color:C.green,fontFamily:FONT_DISPLAY,lineHeight:1}}>{accuracy}%</div>
                      <div style={{fontSize:10,color:C.textSec,marginTop:4,fontWeight:600}}>正确率</div>
                    </div>
                    <div style={{textAlign:"center",padding:"12px 4px",background:"#fff",borderRadius:12,border:"1px solid "+C.border}}>
                      <div style={{fontSize:24,fontWeight:900,color:C.gold,fontFamily:FONT_DISPLAY,lineHeight:1}}>🔥{streakInfo.streak||0}</div>
                      <div style={{fontSize:10,color:C.textSec,marginTop:4,fontWeight:600}}>连续天数</div>
                    </div>
                  </div>
                  {/* 代表词 */}
                  {recentWords.length > 0 && (
                    <div style={{marginBottom:16}}>
                      <div style={{fontSize:11,color:C.textSec,fontWeight:700,letterSpacing:"0.05em",marginBottom:8,textAlign:"center"}}>📚 最近学的词</div>
                      <div style={{display:"flex",flexWrap:"wrap",gap:6,justifyContent:"center"}}>
                        {recentWords.map(function(w){
                          return <span key={w} style={{
                            padding:"4px 10px",
                            background:"#fff",
                            border:"1px solid "+C.accent+"55",
                            borderRadius:999,
                            fontSize:12, fontWeight:700,
                            color:C.accent,
                            fontFamily:"'Inter',"+FONT,
                          }}>{w}</span>;
                        })}
                      </div>
                    </div>
                  )}
                  {/* 宠物 + XP */}
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 14px",background:"linear-gradient(135deg, "+C.purpleLight+" 0%, #fff 100%)",borderRadius:12,border:"1px solid "+C.purple+"33",marginBottom:14}}>
                    <div style={{display:"flex",alignItems:"center",gap:10}}>
                      <span style={{fontSize:32, lineHeight:1}}>{stage.emoji}</span>
                      <div>
                        <div style={{fontSize:13,fontWeight:700,color:C.purple}}>{pet.name}</div>
                        <div style={{fontSize:10,color:C.textSec}}>Lv {stage.level} · {stage.title}</div>
                      </div>
                    </div>
                    <div style={{textAlign:"right"}}>
                      <div style={{fontSize:18,fontWeight:900,color:C.accent,fontFamily:FONT_DISPLAY,lineHeight:1}}>⚡{stats?.xp||0}</div>
                      <div style={{fontSize:10,color:C.textSec,marginTop:2}}>累计 XP</div>
                    </div>
                  </div>
                  {/* 底部：掌握徽章 + slogan */}
                  <div style={{textAlign:"center",fontSize:11,color:C.textSec,lineHeight:1.6,paddingTop:6,borderTop:"1px dashed "+C.border}}>
                    {masteredCount > 0
                      ? <>已掌握 <strong style={{color:C.green}}>{masteredCount}</strong> 个词 · 距离梦想又近一步 ✨</>
                      : <>每一天的坚持都在累积 ✨</>
                    }
                  </div>
                </div>
              </div>
              {/* 关闭按钮 */}
              <div style={{textAlign:"center",marginTop:14}}>
                <button onClick={function(){ setShowShareCard(false); }} style={{
                  padding: "10px 24px",
                  background: "transparent",
                  border: "1px solid #fff",
                  borderRadius: 999,
                  color: "#fff",
                  fontFamily: FONT,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                }}>关闭</button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* 我的词典模态：按学习日期分组，让"学过的词"变成"我珍藏的词" */}
      {showMyDict && (() => {
        var entries = Object.values(reviewWordData || {}).filter(function(w){ return w && w.word; });
        // 按 firstLearnedAt 降序（最近学的在最前）
        entries.sort(function(a,b){ var ta = new Date(a.firstLearnedAt || 0).getTime(); var tb = new Date(b.firstLearnedAt || 0).getTime(); return tb - ta; });
        // 按日期分组
        var groups = {};
        entries.forEach(function(w){
          var d = w.firstLearnedAt ? new Date(w.firstLearnedAt) : null;
          var key = d ? (d.getFullYear() + "-" + String(d.getMonth()+1).padStart(2,'0') + "-" + String(d.getDate()).padStart(2,'0')) : "未知日期";
          if (!groups[key]) groups[key] = [];
          groups[key].push(w);
        });
        var sortedKeys = Object.keys(groups).sort(function(a,b){ return b.localeCompare(a); });
        var todayKey = getLocalDateKey();
        var formatDateLabel = function(k){
          if (k === "未知日期") return k;
          if (k === todayKey) return "今天";
          var d = new Date(k + "T12:00:00");
          var diffDays = Math.round((new Date(todayKey + "T12:00:00") - d) / 86400000);
          if (diffDays === 1) return "昨天";
          if (diffDays < 7) return diffDays + " 天前";
          return d.getMonth()+1 + " 月 " + d.getDate() + " 日";
        };
        return (
          <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",zIndex:1500,display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"40px 16px 16px",fontFamily:FONT,overflowY:"auto"}} onClick={function(){ setShowMyDict(false); }}>
            <div onClick={function(e){e.stopPropagation();}} style={{background:C.card,borderRadius:16,maxWidth:560,width:"100%",padding:"22px 22px 16px",boxShadow:"0 20px 60px rgba(0,0,0,0.35)",border:"1px solid "+C.border,maxHeight:"calc(100vh - 80px)",display:"flex",flexDirection:"column"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16,flexShrink:0}}>
                <div>
                  <div style={{fontSize:20,fontWeight:800,color:C.purple,fontFamily:FONT_DISPLAY,letterSpacing:"-0.02em"}}>📖 我的词典</div>
                  <div style={{fontSize:12,color:C.textSec,marginTop:2}}>{entries.length} 个学过的词</div>
                </div>
                <button onClick={function(){ setShowMyDict(false); }} aria-label="关闭" style={{width:36,height:36,background:"rgba(0,0,0,0.04)",border:"none",borderRadius:"50%",fontSize:20,cursor:"pointer",color:C.textSec,padding:0,lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"system-ui,sans-serif",fontWeight:600,flexShrink:0,transition:"all 0.15s"}} onMouseEnter={function(e){e.currentTarget.style.background="rgba(0,0,0,0.1)";e.currentTarget.style.color=C.text;}} onMouseLeave={function(e){e.currentTarget.style.background="rgba(0,0,0,0.04)";e.currentTarget.style.color=C.textSec;}}>×</button>
              </div>
              <div style={{flex:1,overflowY:"auto",paddingRight:4}}>
                {entries.length === 0 ? (
                  <div style={{textAlign:"center",padding:"40px 0",color:C.textSec,fontSize:14}}>还没有学过的词。开始学习后这里会陆续装满 ✨</div>
                ) : sortedKeys.map(function(dateKey){
                  return (
                    <div key={dateKey} style={{marginBottom:18}}>
                      <div style={{fontSize:11,color:C.textSec,fontWeight:700,letterSpacing:"0.05em",marginBottom:8,paddingLeft:4,position:"sticky",top:0,background:C.card,padding:"4px 4px"}}>
                        📅 {formatDateLabel(dateKey)} <span style={{color:C.textSec,opacity:0.6,fontWeight:400,marginLeft:6}}>· {groups[dateKey].length} 词</span>
                      </div>
                      <div style={{display:"flex",flexDirection:"column",gap:8}}>
                        {groups[dateKey].map(function(w){
                          var status = wordStatusMap[w.word] || "learning";
                          var statusInfo = WORD_STATUS_META[status] || {};
                          // 复习倒计时：基于 nextReviewDate 计算还有几天
                          var dueLabel = null;
                          var dueColor = C.textSec;
                          if (w.nextReviewDate) {
                            try {
                              var dueMs = new Date(w.nextReviewDate).getTime();
                              var nowMs = new Date().setHours(0,0,0,0);
                              var dueDays = Math.ceil((dueMs - nowMs) / 86400000);
                              if (dueDays <= 0) { dueLabel = "⏰ 今天"; dueColor = C.red; }
                              else if (dueDays === 1) { dueLabel = "🔄 明天"; dueColor = C.gold; }
                              else if (dueDays <= 7) { dueLabel = "🔄 " + dueDays + " 天"; dueColor = C.teal; }
                              else { dueLabel = "🔄 " + dueDays + " 天"; dueColor = C.textSec; }
                            } catch(e) {}
                          }
                          return (
                            <div key={w.word} style={{padding:"10px 12px",background:C.bg,borderRadius:10,border:"1px solid "+C.border,display:"flex",alignItems:"flex-start",gap:10}}>
                              <div style={{flex:1,minWidth:0}}>
                                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:3,flexWrap:"wrap"}}>
                                  <strong style={{fontSize:15,color:C.text,fontFamily:"'Inter',"+FONT}}>{w.word}</strong>
                                  {w.phonetic && <span style={{fontSize:11,color:C.textSec,fontStyle:"italic"}}>{w.phonetic}</span>}
                                  {dueLabel && <span style={{...NUM, fontSize:10.5, fontWeight:700, color:dueColor, padding:"1px 6px", background:dueColor+"15", borderRadius:4}}>{dueLabel}</span>}
                                </div>
                                {w.meaning && <div style={{fontSize:13,color:C.text,lineHeight:1.5}}>{w.meaning}</div>}
                              </div>
                              <span style={{flexShrink:0,padding:"3px 8px",fontSize:11,fontWeight:700,borderRadius:999,background:(statusInfo.color||C.textSec)+"22",color:statusInfo.color||C.textSec}}>
                                {statusInfo.icon} {statusInfo.text}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })()}

      {/* 重置进度二次确认模态（替代 native confirm，不会被浏览器屏蔽） */}
      {showResetConfirm && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",zIndex:1500,display:"flex",alignItems:"center",justifyContent:"center",padding:16,fontFamily:FONT}} onClick={function(){ if (!resetInProgress) setShowResetConfirm(false); }}>
          <div onClick={function(e){e.stopPropagation();}} style={{background:C.card,borderRadius:16,maxWidth:440,width:"100%",padding:"24px 22px",boxShadow:"0 20px 60px rgba(0,0,0,0.35)",border:"2px solid "+C.red}}>
            <div style={{fontSize:36,textAlign:"center",marginBottom:8}}>⚠️</div>
            <div style={{fontSize:18,fontWeight:700,color:C.red,textAlign:"center",marginBottom:12}}>最后一次确认：重置学习进度</div>
            <div style={{fontSize:13,color:C.text,lineHeight:1.8,background:C.redLight,border:"1px solid "+C.red+"33",borderRadius:10,padding:"12px 14px",marginBottom:14}}>
              <div style={{fontWeight:700,color:C.red,marginBottom:6}}>将清除（不可撤销）：</div>
              <div style={{color:C.textSec}}>· 所有单词的学习状态<br/>· 复习记录与复习计划<br/>· 统计数据（XP、正确率等）<br/>· 今日学习配额<br/>· AI 缓存（强制重新生成）</div>
              <div style={{fontWeight:700,color:C.green,marginTop:10,marginBottom:4}}>会保留：</div>
              <div style={{color:C.textSec}}>· 词表内容<br/>· 学习画像<br/>· 每日目标设置<br/>· 连续学习天数</div>
            </div>
            <div style={{display:"flex",gap:10}}>
              <button disabled={resetInProgress} onClick={function(){ setShowResetConfirm(false); }} style={{flex:1,padding:"12px 0",background:"transparent",color:C.text,border:"1px solid "+C.border,borderRadius:10,fontFamily:FONT,fontSize:14,fontWeight:600,cursor:resetInProgress?"not-allowed":"pointer",opacity:resetInProgress?0.5:1}}>取消</button>
              <button disabled={resetInProgress} onClick={async function(){
                setResetInProgress(true);
                try { await resetLearningProgress(); } finally { setResetInProgress(false); setShowResetConfirm(false); }
              }} style={{flex:1,padding:"12px 0",background:C.red,color:"#fff",border:"none",borderRadius:10,fontFamily:FONT,fontSize:14,fontWeight:700,cursor:resetInProgress?"wait":"pointer",opacity:resetInProgress?0.7:1}}>{resetInProgress?"重置中…":"确认重置"}</button>
            </div>
          </div>
        </div>
      )}

      {userCenterEl}
      <style>{globalCSS}</style>
    </div>
  );}

  /* ═══ LEARNING SCREEN ═══ */
  return (
    <div style={S.root}>
      <Head>
        <title>Vocab by Know U. — {currentWord || "学习中"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet" />
      </Head>
      <div className="vs-desktop-container" style={S.container}>
      <div ref={topRef} />
      {/* Daily limit banner for guests */}
      {!user && todayCount > 0 && (
        <div onClick={() => setShowLogin(true)} style={{fontSize:12,textAlign:"center",padding:"5px 12px",cursor:"pointer",borderRadius:8,margin:"4px 0",background: todayCount>=DAILY_LIMIT_GUEST ? C.redLight : todayCount>=7 ? C.goldLight : C.accentLight,color: todayCount>=DAILY_LIMIT_GUEST ? C.red : todayCount>=7 ? C.gold : C.accent,fontFamily:FONT,fontWeight:600}}>
          {todayCount>=DAILY_LIMIT_GUEST ? "非注册用户今日 "+DAILY_LIMIT_GUEST+" 词已学完 · 注册后每日 10 词 →" : "今日已学 "+todayCount+" / "+DAILY_LIMIT_GUEST+" 词（非注册用户上限）· 注册后每日 10 词 →"}
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
        {/* 番茄钟倒计时显示（活跃时）/ 启动按钮（空闲时） */}
        {focusSession ? (() => {
          var totalSec = Math.floor(focusSession.durationMs / 1000);
          var remainSec = Math.max(0, totalSec - focusElapsedSec);
          var pct = Math.min(100, (focusElapsedSec / totalSec) * 100);
          var mm = Math.floor(remainSec / 60);
          var ss = remainSec % 60;
          var color = remainSec < 30 ? C.red : remainSec < 60 ? C.gold : C.teal;
          return (
            <button onClick={function(){ if (confirm("结束本次专注？")) { setFocusSession(null); } }} style={{
              display:"flex", alignItems:"center", gap:6,
              padding:"4px 10px",
              background: color + "22",
              border:"1px solid "+color+"66",
              borderRadius: 999,
              cursor:"pointer",
              fontFamily: FONT, fontSize: 12, fontWeight: 700, color: color,
            }} title="点击结束番茄钟">
              <span style={{ fontFamily:"'Inter',"+FONT, fontVariantNumeric:"tabular-nums" }}>
                ⏱ {mm}:{String(ss).padStart(2,'0')}
              </span>
            </button>
          );
        })() : (
          <button onClick={function(){ setShowFocusModal(true); }} style={{
            padding:"4px 10px",
            background: "transparent",
            border:"1px solid "+C.border,
            borderRadius: 999,
            cursor:"pointer",
            fontFamily: FONT, fontSize: 12, fontWeight: 600, color: C.textSec,
          }} title="开启番茄钟">⏱ 专注</button>
        )}
        <div style={S.xpBadge}>{"⚡"+stats.xp}</div>
        <button style={S.settingsBtn} onClick={() => setShowSettings(true)} title="设置" aria-label="打开设置">⚙️</button>
      </div>

      {/* ── SETTINGS MODAL ── */}
      {showSettings && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",zIndex:999,display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"60px 16px 16px",overflowY:"auto"}}>
          <div style={{background:C.card,borderRadius:16,width:"100%",maxWidth:600,boxShadow:"0 20px 60px rgba(0,0,0,0.2)",fontFamily:FONT}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 20px 0"}}>
              <h3 style={{fontSize:18,fontWeight:700,margin:0}}>⚙️ 设置</h3>
              <button onClick={() => { setShowSettings(false); window.scrollTo(0,0); }} aria-label="关闭" style={{width:36,height:36,background:"rgba(0,0,0,0.04)",border:"none",borderRadius:"50%",fontSize:20,cursor:"pointer",color:C.textSec,padding:0,lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"system-ui,sans-serif",fontWeight:600,flexShrink:0,transition:"all 0.15s"}} onMouseEnter={function(e){e.currentTarget.style.background="rgba(0,0,0,0.1)";e.currentTarget.style.color=C.text;}} onMouseLeave={function(e){e.currentTarget.style.background="rgba(0,0,0,0.04)";e.currentTarget.style.color=C.textSec;}}>×</button>
            </div>
            <div style={{display:"flex",borderBottom:"1px solid "+C.border,margin:"16px 20px 0"}}>
              <button style={setupTab==="profile"?{...S.tab,...S.tabActive}:S.tab} onClick={() => setSetupTab("profile")}>👤 我是谁</button>
              <button style={setupTab==="plan"?{...S.tab,...S.tabActive}:S.tab} onClick={() => setSetupTab("plan")}>🎯 学习节奏</button>
              <button style={setupTab==="words"?{...S.tab,...S.tabActive}:S.tab} onClick={() => setSetupTab("words")}>📝 词库</button>
              <button style={setupTab==="stats"?{...S.tab,...S.tabActive}:S.tab} onClick={() => setSetupTab("stats")}>📊 我的成绩</button>
              <button style={setupTab==="account"?{...S.tab,...S.tabActive}:S.tab} onClick={() => setSetupTab("account")}>🔑 账号</button>
            </div>
            <div style={{padding:"16px 20px 20px"}}>
              {setupTab === "profile" && (
                <div>
                  <div style={S.setupHint}>{profileLocked ? "✅ 画像已保存" : "🌟 告诉 AI 你的世界——兴趣爱好、日常生活，越真实越有趣！"}</div>
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
                  <div style={{fontSize:12,color:C.textSec,marginBottom:10}}>进度：基础学习 {ph.P0?"✅":"⏳"} · 复习计划 {ph.P1?"✅":"⏳"} · 统计管理 {ph.P2?"✅":"⏳"}</div>
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
                          {userTier==="pro" ? <>✨ <strong>Pro 会员</strong> · 每日无限学习<br/></> : userTier==="basic" ? <>🎯 <strong>Basic 会员</strong> · 每日无限学习<br/></> : <>🎉 <strong>推广期</strong> · 每日 {DAILY_LIMIT_REGISTERED} 词<br/></>}
                          ☁️ 学习进度自动云端同步<br/>
                          📱 跨设备继续学习
                        </div>
                      </div>
                      <button style={{...S.primaryBtn,background:C.textSec}} onClick={handleLogout}>退出登录</button>
                    </div>
                  ) : (
                    <div>
                      <div style={{background:C.goldLight,border:"1px solid "+C.gold,borderRadius:12,padding:"16px 18px",marginBottom:16}}>
                        <div style={{fontWeight:700,fontSize:15,marginBottom:4}}>🎁 推广期免费体验</div>
                        <div style={{fontSize:13,color:C.text,lineHeight:1.9,marginBottom:12}}>
                          注册账号，现在完全免费：<br/>
                          ✅ 每日<strong>无限</strong>学习（免费版每日 {DAILY_LIMIT_GUEST} 词）<br/>
                          ☁️ 学习进度云端同步，换手机不丢<br/>
                          📊 完整学习历史记录
                        </div>
                        <div style={{background:C.bg,borderRadius:8,padding:"8px 12px",fontSize:13,color:C.textSec}}>
                          非注册用户每日上限 {DAILY_LIMIT_GUEST} 词，今日已学 {todayCount} 词
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

      {/* 答对视觉爆发：飘字 + 屏幕短闪。10% 概率双倍 / 5% 概率连击（可变奖励） */}
      {reward && (
        <>
          <div key={"flash-"+reward.id} style={{
            position:"fixed", inset:0, zIndex:1900, pointerEvents:"none",
            background: reward.kind === "combo" ? "radial-gradient(circle, "+C.gold+"55 0%, transparent 60%)"
              : reward.kind === "double" ? "radial-gradient(circle, "+C.accent+"44 0%, transparent 60%)"
              : "radial-gradient(circle, "+C.green+"33 0%, transparent 60%)",
            animation: "rewardFlash 0.6s ease-out forwards",
          }} />
          <div key={"burst-"+reward.id} style={{
            position:"fixed", top:"42%", left:"50%", zIndex:2000,
            transform:"translate(-50%,-50%)", pointerEvents:"none",
            textAlign:"center",
            animation: "rewardBurst 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
          }}>
            {reward.kind === "combo" && (
              <div style={{ fontSize: 16, fontWeight: 800, color: C.gold, letterSpacing: "0.1em", textShadow: "0 2px 8px "+C.gold+"66", marginBottom: 4 }}>
                🎯 三倍连击！
              </div>
            )}
            {reward.kind === "double" && (
              <div style={{ fontSize: 14, fontWeight: 800, color: C.accent, letterSpacing: "0.08em", textShadow: "0 2px 6px "+C.accent+"55", marginBottom: 4 }}>
                ⚡ 双倍奖励
              </div>
            )}
            <div style={{
              fontSize: reward.kind === "combo" ? 64 : reward.kind === "double" ? 56 : 48,
              fontWeight: 900,
              color: reward.kind === "combo" ? C.gold : reward.kind === "double" ? C.accent : C.green,
              fontFamily: FONT_DISPLAY,
              textShadow: "0 4px 16px rgba(0,0,0,0.15)",
              lineHeight: 1,
            }}>
              +{reward.amount}
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.textSec, marginTop: 6, letterSpacing: "0.05em" }}>XP</div>
          </div>
        </>
      )}

      {phase !== "review" && phase !== "done" && phase !== "batch_loading" && phase !== "cloze" && phase !== "speed_wait" && (() => {
        // Round 4 修复：mnemonic_fill 是"4 选 1 拼写辨识"，顶部显示 currentWord 等于直接送答案
        // 改成显示问号 + "????" 占位（音标也藏起来），等用户提交后再揭晓
        var hideTargetWord = phase === "spectrum" && spectrumData?.type === "mnemonic_fill";
        // 词性 + 中文释义 — 优先 teach JSON 的 definition；fallback 到 reviewWordData 里学过的 meaning
        // 在 mnemonic_fill phase 隐藏（等于送答案）
        var defPos = !hideTargetWord && (teachData?.definition?.pos || "");
        var defZh = !hideTargetWord && (teachData?.definition?.zh || reviewWordData?.[currentWord]?.meaning || "");
        return (
        <div style={{...S.wordHeader, padding:"20px 22px 16px", boxShadow: stats.streak >= 5 ? "0 0 0 2px "+C.gold+", 0 0 18px "+C.gold+"55" : C.shadow, border: stats.streak >= 5 ? "1px solid "+C.gold : "1px solid "+C.border, animation: stats.streak >= 5 ? "glowPulse 2s ease-in-out infinite" : "fadeUp 0.3s ease-out"}}>
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              {/* P2-8: 单词字号调大到 38，让它真正成为页面主角 */}
              {hideTargetWord
                ? <h2 style={{ ...S.wordTitle, fontSize: 38, margin:0, color: C.textSec, letterSpacing: "0.15em" }}>?????</h2>
                : <>
                    <h2 style={{ ...S.wordTitle, fontSize: 38, margin:0 }}>{currentWord}</h2>
                    <SpeakWordBtn text={currentWord} size={36} />
                  </>
              }
            </div>
            {!hideTargetWord && phonetic && <div style={{ ...S.phoneticText, marginTop:4, fontSize:15 }}>{phonetic}</div>}
            {hideTargetWord && <div style={{ ...S.phoneticText, marginTop:4, fontSize:13, color:C.textSec, fontStyle:"italic" }}>选对答案后揭晓</div>}
            {/* 词性 + 中文释义 — 用户女儿反馈：teach 页应该一目了然先看到"是什么意思" */}
            {(defPos || defZh) && (
              <div style={{ marginTop: 8, display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
                {defPos && (
                  <span style={{
                    padding: "2px 8px",
                    background: C.tealLight,
                    color: C.teal,
                    fontSize: 11,
                    fontWeight: 700,
                    borderRadius: 4,
                    letterSpacing: "0.03em",
                    fontFamily: "'Inter'," + FONT,
                  }}>{defPos}</span>
                )}
                {defZh && (
                  <span style={{ fontSize: 15, color: C.text, fontWeight: 500, lineHeight: 1.4 }}>
                    {defZh}
                  </span>
                )}
              </div>
            )}
          </div>
          {stats.streak > 0 && (
            <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:4 }}>
              <div style={S.streakBadge}>{stats.streak >= 5 ? "🔥×"+stats.streak : "🔥 "+stats.streak}</div>
              {stats.streak >= 3 && <div style={{ fontSize:10, color:C.gold, fontWeight:600, opacity:0.8 }}>连对中</div>}
            </div>
          )}
        </div>
        );
      })()}

      {error && <div style={S.error}>{error}<button onClick={() => {setError("");loadBatch(idx, learned, undefined, { streaming: true }).then(function() { applyWordData(currentWord); });}} style={S.retryBtn}>🔄 重试</button></div>}

      {phase === "batch_loading" && (
        <div style={{...S.card, textAlign:"center", padding:"40px 24px"}}>
          <BrandSparkIcon size={48} marginBottom={16} />
          <h3 style={{fontSize:18, fontWeight:700, margin:"0 0 8px"}}>正在准备第 {batchGroupNo} 组学习内容</h3>
          {Math.floor(idx / 5) === 0 && (
            <p style={{fontSize:13, color:C.textSec, margin:"0 0 12px", lineHeight:1.65, padding:"10px 14px", background:C.tealLight, borderRadius:10, border:"1px solid rgba(42,122,110,0.12)"}}>
              💡 首次加载会稍慢一些，AI 正在根据你的画像量身定制内容，请耐心稍等片刻～
            </p>
          )}
          <div style={{display:"flex",flexWrap:"wrap",gap:6,justifyContent:"center",margin:"8px 0 16px"}}>
            {wordList.slice(idx, Math.min(idx+5, wordList.length)).map(function(w, i) {
              var loaded = dataCache.current[w] && (dataCache.current[w].guess || dataCache.current[w].teach || dataCache.current[w].teachJSON);
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
                      : <span key={"b"+i} style={{display:"inline-block",minWidth:80,padding:"2px 14px",margin:"0 3px",background:C.accentLight,borderBottom:"2px solid "+C.accent,borderRadius:4,color:C.accent+"66",fontWeight:700,textAlign:"center",letterSpacing:2}}>___</span>
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
              return <button key={k} data-option-btn="true" data-selected={sel ? "true" : "false"} disabled={guessSubmitted} style={{...S.optionBtn,background:bg,borderColor:bdr,color:clr,boxShadow:shadow}} onClick={()=>setSelectedOption(k)}><span data-option-key="true" style={S.optionKey}>{k}</span>{v}{ok?" ✓":""}{bad?" ✗":""}</button>;
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
        {/* Phase 1：优先 JSON 渲染路径 */}
        {teachData ? <>
          <div style={{marginBottom:20}}>
            <TeachJSON data={teachData} streaming={teachStreaming} />
          </div>
          {/* Active Recall 自测钩子（Phase A 核心）—— 把"被动阅读"变"主动判断"，留存率从 5% → 75% */}
          {!teachStreaming && (
            <div style={{
              marginBottom: 16,
              padding: "14px 16px",
              background: "linear-gradient(135deg, " + C.tealLight + " 0%, #fff 100%)",
              border: "1.5px dashed " + C.teal + "88",
              borderRadius: 12,
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.teal, marginBottom: 4, display: "flex", alignItems: "center", gap: 6 }}>
                🤔 1 秒自测
              </div>
              <div style={{ fontSize: 13, color: C.text, marginBottom: 10, lineHeight: 1.5 }}>
                看一眼上方单词，<strong>不假思索</strong>能说出意思吗？
              </div>
              {!recallChoice ? (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                  {[
                    { key: "easy",  label: "✅ 能",       sub: "已记住", clr: C.green,  cb: function(){ if (currentWord && (!wordStatusMap[currentWord] || wordStatusMap[currentWord]==="unlearned" || wordStatusMap[currentWord]==="learning")) updateManualWordStatus(currentWord, "mastered"); } },
                    { key: "fuzzy", label: "🤔 模糊",     sub: "再复习", clr: C.gold,   cb: function(){ updateManualWordStatus(currentWord, "uncertain"); } },
                    { key: "hard",  label: "❌ 想不起",   sub: "重点巩固", clr: C.red,    cb: function(){ updateManualWordStatus(currentWord, "error"); } },
                  ].map(function(b){
                    return (
                      <button key={b.key} onClick={function(){ b.cb(); setRecallChoice(b.key); }} style={{
                        padding: "10px 6px",
                        background: "#fff",
                        border: "2px solid " + C.border,
                        borderRadius: 10,
                        cursor: "pointer",
                        fontSize: 13,
                        fontWeight: 700,
                        color: b.clr,
                        fontFamily: FONT,
                        transition: "all 0.15s",
                        textAlign: "center",
                      }}>
                        <div style={{ marginBottom: 2 }}>{b.label}</div>
                        <div style={{ fontSize: 10, fontWeight: 500, color: C.textSec, letterSpacing: "0.03em" }}>{b.sub}</div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: C.textSec, padding: "4px 0" }}>
                  {recallChoice === "easy" && <><span style={{color:C.green, fontWeight:700}}>✅ 已掌握</span> · 📅 <strong style={{...NUM, color:C.teal}}>3 天</strong>后再考</>}
                  {recallChoice === "fuzzy" && <><span style={{color:C.gold, fontWeight:700}}>🤔 不确定</span> · 📅 <strong style={{...NUM, color:C.teal}}>1 天</strong>后再考</>}
                  {recallChoice === "hard" && <><span style={{color:C.red, fontWeight:700}}>❌ 想不起</span> · 📅 <strong style={{...NUM, color:C.teal}}>明天</strong>重点巩固</>}
                </div>
              )}
            </div>
          )}
          <button style={{...S.primaryBtn, opacity: teachStreaming ? 0.6 : 1, cursor: teachStreaming ? "progress" : "pointer"}} onClick={teachToSpectrum} disabled={loading || teachStreaming}>{teachStreaming ? "✨ 正在生成...": (spectrumData?"🎮 词义光谱挑战 →":"→ 下一个词")}</button>
        </>
        : teachContent === "__FAILED__" ? <div style={{textAlign:"center",padding:"20px 0"}}><div style={{fontSize:14,color:C.red,marginBottom:12}}>讲解内容加载失败</div><button style={S.primaryBtn} onClick={function(){setTeachContent("");setTeachData(null);callWithClientRetry(function(){return callAPI(sysP,buildTeachPrompt(currentWord,learned));}).then(function(raw){var finalJSON=raw?(tryJSON(raw)||parsePartialJSON(raw)):null;if(finalJSON&&finalJSON.opening&&finalJSON.teach){dataCache.current[currentWord].teachJSON=finalJSON;dataCache.current[currentWord].teach=null;dataCache.current[currentWord].teachFailed=false;setTeachData(finalJSON);}else{var content=raw?addSpeakMarkers(raw):null;if(content){dataCache.current[currentWord].teach=content;dataCache.current[currentWord].teachFailed=false;setTeachContent(content);}else{setTeachContent("__FAILED__");}}}).catch(function(){setTeachContent("__FAILED__");});}}>重试</button><button style={{...S.ghostBtn,marginLeft:8}} onClick={function(){if(spectrumData){setPhaseDir(1);setPhase("spectrum");}else goNextWord();}}>跳过此词 →</button></div>
        : !teachContent ? (() => {
          // 根据等待秒数动态展示不同提示，给用户进度感
          var s = teachWaitSec;
          var msg, mainColor;
          if (s < 6) { msg = "📖 AI 正在理解你的学习画像..."; mainColor = C.textSec; }
          else if (s < 15) { msg = "🤔 正在为 " + currentWord + " 编写专属讲解..."; mainColor = C.teal; }
          else if (s < 25) { msg = "⚡ AI 思考中... 稍慢一点"; mainColor = C.gold; }
          else { msg = "⏳ 还需要一点时间，马上好..."; mainColor = C.accent; }
          return <div style={{padding:"8px 0"}}>
            <div style={{background:C.border,borderRadius:8,height:20,width:"70%",marginBottom:10,animation:"skeletonPulse 1.2s ease-in-out infinite"}}/>
            <div style={{background:C.border,borderRadius:8,height:14,width:"100%",marginBottom:8,animation:"skeletonPulse 1.2s ease-in-out infinite",animationDelay:"0.1s"}}/>
            <div style={{background:C.border,borderRadius:8,height:14,width:"90%",marginBottom:8,animation:"skeletonPulse 1.2s ease-in-out infinite",animationDelay:"0.2s"}}/>
            <div style={{background:C.border,borderRadius:8,height:14,width:"95%",marginBottom:8,animation:"skeletonPulse 1.2s ease-in-out infinite",animationDelay:"0.3s"}}/>
            <div style={{background:C.border,borderRadius:8,height:14,width:"60%",marginBottom:12,animation:"skeletonPulse 1.2s ease-in-out infinite",animationDelay:"0.4s"}}/>
            <div style={{textAlign:"center",fontSize:13,color:mainColor,marginTop:8,fontWeight:600,transition:"color 0.3s"}}>
              {msg}
              {s >= 3 && <span style={{marginLeft:8,fontSize:12,color:C.textSec,fontWeight:400}}>已等待 {s}s</span>}
            </div>
            {/* 超过 12 秒给用户"跳过"出口 */}
            {s >= 12 && (
              <div style={{textAlign:"center",marginTop:12}}>
                <button onClick={function(){if(spectrumData){setPhaseDir(1);setPhase("spectrum");}else goNextWord();}} style={{...S.ghostBtn,fontSize:12,padding:"6px 14px"}}>等不及了，跳过此词 →</button>
              </div>
            )}
          </div>;
        })() : <>
          <div style={{marginBottom:20, position:"relative"}}>
            <Md text={teachContent} />
            {teachStreaming && <span style={{display:"inline-block",width:8,height:16,background:C.accent,marginLeft:2,verticalAlign:"-2px",animation:"cursorBlink 0.9s steps(1) infinite"}} aria-hidden="true" />}
          </div>
          <button style={{...S.primaryBtn, opacity: teachStreaming ? 0.6 : 1, cursor: teachStreaming ? "progress" : "pointer"}} onClick={teachToSpectrum} disabled={loading || teachStreaming}>{teachStreaming ? "✨ 正在生成...": (spectrumData?"🎮 词义光谱挑战 →":"→ 下一个词")}</button>
        </>}
      </div>}

      {phase === "spectrum" && spectrumData && spectrumData.type === "behavior_match" && (
        <div style={{...S.specCard, animation: phaseDir===1 ? "slideInRight 0.28s ease-out" : "fadeUp 0.3s ease-out"}}>
          <BehaviorMatchGame
            data={spectrumData}
            sfx={sfx}
            loading={loading}
            onCorrect={function(){ var got = triggerReward(10); save({ ...stats, xp: stats.xp + got }); }}
            onNext={goNextWord}
            nextLabel={idx+1>=wordList.length&&(learned.length+1)%5!==0?"🎉 完成！":(learned.length+1)%10===0?"📝 阅读填空挑战":(learned.length+1)%5===0?"🏆 复习关卡":"→ "+wordList[idx+1]}
          />
        </div>
      )}

      {phase === "spectrum" && spectrumData && spectrumData.type === "collocation_fill" && (
        <div style={{...S.specCard, animation: phaseDir===1 ? "slideInRight 0.28s ease-out" : "fadeUp 0.3s ease-out"}}>
          <CollocationFillGame
            data={spectrumData}
            sfx={sfx}
            loading={loading}
            onCorrect={function(){ var got = triggerReward(10); save({ ...stats, xp: stats.xp + got }); }}
            onNext={goNextWord}
            nextLabel={idx+1>=wordList.length&&(learned.length+1)%5!==0?"🎉 完成！":(learned.length+1)%10===0?"📝 阅读填空挑战":(learned.length+1)%5===0?"🏆 复习关卡":"→ "+wordList[idx+1]}
          />
        </div>
      )}

      {phase === "spectrum" && spectrumData && spectrumData.type === "morph_fill" && (
        <div style={{...S.specCard, animation: phaseDir===1 ? "slideInRight 0.28s ease-out" : "fadeUp 0.3s ease-out"}}>
          <MorphFillGame
            data={spectrumData}
            sfx={sfx}
            loading={loading}
            onCorrect={function(){ var got = triggerReward(10); save({ ...stats, xp: stats.xp + got }); }}
            onNext={goNextWord}
            nextLabel={idx+1>=wordList.length&&(learned.length+1)%5!==0?"🎉 完成！":(learned.length+1)%10===0?"📝 阅读填空挑战":(learned.length+1)%5===0?"🏆 复习关卡":"→ "+wordList[idx+1]}
          />
        </div>
      )}

      {phase === "spectrum" && spectrumData && spectrumData.type === "mnemonic_fill" && (
        <div style={{...S.specCard, animation: phaseDir===1 ? "slideInRight 0.28s ease-out" : "fadeUp 0.3s ease-out"}}>
          <MnemonicFillGame
            data={spectrumData}
            sfx={sfx}
            loading={loading}
            onCorrect={function(){ var got = triggerReward(10); save({ ...stats, xp: stats.xp + got }); }}
            onNext={goNextWord}
            nextLabel={idx+1>=wordList.length&&(learned.length+1)%5!==0?"🎉 完成！":(learned.length+1)%10===0?"📝 阅读填空挑战":(learned.length+1)%5===0?"🏆 复习关卡":"→ "+wordList[idx+1]}
          />
        </div>
      )}

      {phase === "spectrum" && spectrumData && spectrumData.type === "context_choice" && (
        <div style={{...S.specCard, animation: phaseDir===1 ? "slideInRight 0.28s ease-out" : "fadeUp 0.3s ease-out"}}>
          <ContextChoiceGame
            data={spectrumData}
            sfx={sfx}
            loading={loading}
            onCorrect={function(){ var got = triggerReward(10); save({ ...stats, xp: stats.xp + got }); }}
            onNext={goNextWord}
            nextLabel={idx+1>=wordList.length&&(learned.length+1)%5!==0?"🎉 完成！":(learned.length+1)%10===0?"📝 阅读填空挑战":(learned.length+1)%5===0?"🏆 复习关卡":"→ "+wordList[idx+1]}
          />
        </div>
      )}

      {phase === "spectrum" && spectrumData && !spectrumData.type && <div style={{...S.specCard, animation: phaseDir===1 ? "slideInRight 0.28s ease-out" : "fadeUp 0.3s ease-out"}}>
        <div style={S.specTag}>🎮 词义光谱挑战</div>
        <div style={S.specHint}>按程度【从弱到强】排列！</div>
        {spectrumData.scenario && <div style={S.specScenario}>{spectrumData.scenario}</div>}
        {/* P2-10: 强度渐变条 — 视觉化"弱→强" */}
        <div style={{ position:"relative", height:6, background:"linear-gradient(90deg, "+C.teal+"66 0%, "+C.gold+"88 50%, "+C.red+"aa 100%)", borderRadius:3, marginBottom:6 }} />
        <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, color:C.textSec, marginBottom:10, padding:"0 4px" }}>
          <span>较弱</span><span>中等</span><span>最强</span>
        </div>
        <div style={S.specSlotRow}>{specSlots.map((w,i) => {
          var labels=["较弱 →","中等 →","最强 ★"];
          var colors=[C.teal+"55", C.gold+"55", C.red+"55"];
          var bc=specStatus==="success"?C.green:specStatus==="error"?C.red:(w?colors[i]:C.border);
          var bgc=specStatus==="success"?C.greenLight:specStatus==="error"?C.redLight:(w?colors[i].replace("55","22"):"#fff");
          return <div key={i} onClick={()=>returnFromSlot(w,i)} style={{...S.specSlot,borderColor:bc,background:bgc,cursor:w&&specStatus!=="success"?"pointer":"default",color:w?C.accent:C.textSec}}>{w||<span style={{fontSize:12}}>{labels[i]}</span>}</div>;
        })}</div>
        {specStatus!=="success" && <div style={S.specPoolRow}>{specPool.map(w => <button key={w} onClick={()=>moveToSlot(w)} style={S.specPoolBtn} onMouseEnter={function(e){ e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 4px 14px rgba(196,107,48,0.25)"; }} onMouseLeave={function(e){ e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 2px 8px rgba(196,107,48,0.12)"; }}>{w}</button>)}</div>}
        {specSlots.every(s=>s!==null) && specStatus==="idle" && <button onClick={checkSpectrum} style={S.specCheckBtn}>✓ 验证排序</button>}
        {specStatus==="error" && <div style={{color:C.red,textAlign:"center",padding:10,fontWeight:700,animation:"shake 0.4s ease"}}>⚠️ 再试一次！</div>}
        {specStatus==="success" && <div style={S.specDecoded}>
          <div style={{color:C.green,fontWeight:700,marginBottom:8}}>✓ 正确！+10 XP</div>
          <div style={{lineHeight:1.7,fontSize:14}}>{spectrumData.decoded}</div>
          <button onClick={goNextWord} disabled={loading} style={{...S.specCheckBtn,marginTop:16,background:"linear-gradient(135deg, "+C.green+" 0%, #2eb67a 100%)",boxShadow:"0 4px 12px "+C.green+"55"}}>
            {idx+1>=wordList.length&&(learned.length+1)%5!==0?"🎉 完成！":(learned.length+1)%10===0?"📝 阅读填空挑战":(learned.length+1)%5===0?"🏆 复习关卡":"→ "+wordList[idx+1]}
          </button>
        </div>}
      </div>}

      {/* Round 4: speed_match 类型走新组件，旧 fill_blank 类型继续走下方传统填空 UI（兼容旧 cache） */}
      {phase === "review" && reviewData?.type === "speed_match" && (
        <div style={{...S.card, animation:"slideInRight 0.28s ease-out"}}>
          <SpeedMatchGame
            data={reviewData}
            sfx={sfx}
            loading={loading}
            onCorrect={function(score){ save({ ...stats, xp: stats.xp + (score || 50) }); }}
            onNext={afterReview}
            nextLabel={idx+1>=wordList.length?"🎉 完成！":"→ "+wordList[idx+1]}
          />
        </div>
      )}

      {phase === "review" && reviewData?.type !== "speed_match" && <div style={{...S.card, animation:"slideInRight 0.28s ease-out"}}>
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
            <h3 style={{fontSize:20,fontWeight:700,margin:"0 0 8px"}}>喜欢 Vocab by Know U. 吗？</h3>
            <p style={{fontSize:14,color:C.textSec,lineHeight:1.7,margin:"0 0 20px"}}>最初为女儿写的学习工具，现在分享给每一位认真学英语的你。持续开发和 AI 运行都有成本，你的支持是最大的动力！</p>
            <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:16}}>
              {[["☕ $10 — 一杯咖啡","10"],["🍕 $25 — 一顿午餐","25"],["🎁 $50 — 加满油","50"]].map(([label,amt]) => (
                <button key={amt} onClick={()=>window.open("https://buymeacoffee.com/winstonwu1996?amount="+amt,"_blank")} style={{padding:"12px 16px",background:C.bg,border:"1.5px solid "+C.border,borderRadius:10,fontFamily:FONT,fontSize:15,cursor:"pointer",fontWeight:600,textAlign:"left"}}>{label}</button>
              ))}
              <button onClick={()=>{ var a=prompt("自定义金额 ($):"); if(a) window.open("https://buymeacoffee.com/winstonwu1996?amount="+a,"_blank"); }} style={{padding:"12px 16px",background:C.bg,border:"1.5px solid "+C.border,borderRadius:10,fontFamily:FONT,fontSize:15,cursor:"pointer",fontWeight:600,textAlign:"left"}}>💝 自定义金额</button>
            </div>
            <button onClick={()=>{ setShowTipJar(false); setTipDismissed(true); loadSave().then(d=>doSave({...(d||{}),tipDismissed:true})); window.scrollTo(0,0); }} style={{background:"transparent",border:"none",color:C.textSec,fontFamily:FONT,fontSize:14,cursor:"pointer",padding:8}}>暂时跳过，继续学习 →</button>
            <div style={{marginTop:8,fontSize:12,color:C.textSec,lineHeight:1.6}}>一个爸爸为女儿写的工具，现在服务每一位学习者。<br/>你的支持让这份用心走得更远 ❤️</div>
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

          {/* 📅 记忆地图 — 让用户感知 SRS 系统在持续追踪这些词 */}
          <div style={{marginTop:18, padding:"14px 16px", background:C.tealLight+"99", border:"1px solid "+C.teal+"44", borderRadius:12, textAlign:"left"}}>
            <div style={{fontSize:13, fontWeight:800, color:C.teal, marginBottom:10, display:"flex", alignItems:"center", gap:6}}>
              📅 你的记忆地图
            </div>
            <div style={{fontSize:12, color:C.text, lineHeight:1.6, marginBottom:10}}>
              这 <strong style={{...NUM, color:C.teal}}>{wordList.length}</strong> 个词将分别在以下时间回来找你：
            </div>
            {/* 5 个时间点 mini 时间轴 */}
            <div style={{display:"grid", gridTemplateColumns:"repeat(5, 1fr)", gap:6, marginBottom:8}}>
              {[
                { label:"1 天", color:C.accent },
                { label:"3 天", color:C.gold },
                { label:"7 天", color:C.teal },
                { label:"14 天", color:C.purple },
                { label:"30 天", color:C.green },
              ].map(function(p, i){
                return <div key={i} style={{textAlign:"center"}}>
                  <div style={{height:6, background:p.color, borderRadius:3, marginBottom:4, opacity:0.7}} />
                  <div style={{...NUM, fontSize:11, fontWeight:800, color:p.color}}>{p.label}</div>
                </div>;
              })}
            </div>
            <div style={{fontSize:11, color:C.textSec, lineHeight:1.5}}>
              答对 → 间隔变长；答错 → 重置 1 天。<strong style={{color:C.teal}}>科学间隔重复</strong> 让你真正记住，而不是临时背完就忘。
            </div>
          </div>

          {!tipDismissed && <div style={{marginTop:20,padding:"16px 20px",background:C.goldLight,borderRadius:12,fontSize:14,lineHeight:1.7,textAlign:"center"}}>
            <div style={{marginBottom:8}}>☕ 如果 Vocab by Know U. 帮到了你，考虑请开发者喝杯咖啡？</div>
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
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:C.overlay,backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",zIndex:1001,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>{ if(!loginLoading){setShowLogin(false);setLoginSent(false);setLoginEmail('');setOtpCode('');setOtpError('');window.scrollTo(0,0);} }}>
          <div style={{background:C.card,borderRadius:20,padding:"32px 24px",maxWidth:380,width:"100%",boxShadow:"0 20px 60px rgba(0,0,0,0.25)",fontFamily:FONT,animation:"fadeUp 0.25s ease-out"}} onClick={e=>e.stopPropagation()}>
            {!loginSent ? (
              <>
                <div style={{fontSize:36,textAlign:"center",marginBottom:8}}>🔑</div>
                <h3 style={{fontSize:19,fontWeight:700,textAlign:"center",margin:"0 0 4px"}}>登录 / 注册</h3>
                <p style={{fontSize:13,color:C.textSec,textAlign:"center",lineHeight:1.6,margin:"0 0 20px"}}>新用户输入邮箱即自动注册，老用户同一邮箱直接登录</p>
                <div style={{background:C.tealLight,borderRadius:10,padding:"12px 14px",marginBottom:20,fontSize:13,lineHeight:1.9,color:C.text}}>
                  ✅ 每日 {DAILY_LIMIT_REGISTERED} 词（未登录仅 {DAILY_LIMIT_GUEST} 词/天）<br/>
                  ☁️ 进度云端同步，换设备不丢<br/>
                  📊 完整学习历史记录<br/>
                  <span style={{fontSize:12,color:C.textSec}}>注册免费，基础功能永久可用</span>
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
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:C.overlay,backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",zIndex:1001,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>{setShowLimitModal(false);window.scrollTo(0,0);}}>
          <div style={{background:C.card,borderRadius:20,padding:"32px 24px",maxWidth:360,width:"100%",boxShadow:"0 20px 60px rgba(0,0,0,0.25)",fontFamily:FONT,textAlign:"center",animation:"fadeUp 0.25s ease-out"}} onClick={e=>e.stopPropagation()}>
            <div style={{fontSize:48,marginBottom:8}}>🎓</div>
            <h3 style={{fontSize:19,fontWeight:700,margin:"0 0 8px"}}>{user ? "今日学习完成！" : "今天的体验课结束了"}</h3>
            <p style={{fontSize:14,color:C.textSec,lineHeight:1.7,margin:"0 0 16px"}}>{user ? "免费用户每天可学 "+DAILY_LIMIT_REGISTERED+" 词，想学更多可以升级 Pro" : "你刚才体验了 AI 1 对 1 的私教效果："}</p>
            {!user && <div style={{background:C.bg,borderRadius:10,padding:"12px 14px",marginBottom:12,fontSize:13,lineHeight:1.7,textAlign:"left"}}>
              {"🎯 AI 根据你的兴趣和生活定制了讲解"}<br/>
              {"🧠 这种个性化教学，传统私教每小时 $100+"}<br/>
              {"📊 你的学习画像会越来越精准"}
            </div>}
            <div style={{background:C.accentLight,borderRadius:10,padding:"12px 14px",marginBottom:16,fontSize:13,lineHeight:1.7,textAlign:"left"}}>
              {user ? <><strong>想要更深入的学习？</strong><br/>{"升级 Basic 会员：每天 1 小时正式学习"}<br/>{"仅 $20/月（¥145）— 不到一节真人私教的价格"}<br/>{"自带 API Key？仅需 $10/月"}</> : <><strong>注册后每天可学 {DAILY_LIMIT_REGISTERED} 词，完全免费</strong><br/>{"☁️ 进度云端同步，换设备不丢"}<br/>{"📊 完整学习历史记录"}</>}
            </div>
            {user ? (
              <>
                <a href="/plan" style={{...S.primaryBtn,width:"100%",justifyContent:"center",marginBottom:8,textDecoration:"none",display:"flex"}}>{"🚀 查看 AI 私教方案"}</a>
                <button style={{...S.ghostBtn,width:"100%",justifyContent:"center",textAlign:"center"}} onClick={()=>{setShowLimitModal(false);window.scrollTo(0,0);}}>{"明天继续免费学习"}</button>
              </>
            ) : (
              <>
                <button style={{...S.primaryBtn,width:"100%",justifyContent:"center",marginBottom:8}} onClick={()=>{setShowLimitModal(false);setShowLogin(true);window.scrollTo(0,0);}}>{"🔑 免费注册，每天学 " + DAILY_LIMIT_REGISTERED + " 词"}</button>
                <a href="/plan" style={{...S.ghostBtn,width:"100%",justifyContent:"center",textAlign:"center",textDecoration:"none",display:"flex"}}>{"查看 AI 私教方案"}</a>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── SHARE MODAL ── */}
      {showShare && (
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:C.overlay,backdropFilter:"blur(4px)",WebkitBackdropFilter:"blur(4px)",zIndex:1000,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>{setShowShare(false);window.scrollTo(0,0);}}>
          <div style={{background:C.card,borderRadius:20,padding:"28px 24px",maxWidth:380,width:"100%",boxShadow:"0 20px 60px rgba(0,0,0,0.25)",fontFamily:FONT,textAlign:"center",animation:"fadeUp 0.25s ease-out"}} onClick={e=>e.stopPropagation()}>
            <div style={{fontSize:36,marginBottom:6}}>📤</div>
            <h3 style={{fontSize:18,fontWeight:700,margin:"0 0 4px"}}>推荐给朋友</h3>
            <p style={{fontSize:13,color:C.textSec,lineHeight:1.6,margin:"0 0 18px"}}>觉得好用？让身边的华人朋友也试试~</p>

            {/* QR Code — desktop 扫码，手机长按保存 */}
            <div style={{background:C.bg,borderRadius:12,padding:14,marginBottom:14,display:"inline-block"}}>
              <img src={"https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https%3A%2F%2Fknowulearning.com&bgcolor=faf7f2&color=2c2420&margin=6"} width={160} height={160} alt="QR Code" style={{display:"block",borderRadius:6}} />
            </div>
            <div style={{fontSize:12,color:C.textSec,marginBottom:16}}>📱 手机扫码 / 长按保存发朋友圈</div>

            {/* 邀请文案 */}
            <div style={{background:C.accentLight,borderRadius:10,padding:"10px 14px",marginBottom:16,fontSize:13,color:C.text,lineHeight:1.7,textAlign:"left"}}>
              {"AI 英语私教，效果堪比真人私教，用你的真实生活场景 1 对 1 教英语 🎉\n👉 knowulearning.com"}
            </div>

            {/* 按钮区 */}
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {typeof navigator !== "undefined" && navigator.share && (
                <button style={{...S.primaryBtn,width:"100%",justifyContent:"center"}} onClick={async()=>{
                  try { await navigator.share({ title:"Vocab by Know U. — AI 英语私教", text:"AI 英语私教，效果堪比真人私教，用你的真实生活场景 1 对 1 教英语 🎉", url:"https://knowulearning.com" }); } catch(e){}
                }}>📱 分享到微信 / 其他 App</button>
              )}
              <button style={{...S.primaryBtn,width:"100%",justifyContent:"center",background:C.teal}} onClick={()=>{
                navigator.clipboard?.writeText("AI 英语私教，效果堪比真人私教，用你的真实生活场景 1 对 1 教英语 🎉 knowulearning.com").then(()=>alert("✅ 已复制！可以粘贴到微信/抖音/朋友圈")).catch(()=>alert("请手动复制上方链接"));
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

      {/* 学习中不显示 footer，避免干扰；只在 done（学完）才显示完整 footer */}
      {phase === "done" && <>
        <Disclaimer />
        <div style={{ textAlign:"center", padding:"24px 0 8px", fontSize:13, lineHeight:1.8, color:C.textSec }}>
          <div>Made with ❤️ by a dad for his daughter, and for you.</div>
          <div style={{ fontStyle:"italic" }}>为女儿而写，献给每一位认真学习的你</div>
          <div style={{ marginTop:6, fontSize:12 }}>问题反馈：<a href="mailto:Winstonwu1996@icloud.com" style={{ color:C.accent, textDecoration:"none" }}>Winstonwu1996@icloud.com</a> ✉️</div>
          <div style={{ marginTop:4, fontSize:12, display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap", alignItems:"center" }}>
            <a href="https://buymeacoffee.com/winstonwu1996" target="_blank" rel="noreferrer" style={{ color:C.gold, textDecoration:"none", fontWeight:600 }}>☕ 请开发者喝杯咖啡</a>
            <button onClick={()=>setShowShare(true)} style={{ background:"transparent", border:"none", color:C.accent, fontFamily:FONT, fontSize:12, fontWeight:600, cursor:"pointer", padding:0 }}>🔗 推荐给朋友</button>
          </div>
          <div style={{ marginTop:4, fontSize:11, color:C.border }}>Vocab by Know U.</div>
        </div>
        <PrivacyNotice />
      </>}

      <div ref={contentEndRef} />
      </div>
      <UserCenter open={showUserCenter} onClose={function(){ setShowUserCenter(false); }} user={user} stats={stats} studyStreak={getStudyStreak()} studyGoal={studyGoal} dailyNewWords={dailyNewWords} deepReviewDailyCap={deepReviewDailyCap} userTier={userTier} newLearnedToday={getNewWordQuotaState().consumed || 0} onLogin={function(){ setShowUserCenter(false); setShowLogin(true); }} onLogout={function(){ handleLogout(); setShowUserCenter(false); }} />
      <style>{globalCSS}</style>
    </div>
  );
}

/* ─── CSS & Styles: imported from lib/theme.js ─── */

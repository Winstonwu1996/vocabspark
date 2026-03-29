import { useState, useRef, useEffect, useCallback } from "react";
import Head from "next/head";
import { supabase } from '../lib/supabase';
import { C, FONT, globalCSS, S } from '../lib/theme';
import { callAPI, callAPIFast, tryJSON } from '../lib/api';
import { BrandNavBar, BrandSparkIcon } from '../components/BrandNavBar';

/* ═══════════════════════════════════════════════════════
   Writing by Know U. — AI 写作教练
   思维表达力训练平台
   ═══════════════════════════════════════════════════════ */

var WRITING_SKEY = "vocabspark_writing_v1";
var VOCAB_SKEY = "vocabspark_v1";

/* ─── 六维能力系统（含脑科学映射） ─── */
var BRAIN_DIMS = [
  { key: "creativity", label: "创意力", labelEn: "Creativity", icon: "🎨",
    brain: "右脑颞叶 + 默认模式网络", brainEn: "Right Temporal Lobe + DMN",
    science: "创意力对应大脑的默认模式网络（Default Mode Network）。当你自由联想、构思故事时，大脑不同区域的神经元在\u201c漫游\u201d中建立新连接。研究表明，持续的创意写作能显著增强这个网络的活跃度。" },
  { key: "logic", label: "逻辑力", labelEn: "Logic", icon: "🧩",
    brain: "左脑前额叶", brainEn: "Left Prefrontal Cortex",
    science: "逻辑力主要依赖左脑前额叶皮层（Prefrontal Cortex），这是大脑的\u201c指挥中心\u201d。议论文写作要求你组织论据、建立因果链，每一次练习都在强化这个区域的神经通路。" },
  { key: "observation", label: "观察力", labelEn: "Observation", icon: "🔍",
    brain: "枕叶 + 感觉皮层", brainEn: "Occipital + Sensory Cortex",
    science: "观察力涉及视觉皮层（枕叶）和多感觉整合区域。当你用文字描绘细节时，大脑会重新激活感官记忆。描写练习让你的大脑学会更敏锐地捕捉和存储感官信息。" },
  { key: "empathy", label: "共情力", labelEn: "Empathy", icon: "💛",
    brain: "镜像神经元 + 颞顶联合区", brainEn: "Mirror Neurons + TPJ",
    science: "共情力依赖镜像神经元系统和颞顶联合区（TPJ）。当你写人物、揣摩他人感受时，这些区域高度活跃。研究证实，经常进行叙事写作的人，共情能力测试得分更高。" },
  { key: "critical", label: "思辨力", labelEn: "Critical", icon: "⚖️",
    brain: "前扣带回 + 背外侧前额叶", brainEn: "ACC + dlPFC",
    science: "思辨力依赖前扣带回皮层（ACC，负责冲突检测）和背外侧前额叶（dlPFC，负责理性判断）。反驳、质疑、多角度分析——这些练习让你的大脑学会在\u201c直觉\u201d和\u201c理性\u201d之间切换。" },
  { key: "expression", label: "表达力", labelEn: "Expression", icon: "✍️",
    brain: "布洛卡区 + 韦尼克区", brainEn: "Broca's + Wernicke's Area",
    science: "表达力的核心是布洛卡区（语言产出）和韦尼克区（语言理解）。每次写作都在强化这两个区域之间的弓状束连接。双语写作者的这条通路比单语者更粗壮——这就是你正在做的事。" },
];

/* ─── 年龄基准数据（每维度按年龄段的平均累计点数） ─── */
var AGE_BENCHMARKS = {
  // 基于写作量和认知发展的估算基准值
  // key: age range, value: { dim: average points after ~10 essays }
  "10-12": { creativity: 12, logic: 6, observation: 10, empathy: 7, critical: 4, expression: 8 },
  "13-15": { creativity: 15, logic: 12, observation: 13, empathy: 11, critical: 9, expression: 12 },
  "16-18": { creativity: 18, logic: 18, observation: 15, empathy: 14, critical: 15, expression: 16 },
  "default": { creativity: 15, logic: 12, observation: 13, empathy: 11, critical: 9, expression: 12 },
};

var getAgeGroup = function(age) {
  if (!age) return "default";
  if (age <= 12) return "10-12";
  if (age <= 15) return "13-15";
  if (age <= 18) return "16-18";
  return "default";
};

/* ─── 成长理念 ─── */
var PHILOSOPHY_ITEMS = [
  { icon: "🧠", title: "写作即健脑", summary: "每种文体训练大脑不同区域，写作是最全面的认知训练。",
    detail: "神经科学研究表明，写作是唯一同时激活逻辑思维（左脑）、创意联想（右脑）、情感共鸣（边缘系统）和语言产出（布洛卡区）的活动。不同类型的写作——议论文练逻辑、故事练创意、描写练观察——就像健身中的不同动作，针对性地强化大脑的不同\u201c肌肉群\u201d。" },
  { icon: "💡", title: "先思考，再表达", summary: "AI 引导你理清思路，而不是替你写作。你的想法最珍贵。",
    detail: "我们的灵感对话采用苏格拉底式教学法——通过提问引导你发现自己的想法，而非给你答案。研究表明，这种\u201c引导式发现\u201d比\u201c直接告知\u201d的学习效果高出 3-5 倍。当你写作时，AI 是你的教练，不是代笔人。你的每一个想法，哪怕最初很模糊，都是独一无二的。" },
  { icon: "🌉", title: "中文是桥梁，不是拐杖", summary: "用母语释放思维，再用英文精准表达。这是科学的语言学习路径。",
    detail: "二语习得研究中的\u201c跨语言实践\u201d（Translanguaging）理论指出：允许学习者使用母语思考，能显著降低认知负荷，让他们专注于更高层次的思维训练。我们的中文桥梁机制让你先想清楚要说什么（最难的部分），再学会怎么用英文说。随着你的进步，桥梁会逐渐减少——因为你已经不需要它了。" },
  { icon: "🤖", title: "训练未来的核心能力", summary: "清晰表达想法的能力 = 与 AI 高效协作的能力。",
    detail: "在 AI 时代，最有价值的技能不是记忆知识，而是能把模糊的想法变成清晰的、有结构的表达。这个能力决定了你能否驾驭 AI 的力量。一个能清晰描述问题的人，无论用中文还是英文，都能让 AI 产出高质量的结果。写作训练的本质，就是在训练这种\u201c思维表达力\u201d。" },
  { icon: "📈", title: "每一篇都算数", summary: "你的成长轨迹被记录，每次写作都在积累可见的进步。",
    detail: "我们的六维脑力系统基于认知心理学的能力模型，每篇作文都会量化你在六个维度上的成长。这不是抽象的分数——它对应着你大脑中真实的神经通路的强化。就像健身记录你的卧推重量、跑步配速一样，我们记录你的思维\u201c力量\u201d。" },
];

/* ─── 初始测评题目 ─── */
var ASSESSMENT_TASKS = [
  { dim: "observation", icon: "🔍", title: "观察力",
    instruction: "Look around you right now. Pick one small object and describe it in 1-2 sentences. Include at least 2 sensory details (what it looks like, feels like, sounds like, etc.)",
    hint: "观察你身边的一个小物品，用 1-2 句话描述它，尽量包含 2 个感官细节。可以中英混合。",
    placeholder: "例：My water bottle is transparent blue with tiny scratches on the surface. It feels cold and smooth when I hold it.",
    minWords: 8 },
  { dim: "creativity", icon: "🎨", title: "创意力",
    instruction: "Imagine an animal that doesn't exist. Describe what it looks like and one special thing it can do.",
    hint: "想象一种不存在的动物，描述它的样子和一个特殊能力。",
    placeholder: "例：It's a tiny fox with butterfly wings. It can turn invisible when it's scared.",
    minWords: 8 },
  { dim: "logic", icon: "🧩", title: "逻辑力",
    instruction: "Break down this topic into 3 clear steps: How to prepare for a trip.",
    hint: "把\u201c如何准备一次旅行\u201d分解成 3 个清晰的步骤。",
    placeholder: "例：Step 1: Decide where to go and check the weather. Step 2: Pack clothes and...",
    minWords: 10 },
  { dim: "empathy", icon: "💛", title: "共情力",
    instruction: "Your best friend just failed an important exam and feels terrible. What would you say to them?",
    hint: "你的好朋友考试没考好，很难过。你会对他/她说什么？",
    placeholder: "例：I know you feel disappointed, but one test doesn't define you. Remember when you...",
    minWords: 8 },
  { dim: "critical", icon: "⚖️", title: "思辨力",
    instruction: "Some people say: Homework is a waste of time. Do you agree or disagree? Give ONE reason.",
    hint: "\u201c作业浪费时间\u201d——你同意还是不同意？给出一个理由。",
    placeholder: "例：I partially agree because... However, some homework like...",
    minWords: 8 },
  { dim: "expression", icon: "✍️", title: "表达力",
    instruction: "Describe today's weather AND how it makes you feel in one sentence.",
    hint: "用一句英文描述今天的天气和你的感受。",
    placeholder: "例：The grey sky and cold rain make me want to stay in bed with a warm blanket.",
    minWords: 5 },
];

var VOCAB_CHECK_WORDS = [
  { word: "abandon", level: 1 },
  { word: "contribute", level: 1 },
  { word: "significant", level: 2 },
  { word: "perspective", level: 2 },
  { word: "resilient", level: 3 },
  { word: "ambiguous", level: 3 },
  { word: "pragmatic", level: 4 },
  { word: "ubiquitous", level: 4 },
];

/* ─── 写作技巧框架 ─── */
var WRITING_SKILLS_FRAMEWORK = [
  { icon: "🎯", title: "审题与立意", titleEn: "Purpose & Theme",
    desc: "每篇好文章都有一个清晰的核心——你到底想说什么？我们在灵感对话中会引导你找到它。",
    skills: ["识别题目关键词", "确定写作目的", "提炼核心主题句 (Thesis)"] },
  { icon: "🏗️", title: "结构与组织", titleEn: "Structure",
    desc: "好文章像好建筑：有地基、有支柱、有屋顶。不同文体有不同的经典结构。",
    skills: ["开头钩子 (Hook)", "段落主题句 + 支撑细节", "过渡词连接", "结尾回扣主题"] },
  { icon: "🎨", title: "描写与细节", titleEn: "Details & Imagery",
    desc: "让读者\u201c看到\u201d你写的东西。好的描写用感官细节代替抽象概述。",
    skills: ["Show, don't tell", "五感描写法", "具体 > 笼统", "动词选择的力量"] },
  { icon: "💬", title: "论证与说服", titleEn: "Argumentation",
    desc: "观点 + 证据 + 推理 = 说服力。议论文的核心是逻辑链条。",
    skills: ["立场 → 理由 → 证据", "反面论证与反驳", "让步与转折 (Although...)", "避免逻辑谬误"] },
  { icon: "✨", title: "语言与润色", titleEn: "Language & Style",
    desc: "用准确的词、多样的句式、恰当的修辞，让文章从\u201c能看\u201d变成\u201c好看\u201d。",
    skills: ["词汇升级（good → exceptional）", "长短句交替节奏", "修辞手法（比喻、排比）", "删除冗余词"] },
];

var CATEGORY_BRAIN_MAP = {
  creative:      { primary: "creativity", secondary: "observation", tertiary: "expression" },
  argumentative: { primary: "logic", secondary: "critical", tertiary: "expression" },
  descriptive:   { primary: "observation", secondary: "empathy", tertiary: "creativity" },
  reflective:    { primary: "critical", secondary: "logic", tertiary: "empathy" },
  journal:       { primary: "observation", secondary: "expression", tertiary: "creativity" },
};

var CATEGORIES = [
  { key: "creative", label: "🎨 创意故事", labelEn: "Creative Story", desc: "发挥想象力，创造独特的故事", dims: "创意力 +3，观察力 +2" },
  { key: "argumentative", label: "💬 议论文", labelEn: "Argumentative", desc: "表达观点，用证据说服读者", dims: "逻辑力 +3，思辨力 +2" },
  { key: "descriptive", label: "👤 人物/场景描写", labelEn: "Descriptive", desc: "用细节描绘画面，让读者身临其境", dims: "观察力 +3，共情力 +2" },
  { key: "reflective", label: "📖 读后感/反思", labelEn: "Reflective", desc: "深度思考，分析事物的多个角度", dims: "思辨力 +3，逻辑力 +2" },
  { key: "journal", label: "📝 日记/随笔", labelEn: "Journal", desc: "记录生活，自由表达所思所感", dims: "观察力 +3，表达力 +2" },
];

/* ─── 预置题库 ─── */
var WRITING_PROMPTS = {
  creative: [
    { title: "意外的发现", prompt: "Write a story about a time you discovered something unexpected about a person you thought you knew well.", hints: ["Think about a surprising moment", "Show don't tell", "Use sensory details"], wordCount: { min: 150, max: 300 } },
    { title: "如果时间倒流", prompt: "If you could go back to one moment in your life and experience it again, which moment would you choose and why?", hints: ["Pick a specific moment", "Describe how it felt", "What would you notice differently?"], wordCount: { min: 150, max: 300 } },
    { title: "陌生人的善意", prompt: "Write about a time a stranger did something kind that you still remember.", hints: ["Set the scene", "What happened?", "How did it change your day?"], wordCount: { min: 150, max: 300 } },
  ],
  argumentative: [
    { title: "科技与学习", prompt: "Do you agree or disagree: Technology has made learning easier for students? Support your position with reasons and examples.", hints: ["State your position clearly", "Give 2-3 reasons", "Address the other side"], wordCount: { min: 200, max: 350 } },
    { title: "校服之争", prompt: "Should students be required to wear school uniforms? Take a clear position and support it.", hints: ["Think about both sides", "Use personal experience", "End with a strong conclusion"], wordCount: { min: 200, max: 350 } },
    { title: "作业的意义", prompt: "Is homework helpful or harmful to students? Argue your position with evidence.", hints: ["Consider different subjects", "Think about balance", "Use specific examples"], wordCount: { min: 200, max: 350 } },
  ],
  descriptive: [
    { title: "我最熟悉的地方", prompt: "Describe a place that feels like home to you. Use all five senses to bring it to life.", hints: ["Sight, sound, smell, touch, taste", "Show emotions through details", "What makes it special?"], wordCount: { min: 150, max: 300 } },
    { title: "一个难忘的人", prompt: "Describe a person who has had a big influence on you. What do they look like, sound like, and act like?", hints: ["Physical details", "How they speak", "A specific memory with them"], wordCount: { min: 150, max: 300 } },
  ],
  reflective: [
    { title: "失败的礼物", prompt: "Write about a time you failed at something. What did you learn from the experience?", hints: ["Be honest about your feelings", "What changed after?", "Would you do it differently?"], wordCount: { min: 200, max: 350 } },
    { title: "一本改变我的书", prompt: "Write about a book, movie, or song that changed the way you think about something.", hints: ["What was your view before?", "What shifted?", "How does it affect you now?"], wordCount: { min: 200, max: 350 } },
  ],
  journal: [
    { title: "今天的小确幸", prompt: "Write about one small moment today that made you happy or grateful.", hints: ["Be specific", "Why did it matter?", "Describe the feeling"], wordCount: { min: 100, max: 200 } },
    { title: "给未来自己的信", prompt: "Write a letter to yourself one year from now. What do you want to tell your future self?", hints: ["What are you proud of?", "What do you hope for?", "What advice would you give?"], wordCount: { min: 150, max: 300 } },
  ],
};

/* ─── 六维雷达图 (SVG) ─── */
var RadarChart = ({ brainStats, size, benchmarkStats }) => {
  size = size || 200;
  var cx = size / 2, cy = size / 2, r = size * 0.38;
  var n = BRAIN_DIMS.length;
  var maxVal = 30;

  // 计算实际最大值（包括 benchmark）
  var actualMax = 0;
  BRAIN_DIMS.forEach(function(d) {
    var v = brainStats[d.key] || 0;
    var b = benchmarkStats ? (benchmarkStats[d.key] || 0) : 0;
    if (v > actualMax) actualMax = v;
    if (b > actualMax) actualMax = b;
  });
  if (actualMax > maxVal) maxVal = Math.ceil(actualMax * 1.2);
  if (maxVal < 5) maxVal = 5;

  var getPoint = function(i, val) {
    var angle = (Math.PI * 2 * i / n) - Math.PI / 2;
    var ratio = Math.min(val / maxVal, 1);
    return {
      x: cx + r * ratio * Math.cos(angle),
      y: cy + r * ratio * Math.sin(angle),
    };
  };

  // 背景网格
  var gridLevels = [0.25, 0.5, 0.75, 1];
  var gridPaths = gridLevels.map(function(level) {
    var pts = [];
    for (var i = 0; i < n; i++) {
      var p = getPoint(i, maxVal * level);
      pts.push(p.x + "," + p.y);
    }
    return pts.join(" ");
  });

  // 轴线
  var axes = [];
  for (var i = 0; i < n; i++) {
    var p = getPoint(i, maxVal);
    axes.push({ x1: cx, y1: cy, x2: p.x, y2: p.y });
  }

  // 数据多边形
  var dataPoints = [];
  for (var i = 0; i < n; i++) {
    var val = brainStats[BRAIN_DIMS[i].key] || 0;
    var p = getPoint(i, val);
    dataPoints.push(p.x + "," + p.y);
  }

  // 标签位置
  var labels = BRAIN_DIMS.map(function(d, i) {
    var p = getPoint(i, maxVal * 1.25);
    return { ...d, x: p.x, y: p.y, val: brainStats[d.key] || 0 };
  });

  return (
    <svg width={size} height={size} viewBox={"0 0 " + size + " " + size} style={{ display:"block", margin:"0 auto" }}>
      {/* 网格 */}
      {gridPaths.map(function(pts, i) {
        return <polygon key={i} points={pts} fill="none" stroke={C.border} strokeWidth={0.8} opacity={0.6} />;
      })}
      {/* 轴线 */}
      {axes.map(function(a, i) {
        return <line key={i} x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2} stroke={C.border} strokeWidth={0.5} opacity={0.5} />;
      })}
      {/* 年龄基准线 */}
      {benchmarkStats && (function() {
        var bpts = [];
        for (var bi = 0; bi < n; bi++) {
          var bval = benchmarkStats[BRAIN_DIMS[bi].key] || 0;
          var bp = getPoint(bi, bval);
          bpts.push(bp.x + "," + bp.y);
        }
        return <polygon points={bpts.join(" ")} fill="none" stroke={C.teal} strokeWidth={1.5} strokeDasharray="4,3" opacity={0.6} />;
      })()}
      {/* 数据区域 */}
      <polygon points={dataPoints.join(" ")} fill={C.accent + "33"} stroke={C.accent} strokeWidth={2} />
      {/* 数据点 */}
      {BRAIN_DIMS.map(function(d, i) {
        var val = brainStats[d.key] || 0;
        var p = getPoint(i, val);
        return <circle key={i} cx={p.x} cy={p.y} r={3.5} fill={C.accent} stroke="#fff" strokeWidth={1.5} />;
      })}
      {/* 标签 */}
      {labels.map(function(l, i) {
        return (
          <text key={i} x={l.x} y={l.y} textAnchor="middle" dominantBaseline="middle" style={{ fontSize: 10, fontFamily: FONT, fill: C.textSec, fontWeight: 600 }}>
            {l.icon + " " + l.label}
          </text>
        );
      })}
    </svg>
  );
};

/* ─── 本地存储工具 ─── */
var loadWritingData = function() {
  try {
    var raw = localStorage.getItem(WRITING_SKEY);
    return raw ? JSON.parse(raw) : null;
  } catch(e) { return null; }
};

var saveWritingData = function(data) {
  try {
    localStorage.setItem(WRITING_SKEY, JSON.stringify({ ...data, updatedAt: new Date().toISOString() }));
  } catch(e) {}
};

var loadVocabWords = function() {
  try {
    var raw = localStorage.getItem(VOCAB_SKEY);
    if (!raw) return [];
    var data = JSON.parse(raw);
    var map = data.wordStatusMap || {};
    return Object.keys(map).filter(function(w) {
      return map[w] === "learning" || map[w] === "mastered";
    });
  } catch(e) { return []; }
};

var getDefaultData = function() {
  return {
    essays: [],
    brainStats: { creativity: 0, logic: 0, observation: 0, empathy: 0, critical: 0, expression: 0 },
    stats: { totalEssays: 0, totalWords: 0, avgScore: 0, bestScore: 0, streak: 0, lastWritingDate: null },
    goldenQuotes: [],
  };
};

/* ─── 中文桥梁额度计算 ─── */
var calcBridgeQuota = function(wordCount, level) {
  // level: 1-4, wordCount: current word count
  var coefficients = { 1: 50, 2: 80, 3: 120, 4: 200 };
  var coeff = coefficients[level] || 50;
  var quota = Math.floor(wordCount / coeff);
  return Math.max(quota, 1); // 保底 1 个
};

/* ═══════════════════════════════════════════════════════
   WritingApp — 主组件
   ═══════════════════════════════════════════════════════ */
export default function WritingApp() {
  // ─── 状态 ───
  var [screen, setScreen] = useState("dashboard");
  var [writingData, setWritingData] = useState(null);
  var [user, setUser] = useState(null);
  var userRef = useRef(null);
  var [showLogin, setShowLogin] = useState(false);
  var [loginEmail, setLoginEmail] = useState('');
  var [loginSent, setLoginSent] = useState(false);
  var [loginLoading, setLoginLoading] = useState(false);
  var [otpCode, setOtpCode] = useState('');
  var [otpError, setOtpError] = useState('');
  var [loginToast, setLoginToast] = useState(null);

  // Dashboard UI 状态
  var [showBrainDetail, setShowBrainDetail] = useState(null);
  var [showPhilosophy, setShowPhilosophy] = useState(false);
  var [showSkillsFramework, setShowSkillsFramework] = useState(false);
  var [userAge, setUserAge] = useState(null);

  // 初始测评状态
  var [assessStep, setAssessStep] = useState(0); // 0-5: tasks, 6: vocab, 7: submitting
  var [assessAnswers, setAssessAnswers] = useState({});
  var [vocabChecked, setVocabChecked] = useState({});
  var [assessResult, setAssessResult] = useState(null);
  var [assessLoading, setAssessLoading] = useState(false);

  // 当前写作会话
  var [selectedCategory, setSelectedCategory] = useState(null);
  var [selectedPrompt, setSelectedPrompt] = useState(null);
  var [ideaChat, setIdeaChat] = useState([]);
  var [ideaInput, setIdeaInput] = useState('');
  var [ideaLoading, setIdeaLoading] = useState(false);
  var [outline, setOutline] = useState(null);
  var [outlineLoading, setOutlineLoading] = useState(false);
  var [essayText, setEssayText] = useState('');
  var [feedback, setFeedback] = useState(null);
  var [feedbackLoading, setFeedbackLoading] = useState(false);
  var [useVocab, setUseVocab] = useState(false);
  var [vocabWords, setVocabWords] = useState([]);

  // ─── 初始化 ───
  useEffect(function() {
    var data = loadWritingData() || getDefaultData();
    setWritingData(data);
    setVocabWords(loadVocabWords());
    try { var savedAge = localStorage.getItem('vocabspark_user_age'); if (savedAge) setUserAge(parseInt(savedAge)); } catch(e) {}
    // 首次用户自动进入测评
    if (!data.assessmentDone) setScreen("assessment");

    supabase.auth.getSession().then(function(result) {
      var u = result?.data?.session?.user || null;
      if (u) { setUser(u); userRef.current = u; }
    });

    var { data: { subscription } } = supabase.auth.onAuthStateChange(async function(event, session) {
      var u = session?.user || null;
      setUser(u); userRef.current = u;
      if (u && event === 'SIGNED_IN') {
        setLoginToast("✅ 登录成功！" + (u.email || ""));
        setTimeout(function() { setLoginToast(null); }, 4000);
        setShowLogin(false); setLoginSent(false); setLoginEmail(''); setOtpCode('');
      }
    });
    return function() { subscription.unsubscribe(); };
  }, []);

  // ─── Auth ───
  var handleLoginEmail = async function() {
    if (!loginEmail.trim()) return;
    setLoginLoading(true);
    try {
      var { error } = await supabase.auth.signInWithOtp({ email: loginEmail.trim(), options: { shouldCreateUser: true, emailRedirectTo: window.location.origin } });
      if (error) throw error;
      setLoginSent(true);
    } catch(e) {
      var msg = (e.message || '').toLowerCase();
      if (msg.includes('rate limit')) alert('📬 邮件发送太频繁了，请等 1~2 分钟后再试...');
      else alert('发送失败：' + e.message);
    } finally { setLoginLoading(false); }
  };

  var handleVerifyOtp = async function() {
    if (!otpCode.trim() || otpCode.trim().length < 6) return;
    setLoginLoading(true); setOtpError('');
    try {
      var { error } = await supabase.auth.verifyOtp({ email: loginEmail.trim(), token: otpCode.trim(), type: 'email' });
      if (error) throw error;
      setShowLogin(false); setLoginSent(false); setLoginEmail(''); setOtpCode('');
    } catch(e) {
      setOtpError('验证失败：' + (e.message === 'Token has expired or is invalid' ? '验证码已过期或不正确，请重新发送' : e.message));
    } finally { setLoginLoading(false); }
  };

  var handleLogout = async function() {
    await supabase.auth.signOut();
    setUser(null); userRef.current = null;
  };

  // ─── 数据操作 ───
  var getData = function() { return writingData || getDefaultData(); };

  var updateAndSave = function(updater) {
    setWritingData(function(prev) {
      var d = updater(prev || getDefaultData());
      saveWritingData(d);
      return d;
    });
  };

  // ─── 灵感对话 ───
  var startIdeaLab = function(category, prompt) {
    setSelectedCategory(category);
    setSelectedPrompt(prompt);
    setIdeaChat([]);
    setIdeaInput('');
    setOutline(null);
    setEssayText('');
    setFeedback(null);
    setScreen("idea-lab");
  };

  var sendIdeaMessage = async function() {
    if (!ideaInput.trim() || ideaLoading) return;
    var userMsg = ideaInput.trim();
    setIdeaInput('');
    var newChat = [...ideaChat, { role: "user", content: userMsg }];
    setIdeaChat(newChat);
    setIdeaLoading(true);

    try {
      var catInfo = CATEGORIES.find(function(c) { return c.key === selectedCategory; });
      var chatHistory = newChat.map(function(m) { return (m.role === "user" ? "学生: " : "教练: ") + m.content; }).join("\n");

      var sys = "你是苏格拉底式的英语写作教练。通过提问引导学生思考，绝不直接写内容或给出完整段落。学生可以用中文回答。"
        + "\n你的目标是帮学生找到想说什么，提炼出核心主题。在对话中自然地给出相关英文关键词（用括号标注）。"
        + "\n每次回复控制在 2-3 句话以内，以一个引导性问题结尾。"
        + "\n当你觉得学生已经思考充分（通常 3-5 轮对话后），在回复末尾加上标记 [READY]。"
        + "\n\n写作类型：" + (catInfo ? catInfo.label : selectedCategory)
        + "\n写作题目：" + selectedPrompt.prompt;

      var text = await callAPIFast(sys, "对话记录：\n" + chatHistory + "\n\n请继续引导学生思考。", { maxTokens: 400 });
      setIdeaChat(function(prev) { return [...prev, { role: "assistant", content: text }]; });
    } catch(e) {
      setIdeaChat(function(prev) { return [...prev, { role: "assistant", content: "抱歉，AI 暂时无法回复，请稍后重试。" }]; });
    } finally {
      setIdeaLoading(false);
    }
  };

  // ─── 生成大纲 ───
  var generateOutline = async function() {
    setOutlineLoading(true);
    setScreen("outline");
    try {
      var chatHistory = ideaChat.map(function(m) { return (m.role === "user" ? "学生: " : "教练: ") + m.content; }).join("\n");
      var sys = "根据以下写作对话记录，生成一个英文写作大纲。输出 JSON 格式：\n"
        + '{"soul":"核心主题/灵魂句(英文,1句)","paragraphs":[{"title":"段落标题","direction":"这段要写什么(中文简述)","keywords":["keyword1","keyword2"]}],"suggestedWords":["建议使用的高级词汇"]}'
        + "\n\n题目：" + selectedPrompt.prompt
        + "\n类型：" + selectedCategory;
      var text = await callAPI(sys, chatHistory, { maxTokens: 800 });
      var parsed = tryJSON(text);
      if (parsed && parsed.soul) {
        setOutline(parsed);
      } else {
        setOutline({ soul: "Unable to generate outline", paragraphs: [{ title: "Main Body", direction: "请根据你的思考自由写作", keywords: [] }], suggestedWords: [] });
      }
    } catch(e) {
      setOutline({ soul: "Unable to generate outline", paragraphs: [{ title: "Main Body", direction: "请根据你的思考自由写作", keywords: [] }], suggestedWords: [] });
    } finally { setOutlineLoading(false); }
  };

  // ─── 提交评改 ───
  var submitForFeedback = async function() {
    if (essayText.trim().split(/\s+/).length < 30) {
      alert("请至少写 30 个英文单词再提交评改");
      return;
    }
    setFeedbackLoading(true);
    setScreen("ai-feedback");
    try {
      var vocabNote = vocabWords.length > 0
        ? "\n学生的词汇表包含：" + vocabWords.slice(0, 20).join(", ") + "。请特别评价这些词的使用。"
        : "";
      var sys = "你是专业的英语写作导师，擅长批改 K12 学生的英语作文。风格鼓励为主，指出问题时温和具体。"
        + "\n\n请从以下维度评分(1-10)并给出具体反馈。输出 JSON：\n"
        + '{"scores":{"grammar":N,"structure":N,"vocabulary":N,"content":N,"coherence":N},'
        + '"overall":N,"summary":"总评(2-3句中文)",'
        + '"annotations":[{"sentence":"原文句子(最多3个)","issue":"问题(中文)","suggestion":"修改建议(英文)","type":"grammar|vocabulary|structure|style"}],'
        + '"vocabHighlights":{"used":["用对的词"],"suggestions":["可以用的词"]},'
        + '"improvements":["建议1","建议2","建议3"],'
        + '"goldenQuotes":["从作文中选出1-2句最有灵性或最漂亮的表达"],'
        + '"brainGains":{"creativity":N,"logic":N,"observation":N,"empathy":N,"critical":N,"expression":N}}'
        + "\nbrainGains 中每个维度 0-3 分，根据文章在该维度的表现打分。";
      var msg = "写作题目：" + (selectedPrompt ? selectedPrompt.prompt : "自由写作")
        + "\n写作类型：" + (selectedCategory || "general")
        + vocabNote
        + "\n\n学生作文：\n" + essayText;
      var text = await callAPI(sys, msg, { maxTokens: 2500 });
      var parsed = tryJSON(text);
      if (parsed && parsed.scores) {
        setFeedback(parsed);
        // 保存作文和更新统计
        updateAndSave(function(prev) {
          var essay = {
            id: Date.now().toString(),
            createdAt: new Date().toISOString(),
            prompt: selectedPrompt,
            category: selectedCategory,
            ideaLabChat: ideaChat,
            outline: outline,
            content: essayText,
            wordCount: essayText.trim().split(/\s+/).length,
            feedback: parsed,
            brainGains: parsed.brainGains || {},
            status: "reviewed",
          };
          var essays = [essay, ...(prev.essays || [])];
          var bs = { ...(prev.brainStats || {}) };
          if (parsed.brainGains) {
            BRAIN_DIMS.forEach(function(d) { bs[d.key] = (bs[d.key] || 0) + (parsed.brainGains[d.key] || 0); });
          }
          var totalEssays = essays.length;
          var totalWords = essays.reduce(function(sum, e) { return sum + (e.wordCount || 0); }, 0);
          var scores = essays.filter(function(e) { return e.feedback && e.feedback.overall; }).map(function(e) { return e.feedback.overall; });
          var avgScore = scores.length > 0 ? Math.round(scores.reduce(function(a, b) { return a + b; }, 0) / scores.length * 10) / 10 : 0;
          var bestScore = scores.length > 0 ? Math.max.apply(null, scores) : 0;
          // 金句
          var gq = [...(prev.goldenQuotes || [])];
          if (parsed.goldenQuotes) {
            parsed.goldenQuotes.forEach(function(q) {
              gq.push({ text: q, essayId: essay.id, date: essay.createdAt, theme: selectedCategory });
            });
          }
          return { ...prev, essays: essays, brainStats: bs, goldenQuotes: gq, stats: { totalEssays: totalEssays, totalWords: totalWords, avgScore: avgScore, bestScore: bestScore, streak: prev.stats.streak || 0, lastWritingDate: new Date().toISOString() } };
        });
      } else {
        setFeedback({ scores: { grammar: 5, structure: 5, vocabulary: 5, content: 5, coherence: 5 }, overall: 5, summary: "AI 评改暂时不可用，请稍后重试。", annotations: [], improvements: [], goldenQuotes: [], brainGains: {} });
      }
    } catch(e) {
      setFeedback({ scores: { grammar: 5, structure: 5, vocabulary: 5, content: 5, coherence: 5 }, overall: 5, summary: "评改请求失败：" + e.message, annotations: [], improvements: [], goldenQuotes: [], brainGains: {} });
    } finally { setFeedbackLoading(false); }
  };

  // ─── 初始测评提交 ───
  var submitAssessment = async function() {
    setAssessLoading(true);
    setAssessStep(7);
    try {
      var answersText = ASSESSMENT_TASKS.map(function(t) {
        return t.title + " (" + t.dim + "): " + (assessAnswers[t.dim] || "(empty)");
      }).join("\n\n");
      var vocabKnown = Object.keys(vocabChecked).filter(function(w) { return vocabChecked[w]; });
      var sys = "你是英语写作能力评估专家。根据以下学生的 6 道简答测试（允许中英混合），为每个维度打分 1-10。"
        + "\n维度：creativity, logic, observation, empathy, critical, expression"
        + "\n评分标准：1-3 基础，4-6 中等，7-8 良好，9-10 优秀"
        + "\n考虑因素：英文使用比例、表达精准度、思维深度、细节丰富度"
        + "\n\n同时根据词汇认识情况评估词汇水平（vocabLevel 1-4，1=基础 4=高级）。"
        + "\n学生认识的词：" + (vocabKnown.length > 0 ? vocabKnown.join(", ") : "none")
        + "\n\n输出 JSON："
        + '{"scores":{"creativity":N,"logic":N,"observation":N,"empathy":N,"critical":N,"expression":N},"vocabLevel":N,"summary":"一句话总评(中文)","strengths":["强项1"],"tips":["建议1"]}';
      var text = await callAPI(sys, "学生测试答案：\n\n" + answersText, { maxTokens: 600 });
      var parsed = tryJSON(text);
      if (parsed && parsed.scores) {
        setAssessResult(parsed);
        // 将初始分数转换为 brainStats 基础值
        updateAndSave(function(prev) {
          var bs = {};
          BRAIN_DIMS.forEach(function(dim) { bs[dim.key] = parsed.scores[dim.key] || 3; });
          return { ...prev, brainStats: bs, assessmentDone: true, assessmentResult: parsed };
        });
      } else {
        var fallback = { scores: { creativity: 5, logic: 5, observation: 5, empathy: 5, critical: 5, expression: 5 }, vocabLevel: 2, summary: "测评完成，已生成初始分数。", strengths: [], tips: [] };
        setAssessResult(fallback);
        updateAndSave(function(prev) { return { ...prev, brainStats: fallback.scores, assessmentDone: true, assessmentResult: fallback }; });
      }
    } catch(e) {
      var fallback = { scores: { creativity: 5, logic: 5, observation: 5, empathy: 5, critical: 5, expression: 5 }, vocabLevel: 2, summary: "AI 评估暂时不可用，已使用默认初始分数。", strengths: [], tips: [] };
      setAssessResult(fallback);
      updateAndSave(function(prev) { return { ...prev, brainStats: fallback.scores, assessmentDone: true, assessmentResult: fallback }; });
    } finally { setAssessLoading(false); }
  };

  // ─── 中文桥梁处理 ───
  var bridgeCount = (essayText.match(/【[^】]+】/g) || []).length;
  var wordCount = essayText.trim() ? essayText.trim().split(/\s+/).length : 0;
  var bridgeQuota = calcBridgeQuota(Math.max(wordCount, 150), 1); // TODO: use actual level

  // ─── 渲染 ───
  var d = getData();

  return (
    <div style={S.root}>
      <Head>
        <title>Writing — Know U. Learning</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: globalCSS }} />

      <BrandNavBar activeTab="writing" stats={d.stats} />

      <div style={S.container}>

        {/* ═══ LOGIN TOAST ═══ */}
        {loginToast && (
          <div style={{ position:"fixed", top:12, left:"50%", transform:"translateX(-50%)", background:C.green, color:"#fff", padding:"10px 20px", borderRadius:10, fontSize:14, fontWeight:600, zIndex:9999, animation:"fadeUp 0.3s ease-out" }}>
            {loginToast}
          </div>
        )}

        {/* ═══ ASSESSMENT ═══ */}
        {screen === "assessment" && (
          <div style={{ animation:"fadeUp 0.3s ease-out" }}>
            {/* 标题和说明 */}
            {assessStep <= 6 && !assessResult && (
              <div>
                <div style={{ textAlign:"center", marginBottom:16 }}>
                  <BrandSparkIcon size={48} marginBottom={8} />
                  <div style={{ fontSize:18, fontWeight:800, marginBottom:4 }}>写作能力初始测评</div>
                  <div style={{ fontSize:13, color:C.textSec, lineHeight:1.6, maxWidth:340, margin:"0 auto" }}>
                    {assessStep < 6 ? "6 道小题，每题 1-2 句话就够了。可以中英混合，尽量用英文。不会的词用中文没关系！" : "最后一步：勾选你认识的单词"}
                  </div>
                </div>

                {/* 进度条 */}
                <div style={{ display:"flex", gap:3, marginBottom:16 }}>
                  {ASSESSMENT_TASKS.map(function(_, i) {
                    return <div key={i} style={{ flex:1, height:4, borderRadius:2, background: i < assessStep ? C.accent : i === assessStep ? C.gold : C.border, transition:"background 0.3s" }} />;
                  })}
                  <div style={{ flex:1, height:4, borderRadius:2, background: assessStep >= 6 ? C.accent : C.border, transition:"background 0.3s" }} />
                </div>

                {/* 当前题目 */}
                {assessStep < 6 && (function() {
                  var task = ASSESSMENT_TASKS[assessStep];
                  return (
                    <div style={S.card}>
                      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
                        <span style={{ fontSize:20 }}>{task.icon}</span>
                        <div>
                          <div style={{ fontSize:14, fontWeight:700 }}>{task.title}</div>
                          <div style={{ fontSize:11, color:C.textSec }}>第 {assessStep + 1} / 6 题</div>
                        </div>
                      </div>
                      <div style={{ fontSize:14, fontWeight:600, lineHeight:1.6, marginBottom:6 }}>{task.instruction}</div>
                      <div style={{ fontSize:12, color:C.teal, marginBottom:10 }}>💡 {task.hint}</div>
                      <textarea
                        value={assessAnswers[task.dim] || ''}
                        onChange={function(e) { setAssessAnswers(function(prev) { var n = {...prev}; n[task.dim] = e.target.value; return n; }); }}
                        placeholder={task.placeholder}
                        style={{ ...S.textarea, minHeight:80, fontSize:14 }}
                      />
                      <div style={{ display:"flex", justifyContent:"space-between", marginTop:10 }}>
                        <button onClick={function() { if (assessStep > 0) setAssessStep(assessStep - 1); }} disabled={assessStep === 0} style={S.ghostBtn}>← 上一题</button>
                        <button onClick={function() { setAssessStep(assessStep + 1); }}
                          disabled={!(assessAnswers[task.dim] || '').trim()}
                          style={{ ...S.primaryBtn, opacity: (assessAnswers[task.dim] || '').trim() ? 1 : 0.5 }}>
                          下一题 →
                        </button>
                      </div>
                    </div>
                  );
                })()}

                {/* 词汇检查 */}
                {assessStep === 6 && (
                  <div style={S.card}>
                    <div style={{ fontSize:14, fontWeight:700, marginBottom:4 }}>📚 词汇水平快速检测</div>
                    <div style={{ fontSize:12, color:C.textSec, marginBottom:12 }}>勾选你认识的单词（知道意思就行，不需要完全掌握）</div>
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
                      {VOCAB_CHECK_WORDS.map(function(w) {
                        var checked = vocabChecked[w.word] || false;
                        return (
                          <button key={w.word} onClick={function() { setVocabChecked(function(prev) { var n = {...prev}; n[w.word] = !checked; return n; }); }}
                            style={{ display:"flex", alignItems:"center", gap:8, padding:"10px 12px", background: checked ? C.accentLight : C.bg, border:"1.5px solid " + (checked ? C.accent : C.border), borderRadius:8, cursor:"pointer", fontFamily:FONT, fontSize:14, fontWeight: checked ? 600 : 400, color: checked ? C.accent : C.text, textAlign:"left" }}>
                            <span style={{ width:20, height:20, borderRadius:4, border:"2px solid " + (checked ? C.accent : C.border), background: checked ? C.accent : "transparent", display:"inline-flex", alignItems:"center", justifyContent:"center", color:"#fff", fontSize:12, flexShrink:0 }}>
                              {checked ? "✓" : ""}
                            </span>
                            {w.word}
                          </button>
                        );
                      })}
                    </div>
                    <div style={{ display:"flex", justifyContent:"space-between", marginTop:14 }}>
                      <button onClick={function() { setAssessStep(5); }} style={S.ghostBtn}>← 上一题</button>
                      <button onClick={submitAssessment} disabled={assessLoading} style={S.primaryBtn}>
                        📊 生成我的脑力图
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* AI 评估中 */}
            {assessStep === 7 && assessLoading && (
              <div style={{ ...S.loadingBox, flexDirection:"column", padding:"60px 20px" }}>
                <span style={{ ...S.spinner, width:32, height:32 }} />
                <div style={{ marginTop:12 }}>AI 正在分析你的写作能力...</div>
              </div>
            )}

            {/* 测评结果 */}
            {assessResult && (
              <div style={{ animation:"fadeUp 0.3s ease-out" }}>
                <div style={{ textAlign:"center", marginBottom:16 }}>
                  <div style={{ fontSize:20, fontWeight:800, marginBottom:4 }}>🎉 测评完成！</div>
                  <div style={{ fontSize:13, color:C.textSec }}>这是你的初始写作脑力图</div>
                </div>

                <div style={{ ...S.card, textAlign:"center", padding:"20px 16px" }}>
                  <RadarChart brainStats={assessResult.scores} benchmarkStats={userAge ? AGE_BENCHMARKS[getAgeGroup(userAge)] : null} size={220} />
                  {userAge && (
                    <div style={{ display:"flex", justifyContent:"center", gap:16, marginTop:6, fontSize:10, color:C.textSec }}>
                      <span><span style={{ display:"inline-block", width:14, height:2, background:C.accent, verticalAlign:"middle", marginRight:4 }} />我的水平</span>
                      <span><span style={{ display:"inline-block", width:14, height:0, borderTop:"2px dashed " + C.teal, verticalAlign:"middle", marginRight:4 }} />同龄平均</span>
                    </div>
                  )}
                </div>

                {/* 各维度分数 */}
                <div style={S.card}>
                  {BRAIN_DIMS.map(function(dim) {
                    var val = assessResult.scores[dim.key] || 0;
                    return (
                      <div key={dim.key} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                        <span style={{ width:70, fontSize:12, fontWeight:600 }}>{dim.icon + " " + dim.label}</span>
                        <div style={{ flex:1, height:8, background:C.border, borderRadius:4 }}>
                          <div style={{ width: (val * 10) + "%", height:"100%", background: val >= 7 ? C.green : val >= 5 ? C.gold : C.accent, borderRadius:4, transition:"width 0.5s ease" }} />
                        </div>
                        <span style={{ width:24, fontSize:13, fontWeight:700, textAlign:"right" }}>{val}</span>
                      </div>
                    );
                  })}
                </div>

                {/* 总评 */}
                <div style={S.card}>
                  <div style={{ fontSize:14, lineHeight:1.6, marginBottom:8 }}>{assessResult.summary}</div>
                  {assessResult.strengths && assessResult.strengths.length > 0 && (
                    <div style={{ marginBottom:6 }}>
                      <span style={{ fontSize:12, fontWeight:600, color:C.green }}>💪 强项：</span>
                      <span style={{ fontSize:12, color:C.text }}>{assessResult.strengths.join("、")}</span>
                    </div>
                  )}
                  {assessResult.tips && assessResult.tips.length > 0 && (
                    <div>
                      <span style={{ fontSize:12, fontWeight:600, color:C.teal }}>🎯 建议：</span>
                      <span style={{ fontSize:12, color:C.text }}>{assessResult.tips.join("、")}</span>
                    </div>
                  )}
                </div>

                {/* 年龄输入（如果还没有） */}
                {!userAge && (
                  <div style={{ ...S.card, display:"flex", alignItems:"center", justifyContent:"center", gap:8, padding:"14px" }}>
                    <span style={{ fontSize:13, color:C.textSec }}>输入年龄，解锁同龄对比：</span>
                    <input type="number" min="6" max="25" placeholder="年龄"
                      onChange={function(e) { var v = parseInt(e.target.value); if (v >= 6 && v <= 25) { setUserAge(v); try { localStorage.setItem('vocabspark_user_age', String(v)); } catch(ex) {} } }}
                      style={{ width:52, padding:"4px 8px", borderRadius:6, border:"1px solid " + C.border, fontFamily:FONT, fontSize:13, textAlign:"center" }} />
                    <span style={{ fontSize:13, color:C.textSec }}>岁</span>
                  </div>
                )}

                <button onClick={function() { setScreen("dashboard"); }} style={{ ...S.bigBtn, marginBottom:14 }}>
                  🚀 开始写作之旅
                </button>
                <div style={{ textAlign:"center", fontSize:11, color:C.textSec, lineHeight:1.5 }}>
                  每次写作都会更新你的脑力图，初始分数只是起点
                </div>
              </div>
            )}
          </div>
        )}

        {/* ═══ DASHBOARD ═══ */}
        {screen === "dashboard" && (function() {
          var benchmarks = AGE_BENCHMARKS[getAgeGroup(userAge)] || null;
          return (
          <div style={{ animation:"fadeUp 0.3s ease-out" }}>

            {/* 成长理念概要 */}
            <div style={{ ...S.card, padding:"16px 18px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
                <div style={{ fontSize:15, fontWeight:700 }}>✨ 为什么用 Know U. 练写作？</div>
                <button onClick={function() { setShowPhilosophy(!showPhilosophy); }} style={{ ...S.smallBtn, fontSize:11, padding:"4px 10px" }}>
                  {showPhilosophy ? "收起" : "了解更多"}
                </button>
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {PHILOSOPHY_ITEMS.slice(0, showPhilosophy ? PHILOSOPHY_ITEMS.length : 3).map(function(p, i) {
                  return (
                    <div key={i} style={{ flex: showPhilosophy ? "1 1 100%" : "1 1 30%", minWidth: showPhilosophy ? "100%" : 0, background:C.bg, borderRadius:10, padding: showPhilosophy ? "12px 14px" : "8px 10px", border:"1px solid " + C.border }}>
                      <div style={{ fontSize: showPhilosophy ? 14 : 12, fontWeight:600, marginBottom: showPhilosophy ? 4 : 2 }}>{p.icon + " " + p.title}</div>
                      <div style={{ fontSize:11, color:C.textSec, lineHeight:1.5 }}>{showPhilosophy ? p.detail : p.summary}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 脑力雷达图 */}
            <div style={{ ...S.card, textAlign:"center", padding:"20px 16px" }}>
              <div style={{ fontSize:16, fontWeight:700, marginBottom:4 }}>🧠 写作脑力图</div>
              <div style={{ fontSize:12, color:C.textSec, marginBottom:4 }}>每种文体锻炼大脑不同区域，写作是最全面的认知训练</div>

              {/* 年龄输入 */}
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:6, marginBottom:10, fontSize:12 }}>
                <span style={{ color:C.textSec }}>我的年龄：</span>
                <input
                  type="number" min="6" max="25" value={userAge || ''} placeholder="输入"
                  onChange={function(e) {
                    var v = parseInt(e.target.value);
                    if (v >= 6 && v <= 25) { setUserAge(v); try { localStorage.setItem('vocabspark_user_age', String(v)); } catch(ex) {} }
                    else if (!e.target.value) { setUserAge(null); try { localStorage.removeItem('vocabspark_user_age'); } catch(ex) {} }
                  }}
                  style={{ width:52, padding:"4px 8px", borderRadius:6, border:"1px solid " + C.border, fontFamily:FONT, fontSize:13, textAlign:"center" }}
                />
                <span style={{ color:C.textSec }}>岁</span>
                {userAge && <span style={{ color:C.teal, fontSize:11 }}>（虚线 = {getAgeGroup(userAge)} 岁同龄平均）</span>}
              </div>

              <RadarChart brainStats={d.brainStats || {}} benchmarkStats={benchmarks} size={220} />

              {/* 图例 */}
              {userAge && (
                <div style={{ display:"flex", justifyContent:"center", gap:16, marginTop:6, fontSize:10, color:C.textSec }}>
                  <span><span style={{ display:"inline-block", width:14, height:2, background:C.accent, verticalAlign:"middle", marginRight:4 }} />我的水平</span>
                  <span><span style={{ display:"inline-block", width:14, height:0, borderTop:"2px dashed " + C.teal, verticalAlign:"middle", marginRight:4 }} />同龄平均</span>
                </div>
              )}

              {/* 能力标签（点击展开脑科学说明） */}
              <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:6, marginTop:12 }}>
                {BRAIN_DIMS.map(function(dim) {
                  var val = (d.brainStats || {})[dim.key] || 0;
                  var isOpen = showBrainDetail === dim.key;
                  return (
                    <button key={dim.key} onClick={function() { setShowBrainDetail(isOpen ? null : dim.key); }}
                      style={{ fontSize:11, color: isOpen ? C.accent : C.textSec, background: isOpen ? C.accentLight : C.bg, padding:"3px 8px", borderRadius:12, border:"1px solid " + (isOpen ? C.accent + "44" : C.border), cursor:"pointer", fontFamily:FONT, fontWeight: isOpen ? 700 : 400 }}>
                      {dim.icon + " " + dim.label + " " + val}
                    </button>
                  );
                })}
              </div>

              {/* 脑科学详情面板 */}
              {showBrainDetail && (function() {
                var dim = BRAIN_DIMS.find(function(d) { return d.key === showBrainDetail; });
                if (!dim) return null;
                var val = (d.brainStats || {})[dim.key] || 0;
                var bench = benchmarks ? (benchmarks[dim.key] || 0) : null;
                return (
                  <div style={{ marginTop:10, background:C.bg, borderRadius:10, padding:"14px 16px", textAlign:"left", border:"1px solid " + C.border, animation:"fadeUp 0.2s ease-out" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}>
                      <div style={{ fontSize:14, fontWeight:700 }}>{dim.icon + " " + dim.label + " — " + dim.brain}</div>
                      <span style={{ fontSize:11, color:C.teal, fontWeight:600 }}>{dim.brainEn}</span>
                    </div>
                    <div style={{ fontSize:12, color:C.text, lineHeight:1.7, marginBottom:8 }}>{dim.science}</div>
                    <div style={{ display:"flex", gap:12 }}>
                      <div style={{ background:C.accentLight, borderRadius:8, padding:"6px 12px", fontSize:12 }}>
                        <span style={{ fontWeight:700, color:C.accent }}>{val}</span> <span style={{ color:C.textSec }}>我的点数</span>
                      </div>
                      {bench != null && (
                        <div style={{ background:C.tealLight, borderRadius:8, padding:"6px 12px", fontSize:12 }}>
                          <span style={{ fontWeight:700, color:C.teal }}>{bench}</span> <span style={{ color:C.textSec }}>同龄平均</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* 统计 */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:8, marginBottom:10 }}>
              <div style={S.statCard}><div style={S.statNum}>{d.stats.totalEssays || 0}</div><div style={S.statLabel}>总篇数</div></div>
              <div style={S.statCard}><div style={S.statNum}>{d.stats.totalWords || 0}</div><div style={S.statLabel}>总词数</div></div>
              <div style={S.statCard}><div style={{...S.statNum, color:C.gold}}>{d.stats.avgScore || "-"}</div><div style={S.statLabel}>平均分</div></div>
            </div>

            {/* 开始写作 */}
            <button onClick={function() { setScreen("prompt-select"); }} style={{ ...S.bigBtn, marginBottom:14 }}>
              ✍️ 开始写作
            </button>

            {/* 写作技巧框架 */}
            <div style={{ ...S.card, padding:"16px 18px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                <div style={{ fontSize:14, fontWeight:700 }}>📖 写作技巧框架</div>
                <button onClick={function() { setShowSkillsFramework(!showSkillsFramework); }} style={{ ...S.smallBtn, fontSize:11, padding:"4px 10px" }}>
                  {showSkillsFramework ? "收起" : "展开"}
                </button>
              </div>
              <div style={{ fontSize:12, color:C.textSec, lineHeight:1.5, marginBottom: showSkillsFramework ? 10 : 0 }}>
                我们会在灵感对话中自然地教你这些写作方法——不是枯燥的规则，而是在你需要的时候给你恰当的指导。
              </div>
              {showSkillsFramework && (
                <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                  {WRITING_SKILLS_FRAMEWORK.map(function(skill, i) {
                    return (
                      <div key={i} style={{ background:C.bg, borderRadius:10, padding:"12px 14px", border:"1px solid " + C.border }}>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:4 }}>
                          <div style={{ fontSize:13, fontWeight:700 }}>{skill.icon + " " + skill.title}</div>
                          <span style={{ fontSize:10, color:C.teal, fontWeight:600 }}>{skill.titleEn}</span>
                        </div>
                        <div style={{ fontSize:12, color:C.textSec, marginBottom:6, lineHeight:1.5 }}>{skill.desc}</div>
                        <div style={{ display:"flex", flexWrap:"wrap", gap:4 }}>
                          {skill.skills.map(function(s, j) {
                            return <span key={j} style={{ fontSize:10, background:C.tealLight, color:C.teal, padding:"2px 8px", borderRadius:10, fontWeight:600 }}>{s}</span>;
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 最近作文 */}
            {d.essays && d.essays.length > 0 && (
              <div style={S.card}>
                <div style={{ fontSize:14, fontWeight:700, marginBottom:10 }}>📝 最近作文</div>
                {d.essays.slice(0, 5).map(function(essay) {
                  return (
                    <div key={essay.id} style={{ padding:"10px 0", borderBottom:"1px solid " + C.border, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                      <div>
                        <div style={{ fontSize:13, fontWeight:600 }}>{essay.prompt ? essay.prompt.title : "自由写作"}</div>
                        <div style={{ fontSize:11, color:C.textSec }}>{new Date(essay.createdAt).toLocaleDateString()} · {essay.wordCount} 词</div>
                      </div>
                      {essay.feedback && <span style={{ fontSize:18, fontWeight:800, color:C.accent }}>{essay.feedback.overall}</span>}
                    </div>
                  );
                })}
              </div>
            )}

            {/* 登录提示 */}
            {!user && (
              <div style={{ ...S.card, textAlign:"center" }}>
                <div style={{ fontSize:13, color:C.textSec, marginBottom:10 }}>登录后数据自动云同步，换设备不丢失</div>
                <button onClick={function() { setShowLogin(true); }} style={S.tealBtn}>📧 登录 / 注册</button>
              </div>
            )}
          </div>
          );
        })()}

        {/* ═══ PROMPT SELECT ═══ */}
        {screen === "prompt-select" && (
          <div style={{ animation:"fadeUp 0.3s ease-out" }}>
            <div style={S.topBar}>
              <button onClick={function() { setScreen("dashboard"); }} style={S.backBtn}>←</button>
              <div style={{ fontSize:15, fontWeight:700 }}>选择写作主题</div>
            </div>

            {/* 融入词汇开关 */}
            {vocabWords.length > 0 && (
              <div style={{ ...S.card, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 16px" }}>
                <div>
                  <div style={{ fontSize:13, fontWeight:600 }}>📚 融入词汇练习</div>
                  <div style={{ fontSize:11, color:C.textSec }}>在写作中使用你正在学的词汇（{vocabWords.length} 词可用）</div>
                </div>
                <button onClick={function() { setUseVocab(!useVocab); }} style={{ width:44, height:24, borderRadius:12, border:"none", background: useVocab ? C.accent : C.border, cursor:"pointer", position:"relative", transition:"background 0.2s" }}>
                  <div style={{ width:20, height:20, borderRadius:10, background:"#fff", position:"absolute", top:2, left: useVocab ? 22 : 2, transition:"left 0.2s", boxShadow:"0 1px 3px rgba(0,0,0,0.2)" }} />
                </button>
              </div>
            )}

            {/* 文体分类 */}
            {CATEGORIES.map(function(cat) {
              var prompts = WRITING_PROMPTS[cat.key] || [];
              return (
                <div key={cat.key} style={{ marginBottom:14 }}>
                  <div style={{ ...S.card, padding:"16px" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}>
                      <div style={{ fontSize:14, fontWeight:700 }}>{cat.label}</div>
                      <span style={{ fontSize:10, color:C.teal, background:C.tealLight, padding:"2px 8px", borderRadius:10, fontWeight:600 }}>{cat.dims}</span>
                    </div>
                    <div style={{ fontSize:12, color:C.textSec, marginBottom:10 }}>{cat.desc}</div>
                    {prompts.map(function(p, i) {
                      return (
                        <button key={i} onClick={function() { startIdeaLab(cat.key, p); }} style={{ display:"block", width:"100%", textAlign:"left", padding:"10px 12px", marginBottom:6, background:C.bg, border:"1px solid " + C.border, borderRadius:8, cursor:"pointer", fontFamily:FONT, fontSize:13 }}>
                          <div style={{ fontWeight:600, marginBottom:2 }}>{p.title}</div>
                          <div style={{ fontSize:11, color:C.textSec, lineHeight:1.4 }}>{p.prompt.slice(0, 80)}...</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ═══ IDEA LAB ═══ */}
        {screen === "idea-lab" && (
          <div style={{ animation:"fadeUp 0.3s ease-out" }}>
            <div style={S.topBar}>
              <button onClick={function() { setScreen("prompt-select"); }} style={S.backBtn}>←</button>
              <div style={{ fontSize:15, fontWeight:700 }}>💡 灵感对话</div>
            </div>

            {/* 题目展示 */}
            <div style={{ ...S.card, background:C.accentLight, borderColor:C.accent + "33" }}>
              <div style={{ fontSize:12, color:C.accent, fontWeight:600, marginBottom:4 }}>写作题目</div>
              <div style={{ fontSize:14, fontWeight:600, lineHeight:1.5 }}>{selectedPrompt && selectedPrompt.prompt}</div>
              {selectedPrompt && selectedPrompt.hints && (
                <div style={{ marginTop:8, display:"flex", flexWrap:"wrap", gap:4 }}>
                  {selectedPrompt.hints.map(function(h, i) {
                    return <span key={i} style={{ fontSize:10, color:C.textSec, background:"rgba(255,255,255,0.7)", padding:"2px 8px", borderRadius:10 }}>{h}</span>;
                  })}
                </div>
              )}
            </div>

            <div style={{ fontSize:12, color:C.textSec, textAlign:"center", marginBottom:10, lineHeight:1.5 }}>
              用中文或英文都可以回答，AI 教练会引导你一步步找到写作灵感
            </div>

            {/* 对话区域 */}
            <div style={{ marginBottom:10 }}>
              {ideaChat.length === 0 && !ideaLoading && (
                <div style={{ ...S.card, textAlign:"center", color:C.textSec, fontSize:13, padding:"30px 20px" }}>
                  输入任何想法开始对话…<br />比如"我想写关于我的猫"或"I want to write about friendship"
                </div>
              )}
              {ideaChat.map(function(msg, i) {
                var isUser = msg.role === "user";
                return (
                  <div key={i} style={{ display:"flex", justifyContent: isUser ? "flex-end" : "flex-start", marginBottom:8 }}>
                    <div style={{
                      maxWidth: "80%",
                      padding: "10px 14px",
                      borderRadius: isUser ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                      background: isUser ? C.accent : C.card,
                      color: isUser ? "#fff" : C.text,
                      fontSize: 13,
                      lineHeight: 1.6,
                      border: isUser ? "none" : "1px solid " + C.border,
                      boxShadow: isUser ? "none" : C.shadow,
                    }}>
                      {msg.content}
                    </div>
                  </div>
                );
              })}
              {ideaLoading && (
                <div style={{ display:"flex", justifyContent:"flex-start", marginBottom:8 }}>
                  <div style={{ padding:"10px 14px", borderRadius:"14px 14px 14px 4px", background:C.card, border:"1px solid " + C.border, fontSize:13, color:C.textSec }}>
                    <span style={S.spinner} /> 思考中...
                  </div>
                </div>
              )}
            </div>

            {/* 输入框 */}
            <div style={{ display:"flex", gap:8, position:"sticky", bottom:16, background:C.bg, padding:"8px 0" }}>
              <input
                value={ideaInput}
                onChange={function(e) { setIdeaInput(e.target.value); }}
                onKeyDown={function(e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendIdeaMessage(); } }}
                placeholder="说说你的想法..."
                style={{ flex:1, padding:"10px 14px", borderRadius:10, border:"1px solid " + C.border, fontFamily:FONT, fontSize:14, background:C.card }}
              />
              <button onClick={sendIdeaMessage} disabled={ideaLoading || !ideaInput.trim()} style={{ ...S.primaryBtn, padding:"10px 16px" }}>发送</button>
            </div>

            {/* 生成大纲按钮 */}
            {ideaChat.length >= 4 && (
              <button onClick={generateOutline} style={{ ...S.bigBtn, background:C.teal, marginTop:8 }}>
                📋 根据对话生成写作大纲
              </button>
            )}
          </div>
        )}

        {/* ═══ OUTLINE ═══ */}
        {screen === "outline" && (
          <div style={{ animation:"fadeUp 0.3s ease-out" }}>
            <div style={S.topBar}>
              <button onClick={function() { setScreen("idea-lab"); }} style={S.backBtn}>←</button>
              <div style={{ fontSize:15, fontWeight:700 }}>📋 写作大纲</div>
            </div>

            {outlineLoading ? (
              <div style={S.loadingBox}><span style={S.spinner} /> 正在生成大纲...</div>
            ) : outline ? (
              <div>
                {/* 灵魂句 */}
                <div style={{ ...S.card, background:C.accentLight, borderColor:C.accent + "33" }}>
                  <div style={{ fontSize:12, color:C.accent, fontWeight:600, marginBottom:4 }}>💡 核心主题 (Soul)</div>
                  <div style={{ fontSize:15, fontWeight:700, lineHeight:1.5, fontStyle:"italic" }}>{outline.soul}</div>
                </div>

                {/* 段落结构 */}
                {outline.paragraphs && outline.paragraphs.map(function(para, i) {
                  return (
                    <div key={i} style={{ ...S.card, padding:"14px 16px" }}>
                      <div style={{ fontSize:13, fontWeight:700, color:C.teal, marginBottom:4 }}>
                        {i === 0 ? "🎬 Opening" : i === outline.paragraphs.length - 1 ? "🎯 Ending" : "📝 Body " + i}
                        {" — " + para.title}
                      </div>
                      <div style={{ fontSize:12, color:C.textSec, marginBottom:6 }}>{para.direction}</div>
                      {para.keywords && para.keywords.length > 0 && (
                        <div style={{ display:"flex", flexWrap:"wrap", gap:4 }}>
                          {para.keywords.map(function(kw, j) {
                            return <span key={j} style={{ fontSize:11, background:C.tealLight, color:C.teal, padding:"2px 8px", borderRadius:10, fontWeight:600 }}>{kw}</span>;
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* 建议词汇 */}
                {outline.suggestedWords && outline.suggestedWords.length > 0 && (
                  <div style={{ ...S.card, padding:"14px 16px" }}>
                    <div style={{ fontSize:13, fontWeight:700, marginBottom:6 }}>📚 建议使用的词汇</div>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                      {outline.suggestedWords.map(function(w, i) {
                        return <span key={i} style={{ ...S.presetBtn, fontSize:12 }}>{w}</span>;
                      })}
                    </div>
                  </div>
                )}

                <button onClick={function() { setScreen("writing-editor"); }} style={S.bigBtn}>
                  ✍️ 开始写作
                </button>
              </div>
            ) : null}
          </div>
        )}

        {/* ═══ WRITING EDITOR ═══ */}
        {screen === "writing-editor" && (
          <div style={{ animation:"fadeUp 0.3s ease-out" }}>
            <div style={S.topBar}>
              <button onClick={function() { setScreen(outline ? "outline" : "idea-lab"); }} style={S.backBtn}>←</button>
              <div style={{ fontSize:15, fontWeight:700 }}>✍️ 写作</div>
              <div style={{ fontSize:12, color:C.textSec, marginLeft:"auto" }}>
                {wordCount} 词
                {selectedPrompt && selectedPrompt.wordCount && (" / " + selectedPrompt.wordCount.min + "-" + selectedPrompt.wordCount.max)}
              </div>
            </div>

            {/* 大纲提示 */}
            {outline && (
              <div style={{ background:C.tealLight, borderRadius:10, padding:"10px 14px", marginBottom:10, fontSize:12, color:C.teal, border:"1px solid " + C.teal + "22" }}>
                <strong>💡 {outline.soul}</strong>
                <div style={{ marginTop:4, color:C.textSec }}>
                  {outline.paragraphs && outline.paragraphs.map(function(p) { return p.title; }).join(" → ")}
                </div>
              </div>
            )}

            {/* 中文桥梁提示 */}
            <div style={{ fontSize:11, color:C.textSec, marginBottom:8, display:"flex", justifyContent:"space-between" }}>
              <span>💡 不会的词用【中文】标记，AI 会帮你翻译</span>
              <span style={{ color: bridgeCount > bridgeQuota ? C.red : C.teal, fontWeight:600 }}>
                桥梁 {bridgeCount}/{bridgeQuota}
              </span>
            </div>

            {/* 写作区域 */}
            <textarea
              value={essayText}
              onChange={function(e) { setEssayText(e.target.value); }}
              placeholder={"Start writing here...\n不会的词可以用【中文】标记，例如：The caterpillar started to 【结茧】..."}
              style={{ ...S.textarea, minHeight:300, fontSize:15, lineHeight:1.8 }}
            />

            {/* 提交按钮 */}
            <button
              onClick={submitForFeedback}
              disabled={wordCount < 30 || feedbackLoading}
              style={{ ...S.bigBtn, opacity: wordCount < 30 ? 0.5 : 1 }}
            >
              {feedbackLoading ? "评改中..." : "📤 提交 AI 评改"}
            </button>
            {wordCount < 30 && wordCount > 0 && (
              <div style={{ fontSize:11, color:C.textSec, textAlign:"center", marginTop:4 }}>还需要写 {30 - wordCount} 个词才能提交</div>
            )}
          </div>
        )}

        {/* ═══ AI FEEDBACK ═══ */}
        {screen === "ai-feedback" && (
          <div style={{ animation:"fadeUp 0.3s ease-out" }}>
            <div style={S.topBar}>
              <button onClick={function() { setScreen("dashboard"); }} style={S.backBtn}>← 首页</button>
              <div style={{ fontSize:15, fontWeight:700 }}>📊 AI 评改报告</div>
            </div>

            {feedbackLoading ? (
              <div style={{ ...S.loadingBox, flexDirection:"column", padding:"60px 20px" }}>
                <span style={{ ...S.spinner, width:32, height:32 }} />
                <div style={{ marginTop:12 }}>AI 正在仔细批改你的作文...</div>
              </div>
            ) : feedback ? (
              <div>
                {/* 总分 */}
                <div style={{ ...S.card, textAlign:"center", padding:"24px" }}>
                  <div style={{ fontSize:48, fontWeight:800, color:C.accent }}>{feedback.overall}</div>
                  <div style={{ fontSize:12, color:C.textSec }}>/ 10</div>
                  <div style={{ fontSize:14, color:C.text, marginTop:8, lineHeight:1.6 }}>{feedback.summary}</div>
                </div>

                {/* 五维评分 */}
                <div style={S.card}>
                  <div style={{ fontSize:14, fontWeight:700, marginBottom:10 }}>📊 评分详情</div>
                  {feedback.scores && Object.entries(feedback.scores).map(function(entry) {
                    var key = entry[0], val = entry[1];
                    var labels = { grammar:"语法", structure:"结构", vocabulary:"词汇", content:"内容", coherence:"连贯性" };
                    return (
                      <div key={key} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:8 }}>
                        <div style={{ width:50, fontSize:12, color:C.textSec, fontWeight:600 }}>{labels[key] || key}</div>
                        <div style={{ flex:1, height:8, background:C.border, borderRadius:4 }}>
                          <div style={{ width: (val * 10) + "%", height:"100%", background: val >= 7 ? C.green : val >= 5 ? C.gold : C.red, borderRadius:4, transition:"width 0.5s ease" }} />
                        </div>
                        <div style={{ width:24, fontSize:13, fontWeight:700, color:C.text, textAlign:"right" }}>{val}</div>
                      </div>
                    );
                  })}
                </div>

                {/* 能力成长 */}
                {feedback.brainGains && (
                  <div style={S.card}>
                    <div style={{ fontSize:14, fontWeight:700, marginBottom:8 }}>🧠 本次能力成长</div>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                      {BRAIN_DIMS.map(function(dim) {
                        var gain = feedback.brainGains[dim.key] || 0;
                        if (gain <= 0) return null;
                        return (
                          <span key={dim.key} style={{ fontSize:12, padding:"4px 10px", borderRadius:12, background:C.accentLight, color:C.accent, fontWeight:600 }}>
                            {dim.icon + " " + dim.label + " +" + gain}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 批注 */}
                {feedback.annotations && feedback.annotations.length > 0 && (
                  <div style={S.card}>
                    <div style={{ fontSize:14, fontWeight:700, marginBottom:10 }}>✏️ 逐句批注</div>
                    {feedback.annotations.map(function(ann, i) {
                      return (
                        <div key={i} style={{ padding:"10px 12px", background:C.bg, borderRadius:8, marginBottom:8, borderLeft:"3px solid " + (ann.type === "grammar" ? C.red : ann.type === "vocabulary" ? C.purple : C.teal) }}>
                          <div style={{ fontSize:13, fontStyle:"italic", marginBottom:4 }}>"{ann.sentence}"</div>
                          <div style={{ fontSize:12, color:C.red, marginBottom:2 }}>❌ {ann.issue}</div>
                          <div style={{ fontSize:12, color:C.green }}>✅ {ann.suggestion}</div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* 改进建议 */}
                {feedback.improvements && feedback.improvements.length > 0 && (
                  <div style={S.card}>
                    <div style={{ fontSize:14, fontWeight:700, marginBottom:8 }}>💡 改进建议</div>
                    {feedback.improvements.map(function(imp, i) {
                      return <div key={i} style={{ fontSize:13, color:C.text, marginBottom:6, paddingLeft:12, borderLeft:"2px solid " + C.accent, lineHeight:1.5 }}>{imp}</div>;
                    })}
                  </div>
                )}

                {/* 金句 */}
                {feedback.goldenQuotes && feedback.goldenQuotes.length > 0 && (
                  <div style={{ ...S.card, background:C.goldLight, borderColor:C.gold + "33" }}>
                    <div style={{ fontSize:14, fontWeight:700, color:"#9a7209", marginBottom:8 }}>✨ 金句亮点</div>
                    {feedback.goldenQuotes.map(function(q, i) {
                      return <div key={i} style={{ fontSize:14, fontStyle:"italic", color:"#9a7209", lineHeight:1.6, marginBottom:4 }}>"{q}"</div>;
                    })}
                  </div>
                )}

                {/* 操作按钮 */}
                <div style={{ ...S.btnRow, marginTop:12, marginBottom:20 }}>
                  <button onClick={function() { setScreen("writing-editor"); }} style={S.ghostBtn}>📝 继续修改</button>
                  <button onClick={function() { setEssayText(''); setIdeaChat([]); setOutline(null); setFeedback(null); setScreen("prompt-select"); }} style={S.primaryBtn}>📝 写下一篇</button>
                </div>
              </div>
            ) : null}
          </div>
        )}

        {/* ═══ LOGIN MODAL ═══ */}
        {showLogin && (
          <div style={{ position:"fixed", top:0, left:0, width:"100%", height:"100%", background:"rgba(0,0,0,0.4)", zIndex:9998, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <div style={{ background:C.card, borderRadius:16, padding:"28px 24px", maxWidth:380, width:"90%", boxShadow:"0 20px 60px rgba(0,0,0,0.3)" }}>
              <div style={{ textAlign:"center", marginBottom:16 }}>
                <BrandSparkIcon size={48} marginBottom={8} />
                <div style={{ fontSize:17, fontWeight:700 }}>登录 Know U. Learning</div>
                <div style={{ fontSize:12, color:C.textSec, marginTop:4 }}>输入邮箱，我们会发送验证码</div>
              </div>
              {!loginSent ? (
                <div>
                  <input value={loginEmail} onChange={function(e) { setLoginEmail(e.target.value); }} onKeyDown={function(e) { if (e.key === "Enter") handleLoginEmail(); }} placeholder="your@email.com" type="email" style={{ ...S.textarea, padding:"12px 14px", marginBottom:10, background:C.card }} />
                  <button onClick={handleLoginEmail} disabled={loginLoading} style={S.bigBtn}>{loginLoading ? "发送中..." : "📧 发送验证码"}</button>
                </div>
              ) : (
                <div>
                  <div style={{ fontSize:13, color:C.textSec, marginBottom:10, textAlign:"center" }}>验证码已发送至 <strong>{loginEmail}</strong></div>
                  <input value={otpCode} onChange={function(e) { setOtpCode(e.target.value); }} onKeyDown={function(e) { if (e.key === "Enter") handleVerifyOtp(); }} placeholder="输入 6 位验证码" style={{ ...S.textarea, padding:"12px 14px", marginBottom:10, background:C.card, textAlign:"center", fontSize:20, letterSpacing:8 }} />
                  {otpError && <div style={S.error}>{otpError}</div>}
                  <button onClick={handleVerifyOtp} disabled={loginLoading} style={S.bigBtn}>{loginLoading ? "验证中..." : "✅ 验证登录"}</button>
                  <button onClick={function() { setLoginSent(false); setOtpCode(''); setOtpError(''); }} style={{ ...S.ghostBtn, width:"100%", marginTop:8, textAlign:"center" }}>← 重新输入邮箱</button>
                </div>
              )}
              <button onClick={function() { setShowLogin(false); setLoginSent(false); setOtpCode(''); setOtpError(''); }} style={{ ...S.ghostBtn, width:"100%", marginTop:8, textAlign:"center" }}>取消</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

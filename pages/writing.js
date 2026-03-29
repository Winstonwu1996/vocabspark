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

/* ─── 六维能力系统 ─── */
var BRAIN_DIMS = [
  { key: "creativity", label: "创意力", labelEn: "Creativity", icon: "🎨" },
  { key: "logic", label: "逻辑力", labelEn: "Logic", icon: "🧩" },
  { key: "observation", label: "观察力", labelEn: "Observation", icon: "🔍" },
  { key: "empathy", label: "共情力", labelEn: "Empathy", icon: "💛" },
  { key: "critical", label: "思辨力", labelEn: "Critical", icon: "⚖️" },
  { key: "expression", label: "表达力", labelEn: "Expression", icon: "✍️" },
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
var RadarChart = ({ brainStats, size }) => {
  size = size || 200;
  var cx = size / 2, cy = size / 2, r = size * 0.38;
  var n = BRAIN_DIMS.length;
  var maxVal = 30; // 初始显示的最大值，会自动扩展

  // 计算实际最大值
  var actualMax = 0;
  BRAIN_DIMS.forEach(function(d) { var v = brainStats[d.key] || 0; if (v > actualMax) actualMax = v; });
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

        {/* ═══ DASHBOARD ═══ */}
        {screen === "dashboard" && (
          <div style={{ animation:"fadeUp 0.3s ease-out" }}>
            {/* 脑力雷达图 */}
            <div style={{ ...S.card, textAlign:"center", padding:"20px 16px" }}>
              <div style={{ fontSize:16, fontWeight:700, marginBottom:4 }}>🧠 写作脑力图</div>
              <div style={{ fontSize:12, color:C.textSec, marginBottom:12 }}>每次写作都在训练不同的思维能力</div>
              <RadarChart brainStats={d.brainStats || {}} size={220} />
              <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:6, marginTop:12 }}>
                {BRAIN_DIMS.map(function(dim) {
                  var val = (d.brainStats || {})[dim.key] || 0;
                  return (
                    <span key={dim.key} style={{ fontSize:11, color:C.textSec, background:C.bg, padding:"3px 8px", borderRadius:12, border:"1px solid " + C.border }}>
                      {dim.icon + " " + dim.label + " " + val}
                    </span>
                  );
                })}
              </div>
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
        )}

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

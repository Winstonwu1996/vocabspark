import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { C, FONT, FONT_DISPLAY, globalCSS, S } from '../lib/theme';
import { BrandNavBar, BrandUIcon } from '../components/BrandNavBar';
import UserCenter from '../components/UserCenter';
import { supabase } from '../lib/supabase';
import { loadLearningTime, formatTime } from '../lib/learningTimer';
import { trackFunnel } from '../lib/analytics';

/* ═══════════════════════════════════════════════════════
   Know U. Learning — 营销首页（已登录用户看 dashboard）
   ═══════════════════════════════════════════════════════ */

var EXAMS = ["SSAT", "ISEE", "SAT", "TOEFL", "IELTS"];
var VOCAB_SKEY = "vocabspark_v1";
var WRITING_SKEY = "vocabspark_writing_v1";

var FadeInSection = ({ children, style }) => {
  var ref = useRef(null);
  var [visible, setVisible] = useState(false);
  useEffect(() => {
    var el = ref.current;
    if (!el) return;
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } });
    }, { threshold: 0.12 });
    observer.observe(el);
    return function() { observer.disconnect(); };
  }, []);
  return <div ref={ref} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(28px)", transition: "opacity 0.6s ease, transform 0.6s ease", ...style }}>{children}</div>;
};

/* ─── Hero Logo + 柔和光晕（极简方案 — 替代之前的浮动 emoji） ─── */
var HeroLogoHalo = ({ size }) => {
  var s = size || 84;
  return (
    <div style={{ position:"relative", display:"inline-block", marginBottom:18, padding:30 }}>
      {/* 光晕 halo — 橙金渐变呼吸 */}
      <div aria-hidden="true" style={{
        position:"absolute", top:0, left:0, right:0, bottom:0,
        borderRadius:"50%",
        background:"radial-gradient(circle, "+C.accent+"55 0%, "+C.gold+"22 35%, transparent 70%)",
        animation:"haloBreath 4s ease-in-out infinite",
        pointerEvents:"none",
        zIndex:0,
      }} />
      {/* Logo 本体 — 浮动 */}
      <div style={{ position:"relative", animation:"floatLogo 3s ease-in-out infinite", zIndex:1 }}>
        <BrandUIcon size={s} />
      </div>
    </div>
  );
};

/* ─── SVG-B：Ecosystem 闭环大插画 ─── */
var EcosystemArt = () => (
  <div style={{ width:"100%", maxWidth:560, margin:"0 auto 20px", position:"relative" }}>
    <svg viewBox="0 0 600 360" width="100%" style={{ display:"block", overflow:"visible" }}>
      <defs>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={C.accent} stopOpacity="0.18" />
          <stop offset="100%" stopColor={C.accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="vocabGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={C.accent} />
          <stop offset="100%" stopColor={C.gold} />
        </linearGradient>
        <linearGradient id="readingGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={C.teal} />
          <stop offset="100%" stopColor="#5a9abf" />
        </linearGradient>
        <linearGradient id="writingGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={C.purple} />
          <stop offset="100%" stopColor="#8b7cf7" />
        </linearGradient>
      </defs>

      {/* 中心暖光 */}
      <ellipse cx="300" cy="180" rx="200" ry="130" fill="url(#centerGlow)" />

      {/* 三角连线（虚线） */}
      <path d="M 150 130 Q 300 80 450 130" fill="none" stroke={C.accent} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.45" />
      <path d="M 450 130 Q 480 230 300 280" fill="none" stroke={C.purple} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.45" />
      <path d="M 300 280 Q 120 230 150 130" fill="none" stroke={C.teal} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.45" />

      {/* 流动小圆点（沿三条边循环） */}
      <circle r="4" fill={C.accent}>
        <animateMotion dur="4s" repeatCount="indefinite" path="M 150 130 Q 300 80 450 130" />
      </circle>
      <circle r="4" fill={C.purple}>
        <animateMotion dur="4s" repeatCount="indefinite" begin="1.3s" path="M 450 130 Q 480 230 300 280" />
      </circle>
      <circle r="4" fill={C.teal}>
        <animateMotion dur="4s" repeatCount="indefinite" begin="2.6s" path="M 300 280 Q 120 230 150 130" />
      </circle>

      {/* 中心学生（YOU） */}
      <circle cx="300" cy="180" r="48" fill={C.card} stroke={C.accent} strokeWidth="2.5" />
      <text x="300" y="194" textAnchor="middle" fontSize="38" style={{ fontFamily:"system-ui,sans-serif" }}>🧑‍🎓</text>
      <rect x="265" y="232" width="70" height="22" rx="11" fill={C.accent} />
      <text x="300" y="247" textAnchor="middle" fontSize="11" fontWeight="800" fill="#fff" style={{ letterSpacing:"0.1em" }}>YOU</text>

      {/* Vocab（左上） */}
      <circle cx="120" cy="130" r="46" fill="url(#vocabGrad)" />
      <text x="120" y="145" textAnchor="middle" fontSize="34" style={{ fontFamily:"system-ui,sans-serif" }}>📖</text>
      <text x="120" y="200" textAnchor="middle" fontSize="14" fontWeight="800" fill={C.accent} style={{ fontFamily:FONT_DISPLAY }}>Vocab</text>
      <text x="120" y="216" textAnchor="middle" fontSize="11" fill={C.textSec}>词汇 · 千人千面例句</text>

      {/* Reading（右上） */}
      <circle cx="480" cy="130" r="46" fill="url(#readingGrad)" />
      <text x="480" y="145" textAnchor="middle" fontSize="34" style={{ fontFamily:"system-ui,sans-serif" }}>📚</text>
      <text x="480" y="200" textAnchor="middle" fontSize="14" fontWeight="800" fill={C.teal} style={{ fontFamily:FONT_DISPLAY }}>Reading</text>
      <text x="480" y="216" textAnchor="middle" fontSize="11" fill={C.textSec}>阅读 · 个性化材料</text>

      {/* Writing（下） */}
      <circle cx="300" cy="310" r="46" fill="url(#writingGrad)" />
      <text x="300" y="325" textAnchor="middle" fontSize="34" style={{ fontFamily:"system-ui,sans-serif" }}>✍️</text>
      <text x="300" y="368" textAnchor="middle" fontSize="14" fontWeight="800" fill={C.purple} style={{ fontFamily:FONT_DISPLAY }}>Writing</text>
    </svg>
  </div>
);

/* ─── SVG-C：传统 vs Know U. 对比插画 ─── */
var VsArt = () => (
  <div className="vs-row" style={{ display:"flex", gap:14, alignItems:"center", justifyContent:"center", flexWrap:"wrap", marginBottom:20 }}>
    {/* 左：灰色教材 */}
    <div style={{ flex:"1 1 200px", maxWidth:240, textAlign:"center" }}>
      <svg viewBox="0 0 220 140" width="100%" style={{ filter:"grayscale(60%)", opacity:0.7 }}>
        <rect x="40" y="20" width="140" height="100" rx="6" fill="#cdcdcd" stroke="#999" strokeWidth="1.5" />
        <line x1="60" y1="50" x2="160" y2="50" stroke="#888" strokeWidth="2" />
        <line x1="60" y1="65" x2="160" y2="65" stroke="#aaa" strokeWidth="1.2" />
        <line x1="60" y1="78" x2="140" y2="78" stroke="#aaa" strokeWidth="1.2" />
        <line x1="60" y1="91" x2="150" y2="91" stroke="#aaa" strokeWidth="1.2" />
        <text x="110" y="42" textAnchor="middle" fontSize="11" fontWeight="700" fill="#666" fontFamily="serif">DICTIONARY</text>
        <text x="186" y="22" fontSize="14" fill="#888">💤</text>
      </svg>
      <div style={{ fontSize:11, color:C.textSec, marginTop:4, fontWeight:700 }}>📖 传统教材</div>
      <div style={{ fontSize:11, color:C.textSec, opacity:0.7, marginTop:2 }}>所有人看相同例句 · 看完就忘</div>
    </div>

    {/* 中间箭头 — 桌面横排时显示 →，手机包裹后改成 ↓ 竖向位置 */}
    <div className="vs-arrow" style={{ fontSize:24, color:C.accent, fontWeight:800, padding:"0 4px" }}>→</div>

    {/* 右：彩色 Know U. */}
    <div style={{ flex:"1 1 200px", maxWidth:240, textAlign:"center" }}>
      <svg viewBox="0 0 220 140" width="100%">
        <defs>
          <radialGradient id="phoneGlow">
            <stop offset="0%" stopColor={C.gold} stopOpacity="0.4" />
            <stop offset="100%" stopColor={C.gold} stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* 背景柔光 */}
        <ellipse cx="110" cy="70" rx="100" ry="60" fill="url(#phoneGlow)" />
        {/* 手机 */}
        <rect x="70" y="15" width="80" height="115" rx="10" fill={C.card} stroke={C.accent} strokeWidth="2" />
        {/* 屏幕内容 */}
        <rect x="78" y="24" width="64" height="10" rx="3" fill={C.accentLight} />
        <text x="110" y="32" textAnchor="middle" fontSize="6" fill={C.accent} fontWeight="700">abandon</text>
        {/* 个性化例句卡 */}
        <rect x="78" y="40" width="64" height="56" rx="4" fill={C.goldLight} />
        <text x="110" y="50" textAnchor="middle" fontSize="5.5" fill={C.text}>Willow @ Irvine</text>
        <text x="110" y="60" textAnchor="middle" fontSize="5" fill={C.textSec}>tennis match</text>
        <text x="110" y="70" textAnchor="middle" fontSize="5" fill={C.textSec}>暴雨 → 放弃</text>
        <text x="110" y="84" textAnchor="middle" fontSize="14" fill={C.accent}>🎾</text>
        {/* 底部 */}
        <circle cx="110" cy="115" r="4" fill={C.accent} />
        {/* 周围彩色气泡 */}
        <circle cx="40" cy="40" r="8" fill={C.purple} opacity="0.6">
          <animate attributeName="cy" values="40;36;40" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="180" cy="50" r="6" fill={C.teal} opacity="0.65">
          <animate attributeName="cy" values="50;46;50" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="35" cy="100" r="7" fill={C.accent} opacity="0.55">
          <animate attributeName="cy" values="100;96;100" dur="3.2s" repeatCount="indefinite" />
        </circle>
        <text x="180" y="108" fontSize="14">✨</text>
        <text x="20" y="75" fontSize="12">💡</text>
      </svg>
      <div style={{ fontSize:11, color:C.accent, marginTop:4, fontWeight:700 }}>✨ Know U. 千人千面</div>
      <div style={{ fontSize:11, color:C.textSec, marginTop:2 }}>用你的朋友 · 你的地方 · 你的记忆</div>
    </div>
  </div>
);

/* ─── 家长微信对话轮播（取代之前 3 个并排展开） ─── */
var WxBubble = ({ name, avatar, text, isRight, voice, image }) => (
  <div style={{ display: "flex", flexDirection: isRight ? "row-reverse" : "row", gap: 8, alignItems: "flex-start", marginBottom: 4 }}>
    <div style={{ width: 36, height: 36, borderRadius: 6, background: isRight ? "linear-gradient(135deg, #f093fb, #f5576c)" : "linear-gradient(135deg, #4facfe, #00f2fe)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "#fff", fontWeight: 700, flexShrink: 0 }}>{avatar}</div>
    <div style={{ maxWidth: "75%" }}>
      <div style={{ fontSize: 11, color: C.textSec, marginBottom: 3, textAlign: isRight ? "right" : "left" }}>{name}</div>
      {voice ? (
        <div style={{ background: isRight ? "#95EC69" : "#fff", color: C.text, padding: "10px 14px", borderRadius: isRight ? "12px 4px 12px 12px" : "4px 12px 12px 12px", fontSize: 13, boxShadow: "0 1px 3px rgba(0,0,0,0.06)", display:"flex", alignItems:"center", gap:8, minWidth:100 }}>
          <span style={{ fontSize:14 }}>🎙</span>
          <span style={{ flex:1, height:3, background: isRight ? "rgba(0,0,0,0.15)" : C.border, borderRadius:2, position:"relative" }}>
            <span style={{ position:"absolute", left:0, top:0, height:"100%", width:"40%", background: isRight ? "rgba(0,0,0,0.3)" : C.textSec, borderRadius:2 }} />
          </span>
          <span style={{ fontSize:11, color:C.textSec }}>{voice}</span>
        </div>
      ) : image ? (
        <div style={{ background: isRight ? "#95EC69" : "#fff", padding: 4, borderRadius: isRight ? "10px 4px 10px 10px" : "4px 10px 10px 10px", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
          <div style={{ width: 140, height:90, background:"linear-gradient(135deg, "+C.accentLight+", "+C.goldLight+")", borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center", fontSize:28 }}>{image}</div>
        </div>
      ) : (
        <div style={{ background: isRight ? "#95EC69" : "#fff", color: C.text, padding: "9px 12px", borderRadius: isRight ? "12px 4px 12px 12px" : "4px 12px 12px 12px", fontSize: 14, lineHeight: 1.7, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>{text}</div>
      )}
    </div>
  </div>
);
var WxTyping = () => (
  <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4, marginLeft:44, fontSize:11, color:C.textSec, fontStyle:"italic" }}>
    <span style={{ display:"inline-flex", gap:3 }}>
      <span style={{ width:5, height:5, borderRadius:"50%", background:C.textSec, animation:"pulseDot 1.2s ease-in-out infinite" }} />
      <span style={{ width:5, height:5, borderRadius:"50%", background:C.textSec, animation:"pulseDot 1.2s ease-in-out infinite 0.2s" }} />
      <span style={{ width:5, height:5, borderRadius:"50%", background:C.textSec, animation:"pulseDot 1.2s ease-in-out infinite 0.4s" }} />
    </span>
    <span>对方正在输入…</span>
  </div>
);

var PARENT_THREADS = [
  {
    title: "📖 SSAT 妈妈群",
    time: "昨天 21:32",
    msgs: [
      { name: "Emily妈", avatar: "E", text: "有人试过那个 Know U 吗 我家娃昨天背 abandon 居然在笑 说这不就是上周网球场那事吗😂" },
      { name: "Sophia妈", avatar: "S", text: "哈哈哈 我女儿也是 以前背单词跟要命似的 现在自己打开的", isRight: true },
      { name: "Emily妈", avatar: "E", text: "就是有些词的例句有点长 不过孩子倒不介意 说比干巴巴的释义有意思多了" },
      { name: "Sophia妈", avatar: "S", voice: '12"', isRight: true },
      { name: "Sophia妈", avatar: "S", text: "主要是它会自动安排复习 我不用盯了 省心", isRight: true },
    ],
  },
  {
    title: "✍️ 英语写作群",
    time: "今天 09:15",
    msgs: [
      { name: "Jason妈", avatar: "J", text: "那个写作课挺有意思 AI 不给答案 就一直问问题 Jason 说有点烦但是确实得自己想" },
      { name: "Mia妈", avatar: "M", image: "📊", isRight: true },
      { name: "Mia妈", avatar: "M", text: "看 这是 Mia 的六维雷达图 每次写完看哪个涨了 跟健身似的哈哈", isRight: true },
      { name: "Jason妈", avatar: "J", text: "嗯 而且难度会慢慢加上去 一开始挺简单的 现在他偶尔会说有点难 但没放弃 这对我儿子来说已经很不容易了" },
      { typing: true },
      { name: "Mia妈", avatar: "M", text: "是的 能坚持用下去就行 慢慢来呗", isRight: true },
    ],
  },
  {
    title: "💬 家长闲聊",
    time: "今天 14:08",
    msgs: [
      { name: "David妈", avatar: "D", text: "我们是外教每周一次课 平时用这个练 外教管口语 AI 管单词和写作 搭着用还行" },
      { name: "Olivia妈", avatar: "O", text: "这思路好 外教太贵了一周只能一次 平时总不能空着", isRight: true },
      { name: "David妈", avatar: "D", text: "对 而且它单词和写作好像是通的 写作里遇到不会的词可以直接去背 这个设计蛮好" },
      { name: "Olivia妈", avatar: "O", text: "反正免费 让孩子先用着呗 能养成每天学一点的习惯就赚了", isRight: true },
    ],
  },
];

var ParentChatCarousel = () => {
  var [idx, setIdx] = useState(0);
  var [fade, setFade] = useState(true);
  var [paused, setPaused] = useState(false);
  useEffect(function() {
    if (paused) return;
    var t = setInterval(function() {
      setFade(false);
      setTimeout(function() { setIdx(function(i) { return (i + 1) % PARENT_THREADS.length; }); setFade(true); }, 280);
    }, 9000);
    return function() { clearInterval(t); };
  }, [paused]);
  var thread = PARENT_THREADS[idx];
  return (
    <div style={{ maxWidth: 480, margin: "0 auto" }} onMouseEnter={function(){ setPaused(true); }} onMouseLeave={function(){ setPaused(false); }}>
      {/* dot indicator + 标题轮换 */}
      <div style={{ display:"flex", justifyContent:"center", gap:8, marginBottom:10 }}>
        {PARENT_THREADS.map(function(t, i) {
          var active = i === idx;
          return (
            <button key={i} onClick={function(){ setFade(false); setTimeout(function(){ setIdx(i); setFade(true); }, 200); }} style={{ background:"transparent", border:"none", padding:"4px 10px", cursor:"pointer", fontSize:11, fontWeight: active ? 800 : 600, color: active ? C.text : C.textSec, opacity: active ? 1 : 0.55, borderBottom: active ? "2px solid "+C.accent : "2px solid transparent", transition:"all 0.2s", fontFamily:FONT }}>{t.title}</button>
          );
        })}
      </div>
      {/* 微信对话框 */}
      <div style={{ background: "#EDEDED", borderRadius: 16, padding: "16px 14px 12px", border: "1px solid #e0e0e0", minHeight: 360, opacity: fade ? 1 : 0, transition: "opacity 0.28s ease" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.textSec, textAlign: "center", marginBottom: 8 }}>{thread.title}</div>
        <div style={{ textAlign: "center", fontSize: 11, color: C.textSec, opacity: 0.6, margin: "8px 0 12px" }}>{thread.time}</div>
        {thread.msgs.map(function(m, i) {
          if (m.typing) return <WxTyping key={i} />;
          return <WxBubble key={i} {...m} />;
        })}
      </div>
      {/* 进度小圆点 */}
      <div style={{ display:"flex", justifyContent:"center", gap:6, marginTop:10 }}>
        {PARENT_THREADS.map(function(_, i) { return <div key={i} style={{ width: i === idx ? 16 : 6, height:6, borderRadius:3, background: i === idx ? C.accent : C.border, transition:"all 0.3s" }} />; })}
      </div>
    </div>
  );
};

/* ─── 多学生个性化例句轮播（在 VS 段下面） ─── */
var KnowUExampleCard = () => {
  var EXAMPLES = [
    {
      student: "Willow · 6年级 · Irvine",
      word: "abandon",
      phonetic: "/əˈbændən/",
      sentence: <>Willow 和 Emily 在 Irvine Spectrum 的网球场打到正嗨，突然暴雨 — they had to <strong style={{ color: C.accent }}>abandon</strong> the match and run for matcha ice cream! 🍵</>,
    },
    {
      student: "Jason · 8年级 · 纽约",
      word: "resilient",
      phonetic: "/rɪˈzɪljənt/",
      sentence: <>Jason 的篮球教练常说："A <strong style={{ color: C.accent }}>resilient</strong> player doesn't quit after losing one game." 上周输了之后，Jason 第二天照样准时训练 🏀</>,
    },
    {
      student: "Mia · 7年级 · 波士顿",
      word: "euphoria",
      phonetic: "/juːˈfɔːriə/",
      sentence: <>Mia 第一次看 Taylor Swift 的 Eras Tour 时，全场 5 万人一起唱 "Shake It Off"，那种 <strong style={{ color: C.accent }}>euphoria</strong> 让她激动到快哭 🎤</>,
    },
  ];
  var [idx, setIdx] = useState(0);
  var [fade, setFade] = useState(true);
  useEffect(() => {
    var t = setInterval(() => {
      setFade(false);
      setTimeout(() => { setIdx(i => (i + 1) % EXAMPLES.length); setFade(true); }, 250);
    }, 5000);
    return () => clearInterval(t);
  }, []);
  var ex = EXAMPLES[idx];
  return (
    <div style={{ background: C.accentLight, border: "2px solid " + C.accent + "44", borderRadius: 14, padding: "20px", position: "relative", overflow:"hidden", maxWidth:520, margin:"0 auto" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom: 10 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.accent }}>✨ 真实例句样本（每 5 秒切换）</div>
        <div style={{ display:"flex", gap:4 }}>
          {EXAMPLES.map((_, i) => <div key={i} style={{ width:6, height:6, borderRadius:"50%", background: i === idx ? C.accent : C.accent+"33", transition:"background 0.3s" }} />)}
        </div>
      </div>
      <div style={{ fontSize: 11, color: C.accent, opacity: 0.8, marginBottom: 6, fontWeight:600 }}>{ex.student}</div>
      <div style={{ opacity: fade ? 1 : 0, transition: "opacity 0.25s ease" }}>
        <div style={{ display:"flex", alignItems:"baseline", gap:8, marginBottom: 8 }}>
          <span style={{ fontFamily: FONT_DISPLAY, fontSize: 26, fontWeight: 600, color: C.accent, letterSpacing: "-0.01em" }}>{ex.word}</span>
          <span style={{ fontSize: 12, color: C.textSec, fontStyle: "italic" }}>{ex.phonetic}</span>
        </div>
        <div style={{ fontSize: 14, color: C.text, lineHeight: 1.8, minHeight: 90 }}>
          {ex.sentence}
        </div>
      </div>
    </div>
  );
};

/* ─── 已登录用户的 Hero（dashboard 摘要 + 继续学习） ─── */
var ReturningUserHero = ({ user, onUserCenterClick }) => {
  var [progress, setProgress] = useState({ vocab: null, writing: null, time: { totalMinutes: 0, todayMinutes: 0 } });
  useEffect(() => {
    try {
      var v = JSON.parse(localStorage.getItem(VOCAB_SKEY) || "{}");
      var w = JSON.parse(localStorage.getItem(WRITING_SKEY) || "{}");
      var t = loadLearningTime();
      setProgress({
        vocab: v?.stats || null,
        writing: w?.essays?.length || 0,
        time: t,
      });
    } catch(e) {}
  }, []);
  var name = user.user_metadata?.name || user.email?.split("@")[0] || "学习者";
  var hour = new Date().getHours();
  var greet = hour < 6 ? "夜深了" : hour < 11 ? "早上好" : hour < 14 ? "中午好" : hour < 18 ? "下午好" : "晚上好";
  var xp = progress.vocab?.xp || 0;
  var rwd = progress.vocab?.total || 0;
  var wCount = progress.writing || 0;
  var todayMin = progress.time?.todayMinutes || 0;
  var hasStudied = xp > 0 || wCount > 0;
  return (
    <section style={{ position:"relative", textAlign:"center", padding:"48px 20px 36px", overflow:"hidden" }}>
      <div aria-hidden="true" style={{ position:"absolute", inset:0, zIndex:0, pointerEvents:"none" }}>
        <div style={{ position:"absolute", top:"-100px", left:"15%", width:300, height:300, borderRadius:"50%", background:"radial-gradient(circle, " + C.accent + "22 0%, transparent 70%)", filter:"blur(40px)" }} />
        <div style={{ position:"absolute", top:"40px", right:"10%", width:240, height:240, borderRadius:"50%", background:"radial-gradient(circle, " + C.gold + "1f 0%, transparent 70%)", filter:"blur(36px)" }} />
      </div>
      <div style={{ position:"relative", zIndex:1, maxWidth:560, margin:"0 auto" }}>
        <div style={{ animation:"floatLogo 3s ease-in-out infinite", marginBottom:14 }}>
          <BrandUIcon size={56} />
        </div>
        <div style={{ fontSize:14, color:C.textSec, marginBottom:4, fontWeight:600 }}>{greet} 👋</div>
        <h1 style={{ fontFamily:FONT_DISPLAY, fontSize:30, fontWeight:700, margin:"0 0 14px", letterSpacing:"-0.025em", lineHeight:1.15 }}>
          欢迎回来，<span style={{ color:C.accent }}>{name}</span>
        </h1>
        {/* 进度摘要 */}
        {hasStudied ? (
          <div style={{ display:"inline-flex", flexWrap:"wrap", gap:8, justifyContent:"center", marginBottom:24 }}>
            {rwd > 0 && <span style={{...S.heroStatPillGold, padding:"6px 14px", fontSize:13}}>📖 {rwd} 词</span>}
            {xp > 0 && <span style={{...S.heroStatPillAccent, padding:"6px 14px", fontSize:13}}>⚡ {xp} XP</span>}
            {wCount > 0 && <span style={{...S.heroStatPillGreen, padding:"6px 14px", fontSize:13}}>✍️ {wCount} 篇写作</span>}
            {todayMin > 0 && <span style={{ padding:"6px 14px", fontSize:13, background:C.tealLight, color:C.teal, fontWeight:700, borderRadius:20, border:"1px solid "+C.teal+"33" }}>⏱ 今天 {formatTime(todayMin)}</span>}
          </div>
        ) : (
          <p style={{ fontSize:14, color:C.textSec, marginBottom:24, lineHeight:1.7 }}>准备好让 AI 真正了解你了吗？从一个单词开始 →</p>
        )}
        {/* 主 CTA */}
        <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap", marginBottom:20 }}>
          <Link href="/vocab" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", padding:"14px 32px", background:"linear-gradient(135deg, "+C.accent+" 0%, #d4823d 100%)", color:"#fff", borderRadius:12, fontSize:15, fontWeight:700, textDecoration:"none", boxShadow:"0 6px 18px "+C.accent+"55, inset 0 1px 0 rgba(255,255,255,0.2)" }}>
            {hasStudied ? "继续学习 →" : "开始第一个单词 →"}
          </Link>
          <Link href="/writing" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", padding:"14px 24px", background:C.card, color:C.purple, borderRadius:12, fontSize:14, fontWeight:700, textDecoration:"none", border:"1.5px solid "+C.purple+"55" }}>
            ✍️ 写作课
          </Link>
        </div>
        <button onClick={onUserCenterClick} style={{ background:"transparent", border:"none", color:C.textSec, fontSize:12, cursor:"pointer", textDecoration:"underline", textUnderlineOffset:3 }}>账户与设置</button>
      </div>
    </section>
  );
};

/* ─── 未登录新访客 Hero（精简版） ─── */
var GuestHero = () => (
  <section style={{ position:"relative", textAlign: "center", padding: "56px 20px 40px", overflow:"hidden" }}>
    {/* 背景柔光 */}
    <div aria-hidden="true" style={{ position:"absolute", inset:0, zIndex:0, pointerEvents:"none" }}>
      <div style={{ position:"absolute", top:"-120px", left:"10%", width:360, height:360, borderRadius:"50%", background:"radial-gradient(circle, " + C.accent + "1f 0%, transparent 70%)", filter:"blur(40px)" }} />
      <div style={{ position:"absolute", top:"40px", right:"5%", width:300, height:300, borderRadius:"50%", background:"radial-gradient(circle, " + C.teal + "1a 0%, transparent 70%)", filter:"blur(40px)" }} />
      <div style={{ position:"absolute", bottom:"-80px", left:"30%", width:280, height:280, borderRadius:"50%", background:"radial-gradient(circle, " + C.gold + "1f 0%, transparent 70%)", filter:"blur(36px)" }} />
    </div>
    <div style={{ position:"relative", zIndex:1, maxWidth:680, margin:"0 auto" }}>
      {/* Logo + 光晕 — 视觉焦点 */}
      <HeroLogoHalo size={88} />
      {/* 品牌 wordmark + tagline pill */}
      <h1 style={{ fontFamily: FONT_DISPLAY, fontSize: 38, fontWeight: 700, margin: "0 0 8px", letterSpacing: "-0.035em", lineHeight: 1.1 }}>Know U. Learning</h1>
      <div style={{ display:"inline-block", padding:"4px 12px", background:C.card, border:"1px solid "+C.border, borderRadius:999, fontSize:11, fontWeight:600, color:C.textSec, letterSpacing:"0.05em", textTransform:"uppercase", marginBottom:28, boxShadow:C.shadowSoft }}>Personal AI Language Tutor</div>
      {/* 主张 — 一句话，去掉所有副文案让金句独立 */}
      <h2 style={{ fontSize: 28, fontWeight: 800, color: C.text, margin:"0 0 32px", lineHeight: 1.3, letterSpacing:"-0.02em" }}>
        AI 用<span style={{ color:C.accent }}>你的故事</span>教英语
      </h2>
      {/* CTA */}
      <Link href="/vocab?from=home" style={{ display:"inline-flex", alignItems:"center", justifyContent:"center", padding:"15px 36px", background:"linear-gradient(135deg, "+C.accent+" 0%, #d4823d 100%)", color:"#fff", borderRadius:14, fontSize:16, fontWeight:700, textDecoration:"none", boxShadow:"0 8px 24px "+C.accent+"55, inset 0 1px 0 rgba(255,255,255,0.2)", transition:"transform 0.2s ease, box-shadow 0.2s ease" }} onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 12px 32px "+C.accent+"66, inset 0 1px 0 rgba(255,255,255,0.25)"; }} onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 8px 24px "+C.accent+"55, inset 0 1px 0 rgba(255,255,255,0.2)"; }}>
        免费试 1 个单词 →
      </Link>
      <div style={{ fontSize:12, color:C.textSec, marginTop:10, opacity:0.75 }}>无需注册 · 30 秒看到效果</div>
    </div>
  </section>
);

export default function HomePage() {
  var [user, setUser] = useState(null);
  var [authChecked, setAuthChecked] = useState(false);
  var [showUserCenter, setShowUserCenter] = useState(false);

  useEffect(() => {
    // 漏斗：进入 home 页（已登录 / 未登录区分）
    supabase.auth.getSession().then(function(result) {
      var s = result?.data?.session;
      if (s?.user) setUser(s.user);
      setAuthChecked(true);
      trackFunnel('home_view', { has_user: !!(s && s.user) });
    });
    var { data: { subscription } } = supabase.auth.onAuthStateChange(function(event, session) {
      setUser(session?.user || null);
      // 漏斗：登录态变化（SIGNED_IN / SIGNED_OUT 等）
      if (event) trackFunnel('auth_state_change', { event: event, has_user: !!(session && session.user) });
    });
    return function() { subscription?.unsubscribe(); };
  }, []);

  var container = { maxWidth: 800, margin: "0 auto", padding: "0 20px" };

  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: FONT, color: C.text }}>
      <Head>
        <title>Know U. Learning — AI 英语私教，每个单词都是你的故事</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="AI 了解你的生活、朋友、爱好，为你定制每一个例句。Vocab 词汇课 + Writing 写作课 + Reading 阅读课，三位一体的英语学习平台。" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: globalCSS + `
        @keyframes floatLogo { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes haloBreath { 0%,100%{opacity:0.45;transform:scale(1)} 50%{opacity:0.85;transform:scale(1.12)} }
        @keyframes pulseDot { 0%,100%{transform:scale(0.9);opacity:0.5} 50%{transform:scale(1.1);opacity:1} }
        /* VS 对比插画 — 手机上垂直排列 + 箭头变 ↓ */
        @media (max-width: 600px) {
          .vs-row { flex-direction: column !important; }
          .vs-arrow { transform: rotate(90deg); padding: 8px 0 !important; }
        }
      `}} />

      {/* Nav — 已登录显示用户头像，未登录提示注册 */}
      <BrandNavBar activeTab="home" user={user} onUserCenterClick={() => setShowUserCenter(true)} />

      {/* ═══ HERO — 用户视角差异化 ═══ */}
      {authChecked && user ? (
        <ReturningUserHero user={user} onUserCenterClick={() => setShowUserCenter(true)} />
      ) : (
        <GuestHero />
      )}

      {/* ═══ ECOSYSTEM — SVG 大插画 + 3 产品卡（删掉中间文字卡） ═══ */}
      <FadeInSection>
        <section id="ecosystem" style={{ ...container, padding: "32px 20px" }}>
          <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: 24, fontWeight: 700, textAlign: "center", letterSpacing: "-0.02em", marginBottom: 6 }}>三位一体 · 学习闭环</h2>
          <p style={{ fontSize: 14, color: C.textSec, textAlign: "center", marginBottom: 20 }}>读、写、词汇相互赋能 — 学过的词在写作中自然出现</p>

          {/* 大幅 SVG 闭环插画 */}
          <EcosystemArt />

          {/* 3 Product Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {/* Vocab */}
            <div style={{ background: C.card, borderRadius: 14, border: "1px solid " + C.border, borderTop: "4px solid " + C.accent, padding: "20px", boxShadow: C.shadow }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div style={{ fontSize: 16, fontWeight: 700 }}>📖 Vocab · 词汇课</div>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.green, background: C.greenLight, padding: "2px 8px", borderRadius: 10 }}>已上线</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", fontSize: 13, color: C.textSec, lineHeight: 2 }}>
                <li>🎨 学习画像 — AI 用你的生活编例句</li>
                <li>🎯 猜 → 讲 → 光谱排序 → 复习</li>
                <li>🔄 间隔重复，科学安排复习</li>
                <li>📷 照片日记 — 拍照丰富画像</li>
              </ul>
              <Link href="/vocab?from=home" style={{ ...S.primaryBtn, textDecoration: "none", display: "block", textAlign: "center", padding: "10px", fontSize: 14 }}>开始学习 →</Link>
            </div>
            {/* Writing */}
            <div style={{ background: C.card, borderRadius: 14, border: "1px solid " + C.border, borderTop: "4px solid " + C.purple, padding: "20px", boxShadow: C.shadow }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div style={{ fontSize: 16, fontWeight: 700 }}>✍️ Writing · 写作课</div>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.purple, background: C.purpleLight, padding: "2px 8px", borderRadius: 10 }}>Beta</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", fontSize: 13, color: C.textSec, lineHeight: 2 }}>
                <li>🧠 不是批改 — 是训练思维表达力</li>
                <li>🤔 AI 苏格拉底式教练：只问不答</li>
                <li>🌉 中文做「思维桥梁」再用英文表达</li>
                <li>📊 六维能力雷达图可视化成长</li>
              </ul>
              <Link href="/writing" style={{ ...S.primaryBtn, textDecoration: "none", display: "block", textAlign: "center", padding: "10px", fontSize: 14, background: C.purple }}>体验写作课 →</Link>
            </div>
            {/* Reading */}
            <div style={{ background: C.card, borderRadius: 14, border: "1px solid " + C.border, borderTop: "4px solid " + C.teal, padding: "20px", boxShadow: C.shadow, opacity: 0.85 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div style={{ fontSize: 16, fontWeight: 700 }}>📚 Reading · 阅读课</div>
                <span style={{ fontSize: 11, fontWeight: 700, color: C.teal, background: C.tealLight, padding: "2px 8px", borderRadius: 10 }}>即将上线</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", fontSize: 13, color: C.textSec, lineHeight: 2 }}>
                <li>📰 AI 根据水平推荐英文阅读材料</li>
                <li>📝 生词一键收藏 → 进入 Vocab 学习</li>
                <li>💎 收藏金句和观点 → Writing 时引用</li>
                <li>🎧 阅读理解 + 语感培养，输入驱动输出</li>
              </ul>
              <div style={{ padding: "10px", textAlign: "center", fontSize: 14, fontWeight: 600, color: C.textSec, background: C.bg, borderRadius: 10, border: "1px solid " + C.border }}>敬请期待</div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ═══ WHY — VS 对比插画 + 4 张差异化卡（合并原 WHY+与众不同） ═══ */}
      <FadeInSection>
        <section id="why" style={{ ...container, padding: "32px 20px" }}>
          <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: 24, fontWeight: 700, textAlign: "center", letterSpacing: "-0.02em", marginBottom: 6 }}>为什么 Know U. 不一样</h2>
          <p style={{ fontSize: 14, color: C.textSec, textAlign: "center", marginBottom: 22 }}>同一个单词，两种完全不同的学习体验</p>

          {/* SVG 对比插画 */}
          <VsArt />

          {/* 个性化例句样本卡 */}
          <div style={{ marginBottom: 28 }}>
            <KnowUExampleCard />
          </div>

          {/* 4 张差异化卡 — 2x2 四宫格（桌面），手机自适应单列 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}>
            {[
              {
                vs: "vs 题海软件",
                example: "百词斩 · 多邻国",
                bad: "所有人看相同例句和图片",
                good: "用你认识的人和地方编例句，过目难忘",
                color: C.accent,
              },
              {
                vs: "vs 通用 AI",
                example: "ChatGPT · Claude",
                bad: "需自己设计 prompt，单次对话即忘",
                good: "完整学习闭环：画像→学习→复习→统计",
                color: C.purple,
              },
              {
                vs: "vs 真人私教",
                example: "外教 · 1v1 课程",
                bad: "$100+/小时 · 每周一次 · 无法 24/7 跟踪",
                good: "AI 私教越学越懂你，学费 1/10",
                color: C.teal,
              },
              {
                vs: "我们的科学",
                example: "1→3→7→14→30 天",
                bad: "靠重复刷题，记忆很快衰减",
                good: "间隔重复算法 + 多模态语境，记得长久",
                color: C.gold,
              },
            ].map(function(d) {
              return <div key={d.vs} style={{ background: C.card, borderRadius: 12, padding: "18px", border: "1px solid " + C.border, boxShadow: C.shadow, borderTop:"3px solid "+d.color }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", marginBottom: 10 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: d.color }}>{d.vs}</div>
                  <div style={{ fontSize: 10, color: C.textSec, opacity:0.7 }}>{d.example}</div>
                </div>
                <div style={{ fontSize: 12.5, color: C.textSec, marginBottom: 8, lineHeight: 1.55 }}>❌ {d.bad}</div>
                <div style={{ fontSize: 12.5, color: C.text, fontWeight: 600, lineHeight: 1.55 }}>✅ {d.good}</div>
              </div>;
            })}
          </div>

          {/* EXAMS pill 移到这里 — 作为"覆盖考试"的支撑 */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginTop: 24 }}>
            <span style={{ fontSize:11, color:C.textSec, marginRight:4, alignSelf:"center", fontWeight:700 }}>覆盖主流标化考试 →</span>
            {EXAMS.map(function(e) { return <span key={e} style={{ padding: "4px 12px", background: C.goldLight, borderRadius: 20, fontSize: 12, fontWeight: 700, color: C.gold, border: "1px solid " + C.gold + "33" }}>{e}</span>; })}
          </div>
        </section>
      </FadeInSection>

      {/* ═══ PARENT TESTIMONIALS — WeChat Style ═══ */}
      <FadeInSection>
        <section style={{ ...container, padding: "32px 20px" }}>
          <h2 style={{ fontFamily: FONT_DISPLAY, fontSize: 24, fontWeight: 700, textAlign: "center", letterSpacing: "-0.02em", marginBottom: 6 }}>家长们怎么说</h2>
          <p style={{ fontSize: 14, color: C.textSec, textAlign: "center", marginBottom: 24 }}>来自妈妈群的真实反馈</p>

          <ParentChatCarousel />

          <p style={{ fontSize: 12, color: C.textSec, textAlign: "center", marginTop: 16, opacity: 0.5 }}>* 为保护隐私，已去除用户名和头像，基于真实对话生成</p>
        </section>
      </FadeInSection>

      {/* ═══ ORIGIN STORY ═══ */}
      <FadeInSection>
        <section style={{ background: "linear-gradient(135deg, " + C.goldLight + " 0%, " + C.accentLight + " 100%)", padding: "48px 20px", margin: "20px 0" }}>
          <div style={{ ...container, maxWidth: 560, textAlign: "center" }}>
            <div style={{ fontSize: 48, lineHeight: 1, marginBottom: 16, opacity: 0.3 }}>❝</div>
            <p style={{ fontSize: 16, lineHeight: 2, color: C.text, marginBottom: 20, fontStyle: "italic" }}>
              女儿 Willow 在美国读 6 年级，备考 SSAT，每天背单词很痛苦。我想：如果 AI 能用她自己的生活来编例句呢？于是有了 Know U.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.text, marginBottom: 16 }}>
              现在，每个单词都是她自己的故事。<br/>
              我希望你的孩子也能拥有同样的体验。
            </p>
            <p style={{ fontSize: 14, fontWeight: 700, color: C.accent }}>Made with ❤️ by a dad for his daughter, and for you.</p>
          </div>
        </section>
      </FadeInSection>

      {/* ═══ CTA — 不再重复 hero，换"临门一脚"角度 ═══ */}
      <FadeInSection>
        <section style={{ ...container, padding: "32px 20px 8px", textAlign: "center" }}>
          <div style={{ background: C.card, borderRadius: 20, border: "1px solid " + C.border, padding: "32px 24px", boxShadow: "0 8px 30px rgba(44,36,32,0.08)" }}>
            <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 6, lineHeight:1.35 }}>看完了？让 AI 真正认识你 →</div>
            <p style={{ fontSize: 13, color: C.textSec, marginBottom: 22, lineHeight:1.7 }}>
              填一份「学习画像」（5 分钟）— 之后每个例句都是你的故事。<br/>
              <span style={{ color:C.gold, fontWeight:700 }}>🎁 推广期全部免费</span>（至 2026-09-30）· 无需信用卡 · 随时退出<br/>
              <span style={{ fontSize:11, color:C.textSec, opacity:0.75 }}>10/1 后改为付费方案，将提前 14 天通知所有注册用户</span>
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/vocab?from=home" style={{ ...S.bigBtn, display: "inline-block", width: "auto", padding: "14px 28px", fontSize: 15, textDecoration: "none" }}>
                {user ? "继续学习 →" : "免费开始 →"}
              </Link>
              <Link href="/plan" style={{ ...S.ghostBtn, display: "inline-block", padding: "14px 20px", textDecoration: "none", color: C.textSec }}>查看付费方案</Link>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ borderTop: "1px solid " + C.border, padding: "24px 20px 16px", textAlign: "center", marginTop:24 }}>
        <div style={{ ...container }}>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 12, fontSize: 13, flexWrap: "wrap" }}>
            <Link href="/vocab" style={{ color: C.textSec, textDecoration: "none" }}>Vocab 词汇课</Link>
            <Link href="/writing" style={{ color: C.textSec, textDecoration: "none" }}>Writing 写作课</Link>
            <Link href="/plan" style={{ color: C.textSec, textDecoration: "none" }}>Plan 方案</Link>
          </div>
          <p style={{ fontSize: 14, color: C.text, margin: "0 0 4px" }}>为女儿而写，献给每一位认真学习的你</p>
          <p style={{ fontSize: 12, color: C.textSec, margin: "0 0 8px" }}>Know U. Learning — Personal AI Language Tutor</p>
          <p style={{ fontSize: 11, color: C.textSec, opacity: 0.6, marginBottom: 10 }}>问题反馈：Winstonwu1996@icloud.com</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", fontSize: 12, flexWrap: "wrap", paddingTop: 8, borderTop: "1px solid " + C.border, marginTop: 4 }}>
            <Link href="/privacy" style={{ color: C.textSec, textDecoration: "none", opacity: 0.8 }}>🔒 隐私政策</Link>
            <Link href="/terms" style={{ color: C.textSec, textDecoration: "none", opacity: 0.8 }}>📋 服务条款</Link>
          </div>
        </div>
      </footer>

      {/* User Center Drawer */}
      <UserCenter open={showUserCenter} onClose={() => setShowUserCenter(false)} user={user} onLogin={() => { window.location.href = "/vocab?login=1"; }} onLogout={async () => { await supabase.auth.signOut(); setUser(null); setShowUserCenter(false); }} />
    </div>
  );
}

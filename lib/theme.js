/* ─── Know U. Learning — 共享设计体系 ─── */

export var C = {
  bg: "#f7f6f3", card: "#ffffff", accent: "#c46b30", accentLight: "#fdf1e8",
  teal: "#4a6d8c", tealLight: "#f0f4f7",
  purple: "#6c5ce7", purpleLight: "#f0edff", gold: "#c8922e", goldLight: "#fdf6ea",
  text: "#2c2e33", textSec: "#6b7280", border: "#e5e2dd",
  green: "#22a06b", greenLight: "#e6fcf5", red: "#e53e3e", redLight: "#fef2f2",
  dark: "#161b22", darkPanel: "#1c2333", darkBorder: "#30363d", darkGreen: "#3fb950", darkBlue: "#2f81f7",
  shadow: "0 1px 2px rgba(44,36,32,0.04), 0 8px 24px rgba(44,36,32,0.08)",
  shadowHover: "0 2px 4px rgba(44,36,32,0.06), 0 16px 40px rgba(44,36,32,0.12)",
  shadowSoft: "0 1px 3px rgba(44,36,32,0.04), 0 4px 12px rgba(44,36,32,0.05)",
  overlay: "rgba(0,0,0,0.5)",
  white: "#ffffff",
};
// 正文字体栈：
//  - 英文 Inter（屏幕长阅读行业共识，x-height 高、字重层级清晰）
//  - 中文系统栈：苹方（Apple）/ 鸿蒙字体（华为）/ 微软雅黑（Windows）
//  - Noto Sans SC 保留为 Linux / 无 HarmonyOS 华为设备的兜底
export var FONT = "'Inter',-apple-system,BlinkMacSystemFont,'HarmonyOS Sans SC','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Noto Sans SC',sans-serif";
// 装饰性标题字体（Fraunces semi-serif + 中文系统黑体）
// 中文不再用 Noto Serif SC 宋体 — 避免屏幕上糊感 + 与 Fraunces 形成"不对称美"
// 用于 hero 标题、词条展示、Section heading
export var FONT_DISPLAY = "'Fraunces',-apple-system,'HarmonyOS Sans SC','PingFang SC',Georgia,serif";

// 词型主题色：每种词型有专属配色，避免视觉疲劳并建立"类型识别"
// 用于 spectrum tag、teach 卡顶部色条、视觉锚点卡背景等
export var WORD_TYPE_THEMES = {
  A: { name: "程度", icon: "🔥", accent: "#d97706", light: "#fef3c7", border: "#fcd34d", text: "#92400e" }, // 暖橙
  B: { name: "搭配", icon: "🔗", accent: "#0284c7", light: "#e0f2fe", border: "#7dd3fc", text: "#075985" }, // 海蓝
  C: { name: "词根", icon: "🧬", accent: "#7c3aed", light: "#ede9fe", border: "#c4b5fd", text: "#5b21b6" }, // 紫
  D: { name: "难记", icon: "🧠", accent: "#059669", light: "#d1fae5", border: "#6ee7b7", text: "#047857" }, // 翠绿
  E: { name: "抽象", icon: "💭", accent: "#ca8a04", light: "#fef9c3", border: "#fde047", text: "#854d0e" }, // 金
  F: { name: "多义", icon: "🎯", accent: "#db2777", light: "#fce7f3", border: "#f9a8d4", text: "#9d174d" }, // 粉
};
// 兜底主题（无 wordType 时用）
export var DEFAULT_THEME = { name: "", icon: "✨", accent: "#c46b30", light: "#fdf1e8", border: "#e5c7b0", text: "#92400e" };

// 取词型主题（接受 wordType 字符串，返回主题对象）
export var getWordTheme = function(wordType) {
  return (wordType && WORD_TYPE_THEMES[wordType]) || DEFAULT_THEME;
};

// 字体层次体系（6 级字阶）
export var T = {
  display:  { fontSize: 40, fontWeight: 900, lineHeight: 1.1,  letterSpacing: "-0.035em", fontFamily: FONT_DISPLAY },
  hero:     { fontSize: 32, fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.03em",  fontFamily: FONT_DISPLAY },
  h2:       { fontSize: 22, fontWeight: 800, lineHeight: 1.3,  letterSpacing: "-0.02em",  fontFamily: FONT_DISPLAY },
  h3:       { fontSize: 16, fontWeight: 700, lineHeight: 1.4,  letterSpacing: "-0.01em"  },
  body:     { fontSize: 15, fontWeight: 400, lineHeight: 1.7                             },
  bodyBold: { fontSize: 15, fontWeight: 600, lineHeight: 1.7                             },
  small:    { fontSize: 13, fontWeight: 400, lineHeight: 1.6                             },
  caption:  { fontSize: 11, fontWeight: 600, lineHeight: 1.5,  letterSpacing: "0.03em"   },
  // 英文单词展示专用（带衬线，"词典感"）
  wordDisplay: { fontFamily: FONT_DISPLAY, fontWeight: 600, letterSpacing: "-0.01em" },
};

/* ─── CSS Animations & Global Rules ─── */
export var globalCSS = [
  "@keyframes spin { to { transform: rotate(360deg); } }",
  "@keyframes fadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }",
  "@keyframes slideInRight { from { opacity:0; transform:translateX(36px); } to { opacity:1; transform:translateX(0); } }",
  "@keyframes shake { 0%,100% { transform:translateX(0); } 20% { transform:translateX(-8px); } 40% { transform:translateX(8px); } 60% { transform:translateX(-5px); } 80% { transform:translateX(5px); } }",
  "@keyframes bounce { 0% { transform:scale(1); } 30% { transform:scale(1.04); } 60% { transform:scale(0.98); } 100% { transform:scale(1); } }",
  "@keyframes fillIn { from { opacity:0; transform:scale(1.15); } to { opacity:1; transform:scale(1); } }",
  "@keyframes glowPulse { 0%,100% { box-shadow:0 0 0 2px " + C.gold + ", 0 0 18px " + C.gold + "44; } 50% { box-shadow:0 0 0 3px " + C.gold + ", 0 0 28px " + C.gold + "77; } }",
  "@keyframes confettiFall { 0% { transform:translateY(0) rotate(0deg); opacity:1; } 100% { transform:translateY(105vh) rotate(720deg); opacity:0; } }",
  "@keyframes pulseProgress { 0%,100% { filter:brightness(1); } 50% { filter:brightness(1.3); box-shadow: 0 0 12px " + C.accent + "88; } }",
  // 选项卡片 hover/active 反馈 — 让用户感受到"可点击"（用 [attr=value] 无引号语法避开 SSR hydration）
  "button[data-option-btn]:hover:not(:disabled):not([data-selected=true]) { border-color: " + C.accent + "66 !important; background: " + C.accentLight + "55 !important; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(196,107,48,0.12) !important; }",
  "button[data-option-btn][data-selected=true]:not(:disabled) { border-color: " + C.accent + " !important; background: " + C.accentLight + " !important; box-shadow: 0 6px 16px rgba(196,107,48,0.25) !important; transform: scale(1.01); }",
  "button[data-option-btn][data-selected=true]:not(:disabled) [data-option-key] { background: " + C.accent + " !important; color: #fff !important; }",
  "@keyframes slideInFromRight { from { transform:translateX(100%); } to { transform:translateX(0); } }",
  "textarea:focus, input:focus, select:focus { border-color: " + C.accent + " !important; outline: none; box-shadow: 0 0 0 2px " + C.accent + "22; }",
  "button:hover:not(:disabled) { filter: brightness(0.96); }",
  "button:active:not(:disabled) { transform: scale(0.98); }",
  "button { transition: transform 0.1s ease, filter 0.15s ease, box-shadow 0.15s ease; }",
  "button:disabled { opacity: 0.45; cursor: not-allowed !important; }",
  "* { box-sizing: border-box; }",
  "@media (max-width: 480px) { .vs-task-grid { grid-template-columns: 1fr !important; } }",
  "@media (min-width: 768px) { .vs-desktop-container { max-width: 720px !important; padding-left: 24px !important; padding-right: 24px !important; } }",
  "@media (min-width: 1024px) { .vs-desktop-container { max-width: 780px !important; } }",
  "@keyframes skeletonPulse { 0% { opacity:0.4; } 50% { opacity:0.7; } 100% { opacity:0.4; } }",
  "@keyframes slideUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }",
  "@keyframes popIn { 0% { opacity:0; transform:scale(0.9); } 100% { opacity:1; transform:scale(1); } }",
  "@keyframes pulseGlow { 0%,100% { opacity:1; } 50% { opacity:0.7; } }",
  "@keyframes cursorBlink { 0%,50% { opacity:1; } 51%,100% { opacity:0; } }",
  // 答对视觉爆发：飘字弹出+上浮+淡出（cubic-bezier 实现"弹簧"感）
  "@keyframes rewardBurst { 0% { opacity:0; transform:translate(-50%,-30%) scale(0.4); } 25% { opacity:1; transform:translate(-50%,-50%) scale(1.15); } 60% { opacity:1; transform:translate(-50%,-55%) scale(1); } 100% { opacity:0; transform:translate(-50%,-90%) scale(0.95); } }",
  "@keyframes rewardFlash { 0% { opacity:0; } 20% { opacity:1; } 100% { opacity:0; } }",
  // 学习宠物动画：饿了发抖、开心时弹跳
  "@keyframes petShake { 0%,100% { transform:translateX(0) rotate(0); } 25% { transform:translateX(-2px) rotate(-3deg); } 75% { transform:translateX(2px) rotate(3deg); } }",
  "@keyframes petBounce { 0%,100% { transform:translateY(0) scale(1); } 50% { transform:translateY(-6px) scale(1.05); } }",
  "a { -webkit-tap-highlight-color: transparent; }",
  "input[type=number]::-webkit-inner-spin-button { opacity: 1; }"
].join("\n");

/* ─── Shared Style Objects ─── */
export var S = {
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
  tab:{flex:1,padding:"13px 4px",background:"transparent",border:"none",borderBottom:"2px solid transparent",fontFamily:FONT,fontSize:13,fontWeight:600,color:C.textSec,cursor:"pointer",textAlign:"center",whiteSpace:"nowrap"},
  tabActive:{flex:1,padding:"13px 4px",background:C.accentLight,border:"none",borderBottom:"2px solid "+C.accent,fontFamily:FONT,fontSize:13,fontWeight:600,color:C.accent,cursor:"pointer",textAlign:"center",whiteSpace:"nowrap"},
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
  progressFill:{height:"100%",background:"linear-gradient(90deg, "+C.accent+" 0%, "+C.gold+" 100%)",borderRadius:3,transition:"width 0.4s ease",boxShadow:"0 0 8px "+C.accent+"44"},
  progressText:{fontSize:13,color:C.textSec,fontWeight:600},
  xpBadge:{padding:"4px 10px",background:C.goldLight,borderRadius:12,fontSize:13,fontWeight:700,color:C.gold},
  settingsBtn:{padding:"5px 8px",background:"transparent",border:"1px solid "+C.border,borderRadius:8,fontSize:18,cursor:"pointer",color:C.textSec,lineHeight:1},
  wordHeader:{background:C.card,borderRadius:14,border:"1px solid "+C.border,padding:"18px 20px 14px",marginBottom:10,boxShadow:C.shadow,animation:"fadeUp 0.3s ease-out",display:"flex",justifyContent:"space-between",alignItems:"center"},
  wordTitle:{fontFamily:FONT_DISPLAY,fontSize:32,fontWeight:600,margin:0,letterSpacing:"-0.01em"},
  phoneticText:{fontSize:16,color:C.textSec,fontWeight:400,fontStyle:"italic"},
  streakBadge:{padding:"4px 12px",background:C.goldLight,borderRadius:16,fontSize:13,fontWeight:700,color:C.gold},
  card:{background:C.card,borderRadius:14,border:"1px solid "+C.border,padding:"20px",boxShadow:C.shadow,animation:"fadeUp 0.3s ease-out",marginBottom:10},
  tag:{display:"inline-block",padding:"4px 14px",background:C.accentLight,color:C.accent,borderRadius:20,fontSize:14,fontWeight:700,marginBottom:14},
  contextBox:{background:C.bg,borderRadius:10,padding:"16px 18px",marginBottom:16,borderLeft:"3px solid "+C.accent,fontSize:16,lineHeight:1.8,display:"flex",alignItems:"flex-start",gap:8},
  optionGrid:{display:"flex",flexDirection:"column",gap:8,marginBottom:14},
  optionBtn:{display:"flex",alignItems:"center",gap:12,padding:"14px 18px",background:"#ffffff",border:"1.5px solid "+C.border,borderRadius:12,fontFamily:FONT,fontSize:15,cursor:"pointer",textAlign:"left",transition:"transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease, background 0.15s ease",lineHeight:1.5,boxShadow:"0 1px 2px rgba(44,36,32,0.04)"},
  optionKey:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:28,height:28,borderRadius:"50%",background:C.border,fontWeight:700,fontSize:13,flexShrink:0,transition:"background 0.15s ease, color 0.15s ease"},
  hintBtn:{padding:"8px 16px",background:C.goldLight,border:"none",borderRadius:8,fontFamily:FONT,fontSize:14,cursor:"pointer",color:C.gold,fontWeight:600,marginBottom:14},
  resultBanner:{padding:"14px 18px",borderRadius:10,border:"1.5px solid",marginBottom:14,fontWeight:600,fontSize:15,animation:"fadeUp 0.3s ease-out"},
  btnRow:{display:"flex",gap:10,flexWrap:"wrap"},
  primaryBtn:{padding:"12px 24px",background:C.accent,color:"#fff",border:"none",borderRadius:10,fontFamily:FONT,fontSize:15,fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:8},
  ghostBtn:{padding:"12px 18px",background:"transparent",color:C.textSec,border:"1px solid "+C.border,borderRadius:10,fontFamily:FONT,fontSize:14,cursor:"pointer"},
  // 光谱挑战页面：从深色游戏风改为浅色统一风格（保留游戏感靠 chip + 颜色反馈）
  specCard:{background:C.card,borderRadius:14,border:"1px solid "+C.border,padding:"22px",boxShadow:C.shadow,animation:"fadeUp 0.3s ease-out",marginBottom:10,color:C.text,fontFamily:FONT},
  specTag:{display:"inline-block",padding:"4px 14px",background:C.greenLight,color:C.green,borderRadius:20,fontSize:14,fontWeight:700,marginBottom:10,fontFamily:FONT},
  specHint:{fontSize:14,color:C.accent,marginBottom:14,fontWeight:700},
  specScenario:{padding:"14px 16px",borderLeft:"3px solid "+C.accent,background:C.bg,borderRadius:"0 10px 10px 0",marginBottom:16,lineHeight:1.8,fontSize:15,color:C.text},
  specSlotRow:{display:"flex",gap:10,marginBottom:4},
  specSlot:{flex:1,height:60,display:"flex",alignItems:"center",justifyContent:"center",border:"2px dashed "+C.border,background:"#fff",borderRadius:12,fontSize:15,fontWeight:700,color:C.text,transition:"all 0.2s",boxShadow:"inset 0 1px 2px rgba(0,0,0,0.03)"},
  specPoolRow:{display:"flex",gap:10,marginBottom:16,minHeight:52,marginTop:14},
  specPoolBtn:{flex:1,background:"linear-gradient(135deg, "+C.accentLight+" 0%, "+C.goldLight+" 100%)",border:"1.5px solid "+C.accent+"44",color:C.accent,padding:"14px 0",borderRadius:12,cursor:"pointer",fontSize:16,fontWeight:700,fontFamily:FONT,boxShadow:"0 2px 8px rgba(196,107,48,0.12)",transition:"transform 0.15s ease, box-shadow 0.15s ease"},
  specCheckBtn:{width:"100%",background:"linear-gradient(135deg, "+C.accent+" 0%, #d4823d 100%)",color:"#fff",border:"none",padding:"16px",borderRadius:12,fontSize:16,fontWeight:700,cursor:"pointer",fontFamily:FONT,boxShadow:"0 4px 12px "+C.accent+"55"},
  specDecoded:{background:C.greenLight,padding:"16px",borderRadius:10,borderLeft:"3px solid "+C.green,marginTop:16,lineHeight:1.7,color:C.text},
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

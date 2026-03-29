/* ─── Know U. Learning — 共享导航栏组件 ─── */
import Link from 'next/link';
import { C, S, FONT } from '../lib/theme';

export var BrandUIcon = ({ size }) => {
  var s = size || 36;
  return (
    <img src="/logo.png" width={s} height={s} alt="Know U." style={{ objectFit:"contain", borderRadius:s > 40 ? 10 : 6, filter:"drop-shadow(0 2px 4px rgba(61,90,153,0.35)) drop-shadow(0 1px 2px rgba(204,107,40,0.2))" }} />
  );
};

export var BrandSparkIcon = ({ size, marginBottom }) => {
  var mb = marginBottom != null ? marginBottom : 14;
  var mbStr = typeof mb === "number" ? mb + "px" : mb;
  return (
    <div style={{ margin:"0 auto " + mbStr, display:"flex", justifyContent:"center" }}>
      <BrandUIcon size={size || 56} />
    </div>
  );
};

export var BrandNavBar = ({ activeTab, stats, studyStreak }) => {
  activeTab = activeTab || "vocab";
  var pct = stats && stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
  var hasStats = stats && stats.xp > 0;
  var hasStreak = studyStreak && studyStreak.streak > 0;

  var tabStyle = function(tab) {
    var isActive = tab === activeTab;
    return {
      textDecoration: "none",
      fontWeight: 700,
      fontSize: 13,
      color: isActive ? C.accent : C.textSec,
      borderBottom: isActive ? "2px solid " + C.accent : "2px solid transparent",
      paddingBottom: 2,
    };
  };

  return (
  <div style={{ background:C.card, marginBottom:0, borderRadius:"0 0 16px 16px", boxShadow:"0 4px 16px rgba(44,36,32,0.08)" }}>
    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 16px" }}>
      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
        <BrandUIcon size={38} />
        <div>
          <div style={{ fontSize:15, letterSpacing:"-0.02em", lineHeight:1.1 }}><span style={{ fontWeight:800, color:C.text, textShadow:"0 1px 2px rgba(44,36,32,0.15)" }}>Know U.</span><span style={{ fontWeight:500, color:C.textSec, marginLeft:4, textShadow:"0 1px 1px rgba(44,36,32,0.08)" }}>Learning</span></div>
          <div style={{ fontSize:10, color:C.textSec, opacity:0.7, letterSpacing:"0.02em", marginTop:1 }}>Your 1-on-1 AI English Tutor</div>
        </div>
      </div>
      <div style={{ display:"flex", alignItems:"center", gap:12 }}>
        <Link href="/" style={tabStyle("vocab")}>Vocab</Link>
        <Link href="/writing" style={tabStyle("writing")}>Writing <span style={{fontSize:8,fontWeight:700,color:"#fff",background:C.accent,borderRadius:3,padding:"1px 4px",marginLeft:2,verticalAlign:"middle"}}>Beta</span></Link>
        <Link href="/plan" style={{...tabStyle("plan"), fontSize:12}}>Plan</Link>
      </div>
    </div>
    {(hasStats || hasStreak) && (
      <div style={{ display:"flex", gap:6, flexWrap:"wrap", padding:"0 16px 10px" }}>
        {hasStats && <span style={{...S.heroStatPillGold, padding:"4px 10px", fontSize:11}}>{"⚡ " + stats.xp + " XP"}</span>}
        {hasStreak && <span style={{...S.heroStatPillAccent, padding:"4px 10px", fontSize:11}}>{"🔥 连续 " + studyStreak.streak + " 天" + (studyStreak.todayDone ? " ✓" : "")}</span>}
        {hasStats && <span style={{...S.heroStatPillGreen, padding:"4px 10px", fontSize:11}}>{"✅ 正确率 " + pct + "%"}</span>}
      </div>
    )}
  </div>
  );
};

export var AppHeroHeader = ({ stats, studyStreak }) => (
  <BrandNavBar activeTab="vocab" stats={stats} studyStreak={studyStreak} />
);

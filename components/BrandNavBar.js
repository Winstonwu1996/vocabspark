/* ─── Know U. Learning — 共享导航栏组件 ─── */
import Link from 'next/link';
import { C, S, FONT } from '../lib/theme';
import { UserAvatar } from './UserCenter';

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

export var BrandNavBar = ({ activeTab, stats, studyStreak, user, onUserCenterClick, syncStatus, compact }) => {
  activeTab = activeTab || "vocab";
  var pct = stats && stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
  // compact 模式下不显示底部 pills（避免跟 vocab 页的"我的小本本"卡信息重复）
  var hasStats = !compact && stats && stats.xp > 0;
  var hasStreak = !compact && studyStreak && studyStreak.streak > 0;

  // pill 段控件样式 — 跟下方 5 tab 视觉统一
  var tabStyle = function(tab) {
    var isActive = tab === activeTab;
    return {
      textDecoration: "none",
      fontWeight: isActive ? 700 : 600,
      fontSize: 12.5,
      color: isActive ? C.accent : C.textSec,
      padding: "6px 12px",
      borderRadius: 8,
      background: isActive ? C.card : "transparent",
      boxShadow: isActive ? "0 1px 3px rgba(0,0,0,0.08), 0 0 0 1px " + C.border : "none",
      whiteSpace: "nowrap",
      transition: "all 0.18s",
    };
  };
  // 容器样式：浅灰胶囊容器
  var tabsContainer = {
    display: "inline-flex",
    background: "rgba(0,0,0,0.04)",
    borderRadius: 10,
    padding: 3,
    gap: 2,
  };

  return (
  <div className="brand-navbar" style={{ background:C.card, marginBottom:0, borderRadius:"0 0 16px 16px", boxShadow:"0 4px 16px rgba(44,36,32,0.08)" }}>
    <style>{`
      .brand-navbar .brand-tagline { display: none; }
      .brand-navbar .brand-wordmark { white-space: nowrap; }
      @media (min-width: 640px) {
        .brand-navbar .brand-tagline { display: block; }
      }
      .brand-navbar .nav-tabs-row {
        display: flex;
        align-items: center;
        gap: 14px;
        padding: 0 16px 10px;
        border-top: 1px solid ${C.border};
        padding-top: 8px;
        margin-top: 4px;
      }
      @media (min-width: 640px) {
        .brand-navbar .nav-tabs-row {
          border-top: none;
          padding-top: 0;
          margin-top: 0;
          padding: 0;
          gap: 12px;
        }
        .brand-navbar .nav-tabs-wrap { display: flex; align-items: center; gap: 12px; }
      }
    `}</style>
    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 16px" }}>
      <Link href="/" title="返回首页" style={{ display:"flex", alignItems:"center", gap:8, textDecoration:"none", minWidth:0, flex:"0 1 auto" }}>
        <BrandUIcon size={36} />
        <div style={{ minWidth:0 }}>
          <div className="brand-wordmark" style={{ fontSize:15, letterSpacing:"-0.02em", lineHeight:1.1 }}>
            <span style={{ fontWeight:800, color:C.text, textShadow:"0 1px 2px rgba(44,36,32,0.15)" }}>Know U.</span>
            <span style={{ fontWeight:500, color:C.textSec, marginLeft:4, textShadow:"0 1px 1px rgba(44,36,32,0.08)" }}>Learning</span>
          </div>
          <div className="brand-tagline" style={{ fontSize:10, color:C.textSec, opacity:0.7, letterSpacing:"0.02em", marginTop:1, whiteSpace:"nowrap" }}>Personal AI Language Tutor</div>
        </div>
      </Link>
      <div className="nav-tabs-wrap" style={{ display:"flex", alignItems:"center", gap:10, flex:"0 0 auto" }}>
        {/* 桌面端：pill 段控件容器 */}
        <div className="desktop-tab" style={{ ...tabsContainer, display:"none" }}>
          <Link href="/vocab" style={tabStyle("vocab")}>Vocab</Link>
          <Link href="/writing" style={tabStyle("writing")}>Writing<sup style={{fontSize:8,color:C.purple,fontWeight:700,marginLeft:1}}>Beta</sup></Link>
          <span style={{ ...tabStyle("reading"), opacity:0.5, cursor:"default" }}>Reading<sup style={{fontSize:8,color:C.teal,fontWeight:700,marginLeft:1}}>Soon</sup></span>
        </div>
        {syncStatus && syncStatus !== "idle" && user && (
          <span style={{ fontSize:10, color: syncStatus === "error" ? "#e53e3e" : syncStatus === "synced" ? "#22a06b" : C.textSec, fontWeight:600, opacity: syncStatus === "synced" ? 0.6 : 1 }}>
            {syncStatus === "syncing" ? "⟳" : syncStatus === "synced" ? "✓" : syncStatus === "error" ? "⚠" : ""}
          </span>
        )}
        <button onClick={onUserCenterClick} style={{ marginLeft:2, cursor:"pointer", background:"transparent", border:"none", padding:0, lineHeight:0 }} aria-label="用户中心">
          <UserAvatar user={user} size={32} />
        </button>
      </div>
    </div>
    {/* 移动端 tabs 单独一行，桌面隐藏 — pill 段控件 */}
    <div className="mobile-tabs-row" style={{ padding:"4px 16px 10px" }}>
      <div style={tabsContainer}>
        <Link href="/vocab" style={tabStyle("vocab")}>Vocab</Link>
        <Link href="/writing" style={tabStyle("writing")}>Writing<sup style={{fontSize:8,color:C.purple,fontWeight:700,marginLeft:1}}>Beta</sup></Link>
        <span style={{ ...tabStyle("reading"), opacity:0.5, cursor:"default" }}>Reading<sup style={{fontSize:8,color:C.teal,fontWeight:700,marginLeft:1}}>Soon</sup></span>
      </div>
    </div>
    <style>{`
      @media (min-width: 640px) {
        .brand-navbar .mobile-tabs-row { display: none !important; }
        .brand-navbar .desktop-tab { display: inline-flex !important; }
      }
    `}</style>
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

export var AppHeroHeader = ({ stats, studyStreak, user, onUserCenterClick, syncStatus }) => (
  <BrandNavBar activeTab="vocab" stats={stats} studyStreak={studyStreak} user={user} onUserCenterClick={onUserCenterClick} syncStatus={syncStatus} compact />
);

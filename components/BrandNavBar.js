/* ─── Know U. Learning — 共享导航栏组件 ─── */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { C, S, FONT, FONT_DISPLAY } from '../lib/theme';
import { UserAvatar } from './UserCenter';

/* ─── 同步状态徽章：醒目 + 显示"最近同步时间" = 用户安全感 ─── */
var formatSyncAgo = function (ts) {
  if (!ts) return "";
  var s = Math.floor((Date.now() - ts) / 1000);
  if (s < 60) return "刚刚";
  var m = Math.floor(s / 60);
  if (m < 60) return m + " 分钟前";
  var h = Math.floor(m / 60);
  if (h < 24) return h + " 小时前";
  return Math.floor(h / 24) + " 天前";
};

export var SyncStatusBadge = ({ status, lastSyncAt, onRetry }) => {
  // 每 30s 触发一次 re-render，让"X 分钟前"自动走时
  var [, setTick] = useState(0);
  useEffect(function () {
    var t = setInterval(function () { setTick(function (x) { return x + 1; }); }, 30000);
    return function () { clearInterval(t); };
  }, []);

  var isError = status === "error";
  var isSyncing = status === "syncing";
  var icon = isSyncing ? "↻" : isError ? "⚠" : "✓";
  var color = isError ? "#e53e3e" : isSyncing ? "#3d6baf" : "#22a06b";
  var bg = isError ? "rgba(229,62,62,0.10)" : isSyncing ? "rgba(90,130,200,0.10)" : "rgba(34,160,107,0.10)";
  var label = isSyncing ? "同步中…" : isError ? "未同步" : "已同步";
  var ago = (!isSyncing && !isError && lastSyncAt) ? formatSyncAgo(lastSyncAt) : (isError ? "点击重试" : "");

  return (
    <button
      onClick={isError && onRetry ? onRetry : undefined}
      title={isError ? "同步未完成，点击重试" : isSyncing ? "正在把进度同步到云端" : (lastSyncAt ? "进度已云端备份，最近同步 " + formatSyncAgo(lastSyncAt) : "进度会自动云端备份")}
      style={{
        display: "inline-flex", alignItems: "center", gap: 5,
        background: bg, color: color, border: "none", borderRadius: 14,
        padding: "5px 10px", fontSize: 12, fontWeight: 600, fontFamily: FONT,
        cursor: isError ? "pointer" : "default", whiteSpace: "nowrap",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <span style={{ fontSize: 13, fontWeight: 700, lineHeight: 1, animation: isSyncing ? "spin 1s linear infinite" : "none" }}>{icon}</span>
      <span className="sync-badge-label">{label}</span>
      {ago && <span className="sync-badge-ago" style={{ opacity: 0.7 }}>· {ago}</span>}
    </button>
  );
};

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

export var BrandNavBar = ({ activeTab, stats, studyStreak, user, onUserCenterClick, syncStatus, lastSyncAt, onSyncRetry, compact }) => {
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
      @keyframes spin { to { transform: rotate(360deg); } }
      /* 手机空间紧：隐藏"· X 分钟前"，只留"✓ 已同步"（安全感仍在，不挤）*/
      .brand-navbar .sync-badge-ago { display: none; }
      @media (min-width: 480px) {
        .brand-navbar .sync-badge-ago { display: inline; }
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
          <div className="brand-wordmark" style={{ fontSize:16, letterSpacing:"-0.02em", lineHeight:1.1, fontFamily:FONT_DISPLAY }}>
            <span style={{ fontWeight:700, color:C.text, textShadow:"0 1px 2px rgba(44,36,32,0.15)" }}>Know U.</span>
            <span style={{ fontWeight:400, color:C.textSec, marginLeft:4, textShadow:"0 1px 1px rgba(44,36,32,0.08)" }}>Learning</span>
          </div>
          <div className="brand-tagline" style={{ fontSize:10, color:C.textSec, opacity:0.7, letterSpacing:"0.02em", marginTop:1, whiteSpace:"nowrap" }}>Personal AI Language Tutor</div>
        </div>
      </Link>
      <div className="nav-tabs-wrap" style={{ display:"flex", alignItems:"center", gap:10, flex:"0 0 auto" }}>
        {/* 桌面端：pill 段控件容器 */}
        <div className="desktop-tab" style={{ ...tabsContainer, display:"none" }}>
          <Link href="/vocab" style={tabStyle("vocab")}>Vocab</Link>
          <Link href="/writing" style={tabStyle("writing")}>Writing<sup style={{fontSize:8,color:C.purple,fontWeight:700,marginLeft:1}}>Beta</sup></Link>
          <Link href="/atlas-lab" style={tabStyle("history")}>History<sup style={{fontSize:8,color:C.purple,fontWeight:700,marginLeft:1}}>Beta</sup></Link>
          <span style={{ ...tabStyle("reading"), opacity:0.5, cursor:"default" }}>Reading<sup style={{fontSize:8,color:C.teal,fontWeight:700,marginLeft:1}}>Soon</sup></span>
        </div>
        {user && syncStatus && (
          <SyncStatusBadge status={syncStatus} lastSyncAt={lastSyncAt} onRetry={onSyncRetry} />
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
        <Link href="/atlas-lab" style={tabStyle("history")}>History<sup style={{fontSize:8,color:C.purple,fontWeight:700,marginLeft:1}}>Beta</sup></Link>
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

export var AppHeroHeader = ({ stats, studyStreak, user, onUserCenterClick, syncStatus, lastSyncAt, onSyncRetry }) => (
  <BrandNavBar activeTab="vocab" stats={stats} studyStreak={studyStreak} user={user} onUserCenterClick={onUserCenterClick} syncStatus={syncStatus} lastSyncAt={lastSyncAt} onSyncRetry={onSyncRetry} compact />
);

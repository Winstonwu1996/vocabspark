/* ─── Know U. Learning — 用户中心侧边抽屉 ─── */
import Link from 'next/link';
import { C, FONT, S } from '../lib/theme';

var UserAvatar = ({ user, size }) => {
  var s = size || 36;
  if (!user) return (
    <div style={{ width:s, height:s, borderRadius:"50%", background:C.border, display:"flex", alignItems:"center", justifyContent:"center", fontSize:s*0.45, color:C.textSec, cursor:"pointer", flexShrink:0 }}>👤</div>
  );
  var initial = (user.email || "U")[0].toUpperCase();
  return (
    <div style={{ width:s, height:s, borderRadius:"50%", background:"linear-gradient(135deg, "+C.accent+" 0%, "+C.gold+" 100%)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:s*0.42, fontWeight:800, color:"#fff", cursor:"pointer", flexShrink:0, fontFamily:FONT, textShadow:"0 1px 2px rgba(0,0,0,0.2)" }}>{initial}</div>
  );
};

export { UserAvatar };

export default function UserCenter({ open, onClose, user, stats, studyStreak, studyGoal, dailyNewWords, deepReviewDailyCap, userTier, onLogin, onLogout }) {
  if (!open) return null;
  var pct = stats && stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
  var goalLabel = "";
  var GOALS = { ssat:"备考 SSAT", isee:"备考 ISEE", sat:"备考 SAT", toefl:"备考 TOEFL", ielts:"备考 IELTS", other:"其他目标" };
  if (studyGoal) goalLabel = GOALS[studyGoal] || studyGoal;

  // 根据订阅等级显示 Badge
  var tier = userTier || "free";
  var tierConfig = {
    pro: { label: "✨ Pro 会员", bg: "linear-gradient(135deg, #c46b30 0%, #c8922e 100%)", color: "#fff", border: "transparent" },
    basic: { label: "🎯 Basic 会员", bg: C.goldLight, color: C.gold, border: C.gold + "44" },
    free: { label: "Free · 推广期", bg: C.accentLight, color: C.accent, border: C.accent + "33" },
  };
  var badge = tierConfig[tier] || tierConfig.free;
  var isPaid = tier === "pro" || tier === "basic";

  var Section = ({ title, children }) => (
    <div style={{ marginBottom:16 }}>
      <div style={{ fontSize:11, fontWeight:700, color:C.textSec, textTransform:"uppercase", letterSpacing:"0.05em", marginBottom:8, paddingBottom:4, borderBottom:"1px solid "+C.border }}>{title}</div>
      {children}
    </div>
  );

  var Row = ({ icon, label, value, href, onClick }) => {
    var content = (
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"8px 0", cursor: (href || onClick) ? "pointer" : "default" }} onClick={onClick}>
        <span style={{ fontSize:14, color:C.text }}>{icon} {label}</span>
        <span style={{ fontSize:13, color: href ? C.accent : C.textSec, fontWeight: href ? 600 : 400 }}>{value || ""}{href ? " →" : ""}</span>
      </div>
    );
    if (href) return <Link href={href} style={{ textDecoration:"none" }}>{content}</Link>;
    return content;
  };

  return (
    <>
      {/* Overlay */}
      <div style={{ position:"fixed", top:0, left:0, right:0, bottom:0, background:C.overlay, backdropFilter:"blur(4px)", WebkitBackdropFilter:"blur(4px)", zIndex:2000 }} onClick={onClose} />
      {/* Drawer */}
      <div style={{ position:"fixed", top:0, right:0, bottom:0, width:"min(320px, 85vw)", background:C.card, zIndex:2001, boxShadow:"-8px 0 30px rgba(0,0,0,0.15)", fontFamily:FONT, overflowY:"auto", animation:"slideInFromRight 0.25s ease-out" }}>
        <div style={{ padding:"20px 20px 24px" }}>
          {/* Close */}
          <button onClick={onClose} style={{ background:"transparent", border:"none", fontSize:20, color:C.textSec, cursor:"pointer", padding:"4px 8px", marginBottom:12, fontFamily:FONT }}>← 关闭</button>

          {user ? (
            <>
              {/* Logged-in Header */}
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:16 }}>
                <UserAvatar user={user} size={52} />
                <div>
                  <div style={{ fontSize:15, fontWeight:700, color:C.text }}>{user.user_metadata?.name || user.email?.split("@")[0] || "学习者"}</div>
                  <div style={{ fontSize:12, color:C.textSec }}>{user.email}</div>
                </div>
              </div>

              {/* Level Badge */}
              <div style={{ display:"inline-block", padding:"4px 12px", borderRadius:20, fontSize:12, fontWeight:700, background:badge.bg, color:badge.color, border:"1px solid "+badge.border, marginBottom:16 }}>{badge.label}</div>
              {isPaid && <div style={{ fontSize:11, color:C.textSec, marginBottom:16, marginTop:-10 }}>每日学习无限制 · 谢谢你的支持 ❤️</div>}

              {/* Quick Stats */}
              <div style={{ display:"flex", gap:8, marginBottom:20 }}>
                <div style={{ flex:1, textAlign:"center", padding:"8px 4px", background:C.goldLight, borderRadius:8 }}>
                  <div style={{ fontSize:16, fontWeight:800, color:C.gold }}>⚡ {stats?.xp || 0}</div>
                  <div style={{ fontSize:10, color:C.textSec }}>XP</div>
                </div>
                <div style={{ flex:1, textAlign:"center", padding:"8px 4px", background:C.accentLight, borderRadius:8 }}>
                  <div style={{ fontSize:16, fontWeight:800, color:C.accent }}>🔥 {studyStreak?.streak || 0}</div>
                  <div style={{ fontSize:10, color:C.textSec }}>连续天数</div>
                </div>
                <div style={{ flex:1, textAlign:"center", padding:"8px 4px", background:C.greenLight, borderRadius:8 }}>
                  <div style={{ fontSize:16, fontWeight:800, color:C.green }}>✅ {pct}%</div>
                  <div style={{ fontSize:10, color:C.textSec }}>正确率</div>
                </div>
              </div>

              {/* Learning Settings */}
              <Section title="学习设定">
                <Row icon="🎯" label="考试方向" value={goalLabel || "未设置"} href="/vocab" />
                <Row icon="📖" label="每日新词目标" value={(dailyNewWords || 10) + " 词"} />
                <Row icon="🔴" label="每日复习目标" value={(deepReviewDailyCap || 5) + " 词"} />
              </Section>

              {/* Courses */}
              <Section title="我的课程">
                <Row icon="📖" label="Vocab · 词汇课" href="/vocab" value="进入" />
                <Row icon="✍️" label="Writing · 写作课" href="/writing" value="Beta" />
                <Row icon="📚" label="Reading · 阅读课" value="即将上线" />
              </Section>

              {/* Account */}
              <Section title="账户管理">
                <Row icon="🌟" label="升级方案" href="/plan" value="查看" />
                <Row icon="🔒" label="隐私声明" href="/vocab" />
              </Section>

              {/* Logout */}
              <div style={{ marginTop:24, paddingTop:16, borderTop:"1px solid "+C.border }}>
                <button onClick={onLogout} style={{ background:"transparent", border:"none", color:C.red, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:FONT, padding:"8px 0" }}>退出登录</button>
              </div>
            </>
          ) : (
            <>
              {/* Guest View */}
              <div style={{ textAlign:"center", marginBottom:20 }}>
                <UserAvatar size={64} />
                <h3 style={{ fontSize:18, fontWeight:700, margin:"12px 0 4px", color:C.text }}>登录 / 注册</h3>
                <p style={{ fontSize:13, color:C.textSec, margin:0 }}>免费注册，解锁完整学习体验</p>
              </div>

              <div style={{ background:C.tealLight, borderRadius:10, padding:"12px 14px", marginBottom:20, fontSize:13, lineHeight:1.8, color:C.text }}>
                <div style={{ fontSize:12, color:C.teal, fontWeight:700, marginBottom:4 }}>注册后解锁</div>
                📖 词汇·阅读·写作 三合一 AI 私教<br/>
                🔓 每日学习量翻倍（游客仅 5 词/天）<br/>
                ☁️ 进度云端同步，换设备不丢<br/>
                📊 完整学习统计与智能复习日程
              </div>

              <button onClick={onLogin} style={{ ...S.bigBtn, marginBottom:16 }}>登录 / 注册</button>

              <Section title="体验课程">
                <Row icon="📖" label="Vocab · 词汇课" href="/vocab" value="免费体验" />
                <Row icon="✍️" label="Writing · 写作课" href="/writing" value="免费体验" />
                <Row icon="📚" label="Reading · 阅读课" value="即将上线" />
              </Section>
            </>
          )}
        </div>
      </div>
    </>
  );
}

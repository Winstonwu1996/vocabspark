/* ─── Know U. Learning — 用户中心侧边抽屉 ─── */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { C, FONT, S } from '../lib/theme';
import { supabase } from '../lib/supabase';
import { trackFunnel } from '../lib/analytics';
import FAQPanel from './FAQPanel';

// ─── 数据与隐私：导出 / 删除账号 ─────────────────────────────────────────────
// 取当前 session 的 access token（导出 / 删除都需要 Bearer 认证）
async function getAuthToken() {
  try {
    var { data } = await supabase.auth.getSession();
    return data?.session?.access_token || null;
  } catch (e) {
    return null;
  }
}

// 触发浏览器下载
function triggerDownload(blob, filename) {
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(function () {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}

async function handleExportData() {
  var token = await getAuthToken();
  if (!token) {
    alert('登录状态已过期，请重新登录后再导出。');
    return;
  }
  try {
    var resp = await fetch('/api/export', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
    });
    if (!resp.ok) {
      var errBody = null;
      try { errBody = await resp.json(); } catch (e) {}
      alert('导出失败：' + ((errBody && errBody.error) || resp.status));
      return;
    }
    var blob = await resp.blob();
    // 从 Content-Disposition 取 filename，否则用兜底
    var cd = resp.headers.get('Content-Disposition') || '';
    var match = cd.match(/filename="?([^";]+)"?/i);
    var filename = (match && match[1]) ||
      ('knowu-data-' + new Date().toISOString().slice(0, 10) + '.json');
    triggerDownload(blob, filename);
  } catch (e) {
    alert('导出失败：' + (e.message || e));
  }
}

async function handleDeleteAccount(user) {
  if (!user || !user.email) {
    alert('无法确认账号信息，请重新登录。');
    return;
  }
  // 第一次确认
  var ok1 = window.confirm(
    '⚠️ 此操作不可逆。\n\n你的全部学习数据（词汇进度、复习日程、统计、反馈）和账号本身将被永久删除，且无法恢复。\n\n继续吗？'
  );
  if (!ok1) return;

  // 第二次输入邮箱
  var typed = window.prompt(
    '为防止误操作，请完整输入你的邮箱以确认删除：\n\n' + user.email,
    ''
  );
  if (typed == null) return; // 用户取消
  if (String(typed).trim().toLowerCase() !== String(user.email).trim().toLowerCase()) {
    alert('邮箱不匹配，删除已取消。');
    return;
  }

  var token = await getAuthToken();
  if (!token) {
    alert('登录状态已过期，请重新登录后再操作。');
    return;
  }

  try {
    var resp = await fetch('/api/delete-account', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
      body: JSON.stringify({ confirmEmail: typed }),
    });
    var body = null;
    try { body = await resp.json(); } catch (e) {}
    if (!resp.ok) {
      alert('删除失败：' + ((body && body.error) || resp.status) +
        '\n\n如需协助请邮件联系 chompcloud@gmail.com');
      return;
    }
    // 清本地状态 + 跳首页
    try { await supabase.auth.signOut(); } catch (e) {}
    try {
      // 清掉所有 knowu / vocab 相关的 localStorage（保守起见全清）
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.clear();
      }
    } catch (e) {}
    alert((body && body.message) || '账号已永久删除。');
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  } catch (e) {
    alert('删除失败：' + (e.message || e) + '\n\n如需协助请邮件联系 chompcloud@gmail.com');
  }
}

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

export default function UserCenter({ open, onClose, user, stats, studyStreak, studyGoal, dailyNewWords, deepReviewDailyCap, userTier, newLearnedToday, onLogin, onLogout }) {
  var [faqOpen, setFaqOpen] = useState(false);

  // ── 家长邮箱设置（Phase B2）──
  var [parentEmail, setParentEmail] = useState('');
  var [parentEmailSubscribed, setParentEmailSubscribed] = useState(true);
  var [parentEmailEdit, setParentEmailEdit] = useState(false);
  var [parentEmailSaving, setParentEmailSaving] = useState(false);
  var [parentEmailMsg, setParentEmailMsg] = useState('');
  useEffect(function() {
    if (user && user.user_metadata) {
      setParentEmail(user.user_metadata.parent_email || '');
      setParentEmailSubscribed(user.user_metadata.parent_email_subscribed !== false);
    }
  }, [user]);
  var saveParentEmail = async function() {
    setParentEmailSaving(true);
    setParentEmailMsg('');
    try {
      var emailToSave = (parentEmail || '').trim();
      if (emailToSave && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailToSave)) {
        setParentEmailMsg('邮箱格式不对');
        setParentEmailSaving(false);
        return;
      }
      var { error } = await supabase.auth.updateUser({
        data: {
          parent_email: emailToSave || null,
          parent_email_subscribed: parentEmailSubscribed,
        },
      });
      if (error) throw error;
      setParentEmailMsg('已保存 ✓');
      setParentEmailEdit(false);
      setTimeout(function() { setParentEmailMsg(''); }, 3000);
    } catch (e) {
      setParentEmailMsg('保存失败：' + (e.message || ''));
    }
    setParentEmailSaving(false);
  };
  // A11y：ESC 关闭抽屉（键盘用户）
  useEffect(function () {
    if (!open) return;
    var onKey = function (e) { if (e.key === 'Escape') onClose && onClose(); };
    window.addEventListener('keydown', onKey);
    return function () { window.removeEventListener('keydown', onKey); };
  }, [open, onClose]);
  if (!open) return null;

  // 漏斗：登录/退出/注册（注册由 onLogin 触发跳转 → 跳转目标页处理）
  var handleLoginClick = function() {
    trackFunnel('user_center_login_click', { has_user: !!user });
    if (typeof onLogin === 'function') onLogin();
  };
  var handleLogoutClick = function() {
    trackFunnel('user_center_logout_click', { email_domain: (user && user.email && user.email.split('@')[1]) || null });
    if (typeof onLogout === 'function') onLogout();
  };
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

              {/* Today's Progress */}
              {(dailyNewWords || 0) > 0 && (
                <div style={{ background:C.accentLight, border:"1px solid "+C.accent+"33", borderRadius:10, padding:"10px 12px", marginBottom:16 }}>
                  <div style={{ fontSize:11, fontWeight:700, color:C.accent, marginBottom:6 }}>📅 今日新词进度</div>
                  <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                    <div style={{ flex:1, height:8, background:"#fff", borderRadius:4, overflow:"hidden" }}>
                      <div style={{ height:"100%", width:Math.min(100, ((newLearnedToday||0)/Math.max(1,dailyNewWords))*100)+"%", background:"linear-gradient(90deg,"+C.accent+","+C.gold+")", borderRadius:4, transition:"width 0.3s" }} />
                    </div>
                    <div style={{ fontSize:13, fontWeight:700, color:C.accent, minWidth:50, textAlign:"right" }}>
                      {newLearnedToday||0} / {dailyNewWords}
                    </div>
                  </div>
                  {(newLearnedToday||0) < dailyNewWords && <div style={{ fontSize:10, color:C.textSec, marginTop:4 }}>还差 {dailyNewWords - (newLearnedToday||0)} 词达成今日目标 💪</div>}
                  {(newLearnedToday||0) >= dailyNewWords && <div style={{ fontSize:10, color:C.green, marginTop:4, fontWeight:600 }}>✨ 今日目标已达成，超额学习会记录为额外进度</div>}
                </div>
              )}

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
                {!isPaid && (
                  <Link href="/plan" style={{ textDecoration:"none", display:"block" }}>
                    <div style={{ background:"linear-gradient(135deg, "+C.gold+" 0%, "+C.accent+" 100%)", borderRadius:10, padding:"12px 14px", marginBottom:8, color:"#fff", boxShadow:"0 4px 12px "+C.gold+"55", cursor:"pointer", transition:"transform 0.15s" }} onMouseEnter={function(e){e.currentTarget.style.transform="translateY(-1px)";}} onMouseLeave={function(e){e.currentTarget.style.transform="translateY(0)";}}>
                      <div style={{ fontSize:13, fontWeight:800, marginBottom:2 }}>✨ 升级 Pro · 解锁无限</div>
                      <div style={{ fontSize:11, opacity:0.9 }}>每天 1 小时不够？$20/月解锁全部 →</div>
                    </div>
                  </Link>
                )}
                {isPaid && <Row icon="🌟" label="订阅方案" href="/plan" value="管理" />}
                <Row icon="🔒" label="隐私声明" href="/vocab" />
              </Section>

              {/* FAQ — 常见问题入口 */}
              <Section title="帮助与支持">
                <Row icon="❓" label="常见问题" value="查看 →" onClick={function() { trackFunnel('faq_open', { source: 'user_center' }); setFaqOpen(true); }} />
              </Section>

              {/* Parent Benchmark — Phase B2 */}
              <Section title="爸妈周报">
                <div style={{ padding:"10px 0", fontSize:12, color:C.textSec, lineHeight:1.55 }}>
                  每周一早 8 点给爸妈邮箱发一封周报：
                  <br/>· 这周学了啥、卡在哪、晚饭桌可以问她什么
                  <br/>· 没学习就发"唤醒邮件"含具体回归 hook
                  <br/>· 不影响孩子端体验 — 给爸妈的并行轨道
                </div>

                {/* 隐私承诺 — 给孩子看的（核心信任建立点）*/}
                <div style={{
                  padding:"12px 14px", marginTop:6, marginBottom:8,
                  background:C.greenLight, borderRadius:10,
                  border:"1px solid "+C.green+"33",
                  fontSize:12, lineHeight:1.7, color:C.text
                }}>
                  <div style={{ fontSize:13, fontWeight:700, color:C.green, marginBottom:6 }}>
                    🔒 我们对你的隐私承诺
                  </div>
                  <div style={{ marginBottom:4 }}>
                    <strong style={{color:C.green}}>✅ 爸妈能看到</strong>：
                    <span style={{color:C.textSec}}>完成度、卡点提示、晚饭桌可问的具体题目（统计层）</span>
                  </div>
                  <div style={{ marginBottom:4 }}>
                    <strong style={{color:"#b35543"}}>❌ 爸妈看不到</strong>：
                    <span style={{color:C.textSec}}>你和 AI 老师的聊天内容</span>
                  </div>
                  <div style={{ marginBottom:4 }}>
                    <strong style={{color:"#b35543"}}>❌ 爸妈看不到</strong>：
                    <span style={{color:C.textSec}}>你的个人设置（兴趣、目标、profile）</span>
                  </div>
                  <div style={{ marginBottom:4 }}>
                    <strong style={{color:"#b35543"}}>❌ 爸妈看不到</strong>：
                    <span style={{color:C.textSec}}>你按"我累了 / 我没懂 / 跳过"按钮的次数</span>
                  </div>
                  <div style={{ fontSize:11, color:C.textSec, marginTop:6, fontStyle:"italic" }}>
                    周报是从你的学习统计自动生成的——任何时候你都可以暂停 / 取消订阅。
                  </div>
                </div>

                {!parentEmailEdit ? (
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 0", borderTop:"1px solid "+C.divider }}>
                    <div>
                      <div style={{ fontSize:13, fontWeight:600, color:C.text }}>
                        📧 {parentEmail || "（未设置）"}
                      </div>
                      <div style={{ fontSize:11, color:C.textSec, marginTop:2 }}>
                        {parentEmail ? (parentEmailSubscribed ? "✓ 已订阅周报" : "⏸ 已暂停") : "添加家长邮箱后开始接收"}
                      </div>
                    </div>
                    <button onClick={function(){ setParentEmailEdit(true); }} style={{ padding:"4px 10px", border:"1px solid "+C.border, borderRadius:8, background:"#fff", fontSize:11.5, color:C.accent, cursor:"pointer", fontFamily:"inherit" }}>
                      {parentEmail ? "修改" : "添加"}
                    </button>
                  </div>
                ) : (
                  <div style={{ padding:"10px 0", borderTop:"1px solid "+C.divider }}>
                    <input
                      type="email"
                      value={parentEmail}
                      onChange={function(e){ setParentEmail(e.target.value); }}
                      placeholder="爸妈的邮箱（如 dad@example.com）"
                      style={{ width:"100%", padding:"8px 10px", border:"1px solid "+C.border, borderRadius:8, fontSize:13, fontFamily:"inherit", marginBottom:8 }}
                    />
                    <label style={{ display:"flex", alignItems:"center", gap:6, fontSize:12, color:C.textSec, marginBottom:10, cursor:"pointer" }}>
                      <input type="checkbox" checked={parentEmailSubscribed} onChange={function(e){ setParentEmailSubscribed(e.target.checked); }} />
                      订阅周一周报
                    </label>
                    <div style={{ display:"flex", gap:6 }}>
                      <button onClick={saveParentEmail} disabled={parentEmailSaving} style={{ flex:1, padding:"6px 10px", background:C.accent, color:"#fff", border:"none", borderRadius:8, fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:"inherit", opacity: parentEmailSaving ? 0.5 : 1 }}>
                        {parentEmailSaving ? "保存中..." : "保存"}
                      </button>
                      <button onClick={function(){ setParentEmailEdit(false); }} style={{ padding:"6px 10px", background:"transparent", color:C.textSec, border:"1px solid "+C.border, borderRadius:8, fontSize:12, cursor:"pointer", fontFamily:"inherit" }}>
                        取消
                      </button>
                    </div>
                    {parentEmailMsg && <div style={{ marginTop:6, fontSize:11.5, color: parentEmailMsg.indexOf('失败') >= 0 ? C.accent : C.green }}>{parentEmailMsg}</div>}
                  </div>
                )}
              </Section>

              {/* Data & Privacy */}
              <Section title="数据与隐私">
                <Row icon="📥" label="导出我的数据" value="下载 →" onClick={handleExportData} />
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"8px 0", cursor:"pointer" }} onClick={function(){ handleDeleteAccount(user); }}>
                  <span style={{ fontSize:14, color:C.red }}>🗑️ 删除我的账号</span>
                  <span style={{ fontSize:13, color:C.red, fontWeight:600 }}>不可逆 →</span>
                </div>
                <div style={{ fontSize:11, color:C.textSec, marginTop:4, lineHeight:1.5 }}>
                  导出文件包含你的全部学习数据；删除账号会永久清除全部记录，无法恢复。
                </div>
              </Section>

              {/* Logout */}
              <div style={{ marginTop:24, paddingTop:16, borderTop:"1px solid "+C.border }}>
                <button onClick={handleLogoutClick} style={{ background:"transparent", border:"none", color:C.red, fontSize:14, fontWeight:600, cursor:"pointer", fontFamily:FONT, padding:"8px 0" }}>退出登录</button>
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

              <button onClick={handleLoginClick} style={{ ...S.bigBtn, marginBottom:16 }}>登录 / 注册</button>

              <Section title="帮助与支持">
                <Row icon="❓" label="常见问题" value="查看 →" onClick={function() { trackFunnel('faq_open', { source: 'user_center_guest' }); setFaqOpen(true); }} />
              </Section>

              <Section title="体验课程">
                <Row icon="📖" label="Vocab · 词汇课" href="/vocab" value="免费体验" />
                <Row icon="✍️" label="Writing · 写作课" href="/writing" value="免费体验" />
                <Row icon="📚" label="Reading · 阅读课" value="即将上线" />
              </Section>
            </>
          )}
        </div>
      </div>

      {/* FAQ 抽屉 — 叠加在 UserCenter 上方 */}
      <FAQPanel open={faqOpen} onClose={function() { setFaqOpen(false); }} />
    </>
  );
}

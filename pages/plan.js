import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { C, FONT, globalCSS, S } from '../lib/theme';
import { BrandNavBar, BrandSparkIcon } from '../components/BrandNavBar';
import { supabase } from '../lib/supabase';

/* Plan & Pricing */

var CNY_RATE = 7;

var PLANS = [
  {
    key: "free", name: "Free", nameCn: "免费体验",
    price: null, priceLabel: "免费",
    desc: "每天免费体验 AI 私教的效果",
    features: [
      { text: "Vocab：游客每日 5 词，注册后 10 词", ok: true },
      { text: "Writing：查看 Dashboard + 能力测评", ok: true },
      { text: "注册后：云同步 + 学习历史", ok: true },
      { text: "注册后：每周 2 篇写作练习", ok: true },
      { text: "每天 1 小时正式学习", ok: false },
      { text: "无限学习时间", ok: false },
    ],
    color: C.teal, cta: "免费注册", popular: false,
  },
  {
    key: "basic", name: "Basic", nameCn: "私教课",
    price: { m: 20, y: 192, mBYO: 10, yBYO: 96 },
    desc: "每天 1 小时 AI 私教课，覆盖词汇 + 写作",
    features: [
      { text: "Vocab + Writing 全部功能", ok: true },
      { text: "每天 1 小时正式学习时间", ok: true },
      { text: "云同步 + 学习历史 + 成长报告", ok: true },
      { text: "AI 私教越学越懂你（个性化画像）", ok: true },
      { text: "中英双语渐进式教学", ok: true },
      { text: "无限学习时间", ok: false },
    ],
    color: C.accent, cta: "开始 Basic 私教课", popular: true,
  },
  {
    key: "pro", name: "Pro", nameCn: "无限私教",
    price: { m: 50, y: 480, mBYO: 25, yBYO: 240 },
    desc: "无限学习时间，最大化 AI 私教价值",
    features: [
      { text: "Vocab + Writing 全部功能", ok: true },
      { text: "无限学习时间，不限每日时长", ok: true },
      { text: "云同步 + 学习历史 + 成长报告", ok: true },
      { text: "AI 私教越学越懂你（个性化画像）", ok: true },
      { text: "中英双语渐进式教学", ok: true },
      { text: "优先体验新功能", ok: true },
    ],
    color: C.purple, cta: "开始 Pro 私教课", popular: false,
  },
];

var FAQ_DATA = [
  { q: "与真人私教相比，Know U. 有什么优势？",
    a: "真人私教每小时 $100+（国内和加州行情），每周见一次，无法持续追踪你的每一步进步。Know U. 的 AI 私教 24/7 在线，用数据驱动的个性化画像越学越懂你，而价格不到私教一节课的钱。" },
  { q: "每天 1 小时是怎么计时的？",
    a: "只有当你在积极学习时才计时（点击、打字、滑动等操作）。浏览首页、查看设置不计时。如果你离开超过 60 秒没有操作，计时自动暂停。确保每一分钟都是真实的学习时间。" },
  { q: "自带 API Key 是什么意思？",
    a: "你可以使用自己的 DeepSeek 或 Google Gemini API Key，这样 AI 调用费用由你自己承担，我们的会员费就可以打半折。我们重视你的隐私：API Key 仅存储在你的设备上，仅在调用 AI 时加密传输，平台不记录、不存储。请自行妥善保管你的 Key。" },
  { q: "中英双语教学是怎么实现的？",
    a: "初期教学会以中文引导为主，帮助你先把思维理清楚。随着你的英语能力提升，AI 会自动提高英文比例——从 30% 逐步过渡到 80%+。这种渐进式双语教学比纯英文私教更科学，因为它保证了思维深度不被语言门槛限制。" },
  { q: "如何取消？",
    a: "随时可以取消，不收任何额外费用。取消后你的学习数据永久保留，可以继续使用免费功能。" },
];

export default function PlanPage() {
  var [billing, setBilling] = useState("monthly");
  var [showBYO, setShowBYO] = useState(false);
  var [expandedFAQ, setExpandedFAQ] = useState(null);
  var [showCalc, setShowCalc] = useState(false);
  var [user, setUser] = useState(null);
  var [currentSub, setCurrentSub] = useState(null);
  var [checkoutLoading, setCheckoutLoading] = useState(null);
  var [successMsg, setSuccessMsg] = useState(false);
  var [showLogin, setShowLogin] = useState(false);
  var [loginEmail, setLoginEmail] = useState('');
  var [loginSent, setLoginSent] = useState(false);
  var [loginLoading, setLoginLoading] = useState(false);
  var [otpCode, setOtpCode] = useState('');
  var [otpError, setOtpError] = useState('');
  var [pendingTier, setPendingTier] = useState(null); // 登录后自动跳转支付

  useEffect(function() {
    // Check for success redirect
    if (typeof window !== 'undefined' && window.location.search.includes('success=1')) {
      setSuccessMsg(true);
      window.history.replaceState({}, '', '/plan');
    }
    // Auth
    supabase.auth.getSession().then(function(r) {
      var u = r?.data?.session?.user || null;
      setUser(u);
      if (u) checkSub(u.id);
    });
    var { data: { subscription } } = supabase.auth.onAuthStateChange(function(ev, session) {
      var u = session?.user || null;
      setUser(u);
      if (u) {
        checkSub(u.id);
        if (ev === 'SIGNED_IN') {
          setShowLogin(false); setLoginSent(false); setLoginEmail(''); setOtpCode('');
        }
      }
    });
    return function() { subscription.unsubscribe(); };
  }, []);

  // 登录成功后自动跳转支付
  useEffect(function() {
    if (user && pendingTier) {
      var tier = pendingTier;
      setPendingTier(null);
      if (tier !== 'free') handleCheckout(tier);
    }
  }, [user, pendingTier]);

  var checkSub = async function(userId) {
    try {
      var r = await fetch('/api/stripe/check-subscription?userId=' + userId);
      var data = await r.json();
      if (data.isActive) setCurrentSub(data);
    } catch(e) {}
  };

  var handleLogin = async function() {
    if (!loginEmail.trim()) return;
    setLoginLoading(true);
    try {
      var { error } = await supabase.auth.signInWithOtp({ email: loginEmail.trim(), options: { shouldCreateUser: true, emailRedirectTo: window.location.origin + '/plan' } });
      if (error) throw error;
      setLoginSent(true);
    } catch(e) {
      var msg = (e.message || '').toLowerCase();
      if (msg.includes('rate limit')) alert("邮件发送太频繁，请等 1-2 分钟");
      else alert("发送失败：" + e.message);
    } finally { setLoginLoading(false); }
  };

  var handleVerifyOtp = async function() {
    if (!otpCode.trim() || otpCode.trim().length < 6) return;
    setLoginLoading(true); setOtpError('');
    try {
      var { error } = await supabase.auth.verifyOtp({ email: loginEmail.trim(), token: otpCode.trim(), type: 'email' });
      if (error) throw error;
    } catch(e) {
      setOtpError(e.message === 'Token has expired or is invalid' ? "验证码已过期或不正确" : e.message);
    } finally { setLoginLoading(false); }
  };

  var handlePlanClick = function(tier) {
    if (!user) {
      setPendingTier(tier);
      setShowLogin(true);
      return;
    }
    if (tier === 'free') return;
    handleCheckout(tier);
  };

  var handleCheckout = async function(tier) {
    if (!user) { setPendingTier(tier); setShowLogin(true); return; }
    setCheckoutLoading(tier);
    try {
      var r = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier: tier, billing: billing, byoKey: showBYO, userId: user.id, userEmail: user.email }),
      });
      var data = await r.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("创建支付失败：" + (data.error || "未知错误"));
      }
    } catch(e) {
      alert("网络错误，请重试");
    } finally { setCheckoutLoading(null); }
  };

  var getPrice = function(plan) {
    if (!plan.price) return { display: "免费", note: "" };
    var p = plan.price;
    var monthly, note;
    if (showBYO) {
      monthly = billing === "yearly" ? Math.round(p.yBYO / 12) : p.mBYO;
      note = billing === "yearly"
        ? "年付 $" + p.yBYO + "（省 $" + (p.mBYO * 12 - p.yBYO) + "）"
        : "= " + String.fromCharCode(165) + (monthly * CNY_RATE) + "/月";
    } else {
      monthly = billing === "yearly" ? Math.round(p.y / 12) : p.m;
      note = billing === "yearly"
        ? "年付 $" + p.y + "（省 $" + (p.m * 12 - p.y) + "）"
        : "= " + String.fromCharCode(165) + (monthly * CNY_RATE) + "/月";
    }
    return { display: "$" + monthly + "/月", note: note };
  };

  return (
    <div style={S.root}>
      <Head>
        <title>{"Plan & Pricing \u2014 Know U. Learning"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: globalCSS }} />

      <BrandNavBar activeTab="plan" />

      <div style={S.container}>
        {/* 早鸟优惠横幅 */}
        {!currentSub && (
          <div style={{ background:"linear-gradient(135deg, #e53e3e 0%, " + C.accent + " 100%)", borderRadius:14, padding:"16px 18px", marginBottom:14, color:"#fff", animation:"fadeUp 0.3s ease-out" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
              <div style={{ fontSize:15, fontWeight:800 }}>{"🔥 早鸟限时优惠"}</div>
              <div style={{ background:"rgba(255,255,255,0.25)", padding:"3px 10px", borderRadius:8, fontSize:12, fontWeight:700 }}>{"首月 5 折"}</div>
            </div>
            <div style={{ fontSize:13, lineHeight:1.6, marginBottom:10, opacity:0.95 }}>
              {"前 100 名付费用户专享首月半价。结账时输入优惠码："}
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
              <div style={{ background:"rgba(255,255,255,0.2)", border:"1px dashed rgba(255,255,255,0.5)", borderRadius:8, padding:"8px 16px", fontSize:18, fontWeight:800, letterSpacing:"0.1em", fontFamily:FONT }}>{"EARLYBIRD"}</div>
              <button onClick={function() { if (navigator.clipboard) { navigator.clipboard.writeText("EARLYBIRD"); alert("已复制优惠码！"); } }} style={{ background:"rgba(255,255,255,0.25)", border:"none", borderRadius:8, padding:"8px 12px", color:"#fff", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:FONT }}>{"复制"}</button>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:8 }}>
              <div style={{ flex:1, height:6, background:"rgba(255,255,255,0.2)", borderRadius:3 }}>
                <div style={{ width:"92%", height:"100%", background:"#fff", borderRadius:3 }} />
              </div>
              <span style={{ fontSize:12, fontWeight:700, whiteSpace:"nowrap" }}>{"仅剩 8%"}</span>
            </div>
          </div>
        )}

        {/* 支付成功提示 */}
        {successMsg && (
          <div style={{ background:C.green, color:"#fff", padding:"14px 18px", borderRadius:12, marginBottom:14, textAlign:"center", fontSize:14, fontWeight:600, animation:"fadeUp 0.3s ease-out" }}>
            {"🎉 支付成功！你的 AI 私教课已激活。开始学习吧！"}
          </div>
        )}

        {/* Hero */}
        <div style={{ textAlign:"center", marginBottom:20, animation:"fadeUp 0.3s ease-out" }}>
          <BrandSparkIcon size={48} marginBottom={8} />
          <div style={{ fontSize:22, fontWeight:800, marginBottom:6 }}>你的 AI 英语私教方案</div>
          <div style={{ fontSize:14, color:C.textSec, lineHeight:1.6 }}>
            一个月的 AI 私教，不到真人私教一节课的价格
          </div>
        </div>

        {/* 对比数据 */}
        <div style={{ background:"linear-gradient(135deg, " + C.goldLight + " 0%, " + C.accentLight + " 100%)", borderRadius:14, padding:"14px 16px", marginBottom:16, border:"1px solid " + C.gold + "33" }}>
          <div style={{ display:"flex", justifyContent:"space-around", textAlign:"center" }}>
            <div>
              <div style={{ fontSize:22, fontWeight:800, color:C.accent }}>1:1</div>
              <div style={{ fontSize:11, color:C.textSec }}>真正一对一</div>
            </div>
            <div>
              <div style={{ fontSize:22, fontWeight:800, color:C.accent }}>24/7</div>
              <div style={{ fontSize:11, color:C.textSec }}>随时可学</div>
            </div>
            <div style={{ position:"relative" }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:3 }}>
                <span style={{ fontSize:22, fontWeight:800, color:C.accent }}>{"<1%"}</span>
                <button onClick={function(e) { e.stopPropagation(); setShowCalc(!showCalc); }} style={{ width:16, height:16, borderRadius:"50%", border:"1px solid " + C.gold, background:showCalc ? C.gold : "transparent", color:showCalc ? "#fff" : C.gold, fontSize:10, fontWeight:700, cursor:"pointer", display:"inline-flex", alignItems:"center", justifyContent:"center", padding:0, fontFamily:FONT, lineHeight:1 }}>?</button>
              </div>
              <div style={{ fontSize:11, color:C.textSec }}>私教费用</div>
              {showCalc && (
                <div style={{ position:"absolute", top:"100%", right:-40, marginTop:8, background:C.card, borderRadius:12, padding:"14px 16px", boxShadow:"0 8px 30px rgba(0,0,0,0.15)", border:"1px solid " + C.border, width:260, zIndex:10, fontSize:12, lineHeight:1.7, color:C.text, textAlign:"left" }}>
                  <div style={{ fontWeight:700, marginBottom:6, color:C.accent }}>费用对比计算</div>
                  <div style={{ marginBottom:8 }}>
                    <div style={{ fontWeight:600 }}>真人私教：</div>
                    <div style={{ color:C.textSec }}>每天 1 小时 x 30 天 x $100/小时</div>
                    <div style={{ fontWeight:700, color:C.red }}>= $3,000/月</div>
                  </div>
                  <div style={{ marginBottom:8 }}>
                    <div style={{ fontWeight:600 }}>Know U. Basic：</div>
                    <div style={{ color:C.textSec }}>每天 1 小时 AI 私教课</div>
                    <div style={{ fontWeight:700, color:C.green }}>= $20/月</div>
                  </div>
                  <div style={{ borderTop:"1px solid " + C.border, paddingTop:8, fontWeight:700, color:C.accent }}>
                    {"Basic 仅为私教费用的 0.7%"}
                  </div>
                  <div style={{ fontSize:10, color:C.textSec, marginTop:4 }}>*按国内/加州 1v1 私教 $100/小时计算</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 月付/年付切换 */}
        <div style={{ display:"flex", gap:0, marginBottom:12, background:C.bg, borderRadius:10, padding:3, border:"1px solid " + C.border }}>
          <button onClick={function() { setBilling("monthly"); }} style={{ flex:1, padding:"9px 0", borderRadius:8, border:"none", fontFamily:FONT, fontSize:13, fontWeight:600, cursor:"pointer", background: billing === "monthly" ? C.accent : "transparent", color: billing === "monthly" ? "#fff" : C.textSec }}>
            月付
          </button>
          <button onClick={function() { setBilling("yearly"); }} style={{ flex:1, padding:"9px 0", borderRadius:8, border:"none", fontFamily:FONT, fontSize:13, fontWeight:600, cursor:"pointer", background: billing === "yearly" ? C.accent : "transparent", color: billing === "yearly" ? "#fff" : C.textSec }}>
            {"年付 "}
            <span style={{ fontSize:10, fontWeight:700, background: billing === "yearly" ? "rgba(255,255,255,0.3)" : C.accentLight, color: billing === "yearly" ? "#fff" : C.accent, padding:"2px 6px", borderRadius:4, marginLeft:3 }}>省 20%</span>
          </button>
        </div>

        {/* BYO Key 开关 */}
        <div style={{ textAlign:"center", marginBottom:16 }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:8, marginBottom:4 }}>
            <span style={{ fontSize:12, color:C.textSec }}>自带 API Key（半价）</span>
            <button onClick={function() { setShowBYO(!showBYO); }} style={{ width:40, height:22, borderRadius:11, border:"none", background: showBYO ? C.teal : C.border, cursor:"pointer", position:"relative", transition:"background 0.2s" }}>
              <div style={{ width:18, height:18, borderRadius:9, background:"#fff", position:"absolute", top:2, left: showBYO ? 20 : 2, transition:"left 0.2s", boxShadow:"0 1px 3px rgba(0,0,0,0.2)" }} />
            </button>
          </div>
          {showBYO && (
            <div style={{ fontSize:11, color:C.teal, lineHeight:1.5 }}>
              {"订阅后在 Writing 页面点 ⚙️ 设置，填入你的 DeepSeek 或 Gemini API Key"}
            </div>
          )}
        </div>

        {/* 套餐卡片 */}
        <div style={{ display:"flex", flexDirection:"column", gap:12, marginBottom:24 }}>
          {PLANS.map(function(plan) {
            var pr = getPrice(plan);
            return (
              <div key={plan.key} style={{
                background: C.card, borderRadius: 16,
                border: plan.popular ? "2px solid " + plan.color : "1px solid " + C.border,
                padding: "20px 18px",
                boxShadow: plan.popular ? "0 4px 20px " + plan.color + "22" : C.shadow,
                position: "relative",
              }}>
                {plan.popular && (
                  <div style={{ position:"absolute", top:-11, left:"50%", transform:"translateX(-50%)", background:plan.color, color:"#fff", fontSize:11, fontWeight:700, padding:"3px 14px", borderRadius:10 }}>最受欢迎</div>
                )}

                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
                  <div>
                    <div style={{ fontSize:17, fontWeight:800, color:plan.color }}>{plan.name} <span style={{ fontWeight:600, fontSize:13, color:C.text }}>{plan.nameCn}</span></div>
                    <div style={{ fontSize:12, color:C.textSec, marginTop:2 }}>{plan.desc}</div>
                  </div>
                  <div style={{ textAlign:"right", flexShrink:0, marginLeft:12 }}>
                    {plan.price ? (
                      <>
                        <div style={{ fontSize:24, fontWeight:800, color:C.text }}>{pr.display}</div>
                        <div style={{ fontSize:10, color:C.textSec }}>{pr.note}</div>
                      </>
                    ) : (
                      <div style={{ fontSize:22, fontWeight:800, color:C.teal }}>{pr.display}</div>
                    )}
                  </div>
                </div>

                <div style={{ marginBottom:14 }}>
                  {plan.features.map(function(f, i) {
                    return (
                      <div key={i} style={{ display:"flex", alignItems:"center", gap:8, padding:"5px 0", fontSize:13, color: f.ok ? C.text : C.border }}>
                        <span style={{ fontSize:13, flexShrink:0, width:18, textAlign:"center" }}>{f.ok ? "\u2705" : "\u2014"}</span>
                        <span style={{ textDecoration: f.ok ? "none" : "line-through" }}>{f.text}</span>
                      </div>
                    );
                  })}
                </div>

                {currentSub && currentSub.tier === plan.key ? (
                  <div style={{ ...S.bigBtn, margin:0, background:C.green, textAlign:"center", cursor:"default" }}>
                    {"当前方案 \u2714 \u00B7 " + new Date(currentSub.expiresAt).toLocaleDateString() + " 到期"}
                  </div>
                ) : (
                  <button
                    onClick={function() { handlePlanClick(plan.key); }}
                    disabled={checkoutLoading === plan.key}
                    style={{ ...S.bigBtn, margin:0, background: plan.key === "free" ? C.teal : plan.color, fontSize:15, opacity: checkoutLoading === plan.key ? 0.6 : 1 }}
                  >
                    {checkoutLoading === plan.key ? "跳转支付中..." : (user && plan.key === "free" && !currentSub ? "当前方案" : user && plan.key === "free" && currentSub ? "已升级" : plan.cta)}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* 私教对比表 */}
        <div style={{ ...S.card, padding:"16px 18px", marginBottom:16 }}>
          <div style={{ fontSize:15, fontWeight:700, marginBottom:12 }}>与真人私教的对比</div>
          <table style={{ width:"100%", borderCollapse:"collapse", fontSize:12 }}>
            <thead>
              <tr>
                <th style={{ textAlign:"left", padding:"6px 0", borderBottom:"2px solid " + C.accent, fontWeight:700, color:C.accent }}>Know U. AI</th>
                <th style={{ textAlign:"right", padding:"6px 0", borderBottom:"2px solid " + C.border, fontWeight:600, color:C.textSec }}>传统私教</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["\uD83C\uDFAF 真正 1 对 1", "大班 1:20-40"],
                ["\uD83E\uDDE0 数据驱动，越学越懂你", "每周见一次，了解有限"],
                ["\uD83D\uDCB0 $20/月起", "$100+/小时"],
                ["\uD83D\uDD50 24/7 随时可学", "要预约时间"],
                ["\uD83D\uDCCA 六维量化成长追踪", "凭经验感觉"],
                ["\uD83C\uDF10 中英渐进（30%\u219280%+）", "语言比例不可控"],
              ].map(function(row, i) {
                return (
                  <tr key={i}>
                    <td style={{ padding:"8px 0", borderBottom:"1px solid " + C.border, fontWeight:600 }}>{row[0]}</td>
                    <td style={{ padding:"8px 0", borderBottom:"1px solid " + C.border, textAlign:"right", color:C.textSec }}>{row[1]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div style={{ marginTop:12, padding:"10px 14px", background:C.accentLight, borderRadius:10, textAlign:"center", fontSize:13, fontWeight:600, color:C.accent }}>
            {"一年 AI 私教 $192 = 真人私教 2 小时的价格"}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginBottom:24 }}>
          <div style={{ fontSize:15, fontWeight:700, marginBottom:10 }}>常见问题</div>
          {FAQ_DATA.map(function(item, i) {
            var isOpen = expandedFAQ === i;
            return (
              <div key={i} style={{ ...S.card, padding:"12px 16px", marginBottom:6, cursor:"pointer" }} onClick={function() { setExpandedFAQ(isOpen ? null : i); }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <div style={{ fontSize:13, fontWeight:600, flex:1 }}>{item.q}</div>
                  <span style={{ fontSize:12, color:C.textSec, marginLeft:8, transform: isOpen ? "rotate(180deg)" : "none", transition:"transform 0.2s" }}>{"\u25BC"}</span>
                </div>
                {isOpen && <div style={{ fontSize:12, color:C.textSec, lineHeight:1.7, marginTop:8, paddingTop:8, borderTop:"1px solid " + C.border }}>{item.a}</div>}
              </div>
            );
          })}
        </div>

        {/* 底部 CTA */}
        <div style={{ textAlign:"center", marginBottom:40 }}>
          <div style={{ fontSize:13, color:C.textSec, marginBottom:10 }}>不确定？先免费体验，感受 AI 私教的效果</div>
          <div style={{ display:"flex", gap:10, justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/vocab" style={{ ...S.ghostBtn, textDecoration:"none", display:"inline-flex", alignItems:"center", gap:4 }}>词汇课体验</Link>
            <Link href="/writing" style={{ ...S.primaryBtn, textDecoration:"none", display:"inline-flex" }}>写作课体验</Link>
          </div>
        </div>

        {/* Footer */}
        <div style={{ borderTop:"1px solid " + C.border, padding:"20px 0 10px", textAlign:"center", fontSize:11, color:C.textSec, lineHeight:1.8 }}>
          <div style={{ marginBottom:6 }}>
            <Link href="/vocab" style={{ color:C.textSec, textDecoration:"none", marginRight:16 }}>Vocab 词汇课</Link>
            <Link href="/writing" style={{ color:C.textSec, textDecoration:"none", marginRight:16 }}>Writing 写作课</Link>
            <Link href="/plan" style={{ color:C.accent, textDecoration:"none", fontWeight:600 }}>Plan 方案</Link>
          </div>
          <div>Know U. Learning &mdash; Your 1-on-1 AI English Tutor</div>
          <div>&copy; {new Date().getFullYear()} Know U. Learning. All rights reserved.</div>
        </div>
        {/* 登录弹窗 */}
        {showLogin && (
          <div style={{ position:"fixed", top:0, left:0, width:"100%", height:"100%", background:C.overlay, backdropFilter:"blur(4px)", WebkitBackdropFilter:"blur(4px)", zIndex:9998, display:"flex", alignItems:"center", justifyContent:"center" }} onClick={function() { setShowLogin(false); setPendingTier(null); }}>
            <div style={{ background:C.card, borderRadius:16, padding:"28px 24px", maxWidth:380, width:"90%", boxShadow:"0 20px 60px rgba(0,0,0,0.3)" }} onClick={function(e) { e.stopPropagation(); }}>
              <div style={{ textAlign:"center", marginBottom:16 }}>
                <div style={{ fontSize:17, fontWeight:700 }}>{pendingTier && pendingTier !== 'free' ? "登录后开始 " + pendingTier.charAt(0).toUpperCase() + pendingTier.slice(1) + " 私教课" : "登录 / 注册 Know U."}</div>
                <div style={{ fontSize:12, color:C.textSec, marginTop:4 }}>输入邮箱，我们会发送验证码</div>
              </div>
              {!loginSent ? (
                <div>
                  <input value={loginEmail} onChange={function(e) { setLoginEmail(e.target.value); }} onKeyDown={function(e) { if (e.key === "Enter") handleLogin(); }} placeholder="your@email.com" type="email" style={{ width:"100%", padding:"12px 14px", borderRadius:10, border:"1.5px solid " + C.border, fontFamily:FONT, fontSize:14, marginBottom:10, boxSizing:"border-box" }} />
                  <button onClick={handleLogin} disabled={loginLoading} style={{ ...S.bigBtn, margin:0, width:"100%" }}>{loginLoading ? "发送中..." : "发送验证码"}</button>
                </div>
              ) : (
                <div>
                  <div style={{ fontSize:13, color:C.textSec, marginBottom:10, textAlign:"center" }}>{"验证码已发送至 "}<strong>{loginEmail}</strong></div>
                  <input value={otpCode} onChange={function(e) { setOtpCode(e.target.value.replace(/[^0-9]/g, '')); setOtpError(''); }} onKeyDown={function(e) { if (e.key === "Enter") handleVerifyOtp(); }} placeholder="输入 6 位验证码" maxLength={6} style={{ width:"100%", padding:"14px", borderRadius:10, border:"1.5px solid " + C.border, fontFamily:FONT, fontSize:22, fontWeight:700, textAlign:"center", letterSpacing:"0.3em", marginBottom:8, boxSizing:"border-box" }} />
                  {otpError && <div style={{ fontSize:12, color:C.red, textAlign:"center", marginBottom:8 }}>{otpError}</div>}
                  <button onClick={handleVerifyOtp} disabled={loginLoading || otpCode.length < 6} style={{ ...S.bigBtn, margin:0, width:"100%", opacity: otpCode.length < 6 ? 0.5 : 1 }}>{loginLoading ? "验证中..." : "验证登录"}</button>
                  <button onClick={function() { setLoginSent(false); setOtpCode(''); setOtpError(''); }} style={{ ...S.ghostBtn, width:"100%", marginTop:8, textAlign:"center" }}>{"重新输入邮箱"}</button>
                </div>
              )}
              <button onClick={function() { setShowLogin(false); setPendingTier(null); setLoginSent(false); setOtpCode(''); }} style={{ ...S.ghostBtn, width:"100%", marginTop:8, textAlign:"center" }}>取消</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

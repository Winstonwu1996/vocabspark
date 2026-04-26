import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { C, FONT, FONT_DISPLAY, globalCSS, S } from '../lib/theme';
import { BrandNavBar } from '../components/BrandNavBar';
import UserCenter from '../components/UserCenter';
import { supabase } from '../lib/supabase';

/* ═══════════════════════════════════════════════════════
   Know U. Learning — 服务条款
   ═══════════════════════════════════════════════════════ */

export default function TermsPage() {
  var [user, setUser] = useState(null);
  var [showUserCenter, setShowUserCenter] = useState(false);

  useEffect(function() {
    supabase.auth.getUser().then(function(res) { setUser(res.data && res.data.user || null); });
    var sub = supabase.auth.onAuthStateChange(function(_evt, session) {
      setUser(session ? session.user : null);
    });
    return function() { sub && sub.data && sub.data.subscription && sub.data.subscription.unsubscribe(); };
  }, []);

  var page = { ...S.root, fontFamily: FONT };
  var container = { maxWidth: 720, margin: "0 auto", padding: "20px 20px 80px" };
  var card = {
    background: C.card,
    borderRadius: 16,
    border: "1px solid " + C.border,
    padding: "28px 24px",
    boxShadow: C.shadow,
    marginBottom: 16,
  };
  var h1Style = { ...S.heroTitle, fontFamily: FONT_DISPLAY, fontSize: 30, margin: "0 0 6px", textAlign: "left" };
  var leadStyle = { fontSize: 14, color: C.textSec, lineHeight: 1.7, margin: "0 0 18px" };
  var h2Style = { fontFamily: FONT_DISPLAY, fontSize: 20, fontWeight: 700, color: C.text, margin: "28px 0 10px", letterSpacing: "-0.01em" };
  var pStyle = { fontSize: 15, lineHeight: 1.8, color: C.text, margin: "0 0 12px" };
  var listStyle = { fontSize: 15, lineHeight: 1.85, color: C.text, paddingLeft: 22, margin: "0 0 12px" };
  var calloutStyle = {
    background: C.goldLight,
    border: "1px solid " + C.gold + "33",
    borderRadius: 10,
    padding: "14px 16px",
    fontSize: 14,
    lineHeight: 1.7,
    color: C.text,
    margin: "12px 0 16px",
  };
  var subtleNote = {
    background: C.bg,
    borderLeft: "3px solid " + C.teal,
    borderRadius: "0 8px 8px 0",
    padding: "12px 14px",
    fontSize: 13,
    lineHeight: 1.7,
    color: C.textSec,
    margin: "12px 0 16px",
  };

  return (
    <div style={page}>
      <Head>
        <title>服务条款 — Know U. Learning</title>
        <meta name="description" content="Know U. Learning 服务条款：使用本产品前请阅读。" />
      </Head>
      <style>{globalCSS}</style>

      <BrandNavBar activeTab="" user={user} onUserCenterClick={function(){ setShowUserCenter(true); }} />

      <div style={container}>
        <div style={card}>
          <h1 style={h1Style}>📋 服务条款</h1>
          <p style={leadStyle}>
            最后更新：2026 年 4 月 26 日 · Terms of Service for Know U. Learning
          </p>
          <p style={pStyle}>
            欢迎使用 Know U. Learning（下文简称"本服务"或"我们"）。
            注册或使用本服务，即表示你已阅读并同意以下条款。如果不同意，请不要使用本服务——这没什么大不了的。
          </p>

          <h2 style={h2Style}>🎓 一、本服务是什么</h2>
          <p style={pStyle}>
            Know U. Learning 是一个 AI 驱动的英语学习产品，目前包含三个模块：
          </p>
          <ul style={listStyle}>
            <li><strong>Vocab 词汇课</strong>：为你的兴趣和备考目标定制例句、讲解和记忆场景</li>
            <li><strong>Writing 写作课</strong>（Beta）：思维表达训练，不是单纯的作文批改</li>
            <li><strong>History 历史地图</strong>（Beta）：可视化历史时空，辅助理解学术英语语境</li>
          </ul>
          <p style={pStyle}>
            主要服务对象是中学生（SSAT / SAT / TOEFL / IELTS 等备考方向），但任何想学英语的人都可以用。
          </p>
          <div style={calloutStyle}>
            <strong>关于 AI 内容的说明：</strong>本服务使用 DeepSeek、Google Gemini 等大语言模型生成例句和讲解。
            AI 输出可能存在事实性错误、语法瑕疵或文化偏差，<strong>请把它当成"非常勤奋但偶尔会犯错的英语助教"</strong>，重要内容（考试报名、留学申请等）请以官方资料为准。
          </div>

          <h2 style={h2Style}>👤 二、账号和你的责任</h2>
          <p style={pStyle}>使用本服务，你承诺：</p>
          <ul style={listStyle}>
            <li>用真实邮箱注册，妥善保管密码</li>
            <li>一个人一个账号，不与他人共享（不是怕你白嫖，是怕串号导致学习数据混乱）</li>
            <li>不滥用 API（包括但不限于：脚本刷接口、爬数据、用于训练自己的模型、用于商业转售）</li>
            <li>不在「学习画像」里填写他人的真实姓名、电话、住址、身份证号等敏感个人信息</li>
            <li>不上传违反所在国法律的内容（违法、暴力、色情、恶意攻击他人等）</li>
            <li>不通过逆向、反编译、抓包等方式破解前端或后端</li>
          </ul>
          <p style={pStyle}>
            如果发现以上行为，我们会先提示，再次发现会限制账号使用，严重情况下永久封禁，并保留追究法律责任的权利。
          </p>

          <h2 style={h2Style}>💰 三、推广期免费 + 未来付费</h2>
          <p style={pStyle}>
            <strong>当前状态（2026 年 4 月）</strong>：本服务处于推广期，主要功能对所有注册用户免费开放。
          </p>
          <p style={pStyle}>
            <strong>未来计划</strong>：随着产品成熟，我们会推出付费订阅方案（Stripe 已接入，准备就绪）。届时会：
          </p>
          <ul style={listStyle}>
            <li>提前至少 14 天通过邮件通知现有用户</li>
            <li>保证免费用户的基础功能不会突然消失</li>
            <li>付费方案以 Plan 页公示为准</li>
          </ul>
          <p style={pStyle}>
            支付由 <strong>Stripe</strong> 处理，我们不接触你的银行卡信息。
          </p>

          <h2 style={h2Style}>↩️ 四、退款政策</h2>
          <ul style={listStyle}>
            <li><strong>7 天无理由退款</strong>：付费订阅后 7 天内，无论什么原因，发邮件即全额退款，不需要解释</li>
            <li>超过 7 天后的退款，按未使用时长比例退还（按月订阅按周计算，按年订阅按月计算）</li>
            <li>退款将原路返回，到账时间取决于 Stripe 和银行处理速度（通常 5-10 个工作日）</li>
            <li>因违反本条款被封号的，已支付费用不予退还</li>
          </ul>

          <h2 style={h2Style}>©️ 五、知识产权</h2>
          <p style={pStyle}>
            <strong>关于本服务的代码和品牌</strong>：Know U. Learning 的代码、设计、Logo、文案、品牌名归属创始人 Winston Wu 个人所有。
            未经书面许可，请勿复制、抄袭或用于商业用途。
          </p>
          <p style={pStyle}>
            <strong>关于 AI 生成内容（例句、讲解等）</strong>：基于你的学习画像生成的内容，仅供你个人学习使用。
            由于内容由 LLM 生成，其版权状态在国际上仍有争议，我们的立场是：
          </p>
          <ul style={listStyle}>
            <li>你可以自由用于个人学习、笔记、做卡片</li>
            <li>不得整批导出后用于商业出版、再销售或训练其他 AI 模型</li>
            <li>本服务不主张对单条 AI 输出的著作权，但对整体数据集合保留权利</li>
          </ul>
          <p style={pStyle}>
            <strong>你提交的内容</strong>（学习画像、笔记等）：版权归你所有。授权我们在提供服务的范围内使用、存储、处理。
          </p>

          <h2 style={h2Style}>⚠️ 六、责任限制</h2>
          <p style={pStyle}>说人话版本：</p>
          <ul style={listStyle}>
            <li>我们不能保证 AI 输出 100% 准确——它毕竟是个语言模型，不是答案数据库</li>
            <li>我们不能保证你用了就考上 SSAT / SAT 满分（影响考试成绩的因素太多了）</li>
            <li>我们不能保证服务 100% 不宕机（虽然会尽力，但 Vercel / Supabase 偶尔抽风我们也救不了）</li>
            <li>因 AI 生成内容引发的任何决策（如考试报名、留学申请用语等），后果由你自行承担</li>
            <li>本服务的最大赔偿责任，不超过你过去 12 个月内实际支付的订阅费用</li>
          </ul>
          <p style={pStyle}>
            正式版本：本服务按"现状"（as-is）和"现有"（as-available）提供，不就适销性、特定用途适用性、不侵权等作任何明示或默示担保。
          </p>

          <h2 style={h2Style}>🚪 七、服务终止</h2>
          <p style={pStyle}><strong>你可以随时</strong>：</p>
          <ul style={listStyle}>
            <li>停止使用本服务（不需要通知我们）</li>
            <li>在「用户中心」删除账号（数据按隐私政策处理）</li>
            <li>取消订阅（在 Stripe 客户门户操作，下个计费周期生效）</li>
          </ul>
          <p style={pStyle}><strong>我们保留以下情况下终止你账号的权利</strong>：</p>
          <ul style={listStyle}>
            <li>你严重违反本条款（滥用、违法、攻击系统等）</li>
            <li>账号长期不活跃（连续 24 个月未登录），我们会先邮件提醒，再清理</li>
            <li>整个产品下线（虽然我会尽力别让这一天到来，但小团队产品有这种风险，到时候会提前 30 天通知 + 帮你导出全部数据）</li>
          </ul>

          <h2 style={h2Style}>⚖️ 八、适用法律和争议解决</h2>
          <p style={pStyle}>
            <strong>对于中国大陆用户</strong>：适用中华人民共和国法律。如发生争议，双方应先友好协商；协商不成的，提交服务运营方所在地有管辖权的人民法院解决。
          </p>
          <p style={pStyle}>
            <strong>对于其他地区用户</strong>：适用美国加利福尼亚州法律（不冲突时）。如发生争议，双方应先邮件沟通；30 天内未能解决的，提交美国加州圣克拉拉县（Santa Clara County）法院或仲裁解决。
          </p>
          <p style={pStyle}>
            无论如何，<strong>第一步永远是发邮件给我</strong>，绝大多数事情都可以聊清楚。
          </p>

          <h2 style={h2Style}>📝 九、条款更新</h2>
          <p style={pStyle}>
            产品在演进，本条款也会更新。我们会：
          </p>
          <ul style={listStyle}>
            <li>更新本页顶部的"最后更新"日期</li>
            <li>对已注册用户通过邮件或站内通知告知重大变更</li>
            <li>非重大变更（如调整文字表述）将仅在本页公示</li>
          </ul>
          <p style={pStyle}>
            如果你不同意更新后的条款，可以在变更生效前停止使用并删除账号。继续使用即视为接受新版本。
          </p>

          <h2 style={h2Style}>📮 十、联系我们</h2>
          <p style={pStyle}>
            服务相关问题、退款申请、内容反馈：
            <br />
            <a href="mailto:Winstonwu1996@icloud.com" style={{ color: C.accent, fontWeight: 700, fontSize: 16 }}>Winstonwu1996@icloud.com</a>
          </p>
          <p style={pStyle}>
            我是 Winston，做这个产品的人。邮件就到我手里——发邮件比在网上骂街管用。
          </p>

          <div style={{ ...subtleNote, marginTop: 28, borderLeft: "3px solid " + C.accent }}>
            谢谢你阅读到这里。一份诚实的服务条款，是一个产品对用户最基本的尊重。
            <br /><br />
            — Winston
          </div>

          <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid " + C.border, display: "flex", gap: 12, justifyContent: "center", fontSize: 13 }}>
            <Link href="/" style={{ color: C.textSec, textDecoration: "none" }}>← 返回首页</Link>
            <Link href="/privacy" style={{ color: C.textSec, textDecoration: "none" }}>查看隐私政策 →</Link>
          </div>
        </div>
      </div>

      <UserCenter open={showUserCenter} onClose={function(){ setShowUserCenter(false); }} user={user} onLogin={function(){ window.location.href = "/vocab?login=1"; }} onLogout={async function(){ await supabase.auth.signOut(); setUser(null); setShowUserCenter(false); }} />
    </div>
  );
}

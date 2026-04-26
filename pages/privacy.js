import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { C, FONT, FONT_DISPLAY, globalCSS, S } from '../lib/theme';
import { BrandNavBar } from '../components/BrandNavBar';
import UserCenter from '../components/UserCenter';
import { supabase } from '../lib/supabase';

/* ═══════════════════════════════════════════════════════
   Know U. Learning — 隐私政策
   GDPR / CCPA / 中国 PIPL 三地适用
   写得真实、不抄模板、普通家长能看懂
   ═══════════════════════════════════════════════════════ */

export default function PrivacyPage() {
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
    background: C.accentLight,
    border: "1px solid " + C.accent + "33",
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
        <title>隐私政策 — Know U. Learning</title>
        <meta name="description" content="Know U. Learning 隐私政策：我们如何收集、使用和保护您的数据。" />
      </Head>
      <style>{globalCSS}</style>

      <BrandNavBar activeTab="" user={user} onUserCenterClick={function(){ setShowUserCenter(true); }} />

      <div style={container}>
        <div style={card}>
          <h1 style={h1Style}>🔒 隐私政策</h1>
          <p style={leadStyle}>
            最后更新：2026 年 4 月 26 日 · Privacy Policy of Know U. Learning
          </p>
          <p style={pStyle}>
            你好，我是 Winston，Know U. Learning 的创始人。这个产品是我做给我女儿和像她一样在认真学英语的孩子用的。
            所以我对"数据隐私"这件事有非常认真的态度——下面说的每一条，都是我自己作为家长会希望服务方做到的。
          </p>
          <p style={pStyle}>
            如果你只想看一句话总结：<strong>我不卖数据，不拿你的内容训练任何模型，你随时可以让我把数据全删掉。</strong>
          </p>

          <h2 style={h2Style}>📦 我们收集哪些数据</h2>
          <p style={pStyle}>为了让 AI 能为你做个性化的英语学习，我们会保存以下信息：</p>
          <ul style={listStyle}>
            <li><strong>账户信息</strong>：注册邮箱、登录凭证（由 Supabase 加密管理，我们不直接存密码）</li>
            <li><strong>学习画像</strong>：你在「学习画像」里填的兴趣、年级、目标、备考方向等文字信息</li>
            <li><strong>学习进度</strong>：单词列表、答题记录、错题、复习状态、学习时长</li>
            <li><strong>使用日志</strong>：访问时间、浏览器类型、IP 地址（用于反滥用、限流和错误排查）</li>
            <li><strong>Cookies / 本地存储</strong>：保持登录状态、记住偏好设置（不用于跨站追踪广告）</li>
            <li><strong>支付信息</strong>：当未来你订阅付费方案时，由 Stripe 处理（我们不存信用卡号，只看到订阅状态）</li>
          </ul>
          <div style={subtleNote}>
            我们<strong>不</strong>会主动收集精确地理位置、通讯录、相册、麦克风（除了你主动用语音输入功能时的临时录音）。
          </div>

          <h2 style={h2Style}>🎯 数据用来做什么</h2>
          <ul style={listStyle}>
            <li>给你生成个性化的例句、讲解、记忆场景（这是产品的核心功能）</li>
            <li>记住你学到哪了，下次回来可以接上</li>
            <li>统计宏观使用情况（多少人在用、哪个功能用得多），用于改进产品</li>
            <li>排查 bug 和异常（这是 Sentry 的工作）</li>
            <li>防止 API 被滥用（这是 Upstash Redis 限流的工作）</li>
          </ul>
          <div style={calloutStyle}>
            <strong>我们绝对不做的事：</strong>不卖数据给第三方；不把你的内容拿去训练我们自己的模型（我们也没有自己的模型）；不向第三方分享可识别个人身份的信息。
          </div>

          <h2 style={h2Style}>🤝 我们用了哪些第三方服务</h2>
          <p style={pStyle}>
            我是一个小团队，做不到每件事都自研。下面这些服务在产品运转过程中会接触到部分数据，每一家我都选了对隐私态度比较好的：
          </p>
          <ul style={listStyle}>
            <li><strong>DeepSeek（深度求索，中国公司）</strong>：负责生成 AI 例句和讲解。你的学习画像 + 当前单词会发给它的 API。我们和 DeepSeek 之间使用 HTTPS 加密。请知悉 DeepSeek 是中国公司，数据可能在中国境内服务器处理。</li>
            <li><strong>Google Gemini（Google AI）</strong>：作为备用 AI 引擎，部分场景下生成内容。数据走 Google Cloud。</li>
            <li><strong>Supabase（开源后端，托管在美国）</strong>：负责账号系统和数据库存储。你的学习数据存在 Supabase 的 Postgres 数据库里，受 Supabase 安全策略保护。</li>
            <li><strong>Stripe（美国上市公司）</strong>：处理订阅和支付。信用卡信息直接由 Stripe 处理，我们看不到完整卡号。</li>
            <li><strong>Sentry（错误监控）</strong>：当代码报错时自动发送堆栈信息，便于我修 bug。我们会脱敏过滤掉用户输入内容。</li>
            <li><strong>Upstash Redis（无服务器缓存）</strong>：用于 API 限流（防止刷接口）和临时缓存。</li>
            <li><strong>Vercel（部署平台）</strong>：网站托管和 CDN。</li>
          </ul>
          <p style={pStyle}>
            上述每一家的隐私政策都比我写的这页详细得多，如果你介意，可以单独搜索它们的官方政策。我承诺不会再额外接入第三方分析广告类 SDK。
          </p>

          <h2 style={h2Style}>👶 未成年人保护</h2>
          <p style={pStyle}>
            Know U. Learning 主要面向中学生（备考 SSAT、SAT、TOEFL 等）。如果你是 13 岁以下的小朋友，请在家长或监护人陪同下注册和使用本产品；
            我们遵守美国 COPPA（儿童在线隐私保护法）相关要求，不会主动向未满 13 岁的用户索取超出学习必要的个人信息。
          </p>
          <p style={pStyle}>
            家长如果发现孩子未经同意注册了账号，请发邮件给我，我会立即删除该账号及全部相关数据。
          </p>

          <h2 style={h2Style}>🛡️ 你的权利</h2>
          <p style={pStyle}>无论你在中国、美国还是欧洲，你都拥有以下权利：</p>
          <ul style={listStyle}>
            <li><strong>查询权</strong>：知道我们存了你哪些数据</li>
            <li><strong>导出权</strong>：以 JSON 格式拿走你的全部学习数据</li>
            <li><strong>更正权</strong>：纠正错误的信息</li>
            <li><strong>删除权（被遗忘权）</strong>：要求我们彻底删除账号和数据</li>
            <li><strong>撤回同意</strong>：随时停用本服务</li>
          </ul>
          <p style={pStyle}>
            想行使任何一项权利，发邮件到 <a href="mailto:Winstonwu1996@icloud.com" style={{ color: C.accent, fontWeight: 600 }}>Winstonwu1996@icloud.com</a>，
            我承诺 7 天内回复，30 天内完成处理。
          </p>

          <h2 style={h2Style}>⏳ 数据保留多久</h2>
          <ul style={listStyle}>
            <li>账号存在期间：数据持续保留，方便你接续学习</li>
            <li>账号删除后：30 天内从生产数据库彻底清理</li>
            <li>备份归档：可能在加密备份中存在最长 90 天，之后随备份过期自动销毁</li>
            <li>法律义务保留（如支付凭证）：按当地法律最低期限保存（通常 5-7 年），但不再用于任何业务用途</li>
          </ul>

          <h2 style={h2Style}>🔐 数据安全</h2>
          <ul style={listStyle}>
            <li>所有传输使用 HTTPS / TLS 加密</li>
            <li>数据库静态加密（由 Supabase 在 AWS 提供）</li>
            <li>密码不会以明文存储（由 Supabase Auth 用 bcrypt 等算法哈希）</li>
            <li>API 接口都有限流和身份验证</li>
            <li>只有我（Winston）一个人有生产环境访问权限</li>
          </ul>
          <p style={pStyle}>
            尽管我尽力保护，但请知悉：互联网上没有 100% 安全的系统。如果发生数据泄露，我会在 72 小时内通过邮件通知受影响的用户。
          </p>

          <h2 style={h2Style}>🌍 适用法律</h2>
          <p style={pStyle}>
            <strong>对于中国大陆用户</strong>：本政策遵守《中华人民共和国个人信息保护法》（PIPL）、《数据安全法》、《网络安全法》。
            如有跨境数据传输（如用 Google Gemini），我们会按 PIPL 第 38 条要求获得你的单独同意。
          </p>
          <p style={pStyle}>
            <strong>对于美国用户（含华裔）</strong>：本政策符合《加州消费者隐私法》（CCPA / CPRA）。
            加州居民可以要求我们披露过去 12 个月内收集、使用、披露的数据类别，并可要求删除。我们不"出售"个人信息，无需提供 Do Not Sell 选项。
          </p>
          <p style={pStyle}>
            <strong>对于欧洲用户</strong>：本政策符合 GDPR。我们处理你数据的法律依据是「合同履行」（提供你订阅的学习服务）和「合法利益」（产品改进）。
          </p>

          <h2 style={h2Style}>📝 政策更新</h2>
          <p style={pStyle}>
            产品在演进，政策也会更新。如果发生重要变更（比如新接了一家 AI 服务商、收集类型增加等），我会：
          </p>
          <ul style={listStyle}>
            <li>更新本页顶部的"最后更新"日期</li>
            <li>对已注册用户通过邮件或站内通知告知</li>
            <li>重大变更（涉及数据用途）会要求你重新确认同意</li>
          </ul>

          <h2 style={h2Style}>📮 联系我</h2>
          <p style={pStyle}>
            任何隐私相关的问题、投诉、请求，发邮件到：
            <br />
            <a href="mailto:Winstonwu1996@icloud.com" style={{ color: C.accent, fontWeight: 700, fontSize: 16 }}>Winstonwu1996@icloud.com</a>
          </p>
          <p style={pStyle}>
            我是 Winston，做这个产品的人，邮件就到我手里。如果一周内没收到回复，欢迎再发一次（可能被邮箱误判垃圾邮件了）。
          </p>

          <div style={{ ...subtleNote, marginTop: 28, borderLeft: "3px solid " + C.accent }}>
            谢谢你认真读完这份政策。把孩子的学习数据交给一个产品，本身就是一种信任，我会一直把这件事当回事。
            <br /><br />
            — Winston
          </div>

          <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid " + C.border, display: "flex", gap: 12, justifyContent: "center", fontSize: 13 }}>
            <Link href="/" style={{ color: C.textSec, textDecoration: "none" }}>← 返回首页</Link>
            <Link href="/terms" style={{ color: C.textSec, textDecoration: "none" }}>查看服务条款 →</Link>
          </div>
        </div>
      </div>

      <UserCenter open={showUserCenter} onClose={function(){ setShowUserCenter(false); }} user={user} onLogin={function(){ window.location.href = "/vocab?login=1"; }} onLogout={async function(){ await supabase.auth.signOut(); setUser(null); setShowUserCenter(false); }} />
    </div>
  );
}

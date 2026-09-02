import Head from "next/head";
import Link from "next/link";
import { C, FONT, FONT_DISPLAY, globalCSS, S } from '../../lib/theme';
import { BrandNavBar } from '../../components/BrandNavBar';

/* ═══════════════════════════════════════════════════════
   AI-OS Mail Assistant — 应用主页
   这是 Google OAuth 同意页要求的「应用主页」：说明这个应用是什么、做什么。
   它不是 Know U. Learning 的产品功能，是站长自用的邮件整理工具，挂在本站只为有个公开地址。
   ═══════════════════════════════════════════════════════ */

export default function MailAssistantHome() {
  var page = { ...S.root, fontFamily: FONT };
  var container = { maxWidth: 720, margin: "0 auto", padding: "20px 20px 80px" };
  var card = { background: C.card, borderRadius: 16, border: "1px solid " + C.border, padding: "28px 24px", boxShadow: C.shadow, marginBottom: 16 };
  var h1Style = { ...S.heroTitle, fontFamily: FONT_DISPLAY, fontSize: 30, margin: "0 0 6px", textAlign: "left" };
  var leadStyle = { fontSize: 14, color: C.textSec, lineHeight: 1.7, margin: "0 0 18px" };
  var h2Style = { fontFamily: FONT_DISPLAY, fontSize: 20, fontWeight: 700, color: C.text, margin: "28px 0 10px", letterSpacing: "-0.01em" };
  var pStyle = { fontSize: 15, lineHeight: 1.8, color: C.text, margin: "0 0 12px" };
  var listStyle = { fontSize: 15, lineHeight: 1.85, color: C.text, paddingLeft: 22, margin: "0 0 12px" };
  var calloutStyle = { background: C.accentLight, border: "1px solid " + C.accent + "33", borderRadius: 10, padding: "14px 16px", fontSize: 14, lineHeight: 1.7, color: C.text, margin: "12px 0 16px" };
  var linkStyle = { color: C.accent, fontWeight: 700, textDecoration: "none" };

  return (
    <div style={page}>
      <Head>
        <title>AI-OS Mail Assistant — Know U. Learning</title>
        <meta name="description" content="AI-OS Mail Assistant：站长自用的个人邮件整理助手。读取邮件、分类、出日报，归档只在人工确认后进行。" />
        <meta name="robots" content="noindex" />
      </Head>
      <style>{globalCSS}</style>

      <BrandNavBar activeTab="" user={null} onUserCenterClick={function(){}} />

      <div style={container}>
        <div style={card}>
          <h1 style={h1Style}>📬 AI-OS Mail Assistant</h1>
          <p style={leadStyle}>个人邮件整理助手 · Personal email triage assistant · 由 Winston 自建自用</p>

          <p style={pStyle}>
            这是我（Winston，本站站长）给自己写的一个小工具，用来整理我自己的几个邮箱。
            它<strong>不是一个对外提供的服务</strong>：没有注册入口，不接受别人的邮箱，只在我自己的电脑上运行。
            这个页面存在的原因，是 Google 要求每一个接入 Gmail 的应用都有一个公开的主页和隐私政策。
          </p>

          <h2 style={h2Style}>它做什么</h2>
          <ul style={listStyle}>
            <li><strong>读邮件</strong>：通过 Gmail 官方接口读取收件箱里的邮件（发件人、主题、正文、标签）。</li>
            <li><strong>分三道整理</strong>：先用确定性规则，规则拿不准的交给 AI 模型读正文判断，AI 也拿不准的进人工复核。</li>
            <li><strong>出日报</strong>：每天生成一份"哪些该归档、哪些要处理、哪些拿不准"的报告，给我自己看。</li>
            <li><strong>归档</strong>：只在我看完报告、明确点头之后，才把邮件移出收件箱（Gmail 里的"归档"就是去掉 INBOX 标签），并且随时可以恢复。</li>
          </ul>

          <div style={calloutStyle}>
            <strong>它绝不做的事：</strong>不发邮件、不删邮件、不改账号设置、不把邮件内容卖给或分享给任何广告商和数据商。
          </div>

          <h2 style={h2Style}>数据在哪里</h2>
          <p style={pStyle}>
            所有东西都在我自己的电脑上：授权凭据存在 macOS 钥匙串里，报告和计划存在本地并限制读取权限。没有云端数据库。
            为了分类，邮件内容会经过脱敏后发给 AI 模型服务商做一次判断，详见隐私政策。
          </p>

          <h2 style={h2Style}>English summary</h2>
          <p style={pStyle}>
            AI-OS Mail Assistant is a personal, self-hosted email triage tool that Winston built and runs on his own computer for his own mailboxes.
            It is not offered to the public and has no sign-up. It reads Gmail messages through the official Gmail API, sorts them with rules and an AI classifier,
            produces a daily report, and archives messages (removes the INBOX label) only after the owner approves. It never sends, deletes, or shares email.
          </p>

          <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid " + C.border, display: "flex", gap: 16, justifyContent: "center", fontSize: 14, flexWrap: "wrap" }}>
            <Link href="/mail-assistant/privacy" style={linkStyle}>隐私政策 / Privacy Policy →</Link>
            <Link href="/terms" style={{ color: C.textSec, textDecoration: "none" }}>本站服务条款</Link>
            <Link href="/" style={{ color: C.textSec, textDecoration: "none" }}>← Know U. Learning 首页</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

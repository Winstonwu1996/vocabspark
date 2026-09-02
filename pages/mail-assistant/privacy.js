import Head from "next/head";
import Link from "next/link";
import { C, FONT, FONT_DISPLAY, globalCSS, S } from '../../lib/theme';
import { BrandNavBar } from '../../components/BrandNavBar';

/* ═══════════════════════════════════════════════════════
   AI-OS Mail Assistant — 隐私政策
   Google OAuth 应用（同意页显示名 "AI-OS Mail Assistant"）专用。
   与 Know U. Learning 产品本身的隐私政策（/privacy）分开，互不覆盖。
   写真话：数据在哪、给谁看过、怎么删。
   ═══════════════════════════════════════════════════════ */

export default function MailAssistantPrivacy() {
  var page = { ...S.root, fontFamily: FONT };
  var container = { maxWidth: 720, margin: "0 auto", padding: "20px 20px 80px" };
  var card = { background: C.card, borderRadius: 16, border: "1px solid " + C.border, padding: "28px 24px", boxShadow: C.shadow, marginBottom: 16 };
  var h1Style = { ...S.heroTitle, fontFamily: FONT_DISPLAY, fontSize: 30, margin: "0 0 6px", textAlign: "left" };
  var leadStyle = { fontSize: 14, color: C.textSec, lineHeight: 1.7, margin: "0 0 18px" };
  var h2Style = { fontFamily: FONT_DISPLAY, fontSize: 20, fontWeight: 700, color: C.text, margin: "28px 0 10px", letterSpacing: "-0.01em" };
  var pStyle = { fontSize: 15, lineHeight: 1.8, color: C.text, margin: "0 0 12px" };
  var listStyle = { fontSize: 15, lineHeight: 1.85, color: C.text, paddingLeft: 22, margin: "0 0 12px" };
  var calloutStyle = { background: C.accentLight, border: "1px solid " + C.accent + "33", borderRadius: 10, padding: "14px 16px", fontSize: 14, lineHeight: 1.7, color: C.text, margin: "12px 0 16px" };
  var subtleNote = { background: C.bg, borderLeft: "3px solid " + C.teal, borderRadius: "0 8px 8px 0", padding: "12px 14px", fontSize: 13, lineHeight: 1.7, color: C.textSec, margin: "12px 0 16px" };

  return (
    <div style={page}>
      <Head>
        <title>隐私政策 — AI-OS Mail Assistant</title>
        <meta name="description" content="AI-OS Mail Assistant 隐私政策：这个个人邮件整理工具如何访问、使用、存储 Gmail 数据，以及如何撤销和删除。" />
        <meta name="robots" content="noindex" />
      </Head>
      <style>{globalCSS}</style>

      <BrandNavBar activeTab="" user={null} onUserCenterClick={function(){}} />

      <div style={container}>
        <div style={card}>
          <h1 style={h1Style}>🔒 隐私政策 · AI-OS Mail Assistant</h1>
          <p style={leadStyle}>最后更新：2026 年 9 月 2 日 · Privacy Policy of the AI-OS Mail Assistant Google OAuth application</p>

          <p style={pStyle}>
            本政策只适用于名为 <strong>AI-OS Mail Assistant</strong> 的 Google OAuth 应用（你在 Google 授权页看到的就是这个名字）。
            它是我（Winston）自建自用的邮件整理工具，只连接我自己授权的邮箱。
            Know U. Learning 学习产品本身的隐私政策在 <Link href="/privacy" style={{ color: C.accent, fontWeight: 700 }}>/privacy</Link>，两份互不覆盖。
          </p>
          <p style={pStyle}>
            一句话总结：<strong>邮件留在我自己的电脑上；为了分类会脱敏后让 AI 模型看一眼；不卖、不分享给广告或数据商；随时可撤销、可删除。</strong>
          </p>

          <h2 style={h2Style}>📦 访问哪些 Google 数据</h2>
          <p style={pStyle}>应用向 Google 申请两项 Gmail 权限，各自用途如下：</p>
          <ul style={listStyle}>
            <li><strong>读取邮件（gmail.readonly）</strong>：读取收件箱邮件的发件人、收件人、主题、日期、标签和正文，用于分类和生成报告。</li>
            <li><strong>修改邮件标签（gmail.modify）</strong>：仅用于给邮件<strong>去掉或加回 INBOX 标签</strong>（也就是 Gmail 的"归档"与"恢复"）。不用于发送、删除、永久移除任何邮件，也不用于修改账号设置。</li>
          </ul>
          <div style={subtleNote}>
            每一次归档都必须先由我本人看过报告并明确批准；程序自己不会在无人看管时动任何邮件。归档后会向 Google 回读核对，并可一键恢复。
          </div>

          <h2 style={h2Style}>🎯 数据用来做什么</h2>
          <ul style={listStyle}>
            <li>判断一封邮件属于哪一类（账单、验证码、营销、家人学校、需要处理的事项等）。</li>
            <li>生成每天一份给我自己看的整理报告。</li>
            <li>在我批准后执行归档，并记录执行回执以便核对和恢复。</li>
          </ul>
          <div style={calloutStyle}>
            <strong>绝不做的事：</strong>不出售数据；不把邮件内容交给广告平台、数据经纪商或任何信息转售方；不用邮件内容训练我自己的模型（我也没有自己的模型）；不向除下述分类服务以外的任何第三方传输邮件内容。
          </div>

          <h2 style={h2Style}>🤝 谁会看到数据</h2>
          <ul style={listStyle}>
            <li><strong>我自己</strong>：报告和计划只在我的电脑上，供我本人查看。</li>
            <li><strong>AI 模型服务商</strong>：规则判断不了的邮件，会把<strong>脱敏后</strong>的发件人、主题和正文摘录（去除验证码、密钥、账号等敏感片段）发给 AI 模型做一次分类。目前使用 OpenAI（通过授权登录的 Codex）或 Anthropic 的模型接口。模型只返回一个分类结论，不返回、也不由我方保留任何自由文本。传输全程 HTTPS。这些服务商各自的隐私政策适用于它们对请求数据的处理。</li>
            <li><strong>Google</strong>：作为 Gmail 的提供方，按 Google 自己的政策处理 API 调用。</li>
          </ul>

          <h2 style={h2Style}>💾 数据存在哪里、存多久</h2>
          <ul style={listStyle}>
            <li><strong>授权凭据</strong>：存在我电脑的 macOS 钥匙串中，读取与修改两项权限分开保存。</li>
            <li><strong>报告、计划、执行回执</strong>：以文件形式存在我的电脑本地，权限设为仅本机账户可读，不进任何云端数据库，不进代码仓库。</li>
            <li><strong>保留期</strong>：这些本地文件保留到我本人删除为止，我可以随时删除。</li>
          </ul>

          <h2 style={h2Style}>🗑 如何撤销和删除</h2>
          <ul style={listStyle}>
            <li>随时在 Google 账号的「第三方应用权限」页面（myaccount.google.com/permissions）移除 AI-OS Mail Assistant，授权即刻失效。</li>
            <li>撤销后，程序无法再访问该邮箱；本地已生成的报告可按下方联系方式要求删除，我会在收到后处理并回复。</li>
          </ul>

          <h2 style={h2Style}>📜 对 Google 政策的遵守</h2>
          <p style={pStyle}>
            AI-OS Mail Assistant's use and transfer to any other app of information received from Google APIs will adhere to the
            {" "}<a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" style={{ color: C.accent, fontWeight: 700 }}>Google API Services User Data Policy</a>,
            including the Limited Use requirements.
          </p>

          <h2 style={h2Style}>English summary</h2>
          <p style={pStyle}>
            This policy covers the Google OAuth application named "AI-OS Mail Assistant", a personal, self-hosted email triage tool used only for mailboxes its owner (Winston) authorizes.
            It requests <strong>gmail.readonly</strong> to read message metadata and bodies for classification, and <strong>gmail.modify</strong> solely to add or remove the INBOX label (archive and restore); it never sends, deletes, or changes account settings, and every archive requires the owner's explicit approval.
            Data stays on the owner's own computer: OAuth tokens in the macOS Keychain, reports and plans as local files with restricted permissions, no cloud database.
            To classify hard cases, redacted excerpts (sender, subject, body with sensitive fragments removed) are sent over HTTPS to an AI model provider (OpenAI via an authorized Codex login, or Anthropic) which returns only a category.
            Data is never sold, never shared with advertisers or data brokers, and never used to train models. Access can be revoked at any time at myaccount.google.com/permissions; local files are deleted on request.
          </p>

          <h2 style={h2Style}>📮 联系我</h2>
          <p style={pStyle}>
            任何与本应用相关的隐私问题或删除请求，发邮件到：
            <br />
            <a href="mailto:Winstonwu1996@icloud.com" style={{ color: C.accent, fontWeight: 700, fontSize: 16 }}>Winstonwu1996@icloud.com</a>
          </p>

          <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid " + C.border, display: "flex", gap: 12, justifyContent: "center", fontSize: 13, flexWrap: "wrap" }}>
            <Link href="/mail-assistant" style={{ color: C.textSec, textDecoration: "none" }}>← 应用主页</Link>
            <Link href="/privacy" style={{ color: C.textSec, textDecoration: "none" }}>Know U. Learning 隐私政策</Link>
            <Link href="/terms" style={{ color: C.textSec, textDecoration: "none" }}>服务条款 →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

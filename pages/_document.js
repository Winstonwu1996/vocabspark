import { Html, Head, Main, NextScript } from 'next/document';

// 站点公开域名 — 用于 og:image / og:url 绝对地址
const SITE_URL = "https://knowulearning.com";
const OG_TITLE = "Know U. Learning — 每个单词都是你的故事";
const OG_DESC = "AI 了解你的生活、爱好，把每一个单词变成属于你的故事。SSAT/SAT/TOEFL 备考神器。";
const OG_IMAGE = SITE_URL + "/api/og";

// ─── 自托管字体（2026-08-07 改；原本是 Google Fonts 外链）───────────────
// 换掉的原因：fonts.googleapis.com / fonts.gstatic.com 在中国大陆**不可达**，
// 而原来那是 <link rel="stylesheet">（阻塞渲染）且作用于**全站每个页面** ——
// 大陆用户打开任何一页都要先卡在连不上的域名上等超时，才开始渲染文字。
//
// 现在字体文件放在 public/fonts/（Inter + Fraunces 的 latin/latin-ext 可变字体分片，
// 共 260KB，SIL Open Font License 允许自托管）。@font-face 内联在这里：
//   · 零额外请求（比再引一个 .css 文件少一跳）
//   · font-display: swap ⇒ 字体在下载时先用系统兜底字，不挡文字显示
//   · unicode-range 保留原分片逻辑，中文照旧走系统字体（PingFang SC 等），不下载这两个字体
// 顺带全球用户也更快：同源、无跨域连接、无第三方 DNS。
//
// ⚠️ 字体文件名带 Google 的内容哈希。要更新字体版本，重新下载后同步改这里的 url。
const FONT_FACE_CSS = `
@font-face{font-family:'Inter';font-style:normal;font-weight:400 800;font-display:swap;src:url(/fonts/inter-UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;}
@font-face{font-family:'Inter';font-style:normal;font-weight:400 800;font-display:swap;src:url(/fonts/inter-UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}
@font-face{font-family:'Fraunces';font-style:normal;font-weight:400 800;font-display:swap;src:url(/fonts/fraunces-6NU78FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0KxCFTeP2Xz5fU8w.woff2) format('woff2');unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;}
@font-face{font-family:'Fraunces';font-style:normal;font-weight:400 800;font-display:swap;src:url(/fonts/fraunces-6NU78FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0KxC9TeP2Xz5c.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}
`.trim();

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head>
        <style dangerouslySetInnerHTML={{ __html: FONT_FACE_CSS }} />
        {/* Open Graph — 微信/Facebook/LinkedIn 分享卡片 */}
        <meta property="og:title" content={OG_TITLE} />
        <meta property="og:description" content={OG_DESC} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Know U. Learning" />
        <meta property="og:locale" content="zh_CN" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={OG_TITLE} />
        <meta name="twitter:description" content={OG_DESC} />
        <meta name="twitter:image" content={OG_IMAGE} />
        {/* 通用 SEO description */}
        <meta name="description" content={OG_DESC} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from 'next/document';

// 站点公开域名 — 用于 og:image / og:url 绝对地址
const SITE_URL = "https://knowulearning.com";
const OG_TITLE = "Know U. Learning — 每个单词都是你的故事";
const OG_DESC = "AI 了解你的生活、爱好，把每一个单词变成属于你的故事。SSAT/SAT/TOEFL 备考神器。";
const OG_IMAGE = SITE_URL + "/api/og";

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,500&display=swap"
          rel="stylesheet"
        />
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

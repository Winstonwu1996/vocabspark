/* ─── Know U. Learning — 自定义 404 页 ─── */
import Link from 'next/link';
import Head from 'next/head';
import { C, FONT, FONT_DISPLAY, S } from '../lib/theme';
import { BrandNavBar } from '../components/BrandNavBar';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>页面走丢了 · Know U. Learning</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div style={S.root}>
        <BrandNavBar activeTab="" />
        <div style={{
          maxWidth: 560,
          margin: "0 auto",
          padding: "40px 20px 80px",
          textAlign: "center",
          fontFamily: FONT,
        }}>
          <div style={{
            fontFamily: FONT_DISPLAY,
            fontSize: "min(120px, 28vw)",
            fontWeight: 800,
            color: C.accent,
            lineHeight: 1,
            letterSpacing: "-0.05em",
            marginBottom: 8,
            textShadow: "0 4px 24px rgba(196,107,48,0.15)",
          }}>
            404
          </div>

          <h1 style={{
            fontFamily: FONT_DISPLAY,
            fontSize: 26,
            fontWeight: 700,
            color: C.text,
            margin: "12px 0 14px",
            letterSpacing: "-0.02em",
          }}>
            页面走丢了 🤔
          </h1>

          <p style={{
            fontSize: 15,
            color: C.textSec,
            lineHeight: 1.7,
            margin: "0 auto 24px",
            maxWidth: 380,
          }}>
            可能是链接错了，也可能这个页面已被删除，或者还没上线。
          </p>

          <div style={{
            background: C.card,
            border: "1px solid " + C.border,
            borderRadius: 12,
            padding: "16px 18px",
            margin: "0 auto 28px",
            maxWidth: 380,
            textAlign: "left",
            fontSize: 13.5,
            color: C.textSec,
            lineHeight: 1.8,
            boxShadow: C.shadowSoft,
          }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: C.text, marginBottom: 6, letterSpacing: "0.03em" }}>
              可能的原因
            </div>
            <div>· 链接拼错了或已过期</div>
            <div>· 页面已被删除或迁移</div>
            <div>· 功能还在开发中</div>
          </div>

          <div style={{
            display: "flex",
            gap: 10,
            justifyContent: "center",
            flexWrap: "wrap",
          }}>
            <Link href="/" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "12px 24px",
              background: C.accent,
              color: "#fff",
              border: "none",
              borderRadius: 10,
              fontFamily: FONT,
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              textDecoration: "none",
              boxShadow: "0 4px 12px " + C.accent + "44",
            }}>
              ← 返回首页
            </Link>
            <Link href="/vocab" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "12px 22px",
              background: "transparent",
              color: C.text,
              border: "1px solid " + C.border,
              borderRadius: 10,
              fontFamily: FONT,
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
            }}>
              开始学习 →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

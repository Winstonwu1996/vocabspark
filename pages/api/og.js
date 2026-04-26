// Edge Runtime OG image generator for Know U. Learning
// 1200×630 social card — left brand block + right Chinese tagline block
// 用纯 JSX 矩形 + 系统字体（中文用 PingFang/HarmonyOS/微软雅黑兜底）
import { ImageResponse } from "@vercel/og";

export const config = { runtime: "edge" };

const C = {
  bg: "#f7f6f3",
  card: "#ffffff",
  accent: "#c46b30",
  accentLight: "#fdf1e8",
  gold: "#c8922e",
  goldLight: "#fdf6ea",
  text: "#2c2e33",
  textSec: "#6b7280",
  border: "#e5e2dd",
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: C.bg,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'PingFang SC', 'HarmonyOS Sans SC', 'Microsoft YaHei', sans-serif",
          position: "relative",
        }}
      >
        {/* 顶部品牌色条 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: `linear-gradient(90deg, ${C.accent} 0%, ${C.gold} 100%)`,
            display: "flex",
          }}
        />

        {/* 左侧品牌区 */}
        <div
          style={{
            width: 480,
            padding: "80px 56px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: C.card,
            borderRight: `1px solid ${C.border}`,
          }}
        >
          {/* Logo 圆角方块（用首字母 K 替代图片，避免远端资源） */}
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 22,
              background: `linear-gradient(135deg, ${C.accent} 0%, ${C.gold} 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 56,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              marginBottom: 36,
              boxShadow: "0 8px 24px rgba(196,107,48,0.28)",
            }}
          >
            K
          </div>

          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: C.text,
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Know U.</span>
            <span>Learning</span>
          </div>

          <div
            style={{
              marginTop: 28,
              fontSize: 20,
              color: C.textSec,
              fontStyle: "italic",
              letterSpacing: "0.02em",
              display: "flex",
            }}
          >
            Personal AI Language Tutor
          </div>
        </div>

        {/* 右侧 tagline 区 */}
        <div
          style={{
            flex: 1,
            padding: "80px 64px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: C.bg,
          }}
        >
          {/* 装饰小色块 */}
          <div
            style={{
              padding: "8px 18px",
              background: C.accentLight,
              color: C.accent,
              borderRadius: 999,
              fontSize: 20,
              fontWeight: 700,
              alignSelf: "flex-start",
              marginBottom: 36,
              border: `1px solid ${C.accent}33`,
              display: "flex",
            }}
          >
            SSAT · SAT · TOEFL
          </div>

          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: C.text,
              letterSpacing: "-0.035em",
              lineHeight: 1.15,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>每个单词</span>
            <span>都是你的故事</span>
          </div>

          <div
            style={{
              marginTop: 36,
              fontSize: 22,
              color: C.textSec,
              lineHeight: 1.5,
              maxWidth: 560,
              display: "flex",
            }}
          >
            AI 了解你的生活与爱好，把每一个生词
            变成属于你的真实场景。
          </div>
        </div>

        {/* 底部装饰圆点 */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 64,
            display: "flex",
            gap: 8,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 999, background: C.accent }} />
          <div style={{ width: 10, height: 10, borderRadius: 999, background: C.gold }} />
          <div style={{ width: 10, height: 10, borderRadius: 999, background: C.border }} />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

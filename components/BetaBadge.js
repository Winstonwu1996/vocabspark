// components/BetaBadge.js
//
// 全局 BETA 角标 — 右下角固定位置,提示当前是测试版 + 反馈入口
// 设计原则:
// - 不打断阅读: 不用顶部全屏 banner (NetworkBanner 才用,只在异常时)
// - 永驻可点: 让用户随时能反馈
// - 不上面 z-index 过高: 1000(低于 modal/overlay 1500+)
// - 移动端 / 桌面端都 OK: 14×54 chip 宽度小

import { useState } from 'react';

export default function BetaBadge() {
  var [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 1000,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {expanded ? (
        <div
          style={{
            background: 'linear-gradient(135deg, #fef3d2 0%, #fbe8a8 100%)',
            border: '1px solid #d4a050',
            borderRadius: 12,
            padding: '12px 14px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
            maxWidth: 260,
            fontSize: 12.5,
            color: '#3d2c1a',
            lineHeight: 1.55,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <span
              style={{
                background: '#c46b30',
                color: '#fff',
                padding: '1px 7px',
                borderRadius: 4,
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: '0.06em',
              }}
            >
              BETA
            </span>
            <strong style={{ fontSize: 13 }}>测试版 · 持续完善中</strong>
            <button
              onClick={function () { setExpanded(false); }}
              aria-label="收起"
              style={{
                marginLeft: 'auto',
                background: 'transparent',
                border: 'none',
                fontSize: 18,
                color: '#6b4f33',
                cursor: 'pointer',
                lineHeight: 1,
                padding: 0,
              }}
            >
              ×
            </button>
          </div>
          <div style={{ marginBottom: 8, opacity: 0.88 }}>
            遇到问题 / 看到错字 / 想要的功能 — 直接告诉我们,会快速修。
          </div>
          <a
            href="mailto:hello@knowulearning.com?subject=VocabSpark%20Beta%20%E5%8F%8D%E9%A6%88"
            style={{
              display: 'inline-block',
              padding: '6px 14px',
              background: '#c46b30',
              color: '#fff8e8',
              textDecoration: 'none',
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            ✉️ 发反馈
          </a>
        </div>
      ) : (
        <button
          onClick={function () { setExpanded(true); }}
          aria-label="测试版反馈"
          title="测试版 · 点击反馈"
          style={{
            background: 'linear-gradient(135deg, #c46b30 0%, #a05627 100%)',
            color: '#fff8e8',
            border: 'none',
            borderRadius: 999,
            padding: '6px 12px',
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: '0.08em',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(196, 107, 48, 0.35)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            fontFamily: 'inherit',
          }}
          onMouseEnter={function (e) {
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(196, 107, 48, 0.45)';
          }}
          onMouseLeave={function (e) {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(196, 107, 48, 0.35)';
          }}
        >
          <span>BETA</span>
          <span style={{ opacity: 0.85, fontSize: 13, fontWeight: 400 }}>·</span>
          <span style={{ fontWeight: 600, letterSpacing: 0 }}>反馈</span>
        </button>
      )}
    </div>
  );
}

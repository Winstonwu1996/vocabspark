// components/AtlasOnboarding.js
//
// 首次进入 Atlas Lab 的引导浮层。读 localStorage('atlas-tour-done') 判断是否已看过。
// 4 步要点 + "知道了" 一键关闭。零依赖，纯 React + 内联样式。
// 配色完全沿用 AtlasLabPage 的 HC 调色板，避免引入新色。

import { useState, useEffect } from 'react';
import { ALL_VIEWS } from '../lib/atlas-views';

const TOPIC_COUNT = ALL_VIEWS.length;

const HC = {
  parchment:   '#f4ead0',
  parchmentLo: '#e8dcb6',
  parchmentHi: '#fbf5e0',
  ink:         '#3d2c1a',
  inkLight:    '#6b4f33',
  accent:      '#c46b30',
  accentLight: '#f0d9c0',
  border:      '#d4c098',
  text:        '#2c1d10',
  textSec:     '#6b4f33',
  card:        '#fbf5e0',
};

const STORAGE_KEY = 'atlas-tour-done';

export default function AtlasOnboarding({ lang = 'cn' }) {
  // 默认 false，避免 SSR 闪烁；mount 后再读 localStorage
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const done = typeof window !== 'undefined' && window.localStorage.getItem(STORAGE_KEY);
      if (!done) setOpen(true);
    } catch (e) {
      // localStorage 不可用（隐私模式 / 沙盒），静默不显示
    }
  }, []);

  const dismiss = () => {
    try {
      if (typeof window !== 'undefined') window.localStorage.setItem(STORAGE_KEY, '1');
    } catch (e) { /* noop */ }
    setOpen(false);
  };

  if (!open) return null;

  const T = lang === 'cn' ? {
    title: '欢迎来到 Atlas Lab',
    subtitle: '一张图，看见每个历史事件的 4D 因果坐标',
    steps: [
      { icon: '🌍', title: '世界定位', desc: '上方小地图同时显示你的家乡、当前位置和本 Topic 的位置。' },
      { icon: '📚', title: `${TOPIC_COUNT} 个 Topic · G5–G8`, desc: '点上排彩色 chip 切 Topic；点 G5/G6/G7/G8 切学段。' },
      { icon: '⭐', title: '红星 = 5 层因果焦点', desc: '点闪烁的红星 pin，展开 5 层因果坐标（地理 / 气候 / 民生 / 制度 / 事件）。' },
      { icon: '🌐', title: '中 / EN · 历史 / 现代', desc: '语言和"古今对照"开关在控件第二行。试试切到"现代"看现在的版图。' },
    ],
    cta: '知道了，开始探索',
    skip: '跳过',
    hint: '（这条提示只显示一次，下次进来不会再出现）',
  } : {
    title: 'Welcome to Atlas Lab',
    subtitle: 'One map. The 4D causal coordinates of every event.',
    steps: [
      { icon: '🌍', title: 'World Locator', desc: 'The mini map above shows your hometown, current location, and this Topic at a glance.' },
      { icon: '📚', title: `${TOPIC_COUNT} Topics · G5–G8`, desc: 'Click a colored chip to switch Topics; tap G5/G6/G7/G8 for grade.' },
      { icon: '⭐', title: 'Red star = 5-layer causal focal point', desc: 'Click a blinking red star pin to open its 5-layer causal coordinates (geography / climate / society / institutions / events).' },
      { icon: '🌐', title: '中 / EN · Historical / Modern', desc: 'Language + "then vs now" toggles live in the second control row. Try "Modern" to see today\'s borders.' },
    ],
    cta: 'Got it — start exploring',
    skip: 'Skip',
    hint: '(This tip shows once. Won\'t come back next time.)',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={T.title}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(61, 44, 26, 0.55)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16,
        animation: 'atlasTourFadeIn 200ms ease-out',
      }}
      onClick={dismiss}
    >
      <style>{`
        @keyframes atlasTourFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes atlasTourPop {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 480, width: '100%',
          background: HC.parchmentHi,
          border: '2px solid ' + HC.ink,
          borderRadius: 14,
          boxShadow: '0 16px 48px rgba(0,0,0,0.28)',
          padding: '20px 22px 18px',
          fontFamily: '-apple-system, "PingFang SC", system-ui, sans-serif',
          color: HC.text,
          animation: 'atlasTourPop 240ms ease-out',
          maxHeight: '90vh', overflowY: 'auto',
        }}
      >
        {/* 关闭按钮 */}
        <button
          onClick={dismiss}
          aria-label={T.skip}
          style={{
            position: 'absolute', top: 0, right: 0,
            background: 'transparent', border: 'none',
            color: HC.textSec, cursor: 'pointer',
            fontSize: 11, padding: '4px 8px',
            fontFamily: 'inherit',
          }}
        >
          {T.skip} ✕
        </button>

        {/* 标题 */}
        <div style={{ marginBottom: 12 }}>
          <div style={{
            fontFamily: 'serif', fontSize: 20, fontWeight: 700,
            color: HC.text, letterSpacing: 0.5,
          }}>
            {T.title}
          </div>
          <div style={{ fontSize: 12, color: HC.inkLight, marginTop: 2 }}>
            {T.subtitle}
          </div>
        </div>

        {/* 4 步要点 */}
        <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 14px' }}>
          {T.steps.map((s, i) => (
            <li
              key={i}
              style={{
                display: 'flex', gap: 10, alignItems: 'flex-start',
                padding: '8px 10px',
                background: i % 2 === 0 ? HC.parchment : HC.accentLight,
                borderRadius: 8,
                border: '1px solid ' + HC.border,
                marginBottom: 6,
              }}
            >
              <div style={{
                fontSize: 22, lineHeight: 1, flexShrink: 0,
                width: 28, textAlign: 'center',
              }}>
                {s.icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: HC.text }}>
                  {s.title}
                </div>
                <div style={{ fontSize: 11.5, color: HC.textSec, lineHeight: 1.45, marginTop: 2 }}>
                  {s.desc}
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* CTA */}
        <button
          onClick={dismiss}
          style={{
            width: '100%', padding: '10px 14px',
            background: HC.accent, color: '#fff8e8',
            border: 'none', borderRadius: 8,
            fontSize: 13, fontWeight: 700,
            cursor: 'pointer', fontFamily: 'inherit',
            letterSpacing: 0.3,
          }}
        >
          {T.cta}
        </button>
        <div style={{ fontSize: 10, color: HC.textSec, textAlign: 'center', marginTop: 6 }}>
          {T.hint}
        </div>
      </div>
    </div>
  );
}

// components/KeyFiguresRow.js
//
// 人物要素行 — 在 5 层因果摘要下方显示该 Topic 的 4-5 个关键人物 / 角色集合
// 设计哲学：7 年级孩子最易上手是"我是谁的视角"。让他们能选择代入一个角色
// → 历史从抽象事件变成"你（cosplay 角色）的故事"。
//
// 当前实现：点击 chip → 弹 modal 显示该角色的 perspective hook
// 未来整合：当 history conversation mode 上线后，点击 chip → 直接进入 cosplay 对话流

import { useState } from 'react';

const HC = {
  parchmentHi: '#fbf5e0',
  parchmentLo: '#e8dcb6',
  ink:         '#3d2c1a',
  inkLight:    '#6b4f33',
  accent:      '#c46b30',
  border:      '#d4c098',
  text:        '#2c1d10',
  textSec:     '#6b4f33',
};

export default function KeyFiguresRow({ figures, lang = 'cn' }) {
  const [selected, setSelected] = useState(null);

  if (!figures || !Array.isArray(figures) || figures.length === 0) return null;

  const T = lang === 'cn' ? {
    label: '人物',
    sub: '点选一个角色，从他的视角看这个 Topic',
    hookPrefix: '如果你是',
    closeBtn: '关闭',
  } : {
    label: 'Figures',
    sub: 'Pick a role — see this Topic from their perspective',
    hookPrefix: 'If you were',
    closeBtn: 'Close',
  };

  const pickLabel = (obj, fallback = '') => {
    if (!obj) return fallback;
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj.cn || obj.en || fallback;
  };

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        columnGap: 10,
        rowGap: 4,
        fontSize: 12,
        lineHeight: 1.5,
        color: HC.text,
        marginTop: 6,
      }}>
        {/* Label column */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5,
          fontSize: 11,
          fontWeight: 700,
          color: '#9b3030',
          whiteSpace: 'nowrap',
          borderLeft: '3px solid #9b3030',
          paddingLeft: 7,
          alignSelf: 'flex-start',
          marginTop: 1,
        }}>
          <span style={{ fontSize: 13 }}>👤</span>
          <span>{T.label}</span>
        </div>
        {/* Figures chip row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
          {figures.map((f, i) => (
            <button
              key={i}
              onClick={() => setSelected(f)}
              title={T.hookPrefix + pickLabel(f.name) + '...'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                padding: '3px 9px',
                background: HC.parchmentHi,
                color: HC.text,
                border: '1px solid ' + HC.border,
                borderRadius: 999,
                fontSize: 11,
                fontWeight: 500,
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'all 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = HC.parchmentLo;
                e.currentTarget.style.borderColor = HC.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = HC.parchmentHi;
                e.currentTarget.style.borderColor = HC.border;
              }}
            >
              <span style={{ fontSize: 13 }}>{f.emoji || '👤'}</span>
              <span>{pickLabel(f.name)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Cosplay modal */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000,
            background: 'rgba(61, 44, 26, 0.55)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 16,
            animation: 'kuFadeIn 0.2s ease-out',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: 540, width: '100%',
              background: HC.parchmentHi,
              padding: '24px 28px',
              borderRadius: 12,
              border: '2px solid ' + HC.border,
              boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
              fontFamily: 'inherit',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <span style={{ fontSize: 36, flexShrink: 0 }}>{selected.emoji || '👤'}</span>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: 18, fontWeight: 700, color: HC.text,
                  fontFamily: 'serif', marginBottom: 2,
                }}>
                  {pickLabel(selected.name)}
                </div>
                <div style={{ fontSize: 11, color: HC.textSec, fontStyle: 'italic' }}>
                  {pickLabel(selected.role) || (lang === 'cn' ? '历史角色' : 'Historical role')}
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                aria-label={T.closeBtn}
                style={{
                  fontSize: 20, color: HC.textSec,
                  background: 'transparent', border: 'none',
                  cursor: 'pointer', padding: 0, lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>
            {/* Description / context */}
            {selected.bio && (
              <div style={{
                marginTop: 14, fontSize: 13, color: HC.text, lineHeight: 1.6,
              }}>
                {pickLabel(selected.bio)}
              </div>
            )}
            {/* Perspective hook */}
            {selected.hook && (
              <div style={{
                marginTop: 14,
                padding: '12px 14px',
                background: '#f3edf9',
                borderRadius: 8,
                borderLeft: '3px solid #a07cb8',
                fontSize: 13,
                color: HC.text,
                lineHeight: 1.65,
                fontStyle: 'italic',
              }}>
                <span style={{ fontWeight: 700, color: '#6c4499', fontStyle: 'normal' }}>
                  💭 {T.hookPrefix} {pickLabel(selected.name)}
                </span>
                {' — '}
                {pickLabel(selected.hook)}
              </div>
            )}
            {/* Future hint: integrate with conversation mode */}
            <div style={{
              marginTop: 16, fontSize: 10, color: HC.textSec,
              fontStyle: 'italic', textAlign: 'center',
            }}>
              {lang === 'cn'
                ? '（深度学版即将上线 — 你将能用这个角色身份与 AI 对话整个历史事件）'
                : '(Coming in deep-learn mode: you will dialogue this event AS this character with AI)'}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

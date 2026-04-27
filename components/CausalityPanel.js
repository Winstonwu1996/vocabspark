// components/CausalityPanel.js
//
// 因果链面板 — 4D 看 3D 的产品 magic：
// 点 L4 事件 → 展开支撑它的 L0/L1/L2/L3 + 时间链
//
// 接受 pin 对象（带 causality 字段），无 causality 时回退到简版 note 卡片。

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
  pinFill:     '#9b2c2c',
};

const LAYER_META_CN = {
  L0: { name: '地理', sub: 'Geography',    color: '#8b6f47', icon: '⛰️' },
  L1: { name: '气候', sub: 'Climate',      color: '#a07cb8', icon: '🌡️' },
  L2: { name: '民生', sub: 'Livelihood',   color: '#79a373', icon: '🌾' },
  L3: { name: '制度', sub: 'Institutions', color: '#5fa8a0', icon: '⚖️' },
  L4: { name: '事件', sub: 'Events',       color: '#c46b30', icon: '⚡' },
};
const LAYER_META_EN = {
  L0: { name: 'Geography',    sub: 'Permanent terrain',  color: '#8b6f47', icon: '⛰️' },
  L1: { name: 'Climate',      sub: 'Millennium cycles',  color: '#a07cb8', icon: '🌡️' },
  L2: { name: 'Livelihood',   sub: 'Century economy',    color: '#79a373', icon: '🌾' },
  L3: { name: 'Institutions', sub: 'Order',              color: '#5fa8a0', icon: '⚖️' },
  L4: { name: 'Trigger',      sub: 'Direct events',      color: '#c46b30', icon: '⚡' },
};
const PANEL_TEXT_CN = {
  badge: '4D 因果坐标',
  timeline: '时间链 · 因果传播',
  jumpHint: '点击跳转到该 Topic',
};
const PANEL_TEXT_EN = {
  badge: '4D Causal Coords',
  timeline: 'Timeline · Causal propagation',
  jumpHint: 'Click to jump to that Topic',
};

function pickLabel(label, lang) {
  if (!label) return '';
  return label[lang] || label.cn || label.en || '';
}

export default function CausalityPanel({ pin, lang = 'cn', onClose, yearToTopicId = {}, onJumpToYear, currentTopicId }) {
  if (!pin) return null;

  const LAYER_META = lang === 'cn' ? LAYER_META_CN : LAYER_META_EN;
  const PT = lang === 'cn' ? PANEL_TEXT_CN : PANEL_TEXT_EN;

  const c = pin.causality;
  const cleanLabel = pickLabel(pin.label, lang).replace(/^★\s*/, '');

  // 无 causality 数据 → 简版卡片（普通 city/event pin）
  // 加引导提示：要看完整 5 层因果，请点 ★ 红星 pin
  if (!c) {
    const hint = lang === 'cn'
      ? '这是城市 / 事件参考点。要看完整 5 层因果（地理 / 气候 / 民生 / 制度 / 事件），点闪烁的红星 ★ pin — 每个 Topic 至少 1 个。'
      : 'This is a city / event reference point. For full 5-layer causality (geography / climate / society / institutions / events), click a pulsing red ★ pin — every Topic has at least one.';
    return (
      <div style={panelOuter}>
        <div style={panelHeader}>
          <div style={{ flex: 1 }}>
            <div style={panelTitle}>
              {cleanLabel} <span style={panelYear}>· {pin.year}</span>
              <span style={{
                fontSize: 9, fontWeight: 600,
                color: HC.textSec, background: HC.parchmentLo,
                padding: '2px 6px', borderRadius: 3,
                marginLeft: 8, letterSpacing: 0.5,
                textTransform: 'uppercase',
              }}>{lang === 'cn' ? '参考点' : 'Reference'}</span>
            </div>
            <div style={panelSub}>{pickLabel(pin.note, lang)}</div>
            {/* 引导：点 ★ 看完整因果 */}
            <div style={{
              marginTop: 12,
              padding: '10px 12px',
              background: 'rgba(196, 107, 48, 0.08)',
              border: '1px dashed ' + HC.accent,
              borderRadius: 8,
              fontSize: 11.5,
              color: HC.text,
              lineHeight: 1.55,
              display: 'flex',
              gap: 8,
              alignItems: 'flex-start',
            }}>
              <span style={{ fontSize: 16, color: HC.pinFill, flexShrink: 0, lineHeight: 1 }}>★</span>
              <span>{hint}</span>
            </div>
          </div>
          <button onClick={onClose} style={closeBtn}>×</button>
        </div>
      </div>
    );
  }

  // 完整因果链
  return (
    <div style={panelOuter}>
      {/* 标题 + 总结 */}
      <div style={panelHeader}>
        <div style={{ flex: 1 }}>
          <div style={panelTitle}>
            {cleanLabel} <span style={panelYear}>· {pin.year}</span>
            <span style={magicBadge}>{PT.badge}</span>
          </div>
          <div style={panelSub}>{pickLabel(c.summary, lang)}</div>
        </div>
        <button onClick={onClose} style={closeBtn}>×</button>
      </div>

      {/* 5 层堆叠 */}
      <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {['L0', 'L1', 'L2', 'L3', 'L4'].map(k => {
          const meta = LAYER_META[k];
          const text = c[k] ? pickLabel(c[k], lang) : null;
          if (!text) return null;
          return (
            <div key={k} style={{
              display: 'flex',
              gap: 12,
              padding: '10px 12px',
              background: HC.parchmentHi,
              borderRadius: 8,
              borderLeft: `3px solid ${meta.color}`,
            }}>
              <div style={{
                flexShrink: 0,
                width: 56,
                fontSize: 13,
                fontWeight: 700,
                color: meta.color,
                fontFamily: 'serif',
              }}>
                <div style={{ fontSize: 16 }}>{meta.icon} {meta.name}</div>
                <div style={{ fontSize: 9, color: HC.inkLight, fontWeight: 500, letterSpacing: 0.5, marginTop: 1 }}>{k} · {meta.sub}</div>
              </div>
              <div style={{ flex: 1, fontSize: 12.5, color: HC.text, lineHeight: 1.6 }}>
                {text}
              </div>
            </div>
          );
        })}
      </div>

      {/* 时间链 */}
      {(c.antecedents?.length || c.consequences?.length) && (
        <div style={{ marginTop: 16 }}>
          <div style={{ fontSize: 11, color: HC.textSec, fontWeight: 700, letterSpacing: 1.5, marginBottom: 8, textTransform: 'uppercase' }}>
            {PT.timeline}
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 4,
            overflowX: 'auto',
            padding: '8px 4px 16px',
            background: HC.parchmentLo,
            borderRadius: 8,
          }}>
            {/* 前置事件 */}
            {(c.antecedents || []).map((e, i) => (
              <TimelineNode key={'a' + i} event={e} lang={lang} variant="antecedent"
                hasTopic={hasNearbyTopicOther(e.year, yearToTopicId, currentTopicId)} onJump={onJumpToYear} />
            ))}
            {/* 当前事件 */}
            <TimelineNode
              event={{ year: pin.year, label: { cn: cleanLabel, en: cleanLabel } }}
              lang={lang}
              variant="current"
            />
            {/* 后续事件 */}
            {(c.consequences || []).map((e, i) => (
              <TimelineNode key={'c' + i} event={e} lang={lang} variant="consequence"
                hasTopic={hasNearbyTopicOther(e.year, yearToTopicId, currentTopicId)} onJump={onJumpToYear} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// 时间链节点 — 如果某年附近有 Topic，节点变可点击（跳到对应 Topic）
function TimelineNode({ event, lang, variant, hasTopic, onJump }) {
  const isCurrent = variant === 'current';
  const labelText = (typeof event.label === 'string') ? event.label : (event.label[lang] || event.label.cn || event.label.en || '');
  const dotSize = isCurrent ? 14 : 8;
  const dotFill = isCurrent ? HC.pinFill : (variant === 'antecedent' ? HC.inkLight : HC.accent);
  const clickable = !isCurrent && hasTopic && onJump;

  return (
    <div
      onClick={clickable ? () => onJump(event.year) : undefined}
      title={clickable ? (lang === 'cn' ? '点击跳转到该 Topic' : 'Click to jump to that Topic') : undefined}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '0 0 auto',
        minWidth: isCurrent ? 80 : 70,
        maxWidth: 110,
        cursor: clickable ? 'pointer' : 'default',
        padding: '4px 2px',
        borderRadius: 6,
        background: clickable ? 'rgba(196, 107, 48, 0.06)' : 'transparent',
        border: clickable ? '1px dashed rgba(196, 107, 48, 0.4)' : '1px solid transparent',
        transition: 'background 0.15s, border-color 0.15s',
      }}
    >
      {/* 年代 */}
      <div style={{
        fontSize: isCurrent ? 12 : 10,
        fontWeight: isCurrent ? 700 : 600,
        color: isCurrent ? HC.pinFill : (clickable ? HC.accent : HC.text),
        fontFamily: 'serif',
      }}>{event.year}{clickable ? ' →' : ''}</div>
      {/* 圆点 */}
      <div style={{
        width: dotSize,
        height: dotSize,
        borderRadius: '50%',
        background: dotFill,
        border: isCurrent ? `2px solid ${HC.parchmentHi}` : (clickable ? `2px solid ${HC.accent}` : 'none'),
        boxShadow: isCurrent ? `0 0 0 2px ${HC.pinFill}` : 'none',
        margin: '4px 0',
      }} />
      {/* 标签 */}
      <div style={{
        fontSize: 10,
        textAlign: 'center',
        color: isCurrent ? HC.text : (clickable ? HC.accent : HC.textSec),
        fontWeight: isCurrent ? 600 : (clickable ? 700 : 500),
        lineHeight: 1.3,
        wordBreak: 'break-word',
        padding: '0 2px',
        textDecoration: clickable ? 'underline' : 'none',
      }}>{labelText}</div>
    </div>
  );
}

// 是否有 ±20 年内的 Topic、且 ≠ 当前 Topic（避免点了跳到自己）
function hasNearbyTopicOther(year, yearToTopicId, currentTopicId) {
  if (!yearToTopicId) return false;
  // 找最近年
  const allYears = Object.keys(yearToTopicId).map(Number);
  const candidate = yearToTopicId[year]
    ? year
    : allYears.find(y => Math.abs(y - year) <= 20);
  if (candidate === undefined) return false;
  return yearToTopicId[candidate] && yearToTopicId[candidate] !== currentTopicId;
}

// ── styles ──
const panelOuter = {
  background: HC.card,
  padding: 16,
  borderRadius: 12,
  border: `1px solid ${HC.border}`,
  marginBottom: 12,
  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
};
const panelHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: 12,
};
const panelTitle = {
  fontSize: 17,
  fontWeight: 700,
  color: HC.text,
  fontFamily: 'serif',
  display: 'flex',
  alignItems: 'baseline',
  flexWrap: 'wrap',
  gap: 6,
};
const panelYear = {
  fontSize: 13,
  fontWeight: 400,
  color: HC.inkLight,
};
const panelSub = {
  marginTop: 6,
  fontSize: 12.5,
  color: HC.textSec,
  lineHeight: 1.55,
  fontStyle: 'italic',
};
const magicBadge = {
  fontSize: 9.5,
  fontWeight: 700,
  letterSpacing: 1,
  padding: '2px 8px',
  background: HC.accentLight,
  color: HC.accent,
  borderRadius: 999,
  textTransform: 'uppercase',
};
const closeBtn = {
  background: 'transparent',
  border: 'none',
  color: HC.inkLight,
  cursor: 'pointer',
  fontSize: 22,
  lineHeight: 1,
  padding: '0 4px',
};

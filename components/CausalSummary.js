// components/CausalSummary.js
//
// 解析 view recipe 的 causalSummary（"L0 ... + L1 ... + L2 ... + L3 ... + L4 ..."），
// 渲染为 5 行图标 + 颜色条 + 内容。
//
// Phase 3 升级：
//   - 去掉每行 ▼ 标识（简单用户不被打扰）
//   - 行可点击但不暗示（hover 才高亮）
//   - 底部统一入口按钮 "🐾 让 kuKitty 读懂这一页" — 一键展开所有 5 层
//   - L4 事件层自动拆成可点击的事件 chips（按 → 分隔）— 时间链 AI 解读

import { useState, useEffect } from 'react';

const LAYER_META_CN = {
  L0: { name: '地理', color: '#8b6f47', icon: '⛰️' },
  L1: { name: '气候', color: '#a07cb8', icon: '🌡️' },
  L2: { name: '民生', color: '#79a373', icon: '🌾' },
  L3: { name: '制度', color: '#5fa8a0', icon: '⚖️' },
  L4: { name: '事件', color: '#c46b30', icon: '⚡' },
};

const LAYER_META_EN = {
  L0: { name: 'Geography',    color: '#8b6f47', icon: '⛰️' },
  L1: { name: 'Climate',      color: '#a07cb8', icon: '🌡️' },
  L2: { name: 'Society',      color: '#79a373', icon: '🌾' },
  L3: { name: 'Institutions', color: '#5fa8a0', icon: '⚖️' },
  L4: { name: 'Events',       color: '#c46b30', icon: '⚡' },
};

// 把 "L0 X + L1 Y + L2 Z + L3 W + L4 V" 拆成 { L0: 'X', L1: 'Y', ... }
function parseLayers(text) {
  if (!text || typeof text !== 'string') return null;
  const re = /L([0-4])\s+(.+?)(?=\s*\+\s*L[0-4]\s|$)/g;
  const out = { L0: '', L1: '', L2: '', L3: '', L4: '' };
  let matched = false;
  let m;
  while ((m = re.exec(text)) !== null) {
    out['L' + m[1]] = m[2].trim();
    matched = true;
  }
  return matched ? out : null;
}

// 把 L4 事件层文本（"1071 X → 1095 Y → 1099 Z"）拆成事件数组 — 按 → 或 -> 分隔
function parseTimeline(entry) {
  if (!entry) return null;
  // 匹配多种箭头：→ ⇒ -> →
  const arrows = /\s*[→⇒]+\s*|\s*->\s*/;
  const parts = entry.split(arrows).map(s => s.trim()).filter(Boolean);
  return parts.length >= 2 ? parts : null;
}

// localStorage cache（前端额外一层，避免重复调 API）
function getLocalCache(key) {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem('vocabspark_v1');
    const d = raw ? JSON.parse(raw) : null;
    return (d && d.causalCache && d.causalCache[key]) || null;
  } catch (_) { return null; }
}
function setLocalCache(key, value) {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem('vocabspark_v1');
    const d = raw ? JSON.parse(raw) : {};
    d.causalCache = d.causalCache || {};
    d.causalCache[key] = value;
    d.updatedAt = new Date().toISOString();
    localStorage.setItem('vocabspark_v1', JSON.stringify(d));
  } catch (_) {}
}

// ─── 单行解读 hook（共享 fetch 逻辑） ─────────────────────────────────
function useCausalExplain({ topicId, topicTitle, layer, entry, grade, lang }) {
  const [explanation, setExplanation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cacheKey = `${topicId}:${layer}:${grade}:${entry}`;

  const fetchIt = async () => {
    if (explanation || loading) return;
    // localStorage cache hit
    const local = getLocalCache(cacheKey);
    if (local) { setExplanation(local); return; }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/causal-explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicId, topicTitle, layer, entry,
          grade: grade || 7, lang: lang || 'cn',
        }),
        signal: AbortSignal.timeout(28000),
      });
      const json = await res.json();
      if (!res.ok || json.error) throw new Error(json.error || `http ${res.status}`);
      setExplanation(json.explanation);
      setLocalCache(cacheKey, json.explanation);
    } catch (e) {
      setError(lang === 'cn' ? '加载失败，再试一次？' : 'Load failed, retry?');
    } finally {
      setLoading(false);
    }
  };

  return { explanation, loading, error, fetchIt };
}

// ─── 时间链事件 chip — 点击弹 popover 显示 AI 解读 ───────────────────
function TimelineEvent({ event, topicId, topicTitle, grade, lang, color }) {
  const [open, setOpen] = useState(false);
  const { explanation, loading, error, fetchIt } = useCausalExplain({
    topicId, topicTitle, layer: 'event', entry: event, grade, lang,
  });

  const handleClick = (e) => {
    e.stopPropagation();
    if (open) { setOpen(false); return; }
    setOpen(true);
    fetchIt();
  };

  return (
    <span style={{ display: 'inline-block', position: 'relative' }}>
      <span
        onClick={handleClick}
        style={{
          display: 'inline-block',
          padding: '1px 6px',
          fontSize: 12,
          borderRadius: 4,
          cursor: 'pointer',
          color: open ? '#fff8e8' : '#3d2c1a',
          background: open ? color : 'transparent',
          border: '1px dashed ' + (open ? color : 'transparent'),
          transition: 'background 0.15s, border-color 0.15s',
        }}
        onMouseEnter={(e) => {
          if (!open) {
            e.currentTarget.style.background = 'rgba(196,107,48,0.08)';
            e.currentTarget.style.borderColor = 'rgba(196,107,48,0.3)';
          }
        }}
        onMouseLeave={(e) => {
          if (!open) {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'transparent';
          }
        }}
        title={lang === 'cn' ? '点击让 kuKitty 解读这个事件' : 'Tap for kuKitty explanation'}
      >{event}</span>
      {open && (
        <span
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'absolute',
            top: '100%', left: 0,
            marginTop: 4,
            zIndex: 50,
            minWidth: 240, maxWidth: 360,
            padding: '8px 10px',
            background: 'linear-gradient(135deg, #fff8e8, #fbf5e0)',
            border: '1.5px solid ' + color,
            borderRadius: 8,
            boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
            fontSize: 12,
            lineHeight: 1.6,
            color: '#3d2c1a',
            fontWeight: 400,
            whiteSpace: 'normal',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: 10, fontWeight: 700, color: color, letterSpacing: 0.5 }}>
              🐾 kuKitty {lang === 'cn' ? '解读' : 'explains'}
            </span>
            <button
              onClick={(e) => { e.stopPropagation(); setOpen(false); }}
              style={{
                background: 'transparent', border: 'none',
                color: '#6b4f33', fontSize: 12, cursor: 'pointer',
                padding: 0, lineHeight: 1,
              }}
            >×</button>
          </div>
          {loading && <div style={{ color: '#6b4f33', fontStyle: 'italic' }}>...</div>}
          {error && <div style={{ color: '#9b2c2c' }}>{error}</div>}
          {explanation && !loading && <div style={{ whiteSpace: 'pre-wrap' }}>{explanation}</div>}
        </span>
      )}
    </span>
  );
}

// ─── 一行因果 + 行下方 AI bubble（受 forceOpen 控制） ───────────────
function CausalRow({ layerKey, meta, entry, topicId, topicTitle, grade, lang, forceOpen }) {
  const [openLocal, setOpenLocal] = useState(false);
  const { explanation, loading, error, fetchIt } = useCausalExplain({
    topicId, topicTitle, layer: layerKey, entry, grade, lang,
  });

  // forceOpen 由父统一入口按钮触发
  const open = openLocal || forceOpen;

  // forceOpen 触发时自动 fetch
  useEffect(() => {
    if (forceOpen && !explanation && !loading) {
      fetchIt();
    }
  }, [forceOpen]);

  const handleRowClick = () => {
    if (openLocal) { setOpenLocal(false); return; }
    setOpenLocal(true);
    fetchIt();
  };

  // L4 事件层：拆成可点击 chips
  const timelineEvents = layerKey === 'L4' ? parseTimeline(entry) : null;

  return (
    <div style={{ display: 'contents' }}>
      <div
        onClick={timelineEvents ? null : handleRowClick}
        title={timelineEvents ? '' : (lang === 'cn' ? '点击让 AI 帮你读懂这一行' : 'Tap for AI explanation')}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5,
          fontSize: 11,
          fontWeight: 700,
          color: meta.color,
          whiteSpace: 'nowrap',
          borderLeft: '3px solid ' + meta.color,
          paddingLeft: 7,
          alignSelf: 'flex-start',
          marginTop: 1,
          cursor: timelineEvents ? 'default' : 'pointer',
        }}
      >
        <span style={{ fontSize: 13 }}>{meta.icon}</span>
        <span>{meta.name}</span>
      </div>
      <div
        onClick={timelineEvents ? null : handleRowClick}
        title={timelineEvents ? '' : (lang === 'cn' ? '点击让 AI 帮你读懂这一行' : 'Tap for AI explanation')}
        style={{
          fontSize: 12,
          color: '#3d2c1a',
          cursor: timelineEvents ? 'default' : 'pointer',
          borderRadius: 4,
          padding: '1px 4px',
          margin: '-1px -4px',
          transition: 'background 0.15s',
        }}
        onMouseEnter={(e) => {
          if (!timelineEvents) e.currentTarget.style.background = 'rgba(196, 107, 48, 0.06)';
        }}
        onMouseLeave={(e) => {
          if (!timelineEvents) e.currentTarget.style.background = 'transparent';
        }}
      >
        {timelineEvents ? (
          // 时间链：每个事件独立可点
          <span>
            {timelineEvents.map((ev, i) => (
              <span key={i}>
                {i > 0 && <span style={{ color: meta.color, margin: '0 4px', fontWeight: 600 }}>→</span>}
                <TimelineEvent
                  event={ev}
                  topicId={topicId}
                  topicTitle={topicTitle}
                  grade={grade}
                  lang={lang}
                  color={meta.color}
                />
              </span>
            ))}
          </span>
        ) : (
          <span>{entry}</span>
        )}
        {/* 非时间链行的 AI bubble — 由 forceOpen 或单击触发 */}
        {open && !timelineEvents && (
          <div style={{
            marginTop: 6,
            padding: '8px 10px',
            background: 'linear-gradient(135deg, rgba(196,107,48,0.06), rgba(196,107,48,0.02))',
            border: '1px dashed ' + meta.color,
            borderRadius: 8,
            fontSize: 12,
            lineHeight: 1.6,
            color: '#3d2c1a',
            fontWeight: 400,
            animation: 'kuFadeIn 0.25s ease-out',
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{
              fontSize: 10, fontWeight: 700, color: meta.color,
              marginBottom: 4, letterSpacing: 0.5,
            }}>
              🐾 {lang === 'cn' ? 'kuKitty 解读' : 'kuKitty explains'}
            </div>
            {loading && <div style={{ color: '#6b4f33', fontStyle: 'italic' }}>...</div>}
            {error && <div style={{ color: '#9b2c2c' }}>{error}</div>}
            {explanation && !loading && <div style={{ whiteSpace: 'pre-wrap' }}>{explanation}</div>}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── 主组件 ────────────────────────────────────────────────────────
export default function CausalSummary({ text, lang = 'cn', topicId, topicTitle, grade }) {
  const META = lang === 'cn' ? LAYER_META_CN : LAYER_META_EN;
  const parsed = parseLayers(text);

  // 统一入口：一键展开所有 5 层
  const [expandAll, setExpandAll] = useState(false);

  if (!parsed) {
    return (
      <span style={{ fontSize: 11, color: '#6b4f33', fontStyle: 'italic' }}>
        {text}
      </span>
    );
  }

  const rows = ['L0', 'L1', 'L2', 'L3', 'L4'].filter(k => parsed[k]);
  const interactive = !!topicId;

  return (
    <div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        columnGap: 10,
        rowGap: 4,
        fontSize: 12,
        lineHeight: 1.5,
        color: '#3d2c1a',
        maxWidth: '100%',
      }}>
        {rows.map(k => {
          const m = META[k];
          if (interactive) {
            return (
              <CausalRow
                key={k}
                layerKey={k}
                meta={m}
                entry={parsed[k]}
                topicId={topicId}
                topicTitle={topicTitle}
                grade={grade}
                lang={lang}
                forceOpen={expandAll}
              />
            );
          }
          // 静态降级
          return (
            <div key={k} style={{ display: 'contents' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                fontSize: 11, fontWeight: 700, color: m.color, whiteSpace: 'nowrap',
                borderLeft: '3px solid ' + m.color, paddingLeft: 7, alignSelf: 'flex-start', marginTop: 1,
              }}>
                <span style={{ fontSize: 13 }}>{m.icon}</span>
                <span>{m.name}</span>
              </div>
              <div style={{ fontSize: 12, color: '#3d2c1a' }}>{parsed[k]}</div>
            </div>
          );
        })}
      </div>

      {/* 统一入口：让 kuKitty 一次性解读全部（行内事件 chip 单独处理） */}
      {interactive && !expandAll && (
        <div style={{ marginTop: 8, textAlign: 'center' }}>
          <button
            onClick={() => setExpandAll(true)}
            style={{
              padding: '5px 14px',
              background: 'linear-gradient(135deg, #fef8df, #fde9b3)',
              color: '#6c4499',
              border: '1px dashed #d4a050',
              borderRadius: 999,
              fontSize: 11.5, fontWeight: 700,
              cursor: 'pointer', fontFamily: 'inherit',
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 3px 10px rgba(108, 68, 153, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            title={lang === 'cn' ? '一键让 AI 帮你读懂这 5 层因果' : 'One-click AI explanation for all 5 layers'}
          >
            🐾 {lang === 'cn' ? '让 kuKitty 帮我读懂这一页' : 'Let kuKitty explain this page'}
          </button>
        </div>
      )}
      {interactive && expandAll && (
        <div style={{ marginTop: 8, textAlign: 'center' }}>
          <button
            onClick={() => setExpandAll(false)}
            style={{
              padding: '4px 12px',
              background: 'transparent',
              color: '#6b4f33',
              border: '1px dashed #d4c098',
              borderRadius: 999,
              fontSize: 10.5, fontWeight: 500,
              cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            ▲ {lang === 'cn' ? '收起所有解读' : 'Collapse all'}
          </button>
        </div>
      )}
    </div>
  );
}

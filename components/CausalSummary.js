// components/CausalSummary.js
//
// 解析 view recipe 的 causalSummary（"L0 ... + L1 ... + L2 ... + L3 ... + L4 ..."），
// 渲染为 5 行图标 + 颜色条 + 内容 — 替代之前一行密密麻麻的 11px 斜体 jargon 墙。
// 12 岁学生第一眼能看清是 5 个层次，不再是字母编码。
//
// Phase 3 #3+#4：每行可点击 → AI 即时解读（DeepSeek + Upstash 缓存）
// 信息密度太压缩的痛点：「L0 黎凡特狭长海岸 + 圣地集中 + 朝圣商路」她看不懂
// 解决：点击 → kuKitty 在条目下方展开 60-120 字朋友语气的解读

import { useState } from 'react';

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

function CausalRow({ layerKey, meta, entry, topicId, topicTitle, grade, lang }) {
  const [open, setOpen] = useState(false);
  const [explanation, setExplanation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cacheKey = `${topicId}:${layerKey}:${grade}:${entry}`;

  const handleToggle = async () => {
    if (open) { setOpen(false); return; }
    setOpen(true);
    if (explanation) return; // 已加载过

    // 先查 localStorage cache
    const local = getLocalCache(cacheKey);
    if (local) { setExplanation(local); return; }

    // miss → 调 API
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/causal-explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topicId, topicTitle,
          layer: layerKey,
          entry,
          grade: grade || 7,
          lang: lang || 'cn',
        }),
        signal: AbortSignal.timeout(28000),
      });
      const json = await res.json();
      if (!res.ok || json.error) {
        throw new Error(json.error || `http ${res.status}`);
      }
      setExplanation(json.explanation);
      setLocalCache(cacheKey, json.explanation);
    } catch (e) {
      setError(lang === 'cn' ? '加载失败，再试一次？' : 'Load failed, retry?');
    } finally {
      setLoading(false);
    }
  };

  const T = lang === 'cn' ? {
    aiHint: '🐾 kuKitty 解读',
    clickHint: '点击让 AI 帮你读懂',
    retry: '重试',
  } : {
    aiHint: '🐾 kuKitty explains',
    clickHint: 'Tap for AI explanation',
    retry: 'Retry',
  };

  return (
    <div style={{ display: 'contents' }}>
      <div
        onClick={handleToggle}
        title={T.clickHint}
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
          cursor: 'pointer',
        }}
      >
        <span style={{ fontSize: 13 }}>{meta.icon}</span>
        <span>{meta.name}</span>
      </div>
      <div
        onClick={handleToggle}
        title={T.clickHint}
        style={{
          fontSize: 12,
          color: '#3d2c1a',
          cursor: 'pointer',
          borderRadius: 4,
          padding: '1px 4px',
          margin: '-1px -4px',
          transition: 'background 0.15s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(196, 107, 48, 0.06)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
      >
        <span>{entry}</span>
        <span style={{ fontSize: 9, marginLeft: 6, color: '#9a7e5a', fontWeight: 600 }}>
          {open ? '▲' : '▼'}
        </span>
        {open && (
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
              {T.aiHint}
            </div>
            {loading && (
              <div style={{ color: '#6b4f33', fontStyle: 'italic' }}>
                ...
              </div>
            )}
            {error && (
              <div style={{ color: '#9b2c2c' }}>
                {error}{' '}
                <button
                  onClick={(e) => { e.stopPropagation(); setExplanation(null); handleToggle(); handleToggle(); }}
                  style={{
                    background: 'transparent', border: '1px solid #9b2c2c', color: '#9b2c2c',
                    padding: '1px 8px', borderRadius: 4, fontSize: 10, cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >{T.retry}</button>
              </div>
            )}
            {explanation && !loading && (
              <div style={{ whiteSpace: 'pre-wrap' }}>{explanation}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CausalSummary({ text, lang = 'cn', topicId, topicTitle, grade }) {
  const META = lang === 'cn' ? LAYER_META_CN : LAYER_META_EN;
  const parsed = parseLayers(text);

  // 解析失败 → 兜底原样显示（向后兼容旧格式）
  if (!parsed) {
    return (
      <span style={{ fontSize: 11, color: '#6b4f33', fontStyle: 'italic' }}>
        {text}
      </span>
    );
  }

  const rows = ['L0', 'L1', 'L2', 'L3', 'L4'].filter(k => parsed[k]);
  // 没有 topicId 时降级为静态显示（向后兼容 — 例如其他地方调用没传 topicId）
  const interactive = !!topicId;

  return (
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
  );
}

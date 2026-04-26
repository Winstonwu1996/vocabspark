// components/CausalSummary.js
//
// 解析 view recipe 的 causalSummary（"L0 ... + L1 ... + L2 ... + L3 ... + L4 ..."），
// 渲染为 5 行图标 + 颜色条 + 内容 — 替代之前一行密密麻麻的 11px 斜体 jargon 墙。
// 12 岁学生第一眼能看清是 5 个层次，不再是字母编码。

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
  // 非贪婪匹配 L\d 后面到下一个 "+ L\d " 或字符串结尾
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

export default function CausalSummary({ text, lang = 'cn' }) {
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
        return (
          <div key={k} style={{ display: 'contents' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              fontSize: 11,
              fontWeight: 700,
              color: m.color,
              whiteSpace: 'nowrap',
              borderLeft: '3px solid ' + m.color,
              paddingLeft: 7,
              alignSelf: 'flex-start',
              marginTop: 1,
            }}>
              <span style={{ fontSize: 13 }}>{m.icon}</span>
              <span>{m.name}</span>
            </div>
            <div style={{
              fontSize: 12,
              color: '#3d2c1a',
            }}>
              {parsed[k]}
            </div>
          </div>
        );
      })}
    </div>
  );
}

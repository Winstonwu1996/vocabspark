// components/MapLegend.js
//
// 持久显示的地图图例。横向排列、紧凑、单行优先（窄屏自动 wrap）。
// 解释 5 类视觉元素：政体深/浅色、红星 pin、白圈、家乡、当前位置。
// 配色全部沿用 AtlasLabPage 的 HC 调色板。

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

// homeCity / nowCity 由 AtlasLabPage 从 user profile 传入
// 默认值 "中国" / "Irvine" 仅当用户未填 fromCity 时使用
export default function MapLegend({ lang = 'cn', homeCity, nowCity }) {
  const homeLabel = homeCity || (lang === 'cn' ? '中国' : 'China');
  const nowLabel = nowCity || 'Irvine';

  const items = lang === 'cn' ? [
    { swatch: <PolitySwatch />,        label: '政体颜色',  hint: '主角国家深色 · 邻国浅色' },
    { swatch: <StarSwatch />,          label: '红星 pin',   hint: '因果焦点（可点击展开 4D 坐标）' },
    { swatch: <CircleSwatch />,        label: '白圈',       hint: '城市 / 事件位置' },
    { swatch: <HomeSwatch />,          label: '家乡',       hint: '你的家乡（' + homeLabel + '）' },
    { swatch: <NowSwatch />,           label: '当前位置',   hint: '你现在的位置（' + nowLabel + '）' },
    { swatch: <ApTierSwatch />,        label: 'AP 进阶',     hint: '该年级 HSS 教材外，但 AP 必考' },
    { swatch: <ExtTierSwatch />,       label: '进阶',        hint: '教材延伸阅读，非 AP 重点' },
  ] : [
    { swatch: <PolitySwatch />,        label: 'Polity colors', hint: 'Focal=dark · Neighbors=light' },
    { swatch: <StarSwatch />,          label: 'Red star pin',  hint: 'Causal focal point (clickable)' },
    { swatch: <CircleSwatch />,        label: 'White circle',  hint: 'City / event location' },
    { swatch: <HomeSwatch />,          label: 'Home',          hint: 'Your hometown (' + homeLabel + ')' },
    { swatch: <NowSwatch />,           label: 'Now',           hint: 'Your current location (' + nowLabel + ')' },
    { swatch: <ApTierSwatch />,        label: 'AP+',           hint: 'Beyond grade HSS, heavily AP-tested' },
    { swatch: <ExtTierSwatch />,       label: 'Extra',         hint: 'Curriculum extension, not core AP' },
  ];

  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center',
      padding: '6px 12px',
      background: HC.parchmentHi,
      border: '1px solid ' + HC.border,
      borderRadius: 8,
      margin: '4px 0 8px',
      fontSize: 9.5,
      color: HC.text,
      fontFamily: 'inherit',
      lineHeight: 1.3,
    }}>
      <span style={{
        fontSize: 9, fontWeight: 700, color: HC.textSec,
        textTransform: 'uppercase', letterSpacing: 0.5,
        marginRight: 2,
      }}>
        {lang === 'cn' ? '图例' : 'Legend'}
      </span>
      {items.map((it, i) => (
        <span
          key={i}
          title={it.hint}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            whiteSpace: 'nowrap',
          }}
        >
          {it.swatch}
          <span style={{ fontWeight: 700, fontSize: 10 }}>{it.label}</span>
          <span style={{ color: HC.textSec, fontSize: 9.5 }}>{it.hint}</span>
        </span>
      ))}
    </div>
  );
}

// ——— 小色块 / 图标 ———

function PolitySwatch() {
  return (
    <span style={{ display: 'inline-flex', gap: 1 }}>
      <span style={{
        width: 12, height: 10, background: HC.accent,
        border: '1px solid ' + HC.ink, borderRadius: 2, display: 'inline-block',
      }} />
      <span style={{
        width: 12, height: 10, background: HC.accentLight,
        border: '1px solid ' + HC.border, borderRadius: 2, display: 'inline-block',
      }} />
    </span>
  );
}

function StarSwatch() {
  return (
    <span style={{
      width: 14, height: 14, display: 'inline-flex',
      alignItems: 'center', justifyContent: 'center',
      color: '#d4392c', fontSize: 13, lineHeight: 1,
    }}>★</span>
  );
}

function CircleSwatch() {
  return (
    <span style={{
      width: 10, height: 10, borderRadius: '50%',
      background: '#fff', border: '1.5px solid ' + HC.ink,
      display: 'inline-block',
    }} />
  );
}

function HomeSwatch() {
  return (
    <span style={{
      width: 14, height: 14, borderRadius: '50%',
      border: '1.5px dashed #2563eb',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 9, lineHeight: 1,
    }}>🏠</span>
  );
}

function NowSwatch() {
  return (
    <span style={{
      width: 14, height: 14, borderRadius: '50%',
      background: 'rgba(196, 107, 48, 0.22)',
      border: '1.5px solid ' + HC.accent,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 9, lineHeight: 1,
    }}>📍</span>
  );
}

// AP 进阶 chip 样式预览：紫色虚线边框 + 紫色 badge
function ApTierSwatch() {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 2,
      padding: '1px 5px',
      background: '#f3edf9',
      border: '1.5px dashed #a07cb8',
      borderRadius: 999,
      fontSize: 8, fontWeight: 700, color: '#6c4499',
      letterSpacing: '0.05em',
    }}>AP</span>
  );
}

// 进阶（非 AP）chip 样式预览：棕褐虚线边框 + 棕褐 badge
function ExtTierSwatch() {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 2,
      padding: '1px 5px',
      background: '#f0e6d2',
      border: '1.5px dashed #9a7e5a',
      borderRadius: 999,
      fontSize: 8, fontWeight: 700, color: '#6b4f33',
      letterSpacing: '0.05em',
    }}>Ext</span>
  );
}

// components/WorldLocator.js
//
// 顶部世界小地图 — 显示用户家乡 + 现在 + 当前 Topic 在世界上的位置。
// 用户先看世界，再钻进具体 Topic（DK Children's Atlas 经典 inset map 范式）。
//
// Phase 2 #2：默认折叠成一行 "📍 [Topic 标题] 在世界上哪里 ▼"
// 第一次进 Topic 自动展开 2.5s（强制 onboarding 一次），之后随时可点开
// 翻页隐喻：用 CSS rotateY 模拟"翻一页书"的物理感，对应 #1 flipbook 主题

const C = {
  parchment:   '#f4ead0',
  parchmentHi: '#fbf5e0',
  ocean:       '#cfd9d6',
  inkLight:    '#6b4f33',
  ink:         '#3d2c1a',
  land:        '#e8c897',
  homeBlue:    '#3a7ca5',
  nowOrange:   '#c46b30',
  topicRed:    '#9b2c2c',
};

export default function WorldLocator({ overview, currentLocation, lang = 'cn', collapsed = false, onToggle, topicTitle }) {
  if (!overview) return null;

  const T = lang === 'cn' ? {
    title: '🌍 世界定位',
    home: '家乡 · 中国',
    now: '现在 · Irvine',
    topic: '当前 Topic',
    hint: '先看世界再进入',
    collapsedHint: '看 Topic 在世界上哪里',
    expand: '▼ 展开',
    collapse: '▲ 折叠',
  } : {
    title: '🌍 World Locator',
    home: 'Home · China',
    now: 'Now · Irvine',
    topic: 'Current Topic',
    hint: 'Zoom in from world view',
    collapsedHint: 'See where this Topic is on Earth',
    expand: '▼ Open',
    collapse: '▲ Close',
  };

  const { viewBox, landPath, homePoint, nowPoint } = overview;

  // ── 折叠态：一行高的可点击 banner ──
  if (collapsed) {
    return (
      <div
        onClick={onToggle}
        style={{
          background: C.parchmentHi,
          padding: '8px 14px',
          borderRadius: 10,
          border: '1px solid #d4c098',
          marginBottom: 10,
          display: 'flex', alignItems: 'center', gap: 10,
          cursor: 'pointer',
          transition: 'background 0.15s, transform 0.15s',
          fontSize: 12,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#f8eecf';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = C.parchmentHi;
        }}
      >
        <span style={{ fontSize: 16, lineHeight: 1 }}>📍</span>
        <span style={{ flex: 1, color: C.ink, fontWeight: 600 }}>
          {topicTitle ? topicTitle + ' · ' : ''}{T.collapsedHint}
        </span>
        <span style={{ fontSize: 11, color: C.inkLight, opacity: 0.7 }}>{T.expand}</span>
      </div>
    );
  }

  // ── 展开态：完整世界地图 + 翻页动画 ──
  return (
    <div
      style={{
        background: C.parchmentHi,
        padding: 8,
        borderRadius: 12,
        border: '1px solid #d4c098',
        marginBottom: 10,
        display: 'flex',
        gap: 10,
        alignItems: 'center',
        transformOrigin: 'top center',
        animation: 'wlPageOpen 0.7s ease-out',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes wlPageOpen {
          0%   { transform: rotateX(-30deg) scaleY(0.4); opacity: 0; }
          50%  { opacity: 0.8; }
          100% { transform: rotateX(0deg) scaleY(1); opacity: 1; }
        }
      ` }} />
      <div style={{ flex: '0 0 auto', minWidth: 110 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, letterSpacing: 1 }}>
            {T.title}
          </div>
          {onToggle && (
            <button
              onClick={(e) => { e.stopPropagation(); onToggle(); }}
              title={T.collapse}
              style={{
                fontSize: 10, padding: '2px 6px',
                background: 'transparent', color: C.inkLight,
                border: '1px solid ' + '#d4c098', borderRadius: 4,
                cursor: 'pointer', fontFamily: 'inherit',
              }}
            >▲</button>
          )}
        </div>
        <div style={{ fontSize: 10, color: C.inkLight, fontStyle: 'italic', marginTop: 2 }}>
          {T.hint}
        </div>
        <div style={{ fontSize: 10, marginTop: 8 }}>
          <div style={{ color: C.homeBlue, fontWeight: 600 }}>● {T.home}</div>
          <div style={{ color: C.nowOrange, fontWeight: 600 }}>● {T.now}</div>
          <div style={{ color: C.topicRed, fontWeight: 600 }}>★ {T.topic}</div>
        </div>
      </div>

      <svg viewBox={viewBox} style={{ flex: 1, height: 130, display: 'block' }}>
        <defs>
          <pattern id="wlOcean" width="14" height="14" patternUnits="userSpaceOnUse">
            <rect width="14" height="14" fill={C.ocean} />
            <path d="M 0 7 Q 3 4 7 7 T 14 7" stroke={C.inkLight} strokeWidth="0.2" fill="none" opacity="0.3" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#wlOcean)" />
        <path d={landPath} fill={C.land} stroke={C.inkLight} strokeWidth={0.4} opacity={0.85} />

        {/* 家乡（中国） */}
        {homePoint && (
          <g>
            <circle cx={homePoint[0]} cy={homePoint[1]} r={5} fill="none" stroke={C.homeBlue} strokeWidth={1.5} strokeDasharray="2,1.5" />
            <circle cx={homePoint[0]} cy={homePoint[1]} r={2.5} fill={C.homeBlue} />
            <text x={homePoint[0]} y={homePoint[1] - 8} textAnchor="middle" fontSize={9} fontWeight={700} fill={C.homeBlue}
              stroke={C.parchmentHi} strokeWidth={2.5} paintOrder="stroke fill" fontFamily="serif">
              {lang === 'cn' ? '家乡' : 'Home'}
            </text>
          </g>
        )}

        {/* 现在（Irvine） */}
        {nowPoint && (
          <g>
            <circle cx={nowPoint[0]} cy={nowPoint[1]} r={4} fill={C.nowOrange} stroke="#fff8e8" strokeWidth={1} />
            <text x={nowPoint[0]} y={nowPoint[1] - 7} textAnchor="middle" fontSize={9} fontWeight={700} fill={C.nowOrange}
              stroke={C.parchmentHi} strokeWidth={2.5} paintOrder="stroke fill" fontFamily="serif">
              {lang === 'cn' ? '现在' : 'Now'}
            </text>
          </g>
        )}

        {/* 当前 Topic */}
        {currentLocation && currentLocation.centerXY && (
          <g>
            {/* 五角星 */}
            <polygon
              points="0,-7 2,-2 7,-2 3,1.5 5,7 0,3 -5,7 -3,1.5 -7,-2 -2,-2"
              fill={C.topicRed}
              stroke="#5a1a1a"
              strokeWidth={0.7}
              transform={`translate(${currentLocation.centerXY[0]},${currentLocation.centerXY[1]})`}
            />
            {/* 脉动 */}
            <circle cx={currentLocation.centerXY[0]} cy={currentLocation.centerXY[1]} r={10} fill="none" stroke={C.topicRed} strokeWidth={1} opacity={0.4}>
              <animate attributeName="r" from="6" to="14" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x={currentLocation.centerXY[0]} y={currentLocation.centerXY[1] - 12} textAnchor="middle" fontSize={9} fontWeight={700} fill={C.topicRed}
              stroke={C.parchmentHi} strokeWidth={2.5} paintOrder="stroke fill" fontFamily="serif">
              {currentLocation.label}{currentLocation.year ? ` · ${currentLocation.year}` : ''}
            </text>
          </g>
        )}

        {/* Home → Now 虚线连接（生命迁移路径） */}
        {homePoint && nowPoint && (
          <path
            d={`M ${homePoint[0]} ${homePoint[1]} Q ${(homePoint[0] + nowPoint[0]) / 2} ${Math.min(homePoint[1], nowPoint[1]) - 25} ${nowPoint[0]} ${nowPoint[1]}`}
            stroke={C.nowOrange}
            strokeWidth={0.8}
            strokeDasharray="2,2"
            fill="none"
            opacity={0.5}
          />
        )}
      </svg>
    </div>
  );
}

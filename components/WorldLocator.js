// components/WorldLocator.js
//
// 顶部世界小地图 — 显示用户家乡 + 现在 + 当前 Topic 在世界上的位置。
// 用户先看世界，再钻进具体 Topic（DK Children's Atlas 经典 inset map 范式）。

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

export default function WorldLocator({ overview, currentLocation, lang = 'cn' }) {
  if (!overview) return null;

  const T = lang === 'cn' ? {
    title: '🌍 世界定位',
    home: '家乡 · 中国',
    now: '现在 · Irvine',
    topic: '当前 Topic',
    hint: '先看世界再进入',
  } : {
    title: '🌍 World Locator',
    home: 'Home · China',
    now: 'Now · Irvine',
    topic: 'Current Topic',
    hint: 'Zoom in from world view',
  };

  const { viewBox, landPath, homePoint, nowPoint } = overview;

  return (
    <div style={{
      background: C.parchmentHi,
      padding: 8,
      borderRadius: 12,
      border: '1px solid #d4c098',
      marginBottom: 10,
      display: 'flex',
      gap: 10,
      alignItems: 'center',
    }}>
      <div style={{ flex: '0 0 auto', minWidth: 110 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.ink, letterSpacing: 1 }}>
          {T.title}
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

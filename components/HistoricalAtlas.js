// components/HistoricalAtlas.js
//
// 通用渲染器：吃服务端预算好的 props，按图层 toggle 输出 SVG。
// 前端纯展示，仅在客户端用 d3-geo 投影 user-personal 坐标（家乡/现在）。
// 服务端 SSR 只输出 cameraConfig，不再硬编码用户 PII。
// 支持 SVG 内 pan/zoom（按钮 + 拖拽 + 双击）— 手机/iPad 友好。

import { useState, useRef, useEffect, useCallback } from 'react';
import { projectLonLat, DEFAULT_PERSONAL } from '../lib/atlas-projection';

const C = {
  parchment:   '#f4ead0',
  parchmentHi: '#fbf5e0',
  ink:         '#3d2c1a',
  inkLight:    '#6b4f33',
  ocean:       '#cfd9d6',
  land:        '#e8c897',
  pinFill:     '#9b2c2c',
  pinStroke:   '#5a1a1a',
};

function pickLabel(label, lang) {
  if (!label) return '';
  return label[lang] || label.cn || label.en || '';
}

const zoomBtnStyle = {
  width: 30, height: 30,
  background: 'rgba(251, 245, 224, 0.94)',
  border: '1px solid #d4c098',
  borderRadius: 6,
  fontSize: 16, fontWeight: 700,
  color: '#3d2c1a',
  cursor: 'pointer',
  fontFamily: 'inherit',
  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  lineHeight: 1,
  padding: 0,
};

export default function HistoricalAtlas({
  rendered, layers, lang = 'cn', onPinClick, viewTitle, viewDescription,
  // 用户特定坐标（整合 auth 后由 user.profile 传入；默认为 founder 女儿 Willow 的设置）
  userHome = DEFAULT_PERSONAL.home,
  userNow  = DEFAULT_PERSONAL.now,
  homeLabelOverride,  // 可选：自定义"家乡"标签（如 "上海" 而非 "中国"）
  nowLabelOverride,
}) {
  const { viewBox, cameraConfig, landPath, politicalPaths, customPolygonPaths, politicalLabels, civilizationGroups, features, pins } = rendered;
  const HOME_BLUE = '#3a7ca5';
  const NOW_ORANGE = '#c46b30';
  const homeLabel = homeLabelOverride
    || (lang === 'cn' ? '🏠 家乡 · 中国' : '🏠 Home · China');
  const nowLabel = nowLabelOverride
    || (lang === 'cn' ? '📍 现在 · Irvine' : '📍 Now · Irvine');

  // ── pan/zoom state ─────────────────────────────────────
  // viewBox = "x y w h" — 减小 w/h 视觉放大；调 x/y 平移
  // 默认 1× 全图；手机自动 1.4×（屏窄文字模糊问题）；用户可点按钮 / 拖拽 / 双击调整
  const VIEW_W = 1000, VIEW_H = 600;
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [fullscreen, setFullscreen] = useState(false);
  const svgRef = useRef(null);
  const dragRef = useRef({ active: false, startX: 0, startY: 0, panStartX: 0, panStartY: 0, lastTouchDist: 0 });

  // 客户端首次挂载：手机自动 1.4× 起步
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const w = window.innerWidth || 1024;
      if (w < 480) setZoom(1.4);
      else if (w < 768) setZoom(1.2);
    }
  }, []);

  // Esc 退出全屏
  useEffect(() => {
    if (!fullscreen) return;
    const handler = (e) => { if (e.key === 'Escape') setFullscreen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [fullscreen]);

  // 计算当前 viewBox（基于 zoom + pan）
  const vbW = VIEW_W / zoom;
  const vbH = VIEW_H / zoom;
  // pan 限制：不让地图拉出视口太远
  const maxPanX = (VIEW_W - vbW) / 2 + VIEW_W * 0.2;  // 容许超出 20%
  const maxPanY = (VIEW_H - vbH) / 2 + VIEW_H * 0.2;
  const clampedPanX = Math.max(-maxPanX, Math.min(maxPanX, pan.x));
  const clampedPanY = Math.max(-maxPanY, Math.min(maxPanY, pan.y));
  const vbX = (VIEW_W - vbW) / 2 + clampedPanX;
  const vbY = (VIEW_H - vbH) / 2 + clampedPanY;
  const dynamicViewBox = `${vbX} ${vbY} ${vbW} ${vbH}`;

  const zoomIn = () => setZoom(z => Math.min(z * 1.4, 4));
  const zoomOut = () => setZoom(z => Math.max(z / 1.4, 0.5));
  const zoomReset = () => { setZoom(1); setPan({ x: 0, y: 0 }); };

  // 拖拽 pan（鼠标 + 单指触摸）
  const onPointerDown = useCallback((e) => {
    if (zoom <= 1) return; // 1× 时不允许拖拽
    if (e.target.closest('[role="button"]')) return; // pin 点击优先
    const touch = e.touches?.[0];
    const x = touch ? touch.clientX : e.clientX;
    const y = touch ? touch.clientY : e.clientY;
    dragRef.current = { active: true, startX: x, startY: y, panStartX: pan.x, panStartY: pan.y };
  }, [zoom, pan.x, pan.y]);

  const onPointerMove = useCallback((e) => {
    if (!dragRef.current.active) return;
    const touch = e.touches?.[0];
    const x = touch ? touch.clientX : e.clientX;
    const y = touch ? touch.clientY : e.clientY;
    // 屏幕 px → SVG 单位的换算
    const svgEl = svgRef.current;
    if (!svgEl) return;
    const rect = svgEl.getBoundingClientRect();
    const svgPxToVbScale = vbW / rect.width;
    const dx = (x - dragRef.current.startX) * svgPxToVbScale;
    const dy = (y - dragRef.current.startY) * svgPxToVbScale;
    setPan({
      x: dragRef.current.panStartX - dx,
      y: dragRef.current.panStartY - dy,
    });
  }, [vbW]);

  const onPointerUp = useCallback(() => { dragRef.current.active = false; }, []);

  // 双击放大（点击附近放大并居中）
  const onDoubleClick = useCallback((e) => {
    if (e.target.closest('[role="button"]')) return; // pin 不触发
    setZoom(z => Math.min(z * 1.6, 4));
  }, []);

  // 全屏 toggle

  // 客户端投影 — 不在 SSR 输出，避免硬编码用户 PII
  const personalMarkers = cameraConfig ? {
    home: userHome ? projectLonLat(cameraConfig, userHome) : null,
    now:  userNow  ? projectLonLat(cameraConfig, userNow)  : null,
  } : { home: null, now: null };
  const a11yTitle = viewTitle || 'Historical atlas map';
  const a11yDesc  = viewDescription || 'Historical atlas map';

  // 全屏模式：用 fixed 覆盖全屏，让 SVG 占满可视区
  const containerStyle = fullscreen ? {
    position: 'fixed', inset: 0, zIndex: 1000,
    background: C.parchmentHi,
    padding: 8,
    display: 'flex', flexDirection: 'column',
  } : { position: 'relative' };

  return (
    <div style={containerStyle}>
    {/* 缩放 + 全屏控件浮层（地图左下角 — 不挡 ★ 提示）*/}
    <div style={{
      position: 'absolute',
      bottom: fullscreen ? 14 : 14, left: 16,
      display: 'flex', flexDirection: 'column', gap: 4,
      zIndex: 6,
    }}>
      <button onClick={zoomIn} title={lang === 'cn' ? '放大' : 'Zoom in'} style={zoomBtnStyle}>＋</button>
      <button onClick={zoomOut} title={lang === 'cn' ? '缩小' : 'Zoom out'} style={zoomBtnStyle}>−</button>
      <button onClick={zoomReset} title={lang === 'cn' ? '重置' : 'Reset'} style={{ ...zoomBtnStyle, fontSize: 14 }}>⊙</button>
      <button onClick={() => setFullscreen(f => !f)} title={fullscreen ? (lang === 'cn' ? '退出全屏' : 'Exit fullscreen') : (lang === 'cn' ? '全屏看图' : 'Fullscreen')} style={{ ...zoomBtnStyle, fontSize: 14 }}>
        {fullscreen ? '✕' : '⛶'}
      </button>
      {/* 缩放百分比指示 */}
      {zoom !== 1 && (
        <div style={{
          fontSize: 9, fontWeight: 700,
          color: C.inkLight, textAlign: 'center',
          background: 'rgba(251, 245, 224, 0.94)',
          border: '1px solid #d4c098',
          borderRadius: 4,
          padding: '1px 0',
        }}>{Math.round(zoom * 100)}%</div>
      )}
    </div>

    <svg
      ref={svgRef}
      viewBox={dynamicViewBox}
      role="img"
      aria-labelledby="atlas-title atlas-desc"
      onMouseDown={onPointerDown}
      onMouseMove={onPointerMove}
      onMouseUp={onPointerUp}
      onMouseLeave={onPointerUp}
      onTouchStart={onPointerDown}
      onTouchMove={onPointerMove}
      onTouchEnd={onPointerUp}
      onDoubleClick={onDoubleClick}
      style={{
        width: '100%',
        height: fullscreen ? 'calc(100vh - 16px)' : 'auto',
        display: 'block',
        background: C.parchmentHi,
        borderRadius: fullscreen ? 0 : 12,
        cursor: zoom > 1 ? (dragRef.current.active ? 'grabbing' : 'grab') : 'default',
        touchAction: zoom > 1 ? 'none' : 'pinch-zoom',  // zoom 状态下禁用 native pinch（避免冲突）
        userSelect: 'none',
      }}
    >
      <title id="atlas-title">{a11yTitle}</title>
      <desc id="atlas-desc">{a11yDesc}</desc>
      <defs>
        <pattern id="oceanWaves" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill={C.ocean} />
          <path d="M 0 10 Q 5 6 10 10 T 20 10" stroke={C.inkLight} strokeWidth="0.3" fill="none" opacity="0.3" />
        </pattern>
        {/* 陆地 clip：自定义多边形 + 文明圈被裁剪到陆地（不入海）*/}
        <clipPath id="land-clip">
          <path d={landPath} />
        </clipPath>
        <filter id="softShadow" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.2" />
          <feOffset dx="1" dy="1.5" />
          <feComponentTransfer><feFuncA type="linear" slope="0.35" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* 海洋背景 */}
      <rect x="0" y="0" width="100%" height="100%" fill="url(#oceanWaves)" />

      {/* 海岸线 — 始终显示（无 L0 也能看到世界地图轮廓） */}
      <path d={landPath} fill="none" stroke={C.inkLight} strokeWidth={0.6} opacity={0.5} />

      {/* L0: 陆地填色（toggle 控制是否填米色羊皮纸） */}
      {layers.L0 && (
        <path d={landPath} fill={C.land} stroke="none" />
      )}

      {/* L3: ISO 多边形 */}
      {layers.L3 && politicalPaths.map((p, i) => (
        <path
          key={'iso-' + i}
          d={p.d}
          fill={p.fill}
          fillOpacity={p.opacity}
          stroke={p.stroke}
          strokeWidth={p.strokeWidth}
          strokeLinejoin="round"
        />
      ))}

      {/* L3: 历史 customPolygon（在 ISO 之上）— 裁剪到陆地，不入海 */}
      {layers.L3 && customPolygonPaths && (
        <g clipPath="url(#land-clip)">
          {customPolygonPaths.map((p, i) => (
            <path
              key={'custom-' + i}
              d={p.d}
              fill={p.fill}
              fillOpacity={p.opacity}
              stroke={p.stroke}
              strokeWidth={p.strokeWidth}
              strokeLinejoin="round"
            />
          ))}
        </g>
      )}

      {/* C: 文明圈层 — 填色被裁剪到陆地，标签不裁剪（保留可读性） */}
      {layers.C && civilizationGroups && (
        <>
          <g clipPath="url(#land-clip)">
            {civilizationGroups.map((civ) => (
              <g key={'civ-fill-' + civ.id}>
                {civ.paths.map((d, j) => (
                  <path
                    key={j}
                    d={d}
                    fill={civ.color}
                    fillOpacity={civ.opacity}
                    stroke="none"
                    pointerEvents="none"
                  />
                ))}
              </g>
            ))}
          </g>
          {/* 标签独立渲染（不在 clipPath 下） */}
          {civilizationGroups.map((civ) => (
            civ.labelXY && (
              <text
                key={'civ-label-' + civ.id}
                x={civ.labelXY.x} y={civ.labelXY.y}
                textAnchor="middle"
                fontSize={11}
                fontStyle="italic"
                fontWeight="600"
                fill={civ.color}
                fontFamily="serif"
                opacity={0.95}
                stroke="#fbf5e0"
                strokeWidth="3"
                paintOrder="stroke fill"
                style={{ pointerEvents: 'none' }}
              >{pickLabel(civ.label, lang)}</text>
            )
          ))}
        </>
      )}

      {/* F: 地理要素（在 L3 之上、L4 之下） */}
      {layers.F && features && features.map((f, i) => (
        <g key={'feat-' + i}>
          {!f.labelOnly && f.pathStrs && f.pathStrs.map((ps, j) => (
            <path
              key={j}
              d={ps}
              stroke={f.color}
              strokeWidth={f.width}
              strokeDasharray={f.dash || undefined}
              fill="none"
              opacity={f.eraNote ? 0.55 : 0.8}    // 遗存类要素透明度低一点
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          ))}
          {f.labelXY && (
            <text
              x={f.labelXY.x} y={f.labelXY.y}
              fontSize={10}
              fill={f.color}
              fontStyle="italic"
              fontFamily="serif"
              textAnchor="middle"
              stroke="#fbf5e0"
              strokeWidth="3"
              paintOrder="stroke fill"
              style={{ pointerEvents: 'none' }}
            >{pickLabel(f.label, lang)}{
              f.eraNote === 'as-ruins'       ? (lang === 'cn' ? '（遗迹）' : ' (ruins)')
            : f.eraNote === 'as-foundations' ? (lang === 'cn' ? '（路基）' : ' (roadbed)')
            : ''
            }</text>
          )}
        </g>
      ))}

      {/* L3 政治标签 */}
      {layers.L3 && politicalLabels.map((lbl, i) => (
        <text
          key={'lbl-' + i}
          x={lbl.x} y={lbl.y}
          textAnchor="middle"
          fontSize={lbl.fontSize}
          fontWeight={lbl.fontWeight}
          fill={lbl.color}
          fontFamily="serif"
          stroke="#fbf5e0"
          strokeWidth="3"
          paintOrder="stroke fill"
          style={{ pointerEvents: 'none' }}
        >{pickLabel(lbl.label, lang)}</text>
      ))}

      {/* L4: 事件 pin */}
      {layers.L4 && pins.map((p, i) => {
        const labelText = pickLabel(p.label, lang);
        // ★ pin 检测：两种语言任一有 ★ 或显式 featured 标记都算
        // （修复 EN 模式下 cn 有 ★ 但 en 没有时静默丢失星标治理的 bug）
        const isStarPin = !!p.featured
          || (p.label?.cn || '').includes('★')
          || (p.label?.en || '').includes('★');
        const cleanLabel = labelText.replace(/^★\s*/, '');
        const handlePinKey = (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onPinClick && onPinClick(p);
          }
        };
        return (
          <g
            key={'pin-' + i}
            role="button"
            tabIndex={0}
            aria-label={cleanLabel}
            onKeyDown={handlePinKey}
            style={{ cursor: onPinClick ? 'pointer' : 'default', outline: 'none' }}
            onFocus={(e) => { e.currentTarget.style.outline = '2px solid #c46b30'; }}
            onBlur={(e) => { e.currentTarget.style.outline = 'none'; }}
            onClick={() => onPinClick && onPinClick(p)}
          >
            {/* 透明扩大触控区 — 视觉仍 4px，但触控区 36-44 SVG-px。
                SVG viewBox=1000×600，375 CSS px 显示时 2.67× 缩小，36 SVG-px ≈ 13 CSS-px；
                768 CSS px（iPad）时 1.3× 缩小，36 SVG-px ≈ 28 CSS-px；
                1024+ CSS px（桌面）≈ 36 CSS-px 接近 Apple HIG 44pt 推荐。
                视觉星 polygon r=9，中心圆 r=4，hit area r=36 不挡视觉。*/}
            <circle cx={p.x} cy={p.y} r={isStarPin ? 44 : 36} fill="transparent" />
            {/* ★ pin 加双层脉动环 + 真五角星形状 — 强化视觉吸引（区分简卡 city pin） */}
            {isStarPin ? (
              <>
                {/* 外层脉动光环（更大、更慢、暗）*/}
                <circle cx={p.x} cy={p.y} r={20} fill="none" stroke={C.pinFill} strokeWidth={1} opacity={0.25}>
                  <animate attributeName="r" from="14" to="28" dur="2.4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.45" to="0" dur="2.4s" repeatCount="indefinite" />
                </circle>
                {/* 内层脉动光环 */}
                <circle cx={p.x} cy={p.y} r={14} fill="none" stroke={C.pinFill} strokeWidth={1.8} opacity={0.5}>
                  <animate attributeName="r" from="10" to="20" dur="1.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.75" to="0" dur="1.6s" repeatCount="indefinite" />
                </circle>
                {/* 五角星本体（10 顶点 polygon） */}
                <polygon
                  points="0,-10 2.9,-3.1 10,-3.1 4.5,1.2 6.2,9 0,4.5 -6.2,9 -4.5,1.2 -10,-3.1 -2.9,-3.1"
                  fill={C.pinFill}
                  stroke={C.pinStroke}
                  strokeWidth={1.3}
                  strokeLinejoin="round"
                  filter="url(#softShadow)"
                  transform={`translate(${p.x},${p.y})`}
                />
              </>
            ) : (
              <circle
                cx={p.x} cy={p.y}
                r={4}
                fill={C.parchmentHi}
                stroke={C.pinStroke}
                strokeWidth={1.5}
                filter="url(#softShadow)"
              />
            )}
            <text
              x={p.x + (p.labelDx ?? 9)} y={p.y + (p.labelDy ?? 4)}
              textAnchor={p.labelAnchor || 'start'}
              fontSize={isStarPin ? 12 : 11}
              fontWeight={isStarPin ? 700 : 500}
              fill={C.ink}
              stroke="#fbf5e0"
              strokeWidth="3"
              paintOrder="stroke fill"
              fontFamily="serif"
              style={{ pointerEvents: 'none' }}
            >{cleanLabel}</text>
          </g>
        );
      })}

      {/* 个人代入感：家乡 + 现在的位置 — 始终最顶层，无 layer toggle */}
      {personalMarkers && personalMarkers.home && (
        <g style={{ pointerEvents: 'none' }}>
          <circle
            cx={personalMarkers.home.x} cy={personalMarkers.home.y}
            r={9} fill="none" stroke={HOME_BLUE} strokeWidth={1.6}
            strokeDasharray="3,2" opacity={0.85}
          />
          <circle
            cx={personalMarkers.home.x} cy={personalMarkers.home.y}
            r={3.5} fill={HOME_BLUE} stroke="#fbf5e0" strokeWidth={1.2}
          />
          <text
            x={personalMarkers.home.x + 12} y={personalMarkers.home.y + 4}
            fontSize={11} fontWeight={700} fill={HOME_BLUE}
            stroke="#fbf5e0" strokeWidth="3" paintOrder="stroke fill"
            fontFamily="serif"
          >{homeLabel}</text>
        </g>
      )}
      {personalMarkers && personalMarkers.now && (
        <g style={{ pointerEvents: 'none' }}>
          <circle
            cx={personalMarkers.now.x} cy={personalMarkers.now.y}
            r={4} fill={NOW_ORANGE} stroke="#fbf5e0" strokeWidth={1.4}
          />
          <circle
            cx={personalMarkers.now.x} cy={personalMarkers.now.y}
            r={9} fill="none" stroke={NOW_ORANGE} strokeWidth={1.2} opacity={0.5}
          >
            <animate attributeName="r" from="5" to="13" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.6" to="0" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <text
            x={personalMarkers.now.x + 11} y={personalMarkers.now.y + 4}
            fontSize={11} fontWeight={700} fill={NOW_ORANGE}
            stroke="#fbf5e0" strokeWidth="3" paintOrder="stroke fill"
            fontFamily="serif"
          >{nowLabel}</text>
        </g>
      )}
    </svg>
    </div>
  );
}

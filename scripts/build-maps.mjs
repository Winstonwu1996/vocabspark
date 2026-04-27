#!/usr/bin/env node
/**
 * scripts/build-maps.mjs
 *
 * Builds DK-style stylized SVG maps for the History module.
 * - Reads Natural Earth simplified topojson (downloaded from world-atlas CDN)
 * - Projects with d3-geo
 * - Wraps with parchment + warm-ink design system
 *
 * Outputs:
 *   public/maps/world-base.svg
 *   public/maps/europe-1200.svg
 *
 * Usage:
 *   node scripts/build-maps.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { feature } from 'topojson-client';
import {
  geoEqualEarth,
  geoMercator,
  geoConicConformal,
  geoPath,
  geoBounds,
  geoCentroid,
} from 'd3-geo';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ── Design system (DK-Children's Illustrated History Atlas vibe) ──────────
const C = {
  parchment:   '#f4ead0',     // 主背景 — 暖米色羊皮纸
  parchmentHi: '#fbf5e0',     // 高亮纸色
  parchmentLo: '#e8dcb6',     // 阴影纸色
  ink:         '#3d2c1a',     // 主轮廓 — 深棕色像旧墨
  inkLight:    '#6b4f33',     // 副线条
  ocean:       '#cfd9d6',     // 海洋色（偏灰青）
  oceanLine:   '#a8b4af',     // 海洋等深线
  land:        '#e8c897',     // 陆地基础色 — 淡橙赭
  landShade:   '#d4af75',     // 陆地阴影色
  highlight:   '#c46b30',     // 高亮 — 品牌 accent 色
  pinFill:     '#9b2c2c',     // pin 红（古典印章色）
  pinStroke:   '#5a1a1a',
  text:        '#2c1d10',
  textSec:     '#6b4f33',
};

// ── 读 topojson ────────────────────────────────────────────────────────────
const landTopo = JSON.parse(
  fs.readFileSync('/tmp/land-110m.json', 'utf8')
);
const countriesTopo = JSON.parse(
  fs.readFileSync('/tmp/countries-110m.json', 'utf8')
);

const land = feature(landTopo, landTopo.objects.land);
const countries = feature(countriesTopo, countriesTopo.objects.countries);

// ── 装饰元素 SVG fragments ─────────────────────────────────────────────────

/** Hand-drawn wobble filter — gives slightly imperfect ink-line feel */
const HANDDRAWN_FILTER = `
  <filter id="handdrawn" x="-2%" y="-2%" width="104%" height="104%">
    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="3"/>
    <feDisplacementMap in="SourceGraphic" scale="1.2"/>
  </filter>
  <filter id="parchment-texture" x="0%" y="0%" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" stitchTiles="stitch"/>
    <feColorMatrix values="0 0 0 0 0.92  0 0 0 0 0.85  0 0 0 0 0.7  0 0 0 0.05 0"/>
    <feComposite in2="SourceGraphic" operator="in"/>
  </filter>
  <filter id="soft-shadow" x="-5%" y="-5%" width="110%" height="110%">
    <feGaussianBlur in="SourceAlpha" stdDeviation="1.2"/>
    <feOffset dx="1" dy="1.5"/>
    <feComponentTransfer><feFuncA type="linear" slope="0.35"/></feComponentTransfer>
    <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
`;

/** 古典指南针 — 装饰元素 */
function compassRose(cx, cy, r = 36, label = 'N') {
  return `
  <g transform="translate(${cx} ${cy})" opacity="0.85">
    <circle r="${r}" fill="${C.parchmentHi}" stroke="${C.ink}" stroke-width="0.7"/>
    <circle r="${r * 0.65}" fill="none" stroke="${C.ink}" stroke-width="0.4" stroke-dasharray="2,2"/>
    <!-- Cardinal points -->
    <path d="M 0 ${-r * 0.95} L 4 0 L 0 ${r * 0.95} L -4 0 Z" fill="${C.ink}" stroke="${C.ink}" stroke-width="0.4"/>
    <path d="M ${-r * 0.95} 0 L 0 -3 L ${r * 0.95} 0 L 0 3 Z" fill="${C.ink}" opacity="0.35"/>
    <path d="M 0 ${-r * 0.95} L 3 -2 L 0 0 L -3 -2 Z" fill="${C.parchment}" stroke="${C.ink}" stroke-width="0.3"/>
    <text y="${-r - 4}" text-anchor="middle" font-family="serif" font-size="${r * 0.38}" font-weight="600" fill="${C.ink}">${label}</text>
  </g>`;
}

/** 装饰小图标 — 城堡 (King's seat) */
function castleIcon(x, y, scale = 1) {
  const s = scale;
  return `
  <g transform="translate(${x} ${y}) scale(${s})" opacity="0.9">
    <!-- 城堡主体 -->
    <rect x="-7" y="-2" width="14" height="9" fill="${C.parchmentHi}" stroke="${C.pinStroke}" stroke-width="0.7"/>
    <!-- 雉堞 -->
    <path d="M -7 -2 L -7 -6 L -4 -6 L -4 -3 L -1.5 -3 L -1.5 -6 L 1.5 -6 L 1.5 -3 L 4 -3 L 4 -6 L 7 -6 L 7 -2 Z"
          fill="${C.parchmentHi}" stroke="${C.pinStroke}" stroke-width="0.7"/>
    <!-- 中央旗杆塔 -->
    <rect x="-1.5" y="-9" width="3" height="3" fill="${C.parchmentHi}" stroke="${C.pinStroke}" stroke-width="0.6"/>
    <path d="M 0 -10 L 4 -9 L 0 -8 Z" fill="${C.pinFill}" stroke="${C.pinStroke}" stroke-width="0.4"/>
    <!-- 门 -->
    <path d="M -1.7 7 L -1.7 3 Q 0 1.5 1.7 3 L 1.7 7 Z" fill="${C.pinStroke}"/>
  </g>`;
}

/** 装饰小图标 — 卷轴/印章 (Magna Carta) */
function scrollIcon(x, y, scale = 1) {
  const s = scale;
  return `
  <g transform="translate(${x} ${y}) scale(${s})" opacity="0.95">
    <!-- 卷轴上下卷边 -->
    <ellipse cx="-7" cy="0" rx="2.5" ry="3.5" fill="${C.parchmentLo}" stroke="${C.pinStroke}" stroke-width="0.6"/>
    <ellipse cx="7"  cy="0" rx="2.5" ry="3.5" fill="${C.parchmentLo}" stroke="${C.pinStroke}" stroke-width="0.6"/>
    <!-- 主体 -->
    <rect x="-7" y="-3.5" width="14" height="7" fill="${C.parchmentHi}" stroke="${C.pinStroke}" stroke-width="0.6"/>
    <!-- 文字线 -->
    <line x1="-5" y1="-1.5" x2="5" y2="-1.5" stroke="${C.pinStroke}" stroke-width="0.4" opacity="0.55"/>
    <line x1="-5" y1="0"    x2="5" y2="0"    stroke="${C.pinStroke}" stroke-width="0.4" opacity="0.55"/>
    <line x1="-5" y1="1.5"  x2="3" y2="1.5"  stroke="${C.pinStroke}" stroke-width="0.4" opacity="0.55"/>
    <!-- 红印章 -->
    <circle cx="6" cy="3.5" r="2" fill="${C.pinFill}" stroke="${C.pinStroke}" stroke-width="0.5"/>
  </g>`;
}

/** 装饰小图标 — 教皇十字 (Pope @ Rome) */
function papalCrossIcon(x, y, scale = 1) {
  const s = scale;
  return `
  <g transform="translate(${x} ${y}) scale(${s})" opacity="0.85">
    <line x1="0" y1="-9" x2="0" y2="6" stroke="${C.pinStroke}" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="-3" y1="-7" x2="3" y2="-7" stroke="${C.pinStroke}" stroke-width="1.2" stroke-linecap="round"/>
    <line x1="-4.5" y1="-3.5" x2="4.5" y2="-3.5" stroke="${C.pinStroke}" stroke-width="1.4" stroke-linecap="round"/>
    <line x1="-3" y1="0.5" x2="3" y2="0.5" stroke="${C.pinStroke}" stroke-width="1.2" stroke-linecap="round"/>
  </g>`;
}

/** 装饰小图标 — 拜占庭双头鹰 (简化) */
function eagleIcon(x, y, scale = 1) {
  const s = scale;
  return `
  <g transform="translate(${x} ${y}) scale(${s})" opacity="0.85">
    <!-- 身体 -->
    <ellipse cx="0" cy="0" rx="3" ry="5" fill="${C.pinStroke}" opacity="0.85"/>
    <!-- 双头 -->
    <circle cx="-2.2" cy="-5.5" r="1.8" fill="${C.pinStroke}"/>
    <circle cx="2.2" cy="-5.5" r="1.8" fill="${C.pinStroke}"/>
    <!-- 翅膀 -->
    <path d="M 0 -2 Q -7 0 -8 5 Q -3 1 -1 3 Z" fill="${C.pinStroke}" opacity="0.85"/>
    <path d="M 0 -2 Q 7 0 8 5 Q 3 1 1 3 Z" fill="${C.pinStroke}" opacity="0.85"/>
    <!-- 喙 -->
    <path d="M -2.2 -4 L -3 -3 L -2 -3.5 Z" fill="${C.pinFill}"/>
    <path d="M 2.2 -4 L 3 -3 L 2 -3.5 Z" fill="${C.pinFill}"/>
  </g>`;
}

/** 装饰小图标 — 中世纪商船 */
function shipIcon(x, y, scale = 1) {
  const s = scale;
  return `
  <g transform="translate(${x} ${y}) scale(${s})" opacity="0.7">
    <!-- 船身 -->
    <path d="M -8 2 Q 0 5 8 2 L 6 0 L -6 0 Z" fill="${C.pinStroke}"/>
    <!-- 桅杆 -->
    <line x1="0" y1="0" x2="0" y2="-9" stroke="${C.pinStroke}" stroke-width="0.7"/>
    <!-- 帆 -->
    <path d="M 0 -8 L 5 -2 L 0 -2 Z" fill="${C.parchmentLo}" stroke="${C.pinStroke}" stroke-width="0.4"/>
    <path d="M 0 -8 L -5 -2 L 0 -2 Z" fill="${C.parchmentHi}" stroke="${C.pinStroke}" stroke-width="0.4"/>
  </g>`;
}

/** 装饰角花 — 4 角 */
function corner(x, y, scale = 1, mirror = '1 1') {
  return `
  <g transform="translate(${x} ${y}) scale(${mirror})" opacity="0.55">
    <path d="M 0 0 Q ${5 * scale} ${5 * scale} ${12 * scale} ${4 * scale} M 0 0 Q ${5 * scale} ${5 * scale} ${4 * scale} ${12 * scale}"
          fill="none" stroke="${C.ink}" stroke-width="0.6" stroke-linecap="round"/>
    <circle cx="${10 * scale}" cy="${10 * scale}" r="${1.5 * scale}" fill="${C.ink}" opacity="0.7"/>
    <circle cx="0" cy="0" r="${2 * scale}" fill="${C.parchmentLo}" stroke="${C.ink}" stroke-width="0.5"/>
  </g>`;
}

// ─────────────────────────────────────────────────────────────────────
// MAP 1: world-base.svg
//   - Equal Earth 投影（DK 风格常用）
//   - 全球海洋背景 + 单一陆地路径
//   - 7 大洲名标
//   - 装饰：羊皮纸纹、四角花、罗经、纬度赤道线
// ─────────────────────────────────────────────────────────────────────

function buildWorldMap() {
  const W = 1000;
  const H = 540;
  const PAD = 30;

  const projection = geoEqualEarth()
    .fitExtent([[PAD, PAD + 20], [W - PAD, H - PAD - 30]], land);

  const pathGen = geoPath(projection);

  const landPath = pathGen(land);

  // 7 大洲标签位置（投影后坐标，手工微调）
  // 用代表性地点的经纬度算位置
  const continentLabels = [
    { name: 'NORTH AMERICA', lon: -100, lat: 45, fontSize: 14 },
    { name: 'SOUTH AMERICA', lon: -60,  lat: -15, fontSize: 14 },
    { name: 'EUROPE',        lon:  15,  lat: 53,  fontSize: 12 },
    { name: 'AFRICA',        lon:  20,  lat: 5,   fontSize: 14 },
    { name: 'ASIA',          lon:  90,  lat: 45,  fontSize: 16 },
    { name: 'OCEANIA',       lon: 135,  lat: -25, fontSize: 13 },
    { name: 'ANTARCTICA',    lon:   0,  lat: -82, fontSize: 11 },
  ].map(c => {
    const [x, y] = projection([c.lon, c.lat]);
    return { ...c, x, y };
  });

  // —— Willow 的两个家：中国 + Irvine ——
  // Beijing 39.9°N, 116.4°E; Irvine 33.7°N, -117.8°W
  const [chinaX, chinaY] = projection([116.4, 39.9]);
  const [irvineX, irvineY] = projection([-117.8, 33.7]);

  // 跨太平洋弧形连线（贝塞尔曲线，从北向上拱）
  const arcMidY = Math.min(chinaY, irvineY) - 60;
  const arcMidX = (chinaX + irvineX) / 2;
  // 太平洋拱过北方（最短路径其实是北极 — 跟真实航线一致）
  const journeyArc = `M ${chinaX} ${chinaY} Q ${arcMidX} ${arcMidY} ${irvineX} ${irvineY}`;

  // —— 当前章节聚焦区：欧洲 ——
  // 在欧洲位置画一个聚光圈
  const [focusX, focusY] = projection([8, 50]);

  // 用代表性地点投影获得欧洲在 SVG 上的范围，作为聚光圈位置
  const [euWX, euNY] = projection([-12, 60]);
  const [euEX, euSY] = projection([35, 38]);
  const focusBoxX = euWX - 8;
  const focusBoxY = euNY - 8;
  const focusBoxW = (euEX - euWX) + 16;
  const focusBoxH = (euSY - euNY) + 16;

  // 赤道与回归线
  const equator = pathGen({ type: 'LineString', coordinates: [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]] });
  const tropicCancer = pathGen({ type: 'LineString', coordinates: [[-180, 23.4], [-90, 23.4], [0, 23.4], [90, 23.4], [180, 23.4]] });
  const tropicCapricorn = pathGen({ type: 'LineString', coordinates: [[-180, -23.4], [-90, -23.4], [0, -23.4], [90, -23.4], [180, -23.4]] });

  // ── SVG 输出（去掉 fixed width/height，让它响应式） ──
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" font-family="'Iowan Old Style','Hoefler Text',Georgia,serif">
  <defs>
    ${HANDDRAWN_FILTER}
    <radialGradient id="parchment-gradient" cx="50%" cy="45%" r="75%">
      <stop offset="0%"  stop-color="${C.parchmentHi}"/>
      <stop offset="65%" stop-color="${C.parchment}"/>
      <stop offset="100%" stop-color="${C.parchmentLo}"/>
    </radialGradient>
    <linearGradient id="ocean-gradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${C.ocean}" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="${C.ocean}" stop-opacity="0.95"/>
    </linearGradient>
    <pattern id="parchment-noise" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
      <rect width="200" height="200" fill="${C.parchment}"/>
      <rect width="200" height="200" fill="url(#parchment-gradient)"/>
    </pattern>
    <radialGradient id="focus-glow" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="${C.highlight}" stop-opacity="0.35"/>
      <stop offset="60%" stop-color="${C.highlight}" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="${C.highlight}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- 羊皮纸背景 -->
  <rect width="${W}" height="${H}" fill="url(#parchment-noise)"/>
  <rect width="${W}" height="${H}" fill="${C.parchment}" filter="url(#parchment-texture)"/>

  <!-- 内框（羊皮纸边） -->
  <rect x="14" y="14" width="${W - 28}" height="${H - 28}" fill="none" stroke="${C.ink}" stroke-width="1.2" opacity="0.8"/>
  <rect x="20" y="20" width="${W - 40}" height="${H - 40}" fill="none" stroke="${C.ink}" stroke-width="0.4" opacity="0.6"/>

  <!-- 海洋（陆地外的轮廓中海洋部分） -->
  <g class="ocean">
    <path d="M 28 28 H ${W - 28} V ${H - 28} H 28 Z" fill="url(#ocean-gradient)" opacity="0.55"/>
    <!-- 纬度参考线 -->
    <path d="${equator}" stroke="${C.oceanLine}" stroke-width="0.5" fill="none" stroke-dasharray="3,4" opacity="0.55"/>
    <path d="${tropicCancer}" stroke="${C.oceanLine}" stroke-width="0.4" fill="none" stroke-dasharray="2,5" opacity="0.4"/>
    <path d="${tropicCapricorn}" stroke="${C.oceanLine}" stroke-width="0.4" fill="none" stroke-dasharray="2,5" opacity="0.4"/>
    <text x="${W - 38}" y="${projection([0, 0])[1] - 3}" text-anchor="end" font-size="8" fill="${C.textSec}" opacity="0.7" font-style="italic">Equator</text>
  </g>

  <!-- 陆地 -->
  <g class="land" filter="url(#soft-shadow)">
    <path d="${landPath}" fill="${C.land}" stroke="${C.ink}" stroke-width="0.85" stroke-linejoin="round"/>
    <path d="${landPath}" fill="none" stroke="${C.landShade}" stroke-width="0.3" stroke-linejoin="round" opacity="0.6" transform="translate(0.5,0.7)"/>
  </g>

  <!-- 当前章节聚焦：欧洲 — 一圈聚光晕（提示"我们这学期在这里"） -->
  <g class="chapter-focus" pointer-events="none">
    <ellipse cx="${(focusBoxX + focusBoxX + focusBoxW) / 2}" cy="${(focusBoxY + focusBoxY + focusBoxH) / 2}"
             rx="${focusBoxW / 2 + 10}" ry="${focusBoxH / 2 + 10}" fill="url(#focus-glow)" opacity="0.85"/>
    <ellipse cx="${(focusBoxX + focusBoxX + focusBoxW) / 2}" cy="${(focusBoxY + focusBoxY + focusBoxH) / 2}"
             rx="${focusBoxW / 2 + 4}" ry="${focusBoxH / 2 + 4}" fill="none"
             stroke="${C.highlight}" stroke-width="1" stroke-dasharray="4,3" opacity="0.65"/>
    <text x="${(focusBoxX + focusBoxX + focusBoxW) / 2}" y="${focusBoxY - 6}" text-anchor="middle"
          font-size="9" font-weight="700" letter-spacing="2" fill="${C.highlight}">CHAPTER 1 · HERE</text>
  </g>

  <!-- 7 大洲名标 -->
  <g class="labels">
    ${continentLabels.map(c => `
    <text x="${c.x}" y="${c.y}" text-anchor="middle" font-size="${c.fontSize}" font-weight="600" letter-spacing="2" fill="${C.text}" opacity="0.85" pointer-events="none">${c.name}</text>`).join('')}
  </g>

  <!-- Willow 的两个家 — 跨太平洋连线 + 双 pin -->
  <g class="willows-journey" pointer-events="none">
    <!-- 太平洋拱形航线 -->
    <path d="${journeyArc}" fill="none" stroke="${C.pinFill}" stroke-width="1.2" stroke-dasharray="4,3" opacity="0.7"/>
    <!-- 中国 pin -->
    <g transform="translate(${chinaX} ${chinaY})">
      <circle r="6" fill="${C.pinFill}" stroke="${C.pinStroke}" stroke-width="1" opacity="0.4"/>
      <circle r="3.5" fill="${C.pinFill}" stroke="${C.pinStroke}" stroke-width="0.9"/>
      <circle r="1.5" fill="${C.parchmentHi}"/>
    </g>
    <text x="${chinaX + 9}" y="${chinaY + 4}" font-size="11" font-weight="700" fill="${C.pinStroke}">中国 · 你出生的地方</text>
    <text x="${chinaX + 9}" y="${chinaY + 16}" font-size="9" font-style="italic" fill="${C.textSec}">Where the Yellow Emperor's stories begin</text>
    <!-- Irvine pin -->
    <g transform="translate(${irvineX} ${irvineY})">
      <circle r="6" fill="${C.pinFill}" stroke="${C.pinStroke}" stroke-width="1" opacity="0.4"/>
      <circle r="3.5" fill="${C.pinFill}" stroke="${C.pinStroke}" stroke-width="0.9"/>
      <circle r="1.5" fill="${C.parchmentHi}"/>
    </g>
    <text x="${irvineX - 9}" y="${irvineY + 4}" text-anchor="end" font-size="11" font-weight="700" fill="${C.pinStroke}">Irvine · 你现在在这里</text>
    <text x="${irvineX - 9}" y="${irvineY + 16}" text-anchor="end" font-size="9" font-style="italic" fill="${C.textSec}">A new world history begins</text>
    <!-- 弧顶箭头方向提示 -->
    <text x="${arcMidX}" y="${arcMidY + 8}" text-anchor="middle" font-size="9" font-style="italic" fill="${C.pinStroke}" opacity="0.7">→ 你的世界正在变大 ←</text>
  </g>

  <!-- 装饰商船在大西洋 -->
  ${shipIcon(projection([-30, 30])[0], projection([-30, 30])[1], 0.9)}
  <!-- 装饰商船在印度洋 -->
  ${shipIcon(projection([75, -10])[0], projection([75, -10])[1], 0.8)}

  <!-- 装饰：罗经在右上 -->
  ${compassRose(W - 70, 70, 30, 'N')}

  <!-- 装饰：四角花 -->
  ${corner(40, 40, 1, '1 1')}
  ${corner(W - 40, 40, 1, '-1 1')}
  ${corner(40, H - 40, 1, '1 -1')}
  ${corner(W - 40, H - 40, 1, '-1 -1')}

  <!-- 标题 -->
  <text x="${W / 2}" y="34" text-anchor="middle" font-size="14" font-weight="700" letter-spacing="4" fill="${C.text}" opacity="0.85">THE WORLD · 你的世界</text>
  <text x="${W / 2}" y="${H - 18}" text-anchor="middle" font-size="9" font-style="italic" fill="${C.textSec}" opacity="0.7">Know U. Learning · Equal Earth Projection</text>
</svg>`;

  return svg;
}

// ─────────────────────────────────────────────────────────────────────
// MAP 2: europe-1200.svg
//   - 投影 fit 到欧洲范围
//   - 1200 AD 主要王国/帝国 outline overlay
//   - Runnymede pin
//   - 装饰：罗经、装饰边、城市散点
// ─────────────────────────────────────────────────────────────────────

function buildEurope1200() {
  const W = 900;
  const H = 700;

  // 滤出欧洲国家（小亚细亚拜占庭领土含进来；排除非洲北部和真正的中东）
  // 排除 lat < 36 的（地中海南岸非洲）和明显非欧洲的中东
  const NON_EUROPE_IDS = new Set([
    '422',  // Lebanon
    '760',  // Syria
    '788',  // Tunisia
    '012',  // Algeria
    '504',  // Morocco
    '434',  // Libya
    '818',  // Egypt
    '376',  // Israel
    '275',  // Palestine
    '400',  // Jordan
    '368',  // Iraq
    '364',  // Iran
    '051',  // Armenia
    '031',  // Azerbaijan
    '268',  // Georgia
  ]);
  const europeFeatures = {
    type: 'FeatureCollection',
    features: countries.features.filter(f => {
      if (NON_EUROPE_IDS.has(f.id)) return false;
      const c = geoCentroid(f);
      return c[0] >= -25 && c[0] <= 42 && c[1] >= 35 && c[1] <= 72;
    })
  };

  // 显式 scale + center — 比 fitExtent 可靠（fitExtent 对 multi-territory 国家
  // 与 Mercator 高纬扭曲处理有 bug，会留巨大空白）
  // Mercator scale 是世界周长 px / 2π，常见值 100-1000；这里用 700 让欧洲填满
  const projection = geoMercator()
    .center([14, 53])         // 欧洲中心：14°E, 53°N（德国附近）
    .scale(900)
    .translate([W / 2, H / 2 - 20]);

  const pathGen = geoPath(projection);

  // Runnymede 大致经纬度: 51.4444° N, 0.5642° W
  const [pinX, pinY] = projection([-0.5642, 51.4444]);
  // London 标记
  const [londonX, londonY] = projection([-0.1276, 51.5074]);
  // Paris
  const [parisX, parisY] = projection([2.3522, 48.8566]);
  // Rome
  const [romeX, romeY] = projection([12.4964, 41.9028]);
  // Constantinople (modern Istanbul)
  const [constX, constY] = projection([28.9784, 41.0082]);
  // Toledo (Iberia)
  const [toledoX, toledoY] = projection([-4.0273, 39.8628]);

  // 1200 AD 大致权力区域（用国家组合 — 仅为示意，非精确史实）
  // 焦点 region (focal=true) 颜色更饱和，opacity 更高
  const POLITICAL_TINTS_1200 = {
    'Kingdom of England':        { iso: ['GBR','IRL'],            color: '#d4612e', label: 'Kingdom of England', focal: true },
    'Kingdom of France':         { iso: ['FRA','BEL','LUX','MCO'], color: '#5b8db8', label: 'Kingdom of France' },
    'Holy Roman Empire':         { iso: ['DEU','AUT','CHE','CZE','NLD','SVN'], color: '#a07cb8', label: 'Holy Roman Empire' },
    'Kingdoms of Iberia':        { iso: ['ESP','PRT'],            color: '#d6b94a', label: 'Iberian Kingdoms' },
    'Italian States':            { iso: ['ITA','VAT','SMR'],      color: '#79a373', label: 'Italian City-States' },
    'Byzantine Empire':          { iso: ['GRC','TUR','BGR','MKD'], color: '#5fa8a0', label: 'Byzantine Empire' },
    'Scandinavian Kingdoms':     { iso: ['NOR','SWE','DNK','ISL'], color: '#c08560', label: 'Scandinavia' },
    'Kievan/Eastern Slavs':      { iso: ['UKR','BLR','RUS','POL','LTU','LVA','EST'], color: '#b87a8e', label: 'Eastern Slavs' },
    'Hungarian Kingdom':         { iso: ['HUN','SVK','ROU','HRV','SRB','BIH'], color: '#c69954', label: 'Hungary' },
  };
  // ISO Alpha-3 to Numeric mapping (only ones used here)
  const ISO_NUM = {
    GBR: '826', IRL: '372', FRA: '250', BEL: '056', LUX: '442', MCO: '492',
    DEU: '276', AUT: '040', CHE: '756', CZE: '203', NLD: '528', SVN: '705',
    ESP: '724', PRT: '620', ITA: '380', VAT: '336', SMR: '674',
    GRC: '300', TUR: '792', BGR: '100', MKD: '807',
    NOR: '578', SWE: '752', DNK: '208', ISL: '352',
    UKR: '804', BLR: '112', RUS: '643', POL: '616', LTU: '440', LVA: '428', EST: '233',
    HUN: '348', SVK: '703', ROU: '642', HRV: '191', SRB: '688', BIH: '070',
  };
  // 反查：feature.id (numeric) → political tint
  const idToTint = {};
  for (const [name, def] of Object.entries(POLITICAL_TINTS_1200)) {
    for (const iso of def.iso) {
      const num = ISO_NUM[iso];
      if (num) idToTint[String(parseInt(num))] = def;
    }
  }

  // 产生彩色多边形 — 焦点区域 (England) 高亮，其他区域降饱和度做"陪衬"
  const politicalPaths = europeFeatures.features.map(f => {
    const tint = idToTint[String(parseInt(f.id))];
    if (!tint) {
      // 非政治分类的国家用浅褐 fallback
      return `<path d="${pathGen(f)}" fill="${C.landShade}" fill-opacity="0.4" stroke="${C.ink}" stroke-width="0.55" stroke-linejoin="round"/>`;
    }
    const isFocal = tint.focal;
    const opacity = isFocal ? 0.78 : 0.5;
    const strokeWidth = isFocal ? 1.1 : 0.65;
    const strokeColor = isFocal ? C.pinStroke : C.ink;
    return `<path d="${pathGen(f)}" fill="${tint.color}" fill-opacity="${opacity}" stroke="${strokeColor}" stroke-width="${strokeWidth}" stroke-linejoin="round"/>`;
  }).join('\n    ');

  // —— 政治区名标（在地图上显示，不只在图例里）——
  // 用每个 region 的代表性中心点投影位置作为 label 锚点
  const REGION_LABELS = [
    { name: 'KINGDOM\nOF ENGLAND', lon: -1.5, lat: 53.5, fontSize: 11, focal: true },
    { name: 'KINGDOM\nOF FRANCE',  lon: 2.5,  lat: 47,   fontSize: 11 },
    { name: 'HOLY ROMAN\nEMPIRE',  lon: 11,   lat: 50,   fontSize: 11 },
    { name: 'IBERIAN\nKINGDOMS',   lon: -4,   lat: 40,   fontSize: 10 },
    { name: 'ITALIAN\nCITY-STATES', lon: 12.5, lat: 43,  fontSize: 9 },
    { name: 'BYZANTINE\nEMPIRE',   lon: 26,   lat: 40,   fontSize: 10 },
    { name: 'SCANDINAVIA',         lon: 16,   lat: 62,   fontSize: 10 },
    { name: 'EASTERN\nSLAVS',      lon: 27,   lat: 53,   fontSize: 10 },
    { name: 'HUNGARY',             lon: 20,   lat: 47,   fontSize: 9 },
  ].map(r => {
    const [x, y] = projection([r.lon, r.lat]);
    return { ...r, x, y };
  });

  const regionLabels = REGION_LABELS.map(r => {
    const lines = r.name.split('\n');
    const lh = r.fontSize + 1;
    const baseY = r.y - ((lines.length - 1) * lh) / 2;
    const fillColor = r.focal ? C.pinStroke : C.text;
    const fontWeight = r.focal ? 800 : 600;
    const opacity = r.focal ? 0.95 : 0.75;
    return lines.map((l, i) => `<text x="${r.x}" y="${baseY + i * lh}" text-anchor="middle" font-size="${r.fontSize}" font-weight="${fontWeight}" letter-spacing="1.5" fill="${fillColor}" opacity="${opacity}" pointer-events="none">${l}</text>`).join('');
  }).join('');

  // 城市散点 + 标签
  const cities = [
    { name: 'London',         x: londonX, y: londonY, dx: -7,  dy: -6,  big: true, anchor: 'end' },
    { name: 'Paris',          x: parisX,  y: parisY,  dx: -7,  dy: -5,  big: true, anchor: 'end' },
    { name: 'Rome',           x: romeX,   y: romeY,   dx: 5,   dy: -4,  big: true },
    { name: 'Constantinople', x: constX,  y: constY,  dx: -7,  dy: -5,  big: true, anchor: 'end' },
    { name: 'Toledo',         x: toledoX, y: toledoY, dx: 5,   dy: -4,  big: false },
  ];

  const cityMarkers = cities.map(c => {
    const r = c.big ? 3 : 2;
    return `
      <g>
        <circle cx="${c.x}" cy="${c.y}" r="${r}" fill="${C.parchmentHi}" stroke="${C.ink}" stroke-width="0.8"/>
        <circle cx="${c.x}" cy="${c.y}" r="${r * 0.45}" fill="${C.ink}"/>
        <text x="${c.x + c.dx}" y="${c.y + c.dy}" text-anchor="${c.anchor || 'start'}" font-size="${c.big ? 11 : 9}" font-weight="${c.big ? 600 : 500}" fill="${C.text}">${c.name}</text>
      </g>`;
  }).join('');

  // Runnymede — hero pin。把 label 拉到地图左边的"大西洋"留白处
  const heroLabelX = pinX - 200;
  const heroLabelY = pinY + 40;
  const heroPin = `
    <g class="hero-pin">
      <!-- 引线从 pin 拉到左侧说明卡 -->
      <path d="M ${pinX} ${pinY} Q ${pinX - 60} ${pinY + 25} ${heroLabelX + 175} ${heroLabelY + 5}"
            fill="none" stroke="${C.pinStroke}" stroke-width="0.9" stroke-dasharray="3,2" opacity="0.85"/>
      <!-- pin marker（红色印章） -->
      <circle cx="${pinX}" cy="${pinY}" r="5" fill="${C.pinFill}" stroke="${C.pinStroke}" stroke-width="1.1"/>
      <circle cx="${pinX}" cy="${pinY}" r="2.5" fill="${C.parchmentHi}" stroke="${C.pinStroke}" stroke-width="0.7"/>
      <circle cx="${pinX}" cy="${pinY}" r="1" fill="${C.pinFill}"/>
      <!-- 说明卡 — 左侧大西洋留白处 -->
      <rect x="${heroLabelX - 6}" y="${heroLabelY - 24}" width="180" height="44"
            fill="${C.parchmentHi}" stroke="${C.pinStroke}" stroke-width="0.8" opacity="0.96" rx="2"/>
      <text x="${heroLabelX}" y="${heroLabelY - 9}" font-size="12" font-weight="700"
            fill="${C.pinStroke}" font-style="italic">★ Runnymede, 1215</text>
      <text x="${heroLabelX}" y="${heroLabelY + 4}" font-size="9" fill="${C.text}">King John signs</text>
      <text x="${heroLabelX}" y="${heroLabelY + 14}" font-size="9" fill="${C.text}" font-weight="600">the Magna Carta</text>
    </g>`;

  // 图例（左下角 — 比右下空 / Constantinople 在东南角不能挡）
  const legendItems = Object.values(POLITICAL_TINTS_1200);
  const legendX = 50;
  const legendY = H - 200;
  const legend = `
    <g transform="translate(${legendX} ${legendY})" font-size="9" fill="${C.text}">
      <rect width="180" height="180" fill="${C.parchmentHi}" stroke="${C.ink}" stroke-width="0.6" opacity="0.92"/>
      <text x="90" y="14" text-anchor="middle" font-size="10" font-weight="700" letter-spacing="1.5">c. 1200 AD</text>
      ${legendItems.map((item, i) => `
      <g transform="translate(10 ${28 + i * 16})">
        <rect width="14" height="10" fill="${item.color}" fill-opacity="0.55" stroke="${C.ink}" stroke-width="0.4"/>
        <text x="20" y="9">${item.label}</text>
      </g>`).join('')}
    </g>`;

  // 装饰图标位置（用同样的城市坐标）
  const decorations = `
    ${castleIcon(londonX, londonY - 14, 0.95)}
    ${papalCrossIcon(romeX, romeY - 12, 0.95)}
    ${eagleIcon(constX, constY - 13, 0.85)}
    ${shipIcon(projection([15, 36])[0], projection([15, 36])[1], 0.9)}
    ${shipIcon(projection([-8, 47])[0], projection([-8, 47])[1], 0.85)}
  `;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" font-family="'Iowan Old Style','Hoefler Text',Georgia,serif">
  <defs>
    ${HANDDRAWN_FILTER}
    <radialGradient id="parchment-gradient" cx="50%" cy="45%" r="75%">
      <stop offset="0%"  stop-color="${C.parchmentHi}"/>
      <stop offset="65%" stop-color="${C.parchment}"/>
      <stop offset="100%" stop-color="${C.parchmentLo}"/>
    </radialGradient>
    <linearGradient id="ocean-gradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${C.ocean}" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="${C.ocean}" stop-opacity="0.85"/>
    </linearGradient>
    <radialGradient id="focal-glow" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="${C.highlight}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${C.highlight}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- 羊皮纸背景 -->
  <rect width="${W}" height="${H}" fill="url(#parchment-gradient)"/>
  <rect width="${W}" height="${H}" fill="${C.parchment}" filter="url(#parchment-texture)"/>

  <!-- 内框 -->
  <rect x="14" y="14" width="${W - 28}" height="${H - 28}" fill="none" stroke="${C.ink}" stroke-width="1.2" opacity="0.85"/>
  <rect x="20" y="20" width="${W - 40}" height="${H - 40}" fill="none" stroke="${C.ink}" stroke-width="0.4" opacity="0.5"/>

  <!-- 海洋背景 -->
  <rect x="28" y="28" width="${W - 56}" height="${H - 56}" fill="url(#ocean-gradient)" opacity="0.5"/>

  <!-- 焦点 spotlight — 英国/Runnymede 周围一圈光晕 -->
  <ellipse cx="${pinX}" cy="${pinY}" rx="100" ry="80" fill="url(#focal-glow)" opacity="0.95"/>

  <!-- 陆地（按 1200 AD 政治区着色，焦点区域更高饱和） -->
  <g class="political-1200" filter="url(#soft-shadow)">
    ${politicalPaths}
  </g>

  <!-- 大区名标（直接显示在地图上，焦点 region 加重） -->
  <g class="region-labels">
    ${regionLabels}
  </g>

  <!-- 城市标记 -->
  <g class="cities">
    ${cityMarkers}
  </g>

  <!-- 装饰图标（城堡 / 教皇十字 / 拜占庭鹰 / 商船） -->
  <g class="decorations">
    ${decorations}
  </g>

  <!-- 英雄 pin: Runnymede 1215 -->
  ${heroPin}

  <!-- 图例 -->
  ${legend}

  <!-- 罗经 -->
  ${compassRose(75, 105, 30, 'N')}

  <!-- 角花 -->
  ${corner(40, 40, 1, '1 1')}
  ${corner(W - 40, 40, 1, '-1 1')}
  ${corner(40, H - 40, 1, '1 -1')}
  ${corner(W - 40, H - 40, 1, '-1 -1')}

  <!-- 标题 + 副题 -->
  <text x="${W / 2}" y="44" text-anchor="middle" font-size="20" font-weight="700" letter-spacing="3" fill="${C.text}">EUROPE c. 1200</text>
  <text x="${W / 2}" y="60" text-anchor="middle" font-size="10" font-style="italic" fill="${C.textSec}" opacity="0.85">The age of King John, the Pope, and the bargain at Runnymede</text>

  <text x="${W / 2}" y="${H - 22}" text-anchor="middle" font-size="9" font-style="italic" fill="${C.textSec}" opacity="0.7">Know U. Learning · Modern coastlines, c. 1200 political tints</text>
</svg>`;

  return svg;
}

// ─────────────────────────────────────────────────────────────────────
// MAP 3: europe-modern.svg
//   - 跟 europe-1200.svg 用**完全相同的投影 + viewBox**，保证 flip 时几何对齐
//   - 现代国家名标 + "↳ was XXX 1200" 历史关联注（产品的核心 aha 触发点）
//   - 中性现代制图风（去除 1200 那张的政治色块和中世纪装饰）
// ─────────────────────────────────────────────────────────────────────

function buildEuropeModern() {
  const W = 900;
  const H = 700;

  // 跟 1200 版一致的投影 — 重要！flip 时陆地对得上
  const NON_EUROPE_IDS = new Set([
    '422','760','788','012','504','434','818','376','275','400','368','364','051','031','268',
  ]);
  const europeFeatures = {
    type: 'FeatureCollection',
    features: countries.features.filter(f => {
      if (NON_EUROPE_IDS.has(f.id)) return false;
      const c = geoCentroid(f);
      return c[0] >= -25 && c[0] <= 42 && c[1] >= 35 && c[1] <= 72;
    })
  };

  const projection = geoMercator()
    .center([14, 53])
    .scale(900)
    .translate([W / 2, H / 2 - 20]);

  const pathGen = geoPath(projection);

  // 现代版：所有国家用统一中性灰褐色，加深边线 — 当代地图风格
  // 但有"历史回响"列表里的国家轻微着色，呼应 1200 那张的色板
  const HISTORICAL_ECHO = {
    '826': { color: '#d4612e', label: 'UNITED KINGDOM',     was: 'Kingdom of England (still!)' },  // GBR
    '792': { color: '#5fa8a0', label: 'TURKEY',             was: 'Byzantine Empire' },           // TUR
    '276': { color: '#a07cb8', label: 'GERMANY',            was: 'core of Holy Roman Empire' }, // DEU
    '040': { color: '#a07cb8', label: 'AUSTRIA',            was: 'Holy Roman Empire' },          // AUT
    '380': { color: '#79a373', label: 'ITALY',              was: 'Papal States + city-states' }, // ITA
    '300': { color: '#5fa8a0', label: 'GREECE',             was: 'part of Byzantine Empire' },  // GRC
    '348': { color: '#c69954', label: 'HUNGARY',            was: 'Hungary (still!)' },           // HUN
    '724': { color: '#d6b94a', label: 'SPAIN',              was: 'Iberian Christian kingdoms' }, // ESP
    '250': { color: '#5b8db8', label: 'FRANCE',             was: 'Kingdom of France' },          // FRA
    '372': { color: '#d4612e', label: 'IRELAND',            was: '' },                            // IRL
    '620': { color: '#d6b94a', label: 'PORTUGAL',           was: '' },                            // PRT
    '578': { color: '#c08560', label: 'NORWAY',             was: '' },                            // NOR
    '752': { color: '#c08560', label: 'SWEDEN',             was: '' },                            // SWE
    '208': { color: '#c08560', label: 'DENMARK',            was: '' },                            // DNK
    '616': { color: '#b87a8e', label: 'POLAND',             was: '' },                            // POL
    '804': { color: '#b87a8e', label: 'UKRAINE',            was: 'Kievan Rus' },                  // UKR
    '643': { color: '#b87a8e', label: 'RUSSIA',             was: 'Kievan Rus' },                  // RUS
  };

  const modernPaths = europeFeatures.features.map(f => {
    const echo = HISTORICAL_ECHO[String(parseInt(f.id))];
    const fill = echo ? echo.color : C.landShade;
    const opacity = echo ? 0.42 : 0.32;
    return `<path d="${pathGen(f)}" fill="${fill}" fill-opacity="${opacity}" stroke="${C.ink}" stroke-width="0.85" stroke-linejoin="round"/>`;
  }).join('\n    ');

  // 现代国家名标（中文 — 让她用熟悉的认知语言识别今天的世界）
  const COUNTRY_LABELS_MODERN = [
    { name: '英国',        lon: -1.5, lat: 53.5, fontSize: 13, focal: true },
    { name: '法国',        lon: 2.5,  lat: 47,   fontSize: 13 },
    { name: '德国',        lon: 10,   lat: 51.5, fontSize: 13 },
    { name: '奥地利',      lon: 14,   lat: 47.5, fontSize: 10 },
    { name: '西班牙',      lon: -4,   lat: 40,   fontSize: 12 },
    { name: '葡萄牙',      lon: -8,   lat: 39.5, fontSize: 9 },
    { name: '意大利',      lon: 13,   lat: 43,   fontSize: 11 },
    { name: '希腊',        lon: 22,   lat: 39.5, fontSize: 11 },
    { name: '土耳其',      lon: 31,   lat: 39.5, fontSize: 13, focal: true },
    { name: '波兰',        lon: 20,   lat: 52,   fontSize: 11 },
    { name: '乌克兰',      lon: 31,   lat: 49.5, fontSize: 11 },
    { name: '挪威',        lon: 12,   lat: 64,   fontSize: 11 },
    { name: '瑞典',        lon: 17,   lat: 60,   fontSize: 11 },
    { name: '匈牙利',      lon: 19,   lat: 47,   fontSize: 10 },
    { name: '爱尔兰',      lon: -8,   lat: 53,   fontSize: 10 },
  ].map(r => {
    const [x, y] = projection([r.lon, r.lat]);
    return { ...r, x, y };
  });

  const countryLabels = COUNTRY_LABELS_MODERN.map(r => {
    const fillColor = r.focal ? C.pinStroke : C.text;
    const fontWeight = r.focal ? 800 : 700;
    return `<text x="${r.x}" y="${r.y}" text-anchor="middle" font-size="${r.fontSize}" font-weight="${fontWeight}" letter-spacing="1.5" fill="${fillColor}" opacity="0.9" pointer-events="none">${r.name}</text>`;
  }).join('');

  // —— "↳ 以前是 XXX" 历史回响注 — U11：调整位置避开城市标签 ——
  const HISTORY_ECHO_NOTES = [
    { lon: 33,    lat: 37.5, text: '↳ 1200 年是拜占庭帝国',     highlight: true,  dy: 0  }, // 土耳其
    { lon: 9,     lat: 49.5, text: '↳ 1200 年是神圣罗马帝国核心', highlight: false, dy: 0  }, // 德国南部
    { lon: 14,    lat: 39.8, text: '↳ 1200 年是教皇国 + 城邦',   highlight: false, dy: 0  }, // 意大利南端
    { lon: 21,    lat: 45,   text: '↳ 匈牙利（一直没变）',         highlight: false, dy: 0  }, // 匈牙利
    { lon: -3.5,  lat: 53.5, text: '↳ 英格兰（1000 年没变）',     highlight: false, dy: 22 }, // 英国 — 下移避开国名
  ].map(n => {
    const [x, y] = projection([n.lon, n.lat]);
    return { ...n, x, y: y + (n.dy || 0) };
  });

  const echoNotes = HISTORY_ECHO_NOTES.map(n =>
    `<text x="${n.x}" y="${n.y}" text-anchor="middle" font-size="10" fill="${n.highlight ? C.pinFill : C.textSec}" font-weight="${n.highlight ? 700 : 500}" opacity="0.95">${n.text}</text>`
  ).join('');

  // 现代主要城市（关键：Constantinople → Istanbul 的史诗时刻）
  const cityPositions = {
    london:    projection([-0.1276, 51.5074]),
    paris:     projection([2.3522,  48.8566]),
    rome:      projection([12.4964, 41.9028]),
    istanbul:  projection([28.9784, 41.0082]),
    madrid:    projection([-3.7038, 40.4168]),
    berlin:    projection([13.4050, 52.5200]),
  };

  const modernCities = `
    <g class="cities-modern">
      <!-- 普通城市（中英双语，方便她在课本里再遇到时对得上） -->
      ${[
        ['伦敦 London',  cityPositions.london],
        ['巴黎 Paris',   cityPositions.paris],
        ['罗马 Rome',    cityPositions.rome],
        ['马德里',       cityPositions.madrid],
        ['柏林',         cityPositions.berlin],
      ].map(([name, [x, y]]) => `
        <circle cx="${x}" cy="${y}" r="3" fill="${C.parchmentHi}" stroke="${C.ink}" stroke-width="0.8"/>
        <circle cx="${x}" cy="${y}" r="1.2" fill="${C.ink}"/>
        <text x="${x + 5}" y="${y - 4}" font-size="10" font-weight="600" fill="${C.text}">${name}</text>`).join('')}
      <!-- 伊斯坦布尔 — 现代地图的英雄城（呼应 1200 的君士坦丁堡） -->
      <g transform="translate(${cityPositions.istanbul[0]} ${cityPositions.istanbul[1]})">
        <circle r="6" fill="${C.pinFill}" stroke="${C.pinStroke}" stroke-width="1" opacity="0.4"/>
        <circle r="3.5" fill="${C.pinFill}" stroke="${C.pinStroke}" stroke-width="0.9"/>
        <circle r="1.5" fill="${C.parchmentHi}"/>
      </g>
      <text x="${cityPositions.istanbul[0] + 8}" y="${cityPositions.istanbul[1] - 3}" font-size="13" font-weight="700" fill="${C.pinStroke}">伊斯坦布尔</text>
      <text x="${cityPositions.istanbul[0] + 8}" y="${cityPositions.istanbul[1] + 9}" font-size="10" fill="${C.pinFill}" font-weight="700">↳ 以前叫君士坦丁堡！</text>
    </g>
  `;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" font-family="'Iowan Old Style','Hoefler Text','PingFang SC','Noto Sans SC','Microsoft YaHei',Georgia,serif">
  <defs>
    ${HANDDRAWN_FILTER}
    <radialGradient id="parchment-gradient-modern" cx="50%" cy="45%" r="75%">
      <stop offset="0%"  stop-color="${C.parchmentHi}"/>
      <stop offset="65%" stop-color="${C.parchment}"/>
      <stop offset="100%" stop-color="${C.parchmentLo}"/>
    </radialGradient>
    <linearGradient id="ocean-gradient-modern" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${C.ocean}" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="${C.ocean}" stop-opacity="0.85"/>
    </linearGradient>
  </defs>

  <!-- 羊皮纸背景（同 1200，保持 flip 一致） -->
  <rect width="${W}" height="${H}" fill="url(#parchment-gradient-modern)"/>
  <rect width="${W}" height="${H}" fill="${C.parchment}" filter="url(#parchment-texture)"/>

  <!-- 内框 -->
  <rect x="14" y="14" width="${W - 28}" height="${H - 28}" fill="none" stroke="${C.ink}" stroke-width="1.2" opacity="0.85"/>
  <rect x="20" y="20" width="${W - 40}" height="${H - 40}" fill="none" stroke="${C.ink}" stroke-width="0.4" opacity="0.5"/>

  <!-- 海洋背景 -->
  <rect x="28" y="28" width="${W - 56}" height="${H - 56}" fill="url(#ocean-gradient-modern)" opacity="0.5"/>

  <!-- 现代国家轮廓 -->
  <g class="countries-modern" filter="url(#soft-shadow)">
    ${modernPaths}
  </g>

  <!-- 国家名标 -->
  <g class="country-labels">
    ${countryLabels}
  </g>

  <!-- 历史回响注 — 核心 aha 触发点 -->
  <g class="history-echo-notes">
    ${echoNotes}
  </g>

  <!-- 现代城市（含 Istanbul 英雄城） -->
  ${modernCities}

  <!-- 罗经 -->
  ${compassRose(75, 105, 30, 'N')}

  <!-- 角花 -->
  ${corner(40, 40, 1, '1 1')}
  ${corner(W - 40, 40, 1, '-1 1')}
  ${corner(40, H - 40, 1, '1 -1')}
  ${corner(W - 40, H - 40, 1, '-1 -1')}

  <!-- 标题 + 副题（呼应 1200，但用中文） -->
  <text x="${W / 2}" y="44" text-anchor="middle" font-size="22" font-weight="700" letter-spacing="6" fill="${C.text}">今 天 的 欧 洲</text>
  <text x="${W / 2}" y="62" text-anchor="middle" font-size="11" fill="${C.textSec}" opacity="0.9">同样的海岸线，不一样的国名。当年的王国，都去了哪里？</text>

  <text x="${W / 2}" y="${H - 22}" text-anchor="middle" font-size="9" fill="${C.textSec}" opacity="0.7">Know U. Learning · 现代政治地图 · 跟 1200 年那张对照看</text>
</svg>`;

  return svg;
}

// ─────────────────────────────────────────────────────────────────────
// MAP 4: tang-china.svg (U10)
//   - 中心 [108°E, 33°N]，覆盖东亚 + 中亚（丝路）
//   - 唐宋时期主要都城 + 4 大地理要素
//   - DK 风格 + 古典中国元素（朱色印章、毛笔字感）
// ─────────────────────────────────────────────────────────────────────

function buildTangChina() {
  const W = 900;
  const H = 700;

  // 东亚 + 中亚范围
  const eastAsiaBounds = {
    type: 'Polygon',
    coordinates: [[
      [60, 18],   // SW（中亚南端）
      [145, 18],  // SE（朝鲜半岛南）
      [145, 55],  // NE（蒙古东）
      [60, 55],   // NW（中亚北）
      [60, 18],
    ]]
  };

  const projection = geoMercator()
    .center([108, 35])
    .scale(900)
    .translate([W / 2, H / 2 - 20]);

  const pathGen = geoPath(projection);

  // 滤出东亚国家
  const NON_TARGET = new Set([
    '784', '364', '368', '462', '748',  // UAE Iran Iraq Maldives Eswatini
  ]);
  const features = countries.features.filter(f => {
    if (NON_TARGET.has(f.id)) return false;
    const c = geoCentroid(f);
    return c[0] >= 60 && c[0] <= 145 && c[1] >= 18 && c[1] <= 55;
  });

  // 唐朝大致控制范围（高亮）— 用 ISO 数字代码表示中国
  const TANG_REALM_IDS = ['156']; // China (modern)
  const tangPaths = features.map(f => {
    const isTangCore = TANG_REALM_IDS.includes(f.id);
    const fill = isTangCore ? '#d97149' : C.land;
    const opacity = isTangCore ? 0.65 : 0.4;
    const strokeWidth = isTangCore ? 1.0 : 0.55;
    return `<path d="${pathGen(f)}" fill="${fill}" fill-opacity="${opacity}" stroke="${C.ink}" stroke-width="${strokeWidth}" stroke-linejoin="round"/>`;
  }).join('\n    ');

  // 城市坐标
  const cities = {
    changan: projection([108.94, 34.34]),    // 长安 (今西安)
    luoyang: projection([112.46, 34.62]),    // 洛阳
    kaifeng: projection([114.30, 34.79]),    // 开封 (北宋首都)
    yangzhou: projection([119.43, 32.39]),   // 扬州
    hangzhou: projection([120.16, 30.27]),   // 杭州 (南宋首都)
    guangzhou: projection([113.27, 23.13]),  // 广州 (海上丝路起点)
    quanzhou: projection([118.69, 24.87]),   // 泉州 (宋代第一大港)
    dunhuang: projection([94.66, 40.14]),    // 敦煌 (丝路要冲)
    samarkand: projection([66.97, 39.65]),   // 撒马尔罕 (丝路另一端)
  };

  // 长城路径（北方简化曲线）
  const greatWallPath = (() => {
    const points = [
      [97, 41], [102, 39.5], [105, 38.5], [108, 39], [112, 40.5],
      [116, 40.4], [119, 40.2], [122, 40], [124, 40.5]
    ];
    return points.map((p, i) => {
      const [x, y] = projection(p);
      return (i === 0 ? 'M' : 'L') + ' ' + x.toFixed(1) + ' ' + y.toFixed(1);
    }).join(' ');
  })();

  // 黄河路径（简化）
  const yellowRiverPath = (() => {
    const points = [
      [96, 35], [100, 36], [105, 36], [108, 38], [112, 36],
      [115, 35.5], [118, 35.7], [121, 36.8], [123, 37.5]
    ];
    return points.map((p, i) => {
      const [x, y] = projection(p);
      return (i === 0 ? 'M' : 'L') + ' ' + x.toFixed(1) + ' ' + y.toFixed(1);
    }).join(' ');
  })();

  // 长江路径（简化）
  const yangtzePath = (() => {
    const points = [
      [91, 33], [96, 31], [101, 30], [104, 29], [107, 30],
      [110, 30.5], [114, 30.5], [117, 31], [120, 31.5], [122, 31.8]
    ];
    return points.map((p, i) => {
      const [x, y] = projection(p);
      return (i === 0 ? 'M' : 'L') + ' ' + x.toFixed(1) + ' ' + y.toFixed(1);
    }).join(' ');
  })();

  // 京杭大运河（隋朝挖，唐宋兴）
  const grandCanalPath = (() => {
    const points = [
      [116.4, 39.9],   // 北京
      [117.2, 39.1],   // 天津
      [115.0, 35.8],   // 河北南
      [116.5, 33.4],   // 商丘
      [117.2, 31.8],   // 安徽北
      [119.4, 32.4],   // 扬州
      [120.2, 30.3],   // 杭州
    ];
    return points.map((p, i) => {
      const [x, y] = projection(p);
      return (i === 0 ? 'M' : 'L') + ' ' + x.toFixed(1) + ' ' + y.toFixed(1);
    }).join(' ');
  })();

  // 丝绸之路（陆上路径 — 长安到撒马尔罕）
  const silkRoadPath = (() => {
    const points = [
      [108.94, 34.34], // 长安
      [104.7, 38.0],   // 兰州
      [97.0, 39.6],    // 嘉峪关
      [94.66, 40.14],  // 敦煌
      [88.0, 41.5],    // 吐鲁番
      [80.0, 41.0],    // 库车
      [76.0, 39.5],    // 喀什
      [69.0, 39.5],    // 撒马尔罕方向
      [66.97, 39.65],  // 撒马尔罕
    ];
    return points.map((p, i) => {
      const [x, y] = projection(p);
      return (i === 0 ? 'M' : 'L') + ' ' + x.toFixed(1) + ' ' + y.toFixed(1);
    }).join(' ');
  })();

  // 城市标记
  const cityMarkers = `
    <!-- 长安 — 唐都，特殊样式 -->
    <g class="capital-changan">
      <circle cx="${cities.changan[0]}" cy="${cities.changan[1]}" r="7" fill="${C.pinFill}" stroke="${C.pinStroke}" stroke-width="1" opacity="0.4"/>
      <circle cx="${cities.changan[0]}" cy="${cities.changan[1]}" r="4" fill="${C.pinFill}" stroke="${C.pinStroke}" stroke-width="1.1"/>
      <circle cx="${cities.changan[0]}" cy="${cities.changan[1]}" r="1.5" fill="${C.parchmentHi}"/>
      <text x="${cities.changan[0]}" y="${cities.changan[1] - 12}" text-anchor="middle" font-size="13" font-weight="700" fill="${C.pinStroke}" font-family="serif">长安 Chang'an</text>
      <text x="${cities.changan[0]}" y="${cities.changan[1] + 18}" text-anchor="middle" font-size="9" fill="${C.textSec}" font-style="italic">Tang capital · 100M people</text>
    </g>
    <!-- 其他大都市 -->
    ${[
      ['luoyang', '洛阳', 'Luoyang'],
      ['kaifeng', '开封', 'Kaifeng (Song)'],
      ['yangzhou', '扬州', 'Yangzhou'],
      ['hangzhou', '杭州', 'Hangzhou'],
      ['guangzhou', '广州', 'Guangzhou'],
      ['quanzhou', '泉州', 'Quanzhou'],
      ['dunhuang', '敦煌', 'Dunhuang'],
      ['samarkand', '撒马尔罕', 'Samarkand'],
    ].map(([key, cn, en]) => {
      const [x, y] = cities[key];
      return `
        <g>
          <circle cx="${x}" cy="${y}" r="3" fill="${C.parchmentHi}" stroke="${C.ink}" stroke-width="0.8"/>
          <circle cx="${x}" cy="${y}" r="1.2" fill="${C.ink}"/>
          <text x="${x + 6}" y="${y - 4}" font-size="11" font-weight="600" fill="${C.text}" font-family="serif">${cn}</text>
          <text x="${x + 6}" y="${y + 6}" font-size="8" fill="${C.textSec}" font-style="italic">${en}</text>
        </g>`;
    }).join('')}
  `;

  // 区域名标
  const regionLabels = `
    <text x="${projection([105, 40])[0]}" y="${projection([105, 40])[1]}" text-anchor="middle" font-size="22" font-weight="700" letter-spacing="3" fill="${C.text}" opacity="0.32" font-family="serif">中 国</text>
    <text x="${projection([85, 32])[0]}" y="${projection([85, 32])[1]}" text-anchor="middle" font-size="11" font-weight="600" fill="${C.inkLight}" opacity="0.7" font-family="serif">青藏高原</text>
    <text x="${projection([100, 50])[0]}" y="${projection([100, 50])[1]}" text-anchor="middle" font-size="11" font-weight="600" fill="${C.inkLight}" opacity="0.7" font-family="serif">蒙古草原</text>
    <text x="${projection([130, 38])[0]}" y="${projection([130, 38])[1]}" text-anchor="middle" font-size="10" font-weight="600" fill="${C.inkLight}" opacity="0.7" font-family="serif">朝鲜半岛</text>
    <text x="${projection([138, 36])[0]}" y="${projection([138, 36])[1]}" text-anchor="middle" font-size="10" font-weight="600" fill="${C.inkLight}" opacity="0.7" font-family="serif">日本</text>
    <text x="${projection([105, 22])[0]}" y="${projection([105, 22])[1]}" text-anchor="middle" font-size="10" font-weight="600" fill="${C.inkLight}" opacity="0.7" font-family="serif">越南</text>
  `;

  // 图例
  const legendX = W - 200;
  const legendY = H - 180;
  const legend = `
    <g transform="translate(${legendX} ${legendY})" font-size="9" fill="${C.text}" font-family="serif">
      <rect width="180" height="160" fill="${C.parchmentHi}" stroke="${C.ink}" stroke-width="0.6" opacity="0.95"/>
      <text x="90" y="14" text-anchor="middle" font-size="10" font-weight="700" letter-spacing="1.5">唐宋盛世 · 618-1279</text>
      <line x1="10" y1="32" x2="34" y2="32" stroke="#0288d1" stroke-width="2"/>
      <text x="38" y="35">长江 / 黄河</text>
      <line x1="10" y1="50" x2="34" y2="50" stroke="#5d4037" stroke-width="2.5" stroke-dasharray="3,2"/>
      <text x="38" y="53">长城</text>
      <line x1="10" y1="68" x2="34" y2="68" stroke="#1565c0" stroke-width="2"/>
      <text x="38" y="71">京杭大运河</text>
      <line x1="10" y1="86" x2="34" y2="86" stroke="#a07cb8" stroke-width="1.6" stroke-dasharray="4,3"/>
      <text x="38" y="89">陆上丝绸之路</text>
      <circle cx="22" cy="106" r="3" fill="#9b2c2c" stroke="${C.pinStroke}" stroke-width="0.8"/>
      <text x="38" y="109">唐都长安</text>
      <circle cx="22" cy="124" r="2" fill="${C.parchmentHi}" stroke="${C.ink}" stroke-width="0.6"/>
      <text x="38" y="127">其他主要都市</text>
      <text x="90" y="148" text-anchor="middle" font-size="9" font-style="italic" fill="${C.textSec}">同时代欧洲：黑暗时代</text>
    </g>
  `;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" font-family="'Iowan Old Style','Hoefler Text','Songti SC','PingFang SC','Microsoft YaHei',Georgia,serif">
  <defs>
    ${HANDDRAWN_FILTER}
    <radialGradient id="parchment-gradient-tang" cx="50%" cy="45%" r="75%">
      <stop offset="0%"  stop-color="${C.parchmentHi}"/>
      <stop offset="65%" stop-color="${C.parchment}"/>
      <stop offset="100%" stop-color="${C.parchmentLo}"/>
    </radialGradient>
    <linearGradient id="ocean-gradient-tang" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${C.ocean}" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="${C.ocean}" stop-opacity="0.85"/>
    </linearGradient>
  </defs>

  <!-- 羊皮纸背景 -->
  <rect width="${W}" height="${H}" fill="url(#parchment-gradient-tang)"/>
  <rect width="${W}" height="${H}" fill="${C.parchment}" filter="url(#parchment-texture)"/>

  <!-- 内框 -->
  <rect x="14" y="14" width="${W - 28}" height="${H - 28}" fill="none" stroke="${C.ink}" stroke-width="1.2" opacity="0.85"/>
  <rect x="20" y="20" width="${W - 40}" height="${H - 40}" fill="none" stroke="${C.ink}" stroke-width="0.4" opacity="0.5"/>

  <!-- 海洋背景 -->
  <rect x="28" y="28" width="${W - 56}" height="${H - 56}" fill="url(#ocean-gradient-tang)" opacity="0.4"/>

  <!-- 陆地（按国家） -->
  <g class="lands" filter="url(#soft-shadow)">
    ${tangPaths}
  </g>

  <!-- 区域名标 -->
  <g class="region-labels">
    ${regionLabels}
  </g>

  <!-- 江河长城 -->
  <g class="rivers" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="${yellowRiverPath}" stroke="#c08560" stroke-width="2.2" opacity="0.85"/>
    <path d="${yangtzePath}" stroke="#0288d1" stroke-width="2.2" opacity="0.85"/>
    <path d="${greatWallPath}" stroke="#5d4037" stroke-width="2.5" stroke-dasharray="6,3" opacity="0.75"/>
    <path d="${grandCanalPath}" stroke="#1565c0" stroke-width="2" stroke-dasharray="2,2" opacity="0.85"/>
  </g>

  <!-- 河流标注 -->
  <text x="${projection([113, 35])[0]}" y="${projection([113, 35])[1] - 8}" font-size="10" font-style="italic" fill="#c08560" font-weight="600" font-family="serif">黄河</text>
  <text x="${projection([114, 30.5])[0]}" y="${projection([114, 30.5])[1] + 12}" font-size="10" font-style="italic" fill="#0288d1" font-weight="600" font-family="serif">长江</text>
  <text x="${projection([110, 40.5])[0]}" y="${projection([110, 40.5])[1] - 8}" font-size="10" font-style="italic" fill="#5d4037" font-weight="600" font-family="serif">长 城</text>
  <text x="${projection([117, 33.5])[0]}" y="${projection([117, 33.5])[1] - 6}" font-size="9" font-style="italic" fill="#1565c0" font-weight="600" font-family="serif">京杭大运河</text>

  <!-- 丝绸之路（虚线 + 标） -->
  <path d="${silkRoadPath}" stroke="#a07cb8" stroke-width="1.6" stroke-dasharray="4,3" fill="none" opacity="0.85"/>
  <text x="${projection([88, 41.5])[0]}" y="${projection([88, 41.5])[1] - 8}" font-size="10" font-style="italic" fill="#a07cb8" font-weight="700" font-family="serif">丝 绸 之 路</text>

  <!-- 城市标记 -->
  ${cityMarkers}

  <!-- 装饰：朱色印章 (右上) -->
  <g transform="translate(${W - 80} 80)">
    <rect width="48" height="48" fill="${C.pinFill}" stroke="${C.pinStroke}" stroke-width="1" opacity="0.85" rx="3"/>
    <text x="24" y="22" text-anchor="middle" font-size="14" fill="${C.parchmentHi}" font-weight="700" font-family="serif">大唐</text>
    <text x="24" y="38" text-anchor="middle" font-size="14" fill="${C.parchmentHi}" font-weight="700" font-family="serif">盛世</text>
  </g>

  <!-- 罗经 -->
  ${compassRose(75, 100, 30, 'N')}

  <!-- 角花 -->
  ${corner(40, 40, 1, '1 1')}
  ${corner(W - 40, 40, 1, '-1 1')}
  ${corner(40, H - 40, 1, '1 -1')}
  ${corner(W - 40, H - 40, 1, '-1 -1')}

  <!-- 图例 -->
  ${legend}

  <!-- 标题 -->
  <text x="${W / 2}" y="44" text-anchor="middle" font-size="22" font-weight="700" letter-spacing="6" fill="${C.text}" font-family="serif">唐 宋 盛 世</text>
  <text x="${W / 2}" y="62" text-anchor="middle" font-size="11" fill="${C.textSec}" font-style="italic">Tang &amp; Song China · 618-1279 · 世界文明之巅</text>

  <text x="${W / 2}" y="${H - 22}" text-anchor="middle" font-size="9" font-style="italic" fill="${C.textSec}" opacity="0.7">Know U. Learning · 现代海岸线 · 历史路径示意</text>
</svg>`;

  return svg;
}

// ── 写文件 ────────────────────────────────────────────────────────────────
const outDir = path.join(ROOT, 'public', 'maps');
fs.mkdirSync(outDir, { recursive: true });

const worldSvg = buildWorldMap();
fs.writeFileSync(path.join(outDir, 'world-base.svg'), worldSvg);
console.log(`✓ world-base.svg (${(worldSvg.length / 1024).toFixed(1)} KB)`);

const europeSvg = buildEurope1200();
fs.writeFileSync(path.join(outDir, 'europe-1200.svg'), europeSvg);
console.log(`✓ europe-1200.svg (${(europeSvg.length / 1024).toFixed(1)} KB)`);

const europeModernSvg = buildEuropeModern();
fs.writeFileSync(path.join(outDir, 'europe-modern.svg'), europeModernSvg);
console.log(`✓ europe-modern.svg (${(europeModernSvg.length / 1024).toFixed(1)} KB)`);

const tangChinaSvg = buildTangChina();
fs.writeFileSync(path.join(outDir, 'tang-china.svg'), tangChinaSvg);
console.log(`✓ tang-china.svg (${(tangChinaSvg.length / 1024).toFixed(1)} KB)`);

console.log('\nMaps built.');

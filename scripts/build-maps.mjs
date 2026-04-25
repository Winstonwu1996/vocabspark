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

// ── 写文件 ────────────────────────────────────────────────────────────────
const outDir = path.join(ROOT, 'public', 'maps');
fs.mkdirSync(outDir, { recursive: true });

const worldSvg = buildWorldMap();
fs.writeFileSync(path.join(outDir, 'world-base.svg'), worldSvg);
console.log(`✓ world-base.svg (${(worldSvg.length / 1024).toFixed(1)} KB)`);

const europeSvg = buildEurope1200();
fs.writeFileSync(path.join(outDir, 'europe-1200.svg'), europeSvg);
console.log(`✓ europe-1200.svg (${(europeSvg.length / 1024).toFixed(1)} KB)`);

console.log('\nMaps built.');

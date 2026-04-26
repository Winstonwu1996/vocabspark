// lib/atlas-renderer.js
//
// 服务端：吃 view 配方 + 几何数据 → 输出"渲染就绪"的 props 给前端组件。
// 前端不需要 d3，只需要循环 path 字符串。

import fs from 'fs';
import path from 'path';
import { feature } from 'topojson-client';
import { geoMercator, geoEquirectangular, geoPath, geoCentroid } from 'd3-geo';
import { POLITIES, ISO_NUM } from '../data/atlas/polities.js';
import { EVENTS } from '../data/atlas/events.js';
import { FEATURES } from '../data/atlas/features.js';
import { CIVILIZATIONS } from '../data/atlas/civilizations.js';

const ROOT = path.resolve(process.cwd());

// ── 加载 topojson（只读一次，缓存）───────────────────────────
let _land = null;
let _countries = null;
function loadTopo() {
  if (_land && _countries) return { land: _land, countries: _countries };
  const landTopo = JSON.parse(
    fs.readFileSync(path.join(ROOT, 'data/atlas/raw/land-110m.json'), 'utf8')
  );
  const countriesTopo = JSON.parse(
    fs.readFileSync(path.join(ROOT, 'data/atlas/raw/countries-110m.json'), 'utf8')
  );
  _land = feature(landTopo, landTopo.objects.land);
  _countries = feature(countriesTopo, countriesTopo.objects.countries);
  return { land: _land, countries: _countries };
}

// ── 加载历史年份快照 GeoJSON（来自 historical-basemaps · GPL-3.0）────────
const _yearSnapshots = {};
function loadYearSnapshot(yearKey) {
  if (_yearSnapshots[yearKey]) return _yearSnapshots[yearKey];
  const filePath = path.join(ROOT, 'data/atlas/historical-basemaps', yearKey + '.geojson');
  if (!fs.existsSync(filePath)) {
    console.warn('Year snapshot not found:', yearKey);
    return null;
  }
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  _yearSnapshots[yearKey] = data;
  return data;
}

function findFeaturesByName(snapshot, names) {
  if (!snapshot) return [];
  const set = new Set(Array.isArray(names) ? names : [names]);
  return snapshot.features.filter(f => f.properties && set.has(f.properties.NAME));
}

// ── 视口 ─────────────────────────────────────────────────────
const W = 1000;
const H = 600;

function makeProjection(camera) {
  const proj = geoMercator()
    .center(camera.center)
    .scale(camera.scale || 700)
    .translate([W / 2, H / 2 + (camera.yOffset || 0)]);
  return proj;
}

// 加密多边形 — 每条长边切成多段，避免 Mercator 大圆插值把直线变成弯曲
// 同时确保 CCW 绕向（GeoJSON 外环规约），CW 会被 d3-geo 视为洞 → 填整个外面
function densifyPolygon(poly, maxDeg = 1.0) {
  if (!poly || poly.length < 3) return poly;
  const out = [];
  for (let i = 0; i < poly.length - 1; i++) {
    const a = poly[i];
    const b = poly[i + 1];
    const dist = Math.max(Math.abs(b[0] - a[0]), Math.abs(b[1] - a[1]));
    const steps = Math.max(1, Math.ceil(dist / maxDeg));
    for (let j = 0; j < steps; j++) {
      const t = j / steps;
      out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
    }
  }
  out.push(poly[poly.length - 1]); // 闭合点
  return out;
}

// 用 shoelace 公式判断绕向（正 = CCW，负 = CW）；若 CW 则反转
function ensureCCW(poly) {
  if (!poly || poly.length < 4) return poly;
  let sum = 0;
  for (let i = 0; i < poly.length - 1; i++) {
    sum += (poly[i + 1][0] - poly[i][0]) * (poly[i + 1][1] + poly[i][1]);
  }
  // 在 (lon, lat) 屏幕坐标下，sum > 0 = CW（因为 lat 越大 = 越北 = SVG 中越上）
  // 但 GeoJSON 规约：lat 越大 = y 越大，CCW = sum < 0
  // 实测：原 [-9.5,43.8]→[-1.5,43.8]→[3.3,42.5] sum 应为 +
  return sum > 0 ? poly.slice().reverse() : poly;
}

function preparePolygon(poly) {
  return densifyPolygon(ensureCCW(poly));
}

// ── 时代过滤：要素是否在 mode 下应该显示 ──
function featureMatchesMode(feature, mode, year) {
  // 没有 era → 永恒地理（河、山、高原），任何 mode 都显示
  if (!feature.era) return true;
  if (mode === 'modern') {
    return !!feature.era.persistsToToday;
  }
  // historical: 检查 year 是否在活跃区间
  const { activeFrom = -Infinity, activeTo = Infinity } = feature.era;
  return year >= activeFrom && year <= (activeTo == null ? Infinity : activeTo);
}

// ── 主渲染函数 ────────────────────────────────────────────────
export function renderView(view, mode = 'historical') {
  const { land, countries } = loadTopo();
  const projection = makeProjection(view.camera);
  const pathGen = geoPath(projection);

  // L0: 海岸线 / 陆地边缘（永远显示）
  const landPath = pathGen(land);

  // L3: 政治多边形 — mode 决定用 historical 还是 modern polity 集
  const polityKey = mode === 'modern'
    ? (view.layers.L3 && view.layers.L3.modernPolities)
    : (view.layers.L3 && view.layers.L3.polities);
  const polities = polityKey ? POLITIES[polityKey] || [] : [];
  const highlightId = view.layers.L3 ? view.layers.L3.highlightId : null;

  // 反查：iso numeric → polity（只为有 iso 的）
  const idToPolity = {};
  for (const p of polities) {
    if (!p.iso) continue;
    for (const isoA3 of p.iso) {
      const num = ISO_NUM[isoA3];
      if (num) idToPolity[String(parseInt(num))] = p;
    }
  }

  // 哪些 ISO 国家被 customPolygon 的政体"覆盖"了（不再用国家轮廓填色）
  const isoCoveredByCustom = new Set();
  for (const p of polities) {
    if (p.customPolygon && p.coveredIso) {
      for (const iso of p.coveredIso) {
        const num = ISO_NUM[iso];
        if (num) isoCoveredByCustom.add(String(parseInt(num)));
      }
    }
  }

  // ── 1. 用 ISO 的政体先渲染（基于国家轮廓）──
  // 性能优化：viewport bbox 过滤 — 仅渲染相机视口内的国家，避免 177 个国家全画。
  // 这把 industrial-revolution.json 从 1.5MB 降到 ~500KB（实测）。
  const W_LOCAL = W;  // 1000
  const H_LOCAL = H;  // 600
  const margin = 50;  // 容许越界一点（避免边缘国家被切掉）
  const inViewport = (d) => {
    if (!d) return false;
    // SVG path 字符串 quick-check：抽样几个 M/L/Z 命令的坐标对
    // 路径形如 "M123,45L67,89..."；用 numbers regex 提取
    const nums = d.match(/-?\d+(?:\.\d+)?/g);
    if (!nums || nums.length < 4) return false;
    // 检查是否至少一对坐标在视口内（大致判断）
    for (let i = 0; i < nums.length - 1; i += 2) {
      const x = parseFloat(nums[i]);
      const y = parseFloat(nums[i + 1]);
      if (x > -margin && x < W_LOCAL + margin && y > -margin && y < H_LOCAL + margin) {
        return true;
      }
    }
    return false;
  };

  const politicalPaths = countries.features.map(f => {
    const numKey = String(parseInt(f.id));
    if (isoCoveredByCustom.has(numKey)) return null; // 让位给 customPolygon
    const polity = idToPolity[numKey];
    const d = pathGen(f);
    if (!d) return null;
    // viewport 过滤：focal/highlighted 国家始终保留（即使部分不在视口）
    const isFocal = polity && polity.id === highlightId;
    if (!isFocal && !inViewport(d)) return null;
    if (!polity) {
      // 无定义的国家用浅褐 fallback（弱化背景）
      return { d, fill: '#d4af75', opacity: 0.18, stroke: '#3d2c1a', strokeWidth: 0.4 };
    }
    return {
      d,
      fill: polity.color,
      opacity: isFocal ? 0.82 : 0.5,
      stroke: isFocal ? '#5a1a1a' : '#3d2c1a',
      strokeWidth: isFocal ? 1.2 : 0.55,
    };
  }).filter(Boolean);

  // ── 2. 用 customPolygon 或 sourceName（GeoJSON 历史快照）的政体追加渲染 ──
  // customPolygon: 用直接坐标投影绕开 d3-geoPath 的大圆插值
  // sourceName: 从 historical-basemaps 年快照查 NAME → 用 d3 pathGen（密集多边形不会有大圆问题）
  const yearSnapshotKey = view.layers.L3 && view.layers.L3.yearSnapshot;
  const yearSnapshot = yearSnapshotKey ? loadYearSnapshot(yearSnapshotKey) : null;

  const polyToPath = (poly) => {
    const dense = densifyPolygon(poly, 1.0);
    const projected = dense.map(([lon, lat]) => projection([lon, lat]));
    const valid = projected.filter(([x, y]) => isFinite(x) && isFinite(y));
    if (valid.length < 3) return null;
    return valid.map((pt, i) => (i === 0 ? 'M' : 'L') + pt[0].toFixed(1) + ',' + pt[1].toFixed(1)).join(' ') + ' Z';
  };

  const customPolygonPaths = polities.filter(p => p.customPolygon || p.sourceName).map(p => {
    let d = null;
    if (p.sourceName && yearSnapshot) {
      // 从历史年份快照查找 NAME 匹配的 features
      const matching = findFeaturesByName(yearSnapshot, p.sourceName);
      if (matching.length > 0) {
        d = matching.map(f => pathGen(f)).filter(Boolean).join(' ');
      }
    }
    if (!d && p.customPolygon) {
      d = polyToPath(p.customPolygon);
    }
    if (!d) return null;
    const isFocal = p.id === highlightId;
    return {
      d,
      fill: p.color,
      opacity: isFocal ? 0.82 : 0.55,
      stroke: isFocal ? '#5a1a1a' : '#3d2c1a',
      strokeWidth: isFocal ? 1.2 : 0.6,
    };
  }).filter(Boolean);

  // ── 3. 政治区名标 ──
  const politicalLabels = polities.map(p => {
    let anchor;
    // 优先使用显式 labelAt（绕开海外领土把 centroid 拉偏的问题）
    if (p.labelAt) {
      anchor = projection(p.labelAt);
    } else if (p.sourceName && yearSnapshot) {
      const matching = findFeaturesByName(yearSnapshot, p.sourceName);
      if (matching.length === 0) return null;
      // 用第一个 feature 的 centroid 作为锚点
      const c = geoCentroid(matching[0]);
      anchor = projection(c);
    } else if (p.customPolygon) {
      const polyFeature = {
        type: 'Feature',
        geometry: { type: 'Polygon', coordinates: [preparePolygon(p.customPolygon)] },
      };
      const c = geoCentroid(polyFeature);
      anchor = projection(c);
    } else if (p.iso && p.iso[0]) {
      const numStr = ISO_NUM[p.iso[0]];
      if (!numStr) return null;
      const target = countries.features.find(f => String(parseInt(f.id)) === String(parseInt(numStr)));
      if (!target) return null;
      const c = geoCentroid(target);
      anchor = projection(c);
    } else {
      return null;
    }
    if (!anchor || !isFinite(anchor[0]) || !isFinite(anchor[1])) return null;
    return {
      x: anchor[0], y: anchor[1],
      label: p.label,
      color: p.id === highlightId ? '#5a1a1a' : '#3d2c1a',
      fontWeight: p.id === highlightId ? 700 : 500,
      fontSize: p.id === highlightId ? 13 : 11,
    };
  }).filter(Boolean);

  // ── C: 文明圈层（宗教 + 文字 + 法系 跨政体覆盖区）──
  // 三种数据源叠加：
  //   1. sourceNames（最优）— 历史快照里多个政体合并染色
  //   2. iso（次优）— 现代国家近似，对小国可用
  //   3. customPolygons（兜底）— 手绘修补
  const civSetKey = view.layers.C ? view.layers.C.civs : null;
  const civs = civSetKey ? CIVILIZATIONS[civSetKey] || [] : [];
  const civilizationGroups = civs.map(civ => {
    const paths = [];
    // 0. sourceNames — 在历史年快照里查多个政体
    if (civ.sourceNames && civ.sourceNames.length && yearSnapshot) {
      const matched = findFeaturesByName(yearSnapshot, civ.sourceNames);
      paths.push(...matched.map(f => pathGen(f)).filter(Boolean));
    }
    // 1. ISO 国家路径（兼容旧用法）
    if (civ.iso && civ.iso.length) {
      const matching = countries.features.filter(f => {
        const numKey = String(parseInt(f.id));
        return civ.iso.some(iso => {
          const num = ISO_NUM[iso];
          return num && String(parseInt(num)) === numKey;
        });
      });
      paths.push(...matching.map(f => pathGen(f)).filter(Boolean));
    }
    // 2. 历史 customPolygons（精确范围 / 不被 ISO 限制）
    if (civ.customPolygons && civ.customPolygons.length) {
      for (const poly of civ.customPolygons) {
        const d = polyToPath(poly);
        if (d) paths.push(d);
      }
    }
    if (paths.length === 0) return null;
    let labelXY = null;
    if (civ.labelAt) {
      const [lx, ly] = projection(civ.labelAt);
      if (isFinite(lx) && isFinite(ly)) labelXY = { x: lx, y: ly };
    }
    return {
      id: civ.id,
      label: civ.label,
      color: civ.color,
      opacity: civ.opacity ?? 0.36,
      paths,
      labelXY,
    };
  }).filter(Boolean);

  // ── F: 地理要素（rivers / wall / canal / mountains / plateaus / 多段路网 / 海峡 / 地峡）──
  const pointsToPathStr = (pts) => pts.map((pt, i) => {
    const [x, y] = projection(pt);
    if (!isFinite(x) || !isFinite(y)) return '';
    return (i === 0 ? 'M' : 'L') + ' ' + x.toFixed(1) + ' ' + y.toFixed(1);
  }).join(' ');

  const viewYear = view.year || 0;
  const featureIds = view.layers.F ? view.layers.F.ids || [] : [];
  const features = featureIds.map(id => {
    const f = FEATURES[id];
    if (!f) return null;
    if (!featureMatchesMode(f, mode, viewYear)) return null; // mode 过滤
    let pathStrs = []; // 单或多段
    if (f.segments && f.segments.length) {
      pathStrs = f.segments.map(seg => pointsToPathStr(seg.points)).filter(Boolean);
    } else if (f.points && f.points.length >= 2) {
      const ps = pointsToPathStr(f.points);
      if (ps) pathStrs = [ps];
    }
    let labelXY = null;
    if (f.labelAt) {
      const [lx, ly] = projection(f.labelAt);
      if (isFinite(lx) && isFinite(ly)) labelXY = { x: lx, y: ly };
    }
    return {
      id, type: f.type,
      label: f.label,
      color: f.color || '#7d6e5d',
      width: f.width || 1.5,
      dash: f.dash || null,
      pathStrs,
      labelOnly: !!f.labelOnly,
      labelXY,
      // 标识：现代 mode 下显示的是"遗存"还是"原貌"
      eraNote: (mode === 'modern' && f.era && f.era.persistsToToday !== true) ? f.era.persistsToToday : null,
    };
  }).filter(Boolean);

  // L4: 事件 pin
  const pinIds = view.layers.L4 ? view.layers.L4.pins || [] : [];
  const rawPins = pinIds.map(id => {
    const e = EVENTS[id];
    if (!e) return null;
    const [x, y] = projection([e.lon, e.lat]);
    if (!isFinite(x) || !isFinite(y)) return null;
    // Next.js getStaticProps 不能序列化 undefined — 用 null / 默认值兜底
    return {
      id, x, y,
      type: e.type || null,
      label: e.label,
      note: e.note || null,
      year: e.year ?? null,
      featured: !!e.featured,
      explicitDx: typeof e.labelDx === 'number' ? e.labelDx : null,
      explicitDy: typeof e.labelDy === 'number' ? e.labelDy : null,
      causality: e.causality || null,
    };
  }).filter(Boolean);

  // ── Pin xy 碰撞解决 ─────────────────────────────────────────
  // 任何两个 pin 投影后距离 < 16px 都会重叠，遮挡彼此点击。
  // 处理顺序：★ pin 优先保持原位（重要事件居中），普通 pin 按出现顺序错开。
  // 错开规则：以 ★ pin 为锚，其他 pin 沿 8 个方向（N/NE/E/SE/S/SW/W/NW）找空位。
  const PIN_DIST_THRESHOLD = 16;
  const PIN_OFFSET_STEP = 14;
  const offsetCandidates = [
    [PIN_OFFSET_STEP, 0],   // E
    [-PIN_OFFSET_STEP, 0],  // W
    [0, PIN_OFFSET_STEP],   // S
    [0, -PIN_OFFSET_STEP],  // N
    [PIN_OFFSET_STEP, PIN_OFFSET_STEP],   // SE
    [-PIN_OFFSET_STEP, PIN_OFFSET_STEP],  // SW
    [PIN_OFFSET_STEP, -PIN_OFFSET_STEP],  // NE
    [-PIN_OFFSET_STEP, -PIN_OFFSET_STEP], // NW
    [PIN_OFFSET_STEP * 2, 0],   // 远 E（双倍）
    [-PIN_OFFSET_STEP * 2, 0],  // 远 W
  ];
  const isStarPinRaw = (p) => !!p.featured
    || (p.label?.cn || '').includes('★')
    || (p.label?.en || '').includes('★');
  // 排序：★ pin 先 placement（保持原位），普通 pin 后处理（必要时偏移）
  const sortedRaw = rawPins.slice().sort((a, b) => {
    return (isStarPinRaw(b) ? 1 : 0) - (isStarPinRaw(a) ? 1 : 0);
  });
  const placedXY = []; // 已固定 [x, y] 列表
  const collisionResolvedPins = sortedRaw.map(p => {
    let { x, y } = p;
    const tooClose = (px, py) => placedXY.some(q =>
      Math.hypot(px - q.x, py - q.y) < PIN_DIST_THRESHOLD
    );
    if (tooClose(x, y)) {
      // ★ pin 不偏移（保留原位，让普通 pin 让位）
      // 但实际上 ★ pin 排在前面，先放，所以这个分支只对普通 pin 起作用
      let resolved = false;
      for (const [dx, dy] of offsetCandidates) {
        if (!tooClose(x + dx, y + dy)) {
          x += dx;
          y += dy;
          resolved = true;
          break;
        }
      }
      // 仍然冲突 → 接受（★ 已最上层 + 触控区设计能 distinguish）
    }
    placedXY.push({ x, y });
    return { ...p, x, y };
  });
  // 把 sortedRaw 的处理结果还原回原顺序（便于后续逻辑）
  const collisionResolvedById = Object.fromEntries(collisionResolvedPins.map(p => [p.id, p]));
  const rawPinsResolved = rawPins.map(p => collisionResolvedById[p.id]);

  // ── 标签 anti-collision ─────────────────────────────────────
  // 每个 pin 默认 (dx=9, dy=4) 把 label 放在 pin 右下角；如果与已放置 label 距离过近，
  // 改成上方 (dy=-8) 或者左侧 (dx=-9, anchor=end)，最多尝试 4 个候选位置。
  // 只对未显式指定 labelDx/labelDy 的 pin 生效（手动调过的留原位）。
  const placedLabels = []; // [{x, y, w, h}]
  const LABEL_W_EST = 60;  // 估算标签宽度（中文 5-8 字 ~ 50-70px）
  const LABEL_H_EST = 14;
  const candidates = [
    { dx:  9, dy:  4, anchor: 'start' },  // 右下（默认）
    { dx:  9, dy: -8, anchor: 'start' },  // 右上
    { dx: -9, dy:  4, anchor: 'end' },    // 左下
    { dx: -9, dy: -8, anchor: 'end' },    // 左上
    { dx:  0, dy: 16, anchor: 'middle' }, // 正下
    { dx:  0, dy: -12, anchor: 'middle' }, // 正上
  ];
  function rectsOverlap(a, b) {
    return !(a.x + a.w < b.x || b.x + b.w < a.x || a.y + a.h < b.y || b.y + b.h < a.y);
  }
  const pins = rawPinsResolved.map(p => {
    let dx = p.explicitDx, dy = p.explicitDy, anchor = 'start';
    if (dx === null || dy === null) {
      // 自动选最不冲突的候选位置
      for (const c of candidates) {
        const lblX = p.x + c.dx - (c.anchor === 'middle' ? LABEL_W_EST / 2 : (c.anchor === 'end' ? LABEL_W_EST : 0));
        const lblY = p.y + c.dy - LABEL_H_EST / 2;
        const rect = { x: lblX, y: lblY, w: LABEL_W_EST, h: LABEL_H_EST };
        const collides = placedLabels.some(r => rectsOverlap(r, rect));
        if (!collides) {
          dx = c.dx; dy = c.dy; anchor = c.anchor;
          placedLabels.push(rect);
          break;
        }
      }
      // 都冲突 → 用第一候选（接受重叠）
      if (dx === null) {
        dx = candidates[0].dx; dy = candidates[0].dy; anchor = candidates[0].anchor;
      }
    } else {
      // 显式指定也加入"已占用"清单
      const lblX = p.x + dx;
      const lblY = p.y + dy - LABEL_H_EST / 2;
      placedLabels.push({ x: lblX, y: lblY, w: LABEL_W_EST, h: LABEL_H_EST });
    }
    return {
      id: p.id, x: p.x, y: p.y,
      type: p.type, label: p.label, note: p.note, year: p.year,
      featured: p.featured,
      labelDx: dx, labelDy: dy, labelAnchor: anchor,
      causality: p.causality,
    };
  });

  // 排序：★ 焦点 pin 渲染顺序最后 → SVG 最上层 → 重叠时点击优先
  // 修复：Magna Carta 的 Runnymede 跟 London 几乎同点（~30km，地图缩放后几乎重叠），
  // 之前 London 在 ★ Runnymede 之上拦截了点击。现在 ★ 一定在上层。
  const isStarPinData = (p) => !!p.featured
    || (p.label?.cn || '').includes('★')
    || (p.label?.en || '').includes('★');
  pins.sort((a, b) => {
    const aStar = isStarPinData(a) ? 1 : 0;
    const bStar = isStarPinData(b) ? 1 : 0;
    return aStar - bStar;  // ★ pin 排到末尾
  });

  // ── 个人代入感：不再 SSR 计算（避免硬编码 founder 个人坐标）──
  // 改为客户端 HistoricalAtlas 组件使用 lib/atlas-projection.js 投影 user.profile.{home,now}。
  // 这里只导出 camera config，让客户端能重建相同的投影。
  return {
    viewBox: `0 0 ${W} ${H}`,
    width: W,
    height: H,
    cameraConfig: {  // 客户端 PersonalMarkers 重建投影需要
      center: view.camera.center,
      scale: view.camera.scale || 700,
      yOffset: view.camera.yOffset || 0,
    },
    landPath,
    politicalPaths,
    customPolygonPaths,
    politicalLabels,
    civilizationGroups,
    features,
    pins,
  };
}


// ── 世界定位小地图（用 Equirectangular 投影 — 简单稳定）────
const WL_W = 720;
const WL_H = 240;
export function renderWorldOverview() {
  const { land } = loadTopo();
  const proj = geoEquirectangular()
    .scale(115)
    .translate([WL_W / 2, WL_H / 2]);
  const pathGen = geoPath(proj);
  const landPath = pathGen(land);
  return {
    viewBox: `0 0 ${WL_W} ${WL_H}`,
    width: WL_W,
    height: WL_H,
    landPath,
    // 关键地点（家乡 / 现在）— 已投影成 [x, y]，可直接 JSON 序列化
    homePoint: proj([116.4, 39.9]),    // 北京（中国 home）
    nowPoint:  proj([-117.83, 33.69]), // Irvine, CA
  };
}

// 把任一 view config 的中心点 + bbox 投影到世界小图上
export function projectViewToWorld(view) {
  if (!view || !view.camera) return null;
  const proj = geoEquirectangular()
    .scale(115)
    .translate([WL_W / 2, WL_H / 2]);
  const center = view.camera.center;
  const [cx, cy] = proj(center);
  return {
    centerXY: [cx, cy],
    label: view.title?.cn || view.id,
    year: view.year,
  };
}


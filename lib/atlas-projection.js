// lib/atlas-projection.js
//
// 纯函数 — 把 (lon, lat) 投影到 view 的 SVG 坐标。
// 服务端 + 客户端共用。客户端用此把"我的家乡 / 现在"等用户特定坐标投影到任意 view 的地图上，
// 不需要把这些坐标 SSR 进 HTML（避免硬编码 + 整合 auth 时灵活）。
//
// 与 lib/atlas-renderer.js 的 makeProjection 保持完全一致的常量。

import { geoMercator } from 'd3-geo';

// 视口常量必须与 atlas-renderer.js 一致
export const VIEW_W = 1000;
export const VIEW_H = 600;

// 把任一 view.camera 配置转成 d3 projection
export function makeProjectionFromCamera(camera) {
  return geoMercator()
    .center(camera.center)
    .scale(camera.scale || 700)
    .translate([VIEW_W / 2, VIEW_H / 2 + (camera.yOffset || 0)]);
}

// 把 (lon, lat) 投影到当前 view 的 SVG xy；返回 null 如果在视口外
export function projectLonLat(camera, lonLat, margin = 8) {
  if (!camera || !Array.isArray(lonLat) || lonLat.length !== 2) return null;
  const proj = makeProjectionFromCamera(camera);
  const xy = proj(lonLat);
  if (!xy || !isFinite(xy[0]) || !isFinite(xy[1])) return null;
  const [x, y] = xy;
  if (x < -margin || x > VIEW_W + margin || y < -margin || y > VIEW_H + margin) return null;
  return { x, y };
}

// 默认个人坐标（创始人女儿 Willow 的家乡 / 现在 — 整合 auth 后由 user.profile 覆盖）
export const DEFAULT_PERSONAL = {
  home: [116.4, 39.9],     // 北京 · 中国
  now:  [-117.83, 33.69],  // Irvine, CA
};

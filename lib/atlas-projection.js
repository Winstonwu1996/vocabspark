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

// 中国主要城市坐标（fromCity 字段输入文本 → [lon, lat]）
// 不全的城市默认中国中心点 / 用户输入英文也兼容
// 整合 auth 后可换成 server-side geocoder（百度 / Google）
export const CN_CITY_COORDS = {
  // 直辖市
  '北京': [116.40, 39.90], '天津': [117.20, 39.13], '上海': [121.47, 31.23], '重庆': [106.55, 29.57],
  // 一线 + 省会
  '广州': [113.27, 23.13], '深圳': [114.06, 22.55], '杭州': [120.16, 30.27], '南京': [118.78, 32.05],
  '苏州': [120.62, 31.32], '成都': [104.07, 30.67], '武汉': [114.30, 30.59], '西安': [108.95, 34.27],
  '青岛': [120.38, 36.07], '大连': [121.62, 38.92], '厦门': [118.10, 24.46], '宁波': [121.55, 29.88],
  '济南': [117.00, 36.65], '郑州': [113.62, 34.75], '长沙': [112.94, 28.23], '昆明': [102.71, 25.04],
  '沈阳': [123.43, 41.80], '哈尔滨': [126.53, 45.80], '长春': [125.32, 43.82], '合肥': [117.27, 31.86],
  '福州': [119.30, 26.08], '南宁': [108.37, 22.82], '贵阳': [106.71, 26.57], '太原': [112.55, 37.87],
  '石家庄': [114.48, 38.03], '兰州': [103.83, 36.07], '银川': [106.27, 38.47], '乌鲁木齐': [87.62, 43.83],
  '呼和浩特': [111.65, 40.82], '南昌': [115.89, 28.68], '海口': [110.34, 20.04], '拉萨': [91.13, 29.66],
  '西宁': [101.78, 36.62], '香港': [114.17, 22.32], '澳门': [113.55, 22.20], '台北': [121.50, 25.03],
  // 二三线常见
  '无锡': [120.30, 31.57], '佛山': [113.12, 23.02], '东莞': [113.75, 23.05], '常州': [119.95, 31.78],
  '泉州': [118.59, 24.91], '温州': [120.65, 28.02], '徐州': [117.18, 34.27], '潍坊': [119.10, 36.71],
  '烟台': [121.39, 37.54], '唐山': [118.18, 39.63], '洛阳': [112.45, 34.62], '开封': [114.35, 34.80],
  '扬州': [119.42, 32.39], '南通': [120.86, 32.01], '绍兴': [120.58, 30.01], '金华': [119.65, 29.08],
  '嘉兴': [120.76, 30.75], '台州': [121.43, 28.66], '汕头': [116.68, 23.35], '中山': [113.39, 22.52],
  '珠海': [113.55, 22.27], '惠州': [114.40, 23.09], '湛江': [110.39, 21.27], '保定': [115.46, 38.87],
  '邯郸': [114.49, 36.61], '秦皇岛': [119.56, 39.94], '包头': [109.83, 40.66], '吉林': [126.55, 43.84],
  '抚顺': [123.97, 41.86], '鞍山': [122.99, 41.11], '镇江': [119.45, 32.20], '盐城': [120.16, 33.35],
  '芜湖': [118.38, 31.33], '马鞍山': [118.51, 31.69], '九江': [115.99, 29.71], '赣州': [114.93, 25.83],
  '湘潭': [112.94, 27.83], '株洲': [113.13, 27.83], '岳阳': [113.13, 29.37], '柳州': [109.41, 24.32],
  '桂林': [110.30, 25.27], '咸阳': [108.71, 34.33], '榆林': [109.74, 38.28], '银光': [106.28, 38.49],
};

// 把家乡城市文本（中文 / 英文 / 拼音）转坐标 — 找不到就返回 null
export function lookupHomeCoord(cityName) {
  if (!cityName || typeof cityName !== 'string') return null;
  var trimmed = cityName.trim();
  // 中文直接查
  if (CN_CITY_COORDS[trimmed]) return CN_CITY_COORDS[trimmed];
  // 「上海市」/「北京市」去掉「市」
  if (trimmed.endsWith('市') && CN_CITY_COORDS[trimmed.slice(0, -1)]) {
    return CN_CITY_COORDS[trimmed.slice(0, -1)];
  }
  // 英文常见拼音映射
  var enMap = {
    'beijing': '北京', 'shanghai': '上海', 'guangzhou': '广州', 'shenzhen': '深圳',
    'hangzhou': '杭州', 'nanjing': '南京', 'suzhou': '苏州', 'chengdu': '成都',
    'wuhan': '武汉', 'xian': '西安', "xi'an": '西安', 'qingdao': '青岛',
    'shenyang': '沈阳', 'tianjin': '天津', 'chongqing': '重庆', 'kunming': '昆明',
    'changsha': '长沙', 'zhengzhou': '郑州', 'hong kong': '香港', 'hongkong': '香港',
    'macau': '澳门', 'taipei': '台北', 'shenzen': '深圳',
  };
  var lower = trimmed.toLowerCase();
  if (enMap[lower] && CN_CITY_COORDS[enMap[lower]]) return CN_CITY_COORDS[enMap[lower]];
  return null;
}

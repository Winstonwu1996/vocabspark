// data/atlas/features.js
//
// 地理要素层 — 河流 / 山脉 / 古道 / 长城 / 海峡 / 地峡 等。
// 用 lon/lat 序列表达，渲染时投影。
// type: 'river' | 'wall' | 'canal' | 'route' | 'mountain' | 'plateau'
//      | 'strait' (海峡 — 决定哪里能过/不能过)
//      | 'isthmus' (地峡)
//
// 时间维度 era（可选）：
//   - 没有 era → 永恒地理（河、山、高原），任何 mode 都显示
//   - era.activeFrom / activeTo → 历史活跃年代
//   - era.persistsToToday: true | 'as-ruins' | 'as-foundations' → 现代 mode 是否仍显示
// 多段（segments）：路网类要素（如罗马公路）用多段描述

export const FEATURES = {
  // ─── 中国 ───────────────────────────────────────────────
  yangtze: {
    type: 'river',
    label: { cn: '长江', en: 'Yangtze River' },
    color: '#0288d1',
    width: 2.2,
    points: [
      [91, 33], [96, 31], [101, 30], [104, 29], [107, 30],
      [110, 30.5], [114, 30.5], [117, 31], [120, 31.5], [122, 31.8],
    ],
    labelAt: [113, 30.5],
  },
  'yellow-river': {
    type: 'river',
    label: { cn: '黄河', en: 'Yellow River' },
    color: '#c08560',
    width: 2.2,
    points: [
      [96, 35], [100, 36], [105, 36], [108, 38], [112, 36],
      [115, 35.5], [118, 35.7], [121, 36.8], [123, 37.5],
    ],
    labelAt: [110, 36.5],
  },
  'great-wall': {
    type: 'wall',
    label: { cn: '长城', en: 'Great Wall' },
    color: '#5d4037',
    width: 2.5,
    dash: '6,3',
    // 西起嘉峪关 (97.5°E, 39.8°N) → 东至山海关 (119.7°E, 40.0°N)
    points: [
      [97.5, 39.8], [101, 39.0], [104, 38.5], [108, 39.2], [112, 40.4],
      [115, 40.5], [117, 40.4], [119.7, 40.0],
    ],
    labelAt: [113, 40.9],
    era: {
      activeFrom: -221,            // 秦始皇始建
      activeTo: 1644,              // 明朝最后大规模修筑
      persistsToToday: 'as-ruins', // 现代仍存（遗迹/景观）
    },
  },
  'grand-canal': {
    type: 'canal',
    label: { cn: '京杭大运河', en: 'Grand Canal' },
    color: '#1565c0',
    width: 2,
    dash: '2,2',
    points: [
      [116.4, 39.9],   // 北京
      [117.2, 39.1],   // 天津
      [115.0, 35.8],
      [116.5, 33.4],
      [117.2, 31.8],
      [119.4, 32.4],   // 扬州
      [120.2, 30.3],   // 杭州
    ],
    labelAt: [118, 35],
    era: {
      activeFrom: 605,            // 隋朝开凿
      activeTo: null,             // 至今仍通航
      persistsToToday: true,      // 现代仍是水运动脉
    },
  },
  'silk-road': {
    type: 'route',
    label: { cn: '丝绸之路', en: 'Silk Road' },
    color: '#a07cb8',
    width: 1.6,
    dash: '4,3',
    points: [
      [108.94, 34.34], // 长安
      [104.7, 38.0],   // 兰州
      [97.0, 39.6],    // 嘉峪关
      [94.66, 40.14],  // 敦煌
      [88.0, 41.5],
      [80.0, 41.0],
      [76.0, 39.5],
      [69.0, 39.5],
      [66.97, 39.65],  // 撒马尔罕
    ],
    labelAt: [88, 41.5],
    era: {
      activeFrom: -130,                    // 张骞通西域
      activeTo: 1450,                      // 海上贸易兴起后衰落
      persistsToToday: 'as-foundations',   // 一带一路 + 遗迹
    },
  },
  'tibetan-plateau': {
    type: 'plateau',
    label: { cn: '青藏高原', en: 'Tibetan Plateau' },
    color: '#a89878',
    labelAt: [88, 32],
    labelOnly: true,   // 不画轮廓，只标名
  },
  himalaya: {
    type: 'mountain',
    label: { cn: '喜马拉雅山脉', en: 'Himalayas' },
    color: '#7d6e5d',
    width: 1.8,
    points: [
      [75, 35], [78, 33.5], [82, 31], [86, 28.5], [90, 28], [94, 28.5], [97, 28.5],
    ],
    labelAt: [86, 27.5],
  },
  'mongolian-steppe': {
    type: 'plateau',
    label: { cn: '蒙古草原', en: 'Mongolian Steppe' },
    labelAt: [105, 47],
    labelOnly: true,
  },

  // ─── 欧洲 ───────────────────────────────────────────────
  rhine: {
    type: 'river',
    label: { cn: '莱茵河', en: 'Rhine' },
    color: '#0288d1',
    width: 1.8,
    points: [
      [9.5, 47], [8, 48], [7.5, 49], [7, 50], [6.5, 51], [5.5, 51.8], [4.5, 52],
    ],
    labelAt: [7.5, 50],
  },
  danube: {
    type: 'river',
    label: { cn: '多瑙河', en: 'Danube' },
    color: '#0288d1',
    width: 1.8,
    points: [
      [8.5, 48], [12, 48.5], [16, 48], [19, 47.5], [22, 45.5], [25, 44], [28, 44.5], [29.5, 45],
    ],
    labelAt: [19, 47.7],
  },
  alps: {
    type: 'mountain',
    label: { cn: '阿尔卑斯山脉', en: 'Alps' },
    color: '#7d6e5d',
    width: 1.8,
    points: [
      [6, 45.5], [8, 46], [10, 46.5], [12, 46.8], [14, 46.5], [16, 46.5],
    ],
    labelAt: [11, 46.2],
  },
  pyrenees: {
    type: 'mountain',
    label: { cn: '比利牛斯山', en: 'Pyrenees' },
    color: '#7d6e5d',
    width: 1.6,
    points: [
      [-1.5, 43], [0, 42.7], [1.5, 42.5], [3, 42.5],
    ],
    labelAt: [1, 42.3],
  },

  // ─── 北美洲 ──────────────────────────────────────────────
  mississippi: {
    type: 'river',
    label: { cn: '密西西比河', en: 'Mississippi River' },
    color: '#0288d1',
    width: 2.2,
    points: [
      [-95.0, 47.2],   // 源头明尼苏达 Itasca 湖
      [-94.0, 45.5],   // 圣保罗
      [-91.5, 43.5],   // IA-WI 边界
      [-91.0, 41.5],   // 达文波特
      [-90.5, 39.5],   // IL/MO 圣路易斯（与 Missouri 河汇合）
      [-90.0, 38.6],   // 圣路易斯下方
      [-89.5, 37.0],   // 开罗（与 Ohio 河汇合）
      [-89.5, 35.1],   // 孟菲斯
      [-91.2, 32.5],   // 纳奇兹
      [-91.3, 30.5],   // 巴吞鲁日
      [-90.1, 29.95],  // 新奥尔良
      [-89.2, 29.0],   // 河口
    ],
    labelAt: [-90.5, 35.0],
  },
  'ohio-river': {
    type: 'river',
    label: { cn: '俄亥俄河', en: 'Ohio River' },
    color: '#0288d1',
    width: 1.8,
    points: [
      [-80.0, 40.4],   // 匹兹堡（源头：Allegheny + Monongahela 汇）
      [-82.6, 38.5],   // 西弗吉尼亚
      [-84.5, 38.9],   // 辛辛那提
      [-86.5, 38.0],   // 印第安纳南
      [-88.0, 37.7],   // 肯塔基-伊利诺
      [-89.0, 37.2],   // 接近开罗
      [-89.5, 37.0],   // 与 Mississippi 汇合
    ],
    labelAt: [-86, 38.4],
  },
  'missouri-river': {
    type: 'river',
    label: { cn: '密苏里河', en: 'Missouri River' },
    color: '#0288d1',
    width: 1.8,
    points: [
      [-111.5, 45.7],  // 源头蒙大拿
      [-104.0, 47.9],  // ND-MT
      [-100.4, 46.8],  // 俾斯麦
      [-96.8, 43.5],   // 苏福尔斯
      [-95.7, 41.3],   // 奥马哈
      [-94.6, 39.1],   // 堪萨斯城
      [-92.2, 38.6],   // 杰斐逊城
      [-90.5, 38.7],   // 与 Mississippi 汇合（圣路易斯北）
    ],
    labelAt: [-100, 44],
  },
  appalachians: {
    type: 'mountain',
    label: { cn: '阿巴拉契亚山脉', en: 'Appalachian Mts.' },
    color: '#7d6e5d',
    width: 2.2,
    // 从亚拉巴马到缅因
    points: [
      [-86.5, 33.5], [-84.2, 35.5], [-82.6, 36.2], [-81.0, 37.5],
      [-79.0, 39.0], [-77.0, 40.5], [-75.0, 41.5], [-73.5, 43.0],
      [-71.5, 44.5], [-69.5, 45.5],
    ],
    labelAt: [-79.5, 38.5],
  },
  'mason-dixon': {
    type: 'wall',  // 用 wall 类型获得虚线视觉
    label: { cn: '梅森-迪克森线', en: 'Mason–Dixon Line' },
    color: '#5a4a3a',
    width: 1.6,
    dash: '5,3',
    // 1767 年勘界 — 宾夕法尼亚 vs 马里兰；后成为自由州/蓄奴州象征分界
    points: [
      [-80.5, 39.72], [-77.0, 39.72], [-75.7, 39.72], [-75.4, 38.45],
    ],
    labelAt: [-78, 39.95],
    era: {
      activeFrom: 1767,
      persistsToToday: true,
    },
  },
  'rocky-mountains': {
    type: 'mountain',
    label: { cn: '落基山脉', en: 'Rocky Mts.' },
    color: '#7d6e5d',
    width: 2.4,
    points: [
      [-115, 49], [-114, 47], [-112, 45], [-110, 43], [-108, 41],
      [-107, 39], [-106, 37], [-105.5, 35], [-105, 33],
    ],
    labelAt: [-110, 41],
  },
  'rio-grande': {
    type: 'river',
    label: { cn: '格兰德河', en: 'Rio Grande' },
    color: '#0288d1',
    width: 1.8,
    // 源头科罗拉多 → El Paso → 河口墨西哥湾；1848 后成为美墨界河
    points: [
      [-106.6, 37.8],   // 源头科罗拉多南
      [-106.6, 35.7],   // 阿尔伯克基
      [-106.6, 31.8],   // El Paso
      [-104.5, 30.0],   // Big Bend
      [-101.0, 28.5],   // Eagle Pass
      [-99.5, 27.5],    // Laredo
      [-97.4, 26.0],    // Brownsville
      [-97.0, 25.9],    // 墨西哥湾入海
    ],
    labelAt: [-103, 30.5],
  },
  // ─── 西非 / 北非（伊斯兰商业带）───
  'niger-river': {
    type: 'river',
    label: { cn: '尼日尔河', en: 'Niger River' },
    color: '#0288d1',
    width: 2.0,
    points: [
      [-9.5, 9.5],   // 源头几内亚高地
      [-8.0, 11.0],
      [-5.5, 13.0],
      [-3.0, 14.0],
      [-1.0, 15.0],  // 大弯
      [-3.0, 16.5],  // 廷巴克图段
      [0.0, 16.5],
      [2.0, 13.0],
      [5.0, 11.0],
      [6.5, 8.0],    // 尼日利亚
      [6.0, 4.5],    // 三角洲入海
    ],
    labelAt: [-3.0, 17.4],
  },
  'sahara-trade': {
    type: 'route',
    label: { cn: '跨撒哈拉商路', en: 'Trans-Saharan Trade' },
    color: '#a06b40',
    width: 1.4,
    dash: '3,2',
    segments: [
      // 西路：摩洛哥 → 廷巴克图
      { name: 'Western', points: [[-7, 33], [-6, 30], [-4, 26], [-3, 22], [-3, 17.5]] },
      // 中路：突尼斯 → 加奥/廷巴克图
      { name: 'Central', points: [[10, 36.8], [9, 32], [4, 26], [0, 21], [-1, 17]] },
      // 东路：开罗 → 廷巴克图（朝觐 + 黄金路线）
      { name: 'Pilgrim Road', points: [[31, 30], [25, 24], [15, 20], [5, 17], [-2, 17]] },
    ],
    labelAt: [-2, 24],
    era: {
      activeFrom: 700,
      activeTo: 1500,
    },
  },
  // ─── 中东 / 黎凡特 ───
  tigris: {
    type: 'river',
    label: { cn: '底格里斯河', en: 'Tigris River' },
    color: '#0288d1',
    width: 1.9,
    points: [
      [39.5, 38.5], [42.0, 36.5], [43.5, 35.0],
      [44.5, 33.5], [46.0, 31.5], [47.5, 30.5], [48.5, 30.0],
    ],
    labelAt: [44, 34],
  },
  euphrates: {
    type: 'river',
    label: { cn: '幼发拉底河', en: 'Euphrates River' },
    color: '#0288d1',
    width: 1.9,
    points: [
      [38.0, 39.0], [38.5, 36.7], [40.5, 35.5], [42.5, 34.0],
      [44.0, 32.5], [46.0, 31.0], [47.5, 30.3], [48.5, 30.0],
    ],
    labelAt: [42, 35],
  },
  'jordan-river': {
    type: 'river',
    label: { cn: '约旦河', en: 'Jordan River' },
    color: '#0288d1',
    width: 1.4,
    points: [
      [35.6, 33.3],  // 源头黑门山南
      [35.6, 32.9],  // 加利利湖入
      [35.5, 31.8],  // 死海入口
    ],
    labelAt: [35.85, 32.3],
  },
  // ─── 南美 ───
  andes: {
    type: 'mountain',
    label: { cn: '安第斯山脉', en: 'Andes Mts.' },
    color: '#7d6e5d',
    width: 2.4,
    points: [
      [-72, 11], [-74, 5], [-76, 0], [-78, -5], [-77, -12],
      [-71, -16], [-68, -22], [-69, -28], [-70, -35], [-71, -42],
    ],
    labelAt: [-72, -15],
  },
  'amazon-river': {
    type: 'river',
    label: { cn: '亚马逊河', en: 'Amazon River' },
    color: '#0288d1',
    width: 2.0,
    points: [
      [-77, -5], [-73, -4], [-68, -3.5], [-63, -3.5],
      [-58, -3], [-54, -2.5], [-50, -1.8], [-50, -0.5],
    ],
    labelAt: [-60, -2.5],
  },

  // ─── 海峡 / 地峡 (chokepoints — 决定 "哪里能过、哪里过不去") ───
  'english-channel': {
    type: 'strait',
    label: { cn: '英吉利海峡', en: 'English Channel' },
    color: '#1976d2',
    width: 2.2,
    points: [[-2.5, 50.4], [1.8, 51.0]],
    labelAt: [-0.3, 50.0],
    significance: { cn: '1066 年后无人能再登陆英国 — 英国独立路径的物理基础' },
  },
  'bosporus': {
    type: 'strait',
    label: { cn: '博斯普鲁斯海峡', en: 'Bosporus' },
    color: '#1976d2',
    width: 2.0,
    points: [[28.95, 41.30], [29.10, 41.00]],
    labelAt: [29.85, 41.10],
    significance: { cn: '欧亚陆桥 — 君士坦丁堡为什么是世界中心 1000 年' },
  },
  'gibraltar': {
    type: 'strait',
    label: { cn: '直布罗陀海峡', en: 'Strait of Gibraltar' },
    color: '#1976d2',
    width: 2.0,
    points: [[-5.6, 35.95], [-5.35, 36.10]],
    labelAt: [-5.5, 35.5],
    significance: { cn: '地中海 vs 大西洋的开关' },
  },
  'malacca-strait': {
    type: 'strait',
    label: { cn: '马六甲海峡', en: 'Strait of Malacca' },
    color: '#1976d2',
    width: 2.0,
    points: [[100.0, 4.5], [103.5, 1.3]],
    labelAt: [101.5, 2.6],
    significance: { cn: '海上丝路咽喉 — 今日新加坡的根' },
  },
  'suez-isthmus': {
    type: 'isthmus',
    label: { cn: '苏伊士地峡', en: 'Suez Isthmus' },
    color: '#a06b40',
    width: 2.5,
    dash: '4,2',
    points: [[32.55, 30.0], [32.65, 31.25]],
    labelAt: [33.6, 30.6],
    significance: { cn: '1869 之前欧亚船必须绕非洲 — 决定大航海路线' },
  },

  // ─── 罗马帝国基础设施（跨时代） ───────────────────────
  'roman-roads': {
    type: 'route',
    label: { cn: '罗马公路', en: 'Roman Roads' },
    color: '#a06b40',
    width: 1.5,
    dash: '3,2',
    // 多段路网（4 条主干道，简化）
    segments: [
      // Via Appia · 罗马 → Brindisi（南下）
      { name: 'Via Appia', points: [[12.49, 41.90], [13.5, 41.4], [14.8, 41.1], [16.5, 40.8], [17.93, 40.64]] },
      // Via Egnatia · Dyrrachium（阿尔巴尼亚）→ 君士坦丁堡（东向）
      { name: 'Via Egnatia', points: [[19.45, 41.32], [21.0, 41.0], [23.0, 40.8], [25.0, 40.7], [27.0, 40.8], [28.98, 41.01]] },
      // Via Aurelia · 罗马 → 高卢南部（北上转西）
      { name: 'Via Aurelia', points: [[12.49, 41.90], [11.0, 42.5], [9.5, 43.5], [7.5, 43.7], [5.5, 43.5], [3.5, 43.3]] },
      // Via Flaminia · 罗马 → Rimini（北上）
      { name: 'Via Flaminia', points: [[12.49, 41.90], [12.6, 42.5], [12.8, 43.3], [12.6, 44.06]] },
    ],
    labelAt: [13.5, 39.5],   // 意大利南
    era: {
      activeFrom: -300,                    // 共和国时期开始建设
      activeTo: 476,                       // 西罗马帝国灭亡（路系仍在用）
      persistsToToday: 'as-foundations',   // 多条现代欧洲国道仍以此为基底
    },
  },
};

// data/atlas/polities.js
//
// L3 政治层 — 按"年代-区域"快照定义。
// 注：边界用现代国家多边形粗略近似，仅为原型；正式版需 HISTGIS 真实历史边界。

// ISO 3166-1 alpha-3 → numeric (3 位字符串补零)
// 用于把 polity.iso: ['XYZ'] 映射到 countries-110m.json 的 feature.id
// 维护原则：手动编辑此表；validator 会校验所有 iso[] 引用都在表中。
//
// 完整范围参考：https://www.iso.org/obp/ui/#search/code/
// 这里收录全部 ~250 国家/地区，重点覆盖中学历史 + AP 课程会出现的所有政体。
export const ISO_NUM = {
  // Europe
  GBR: '826', IRL: '372', FRA: '250', BEL: '056', LUX: '442', MCO: '492',
  DEU: '276', AUT: '040', CHE: '756', CZE: '203', NLD: '528', SVN: '705',
  ESP: '724', PRT: '620', ITA: '380', VAT: '336', SMR: '674', AND: '020',
  GRC: '300', TUR: '792', BGR: '100', MKD: '807', ALB: '008', MLT: '470',
  NOR: '578', SWE: '752', DNK: '208', ISL: '352', FIN: '246', LIE: '438',
  UKR: '804', BLR: '112', RUS: '643', POL: '616', LTU: '440', LVA: '428', EST: '233',
  HUN: '348', SVK: '703', ROU: '642', HRV: '191', SRB: '688', BIH: '070', MNE: '499', KOS: '383',
  CYP: '196', MDA: '498',
  // Asia
  CHN: '156', MNG: '496', KOR: '410', PRK: '408', JPN: '392', TWN: '158',
  VNM: '704', THA: '764', MMR: '104', LAO: '418', KHM: '116', BRN: '096',
  IND: '356', PAK: '586', BGD: '050', NPL: '524', BTN: '064', MDV: '462',
  KAZ: '398', UZB: '860', TKM: '795', KGZ: '417', TJK: '762', AFG: '004',
  IRN: '364', IRQ: '368', SYR: '760', LBN: '422', JOR: '400', ISR: '376', PSE: '275',
  SAU: '682', YEM: '887', OMN: '512', ARE: '784', QAT: '634', KWT: '414', BHR: '048',
  LKA: '144', IDN: '360', MYS: '458', PHL: '608', SGP: '702', TLS: '626',
  ARM: '051', AZE: '031', GEO: '268',
  // Africa
  EGY: '818', LBY: '434', SDN: '729', SSD: '728', TUN: '788', DZA: '012', MAR: '504', ESH: '732',
  MRT: '478', MLI: '466', NER: '562', TCD: '148', NGA: '566', SEN: '686', GMB: '270',
  GIN: '324', GNB: '624', SLE: '694', LBR: '430', CIV: '384', GHA: '288', TGO: '768', BEN: '204',
  BFA: '854', CMR: '120', CAF: '140', GAB: '266', COG: '178', COD: '180', AGO: '024',
  GNQ: '226', STP: '678', CPV: '132',
  ETH: '231', ERI: '232', DJI: '262', SOM: '706', KEN: '404', UGA: '800', RWA: '646', BDI: '108', TZA: '834',
  ZMB: '894', ZWE: '716', MWI: '454', MOZ: '508', NAM: '516', BWA: '072', ZAF: '710', SWZ: '748', LSO: '426',
  MDG: '450', MUS: '480', SYC: '690', COM: '174',
  // Americas
  USA: '840', CAN: '124', MEX: '484',
  CUB: '192', JAM: '388', HTI: '332', DOM: '214', PRI: '630', BHS: '044', BRB: '052', TTO: '780',
  GTM: '320', BLZ: '084', SLV: '222', HND: '340', NIC: '558', CRI: '188', PAN: '591',
  COL: '170', VEN: '862', GUY: '328', SUR: '740', GUF: '254',
  ECU: '218', PER: '604', BOL: '068', BRA: '076', PRY: '600', URY: '858', ARG: '032', CHL: '152',
  // Oceania
  AUS: '036', NZL: '554', PNG: '598', FJI: '242', SLB: '090', VUT: '548',
  WSM: '882', TON: '776', KIR: '296', PLW: '585', FSM: '583', MHL: '584', NRU: '520', TUV: '798',
};

// 颜色调色板（统一品牌系）
const C = {
  englandOrange: '#d97149',
  franceBlue:    '#7a8aa8',
  hreLavender:   '#a07cb8',
  iberianGold:   '#d6b94a',
  italianGreen:  '#79a373',
  byzantineTeal: '#5fa8a0',
  scandinaviaBronze: '#c08560',
  slavicPink:    '#b87a8e',
  hungaryAmber:  '#c69954',
  // East Asia palette
  songRed:       '#d97149',     // 北宋（高亮）
  liaoSlate:     '#8a8a9c',     // 辽（契丹）
  xixiaSand:     '#c9a978',     // 西夏
  goryeoOlive:   '#a8a878',     // 高丽
  japanRose:     '#b87a8e',     // 日本
  daliMint:      '#7eb89a',     // 大理
  vietBlue:      '#5fa8a0',     // 大越（前黎/李朝）
  // 14 世纪追加
  yuanGray:      '#7d6e8a',     // 元
  mamlukOcher:   '#b8956a',     // 马穆鲁克
  goldenHordeOrchid: '#a878b8', // 金帐汗国
};

export const POLITIES = {
  // ─── 1215 欧洲（大宪章年代）─ 用 historical-basemaps 1200 年快照 ─
  'europe-1215': [
    { id: 'england',     label: { cn: '英格兰王国（含 Angevin 法属地）', en: 'Kingdom of England (Angevin Empire)' }, sourceName: 'Angevin Empire', color: C.englandOrange, focal: true, labelAt: [-2.5, 53] },
    { id: 'france',      label: { cn: '法兰西王国', en: 'Kingdom of France' },  sourceName: 'Kingdom of France', color: C.franceBlue, labelAt: [2.5, 47] },
    { id: 'hre',         label: { cn: '神圣罗马帝国', en: 'Holy Roman Empire' }, sourceName: 'Holy Roman Empire', color: C.hreLavender, labelAt: [11, 50.5] },
    { id: 'papal',       label: { cn: '教皇国', en: 'Papal States' },           sourceName: 'Papal States', color: C.italianGreen, labelAt: [12.5, 43] },
    { id: 'iberian',     label: { cn: '伊比利亚基督诸王国', en: 'Iberian Christian Kingdoms' }, sourceName: ['Castilla','Portugal','Navarre'], color: C.iberianGold, labelAt: [-3.7, 41.5] },
    { id: 'almohad-1200', label: { cn: '阿尔莫哈德哈里发国', en: 'Almohad Caliphate' }, sourceName: 'Almohad Caliphate', color: '#3da57a', labelAt: [-3, 36] },
    { id: 'byzantine',   label: { cn: '拜占庭帝国', en: 'Byzantine Empire' },   sourceName: 'Byzantine Empire', color: C.byzantineTeal, labelAt: [29, 39] },
    { id: 'bulgar-khanate', label: { cn: '保加尔汗国', en: 'Bulgar Khanate' }, sourceName: 'Bulgar Khanate', color: '#5fa8a0', labelAt: [25, 42] },
    { id: 'scandinavia', label: { cn: '北欧诸王国', en: 'Scandinavian Kingdoms' }, iso: ['NOR','SWE','DNK','ISL'], color: C.scandinaviaBronze, labelAt: [16, 62] },
    { id: 'poland-1215', label: { cn: '波兰', en: 'Poland' }, sourceName: 'Poland', color: '#a07cb8', labelAt: [19, 52] },
    { id: 'novgorod',    label: { cn: '诺夫哥罗德公国', en: 'Principality of Novgorod' }, sourceName: 'Principality of Novgorod', color: '#b87a8e', labelAt: [33, 60] },
    { id: 'rus',         label: { cn: '罗斯诸公国', en: 'Other Rus Principalities' }, sourceName: 'Other Rus Principalities', color: C.slavicPink, labelAt: [32, 53] },
    { id: 'hungary',     label: { cn: '匈牙利王国', en: 'Hungary' }, sourceName: 'Hungary', color: C.hungaryAmber, labelAt: [20, 47] },
  ],

  // ─── 1000 东亚（北宋盛世年代）─────────────────
  // 现在用 historical-basemaps GeoJSON 真实历史边界（sourceName 字段对应 GeoJSON 的 NAME）
  'east-asia-1000': [
    { id: 'northern-song', label: { cn: '北宋', en: 'Northern Song' },     sourceName: 'Song Empire', color: C.songRed, focal: true },
    { id: 'liao',          label: { cn: '辽（契丹）', en: 'Liao (Khitan)' }, sourceName: 'Liao',        color: C.liaoSlate },
    { id: 'western-xia',   label: { cn: '西夏', en: 'Western Xia' },        sourceName: 'Xixia',       color: C.xixiaSand },
    { id: 'tibet',         label: { cn: '吐蕃诸部', en: 'Tibet' },          sourceName: 'Tibet',       color: '#8a6f9c' },
    { id: 'dali',          label: { cn: '大理国', en: 'Dali Kingdom' },     sourceName: 'Nan Chao',    color: C.daliMint },  // historical-basemaps 在 1000 年用 'Nan Chao' 名
    { id: 'goryeo',        label: { cn: '高丽', en: 'Goryeo' },             iso: ['KOR','PRK'],        color: C.goryeoOlive },
    { id: 'japan',         label: { cn: '日本（平安）', en: 'Heian Japan' }, sourceName: 'Imperial Japan (Fujiwara)', color: C.japanRose },
    { id: 'dai-viet',      label: { cn: '大越（安南）', en: 'Đại Việt (Annam)' }, sourceName: 'Annam',  color: C.vietBlue },
  ],

  // ─── 现代东亚（与北宋时代对照用）─────────────
  'east-asia-modern': [
    { id: 'china',    label: { cn: '中国', en: 'China' },        iso: ['CHN'], color: '#d97149', focal: true, labelAt: [104, 36] },
    { id: 'mongolia', label: { cn: '蒙古', en: 'Mongolia' },     iso: ['MNG'], color: '#8a8a9c', labelAt: [104, 47] },
    { id: 'south-korea', label: { cn: '韩国', en: 'South Korea' }, iso: ['KOR'], color: '#a8a878', labelAt: [128, 36] },
    { id: 'north-korea', label: { cn: '朝鲜', en: 'North Korea' }, iso: ['PRK'], color: '#9a9a68', labelAt: [127, 40] },
    { id: 'japan',    label: { cn: '日本', en: 'Japan' },        iso: ['JPN'], color: '#b87a8e', labelAt: [138, 36] },
    { id: 'vietnam',  label: { cn: '越南', en: 'Vietnam' },      iso: ['VNM'], color: '#5fa8a0', labelAt: [106, 16] },
  ],

  // ─── 现代欧洲（与 1215 年对照用）─────────────
  // 现代国家给每个独立颜色 + 显式 labelAt（避免海外领土）
  'europe-modern': [
    { id: 'uk',       label: { cn: '英国', en: 'United Kingdom' }, iso: ['GBR'], color: '#d97149', focal: true, labelAt: [-2, 53] },
    { id: 'ireland',  label: { cn: '爱尔兰', en: 'Ireland' },      iso: ['IRL'], color: '#7eb89a', labelAt: [-8, 53] },
    { id: 'france-m', label: { cn: '法国', en: 'France' },         iso: ['FRA','MCO'], color: '#7a8aa8', labelAt: [2.5, 46.8] },
    { id: 'belgium',  label: { cn: '比利时', en: 'Belgium' },      iso: ['BEL'], color: '#c69954', labelAt: [4.5, 50.5] },
    { id: 'netherlands', label: { cn: '荷兰', en: 'Netherlands' }, iso: ['NLD'], color: '#d6b94a', labelAt: [5.5, 52.2] },
    { id: 'germany',  label: { cn: '德国', en: 'Germany' },        iso: ['DEU'], color: '#a07cb8', labelAt: [10.5, 51] },
    { id: 'austria',  label: { cn: '奥地利', en: 'Austria' },      iso: ['AUT'], color: '#b87a8e', labelAt: [14.5, 47.5] },
    { id: 'switzerland', label: { cn: '瑞士', en: 'Switzerland' }, iso: ['CHE'], color: '#c08560', labelAt: [8.2, 46.8] },
    { id: 'czech',    label: { cn: '捷克', en: 'Czechia' },        iso: ['CZE'], color: '#79a373', labelAt: [15.4, 49.8] },
    { id: 'italy',    label: { cn: '意大利', en: 'Italy' },        iso: ['ITA','VAT','SMR'], color: '#5fa8a0', labelAt: [12.5, 42] },
    { id: 'spain',    label: { cn: '西班牙', en: 'Spain' },        iso: ['ESP'], color: '#d6b94a', labelAt: [-3.7, 40] },
    { id: 'portugal', label: { cn: '葡萄牙', en: 'Portugal' },     iso: ['PRT'], color: '#c69954', labelAt: [-8, 39.5] },
    { id: 'turkey',   label: { cn: '土耳其', en: 'Turkey' },       iso: ['TUR'], color: '#3da57a', labelAt: [35, 39] },
    { id: 'greece',   label: { cn: '希腊', en: 'Greece' },         iso: ['GRC'], color: '#5fa8a0', labelAt: [22, 39.5] },
    { id: 'poland',   label: { cn: '波兰', en: 'Poland' },         iso: ['POL'], color: '#b87a8e', labelAt: [19, 52] },
    { id: 'hungary-m', label: { cn: '匈牙利', en: 'Hungary' },     iso: ['HUN'], color: '#c69954', labelAt: [19.5, 47.2] },
    { id: 'sweden',   label: { cn: '瑞典', en: 'Sweden' },         iso: ['SWE'], color: '#a8a878', labelAt: [16, 62] },
    { id: 'norway',   label: { cn: '挪威', en: 'Norway' },         iso: ['NOR'], color: '#c08560', labelAt: [10, 62] },
    { id: 'denmark',  label: { cn: '丹麦', en: 'Denmark' },        iso: ['DNK'], color: '#9a7e5a', labelAt: [9.5, 56] },
    { id: 'ukraine',  label: { cn: '乌克兰', en: 'Ukraine' },      iso: ['UKR'], color: '#b87a8e', labelAt: [31, 49] },
  ],

  // ─── 现代欧亚（与 1347 年对照用）──────────────
  'eurasia-modern': [
    { id: 'china-m',  label: { cn: '中国', en: 'China' },         iso: ['CHN'], color: '#d97149', focal: true, labelAt: [104, 36] },
    { id: 'mongolia-m', label: { cn: '蒙古', en: 'Mongolia' },    iso: ['MNG'], color: '#8a8a9c', labelAt: [104, 47] },
    { id: 'russia',   label: { cn: '俄罗斯', en: 'Russia' },      iso: ['RUS'], color: '#a878b8', labelAt: [60, 60] },
    { id: 'kazakhstan', label: { cn: '哈萨克斯坦', en: 'Kazakhstan' }, iso: ['KAZ'], color: '#c69954', labelAt: [68, 48] },
    { id: 'egypt-m',  label: { cn: '埃及', en: 'Egypt' },         iso: ['EGY'], color: '#b8956a', labelAt: [30, 27] },
    { id: 'saudi',    label: { cn: '沙特', en: 'Saudi Arabia' },  iso: ['SAU'], color: '#c9a978', labelAt: [45, 24] },
    { id: 'syria-m',  label: { cn: '叙利亚', en: 'Syria' },       iso: ['SYR'], color: '#a8956a', labelAt: [38, 35] },
    { id: 'turkey-m', label: { cn: '土耳其', en: 'Turkey' },      iso: ['TUR'], color: '#5fa8a0', labelAt: [35, 39] },
    { id: 'uk-m',     label: { cn: '英国', en: 'United Kingdom' }, iso: ['GBR'], color: '#d97149', labelAt: [-2, 53] },
    { id: 'france-m2', label: { cn: '法国', en: 'France' },       iso: ['FRA'], color: '#7a8aa8', labelAt: [2.5, 46.8] },
    { id: 'germany-m', label: { cn: '德国', en: 'Germany' },      iso: ['DEU'], color: '#a07cb8', labelAt: [10.5, 51] },
    { id: 'italy-m',  label: { cn: '意大利', en: 'Italy' },       iso: ['ITA'], color: '#79a373', labelAt: [12.5, 42] },
  ],

  // ─── 1517 宗教改革（路德 95 条论纲）─ 用 world_1530 ─
  'reformation-1517': [
    { id: 'hre-1517',         label: { cn: '神圣罗马帝国（路德起源地）', en: 'Holy Roman Empire (Luther\'s base)' }, sourceName: 'Holy Roman Empire', color: '#a07cb8', focal: true, labelAt: [11, 50] },
    { id: 'france-1517',      label: { cn: '法兰西', en: 'France' },                    sourceName: 'France', color: '#7a8aa8', labelAt: [2.5, 47] },
    { id: 'spain-1517',       label: { cn: '哈布斯堡西班牙', en: 'Habsburg Spain' },     sourceName: 'Spain', color: '#d6b94a', labelAt: [-3.7, 40] },
    { id: 'sweden-1517',      label: { cn: '瑞典（很快改革）', en: 'Sweden (soon Lutheran)' }, sourceName: 'Sweden', color: '#c08560', labelAt: [16, 62] },
    { id: 'poland-lithuania', label: { cn: '波兰立陶宛联邦', en: 'Poland-Lithuania' },   sourceName: 'Poland-Llituania', color: '#b87a8e', labelAt: [22, 53] },
  ],

  // ─── 1241 蒙古帝国横扫欧亚 ─ 用 world_1200（包含 Mongol Empire）─
  'mongol-1241': [
    { id: 'mongol-empire',    label: { cn: '蒙古帝国（Pax Mongolica）', en: 'Mongol Empire' }, sourceName: 'Mongol Empire', color: '#7d6e8a', focal: true, labelAt: [100, 47] },
    { id: 'song-1241',        label: { cn: '南宋（即将被灭）', en: 'Southern Song (soon)' }, sourceName: 'Song Empire', color: '#d97149', labelAt: [115, 30] },
    // 花剌子模在 world_1200 没有独立条目（蒙古 1219-1221 灭它）— 由文明圈层 + Mongol Empire 多边形覆盖
    { id: 'hungary-1241',     label: { cn: '匈牙利（被入侵）', en: 'Hungary (invaded)' },     sourceName: 'Hungary', color: '#c69954', labelAt: [20, 47] },
    { id: 'poland-1241',      label: { cn: '波兰（被入侵）', en: 'Poland (invaded)' },        sourceName: 'Poland', color: '#a07cb8', labelAt: [19, 52] },
    { id: 'rus-1241',         label: { cn: '罗斯诸公国（被屠）', en: 'Rus (conquered)' },     sourceName: 'Other Rus Principalities', color: '#b87a8e', labelAt: [32, 53] },
    { id: 'hre-1241',         label: { cn: '神圣罗马帝国（差点被入侵）', en: 'HRE (nearly invaded)' }, sourceName: 'Holy Roman Empire', color: '#9a7e5a', labelAt: [11, 50] },
    { id: 'byzantine-1241',   label: { cn: '尼西亚帝国', en: 'Empire of Nicaea' },         sourceName: 'Byzantine Empire', color: '#5fa8a0', labelAt: [29, 40] },
  ],

  // ─── 1787 美国制宪（1783 快照接近）─
  'constitution-1787': [
    { id: 'usa-1787',         label: { cn: '美利坚合众国', en: 'United States' },          sourceName: 'United States of America', color: '#d97149', focal: true, labelAt: [-78, 38] },
    { id: 'british-quebec-87', label: { cn: '英属魁北克', en: 'British Quebec' },          sourceName: 'Quebec', color: '#7a8aa8', labelAt: [-72, 50] },
    { id: 'spanish-louisiana-87', label: { cn: '西属路易斯安那', en: 'Spanish Louisiana' }, sourceName: 'Luisiana', color: '#c9a978', labelAt: [-95, 38] },
    { id: 'new-spain-87',     label: { cn: '新西班牙', en: 'New Spain' },                  sourceName: 'Vice-Royalty of New Spain', color: '#d6b94a', labelAt: [-102, 22] },
  ],

  // ─── 480 BC 古希腊 vs 波斯（希腊化前夕）─ 用 world_bc500 ─
  'classical-bc500': [
    { id: 'greek-city-states', label: { cn: '希腊城邦', en: 'Greek City-States' },     sourceName: 'Greek city-states', color: '#5fa8a0', focal: true, labelAt: [22, 39] },
    { id: 'persia-bc500',       label: { cn: '阿契美尼德波斯帝国', en: 'Achaemenid Persia' }, sourceName: 'Achaemenid Empire', color: '#a07cb8', labelAt: [50, 32] },
    { id: 'carthage-bc500',     label: { cn: '迦太基帝国', en: 'Carthaginian Empire' }, sourceName: 'Carthaginian Empire', color: '#c9a978', labelAt: [10, 34] },
    { id: 'rome-bc500',         label: { cn: '罗马共和国（萌芽）', en: 'Roman Republic (early)' }, sourceName: 'Rome', color: '#9b3030', labelAt: [12.5, 42] },
  ],

  // ─── 1500 文艺复兴鼎盛 ─ 用 world_1500 ─
  'renaissance-1500': [
    { id: 'florence-venice',    label: { cn: '意大利诸城邦', en: 'Italian City-States' }, sourceName: ['Venice','Papal States'], color: '#79a373', focal: true, labelAt: [12, 43] },
    { id: 'hre-1500',           label: { cn: '神圣罗马帝国', en: 'Holy Roman Empire' },   sourceName: 'Holy Roman Empire', color: '#a07cb8', labelAt: [11, 50] },
    { id: 'france-1500',        label: { cn: '法兰西', en: 'France' },                    sourceName: 'France', color: '#7a8aa8', labelAt: [2.5, 47] },
    { id: 'england-1500',       label: { cn: '都铎英格兰', en: 'Tudor England' },          sourceName: 'England', color: '#d97149', labelAt: [-2, 53] },
    { id: 'ottoman-1500',       label: { cn: '奥斯曼帝国', en: 'Ottoman Empire' },        sourceName: 'Ottoman Empire', color: '#3da57a', labelAt: [33, 39] },
    { id: 'mamluk-1500',        label: { cn: '马穆鲁克苏丹国', en: 'Mamluk Sultanate' },   sourceName: 'Mamluke Sultanate', color: '#b8956a', labelAt: [32, 28] },
    { id: 'ming-1500',          label: { cn: '明帝国', en: 'Ming China' },                sourceName: 'Ming Chinese Empire', color: '#d97149', labelAt: [110, 36] },
  ],

  // ─── 1880 工业革命鼎盛 ─ 用 world_1880 ─
  'industrial-1880': [
    { id: 'uk-1880',            label: { cn: '英国（工业革命发源）', en: 'UK (Industrial heartland)' }, sourceName: 'United Kingdom of Great Britain and Ireland', color: '#d97149', focal: true, labelAt: [-2, 53] },
    { id: 'germany-1880',       label: { cn: '德意志帝国', en: 'German Empire' },         sourceName: 'Germany', color: '#a07cb8', labelAt: [10.5, 51] },
    { id: 'france-1880',        label: { cn: '法兰西第三共和国', en: 'French Third Republic' }, sourceName: 'France', color: '#7a8aa8', labelAt: [2.5, 47] },
    { id: 'austria-1880',       label: { cn: '奥匈帝国', en: 'Austria-Hungary' },        sourceName: 'Austria Hungary', color: '#b87a8e', labelAt: [16, 47] },
    { id: 'russia-1880',        label: { cn: '俄罗斯帝国', en: 'Russian Empire' },        sourceName: 'Russian Empire', color: '#9a7e5a', labelAt: [60, 60] },
    { id: 'italy-1880',         label: { cn: '意大利王国', en: 'Kingdom of Italy' },      sourceName: 'Italy', color: '#79a373', labelAt: [12.5, 42] },
    { id: 'usa-1880',           label: { cn: '美国（崛起中）', en: 'United States (rising)' }, sourceName: 'United States of America', color: '#d97149', labelAt: [-95, 38] },
    { id: 'ottoman-1880',       label: { cn: '奥斯曼（衰落）', en: 'Ottoman (declining)' }, sourceName: 'Ottoman Empire', color: '#3da57a', labelAt: [33, 39] },
    { id: 'qing-1880',          label: { cn: '大清（半殖民地化）', en: 'Qing (semi-colonial)' }, sourceName: 'Manchu Empire', color: '#c9a978', labelAt: [110, 36] },
    { id: 'meiji-japan',        label: { cn: '明治日本', en: 'Meiji Japan' },             sourceName: 'Imperial Japan', color: '#b87a8e', labelAt: [138, 36] },
    { id: 'british-raj-1880',   label: { cn: '英属印度', en: 'British Raj' },             sourceName: 'British Raj', color: '#d6b94a', labelAt: [80, 22] },
  ],

  // ─── 500 AD 罗马帝国崩溃 + 拜占庭兴起 ─ 用 world_500 ─
  'late-antiquity-500': [
    { id: 'eastern-rome',     label: { cn: '东罗马（拜占庭）', en: 'Eastern Roman (Byzantine)' }, sourceName: 'Eastern Roman Empire',  color: '#5fa8a0', focal: true, labelAt: [29, 39] },
    { id: 'sasanian',         label: { cn: '萨珊波斯', en: 'Sasanian Persia' },                  sourceName: 'Sasanian Empire',         color: '#a07cb8', labelAt: [50, 33] },
    { id: 'franks',           label: { cn: '法兰克王国', en: 'Frankish Kingdom' },               sourceName: 'Franks',                  color: '#7a8aa8', labelAt: [3, 47] },
    { id: 'visigoths',        label: { cn: '西哥特王国', en: 'Visigothic Kingdom' },             sourceName: 'Visigoths',               color: '#c08560', labelAt: [-3.7, 41] },
    { id: 'ostrogoths',       label: { cn: '东哥特王国', en: 'Ostrogothic Kingdom' },            sourceName: 'Ostrogoths',              color: '#9b3030', labelAt: [12, 42] },
    { id: 'gupta-500',        label: { cn: '笈多帝国', en: 'Gupta Empire' },                    sourceName: 'Gupta Empire',            color: '#d4af37', labelAt: [78, 22] },
    { id: 'jin-500',          label: { cn: '晋朝（中国）', en: 'Jin China' },                    sourceName: 'Jin Empire',              color: '#d97149', labelAt: [110, 35] },
    { id: 'western-rome-fall', label: { cn: '西罗马残部', en: 'Western Roman remnants' },         sourceName: 'Western Roman Empire',   color: '#7d4e96', labelAt: [10, 47] },
  ],

  // ─── 750 AD 伊斯兰帝国鼎盛（倭马亚）─ 用 world_700 ─
  'islamic-rise-750': [
    { id: 'umayyad',          label: { cn: '倭马亚哈里发国', en: 'Umayyad Caliphate' },           sourceName: 'Umayyad Caliphate',       color: '#3da57a', focal: true, labelAt: [42, 30] },
    { id: 'byzantine-700',    label: { cn: '拜占庭（衰落中）', en: 'Byzantine (declining)' },     sourceName: 'Eastern Roman Empire',    color: '#5fa8a0', labelAt: [29, 39] },
    { id: 'frankish-700',     label: { cn: '法兰克王国', en: 'Frankish Kingdom' },               sourceName: 'Frankish Kingdom',        color: '#7a8aa8', labelAt: [3, 47] },
    { id: 'sui-700',          label: { cn: '隋朝（统一）', en: 'Sui China (reunified)' },         sourceName: 'Sui Empire',              color: '#d97149', labelAt: [110, 35] },
    { id: 'tibetan-700',      label: { cn: '吐蕃帝国', en: 'Tibetan Empire (Tufan)' },           sourceName: 'Tufan Empire',            color: '#8a6f9c', labelAt: [88, 32] },
    { id: 'visigothic-700',   label: { cn: '西哥特（即将被穆斯林灭）', en: 'Visigoths (soon to fall to Muslims)' }, sourceName: 'Visigothic Kingdom', color: '#c08560', labelAt: [-3.7, 41] },
    { id: 'ghana-700',        label: { cn: '加纳帝国', en: 'Empire of Ghana' },                  sourceName: 'Empire of Ghana',         color: '#c69954', labelAt: [-5, 13] },
  ],

  // ─── 1200 中世纪日本（镰仓即将立幕府）─ 用 world_1200 ─
  // 注：world_1200 用 'Imperial Japan (Fujiwara)' 名，但 1185 镰仓幕府已建
  'medieval-japan-1200': [
    { id: 'kamakura-japan',   label: { cn: '镰仓日本（武士时代）', en: 'Kamakura Japan (samurai era)' }, sourceName: 'Imperial Japan (Fujiwara)', color: '#b87a8e', focal: true, labelAt: [138, 36] },
    { id: 'song-1200',        label: { cn: '南宋', en: 'Southern Song' },                       sourceName: 'Song Empire',             color: '#d97149', labelAt: [115, 30] },
    { id: 'goryeo-1200',      label: { cn: '高丽（蒙古即将入侵）', en: 'Goryeo (Mongol invasion looming)' }, sourceName: undefined, iso: ['KOR','PRK'], color: '#a8a878', labelAt: [128, 38] },
    { id: 'mongol-near-japan', label: { cn: '蒙古帝国（30 年后两次伐日）', en: 'Mongol Empire (will invade Japan twice in 30 yrs)' }, sourceName: 'Mongol Empire', color: '#7d6e8a', labelAt: [105, 47] },
  ],

  // ─── 1789 法国大革命爆发 ─ 用 world_1800 ─
  'french-revolution-1789': [
    { id: 'france-revolution', label: { cn: '法兰西（革命中）', en: 'France (revolutionary)' }, sourceName: 'France', color: '#9b3030', focal: true, labelAt: [2.5, 47] },
    { id: 'austria-1800',      label: { cn: '奥地利帝国（反法联盟核心）', en: 'Austria (anti-French coalition)' }, sourceName: 'Austrian Empire', color: '#b87a8e', labelAt: [16, 47] },
    { id: 'prussia-1800',      label: { cn: '普鲁士', en: 'Prussia' }, sourceName: 'Prussia', color: '#9a7e5a', labelAt: [13, 53] },
    { id: 'russia-1800',       label: { cn: '俄罗斯帝国', en: 'Russian Empire' }, sourceName: 'Russian Empire', color: '#a878b8', labelAt: [40, 60] },
    { id: 'spain-1800',        label: { cn: '西班牙', en: 'Spain' }, sourceName: 'Spain', color: '#d6b94a', labelAt: [-3.7, 40] },
    { id: 'uk-1800',           label: { cn: '英国（革命战争主对手）', en: 'UK (main wartime adversary)' }, sourceName: undefined, iso: ['GBR'], color: '#d97149', labelAt: [-2, 53] },
    { id: 'ottoman-1800',      label: { cn: '奥斯曼帝国', en: 'Ottoman Empire' }, sourceName: 'Ottoman Empire', color: '#3da57a', labelAt: [33, 39] },
    { id: 'usa-1800',          label: { cn: '美国（革命启发源）', en: 'USA (inspiration source)' }, sourceName: undefined, iso: ['USA'], color: '#7a8aa8', labelAt: [-95, 38] },
  ],

  // ─── 250 BC 阿育王孔雀帝国（佛教扩散）─ 用 world_bc200 ─
  'maurya-bc250': [
    { id: 'maurya',           label: { cn: '孔雀帝国（阿育王）', en: 'Mauryan Empire (Ashoka)' }, sourceName: 'Mauryan Empire',  color: '#d4af37', focal: true, labelAt: [78, 22] },
    { id: 'seleucid',         label: { cn: '塞琉古帝国', en: 'Seleucid Empire' },           sourceName: 'Seleucid Kingdom',         color: '#a07cb8', labelAt: [50, 33] },
    { id: 'ptolemaic',        label: { cn: '托勒密埃及', en: 'Ptolemaic Egypt' },           sourceName: 'Ptolemaic Kingdom',        color: '#d6b94a', labelAt: [30, 27] },
    { id: 'macedon-hellenic', label: { cn: '马其顿+希腊化联盟', en: 'Macedon + Hellenic League' }, sourceName: 'Macedon and Hellenic League', color: '#5fa8a0', labelAt: [22, 40] },
    { id: 'rome-bc200',       label: { cn: '罗马共和国（崛起中）', en: 'Roman Republic (rising)' }, sourceName: undefined, iso: ['ITA'], color: '#9b3030', labelAt: [12, 42] },
    { id: 'han-bc200',        label: { cn: '汉帝国（前期）', en: 'Han Empire (early)' },     sourceName: 'Han Empire',                color: '#d97149', labelAt: [110, 35] },
  ],

  // ─── 1750 启蒙运动鼎盛 ─ 用 world_1715 ─
  'enlightenment-1750': [
    { id: 'france-1715',      label: { cn: '法兰西（伏尔泰 / 卢梭）', en: 'France (Voltaire/Rousseau)' }, sourceName: 'France', color: '#7a8aa8', focal: true, labelAt: [2.5, 47] },
    { id: 'britain-1715',     label: { cn: '英国（牛顿 / 洛克遗产）', en: 'Britain (Newton/Locke heritage)' }, sourceName: 'United Kingdom', color: '#d97149', labelAt: [-2, 53] },
    { id: 'hre-1715',         label: { cn: '神圣罗马帝国（康德 / 莱布尼茨）', en: 'HRE (Kant/Leibniz)' }, sourceName: 'Holy Roman Empire', color: '#a07cb8', labelAt: [11, 50] },
    { id: 'prussia-1715',     label: { cn: '普鲁士（腓特烈大帝开明专制）', en: 'Prussia (Frederick II enlightened)' }, sourceName: 'Prussia', color: '#9a7e5a', labelAt: [13, 53] },
    { id: 'russia-1715',      label: { cn: '俄罗斯（彼得大帝改革）', en: 'Russia (Peter the Great reforms)' }, sourceName: undefined, iso: ['RUS'], color: '#b87a8e', labelAt: [40, 55] },
    { id: 'austria-1715',     label: { cn: '奥地利帝国', en: 'Austrian Empire' },           sourceName: 'Austrian Empire', color: '#c69954', labelAt: [16, 47] },
    { id: 'spain-1715',       label: { cn: '西班牙', en: 'Spain' },                         sourceName: 'Spain', color: '#d6b94a', labelAt: [-3.7, 40] },
    { id: 'dutch-1715',       label: { cn: '荷兰共和国（出版自由）', en: 'Dutch Republic (free press)' }, sourceName: 'Dutch Republic', color: '#5fa8a0', labelAt: [5.5, 52] },
    { id: 'qing-1715',        label: { cn: '大清（康乾盛世）', en: 'Qing (High Era)' },     sourceName: 'Manchu Empire', color: '#c9a978', labelAt: [110, 36] },
    { id: 'ottoman-1715',     label: { cn: '奥斯曼（衰落初期）', en: 'Ottoman (early decline)' }, sourceName: 'Ottoman Empire', color: '#3da57a', labelAt: [33, 39] },
  ],

  // ─── 1939 二战爆发前夕 ─ 用 world_1938 ─
  'wwii-1939': [
    { id: 'nazi-germany',     label: { cn: '纳粹德国', en: 'Nazi Germany' },                sourceName: 'Germany',                  color: '#5a3a3a', focal: true, labelAt: [10.5, 51] },
    { id: 'fascist-italy',    label: { cn: '法西斯意大利', en: 'Fascist Italy' },           sourceName: 'Italy',                    color: '#7a4a4a', labelAt: [12.5, 42] },
    { id: 'imperial-japan',   label: { cn: '日本帝国（侵华）', en: 'Imperial Japan (invading China)' }, sourceName: 'Empire of Japan', color: '#9a4a4a', labelAt: [138, 36] },
    { id: 'ussr-1938',        label: { cn: '苏联', en: 'USSR' },                            sourceName: 'USSR',                     color: '#9a7e5a', labelAt: [60, 60] },
    { id: 'uk-1938',          label: { cn: '英国（绥靖政策）', en: 'UK (appeasement)' },    sourceName: 'United Kingdom',           color: '#d97149', labelAt: [-2, 53] },
    { id: 'france-1938',      label: { cn: '法兰西第三共和国', en: 'French Third Republic' }, sourceName: 'France',                  color: '#7a8aa8', labelAt: [2.5, 47] },
    { id: 'usa-1938',         label: { cn: '美国（孤立主义）', en: 'USA (isolationist)' },  sourceName: undefined, iso: ['USA'],    color: '#3a5a8a', labelAt: [-95, 38] },
    { id: 'china-1938',       label: { cn: '中华民国（抗战中）', en: 'Republic of China (resisting Japan)' }, sourceName: undefined, iso: ['CHN'], color: '#c9a978', labelAt: [110, 36] },
    { id: 'spain-1938',       label: { cn: '西班牙（内战中）', en: 'Spain (civil war)' },   sourceName: 'Spain',                    color: '#c08560', labelAt: [-3.7, 40] },
    { id: 'ethiopia-1938',    label: { cn: '埃塞俄比亚（被意吞）', en: 'Ethiopia (Italy)' }, sourceName: 'Ethiopia (Italy)',         color: '#7a4a4a', labelAt: [40, 9] },
  ],

  // ─── 2500 BC 古埃及古王国 + 美索不达米亚 + 印度河文明 ─ 用 world_bc2000 ─
  'ancient-civs-bc2500': [
    { id: 'egypt-bc2500',     label: { cn: '古埃及（古王国）', en: 'Old Kingdom Egypt' }, sourceName: 'Egypt',                       color: '#d4af37', focal: true, labelAt: [30, 26] },
    { id: 'sumer-bc2500',     label: { cn: '苏美尔城邦 (Ur)', en: 'Sumerian City-States (Ur)' }, sourceName: ['Ur','city-states'],   color: '#c9a978', labelAt: [46, 31] },
    { id: 'elam-bc2500',      label: { cn: '埃兰', en: 'Elam' },                          sourceName: 'Elam',                       color: '#a07cb8', labelAt: [50, 30] },
    { id: 'indus-bc2500',     label: { cn: '印度河文明（哈拉帕）', en: 'Indus Valley (Harappan)' }, sourceName: 'Indus valley civilization', color: '#79a373', labelAt: [70, 28] },
    { id: 'xia-bc2500',       label: { cn: '夏（华夏萌芽）', en: 'Xia (Chinese)' },        sourceName: 'Xia',                        color: '#d97149', labelAt: [110, 35] },
    { id: 'minoan-bc2500',    label: { cn: '米诺斯（克里特）', en: 'Minoan (Crete)' },     sourceName: 'Minoan',                     color: '#5fa8a0', labelAt: [25, 36] },
    { id: 'kerma-bc2500',     label: { cn: '克尔马（努比亚）', en: 'Kerma (Nubia)' },      sourceName: 'Kerma',                      color: '#b8956a', labelAt: [32, 19] },
    { id: 'canaan-bc2500',    label: { cn: '迦南', en: 'Canaan' },                        sourceName: 'Canaan',                     color: '#c69954', labelAt: [36, 32] },
  ],

  // ─── 1492 大航海时代起点（哥伦布航行年）─ 用 world_1492 ─
  'age-of-exploration-1492': [
    { id: 'castile-1492',     label: { cn: '卡斯蒂利亚（哥伦布资助方）', en: 'Castile (Columbus\'s patron)' }, sourceName: 'Castille', color: '#d6b94a', focal: true, labelAt: [-3.7, 41] },
    { id: 'portugal-1492',    label: { cn: '葡萄牙（先行者）', en: 'Portugal (pioneer)' }, sourceName: 'Portugal',                   color: '#c69954', labelAt: [-8, 39.5] },
    { id: 'aragon-1492',      label: { cn: '阿拉贡', en: 'Aragon' },                      sourceName: 'Aragón',                     color: '#c08560', labelAt: [-1, 42] },
    { id: 'england-1492',     label: { cn: '英格兰', en: 'England' },                     sourceName: 'England',                    color: '#d97149', labelAt: [-2, 53] },
    { id: 'france-1492',      label: { cn: '法兰西', en: 'France' },                      sourceName: 'France',                     color: '#7a8aa8', labelAt: [2.5, 47] },
    { id: 'hre-1492',         label: { cn: '神圣罗马帝国', en: 'Holy Roman Empire' },     sourceName: 'Holy Roman Empire',          color: '#a07cb8', labelAt: [11, 50] },
    { id: 'ottoman-1492',     label: { cn: '奥斯曼帝国', en: 'Ottoman Empire' },          sourceName: 'Ottoman Empire',             color: '#3da57a', labelAt: [33, 39] },
    { id: 'mamluk-1492',      label: { cn: '马穆鲁克', en: 'Mamluk Sultanate' },          sourceName: 'Mamluke Sultanate',          color: '#b8956a', labelAt: [32, 28] },
    { id: 'ming-1492',        label: { cn: '明朝（郑和西洋已 60 年）', en: 'Ming (Zheng He\'s voyages were 60 yrs ago)' }, sourceName: 'Ming Empire', color: '#d97149', labelAt: [110, 36] },
    { id: 'moscow-1492',      label: { cn: '莫斯科大公国', en: 'Grand Duchy of Moscow' }, sourceName: 'Grand Duchy of Moscow',      color: '#9a7e5a', labelAt: [37, 55] },
    { id: 'venice-1492',      label: { cn: '威尼斯', en: 'Venice' },                      sourceName: 'Venice',                     color: '#79a373', labelAt: [12.3, 45] },
    { id: 'inca-1492',        label: { cn: '印加（克丘亚）', en: 'Inca / Quechua' },       sourceName: 'Quechua',                    color: '#5fa8a0', labelAt: [-72, -10] },
    { id: 'aztec-1492',       label: { cn: '阿兹特克（三邦同盟）', en: 'Aztec (Triple Alliance)' }, sourceName: 'Mexihcah (Triple Alliance)', color: '#c08560', labelAt: [-99, 19] },
  ],

  // ─── 1914 第一次世界大战前夕 ─ 用 world_1914 ─
  'great-war-1914': [
    { id: 'german-empire',    label: { cn: '德意志帝国', en: 'German Empire' },           sourceName: 'German Empire',              color: '#a07cb8', focal: true, labelAt: [10.5, 51] },
    { id: 'austria-hungary',  label: { cn: '奥匈帝国', en: 'Austro-Hungarian Empire' },   sourceName: 'Austro-Hungarian Empire',    color: '#b87a8e', labelAt: [16, 47] },
    { id: 'russia-1914',      label: { cn: '俄罗斯帝国', en: 'Russian Empire' },          sourceName: 'Russian Empire',             color: '#9a7e5a', labelAt: [60, 60] },
    { id: 'france-1914',      label: { cn: '法兰西第三共和国', en: 'French Third Republic' }, sourceName: 'France',                  color: '#7a8aa8', labelAt: [2.5, 47] },
    { id: 'uk-1914',          label: { cn: '大英帝国', en: 'British Empire' },            sourceName: 'United Kingdom of Great Britain and Ireland', color: '#d97149', labelAt: [-2, 53] },
    { id: 'ottoman-1914',     label: { cn: '奥斯曼帝国（晚期）', en: 'Ottoman Empire (late)' }, sourceName: 'Ottoman Empire',         color: '#3da57a', labelAt: [33, 39] },
    { id: 'italy-1914',       label: { cn: '意大利王国', en: 'Kingdom of Italy' },         sourceName: 'Kingfom of Italy',           color: '#79a373', labelAt: [12.5, 42] },
    { id: 'serbia-1914',      label: { cn: '塞尔维亚（导火索）', en: 'Serbia (spark)' },   sourceName: 'Serbia',                     color: '#9b3030', labelAt: [21, 44] },
    { id: 'belgium-1914',     label: { cn: '比利时（被入侵）', en: 'Belgium (invaded)' },  sourceName: 'Belgium',                    color: '#c69954', labelAt: [4.5, 50.5] },
    { id: 'usa-1914',         label: { cn: '美国（中立 1917 参战）', en: 'USA (neutral until 1917)' }, sourceName: 'United States',  color: '#d97149', labelAt: [-95, 38] },
    { id: 'japan-1914',       label: { cn: '日本帝国（亚洲新强）', en: 'Empire of Japan' }, sourceName: 'Empire of Japan',            color: '#b87a8e', labelAt: [138, 36] },
    { id: 'china-1914',       label: { cn: '中华民国（刚立国）', en: 'Republic of China (newly founded)' }, sourceName: 'Manchu Empire', color: '#c9a978', labelAt: [110, 36] },
    { id: 'persia-1914',      label: { cn: '波斯（衰落）', en: 'Persia (declining)' },     sourceName: 'Persia',                     color: '#a878b8', labelAt: [55, 33] },
    { id: 'bulgaria-1914',    label: { cn: '保加利亚', en: 'Bulgaria' },                   sourceName: 'Bulgaria',                   color: '#5fa8a0', labelAt: [25, 42] },
  ],

  // ─── 100 AD 汉帝国（与罗马同时代）─ 用 world_100 ─
  // 注意：与 'eurasia-117ad' 共享 world_100，但聚焦中国
  'east-asia-100ad': [
    { id: 'han-100',           label: { cn: '东汉帝国', en: 'Han Empire' },              sourceName: 'Han', color: '#d97149', focal: true, labelAt: [110, 34] },
    { id: 'kushan-han-era',    label: { cn: '贵霜帝国', en: 'Kushan Empire' },           sourceName: 'Kushan Empire', color: '#d4af37', labelAt: [70, 32] },
    { id: 'parthia-han-era',   label: { cn: '帕提亚帝国', en: 'Parthian Empire' },       sourceName: 'Parthian Empire', color: '#a07cb8', labelAt: [50, 33] },
    { id: 'rome-han-era',      label: { cn: '罗马帝国（同期）', en: 'Roman Empire (contemporary)' }, sourceName: 'Roman Empire', color: '#9b3030', labelAt: [12, 43] },
    { id: 'satavahanihara-han', label: { cn: '南印度王国', en: 'Satavahanihara' },       sourceName: 'Satavahanihara', color: '#c69954', labelAt: [78, 18] },
  ],

  // ─── 117 AD 古代欧亚（罗马 / 汉 / 帕提亚 / 贵霜）─ 用 world_100 ─
  'eurasia-117ad': [
    { id: 'rome-117',     label: { cn: '罗马帝国', en: 'Roman Empire' },          sourceName: 'Roman Empire',    color: '#9b3030', focal: true, labelAt: [12, 43] },
    { id: 'parthia-117',  label: { cn: '帕提亚帝国', en: 'Parthian Empire' },      sourceName: 'Parthian Empire', color: '#a07cb8', labelAt: [50, 33] },
    { id: 'kushan-117',   label: { cn: '贵霜帝国', en: 'Kushan Empire' },          sourceName: 'Kushan Empire',   color: '#d4af37', labelAt: [70, 32] },
    { id: 'han-117',      label: { cn: '汉帝国', en: 'Han Empire' },               sourceName: 'Han',             color: '#d97149', labelAt: [110, 34] },
    { id: 'satavahanihara', label: { cn: '南印度王国', en: 'Satavahanihara' },     sourceName: 'Satavahanihara',  color: '#c69954', labelAt: [78, 18] },
  ],

  // ─── 1865 美国南北战争 ─ 自定义联邦/邦联/边境州分界 ─
  // 视觉策略：先 Union 大块（自由州 + 西部领地，蓝），后 Border States（KY/MO/MD，金），
  // 最后 Confederacy（11 邦联州，红 — 上层覆盖）
  'north-america-1865': [
    // ── 1. Union 自由州（含新英格兰 + 中西部 + 西部领地）──
    {
      id: 'union',
      label: { cn: '联邦（自由州 + 西部领地）', en: 'Union (Free States + Territories)' },
      color: '#3a5a8a', focal: true,
      labelAt: [-105, 44],
      // 顺时针沿美国大陆北缘 + 海岸 + 自由州 / 蓄奴州分界（俄亥俄河 + Mason-Dixon + KS-MO 西界）
      customPolygon: [
        // 北缘 — 加拿大 / 美国国境 49°N
        [-124.7, 48.4], [-123, 49], [-95, 49], [-89.5, 48.0], [-84.7, 46.5],
        [-83.0, 45.8], [-82.5, 41.7],   // 五大湖南岸（OH/MI 北缘）
        [-79.0, 42.5], [-76.5, 43.6], [-74.5, 45.0],
        [-71.5, 45.0], [-69.0, 47.4], [-67.0, 47.4], [-67.0, 44.5],
        // 东海岸南下到 NY/NJ
        [-70.0, 41.7], [-71.5, 41.0], [-73.7, 40.6], [-74.5, 39.5], [-75.0, 39.0],
        // PA / MD 边界（Mason-Dixon Line ≈ 39.72°N，沿其延伸到 OH 河）
        [-75.7, 39.72], [-77.7, 39.72], [-80.5, 39.72],
        // 沿俄亥俄河（OH 在北 / KY 在南）
        [-82.5, 38.6], [-84.5, 38.9], [-86.5, 38.0], [-88.0, 37.9], [-89.5, 37.0],
        // 进入伊利诺伊南部（IL 是自由州）—— 但与 KY 接壤
        [-89.5, 39.5], [-90.2, 40.4],
        // MO-IA 北界（IA 自由）— 把 MO 留给 border states
        [-95.8, 40.6],
        // 跳过 MO/KS — 沿 KS-NE 西界往南到 1865 时未划州的"未组织领地"
        [-95.8, 36.5],   // KS 南界 ≈ MO-OK 边界
        [-103.0, 36.5],  // 一直西到落基山 NM-CO 边界
        [-104.0, 32.0],  // 西部领地南端（NM 当时领地）
        [-109.0, 32.0],  // AZ 领地南
        [-114.8, 32.5],  // CA-AZ-墨西哥
        [-117.1, 32.5],  // CA-墨西哥
        [-117.3, 33.7],  // 加州海岸（Irvine 附近！）
        [-118.5, 34.0],  // 洛杉矶
        [-120.5, 34.5],  // 加州中海岸
        [-122.0, 36.5],  // 旧金山
        [-122.7, 38.3],  // CA 北
        [-124.0, 40.5],  // CA-OR
        [-124.5, 46.0],  // OR-WA
        [-124.7, 48.4],  // WA 北端
      ],
    },
    // ── 2. Border States — 蓄奴但留在联邦的州（密苏里 / 肯塔基 / 马里兰）──
    {
      id: 'border-mo',
      label: { cn: '密苏里（边境州）', en: 'Missouri (Border)' },
      color: '#c9a978',
      labelAt: [-92.5, 38.5],
      // 密苏里州大致轮廓
      customPolygon: [
        [-95.8, 40.6], [-91.4, 40.6], [-91.4, 39.6], [-90.2, 39.0],
        [-90.0, 37.0], [-89.5, 36.5], [-89.5, 36.0], [-90.3, 35.8],
        [-94.6, 36.5], [-94.6, 40.4], [-95.8, 40.6],
      ],
    },
    {
      id: 'border-ky',
      label: { cn: '肯塔基（边境州）', en: 'Kentucky (Border)' },
      color: '#c9a978',
      labelAt: [-85.5, 37.5],
      // 肯塔基轮廓 — 北界 OH 河，南界 36.5°N，西界 MS 河
      customPolygon: [
        [-89.5, 37.0], [-88.0, 37.9], [-86.5, 38.0], [-84.5, 38.9],
        [-82.5, 38.6], [-81.9, 38.0], [-82.0, 37.0], [-82.6, 36.6],
        [-84.0, 36.5], [-87.5, 36.5], [-89.5, 36.5], [-89.5, 37.0],
      ],
    },
    {
      id: 'border-md',
      label: { cn: '马里兰 / 特拉华', en: 'Maryland / Delaware' },
      color: '#c9a978',
      labelAt: [-77.0, 38.7],
      // 马里兰 + 特拉华
      customPolygon: [
        [-79.5, 39.72], [-77.5, 39.72], [-75.7, 39.72], [-75.4, 39.5],
        [-75.0, 38.5], [-75.0, 38.0], [-75.7, 37.9], [-76.0, 38.0],
        [-77.0, 38.3], [-77.3, 38.7], [-77.5, 39.3], [-79.0, 39.5],
        [-79.5, 39.72],
      ],
    },
    // ── 3. Confederacy — 11 个脱离州（最后画，覆盖 Union 蓝色）──
    {
      id: 'confederacy',
      label: { cn: '邦联（11 个蓄奴州）', en: 'Confederate States (11)' },
      color: '#9b3030',
      labelAt: [-87, 33],
      customPolygon: [
        // 起：得克萨斯 El Paso → 顺时针
        [-106.6, 31.8],  // El Paso
        [-103.0, 32.0],  // TX-NM
        [-103.0, 36.5],  // TX panhandle NW
        [-100.0, 36.5],  // TX panhandle NE
        [-100.0, 33.7],  // TX-OK
        [-94.6, 33.7],   // TX-AR-LA
        [-94.6, 36.5],   // AR-MO
        [-89.7, 36.5],   // TN-AR-KY 边界（MS 河附近）
        [-82.0, 36.5],   // TN-NC-VA-KY (unchanged)
        [-81.5, 37.5],   // VA-WV southern boundary (cut WV out — admitted Union 1863)
        [-80.5, 38.5],   // VA-WV mid
        [-79.0, 39.5],   // VA-MD-PA triangle (unchanged)
        [-77.5, 38.7],   // 跨 Potomac → VA
        [-76.4, 38.0],   // VA E. Shore
        [-75.7, 37.5],   // VA E. Shore tip
        [-75.5, 36.5],   // NC OBX 北
        [-76.0, 35.5],   // NC OBX
        [-77.5, 34.5],   // NC coast
        [-79.0, 33.5],   // SC coast
        [-80.5, 32.0],   // SC-GA
        [-81.5, 30.7],   // GA-FL
        [-80.5, 27.5],   // FL east coast
        [-80.0, 25.5],   // FL Keys
        [-82.0, 26.5],   // FL west coast
        [-83.5, 29.5],   // FL big bend
        [-85.0, 30.0],   // FL panhandle
        [-87.5, 30.3],   // AL Gulf
        [-89.0, 30.2],   // MS Gulf
        [-89.5, 29.0],   // 密西西比河口
        [-91.5, 29.5],   // LA Gulf
        [-93.5, 29.7],   // LA-TX
        [-94.7, 29.5],   // TX coast
        [-97.0, 27.5],   // TX coast
        [-99.0, 26.5],   // TX Rio Grande mouth
        [-103.0, 28.5],  // TX Big Bend
        [-106.6, 31.8],  // 回 El Paso
      ],
    },
    // ── 4. 加拿大 / 墨西哥 ──
    { id: 'canada-1865', label: { cn: '加拿大（英属自治领即将成立）', en: 'Canada (British)' },
      sourceName: 'Canada', color: '#7a8aa8', labelAt: [-95, 56] },
    { id: 'mexico-1865', label: { cn: '墨西哥（华雷斯共和国）', en: 'Mexico (Juárez Republic)' },
      sourceName: 'Mexico', color: '#d6b94a', labelAt: [-104, 24] },
  ],

  // ─── 现代北美（modernPolities 用 — 切换到 modern mode）──
  // 用现代国家 ISO 简化呈现
  'north-america-modern': [
    { id: 'usa-modern', label: { cn: '美国', en: 'United States' }, iso: ['USA'], color: '#3a5a8a', focal: true, labelAt: [-98, 39] },
    { id: 'mexico-modern', label: { cn: '墨西哥', en: 'Mexico' }, iso: ['MEX'], color: '#d6b94a', labelAt: [-102, 24] },
    { id: 'canada-modern', label: { cn: '加拿大', en: 'Canada' }, iso: ['CAN'], color: '#7a8aa8', labelAt: [-100, 58] },
    { id: 'cuba-modern', label: { cn: '古巴', en: 'Cuba' }, iso: ['CUB'], color: '#c9a978', labelAt: [-78.5, 21.7] },
  ],

  // ─── 1776 北美（美国独立战争年代）─ 用 historical-basemaps 1783 快照 ─
  'north-america-1776': [
    { id: 'usa-1783',         label: { cn: '美利坚合众国', en: 'United States of America' }, sourceName: 'United States of America', color: '#d97149', focal: true, labelAt: [-78, 38] },
    { id: 'british-quebec',   label: { cn: '英属魁北克', en: 'British Quebec' },              sourceName: 'Quebec',                  color: '#7a8aa8', labelAt: [-72, 50] },
    { id: 'ruperts-land',     label: { cn: '罗珀特地（哈德逊湾公司）', en: "Rupert's Land" },  sourceName: "Rupert's Land",            color: '#a07cb8', labelAt: [-95, 55] },
    { id: 'new-spain',        label: { cn: '新西班牙总督区', en: 'Vice-Royalty of New Spain' }, sourceName: 'Vice-Royalty of New Spain', color: '#d6b94a', labelAt: [-102, 22] },
    { id: 'spanish-louisiana', label: { cn: '西属路易斯安那', en: 'Spanish Louisiana' },        sourceName: 'Luisiana',                color: '#c9a978', labelAt: [-95, 38] },
    { id: 'uk-1783',          label: { cn: '大不列颠王国', en: 'United Kingdom' },              sourceName: 'United Kingdom',          color: '#9b2c2c', labelAt: [-2, 53] },
  ],

  // ─── 1347 欧亚（黑死病爆发年代）─ 用 historical-basemaps 1300 年快照 ─
  // 注：1300 是最近的可用年份，距 1347 约 47 年（蒙古汗国格局已基本如此）
  'eurasia-1347': [
    { id: 'great-khanate',  label: { cn: '大元（大蒙古国）', en: 'Yuan / Great Khanate' }, sourceName: 'Great Khanate',          color: C.yuanGray, focal: true, labelAt: [105, 38] },
    { id: 'goldenhorde',    label: { cn: '金帐汗国', en: 'Golden Horde' },                sourceName: 'Khanate of the Golden Horde', color: C.goldenHordeOrchid, labelAt: [50, 50] },
    { id: 'ilkhanate',      label: { cn: '伊尔汗国', en: 'Ilkhanate' },                   sourceName: 'Ilkhanate',                  color: '#a878b8', labelAt: [55, 35] },
    { id: 'chagatai',       label: { cn: '察合台汗国', en: 'Chagatai Khanate' },          sourceName: 'Chagatai Khanate',           color: '#9a7ea0', labelAt: [72, 42] },
    { id: 'mamluk',         label: { cn: '马穆鲁克苏丹国', en: 'Mamluk Sultanate' },       sourceName: 'Mamluke Sultanate',          color: C.mamlukOcher, labelAt: [32, 28] },
    { id: 'hafsid',         label: { cn: '哈夫斯哈里发国', en: 'Hafsid Caliphate' },       sourceName: 'Hafsid Caliphate',           color: '#c9a978', labelAt: [10, 33] },
    { id: 'seljuk-late',    label: { cn: '塞尔柱苏丹国', en: 'Seljuk Caliphate' },         sourceName: 'Seljuk Caliphate',           color: '#c08560', labelAt: [35, 39] },
    { id: 'byzantine-late', label: { cn: '拜占庭（衰落）', en: 'Byzantium (declining)' },   sourceName: 'Byzantine Empire',           color: C.byzantineTeal, labelAt: [25, 40] },
    { id: 'trebizond',      label: { cn: '特拉布宗', en: 'Trebizond' },                   sourceName: 'Trebizond',                  color: '#5fa8a0' },
    { id: 'england-1300',   label: { cn: '英格兰', en: 'English territory' },             sourceName: 'English territory',          color: C.englandOrange, labelAt: [-2, 53] },
    { id: 'scotland-1300',  label: { cn: '苏格兰', en: 'Scotland' },                     sourceName: 'Scotland',                   color: '#9a7e5a', labelAt: [-4, 57] },
    { id: 'france-1300',    label: { cn: '法兰西', en: 'France' },                       sourceName: 'France',                     color: C.franceBlue, labelAt: [2.5, 47] },
    { id: 'hre-1300',       label: { cn: '神圣罗马帝国', en: 'Holy Roman Empire' },        sourceName: 'Holy Roman Empire',          color: C.hreLavender, labelAt: [11, 50] },
    { id: 'castile-1300',   label: { cn: '卡斯蒂利亚', en: 'Castile' },                   sourceName: 'Castile',                    color: C.iberianGold, labelAt: [-3.7, 41] },
    { id: 'granada-1300',   label: { cn: '格拉纳达', en: 'Granada' },                     sourceName: 'Granada',                    color: '#3da57a', labelAt: [-3.7, 37] },
    { id: 'portugal-1300',  label: { cn: '葡萄牙', en: 'Portugal' },                     sourceName: 'Portugal',                   color: '#c69954', labelAt: [-8, 39.5] },
    { id: 'navarre-1300',   label: { cn: '纳瓦拉', en: 'Navarre' },                       sourceName: 'Navarre',                    color: '#b87a8e' },
    { id: 'hungary-1300',   label: { cn: '匈牙利', en: 'Hungary' },                       sourceName: 'Hungary',                    color: C.hungaryAmber, labelAt: [20, 47] },
    { id: 'poland-1300',    label: { cn: '波兰', en: 'Poland' },                          sourceName: 'Poland',                     color: '#a07cb8', labelAt: [19, 52] },
    { id: 'lithuania-1300', label: { cn: '立陶宛', en: 'Lithuania' },                     sourceName: 'Lithuania',                  color: '#7a8aa8', labelAt: [24, 55] },
    { id: 'teutonic',       label: { cn: '条顿骑士团国', en: 'Teutonic Knights' },         sourceName: 'Teutonic Knights',           color: '#5a4a3a' },
    { id: 'novgorod-1300',  label: { cn: '诺夫哥罗德', en: 'Novgorod' },                  sourceName: 'Novgorod',                   color: C.slavicPink, labelAt: [33, 60] },
    { id: 'sicily-1300',    label: { cn: '西西里', en: 'Sicily' },                       sourceName: 'Sicily',                     color: '#79a373' },
    { id: 'papal-1300',     label: { cn: '教皇国', en: 'Papal States' },                  sourceName: 'Papal States',               color: C.italianGreen, labelAt: [12.5, 43] },
    { id: 'venice-1300',    label: { cn: '威尼斯', en: 'Venice' },                       sourceName: 'Venice',                     color: '#a07cb8' },
    { id: 'norway-1300',    label: { cn: '挪威', en: 'Norway' },                         sourceName: 'Norway',                     color: C.scandinaviaBronze, labelAt: [10, 62] },
    { id: 'japan-1300',     label: { cn: '镰仓日本', en: 'Shogun Japan (Kamakura)' },     sourceName: 'Shogun Japan (Kamakura)',    color: C.japanRose },
    { id: 'tibet-1300',     label: { cn: '吐蕃', en: 'Tibet' },                          sourceName: 'Tibet',                      color: '#8a6f9c' },
  ],

  // ─── 1491 北美原住民（HSS-5.1）─ 用 world_1492 快照（哥伦布登陆前夜）─
  // historical-basemaps 1492 含 1000+ 北美部族 NAME；这里挑五大区域代表
  'native-americans-1491': [
    { id: 'haudenosaunee', label: { cn: '易洛魁联盟', en: 'Iroquois Confederacy' },
      sourceName: 'Ho-de-no-sau-nee-ga (Haudenosaunee)', color: '#7a8aa8', focal: true, labelAt: [-76, 43] },
    { id: 'powhatan-1491', label: { cn: '波瓦坦联盟', en: 'Powhatan' },
      sourceName: 'Powhatan', color: '#9a7e5a', labelAt: [-77, 37.5] },
    { id: 'cherokee-1491', label: { cn: '切罗基', en: 'Cherokee' },
      sourceName: 'Cherokee (Oklahoma)', color: '#c08560', labelAt: [-84, 35] },
    { id: 'pueblos-1491',  label: { cn: '普韦布洛诸族', en: 'Pueblos' },
      sourceName: 'Pueblos', color: '#d6b94a', labelAt: [-107, 35] },
    { id: 'aztec-1491',    label: { cn: '阿兹特克（三联同盟）', en: 'Aztec Triple Alliance' },
      sourceName: 'Mexihcah (Triple Alliance)', color: '#9b3030', labelAt: [-99, 19] },
    { id: 'maya-1491',     label: { cn: '玛雅（尤卡坦）', en: 'Maya (Yucatán)' },
      sourceName: 'Maya Yucateco', color: '#3da57a', labelAt: [-89, 19.5] },
    { id: 'inca-1491',     label: { cn: '印加帝国（南美）', en: 'Inca (South America)' },
      sourceName: 'Quechua', color: '#d97149', labelAt: [-72, -13] },
  ],

  // ─── 1750 13 殖民地（HSS-5.3）─ 用 world_1715 快照 ─
  'thirteen-colonies-1750': [
    { id: 'british-colonies', label: { cn: '英属美洲殖民地', en: 'British American colonies' },
      sourceName: 'British American colonies', color: '#d97149', focal: true, labelAt: [-77, 38] },
    { id: 'new-france-1750',  label: { cn: '新法兰西', en: 'New France' },
      sourceName: 'France', color: '#7a8aa8', labelAt: [-72, 50] },
    { id: 'spain-florida',    label: { cn: '西属佛罗里达', en: 'Spanish Florida' },
      sourceName: 'Florida (Spain)', color: '#d6b94a', labelAt: [-83, 29] },
    { id: 'iroquois-1750',    label: { cn: '易洛魁联盟', en: 'Iroquois Confederacy' },
      sourceName: 'Iroquois', color: '#a07cb8', labelAt: [-76, 43] },
    { id: 'cherokee-1750',    label: { cn: '切罗基', en: 'Cherokee' },
      sourceName: 'Cherokee', color: '#c08560', labelAt: [-84, 35.3] },
    { id: 'spain-1750',       label: { cn: '新西班牙', en: 'New Spain' },
      sourceName: 'Vice-Royalty of New Spain', color: '#c9a978', labelAt: [-100, 23] },
  ],

  // ─── 1803 路易斯安那购买（HSS-5.8 / 8.2）─ 用 world_1800 快照 ─
  'westward-1803': [
    { id: 'usa-1803',         label: { cn: '美利坚合众国（密西西比河以东）', en: 'USA (east of Mississippi)' },
      sourceName: 'United States of America', color: '#d97149', focal: true, labelAt: [-78, 38] },
    { id: 'louisiana-purchase', label: { cn: '路易斯安那购地（1803 收购）', en: 'Louisiana Purchase (1803)' },
      color: '#c9a978', labelAt: [-100, 41],
      // 大致从密西西比河到落基山、墨西哥湾到加拿大
      customPolygon: [
        [-95, 49], [-105, 49], [-114, 49], [-114, 45], [-110, 41], [-107, 37],
        [-104, 32], [-101, 30], [-94, 30], [-91, 30], [-89.5, 36], [-89, 40],
        [-90.5, 43], [-94, 47], [-95, 49],
      ],
    },
    { id: 'spain-mex-1803',   label: { cn: '新西班牙', en: 'Vice-Royalty of New Spain' },
      sourceName: 'Vice-Royalty of New Spain', color: '#d6b94a', labelAt: [-104, 22] },
    { id: 'spain-1803',       label: { cn: '西属佛罗里达 + 西部', en: 'Spanish Florida + West' },
      sourceName: 'Spain', color: '#a8a878', labelAt: [-83, 29] },
    { id: 'british-canada-1803', label: { cn: '英属魁北克（加拿大）', en: 'British Quebec (Canada)' },
      sourceName: 'Quebec', color: '#7a8aa8', labelAt: [-73, 51] },
  ],

  // ─── 1850 美国奴隶制分歧（HSS-8.4）─ 用 customPolygon 标自由州 / 蓄奴州 / 西部领地 ─
  'slavery-divisions-1850': [
    { id: 'free-states-1850', label: { cn: '自由州（北方）', en: 'Free States (North)' },
      color: '#3a5a8a', focal: true, labelAt: [-82, 43],
      // 北方自由州：缅因到密歇根，含俄亥俄/印第安纳/伊利诺/威斯康辛/爱荷华/明尼苏达
      customPolygon: [
        [-95.5, 49], [-90, 48], [-87, 47.5], [-83, 46], [-79, 43.5], [-75, 45], [-70, 45],
        [-67, 47], [-67, 44], [-71, 41.5], [-73.5, 40.5], [-75, 39.7],
        [-80, 39.5], [-83, 39.5], [-87, 39], [-89, 38], [-91, 37], [-95.5, 40], [-95.5, 49],
      ],
    },
    { id: 'slave-states-1850', label: { cn: '蓄奴州（南方）', en: 'Slave States (South)' },
      color: '#9b3030', labelAt: [-86, 33],
      // 南方蓄奴州：弗吉尼亚到德州，含密苏里
      customPolygon: [
        [-95.5, 40], [-91, 37], [-89, 38], [-87, 39], [-83, 39.5], [-80, 39.5], [-75, 39.7],
        [-75.5, 36.5], [-78, 34], [-81, 31], [-85, 30], [-89, 30], [-94, 29], [-99, 26],
        [-103, 28], [-103, 32], [-104, 33], [-101, 36.5], [-95.5, 36.5], [-95.5, 40],
      ],
    },
    { id: 'free-territory-1850', label: { cn: '自由领地（西部）', en: 'Free Territory (West)' },
      color: '#7a9c7a', labelAt: [-115, 42],
      customPolygon: [
        [-104, 49], [-104, 33], [-110, 31], [-117, 32.5], [-124, 38], [-124, 46], [-123, 49], [-104, 49],
      ],
    },
    { id: 'unorganized-1850',   label: { cn: '未划州领地（堪萨斯/内布拉斯加）', en: 'Kansas-Nebraska Territory' },
      color: '#c9a978', labelAt: [-100, 41],
      customPolygon: [
        [-104, 49], [-95.5, 49], [-95.5, 40], [-104, 40], [-104, 49],
      ],
    },
    { id: 'mexico-1850',        label: { cn: '墨西哥', en: 'Mexico' },
      sourceName: 'Vice-Royalty of New Spain', color: '#d6b94a', labelAt: [-104, 22] },
    { id: 'canada-1850',        label: { cn: '英属加拿大', en: 'British Canada' },
      sourceName: 'Canada', color: '#7a8aa8', labelAt: [-95, 56] },
  ],

  // ─── BC 1750 美索不达米亚（HSS-6.1）─ 用 world_bc2000 快照 ─
  'mesopotamia-bc1750': [
    { id: 'old-babylon',  label: { cn: '古巴比伦（汉谟拉比）', en: 'Old Babylon (Hammurabi)' },
      color: '#9b3030', focal: true, labelAt: [44, 32.5],
      // 汉谟拉比统治下的两河下游
      customPolygon: [
        [40, 36], [44, 36], [47, 35], [49, 33], [49, 30], [47, 29.5], [45, 30],
        [42, 31], [40.5, 33], [40, 36],
      ],
    },
    { id: 'sumer-cities', label: { cn: '苏美尔城邦（残存）', en: 'Sumerian city-states (residual)' },
      sourceName: 'Ur', color: '#c69954', labelAt: [46, 31] },
    { id: 'egypt-bc1750', label: { cn: '古埃及（中王国）', en: 'Egypt (Middle Kingdom)' },
      sourceName: 'Egypt', color: '#d6b94a', labelAt: [31, 26] },
    { id: 'hittite-rise', label: { cn: '赫梯（兴起）', en: 'Hittites (rising)' },
      sourceName: 'Hittites', color: '#a07cb8', labelAt: [33, 39] },
    { id: 'elam-bc1750',  label: { cn: '埃兰', en: 'Elam' },
      sourceName: 'Elam', color: '#c08560', labelAt: [49.5, 31] },
    { id: 'indus-bc1750', label: { cn: '印度河文明（哈拉帕）', en: 'Indus Valley (Harappa)' },
      sourceName: 'Indus valley civilization', color: '#3da57a', labelAt: [70, 26] },
    { id: 'minoan-bc1750', label: { cn: '米诺斯（克里特）', en: 'Minoan (Crete)' },
      sourceName: 'Minoan', color: '#5fa8a0' },
  ],

  // ─── BC 950 古希伯来（HSS-6.3）所罗门圣殿 ─ 用 world_bc2000 + customPolygon ─
  'ancient-hebrews-bc950': [
    { id: 'united-israel', label: { cn: '以色列联合王国（所罗门）', en: 'United Kingdom of Israel (Solomon)' },
      color: '#9b3030', focal: true, labelAt: [35.2, 31.8],
      // 大卫-所罗门时期最大疆域：从但到比尔谢巴 + 约旦河外
      customPolygon: [
        [34.6, 33.3], [35.6, 33.4], [36.4, 32.7], [36.0, 31.5], [35.5, 30.5],
        [34.8, 30.7], [34.5, 31.5], [34.5, 32.5], [34.6, 33.3],
      ],
    },
    { id: 'phoenicia',     label: { cn: '腓尼基（推罗 / 西顿）', en: 'Phoenicia (Tyre / Sidon)' },
      color: '#a07cb8', labelAt: [35.2, 33.7],
      customPolygon: [
        [34.9, 33.6], [35.3, 33.6], [35.6, 34.3], [36.1, 34.5], [35.8, 34.8],
        [35.2, 34.7], [34.9, 34.0], [34.9, 33.6],
      ],
    },
    { id: 'philistia',     label: { cn: '非利士', en: 'Philistia' },
      color: '#c08560', labelAt: [34.6, 31.6],
      customPolygon: [
        [34.3, 32.0], [34.7, 32.0], [34.8, 31.5], [34.4, 31.3], [34.3, 31.7], [34.3, 32.0],
      ],
    },
    { id: 'aram-damascus', label: { cn: '亚兰（大马士革）', en: 'Aram-Damascus' },
      color: '#7a8aa8', labelAt: [37.0, 33.8],
      customPolygon: [
        [36.0, 33.0], [38.0, 33.5], [38.5, 34.5], [37.0, 34.8], [36.2, 34.0], [36.0, 33.0],
      ],
    },
    { id: 'egypt-bc950',   label: { cn: '古埃及（21 王朝）', en: 'Egypt (21st Dynasty)' },
      sourceName: 'Egypt', color: '#d6b94a', labelAt: [31, 27] },
  ],

  // ─── 1324 西非马里（HSS-7.4）曼萨穆萨朝觐 ─ 用 world_1300 快照 ─
  'mali-1324': [
    { id: 'mali-empire',   label: { cn: '马里帝国', en: 'Mali Empire' },
      sourceName: 'Mali', color: '#d4af37', focal: true, labelAt: [-5, 14] },
    { id: 'west-african-cereal', label: { cn: '西非农耕带', en: 'West African farmers' },
      sourceName: 'West African cereal farmers', color: '#a07cb8', labelAt: [5, 8] },
    { id: 'mamluk-1324',   label: { cn: '马穆鲁克埃及', en: 'Mamluk Egypt' },
      sourceName: 'Mamluke Sultanate', color: '#c08560', labelAt: [32, 27] },
    { id: 'hafsid-1324',   label: { cn: '哈夫斯（北非）', en: 'Hafsid Caliphate' },
      sourceName: 'Hafsid Caliphate', color: '#c9a978', labelAt: [10, 33] },
  ],

  // ─── 1450 前哥伦布美洲（HSS-7.7）─ 用 world_1492 快照 ─
  // 三大文明：阿兹特克 + 玛雅（晚期）+ 印加
  'pre-columbian-1450': [
    { id: 'aztec-empire',  label: { cn: '阿兹特克帝国（特诺奇蒂特兰）', en: 'Aztec Empire (Tenochtitlan)' },
      sourceName: 'Mexihcah (Triple Alliance)', color: '#9b3030', focal: true, labelAt: [-99, 19.5] },
    { id: 'maya-1450',     label: { cn: '玛雅（尤卡坦后古典）', en: 'Maya (Postclassic Yucatán)' },
      sourceName: 'Maya Yucateco', color: '#3da57a', labelAt: [-89, 19.5] },
    { id: 'inca-empire',   label: { cn: '印加帝国（库斯科）', en: 'Inca Empire (Cuzco)' },
      sourceName: 'Quechua', color: '#d97149', labelAt: [-72, -13] },
    { id: 'chimu-1450',    label: { cn: '奇穆王国', en: 'Chimú Kingdom' },
      sourceName: 'Chimú', color: '#a07cb8', labelAt: [-78, -8] },
    { id: 'mixteca-1450',  label: { cn: '米斯特克', en: 'Ñuu Savi (Mixtec)' },
      sourceName: 'Ñuu Savi (Mixtecapan)', color: '#7a8aa8', labelAt: [-97.5, 17] },
    { id: 'taino-1450',    label: { cn: '泰诺人（加勒比）', en: 'Taíno (Caribbean)' },
      sourceName: 'Taino', color: '#5fa8a0', labelAt: [-71, 18.5] },
  ],

  // ─── 1687 科学革命（HSS-7.10）牛顿《原理》─ 用 world_1700 快照 ─
  'scientific-rev-1687': [
    { id: 'england-1687',  label: { cn: '英格兰（牛顿）', en: 'England (Newton)' },
      sourceName: 'England and Ireland', color: '#9b2c2c', focal: true, labelAt: [-2, 53] },
    { id: 'france-1687',   label: { cn: '法兰西（巴黎科学院）', en: 'France (Académie)' },
      sourceName: 'France', color: '#3a5a8a', labelAt: [2.5, 47] },
    { id: 'hre-1687',      label: { cn: '神圣罗马帝国', en: 'Holy Roman Empire' },
      sourceName: 'Holy Roman Empire', color: '#a878b8', labelAt: [11, 50] },
    { id: 'dutch-1687',    label: { cn: '荷兰共和国', en: 'Dutch Republic' },
      sourceName: 'Dutch Republic', color: '#d4af37', labelAt: [5.5, 52] },
    { id: 'spain-1687',    label: { cn: '西班牙', en: 'Spain' },
      sourceName: 'Spain', color: '#c9a978', labelAt: [-3.7, 40] },
    { id: 'sweden-1687',   label: { cn: '瑞典', en: 'Sweden' },
      sourceName: 'Sweden', color: '#7a8aa8', labelAt: [16, 60] },
    { id: 'poland-1687',   label: { cn: '波兰立陶宛', en: 'Polish-Lithuanian Commonwealth' },
      sourceName: 'Polish–Lithuanian Commonwealth', color: '#a07cb8', labelAt: [21, 52] },
    { id: 'ottoman-1687',  label: { cn: '奥斯曼帝国', en: 'Ottoman Empire' },
      sourceName: 'Ottoman Empire', color: '#c08560', labelAt: [33, 39] },
    { id: 'muscovy-1687',  label: { cn: '俄罗斯沙皇国', en: 'Tsardom of Muscovy' },
      sourceName: 'Tsardom of Muscovy', color: '#9a7e5a', labelAt: [40, 56] },
  ],

  // ─── 1830 杰克逊时代美国（HSS-8.3）─ 24 州 + 印第安领地 + 墨西哥德州 ─
  // 1830 没有合适快照（1815 旧 / 1880 太晚），全部用 customPolygon 表达
  'usa-1830': [
    { id: 'usa-states-1830', label: { cn: '美国（24 州 · 1830）', en: 'United States (24 states, 1830)' },
      color: '#3a5a8a', focal: true, labelAt: [-82, 38],
      // 24 州 = 原 13 + KY/TN/OH/LA/IN/MS/IL/AL/ME/MO + 1820 ME / MO，含 1819 收购的 Florida
      customPolygon: [
        // 北缘 — 五大湖 + 缅因
        [-95, 49], [-89.5, 48], [-84, 46], [-83, 45.8], [-82.5, 41.7],
        [-79, 42.5], [-76.5, 43.6], [-71.5, 45], [-69, 47.4], [-67, 47.4],
        [-67, 44.5], [-70, 41.7], [-71.5, 41], [-73.7, 40.6], [-74.5, 39.5],
        // 大西洋海岸南下
        [-75, 38.5], [-76, 37], [-77, 35], [-78, 33.5], [-80, 32], [-81.5, 30.7],
        // 佛罗里达（1819 西班牙割让）
        [-80.5, 27.5], [-80, 25.5], [-82, 26.5], [-83.5, 29.5], [-85, 30],
        [-87.5, 30.3], [-89, 30.2], [-89.5, 29], [-91.5, 29.5], [-93.5, 29.7],
        // 西界 — 路易斯安那购地 / Sabine 河（与墨西哥德州接壤）
        [-94, 29.7], [-94, 33.5], [-94.6, 36.5], [-94.6, 40.4],
        [-95.8, 40.6], [-95, 49],
      ],
    },
    { id: 'indian-territory-1830', label: { cn: '印第安领地（被驱逐部落）', en: 'Indian Territory (removed tribes)' },
      color: '#9a7e5a', labelAt: [-97, 35.5],
      // 1830 印第安迁移法划定的"印第安领地"——大致 OK + KS 一带
      customPolygon: [
        [-100, 37], [-94.6, 37], [-94.6, 33.7], [-100, 33.7], [-100, 37],
      ],
    },
    { id: 'unorganized-west-1830', label: { cn: '未划州西部领地', en: 'Unorganized Western Territory' },
      color: '#c9a978', labelAt: [-105, 43],
      // 路易斯安那购地剩余 + 1818 与英国共管的俄勒冈一部
      customPolygon: [
        [-95, 49], [-95.8, 40.6], [-95, 40], [-100, 37], [-100, 33.7],
        [-104, 33.7], [-104, 36.5], [-110, 41], [-114, 45], [-114, 49], [-95, 49],
      ],
    },
    { id: 'mexico-texas-1830', label: { cn: '墨西哥（含德州 / 加州）', en: 'Mexico (incl. Texas / California)' },
      color: '#d6b94a', labelAt: [-103, 24],
      // 1830 墨西哥版图 — 包含今 TX/NM/AZ/CA/UT/NV
      customPolygon: [
        [-117.1, 32.5], [-114.8, 32.5], [-109, 31.3], [-104, 32], [-104, 36.5],
        [-103, 36.5], [-100, 36.5], [-100, 33.7], [-94.6, 33.7],
        [-94, 33.5], [-94, 29.7], [-93.5, 29.7], [-97, 27.5], [-99, 26.5],
        [-103, 28.5], [-106.6, 31.8],
        // 跳进墨西哥本土南
        [-117, 16], [-94, 14.5], [-88, 16], [-90, 21], [-97.5, 25],
        [-100, 25.8], [-104, 29], [-110, 27], [-114, 30], [-117.1, 32.5],
      ],
    },
    { id: 'british-canada-1830', label: { cn: '英属加拿大', en: 'British Canada' },
      sourceName: 'Canada', color: '#7a8aa8', labelAt: [-95, 56] },
  ],

  // ─── 1848 昭昭天命（HSS-8.8）─ 美墨战争后疆域 ─ 用 world_1815 + customPolygon ─
  'manifest-destiny-1848': [
    { id: 'usa-1848', label: { cn: '美利坚合众国（1848 战后）', en: 'United States (post-1848)' },
      color: '#3a5a8a', focal: true, labelAt: [-92, 40],
      // 美国本土 — 1845 德州 + 1846 俄勒冈 + 1848 墨西哥割让全包
      customPolygon: [
        [-124.7, 48.4], [-95, 49], [-89.5, 48], [-84, 46], [-83, 45.8],
        [-82.5, 41.7], [-79, 42.5], [-76.5, 43.6], [-71.5, 45], [-69, 47.4],
        [-67, 47.4], [-67, 44.5], [-70, 41.7], [-73.7, 40.6], [-75, 38.5],
        [-76, 37], [-77, 35], [-78, 33.5], [-80, 32], [-81.5, 30.7],
        [-80.5, 27.5], [-80, 25.5], [-82, 26.5], [-85, 30], [-89, 30.2],
        [-91.5, 29.5], [-93.5, 29.7], [-97, 27.5], [-99, 26.5],
        [-103, 28.5], [-106.6, 31.8], [-109, 31.3], [-114.8, 32.5],
        [-117.1, 32.5], [-118.5, 34], [-120.5, 34.5], [-122, 36.5],
        [-122.7, 38.3], [-124, 40.5], [-124.5, 46], [-124.7, 48.4],
      ],
    },
    { id: 'mexican-cession-1848', label: { cn: '墨西哥割让地（1848）', en: 'Mexican Cession (1848)' },
      color: '#c08560', labelAt: [-110, 38],
      // 加州 + 内华达 + 犹他 + 亚利桑那 + 新墨西哥 + 怀俄明西 + 科罗拉多西
      customPolygon: [
        [-124.5, 46], [-124, 40.5], [-122.7, 38.3], [-122, 36.5], [-120.5, 34.5],
        [-118.5, 34], [-117.1, 32.5], [-114.8, 32.5], [-109, 31.3], [-104, 32],
        [-104, 42], [-111, 42], [-117, 42], [-121, 42], [-124, 42], [-124.5, 46],
      ],
    },
    { id: 'oregon-1848', label: { cn: '俄勒冈领地（1846 收）', en: 'Oregon Territory (1846)' },
      color: '#7a9c7a', labelAt: [-118, 46],
      customPolygon: [
        [-124.7, 48.4], [-117, 49], [-117, 42], [-121, 42], [-124, 42], [-124.5, 46], [-124.7, 48.4],
      ],
    },
    { id: 'texas-1848', label: { cn: '德克萨斯（1845 并入）', en: 'Texas (annexed 1845)' },
      color: '#d97149', labelAt: [-99, 31],
      customPolygon: [
        [-106.6, 31.8], [-103, 32], [-103, 36.5], [-100, 36.5], [-100, 33.7],
        [-94, 33.5], [-94, 29.7], [-93.5, 29.7], [-97, 27.5], [-99, 26.5],
        [-103, 28.5], [-106.6, 31.8],
      ],
    },
    { id: 'mexico-1848', label: { cn: '墨西哥（战后）', en: 'Mexico (post-war)' },
      color: '#d6b94a', labelAt: [-102, 22],
      customPolygon: [
        [-117, 32.5], [-114, 32.5], [-109, 31.3], [-106.6, 31.8],
        [-103, 28.5], [-100, 25.8], [-97.5, 25], [-94, 18], [-90, 21],
        [-88, 16], [-94, 14.5], [-105, 16], [-114, 26], [-117, 32.5],
      ],
    },
    { id: 'british-canada-1848', label: { cn: '英属加拿大', en: 'British Canada' },
      sourceName: 'Canada', color: '#7a8aa8', labelAt: [-95, 56] },
  ],

  // ─── 1600 火药帝国（AP-WHAP-3）─ 用 world_1700 快照（1600 不在库中） ─
  'gunpowder-empires-1600': [
    { id: 'ottoman-1600', label: { cn: '奥斯曼帝国', en: 'Ottoman Empire' },
      sourceName: 'Ottoman Empire', color: '#9b3030', focal: true, labelAt: [33, 39] },
    { id: 'safavid-1600', label: { cn: '萨非帝国（伊朗）', en: 'Safavid Empire' },
      sourceName: 'Safavid Empire', color: '#d97149', labelAt: [52, 33] },
    { id: 'mughal-1600', label: { cn: '莫卧儿帝国（印度）', en: 'Mughal Empire' },
      sourceName: 'Mughal Empire', color: '#a07cb8', labelAt: [78, 24] },
    { id: 'manchu-1600', label: { cn: '满清帝国（东亚）', en: 'Manchu Empire (East Asia)' },
      sourceName: 'Manchu Empire', color: '#c08560', labelAt: [104, 36] },
    { id: 'muscovy-1600', label: { cn: '俄罗斯沙皇国', en: 'Tsardom of Muscovy' },
      sourceName: 'Tsardom of Muscovy', color: '#9a7e5a', labelAt: [50, 58] },
    { id: 'hindu-1600', label: { cn: '南印度印度教王国', en: 'Hindu Kingdoms (S. India)' },
      sourceName: 'Hindu Kingdoms', color: '#5fa8a0', labelAt: [78, 14] },
  ],

  // ─── 1099 十字军（第一次十字军占耶路撒冷）─ 用 world_1000 快照 ─
  // 注：world_1000 没有 Seljuk（他们 ~1037 才崛起，1071 Manzikert 才引发危机），用 customPolygon 表示
  'crusades-1099': [
    { id: 'byzantine-1099',     label: { cn: '拜占庭帝国（Manzikert 后衰）', en: 'Byzantine Empire (post-Manzikert)' },
      sourceName: 'Byzantine Empire', color: '#5fa8a0', labelAt: [27, 40] },
    { id: 'fatimid-1099',       label: { cn: '法蒂玛王朝（埃及+黎凡特）', en: 'Fatimid Caliphate (Egypt + Levant)' },
      sourceName: 'Fatimid Caliphate', color: '#3da57a', labelAt: [30, 26] },
    { id: 'hre-1099',           label: { cn: '神圣罗马帝国', en: 'Holy Roman Empire' },
      sourceName: 'Holy Roman Empire', color: '#a07cb8', labelAt: [11, 50] },
    // Seljuk Sultanate — 1099 时占据安纳托利亚 + 伊朗 + 美索不达米亚（world_1000 没此条目）
    { id: 'seljuk-1099',
      label: { cn: '塞尔柱苏丹国', en: 'Seljuk Sultanate' },
      color: '#a878b8', labelAt: [50, 36],
      // 粗略覆盖：安纳托利亚中部 + 伊朗 + 美索不达米亚
      customPolygon: [
        [33, 40], [37, 41], [41, 41], [45, 40], [50, 39], [55, 38], [60, 36],
        [62, 33], [60, 30], [55, 28], [50, 30], [46, 31], [42, 33], [38, 35],
        [33, 38], [33, 40],
      ],
    },
    // Crusader States — 沿黎凡特海岸：Edessa / Antioch / Tripoli / Jerusalem（1099 后建）
    { id: 'crusader-states',
      label: { cn: '十字军国（Edessa/Antioch/Tripoli/Jerusalem）', en: 'Crusader States (Edessa/Antioch/Tripoli/Jerusalem)' },
      color: '#d97149', focal: true, labelAt: [36, 33.5],
      // 黎凡特狭长海岸条带：从 Antioch（36N）到 Aqaba（30N）
      customPolygon: [
        [36.0, 36.5], [37.0, 36.7], [37.5, 36.4], [38.0, 35.5],
        [37.5, 34.5], [37.0, 33.5], [36.5, 32.5], [36.0, 31.5],
        [35.8, 30.5], [35.4, 30.0], [35.0, 30.5], [34.8, 31.5],
        [35.0, 32.5], [35.4, 33.5], [35.6, 34.5], [35.8, 35.5],
        [36.0, 36.5],
      ],
    },
  ],

  // ─── 1962 冷战（古巴危机年）─ 用 world_1945 快照 ─
  'cold-war-1962': [
    { id: 'usa-coldwar',     label: { cn: '美国（资本主义阵营）', en: 'United States (Capitalist bloc)' },
      sourceName: 'United States', color: '#3a5a8a', focal: true, labelAt: [-98, 39] },
    { id: 'ussr-coldwar',    label: { cn: '苏联（共产主义阵营）', en: 'Soviet Union (Communist bloc)' },
      sourceName: 'USSR', color: '#9b3030', labelAt: [60, 60] },
    { id: 'china-coldwar',   label: { cn: '中华人民共和国（1949）', en: 'PRC (since 1949)' },
      sourceName: 'China', color: '#c9a978', labelAt: [104, 36] },
    { id: 'india-coldwar',   label: { cn: '印度（不结盟运动主导）', en: 'India (Non-Aligned leader)' },
      sourceName: 'India', color: '#d6b94a', labelAt: [78, 22] },
    { id: 'cuba-coldwar',    label: { cn: '古巴（卡斯特罗 1959）', en: 'Cuba (Castro 1959)' },
      sourceName: 'Cuba', color: '#9b3030', labelAt: [-79, 21.7] },
    { id: 'uk-coldwar',      label: { cn: '英国（NATO）', en: 'UK (NATO)' },
      sourceName: 'United Kingdom', color: '#7a8aa8', labelAt: [-2, 53] },
    { id: 'france-coldwar',  label: { cn: '法国（NATO）', en: 'France (NATO)' },
      sourceName: 'France', color: '#7a8aa8', labelAt: [2.5, 47] },
    // Iron Curtain — 用 customPolygon 表达东欧"铁幕"分界（Stettin 到 Trieste 一线以东）
    { id: 'iron-curtain-east',
      label: { cn: '铁幕东（华约阵营）', en: 'Iron Curtain East (Warsaw Pact)' },
      color: '#9a7e5a', labelAt: [20, 50],
      // 粗略覆盖东德 + 波兰 + 捷克 + 匈牙利 + 罗马尼亚 + 保加利亚
      customPolygon: [
        [13.0, 54.5], [15.0, 54.5], [19.0, 54.5], [23.0, 54.0], [24.0, 50.0],
        [28.0, 48.5], [29.5, 45.0], [27.5, 44.0], [22.5, 44.0], [21.0, 42.0],
        [18.5, 42.5], [16.0, 45.0], [13.5, 46.5], [12.5, 47.5], [12.0, 49.0],
        [12.5, 50.5], [13.0, 52.0], [13.0, 54.5],
      ],
    },
  ],

};

// ─── 51 门 history topic 的「年级 / AP 单元」反查表 ────────────────────────
// 用途：首页 CourseBrowser 的 Mode 筛选（按学校年级 / 按 AP 考试 / 按历史脉络），
// 让中国家长能从「我娃这个学期在 G7」或「她在备 APUSH」直接定位课。
//
// 字段来源：每门课 notebook 已有的 standardRef（如 'CA HSS 7.6.5' / 'AP World KC-1.6' / 'APUSH KC-3.2.III'）
// 这里手工校准后定格为单一权威映射，避免 runtime 解析 51 个 notebook 的 bundle 开销。
//
// 字段定义：
//   grade:    'G5'|'G6'|'G7'|'G8'|'HS'  — California HSS 主对齐年级
//   apWorld:  'U1'..'U9' | null         — AP World History (Modern) Unit
//   apush:    'P1'..'P9' | null         — APUSH Period
//   (一门课可同时挂 grade + apWorld + apush；筛选按对应键 in)

export var COURSE_GRADE_MAP = {
  // ── G6 古代文明 (CA HSS 6) ───────────────────────────────────────────
  'ancient-egypt-2550bce':     { grade: 'G6', apWorld: null, apush: null },
  'hammurabi-code-1754bce':    { grade: 'G6', apWorld: null, apush: null },
  'babylonian-exile-586bce':   { grade: 'G6', apWorld: null, apush: null },
  'ancient-greece-480bce':     { grade: 'G6', apWorld: null, apush: null },
  'mauryan-india-261bce':      { grade: 'G6', apWorld: null, apush: null },
  'qin-china-221bce':          { grade: 'G6', apWorld: null, apush: null },
  'han-china-130bce':          { grade: 'G6', apWorld: null, apush: null },
  'roman-republic-fall-44bce': { grade: 'G6', apWorld: null, apush: null },
  'roman-empire-peak-117':     { grade: 'G6', apWorld: 'U1', apush: null }, // CA HSS 6.7

  // ── G7 中世纪 + 早期近代世界 (CA HSS 7) ──────────────────────────────
  'byzantine-rise':            { grade: 'G7', apWorld: 'U1', apush: null },
  'islamic-rise':              { grade: 'G7', apWorld: 'U1', apush: null },
  'tang-song-china':           { grade: 'G7', apWorld: 'U1', apush: null },
  'crusades-1099':             { grade: 'G7', apWorld: 'U1', apush: null },
  'magna-carta-1215':          { grade: 'G7', apWorld: 'U1', apush: null },
  'mongol-empire':             { grade: 'G7', apWorld: 'U2', apush: null },
  'mali-empire-1235':          { grade: 'G7', apWorld: 'U2', apush: null },
  'black-death-1347':          { grade: 'G7', apWorld: 'U2', apush: null },
  'medieval-japan':            { grade: 'G7', apWorld: 'U1', apush: null },
  'pre-columbian':             { grade: 'G7', apWorld: 'U2', apush: null },
  'native-americans-pre1500':  { grade: 'G7', apWorld: 'U2', apush: 'P1', g5: true },
  'renaissance-1500':          { grade: 'G7', apWorld: 'U3', apush: null },
  'reformation-1517':          { grade: 'G7', apWorld: 'U3', apush: null },
  'age-of-exploration-1492':   { grade: 'G7', apWorld: 'U4', apush: 'P1', g5: true },
  'gunpowder-empires-1600':    { grade: 'G7', apWorld: 'U3', apush: null },

  // ── HS 世界史 / AP World 主战场 (CA HSS 10 / AP World U5+) ──────────
  'scientific-revolution':     { grade: 'HS', apWorld: 'U5', apush: null },
  'enlightenment':             { grade: 'HS', apWorld: 'U5', apush: 'P3' },
  'french-revolution-1789':    { grade: 'HS', apWorld: 'U5', apush: null },
  'industrial-revolution-1800':{ grade: 'HS', apWorld: 'U5', apush: null },
  'scramble-for-africa-1884':  { grade: 'HS', apWorld: 'U6', apush: null },
  'world-war-one-1914':        { grade: 'HS', apWorld: 'U7', apush: 'P7' },
  'world-war-two-1942':        { grade: 'HS', apWorld: 'U7', apush: 'P7' },
  'cold-war-1962':             { grade: 'HS', apWorld: 'U8', apush: 'P8' },
  'decolonization-1960':       { grade: 'HS', apWorld: 'U8', apush: null },
  'globalization-1995':        { grade: 'HS', apWorld: 'U9', apush: 'P9' },

  // ── G8 美国史 / APUSH (CA HSS 8) ────────────────────────────────────
  'thirteen-colonies-1700':       { grade: 'G8', apWorld: null, apush: 'P2', g5: true },
  'american-revolution-1776':     { grade: 'G8', apWorld: null, apush: 'P3', g5: true },
  'constitutional-convention-1787':{ grade: 'G8', apWorld: null, apush: 'P3', g5: true },
  'hamilton-jefferson-1790s':     { grade: 'G8', apWorld: null, apush: 'P3' },
  'jackson-indian-removal-1830':  { grade: 'G8', apWorld: null, apush: 'P4' },
  'reform-movements-1840':        { grade: 'G8', apWorld: null, apush: 'P4' },
  'manifest-destiny-1845':        { grade: 'G8', apWorld: null, apush: 'P4' },
  'slavery-abolition-1850':       { grade: 'G8', apWorld: null, apush: 'P5' },
  'civil-war-1861':               { grade: 'G8', apWorld: null, apush: 'P5' },
  'reconstruction-1877':          { grade: 'G8', apWorld: null, apush: 'P5' },
  'westward-expansion-1869':      { grade: 'G8', apWorld: null, apush: 'P6' },
  'chinese-exclusion-1882':       { grade: 'G8', apWorld: null, apush: 'P6' },
  'gilded-age-1890':              { grade: 'G8', apWorld: null, apush: 'P6' },
  'progressive-era-1910':         { grade: 'G8', apWorld: null, apush: 'P7' },
  'womens-suffrage-1920':         { grade: 'G8', apWorld: null, apush: 'P7' },
  'great-depression-1933':        { grade: 'G8', apWorld: null, apush: 'P7' },
  'civil-rights-1965':            { grade: 'G8', apWorld: null, apush: 'P8' },

  // ── 路线图占位 (registry available:false, 不渲染/不计入可见课数) — 保留 grade/AP 标签供 tier 闸门用
  //    (HS → Pro)。authoring 列入内容 backlog: docs/CONTENT_BACKLOG.md。contemporary-us-1980(1965后)
  //    = 美国史轨唯一缺口。 ──
  'haitian-revolution-1791':      { grade: 'HS', apWorld: 'U5', apush: null },
  'meiji-restoration-1868':       { grade: 'HS', apWorld: 'U6', apush: null },
  'russian-revolution-1917':      { grade: 'HS', apWorld: 'U7', apush: 'P7' },
  'contemporary-us-1980':         { grade: 'HS', apWorld: null, apush: 'P9' },
};

// 按 grade 取课列表
export function getCoursesByGrade(grade) {
  return Object.keys(COURSE_GRADE_MAP).filter(function(id) {
    return COURSE_GRADE_MAP[id].grade === grade;
  });
}

// 按 AP World Unit 取课列表
export function getCoursesByApWorldUnit(unit) {
  return Object.keys(COURSE_GRADE_MAP).filter(function(id) {
    return COURSE_GRADE_MAP[id].apWorld === unit;
  });
}

// 按 APUSH Period 取课列表
export function getCoursesByApushPeriod(period) {
  return Object.keys(COURSE_GRADE_MAP).filter(function(id) {
    return COURSE_GRADE_MAP[id].apush === period;
  });
}

// 给单门课取年级/AP 标签（课卡上显示用）
export function getGradeTags(topicId) {
  return COURSE_GRADE_MAP[topicId] || { grade: null, apWorld: null, apush: null };
}

// 元数据 — UI 渲染用（年级标题、AP 单元描述）
export var GRADE_META = {
  G5: { cn: 'G5 美国早期史',     en: '5th Grade · Early US' },
  G6: { cn: 'G6 古代文明',       en: '6th Grade · Ancient Civilizations' },
  G7: { cn: 'G7 中世纪 + 近代',  en: '7th Grade · Medieval & Early Modern' },
  G8: { cn: 'G8 美国史',         en: '8th Grade · US History' },
  HS: { cn: '高中世界史',        en: 'High School World History' },
};

export var AP_WORLD_META = {
  U1: { cn: 'U1 全球网络 1200-1450',    en: 'Unit 1 Global Tapestry' },
  U2: { cn: 'U2 跨网络交流',             en: 'Unit 2 Networks of Exchange' },
  U3: { cn: 'U3 陆基帝国 1450-1750',    en: 'Unit 3 Land-Based Empires' },
  U4: { cn: 'U4 跨洋帝国 1450-1750',    en: 'Unit 4 Maritime Empires' },
  U5: { cn: 'U5 革命时代 1750-1900',    en: 'Unit 5 Revolutions' },
  U6: { cn: 'U6 工业化与殖民',           en: 'Unit 6 Industrialization' },
  U7: { cn: 'U7 全球冲突 1900-1945',    en: 'Unit 7 Global Conflict' },
  U8: { cn: 'U8 冷战与去殖民',           en: 'Unit 8 Cold War / Decolonization' },
  U9: { cn: 'U9 全球化 1945-now',       en: 'Unit 9 Globalization' },
};

export var APUSH_META = {
  P1: { cn: 'P1 1491-1607 大陆相遇',       en: 'Period 1 Pre-Columbian / Encounter' },
  P2: { cn: 'P2 1607-1754 殖民地',          en: 'Period 2 Colonial Era' },
  P3: { cn: 'P3 1754-1800 革命与建国',      en: 'Period 3 Revolution & Constitution' },
  P4: { cn: 'P4 1800-1848 杰克逊与改革',    en: 'Period 4 Jackson & Reform' },
  P5: { cn: 'P5 1844-1877 内战与重建',      en: 'Period 5 Civil War & Reconstruction' },
  P6: { cn: 'P6 1865-1898 镀金时代',        en: 'Period 6 Gilded Age' },
  P7: { cn: 'P7 1890-1945 进步、一战、新政、二战', en: 'Period 7 Progressive / WWI / Depression / WWII' },
  P8: { cn: 'P8 1945-1980 冷战与民权',      en: 'Period 8 Cold War & Civil Rights' },
  P9: { cn: 'P9 1980-now 当代美国',         en: 'Period 9 Contemporary US' },
};

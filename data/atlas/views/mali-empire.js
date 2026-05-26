// view: Mali Empire · 1324 · Mansa Musa's Hajj
// Grade 7 · HSS-7.4
// 5-7+: Story-First v2 lens shipped (3 lens: mansa-musa / ibn-battuta / aisha-1413)
// 启用 deepLearn 入口 + atlas keyFigures 自动从 lens 派生 (per lib/atlas-views.js 第 9 条铁律)
export const VIEW = {
  id: 'mali-empire',
  grade: 7,
  topicTier: 'core',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/mali-empire-1235?from=atlas&atlasId=mali-empire',
  standardsAlignment: [
    { code: 'CA-HSS-7.4', label: { cn: 'CA HSS-7.4 西非帝国（加纳 / 马里 / 桑海）', en: 'CA HSS-7.4 West African empires (Ghana / Mali / Songhai)' } },
    { code: 'AP-WHAP-2.4', label: { cn: 'AP World Unit 2.4 跨撒哈拉商路', en: 'AP World Unit 2.4 Trans-Saharan trade routes' } },
  ],
  title:    { cn: '马里帝国', en: 'Mali Empire' },
  subtitle: { cn: '1324 · 曼萨穆萨朝觐', en: '1324 · Mansa Musa\'s Hajj' },
  year: 1324,

  camera: {
    projection: 'mercator',
    center: [0, 18],
    scale: 380,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'mali-1324',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1300',
      highlightId:     'mali-empire',
    },
    C:  { civs: 'eurasia-1347' },
    F:  { ids: ['niger-river', 'sahara-trade'] },
    L4: {
      pins: ['cairo-1324', 'timbuktu-1324', 'niani-1324', 'djenne', 'mecca-1324'],
    },
  },

  causalSummary: {
    cn: 'L0 撒哈拉沙漠 + 萨赫勒草原 + 尼日尔河弯 + L1 中世纪暖期沙漠通行尚可 + L2 马里帝国控制 ~500 万人 / 跨撒哈拉商队连接 + L3 伊斯兰教 + 王权神授 + 廷巴克图学问中心 / 黄金 + 盐 + 奴隶贸易 + L4 1235 桑迪亚塔立国 → 1324 曼萨穆萨朝觐撒钱 → 压低开罗金价数年（al-Umari 称 12 年，存在争议）→ 欧洲首次得知西非黄金 → 1375 加泰罗尼亚地图标"曼萨穆萨"',
    en: 'L0 Sahara desert + Sahel savanna + Niger River bend + L1 Medieval Warm makes desert crossing viable + L2 Mali Empire ruled ~5M / trans-Saharan caravans connect + L3 Islam + divine kingship + Timbuktu scholarship / gold + salt + slave trade + L4 1235 Sundiata founds → 1324 Mansa Musa\'s gold-spending Hajj → depressed Cairo\'s gold market for years (al-Umari claims 12, contested) → Europe first hears of West African gold → 1375 Catalan Atlas marks "Mansa Musa"',
  },

  // 关键人物 — 5-7+ 起 deepLearnEnabled Topic 的 keyFigures 自动从 history lens 派生
  // (lib/atlas-views.js getEffectiveKeyFigures 在 SSR 时拉取 + getStaticProps 注入)
  // 此处不再 hardcode keyFigures —— 避免 atlas vs lens 不一致事故
  // 当前派生源: lib/history-storyboards/mali-empire-1235.js 的 lenses object
  // (mansa-musa / ibn-battuta / aisha-1413 三个 lens)

  examPoints: {
    cn: [
      'Sundiata Keita 桑迪亚塔 1235 立国 / Sundiata Epic 史诗',
      'Mansa Musa 曼萨穆萨 1312-1337 — 史上最富之人',
      '1324 朝觐 Hajj — 沿途撒金致开罗金价数年下跌（al-Umari 称 12 年，存在争议）',
      'Trans-Saharan trade 跨撒哈拉商路：黄金（南）↔ 盐（北）',
      'Timbuktu 廷巴克图 — Sankore Madrasah 桑科尔学院 / 知识中心',
      'Islam 伊斯兰教成国教 / 王权 + 宗教精英共治',
      'Catalan Atlas 1375 加泰罗尼亚地图 — 欧洲首次绘 Mansa Musa',
      'Songhai 桑海帝国接班 1464-1591 / Askia Muhammad',
    ],
    en: [
      'Sundiata Keita founds Mali, 1235 / Epic of Sundiata',
      'Mansa Musa 1312-1337 — likely richest person in history',
      '1324 Hajj — gold giveaway depressed Cairo\'s gold market for years (al-Umari claims 12, contested)',
      'Trans-Saharan trade: gold (south) ↔ salt (north)',
      'Timbuktu — Sankore Madrasah / center of Islamic learning',
      'Islam as state religion / king + religious elite',
      'Catalan Atlas 1375 — first European map showing Mansa Musa',
      'Songhai Empire succeeds Mali, 1464-1591 / Askia Muhammad',
    ],
  },
};

// view: Black Death · 1347-1353 · Eurasia
//
// 关键验证：这是第三个 Topic — 不画新 SVG，只写一份配方。
export const VIEW = {
  id: 'black-death',
  grade: 7,
  topicTier: 'core',
  // 5-5: Story-First Pedagogy v2 lens 已 ship (3 lens: Agnolo / Konrad / Devorah)
  // 启用 deepLearn 入口 + atlas keyFigures 自动从 lens 派生 (per lib/atlas-views.js)
  deepLearnEnabled: true,
  deepLearnUrl: '/history?topicId=black-death-1347&from=atlas&atlasId=black-death',
  standardsAlignment: [
    { code: 'CA-HSS-7.6.7', label: { cn: 'CA HSS-7.6.7 黑死病社会经济影响', en: 'CA HSS-7.6.7 Plague social and economic impact' } },
    { code: 'AP-WHAP-2.6',  label: { cn: 'AP World Unit 2.6 交流网络的环境后果（含瘟疫）', en: 'AP World Unit 2.6 Environmental Consequences of Connectivity (incl. plague)' } },
  ],
  title:    { cn: '黑死病', en: 'Black Death' },
  subtitle: { cn: '1347-1353 · 欧亚 · 地图为 1300 快照', en: '1347-1353 · Eurasia · map shows 1300 snapshot' },
  year: 1347,

  camera: {
    projection: 'mercator',
    center: [25, 45],     // 地中海中心 — 横跨欧亚
    scale: 480,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities: 'eurasia-1347',
      modernPolities: 'eurasia-modern',
      yearSnapshot: 'world_1300',     // 真实 1300 年边界（距 1347 47 年）
      highlightId: 'great-khanate',
    },
    C:  { civs: 'eurasia-1347' },
    F:  { ids: ['silk-road', 'danube', 'alps', 'roman-roads', 'great-wall',
                'bosporus', 'gibraltar', 'suez-isthmus'] },
    L4: {
      pins: ['caffa-siege', 'messina', 'paris-1348', 'london-1348', 'avignon'],
    },
  },

  causalSummary: {
    cn: 'L0 欧亚草原走廊 + 黑海-地中海-陆路通道（物理通道）+ L1 14 世纪小冰期开始 + L2 高密度都市化 / 商队网络活跃 + L3 蒙古和平把欧亚政治整合 / 商路贯通无阻 + L4 卡法围城瘟尸入欧',
    en: 'L0 Eurasian steppe corridor + Black Sea–Mediterranean–overland routes (physical channels) + L1 Little Ice Age onset + L2 dense urbanization / active caravan networks + L3 Pax Mongolica politically integrates Eurasia / open trade + L4 plague-corpses at Caffa',
  },

  // 关键人物 — 5-5 起 deepLearnEnabled Topic 的 keyFigures 自动从 history lens 派生
  // (lib/atlas-views.js getEffectiveKeyFigures 在 SSR 时拉取 + getStaticProps 注入)
  // 此处不再 hardcode keyFigures——避免 atlas vs lens 不一致事故
  // 当前派生源: lib/history-storyboards/black-death-1347.js 的 lenses object
  // (agnolo-siena / konrad-strasbourg / devorah-strasbourg 三个 lens)


  examPoints: {
    cn: [
      'Yersinia pestis 鼠疫杆菌（跳蚤 + 黑鼠传播）',
      'Caffa 1346 围城 — 蒙古抛尸入热那亚商站',
      'Messina 1347 黑死病登陆欧洲 → 4 年横扫',
      '欧洲死亡 ~1/3 人口（30-50%）— 约 2500 万人',
      'Flagellants 鞭笞派 / 反犹大屠杀 — 社会恐慌反应',
      'Labor scarcity → 农奴制松动 / 工资上涨',
      '英国 Statute of Labourers 1351 — 强制工资管制',
      'Decameron《十日谈》— Boccaccio 薄伽丘 1353',
    ],
    en: [
      'Yersinia pestis (fleas + black rats as vectors)',
      'Siege of Caffa 1346 — Mongols catapult corpses into Genoese port',
      'Messina 1347 — plague reaches Europe → 4-year sweep',
      'Europe loses ~1/3 of population (~25M dead)',
      'Flagellants / anti-Jewish pogroms — panic responses',
      'Labor scarcity → weakens serfdom / wages rise',
      'English Statute of Labourers 1351 — wage controls',
      'Boccaccio\'s Decameron, 1353',
    ],
  },
};

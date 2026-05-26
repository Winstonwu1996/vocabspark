// view: Tang/Song China · 1000 · East Asia
export const VIEW = {
  id: 'tang-song',
  grade: 7,
  topicTier: 'core',
  // 整合原 /history 模块的深度学版（14 轮苏格拉底 + Mastery Gate）
  deepLearnEnabled: true,
  deepLearnUrl: '/history/tang-song-china?from=atlas&atlasId=tang-song',
  standardsAlignment: [
    { code: 'CA-HSS-7.3',   label: { cn: 'CA HSS-7.3 唐宋中国 — 文化、技术、政治成就', en: 'CA HSS-7.3 Tang/Song China — culture, technology, governance' } },
    { code: 'AP-WHAP-1.2',  label: { cn: 'AP World Unit 1.2 东亚发展 (Song Dynasty)', en: 'AP World Unit 1.2 Developments in East Asia (Song Dynasty)' } },
  ],
  title:    { cn: '唐宋盛世', en: 'Tang & Song China' },
  subtitle: { cn: '唐 618-907 → 宋 960-1279 · 地图为 1000 年北宋鼎盛快照', en: 'Tang 618-907 → Song 960-1279 · map shows 1000 AD Northern Song peak' },
  year: 1000,

  camera: {
    projection: 'mercator',
    center: [110, 32],
    scale: 750,
    yOffset: -10,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities: 'east-asia-1000',
      modernPolities: 'east-asia-modern',
      yearSnapshot: 'world_1000',     // historical-basemaps GeoJSON
      highlightId: 'northern-song',
    },
    C:  { civs: 'east-asia-1000' },
    F:  { ids: ['yangtze', 'yellow-river', 'great-wall', 'grand-canal', 'silk-road',
                'tibetan-plateau', 'himalaya', 'mongolian-steppe', 'malacca-strait'] },
    L4: {
      pins: ['changan', 'kaifeng', 'hangzhou', 'guangzhou', 'dunhuang'],
    },
  },

  causalSummary: {
    cn: 'L0 长江黄河双河 + L1 中世纪暖期 + L2 占城稻 + 1 亿人口 + L3 科举官僚制 + L4 王安石变法',
    en: 'L0 twin rivers + L1 Medieval Warm + L2 Champa rice + 100M pop + L3 imperial exams + L4 Wang Anshi reforms',
  },

  // 关键人物 — 5-7+ 起 deepLearnEnabled Topic 的 keyFigures 自动从 history lens 派生
  // (lib/atlas-views.js getEffectiveKeyFigures 在 SSR 时拉取 + getStaticProps 注入)
  // 此处不再 hardcode keyFigures —— 避免 atlas vs lens 不一致事故
  // 当前派生源: lib/history-storyboards/tang-song-china.js 的 lenses object
  // (emperor-huizong / su-shi / li-qingzhao 三个 lens)

  examPoints: {
    cn: [
      'Tang Dynasty 唐朝 618-907 — 长安世界最大都市',
      'Empress Wu Zetian 武则天 — 中国唯一女皇 690-705',
      'Civil Service Exam 科举制 — 隋创 / 唐宋完善（影响千年）',
      'Song Dynasty 宋朝 960-1279（北宋 → 南宋）',
      'Tang/Song "Four Great Inventions" 四大发明：火药 / 指南针 / 印刷 / 造纸',
      'Champa Rice 占城稻 — 一年两熟 → 人口破亿',
      'Movable type 活字印刷 — 毕昇 ~1040',
      'Confucianism 儒学复兴（宋明理学 Neo-Confucianism — 朱熹）',
    ],
    en: [
      'Tang Dynasty 618-907 — Chang\'an the world\'s largest city',
      'Empress Wu Zetian — China\'s only female emperor 690-705',
      'Civil Service Examination — perfected in Tang/Song',
      'Song Dynasty 960-1279 (Northern → Southern Song)',
      'Four Great Inventions: gunpowder / compass / printing / paper',
      'Champa rice — two crops/year → population breaks 100M',
      'Movable type printing — Bi Sheng, ~1040',
      'Neo-Confucianism — Zhu Xi (Song Dynasty)',
    ],
  },
};

// view: Renaissance Italy · 1500
// Grade 7 · HSS-7.8 (Renaissance)
// 5-6: Story-First v2 lens shipped (3 lens: lorenzo-medici / savonarola / lucia-widow)
// 启用 deepLearn 入口 + atlas keyFigures 自动从 lens 派生 (per lib/atlas-views.js 第 9 条铁律)
export const VIEW = {
  id: 'renaissance',
  grade: 7,
  topicTier: 'core',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/renaissance-1500?from=atlas&atlasId=renaissance',
  standardsAlignment: [
    { code: 'CA-HSS-7.8',   label: { cn: 'CA HSS-7.8 文艺复兴 — 起源与影响', en: 'CA HSS-7.8 Renaissance — origins and impact' } },
    { code: 'CA-HSS-7.9',   label: { cn: 'CA HSS-7.9 宗教改革（直接后果）', en: 'CA HSS-7.9 Reformation (direct consequence)' } },
    { code: 'AP-EURO-1.2',  label: { cn: 'AP European Unit 1.2 意大利文艺复兴', en: 'AP European Unit 1.2 Italian Renaissance' } },
  ],
  title:    { cn: '文艺复兴', en: 'Renaissance' },
  subtitle: { cn: '1500 · 意大利诸城邦', en: '1500 · Italian City-States' },
  year: 1500,

  camera: {
    projection: 'mercator',
    center: [15, 45],
    scale: 700,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'renaissance-1500',
      modernPolities:  'europe-modern',
      yearSnapshot:    'world_1500',
      highlightId:     'florence-venice',
    },
    C:  { civs: 'early-modern-1500' },
    F:  { ids: ['rhine', 'danube', 'alps', 'roman-roads', 'bosporus', 'gibraltar'] },
    L4: {
      pins: ['florence-1500', 'rome-1500', 'venice-1500', 'constantinople-1453', 'wittenberg'],
    },
  },

  causalSummary: {
    cn: 'L0 地中海中央 + L1 黑死病后劳动力稀缺 + L2 银行 / 美第奇 / 海贸资本 + L3 城邦共和 + 教皇资助 + L4 1453 拜占庭学者西迁 + 1450 印刷术',
    en: 'L0 Mediterranean center + L1 post-plague labor scarcity + L2 banking/Medici/maritime capital + L3 city-state republics + Papal patronage + L4 1453 Byzantine scholars + 1450 printing',
  },

  // 关键人物 — 5-5 起 deepLearnEnabled Topic 的 keyFigures 自动从 history lens 派生
  // (lib/atlas-views.js getEffectiveKeyFigures 在 SSR 时拉取 + getStaticProps 注入)
  // 此处不再 hardcode keyFigures —— 避免 atlas vs lens 不一致事故
  // 当前派生源: lib/history-storyboards/renaissance-1500.js 的 lenses object
  // (lorenzo-medici / savonarola / lucia-widow 三个 lens)

  examPoints: {
    cn: [
      '人文主义（Humanism）：以人为本，复兴希腊罗马古典文化',
      'Petrarch（彼得拉克）"人文主义之父"',
      'Machiavelli《君主论》1513',
      'Leonardo da Vinci《蒙娜丽莎》/《最后的晚餐》',
      'Michelangelo 西斯廷教堂天顶壁画 1508-1512',
      'Brunelleschi 透视法 + 圆顶（Florence Duomo）',
      '美第奇家族 Medici — Florence 文艺复兴金主',
      'Northern Renaissance：Erasmus, Dürer（北方文艺复兴）',
    ],
    en: [
      'Humanism: human-centered, revival of Greek/Roman classics',
      'Petrarch — "Father of Humanism"',
      'Machiavelli, The Prince, 1513',
      'Leonardo da Vinci — Mona Lisa / Last Supper',
      'Michelangelo — Sistine Chapel ceiling, 1508-1512',
      'Brunelleschi — linear perspective + Florence Duomo dome',
      'Medici family — patrons of the Florentine Renaissance',
      'Northern Renaissance: Erasmus, Dürer',
    ],
  },
};

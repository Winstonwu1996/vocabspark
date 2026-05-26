// view: Magna Carta · 1215 · Europe
export const VIEW = {
  id: 'magna-carta',
  grade: 7,                               // HSS-7 中世纪世界
  topicTier: 'core',
  // 整合原 /history 模块的深度学版（14 轮苏格拉底 + Mastery Gate）
  // 当前 Phase 0：Magna Carta 是首个接入 deep-learn 的 Topic，跳转 /history
  // Phase 1+ 计划：所有 40 Topic 都有 conversation engine（参考 HISTORY_MERGE_STRATEGY.md）
  deepLearnEnabled: true,
  deepLearnUrl: '/history/magna-carta-1215?from=atlas&atlasId=magna-carta',  // 带 from/atlasId 触发返回按钮 + 完成回跳
  standardsAlignment: [
    { code: 'CA-HSS-7.6.5',  label: { cn: 'CA HSS-7.6.5 中世纪欧洲法律传统（包括大宪章）', en: 'CA HSS-7.6.5 Medieval European legal traditions (including Magna Carta)' } },
  ],
  title:    { cn: '大宪章', en: 'Magna Carta' },
  subtitle: { cn: '1215 · 欧洲', en: '1215 · Europe' },
  year: 1215,

  camera: {
    projection: 'mercator',
    center: [10, 52],     // [lon, lat]
    scale: 700,
    yOffset: -10,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities: 'europe-1215',
      modernPolities: 'europe-modern',
      yearSnapshot: 'world_1200',     // 真实 1200 年边界
      highlightId: 'england',
    },
    C:  { civs: 'medieval-1215' },
    F:  { ids: ['rhine', 'danube', 'alps', 'pyrenees', 'roman-roads',
                'english-channel', 'gibraltar', 'bosporus'] },
    L4: {
      pins: ['magna-carta', 'london-1215', 'paris-1215', 'rome-1215', 'constantinople-1215'],
    },
  },

  causalSummary: {
    cn: 'L0 不列颠群岛 + 北海贸易通道 + L1 中世纪暖期 + L2 农业繁荣 + 北海商路给贵族非农业商业财富 + L3 封建契约传统 + L4 John 输诺曼底',
    en: 'L0 British Isles + North Sea trade access + L1 Medieval Warm + L2 agrarian surplus + North Sea trade circuits give barons non-agrarian commercial wealth + L3 feudal contract + L4 John loses Normandy',
  },

  // 关键人物 — 5-5 起 deepLearnEnabled Topic 的 keyFigures 自动从 history lens 派生
  // (lib/atlas-views.js getEffectiveKeyFigures 在 SSR 时拉取 + getStaticProps 注入)
  // 此处不再 hardcode keyFigures——避免 atlas vs lens 不一致事故
  // 当前派生源: lib/history-storyboards/magna-carta-1215.js 的 lenses object
  // (king-john / stephen-langton / tom-villein 三个 lens)

  examPoints: {
    cn: [
      'King John 约翰王 — 暴政 + 输丢诺曼底 + 重税',
      'Magna Carta 大宪章 1215.6.15 Runnymede 兰尼米德',
      '"due process of law" 正当法律程序条款（Clause 39）',
      '"No taxation without representation" 无议会同意不得征税',
      'Habeas corpus 人身保护令 — 不得任意拘押',
      'Parliament 议会起源 → 1265 Simon de Montfort 召集首次议会',
      'Common Law 普通法传统 — 判例法',
      '影响：美国权利法案 / 美国宪法第五修正案直接引用',
    ],
    en: [
      'King John — tyranny + loss of Normandy + heavy taxes',
      'Magna Carta, June 15, 1215, at Runnymede',
      '"due process of law" clause (Clause 39)',
      '"No taxation without representation" — consent of barons',
      'Habeas corpus — protection from arbitrary imprisonment',
      'Origins of Parliament → 1265 Simon de Montfort\'s parliament',
      'Common Law tradition — case-based law',
      'Influence: US Bill of Rights / 5th Amendment directly cite it',
    ],
  },
};

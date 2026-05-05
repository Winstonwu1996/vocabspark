// view: Crusades · 1099 · Levant + Eastern Med
// Grade 7 · CA HSS-7.6.4 (Crusades — origins / events / outcomes)
export const VIEW = {
  id: 'crusades',
  grade: 7,
  topicTier: 'core',
  // 整合原 /history 模块的深度学版（13 轮苏格拉底 + 三方视角 + Mastery Gate）
  deepLearnEnabled: true,
  deepLearnUrl: '/history?topicId=crusades-1099&from=atlas&atlasId=crusades',
  standardsAlignment: [
    { code: 'CA-HSS-7.6.4', label: { cn: 'CA HSS-7.6.4 十字军东征 — 起源 / 进程 / 后果', en: 'CA HSS-7.6.4 Crusades — origins / events / outcomes' } },
    { code: 'AP-WHAP-1.6',  label: { cn: 'AP World Unit 1.6 中世纪宗教冲突', en: 'AP World Unit 1.6 Religious Conflict in Medieval Era' } },
  ],
  title:    { cn: '十字军东征', en: 'Crusades' },
  subtitle: { cn: '1099 · 第一次十字军占耶路撒冷 · 三方视角（拉丁/拜占庭/伊斯兰）', en: '1099 · First Crusade takes Jerusalem · 3-civilization view' },
  year: 1099,

  camera: {
    projection: 'mercator',
    center: [28, 38],
    scale: 380,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'crusades-1099',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1000',
      highlightId:     'crusader-states',
    },
    C:  { civs: 'medieval-1215' },
    F:  { ids: ['bosporus', 'jordan-river', 'silk-road'] },
    L4: {
      pins: ['jerusalem-1099', 'clermont-1095', 'constantinople-1095', 'antioch-1098', 'acre-1291', 'manzikert-1071'],
    },
  },

  causalSummary: {
    cn: 'L0 黎凡特狭长海岸 + 圣地集中（耶路撒冷/伯利恒）+ 朝圣商路 + L1 中世纪暖期欧洲人口翻倍 → 二三子无地 + L2 ~1500 万欧洲人口 / 意大利商业城邦兴起 / 东方香料市场 + L3 教会权威巅峰（教皇 vs 皇帝）+ 封建骑士道 + 朝圣赎罪传统 + L4 1071 Manzikert → 1095 Clermont 演说 → 1099 占耶路撒冷 → 1187 萨拉丁夺回 → 1291 Acre 陷落',
    en: 'L0 narrow Levantine coast + concentrated holy sites (Jerusalem/Bethlehem) + pilgrim trade routes + L1 Medieval Warm doubles European population → second/third sons land-hungry + L2 ~15M Europeans / Italian merchant cities rising / Eastern spice markets + L3 papal authority at peak (pope vs emperor) + feudal chivalry + pilgrim-as-penance tradition + L4 1071 Manzikert → 1095 Clermont speech → 1099 Jerusalem captured → 1187 Saladin retakes → 1291 Acre falls',
  },

  // 关键人物 — 5-5 起 deepLearnEnabled Topic 的 keyFigures 自动从 history lens 派生
  // (lib/atlas-views.js getEffectiveKeyFigures 在 SSR 时拉取 + getStaticProps 注入)
  // 此处不再 hardcode keyFigures——避免 atlas vs lens 不一致事故
  // 当前派生源: lib/history-storyboards/crusades-1099.js 的 lenses object
  // (roger-toulouse / aisha-jerusalem / alexios 三个 lens)


  examPoints: {
    cn: [
      'Pope Urban II 1095 Clermont 演说 — "Deus vult" 上帝意旨',
      'First Crusade 1096-99 — 平民十字军 vs 贵族十字军',
      'Jerusalem 1099 攻陷 — 大屠杀穆斯林 + 犹太人',
      'Crusader States 十字军国 — Edessa / Antioch / Tripoli / Jerusalem',
      'Saladin 萨拉丁 1187 重夺耶路撒冷 — Hattin 战役',
      'Third Crusade 1189-92 — 狮心王理查 vs 萨拉丁',
      'Fourth Crusade 1204 — 反攻自家人 · 洗劫君士坦丁堡',
      '文化交流 — 阿拉伯数字 / 代数 / 亚里士多德保存 / 香料路开通',
    ],
    en: [
      'Pope Urban II 1095 Clermont speech — "Deus vult" (God wills it)',
      'First Crusade 1096-99 — People\'s Crusade vs Princes\' Crusade',
      'Jerusalem captured 1099 — massacre of Muslims + Jews',
      'Crusader States — Edessa / Antioch / Tripoli / Jerusalem',
      'Saladin recaptures Jerusalem 1187 — Battle of Hattin',
      'Third Crusade 1189-92 — Richard the Lionheart vs Saladin',
      'Fourth Crusade 1204 — Sack of Constantinople (fellow Christians)',
      'Cultural exchange — Arabic numerals / algebra / Aristotle preserved / spice routes',
    ],
  },
};

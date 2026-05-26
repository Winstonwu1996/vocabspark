// view: Fall of the Roman Republic · 公元前 44 · Mediterranean
// Grade 6 · CA HSS-6.7 (Roman Republic) · AP World KC-1.3 · AP US Gov (founders' model)
// basemap 注：world_bc200 是手头最近的快照（共和晚期 c.49-27 BCE 没有专用基础图）；
//   maurya-bc250 bloc 提供 rome-bc200（罗马共和「崛起中」）作为政治锚点。
//   术语硬规则（来自 notebook）：用元老院 / 执政官 / 保民官 / 卢比孔河 / 独裁官 /
//   Augustus / rex 等罗马本词，BCE 用「公元前 X 年」，禁用 BC，禁用中国官职类比。
export const VIEW = {
  id: 'roman-republic-fall',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/roman-republic-fall-44bce?from=atlas&atlasId=roman-republic-fall',
  grade: 6,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-6.7',          label: { cn: 'CA HSS-6.7 古罗马 — 共和 / 格拉古 / Caesar / 共和崩溃', en: 'CA HSS-6.7 Ancient Rome — Republic / Gracchi / Caesar / fall of the Republic' } },
    { code: 'AP-WHAP-1.3',         label: { cn: 'AP World KC-1.3 古典国家建构（共和制起源）', en: 'AP World KC-1.3 classical state-building (origins of republican government)' } },
    { code: 'AP-USGOV-FOUND',      label: { cn: 'AP US Gov 基础语境 — 国父借鉴罗马共和（Polybius / Madison / Federalist）', en: 'AP US Gov foundational context — founders\' model from the Roman Republic (Polybius / Madison / Federalist)' } },
  ],
  title:    { cn: '罗马共和国与崩溃', en: 'The Roman Republic & Its Fall' },
  subtitle: { cn: '公元前 49 跨卢比孔河 → 前 44 Caesar 被刺 → 前 27 Augustus · 共和终', en: '49 BCE Rubicon crossed → 44 BCE Caesar assassinated → 27 BCE Augustus · end of the Republic' },
  year: -44,

  camera: {
    projection: 'mercator',
    center: [15, 38],
    scale: 460,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'maurya-bc250',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_bc200',
      highlightId:     'rome-bc200',
    },
    C:  { civs: 'classical-bc500' },
    F:  { ids: ['alps', 'pyrenees', 'danube', 'rhine', 'gibraltar', 'bosporus'] },
    L4: {
      // 共和晚期的咸阳级城市 pin（罗马 / Rubicon / 法萨卢斯 / 腓力比）目前 events.js 没有；
      // 留空数组，主视觉锚点交给 L3 rome-bc200 + F 地中海地理。
      pins: [],
    },
  },

  // 5 层因果，对账 narrative §1/§2 + notebook §3-§4
  causalSummary: {
    cn: 'L0 罗马起家于意大利中部台伯河，共和晚期版图已环绕整个地中海（西班牙 / 高卢 / 希腊 / 北非 / 埃及）— 打下来的地越多，能被少数大贵族吞并的地越多 + L1 罗马城拥挤（议事厅 / Forum / 角斗士竞技场 / 失地穷人成千上万挤在出租屋）+ L2 社会分层硬：少数大贵族 + 中间小农（共和脊梁，有地才算公民才能当兵）+ 失地无地平民 + 完全不算「人」的奴隶（会说话的工具）+ 女人不能投票 + L3 res publica「公共的事」的核心是制衡：执政官（两人 / 任期一年 / 互相否决）+ 元老院 + 保民官（替平民说话 / 一票否决）+ 独裁官（紧急职位 / 严格限期半年）+ 最怕的词是 rex（王）+ L4 公元前 133 保民官 Tiberius Gracchus 立法分公有土地被元老院贵族当街打死 → 罗马政治学会「讲不通就动刀」→ Marius 军改让无地穷人参军（军队向将军个人靠拢）→ Sulla 第一个带兵进罗马城当独裁官（给 Caesar 立坏榜样）→ 前 60 前三头同盟（Caesar / Pompey / Crassus）→ 前 49 Caesar 跨卢比孔河 → 前 44 Caesar 被刺 → 前 27 屋大维称 Augustus 共和正式结束（五百年共和一代人崩塌）',
    en: 'L0 Rome was born on the Tiber in central Italy; by the late Republic its territory ringed the Mediterranean (Spain / Gaul / Greece / North Africa / Egypt) — the more land it conquered, the more land a few aristocrats could absorb + L1 the city of Rome was crowded (Senate hall / Forum / gladiatorial games / tens of thousands of landless poor in tenements) + L2 a hard social ladder: a few great aristocrats + middling smallholders (the Republic\'s spine — only landowners counted as citizens and could serve as soldiers) + landless plebeians + enslaved people who counted as "speaking tools" with no rights + women could not vote + L3 the core of res publica ("the public thing") was checks: two consuls (one-year term, each able to veto the other) + the Senate + the tribune (the plebeians\' shield, with veto power) + the dictator (an emergency post, strictly limited to six months) + the word the Romans feared most was rex (king) + L4 133 BCE the tribune Tiberius Gracchus, trying to redistribute public land, is beaten to death by senators in the street → Roman politics learns "if words fail, draw the knife" → Marius\'s reforms let the landless enlist (armies began shifting loyalty to commanders) → Sulla becomes the first general to march on Rome and rule as dictator (the precedent Caesar would follow) → 60 BCE First Triumvirate (Caesar / Pompey / Crassus) → 49 BCE Caesar crosses the Rubicon → 44 BCE Caesar is assassinated → 27 BCE Octavian is titled Augustus and the Republic formally ends (five centuries of republic collapsed in one generation)',
  },

  // keyFigures: [] — getEffectiveKeyFiguresSync 会从 storyboard
  //   (juliusCaesarLens / ciceroLens / landlessPlebeianLens) 自动派生
  keyFigures: [],

  examPoints: {
    cn: [
      'res publica 共和（约公元前 509 罗马人赶走最后一个王）',
      '制衡：consul 执政官（两人 / 一年 / 互相否决）+ Senate 元老院 + tribune 保民官（veto）',
      'dictator 独裁官 — 紧急职位 / 严格限期半年 / 事后必须交权',
      'Conflict of Orders 平民 vs 贵族之争',
      'latifundia 奴隶大庄园 → 失地小农挤进罗马靠施舍过活',
      '公元前 133 Tiberius Gracchus 改革被打死 → 弟弟 Gaius 几年后亦死于政治暴力',
      'Marius 军改：无地穷人能参军 → 军队向将军个人靠拢',
      'Sulla 第一个带兵进罗马城当独裁官（给 Caesar 立坏榜样）',
      '公元前 60 前三头同盟：Caesar + Pompey + Crassus',
      '公元前 49 Caesar 跨卢比孔河（带兵过这条河即叛国）',
      '公元前 44 Caesar 被刺于元老院（Brutus 等人）',
      '公元前 27 屋大维称 Augustus — 共和正式结束，帝制确立',
      '史学注记：「Et tu, Brute」不见于任何古代史料，纯莎士比亚加工',
      '美国国父借鉴罗马共和（Polybius / Madison / Federalist）— 三权分立 / 任期限制 / 怕「美国的凯撒」',
    ],
    en: [
      'res publica / the Republic (Romans expelled the last king c.509 BCE)',
      'Checks: consul (two, one-year term, can veto each other) + Senate + tribune (with veto)',
      'dictator — an emergency post, strictly limited to six months, power surrendered afterward',
      'Conflict of the Orders (plebeians vs patricians)',
      'latifundia (slave-run estates) → dispossessed smallholders crowd into Rome on the dole',
      '133 BCE Tiberius Gracchus killed pushing reform; his brother Gaius dies in political violence years later',
      'Marian reforms: the landless may enlist → armies shift loyalty to their commanders',
      'Sulla becomes the first general to march on Rome and rule as dictator (the precedent Caesar follows)',
      '60 BCE First Triumvirate: Caesar + Pompey + Crassus',
      '49 BCE Caesar crosses the Rubicon (for a general to cross it with troops was treason)',
      '44 BCE Caesar assassinated in the Senate (Brutus and others)',
      '27 BCE Octavian is titled Augustus — formal end of the Republic, beginning of the Principate',
      'Historiography note: "Et tu, Brute" appears in no ancient source; it is Shakespeare\'s invention',
      'America\'s founders modeled on the Roman Republic (Polybius / Madison / Federalist) — separation of powers / term limits / the fear of an "American Caesar"',
    ],
  },
};

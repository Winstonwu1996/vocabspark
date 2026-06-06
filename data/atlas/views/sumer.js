// view: Mesopotamia · Sumer · c. 3500 BCE — The First Cities
// Grade 6 · CA HSS-6.2 (Origins of Civilization)
export const VIEW = {
  id: 'sumer',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/mesopotamia-3500bce?from=atlas&atlasId=sumer',
  grade: 6,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-6.2', label: { cn: 'CA HSS-6.2 美索不达米亚 / 早期河谷文明', en: 'CA HSS-6.2 Mesopotamia / early river-valley civilizations' } },
    { code: 'AP-WORLD-FOUND', label: { cn: 'AP 世界史 · Foundations（国家与城市的兴起）', en: 'AP World History · Foundations (rise of states & cities)' } },
  ],
  title:    { cn: '美索不达米亚 · 苏美尔', en: 'Mesopotamia · Sumer' },
  subtitle: { cn: '约公元前 3500 · 乌鲁克 · 第一座城与第一种文字', en: 'c. 3500 BCE · Uruk · the first cities & the first writing' },
  year: -3500,

  camera: {
    projection: 'mercator',
    center: [44, 32],
    scale: 700,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
  },

  causalSummary: {
    cn: 'L0 底格里斯 + 幼发拉底两河冲积平原（"两河之间的土地"，约今伊拉克南部）/ 无石无木无矿，只有泥、芦苇、河水 + L1 极旱几乎不下雨、两河春末不规律泛滥 → 不挖渠就没饭吃，灌溉是生死工程 + L2 灌溉 → 剩余粮食 → 养活不下田的人 → 第一次细分工与明显阶层；Uruk 鼎盛城内约 4 万人，世界最大城市（城市革命）+ L3 互相竞争的城邦（各有守护神 / 神庙）/ 神庙经济（仓库+银行+工厂+田产）/ 为记账发明楔形文字（早期泥板 85-90% 是行政账目）/ 权力从祭司（en）转向王（lugal）+ L4 约前 3350-3200 楔形文字诞生 → 约前 2334 Sargon 征服城邦、建人类已知第一个帝国（阿卡德）→ 灌溉致盐碱化埋下衰落隐患',
    en: 'L0 Tigris + Euphrates alluvial plain ("the land between the rivers," ~today\'s southern Iraq) / no stone, no large trees, no ore — only mud, reeds, river water + L1 extreme aridity, almost no rain, irregular late-spring floods → no canals, no food; irrigation is a matter of life and death + L2 irrigation → surplus grain → feeds people who don\'t farm → first fine division of labor & clear classes; Uruk peaks at ~40,000 inside the city, the world\'s largest (the urban revolution) + L3 competing city-states (each with a patron god / temple) / temple economy (storehouse + bank + workshop + landlord) / cuneiform invented to keep accounts (85-90% of early tablets are administrative) / power shifts from priest (en) to king (lugal) + L4 cuneiform born c. 3350-3200 BCE → c. 2334 BCE Sargon conquers the city-states, founds humanity\'s first known empire (Akkad) → irrigation drives salinization, seeding later decline',
  },

  // keyFigures 留空 — 自动从 mesopotamia-3500bce.js 的 3 个 lens 派生 (AUTHORING_PIPELINE 第9条)
  keyFigures: [],
};

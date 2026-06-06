// view: Persian (Achaemenid) Empire · BC 550-330 · Cyrus → Darius → Alexander
// Grade 6 · CA HSS 6.x (Persia) · AP World 古典帝国行政
// keyFigures 留空 — 自动从 lib/history-storyboards/persian-empire-550bce.js 的 3 个 lens 派生
//   (AUTHORING_PIPELINE 第9条: deepLearn Topic 严禁 hardcode keyFigures)
export const VIEW = {
  id: 'persian-empire',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/persian-empire-550bce?from=atlas&atlasId=persian-empire',
  grade: 6,
  topicTier: 'core',
  standardsAlignment: [],
  title:    { cn: '波斯帝国（阿契美尼德）', en: 'Persian (Achaemenid) Empire' },
  subtitle: { cn: 'BC 550-330 · 第一个横跨三大洲、靠宽容治理多民族的超级帝国', en: 'BC 550-330 · The first three-continent superstate ruling many peoples through tolerance' },
  year: -550,

  camera: {
    projection: 'mercator',
    center: [52, 33],
    scale: 480,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
  },

  causalSummary: {
    cn: 'L0 核心在伊朗高原（古称波斯 Persis）+ 鼎盛从爱琴海与埃及到印度河流域，横跨三大洲、当时世界最大 + L1 高原干旱靠 qanat 坎儿井引雪山水 / 帝国内气候差异极大没一套办法适合所有地方 + L2 极端多民族多语言多信仰 / 波斯人是统治少数 / 像管理一个「民族拼盘」不强行抹平差异 + L3 satrapy 约20行省 + 分权制衡（satrap / 军事官 / 王的「眼睛和耳朵」）+ 标准化 daric 金币 + Aramaic 行政通用语 + Susa→Sardis 约2500公里 Royal Road 御道 + 宗教宽容作治理术（王奉 Ahura Mazda 但不强迫改信，资助各地神庙）+ L4 约前550 居鲁士败米底王 Astyages 起 → 前539 攻巴比伦放归犹太人 → 前522 大流士整理帝国 + Behistun 铭文 → 前490/480 远征希腊受挫 → 前330 亚历山大灭波斯，末代王大流士三世被 satrap Bessus 所杀，立国约220年',
    en: 'L0 core on the Iranian plateau (ancient Persis) + at its height stretching from the Aegean and Egypt to the Indus, spanning three continents, the largest empire of its time + L1 an arid plateau watered by qanat underground channels / climates so varied no single method fit everywhere + L2 extremely multi-ethnic, multilingual, multi-faith / Persians a ruling minority / run like a "mosaic of peoples," not flattening difference + L3 ~20 satrapies + checks and balances (satrap / military commander / the king\'s "eyes and ears") + standardized daric gold coin + Aramaic as the administrative language + the ~2,500 km Susa-to-Sardis Royal Road + religious tolerance as a tool of rule (the king honored Ahura Mazda but did not force conversion, funding local temples) + L4 c. 550 BCE Cyrus beats the Median king Astyages → 539 takes Babylon, frees the Jews → 522 Darius sorts the empire + the Behistun inscription → 490/480 failed Greek campaigns → 330 Alexander destroys Persia, the last king Darius III killed by the satrap Bessus, after about 220 years',
  },

  keyFigures: [],
};

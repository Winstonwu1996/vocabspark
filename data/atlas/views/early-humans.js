// view: Early Humans & the Neolithic Revolution · 约前 10000 · Fertile Crescent (肥沃新月地带)
// CA HSS Grade 6.1 · AP World CED Unit 1 前置 (农业→定居→剩余→国家 物质链地基课)
// keyFigures 留空 — 自动从 lib/history-storyboards/early-humans-10000bce.js 的 3 个 lens 派生
//   (AUTHORING_PIPELINE 第9条: deepLearn Topic 严禁 hardcode keyFigures)
// 地理中心: Göbekli Tepe / 肥沃新月核心 (今土耳其东南), 约 38.9°E, 37.2°N
export const VIEW = {
  id: 'early-humans',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/early-humans-10000bce?from=atlas&atlasId=early-humans',
  grade: 6,
  topicTier: 'core',                 // 古代世界轨第一课 + 农业多中心起源 (AP comparison/causation 王牌)
  standardsAlignment: [
    { code: 'CA-HSS-6.1',   label: { cn: 'CA HSS 6.1 早期人类与农业革命（六年级世界史）', en: 'CA HSS 6.1 Early Humans & the Agricultural Revolution (Grade 6 world history)' } },
    { code: 'AP-WHAP-U1',   label: { cn: 'AP World Unit 1 前置 · 农业→定居→剩余→国家 物质链', en: 'AP World Unit 1 (pre-) · the farming → settling → surplus → state chain' } },
    { code: 'HIST-THINK',   label: { cn: '史学思维 · 延续与变化 / 因果 / 比较', en: 'Historical thinking · continuity & change / causation / comparison' } },
  ],
  title:    { cn: '早期人类与新石器革命', en: 'Early Humans & the Neolithic Revolution' },
  subtitle: { cn: '约前 10000 · 人类从「跟着大地走」到「让大地围着自己转」的转弯', en: 'c. 10000 BCE · the turn from "following the land" to "making the land circle us"' },
  year: -9500,

  camera: {
    projection: 'mercator',
    center: [38.9, 37.2],
    scale: 700,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      yearSnapshot: 'world_bc2000',   // 无新石器底图；同代古代课(mesopotamia/indus/egypt)统一用 bc2000 最接近的快照
    },
    // C (civs overlay) 略 — 新石器时代无对应 civs 图层 key
  },

  causalSummary: {
    cn: 'L0 人类故事起点在非洲 (智人约 30 万年前起源, 约 6-7 万年前走出非洲, 全程狩猎采集者踏遍除南极外每块大陆); 农业第一现场在肥沃新月地带 (Fertile Crescent) — 现成的「驯化套餐」: 野生小麦大麦 + 可驯化的绵羊山羊牛猪 + L1 约 1.15 万年前冰期结束进入温暖稳定的全新世 (Holocene), 气候可预测才敢把命押在种子上 + L2 农业前几十人小队 (band) 游动/相对平等; 农业后定居/存粮, Jericho 约前 7000 两三千人围石墙, Çatalhöyük 约前 7500 数千人无街道从屋顶进门 + L3 三条底层规则改写: 土地变财产 / 粮食可存可集中可收税 / 剩余粮食→分工 (祭司工匠士兵管粮人), 文明所有零件从「剩余」长出; 不平等同时萌芽 (谁管粮仓谁有权) + L4 Göbekli Tepe (约前 9500, 还没务农的狩猎采集者建的巨型 T 形石阵) 把因果倒过来: 很可能是「想聚在一起办大事」的信仰先推人定居多种粮 (有争议假说, 非定论) + 农业多中心独立起源 — 西亚小麦 / 中国黄河粟约前 8000 + 长江稻约距今一万年 (两个各自独立中心) / 中美洲玉米, 谁也没抄谁',
    en: 'L0 humanity\'s story begins in Africa (Homo sapiens originated c. 300k years ago, left Africa c. 60-70k years ago, roaming every continent except Antarctica as hunter-gatherers the whole way); farming\'s first stage is the Fertile Crescent — a ready "domestication starter pack": wild wheat and barley + domesticable sheep, goats, cattle, pigs + L1 around 11,500 years ago the ice age ended and the warm, steady Holocene began; only a predictable climate let people bet their lives on seeds + L2 before farming, roaming bands of a few dozen, relatively equal; after farming, settling and stored grain — Jericho c. 7000 BCE with 2,000-3,000 people behind a stone wall, Çatalhöyük c. 7500 BCE with thousands, no streets, entered through the roof + L3 three underlying rules rewritten: land becomes property / grain can be stored, concentrated, taxed / surplus → division of labor (priests, craftsmen, soldiers, granary-keepers), every part of civilization grows from surplus; inequality sprouts at the same time (whoever keeps the granary holds power) + L4 Göbekli Tepe (c. 9500 BCE, a giant T-pillar ring built by hunter-gatherers who did not yet farm) reverses the causation: faith — "wanting to gather and do something great" — may have driven people to settle and grow more grain first (a contested hypothesis, not settled) + farming has multiple independent origins — western Asian wheat / China\'s Yellow River millet c. 8000 BCE + Yangtze rice c. 10,000 years ago (two independent centers) / Mesoamerican maize, none copied from another',
  },

  keyFigures: [],
};

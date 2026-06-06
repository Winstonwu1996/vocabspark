// view: Indus Valley (Harappan) Civilization · c. 2600-1900 BCE · 印度河流域
// CA HSS Grade 6.5 (古印度起点) + World History 早期河流文明 (印度河 vs 两河 vs 埃及 vs 中国)
// keyFigures 留空 — 自动从 lib/history-storyboards/indus-valley-2600bce.js 的 3 个 lens 派生
//   (AUTHORING_PIPELINE 第9条: deepLearn Topic 严禁 hardcode keyFigures)
export const VIEW = {
  id: 'indus-valley',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/indus-valley-2600bce?from=atlas&atlasId=indus-valley',
  grade: 6,
  topicTier: 'core',                 // 四大早期文明对照 + 「文明是否必然走向集权」高阶 DBQ
  standardsAlignment: [
    { code: 'CA-HSS-6.5',  label: { cn: 'CA HSS 6.5 古印度（从印度河流域文明讲起）', en: 'CA HSS 6.5 Ancient India (beginning with the Indus Valley)' } },
    { code: 'WHIST-EARLY-CIV',  label: { cn: 'World History 早期河流文明（四大文明对照）', en: 'World History — Early River Civilizations (four-civilization comparison)' } },
  ],
  title:    { cn: '印度河流域文明', en: 'Indus Valley Civilization' },
  subtitle: { cn: '约前2600–前1900 · 四大早期文明中面积最大，却看不见一个王', en: 'c. 2600-1900 BCE · The largest of the four early civilizations, yet with no king in sight' },
  year: -2600,

  camera: {
    projection: 'mercator',
    center: [70, 28],
    scale: 900,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      yearSnapshot: 'world_bc2000',   // 无 2600 BCE 底图；同代 mesopotamia/egypt 也用 bc2000 最接近的古代快照
    },
    // C (civs overlay) 略 — 2600 BCE 无对应 civs 图层 key（同代 mesopotamia/egypt 同样不挂 C）
  },

  causalSummary: {
    cn: 'L0 印度河及其支流冲积的大平原 (横跨今巴基斯坦、印度西北、阿富汗东缘)，最盛分布约100万平方公里 — 四大早期文明中面积最大 + 沿已基本干涸的 Ghaggar-Hakra 古河道密布遗址 + L1 依赖季风雨与河泛淤泥种麦/大麦/棉 (世界最早种棉织棉之一)，洪水既肥沃又是威胁 + L2 全盛约1-5百万人 / 大城 Mohenjo-daro、Harappa 各约3-6万 / 房屋贫富差距不明显 (有学者称「可能最平等的早期复杂社会」，但「看不见精英」不等于「没有精英」) + L3 高度标准化 (同规格烧砖、网格街道、几百公里跨城几乎一致的石制砝码) 必有协调，但 Indus script 未解读、制度成黑箱: 国王? 祭司会? 商会? 还是无词可称的安排? + L4 几乎无可定年月日的「事件」，只有阶段: 约前2600 成熟期始 (大城同鼎盛) → 与两河 Meluhha 贸易 (Sargon 铭文 + Ur/Susa 出土红玉髓珠) → 约前1900 季风减弱、Ghaggar-Hakra 干涸 → 逐步去城市化、人口东迁 (淡出非蒸发，主流已否定雅利安入侵毁灭说) + 1920s Sahni/Banerji 发掘、1924 Marshall 宣布',
    en: 'L0 the great plain built by the Indus and its tributaries (across today\'s Pakistan, northwest India, and eastern Afghanistan), at its height spanning about 1,000,000 sq km — the largest of the four early civilizations + dense sites along the now largely dried Ghaggar-Hakra channel + L1 reliance on monsoon rains and flood silt to grow wheat, barley, and cotton (one of the earliest places to grow and weave cotton), floods both fertile and a threat + L2 a peak of roughly 1-5 million people / great cities Mohenjo-daro and Harappa about 30k-60k each / little visible wealth gap between houses (some scholars call it "perhaps the most equal early complex society," but "no elite found" is not "no elite") + L3 high standardization (uniform fired bricks, grid streets, stone weights nearly identical across cities hundreds of km apart) implies coordination, yet the Indus script is undeciphered and the system is a black box: a king? a body of priests? a merchant council? an arrangement we have no word for? + L4 almost no datable "events," only phases: ~2600 BCE the Mature period begins (great cities flourish together) → trade with Mesopotamia\'s Meluhha (Sargon\'s inscription + carnelian beads dug at Ur/Susa) → ~1900 BCE the monsoon weakens, the Ghaggar-Hakra dries → gradual de-urbanization and eastward migration (a fade, not a vanish; mainstream scholarship rejects the Aryan-invasion destruction theory) + 1920s excavations by Sahni/Banerji, announced by Marshall in 1924',
  },

  keyFigures: [],
};

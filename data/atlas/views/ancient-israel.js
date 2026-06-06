// view: Ancient Israel & the Origins of Monotheism · ~586 BCE · Levant / Babylon
// CA HSS Grade 6.3 (Ancient Hebrews & monotheism) · AP World Unit 1.2 (ancient religions)
// keyFigures 留空 — 自动从 lib/history-storyboards/ancient-israel-1000bce.js 的 3 个 lens 派生
//   (AUTHORING_PIPELINE 第9条: deepLearn Topic 严禁 hardcode keyFigures)
// 注: 区别于 supplementary 的 ancient-hebrews 视角 (BC 950 所罗门盛世) —
//   本视角是一神教起源 core 课, 重心在前 586 巴比伦之囚这条"失败锻造信仰"的弧线。
export const VIEW = {
  id: 'ancient-israel',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/ancient-israel-1000bce?from=atlas&atlasId=ancient-israel',
  grade: 6,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-6.3', label: { cn: 'CA HSS-6.3 古代希伯来人与一神论', en: 'CA HSS-6.3 Ancient Hebrews & monotheism' } },
    { code: 'AP-WHAP-1.2', label: { cn: 'AP World Unit 1.2 古代宗教传统', en: 'AP World Unit 1.2 Ancient religious traditions' } },
  ],
  title:    { cn: '古以色列与一神教的起源', en: 'Ancient Israel & the Origins of Monotheism' },
  subtitle: { cn: '约前 586 · 最彻底的失败，锻造出最坚固的信仰', en: 'c. 586 BCE · The most utter defeat forged the most solid faith' },
  year: -586,

  camera: {
    projection: 'mercator',
    center: [35.2, 31.8],
    scale: 2200,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      yearSnapshot: 'world_bc500',
    },
    C:  { civs: 'classical-bc500' },
  },

  causalSummary: {
    cn: 'L0 古以色列位于地中海东岸一条窄长走廊 — 史称黎凡特 (Levant) / 迦南 (Canaan), 卡在两大文明之间 (南边埃及 + 东北边美索不达米亚的亚述、巴比伦), 是连接非洲与亚洲的唯一陆桥, 所有大军必经此处 + L1 南部干旱多山, 靠季节性早雨晚雨种麦子橄榄、放牧羊群, 这种"对天吃饭"的脆弱让"神是否赐雨、是否守约"成为日常生死攸关的问题 + L2 起初是若干以血缘为纽带的部落, 早期普通人并非纯粹一神教徒 (考古与文本显示很多人同时敬 YHWH 与迦南本地神 Baal、Asherah) + L3 核心制度是 covenant (圣约, 希伯来语 brit) — 神与子民之间双向有责任的契约, 政教一体 + L4 约前 622 约西亚 (Josiah) 集中崇拜改革 → 前 586 新巴比伦王尼布甲尼撒攻破耶路撒冷、烧第一圣殿、掳走犹大精英 (巴比伦之囚) → 流亡中先知 (耶利米、以西结) 把惨败解释成"神的管教"而非失败、把信仰从圣殿转向经卷 (Torah) → 前 539/538 波斯王居鲁士放归、重建第二圣殿; 一神教在最绝望的流亡者手里被一步步锻造成型',
    en: 'L0 Ancient Israel sat on a long narrow corridor on the eastern Mediterranean coast — the Levant / Canaan — wedged between two great civilizations (Egypt to the south, the Assyrian and Babylonian Mesopotamia to the northeast), the only land bridge linking Africa and Asia, which every army had to cross + L1 the arid, hilly south depended on seasonal early and late rains for wheat and olives and on herding flocks, and this rain-dependent fragility made "does the god send rain, does the god keep the covenant" a daily life-or-death question + L2 originally several kin-based tribes; early ordinary people were not pure monotheists (archaeology and texts show many worshipped YHWH alongside the local Canaanite gods Baal and Asherah) + L3 the core institution was the covenant (brit in Hebrew) — a two-way, mutually binding pact between god and people, with religion and law fused + L4 c. 622 BCE Josiah\'s reform concentrated worship → 586 BCE the Neo-Babylonian king Nebuchadnezzar broke Jerusalem, burned the First Temple, and carried off Judah\'s elite (the Babylonian Exile) → in exile the prophets (Jeremiah, Ezekiel) read the crushing defeat as "the god disciplining us," not defeat, and shifted faith from the Temple to the scroll (Torah) → 539/538 BCE the Persian king Cyrus released the exiles and the Second Temple was rebuilt; monotheism was forged step by step in the hands of the most despairing of exiles',
  },

  keyFigures: [],
};

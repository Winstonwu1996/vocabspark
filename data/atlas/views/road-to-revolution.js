// view: The Road to Revolution · 1763-1774 · 13 Colonies + Ohio Country (今美东 + 阿巴拉契亚以西)
// US History HSS Grade 8.1 / APUSH Period 3 · 帝国危机与"革命无因"的十年 (法印战争 → 第一次大陆会议)
// keyFigures 留空 — 自动从 lib/history-storyboards/road-to-revolution-1763.js 的 3 个 lens 派生
//   (AUTHORING_PIPELINE 第9条: deepLearn Topic 严禁 hardcode keyFigures)
export const VIEW = {
  id: 'road-to-revolution',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/road-to-revolution-1763?from=atlas&atlasId=road-to-revolution',
  grade: 8,
  topicTier: 'core',                 // APUSH Period 3 因果链 + CA HSS-8.1 开篇必考
  standardsAlignment: [
    { code: 'CA-HSS-8.1',   label: { cn: 'CA HSS-8.1 美国独立的事件与思想根源（初中美国史）', en: 'CA HSS-8.1 Roots of American Independence (US history grade 8)' } },
    { code: 'APUSH-3.2',    label: { cn: 'APUSH Period 3 Topic 3.2 七年战争', en: 'APUSH Period 3 Topic 3.2 Seven Years\' War' } },
    { code: 'APUSH-3.3',    label: { cn: 'APUSH Period 3 Topic 3.3 无代表不纳税', en: 'APUSH Period 3 Topic 3.3 Taxation without Representation' } },
    { code: 'APUSH-3.4',    label: { cn: 'APUSH Period 3 Topic 3.4 哲学根基', en: 'APUSH Period 3 Topic 3.4 Philosophical Foundations' } },
  ],
  title:    { cn: '通往独立之路', en: 'The Road to Revolution' },
  subtitle: { cn: '1763-1774 · 为什么放烟花庆祝胜利的英国臣民，十一年后走到了起兵边缘', en: '1763-1774 · Why subjects who celebrated victory walked to the brink of revolt eleven years later' },
  year: 1763,

  camera: {
    projection: 'mercator',
    center: [-77, 40],
    scale: 1400,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
  },

  causalSummary: {
    cn: 'L0 北美大西洋沿岸 13 个英属殖民地 (北起新英格兰南到佐治亚) + 西隔阿巴拉契亚山脉、山那边是三方争夺的俄亥俄河谷 (Ohio Country) + L1 两个主场: 西部边疆 (森林·河流·毛皮商站·孤立的英军要塞, 1763 被 Pontiac 联军围攻) 与东部港口波士顿 (石板街·码头·海关·酒馆, 1770.3.5 飘雪夜惨案就发生在海关楼前) + L2 约 200 多万人 (含约 50 万被奴役者约五分之一) / 识字率与报纸普及率极高 — 所以印花税打在纸上等于得罪最会写最会串联的律师商人报人印刷工 + L3 几十年 salutary neglect 有益的忽视下高度自治, 冲突核心是 virtual representation 虚拟代表 vs actual representation 实际代表两套宪政观对撞 + L4 1754-63 法印战争 → 1763.2.10 巴黎和约 (法国退出北美·国债约 7500 万→1.33 亿) → 1763 春 Pontiac 起义 → 1763.10.7 宣言线 → 糖税→印花税+驻军法→印花税大会→撤税但发宣告法→汤森法→1770.3.5 波士顿惨案→留茶税→1773.12.16 倾茶→1774 不可容忍法→1774.9 第一次大陆会议',
    en: 'L0 thirteen British colonies along the North American Atlantic coast (from New England in the north to Georgia in the south) + west across the Appalachian Mountains lies the three-way-contested Ohio Country + L1 two main stages: the western frontier (forests, rivers, fur posts, isolated British forts besieged by Pontiac\'s alliance in 1763) and the eastern port of Boston (cobbled streets, docks, customs house, taverns, where the Massacre struck outside the customs house on the snowy night of March 5, 1770) + L2 over two million people (including about 500,000 enslaved, roughly a fifth) / unusually high literacy and newspaper density — so the Stamp Act on paper angered the lawyers, merchants, printers, and writers best at organizing + L3 decades of salutary neglect bred wide self-rule; the core conflict was virtual representation versus actual representation, two clashing constitutional views + L4 1754-63 French & Indian War → Feb 10 1763 Treaty of Paris (France leaves N. America; debt from ~75M to ~133M) → spring 1763 Pontiac\'s War → Oct 7 1763 Proclamation Line → Sugar Act → Stamp Act + Quartering Act → Stamp Act Congress → repeal but Declaratory Act → Townshend Acts → Mar 5 1770 Boston Massacre → keep tea tax → Dec 16 1773 Tea Party → 1774 Intolerable Acts → Sep 1774 First Continental Congress',
  },

  keyFigures: [],
};

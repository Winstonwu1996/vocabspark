// view: Spanish-American War & American Empire · 1898 · Western Pacific (Philippines + carved-up China coast)
// APUSH Period 7 (1890-1945) · CED Topic 7.3「The Spanish-American War」/ CA HSS 8.12 & 11.4
// 镜头放在西太平洋：马尼拉湾 (跨视角锚点 + default 菲律宾视角) + 同时代被瓜分的中国海岸 (中国桥)。
//   这场「为古巴」的战争第一炮打在菲律宾，因为那里是通往「中国市场」的跳板 — 默认视角与中国桥都在这一格。
// keyFigures 留空 — 自动从 lib/history-storyboards/spanish-american-war-1898.js 的 3 个 lens 派生
//   (AUTHORING_PIPELINE 第9条: deepLearn Topic 严禁 hardcode keyFigures)
export const VIEW = {
  id: 'spanish-american-war',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/spanish-american-war-1898?from=atlas&atlasId=spanish-american-war',
  grade: 8,
  topicTier: 'core',                 // APUSH Period 7 开场必考 (扩张派 vs 反帝派大辩论)
  standardsAlignment: [
    { code: 'APUSH-7.3',  label: { cn: 'APUSH Period 7 · Topic 7.3 美西战争', en: 'APUSH Period 7 · Topic 7.3 The Spanish-American War' } },
    { code: 'APUSH-7.2',  label: { cn: 'APUSH Period 7 · Topic 7.2 帝国之辩', en: 'APUSH Period 7 · Topic 7.2 Imperialism: Debates' } },
    { code: 'CA-HSS-11.4', label: { cn: 'CA HSS-11.4 美国成为世界大国', en: 'CA HSS-11.4 The Rise of the United States to a World Power' } },
  ],
  title:    { cn: '美西战争与美国海外帝国', en: 'The Spanish-American War & American Empire' },
  subtitle: { cn: '1898 · 一个靠「反抗帝国」立国的共和国，自己成了跨两洋的帝国', en: '1898 · A republic founded against empire becomes an empire across two oceans' },
  year: 1898,

  camera: {
    projection: 'mercator',
    center: [120, 16],
    scale: 700,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
  },

  causalSummary: {
    cn: 'L0 舞台横跨两个大洋：加勒比 (古巴离佛州 145 公里 + 波多黎各) + 太平洋 (菲律宾靠近中国 + 关岛 + 夏威夷太平洋正中) + L1 钢铁海军 + 电报 + 黄色新闻 (一两美分耸动头版) + 古巴 reconcentration 营地平民病饿死 + L2 1890 西部边疆关闭 / 工厂过剩盯「中国市场」/ 带种族色彩的「文明等级」观 + L3 《独立宣言》「被治者同意」对撞统治别国 / Teller 修正案 (无意吞并古巴) vs Platt 修正案 (1901 干涉权+关塔那摩) + L4 1898.2.15 Maine 哈瓦那港爆炸 (原因至今无定论) → 5.1 Dewey 马尼拉湾全歼西班牙舰队 → 7 月圣胡安岭 Rough Riders → 7.7 吞并夏威夷 → 8 月停火「a splendid little war」→ 12.10 巴黎条约 (割波多黎各关岛 / 2000 万美元卖菲律宾) → 1899 菲美战争 (至少 20 万菲平民死) → 1899-1900 John Hay 门户开放对接被列强瓜分的中国 (德强租胶州湾 / 俄租旅顺大连 / 英租威海卫 / 法租广州湾) + 1900 义和团 / 八国联军 (含美军)',
    en: 'L0 a stage across two oceans: the Caribbean (Cuba 90 miles from Florida + Puerto Rico) + the Pacific (the Philippines near China + Guam + Hawaii mid-Pacific) + L1 a steel navy + the telegraph + yellow journalism (one- or two-cent sensational front pages) + Spanish reconcentration camps where Cuban civilians died of disease and hunger + L2 the 1890 closed western frontier / factory overflow eyeing the "China market" / a race-tinged "ladder of civilization" + L3 the Declaration\'s "consent of the governed" colliding with ruling other peoples / the Teller Amendment (no intent to annex Cuba) vs the Platt Amendment (1901 right to intervene + Guantanamo) + L4 Feb 15 1898 the Maine explodes in Havana harbor (cause never settled) → May 1 Dewey destroys Spain\'s fleet at Manila Bay → July San Juan ridge and the Rough Riders → July 7 annexation of Hawaii → Aug ceasefire, "a splendid little war" → Dec 10 Treaty of Paris (Puerto Rico and Guam ceded / the Philippines "sold" for $20M) → 1899 the Philippine-American War (at least 200,000 Filipino civilians die) → 1899-1900 John Hay\'s Open Door meeting a China carved up by the powers (Germany forces a lease on Jiaozhou Bay / Russia leases Port Arthur and Dalian / Britain leases Weihaiwei / France leases Guangzhouwan) + 1900 the Boxers / the Eight-Nation Alliance (including U.S. troops)',
  },

  keyFigures: [],
};

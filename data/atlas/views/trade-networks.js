// view: Afro-Eurasian Trade Networks · 1200-1450 · 丝路 + 印度洋 + 跨撒哈拉
// AP World History Unit 2 (Networks of Exchange, 占考纲 8-10%) · CA HSS 7 中世纪贸易
// keyFigures 留空 — 自动从 lib/history-storyboards/trade-networks-1200.js 的 3 个 lens 派生
//   (AUTHORING_PIPELINE 第9条: deepLearn Topic 严禁 hardcode keyFigures)
// camera.center: [50, 22] = 阿拉伯海 / 印度洋圈的地理中枢, 兼顾西非—中亚—东非—中国—东南亚的跨度
export const VIEW = {
  id: 'trade-networks',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/trade-networks-1200?from=atlas&atlasId=trade-networks',
  grade: 7,
  topicTier: 'core',                 // AP World Unit 2.1-2.7 高频 (三网比较 + 流动的不只是货 + 连通双刃)
  standardsAlignment: [
    { code: 'AP-WHAP-2.1', label: { cn: 'AP World Unit 2.1 丝绸之路', en: 'AP World Unit 2.1 The Silk Roads' } },
    { code: 'AP-WHAP-2.4', label: { cn: 'AP World Unit 2.4 印度洋贸易圈', en: 'AP World Unit 2.4 Trade in the Indian Ocean' } },
    { code: 'AP-WHAP-2.7', label: { cn: 'AP World Unit 2.7 交流网络的成因与后果', en: 'AP World Unit 2.7 Causes and effects of networks of exchange' } },
    { code: 'CA-HSS-7',    label: { cn: 'CA HSS 7 中世纪世界贸易', en: 'CA HSS Grade 7 Medieval world trade' } },
  ],
  title:    { cn: '三网相连', en: 'Afro-Eurasian Trade Networks' },
  subtitle: { cn: '1200-1450 · 丝绸之路 · 印度洋季风贸易 · 跨撒哈拉黄金盐路', en: '1200-1450 · Silk Roads · Indian Ocean monsoon trade · Trans-Saharan gold-salt road' },
  year: 1324,

  camera: {
    projection: 'mercator',
    center: [50, 22],
    scale: 260,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      yearSnapshot: 'world_1300',
    },
    C:  { civs: 'eurasia-1347' },
  },

  causalSummary: {
    cn: 'L0 三张网各有地形剧本: 丝路东起中国穿中亚绿洲城市 (撒马尔罕) 到地中海 / 印度洋半月形海岸网 (东非斯瓦希里海岸—阿拉伯—印度西海岸卡利卡特—马六甲—中国) / 跨撒哈拉南接西非萨赫勒黄金、北接北非盐、中隔世界最大热沙漠 + L1 季风是印度洋引擎 (约 4-9 月西南季风往东北、10 月-次年 3 月东北季风往西南, 商人掐风的时刻表走、错季在异乡港口等半年 → 催生侨民社群) / 撒哈拉滴水成命靠绿洲井接力、骆驼是沙漠之舟 / 丝路中亚靠 caravanserai 商旅客栈 + L2 网络制造中介 (没人走全程, 财富集中在换手城市与换手的人手里), 最底层是脚夫水手骆驼夫与沿同路线被买卖的被奴役者 + L3 Pax Mongolica 蒙古和平统一丝路治安驿站、大幅降低长途贸易风险 / 信用工具 (汇票合伙契约) / 伊斯兰作为商业操作系统 (共享法律、阿拉伯语、信任、shahada) 把分散港口黏成一张网 + L4 1219-1260s 蒙古西征建 Pax Mongolica → 1324 曼萨·穆萨携巨量黄金赴麦加朝觐沿途散金压低开罗金价 → 1325-1354 伊本·白图泰走遍三网著《Rihla》 → 1347-1351 黑死病沿同一张网扑向欧亚非夺命可能三分之一: 让世界变富的网也成了瘟疫的高速路',
    en: 'L0 three networks, each with its own terrain script: the Silk Roads from northwest China through Central Asian oasis cities (Samarkand) to the Mediterranean / the Indian Ocean crescent-shaped coastal web (East African Swahili coast—Arabia—India\'s west coast Calicut—Malacca—China) / the Trans-Saharan road joining West African Sahel gold in the south to North African salt in the north across the world\'s largest hot desert + L1 the monsoon is the Indian Ocean\'s engine (about Apr-Sep the southwest monsoon blows northeast, Oct-Mar the northeast monsoon blows southwest, merchants sail by the wind timetable, miss the season and wait half a year in a foreign port, breeding diaspora communities) / the Sahara is a world of water-as-life relayed through oasis wells, the camel its ship / the Central Asian Silk Road runs on the caravanserai roadside inn + L2 the network manufactures middlemen (no one travels end to end, wealth concentrates in hand-off cities and hand-off people), and at the bottom are porters, sailors, camel drivers, and the enslaved bought and sold along the same routes + L3 the Pax Mongolica unified Silk Road policing and relay stations, sharply lowering long-distance trade risk / credit tools (bills of exchange, partnership contracts) / Islam as a commercial operating system (shared law, Arabic, trust, the shahada) gluing scattered ports into one web + L4 1219-1260s Mongol campaigns build the Pax Mongolica → 1324 Mansa Musa carries vast gold on the hajj to Mecca, scattering it and depressing Cairo\'s gold price → 1325-1354 Ibn Battuta walks all three networks and writes the Rihla → 1347-1351 the Black Death rushes across Eurasia and Africa along the same web, taking perhaps a third of the people: the web that made the world rich also became the plague\'s highway',
  },

  keyFigures: [],
};

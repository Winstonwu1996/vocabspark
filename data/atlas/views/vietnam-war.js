// view: The Vietnam War · 1965-1975 · Vietnam (越南)
// APUSH Period 8 (1945-1980) · 8.9 越战与 1960 年代社会运动 · 冷战在亚洲的战场
// keyFigures 留空 — 自动从 lib/history-storyboards/vietnam-war-1965.js 的 3 个 lens 派生
//   (AUTHORING_PIPELINE 第9条: deepLearn Topic 严禁 hardcode keyFigures)
export const VIEW = {
  id: 'vietnam-war',
  deepLearnEnabled: true,
  deepLearnUrl: '/history/vietnam-war-1965?from=atlas&atlasId=vietnam-war',
  grade: 11,
  topicTier: 'core',                 // APUSH 8.9 高频 DBQ (1960s 社会运动相互激荡 / Vietnamese-centered history)
  standardsAlignment: [
    { code: 'APUSH-8.1',  label: { cn: 'APUSH KC-8.1.II 冷战遏制与越战升级', en: 'APUSH KC-8.1.II Cold War containment and escalation in Vietnam' } },
    { code: 'APUSH-8.9',  label: { cn: 'APUSH 8.9 越战与 1960 年代社会运动', en: 'APUSH 8.9 The Vietnam War and 1960s social movements' } },
    { code: 'CA-HSS-11.9', label: { cn: 'CA HSS-11.9 美国冷战外交（高中美国史）', en: 'CA HSS-11.9 U.S. Cold War foreign policy (HS U.S. history)' } },
  ],
  title:    { cn: '越南战争', en: 'The Vietnam War' },
  subtitle: { cn: '1965-1975 · 一场美国至今未达成统一对错结论的战争', en: '1965-1975 · A war on which America still holds no single verdict' },
  year: 1965,

  camera: {
    projection: 'mercator',
    center: [107, 16],
    scale: 1100,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
  },

  causalSummary: {
    cn: 'L0 越南是中南半岛东侧一条狭长的国家 + 1954 法国战败撤出后《日内瓦协议》以北纬 17 度线把越南分成北越 (首都 Hanoi 河内, 共产党, 胡志明为首) 和南越 (首都 Saigon 西贡, 亲西方) + 地形多丛林山地与湄公河三角洲水网 (对游击战极有利, 对依赖坦克飞机的美军极不利) + L1 热带季风/闷热暴雨泥泞 + 看不见的敌人 Viet Cong 白天农民晚上战士藏村庄地道 (My Lai 这类悲剧的土壤) + L2 南越农业社会大多是种稻农民 (冷战大词离他们很远) / 美国正被青年文化与民权运动搅动 + L3 法理依据 1964《东京湾决议》近乎空白支票 (从未正式宣战) + 征兵制约 220 万被征/富人靠缓征逃过/穷人少数族裔承担不成比例伤亡 (反战核心引信) + L4 1964.8 东京湾事件 → 1965.3 地面部队岘港登陆 + Rolling Thunder 大轰炸 → 1968.1-2 Tet 春节攻势 (军事失败政治转折/credibility gap) → 1968.3 My Lai 屠杀 (1969 曝光) → 1970.5 Kent State 枪击 → 1973.1 巴黎协定美军撤出 → 1975.4.30 西贡陷落越南统一 + §8 同时性: 美国 (越战撕裂) / 中国 (文革 + 抗美援越逾 32 万人 + 中苏分裂) / 越南 (夹在炮火中间, 平民死亡约 200 万) 是同一场冷战风暴吹向三地',
    en: 'L0 Vietnam is a long narrow country on the eastern side of the Indochina peninsula + after France\'s 1954 defeat the Geneva Accords split it at the 17th parallel into North Vietnam (capital Hanoi, communist, led by Ho Chi Minh) and South Vietnam (capital Saigon, pro-Western) + terrain mostly jungle, mountains, and the watery Mekong Delta (perfect for guerrilla war, terrible for a U.S. army reliant on tanks and planes) + L1 tropical monsoon, hot rains and mud + an invisible enemy, the Viet Cong, farmers by day and fighters by night hidden in villages and tunnels (the soil of tragedies like My Lai) + L2 South Vietnam an agrarian society of rice farmers (the Cold War\'s big words far from them) while America is stirred by youth culture and the civil rights movement + L3 the legal basis is the 1964 Gulf of Tonkin Resolution, a near-blank check (no formal declaration of war) + the draft, ~2.2 million called, the rich escaping via deferments, the poor and minorities bearing disproportionate casualties (a core fuse of the anti-war movement) + L4 Aug 1964 Gulf of Tonkin incident -> Mar 1965 ground troops land at Da Nang plus the Rolling Thunder bombing -> Jan-Feb 1968 Tet Offensive (military failure, political turning point, credibility gap) -> Mar 1968 My Lai Massacre (exposed 1969) -> May 1970 Kent State shootings -> Jan 1973 Paris Accords and U.S. withdrawal -> Apr 30 1975 Fall of Saigon and unification + the simultaneity of three upheavals: America (torn by the war), China (the Cultural Revolution + over 320,000 troops sent to aid Vietnam + the Sino-Soviet split), and Vietnam (caught in the fire, ~2 million civilian deaths), one Cold War storm blowing toward three places',
  },

  keyFigures: [],
};

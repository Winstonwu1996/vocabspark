// view: Cold War + Decolonization · 1962 · Global
// Grade 8 · supplementary (extended-ap) · AP World Unit 8 / AP USH 8 / CA HSS-11
export const VIEW = {
  id: 'cold-war',
  grade: 8,
  topicTier: 'supplementary',
  tierType: 'extended-ap',
  standardsAlignment: [
    { code: 'CA-HSS-11.9',  label: { cn: 'CA HSS-11.9 战后美国外交政策 / 冷战', en: 'CA HSS-11.9 Postwar US foreign policy / Cold War' } },
    { code: 'AP-WHAP-8.2',  label: { cn: 'AP World Unit 8.2 冷战', en: 'AP World Unit 8.2 The Cold War' } },
    { code: 'AP-WHAP-8.3',  label: { cn: 'AP World Unit 8.3 冷战的影响', en: 'AP World Unit 8.3 Effects of the Cold War' } },
    { code: 'AP-WHAP-8.5',  label: { cn: 'AP World Unit 8.5 二战后非殖民化', en: 'AP World Unit 8.5 Decolonization after 1900' } },
    { code: 'AP-WHAP-8.8',  label: { cn: 'AP World Unit 8.8 冷战终结', en: 'AP World Unit 8.8 End of the Cold War' } },
    { code: 'AP-USH-8.7',   label: { cn: 'AP US 8.7 美国作为世界强权', en: 'AP US 8.7 America as a world power' } },
    { code: 'AP-USH-8.8',   label: { cn: 'AP US 8.8 越南战争', en: 'AP US 8.8 The Vietnam War' } },
  ],
  title:    { cn: '冷战 + 非殖民化', en: 'Cold War + Decolonization' },
  subtitle: { cn: '1962 · 古巴导弹危机 · 美苏两极 + 第三世界崛起', en: '1962 · Cuban Missile Crisis · US-USSR bipolarity + Third World rises' },
  year: 1962,

  camera: {
    projection: 'mercator',
    center: [20, 30],
    scale: 130,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'cold-war-1962',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1945',
      highlightId:     'usa-coldwar',
    },
    F:  { ids: ['malacca-strait'] },
    L4: {
      pins: ['cuban-missile-crisis-1962', 'berlin-blockade-1948', 'mao-1949', 'bandung-conference-1955', 'vietnam-1965', 'berlin-wall-1989', 'india-independence-1947', 'african-decolonization-1960'],
    },
  },

  causalSummary: {
    cn: 'L0 二战后两极格局 / 美苏地理隔太平洋大西洋无直接冲突可能 + L1 核武器威慑稳态 + L2 美 GDP 50% 全球 / 苏 1/3 / 中 + 印占世界 1/3 人口 + L3 资本主义 vs 共产主义 + 联合国 + 不结盟运动（Bandung 1955）+ L4 1947 Truman Doctrine → 1949 NATO + PRC → 1955 Bandung → 1962 古巴危机 → 1989 柏林墙 → 1991 苏联解体',
    en: 'L0 postwar bipolarity / US-USSR separated by Pacific+Atlantic — no direct conflict possible + L1 nuclear deterrence stalemate + L2 US 50% of world GDP / USSR 1/3 / China + India = 1/3 of world population + L3 capitalism vs communism + UN + Non-Aligned Movement (Bandung 1955) + L4 1947 Truman Doctrine → 1949 NATO + PRC → 1955 Bandung → 1962 Cuban crisis → 1989 Berlin Wall → 1991 USSR dissolves',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: 'John F. Kennedy 肯尼迪', en: 'John F. Kennedy' },
      role: { cn: '美国总统 1961-1963', en: 'US president 1961-1963' },
      bio: {
        cn: '你 43 岁当选 — 二战 PT-109 鱼雷艇英雄、马萨诸塞参议员。1961 Bay of Pigs 失败让你脸色难看 — 但 1962 Cuban Missile Crisis 你 13 天危机用"封锁不入侵"姿态让 Khrushchev 撤导弹 — 距核战争最近的 13 天。1963 11 月你在 Dallas 被刺 — 留下"理想主义美国"的传奇。',
        en: 'Elected at 43 — WWII PT-109 hero, Massachusetts senator. The 1961 Bay of Pigs disaster bloodied your face. But in October 1962 the Cuban Missile Crisis — 13 days where you used "blockade not invasion" to make Khrushchev withdraw — the closest the world came to nuclear war. In November 1963 you were assassinated in Dallas — leaving an "idealist America" legend.',
      },
      hook: {
        cn: '如果你是 JFK — 13 天里你的每个决定可能毁灭人类。"领导个人 vs 系统"— 一个人能左右世界命运吗？还是只是被结构推动？',
        en: 'If you were JFK — over 13 days every decision could end humanity. "Individual leader vs system" — can one person bend world fate, or just ride structural forces?',
      },
    },
    {
      emoji: '☭',
      name: { cn: 'Khrushchev 赫鲁晓夫', en: 'Nikita Khrushchev' },
      role: { cn: '苏联第一书记 1953-1964', en: 'Soviet First Secretary 1953-1964' },
      bio: {
        cn: '你是矿工出身，斯大林之后接班。1956 你"秘密报告"批斯大林 — 全世界共产党震动。1962 你把核导弹运到古巴 — 想跟美国"导弹平等"。Crisis 13 天后你撤回 — 党内说你"软弱"，1964 把你赶下台。你的"去斯大林化"为后来 Gorbachev 改革播种 — 但你这代人没看到苏联解体。',
        en: 'A miner by origin, you succeeded Stalin. In 1956 your "Secret Speech" denounced Stalin — shaking world communist parties. In 1962 you placed nuclear missiles in Cuba — seeking "missile parity" with the US. After the 13-day crisis you withdrew — the Party called you "weak"; in 1964 they ousted you. Your "de-Stalinization" planted seeds for Gorbachev\'s later reforms — but you didn\'t live to see the USSR fall.',
      },
      hook: {
        cn: '如果你是 Khrushchev — 你 1962 撤回挽救了世界 — 但你的党认为你"丢了脸"。"做对的事 vs 政治生存"— 哪个赢？',
        en: 'If you were Khrushchev — your 1962 withdrawal saved the world — but your Party called you a face-loser. "Right action vs political survival" — which wins?',
      },
    },
    {
      emoji: '🌏',
      name: { cn: 'Nehru 尼赫鲁', en: 'Jawaharlal Nehru' },
      role: { cn: '印度首任总理 / 不结盟运动领袖', en: 'India\'s first PM / Non-Aligned Movement leader' },
      bio: {
        cn: '你 1947 接受英国移交印度 — 跟 Gandhi 一起争独立。1955 Bandung 会议你跟周恩来 + Sukarno + Nasser + Tito 一起开会 — 喊"我们不站美国也不站苏联"。"不结盟"代表 1/3 世界人口。但你的"中立"在 1962 中印战争中被打破 — 中国打你。"中立"是奢侈品。',
        en: 'In 1947 you accepted Britain\'s transfer of power — with Gandhi you led independence. At Bandung 1955 with Zhou Enlai + Sukarno + Nasser + Tito, you proclaimed "we side with neither US nor USSR." Non-Alignment represented 1/3 of humanity. But your "neutrality" broke in the 1962 Sino-Indian War — China attacked you. "Neutrality" is a luxury.',
      },
      hook: {
        cn: '如果你是 Nehru — 你想"第三条路"，但中国打你时美苏都没救你。"小国靠中立保护"是不是天真的幻想？2026 印度 / 印尼 / 巴西还在玩这套。',
        en: 'If you were Nehru — you wanted a "third way," but when China attacked, neither superpower saved you. Is "neutrality protects small states" naive? In 2026, India / Indonesia / Brazil still play this game.',
      },
    },
    {
      emoji: '🪖',
      name: { cn: '越战美军 GI', en: 'Vietnam War GI' },
      role: { cn: '1968 年被征兵的密西西比黑人青年', en: '1968 drafted Black GI from Mississippi' },
      bio: {
        cn: '你 19 岁 1968 年被征兵 — 那年最惨，6 万美军在越南。你是黑人，南方农场工人 — 你的白人同学有"大学缓征"或"医生证明", 你没有。你打 Tet 攻势那年 — 看到平民被屠杀（你或你的同袍）+ 大量战友吸毒。回家后退伍军人无人欢迎你 — 反战 + 反兵役并行。58000 美军死了 — 80% 是劳动阶级。',
        en: 'At 19 in 1968 you were drafted — the worst year, 60,000 US troops in Vietnam. Black, a Mississippi farmhand — your white classmates had college deferments or doctor\'s notes; you had nothing. You fought the Tet Offensive — saw civilians massacred (by you or comrades) + comrades on heroin. Home, no one welcomed veterans — anti-war + anti-draft moved together. 58,000 GIs died — 80% working class.',
      },
      hook: {
        cn: '如果你是越战 GI — 你为"自由 vs 共产主义"打 — 但你回家发现美国不要你。"打仗的代价"由谁付？永远是穷人。',
        en: 'If you were the Vietnam GI — you fought for "freedom vs communism" — and came home unwanted. "War\'s cost" — paid by whom? Always the poor.',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Galina（虚构同龄人）', en: 'Galina (fictional peer)' },
      role: { cn: '13 岁，莫斯科共青团女孩', en: '13-year-old, Moscow Komsomol girl' },
      bio: {
        cn: '你跟 Willow 同龄。1962 你 13 岁，加入共青团 (Pioneer)。爸爸是工程师，妈妈是医生 — 苏联中产。你以为美国是"敌人"，但你也偷偷听披头士磁带 + 看 Levi\'s 牛仔裤。1962 古巴危机你以为要核战 — 你跟妈妈在地铁防空洞躲。1991 你 42 岁苏联解体 — 你的世界整个变了，要重新开始。',
        en: 'Same age as Willow. In 1962 you were 13, in the Komsomol Pioneers. Your father is an engineer, mother a doctor — Soviet middle class. You believed America was "the enemy" but secretly listened to Beatles tapes + admired Levi\'s. During the 1962 Cuban crisis you hid with mother in subway shelters expecting nuclear war. In 1991 (age 42) the USSR dissolved — your whole world overturned, restart from zero.',
      },
      hook: {
        cn: '64 年后 Willow 在加州 — 跟俄罗斯裔同学一起上学。"敌国孩子"和"美国孩子"在同一间教室。冷战的"敌我"是真的吗？还是只是大人编的故事？',
        en: '64 years later, Willow goes to school with Russian-American classmates in California. "Enemy children" and "our children" in the same classroom. Was the Cold War\'s "us vs them" real, or a story adults made up?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Truman Doctrine 1947 — 遏制（containment）战略',
      'Marshall Plan 1948 — 130 亿美元援西欧',
      'NATO 1949 vs Warsaw Pact 1955 — 两大军事集团',
      'Korean War 1950-53 — 38° 线分界 · 至今未签和约',
      'Cuban Missile Crisis 1962.10 — 距核战最近的 13 天',
      'Vietnam War 1955-75 — 美败 · ~5.8 万美军阵亡',
      'Detente 缓和 1970s — Nixon-Brezhnev SALT 限制核武',
      'Solidarność 1980 + Gorbachev 改革 — 苏联体制松动',
      'Fall of Berlin Wall 1989.11.9 — 东欧剧变象征',
      'Soviet Union 解体 1991 — 15 个继承国',
    ],
    en: [
      'Truman Doctrine 1947 — containment strategy',
      'Marshall Plan 1948 — $13B aid to Western Europe',
      'NATO 1949 vs Warsaw Pact 1955 — rival military blocs',
      'Korean War 1950-53 — 38th parallel · still no peace treaty',
      'Cuban Missile Crisis Oct 1962 — closest 13 days to nuclear war',
      'Vietnam War 1955-75 — US defeat · ~58,000 US dead',
      'Detente 1970s — Nixon-Brezhnev SALT arms limits',
      'Solidarność 1980 + Gorbachev reforms — Soviet system loosens',
      'Fall of Berlin Wall, Nov 9, 1989 — symbol of Eastern bloc collapse',
      'Soviet Union dissolves 1991 — 15 successor states',
    ],
  },
};

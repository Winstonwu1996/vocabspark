// view: World War II · 1939-1945 · Global
// Grade 8 (US 8 ends 1914; WWII for HS) — also AP World/US Period 7
// 注：HSS-8 严格到 1914，但二战是中学必学，按 G8 收尾用
export const VIEW = {
  id: 'wwii',
  grade: 8,
  topicTier: 'supplementary',
  tierType: 'extended-ap',  // AP 进阶 — AP 考试重点主题
  standardsAlignment: [
    { code: 'AP-WHAP-7.6', label: { cn: 'AP World Unit 7.6 二战起因与影响', en: 'AP World Unit 7.6 Causes and Effects of WWII' } },
    { code: 'AP-USH-7.3',  label: { cn: 'AP US Period 7.3 美国与二战', en: 'AP US Period 7.3 USA & WWII' } },
    { code: 'AP-EURO-8.6', label: { cn: 'AP European Unit 8.6 法西斯主义与极权主义', en: 'AP European Unit 8.6 Fascism and Totalitarianism' } },
    { code: 'AP-EURO-8.9', label: { cn: 'AP European Unit 8.9 第二次世界大战', en: 'AP European Unit 8.9 World War II' } },
  ],
  title:    { cn: '第二次世界大战', en: 'World War II' },
  subtitle: { cn: '1939-1945 · 极权主义对决 · 地图为 1938 快照', en: '1939-1945 · Totalitarian confrontation · 1938 snapshot' },
  year: 1939,

  camera: {
    projection: 'mercator',
    center: [25, 45],
    scale: 220,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'wwii-1939',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1938',
      highlightId:     'nazi-germany',
    },
    F:  { ids: ['rhine', 'danube', 'alps', 'english-channel', 'bosporus', 'suez-isthmus'] },
    L4: {
      pins: ['gdansk', 'munich-1938', 'pearl-harbor', 'stalingrad', 'normandy', 'hiroshima'],
    },
  },

  causalSummary: {
    cn: 'L0 欧洲分裂 + 全球殖民地 + L1 1930s 沙尘暴加深大萧条 + L2 一战工业基础 + 大萧条 25% 失业 + 极权军工 + L3 凡尔赛屈辱 + 国联失败 + 法西斯共产 + L4 1933 希特勒 → 1939.9.1 入侵波兰',
    en: 'L0 fragmented Europe + global colonies + L1 1930s Dust Bowl deepens Depression + L2 WWI industrial base + 25% unemployment + totalitarian munitions + L3 Versailles humiliation + League fails + Fascism/Communism + L4 1933 Hitler → Sept 1, 1939 invades Poland',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: 'Adolf Hitler 希特勒', en: 'Adolf Hitler' },
      role: { cn: '纳粹德国元首 1933-1945', en: 'Nazi Germany Führer 1933-1945' },
      bio: {
        cn: '你是奥地利落榜美院学生 + 一战下士 + 1923 啤酒馆暴动失败入狱写《我的奋斗》。1933 你民选当选总理（不是政变 — 这是关键），合法用法律一步步建立独裁。你 1939 入侵波兰开战、1941 入侵苏联（致命错误）、1941 对美宣战（更致命）。1945 4.30 你在柏林地堡自杀。你死后 6 年欧洲分裂 40 年（冷战）。',
        en: 'A failed Vienna art student + WWI corporal + 1923 Beer Hall Putsch jail-time author of Mein Kampf. In 1933 you were democratically elected Chancellor (not by coup — this matters), then legally built dictatorship step by step. In 1939 you invaded Poland, in 1941 the USSR (fatal error), in 1941 declared war on the US (more fatal). On April 30, 1945 you killed yourself in the Berlin bunker. Europe stayed divided for 40 years after (Cold War).',
      },
      hook: {
        cn: '如果你是 Hitler — 你是民选上来的，不是篡位。德国人也不是被强迫拥护你。"民主选出独裁"的悖论 — 怎么防止？',
        en: 'If you were Hitler — you were elected, not coup\'d. Germans weren\'t forced to back you. "Democracy electing a dictator" — how do you prevent it?',
      },
    },
    {
      emoji: '🎖️',
      name: { cn: 'Winston Churchill 丘吉尔', en: 'Winston Churchill' },
      role: { cn: '英国首相 1940-1945', en: 'British PM 1940-1945' },
      bio: {
        cn: '你 1940 5 月接任首相 — 法国快灭了，英国孤军。你的演讲（"We shall fight on the beaches"）撑住国民士气。Dunkirk 33 万英军撤回。你 5 年间领英国挺住 — 1941 拉到罗斯福援助 + 1941 苏联 + 1941 美国正式参战。但你也命令轰炸德累斯顿（25000 平民死）— 战争里没干净手。',
        en: 'In May 1940 you became PM — France about to fall, Britain alone. Your speeches ("We shall fight on the beaches") held morale. 330,000 British troops were rescued at Dunkirk. For 5 years you led Britain to endure — winning Roosevelt\'s aid (1941), USSR ally (1941), US entry (1941). But you also ordered the firebombing of Dresden (25,000 civilians dead) — no clean hands in war.',
      },
      hook: {
        cn: '如果你是 Churchill — 你救了英国但也下令屠杀德国平民。"反法西斯"目的能为屠杀辩护吗？这道题盟军方阵容也无法回避。',
        en: 'If you were Churchill — you saved Britain and ordered massacres of German civilians. Does "anti-fascism" justify atrocity? Even the Allied side can\'t dodge this.',
      },
    },
    {
      emoji: '🕊️',
      name: { cn: '集中营幸存者', en: 'Concentration Camp Survivor' },
      role: { cn: '奥斯威辛幸存的犹太家庭', en: 'Auschwitz survivor / Jewish family' },
      bio: {
        cn: '你 1942 从波兰被运到 Auschwitz — 全家 6 人，活下来的只有你。600 万犹太人被屠杀（占欧洲犹太人 2/3）+ 几百万斯拉夫人 + 罗姆人 + 同性恋 + 残疾人。你 1945 解放后 ~30 公斤，找回家发现房子被邻居占了。1948 以色列建国 — 但欧洲反犹太情绪并没消失，只是被压下了。',
        en: 'In 1942 you were deported from Poland to Auschwitz — 6 in your family, only you survived. 6 million Jews killed (2/3 of European Jewry) + millions of Slavs, Roma, gay people, disabled. After 1945 liberation you weighed ~30kg; returning home, neighbors had taken your house. Israel was founded in 1948 — but European antisemitism didn\'t disappear, just hid.',
      },
      hook: {
        cn: '如果你是幸存者 — 你的故事让"never again"成口号。但 80 年后种族灭绝在卢旺达、波黑、新疆都重演。"记住历史"能阻止它重演吗？',
        en: 'If you were the survivor — your story made "never again" a slogan. 80 years later, genocides repeat in Rwanda, Bosnia, Xinjiang. Does "remembering history" actually prevent its repeat?',
      },
    },
    {
      emoji: '🪖',
      name: { cn: '苏联红军女狙击手', en: 'Soviet Female Sniper' },
      role: { cn: 'Lyudmila Pavlichenko 类型 / 309 击杀', en: 'Lyudmila Pavlichenko type / 309 kills' },
      bio: {
        cn: '你 24 岁，加入红军做狙击手。Pavlichenko 一人击杀 309 个纳粹（含 36 狙击手）。苏联战争里 80 万女兵参战 — 包括步兵、飞行员、坦克手。1941-45 苏联死 ~2700 万人 — 占二战死亡 1/3。东线是真正打败纳粹的地方 — 但西方课本只讲诺曼底。',
        en: 'At 24 you joined the Red Army as a sniper. Lyudmila Pavlichenko alone killed 309 Nazis (including 36 enemy snipers). 800,000 Soviet women served in combat — infantry, pilots, tank crews. The USSR lost ~27 million in 1941-45 — a third of all WWII deaths. The Eastern Front actually defeated Nazi Germany — but Western textbooks center Normandy.',
      },
      hook: {
        cn: '如果你是红军女兵 — 你打死纳粹比美军救出来的犹太人还多。但课本不写你 — 因为冷战。"功劳归谁"是政治分配，不是历史事实。',
        en: 'If you were the Red Army woman — you killed more Nazis than the US saved Jews. But textbooks erase you — because of the Cold War. "Who gets credit" is politically allocated, not factually given.',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Anne（虚构同龄人）', en: 'Anne (fictional peer)' },
      role: { cn: '13 岁，阿姆斯特丹犹太女孩', en: '13-year-old, Amsterdam Jewish girl' },
      bio: {
        cn: '你跟 Willow 同龄，跟 Anne Frank 同名。1942 你 13 岁，跟家人躲进阿姆斯特丹密室 2 年。你写日记记录恐惧 + 希望 + 13 岁女孩的烦恼（喜欢谁、跟妹妹吵架）。1944 8 月被告发，全家送奥斯威辛。1945 3 月你 15 岁死于 Bergen-Belsen — 解放前 3 周。你的日记被爸爸 Otto 出版 — 成全世界孩子的反法西斯教材。',
        en: 'Same age as Willow, sharing Anne Frank\'s name. In 1942 at 13 you hid with family in an Amsterdam annex for 2 years. You wrote a diary of fear + hope + a 13-year-old\'s troubles (crushes, fighting with sister). Aug 1944 betrayed; family sent to Auschwitz. March 1945 (age 15) you died at Bergen-Belsen — 3 weeks before liberation. Your father Otto published your diary — every child\'s anti-fascism text worldwide.',
      },
      hook: {
        cn: '80 年后 Willow 在加州中学读你的日记 — 哭。她跟你同龄。"一个孩子的日记 vs 6 百万人的统计数据"— 哪个让人更"看见"历史？',
        en: '80 years later, Willow reads your diary in California middle school — crying. She\'s your age. "One child\'s diary vs 6 million statistics" — which makes history more "visible"?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Munich Agreement 1938 慕尼黑协定 — 绥靖政策（appeasement）',
      '德国闪电战入侵波兰 1939.9.1 → 二战爆发',
      'Pearl Harbor 1941.12.7 → 美国参战',
      'Holocaust 大屠杀 — 600 万犹太人 / Final Solution',
      'D-Day 诺曼底登陆 1944.6.6（Operation Overlord）',
      'Stalingrad 1942-1943 斯大林格勒 → 东线转折',
      'Hiroshima/Nagasaki 1945.8 — 原子弹 → 日本投降',
      'United Nations 1945 / Yalta Conference 1945',
    ],
    en: [
      'Munich Agreement 1938 — appeasement of Hitler',
      'Germany invades Poland Sept 1, 1939 → WWII begins',
      'Pearl Harbor Dec 7, 1941 → US enters war',
      'Holocaust — 6M Jews killed / Final Solution',
      'D-Day, June 6, 1944 (Operation Overlord)',
      'Stalingrad 1942-1943 — Eastern Front turning point',
      'Hiroshima/Nagasaki Aug 1945 — atomic bombs → Japan surrenders',
      'United Nations 1945 / Yalta Conference 1945',
    ],
  },
};

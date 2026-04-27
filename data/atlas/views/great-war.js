// view: World War I · 1914 · Europe + Global
// Grade 8 · HSS-8.12 (Industrial age leading to WWI is implicit; this is more HS prep)
// 注：HSS-8 主要到 1914，所以适合作为该学段终点 Topic
export const VIEW = {
  id: 'great-war',
  grade: 8,
  topicTier: 'supplementary',
  tierType: 'extended-ap',  // AP 进阶 — AP 考试重点主题
  standardsAlignment: [
    { code: 'CA-HSS-8.12',  label: { cn: 'CA HSS-8.12 工业革命的全球后果（含一战前夕）', en: 'CA HSS-8.12 Global consequences of Industrial Revolution (incl. pre-WWI)' } },
    { code: 'AP-WHAP-7.2',  label: { cn: 'AP World Unit 7.2 一战起因', en: 'AP World Unit 7.2 Causes of World War I' } },
    { code: 'AP-WHAP-7.3',  label: { cn: 'AP World Unit 7.3 一战进程', en: 'AP World Unit 7.3 Conducting World War I' } },
    { code: 'AP-USH-7.1',   label: { cn: 'AP US Period 7.1 美国进入帝国时代', en: 'AP US Period 7.1 US enters imperial age' } },
    { code: 'AP-EURO-8.2',  label: { cn: 'AP European Unit 8.2 一战起因 + 进程', en: 'AP European Unit 8.2 Causes and Conduct of WWI' } },
  ],
  title:    { cn: '第一次世界大战', en: 'World War I' },
  subtitle: { cn: '1914-1918 · 工业化文明的自我毁灭', en: '1914-1918 · industrial civilization\'s self-destruction' },
  year: 1914,

  camera: {
    projection: 'mercator',
    center: [25, 50],
    scale: 380,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'great-war-1914',
      modernPolities:  'eurasia-modern',
      yearSnapshot:    'world_1914',
      highlightId:     'german-empire',
    },
    F:  { ids: ['rhine', 'danube', 'alps', 'english-channel', 'bosporus', 'suez-isthmus'] },
    L4: {
      pins: ['sarajevo', 'verdun', 'somme', 'london-1914', 'berlin-1914', 'st-petersburg-1914'],
    },
  },

  causalSummary: {
    cn: 'L0 欧洲密集 + 殖民地遍全球 + L1 工业时代 + L2 钢铁/铁路/电报/内燃机/机枪 + L3 同盟 vs 协约 / 民族主义教育 / 报刊宣传 + L4 萨拉热窝刺杀 → 7 月连锁 → 8 月开战',
    en: 'L0 dense Europe + global colonies + L1 industrial era + L2 steel/rail/telegraph/IC engine/machine gun + L3 alliances vs entente/nationalism/mass press + L4 Sarajevo → July chain reaction → August war',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: 'Kaiser Wilhelm II 威廉二世', en: 'Kaiser Wilhelm II' },
      role: { cn: '德意志皇帝 1888-1918', en: 'German Emperor 1888-1918' },
      bio: {
        cn: '你是英女王 Victoria 的外孙 — 维多利亚抱着你死。你左臂残疾（出生事故）— 一辈子内心觉得"要证明自己"。你 1890 解雇 Bismarck — 抛弃他的"安静崛起"政策，搞海军军备竞赛挑战英国。1914 萨拉热窝事件你给奥地利"全力支持"白纸 — 加速战争。1918 战败你流亡荷兰 — 看着希特勒崛起。',
        en: 'Grandson of Queen Victoria — she died in your arms. Your left arm was crippled (birth injury) — a lifetime of "must prove myself." In 1890 you fired Bismarck — abandoning his "rise quietly" policy and starting a naval arms race against Britain. In July 1914 you gave Austria a "blank check" of full support — speeding war. After 1918 defeat you fled to Holland — watching Hitler rise.',
      },
      hook: {
        cn: '如果你是 Wilhelm — 你的"血缘亲戚关系"（跟英王、俄沙皇都是表亲）没阻止你们打死 1700 万人。"个人关系"在国家利益面前算什么？',
        en: 'If you were Wilhelm — your blood ties (cousin to Britain\'s King and Russia\'s Tsar) didn\'t stop you killing 17 million between you. What does "personal connection" count for against state interest?',
      },
    },
    {
      emoji: '🎓',
      name: { cn: 'Woodrow Wilson 威尔逊总统', en: 'President Woodrow Wilson' },
      role: { cn: '美国总统 1913-1921 / 14 点和平', en: 'US president 1913-1921 / Fourteen Points' },
      bio: {
        cn: '你 Princeton 校长出身，1916 当选时承诺"让美国不打这场战"。1917 你改变 — 因为德国搞无限制潜艇战 + Zimmerman 电报（德国想拉墨西哥打美国）。1918 你提"14 点和平"+ 国联 — 为世界设计新秩序。但美国国会 1919 拒绝加入国联 — 你的设计部分失败。你 1924 死时 LON 已经显示无效。',
        en: 'A Princeton ex-president, in 1916 you won re-election on "kept us out of war." In 1917 you reversed — Germany\'s unrestricted U-boats + Zimmerman Telegram (Germany asking Mexico to attack the US). In 1918 you proposed the Fourteen Points + League of Nations — a new world order. But the US Senate rejected the League in 1919 — your vision half-failed. By your death in 1924 the League was visibly weak.',
      },
      hook: {
        cn: '如果你是 Wilson — 你设计了世界和平体系，你的国家不让你加入。"先知不被自家承认"— 但你的"民族自决"原则后来塑造殖民地独立。失败的项目还能成功吗？',
        en: 'If you were Wilson — you designed world peace; your own country refused to join. "A prophet rejected at home" — but your "self-determination" later shaped decolonization. Can a failed project still succeed?',
      },
    },
    {
      emoji: '🪖',
      name: { cn: '英军堑壕士兵', en: 'British Trench Soldier' },
      role: { cn: '索姆河战场普通兵', en: 'Common soldier at the Somme' },
      bio: {
        cn: '你 19 岁，1916 7 月 1 日 Somme 战役 — 第一天英军死 2 万人（英国军史最惨一天）。你住堑壕里跟老鼠尸体 + 烂泥共处 + 瘴气面具防芥子毒气。每天看朋友被机枪打死。你回家有"shell shock"（创伤后遗症）— 当时的医生说你"懦弱"。一战制造了"PTSD"这个词的雏形。',
        en: 'At 19, on July 1, 1916, you fought the Somme — 20,000 British dead the first day (the bloodiest day in British military history). You lived in trenches with rats, corpses, mud + a mustard-gas mask. You watched friends mowed down daily. Back home with "shell shock" (PTSD), doctors called you a coward. WWI produced the modern concept of psychological trauma.',
      },
      hook: {
        cn: '如果你是堑壕兵 — 你回家发现 19 世纪"英雄叙事"完全没法描述你经历的。"无法言说的创伤"是怎么变成今天 PTSD 这个被理解的概念的？',
        en: 'If you were the trench soldier — at home, the 19th-century "hero" narrative couldn\'t describe what you\'d seen. How did "unspeakable trauma" become today\'s recognized PTSD?',
      },
    },
    {
      emoji: '👩‍🏭',
      name: { cn: '军工厂女工', en: 'Munitions Factory Woman' },
      role: { cn: '伦敦军工厂炮弹装填工', en: 'London arsenal shell-filler' },
      bio: {
        cn: '你是 26 岁主妇，丈夫去前线后你进军工厂装填 TNT 炮弹 — 皮肤被染黄叫"金丝雀女郎"，长期接触会肝衰。300 万英国女性进入战时劳动力 — 第一次有自己工资。1918 30 岁以上女性获选举权（部分）— 战争意外推动女权。但战后大多数女工被赶回家，男人回来抢工作。',
        en: 'A 26-year-old housewife. After your husband went to the front, you entered the arsenal filling TNT shells — your skin turned yellow ("canary girls"), prolonged exposure caused liver failure. 3 million British women entered wartime work — the first generation with their own wages. In 1918 women over 30 got partial suffrage — war accidentally advanced women\'s rights. But most factory women were sent home postwar; returning men reclaimed the jobs.',
      },
      hook: {
        cn: '如果你是军工女工 — 战时你"被需要"，战后你"被解雇"。"机会"是被结构性给的还是结构性收回？今天 AI / 远程工作给女性的"机会"也会被收回吗？',
        en: 'If you were the munitions worker — wartime you\'re "needed," postwar you\'re "fired." Is "opportunity" structurally granted then withdrawn? Will today\'s AI / remote-work "opportunities" for women be withdrawn too?',
      },
    },
    {
      emoji: '👦',
      name: { cn: 'Hans（虚构同龄人）', en: 'Hans (fictional peer)' },
      role: { cn: '13 岁，柏林学生', en: '13-year-old, Berlin student' },
      bio: {
        cn: '你跟 Willow 同龄。1914 8 月 1 日德国宣战，你 13 岁站在柏林街头跟人群欢呼 — "我们要赢" — 你哥 19 岁参军。1916 你哥死在 Verdun — 之后你妈妈不再说话。1918 战败 + Versailles 条约 + 通货膨胀让你家破产。1933 你 32 岁可能投希特勒 — 因为他承诺"恢复德国尊严"。一代人的"屈辱"成下一代的"复仇"动机。',
        en: 'Same age as Willow. On Aug 1, 1914 Germany declared war; at 13 you cheered in Berlin streets — "we\'ll win" — your 19-year-old brother enlisted. He died at Verdun in 1916 — your mother stopped speaking after. The 1918 defeat + Versailles + hyperinflation ruined your family. In 1933 (age 32) you might have voted for Hitler — promising "restored German dignity." One generation\'s "humiliation" became the next\'s revenge motive.',
      },
      hook: {
        cn: '110 年后 Willow 在加州学校学一战 — 几页纸。但你这代经历的羞辱直接造就了二战。"代际创伤的传递"在哪里被打破？',
        en: '110 years later, Willow studies WWI in California — a few pages. Your generation\'s humiliation directly birthed WWII. Where does "generational trauma\'s transmission" get broken?',
      },
    },
  ],

  examPoints: {
    cn: [
      'MAIN 助记符：Militarism 军国 / Alliances 同盟 / Imperialism 帝国 / Nationalism 民族',
      '萨拉热窝刺杀 1914.6.28 — Franz Ferdinand 大公遇刺',
      'Schlieffen Plan 施利芬计划（德国速攻法国）',
      'Trench warfare 堑壕战 / Western Front 西线僵局',
      'Treaty of Versailles 1919 凡尔赛和约 + 战争罪责条款',
      'League of Nations 国际联盟（美国未加入）',
      'Russian Revolution 1917 俄国革命 / Bolsheviks 布尔什维克',
      'Wilson\'s 14 Points 威尔逊十四点',
    ],
    en: [
      'MAIN causes: Militarism, Alliances, Imperialism, Nationalism',
      'Assassination of Franz Ferdinand, Sarajevo, June 28 1914',
      'Schlieffen Plan (German plan to swift-strike France)',
      'Trench warfare / Western Front stalemate',
      'Treaty of Versailles 1919 + War Guilt Clause',
      'League of Nations (US never joined)',
      'Russian Revolution 1917 / Bolsheviks',
      'Wilson\'s Fourteen Points',
    ],
  },
};

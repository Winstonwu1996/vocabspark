// view: Civil Rights Movement · 1965 · US South
// Grade 8 · supplementary (extended-ap) · AP USH 8.10 / CA HSS-11.10
export const VIEW = {
  id: 'civil-rights',
  grade: 8,
  topicTier: 'supplementary',
  tierType: 'extended-ap',
  standardsAlignment: [
    { code: 'CA-HSS-11.10', label: { cn: 'CA HSS-11.10 民权运动', en: 'CA HSS-11.10 Civil Rights Movement' } },
    { code: 'AP-USH-8.10',  label: { cn: 'AP US 8.10 非裔美国人民权运动', en: 'AP US 8.10 The African American Civil Rights Movement' } },
    { code: 'AP-USH-8.11',  label: { cn: 'AP US 8.11 民权运动的扩展', en: 'AP US 8.11 The Civil Rights Movement expands' } },
  ],
  title:    { cn: '民权运动', en: 'Civil Rights Movement' },
  subtitle: { cn: '1965 · Selma 游行 + 投票权法 · 美国南方主战场', en: '1965 · Selma march + Voting Rights Act · US South as main theater' },
  year: 1965,

  camera: {
    projection: 'mercator',
    center: [-89, 35],
    scale: 700,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'north-america-modern',
      modernPolities:  'north-america-modern',
      highlightId:     'usa-modern',
    },
    F:  { ids: ['mississippi', 'ohio-river', 'mason-dixon'] },
    L4: {
      pins: ['selma-1965', 'montgomery-bus-1955', 'little-rock-1957', 'birmingham-1963', 'march-washington-1963', 'mlk-assassination-1968', 'voting-rights-1965'],
    },
  },

  causalSummary: {
    cn: 'L0 美国南部黑人聚居 + 棉花带 = 民权斗争主战场 + L1 战后经济繁荣 + 电视普及（看见警犬+消防水龙打孩子）+ L2 1.6 亿人口中 ~10% 黑人 / 75% 黑人仍在南方 / 二战黑人退伍军人意识觉醒 + L3 Brown v. Board 1954 司法突破 + 教会作为组织基地 + 非暴力抵抗（甘地启发 MLK）+ L4 1955 Montgomery → 1957 Little Rock 9 → 1960 sit-ins → 1963 March on Washington → 1964 Civil Rights Act → 1965 Voting Rights Act → 1968 MLK 暗杀',
    en: 'L0 Black population concentrated in US South + cotton belt = main battleground of civil rights + L1 postwar economic boom + TV spreads (Americans see dogs + fire hoses on children) + L2 ~10% of 160M are Black / 75% still in South / WWII Black veterans politically awakened + L3 Brown v. Board 1954 judicial breakthrough + churches as organizing bases + nonviolent resistance (Gandhi inspires MLK) + L4 1955 Montgomery → 1957 Little Rock 9 → 1960 sit-ins → 1963 March on Washington → 1964 Civil Rights Act → 1965 Voting Rights Act → 1968 MLK assassinated',
  },

  keyFigures: [
    {
      emoji: '🕊️',
      name: { cn: 'Martin Luther King Jr. 马丁·路德·金', en: 'Martin Luther King Jr.' },
      role: { cn: '亚特兰大牧师 / 民权运动领袖', en: 'Atlanta minister / civil rights leader' },
      bio: {
        cn: '你是亚特兰大浸信会牧师之子。1955 26 岁你领 Montgomery 公交抵制 — 一夜成全国焦点。1963 8.28 你在林肯纪念堂前讲"I Have a Dream"— 25 万人在国家广场。1964 你 35 岁获诺贝尔和平奖（最年轻得主之一）。你借鉴 Gandhi 非暴力 + 黑人教会传统 — 让"道德权威"赢"权力"。1968 4.4 你在 Memphis 阳台被刺 — 100+ 城市暴动。',
        en: 'Son of an Atlanta Baptist minister. At 26 in 1955 you led the Montgomery Bus Boycott — overnight national figure. On Aug 28, 1963 at the Lincoln Memorial you spoke "I Have a Dream" — 250,000 on the National Mall. At 35 in 1964 you won the Nobel Peace Prize — among the youngest. Combining Gandhi\'s nonviolence + Black church tradition, you let "moral authority" beat "power." On April 4, 1968 you were shot on a Memphis balcony — riots in 100+ cities.',
      },
      hook: {
        cn: '如果你是 MLK — 你 1968 年死前已经在反越战 + 反贫困 — 不只是反种族隔离。你的"扩展议程"让你失去白人盟友。如果你活到 70 岁 — 美国会更进一步还是分裂更深？',
        en: 'If you were MLK — by 1968 you opposed the Vietnam War and poverty — not just segregation. This "expanded agenda" cost you white allies. Had you lived to 70 — would America have advanced further, or split deeper?',
      },
    },
    {
      emoji: '🚓',
      name: { cn: 'Bull Connor 公牛康纳', en: 'Bull Connor' },
      role: { cn: '伯明翰警察局长 / 用警犬攻击儿童', en: 'Birmingham Police Commissioner / used dogs on children' },
      bio: {
        cn: '你是阿拉巴马伯明翰警察局长。1963 5 月 MLK 在伯明翰组织"Children\'s Crusade"— 800 个 7-13 岁黑人孩子游行。你下令用警犬咬 + 消防水枪冲他们。电视全国直播 — 美国人看到那张照片（一个男孩被警犬扑）— 民意彻底翻盘。你用残忍"赢"了一仗，但输了战争 — 你帮 MLK 通过了《1964 Civil Rights Act》。',
        en: 'Birmingham\'s police commissioner. In May 1963 MLK organized the "Children\'s Crusade" — 800 Black children aged 7-13 marching. You ordered police dogs + fire hoses on them. National TV broadcast — Americans saw the photo (a boy lunged at by a police dog) — public opinion flipped. You "won" with cruelty, lost the war — you actually helped pass the 1964 Civil Rights Act.',
      },
      hook: {
        cn: '如果你是 Bull Connor — 你以为暴力能压抑反抗。结果电视让全美国看到你 — 你的暴力反而成 MLK 最强武器。"残忍 + 媒体" 现在是不是反向操作？',
        en: 'If you were Connor — you thought violence would silence protest. TV showed America your brutality — your violence became MLK\'s strongest weapon. Today "brutality + media" — does it work in reverse?',
      },
    },
    {
      emoji: '✊',
      name: { cn: 'Malcolm X 马尔科姆·X', en: 'Malcolm X' },
      role: { cn: 'Nation of Islam 发言人 / 激进派', en: 'Nation of Islam spokesman / militant wing' },
      bio: {
        cn: '你 21 岁监狱里读书自学，加入 Nation of Islam。你说"by any means necessary"— 不像 MLK 那样推非暴力。你称白人为"魔鬼"— 但 1964 你去麦加朝觐，看到不同肤色的穆斯林平等共处 — 改变看法。1965 2 月你在哈莱姆演讲被 NOI 自家人暗杀 — 39 岁。你死后 Black Power 运动崛起 — 你的"愤怒美学"塑造了 Black Lives Matter。',
        en: 'At 21 in prison you self-educated and joined the Nation of Islam. You said "by any means necessary" — rejecting MLK\'s nonviolence. You called whites "devils" — but in 1964 your Mecca pilgrimage showed you Muslims of all colors as equals — you shifted. In Feb 1965 in Harlem you were assassinated by NOI rivals at 39. After your death, Black Power rose — your "rage aesthetic" shaped today\'s Black Lives Matter.',
      },
      hook: {
        cn: '如果你是 Malcolm X — 你说"自卫"，MLK 说"非暴力"。你们俩谁更接近真相？还是其实你们是"好警察 / 坏警察"组合，让美国不得不让步？',
        en: 'If you were Malcolm X — you said "self-defense"; MLK said "nonviolence." Who was closer to truth? Or were you a "good cop / bad cop" duo forcing America to yield?',
      },
    },
    {
      emoji: '🌾',
      name: { cn: '密西西比黑人佃农', en: 'Mississippi Black Sharecropper' },
      role: { cn: '种棉花的 Fannie Lou Hamer 类型', en: 'Cotton picker, Fannie Lou Hamer type' },
      bio: {
        cn: '你住密西西比 — 内战 100 年后还在干内战前的活（种棉花）。你不识字直到 1962 年（45 岁）— 那年 SNCC 来你村教你登记选民。你登记了，被白人种植主开除 + 房子被烧 + 被警察打到肾衰竭。1964 你在民主党全国大会上演讲（电视直播）— 全国震动。你说"我已经厌倦被厌倦"。',
        en: 'You live in Mississippi — 100 years after the Civil War, still doing pre-war work (picking cotton). You couldn\'t read until 45 (1962) — when SNCC came to your village teaching voter registration. You registered, were fired by the white planter + your house burned + police beat you into kidney damage. In 1964 you spoke at the Democratic National Convention (live on TV) — the nation shook. "I am sick and tired of being sick and tired."',
      },
      hook: {
        cn: '如果你是 Fannie Lou — 你 1964 在电视上让民主党高层难堪。课本里你 1 段 — 但你的话比 MLK 任何一段更尖锐。"被记住的人"和"做事的人"是同一群吗？',
        en: 'If you were Fannie Lou — your 1964 TV speech embarrassed Democratic Party leaders. Textbooks give you a paragraph — but your words cut sharper than any of MLK\'s. Are "the remembered" and "the doers" the same group?',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Carolyn（虚构同龄人）', en: 'Carolyn (fictional peer)' },
      role: { cn: '13 岁，伯明翰黑人女孩', en: '13-year-old, Birmingham Black girl' },
      bio: {
        cn: '你跟 Willow 同龄。1963 5 月你 13 岁，参加 Birmingham Children\'s Crusade — 你和 800 个孩子游行。Bull Connor 用警犬咬你妹妹。你被关 5 天监狱。9 月你教堂 16th Street Baptist 被 KKK 炸 — 4 个跟你同龄的女孩死。你这一代叫"运动孩子"— 你的恐惧 + 勇气定义了下一代美国人对种族的态度。',
        en: 'Same age as Willow. In May 1963 (age 13) you joined the Birmingham Children\'s Crusade — marched with 800 kids. Bull Connor\'s dogs bit your sister. You spent 5 days in jail. In September your church (16th Street Baptist) was bombed by the KKK — 4 girls your age killed. Your generation, "movement children," your fear + courage shaped the next generation\'s racial attitudes.',
      },
      hook: {
        cn: '60 年后 Willow 在加州学校跟黑人朋友自由聊天。她拥有的"日常自由"是你 13 岁那年用监狱 + 教堂炸弹换的。她欠你一句感谢吗？还是你只想她"知道你存在"？',
        en: '60 years later, Willow chats freely with Black friends in California. The "daily freedom" she has was bought by your 13-year-old year of jail + church bombings. Does she owe you thanks? Or do you just want her to "know you existed"?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Brown v. Board of Education 1954 — 推翻"隔离但平等"',
      'Montgomery 抵制公交 1955-56 — Rosa Parks · MLK 崛起',
      'Little Rock Nine 1957 — 艾森豪威尔派联邦军队护送',
      'Greensboro sit-ins 1960 — 静坐抵制餐馆隔离',
      'Freedom Riders 1961 — 跨州公交抗议',
      'MLK "I Have a Dream" 1963.8 — 25 万人华盛顿大游行',
      'Civil Rights Act 1964 — LBJ 签 · 公共空间禁种族歧视',
      'Voting Rights Act 1965 — Selma 游行后通过',
      'Black Power / Malcolm X / SNCC — 1965-68 激进派',
      'MLK 1968 暗杀 — 100+ 城市暴动',
    ],
    en: [
      'Brown v. Board of Education 1954 — overturns "separate but equal"',
      'Montgomery Bus Boycott 1955-56 — Rosa Parks · MLK rises',
      'Little Rock Nine 1957 — Eisenhower sends federal troops',
      'Greensboro sit-ins 1960 — sit-down protests at lunch counters',
      'Freedom Riders 1961 — interstate bus protests',
      'MLK "I Have a Dream" Aug 1963 — 250k March on Washington',
      'Civil Rights Act 1964 — LBJ signs · bans discrimination in public',
      'Voting Rights Act 1965 — passed after Selma',
      'Black Power / Malcolm X / SNCC — 1965-68 radical wing',
      'MLK assassinated 1968 — riots in 100+ cities',
    ],
  },
};

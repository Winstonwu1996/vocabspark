// view: American Civil War · 1861-1865 · United States
// Grade 8 · HSS-8.10 (Civil War & Reconstruction)
export const VIEW = {
  id: 'civil-war',
  grade: 8,
  topicTier: 'core',
  standardsAlignment: [
    { code: 'CA-HSS-8.10',  label: { cn: 'CA HSS-8.10 内战的起因 / 进程 / 后果', en: 'CA HSS-8.10 Civil War causes / course / consequences' } },
    { code: 'CA-HSS-8.11',  label: { cn: 'CA HSS-8.11 重建时期', en: 'CA HSS-8.11 Reconstruction' } },
    { code: 'AP-USH-5.6',   label: { cn: 'AP US Period 5.6 妥协的失败', en: 'AP US Period 5.6 Failure of Compromise' } },
    { code: 'AP-USH-5.8',   label: { cn: 'AP US Period 5.8 内战军事冲突', en: 'AP US Period 5.8 Military Conflict in the Civil War' } },
    { code: 'AP-USH-5.10',  label: { cn: 'AP US Period 5.10 重建', en: 'AP US Period 5.10 Reconstruction' } },
  ],
  title:    { cn: '南北战争', en: 'American Civil War' },
  subtitle: { cn: '1861-1865 · 美国 · 联邦 vs 邦联 · 边境州 + 西部领地', en: '1861-1865 · USA · Union vs Confederacy · border states + Western territories' },
  year: 1865,

  camera: {
    projection: 'mercator',
    center: [-92, 36.5],
    scale: 620,
    yOffset: 0,
  },

  layers: {
    L0: { show: true },
    L3: {
      polities:        'north-america-1865',
      modernPolities:  'north-america-modern',
      // 不指定 yearSnapshot — 完全用 customPolygon 表达内战政治分界
      // （world_1880 的 USA 是单一多边形，不能区分 Union/Confederacy）
      highlightId:     'union',
    },
    F:  { ids: ['mississippi', 'ohio-river', 'missouri-river', 'appalachians', 'mason-dixon', 'rocky-mountains'] },
    L4: {
      pins: ['fort-sumter', 'gettysburg', 'atlanta-1864', 'appomattox', 'washington-dc', 'richmond'],
    },
  },

  causalSummary: {
    cn: 'L0 阿巴拉契亚 + 密西西比河 + 棉花气候带分异 + L1 1850s 棉花价高 → 南方加倍依赖奴隶 + L2 北方 2200 万人 / 工厂 / 铁路 vs 南方 900 万 + 400 万奴隶 + L3 1820 密苏里妥协 + 1850 妥协 + 1854 堪萨斯-内布拉斯加 + Mason-Dixon 线 + L4 1860 林肯当选 → 1861 Sumter → 1863 葛底斯堡 → 1865 Appomattox 投降',
    en: 'L0 Appalachians + Mississippi + cotton-belt divergence + L1 1850s cotton boom doubles slavery dependency + L2 North 22M / factories / railroads vs South 9M + 4M enslaved + L3 1820 Missouri Compromise + 1850 Compromise + 1854 Kansas-Nebraska + Mason-Dixon Line + L4 1860 Lincoln election → 1861 Sumter → 1863 Gettysburg → 1865 Appomattox surrender',
  },

  keyFigures: [
    {
      emoji: '👑',
      name: { cn: 'Abraham Lincoln 林肯', en: 'Abraham Lincoln' },
      role: { cn: '第 16 任总统 / 联邦统帅', en: '16th US president / Union commander-in-chief' },
      bio: {
        cn: '你出身肯塔基贫农，靠自学成律师。1860 你以共和党人当选 — 仅得 39.8% 选票，南方诸州拒绝接受、脱离联邦。你 4 年间打了一场死 60 万人的内战，1863 颁《解放奴隶宣言》— 把"保联邦"变成"反奴隶制"。1865 4 月 9 日 Lee 投降，你 4 月 14 日被刺杀 — 没看到重建。',
        en: 'Born to a Kentucky dirt-poor farmer, self-taught into law. In 1860 you won as Republican with only 39.8% — Southern states refused to accept, seceded. You waged a 4-year war killing 600,000. In 1863 the Emancipation Proclamation transformed "preserve the Union" into "end slavery." On April 9, 1865 Lee surrendered; on April 14 you were assassinated — never seeing Reconstruction.',
      },
      hook: {
        cn: '如果你是 Lincoln — 你 1862 年还说"如果保联邦不需要解放奴隶我就不解放" — 但 1863 你又解放了。这是"道德觉醒"还是"战略需要"？',
        en: 'If you were Lincoln — in 1862 you said "if I could save the Union without freeing slaves, I would" — yet in 1863 you freed them. Moral awakening, or strategic necessity?',
      },
    },
    {
      emoji: '🛡️',
      name: { cn: 'Robert E. Lee 罗伯特·李', en: 'Robert E. Lee' },
      role: { cn: '邦联军总司令', en: 'Confederate Army commander' },
      bio: {
        cn: '你是西点军校优等生 + 弗吉尼亚名门后代。Lincoln 1861 邀请你统帅联邦军 — 你拒绝，因为弗吉尼亚要脱离 — 你说"我不能跟自己州为敌"。你成邦联军最强将领，Gettysburg 1863 你最大的赌输了 — 之后你只是延缓失败。1865 4.9 你 Appomattox 投降 — 用绅士礼仪让北方"和解" — 但你的"高贵失败者"形象后来被用来美化邦联（Lost Cause 神话）。',
        en: 'A West Point top graduate + Virginia aristocrat. In 1861 Lincoln offered you Union command — you refused because Virginia seceded — "I cannot raise my hand against my state." You became the Confederacy\'s best general; Gettysburg 1863 was your big bet, lost — after that you only delayed defeat. On April 9, 1865 you surrendered with gentlemanly grace, easing reconciliation — but your "noble loser" image was later used to romanticize the Confederacy (the Lost Cause myth).',
      },
      hook: {
        cn: '如果你是 Lee — 你为"州的忠诚"而战，但你打的是为奴隶制。"个人荣誉 vs 道德立场"— 你能两者兼得吗？今天美国南方还有你的雕像 — 该不该拆？',
        en: 'If you were Lee — you fought for "state loyalty" but the cause was slavery. "Personal honor vs moral stance" — can you have both? Statues of you still stand in the South — should they come down?',
      },
    },
    {
      emoji: '🎩',
      name: { cn: 'Frederick Douglass（再次出现）', en: 'Frederick Douglass (recurring)' },
      role: { cn: '黑人废奴领袖 / 林肯顾问', en: 'Black abolitionist / Lincoln\'s advisor' },
      bio: {
        cn: '你 1862 年三次见 Lincoln — 说"让黑人参军，我们要自己挣自己的自由"。1863 联邦组建第 54 黑人步兵团（Massachusetts 54th）— 18 万黑人参军，4 万战死。Gettysburg 战役你儿子在第 54 团。林肯被刺后你说"4 百万黑人感谢他，但我们更感谢自己"— 你拒绝把"解放"完全归功给白人英雄。',
        en: 'In 1862 you met Lincoln three times — "let Black men enlist; we must earn our own freedom." In 1863 the Union formed the 54th Massachusetts — 180,000 Black soldiers served, 40,000 died. Your son served at Gettysburg. After Lincoln\'s assassination you said "4 million Black people thank him, but we thank ourselves more" — refusing to credit "emancipation" entirely to a white hero.',
      },
      hook: {
        cn: '如果你是 Douglass — 你既感谢林肯也不全靠他。"恩主"叙事和"自我解放"叙事 — 哪个更接近真相？',
        en: 'If you were Douglass — you thanked Lincoln but didn\'t depend solely on him. "Benefactor" vs "self-liberation" narratives — which is closer to truth?',
      },
    },
    {
      emoji: '🪖',
      name: { cn: '联邦军普通兵', en: 'Union Soldier' },
      role: { cn: 'Iowa 农场出身的 19 岁列兵', en: '19-year-old private from Iowa farm' },
      bio: {
        cn: '你 19 岁，从 Iowa 农场出来当兵。你认识其他 50 个老乡 — 6 个回不来。你打 Antietam 1862 — 一天死 23000 人（美国单日死亡纪录至今）。你不为废奴打 — 你为"联邦完整"打。1863 解放宣言后你纠结 — 现在我也算为"黑人解放"打吗？1865 战后你回 Iowa 用"土地法案"得了 160 英亩 — 比战前还富。',
        en: 'At 19 you left an Iowa farm to enlist. 50 boys from your county went; 6 didn\'t return. You fought Antietam 1862 — 23,000 casualties in one day (still the deadliest day in US history). You didn\'t enlist for abolition — for "Union." After the 1863 Emancipation Proclamation you wrestled — am I now also fighting for Black freedom? After 1865 you went home to Iowa, took 160 acres under the Homestead Act — richer than before the war.',
      },
      hook: {
        cn: '如果你是普通兵 — 你为"联邦"打，意外帮黑人解放，回家拿地致富。"无意之中做对的事"是道德吗？还是只是运气？',
        en: 'If you were the soldier — you fought for "Union," accidentally helped end slavery, came home rich on land. Is "doing right by accident" moral, or just lucky?',
      },
    },
    {
      emoji: '👧',
      name: { cn: 'Mary（虚构同龄人）', en: 'Mary (fictional peer)' },
      role: { cn: '13 岁，弗吉尼亚被解放的黑人女孩', en: '13-year-old, Virginia newly freed Black girl' },
      bio: {
        cn: '你跟 Willow 同龄。1865 4 月你妈妈带你站在 Richmond 街头看联邦军入城 — 你第一次看到法律意义上你"自由"了。爸爸 1862 年逃奴参军，活着回来。你爷爷 1860 被卖到密西西比 — 找不回来。你能进 Freedmen\'s Bureau 学校 — 第一次学读写。13 岁开始读写 — 你跟 Willow 隔了 160 年的"识字鸿沟"。',
        en: 'Same age as Willow. In April 1865 your mother led you to Richmond\'s street to watch Union troops enter — the first time you were "legally free." Your father escaped slavery in 1862 and returned alive. Your grandfather sold to Mississippi in 1860 — never found. You\'ll attend a Freedmen\'s Bureau school — first time reading and writing. Beginning literacy at 13 — 160 years of "literacy gap" separates you from Willow.',
      },
      hook: {
        cn: '160 年后 Willow 在加州学校跟黑人同学（你的曾曾曾孙女？）一起读哈佛准备的论文。她写"我祖辈自由"很容易 — 你写"我自由"用了你的童年。"代际进步"是怎么累积的？',
        en: '160 years later, Willow co-writes Harvard-prep essays with Black classmates (your great-great-great-granddaughters?). She writes "my ancestors freed" easily; you spent your childhood becoming "free." How does "generational progress" compound?',
      },
    },
  ],

  examPoints: {
    cn: [
      'Fort Sumter 1861.4 — 内战开战',
      'Emancipation Proclamation 1863.1.1 解放黑奴宣言（林肯）',
      'Battle of Gettysburg 1863.7 葛底斯堡 — 转折点',
      'Gettysburg Address 1863.11 — "of the people, by the people, for the people"',
      'Sherman\'s March to the Sea 1864 谢尔曼向海行军',
      'Appomattox 1865.4 — Lee 向 Grant 投降',
      '13th/14th/15th Amendments — 废奴 / 公民权 / 黑人投票权',
      'Reconstruction 重建时期 1865-1877 / Jim Crow Laws 后续',
    ],
    en: [
      'Fort Sumter, April 1861 — war begins',
      'Emancipation Proclamation, Jan 1, 1863 (Lincoln)',
      'Battle of Gettysburg, July 1863 — turning point',
      'Gettysburg Address, Nov 1863 — "of the people, by the people, for the people"',
      'Sherman\'s March to the Sea, 1864',
      'Appomattox, April 1865 — Lee surrenders to Grant',
      '13th/14th/15th Amendments — abolition / citizenship / Black male suffrage',
      'Reconstruction 1865-1877 → followed by Jim Crow Laws',
    ],
  },
};

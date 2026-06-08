// ─── 同伴笔记本架构 v1 · The Meiji Restoration 1868 ─────────────
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 核心考点卡
//   3. thinkingQuestions（出口批判性思考）— 开放式 DBQ 入门题
//
// 与 storyboard 的关系：
//   - storyboard 提供情感锚点（下级武士 / 西乡隆盛 / 农家女儿 三条故事线）
//   - notebook 提供考点闭环（王政復古、尊王攘夷、萨长同盟、五条御誓文、
//     废藩置县、征兵制、地税改革、岩仓使节团、富国强兵、西南战争、
//     洋务运动对照 — 补完 AP World Unit 6 课纲）
//
// 课纲对齐：
//   - AP World History Modern — Unit 6 (1750-1900)：Topic 6.2 State Expansion +
//     6.4 Reactions to the Industrial Economy
//   - CA HSS Grade 10 / HS World History — 工业化与帝国时代的东亚回应
//
// 文化对应硬禁：全程用日本自己的真实术语（天皇 / 幕府 / 藩 / 大名 / 武士 / 将军），
//   绝不 Sinicize 成中国概念。写中国时才用中国术语。
//
// schemaVersion: 1 · notebookVersion: meiji-restoration-1868-v1

export var notebook = {
  topicId: 'meiji-restoration-1868',
  topicNameCn: '明治维新 1868',
  topicNameEn: 'The Meiji Restoration 1868',
  schemaVersion: 1,
  companion: {
    nameCn: '小 U',
    nameEn: 'Xiao U',
    age: 12,
    grade: 7,
    identity: 'ABC (Asian-American, Chinese heritage)',
    voice: 'peer learning companion, same age as reader',
  },

  // ─── 入口：小 U 的预习笔记（学习 schema 脚手架，不剧透）───────
  preview: {
    cn: `今天老师说我们要学 1868 年的明治维新（the Meiji Restoration）。
她说这是 AP World 第六单元「工业化的后果」里的一道大题——
讲一个非西方国家被西方逼到墙角后，怎么回应。

她先抛了个反常识的事实：1853 年四艘冒黑烟的美国军舰开进江户湾，逼日本开国；
十五年后，一群二三十岁的下级武士推翻了统治日本两百多年的幕府，
然后干了一件很少见的事——他们用十年时间，亲手拆掉了把自己变成「武士」的那整套制度。

我回家问我妈，她说她在国内学过洋务运动，但课本里明治维新只有一句话：
「日本走上资本主义道路、对外扩张」。她说她也不太清楚日本内部到底改了什么。
老师说这正常——这一题中国家长大多帮不上太多，但有个例外：
我们在国内学过的洋务运动（自强运动），恰好是这一课最锋利的对照，那是我们的主场。

她给了一张纸，上面是日本自己的真实词（老师特别强调：别把它们当成中国的概念）：

天皇（Emperor / Tennō）、幕府（bakufu）、将军（shōgun）、
藩（han）、大名（daimyō）、武士（samurai）。

还有一串维新的关键词：尊王攘夷（sonnō jōi）、萨长同盟（Satchō Alliance）、
王政復古、五条御誓文（Charter Oath）、废藩置县（haihan chiken）、
征兵令（conscription）、地税改革、岩仓使节团（Iwakura Mission）、
富国强兵（fukoku kyōhei）、西南战争（Satsuma Rebellion）。

我先记下来，等下读三个故事——一个爬进新政府、亲手废掉自己阶级的下级武士、
维新最大的英雄西乡隆盛（夹在新旧之间、最后两边都放不下的那个人）、
还有一个乡下农家的女儿（承受新税和征兵的那一侧）——
读完再回来对照这张单子，看我能不能解释。

老师说了一句我抄在笔记本第一页：「屋里的人在算「怎么把国家变强」；
屋外的人在承受「变强」落到自己身上的重量。这两件事，是同一段历史的两面。」`,
    en: `Today my teacher said we're learning the 1868 Meiji Restoration.
She said it's a big question in AP World's Unit 6 "Consequences of Industrialization" —
about how one non-Western country answered back when the West pushed it into a corner.

She opened with a counterintuitive fact: in 1853 four American warships trailing black
smoke steamed into Edo Bay and forced Japan to open up. Fifteen years later, a group of
young low-ranking samurai in their twenties and thirties overthrew the bakufu that had
ruled Japan for over two centuries — and then did something rare: over ten years they
dismantled, with their own hands, the entire system that had made them "samurai."

When I got home I asked my mom. She said she studied the Self-Strengthening Movement back
in China, but the Meiji Restoration was one line in her textbook: "Japan took the
capitalist road and expanded abroad." She wasn't sure what actually changed inside Japan.
Teacher said that's normal — most Chinese parents can't help much here, with one exception:
the Self-Strengthening Movement we learn in China is exactly this lesson's sharpest contrast,
and that's our home turf.

She gave us a sheet with Japan's own real terms (and stressed: don't treat them as Chinese
concepts):

天皇 (Emperor / Tennō), 幕府 (bakufu), 将军 (shōgun),
藩 (han), 大名 (daimyō), 武士 (samurai).

Plus a string of Meiji keywords: 尊王攘夷 (sonnō jōi), 萨长同盟 (Satchō Alliance),
王政復古 (Imperial Restoration), 五条御誓文 (Charter Oath), 废藩置县 (haihan chiken),
征兵令 (conscription), 地税改革 (land-tax reform), 岩仓使节团 (Iwakura Mission),
富国强兵 (fukoku kyōhei), 西南战争 (Satsuma Rebellion).

Let me write these down. After I read the three stories — a low-ranking samurai who climbs
into the new government and abolishes his own class, Saigō Takamori, the restoration's
greatest hero caught between old and new with nowhere to go, and a girl in a farming family
in the countryside who bears the new taxes and conscription — I'll come back and check
whether I can explain each one.

Teacher said one line I copied onto the first page of my notebook: "The people inside the
room are calculating how to make the country strong; the people outside are bearing the
weight of 'getting strong' as it lands on them. Those two things are two faces of the
same history."`,
    keyTerms: [
      { cn: '天皇（日本特有的神圣血脉象征，≠ 中国皇帝）', en: 'Emperor / Tennō' },
      { cn: '幕府 / 将军（实际掌权的军事政府 / 其世袭首脑）', en: 'bakufu / shōgun' },
      { cn: '藩 / 大名（半独立领地 / 其统治者）', en: 'han / daimyō' },
      { cn: '武士（世袭带刀统治阶层，约占人口 5-6%）', en: 'samurai' },
      { cn: '黑船（佩里 1853 年率领的美国军舰）', en: 'Black Ships' },
      { cn: '不平等条约（领事裁判权 + 协定关税）', en: 'unequal treaties' },
      { cn: '尊王攘夷（尊崇天皇、驱逐蛮夷）', en: 'sonnō jōi' },
      { cn: '萨长同盟（萨摩—长州倒幕联盟，1866）', en: 'Satchō Alliance' },
      { cn: '王政復古（1868 权力收归天皇）', en: 'Imperial Restoration' },
      { cn: '五条御誓文（1868 新政府纲领）', en: 'Charter Oath' },
      { cn: '废藩置县（1871 废藩、设府县）', en: 'haihan chiken' },
      { cn: '富国强兵（维新口号：富国、强军）', en: 'fukoku kyōhei' },
      { cn: '西南战争（1877 武士最后的反抗）', en: 'Satsuma Rebellion' },
      { cn: '洋务运动（同代清朝的自强运动，对照用）', en: 'Self-Strengthening Movement' },
    ],
    // mustKnow: true = 必考必拼，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点拼写，不加音频
    keyFigures: [
      {
        nameCn: '西乡隆盛',
        nameEn: 'Saigō Takamori',
        ipa: '/ˈsaɪɡoʊ ˌtɑːkɑːˈmɔːri/',
        roleCn: '1828-1877。维新最大的军事英雄，萨长同盟萨摩一方代表、戊辰战争倒幕军实际统帅；维新成功后却夹在他亲手建立的新政府和被新国家抛下的旧武士之间，1877 年在西南战争中兵败、于鹿儿岛城山自尽——建国的人死在自己建的国手里',
        roleEn: "1828-1877. The restoration's greatest military hero — Satsuma's representative in the Satchō Alliance and the real commander of the anti-bakufu army in the Boshin War. After victory he was caught between the centralized new government he helped build and the old samurai it left behind; he was defeated in the 1877 Satsuma Rebellion and took his own life at Shiroyama in Kagoshima — the man who founded the nation died at the hands of the nation he founded",
        mustKnow: true,
        audioKey: 'saigo-takamori',
      },
      {
        nameCn: '明治天皇睦仁',
        nameEn: 'Emperor Meiji (Mutsuhito)',
        ipa: '/ˌmeɪdʒi ... muːˈtsuːhiːtoʊ/',
        roleCn: '1852-1912。维新中被各方共同抬出来的少年天皇——王政復古名义上把权力收归他，但他登基时还是少年，真正操盘的是一小群维新元勋，他更像是被用来提供正当性的神圣象征',
        roleEn: "1852-1912. The boy emperor whom all sides raised up together during the restoration. The Imperial Restoration nominally returned power to him, but he was still a youth when enthroned; a small group of restoration elders actually ran things, and he served more as the sacred symbol used to supply legitimacy",
        mustKnow: true,
        audioKey: 'emperor-meiji-mutsuhito',
      },
      {
        nameCn: '大久保利通',
        nameEn: 'Ōkubo Toshimichi',
        ipa: '/ˈoʊkuːboʊ ˌtoʊʃiˈmiːtʃi/',
        roleCn: '1830-1878。维新核心元勋、萨摩出身，岩仓使节团成员，回国后是中央集权最强力的推手——废藩置县、征兵、地税改革背后的冷静操盘手，与昔日同乡西乡在 1877 年走到对立面',
        roleEn: "1830-1878. A core restoration elder from Satsuma and a member of the Iwakura Mission. After returning he was the most forceful driver of centralization — the cool-headed architect behind haihan chiken, conscription, and land-tax reform, ending up on the opposite side from his old Satsuma compatriot Saigō in 1877",
        mustKnow: true,
        audioKey: 'okubo-toshimichi',
      },
      {
        nameCn: '岩仓具视',
        nameEn: 'Iwakura Tomomi',
        ipa: '/ˌiːwɑːˈkuːrɑː toʊˈmoʊmi/',
        roleCn: '1825-1883。岩仓使节团团长，带队出访欧美近两年，实地考察西方工厂、议会、学校、军队，带回「必须从制度根上学西方」的结论',
        roleEn: "1825-1883. Leader of the Iwakura Mission, which toured Europe and the United States for nearly two years inspecting Western factories, parliaments, schools, and armies, and brought back the conclusion that Japan had to learn from the West at the level of institutions, not just buy a few guns",
        mustKnow: true,
        audioKey: 'iwakura-tomomi',
      },
      {
        nameCn: '坂本龙马',
        nameEn: 'Sakamoto Ryōma',
        ipa: '/ˌsɑːkɑːmoʊtoʊ ˈrjoʊmɑː/',
        roleCn: '1836-1867。土佐浪人，1866 年在京都居中牵线，促成世仇萨摩与长州结成萨长同盟，是维新军事联盟的关键撮合者',
        roleEn: "1836-1867. A rōnin from Tosa who brokered the 1866 alliance in Kyoto between the bitter rivals Satsuma and Chōshū, the key matchmaker behind the restoration's military coalition",
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'meiji-restoration',
      termCn: '明治维新 / 王政復古',
      termEn: 'Meiji Restoration / Imperial Restoration',
      defCn: '1868 年开始，日本一群年轻武士推翻统治了两百多年的幕府，把权力名义上交还给天皇，然后自上而下把整个旧国家拆了重建。「王政復古」字面意思是「把权力还给天皇」，但它干的是彻头彻尾的现代化改造。',
      defEn: 'Starting in 1868, a group of young Japanese samurai overthrew the bakufu that had ruled for over two centuries, nominally returned power to the Emperor, and then rebuilt the entire old state from the top down. The "Imperial Restoration" name literally means "returning power to the Emperor," but in practice it was a full-scale modern makeover.',
      standardRef: ['AP World — Unit 6 (Topic 6.2)', 'CA HSS Grade 10'],
      examFrequency: 'highest',
      storyAnchor: {
        standaloneText: {
          cn: `先把整道题的「框」搞清楚。

**明治维新（Meiji Restoration）** = 1868 年起，一群二三十岁的下级武士推翻统治日本两百多年的
**幕府**（bakufu），把权力名义上收归 **天皇**（睦仁，即明治天皇），然后自上而下把整个旧国家拆了重装的过程。
1868 年 1 月 3 日新政府宣布的「**王政復古**」，字面意思是「把权力还给天皇」。

但有个反讽必须记住：它叫「復古（restoration）」，干的却是**改头换面**的事——
不是回到古代，而是借「天皇」这个古老的正当性，造一个全新的中央集权现代国家。

注意：这里的「天皇」是日本特有的、被尊为神圣血脉的象征，两百多年里基本没实权，
**不是**中国那种「改朝换代、实掌天下」的皇帝。别用龙袍、玉玺、宰相那一套去套它。

**考点关键句**：明治维新 = 自上而下的现代化；「復古」是名，「改头换面」是实；天皇是正当性来源，真正操盘的是维新元勋。`,
          en: `Get the "frame" of the whole topic straight first.

**The Meiji Restoration** = from 1868, a group of young low-ranking samurai in their
twenties and thirties overthrew the **bakufu** that had ruled Japan for over two centuries,
nominally returned power to the **Emperor** (Mutsuhito, Emperor Meiji), and then rebuilt
the entire old state from the top down. The "**Imperial Restoration**" the new government
proclaimed on January 3, 1868 literally means "returning power to the Emperor."

But hold onto one irony: it's called a "restoration," yet what it did was a total
**makeover** — not a return to antiquity, but using the Emperor's ancient legitimacy to
build a brand-new centralized modern state.

One thing to watch: the "Emperor / Tennō" here is a uniquely Japanese sacred symbolic figure
who held almost no real power for over two hundred years — **not** the kind of Chinese emperor
who changes dynasties and personally rules all under heaven. Don't read it through that lens.

**Key exam sentence**: the Meiji Restoration = top-down modernization; "restoration" in name,
"makeover" in fact; the Emperor is the source of legitimacy, while the restoration elders
actually ran things.`,
        },
        xiaoweiNote: {
          cn: `我一开始把「天皇」自动翻成「皇帝」，被老师纠正了。
口诀：天皇是「神圣的牌子」，不是「实掌天下的皇帝」——招牌很重，握牌的另有其人。`,
          en: `At first I auto-translated "Tennō" as "emperor" and the teacher corrected me.
Mnemonic: the Tennō is a "sacred nameplate," not an emperor who personally rules — the
nameplate is heavy, but the hands holding it belong to someone else.`,
        },
      },
    },

    {
      id: 'black-ships-treaties',
      termCn: '黑船 + 不平等条约',
      termEn: 'Black Ships & Unequal Treaties',
      defCn: '「黑船」指 1853 年美国准将佩里带来的冒黑烟军舰，用炮口逼日本打开国门。之后日本被迫签下一系列不平等条约，外国人在日本犯法可以不受日本法律管，日本也不能自己定关税。这是整场维新的起点。',
      defEn: '"Black Ships" refers to the smoke-trailing American warships that Commodore Perry brought in 1853 to force Japan open at gunpoint. Japan then had to sign unequal treaties giving foreigners immunity from Japanese law and stripping Japan of the right to set its own tariffs. This is the starting point of the whole restoration.',
      standardRef: ['AP World — Unit 6', 'CA HSS Grade 10'],
      examFrequency: 'high',
      storyAnchor: {
        standaloneText: {
          cn: `这是整场维新的**导火索**，因果链的第一环，必背。

1853 年 7 月 8 日，美国海军准将佩里（Matthew Perry）率四艘冒黑烟的军舰——俗称「**黑船**」——
开进江户湾，逼日本开国。1854 年带八艘回来，幕府被迫签《神奈川条约》（1854.3.31），
结束两百多年的「锁国」。随后几年签下一系列 **不平等条约**：
- **领事裁判权**（外国人在日本犯法不归日本法律管）；
- **协定关税**（日本不能自己定关税）。

为什么它点燃了一切：屈辱感。幕府被骂软弱卖国——「西方船坚炮利我们挡不住，
那为什么不把蛮夷赶走？」这股愤怒直接催生了下一张卡「尊王攘夷」。

考点关键句：黑船（外部冲击）+ 不平等条约（屈辱）= 维新因果链的起点。
没有黑船叩关的羞辱，就没有后面下级武士的造反。`,
          en: `This is the **fuse** of the whole restoration, the first link in the causal chain.
Memorize it.

On July 8, 1853, U.S. Commodore Matthew Perry led four warships trailing black smoke — the
"**Black Ships**" — into Edo Bay and forced Japan to open. He returned with eight in 1854,
and the bakufu was forced to sign the Convention of Kanagawa (March 31, 1854), ending over
two centuries of national seclusion. Over the next few years came a series of **unequal
treaties**:
- **extraterritoriality** (foreigners who broke the law in Japan were not subject to
  Japanese courts);
- **treaty tariffs** (Japan could not set its own tariffs).

Why it lit everything: humiliation. The bakufu was attacked as weak and treasonous — "we
can't stop the West's ships and guns, so why don't we just drive the barbarians out?" That
anger directly fed the next card, "sonnō jōi."

Key exam sentence: Black Ships (external shock) + unequal treaties (humiliation) = the start
of the restoration's causal chain. Without the shame of the Black Ships, there's no later
revolt of the low-ranking samurai.`,
        },
        xiaoweiNote: {
          cn: `舞台那一节让我看清：日本之前躲在海洋后面锁国两百年，黑船一来，
那道天然屏障突然不管用了。口诀：黑船 = 把日本从「锁国」推进「开国」的那一脚。`,
          en: `The "stage" section made it clear: Japan had hidden behind the ocean in
seclusion for two centuries, and when the Black Ships came, that natural barrier suddenly
stopped working. Mnemonic: the Black Ships = the kick that shoved Japan from "seclusion"
into "opening up."`,
        },
      },
    },

    {
      id: 'sonno-joi',
      termCn: '尊王攘夷',
      termEn: 'sonnō jōi',
      defCn: '反幕武士喊的口号，意思是「尊崇天皇、把西方蛮夷赶走」。这个口号后来发生了大反转——挨了西方军舰的炮才领悟：要赶走蛮夷，必须先学会蛮夷的本事。',
      defEn: 'The slogan of the anti-bakufu samurai activists, meaning "revere the Emperor, expel the Western barbarians." The slogan later flipped on itself — after being shelled by Western warships, they realized: to drive out the barbarians, you first have to learn what makes them strong.',
      standardRef: ['AP World — Unit 6', 'AP World DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        standaloneText: {
          cn: `**尊王攘夷（sonnō jōi）** = 反幕志士的旗号，字面意思「**尊崇天皇、把西方蛮夷赶出去**」。

它的逻辑：幕府没本事保护日本、还签了屈辱条约，那就**把权力还给天皇**、**把蛮夷赶下海**。
扛这面旗的主体，是又穷又有抱负的**下级武士**。

但这里藏着这一课最锋利的反讽：喊「攘夷」（赶走蛮夷）的人，
1863-64 年被西方狠揍一顿后——萨摩 1863 年与英国冲突、长州 1864 年挨列强联合舰队炮轰、
城被烧、炮台被夷平——痛苦地领悟了一件可怕的事：**要赶走蛮夷，先得变成蛮夷**。
旧式的刀和长矛根本打不过西方的舰炮。于是「攘夷」（赶走）悄悄变成了「师夷」（先学他们的本事）。

考点关键句：尊王攘夷 = 维新的意识形态点火器；它最终自我反转——
从「赶走蛮夷」变成「先变成蛮夷再保住自己」。这个反转就是维新真正的起点。`,
          en: `**sonnō jōi** = the banner of the anti-bakufu activists, literally "**revere the
Emperor, expel the barbarians**" (drive the Western barbarians out).

Its logic: the bakufu couldn't protect Japan and even signed humiliating treaties, so
**return power to the Emperor** and **drive the barbarians into the sea**. The people
carrying this banner were the poor but ambitious **low-ranking samurai**.

But here lies the sharpest irony of the lesson: the people shouting "expel the
barbarians," after the West thrashed them in 1863-64 — Satsuma clashed with Britain in
1863, Chōshū was shelled by a joint Western fleet in 1864, towns burned, batteries leveled
— painfully grasped something frightening: **to expel the barbarians, you first have to
become them**. Old swords and spears were no match for Western naval guns. So "expel" quietly
turned into "first learn their skills."

Key exam sentence: sonnō jōi = the ideological igniter of the restoration; it ultimately
reversed on itself — from "drive the barbarians out" to "become the barbarian first, to
save yourself." That reversal is the restoration's real starting point.`,
        },
        xiaoweiNote: {
          cn: `下级武士那一遍最戳我：他半夜油灯下磨刀发誓赶蛮夷，挨了炮才想明白——
要赶走他们，得先成为他们。口诀：攘夷 → 师夷，赶走变成学习。`,
          en: `The low-ranking samurai's lens hit me hardest: he sharpens his sword by lamplight
swearing to drive the barbarians out, and only after being shelled does he realize — to drive
them out, he has to become them first. Mnemonic: "expel" → "learn from"; driving out turns
into learning.`,
        },
      },
    },

    {
      id: 'satcho-alliance',
      termCn: '萨长同盟',
      termEn: 'Satsuma-Chōshū Alliance',
      defCn: '1866 年，两个本是世仇的日本西南藩——萨摩和长州——结成的倒幕军事联盟。这两个藩离江户最远、最早接触西方武器，是推翻幕府的核心军事力量。',
      defEn: 'The military alliance formed in 1866 between two once-bitter rival domains in southwestern Japan — Satsuma and Chōshū. These two domains were farthest from Edo, had the earliest contact with Western weapons, and became the core military force that overthrew the bakufu.',
      standardRef: ['AP World — Unit 6'],
      examFrequency: 'mid',
      storyAnchor: {
        standaloneText: {
          cn: `**萨长同盟（Satchō Alliance）** = 1866 年 1 月，两个本是世仇的西南外样大名藩——
**萨摩**（今鹿儿岛，南端）和 **长州**（今山口，本州最西端）——结成的倒幕军事联盟。

为什么是这两个藩：它们离江户最远、对幕府最不服、跟西方（尤其英国）接触最早、买洋枪洋炮最积极。
**维新是从边缘打进中心的。**

牵线人是土佐浪人 **坂本龙马**——他在京都居中撮合，让两个死对头握手：
萨摩出 **西乡隆盛**，长州出木户孝允。萨摩用跟英国做军火生意的渠道，给长州供枪。
从此这个联盟成了推翻幕府的核心军事力量。

考点关键句：萨长同盟（1866）= 倒幕的军事核心；它证明维新的力量来自**边缘**（西南外样藩），
不是来自中央。世仇结盟靠的是共同的敌人（幕府）+ 中间人（坂本龙马）。`,
          en: `**The Satsuma-Chōshū Alliance (Satchō Alliance)** = the anti-bakufu military
alliance formed in January 1866 between two once-bitter rivals among the southwestern outer
domains — **Satsuma** (today's Kagoshima, the far south) and **Chōshū** (today's Yamaguchi,
the western tip of Honshū).

Why these two domains: they were farthest from Edo, least loyal to the bakufu, earliest to
contact the West (Britain especially), and keenest to buy Western guns. **The restoration was
fought from the edges into the center.**

The matchmaker was the Tosa rōnin **Sakamoto Ryōma**, who brokered it in Kyoto and made the
two enemies shake hands: Satsuma sent **Saigō Takamori**, Chōshū sent Kido Takayoshi. Satsuma,
through its arms-trading channels with Britain, supplied Chōshū with guns. From then on the
alliance became the core military force that overthrew the bakufu.

Key exam sentence: the Satchō Alliance (1866) = the military core of the anti-bakufu cause;
it shows the restoration's power came from the **periphery** (the southwestern outer domains),
not the center. Bitter rivals united through a shared enemy (the bakufu) plus a go-between
(Sakamoto Ryōma).`,
        },
        xiaoweiNote: {
          cn: `我记这条用一个画面：两个死对头藩，谁也吞不下谁，靠一个第三方浪人撮合才结盟。
口诀：萨 + 长，靠龙马牵线，从西南角打进江户。`,
          en: `I remember this with one image: two enemy domains, neither able to swallow the
other, allied only because a third-party rōnin brokered it. Mnemonic: Satsuma + Chōshū,
brokered by Ryōma, fighting from the southwestern corner into Edo.`,
        },
      },
    },

    {
      id: 'charter-oath',
      termCn: '五条御誓文',
      termEn: 'the Charter Oath',
      defCn: '1868 年 4 月新政府刚建立就颁布的五条纲领，是维新「要去哪里」的总宣言。最重要的是第五条：「向全世界求取知识，以巩固天皇统治的根基。」——学西方是手段，保住日本自己的核心是目的。',
      defEn: 'The five-point program the new government issued in April 1868 right after it was formed — the overall declaration of where the restoration was heading. The most important line is the fifth article: "Knowledge shall be sought throughout the world so as to strengthen the foundations of imperial rule." — learning from the West is the means, keeping Japan\'s own core is the end.',
      standardRef: ['AP World — Unit 6', 'AP World DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        standaloneText: {
          cn: `**五条御誓文（Charter Oath）** = 1868 年 4 月 6 日，新政府刚立就颁布的纲领，
是维新「新方向」的总宣言。它承诺「广兴会议、万机决于公论」「破旧来之陋习」「求知识于世界」。

最该背的是第五条原文：
> 「应向全世界求取知识，以巩固**天皇**统治的根基。」
> （Knowledge shall be sought throughout the world so as to strengthen the foundations of imperial rule.）

注意：这句话**不是**说「我们要变成西方」，而是说「学世界的本事，来巩固天皇的根基」。
**学西方是手段，保住日本自己的核心（天皇、国家）是目的。**

这个起点跟清朝洋务运动「中体西用」（西方技术可以学、中国根本制度不能动）其实**相似**——
区别不在起点，在后来走了多远。

**考点关键句**：五条御誓文（1868）= 维新的方向宣言；核心逻辑是「求知识于世界，以巩固天皇根基」——
学西方为手段，保自己为目的。这是对照洋务运动的起跑线。`,
          en: `**The Charter Oath** = the program the new government issued on April 6, 1868,
right after it formed — the overall declaration of the restoration's "new direction." It
promised to "establish assemblies and decide all matters by public discussion," "break with
evil customs of the past," and "seek knowledge throughout the world."

The line to memorize is the fifth article:
> "Knowledge shall be sought throughout the world so as to strengthen the foundations of
> imperial rule."
> (Translation: seek knowledge from all over the world, to strengthen the foundations of the
> Emperor's rule.)

Notice it does **not** say "we will become the West"; it says "learn the world's skills to
strengthen the Emperor's foundations." **Learning from the West is the means; preserving
Japan's own core (the Emperor, the state) is the end.**

This starting point actually **resembles** the Qing Self-Strengthening Movement's "Chinese
essence, Western function" (learn Western technology, but never touch China's fundamental
institutions) — the difference lies not in the starting point but in how far each went
afterward.

Key exam sentence: the Charter Oath (1868) = the restoration's direction statement; its core
logic is "seek knowledge throughout the world to strengthen the Emperor's foundations" —
learning from the West as means, preserving the self as end. This is the starting line for
comparison with the Self-Strengthening Movement.`,
        },
        xiaoweiNote: {
          cn: `这条我背第五条原话。我的锚：「学世界的本事，保自己的核心」——
这句话既是日本的起点，也是清朝洋务运动的起点。两边起跑线几乎一样，后面才分岔。`,
          en: `For this card I memorize the fifth article verbatim. My anchor: "learn the
world's skills to protect your own core" — that line is both Japan's starting point and the
Qing Self-Strengthening Movement's starting point. The two start almost identically; they
only fork later.`,
        },
      },
    },

    {
      id: 'haihan-chiken',
      termCn: '废藩置县',
      termEn: 'haihan chiken (abolition of the domains)',
      defCn: '1871 年新政府一纸令下，废掉两百多个半独立的「藩」，大名的土地全部收归中央，改设府县由中央官员管理。这是把分裂的旧日本变成统一中央集权国家最关键的一步。',
      defEn: 'In 1871, with a single decree, the new government abolished the 200-plus semi-independent "han" (domains), took all daimyō lands into central hands, and replaced them with prefectures run by centrally-appointed officials. This was the most crucial step in turning a fragmented old Japan into a unified centralized state.',
      standardRef: ['AP World — Unit 6 (Topic 6.2)', 'CA HSS Grade 10'],
      examFrequency: 'highest',
      storyAnchor: {
        standaloneText: {
          cn: `**废藩置县（haihan chiken）** = 1871 年，新政府一纸令下，废掉两百多个 **藩**、
把 **大名** 的领地全部收归中央，改设府县，由中央派去的官员管。
两百多年的封建版图，几个月内被抹平。

为什么它是维新**最大胆的一步**：日本当时根本不是一个统一中央集权国家，
而是一套「将军—大名—武士」层层效忠的幕藩体制，两百多个藩各有自己的军队、财政、法律。
废藩置县**把权力从地方手里彻底夺回中央**——这是「自上而下重建国家」最关键的一刀。

注意：「藩」是日本特有的半独立领地，**不是**中国的「封国」那套；
「大名」是藩的统治者，别套中国的诸侯/王爷概念。

对照洋务运动：这正是日本「翻到制度根上」的代表动作——
清朝洋务运动主要停在「用」的层面（建船厂、买军舰），从没动过这种级别的制度根基。

**考点关键句**：废藩置县（1871）= 把分裂的幕藩体制一次性变成中央集权——维新「翻到制度根」的标志动作。`,
          en: `**haihan chiken** = in 1871, with a single decree, the new government abolished
the two-hundred-plus **han (domains)**, took all the **daimyō**'s lands into central hands,
and replaced them with prefectures run by officials sent from the center. The feudal map of
over two centuries was erased within months.

Why it was the restoration's **boldest step**: Japan at the time was not a unified
centralized state at all, but a bakufu-domain system held together by layered loyalty
("shōgun — daimyō — samurai"), with each of the 200-plus domains having its own army,
finances, and laws. haihan chiken **clawed power back from the localities entirely to the
center** — the most crucial cut in "rebuilding the state from the top down."

One thing to watch: a "han" is a uniquely Japanese semi-independent domain, **not** a Chinese
feudal fief; a "daimyō" is the domain's ruler — don't map it onto Chinese feudal lords or
princes.

Compared with the Self-Strengthening Movement: this is the signature move of Japan's "reaching
the institutional root" — the Qing movement mostly stopped at the level of "function" (building
shipyards, buying warships) and never touched institutional foundations of this magnitude.

Key exam sentence: haihan chiken (1871) = turning a fragmented bakufu-domain system into a
centralized state in one stroke — the signature act of the restoration "reaching the
institutional root."`,
        },
        xiaoweiNote: {
          cn: `我把这条和洋务运动绑在一起记：日本敢把两百多个「藩」一次抹平，
清朝从没敢动「体」。口诀：废藩置县 = 动「根」，不是动「皮」。`,
          en: `I bind this card to the Self-Strengthening Movement: Japan dared erase 200-plus
"han" in one go; the Qing never dared touch its "essence." Mnemonic: haihan chiken = moving
the "root," not the "skin."`,
        },
      },
    },

    {
      id: 'conscription-blood-tax',
      termCn: '征兵令 / 血税',
      termEn: 'conscription (the "blood tax")',
      defCn: '1873 年颁布，规定普通男丁满二十一岁必须服兵役，打仗从此不再是武士专属。政府通知里用了「血税」这个词（意思是「用血交的税」），但农民听成官府要抽他们的血，引发了多地暴动。',
      defEn: 'Enacted in 1873, requiring all ordinary men aged twenty-one to serve in the military — war was no longer the samurai\'s exclusive domain. The government\'s announcement used the term "blood tax" (meaning "a tax paid in blood"), but farmers heard it as the authorities wanting to drain their blood, triggering riots in many places.',
      standardRef: ['AP World — Unit 6', 'AP World DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        standaloneText: {
          cn: `**征兵令（conscription）** = 1873 年颁布，规定满二十一岁的普通男丁都要服兵役。
从此**打仗不再是武士的专利**——这一刀同时砸了武士的饭碗、又把国家的手直接伸进了农家。

这一条要从**两侧**理解——发令的人和承受的人，看到的是完全不同的同一件事：
- 政府想说的是：「当兵是每个国民对国家应尽的义务。」
- 但配套告谕里用了「**血税**」（字面「用血交的税」）这个词，农民听成「官府要抽我们的血」。
1873 年多地爆发「血税一揆」（反征兵暴动）——同一个词，发令的人和承受的人理解完全相反。

承受这一侧最具体的样子：官府拿着名册进村念名字，
农家女儿的哥哥被「征」走，去给一个谁也没见过的天皇当兵。从前打仗跟农民无关，现在国家直接从她家抽人。

考点关键句：征兵令（1873）= 废掉武士的军事垄断、把全民编进国家军队；
「血税」一词 = 现代化政策落到没人解释给她听的人头上的真实恐惧。`,
          en: `**Conscription** = enacted in 1873, requiring all ordinary men aged twenty-one to
serve in the military. From then on **war was no longer the samurai's monopoly** — this cut
both smashed the samurai's livelihood and reached the state's hand directly into farming
families.

Read this from **both sides** — the issuer and the bearer saw the exact same word in opposite ways:
- What the government meant: "military service is every citizen's duty to the nation."
- But the accompanying announcement used the word "**blood tax**" (literally "a tax paid in
  blood"), and farmers heard "the authorities want to drain our blood." In 1873 anti-conscription
  riots ("blood-tax uprisings") broke out in many places — the same word, understood in
  opposite ways by the issuer and the bearer.

The most concrete face of that receiving side: officials enter the village with a register
and read out names; the farm girl's brother is "drafted" away to serve an Emperor no one has
ever seen. War used to have nothing to do with farmers; now the state pulls a person straight
out of her home.

Key exam sentence: conscription (1873) = ending the samurai's military monopoly and
enrolling the whole population into the national army; the word "blood tax" = the real fear
of a modernization policy landing on someone no one bothered to explain it to.`,
        },
        xiaoweiNote: {
          cn: `农家女儿那一遍我读得心里发紧：名册念到哥哥名字那一刻，国家第一次直接伸手进她家。
口诀：「血税」——政府说「义务」，她听成「抽血」。同一个词，两个世界。`,
          en: `The farm girl's lens left me tense: the moment the register reaches her brother's
name, the state reaches into her home for the first time. Mnemonic: "blood tax" — the
government says "duty," she hears "drawing blood." Same word, two worlds.`,
        },
      },
    },

    {
      id: 'land-tax-reform',
      termCn: '地税改革',
      termEn: 'land-tax reform',
      defCn: '1873 年，废掉按收成交米的旧年贡，改为按土地价值交固定现金税——不管今年收成好坏，都得交那笔死数。新国家因此有了稳定税收，但农民的风险大了：米价一跌，就得卖东西或借高利贷凑税钱。',
      defEn: 'In 1873, the old grain levy based on the harvest was replaced with a fixed cash tax based on land value — owed regardless of how the harvest went. The new state gained stable revenue, but farmers took on all the risk: if rice prices fell, they had to sell belongings or borrow at high interest to cover the fixed amount.',
      standardRef: ['AP World — Unit 6', 'AP World DBQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        standaloneText: {
          cn: `**地税改革** = 1873 年，废掉按收成交米的旧年贡，改成按 **土地价值** 交 **固定现金税**，
不管今年收成好坏，都得拿出固定的钱。它给新国家提供了稳定的财政——也把风险全压到了农民身上。

为什么必考它（结构/物质因素）：这是「国家变强」背后那笔账由谁买单的最直接证据。
- 从前：交年贡按收成交米，年景不好可以少交、可以求情。
- 维新后：按地价交**现金**，米价一跌，全家就得卖东西、借高利贷去凑那笔死板的税钱。
农家女儿不懂什么叫「现金税」，她只看见母亲半夜在算盘上算来算去，越算眉头越紧。

跟征兵令配对记（1873 两记重锤）：征兵令砸了**武士**的饭碗，地税改革把风险全压到**农民**身上——
同一年，两个阶层各挨一刀，「富国强兵」的「富国」就是这么挤出来的。

考点关键句：地税改革（1873）= 把农业风险从国家转嫁给农民，为新国家挤出稳定财政；
它是「国家变强、农民承重」这枚硬币的「承重」那一面。`,
          en: `**Land-tax reform** = in 1873, the old grain levy based on the harvest was
abolished and replaced with a **fixed cash tax based on land value**, owed regardless of
whether the year's harvest was good or bad. It gave the new state stable revenue — and pushed
all the risk onto the farmers.

Why it's tested (structural / material factors): this is the most direct evidence of who pays
the bill behind "getting the country strong."
- Before: the grain levy was paid in rice by the harvest; in a bad year you could pay less or
  plead your case.
- After the restoration: a **cash** tax by land value; when rice prices fell, the whole family
  had to sell things or borrow at usury to scrape together that rigid sum. The farm girl
  doesn't understand "cash tax"; she only sees her mother at the abacus late at night, her brow
  knotting tighter the longer she counts.

Pair it with conscription (1873's two hammer-blows): conscription smashed the **samurai**'s
livelihood; land-tax reform pushed all the risk onto the **farmers** — in the same year, two
classes each took a cut, and that's how the "rich country" of "rich country, strong army" was
squeezed out.

Key exam sentence: land-tax reform (1873) = shifting agricultural risk from the state onto
the farmers to squeeze out stable revenue for the new state; it's the "bearing the weight"
face of the "country grows strong, farmers bear it" coin.`,
        },
        xiaoweiNote: {
          cn: `我把 1873 当成「双响炮」记：征兵砸武士、地税压农民。
口诀：同一年两记重锤，一记砸刀，一记砸米。`,
          en: `I remember 1873 as a "double blast": conscription smashes the samurai, land tax
crushes the farmers. Mnemonic: two hammer-blows in one year — one smashes the sword, one
smashes the rice.`,
        },
      },
    },

    {
      id: 'iwakura-mission',
      termCn: '岩仓使节团',
      termEn: 'the Iwakura Mission',
      defCn: '1871-1873 年，岩仓具视带着一批日本政府核心官员出访欧美近两年，亲眼看西方的工厂、议会、学校、军队，带回一个结论：日本要活下去，必须从制度根上学西方，不能只买几门炮。',
      defEn: 'In 1871-1873, Iwakura Tomomi led a large group of Japan\'s top government officials on a nearly two-year tour of Europe and the United States, observing Western factories, parliaments, schools, and armies firsthand. They brought back a key conclusion: for Japan to survive, it had to learn from the West at the level of institutions, not just buy a few guns.',
      standardRef: ['AP World — Unit 6 (Topic 6.2)'],
      examFrequency: 'mid',
      storyAnchor: {
        standaloneText: {
          cn: `**岩仓使节团（Iwakura Mission）** = 1871-73 年，一支由 **岩仓具视** 带队、
含 **大久保利通** 等政府核心元勋的庞大使节团，出访欧美近两年，
实地考察西方的工厂、议会、学校、军队。

它为什么重要：它带回了一个**结论**——日本要活下去，必须**从制度根上**学西方，
不能只买几门炮、几条军舰。这句话直接定下了维新「翻到制度根」的总基调，
也是后面废藩、征兵、立宪一系列大改的思想来源。

对照洋务运动：清朝洋务运动也派了留学生、买了军舰，
但它学的主要是「用」（技术）；岩仓使节团带回的结论是要学「**体**」（制度本身）。
**派人出去看世界，两国都做了；带回什么结论、敢改到哪一层，是分岔点。**

考点关键句：岩仓使节团（1871-73）= 维新元勋亲眼看世界后定下「学制度根、不只学技术」的总方向——
这是日本和清朝同样「师夷」却走向不同结果的关键认知差。`,
          en: `**The Iwakura Mission** = in 1871-73, a large embassy led by **Iwakura Tomomi**
and including core government elders such as **Ōkubo Toshimichi** toured Europe and the
United States for nearly two years, inspecting Western factories, parliaments, schools, and
armies firsthand.

Why it matters: it brought back a **conclusion** — for Japan to survive, it had to learn from
the West **at the level of institutions**, not just buy a few cannons or warships. That line
set the keynote of the restoration "reaching the institutional root," and was the source of
the later sweeping reforms — abolishing the domains, conscription, the constitution.

Compared with the Self-Strengthening Movement: the Qing movement also
sent students abroad and bought warships, but it mainly learned "function" (technology); the
Iwakura Mission's conclusion was to learn the "**essence**" (the institutions themselves).
**Both countries sent people out to see the world; what conclusion they brought back, and how
deep they dared to change, is the fork.**

Key exam sentence: the Iwakura Mission (1871-73) = the restoration elders, after seeing the
world with their own eyes, set the direction of "learn the institutional root, not just the
technology" — the key difference in understanding behind Japan and the Qing both "learning
from the West" yet reaching different outcomes.`,
        },
        xiaoweiNote: {
          cn: `我记这条用一句反问：两边都派人出国看了世界，为什么带回的结论不一样？
口诀：看的是同一个西方，敢学的层次不同——日本学「体」，洋务学「用」。`,
          en: `I remember this with a question: both sent people abroad to see the world, so why
did they bring back different conclusions? Mnemonic: they saw the same West, but dared learn
at different depths — Japan learned the "essence," the Self-Strengthening Movement the
"function."`,
        },
      },
    },

    {
      id: 'fukoku-kyohei',
      termCn: '富国强兵',
      termEn: 'fukoku kyōhei',
      defCn: '维新的总口号，字面意思「富国、强军」。目的是把日本变成一个能保住主权、不被西方殖民的工业强国。维新几十年内实现了这个目标，但这股国力随后也把日本推上了对外扩张的路。',
      defEn: 'The overall slogan of the Meiji Restoration, literally "rich country, strong army." The goal was to turn Japan into an industrial power that could hold onto its sovereignty and avoid being colonized by the West. The restoration achieved this within decades, but the same national power then pushed Japan onto a path of outward expansion.',
      standardRef: ['AP World — Unit 6 (Topic 6.2-6.4)', 'CA HSS Grade 10'],
      examFrequency: 'highest',
      storyAnchor: {
        standaloneText: {
          cn: `**富国强兵（fukoku kyōhei）** = 维新的总口号，字面「**富国、强军**」（搭配「殖产興業」=发展产业）。
它是维新一切大改的**目的**：把日本变成一个能保住主权、不被殖民的工业强国。

维新结出的果：日本几十年内从分裂的幕藩体制变成中央集权现代国家——
统一军队、统一税制、义务教育、铁路工厂，1889 年立宪、1890 年开国会。
它成了**唯一一个没被西方殖民、反而自己挤进工业强国行列的非西方国家**。

但要两面一起看：「富国强兵」造出的国力很快转向**对外扩张**——
1894-95 甲午战争打败清朝、1904-05 日俄战争打败俄国。维新让日本免于被殖民，
也把它推上了殖民别人的路，这条扩张线最终通向二十世纪上半叶的战争。

清朝洋务运动喊的**也是**「富国强兵」「自强求富」——**同一个口号**，两条路。
差别不在口号，在改到了多深（见洋务运动那张卡）。

**考点关键句**：富国强兵 = 维新的目的（造一个能自保的工业强国）；
成果是日本免于被殖民，代价是它转身走上扩张/侵略之路——光明与代价同体。`,
          en: `**fukoku kyōhei** = the restoration's overall slogan, literally "**rich country,
strong army**" (paired with "promote industry"). It was the **end** of all the restoration's
big reforms: turning Japan into an industrial power that could keep its sovereignty and avoid
being colonized.

The restoration's fruit: within a few decades Japan went from a fragmented bakufu-domain
system to a centralized modern state — a unified army, a unified tax system, compulsory
education, railways and factories, a constitution in 1889 and a parliament in 1890. It
became the **only non-Western country not colonized by the West that instead squeezed itself
into the ranks of the industrial powers**.

But hold both faces at once: the national strength "rich country, strong army" produced soon
turned to **outward expansion** — defeating the Qing in the First Sino-Japanese War (1894-95)
and Russia in the Russo-Japanese War (1904-05). The restoration spared Japan from being
colonized and also set it on the road to colonizing others, a line of expansion that
ultimately led to the wars of the early twentieth century.

The Qing Self-Strengthening Movement **also** shouted "rich country, strong army" and "self-
strengthening, seek wealth" — **the same slogan**, two roads. The difference lies not in the
slogan but in how deep each reformed (see the Self-Strengthening card).

Key exam sentence: fukoku kyōhei = the restoration's end (building a self-protecting
industrial power); the result was sparing Japan from colonization, the cost was turning Japan
onto the road of expansion / aggression — light and cost, one and the same.`,
        },
        xiaoweiNote: {
          cn: `老师特别提醒：「富国强兵」不是日本独有的，清朝喊的几乎一模一样。
口诀：同一个口号，两条路——别用「口号」分高下，用「改到多深」分。`,
          en: `Teacher specially noted: "rich country, strong army" wasn't Japan's alone — the
Qing shouted almost the identical thing. Mnemonic: same slogan, two roads — don't rank them by
"slogan," rank by "how deep they reformed."`,
        },
      },
    },

    {
      id: 'satsuma-rebellion',
      termCn: '西南战争',
      termEn: 'the Satsuma Rebellion',
      defCn: '1877 年，被新国家剥夺了一切的萨摩旧武士拥西乡隆盛起兵——这是旧日本武士最后一次大规模反抗。起义军在熊本城被政府的农民征兵新军击败，西乡兵败后于城山自尽。这一仗既是武士阶级的葬礼，也是整场维新最大的反讽。',
      defEn: 'In 1877, the old Satsuma samurai who had been stripped of everything by the new state rose up under Saigō Takamori — the last large-scale revolt of Japan\'s old samurai. The rebel army was defeated at Kumamoto Castle by the government\'s farmer-conscript troops; Saigō took his own life at Shiroyama after the defeat. This battle was both the funeral of the samurai class and the sharpest irony of the whole restoration.',
      standardRef: ['AP World — Unit 6 (Topic 6.4)', 'AP World DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        standaloneText: {
          cn: `**西南战争（Satsuma Rebellion）** = 1877 年，被新国家剥夺了一切的萨摩**旧武士**拥
**西乡隆盛** 起兵——这是旧日本武士最后一次大规模反抗，也是它的葬礼。

这场战争为什么是整篇的反讽落点：起义军约一万两三千人北上，被挡在 **熊本城** 下约五十多天——
而守城的，是政府的**征召兵**（农民出身的新军）。**旧式武士的刀，输给了昨天还是农民的征兵新军。**
这恰恰**证明了维新自己造的东西——征兵制——是对的**，也是最残忍的：
证明征兵制成功的那一仗，杀死的恰恰是维新最大的英雄。1877 年 9 月 24 日，西乡兵败，于城山自尽。

别踩这个误解：❌「西乡是反对维新的保守派」→
✅ 他是维新最大的功臣、倒幕军统帅；他起兵是夹在他亲手建立的新国家和被新国家抛弃的旧武士之间的悲剧，
**不是**「一直反对改革」。

考点关键句：西南战争（1877）= 武士阶级的葬礼；农民征兵新军打赢旧武士，
既证明了征兵制、又杀死了维新最大的英雄——维新最锋利的反讽。`,
          en: `**The Satsuma Rebellion** = in 1877, the Satsuma **old samurai**, stripped of
everything by the new state, rose up under **Saigō Takamori** — the last large-scale revolt
of old Japan's samurai, and its funeral.

Why it's the topic's ironic landing point: the rebel army of about 12,000-13,000 marched north
and was held at **Kumamoto Castle** for some fifty-odd days — and the castle's defenders were
the government's **conscripts** (a new army of farmer origin). **The old samurai's sword lost
to the conscript army that had been farmers the day before.** That precisely **proved the
thing the restoration itself built — conscription — was right**, and it was the cruelest
proof: the battle that proved conscription succeeded killed the restoration's greatest hero.
On September 24, 1877, Saigō, defeated, took his own life at Shiroyama.

Watch out for this misconception: ❌ "Saigō was a conservative who opposed the restoration" →
✅ he was its greatest contributor and the commander of the anti-bakufu army; his uprising was
the tragedy of a man caught between the new state he helped build and the old samurai it
abandoned, **not** "someone who always opposed reform."

Key exam sentence: the Satsuma Rebellion (1877) = the funeral of the samurai class; the
farmer-conscript army beat the old samurai, both proving conscription and killing the
restoration's greatest hero — the restoration's sharpest irony.`,
        },
        xiaoweiNote: {
          cn: `这条最让我难受：建国的人，死在自己建的国手里，而且是被自己造的征兵新军打败的。
口诀：熊本城下，刀输给了昨天的农民——维新用自己的成功，杀了自己的英雄。`,
          en: `This card hurts the most: the man who founded the nation died at the hands of the
nation he founded, beaten by the conscript army he helped create. Mnemonic: at Kumamoto
Castle, the sword lost to yesterday's farmers — the restoration used its own success to kill
its own hero.`,
        },
      },
    },

    {
      id: 'self-strengthening-contrast',
      termCn: '洋务运动对照',
      termEn: 'the Self-Strengthening contrast',
      defCn: '明治维新和清朝洋务运动（1861-1895）是同一时代、同一种冲击、喊着几乎同一个口号的两场改革。比较它们为什么走向不同结果，是 AP World 「比较」技能的核心考点。关键不在「谁聪明谁笨」，在于改革改到多深、各自面对的处境有多不同。',
      defEn: 'The Meiji Restoration and the Qing Self-Strengthening Movement (1861-1895) were two reforms in the same era, hit by the same kind of shock, shouting nearly the same slogan. Comparing why they reached different outcomes is the core of AP World\'s "comparison" skill. The key is not "who was smarter" but how deep each reformed and how different their situations were.',
      standardRef: ['AP World — Unit 6 (Comparison skill)', 'CA HSS Grade 10', 'AP World DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        standaloneText: {
          cn: `这是这一课对中国孩子最锋利的对照，也是 AP World 核心技能「比较」的高分点。

**同一个时代，同一种冲击，同一个口号，两条路。**
- 日本被佩里黑船叩开国门（1853）；清朝更早在两次鸦片战争（1840-42、1856-60）被打开。
- 两边喊的目标几乎一样：日本「富国强兵」，清朝洋务运动（自强运动，1861-1895）「自强求富、富国强兵」。
- 连纠结都像：清朝总纲是「**中体西用**」（西方技术可学、中国根本制度不能动）；
  日本五条御誓文也是「学世界本事、保天皇根基」。**起点其实相似。**

**那为什么分道扬镳？**——差别**不在**「日本人聪明、中国人愚蠢」，也**不在**爱不爱国，而在两件事：
1. **改革的深度**：日本几乎把旧国家拆了重装（废藩置县、征兵、立法消灭武士、立宪开国会，**翻到制度根**）；
   清朝洋务运动主要停在「用」（建船厂、买军舰、派留学生），科举、皇权、士绅结构这些「体」基本没动——
   新式工厂像零件一样**栓在**一个没怎么变的旧主体上。
2. **结构约束不同**（必须讲，否则就成了「日本好/中国差」）：日本是**小而集中**的岛国，
   倒幕派夺权后能迅速整合新中央；清朝是**幅员辽阔、人口数亿、靠科举士绅维系**的大一统帝国，
   任何动到「体」的改革，要撼动的既得利益和要协调的中央—地方关系，比日本难一个数量级。
   同样一刀，在日本能切动的，在清朝可能直接把帝国切裂。两边都在各自真实的约束里做选择。

结局：1894-95 甲午战争，明治日本打败经营三十多年洋务运动的清朝。但一场战争的胜负**不等于**文明的优劣判决——
它说明的是两条路径在那个特定竞赛里效果不同，**不是**「日本先进、中国落后」。

考点关键句：日中分流的原因 = 改革深度（翻到根 vs 栓在旧体上）+ 结构约束（小而集中 vs 大而分散），
**不是民族优劣**。甲午只是「期末考」，不是「文明判决」。`,
          en: `This is the lesson's sharpest comparison for Chinese-heritage students, and a high-scoring
point for AP World's core "comparison" skill.

**Same era, same shock, same slogan, two roads.**
- Japan was opened by Perry's Black Ships (1853); the Qing was opened earlier by the two
  Opium Wars (1840-42, 1856-60).
- Both shouted almost identical goals: Japan's "rich country, strong army"; the Qing
  Self-Strengthening Movement (1861-1895)'s "self-strengthening, seek wealth."
- Even the hesitation rhymed: the Qing's keynote was "**Chinese essence, Western function**"
  (learn Western technology, but never touch China's fundamental institutions); Japan's
  Charter Oath, too, was "learn the world's skills, preserve the Emperor's foundations." **The
  starting points actually resemble each other.**

**So why did they diverge?** — the difference lies **not** in "the Japanese were smart, the
Chinese foolish," **nor** in patriotism, but in two things:
1. **Depth of reform**: Japan nearly dismantled and rebuilt the old state (haihan chiken,
   conscription, legally abolishing the samurai, a constitution and parliament — **reaching the
   institutional root**); the Qing Self-Strengthening Movement mostly stopped at "function"
   (building shipyards, buying warships, sending students), while the "essence" — the
   examination system, imperial power, the gentry structure — went largely untouched. New
   factories were **bolted onto** a barely changed old body like parts.
2. **Different structural constraints** (this must be said, or it becomes "Japan good / China
   bad"): Japan was a **small, concentrated** island nation; once the anti-bakufu side seized
   power it could quickly integrate a new center. The Qing was a vast unified empire of hundreds
   of millions held together by the examination-gentry system; any reform touching the "essence"
   had to shake an order of magnitude more entrenched interests and coordinate far harder
   center-locality relations than Japan. The same cut that could move things in Japan might split
   the empire apart in the Qing. Both sides chose within their own real constraints.

The outcome: in the First Sino-Japanese War (1894-95), Meiji Japan defeated the Qing that had
run the Self-Strengthening Movement for over thirty years. But the result of one war does
**not** equal a verdict on a civilization's worth — it shows the two paths had different
effects in that particular contest, **not** that "Japan was advanced, China backward."

Key exam sentence: the cause of the Japan-China divergence = depth of reform (reaching the root
vs. bolted onto the old body) + structural constraints (small and concentrated vs. vast and
dispersed), **not** ethnic superiority. The 1895 war was a "final exam," not a "verdict on
civilizations."`,
        },
        xiaoweiNote: {
          cn: `这条是我的主场——我在国内学过洋务运动，但从没从日本这一侧看过同一场赛。
我提醒自己：别落进「日本赢=日本对、中国输=中国错」的坑。
口诀：不是谁聪明谁笨，是「改到多深」+「处境多难」。`,
          en: `This is my home turf — I learned the Self-Strengthening Movement in China but
never saw the same race from Japan's side. I remind myself: don't fall into "Japan won = Japan
right, China lost = China wrong." Mnemonic: not who's smart or dumb, but "how deep the
reform" + "how hard the situation."`,
        },
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `日本和清朝喊着几乎一样的口号「富国强兵」，结果却分道扬镳。
日本几乎把旧国家拆了重装（翻到制度根），清朝主要停在「用」的层面（栓在旧体上）。

为什么同样的冲击、同样的口号，两场改革走到了不同的深度？
请用两边的具体证据论证，并避免「日本人聪明、中国人愚蠢」这种民族优劣的解释——
想想两国各自面对的处境（岛国小而集中 vs 大一统帝国幅员辽阔）有什么不同。`,
      en: `Japan and the Qing shouted almost the same slogan, "rich country, strong army," yet
diverged. Japan nearly dismantled and rebuilt the old state (reaching the institutional root);
the Qing mostly stopped at "function" (bolted onto the old body).

Why did the same shock and the same slogan lead two reforms to different depths? Argue with
specific evidence from both sides, and avoid the "the Japanese were smart, the Chinese foolish"
kind of ethnic-superiority explanation — think about how each country's situation differed (a
small, concentrated island nation vs. a vast unified empire).`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据 + 看到复杂性**的能力，不看你夸谁贬谁。
- 「改革深度」一边的证据：日本废藩置县（1871）、征兵（1873）、立法消灭武士（1876）；清朝洋务运动主要建船厂、买军舰，科举/皇权/士绅没动。
- 「结构约束」一边的证据：日本小而集中，倒幕派夺权后能快速整合新中央；清朝幅员辽阔、靠科举士绅维系，动「体」要撼动的体量大一个数量级。
高分写法：两个原因都摆出来（深度 + 约束），再说明你认为哪个更关键，并明说「分流≠优劣」。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use evidence and
see complexity**, not at whom you praise or knock.
- Evidence for "depth of reform": Japan's haihan chiken (1871), conscription (1873), legally
  abolishing the samurai (1876); the Qing movement mainly built shipyards and bought warships
  while the examination system, imperial power, and gentry went untouched.
- Evidence for "structural constraints": Japan was small and concentrated, so the anti-bakufu
  side could quickly integrate a new center; the Qing was vast and held together by the
  examination-gentry system, so touching the "essence" meant shaking an order of magnitude more.
High-scoring move: lay out both causes (depth + constraints), then say which you find more
decisive, and state plainly that "divergence ≠ superiority."`,
      conceptsActivated: ['self-strengthening-contrast', 'haihan-chiken', 'fukoku-kyohei'],
    },
    {
      id: 'q2',
      cn: `「国家变强了」和「无数普通人的生活被碾过去了」常常是同一件事的两面。
维新让日本几十年内变成工业强国，但代价由被立法消灭的武士、被新税和征兵碾过的农家女儿来承受。

当一个国家「为了大家好」而高速变强时，由谁来决定、谁来承受代价——这公平吗？
请用具体证据说明你的判断，并避免把维新说成「纯粹成功」或「纯粹压迫」中的任何一种。`,
      en: `"The country grew strong" and "countless ordinary people's lives were ground down" are
often two faces of the same thing. The restoration turned Japan into an industrial power within
decades, but the cost was borne by the legally abolished samurai and the farm girl crushed by
new taxes and conscription.

When a country grows strong fast "for everyone's good," who decides and who bears the cost — is
that fair? Support your judgment with specific evidence, and avoid casting the restoration as
either "purely successful" or "purely oppressive."`,
      hintCn: `提示：好的 DBQ 答案会**同时持有两件事**，而不是二选一（历史学家一直在争这个）。
- 「成功的国家建设」一边：免于被殖民、成了唯一自己挤进工业强国的非西方国家。
- 「承受者的代价」一边：地税改革把风险压给农民、征兵把哥哥从家里抽走、武士阶级被立法消灭、血税一揆。
不要替历史下最终道德结论；AP 要的是你能不能把「成就」和「代价」都摆在桌上，再谈你的权衡——
也想想：你主要从农家女儿那一侧读了这段历史，下级武士和西乡这两个视角会怎么挑战你现在的判断？`,
      hintEn: `Hint: a strong DBQ answer **holds two things at once** rather than choosing one —
this is exactly what historians keep debating.
- The "successful state-building" side: spared from colonization, the only non-Western country
  to squeeze itself into the industrial powers.
- The "bearers' cost" side: land-tax reform pushing risk onto farmers, conscription pulling the
  brother from home, the samurai class legally abolished, the blood-tax uprisings.
Don't hand history a final moral verdict; AP wants you to put both "achievement" and "cost" on
the table and then discuss your weighing — and consider: you read this history mainly from the
farm girl's side, so how would the low-ranking samurai and Saigō challenge your current
judgment?`,
      conceptsActivated: ['land-tax-reform', 'conscription-blood-tax', 'fukoku-kyohei'],
    },
    {
      id: 'q3',
      cn: `那个下级武士亲手签法令，废掉了「藩」、废掉了「武士」这个身份——
也就是废掉了让他成为他自己的那个旧世界。喊「攘夷」起家的人，最后靠「变成蛮夷」救了国。

如果是你，你会为了一个你相信的新国家，去亲手消灭那个生出你的旧世界吗？
请用这个下级武士的具体选择（尊王攘夷 → 师夷、废藩置县、废刀令）支持你的看法。`,
      en: `That low-ranking samurai signed laws with his own hand abolishing the "han" and the
"samurai" identity — abolishing the very old world that made him who he was. The people who rose
shouting "expel the barbarians" ended up saving the country by "becoming the barbarian."

Would you, for a new country you believed in, dismantle with your own hands the old world that
made you? Support your view with this low-ranking samurai's specific choices (sonnō jōi →
learning from the West, haihan chiken, the sword-abolition edict).`,
      hintCn: `提示：先把这个角色的复杂性摆全——他不是「一直支持改革的人」，他少年时是磨刀发誓赶蛮夷的志士。
「该消灭旧世界」一边：旧式刀长矛挡不住西方舰炮，不翻到制度根，日本可能像别处那样被殖民。
「不该」一边：他亲手关掉的是生出他自己的那扇门，剪掉发髻那刻他既像「新时代的人」也像「背叛了来路的人」。
进阶：你身边有没有「为了一个更好的将来，必须亲手放弃一部分自己/自己的来路」的处境？那是成长还是背叛？
这题没有标准答案，AP 看你能不能把两难讲清楚再选边。`,
      hintEn: `Hint: first lay out this character's full complexity — he wasn't "always
pro-reform"; as a youth he was an activist sharpening his sword to drive the barbarians out.
The "should dismantle the old world" side: old swords and spears couldn't stop Western naval
guns; without reaching the institutional root, Japan might have been colonized like elsewhere.
The "shouldn't" side: the door he closed with his own hands was the one that made him; the
moment he cut his topknot he looked both like "a man of the new age" and "a man who betrayed
where he came from."
Going deeper: have you ever faced "for a better future, you must give up a part of yourself or
where you came from"? Is that growth or betrayal?
No standard answer; AP looks at whether you can lay out the dilemma clearly before picking
a side.`,
      conceptsActivated: ['sonno-joi', 'haihan-chiken', 'meiji-restoration'],
    },
    {
      id: 'q4',
      cn: `西乡隆盛帮着亲手建起了这个新国家，又在 1877 年和被这个新国家抛弃的旧武士一起赴死。
他不是「一直反对改革的保守派」——他是维新最大的军事英雄，却被自己造的征兵新军在熊本城下打败。

「忠于自己亲手建立的国家」和「不抛弃跟你出生入死的人」，当这两件事撕裂时，哪一边更重要？
请用西乡的具体选择（萨长同盟、戊辰战争统帅、1877 西南战争）支持你的看法。`,
      en: `Saigō Takamori helped build this new nation with his own hands, then in 1877 went to
his death alongside the old samurai the new nation had abandoned. He was not a "conservative who
always opposed reform" — he was the restoration's greatest military hero, yet was defeated at
Kumamoto Castle by the conscript army he had helped create.

When "loyalty to the nation you built with your own hands" and "not abandoning the people who
fought beside you" tear apart, which matters more? Support your view with Saigō's specific
choices (the Satchō Alliance, commanding the Boshin War, the 1877 Satsuma Rebellion).`,
      hintCn: `提示：先把西乡的复杂性摆全——他是倒幕军统帅、维新最大功臣，
不是「一直反对改革」；他起兵是夹在「他亲手建的新国家」和「被新国家抛弃的旧武士」之间的悲剧。
- 「忠于国家」一边：他帮着建的中央集权新政府，是日本免于被殖民的关键。
- 「不抛弃同伴」一边：那些跟他出生入死的萨摩武士，一夜之间没了身份、生计、尊严，他放不下。
反讽别漏：打败他的，正是维新自己造的农民征兵新军——证明征兵制成功的那一仗，杀死了维新最大的英雄。
进阶：你有没有过「对集体的责任」和「对身边人的情义」撕裂的时刻？这题没有标准答案。`,
      hintEn: `Hint: first lay out Saigō's full complexity — he was the anti-bakufu commander and
the restoration's greatest contributor, not "always anti-reform"; his uprising was the tragedy
of being caught between "the new nation he built" and "the old samurai it abandoned."
The "loyalty to the nation" side: the centralized new government he helped build was key to
Japan avoiding colonization.
The "not abandoning your comrades" side: the Satsuma samurai who fought beside him lost their
identity, livelihood, and dignity overnight, and he couldn't let them go.
Don't miss the irony: the army that beat him was the farmer-conscript force the restoration
itself created — the battle that proved conscription succeeded killed the restoration's greatest
hero.
Going deeper: have you had a moment where "duty to the group" and "loyalty to the people beside
you" tore apart? No standard answer.`,
      conceptsActivated: ['satsuma-rebellion', 'satcho-alliance', 'conscription-blood-tax'],
    },
  ],
};

export default notebook;

// ─── 同伴笔记本架构 v1 · World War II & the Holocaust 1939-1945 ──────
// 角色：小薇 (Xiaowei)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// ⚠️ 最高风险 dark topic（Holocaust 系统性种族灭绝 + Speer 纳粹高官 + Manzanar
//    美国本土种族拘留）。小薇语气：见证者式同伴——把笔记给你看，不替你哭，
//    绝不创伤模拟、不渲染惨状、不廉价煽情。Holocaust 与 Manzanar 性质规模分明、
//    绝不相对化（六百万系统性屠杀 ≠ 十二万不公拘留，两者从不在量级上等同）。
//    Speer 祛魅不洗白（戳破"好纳粹"神话，不美化）。
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语 + 人物分级清单，不剧透
//   2. mainConcepts（出口复习笔记）— 8 个核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（回忆 + 考点提炼，不重述情节）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText (mini-lesson, 300-500 字)
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 与 storyboard 的关系（3 lens / 12 nodes each）：
//   - albert-speer (perpetrator)                       — 平庸之恶 / "好纳粹"神话祛魅 / Holocaust 工业化机制（Wannsee/Posen）
//   - chiune-sugihara (lonely-mediator)                — 违令救人 / 个人道德勇气 / Righteous Among the Nations
//   - manzanar-nisei-girl-receiving-end (receiving)    — 受影响者 (DEFAULT)：EO 9066 / Manzanar / Korematsu / 442nd / 1988 道歉
//   - 跨 lens N6:「上面的命令 / one order」一句话两个方向
//     （Speer 服从把人变数字 vs Sugihara 违抗把数字变回人；Manzanar = 命令的另一端被砸中的人）
//
// 课纲对齐：
//   - AP World History Modern Unit 7（全球冲突 / Holocaust 作为系统性种族灭绝）
//   - APUSH Period 7-8（珍珠港 / EO 9066 与日裔拘留 / 原子弹伦理）
//   - AP US Government — Korematsu v. United States (1944) 公民自由 / 战时行政权核心判例
//   - AP European History — Holocaust / 纳粹官僚机制 / 纽伦堡审判
//   - California HSS HS World History
//
// 事实对账：所有 claim 已对 world-war-two-1942-factledger.md（账本无硬错；
//   已采纳两处低优先级措辞：Sugihara 官方职衔为"副领事 vice-consul"（新馆唯一负责人故俗称领事）；
//   Sugihara 1946 返日 / 1947 解职——不写"1947 回日本"。Holocaust 6M / Wannsee 1942.1 /
//   Speer 祛魅不洗白 / Posen hedge 偏保守，均确认到位，保持）。
//
// cultural-ban: 全程用真实术语（轴心国 Axis / 同盟国 Allies / Holocaust / 纳粹 Nazi /
//   Wannsee / Executive Order 9066 / Manzanar / Korematsu / banality of evil 平庸之恶 /
//   Righteous Among the Nations 国际义人 / Nuremberg 纽伦堡），绝不用中国特定官制/礼器/称谓做类比翻译。
//
// schemaVersion: 1 · notebookVersion: world-war-two-1942-v1

export var notebook = {
  topicId: 'world-war-two-1942',
  topicNameCn: '二战与大屠杀',
  topicNameEn: 'World War II & the Holocaust 1939-1945',
  schemaVersion: 1,
  companion: {
    nameCn: '小薇',
    nameEn: 'Xiaowei',
    age: 12,
    grade: 7,
    identity: 'ABC (Asian-American, Chinese heritage)',
    voice: 'peer learning companion, same age as reader',
  },

  // ─── 入口：小薇预习笔记（学习 schema 脚手架，不剧透）───────
  preview: {
    cn: `今天老师说我们要学二战（World War II, 1939-1945）。她说这是个很大、很重的 Topic，要花好几节课，因为它不只是打仗，还连着人类做过的最黑的一件事。

她在白板上写了几个名字和词：

人：Albert Speer（施佩尔，纳粹军备部长）、Chiune Sugihara（杉原千亩，日本外交官）、还有一个 Manzanar 拘留营里的日裔少女（没有名字的那种主角）。
词：Holocaust（大屠杀）、Wannsee Conference（万湖会议）、Executive Order 9066（第 9066 号行政命令）、Korematsu v. United States、banality of evil（平庸之恶）、total war（总体战）、Nuremberg trials（纽伦堡审判）。

我先抄下来。等下读三个故事——Speer、Sugihara、Manzanar 少女——读完再回来对照这张单子，看我能不能解释。

老师那句话我也写下了："不要只记年份和死亡数字，要记——当命令、法律、或大多数人站在错的一边，一个普通人会怎么做？"

说实话，读到 Manzanar 少女那条线，我会想起我自己——一个长着亚洲脸、在美国出生的孩子。但我提醒自己：这一遍我不哭，我把它记清楚、把性质看分明。Holocaust 是系统性屠杀六百万人，Manzanar 是把十二万人不公地关起来——两件事都是真的、都很重，但不是一回事，不能混着说。这是老师特别强调的。`,
    en: `Today my teacher said we're learning World War II (1939-1945). She said it's a big, heavy topic that will take several class periods, because it's not just about fighting — it's tied to the darkest thing humans have ever done.

She wrote some names and terms on the board:

People: Albert Speer (Nazi Minister of Armaments), Chiune Sugihara (a Japanese diplomat), and a Nisei girl at Manzanar (the kind of main character with no name).
Terms: the Holocaust, the Wannsee Conference, Executive Order 9066, Korematsu v. United States, banality of evil, total war, the Nuremberg trials.

Let me copy these down. After I read the three stories (Speer, Sugihara, the Manzanar girl), I'll come back and check whether I can explain each one.

I wrote down the teacher's line too: "Don't just memorize dates and death tolls. Memorize — when an order, a law, or the majority stands on the wrong side, what does an ordinary person do?"

Honestly, reading the Manzanar girl's pass made me think of myself — a kid with an Asian face, born in America. But I remind myself: this pass, I won't cry, I'll get it down clearly and keep the differences sharp. The Holocaust was the systematic murder of six million people; Manzanar was the unjust imprisonment of 120,000 people. Both are real, both are heavy, but they are not the same thing and can't be talked about as if they were. My teacher really stressed this.`,
    keyTerms: [
      { cn: '大屠杀', en: 'the Holocaust' },
      { cn: '种族灭绝', en: 'genocide' },
      { cn: '最终解决', en: 'the Final Solution' },
      { cn: '总体战', en: 'total war' },
      { cn: '后方 / 民众战时动员', en: 'the home front' },
      { cn: '轴心国 / 同盟国', en: 'Axis / Allies' },
      { cn: '平庸之恶', en: 'banality of evil' },
      { cn: '绥靖政策', en: 'appeasement' },
    ],
    // mustKnow: true = AP/州考必考，首次出场要全名 + 角色锚 + IPA + audio
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡
    keyFigures: [
      {
        nameCn: '阿尔伯特·施佩尔',
        nameEn: 'Albert Speer',
        ipa: '/ˈælbərt ʃpɛər/',
        roleCn: '纳粹军备部长·建筑师，"好纳粹"神话的制造者（平庸之恶标本）',
        roleEn: 'Nazi Minister of Armaments and architect, maker of the "good Nazi" myth',
        mustKnow: true,
        audioKey: 'albert-speer',
      },
      {
        nameCn: '杉原千亩',
        nameEn: 'Chiune Sugihara',
        ipa: '/tʃiˈuːneɪ suːɡiˈhɑːrɑ/',
        roleCn: '日本驻立陶宛副领事（新馆唯一负责人，俗称领事），违令手写签证救约六千人',
        roleEn: 'Japanese vice-consul in Lithuania who defied orders to save about 6,000 people',
        mustKnow: true,
        audioKey: 'chiune-sugihara',
      },
      {
        nameCn: 'Manzanar 拘留营里的日裔少女',
        nameEn: 'A Nisei girl at Manzanar',
        ipa: '/ˌmænzəˈnɑːr/',
        roleCn: '二代日裔美国公民（composite 合成人物），被自己国家按血统关进沙漠的美国孩子',
        roleEn: 'A second-generation Japanese American citizen (a composite), an American child imprisoned by her own country',
        mustKnow: true,
        audioKey: 'manzanar-nisei-girl',
      },
      {
        nameCn: '阿道夫·希特勒',
        nameEn: 'Adolf Hitler',
        ipa: '/ˈædɒlf ˈhɪtlər/',
        roleCn: '纳粹德国独裁者，二战与 Holocaust 的首要发动者',
        roleEn: 'Nazi German dictator, chief instigator of WWII and the Holocaust',
        mustKnow: true,
        audioKey: 'adolf-hitler',
      },
      {
        nameCn: '富兰克林·罗斯福',
        nameEn: 'Franklin D. Roosevelt',
        ipa: '/ˈfræŋklɪn ˈroʊzəvɛlt/',
        roleCn: '美国总统，签署 Executive Order 9066，领导美国参加二战',
        roleEn: 'US President, signed Executive Order 9066, led the US through WWII',
        mustKnow: true,
        audioKey: 'franklin-roosevelt',
      },
      {
        nameCn: '弗雷德·是松',
        nameEn: 'Fred Korematsu',
        ipa: '/frɛd ˌkɔːrəˈmɑːtsuː/',
        roleCn: '日裔美国人，拒绝拘留、一路告到最高法院的原告（1944 败诉）',
        roleEn: 'Japanese American who refused internment and sued to the Supreme Court (lost, 1944)',
        mustKnow: true,
        audioKey: 'fred-korematsu',
      },
      {
        nameCn: '汉娜·阿伦特',
        nameEn: 'Hannah Arendt',
        ipa: '/ˈhænə ˈɑːrənt/',
        roleCn: '政治哲学家，提出"平庸之恶"概念',
        roleEn: 'Political philosopher who named the "banality of evil"',
        mustKnow: false,
        audioKey: null,
      },
      {
        nameCn: '海因里希·希姆莱',
        nameEn: 'Heinrich Himmler',
        ipa: '/ˈhaɪnrɪç ˈhɪmlər/',
        roleCn: '纳粹高官，党卫队领袖，1943 Posen 演讲公开讲灭绝犹太人',
        roleEn: 'Senior Nazi, head of the SS, gave the 1943 Posen speeches on extermination',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小薇的复习笔记）─────────────────────
  mainConcepts: [
    // ── 卡 1：二战的起因（独立 mini-lesson）──
    {
      id: 'wwii-causes',
      termCn: '二战的起因（凡尔赛 / 大萧条 / 法西斯崛起）',
      termEn: 'Causes of WWII (Versailles / Depression / Rise of Fascism)',
      standardRef: ['AP World KC-7.2', 'APUSH KC-7.3', 'CA HSS 10.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'albert-speer', nodeId: 'speer-n2', context: 'Speer 1931 入党的动机：一战战败、经济崩溃、几百万失业、希特勒喊"让德国强大"' },
        ],
      },
      standaloneText: {
        cn: `二战不是凭空爆发的。AP 一定要你会答"为什么会有第二次世界大战"，记住三条线：

**1. 凡尔赛条约（Treaty of Versailles, 1919）的怨气。** 一战结束后，战胜国逼德国签了凡尔赛条约：德国要认全部战争罪责、割地、裁军、赔一笔天文数字的赔款。德国人觉得这是奇耻大辱。这股怨气，后来成了希特勒最好用的燃料——他喊"我要撕掉凡尔赛、让德国重新强大"，无数受了气的德国人就跟了他。

**2. 大萧条（Great Depression, 1929 起）。** 1929 年美国股市崩盘，引发全球经济大萧条。德国经济本来就虚，这下彻底垮了——几百万人失业，钱不值钱，街上又乱又穷。经济一绝望，极端政治就有了土壤。

**3. 法西斯主义（fascism）的崛起。** 在意大利（墨索里尼 Mussolini）、德国（希特勒 Hitler 的纳粹党）、日本（军国主义），一种叫"法西斯"的极权思想抬头：崇拜强人领袖、极端民族主义、对内镇压、对外扩张。这三国后来结成"轴心国"（Axis）。

还有一条常考的补充线——**绥靖政策（appeasement）**：英法一开始不想再打仗，对希特勒一步步退让（最有名的是 1938 年慕尼黑会议把捷克的一块地让给德国），希望"喂饱"他就能换和平。结果反而让希特勒胃口越来越大。1939 年 9 月他入侵波兰，英法终于宣战，二战在欧洲爆发。

🔗 故事连接：视角一第 2 节，Speer 自己讲了他 1931 年为什么入纳粹党——不是因为他多恨谁，是因为"一战战败 + 经济崩溃 + 希特勒承诺让德国强大"。他就是这三条起因线里，一个被卷进去的普通人。`,
        en: `WWII did not erupt out of nowhere. AP will absolutely ask you "why did the Second World War happen," so remember three threads:

**1. The grievance of the Treaty of Versailles (1919).** After WWI, the victors forced Germany to sign the Treaty of Versailles: admit full war guilt, give up land, disarm, and pay an astronomical sum in reparations. Germans felt it as a deep humiliation. That grievance later became Hitler's best fuel — he shouted "I will tear up Versailles and make Germany strong again," and countless wronged Germans followed him.

**2. The Great Depression (from 1929).** The 1929 US stock market crash triggered a global economic depression. Germany's economy was already weak, and now it collapsed entirely — millions out of work, money worthless, the streets poor and chaotic. When the economy turns desperate, extreme politics finds its soil.

**3. The rise of fascism.** In Italy (Mussolini), Germany (Hitler's Nazi Party), and Japan (militarism), a totalitarian ideology called "fascism" rose: worship of a strongman leader, extreme nationalism, repression at home, expansion abroad. These three later formed the "Axis."

One more frequently tested thread — **appeasement**: Britain and France did not want another war and gave way to Hitler step by step (most famously at the 1938 Munich Conference, handing him a piece of Czechoslovakia), hoping that "feeding" him would buy peace. Instead his appetite only grew. In September 1939 he invaded Poland, Britain and France finally declared war, and WWII broke out in Europe.

🔗 Story link: In Lens 1 Node 2, Speer himself explains why he joined the Nazi Party in 1931 — not because he hated anyone, but because of "WWI defeat + economic collapse + Hitler's promise to make Germany strong." He is one ordinary person swept into these three causal threads.`,
      },
      xiaoweiNote: {
        cn: `老师说起因这块"凡尔赛—大萧条—法西斯"三件套是**最高频考点**，几乎每套卷子都考。我的记忆口诀：**"气—穷—强人"**——凡尔赛让德国憋着一股气，大萧条让人穷到绝望，气 + 穷 = 强人法西斯有人跟。
绥靖政策（appeasement）当配角记：英法"让一步"反而喂大了希特勒。`,
        en: `Teacher said the "Versailles–Depression–Fascism" trio is the **most frequently tested** part of causes — almost every exam asks it. My mnemonic: **"anger–poverty–strongman"** — Versailles bottled up Germany's anger, the Depression drove people to desperate poverty, and anger + poverty = people follow the fascist strongman.
Remember appeasement as a supporting actor: Britain and France "giving way" actually fed Hitler bigger.`,
      },
    },

    // ── 卡 2：珍珠港 / 太平洋战场 / 原子弹（独立 mini-lesson）──
    {
      id: 'pearl-harbor-pacific-atomic-bomb',
      termCn: '珍珠港 / 太平洋战场 / 原子弹',
      termEn: 'Pearl Harbor / the Pacific Theater / the Atomic Bomb',
      standardRef: ['APUSH KC-7.3.III', 'AP World KC-7.2', 'CA HSS 11.7'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'manzanar-nisei-girl-receiving-end', nodeId: 'mn-n2', context: '1941.12.7 珍珠港当天，少女一家在收音机前——这件事直接改变了她的命运' },
        ],
      },
      standaloneText: {
        cn: `欧洲打成一团时，美国一开始想置身事外（中立 / 孤立主义）。把美国拖进战争的，是太平洋这边的一记重击。

**珍珠港（Pearl Harbor），1941 年 12 月 7 日。** 日本偷袭了美国在夏威夷的海军基地珍珠港，美军死伤惨重、损失大量军舰飞机。罗斯福总统说这是"a date which will live in infamy（一个永世遗臭的日子）"。第二天，美国对日宣战，正式参加二战。这是 APUSH 的关键转折点——记死 **1941.12.7**。

**太平洋战场（the Pacific Theater）。** 之后美日在太平洋上一座座岛屿血战（中途岛、硫磺岛、冲绳……这叫"跳岛战术 island hopping"），打得极其惨烈。同一时期，中国在亚洲大陆牵制了大量日军（八年抗战，1937-1945）。

**原子弹（the atomic bomb），1945 年 8 月。** 美国在新墨西哥秘密研发出原子弹（曼哈顿计划 Manhattan Project）。1945 年 8 月，美国先后向日本广岛（Hiroshima）和长崎（Nagasaki）投下两颗原子弹，造成大量平民死亡。几天后日本投降，二战结束。

⚖️ 这是 APUSH / AP World 的经典伦理辩论题（两边都要会说）：
- 一种说法：原子弹逼日本投降、避免了登陆日本本土那场预计死伤更大的战役，"救了更多人"。
- 另一种说法：它一次性杀死大量平民、开启了核武器时代，是不是"为了结束战争就可以这么做"？
这道题没有标准答案，AP 要的是你**用证据论证、并承认另一边也成立**。

🔗 故事连接：视角三（Manzanar 少女）第 2 节，就是 1941.12.7 珍珠港那一天——收音机一响，她全家的命运就被改写了。珍珠港不只是太平洋上的一场偷袭，它直接点燃了美国西海岸的排亚恐慌，导致了后面的 EO 9066。`,
        en: `While Europe was at war, the US at first wanted to stay out (neutrality / isolationism). What dragged America in was a heavy blow on the Pacific side.

**Pearl Harbor, December 7, 1941.** Japan launched a surprise attack on the US naval base at Pearl Harbor in Hawaii, with heavy American casualties and great losses of ships and planes. President Roosevelt called it "a date which will live in infamy." The next day the US declared war on Japan and formally entered WWII. This is the key turning point in APUSH — memorize **December 7, 1941**.

**The Pacific Theater.** Afterward the US and Japan fought island by island across the Pacific (Midway, Iwo Jima, Okinawa — this is called "island hopping"), brutally. In the same period China tied down large numbers of Japanese troops on the Asian mainland (the eight-year war of resistance, 1937-1945).

**The atomic bomb, August 1945.** The US secretly developed the atomic bomb in New Mexico (the Manhattan Project). In August 1945 the US dropped two atomic bombs on the Japanese cities of Hiroshima and Nagasaki, causing massive civilian deaths. Days later Japan surrendered and WWII ended.

⚖️ This is a classic ethics debate in APUSH / AP World (you must be able to argue both sides):
- One view: the bomb forced Japan's surrender and avoided an invasion of the Japanese home islands that was projected to cost even more lives — it "saved more people."
- The other view: it killed huge numbers of civilians at once and opened the nuclear age — is "ending the war" enough to justify it?
There is no standard answer; AP wants you to **argue with evidence and concede the other side also stands**.

🔗 Story link: In Lens 3 (the Manzanar girl), Node 2 is December 7, 1941 — the day of Pearl Harbor. The moment the radio sounded, her whole family's fate was rewritten. Pearl Harbor was not only a surprise attack in the Pacific; it directly ignited the anti-Asian panic on the US West Coast that led to EO 9066.`,
      },
      xiaoweiNote: {
        cn: `老师说珍珠港 **1941.12.7** 是 APUSH 必背日期——它是"美国从旁观者变成参战国"的那一刻。
原子弹是 DBQ / 长论文高频题，模板：先说"它逼降、避免更大伤亡"，再说"它杀大量平民、开启核时代"，最后用证据选一边——千万别只写一边。
我自己的连接：珍珠港这一天，对 Manzanar 少女来说不是"打赢打输"的军事新闻，是她被自己国家当成敌人的开始。`,
        en: `Teacher said Pearl Harbor, **December 7, 1941**, is a must-memorize APUSH date — the moment the US went from bystander to belligerent.
The atomic bomb is a high-frequency DBQ / essay topic. Template: first say "it forced surrender and avoided greater casualties," then say "it killed huge numbers of civilians and opened the nuclear age," then pick a side with evidence — never write just one side.
My own connection: for the Manzanar girl, the day of Pearl Harbor wasn't military news about winning or losing — it was the start of her own country treating her as the enemy.`,
      },
    },

    // ── 卡 3：Holocaust / 种族灭绝（故事覆盖型，Speer lens）──
    {
      id: 'holocaust-genocide',
      termCn: '大屠杀 / 种族灭绝（六百万 / 万湖会议 / 最终解决）',
      termEn: 'The Holocaust / Genocide (6 Million / Wannsee / the Final Solution)',
      standardRef: ['AP World KC-7.3.II', 'APUSH KC-7.3', 'AP Euro Unit 9', 'CA HSS 10.8'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'albert-speer',
        nodeIds: ['speer-n3', 'speer-n7', 'speer-n8'],
        xiaoweiNote: {
          cn: `这个我读过，是这个 Topic 里最重的部分，我会很小心地把它记清楚。

**Holocaust（大屠杀）= 纳粹系统性灭绝欧洲犹太人，到 1945 年约六百万人遇害。** 这是一场 genocide（种族灭绝）——不是战争里的伤亡，是有计划、按族裔、要"杀光"一整个民族。

视角一第 3、7 节里，Speer 反复点出一件事，也是这个考点最该懂的：**最可怕的不是疯子的仇恨，是冷静的组织。**
- **Wannsee Conference（万湖会议），1942 年 1 月。** 纳粹高官（里面有博士、律师、受最好教育的官僚）在湖边一栋漂亮别墅里，喝着咖啡，把已经在进行的杀戮，系统化成一套高效的工业流程——这就是"the Final Solution（最终解决）"的协调会。他们讨论的是铁路时刻表、"运输能力"、各地犹太人的"数量"，用办公室语言把活人包装成待处理的"单位"。
- 第 8 节：Speer 一辈子说"我不知道"，但证据（1943.10 Himmler 的 Posen 演讲他很可能在场、他的工厂直接用集中营劳工）让你自己掂量——"不知道"和"选择不去看"是两件不一样的事。

考点关键句：Holocaust 是 genocide 的典型案例，它需要的不是仇恨而是**官僚组织**——这是 AP（尤其 AP Euro）反复考的点。

⚠️ 我提醒自己（也是老师强调的）：Holocaust（系统性屠杀六百万）和后面视角三的 Manzanar（不公地拘留十二万）**绝不能混为一谈**——两件事都错，但性质和规模差得很远，写 essay 千万别把它们放在同一个量级上比。`,
          en: `I read this — it's the heaviest part of this whole topic, and I'll get it down carefully.

**The Holocaust = the Nazis' systematic extermination of Europe's Jews; by 1945 about six million were murdered.** This was a genocide — not wartime casualties, but a planned, by-ethnicity attempt to wipe out an entire people.

In Lens 1 Nodes 3 and 7, Speer keeps pointing at one thing, which is exactly what this exam point wants you to grasp: **the most terrifying part was not the hatred of madmen, but the calm of organization.**
- **The Wannsee Conference, January 1942.** Senior Nazis (including holders of doctorates, lawyers, the best-educated bureaucrats) sat in a handsome villa by a lake, drinking coffee, and turned the killing already under way into an efficient industrial process — the coordination meeting for "the Final Solution." They discussed railway timetables, "transport capacity," the "numbers" of Jews in each region, packaging living people into "units" to be processed in office language.
- Node 8: Speer spent his life saying "I did not know," but the evidence (he was very likely present at Himmler's October 1943 Posen speech; his factories used concentration-camp labor directly) makes you weigh it yourself — "did not know" and "chose not to look" are two different things.

Key exam sentence: the Holocaust is the textbook case of genocide, and what it needed was not hatred but **bureaucratic organization** — a point AP (especially AP Euro) tests again and again.

⚠️ I remind myself (and the teacher stressed this): the Holocaust (the systematic murder of six million) and Manzanar in Lens 3 (the unjust imprisonment of 120,000) **must never be lumped together** — both were wrong, but they differ enormously in nature and scale. In an essay, never put them on the same magnitude.`,
        },
      },
    },

    // ── 卡 4：总体战 / 后方（独立 mini-lesson）──
    {
      id: 'total-war-home-front',
      termCn: '总体战 / 后方动员',
      termEn: 'Total War / the Home Front',
      standardRef: ['AP World KC-7.2.II', 'APUSH KC-7.3.III', 'CA HSS 11.7'],
      examFrequency: 'high',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'albert-speer', nodeId: 'speer-n4', context: 'Speer 当军备部长把整个德国变成一台战争生产机器——这就是"总体战"的生产端' },
        ],
      },
      standaloneText: {
        cn: `二战为什么死那么多人（约六七千万）？因为它是一场 **total war（总体战）**：不再只是军队打军队，而是整个国家——工厂、农田、科学家、平民、经济、宣传——全部被动员进战争。前线和后方的界线消失了，连城市和平民都成了打击目标。

**后方（the home front）= 没上前线、却同样被战争改造的那一面。** 几个 AP 常考的美国后方变化：

1. **战时生产爆发。** 大萧条还没完全好，战争订单一来，美国工厂全开，反而把经济从萧条里拉了出来——美国成了"民主国家的兵工厂（arsenal of democracy）"。
2. **女性进工厂。** 男人上前线，几百万女性顶上工厂岗位，造飞机、造军舰。"Rosie the Riveter（铆工萝西）"是这段历史的符号——这也成了战后女权运动的伏笔。
3. **少数族裔的双重处境。** 非裔美国人在工厂和军队里争取平等（"Double V"运动：海外打败法西斯 + 国内打败种族歧视，两个胜利）；而日裔美国人，则在同一个"后方"被自己的国家关进了拘留营（见视角三）。
4. **配给、战争债券、宣传。** 普通人省吃俭用（配给 rationing）、买战争债券、看政府宣传海报——每个人都被告知"你也在打这场仗"。

🔗 故事连接：视角一第 4 节，Speer 当上军备部长，把整个德国的工厂、原料、劳动力拧成一台战争生产机器，产量直线上升——这就是"总体战"在轴心国那一端的样子（而且他用的越来越多是强迫劳工）。同一个机制，美国用自愿动员 + 女工撑起来，德国用强迫劳工撑起来。`,
        en: `Why did WWII kill so many (about 60-70 million)? Because it was a **total war**: no longer army against army, but the whole nation — factories, farms, scientists, civilians, the economy, propaganda — all mobilized into the war. The line between front and home vanished; even cities and civilians became targets.

**The home front = the side that never went to the front but was reshaped by the war all the same.** A few US home-front changes AP often tests:

1. **An explosion of wartime production.** The Depression had not fully lifted, but when war orders came, American factories ran at full tilt and actually pulled the economy out of the slump — the US became the "arsenal of democracy."
2. **Women entering the factories.** With men at the front, millions of women filled factory jobs, building planes and ships. "Rosie the Riveter" is the symbol of this — and it became a seed of the postwar women's movement.
3. **The double position of minorities.** African Americans pushed for equality in factories and the military (the "Double V" campaign: defeat fascism abroad + defeat racial discrimination at home, two victories); meanwhile Japanese Americans, on that same "home front," were locked into camps by their own country (see Lens 3).
4. **Rationing, war bonds, propaganda.** Ordinary people scrimped (rationing), bought war bonds, and saw government posters — everyone was told "you too are fighting this war."

🔗 Story link: In Lens 1 Node 4, Speer becomes Minister of Armaments and twists all of Germany's factories, materials, and labor into one war-production machine, output climbing in a straight line — this is what "total war" looked like on the Axis side (and increasingly he ran it on forced labor). The same mechanism: the US held it up with voluntary mobilization and women workers; Germany held it up with forced labor.`,
      },
      xiaoweiNote: {
        cn: `老师说"total war 总体战"是个**概念题**——选择题会问"二战和以前的战争最大不同是什么"，答案是"整个国家（含平民/经济/工厂）都被动员，前线和后方界线消失"。
后方记三个美国关键词：**arsenal of democracy（兵工厂）、Rosie the Riveter（女工）、Double V（非裔双重胜利）**。
我的连接：同一场"后方"，黑人在为"双重胜利"努力，日裔却被关进铁丝网——后方从来不是对所有人都一样的。`,
        en: `Teacher said "total war" is a **concept question** — multiple choice asks "what was the biggest difference between WWII and earlier wars," and the answer is "the whole nation (civilians/economy/factories) was mobilized, and the line between front and home vanished."
For the home front, remember three US keywords: **arsenal of democracy, Rosie the Riveter, Double V (the African American double victory)**.
My connection: on that same "home front," Black Americans worked for a "double victory" while Japanese Americans were locked behind barbed wire — the home front was never the same for everyone.`,
      },
    },

    // ── 卡 5：日裔美国人拘留（故事覆盖型，Manzanar lens）──
    {
      id: 'japanese-american-internment',
      termCn: '日裔美国人拘留（EO 9066 / Manzanar / Korematsu / 442nd / 1988 道歉）',
      termEn: 'Japanese American Internment (EO 9066 / Manzanar / Korematsu / 442nd / 1988)',
      standardRef: ['APUSH KC-7.3.III', 'AP US Gov (Korematsu v. US)', 'CA HSS 11.7.5'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'manzanar-nisei-girl-receiving-end',
        nodeIds: ['mn-n3', 'mn-n7', 'mn-n8', 'mn-n9'],
        xiaoweiNote: {
          cn: `这条线整条都是它（视角三），也是对我这种亚裔美国孩子最有身份意义的一段。我把考点拆成五个必背：

1. **Executive Order 9066（第 9066 号行政命令），1942 年 2 月 19 日。** 罗斯福签署。命令本身**不点名"日本人"**（只说军方可划"军事区"、迁走"任何人 any or all persons"），听起来很中性——但实际执行几乎全针对西海岸日裔。这是"中性措辞 vs 歧视性执行"的经典样本。
2. **约 12 万人被拘留，约三分之二是美国出生的美国公民。** 没指控、没审判、没证据，唯一"嫌疑"是血统。（视角三第 3 节，少女反复让你听清"三分之二是公民"。）
3. **Manzanar** = 加州东部沙漠里的拘留营之一（铁丝网、岗楼、枪口朝里的哨兵、柏油纸棚屋）。Nisei = 二代日裔（在美国出生、生来即公民）。
4. **Korematsu v. United States（是松诉合众国），1944 年。** Fred Korematsu 拒绝拘留、告到最高法院，最高法院判他**输**——多数大法官认为战时拘留**合宪**。这是 AP Gov 的核心判例，也是美国司法史上的污点。（2018 年最高法院在另一案中公开说当年判错了。）
5. **442nd（全日裔部队）+ 1988 道歉。** 营里很多年轻男人参军，全日裔的 442nd 部队在欧洲拼死，成为美军得勋章最多的部队之一（家人还被关着，他们却为关家人的国家流血）。1988 年《公民自由法案》(Civil Liberties Act) 美国正式道歉 + 赔偿，承认这是"种族偏见、战时歇斯底里、政治领导失败"的错误。

考点关键句：日裔拘留 = 美国"善的战争"的另一半——它在海外反对纳粹按血统迫害犹太人，**同时**在国内按血统关自己的公民。两件事同时为真。

⚠️ 性质要分清：这是不公的拘留（约 12 万人被关，不是被屠杀），和 Holocaust（系统性杀六百万）**不是一回事、不在一个量级**。这一点 essay 里要拎清楚。`,
          en: `This whole line is it (Lens 3), and it's the most identity-laden stretch for an Asian American kid like me. I split the exam points into five must-memorize items:

1. **Executive Order 9066, February 19, 1942.** Signed by Roosevelt. The order itself **did not name "the Japanese"** (it only said the military could mark "military areas" and remove "any or all persons"), sounding neutral — but in practice it was aimed almost entirely at West Coast people of Japanese descent. This is the classic case of "neutral wording vs discriminatory enforcement."
2. **About 120,000 were interned; about two-thirds were American-born US citizens.** No charge, no trial, no evidence — the only "suspicion" was ancestry. (In Lens 3 Node 3, the girl makes you hear "two-thirds were citizens" clearly.)
3. **Manzanar** = one of the camps in the eastern California desert (barbed wire, watchtowers, sentries with guns pointing inward, tar-paper barracks). Nisei = second-generation Japanese Americans (born in the US, citizens from birth).
4. **Korematsu v. United States, 1944.** Fred Korematsu refused internment and sued to the Supreme Court — and the Court ruled against him; a majority held that wartime internment was **constitutional**. This is a core AP Gov case and a stain in US judicial history. (In 2018 the Supreme Court openly said in another case that the old ruling was wrong.)
5. **The 442nd (all-Japanese-American unit) + the 1988 apology.** Many young men from the camps enlisted; the all-Japanese-American 442nd fought to the death in Europe and became one of the most decorated units in US military history (their families still locked up, they bled for the country holding their families). In 1988 the Civil Liberties Act gave a formal US apology and compensation, acknowledging the wrong as "race prejudice, war hysteria, and a failure of political leadership."

Key exam sentence: Japanese American internment is the other half of America's "good war" — abroad it opposed the Nazi persecution of Jews by bloodline, while at home it locked up its own citizens by bloodline. Both are true at once.

⚠️ Keep the nature distinct: this was unjust imprisonment (about 120,000 locked up, not murdered), and it is **not the same as, and not on the scale of,** the Holocaust (the systematic murder of six million). Make that distinction clear in an essay.`,
        },
      },
    },

    // ── 卡 6：Speer / 平庸之恶 vs 道德主体（故事覆盖型，Speer lens）──
    {
      id: 'speer-banality-vs-moral-agency',
      termCn: 'Speer / 平庸之恶 vs 道德主体之争',
      termEn: 'Speer / Banality of Evil vs Moral Agency',
      standardRef: ['AP Euro Unit 9', 'AP World KC-7.3', 'AP DBQ rubric'],
      examFrequency: 'high',  // DBQ / 论述高频
      storyAnchor: {
        covered: true,
        lens: 'albert-speer',
        nodeIds: ['speer-n5', 'speer-n9', 'speer-n10', 'speer-n11'],
        xiaoweiNote: {
          cn: `这个 careful framing 我特别想记住——它不是背一个事实，是学一种思考方式。

Speer 被叫"好纳粹"——但视角一全程在**戳破这个神话，不是美化他**：
- 第 5 节：他在纽伦堡两头都占（"我承认有责任"显良心 + "但具体的事我不知道"躲重罪）。"好纳粹的秘密不是他更善良，是他更会说话。"
- 第 9 节：出狱后他出书上电视，把自己塑造成"被独裁者迷住、有良心"的好纳粹，畅销成名、安稳活到 1981。历史学家戳破：他知情远超承认，还参与过驱逐柏林犹太人腾房子。他那句"我承认有责任"，是认一个**抽象**责任，恰恰为了不认那些**具体**的罪。
- 第 10、11 节：两个对立读法（AP DBQ 最爱）——
  · **平庸之恶（banality of evil，Hannah Arendt 命名）读法**：最大的恶常由按章办事、相信自己"只是尽职"的体面人共同做成。Speer 是被才华、机会、系统裹挟的普通人，几乎所有人在那位置都会一样（Stanley Milgram 的服从实验佐证）。罪在结构。
  · **道德主体（moral agency）读法**：理由从不能洗白选择。Speer 是受最好教育、能算清每笔账的成年人，有完整反证，他"选择不去看"。罪在他自己的选择。
  两边**都站得住**——这就是 N11 让你想 30 秒的那个张力。

考点关键句：banality of evil = "平庸之恶"——暴行往往不是怪物干的，是相信自己"只是在做本职工作"的普通体面人共同完成的。

🔗 跨 Topic 连接：第 10 节 Speer 自己点了——他和黑死病 Topic（black-death-1347）里那个 14 世纪投票参与屠杀犹太邻居的屠夫 Konrad，隔 600 年，是同一种"平庸之恶"标本。`,
          en: `This careful framing is one I really want to keep — it's not memorizing a fact, it's learning a way of thinking.

Speer was called "the good Nazi" — but Lens 1 spends its whole length **puncturing that myth, not glorifying him**:
- Node 5: at Nuremberg he held both ends ("I admit responsibility" looked like conscience + "but I didn't know the specifics" dodged the heaviest charge). "The secret of the good Nazi isn't that he was kinder, but that he was better with words."
- Node 9: after release he wrote books and went on TV, shaping himself into a "dazzled, conscientious" good Nazi, sold well, became a celebrity, lived in comfort to 1981. Historians punctured it: he knew far more than he admitted, and took part in expelling Berlin's Jews to free up apartments. His line "I admit responsibility" owns an **abstract** responsibility precisely so as not to own the **specific** crimes.
- Nodes 10 and 11: two opposed readings (the AP DBQ's favorite) —
  · The **banality of evil (named by Hannah Arendt) reading**: the greatest evil is often done by by-the-book, respectable people who believe they're "only doing their duty." Speer was an ordinary man swept along by talent, opportunity, and the system; almost anyone in his place would have done the same (Stanley Milgram's obedience experiments support this). The fault lies in the structure.
  · The **moral agency reading**: reasons never wash out choices. Speer was an adult with the best education, able to total every ledger, with complete counter-evidence — and he "chose not to look." The fault lies in his own choice.
  Both **stand** — that's the tension N11 gives you thirty seconds to weigh.

Key exam sentence: banality of evil = atrocity is often committed not by monsters but by ordinary respectable people who believe they're "only doing their job," together.

🔗 Cross-topic link: in Node 10 Speer himself points it out — he and the 14th-century butcher Konrad from the black-death-1347 topic, who voted to take part in killing his Jewish neighbors, are specimens of the same "banality of evil" 600 years apart.`,
        },
      },
    },

    // ── 卡 7：Sugihara / 个人道德勇气（故事覆盖型，Sugihara lens）──
    {
      id: 'sugihara-moral-courage',
      termCn: 'Sugihara / 违令救人与个人道德勇气',
      termEn: 'Sugihara / Disobedience and Individual Moral Courage',
      standardRef: ['AP World KC-7.3', 'AP Euro Unit 9', 'CA HSS 10.8'],
      examFrequency: 'mid',  // 不是死记考点，但 DBQ "个人 vs 体制" 角度高频
      storyAnchor: {
        covered: true,
        lens: 'chiune-sugihara',
        nodeIds: ['sugihara-n5', 'sugihara-n7', 'sugihara-n8', 'sugihara-n9'],
        xiaoweiNote: {
          cn: `视角二整条线就是他。这个考点不是死记年份，是看一个普通人在体制里能做出什么。

**Chiune Sugihara（杉原千亩）= 日本驻立陶宛考纳斯的副领事**（他是这个新开领事馆的唯一负责人，所以通俗叙述常叫他"领事"——但严格说官方职衔是 vice-consul 副领事，AP 答题写"副领事"更稳）。

重点时间和事实：
- **1940 年夏**：成千上万从波兰逃来的犹太难民挤在他领事馆门外求过境签证（当时全世界几乎没国家肯收犹太难民）。
- 他**三次发电报回东京请示，三次被明确拒绝"不准发"**。
- 他**违令**了。从 1940 年 7 月底起，几乎不睡觉手写签证到手抽筋，9 月初领事馆关闭、火车启动他还从车窗往外递。
- **约签出两千多份签证，一份常救一家人，估计约六千人活下来**（后人称 Sugihara survivors）。
- **代价**：战后回到日本，1947 年被外务省解职（官方说裁撤，实则与违命脱不了干系），默默无闻几十年。
- **迟到的承认**：1985 年以色列授予他"国际义人"（Righteous Among the Nations，给冒险救犹太人的非犹太人的称号），1986 年去世。

考点关键句：Sugihara 证明了——哪怕只是一个普通公务员，**面对错误的命令，个人仍然有选择**。

⚠️ 但视角二第 11 节自己也提醒了"别神化他"：他救了约六千人是真实而具体的善，但 Holocaust 仍吞掉六百万——靠几个好心人不够，真正需要的是整个制度不作恶。这个"克制"的角度，AP 写 essay 很加分。

🔗 跨 Topic 连接：第 10 节他自己点了——他和废奴 Topic 的 Harriet Tubman（违法把奴隶带向自由）、scramble-for-africa 的 George Washington Williams（揭露刚果暴行）是同一种人：当法律和命令在错的一边，他们选择站到人的一边，并为此付代价。`,
          en: `This whole line is him (Lens 2). This exam point isn't memorizing dates — it's seeing what one ordinary person inside a system can do.

**Chiune Sugihara = Japan's vice-consul in Kaunas, Lithuania** (he was the sole officer running the newly opened consulate, so popular accounts often call him "consul" — but strictly the official title was vice-consul, and writing "vice-consul" on an AP exam is safer).

Key dates and facts:
- **Summer 1940**: thousands of Jewish refugees who had fled from Poland crowded outside his consulate begging for transit visas (when almost no country in the world would take Jewish refugees).
- He **cabled Tokyo three times for instructions and was plainly refused "do not issue" all three times**.
- He **disobeyed**. From late July 1940 he barely slept, writing visas by hand until his hand cramped; in early September, as the consulate closed and the train pulled away, he was still handing them out the window.
- He **issued some two thousand visas, each often saving a whole family, an estimated 6,000 people saved** (later called the Sugihara survivors).
- **The cost**: he returned to Japan after the war, and in 1947 the Foreign Ministry dismissed him (officially a restructuring, but not unconnected to his defiance), into decades of obscurity.
- **Belated recognition**: in 1985 Israel named him among the Righteous Among the Nations (the title for non-Jews who risked themselves to save Jews); he died in 1986.

Key exam sentence: Sugihara proved that even an ordinary civil servant, **facing a wrong order, still has a choice**.

⚠️ But Lens 2 Node 11 itself warns "don't make a god of him": saving about 6,000 was a real and specific good, yet the Holocaust still swallowed six million — a few kind hearts are not enough; what is truly needed is a whole system that does not do evil. This "restrained" angle earns real credit in an AP essay.

🔗 Cross-topic link: in Node 10 he points it out himself — he, Harriet Tubman from the abolition topic (who broke the law to lead the enslaved to freedom), and George Washington Williams from scramble-for-africa (who exposed the Congo atrocities) are the same kind of person: when law and orders stood on the wrong side, they chose the side of human beings and paid the price.`,
        },
      },
    },

    // ── 卡 8：纽伦堡审判 / "服从命令"（故事覆盖型 Speer + standalone 补完）──
    {
      id: 'nuremberg-trials',
      termCn: '纽伦堡审判 / "服从命令不是免罪理由"',
      termEn: 'The Nuremberg Trials / "Following Orders Is No Defense"',
      standardRef: ['AP World KC-7.3', 'AP Euro Unit 9', 'APUSH KC-7.3', 'CA HSS 10.8'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'albert-speer',
        nodeIds: ['speer-n1', 'speer-n5'],
        mentionedIn: [
          { lens: 'albert-speer', nodeId: 'speer-n1', context: 'Speer 在纽伦堡被告席上站起来认"共同责任"，被判 20 年（不同于多名被绞死的高官）' },
        ],
      },
      standaloneText: {
        cn: `战争结束后，胜利者要回答一个全新的问题：怎么"审判"一场国家级的暴行？以前打完仗，输的一方顶多割地赔款；这一次，同盟国决定把纳粹高官送上法庭，按法律审判。

**纽伦堡审判（the Nuremberg Trials），1945-1946 年。** 在德国纽伦堡，一个国际军事法庭审判了一批纳粹高官。它确立了几条影响至今的原则：

1. **"反人类罪（crimes against humanity）"**：第一次在国际法里，把"系统性屠杀平民/种族灭绝"本身定为一种可被起诉的罪——不管它在当时本国是不是"合法"。
2. **"服从命令不是免罪理由（following orders is no defense）"**：你不能说"我只是奉命行事"就把责任推干净。这一条直接对着"平庸之恶"那套辩护——每个人对自己执行的命令负有道德和法律责任。
3. 审判结果：多名最高级别的纳粹被判**绞刑**；一部分判监禁；也有少数被判无罪。

🔗 故事连接：视角一第 1、5 节，Speer 就坐在纽伦堡的被告席上。他是唯一一个站起来说"作为这个政府的领导人之一，我有责任"的高官——这让他显得有良心，加上他那套"我管生产、不知道具体杀人细节"的说法，**他被判 20 年监禁，而不是像多名同伴那样被绞死**。

这正是纽伦堡留下的难题：法庭确立了"服从命令不是免罪理由"，可 Speer 偏偏用一句"我承认（抽象的）责任 + 我（具体的）不知情"，在这条原则的边上给自己找到了一条活路。所以纽伦堡既是正义的里程碑，也暴露了"清算一场全民参与的暴行"有多难。

🔗 后续连接：纽伦堡确立的原则，加上二战的巨大创伤，直接催生了战后的**联合国**和 1948 年的**《世界人权宣言》**——人类试图用一套"普世人权"的底线，防止暴行重演。`,
        en: `After the war, the victors faced a brand-new question: how do you "try" a state-level atrocity? In the past, a defeated side at most gave up land and paid reparations; this time the Allies decided to put senior Nazis on trial and judge them by law.

**The Nuremberg Trials, 1945-1946.** In Nuremberg, Germany, an international military tribunal tried a group of senior Nazis. It established several principles that still matter today:

1. **"Crimes against humanity"**: for the first time in international law, "the systematic murder of civilians / genocide" itself was defined as a prosecutable crime — regardless of whether it had been "legal" in the country at the time.
2. **"Following orders is no defense"**: you cannot clear yourself of responsibility by saying "I was only carrying out orders." This struck directly at the "banality of evil" defense — each person bears moral and legal responsibility for the orders he executes.
3. The outcome: several of the highest-ranking Nazis were sentenced to **hanging**; some to imprisonment; a few were acquitted.

🔗 Story link: In Lens 1 Nodes 1 and 5, Speer sits in the dock at Nuremberg. He was the one senior official who stood and said "as one of the leaders of this government, I bear responsibility" — which made him look conscientious, and combined with his line "I ran production, I didn't know the specifics of the killing," **he was sentenced to twenty years in prison rather than hanged like several of his fellow officials**.

This is exactly the puzzle Nuremberg left behind: the court established that "following orders is no defense," yet Speer used "I admit (abstract) responsibility + I (specifically) did not know" to find a way out right beside that very principle. So Nuremberg was both a milestone of justice and a revelation of how hard it is to reckon with an atrocity that whole populations took part in.

🔗 Follow-on link: the principles set at Nuremberg, plus the vast trauma of WWII, directly gave rise to the postwar **United Nations** and the 1948 **Universal Declaration of Human Rights** — humanity's attempt to use a floor of "universal human rights" to prevent atrocity from recurring.`,
      },
      xiaoweiNote: {
        cn: `老师说纽伦堡两句话必背：**"反人类罪（crimes against humanity）"** 和 **"服从命令不是免罪理由（following orders is no defense）"**。
最妙（也最气人）的是：法庭刚立下"服从命令不免罪"，Speer 转头就用"我认抽象责任 + 我不知道具体细节"绕了过去——他判 20 年没被绞死。
我的记法：纽伦堡 = 二战的"结账"，结完账，世界用《世界人权宣言》(1948) 立下新规矩。`,
        en: `Teacher said two Nuremberg phrases are must-memorize: **"crimes against humanity"** and **"following orders is no defense."**
The cleverest (and most infuriating) part: the court had just established "following orders is no defense," and Speer turned around and slipped past it with "I admit abstract responsibility + I didn't know the specifics" — he got twenty years, not the rope.
My memory hook: Nuremberg = the "settling of accounts" for WWII, and once the accounts were settled, the world set new rules with the Universal Declaration of Human Rights (1948).`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ 入门题）─────────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `Speer 在纽伦堡说"作为这个政府的领导人之一，我有责任"——这句话听起来很有良心，可他同时坚持"具体杀人的事我不知道"，最后被判 20 年，而不是像多名同伴那样被绞死。

你觉得一个人能不能既"认错"、又把自己摘干净？Speer 这句"我有责任"，是罕见的良知，还是一句精心设计的脱身话术？`,
      en: `At Nuremberg, Speer said "as one of the leaders of this government, I bear responsibility" — a line that sounds conscientious, yet at the same time he insisted "I did not know the specifics of the killing," and in the end he got twenty years rather than the hanging several of his fellow officials received.

Do you think a person can both "admit fault" and clear himself? Was Speer's "I bear responsibility" a rare act of conscience, or a carefully designed line for getting away?`,
      hintCn: `提示：可以从"平庸之恶 vs 道德主体"两个读法切入（这是视角一第 11 节的核心张力）——
(1) 平庸之恶读法：他是被才华、机会、整台系统裹挟的普通人，几乎所有人在那位置都会一样（想想 Milgram 的服从实验），罪主要在结构；
(2) 道德主体读法：理由从不能洗白选择，他是受最好教育、有完整反证、却"选择不去看"的成年人，罪在他自己的选择。
关键不是选哪边，是用证据论证，并承认另一边也站得住。

进阶思考：纽伦堡明明立了"服从命令不是免罪理由"——那 Speer 用"我认（抽象）责任、但（具体）不知情"绕过去，到底算不算钻了这条原则的空子？`,
      hintEn: `Hint: come at it through the two readings of "banality of evil vs moral agency" (the core tension of Lens 1 Node 11) —
(1) the banality-of-evil reading: he was an ordinary man swept along by talent, opportunity, and the whole system; almost anyone in his place would have done the same (think of Milgram's obedience experiments); the fault lies mainly in the structure;
(2) the moral-agency reading: reasons never wash out choices; he was an adult with the best education and complete counter-evidence who "chose not to look"; the fault lies in his own choice.
The point isn't which side you pick, but arguing with evidence and conceding the other side also stands.

Going deeper: Nuremberg expressly established that "following orders is no defense" — so did Speer's "I admit (abstract) responsibility but (specifically) did not know" exploit a loophole in that very principle?`,
      conceptsActivated: ['speer-banality-vs-moral-agency', 'nuremberg-trials', 'holocaust-genocide'],
    },
    {
      id: 'q2',
      cn: `Executive Order 9066（1942）的原文从头到尾没有写"日本人"三个字——它只说军方可以划定"军事区"，把"任何人（any or all persons）"迁走，听起来完全中性。可它实际执行起来，把约 12 万人关进了拘留营，其中约三分之二是美国出生的美国公民。

一条措辞"中性"、不点名族裔的规则，怎么会精准地砸向某一群人？"中性的规则"一定是公平的吗？`,
      en: `The text of Executive Order 9066 (1942) never once wrote the words "the Japanese" — it only said the military could mark out "military areas" and remove "any or all persons," which sounds perfectly neutral. Yet in practice it locked about 120,000 people into camps, about two-thirds of them American-born US citizens.

How can a rule that is "neutral" in wording, naming no ethnicity, strike one group of people so precisely? Is a "neutral rule" necessarily a fair one?`,
      hintCn: `提示：分两步想——
(1) "中性措辞"和"歧视性执行"是可以分开的：法律字面写"任何人"，但谁去定义"军事区"、谁去决定迁走谁，这中间留了大量空间，恰好被用来只针对西海岸日裔。
(2) 再想 Korematsu v. United States（1944）：连最高法院都判这"合宪"——也就是说，不公不一定是某个坏官员偷偷干的，它可以一路披着"合法"的外衣，由制度盖章完成。

进阶思考：今天有没有一些表面上"对所有人一样"的规则，实际效果却落在某一群人身上？怎么分辨一条规则是真的公平，还是只是"听起来公平"？`,
      hintEn: `Hint: think in two steps —
(1) "neutral wording" and "discriminatory enforcement" can be separated: the law literally says "any persons," but who defines a "military area" and who decides whom to remove leaves a great deal of room — room used here to target only West Coast Japanese Americans.
(2) Then consider Korematsu v. United States (1944): even the Supreme Court ruled it "constitutional" — meaning injustice need not be the secret act of one bad official; it can be carried out all the way under the cover of "legality," stamped by the institution.

Going deeper: are there rules today that on the surface treat "everyone the same" but whose real effect falls on one group? How do you tell whether a rule is genuinely fair, or only "sounds fair"?`,
      conceptsActivated: ['japanese-american-internment', 'pearl-harbor-pacific-atomic-bomb'],
    },
    {
      id: 'q3',
      cn: `二战在美国课堂上常被讲成一场"善的战争（the good war）"——美国打败了纳粹、从死亡营里解放了犹太人，是正义的一方。可在同一段时间里，美国在自己国内，按血统把 12 万自己的公民关进了沙漠拘留营。

美国是"背叛了它自己"，还是"最终肯回头纠错"（1988 年道歉 + 赔偿、2018 年最高法院承认 Korematsu 判错了）？一个国家迟到快半个世纪的"对不起"，还算不算数？`,
      en: `In American classrooms, WWII is often told as "the good war" — America defeated the Nazis, freed the Jews from the death camps, was the side of justice. Yet in the same span of time, at home, America locked 120,000 of its own citizens into desert camps by their bloodline.

Did America "betray itself," or was it "finally willing to turn back and correct the wrong" (the 1988 apology + compensation, the 2018 Supreme Court acknowledgment that Korematsu was wrongly decided)? Does a nation's "I'm sorry," nearly half a century late, still count?`,
      hintCn: `提示：这是视角三第 11 节的核心张力，两个读法都成立——
(1) "背叛了自己"读法：它把"人人平等"写进宪法、还为这句话在海外流血，却恰恰对自己土生土长、天天背效忠誓词的公民撕毁了承诺，连最高法院都判这合法；
(2) "最终纠错"读法：它确实犯了大错，但没有永远藏着——被关过的人和子女站出来，国家公开认错、道歉、赔偿，几十年后连最高法院都承认判错了。肯回头认错的国家，和死不认错的国家，是不一样的。

进阶思考：再连一条线——从 1882 年排华法案（chinese-exclusion-1882）到 1942 年日裔拘留，是美国对亚裔"一条没断过的线"。当社会一恐慌就把矛头指向"看起来不一样的少数群体"，这个机制今天还在吗？替罪羊换成了谁？

⚠️ 写这题时记得把性质拎清：日裔拘留是不公的拘留，和 Holocaust 的系统性屠杀不是一个量级，别混着写。`,
      hintEn: `Hint: this is the core tension of Lens 3 Node 11, and both readings hold —
(1) the "betrayed itself" reading: it wrote "all are equal" into its constitution and bled abroad for that line, yet tore up the promise for its own native-born citizens who recited the Pledge of Allegiance every day, with even the Supreme Court ruling it lawful;
(2) the "finally corrected itself" reading: it did commit a great wrong, but did not hide it forever — those imprisoned and their children stood up, the nation admitted the wrong openly, apologized, paid compensation, and decades later even the Supreme Court acknowledged the ruling was wrong. A nation willing to turn back and admit a wrong is not the same as one that never will.

Going deeper: draw one more line — from the 1882 Chinese Exclusion Act (chinese-exclusion-1882) to the 1942 internment, this is "an unbroken line" in America's treatment of people of Asian descent. When a society in panic turns on "the minority who look different," is that mechanism still here today? Who has the scapegoat become?

⚠️ When you write this, keep the nature distinct: Japanese American internment was unjust imprisonment, not on the scale of the Holocaust's systematic murder — don't blur the two.`,
      conceptsActivated: ['japanese-american-internment', 'holocaust-genocide', 'sugihara-moral-courage'],
    },
  ],
};

export default notebook;

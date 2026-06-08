// ─── 同伴笔记本架构 v1 · The Spanish-American War & American Empire 1898 ───
// 角色：小 U (Xiao U)，12 岁 7 年级 ABC（亚裔美国华裔），
//      与 storyboard reader 同龄，扮演"学习同伴"
//
// 三段结构：
//   1. preview（入口预习笔记）— 学习目标 + 关键术语清单，不剧透
//   2. mainConcepts（出口复习笔记）— 核心考点卡
//        · 故事覆盖的：storyAnchor.covered = true + xiaoweiNote（嵌在 storyAnchor 内，只回忆+提炼）
//        · 故事没覆盖的：storyAnchor.covered = false + standaloneText + xiaoweiNote（均在卡顶层）
//   3. thinkingQuestions（出口批判性思考）— 3 道 DBQ 入门题
//
// 课纲对齐：
//   - APUSH Period 7 (1890-1945)：CED Topic 7.2「Imperialism: Debates」/ 7.3「The Spanish-American War」
//   - CA HSS 8.12 / 11.4「Becoming a World Power / American Imperialism」
//
// 事实地基：对账 spanish-american-war-1898-factledger.md（28 claim / 4 红旗）
//   - Maine 原因沿用「至今无定论 / 1976 调查倾向内因」（红旗 #1，禁确定式）
//   - 菲律宾平民「至少 20 万」保留「至少」二字（红旗 #2，禁确定数）
//   - 马尼拉湾「在战斗中无一人死亡」（红旗 #4 备注，含「战斗中」限定）
//   - 巴黎条约「仅超 2/3 门槛一票」（红旗 #4）
//
// schemaVersion: 1 · notebookVersion: spanish-american-war-1898-v1

export var notebook = {
  topicId: 'spanish-american-war-1898',
  topicNameCn: '美西战争与美国海外帝国 1898',
  topicNameEn: 'The Spanish-American War & American Empire 1898',
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
    cn: `今天老师说我们要学 1898 年的美西战争（the Spanish-American War）。
她说这是 APUSH 第七单元的"开场必考"——美国就是从这一年，
从一个守着自己大陆的国家，变成一个有海外属地的帝国。

她特别提醒：这一课考的不是"美国赢了战争"这种结论，
而是"1898 年的美国人自己怎么吵这件事"——扩张派 vs 反帝派的那场大辩论。

她给了一张纸，上面写着这些名字：

Theodore Roosevelt（罗斯福）、Mark Twain（马克·吐温）、
Emilio Aguinaldo（阿奎纳多）、George Dewey（杜威）、
William McKinley（麦金莱）、John Hay（海约翰）

还有一串词：yellow journalism（黄色新闻）、USS Maine（缅因号）、
Teller / Platt Amendment（特勒/普拉特修正案）、Treaty of Paris（巴黎条约）、
Anti-Imperialist League（反帝同盟）、Benevolent Assimilation（仁慈同化）、
Open Door Policy（门户开放）、consent of the governed（被治者同意）。

老师还说，这一课有一个"中国桥"对很多华裔同学特别近：
1898 年同一年，列强正在瓜分中国，美国提出"门户开放"。
当年那个被瓜分的中国，正是很多人祖辈生活的地方。

我先记下来，等下读三个故事——Roosevelt（把美国推向帝国的人）、
Twain（站出来反对的良心）、吕宋岛一个被"易主"的菲律宾年轻人（被忽略的一方）——
读完再回来对照这张单子，看我能不能解释。

老师抄给我们一句话，我记在笔记本第一页："一个 1776 年靠'反抗帝国'立国的国家，
1898 年自己成了统治别人的帝国。读这一课，要同时看见它的崛起和它的代价。"`,
    en: `Today my teacher said we're learning the 1898 Spanish-American War.
She said it's the "opening must-know" of APUSH Period 7 — this is the year
America turned from a country minding its own continent into an empire with overseas
possessions.

She gave a special warning: this topic isn't tested as "America won the war,"
but as "how Americans in 1898 argued about it themselves" — the great debate
between expansionists and anti-imperialists.

She gave us a sheet with these names:

Theodore Roosevelt, Mark Twain,
Emilio Aguinaldo, George Dewey,
William McKinley, John Hay

Plus a string of terms: yellow journalism, USS Maine,
Teller / Platt Amendment, Treaty of Paris,
Anti-Imperialist League, Benevolent Assimilation,
Open Door Policy, consent of the governed.

Teacher also said this topic has a "China bridge" that sits very close to many
Chinese-heritage students: in that same year, 1898, the great powers were carving
up China, and America proposed the "Open Door." That carved-up China is the very
place many of our ancestors lived.

Let me write these down. After I read the three stories — Roosevelt (who pushed
America into empire), Twain (the conscience who stood up against it), and a young
Filipino man on Luzon who was "handed over" (the overlooked side) — I'll come back
and check whether I can explain each one.

Teacher copied us one line, which I wrote on the first page of my notebook: "A nation
founded in 1776 by rebelling against empire became, in 1898, an empire ruling others.
To read this topic, see its rise and its cost at the same time."`,
    keyTerms: [
      { cn: '黄色新闻（耸动煽情的报业）', en: 'yellow journalism' },
      { cn: '缅因号（开战导火索的美舰）', en: 'USS Maine' },
      { cn: '特勒修正案（1898，声明无意吞并古巴）', en: 'Teller Amendment' },
      { cn: '普拉特修正案（1901，对古巴的干涉权）', en: 'Platt Amendment' },
      { cn: '马尼拉湾海战（1898.5.1）', en: 'Battle of Manila Bay' },
      { cn: '莽骑兵（Roosevelt 的志愿骑兵团）', en: 'Rough Riders' },
      { cn: '巴黎条约（1898.12.10）', en: 'Treaty of Paris (1898)' },
      { cn: '反帝同盟（1898）', en: 'Anti-Imperialist League' },
      { cn: '仁慈同化（McKinley 占领菲律宾的说法）', en: 'Benevolent Assimilation' },
      { cn: '菲美战争（1899-1902）', en: 'Philippine-American War' },
      { cn: '门户开放（1899-1900）', en: 'Open Door Policy' },
      { cn: '被治者同意（反帝派核心原则）', en: 'consent of the governed' },
      { cn: '再集中营地（西/美用的平民圈禁）', en: 'reconcentration' },
      { cn: '一场漂亮的小仗（John Hay 语）', en: 'a splendid little war' },
    ],
    // mustKnow: true = AP/州考必考，给 IPA + audioKey + 完整角色卡
    // mustKnow: false = 背景人物，用角色称谓就够，不进考点卡，不加音频
    keyFigures: [
      {
        nameCn: '西奥多·罗斯福',
        nameEn: 'Theodore Roosevelt',
        ipa: '/ˌθiːəˈdɔːr ˈroʊzəvɛlt/',
        roleCn: '1898 年任海军部副部长，趁上司外出抢发电报令 Dewey 备战；辞官组建并率领 Rough Riders，圣胡安岭一战成名，1901 年成为总统；扩张的热血推手',
        roleEn: 'Assistant Secretary of the Navy in 1898 who, with his boss away, rushed a telegram ordering Dewey to ready for war; quit to raise and lead the Rough Riders, won fame on San Juan ridge, and became president in 1901; the hot-blooded driver of empire',
        mustKnow: true,
        audioKey: 'theodore-roosevelt',
      },
      {
        nameCn: '马克·吐温（塞缪尔·克莱门斯）',
        nameEn: 'Mark Twain (Samuel Clemens)',
        ipa: '/mɑːrk tweɪn/',
        roleCn: '美国最受爱戴的作家；起初一度支持开战，看清美国接管菲律宾后转为反帝同盟最尖锐的良心之声',
        roleEn: 'America\'s most-loved writer; supported the war at first, then turned and became one of the sharpest consciences of the Anti-Imperialist League once he saw America taking over the Philippines',
        mustKnow: true,
        audioKey: 'mark-twain',
      },
      {
        nameCn: '埃米利奥·阿奎纳多',
        nameEn: 'Emilio Aguinaldo',
        ipa: '/əˌɡiːˈnɑːldoʊ/',
        roleCn: '菲律宾独立运动与第一共和国领袖，早已宣布菲律宾独立但美国不承认，1901 年被美军俘虏',
        roleEn: 'Leader of the Philippine independence movement and first republic, who had declared independence that America refused to recognize; captured by U.S. forces in 1901',
        mustKnow: true,
        audioKey: 'emilio-aguinaldo',
      },
      {
        nameCn: '乔治·杜威',
        nameEn: 'George Dewey',
        ipa: '/ˈduːi/',
        roleCn: '海军准将，1898 年 5 月 1 日在马尼拉湾几小时全歼西班牙太平洋舰队',
        roleEn: 'Commodore who, on May 1, 1898, destroyed Spain\'s entire Pacific fleet at Manila Bay in a few hours',
        mustKnow: true,
        audioKey: 'george-dewey',
      },
      {
        nameCn: '威廉·麦金莱',
        nameEn: 'William McKinley',
        ipa: '/məˈkɪnli/',
        roleCn: '战时总统，发「Benevolent Assimilation」公告为占领菲律宾辩护，1901 年遇刺（Roosevelt 接任）',
        roleEn: 'Wartime president who issued the "Benevolent Assimilation" proclamation to justify occupying the Philippines; assassinated in 1901 (Roosevelt succeeded him)',
        mustKnow: true,
        audioKey: 'william-mckinley',
      },
      {
        nameCn: '约翰·海',
        nameEn: 'John Hay',
        ipa: '/heɪ/',
        roleCn: '国务卿，门户开放照会的作者，称美西战争为「a splendid little war」',
        roleEn: 'Secretary of State, author of the Open Door notes, who called the war "a splendid little war"',
        mustKnow: true,
        audioKey: 'john-hay',
      },
      {
        nameCn: '安德鲁·卡内基',
        nameEn: 'Andrew Carnegie',
        ipa: '/kɑːrˈneɪɡi/',
        roleCn: '钢铁巨头，反帝同盟出资人，与 Twain 同站反对吞并菲律宾',
        roleEn: 'Steel tycoon and financier of the Anti-Imperialist League, who stood with Twain against annexing the Philippines',
        mustKnow: false,
        audioKey: null,
      },
    ],
  },

  // ─── 出口：核心考点卡（小 U 的复习笔记）─────────────────────
  mainConcepts: [
    {
      id: 'yellow-journalism',
      termCn: '黄色新闻',
      termEn: 'Yellow Journalism',
      defCn: '用最耸动的大标题和插画抢读者、放大危机情绪的报纸风格。1890 年代 Hearst（赫斯特）和 Pulitzer（普利策）的报纸这样做，把古巴的惨状天天放上头版，把美国民意点着了。',
      defEn: 'A style of newspaper reporting that uses shocking headlines and dramatic images to stir up emotions. In the 1890s, papers owned by Hearst and Pulitzer used this style to put Cuba\'s suffering on the front page every day and turn American public opinion toward war.',
      standardRef: ['APUSH CED Topic 7.3', 'CA HSS 11.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'roosevelt-actor',
        nodeIds: ['saw-roosevelt-n2'],
        xiaoweiNote: {
          cn: `Roosevelt 那条故事线里讲到了黄色新闻。当时纽约有一种便宜的大众报纸，
一两美分一份。它们靠最耸动的大标题和插画抢读者——这就是 **yellow journalism（黄色新闻）**。
代表是 Hearst（赫斯特）的《纽约日报》和 Pulitzer（普利策）的《纽约世界报》。

它们天天把古巴的惨状放上头版，把民意点着，整个国家开始喊"救古巴、打西班牙"。

**考点关键句：黄色新闻 = 用耸动报道放大古巴危机、推动美国走向战争的舆论力量。**
AP 爱考"媒体如何影响民意和外交决策"——这是经典证据。

小心一个误区：黄色新闻不是单独"造成"了战争。
它是民意催化剂之一，和 Maine 爆炸、市场野心一起起作用。`,
          en: `Roosevelt's story line covers yellow journalism. New York then had cheap
mass papers, one or two cents each, fighting for readers with the most shocking
headlines and pictures — that's **yellow journalism**. The leaders were Hearst's
New York Journal and Pulitzer's New York World.

They put Cuba's horrors on the front page every day, lit public feeling on fire,
and the whole nation began to cry "save Cuba, fight Spain."

**Key exam sentence: yellow journalism = the press force that magnified the Cuban
crisis with sensational coverage and pushed America toward war.**
AP loves "how media shapes public opinion and foreign-policy decisions" — this is
the classic evidence.

Watch one misconception: yellow journalism didn't single-handedly "cause" the war.
It was one catalyst of public feeling, working together with the Maine explosion
and market ambitions.`,
        },
      },
    },

    {
      id: 'uss-maine',
      termCn: '缅因号爆炸',
      termEn: 'The Explosion of the USS Maine',
      defCn: '1898 年 2 月 15 日，美国战舰缅因号停在古巴哈瓦那港时突然爆炸沉没，260 多名美国水兵死亡。这件事成了开战的导火索。原因至今无定论——1976 年的调查倾向认为是船内自燃，不是西班牙干的。',
      defEn: 'On February 15, 1898, the U.S. battleship Maine exploded and sank in Havana harbor, Cuba, killing more than 260 American sailors. It became the trigger for war. The true cause has never been settled — a 1976 investigation leaned toward an internal explosion, not a Spanish attack.',
      standardRef: ['APUSH CED Topic 7.3', 'CA HSS 11.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'roosevelt-actor',
        nodeIds: ['saw-roosevelt-n4'],
        xiaoweiNote: {
          cn: `Roosevelt 那条故事线里，这一段是最难的选择点。
1898 年 2 月 15 日晚，停在古巴哈瓦那港的美国战舰 USS Maine（缅因号）爆炸沉没，
260 多名美国水兵死亡。"Remember the Maine！"成了举国战争口号。

这里有老师反复强调的一个误解陷阱（最高频）：
❌ "是西班牙炸了 Maine，所以美国开战"
✅ 当时根本没人查得清原因。1976 年美国海军调查倾向认为是船内煤舱自燃引爆弹药，
不是西班牙干的——而且至今学界无定论。

**考点关键句：Maine 是开战的导火索 + 民意催化剂，不是已证实的西班牙袭击。**
答题千万别写成"西班牙炸了 Maine"，会被扣分。`,
          en: `In Roosevelt's story line, this is the hardest choice point.
On the night of February 15, 1898, the U.S. battleship USS Maine, in Havana harbor
in Cuba, exploded and sank, killing more than 260 American sailors. "Remember the
Maine!" became the nation's war cry.

Here's a misconception trap my teacher kept stressing (highest frequency):
❌ "Spain blew up the Maine, so America went to war"
✅ At the time no one could determine the cause. A 1976 U.S. Navy study leaned toward
an internal coal-bunker fire igniting the ammunition, not Spain — and scholars reach
no final verdict to this day.

**Key exam sentence: the Maine was the trigger and a catalyst of public opinion, NOT
a proven Spanish attack.** Never write "Spain blew up the Maine" on the exam — it
loses points.`,
        },
      },
    },

    {
      id: 'teller-platt-amendments',
      termCn: 'Teller 修正案 vs Platt 修正案',
      termEn: 'Teller Amendment vs. Platt Amendment',
      defCn: '两份关于古巴的法律文件，放在一起才能看懂美国的矛盾。1898 年开战时，国会通过 Teller 修正案，白纸黑字说"我们无意吞并古巴"。三年后，1901 年的 Platt 修正案却反过来写明：古巴的内政外交美国说了算，还在古巴留了海军基地。',
      defEn: 'Two laws about Cuba that reveal America\'s contradiction when read side by side. The Teller Amendment (1898) stated plainly that the U.S. had "no intention of annexing Cuba." Three years later, the Platt Amendment (1901) gave the U.S. control over Cuba\'s internal and foreign affairs and a naval base there.',
      standardRef: ['APUSH CED Topic 7.3', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'roosevelt-actor',
        nodeIds: ['saw-roosevelt-n8'],
        xiaoweiNote: {
          cn: `Roosevelt 那条故事线里，这两份文件被放在一起看了。
这是 AP 经典的"自相矛盾"证据对，DBQ 超爱用。

- **Teller 修正案（1898，开战时）**：白纸黑字声明美国"无意吞并古巴"，
  打完就让古巴独立——为了堵住"你这只是抢地"的批评。
- **Platt 修正案（1901，三年后）**：反过来写明——古巴的内政、外交美国说了算，
  还要在古巴留一个海军基地（就是今天的关塔那摩）。

**考点关键句：Teller（不要古巴）↔ Platt（古巴的事我们说了算）= 同一个国家的"精神分裂"，**
既想要"解放者"形象，又舍不得真的放手。这就是历史学家说的"不情愿的帝国"。

DBQ 用法：要论证"美国理念（被治者同意）和实践（控制古巴）之间的张力"，
直接把这两份文件并排放——AP 评分最奖励这种能看见两面的写法。`,
          en: `In Roosevelt's story line, these two documents are placed side by side.
This is AP's classic "self-contradiction" evidence pair, and DBQs love it.

- **Teller Amendment (1898, at the war's start)**: stated plainly that the U.S. had
  "no intention of annexing Cuba" and would let Cuba go free — to block the charge
  "this is just a land grab."
- **Platt Amendment (1901, three years later)**: wrote the opposite — Cuba's domestic
  and foreign affairs were America's to settle, plus a naval base on the island
  (today's Guantánamo).

**Key exam sentence: Teller (we don't want Cuba) ↔ Platt (Cuba's affairs are ours
to decide) = the same nation's "split mind,"** wanting both the image of a liberator
and to never quite let go. This is what historians call the "reluctant empire."

DBQ use: to argue "the tension between America's idea (consent of the governed) and
its practice (controlling Cuba)," lay these two documents side by side — AP scoring
rewards this complexity most.`,
        },
      },
    },

    {
      id: 'battle-of-manila-bay',
      termCn: '马尼拉湾海战',
      termEn: 'Battle of Manila Bay',
      defCn: '1898 年 5 月 1 日，美国海军准将 Dewey（杜威）率舰队突袭菲律宾马尼拉湾，几个小时内全歼西班牙整支太平洋舰队，美方在战斗中无一人死亡。这是美西战争的第一场大胜——但它打在菲律宾，不是古巴。',
      defEn: 'On May 1, 1898, U.S. Commodore Dewey led his fleet in a surprise attack on Manila Bay in the Philippines, destroying Spain\'s entire Pacific fleet in a few hours with no American killed in the fighting. It was the war\'s first major victory — but it happened in the Philippines, not Cuba.',
      standardRef: ['APUSH CED Topic 7.3', 'CA HSS 11.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'filipino-on-receiving-end',
        nodeIds: ['saw-roosevelt-n6', 'saw-twain-n6', 'saw-filipino-n6'],
        xiaoweiNote: {
          cn: `三条故事线都讲到了同一声炮——这是这一课里三个人共同经历的同一个时刻，最值得回味。
1898 年 5 月 1 日，Dewey 的舰队突袭马尼拉湾，几个小时全歼西班牙整支太平洋舰队，
美方在战斗中无一人死亡。（注意"在战斗中"这个限定，是标准教学表述。）

同一声炮，三个人听见的完全不同：
① Roosevelt 那条线：他听成了二月那道命令"终于响了"，命运的回声。
② Twain 那条线：他先听成"解放"，后来才听出是帝国到来的第一声枪。
③ 吕宋少年那条线：他先欢呼，看清巴黎条约后才懂这是"换了个主人"。

**考点关键句：马尼拉湾是美西战争第一场大胜，第一枪却打在菲律宾——**
说明这场"古巴战争"从一开始就连着更大的太平洋/中国市场野心。

AP 爱考"为什么一场为古巴的战争，第一仗在菲律宾打"——答案就是太平洋跳板。`,
          en: `All three story lines hit the same gunfire — this is the moment all three
people share, the most worth replaying. On May 1, 1898, Dewey's fleet surprised
Manila Bay and, in a few hours, destroyed Spain's entire Pacific fleet, with not one
American killed in the fighting. (Note the qualifier "in the fighting" — that's the
standard teaching phrasing.)

The same boom, heard utterly differently by three people:
① Roosevelt's line: he heard his February order "finally going off," an echo of destiny.
② Twain's line: he first heard "liberation," later heard the first gunshot of empire.
③ The Luzon youth's line: he cheered first, then understood — after the Treaty of Paris —
  it meant "a change of masters."

**Key exam sentence: Manila Bay was the war's first great victory, yet the first shot
fell in the Philippines —** showing this "Cuba war" was tied from the start to a larger
Pacific/China-market ambition.

AP loves "why did a war for Cuba open its first battle in the Philippines" — the
answer is the Pacific stepping-stone.`,
        },
      },
    },

    {
      id: 'treaty-of-paris-1898',
      termCn: '巴黎条约（1898）',
      termEn: 'Treaty of Paris (1898)',
      defCn: '1898 年 12 月 10 日签订的和平条约。西班牙按这份条约做了四件事：① 放弃古巴，② 把波多黎各割给美国，③ 把关岛割给美国，④ 以 2000 万美元把菲律宾"卖"给美国。美国从此有了分布在加勒比海和太平洋的海外属地。',
      defEn: 'The peace treaty signed on December 10, 1898. Under it, Spain did four things: ① gave up Cuba, ② ceded Puerto Rico to the U.S., ③ ceded Guam to the U.S., and ④ "sold" the Philippines to the U.S. for twenty million dollars. America overnight gained overseas possessions across the Caribbean and Pacific.',
      standardRef: ['APUSH CED Topic 7.3', 'CA HSS 11.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'filipino-on-receiving-end',
        nodeIds: ['saw-roosevelt-n8', 'saw-twain-n4', 'saw-filipino-n5'],
        xiaoweiNote: {
          cn: `三条故事线都讲到这份条约，但吕宋少年那条线里最戳人。
1898 年 12 月 10 日，巴黎条约签字。我把它的四件事背成一串：
西班牙 ① 放弃古巴，② 割波多黎各、③ 割关岛给美国，④ 以 2000 万美元把菲律宾"卖"给美国。

**考点关键句：巴黎条约是美国一夜之间获得海外属地（横跨加勒比和太平洋）的法律节点。**

最戳人的一个细节（来自 Twain 那条线）：1899 年 2 月，美国参议院批准这份条约，
仅以超过三分之二门槛一票的微弱优势通过——美国要不要做帝国，悬在了一票上。

吕宋少年的角度逼我想一个问题：整笔交易里，
没有一个菲律宾人被问过"愿不愿意"——一个民族能不能被"买卖"？
这正好接上反帝派那句"被治者同意"。`,
          en: `All three story lines reach this treaty, but the Luzon youth's line hits
hardest. On December 10, 1898, the Treaty of Paris was signed. I memorize its four
pieces in a chain: Spain ① gave up Cuba, ② ceded Puerto Rico, ③ ceded Guam to the
U.S., and ④ "sold" the Philippines to the U.S. for twenty million dollars.

**Key exam sentence: the Treaty of Paris is the legal moment America gained overseas
possessions overnight, across the Caribbean and the Pacific.**

The most striking detail (from Twain's story line): in February 1899, the U.S. Senate
ratified this treaty by just one vote above the two-thirds threshold — whether America
would become an empire hung on a single vote.

The Luzon youth's angle forces a question: in the whole bargain, not one Filipino was
ever asked "are you willing" — can a whole people be "bought and sold"? That connects
right back to the anti-imperialists' line "consent of the governed."`,
        },
      },
    },

    {
      id: 'anti-imperialist-debate',
      termCn: '帝国大辩论（扩张派 vs 反帝派）',
      termEn: 'The Debate Over Empire (Expansionists vs. Anti-Imperialists)',
      defCn: '1898 年前后，美国人自己分成两派激烈争论：要不要把海外属地（尤其是菲律宾）留下来？扩张派说"该要"，反帝派说"这背叛了美国建国原则"。这场争论是 APUSH 第七单元的核心考点。',
      defEn: 'Around 1898, Americans split into two camps in a fierce argument: should the U.S. keep overseas territories like the Philippines? Expansionists said yes; anti-imperialists said doing so betrayed America\'s founding principles. This debate is the central exam topic of APUSH Period 7.',
      standardRef: ['APUSH CED Topic 7.2', 'APUSH CED Topic 7.3', 'AP DBQ rubric'],
      examFrequency: 'highest',
      storyAnchor: {
        covered: true,
        lens: 'twain-mediator',
        nodeIds: ['saw-twain-n3', 'saw-twain-n5'],
        xiaoweiNote: {
          cn: `Twain 那条故事线里，第 3、5 节整条都在讲这个——这是 APUSH 第七单元的"心脏考点"。
老师说阅卷反复奖励的不是结论，而是"1898 年的美国人自己怎么吵这件事"。

我背成一张对照表：
- **扩张派（expansionists）**：海军战略家、报业大亨、要中国市场的工厂主、传教士。
  他们的四条理由 = 命运（destiny）+ 海军安全 + 市场（中国）+ 文明使命（missionary）。
- **反帝派（anti-imperialists）**：Twain、Carnegie、Bryan，1898 年成立反帝同盟。
  他们的核心理由 = 统治不肯被统治的人，背叛了"被治者同意"的立国原则。

老师说一个最高级的层次（AP 最爱）：反帝派内部动机也不一致——
有人像 Twain 是出于原则；也有人是出于种族偏见，不想要"非白人"当美国国民。
**能写出"同一阵营内部分裂"，就是 AP 评分里的 complexity（复杂性）。**

记忆锚：扩张 = 命运/海军/市场/传教；反帝 = 被治者同意/背叛 1776/（内部又分原则 vs 种族）。`,
          en: `Twain's story line, covering the 3rd and 5th sections, is the whole spine of
this — the "heart" exam point of APUSH Period 7. Teacher said graders keep rewarding
not a conclusion, but "how Americans in 1898 argued about it themselves."

I memorize it as a compare table:
- **Expansionists**: naval strategists, press tycoons, factory owners wanting the China
  market, missionaries. Their four reasons = destiny + naval security + markets (China) +
  civilizing mission.
- **Anti-imperialists**: Twain, Carnegie, Bryan, who founded the Anti-Imperialist League
  in 1898. Their core reason = ruling people who refuse to be ruled betrays the founding
  principle of "consent of the governed."

Teacher named the highest layer (AP's favorite): the anti-imperialists' own motives
were not unified — some, like Twain, acted from principle; others were racist and simply
did not want "non-white" people becoming American citizens. **Writing "a split within
one camp" is the complexity AP scoring wants.**

Memory anchor: expansion = destiny/navy/markets/missions; anti-imperialism = consent
of the governed / betrayal of 1776 / (internally split between principle vs. race).`,
        },
      },
    },

    {
      id: 'philippine-american-war',
      termCn: '菲美战争与「至少 20 万」',
      termEn: 'The Philippine-American War & "At Least 200,000"',
      defCn: '1899 年 2 月爆发、1902 年结束的战争。菲律宾人拒绝接受被美国接管，于是和美军开打。这场仗远比对西班牙那场"漂亮小仗"血腥：超过 4200 名美军、约 2 万菲律宾战士战死，至少 20 万菲律宾平民死亡（大多死于战乱带来的饥荒和疫病）。',
      defEn: 'A war that broke out in February 1899 and ended in 1902. Filipinos refused to accept American rule and fought back. It was far bloodier than the "splendid little war" with Spain: over 4,200 U.S. troops and about 20,000 Filipino fighters died, and at least 200,000 Filipino civilians died, mostly from famine and disease caused by the war.',
      standardRef: ['APUSH CED Topic 7.3', 'AP DBQ rubric'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'filipino-on-receiving-end',
        nodeIds: ['saw-filipino-n7', 'saw-roosevelt-n9'],
        xiaoweiNote: {
          cn: `吕宋少年那条线和 Roosevelt 那条线都讲到了这场战争。
菲律宾人不接受被"买卖"。1899 年 2 月美军和菲律宾军队开火，菲美战争爆发，
打到 1902 年；Aguinaldo 1901 年被俘。这一仗远比对西班牙那场"小仗"血腥。

伤亡（老师要求精确口径）：4200 多名美军、约 2 万菲律宾战士战死，
而至少 20 万菲律宾平民死亡——大多死于战乱带来的饥荒和疫病（含末期一场霍乱）。

**红旗提醒（最高风险数字）：一定写"至少 20 万"，保留"至少"二字。**
学界估计区间很宽，有的高达 25 万到上百万——20 万只是保守下限，禁止写成确定数。

**考点关键句：对西班牙的"漂亮小仗"约十周，但紧接着的菲美战争打了三年、死亡惨重得多。**
把两者合起来看，1898 一点都不"小"。这就是"被记住的 vs 被遗忘的"那道 DBQ。`,
          en: `The Luzon youth's line and Roosevelt's line both cover this war. Filipinos
refused to be "bought and sold." In February 1899, U.S. and Filipino forces opened
fire, the Philippine-American War broke out, and it ran to 1902; Aguinaldo was captured
in 1901. This war was far bloodier than the "little war" with Spain.

Casualties (teacher demands the precise phrasing): over 4,200 U.S. troops and about
20,000 Filipino fighters died, and at least 200,000 Filipino civilians died — most
from the famine and disease the war brought (including a cholera epidemic near the end).

**Red-flag reminder (the highest-risk number): always write "at least 200,000," keeping
the words "at least."** Scholarly estimates run wide, some as high as 250,000 to over
a million — 200,000 is only the conservative floor; never write it as a fixed number.

**Key exam sentence: the "splendid little war" with Spain lasted about ten weeks, but
the Philippine-American War that followed ran three years with far heavier death.**
Taken together, 1898 was not "little" at all. This is the "remembered vs. forgotten"
DBQ.`,
        },
      },
    },

    {
      id: 'open-door-policy',
      termCn: '门户开放与中国桥',
      termEn: 'The Open Door Policy & the China Bridge',
      defCn: '1899-1900 年，美国国务卿 John Hay（海约翰）向列强发出照会，要求各国让所有人都能进整个中国做生意，不要把中国锁进各自的"势力范围"。这不是保护中国——中国从没被问过。美国的真实目的是保住自己进入中国市场的机会。',
      defEn: 'In 1899–1900, U.S. Secretary of State John Hay sent notes to the great powers asking them to let all nations trade freely throughout all of China, rather than locking China into separate "spheres of influence." This was not protection for China — China was never asked. America\'s real goal was to keep its own access to the Chinese market.',
      standardRef: ['APUSH CED Topic 7.3', 'CA HSS 11.4'],
      examFrequency: 'high',
      storyAnchor: {
        covered: true,
        lens: 'twain-mediator',
        nodeIds: ['saw-twain-n9', 'saw-filipino-n8'],
        xiaoweiNote: {
          cn: `Twain 那条线和吕宋少年那条线都把这一条拉到了中国——这就是这一课的"中国桥"，
对很多华裔同学最近。

背景：1898 年（清光绪二十四年），甲午战败后清朝力衰，列强"瓜分中国"——
德国强租胶州湾、俄国租旅顺大连、英国租威海卫、法国租广州湾。
美国晚到一步，在中国抢不到地，于是国务卿 John Hay 提出"门户开放"：
不要一块"势力范围"，而要求各国让所有人都能进整个中国做生意。

**考点关键句：门户开放 = 迟到者的聪明——不抢地，要"整扇门都开着"，**
核心是保住美国商人进入整个中国市场的机会。

老师强调一个误解（高频）：
❌ "门户开放是美国保护中国"
✅ 它从没问过中国，中国是"被开放"的那扇门；客观上它确实收敛了赤裸瓜分，但动机是商业利益。

我自己的关联（最有感）：菲律宾"被解放成属地"，中国"被开放成市场"——
同一双帝国的手。而几乎同时，美国还用排华法案（1882）把中国人挡在国门外：
要中国的市场，却不要中国的人。`,
          en: `Twain's line and the Luzon youth's line both pull this thread to China —
this is the topic's "China bridge," closest to many Chinese-heritage students.

Background: in 1898 (the 24th year of the Guangxu reign), after the Qing's defeat
by Japan, the powers "carved up China" — Germany forced a lease on Jiaozhou Bay,
Russia leased Port Arthur and Dalian, Britain leased Weihaiwei, France leased
Guangzhouwan. America arrived too late and could grab no land, so Secretary of State
John Hay proposed the "Open Door": instead of a "sphere of influence," demand that
all nations let everyone trade throughout all of China.

**Key exam sentence: the Open Door = a latecomer's cleverness — don't grab land,
keep "the whole door open,"** at its core to preserve America's chance at the entire
China market.

Teacher stressed a misconception (high frequency):
❌ "the Open Door protected China"
✅ it never asked China; China was the door being "opened." It did objectively
restrain naked carving-up, but its motive was commercial interest.

My own connection (the one I feel most): Filipinos were "liberated into a possession,"
Chinese were "opened into a market" — the same imperial hands. And at almost the same
time, America used the Chinese Exclusion Act (1882) to bar Chinese people from its
gates: it wanted China's market, but not China's people.`,
        },
      },
    },

    {
      id: 'annexation-of-hawaii',
      termCn: '吞并夏威夷',
      termEn: 'The Annexation of Hawaii',
      defCn: '1898 年 7 月 7 日，美国正式吞并夏威夷。这不是第一次——1893 年，一批美裔商人在美国军舰撑腰下就已经推翻了夏威夷女王 Liliʻuokalani。国会吞并时用的是联合决议（只需过半数），而不是条约（需三分之二），因为拿不到三分之二的票。过半数夏威夷原住民曾联名请愿反对。',
      defEn: 'On July 7, 1898, the U.S. formally annexed Hawaii. The takeover had started earlier: in 1893, American businessmen backed by U.S. warships had overthrown Queen Liliʻuokalani. Congress used a joint resolution (simple majority) rather than a treaty (two-thirds) because annexation could not get two-thirds of the vote. A majority of Native Hawaiians had petitioned against annexation.',
      standardRef: ['APUSH CED Topic 7.3', 'CA HSS 11.4'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'roosevelt-actor', nodeId: 'saw-roosevelt-n3', context: 'Roosevelt 讲夏威夷是太平洋正中、通往亚洲的跳板' },
        ],
      },
      standaloneText: {
        cn: `**吞并夏威夷（1898 年 7 月 7 日）** 故事里没单独展开，但它是 1898 帝国扩张的关键一块，
和"中国市场"逻辑是一条线：夏威夷在太平洋正中，是通往亚洲的加煤站和跳板。

**时间线（AP 爱考的两步）：**
① **1893 年**：在美国军舰和陆战队撑腰下，一批美裔商人推翻了夏威夷女王
   **Liliʻuokalani（利留卡拉尼）**，建立亲美的临时政府。
② **1898 年 7 月 7 日**：美国趁美西战争凸显"太平洋加煤站"的价值，用一纸
   **Newlands 联合决议**正式吞并夏威夷。

**一个高频考点细节：** 国会用的是 **joint resolution（联合决议，只需简单多数）**，
而不是 **treaty（条约，需参议院三分之二）**——因为吞并夏威夷拿不到三分之二的票，
就改走只需过半的"后门"。同时，过半数夏威夷原住民曾联名请愿**反对**吞并。

**考点关键句：夏威夷不是"和平自愿加入"——** 是 1893 年被推翻 + 1898 年绕过条约门槛吞并，
且多数原住民反对。它和门户开放、菲律宾是同一套"通往亚洲市场"的太平洋战略。`,
        en: `**The annexation of Hawaii (July 7, 1898)** isn't unpacked on its own in the
story, but it's a key piece of 1898's imperial expansion, on one line with the "China
market" logic: Hawaii sits in the middle of the Pacific, a coaling station and
stepping-stone to Asia.

**Timeline (the two steps AP loves):**
① **1893**: backed by U.S. warships and marines, American businessmen overthrew Queen
   **Liliʻuokalani** and set up a pro-American provisional government.
② **July 7, 1898**: with the war highlighting the value of a Pacific coaling station,
   the U.S. formally annexed Hawaii by a **Newlands Joint Resolution**.

**A high-frequency detail:** Congress used a **joint resolution (simple majority)**, not
a **treaty (two-thirds of the Senate)** — because annexation couldn't get two-thirds, so
they took the "back door" needing only a majority. Meanwhile, a majority of Native
Hawaiians had petitioned **against** annexation.

**Key exam sentence: Hawaii did not "peacefully and willingly join" —** it was overthrown
in 1893 and annexed in 1898 by bypassing the treaty threshold, against the wishes of most
Native Hawaiians. It belongs to the same Pacific strategy of "reaching the Asian market"
as the Open Door and the Philippines.`,
      },
      xiaoweiNote: {
        cn: `老师说夏威夷最爱考的就是那个"程序漏洞"：拿不到条约要的三分之二，
就改用只需简单多数的 joint resolution 绕过去。

记忆锚：**① 1893 推翻女王 → ② 1898 联合决议吞并（绕过 2/3）→ ③ 多数原住民反对**。
这条链能直接拿"美国如何取得海外领土"的 AP 分。

别混：夏威夷是"吞并（annex，变成美国领土）"，
菲律宾是"购买 + 镇压（巴黎条约 2000 万 + 菲美战争）"——两种不同的取得方式。`,
        en: `Teacher said Hawaii's favorite test point is the "procedural loophole": unable
to get the two-thirds a treaty needs, they switched to a simple-majority joint resolution
to get around it.

Memory anchor: **① 1893 overthrow the queen → ② 1898 annex by joint resolution
(bypassing 2/3) → ③ most Natives opposed.** This chain earns direct AP points on
"how America acquired overseas territory."

Don't mix up: Hawaii was "annexed" (made U.S. territory); the Philippines was "bought
and suppressed" (Treaty of Paris $20M + the Philippine-American War) — two different
modes of acquisition.`,
      },
    },

    {
      id: 'puerto-rico-territorial-status',
      termCn: '波多黎各与「未解的帝国结」',
      termEn: 'Puerto Rico & the Unsolved "Imperial Knot"',
      defCn: '1898 年巴黎条约把波多黎各割给美国后，它一直是美国的"未合并领土"——属于美国，但不是一个州。波多黎各居民从 1917 年起就是美国公民，但住在岛上的他们不能在总统大选中投票，国会里也没有有投票权的代表。这是 1898 年帝国扩张留下的、还没解开的制度悖论。',
      defEn: 'After the 1898 Treaty of Paris ceded Puerto Rico to the U.S., it has remained an "unincorporated territory" — belonging to the U.S. but not a state. Puerto Ricans have been U.S. citizens since 1917, yet those living on the island cannot vote in presidential elections and have no voting representative in Congress. This is the institutional paradox 1898\'s imperial expansion left behind, still unsolved today.',
      standardRef: ['APUSH CED Topic 7.3', 'CA HSS 11.4'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'roosevelt-actor', nodeId: 'saw-roosevelt-n8', context: '巴黎条约把波多黎各割让给美国' },
        ],
      },
      standaloneText: {
        cn: `**波多黎各的领地身份** 故事里只在巴黎条约那里一带而过（割让给美国），
但它是 1898 留到今天、还没解开的"帝国结"，AP 爱用它考"延续与变化"。

**它是什么：** 1898 年巴黎条约把波多黎各割给美国后，它一直是美国的
**"未合并领土"（unincorporated territory）**——属于美国，但不是一个州。

**关键的矛盾（高频考点）：** 波多黎各居民从 1917 年起就是**美国公民**，
但住在岛上的他们**不能在总统大选中投票**，在国会也没有有投票权的代表。
"是美国公民，却不能选总统"——这是 1898 年帝国扩张留下的、最直观的制度悖论。

**Insular Cases（海岛诸案，1901 起）：** 最高法院一系列判决确立了一个原则——
宪法不"完整地"跟着国旗走到新属地，海外领地居民只享有部分宪法权利。
这给"二等的领地公民"提供了法律基础，影响至今。

**考点关键句：波多黎各 = 1898 帝国扩张"还没兑现的承诺"的活标本——**
一个靠"被治者同意"立国的国家，至今统治着不能投票选总统的公民。
这正好和反帝派当年的质问对上：你统治从没完整同意过的人，算什么？`,
        en: `**Puerto Rico's territorial status** is touched only in passing in the story
(ceded to the U.S. in the Treaty of Paris), but it's the "imperial knot" 1898 left
unsolved to this day, and AP loves it for "continuity and change."

**What it is:** after the 1898 Treaty of Paris ceded Puerto Rico to the U.S., it has
remained an **unincorporated territory** — belonging to the U.S., but not a state.

**The key contradiction (high-frequency point):** Puerto Ricans have been **U.S.
citizens** since 1917, yet those living on the island **cannot vote in presidential
elections** and have no voting representative in Congress. "U.S. citizens who cannot
vote for president" is the most vivid institutional paradox 1898's expansion left behind.

**The Insular Cases (from 1901):** a series of Supreme Court decisions established that
the Constitution does not follow the flag "in full" to new possessions — residents of
overseas territories enjoy only some constitutional rights. This gave a legal basis for
"second-class territorial citizens," with effects to this day.

**Key exam sentence: Puerto Rico = a living specimen of 1898's "promise not yet kept" —**
a nation founded on "consent of the governed" still rules citizens who cannot vote for
president. This lines up exactly with the anti-imperialists' old challenge: what is it
to rule people who never fully consented?`,
      },
      xiaoweiNote: {
        cn: `老师说这条最适合写"延续与变化（Continuity & Change）"的大题：
1898 的帝国扩张不是"过去式"，波多黎各今天还卡在那个未解的结里。

记忆锚：**美国公民（1917 起）＋ 不能选总统 ＝ 1898 留下的帝国悖论**。
配上 Insular Cases（宪法不完整跟国旗走）这一条，就能把"领地公民二等身份"说圆。

最有力的接法：把它接回 Twain 那句"被治者同意"——
波多黎各正是这条原则到今天都没完全兑现的地方。`,
        en: `Teacher said this one fits a "Continuity and Change" essay best: 1898's
expansion isn't "past tense" — Puerto Rico is still stuck in that unsolved knot today.

Memory anchor: **U.S. citizens (since 1917) + cannot vote for president = the imperial
paradox 1898 left behind.** Pair it with the Insular Cases (the Constitution doesn't
follow the flag in full) to fully explain "second-class territorial citizenship."

The strongest link: tie it back to Twain's "consent of the governed" — Puerto Rico is
exactly where that principle still isn't fully honored today.`,
      },
    },

    {
      id: 'splendid-little-war-vs-forgotten-war',
      termCn: '「漂亮的小仗」vs「被遗忘的战争」（史学与记忆）',
      termEn: '"A Splendid Little War" vs. "A Forgotten War" (Historiography & Memory)',
      defCn: '国务卿 John Hay 把对西班牙的战争叫"a splendid little war（一场漂亮的小仗）"——约十周、美方伤亡极少，美国一夜崛起。但紧接着的菲美战争打了三年、至少 20 万菲律宾平民死亡，常被一句话带过。同一段历史，被讲成"崛起"还是"被遗忘的殖民战争"，取决于你站在谁的位置看。',
      defEn: 'Secretary of State John Hay called the war with Spain "a splendid little war" — about ten weeks, very few American deaths, America rising overnight. But the Philippine-American War that followed lasted three years and killed at least 200,000 Filipino civilians, yet is often dismissed in a single sentence. The same history, told as "a rise" or as "a forgotten colonial war," depends entirely on whose perspective you take.',
      standardRef: ['APUSH CED Topic 7.3', 'AP LEQ rubric'],
      examFrequency: 'mid',
      storyAnchor: {
        covered: false,
        mentionedIn: [
          { lens: 'roosevelt-actor', nodeId: 'saw-roosevelt-n10', context: 'Roosevelt 那条线末尾点出历史学家至今在吵 1898 是意外还是必然' },
          { lens: 'filipino-on-receiving-end', nodeId: 'saw-filipino-n1', context: '吕宋少年开场: 美国课本把 1898 讲成漂亮小仗+崛起' },
        ],
      },
      standaloneText: {
        cn: `这一条不是一个"事件"，是一个**史学和记忆**的考点——LEQ（长论述题）特别奖励
"历史学家怎么吵 / 谁的故事被记住"这一层。Roosevelt 那条线末尾和吕宋少年开场都点到了，
但没展开，单独掌握更稳。

**两个名字，一段历史：**
- 国务卿 John Hay 称美西战争是「**a splendid little war（一场漂亮的小仗）**」——
  约十周、美方战斗死亡极少、美国一夜崛起。这是被高亮、被记住的版本。
- 紧接着的菲美战争打了三年、至少 20 万菲律宾平民死亡，常被一句话带过——
  这是被淡化、几乎被"遗忘的战争"。

**历史学家在争什么（不必记学者名，记立场）：**
① **"不情愿的帝国"派**：1898 是被黄色新闻、Maine 爆炸、一时民意"卷"进去的意外。
② **"市场扩张"派**：1898 不是意外，而是工业过剩、系统性找海外市场的必然（门户开放是纲领）。
③ **"文化/种族"派**：种族主义和"文明使命"观念同时驱动了扩张派和某些反帝派。
④ **菲律宾/后殖民视角**：主张这是一场被主流叙事淡化的殖民战争，不是"小插曲"。

**考点关键句：** 同一段 1898，被讲成"漂亮的小仗 + 崛起"还是"被遗忘的殖民战争"，
取决于你站在谁的位置、用哪种解释。LEQ 高分就是能把这几种解释摆出来、再选边并给证据。`,
        en: `This one isn't an "event" but a **historiography and memory** exam point — the
LEQ (long essay) especially rewards the layer of "how historians argue / whose story is
remembered." Roosevelt's story line end and the Luzon youth's opening both touch it,
but without unpacking, so master it separately.

**Two names, one history:**
- Secretary of State John Hay called the war "**a splendid little war**" — about ten
  weeks, very few American combat deaths, America rising overnight. This is the
  highlighted, remembered version.
- The Philippine-American War that followed ran three years with at least 200,000 Filipino
  civilian deaths, often dismissed in a single line — the downplayed, nearly "forgotten war."

**What historians argue (no need to memorize names, just positions):**
① **"Reluctant empire"**: 1898 was an accident, a country swept in by yellow journalism,
   the Maine, and a momentary public mood.
② **"Market expansion"**: 1898 wasn't an accident but the inevitable result of industrial
   overflow systematically hunting overseas markets (the Open Door is its program).
③ **"Cultural/racial"**: racism and the "civilizing mission" drove both expansionists and
   some anti-imperialists.
④ **Filipino/postcolonial**: argues this was a colonial war downplayed by the mainstream
   narrative, not a "footnote."

**Key exam sentence:** the same 1898, told as "a splendid little war + rise" or as "a
forgotten colonial war," depends on whose position you stand in and which interpretation
you use. A high-scoring LEQ lays out these interpretations, then picks a side with evidence.`,
      },
      xiaoweiNote: {
        cn: `老师说这是 LEQ 的"加分层"：不只讲发生了什么，还要讲"历史学家怎么解释 + 谁的故事被记住"。
我把四种解释压成一句口诀：**意外（不情愿）/ 必然（市场）/ 种族（文明使命）/ 被遗忘（菲律宾视角）**。

最实用的写法：先承认"漂亮小仗+崛起"的主流版本，再用菲美战争至少 20 万平民死亡当反证，
说明记忆是有选择的——然后选一种解释、给证据。

别把它当成"事件"去背日期，它考的是"你会不会从多个角度解释同一段历史"。`,
        en: `Teacher said this is the LEQ's "bonus layer": not just what happened, but "how
historians explain it + whose story is remembered." I compress the four interpretations
into one tag: **accident (reluctant) / inevitable (markets) / race (civilizing mission) /
forgotten (Filipino view).**

The most practical move: first acknowledge the mainstream "splendid little war + rise"
version, then use the at-least-200,000 civilian deaths of the Philippine-American War as
counter-evidence to show memory is selective — then pick one interpretation and give
evidence.

Don't memorize this as an "event" with dates; it tests whether you can explain one
history from multiple angles.`,
      },
    },
  ],

  // ─── 出口：批判性思考（DBQ / LEQ 入门题）───────────────────────
  thinkingQuestions: [
    {
      id: 'q1',
      cn: `1898 年，美国一边在国会通过 Teller 修正案、发誓"我们无意吞并古巴"，
一边花 2000 万美元从西班牙手里买下菲律宾、并镇压想要独立的菲律宾人。

你觉得 1898 年的美国，更应该被看成"一个被民意和机遇卷进帝国的意外"，
还是"一个一直在为市场和海军有计划地向外伸手的必然"？
用至少两条具体证据支持你的判断。`,
      en: `In 1898, America passed the Teller Amendment in Congress, swearing "we have no
intention of annexing Cuba," while spending twenty million dollars to buy the Philippines
from Spain and crushing Filipinos who wanted independence.

Should 1898 America be seen more as "an accident swept into empire by public mood and
opportunity," or as "an inevitability of deliberately reaching outward for markets and a
navy"? Support your judgment with at least two specific pieces of evidence.`,
      hintCn: `提示：这题没有标准答案，AP 评分看你**用证据**的能力，不看你站哪边。
- "意外"这边的证据：黄色新闻点燃民意、Maine 爆炸（原因没查清就开战）、Teller 修正案显示一开始没想吞并。
- "必然"这边的证据：马汉海权论、盯着"中国市场"、第一仗就打在通往亚洲的菲律宾、门户开放是系统找市场。
高分写法：承认两边都站得住，再说明你为什么更倾向某一边——这叫 complexity（复杂性）。`,
      hintEn: `Hint: no standard answer — AP scoring looks at your ability to **use
evidence**, not which side you pick.
- Evidence for "accident": yellow journalism igniting opinion, the Maine (war declared
  before the cause was known), the Teller Amendment showing no annexation plan at first.
- Evidence for "inevitable": Mahan on sea power, the eye on the "China market," the first
  battle fought in the Philippines (the gateway to Asia), the Open Door as systematic
  market-hunting.
High-scoring move: acknowledge both sides stand, then explain why you lean one way —
that's complexity.`,
      conceptsActivated: ['teller-platt-amendments', 'open-door-policy', 'splendid-little-war-vs-forgotten-war'],
    },
    {
      id: 'q2',
      cn: `McKinley 总统称占领菲律宾是"仁慈的同化（Benevolent Assimilation）"，
说美国是来"带给"菲律宾人更好的治理的。但从头到尾，没有一个菲律宾人被问过愿不愿意。

如果你是 AP 老师，要出一道题考"善意的统治和统治到底有没有区别"，
你会怎么提问？请写出你的题目，并说明这道题想逼学生看见什么。`,
      en: `President McKinley called the occupation of the Philippines "Benevolent
Assimilation," saying America came to "bring" Filipinos better government. But from start
to finish, not one Filipino was ever asked whether they wanted it.

If you were an AP teacher writing a question on "is there any difference between benevolent
rule and rule," how would you phrase it? Write your question and explain what it's meant to
make students see.`,
      hintCn: `提示：好的题目通常逼学生**同时看见两件事**，而不是二选一。
可以从反帝派那句"被治者同意"切入：判断一件事是不是"解放"，标准只有一个——被解放的人自己同意了吗？
但也别把另一面忘了：美国后来在菲律宾确实修了学校、铺了路、办了卫生。
你的题目可以让学生比较"为你好"和"问过你"——一个再"仁慈"的统治，
如果从没问过被统治者，它还能算"解放"吗？这正好接上波多黎各今天的悖论。`,
      hintEn: `Hint: a good question forces students to **see two things at once**, not pick
one. You can come at it through the anti-imperialists' line "consent of the governed":
there's only one test of "liberation" — did the people being liberated consent?
But don't forget the other side: America did later build schools, roads, and public health
in the Philippines. Your question could have students compare "for your own good" with
"asked you" — can even the most "benevolent" rule count as "liberation" if it never asked
those ruled? This connects right to Puerto Rico's paradox today.`,
      conceptsActivated: ['philippine-american-war', 'puerto-rico-territorial-status', 'anti-imperialist-debate'],
    },
    {
      id: 'q3',
      cn: `美国课本常把 1898 讲成"一场漂亮的小仗 + 美国崛起"，
而菲美战争（至少 20 万菲律宾平民死亡）常被一句话带过。

一段历史里，谁的故事被记住、谁的被遗忘，是由什么决定的？
请用 1898 这一课里的一个具体例子（比如圣胡安岭的黑人骑兵团、或那个没有名字的吕宋少年）
来支持你的看法。`,
      en: `American textbooks often tell 1898 as "a splendid little war + America's rise,"
while the Philippine-American War (at least 200,000 Filipino civilian deaths) is dismissed
in a single line.

In a piece of history, what decides whose story is remembered and whose is forgotten?
Support your view with one specific example from this 1898 topic (for instance, the Black
cavalry at San Juan ridge, or the nameless young man on Luzon).`,
      hintCn: `提示：先想清楚"被记住"和"事实重要性"不是一回事——
死了至少 20 万平民的战争，可以比一场十周的"小仗"更重要，却被记得更少。
具体例子可以举：圣胡安岭那天黑人第 9、第 10 骑兵团同样血战，但镜头几乎全给了 Roosevelt；
或者那个吕宋少年——历史连他的名字都没留下，而"没有名字"本身就是问题的一部分。
进阶思考：谁有权写下"被记住的版本"？AP 看的是你能不能用一个真实例子，
把"记忆是有选择的"这个抽象论点钉在证据上。`,
      hintEn: `Hint: first separate "being remembered" from "actual importance" — a war that
killed at least 200,000 civilians can matter more than a ten-week "little war" yet be
remembered far less. For a specific example: at San Juan ridge the Black 9th and 10th
Cavalry fought and bled too, but the cameras went almost entirely to Roosevelt; or the
Luzon youth — history left not even his name, and "having no name" is itself part of the
problem. Going deeper: who has the power to write the "remembered version"? AP wants you to
pin the abstract claim "memory is selective" to evidence with one real example.`,
      conceptsActivated: ['philippine-american-war', 'splendid-little-war-vs-forgotten-war', 'battle-of-manila-bay'],
    },
  ],
};

export default notebook;

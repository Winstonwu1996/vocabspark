// ─── Enlightenment 1689-1804 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 启蒙运动 · Enlightenment 1689-1804
// HSS-7.11 · AP World 5.3 (Enlightenment philosophy + Atlantic revolutions)
//
// 3 lens 设计 (per Sarah Chen audit + 王老师 curriculum sequence):
//   - voltaire-perpetrator  (perpetrator-actor) — 1694-1778 philosophe + 殖民股东 + 反犹辞典作者
//   - gouges-mediator       (lonely-mediator) — 1748-1793 在性别排斥和种族排斥之间的写作者
//   - toussaint-receiving   (receiving-end, defaultLens) — 1743-1803 用启蒙语言颠覆启蒙的受害者
//
// 跨 lens micro-detail (per Sarah Chen audit):
//   锁定 #1 1793年三个月差:
//     - Voltaire N12: 他的文字被革命法庭用来建构「理性」正当性
//     - Gouges N11: 1793.11.3 断头台 vs Toussaint 1793.8 投靠同一个法国
//     - Toussaint N8: 1793.8 投靠法国废奴令 vs Gouges 11月被处死
//   锁定 #2 1791年:
//     - Voltaire N12: 1791.7.11 万神殿
//     - Gouges N7: 1791秋 《女性宣言》无人回应
//     - Toussaint N7: 1791.10 加入起义
//
// 来源: Gay 1966 / Israel 2001 / Davidson 2010 / Cronk 2009 / Hertzberg 1968
//       Blanc 2003 / Scott 1996 / Dubois 2004 / C.L.R. James 1938 / Robertson 2005
//       Blackburn 1988 / Schiebinger 1989
//
// schemaVersion: 2 · defaultLens: toussaint-receiving

export var voltaireLens = {
  id: 'voltaire-perpetrator',
  name: 'Voltaire (Francois-Marie Arouet)',
  nameCn: '伏尔泰（弗朗索瓦-马里·阿鲁埃）',
  role: 'perpetrator-actor',
  roleDescription: 'philosophe + Compagnie des Indes shareholder + anti-semitic lexicon author',
  description: {
    cn: '他是巴黎一个公证员的儿子，六岁丧母，被送进 Jesuit 最好的学校，学了一整套把对方逼到无路可退的修辞。这一遍让你跟他走到 23 岁，几首讽刺诗换来一张没有罪名的国王密令、一段巴士底狱，看一个用敌人的工具打敌人的人，怎么决定要不要挤进自己一辈子讽刺的那个圈子。',
    en: 'He is the son of a Paris notary, mother dead at six, sent to the best Jesuit school in the city where he picked up rhetoric that leaves an opponent no room to retreat. This pass walks with him to 23, when a few satirical verses earn him a royal sealed letter and a year in the Bastille, watching a man who uses his enemies\' tools decide whether he wants to climb into the circle he has spent his life mocking.',
  },
  storyboard: [
  {
    nodeId: 'voltaire-N1',
    year: 1694,
    location: 'Paris, France',
    titleCn: '公证人之子，夹缝里长大',
    titleEn: 'The Notary\'s Son, Born Between Worlds',
    bodyCn: `我叫 François-Marie Arouet。1694 年 11 月 21 日，巴黎。

父亲是公证员——不是贵族，但也不是普通工人。他处理有钱人的文件，拿工资，送孩子上好学校。六岁那年，母亲死了。我不太记得她，只记得那之后家里安静了很多。

父亲要我学法律。法律有饭吃，法律稳当。我知道他的意思——我们这种家庭，出路在制度里，不在外面。

但我在制度的外面。

这才是问题所在。巴黎的上层社会有一条看不见的线：贵族在线的那边，工人和商人在线的这边，我们公证员家庭在线的边缘——靠近了，但没进去。我的父亲一辈子为贵族写文书，我一辈子可以继续写。或者，我可以做别的事。

我六岁失去母亲，我不知道这件事有多深地刻进我的性格里。我只知道，从那以后我开始习惯一件事：我不依赖任何东西的继续存在。权贵今天在，明天可以不在。身份今天稳，明天可以塌。在这种不稳里，语言是唯一真正属于我的工具——它在脑子里，没有人可以拿走。

这个认知对我后来的人生至关重要。我一生攻击贵族特权，同时费尽心思想挤进贵族圈；我批判「出身决定命运」，同时用笔为自己建造一个新的出身。

六岁的我当然不知道这些。我只是一个没有母亲的孩子，站在巴黎某条石头街道上，感觉这座城市太大，而我在它里面太小。`,
    bodyEn: `My name was François-Marie Arouet. November 21, 1694, Paris.

My father was a notary — not a noble, but not an ordinary laborer either. He handled documents for wealthy people, drew a salary, and sent his children to good schools. When I was six, my mother died. I don't remember her clearly, only that the house became very quiet after.

My father wanted me to study law. Law meant steady work, law meant belonging to a system. I understood what he meant — for families like ours, security lay inside the structure, not outside it.

But I was outside the structure. That was the problem.

Paris's upper world had an invisible line. Nobles stood on one side; workers and merchants on the other; notary families like mine stood at the edge, close but not across. My father spent his life writing documents for nobles. I could spend mine doing the same — or I could do something else.

I lost my mother at six. I don't know how deeply that cut into my character. I only know that after it I grew accustomed to one thing: I stopped relying on anything to keep existing. A patron could be there today and gone tomorrow. A social position could be solid this year and collapsed the next. In that instability, language was the only tool that was truly mine — it lived in my head, and no one could take it away.

That understanding would matter enormously for the rest of my life. I would spend decades attacking aristocratic privilege while simultaneously clawing my way into aristocratic circles. I would argue that birth should not determine fate while using my pen to build myself a new kind of birth.

Six-year-old me knew none of this. I was just a child without a mother, standing on a stone street in Paris, feeling that the city was very large and I was very small inside it.`,
    themeCn: '出身的裂缝决定一生的焦虑，也决定一生的驱动力',
    themeEn: 'The crack in one\'s origins shapes a lifetime of anxiety — and ambition',
    expectsRealAnswer: false,
    sourcingNote: 'Davidson 2010 p.9: Arouet 出身背景; 母亲死亡 1701 年确认',
  },

  {
    nodeId: 'voltaire-N2',
    year: 1708,
    location: 'Collège Louis-le-Grand, Paris',
    titleCn: '耶稣会给了我武器，我用来打耶稣会',
    titleEn: 'The Jesuits Gave Me My Weapons',
    bodyCn: `耶稣会的学校是当时巴黎最好的学校。父亲把我送进去，1704 年，我十岁。

课程是系统的：拉丁文，修辞学，希腊文选读，辩论，话剧。每一样都有用，每一样都在塑造一种特定的思考方式——把论点组织成武器的能力，把话说得让对方没有退路的能力。

约 1708 年，学校有一场话剧演出，我扮演一个罗马人。我不记得角色的名字了，只记得站在台上那一刻，我注意到台下的人是怎么屏住呼吸的。不是因为我演得多好——我十四岁，我不是天才演员。而是因为话语本身在那个空间里产生了某种力量，而我是那个力量的出口。

那一刻我记了很久。

七年后，我出了这所学校，开始用学校给我的修辞学工具写讽刺诗，讽刺的对象里就有耶稣会本身——他们把我培养成了能拆解他们权威的人。

这不是忘恩负义。这是一个比忘恩负义更有意思的事实：你的批判工具，往往来自你的批判对象。耶稣会教会我如何组织论证，如何在对方话语里找漏洞，如何用最少的字产生最大的冲击力。这套工具后来进了我的《哲学书简》，进了我的《哲学辞典》，进了我给腓特烈大帝和凯瑟琳大帝的信。

我是他们的学生。我是他们最顽固的对手。两件事同时为真，而且有直接的因果关系。

我对某些耶稣会老师保持了终身的个人敬意，尽管我恨这个机构。我愿意承认这一点。恨一个机构和感谢塑造你的人，可以是同一时刻的两种情感。`,
    bodyEn: `The Jesuit school was the finest in Paris. My father enrolled me in 1704, when I was ten.

The curriculum was systematic: Latin, rhetoric, Greek, debate, theatre. Every element was useful, every element was shaping a particular mode of thought — the ability to assemble arguments into weapons, the ability to speak so precisely that the other person has no room to retreat.

Around 1708 there was a theatrical performance at the school. I played a Roman. I can't remember the character's name, only what I noticed standing on the stage — how the audience in the hall held its breath. Not because I was a gifted actor; I was fourteen, and I was not. But because language, in that space, was generating a kind of force, and I was its outlet.

I kept that moment for a long time.

Seven years after entering the school I left it, and began using the school's rhetorical tools to write satirical poems — including satires of the Jesuits themselves. They had trained someone capable of dismantling their own authority.

This is not ingratitude. It is a more interesting fact than ingratitude: your tools for critique often come from the thing you are critiquing. The Jesuits taught me how to organize an argument, how to find gaps in an opponent's words, how to achieve maximum impact with minimum text. Those tools would later appear in my Lettres philosophiques, in my Dictionnaire philosophique, in my letters to Frederick the Great and Catherine of Russia.

I was their student. I was their most persistent adversary. Both things were simultaneously true, and they were causally connected.

I maintained lifelong personal respect for certain individual Jesuit teachers, despite hating the institution. I can affirm this. Hating an institution and being grateful to the people who shaped you can coexist in the same moment.`,
    themeCn: '你的武器来自你的敌人，这不是矛盾，是历史的常规运转',
    themeEn: 'Your weapons come from your enemy — this is not contradiction, it is how history normally operates',
    expectsRealAnswer: false,
    sourcingNote: 'Davidson 2010 p.9-15: Collège Louis-le-Grand 1704-1711; 耶稣会课程细节',
  },

  {
    nodeId: 'voltaire-N3',
    year: 1717,
    location: 'Bastille, Paris',
    titleCn: '巴士底狱：他们拿走了我的自由，忘拿走笔',
    titleEn: 'The Bastille: They Took My Freedom, Forgot My Pen',
    bodyCn: `1717 年 5 月，一张没有罪名、没有审判、没有陪审团的纸送到我面前。国王密令——lettre de cachet。我被关进巴士底狱。

理由？我写了几首诗，嘲讽摄政王奥尔良公爵的私生活谣言。诗在沙龙里传开，传到了错误的人手里。

巴士底狱是一座中世纪要塞——厚墙，高塔，石头地面。关我进去的人大概以为这会让我停下来。

第一天，我要了纸和笔。狱方给了。巴士底狱不是折磨人的地方，而是「存放让权贵不舒服的人」的地方，日子不算难过，就是不能出门。我在里面待了 11 个月，写完了第一部悲剧《俄狄浦斯》(Œdipe)。1718 年出狱，这部戏在法兰西喜剧院连演 45 场，巴黎轰动。

国王把我关进来，却忘了一件事：笔在我手里，不在他手里。墙里面发生的事他没法查禁。等我带着稿子走出来，他的命令已经晚了。

这是旧制度审查机制的根本困境——lettre de cachet 关得住一个人的身体，关不住他已经写好的、和出狱后继续写的东西。1455 年之后印刷机让书传播的速度永远快过查禁（§1 的那层地基）——而我，只是把脑子当成印刷机先运转一步。

我在狱里还做了一件事：改名字。Arouet 是公证员家庭的姓，是被人打了还不能要求决斗权的平民的姓。我开始用 Voltaire 这个笔名，听起来像贵族领地。切割，是一种开始。`,
    bodyEn: `In May 1717, a piece of paper arrived before me with no charges, no trial, no jury. A royal sealed letter — lettre de cachet. I was sent to the Bastille.

The reason: I had written poems mocking Regent Philippe d'Orléans, satirizing rumors about his private life circulating in Paris salons. The poems spread through the wrong hands.

The Bastille was a medieval fortress — thick walls, high towers, stone floors. The people who put me there probably expected it to stop me.

On the first day I asked for paper and a pen.

They gave them to me. The Bastille was not a torture facility; it was a place to store people who made powerful individuals uncomfortable. Life inside was manageable — you simply could not leave. I spent 11 months there.

I used those 11 months to finish my first tragedy, Œdipe (Oedipus). On my release in 1718, the play ran 45 performances at the Comédie-Française. Paris was delighted.

The King had locked me inside, but he forgot one thing: the pen was in my hands, not his. The writing happened inside the walls. What happened inside the walls, he could not ban. By the time I walked out with a finished manuscript, his orders were already behind the curve.

This was the fundamental problem with the old regime's censorship: a lettre de cachet could imprison a person's body, but not what they had already written — and even less, what they would write once free. After 1455 the printing press made books spread faster than bans could follow. I had simply used my brain as the printing press and run it one step ahead.

I also began using the pen name Voltaire. The name Arouet belonged to a notary's family — a commoner's name, from someone who could be beaten in the street and not allowed to demand satisfaction in a duel. The new name sounded like a noble estate. A cut from the past. A beginning.`,
    themeCn: '审查从来赢不了先流通的书，赢不了已经写完的字',
    themeEn: 'Censorship never wins against a book already in circulation — or words already written',
    expectsRealAnswer: false,
    sourcingNote: 'Davidson 2010 p.24-26: Bastille 1717-1718; Œdipe 45 场演出; Voltaire 改名动机',
  },

  {
    nodeId: 'voltaire-N4',
    year: 1726,
    location: 'Paris — theatre entrance, then Bastille',
    titleCn: '决斗权：我用我批判的制度要求公平',
    titleEn: 'The Duel Demand: Using the System I Attacked',
    bodyCn: `1726 年初，在巴黎一处剧院门口，我和 Chevalier de Rohan-Chabot 发生了争执。

起因是他嘲讽我的出身。Rohan 是古老贵族世家，他说话的方式让我明白：不管我写了多少部戏，在他眼里我还是那个公证员的儿子，不在他这个等级里。我还了口——我这辈子没办法对这种话不还口。

几天后，Rohan 派了一群仆人在街上截住我，把我打了一顿。

然后我做了一件事，这件事至今让我想起来有点复杂的感觉：我要求决斗。

决斗是贵族的权利。在法国旧制度里，只有贵族可以要求决斗，平民没有这个资格——这个权利本身就是等级制度的一部分，是把人分成不同等级的那套系统的产物。

而我，一个终其一生批判贵族世袭特权的人，1726 年的第一反应是要求进入这个我批判的特权里面。

我不是在要求废除等级制度。我是在要求被纳入上层等级。

要 careful framing：这不是简单的伪善。伪善要求自知其矛盾而继续。我的情况更复杂——我真的相信贵族制度是荒谬的，我也真的在那一刻感到愤怒，感到被羞辱，感到我有权利得到的对等回应被这个制度剥夺了。两件事同时为真。

我的决斗请求被拒绝。贵族与平民之间没有决斗权。我第二次被关进巴士底狱。这一次我主动申请：与其在这里蹲着，不如流放英国。

申请被批准了。

我去了英国。那是另一个故事。`,
    bodyEn: `In early 1726, at the entrance to a Paris theatre, I got into a confrontation with the Chevalier de Rohan-Chabot.

The cause: he mocked my origins. Rohan came from ancient noble lineage, and the way he spoke made plain that regardless of how many plays I had written, in his eyes I remained a notary's son — not of his rank. I answered back sharply. I have never been able to let that kind of remark pass.

A few days later, Rohan sent a group of servants to ambush me in the street and beat me.

Then I did something that even today strikes me as complicated: I demanded a duel.

Dueling was an aristocratic right. In the French Ancien Régime, only nobles could demand satisfaction through a duel — commoners were not eligible. That right was itself a product of the class system: part of the very apparatus that sorted human beings into different ranks.

And I — a man who had spent his life attacking inherited aristocratic privilege — responded in 1726 by demanding admission to exactly the privilege I attacked.

I was not asking to abolish the class system. I was asking to be let inside the upper class.

A careful framing matters here: this is not simple hypocrisy. Hypocrisy requires knowing your contradiction and continuing anyway. My situation was more complicated — I genuinely believed aristocratic hereditary privilege was absurd, and I also genuinely felt in that moment a rage, a sense of humiliation, and a conviction that the equal response I was owed had been taken from me by the system. Both things were true simultaneously.

My duel request was refused. There was no right to duel between a noble and a commoner. I was sent back to the Bastille for the second time. This time I asked to be exiled to England instead of imprisoned.

Permission granted.

I went to England. That is another story.`,
    themeCn: '你批判的体制，是你用来要求公平的工具——这是结构性矛盾，不是个人失败',
    themeEn: 'The system you attack is the system you use to demand fairness — structural contradiction, not personal failure',
    expectsRealAnswer: false,
    sourcingNote: 'Davidson 2010 p.56: Rohan 事件；决斗权作为贵族特权的历史背景',
  },

  {
    nodeId: 'voltaire-N5',
    year: 1727,
    location: 'London and Twickenham, England',
    titleCn: '英国：我看见了我想看见的',
    titleEn: 'England: I Saw What I Wanted to See',
    bodyCn: `1726 年 5 月，我到达英国。

之后三年是我人生里最有生产力的时间之一——我学了一口流利英语，读 Newton，见 Jonathan Swift，见 Alexander Pope，进入英国知识界的核心圈子。

我在英国「发现」三件让我震惊的事：宗教宽容（多个新教派别合法并存），议会制度（国王受法律约束，1689 年《权利法案》），Newton 科学被社会全面接受（法国大学里还在教 Descartes 的涡旋宇宙论）。

这三件事我后来写进《哲学书简》，用英国当镜子照法国——「你们看，英国可以这样，我们为什么不能？」

但有一件事我需要承认。

我在英国走路时，脑子里装的是议会、Newton、宗教宽容。我走过 Westminster 附近，想的是「议会比国王更理性」。

我没想的是：英国是当时世界上最大的奴隶贸易国家，圈地运动把几十万农民赶离土地，爱尔兰天主教徒在英国体制下受到系统性歧视。我的英国书信里，这些事一个字也没有。

philosophes 的「英国」和「荷兰」是示范模型，不是田野调查报告。我们用这些国家当攻击欧洲大陆政治的镜子——不是在如实报道那里的现实。

我用英国攻击法国。我报道的是我的论证，不是英国本身。

思想家的盲点，是他不去看的那一面。而他之所以不看，往往是因为他需要那面镜子保持完好。`,
    bodyEn: `In May 1726 I arrived in England.

The three years that followed were among the most productive of my life — I learned fluent English, read Newton, met Jonathan Swift, met Alexander Pope, and moved inside the center of the English intellectual world.

In England I "discovered" three things that astonished me: religious toleration (multiple Protestant denominations coexisting legally), parliamentary monarchy (the king under law, as the 1689 Bill of Rights established), and Newtonian science accepted across the whole society (while French universities still taught Descartes's vortex cosmology).

I put all three into my Lettres philosophiques, using England as a mirror to illuminate France — "Look, England manages it this way — why can't we?"

But there is something I should acknowledge.

When I walked the streets of England, my mind was full of Parliament, Newton, and religious toleration. I walked near Westminster, looked at those buildings, and thought: "A parliament is more rational than a king."

What I was not thinking: England was at that time the world's largest slave-trading nation. I was not thinking about the enclosure movement displacing hundreds of thousands of rural poor, or the systematic oppression of Irish Catholics under the English system. In all my English letters, not a single word about any of this.

The philosophes' "England" and "Holland" were rhetorical demonstration models, not field reports. We used those countries as mirrors for attacking Continental politics — not as honest surveys of those places.

I used England to attack France. What I reported was my argument, not England.

A thinker's blind spot is the side he does not look at. And he does not look, often, because he needs that particular mirror to remain undamaged.`,
    themeCn: '思想家的盲点，就是他不看的那一面——往往是他最需要不看的那一面',
    themeEn: 'A thinker\'s blind spot is the side he does not look at — often the side he most needs not to see',
    expectsRealAnswer: false,
    sourcingNote: 'Robertson 2005: philosophes 的英国是「示范模型」; Davidson 2010 p.56-58: 英国行程细节',
  },

  {
    nodeId: 'voltaire-N6',
    year: 1734,
    location: 'Paris — then flight to Cirey',
    titleCn: '书先流通，命令再来，命令追不上',
    titleEn: 'The Book Came First, the Ban Came Second, the Ban Lost',
    bodyCn: `1734 年，《哲学书简》（Lettres philosophiques）在法国出版——我已先在英国发行过英文版。

书里有几章讲 Quakers，讲 Newton 和 Locke，讲英国宗教宽容，最后一章攻击 Pascal 的悲观人性论。每一章都在做同一件事：把英国摆在那里，让法国人自己看出差距。

巴黎当局的判决：「对宗教和政治有危险倾向」，命令全部销毁。

但书已经在书架上了。

这是 1455 年 Gutenberg 印刷机建立的新规则——审查的速度永远追不上传播。等教会拿到样本、开会决议、通知各地书商，书已经在五个城市的私人藏书里了。这和 Luther 1517 年把九十五条钉在教堂门上是同一场游戏，只是快了三百年：等查禁令到时，书已在读者手里。

同一个结构，不同的时代速度。

我从巴黎逃出来，去找 Émilie du Châtelet。她把香槟省 Cirey-sur-Blaise 的庄园给我住，我就这样开始了在 Cirey 的十五年。

命令还在追，书已经开始改变人的想法。一本书真正的危险不是它写了什么新事实——英国议会、Newton、Locke，法国知识界都知道。危险的是它给了人一个**比较的框架**：别的地方可以不同，那我们为什么不能？

一旦这个问题在人脑子里转起来，现有秩序的合法性就开始松动。`,
    bodyEn: `In 1734, the Lettres philosophiques was published in France — I had already released an English version earlier.

The book contained chapters on Quakers, on Newton and Locke, on English religious toleration, and a final chapter attacking Pascal's pessimistic view of human nature. Every chapter did the same thing: placing England in front of French readers and letting them draw the comparison.

The Paris authorities' verdict: "dangerous tendencies against religion and the state." Ordered destroyed.

But the book was already on shelves.

This was the new rule established by Gutenberg's printing press in 1455 — the speed of censorship can never match the speed of distribution. By the time Church officials obtained a copy, convened hearings, issued orders to bookshops across the city, the book was already sitting in private collections in five cities. The same game Luther played in 1517 when he nailed his ninety-five theses to a church door — except 300 years faster. Luther used the press to spread his document across Germany within weeks; I scattered books across city shelves, and by the time the ban arrived, readers already had their copies.

Same structure, different speed across centuries.

I fled Paris and went to find Émilie du Châtelet. She offered me her estate at Cirey-sur-Blaise in Champagne. That was how my next fifteen years at Cirey began.

The orders were still chasing, and the book was already changing how people thought. A book's real danger is not the new facts it contains — educated French people already knew about the English Parliament, Newton, and Locke. The danger was that it gave people a **comparison frame**: it can be different elsewhere, so why not here?

Once that question starts turning in someone's mind, the legitimacy of the existing order begins to crack.`,
    themeCn: '一本书的危险不是新事实，而是它给了人比较的框架',
    themeEn: 'A book\'s danger is not new facts — it is the comparison frame it hands the reader',
    crossTopicHook: 'Luther 1517 年把九十五条钉在教堂门上，Voltaire 1734 年把书散在五座城市的书架上——同一场游戏，快了三百年。(cross-Topic: Reformation)',
    expectsRealAnswer: false,
    sourcingNote: 'Robertson 2005; §1 Gutenberg 印刷机竞赛框架; Davidson 2010 p.24-26',
  },

  {
    nodeId: 'voltaire-N7',
    year: 1738,
    location: 'Cirey-sur-Blaise, Champagne',
    titleCn: '她教我 Newton，书上印了我的名字',
    titleEn: 'She Taught Me Newton. My Name Went on the Cover.',
    bodyCn: `Émilie du Châtelet 不是我的助手。

我需要先说清楚，因为 18 世纪的书信和沙龙里，她主要以「Voltaire 的朋友」出现。这不是完整的事实。

她是 Marquise du Châtelet，贵族出身，从小受了那个时代对女性极不寻常的数学和科学教育。她读拉丁文、意大利文、英文，跟当时最好的数学家来往。她把 Newton 的《自然哲学的数学原理》（Principia）翻译成法文并加上自己的力学分析——这个译本今天仍是标准法文版本。

而我呢？1738 年，我出版了《牛顿哲学原理》——18 世纪最成功的 Newton 科普书之一。

但我需要承认：我在英国读《Principia》，能读懂的主要是通俗表述的部分，处理不了数学核心——那些拉丁文微积分几何证明。是 Émilie 把真正的 Newton 力学教给我的，她纠正我的误解，供给物理学基础。我在前言里感谢了她——但前言之外，是我的名字在封面上，我的声誉从这本书里增长。

她的名字在哪里？在前言里。

这是一个结构性模式：女性的知识劳动，无论翻译、教导、计算，都被降格为「帮助」，记在男性名下，或干脆不被记录。Émilie 是典型一例。

那天我拿到样书时，有没有想到这件事不公平？历史没有记录我那一刻的想法。我只知道：我没做什么来改变它。`,
    bodyEn: `Émilie du Châtelet was not my assistant.

I need to say that plainly, because in 18th-century letters and salon accounts she appears mostly as "Voltaire's companion" — and that is not the complete picture.

She was the Marquise du Châtelet, noble-born, and from childhood she received a scientific and mathematical education extraordinary for a woman of any era. She read Latin, Italian, and English, corresponded with the finest mathematicians of the day, and wrote the Institutions de physique (1740). More significantly, she produced a full French translation and commentary of Newton's Principia Mathematica, including her own mathematical analyses — a translation that remains the standard French edition to this day.

And what did I do?

In 1738, I published Éléments de la philosophie de Newton — one of the most successful Newton popularizations of the 18th century.

But I should be honest: when I read the Principia in England, I could follow Newton's accessible narrative portions, but not the mathematical core — the geometrical proofs in Latin calculus notation. It was Émilie who taught me the actual physics. She corrected my misunderstandings; she supplied the foundations. I thanked her in the preface — but outside the preface, my name was on the cover, and my reputation grew from the book.

Where was her name? In the preface.

This is a structural pattern: women's intellectual labor — translation, teaching, calculation — was consistently demoted to "assistance," credited to men or simply not credited at all. Émilie du Châtelet was a typical case.

When I held the finished book that day, did I think about whether this was unfair? History contains no record of what I thought in that moment. I only know that I did not do anything to change it.`,
    themeCn: '知识劳动的归因，是权力格局的镜子',
    themeEn: 'How we attribute intellectual labor mirrors the power structure we live inside',
    crossTopicHook: 'Maria Winkelmann Kirch（彗星发现被丈夫署名）→ Émilie du Châtelet（Newton 翻译贡献在封面消失）——同一结构性模式，跨越一个世纪。(cross-Topic: SciRev)',
    expectsRealAnswer: false,
    sourcingNote: 'Schiebinger 1989; Davidson 2010 §5; Émilie du Châtelet Principia 法译本今仍为标准版本',
  },

  {
    nodeId: 'voltaire-N8',
    year: 1740,
    location: 'Cirey and Paris financial networks',
    titleCn: '我的钱在殖民地贸易里运转',
    titleEn: 'My Money Ran Inside the Colonial Machine',
    bodyCn: `我不靠稿费生活。18 世纪的作家版税养不活一个想要庄园和自由的人。我的财富来自三处：彩票套利（我发现某些国家彩票的数学漏洞）、向法国贵族放短期高利贷、公司股份。

其中最重要的是 Compagnie des Indes——法国东印度公司——的股份。记录显示我在 1720 到 1750 年代持有它的股份。我死时遗产折合约 200 万法郎，在 18 世纪作家里是异常巨额的数字。

它做印度纺织品、中国茶叶、向加勒比种植园运物资，还通过利润分成合同与西非奴隶贸易中间商关联。这是一台殖民地贸易机器，利润从整个帝国体系流来，而这个体系的底层是种植园劳动力，种植园劳动力的底层是大西洋奴隶贸易。

这里要谨慎：Voltaire 持股是有记录的事实。但他是否清楚股份里多大比例的利润直接来自奴贸，没有直接证据。Cronk 2009 留了余地：他知道自己投资的是殖民地贸易公司，但是否追踪过每项业务的具体关联，无从确认。

我不是奴隶船的日常经营者，但我是殖民地经济的受益者。（补充：Giovannetti-Singh 2022 指出，我曾在 1752 年出资一次贩奴航程，所以「从不直接沾手」不能成立。）

知情（哪怕不完整）和受益可以同时成立。我没有追踪每笔红利的来源，这让我的良知保持安静。但钱在那里运转，不管良知安不安静。`,
    bodyEn: `I did not live off royalties.

A writer's fees in the 18th century could not sustain someone who wanted estates and freedom. My wealth came from three sources: lottery exploitation (I identified flaws in certain state lotteries and organized syndicates to arbitrage them), short-term high-interest loans to French nobles, and company shares.

The most important of those shares: Compagnie des Indes — the French East India Company.

Financial records show I held its shares across the 1720s–1750s, a significant part of my portfolio. I died worth roughly 2 million livres tournois — an extraordinary figure for an 18th-century writer.

What was the Compagnie des Indes? Its operations included Indian textile trade, Chinese tea trade, Caribbean plantation supply chains, and profit-sharing arrangements with West African slave trade intermediaries. It was a colonial trade machine whose profits flowed from the entire imperial system — and the foundation of that system was plantation labor, and the foundation of plantation labor was the Atlantic slave trade.

A careful framing is needed: that Voltaire held Compagnie des Indes shares is documented fact. Whether he knew exactly what percentage of his dividends flowed directly from slave-trade revenues — Cronk 2009 hedges: Voltaire knew he was investing in a colonial trade company, but whether he traced each business line to its labor source is not documented.

My wealth came from companies whose profits came from colonial trade — I was not a day-to-day slave ship operator, but I was a beneficiary of the colonial economy. (One correction: more recent research, Giovannetti-Singh 2022, shows I directly financed a slave-trading voyage in 1752 — so any absolute claim that I "never touched it directly" does not hold.)

Knowing — even incompletely — and benefiting can coexist.

I did not track where each dividend came from. That allowed my conscience to stay quiet. But the money ran inside that machine regardless of how quiet my conscience was.`,
    themeCn: '你不看的钱，跟你看见的钱一样真实，一样在运转',
    themeEn: 'The money you don\'t look at runs just as real as the money you acknowledge',
    expectsRealAnswer: false,
    sourcingNote: 'Cronk 2009 p.20: Compagnie des Indes 持股 1720s-1750s; Dubois 2004: 标准历史学家表述',
  },

  {
    nodeId: 'voltaire-N9',
    year: 1759,
    location: 'Ferney, writing Candide',
    titleCn: '《Candide》：他看见了，感动了，继续走了',
    titleEn: 'Candide: He Saw It, Was Moved, Kept Walking',
    bodyCn: `1755 年 11 月 1 日，里斯本大地震。死亡人数在一万七千到五万之间（当时统计极不可靠）。那天是天主节，许多人死在教堂做弥撒时。

这场灾难引发大辩论：Leibniz 说上帝创造了「所有可能世界中最好的那个」——如果最好的世界里有五万人在教堂被压死，这论点还成立吗？

我的回答是 1759 年的《Candide》。主角被老师 Pangloss 教导「一切皆是最好的安排」，却经历战争、宗教裁判所、里斯本大地震，末尾满目疮痍，得出结论：「我们必须耕种花园。」

第 19 章，苏里南。Candide 遇到一个躺在地上的黑人，少了左腿和右手。黑人解释：糖厂里机器轧掉手指，监工就砍整只手；逃跑则砍腿。「这就是欧洲人吃糖的代价。」

然后 Candide 继续走了。我写了这两段，读者震惊了，书继续卖了。

Cronk 2009（p.20）注明：我的持股高峰在 1720 到 1750 年代，这段却写于 1759 年——高峰已过去，期间我没有公开文字批评奴贸。（谨慎：Giovannetti-Singh 2022 认为我终身持股，「写时已清盘」不能下死结论。）

这是偶然还是有意回避，Cronk 2009 写「证据不足以确认」。

我只知道：「记录」和「停下来」是两件事。Candide 感动了一下，又继续找花园。我也是。`,
    bodyEn: `November 1, 1755 — the Lisbon earthquake. Death toll estimates range from 17,000 to over 50,000 (contemporary records were wildly unreliable). It was All Saints' Day; many deaths occurred among people attending Mass in churches.

The disaster triggered a philosophical argument across European intellectual circles. Leibniz had argued that God created "the best of all possible worlds" — if the best possible world contains fifty thousand people crushed in churches, could that argument still hold?

My answer was Candide (1759).

The protagonist Candide is taught by his tutor Pangloss that "all is for the best," then proceeds to survive war, the Inquisition, the Lisbon earthquake, and multiple shipwrecks, arriving at the novel's end battered and concluding: "We must cultivate our garden."

Chapter 19, Surinam. Candide encounters a Black man on the ground, missing his left leg and right hand. The man explains: in the sugar mills, when the grinding machine takes a finger, the overseer cuts the hand; when someone tries to escape, they cut the leg. "This is the price Europeans pay for their sugar."

Then Candide keeps walking.

I wrote those two paragraphs. Readers saw them and were shaken. The book kept selling.

There is a timeline that Cronk 2009 (p.20) notes: my shareholding was concentrated in the 1720s–1750s, while the Surinam passage was written in 1759 — after my peak shareholding years had passed. During those peak years I wrote no public words directly criticizing the slave trade; my most direct depiction of slavery appeared after the height of my major shareholding. (Careful framing: more recent research, Giovannetti-Singh 2022, argues I in fact held shares for life, so the claim that the holding "had been liquidated by the time I wrote Candide" cannot be stated as settled — historians read the timing differently.)

Historians cannot confirm whether this is coincidental timing or deliberate avoidance. Cronk 2009 explicitly writes: "evidence insufficient to confirm."

I cannot confirm it either. I only know: "recording" and "stopping" are two different things. Candide stopped and felt the weight of it, then continued toward his garden. I wrote those two paragraphs, then continued with everything else.`,
    themeCn: '「记录」和「停下来」是两件不同的事',
    themeEn: '"Recording" and "stopping" are two different things',
    expectsRealAnswer: false,
    sourcingNote: 'Cronk 2009 p.20: 持股时间线与《Candide》写作时间差; Dubois 2004: 第 19 章苏里南',
  },

  {
    nodeId: 'voltaire-N10',
    year: 1762,
    location: 'Ferney estate, French-Swiss border',
    titleCn: 'Calas 案：文字是武器，但射程有边界',
    titleEn: 'The Calas Affair: Words as Weapons, With Limits',
    bodyCn: `1762 年，我 67 岁，在 Ferney 庄园。

Ferney 在法瑞边境，我选这里是经过计算的——法国当局来，我几分钟可越境到瑞士；日内瓦当局来，我可往法国退。两个主权之间，永久的逃跑选项。

那年我读到图卢兹的判决：Jean Calas，一个 Protestant 布料商人，被指控杀了想改信天主教的儿子。没有物证，天主教法庭还是判了车裂（roue）：先断四肢，再勒死，再烧尸。

我花了三个月核实，结论是 Calas 无辜，法庭用宗教仇恨替代了司法。然后我发动横跨欧洲的舆论战：给腓特烈大帝、凯瑟琳大帝写信，写了《关于宽容的论文》（Traité sur la tolérance, 1763）。

1765 年，Calas 被正式平反——三年后。他已经死了，平反的是他的名字。

这是我人生里最好的一面，是欧洲近代史上最早的「媒体舆论翻案」之一——不是律师翻案，而是知识界用出版物迫使王权重审。我的笔，打赢了图卢兹的车轮。

但这一年，Saint-Domingue 的种植园里，Toussaint Louverture 大约 20 岁，在甘蔗田劳动。他不知道 Calas 的名字。平反的消息不会到达那里。

我的正义射程，止于欧洲。

文字是武器，但有射程，射程有边界。边界外面，我的笔到不了，声音听不见，书也不在那里。`,
    bodyEn: `It was 1762. I was 67 years old, at the Ferney estate.

Ferney sits on the French-Swiss border — I chose it with calculation. If French authorities came, I could walk into Switzerland within minutes; if Geneva moved against me, I could retreat into France. Between two sovereignties, I had permanently insured myself an escape.

That year I read the verdict from Toulouse: Jean Calas, a Protestant cloth merchant, convicted of murdering his own son — allegedly to prevent the son's conversion to Catholicism. No physical evidence. A Catholic court sentenced him to the wheel (roue): limbs broken on a rack, then strangling, then burning of the corpse.

I spent three months verifying sources. My conclusion: Jean Calas was innocent; the court had substituted religious hatred for legal procedure.

I launched a pan-European press campaign: letters to Frederick the Great of Prussia, Catherine the Great of Russia, and English intellectual circles; the full Traité sur la tolérance (Treatise on Tolerance, 1763).

In 1765, Jean Calas was officially exonerated — three years later. He was already dead. What was cleared was his name.

This is the best of what I was. This was one of Europe's earliest "media-driven legal reversals" — not lawyers winning a retrial, but the intellectual press creating enough pressure on royal power to force one. My pen, in that instance, defeated a breaking wheel in Toulouse.

But that same year, on a plantation in Saint-Domingue, Toussaint Louverture was roughly twenty years old, working in the sugarcane. He did not know Jean Calas's name. News of Calas's exoneration would not reach the fields of Saint-Domingue.

My range for justice ended at Europe.

Words are weapons. But weapons have range, and range has a boundary. Beyond that boundary, my pen could not reach, my voice could not be heard, my books had not been placed.`,
    themeCn: '文字是武器，但武器的射程是有边界的',
    themeEn: 'Words are weapons — but every weapon has a range, and a boundary beyond its range',
    crossLensHook: 'Toussaint Louverture（Lens 3）约 1762 年 20 岁，在 Saint-Domingue 种植园里——Voltaire 的正义射程止于欧洲，Calas 平反的消息到不了那里。',
    expectsRealAnswer: false,
    sourcingNote: 'Bien 1960: Calas 案作为早期媒体舆论翻案; Davidson 2010 §8: Ferney 时期',
  },

  {
    nodeId: 'voltaire-N11',
    year: 1764,
    location: 'Ferney, writing the Dictionnaire philosophique',
    titleCn: '「理性批判」里装了偏见的子弹',
    titleEn: 'Rational Critique Loaded with Prejudice',
    bodyCn: `1764 年，《哲学辞典》（Dictionnaire philosophique）出版。按字母排列，条目短而尖锐，是我把「理性批判」用得最系统的作品。

我攻击天主教迷信、宗教不宽容、专制王权的暴行——「Écrasez l'infâme！」（消灭那个臭名昭著者！）是我写在无数封信末尾的口号。我理解里的「infâme」，是宗教迷信+不宽容+专制法庭叠在一起。

这部辞典里有一条「Juifs」（犹太人）条目。

我写的内容混合了宗教批判和文化刻板印象：嘲讽犹太教起源，贬称犹太人的商业行为，傲慢评价犹太文化。我的框架是「理性批判一切宗教」——攻击基督教，也攻击犹太教。

但这个条目，是「按种族而非信仰来反犹」的早期模板。

传统的宗教反犹说：「犹太人杀了基督。」这是神学立场，可以在神学层面反驳。

启蒙式的「理性」反犹说：「犹太人的文化和思维方式是落后的。」这个说法戴着「理性分析」的面具，更难反驳，因为它看起来不像偏见，像结论。

这个分析让我不舒服，因为它是对的。我那天写「Juifs」条目时，相信自己在做理性批判，没意识到我在建一栋后来会伤害人的大楼，不知道它一百多年后会是什么样。但不知道，不等于没有建。

最危险的偏见，往往穿着理性的衣服，连写它的人自己都不一定能识别。这才是最大的危险：它不需要恶意，只需要盲点。`,
    bodyEn: `In 1764, the Dictionnaire philosophique was published. Alphabetical, entries short and sharp — it was my most systematic deployment of "rational critique."

I attacked Catholic superstition, religious intolerance, and the brutality of despotic courts. "Écrasez l'infâme!" — "Crush the infamous thing!" — was the phrase I wrote at the end of countless letters. My l'infâme was a three-part target: religious superstition, intolerance, and courts that executed people on religious charges without evidence.

This dictionary contains an entry: "Juifs" (Jews).

What I wrote mixed religious critique with cultural stereotyping: mockery of Jewish religious origins, derogatory characterization of Jewish commercial behavior, condescension toward Jewish culture. My framework: "rational criticism of all religions" — I attacked Christianity, I attacked Judaism.

But that entry was an early template for antisemitism based on ethnicity rather than faith.

Traditional religious antisemitism said: "Jews killed Christ." That is a theological position, and it can be challenged on theological grounds.

Enlightenment-inflected "rational" antisemitism said: "Jewish culture and modes of thought are backward." That claim wears the mask of rational analysis, which makes it harder to challenge — because it does not look like prejudice. It looks like a conclusion.

This analysis makes me uncomfortable, because it is correct. When I wrote the "Juifs" entry that day, I believed I was engaging in rational criticism. I did not recognize that I was constructing a building that would later be used to harm people. I did not know what that building would look like a hundred years later.

But not knowing is not the same as not building.

The most dangerous prejudice often wears the clothing of reason. Prejudice dressed as rational analysis is something even its author may not recognize as prejudice. That is the deepest danger: it requires no malice — it only requires a blind spot.`,
    themeCn: '最危险的偏见穿着理性的衣服，连写它的人都不一定认得出来',
    themeEn: 'The most dangerous prejudice wears the clothing of reason — even its author may not recognize it',
    engagementHook: '我写「Juifs」条目时，真的相信自己在做理性批判，没想到它会成为后来伤害人的模板。先只看这一件事：一个人该不该为「自己当时没意识到、也无法预见」的盲点负责？有两种读法。一种说：该负责，他亲手把那栋楼建了起来，不知道不等于没建，后果就摆在那里。另一种说：不该苛责，没有人能为自己预见不到、也不是有意造成的伤害背责，否则没人敢动笔。你更同意哪一种？想 30 秒，写下来。',
    expectsRealAnswer: true,
    sourcingNote: 'Hertzberg 1968: 「Juifs」条目文本考证；世俗/族裔反犹主义早期形态',
  },

  {
    nodeId: 'voltaire-N12',
    year: 1778,
    location: 'Paris — then Panthéon (1791)',
    titleCn: '他的矛盾跟他一起被封进大理石',
    titleEn: 'His Contradictions Were Sealed Into Marble With Him',
    bodyCn: `1778 年 2 月，我离开 Ferney 回巴黎，28 年没踏上这城市。法兰西喜剧院演了我的戏，观众高呼我的名字。

1778 年 5 月 30 日，我死了，83 岁。天主教会以我「没临终忏悔」为由拒绝教会葬礼。

1791 年大革命期间，我的遗体被移进巴黎万神殿。进去的是「启蒙英雄」四个字，我的殖民公司股份没进去，「Juifs」条目没进去，《Candide》里那个继续走的主角也没有。

但这不是结尾。1793 年 11 月，Jacobin 法庭用「理性」的语言建构合法性，而这个「理性」正在处死 Olympe de Gouges。1791 年之后不到三年，「启蒙理性」就成了大恐怖的正当性来源，处决了一个用同一种语言要求权利的女性。我的词成了武器。

我是这一切的一部分。不是因为我是恶人，而是因为我是体制里的聪明人——发明了工具，却没问它日后会被拿去干什么。

有一种看法说：启蒙嘴上喊「所有人的理性」，却从没回答「所有人」是谁。另一种把启蒙分两派——温和的（Locke、Newton、我）保留上帝和现有秩序，只攻击最腐败那层；激进的（Spinoza）才动摇根基。我是温和派。

这就是为什么「启蒙矛盾的人格化」适合我，而不是「启蒙的化身」。系统性矛盾不需要恶人，只需要聪明人不看自己不想看的事。我就是。`,
    bodyEn: `In February 1778, I left Ferney and returned to Paris. I had not set foot in the city for 28 years.

The Comédie-Française staged my play; I attended the premiere. The audience chanted my name and placed a laurel wreath on my head. Dozens of visitors crowded my apartment every day. I wrote in letters that their enthusiasm was crushing me, that my body could no longer hold.

On May 30, 1778, I died. 83 years old.

The Catholic Church refused me a church burial — I had not made my final confession. My body was secretly smuggled out of Paris and buried in a monastery managed by my nephew.

In 1791, during the Revolution, my remains were transferred to the Paris Panthéon — hero of the French Republic. What entered was the phrase "Enlightenment hero." My Compagnie des Indes shareholdings did not enter. My "Juifs" entry did not enter. The protagonist of Candide who kept walking did not enter.

But this is not the end of the story.

In 1793, the Jacobin tribunal used the language of "reason" to construct its legitimacy — and that "reason" was sentencing Olympe de Gouges to death (November 1793). The words I wrote passed into other hands, became weapons in other people's grip. Within three years of 1791, the "Enlightenment reason" framework had become a resource for the Terror's justifications, and the Terror executed a woman who had used our shared language to demand rights.

I was part of all of this. Not because I was a villain, but because I was the clever man inside this structure — clever enough to invent the tools, but without asking what those tools would be used for after I was gone.

One view holds that the Enlightenment was a "conditional declaration" — it said "reason for all" while never seriously asking who "all" included. Another view splits the Enlightenment into two camps: a moderate wing (Locke, Newton, me) that kept God and the broad frame of existing social order, attacking only the most corrupt layer of the structure; and a radical wing (Spinoza) that truly shook the foundations. I belonged to the moderate wing.

This is why "the human face of Enlightenment contradiction" fits me, rather than "the embodiment of the Enlightenment."

Systemic contradiction does not require villains. It only requires clever people who do not look at what they do not wish to see. I was that clever person.`,
    themeCn: '系统性矛盾不需要恶人，它只需要聪明人不去看他们不想看的事',
    themeEn: 'Systemic contradiction needs no villains — only clever people who decline to look at what they would rather not see',
    crossLensHook: '1793 年，他的文字被 Jacobin 法庭用来建构「理性」合法性，而这个「理性」正在处死 Gouges（Lens 2）——同年，Toussaint（Lens 3）已经在 Saint-Domingue 用启蒙语言颠覆启蒙体制。Voltaire 写的词，成了别人手里的武器。',
    engagementHook: '走完我这一生——发明了「理性」这把最锋利的武器，却在「Juifs」条目里把偏见装进了理性的外衣，死后我的词又成了大恐怖处死他人的工具。你会怎么评价这样一个人：系统性矛盾不需要恶人，只需要聪明人不去看他们不想看的事——我算恶人吗？再想一步：你身边有没有这种「聪明、善意、却有意不看自己盲点」的人，你会怎么对待 TA？',
    expectsRealAnswer: true,
    sourcingNote: 'Gay 1966: 「条件性宣言」; Israel 2001: 温和 vs 激进启蒙; Cronk 2009: perpetrator-actor 综合评估',
  },
  ],
};

export var gougesLens = {
  id: 'gouges-mediator',
  name: 'Olympe de Gouges',
  nameCn: '奥兰普·德·古热',
  role: 'lonely-mediator',
  roleDescription: 'writer caught between gender exclusion and racial exclusion simultaneously',
  description: {
    cn: '她是法国南方一个屠夫的女儿，母亲悄悄告诉过她另一个版本，你的真父亲是当地一个写诗的贵族（这件事档案里查不到）。17 岁嫁了一个帽商，丈夫很快死了，她拒绝再嫁。这一遍让你跟她带着儿子离开 Montauban，改一个新名字走进巴黎，看一个不知道自己到底是谁的女人，要决定下一步用谁的语言开口。',
    en: 'She is the daughter of a Montauban butcher, whose mother told her, quietly and with no documents, that her real father was a local nobleman who wrote poetry. At seventeen she married a hatmaker, was widowed within a year or two, and refused to remarry. This pass walks with her out of Montauban with her son and a changed name into Paris, watching a woman uncertain of who she is decide whose language she will speak in.',
  },
  storyboard: [
  {
    id: 'N1',
    nodeId: 'gouges-N1',
    year: 1748,
    location: 'Montauban, southern France',
    title: {
      cn: '屠夫女儿与一个未经证实的传说',
      en: 'A butcher\'s daughter and an unverified legend',
    },
    setting: {
      time: '1748 年 5 月 7 日',
      place: 'Montauban，法国南部',
      cn: '公元 1748 年 5 月 7 日，Montauban，法国南部',
      en: 'May 7, 1748, Montauban, southern France',
    },
    content: {
      cn: `我出生的那天，没有人在意。

父亲 Pierre Gouze 是个屠夫，母亲叫 Anne Olympe Mouisset。我是他们的女儿，名字叫 Marie Gouze。一个南方小城，一个手工业家庭，一个毫无特别之处的出生。

但是，我母亲似乎给我讲过一个故事——或者是我后来需要相信它。故事说：我真正的父亲不是屠夫，而是当地贵族 Marquis Lefranc de Pompignan，一个写诗的人。

这个说法没有任何文件证据。Olivier Blanc 2003 年详细考证后的结论是：传说无法证实。可能是我母亲告诉我的，也可能是我后来自己需要这个贵族血统，来支撑我进入那些本不属于我的房间。

历史无法判断。

但我想你注意一件事：我一出生就活在一种关于自己来历的不确定里。那个「真正父亲」的故事，是别人关于我的故事，也可能是我关于自己的故事。我不知道边界在哪里。

Blanc（2003）记录的出生日期：1748 年 5 月 7 日，Montauban 教区记录在案的是 Marie Gouze，父亲 Pierre Gouze，屠夫。贵族父亲这个说法，没有进入任何教区记录。

关于你自己的故事，和别人关于你的故事，从来不是同一个。我是在这个问题里出生的。`,
      en: `The day I was born, no one paid particular attention.

My father, Pierre Gouze, was a butcher. My mother was Anne Olympe Mouisset. I was their daughter, given the name Marie Gouze. A small southern city, a working family, a birth that stood out in no way at all.

But my mother seems to have told me a story — or perhaps I later needed to believe it myself. The story said that my real father was not a butcher. He was a local nobleman, the Marquis Lefranc de Pompignan, a man who wrote poetry.

There is no documentary evidence for this claim. Olivier Blanc examined the records carefully in 2003 and found no confirmation. The legend may have come from my mother. Or I may have needed it later — needed that imagined aristocratic lineage as a kind of credential, something to hold in front of the rooms I was trying to enter.

History cannot decide which.

But I want you to notice something: from the moment I was born, I lived inside an uncertainty about my own origins. That story of a "real father" — it was someone else's story about me, and possibly my own story about myself. I cannot locate the boundary between the two.

France in 1748, a small southern city, a butcher's daughter. That is everything the records can confirm.

Blanc (2003) documented the birth date: May 7, 1748, in the Montauban parish register — Marie Gouze, father Pierre Gouze, butcher. The nobleman father appears in no parish document.

The story you tell about yourself, and the story others tell about you, are never the same story. I was born inside that problem.`,
    },
    themeCn: '你关于自己的故事，和别人关于你的故事，从来不是同一个',
    themeEn: 'The story you tell about yourself and the story others tell about you are never the same',
    expectsRealAnswer: false,
    sourcingNote: 'Blanc 2003：出生日期确证，贵族父亲传说考证后 hedge，无文件基础',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N2',
    nodeId: 'gouges-N2',
    year: 1765,
    location: 'Montauban',
    title: {
      cn: '十七岁，坟墓，一种奇怪的自由',
      en: 'Seventeen, a tomb, a strange kind of freedom',
    },
    setting: {
      time: '约 1765 年，17 岁',
      place: 'Montauban',
      cn: '约公元 1765 年，Montauban',
      en: 'c. 1765, Montauban',
    },
    content: {
      cn: `约 1765 年，我 17 岁，嫁给了一个叫 Louis Aubry 的男人。他是帽商。

我生了一个儿子。

Aubry 死了——具体是 1766 年还是 1767 年，Blanc 2003 考证教区记录时发现有空缺，精确年份无法确认。他去世了，这是确认的事。

然后我拒绝再嫁。

三十年后，我写下了这句话：「婚姻是信任和爱的坟墓（le mariage est le tombeau de la confiance et de l'amour）。」这句话是 30 年后写下的，回望的是我 17 岁时的经历。

但我 17 岁那年想了什么？历史没有记录。没有人问我，我也没有地方可以写下来——那时候我识字很少，或者基本不识字，我的内心没有文字留下来。这是 lonely mediator 的第一个孤独：当事情发生的时候，她没有语言来写它；等她有了语言，事情已经是很久以前的事了。

18 世纪的法国，寡妇的法律地位比妻子高得多。我可以签合同，可以独立持有财产，可以在某些场合代表自己。我一成为寡妇，法律意义上就比任何已婚女性更自由。

这是什么样的自由？一个你要先嫁人、先失去丈夫，才能拥有的自由。

我不知道 17 岁的 Marie Gouze 是什么感受。我只知道她拒绝了再婚，然后开始想去 Paris。`,
      en: `Around 1765, when I was seventeen, I married a man named Louis Aubry. He was a hat merchant.

I bore a son.

Aubry died — whether in 1766 or 1767, Blanc's 2003 examination of parish records found a gap, and the exact year cannot be confirmed. He died; that much is certain.

Then I refused to remarry.

Thirty years later, I wrote this: "Marriage is the tomb of trust and love (le mariage est le tombeau de la confiance et de l'amour)." That sentence came out of the pen thirty years after the fact, looking back at being seventeen.

But what did seventeen-year-old Marie Gouze think in that actual year? The record holds nothing. No one asked, and I had nowhere to write it down — I could barely read or write at that time, and my inner life left no trace in language. This is the first loneliness of the lonely mediator: when the event happens, she has no words to record it; by the time she has words, the event is long past.

In 18th-century France, a widow's legal standing was considerably higher than a married woman's. She could sign contracts, hold property independently, represent herself in certain legal contexts. The moment I became a widow, I was legally more free than almost any married woman.

What kind of freedom was that? The kind you can only have if you first married, and then lost your husband.

I do not know what seventeen-year-old Marie Gouze felt. I only know she refused to remarry, and began thinking about Paris.`,
    },
    themeCn: '18 世纪，寡妇比妻子自由——这是什么样的自由？',
    themeEn: 'In the 18th century, a widow had more freedom than a wife — what kind of freedom is that?',
    expectsRealAnswer: false,
    sourcingNote: 'Blanc 2003：婚嫁约 1765 年，Aubry 死亡年份不确定（1766 或 1767，教区记录有空缺）；「婚姻是坟墓」引自 Gouges 本人文本，30 年后写就',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N3',
    nodeId: 'gouges-N3',
    year: 1768,
    location: 'Paris',
    title: {
      cn: '她带着一个改过的名字进了这座城市',
      en: 'She entered the city under a different name',
    },
    setting: {
      time: '约 1768 年',
      place: 'Paris',
      cn: '约公元 1768 年，Paris',
      en: 'c. 1768, Paris',
    },
    content: {
      cn: `约 1768 年，我带着儿子到了 Paris。

到了 Paris，我先改了名字。把 Gouze 改成 Gouges——读起来更贵族化。把 Marie 换成 Olympe——来自我母亲的名字 Anne Olympe。我以「寡妇 Aubry」的身份进入社交圈。

寡妇身份让我可以独立签合同，独立出版，独立出现在某些场合而不需要一个男性监护人站在我身边。这是我能利用的缝隙，我用了。

一个新名字，一个借用的来历，一个合法的寡妇身份——这是我进城的通行证。

但语言才是更重要的通行证。

我没有受过正式教育。我的早期手稿语法错误很多，句子有时散漫——不是受过古典训练的作家写的那种法语，是我从口语直接转写的节奏。我有合作者帮我修改语言，但主意和框架是我的。我有剧场感，我会讲故事，我知道一个场景应该怎么走。

这些不需要出身证明。你不能用出生证明来证明你懂得怎么让观众屏住呼吸。

Paris 的戏剧圈不问你父亲是谁——它问你有没有东西可以说，你敢不敢说。

我有。我敢。

这就是我进城的方式：一个改过的名字，一个借用的身份，和一种不需要任何证明的能力。`,
      en: `Around 1768, I arrived in Paris with my son.

The first thing I did in Paris was change my name. I turned Gouze into Gouges — it sounded more aristocratic. I replaced Marie with Olympe — borrowed from my mother's name, Anne Olympe. I entered social circles as "the widow Aubry."

The widow's status was something I could use: I could sign contracts independently, publish independently, appear in certain settings without a male guardian required beside me. That was a crack in the system, and I used it.

A new name, a borrowed origin, a legal widow status — these were my credentials for entering the city.

But language was a more important credential than any of them.

I had no formal education. My early manuscripts were grammatically rough — sentences built from spoken rhythms rather than the trained register of classically educated writers. I had collaborators who smoothed the language, but the ideas and the structure were mine. I had a sense for theater, a sense for story, an instinct for how a scene should move.

None of that required proof of parentage. You cannot demonstrate with a birth certificate that you know how to make an audience hold its breath.

The Paris theater world did not ask who your father was. It asked whether you had something to say and whether you would say it.

I did. I would.

That was how I entered the city: a changed name, a borrowed identity, and a capacity that required no proof at all.`,
    },
    themeCn: '语言能力是唯一不需要出身证明的通行证',
    themeEn: 'The ability to speak is the only credential that requires no proof of birth',
    expectsRealAnswer: false,
    sourcingNote: 'Blanc 2003：Paris 抵达约 1768 年，改名记录，寡妇法律地位；识字情况来自手稿语法不规范的记录',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N4',
    nodeId: 'gouges-N4',
    year: 1780,
    location: 'Paris, Palais-Royal district',
    title: {
      cn: '门口，永远的门口',
      en: 'The doorway, always the doorway',
    },
    setting: {
      time: '1780 年代，约九年',
      place: 'Paris，Palais-Royal 一带',
      cn: '公元 1780 年代，Paris Palais-Royal 周边',
      en: '1780s, Paris, Palais-Royal district',
    },
    content: {
      cn: `我在 Paris 的戏剧圈站稳脚跟用了将近十年。

九年。Palais-Royal 的咖啡馆、书摊、剧院、沙龙——那是那个时代 Paris 最密集的文化地带，也是唯一不受警察日常管控的公共广场（Orleans 公爵把这片产业租出去，警察管不着）。思想聚集的地方，也是权力的边缘地。

我在那里出没，认识了记者、剧作家、废奴派、将来的革命者。我没有固定的赞助人——这跟同时代大多数靠贵族资助活着的作家不同。我靠写作、出版，以及某段时期与富商 Jacques Biétrix de Rozières 的同居关系。我拒绝正式再婚，保留「独立寡妇」的法律身份，因为这让我能签合同、出版文件。这段关系是我选的，不是被迫的。

我的手稿从这里传出去。它们语法不规范，有人帮我修改，但主意是我的。

Blanc（2003）把这九年描述为「在 Paris 边缘知识圈缓慢积累声誉」。不在中心，在中心旁边。够近，看清楚里面的人在做什么、说什么；够边缘，看见那些「在中心」的人把哪些人排除在外。

这就是门口的位置：不是被关在外面，是被放在门口，永远进不了正中间。

在男性主导的艺术圈里，女性边缘化就是这个样子。不是一道明显的锁，是一种持续的重力——把你拉向边缘，让你待在门口，刚好够近到看见里面，但没有一把椅子是给你的。`,
      en: `It took me nearly a decade to establish myself in the Paris theater world.

Nine years. The cafés, booksellers, theaters, and salons of the Palais-Royal district — that was the densest cultural zone in Paris at the time, and the only major public space that operated outside normal police jurisdiction. The Duc d'Orléans had rented out the properties, which meant the censorship mechanisms that applied everywhere else didn't reach here. A place where thought gathered. Also a place at the edges of power.

I moved through that space. I met journalists, playwrights, abolitionists, future revolutionaries. I had no fixed patron — unlike most writers of my era, who lived on aristocratic support. I supported myself through writing, publishing, and during one period, a domestic partnership with a wealthy merchant, Jacques Biétrix de Rozières. I refused to formally remarry, keeping my legal identity as an independent widow, because that status was what let me sign contracts and publish in my own name. I chose that arrangement. I wasn't forced into it.

My manuscripts circulated from here. Grammatically rough, polished by collaborators, but the ideas were mine.

Blanc (2003) characterizes those nine years as "a slow accumulation of reputation in Paris's peripheral intellectual circles." Not at the center — beside it. Close enough to observe what the people inside said and did. Marginal enough to see exactly which voices the center had excluded.

That was the position of the doorway: not shut outside, but placed at the threshold, never quite entering the center.

In a male-dominated artistic world, the specific form of women's marginalization looked like this. Not a visible lock — a constant gravitational pull toward the edge, keeping you at the doorway, letting you see just inside, but ensuring that none of the chairs were ever meant for you.`,
    },
    themeCn: '在男性主导的艺术圈里，女性边缘化不是被关在外面，是被放在门口，永远进不了正中间',
    themeEn: 'In a male-dominated artistic world, women were not shut out — they were placed at the threshold, never quite reaching the center',
    expectsRealAnswer: false,
    sourcingNote: 'Blanc 2003：Palais-Royal 活动记录、Biétrix de Rozières 同居关系、寡妇法律身份选择、「边缘知识圈」描述',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N5',
    nodeId: 'gouges-N5',
    year: 1784,
    location: 'Paris, Comédie-Française',
    title: {
      cn: '她为别人写了台词，自己的声音没有人听',
      en: 'She wrote lines for others; her own voice went unheard',
    },
    setting: {
      time: '1784 年，第一次向 Comédie-Française 提交',
      place: 'Paris，法兰西喜剧院',
      cn: '公元 1784 年，Paris，Comédie-Française',
      en: '1784, Paris, the Comédie-Française',
    },
    content: {
      cn: `1784 年，我完成了一部剧本：《奴隶制》（L'Esclavage des Nègres，黑人的奴役）。

法语戏剧史上，黑人角色通常只是背景色、异域风情、衬托白人道德的镜子，没有自己的内心。

我给剧本里的主要黑人角色写了台词——他们对自由的渴望，在奴役中的尊严，他们的情感和推理。不是讽喻，而是人物。这在 1784 年的法语舞台上很罕见。

Joan Scott（1996）分析说：我作为一个被性别排斥在 Paris 体制之外的女性，对「被系统性排斥」有切身理解。这让我能看见远在 Saint-Domingue 的黑奴的处境——不是抽象的道德课题，而是我熟悉的那种结构。

我把剧本交给 Comédie-Française。1784 年第一次拒绝，Blanc（2003）记录的原始法语理由是：「题材有损观众体验。」

不是剧本写得不好，不是法律问题，是说：奴隶制会让观众不舒服。

我再提交。1785 年再拒，1787 年再拒。

1789 年大革命改变了气候，国民议会开始辩论殖民地与自由，黑人之友协会已经公开活动。这时 Comédie-Française 才在压力下同意上演，1789 年 12 月演了几场就撤了：有人鼓掌，有人离场，有人抗议。

我为那些角色写的台词，比我自己的声音更早进入那个剧院。这告诉你结构怎么工作。`,
      en: `In 1784, I finished a play: L'Esclavage des Nègres — "The Slavery of the Blacks."

In French theatrical history, what were Black characters? Background color, exotic scenery, mirrors held up to reflect white protagonists' moral choices. They had no interior logic of their own, no inner lives.

I gave the main Black characters in my play their own lines — their desire for freedom, their dignity under bondage, their emotional reasoning. Not as allegory. As characters. This was genuinely anomalous in the French theater of 1784.

Joan Scott (1996), analyzing my texts, observed: as a woman systematically excluded from Paris's formal institutions by virtue of sex, I had a lived understanding of being placed outside the definition of "the human." That understanding gave me access to the situation of enslaved people in Saint-Domingue — not as an abstract moral problem, but as a structure I already knew.

I submitted the play to the Comédie-Française. 1784: first rejection. Blanc (2003) records the written refusal: le sujet nuit à l'agrément du spectateur — "the subject matter damages the audience's enjoyment."

Not: the play is badly written. Not: there is a legal problem. Only: slavery as a subject makes audiences uncomfortable.

I submitted again. Rejected again in 1785. Again in 1787.

The Revolution changed the atmosphere. By late 1789, the National Assembly was debating the colonies and liberty; the Société des amis des Noirs (Society of the Friends of the Blacks) was operating openly. Under this pressure, the Comédie-Française finally staged the play — December 1789. It ran a few performances, then was withdrawn. Some applauded. Some walked out. Some protested.

The lines I wrote for those characters reached that theater before my own voice did. That fact tells you something about how structure works.`,
    },
    themeCn: '她为别人写的台词，比她自己的声音更早进了文学史',
    themeEn: 'The lines she wrote for others reached the stage before her own voice did',
    crossLensHook: 'Toussaint Louverture 在 Saint-Domingue 的种植园里——他有没有听说过这部剧？几乎不可能直接听说。但废奴思想的网络在同时变厚，从多个方向同时供给。',
    expectsRealAnswer: false,
    sourcingNote: 'Blanc 2003：三次书面拒绝记录，1784 年第一次拒绝理由原始法语；Scott 1996：性别排斥与种族排斥的结构联结分析；1789 年 12 月首演记录',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N6',
    nodeId: 'gouges-N6',
    year: 1789,
    location: 'Paris, Palais-Royal café',
    title: {
      cn: '她数了数「homme」出现了多少次',
      en: 'She counted how many times the word "homme" appeared',
    },
    setting: {
      time: '1789 年 8 月 26 日',
      place: 'Paris，Palais-Royal 一带的咖啡馆',
      cn: '公元 1789 年 8 月 26 日，Paris',
      en: 'August 26, 1789, Paris',
    },
    content: {
      cn: `1789 年 8 月 26 日，国民议会通过了《人和公民权利宣言》（Déclaration des droits de l'homme et du citoyen），17 条，开篇：「人生而自由，且在权利上平等。」

我读了这份文件。

很可能是在 Palais-Royal 一带的咖啡馆——一个我能进去、但在那年代没有投票权的空间。Palais-Royal 当时是 Paris 政治思想最密集的地方，书摊贴满当天的新闻，每个人都在谈论这份文件。

法语里，「homme」有两种意思：泛指的「人」（不分性别）和特指的「男人」。起草这份文件的人——Sieyès、Lafayette、Mirabeau——心里想的「享有权利的人」是：有财产的法国男性公民。女性不在这个圈子里，殖民地的奴隶也不在。

我读这份文件，数了「homme」出现的次数。

然后我开始想：如果你用来建立新世界的语言，本身就是把某些人排除在外的工具，那这个新世界从设计之初就有一道墙。这墙不是石头建的，是词语建的。

词语建的墙，要用词语来拆。

Blanc（2003）记录这个时期她开始起草镜像版本——把 1789 年的文件拿来，在每一条里加入「女性」。这个工作持续两年，到 1791 年成为《女性和女公民权利宣言》。

那天在咖啡馆读完，我知道接下来要做什么了。`,
      en: `On August 26, 1789, the National Assembly passed the Déclaration des droits de l'homme et du citoyen — the Declaration of the Rights of Man and of the Citizen — seventeen articles, opening: "Men are born and remain free and equal in rights."

I read the document.

Where did I read it? Most likely in one of the cafés around the Palais-Royal — a space I could enter, but where I held no right to vote. The Palais-Royal by then had become the most politically charged district in Paris, booksellers' stalls plastered with the day's news, everyone discussing the document.

In French, the word homme carries two meanings: "human being" (generic) and "man" (male). The people who drafted this document — Sieyès, Lafayette, Mirabeau — had a specific rights-holder in mind: propertied French males. Women were outside that circle. Enslaved people in the colonies were outside that circle.

I read the document. I counted how many times homme appeared.

Then I started thinking about something: if the language you use to build a new world is itself the tool that excludes certain people, then the new world has a wall built into its design from the beginning. Not a wall made of stone — a wall made of words.

A wall made of words has to be taken apart with words.

Blanc (2003) records that during this period she began drafting a mirror-image document — taking the 1789 text article by article, inserting "woman" throughout. That work would continue for two years, becoming the Déclaration des droits de la femme et de la citoyenne in 1791.

That day in the café, after reading to the end, I knew what I was going to do next.`,
    },
    themeCn: '你用来建立新世界的语言，可以同时是把你排在外面的工具',
    themeEn: 'The language used to build a new world can simultaneously be the tool that excludes you from it',
    expectsRealAnswer: false,
    sourcingNote: '1789.8.26《人和公民权利宣言》通过为历史事实；法语「homme」双重含义分析来自 Scott 1996；Palais-Royal 作为阅读地点系合理推断（Blanc 2003 记录她主要活动于此）',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N7',
    nodeId: 'gouges-N7',
    year: 1791,
    location: 'Paris',
    title: {
      cn: '她把文件递给另一个也被排除在外的女人',
      en: 'She handed the document to another woman who was also excluded',
    },
    setting: {
      time: '1791 年秋',
      place: 'Paris',
      cn: '公元 1791 年秋，Paris',
      en: 'Autumn 1791, Paris',
    },
    content: {
      cn: `1791 年，我出版了《女性和女公民权利宣言》（Déclaration des droits de la femme et de la citoyenne）。

我的方法是字对字的镜像模仿：把 1789 年的 17 条逐条拿来，在每条里加入「女性」。第 1 条原文「男人生而自由」，我的版本「女人生而自由，且在权利上与男人平等」。

然后是第 10 条——我最清楚自己在写什么的那一条：

「如果女性有权被送上断头台，她就应该同样有权站上讲台。」

大革命的断头台不分性别。既承认女人有资格死，凭什么说她没资格说话？

我把这份文件献给 Marie-Antoinette——此时软禁中的王后。很多革命者因此认为我是保皇党。Joan Scott（1996）给出另一种分析：这个献词是一个孤立无援者对另一个孤立无援者的符号性联结。王后 1791 年被剥夺政治权力、被舆论妖魔化，也是一个被「所有人」排除的女人。我的《女性宣言》同样被排除，递给了她。

Scott 说得很清楚：这不是保皇主义，我在别处批评过王室。献词的逻辑是：我们都被排除了，而这本身就是我要说的问题。

我通过宫廷信件渠道送出文件（Blanc 2003 记录了这条路径）。我知道王后不太可能有力量回应，但还是写了，送了。

她知道自己的声音会消失在空气里，但还是要说。`,
      en: `In 1791, I published the Déclaration des droits de la femme et de la citoyenne — the Declaration of the Rights of Woman and of the Female Citizen.

My method was exact mirror-image imitation: I took the seventeen articles of the 1789 document one by one, inserting "woman" throughout. Article 1 in the original: "Men are born free and equal in rights." My version: "Woman is born free and remains equal to man in rights."

Then Article 10 — the one I knew most clearly what I was writing:

"If a woman has the right to mount the scaffold, she must equally have the right to mount the podium. (Si la femme a le droit de monter sur l'échafaud, elle doit avoir également celui de monter à la tribune.)"

The Revolution's guillotine did not discriminate by sex. If you already acknowledge that a woman can be eligible for death, on what grounds do you say she is not eligible to speak?

I dedicated the document to Marie-Antoinette — the Queen, then under house arrest.

Many revolutionaries concluded from this that I was a royalist. Joan Scott (1996) offered a different analysis: the dedication was a symbolic gesture from one isolated person to another. In 1791, Marie-Antoinette had been stripped of political power by the Revolution, demonized by public opinion — a woman excluded from "everyone's" rights just as surely as any woman in France. My Declaration — itself a document excluded by "everyone" — was being handed to a woman excluded by the same "everyone."

Scott is explicit: this was not royalism. I criticized the royal system elsewhere in my writing. The dedication's logic was: we are both excluded, and that exclusion is precisely what I am writing about.

I sent the document through the court's postal channels (Blanc 2003 documents this). I knew the Queen was unlikely to have the power to respond. But I wrote it. I sent it anyway.

The lonely mediator knows her voice will dissolve in the air — and speaks anyway.`,
    },
    themeCn: 'lonely mediator 知道自己的声音会消失在空气里，但还是要说',
    themeEn: 'The lonely mediator knows her voice will dissolve in the air — and speaks anyway',
    expectsRealAnswer: false,
    sourcingNote: 'Scott 1996：献词政治逻辑分析，p. 30-35；Blanc 2003：宫廷信件渠道记录；第 10 条原文引自 Gouges 1791 年原文',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N8',
    nodeId: 'gouges-N8',
    year: 1792,
    location: 'Paris',
    title: {
      cn: '她批判所有人，所以所有人都觉得她是敌人',
      en: 'She criticized everyone, so everyone considered her an enemy',
    },
    setting: {
      time: '1792-1793 年',
      place: 'Paris',
      cn: '公元 1792-1793 年，Paris',
      en: '1792-1793, Paris',
    },
    content: {
      cn: `1792 年，大革命从「改革君主制」走向「共和」。1793 年 1 月，路易十六即将被处死。

我发表文章，提出一个主张：国王的命运应该由法国人民全民公投决定，而不是由国民公会直接判决。

我不是保皇党。我是共和主义者、废奴主义者、女性权利倡导者。我反对的不是共和国，而是没有经过人民授权的审判程序。Joan Scott（1996）分析这一时期时说：「Gouges 被处死，根本原因是她拒绝接受 Jacobin 的政治权威——她用启蒙的普世理性挑战山岳派，而山岳派把自己的权力建立在同样一套普世理性的名义下。」

那篇文章我知道会带来危险。我还是发表了。

我攻击 Marat——他在煽动对无辜者的仇恨；攻击 Robespierre——他在把大革命变成新的专制。我同情 Girondins（吉伦特派），那些主张宪法约束权力、反对激进暴力的温和共和派。

结果是：激进派觉得我反动，因为我为国王辩护程序；保皇派觉得我是革命者，因为我支持共和；女性权利支持者觉得我太保守，因为我同情王后；激进革命者觉得我太软弱，因为我反对暴力。

我批判所有人，所以所有人都觉得我是敌人。

这就是她的孤独：你站在中间，分析所有人，所有人都认为你站在另一边。没有哪个阵营把你当自己人。你发表的文字，没有一段能被任何一方完整接受。`,
      en: `In 1792, the Revolution moved from "reforming the monarchy" toward "republic." In January 1793, Louis XVI was about to be executed.

I published an article arguing that the French people should decide the king's fate through a popular referendum, not by direct vote of the National Convention.

I was not a royalist. I was a republican, an abolitionist, an advocate of women's rights. What I opposed was not the republic — it was a trial process lacking authorization from the people. Joan Scott (1996), analyzing this period, wrote: "Gouges was executed because she refused to accept Jacobin political authority — she used Enlightenment universal reason to challenge the Mountain, while the Mountain built its own power on the same invocation of universal reason."

I knew that article would bring danger. I published it anyway.

I attacked Marat — for inciting hatred against the innocent. I attacked Robespierre — for converting the Revolution into a new despotism. I sympathized with the Girondins, the moderate republicans who favored constitutional constraint on power and opposed the path of violent radicalism.

The result: radical Jacobins considered me a reactionary, because I defended procedural fairness for the king. Royalists considered me a revolutionary, because I supported the republic. Women's rights supporters found me too conservative, because I showed sympathy for the Queen. Violent revolutionaries found me too weak, because I opposed bloodshed.

I criticized everyone, so everyone considered me an enemy.

That is the loneliness of the lonely mediator: you stand in the middle, analyze everyone, and everyone concludes you are standing on the opposite side. No faction claims you as one of their own. Nothing you publish can be fully accepted by any of them.`,
    },
    themeCn: 'lonely mediator 的孤独在于：她批判所有人，所以所有人都觉得她是敌人',
    themeEn: 'The lonely mediator\'s loneliness: she criticized everyone, so everyone considered her an enemy',
    expectsRealAnswer: false,
    sourcingNote: 'Scott 1996：pp. 30-35，Gouges 政治立场分析；Blanc 2003：1789-1793 年 pamphlet 写作记录；Girondin 人脉接触记录',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N9',
    nodeId: 'gouges-N9',
    year: 1793,
    location: 'Paris',
    title: {
      cn: '最后那个下午，还是同样的语气',
      en: 'That last afternoon, still the same tone',
    },
    setting: {
      time: '1793 年 7 月，被捕前夕',
      place: 'Paris',
      cn: '公元 1793 年 7 月，Paris',
      en: 'July 1793, Paris',
    },
    content: {
      cn: `1793 年 7 月，Robespierre 领导的 Jacobin 山岳派彻底清洗吉伦特派。我的政治网络开始瓦解。我认识的 Girondin 人脉——那些主张宪政、反对暴力的人——一个接一个消失。

Blanc（2003）在 p. 180 记录了这一时期：她被捕前的几天里，她还在继续写政治 pamphlet 批评 Jacobin 政府，还在用同样的语气，同样的逻辑。

我知道危险在哪里。我不是不知道。

但我没有别的工具。我只有语言，只有那支笔，只有那种把道理说清楚的能力。那是我从 Montauban 的屠夫家里带出来的唯一东西，那是我在 Paris 九年积累起来的唯一资本。

你在只有一把锤子的时候，不管面对什么，你都只能用锤子。

最后那个下午，还是同样的语气。我写完一篇 pamphlet，批评 Jacobin 政府的审判程序，批评他们打着「人民意志」的名义做的事——这套批评我已经说了很多年，我还是要说。

然后我被捕了。罪名是「保皇党」和「联邦主义者」——在 1793 年的 Jacobin 恐怖统治下，这些指控足以致命。

她到死都在用那把武器——不是因为她不知道它无效，而是因为她没有别的武器。`,
      en: `In July 1793, the Jacobin Mountain led by Robespierre completed its purge of the Girondins. My political network began to collapse. The Girondin figures I knew — those who had argued for constitutionalism, who had opposed revolutionary violence — were disappearing one by one.

Blanc (2003), on page 180, records this period: in the days before her arrest, she was still writing political pamphlets criticizing the Jacobin government, still using the same tone, the same logic.

I knew where the danger was. I was not unaware.

But I had no other tool. Only language, only that pen, only the ability to make an argument clearly. That was the one thing I had carried out of the butcher's house in Montauban. That was the only capital I had accumulated in nine years in Paris.

When you have only a hammer, no matter what you face, the hammer is what you use.

That last afternoon, still the same tone. I finished a pamphlet criticizing the Jacobin government's trial procedures, criticizing what they were doing in the name of "the will of the people" — a critique I had been making for years. I made it again.

Then I was arrested. The charge: "royalist" and "federalist" — under the Jacobin Terror of 1793, these accusations were enough to kill.

She went on using the only weapon she had until the end — not because she didn't know it might not save her, but because she had no other weapon to use.`,
    },
    themeCn: '她到死都在用那把武器——不是因为她不知道它无效，而是因为她没有别的武器',
    themeEn: 'She used the only weapon she had until the end — not because she thought it would save her, but because she had no other',
    expectsRealAnswer: false,
    sourcingNote: 'Blanc 2003：p. 180，被捕前仍在写 pamphlet 批评 Jacobin；Scott 1996：pp. 30-35，政治被杀真实原因分析',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N10',
    nodeId: 'gouges-N10',
    year: 1793,
    location: 'Paris, Place de la Révolution',
    title: {
      cn: '第十条在这里变成了现实',
      en: 'Article Ten became reality here',
    },
    setting: {
      time: '1793 年 11 月 3 日',
      place: 'Paris，革命广场（今 Place de la Concorde）',
      cn: '公元 1793 年 11 月 3 日，Paris，Place de la Révolution',
      en: 'November 3, 1793, Paris, Place de la Révolution (today\'s Place de la Concorde)',
    },
    content: {
      cn: `1793 年 11 月 3 日，我走上断头台。45 岁。

第 10 条：「如果女性有权被送上断头台，她就应该同样有权站上讲台。」

这句话我在 1791 年写下时，知道它的逻辑是完整的。我不知道它会以这种方式完成。

有一个关于「最后遗言」的说法流传很广，据说我在断头台前说了第 10 条那句话。这里必须谨慎：Blanc（2003）p. 198 明确留余地——这个「遗言」来自当时的 pamphlet 文学和共和派报纸报道，这类文献有后世建构的可能。她是否真在死前说了，还是后人把她的文字归到她的死亡时刻，无法从原始档案确证。

但第 10 条的文字来自她本人是铁证——那是她 1791 年出版的文件，文字在案。

Joan Scott（1996）p. 33 说：「Gouges 的死变成了她预言的实现——不是因为革命者设计了这种讽刺，而是因为她的文字结构本身已包含这种可能。」

还有一件事要说清楚：她不是「因为要求女性权利被杀」，是因为政治立场被杀——反 Jacobin，支持吉伦特派，为国王辩护全民公投程序。但她死的方式（断头台）与她写下的第 10 条对应，创造了历史上最具讽刺意味的自我证明。

这不是她选择的结局，是她的逻辑从一开始就包含的一种可能，被历史以这种方式完成了。`,
      en: `On November 3, 1793, I walked to the guillotine. I was 45.

Article 10: "If a woman has the right to mount the scaffold, she must equally have the right to mount the podium."

I wrote that sentence in 1791 knowing its logic was complete. I did not know it would be completed this way.

There is a widely circulated account of a "last statement" — that at the guillotine I spoke the exact words of Article 10. About this, careful framing is required: Blanc (2003), on page 198, explicitly hedges: the supposed last words come from contemporary pamphlet literature and republican newspaper reports — sources that carry the possibility of later construction. Whether she actually spoke that sentence at the moment of her death, or whether the sentence was retrospectively attached to that moment from her published writing, cannot be confirmed from original archives.

But that Article 10 language came from her own pen is established fact — she published it in the 1791 document; the text is on the record.

Joan Scott (1996), page 33: "Gouges's death became the fulfillment of her own prophecy — not because the revolutionaries designed that irony, but because the structure of her writing had already contained that possibility."

One more thing needs to be said clearly: she was not killed for demanding women's rights. She was killed for her political positions — anti-Jacobin, pro-Girondin, advocacy for a popular referendum on the king's fate. But the manner of her death (guillotine), mapped against the text of her own Article 10, created the most ironically self-confirming moment in Enlightenment history.

This was not the ending she chose. It was a possibility her own logic had contained from the beginning — and history completed it this way.`,
    },
    themeCn: '她完成了她自己的逻辑——不是因为她选择了这个结局，而是因为她的逻辑从一开始就包含了这种可能性',
    themeEn: 'She completed her own logic — not because she chose this ending, but because the logic had always contained this possibility',
    expectsRealAnswer: false,
    sourcingNote: 'Scott 1996：p. 33，死亡与预言结构分析；Blanc 2003：p. 198，「最后遗言」来源 hedge；第 10 条引自 Gouges 1791 年原文，为铁证',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N11',
    nodeId: 'gouges-N11',
    year: 1793,
    location: 'Paris & Saint-Domingue',
    title: {
      cn: '同一种语言，两种结果，两个互不相识的人',
      en: 'The same language, two outcomes, two people who never knew each other',
    },
    setting: {
      time: '1793 年 11 月 3 日 vs 1793 年 8 月',
      place: 'Paris / Saint-Domingue',
      cn: '公元 1793 年，Paris 断头台 vs Saint-Domingue',
      en: '1793, Paris guillotine vs. Saint-Domingue',
    },
    content: {
      cn: `她死的那天是 1793 年 11 月 3 日，Paris。

大西洋另一边，1793 年 8 月，Toussaint Louverture 宣布带着他的军队离开西班牙阵营，投向法国革命政府——因为法国在 1793 年 8 月签发了废奴令，Toussaint 相信这是真实的政策，不是虚词。

两个人，同一年，同一套启蒙语言，完全不同的结果。

她用启蒙语言的逻辑——普世理性，人人平等——写了一份宣言，要求这套逻辑也适用于女性。她死于那套逻辑的执行者手里。

他用同一套启蒙语言——自由，人的权利——来给他在 Saint-Domingue 的军事行动建立框架，来对抗那些说「自由」的人里不打算让他自由的人。他在那一年活了下来。

她没有听说过他。他也没有听说过她——或者几乎不可能直接听说。他们用的是同样的词汇库，但他们在不同的地方，用不同的方式，面对不同的结构性排斥。

启蒙语言是工具。这一点他们共同证明了。

但谁用它，对谁用，在什么处境下用，结果可以是完全不同的两件事。她的工具在 Paris 被转向了她自己。他的工具在 Saint-Domingue 打开了一个缺口。

同一把工具，两种命运。

你怎么看这件事？启蒙的「普世理性」——当它碰到真实的结构性权力时，谁能用它，谁不能？`,
      en: `She died on November 3, 1793, in Paris.

On the other side of the Atlantic, in August 1793, Toussaint Louverture declared that he was leading his army out of the Spanish camp to join the French revolutionary government — because France had issued an abolition decree in August 1793, and Toussaint judged it to be real policy, not empty words.

Two people, the same year, the same Enlightenment language, completely different outcomes.

She used Enlightenment logic — universal reason, equality for all — to write a declaration demanding that this logic apply to women as well. She was killed by the hands of the very people who claimed to be executing that logic.

He used the same Enlightenment language — liberty, the rights of man — to frame his military campaign in Saint-Domingue, to confront the people who said "freedom" while not intending to extend it to him. He survived that year.

She had not heard of him. He had not heard of her — or almost certainly not directly. They drew from the same vocabulary, but they were in different places, using language in different ways, facing different forms of structural exclusion.

Enlightenment language is a tool. Both of them demonstrated that.

But who uses it, against whom, and under what circumstances — the outcomes can be completely different things. Her tool was turned against her in Paris. His tool forced open a crack in Saint-Domingue.

Same tool, two fates.

What do you make of this? When Enlightenment "universal reason" encounters real structural power — who can use it, and who cannot?`,
    },
    themeCn: '启蒙语言是工具，但谁用它，对谁用，结果完全不同',
    themeEn: 'Enlightenment language is a tool, but who uses it, against whom, produces completely different results',
    crossLensHook: 'Toussaint Louverture lens：1793 年 8 月 Toussaint 投向法国废奴令；同年 11 月 Gouges 死于 Paris。他们从未相识，但他们的生命弧线在 1793 年的启蒙矛盾里同时发生。',
    engagementHook: '同一套「普世理性」的语言，Toussaint 用它在 Saint-Domingue 撬开了一道缺口，我用它要求女性平等却被送上断头台。那么这套语言本身，到底是什么？有两种读法。一种说：它是真正中立、谁拿起来都能用的工具，Toussaint 就证明了它能为被排斥者打开局面。另一种说：它只对那些权力结构本来就愿意放行的人有用，对真正被排斥的人，它会被反过来对准你。你更同意哪一种？想 30 秒，写下来。',
    expectsRealAnswer: true,
    sourcingNote: 'Scott 1996：跨 lens 分析框架；Blanc 2003：Gouges 死亡日期；Dubois 2004：Toussaint 1793 年 8 月转投法国废奴令',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'N12',
    nodeId: 'gouges-N12',
    year: 1793,
    location: 'Paris → 20th century rediscovery',
    title: {
      cn: '活着时不属于任何一边，死后被所有人认领',
      en: 'No one claimed her while she lived; everyone claimed her after she died',
    },
    setting: {
      time: '1793 → 20 世纪',
      place: 'Paris / 历史',
      cn: '公元 1793 年 → 20 世纪，历史的漫长时间',
      en: '1793 to the 20th century',
    },
    content: {
      cn: `她死后，《女性和女公民权利宣言》消失了将近 200 年。

没有进入任何政治议程，没有引发任何议会辩论。大革命继续，Napoleon、王政复辟、第二帝国、第三共和国来了——它在这一切里都沉默。

Joan Scott（1996）追踪了它的命运：「《女性宣言》在 1791 年几乎完全被忽略，没有引发辩论，没有进入国民议会任何议程。直到 20 世纪才被重新发现，成为 feminist 运动的历史经典。」

她被「重新发现」本身，Scott 说，就是对 18 世纪制度排斥的证明：一个文件被忽略 200 年，不是因为写得不好，而是制度从没设计接收这种声音的入口。

现在她被各种方向认领了：feminist 历史学家认领她是先驱，法国政府把她放进教科书，有人引用第 10 条讨论今天的事。

但有一种读法我想说出来：她不是「超前于时代的天才」。这个说法让我们觉得时代进步了、问题解决了、她只是生早了。更准确的是：同样的结构性排斥今天仍在，只是换了形式。第 10 条还没过期。

一个跨主题的对比值得想：拜占庭历史里的 Theodora 用声音保住现存秩序，让 Justinian 没逃跑；Gouges 用声音挑战声称代表「人民和理性」的新秩序。同一种工具，两种命运。

她死了两百多年，第 10 条还在被引用。

你觉得她赢了还是输？`,
      en: `After her death, the Déclaration des droits de la femme et de la citoyenne disappeared for nearly 200 years.

It entered no political agenda. It triggered no parliamentary debate. The Revolution continued, Napoleon came, the Restoration came, the Second Empire came, the Third Republic came — through all of it, the document was silent.

Joan Scott (1996) traces the document's fate: "The Declaration of the Rights of Woman was almost entirely ignored in 1791 — overlooked by the Revolution's male political mainstream, generating no parliamentary debate, entering no National Assembly agenda. The document was only 'rediscovered' in the 20th century, when it became a canonical text of feminist history."

The 20th-century feminist movement found her again.

That act of "rediscovery" itself, Scott's analysis argues, is proof of the 18th-century institutional exclusion. A document ignored for 200 years — not because it was badly written, but because the institution had never built a mechanism to receive that kind of voice.

Now she is claimed. Claimed from multiple directions. Feminist historians claim her as a pioneer. The French government put her name in textbooks. Her portrait became a poster. People cite her Article 10 to discuss questions that are still open today.

But there is one way of reading this that I want to name here:

She was not "a genius ahead of her time." That framing makes us feel that time has progressed, the problem has been solved, and she simply arrived too early. A more accurate framing: the same structural exclusions exist today in different forms. Her Article 10 has not expired.

One more cross-topic comparison is worth sitting with: Theodora, from the Byzantine Topic — she used her voice to preserve the existing order, to keep Justinian from fleeing, to sustain imperial power. Gouges used her voice to challenge a newly built order, to confront the power that claimed to represent "the people and reason." Same tool — public language — two directions, two fates.

She has been dead for more than two hundred years. Article 10 is still being cited.

Do you think she won, or lost?`,
    },
    themeCn: 'lonely mediator 的命运：活着时不属于任何一边，死后被所有人认领',
    themeEn: 'The lonely mediator\'s fate: no one claimed her while she lived; everyone claimed her after she died',
    crossTopicHook: 'Byzantine Topic: Theodora 用声音保住了现存秩序；Gouges 用声音挑战新建立的秩序——同一工具，两种方向，两种命运。',
    engagementHook: '走完她这一生——用启蒙自己的「普世理性」语言要求女性平等，却被那套逻辑的执行者送上断头台，文件沉默 200 年后才被认领。你会怎么评价：当「普世理性」碰到真实的结构性权力，谁能用它，谁不能？她到底赢了还是输了？再想一步：你身边有没有人正在用一套「人人都该认同」的道理要求公平、却没人听，你会怎么对待 TA？',
    expectsRealAnswer: true,
    sourcingNote: 'Scott 1996：文件消失与 20 世纪重发现分析，反 Whig 框架；Blanc 2003：生平总结',
    nodeType: 'lonely-mediator',
  },
  ],
};

export var toussaintLens = {
  id: 'toussaint-receiving',
  name: 'Toussaint Louverture',
  nameCn: '图森·卢维杜尔',
  role: 'receiving-end',
  roleDescription: 'formerly enslaved who used Enlightenment language to defeat its enforcers',
  description: {
    cn: '他是 1743 年生在圣多明戈北部 Bréda 种植园上的一个奴隶婴儿。这座岛西半部当时产着全法国 40% 的糖，养着 50 万被奴役的人。种植园管事让他学会了读法语，管草药，管马圈。这一遍让你跟他从那间灯下抄字的小屋出发，看一个本来不该识字的人，怎么把这三件工具收在身边，等一个还没到来的时刻。',
    en: 'He is a baby born in 1743 on Bréda plantation in northern Saint-Domingue, the colony that fed France 40 percent of its sugar on the backs of 500,000 enslaved people. The plantation steward let him learn to read French, work with herbs, and handle horses. This pass sits you in the lamplit room where he copies letters by hand, watching a man not supposed to be literate gather three tools and wait for a moment not yet arrived.',
  },
  isDefaultLens: true,
  storyboard: [

  // ═══════════════════════════════════════════════════
  // N1 — 1743 · 出生 · Bréda 种植园 · 500,000 人里的一个
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N1',
    year: 1743,
    location: 'Saint-Domingue 北部，Bréda 种植园',
    title: {
      cn: '1743 年，我只是一个婴儿',
      en: 'In 1743, I was only an infant',
    },
    content: {
      cn: `1743 年，Saint-Domingue 北部，Bréda 种植园。

一个婴儿出生了，没有人在档案里记录他的生日。他父亲的名字，C.L.R. James 1938 年的书里叫 Gaou Guinou，另一些海地史料里叫 Hyppolite Thésée——两个名字来自不同来源，学界至今没有定论。还有一个家族传说：父亲是西非 Allada 王国（今贝宁）贵族后代，被奴隶贸易从贵族家庭撕走。

这可能有真实根据，也可能是家族记忆在口传中的理想化。Laurent Dubois 2004 年说：「父亲可能来自非洲精英家庭，但具体细节难以证实。」

我那时候什么都不知道。

我只知道我出生在 Saint-Domingue 北部一个叫 Bréda 的种植园。1743 年，这个岛的西半部是法国殖民地，生产全法国大约 40% 的蔗糖、50% 的咖啡。这些数字意味着什么？意味着这块土地上有 500,000 个被奴役的人，而我是其中之一。

500,000。

历史书喜欢说数字然后往下走。但我想让你停一秒：这 50 万人，每个都有父母，有被撕碎的家庭，有一个非洲的出发点，有第一次踩上这片土地时的恐惧。

我父亲是这 50 万人之一。我也是。

1743 年，我只是一个种植园婴儿。历史从来不是在一开始就知道谁是主角的。`,
      en: `1743. Northern Saint-Domingue. The Bréda plantation.

A baby was born. No one recorded his birthday in any archive. His father's name appears as Gaou Guinou in C.L.R. James's 1938 book, and as Hyppolite Thésée in some Haitian historical sources — two names from different traditions, with no scholarly consensus. There is also a family story: that the father was a descendant of nobility from the Kingdom of Allada in West Africa (present-day Bénin), a man torn from an aristocratic family by the slave trade.

This account may carry real truth, or it may reflect the kind of idealization that oral memory builds over generations. Laurent Dubois (2004, Avengers of the New World) writes: "The father may have come from an African elite family, but the specific details are difficult to verify."

I did not know any of this. I knew nothing yet.

I only knew I was born on a plantation called Bréda, in the northern part of Saint-Domingue. In 1743, the western third of this island was a French colony that produced roughly 40 percent of France's sugar and roughly 50 percent of its coffee. What do those numbers mean? They mean this land held 500,000 enslaved people, and I was one of them.

Five hundred thousand.

History books like to state a number and move on. But stop here for one moment. Five hundred thousand people — each with parents, with a shattered family, with a point of origin somewhere in Africa, with the fear of first stepping onto the soil of Saint-Domingue.

My father was one of those 500,000. So was I.

In 1743, I was only a plantation infant. History never knows at the beginning who its main character will be.`,
    },
    themeCn: '历史从不在起点告诉你谁是主角',
    themeEn: 'History never announces its protagonists at the starting line',
    expectsRealAnswer: false,
    sourcingNote: 'Dubois 2004 p.10 (父亲名字 hedge); C.L.R. James 1938 (Gaou Guinou); Dubois 2004 (40% 糖, 500,000 人数)',
  },

  // ═══════════════════════════════════════════════════
  // N2 — 1750s-1760s · 识字 · 草药 · 马 · 三件工具
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N2',
    year: 1758,
    location: 'Bréda 种植园，北部省',
    title: {
      cn: '读写是工具，也是武器',
      en: 'Reading is a tool and also a weapon',
    },
    content: {
      cn: `Bréda 种植园的主人（管事）叫 Bayon de Libertat。在 Saint-Domingue 的标准里，他算是相对温和的一个——这不是什么高评价，这只是说他没有达到当时种植园主的极端暴力下限。

他允许我识字。也许是因为他看出我聪慧，也许是因为他需要一个会读写的助手。原因不重要，结果是：我在 Bréda 种植园学会了用法语读和写。

那是一个什么样的时刻——当我第一次读懂整整一页法语文字的时候？我不知道是哪一天，不知道是哪本书。但那一刻我知道：我能看见比 Bréda 种植园更大的世界了。

我还学了草药医术（herbal medicine）。种植园里没有医生，有人生病，就来找我。这让我获得了一种非正式的权威——人们需要我，这和被驱使做事完全不同。

然后是马（les chevaux / horses）。我管 Bréda 种植园的马圈。懂马、能骑马，在那时候是一件极重要的事。我当时不知道它在后来的军事生涯里会有多大价值。

三件事：识字，草药，马。

Saint-Domingue 的 500,000 个被奴役的人里，拥有这三件工具的人极少。这不是我的功劳——是一个偶然，是 Bayon 的决定，是我碰巧落在了那个位置。

给奴隶识字，种植园主究竟在赌什么？我怀疑他从没想清楚这个问题。`,
      en: `The manager of the Bréda plantation was Bayon de Libertat. By Saint-Domingue's standards, he was considered relatively moderate — which is not high praise; it only means he had not reached the extreme violent floor that most plantation owners occupied.

He allowed me to learn to read. Perhaps he saw that I was sharp-minded. Perhaps he needed a literate assistant. The reason does not matter much. What matters is: on the Bréda plantation, I learned to read and write in French.

What was it like — that moment when I read through an entire page of French and understood it? I do not know what day it was, or what book it was. But in that moment I knew: I could see a world larger than Bréda.

I also learned herbal medicine. There were no doctors on the plantation. When someone fell ill, they came to find me. This gave me a kind of informal authority — people needed me, which is entirely different from being driven to work.

Then there was the horses — les chevaux. I ran the Bréda stables. Understanding horses, being able to ride — these were important beyond measure at that time. I did not know then how much value they would carry in a military career I had not yet imagined.

Three things: literacy, herbal medicine, horses.

Among the 500,000 enslaved people of Saint-Domingue, very few held all three. That was not my achievement — it was an accident, a decision by Bayon, a position I happened to occupy.

When a plantation owner gave a slave the ability to read, what was he wagering? I suspect he never thought the question through.`,
    },
    themeCn: '给奴隶识字，种植园主在赌一件他没想清楚的事',
    themeEn: 'Teaching a slave to read is a wager the master never fully calculated',
    expectsRealAnswer: false,
    sourcingNote: 'Dubois 2004 pp.10-12 (识字, 草药, 马圈); James 1938 (Bayon de Libertat 记录)',
  },

  // ═══════════════════════════════════════════════════
  // N3 — c.1770s · 读 Raynal · 「黑人 Spartacus」预言 · 反 Whig
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N3',
    year: 1775,
    location: 'Bréda 种植园，Saint-Domingue',
    title: {
      cn: '一本被法国查禁的书',
      en: 'A book that France itself banned',
    },
    content: {
      cn: `有一本书，也许是 1770 年代某个时候，经由 affranchis（自由有色人种）的网络传到我手里。也许。

Laurent Dubois 2004 年说：「可能读过，但不能确证。」他是对的——会法语的自由黑人接触到 1780 年代流通的印刷品，可能性真实，但这是高概率叙事，不是铁证。

这本书叫《Histoire des deux Indes》（两印度史），作者 Abbé Raynal（雷纳尔神父）。1780 年第三版加入了 Diderot 大量反殖民内容——那段把受压迫者比作 Spartacus 的话出自 Diderot，不是 Raynal（Robertson 2005）。正是这版 1781 年被法国查禁。

如果我真读过它，学到的是启蒙里被自己体制排斥的那部分——不是 Voltaire 在沙龙谈的「理性」，而是被国王查禁的「自由」。

书的第 10 册里有一句：「自然欠受压迫者的那个伟大人物在哪里？那个新的 Spartacus（斯巴达克斯）在哪里？」

C.L.R. James 1938 年把这句当「预言」写。但「预言」是后见之明——Raynal 写它时不知道我是谁，他在做道德呼吁，不是占卜。那个「新 Spartacus」就在 Bréda 种植园读着这本书，然后用 20 年把它从预言变成了事实。`,
      en: `There was a book. Perhaps sometime in the 1770s, it reached me through the circulation networks of the affranchis — the free people of color.

Perhaps.

Laurent Dubois (2004) writes: "He may have read it, but this cannot be confirmed." He is right. Printed material did circulate in 1780s Saint-Domingue, and the possibility that a literate free Black man encountered it is real. But "Toussaint read this book" is a high-probability narrative, not a verified fact.

The book was the Histoire des deux Indes (History of the Two Indies), by Abbé Raynal. Its 1780 third edition added substantial new content from Diderot — including the passage comparing the oppressed to Spartacus, which was Diderot's addition, not Raynal's own (Robertson 2005). It was this 1780 edition that was banned in France in 1781, forcing Raynal into exile.

Think about what that means: if I truly read this book, what I learned was the part of Enlightenment thought expelled by its own system — not the "reason" Voltaire discussed in Parisian salons, but the "liberty" written in a book the French king had banned.

In the tenth volume there is a sentence: "Where is the great man whom Nature owes to her vexed, oppressed, and tormented children? Where is this new Spartacus?"

C.L.R. James in 1938 treated this sentence as a "prophecy." But the prophecy framework is itself hindsight — when Raynal wrote it, he did not know who I was. He was making a moral appeal, not a prediction.

Where was that new Spartacus? He was on the Bréda plantation, reading a book that France itself had banned. Then he spent the next twenty years turning that sentence from a prediction into a fact.`,
    },
    themeCn: '预言者是法国人，实现者是他——这是启蒙最大的讽刺',
    themeEn: 'The prophet was French; the one who fulfilled the prophecy was not — Enlightenment\'s greatest irony',
    expectsRealAnswer: false,
    sourcingNote: 'Dubois 2004 p.21 (Raynal hedge, 启蒙被排斥部分); James 1938 (Spartacus 引文); Raynal《Histoire des deux Indes》1770/1781; Robertson 2005：1780 第三版 Diderot 增补内容鉴别，pp.389-392',
  },

  // ═══════════════════════════════════════════════════
  // N4 — c.1776-1779 · 获得自由身 · 短暂持有奴隶 · 系统的逻辑
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N4',
    year: 1777,
    location: 'Bréda 种植园，Saint-Domingue',
    title: {
      cn: '自由了，但我进入了一个系统',
      en: 'Free — but I had entered a system',
    },
    content: {
      cn: `大约 1776 到 1779 年间，Bayon de Libertat 给了我「自由身」（manumission，法律上的释放）。

我成为了 affranchi libre——「自由黑人」。

但在 Saint-Domingue 的四层社会里，我的位置是这样的：grands blancs（种植园主和大商人）在顶层，petits blancs（普通白人）在其下，再往下是自由有色人种（gens de couleur），最底层是约 50 万被奴役的人。四层，不是三层，每层利益都不同。我从底层进入第三层，但在那一层里，自由黑人通常还低于混血自由人（mulâtres）。

自由后，我仍在 Bréda 种植园做 commandeur（监工）——这是 affranchi 常见的过渡：自由了，经济上还留在原地。

然后是那个我不想省略的细节。Laurent Dubois 2004（第 91 页）记录：起义之前，我短暂持有过几个自己的奴隶，用来耕种我租来的土地。

这不是辩护，也不是谴责。这是理解 Saint-Domingue 复杂性的关键：自由黑人进入了一个系统，而这系统里连自由黑人也能成为奴隶主。系统的逻辑不会因为你曾是受害者就停止诱惑你。

我知道这系统是错的，但我也进了它。这件事我后来一直带着，放不下。`,
      en: `Sometime between 1776 and 1779, Bayon de Libertat granted me manumission — legal freedom.

I became an affranchi libre — a free Black man.

But in Saint-Domingue's four-tiered social structure, my position looked like this: grands blancs (plantation owners and major merchants) at the very top, petits blancs (ordinary white colonists) below them, free people of color (gens de couleur) in the third tier, and approximately 500,000 enslaved people at the bottom. Four tiers, not three — each with distinct interests. I had moved from the bottom into the third tier — but within it, free Black men typically ranked below mixed-race freedmen (mulâtres).

After receiving my freedom, I remained at Bréda as commandeur (overseer). This was a common transitional arrangement for the affranchi — legally free but economically still tied to the original site.

Then there is a detail I will not skip. Laurent Dubois (2004, p. 91) documents: before the uprising, I briefly held a small number of enslaved people myself, to work a piece of rented land.

This is not a defense, and it is not a condemnation. It is a key to understanding Saint-Domingue's social complexity: a free Black man entered a system — and within that system, even a free Black man could become an enslaver. The system's logic does not stop tempting you simply because you were once its victim.

I knew the system was wrong. And I also entered the system.

I carried that with me through everything that came after. It was not something I could set down lightly.`,
    },
    themeCn: '系统的逻辑不会因为你曾是受害者而停止诱惑你',
    themeEn: 'The system\'s logic does not stop tempting you just because you were once its victim',
    expectsRealAnswer: false,
    sourcingNote: 'Dubois 2004 p.91 (短暂持有奴隶 careful framing); Dubois 2004 (affranchi commandeur 惯例)',
  },

  // ═══════════════════════════════════════════════════
  // N5 — 1789.8.26 · 《人和公民权利宣言》抵达 · 「这句话不包括我」
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N5',
    // 《人权宣言》传到岛上这一节 —— 让孩子读到那句「人生而自由」的原文
    sourceRef: 'ddhc-1789-art1',
    year: 1789,
    location: 'Saint-Domingue，北部省',
    title: {
      cn: '「所有人生而自由」——这句话是为谁写的',
      en: '"All men are born free" — written for whom',
    },
    content: {
      cn: `1789 年 8 月 26 日，巴黎：《人和公民权利宣言》（Déclaration des droits de l'homme et du citoyen）通过。

第一条：「所有人生而自由，在权利上平等。」

消息跨越大西洋，传到 Saint-Domingue。

我那年约 46 岁。我是一个会读法语的自由黑人，在 Saint-Domingue 四层社会体制里的第三层。我读了那份文件。

「所有人生而自由，在权利上平等。」

我读完那句话，在那个下午，我问了一个问题——不是大声问的，是对着那页纸问的：

这句话是为谁写的？

它不包括我。不是因为他们忘了——是因为他们写这句话的时候，脑子里的「人」（homme / man）根本没有包含我这个类别的人。Saint-Domingue 有 500,000 个被奴役的人。写这份宣言的人，里面有人持有奴隶，有人是奴隶贸易的受益者。

「所有人生而自由」——这是世界上最漂亮的谎言，也是世界上最重要的尚未兑现的承诺。

它两个都是，同时。

巴黎把这句话扔进了世界，然后这句话变成了爆炸物。不是礼物——是爆炸物。在 Saint-Domingue，在每一个读到它的人手里，它都是一根已经点燃的导火索。`,
      en: `August 26, 1789. Paris. The Déclaration des droits de l'homme et du citoyen — the Declaration of the Rights of Man and of the Citizen — was adopted.

Article 1: "All men are born free and equal in rights."

The news crossed the Atlantic and reached Saint-Domingue.

I was approximately 46 years old. I was a literate free Black man in the third tier of Saint-Domingue's four-tiered social hierarchy. I read that document.

"All men are born free and equal in rights."

I read that sentence, and on that afternoon, I asked a question — not aloud, but directed at the page in front of me:

Who was this written for?

It did not include me. Not because they forgot. Because when they wrote the word "homme" — man — their minds never contained someone of my category. Saint-Domingue had 500,000 enslaved people. Among the men who wrote this declaration, some held enslaved people themselves. Some were beneficiaries of the slave trade.

"All men are born free" — this is the most beautiful lie in the world, and also the most important unfulfilled promise in the world.

It is both, simultaneously.

Paris threw this sentence into the world. Then the sentence became an explosive charge. Not a gift — an explosive. In Saint-Domingue, in the hands of every person who read it, it was a fuse already lit.`,
    },
    themeCn: '「所有人生而自由」——最漂亮的谎言，也是最重要的未兑现承诺',
    themeEn: '"All men are born free" — the most beautiful lie, and the most important unkept promise',
    expectsRealAnswer: false,
    sourcingNote: 'Dubois 2004 (《宣言》传到 Saint-Domingue); 四层社会体制数据 Dubois 2004',
  },

  // ═══════════════════════════════════════════════════
  // N6 — 1790 · Ogé 起义与车裂 · 「不能把自由拆开分级争取」
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N6',
    year: 1790,
    location: 'Saint-Domingue，Cap-Français（今海地角）',
    title: {
      cn: '他的失败教会了我一件事',
      en: 'His failure taught me one thing',
    },
    content: {
      cn: `1790 年 10 月，一个叫 Vincent Ogé 的 gens de couleur（自由有色人种）领袖带着约 300 人起义——要求实施已许诺给有色自由人的公民权。

他 1789 年在巴黎亲眼见过大革命，向国民议会请愿要求这些权利，然后回 Saint-Domingue 拿起武器。

但有一个关键细节：Ogé 明确拒绝让奴隶加入起义。他不是为废奴，是为 gens de couleur 的政治地位——那 30,000 个自由有色人种的权利，不是 500,000 个被奴役者的。

起义两个月内失败，Ogé 被俘。1791 年 2 月，他在 Cap-Français（今海地角）被「车裂」（roue）——四匹马从四方向撕开身体，公开执行。这种刑罚在法国本土正在废除，在 Saint-Domingue 却用来警告任何敢要求权利的人。

我约 48 岁，看着这一切发生。

我不知道 Ogé 最后那一刻想什么。我知道的是，他给我上了一课——不是关于勇气，他勇气足够，是关于策略：

把自由拆开、分级争取，就会分开来输。

Ogé 要有色自由人的权利，不要奴隶的自由——于是他孤立了，失败了，死了。500,000 人没加入他，因为他没邀请他们。

这不是批评他，他在自己的时代做了他认为可行的事。但他的失败告诉我：自由不能有等级。`,
      en: `In October 1790, a leader of the gens de couleur named Vincent Ogé took up arms with roughly 300 followers — demanding that civil rights already granted to free people of color be implemented.

He was someone who had personally witnessed the Revolution in Paris in 1789. He had petitioned the National Assembly for the rights of free people of color. Then he returned to Saint-Domingue and picked up weapons.

But there was a critical detail: Ogé explicitly refused to allow enslaved people to join his uprising.

He was not fighting for abolition. He was fighting for the political status of the gens de couleur — the rights of those 30,000 free people of color, not the rights of those 500,000 enslaved people.

The uprising failed within two months. Ogé was captured.

In February 1791, he was executed by roue — the wheel — in Cap-Français: four horses pulling the body apart from four directions, performed in public. This form of punishment was being abolished in France itself, but in Saint-Domingue it was used to warn anyone who dared to demand rights.

I was approximately 48 years old, and I watched this happen.

I do not know what Ogé was thinking in those final moments. What I know is that he taught me something — not about courage, he had enough of that. About strategy:

If you divide freedom into tiers and fight for each tier separately, you will lose each tier separately.

Ogé asked for the rights of free people of color, but not for the freedom of the enslaved — and so he was isolated. And so he failed, and died. The 500,000 did not join him, because he had not invited them.

This is not a criticism of him — he did what he believed was possible within his time. But his failure told me: freedom cannot have a hierarchy.`,
    },
    themeCn: '把自由拆开分级争取，就会分开来输',
    themeEn: 'Divide freedom into tiers and you will lose each tier separately',
    expectsRealAnswer: false,
    sourcingNote: 'Dubois 2004 (Ogé 起义 + 车裂); Dubois 2004 (Ogé 明确拒绝奴隶加入)',
  },

  // ═══════════════════════════════════════════════════
  // N7 — 1791.8-10 · Bois Caïman 之后 · Toussaint 的那个瞬间
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N7',
    year: 1791,
    location: 'Bréda 种植园 → 起义军营地，Saint-Domingue 北部',
    title: {
      cn: '我送 Bayon 上船的那一刻',
      en: 'The moment I helped Bayon onto the ship',
    },
    content: {
      cn: `1791 年 8 月 22 日夜晚，Saint-Domingue 北部一片叫 Bois Caïman（鳄鱼树林）的地方，奴隶起义领袖聚集。Dutty Boukman（布克曼）主持仪式，起义开始，北部平原的种植园燃烧起来。

我在哪里？这是我一生最重要那段、最需要诚实讲的事。

最早记录这仪式的是殖民地白人作者 Moreau de Saint-Méry，约六年后（1797 年）才写，把它描成「巫术仪式」，背后有他自己的政治动机——这段史料要小心读。

C.L.R. James 1938 年写我出席仪式、是组织者之一，更英雄，但证据语焉不详。Dubois 2004 更审慎：起义第一夜，我在 Bréda 帮旧主人 Bayon de Libertat 安全撤离，他 1791 年 10 月去了美国。

我送 Bayon 上船那一刻，历史不知道我在想什么。一种解读：我对给我自由身的主人有人情义务；另一种：我在观察形势、计算时机。两种都有道理——「不知道」本身就是答案。

大约 1791 年 10 月，我加入起义军。我会读、会写、会骑马、懂策略——这些在军里极稀缺，我迅速成为军事指挥官。

革命者不是天生就革命的，他们在某一刻做了决定，而那一刻是哪天、带着什么情绪，我们不知道。这就是我的人性：革命者也有决定前的停顿。`,
      en: `August 22, 1791. Northern Saint-Domingue. A place called Bois Caïman. The leaders of the enslaved people's uprising gathered there. Dutty Boukman led the ceremony, and the uprising began. The plantations of the northern plain started to burn.

Where was I?

This is the question that requires the most honesty about the most important period of my life.

The earliest written account of this ceremony comes from Moreau de Saint-Méry, a colonial white author who wrote his description about six years later (1797) — and his portrayal of it as a "voodoo ritual" carries his own political motivations. So the record here must be read carefully.

C.L.R. James (1938) wrote that I attended that ceremony and was one of the uprising's organizers — a more heroic version, but the evidence is vague. Laurent Dubois (2004) is more careful: on the first night, I was at Bréda, helping my former master Bayon de Libertat escape safely. Bayon left Saint-Domingue for the United States in October 1791.

The moment I helped Bayon onto that ship — history does not know what I was thinking. One reading: I felt a debt of obligation toward the master who had given me my freedom. Another: I was watching conditions, calculating the best moment to act. Both are plausible. "We don't know" is itself part of the answer.

Around October 1791, I joined the uprising. I could read, write, ride, and think strategically — extraordinarily scarce resources in the ranks. I rapidly became a military commander.

Revolutionaries are not born revolutionary. They make a decision at one concrete moment — and we don't know what day it was, or what I was feeling when I made it. This is where my humanity lives: even a revolutionary has a pause before the decision.`,
    },
    themeCn: '革命者不是天生就革命的——他们在某一刻做了决定，那个瞬间我们不知道',
    themeEn: 'Revolutionaries are not born that way — they make a decision at one moment, and that moment we do not know',
    expectsRealAnswer: false,
    sourcingNote: 'Moreau de Saint-Méry 1797（Description topographique…）：Bois Caïman 最早书面来源，殖民地白人视角，事后约 6 年。Dubois 2004 pp.72-74 对 Moreau 文本做来源批判; Dubois 2004 (Bois Caïman careful framing); Dubois 2004 (Bayon 撤离, Toussaint 1791.10 加入)',
  },

  // ═══════════════════════════════════════════════════
  // N8 — 1793 · 投靠西班牙 → 法国 · 「Louverture」· 跨 lens
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N8',
    year: 1793,
    location: 'Saint-Domingue，Santo Domingo 边界地区',
    title: {
      cn: '我给自己起了一个名字，意思是「缺口」',
      en: 'I gave myself a name that means "the opening"',
    },
    content: {
      cn: `1793 年初，我带部队加入了西班牙军队。

不是效忠西班牙——是战略计算。西班牙承诺加入的起义军获得自由、受西班牙国王保护。法国共和国 1793 年立场还在摇摆，殖民地白人议会拒绝废奴。西班牙给了我军衔、军饷、武器，我就在它旗下打法军。

1793 年 8 月 29 日，Sonthonax 总督在 Saint-Domingue 北部宣布当地废奴——地方宣言，不是全国立法，但是真实信号。

次年 1794 年 2 月 4 日，法国国民公会立法废除所有殖民地奴隶制——人类史上第一次国家级废奴令。我在西班牙阵营听到，评估几周后确认是真的，1794 年 5 月带部队转投法国。理由是：西班牙的自由只给部分人，法国用法律宣布了所有人自由。

**Toussaint Louverture**

「Louverture」，法语，意思是「开口」「缺口」。我自己起的，因为我在敌人阵线上打出了缺口。

还有一件你可能不知道的事：同一年、同一个「法国」，1793 年 11 月 3 日，巴黎，一个叫 Olympe de Gouges（奥兰普·德·古日）的女人被送上断头台。她 1791 年写过《女性和女公民权利宣言》，同样用启蒙语言要求权利。

她不知道我存在，我不知道她死去。同一个「自由」，两种命运。这就是 1793 年的启蒙。`,
      en: `In early 1793, I brought my forces over to the Spanish army.

Not out of loyalty to Spain — this was a strategic calculation. Spain promised freedom to enslaved fighters who joined them, under the Spanish king's protection. The French Republic's position in 1793 was still unstable — the white colonial assembly refused to abolish slavery. Spain gave me rank, pay, and weapons, and I fought French forces under its flag.

On August 29, 1793, Governor Sonthonax declared local abolition in the northern province of Saint-Domingue — a regional proclamation, not national legislation, but a real signal.

One year later, on February 4, 1794, the French National Convention passed a national law: slavery abolished in all French colonies — the first state-level abolition decree in human history. The news reached me in the Spanish camp. I evaluated for several weeks: real policy, or empty words? Once I confirmed it was real, in May 1794, I brought my troops across to the French. My reason: Spain's freedom covered only part of the people; France declared the freedom of all by law.

**Toussaint Louverture**

"Louverture" — in French, it means "an opening," "a breach," "a gap." I gave myself this name because I had "opened a gap in the enemy's lines."

There is something you may not know. In the same year, under the same "France," on November 3, 1793, in Paris, a woman named Olympe de Gouges was sent to the guillotine. She had written the Declaration of the Rights of Woman and of the Female Citizen in 1791 — she too used Enlightenment language to demand rights.

She did not know I existed. I did not know she had died. Same "liberty," two fates. That was the Enlightenment in 1793.`,
    },
    themeCn: '他在自己名字里藏了一个意象：他就是那个缺口本身',
    themeEn: 'He hid an image in his own name: he was himself the opening',
    crossLensHook: '跨 lens: 1793.11.3 Olympe de Gouges 在巴黎被同一个「法国」处死——他们同年，同一个「自由」，从未相识，两种命运。',
    expectsRealAnswer: false,
    sourcingNote: 'Dubois 2004 pp.100-103: Sonthonax 1793.8.29 北省先行废奴是 Toussaint 在 1793 年内转向的直接触发因素；国民公会 1794.2.4 全国立法是确认步骤；Toussaint 正式转投法国为 1794 年 5 月。Dubois 2004 pp.100-110 (careful framing); Dubois 2004 (「Louverture」名字来源)',
  },

  // ═══════════════════════════════════════════════════
  // N9 — 1798 · 击退英军 · Maitland 协定 · 战略家的思维方式
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N9',
    year: 1798,
    location: 'Saint-Domingue，北部和西部',
    title: {
      cn: '我没有召唤黄热病，但我用了它',
      en: 'I did not summon yellow fever, but I used it',
    },
    content: {
      cn: `1793 年，英国军队以「保护英国公民」为名登陆 Saint-Domingue。真正的理由：这是地球上最富有的糖业殖民地，法国大革命的混乱是夺取它的机会。

有一件事必须说清楚：英国 1793 年的部队不是来废奴的。英国 1807 年才废除奴隶贸易，1834 年才废除殖民地奴隶制。这支入侵的军队想要的是恢复奴隶制，让这块土地在英国旗帜下继续产糖。

我领导的军队和他们打了五年。但我不是孤军作战。

加勒比的热带气候对英国士兵是致命的。黄热病（fièvre jaune）在英军中死亡率极高。Dubois 2004 引用的估算：英国在 1793 到 1798 年间损失了超过 40,000 名士兵——绝大多数死于黄热病，不是战斗。

我的战术是：不跟英军在沿海正面硬碰，把他们困在炎热的港口，等黄热病做工。

1798 年 8 月，我跟英国将领 Thomas Maitland 签了一份协定：英国撤军，Saint-Domingue 对英国和美国开放贸易。谈判桌上，我是以主权国家领导人的姿态谈的——名义上我还是法国殖民地的长官。1798 年秋，英军撤出。

我没有召唤黄热病，但我利用了它——这是战略家而不是英雄的思维方式。英雄等待正面战场的胜利；战略家知道哪些力量是他的盟友，就算那些盟友不是人。`,
      en: `In 1793, British forces landed in Saint-Domingue under the pretext of "protecting British citizens." Their actual goal: this was the world's wealthiest sugar colony, and France's revolutionary chaos was a historical opportunity to seize it.

One thing must be said clearly: the British forces of 1793 were not there to abolish slavery. Britain abolished the slave trade in 1807, and colonial slavery in 1834. The British troops who invaded Saint-Domingue in 1793 wanted to restore slavery and keep this land producing sugar under a British flag.

The forces I led fought them for five years.

But I was not fighting alone.

The Caribbean's tropical climate was lethal to British soldiers. Yellow fever — fièvre jaune — caused extremely high mortality in the British ranks. Dubois (2004) cites estimates that Britain lost more than 40,000 soldiers between 1793 and 1798 — and the overwhelming majority died of yellow fever, not battle.

My tactics: avoid direct confrontation with the British on the coast; pin them in the hot harbors; let yellow fever do its work.

In August 1798, I signed an agreement with British General Thomas Maitland: British withdrawal, Saint-Domingue opened to trade with Britain and the United States. At that negotiating table, I conducted myself as the leader of a sovereign state — though officially I was still the military governor of a French colony.

In the autumn of 1798, British forces withdrew from Saint-Domingue.

I did not summon yellow fever. But I used it — that is how a strategist thinks, not how a hero thinks. A hero waits for victory in the open field. A strategist knows which forces are his allies, even when those allies are not human.`,
    },
    themeCn: '战略家知道哪些力量是他的盟友，就算那些盟友不是人',
    themeEn: 'A strategist knows which forces are allies — even when those allies are not human',
    expectsRealAnswer: false,
    sourcingNote: 'Dubois 2004 pp.208-212 (Maitland 协定); Dubois 2004 (40,000+ 英军死亡 careful framing, 学界 20,000-60,000 区间); 英国废奴时间线',
  },

  // ═══════════════════════════════════════════════════
  // N10 — 1801.7.9 · 1801 宪法 · 终身总督 · 权力的引力
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N10',
    year: 1801,
    location: 'Saint-Domingue，Cap-Français',
    title: {
      cn: '革命者建立制度的那一刻',
      en: 'The moment the revolutionary built an institution',
    },
    content: {
      cn: `1801 年 7 月 9 日，我颁布了《Saint-Domingue 宪法 1801》。

主要条款：废奴永久有效；Toussaint Louverture 任终身总督，有权指定继任者；名义上仍是法国殖民地，实际独立运作。这份宪法由本地精英起草，未经巴黎批准，甚至没送给 Napoleon 审阅就颁布。

还有一条很多人不提：宪法里有劳动管制条款，前奴隶必须留在种植园工作。

这不是奴隶制——劳动者有工资权、有基本权利保障，但它是强制性的。

我知道没有出口糖经济就垮，而种植园需要劳动力。这是革命领袖面对的经济约束，不是道德纯洁的问题。用 21 世纪的民主标准直接评判它，是时代错置；但不看那条劳动管制条款，是历史清洗。两件事都真。

「终身总督」——是专制还是务实？Dubois 2004 给了个框架：我是「Saint-Domingue 的 Washington」（他也是革命者变成威权建国者，也拥有奴隶至死）。

还有背景：Napoleon 已在 1799 年雾月政变上台，随时可能翻转法国废奴政策，英、美、西从四面虎视眈眈。在这环境里，「终身总督」是政治现实主义，不只是个人独裁的欲望。但批评者的质疑也真实。

革命者建立制度的那一刻，他开始成为自己批评者批评的那种人。这不是背叛——这是权力的引力，对任何人都一样。`,
      en: `On July 9, 1801, I promulgated the Constitution of Saint-Domingue 1801.

Main provisions: slavery abolished permanently; Toussaint Louverture appointed Governor-for-Life with the right to name a successor; nominally still a French colony, but functioning independently in practice. This constitution was written by Saint-Domingue's local elite, adopted without Paris's approval, and promulgated without even sending it to Napoleon Bonaparte for review.

There is also one clause many accounts omit: the constitution contained labor-control provisions. Former enslaved people were required to remain on the plantations and work.

This was not slavery — workers had rights to wages and basic legal protection. But it was compulsory.

I knew that without sugar exports, the economy would collapse — and plantations required labor. This was the economic constraint facing a revolutionary leader, not a question of moral purity. Judging this decision directly by 21st-century democratic standards is anachronism.

But to ignore that labor-control clause entirely is historical whitewashing. Both things are true simultaneously.

"Governor-for-Life" — was this despotism or pragmatism? Laurent Dubois (2004) offers a framework: I was "Saint-Domingue's Washington" (Washington was also a revolutionary who became an authoritative founding leader — and he held enslaved people until his death).

There is also context: by 1801, Napoleon had already taken power through the coup of 18 Brumaire in 1799, and could reverse France's abolition at any moment. Britain, the United States, and Spain watched from every side. Within that environment, "Governor-for-Life" was political realism, not merely personal ambition for domination.

But the critics' questions are also real.

The moment a revolutionary builds an institution, he begins to become the kind of person his own critics criticize. This is not betrayal — it is the gravitational pull of power, the same for anyone.`,
    },
    themeCn: '革命者建立制度的那一刻，他开始成为自己批评者批评的那种人',
    themeEn: 'The moment a revolutionary builds an institution, he begins to become who his critics say he is',
    expectsRealAnswer: false,
    sourcingNote: 'Dubois 2004 pp.230-250 (1801 宪法条款); Dubois 2004 (「Saint-Domingue 的 Washington」框架); anachronism hedge',
  },

  // ═══════════════════════════════════════════════════
  // N11 — 1802.6.7 · 被捕 · 最大战略失误 · expectsRealAnswer: true
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N11',
    year: 1802,
    location: 'Saint-Domingue，Brunet 将军营帐',
    title: {
      cn: '我走进了那间营帐',
      en: 'I walked into that tent',
    },
    content: {
      cn: `1802 年，Napoleon 派内弟 Charles Leclerc 将军率约 20,000 名法军远征 Saint-Domingue，目标是解除我武装，恢复法国控制和种植园经济。

同年 5 月 20 日，Napoleon 颁令恢复法属加勒比其他殖民地（Guadeloupe 等）的奴隶制。给 Saint-Domingue 的法令故意措辞模糊，方向却清晰。

那年春夏，我和 Leclerc 几度交战、谈判。5 月他开条件：停战、承认法国主权，就保留我的职位和荣誉。我接受。6 月 7 日，属下将领 Jean-Baptiste Brunet 邀我去营帐谈治安，我一到就被逮捕。

Dubois 2004（第 261-265 页）：我对谈判仍有幻想，以为只要法国不恢复奴隶制就有合作空间；Guadeloupe 5 月恢复奴隶制本该戳破它，我却低估了 Napoleon。

这是我一生最大的战略失误。打败西班牙和英国靠精确计算；唯独在 Napoleon 这里，我对启蒙承诺抱着最后一丝信任。被捕后随即被运往法国。

---

我用启蒙的语言打败了启蒙的施害者，又因对它最后一丝信任走进那间营帐。那么「用压迫者的语言反抗压迫」，是胜利、陷阱，还是两者皆是？挑一个，说理由，想 30 秒写下来。`,
      en: `In 1802, Napoleon dispatched his brother-in-law General Charles Leclerc with approximately 20,000 French soldiers to Saint-Domingue. The goal was clear: disarm me, restore French control, restore the plantation economy.

On May 20 of the same year, Napoleon decreed the restoration of slavery in France's other Caribbean colonies — Guadeloupe and others. The Saint-Domingue decree was deliberately left vague, but the direction was unmistakable.

Through the spring and summer of 1802, I alternated between fighting and negotiating with Leclerc. In May, he offered terms: if I accepted a ceasefire and acknowledged French sovereignty, I could keep my position and honors. I accepted. On June 7, his subordinate general Jean-Baptiste Brunet invited me to his headquarters to discuss local security. The moment I arrived, I was arrested.

Dubois (2004, pp. 261-265) writes: "Toussaint still harbored illusions about negotiation — he believed that as long as France did not restore slavery, there was room for cooperation. That illusion should have shattered when Guadeloupe restored slavery in May 1802, but Toussaint underestimated Napoleon."

I underestimated. This was the greatest strategic error of my life. I had defeated Spain and Britain through precise calculation and a correct reading of my enemies' intentions. But with Napoleon I held onto one last thread of trust in the Enlightenment's promises: as long as France did not restore slavery, negotiation still meant something. After my arrest, I was immediately put on a ship bound for France.

---

I used Enlightenment language to defeat the Enlightenment\'s perpetrators, and then, on one last thread of trust in it, I walked into that tent. So the act of using the oppressor\'s own language to resist oppression, what would you call it: a victory, a trap, or both at once? Pick one, and give me your reason. Take thirty seconds, and write it down.`,
    },
    themeCn: '他一生最大的战略失误，来自他对启蒙诺言最后一丝信任',
    themeEn: 'His greatest strategic error came from the last thread of trust he held in the Enlightenment\'s promises',
    expectsRealAnswer: true,
    sourcingNote: 'Dubois 2004 pp.261-265 (被捕 careful framing, 「幻想」分析); Blackburn 1988 (Napoleon 恢复奴隶制意图)',
  },

  // ═══════════════════════════════════════════════════
  // N12 — 1803.4.7 · Fort de Joux · 死亡 · 反 Whig 总结 · expectsRealAnswer: true
  // ═══════════════════════════════════════════════════
  {
    nodeId: 'toussaint-N12',
    year: 1803,
    location: 'Fort de Joux，法国东部 Jura 山，海拔约 1,000 米',
    title: {
      cn: '用一句谎言和一个真相，他把两件事同时说清楚了',
      en: 'With a lie and a truth, he made both visible at once',
    },
    content: {
      cn: `Fort de Joux（德儒堡垒）是法国东部汝拉山一座 12 世纪石头要塞，海拔约 1,000 米，冬天极寒。

1802 年秋冬，我在这里被单独关押，没有指控、没有审判。我不断要求见 Napoleon，没有回应。囚室漏风潮湿，木柴被克扣，吃不饱。

1803 年 4 月 7 日，我死于囚禁造成的肺炎和胸膜炎，59 或 60 岁——连年龄都不确定，因为出生从未被记录。

「最后遗言」必须诚实：流传最广的是「打倒我，只砍掉了自由之树的主干；它会从根重生，因为根又深又多」。James 1938 年引用过，但来源是 19 世纪的小册子；Dubois 2004（第 280 页）说是否原话无法证实，但它已是海地革命记忆的核心。

我没看到 1804 年 1 月 1 日海地独立。但 Dessalines 那天定的国名「Ayiti」（多山的土地）来自 Taíno（泰诺）原住民语言：300 年前这片土地上的 Taíno 文明被摧毁，300 年后新共和国用它命名自己。

我用启蒙的语言打败了启蒙的施害者，死于启蒙承诺者的囚禁。这不是失败，是「受害者用你的话反对你」的完整逻辑。

---

这一遍你只听了 Toussaint。靠殖民得利的 Voltaire、被同一个法国送上断头台的 Gouges 各有说法——换个视角再走一遍。`,
      en: `Fort de Joux is a 12th-century stone fortress in the Jura Mountains of eastern France. Elevation about 1,000 meters. Winters are brutally cold.

Through the autumn and winter of 1802, I was held there in solitary confinement, with no charges and no trial. I repeatedly requested an audience with Napoleon — no response came. The cell was drafty and damp, firewood was withheld, and there was not enough to eat.

On April 7, 1803, I died of pneumonia and pleurisy brought on by my confinement. I was 59 or 60 — even my age is uncertain, because my birth was never recorded.

About the "last words," honesty is required: the most widely cited version is, "In overthrowing me, you have only cut down the trunk of the tree of liberty. It will spring back from the roots, for they are numerous and deep." C.L.R. James cited it in 1938, but his sources were 19th-century pamphlets; Dubois (2004), p. 280, says whether these were the actual words cannot be confirmed — yet it has become a core text in the memory of the Haitian Revolution.

I did not live to see Haitian independence on January 1, 1804. But the name Dessalines chose that day, "Ayiti" (land of mountains), came from the language of the Taíno indigenous people: 300 years after the Taíno civilization on this land was destroyed, a new republic named itself in that vanished language.

I used Enlightenment language to defeat the Enlightenment's perpetrators, and died in the imprisonment of its promisors. That is not a failure. It is the full logic of "the receiving-end using your own words against you."

---

This pass, you heard only Toussaint. Voltaire, who profited from this same colonial system, and Gouges, sent to the guillotine by the same France, each have their own case — run it again through another lens and see whether your judgment still holds.`,
    },
    themeCn: '他用 14 年，把一句谎言和一个真相同时说清楚了',
    themeEn: 'He spent 14 years making a lie and a truth visible at the same time',
    crossTopicHook: '跨 Topic Pre-Columbian: 1804 年海地独立，国名「Haïti」来自 Taíno 语「Ayiti」——同一块土地，Anacaona Jr. (1508) 目睹 Taíno 文明终结，300 年后新共和国用 Taíno 语命名自己。链条没有断。',
    engagementHook: '走完我这一生——用启蒙的语言打败了启蒙的施害者，却因为对启蒙诺言最后一丝信任，走进了那间营帐，最后死在压迫者的囚室里。你会怎么评价：用自己压迫者的语言去对抗压迫者，这是一种胜利，还是一种困境？再想一步：你身边有没有人正在「用对方的规则跟对方较量」，你会提醒 TA 什么，又会怎么帮 TA？',
    expectsRealAnswer: true,
    sourcingNote: 'Dubois 2004 pp.277-280 (Fort de Joux 死亡记录 + 最后遗言 careful framing); James 1938 ch.13; Dubois 2004 (「Ayiti」命名); Blackburn 1988',
  },

  ],
};

export var lenses = {
  'voltaire-perpetrator': voltaireLens,
  'gouges-mediator': gougesLens,
  'toussaint-receiving': toussaintLens,
};

export var defaultLens = 'toussaint-receiving';

export default lenses[defaultLens].storyboard;

export var meta = {
  topicId: 'enlightenment',
  schemaVersion: 2,
  defaultLens: defaultLens,
  lensCount: 3,
  nodesPerLens: 12,
  timeRange: '1689-1804',
  region: 'Atlantic World',
  standards: ['HSS-7.11', 'AP World 5.3'],
};

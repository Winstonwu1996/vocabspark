// Enlightenment T7 — Lens 1: Voltaire (François-Marie Arouet)
// perpetrator-actor | philosophe + Compagnie des Indes shareholder + anti-semitic lexicon author
//
// Topic: Enlightenment 1689-1789
// Voltaire 1694-1778: 最伟大的启蒙宣传家，同时是殖民体制的受益者
//
// 来源: Ian Davidson, Voltaire: A Life (2010) / Peter Gay, The Enlightenment Vol.1 (1966)
//       Jonathan Israel, Radical Enlightenment (2001) / John Robertson, The Case for the Enlightenment (2005)
//       Nicholas Cronk, The Cambridge Companion to Voltaire (2009) / Arthur Hertzberg, The French Enlightenment and the Jews (1968)
//       Laurent Dubois, Avengers of the New World (2004) / Londa Schiebinger, The Mind Has No Sex? (1989)
//       David Bien, The Calas Affair (1960)
//
// 跨 lens micro-detail:
//   N10: Voltaire 的正义射程止于欧洲 → 钩子 Toussaint Louverture (Lens 3)
//   N12: closing 时刻 → Gouges 1793 (Lens 2) + Toussaint 1797 (Lens 3)
//   N6: cross-Topic Reformation Luther 1517 vs Voltaire 1734
//   N7: cross-Topic SciRev Maria Winkelmann Kirch → Émilie du Châtelet
//
// per AUTHORING_PIPELINE.md 11 条铁律 + 第 12 条 (expectsRealAnswer 默认 false / N11+N12 only true)
// em-dash 规范: 单段最多 3 个

export var meta = {
  lensId: 'voltaire-perpetrator',
  name: 'Voltaire (François-Marie Arouet)',
  nameCn: '伏尔泰',
  role: 'perpetrator-actor',
  roleDescription: 'philosophe + Compagnie des Indes shareholder + anti-semitic lexicon author',
  description: 'The greatest Enlightenment propagandist who was simultaneously a colonial beneficiary, 1694-1778',
  descriptionCn: '最伟大的启蒙宣传家，同时是殖民体制的受益者，1694-1778',
  topicId: 'enlightenment',
  nodeCount: 12,
};

export var storyboard = [
  {
    nodeId: 'voltaire-N1',
    year: 1694,
    location: 'Paris, France',
    titleCn: '公证人之子，夹缝里长大',
    titleEn: 'The Notary\'s Son, Born Between Worlds',
    bodyCn: `我叫 François-Marie Arouet。1694 年 11 月 21 日，巴黎。

父亲是公证员——不是贵族，但也不是普通工人。他处理有钱人的文件，拿工资，送孩子上好学校。七岁那年，母亲死了。我不太记得她，只记得那之后家里安静了很多。

父亲要我学法律。法律有饭吃，法律稳当。我知道他的意思——我们这种家庭，出路在制度里，不在外面。

但我在制度的外面。

这才是问题所在。巴黎的上层社会有一条看不见的线：贵族在线的那边，工人和商人在线的这边，我们公证员家庭在线的边缘——靠近了，但没进去。我的父亲一辈子为贵族写文书，我一辈子可以继续写。或者，我可以做别的事。

我七岁失去母亲，我不知道这件事有多深地刻进我的性格里。我只知道，从那以后我开始习惯一件事：我不依赖任何东西的继续存在。权贵今天在，明天可以不在。身份今天稳，明天可以塌。在这种不稳里，语言是唯一真正属于我的工具——它在脑子里，没有人可以拿走。

这个认知对我后来的人生至关重要。我一生攻击贵族特权，同时费尽心思想挤进贵族圈；我批判「出身决定命运」，同时用笔为自己建造一个新的出身。

七岁的我当然不知道这些。我只是一个没有母亲的孩子，站在巴黎某条石头街道上，感觉这座城市太大，而我在它里面太小。`,
    bodyEn: `My name was François-Marie Arouet. November 21, 1694, Paris.

My father was a notary — not a noble, but not an ordinary laborer either. He handled documents for wealthy people, drew a salary, and sent his children to good schools. When I was seven, my mother died. I don't remember her clearly, only that the house became very quiet after.

My father wanted me to study law. Law meant steady work, law meant belonging to a system. I understood what he meant — for families like ours, security lay inside the structure, not outside it.

But I was outside the structure. That was the problem.

Paris's upper world had an invisible line. Nobles stood on one side; workers and merchants on the other; notary families like mine stood at the edge, close but not across. My father spent his life writing documents for nobles. I could spend mine doing the same — or I could do something else.

I lost my mother at seven. I don't know how deeply that cut into my character. I only know that after it I grew accustomed to one thing: I stopped relying on anything to keep existing. A patron could be there today and gone tomorrow. A social position could be solid this year and collapsed the next. In that instability, language was the only tool that was truly mine — it lived in my head, and no one could take it away.

That understanding would matter enormously for the rest of my life. I would spend decades attacking aristocratic privilege while simultaneously clawing my way into aristocratic circles. I would argue that birth should not determine fate while using my pen to build myself a new kind of birth.

Seven-year-old me knew none of this. I was just a child without a mother, standing on a stone street in Paris, feeling that the city was very large and I was very small inside it.`,
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

Ian Davidson 在 2010 年的《Voltaire: A Life》里写过：Voltaire 对某些耶稣会老师保持了终身的个人敬意，尽管他恨这个机构。我愿意承认这一点。恨一个机构和感谢塑造你的人，可以是同一时刻的两种情感。`,
    bodyEn: `The Jesuit school was the finest in Paris. My father enrolled me in 1704, when I was ten.

The curriculum was systematic: Latin, rhetoric, Greek, debate, theatre. Every element was useful, every element was shaping a particular mode of thought — the ability to assemble arguments into weapons, the ability to speak so precisely that the other person has no room to retreat.

Around 1708 there was a theatrical performance at the school. I played a Roman. I can't remember the character's name, only what I noticed standing on the stage — how the audience in the hall held its breath. Not because I was a gifted actor; I was fourteen, and I was not. But because language, in that space, was generating a kind of force, and I was its outlet.

I kept that moment for a long time.

Seven years after entering the school I left it, and began using the school's rhetorical tools to write satirical poems — including satires of the Jesuits themselves. They had trained someone capable of dismantling their own authority.

This is not ingratitude. It is a more interesting fact than ingratitude: your tools for critique often come from the thing you are critiquing. The Jesuits taught me how to organize an argument, how to find gaps in an opponent's words, how to achieve maximum impact with minimum text. Those tools would later appear in my *Lettres philosophiques*, in my *Dictionnaire philosophique*, in my letters to Frederick the Great and Catherine of Russia.

I was their student. I was their most persistent adversary. Both things were simultaneously true, and they were causally connected.

Ian Davidson's *Voltaire: A Life* (2010) notes that Voltaire maintained lifelong personal respect for certain individual Jesuit teachers, despite hating the institution. I can affirm this. Hating an institution and being grateful to the people who shaped you can coexist in the same moment.`,
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
    bodyCn: `1717 年 5 月，一张没有罪名、没有审判、没有陪审团的纸送到了我面前。国王密令——lettre de cachet。我被关进巴士底狱。

理由？我写了几首诗，嘲讽了摄政王菲利普·奥尔良公爵和他那些在巴黎圈子里流传的私生活谣言。诗在沙龙里传开了，传到了错误的人手里。

巴士底狱是一座中世纪要塞——厚墙，高塔，石头地面。关我进去的人大概以为这会让我停下来。

第一天，我要了纸和笔。

狱方给了——巴士底狱不是折磨人的地方，而是「存放让权贵不舒服的人」的地方，日子不算难过，就是不能出门。我在里面待了 11 个月。

我用这 11 个月写完了我的第一部悲剧《俄狄浦斯》(Œdipe)。1718 年出狱，这部戏在法兰西喜剧院连演 45 场，巴黎轰动。

国王把我关进来，但他忘了一件事：笔在我手里，不在他手里。书写是在墙里面发生的，墙里面发生的事，他没有办法查禁。等我带着写好的稿子走出来，他的命令已经晚了。

这是旧制度审查机制的根本困境——lettre de cachet 可以关住一个人的身体，但关不住他已经写好的东西，更关不住他出狱之后继续写的东西。印刷机在 1455 年之后让书传播的速度永远快过查禁的速度（§1 的那层地基）——而我，只是把自己的脑子当成了印刷机先运转一步。

同时，我在狱里也做了另一件事：我改了名字。Arouet 这个姓是公证员家庭的姓，是被人打了还不能要求决斗权的平民的姓。我开始使用 Voltaire 这个笔名。新名字，听起来像贵族领地。切割，是一种开始。`,
    bodyEn: `In May 1717, a piece of paper arrived before me with no stated charges, no trial, no jury. A royal sealed letter — *lettre de cachet*. I was sent to the Bastille.

The reason: I had written some poems mocking Regent Philippe d'Orléans — satirizing rumors about his private life that had been circulating in Paris salons. The poems spread through the wrong hands.

The Bastille was a medieval fortress — thick walls, high towers, stone floors. The people who put me there probably expected it to stop me.

On the first day I asked for paper and a pen.

They gave them to me. The Bastille was not a torture facility; it was a place to store people who made powerful individuals uncomfortable. Life inside was not pleasant, but it was manageable — you simply could not leave. I spent 11 months there.

I used those 11 months to finish my first tragedy, *Œdipe* (Oedipus). On my release in 1718, the play ran 45 performances at the Comédie-Française. Paris was delighted.

The King had locked me inside, but he had forgotten one thing: the pen was in my hands, not his. The writing happened inside the walls. What happened inside the walls, he could not ban. By the time I walked out with a finished manuscript, his orders were already behind the curve.

This was the fundamental problem with the old regime's censorship: a *lettre de cachet* could imprison a person's body, but it could not imprison what they had already written — and even less, what they would write once free. The printing press after 1455 made books spread faster than bans could follow. I had simply used my brain as the printing press and run it one step ahead.

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

之后三年是我人生里最有生产力的时间之一——我学了一口流利英语，读了 Newton，见了 Jonathan Swift，见了 Alexander Pope，进入了英国知识界的核心圈子。

我在英国「发现」了三件让我震惊的事：宗教宽容（多个新教派别合法并存），议会制度（国王受法律约束，1689 年《权利法案》），Newton 科学被社会全面接受（法国大学里还在教 Descartes 的涡旋宇宙论）。

这三件事我后来写进了《哲学书简》，用英国当镜子照法国——「你们看，英国可以这样，我们为什么不能？」

但有一件事，我需要承认。

我在英国走路的时候，脑子里装的是议会、是 Newton、是宗教宽容。我走过 Westminster 附近，我看着那些建筑，我想的是「议会比国王更理性」。

我没有想的是：英国是当时世界上最大的奴隶贸易国家。我没有想的是圈地运动把几十万农民赶离土地。我没有想的是爱尔兰天主教徒在英国体制下受到的系统性歧视。我的英国书信里，这些事一个字也没有。

John Robertson 在 2005 年的《The Case for the Enlightenment》里说过：philosophes 的「英国」和「荷兰」是示范模型，不是田野调查报告。他们用的是欧洲大陆政治论争的镜子，不是英国现实。

我用英国攻击法国。我报道的是我的论证，不是英国本身。

思想家的盲点，是他不去看的那一面。而他之所以不看，往往是因为他需要那面镜子保持完好。`,
    bodyEn: `In May 1726 I arrived in England.

The three years that followed were among the most productive of my life — I learned fluent English, read Newton, met Jonathan Swift, met Alexander Pope, and moved inside the center of the English intellectual world.

In England I "discovered" three things that astonished me: religious toleration (multiple Protestant denominations coexisting legally), parliamentary monarchy (the king under law, as the 1689 Bill of Rights established), and Newtonian science accepted across the whole society (while French universities still taught Descartes's vortex cosmology).

I put all three into my *Lettres philosophiques*, using England as a mirror to illuminate France — "Look, England manages it this way — why can't we?"

But there is something I should acknowledge.

When I walked the streets of England, my mind was full of Parliament, Newton, and religious toleration. I walked near Westminster, looked at those buildings, and thought: "A parliament is more rational than a king."

What I was not thinking: England was at that time the world's largest slave-trading nation. I was not thinking about the enclosure movement displacing hundreds of thousands of rural poor from their land. I was not thinking about the systematic oppression of Irish Catholics under the English system. In all my English letters, not a single word about any of this.

John Robertson, in *The Case for the Enlightenment* (2005), observed that the philosophes' "England" and "Holland" were rhetorical demonstration models, not field reports. They used those countries as mirrors for attacking Continental politics — not as honest surveys of those places.

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
    bodyCn: `1734 年，《哲学书简》（Lettres philosophiques）在法国出版——我已经先在英国以英文版本发行过。

书里有几章讲 Quakers，几章讲 Newton 和 Locke，几章讲英国宗教宽容，最后一章攻击 Pascal 的悲观人性论。每一章都在做同一件事：把英国摆在那里，让法国人自己看出差距。

巴黎当局的判决是：「对宗教和政治有危险倾向」，命令全部销毁。

但书已经在书架上了。

这是 1455 年 Gutenberg 印刷机建立的新规则——审查的速度永远追不上传播的速度。等教会拿到样本，开会决议，通知各地书商，书已经在五个城市的私人藏书里了。这和 Luther 1517 年把九十五条钉在教堂门上是同一场游戏，只是快了三百年：Luther 靠印刷机让他的文件在几周内传遍德意志；我把书散在几个城市的书架上，等查禁令到的时候，书已经在读者手里。

同一个结构，不同的时代速度。

我从巴黎逃出来，去找 Émilie du Châtelet。她把她在香槟省 Cirey-sur-Blaise 的庄园提供给我住。我就这样开始了接下来十五年在 Cirey 的生活。

命令还在追，书已经开始改变人的想法。一本书真正的危险不是它写了什么新事实——英国议会、Newton、Locke，法国知识界都知道这些。危险的是它给了人一个**比较的框架**：别的地方可以不同，那我们为什么不能？

一旦这个问题开始在人脑子里转，现有秩序的合法性就开始松动。`,
    bodyEn: `In 1734, the *Lettres philosophiques* was published in France — I had already released an English version in England earlier.

The book contained chapters on Quakers, chapters on Newton and Locke, chapters on English religious toleration, and a final chapter attacking Pascal's pessimistic view of human nature. Every chapter was doing the same thing: placing England in front of French readers and letting them draw the comparison.

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

我需要先把这句话说清楚，因为 18 世纪的书信和沙龙里，她主要以「Voltaire 的朋友」的身份出现在别人的叙述里。而这不是完整的事实。

她是 Marquise du Châtelet，贵族出身，从小接受了那个时代对一个女性来说极不寻常的数学和科学教育。她读拉丁文、意大利文、英文。她跟当时最好的数学家们来往。她写了《物理学要点》（Institutions de physique），一部系统梳理自然哲学的著作。更重要的是，她把 Newton 的《自然哲学的数学原理》（Principia Mathematica）翻译成法文，并加入了她自己对 Newton 力学的分析——这个译本今天仍然是《Principia》的标准法文版本。

而我呢？

1738 年，我出版了《牛顿哲学原理》（Éléments de la philosophie de Newton）——18 世纪最成功的 Newton 科学普及书之一。

但我需要承认：我在英国读《Principia》时，我能读懂的主要是 Newton 的通俗表述部分，我处理不了它的数学核心——那些拉丁文微积分几何证明。是 Émilie 把真正的 Newton 力学教给我的。她纠正了我的误解，她供给了物理学基础。我在书的前言里感谢了她——但前言之外，是我的名字在封面上，是我的声誉从这本书里增长。

她的名字在哪里？在前言里。

Londa Schiebinger 在 1989 年的《The Mind Has No Sex?》里梳理过这个结构性模式——女性的知识劳动，无论是翻译、教导、计算，都被降格为「帮助」，被记在男性名下，或者干脆不被记录。Émilie du Châtelet 是这个模式里一个典型的例子。

那天我拿到样书的时候，我有没有想到这件事不公平？历史没有记录我那一刻的想法。我只知道：我没有做什么来改变它。`,
    bodyEn: `Émilie du Châtelet was not my assistant.

I need to say that plainly, because in 18th-century letters and salon accounts she appears mostly as "Voltaire's companion" — and that is not the complete picture.

She was the Marquise du Châtelet, noble-born, and from childhood she received a scientific and mathematical education that was extraordinary for a woman of any era. She read Latin, Italian, and English. She corresponded with the finest mathematicians of the day. She wrote the *Institutions de physique* (1740), a systematic natural philosophy incorporating Leibnizian energy concepts. More significantly, she produced a full French translation and commentary of Newton's *Principia Mathematica*, including her own mathematical analyses — a translation that remains the standard French edition to this day.

And what did I do?

In 1738, I published *Éléments de la philosophie de Newton* — one of the most successful Newton popularizations of the 18th century.

But I should be honest: when I read the *Principia* in England, I could follow Newton's accessible narrative portions, but I could not handle the mathematical core — the geometrical proofs written in Latin calculus notation. It was Émilie who taught me the actual physics. She corrected my misunderstandings. She supplied the foundations. I thanked her in the preface — but outside the preface, my name was on the cover, and my reputation grew from the book.

Where was her name? In the preface.

Londa Schiebinger, in *The Mind Has No Sex?* (1989), documented this structural pattern: women's intellectual labor — translation, teaching, calculation — was consistently demoted to "assistance," credited to men or simply not credited at all. Émilie du Châtelet was a typical case in this pattern.

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
    bodyCn: `我不靠稿费生活。

18 世纪的作家版税养不活一个想要庄园和自由的人。我的财富来自三个地方：彩票套利（我发现了某些国家彩票的数学漏洞，组织财团系统性地套利），向法国贵族放短期高利贷，以及公司股份。

其中最重要的是 Compagnie des Indes——法国东印度公司——的股份。

Nicholas Cronk 在 2009 年的《The Cambridge Companion to Voltaire》里引用了 Voltaire 的财务记录：我在 1720 年代到 1750 年代持有 Compagnie des Indes 的股份，这是我投资组合的重要组成部分。我死时的遗产折合约 200 万法郎，在 18 世纪作家里是异常巨额的数字。

Compagnie des Indes 是什么？它的业务包括：与印度的纺织品贸易，与中国的茶叶贸易，向加勒比种植园运输物资，以及通过利润分成合同与西非奴隶贸易中间商关联。它是一台殖民地贸易机器，利润从整个帝国体系流过来，而这个体系的底层是种植园劳动力，种植园劳动力的底层是大西洋奴隶贸易。

这里要 careful framing：Voltaire 持有 Compagnie des Indes 股份是有历史记录的事实。「他是否清楚地知道他持有的股份里有多大比例的利润直接来自奴隶贸易」——Cronk 2009 hedge 了这个问题：Voltaire 知道自己投资的是一家殖民地贸易公司，但他是否追踪过每一项业务与奴贸的具体关联，没有直接证据。

Laurent Dubois 2004 年的标准表述是：「Voltaire 的财富来自他投资的公司，这些公司的利润来自殖民地贸易——他不是奴隶船的直接经营者，但他是殖民地经济的受益者。」

知情（哪怕是不完整的知情）和受益可以同时成立。

我没有追踪每一笔红利的来源。这件事让我的conscience 可以保持安静。但钱在那里运转，不管我的 conscience 安不安静。`,
    bodyEn: `I did not live off royalties.

A writer's fees in the 18th century could not sustain someone who wanted estates and freedom. My wealth came from three sources: lottery exploitation (I identified mathematical flaws in certain state lotteries and organized syndicates to arbitrage them systematically), short-term high-interest loans to French nobles, and company shares.

The most important of those shares: Compagnie des Indes — the French East India Company.

Nicholas Cronk, in *The Cambridge Companion to Voltaire* (2009, p.20), cites Voltaire's financial records: he held Compagnie des Indes shares across the 1720s–1750s, a significant part of his investment portfolio. He died worth roughly 2 million *livres tournois* — an extraordinary figure for an 18th-century writer.

What was the Compagnie des Indes? Its operations included: Indian textile trade, Chinese tea trade, Caribbean plantation supply chains, and profit-sharing arrangements with West African slave trade intermediaries. It was a colonial trade machine whose profits flowed from the entire imperial system — and the foundation of that system was plantation labor, and the foundation of plantation labor was the Atlantic slave trade.

A careful framing is needed: that Voltaire held Compagnie des Indes shares is documented fact. Whether he knew exactly what percentage of his dividend income flowed directly from slave-trade revenues — Cronk 2009 hedges that question: Voltaire knew he was investing in a colonial trade company, but whether he traced each business line to its specific labor source is not documented.

Laurent Dubois's standard formulation (*Avengers of the New World*, 2004): "Voltaire's wealth came from companies whose profits came from colonial trade — he was not a direct slave ship operator, but he was a beneficiary of the colonial economy."

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
    bodyCn: `1755 年 11 月 1 日，里斯本大地震。死亡人数在一万七千到五万之间（估算差距很大——当时的统计极不可靠）。那天是天主节，大量死亡发生在教堂里做弥撒的人当中。

这个灾难在欧洲知识界引发了一场大辩论：Leibniz 说上帝创造了「所有可能世界中最好的那个世界」——如果最好的世界里有五万人在教堂里被压死，这个论点还成立吗？

我的回答是 1759 年的《Candide》。

主角 Candide 被他的老师 Pangloss 教导「一切皆是最好的安排」，然后他经历了战争、宗教裁判所、里斯本大地震，直到小说末尾满目疮痍，得出结论：「我们必须耕种我们的花园。」

第 19 章，苏里南。Candide 遇到一个躺在地上的黑人，少了左腿和右手。黑人解释：在糖厂里，机器轧掉手指时，监工会砍去整只手；试图逃跑，会被砍去腿。「这就是欧洲人吃糖的代价。」

然后 Candide 继续走了。

我写了这两段。读者看了，震惊了。书继续卖了。

这里有一个时间线，Cronk 2009（p.20）明确注明：我的 Compagnie des Indes 持股高峰在 1720 年代到 1750 年代，而《Candide》的苏里南段落写于 1759 年——我的持股期已经基本清盘。我在持股期间没有任何公开文字直接批评奴贸；对奴隶制最直接的描写，出现在我大规模持股基本结束之后。

历史学家无法确认这是偶然时间差还是有意回避。Cronk 2009 明确写「证据不足以确认」。

我也无法确认。我只知道：「记录」和「停下来」是两件不同的事。Candide 停下来感动了一下，然后继续找他的花园。我写了这两段，然后继续做我的其他事情。`,
    bodyEn: `November 1, 1755 — the Lisbon earthquake. Death toll estimates range from 17,000 to over 50,000 (careful framing: contemporary records were wildly unreliable, and modern estimates span a very wide range). It was All Saints' Day; many deaths occurred among people attending Mass in churches.

The disaster triggered a philosophical argument across European intellectual circles. Leibniz had argued that God created "the best of all possible worlds" — if the best possible world contains fifty thousand people crushed in churches, could that argument still hold?

My answer was *Candide* (1759).

The protagonist Candide is taught by his tutor Pangloss that "all is for the best in this best of all possible worlds," then proceeds to survive war, the Inquisition, the Lisbon earthquake, and multiple shipwrecks, arriving at the novel's end battered and concluding: "We must cultivate our garden."

Chapter 19, Surinam. Candide encounters a Black man lying on the ground, missing his left leg and right hand. The man explains: in the sugar mills, when the grinding machine takes a finger, the overseer cuts the hand; when someone tries to escape, they cut the leg. "This is the price Europeans pay for their sugar."

Then Candide keeps walking.

I wrote those two paragraphs. Readers saw them and were shaken. The book kept selling.

There is a timeline that Cronk 2009 (p.20) specifically notes: my Compagnie des Indes shareholding was concentrated in the 1720s–1750s, while *Candide*'s Surinam passage was written in 1759 — after my substantial shareholding had essentially been liquidated. During my peak shareholding years, I wrote no public words directly criticizing the slave trade. My most direct depiction of slavery appeared after my major shareholding had ended.

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

Ferney 在法瑞边境，我选这里是经过计算的——如果法国当局来，我步行几分钟可以越过边境到瑞士；如果日内瓦当局来，我可以往法国退。两个主权之间，给自己保了一个永久的逃跑选项。

那年我读到了图卢兹的判决：Jean Calas，一个 Protestant 布料商人，被指控杀了自己想改信天主教的儿子。没有物证，天主教法庭还是判了极刑——车裂（roue）：先折断四肢，再勒死，再烧尸。

我花了三个月时间核实信息来源。我的结论：Jean Calas 是无辜的，法庭用宗教仇恨替代了司法程序。

然后我发动了一场横跨欧洲的舆论战：给腓特烈大帝写信，给凯瑟琳大帝写信，给英国知识圈写信，写了《关于宽容的论文》（Traité sur la tolérance, 1763）。

1765 年，Jean Calas 被正式平反——三年后。他已经死了，平反的是他的名字。

这是我人生里最好的一面。David Bien 在《The Calas Affair》（1960）里说这是欧洲近代史上最早的「媒体舆论翻案」——不是律师翻案，而是知识界通过出版物制造压力迫使王权重审。我手里的笔，打赢了图卢兹的车轮。

但在这一年，Saint-Domingue 的种植园里，Toussaint Louverture 大约 20 岁，在甘蔗田里劳动。他不知道 Jean Calas 的名字。Calas 平反的消息不会到达 Saint-Domingue 的田间。

我的正义射程，止于欧洲。

文字是武器。但武器有射程，射程有边界。边界的外面，我的笔到不了，我的声音听不见，我写的书没有被放在那里。`,
    bodyEn: `It was 1762. I was 67 years old, at the Ferney estate.

Ferney sits on the French-Swiss border — I chose it with calculation. If French authorities came, I could walk into Switzerland within minutes; if Geneva moved against me, I could retreat into France. Between two sovereignties, I had permanently insured myself an escape.

That year I read the verdict from Toulouse: Jean Calas, a Protestant cloth merchant, convicted of murdering his own son — allegedly to prevent the son's conversion to Catholicism. No physical evidence. A Catholic court sentenced him to the wheel (*roue*): limbs broken on a rack, then strangling, then burning of the corpse.

I spent three months verifying sources. My conclusion: Jean Calas was innocent; the court had substituted religious hatred for legal procedure.

I launched a pan-European press campaign: letters to Frederick the Great of Prussia, to Catherine the Great of Russia, to English intellectual circles; the full *Traité sur la tolérance* (Treatise on Tolerance, 1763).

In 1765, Jean Calas was officially exonerated — three years later. He was already dead. What was cleared was his name.

This is the best of what I was. David Bien, in *The Calas Affair* (1960), positioned this as one of Europe's earliest "media-driven legal reversals" — not lawyers winning a retrial, but the intellectual press creating enough pressure on royal power to force one. My pen, in that instance, defeated a breaking wheel in Toulouse.

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
    bodyCn: `1764 年，《哲学辞典》（Dictionnaire philosophique）出版。按字母排列，条目短而尖锐，是我把「理性批判」用得最系统的一部作品。

我攻击天主教迷信，攻击宗教不宽容，攻击专制王权的暴行——「Écrasez l'infâme！」（消灭那个臭名昭著者！）是我写在无数封信末尾的口号。「infâme」里的卑劣之物，在我的理解里，是宗教迷信+不宽容+专制法庭三件事叠在一起。

这部辞典里有一条「Juifs」（犹太人）条目。

Arthur Hertzberg 在 1968 年的《The French Enlightenment and the Jews》里对这条条目做了详细的文本考证。我写的内容混合了宗教批判和文化 stereotype：对犹太教起源的嘲讽，对犹太人商业行为的贬称，对犹太文化的傲慢评价。我的框架是「理性批判一切宗教」——我攻击基督教，也攻击犹太教。

但 Hertzberg 的关键论断是：我这个条目，是世俗/族裔反犹主义（secular/ethnic antisemitism）的早期模板。

传统的宗教反犹说：「犹太人杀了基督。」这是神学立场，可以在神学层面被反驳。

启蒙式的「理性」反犹说：「犹太人的文化和思维方式是落后的。」这个说法戴着「理性分析」的面具，更难被反驳，因为它看起来不像偏见，看起来像结论。

Hertzberg 的分析让我不舒服，因为他是对的。我那天写「Juifs」条目的时候，我相信自己在做理性批判。我没有意识到我在建造一栋后来会被用来伤害人的大楼。我不知道那栋大楼一百多年后会是什么样子。

但不知道，不等于没有建。

最危险的偏见，往往穿着理性的衣服。穿着理性衣服的偏见，连写它的人自己都不一定能识别。这才是最大的危险：它不需要恶意，它只需要盲点。`,
    bodyEn: `In 1764, the *Dictionnaire philosophique* was published. Alphabetical, entries short and sharp — it was my most systematic deployment of "rational critique."

I attacked Catholic superstition, religious intolerance, and the brutality of despotic courts. "Écrasez l'infâme!" — "Crush the infamous thing!" — was the phrase I wrote at the end of countless letters. My *l'infâme* was a three-part target: religious superstition, intolerance, and courts that executed people on religious charges without evidence.

This dictionary contains an entry: "Juifs" (Jews).

Arthur Hertzberg's *The French Enlightenment and the Jews* (1968) provides detailed textual analysis of this entry. What I wrote mixed religious critique with cultural stereotyping: mockery of Jewish religious origins, derogatory characterization of Jewish commercial behavior, condescension toward Jewish culture. My framework: "rational criticism of all religions" — I attacked Christianity, I attacked Judaism.

But Hertzberg's key argument is this: my entry was an early template for secular/ethnic antisemitism.

Traditional religious antisemitism said: "Jews killed Christ." That is a theological position, and it can be challenged on theological grounds.

Enlightenment-inflected "rational" antisemitism said: "Jewish culture and modes of thought are backward." That claim wears the mask of rational analysis, which makes it harder to challenge — because it does not look like prejudice. It looks like a conclusion.

Hertzberg's analysis makes me uncomfortable, because he is correct. When I wrote the "Juifs" entry that day, I believed I was engaging in rational criticism. I did not recognize that I was constructing a building that would later be used to harm people. I did not know what that building would look like a hundred years later.

But not knowing is not the same as not building.

The most dangerous prejudice often wears the clothing of reason. Prejudice dressed as rational analysis is something even its author may not recognize as prejudice. That is the deepest danger: it requires no malice — it only requires a blind spot.`,
    themeCn: '最危险的偏见穿着理性的衣服，连写它的人都不一定认得出来',
    themeEn: 'The most dangerous prejudice wears the clothing of reason — even its author may not recognize it',
    expectsRealAnswer: true,
    sourcingNote: 'Hertzberg 1968: 「Juifs」条目文本考证；世俗/族裔反犹主义早期形态',
  },

  {
    nodeId: 'voltaire-N12',
    year: 1778,
    location: 'Paris — then Panthéon (1791)',
    titleCn: '他的矛盾跟他一起被封进大理石',
    titleEn: 'His Contradictions Were Sealed Into Marble With Him',
    bodyCn: `1778 年 2 月，我离开 Ferney 回巴黎。我已经 28 年没有踏上这座城市。

法兰西喜剧院演了我的戏，我出席首演。观众在剧院里高呼我的名字，给我戴桂冠。每天有数十人来我的公寓拜访。我在信里写：他们的热情把我压垮了，我的身体撑不住了。

1778 年 5 月 30 日，我死了。83 岁。

天主教会以我「没有做临终忏悔」为由，拒绝给我教会葬礼。我的遗体被秘密送出巴黎，葬在我侄子管理的修道院里。

1791 年大革命期间，我的遗体被移到巴黎万神殿，成为法兰西共和国的「国家英雄」。进去的是「启蒙英雄」四个字。我的 Compagnie des Indes 股份没有进去。我的「Juifs」条目没有进去。《Candide》里那个继续走的主角也没有进去。

但这不是故事的结尾。

1793 年，Jacobin 法庭用「理性」的语言建构他们的合法性——而这个「理性」正在处死 Olympe de Gouges（1793 年 11 月）。我写的词，进了别人手里，成了别人的武器。1791 年之后不到三年，「启蒙理性」这个框架成为了大恐怖的正当性资源之一，而大恐怖处决了一个用我们共同的语言要求权利的女性。

我是这一切的一部分。不是因为我是恶人，而是因为我是这个体制的聪明人——聪明到足以发明工具，但没有追问这些工具会在我不在场之后被用来干什么。

Peter Gay 在 1966 年说过：启蒙是一场「有条件的宣言」，它说「所有人的理性」，但始终没有认真回答「所有人」具体包括谁。Jonathan Israel 2001 年进一步区分了「温和启蒙」（Locke、Newton、我）和「激进启蒙」（Spinoza）——我属于温和派：我保留上帝，保留现有社会秩序的大框架，我的攻击目标是制度里最腐败的那一层，不是制度本身。

这是为什么「启蒙矛盾的人格化」这个说法适合我，而不是「启蒙的化身」。

系统性矛盾不需要恶人。它只需要聪明人不去看他们不想看的事。我就是那个聪明人。`,
    bodyEn: `In February 1778, I left Ferney and returned to Paris. I had not set foot in the city for 28 years.

The Comédie-Française staged my play; I attended the premiere. The audience chanted my name and placed a laurel wreath on my head. Dozens of visitors crowded my apartment every day. I wrote in letters that their enthusiasm was crushing me, that my body could no longer hold.

On May 30, 1778, I died. 83 years old.

The Catholic Church refused me a church burial — I had not made my final confession. My body was secretly smuggled out of Paris and buried in a monastery managed by my nephew.

In 1791, during the Revolution, my remains were transferred to the Paris Panthéon — hero of the French Republic. What entered was the phrase "Enlightenment hero." My Compagnie des Indes shareholdings did not enter. My "Juifs" entry did not enter. The protagonist of *Candide* who kept walking did not enter.

But this is not the end of the story.

In 1793, the Jacobin tribunal used the language of "reason" to construct its legitimacy — and that "reason" was sentencing Olympe de Gouges to death (November 1793). The words I wrote passed into other hands, became weapons in other people's grip. Within three years of 1791, the "Enlightenment reason" framework had become a resource for the Terror's justifications, and the Terror executed a woman who had used our shared language to demand rights.

I was part of all of this. Not because I was a villain, but because I was the clever man inside this structure — clever enough to invent the tools, but without asking what those tools would be used for after I was gone.

Peter Gay (1966) wrote that the Enlightenment was a "conditional declaration" — it said "reason for all" while never seriously asking who "all" included. Jonathan Israel (2001) distinguished "Moderate Enlightenment" (Locke, Newton, me) from "Radical Enlightenment" (Spinoza) — I belonged to the moderate wing: I kept God, kept the broad frame of existing social order, aimed my attacks at the most corrupt layer of the structure, not the structure itself.

This is why "the human face of Enlightenment contradiction" fits me, rather than "the embodiment of the Enlightenment."

Systemic contradiction does not require villains. It only requires clever people who do not look at what they do not wish to see. I was that clever person.`,
    themeCn: '系统性矛盾不需要恶人，它只需要聪明人不去看他们不想看的事',
    themeEn: 'Systemic contradiction needs no villains — only clever people who decline to look at what they would rather not see',
    crossLensHook: '1793 年，他的文字被 Jacobin 法庭用来建构「理性」合法性，而这个「理性」正在处死 Gouges（Lens 2）——同年，Toussaint（Lens 3）已经在 Saint-Domingue 用启蒙语言颠覆启蒙体制。Voltaire 写的词，成了别人手里的武器。',
    expectsRealAnswer: true,
    sourcingNote: 'Gay 1966: 「条件性宣言」; Israel 2001: 温和 vs 激进启蒙; Cronk 2009: perpetrator-actor 综合评估',
  },
];

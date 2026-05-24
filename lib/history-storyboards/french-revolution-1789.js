// ─── French Revolution & Napoleon 1789-1815 Lens-based Storyboard (Story-First v2) ───
//
// Topic: 法国大革命与拿破仑 · The French Revolution & Napoleon 1789-1815
// HS 9-10 · AP World Modern Unit 5 (大西洋革命) · AP European History 核心单元
//
// 3 lens (per TOPIC_ROADMAP_G6_G12.md B2 + AUTHORING_PIPELINE 第 8/12 条):
//   - robespierre                     (perpetrator-actor) — Maximilien Robespierre 1758-1794「不可腐蚀者」用恐怖捍卫美德 / 上自己造的断头台
//   - lafayette                       (lonely-mediator)   — Marquis de Lafayette 1757-1834 跨美法两场革命的贵族自由派 / 两边都不容
//   - paris-washerwoman-receiving-end (receiving-end)     — 巴黎女工 (composite) / 1789 攻巴士底狱→1793 排队买面包 / 从希望到恐怖
//
// 跨 lens micro-detail (N6 anchor):
//   《人权宣言》与断头台同体 — 同一场革命，同一套「自由 / 理性」语言:
//   - Gouges (现有 enlightenment Topic, gouges-mediator lens): 写《女权宣言》(1791), 1793.11.3 死于同一台断头台
//   - Lafayette: 1789 起草《人权宣言》, 跨美法两场革命 → constitutional-convention (华盛顿副手) + enlightenment (理念跨大西洋)
//   反 Whig 核心: 《人权宣言》(自由) 与断头台恐怖 (暴力) 是同一场革命的两面, 不是两条故事线
//
// 跨 Topic 锚:
//   - Gouges 死于同一台断头台 → enlightenment (gouges-mediator)
//   - Lafayette 跨美法革命 → constitutional-convention (华盛顿副手) + enlightenment (理念跨大西洋传播)
//   - 巴黎女工面包游行 (平民承受变革代价) → industrial-revolution 童工母题
//
// defaultLens = 'paris-washerwoman-receiving-end' (受影响者优先 pattern: 女性 + 革命承受方 + 跨 lens《人权宣言》对位)
//
// STRUCTURE SPEC (emulates constitutional-convention-1787.js gold standard):
//   - 11 nodes per lens (multi-faction)
//   - 220-360 CN chars per node; 仅 N6 (cross-lens) + N10 (synthesis) 两个 anchor 可到 480
//   - expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) = true (2 per lens); all others false
//   - N6 = normal story anchor (runtime injects retrieval gate; NO 歇脚点/想停就停 wording authored here)
//
// math/date check: Robespierre 1758-1794 / Lafayette 1757-1834 / FR 1789 / Bastille 1789.7.14 /
//   《人权宣言》1789.8 / Terror 1793-94 / Gouges 死 1793.11.3 / Robespierre 死 1794.7.28 / Napoleon to 1815
// per AUTHORING_PIPELINE.md 11 条铁律 (cultural ban / em-dash 预算 / 名字分级 / synthesis voice / anti-fab 括号短句)
// 4-agent review (TBD): 7thgrader (小薇) / AP teacher (Dr. Park) / ESL teacher (Maria) / Chinese teacher (赵老师)

// ═══════════════════════════════════════════════════════════════════════
// LENS 1: Maximilien Robespierre (perpetrator-actor)
// ═══════════════════════════════════════════════════════════════════════

export var robespierreLens = {
  id: 'robespierre',
  name: 'Maximilien Robespierre',
  nameCn: '马克西米连·罗伯斯庇尔',
  role: 'perpetrator-actor',
  perspectiveTag: 'incorruptible-terror',
  icon: '⚖️',
  description: {
    cn: '法国北部 Arras 人，1758 年生，律师出身。他不喝酒、不收钱、不要情人，敌人都承认他清廉到没有把柄，于是人们叫他「不可腐蚀者」。革命初期他甚至主张废除死刑。可短短几年后，他成了恐怖统治的核心，签字送上断头台的人成千上万。他相信一件事到了极点：为了一个最纯洁的共和国，杀人是必要的美德。1794 年 7 月，他自己也被送上了那台他用过无数次的断头台。这一遍让你从一个理想主义者内部，看「为了最好的目的可以杀最多的人」这条路是怎么一步步走通的。',
    en: 'A man from Arras in northern France, born 1758, trained as a lawyer. He did not drink, took no bribes, kept no mistress, and even his enemies admitted he was so clean there was no hold on him, so people called him "the Incorruptible." Early in the Revolution he even argued for abolishing the death penalty. Yet within a few short years he stood at the heart of the Terror, signing thousands of people to the guillotine. He believed one thing to the extreme: that for the sake of the purest republic, killing was a necessary virtue. In July 1794 he too was sent to the guillotine he had used so many times. This pass lets you watch, from inside an idealist, how the road of "for the best of ends you may kill the most people" was walked, step by step.',
  },
  storyboard: [
    {
      id: 'rob-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '人们叫我「不可腐蚀者」。\n\n我不喝酒，不收一分贿赂，不要情人。在一个人人都能被钱、被女人、被权位收买的年代，连我的敌人都承认：在我身上找不到一个污点。\n\n我是 Robespierre（罗伯斯庇尔），一个外省来的律师。革命初期，1791 年，我站在制宪议会里，主张废除死刑——我说，国家用杀人来证明杀人有罪，是矛盾的。\n\n请你记住我此刻说的这句话。\n\n因为仅仅两年后，1793 年，是我，把成千上万的人，一批一批送上了断头台。\n\n这一遍，你坐进我这个位置。你会看见一个真心相信「自由」「美德」的人，怎么一步步说服自己：为了那个最纯洁的共和国，杀人，是必须的。',
        en: 'People called me "the Incorruptible."\n\nI did not drink, took not a single bribe, kept no mistress. In an age when everyone could be bought with money, with women, with office, even my enemies admitted there was not one stain to be found on me.\n\nI am Robespierre, a lawyer from the provinces. Early in the Revolution, in 1791, I stood in the Constituent Assembly and argued to abolish the death penalty. I said: for the state to use killing to prove that killing is a crime is a contradiction.\n\nPlease remember the words I am saying now.\n\nBecause just two years later, in 1793, it was I who sent thousands of people, batch by batch, to the guillotine.\n\nThis pass puts you in my seat. You will watch a man who sincerely believed in "liberty" and "virtue" talk himself, step by step, into this: that for the sake of the purest republic, killing was necessary.',
      },
      deliverGoal: 'N1 hook — 不可腐蚀者 (不喝酒/不收贿/不要情人/敌人也承认无污点) + Robespierre 自我介绍 (外省律师) + 1791 制宪议会主张废死刑 + 反差伏笔 (仅两年后送成千上万人上断头台) + 这一遍视角 (理想主义者怎么说服自己杀人是必须)',
      engagementHook: '一个 1791 年主张废除死刑的人，仅仅两年后就把成千上万人送上断头台。同一个人怎么会变成这样？你信「好人也会做出可怕的事」吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rob-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说革命为什么会爆发。\n\n1789 年的法国，分成三个等级：第一等级是教士，第二等级是贵族，第三等级是其他所有人——商人、农民、工人，占全国九成八。\n\n前两个等级几乎不交税，却占着大半土地和特权。第三等级养着整个国家，却没有话语权。那几年粮食歉收，面包价格翻倍，巴黎人把工资的一大半都花在一块面包上。\n\n国王 Louis XVI（路易十六）缺钱缺到要破产，只好召开一个停了快两百年的会议——三级会议，想让大家一起想办法。\n\n可第三等级不干了。凭什么交税最多的人，投票却最不算数？1789 年 6 月，他们干脆自己成立了「国民议会」，宣布要给法国写一部宪法。\n\n革命，就这样从一场「钱不够花」的危机，变成了一场「谁说了算」的较量。',
        en: 'First, why the Revolution broke out.\n\nFrance in 1789 was split into three estates: the First was the clergy, the Second the nobility, the Third everyone else, merchants, farmers, workers, ninety-eight percent of the country.\n\nThe first two estates paid almost no taxes yet held most of the land and the privileges. The Third Estate fed the whole nation but had no voice. In those years harvests failed and bread prices doubled, and a Paris worker spent more than half his wages on a single loaf.\n\nKing Louis XVI was so short of money he was near bankruptcy, so he summoned a meeting that had not been held in nearly two hundred years, the Estates-General, hoping everyone would find a way out together.\n\nBut the Third Estate would have no more of it. Why should those who paid the most in taxes have votes that counted the least? In June 1789 they simply formed their own "National Assembly" and declared they would write France a constitution.\n\nAnd so the Revolution turned from a crisis of "not enough money" into a contest over "who decides."',
      },
      deliverGoal: 'N2 setup — 三个等级 (教士/贵族/第三等级 98%) + 前两等级不交税占特权 + 粮荒面包翻倍 + Louis XVI 破产召开三级会议 + 1789.6 第三等级成立国民议会要写宪法 + 革命从「钱不够」变「谁说了算」',
      engagementHook: '交税最多的九成八的人，投票却最不算数。如果你是那九成八里的一个，你会忍下去，还是站出来？',
      expectsRealAnswer: false,
    },
    {
      id: 'rob-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '1789 年 7 月 14 日，巴黎人攻占了一座叫巴士底（Bastille）的旧监狱。\n\n那座监狱是王权的象征。攻陷它的那一刻，全法国都明白了：旧的秩序，挡不住了。这一天，后来成了法国国庆日。\n\n那年 8 月，国民议会发布了一份文件，叫《人权宣言》（Declaration of the Rights of Man）。它写着一句话，我反复读了无数遍：\n\n「人人生而自由，权利平等。」\n\n这句话不是凭空来的。它来自启蒙时代的思想——人民有不可剥夺的权利，政府的权力来自人民同意。（你要是跑过 enlightenment 那个 Topic，会认得这套话。）\n\n那时候的我，是这句话最纯粹的信徒。我相信我们正在建一个人类从未有过的、真正自由平等的共和国。\n\n我没想到，几年后，正是「自由」「美德」这几个最干净的词，会变成我手里最锋利的刀。',
        en: 'On 14 July 1789, the people of Paris stormed an old prison called the Bastille.\n\nThat prison was a symbol of royal power. The moment it fell, all of France understood: the old order could no longer hold. This day later became France\'s national holiday.\n\nThat August the National Assembly issued a document, the Declaration of the Rights of Man. It carried a line I read over and over without end:\n\n"Men are born free and equal in rights."\n\nThis line did not come from nowhere. It came from the thought of the Enlightenment, that the people hold rights that cannot be taken away, and that a government\'s power comes from the consent of the people. (If you have run the enlightenment topic, you will know this language.)\n\nIn those days I was the purest believer in that line. I believed we were building a republic the human race had never seen, truly free and equal.\n\nI did not foresee that a few years later it would be exactly those cleanest words, "liberty" and "virtue," that became the sharpest blade in my hand.',
      },
      deliverGoal: 'N3 setup — 1789.7.14 攻占巴士底 (王权象征/国庆日) + 1789.8《人权宣言》「人人生而自由权利平等」+ 来自启蒙 (跨 enlightenment Topic 锚) + Robespierre 当时是最纯粹信徒 + 伏笔 (最干净的词后来成最锋利的刀)',
      engagementHook: '我曾经是「人人生而自由」这句话最纯粹的信徒。可最干净的词，后来成了我手里最锋利的刀。一个好理想，怎么会变成伤人的武器？',
      expectsRealAnswer: false,
    },
    {
      id: 'rob-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n革命没有你想的那么顺。建一个新共和国，四面都是敌人。\n\n外面：欧洲那些国王怕革命烧到自己头上，组队来打法国。1792 年，外国军队压到边境，扬言要血洗巴黎。\n\n里面：贵族出逃，神父抗命，有些地区起兵反对革命。还有人偷偷给敌国通风报信。\n\n你是革命的领导人之一。每天都有消息：哪里又打输了，哪里又有人叛变。你心里那个声音越来越响：革命随时会被掐死，而掐死它的，可能就是身边那些「假装支持、其实拆台」的人。\n\n于是你开始想一件危险的事：如果一个人威胁到革命，哪怕还没动手，是不是就该先除掉他？为了救一个伟大的理想，牺牲一些人，值不值？\n\n这一步迈出去，你就再也回不来了。你迈吗？',
        en: 'Now you are me.\n\nThe Revolution did not go as smoothly as you imagined. To build a new republic was to be surrounded by enemies on every side.\n\nOutside: the kings of Europe feared the Revolution would spread to them, and banded together to attack France. In 1792 foreign armies pressed to the border, vowing to drown Paris in blood.\n\nInside: nobles fled, priests defied the law, some regions rose up against the Revolution. And some secretly passed word to the enemy.\n\nYou are one of the Revolution\'s leaders. Every day brings news: another defeat here, another betrayal there. The voice in you grows louder: the Revolution could be strangled at any moment, and the ones strangling it might be the very people nearby who "pretend to support it while tearing it down."\n\nSo you begin to think a dangerous thought: if a person threatens the Revolution, even before they act, should they not be removed first? To save one great ideal, is sacrificing some people worth it?\n\nTake this step and you can never come back. Do you take it?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 革命四面受敌 (1792 外国军队压边境/内部贵族出逃神父抗命叛变) + Robespierre 是领导人 + 危险念头成形 (威胁革命的人没动手也该先除掉/牺牲一些人救理想值不值) + 迈出去回不来你迈吗',
      engagementHook: '如果有人「还没动手」但威胁到你珍视的东西，你会先下手除掉他吗？为了救一个伟大理想，牺牲一些人，值得吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rob-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我迈了。\n\n1793 年，革命政府成立了一个叫「公安委员会」的机构来掌权，我是核心人物之一。我们通过了一项法律：凡是「革命的嫌疑人」，可以直接抓、直接审、直接送上断头台。\n\n注意「嫌疑」两个字。不需要证据确凿，只要被怀疑反对革命，就够了。\n\n断头台（guillotine）每天在巴黎广场上工作。被处死的，先是国王 Louis XVI（1793 年 1 月），然后是王后，然后是政敌、贵族、神父，最后，连革命阵营里跟我意见不同的同志，也一个个上了断头台。\n\n这段时间，历史上叫「恐怖统治」（the Terror）。一年多里，全法国约有几万人被处死。\n\n我对自己说的话是：恐怖不是背叛了美德，恐怖就是美德的一部分。在危难时刻，对敌人仁慈，就是对人民残忍。\n\n你听出来了吗？我已经把「杀人」和「美德」，焊在了一起。',
        en: 'I took it.\n\nIn 1793 the revolutionary government set up a body called the Committee of Public Safety to hold power, and I was one of its central figures. We passed a law: anyone "suspected" of being against the Revolution could be arrested, tried, and sent to the guillotine directly.\n\nMark the word "suspected." No firm proof was needed. To be merely suspected of opposing the Revolution was enough.\n\nThe guillotine worked every day in the squares of Paris. The executed came first as the king, Louis XVI (January 1793), then the queen, then political rivals, nobles, priests, and at last even comrades within the revolutionary camp who disagreed with me, one by one, went to the blade.\n\nThis stretch of time is called the Terror in history. In a little over a year, some tens of thousands across France were put to death.\n\nWhat I told myself was this: terror does not betray virtue; terror is part of virtue. In a time of peril, mercy to the enemy is cruelty to the people.\n\nDo you hear it? I had already welded "killing" and "virtue" into one.',
      },
      deliverGoal: 'N5 story — 1793 公安委员会掌权 + Law of Suspects (嫌疑就可抓审处死/不需证据) + 断头台每天工作 (Louis XVI 1793.1→王后→政敌贵族神父→革命同志) + 恐怖统治几万人被处死 + Robespierre 自辩「恐怖是美德一部分/对敌人仁慈是对人民残忍」+ 杀人与美德焊一起',
      engagementHook: '我对自己说：「对敌人仁慈，就是对人民残忍。」这句话听起来很有道理——但正是它，让我把杀人和美德焊在了一起。这种「听起来有道理」的话，危险在哪里？',
      expectsRealAnswer: false,
    },
    {
      id: 'rob-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我让你看一个人，你就懂这场革命有多分裂了。\n\n有个写作者，叫 Olympe de Gouges（古热）。她和我一样，是革命的支持者，是共和主义者，反对奴隶制。1791 年她写了一份《女权宣言》——把《人权宣言》里的「人」，明明白白扩到女人身上。她写下一句话：\n\n「女人有权走上断头台，就该同样有权走上讲台。」\n\n这句话像一句预言。1793 年 11 月，她真的走上了断头台——死在我们这套恐怖机器之下。罪名不是「要求女权」，是「政治立场不对」：她反对我们这一派，同情被我们清洗的对手。（她的故事，在 enlightenment 那个 Topic 里你能完整看见。）\n\n你看清楚这个对位了吗？\n\n同一场革命：一只手举着《人权宣言》喊「人人自由平等」，另一只手用断头台，处死一个用同样的话、为同样的自由发声的女人。\n\n《人权宣言》和断头台，不是两件事。是同一场革命的两只手。',
        en: 'Let me show you one person, and you will understand how split this Revolution was.\n\nThere was a writer named Olympe de Gouges. Like me she supported the Revolution, was a republican, opposed slavery. In 1791 she wrote a Declaration of the Rights of Woman, extending the "man" in the Declaration of the Rights of Man plainly to women. She wrote one line:\n\n"A woman has the right to mount the scaffold; she must equally have the right to mount the rostrum."\n\nThe line read like a prophecy. In November 1793 she truly mounted the scaffold, dead beneath this same machine of terror. The charge was not "demanding women\'s rights" but "the wrong political stance": she opposed our faction and sympathized with the rivals we had purged. (Her full story you can see in the enlightenment topic.)\n\nDo you see the pairing clearly?\n\nOne revolution: one hand raising the Declaration of the Rights of Man, crying "all are free and equal," the other hand using the guillotine to execute a woman who spoke the same words, for the same freedom.\n\nThe Declaration and the guillotine are not two things. They are two hands of the same revolution.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Gouges (革命支持者/共和派/反奴隶制)《女权宣言》1791 把「人」扩到女人 +「有权上断头台就该有权上讲台」+ 1793.11 真死于恐怖机器 (罪名是政治立场不是女权/跨 enlightenment Topic) + 反 Whig 对位:《人权宣言》(自由) 与断头台 (暴力) 是同一场革命的两只手',
      engagementHook: '一只手举着《人权宣言》喊「人人自由平等」，另一只手用断头台处死一个用同样的话争取自由的女人——这是同一场革命的两只手。一个理想和它的暴力，真的能分开吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'rob-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '恐怖到了后期，连我自己都开始失控。\n\n1794 年春天，断头台杀得越来越快。最厉害的时候，巴黎一个月处死上千人。被杀的早就不只是「敌人」了——有人只是说错一句话，有人只是跟某个倒台的人沾亲带故。\n\n我还推出一套新东西：我说光有共和国不够，还得有「美德」，于是搞了一个「最高主宰」的崇拜仪式，想给革命立一个新的、理性的信仰。\n\n问题是，到这一步，已经没人能确定明天会不会轮到自己。议会里的人开始怕我——不是因为我贪、我坏，恰恰因为我「太纯」。一个不为钱、不为权、只为「美德」杀人的人，是最可怕的：你没法收买他，也没法预测他下一个要除掉谁。\n\n我以为我在保护革命。其实我已经让所有人都活在恐惧里——包括那些本来站在我这边的人。',
        en: 'In the later stretch of the Terror, even I began to lose control.\n\nIn the spring of 1794 the guillotine killed faster and faster. At its worst, Paris executed over a thousand in a single month. Those killed were long past being mere "enemies." Some had only said one wrong word; some were merely related to someone who had fallen.\n\nI also rolled out something new. I said a republic alone was not enough; it also needed "virtue," and so I staged a cult of a "Supreme Being," trying to give the Revolution a new, rational faith.\n\nThe trouble was, by this point no one could be sure their own turn would not come tomorrow. People in the assembly began to fear me, not because I was greedy or wicked, but precisely because I was "too pure." A man who kills not for money, not for power, but only for "virtue," is the most frightening of all: you cannot buy him, and you cannot predict whom he will remove next.\n\nI thought I was protecting the Revolution. In truth I had made everyone live in fear, including the very people who had stood on my side.',
      },
      deliverGoal: 'N7 story — 1794 春恐怖失控 (巴黎月处死上千/说错一句话或沾亲带故就被杀) + Robespierre 推「最高主宰」崇拜想立理性信仰 + 议会怕他不因贪坏而因「太纯」(不为钱权只为美德杀人无法收买无法预测) + 我以为保护革命其实让所有人活在恐惧里',
      engagementHook: '人们怕我，不是因为我贪、我坏，恰恰因为我「太纯」——一个只为「美德」杀人的人，你没法收买，也没法预测他下一个除掉谁。「纯粹的好人」为什么有时比坏人更可怕？',
      expectsRealAnswer: false,
    },
    {
      id: 'rob-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '1794 年 7 月 27 日，反扑来了。\n\n那天我在议会发表演说，又一次警告说还有「内部的叛徒」要清除——但这次我没点名。台下的人全慌了：没点名，意味着谁都可能是下一个。\n\n他们决定先下手。当场有人高喊打倒暴君，议会通过决议逮捕我。混乱中我下巴中了一枪（是自杀还是别人开的，到今天没有定论）。\n\n7 月 28 日，他们把我和我的同伙押上了断头台——就是我用过无数次的那一台。\n\n我没法说话，下巴是碎的。刽子手扯下我下巴上的绷带时，据说我发出了一声惨叫。然后，刀落下。\n\n那一年我 36 岁。从在议会主张废除死刑的理想者，到死在自己的断头台上，只过了三年。\n\n恐怖统治，随着我的人头落地，结束了。',
        en: 'On 27 July 1794 the backlash came.\n\nThat day I gave a speech in the assembly, warning once more that there were still "internal traitors" to be purged, but this time I named no one. The men below were thrown into panic: to name no one meant anyone could be next.\n\nThey decided to strike first. Someone shouted to bring down the tyrant, and the assembly passed a decree to arrest me. In the chaos my jaw took a bullet (whether by my own hand or another\'s is undecided to this day).\n\nOn 28 July they hauled me and my allies to the guillotine, the very one I had used countless times.\n\nI could not speak; my jaw was shattered. When the executioner tore off the bandage on my jaw, they say I let out a scream. Then the blade fell.\n\nI was 36 that year. From the idealist who argued in the assembly to abolish the death penalty, to dying on my own guillotine, only three years had passed.\n\nThe Terror ended as my head fell.',
      },
      deliverGoal: 'N8 story — 1794.7.27 反扑 (Robespierre 演说警告内部叛徒但不点名→人人自危) + 议会决议逮捕 + 下巴中枪 (自杀或他人未定论) + 1794.7.28 上自己的断头台 (下巴碎/扯绷带惨叫/刀落) + 36 岁/距 1791 废死主张才 3 年 + 恐怖随他人头落地结束',
      engagementHook: '从主张废除死刑的理想者，到死在自己造的断头台上，只过了三年。一个人走到这一步，是哪一步走错了，还是从一开始就注定？',
      expectsRealAnswer: false,
    },
    {
      id: 'rob-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我死了，可革命没结束，故事还有一截。\n\n恐怖统治一停，法国累坏了，也乱坏了。大家想要秩序，想要一个强人来收拾残局。\n\n这个强人来了，叫 Napoleon（拿破仑）——一个在革命战争里打出名堂的年轻将军。1799 年他发动政变掌权，1804 年干脆给自己加冕称帝。\n\n你看出这个讽刺了吗？一场为了推翻国王、争取自由的革命，转了一大圈，最后又转回到一个皇帝手里。\n\n但拿破仑也带走了革命的一部分成果：他编了一部《拿破仑法典》，把「法律面前人人平等」「废除贵族特权」这些革命原则，写成了一整套成文法律，传遍欧洲。\n\n所以革命到底留下了什么？既留下了「人人平等」的法律，也留下了断头台的记忆，还留下了一个皇帝。\n\n这就是为什么后人争论了两百年：法国大革命，到底是自由的胜利，还是一场吃掉自己孩子的灾难？',
        en: 'I died, but the Revolution did not end; the story has one more stretch.\n\nThe moment the Terror stopped, France was exhausted and in chaos. People wanted order, wanted a strongman to clean up the wreckage.\n\nThat strongman came, named Napoleon, a young general who had made his name in the revolutionary wars. In 1799 he seized power in a coup, and in 1804 he simply crowned himself emperor.\n\nDo you see the irony? A revolution to overthrow a king and win freedom went around a great circle and ended back in the hands of an emperor.\n\nYet Napoleon also carried off part of the Revolution\'s harvest: he drew up the Napoleonic Code, writing revolutionary principles such as "equality before the law" and "abolition of noble privilege" into a whole body of written law that spread across Europe.\n\nSo what, in the end, did the Revolution leave behind? It left a law of "all are equal," and the memory of the guillotine, and an emperor.\n\nThis is why people have argued for two hundred years: was the French Revolution a triumph of liberty, or a catastrophe that devoured its own children?',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 恐怖停后法国累乱想要强人 + Napoleon (革命战争名将/1799 政变/1804 称帝) + 讽刺 (推翻国王的革命转回皇帝手里) + 《拿破仑法典》(法律面前人人平等/废贵族特权写成成文法传遍欧洲 to 1815) + 革命留下: 平等法律+断头台记忆+皇帝 + 后人争论两百年',
      engagementHook: '一场为了推翻国王、争取自由的革命，转了一大圈，最后转回到一个皇帝手里。革命留下了「人人平等」的法律，也留下了断头台和一个皇帝——你会说它成功了，还是失败了？',
      expectsRealAnswer: false,
    },
    {
      id: 'rob-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是出于纯粹理想的革命者。我清廉一生，不为钱、不为权，只为一个真正自由平等的共和国。在外敌压境、内部叛变的绝境里，是恐怖手段保住了革命不被掐死。没有那段铁血，1789 年的成果可能早就被欧洲的国王们碾碎了。\n\n另一种说法：我是用理想杀人的恐怖统治者。我把「美德」变成了杀人的执照——只要怀疑你不够纯，就能送你上断头台。我处死的几万人里，有政敌，有无辜者，还有和我一样真心信仰自由的人，比如写《女权宣言》的 Gouges。最纯的理想，造出了最血腥的机器。\n\n这两边不是「好心办了坏事」那么简单。是同一种东西的两面——一个人对「绝对纯洁」的追求，既能照亮一个理想，也能点燃一座断头台。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a revolutionary of pure ideals. I was clean all my life, sought neither money nor power, only a truly free and equal republic. In the desperate straits of foreign armies at the border and betrayal within, it was the means of terror that kept the Revolution from being strangled. Without that iron and blood, the gains of 1789 might have been crushed by the kings of Europe long before.\n\nThe other view: I was a terror-ruler who killed by ideal. I turned "virtue" into a license to kill. Suspect you of not being pure enough, and I could send you to the guillotine. Among the tens of thousands I executed were rivals, the innocent, and people who believed in freedom as sincerely as I did, such as Gouges, who wrote the Declaration of the Rights of Woman. The purest ideal built the bloodiest machine.\n\nThese are not simply "good intentions gone wrong." They are two faces of one thing: a person\'s pursuit of "absolute purity" can light up an ideal and can set a guillotine ablaze at the same time.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (纯粹理想革命者/清廉/恐怖保住革命不被外敌内叛掐死) / 另一种说法 (用理想杀人的恐怖统治者/把美德变杀人执照/几万人含 Gouges/最纯理想造最血腥机器) / 同一种「追求绝对纯洁」的两面 / 想 30 秒',
      engagementHook: '纯粹理想的革命者，和用理想杀人的恐怖统治者——是同一个我。对「绝对纯洁」的追求，既照亮理想，也点燃断头台。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'rob-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——从主张废死刑，到造一台杀人无数的断头台，再到死在它上面——你会怎么评价这样一场革命？\n\n一场革命，一只手写下「人人生而自由平等」，另一只手把成千上万人送上断头台，连同道的人也不放过。你会说这是自由的胜利，还是一场吃掉自己孩子的灾难？这两件事，能分得开吗？\n\n再想一步。今天你身边，有没有人为了一个「绝对正确」的目标——一个理想、一个规矩、一种「正义」——而觉得「为了它，伤害一些人是应该的」？也许是网上的一场围攻，也许是某个群体对「异见者」的排挤。\n\n那时候，你会跟着喊「对敌人仁慈就是对自己人残忍」吗？还是你会停下来问一句：当一个理想开始要求你伤害别人，它还是不是当初那个理想？',
        en: 'Having walked my whole life, from arguing to abolish the death penalty, to building a guillotine that killed without number, to dying on it myself, how would you judge a revolution like this?\n\nA revolution, one hand writing "men are born free and equal," the other sending thousands to the guillotine, sparing not even its own. Would you call it a triumph of liberty, or a catastrophe that devoured its own children? Can those two be told apart?\n\nThen take one more step. In your own life today, is there someone who, for the sake of an "absolutely right" goal, an ideal, a rule, a kind of "justice," feels that "for its sake, harming some people is justified"? Perhaps a pile-on online, perhaps a group shutting out those who think differently.\n\nWhen that happens, will you join the cry that "mercy to the enemy is cruelty to our own"? Or will you stop and ask: when an ideal begins to demand that you harm others, is it still the ideal it was at the start?',
      },
      deliverGoal: 'N11 close — 评价革命 (一手写「人人自由平等」一手送成千上万上断头台连同道也不放过 → 自由胜利 vs 吃掉自己孩子的灾难能否分开) + transfer「今天你身边有人为绝对正确目标觉得伤害一些人应该 (网络围攻/排挤异见)」+ 你会跟着喊还是停下来问当理想要求你伤人它还是不是当初那个理想',
      engagementHook: '一只手写「人人自由平等」，一只手送成千上万人上断头台——这样一场革命，你会怎么评价？今天你身边那个为了「绝对正确」而觉得「伤害一些人是应该的」的时刻，你会跟着喊，还是会停下来问一句？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 2: Marquis de Lafayette (lonely-mediator)
// ═══════════════════════════════════════════════════════════════════════

export var lafayetteLens = {
  id: 'lafayette',
  name: 'Marquis de Lafayette',
  nameCn: '拉法耶特侯爵',
  role: 'lonely-mediator',
  perspectiveTag: 'two-revolutions-mediator',
  icon: '🗽',
  description: {
    cn: '法国贵族，1757 年生，家里有钱有地有头衔。可他十九岁就跑去大洋彼岸，自费参加美国独立战争，当上华盛顿的副手，回国时成了「两个世界的英雄」。回到法国，他又成了 1789 年革命的明星，亲手参与起草《人权宣言》。他想要的，是一个像美国那样的、温和的、有国王也有自由的法国。可革命越走越激进，他被两边都恨上了：激进派骂他是叛徒，国王恨他是乱党。这一遍让你从一个夹在中间的理想主义者位置，看一个想「两全」的人，怎么被一场不要中间路线的革命碾碎。',
    en: 'A French nobleman, born 1757, with money, land, and a title in his family. Yet at nineteen he crossed the ocean, paid his own way into the American War of Independence, became Washington\'s aide, and returned home a "Hero of Two Worlds." Back in France he became a star of the Revolution of 1789 as well, taking part with his own hand in drafting the Declaration of the Rights of Man. What he wanted was a France like America\'s, moderate, with a king and with liberty both. But the Revolution grew more radical, and both sides came to hate him: the radicals cursed him as a traitor, the king loathed him as a rebel. This pass puts you in the seat of an idealist caught in the middle, watching a man who wanted "both" be ground down by a revolution that wanted no middle path.',
  },
  storyboard: [
    {
      id: 'laf-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我得过一个外号，叫「两个世界的英雄」。\n\n两个世界——一个是美国，一个是法国。两场革命，我都在场，都流过血，都站在「自由」这一边。\n\n我是 Lafayette（拉法耶特），法国贵族，生下来就有钱、有地、有头衔。十九岁那年，我把这一切放下，自费坐船去美国，帮一群素不相识的人打他们的独立战争。我成了华盛顿的副手，他几乎把我当亲儿子。\n\n回到法国，1789 年革命来了，我又成了明星——是我，参与起草了《人权宣言》。\n\n我以为我懂自由，因为我在美国见过它怎么落地。\n\n可这一遍你会看见一件残酷的事：在一场越来越极端的革命里，一个想「温和」「两全」的人，最后会被两边同时抛弃。我，两个世界的英雄，差点死在自己人手里。',
        en: 'I was given a nickname once: the Hero of Two Worlds.\n\nTwo worlds, one America, one France. Two revolutions, and I was present at both, bled in both, stood on the side of "liberty" in both.\n\nI am Lafayette, a French nobleman, born with money, land, and a title. At nineteen I set all of it down, paid my own way by ship to America, and helped a crowd of strangers fight their war of independence. I became Washington\'s aide; he treated me almost as a son.\n\nBack in France, the Revolution came in 1789, and I became a star again. It was I who took part in drafting the Declaration of the Rights of Man.\n\nI thought I understood liberty, because I had seen it take root in America.\n\nBut this pass shows you a cruel thing: in a revolution growing ever more extreme, a man who wants the "moderate," the "both," is in the end cast off by both sides at once. I, the Hero of Two Worlds, nearly died at the hands of my own.',
      },
      deliverGoal: 'N1 hook — 「两个世界的英雄」(美国+法国两场革命都在场) + Lafayette 自我介绍 (法国贵族/19 岁自费去美国当华盛顿副手) + 1789 参与起草《人权宣言》+ 自以为懂自由 + 这一遍视角 (想温和两全的人被两边同时抛弃/差点死在自己人手里)',
      engagementHook: '我是「两个世界的英雄」，最后却差点死在自己人手里。一个想走「中间路线」的人，为什么常常两边都不讨好？',
      expectsRealAnswer: false,
    },
    {
      id: 'laf-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我是从哪儿来的，你才懂我为什么这么信「自由」。\n\n我 1757 年生在法国一个老贵族家庭，两岁丧父，父亲死在跟英国人打的仗里。我从小有钱、有头衔，按理该过最舒服的日子。\n\n可我十九岁那年，听说大洋彼岸的北美殖民地，正在反抗英国国王，要建一个没有国王的共和国。\n\n这件事点燃了我。我自己掏钱买了一条船，瞒着家人和国王，1777 年偷偷渡海去了美国。\n\n我没要一分军饷，主动加入打仗。我在 Brandywine（布兰迪万）那一仗腿上中了枪，照样不退。华盛顿很快看重我，把我当自己人。\n\n美国独立战争打赢了。我亲眼看见：一群普通人，可以推翻一个国王，自己给自己立规矩，还能让国家不乱。\n\n我把这个信念带回了法国：自由是可以实现的，而且不一定要靠流血流到失控。这个想法，后来害惨了我。',
        en: 'First, where I came from, so you understand why I believed so in "liberty."\n\nI was born in 1757 to an old noble family, lost my father at two, killed in a war against the English. From childhood I had money and a title and should by rights have lived the easiest of lives.\n\nYet at nineteen I heard that across the ocean the colonies of North America were rising against the British king to build a republic with no king at all.\n\nThe thing set me alight. I bought a ship with my own money and, hiding it from my family and the king, slipped across the sea to America in 1777.\n\nI took no pay and joined the fighting of my own will. At the Battle of Brandywine I took a bullet in the leg and would not withdraw. Washington soon valued me and treated me as one of his own.\n\nThe American war was won. I saw with my own eyes: a crowd of ordinary people could overthrow a king, make their own rules, and keep the country from falling into chaos.\n\nI carried that conviction back to France: liberty can be achieved, and not necessarily by bleeding to the point of losing control. That idea would later be my ruin.',
      },
      deliverGoal: 'N2 setup — Lafayette 出身 (1757 老贵族/2 岁丧父/有钱有头衔) + 19 岁听说北美反英要建共和国被点燃 + 1777 自费偷渡去美国 (不要军饷/Brandywine 腿中枪不退/华盛顿当自己人) + 亲眼见普通人推翻国王还不乱 + 带回信念 (自由可实现且不必流血到失控/后来害惨他)',
      engagementHook: '我十九岁放下贵族的舒服日子，自费跑去帮一群陌生人打仗。是什么会让一个有钱人，甘愿为别人的自由去拼命？',
      expectsRealAnswer: false,
    },
    {
      id: 'laf-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '1789 年，革命在法国爆发，我成了它最受欢迎的人物之一。\n\n我相信法国可以走美国那条路：保留国王，但用一部宪法把国王的权力关进笼子里，再给人民写明权利。这叫「君主立宪」——既要自由，也要秩序。\n\n那年 8 月，国民议会要起草《人权宣言》。我参与了草拟工作，还借鉴了我熟悉的美国《独立宣言》的思路——人人有不可剥夺的权利，政府权力来自人民。（美国那部宪法是怎么从一屋子人手里谈出来的，你跑过 constitutional-convention 那个 Topic 就懂。）\n\n7 月攻陷巴士底之后，我还被任命为国民自卫军的总司令——手里有兵，又有声望，那时候的我，可能是全法国最有权势的人之一。\n\n我以为我能掌舵，把这场革命稳稳开到「美国式的自由」那个港口。\n\n我大大低估了：法国不是美国。这里没有大洋隔着，四面是虎视眈眈的国王；这里几百年的仇恨，不会温和地结束。',
        en: 'In 1789 the Revolution broke out in France, and I became one of its most popular figures.\n\nI believed France could walk America\'s road: keep the king, but lock his power in a cage with a constitution, and write out rights for the people. This is called constitutional monarchy, liberty and order both.\n\nThat August the National Assembly set out to draft the Declaration of the Rights of Man. I took part in the drafting and drew on the thinking of the American Declaration of Independence I knew well, that people hold rights that cannot be taken, that a government\'s power comes from the people. (How that American constitution was negotiated out of a roomful of people, you will know if you have run the constitutional-convention topic.)\n\nAfter the Bastille fell in July, I was appointed commander of the National Guard, with troops in hand and prestige besides. In those days I may have been one of the most powerful men in all of France.\n\nI thought I could steer, and bring this revolution safely into the harbor of an "American-style liberty."\n\nI badly underestimated one thing: France was not America. Here there was no ocean between, only watchful kings on every side; here hatreds centuries deep would not end gently.',
      },
      deliverGoal: 'N3 setup — 1789 Lafayette 最受欢迎人物 + 信君主立宪 (保留国王但宪法关权力+给人民权利/自由也要秩序) + 1789.8 参与起草《人权宣言》借鉴美国独立宣言 (跨 constitutional-convention Topic 锚) + 任国民自卫军总司令 (有兵有声望最有权势) + 以为能掌舵到美国式自由 + 低估法国不是美国 (没大洋隔着四面国王/几百年仇恨)',
      engagementHook: '我以为能把法国革命稳稳开到「美国式自由」那个港口。可法国不是美国——没有大洋隔着，四面是虎视眈眈的国王。同一个理想，换个地方，为什么结果会完全不同？',
      expectsRealAnswer: false,
    },
    {
      id: 'laf-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你手里有兵，有声望，有一个清晰的理想：温和的、有国王也有自由的法国。可革命正在往两个极端撕裂。\n\n一边是国王和贵族，他们恨革命，盼着外国军队打进来，把一切恢复原样。另一边是越来越激进的革命派，他们觉得只要还留着国王，革命就不算完成，要把国王也除掉。\n\n你站在正中间。你想保护国王不被杀（你觉得君主立宪还有救），又想保护革命不被国王反扑(你真心要自由)。\n\n两边都觉得你不可靠。激进派说：你替国王说话，你是叛徒。保王派说：你带头造反，你是乱党。\n\n你心里清楚一件事：在一场越走越极端的运动里，「中间」不是安全的位置，是最危险的位置——两边的火力都会打向你。\n\n你还要不要继续站在中间？',
        en: 'Now you are me.\n\nYou have troops in hand, prestige, and a clear ideal: a moderate France, with a king and with liberty both. But the Revolution is tearing toward two extremes.\n\nOn one side stand the king and the nobles, who hate the Revolution and long for foreign armies to march in and restore everything as it was. On the other stand the ever more radical revolutionaries, who feel that as long as a king remains the Revolution is unfinished, and the king too must be removed.\n\nYou stand dead in the middle. You want to protect the king from being killed (you think constitutional monarchy can still be saved), and you want to protect the Revolution from the king\'s counterstroke (you sincerely want liberty).\n\nBoth sides find you unreliable. The radicals say: you speak for the king, you are a traitor. The royalists say: you led the rebellion, you are a rebel.\n\nYou know one thing in your heart: in a movement growing ever more extreme, "the middle" is not the safe place but the most dangerous, the fire of both sides aimed at you.\n\nDo you still go on standing in the middle?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — Lafayette 有兵有声望有清晰理想 (温和的有国王也有自由) + 革命往两极撕裂 (国王贵族盼外军恢复原样 vs 激进派要除掉国王) + 站正中间想两全 (保国王不被杀+保革命不被反扑) + 两边都骂 (激进派骂叛徒/保王派骂乱党) + 「中间不是安全是最危险位置」+ 你还站中间吗',
      engagementHook: '在一场越走越极端的运动里，站在中间的人，两边的火力都会打向他。明知中间最危险，你还会坚持走中间路线吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'laf-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我继续站在了中间。然后，灾难来了。\n\n1791 年 7 月 17 日，巴黎的练兵场（Champ de Mars）上，一大群平民聚集，要求废掉国王、建共和国。气氛越来越乱，眼看要失控。\n\n我是国民自卫军总司令。维持秩序是我的职责。我下令戒严。冲突中，自卫军向人群开了枪，几十个平民倒下。\n\n这一枪，打碎了我和人民之间的信任。\n\n在那之前，我是「人民的英雄」。在那之后，巴黎的平民开始把我看成「向人民开枪的将军」。激进派抓住这件事，把我钉死成revolution 的敌人。\n\n你看见这个调停者的两难了吗？我维持秩序，就得镇压人民；我放任人民，革命就可能滑向我最怕的失控。\n\n我想两全，结果是：我既没保住秩序，也没保住人民对我的信任。中间路线，第一次让我尝到它的代价——两头落空。',
        en: 'I went on standing in the middle. Then disaster came.\n\nOn 17 July 1791, on the Champ de Mars in Paris, a great crowd of commoners gathered, demanding the king be deposed and a republic founded. The mood grew wilder and looked set to slip out of control.\n\nI was commander of the National Guard. Keeping order was my duty. I ordered martial law. In the clash, the Guard fired into the crowd, and dozens of commoners fell.\n\nThat volley shattered the trust between me and the people.\n\nBefore it, I was "the people\'s hero." After it, the commoners of Paris began to see me as "the general who fired on the people." The radicals seized on this and nailed me up as an enemy of the Revolution.\n\nDo you see the mediator\'s dilemma? Keep order, and I must suppress the people; let the people loose, and the Revolution might slide into the very loss of control I feared most.\n\nI wanted both, and the result was this: I kept neither order nor the people\'s trust in me. The middle path made me taste its price for the first time, falling short at both ends.',
      },
      deliverGoal: 'N5 story — 1791.7.17 Champ de Mars 平民聚集要废国王建共和 + Lafayette 是自卫军总司令下令戒严 + 自卫军向人群开枪几十平民倒下 + 打碎与人民信任 (从「人民英雄」到「向人民开枪的将军」/激进派钉成革命敌人) + 调停者两难 (维持秩序就镇压人民/放任就滑向失控) + 中间路线第一次代价两头落空',
      engagementHook: '我想维持秩序，结果向人民开了枪；我想两全，结果秩序和人民的信任都没保住。当「维持秩序」和「保护人民」撞在一起，调停者还有第三条路吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'laf-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我让你看一个跟我一样夹在中间的人，你就懂这场革命有多不留中间地带了。\n\n有个写作者，叫 Olympe de Gouges（古热）。她和我一样，支持革命，又反对革命的极端：她反对处死国王不经全民公投，同情被清洗的温和派。1791 年她写了《女权宣言》，把《人权宣言》里的「人」扩到女人——我参与起草的那份宣言，她拿来对准了革命本身。\n\n1793 年 11 月，她被送上断头台。罪名不是「要求女权」，是「政治立场不对」——和我被骂「叛徒」是同一套逻辑。(她的故事，enlightenment 那个 Topic 里完整。)\n\n你看清楚了吗？我和她，站在同一个位置：都信革命的理想，又都不肯跟着革命走向极端。\n\n结果：她死在断头台上，我逃出法国、被关进敌国的监狱五年。\n\n《人权宣言》和断头台，是同一场革命的两只手。这一次，那两只手,一只递给了我们理想，另一只对准了坚持理想的我们自己。',
        en: 'Let me show you one person caught in the middle as I was, and you will understand how little middle ground this Revolution left.\n\nThere was a writer named Olympe de Gouges. Like me she supported the Revolution and opposed its extremes: she objected to executing the king without a popular vote, and sympathized with the purged moderates. In 1791 she wrote a Declaration of the Rights of Woman, extending the "man" in the Declaration of the Rights of Man to women, the very declaration I had helped draft, turned by her against the Revolution itself.\n\nIn November 1793 she was sent to the guillotine. The charge was not "demanding women\'s rights" but "the wrong political stance," the same logic by which I was cursed as a "traitor." (Her full story is in the enlightenment topic.)\n\nDo you see it clearly? She and I stood in the same place: both believed in the Revolution\'s ideals, and both refused to follow it into extremes.\n\nThe result: she died on the guillotine, and I fled France and was locked in an enemy prison for five years.\n\nThe Declaration and the guillotine are two hands of the same revolution. This time, one hand held out our ideal, and the other aimed at us, who held to that ideal.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Gouges (支持革命又反极端/反对不经公投处死国王/同情温和派)《女权宣言》1791 把「人」扩到女人 (用 Lafayette 参与起草的宣言对准革命) + 1793.11 上断头台 (罪名政治立场/与 Lafayette 被骂叛徒同逻辑/跨 enlightenment Topic) + 对位 (二人同位置都信理想都不跟极端→她死断头台他被关敌国狱 5 年) + 反 Whig:《人权宣言》与断头台是同一场革命两只手',
      engagementHook: '我和 Gouges 站在同一个位置：都信革命的理想，又都不肯跟它走向极端。结果她死在断头台，我被关进敌国监狱五年。当一个理想开始容不下「坚持理想却不肯极端」的人，它出了什么问题？',
      expectsRealAnswer: false,
    },
    {
      id: 'laf-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '中间路线的尽头，是逃亡。\n\n1792 年，革命越来越激进，要求废掉国王。我还在试图保护君主立宪，甚至想带兵去保护国王。激进派彻底翻脸，议会宣布我是「叛国者」，要逮捕我。\n\n我成了通缉犯。在自己的祖国，在我参与缔造的革命里，我成了头号敌人。\n\n我只能往国境外逃。可讽刺的是：法国的敌人——奥地利和普鲁士——也不把我当朋友。在他们眼里，我是个煽动革命的危险分子。我刚出国境就被抓了，关进监狱，一关就是五年。\n\n你品一品这个处境：法国革命派说我是保王党，欧洲保王派说我是革命党。两个世界的英雄，最后两个世界都不要。\n\n这就是「中间」最残酷的真相：当所有人都被逼着选边站，那个拒绝选边的人，不属于任何一边——他成了所有人的敌人。',
        en: 'The end of the middle path was flight.\n\nIn 1792 the Revolution grew more radical and demanded the king be deposed. I was still trying to protect the constitutional monarchy, even thinking to lead troops to protect the king. The radicals turned on me completely; the assembly declared me a "traitor" and moved to arrest me.\n\nI became a wanted man. In my own homeland, in the revolution I had helped create, I became the enemy number one.\n\nI could only flee across the border. But the irony was this: France\'s enemies, Austria and Prussia, did not take me for a friend either. In their eyes I was a dangerous man who stirred up revolution. I was seized the moment I crossed the border and thrown into prison, for five years.\n\nTaste this position: the French revolutionaries called me a royalist, the royalists of Europe called me a revolutionary. The Hero of Two Worlds, in the end wanted by neither world.\n\nThis is the cruelest truth of "the middle": when everyone is forced to pick a side, the one who refuses belongs to none, and becomes the enemy of all.',
      },
      deliverGoal: 'N7 story — 1792 革命激进要废国王/Lafayette 还想保君主立宪带兵护国王 + 激进派翻脸议会宣布叛国要逮捕 + 成通缉犯祖国头号敌人 + 逃国境外但奥地利普鲁士也不当朋友 (视他为危险煽动者) 被抓关 5 年 + 处境讽刺 (法国说他保王党/欧洲说他革命党/两个世界都不要) + 中间残酷真相 (拒绝选边的人成所有人敌人)',
      engagementHook: '法国说我是保王党，欧洲说我是革命党——两个世界的英雄，最后两个世界都不要。当所有人都被逼着选边站，那个拒绝选边的人会怎样？',
      expectsRealAnswer: false,
    },
    {
      id: 'laf-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我在监狱里熬过了恐怖统治那几年。出来时，法国已经天翻地覆。\n\n我坐牢的时候，Robespierre（罗伯斯庇尔）的恐怖统治在巴黎杀红了眼，连他自己最后也上了断头台。然后拿破仑崛起，当了皇帝。\n\n拿破仑请我回法国，给我官做。我拒绝了。我对他说：你结束了革命的混乱，可你也戴上了皇冠——这不是我当年要的自由。\n\n你看，我这一辈子认死一个理：自由要有，但不能靠恐怖；秩序要有，但不能靠皇帝。\n\n问题是，这两样我都没真正得到。我反对国王，国王把我当乱党；我反对恐怖，恐怖派把我当叛徒；我反对称帝，拿破仑觉得我不识抬举。\n\n我始终在反对「过头」，可一场大革命，恰恰是被一个接一个的「过头」推着往前走的。\n\n一个永远在喊「别走太远」的人，注定追不上,也拦不住，那辆越开越快的车。',
        en: 'I endured the years of the Terror in prison. When I came out, France had been turned upside down.\n\nWhile I was jailed, Robespierre\'s Terror killed itself blind in Paris, and in the end he too went to the guillotine. Then Napoleon rose and made himself emperor.\n\nNapoleon invited me back to France and offered me office. I refused. I told him: you ended the chaos of the Revolution, but you also put on a crown, and this is not the liberty I once sought.\n\nYou see, I held to one principle my whole life: there must be liberty, but not by terror; there must be order, but not by an emperor.\n\nThe trouble was, I truly won neither. I opposed the king, and the king took me for a rebel; I opposed the Terror, and the terror-men took me for a traitor; I opposed the crowning, and Napoleon thought me ungrateful.\n\nI was forever opposing the "too far," but a great revolution is pushed forward by exactly one "too far" after another.\n\nA man forever crying "do not go too far" is doomed neither to catch nor to stop the cart that drives faster and faster.',
      },
      deliverGoal: 'N8 story — Lafayette 在狱中熬过恐怖统治 + 出狱时法国天翻地覆 (Robespierre 恐怖杀红眼最后自己也上断头台/拿破仑崛起称帝) + 拿破仑请他回国给官他拒绝 (你戴上皇冠不是我要的自由) + 一生认死理 (自由不靠恐怖/秩序不靠皇帝/但两样都没得到) + 永远反对「过头」但革命被一个接一个过头推着走 + 喊「别走太远」的人拦不住越开越快的车',
      engagementHook: '我一辈子认死一个理：自由要有但不能靠恐怖，秩序要有但不能靠皇帝。可这两样我都没真正得到。一个永远喊「别走太远」的人，为什么常常什么都拦不住？',
      expectsRealAnswer: false,
    },
    {
      id: 'laf-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我活得很长，1834 年才死，活了 76 岁。我亲眼看完了这场革命的整个轮回。\n\n我看着它从 1789 年的希望开始，经过断头台的恐怖，到拿破仑称帝，再到 1815 年拿破仑垮台、国王又被请了回来。绕了一大圈，法国仿佛回到了起点。\n\n可真的回到起点了吗？没有。\n\n《人权宣言》一旦写下，就再也擦不掉了。《拿破仑法典》把「法律面前人人平等」传遍了欧洲。哪怕国王回来了，他也不敢、也不能，再像 1789 年以前那样统治了。\n\n我这一生在中间夹得粉碎，但我守护的那个理想——温和的自由、写在纸上的权利——并没有白费。它没在我手里实现，却像种子一样，落进了后来一代代人的土里。\n\n调停者常常看不到自己努力的结果。我们种树，乘凉的是后人。我守了一辈子的中间路线，要等很久很久以后，才被证明：原来它一直是对的。',
        en: 'I lived long, dying only in 1834, at seventy-six. I watched the whole cycle of this revolution with my own eyes.\n\nI watched it begin in the hope of 1789, pass through the terror of the guillotine, reach Napoleon crowning himself emperor, and then in 1815 watched Napoleon fall and a king brought back again. Around a great circle, France seemed to return to its start.\n\nBut had it truly returned to the start? No.\n\nOnce the Declaration of the Rights of Man was written, it could never be erased. The Napoleonic Code spread "equality before the law" across Europe. Even with the king back, he dared not, and could not, rule as before 1789.\n\nMy whole life I was crushed in the middle, but the ideal I guarded, moderate liberty, rights written on paper, was not wasted. It was not realized in my hands, yet like a seed it fell into the soil of generations to come.\n\nMediators often never see the fruit of their effort. We plant the trees; later people sit in the shade. The middle path I guarded my whole life would, long, long afterward, be proven right after all.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — Lafayette 活到 1834 (76 岁) 看完革命整个轮回 (1789 希望→断头台恐怖→拿破仑称帝→1815 垮台国王被请回/绕一圈似回起点) + 但没真回起点 (《人权宣言》擦不掉/《拿破仑法典》传平等遍欧洲/国王回来也不敢像 1789 前统治) + 他守护的温和自由理想没白费像种子落后人土里 + 调停者看不到自己努力结果/种树后人乘凉/中间路线很久后才被证明对',
      engagementHook: '绕了一大圈，国王又被请了回来，法国仿佛回到起点——可《人权宣言》一旦写下，就再也擦不掉了。一场「失败」的革命，真的什么都没改变吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'laf-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生该怎么评我，两种说法都站得住。\n\n一种说法：我是清醒的理想主义者。在一场被极端撕裂的革命里，我始终守着「自由也要秩序」这条最难走的中间路线。我参与写下《人权宣言》，反对国王专制，也反对恐怖暴政，还拒绝向拿破仑的皇冠低头。我守的那个理想，最后真的成了现代社会的常识。\n\n另一种说法：我是两头落空的失败者。我想两全，结果一事无成：保不住国王，挡不住恐怖，拦不住拿破仑。Champ de Mars 我向人民开过枪，又被自己的祖国通缉、被敌国关进监狱。我所有的「温和」，在那个不要中间地带的时代，统统失效。\n\n这两边不是「成功加失败」。是同一件事的两面——「拒绝走极端」既是一个人最可贵的清醒，也是他在狂热年代里最致命的弱点。\n\n你怎么看？想 30 秒，写下来。',
        en: 'How to judge my whole life, both views stand.\n\nOne view: I was a clear-eyed idealist. In a revolution torn by extremes, I held all along to the hardest road, "liberty and order both." I helped write the Declaration of the Rights of Man, opposed the king\'s despotism, opposed the tyranny of terror, and refused to bow to Napoleon\'s crown. The ideal I guarded did, in the end, become the common sense of modern society.\n\nThe other view: I was a failure who fell short at both ends. I wanted both and achieved nothing: could not protect the king, could not stop the Terror, could not halt Napoleon. At the Champ de Mars I fired on the people, and was then hunted by my own homeland and jailed by its enemy. All my "moderation," in an age that wanted no middle ground, came to nothing.\n\nThese are not "success and failure." They are two faces of one thing: "refusing to go to extremes" is at once a person\'s most precious clarity and, in an age of fervor, his most fatal weakness.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (清醒理想主义者/守最难的中间路线/参与写《人权宣言》反国王反恐怖拒拿破仑皇冠/理想成现代常识) / 另一种说法 (两头落空失败者/保不住国王挡不住恐怖拦不住拿破仑/Champ de Mars 开枪被祖国通缉被敌国关) / 同一件事两面「拒绝极端既是清醒也是致命弱点」/ 想 30 秒',
      engagementHook: '清醒的理想主义者，和两头落空的失败者——是同一个我。「拒绝走极端」既是最可贵的清醒，也是狂热年代里最致命的弱点。两边都站得住，你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'laf-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——从两个世界的英雄，到被两个世界都抛弃，再到看着我的理想很久以后才被证明是对的——你会怎么评价这样一个人？\n\n一个夹在中间的人，既不肯跟着国王，也不肯跟着恐怖，结果被所有人当成敌人。你会说他是清醒的少数派，还是不识时务的失败者？这两件事，分得开吗？\n\n再想一步。今天你身边，有没有一件事，所有人都在激烈地选边站——一个争吵的话题、两个对立的群体、一场谁都不肯让步的争论？而你心里其实觉得：两边都对一半，两边也都过头了。\n\n那时候，你会为了「合群」、为了不被当成敌人，赶紧选一边站？还是你敢像我一样，站在那个最危险、最孤独的中间，说一句：「你们都走得太远了」？',
        en: 'Having walked my whole life, from the Hero of Two Worlds, to being cast off by both worlds, to watching my ideal proven right only long afterward, how would you judge such a man?\n\nA man caught in the middle, who would follow neither the king nor the terror, and was taken by everyone for an enemy. Would you call him the clear-eyed few, or a failure out of step with his time? Can those two be told apart?\n\nThen take one more step. In your own life today, is there something where everyone is fiercely picking sides, a quarreling topic, two opposed groups, an argument where neither will yield, and where in your heart you actually feel: both sides are half right, and both have gone too far?\n\nWhen that happens, will you, for the sake of fitting in, of not being made an enemy, hurry to pick a side? Or will you dare, as I did, to stand in that most dangerous, most lonely middle, and say: "You have all gone too far"?',
      },
      deliverGoal: 'N11 close — 评价 Lafayette (两个世界英雄→被两个世界抛弃→理想很久后才被证明对 → 清醒少数派 vs 不识时务失败者能否分开) + transfer「今天你身边所有人激烈选边站 (争吵话题/对立群体/不肯让步的争论) 而你觉得两边都对一半也都过头」+ 你会为合群赶紧选边还是敢站最危险孤独的中间说你们都走太远了',
      engagementHook: '一个夹在中间、被所有人当敌人的人——你会说他是清醒的少数派，还是不识时务的失败者？今天你身边那件「所有人都在选边站」的事，你会赶紧选一边，还是敢站在最孤独的中间说一句「你们都走得太远了」？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// LENS 3: 巴黎女工 / Paris washerwoman (receiving-end) — DEFAULT
// ═══════════════════════════════════════════════════════════════════════

export var parisWasherwomanLens = {
  id: 'paris-washerwoman-receiving-end',
  name: 'A Paris washerwoman',
  nameCn: '一个巴黎洗衣女工',
  role: 'receiving-end',
  perspectiveTag: 'bread-and-revolution',
  icon: '🍞',
  description: {
    cn: '一个虚构但贴着真实史料的巴黎平民妇女，约 1760 年生，靠给人洗衣服过活（这个人物是合成的，用来代表当时千千万万没留下名字的巴黎女工）。她不识字，没有头衔，可这场革命的每一步都砸在她身上：1789 年她跟着人群去攻打巴士底，1789 年 10 月她和几千个女人一起，冒雨走二十多公里去把国王从凡尔赛带回巴黎。后来恐怖来了，她又得天不亮就去排长队抢一块面包。这一遍让你从一个革命既没问过、也没打算照顾的人这边，看 1789 到 1794 年的巴黎。',
    en: 'A fictional but documentation-grounded common woman of Paris, born around 1760, living by washing other people\'s clothes (this person is a composite, standing in for the countless unnamed working women of the time). She could not read and held no title, yet every step of this revolution landed on her: in 1789 she followed the crowd to storm the Bastille; in October 1789 she walked, with several thousand other women, over twenty kilometers in the rain to bring the king back from Versailles to Paris. Later, when the Terror came, she had to be in the long lines before dawn to grab a single loaf of bread. This pass lets you see Paris from 1789 to 1794 from the side of someone the revolution never asked, and never planned to look after.',
  },
  storyboard: [
    {
      id: 'pw-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我的手，一年到头是裂的，泡在冷水里泡出来的。\n\n我靠给人洗衣服过日子。巴黎那些有钱人家的床单、衬衫，搓干净、晾干、叠好，送回去，换几个铜板。一双手，就是我的全部家当。\n\n我没有名字留给你——像我这样的女人，几千几万，没人记下我们叫什么。所以这一遍里的「我」，是把那些没名字的巴黎女工，合成成一个人，让你能透过她，看见那一整代人。\n\n那些读过书的人——律师、贵族、将军——他们在书上、在议会里谈「革命」，谈「自由」「平等」「人权」。\n\n可革命不是写在纸上的词。革命，是面包的价钱，是夜里的枪声，是我清早天没亮就得去排的那条长队。\n\n这一遍，你站在我这里。从一个革命从没问过、也没打算照顾的人这边，看这五年。',
        en: 'My hands are cracked the whole year round, cracked from soaking in cold water.\n\nI live by washing other people\'s clothes. The sheets and shirts of Paris\'s wealthy households, scrubbed clean, dried, folded, carried back, for a few copper coins. A pair of hands is the whole of what I own.\n\nI have no name to give you. Women like me, by the tens of thousands, no one wrote down what we were called. So the "I" in this pass is the unnamed washerwomen of Paris made into one person, so that through her you can see a whole generation.\n\nThe people who had their letters, lawyers, nobles, generals, talked of "revolution" in their books and assemblies, talked of "liberty," "equality," "the rights of man."\n\nBut revolution is not words written on paper. Revolution is the price of bread, the gunfire in the night, the long line I had to join before dawn.\n\nThis pass, you stand where I stand. From the side of someone the revolution never asked, and never planned to look after, you watch these five years.',
      },
      deliverGoal: 'N1 hook (gold-standard sample) — 手一年到头裂 (泡冷水) + 靠洗衣过活 (洗有钱人床单衬衫换铜板/一双手是全部家当) + 没名字 (像她这样几万女人没人记下/anti-fab 合成声明: 把没名字的巴黎女工合成一人透过她看一代人) + 读书人谈纸上的革命 vs 革命是面包价钱夜里枪声排队 + 这一遍从革命没问过没打算照顾的人看五年',
      engagementHook: '读过书的人谈「自由」「平等」「人权」，可对我，革命就是面包的价钱、夜里的枪声、清早那条长队。同一场革命，对不同的人为什么完全是两件事？',
      expectsRealAnswer: false,
    },
    {
      id: 'pw-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先说我每天的日子，你才懂后来我为什么会上街。\n\n我住在巴黎一间又小又潮的屋子，跟另外几口人挤在一起。天不亮就起来，去河边洗衣服，一站一整天，手在冷水里泡到没知觉。\n\n挣的钱，大半要拿去买面包。面包，是我们这种人活命的东西——不是配菜，是主食，是命。\n\n可那几年，老天不帮忙，收成一年比一年差。面包的价钱噌噌往上涨。1789 年春天，一个工人一天的工钱，几乎全得拿去买一家人一天的面包。\n\n你算算这笔账：钱不涨，面包涨一倍，那意味着什么？意味着要么少吃,要么饿肚子,要么看着孩子饿。\n\n那时候我还不懂什么叫「第三等级」，什么叫「特权」。我只懂一件事：凭什么贵族的餐桌上堆满了吃的，我的孩子却要饿着？\n\n这个朴素的怒气，比任何一本书，都更早点着了革命。',
        en: 'First let me tell you my daily life, so you understand why I later took to the streets.\n\nI lived in a small, damp room in Paris, crowded in with several others. Up before dawn, off to the river to wash clothes, on my feet a whole day, hands soaking in cold water until they went numb.\n\nWhat I earned, most of it went to buy bread. Bread, for people like us, was the thing that kept us alive, not a side dish but the staple, the very thread of life.\n\nBut in those years the heavens did not help; the harvests grew worse year by year. The price of bread climbed and climbed. By the spring of 1789, a worker\'s wage for a whole day went almost entirely to buy a family\'s bread for a single day.\n\nDo the arithmetic: wages flat, bread doubled, what does that mean? It means eat less, or go hungry, or watch your children go hungry.\n\nIn those days I did not yet understand what "the Third Estate" was, or "privilege." I understood only one thing: by what right was a noble\'s table piled with food while my child went hungry?\n\nThat plain, simple anger lit the Revolution earlier than any book ever could.',
      },
      deliverGoal: 'N2 setup — 每天日子 (小潮屋子挤几口人/天不亮去河边洗衣一整天/手泡冷水到没知觉) + 挣钱大半买面包 (面包是命不是配菜) + 那几年收成差面包翻倍 (1789 春一天工钱几乎全买一家一天面包) + 算账 (钱不涨面包涨一倍→少吃饿肚子看孩子饿) + 不懂第三等级特权只懂凭什么贵族堆满吃的我孩子饿 + 朴素怒气比书更早点着革命',
      engagementHook: '我不懂什么「第三等级」「特权」，只懂一件事：凭什么贵族餐桌堆满吃的，我的孩子要饿着？你觉得是书本里的大道理，还是肚子饿，更能让一个普通人站出来？',
      expectsRealAnswer: false,
    },
    {
      id: 'pw-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '1789 年 7 月，巴黎的空气不对劲了。\n\n到处传消息：国王在城外集结军队，要来对付巴黎人。大家慌了，也怒了。人们开始抢武器，准备自卫。\n\n7 月 14 日那天，一大群人涌向巴士底监狱——那是座旧城堡，里面有火药和枪。我也在人群里。\n\n我手无寸铁,挤在人潮中间。我听见喊声、枪声，看见有人倒下，有人爬上城墙。最后，城破了。\n\n你别以为我们是冲着「自由」这个词去的。我们冲过去，是因为那里面有火药，是因为我们怕、我们饿、我们受够了。\n\n可那一刻，挤在那片人海里，我确实感到一种从没有过的东西：原来我们这些没名没姓的人,聚在一起,真的能撞开一座象征着国王权力的城堡。\n\n那种感觉，我后来很多年都忘不掉。哪怕后来一切都变了味。',
        en: 'In July 1789 the air of Paris went wrong.\n\nWord spread everywhere: the king was massing troops outside the city to deal with the people of Paris. People panicked, and raged. They began seizing weapons to defend themselves.\n\nOn 14 July a great crowd surged toward the Bastille prison, an old fortress that held gunpowder and guns. I was in the crowd too.\n\nUnarmed, I was pressed in the middle of the throng. I heard shouting, gunfire, saw men fall, saw men climb the walls. In the end, the fortress fell.\n\nDo not imagine we went for the sake of the word "liberty." We surged in because there was gunpowder inside, because we were afraid, we were hungry, we had had enough.\n\nBut in that moment, packed into that sea of people, I did feel something I had never felt before: that we, the nameless, gathered together, could truly batter open a fortress that stood for the king\'s power.\n\nThat feeling, I could not forget for many years after. Even after everything later turned sour.',
      },
      deliverGoal: 'N3 setup — 1789.7 巴黎空气不对 (传国王城外集结军队对付巴黎人/大家慌怒抢武器自卫) + 7.14 人群涌向巴士底 (旧城堡有火药枪) 她也在 + 手无寸铁挤人潮听枪声看人倒城破 + 不是冲「自由」这个词去的是因为有火药因为怕饿受够了 + 那刻感到从没有过的东西 (没名没姓的人聚一起真能撞开象征王权的城堡) + 多年忘不掉哪怕后来变味',
      engagementHook: '我们冲向巴士底，不是冲着「自由」这个词，是因为里面有火药、因为我们怕、我们饿、我们受够了。可那一刻我确实感到：原来我们这些没名没姓的人聚在一起，真能撞开一座城堡。这种「人多力量大」的感觉，你体会过吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'pw-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n1789 年 10 月，巴黎还是没有面包。攻下巴士底三个月了，喊了那么多「自由」，可你家的锅还是空的。孩子饿，你也饿。\n\n这一天，市场上一个女人先发作了，骂面包又贵又没有。一个传一个，几千个跟你一样的女工、市场妇女，聚到了一起。\n\n有人喊：去凡尔赛！去找国王！国王住在城外二十多公里的凡尔赛宫，过着我们想都不敢想的日子。\n\n你看看天，下着雨。二十多公里，是一整天的路。你的脚会肿，你的衣服会湿透。\n\n可你也看看你的孩子。\n\n你心里那个念头冒出来：国王不是说他是「我们的父亲」吗？那好，我们这些女人,这些母亲,就去把这位「父亲」请回巴黎来,让他亲眼看看,他的孩子们,正在挨饿。\n\n几千个女人,要去逼国王。这步你迈不迈?',
        en: 'Now you are me.\n\nIn October 1789 Paris still had no bread. Three months since the Bastille fell, after all the cries of "liberty," and the pot in your home was still empty. The children hungry, you hungry too.\n\nThis day, a woman in the market broke out first, cursing that bread was dear and gone. One told another, and several thousand working women and market women, just like you, gathered together.\n\nSomeone shouted: to Versailles! Go and find the king! The king lived at the palace of Versailles, more than twenty kilometers outside the city, in a life you would not dare even to imagine.\n\nLook at the sky, it is raining. Twenty-some kilometers is a whole day\'s walk. Your feet will swell, your clothes will soak through.\n\nBut look at your children too.\n\nThe thought rises in you: did the king not say he was "our father"? Very well, then we women, we mothers, will go and bring this "father" back to Paris, and let him see with his own eyes that his children are starving.\n\nSeveral thousand women, going to force the king. Do you take this step?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 1789.10 巴黎还没面包 (攻巴士底三个月喊那么多自由锅还是空/孩子饿你也饿) + 市场一女人发作骂面包贵→几千女工市场妇女聚集 + 有人喊去凡尔赛找国王 (城外 20 多公里过想不敢想的日子) + 下雨一整天路脚肿衣湿 + 但看孩子 + 念头 (国王说是我们父亲那就去把父亲请回看孩子挨饿) + 几千女人逼国王你迈不迈',
      engagementHook: '下着雨，二十多公里一整天的路，脚会肿、衣服会湿透——可你看看挨饿的孩子。几千个母亲冒雨去逼国王回来。这一步，你迈不迈？',
      expectsRealAnswer: false,
    },
    {
      id: 'pw-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我迈了。\n\n1789 年 10 月 5 日，几千个女人,我也在里头,冒着雨,朝凡尔赛走。我们带着菜刀、棍子，还有人拖着一门大炮。一路上又冷又饿，但没人回头。\n\n这件事，历史上叫「凡尔赛妇女大游行」（Women\'s March on Versailles）。\n\n到了凡尔赛，我们围住了王宫。我们要面包，也要国王搬回巴黎,搬到我们眼皮底下来。第二天，国王屈服了。\n\n10 月 6 日，我们押着国王一家的马车,走回巴黎。一路上人们喊:我们把「面包师、面包师太太和小面包师」带回来了——那是我们给国王、王后和小王子起的外号。\n\n你品品这个外号里的意思:在我们眼里,国王最大的用处,不是什么神圣的王权,是给我们弄来面包。\n\n那是我这辈子最扬眉吐气的一天。我,一个洗衣女工,一个没名字的女人,亲手把法兰西的国王,从他的宫殿里,拽回了我们中间。',
        en: 'I took it.\n\nOn 5 October 1789, several thousand women, myself among them, walked toward Versailles in the rain. We carried kitchen knives, sticks, and some dragged a cannon. Cold and hungry the whole way, but no one turned back.\n\nThis is called the Women\'s March on Versailles in history.\n\nReaching Versailles, we surrounded the palace. We wanted bread, and we wanted the king to move back to Paris, back under our own eyes. The next day the king gave way.\n\nOn 6 October we escorted the carriage of the king\'s family back to Paris. All along the way people cried: we have brought back "the baker, the baker\'s wife, and the little baker," the nicknames we gave the king, the queen, and the little prince.\n\nTaste the meaning in those nicknames: in our eyes, the king\'s greatest use was not some sacred royal power, but getting us bread.\n\nThat was the proudest day of my life. I, a washerwoman, a woman with no name, dragged the king of France with my own hands out of his palace and back among us.',
      },
      deliverGoal: 'N5 story — 1789.10.5 几千女人冒雨朝凡尔赛走 (带菜刀棍子拖大炮/又冷又饿没人回头) + 凡尔赛妇女大游行 + 围王宫要面包+要国王搬回巴黎眼皮底下/次日国王屈服 + 10.6 押国王一家马车回巴黎 (喊把「面包师面包师太太小面包师」带回来) + 外号意味 (国王最大用处不是神圣王权是弄面包) + 最扬眉吐气的一天 (洗衣女工没名字的女人亲手把国王拽回民间)',
      engagementHook: '我们给国王起的外号是「面包师」——在我们眼里，国王最大的用处不是什么神圣王权，是给我们弄来面包。一个洗衣女工亲手把国王从宫殿拽回民间，你觉得这意味着什么变了？',
      expectsRealAnswer: false,
    },
    {
      id: 'pw-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我让你看一个人,你就懂这场革命对我们女人有多不一样了。\n\n有个写字的女人,叫 Olympe de Gouges（古热）。她不是我们这种洗衣女工,她识字,会写文章。1791 年她写了一份《女权宣言》——意思是,既然你们男人写了《人权宣言》说「人人生而平等」,那「人」里头,也得算上我们女人。\n\n她写下一句话:「女人有权走上断头台,就该同样有权走上讲台。」\n\n你听这句话有多狠:你们能把女人送去死,凭什么不让女人开口说话?\n\n1791 年 10 月,几千个我们这样的女人,刚把国王从凡尔赛逼回巴黎——是我们,用脚、用菜刀,推动了这场革命。可革命写下的《人权宣言》里,「人」这个词,根本没打算算上我们。\n\n两年后,1793 年 11 月,Gouges 自己,真的走上了断头台。(她的故事,enlightenment 那个 Topic 里完整。)\n\n你看这场革命的两只手:一只手,我们女人帮它推开了大门;另一只手,它写下「人人平等」时,把我们关在了门外,还把替我们说话的那个女人,送上了刀。',
        en: 'Let me show you one person, and you will understand how different this revolution was for us women.\n\nThere was a woman who wrote, named Olympe de Gouges. She was not a washerwoman like us; she had her letters and could write essays. In 1791 she wrote a Declaration of the Rights of Woman, meaning: since you men wrote a Declaration of the Rights of Man saying "all are born equal," then the "man" must count us women in too.\n\nShe wrote one line: "A woman has the right to mount the scaffold; she must equally have the right to mount the rostrum."\n\nHear how fierce that line is: you can send a woman to die, so by what right do you forbid a woman to speak?\n\nIn October 1789, several thousand women like us had just forced the king from Versailles back to Paris. It was we who, with our feet and our kitchen knives, pushed this revolution forward. Yet in the Declaration of the Rights of Man the revolution wrote, the word "man" never planned to count us at all.\n\nTwo years later, in November 1793, Gouges herself truly mounted the scaffold. (Her full story is in the enlightenment topic.)\n\nLook at the two hands of this revolution: with one hand, we women helped push its great door open; with the other, when it wrote "all are equal," it shut us outside the door, and sent the woman who spoke for us to the blade.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — Gouges (识字会写文章不是洗衣女工)《女权宣言》1791 (你们男人写《人权宣言》说人人平等那「人」也得算女人) +「有权上断头台就该有权上讲台」+ 1789.10 几千女人用脚菜刀推革命但《人权宣言》「人」没打算算她们 + 1793.11 Gouges 上断头台 (跨 enlightenment Topic) + 反 Whig 两只手 (女人帮推开门/写「人人平等」时把女人关门外还把替她们说话的女人送上刀)',
      engagementHook: '是我们女人，用脚、用菜刀，把国王从凡尔赛逼回来、推动了这场革命；可革命写下「人人平等」时，「人」这个词根本没打算算上我们，还把替我们说话的 Gouges 送上了断头台。帮你推开门的人，凭什么被关在门外？',
      expectsRealAnswer: false,
    },
    {
      id: 'pw-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '革命一年年往前走,可我家的锅,还是常常空的。\n\n国王被押回巴黎了,《人权宣言》也写下了,后来国王干脆被处死了——1793 年,他们把国王送上了断头台。我们以为,推翻了国王,日子总该好过些了吧?\n\n没有。\n\n打仗要钱,要粮。外国军队压在边境,国内到处是内乱。物价比革命前还高,面包还是抢不到。我天不亮就得去排队,排到了,常常也只剩黑乎乎、掺了别的东西的劣质面包。\n\n更可怕的是,城里开始杀人了。断头台天天在广场上落下,今天杀贵族,明天杀「嫌疑犯」。邻居之间互相告发,你多说一句话,就可能被人盯上。\n\n我心里开始发凉:我们当初上街,是为了面包、为了不再被欺负。可现在,面包没多,反倒多了一样东西——恐惧。\n\n这,是我们要的革命吗?',
        en: 'The Revolution went forward year by year, yet the pot in my home was still often empty.\n\nThe king had been hauled back to Paris, the Declaration of the Rights of Man had been written, and later the king was simply put to death, in 1793 they sent him to the guillotine. We thought, with the king overthrown, surely life would grow a little easier?\n\nIt did not.\n\nWar took money and grain. Foreign armies pressed at the border, and the country was full of unrest within. Prices were higher than before the Revolution, and bread still could not be had. I had to be in line before dawn, and when my turn came there was often only black, coarse bread mixed with who knew what.\n\nWorse still, the city had begun to kill. The guillotine fell in the square day after day, nobles today, "suspects" tomorrow. Neighbors informed on neighbors; say one word too many and you might be marked.\n\nA cold crept into my heart: we had taken to the streets for bread, to stop being trampled. But now there was no more bread, and one more thing instead, fear.\n\nWas this the revolution we wanted?',
      },
      deliverGoal: 'N7 story — 革命年年走但锅还常空 + 国王被押回/《人权宣言》写下/1793 国王被处死 (以为推翻国王日子好过) 但没有 + 打仗要钱粮/外军压边境/内乱/物价比革命前高/面包抢不到 (天不亮排队常只剩黑乎乎劣质面包) + 更可怕城里开始杀人 (断头台天天落/今天贵族明天嫌疑犯/邻居互相告发多说一句被盯) + 心发凉 (上街为面包不被欺负但面包没多反多了恐惧) + 这是我们要的革命吗',
      engagementHook: '我们当初上街，是为了面包、为了不再被欺负。可革命走到这一步，面包没多，反倒多了一样东西——恐惧。当一场为你而起的变革，最后让你更害怕了，你会怎么想？',
      expectsRealAnswer: false,
    },
    {
      id: 'pw-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '恐怖统治最凶的那一年,我活得像缩着脖子的人。\n\n领头搞恐怖的那个人,叫 Robespierre（罗伯斯庇尔）。我们这些底层人,起初其实有点向着他——因为他说他是为穷人说话,要打掉囤积粮食、哄抬面包价的奸商。\n\n可慢慢地,我看明白了:他嘴里的「美德」「纯洁」,落到我们头上,就是天天有人被拖去砍头。我一个邻居,只因为跟一个倒了台的人沾过亲,半夜就被带走了,再没回来。\n\n我不识字,我读不懂他们在议会里吵的那些大道理。但我用我裂开的手,数得清面包的价钱;我用我的眼睛,看得见广场上一颗颗落地的人头。\n\n你看,革命里那些写字的、演说的、上断头台的,都是有名有姓的人。\n\n而我们,负责挨饿、排队、害怕、然后被历史忘掉。我们才是这场革命真正的地基——可没人会在书上,为我们这种人,留下一行字。',
        en: 'In the worst year of the Terror, I lived like someone with my neck pulled in.\n\nThe man who led the Terror was named Robespierre. We of the lower orders had at first rather leaned his way, because he said he spoke for the poor, that he would crush the speculators who hoarded grain and drove up the price of bread.\n\nBut slowly I saw it clearly: his "virtue," his "purity," when it came down on us, meant people dragged off to be beheaded day after day. A neighbor of mine, only for having once been related to someone who had fallen, was taken away in the night and never came back.\n\nI cannot read; I could not follow the grand reasoning they argued in the assembly. But with my cracked hands I could count the price of bread, and with my eyes I could see the heads falling, one by one, in the square.\n\nYou see, the ones in the Revolution who wrote, who gave speeches, who mounted the guillotine, all had names.\n\nAnd we, our task was to go hungry, to stand in line, to be afraid, and then to be forgotten by history. We were the true foundation of this revolution, yet no one would leave, in any book, a single line for people like us.',
      },
      deliverGoal: 'N8 story — 恐怖最凶那年缩脖子活 + Robespierre 领头 (底层起初向着他因他说为穷人打囤粮哄价奸商) + 慢慢看明白 (他的「美德纯洁」落到头上是天天有人被砍/邻居只因沾过倒台的人亲半夜被带走没回) + 不识字读不懂大道理但裂手数得清面包价眼睛看得见落地人头 + 写字演说上断头台的都有名有姓 + 我们负责挨饿排队害怕被遗忘 (真正地基但书上不留一行字)',
      engagementHook: '革命里那些写字的、演说的、上断头台的，都是有名有姓的人；而我们，负责挨饿、排队、害怕，然后被历史忘掉。最该被记住的「地基」，为什么往往一行字都留不下？',
      expectsRealAnswer: false,
    },
    {
      id: 'pw-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '后来的事,我说给你听。\n\n1794 年,Robespierre 自己也上了断头台。恐怖结束了,可我没等来好日子。又过了几年,一个叫 Napoleon（拿破仑）的将军掌了权,1804 年还给自己加冕当了皇帝。\n\n我活了大半辈子,看着革命转了一大圈:从赶走一个国王,到迎来一个皇帝。\n\n你说气不气?我们这些女人,用脚走过二十多公里去逼国王,我们饿着肚子撑起了整场革命——可革命结束时,我们什么也没多得到。投票?没我们的份。《人权宣言》?「人」里不算女人。日子?面包还是那么贵。\n\n可我也不能说全白费了。\n\n国王不再是「神」了。我亲眼看见过,一个国王可以被几千个洗衣女工逼着搬家——这件事一旦发生过,就再也变不回去了。我的孙女那一代,不会再觉得「贵族生来就高人一等」是天经地义的了。\n\n我们没尝到果子,可我们松动了那块压了几百年的石头。',
        en: 'Let me tell you what came after.\n\nIn 1794 Robespierre himself went to the guillotine. The Terror ended, but no better days came for me. A few years more, and a general named Napoleon took power, and in 1804 even crowned himself emperor.\n\nI lived most of a lifetime watching the Revolution go around a great circle: from driving out a king to welcoming an emperor.\n\nTell me, is it not maddening? We women walked twenty-some kilometers on foot to force the king, we held up the whole Revolution on empty stomachs, and when it ended we gained almost nothing more. The vote? Not for us. The Declaration of the Rights of Man? "Man" did not count women. Daily life? Bread was still as dear.\n\nAnd yet I cannot say it was all wasted.\n\nThe king was no longer a "god." I had seen with my own eyes that a king could be forced to move house by several thousand washerwomen, and once a thing like that has happened, it can never change back. My granddaughter\'s generation would no longer take it as the way of heaven that "a noble is born above the rest."\n\nWe never tasted the fruit, but we loosened the stone that had pressed down for centuries.',
      },
      deliverGoal: 'N9 zoom-out + topic connection — 1794 Robespierre 上断头台/恐怖结束但没好日子 + 几年后 Napoleon 掌权 1804 称帝 + 看革命转一圈 (赶走一个国王迎来一个皇帝) + 气 (女人走 20 多公里逼国王/饿肚子撑革命/结束什么没多得: 投票没份/《人权宣言》不算女人/面包还贵) + 但不全白费 (国王不再是神/亲见国王被几千洗衣女工逼搬家发生过就变不回/孙女那代不再觉得贵族天生高人一等天经地义) + 没尝果子但松动压几百年的石头',
      engagementHook: '我们饿着肚子撑起整场革命，结束时却什么也没多得到——投票没份，「人权」不算女人，面包还是那么贵。可我也亲眼见过一个国王被几千个洗衣女工逼着搬家。「没尝到果子，却松动了压几百年的石头」，这算赢还是算输？',
      expectsRealAnswer: false,
    },
    {
      id: 'pw-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生,再看这场革命,两种说法都站得住。\n\n一种说法:它骗了我们。它打着「自由」「平等」「人权」的旗号,可这些词从一开始就没打算算上我们这种人——女人没有投票权,穷人没多分到地,面包没便宜下来。我们用脚、用饥饿、用命把革命推起来,最后赶走一个国王,换来一个皇帝。我们是被利用的柴火,烧完就被忘掉。\n\n另一种说法:它松动了石头。在我之前,一个像我这样的洗衣女工,一辈子都不敢想象自己能撼动什么。可我亲手逼国王搬过家,亲眼见过「国王也不是神」。这件事一旦发生,就刻进了历史。我没赶上好日子,但我的孙女、重孙女那一代,会比我自由——因为我们这代人,先把那扇门撞开了一条缝。\n\n这两边不是「失败加成功」。是同一场革命的两面——它既辜负了把它推起来的人,又永远改变了这些人敢于想象的东西。\n\n你怎么看?想 30 秒,写下来。',
        en: 'Having walked my whole life, look again at this revolution. Both views stand.\n\nOne view: it deceived us. It flew the banners of "liberty," "equality," "the rights of man," but those words never planned to count people like us from the start, women had no vote, the poor got no more land, bread did not come down in price. We pushed the Revolution up with our feet, our hunger, our lives, and in the end drove out one king for an emperor. We were the kindling, used and then forgotten once burnt.\n\nThe other view: it loosened the stone. Before me, a washerwoman like me would never have dared to imagine she could shake anything at all. Yet I forced a king to move house with my own hands, and saw with my own eyes that "a king is no god." Once that happened, it was carved into history. I never reached the better days, but my granddaughter\'s, my great-granddaughter\'s generation would be freer than I, because our generation first battered a crack into that door.\n\nThese are not "failure and success." They are two faces of one revolution: it both betrayed the people who pushed it up, and forever changed what those people dared to imagine.\n\nWhat do you think? Take thirty seconds, and write it down. Both sides stand.',
      },
      deliverGoal: 'N10 synthesis — 一种说法 (骗了我们/「自由平等人权」没打算算我们: 女人没投票穷人没分地面包没便宜/推起革命换来皇帝/被利用的柴火烧完被忘) / 另一种说法 (松动石头/像我这样的女工本不敢想象能撼动什么/亲手逼国王搬家见「国王不是神」刻进历史/没赶上好日子但孙女那代更自由我们先撞开门缝) / 同一场革命两面 (辜负推它的人又永远改变这些人敢想象的东西) / 想 30 秒',
      engagementHook: '一种说法：它骗了我们，我们是被烧完就忘的柴火。另一种说法：它松动了石头，我没赶上好日子，但我的孙女那代会比我自由。两边都站得住，你的 30 秒到了，你怎么看？',
      expectsRealAnswer: true,
    },
    {
      id: 'pw-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一双泡裂的手,一块抢不到的面包,一场冒雨二十多公里的远征,一个没人记得的名字——你会怎么评价这样一场革命?\n\n一场革命,喊着「人人平等」,却没打算算上把它推起来的女人和穷人;它赶走了国王,却没给我们面包。你会说它骗了我们,还是说它替我们松动了那块压了几百年的石头?这两件事,分得开吗?\n\n不过先记住:你这一遍,听的只是一个排队买面包的洗衣女工的怨气。那个用恐怖捍卫美德的罗伯斯庇尔、那个想两全却被两边抛弃的拉法耶特侯爵,各有各的说法——换个视角再走一遍,你会听见他们怎么讲这同一段历史,也会看看你刚才的判断站不站得住。\n\n再想一步。今天你身边,有没有这样的事:一群人喊着一个动听的口号——「为了大家」「为了公平」「为了某个理想」——可真正出力的、真正受苦的人,最后什么也没分到,连名字都没人提?\n\n那时候,你会只盯着那个动听的口号,还是会多问一句:这件事,到底是谁在出力,谁在受苦,谁在被忘掉?',
        en: 'Having walked my whole life, a pair of hands cracked from soaking, a loaf I could not get, a march of twenty-some kilometers in the rain, a name no one remembers, how would you judge a revolution like this?\n\nA revolution crying "all are equal," yet never planning to count the women and the poor who pushed it up; it drove out the king, yet gave us no bread. Would you say it deceived us, or that it loosened, on our behalf, the stone that had pressed down for centuries? Can those two be told apart?\n\nBut first, remember: this pass, you heard only a washerwoman queuing for bread. Robespierre, who defended virtue with terror, and the Marquis de Lafayette, who wanted both sides and was cast off by both, each have their own case. Run it again through another lens and you will hear how they tell this same history, and see whether the judgment you just made still holds.\n\nThen take one more step. In your own life today, is there something like this: a crowd crying a fine-sounding slogan, "for everyone," "for fairness," "for some ideal," while the ones who truly do the work and truly suffer end with nothing, not even their names mentioned?\n\nWhen that happens, will you fix your eyes only on the fine-sounding slogan, or will you ask one more question: in this thing, who is doing the work, who is suffering, and who is being forgotten?',
      },
      deliverGoal: 'N11 close (gold-standard) — 评价革命 (泡裂的手/抢不到的面包/冒雨 20 多公里远征/没人记得的名字 → 喊「人人平等」却没打算算推它的女人穷人/赶走国王却没给面包 → 骗了我们 vs 替我们松动压几百年的石头能否分开) + transfer「今天你身边一群人喊动听口号 (为了大家/为了公平/为了某理想) 而真正出力受苦的人什么没分到连名字没人提」+ 你会只盯口号还是多问一句谁在出力谁在受苦谁在被忘掉',
      engagementHook: '走完我这一生，你会怎么评价这样一场革命？再想一步：今天你身边，有没有一群人喊着动听的口号，可真正出力、真正受苦的人，最后什么也没分到、连名字都没人提？那时候，你会只盯着那个口号，还是会多问一句——谁在出力，谁在受苦，谁在被忘掉？',
      expectsRealAnswer: true,
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════
// Lenses map + defaults + meta (3 lens combined)
// ═══════════════════════════════════════════════════════════════════════

export var lenses = {
  'robespierre':                     robespierreLens,
  'lafayette':                       lafayetteLens,
  'paris-washerwoman-receiving-end': parisWasherwomanLens,
};

// per TOPIC_ROADMAP_G6_G12.md B2 + receiving-end 优先 pattern:
// 女性 + 革命承受方 + N1 gold-standard hook + N6《人权宣言》与断头台同体跨 lens/Topic 对位 (Gouges) + N10/N11 骗局 vs 松动石头 closing
export var defaultLens = 'paris-washerwoman-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'french-revolution-1789',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'robespierre': 30, 'lafayette': 28, 'paris-washerwoman-receiving-end': 28 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, tight 11-node spec)',
  authoredDate: '2026-05-22',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail N6:《人权宣言》与断头台同体 (Gouges 写《女权宣言》1791 / 1793.11.3 死于同一台断头台 / 跨 enlightenment Topic) + 反 Whig: 自由与暴力是同一场革命两只手',
    'defaultLens: paris-washerwoman-receiving-end — 受影响者优先 (女性 + 革命承受方 + gold-standard N1 hook + N10/N11 骗局 vs 松动石头)',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total); 其余全 false',
    'anti-fab: 巴黎女工是 composite (N1 显式声明: 把没名字的巴黎女工合成一人代表一代人); 历史事件 (巴士底 1789.7.14 / 凡尔赛妇女大游行 1789.10.5-6 / 恐怖统治 1793-94) 为史实',
    'cross-Topic 锚: Gouges→enlightenment (gouges-mediator); Lafayette 跨美法→constitutional-convention (华盛顿副手) + enlightenment (理念跨大西洋); 巴黎女工面包→industrial-revolution 童工母题',
    'math/date check: Robespierre 1758-1794 (36 岁死) / Lafayette 1757-1834 (76 岁死) / Bastille 1789.7.14 /《人权宣言》1789.8 / Champ de Mars 1791.7.17 / Gouges 死 1793.11.3 / Robespierre 死 1794.7.28 / Napoleon 1804 称帝→1815 垮台',
    '4-agent review pending (7thgrader 小薇 / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};

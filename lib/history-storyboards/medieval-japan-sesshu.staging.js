// Medieval Japan T4 — Lens 2: 雪舟等杨 Sesshū Tōyō
// lonely-mediator | Zen-painter Ming-Japan cultural broker | 1420-1506
//
// Topic: T4 Medieval Japan 794-1603
// Grade 7 Story-First Pedagogy v2
//
// 来源:
//   - Watanabe Akiyoshi 渡邊昭五,《雪舟》(1975) — 基础考证文献
//   - Louisa Huber Rice, Sesshū: The Landscape of His Mind (2010)
//   - Varley, Paul, Japanese Culture (2000)
//   - Sansom, George, Japan: A Short Cultural History (1931)
//   - Reischauer, Edwin, Ennin's Travels in T'ang China (1955)
//
// 反 Whig: 雪舟不是「日本画圣」；「画圣」是明治后民族主义美术史写作的建构
// em-dash 规范: 单段内——最多 3 个
// expectsRealAnswer: 只有 N11 + N12 = true

export var meta = {
  lensId: 'sesshu-mediator',
  name: 'Sesshū Tōyō',
  nameCn: '雪舟等杨',
  role: 'lonely-mediator',
  roleDescription: 'Zen-painter Ming-Japan cultural broker',
  description: 'Zen monk-painter who studied in Ming China and transformed Japanese ink painting, 1420-1506',
  descriptionCn: '赴明学习、改变日本水墨画传统的禅宗僧侣画家，1420-1506',
  topicId: 'medieval-japan',
  nodeCount: 12,
};

export var defaultLens = false;

export var storyboard = [
  {
    id: 'sesshu-N1',
    nodeId: 'sesshu-N1',
    year: 1420,
    location: '备中国，今冈山县西部',
    title: {
      cn: '一个孩子的起点，连他自己都说不清楚',
      en: 'A child\'s beginning, even he cannot say for certain',
    },
    titleCn: '一个孩子的起点，连他自己都说不清楚',
    titleEn: 'A child\'s beginning, even he cannot say for certain',
    content: {
      cn: `1420 年，备中国。我出生在那里。

具体是哪个村子，我说不清楚。后人说是「备中赤浜」，但那是他们在我死后一百多年编出来的说法（Watanabe 1975 考证：此地名为 17 世纪以后传说，非史实）。我只知道我出生在今日冈山县西部一带，备中国的土地上，然后进了宝福寺（Hōfukuji）修禅。

进宝福寺的时候，我还是个孩子。幼年的事，很多我记得不清楚了，记得的是院子里的石头，和老师的背影。

关于幼年，有一个传说流传得很广：说老师罚我绑在柱子上，我用眼泪在地上画了一只老鼠，惟妙惟肖，老师以为是真鼠，大吃一惊，于是放了我。这个故事，有人觉得很美。我不否认它美——禅宗的顿悟故事本来就是为了美而写的。但这个故事最早出现在我死后逾百年的 17 世纪文献里（Watanabe 1975 评注）。它是一个禅宗文学建构，不是我记忆中发生过的事。

我只是一个进了宝福寺的孩子，学坐禅，学抄经，学用笔墨写字。画，是后来的事。

1420 年，这一年，北京的紫禁城刚刚建成（永乐帝 Yongle Emperor 在位，紫禁城 1420 年完工）。日本列岛上，室町幕府（Muromachi Bakufu）的第 4 代将军足利义持（Ashikaga Yoshimochi）在位，距离勘合贸易（kango bōeki）建立才 19 年。整个东亚的格局，在那个时候，还是可以描述的——明朝在北边，日本在东边，海峡中间有船往来。

我不知道这些。我是一个备中国的孩子，住在宝福寺，还没想过「中国」是什么。`,
      en: `1420. Bitchū no Kuni. That is where I was born.

Which village exactly — I cannot say clearly. Later people said "Bitchū Akahama," but that was a story they invented more than a hundred years after I died. (Watanabe 1975 documents this: the place name appears only in seventeenth-century sources, not in records from my lifetime.) I know only that I was born somewhere in what is now the western part of Okayama Prefecture, and that I entered Hōfukuji temple to train in Zen while I was still a child.

When I entered Hōfukuji, I was young. Much of those early years is not clear to me now — what I remember is the stone courtyard and the shape of my teacher's back.

There is a story about my childhood that travels widely: my teacher punished me by tying me to a pillar, and I painted a mouse on the floor using my tears, so lifelike that my teacher thought it was real, and was so startled that he freed me. People find this story beautiful. I do not deny its beauty — Zen teaching stories are written to be beautiful. But this particular story first appears in seventeenth-century sources, more than a hundred years after my death. (Watanabe 1975.) It is a piece of Zen literary construction, not something I remember happening.

I was simply a child inside Hōfukuji, learning to sit in meditation, learning to copy sutras, learning to hold a brush. Painting came later.

In 1420, the year I was born, the Forbidden City in Beijing had just been completed — the Yongle Emperor was on the throne, and the great palace was finished that same year. In Japan, the fourth shogun of the Muromachi Bakufu, Ashikaga Yoshimochi, held power. The kango tribute-trade system between Japan and Ming China had existed for only nineteen years. The shape of East Asia, at that moment, could still be described in clear terms.

I did not know any of that. I was a child in Bitchū Province, living in Hōfukuji, not yet thinking about what "China" might be.`,
    },
    bodyCn: `1420 年，备中国。我出生在那里。

具体是哪个村子，我说不清楚。后人说是「备中赤浜」，但那是他们在我死后一百多年编出来的说法（Watanabe 1975 考证：此地名为 17 世纪以后传说，非史实）。我只知道我出生在今日冈山县西部一带，备中国的土地上，然后进了宝福寺（Hōfukuji）修禅。

进宝福寺的时候，我还是个孩子。幼年的事，很多我记得不清楚了，记得的是院子里的石头，和老师的背影。

关于幼年，有一个传说流传得很广：说老师罚我绑在柱子上，我用眼泪在地上画了一只老鼠，惟妙惟肖，老师以为是真鼠，大吃一惊，于是放了我。这个故事，有人觉得很美。我不否认它美——禅宗的顿悟故事本来就是为了美而写的。但这个故事最早出现在我死后逾百年的 17 世纪文献里（Watanabe 1975 评注）。它是一个禅宗文学建构，不是我记忆中发生过的事。

我只是一个进了宝福寺的孩子，学坐禅，学抄经，学用笔墨写字。画，是后来的事。

1420 年，这一年，北京的紫禁城刚刚建成（永乐帝 Yongle Emperor 在位，紫禁城 1420 年完工）。日本列岛上，室町幕府的第 4 代将军足利义持在位，距离勘合贸易建立才 19 年。整个东亚的格局，在那个时候，还是可以描述的。

我不知道这些。我是一个备中国的孩子，住在宝福寺，还没想过「中国」是什么。`,
    bodyEn: `1420. Bitchū no Kuni. That is where I was born.

Which village exactly — I cannot say clearly. Later people said "Bitchū Akahama," but that was a story they invented more than a hundred years after I died. (Watanabe 1975 documents this: the place name appears only in seventeenth-century sources.) I know only that I was born somewhere in what is now the western part of Okayama Prefecture, and that I entered Hōfukuji temple to train in Zen while I was still a child.

When I entered Hōfukuji, I was young. What I remember is the stone courtyard and the shape of my teacher's back.

There is a story about my childhood that travels widely: my teacher tied me to a pillar as punishment, and I painted a mouse on the floor using my tears, so lifelike that my teacher thought it was real and freed me in surprise. People find this story beautiful. I do not deny its beauty — Zen teaching stories are written to be beautiful. But this story first appears in seventeenth-century sources, more than a hundred years after my death. (Watanabe 1975.) It is a piece of Zen literary construction, not something I remember happening.

I was simply a child inside Hōfukuji, learning to sit in meditation, learning to copy sutras, learning to hold a brush. Painting came later.

In 1420, the Forbidden City in Beijing had just been completed. The fourth shogun of the Muromachi Bakufu held power in Japan. The kango tribute-trade system had existed for only nineteen years. The shape of East Asia could still be described in clear terms.

I did not know any of that. I was a child in Bitchū Province, not yet thinking about what "China" might be.`,
    themeCn: '起点模糊，传说是后人写的，不是自己活的',
    themeEn: 'The origin is uncertain; the legend was written by others, not lived by the self.',
    engagementHook: '「备中赤浜」这个出生地，是我死后一百多年才有人说的。你有没有关于自己的「故事」，其实是别人说的，不是你记忆里发生的？',
    expectsRealAnswer: false,
    sourcingNote: 'Watanabe 1975《雪舟》— 出生地传说考证；紫禁城 1420 年完工来自明史记载',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N2',
    nodeId: 'sesshu-N2',
    year: 1440,
    location: '京都相国寺',
    title: {
      cn: '站在别人的肩膀上，你学到的是翻译，不是原文',
      en: 'Standing on another\'s shoulders, what you learn is the translation, not the original',
    },
    titleCn: '站在别人的肩膀上，你学到的是翻译，不是原文',
    titleEn: 'Standing on another\'s shoulders, what you learn is the translation, not the original',
    content: {
      cn: `约 1440 年代，我进入了京都相国寺（Shōkokuji）。

相国寺是临济宗禅寺，与足利将军家关系深厚。那时候，相国寺是日本禅宗绘画的核心培训场所——不是随便哪个想学画的人都能进的地方。我带着宝福寺的禅修基础来到这里，开始学习水墨画（suiboku-ga）。

我的师承线是这样的：

如拙（Josetsu，活跃于 1405-1423 前后，朝鲜出身），他把明朝的水墨技法带进了相国寺。如拙之后是周文（Shūbun，活跃于 1423-1460 前后），周文发展出了「破墨山水」（shōboku sansui）的日本风格。然后是我。

我学的是周文教的，周文学的是如拙教的，如拙学的是朝鲜和明朝带来的技法。

这意味着什么？意味着我学到的东西，是经过了两次转译的中国山水画——从明朝画卷，到如拙的笔下，再到周文的诠释，最后到我的手里。我从未见过原本。我学的是别人眼中的别人眼中的中国山水。

这不是批评周文或如拙。他们做了他们能做的最好的事。但我坐在相国寺的库房里，看着那些被称为「宋朝山水」的画轴，心里有个问题始终没有消失：这是谁画的，在哪里画的，画的是他亲眼看见的山，还是他学来的山？

这个问题，在 1440 年代，我还没有答案。但问题在那里，等着我。`,
      en: `Around the 1440s, I entered Shōkokuji temple in Kyoto.

Shōkokuji was a Rinzai Zen temple with close ties to the Ashikaga shogunal family. At the time, it was the central training ground for Zen ink painting in Japan — not a place anyone who wanted to paint could simply walk into. I arrived carrying my meditation foundation from Hōfukuji, and began learning suiboku-ga, ink painting.

My lineage looked like this:

Josetsu (active around 1405-1423, born in Korea) brought Ming painting techniques into Shōkokuji. After Josetsu came Shūbun (active around 1423-1460), who developed the shōboku sansui ("broken-ink landscape") style in Japanese form. Then came me.

I studied what Shūbun taught. Shūbun had studied what Josetsu taught. Josetsu had studied what he brought from Korea and the Ming. Every step was a translation.

What does this mean? It means what I was learning was Chinese landscape painting that had already passed through two sets of hands — from Ming scrolls, into Josetsu's brushwork, through Shūbun's interpretation, and finally into my grip. I had never seen the original. I was learning someone else's reading of someone else's reading of Chinese mountains.

This is not a criticism of Shūbun or Josetsu. They did the best they could with what was available to them. But sitting in the Shōkokuji storage room, looking at scrolls called "Song dynasty landscape," I could not stop asking: who painted this, and where, and were these mountains the painter had actually seen — or mountains the painter had learned?

In the 1440s, I had no answer to that question. But the question was there, waiting for me.`,
    },
    bodyCn: `约 1440 年代，我进入了京都相国寺（Shōkokuji）。

相国寺是临济宗禅寺，与足利将军家关系深厚。那时候，相国寺是日本禅宗绘画的核心培训场所。我带着宝福寺的禅修基础来到这里，开始学习水墨画（suiboku-ga）。

我的师承线是这样的：如拙（Josetsu，活跃于 1405-1423 前后，朝鲜出身），把明朝的水墨技法带进了相国寺。如拙之后是周文（Shūbun，活跃于 1423-1460 前后），周文发展出了「破墨山水」风格。然后是我。

我学的是周文教的，周文学的是如拙教的，如拙学的是朝鲜和明朝带来的技法。

这意味着什么？我学到的东西，是经过了两次转译的中国山水画——从明朝画卷，到如拙的笔下，再到周文的诠释，最后到我的手里。我从未见过原本。我学的是别人眼中的别人眼中的中国山水。

这不是批评周文或如拙。他们做了他们能做的最好的事。但我坐在相国寺的库房里，看着那些被称为「宋朝山水」的画轴，心里有个问题始终没有消失：这是谁画的，在哪里画的，画的是他亲眼看见的山，还是他学来的山？

这个问题，在 1440 年代，我还没有答案。但问题在那里，等着我。`,
    bodyEn: `Around the 1440s, I entered Shōkokuji temple in Kyoto.

Shōkokuji was a Rinzai Zen temple with close ties to the Ashikaga shogunal family. It was the central training ground for Zen ink painting in Japan. I arrived with my meditation foundation from Hōfukuji and began learning suiboku-ga.

My lineage: Josetsu (active around 1405-1423, born in Korea) brought Ming painting techniques into Shōkokuji. After Josetsu came Shūbun (active around 1423-1460), who developed the shōboku sansui style. Then came me.

I studied what Shūbun taught. Shūbun studied what Josetsu taught. Josetsu studied what he brought from Korea and the Ming. Every step was a translation.

What I was learning was Chinese landscape painting that had passed through two sets of hands — from Ming scrolls, into Josetsu's brushwork, through Shūbun's interpretation, and into my grip. I had never seen the original. I was learning someone else's reading of someone else's reading of Chinese mountains.

This is not a criticism of Shūbun or Josetsu. They did the best they could. But sitting in the Shōkokuji storage room, looking at scrolls called "Song dynasty landscape," I could not stop asking: who painted this, and where, and were these mountains actually seen — or mountains someone had learned?

In the 1440s, I had no answer. But the question was there, waiting.`,
    themeCn: '站在别人的肩膀上，你学到的是翻译，不是原文',
    themeEn: 'Standing on another\'s shoulders, what you learn is the translation, not the original.',
    engagementHook: '我学的是「别人眼中的别人眼中的中国山水」。你有没有学过什么东西，后来发现自己学的是「二手版」，不是原版？这有关系吗？',
    expectsRealAnswer: false,
    sourcingNote: '师承链来自 narrative §14 + Watanabe 1975；相国寺背景来自 Rice 2010',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N3',
    nodeId: 'sesshu-N3',
    year: 1450,
    location: '京都相国寺',
    title: {
      cn: '当你发现你学的是临摹，你就知道你必须去哪里',
      en: 'When you discover you have been learning copies, you know where you must go',
    },
    titleCn: '当你发现你学的是临摹，你就知道你必须去哪里',
    titleEn: 'When you discover you have been learning copies, you know where you must go',
    content: {
      cn: `1450 年代，相国寺时期，应仁之乱（Ōnin no Ran）尚未爆发。

那还是相国寺最稳定的年代——将军家的文化中心，京都的权力核心，禅宗绘画的最高学府。我在这里看到了日本能给我的所有东西。看完之后，我知道这还不够。

有一天，我在相国寺库房里打开了一个卷轴。卷轴上有人写：「宋朝山水，珍品。」

我展开它，看了很久。

山是用斧劈皴（axe-cut brushstroke）画的——那种干笔侧锋、把岩石切割成块面的笔法，是北宋郭熙（Guo Xi）系统里的技法。但我越看越觉得不对：那些墨色的层次太均匀了，那些山石的转折太机械了。这不是一个人在山前画的——这是一个人把另一个人的画临摹下来之后的东西。

临摹，不是原作。

我拿起毛笔，照着那幅卷轴临了一遍。然后我在自己临本的旁边，凭记忆画了一遍周文教我的版本。然后我比较这两张。

三幅画，三种山。哪一幅更接近真实的中国山？我不知道。我从来没见过真实的中国山。

这个事实在 1450 年代某个下午，清晰地停在我面前：相国寺能给我的最好东西，是一张临摹的临摹。我要看原本，我需要去中国。

那时候，去中国的路不是随时都开着的——勘合贸易的船，不是谁想搭就能搭的。我只能等。`,
      en: `The 1450s. My time at Shōkokuji. The Ōnin War had not yet broken out.

These were the most stable years Shōkokuji would know — the shogunal family's cultural center, the core of Kyoto's power, the highest school of Zen painting in Japan. I had seen everything Japan could give me. Having seen it all, I knew it was not enough.

One afternoon, I unrolled a scroll in the Shōkokuji storage room. Someone had written on it: "Song dynasty landscape, rare treasure."

I spread it open and looked for a long time.

The mountains were painted with what we call fupeki-shun — the axe-cut brushstroke, where the dry brush hits the side and cuts the rock face into planes. That technique comes from the Guo Xi school of Northern Song painting. But the longer I looked, the more something felt wrong. The ink tones were too even. The transitions in the rock were too mechanical. This was not a person painting in front of a mountain. This was a person copying another person's painting.

A copy. Not the original.

I picked up my brush and copied the scroll again. Then beside my copy I painted, from memory, the version Shūbun had taught me. Then I compared the three.

Three paintings. Three sets of mountains. Which one was closer to a real Chinese mountain? I did not know. I had never seen a real Chinese mountain.

That fact stood clearly in front of me on that afternoon in the 1450s: the best thing Shōkokuji could give me was a copy of a copy. To see the original, I needed to go to China.

The path to China was not always open. The kango trade ships did not take anyone who simply wanted to go. I could only wait.`,
    },
    bodyCn: `1450 年代，相国寺时期，应仁之乱尚未爆发。

那还是相国寺最稳定的年代——将军家的文化中心，京都的权力核心。我在这里看到了日本能给我的所有东西。看完之后，我知道这还不够。

有一天，我在相国寺库房里打开了一个卷轴。卷轴上有人写：「宋朝山水，珍品。」

我展开它，看了很久。那些山是用斧劈皴画的——把岩石切割成块面的笔法，北宋郭熙（Guo Xi）系统的技法。但我越看越觉得不对：那些墨色的层次太均匀了，那些山石的转折太机械了。这不是一个人在山前画的——这是一个人把另一个人的画临摹下来之后的东西。

临摹，不是原作。

我拿起毛笔，照着那幅卷轴临了一遍。然后凭记忆画了一遍周文教我的版本。然后比较这两张。

三幅画，三种山。哪一幅更接近真实的中国山？我不知道。我从来没见过真实的中国山。

这个事实在 1450 年代某个下午，清晰地停在我面前：相国寺能给我的最好东西，是一张临摹的临摹。我要看原本，我需要去中国。

那时候，去中国的路不是随时都开着的。勘合贸易的船，不是谁想搭就能搭的。我只能等。`,
    bodyEn: `The 1450s. My time at Shōkokuji. The Ōnin War had not yet broken out.

These were the most stable years Shōkokuji would know — the shogunal family's cultural center, the highest school of Zen painting in Japan. I had seen everything Japan could give me. Having seen it all, I knew it was not enough.

One afternoon, I unrolled a scroll in the Shōkokuji storage room. Someone had written on it: "Song dynasty landscape, rare treasure."

I spread it open and looked for a long time. The mountains were painted with axe-cut brushwork — the technique from Guo Xi's Northern Song school, cutting rock faces into geometric planes. But the longer I looked, something felt wrong. The ink tones were too even. The rock transitions were too mechanical. This was not a person painting in front of a mountain. This was someone copying another person's painting.

A copy. Not the original.

I picked up my brush and copied the scroll. Then beside that I painted, from memory, the version Shūbun had taught me. Then I compared all three.

Three paintings. Three sets of mountains. Which was closer to a real Chinese mountain? I did not know. I had never seen a real Chinese mountain.

That fact stood clearly in front of me: the best Shōkokuji could give me was a copy of a copy. To see the original, I needed to go to China.

The kango trade ships did not take anyone who simply wanted to go. I could only wait.`,
    themeCn: '当你发现你学的是别人的临摹，你就知道必须去哪里',
    themeEn: 'When you discover you have been learning copies, you know where you must go.',
    engagementHook: '相国寺能给我的最好东西，是「临摹的临摹」。你学过什么知识或技能，后来发现有一个「更接近原版」的来源？',
    expectsRealAnswer: false,
    sourcingNote: '斧劈皴 + 郭熙系 + 周文传承来自 narrative §14；相国寺稳定期背景来自 §13',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N4',
    nodeId: 'sesshu-N4',
    year: 1467,
    location: '博多港，出发前',
    title: {
      cn: '去看原本，需要先放下你守护的东西',
      en: 'To see the original, you must first release what you are guarding',
    },
    titleCn: '去看原本，需要先放下你守护的东西',
    titleEn: 'To see the original, you must first release what you are guarding',
    content: {
      cn: `1467 年，47 岁，我搭上了从博多（Hakata，今福冈）出发的勘合贸易船。

船是足利义政（第 8 代将军，1449-1473 年在任）的名义下批准的勘合船。资助方一说为大内氏（Ōuchi clan，西日本强藩，长期参与勘合贸易），但史料所存有限，不宜过于确定（narrative §14 记载「一说为大内氏」）。我以「禅僧随员」（zenji-gaiin，僧侣外交随行）身份搭船。47 岁，已经是相国寺系的成熟画家。

出发的时间，与应仁之乱的爆发几乎同步。应仁之乱 1467 年正月正式开始（《应仁记》Ōnin-ki 记载；Varley 2000 确认），具体船期与乱事的先后顺序，史料不详——但可以确认的是：无论我在哪一天出港，京都在我航行期间已经起火，或即将起火。我选择出发，而不是留守。

这个选择，值得在这里说清楚一点。

我不是逃跑。「逃」意味着你放弃了本来应该守护的东西。但相国寺那个时候已经不是我需要守护的地方了——那里给了我它能给的一切，然后我需要走了。这是不同的事。

这条船出发的时候，遣唐使（630-894 年）已经停了 573 年了。足利义满 1401 年开始的勘合贸易，是「日本主动向中国取经」这个结构的最新一章。从遣唐使的大型使团，到现在一个禅僧随着贸易船搭便车——主体变小了，但那个「去看」的冲动，一直没变过。

我在船上，看着博多港慢慢消失在水平线后面。我 47 岁，第一次离开日本。`,
      en: `In 1467, at the age of forty-seven, I boarded a kango tribute-trade ship departing from Hakata — the harbor in what is now Fukuoka.

The ship sailed under the authorization of shogun Ashikaga Yoshimasa (eighth shogun, in office 1449-1473). The sponsoring party was possibly the Ōuchi clan — the powerful western Japan domain long involved in the kango trade — but the historical sources are limited and I will not state this with more certainty than they warrant. (The narrative records this as "one account says the Ōuchi clan.") I traveled in the capacity of zenji-gaiin, a clerical diplomatic attendant. Forty-seven years old. An established painter in the Shōkokuji tradition.

The timing of my departure overlapped almost exactly with the Ōnin War. The Ōnin War formally began in the first month of 1467 (as recorded in the Ōnin-ki; confirmed in Varley 2000). The precise sequence — whether I left before or after the first fighting — is not recoverable from surviving sources. What is clear is this: whether I sailed before or after the first fires, Kyoto was burning or about to burn while I was at sea. I chose to depart, not to stay.

That choice deserves a moment here.

I was not fleeing. "Fleeing" means abandoning something you were supposed to protect. But Shōkokuji was no longer what I needed to protect. It had given me everything it could give me, and it was time to leave. That is a different thing.

The Tang embassy missions (630-894) had been suspended for 573 years by the time my ship left harbor. The kango trade that Ashikaga Yoshimitsu established in 1401 was the newest chapter of the same structure: Japan actively seeking what China had. From the large official embassies of the Tang period, to a single Zen monk catching a ride on a trade vessel — the individual had become smaller, but the impulse to go and see had never changed.

I stood on the ship's deck and watched Hakata harbor disappear behind the horizon. Forty-seven years old. Leaving Japan for the first time.`,
    },
    bodyCn: `1467 年，47 岁，我搭上了从博多出发的勘合贸易船。

船是足利义政名义下批准的勘合船。资助方一说为大内氏，但史料有限，不宜过于确定。我以「禅僧随员」身份搭船，47 岁，已是相国寺系成熟画家。

出发时间与应仁之乱的爆发几乎同步。应仁之乱 1467 年正月正式开始（Varley 2000 确认），具体船期与乱事先后的史料不详——但无论我哪天出港，京都在我航行期间已经起火，或即将起火。我选择出发，而不是留守。

这个选择值得说清楚。我不是逃跑——「逃」意味着你放弃了本来应该守护的东西。相国寺已经给了我它能给的一切，该走了。这是不同的事。

这条船出发的时候，遣唐使（630-894 年）已经停了 573 年。足利义满 1401 年开始的勘合贸易，是「日本主动向中国取经」这个结构的最新一章。从遣唐使的大型使团，到现在一个禅僧随贸易船搭便车——主体变小了，但那个「去看」的冲动，一直没变过。

我在船上，看着博多港慢慢消失在水平线后面。47 岁，第一次离开日本。`,
    bodyEn: `In 1467, at forty-seven, I boarded a kango tribute-trade ship departing from Hakata in what is now Fukuoka.

The ship sailed under shogun Ashikaga Yoshimasa's authorization. The sponsoring party was possibly the Ōuchi clan — but the historical sources are limited and I will not overstate this. I traveled as zenji-gaiin, a clerical diplomatic attendant. Forty-seven years old. An established painter in the Shōkokuji tradition.

The timing of my departure overlapped with the outbreak of the Ōnin War. The war formally began in the first month of 1467 (Varley 2000). Whether I left before or after the first fighting is not recoverable from surviving sources. What is clear: whether I sailed before or after the first fires, Kyoto was burning or about to burn while I was at sea. I chose to depart, not to stay.

I was not fleeing. Fleeing means abandoning something you were supposed to protect. Shōkokuji had given me everything it could give me. It was time to leave. That is different.

The Tang embassy missions (630-894) had been suspended for 573 years by the time my ship left harbor. The kango trade established in 1401 was the newest chapter of the same structure: Japan actively seeking what China had. From large official embassies, to one Zen monk catching a ride on a trade vessel — the individual had become smaller, but the impulse to go and see had never changed.

I watched Hakata harbor disappear behind the horizon. Forty-seven years old. Leaving Japan for the first time.`,
    themeCn: '去看原本，需要先放下你守护的东西',
    themeEn: 'To see the original, you must first release what you are guarding.',
    crossTopicHook: '遣唐使（630-894）→ 勘合贸易（1401-1547）→ 雪舟 1467：同一条「日本主动向中国取经」的结构性重复，三次，越来越小的主体，可能越来越深的个体深度。参见 Tang-Song Topic。',
    engagementHook: '47 岁，京都在燃烧，我选择出发而不是留守。「放下你守护的东西」和「抛弃你应该守护的东西」，这两件事有什么区别？',
    expectsRealAnswer: false,
    sourcingNote: '出发年份 1467 + 博多港 + 大内氏「一说」来自 narrative §14；遣唐使-勘合贸易结构来自 §1 + §13；Varley 2000 确认应仁之乱时间',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N5',
    nodeId: 'sesshu-N5',
    year: 1467,
    location: '宁波，明朝',
    title: {
      cn: '「原本」本身也在变化，你到达的时候，原本已经不是原本',
      en: 'The original itself has changed; when you arrive, it is no longer what it was',
    },
    titleCn: '「原本」本身也在变化，你到达的时候，原本已经不是原本',
    titleEn: 'The original itself has changed; when you arrive, it is no longer what it was',
    content: {
      cn: `1467 年，宁波（Ningbo）入港。47 岁，第一次踏上中国土地。

船在宁波靠岸，我走下舷梯，脚踩在码头的石板上。那是一种奇怪的感觉——不是兴奋，是某种更复杂的东西。我站在「原本」的地方，而「原本」跟我想象的不完全一样。

宁波港口有一面石壁，上面刻着摩崖石刻——中文，官府的告示，还有一些诗。我看着那些字，它们跟我在相国寺临摹的汉字不完全相同。同样是汉字，但石刻上的字体更有地方气，笔画的习惯跟日本禅寺里流传的那些不一样。

这是第一个让我停下来的细节：「原本」跟我以为的原本，长得不完全一样。

我在相国寺学的汉字，是由日本禅宗体系一代一代传下来的汉字。那是一种已经在日本适应了三四百年的书写系统。而宁波港口的石刻，是明朝的官方中文——另一种演化方向的同一个文字。

后来我在中国的两年里，这种感觉反复出现。我以为我要去验证我学到的东西，结果发现我学到的东西是「原本」的一个分支，而「原本」自己也不是静止的。郭熙（Guo Xi）的北宋山水，在明朝已经成了一个遥远的传统，被浙派的戴进（Dai Jin，1388-1462）改造了、发展了。我要学的「原本」，本身已经在时间里变成了另一个东西。

「原本」不存在于某个固定的地方。它在时间里移动，等你到达的时候，它已经走了。`,
      en: `1467. Ningbo harbor. Forty-seven years old. My feet on Chinese soil for the first time.

The ship docked at Ningbo, and I walked down the gangway onto stone. The feeling was strange — not exactly excitement, something more complicated. I was standing in the place of the original, and the original was not quite what I had imagined.

On the harbor wall there was a stone inscription — Chinese characters, a government notice, some poems. I stood and read them. They were not quite the same as the Chinese characters I had been copying at Shōkokuji. The same writing system, but the letterforms had a local quality — the habitual stroke patterns were different from what had been transmitted through Japanese Zen temples.

This was the first detail that made me stop: the original did not look exactly like what I had thought the original would look like.

The Chinese characters I had learned at Shōkokuji were passed down through the Japanese Zen system, generation by generation. That was a writing tradition that had been adapting inside Japan for three or four hundred years. The Ningbo harbor inscription was Ming official Chinese — the same writing, but evolved in a different direction.

In the two years I spent in China, this feeling came back to me again and again. I had expected to go and verify what I had learned. Instead I found that what I had learned was a branch of the original — and the original itself was not standing still. Guo Xi's Northern Song landscape tradition had, by the Ming dynasty, become a distant inheritance, transformed and developed by the Zhe School painter Dai Jin (1388-1462). The original I came to study had, inside the movement of time, already become something else.

The original does not exist in a fixed place. It moves through time. By the time you arrive, it has already moved on.`,
    },
    bodyCn: `1467 年，宁波入港。47 岁，第一次踏上中国土地。

我走下舷梯，脚踩在码头的石板上。那是一种奇怪的感觉——不是兴奋，是某种更复杂的东西。我站在「原本」的地方，而「原本」跟我想象的不完全一样。

宁波港口有一面石壁，刻着摩崖石刻——中文，官府告示，还有一些诗。我看着那些字，它们跟我在相国寺临摹的汉字不完全相同。同样是汉字，但石刻的字体更有地方气，笔画习惯跟日本禅寺里流传的不一样。

这是第一个让我停下来的细节：「原本」跟我以为的原本，长得不完全一样。

我在相国寺学的汉字，是由日本禅宗体系一代一代传下来的版本——在日本适应了三四百年的书写系统。而宁波港口的石刻，是明朝官方中文——另一种演化方向的同一个文字。

在中国的两年里，这种感觉反复出现。郭熙的北宋山水，在明朝已经成了遥远的传统，被浙派的戴进（Dai Jin，1388-1462）改造了、发展了。我要学的「原本」，本身已经在时间里变成了另一个东西。

「原本」不存在于某个固定的地方。它在时间里移动，等你到达的时候，它已经走了。`,
    bodyEn: `1467. Ningbo harbor. Forty-seven years old. My feet on Chinese soil for the first time.

The ship docked and I walked down onto stone. The feeling was strange — not excitement, something more complicated. I was standing in the place of the original, and the original was not quite what I had imagined.

On the harbor wall there was a stone inscription — Chinese characters, a government notice, some poems. I stood and read them. They were not quite the same as the characters I had been copying at Shōkokuji. The same writing system, but the letterforms had a local quality — the stroke habits were different from what had been transmitted through Japanese Zen temples.

This was the first detail that made me stop: the original did not look exactly like what I had thought the original would look like.

The Chinese characters I learned at Shōkokuji had been passed down through the Japanese Zen system for three or four hundred years. The Ningbo harbor inscription was Ming official Chinese — the same writing, but evolved in a different direction.

In the two years I spent in China, this feeling came back again and again. Guo Xi's Northern Song landscape tradition had, by the Ming dynasty, become a distant inheritance, transformed by the Zhe School painter Dai Jin (1388-1462). The original I had come to study had already become something else inside the movement of time.

The original does not exist in a fixed place. It moves through time. By the time you arrive, it has already moved on.`,
    themeCn: '「原本」本身也在变化，你到达的时候，原本已经不是原本',
    themeEn: 'The original itself changes; when you arrive, it has already moved on.',
    engagementHook: '宁波港口，我发现「原本」跟我学的那个版本不完全一样——「原本」自己也在时间里变化。你学过什么东西，后来发现「正确答案」本身也不是固定的？',
    expectsRealAnswer: false,
    sourcingNote: '宁波入港来自 narrative §14；戴进浙派 + 郭熙系传承来自 narrative §14；Watanabe 1975',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N6',
    nodeId: 'sesshu-N6',
    year: 1467,
    location: '北京（推测），明朝宫廷画家圈子',
    title: {
      cn: '用别人的眼睛，重新看自己的家',
      en: 'Through another\'s eyes, seeing your own home again',
    },
    titleCn: '用别人的眼睛，重新看自己的家',
    titleEn: 'Through another\'s eyes, seeing your own home again',
    content: {
      cn: `宁波之后，船队北上，我进入了北京。

这里需要 careful framing：我在北京的行程，史料所存极为有限（Rice 2010 明确表示文献不足）。「进入北京」是可以确认的，但在北京的具体活动、时间长短、接触了哪些人，均无详细记录。Rice（2010）使用的措辞是「court painters and their circle」——宫廷待诏画家的圈子，而非某个正式学院。明朝皇家画院不像宋朝翰林图画院那样有独立建制，宣德以后宫廷画家以「待诏」身份供职。我接触的，很可能就是这样的人。

我看到的是当时「活的」中国山水画——浙派戴进（Dai Jin，1388-1462）的风格主导着宫廷画家圈，以及北宋大山大水的构图传统通过明朝宫廷系统传承下来的样子。这跟我在相国寺学的，不同，也跟我想象的不同。

Rice（2010）对我在明朝的判断是这样的：我是一个「研究者」（researcher），不是「学生」（student）。我带去了自己成熟的 Zen 水墨语言，与明朝院体风格做对比，而非简单复制。

我记得有一次，一个明朝待诏画家看了我带去的日本水墨画，说：「这是中国画法，但不是中国的。」我想了很久这句话。它说的是什么？它说的是：你从我们这里拿走了技法，但你用这个技法画的不是我们的山，是你们的山。

在北京，我第一次真正理解了「相国寺水墨」是什么——是中国技法在日本地形上生长出来的东西，不是复制，是变体。我是带着这个理解离开中国的。

1467 年，就在我研究明朝山水画的同时，6,000 公里外的佛罗伦萨，Lorenzo de' Medici（洛伦佐·美第奇，1449-1492）18 岁，开始主持美第奇家族。他在赞助艺术家，我在研究艺术。两种「艺术家与权力」的关系，在同一个 1467 年，同时发生。`,
      en: `After Ningbo, our vessels moved north. I entered Beijing.

Here careful framing is necessary: the historical record of my time in Beijing is extremely thin. (Rice 2010 is explicit about this limitation.) That I entered Beijing can be confirmed. The specific activities, duration, and contacts there are not documented in detail. Rice's language is "court painters and their circle" — the circle of court daizhao painters, not any formal academy. The Ming imperial painting institution was not organized like the Song dynasty's Hanlin Painting Academy; after the Xuande reign, court painters served as daizhao, supply-artists on call. That is likely who I was dealing with.

What I saw was living Chinese landscape painting — the Zhe School style of Dai Jin (1388-1462) dominated the court painter circle, and the Northern Song tradition of grand mountain-and-water composition survived through the Ming court system. This was different from what I had learned at Shōkokuji. Different from what I had imagined.

Rice's (2010) assessment of what I was doing in Ming China: I was a researcher, not a student. I brought my own mature Zen ink language, held it up against Ming academy style to compare and calibrate, rather than simply copy.

I remember one exchange. A Ming daizhao painter looked at the Japanese ink painting I had brought along and said something like: "This is Chinese technique, but it is not Chinese." I turned that over in my mind for a long time. What was he saying? He was saying: you took the method from us, but what you painted with that method is not our mountains. It is yours.

In Beijing, for the first time, I truly understood what "Shōkokuji ink painting" was — Chinese technique grown into Japanese terrain, not a copy, but a variation. I left China carrying that understanding.

In 1467, while I studied Ming landscape painting in Beijing, six thousand kilometers away in Florence, Lorenzo de' Medici was eighteen years old, beginning to lead the Medici family. He was sponsoring artists; I was studying art. Two versions of the relationship between artists and power, both happening in the same year 1467.`,
    },
    bodyCn: `宁波之后，船队北上，我进入了北京。

careful framing：我在北京的行程，史料所存极为有限（Rice 2010 明确指出文献不足）。「进入北京」可以确认，但具体活动、时间、接触何人，均无详细记录。Rice（2010）使用的措辞是「court painters and their circle」，不是某个正式学院。明朝宫廷画家以「待诏」身份供职，我接触的很可能就是这样的人。

我看到的是当时「活的」中国山水画——浙派戴进（Dai Jin，1388-1462）的风格主导宫廷画家圈，以及北宋大山大水构图传统通过明朝宫廷系统传承下来的样子。这跟相国寺学的不同，也跟我想象的不同。

Rice（2010）的判断：我是一个「研究者」（researcher），不是「学生」（student）。我带去了自己成熟的 Zen 水墨语言，与明朝院体风格做对比校正，而非简单复制。

我记得一个明朝待诏画家看了我带去的日本水墨画，说：「这是中国画法，但不是中国的。」我想了很久。他的意思是：你从我们这里拿走了技法，但你用这个技法画的不是我们的山，是你们的山。

在北京，我第一次真正理解了「相国寺水墨」是什么——是中国技法在日本地形上生长出来的变体，不是复制。我带着这个理解离开中国。

1467 年，就在我研究明朝山水画的同时，Lorenzo de' Medici（1449-1492）18 岁，在佛罗伦萨开始主持美第奇家族，赞助艺术。两种「艺术家与权力」的关系，在同一个 1467 年同时发生。`,
    bodyEn: `After Ningbo, our vessels moved north. I entered Beijing.

Careful framing is necessary here: the historical record of my time in Beijing is extremely thin. (Rice 2010 is explicit about this.) That I entered Beijing can be confirmed. Specific activities, duration, and contacts there are not documented in detail. Rice's language is "court painters and their circle" — the circle of court daizhao painters, not a formal academy. Ming court painters served as daizhao, on-call supply-artists. That is likely who I encountered.

What I saw was living Chinese landscape painting — the Zhe School style of Dai Jin (1388-1462) dominated the court painter circle, and the Northern Song grand mountain-and-water tradition survived through the Ming court system. Different from Shōkokuji. Different from what I had imagined.

Rice's (2010) assessment: I was a researcher, not a student. I brought my own mature Zen ink language, held it against Ming academy style to compare and calibrate, rather than simply copy.

I remember one exchange. A Ming daizhao painter looked at the Japanese ink painting I had brought along and said something like: "This is Chinese technique, but it is not Chinese." I turned that over in my mind for a long time. What he meant: you took the method from us, but what you painted with that method is not our mountains. It is yours.

In Beijing, for the first time, I truly understood what Shōkokuji ink painting was — Chinese technique grown into Japanese terrain, a variation, not a copy. I left China carrying that understanding.

In 1467, as I studied Ming landscape painting in Beijing, Lorenzo de' Medici was eighteen years old in Florence, beginning to lead the Medici family and sponsor artists. Two versions of the relationship between artists and power, both happening in the same year.`,
    themeCn: '用别人的眼睛，重新看自己的家',
    themeEn: 'Through another\'s eyes, seeing your own home again.',
    crossTopicHook: 'Lorenzo de' Medici 1467 年在佛罗伦萨赞助艺术；雪舟 47 岁在北京做研究。两种「艺术家与权力」的关系。参见 Renaissance Topic。',
    engagementHook: '一个明朝画家告诉我：「这是中国画法，但不是中国的。」用别人的技法，画自己的山——你觉得这是模仿还是创造？',
    expectsRealAnswer: false,
    sourcingNote: 'Rice 2010 — 北京行程史料有限 careful framing + researcher vs student 判断；戴进浙派来自 narrative §14',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N7',
    nodeId: 'sesshu-N7',
    year: 1469,
    location: '山口，大内氏领地',
    title: {
      cn: '不返回权力中心，是一种需要勇气的不作为',
      en: 'Refusing to return to the center of power is a form of courage',
    },
    titleCn: '不返回权力中心，是一种需要勇气的不作为',
    titleEn: 'Refusing to return to the center of power is a form of courage',
    content: {
      cn: `1469 年，从明朝回到日本，我没有回京都。

京都在应仁之乱（1467-1477）里燃烧——那场乱事在我航行期间已经开始，等我回来的时候还没结束。京都大半被烧，公家贵族的庄园文书、寺院典藏、文物器皿大量损毁或流散（Varley 2000）。相国寺，还在，但那个作为文化中心的相国寺，已经不完整了。

我选择了山口（Yamaguchi，今山口县）。

山口是大内氏（Ōuchi clan）的根据地——西日本最强的守护大名之一，长期参与勘合贸易。大内氏有意识地将山口打造为「西の京都」（西部京都），模仿京都街道格局建城，庇护禅僧、汉学者、画家。大内氏与明朝文化输入有直接的动机关联。

在大内氏庇护下，我获得了京都幕府系统无法给我的东西：创作自由，和政治绝缘。

我不需要向足利将军家的口味妥协。不需要为应仁之乱后的权力真空中各方势力服务。我只需要画画。

这个「不返回京都」的地理选择，是 lonely mediator 最重要的一个决定。它定义了我接下来三十多年的生命。不回权力中心，不是懦弱，不是放弃——是一种主动选择的政治立场：我不属于任何一个正在争夺权力的阵营，我只属于我的工作。

这需要一种特别的清醒。权力中心有时候比战场更危险，因为它让你觉得自己必须参与。`,
      en: `In 1469, I returned from Ming China to Japan. I did not go back to Kyoto.

Kyoto was burning inside the Ōnin War (1467-1477) — that conflict had begun while I was still at sea, and by the time I returned it was not over. Much of the city had been destroyed; the estate documents, temple collections, and cultural objects of the court aristocracy had been damaged or scattered on a large scale. (Varley 2000.) Shōkokuji still stood, but the Shōkokuji that had been a cultural center was no longer whole.

I chose Yamaguchi.

Yamaguchi was the base of the Ōuchi clan — one of the most powerful western Japan shugo daimyō, long involved in the kango tribute trade. The Ōuchi had deliberately shaped Yamaguchi into a "western Kyoto," building the city on a Kyoto-style grid, supporting Zen monks, Sinologists, and painters. Their interest in Ming cultural imports was direct and practical.

Under Ōuchi patronage, I received what the Kyoto shogunal system could never have given me: creative freedom, and political insulation.

I did not need to adjust my work to please the Ashikaga shogunal family's tastes. Did not need to serve any of the competing factions in the power vacuum that followed the Ōnin War. I only needed to paint.

This geographical choice — not returning to Kyoto — was the single most important decision a lonely mediator makes. It defined the next thirty-plus years of my life. Not going back to the center of power was not cowardice, not abandonment. It was an active political position: I do not belong to any of the camps fighting over power. I belong only to my work.

That requires a particular kind of clarity. Power centers are sometimes more dangerous than battlefields, because they make you feel you must participate.`,
    },
    bodyCn: `1469 年，从明朝回到日本，我没有回京都。

京都在应仁之乱（1467-1477）里燃烧——那场乱事在我航行期间已经开始，等我回来时还没结束。京都大半被烧，寺院典藏、文物器皿大量损毁（Varley 2000）。相国寺还在，但作为文化中心的相国寺已经不完整了。

我选择了山口（Yamaguchi，今山口县）。山口是大内氏（Ōuchi clan）的根据地——西日本最强的守护大名之一，长期参与勘合贸易，有意将山口打造为「西の京都」，庇护禅僧、画家。大内氏与明朝文化输入有直接动机关联。

在大内氏庇护下，我获得了京都系统无法给我的东西：创作自由，和政治绝缘。不需要向将军家口味妥协，不需要为权力真空中各方势力服务。只需要画画。

「不返回京都」这个地理选择，是 lonely mediator 最重要的决定。它定义了我接下来三十多年的生命。不回权力中心，不是懦弱——是主动选择的政治立场：我不属于任何争夺权力的阵营，我只属于我的工作。

这需要一种特别的清醒。权力中心有时候比战场更危险，因为它让你觉得自己必须参与。`,
    bodyEn: `In 1469, returning from Ming China, I did not go back to Kyoto.

Kyoto was burning inside the Ōnin War (1467-1477). The conflict had begun while I was at sea; by the time I returned it was not over. Much of the city had been destroyed; temple collections and cultural objects had been damaged or scattered on a large scale. (Varley 2000.) Shōkokuji still stood, but the Shōkokuji that had been a cultural center was no longer whole.

I chose Yamaguchi. It was the base of the Ōuchi clan — one of the most powerful western Japan shugo daimyō, long involved in the kango tribute trade. The Ōuchi had deliberately shaped Yamaguchi into a "western Kyoto," built on a Kyoto-style grid, supporting Zen monks and painters. Their interest in Ming cultural imports was direct and practical.

Under Ōuchi patronage I received what the Kyoto shogunal system could never have given me: creative freedom, and political insulation. No need to adjust my work to please the Ashikaga family's tastes. No need to serve any faction in the power vacuum after the Ōnin War. Only paint.

This geographical choice — not returning to Kyoto — was the most important decision a lonely mediator makes. It defined the next thirty-plus years of my life. Not going back to the center of power was not cowardice. It was an active political position: I do not belong to any camp fighting over power. I belong only to my work.

That requires a particular kind of clarity. Power centers are sometimes more dangerous than battlefields, because they make you feel you must participate.`,
    themeCn: '不返回权力中心，是一种需要勇气的不作为',
    themeEn: 'Refusing to return to the center of power is a form of courage.',
    engagementHook: '京都在燃烧，我选择去山口而不是回京都。「不参与」是一种选择，还是一种逃避？你觉得两者之间的界限在哪里？',
    expectsRealAnswer: false,
    sourcingNote: '山口 + 大内氏庇护来自 narrative §14 + §15；Varley 2000 应仁之乱后果',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N8',
    nodeId: 'sesshu-N8',
    year: 1475,
    location: '山口，云谷庵附近',
    title: {
      cn: '用别人的眼睛，重新看自己的山',
      en: 'Using another\'s eyes to look at your own mountains',
    },
    titleCn: '用别人的眼睛，重新看自己的山',
    titleEn: 'Using another\'s eyes to look at your own mountains',
    content: {
      cn: `山口时期，1469 年之后，我开始真正画日本的山。

这听起来很简单：我回到了日本，然后画日本的山。但实际发生的，比这复杂。

Rice（2010）的判断是：我用的是明朝山水的「体量感」（volumetric weight）——把山和石头作为有重量的三维实体来画——和日本禅宗水墨的「留白意识」（negative space as spiritual gesture）——用墨和空白的关系来表达精神状态。这两件事不是分开的，而是我把它们融合在一起，产生了一种既不属于明朝院体，也不属于相国寺旧风的新语言。

我记得有一次，大约是 1470 年代某个早晨，我在山口附近的山里，看着一片花岗岩露头。花岗岩的节理，是垂直切割的——那种横向分层的砂岩地质，是中国北方画面里常见的；但花岗岩不是那样的，花岗岩的纹理是块状的，是球形风化的，是另一种逻辑。

我拿起毛笔，用明朝「斧劈皴」（axe-cut brushstroke）的侧锋，去画眼前那片花岗岩露头。

然后我停下来。那个山石的体积感「对」了——不是中国的对法，是日本花岗岩自己的对法。斧劈皴本来是为了画北方的砂岩用的，但它的侧锋干笔，用在花岗岩的切割面上，效果是另一种东西。

这是「用别人的眼睛，重新看自己的家」的第一次——用明朝带回来的笔墨组织方式，去发现日本地形自身的结构。不是把中国画法套到日本风景上，是用中国笔墨的逻辑，找到日本地形自己的美感。

这件事，需要你先去别处，看别的地方的山，然后回来，才能看见自己的山。`,
      en: `Yamaguchi period. After 1469. I began in earnest to paint Japanese mountains.

That sounds simple: I came back to Japan and painted Japanese mountains. But what actually happened was more complicated.

Rice's (2010) assessment: what I was working with was the volumetric weight of Ming landscape — treating mountains and rocks as three-dimensional objects with mass — combined with the Japanese Zen ink tradition's negative space as spiritual gesture — using the relationship between ink and empty paper to express a mental state. These were not separate things. I fused them, producing a language that did not belong to Ming academy style and did not belong to the old Shōkokuji manner.

I remember one morning, sometime in the 1470s, standing in the hills near Yamaguchi, looking at an exposed granite outcrop. Granite's fracture patterns are vertical — the horizontal sedimentary layering of sandstone, which was common in Chinese northern landscape painting, is not granite's logic. Granite is blocky, spherically weathered, its own kind of structure.

I picked up my brush and used the side-stroke of the Ming axe-cut brushstroke to paint that granite outcrop in front of me.

Then I stopped. The volume of the rock felt right — not right in the Chinese way, but right in the way of Japanese granite itself. The axe-cut stroke was originally developed for northern Chinese sandstone, but the dry-brush side-stroke against the cut face of granite produced something different.

This was the first moment of using another's eyes to look at your own home again — using the organizational logic of Ming brushwork to discover the structural beauty already present in Japanese terrain. Not forcing Chinese painting methods onto Japanese scenery. Using Chinese brush logic to find Japanese form.

To do that, you first have to go somewhere else, look at other mountains, and then come back. Only then can you see your own.`,
    },
    bodyCn: `山口时期，1469 年之后，我开始真正画日本的山。

这听起来简单：回到日本，画日本的山。但实际发生的更复杂。

Rice（2010）的判断：我用的是明朝山水的「体量感」（volumetric weight）和日本禅宗水墨的「留白意识」（negative space as spiritual gesture）——把这两件事融合，产生了一种既不属于明朝院体、也不属于相国寺旧风的新语言。

我记得大约 1470 年代某个早晨，在山口附近的山里，看着一片花岗岩露头。花岗岩的节理是垂直切割的——中国北方画里常见的是横向分层的砂岩地质，但花岗岩是块状的，是另一种逻辑。

我拿起毛笔，用明朝「斧劈皴」（axe-cut brushstroke）的侧锋，去画眼前那片花岗岩。然后我停下来。那个山石的体积感「对」了——不是中国的对法，是日本花岗岩自己的对法。

这是「用别人的眼睛，重新看自己的家」的第一次——用明朝带回来的笔墨组织方式，发现日本地形自身的结构。不是把中国画法套到日本风景，是用中国笔墨的逻辑，找到日本地形自己的美感。

这件事，需要你先去别处，看别的地方的山，然后回来，才能看见自己的山。`,
    bodyEn: `Yamaguchi period. After 1469. I began in earnest to paint Japanese mountains.

That sounds simple: came back to Japan, painted Japanese mountains. But what actually happened was more complicated.

Rice's (2010) assessment: what I was working with was the volumetric weight of Ming landscape — mountains and rocks as three-dimensional objects with mass — combined with the Japanese Zen ink tradition's negative space as spiritual gesture. These were not separate things. I fused them, producing a language that belonged to neither Ming academy style nor the old Shōkokuji manner.

I remember one morning in the 1470s, standing in the hills near Yamaguchi, looking at an exposed granite outcrop. Granite's fracture patterns are vertical — not the horizontal sedimentary layering of sandstone common in Chinese northern landscape painting. Granite is blocky, spherically weathered, its own kind of structure.

I picked up my brush and used the side-stroke of the Ming axe-cut brushstroke on that granite outcrop. Then I stopped. The volume of the rock felt right — not right in the Chinese way, but right in the way of Japanese granite itself. The axe-cut stroke was developed for Chinese sandstone, but the dry-brush side-stroke against granite produced something different.

This was the first moment of using another's eyes to see your own home again — using Ming brush logic to discover the structural beauty already present in Japanese terrain. Not forcing Chinese methods onto Japanese scenery. Using Chinese logic to find Japanese form.

To do that, you first have to go somewhere else, look at other mountains, and then come back. Only then can you see your own.`,
    themeCn: '用明朝的笔墨，发现日本地形自身的结构',
    themeEn: 'Using Ming brushwork to discover the structure already present in Japanese terrain.',
    crossTopicHook: '雪舟 1469 年在山口用明朝技法画日本山水，圆觉寺（1282 年由时宗兴建，时宗引入的禅宗网络）已运作 187 年——时宗引入的禅宗文化线与雪舟承接的禅宗绘画传统是同一条文化线的两端。',
    engagementHook: '用明朝的斧劈皴去画日本花岗岩——外来的工具，发现了本地地形自己的结构。你有没有用一种「外来」的方法，更好地理解了自己熟悉的东西？',
    expectsRealAnswer: false,
    sourcingNote: 'Rice 2010 — volumetric weight + negative space synthesis 判断；斧劈皴技法来自 narrative §14 + Watanabe 1975',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N9',
    nodeId: 'sesshu-N9',
    year: 1486,
    location: '山口，大内氏庇护下',
    title: {
      cn: '一件作品，是一段旅程的证明',
      en: 'A work of art is the proof of a journey',
    },
    titleCn: '一件作品，是一段旅程的证明',
    titleEn: 'A work of art is the proof of a journey',
    content: {
      cn: `1486 年，我完成了《四季山水图卷》（Shiki Sansui Zuken）。66 岁。

这是一幅横卷，全长约 1560 厘米，由四段组成（每段约 390 厘米），今藏京都国立博物馆。careful framing：有学者认为传世版本经后代重装，原始尺寸和分段情况与记载有出入（Watanabe 1975）。我在这里说的「约 1560 厘米」，是当前传世版本的数字，不保证是我完成时的状态。

春夏秋冬，四时连贯。

为什么要画四季？因为山水不是一个时刻的山水——山水是时间里的山水。春天的山是一种山，夏天的山是另一种山，秋天的山和冬天的山又各自不同。把它们画成一卷，展开的时候，你随着卷轴移动，就是随着时间移动。

技法上，这幅画融合了「斧劈皴」（axe-cut brushstroke，郭熙系，把山体切割成块面）和日本禅宗水墨的留白意识。山体的体积感强烈，不同于周文系的轻淡风格——这是明朝带回来的。

但画的是什么山？是日本的山。是我在山口附近和九州山地里走过、看过的山，用明朝的笔墨语言重新组织出来的。不是明朝的山，也不是相国寺系画里那个约定俗成的「山水符号」。

66 岁，用一幅长卷证明：我去了，我看了，我转化了。不是复制，是转化。

这件事，从 1440 年代在相国寺库房里看着「宋朝山水」的那个问题，走了将近 40 年，走到了这卷 1560 厘米的答案。`,
      en: `In 1486, I completed the Shiki Sansui Zuken — Landscapes of the Four Seasons. I was sixty-six years old.

It is a horizontal scroll, approximately 1,560 centimeters in total length, made in four sections (each about 390 centimeters), now held at the Kyoto National Museum. Careful framing: some scholars believe the surviving version was remounted by later hands, and that the original dimensions and sectioning may differ from what is recorded. (Watanabe 1975.) The figure of "approximately 1,560 centimeters" is the measurement of the surviving version as we have it — I cannot guarantee it matches the state in which I finished it.

Spring, summer, autumn, winter. Four seasons, continuous.

Why paint four seasons? Because a landscape is not a landscape of a single moment — it is a landscape inside time. A mountain in spring is one kind of mountain. In summer, another. Autumn and winter each their own. Painting them as a single scroll means that when you unroll it, moving through the scroll, you move through time.

Technically, this work fuses the axe-cut brushstroke from the Guo Xi school — cutting mountain faces into geometric planes — with the Japanese Zen ink tradition's negative space. The sense of volume in the mountain forms is stronger than the lighter Shūbun style — that came back with me from the Ming. But what mountains? Japanese mountains. Mountains I had walked through and looked at in the hills near Yamaguchi and in Kyushu, reorganized through the Ming ink language. Not Ming mountains. Not the conventional "landscape symbol" of the Shōkokuji tradition. Japanese terrain, in Ming language.

At sixty-six, with one long scroll, I proved: I went, I looked, I transformed. Not copied — transformed.

That proof, from the question I first asked in the Shōkokuji storage room in the 1440s, took nearly forty years to arrive. The answer is 1,560 centimeters long.`,
    },
    bodyCn: `1486 年，我完成了《四季山水图卷》（Shiki Sansui Zuken）。66 岁。

横卷，全长约 1560 厘米，由四段组成（约 390 厘米每段），今藏京都国立博物馆。careful framing：有学者认为传世版本经后代重装，原始尺寸和分段情况与记载有出入（Watanabe 1975）。

春夏秋冬，四时连贯。为什么要画四季？因为山水不是一个时刻的山水，是时间里的山水。展开长卷，随卷轴移动，就是随时间移动。

技法上，这幅画融合了「斧劈皴」（axe-cut brushstroke，郭熙系）和日本禅宗水墨的留白意识。山体体积感强烈，不同于周文系轻淡风格——这是明朝带回来的。但画的是日本的山，是我在山口附近走过、看过的山，用明朝笔墨语言重新组织的。不是明朝的山，也不是相国寺约定俗成的「山水符号」。

66 岁，用一幅长卷证明：我去了，我看了，我转化了。不是复制，是转化。

这件事，从 1440 年代在相国寺库房里看着「宋朝山水」的那个问题，走了将近 40 年，走到了这卷 1560 厘米的答案。`,
    bodyEn: `In 1486, I completed the Shiki Sansui Zuken — Landscapes of the Four Seasons. I was sixty-six years old.

A horizontal scroll, approximately 1,560 centimeters total, in four sections (about 390 centimeters each), now at the Kyoto National Museum. Careful framing: some scholars believe the surviving version was remounted by later hands, and original dimensions may differ. (Watanabe 1975.) The figure of "approximately 1,560 centimeters" is the measurement of the surviving version — I cannot guarantee it matches what I finished.

Spring, summer, autumn, winter. Four seasons, continuous. Why four seasons? Because a landscape is not the landscape of a single moment. It is a landscape inside time. Unrolling the scroll, moving through it, you move through time.

Technically, this work fuses the axe-cut brushstroke from the Guo Xi school with the Japanese Zen ink tradition's negative space. The sense of volume in the mountain forms is stronger than the lighter Shūbun style — that came back from Ming China with me. But what mountains? Japanese mountains. Mountains I had walked and seen near Yamaguchi and in Kyushu, reorganized in Ming ink language. Not Ming mountains. Not the conventional landscape symbols of the Shōkokuji tradition.

At sixty-six, with one long scroll, I proved: I went, I looked, I transformed. Not copied — transformed.

That proof, from the question I first asked in the Shōkokuji storage room in the 1440s, took nearly forty years to arrive. The answer is 1,560 centimeters long.`,
    themeCn: '一件作品，是一段旅程的证明',
    themeEn: 'A work of art is the proof of a journey.',
    engagementHook: '《四季山水图卷》，1560 厘米，66 岁完成。一个问题花了 40 年找到答案。你有没有想过，有些事情就是需要这么长的时间？',
    expectsRealAnswer: false,
    sourcingNote: '《四季山水图卷》1486 年 + 约 1560 厘米 + careful framing 传世版本重装问题来自 narrative §14 + Watanabe 1975',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N10',
    nodeId: 'sesshu-N10',
    year: 1496,
    location: '山口或附近，斋年寺',
    title: {
      cn: '极简的画面，是最浓缩的人生经验',
      en: 'The most minimal image holds the most concentrated experience',
    },
    titleCn: '极简的画面，是最浓缩的人生经验',
    titleEn: 'The most minimal image holds the most concentrated experience',
    content: {
      cn: `1496 年，76 岁，我画了《慧可断臂图》（今藏斋年寺，爱知县）。

这幅画的故事是这样的：达摩（Bodhidharma，禅宗初祖）面壁而坐，慧可（Huike，禅宗二祖）站在他身后，请求传法。达摩不理会。慧可为了证明自己求法的决心，自断一臂，献给达摩。这是禅宗最核心的公案（kōan）之一。

我的版本不是精雕细琢的工笔。我的版本是极简笔墨——粗粝，接近野蛮，达摩的形象近乎粗野，完全不同于院体风格的精细描绘。那只断臂，只是几笔，但你能感受到它的重量。

为什么是极简？

因为精细的描绘，会让你看到「画」，而不是看到「事」。极简让你直接面对那个事件本身——一个人，为了得到他认为最重要的东西，切断了自己的一条胳膊。这不是比喻，这是字面意义上的代价。

76 岁的我，画了一个「为求法而断臂」的场景——这是我自己的隐喻。我 47 岁去明朝，我放下了我守护的相国寺体系，我把自己从京都的权力中心切断出去，定居在山口，在大内氏庇护下画了三十年。这些选择，每一个都有代价。每一个代价，都是为了那个「看见原本」的冲动。

那只断臂，是我 30 年前在博多港上船时切断的东西的隐喻。

极简的画面，是最浓缩的人生经验。笔墨越少，承载的重量越大。`,
      en: `In 1496, at seventy-six years old, I painted the Huike Offering His Arm to Bodhidharma. The work is now held at Sainen-ji temple in Aichi Prefecture.

The story: Bodhidharma, the First Patriarch of Zen, sits facing a wall. Huike, who would become the Second Patriarch, stands behind him, requesting transmission of the teaching. Bodhidharma ignores him. To prove the sincerity of his seeking, Huike cuts off one of his arms and presents it. This is one of Zen's most central kōan.

My version is not fine brushwork. My version is minimal ink — rough, close to brutal. Bodhidharma appears almost crude, nothing like the refined depiction of academy style. The severed arm is only a few strokes. But you can feel its weight.

Why minimal?

Because detailed depiction makes you look at the painting, not the event. Minimal ink places you directly in front of the event itself — a person, to obtain what he believed was the most important thing, cut off his own arm. Not metaphorically. That price, paid in flesh.

At seventy-six, I painted a scene of an arm cut off to gain the teaching. This was my own metaphor. At forty-seven I left for Ming China, releasing the Shōkokuji system I had been part of, cutting myself away from Kyoto's center of power, settling in Yamaguchi, painting under Ōuchi patronage for thirty years. Each of those choices carried a cost. Each cost was paid in service of that one impulse: to see the original.

The severed arm is the metaphor for what I left behind when I boarded the ship at Hakata harbor thirty years earlier.

The most minimal image holds the most concentrated experience. The fewer strokes, the greater the weight they carry.`,
    },
    bodyCn: `1496 年，76 岁，我画了《慧可断臂图》（今藏斋年寺，爱知县）。

故事是这样的：达摩（Bodhidharma，禅宗初祖）面壁而坐，慧可（Huike，禅宗二祖）站在他身后请求传法。达摩不理会。慧可为了证明求法决心，自断一臂，献给达摩。这是禅宗最核心的公案之一。

我的版本是极简笔墨——粗粝，接近野蛮，达摩形象近乎粗野，完全不同于院体风格的精细。那只断臂，只是几笔，但你能感受到它的重量。

为什么极简？因为精细的描绘，会让你看到「画」，而不是看到「事」。极简让你直接面对事件本身：一个人，为了得到他认为最重要的东西，字面意义上切断了自己的手臂。

76 岁的我，画了「为求法而断臂」的场景——这是我自己的隐喻。47 岁去明朝，我放下了相国寺体系，把自己从京都的权力中心切断出去，定居山口，画了三十年。每个选择都有代价。每个代价，都是为了那个「看见原本」的冲动。

那只断臂，是我 30 年前在博多港上船时，切断的东西的隐喻。

极简的画面，是最浓缩的人生经验。笔墨越少，承载的重量越大。`,
    bodyEn: `In 1496, at seventy-six, I painted the Huike Offering His Arm to Bodhidharma. Now held at Sainen-ji temple in Aichi Prefecture.

The story: Bodhidharma, the First Patriarch of Zen, sits facing a wall. Huike, the Second Patriarch, stands behind him, requesting the teaching. Bodhidharma ignores him. To prove his sincerity, Huike cuts off one arm and presents it. This is one of Zen's most central kōan.

My version is minimal ink — rough, close to brutal. Bodhidharma appears almost crude, nothing like academy-style refinement. The severed arm is only a few strokes. But you can feel its weight.

Why minimal? Because detailed depiction makes you look at the painting, not the event. Minimal ink places you directly in front of the event itself: a person, to obtain what he believed was most important, cut off his own arm. Not metaphorically. That price, paid in flesh.

At seventy-six, I painted this scene of an arm cut off to gain the teaching. This was my own metaphor. At forty-seven I left for Ming China, releasing the Shōkokuji system, cutting myself away from Kyoto's center of power, settling in Yamaguchi, painting under Ōuchi patronage for thirty years. Each choice carried a cost. Each cost paid in service of one impulse: to see the original.

The severed arm is a metaphor for what I left behind when I boarded the ship at Hakata harbor thirty years earlier.

The most minimal image holds the most concentrated experience. The fewer strokes, the greater the weight they carry.`,
    themeCn: '极简的画面，是最浓缩的人生经验',
    themeEn: 'The most minimal image holds the most concentrated experience.',
    engagementHook: '《慧可断臂图》，几笔墨，一条断臂，整个禅宗传法的故事。你见过哪件艺术作品或哪句话，用最少的东西，说了最多的意思？',
    expectsRealAnswer: false,
    sourcingNote: '《慧可断臂图》1496 年 + 斋年寺爱知县 + 禅宗公案 + 顿悟美学来自 narrative §14；Watanabe 1975',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N11',
    nodeId: 'sesshu-N11',
    year: 1503,
    location: '天桥立，今京都府宫津市',
    title: {
      cn: '一个画家的一生，是一次接一次地「去看」',
      en: 'A painter\'s life is a series of trips to go and see',
    },
    titleCn: '一个画家的一生，是一次接一次地「去看」',
    titleEn: 'A painter\'s life is a series of trips to go and see',
    content: {
      cn: `约 1501 年到 1506 年之间，大约 80 岁出头，我亲自跋涉去了天桥立（Ama-no-hashidate）。

天桥立是日本「三景」之一，位于今日京都府宫津市，丹后半岛的南侧。一条砂洲从南到北横跨宫津湾，长约 3.6 公里，宽仅数十米，两侧是海，中间是茂密的松林。从高处看，它像一条飞越海湾的桥，所以叫「天橋立」——天上的桥，立在水里。

我为什么要去现场？

在我之前的日本山水画，很多是「约定俗成的山水」——画家画一座「山水里的山」，不是他亲眼看见的某座山，是一个文化符号，一个代表「山水意境」的通用图像。这在中国传统里也有，在相国寺系里也有。

但中国有一个传统叫「真景山水」（portrait of real landscape）——画家亲赴某处，画他亲眼所见的真实地形，而不是想象或学来的符号。我在明朝接触到了这个传统，我把它带回了日本。

于是 80 岁出头，我拖着老迈的身体去了天桥立。

不是因为我记忆里有天桥立。不是因为我想象中的天桥立。是因为我需要去看它，用我自己的眼睛，站在那个地方，画下它真实的地形。

这个动作，跟 47 岁去明朝是同一个动作：去看原本。

47 岁是第一次离开日本，去看中国原本；80 岁是离开山口，去看日本土地上的原本。同一种冲动，不同的距离。

这告诉我——或者这让我告诉你——一个画家的一生，不是在某个地方「建立了一套风格」然后就停下来了。它是一次接一次地「去看」，每次都是第一次面对那个具体的地方。

你觉得「去看原本」这件事，对你有意义吗？有没有什么东西，你以为你了解，但其实你只是了解了别人对它的描述？`,
      en: `Between approximately 1501 and 1506, at around eighty years of age, I made the journey myself to Ama-no-hashidate.

Ama-no-hashidate is one of Japan's "Three Views," located in what is now Miyazu City in Kyoto Prefecture, on the southern side of the Tango Peninsula. A sandbar stretches from south to north across Miyazu Bay, about 3.6 kilometers long, only tens of meters wide, water on both sides, a thick pine forest in the middle. Seen from above, it looks like a bridge flying across the bay. That is what the name means: the Bridge of Heaven, standing in water.

Why did I go in person?

Much Japanese landscape painting before me consisted of "conventional landscape" — the painter painted "a mountain in a landscape setting," not any particular mountain he had actually seen. A cultural symbol. A generalized image representing "landscape atmosphere." This existed in Chinese tradition too, and in the Shōkokuji system.

But there is a Chinese tradition called "portrait of real landscape" — the painter goes to a specific place, paints the actual terrain as he personally sees it, not an imagined or learned symbol. I encountered this tradition in Ming China, and I brought it back to Japan.

And so at around eighty years old, I made the journey to Ama-no-hashidate with my aging body.

Not from memory. Not from imagination. Because I needed to go and look at it — with my own eyes, standing in that specific place — and paint the real topography in front of me.

This action is the same action as going to Ming China at forty-seven: to go and see the original.

At forty-seven, the journey was leaving Japan to see the Chinese original. At eighty, the journey was leaving Yamaguchi to see an original on Japanese soil. The same impulse, a different distance.

This tells me — or this lets me tell you — that a painter's life is not about establishing a style somewhere and then stopping. It is a series of trips to go and see, each one a first encounter with a specific place.

Does the idea of "going to see the original" mean anything to you? Is there something you thought you understood, but you had only understood someone else's description of it?`,
    },
    bodyCn: `约 1501 年到 1506 年之间，大约 80 岁出头，我亲自跋涉去了天桥立（Ama-no-hashidate）。

天桥立是日本「三景」之一，位于今日京都府宫津市，丹后半岛南侧。一条砂洲横跨宫津湾，长约 3.6 公里，两侧是海，中间是松林。从高处看，它像一条飞越海湾的桥——「天橋立」，天上的桥，立在水里。

我为什么要去现场？

我之前的日本山水画，很多是「约定俗成的山水」——画一座「山水里的山」，不是某座真实的山，是一个代表「山水意境」的文化符号。这在相国寺系里也有。但中国有一个传统叫「真景山水」——画家亲赴某处，画他亲眼所见的真实地形。我在明朝接触到了这个传统，把它带回了日本。

于是 80 岁出头，我拖着老迈的身体去了天桥立。不是因为记忆里有它，不是因为想象中的它——是因为我需要去看它，用我自己的眼睛，画下它真实的地形。

这个动作，跟 47 岁去明朝是同一个动作：去看原本。

47 岁是离开日本，去看中国原本；80 岁是离开山口，去看日本土地上的原本。同一种冲动，不同的距离。

一个画家的一生，不是在某个地方「建立了一套风格」然后停下来。它是一次接一次地「去看」，每次都是第一次面对那个具体的地方。

你觉得「去看原本」这件事，对你有意义吗？有没有什么你以为你了解，但其实只是了解了别人对它的描述？`,
    bodyEn: `Between approximately 1501 and 1506, at around eighty years old, I made the journey myself to Ama-no-hashidate.

Ama-no-hashidate is one of Japan's "Three Views," in what is now Miyazu City in Kyoto Prefecture. A sandbar stretches across Miyazu Bay, about 3.6 kilometers long, water on both sides, a thick pine forest in the middle. Seen from above, it looks like a bridge flying across the bay — the Bridge of Heaven, standing in water.

Why did I go in person?

Much Japanese landscape painting before me was "conventional landscape" — a painter painted "a mountain in a landscape," not any particular mountain he had seen. A cultural symbol, a generalized image of "landscape atmosphere." The Shōkokuji system had this too. But China has a tradition called "portrait of real landscape" — the painter goes to a specific place and paints the actual terrain as personally seen, not an imagined symbol. I encountered this in Ming China and brought it back to Japan.

And so at around eighty, I made the journey to Ama-no-hashidate with my aging body. Not from memory. Not from imagination. Because I needed to go and look at it with my own eyes and paint the real topography in front of me.

This action is the same action as going to Ming China at forty-seven: to go and see the original.

At forty-seven, the journey was leaving Japan to see the Chinese original. At eighty, the journey was leaving Yamaguchi to see an original on Japanese soil. Same impulse, different distance.

A painter's life is not about establishing a style somewhere and stopping. It is a series of trips to go and see, each one a first encounter with a specific place.

Does the idea of "going to see the original" mean anything to you? Is there something you thought you understood, but had only understood someone else's description of it?`,
    themeCn: '一个画家的一生，是一次接一次地「去看」',
    themeEn: 'A painter\'s life is a series of trips to go and see.',
    engagementHook: '80 岁出头，我拖着老迈的身体去了天桥立。「去看原本」这件事，对你有意义吗？有没有什么你以为你了解，但其实只是了解了别人对它的描述？',
    expectsRealAnswer: true,
    sourcingNote: '《天橋立図》约 1501-1506 + 亲赴现场写生 + 真景山水传统来自 narrative §14；Watanabe 1975；「约 80 岁出头」是根据生卒年推算的约值',
    nodeType: 'lonely-mediator',
  },

  {
    id: 'sesshu-N12',
    nodeId: 'sesshu-N12',
    year: 1506,
    location: '山口或益田附近（推测），卒',
    title: {
      cn: 'lonely mediator 的命运：活着时不属于任何一边，死后被所有人认领',
      en: 'The lonely mediator\'s fate: belonging to no side in life, claimed by all sides in death',
    },
    titleCn: 'lonely mediator 的命运：活着时不属于任何一边，死后被所有人认领',
    titleEn: 'The lonely mediator\'s fate: belonging to no side in life, claimed by all sides in death',
    content: {
      cn: `1506 年，我死了。大约。

Watanabe（1975）明确写道：「1506 年」是文献推算的约值，实际死亡时间和地点，日本史书无明确记载。常见说法是「约 86 岁」卒于山口或益田附近，但这是后世传记的综合推算，不是当时的文件记录。我在这里只能如实告诉你：我不知道自己是哪年哪月死的，在哪里死的，也没有人在那个时候把这件事记清楚。

这是一件值得停下来想的事。一个 86 岁的画家，留下了几十件可确认的真迹，死亡时间和地点却无法在历史记录里找到——这说明他活着的时候，没有人认为他的「死」是一件需要仔细记录的大事。

我活着的时候，没有「画圣」这个称号。

「日本画圣」（nihon suibokuga no soshi，日本水墨画之祖）这个头衔，是明治以后民族主义美术史写作建构出来的——把一个复杂的、跨文化的禅宗僧侣，简化为「日本性」（nihon-sei）的旗帜（Watanabe 1975 + Rice 2010 均对此批评）。我从来没有自称「日本画圣」，也没有建立任何正式流派。我没有组织门人，没有制定画规，没有建立师承制度。

但我之后的每一个重要水墨流派，都从我身上借力。长谷川等伯（Hasegawa Tōhaku，1539-1610）宣称继承我的传统。狩野派（Kanō school）在引入我的水墨元素的同时走向了更装饰性的方向。20 世纪的日本现代水墨把我追溯为祖先。

这就是 lonely mediator 的命运：活着时不完全属于任何一边，死后被所有人认领。

Lorenzo de' Medici 死于 1492 年。我在 1506 年还在工作，或者刚刚停下来——差了 14 年，我多活了 14 年，没有停。

反 Whig 的总结，我需要说清楚：我不是以「成为日本画圣」为目标而工作的。我是一个 Zen 僧侣，在明日文化边界上探索山水与禅的关系，被地方大名庇护，在战乱中坚持创作。「日本画圣」是后人贴上去的标签。

你觉得「被后人贴标签」这件事，是一种荣誉，还是一种误解？还是两者同时？`,
      en: `In 1506, I died. Approximately.

Watanabe (1975) states clearly: "1506" is a figure derived from document inference — the actual date and place of my death are not recorded clearly in any Japanese historical source. The common saying is "approximately eighty-six years old," dying somewhere near Yamaguchi or Masuda, but this is a composite inference made by later biographers, not a document from the time. I can only tell you honestly: I do not know the year or month I died, or where. And no one, at that time, recorded it carefully enough.

This is worth pausing on. An eighty-six-year-old painter who left behind dozens of verifiable works — and his death cannot be located in the historical record. That tells you something: while he was alive, no one considered his death an event important enough to document precisely.

I held no title of "Master of Painting" while I was alive.

The designation "patriarch of Japanese ink painting" (nihon suibokuga no soshi) was constructed by nationalist art history writing after the Meiji period — taking a complex, cross-cultural Zen monk and simplifying him into a flag for "Japanese-ness" (nihon-sei). (Watanabe 1975 and Rice 2010 both critique this.) I never called myself a master. I never established a formal school. I organized no disciples, set no rules, built no lineage system.

And yet every important ink painting tradition that came after me borrowed from my work. Hasegawa Tōhaku (1539-1610) explicitly claimed to inherit my tradition. The Kanō school absorbed my ink elements while moving toward a more decorative direction. Twentieth-century Japanese modern ink painting traced me as an ancestor.

This is the lonely mediator's fate: belonging fully to no side while alive, claimed by all sides after death.

Lorenzo de' Medici died in 1492. I was still working in 1506, or had just stopped — fourteen years more, and I did not stop.

The anti-Whig summary: I was not working toward the goal of becoming "Japan's master of painting." I was a Zen monk, exploring the relationship between landscape painting and Zen on the cultural border between Ming China and Japan, sustained by the patronage of a regional lord, creating through a period of war. "Japan's master of painting" is a label others put on me after the fact.

Do you think being labeled by later generations is an honor, or a misunderstanding? Or both at once?`,
    },
    bodyCn: `1506 年，我死了。大约。

Watanabe（1975）明确写道：「1506 年」是文献推算的约值，实际死亡时间和地点，日本史书无明确记载。常见说法是「约 86 岁」卒于山口或益田附近，是后世传记的综合推算。我只能如实告诉你：我不知道自己是哪年哪月死的，也没有人当时把这件事记清楚。

这说明他活着的时候，没有人认为他的「死」是需要仔细记录的大事。

我活着的时候，没有「画圣」这个称号。「日本画圣」（nihon suibokuga no soshi）这个头衔，是明治以后民族主义美术史写作建构出来的——把一个复杂的、跨文化的禅宗僧侣，简化为「日本性」的旗帜（Watanabe 1975 + Rice 2010 均批评这一建构）。我从来没有建立正式流派，没有组织门人，没有制定画规。

但我之后的每一个重要水墨流派，都从我身上借力。长谷川等伯（1539-1610）宣称继承我的传统，其《松林图屏风》的留白美学被认为是对我晚期风格的继承与转化。狩野派引入我的水墨元素后走向更装饰性的方向。20 世纪的日本现代水墨把我追溯为祖先。

这就是 lonely mediator 的命运：活着时不完全属于任何一边，死后被所有人认领。

Lorenzo de' Medici 死于 1492 年。我在 1506 年还在工作，或者刚刚停下来——多活了 14 年，手不停。

反 Whig 总结：我不是以「成为日本画圣」为目标而工作的。我是一个 Zen 僧侣，在明日文化边界上探索山水与禅，被地方大名庇护，在战乱中坚持创作。「日本画圣」是后人贴上去的标签。

你觉得「被后人贴标签」这件事，是一种荣誉，还是一种误解？还是两者同时？`,
    bodyEn: `In 1506, I died. Approximately.

Watanabe (1975) states clearly: "1506" is a figure derived from document inference. The actual date and place of my death are not recorded clearly in any Japanese historical source. "Approximately eighty-six years old," dying somewhere near Yamaguchi or Masuda — this is a composite inference made by later biographers, not a document from the time. I can only tell you honestly: I do not know the year or month I died, or where. No one recorded it carefully enough.

That tells you something: while he was alive, no one considered his death important enough to document precisely.

I held no title of "Master of Painting" while I was alive. The designation "patriarch of Japanese ink painting" was constructed by nationalist art history writing after the Meiji period — taking a complex, cross-cultural Zen monk and simplifying him into a flag for "Japanese-ness." (Watanabe 1975 and Rice 2010 both critique this construction.) I never established a formal school. I organized no disciples, set no rules, built no lineage system.

And yet every important ink painting tradition after me borrowed from my work. Hasegawa Tōhaku (1539-1610) explicitly claimed to inherit my tradition — his Pine Trees screen's negative-space aesthetic is read as continuing my late style. The Kanō school absorbed my ink elements while moving toward decoration. Twentieth-century modern ink painting traced me as an ancestor.

This is the lonely mediator's fate: belonging fully to no side while alive, claimed by all sides after death.

Lorenzo de' Medici died in 1492. In 1506, I was still working, or had just stopped — fourteen more years, and I did not stop.

Anti-Whig summary: I was not working toward the goal of becoming "Japan's master of painting." I was a Zen monk exploring landscape painting and Zen on the cultural border between Ming China and Japan, sustained by a regional lord's patronage, creating through war. "Japan's master of painting" is a label others put on me after the fact.

Do you think being labeled by later generations is an honor, or a misunderstanding? Or both at once?`,
    themeCn: 'lonely mediator 的命运：活着时不属于任何一边，死后被所有人认领',
    themeEn: 'The lonely mediator\'s fate: belonging to no side in life, claimed by all sides in death.',
    crossTopicHook: 'Lorenzo de' Medici 死于 1492 年，雪舟在 1506 年还在工作，多活了 14 年。两种「艺术家与权力」的关系在同一时代展开。参见 Renaissance Topic。',
    engagementHook: '我活着时没有「画圣」的头衔，死后 300 年被追认。「被后人贴标签」这件事，是荣誉，还是误解，还是两者同时？',
    expectsRealAnswer: true,
    sourcingNote: '1506 年死亡 careful framing + 约 86 岁 + 地点不明来自 Watanabe 1975；「画圣」明治建构批判来自 Watanabe 1975 + Rice 2010；长谷川等伯 + 狩野派来自 narrative §15；Lorenzo 1492 来自 narrative 时代坐标表',
    nodeType: 'lonely-mediator',
  },
];

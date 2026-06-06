// ─────────────────────────────────────────────────────────────────
// 古以色列与一神教的起源（约前 1000） — Ancient Israel & the Origins of
//   Monotheism · Lens Storyboard (schemaVersion 2)
// ─────────────────────────────────────────────────────────────────
// Cultural ban (AUTHORING_PIPELINE 第7条): 全程用希伯来/古近东真实术语
//   (YHWH/Torah/covenant·brit/Babylon/Marduk/ziggurat/Yehud/diaspora/Shema/
//   First Temple/Zion),只有 §8 同代中国段落才用中国术语 (Tian·天/Shangdi·上帝/
//   Mandate of Heaven·天命/祖先)。
// Rule 0 高敏感 (本 topic 最高红线): 凡涉《希伯来圣经》事件,必并置两种读法 —
//   ① 信仰传统内部读法 ② 学术-历史-考古读法,分层并列,不互相否定,不替学生判断
//   「神是否存在/哪种宗教更真」。
// 3 lens / 11 nodes each / Rule 0 中性 / expectsRealAnswer 仅 N10 + N11。
// 跨 lens micro-detail: 巴比伦河边的「号角与高塔」之夜 — 胜利者听成帝国凯歌/
//   先知听成替神说话的时刻/被掳少年听成「我们的神是不是也输了」的拷问。
//   三视角各触一次,不互相点破。
// 跨 Topic 锚: conqueror N9 ↔ babylonian-exile (Cyrus 放归/Second Temple 同段历史尾声,双向呼应)。
// ─────────────────────────────────────────────────────────────────

export var conquerorLens = {
  id: 'babylon-conqueror-actor',
  name: 'The Babylonian Victor',
  nameCn: '巴比伦的胜利者',
  role: 'perpetrator-actor',
  perspectiveTag: 'neo-babylonian-empire',
  icon: '🦁',
  description: {
    cn: '前 6 世纪初，一名押解俘虏回巴比伦的尼布甲尼撒（Nebuchadnezzar）军官。他没有名字，因为他代表的是新巴比伦帝国那一整套「帝国常识」：战争同时是神与神的较量，谁赢了就是谁的神更强。他的主神是 Marduk（马尔杜克），有壮丽神庙、繁复节庆。烧掉耶路撒冷那座只供一个看不见的神、连神像都没有的「圣殿」，在他看来再正常不过。这一遍让你从一个胜利的多神教帝国内部往外看，看他如何完全无法预料：这场流放，反而把被掳者的信仰逼成了一种全新的东西。',
    en: 'In the early sixth century BCE, an officer of Nebuchadnezzar escorting captives back to Babylon. He has no name, because he stands for the whole "imperial common sense" of the Neo-Babylonian Empire: war is also a contest of god against god, and whoever wins has the stronger god. His chief god is Marduk, with a grand temple and elaborate festivals. To burn the Jerusalem "Temple" that served a single invisible god with no idol at all seemed to him entirely normal. This pass lets you look out from inside a victorious polytheist empire, and watch how he could never foresee that this exile would instead forge the captives\' faith into something entirely new.',
  },
  storyboard: [
    {
      id: 'ancient-israel-conq-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '前 6 世纪初一个夏天，我押着一长队俘虏，走在通往巴比伦的路上。\n\n身后那座城，叫耶路撒冷（Jerusalem），已经烧了。城里有一座建筑，他们叫它「圣殿」（First Temple）。我亲眼看着它在火里塌下去。\n\n我是尼布甲尼撒（Nebuchadnezzar）王手下的一名军官。我不告诉你我的名字，因为我不是某一个人——我代表的是当时整个古近东都信的一套常识。\n\n这套常识很简单：打仗，不只是人跟人打，是神跟神打。谁的军队赢了，就是谁的神更强。\n\n这一遍，你坐进我这个胜利者的位置。你会觉得一切顺理成章：我们赢了，他们的神输了，这些俘虏迟早会忘掉自己的神、融进巴比伦。\n\n你也会看见，我把一件事，彻底看错了。',
        en: 'In the early sixth century BCE, one summer, I march a long line of captives down the road to Babylon.\n\nThe city behind me, called Jerusalem, is already burned. In it stood a building they called the "Temple," the First Temple. I watched with my own eyes as it collapsed in the fire.\n\nI am an officer under King Nebuchadnezzar. I will not tell you my name, because I am not one man. I stand for a piece of common sense that all of the ancient Near East believed in those days.\n\nThe common sense is simple: war is not only men against men. It is god against god. Whichever army wins, that side has the stronger god.\n\nThis pass puts you in my seat, the victor\'s seat. Everything will feel natural to you: we won, their god lost, and these captives will sooner or later forget their god and melt into Babylon.\n\nYou will also see one thing that I read completely wrong.',
      },
      deliverGoal: 'N1 hook — 前 6 世纪初夏 押俘虏回 Babylon 路上 + 身后 Jerusalem 已烧/First Temple 火里塌 + Nebuchadnezzar 军官自我介绍 (不给名字/代表整个古近东帝国常识) + 帝国常识: 战争=神与神打谁赢谁神强 + 这一遍视角 (顺理成章我们赢他们神输俘虏会融进巴比伦) + 伏笔: 我把一件事彻底看错',
      engagementHook: '在我们的世界里，打仗就是神跟神打——谁赢了，就是谁的神更强。你愿意从一个胜利者内部，看他怎么把一件大事彻底看错吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-conq-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先让你看清我们巴比伦人的世界，你才懂我为什么那么自信。\n\n我们的天上不是只有一个神，是一大群神，各管一摊。我们的主神叫 Marduk（马尔杜克），他有全城最壮丽的神庙，有看得见、摸得着的神像，有一年到头的盛大节庆，有写满泥板的神话故事。\n\n这就是我心里「神该有的样子」：有庙、有像、有城、有军队护着。神强不强，看得见——看他的城多大、他的王赢过多少仗。\n\n所以当我们攻进耶路撒冷，我特别不理解他们那座「圣殿」：里面竟然没有神像。他们拜的那个神，叫 YHWH（雅威），看不见、不许造像、只有这一座庙。\n\n在我眼里，一个连像都没有、只剩一座庙的神，太弱了。庙一烧，他不就什么都没有了吗？\n\n我当时百分之百确定：我们赢了，YHWH 输了。',
        en: 'First let me show you our Babylonian world, so you understand why I was so sure.\n\nIn our heavens there is not one god but a great crowd of them, each in charge of one thing. Our chief god is called Marduk. He has the grandest temple in the whole city, an idol you can see and touch, great festivals all year round, and myths written across many clay tablets.\n\nThis is what "a god ought to look like" to me: a temple, an idol, a city, an army to guard him. Whether a god is strong, you can see — how big his city is, how many wars his king has won.\n\nSo when we broke into Jerusalem, I could not understand their "Temple" at all: inside, there was no idol. The god they worshipped, called YHWH (say it YAH-weh), was invisible, forbidden to be made into an image, and had only this one temple.\n\nIn my eyes, a god with no image, with only one temple, was too weak. Burn the temple, and does he not have nothing left?\n\nI was a hundred percent certain then: we won, and YHWH lost.',
      },
      deliverGoal: 'N2 setup — 巴比伦多神教世界 (一大群神各管一摊/主神 Marduk 壮丽神庙+看得见神像+盛大节庆+泥板神话) + 「神该有的样子」=有庙有像有城有军队/强不强看得见 + 不理解 Jerusalem 圣殿没神像 (YHWH 看不见/不许造像/只一座庙) + 在我眼里太弱 (庙一烧就没了) + 百分百确定我们赢 YHWH 输',
      engagementHook: '在我看来，一个连神像都没有、只剩一座庙的神，太弱了——庙一烧，他不就什么都没了？你觉得「神强不强」，真的看得见吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-conq-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '在我们帝国看来，灭掉一个小民族，是一门有标准流程的活儿。\n\n这片土地，史称 Levant（黎凡特）/ Canaan（迦南），是地中海东岸一条窄长的走廊。它卡在两大文明中间——南边埃及，东北边我们美索不达米亚。所有想从一头打到另一头的大军，都得从这条走廊踩过去。\n\n它太重要，所以总被争夺；又太小，所以总被碾压。在我们眼里，这种走廊小国，就是用来吞的。\n\n吞法也有套路：攻破城、烧掉对方的神庙（等于宣告他们的神输了）、把祭司、贵族、工匠这些有用的人成批掳走，打散、迁走。剩下的人没了精英、没了神庙，过两代就忘了自己是谁，慢慢融进我们。\n\n这套办法，我们用在几十个小民族身上，每次都灵。亚述人这么干，我们巴比伦人也这么干。\n\n犹大（Judah）只是这串名单上，又一个该消失的名字。我没有任何理由怀疑这次会不一样。',
        en: 'In our empire\'s eyes, wiping out a small people is a job with a standard procedure.\n\nThis land, called the Levant or Canaan, is a long narrow corridor on the eastern coast of the Mediterranean. It is wedged between two great civilizations — Egypt to the south, our Mesopotamia to the northeast. Every army that wants to march from one end to the other must tread across this corridor.\n\nIt is too important, so it is always fought over; too small, so it is always crushed. To us, such a corridor state is there to be swallowed.\n\nSwallowing has its method too: break the city, burn the enemy\'s temple (which announces that their god has lost), and carry off the useful people in batches — priests, nobles, craftsmen — scatter them, move them away. Those left behind, with no elite and no temple, forget within two generations who they are, and slowly melt into us.\n\nThis method we used on dozens of small peoples, and it worked every time. The Assyrians did it, and we Babylonians do it too.\n\nJudah is only one more name on this list that ought to disappear. I had no reason at all to doubt that this time would be any different.',
      },
      deliverGoal: 'N3 setup — 灭小民族有标准流程 + Levant/Canaan 走廊地理 (地中海东岸窄长/卡埃及与美索不达米亚之间/大军必经) + 太重要总被争夺太小总被碾压=用来吞的 + 吞法套路 (破城/烧神庙=宣告其神输/掳走祭司贵族工匠打散迁走/剩下人两代忘了自己融进我们) + 用在几十个小民族每次都灵 (亚述也这么干) + Judah 只是名单上又一个该消失的名字',
      engagementHook: '我们灭小民族有一套百试百灵的流程：烧庙、掳走精英、剩下的人两代就忘了自己是谁。一套对几十个民族都灵的办法，这次会不会也灵？',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-conq-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你押着这队俘虏，走向巴比伦。前面就是我们的城——城墙高耸，运河纵横，刺向天空的高塔（ziggurat，叫做塔庙），还有传说中的空中花园。这是当时世界上最壮观的城市之一。\n\n你回头看一眼这些俘虏。他们脏、累、沉默，刚刚失去了城、庙、国土，失去了一切。\n\n你心里很笃定：等他们走进巴比伦，被这一片壮丽一震，就明白谁才是真正的强者了。再过一两代，他们的孩子会说我们的话、拜我们的 Marduk，YHWH 这个名字会慢慢没人再提。\n\n你甚至有点替他们可惜，又有点得意：看，又一个民族，要在我手里消失了。\n\n但请你在这儿停一下，替你这个胜利者，问一个你当时根本想不到要问的问题：如果一个民族的神，本来就不靠庙、不靠像、不靠国土呢？那你烧掉的，到底是什么？',
        en: 'Now you are me.\n\nYou march this line of captives toward Babylon. Ahead is our city — high walls, crisscrossing canals, towers (ziggurats, temple-towers) stabbing at the sky, and the fabled hanging gardens. It is one of the most magnificent cities in the world at the time.\n\nYou glance back at the captives. They are filthy, exhausted, silent, having just lost their city, their temple, their land — lost everything.\n\nYou are certain in your heart: once they walk into Babylon and are struck by all this grandeur, they will understand who the truly strong one is. In another generation or two, their children will speak our tongue, worship our Marduk, and the name YHWH will slowly go unspoken.\n\nYou even feel a little pity for them, and a little pride: see, another people, about to vanish in my hands.\n\nBut stop here a moment, and on behalf of you the victor, ask a question you would never have thought to ask back then: what if a people\'s god never rested on a temple, on an image, on a land at all? Then what, exactly, did you burn?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 押俘虏走向 Babylon + 城的壮丽 (城墙高耸/运河纵横/ziggurat 塔庙刺向天空/空中花园/世界最壮观城市之一) + 回头看俘虏 (脏累沉默失去一切) + 笃定: 一震就明白谁强/一两代孩子说我们话拜 Marduk/YHWH 没人再提 + 替他们可惜又得意 (又一个民族在我手里消失) + 停下问一个当时想不到的问题: 如果一个民族的神本不靠庙/像/国土呢, 那你烧掉的到底是什么',
      engagementHook: '我笃定再过两代，他们的孩子就会拜我们的神，连 YHWH 这名字都没人提了。可如果有一种神，本来就不靠庙、不靠像、不靠国土——那我烧掉的，到底是什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-conq-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我先把账算给你听，证明我的自信不是没道理。\n\n往前推一百多年，前 722 年，亚述帝国灭掉了北边那个王国——以色列（Israel）。手法跟我们一样：破城、掳走精英、打散迁走。结果呢？北国那些被掳的人，真的就那么消失了——后世连他们去了哪儿都说不清，传说里叫「失踪的十支派」。\n\n你看，这就是规律。被大帝国掳走的小民族，结局只有一个：散掉、忘掉、没掉。\n\n现在轮到南边这个犹大（Judah），守着耶路撒冷和那座圣殿的小王国。我们前 586 年攻破它、烧了庙、掳走它的人。按一百多年前北国那个剧本，故事到这儿就该结束了。\n\n我没有任何理由怀疑。我手里有先例，有规律，有一整套行之有效的办法。\n\n我唯一没算到的是：这一次，被掳的人里，有人会想出一个谁都没想过的解释。',
        en: 'Let me first lay out the accounts for you, to prove my confidence was not groundless.\n\nGo back more than a hundred years, to 722 BCE, when the Assyrian Empire destroyed the northern kingdom — Israel. The method was the same as ours: break the city, carry off the elite, scatter and resettle them. And the result? Those captives of the north really did vanish like that — later ages could not even say where they went, and legend calls them the "lost ten tribes."\n\nYou see, this is the law. A small people carried off by a great empire has only one end: scattered, forgotten, gone.\n\nNow it is the turn of the southern one, Judah, the small kingdom guarding Jerusalem and that Temple. In 586 BCE we broke it, burned the temple, and carried off its people. By the script of the north a hundred years before, the story should end right here.\n\nI had no reason at all to doubt it. In my hand were precedent, the law, and a whole tested method.\n\nThe one thing I did not reckon with was this: this time, among the captives, someone would think up an explanation that no one had ever thought of before.',
      },
      deliverGoal: 'N5 story — 算账证明自信有理 + 前 722 亚述灭北国 Israel (手法同破城掳精英打散迁走) 结果北国被掳者真消失 (「失踪的十支派」) + 这就是规律: 被掳小民族结局只有散掉忘掉没掉 + 轮到南国 Judah (守 Jerusalem 与圣殿) 前 586 攻破烧庙掳人 + 按北国剧本故事该结束 + 手里有先例/规律/办法没理由怀疑 + 唯一没算到: 被掳的人里有人会想出谁都没想过的解释',
      engagementHook: '一百多年前，亚述灭了北边那个王国，被掳的人真就那么消失了——「失踪的十支派」。轮到这个犹大，我有先例、有规律。可这一次，他们里面有人想出了一个我从没听过的解释。',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-conq-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得跟你讲那一夜，烧城那一夜。我记得空气里的味道：烟、热、还有从城里传出来的、各种各样的声音。\n\n有哭喊，有崩塌，有我们士兵的欢呼。在我听来，这就是一支帝国军队凯旋时该有的声音——胜利的声音。每烧塌一处，就是 Marduk 又赢了一城。\n\n这些声音里，也有那座圣殿烧塌时的轰响，有被掳的人被串成一队时低低的、说不出是哭是祷的声音。\n\n但那时我听不出区别。在我耳朵里，那全都是「一个民族正在消失」的背景音，跟我们灭过的几十个小民族没两样。\n\n（这一刻他心里在想什么，史料没逐字记下——但坐在一个胜利军官的位置上，你大概猜得到：他听见的全是凯歌，没有一丝不安。）\n\n我哪里知道，就在那同一片声音里，有人正把这场大火，听成完全相反的另一件事。',
        en: 'I must tell you about that night, the night the city burned. I remember the smell in the air: smoke, heat, and all kinds of sounds coming out of the city.\n\nThere was wailing, there was collapse, there were the cheers of our soldiers. To my ear, this was the sound an imperial army ought to make at its triumph — the sound of victory. Each thing that burned and fell was Marduk winning one more city.\n\nAmong these sounds was the roar of that Temple collapsing in flame, and the low sound — you could not tell if it was weeping or prayer — of the captives being strung into a line.\n\nBut back then I could not tell the sounds apart. In my ears it was all the background noise of "a people vanishing," no different from the dozens of small peoples we had wiped out.\n\n(What he felt in that moment, the record does not write down word for word — but sitting in a victorious officer\'s seat, you can guess: all he heard was a triumphal song, without a trace of unease.)\n\nHow could I have known that in that very same sound, someone was hearing this great fire as something entirely the opposite.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 烧城那一夜从胜利者角度 (烟热+各种声音/哭喊崩塌士兵欢呼 = 帝国凯旋的声音/每烧塌一处 Marduk 又赢一城) + 声音里有圣殿轰响+被掳者低低说不出是哭是祷的声音 + 但他听不出区别 (全是「民族消失」背景音跟灭过的几十个一样) + anti-fab 括号 (他那刻心里史料没逐字记/坐胜利者位置可猜全是凯歌没一丝不安) + 不点破: 同一片声音里有人听成完全相反的另一件事',
      engagementHook: '那一夜的哭喊、崩塌、欢呼，在我耳朵里全是胜利的声音。我哪知道，就在同一片声音里，有人正把这场大火听成完全相反的另一件事。同一个声音，怎么会有两个相反的意思？',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-conq-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '到了巴比伦，我把俘虏交差。接下来的事，本该完全照剧本走。\n\n他们被安置在巴比伦的运河边，分散开住。我们没逼他们当天就改信 Marduk——不必。我们靠的是时间。这座城太大、太富、太壮丽，他们的神又没了庙、没了国。我们只要等。\n\n头几年，看起来一切如常。他们坐在异乡的河边，确实哭，确实想念那座叫锡安（Zion，即耶路撒冷）的城。我见过这种眼泪——这是一个民族认输前的眼泪，跟别的被掳民族一模一样。\n\n我等着下一步：他们的孩子开始说我们的话，他们慢慢不再聚在一起，YHWH 这个名字越来越少被提起。\n\n可奇怪的事，一点点冒出来了。\n\n这些人没有散。他们反而比从前更紧地凑在一起。没有庙可以献祭，他们就一遍遍地讲、一遍遍地念、一遍遍地抄。我那时还没在意——我只觉得，这群输家，怎么还这么倔。',
        en: 'In Babylon I handed the captives over. What came next should have gone entirely by the script.\n\nThey were settled by the canals of Babylon, housed scattered apart. We did not force them to convert to Marduk that very day — no need. We relied on time. This city is too vast, too rich, too magnificent, and their god has lost his temple and his land. We had only to wait.\n\nFor the first few years, everything seemed as usual. They sat by the rivers of a foreign land and did weep, and did long for the city called Zion (that is, Jerusalem). I had seen tears like these — they are the tears of a people before it gives in, exactly like other captive peoples.\n\nI waited for the next step: their children would start to speak our tongue, they would slowly stop gathering, and the name YHWH would be spoken less and less.\n\nBut a strange thing began, little by little, to appear.\n\nThese people did not scatter. Instead they pressed together more tightly than before. With no temple to make offerings at, they told it over and over, recited it over and over, copied it over and over. I paid no mind then — I only thought: how can these losers still be so stubborn.',
      },
      deliverGoal: 'N7 story — 到 Babylon 交差本该照剧本走 + 安置运河边分散住/不必逼改信靠时间 (城太大富壮丽/他们神没庙没国只要等) + 头几年如常 (河边哭/想念 Zion/这是认输前的眼泪跟别的被掳民族一样) + 等下一步 (孩子说我们话/不再聚/YHWH 少被提) + 奇怪事冒出来: 没散反而更紧凑在一起 + 没庙献祭就一遍遍讲念抄 + 胜利者没在意只觉得这群输家怎么这么倔',
      engagementHook: '别的被掳民族两代就散了，这群人却反而凑得更紧——没有庙，就一遍遍地讲、念、抄。我当时只觉得这群输家真倔。你猜，他们在抄什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-conq-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '后来我慢慢拼出了那个解释——那个让我整套常识失灵的解释。\n\n你以为被掳的人会说「我们的神输了」。他们偏不。他们说出了一个我做梦也想不到的版本：\n\n不是 YHWH 弱，是我们自己违约在先。是我们没守住跟神的约（covenant，他们叫 brit），神才借巴比伦的手，来惩罚自己的子民。换句话说——我们巴比伦，根本不是赢家，我们只是 YHWH 手里的一根鞭子。\n\n更狠的还在后面。他们说：YHWH 不只是我们这一族的神，他是全世界唯一的神，连巴比伦、连 Marduk、连尼布甲尼撒，统统在他手底下。\n\n你品品这一手有多绝：我烧了他们的庙、掳了他们的人，本想证明他们的神输了。结果他们反手把这场惨败，解释成了「我们的神大到连胜利者都是他的工具」的证据。\n\n我赢了城，赢了庙，赢了人。可在他们这套解释里，我连他们的神，都没碰着一根毫毛。',
        en: 'Later I slowly pieced together that explanation — the one that made my whole common sense fail.\n\nYou would think the captives would say "our god lost." They would not. They spoke a version I could not have dreamed of:\n\nIt is not that YHWH is weak; it is that we broke our side first. We failed to keep our covenant with our god (they call it brit), and so our god used Babylon\'s hand to punish his own people. In other words — we Babylonians are not the winners at all; we are only a whip in YHWH\'s hand.\n\nThe sharper part comes after. They said: YHWH is not the god of our people alone; he is the one and only god of the whole world, and Babylon, and Marduk, and Nebuchadnezzar, are all under him.\n\nWeigh how brilliant this move is: I burned their temple and carried off their people, meaning to prove their god had lost. Instead they turned this crushing defeat into proof that "our god is so great that even the victor is his tool."\n\nI won the city, won the temple, won the people. Yet in this explanation of theirs, I never so much as touched a single hair of their god.',
      },
      deliverGoal: 'N8 story (核心思想锻造) — 慢慢拼出那个让常识失灵的解释 + 不说神输了 (偏不) + 反转版本: 不是 YHWH 弱是我们违约在先/没守住 covenant·brit/神借巴比伦的手惩罚子民 → 巴比伦不是赢家只是 YHWH 手里一根鞭子 + 更狠: YHWH 不只本族神是全世界唯一神/Babylon·Marduk·Nebuchadnezzar 统统在他底下 + 这一手多绝 (我烧庙掳人想证明他们神输/他们反手把惨败解释成「我们神大到连胜利者都是工具」) + 我赢城庙人却连他们的神都没碰着一根毫毛',
      engagementHook: '我烧了庙、掳了人，本想证明他们的神输了。他们却反手把这场惨败，解释成「我们的神大到连胜利者都只是他手里的一根鞭子」。这一招，你觉得是认输，还是反杀？',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-conq-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，给你看一张更大的地图。\n\n前 539 年，新的主人来了——波斯王居鲁士（Cyrus）灭了我们巴比伦。前 538 年，他下了一道命令：允许被我们掳来的各民族返乡，重建自己的神庙。\n\n犹大人也在放归之列。一部分人回了耶路撒冷，重建了第二圣殿（Second Temple）。注意一个清坑的细节：居鲁士那道命令，是面向所有被征服民族的普遍政策——他在自己的圆柱铭文（Cyrus Cylinder）里，并没有单独点名犹大。可犹大人从自己的信仰框架里，把这桩事读成了「我们的神在掌权、连波斯王都听他调遣」。\n\n同一桩放归，我们帝国看是一套安抚各族的统治术，他们看是神的手在历史里推动。两个框架，都真实，不矛盾。\n\n站在我这个早已成了输家的位置回头看：我以为我在书写一个民族的结局。其实我亲手帮他们，写下了一种全新信仰的起点。\n\n（顺一句更大的对照：就在同代，地球另一端的中国靠的是另一套——「天命」加祖先，靠德行获得天授的统治权、靠血脉敬祖先连接超越者，而不靠跟唯一神立约。两套答案没有高下，是人类对「如何安身」给出的两种深刻回答。）',
        en: 'Let me step back and show you a larger map.\n\nIn 539 BCE a new master came — the Persian king Cyrus destroyed our Babylon. In 538 BCE he gave an order: the various peoples we had carried off were permitted to return home and rebuild their own temples.\n\nThe Judahites were among those released. Some returned to Jerusalem and rebuilt the Second Temple. Note one detail that clears a pit: that order of Cyrus was a general policy toward all conquered peoples — in his own inscription, the Cyrus Cylinder, he did not single out Judah by name. Yet the Judahites, from within their own framework of faith, read this thing as "our god is in command, and even the Persian king moves at his bidding."\n\nThe same release: our empire sees a statecraft of soothing all the peoples; they see the hand of their god pushing through history. Two frameworks, both true, not in conflict.\n\nStanding where I am, long since the loser, and looking back: I thought I was writing the ending of a people. In truth, with my own hands, I helped them write the beginning of an entirely new faith.\n\n(One larger comparison in passing: in the very same era, on the other side of the earth, China rested on a different answer — the "Mandate of Heaven" plus ancestors: rule granted by Heaven through virtue, and a link to the transcendent through the bloodline of honoring ancestors, rather than through a covenant with a single god. Neither answer is higher or lower; they are two profound human answers to "how to find a place in the world.")',
      },
      deliverGoal: 'N9 zoom-out — 前 539 Cyrus 灭巴比伦/前 538 命令允许各族返乡重建神庙 + 犹大人在放归之列 (回 Jerusalem 重建 Second Temple) + 清坑细节: Cyrus 命令是面向所有被征服民族的普遍政策/Cyrus Cylinder 没单独点名 Judah/但犹大人从信仰框架读成「我们神掌权连波斯王都听调遣」+ 同一桩放归: 帝国看是安抚各族统治术 vs 他们看是神的手推历史/两框架都真实不矛盾 + 胜利者回看: 我以为在写一个民族的结局其实帮他们写下全新信仰的起点',
      engagementHook: '同一桩「放归」，我们帝国看是安抚各族的统治术，他们看是神的手在推历史——两个框架都真实，不矛盾。我以为我在写一个民族的结局，结果帮他们写下了一种新信仰的起点。',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-conq-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一段，该怎么评我这个胜利者？两种说法都站得住，你来称。\n\n一种说法：我做的，是那个时代任何一个帝国军官都会做、也都认为天经地义的事。征服、烧庙、掳人，是当时古近东战争的通行规则，不是我个人的残忍。把一个民族的苦难，单算到我一个执行命令的军官头上，是不是太轻巧？我甚至无意中，成了他们信仰升级的助产士。\n\n另一种说法：「我只是执行规则」恰恰是最值得警惕的话。我烧的不是一座空庙，是无数个具体的人的家、城、亲人。被掳河边那些眼泪是真的，那座城被烧是真的。我从头到尾，没把对面那群人，当成会痛、会想、会自己解释命运的「人」——我只把他们当成又一个该消失的名单条目。\n\n这两边不是「他有错但情有可原」。是同一个我的两面——一个被时代规则裹着走的执行者，和一架碾过无数具体人命才能运转的帝国机器。\n\n两边都站得住。想 30 秒，写下来。',
        en: 'Having walked my stretch, how should I, the victor, be judged? Both views stand. You do the weighing.\n\nOne view: what I did, any imperial officer of that age would have done and thought entirely right. Conquest, burning temples, carrying people off — these were the common rules of war in the ancient Near East then, not my personal cruelty. To charge the suffering of a whole people to me alone, an officer following orders, is that not too easy? I even became, without meaning to, the midwife of their faith\'s upgrade.\n\nThe other view: "I only followed the rules" is exactly the sentence most worth fearing. What I burned was not an empty temple but the homes, the city, the loved ones of countless particular people. The tears by the river were real; the burning of that city was real. From start to finish, I never counted the people across from me as "people" who feel pain, think, and explain their own fate — I counted them only as one more entry on a list that ought to disappear.\n\nThese are not "he was wrong but understandable." They are two faces of the same me — an executor carried along by the rules of his age, and an imperial machine that can only run by crushing countless real, individual people.\n\nBoth sides stand. Take thirty seconds, and write it down.',
      },
      deliverGoal: 'N10 synthesis — 怎么评胜利者两说法 / 一种说法 (任何帝国军官都会做也认天经地义/征服烧庙掳人是当时通行规则非个人残忍/单算到执行命令的军官头上太轻巧/甚至无意成了信仰升级助产士) / 另一种说法 (「我只是执行规则」最值得警惕/烧的不是空庙是无数具体人的家城亲人/河边眼泪真城被烧真/从没把对面当会痛会想会解释命运的人只当名单条目) / 同一个我两面 (被规则裹走的执行者 + 碾过人命才能运转的帝国机器) / neutral school (AP 老师) / 想 30 秒两边都站得住',
      engagementHook: '执行规则的普通军官，和碾过无数人命的帝国机器——是同一个我。「我只是在执行那个时代的规则」，能不能算无罪？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'ancient-israel-conq-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '你刚才听的，是胜利者这一边的声音。\n\n请记住：这只是一边。我讲的「神与神较量」「我只是执行规则」「又一个该消失的民族」，听起来甚至顺理成章——这正是胜利者视角最该警惕的地方，它能把一切讲得理所当然，连一场灭族都讲得云淡风轻。\n\n但这一遍里，有两群人几乎没开口。一群是站在废墟上的先知（prophet，希伯来语 navi）——比如耶利米、以西结。在所有人都以为「神输了」的时候，他们偏要替神说话，把这场灾难解释成神的公义，而不是神的失败。他们凭什么这么笃定？\n\n另一群，是巴比伦河边那个失去了一切、连名字都没在历史里留下的年轻人。我口中「又一个该消失的民族」，落到他身上，是一个个具体的夜晚、具体的眼泪、具体的抉择。他会怎么讲我轻描淡写的这一夜？\n\n最后留一个东西给你。还记得烧城那夜，我耳朵里那一片「胜利的声音」吗？换一个视角再走一遍，你会从另一个人的耳朵里，再听见它一次——到那时，它对你就不再是凯歌了。',
        en: 'What you just heard was the voice of one side — the victor\'s.\n\nRemember: it is only one side. My talk of "god against god," of "I only followed the rules," of "one more people that ought to disappear," can even sound perfectly natural — and that is exactly what to fear most about a victor\'s view. It can make everything sound a matter of course, can tell even the wiping-out of a people lightly.\n\nBut in this pass, two groups of people barely spoke. One group is the prophets standing on the ruins (prophet, navi in Hebrew) — such as Jeremiah and Ezekiel. When everyone thought "the god has lost," they insisted on speaking for that god, and explained this disaster as the god\'s justice rather than the god\'s defeat. On what ground were they so certain?\n\nThe other group is the young man by the rivers of Babylon who lost everything and left not even a name in history. My "one more people that ought to disappear," when it lands on him, is one particular night after another, particular tears, particular choices. How would he tell this night that I have spoken of so lightly?\n\nAnd one last thing to leave with you. Do you remember the "sound of victory" in my ears the night the city burned? Walk this through once more from another perspective, and you will hear it again through someone else\'s ears — and by then, it will no longer be a triumphal song to you.',
      },
      deliverGoal: 'N11 close/meta — 你听的是胜利者一边 (能把一切讲得理所当然连灭族都云淡风轻最该警惕) + 还没听到两群人: ① 废墟上的先知 prophet·navi (Jeremiah/Ezekiel/所有人以为神输时偏替神说话把灾难解释成神的公义非失败/凭什么这么笃定) ② 巴比伦河边失去一切连名字都没留下的年轻人 (「又一个该消失的民族」落他身上是具体夜晚眼泪抉择/会怎么讲我轻描淡写这一夜) + 暗示烧城那夜「胜利的声音」会从另一视角再听见一次 (不直接解释)',
      engagementHook: '胜利者最该警惕的地方，是他能把一切讲得理所当然，连灭族都云淡风轻。你听完我这一边，最想去问那个废墟上的先知、那个河边失去一切的年轻人什么？',
      expectsRealAnswer: true,
    },
  ],
};

export var prophetLens = {
  id: 'prophet-mediator',
  name: 'The Prophet',
  nameCn: '废墟上的先知',
  role: 'lonely-mediator',
  perspectiveTag: 'between-defeat-and-meaning',
  icon: '📜',
  description: {
    cn: '真实历史脉络中的人物类型，耶利米（Jeremiah，约前 7 世纪末至前 6 世纪初，亲历耶路撒冷陷落）与以西结（Ezekiel，被掳巴比伦、在流亡群体中传讲）这一脉的先知（prophet，希伯来语 navi）。先知不是「算命的」，而是危机时刻替神说话、解释历史意义的人。他站在一个极孤独的位置：一边是巴比伦的刀，一边是绝望到要放弃信仰的同胞。这一遍让你站在所有人中间，看一个人如何在国破家亡的废墟上，回答一个几乎无法回答的问题，如果神是真的、又是大能的，为什么他的子民会输得这么惨。',
    en: 'A type of figure within the real historical line - the prophets (prophet, navi in Hebrew) in the vein of Jeremiah (late seventh to early sixth century BCE, who lived through the fall of Jerusalem) and Ezekiel (carried to Babylon, who preached among the exiles). A prophet is not a "fortune teller" but one who speaks for the god in a crisis and explains the meaning of history. He stands in an intensely lonely place: on one side, Babylon\'s blade; on the other, countrymen so despairing they are ready to abandon their faith. This pass puts you in the middle of everyone, watching one person answer, on the ruins of a fallen nation, a nearly unanswerable question - if the god is real and mighty, why did his people lose so badly.',
  },
  storyboard: [
    {
      id: 'ancient-israel-prophet-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '所有人都在问「神是不是输了」的时候，有一个人站出来，说了句几乎没人敢信的话：不，这恰恰证明神是对的。\n\n那个人，可能是我。我是一名先知（prophet，希伯来语 navi）。\n\n先把一个误会跟你说清：先知不是算命的，不是预测明天天气、预测谁会赢的人。先知，是在危机时刻替神说话、替一整个民族解释「这一切到底意味着什么」的人。\n\n我活在历史上最难当先知的时候：前 6 世纪初，耶路撒冷被巴比伦攻破、圣殿被烧、人被掳走。我的同胞，正一个个绝望地想：完了，我们的神输给了 Marduk，我们该跪下来拜巴比伦的神了。\n\n这一遍，你坐进我这个位置。你站在所有人中间，谁都靠不住：一边是巴比伦的刀，一边是绝望到要放弃的自己人。你要在一片废墟上，回答一个几乎无法回答的问题。',
        en: 'When everyone was asking "did our god lose," one person stood up and said a thing almost no one dared believe: no, this is exactly the proof that our god is right.\n\nThat person may be me. I am a prophet (prophet, navi in Hebrew).\n\nLet me first clear up a misunderstanding: a prophet is not a fortune teller, not one who predicts tomorrow\'s weather or who will win. A prophet is one who speaks for the god in a crisis, and explains for a whole people "what all of this actually means."\n\nI live in the hardest time there ever was to be a prophet: the early sixth century BCE, when Jerusalem was broken by Babylon, the Temple burned, the people carried off. My countrymen, one by one, despair and think: it is over, our god has lost to Marduk, we should kneel and worship the gods of Babylon.\n\nThis pass puts you in my seat. You stand in the middle of everyone, with no one to rely on: on one side Babylon\'s blade, on the other your own despairing people. On a field of ruins, you must answer a nearly unanswerable question.',
      },
      deliverGoal: 'N1 hook — 所有人问「神是不是输了」时有人说「这恰恰证明神是对的」+ 我是先知 prophet·navi + 清误会 (先知不是算命的/是危机时刻替神说话替民族解释「这一切意味着什么」的人) + 最难当先知的时候 (前 6 世纪初 Jerusalem 被破/圣殿烧/人被掳/同胞绝望想我们神输给 Marduk 该跪拜) + 这一遍视角 (站所有人中间谁都靠不住/一边巴比伦刀一边绝望同胞/废墟上回答几乎无法回答的问题)',
      engagementHook: '所有人都觉得「我们的神输了」，只有先知敢说「这恰恰证明神是对的」。在一片废墟上替神说话——这需要的是疯狂，还是另一种勇气？',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-prophet-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '要懂我后来那句话有多惊人，得先懂当时所有人脑子里默认的「常识」。\n\n这片土地叫 Levant（黎凡特）/ Canaan（迦南），是地中海东岸一条窄走廊，南挨埃及，东北靠亚述、巴比伦。我们这个小王国犹大（Judah），千百年来就夹在大帝国中间，被争来夺去。\n\n在整个古近东，所有人都信同一套逻辑：每个民族有自己的神，神护着自己的族；打仗就是神跟神比力气，谁的族赢了，就是谁的神强。\n\n按这套逻辑，前 586 年的结局清清楚楚：圣殿烧了、城破了、人被掳了——意思就是 YHWH 输了，Marduk 赢了。我们这个民族，该像周围几十个被吞掉的小族一样，认命、散掉、消失。\n\n这就是我面对的处境：不是一个敌人，而是一整套「我们的神输了」的常识，正压在每一个绝望的同胞心上。我要对抗的，是所有人都觉得理所当然的那个结论。',
        en: 'To understand how astonishing my later words were, you must first understand the "common sense" everyone took for granted then.\n\nThis land is called the Levant or Canaan, a narrow corridor on the eastern coast of the Mediterranean, Egypt to the south, Assyria and Babylon to the northeast. Our small kingdom of Judah, for ages, was wedged among great empires and fought over.\n\nAcross the whole ancient Near East, everyone believed one logic: each people has its own god, and the god guards its own people; war is gods testing strength against gods, and whichever people wins has the stronger god.\n\nBy this logic, the ending in 586 BCE was perfectly clear: the Temple burned, the city broken, the people carried off — meaning YHWH (say it YAH-weh, the god of Israel) had lost and Marduk had won. Our people should, like the dozens of small peoples swallowed around us, accept their fate, scatter, and vanish.\n\nThis was the situation I faced: not one enemy, but a whole common sense of "our god has lost" pressing on the heart of every despairing countryman. What I had to fight was the conclusion that everyone found a matter of course.',
      },
      deliverGoal: 'N2 setup — 懂那句话多惊人先懂当时默认常识 + Levant/Canaan 走廊地理 (地中海东岸窄走廊/南挨埃及东北靠亚述巴比伦/小王国 Judah 夹大帝国间被争夺) + 古近东通行逻辑 (每族有自己的神护自己族/打仗=神比力气谁族赢谁神强) + 按此前 586 结局清楚 (圣殿烧城破人掳 = YHWH 输 Marduk 赢/该像周围几十个小族认命散掉消失) + 我面对的不是一个敌人是一整套「神输了」常识压在每个绝望同胞心上/要对抗所有人觉得理所当然的结论',
      engagementHook: '当时所有人都信一套铁律：打仗就是神比力气，输了就是你的神弱。我要对抗的，不是一个敌人，是所有人脑子里那条理所当然的铁律。挑战「所有人都觉得对」的事，有多难？',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-prophet-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '我还得诚实地告诉你一件事：这场灾难，连我们自己内部，都有好几种相反的解读在打架。我不是站出来就有现成答案的。\n\n有人说：神真的输了，识时务点，改拜 Marduk 吧，活下去要紧。\n\n有人说：神在生气，是因为我们对他不够虔诚、献祭不够多——再加把劲讨好他，他就会回来救我们、让我们打回去。\n\n还有像我这样的先知，给出第三种、也是最难接受的解读。\n\n而且你得知道，先知里面，从来也不是一个声音。我之前，就有过被当权者关押、追打、扔进枯井里的先知——因为他们说的话太刺耳，专戳国王和权贵的痛处。当先知，从来不是个安全、体面的差事。\n\n（这一段，是这堂课替你把当时几种声音并排摆出来；史料不会逐字记下每个普通人心里怎么想，但这几股力量，确实在那片废墟上互相拉扯。）\n\n我要在这一堆相反的声音里，说出那句最不讨好、却可能最救人的话。',
        en: 'I must also tell you honestly: over this disaster, even among ourselves, several opposite readings were fighting. I did not step forward with a ready answer.\n\nSome said: our god truly lost; be sensible, turn to Marduk, survival comes first.\n\nSome said: our god is angry because we were not devout enough, our offerings too few — try harder to please him, and he will come back to save us and let us strike back.\n\nAnd prophets like me gave a third reading, the hardest to accept.\n\nAnd you should know, among prophets there was never one voice either. Before me, there were prophets imprisoned, beaten, thrown into a dry well by those in power — because what they said was too harsh, jabbing straight at the sore spots of kings and nobles. To be a prophet was never a safe or respectable post.\n\n(Here this lesson lays the several voices of the time side by side for you; the record does not write down word for word what each ordinary person thought, but these forces did pull at one another on that field of ruins.)\n\nAmong this heap of opposite voices, I had to speak the least pleasing line that might, all the same, save the most people.',
      },
      deliverGoal: 'N3 setup — 诚实: 灾难连内部都有好几种相反解读打架/我不是有现成答案 + 三种声音 (① 神真输了改拜 Marduk 活下去 ② 神生气因献祭不够再讨好他他就回来救我们 ③ 先知第三种最难接受的解读) + 先知里也从不是一个声音/我之前有被关押追打扔枯井的先知 (话太刺耳戳国王权贵) 当先知非安全体面差事 + anti-fab 括号 (lens 替你并排摆几种声音/史料不逐字记普通人怎么想/但这几股力量确在废墟上互相拉扯) + 我要在相反声音里说最不讨好却最救人的话',
      engagementHook: '同一场灾难，我们自己内部就有好几种相反的解读在打架，没有现成答案。当一件大事发生，每个人都有自己的解释——你怎么判断哪一种最接近真相？',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-prophet-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你站在被烧过的城边，或者站在巴比伦的河边，面前是一群眼里没了光的同胞。他们等你开口。你知道，你接下来说的话，会决定这个民族是散掉，还是活下去。\n\n最容易、最讨好的话是：「再忍忍，神很快会回来，把巴比伦人赶走，我们就能回家。」说这个，大家会爱听。\n\n但你不能说。因为你心里清楚，这不是真的，而且它经不起下一次失望——等神没「很快回来」，人就会彻底崩溃。\n\n你要说的，是一句逆着所有人耳朵的话：神没有输。这场灾难，不是神的失败，是神在管教我们——是我们先违了约，神才用巴比伦来惩罚自己的子民。\n\n你听见自己说出这句话有多冒险吗？你等于在对一群刚失去一切的人说：错的不是神，是我们。\n\n你愿意做那个不说漂亮安慰话、偏要说出最扎心、却可能真正救人的解释的人吗？',
        en: 'Now you are me.\n\nYou stand by the burned city, or by the rivers of Babylon, before a crowd of countrymen whose eyes have lost their light. They wait for you to speak. You know that what you say next will decide whether this people scatters or lives on.\n\nThe easiest, most pleasing thing to say is: "Hold on a little longer, our god will soon return, drive out the Babylonians, and we will go home." Say that, and everyone will love to hear it.\n\nBut you cannot say it. Because you know in your heart it is not true, and it cannot survive the next disappointment — when the god does not "soon return," the people will collapse completely.\n\nWhat you must say is a line that goes against everyone\'s ears: our god has not lost. This disaster is not the god\'s defeat; it is the god disciplining us — we broke the covenant first, and only then did the god use Babylon to punish his own people.\n\nDo you hear how risky it is to say this? You are telling a crowd that has just lost everything: it is not the god who is wrong, it is us.\n\nAre you willing to be the one who does not give pretty comfort, but insists on the most cutting explanation that might truly save people?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 你站烧过的城边/巴比伦河边面前眼里没光的同胞等你开口 + 你的话决定民族散掉还是活下去 + 最容易讨好的话「再忍神很快回来赶走巴比伦回家」大家爱听 + 但不能说 (不真/经不起下一次失望/神没很快回来人就崩溃) + 你要说逆耳的话: 神没输/这是神在管教我们/我们先违约神才用巴比伦惩罚子民 + 多冒险 (对刚失去一切的人说错的不是神是我们) + 你愿不愿做不说漂亮安慰偏说最扎心却可能救人的解释的人',
      engagementHook: '面前是一群刚失去一切的人。最讨好的话是「神很快会来救我们」——但你偏要说「错的不是神，是我们」。说一句没人爱听、却可能真救人的话，你说得出口吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-prophet-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '光说「是我们错了」还不够。我还得补上更关键的一步，否则这套解释撑不住。\n\n你想，如果只说「神在惩罚我们」，人会立刻反问：那神既然这么大能，为什么管不住巴比伦？是不是巴比伦的 Marduk 比我们的神还强？\n\n所以我必须把话说到底——说出那句真正惊人的：YHWH 不只是我们犹大一族的神。他是创造并掌管整个世界的、唯一的神。巴比伦也好，Marduk 也好，尼布甲尼撒也好，统统在他手底下。他不是被巴比伦打败了，是他亲手拿巴比伦当鞭子，来抽自己不听话的孩子。\n\n你品一下这一步有多大：在我之前，「我们只拜自己这一族的神」（学者叫 monolatry，单拜一神）是常态——但那默认别的民族也有别的真神。我现在要往前推一大步，推向「天下根本只有一个神」（monotheism，唯一一神）。\n\n这一步，不是天上掉下来的。它是在最惨的失败里，被逼着、一步步想出来的。我们的神被逼得越大，我们这个民族就活得越稳。',
        en: 'Saying "we were wrong" is not enough. I have to add a more crucial step, or the whole explanation will not hold.\n\nThink: if I only say "the god is punishing us," people will at once ask back — if the god is so mighty, why can he not control Babylon? Is Babylon\'s Marduk stronger than our god after all?\n\nSo I must take the words all the way — say the truly astonishing thing: YHWH is not the god of our people of Judah alone. He is the one and only god who created and governs the whole world. Babylon, Marduk, Nebuchadnezzar — all are under his hand. YHWH was not defeated by Babylon; YHWH himself took Babylon as a whip to strike his own disobedient children.\n\nWeigh how large this step is: before me, "we worship the god of our own people alone" (scholars call it monolatry, the worship of one god) was the norm — but it assumed other peoples had other real gods too. Now I had to push a great step forward, toward "there is only one god in all the world" (monotheism, a single god).\n\nThis step did not fall from the sky. It was thought out, step by step, under duress, in the worst of defeats. The larger our god was pushed to be, the more steadily our people lived on.',
      },
      deliverGoal: 'N5 story (核心思想锻造) — 光说「是我们错」不够否则撑不住 + 人会反问神既大能为何管不住巴比伦/是不是 Marduk 更强 + 必须把话说到底说出真正惊人的: YHWH 不只 Judah 一族的神/是创造掌管整个世界的唯一神/Babylon·Marduk·Nebuchadnezzar 统统在他底下/不是被打败是他拿巴比伦当鞭子抽自己孩子 + 这一步多大: 我之前 monolatry 单拜一神是常态 (但默认别族也有真神)/现在往前推向 monotheism 唯一一神「天下只有一个神」+ 不是天上掉的是最惨失败里被逼一步步想出来 + 神被逼得越大民族活得越稳',
      engagementHook: '如果我只说「神在罚我们」，人会反问：那神为什么管不住巴比伦？所以我被逼着往前推一大步——从「我们只拜自己的神」，推到「天下根本只有一个神」。一个想法，竟是被最惨的失败逼出来的。',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-prophet-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '回到耶路撒冷被烧的那一夜。我想让你听见，那一夜在我这边，是什么。\n\n巴比伦的军官听见城里的哭喊、崩塌、欢呼，听见的是一支帝国军队凯旋的声音。同样这片声音，落在我耳朵里，是另一回事。\n\n（这一刻我心里到底怎么想，史料没有逐字记下。但坐在一个先知的位置上，你大概能体会。）\n\n我听见的，不是「我们的神输了」的声音。我听见的，是一个我必须立刻回答的问题，从废墟里、从每一声哭里冒出来：神，你在哪里？这一切，到底是什么意思？\n\n那一夜对我，不是终点，是我这辈子最重的一次「替神说话」的时刻。我得在火光里，当场把这场灾难，从「神的失败」翻译成「神的公义」。\n\n烧城的人听见的是凯歌；绝望的同胞听见的是末日；而我，听见的是神在这一刻，把替他说话、解释这一切的担子，压到了我肩上。\n\n同一片声音，三个人，三个完全不同的世界。',
        en: 'Back to the night Jerusalem burned. I want you to hear what that night was, on my side.\n\nThe Babylonian officer heard the wailing, the collapse, the cheers in the city, and heard the sound of an imperial army\'s triumph. That same sound, falling on my ear, was another thing.\n\n(What I felt in that moment, the record does not write down word for word. But sitting in a prophet\'s seat, you can roughly feel it.)\n\nWhat I heard was not the sound of "our god has lost." What I heard was a question I had to answer at once, rising from the ruins, from every cry: god, where are you? What does all of this mean?\n\nThat night, for me, was not an ending. It was the heaviest moment of "speaking for the god" in my whole life. In the firelight, on the spot, I had to translate this disaster from "the god\'s defeat" into "the god\'s justice."\n\nThe one who burned the city heard a triumphal song; my despairing countrymen heard the end of the world; and I heard the god, in that moment, lay onto my shoulders the burden of speaking for him and explaining all of this.\n\nThe same sound, three people, three entirely different worlds.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 耶路撒冷被烧那夜从先知角度 + 巴比伦军官听城里哭喊崩塌欢呼=帝国凯旋声/同片声音落我耳朵是另一回事 + anti-fab 括号 (我那刻怎么想史料没逐字记/坐先知位置可体会) + 我听见的不是「神输了」是一个必须立刻回答的问题从废墟从每声哭冒出: 神你在哪/这一切什么意思 + 那夜不是终点是我最重一次「替神说话」的时刻/火光里当场把灾难从「神的失败」翻译成「神的公义」+ 三人三世界 (烧城人听凯歌/绝望同胞听末日/我听神把解释的担子压我肩上) — 不点破另两 lens 内文',
      engagementHook: '同一片哭喊崩塌的声音：烧城的人听见凯歌，绝望的同胞听见末日，而我听见的是「神，你在哪里」。同一个声音，三个人，三个完全不同的世界。你听见的，会是哪一个？',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-prophet-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我的解释要真能救人，还得解决一个最现实的难题：没有圣殿了，怎么继续信？\n\n过去，我们这个民族的信仰中心，是耶路撒冷那一座圣殿。所有的献祭、节庆、和神最隆重的相会，都在那里。现在庙烧了，我们又被掳到千里之外的巴比伦——按老办法，没了庙，信仰就该断了。\n\n所以我（尤其是被掳到巴比伦的以西结一脉）宣告了一件关键的事：神不被任何一座圣殿、任何一块国土困住。他在耶路撒冷在，他在巴比伦的河边一样在。\n\n这一步，悄悄改变了一切。既然神不困在庙里，那信仰的重心，就从「在庙里献祭」转向了「随时随地诵读、记诵、抄写神的话和律法（Torah）」。\n\n你看出这一步有多深远了吗？我们等于发明了一种不靠庙、不靠国土，只靠一卷经书和一个共同体就能存活的信仰。许多学者把这看作后世「书的宗教」的雏形——犹太教、基督教、伊斯兰教后来都极重经典，源头就在这片废墟上。',
        en: 'For my explanation to truly save people, it had to solve one most practical problem: with no Temple left, how do we go on believing?\n\nIn the past, the center of our people\'s faith was that one Temple in Jerusalem. All the offerings, the festivals, the most solemn meetings with the god, were there. Now the temple is burned, and we are carried off a thousand miles to Babylon — by the old way, with no temple, the faith should break.\n\nSo I (especially the line of Ezekiel, carried to Babylon) proclaimed a crucial thing: the god is not trapped by any temple, any land. He is present in Jerusalem; he is just as present by the rivers of Babylon.\n\nThis step quietly changed everything. Since the god is not trapped in a temple, the center of the faith shifted from "making offerings in the temple" to "reciting, memorizing, and copying the god\'s words and law (Torah) anytime, anywhere."\n\nDo you see how far-reaching this step is? We had, in effect, invented a faith that could survive without a temple and without a land, on a scroll and a community alone. Many scholars see this as the seed of the later "religion of the book" — Judaism, Christianity, and Islam all came to prize their scriptures greatly, and the source is on this field of ruins.',
      },
      deliverGoal: 'N7 story — 解释要真救人还得解决最现实难题: 没圣殿了怎么继续信 + 过去信仰中心是 Jerusalem 那一座圣殿 (献祭节庆与神最隆重相会都在那)/现庙烧又被掳千里/按老办法没庙信仰该断 + 我 (尤其被掳到巴比伦的 Ezekiel 一脉) 宣告关键: 神不被任何圣殿任何国土困住/在 Jerusalem 在在巴比伦河边一样在 + 这步悄悄改变一切: 信仰重心从「庙里献祭」转向「随时随地诵读记诵抄写神的话和律法 Torah」+ 多深远: 发明了不靠庙不靠国土只靠一卷经书+一个共同体就能存活的信仰 + 许多学者看作「书的宗教」雏形 (犹太教/基督教/伊斯兰教后来都极重经典源头在这片废墟)',
      engagementHook: '没了庙，信仰按老办法就该断了。我却宣告：神不困在任何一座庙里——他在巴比伦的河边一样在。于是信仰的重心，从「在庙里献祭」变成了「随身带着一卷经书」。一种不靠国土也能活的信仰，就这么诞生了。',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-prophet-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我得给你看一个更长的镜头：一神教这个东西，不是我一个人、一夜之间想出来的。它是好几代人、一步步锻造出来的。\n\n往前看：早在我之前一百多年，南国就有过几位国王推动「净化」运动。最有名的是约西亚（Josiah），约前 622 年，他在修缮圣殿时「发现」了一卷律法书（多数学者认为就是《申命记》核心），据此大力推行——只拜 YHWH 一个神、只在耶路撒冷一处献祭，拆掉地方上拜别神（如 Baal、Asherah）的祭坛。\n\n这是关键的一环：在我们被掳之前，「集中只拜一神」的种子，就已经在政治和宗教改革里被种下了。\n\n再往后看：我们在巴比伦把信仰推向彻底的一神论，又把口耳相传的古老传统，开始系统地编订、写定。学界普遍认为，《妥拉》（Torah）的核心，正是在流亡到波斯这段时期最终成形的。\n\n所以你要记住一句最重要的史学认知：一神教不是天上掉下来的现成礼物，是人在几百年的危机、改革、流亡里，一锤一锤打出来的。\n\n（顺一句对照：就在同代，地球另一端的中国走了完全不同的一条路——他们靠「天命」加祖先，靠德行换天授的统治权、靠血脉敬祖先连接超越者，而不是靠跟一个唯一神立约。没有谁高谁低，是两种深刻的答案。）',
        en: 'I must show you a longer shot: this thing, monotheism, was not thought up by me alone in a single night. It was forged, step by step, over several generations.\n\nLook back: more than a hundred years before me, the southern kingdom had several kings who pushed "purification" movements. The most famous was Josiah, who around 622 BCE, while repairing the Temple, "found" a scroll of law (most scholars think it was the core of Deuteronomy), and on that basis pushed hard — worship YHWH alone, make offerings only at the one place in Jerusalem, and tear down the local altars to other gods (such as Baal and Asherah).\n\nThis was a key link: before our exile, the seed of "concentrate worship on one god" had already been planted in political and religious reform.\n\nLook ahead: in Babylon we pushed the faith toward thorough monotheism, and began to compile and write down, systematically, the old traditions once passed mouth to mouth. Scholars broadly hold that the core of the Torah took its final shape precisely in this stretch from exile to the Persian period.\n\nSo remember one most important piece of historical understanding: monotheism was not a ready-made gift fallen from the sky. It was hammered out, blow by blow, by people across centuries of crisis, reform, and exile.\n\n(One comparison in passing: in the very same era, on the other side of the earth, China walked an entirely different road — it rested on the "Mandate of Heaven" plus ancestors, rule earned from Heaven through virtue and a link to the transcendent through the bloodline of honoring ancestors, rather than a covenant with a single god. Neither is higher or lower; they are two profound answers.)',
      },
      deliverGoal: 'N8 story (演变链 = AP「change over time」) — 更长镜头: 一神教不是我一人一夜想出/是好几代人一步步锻造 + 往前: 我之前一百多年南国几位国王推「净化」/最有名 Josiah 约前 622 修缮圣殿「发现」律法书 (多数学者认为《申命记》核心)/据此推只拜 YHWH 一神+只在 Jerusalem 一处献祭+拆别神 Baal·Asherah 祭坛 + 关键一环: 被掳前「集中只拜一神」种子已在政治宗教改革种下 + 往后: 巴比伦推彻底一神论+开始系统编订写定古老传统/学界普遍认为《妥拉》Torah 核心在流亡到波斯时期最终成形 + 最重要史学认知: 一神教不是天上掉的现成礼物是人在几百年危机改革流亡里一锤一锤打出来的',
      engagementHook: '一神教不是某一天、某一个人想出来的——约前 622 年约西亚修庙时「发现」一卷律法书，往前推了一大步；又过一百多年，流亡里才真正打到底。一个改变了世界的观念，竟是几百年一锤一锤敲出来的。',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-prophet-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我还得对你诚实：关于我口中这些事，今天的历史学家，吵得很凶。我把这些争论原样交给你，不替你下结论。\n\n比如，传统叙事里有出埃及（Exodus，神领以色列人出埃及为奴之地）、有西奈山立约（神在 Sinai 降下律法）。这些故事的力量是真实而巨大的——它们塑造了我们这个民族对「我们是谁」的全部理解。但学术读法提醒：这两件事目前缺乏直接考古证据，多数学者把它们看作后世写定、用来奠定民族认同的核心叙事，而不是已被证实「逐字发生过」。\n\n再比如，大卫（David）、所罗门（Solomon）那个传说中辉煌的统一王国，到底有多大多强，是考古学界一场著名的、至今没完的争论。这里要分清「文本声称」和「实物证据」：约前 9 世纪的 Tel Dan 石碑提到「大卫之家」，多数学者据此接受大卫王朝真实存在，争的只是王国规模；而「Israel」这个名字最早的硬证据，是约前 1208 年埃及的 Merneptah 石碑。\n\n这一段，我不是要你信哪一边。我是要你看见两种读法可以并排站着：① 信仰传统内部，把这些当作神亲口的启示；② 学术-考古，问这些文本何时写成、考古能证实什么、不能证实什么。\n\n两种读法分层并列，不互相否定。至于神到底存不存在、哪种读法是「真」的——这门课不替你回答，那是你自己的事。',
        en: 'I must also be honest with you: about the things I have spoken of, historians today argue fiercely. I hand you these debates as they are, without drawing the conclusion for you.\n\nFor instance, the traditional narrative has the Exodus (the god leading Israel out of Egypt, the land of slavery) and the covenant at Sinai (the god giving the law at Sinai). The power of these stories is real and immense — they shaped this people\'s entire understanding of "who we are." But the scholarly reading reminds us: these two events presently lack direct archaeological evidence, and most scholars see them as core narratives written down later to ground national identity, not as proven to have "happened word for word."\n\nFor another, that legendary glorious united kingdom of David and Solomon — just how large and strong it was is a famous archaeological debate, still not settled. Here you must separate "what the text claims" from "physical evidence": the Tel Dan Stele of around the ninth century BCE mentions the "House of David," and most scholars take it as proof the dynasty of David truly existed — what is argued is only the kingdom\'s size; while the earliest hard evidence for the very name "Israel" is the Merneptah Stele of around 1208 BCE in Egypt.\n\nIn this part, I am not asking you to believe one side. I am asking you to see that two readings can stand side by side: ① within the tradition of faith, these are taken as the god\'s own revelation; ② in scholarship and archaeology, one asks when these texts were written, what archaeology can and cannot confirm.\n\nThe two readings stand layered, side by side, not denying each other. As for whether the god exists at all, or which reading is "true" — this course does not answer that for you; that is your own affair.',
      },
      deliverGoal: 'N9 historiography + Rule 0 双层读法 — 诚实: 历史学家吵得凶/原样交给你不替你下结论 + 例 1 出埃及 Exodus (神领出埃及为奴之地)+西奈立约 (神在 Sinai 降律法): 故事力量真实巨大塑造「我们是谁」/但学术读法: 缺直接考古证据多数学者看作后世写定奠定认同的核心叙事非「逐字发生过」被证实 + 例 2 David·Solomon 传说辉煌统一王国多大多强是著名至今没完的考古争论 + 不要你信哪边要你看见两种读法并排: ① 信仰传统内部当神亲口启示 ② 学术-考古问文本何时写成/考古能否证实 + 两读法分层并列不互相否定 + 神是否存在/哪种「真」这门课不替你回答是你自己的事',
      engagementHook: '出埃及、西奈立约、所罗门的辉煌王国——这些故事的力量是真的，但考古能不能证实它们「逐字发生过」，历史学家至今吵个不停。两种读法可以并排站着。神到底存不存在？这门课不替你回答——那是你自己的事。',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-prophet-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一段，最难评的，是我做的那件事——把一场惨败，解释成「神在管教我们」。两种说法都站得住，你来称。\n\n一种说法：这是人类历史上极罕见的一次思想壮举。我没让一个民族在失败里散掉，反而把它的信仰锻造得更纯、更彻底，让它在没有国土的情况下活了千百年。一个解释，救了一整个民族——这是「意义」战胜「绝境」的奇迹。\n\n另一种说法：要警惕这套解释里的一个危险。「是我们违约在先、神才罚我们」，等于对一群刚被屠城、被掳走、本就是受害者的人说——错在你们自己。它把巴比伦的暴行，悄悄从加害者头上，挪了一部分到受害者自己身上。一套能把任何苦难都解释成「这是你活该、是为你好」的逻辑，是抚慰，还是另一种沉重的枷锁？\n\n这两边不是「他对但有点过」。是同一件事的两面——同一个把失败翻译成意义的解释，既给了一个民族活下去的脊梁，也可能让受苦的人，反过来责怪自己。\n\n两边都站得住，没有标准答案。想 30 秒，把你的判断写下来。',
        en: 'Having walked my stretch, the hardest thing to judge is what I did — explaining a crushing defeat as "the god disciplining us." Both views stand. You do the weighing.\n\nOne view: this was one of the rarest moves in all of history. I did not let a people scatter in defeat; instead I forged its faith purer and more thorough, and let it live on for ages without a land. One explanation saved a whole people — meaning winning out over a hopeless situation.\n\nThe other view: beware a danger inside this explanation. "We broke the covenant first, so the god punished us" amounts to telling a crowd that had just been massacred, carried off, and were victims to begin with — the fault is your own. It quietly shifts part of Babylon\'s atrocity off the perpetrator and onto the victims themselves. A logic that can explain any suffering as "you deserved it, it is for your good" — is it comfort, or another heavy chain?\n\nThese are not "he was right but went a bit far." They are two faces of one thing — the same explanation that translated defeat into meaning both gave a people the backbone to live on, and may have made the suffering blame themselves.\n\nBoth sides stand, and there is no answer key. Take thirty seconds and write your judgment down.',
      },
      deliverGoal: 'N10 synthesis — 最难评: 把惨败解释成「神在管教我们」两说法 / 一种说法 (极罕见思想壮举/没让民族散掉反把信仰锻造更纯更彻底/没国土活千百年/一个解释救一整个民族 = 意义战胜绝境的奇迹) / 另一种说法 (警惕危险: 「我们违约在先神才罚我们」= 对刚被屠城被掳本就是受害者的人说错在你们自己/把巴比伦暴行从加害者头上挪一部分到受害者身上/能把任何苦难解释成「你活该是为你好」的逻辑是抚慰还是另一种枷锁) / 同一件事两面 (给民族活下去的脊梁 vs 让受苦者反过来责怪自己) / neutral school (AP 老师) / 想 30 秒两边都站得住',
      engagementHook: '我把惨败解释成「神在管教我们」，救了一整个民族——可这话也等于对刚被屠城的受害者说「错在你们自己」。一个能救人的解释，会不会同时是一副新的枷锁？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'ancient-israel-prophet-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一段，你会怎么评价一个站在所有人中间、替神说话的人？\n\n我不完全属于任何一边。对巴比伦，我是个嘴硬的输家；对想改拜 Marduk 活命的同胞，我是个不识时务、害他们的人；对国王权贵，我是个专戳痛处、该关进枯井的麻烦。我想用一个解释，替一个濒临散架的民族，接住它的灵魂——而我自己，常常被两边都恨。把这样一段放上天平，你会怎么称？\n\n再提醒一句 anti-fab 的底线：我口中的耶利米、以西结是真实历史脉络里的先知，但我在这一遍里替你「具象」出来的那些心理时刻、那些独白，史料并没有逐字记下。我把这层透明地交给你。\n\n现在，你只听到了我这一边。那个烧掉圣殿、押我们走的巴比伦军官，会把这同一段历史，讲成一桩再普通不过的征服。而巴比伦河边那个失去了一切、连名字都没留下的年轻人——我替他「解释」了灾难，可他自己，怎么扛过那一个个具体的夜晚？\n\n换个视角再走一遍。还记得耶路撒冷被烧那夜，我听见的那个「神，你在哪里」的问题吗？从另一个人的耳朵里，你会听见同一夜，完全不同的一声。',
        en: 'Having walked my stretch, how would you judge a person who stood in the middle of everyone and spoke for the god?\n\nI belonged fully to no side. To Babylon, I was a stubborn loser; to the countrymen who wanted to turn to Marduk and survive, I was a fool who could not read the times and was harming them; to the kings and nobles, I was a troublemaker who jabbed at sore spots and deserved the dry well. I tried, with one explanation, to catch the soul of a people on the edge of falling apart — and I myself was often hated by both sides. Put a stretch like this on the scale. How would you weigh it?\n\nOne more reminder of the anti-fabrication line: the Jeremiah and Ezekiel I speak as are prophets within the real historical line, but the inner moments and monologues I have "made concrete" for you in this pass are not recorded word for word in any source. I hand you that layer transparently.\n\nNow, you have heard only my side. The Babylonian officer who burned the Temple and marched us off would tell this same history as a most ordinary conquest. And the young man by the rivers of Babylon who lost everything and left not even a name — I "explained" the disaster for him, but how did he himself bear those particular nights one by one?\n\nRun it again through another lens. Do you remember, the night Jerusalem burned, the question I heard, "god, where are you"? Through another person\'s ears, you will hear, on that same night, an entirely different sound.',
      },
      deliverGoal: 'N11 close/meta — 怎么评一个站所有人中间替神说话的人 (对巴比伦是嘴硬输家/对想改拜活命同胞是不识时务害他们的人/对国王权贵是该关枯井的麻烦/想用一个解释接住濒散民族的灵魂自己却被两边都恨) 天平怎么称 + anti-fab 底线 EXPLICIT (耶利米以西结是真实脉络先知/但替你具象的心理时刻独白史料没逐字记/透明交给你) + 跨视角指针: ① 你只听到我这边 ② 烧圣殿押我们走的巴比伦军官会讲成再普通不过的征服 + 河边失去一切没留名的年轻人 (我替他解释灾难/他自己怎么扛过具体夜晚) ③ 换视角再走 + 暗示烧城那夜「神你在哪」从另一人耳朵听见同一夜完全不同的一声 (不直接解释)',
      engagementHook: '我替神说话，想接住一个濒临散架的民族的灵魂，自己却被两边都恨。你会怎么评价这样一个站在中间的人？现在你只听到了我这一边——那个烧庙的巴比伦军官、那个河边没留下名字的年轻人，会怎么讲这同一段历史？',
      expectsRealAnswer: true,
    },
  ],
};

export var exileLens = {
  id: 'exile-generation-receiving-end',
  name: 'The Exile by the River',
  nameCn: '巴比伦河边的被掳者',
  role: 'receiving-end',
  perspectiveTag: 'nameless-exile-forges-faith',
  icon: '🕯️',
  description: {
    cn: '前 6 世纪初，巴比伦河边一个失去了一切的年轻犹大人。他没有确切姓名，因为被掳的普通人没有在历史里留下名字，而这恰恰是问题本身。他可能本是耶路撒冷一个工匠或祭司家庭的孩子，亲眼看着圣殿在火里塌掉，被绳子串成一队，走了上千里路到巴比伦。这是 DEFAULT 视角，刻意选了最无权、最被历史碾过的那个位置。这一遍让你站在最底层，直面一个几乎要把人压垮的问题，我们的神，是不是也被打败了，并看见一神教里那个「唯一、超验、无所不在」的神，很大程度上是在最绝望的流亡者手里，被想清楚、被抓牢的。',
    en: 'In the early sixth century BCE, a young Judahite by the rivers of Babylon who has lost everything. He has no certain name, because the ordinary exiles left no names in history - and that is exactly the point. He may have been the child of a craftsman or priestly family in Jerusalem, who watched the Temple collapse in fire, was strung into a line by ropes, and walked a thousand miles to Babylon. This is the DEFAULT lens, deliberately set in the most powerless place, the one most crushed by history. This pass puts you at the very bottom, facing a question that nearly crushes a person - was our god, too, defeated - and watching how the "one, transcendent, everywhere" god of monotheism was, in large part, thought clear and held fast in the hands of the most despairing of exiles.',
  },
  storyboard: [
    {
      id: 'ancient-israel-exile-n1',
      type: 'narrative',
      phase: 'hook',
      content: {
        cn: '我坐在巴比伦的运河边。水是浑的，天是别人的天。\n\n我没有名字给你。不是我不肯说——是像我这样的人，被掳来的普通人，没有谁替我们在历史里记下名字。后人记得烧城的王、记得替神说话的先知，可河边坐着的几千个我，连一个名字都没留下。\n\n这件事本身，就是我要让你看见的第一样东西：历史，常常只记得有权的人。\n\n我本来是耶路撒冷的孩子，家里可能是工匠，可能是祭司。我亲眼看着那座圣殿在火里塌下去，然后被一根绳子串进长长的队伍，走了上千里路，走到这儿。\n\n这一遍，你坐到我这个最底下、最没有名字的位置。你会和我一起，扛一个几乎压垮人的问题。但你也会亲眼看见：人类历史上一个最大的观念，很可能就是在我这样一个失去一切的人手里，被想清楚、被死死抓住的。',
        en: 'I sit by a canal in Babylon. The water is muddy; the sky is someone else\'s sky.\n\nI have no name to give you. Not because I will not say it — but people like me, the ordinary carried-off ones, had no one to write our names into history. Later ages remember the king who burned the city, remember the prophet who spoke for the god, but the thousands of me sitting by the river left not a single name.\n\nThis itself is the first thing I want you to see: history often remembers only those with power.\n\nI was a child of Jerusalem; my family may have been craftsmen, may have been priests. I watched that Temple collapse in fire with my own eyes, and then was strung by a rope into a long line, and walked a thousand miles, all the way to here.\n\nThis pass puts you in my place, the lowest, most nameless place. You will carry, with me, a question that nearly crushes a person. But you will also see with your own eyes: one of the greatest ideas in human history was very likely thought clear, and held tight, in the hands of someone like me who had lost everything.',
      },
      deliverGoal: 'N1 hook — 坐巴比伦运河边 (水浑/天是别人的天) + 没名字 (被掳普通人没谁替我们记下名字/后人记烧城的王记替神说话的先知/河边几千个我连名字都没留下) + 这件事本身=第一样要你看见的: 历史常只记有权的人 + 我本是 Jerusalem 孩子 (家里工匠或祭司)/亲眼看圣殿火里塌/被绳子串进队伍走上千里 + 这一遍从最底没名字位置 + 一起扛压垮人的问题 + 但也亲眼看见: 人类最大观念之一很可能在我这样失去一切的人手里被想清楚抓住',
      engagementHook: '后人记得烧城的王、记得替神说话的先知，可河边坐着的几千个我，连一个名字都没留下。你能想象「失去一切、连名字都没在历史里留下」是什么感觉吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-exile-n2',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '先让你懂，我失去的到底是什么，你才懂后来那个问题为什么那么重。\n\n我从小生活的世界，是有一个中心的。那中心就是耶路撒冷的圣殿（First Temple）——我们这个民族和神最隆重相会的地方。一年里最大的节、最要紧的献祭，都在那里。它在，神就在；它在，我们这个民族就有个「家」。\n\n我也从小被教着：我们和神之间，有一份特别的约定，叫 covenant（圣约，希伯来语 brit）。神说，你们专一敬我、守我的律法（Torah），我就作你们的神、护佑你们。这不是主子对奴才，是一份双向的、彼此都有责任的约。\n\n这两样东西——那座圣殿、那份约——撑起了我整个世界，撑起了「我是谁」。\n\n前 586 年那把火，把这两样东西，一起烧塌了。庙没了，国没了，我被掳到这千里之外的异乡。我失去的，不只是家。是我用来理解「我是谁、我和神什么关系」的整个框架。',
        en: 'First let me make you understand what I lost, so you understand why that later question weighed so much.\n\nThe world I grew up in had a center. That center was the Temple in Jerusalem (the First Temple) — the place where our people met the god most solemnly. The greatest festival of the year, the most important offerings, were all there. While it stood, the god was present; while it stood, our people had a "home."\n\nI was also taught from childhood: between us and the god there is a special agreement, called covenant (brit in Hebrew). The god says, worship me alone and keep my law (Torah), and I will be your god and guard you. This is not master over servant; it is a two-way agreement, with duties on both sides.\n\nThese two things — that Temple, that covenant — held up my whole world, held up "who I am."\n\nThe fire of 586 BCE burned both of them down together. The temple gone, the nation gone, and I carried off to this foreign land a thousand miles away. What I lost was not only a home. It was the whole framework I used to understand "who I am, and what my relationship with the god is."',
      },
      deliverGoal: 'N2 setup — 懂我失去什么才懂后来那问题多重 + 从小世界有个中心: Jerusalem 圣殿 First Temple (民族和神最隆重相会的地方/最大节最要紧献祭都在那/它在神就在它在民族就有个家) + 从小被教: 我们和神有特别约定 covenant·brit (神说专一敬我守律法 Torah 我作你们神护佑你们/不是主子对奴才是双向彼此有责任的约) + 这两样 (圣殿+约) 撑起整个世界撑起「我是谁」+ 前 586 那把火把两样一起烧塌 (庙没国没被掳千里异乡) + 我失去的不只是家是理解「我是谁我和神什么关系」的整个框架',
      engagementHook: '那座圣殿和那份「约」，撑起了我整个世界，也撑起了「我是谁」。一把火，把它们一起烧塌了。当一个人理解自己的整个框架被烧没了，他还剩下什么？',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-exile-n3',
      type: 'narrative',
      phase: 'setup',
      content: {
        cn: '到了巴比伦，压垮我的，不只是失去，还有眼前这座城的「壮丽」。\n\n这座城太大、太富了。城墙高得望不到顶，运河把全城切成方块，刺向天空的高塔（ziggurat，塔庙）一座接一座，传说中的空中花园挂在半空。城里到处是他们主神 Marduk 的神庙——金光闪闪，神像庄严，节庆一来，全城游行、献祭、欢呼。\n\n你站在我这儿，每天睁眼就是这一切。然后回头想想我们那座已经烧成黑灰的、连神像都没有的小小圣殿。\n\n周围的人——包括一些已经动摇的同胞——天天在我耳边说同一句话：看清楚吧，你的神输了。跪下来拜 Marduk 吧，跟着这座赢家的城活下去。\n\n这就是我每天要面对的：不是有人拿刀逼我，是这整座壮丽的城，本身就在无声地证明——强的是它，输的是我们。\n\n在这种日复一日的压力下，要不要放弃自己的神，对一个失去了一切的年轻人来说，是真实到每一个清晨的拷问。',
        en: 'In Babylon, what crushed me was not only the loss, but the "grandeur" of this city before my eyes.\n\nThis city is too vast, too rich. The walls rise beyond sight, canals cut the whole city into squares, towers (ziggurats, temple-towers) stab at the sky one after another, the fabled hanging gardens hang in mid-air. Everywhere in the city are the temples of their chief god Marduk — glittering with gold, the idol solemn, and when a festival comes, the whole city parades, makes offerings, and cheers.\n\nYou stand where I stand, and every day you open your eyes to all of this. Then look back and think of our little Temple, already burned to black ash, that did not even have an idol.\n\nThe people around me — including some countrymen already wavering — say the same thing in my ear every day: see clearly now, your god lost. Kneel and worship Marduk; live on with this winning city.\n\nThis is what I face every day: it is not someone forcing me with a blade, it is this whole magnificent city itself, silently proving — the strong one is it, the loser is us.\n\nUnder this daily pressure, whether to give up one\'s own god, for a young man who has lost everything, is a question real down to every single morning.',
      },
      deliverGoal: 'N3 setup — 压垮我的不只失去还有眼前城的壮丽 + 城太大太富 (城墙望不到顶/运河切成方块/ziggurat 塔庙一座接一座/空中花园挂半空/到处 Marduk 神庙金光闪闪神像庄严/节庆全城游行献祭欢呼) + 你每天睁眼就是这一切再回想我们烧成黑灰连神像都没有的小圣殿 + 周围人 (含动摇同胞) 天天说同一句: 你的神输了跪拜 Marduk 跟着赢家的城活下去 + 我每天面对的不是有人拿刀逼是整座壮丽的城本身无声证明强的是它输的是我们 + 要不要放弃自己的神对失去一切的年轻人是真实到每个清晨的拷问',
      engagementHook: '没人拿刀逼我改信。可这整座金光闪闪的城，本身就在每天无声地说一句话：强的是它，输的是你们。当「证据」每天就摆在你眼前，你还守得住自己原本相信的东西吗？',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-exile-n4',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '现在你就是我。\n\n你坐在巴比伦的河边。傍晚，有人在不远处哭，有人小声哼着家乡的调子。后世有一篇《诗篇》第 137 篇，据信就出自我们这种处境，开头是：「我们曾在巴比伦的河边坐下，一追想锡安（Zion，就是耶路撒冷）就哭了。」\n\n那一刻，一个问题压上你的胸口，重得喘不过气——它不是「我们什么时候能回家」，是更深、更可怕的那一个：\n\n我们的神，是不是也被打败了？\n\n你掂量这个问题的分量：如果神真的输了，那我从小信的一切，全是假的；那我守了一辈子的约，是一张废纸；那我现在该做的，就是认输、改拜 Marduk、慢慢变成一个巴比伦人，从此再没有「我们」。\n\n两条路，清清楚楚摆在你面前。一条是放手——像周围几十个被灭的小民族那样，忘掉、融化、消失。另一条，是抓住——但你得先想明白：到底还有什么，值得你在这一无所有的河边，死死抓住？\n\n你会怎么选？',
        en: 'Now you are me.\n\nYou sit by the river in Babylon. At dusk, someone weeps not far off, someone hums a tune of home under their breath. There is a later Psalm, the 137th, believed to come from our very situation, which begins: "By the rivers of Babylon, there we sat down, yea, we wept, when we remembered Zion" (Zion, that is, Jerusalem).\n\nIn that moment, a question presses on your chest, so heavy you cannot breathe — it is not "when can we go home," but the deeper, more terrible one:\n\nWas our god, too, defeated?\n\nWeigh the weight of this question: if the god truly lost, then everything I believed since childhood is false; then the covenant I kept all my life is a scrap of waste paper; then what I should do now is admit defeat, turn to Marduk, slowly become a Babylonian, and from then on there is no more "us."\n\nTwo roads lie clearly before you. One is to let go — like the dozens of small peoples wiped out around us, to forget, to dissolve, to vanish. The other is to hold on — but first you must think it through: what, exactly, is still worth holding tight by this river where you have nothing?\n\nHow will you choose?',
      },
      deliverGoal: 'N4 personal「你就是 TA」peak — 你坐巴比伦河边傍晚 (有人哭有人哼家乡调子) + 《诗篇》137 据信出自我们这处境「我们曾在巴比伦河边坐下一追想 Zion (即 Jerusalem) 就哭了」+ 一个问题压上胸口重得喘不过气/不是「何时回家」是更深更可怕的: 我们的神是不是也被打败了 + 掂量分量 (如果神真输了从小信的全是假/守一辈子的约是废纸/该认输改拜 Marduk 变巴比伦人再没「我们」) + 两条路清楚: 放手 (像周围几十个小民族忘掉融化消失) vs 抓住 (但得先想明白还有什么值得在一无所有的河边死死抓住) + 你会怎么选',
      engagementHook: '河边的我，被一个问题压得喘不过气——不是「什么时候能回家」，是「我们的神，是不是也被打败了」。如果连这个都输了，我从小信的一切就全是假的。这种时候，你会放手，还是抓住？',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-exile-n5',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '就在最想放手的时候，废墟里站出来一些人，给了我们另一个答案。他们是先知（prophet，希伯来语 navi），像耶利米、以西结。\n\n他们说的话，第一耳朵听上去，狠得不近人情。\n\n他们不说「神很快回来救你们」。他们说：神没有输。这场灾难，恰恰是神还在、还守着约的证据——是我们先违了约、拜了别神、行了不义，神才借巴比伦的手，来管教自己的子民。\n\n你想想，这话有多难咽：我刚被屠了城、掳了人、失去一切，他却告诉我，错在我们自己。\n\n可奇怪的是，正是这句最狠的话，把我从悬崖边拉了回来。因为它意味着——神还在。神没走。这场灾难不是「神不要我们了」，是「神还在乎、还在管教我们」。\n\n你品出这一手的厉害了吗？同样一场惨败，「神输了」会让人彻底放手；「神在管教我们」却让人有理由抓得更紧。一句解释，调转了整件事的方向。',
        en: 'Just when I most wanted to let go, some people stood up out of the ruins and gave us another answer. They were prophets (prophet, navi in Hebrew), like Jeremiah and Ezekiel.\n\nWhat they said, on first hearing, was harsh to the point of being inhuman.\n\nThey did not say "the god will soon come back to save you." They said: the god has not lost. This disaster is precisely the proof that the god is still here, still keeping the covenant — we broke the covenant first, worshipped other gods, did injustice, and only then did the god use Babylon\'s hand to discipline his own people.\n\nThink how hard this is to swallow: I had just had my city massacred, my people carried off, lost everything, and he tells me the fault is our own.\n\nBut the strange thing is, it was this harshest line that pulled me back from the cliff\'s edge. Because it meant — the god is still here. The god has not left. This disaster is not "the god no longer wants us"; it is "the god still cares, still disciplines us."\n\nDo you taste how clever this move is? The same crushing defeat: "the god lost" makes a person let go completely; "the god is disciplining us" gives a person reason to hold on tighter. One explanation turned the whole direction of the thing around.',
      },
      deliverGoal: 'N5 story (思想锻造的承受端) — 最想放手时废墟里站出一些人给另一答案: 先知 prophet·navi (耶利米/以西结) + 第一耳朵狠得不近人情 + 不说「神很快回来救你们」说: 神没输/这灾难恰是神还在还守约的证据/我们先违约拜别神行不义神才借巴比伦的手管教子民 + 多难咽 (刚被屠城掳人失去一切他却说错在我们自己) + 奇怪: 正是这最狠的话把我从悬崖边拉回来 (因为它意味神还在没走/不是神不要我们了是神还在乎还管教我们) + 这一手厉害: 同一惨败「神输了」让人彻底放手/「神在管教我们」让人有理由抓更紧/一句解释调转整件事方向',
      engagementHook: '先知说的话第一耳朵狠得不近人情：错在我们自己。可正是这句最狠的话，把我从悬崖边拉了回来——因为它意味着「神还在、还在乎我们」。同一场惨败，一句解释，竟能调转整件事的方向。',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-exile-n6',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我带你回到一切的起点——耶路撒冷被烧的那一夜。我想让你听见，那一夜落在我耳朵里，是什么。\n\n那一夜满城是声音：火的轰响，墙的崩塌，远处士兵的欢呼，还有身边人说不清是哭是祷的低声。\n\n（我那一刻心里到底在想什么，史料没替我逐字记下——可坐在我这个失去一切的位置上，你大概能体会。）\n\n押我们走的巴比伦军官，听见的是一支军队凯旋的声音。可同样这片声音，落在我这儿，只剩一个问题，盖过了一切：我们的神，是不是也在这火里，一起烧没了？\n\n那一夜，我没有答案。我只有恐惧——比失去家更深的、关于「我信的一切是不是全假」的恐惧。\n\n你记住这一夜里我听见的这一声。后面你会明白：同样这一夜、同样这片声音，烧城的军官、替神说话的先知、还有我——三个人，听见的是三件完全不同的事。同一个夜晚，裂成了三个世界。',
        en: 'Let me take you back to the start of it all — the night Jerusalem burned. I want you to hear what that night was, falling on my ears.\n\nThat night the whole city was sound: the roar of fire, the collapse of walls, the cheers of soldiers far off, and beside me the low voices you could not tell were weeping or prayer.\n\n(What I felt in that moment, the record did not write down word for word for me — but sitting in my place, having lost everything, you can roughly feel it.)\n\nThe Babylonian officer marching us off heard the sound of an army\'s triumph. But that same sound, falling on me, left only one question, drowning out everything: was our god, too, burning away in this fire, together with it?\n\nThat night I had no answer. I had only fear — a fear deeper than losing a home, a fear about whether "everything I believe is false."\n\nRemember this one sound I heard that night. Later you will understand: this same night, this same sound — the officer who burned the city, the prophet who spoke for the god, and I — three people heard three entirely different things. One night, split into three worlds.',
      },
      deliverGoal: 'N6 ANCHOR cross-lens — 回到起点耶路撒冷被烧那夜从被掳者角度 + 满城声音 (火轰响/墙崩塌/远处士兵欢呼/身边人说不清是哭是祷的低声) + anti-fab 括号 (我那刻心里史料没逐字记/坐我失去一切的位置可体会) + 押我们走的巴比伦军官听见军队凯旋声/同片声音落我这只剩一个问题盖过一切: 我们的神是不是也在这火里一起烧没了 + 那夜没答案只有恐惧 (比失去家更深的关于「我信的一切是不是全假」的恐惧) + 记住这一声/后面明白: 同夜同声音军官+先知+我三人听见三件完全不同的事/同一夜裂成三个世界 — 不点破另两 lens 内文',
      engagementHook: '同一夜的火光与哭喊，押我们走的军官听见的是凯旋，而我听见的只有一个问题盖过一切：我们的神，是不是也在这火里一起烧没了？同一个夜晚，竟裂成了三个完全不同的世界。',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-exile-n7',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我选择了抓住。可你得明白，「抓住」不是闭着眼喊口号，是我们这些没名字的人，在异乡一点点，亲手做出来的。\n\n没有圣殿可以献祭了。怎么办？我们就改用另一种方式守住神：我们聚在一起，一遍遍地讲那些古老的故事，一遍遍地念神的话和律法（Torah），把口耳相传的东西，开始认真地抄写、记录、整理。\n\n你想想这个画面：一群被掳的、一无所有的人，没有庙、没有国、没有权力，手里只有一卷一卷的经文。他们把这些经文，当成随身能带走的「圣殿」。\n\n慢慢地，我懂了先知那句话最深的意思：神不被任何一座庙、任何一块国土困住。他在耶路撒冷在，他在巴比伦的河边，一样在。\n\n这一下，全变了。我们不再需要一座烧不掉的庙——我们有了一卷烧不掉的书，和一个抱团守着它的共同体。我，一个连名字都没有的人，就这样亲手参与了发明一种不靠国土、只靠经卷和认同就能活下去的信仰。',
        en: 'I chose to hold on. But you must understand, "holding on" was not shouting slogans with eyes shut; it was something we nameless ones made with our own hands, little by little, in a foreign land.\n\nThere was no Temple to make offerings at anymore. What then? We turned to another way to keep the god: we gathered together, told the old stories over and over, recited the god\'s words and law (Torah) over and over, and began to copy, record, and arrange in earnest what had been passed mouth to mouth.\n\nPicture this scene: a crowd of carried-off, destitute people, with no temple, no nation, no power, holding in their hands scrolls and scrolls of scripture. They treated these scrolls as a "Temple" they could carry with them.\n\nSlowly I understood the deepest meaning of the prophet\'s line: the god is not trapped by any temple, any land. He is present in Jerusalem; he is just as present by the rivers of Babylon.\n\nAt that, everything changed. We no longer needed a temple that could not be burned — we had a book that could not be burned, and a community huddling to keep it. I, a person without even a name, took part with my own hands in inventing a faith that could live on without a land, on a scroll and an identity alone.',
      },
      deliverGoal: 'N7 story (承受端亲手锻造) — 我选择抓住 + 「抓住」不是闭眼喊口号是我们没名字的人在异乡一点点亲手做出来 + 没圣殿献祭了怎么办: 聚在一起一遍遍讲古老故事一遍遍念神的话和律法 Torah/把口耳相传的开始认真抄写记录整理 + 画面: 一群被掳一无所有的人没庙没国没权力手里只有一卷一卷经文/当成随身能带走的「圣殿」+ 慢慢懂先知那句最深意思: 神不被任何庙任何国土困住/在 Jerusalem 在在巴比伦河边一样在 + 全变了: 不再需要烧不掉的庙有了烧不掉的书+抱团守它的共同体 + 我一个连名字都没有的人亲手参与发明不靠国土只靠经卷和认同就能活下去的信仰',
      engagementHook: '我们这些一无所有的人，没庙、没国、没权力，手里只有一卷一卷经文——我们把它当成随身能带走的「圣殿」。一个连名字都没有的人，竟亲手参与发明了一种不靠国土也能活下去的信仰。',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-exile-n8',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '我还得对你诚实——我们守住的这套信仰，它的样子，是一点点变出来的，不是一开始就有的。这是这门课最重要的一句史学认知，我必须原样交给你。\n\n你可能以为，我们犹大人从来就是纯粹的一神教徒：天下只有一个神。其实不是。早些年，我们当中很多普通人，是一边敬 YHWH，一边也拜迦南本地的别神（比如 Baal、Asherah）的。\n\n从「我们这族只拜 YHWH」（学者叫 monolatry，单拜一神，但默认别族也有真神），到「天下根本只有一个神」（monotheism，唯一一神），是一条走了几百年的长路：先有约前 622 年约西亚（Josiah）国王的改革，把崇拜集中到耶路撒冷一处；再到我们这一代在巴比伦的流亡里，被逼着把神想到最大、最唯一。\n\n（这里有信仰传统和学术-考古两种读法：对早期那种「一边敬 YHWH 一边拜别神」，信仰传统会读成子民的悖逆、背约堕落，而非神还不唯一；学术则读成一神观念尚在演化、还没定型。两种读法并排站着，我不替你判断哪个真。）\n\n我要你记住的是：那个「唯一、超验、无所不在」的神，不是天上掉下来的现成礼物。他很大程度上，是在我这样最绝望的流亡者手里，一步步被想清楚、被死死抓牢的。',
        en: 'I must also be honest with you — the faith we kept, its shape, came about little by little; it was not there from the start. This is the most important piece of historical understanding in this course, and I must hand it to you as it is.\n\nYou may think we Judahites were always pure monotheists: only one god in all the world. In fact, not so. In earlier years, many ordinary people among us worshipped YHWH (say it YAH-weh, the god of Israel) while also worshipping the local Canaanite gods (such as Baal and Asherah).\n\nFrom "our people worship YHWH alone" (scholars call it monolatry, the worship of one god, but assuming other peoples have real gods too) to "there is only one god in all the world" (monotheism, a single god) was a long road of several centuries: first the reform of King Josiah around 622 BCE, concentrating worship at the one place in Jerusalem; then our generation, in exile in Babylon, pushed under duress to think the god as large and as singular as possible.\n\n(Here are both the faith-tradition reading and the scholarly-archaeological one: of that early "worship YHWH while also worshipping other gods," the tradition would read it as the people\'s waywardness, a falling away and breaking of the covenant — not as the god being not yet the only one; scholarship would read it as a monotheist idea still evolving, not yet settled. The two readings stand side by side, and I do not judge for you which is true.)\n\nWhat I want you to remember is this: that "one, transcendent, everywhere" god was no ready-made gift fallen from the sky. He was, in large part, thought clear and held tight, step by step, in the hands of the most despairing exiles like me.',
      },
      deliverGoal: 'N8 story (演变链 + Rule 0 双层) — 诚实: 守住的信仰样子是一点点变出来不是一开始就有/这门课最重要史学认知必原样交给你 + 你可能以为犹大人从来纯一神教其实不是 (早些年很多普通人一边敬 YHWH 一边拜迦南别神 Baal·Asherah) + 从 monolatry 单拜一神 (但默认别族有真神) 到 monotheism 唯一一神是几百年长路 (先约前 622 Josiah 改革集中崇拜到 Jerusalem 一处/再到我们这代巴比伦流亡里被逼把神想到最大最唯一) + anti-fab/Rule 0 括号 (信仰传统读法: 神一步步启示 / 学术读法: 观念在历史逐步成形 / 两读法并排我不替你判断哪个真) + 要记住: 那个「唯一超验无所不在」的神不是天上掉的现成礼物很大程度在我这样最绝望流亡者手里一步步被想清楚抓牢',
      engagementHook: '你可能以为我们一直就是纯粹的一神教徒——其实不是。早些年很多人一边敬 YHWH，一边也拜别的神。从「只拜我们的神」到「天下只有一个神」，是几百年、被逼着一步步想出来的。一个改变世界的观念，竟是在最绝望的人手里抓牢的。',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-exile-n9',
      type: 'narrative',
      phase: 'story',
      content: {
        cn: '让我退一步，给你看一张更大的地图——同一个时代，地球另一端的中国，是怎么回答「人在宇宙中如何安身」这个终极问题的。\n\n我活着的时候，中国正是周代。那里的人也仰望至高者：周人叫他「天」（Tian），更早的商人叫「上帝」（Shangdi）——注意，这个「上帝」是中文古词，指商人的至高神，和后来翻译犹太教、基督教那位神时借用的同一个词「上帝」，不是一回事。\n\n而且商人的 Shangdi 更像一位有位格、能降祸福、要受祭祀的至上神；周人的「天」则更偏宇宙秩序与道德意志本身，和祖先、山川百神层层并存——是一张连续的大网，不是一个唯一的点。我们的 YHWH 却是站在世界之外、唯一、不可造像的创造者。\n\n连接的方式也不同。我们靠 covenant（立约）：神与子民签双向有责任的契约，违约受罚。中国靠「天命」（Mandate of Heaven）加祖先：天把统治权授予有德者、失德就收回；人与超越者的连接，更走祭祖、敬祖先这条血脉的路。\n\nRule 0 提醒：这不分谁高级谁原始。中国这套「天命+德行」后来同样改变了世界：皇帝失德即失天命、王朝可被推翻，撑了东亚两千年。\n\n如果你家过年还祭祖、长辈说「举头三尺有神明」「积德」「缺德」——那不是迷信，是这套宇宙观活到今天的影子。你正站在这条对照线的中国这一端。',
        en: 'Let me step back and show you a larger map — at the same time, on the other side of the earth, how China answered that ultimate question, "how does a person find a place in the cosmos."\n\nIn my lifetime, China was in its Zhou dynasty. The people there also looked up to a highest one: they called him Tian (Heaven); earlier the Shang people called him Shangdi (literally "the High God" — note that modern Chinese later reused this same word 上帝 to translate the Jewish and Christian God; they are not the same being).\n\nThe two ends shifted over time too: the Shang Shangdi was more like a personal high god who could send blessing or ruin and had to be offered sacrifice; the Zhou "Tian" leaned more toward cosmic order and moral will itself, coexisting layer upon layer with ancestors and the gods of mountains and rivers — a continuous web, not a single point. Our YHWH, by contrast, is the one and only creator, standing outside the world, who may not be made into an image.\n\nThe way of connecting also differs. Ours rests on covenant: the god signs a two-way, binding contract with a people, and breaking it brings punishment. China rests on the "Mandate of Heaven" plus ancestors: Heaven grants rule to the virtuous and withdraws it from the unworthy; and a person\'s link to the transcendent runs more along the bloodline of honoring ancestors.\n\nA Rule 0 reminder: this is not about who is advanced and who is primitive. They are two profound answers to one ultimate question — and China\'s "Mandate plus virtue" changed the world just as much: an emperor who loses virtue loses Heaven\'s mandate and a dynasty can be overthrown, a logic that held up East Asia for two thousand years.\n\nIf your family still honors ancestors at New Year, if elders say "the gods watch three feet above your head," "build up virtue," "lose your virtue" — that is not superstition; it is the shadow of this very cosmology, alive today. You are standing on the China end of this comparison line.',
      },
      deliverGoal: 'N9 zoom-out + §8 中国桥 (写实非套话) — 退一步看更大地图: 同时代中国怎么回答「人在宇宙如何安身」终极问题 + 我活着时中国是周代 (西周东周)/也仰望至高者 Tian·天 (更早商人 Shangdi·上帝/帝) 但和 YHWH 是两种很不一样的东西 + 我们的神=站世界外唯一不可造像的创造者 vs 中国「天」=不是世界外唯一造物主更像宇宙秩序与道德意志本身/和祖先山川百神层层并存各司其职=一张连续大网不是唯一的点 + 连接方式不同: 我们靠 covenant 立约 (双向有责任契约违约受罚) vs 中国靠天命 Mandate of Heaven+祖先 (天授有德者失德收回/个人连接走祭祖敬祖先血脉) + 一边「唯一神+立约」一边「天命+德行+血脉」+ Rule 0 提醒: 不是谁高级谁原始/同一终极问题两端各自深刻的两种答案各有智慧各有盲点/分别塑造东西方两千年精神底色',
      engagementHook: '同一个时代，地球另一端的中国也仰望「天」——可中国的「天」是一张连续的大网，我们的神是网外唯一的一点；他们靠「天命+血脉」连接，我们靠「立约」。这不是谁高级谁原始，是同一个终极问题，两端给出的两种深刻答案。',
      expectsRealAnswer: false,
    },
    {
      id: 'ancient-israel-exile-n10',
      type: 'synthesis',
      phase: 'reflection',
      content: {
        cn: '走完我这一生，回头看河边那个最难的选择，有一个真问题，等你来答。\n\n按古近东所有人的常识，前 586 年圣殿被烧、人被掳，意味着「这个民族的神输了、该消失了」。我们却反而把信仰抓得更紧、想得更彻底。一场最彻底的失败，反而锻造出最坚固的信仰。这件事，到底说明了什么？两种说法都站得住，你来称。\n\n一种说法：这说明信念能超越处境，是人最了不起的力量。再大的帝国能烧掉我的庙、夺走我的国，却夺不走我心里抓住的那个意义。一个民族靠一卷书和一份认同，活过了烧它的那个帝国——这是精神战胜刀剑的明证。\n\n另一种说法：要冷静一点看。也许不是信念多神奇，而是只有把信仰想得「绝对、唯一、不可动摇」的那一支，才扛得住这种灭顶之灾、才没散掉——是残酷的处境，筛选并塑造了这种极端坚固的信仰，而不是信仰凭空显灵。换句话说，是苦难造就了它，未必是它有多超自然。\n\n这两边不是「信念赢了」对「只是侥幸」。是同一件事的两面：到底是信念塑造了处境，还是处境塑造了信念？\n\n两边都站得住。给自己 30 秒，把你站哪边、为什么，写下来。',
        en: 'Having walked my whole life, look back at that hardest choice by the river. There is a real question waiting for you.\n\nBy the common sense of everyone in the ancient Near East, the burning of the Temple and the carrying-off of the people in 586 BCE meant "this people\'s god has lost and ought to vanish." Yet instead we held our faith tighter and thought it through more thoroughly. The most utter defeat forged, instead, the most solid faith. What, in the end, does this show? Both views stand. You do the weighing.\n\nOne view: it shows that conviction can rise above circumstance, the most remarkable power a person has. However great the empire, it could burn my temple and seize my land, but it could not seize the meaning I held in my heart. A people lived, on a scroll and an identity, beyond the very empire that burned it — clear proof of spirit overcoming the blade.\n\nThe other view: look more coolly. Perhaps it is not that conviction is so miraculous, but that only the branch which thought its faith "absolute, singular, unshakable" could withstand a blow that should have wiped them out and not scatter — it was the cruel circumstance that selected and shaped this extremely solid faith, not faith working a wonder from nothing. In other words, suffering made it; it was not necessarily so supernatural.\n\nThese are not "conviction won" against "mere luck." They are two faces of one thing: did conviction shape the circumstance, or did the circumstance shape the conviction?\n\nBoth sides stand. Give yourself thirty seconds and write down which side you take, and why.',
      },
      deliverGoal: 'N10 synthesis (= §11 思考问题 1) — 真问题: 最彻底的失败反而锻造出最坚固的信仰说明什么两说法 / 一种说法 (信念能超越处境是人最了不起的力量/帝国能烧庙夺国夺不走心里抓住的意义/一民族靠一卷书+一份认同活过烧它的帝国 = 精神战胜刀剑) / 另一种说法 (冷静看: 也许不是信念多神奇而是只有把信仰想得绝对唯一不可动摇那一支才扛得住灭顶之灾没散掉/是残酷处境筛选并塑造了这种极端坚固的信仰非凭空显灵/苦难造就了它未必它多超自然) / 同一件事两面: 信念塑造处境 vs 处境塑造信念 / neutral school (AP 老师) / 想 30 秒两边都站得住',
      engagementHook: '一场最彻底的失败，反而锻造出最坚固的信仰。一种说法：这是信念超越处境的奇迹。另一种说法：是残酷的处境，筛选出了唯一扛得住的那种极端信仰。到底是信念塑造了处境，还是处境塑造了信念？你的 30 秒到了，你站哪边？',
      expectsRealAnswer: true,
    },
    {
      id: 'ancient-israel-exile-n11',
      type: 'synthesis',
      phase: 'closing',
      content: {
        cn: '走完我这一生——一个没名字的被掳者，一座烧掉的圣殿，一个「我们的神是不是也输了」的拷问，一卷随身带走的经书，一种不靠国土也能活的信仰，你会怎么评价这样一个开端？\n\n后世今天，全球约一半人口所信的犹太教、基督教、伊斯兰教，根都追到我们这一支古近东小民族的一神信仰（三教共尊亚伯拉罕，故称「亚伯拉罕诸教」——同源，却各自独立、差异巨大）。这把打开后世两千年宗教史的钥匙，很大程度上，是在我这样一个连名字都没留下的人手里磨出来的。这件事，你怎么称？\n\n但先记住：你这一遍，听的只是河边这个被掳者的声音。\n\n那个烧掉我们圣殿、押我们走的巴比伦军官，会把这同一段历史，讲成一桩再普通不过的征服——在他眼里，我们只是又一个该消失的小民族。那个废墟上替神说话的先知，会把这场灾难讲成神的公义、神的考验——可他给的那套解释，对我这个具体受苦的人，到底是救赎，还是又一副枷锁？\n\n你还没听到他们的声音。换个视角再走一遍，你刚才掂量过的那个判断，站不站得住？\n\n再想最后一步：今天的你，会不会也有某个「失去一切、几乎要放手」的时刻？那时候，是什么，值得你像我一样，在一无所有的河边，死死抓住？',
        en: 'Having walked my whole life — a nameless exile, a burned Temple, the question "was our god, too, defeated," a scroll carried with me, a faith that could live without a land — how would you judge a beginning like this?\n\nToday, the Judaism, Christianity, and Islam that about half the world\'s people believe in trace their roots to the monotheist faith of our small ancient-Near-Eastern people (the three honor Abraham in common, hence "the Abrahamic faiths" — one source, yet each independent and greatly different). This key that unlocks two thousand years of later religious history was, in large part, ground out in the hands of someone like me who left not even a name. How do you weigh this?\n\nBut first, remember: this pass, you heard only the voice of this exile by the river.\n\nThe Babylonian officer who burned our Temple and marched us off would tell this same history as a most ordinary conquest — in his eyes, we were only one more small people that ought to disappear. The prophet on the ruins who spoke for the god would tell this disaster as the god\'s justice, the god\'s test — but that explanation he gave, for me, a particular suffering person, was it salvation, or one more chain?\n\nYou have not yet heard their voices. Run it again through another lens, and see whether the judgment you just weighed a moment ago still holds.\n\nThen take one last step: will you too, today, have some moment of "losing everything, nearly letting go"? When that comes, what is it that is worth holding tight, as I did, by a river where you have nothing?',
      },
      deliverGoal: 'N11 close/meta — 评价开端 (没名字被掳者/烧掉的圣殿/「我们的神是不是也输了」拷问/随身带走的经书/不靠国土也能活的信仰) + through-line: 今天全球约一半人口的犹太教基督教伊斯兰教根追到我们这支 (三教共尊亚伯拉罕=「亚伯拉罕诸教」同源却各自独立差异巨大)/打开两千年宗教史的钥匙很大程度在我这连名字都没留下的人手里磨出来/怎么称 + MANDATORY 跨视角指针: ① 你只听到河边被掳者 ② 烧圣殿押我们走的巴比伦军官会讲成再普通不过的征服 (我们只是又一个该消失的小民族) + 废墟上替神说话的先知会讲成神的公义神的考验 (但他那套解释对我这具体受苦的人是救赎还是又一副枷锁) ③ 你还没听到他们/换视角再走/N10 判断站不站得住 + transfer「今天的你会不会也有失去一切几乎放手的时刻/那时什么值得你像我一样在一无所有的河边死死抓住」',
      engagementHook: '你这一遍，只听到了河边这个没名字的被掳者。烧掉圣殿的军官会把它讲成一桩再普通不过的征服，替神说话的先知会讲成神的考验——你还没听到他们的声音。换个视角再走一遍，你刚才的判断站得住吗？而今天的你，又有什么值得在一无所有时死死抓住？',
      expectsRealAnswer: true,
    },
  ],
};

// ─── Lens registry (顺序: actor / mediator / receiving-end-default) ───
export var lenses = {
  'babylon-conqueror-actor':       conquerorLens,
  'prophet-mediator':              prophetLens,
  'exile-generation-receiving-end': exileLens,
};

// receiving-end 优先 (frontmatter defaultLens; 最无权/被历史碾过的被掳者 = 一神教在
//   最底层最绝望者手里被锻造的 load-bearing pedagogy; §11 思考问题主声音也是他)
export var defaultLens = 'exile-generation-receiving-end';

// ─── 默认 export 兼容老 runtime (取 default lens 的 storyboard) ──
export default lenses[defaultLens].storyboard;

// ─── Storyboard 元信息 ───
export var meta = {
  topicId: 'ancient-israel-1000bce',
  schemaVersion: 2,
  lenses: Object.keys(lenses),
  defaultLens: defaultLens,
  qaTemplate: 'multi-faction',
  nodesPerLens: 11,
  estimatedMinutesPerLens: { 'babylon-conqueror-actor': 28, 'prophet-mediator': 30, 'exile-generation-receiving-end': 30 },
  authoredBy: 'Opus history-content author (Story-First Pedagogy v2, SOP pipeline)',
  authoredDate: '2026-06-06',
  notes: [
    '3 lens / 11 nodes each / cross-lens micro-detail: 烧城那一夜满城的声音 (军官听成帝国凯歌 / 先知听成「神你在哪/替神说话的时刻」/ 被掳者听成「我们的神是不是也输了」),三视角各触一次不点破',
    'defaultLens: exile-generation-receiving-end (frontmatter) — 最无权被掳者 = 一神教在最底层最绝望者手里被锻造的 load-bearing pedagogy',
    'expectsRealAnswer: ONLY N10 (synthesis) + N11 (close) per lens = true (2 per lens, 6 total)',
    'Rule 0 高敏感 (本 topic 最高红线): 凡涉《希伯来圣经》事件并置两种读法 (信仰传统内部 / 学术-考古),分层并列不互相否定,不替学生判断神是否存在/哪种宗教更真 — 集中体现于 prophet N9 + exile N8',
    'anti-fab: monotheism 演变链显式标 monolatry→约前 622 Josiah 改革→流亡彻底一神论 (非西奈一次性降下); 出埃及/西奈立约标缺直接考古证据=奠基叙事; Cyrus Cylinder 未单点犹大显式清坑; 先知心理时刻/独白用括号标 lens 具象非史料逐字',
    '§9 中国桥 (写实非套话): exile(default) N9 主桥 (超验唯一神+立约 vs 天命 Tian+祖先血脉, 含 Shangdi/上帝消歧 + 华裔家庭祭祖先验钩子 + 中国侧「同样改变世界」收口); conq N9 + prophet N8 各补一处轻量对照锚, 保证任一 lens 都至少触及一次中国桥; Rule 0 不分高下',
    'cross-Topic 锚: conqueror N9 ↔ babylonian-exile (Cyrus 放归/Second Temple 同段历史尾声双向呼应)',
    '4-agent review pending (7thgrader 小 U / AP teacher Dr. Park / ESL Maria / Chinese teacher 赵老师)',
  ],
};

// 一手史料卡 —— 模板规矩的自动闸
//
// 为什么要有这个文件：
// 2026-08-17 跨模型评审（扮演 7 年级孩子）发现四张卡里三张有同一个毛病 ——
// 史料卡在**复述课文已经说过的结论**，并且替孩子把话说死。史料从「证据」
// 滑成了「答案解析」，正好砸掉「给三个视角、孩子自己判断」这块招牌。
// 同时发现更硬的一条：展示给孩子的英文全是改写，却不加任何标记摆成引文；
// 而逐字原文其实早就存在数据里（Magna Carta / Crusades 的 en 字段），
// 只是组件渲染 `enSimplified || en`，孩子从来没看见过。
//
// 下面每条规矩都对应上面一个真实踩过的坑。铺课时不看文档没关系，测试会拦。
//
// 用法：node scripts/test-source-cards.mjs

import { TOPIC_REGISTRY, getTopic } from '../lib/history-topics.js';
import { preloadStoryboard, hasStoryboard, loadStoryboard, listLenses } from '../lib/history-storyboards/index.js';

var pass = 0, fail = 0, warn = 0;
function ok(m) { pass++; console.log('  ✅ ' + m); }
function bad(m) { fail++; console.log('  ❌ ' + m); }
function soft(m) { warn++; console.log('  ⚠️  ' + m); }

// 只有带 id 的是「新式史料卡」（会被 sourceRef 挂到具体节点、走 SourceCard 渲染）。
// 老式条目用 excerpt/excerptCn，不受这些规矩约束。
function newStyleSources(topic) {
  return ((topic && topic.primarySources) || []).filter(function (s) { return s && s.id && s.title; });
}

// 孩子在卡上实际会看到的所有文字（用于「关键词必须找得到」这条）
function visibleText(s) {
  return [
    s.title && s.title.en,      // 标题就印在卡顶上，孩子看得见
    s.title && s.title.cn,
    s.verbatim && s.verbatim.text,
    s.verbatim && s.verbatim.note,
    s.enSimplified,
    s.enSimplified ? null : s.en,   // 没有简化版时组件才回落到 en
    s.cnGloss,
  ].filter(Boolean).join('\n');
}

console.log('\n═══ 一手史料卡 · 模板规矩 ═══\n');

var allTopics = [];
for (var i = 0; i < TOPIC_REGISTRY.length; i++) {
  var id = TOPIC_REGISTRY[i].id;
  var t;
  try { t = getTopic(id); } catch (e) { continue; }
  if (t) allTopics.push({ id: id, topic: t });
}

var cards = [];
allTopics.forEach(function (e) {
  newStyleSources(e.topic).forEach(function (s) { cards.push({ topicId: e.id, src: s }); });
});

console.log('新式史料卡：' + cards.length + ' 张\n');

// ─── 规矩 1：标 verbatim 的必须是真原文，且带语言 ────────────────────
console.log('规矩 1 · 原文块必须标语言、有内容');
cards.forEach(function (c) {
  var v = c.src.verbatim;
  if (!v) return;
  if (!v.lang) bad(c.src.id + '：verbatim 缺 lang（孩子不知道这是哪国文字）');
  else if (!v.text || v.text.trim().length < 20) bad(c.src.id + '：verbatim.text 太短或为空');
  else ok(c.src.id + ' · ' + v.lang + ' · ' + v.text.length + ' 字符');
});

// ─── 规矩 2：改写过就不能冒充原文 ─────────────────────────────────
// verbatim 和 enSimplified 必须真的不一样。一模一样说明有人把改写版
// 复制进了 verbatim —— 那这一层就白加了。
console.log('\n规矩 2 · 原文 ≠ 改写版（不许拿改写冒充原件）');
cards.forEach(function (c) {
  var v = c.src.verbatim, sim = c.src.enSimplified;
  if (!v || !sim) return;
  var norm = function (x) { return x.replace(/\s+/g, ' ').trim().toLowerCase(); };
  if (norm(v.text) === norm(sim)) bad(c.src.id + '：verbatim 和 enSimplified 一模一样');
  else ok(c.src.id + '：两层确实不同');
});

// ─── 规矩 3：关键词必须在孩子看得到的文字里找得到 ──────────────────
// 踩过的坑：海地卡的关键词是 expel / national authority，但展示的英文写的是
// drove out / as a nation —— 孩子照着关键词去正文里找，找不到。
console.log('\n规矩 3 · 关键词必须能在卡上找到');
cards.forEach(function (c) {
  var terms = c.src.keyTerms || [];
  if (!terms.length) return;
  var hay = visibleText(c.src).toLowerCase();
  var missing = terms.filter(function (t) {
    if (!t || !t.word) return false;
    // 「a / b」这种写法任一命中即可；多词词条按首词判断
    return !t.word.split('/').some(function (variant) {
      var w = variant.trim().toLowerCase();
      return w.length >= 3 && hay.indexOf(w) >= 0;
    });
  }).map(function (t) { return t.word; });
  if (!missing.length) { ok(c.src.id + '：' + terms.length + ' 个关键词全部对得上'); return; }
  // 老卡片（还没有 verbatim 层）：逐字原文存在 en 字段里但组件从不渲染，
  // 孩子看到的只有改写版，所以关键词对不上。病根跟新卡是同一个，
  // 但属于既有内容、不在本批范围 —— 大声记为待办，不静默跳过、也不阻断。
  if (!c.src.verbatim) { soft(c.src.id + '【待办·老卡】关键词对不上 → ' + missing.join('、') + '（需补 verbatim 层）'); return; }
  bad(c.src.id + '：关键词在正文里找不到 → ' + missing.join('、'));
});

// ─── 规矩 4：结尾必须是问句 ──────────────────────────────────────
// ⚠️ 这条只能查「有没有问号」。**查不出伪开放** —— 把结论的句号换成问号，
// 这条一样会绿。第二轮评审就抓到过：卡尾问「是骗别人还是骗自己」，
// 语法上是问句，实际已经认定文件在骗人，只让孩子选骗谁。
// 真开放与否只能人（或跨模型评审）判断，判据是：**相反的答案能不能成立**。
console.log('\n规矩 4 · 结尾是开放问句，不是结论');
cards.forEach(function (c) {
  var q = c.src.closingQuestion;
  if (!q) { soft(c.src.id + '：没有 closingQuestion（老卡片，建议补）'); return; }
  var text = q.cn || '';
  if (text.indexOf('？') < 0 && text.indexOf('?') < 0) bad(c.src.id + '：closingQuestion 里没有问号 —— 那就不是问句');
  else ok(c.src.id + '：留了开放问题');
});

// ─── 规矩 5：sourceRef 必须挂得上 ────────────────────────────────
// 节点上写了 sourceRef 却找不到对应史料 = 那一节静默不出卡，没人会发现。
console.log('\n规矩 5 · 节点 sourceRef ↔ 史料 id 必须对上');
for (var k = 0; k < allTopics.length; k++) {
  var tid = allTopics[k].id, topic = allTopics[k].topic;
  if (!hasStoryboard(tid)) continue;
  await preloadStoryboard(tid);
  var ids = newStyleSources(topic).map(function (s) { return s.id; });
  var lenses = listLenses(tid) || [];
  var checked = lenses.length ? lenses.map(function (l) { return l.id || l; }) : [null];
  checked.forEach(function (lensId) {
    var nodes;
    try { nodes = loadStoryboard(tid, lensId); } catch (e) { return; }
    (nodes || []).forEach(function (n, idx) {
      if (!n || !n.sourceRef) return;
      if (ids.indexOf(n.sourceRef) < 0) {
        bad(tid + '/' + (lensId || 'default') + ' 第' + (idx + 1) + '节：sourceRef "' + n.sourceRef + '" 没有对应史料');
      } else {
        ok(tid + '/' + (lensId || 'default') + ' 第' + (idx + 1) + '节 → ' + n.sourceRef);
      }
    });
  });
}

console.log('\n─────────────────────────────');
console.log('通过 ' + pass + ' · 失败 ' + fail + ' · 提醒 ' + warn);
if (fail > 0) { console.log('\n❌ 有规矩没守住'); process.exit(1); }
console.log('\n✅ 全部通过');

// ─── 历史模块首页（门面）──────────────────────────────────────────
// 三段式 IA 的第一段：卖点说明 + 选课。点一门课 → /history/<topicId> 单课学习页。
// 首次画像设置在进入单课页时由播放器处理（ProfileSetup），首页不重复 gate。
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { BrandNavBar } from '../../components/BrandNavBar';
import { FONT, FONT_DISPLAY, globalCSS } from '../../lib/theme';
import { HC } from '../../components/history-engine/theme';
import { CourseBrowser } from '../../components/history-engine/CourseBrowser';
import { HistoryProToolsMount } from '../../components/history-engine/HistoryProToolsMount';
import { findViewIdByTopicId } from '../../lib/atlas-views';
import { loadEnglishLevel, saveEnglishLevel } from '../../lib/history-storage';
import { ENABLE_HISTORY_PAYWALL } from '../../lib/history-paywall-flag';

// 6 张卖点卡。顺序按「中国家长付费决策」排：① 学校对得上 ② 三视角 ③ 中国底子 ④ 地图 ⑤ 双语+发音 ⑥ 史料考证。
// 措辞硬规则（升学规划专家 + 历史老师双 Agent 一致建议）：
// · 不出现「应试焦虑」「完美适配中国孩子」「最难」这类引战/绝对化措辞
// · 不上 HSS code 字符串（如 7.6.5）到 Hero —— 那是课详情页的信任凭证，不是首屏钩子
// · 不打包票拿 A —— 诚实声明放 Hero 小字
var SELLING_POINTS = [
  {
    icon: '📚',
    cn: '学校学到哪，这里对得上',
    en: 'We line up with what school is teaching',
    sub: '51 节课对照加州 G5-G8 课纲 + AP World / APUSH，每节课自带课程笔记 + 课后掌握检测，下周单元测要考的那一章，这里能接上。',
    subEn: '51 lessons mapped to California G5-G8 + AP World / APUSH. Each course comes with built-in study notes and a post-lesson mastery check. The chapter on next week\'s unit test is here.',
  },
  {
    icon: '🎭',
    cn: '同一段历史，3 个真实视角讲一遍',
    en: 'One event, 3 real voices walking through it',
    sub: '掌权者怎么想、夹在中间的人怎么活、被碾过去的人怎么说 —— 三种立场各自讲完，观点不是给的，是从对照里自己长出来的。写 essay、答 DBQ 直接能用。',
    subEn: 'How the powerful one thinks, how the in-between one lives, how the one underneath speaks. Three takes told in full, so a perspective grows out of the comparison instead of being handed to her. Works for essays and DBQs.',
  },
  {
    icon: '🀄',
    cn: '中文底子是主场，不是包袱',
    en: 'Her Chinese background is the home court, not a handicap',
    sub: '讲法国大革命对着戊戌变法看，讲冷战让你说说家里听过的版本 —— 两边视角同时在，反而比美国本地孩子学得透。',
    subEn: 'We pair the French Revolution with the Hundred Days\' Reform, and ask her what the Cold War sounded like at her family table. Two sides at once, often she reads further than American-born classmates.',
  },
  {
    icon: '🗺',
    cn: '先看地图再听人讲',
    en: 'See the map first, then hear the people',
    sub: '配套 Atlas Lab 历史地图系统：从君士坦丁堡到伊斯坦布尔、汉朝同时代的罗马在哪里，因果关系画在地图上，看完一眼记得住。',
    subEn: 'Atlas Lab places 51 events on the map with their causal chains. From Constantinople to Istanbul, or where Rome sat at the same time as the Han, geography first, sticks longer.',
  },
  {
    icon: '🔤',
    cn: '中英文随时切，考点单词金色高亮',
    en: 'Toggle Chinese / English anytime, exam-key words highlighted in gold',
    sub: '想用中文听就中文，想练英文就切英文。AI 说话里的考点词点一下看 IPA + 真人发音，AP 阅读题里要认得的那些词，一边听一边记。',
    subEn: 'Chinese when she wants to understand, English when she wants to practice. Tap a key word for IPA + native audio. The words AP reading tests actually use, heard and read at the same time.',
  },
  {
    icon: '📜',
    cn: '每句话都查得到出处',
    en: 'Every line is traceable to a source',
    sub: '故事严格基于真实史料 + Fact Ledger 校验：「Et tu, Brute」「让他们吃蛋糕」这种以讹传讹的引文，我们会标明白「这是后人加的，不当真话讲」。',
    subEn: 'Stories run on real primary sources with Fact Ledger verification. Famous misquotes like "Et tu, Brute" or "Let them eat cake" get flagged: added by later generations, not taken as real history.',
  },
];

// Hero 文案双语
var HERO_COPY = {
  cn: {
    h1Line1: '她在国内能把唐宋背得倒背如流，',
    h1Line2: '到这边历史课只能拿 B-。',
    sub1Line1: '不是她不努力 —— 是 essay 要的「为什么」「谁吃亏」「你怎么看」，',
    sub1Line2: '国内的历史课里没人这样问过她。',
    sub2Line1: '我们把每段历史拆成 3 个人的视角，从看懂到说得清，',
    sub2Line2: '直到她能写出一段经得起追问的论证。',
    honest: '我们不打包票拿 A —— 我们让她从「背得出」变成「说得清」。分数是副产品，不是承诺。',
    hint: '👇 选一段历史开始。第一次进会先花 30 秒认识你（只存这台设备上）。',
    atlas: '🗺 想先看地图？进入 Atlas Lab →',
  },
  en: {
    h1Line1: 'She could recite the Tang and Song dynasties by heart back in China.',
    h1Line2: 'Now her social-studies grade is a B-.',
    sub1Line1: 'It is not that she is not trying. American essays ask "why", "who paid the cost", "what do you think",',
    sub1Line2: 'questions no one ever asked her in a history class back home.',
    sub2Line1: 'We break each piece of history into 3 people\'s points of view, taking her from understanding to saying it clearly,',
    sub2Line2: 'until she can write an argument that holds up under questioning.',
    honest: 'We don\'t promise A grades. We help her go from "able to recite" to "able to explain". Grades are a byproduct, not a promise.',
    hint: '👇 Pick a piece of history to start. First time in, you\'ll spend 30 seconds telling us about her (stored only on this device).',
    atlas: '🗺 Want the map first? Open Atlas Lab →',
  },
};

export default function HistoryHome() {
  var router = useRouter();
  // 全局 englishLevel 跟单课页共享 (lib/history-storage.js)，方便切换状态延续
  var [englishLevel, setEnglishLevelState] = useState('balanced');
  useEffect(function() { setEnglishLevelState(loadEnglishLevel()); }, []);
  var isEnglish = englishLevel === 'high';
  var hero = isEnglish ? HERO_COPY.en : HERO_COPY.cn;
  var onSetLang = function(v) { setEnglishLevelState(v); saveEnglishLevel(v); };

  // 向后兼容：旧直链 /history?topicId=X（Gate-3 smoke / 文档 / 书签）→ 重定向到 /history/X
  useEffect(function() {
    if (typeof window === "undefined") return;
    try {
      var p = new URLSearchParams(window.location.search);
      var legacy = p.get("topicId");
      if (legacy) {
        var rest = [];
        p.forEach(function(v, k) { if (k !== "topicId") rest.push(encodeURIComponent(k) + "=" + encodeURIComponent(v)); });
        var qs = rest.length ? "?" + rest.join("&") : "";
        router.replace("/history/" + encodeURIComponent(legacy) + qs);
      }
    } catch (e) {}
  }, []);

  // 选课流程：首页 → 对应 Atlas (地图预热 + 人物 + 因果) → 「深度学」嵌入式进对话。
  // 11 门暂无 Atlas 视图的课 fallback 直接进 /history/<id> 学习,等 Atlas view 建好后自动走主路径。
  var goTopic = function(topicId) {
    if (!topicId) return;
    var viewId = findViewIdByTopicId(topicId);
    if (viewId) {
      router.push('/atlas-lab/' + viewId);
    } else {
      router.push('/history/' + encodeURIComponent(topicId));
    }
  };

  return (
    <>
      <Head>
        <title>{isEnglish ? 'History · Three voices, one event | Know U. Learning' : '历史 · 三个视角看同一件事 | Know U. Learning'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: globalCSS }} />
      <style dangerouslySetInnerHTML={{ __html: `
        body { background: ${HC.bg}; }
        .h-page { min-height: 100vh; background: ${HC.bg}; font-family: ${FONT}; }
        .h-container { max-width: 920px; margin: 0 auto; padding: 0 12px 80px; }
        @media (min-width: 640px) { .h-container { padding: 0 20px 80px; } }
      ` }} />

      <div className="h-page">
        <BrandNavBar
          activeTab="history"
          stats={{ xp: 0, total: 0, correct: 0 }}
          user={null}
          onUserCenterClick={function() {}}
        />

        <div className="h-container">
          {/* ── 卖点 Hero (A+B 合并:成绩单痛点 + 新移民妈妈共情 + 解法) ── */}
          <div style={{
            marginTop: 16, marginBottom: 18,
            padding: "24px 22px",
            background: HC.parchmentHi,
            border: "1px solid " + HC.parchmentLo,
            borderRadius: 18,
            position: 'relative',
          }}>
            {/* 顶部右上角 EN/中 切换(跟单课页 TopicHero 同一组按钮风格) */}
            <div style={{position: 'absolute', top: 14, right: 14, display: 'flex', gap: 4}}>
              {[
                { v: 'high',     l: 'EN', title: 'Switch to English' },
                { v: 'balanced', l: '中',  title: '切换中文' },
              ].map(function(opt) {
                var active = englishLevel === opt.v || (opt.v === 'balanced' && englishLevel !== 'high');
                return (
                  <button key={opt.v} onClick={function() { onSetLang(opt.v); }} title={opt.title} style={{
                    padding: '3px 10px',
                    background: active ? HC.accent : 'transparent',
                    color: active ? '#fff8e8' : HC.textSec,
                    border: '1px solid ' + (active ? HC.accent : HC.border),
                    borderRadius: 999, fontSize: 11, fontWeight: 600,
                    cursor: 'pointer', fontFamily: 'inherit',
                    opacity: active ? 1 : 0.7,
                  }}>{opt.l}</button>
                );
              })}
            </div>

            <h1 style={{
              margin: "0 0 10px", fontFamily: FONT_DISPLAY,
              fontSize: 24, lineHeight: 1.3, color: HC.ink,
              paddingRight: 70,
            }}>
              {hero.h1Line1}<br/>{hero.h1Line2}
            </h1>
            <p style={{
              margin: "0 0 6px", fontSize: 14, color: HC.text, lineHeight: 1.65,
            }}>
              {hero.sub1Line1}<br/>{hero.sub1Line2}
            </p>
            <p style={{
              margin: "0 0 18px", fontSize: 13.5, color: HC.text, opacity: 0.85, lineHeight: 1.6,
            }}>
              {hero.sub2Line1}<br/>{hero.sub2Line2}
            </p>

            <div style={{display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))"}}>
              {SELLING_POINTS.map(function(p, i) {
                return (
                  <div key={i} style={{
                    display: "flex", gap: 10,
                    padding: "12px 14px",
                    background: HC.card,
                    border: "1px solid " + HC.border,
                    borderRadius: 12,
                    lineHeight: 1.5,
                  }}>
                    <span style={{fontSize: 22, lineHeight: 1.1}}>{p.icon}</span>
                    <div style={{flex: 1, minWidth: 0}}>
                      <div style={{fontWeight: 700, color: HC.ink, fontSize: 13.5, marginBottom: 3}}>{isEnglish ? p.en : p.cn}</div>
                      <div style={{fontSize: 11.5, color: HC.text, opacity: 0.82}}>{isEnglish ? p.subEn : p.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 诚实声明（升学规划专家强烈建议）：不打包票拿 A，否则长期口碑反噬 */}
            <div style={{
              marginTop: 14,
              padding: "8px 12px",
              background: "rgba(0,0,0,0.03)",
              borderRadius: 8,
              fontSize: 11.5, color: HC.textSec, opacity: 0.9, lineHeight: 1.5,
              fontStyle: "italic",
            }}>
              {hero.honest}
            </div>

            <div style={{
              marginTop: 14, fontSize: 12, color: HC.textSec, opacity: 0.85,
              display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8,
            }}>
              <span>{hero.hint}</span>
              <a href="/atlas-lab" style={{
                flex: "0 0 auto",
                padding: "6px 12px",
                background: HC.card, border: "1px solid " + HC.border, borderRadius: 999,
                fontSize: 12, fontWeight: 600, color: HC.accent, textDecoration: "none",
                whiteSpace: "nowrap",
              }}>{hero.atlas}</a>
            </div>
          </div>

          {/* ── Step 10: 会员专属工具区 (自动推荐开关 + Pro 一键全推)。flag off 永不挂载 ── */}
          {ENABLE_HISTORY_PAYWALL && <HistoryProToolsMount />}

          {/* ── 选课：51 门，支持「按年级 / AP / 脉络」三种 Mode 切换 ── */}
          <CourseBrowser onSwitch={goTopic} />
        </div>
      </div>
    </>
  );
}

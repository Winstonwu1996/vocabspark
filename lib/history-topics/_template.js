// ─────────────────────────────────────────────────────────────────
// Topic Minimal Template — 复制改名即可上线
// ─────────────────────────────────────────────────────────────────
//
// 用法：
//   1. 复制本文件 → lib/history-topics/<topic-id>.js（或 inline 到 lib/history-topics.js）
//   2. 替换占位符 <TOPIC_ID> / <TOPIC_TITLE_CN> / <TOPIC_TITLE_EN> / <YEAR> 等
//   3. 在 lib/history-topics.js 顶部 import + 加到 HISTORY_TOPICS object
//   4. 在 TOPIC_REGISTRY 数组加 entry，available: true
//   5. 创建 lib/history-storyboards/<topic-id>.js（参考 lens-author.md）
//   6. 在 lib/history-storyboards/index.js 注册
//
// ⚠️ 5-6 founder 教训 — Renaissance ship build error 后加铁律 (per AUTHORING_PIPELINE 第 11 条):
//   - **不要** 用 Python 脚本拼装 JS 字段 (quote nesting 风险高)
//   - 必须用 Read + Edit 工具逐字段填 — 复制本 template 然后替换占位符
//   - CN/EN 字段内嵌引号 **优先**用「」中文方头括号 (e.g. 「碎片化竞争 vs 大一统」)
//   - **次选** escape \\" (e.g. "... \\"碎片化\\" ...")
//   - **禁止** ASCII " 直接嵌入 outer "..." 字符串 — webpack/SWC parser 会 fail
//   - **commit 前必跑** ./scripts/topic-syntax-check.sh 完整 build 验证
//

// 字段必填依据（不补全会运行时报错）：
//   - title.cn / title.en           pages/history.js:850, 1537 + CompletionScreen
//   - oneLineHook.cn                pages/history.js:1538
//   - hssStandard / difficulty       pages/history.js:1535
//   - estimatedMinutes               pages/history.js:1535
//   - curriculumUnit                 pages/history.js:1535
//   - year                           pages/history.js:1537 + CompletionScreen:128
//   - throughLine                    pages/history.js:2367 (Topic 列表分组)
//   - xpRewards.{base,perVocab/Concept/Application Pass}  pages/history.js:744-748
//   - mustMemorize.vocab[]            CompletionScreen:156, bilingual.js:27, MasteryGate
//   - mustMemorize.concepts[]         CompletionScreen:182, bilingual.js:29, MasteryGate:316
//   - masteryChecks.required[]        MasteryGate:286
//   - familyQuestion.{closingNarrative,question,callToAction}  CompletionScreen:132,212,213
//
// 选填字段（若缺失 UI 会自动跳过——已加 defensive guard）：
//   - geography                      pages/history.js:1292 (有 guard)
//   - bridgeAnchor                   IntroScreen 选填
//   - primarySources[]               UI 选填
//   - textbookRef                    IntroScreen 选填
//   - conversationTurns              已迁移到 storyboard，留空即可
//
// ─────────────────────────────────────────────────────────────────

export var TOPIC_TEMPLATE = {
  id: "<topic-id>",  // 例如 "renaissance-1500"
  title: {
    en: "<English Title>",        // 例如 "The Renaissance"
    cn: "<中文标题>"               // 例如 "文艺复兴"
  },
  oneLineHook: {
    cn: "<一句话钩子—— 13 岁能立刻理解的画面>"
    // 例：1095 年法国一个老头喊了一嗓子，西欧 10 万人走 4000 公里去抢一座城——4 年后他们做到了
  },
  curriculumUnit: "7th-grade/medieval-europe",   // 或 "medieval-china" / "early-modern-europe" 等
  hssStandard: "HSS-7.X.Y",                      // CA HSS 标准（教材锚点）
  bridgeStandard: "HSS-7.A.B",                   // 桥接到下一个 Topic 的标准（可选）

  // 教材锚点 - "this is my actual schoolwork"
  textbookRef: {
    publisher: "Houghton Mifflin · 《Medieval & Early Modern Times》",
    grade: "7",
    chapter: "<Ch. X Lesson Y>",
    section: "<Lesson Z>",
    page: "<page number>",
    hint: "<一句话引导：'翻到课本 p.X 一起读，AI 这里讲的是 ...'>"
  },

  year: 0,              // 主要事件年份
  yearRange: [0, 0],    // Topic 时间范围
  region: "europe",     // "europe" / "east-asia" / "levant" / "middle-east" 等
  difficulty: 3,        // 1-5，影响 xpRewards.base + Topic 列表显示
  throughLine: "religion-vs-state",  // 见 lib/history-topics.js THROUGH_LINES 表
  estimatedMinutes: 30,

  // ═══════════════════════════════════════════════════════════════
  // XP rewards（Mastery 通关用）
  // base 值: difficulty 2 → 60 / 3 → 100 / 4 → 120 / 5 → 140 XP
  // ═══════════════════════════════════════════════════════════════
  xpRewards: {
    base: 100,
    perVocabPass: 5,
    perConceptPass: 10,
    perApplicationPass: 15,
    optionalChecks: { "teach-back": 30, "counterfactual": 40 },
  },

  // ═══════════════════════════════════════════════════════════════
  // mustMemorize — auto-mark + Mastery Gate 双用
  // 至少 3 vocab + 2 concepts（可加更多但不要超过 8 + 5 否则学生记不住）
  // ═══════════════════════════════════════════════════════════════
  mustMemorize: {
    vocab: [
      // schema: { word, ipa, pos, cn, example, exampleCn, untranslatable, sourceStandards }
      {
        word: "<english-term>",
        ipa: "/.../",
        pos: "n.",  // n. / v. / adj.
        cn: "<中文意思>",
        example: "<English sentence using the word>",
        exampleCn: "<对应的中文例句>",
        untranslatable: false,  // true 表示中文里没有完全对应词
        sourceStandards: [{code: "CA-HSS-7.X.Y", emphasis: "high"}]
      },
      // ... 至少 3 个
    ],
    concepts: [
      // schema: { id, en, ipa, cn, definition }
      {
        id: "<kebab-case-id>",
        en: "<English concept name>",
        ipa: "/.../",
        cn: "<中文翻译>",
        definition: {
          en: "<concise English definition>",
          cn: "<对应中文定义>"
        }
      },
      // ... 至少 2 个
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // Mastery Checks — 通关用
  // 3 类必填: spelling / definition / application
  // ═══════════════════════════════════════════════════════════════
  masteryChecks: {
    required: [
      {
        type: "spelling",
        sampleSize: 3,        // 从 items 随机抽多少个考
        items: [
          { prompt: "<提示句，包含填空>", hint: "<填空形状提示>", answer: "<答案>" },
          // ... 至少 3 个
        ]
      },
      {
        type: "definition",
        items: [
          // 关联 mustMemorize.concepts[].id
          { conceptId: "<concept-id>", prompt: "<问题文本>" },
          // ... 至少 2 个
        ]
      },
      {
        type: "application",
        items: [
          { prompt: "<开放式应用题，结合 lens 内容>" },
          // ... 至少 2 个
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // primarySources — 一手史料锚定（可选但强烈建议）
  // ═══════════════════════════════════════════════════════════════
  primarySources: [
    {
      title: "<史料名 (作者, 年份)>",
      year: 0,
      author: "<作者>",
      excerpt: "<原文摘录或简化版>",
      excerptCn: "<对应中文翻译>",
      note: "<这一段为什么重要的 1-2 行说明>"
    }
  ],

  // ═══════════════════════════════════════════════════════════════
  // familyQuestion — 完成屏 + 家长晚饭桌话题
  // ═══════════════════════════════════════════════════════════════
  familyQuestion: {
    closingNarrative: "<3-5 行长尾叙事：这个 Topic 留下了哪几条线还在今天活着>",
    question: "<家长可以问孩子的问题，可以用 {{userParentWord|爸妈}} 模板>",
    callToAction: "<结尾鼓励，让家长 buy in>"
  }

  // ═══════════════════════════════════════════════════════════════
  // 不需要填的字段（已经迁移到 storyboard）
  // ═══════════════════════════════════════════════════════════════
  // conversationTurns: []  // legacy fallback，留空，runtime 用 storyboard
  // geography: {...}        // 选填——若缺失 GeographySection 自动跳过
  // bridgeAnchor: {...}     // 选填——多维度对照可加
};


// ─────────────────────────────────────────────────────────────────
// 注册 checklist（3 处必改）
// ─────────────────────────────────────────────────────────────────
//
// [ ] 1. lib/history-topics.js
//        - 顶部加: import { TOPIC_TEMPLATE as <TOPIC_VAR_NAME> } from './history-topics/<topic-id>.js';
//          OR: 把整个 TOPIC_TEMPLATE inline 到 lib/history-topics.js（按现有 Crusades / Black Death 风格）
//        - 加到 HISTORY_TOPICS object: '<topic-id>': <TOPIC_VAR_NAME>
//        - TOPIC_REGISTRY 数组加 entry: { id: '<topic-id>', available: true, unit: 'X.Y', order: N, narrativeRequired: true }
//
// [ ] 2. lib/history-storyboards/index.js
//        - import * as <topicCamelCase>Module from './<topic-id>.js';
//        - 加到 STORYBOARDS object: '<topic-id>': <topicCamelCase>Module
//
// [ ] 3. lib/history-storyboards/<topic-id>.js
//        - 创建 storyboard 文件（参考 lens-author.md prompt template + magna-carta-1215.js 模板）
//
// 跑验证: node --check + node --input-type=module 模块 import 测试（见 lens-author.md §IV）
//
// ─────────────────────────────────────────────────────────────────

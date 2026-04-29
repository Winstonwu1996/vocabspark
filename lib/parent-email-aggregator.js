// lib/parent-email-aggregator.js
//
// 跨模块数据聚合 — 把 user_progress 转成 buildSummaryEmail() 期望的 shape
//
// 调用方：pages/api/cron/weekly-parent-benchmark.js
//
// ⚠️ ⚠️ ⚠️ 隐私承诺（绝对不可违反）⚠️ ⚠️ ⚠️
//
// 这份代码的所有 aggregate* 函数**只能从学习统计数据派生**，不能取：
//   ❌ 用户和 AI 的对话内容（conversationLog / transcripts）
//   ❌ 用户的 profile 设置（兴趣、目标、worldview snapshot）
//   ❌ 用户按"累了/没懂/跳过"按钮的次数（escape signals）
//   ❌ 任何能反映用户**个人偏好或情绪**的数据
//
// 只能取：
//   ✅ 完成度（topic completed / not）
//   ✅ Mastery 分数（spelling / definition / application 客观分）
//   ✅ Topic stuckPoint（卡点 — 这是 narrative 给的预设元数据，不是用户输入）
//   ✅ 词汇 wordHistory（哪些词学了，accuracy）
//   ✅ Writing essay 完成数（不取内容）
//
// **理由**：孩子知道"爸妈只看到统计、看不到聊天"才会真信任产品 + 真实跟 AI 说话。
// 任何打破这条承诺的修改都必须先经过 Winston 明确同意。
//
// 见 components/UserCenter.js "🔒 我们对你的隐私承诺" section（孩子可见）
// 见 lib/parent-email-templates.js summary 邮件末尾"关于这份报告"（爸妈可见）
//
// 当前实现：Phase B4 v0 scaffolding —
//   - 函数签名 + 数据 shape 定型
//   - 内部 TODO 标注真实数据来源（待 Winston 提供精确 schema 后填）
//   - 支持 dry-run（无 Supabase service role key 也能跑出 sample）

/**
 * 跨模块周聚合 — 主入口
 *
 * @param {Object} ctx
 *   @prop {Object} user            — Supabase auth user
 *   @prop {Object} progressData    — user_progress.progress_data JSONB 反序列化
 *   @prop {Date}   weekStart       — 一周开始（默认今天 -7 天）
 *   @prop {Date}   weekEnd         — 一周结束（默认今天）
 *   @prop {Object} [supabase]      — admin 客户端（可选，用于查跨表数据）
 *
 * @returns {Object} {
 *     hasActivity: bool,
 *     studentName, dateRange,
 *     vocab?: {...}, history?: {...}, writing?: {...},
 *     cognitiveHighlight?: string, concerns?: string,
 *     lastActivity?: { date, topic, completion },  // wakeup 用
 *     lastTopicHook?: string,                       // wakeup 用
 *   }
 */
export async function aggregateWeeklyForParent(ctx) {
  ctx = ctx || {};
  var user = ctx.user || {};
  var progress = ctx.progressData || {};
  var weekStart = ctx.weekStart || new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  var weekEnd = ctx.weekEnd || new Date();

  var meta = user.user_metadata || {};
  var studentName = meta.name || meta.userName || '孩子';
  var dateRange = formatDateRange(weekStart, weekEnd);

  // 各模块聚合
  var vocab = aggregateVocab(progress, weekStart, weekEnd);
  var history = aggregateHistory(progress, weekStart, weekEnd);
  var writing = aggregateWriting(progress, weekStart, weekEnd);

  // 综合判断：本周有无活动
  var hasActivity = (
    (vocab && vocab.newCount > 0) ||
    (history && history.topicTitle) ||
    (writing && writing.summary)
  );

  if (hasActivity) {
    return {
      hasActivity: true,
      studentName: studentName,
      dateRange: dateRange,
      vocab: vocab,
      history: history,
      writing: writing,
      cognitiveHighlight: deriveCognitiveHighlight(progress, vocab, history, writing),
      concerns: deriveConcerns(progress, vocab, history, writing),
    };
  }

  // 无活动：拿 last activity 信息给 wakeup 邮件用
  var lastActivity = deriveLastActivity(progress);
  return {
    hasActivity: false,
    studentName: studentName,
    dateRange: dateRange,
    lastActivity: lastActivity,
    lastTopicHook: lastActivity ? deriveLastTopicHook(lastActivity.topicId) : null,
  };
}

// ── Vocab 聚合 ──
function aggregateVocab(progress, weekStart, weekEnd) {
  var vocab = progress.vocabData || progress.vocab || {};
  // TODO Phase B4 v1：精确数据 schema 待 Winston 确认
  //   - 本周新学词数（filter wordHistory by date）
  //   - 本周复习准确率（review records）
  //   - 这周最难的词（最低 accuracy + 最近 review）
  //   - hardestStatus: '已掌握' / '还需复习'
  if (!vocab || !vocab.wordHistory) return null;

  var wordHistory = vocab.wordHistory || [];
  var thisWeek = wordHistory.filter(function(w) {
    if (!w.firstSeen) return false;
    var d = new Date(w.firstSeen);
    return d >= weekStart && d <= weekEnd;
  });

  if (thisWeek.length === 0) return null;

  // 简单 accuracy 计算（如果 schema 含 attempts/correct）
  var totalAttempts = 0;
  var totalCorrect = 0;
  thisWeek.forEach(function(w) {
    totalAttempts += w.attempts || 0;
    totalCorrect += w.correct || 0;
  });
  var accuracy = totalAttempts > 0 ? Math.round(totalCorrect / totalAttempts * 100) : null;

  return {
    newCount: thisWeek.length,
    accuracy: accuracy,
    hardest: thisWeek.length > 0 ? thisWeek[0].word : null,
    hardestStatus: null,
    suggestedTopic: null,
  };
}

// ── History 聚合 ──
function aggregateHistory(progress, weekStart, weekEnd) {
  var history = progress.historyData || {};
  var completed = history.completedTopics || {};

  // 找本周完成的 Topic
  var thisWeekTopics = Object.keys(completed).filter(function(tid) {
    var t = completed[tid];
    if (!t.completedAt) return false;
    var d = new Date(t.completedAt);
    return d >= weekStart && d <= weekEnd;
  });

  if (thisWeekTopics.length === 0) return null;

  // 取最新完成的 Topic
  var topicId = thisWeekTopics.sort(function(a, b) {
    return new Date(completed[b].completedAt) - new Date(completed[a].completedAt);
  })[0];

  var t = completed[topicId];

  // TODO Phase B4 v1：从 narrative §11 思考问题动态生成"晚饭桌问题"
  //   现在用 stub Topic-specific 题库 — 后续可改 Opus 实时生成
  var ddTable = getDinnerTableQuestions(topicId);

  return {
    topicTitle: getTopicTitle(topicId) || topicId,
    mastery: t.masteryScore || t.score || null,
    stuckPoint: t.stuckPoint || null,
    q1: ddTable[0] || null,
    q2: ddTable[1] || null,
  };
}

// ── Writing 聚合 ──
function aggregateWriting(progress, weekStart, weekEnd) {
  var writing = progress.writingData || progress.writing || {};
  // TODO Phase B4 v1：精确 schema 待确认
  //   - 本周完成的 essay 数
  //   - AI 给的关键反馈
  if (!writing || !writing.essays) return null;

  var thisWeekEssays = (writing.essays || []).filter(function(e) {
    if (!e.completedAt) return false;
    var d = new Date(e.completedAt);
    return d >= weekStart && d <= weekEnd;
  });

  if (thisWeekEssays.length === 0) return null;

  return {
    summary: '本周完成 ' + thisWeekEssays.length + ' 篇练习。'
      + (thisWeekEssays[0].topic ? '最近一篇主题：' + thisWeekEssays[0].topic + '。' : ''),
  };
}

// ── 认知亮点（Phase B4 v2 — 严格遵守隐私承诺）──
function deriveCognitiveHighlight(progress, vocab, history, writing) {
  // ⚠️ 隐私约束：**绝对不能调 Opus 分析 transcript**——那会违反"爸妈看不到聊天内容"的承诺。
  //
  // Phase B4 v2 实现路径（合规版）：
  //   ✅ 从 mastery 分数 spike 派生（如这周分数 90+ 比上周 70+ 高 → "认知突破"）
  //   ✅ 从词汇 accuracy 拉升派生（连续几周 70% → 突然 90% → "稳定期突破"）
  //   ✅ 从 Topic 完成速度派生（一般 2 周完成的 Topic 这周 3 天完成 → "投入期"）
  //   ❌ 不从 transcript 取关键词
  //   ❌ 不从 user_metadata 取兴趣/profile
  //
  // 当前返回 null（不渲染这一节），等 Phase B4 v2 实现合规派生
  return null;
}

// ── 关注事项（Phase B4 v2）──
function deriveConcerns(progress, vocab, history, writing) {
  if (history && history.stuckPoint) {
    return '她在 ' + history.stuckPoint + ' 卡了——可以晚饭桌再问她一次看是不是真懂。';
  }
  return null;
}

// ── 最后一次活动（wakeup 用）──
function deriveLastActivity(progress) {
  var history = progress.historyData || {};
  var completed = history.completedTopics || {};
  var lastTopicId = history.lastTopicId;

  // 找最近一次活动（不只看 completedTopics，还看 inProgress）
  var inProgress = history.inProgress || {};
  var candidates = [];

  Object.keys(completed).forEach(function(tid) {
    var t = completed[tid];
    if (t.completedAt) candidates.push({ topicId: tid, date: t.completedAt, completion: 100, status: 'completed' });
  });
  Object.keys(inProgress).forEach(function(tid) {
    var ip = inProgress[tid];
    if (ip.savedAt) candidates.push({
      topicId: tid,
      date: ip.savedAt,
      completion: ip.turnIndex ? Math.round(ip.turnIndex / 13 * 100) : 0,
      status: 'in-progress',
    });
  });

  if (candidates.length === 0) return null;

  candidates.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
  var last = candidates[0];

  return {
    topicId: last.topicId,
    topic: getTopicTitle(last.topicId) || last.topicId,
    date: new Date(last.date).toLocaleDateString('zh-CN'),
    completion: last.completion,
  };
}

// ── 上个 Topic 的回归 hook（取 narrative §11 思考题或 hook） ──
function deriveLastTopicHook(topicId) {
  // TODO Phase B4 v2：从 lib/history-narratives/{topicId}.md §11 思考问题取一题
  // 现在用 hard-coded 表（可读）
  var hooks = {
    'magna-carta-1215': '你之前那个"贵族签字保护的是谁的特权"的问题，下次写 essay 可能用得上 — 要不周末花 20 分钟收尾？',
    'crusades-1099': '你之前那个"Saladin 不屠耶路撒冷是政治算计还是高贵骑士道"的问题，下次写 essay 可能用得上 — 要不周末花 20 分钟收尾？',
    'tang-song-china': '你之前那个"中国唐宋为啥没有 Magna Carta"的问题——记得我们说的"科举 vs 贵族"吗？',
  };
  return hooks[topicId] || null;
}

// ── Topic title 简单查表（避免要 import 重 lib）──
function getTopicTitle(topicId) {
  var t = {
    'magna-carta-1215': 'Magna Carta',
    'crusades-1099': 'Crusades',
    'tang-song-china': '唐宋盛世',
  };
  return t[topicId];
}

// ── 晚饭桌问题表（Phase B4 v0 stub - 每个 Topic 手写 2 题） ──
// TODO Phase B4 v1：从 narrative §11 动态取，或调 Opus 生成
function getDinnerTableQuestions(topicId) {
  var dinnerQuestions = {
    'magna-carta-1215': [
      {
        question: '为什么贵族敢逼国王签字？',
        target: '国王打仗输了 + 税收过重 + 教皇支持削弱（1213 教皇救场前贵族刚有窗口）',
      },
      {
        question: '中国宋朝皇帝能这样被逼吗？',
        target: '不能 — 制度结构差别（天子不可质疑，没独立宗教权威能制衡）',
      },
    ],
    'crusades-1099': [
      {
        question: '1095 年法国老头喊一嗓子 10 万人就走 4000 公里——什么承诺最关键？',
        target: '罪全免 / plenary indulgence — 死了直接进天堂',
      },
      {
        question: 'Saladin 1187 不屠耶路撒冷只是政治算计还是真有"骑士风度"？',
        target: '没标准答案 — 看她能不能给两边视角（Walter Scott 浪漫化 vs 政治克制）',
      },
    ],
  };
  return dinnerQuestions[topicId] || [];
}

// ── 日期格式化 ──
function formatDateRange(start, end) {
  var fmt = function(d) {
    return (d.getMonth() + 1) + ' 月 ' + d.getDate() + ' 日';
  };
  return fmt(start) + ' - ' + fmt(end);
}

// ─── history-engine: ConceptReview / 考前复习笔记屏 ────────────────────
// 5-26 新增 phase 'notebook': Receipt 提交后, Mastery Gate 之前先看一遍考点卡。
// 解决用户反馈「考点不是应该学完后有复习笔记然后再考吗」 —— notebook.mainConcepts × 8 数据
// 原本只在 CompletionScreen (考完通关后) 显示, 位置颠倒。
//
// 本组件抽自 CompletionScreen 的 nbSection==='concepts' 段, **只做 concepts 卡 (不带 DBQ tab)**。
// 通关屏的 DBQ tab 仍在 CompletionScreen 内,等下一轮再判断是否要合并。
//
// props:
//   topicId, isEnglish, onContinue (点「我看过了, 开始考核」时回调)
import React from 'react';
import { FONT_DISPLAY } from '../../lib/theme';
import { hasNotebook, loadNotebook } from '../../lib/history-storyboards/notebooks';
// loadStoryboard 暂时不需要 (用户反馈 #3: 折叠区暂移, 见下方注释)
// import { loadStoryboard } from '../../lib/history-storyboards';
import { HC } from './theme';

// ─── LensProgress: 显示该 topic 全部 lens 的学习进度 + 引导继续学未学的视角 ─────
// (用户反馈 #4: 学完 1 lens 不应直接当全课完, 考点 cross-lens 学生没全学到)
function LensProgress(props) {
  var topicLenses = props.topicLenses || [];
  if (topicLenses.length <= 1) return null;
  var effectiveLensId = props.effectiveLensId;
  var lensCompletion = props.lensCompletion || {}; // { lensId: true/false (有 receipt?) }
  var onSwitchLens = props.onSwitchLens;
  var isEn = !!props.isEnglish;

  var doneCount = topicLenses.filter(function(l) { return lensCompletion[l.id]; }).length;
  var allDone = doneCount >= topicLenses.length;

  return (
    <div style={{
      marginBottom: 16, padding: "16px 18px",
      background: allDone ? "rgba(34,160,107,0.08)" : HC.parchmentHi,
      border: "1px solid " + (allDone ? HC.green : HC.parchmentLo),
      borderRadius: 14,
    }}>
      <div style={{display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap"}}>
        <span style={{fontSize: 18}}>{allDone ? "✅" : "🎭"}</span>
        <span style={{fontFamily: FONT_DISPLAY, fontSize: 15, fontWeight: 700, color: HC.ink, flex: 1}}>
          {isEn
            ? (allDone ? "All 3 perspectives done. The full picture is yours now." : "Your progress through this topic's 3 perspectives")
            : (allDone ? "你已经走完 3 个视角 — 现在这门课的全貌都在你手里了" : "这门课的 3 个视角进度")}
        </span>
        <span style={{fontSize: 12, color: HC.textSec, fontWeight: 600}}>
          {doneCount} / {topicLenses.length}
        </span>
      </div>
      <div style={{display: "flex", flexDirection: "column", gap: 6}}>
        {topicLenses.map(function(lens) {
          var done = !!lensCompletion[lens.id];
          var isCurrent = lens.id === effectiveLensId;
          var nameCn = lens.nameCn || (lens.name && lens.name.cn) || lens.name || lens.id;
          var nameEn = lens.nameEn || (lens.name && lens.name.en) || lens.name || lens.id;
          if (typeof nameCn === "object") nameCn = nameCn.cn || nameCn.en;
          if (typeof nameEn === "object") nameEn = nameEn.en || nameEn.cn;
          // 5-26 (Codex P0-1): lens.role 在很多 topic 是 {cn, en} 对象 (如 magna-carta L973),
          // 直接渲染对象会触发 "Objects are not valid as a React child" → React 崩白屏。
          var roleObj = lens.role;
          var roleEn = typeof roleObj === "object" && roleObj ? (roleObj.en || roleObj.cn || "") : (roleObj || "");
          var roleCn = typeof roleObj === "object" && roleObj ? (roleObj.cn || roleObj.en || "") : (roleObj || "");
          var ptag = lens.perspectiveTag;
          var ptagText = typeof ptag === "object" && ptag ? (isEn ? (ptag.en || ptag.cn || "") : (ptag.cn || ptag.en || "")) : (ptag || "");
          return (
            <div key={lens.id} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "10px 12px",
              background: done ? "rgba(34,160,107,0.06)" : (isCurrent ? "rgba(196,107,48,0.06)" : "rgba(255,255,255,0.6)"),
              border: "1px solid " + (done ? HC.green : (isCurrent ? HC.accent : HC.border)),
              borderRadius: 10,
            }}>
              <span style={{fontSize: 16, width: 22, textAlign: "center"}}>
                {done ? "✓" : (isCurrent ? "📖" : "🔒")}
              </span>
              <div style={{flex: 1, minWidth: 0}}>
                <div style={{fontSize: 13, fontWeight: 600, color: HC.ink}}>
                  {isEn ? nameEn : nameCn}
                  {isCurrent && (
                    <span style={{
                      marginLeft: 6, fontSize: 9, padding: "1px 6px",
                      background: HC.accent, color: "#fff", borderRadius: 999,
                      fontWeight: 700, letterSpacing: 0.5,
                    }}>{isEn ? "JUST DONE" : "刚学完"}</span>
                  )}
                </div>
                <div style={{fontSize: 11, color: HC.textSec, opacity: 0.85, marginTop: 1}}>
                  {isEn ? roleEn : (ptagText || roleCn)}
                </div>
              </div>
              {!done && !isCurrent && onSwitchLens && (
                <button onClick={function() { onSwitchLens(lens.id); }} style={{
                  padding: "6px 12px",
                  background: HC.card, border: "1px solid " + HC.accent, color: HC.accent,
                  borderRadius: 999, fontSize: 12, fontWeight: 600, cursor: "pointer",
                  fontFamily: "inherit", whiteSpace: "nowrap",
                }}>{isEn ? "Switch & learn →" : "切到这个视角 →"}</button>
              )}
            </div>
          );
        })}
      </div>
      {!allDone && (
        <div style={{
          marginTop: 10, padding: "8px 10px",
          background: "rgba(0,0,0,0.04)", borderRadius: 8,
          fontSize: 11.5, color: HC.textSec, lineHeight: 1.55, fontStyle: "italic",
        }}>
          {isEn
            ? "Heads up: the quiz covers concepts from all 3 perspectives. If you haven't walked them all yet, some questions may need self-study from the notes below."
            : "提示:考核题目覆盖全部 3 个视角的考点。还没学完的视角,有些题可能要靠下面的笔记自学。"}
        </div>
      )}
    </div>
  );
}

export function ConceptReview(props) {
  var topicId = props.topicId;
  var isEnglish = !!props.isEnglish;
  var notebookData = (topicId && hasNotebook(topicId)) ? loadNotebook(topicId) : null;

  // notebook 缺失时直接给一个能继续的 fallback (不阻塞考核)
  if (!notebookData || !notebookData.mainConcepts || notebookData.mainConcepts.length === 0) {
    return (
      <div style={{maxWidth: 720, margin: "20px auto", padding: "24px 20px", background: HC.parchmentHi, border: "1px solid " + HC.parchmentLo, borderRadius: 14, textAlign: "center"}}>
        <div style={{fontSize: 14, color: HC.textSec, marginBottom: 14, lineHeight: 1.6}}>
          {isEnglish ? "(No review notes for this lesson yet — go straight to the quiz.)" : "（这一课暂无复习笔记 —— 直接进考核就行。）"}
        </div>
        <button onClick={props.onContinue} style={ctaBtn(true)}>
          {isEnglish ? "Start the quiz ✏️" : "开始考核 ✏️"}
        </button>
      </div>
    );
  }

  return (
    <div style={{maxWidth: 720, margin: "20px auto", padding: "0 4px"}}>
      {/* Lens 进度引导 — 用户反馈 #4: 学完 1 lens 不该当全课完, 让用户能继续切到其他视角 */}
      <LensProgress
        topicLenses={props.topicLenses}
        effectiveLensId={props.effectiveLensId}
        lensCompletion={props.lensCompletion}
        onSwitchLens={props.onSwitchLens}
        isEnglish={isEnglish}
      />

      {/* 标题区 */}
      <div style={{padding: "18px 18px 14px", background: HC.parchmentHi, border: "1px solid " + HC.parchmentLo, borderRadius: 14, marginBottom: 14}}>
        <div style={{display: "flex", alignItems: "center", gap: 10, marginBottom: 8}}>
          <span style={{fontSize: 24}}>📒</span>
          <span style={{fontFamily: FONT_DISPLAY, fontSize: 18, fontWeight: 700, color: HC.ink}}>
            {isEnglish ? "Review notes — before the quiz" : "考前复习笔记 — 翻一遍再考"}
          </span>
        </div>
        <div style={{fontSize: 12.5, color: HC.text, opacity: 0.85, lineHeight: 1.55}}>
          {isEnglish
            ? "These are the concepts the quiz will touch. Skim what you remember. No rush."
            : "下面是这一课的考点。看一遍你记得的部分。不急。"}
        </div>
      </div>

      {/* 考点卡（concepts only — 抽自 CompletionScreen L268-376） */}
      {notebookData.mainConcepts.map(function(card, i) {
        var isStory = card.storyAnchor && card.storyAnchor.covered;
        var freqColors = {
          highest: {bg: '#ffe0e0', color: '#c00'},
          high:    {bg: '#fff3d6', color: '#a06800'},
          mid:     {bg: '#e0ecff', color: '#2050a0'},
          low:     {bg: '#f0f0f0', color: '#666'},
        };
        var fc = freqColors[card.examFrequency] || freqColors.mid;
        return (
          <div key={i} style={{
            background: 'white', border: '1px solid ' + HC.border,
            borderRadius: 12, padding: '16px 18px', marginBottom: 10,
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
          }}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, paddingBottom: 8, borderBottom: '1px solid ' + HC.border}}>
              <div>
                <div style={{fontSize: 16, fontWeight: 700, color: HC.ink}}>
                  {isEnglish ? card.termEn : card.termCn}
                </div>
                <div style={{fontSize: 11.5, color: HC.textSec, marginTop: 2}}>
                  {isEnglish ? card.termCn : card.termEn}
                </div>
                {card.standardRef && card.standardRef.length > 0 && (
                  <div style={{fontSize: 10.5, color: HC.textSec, opacity: 0.75, marginTop: 2}}>
                    {card.standardRef.join(' · ')}
                  </div>
                )}
              </div>
              <span style={{
                fontSize: 10, padding: '3px 8px', borderRadius: 999,
                fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5,
                background: fc.bg, color: fc.color, whiteSpace: 'nowrap',
              }}>{card.examFrequency}</span>
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              fontSize: 11, padding: '3px 8px', borderRadius: 5, marginBottom: 8,
              background: isStory ? '#e8f5e8' : '#fef4e6',
              color: isStory ? '#2a7d2a' : '#a05a00',
              fontWeight: 600,
            }}>
              {isStory
                ? (isEnglish ? '📖 Covered in story' : '📖 故事已覆盖')
                : (isEnglish ? '📚 Mini-lesson' : '📚 独立讲解')}
              {isStory && card.storyAnchor.lens && (
                <span style={{opacity: 0.8, fontWeight: 400}}>· {card.storyAnchor.lens}</span>
              )}
            </div>
            <div style={{fontSize: 13.5, color: HC.text, lineHeight: 1.65, whiteSpace: 'pre-wrap'}}>
              {isStory
                ? (isEnglish ? card.storyAnchor.xiaoweiNote.en : card.storyAnchor.xiaoweiNote.cn)
                : (isEnglish ? card.standaloneText.en : card.standaloneText.cn)}
            </div>
            {/* 5-26 (用户反馈 #3): 暂移除「看小 U 读到的原文节选」折叠区 —— */}
            {/* notebook storyAnchor.nodeIds 用「huizong-N4」全名格式, storyboard 节点 id 是 */}
            {/* 「hz-n4」 缩写格式, 字段名也错 (n.nodeId vs n.id, node.bodyCn vs node.content.cn)。*/}
            {/* 51 课 dead-since-day-one, 永远显示「暂无对应节选」。schema 统一是 P1 大改。 */}
            {!isStory && card.xiaoweiNote && (
              <div style={{
                background: '#fffbe8', borderLeft: '3px solid #f0c040',
                padding: '10px 14px', marginTop: 10, borderRadius: '0 8px 8px 0',
                fontSize: 13, color: '#5c4a10',
              }}>
                <div style={{fontSize: 10.5, fontWeight: 700, opacity: 0.7, marginBottom: 4}}>
                  {isEnglish ? '📝 Xiao U\'s note:' : '📝 小 U 的批注：'}
                </div>
                {isEnglish ? card.xiaoweiNote.en : card.xiaoweiNote.cn}
              </div>
            )}
          </div>
        );
      })}

      {/* 底部 CTA */}
      <div style={{
        marginTop: 18, padding: "18px",
        background: HC.parchmentHi, border: "1px solid " + HC.parchmentLo,
        borderRadius: 14, textAlign: "center",
      }}>
        <div style={{fontSize: 12, color: HC.textSec, marginBottom: 10, lineHeight: 1.5}}>
          {isEnglish ? "Looked them all over? Time to test what stuck." : "翻过了吗？看哪些记住了。"}
        </div>
        <button onClick={props.onContinue} style={ctaBtn(true)}>
          {isEnglish ? "I've looked — start the quiz ✏️" : "我看过了，开始考核 ✏️"}
        </button>
      </div>
    </div>
  );
}

function ctaBtn(enabled) {
  return {
    background: enabled ? HC.accent : "rgba(0,0,0,0.18)",
    color: "#fff8e8",
    border: "none",
    borderRadius: 999,
    padding: "12px 28px",
    fontSize: 14,
    fontWeight: 600,
    cursor: enabled ? "pointer" : "default",
    fontFamily: "inherit",
  };
}

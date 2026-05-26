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
import { loadStoryboard } from '../../lib/history-storyboards';
import { HC } from './theme';

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
            ? "These are the concepts the quiz will touch. Skim what you remember; tap any card to expand the source passage. No rush."
            : "下面是这一课的考点。看一遍你记得的部分；点卡片右下角可以展开故事原文。不急。"}
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
            {isStory && card.storyAnchor && card.storyAnchor.nodeIds && card.storyAnchor.nodeIds.length > 0 && (
              <details style={{marginTop: 10}}>
                <summary style={{cursor: 'pointer', color: HC.teal, fontSize: 12.5, fontWeight: 600, userSelect: 'none', listStyle: 'none', display: 'flex', alignItems: 'center', gap: 4}}>
                  <span style={{fontSize: 10, opacity: 0.7}}>▶</span>
                  {isEnglish ? '📖 Read the story passage' : '📖 看小 U 读到的原文节选'}
                </summary>
                <div style={{marginTop: 8, borderTop: '1px dashed #e0e0d8', paddingTop: 10}}>
                  {(function() {
                    try {
                      var nodes = loadStoryboard(topicId, card.storyAnchor.lens);
                      var matched = (nodes || []).filter(function(n) { return card.storyAnchor.nodeIds.indexOf(n.nodeId) !== -1; });
                      if (!matched.length) return React.createElement('div', {style: {fontSize: 12, color: HC.textSec, fontStyle: 'italic'}}, isEnglish ? 'Passage not found.' : '暂无对应节选。');
                      return matched.map(function(node, ni) {
                        var body = isEnglish ? (node.bodyEn || '') : (node.bodyCn || '');
                        var preview = body.slice(0, 300);
                        var truncated = body.length > 300;
                        return (
                          <div key={ni} style={{marginBottom: ni < matched.length - 1 ? 14 : 0}}>
                            <div style={{fontSize: 11.5, fontWeight: 700, color: HC.teal, marginBottom: 5, display: 'flex', alignItems: 'center', gap: 6}}>
                              <span>{isEnglish ? node.titleEn : node.titleCn}</span>
                              <span style={{opacity: 0.45, fontWeight: 400, fontSize: 10.5, fontFamily: 'monospace'}}>{node.nodeId}</span>
                            </div>
                            <div style={{
                              fontSize: 12.5, color: HC.text, lineHeight: 1.7,
                              whiteSpace: 'pre-wrap',
                              background: '#f8f6f0',
                              borderRadius: 8,
                              padding: '10px 12px',
                              borderLeft: '3px solid ' + HC.teal,
                            }}>
                              {preview}{truncated && <span style={{opacity: 0.5}}>…</span>}
                            </div>
                          </div>
                        );
                      });
                    } catch(e) { return null; }
                  })()}
                </div>
              </details>
            )}
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

// ─── Conversation Stream + Source Card ─────────────────────────────
// 抽离自 pages/history.js（Day 4-5 重构 Stage 3）
//
// ConversationStream:
//   - 13 轮对话主流。AI / user 消息泡泡，史料卡触发，地图轮的"看地图"按钮
//   - 输入栏 (textarea + VoiceInputButton + 发送) + PEEL 引导 + Cmd+Enter 发送
//   - "继续 →" 按钮（AI 单方向轮）
//   - "开始记忆考核" 按钮（13 轮跑完）
//   - 自动滚动到底（双保险：scrollIntoView + window.scrollTo）
//
// SourceCard:
//   - 史料卡（C7 source / source-tang-code 触发），由 ConversationStream 内联渲染
//
// Props 接口（设计为可同时被 pages/history.js 和 AtlasLabPage embed mode 使用）：
//   topic, conversationLog, turnIndex, aiStreaming, aiThinking, error, userInput,
//   onInputChange, onSubmit, onAdvance, onStartMastery, onTermClick, onMustClick,
//   onJumpToMap
import React, { useEffect, useRef } from 'react';
import { HC } from './theme';
import { renderBilingualText } from './bilingual';
import { VoiceInputButton } from '../VoiceInputButton';

// ─── Source Card（史料卡） ─────────────────────────────────────────
export function SourceCard(props) {
  var src = props.source;
  if (!src) return null;
  return (
    <div className="source-card">
      <div className="src-title">📜 {src.title.cn} · {src.title.en}</div>
      <div className="src-en">{src.enSimplified || src.en}</div>
      <div className="src-cn">{src.cnGloss}</div>
      {src.keyTerms && src.keyTerms.length > 0 && (
        <div className="key-terms">
          {src.keyTerms.map(function(t, i) {
            return (
              <span key={i} className="term" title={t.cn + " · " + t.etym}>
                {t.word} → {t.cn}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Conversation Stream ───────────────────────────────────────────
export function ConversationStream(props) {
  var topic = props.topic;
  var turnIndex = props.turnIndex;
  var log = props.conversationLog;
  var endRef = useRef(null);

  // 强制 auto-scroll — 双保险：scrollIntoView + window.scrollTo 兜底
  useEffect(function() {
    var doScroll = function() {
      if (endRef.current) {
        endRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }
      try {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth"
        });
      } catch (e) {}
    };
    doScroll();
    var t1 = setTimeout(doScroll, 200);
    var t2 = setTimeout(doScroll, 600);
    return function() { clearTimeout(t1); clearTimeout(t2); };
  }, [log.length, props.aiStreaming, props.aiThinking, turnIndex]);

  // 完成所有 13 轮？
  var allDone = turnIndex >= topic.conversationTurns.length;
  var currentTurn = !allDone ? topic.conversationTurns[turnIndex] : null;

  // 当前 AI 轮已经流完了？
  var currentAILogged = currentTurn && log.find(function(e) {
    return e.turn === currentTurn.n && e.role === "ai";
  });

  // 是否在等用户输入：(a) 是 user 占位轮 OR (b) 是 AI 轮已说完且 expectsInput
  var awaitingUserInput = currentTurn && (
    currentTurn.role === "user" ||
    (currentTurn.expectsInput && currentAILogged)
  );

  // 是否当前 AI 轮已完成显示（用于显示"继续"按钮）
  var currentAIDone = !awaitingUserInput && currentAILogged;

  return (
    <div>
      <div className="conv-stream" id="conv-anchor">
        {log.map(function(entry, i) {
          // 史料卡（C7：source / source-tang-code 都触发）
          var isSourceTurn = entry.role === "ai" && (entry.move === "source" || entry.move === "source-tang-code");
          var sourceCard = isSourceTurn ? (
            <SourceCard key={"src-" + i} source={topic.primarySources[0]} />
          ) : null;

          if (entry.role === "user") {
            return (
              <div key={i} className="bubble-row user">
                <div className="bubble user">{entry.content}</div>
                <div className="avatar" style={{background: HC.accentLight}}>🙂</div>
              </div>
            );
          }
          // AI bubble
          var isGeoTurn = entry.move === "geo";
          return (
            <div key={i}>
              <div className="bubble-row ai">
                <div className="avatar">🦉</div>
                <div className={"bubble ai " + (entry.isFallback ? "fallback" : "")}>
                  {renderBilingualText(entry.content, { topic: topic, onTermClick: props.onTermClick, onMustClick: props.onMustClick })}
                </div>
              </div>
              {/* 地图轮 — 加快速跳到地图区域的链接（Winston review #2） */}
              {isGeoTurn && (
                <div className="bubble-row ai" style={{marginTop: 4, marginLeft: 40}}>
                  <button
                    onClick={function() {
                      if (props.onJumpToMap) props.onJumpToMap();
                    }}
                    style={{
                      background: HC.accent,
                      color: "#fff8e8",
                      border: "none",
                      borderRadius: 999,
                      padding: "8px 16px",
                      fontSize: 12.5,
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      boxShadow: "0 2px 8px rgba(196,107,48,0.3)",
                    }}
                  >
                    📍 现在去看地图 ↑
                  </button>
                </div>
              )}
              {sourceCard}
            </div>
          );
        })}

        {/* AI streaming */}
        {props.aiStreaming && (
          <div className="bubble-row ai">
            <div className="avatar">🦉</div>
            <div className="bubble ai">{renderBilingualText(props.aiStreaming, { topic: topic, onTermClick: props.onTermClick, onMustClick: props.onMustClick })}<span style={{opacity: 0.5}}>▌</span></div>
          </div>
        )}

        {/* AI thinking */}
        {props.aiThinking && !props.aiStreaming && (
          <div className="bubble-row ai">
            <div className="avatar">🦉</div>
            <div className="bubble ai">
              <span className="thinking-dots"><span></span><span></span><span></span></span>
            </div>
          </div>
        )}

        {props.error && <div className="error-banner">{props.error}</div>}

        <div ref={endRef}></div>
      </div>

      {/* ── 输入栏 / 继续按钮 / mastery gate 入口 ── */}
      {awaitingUserInput && (
        <div className="input-bar">
          <div className="prompt">{currentTurn.inputPrompt || "你的回答"}</div>

          {/* PEEL 引导（Winston review #4：训练 US 学校的回答框架） */}
          <details className="peel-hint" style={{marginBottom: 6}}>
            <summary style={{
              cursor: "pointer", fontSize: 11.5, color: HC.teal, fontWeight: 600, userSelect: "none"
            }}>💡 想答得像 8 年级 essay？试试 PEEL 框架（点开看）</summary>
            <div style={{
              marginTop: 6, padding: "8px 10px",
              background: HC.tealLight, borderRadius: 8, fontSize: 11.5, lineHeight: 1.6,
              color: HC.text
            }}>
              <strong>P</strong>oint — 你的观点是什么？(I think...)<br/>
              <strong>E</strong>vidence — 用什么证据？(Because... / For example...)<br/>
              <strong>E</strong>xplanation — 为什么这能撑住观点？(This shows that...)<br/>
              <strong>L</strong>ink — 跟今天主题怎么连？(So this matters because...)<br/>
              <span style={{opacity: 0.75, fontStyle: "italic"}}>多用英文，AI 会给更高的认可。短的纯中文也行 — 但慢慢练 P+E 你下次 seminar 就能挂得住。</span>
            </div>
          </details>

          <div className="row" style={{alignItems: "flex-end"}}>
            <textarea
              value={props.userInput}
              onChange={function(e) { props.onInputChange(e.target.value); }}
              placeholder="试试 P (观点) + E (因为...): I think... because..."
              onKeyDown={function(e) {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) props.onSubmit();
              }}
            />
            <VoiceInputButton
              size={44}
              style={{margin: "0 2px"}}
              onTranscript={function(text) {
                props.onInputChange(text);
              }}
            />
            <button
              className="submit"
              disabled={!props.userInput.trim()}
              onClick={props.onSubmit}
            >发送</button>
          </div>
          <div style={{fontSize: 11, color: HC.textSec, marginTop: 4, textAlign: "right"}}>
            <kbd style={{padding: "1px 4px", background: HC.tealLight, borderRadius: 3, fontSize: 10}}>Cmd</kbd>+
            <kbd style={{padding: "1px 4px", background: HC.tealLight, borderRadius: 3, fontSize: 10}}>Enter</kbd> 发送
          </div>
        </div>
      )}

      {currentAIDone && currentTurn && !currentTurn.expectsInput && !currentTurn.autoAdvance && (
        <div className="continue-bar">
          <button className="continue-btn" onClick={props.onAdvance}>继续 →</button>
        </div>
      )}

      {allDone && (
        <div className="continue-bar" style={{flexDirection: "column", gap: 12, padding: "20px 0"}}>
          <div style={{fontSize: 13, color: HC.textSec, textAlign: "center"}}>
            13 轮对话完成 — 现在进入记忆考核。<br/>
            ✏️ 拼写测试 + 概念定义 + 应用题，必过才算完成。
          </div>
          <button className="continue-btn" style={{background: HC.accent, fontSize: 15, padding: "14px 36px"}} onClick={props.onStartMastery}>
            开始记忆考核 ✏️
          </button>
        </div>
      )}
    </div>
  );
}

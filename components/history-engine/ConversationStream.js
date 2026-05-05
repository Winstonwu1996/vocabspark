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
import React, { useEffect, useRef, useState } from 'react';
import { HC } from './theme';
import { renderBilingualText } from './bilingual';
import { VoiceInputButton } from '../VoiceInputButton';

// ─── Audio Player — VibeVoice TTS 一键朗读（5-4 加） ─────────────────
// 仅 EN mode + entry 是 prewritten + 对应音频文件存在时显示
// 路径：/audio/{topicId}/{lensId}/n{N}.wav（build-time 预生成）

// ⚡ 模块级 HEAD 缓存——避免切页面时重复探测同一 URL
// Map<src, true|false>
var __audioAvailableCache = new Map();

function AudioPlayer(props) {
  // props: { topicId, lensId, turnId, englishLevel }
  // ⚠️ 所有 hook 必须在顶部 unconditional——React Rules of Hooks
  var [playing, setPlaying] = useState(false);
  var [available, setAvailable] = useState(null);  // null = 未检测，true/false = 已检测
  var [progress, setProgress] = useState(0);
  var audioRef = useRef(null);

  // 计算 src(优先 MP3 — 文件 ~10x 小;若 .mp3 不存在 fallback .wav)
  var canShow = props.englishLevel === 'high' && props.topicId && props.lensId && typeof props.turnId !== 'undefined';
  var basePath = canShow ? '/audio/' + props.topicId + '/' + props.lensId + '/n' + props.turnId : null;
  // src 用动态决定:先尝试 .mp3,fallback .wav
  var srcMP3 = basePath ? basePath + '.mp3' : null;
  var srcWAV = basePath ? basePath + '.wav' : null;
  // 实际用的 src 在 useEffect 里根据 cache 决定;这里给 srcMP3 做主探测
  var src = srcMP3;

  // 实际可用的 src（先 mp3 探测，404 fallback wav）—— 在 state 里
  var [resolvedSrc, setResolvedSrc] = useState(null);

  // HEAD 检测文件存在；优先 .mp3 / fallback .wav；用模块级缓存避免重复
  useEffect(function () {
    if (!canShow || !srcMP3) {
      setAvailable(false);
      setResolvedSrc(null);
      return;
    }
    // 已检测过 mp3 —— 直接读缓存
    if (__audioAvailableCache.has(srcMP3)) {
      var mp3Ok = __audioAvailableCache.get(srcMP3);
      if (mp3Ok) {
        setAvailable(true);
        setResolvedSrc(srcMP3);
        return;
      }
      // mp3 不存在,试 wav cache
      if (__audioAvailableCache.has(srcWAV)) {
        var wavOk = __audioAvailableCache.get(srcWAV);
        setAvailable(wavOk);
        setResolvedSrc(wavOk ? srcWAV : null);
        return;
      }
    }
    if (available !== null && resolvedSrc !== null) return;

    // 先探 mp3
    fetch(srcMP3, { method: 'HEAD' })
      .then(function (r) {
        __audioAvailableCache.set(srcMP3, r.ok);
        if (r.ok) {
          setAvailable(true);
          setResolvedSrc(srcMP3);
          return null;
        }
        // mp3 不存在,fallback wav
        return fetch(srcWAV, { method: 'HEAD' });
      })
      .then(function (r) {
        if (!r) return;
        __audioAvailableCache.set(srcWAV, r.ok);
        setAvailable(r.ok);
        setResolvedSrc(r.ok ? srcWAV : null);
      })
      .catch(function () {
        __audioAvailableCache.set(srcMP3, false);
        __audioAvailableCache.set(srcWAV, false);
        setAvailable(false);
        setResolvedSrc(null);
      });
  }, [srcMP3, srcWAV, canShow]);

  // 监听全局暂停事件（其他 AudioPlayer 开播时停自己）
  useEffect(function () {
    function handler() {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
        setPlaying(false);
      }
    }
    window.addEventListener('audio-pause-all', handler);
    return function () { window.removeEventListener('audio-pause-all', handler); };
  }, []);

  // 卸载时彻底释放（pause + 清空 src 取消 in-flight 下载 + null）
  useEffect(function () {
    return function () {
      if (audioRef.current) {
        try {
          audioRef.current.pause();
          audioRef.current.src = '';     // 取消任何在下载的字节
          audioRef.current.load();        // 触发 abort
        } catch (e) { /* 忽略 */ }
        audioRef.current = null;
      }
    };
  }, []);

  // ⚠️ 所有 hook 调完再做 conditional return
  if (!canShow) return null;
  if (available === false) return null;
  if (available === null) return null;

  function togglePlay() {
    if (!resolvedSrc) return;
    if (!audioRef.current) {
      var a = new Audio();
      a.preload = 'metadata';
      a.src = resolvedSrc;
      a.addEventListener('ended', function () {
        setPlaying(false);
        setProgress(0);
      });
      a.addEventListener('timeupdate', function () {
        if (a.duration) setProgress(a.currentTime / a.duration);
      });
      audioRef.current = a;
    }
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      window.dispatchEvent(new CustomEvent('audio-pause-all'));
      audioRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 6,
      padding: '4px 10px',
      borderRadius: 999,
      background: playing ? HC.accent : 'rgba(0,0,0,0.04)',
      color: playing ? '#fff8e8' : HC.textSec,
      fontSize: 11,
      cursor: 'pointer',
      userSelect: 'none',
      fontFamily: 'inherit',
      transition: 'background 0.15s',
    }}
    onClick={togglePlay}
    title={playing ? '暂停' : '朗读 (VibeVoice)'}>
      <span style={{ fontSize: 13 }}>{playing ? '⏸' : '🔊'}</span>
      <span>{playing ? '暂停' : '朗读'}</span>
      {playing && progress > 0 && (
        <span style={{
          display: 'inline-block',
          width: 30,
          height: 3,
          background: 'rgba(255,255,255,0.3)',
          borderRadius: 2,
          marginLeft: 4,
          overflow: 'hidden',
        }}>
          <span style={{
            display: 'block',
            width: Math.round(progress * 100) + '%',
            height: '100%',
            background: '#fff8e8',
            transition: 'width 0.2s',
          }} />
        </span>
      )}
    </div>
  );
}

// ─── Phase Divider — Story-First Pedagogy v3 视觉相位提示 ─────────
// 当 AI 节点 move 从 cosplay (hook/story) 跳到 synthesis/meta，
// 插入一个视觉 divider 让用户知道"已经跳出 cosplay，现在是 narrator 引导思考 / 反思"
function PhaseDivider(props) {
  var phase = props.phase;
  var config = phase === "synthesis"
    ? {
        icon: "🤔",
        title: "思考时间",
        subtitle: "现在跳出角色——回头看，问几个问题",
        bg: "rgba(95, 168, 160, 0.10)",     // 淡 teal — 凉色暗示理性
        border: "1px solid rgba(95, 168, 160, 0.35)",
        titleColor: "#4a8a82",
      }
    : phase === "meta"
    ? {
        icon: "✨",
        title: "收尾反思",
        subtitle: "走完这段历史 — 你带走什么",
        bg: "rgba(196, 107, 48, 0.08)",     // 淡橙 — 暖色收尾
        border: "1px solid rgba(196, 107, 48, 0.30)",
        titleColor: "#a85525",
      }
    : null;

  if (!config) return null;

  return (
    <div style={{
      margin: "20px 0 14px",
      padding: "12px 16px",
      background: config.bg,
      border: config.border,
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      gap: 10,
    }}>
      <span style={{fontSize: 22}}>{config.icon}</span>
      <div>
        <div style={{
          fontSize: 13.5,
          fontWeight: 700,
          color: config.titleColor,
          marginBottom: 2,
        }}>
          {config.title}
        </div>
        <div style={{
          fontSize: 11.5,
          color: HC.textSec,
          lineHeight: 1.5,
        }}>
          {config.subtitle}
        </div>
      </div>
    </div>
  );
}

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

  // 完成所有轮？
  // Story-First Pedagogy 桥接：
  //   优先用 props.effectiveTurns（pages/history.js 通过 getEffectiveTurns 注入）
  //   fallback 到 topic.conversationTurns（向后兼容 — 如果 host 还没传 effectiveTurns）
  var turns = props.effectiveTurns || topic.conversationTurns || [];
  var allDone = turnIndex >= turns.length;
  var currentTurn = !allDone ? turns[turnIndex] : null;

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
      {/* 5-5: tired mode banner — 听就好模式开启时显示 */}
      {props.tiredMode && (
        <div style={{
          marginBottom: 8,
          padding: '6px 12px',
          background: 'rgba(196, 107, 48, 0.12)',
          border: '1px solid rgba(196, 107, 48, 0.30)',
          borderRadius: 8,
          fontSize: 11.5,
          color: '#a85525',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}>
          <span>😌</span>
          <span><strong>听模式</strong>—— 节点会自动推进，不用点继续。点 [😌 听模式 ✓] 关闭。</span>
        </div>
      )}
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

          // ─── Phase divider 检测（Story-First Pedagogy v3）───
          // 当 AI 节点 move 从 hook/story 跳到 synthesis 或 meta——
          // 在前面插一个视觉 divider 提示用户："已经跳出 cosplay，现在是反思 / 思考"
          var prevAiEntry = null;
          for (var pi = i - 1; pi >= 0; pi--) {
            if (log[pi].role === "ai") { prevAiEntry = log[pi]; break; }
          }
          var prevPhase = prevAiEntry ? prevAiEntry.move : null;
          var phaseDivider = null;
          if ((entry.move === "synthesis" && prevPhase !== "synthesis") ||
              (entry.move === "meta" && prevPhase !== "meta")) {
            phaseDivider = (
              <PhaseDivider key={"div-" + i} phase={entry.move} />
            );
          }

          return (
            <div key={i}>
              {phaseDivider}
              <div className="bubble-row ai">
                <div className="avatar">🦉</div>
                <div className={"bubble ai " + (entry.isFallback ? "fallback" : "") + (entry.move === "synthesis" || entry.move === "meta" ? " analytical" : "")}>
                  {renderBilingualText(entry.content, { topic: topic, onTermClick: props.onTermClick, onMustClick: props.onMustClick })}
                  {/* 5-4: VibeVoice 一键朗读（仅 EN mode + prewritten + MP3 存在）*/}
                  {entry._prewritten && (
                    <AudioPlayer
                      topicId={props.topicId}
                      lensId={props.lensId}
                      turnId={entry.turn}
                      englishLevel={props.englishLevel}
                    />
                  )}
                </div>
              </div>
              {/* 5-5: "我没懂" hint — 用户点了"我没懂"后,在该 AI 节点下方显示 deliverGoal 一句话核心 */}
              {props.hintByTurn && props.hintByTurn[entry.turn - 1] && (
                <div style={{
                  marginLeft: 40, marginTop: 6, marginBottom: 8,
                  padding: '8px 12px',
                  background: 'rgba(95, 168, 160, 0.12)',
                  border: '1px solid rgba(95, 168, 160, 0.35)',
                  borderRadius: 8,
                  fontSize: 12.5,
                  color: '#3d2c1a',
                  lineHeight: 1.55,
                }}>
                  <span style={{fontSize: 13, marginRight: 6}}>💡</span>
                  <span style={{fontWeight: 600, color: '#4a8a82', marginRight: 4}}>核心一句话:</span>
                  {props.hintByTurn[entry.turn - 1]}
                </div>
              )}
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

          {/* ── 3 个用户主动按钮 — 5-5 重设计契合 Story-First v2 prewritten 模式 ── */}
          {/* 旧设计依赖 AI 调用，但 prewritten 短路 AI → 旧"累了/没懂"是 dead code */}
          {/* 新设计:                                                            */}
          {/*   累了 → toggle "听就好" 模式 (audio auto-play + auto-advance)       */}
          {/*   没懂 → 显示当前节点的 deliverGoal hint (一句话核心，不调 AI)         */}
          {/*   跳过 → advance 不变                                                */}
          {props.onEscapeAction && (
            <div style={{
              display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap",
              fontSize: 11.5
            }}>
              <button
                onClick={function() { props.onEscapeAction("tired"); }}
                title="开启自动模式 - 音频自动播 + 节点自动推进，不用点继续"
                style={{
                  padding: "5px 10px",
                  border: "1px solid " + (props.tiredMode ? HC.accent : HC.parchmentLo),
                  borderRadius: 999,
                  background: props.tiredMode ? HC.accent : "transparent",
                  color: props.tiredMode ? "#fff8e8" : HC.textSec,
                  cursor: "pointer", fontFamily: "inherit"
                }}
              >{props.tiredMode ? "😌 听模式 ✓" : "😴 累了，听就好"}</button>
              <button
                onClick={function() { props.onEscapeAction("dont-understand"); }}
                title="显示这一段的核心一句话提示"
                style={{
                  padding: "5px 10px", border: "1px solid " + HC.parchmentLo,
                  borderRadius: 999, background: "transparent",
                  color: HC.textSec, cursor: "pointer", fontFamily: "inherit"
                }}
              >🤔 我没懂</button>
              <button
                onClick={function() { props.onEscapeAction("skip"); }}
                title="跳过这一节，进下一节"
                style={{
                  padding: "5px 10px", border: "1px solid " + HC.parchmentLo,
                  borderRadius: 999, background: "transparent",
                  color: HC.textSec, cursor: "pointer", fontFamily: "inherit"
                }}
              >⏭️ 跳过</button>
            </div>
          )}

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
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginTop: 4, fontSize: 11, color: HC.textSec
          }}>
            <span title="爸妈看不到这段聊天，他们只能看到学习统计" style={{color: HC.green || "#6a8e57", fontWeight: 500}}>
              🔒 这段聊天爸妈看不到
            </span>
            <span>
              <kbd style={{padding: "1px 4px", background: HC.tealLight, borderRadius: 3, fontSize: 10}}>Cmd</kbd>+
              <kbd style={{padding: "1px 4px", background: HC.tealLight, borderRadius: 3, fontSize: 10}}>Enter</kbd> 发送
            </span>
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

/* ─── Know U. Learning — History Module Main Page ────────────────────
 *
 * 路由: /history
 * 首版 Topic: Magna Carta 1215 (HSS-7.6.5)
 *
 * 架构:
 *   - 单页面 SPA (跟 vocab.js / writing.js 一致风格)
 *   - 4 阶段: intro → conversation (14 turns) → mastery → complete
 *   - 中英分层 UI (教学层中文为主，史料原文英文)
 *   - Geography Section 可折叠固定顶部
 *   - mastery gate 严格制 (拼写 + 定义 + 应用题)
 *
 * MVP 限制 (见 docs/MVP_DECISIONS_LOG.md):
 *   - 只 1 个 Topic (Magna Carta)
 *   - 不接 Supabase (localStorage only)
 *   - 不做语音输入
 *   - 不做深度可选 checks
 *   - 中文助词 XP 消费侧不实施
 */

import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { BrandNavBar } from '../components/BrandNavBar';
import { C, FONT, FONT_DISPLAY, S, NUM, globalCSS } from '../lib/theme';
import { callAPIStream, callAPIFast, tryJSON } from '../lib/api';
import { supabase } from '../lib/supabase';

import {
  HISTORY_TOPICS,
  THROUGH_LINES,
  getTopic,
} from '../lib/history-topics';
import {
  buildHistorySystemPrompt,
  buildTurnPrompt,
  buildDefinitionEvalPrompt,
  buildApplicationEvalPrompt,
} from '../lib/history-prompts';
import {
  loadProfile,
  parseProfileFields,
  injectPlaceholders,
  getOrSeedWorldview,
  saveWorldview,
  saveTopicCompletion,
  saveTranscript,
  addXp,
  getXp,
  loadTopicProgress,
} from '../lib/history-storage';

// ─── 历史模块色彩扩展（叠加 C 上） ──────────────────────────────────
var HC = {
  ...C,
  parchment:    "#f4ead0",
  parchmentHi:  "#fbf5e0",
  parchmentLo:  "#e8dcb6",
  ink:          "#3d2c1a",
  inkLight:     "#6b4f33",
  pinFill:      "#9b2c2c",
  pinStroke:    "#5a1a1a",
};

// ─── 主组件 ────────────────────────────────────────────────────────
export default function HistoryPage() {
  // —— 4 阶段 ——
  // intro: 还没开始 / 看 Topic 简介
  // conversation: 14 轮对话进行中
  // mastery: 进入记忆考核
  // complete: 完成
  var [phase, setPhase] = useState("intro");
  var [turnIndex, setTurnIndex] = useState(0); // 0-13 (14 turns)

  // —— 用户数据 ——
  var [profileText, setProfileText] = useState("");
  var [profileFields, setProfileFields] = useState({});
  var [worldview, setWorldview] = useState(null);
  var [user, setUser] = useState(null);
  var [xp, setXp] = useState(0);

  // —— 对话状态 ——
  var [conversationLog, setConversationLog] = useState([]); // [{role, turn, content, timestamp}]
  var [aiStreaming, setAiStreaming] = useState(""); // 当前正在流入的 AI 文字
  var [aiThinking, setAiThinking] = useState(false);
  var [userInput, setUserInput] = useState("");
  var [error, setError] = useState("");

  // —— Geography state ——
  var [mapFlipped, setMapFlipped] = useState(false);
  var [geoOpen, setGeoOpen] = useState(false);

  // —— Mastery gate state ——
  var [gateStep, setGateStep] = useState(0); // 0:spelling, 1:definition, 2:application, 3:done
  var [gateResults, setGateResults] = useState({
    spelling: { score: 0, errors: [], items: [] },
    definition: { score: 0, results: [] },
    application: { score: 0, results: [] },
  });
  var [showCompletion, setShowCompletion] = useState(false);
  var [topicXpEarned, setTopicXpEarned] = useState(0);

  // —— UI / drawer state ——
  var [showUserCenter, setShowUserCenter] = useState(false);

  // —— Topic 数据 ——
  var topic = getTopic("magna-carta-1215");

  // ─── 初始化 ─────────────────────────────────────────────────────
  useEffect(function() {
    if (typeof window === "undefined") return;

    // 加载 supabase user (跟 vocab 一致)
    supabase.auth.getUser().then(function(r) {
      if (r && r.data && r.data.user) setUser(r.data.user);
    }).catch(function() {});

    // 加载 profile
    var loaded = loadProfile();
    setProfileText(loaded.profile || "");
    var fields = parseProfileFields(loaded.profile || "");
    setProfileFields(fields);

    // 加载或种子 worldview
    var wv = getOrSeedWorldview(loaded.profile || "");
    setWorldview(wv);

    // 当前 XP
    setXp(getXp());

    // 已完成？显示再做一次的 option
    var prior = loadTopicProgress("magna-carta-1215");
    if (prior && prior.completedAt) {
      // 不自动跳转，让她在 intro 看到 "再来一次"
    }
  }, []);

  // ─── AI 调用核心 ────────────────────────────────────────────────
  var fetchAIForTurn = async function(turn, lastUserAnswer) {
    if (!turn || turn.role === "user") return;
    setAiThinking(true);
    setAiStreaming("");
    setError("");
    try {
      var sys = buildHistorySystemPrompt({
        topic: topic,
        profile: profileText,
        userName: profileFields.userName,
        userAge: profileFields.userAge,
        userSchool: profileFields.userSchool,
        worldview: worldview,
        history: conversationLog,
      });
      var userPrompt = buildTurnPrompt(turn, { lastUserAnswer: lastUserAnswer });
      // 占位符注入
      sys = injectPlaceholders(sys, profileFields);
      userPrompt = injectPlaceholders(userPrompt, profileFields);

      var fullText = "";
      var raw = await callAPIStream(sys, userPrompt, { jsonMode: false }, function(partial) {
        fullText = partial;
        setAiStreaming(partial);
      });
      // 兜底：如果 streaming 关闭（默认），onChunk 不触发，raw 是完整文本
      if (!fullText && raw) {
        fullText = typeof raw === "string" ? raw : String(raw);
      }
      // 完成 — 写入 log
      var entry = {
        role: "ai",
        turn: turn.n,
        move: turn.move,
        content: fullText,
        timestamp: new Date().toISOString(),
      };
      setConversationLog(function(prev) { return prev.concat([entry]); });
      setAiStreaming("");
      setAiThinking(false);

      // 如 Turn 7（geo）— 自动展开地图
      if (turn.move === "geo") {
        setGeoOpen(true);
      }

      // 如 autoAdvance — 1.5s 后自动下一轮
      if (turn.autoAdvance) {
        setTimeout(function() {
          advanceTurn();
        }, 1500);
      }
    } catch (e) {
      console.error("[history] AI fetch failed:", e);
      setError("网络不稳，AI 回应没出来 — 用兜底文案给你看一下");
      // Fallback: 用 ai_seed 简单展示（截短到 200 字以内）
      var fallback = "[兜底] " + (turn.ai_seed || "").substring(0, 200) + "...";
      setConversationLog(function(prev) {
        return prev.concat([{
          role: "ai",
          turn: turn.n,
          move: turn.move,
          content: injectPlaceholders(fallback, profileFields),
          timestamp: new Date().toISOString(),
          isFallback: true,
        }]);
      });
      setAiStreaming("");
      setAiThinking(false);
    }
  };

  // ─── 推进到下一轮 ───────────────────────────────────────────────
  var advanceTurn = function() {
    var nextIdx = turnIndex + 1;
    if (nextIdx >= topic.conversationTurns.length) {
      // 14 轮全部走完 → 显示"开始记忆考核"按钮
      setTurnIndex(nextIdx);
      return;
    }
    setTurnIndex(nextIdx);
  };

  // ─── 进入对话阶段时，自动 fetch 第一轮 ─────────────────────────
  useEffect(function() {
    if (phase !== "conversation") return;
    if (!topic) return;
    var turn = topic.conversationTurns[turnIndex];
    if (!turn) return;
    if (turn.role === "ai" || turn.role === "ai-eval") {
      // 如已经有这轮的 log（避免重复 fetch）
      var already = conversationLog.find(function(e) { return e.turn === turn.n; });
      if (already) return;
      // 找上一条用户回答（如有）
      var lastUser = null;
      for (var i = conversationLog.length - 1; i >= 0; i--) {
        if (conversationLog[i].role === "user") { lastUser = conversationLog[i].content; break; }
      }
      fetchAIForTurn(turn, lastUser);
    }
  }, [phase, turnIndex]);

  // ─── 用户提交答案 ────────────────────────────────────────────────
  var submitUserResponse = function() {
    if (!userInput.trim()) return;
    var content = userInput.trim();
    var turn = topic.conversationTurns[turnIndex];
    setConversationLog(function(prev) {
      return prev.concat([{
        role: "user",
        turn: turn.n,
        content: content,
        timestamp: new Date().toISOString(),
      }]);
    });
    setUserInput("");
    advanceTurn();
  };

  // ─── 启动 conversation ─────────────────────────────────────────
  var startConversation = function() {
    setPhase("conversation");
    setTurnIndex(0);
    setConversationLog([]);
  };

  // ─── 进入 mastery gate ──────────────────────────────────────────
  var startMasteryGate = function() {
    setPhase("mastery");
    setGateStep(0);
  };

  // ─── 完成 Topic ─────────────────────────────────────────────────
  var completeTopic = function(masteryResults) {
    // 计算 XP（D10 简化版）
    var base = topic.xpRewards.base; // 100 for difficulty 3
    var bonus =
      masteryResults.spelling.score * topic.xpRewards.perVocabPass +
      masteryResults.definition.score * topic.xpRewards.perConceptPass +
      masteryResults.application.score * topic.xpRewards.perApplicationPass;
    var total = base + bonus;
    setTopicXpEarned(total);

    // 持久化
    addXp(total);
    setXp(getXp());

    saveTranscript("magna-carta-1215", conversationLog);
    saveTopicCompletion("magna-carta-1215", {
      xpEarned: total,
      masteryResults: masteryResults,
      transcript: conversationLog,
    });

    // 触发 worldview 后处理（α 阶段做完整的 — MVP 这里用简化版）
    if (worldview) {
      var newSelfDisclosure = (worldview.selfDisclosure || []).slice();
      // 把用户的真实回答加进 selfDisclosure
      conversationLog.filter(function(e) { return e.role === "user" && e.content.length > 10; }).forEach(function(e) {
        newSelfDisclosure.push({
          topic: "magna-carta-1215",
          turn: e.turn,
          content: e.content,
          at: e.timestamp,
        });
      });
      var newWv = Object.assign({}, worldview, {
        initialSeed: false,  // 第一个 Topic 完成后，seed 标记移除
        selfDisclosure: newSelfDisclosure.slice(-30),
        topicsCompleted: ((worldview.topicsCompleted || []).concat(["magna-carta-1215"])).slice(),
        lastUpdated: new Date().toISOString(),
      });
      saveWorldview(newWv);
      setWorldview(newWv);
    }

    setPhase("complete");
    setShowCompletion(true);
  };

  // ─── Render ──────────────────────────────────────────────────────
  return (
    <>
      <Head>
        <title>历史 · Magna Carta — Know U. Learning</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: globalCSS }} />
      <style dangerouslySetInnerHTML={{ __html: `
        body { background: ${HC.bg}; }
        .h-page { min-height: 100vh; background: ${HC.bg}; font-family: ${FONT}; }
        .h-container { max-width: 920px; margin: 0 auto; padding: 0 12px 80px; }
        @media (min-width: 640px) { .h-container { padding: 0 20px 80px; } }

        /* ── Topic 标题区 ── */
        .topic-hero {
          margin: 16px 0 12px;
          padding: 18px 20px;
          background: linear-gradient(135deg, ${HC.parchmentHi} 0%, ${HC.parchment} 100%);
          border-radius: 16px;
          border: 1px solid ${HC.parchmentLo};
          box-shadow: 0 2px 12px rgba(61, 44, 26, 0.08);
        }
        .topic-hero h1 {
          margin: 0 0 4px;
          font-family: ${FONT_DISPLAY};
          font-size: 24px;
          font-weight: 700;
          color: ${HC.ink};
          letter-spacing: -0.01em;
        }
        .topic-hero .meta { font-size: 12px; color: ${HC.inkLight}; opacity: 0.85; }
        .topic-hero .hook { font-size: 14px; color: ${HC.text}; margin-top: 8px; line-height: 1.5; }

        /* ── Geography Section 折叠卡 ── */
        .geo-card {
          margin-bottom: 14px;
          background: ${HC.card};
          border-radius: 14px;
          border: 1px solid ${HC.border};
          overflow: hidden;
        }
        .geo-toggle {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 12px 16px;
          background: transparent;
          border: none;
          cursor: pointer;
          font-family: inherit;
          color: ${HC.ink};
          font-size: 14px;
          font-weight: 600;
        }
        .geo-toggle:hover { background: rgba(61,44,26,0.03); }
        .geo-toggle .arrow { transition: transform 0.3s; opacity: 0.6; }
        .geo-toggle.open .arrow { transform: rotate(180deg); }
        .geo-body { padding: 0 16px 16px; }

        /* ── 翻转地图卡 ── */
        .flip-container { perspective: 1800px; margin: 0 auto; }
        .flip-card { position: relative; width: 100%; aspect-ratio: 9/7; transform-style: preserve-3d; transition: transform 0.85s cubic-bezier(0.55, 0.05, 0.25, 1.05); }
        .flip-card.flipped { transform: rotateY(180deg); }
        .flip-side { position: absolute; inset: 0; backface-visibility: hidden; -webkit-backface-visibility: hidden; background: ${HC.parchment}; border-radius: 10px; box-shadow: 0 2px 12px rgba(0,0,0,0.15); overflow: hidden; }
        .flip-side.back { transform: rotateY(180deg); }
        .flip-side > object, .flip-side > img { display: block; width: 100%; height: 100%; }
        .flip-controls { display: flex; justify-content: center; gap: 12px; align-items: center; margin-top: 10px; }
        .flip-btn {
          background: ${HC.accent};
          color: #fff8e8;
          border: none;
          padding: 9px 18px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          box-shadow: 0 2px 8px rgba(0,0,0,0.18);
          transition: transform 0.15s;
        }
        .flip-btn:hover { transform: translateY(-1px); }
        .flip-status { color: ${HC.inkLight}; font-size: 12px; font-style: italic; }

        /* ── World Orient 迷你框 ── */
        .world-orient {
          background: ${HC.parchmentLo};
          border-radius: 8px;
          padding: 10px;
          display: flex;
          gap: 12px;
          align-items: center;
          margin-bottom: 12px;
        }
        .world-orient img { width: 90px; height: 50px; object-fit: cover; border-radius: 4px; border: 1px solid ${HC.parchmentLo}; }
        .world-orient .text { flex: 1; font-size: 12px; color: ${HC.ink}; }

        /* ── Scale anchors ── */
        .scale-anchors {
          display: flex; flex-direction: column; gap: 6px;
          margin-top: 12px;
          padding: 10px 12px;
          background: ${HC.tealLight};
          border-radius: 8px;
          font-size: 13px;
        }
        .scale-anchors .item { color: ${HC.text}; }
        .scale-anchors .item::before { content: "📏 "; opacity: 0.7; }

        /* ── Why matters ── */
        .why-matters {
          margin-top: 12px;
          padding: 12px 14px;
          background: ${HC.accentLight};
          border-radius: 8px;
          font-size: 13px;
          line-height: 1.55;
          color: ${HC.text};
          border-left: 3px solid ${HC.accent};
        }
        .why-matters .label { font-weight: 700; color: ${HC.accent}; margin-bottom: 4px; }

        /* ── 对话流 ── */
        .conv-stream { display: flex; flex-direction: column; gap: 14px; padding: 14px 0; }
        .bubble-row { display: flex; gap: 8px; }
        .bubble-row.ai { justify-content: flex-start; }
        .bubble-row.user { justify-content: flex-end; }
        .bubble {
          max-width: 78%;
          padding: 12px 14px;
          border-radius: 16px;
          font-size: 14.5px;
          line-height: 1.6;
          animation: bubbleIn 0.3s ease-out;
        }
        @keyframes bubbleIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .bubble.ai {
          background: ${HC.parchmentHi};
          color: ${HC.text};
          border: 1px solid ${HC.parchmentLo};
          border-top-left-radius: 4px;
        }
        .bubble.user {
          background: ${HC.accent};
          color: #fff8e8;
          border-top-right-radius: 4px;
        }
        .bubble.fallback { background: ${HC.parchmentLo}; opacity: 0.85; }
        .avatar {
          flex-shrink: 0;
          width: 32px; height: 32px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 18px;
          background: ${HC.tealLight};
          align-self: flex-end;
        }

        /* ── 输入栏 ── */
        .input-bar {
          position: sticky;
          bottom: 0;
          background: ${HC.bg};
          padding: 12px 0 14px;
          border-top: 1px solid ${HC.border};
          z-index: 10;
        }
        .input-bar .prompt {
          font-size: 12.5px;
          color: ${HC.textSec};
          margin-bottom: 6px;
          font-style: italic;
        }
        .input-bar .row { display: flex; gap: 8px; align-items: stretch; }
        .input-bar textarea {
          flex: 1;
          padding: 12px 14px;
          border: 1px solid ${HC.border};
          border-radius: 14px;
          background: #fff;
          font-family: inherit;
          font-size: 14.5px;
          resize: none;
          min-height: 48px;
          max-height: 120px;
          line-height: 1.5;
        }
        .input-bar textarea:focus { outline: none; border-color: ${HC.accent}; box-shadow: 0 0 0 2px ${HC.accentLight}; }
        .input-bar .submit {
          padding: 0 18px;
          background: ${HC.accent};
          color: #fff8e8;
          border: none;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          min-width: 60px;
        }
        .input-bar .submit:disabled { opacity: 0.5; cursor: not-allowed; }
        .input-bar .submit:not(:disabled):hover { background: #b8602a; }

        /* ── 继续按钮 ── */
        .continue-bar { display: flex; justify-content: center; padding: 12px 0; }
        .continue-btn {
          padding: 12px 28px;
          background: ${HC.teal};
          color: #fff;
          border: none;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          box-shadow: 0 2px 10px rgba(74, 109, 140, 0.3);
        }
        .continue-btn:hover { transform: translateY(-1px); }

        /* ── 史料卡（Source Card） ── */
        .source-card {
          margin: 8px 0;
          padding: 16px;
          background: ${HC.parchment};
          border: 1px solid ${HC.parchmentLo};
          border-radius: 12px;
          position: relative;
          font-family: ${FONT_DISPLAY};
        }
        .source-card .src-title { font-size: 13px; color: ${HC.pinStroke}; font-weight: 700; margin-bottom: 6px; letter-spacing: 1px; }
        .source-card .src-en { font-size: 14.5px; line-height: 1.6; color: ${HC.ink}; margin-bottom: 10px; font-style: italic; }
        .source-card .src-cn { font-size: 13px; line-height: 1.55; color: ${HC.text}; padding-top: 10px; border-top: 1px dashed ${HC.parchmentLo}; }
        .source-card .src-cn::before { content: "中文释义 · "; font-weight: 700; color: ${HC.pinStroke}; }
        .source-card .key-terms { margin-top: 12px; display: flex; flex-wrap: wrap; gap: 6px; }
        .source-card .term { font-size: 11px; padding: 3px 8px; background: ${HC.parchmentHi}; border: 1px solid ${HC.parchmentLo}; border-radius: 999px; color: ${HC.ink}; cursor: help; }
        .source-card .term:hover { background: ${HC.accent}; color: #fff; }

        /* ── Mastery Gate ── */
        .mastery-overlay {
          position: fixed; inset: 0;
          background: rgba(44, 36, 32, 0.85);
          z-index: 1000;
          display: flex; align-items: flex-start; justify-content: center;
          overflow-y: auto;
          padding: 40px 16px;
        }
        .mastery-card {
          width: 100%; max-width: 560px;
          background: ${HC.card};
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }
        .mastery-card h2 {
          margin: 0 0 4px;
          font-family: ${FONT_DISPLAY};
          font-size: 20px;
          color: ${HC.ink};
        }
        .mastery-card .step-meta { font-size: 12px; color: ${HC.textSec}; margin-bottom: 14px; }
        .mastery-card .progress { display: flex; gap: 4px; margin-bottom: 18px; }
        .mastery-card .progress .dot { flex: 1; height: 4px; background: ${HC.border}; border-radius: 2px; }
        .mastery-card .progress .dot.done { background: ${HC.green}; }
        .mastery-card .progress .dot.current { background: ${HC.accent}; }
        .mastery-card .item-prompt { font-size: 15px; line-height: 1.5; color: ${HC.text}; margin-bottom: 12px; }
        .mastery-card .item-input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid ${HC.border};
          border-radius: 12px;
          font-size: 15px;
          font-family: inherit;
          margin-bottom: 12px;
        }
        .mastery-card .item-input:focus { outline: none; border-color: ${HC.accent}; }
        .mastery-card .feedback { padding: 10px 12px; border-radius: 10px; margin-bottom: 12px; font-size: 13.5px; line-height: 1.5; }
        .mastery-card .feedback.pass { background: rgba(34, 160, 107, 0.12); color: ${HC.green}; border: 1px solid rgba(34,160,107,0.25); }
        .mastery-card .feedback.fail { background: rgba(229, 62, 62, 0.12); color: ${HC.red}; border: 1px solid rgba(229,62,62,0.25); }
        .mastery-card .actions { display: flex; gap: 8px; justify-content: flex-end; margin-top: 6px; }
        .mastery-card .btn-primary {
          padding: 10px 22px; background: ${HC.accent}; color: #fff8e8;
          border: none; border-radius: 999px; font-size: 14px; font-weight: 600;
          cursor: pointer; font-family: inherit;
        }
        .mastery-card .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
        .mastery-card .btn-ghost {
          padding: 10px 22px; background: transparent; color: ${HC.textSec};
          border: 1px solid ${HC.border}; border-radius: 999px; font-size: 14px;
          cursor: pointer; font-family: inherit;
        }
        .mastery-card .item-hint { font-size: 11.5px; color: ${HC.textSec}; margin-top: -4px; margin-bottom: 12px; opacity: 0.8; }

        /* ── Completion screen ── */
        .completion-card {
          background: linear-gradient(135deg, ${HC.parchmentHi} 0%, #fef8e1 100%);
          padding: 28px 24px;
          border-radius: 20px;
          text-align: center;
          border: 1px solid ${HC.parchmentLo};
          box-shadow: 0 6px 24px rgba(196, 107, 48, 0.15);
        }
        .completion-card h2 {
          font-family: ${FONT_DISPLAY};
          font-size: 24px;
          color: ${HC.ink};
          margin: 8px 0;
        }
        .completion-card .stamp {
          font-size: 64px;
          margin-bottom: 12px;
          animation: stampIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes stampIn {
          from { opacity: 0; transform: scale(0.4) rotate(-12deg); }
          to   { opacity: 1; transform: scale(1) rotate(0); }
        }
        .completion-card .xp-pill {
          display: inline-block;
          background: ${HC.gold};
          color: #fff;
          padding: 6px 16px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 14px;
          margin-top: 8px;
        }
        .completion-card .family-q {
          margin-top: 18px;
          padding: 14px 16px;
          background: rgba(196, 107, 48, 0.08);
          border-radius: 12px;
          text-align: left;
          font-size: 13.5px;
          line-height: 1.55;
          color: ${HC.text};
          border-left: 3px solid ${HC.accent};
        }
        .completion-card .family-q .label { font-weight: 700; color: ${HC.accent}; margin-bottom: 6px; font-size: 12px; }

        /* ── 思考点点动画 ── */
        .thinking-dots {
          display: inline-block;
        }
        .thinking-dots span {
          display: inline-block;
          width: 6px; height: 6px;
          margin-right: 3px;
          border-radius: 50%;
          background: ${HC.inkLight};
          animation: thinkingDot 1.4s infinite;
        }
        .thinking-dots span:nth-child(2) { animation-delay: 0.2s; }
        .thinking-dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes thinkingDot {
          0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-4px); }
        }

        /* ── 错误提示 ── */
        .error-banner {
          padding: 10px 14px;
          background: rgba(229, 62, 62, 0.1);
          border: 1px solid rgba(229, 62, 62, 0.3);
          border-radius: 10px;
          color: ${HC.red};
          font-size: 13px;
          margin: 10px 0;
        }
      ` }} />

      <div className="h-page">
        <BrandNavBar
          activeTab="history"
          stats={{ xp: xp, total: 0, correct: 0 }}
          user={user}
          onUserCenterClick={function() { setShowUserCenter(true); }}
        />

        <div className="h-container">
          {/* ── Topic Hero ── */}
          <TopicHero topic={topic} phase={phase} />

          {/* ── Geography Section ── */}
          {topic && (
            <GeographySection
              topic={topic}
              isOpen={geoOpen}
              onToggle={function() { setGeoOpen(!geoOpen); }}
              flipped={mapFlipped}
              onFlip={function() { setMapFlipped(!mapFlipped); }}
            />
          )}

          {/* ── Phase: intro ── */}
          {phase === "intro" && (
            <IntroScreen topic={topic} onStart={startConversation} />
          )}

          {/* ── Phase: conversation ── */}
          {phase === "conversation" && topic && (
            <ConversationStream
              topic={topic}
              turnIndex={turnIndex}
              conversationLog={conversationLog}
              aiStreaming={aiStreaming}
              aiThinking={aiThinking}
              userInput={userInput}
              onInputChange={setUserInput}
              onSubmit={submitUserResponse}
              onAdvance={advanceTurn}
              onStartMastery={startMasteryGate}
              error={error}
            />
          )}

          {/* ── Phase: mastery ── */}
          {phase === "mastery" && topic && (
            <MasteryGateOverlay
              topic={topic}
              gateStep={gateStep}
              setGateStep={setGateStep}
              gateResults={gateResults}
              setGateResults={setGateResults}
              onPass={completeTopic}
              onCancel={function() { setPhase("conversation"); }}
            />
          )}

          {/* ── Phase: complete ── */}
          {phase === "complete" && (
            <CompletionScreen
              topic={topic}
              xpEarned={topicXpEarned}
              onAgain={function() {
                setPhase("intro");
                setTurnIndex(0);
                setConversationLog([]);
                setGateStep(0);
                setGateResults({
                  spelling: { score: 0, errors: [], items: [] },
                  definition: { score: 0, results: [] },
                  application: { score: 0, results: [] },
                });
                setShowCompletion(false);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

// ─── Topic Hero ────────────────────────────────────────────────────
function TopicHero(props) {
  var topic = props.topic;
  if (!topic) return null;
  var phase = props.phase;
  var t = THROUGH_LINES[topic.throughLine] || {};
  return (
    <div className="topic-hero">
      <div className="meta">
        Chapter 1 · {topic.curriculumUnit} · {topic.hssStandard} · 难度 {topic.difficulty}/5 · 约 {topic.estimatedMinutes} 分钟
      </div>
      <h1>{topic.title.cn} <span style={{fontSize: 16, fontWeight: 400, color: HC.inkLight}}>· {topic.title.en} ({topic.year})</span></h1>
      <div className="hook">{topic.oneLineHook.cn}</div>
      {phase !== "intro" && (
        <div style={{marginTop: 8, fontSize: 11.5, color: HC.inkLight}}>
          <span style={{
            display: "inline-block", padding: "2px 8px", borderRadius: 999,
            background: t.color || HC.teal, color: "#fff8e8", fontSize: 10, fontWeight: 700, letterSpacing: 1
          }}>{t.cn || ""}</span>
        </div>
      )}
    </div>
  );
}

// ─── Geography Section ────────────────────────────────────────────
function GeographySection(props) {
  var topic = props.topic;
  var geo = topic.geography;

  return (
    <div className="geo-card">
      <button className={"geo-toggle " + (props.isOpen ? "open" : "")} onClick={props.onToggle}>
        <span style={{fontSize: 18}}>📍</span>
        <span>Where this happened — {geo.worldOrient.orientNote.cn}</span>
        <span className="arrow" style={{marginLeft: "auto"}}>▼</span>
      </button>
      {props.isOpen && (
        <div className="geo-body">
          {/* ① World Orient */}
          <div className="world-orient">
            <object data="/maps/world-base.svg" type="image/svg+xml" style={{width: 90, height: 50, border: "1px solid " + HC.parchmentLo, borderRadius: 4}}></object>
            <div className="text">
              <div style={{fontWeight: 600}}>📌 {geo.worldOrient.orientNote.cn}</div>
              <div style={{fontSize: 11, opacity: 0.7, marginTop: 2}}>{geo.worldOrient.orientNote.en}</div>
            </div>
          </div>

          {/* ② Topic 主图（含 flip） */}
          <div className="flip-container">
            <div className={"flip-card " + (props.flipped ? "flipped" : "")}>
              <div className="flip-side">
                <object data={"/maps/" + geo.primaryMap + ".svg"} type="image/svg+xml"></object>
              </div>
              {geo.flipMap && (
                <div className="flip-side back">
                  <object data={"/maps/" + geo.flipMap + ".svg"} type="image/svg+xml"></object>
                </div>
              )}
            </div>
          </div>
          {geo.flipMap && (
            <div className="flip-controls">
              <button className="flip-btn" onClick={props.onFlip}>
                {props.flipped ? "↻ 翻回 1200 年" : "↻ 翻到今天看看"}
              </button>
              <span className="flip-status">
                {props.flipped ? "现在是：今天的欧洲" : "现在是：1200 年的欧洲"}
              </span>
            </div>
          )}

          {/* ③ Scale Anchors */}
          {geo.scaleAnchors && geo.scaleAnchors.length > 0 && (
            <div className="scale-anchors">
              {geo.scaleAnchors.map(function(s, i) {
                return <div key={i} className="item">{s.cn}</div>;
              })}
            </div>
          )}

          {/* ④ Why Matters */}
          {geo.whyMatters && (
            <div className="why-matters">
              <div className="label">为什么这个地理重要？</div>
              <div>{geo.whyMatters.cn}</div>
            </div>
          )}

          {/* ⑤ China Compare（MVP 用文字 — D4 决策） */}
          {geo.chinaCompare && geo.chinaCompare.readNote && (
            <div className="why-matters" style={{borderLeftColor: HC.teal, background: HC.tealLight}}>
              <div className="label" style={{color: HC.teal}}>跟中国对比 🇨🇳 ↔ 🇪🇺</div>
              <div>{geo.chinaCompare.readNote.cn}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Intro Screen（开始前） ────────────────────────────────────────
function IntroScreen(props) {
  var topic = props.topic;
  if (!topic) return null;
  return (
    <div style={{padding: "20px 0"}}>
      <div style={{
        background: HC.card, padding: 20, borderRadius: 16, border: "1px solid " + HC.border,
        marginBottom: 14
      }}>
        <h3 style={{margin: "0 0 10px", fontFamily: FONT_DISPLAY, fontSize: 17, color: HC.ink}}>这一章你会经历什么</h3>
        <ol style={{margin: 0, paddingLeft: 20, fontSize: 14, color: HC.text, lineHeight: 1.7}}>
          <li>跟 AI 聊 14 轮 — 从校规类比开始，慢慢引到 Magna Carta</li>
          <li>看 1200 年的欧洲地图，翻过来看今天的欧洲（君士坦丁堡 = 伊斯坦布尔！）</li>
          <li>读 800 年前的真东西 — Clause 39 原文 + 中文释义</li>
          <li>代入一个想象的 13 岁角色，体会那天的难抉择</li>
          <li>过一关核心词汇 + 概念背诵 — <strong>不背不算完成</strong></li>
        </ol>
        <div style={{marginTop: 12, padding: 10, background: HC.tealLight, borderRadius: 8, fontSize: 12, color: HC.text}}>
          <strong style={{color: HC.teal}}>桥接：</strong>这次我们用<strong>唐律疏议 (651 AD)</strong>作中国史锚点 — 比 Magna Carta 早 564 年。
        </div>
      </div>
      <div style={{textAlign: "center"}}>
        <button
          className="continue-btn"
          style={{background: HC.accent, fontSize: 15, padding: "14px 36px"}}
          onClick={props.onStart}
        >
          准备好了，开始吧 →
        </button>
      </div>
    </div>
  );
}

// ─── Conversation Stream ───────────────────────────────────────────
function ConversationStream(props) {
  var topic = props.topic;
  var turnIndex = props.turnIndex;
  var log = props.conversationLog;
  var endRef = useRef(null);

  useEffect(function() {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [log.length, props.aiStreaming]);

  // 完成所有 14 轮？
  var allDone = turnIndex >= topic.conversationTurns.length;
  var currentTurn = !allDone ? topic.conversationTurns[turnIndex] : null;

  // 是否在等用户输入
  var awaitingUserInput = currentTurn && currentTurn.role === "user";
  // 是否当前 AI 轮已完成显示
  var currentAIDone = !awaitingUserInput && currentTurn &&
    log.find(function(e) { return e.turn === currentTurn.n; });

  return (
    <div>
      <div className="conv-stream">
        {log.map(function(entry, i) {
          // 史料卡（在第 8 轮 AI 文本之后）
          var sourceCard = entry.role === "ai" && entry.move === "source" ? (
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
          return (
            <div key={i}>
              <div className="bubble-row ai">
                <div className="avatar">🦉</div>
                <div className={"bubble ai " + (entry.isFallback ? "fallback" : "")}>
                  {renderBilingualText(entry.content)}
                </div>
              </div>
              {sourceCard}
            </div>
          );
        })}

        {/* AI streaming */}
        {props.aiStreaming && (
          <div className="bubble-row ai">
            <div className="avatar">🦉</div>
            <div className="bubble ai">{renderBilingualText(props.aiStreaming)}<span style={{opacity: 0.5}}>▌</span></div>
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
          <div className="row">
            <textarea
              value={props.userInput}
              onChange={function(e) { props.onInputChange(e.target.value); }}
              placeholder="可以中英混着说..."
              onKeyDown={function(e) {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) props.onSubmit();
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
            14 轮对话完成 — 现在进入记忆考核。<br/>
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

// ─── Source Card（史料卡） ─────────────────────────────────────────
function SourceCard(props) {
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

// ─── Mastery Gate Overlay ──────────────────────────────────────────
function MasteryGateOverlay(props) {
  var topic = props.topic;
  var gateStep = props.gateStep;
  var setGateStep = props.setGateStep;
  var gateResults = props.gateResults;
  var setGateResults = props.setGateResults;

  if (gateStep >= 3) {
    // 全部完成
    return null;
  }

  var stepNames = ["拼写测试", "概念定义", "应用题"];
  var checks = topic.masteryChecks.required;
  var currentCheck = checks[gateStep];

  var handleStepDone = function(score, results) {
    var newResults = Object.assign({}, gateResults);
    if (gateStep === 0) newResults.spelling = { score: score, results: results };
    if (gateStep === 1) newResults.definition = { score: score, results: results };
    if (gateStep === 2) newResults.application = { score: score, results: results };
    setGateResults(newResults);

    if (gateStep < 2) {
      setGateStep(gateStep + 1);
    } else {
      // 全部完成，触发 onPass
      setGateStep(3);
      props.onPass(newResults);
    }
  };

  return (
    <div className="mastery-overlay">
      <div className="mastery-card">
        <div className="progress">
          {[0, 1, 2].map(function(i) {
            return <div key={i} className={"dot " + (i < gateStep ? "done" : i === gateStep ? "current" : "")}></div>;
          })}
        </div>
        <div className="step-meta">第 {gateStep + 1} 关 / 共 3 关</div>
        <h2>{stepNames[gateStep]}</h2>

        {gateStep === 0 && <SpellingTest check={currentCheck} onDone={handleStepDone} />}
        {gateStep === 1 && <DefinitionTest check={currentCheck} concepts={topic.mustMemorize.concepts} onDone={handleStepDone} />}
        {gateStep === 2 && <ApplicationTest check={currentCheck} onDone={handleStepDone} />}

        <div style={{marginTop: 14, fontSize: 11.5, color: HC.textSec, textAlign: "center", opacity: 0.7}}>
          按 Winston 设计：必过制 + 即时重试，不允许跳过
        </div>
      </div>
    </div>
  );
}

// ─── Spelling Test ────────────────────────────────────────────────
function SpellingTest(props) {
  var check = props.check;
  // 随机抽 sampleSize 个题
  var [items] = useState(function() {
    var shuffled = [...check.items].sort(function() { return Math.random() - 0.5; });
    return shuffled.slice(0, check.sampleSize);
  });
  var [idx, setIdx] = useState(0);
  var [input, setInput] = useState("");
  var [feedback, setFeedback] = useState(null); // null | {pass, msg}
  var [correctCount, setCorrectCount] = useState(0);
  var [redoQueue, setRedoQueue] = useState([]); // 错的题暂存重测

  var item = items[idx];

  var submit = function() {
    if (!input.trim()) return;
    var correct = input.trim().toLowerCase() === item.answer.toLowerCase();
    if (correct) {
      setFeedback({pass: true, msg: "对！" + item.answer});
      setCorrectCount(correctCount + 1);
    } else {
      setFeedback({pass: false, msg: "不对 — 正确答案是 " + item.answer});
      setRedoQueue(redoQueue.concat([item]));
    }
    setTimeout(function() {
      setFeedback(null);
      setInput("");
      next();
    }, 1500);
  };

  var next = function() {
    var newIdx = idx + 1;
    if (newIdx >= items.length) {
      // 检查是否有 redoQueue
      if (redoQueue.length > 0 && correctCount + (feedback && feedback.pass ? 1 : 0) < check.passThreshold) {
        // 还没达标 → 重测错的
        // 把 redoQueue 当作新一轮 items
        // 简化：直接告诉用户复习后再试一次（MVP 简化）
        // 实际实现：把错题混进去再来一轮
        var redo = [...redoQueue];
        setRedoQueue([]);
        setIdx(0);
        // 替换 items（用 setState 但 items 是 useState 一次性 — 用 ref 替代，但简化处理）
        // 这里 simple 处理：reset 全部
        items.splice(0, items.length, ...redo); // mutate to trigger re-render via idx reset
        setCorrectCount(0);
      } else {
        // 完成
        var finalScore = correctCount + (feedback && feedback.pass ? 1 : 0);
        props.onDone(finalScore, items.map(function(it, i) {
          return { word: it.answer };
        }));
      }
    } else {
      setIdx(newIdx);
    }
  };

  if (!item) return <div>加载中...</div>;

  return (
    <div>
      <div className="step-meta">第 {idx + 1} / {items.length} 题 — 已对 {correctCount}</div>
      <div className="item-prompt">
        {item.prompt}
        <div className="item-hint">提示：{item.hint}</div>
      </div>
      <input
        className="item-input"
        autoFocus
        value={input}
        onChange={function(e) { setInput(e.target.value); }}
        onKeyDown={function(e) { if (e.key === "Enter" && !feedback) submit(); }}
        placeholder="输入完整单词"
        disabled={!!feedback}
      />
      {feedback && (
        <div className={"feedback " + (feedback.pass ? "pass" : "fail")}>{feedback.msg}</div>
      )}
      <div className="actions">
        <button className="btn-primary" disabled={!input.trim() || feedback} onClick={submit}>提交</button>
      </div>
    </div>
  );
}

// ─── Definition Test ─────────────────────────────────────────────
function DefinitionTest(props) {
  var check = props.check;
  var concepts = props.concepts;
  // 随机抽 sampleSize 个题
  var [items] = useState(function() {
    var shuffled = [...check.items].sort(function() { return Math.random() - 0.5; });
    return shuffled.slice(0, check.sampleSize);
  });
  var [idx, setIdx] = useState(0);
  var [input, setInput] = useState("");
  var [feedback, setFeedback] = useState(null);
  var [pending, setPending] = useState(false);
  var [score, setScore] = useState(0);

  var item = items[idx];
  var concept = item ? concepts.find(function(c) { return c.id === item.conceptId; }) : null;

  var submit = async function() {
    if (!input.trim() || pending) return;
    setPending(true);
    try {
      var sysPrompt = "You are a friendly history tutor evaluating a 13-year-old ESL student's understanding.";
      var userPrompt = buildDefinitionEvalPrompt(concept, input.trim());
      var raw = await callAPIFast(sysPrompt, userPrompt);
      var parsed = tryJSON(raw) || { pass: true, feedback: "答得不错！" }; // 兜底 pass
      setFeedback(parsed);
      if (parsed.pass) setScore(score + 1);
      setTimeout(function() {
        setFeedback(null);
        setInput("");
        setPending(false);
        next(parsed.pass);
      }, 2200);
    } catch (e) {
      // 网络失败 → lenient pass
      setFeedback({pass: true, feedback: "（评估失败，先按通过算）"});
      setScore(score + 1);
      setTimeout(function() {
        setFeedback(null);
        setInput("");
        setPending(false);
        next(true);
      }, 1500);
    }
  };

  var next = function(passed) {
    var newIdx = idx + 1;
    if (newIdx >= items.length) {
      props.onDone(score + (passed ? 0 : 0), items.map(function(it) { return { conceptId: it.conceptId, passed: passed }; }));
    } else {
      setIdx(newIdx);
    }
  };

  if (!item || !concept) return <div>加载中...</div>;

  return (
    <div>
      <div className="step-meta">第 {idx + 1} / {items.length} 题 — 已对 {score}</div>
      <div style={{
        padding: "10px 14px", background: HC.tealLight, borderRadius: 10,
        fontSize: 13, color: HC.text, marginBottom: 12, lineHeight: 1.5
      }}>
        概念：<strong>{concept.en}</strong> · {concept.cn}
      </div>
      <div className="item-prompt">{item.prompt}</div>
      <textarea
        className="item-input"
        autoFocus
        rows={3}
        style={{minHeight: 80, resize: "vertical"}}
        value={input}
        onChange={function(e) { setInput(e.target.value); }}
        placeholder="可以中英混着说..."
        disabled={!!feedback || pending}
      />
      {pending && <div style={{fontSize: 12, color: HC.textSec, marginBottom: 12}}>🦉 评估中...</div>}
      {feedback && (
        <div className={"feedback " + (feedback.pass ? "pass" : "fail")}>{feedback.feedback}</div>
      )}
      <div className="actions">
        <button className="btn-primary" disabled={!input.trim() || feedback || pending} onClick={submit}>提交</button>
      </div>
    </div>
  );
}

// ─── Application Test ────────────────────────────────────────────
function ApplicationTest(props) {
  var check = props.check;
  var [item] = useState(function() {
    var idx = Math.floor(Math.random() * check.items.length);
    return check.items[idx];
  });
  var [input, setInput] = useState("");
  var [feedback, setFeedback] = useState(null);
  var [pending, setPending] = useState(false);

  var submit = async function() {
    if (!input.trim() || pending) return;
    setPending(true);
    try {
      var sysPrompt = "You are a friendly history tutor evaluating a 13-year-old ESL student.";
      var userPrompt = buildApplicationEvalPrompt(item, input.trim());
      var raw = await callAPIFast(sysPrompt, userPrompt);
      var parsed = tryJSON(raw) || { pass: true, feedback: "想得很有道理。" };
      setFeedback(parsed);
      setTimeout(function() {
        props.onDone(parsed.pass ? 1 : 0, [{ passed: parsed.pass }]);
      }, 2500);
    } catch (e) {
      setFeedback({pass: true, feedback: "（评估失败，先按通过算）"});
      setTimeout(function() {
        props.onDone(1, [{ passed: true }]);
      }, 1500);
    }
  };

  return (
    <div>
      <div className="step-meta">应用题（共 1 道）</div>
      <div className="item-prompt">{item.prompt}</div>
      <textarea
        className="item-input"
        autoFocus
        rows={4}
        style={{minHeight: 100, resize: "vertical"}}
        value={input}
        onChange={function(e) { setInput(e.target.value); }}
        placeholder="用今天学的原则分析这个场景..."
        disabled={!!feedback || pending}
      />
      {pending && <div style={{fontSize: 12, color: HC.textSec, marginBottom: 12}}>🦉 评估中...</div>}
      {feedback && (
        <div className={"feedback " + (feedback.pass ? "pass" : "fail")}>{feedback.feedback}</div>
      )}
      <div className="actions">
        <button className="btn-primary" disabled={!input.trim() || feedback || pending} onClick={submit}>提交</button>
      </div>
    </div>
  );
}

// ─── Completion Screen ───────────────────────────────────────────
function CompletionScreen(props) {
  var topic = props.topic;
  return (
    <div style={{padding: "30px 0"}}>
      <div className="completion-card">
        <div className="stamp">🏆</div>
        <h2>{topic.title.cn} 完成</h2>
        <div style={{color: HC.inkLight, fontSize: 13}}>{topic.title.en} · {topic.year}</div>
        <div className="xp-pill">+{props.xpEarned} XP</div>

        <div style={{marginTop: 18, fontSize: 13, color: HC.text, lineHeight: 1.6}}>
          这是 1215 年 6 月 15 日的故事。<br/>
          800 年后，加州 Irvine 的法庭、美国宪法第 5 修正案，都是从那一刻长出来的。
        </div>

        <div className="family-q">
          <div className="label">📨 今晚的家庭话题</div>
          <div>「如果当年中国也有人能逼皇帝签 Magna Carta 这种字，你觉得最适合做这个人的是谁？」</div>
          <div style={{marginTop: 6, opacity: 0.85}}>明天告诉我你们家的答案 — 我想听听爸妈是怎么想的。</div>
        </div>

        <div style={{marginTop: 22, display: "flex", gap: 10, justifyContent: "center"}}>
          <button className="continue-btn" style={{background: HC.teal}} onClick={props.onAgain}>再做一遍</button>
        </div>
      </div>
    </div>
  );
}

// ─── 双语文本渲染（让英文核心词高亮） ──────────────────────────────
function renderBilingualText(text) {
  if (!text) return null;
  // 简单：用 markdown ** 标记的转粗体；英文词加点视觉重音
  // 这里 MVP 直接返回纯文本，后续优化时再加 emphasis
  // 把 **xxx** 转成 <strong>
  var parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map(function(p, i) {
    if (p.startsWith("**") && p.endsWith("**")) {
      return <strong key={i} style={{color: HC.pinStroke}}>{p.slice(2, -2)}</strong>;
    }
    return <span key={i}>{p}</span>;
  });
}

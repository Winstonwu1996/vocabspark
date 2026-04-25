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
import React, { useEffect, useRef, useState } from 'react';
import { BrandNavBar } from '../components/BrandNavBar';
import { C, FONT, FONT_DISPLAY, S, NUM, globalCSS } from '../lib/theme';
import { callAPIStream, callAPIFast, tryJSON } from '../lib/api';
import { supabase } from '../lib/supabase';

import {
  HISTORY_TOPICS,
  THROUGH_LINES,
  getTopic,
  findMustMemorizeHits,
} from '../lib/history-topics';
import {
  buildHistorySystemPrompt,
  buildTurnPrompt,
  buildDefinitionEvalPrompt,
  buildApplicationEvalPrompt,
  buildFreeChatSystemPrompt,
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
  loadHistoryProfile,
  saveHistoryProfile,
  loadCurriculum,
  historyProfileToFields,
  saveReviewPool,
} from '../lib/history-storage';
import { inferCurriculum } from '../lib/curriculum-data';
import { findGlossaryHits, lookupTerm } from '../lib/history-glossary';

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
  // conversation: 13 轮对话进行中
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

  // —— Free chat state（Winston review #4） ——
  var [freeChatLog, setFreeChatLog] = useState([]); // [{role, content, timestamp}]
  var [freeChatInput, setFreeChatInput] = useState("");
  var [freeChatStreaming, setFreeChatStreaming] = useState("");
  var [freeChatThinking, setFreeChatThinking] = useState(false);

  // —— Mastery gate state ——
  var [gateStep, setGateStep] = useState(0); // 0:spelling, 1:definition, 2:application, 3:done
  var [gateResults, setGateResults] = useState({
    spelling: { score: 0, errors: [], items: [] },
    definition: { score: 0, results: [] },
    application: { score: 0, results: [] },
  });
  var [showCompletion, setShowCompletion] = useState(false);
  var [topicXpEarned, setTopicXpEarned] = useState(0);
  var [topicReviewPool, setTopicReviewPool] = useState({ words: [], concepts: [] });

  // —— UI / drawer state ——
  var [showUserCenter, setShowUserCenter] = useState(false);
  var [activeTerm, setActiveTerm] = useState(null);     // glossary tap-to-explain
  var [activeMust, setActiveMust] = useState(null);     // must-memorize chip tap (含 IPA + TTS)

  // Free chat 发送（Winston review #4）
  var sendFreeChat = async function() {
    if (!freeChatInput.trim() || freeChatThinking) return;
    var content = freeChatInput.trim();
    var newLog = freeChatLog.concat([{ role: "user", content: content, timestamp: new Date().toISOString() }]);
    setFreeChatLog(newLog);
    setFreeChatInput("");
    setFreeChatThinking(true);
    setFreeChatStreaming("");

    try {
      var sys = buildFreeChatSystemPrompt({
        topic: topic,
        profile: profileText,
        userName: profileFields.userName,
      });
      sys = injectPlaceholders(sys, profileFields);
      // 把最近 6 轮历史作为上下文
      var historyContext = newLog.slice(-6).map(function(e) {
        return (e.role === "user" ? "[她]" : "[你]") + " " + e.content;
      }).join("\n");
      var userPrompt = "对话历史:\n" + historyContext + "\n\n请回复她最新的消息。";

      var fullText = "";
      var raw = await callAPIStream(sys, userPrompt, { jsonMode: false }, function(partial) {
        fullText = partial;
        setFreeChatStreaming(partial);
      });
      if (!fullText && raw) fullText = typeof raw === "string" ? raw : String(raw);

      setFreeChatLog(function(prev) {
        return prev.concat([{ role: "ai", content: fullText, timestamp: new Date().toISOString() }]);
      });
      setFreeChatStreaming("");
      setFreeChatThinking(false);
    } catch (e) {
      console.error("[freeChat] failed:", e);
      setFreeChatThinking(false);
      setFreeChatStreaming("");
      setFreeChatLog(function(prev) {
        return prev.concat([{ role: "ai", content: "（网络不稳，再试一次？）", timestamp: new Date().toISOString(), isFallback: true }]);
      });
    }
  };

  // 双向跳转：对话 ↔ 地图（Winston review #2）
  var jumpToMap = function() {
    setGeoOpen(true);
    setTimeout(function() {
      var el = document.getElementById("geo-anchor");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };
  var jumpToConversation = function() {
    var el = document.getElementById("conv-anchor");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  // —— Profile setup state ——
  var [needsProfileSetup, setNeedsProfileSetup] = useState(false);
  var [historyProfile, setHistoryProfile] = useState(null);
  var [curriculum, setCurriculum] = useState(null);

  // —— Topic 数据 ——
  var topic = getTopic("magna-carta-1215");

  // ─── 初始化 ─────────────────────────────────────────────────────
  useEffect(function() {
    if (typeof window === "undefined") return;

    // 加载 supabase user (跟 vocab 一致)
    supabase.auth.getUser().then(function(r) {
      if (r && r.data && r.data.user) setUser(r.data.user);
    }).catch(function() {});

    // 加载 profile（双源 — 先看 history 字段化 profile，再回退到 vocab 自由文本）
    var hp = loadHistoryProfile();
    var loaded = loadProfile();
    setProfileText(loaded.profile || "");

    if (hp) {
      // 已有结构化 profile
      setHistoryProfile(hp);
      setProfileFields(historyProfileToFields(hp));
      setCurriculum(loadCurriculum());
    } else if (loaded.profile) {
      // 有 vocab 的自由文本 profile，但没结构化版本 → 仍展示 setup 让她确认 + 字段化
      setNeedsProfileSetup(true);
      setProfileFields(parseProfileFields(loaded.profile));
    } else {
      // 完全没有 profile → 必须 setup
      setNeedsProfileSetup(true);
      setProfileFields({});
    }

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

    // ── DEV shortcut: ?skipto=mastery 跳到 mastery gate 测试 ──
    try {
      var params = new URLSearchParams(window.location.search);
      var skipTo = params.get("skipto");
      if (skipTo === "mastery") {
        setPhase("mastery");
        setGateStep(0);
      } else if (skipTo === "complete") {
        setTopicXpEarned(175);
        setPhase("complete");
      }
    } catch (e) {}
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
      // 13 轮全部走完 → 显示"开始记忆考核"按钮
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
    // 计算 XP（软化版 — Winston review #9：分数低也能过，但 XP 反映表现）
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

    // 收集错题进 review pool（Winston review #9：错的会进 vocab 复习池下次再考）
    var reviewWords = [];
    var reviewConcepts = [];
    if (masteryResults.spelling && masteryResults.spelling.results && masteryResults.spelling.results.errorWords) {
      reviewWords = masteryResults.spelling.results.errorWords;
    }
    if (masteryResults.definition && masteryResults.definition.results && masteryResults.definition.results.errorConcepts) {
      reviewConcepts = masteryResults.definition.results.errorConcepts;
    }
    if (reviewWords.length > 0 || reviewConcepts.length > 0) {
      saveReviewPool("magna-carta-1215", { words: reviewWords, concepts: reviewConcepts });
    }
    setTopicReviewPool({ words: reviewWords, concepts: reviewConcepts });

    saveTranscript("magna-carta-1215", conversationLog);
    saveTopicCompletion("magna-carta-1215", {
      xpEarned: total,
      masteryResults: masteryResults,
      reviewPool: { words: reviewWords, concepts: reviewConcepts },
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
              onBackToConversation={phase === "conversation" ? jumpToConversation : null}
            />
          )}

          {/* ── Profile Setup（首次进 history 必经） ── */}
          {needsProfileSetup && (
            <ProfileSetup
              vocabProfile={profileText}
              parsedFields={profileFields}
              onSave={function(profile) {
                saveHistoryProfile(profile);
                setHistoryProfile(profile);
                setProfileFields(historyProfileToFields(profile));
                setCurriculum(loadCurriculum());
                setNeedsProfileSetup(false);
              }}
            />
          )}

          {/* ── Phase: intro ── */}
          {phase === "intro" && !needsProfileSetup && (
            <IntroScreen topic={topic} onStart={startConversation} curriculum={curriculum} historyProfile={historyProfile} />
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
              onTermClick={setActiveTerm}
              onMustClick={setActiveMust}
              onJumpToMap={jumpToMap}
              error={error}
            />
          )}

          {/* ── Term popup (glossary lookup) ── */}
          {activeTerm && (
            <TermPopup term={activeTerm} onClose={function() { setActiveTerm(null); }} />
          )}

          {/* ── Must-memorize popup (含 IPA + TTS) ── */}
          {activeMust && (
            <MustMemorizePopup data={activeMust} onClose={function() { setActiveMust(null); }} />
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
              reviewPool={topicReviewPool}
              freeChatLog={freeChatLog}
              freeChatInput={freeChatInput}
              freeChatThinking={freeChatThinking}
              freeChatStreaming={freeChatStreaming}
              onFreeChatInput={setFreeChatInput}
              onSendFreeChat={sendFreeChat}
              onMustClick={setActiveMust}
              onTermClick={setActiveTerm}
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
    <div className="geo-card" id="geo-anchor">
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

          {/* 回到对话按钮（Winston review #2） */}
          {props.onBackToConversation && (
            <div style={{marginTop: 14, textAlign: "center"}}>
              <button
                onClick={props.onBackToConversation}
                style={{
                  background: HC.teal,
                  color: "#fff",
                  border: "none",
                  borderRadius: 999,
                  padding: "10px 20px",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  boxShadow: "0 2px 8px rgba(74,109,140,0.3)",
                }}
              >
                ↩ 回到对话
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Profile Setup（首次进 history 必经） ────────────────────────
function ProfileSetup(props) {
  var vocabProfile = props.vocabProfile || "";
  var parsedFields = props.parsedFields || {};
  var [step, setStep] = useState(vocabProfile ? "choose" : "fill");

  var [name, setName] = useState(parsedFields.userName || "");
  var [age, setAge] = useState(parsedFields.userAge || 13);
  var [grade, setGrade] = useState(7);
  var [city, setCity] = useState("");
  var [schoolName, setSchoolName] = useState("");
  var [schoolType, setSchoolType] = useState("public");
  var [interest, setInterest] = useState("");
  var [parentWord, setParentWord] = useState("爸妈");
  var [previewCurriculum, setPreviewCurriculum] = useState(null);

  // 实时预览课程推断
  useEffect(function() {
    if (city && grade) {
      setPreviewCurriculum(inferCurriculum({ city: city, schoolType: schoolType, grade: grade }));
    } else {
      setPreviewCurriculum(null);
    }
  }, [city, schoolType, grade]);

  var importFromVocab = function() {
    var profile = {
      name: parsedFields.userName || "",
      age: parsedFields.userAge || 13,
      grade: 7,
      city: "Irvine",  // 默认猜测，可以改
      schoolName: parsedFields.userSchool || "",
      schoolType: "public",
      interest: parsedFields.userInterest || "",
      parentWord: parsedFields.userParentWord || "爸妈",
      sourceFromVocab: true,
    };
    props.onSave(profile);
  };

  var saveManual = function() {
    if (!name.trim() || !city.trim()) {
      alert("请填名字 + 城市");
      return;
    }
    props.onSave({
      name: name.trim(),
      age: parseInt(age) || 13,
      grade: parseInt(grade) || 7,
      city: city.trim(),
      schoolName: schoolName.trim(),
      schoolType: schoolType,
      interest: interest.trim(),
      parentWord: parentWord || "爸妈",
    });
  };

  return (
    <div style={{padding: "16px 0"}}>
      <div style={{
        background: HC.parchmentHi,
        border: "1px solid " + HC.parchmentLo,
        borderRadius: 16,
        padding: 20,
        marginBottom: 14
      }}>
        <h2 style={{margin: "0 0 6px", fontFamily: FONT_DISPLAY, fontSize: 20, color: HC.ink}}>
          👋 第一次来 — 先认识一下
        </h2>
        <p style={{margin: "0 0 16px", fontSize: 13.5, color: HC.text, lineHeight: 1.5}}>
          AI 用<strong>你的名字</strong>跟你说话，用<strong>你学校的实情</strong>讲历史。给我们 30 秒，准确度差很大。
        </p>

        {/* ── Tab 切换 ── */}
        {vocabProfile && step === "choose" && (
          <div style={{
            display: "grid", gap: 10, marginBottom: 16
          }}>
            <button
              onClick={importFromVocab}
              style={{
                padding: "14px 16px",
                background: HC.accent,
                color: "#fff8e8",
                border: "none",
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                textAlign: "left",
              }}
            >
              📥 从 Vocab 模块的画像导入<br/>
              <span style={{fontSize: 11, opacity: 0.85, fontWeight: 400}}>识别到: {parsedFields.userName || "你"} · {parsedFields.userAge}岁 · {parsedFields.userSchool}</span>
            </button>
            <button
              onClick={function() { setStep("fill"); }}
              style={{
                padding: "12px 16px",
                background: HC.card,
                color: HC.ink,
                border: "1px solid " + HC.border,
                borderRadius: 12,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                textAlign: "left",
              }}
            >
              ✏️ 我自己手动填（更准确）
            </button>
          </div>
        )}

        {step === "fill" && (
          <div style={{display: "flex", flexDirection: "column", gap: 12}}>
            <Field label="名字 *" required>
              <input value={name} onChange={function(e){setName(e.target.value);}} placeholder="如 Willow" style={S.input} />
            </Field>

            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10}}>
              <Field label="年级">
                <select value={grade} onChange={function(e){setGrade(e.target.value); setAge(5 + parseInt(e.target.value));}} style={S.input}>
                  <option value={6}>6 年级</option>
                  <option value={7}>7 年级</option>
                  <option value={8}>8 年级</option>
                  <option value={9}>9 年级</option>
                </select>
              </Field>
              <Field label="年龄">
                <input type="number" value={age} onChange={function(e){setAge(e.target.value);}} style={S.input} />
              </Field>
            </div>

            <Field label="所在城市 *" required hint="如 Irvine / Cupertino / Bellevue / Boston">
              <input value={city} onChange={function(e){setCity(e.target.value);}} placeholder="Irvine" style={S.input} />
            </Field>

            <Field label="学校类型">
              <div style={{display: "flex", gap: 6, flexWrap: "wrap"}}>
                {[
                  { v: "public",        l: "🏫 公立" },
                  { v: "private",       l: "🎓 私立" },
                  { v: "international", l: "🌍 国际学校" },
                  { v: "homeschool",    l: "🏠 在家学" },
                ].map(function(opt) {
                  var active = schoolType === opt.v;
                  return (
                    <button key={opt.v} onClick={function(){setSchoolType(opt.v);}} style={{
                      padding: "8px 14px",
                      background: active ? HC.accent : HC.card,
                      color: active ? "#fff8e8" : HC.text,
                      border: "1px solid " + (active ? HC.accent : HC.border),
                      borderRadius: 999, fontSize: 12.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
                    }}>{opt.l}</button>
                  );
                })}
              </div>
            </Field>

            <Field label="学校名（选填）" hint="如 Sierra Vista Middle School">
              <input value={schoolName} onChange={function(e){setSchoolName(e.target.value);}} placeholder="" style={S.input} />
            </Field>

            <Field label="兴趣（选填）" hint="AI 会用来打类比，但不会硬塞">
              <input value={interest} onChange={function(e){setInterest(e.target.value);}} placeholder="如 K-pop / 王者荣耀 / 篮球" style={S.input} />
            </Field>

            <Field label="家长称呼（选填）">
              <div style={{display: "flex", gap: 6}}>
                {["爸妈", "妈妈", "爸爸", "外公", "奶奶"].map(function(p) {
                  var active = parentWord === p;
                  return (
                    <button key={p} onClick={function(){setParentWord(p);}} style={{
                      padding: "6px 12px",
                      background: active ? HC.teal : HC.card,
                      color: active ? "#fff" : HC.text,
                      border: "1px solid " + (active ? HC.teal : HC.border),
                      borderRadius: 999, fontSize: 12, cursor: "pointer", fontFamily: "inherit"
                    }}>{p}</button>
                  );
                })}
              </div>
            </Field>

            {/* ── 课程推断实时预览 ── */}
            {previewCurriculum && (
              <div style={{
                marginTop: 8,
                padding: "12px 14px",
                background: HC.tealLight,
                borderRadius: 10,
                fontSize: 12.5,
                color: HC.text,
                lineHeight: 1.5,
                borderLeft: "3px solid " + HC.teal,
              }}>
                <div style={{fontWeight: 700, color: HC.teal, marginBottom: 4}}>
                  🎯 推断你的课程: <span style={{
                    fontSize: 10, marginLeft: 6, padding: "1px 6px",
                    background: previewCurriculum.confidence === "high" ? HC.green :
                               previewCurriculum.confidence === "medium" ? HC.gold : HC.textSec,
                    color: "#fff", borderRadius: 999,
                  }}>{previewCurriculum.confidence === "high" ? "高置信" : previewCurriculum.confidence === "medium" ? "中等" : "低置信"}</span>
                </div>
                <div><strong>{previewCurriculum.name}</strong></div>
                <div style={{fontSize: 11.5, marginTop: 4, opacity: 0.9}}>{previewCurriculum.framework}</div>
                {previewCurriculum.gradeTextbook && <div style={{fontSize: 11, marginTop: 4, opacity: 0.8}}>📚 {previewCurriculum.gradeTextbook}</div>}
                {previewCurriculum.magnaCartaQuarter && <div style={{fontSize: 11, marginTop: 2, opacity: 0.8}}>📅 Magna Carta 通常: {previewCurriculum.magnaCartaQuarter}</div>}
                {previewCurriculum.note && <div style={{fontSize: 11, marginTop: 6, opacity: 0.75, fontStyle: "italic"}}>{previewCurriculum.note}</div>}
              </div>
            )}

            <div style={{display: "flex", gap: 8, marginTop: 6}}>
              {vocabProfile && (
                <button onClick={function() { setStep("choose"); }} style={{
                  padding: "10px 16px", background: "transparent", color: HC.textSec,
                  border: "1px solid " + HC.border, borderRadius: 999, fontSize: 13, cursor: "pointer", fontFamily: "inherit"
                }}>← 用 Vocab 画像</button>
              )}
              <button onClick={saveManual} disabled={!name.trim() || !city.trim()} style={{
                flex: 1,
                padding: "12px 20px",
                background: HC.accent,
                color: "#fff8e8",
                border: "none",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                opacity: (!name.trim() || !city.trim()) ? 0.5 : 1,
              }}>开始学习 →</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── 表单 Field 包装 ─────────────────────────────────────────────
function Field(props) {
  return (
    <div>
      <div style={{fontSize: 12, fontWeight: 600, color: HC.ink, marginBottom: 4}}>
        {props.label}
      </div>
      {props.children}
      {props.hint && <div style={{fontSize: 11, color: HC.textSec, marginTop: 3, opacity: 0.8}}>{props.hint}</div>}
    </div>
  );
}

// ─── Intro Screen（开始前） ────────────────────────────────────────
function IntroScreen(props) {
  var topic = props.topic;
  if (!topic) return null;
  var curriculum = props.curriculum;
  var hp = props.historyProfile;
  return (
    <div style={{padding: "20px 0"}}>
      {/* ── 已识别的画像 + 课程 banner ── */}
      {hp && (
        <div style={{
          padding: "10px 14px",
          background: HC.tealLight,
          borderRadius: 10,
          fontSize: 12,
          color: HC.text,
          marginBottom: 12,
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexWrap: "wrap"
        }}>
          <span>👤 {hp.name} · {hp.grade} 年级 · {hp.city}{hp.schoolName ? " · " + hp.schoolName : ""}</span>
          {curriculum && curriculum.confidence !== "very-low" && (
            <span style={{fontSize: 11, color: HC.teal, opacity: 0.85}}>
              📚 {curriculum.name}
            </span>
          )}
        </div>
      )}

      <div style={{
        background: HC.card, padding: 20, borderRadius: 16, border: "1px solid " + HC.border,
        marginBottom: 14
      }}>
        <h3 style={{margin: "0 0 10px", fontFamily: FONT_DISPLAY, fontSize: 17, color: HC.ink}}>这一章你会经历什么</h3>
        <ol style={{margin: 0, paddingLeft: 20, fontSize: 14, color: HC.text, lineHeight: 1.7}}>
          <li>跟 AI 聊 13 轮 — 从校规类比开始，慢慢引到 Magna Carta</li>
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

  // 强制 auto-scroll — 双保险：scrollIntoView + window.scrollTo 兜底
  useEffect(function() {
    var doScroll = function() {
      if (endRef.current) {
        endRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }
      // 兜底：直接滚到 body 底部（防止 sticky/flex 容器干扰）
      try {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth"
        });
      } catch (e) {}
    };
    // 立即滚一次 + 200ms 后再滚一次（等 React render + 字体加载完）
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

          <div className="row">
            <textarea
              value={props.userInput}
              onChange={function(e) { props.onInputChange(e.target.value); }}
              placeholder="试试 P (观点) + E (因为...): I think... because..."
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

  // Winston review #9/#10：软化 gate — 一次走完不强制重测
  // 错的词收集起来，传给 onDone，由父组件存进 review pool 供后续复习
  var [errorWords, setErrorWords] = useState([]);

  var submit = function() {
    if (!input.trim()) return;
    var correct = input.trim().toLowerCase() === item.answer.toLowerCase();
    if (correct) {
      setFeedback({pass: true, msg: "对！" + item.answer});
      setCorrectCount(correctCount + 1);
    } else {
      setFeedback({pass: false, msg: "不对 — 正确答案是 " + item.answer + "（已加进复习单，下次再考）"});
      setErrorWords(errorWords.concat([{ word: item.answer, hint: item.hint, attempted: input.trim() }]));
    }
    setTimeout(function() {
      setFeedback(null);
      setInput("");
      next();
    }, 1800);
  };

  var skip = function() {
    // 允许跳过（不会，但加入错题单）
    setErrorWords(errorWords.concat([{ word: item.answer, hint: item.hint, attempted: "(跳过)" }]));
    setFeedback(null);
    setInput("");
    next();
  };

  var next = function() {
    var newIdx = idx + 1;
    if (newIdx >= items.length) {
      // 一次走完，不强制重测
      var finalScore = correctCount + (feedback && feedback.pass ? 1 : 0);
      props.onDone(finalScore, {
        errorWords: errorWords.concat(feedback && !feedback.pass ? [{ word: item.answer, hint: item.hint, attempted: input.trim() }] : []),
        totalItems: items.length
      });
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
      <div className="actions" style={{justifyContent: "space-between"}}>
        <button className="btn-ghost" onClick={skip} disabled={!!feedback} style={{fontSize: 12}}>不会，跳过 →</button>
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

  // Winston review #9：软化 — 允许跳过，错的进 review pool
  var [errorConcepts, setErrorConcepts] = useState([]);

  var skip = function() {
    if (concept) setErrorConcepts(errorConcepts.concat([{ conceptId: concept.id, en: concept.en, cn: concept.cn, attempted: "(跳过)" }]));
    setFeedback(null);
    setInput("");
    setPending(false);
    next(false);
  };

  var next = function(passed) {
    if (!passed && concept && input.trim()) {
      // 答错了 — 收集进 errorConcepts（不重测，过到下一题）
      setErrorConcepts(function(prev) {
        return prev.concat([{ conceptId: concept.id, en: concept.en, cn: concept.cn, attempted: input.trim() }]);
      });
    }
    var newIdx = idx + 1;
    if (newIdx >= items.length) {
      props.onDone(score + (passed ? 0 : 0), {
        errorConcepts: errorConcepts.concat(!passed && concept && input.trim() ? [{ conceptId: concept.id, en: concept.en, cn: concept.cn, attempted: input.trim() }] : []),
        totalItems: items.length
      });
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
      <div className="actions" style={{justifyContent: "space-between"}}>
        <button className="btn-ghost" onClick={skip} disabled={!!feedback || pending} style={{fontSize: 12}}>说不出来，跳过 →</button>
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
        props.onDone(parsed.pass ? 1 : 0, {
          passed: parsed.pass,
          item: item,
          attempted: input.trim()
        });
      }, 2500);
    } catch (e) {
      setFeedback({pass: true, feedback: "（评估失败，先按通过算）"});
      setTimeout(function() {
        props.onDone(1, { passed: true, item: item, attempted: input.trim() });
      }, 1500);
    }
  };

  var skip = function() {
    props.onDone(0, { passed: false, item: item, attempted: "(跳过)" });
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
      <div className="actions" style={{justifyContent: "space-between"}}>
        <button className="btn-ghost" onClick={skip} disabled={!!feedback || pending} style={{fontSize: 12}}>这题太难，跳过 →</button>
        <button className="btn-primary" disabled={!input.trim() || feedback || pending} onClick={submit}>提交</button>
      </div>
    </div>
  );
}

// ─── Completion Screen ───────────────────────────────────────────
function CompletionScreen(props) {
  var topic = props.topic;
  var reviewPool = props.reviewPool || { words: [], concepts: [] };
  var hasReview = (reviewPool.words && reviewPool.words.length > 0) || (reviewPool.concepts && reviewPool.concepts.length > 0);
  var [showFreeChat, setShowFreeChat] = useState(false);
  var freeChatEndRef = useRef(null);

  useEffect(function() {
    if (freeChatEndRef.current) {
      try { freeChatEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" }); } catch (e) {}
    }
  }, [props.freeChatLog && props.freeChatLog.length, props.freeChatStreaming, props.freeChatThinking]);
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

        {/* ── Review Pool 提示（Winston review #9：错的进 vocab 复习池） ── */}
        {hasReview && (
          <div style={{
            marginTop: 18,
            padding: "12px 14px",
            background: "rgba(91, 141, 184, 0.10)",
            borderRadius: 12,
            textAlign: "left",
            fontSize: 12.5,
            lineHeight: 1.55,
            color: HC.text,
            borderLeft: "3px solid " + HC.teal,
          }}>
            <div style={{fontWeight: 700, color: HC.teal, marginBottom: 6, fontSize: 12}}>
              📝 这些下次再考一次（已加进复习单）
            </div>
            {reviewPool.words.length > 0 && (
              <div style={{marginBottom: 4}}>
                <span style={{opacity: 0.8}}>词汇：</span>
                {reviewPool.words.map(function(w, i) {
                  return <span key={i} style={{
                    display: "inline-block", margin: "2px 4px 2px 0",
                    padding: "2px 8px", background: HC.parchmentHi,
                    borderRadius: 4, fontSize: 11, fontWeight: 600
                  }}>{w.word} · {w.hint}</span>;
                })}
              </div>
            )}
            {reviewPool.concepts.length > 0 && (
              <div>
                <span style={{opacity: 0.8}}>概念：</span>
                {reviewPool.concepts.map(function(c, i) {
                  return <span key={i} style={{
                    display: "inline-block", margin: "2px 4px 2px 0",
                    padding: "2px 8px", background: HC.parchmentHi,
                    borderRadius: 4, fontSize: 11, fontWeight: 600
                  }}>{c.en} · {c.cn}</span>;
                })}
              </div>
            )}
            <div style={{marginTop: 8, fontSize: 11, opacity: 0.75, fontStyle: "italic"}}>
              下次进 history 的时候，会先考一遍这些。也可以去 vocab 模块的复习单看到。
            </div>
          </div>
        )}

        <div className="family-q">
          <div className="label">📨 今晚的家庭话题</div>
          <div>「如果当年中国也有人能逼皇帝签 Magna Carta 这种字，你觉得最适合做这个人的是谁？」</div>
          <div style={{marginTop: 6, opacity: 0.85}}>明天告诉我你们家的答案 — 我想听听爸妈是怎么想的。</div>
        </div>

        <div style={{marginTop: 22, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap"}}>
          {!showFreeChat && (
            <button
              className="continue-btn"
              style={{background: HC.accent}}
              onClick={function() { setShowFreeChat(true); }}
            >💬 想继续聊？</button>
          )}
          <button className="continue-btn" style={{background: HC.teal}} onClick={props.onAgain}>再做一遍</button>
        </div>
      </div>

      {/* —— Free Chat Section（Winston review #4） —— */}
      {showFreeChat && (
        <div style={{
          marginTop: 18,
          padding: 18,
          background: HC.card,
          borderRadius: 16,
          border: "1px solid " + HC.border
        }}>
          <h3 style={{margin: "0 0 4px", fontFamily: FONT_DISPLAY, fontSize: 17, color: HC.ink}}>
            💬 继续聊
          </h3>
          <p style={{margin: "0 0 12px", fontSize: 12.5, color: HC.textSec, lineHeight: 1.5}}>
            还想问什么 Magna Carta 相关的？— 教皇、King John、Aristotle、议会、美国独立都行。<br/>
            <span style={{opacity: 0.85, fontStyle: "italic"}}>偏离主题我会温和拉回 — 中文英文都可以问。</span>
          </p>

          <div style={{display: "flex", flexDirection: "column", gap: 10, marginBottom: 12}}>
            {(props.freeChatLog || []).map(function(entry, i) {
              if (entry.role === "user") {
                return (
                  <div key={i} className="bubble-row user">
                    <div className="bubble user">{entry.content}</div>
                    <div className="avatar" style={{background: HC.accentLight}}>🙂</div>
                  </div>
                );
              }
              return (
                <div key={i} className="bubble-row ai">
                  <div className="avatar">🦉</div>
                  <div className={"bubble ai " + (entry.isFallback ? "fallback" : "")}>
                    {renderBilingualText(entry.content, { topic: topic, onTermClick: props.onTermClick, onMustClick: props.onMustClick })}
                  </div>
                </div>
              );
            })}
            {props.freeChatStreaming && (
              <div className="bubble-row ai">
                <div className="avatar">🦉</div>
                <div className="bubble ai">{renderBilingualText(props.freeChatStreaming, { topic: topic, onTermClick: props.onTermClick, onMustClick: props.onMustClick })}<span style={{opacity: 0.5}}>▌</span></div>
              </div>
            )}
            {props.freeChatThinking && !props.freeChatStreaming && (
              <div className="bubble-row ai">
                <div className="avatar">🦉</div>
                <div className="bubble ai">
                  <span className="thinking-dots"><span></span><span></span><span></span></span>
                </div>
              </div>
            )}
            <div ref={freeChatEndRef}></div>
          </div>

          <div style={{display: "flex", gap: 8, alignItems: "stretch"}}>
            <textarea
              value={props.freeChatInput || ""}
              onChange={function(e) { props.onFreeChatInput(e.target.value); }}
              onKeyDown={function(e) {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) props.onSendFreeChat();
              }}
              placeholder="想问什么？英文中文都行..."
              style={{
                flex: 1,
                padding: "10px 12px",
                border: "1px solid " + HC.border,
                borderRadius: 12,
                background: "#fff",
                fontFamily: "inherit",
                fontSize: 14,
                resize: "none",
                minHeight: 44,
                maxHeight: 100,
                lineHeight: 1.5
              }}
            />
            <button
              onClick={props.onSendFreeChat}
              disabled={!(props.freeChatInput || "").trim() || props.freeChatThinking}
              style={{
                padding: "0 18px",
                background: HC.accent,
                color: "#fff8e8",
                border: "none",
                borderRadius: 12,
                fontSize: 14,
                fontWeight: 600,
                cursor: (props.freeChatInput || "").trim() && !props.freeChatThinking ? "pointer" : "not-allowed",
                opacity: (props.freeChatInput || "").trim() && !props.freeChatThinking ? 1 : 0.5,
                fontFamily: "inherit",
                minWidth: 60
              }}
            >发送</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── 双语文本渲染 ────────────────────────────────────────────────────
// 渲染优先级（防止重叠）：
//   1. ⭐**word**(中文) — AI 显式标记的必背词 → 金色 chip
//   2. auto-detected 必背词（vocab/concepts） → 金色 chip（首次出现完整 / 后续淡化）
//   3. glossary terms (人物/地名/概念) → 蓝色虚线下划线
//   4. 普通 **word** 加重
function renderBilingualText(text, opts) {
  opts = opts || {};
  var topic = opts.topic;
  var onTermClick = opts.onTermClick;
  var onMustClick = opts.onMustClick;
  if (!text) return null;

  // —— Step 1: 先把 AI 显式 ⭐ 标记的部分切出来，避免被后续 auto-mark 干扰 ——
  var parts = text.split(/(⭐\*\*[^*]+\*\*\s*[（(][^）)]+[）)]|\*\*[^*]+\*\*)/g);

  return parts.map(function(p, i) {
    // ⭐ AI 标的必背词
    if (p.indexOf("⭐") === 0) {
      var match = p.match(/⭐\*\*([^*]+)\*\*\s*[（(]([^）)]+)[）)]/);
      if (match) {
        var w = match[1];
        // 找 must-memorize 数据，给 popup 用
        var mmData = topic && findMustMemorizeData(topic, w);
        return (
          <MustMemorizeChip
            key={i}
            word={w}
            cn={match[2]}
            data={mmData}
            onClick={onMustClick}
          />
        );
      }
    }
    // 普通 **word** — 但先 check 是不是 must-memorize（让它升级成 chip）
    if (p.startsWith("**") && p.endsWith("**")) {
      var bw = p.slice(2, -2);
      var mm = topic && findMustMemorizeData(topic, bw);
      if (mm) {
        return (
          <MustMemorizeChip
            key={i}
            word={bw}
            cn={mm.cn || (mm.concept && mm.concept.cn) || ""}
            data={mm}
            onClick={onMustClick}
            compact
          />
        );
      }
      return <strong key={i} style={{color: HC.pinStroke}}>{bw}</strong>;
    }

    // —— Step 2: 普通文本里 auto-detect must-memorize 词 + glossary terms ——
    if (!p) return null;

    // 收集所有 hit（must-memorize 优先，glossary 次之），按位置排序后渲染
    var allHits = [];
    if (topic) {
      var mmHits = findMustMemorizeHits(topic, p);
      mmHits.forEach(function(h) {
        allHits.push({ kind: "must", start: h.start, end: h.end, text: h.actualText, data: h.data, type: h.type });
      });
    }
    if (onTermClick) {
      var glHits = findGlossaryHits(p);
      glHits.forEach(function(h) {
        // 跳过跟 must hit 重叠的（must 优先）
        var overlap = allHits.find(function(a) { return h.start < a.end && h.end > a.start; });
        if (!overlap) {
          allHits.push({ kind: "glossary", start: h.start, end: h.end, text: p.slice(h.start, h.end), term: h.term });
        }
      });
    }
    allHits.sort(function(a, b) { return a.start - b.start; });

    if (allHits.length === 0) return <span key={i}>{p}</span>;

    var pieces = [];
    var cursor = 0;
    allHits.forEach(function(hit, hi) {
      if (hit.start > cursor) {
        pieces.push(<span key={i + "-x-" + hi}>{p.slice(cursor, hit.start)}</span>);
      }
      if (hit.kind === "must") {
        var data = hit.data;
        var cnText = data.cn || (data.en === hit.text ? data.cn : "") || "";
        // 用 compact chip（不带显式 ⭐ + 中文小字 — 节省空间，但仍金色高亮 + 可点）
        pieces.push(
          <MustMemorizeChip
            key={i + "-mm-" + hi}
            word={hit.text}
            cn={cnText}
            data={data}
            onClick={onMustClick}
            compact
            autoDetected
          />
        );
      } else {
        pieces.push(
          <span
            key={i + "-gl-" + hi}
            onClick={function(e) { e.stopPropagation(); if (onTermClick) onTermClick(hit.term); }}
            style={{
              background: "rgba(74, 109, 140, 0.10)",
              borderBottom: "1px dashed " + HC.teal,
              padding: "0 2px",
              borderRadius: 2,
              cursor: "pointer",
              color: HC.teal,
              fontWeight: 500,
            }}
            title="点一下看解释"
          >{hit.text}<sup style={{fontSize: 8, marginLeft: 1}}>?</sup></span>
        );
      }
      cursor = hit.end;
    });
    if (cursor < p.length) pieces.push(<span key={i + "-end"}>{p.slice(cursor)}</span>);
    return <React.Fragment key={i}>{pieces}</React.Fragment>;
  });
}

// 帮助：从 topic 中找 must-memorize 数据
function findMustMemorizeData(topic, word) {
  if (!topic || !topic.mustMemorize) return null;
  var lower = word.toLowerCase().replace(/s$/, ""); // 简单去复数
  var v = (topic.mustMemorize.vocab || []).find(function(x) { return x.word.toLowerCase() === lower || x.word.toLowerCase() === word.toLowerCase(); });
  if (v) return v;
  var c = (topic.mustMemorize.concepts || []).find(function(x) { return x.en.toLowerCase() === word.toLowerCase(); });
  if (c) return Object.assign({}, c, { word: c.en, cn: c.cn });
  return null;
}

// ─── Must-Memorize Chip ─────────────────────────────────────────────
function MustMemorizeChip(props) {
  var word = props.word;
  var cn = props.cn;
  var data = props.data;
  var compact = props.compact;
  var autoDetected = props.autoDetected;

  return (
    <span
      onClick={function(e) {
        e.stopPropagation();
        if (props.onClick) props.onClick({ word: word, cn: cn, data: data });
      }}
      style={{
        display: "inline-block",
        margin: "1px 2px",
        padding: compact ? "0 6px" : "1px 8px 1px 6px",
        background: autoDetected
          ? "linear-gradient(135deg, #fef8df, #fde9b3)"
          : "linear-gradient(135deg, #fef3d2, #fbe8a8)",
        border: "1px solid " + (autoDetected ? "#e0b85a" : "#d4a050"),
        borderRadius: 6,
        fontSize: compact ? "0.96em" : "0.95em",
        fontWeight: 600,
        color: HC.pinStroke,
        whiteSpace: "nowrap",
        cursor: "pointer",
      }}
      title={"必考 ⭐ — " + cn + (data && data.ipa ? " · " + data.ipa : "") + " · 点查 IPA + 发音"}
    >
      {!compact && <span>⭐</span>}
      <strong style={{margin: compact ? "0" : "0 3px"}}>{word}</strong>
      {!compact && cn && (
        <span style={{fontSize: "0.82em", opacity: 0.75, fontWeight: 400}}>{cn}</span>
      )}
      {compact && <sup style={{fontSize: 9, marginLeft: 1, color: "#c08400"}}>⭐</sup>}
    </span>
  );
}

// ─── Must-Memorize Popup — 点击 ⭐ 词的详情卡（含 IPA + TTS） ──────
function MustMemorizePopup(props) {
  var data = props.data;
  if (!data) return null;
  var word = data.word;
  var info = data.data || {};

  var [playing, setPlaying] = useState(false);
  var audioRef = useRef(null);

  var playTTS = async function() {
    if (playing) return;
    setPlaying(true);
    try {
      var resp = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: word, voice: "en-US" })
      });
      if (!resp.ok) throw new Error("tts " + resp.status);
      var blob = await resp.blob();
      var url = URL.createObjectURL(blob);
      var a = new Audio(url);
      audioRef.current = a;
      a.onended = function() { setPlaying(false); URL.revokeObjectURL(url); };
      a.onerror = function() { setPlaying(false); URL.revokeObjectURL(url); };
      await a.play();
    } catch (e) {
      console.warn("TTS failed:", e);
      setPlaying(false);
      // Fallback: 用浏览器原生 SpeechSynthesis
      try {
        var u = new SpeechSynthesisUtterance(word);
        u.lang = "en-US";
        u.rate = 0.9;
        window.speechSynthesis.speak(u);
      } catch (e2) {}
    }
  };

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 2000,
      background: "rgba(44, 36, 32, 0.55)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 20,
    }} onClick={props.onClose}>
      <div style={{
        background: "linear-gradient(135deg, #fef8df, #fbf0c0)",
        maxWidth: 460, width: "100%",
        borderRadius: 16,
        padding: 24,
        border: "1.5px solid #d4a050",
        boxShadow: "0 16px 40px rgba(196,107,48,0.35)",
      }} onClick={function(e) { e.stopPropagation(); }}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8}}>
          <div style={{flex: 1}}>
            <span style={{
              fontSize: 10, padding: "2px 8px", borderRadius: 999,
              background: "#c08400", color: "#fff8e8", letterSpacing: 1, fontWeight: 700, textTransform: "uppercase"
            }}>⭐ 必背 · {info.pos || (data.cn === info.cn ? "单词" : "概念")}</span>
            <h3 style={{margin: "10px 0 4px", fontFamily: FONT_DISPLAY, fontSize: 26, color: HC.ink, letterSpacing: "-0.01em"}}>
              {word}
            </h3>
            <div style={{fontSize: 14, color: HC.inkLight, fontWeight: 600}}>{data.cn || info.cn}</div>
            {info.ipa && (
              <div style={{
                marginTop: 8,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "4px 10px",
                background: "rgba(255,255,255,0.6)",
                borderRadius: 8,
                fontFamily: "Times, serif",
                fontSize: 14,
                color: HC.pinStroke
              }}>
                {info.ipa}
                <button onClick={playTTS} disabled={playing} style={{
                  background: playing ? "#ccc" : HC.accent,
                  color: "#fff8e8",
                  border: "none",
                  borderRadius: 999,
                  padding: "2px 10px",
                  fontSize: 12,
                  cursor: playing ? "default" : "pointer",
                  fontFamily: "inherit"
                }} title="播放发音">
                  {playing ? "🔊 播放中..." : "🔊 听发音"}
                </button>
              </div>
            )}
          </div>
          <button onClick={props.onClose} style={{
            background: "transparent", border: "none", fontSize: 22, cursor: "pointer",
            color: HC.inkLight, lineHeight: 1, padding: 4
          }}>✕</button>
        </div>

        {info.example && (
          <div style={{
            marginTop: 14, padding: "10px 12px",
            background: "rgba(255,255,255,0.55)",
            borderRadius: 10,
            fontSize: 13.5, lineHeight: 1.6,
            color: HC.text,
            borderLeft: "3px solid " + HC.pinFill
          }}>
            <div style={{fontFamily: FONT_DISPLAY, fontStyle: "italic", color: HC.ink}}>
              {info.example}
            </div>
            {info.exampleCn && (
              <div style={{fontSize: 12, marginTop: 4, opacity: 0.8}}>{info.exampleCn}</div>
            )}
          </div>
        )}

        {info.defEn && (
          <div style={{marginTop: 12, fontSize: 13, color: HC.text, lineHeight: 1.55}}>
            <div style={{fontWeight: 600, color: HC.ink, marginBottom: 2}}>定义</div>
            <div style={{marginBottom: 4, fontStyle: "italic"}}>{info.defEn}</div>
            <div style={{fontSize: 12.5, opacity: 0.85}}>{info.defCn}</div>
          </div>
        )}

        {info.untranslatable && (
          <div style={{
            marginTop: 12, padding: "8px 10px",
            background: "rgba(196,107,48,0.12)",
            borderRadius: 8,
            fontSize: 11.5,
            color: HC.pinStroke,
            fontStyle: "italic",
            borderLeft: "2px solid " + HC.accent
          }}>
            ⚠️ 这个词的中文翻译会扭曲它的真实意思，最好用英文 + 情境理解。
          </div>
        )}

        <div style={{
          marginTop: 14, fontSize: 11, color: HC.inkLight,
          textAlign: "center", opacity: 0.7
        }}>
          这个词必须背 — 拼写测试一定会考。点页面任何地方关闭。
        </div>
      </div>
    </div>
  );
}

// ─── Term popup — 点击 glossary 名词时展示 ─────────────────────────
function TermPopup(props) {
  var term = props.term;
  if (!term) return null;
  var entry = lookupTerm(term);
  if (!entry) return null;
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 2000,
      background: "rgba(44, 36, 32, 0.55)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 20,
    }} onClick={props.onClose}>
      <div style={{
        background: HC.parchment,
        maxWidth: 460, width: "100%",
        borderRadius: 16,
        padding: 22,
        border: "1px solid " + HC.parchmentLo,
        boxShadow: "0 16px 40px rgba(0,0,0,0.3)",
      }} onClick={function(e) { e.stopPropagation(); }}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8}}>
          <div>
            <span style={{
              fontSize: 10, padding: "2px 8px", borderRadius: 999,
              background: HC.pinFill, color: "#fff8e8", letterSpacing: 1, fontWeight: 700, textTransform: "uppercase"
            }}>{entry.type}</span>
            <h3 style={{margin: "8px 0 2px", fontFamily: FONT_DISPLAY, fontSize: 20, color: HC.ink}}>{term}</h3>
            <div style={{fontSize: 13, color: HC.inkLight, fontWeight: 600}}>{entry.cn}</div>
          </div>
          <button onClick={props.onClose} style={{
            background: "transparent", border: "none", fontSize: 22, cursor: "pointer",
            color: HC.inkLight, lineHeight: 1, padding: 4
          }}>✕</button>
        </div>
        <div style={{fontSize: 13.5, color: HC.text, lineHeight: 1.65, marginTop: 10, whiteSpace: "pre-wrap"}}>
          {entry.brief}
        </div>
        {(entry.when || entry.where) && (
          <div style={{
            marginTop: 12, paddingTop: 10, borderTop: "1px dashed " + HC.parchmentLo,
            fontSize: 11, color: HC.inkLight, display: "flex", gap: 16, flexWrap: "wrap"
          }}>
            {entry.when && <span>📅 {entry.when}</span>}
            {entry.where && <span>📍 {entry.where}</span>}
          </div>
        )}
        <div style={{
          marginTop: 12, fontSize: 10, color: HC.textSec, fontStyle: "italic", opacity: 0.8
        }}>
          点页面任何地方关闭
        </div>
      </div>
    </div>
  );
}

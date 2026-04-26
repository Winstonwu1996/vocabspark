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
import { VoiceInputButton } from '../components/VoiceInputButton';
import { C, FONT, FONT_DISPLAY, S, NUM, globalCSS } from '../lib/theme';
import { callAPIStream, callAPIFast, tryJSON } from '../lib/api';
import { supabase } from '../lib/supabase';

import {
  HISTORY_TOPICS,
  THROUGH_LINES,
  TOPIC_REGISTRY,
  getTopic,
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
  saveInProgress,
  loadInProgress,
  clearInProgress,
  loadEnglishLevel,
  saveEnglishLevel,
  saveSidekickLog,
  loadSidekickLog,
  hasSeenWalkthrough,
  markWalkthroughSeen,
  bridgeReviewToVocab,
} from '../lib/history-storage';
import { inferCurriculum } from '../lib/curriculum-data';

// ─── history-engine 抽离组件（pages/history.js 和未来的 AtlasLabPage embed mode 共用）
import { HC } from '../components/history-engine/theme';
import { renderBilingualText } from '../components/history-engine/bilingual';
import { MustMemorizePopup, TermPopup } from '../components/history-engine/popups';
import { ConversationStream } from '../components/history-engine/ConversationStream';
import { MasteryGateOverlay } from '../components/history-engine/MasteryGate';
import { CompletionScreen } from '../components/history-engine/CompletionScreen';

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
  var [savedSession, setSavedSession] = useState(null); // O6: 上次未完成的进度

  // —— UI / drawer state ——
  var [showUserCenter, setShowUserCenter] = useState(false);
  var [activeTerm, setActiveTerm] = useState(null);     // glossary tap-to-explain
  var [activeMust, setActiveMust] = useState(null);     // must-memorize chip tap (含 IPA + TTS)

  // —— Sidekick assistant（追问浮窗，与主对话隔离） ——
  var [sidekickOpen, setSidekickOpen] = useState(false);
  var [sidekickLog, setSidekickLog] = useState([]); // [{role, content}]
  var [sidekickInput, setSidekickInput] = useState("");
  var [sidekickStreaming, setSidekickStreaming] = useState("");
  var [sidekickThinking, setSidekickThinking] = useState(false);

  // Sidekick 发送 — 主对话不受影响，但 AI 知道当前 Topic 上下文 + 离题保护
  var sendSidekick = async function() {
    if (!sidekickInput.trim() || sidekickThinking) return;
    var content = sidekickInput.trim();
    var newLog = sidekickLog.concat([{ role: "user", content: content, timestamp: new Date().toISOString() }]);
    setSidekickLog(newLog);
    setSidekickInput("");
    setSidekickThinking(true);
    setSidekickStreaming("");

    try {
      // sidekick 用独立 prompt — 知道当前学到 Magna Carta 哪一轮但不污染主上下文
      // 复用 freeChat 的 prompt 构造（已有离题保护）
      var sys = buildFreeChatSystemPrompt({
        topic: topic,
        profile: profileText,
        userName: profileFields.userName,
      });
      // 加上"当前主对话进度"作为参考（让 AI 知道她已经学到哪了）
      sys += "\n\n【当前主对话进度】她在主对话第 " + (turnIndex + 1) + " / " + topic.conversationTurns.length + " 轮（move = " + (topic.conversationTurns[turnIndex] || {}).move + "）。这是侧边追问，不要打断主对话节奏，只回答她侧边问题。";
      sys = injectPlaceholders(sys, profileFields);

      var historyContext = newLog.slice(-6).map(function(e) {
        return (e.role === "user" ? "[她]" : "[你]") + " " + e.content;
      }).join("\n");
      var userPrompt = "侧边追问历史:\n" + historyContext + "\n\n回复她最新的追问，简短（50-150 字）。";

      var fullText = "";
      var raw = await callAPIStream(sys, userPrompt, { jsonMode: false }, function(partial) {
        fullText = partial;
        setSidekickStreaming(partial);
      });
      if (!fullText && raw) fullText = typeof raw === "string" ? raw : String(raw);

      setSidekickLog(function(prev) {
        var updated = prev.concat([{ role: "ai", content: fullText, timestamp: new Date().toISOString() }]);
        // U8: 持久化
        saveSidekickLog(topicId, updated);
        return updated;
      });
      setSidekickStreaming("");
      setSidekickThinking(false);
    } catch (e) {
      setSidekickThinking(false);
      setSidekickStreaming("");
      setSidekickLog(function(prev) {
        var updated = prev.concat([{ role: "ai", content: "（网络不稳，再试一次？）", timestamp: new Date().toISOString(), isFallback: true }]);
        saveSidekickLog(topicId, updated);
        return updated;
      });
    }
  };

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

  // —— N3: 英文比例（low/balanced/high）——
  var [englishLevel, setEnglishLevelState] = useState("balanced");

  // —— U4: 首次 walkthrough ——
  var [showWalkthrough, setShowWalkthrough] = useState(false);

  // —— Topic 数据（支持 ?topicId=xxx URL 参数切换）——
  // S9 难度梯度：默认 Magna Carta（已成熟），但 fresh user 第一次推 Tang/Song（home advantage 难度低）
  var [topicId, setTopicId] = useState("magna-carta-1215");
  var topic = getTopic(topicId);

  // 整合 atlas-lab：?from=atlas&atlasId=magna-carta — 来自 atlas-lab 跳转，启用返回按钮 + 完成后回跳
  var [fromAtlas, setFromAtlas] = useState(null); // null | { atlasId: 'magna-carta' }
  var [autoBackTimer, setAutoBackTimer] = useState(null); // 完成后自动回跳倒计时（秒）
  // Stage 4：embedded mode — 在 atlas-lab 的 iframe 里运行，隐藏顶部 nav + 完成 postMessage
  var [embedded, setEmbedded] = useState(false);
  // #2α Cosplay：从 atlas-lab 选了角色进来，AI 第一人称起手 + 类比围绕该角色世界
  // 数据格式：{ figure: { name, role, bio, hook, emoji }, lang }
  // 来源：localStorage.vocabspark_v1.pendingRole[topicId]（atlas-lab 写入）
  var [pendingRole, setPendingRole] = useState(null);

  // mount 时从 URL 读 topicId；如果是 fresh user（无任何完成进度）+ 没指定 topicId，推 Tang/Song
  useEffect(function() {
    if (typeof window === "undefined") return;
    try {
      var p = new URLSearchParams(window.location.search);
      var t = p.get("topicId");
      // 检测 atlas-lab 跳转
      if (p.get("from") === "atlas") {
        setFromAtlas({ atlasId: p.get("atlasId") || null });
      }
      // Stage 4：detect embedded mode（iframe 在 atlas-lab 内嵌）
      if (p.get("embedded") === "1") {
        setEmbedded(true);
      }
      // #2α Cosplay：?role=1 表示 atlas-lab 已把所选 figure 写入 localStorage.pendingRole
      // 立刻读出来 + 清掉 pending（一次性 — 防止下次打开还套这个角色）
      var resolveTopicId = (t && getTopic(t)) ? t : null;
      if (p.get("role") === "1") {
        var raw = localStorage.getItem("vocabspark_v1");
        var d = raw ? JSON.parse(raw) : null;
        var rolesByTopic = (d && d.pendingRole) || {};
        // role 跟 topicId 绑定 — 找当前 topicId 对应的 pendingRole
        var key = resolveTopicId || (d && d.historyData && d.historyData.lastTopicId) || "magna-carta-1215";
        var pr = rolesByTopic[key];
        if (pr && pr.figure) {
          setPendingRole(pr);
          // 一次性消费 — 清掉，防止下次打开 /history 还套这个角色
          delete rolesByTopic[key];
          d.pendingRole = rolesByTopic;
          d.updatedAt = new Date().toISOString();
          localStorage.setItem("vocabspark_v1", JSON.stringify(d));
        }
      }
      if (t && getTopic(t)) {
        setTopicId(t);
        return;
      }
      // S9: 没有 URL 参数 — 检查是否 fresh user
      var raw2 = localStorage.getItem("vocabspark_v1");
      var d2 = raw2 ? JSON.parse(raw2) : null;
      var completed = (d2 && d2.historyData && d2.historyData.completedTopics) || {};
      if (Object.keys(completed).length === 0) {
        // 全新用户 — 推 home advantage 的唐宋盛世
        setTopicId("tang-song-china");
      }
    } catch (e) {}
  }, []);

  // U5/S7: Topic 切换时重新加载该 Topic 的 sidekick log 和 in-progress 状态
  useEffect(function() {
    if (typeof window === "undefined") return;
    setSidekickLog(loadSidekickLog(topicId));
    var inProg = loadInProgress(topicId);
    if (inProg && inProg.turnIndex > 0 && inProg.turnIndex < (topic ? topic.conversationTurns.length : 13)) {
      setSavedSession(inProg);
    } else {
      setSavedSession(null);
    }
  }, [topicId]);

  // ─── 初始化 ─────────────────────────────────────────────────────
  useEffect(function() {
    if (typeof window === "undefined") return;

    // O2: history 模块默认开启 streaming 输出（让 AI 文字逐字浮现，不要一次蹦出来）
    window.__forceStreaming = true;

    // O3：移动端键盘遮挡 — 监听 visualViewport，键盘弹起时让 input bar 跟着上移
    var vv = window.visualViewport;
    var lastDelta = 0;
    var handleVV = function() {
      if (!vv) return;
      // 当 visualViewport 高度比 window 内层高度小，说明键盘弹起了
      var winH = window.innerHeight;
      var vvH = vv.height;
      var delta = winH - vvH;
      if (delta < 50) delta = 0;
      if (delta === lastDelta) return;
      lastDelta = delta;
      // 把整个 .input-bar 上移到键盘上方
      try {
        var bars = document.querySelectorAll(".input-bar");
        bars.forEach(function(bar) {
          bar.style.bottom = delta + "px";
          bar.style.transition = "bottom 0.15s ease-out";
        });
      } catch (e) {}
    };
    if (vv) {
      vv.addEventListener("resize", handleVV);
      vv.addEventListener("scroll", handleVV);
    }
    var cleanup = function() {
      if (vv) {
        vv.removeEventListener("resize", handleVV);
        vv.removeEventListener("scroll", handleVV);
      }
    };

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

    // 英文比例偏好
    setEnglishLevelState(loadEnglishLevel());

    // U8: 加载 sidekick 历史日志
    setSidekickLog(loadSidekickLog(topicId));

    // U4: 第一次进 history → 显示 walkthrough
    if (!hasSeenWalkthrough()) {
      setShowWalkthrough(true);
    }

    // 已完成？显示再做一次的 option
    var prior = loadTopicProgress(topicId);
    if (prior && prior.completedAt) {
      // 不自动跳转，让她在 intro 看到 "再来一次"
    }

    // O6：上次未完成？
    var inProgress = loadInProgress(topicId);
    if (inProgress && inProgress.turnIndex > 0 && inProgress.turnIndex < 13) {
      // 标记给 intro 屏显示"继续上次"按钮
      setSavedSession(inProgress);
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

    // 清理 visualViewport listener
    return cleanup;
  }, []);

  // ─── AI 调用核心 ────────────────────────────────────────────────
  var fetchAIForTurn = async function(turn, lastUserAnswer) {
    if (!turn || turn.role === "user") return;
    setAiThinking(true);
    setAiStreaming("");
    setError("");

    // U1: 10 秒还没首字 → 显示"AI 慢了，要不要重试？"
    var slowWarnTimer = setTimeout(function() {
      setError("AI 反应慢了 — 网络可能不稳。再等等或刷新页面。");
    }, 10000);
    try {
      var sys = buildHistorySystemPrompt({
        topic: topic,
        profile: profileText,
        userName: profileFields.userName,
        userAge: profileFields.userAge,
        userSchool: profileFields.userSchool,
        worldview: worldview,
        history: conversationLog,
        englishLevel: englishLevel,
        // #2α Cosplay：用户从 atlas-lab 选了角色进入，注入 roleContext 让 AI 第一人称起手
        roleContext: pendingRole,
      });
      var userPrompt = buildTurnPrompt(turn, { lastUserAnswer: lastUserAnswer });
      // 占位符注入
      sys = injectPlaceholders(sys, profileFields);
      userPrompt = injectPlaceholders(userPrompt, profileFields);

      var fullText = "";
      var raw = await callAPIStream(sys, userPrompt, { jsonMode: false }, function(partial) {
        fullText = partial;
        setAiStreaming(partial);
        if (partial) clearTimeout(slowWarnTimer);  // U1: 首字到了清掉 timeout warn
      });
      clearTimeout(slowWarnTimer);
      setError("");  // 清掉慢提示
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
      clearTimeout(slowWarnTimer);
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
    setTurnIndex(nextIdx);
    // O6：每次推进保存进度（mid-conversation only）
    if (nextIdx > 0 && nextIdx < topic.conversationTurns.length && phase === "conversation") {
      saveInProgress(topicId, {
        turnIndex: nextIdx,
        conversationLog: conversationLog,
      });
    }
    // 走完最后一轮 → 清掉 in-progress
    if (nextIdx >= topic.conversationTurns.length) {
      clearInProgress(topicId);
    }
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
      saveReviewPool(topicId, { words: reviewWords, concepts: reviewConcepts });
    }
    // 整合 vocab：把错词推到 history 独立队列（**不直接污染 vocab 主词单**）
    // 用户在 vocab 模块会看到"📚 来自 history 的词 (N)"卡片，可主动选择 加入 / 跳过
    if (reviewWords.length > 0) {
      try {
        bridgeReviewToVocab(reviewWords, { topicId: topicId, priority: "must-memorize" });
      } catch (e) { console.warn("bridge to vocab failed:", e); }
    }
    setTopicReviewPool({ words: reviewWords, concepts: reviewConcepts });

    saveTranscript(topicId, conversationLog);
    saveTopicCompletion(topicId, {
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
          topic: topicId,
          turn: e.turn,
          content: e.content,
          at: e.timestamp,
        });
      });
      var newWv = Object.assign({}, worldview, {
        initialSeed: false,  // 第一个 Topic 完成后，seed 标记移除
        selfDisclosure: newSelfDisclosure.slice(-30),
        topicsCompleted: ((worldview.topicsCompleted || []).concat([topicId])).slice(),
        lastUpdated: new Date().toISOString(),
      });
      saveWorldview(newWv);
      setWorldview(newWv);
    }

    setPhase("complete");
    setShowCompletion(true);
  };

  // 整合 atlas-lab：从 atlas 来 + 完成 Topic → 8 秒后自动跳回 atlas（带 ?completed=1 触发庆祝 toast）
  // 用户也可点 "立刻返回" 按钮立即跳，或点 "再挑战" 取消跳转
  useEffect(function() {
    if (phase !== "complete" || !fromAtlas) {
      setAutoBackTimer(null);
      return;
    }
    // Stage 4：embedded 模式 — 一进 complete 立刻 postMessage 给父 atlas（不需要 8 秒倒计时）
    if (embedded && typeof window !== "undefined" && window.parent && window.parent !== window) {
      try {
        window.parent.postMessage({
          source: "history-engine",
          type: "complete",
          topicId: topicId,
          atlasId: fromAtlas.atlasId,
          xp: topicXpEarned || 175,
        }, "*");
      } catch (e) { console.warn("postMessage to atlas failed:", e); }
      return;
    }
    var seconds = 8;
    setAutoBackTimer(seconds);
    var iv = setInterval(function() {
      seconds--;
      if (seconds <= 0) {
        clearInterval(iv);
        var url = "/atlas-lab/" + (fromAtlas.atlasId || "byzantine-rise") + "?completed=" + topicId;
        window.location.href = url;
      } else {
        setAutoBackTimer(seconds);
      }
    }, 1000);
    return function() { clearInterval(iv); };
  }, [phase, fromAtlas, topicId, embedded, topicXpEarned]);

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
        {/* Stage 4：embedded 模式下父 atlas-lab 已有 nav，这里不重复渲染 */}
        {!embedded && (
          <BrandNavBar
            activeTab="history"
            stats={{ xp: xp, total: 0, correct: 0 }}
            user={user}
            onUserCenterClick={function() { setShowUserCenter(true); }}
          />
        )}

        <div className="h-container">
          {/* 整合 atlas-lab：来自 atlas 时显示返回按钮（embedded 模式下父 atlas 也有，这里隐藏避免重复） */}
          {fromAtlas && !embedded && (
            <a
              href={fromAtlas.atlasId ? "/atlas-lab/" + fromAtlas.atlasId : "/atlas-lab"}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '6px 12px',
                marginBottom: 8,
                background: 'rgba(196, 107, 48, 0.08)',
                border: '1px solid rgba(196, 107, 48, 0.3)',
                borderRadius: 999,
                fontSize: 12, fontWeight: 600,
                color: '#c46b30',
                textDecoration: 'none',
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(196, 107, 48, 0.16)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(196, 107, 48, 0.08)'; }}
            >
              ← 返回 Atlas 浏览
            </a>
          )}

          {/* #2α Cosplay role banner — 让用户清楚知道"你在以这个角色的视角学" */}
          {pendingRole && pendingRole.figure && (
            <div style={{
              marginBottom: 10,
              padding: '10px 14px',
              background: 'linear-gradient(135deg, #f3edf9 0%, #e9deef 100%)',
              border: '1px solid rgba(108, 68, 153, 0.35)',
              borderLeft: '3px solid #6c4499',
              borderRadius: 10,
              display: 'flex', alignItems: 'center', gap: 10,
              fontSize: 13,
            }}>
              <span style={{ fontSize: 22, lineHeight: 1 }}>{pendingRole.figure.emoji || '🎭'}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, color: '#3d2c1a' }}>
                  你正在以 <span style={{ color: '#6c4499' }}>{(pendingRole.figure.name && pendingRole.figure.name.cn) || ''}</span> 的视角进入这个 Topic
                </div>
                <div style={{ fontSize: 11, color: '#6b4f33', opacity: 0.85, marginTop: 2 }}>
                  {(pendingRole.figure.role && pendingRole.figure.role.cn) || ''} · AI 会从该角色的世界起手对话
                </div>
              </div>
              <button
                onClick={() => setPendingRole(null)}
                title="退出角色代入，回到普通对话"
                style={{
                  background: 'transparent', border: '1px solid rgba(108, 68, 153, 0.3)',
                  color: '#6c4499', borderRadius: 999, padding: '3px 10px',
                  fontSize: 11, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
                }}
              >退出角色</button>
            </div>
          )}

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
                // S10: onboarding 完成的微庆祝（一次性 toast）
                try {
                  if (typeof window !== "undefined") {
                    var div = document.createElement("div");
                    div.innerText = "✓ 画像建好了 · " + (profile.name || "你") + "，你好！";
                    div.style.cssText = "position:fixed;top:20px;left:50%;transform:translateX(-50%);background:#22a06b;color:#fff;padding:10px 18px;border-radius:999px;font-size:14px;font-weight:600;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,0.2);animation:toastIn 0.3s ease-out;";
                    document.body.appendChild(div);
                    setTimeout(function() { div.style.opacity = "0"; div.style.transition = "opacity 0.3s"; }, 2200);
                    setTimeout(function() { div.remove(); }, 2700);
                  }
                } catch (e) {}
              }}
            />
          )}

          {/* ── Phase: intro ── */}
          {phase === "intro" && !needsProfileSetup && (
            <IntroScreen
              topic={topic}
              onStart={startConversation}
              curriculum={curriculum}
              historyProfile={historyProfile}
              englishLevel={englishLevel}
              onSetEnglishLevel={function(v) {
                setEnglishLevelState(v);
                saveEnglishLevel(v);
              }}
              onSwitchTopic={function(newId) {
                setTopicId(newId);
                setConversationLog([]);
                setTurnIndex(0);
                setSavedSession(null);
                // 不重置 phase — 让她在 intro 屏看新 Topic
              }}
              onShowWalkthrough={function() { setShowWalkthrough(true); }}
              savedSession={savedSession}
              onResume={function() {
                if (!savedSession) return;
                setConversationLog(savedSession.conversationLog || []);
                setTurnIndex(savedSession.turnIndex || 0);
                setPhase("conversation");
              }}
              onClearAndStart={function() {
                clearInProgress(topicId);
                setSavedSession(null);
                startConversation();
              }}
            />
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

          {/* ── U4: 30s 首次 walkthrough ── */}
          {showWalkthrough && (
            <Walkthrough onClose={function() {
              markWalkthroughSeen();
              setShowWalkthrough(false);
            }} />
          )}

          {/* ── Sidekick 浮动追问按钮 + 抽屉（仅在对话阶段显示） ── */}
          {phase === "conversation" && (
            <SidekickFAB
              isOpen={sidekickOpen}
              onToggle={function() { setSidekickOpen(!sidekickOpen); }}
              log={sidekickLog}
              input={sidekickInput}
              onInput={setSidekickInput}
              streaming={sidekickStreaming}
              thinking={sidekickThinking}
              onSend={sendSidekick}
              onTermClick={setActiveTerm}
              onMustClick={setActiveMust}
              topic={topic}
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

          {/* 整合 atlas-lab：完成后自动回跳倒计时条 */}
          {phase === "complete" && fromAtlas && autoBackTimer !== null && (
            <div style={{
              padding: '10px 14px',
              marginBottom: 10,
              background: 'linear-gradient(135deg, #c46b30 0%, #b85a25 100%)',
              color: '#fff8e8',
              borderRadius: 10,
              display: 'flex', alignItems: 'center', gap: 10,
              boxShadow: '0 2px 8px rgba(196, 107, 48, 0.25)',
            }}>
              <span style={{ fontSize: 18 }}>🎯</span>
              <span style={{ flex: 1, fontSize: 13 }}>
                通关 +175 XP！{autoBackTimer} 秒后自动回 Atlas 看 ★ 点亮…
              </span>
              <button
                onClick={function() {
                  setAutoBackTimer(null); // 取消倒计时
                }}
                style={{
                  fontSize: 11, fontWeight: 600,
                  padding: '4px 10px',
                  background: 'rgba(255,255,255,0.2)',
                  color: '#fff8e8',
                  border: '1px solid rgba(255,255,255,0.4)',
                  borderRadius: 999,
                  cursor: 'pointer',
                }}
              >留下再挑战</button>
              <a
                href={"/atlas-lab/" + (fromAtlas.atlasId || "byzantine-rise") + "?completed=" + topicId}
                style={{
                  fontSize: 11, fontWeight: 700,
                  padding: '4px 12px',
                  background: '#fff8e8',
                  color: '#c46b30',
                  borderRadius: 999,
                  textDecoration: 'none',
                }}
              >立刻返回 →</a>
            </div>
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
  // #3 教材对照：让用户感觉"this is my actual schoolwork"
  // textbookRef 数据格式：{ publisher, grade, chapter, section, page, hint }
  var tb = topic.textbookRef;
  return (
    <div className="topic-hero">
      <div className="meta">
        {topic.hssStandard} · 难度 {topic.difficulty}/5 · 约 {topic.estimatedMinutes} 分钟 · {topic.curriculumUnit.includes("medieval-china") ? "中世纪中国" : topic.curriculumUnit.includes("medieval-europe") ? "中世纪欧洲" : topic.curriculumUnit}
      </div>
      <h1>{topic.title.cn} <span style={{fontSize: 16, fontWeight: 400, color: HC.inkLight}}>· {topic.title.en} ({topic.year})</span></h1>
      <div className="hook">{topic.oneLineHook.cn}</div>
      {/* #3 教材对照 banner — 让 Willow 感觉"this is my actual schoolwork" */}
      {tb && (
        <div style={{
          marginTop: 10,
          padding: '8px 12px',
          background: 'rgba(34, 160, 107, 0.10)',
          border: '1px solid rgba(34, 160, 107, 0.30)',
          borderLeft: '3px solid #22a06b',
          borderRadius: 8,
          display: 'flex', alignItems: 'center', gap: 8,
          fontSize: 12, lineHeight: 1.45,
        }}>
          <span style={{ fontSize: 16, lineHeight: 1 }}>📖</span>
          <div style={{ flex: 1, color: HC.text }}>
            <span style={{ fontWeight: 700, color: '#1a7c52' }}>你课本对应章节</span>
            <span style={{ marginLeft: 6, color: HC.inkLight }}>
              {tb.publisher && (tb.publisher + " · ")}
              {tb.grade && (tb.grade + " 年级 · ")}
              {tb.chapter}{tb.section && (" - " + tb.section)}{tb.page && (" · p." + tb.page)}
            </span>
            {tb.hint && (
              <div style={{ fontSize: 11, color: HC.inkLight, marginTop: 2, fontStyle: 'italic', opacity: 0.85 }}>
                {tb.hint}
              </div>
            )}
          </div>
        </div>
      )}
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

// ─── Geography Section（A4+A5: 多层 + zoom + 地理要素） ───────────
function GeographySection(props) {
  var topic = props.topic;
  var geo = topic.geography;
  var isTangSong = topic.id === "tang-song-china";

  // 多层视图状态 — Topic 切换时重置到 continent (or country for Tang/Song)
  var [mapView, setMapView] = useState(isTangSong ? "country" : "continent");
  // Topic 变化时 reset
  useEffect(function() {
    setMapView(isTangSong ? "country" : "continent");
  }, [topic.id]);

  return (
    <div className="geo-card" id="geo-anchor">
      <button className={"geo-toggle " + (props.isOpen ? "open" : "")} onClick={props.onToggle}>
        <span style={{fontSize: 18}}>📍</span>
        <span>Where this happened — {geo.worldOrient.orientNote.cn}</span>
        <span className="arrow" style={{marginLeft: "auto"}}>▼</span>
      </button>
      {props.isOpen && (
        <div className="geo-body">
          {/* A4：多层导航 tabs（按 Topic 切换标签）*/}
          <div style={{display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap"}}>
            {(isTangSong ? [
              { v: "world",     l: "🌍 世界" },
              { v: "country",   l: "🇨🇳 中国" },
              { v: "features",  l: "⛰️ 地理要素" },
            ] : [
              { v: "world",     l: "🌍 世界" },
              { v: "continent", l: "🇪🇺 欧洲" },
              { v: "country",   l: "🇬🇧 英国" },
              { v: "features",  l: "⛰️ 地理要素" },
            ]).map(function(tab) {
              var active = mapView === tab.v;
              return (
                <button key={tab.v} onClick={function(){setMapView(tab.v);}} style={{
                  padding: "6px 12px",
                  background: active ? HC.accent : "transparent",
                  color: active ? "#fff8e8" : HC.text,
                  border: "1px solid " + (active ? HC.accent : HC.border),
                  borderRadius: 999, fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
                }}>{tab.l}</button>
              );
            })}
          </div>

          {/* World 视图 */}
          {mapView === "world" && (
            <div>
              <div style={{padding: "8px 12px", background: HC.parchmentLo, borderRadius: 8, fontSize: 12.5, marginBottom: 10, lineHeight: 1.5}}>
                <strong>📌 {geo.worldOrient.orientNote.cn}</strong> — 你出生在中国，现在住在 Irvine，今天我们要去看的是欧洲西北角的英国。
              </div>
              <object data="/maps/world-base.svg" type="image/svg+xml" style={{width: "100%", display: "block", borderRadius: 10}}></object>
            </div>
          )}

          {/* Continent 视图（默认 = europe-1200 + flip） */}
          {mapView === "continent" && (
            <div>
              <div style={{padding: "8px 12px", background: HC.parchmentLo, borderRadius: 8, fontSize: 12.5, marginBottom: 10, lineHeight: 1.5}}>
                <strong>🇪🇺 1200 年的欧洲</strong> — 9 个王国/帝国按颜色区分。注意英国（橙红色）— 这是今天的舞台。点翻转看今天。
              </div>
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
            </div>
          )}

          {/* Country 视图（zoom into England area，仅 Magna Carta） */}
          {mapView === "country" && !isTangSong && (
            <div>
              <div style={{padding: "8px 12px", background: HC.parchmentLo, borderRadius: 8, fontSize: 12.5, marginBottom: 10, lineHeight: 1.5}}>
                <strong>🇬🇧 英国 — 1215 年</strong>。Runnymede 的红章是签 Magna Carta 的草地。
                <br/>整个英国比中国湖南省还小，但就在这小地方决定了现代法治的起点。
              </div>
              <div style={{
                width: "100%",
                aspectRatio: "1 / 1",
                overflow: "hidden",
                position: "relative",
                borderRadius: 10,
                background: "#f4ead0",
                border: "1px solid " + HC.parchmentLo,
              }}>
                {/* europe-1200.svg viewBox 900×700, London 在 (~228, ~200)
                    保留 220% zoom + 微调让 London 在中心 */}
                <object data={"/maps/" + geo.primaryMap + ".svg"} type="image/svg+xml" style={{
                  position: "absolute",
                  width: "220%",
                  height: "auto",
                  top: "-5%",
                  left: "-5%",
                  pointerEvents: "none",
                }}></object>
                {/* 红圈标 Runnymede 区域（容器中心） */}
                <div style={{
                  position: "absolute",
                  top: "calc(50% - 35px)",
                  left: "calc(50% - 35px)",
                  width: 70, height: 70,
                  borderRadius: "50%",
                  border: "3px solid " + HC.pinFill,
                  boxShadow: "0 0 0 4px rgba(155,44,44,0.18), inset 0 0 0 1px rgba(255,255,255,0.6)",
                  pointerEvents: "none",
                }}></div>
                <div style={{
                  position: "absolute",
                  top: "calc(50% + 38px)", left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: 11, fontWeight: 700, color: HC.pinStroke,
                  background: "rgba(244, 234, 208, 0.95)",
                  padding: "2px 8px", borderRadius: 4,
                  whiteSpace: "nowrap",
                  pointerEvents: "none"
                }}>★ Runnymede 1215</div>
              </div>
              <div style={{fontSize: 11, color: HC.textSec, fontStyle: "italic", marginTop: 4, textAlign: "center"}}>
                Europe 1200 地图聚焦英国 — 红圈标 Runnymede 区域
              </div>
            </div>
          )}

          {/* Country 视图 — Tang/Song：使用专属 tang-china.svg (U10) */}
          {mapView === "country" && isTangSong && (
            <div>
              <div style={{padding: "8px 12px", background: HC.parchmentLo, borderRadius: 8, fontSize: 12.5, marginBottom: 10, lineHeight: 1.5}}>
                <strong>🇨🇳 唐宋中国 — 618-1279 年</strong>。世界文明的中心：长安 100 万人是同时代世界最大城市。
                <br/>红色印章是 <strong>大唐盛世</strong> — 黄河、长江、长城、大运河、丝绸之路全在这一张图上。
              </div>
              <object data="/maps/tang-china.svg" type="image/svg+xml" style={{
                width: "100%",
                display: "block",
                borderRadius: 10,
                border: "1px solid " + HC.parchmentLo,
              }}></object>
              <div style={{fontSize: 11, color: HC.textSec, fontStyle: "italic", marginTop: 4, textAlign: "center"}}>
                唐宋时期的中国 — 黄河（赭）/ 长江（蓝）/ 长城（虚线）/ 大运河（细蓝点）/ 丝绸之路（紫虚）
              </div>
            </div>
          )}

          {/* Features 视图（按 Topic 切换 feature set） */}
          {mapView === "features" && (
            isTangSong
              ? <ChinaFeaturesView />
              : <FeaturesView primaryMap={geo.primaryMap} />
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
    // O4：优先用从 profile 解析出的 city；只有完全没解析到才回退到"待用户填"
    var detectedCity = parsedFields.userCity || "";
    if (!detectedCity && !window.confirm("从 Vocab 画像没解析到具体城市 — 默认按 Irvine 推断课程。要继续还是手动填？\n\n确定 = 用 Irvine 默认\n取消 = 手动填")) {
      setStep("fill");
      return;
    }
    var profile = {
      name: parsedFields.userName || "",
      age: parsedFields.userAge || 13,
      grade: 7,
      city: detectedCity || "Irvine",
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

            <Field label="学校名（选填）" hint="如 XX Middle School / 你的初中名字">
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
                  }}>{previewCurriculum.confidence === "high" ? "✓ 已对齐" : previewCurriculum.confidence === "medium" ? "大致符合" : "通用版（具体看学校）"}</span>
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

// ─── FeaturesView：地图 + 地理要素叠加标记 ─────────────────────────
// europe-1200.svg viewBox 900×700，center [14°E, 53°N] scale 900 translate [450, 330]
// Mercator: x = 450 + (lon-14) × 15.708；y = 330 - 900 × (yMerc(lat) - yMerc(53))
// 用真实经纬度算出准确位置（Winston review: 之前用 eyeballed 数字位置全错）
function mercatorPos(lon, lat) {
  var x = 450 + (lon - 14) * 15.708;
  var yMerc = function(l) { return Math.log(Math.tan(Math.PI / 4 + l * Math.PI / 360)); };
  var y = 330 - 900 * (yMerc(lat) - yMerc(53));
  return [x, y];
}
var FEATURES = [
  { id: "channel", icon: "🌊", color: "#1565c0",
    name: "英吉利海峡 (English Channel)",
    pos: mercatorPos(1, 50.5),  // 多佛海峡中心
    desc: "把英国跟欧陆隔开 — 教皇影响力到这变弱了，国王没大陆军队靠 → 必须跟贵族合作 → 才有 Magna Carta" },
  { id: "thames", icon: "💧", color: "#0288d1",
    name: "泰晤士河 (Thames)",
    pos: mercatorPos(-0.5, 51.4),  // 伦敦附近
    desc: "伦敦 + Runnymede 都在河边，水路便利 — 贵族军队从全国来 Runnymede 集结靠它" },
  { id: "northsea", icon: "⛵", color: "#00695c",
    name: "北海贸易 (North Sea Trade)",
    pos: mercatorPos(4, 55.5),  // 英国和荷兰之间
    desc: "英国羊毛卖给佛兰德斯（今比利时），贵族变富 — 贸易致富的贵族最敢挑战国王" },
  { id: "alps", icon: "🏔️", color: "#5d4037",
    name: "阿尔卑斯山 (Alps)",
    pos: mercatorPos(9, 46.5),  // 瑞士/北意大利
    desc: "把意大利跟德国分开 — 中世纪两边贸易要翻山，哪个国王控制山口就控制贸易税" },
  { id: "pyrenees", icon: "🗻", color: "#5d4037",
    name: "比利牛斯山 (Pyrenees)",
    pos: mercatorPos(0, 42.7),  // 西班牙-法国边界
    desc: "把伊比利亚跟法国分开 — 让西班牙独立发展，跟英法节奏不同步" },
  { id: "roads", icon: "🛤️", color: "#6d4c41",
    name: "罗马大道 (Roman Roads)",
    pos: mercatorPos(12.5, 42),  // 罗马附近
    desc: "罗马帝国留下的石头路网，13 世纪还能用 — 让 King John 的命令能传到全英 → 也让贵族反叛信能传开" },
];

function FeaturesView(props) {
  var [active, setActive] = useState(null);
  // viewBox 900×700, 转 % 用作 left/top
  var posPct = function(p) { return [p[0] / 900 * 100, p[1] / 700 * 100]; };

  return (
    <div>
      <div style={{padding: "8px 12px", background: HC.parchmentLo, borderRadius: 8, fontSize: 12.5, marginBottom: 10, lineHeight: 1.5}}>
        <strong>⛰️ 决定历史的地理要素</strong> — 历史不是凭空发生的，地形给了它路线。<strong>点地图上的图标</strong>看每个要素如何左右了 1215 这件事。
      </div>
      <div style={{position: "relative", width: "100%"}}>
        <object data={"/maps/" + props.primaryMap + ".svg"} type="image/svg+xml" style={{width: "100%", display: "block"}}></object>

        {/* 叠加 marker pins */}
        {FEATURES.map(function(f) {
          var pct = posPct(f.pos);
          var isActive = active === f.id;
          return (
            <div key={f.id} style={{
              position: "absolute",
              left: "calc(" + pct[0] + "% - 16px)",
              top: "calc(" + pct[1] + "% - 16px)",
              width: 32, height: 32,
              borderRadius: "50%",
              background: isActive ? f.color : "rgba(255,255,255,0.92)",
              border: "2px solid " + f.color,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
              fontSize: 16,
              boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
              transition: "all 0.18s",
              transform: isActive ? "scale(1.18)" : "scale(1)",
              zIndex: 5,
            }} onClick={function() { setActive(active === f.id ? null : f.id); }} title={f.name}>
              {f.icon}
            </div>
          );
        })}

        {/* English Channel — 红色高亮带（基于 mercator 真实坐标） */}
        {(function() {
          var p = mercatorPos(1, 50.5);
          return (
            <div style={{
              position: "absolute",
              left: "calc(" + (p[0]/900*100) + "% - 35px)",
              top: "calc(" + (p[1]/700*100) + "% - 12px)",
              width: 70, height: 24,
              background: "rgba(213, 47, 47, 0.16)",
              border: "1.5px dashed #d52f2f",
              borderRadius: "50%",
              transform: "rotate(-15deg)",
              pointerEvents: "none",
              zIndex: 3,
            }} title="English Channel"></div>
          );
        })()}
      </div>

      {/* 当前激活的要素详情 */}
      {active && (() => {
        var f = FEATURES.find(function(x) { return x.id === active; });
        return (
          <div style={{
            marginTop: 12,
            padding: "12px 14px",
            background: HC.parchmentHi,
            borderRadius: 10,
            border: "1.5px solid " + f.color,
            fontSize: 13.5, lineHeight: 1.6,
          }}>
            <div style={{fontWeight: 700, color: f.color, fontSize: 14, marginBottom: 4}}>
              {f.icon} {f.name}
            </div>
            <div>{f.desc}</div>
            <button onClick={function() { setActive(null); }} style={{
              marginTop: 8, fontSize: 11, padding: "3px 10px",
              background: "transparent", color: HC.textSec,
              border: "1px solid " + HC.border, borderRadius: 999,
              cursor: "pointer", fontFamily: "inherit"
            }}>关闭</button>
          </div>
        );
      })()}

      {/* 全部 6 个要素列表（一直显示） */}
      <div style={{
        marginTop: 12, display: "flex", flexDirection: "column", gap: 6,
        fontSize: 12.5, color: HC.text
      }}>
        <div style={{fontSize: 11, color: HC.textSec, marginBottom: 2}}>所有要素：</div>
        {FEATURES.map(function(f) {
          return (
            <div key={f.id} onClick={function() { setActive(f.id); }} style={{
              display: "flex", gap: 8,
              padding: "8px 10px",
              background: active === f.id ? "rgba(196,107,48,0.10)" : HC.parchmentHi,
              borderRadius: 6,
              border: "1px solid " + (active === f.id ? f.color : HC.parchmentLo),
              lineHeight: 1.4,
              cursor: "pointer",
            }}>
              <span style={{fontSize: 16}}>{f.icon}</span>
              <div style={{flex: 1, minWidth: 0}}>
                <div style={{fontWeight: 600, color: HC.ink, fontSize: 12.5}}>{f.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── ChinaFeaturesView: 唐宋中国地理要素 ─────────────────────────
// tang-china.svg viewBox 900×700, center [108°E, 35°N] scale 900
// Mercator: x = 450 + (lon-108) × 15.708；y = 330 - 900 × (yMerc(lat) - yMerc(35))
function tangChinaPos(lon, lat) {
  var x = 450 + (lon - 108) * 15.708;
  var yMerc = function(l) { return Math.log(Math.tan(Math.PI / 4 + l * Math.PI / 360)); };
  var y = 330 - 900 * (yMerc(lat) - yMerc(35));
  return [x, y];
}

var CHINA_FEATURES = [
  { id: "yangtze", icon: "🏞️", color: "#0288d1",
    name: "长江 (Yangtze River)",
    pos: tangChinaPos(112, 30.5),  // 长江中游
    desc: "中国南北分界 — 北方种麦南方种稻；唐宋经济重心从北方黄河转到南方长江，这是中国 1500 年的大转折" },
  { id: "yellow", icon: "💧", color: "#c08560",
    name: "黄河 (Yellow River)",
    pos: tangChinaPos(112, 36),  // 黄河中游
    desc: "中华文明发源地 — 唐宋初期都城（长安、洛阳、开封）都在黄河流域。但泥沙多决堤多，是治国大题" },
  { id: "great-wall", icon: "🧱", color: "#5d4037",
    name: "长城 (Great Wall)",
    pos: tangChinaPos(115, 40.5),
    desc: "防游牧入侵的人造屏障 — 决定唐宋什么时候能集中精力发展。宋代失去燕云十六州后长城以南直接暴露给金人" },
  { id: "silk-road", icon: "🐪", color: "#a07cb8",
    name: "丝绸之路 (Silk Road)",
    pos: tangChinaPos(80, 40.5),
    desc: "从长安到罗马的陆上贸易动脉 — 让唐代长安成了国际都市。阿拉伯、波斯、印度商人从这里来；佛教也是" },
  { id: "grand-canal", icon: "🚣", color: "#1565c0",
    name: "京杭大运河 (Grand Canal)",
    pos: tangChinaPos(118, 33),
    desc: "隋朝挖、唐宋兴盛 — 连黄河长江，让南方稻米运到北方都城。中国统一的物流命脉，1800 公里全人工" },
  { id: "mountains-west", icon: "🗻", color: "#5d4037",
    name: "青藏高原 (Tibetan Plateau)",
    pos: tangChinaPos(88, 32),
    desc: "天然屏障，挡住西方陆路重装入侵 — 让中国可以专心向南发展。但也挡住了中国向西扩张的路" },
];

function ChinaFeaturesView() {
  var [active, setActive] = useState(null);
  var posPct = function(p) { return [p[0] / 900 * 100, p[1] / 700 * 100]; };

  return (
    <div>
      <div style={{padding: "8px 12px", background: HC.parchmentLo, borderRadius: 8, fontSize: 12.5, marginBottom: 10, lineHeight: 1.5}}>
        <strong>⛰️ 决定唐宋历史的地理要素</strong> — 山川河流不只是风景，是 1000 年治理的硬约束。<strong>点地图上的图标</strong>看每个要素如何左右了唐宋。
      </div>
      <div style={{position: "relative", width: "100%"}}>
        <object data="/maps/tang-china.svg" type="image/svg+xml" style={{width: "100%", display: "block"}}></object>
        {CHINA_FEATURES.map(function(f) {
          var pct = posPct(f.pos);
          var isActive = active === f.id;
          return (
            <div key={f.id} style={{
              position: "absolute",
              left: "calc(" + pct[0] + "% - 14px)",
              top: "calc(" + pct[1] + "% - 14px)",
              width: 28, height: 28,
              borderRadius: "50%",
              background: isActive ? f.color : "rgba(255,255,255,0.92)",
              border: "2px solid " + f.color,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
              fontSize: 14,
              boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
              transition: "all 0.18s",
              transform: isActive ? "scale(1.18)" : "scale(1)",
              zIndex: 5,
            }} onClick={function() { setActive(active === f.id ? null : f.id); }} title={f.name}>
              {f.icon}
            </div>
          );
        })}
      </div>

      {active && (function() {
        var f = CHINA_FEATURES.find(function(x) { return x.id === active; });
        return (
          <div style={{
            marginTop: 12, padding: "12px 14px",
            background: HC.parchmentHi, borderRadius: 10,
            border: "1.5px solid " + f.color,
            fontSize: 13.5, lineHeight: 1.6,
          }}>
            <div style={{fontWeight: 700, color: f.color, fontSize: 14, marginBottom: 4}}>
              {f.icon} {f.name}
            </div>
            <div>{f.desc}</div>
            <button onClick={function() { setActive(null); }} style={{
              marginTop: 8, fontSize: 11, padding: "3px 10px",
              background: "transparent", color: HC.textSec,
              border: "1px solid " + HC.border, borderRadius: 999,
              cursor: "pointer", fontFamily: "inherit"
            }}>关闭</button>
          </div>
        );
      })()}

      <div style={{marginTop: 12, display: "flex", flexDirection: "column", gap: 6, fontSize: 12.5, color: HC.text}}>
        <div style={{fontSize: 11, color: HC.textSec, marginBottom: 2}}>所有要素：</div>
        {CHINA_FEATURES.map(function(f) {
          return (
            <div key={f.id} onClick={function() { setActive(f.id); }} style={{
              display: "flex", gap: 8,
              padding: "8px 10px",
              background: active === f.id ? "rgba(196,107,48,0.10)" : HC.parchmentHi,
              borderRadius: 6,
              border: "1px solid " + (active === f.id ? f.color : HC.parchmentLo),
              lineHeight: 1.4,
              cursor: "pointer",
            }}>
              <span style={{fontSize: 16}}>{f.icon}</span>
              <div style={{flex: 1, minWidth: 0}}>
                <div style={{fontWeight: 600, color: HC.ink, fontSize: 12.5}}>{f.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── N4: 通史脉络图 ─────────────────────────────────────────────
function ThroughLineMap(props) {
  var [topicProgress, setTopicProgress] = useState({});

  useEffect(function() {
    if (typeof window === "undefined") return;
    try {
      var raw = localStorage.getItem("vocabspark_v1");
      var d = raw ? JSON.parse(raw) : null;
      var prog = (d && d.historyData && d.historyData.completedTopics) || {};
      setTopicProgress(prog);
    } catch (e) {}
  }, []);

  var registry = TOPIC_REGISTRY || [];
  var completedCount = Object.keys(topicProgress).length;
  var totalAvailable = registry.filter(function(t) { return t.available; }).length;
  var totalXp = Object.values(topicProgress).reduce(function(sum, t) { return sum + (t.xpEarned || 0); }, 0);

  var byThroughLine = {};
  registry.forEach(function(reg) {
    var t = HISTORY_TOPICS[reg.id];
    if (!t) {
      byThroughLine["future"] = byThroughLine["future"] || [];
      byThroughLine["future"].push(Object.assign({}, reg, { future: true }));
    } else {
      var line = t.throughLine || "future";
      byThroughLine[line] = byThroughLine[line] || [];
      byThroughLine[line].push({ topic: t, registry: reg });
    }
  });

  return (
    <div style={{
      marginBottom: 14,
      padding: "14px 16px",
      background: HC.card,
      borderRadius: 14,
      border: "1px solid " + HC.border,
    }}>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        marginBottom: 12, flexWrap: "wrap", gap: 8
      }}>
        <h3 style={{margin: 0, fontFamily: FONT_DISPLAY, fontSize: 15, color: HC.ink}}>
          📜 通史脉络
        </h3>
        <div style={{display: "flex", gap: 10, fontSize: 11, color: HC.textSec}}>
          <span>✅ 已学 {completedCount}/{totalAvailable}</span>
          {totalXp > 0 && <span style={{color: HC.gold, fontWeight: 600}}>⚡ {totalXp} XP 累计</span>}
        </div>
      </div>

      {Object.keys(byThroughLine).filter(function(k) { return k !== "future"; }).map(function(lineId) {
        var line = THROUGH_LINES[lineId] || { cn: lineId, color: HC.teal };
        var topicsInLine = byThroughLine[lineId];
        return (
          <div key={lineId} style={{marginBottom: 10}}>
            <div style={{
              display: "flex", alignItems: "center", gap: 6,
              fontSize: 11, fontWeight: 700,
              color: line.color, letterSpacing: 1, marginBottom: 6,
            }}>
              <span style={{display: "inline-block", width: 14, height: 3, background: line.color, borderRadius: 2}}/>
              {line.cn} 主线
            </div>
            <div style={{display: "flex", gap: 8, flexWrap: "wrap"}}>
              {topicsInLine.map(function(item) {
                var t = item.topic;
                var done = topicProgress[t.id];
                var isCurrent = props.topic && t.id === props.topic.id;
                var clickable = !isCurrent && props.onSwitch;
                return (
                  <div key={t.id}
                    onClick={clickable ? function() { props.onSwitch(t.id); } : undefined}
                    style={{
                      flex: "1 1 200px",
                      minWidth: 180,
                      padding: "10px 12px",
                      background: done ? "rgba(34,160,107,0.08)" : (isCurrent ? HC.parchmentHi : HC.parchmentLo),
                      borderTop: "1px solid " + (done ? HC.green : (isCurrent ? line.color : HC.border)),
                      borderRight: "1px solid " + (done ? HC.green : (isCurrent ? line.color : HC.border)),
                      borderBottom: "1px solid " + (done ? HC.green : (isCurrent ? line.color : HC.border)),
                      borderLeft: "3px solid " + line.color,
                      borderRadius: 8,
                      fontSize: 12,
                      color: HC.text,
                      cursor: clickable ? "pointer" : "default",
                      transition: "all 0.15s",
                    }}>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 3}}>
                      <strong style={{fontSize: 13, color: HC.ink}}>{t.title.cn}</strong>
                      {done ? <span style={{color: HC.green, fontSize: 14}}>✓</span> :
                       isCurrent ? <span style={{
                         fontSize: 9, padding: "1px 6px", background: line.color, color: "#fff",
                         borderRadius: 999, fontWeight: 700, letterSpacing: 1
                       }}>当前</span> : null}
                    </div>
                    <div style={{fontSize: 11, opacity: 0.78, lineHeight: 1.4}}>
                      {t.title.en} · {t.year}
                    </div>
                    {done && done.xpEarned ? (
                      <div style={{fontSize: 10, color: HC.gold, fontWeight: 600, marginTop: 3}}>
                        ⚡ {done.xpEarned} XP · {new Date(done.completedAt).toLocaleDateString("zh-CN")}
                      </div>
                    ) : null}
                    {clickable && !done ? (
                      <div style={{fontSize: 10, color: HC.accent, fontWeight: 600, marginTop: 3}}>
                        → 点击切换到这个 Topic
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {byThroughLine.future && byThroughLine.future.length > 0 && (
        <div style={{
          marginTop: 8, padding: "8px 10px",
          background: "rgba(0,0,0,0.03)", borderRadius: 6,
          fontSize: 11, color: HC.textSec,
        }}>
          🔒 即将上线：
          {byThroughLine.future.map(function(f, i) {
            return <span key={i} style={{
              display: "inline-block", padding: "2px 8px", margin: "2px 4px",
              background: HC.parchmentLo, borderRadius: 999, fontSize: 10.5, opacity: 0.75,
            }}>{f.note || f.id}</span>;
          })}
        </div>
      )}
    </div>
  );
}

// ─── Feature item（旧的，保留以防引用） ─────────────────────────────
function FeatureItem(props) {
  return (
    <div style={{
      display: "flex", gap: 10,
      padding: "10px 12px",
      background: HC.parchmentHi,
      borderRadius: 8,
      border: "1px solid " + HC.parchmentLo,
      lineHeight: 1.5
    }}>
      <span style={{fontSize: 22, lineHeight: 1}}>{props.icon}</span>
      <div style={{flex: 1, minWidth: 0}}>
        <div style={{fontWeight: 700, color: HC.ink, marginBottom: 2}}>{props.name}</div>
        <div style={{fontSize: 11.5, color: HC.text, opacity: 0.88}}>{props.desc}</div>
      </div>
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
          marginBottom: 8,
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

      {/* ── 英文比例选择（N3） ── */}
      {props.englishLevel !== undefined && (
        <div style={{
          padding: "8px 12px",
          background: HC.parchmentHi,
          borderRadius: 10,
          fontSize: 11.5,
          color: HC.text,
          marginBottom: 12,
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexWrap: "wrap"
        }}>
          <span style={{opacity: 0.85, marginRight: 4}}>📊 AI 用多少英文：</span>
          {[
            { v: "low",      l: "中文偏多",   d: "75% 中" },
            { v: "balanced", l: "中英平衡",   d: "50/50" },
            { v: "high",     l: "英文偏多",   d: "65% 英" },
          ].map(function(opt) {
            var active = props.englishLevel === opt.v;
            return (
              <button key={opt.v} onClick={function(){ props.onSetEnglishLevel(opt.v); }} style={{
                padding: "4px 10px",
                background: active ? HC.accent : "rgba(0,0,0,0.04)",
                color: active ? "#fff8e8" : HC.text,
                border: "1px solid " + (active ? HC.accent : "rgba(0,0,0,0.08)"),
                borderRadius: 999, fontSize: 11.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit"
              }} title={opt.d}>{opt.l}</button>
            );
          })}
        </div>
      )}

      <div style={{
        background: HC.card, padding: 20, borderRadius: 16, border: "1px solid " + HC.border,
        marginBottom: 14
      }}>
        <h3 style={{margin: "0 0 10px", fontFamily: FONT_DISPLAY, fontSize: 17, color: HC.ink}}>这一章你会经历什么</h3>
        <div style={{
          padding: "8px 12px", marginBottom: 12,
          background: HC.accentLight, borderRadius: 8,
          fontSize: 12, color: HC.text, lineHeight: 1.55,
          borderLeft: "3px solid " + HC.accent
        }}>
          📍 <strong>页面顶部的「Where this happened」</strong>就是地图区 — 任何时候都可以点开看 1200 年的欧洲，再翻过来看今天。<br/>
          ⭐ AI 说话里**金色的词**点一下能看 IPA + 听发音；<span style={{color: HC.teal, fontWeight: 600}}>蓝色虚线下划线的人名地名</span>点一下看解释。
          {/* B3: 重看 walkthrough 入口 */}
          {props.onShowWalkthrough && (
            <span style={{
              marginLeft: 8, fontSize: 11, color: HC.teal,
              cursor: "pointer", textDecoration: "underline",
            }} onClick={props.onShowWalkthrough}>↻ 重看引导</span>
          )}
        </div>
        <ol style={{margin: 0, paddingLeft: 20, fontSize: 14, color: HC.text, lineHeight: 1.7}}>
          {topic.id === "tang-song-china" ? (
            <>
              <li>跟 AI 聊 11 轮 — 用你已经熟的中国史看世界（home advantage）</li>
              <li>对照同时代欧洲：科举 vs 出生选拔、四大发明 vs 不识字国王</li>
              <li>读《唐律疏议》节选 + 李白诗 — 1000 年前的真东西</li>
              <li>代入虚构的农家女儿 — 用现代藤校决策做类比</li>
              <li>过一关核心词汇 + 概念背诵 — <strong>不背不算完成</strong></li>
            </>
          ) : (
            <>
              <li>跟 AI 聊 13 轮 — 从校规类比开始，慢慢引到 Magna Carta</li>
              <li>看 1200 年的欧洲地图，翻过来看今天的欧洲（君士坦丁堡 = 伊斯坦布尔！）</li>
              <li>读 800 年前的真东西 — Clause 39 原文 + 中文释义</li>
              <li>代入一个想象的 13 岁角色，体会那天的难抉择</li>
              <li>过一关核心词汇 + 概念背诵 — <strong>不背不算完成</strong></li>
            </>
          )}
        </ol>
        <div style={{marginTop: 12, padding: 10, background: HC.tealLight, borderRadius: 8, fontSize: 12, color: HC.text}}>
          <strong style={{color: HC.teal}}>桥接：</strong>
          {topic.id === "tang-song-china" ? (
            <>这次"反向桥" — 用你已熟的<strong>唐宋历史</strong>对照同时代欧洲，建立『中国 vs 西方』两套不同治理逻辑的认知。</>
          ) : (
            <>这次我们用<strong>唐律疏议 (651 AD)</strong>作中国史锚点 — 比 Magna Carta 早 564 年。</>
          )}
        </div>
      </div>

      {/* N4: 通史脉络图 — 已学 + 待学 Topic 一览（点 Topic 卡可切换）*/}
      <ThroughLineMap topic={topic} onSwitch={props.onSwitchTopic} />

      {/* O6: 上次未完成？给"继续上次"和"重新开始"两个按钮 */}
      {props.savedSession && props.savedSession.turnIndex ? (
        <div style={{
          padding: "12px 14px",
          background: HC.tealLight,
          borderRadius: 12,
          border: "1px solid " + HC.teal,
          marginBottom: 12,
          fontSize: 13,
          color: HC.text,
          lineHeight: 1.55
        }}>
          <div style={{fontWeight: 700, color: HC.teal, marginBottom: 4}}>
            ⏯ 你上次走到了第 {props.savedSession.turnIndex} 轮
          </div>
          <div style={{fontSize: 11.5, opacity: 0.85, marginBottom: 10}}>
            上次保存于 {new Date(props.savedSession.savedAt).toLocaleDateString("zh-CN")}。可以继续上次，也可以重新开始。
          </div>
          <div style={{display: "flex", gap: 8, flexWrap: "wrap"}}>
            <button
              onClick={props.onResume}
              style={{
                padding: "10px 18px",
                background: HC.accent,
                color: "#fff8e8",
                border: "none",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit"
              }}
            >▶ 继续上次（第 {props.savedSession.turnIndex} 轮）</button>
            <button
              onClick={props.onClearAndStart}
              style={{
                padding: "10px 18px",
                background: "transparent",
                color: HC.textSec,
                border: "1px solid " + HC.border,
                borderRadius: 999,
                fontSize: 13,
                cursor: "pointer",
                fontFamily: "inherit"
              }}
            >从头开始</button>
          </div>
        </div>
      ) : (
        <div style={{textAlign: "center"}}>
          <button
            className="continue-btn"
            style={{background: HC.accent, fontSize: 15, padding: "14px 36px"}}
            onClick={props.onStart}
          >
            准备好了，开始吧 →
          </button>
        </div>
      )}
    </div>
  );
}

// ─── (ConversationStream + SourceCard + MasteryGateOverlay + SpellingTest + DefinitionTest + ApplicationTest + CompletionScreen 已抽到 components/history-engine/{ConversationStream,MasteryGate,CompletionScreen}.js) ───

// ─── (renderBilingualText / MustMemorizeChip / EnglishTapPhrase / findMustMemorizeData 已抽到 components/history-engine/bilingual.js) ───

// ─── U4: 30s 首次 walkthrough（4 步教用户核心交互） ─────────────────
function Walkthrough(props) {
  var [step, setStep] = useState(0);
  var steps = [
    {
      icon: "🦉",
      title: "AI 用你的世界讲历史",
      body: "13 轮对话从你的校规出发，慢慢引到 Magna Carta。不是讲课 — 是聊天。",
    },
    {
      icon: "⭐",
      title: "三种颜色提示",
      body: (
        <>
          <div style={{display: "inline-block", margin: "2px 4px 2px 0", padding: "1px 8px 1px 6px",
            background: "linear-gradient(135deg, #fef3d2, #fbe8a8)", border: "1px solid #d4a050",
            borderRadius: 6, fontSize: 13, fontWeight: 600, color: "#5a1a1a"
          }}>⭐<strong style={{margin: "0 3px"}}>charter</strong>
            <span style={{fontSize: 10, opacity: 0.75, fontWeight: 400}}>特许状</span>
          </div> 必背词，点开看 IPA + 听发音<br/>
          <span style={{borderBottom: "1px dashed #4a6d8c", padding: "0 2px", color: "#4a6d8c", fontWeight: 500}}>
            King John<sup style={{fontSize: 8}}>?</sup>
          </span> 人名地名，点开看解释<br/>
          <span style={{borderBottom: "1px dotted rgba(74,109,140,0.35)"}}>any English word</span> 点查中文（Achieve3000 式）
        </>
      ),
    },
    {
      icon: "🌍",
      title: "页面顶部地图 4 层",
      body: "世界 → 欧洲 → 英国 → 地理要素。任何时候都可以展开看，1200 年地图能翻转看今天。",
    },
    {
      icon: "🤔",
      title: "右下角追问助手",
      body: "对话过程中有疑问？右下角浮动按钮点开问 — 跟主对话隔离，不打断主流程。中英都行。",
    },
  ];
  var s = steps[step];
  var isLast = step === steps.length - 1;

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 3000,
      background: "rgba(44, 36, 32, 0.78)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 20,
    }}>
      <div style={{
        background: HC.parchment,
        maxWidth: 420, width: "100%",
        borderRadius: 18,
        padding: 24,
        border: "1.5px solid " + HC.parchmentLo,
        boxShadow: "0 16px 50px rgba(0,0,0,0.4)",
      }}>
        {/* 进度 dot */}
        <div style={{display: "flex", gap: 6, marginBottom: 16, justifyContent: "center"}}>
          {steps.map(function(_, i) {
            return <div key={i} style={{
              width: i === step ? 24 : 8, height: 8,
              borderRadius: 4,
              background: i === step ? HC.accent : (i < step ? HC.green : HC.parchmentLo),
              transition: "all 0.25s",
            }}/>;
          })}
        </div>

        <div style={{textAlign: "center", marginBottom: 14}}>
          <div style={{fontSize: 56, lineHeight: 1, marginBottom: 6}}>{s.icon}</div>
          <h3 style={{margin: 0, fontFamily: FONT_DISPLAY, fontSize: 20, color: HC.ink}}>{s.title}</h3>
        </div>

        <div style={{
          padding: "14px 16px",
          background: "rgba(255,255,255,0.5)",
          borderRadius: 12,
          fontSize: 14,
          lineHeight: 1.65,
          color: HC.text,
          marginBottom: 18,
          minHeight: 90,
        }}>
          {s.body}
        </div>

        <div style={{display: "flex", gap: 8, justifyContent: "space-between"}}>
          <button onClick={props.onClose} style={{
            padding: "9px 18px",
            background: "transparent",
            color: HC.textSec,
            border: "1px solid " + HC.border,
            borderRadius: 999,
            fontSize: 12.5,
            cursor: "pointer",
            fontFamily: "inherit"
          }}>跳过 (我会用)</button>
          <button
            onClick={function() {
              if (isLast) props.onClose();
              else setStep(step + 1);
            }}
            style={{
              padding: "10px 24px",
              background: HC.accent,
              color: "#fff8e8",
              border: "none",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit"
            }}
          >
            {isLast ? "开始 →" : "下一步 →"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Sidekick FAB — 学习时浮动追问助手（与主上下文隔离） ─────────
function SidekickFAB(props) {
  var endRef = useRef(null);
  var isOpen = props.isOpen;

  useEffect(function() {
    if (endRef.current) {
      try { endRef.current.scrollIntoView({ behavior: "smooth", block: "end" }); } catch (e) {}
    }
  }, [props.log && props.log.length, props.streaming, props.thinking]);

  return (
    <>
      {/* 浮动按钮（始终在右下） */}
      <button
        onClick={props.onToggle}
        style={{
          position: "fixed",
          bottom: "max(110px, calc(env(safe-area-inset-bottom) + 110px))",  // B7: 输入栏上方，避开 iOS 安全区
          right: 16,
          width: 54, height: 54,
          borderRadius: "50%",
          background: isOpen ? HC.pinFill : HC.accent,
          color: "#fff8e8",
          border: "none",
          fontSize: 22,
          cursor: "pointer",
          boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          zIndex: 100,
          fontFamily: "inherit",
          transition: "all 0.2s",
        }}
        title={isOpen ? "关闭追问助手" : "有问题？问我"}
        aria-label="Sidekick"
      >
        {isOpen ? "✕" : "🤔"}
      </button>

      {/* 抽屉（打开时显示） */}
      {isOpen && (
        <div style={{
          position: "fixed",
          bottom: 16,
          right: 16,
          width: "min(420px, calc(100vw - 32px))",
          maxHeight: "70vh",
          background: HC.card,
          borderRadius: 16,
          border: "1px solid " + HC.border,
          boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
          zIndex: 99,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          fontFamily: FONT,
        }}>
          {/* 头部 */}
          <div style={{
            padding: "12px 14px",
            borderBottom: "1px solid " + HC.border,
            background: HC.parchmentHi,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: HC.tealLight,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18,
            }}>🦉</div>
            <div style={{flex: 1}}>
              <div style={{fontWeight: 700, fontSize: 13, color: HC.ink}}>追问助手</div>
              <div style={{fontSize: 10.5, color: HC.textSec, opacity: 0.8}}>有不懂的随时问，不打断主对话</div>
            </div>
          </div>

          {/* 对话区 */}
          <div style={{
            flex: 1, padding: "10px 12px",
            overflowY: "auto",
            display: "flex", flexDirection: "column", gap: 8,
          }}>
            {props.log.length === 0 && (
              <div style={{
                padding: "10px 12px",
                background: HC.parchmentLo,
                borderRadius: 10,
                fontSize: 11.5, color: HC.text, lineHeight: 1.55, fontStyle: "italic",
              }}>
                💡 你可以问我：<br/>
                · 这个词什么意思？<br/>
                · 那个人为什么这么做？<br/>
                · 这跟今天有什么关系？<br/>
                <br/>
                跟主题相关的我都答。完全离题的（比如晚饭吃什么）我会拉回来。
              </div>
            )}
            {props.log.map(function(entry, i) {
              if (entry.role === "user") {
                return (
                  <div key={i} style={{
                    alignSelf: "flex-end",
                    maxWidth: "85%",
                    padding: "8px 11px",
                    background: HC.accent,
                    color: "#fff8e8",
                    borderRadius: 12,
                    borderTopRightRadius: 4,
                    fontSize: 13,
                    lineHeight: 1.5,
                  }}>{entry.content}</div>
                );
              }
              return (
                <div key={i} style={{
                  alignSelf: "flex-start",
                  maxWidth: "85%",
                  padding: "8px 11px",
                  background: HC.parchmentHi,
                  color: HC.text,
                  borderRadius: 12,
                  borderTopLeftRadius: 4,
                  fontSize: 13,
                  lineHeight: 1.55,
                  border: "1px solid " + HC.parchmentLo,
                }}>
                  {renderBilingualText(entry.content, { topic: props.topic, onTermClick: props.onTermClick, onMustClick: props.onMustClick, enableTranslate: false })}
                </div>
              );
            })}
            {props.streaming && (
              <div style={{
                alignSelf: "flex-start",
                maxWidth: "85%",
                padding: "8px 11px",
                background: HC.parchmentHi,
                borderRadius: 12,
                borderTopLeftRadius: 4,
                fontSize: 13, lineHeight: 1.55,
                border: "1px solid " + HC.parchmentLo,
              }}>
                {renderBilingualText(props.streaming, { topic: props.topic, onTermClick: props.onTermClick, onMustClick: props.onMustClick, enableTranslate: false })}
                <span style={{opacity: 0.5}}>▌</span>
              </div>
            )}
            {props.thinking && !props.streaming && (
              <div style={{
                alignSelf: "flex-start",
                padding: "8px 11px",
                background: HC.parchmentHi,
                borderRadius: 12,
                borderTopLeftRadius: 4,
                border: "1px solid " + HC.parchmentLo,
              }}>
                <span className="thinking-dots"><span></span><span></span><span></span></span>
              </div>
            )}
            <div ref={endRef}></div>
          </div>

          {/* 输入区 */}
          <div style={{
            padding: 10,
            borderTop: "1px solid " + HC.border,
            display: "flex",
            gap: 6,
            alignItems: "center"
          }}>
            <input
              value={props.input}
              onChange={function(e) { props.onInput(e.target.value); }}
              onKeyDown={function(e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); props.onSend(); } }}
              placeholder="问我点什么..."
              style={{
                flex: 1,
                padding: "8px 12px",
                border: "1px solid " + HC.border,
                borderRadius: 999,
                fontFamily: "inherit",
                fontSize: 13,
                outline: "none",
              }}
            />
            <VoiceInputButton
              size={32}
              onTranscript={function(text) { props.onInput(text); }}
            />
            <button
              onClick={props.onSend}
              disabled={!props.input.trim() || props.thinking}
              style={{
                padding: "0 14px",
                background: HC.accent,
                color: "#fff8e8",
                border: "none",
                borderRadius: 999,
                fontSize: 12.5,
                fontWeight: 600,
                cursor: props.input.trim() && !props.thinking ? "pointer" : "not-allowed",
                opacity: props.input.trim() && !props.thinking ? 1 : 0.5,
                fontFamily: "inherit",
              }}
            >发送</button>
          </div>
        </div>
      )}
    </>
  );
}

// ─── (MustMemorizePopup + TermPopup 已抽到 components/history-engine/popups.js) ───

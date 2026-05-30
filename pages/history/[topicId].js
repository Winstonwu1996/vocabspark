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
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { BrandNavBar } from '../../components/BrandNavBar';
import { VoiceInputButton } from '../../components/VoiceInputButton';
import { C, FONT, FONT_DISPLAY, S, NUM, globalCSS } from '../../lib/theme';
import { callAPIStream, callAPIFast, tryJSON } from '../../lib/api';
import { supabase } from '../../lib/supabase';
import { useSimplifiedMode } from '../../lib/hooks/use-simplified-mode';
import { shouldShowHistoryWalkthrough } from '../../lib/onboarding-state';

import {
  HISTORY_TOPICS,
  THROUGH_LINES,
  TOPIC_REGISTRY,
  getTopic,
} from '../../lib/history-topics';
import {
  buildHistorySystemPrompt,
  buildTurnPrompt,
  buildNarrativeSystemPrompt,
  buildNarrativeTurnPrompt,
  buildStoryboardTurnPrompt,
  deriveTurnObjective,
  deriveTurnConstraints,
  buildDefinitionEvalPrompt,
  buildApplicationEvalPrompt,
  buildFreeChatSystemPrompt,
} from '../../lib/history-prompts';
import {
  getEffectiveTurns,
  isStoryboardTopic,
  getPrewrittenContent,
  hasTopicLenses,
  getTopicLenses,
  getTopicLensMeta,
} from '../../lib/history-runtime';
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
  saveLearningReceipt,
  loadLearningReceipt,
} from '../../lib/history-storage';
import { inferCurriculum } from '../../lib/curriculum-data';

// ─── history-engine 抽离组件（pages/history.js 和未来的 AtlasLabPage embed mode 共用）
import { HC } from '../../components/history-engine/theme';
import { renderBilingualText } from '../../components/history-engine/bilingual';
import { MustMemorizePopup, TermPopup } from '../../components/history-engine/popups';
import { ConversationStream } from '../../components/history-engine/ConversationStream';
import { MasteryGateOverlay } from '../../components/history-engine/MasteryGate';
import { CompletionScreen } from '../../components/history-engine/CompletionScreen';
import { ConceptReview } from '../../components/history-engine/ConceptReview';
import { ProfileSetup } from '../../components/history-engine/ProfileSetup';
// ThroughLineMap 不再在单课页用 (首页是 51 门主选课入口, 课内"换一课"重复入口已移除)
import { findViewIdByTopicId } from '../../lib/atlas-views';
import { parseTopicYear, getChinaDynastyForYear, isChinaTopic } from '../../lib/china-dynasty-map';
import { hasNotebook, loadNotebook } from '../../lib/history-storyboards/notebooks/index.js';
// Step 4b-1: 进课 tier gate (flag off 时 CourseGateMount 不渲染 → 不调 useUserTier)。
// ⚠️ 不在此静态 import membership/useUserTier — 隔离在 CourseGate.js (经 CourseGateMount 懒加载)。
import { ENABLE_HISTORY_PAYWALL } from '../../lib/history-paywall-flag';
import { CourseGateMount } from '../../components/history-engine/CourseGateMount';

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
      sys += "\n\n【当前主对话进度】她在主对话第 " + (turnIndex + 1) + " / " + effectiveTurns.length + " 轮（move = " + (effectiveTurns[turnIndex] || {}).move + "）。这是侧边追问，不要打断主对话节奏，只回答她侧边问题。";
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

      // Gate3 §8 part-2: fire-and-forget 追问日志（失败静默，绝不阻塞对话）
      try {
        fetch("/api/history-branch-log", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: (profileFields && profileFields.userId) || null,
            topicId: topicId,
            lensId: effectiveLensId || null,
            turnIndex: turnIndex,
            question: content,
            answer: fullText,
          }),
        }).catch(function () {});
      } catch (e) {}

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
  var [englishLevel, setEnglishLevelState] = useState("high");  // 默认 EN(用户随时可用 EN/中 按钮切换); high=EN, 其他=CN

  // —— U4: 首次 walkthrough ——
  var [showWalkthrough, setShowWalkthrough] = useState(false);

  // —— Topic 数据（支持 ?topicId=xxx URL 参数切换）——
  // S9 难度梯度：默认 Magna Carta（已成熟），但 fresh user 第一次推 Tang/Song（home advantage 难度低）
  // 初始 null：URL 解析完成前不渲染任何 topic（否则非 Magna 直链/iframe 首帧会闪 Magna
  // 并多发一次 /api/narrative?topicId=magna-carta-1215）。urlResolved 决定首屏是 shell 还是内容。
  var [topicId, setTopicId] = useState(null);
  var [urlResolved, setUrlResolved] = useState(false);
  var topic = topicId ? getTopic(topicId) : null;
  // ─── Story-First Pedagogy v3 桥接（见 docs/STORY_FIRST_PEDAGOGY.md）───
  // 如 Topic 有 storyboard（lib/history-storyboards/{topicId}.js）走新模型，
  // 否则 fallback 到旧 conversationTurns。
  // v3 lens 模型：用户可选不同角色视角看同一事件——effectiveTurns 按 lens 加载
  var [selectedLensId, setSelectedLensId] = useState(null);
  var topicLenses = topic ? getTopicLenses(topicId) : [];
  var hasLensesForTopic = hasTopicLenses(topicId);
  // 没选时用 storyboard 声明的 defaultLens（受影响者优先 pattern，见各 storyboard），
  // fallback 到第一个 lens。修复前误取 topicLenses[0]（=第一个 lens，通常是 perpetrator），
  // 导致 33/37 个 topic 默认开在加害者视角而非作者声明的 receiving-end 视角。
  var topicDefaultLensMeta = (topic && hasLensesForTopic) ? getTopicLensMeta(topicId) : null;
  var effectiveLensId = selectedLensId
    || (topicDefaultLensMeta ? topicDefaultLensMeta.id : (hasLensesForTopic && topicLenses[0] ? topicLenses[0].id : null));
  var effectiveTurns = topic ? getEffectiveTurns(topicId, topic, effectiveLensId) : [];
  // Learning Receipt：该 (topic,lens) 是否已交过收据（memo 避免每次渲染 parse 整个 blob）。
  // 仅判定「往期已交」；本会话刚交由 ConversationStream 内部 receiptSubmitted 处理。
  var existingReceipt = useMemo(function() {
    return topicId ? loadLearningReceipt(topicId, effectiveLensId) : null;
  }, [topicId, effectiveLensId]);
  var isStoryboard = isStoryboardTopic(topicId);

  // ── narrative-driven 架构：当前 topic 的 canonical narrative（mount 时拉一次）──
  // 有 narrative 走新 prompt builder（稳定内核 + 千人千面）；
  // 没 narrative 走旧 prompt builder（向后兼容未迁移的 Topic）
  var [narrativeData, setNarrativeData] = useState(null); // { metadata, body } | null
  var [narrativeLoading, setNarrativeLoading] = useState(true);
  useEffect(function() {
    if (!topicId) return;
    setNarrativeLoading(true);
    setNarrativeData(null);
    fetch("/api/narrative?topicId=" + encodeURIComponent(topicId))
      .then(function(r) { return r.ok ? r.json() : null; })
      .then(function(d) {
        if (d && d.body) setNarrativeData({ metadata: d.metadata || {}, body: d.body });
      })
      .catch(function() { /* 静默 fallback 走旧 prompt builder */ })
      .finally(function() { setNarrativeLoading(false); });
  }, [topicId]);

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
      // 路由优先：/history/<topicId> 路径参数 > ?topicId= query（atlas embedded 仍用 query）
      var pathMatch = window.location.pathname.match(/\/history\/([^/?#]+)/);
      var t = null;
      if (pathMatch) {
        try {
          t = decodeURIComponent(pathMatch[1]);
        } catch (decErr) {
          // malformed % 路径（/history/%E0 等）→ decodeURIComponent 抛错 → 回目录，
          // 不要停在默认课内容但 URL 仍非法。
          window.location.replace("/history");
          return;
        }
      }
      if (!t) t = p.get("topicId");
      // 检测 atlas-lab 跳转
      if (p.get("from") === "atlas") {
        setFromAtlas({ atlasId: p.get("atlasId") || null });
      }
      // Stage 4：detect embedded mode（iframe 在 atlas-lab 内嵌）
      if (p.get("embedded") === "1") {
        setEmbedded(true);
      }
      // #2α Cosplay：?role=1 表示 atlas-lab 已把所选 figure 写入 localStorage.pendingRole
      // 5-5 加：?lens=1 表示 atlas figure 是 lens-derived，pendingLensId 也已写入 → 自动选 lens
      // 立刻读出来 + 清掉 pending（一次性 — 防止下次打开还套这个角色）
      var resolveTopicId = (t && getTopic(t)) ? t : null;
      if (p.get("role") === "1") {
        var raw = localStorage.getItem("vocabspark_v1");
        var d = raw ? JSON.parse(raw) : null;
        var rolesByTopic = (d && d.pendingRole) || {};
        var lensIdsByTopic = (d && d.pendingLensId) || {};
        // role 跟 topicId 绑定 — 找当前 topicId 对应的 pendingRole
        var key = resolveTopicId || (d && d.historyData && d.historyData.lastTopicId) || "magna-carta-1215";
        var pr = rolesByTopic[key];
        var pl = lensIdsByTopic[key];
        if (pr && pr.figure) {
          setPendingRole(pr);
          delete rolesByTopic[key];
          d.pendingRole = rolesByTopic;
        }
        // 5-5: 如果 atlas 传了 lensId，自动选 lens 跳过 IntroScreen lens selector
        if (pl && pl.lensId && p.get("lens") === "1") {
          setSelectedLensId(pl.lensId);
          delete lensIdsByTopic[key];
          d.pendingLensId = lensIdsByTopic;
        }
        if (pr || pl) {
          d.updatedAt = new Date().toISOString();
          localStorage.setItem("vocabspark_v1", JSON.stringify(d));
        }
      }
      if (t && getTopic(t)) {
        setTopicId(t);
        setUrlResolved(true);
        return;
      }
      // 路径里有 id 但不是有效课程（/history/not-a-real-topic）→ 回首页(目录)，
      // 不要"内容显示唐宋、URL 却是非法路径"那种分裂(分享出去更乱)。
      if (t) {
        if (typeof window !== "undefined") window.location.replace("/history");
        return;
      }
      // 防御：理论上 [topicId] 路由总有路径段；万一没有，按 fresh user 回首页
      if (typeof window !== "undefined") window.location.replace("/history");
    } catch (e) {}
  }, []);

  // U5/S7: Topic 切换时重新加载该 Topic 的 sidekick log 和 in-progress 状态
  useEffect(function() {
    if (typeof window === "undefined") return;
    setSidekickLog(loadSidekickLog(topicId));
    var inProg = loadInProgress(topicId);
    if (inProg && inProg.turnIndex > 0 && inProg.turnIndex < (topic ? effectiveTurns.length : 13)) {
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

    // 5-5 R2: atlas/embedded/role 流程下不阻塞 ProfileSetup —
    //         lens prewritten 内容不消费 profile 字段, 强制填表浪费 funnel.
    //         自动 save 一个 placeholder profile, 后续 IntroScreen 显示
    //         "🎯 还没填画像" hint chip 让用户随时回填.
    var __searchParamsForProfile = (typeof window !== "undefined") ? new URLSearchParams(window.location.search) : null;
    var __skipProfileBlock = !!(__searchParamsForProfile && (
      __searchParamsForProfile.get("embedded") === "1" ||
      __searchParamsForProfile.get("from") === "atlas" ||
      __searchParamsForProfile.get("role") === "1"
    ));

    if (hp) {
      // 已有结构化 profile
      setHistoryProfile(hp);
      setProfileFields(historyProfileToFields(hp));
      setCurriculum(loadCurriculum());
    } else if (__skipProfileBlock) {
      // R2: atlas-route 不阻塞 — 自动用 placeholder profile, 不弹 ProfileSetup
      var placeholderProfile = {
        name: "你",
        age: 13,
        grade: 7,
        city: "Irvine",
        fromCity: "中国",
        schoolName: "",
        schoolType: "public",
        interest: "",
        parentWord: "爸妈",
        placeholder: true,  // AI prompt 见到 placeholder=true 跳过个性化字段
      };
      saveHistoryProfile(placeholderProfile);
      setHistoryProfile(placeholderProfile);
      setProfileFields(historyProfileToFields(placeholderProfile));
      setCurriculum(loadCurriculum());
      setNeedsProfileSetup(false);
    } else if (loaded.profile) {
      // 有 vocab 的自由文本 profile，但没结构化版本 → 仍展示 setup 让她确认 + 字段化
      setNeedsProfileSetup(true);
      setProfileFields(parseProfileFields(loaded.profile));
    } else {
      // 完全没有 profile → 展示 setup, 但加了 [稍后再说] 按钮 (见 ProfileSetup 组件)
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
    // 5-5 R1+R4 systemic: 走 lib/onboarding-state.js shouldShowHistoryWalkthrough
    //   - R1 守卫: URL atlas/embedded/role 流程下不弹
    //   - R4 协调: 已看过 atlas-tour 也降级不弹 (信息重叠 80%)
    //   - 直接 URL 首次访问才弹 (唯一引导场景)
    var __searchParamsForWalkthrough = (typeof window !== "undefined") ? new URLSearchParams(window.location.search) : null;
    var __urlFlagsActive = !!(__searchParamsForWalkthrough && (
      __searchParamsForWalkthrough.get("embedded") === "1" ||
      __searchParamsForWalkthrough.get("from") === "atlas" ||
      __searchParamsForWalkthrough.get("role") === "1"
    ));
    if (shouldShowHistoryWalkthrough({ skipFromUrlFlags: __urlFlagsActive })) {
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
    // Codex P1 修: paywall on 时禁用此捷径 — 否则 ?skipto=mastery 能跳进任意锁课的
    // mastery/complete, 再经 MasteryGate cancel/pass 进 conversation 绕过 tier gate。
    if (!ENABLE_HISTORY_PAYWALL) {
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
    }

    // 清理 visualViewport listener
    return cleanup;
  }, []);

  // ─── AI 调用核心 ────────────────────────────────────────────────
  var fetchAIForTurn = async function(turn, lastUserAnswer) {
    if (!turn || turn.role === "user") return;

    // ⭐ Story-First Pedagogy v3：Opus prewritten content 短路
    // 如果 storyboard 节点有 prewritten content（hook + story phase）——
    // 直接交付——skip API call——零 hallucination + 零延迟 + 零成本
    var prewritten = getPrewrittenContent(turn, englishLevel === 'high' ? 'en' : 'cn');
    if (prewritten) {
      var prewrittenEntry = {
        role: "ai",
        turn: turn.n,
        move: turn.move,
        content: injectPlaceholders(prewritten, profileFields),
        timestamp: new Date().toISOString(),
        _prewritten: true,
      };
      setConversationLog(function(prev) { return prev.concat([prewrittenEntry]); });
      // 模拟 streaming 节奏（让用户感觉自然——不是瞬间出现一大段）
      setAiThinking(false);
      // 自动进入下一节点（如果当前节点不需用户答）
      if (turn.move === "geo") setGeoOpen(true);
      if (turn.autoAdvance) {
        setTimeout(function() { advanceTurn(); }, 1500);
      }
      return;
    }

    // ── synthesis + meta + branch 等需要 AI 实时生成 → 走 DeepSeek
    setAiThinking(true);
    setAiStreaming("");
    setError("");

    // U1: 10 秒还没首字 → 显示"AI 慢了，要不要重试？"
    var slowWarnTimer = setTimeout(function() {
      setError("AI 反应慢了 — 网络可能不稳。再等等或刷新页面。");
    }, 10000);
    try {
      // ── 分流：有 narrative → 走 two-tier 架构（Opus 写内容 + DeepSeek 跑对话）
      //          没 narrative → 走旧 prompt builder（兼容未迁移 Topic）──
      var sys, userPrompt;
      if (narrativeData && narrativeData.body) {
        sys = buildNarrativeSystemPrompt({
          topic: topic,
          narrativeBody: narrativeData.body,
          narrativeMetadata: narrativeData.metadata || {},
          profile: profileText,
          userName: profileFields.userName,
          userAge: profileFields.userAge,
          userSchool: profileFields.userSchool,
          worldview: worldview,
          history: conversationLog,
          englishLevel: englishLevel,
          roleContext: pendingRole,
        });
        // ─── Story-First Pedagogy 分支 ───
        // 如果 turn 是 storyboard 节点（_storyboardNode 存在）走新 prompt builder
        // 否则用旧 buildNarrativeTurnPrompt（13-turn forced Socratic 模式）
        if (turn._storyboardNode) {
          userPrompt = buildStoryboardTurnPrompt(turn._storyboardNode, {
            lastUserAnswer: lastUserAnswer,
            totalNodes: effectiveTurns.length,
            isResumeFromBranch: false,  // TODO Stage 2.2.b: 从 branch state 读
          });
        } else {
          // 自动派生 objective / narrativePoint / askAbout / constraints
          // （turn 自身可显式覆盖；没覆盖就走 deriveTurnObjective 默认）
          var derived = deriveTurnObjective(turn);
          var enrichedTurn = Object.assign({}, turn, {
            objective: derived.objective,
            narrativePoint: derived.narrativePoint,
            askAbout: derived.askAbout,
            constraints: deriveTurnConstraints(turn),
          });
          userPrompt = buildNarrativeTurnPrompt(enrichedTurn, {
            lastUserAnswer: lastUserAnswer,
            totalTurns: effectiveTurns.length || 13,
          });
        }
      } else {
        sys = buildHistorySystemPrompt({
          topic: topic,
          profile: profileText,
          userName: profileFields.userName,
          userAge: profileFields.userAge,
          userSchool: profileFields.userSchool,
          worldview: worldview,
          history: conversationLog,
          englishLevel: englishLevel,
          roleContext: pendingRole,
          // 5-5 R2: 用户选 [稍后再说] → placeholder=true,prompt 不强行带个人字段
          placeholder: !!(historyProfile && historyProfile.placeholder),
        });
        userPrompt = buildTurnPrompt(turn, { lastUserAnswer: lastUserAnswer });
      }
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
    // Step 4b-3 (方案 X): 对话中途 tier 掉档 (未完成 lens 变 over-tier → freshGateAccess 'deny')
    // → 拦推进 + 弹升级, 停在当前轮。已完成 lens 走 grandfather 不受影响; error-blocked (网络
    // 抖动) 不拦 (fail-open, 不因瞬时网络问题打断学习)。gate 每 30s 经 onAccessChange 重报。
    if (ENABLE_HISTORY_PAYWALL && freshGateAccess() === 'deny') {
      setShowUpgradeGate(true);
      return;
    }
    var nextIdx = turnIndex + 1;
    setTurnIndex(nextIdx);
    // O6：每次推进保存进度（mid-conversation only）
    if (nextIdx > 0 && nextIdx < effectiveTurns.length && phase === "conversation") {
      saveInProgress(topicId, {
        turnIndex: nextIdx,
        conversationLog: conversationLog,
        lensId: effectiveLensId || null, // Codex P2-j: 存档绑定 lens, resume 时按此 lens 过 gate
      });
    }
    // 走完最后一轮 → 清掉 in-progress
    if (nextIdx >= effectiveTurns.length) {
      clearInProgress(topicId);
    }
  };

  // ─── 进入对话阶段时，自动 fetch 第一轮 ─────────────────────────
  useEffect(function() {
    if (phase !== "conversation") return;
    if (!topic) return;
    var turn = effectiveTurns[turnIndex];
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

  // ─── 5-4: 切换 CN/EN 时重渲染过去的 prewritten AI 条目 ────────────────
  // englishLevel 变化时,把 conversationLog 里所有 _prewritten: true 的 AI 条目
  // 重新拿当前语言的 prewritten content 替换 — 让用户回看也是新语言
  useEffect(function() {
    if (phase !== "conversation") return;
    if (!topic) return;
    if (conversationLog.length === 0) return;
    var lang = englishLevel === 'high' ? 'en' : 'cn';
    var needsUpdate = false;
    var updated = conversationLog.map(function(entry) {
      if (entry.role !== "ai" || !entry._prewritten || typeof entry.turn === 'undefined') return entry;
      // 找到对应的 turn 节点
      var turn = effectiveTurns.find(function(t) { return t.n === entry.turn; });
      if (!turn) return entry;
      var newContent = getPrewrittenContent(turn, lang);
      if (!newContent) return entry;
      var injected = injectPlaceholders(newContent, profileFields);
      if (injected !== entry.content) {
        needsUpdate = true;
        return Object.assign({}, entry, { content: injected });
      }
      return entry;
    });
    if (needsUpdate) setConversationLog(updated);
  }, [englishLevel]);  // 仅 englishLevel 变化时触发,避免无限循环

  // ─── 用户提交答案 ────────────────────────────────────────────────
  var submitUserResponse = function() {
    if (!userInput.trim()) return;
    var content = userInput.trim();
    var turn = effectiveTurns[turnIndex];
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

  // ⚠️ tiredMode / hintByTurn 的 useState 必须声明在下面这个 effect 之前。
  //   (5-22 修复 / Codex P1: 旧代码把这两个 useState 放在 effect 之后, var hoist 导致
  //    effect 的依赖数组在 render 时读到的 tiredMode 恒为 undefined → 点"累了听就好"
  //    不会可靠重跑 auto-advance effect。提前声明后依赖数组拿到真实值。)
  var [tiredMode, setTiredMode] = useState(false);
  var [hintByTurn, setHintByTurn] = useState({});  // { turnIdx: deliverGoal_string }

  // ─── tiredMode auto-advance：听模式开启时,每节点渲染后 N 秒自动 advance ───
  useEffect(function () {
    if (!tiredMode) return;
    if (phase !== "conversation") return;
    var turn = effectiveTurns[turnIndex];
    if (!turn) return;
    // 不自动跳过任何需要用户输入的节点 — synthesis/meta 真问题 + N6 检索门 + N10 史料桥
    // (5-22 修复: 旧代码查 turn.expectsRealAnswer, 但 storyboard turn 上只有 expectsInput,
    //  该字段恒 undefined → 听模式会静默跳过全部输入节点, 含新增的检索/sourcing gate。
    //  改查 expectsInput 一并覆盖 N6/N10/N11/N12, 实现原作者"不跳过真问题"的本意)
    if (turn.expectsInput) return;
    // 已是最后一节就不再 advance (走 mastery)
    if (turnIndex >= effectiveTurns.length - 1) return;
    // 等当前节点 AI entry 出现在 log 里再开始计时 (避免 turn 切换时立刻 advance)
    var found = conversationLog.find(function (e) { return e.role === "ai" && e.turn === turn.n; });
    if (!found) return;
    var contentLen = (found.content || '').length;
    // 字数估算阅读时间: 中文每字 0.3 秒 + 8 秒 buffer
    var ms = Math.min(30000, Math.max(6000, contentLen * 300 + 4000));
    var timer = setTimeout(function () { advanceTurn(); }, ms);
    return function () { clearTimeout(timer); };
  }, [tiredMode, turnIndex, phase, conversationLog]);

  // ─── 用户主动 escape action — 5-5 重设计契合 Story-First v2 prewritten 模式 ───
  //
  // 旧设计: 注入"用户消息"让 AI 下一轮看到 escape signal 后切模式
  //   问题: prewritten content 短路 AI → signal 完全丢弃 → "累了/没懂"是 dead code
  //
  // 新设计:
  //   tired      → toggle "听模式" (audio auto-play + auto-advance) — 状态保持到 toggle off
  //   dont-understand → inline 显示 deliverGoal hint (一句话核心) — 不调 AI
  //   skip       → advance to next turn — 不变
  // (tiredMode / hintByTurn 的 useState 已上移到 tiredMode effect 之前 — 见上方注释)

  var handleEscapeAction = function(action) {
    var turn = effectiveTurns[turnIndex];
    if (!turn) return;

    if (action === "tired") {
      // toggle 听模式
      setTiredMode(function(prev) { return !prev; });
      return;
    }

    if (action === "dont-understand") {
      // 显示当前节点的 deliverGoal 作为 hint (lens runtime 字段)
      var hint = (turn.deliverGoal && turn.deliverGoal !== '[fallback]')
        ? turn.deliverGoal
        : (turn.engagementHook || '这一节核心信息已在上面正文，再读一次试试。');
      setHintByTurn(function(prev) {
        var next = Object.assign({}, prev);
        next[turnIndex] = hint;
        return next;
      });
      return;
    }

    if (action === "skip") {
      // 跳过 — advance to next turn 不变
      advanceTurn();
      return;
    }
  };

  // ─── 5-26 (用户反馈 #1): phase 切换自动滚到页面顶部 ──────────────
  // 否则从 conversation 末节进 notebook/mastery 时, 屏幕仍停在对话底部, 用户看不到新屏标题。
  useEffect(function() {
    if (typeof window === "undefined") return;
    try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch (e) { window.scrollTo(0, 0); }
  }, [phase]);

  // ─── 启动 conversation ─────────────────────────────────────────
  var startConversation = function() {
    setPhase("conversation");
    setTurnIndex(0);
    setConversationLog([]);
  };

  // ─── Step 4b-1: 进课 tier gate ─────────────────────────────────
  // CourseGate 上报 {access, topicId, lensId}。Codex P1 修: 结论带标签, 播放器页只信
  // 对应"当前 topic+lens"的 fresh 结论, 绝不吃旧 lens/topic 的陈旧 allow (防 stale 绕过)。
  var [gateResult, setGateResult] = useState(null); // { access, topicId, lensId } | null
  var [showUpgradeGate, setShowUpgradeGate] = useState(false);
  var [gateChecking, setGateChecking] = useState(false); // 点了进课但 gate 还没落定, 挂起中
  // Codex P1 (round8): notebook 切到锁定 lens 时, **不能**提前 setSelectedLensId 让 gate 评估 —
  // 那会在 gate 未落定的窗口把锁定 lens 变成 current, 经 notebook「继续」/ MasteryGate cancel
  // 可绕过进锁定 lens 的 conversation/收据流。改用独立候选通道: gate 评估 gateCandidateLens,
  // selectedLensId 只在 allow 才真正切。candidate 期间整个 UI 仍停在原 (已授权) lens, 无绕过窗口。
  var [gateCandidateLens, setGateCandidateLens] = useState(null);
  var pendingEnterRef = useRef(null); // 挂起的进 conversation 函数, gate allow 后执行
  var onGateAccessChange = function(access, gTopicId, gLensId) {
    setGateResult({ access: access, topicId: gTopicId, lensId: gLensId });
  };
  // gate 当前评估的 lens: 有候选 (notebook 切 lens 挂起中) 用候选, 否则用 effectiveLensId。
  var gateLensId = gateCandidateLens || effectiveLensId;
  // 当前 topic + 被 gate 的 lens 的 fresh 结论: 标签不匹配 (切了 lens/topic 还没重报) → 'loading'。
  var freshGateAccess = function() {
    if (!gateResult) return 'loading';
    if (gateResult.topicId !== topicId || gateResult.lensId !== gateLensId) return 'loading';
    return gateResult.access;
  };
  // 包一层进 conversation 的入口 (onStart / onResume / onClearAndStart / notebook 切 lens 共用)。
  // Codex P1 修: 不再乐观放行 loading/stale。未落定 → 挂起点击, 等 gate 报当前 topic+lens
  // 的结论后再放行 (allow/grandfather) 或弹升级 (deny/error-blocked)。
  var gatedEnter = function(realEnterFn) {
    return function() {
      if (!ENABLE_HISTORY_PAYWALL) { realEnterFn(); return; }
      var a = freshGateAccess();
      if (a === 'allow') { realEnterFn(); return; }
      // Step 4b-3: view-only-grandfathered 不再当 allow 进对话, 改弹只读占位屏
      // (CourseGate 据 access 渲染对应 modal); deny / error-blocked 同样弹 modal。
      if (a === 'view-only-grandfathered' || a === 'deny' || a === 'error-blocked') { setShowUpgradeGate(true); return; }
      // a === 'loading' (未落定 / stale): 挂起, 等 gate 落定 (下方 effect 处理)
      // Codex P2-d (round4): 给挂起回调打 topic/lens 标签。否则点「继续上次」(闭包套着旧
      // savedSession) 后在 tier 请求落定前切了 lens, 这个陈旧 resume 会在新 lens 下重放旧
      // transcript。effect 解析时校验标签 == 当前 effectiveLensId, 不匹配作废。
      pendingEnterRef.current = { fn: realEnterFn, topicId: topicId, lensId: gateLensId };
      setGateChecking(true);
    };
  };

  // gate 落定后处理挂起的进课点击 (Codex P1: 不乐观放行, 等真结论)
  var freshAccessForEffect = freshGateAccess();
  useEffect(function() {
    if (!gateChecking || !pendingEnterRef.current) return;
    var pend = pendingEnterRef.current;
    // Codex P2-d: 挂起回调若 topic/lens 已变 (用户在 tier 落定前切了 lens) → 作废,
    // 绝不拿旧 savedSession 在新 lens 重放。清挂起 + 退出 checking。
    if (pend.topicId !== topicId || pend.lensId !== gateLensId) {
      pendingEnterRef.current = null;
      setGateChecking(false);
      return;
    }
    var a = freshAccessForEffect;
    if (a === 'loading') return; // 还没落定, 继续等
    var fn = pend.fn;
    pendingEnterRef.current = null;
    setGateChecking(false);
    if (a === 'allow') { fn(); }
    else {
      // Step 4b-3: view-only-grandfathered → 只读占位屏; deny/error-blocked → 升级/网络 modal。
      // 候选 lens (若有) 持续到 modal 关闭 (Codex P2-i), 让 CourseGate 据被拦 lens 算出正确 modal。
      setShowUpgradeGate(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [freshAccessForEffect, gateChecking]);

  // ─── 进入 mastery gate ──────────────────────────────────────────
  var startMasteryGate = function() {
    setPhase("mastery");
    setGateStep(0);
  };

  // ─── 5-26 (Codex P0-4): 进入考前复习笔记屏 ──────────────────────────
  // Receipt 提交后 / 已交 receipt 用户从 conversation allDone 推进 / 都先进笔记屏。
  // 笔记屏点 "我看过了, 开始考核" → startMasteryGate。
  var proceedToNotebook = function() {
    setPhase("notebook");
  };

  // ─── Learning Receipt：lens 完成、进 mastery 前收 2 件学习证据 ──────
  // 5-26 (用户反馈): 4 题精简到 2 题口语化, 减少元认知负担。
  // 纯附加存 historyData.learningReceipts[topicId][lensId]；不动 turnIndex/completedTopics。
  // MVP：英文表达只存进 receipt，不自动推桥词队列（pushedToVocab:false，二期再开「加入复习」）。
  var submitLearningReceipt = function(payload) {
    if (!topicId) return;
    try {
      var lensTitle = null;
      if (effectiveLensId && topicLenses && topicLenses.length) {
        var lm = topicLenses.find(function(l) { return l.id === effectiveLensId; });
        if (lm) {
          var nm = lm.nameCn || lm.name; // 兼容扁平 nameCn 字符串 + name:{cn,en} 对象
          if (nm && typeof nm === "object") nm = nm.cn || nm.en;
          lensTitle = (typeof nm === "string" && nm) ? nm : null;
        }
      }
      // 顺序：handler 计算的 lensTitle 必须覆盖 card payload 里的占位 null（card 不知道 lensTitle）
      saveLearningReceipt(topicId, effectiveLensId, Object.assign({}, payload || {}, { lensTitle: lensTitle }));
    } catch (e) {
      console.warn('[history] saveLearningReceipt failed:', e && e.message);
    }
    // 5-26 (Codex P0-6): 收据保存后自动进笔记屏(消除二次点击), 不再停在 conversation 等用户再点。
    proceedToNotebook();
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

  // URL 解析完成前只渲染 shell（server + client 首屏一致 → 无水合分裂；
  // 且不闪 Magna / 不发错误的 narrative 请求）。解析后 topicId 必为有效课程。
  if (!urlResolved || !topic) {
    return (
      <>
        <Head>
          <title>历史 — Know U. Learning</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
        <style dangerouslySetInnerHTML={{ __html: globalCSS }} />
        <style dangerouslySetInnerHTML={{ __html: "body{background:" + HC.bg + ";}" }} />
        <div style={{
          minHeight: "100vh", background: HC.bg, fontFamily: FONT,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: HC.textSec, fontSize: 14,
        }}>
          加载中…
        </div>
      </>
    );
  }

  // ─── Render ──────────────────────────────────────────────────────
  return (
    <>
      <Head>
        <title>{"历史 · " + (topic && topic.title && topic.title.cn ? topic.title.cn : "Magna Carta") + " — Know U. Learning"}</title>
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
        {/* Step 4b-1: 进课 tier gate (flag on 才挂载, 懒加载 CourseGate)。
            上报 gateAccess + 用户点进课被拦时渲染 UpgradeModal。flag off 时此组件不存在。 */}
        {ENABLE_HISTORY_PAYWALL && (
          <CourseGateMount
            topicId={topicId}
            lensId={gateLensId}
            embedded={embedded}
            showModal={showUpgradeGate}
            onAccessChange={onGateAccessChange}
            onCloseModal={function() {
              setShowUpgradeGate(false);
              setGateCandidateLens(null); // Codex P2-i: modal 关才清候选 (期间它评估的是被拦的 lens)
            }}
          />
        )}
        {/* Step 4b-1: gate 挂起期轻量提示 (fast-click / 切 lens 等结论落定, <1s) */}
        {ENABLE_HISTORY_PAYWALL && gateChecking && (
          <div style={{
            position: "fixed", top: 12, left: "50%", transform: "translateX(-50%)",
            zIndex: 2200, padding: "8px 16px", borderRadius: 999,
            background: "rgba(44,36,32,0.9)", color: "#fff8e8", fontSize: 13,
            fontFamily: FONT, boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
          }}>检查学习权限中…</div>
        )}
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
          <TopicHero topic={topic} phase={phase} englishLevel={englishLevel} onSetEnglishLevel={function(v){ setEnglishLevelState(v); saveEnglishLevel(v); }} />

          {/* ── Geography Section ── */}
          {/* 5-5: simplifiedMode (embedded / fromAtlas / pendingRole) 时隐藏 */}
          {/*       — 用户已在 atlas-lab 看过完整地图,不重复 */}
          {topic && topic.geography && !embedded && !fromAtlas && !(pendingRole && pendingRole.figure) && (
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
              topicId={topicId}
              onStart={gatedEnter(startConversation)}
              curriculum={curriculum}
              historyProfile={historyProfile}
              englishLevel={englishLevel}
              topicLenses={topicLenses}
              hasLensesForTopic={hasLensesForTopic}
              selectedLensId={effectiveLensId}
              pendingRole={pendingRole}
              embedded={embedded}
              fromAtlas={fromAtlas}
              effectiveTurns={effectiveTurns}
              onShowProfileSetup={function() {
                // 5-5 R2: placeholder profile 用户随时回填 — 重新打开 ProfileSetup
                setNeedsProfileSetup(true);
              }}
              onSelectLens={function(lensId) {
                setSelectedLensId(lensId);
                // 切 lens 重置进度（不同 lens 节点数量不同——log 会错位）
                setConversationLog([]);
                setTurnIndex(0);
                setSavedSession(null);
                clearInProgress(topicId);
              }}
              onSetEnglishLevel={function(v) {
                setEnglishLevelState(v);
                saveEnglishLevel(v);
              }}
              onSwitchTopic={function(newId) {
                setTopicId(newId);
                setConversationLog([]);
                setTurnIndex(0);
                setSavedSession(null);
                setSelectedLensId(null);  // 切 Topic 重置 lens 选择
                // 同步 URL 到 /history/<newId>（不整页刷新，保持 SPA 速度）
                try {
                  if (typeof window !== "undefined" && window.history && window.history.replaceState) {
                    window.history.replaceState(null, "", "/history/" + encodeURIComponent(newId));
                  }
                } catch (e) {}
                // 不重置 phase — 让她在 intro 屏看新 Topic
              }}
              onShowWalkthrough={function() { setShowWalkthrough(true); }}
              savedSession={savedSession}
              onResume={function() {
                if (!savedSession) return;
                // Codex P2-j: in-progress 存档是 topic 级, resume 必须按**存档自己的 lens** 过 gate,
                // 而非当前默认 lens。否则降级用户对 grandfather lens A 过 gate 却恢复了锁定 lens B 的
                // 存档 (绕过)。老存档无 lensId → 当前 lens 兜底 (= paywall 前行为, 不动旧数据)。
                var sessionLens = savedSession.lensId || effectiveLensId;
                var doResume = function() {
                  if (savedSession.lensId) setSelectedLensId(savedSession.lensId); // 恢复存档的 lens
                  setConversationLog(savedSession.conversationLog || []);
                  setTurnIndex(savedSession.turnIndex || 0);
                  setGateCandidateLens(null);
                  setPhase("conversation");
                };
                // session lens == 当前被 gate 的 lens (或 flag off): 直接走 gatedEnter 判当前。
                if (!ENABLE_HISTORY_PAYWALL || sessionLens === gateLensId) {
                  gatedEnter(doResume)();
                  return;
                }
                // session lens 与当前不同: 用候选通道让 gate 评估 session 的 lens。
                setGateCandidateLens(sessionLens);
                pendingEnterRef.current = { topicId: topicId, lensId: sessionLens, fn: doResume };
                setGateChecking(true);
              }}
              onClearAndStart={gatedEnter(function() {
                clearInProgress(topicId);
                setSavedSession(null);
                startConversation();
              })}
            />
          )}

          {/* ── Phase: conversation ── */}
          {phase === "conversation" && topic && (
            <>
              {/* 5-26 (Codex minor): conversation 内部 EN/中 toggle 删除 — TopicHero 已有 fixed 浮动 */}
              {/*       右上 toggle 全 phase 可见,这里再放一个重复且位置不一致。L728 useEffect */}
              {/*       仍依赖 englishLevel state,由 TopicHero toggle 设置,行为不变。 */}
              <ConversationStream
                topic={topic}
                topicId={topicId}
                lensId={effectiveLensId}
                englishLevel={englishLevel}
                effectiveTurns={effectiveTurns}
                turnIndex={turnIndex}
                conversationLog={conversationLog}
                aiStreaming={aiStreaming}
                aiThinking={aiThinking}
                userInput={userInput}
                onInputChange={setUserInput}
                onSubmit={submitUserResponse}
                onAdvance={advanceTurn}
                onStartMastery={proceedToNotebook}
                onSubmitReceipt={submitLearningReceipt}
                existingReceipt={existingReceipt}
                previewMode={topic && topic.isPreview}
                onTermClick={setActiveTerm}
                onMustClick={setActiveMust}
                onJumpToMap={jumpToMap}
                onEscapeAction={handleEscapeAction}
                tiredMode={tiredMode}
                hintByTurn={hintByTurn}
                error={error}
              />
            </>
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

          {/* ── 5-26 新增 Phase: notebook ── */}
          {/* 收据提交后 / 已交 receipt 用户从 conversation allDone 进 → 在 mastery 之前先看 8 张考点卡 */}
          {/* 5-26 (用户反馈 #4): 加 LensProgress widget,让学完 1 lens 的用户能切到其他视角学,
              而不是一个 lens 完了就当整课完(考题 cross-lens 学生没全学到)。 */}
          {phase === "notebook" && topic && (
            <ConceptReview
              topicId={topicId}
              isEnglish={englishLevel === "high"}
              onContinue={function() {
                // Codex P3 (round9): lens-switch gate 挂起期 (notebook 里 gateChecking 仅由
                // onSwitchLens 置位), 不让用户点测验 CTA 进 mastery —— 否则挂起回调落定后会把人从
                // mastery 拽回 conversation (allow), 或在 mastery 上弹升级 modal (deny)。
                // 挂起 <1s, 期间顶部已有「检查学习权限中…」提示。
                if (ENABLE_HISTORY_PAYWALL && gateChecking) return;
                startMasteryGate();
              }}
              topicLenses={topicLenses}
              effectiveLensId={effectiveLensId}
              lensCompletion={(function() {
                // 检查每个 lens 是否有 learning receipt = 该视角已学完
                if (!topicLenses || !topicLenses.length) return {};
                var map = {};
                topicLenses.forEach(function(l) {
                  try { map[l.id] = !!loadLearningReceipt(topicId, l.id); } catch (e) { map[l.id] = false; }
                });
                // 当前刚提交的 receipt 已存,所以 effectiveLensId 自然标 done
                return map;
              })()}
              onSwitchLens={function(newLensId) {
                // 切到另一个视角:重置 turn/log/lens, 切回 conversation phase。
                // saveLearningReceipt 已存当前 lens 的 receipt → 切回来时这个 lens 仍标已完成。
                if (!ENABLE_HISTORY_PAYWALL) {
                  setSelectedLensId(newLensId);
                  setTurnIndex(0);
                  setConversationLog([]);
                  setSavedSession(null);
                  setPhase("conversation");
                  return;
                }
                // Codex P1 (round8): paywall on 时**不提前动 selectedLensId** —— 用独立候选通道
                // gateCandidateLens 让 gate 评估新 lens。原因: 提前 setSelectedLensId 会在 gate
                // 未落定的窗口把锁定 lens 变 current, notebook「继续」/ MasteryGate cancel 能借此
                // 进锁定 lens 的 conversation/收据流 (绕过)。
                // candidate 期间整个 UI 仍停在原 (已授权) lens; 破坏性重置 (log/turn/session) 与切
                // lens 全推迟到 allow 才一起做 (Codex P2-a: 不在落定前清 transcript); deny 只清候选,
                // selectedLensId 从没动过, 无需回滚也无绕过窗口。
                setGateCandidateLens(newLensId);
                // Codex P2-d: 挂起回调打 newLensId 标签 (effect 校验 == gateLensId 才执行)
                pendingEnterRef.current = {
                  topicId: topicId,
                  lensId: newLensId,
                  fn: function() {
                    setSelectedLensId(newLensId); // allow 才真正切 lens
                    setTurnIndex(0);
                    setConversationLog([]);
                    setSavedSession(null);
                    setGateCandidateLens(null);
                    setPhase("conversation");
                  },
                };
                // Codex P2-i: deny/error-blocked 时不清候选 —— 否则 CourseGate 会改判当前 (已完成)
                // lens, 弹错 modal (该弹网络重试却弹升级)。候选 lens 持续到 modal 关闭 (onCloseModal 清),
                // CourseGate 才能对被拦的新 lens 算出正确 access。
                setGateChecking(true);
              }}
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
              topicId={topicId}
              englishLevel={englishLevel}
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
  // 单课页顶部恒显 EN/中 toggle (创始人反馈: 切换该有的地方都要有, 不该埋在 conversation 内部)
  var englishLevel = props.englishLevel;
  var onSetLang = props.onSetEnglishLevel;
  return (
    <div className="topic-hero" style={{position: 'relative'}}>
      {/* 5-26 (用户反馈 #2): EN/中 toggle 改 fixed 浮动 — 翻页跟随屏幕, 不再 hero 滚出就消失 */}
      {onSetLang && (
        <div style={{
          position: 'fixed', top: 64, right: 12,
          display: 'flex', gap: 4,
          background: 'rgba(255, 250, 240, 0.96)',
          padding: '4px 6px',
          borderRadius: 999,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          zIndex: 40,
        }}>
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
      )}
      <div className="meta">
        {topic.hssStandard} · 难度 {topic.difficulty}/5 · 约 {topic.estimatedMinutes} 分钟 · {topic.curriculumUnit.includes("medieval-china") ? "中世纪中国" : topic.curriculumUnit.includes("medieval-europe") ? "中世纪欧洲" : topic.curriculumUnit}
      </div>
      <h1>{topic.title.cn} <span style={{fontSize: 16, fontWeight: 400, color: HC.inkLight}}>· {topic.title.en} ({topic.year})</span></h1>
      {/* 同时代中国朝代锚点 — 给中国孩子一个熟悉的参照（中国本土 topic 不显示，避免冗余）*/}
      {(function() {
        if (isChinaTopic(topic.id)) return null;
        var dyn = getChinaDynastyForYear(parseTopicYear(topic.year));
        if (!dyn) return null;
        return (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            marginTop: 4, marginBottom: 6,
            padding: '3px 10px',
            background: 'rgba(196, 107, 48, 0.08)',
            border: '1px solid rgba(196, 107, 48, 0.25)',
            borderRadius: 999,
            fontSize: 12, color: HC.accent, fontWeight: 600,
          }}>📜 同时代中国：{dyn.cn}</div>
        );
      })()}
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

  // 5-5: useAtlasLink:true 的 Topic 没专属手画 SVG (Crusades / Black Death)
  // → 显示文字 orientation + Atlas Lab 链接 card,而不是用错位的 europe-1200 凑数
  if (geo.useAtlasLink) {
    var atlasUrl = geo.atlasViewId ? "/atlas-lab/" + geo.atlasViewId : "/atlas-lab";
    return (
      <div className="geo-card" id="geo-anchor">
        <button className={"geo-toggle " + (props.isOpen ? "open" : "")} onClick={props.onToggle}>
          <span style={{fontSize: 18}}>📍</span>
          <span>Where this happened — {geo.worldOrient.orientNote.cn}</span>
          <span className="arrow" style={{marginLeft: "auto"}}>▼</span>
        </button>
        {props.isOpen && (
          <div className="geo-body" style={{padding: "16px 18px"}}>
            {/* 文字 orientation */}
            <div style={{
              padding: "10px 14px",
              background: HC.parchmentLo,
              borderRadius: 8,
              fontSize: 13,
              color: HC.text,
              lineHeight: 1.6,
              marginBottom: 12,
            }}>
              <strong>📌 {geo.worldOrient.orientNote.cn}</strong>
            </div>
            {/* Why matters 文字 */}
            {geo.whyMatters && geo.whyMatters.cn && (
              <div style={{
                fontSize: 12.5,
                color: HC.text,
                lineHeight: 1.65,
                marginBottom: 14,
                opacity: 0.92,
              }}>
                {geo.whyMatters.cn}
              </div>
            )}
            {/* Scale anchors */}
            {geo.scaleAnchors && geo.scaleAnchors.length > 0 && (
              <ul style={{
                margin: 0, paddingLeft: 18, fontSize: 12, color: HC.textSec,
                lineHeight: 1.7, marginBottom: 14,
              }}>
                {geo.scaleAnchors.map(function(a, i) {
                  return <li key={i}>{a.cn}</li>;
                })}
              </ul>
            )}
            {/* Atlas Lab link card */}
            <a
              href={atlasUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                padding: "12px 16px",
                background: "linear-gradient(135deg, #fef3d2 0%, #fbe8a8 100%)",
                border: "1px solid #d4a050",
                borderRadius: 10,
                textDecoration: "none",
                color: HC.text,
                fontSize: 13,
                fontWeight: 600,
                textAlign: "center",
                transition: "transform 0.15s, box-shadow 0.15s",
              }}
              onMouseEnter={function(e) {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(212, 160, 80, 0.35)";
              }}
              onMouseLeave={function(e) {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              🗺️ 完整地图(政治多边形 + 地理要素 + 历史 / 现代翻转)在 Atlas Lab →
            </a>
            <div style={{
              marginTop: 6, fontSize: 10.5, color: HC.textSec, fontStyle: "italic",
              textAlign: "center", opacity: 0.85,
            }}>
              新标签页打开 · 看完回来继续这里的对话
            </div>
          </div>
        )}
      </div>
    );
  }

  // 默认: 现有手画 SVG 渲染分支(Magna Carta / Tang-Song)
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
          {mapView === "country" && topic.id === "magna-carta-1215" && (
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
  // 5-5 R5: simplifiedMode 计算抽到 useSimplifiedMode hook (lib/hooks/use-simplified-mode.js)
  //         — single source of truth, 避免散在多处 drift
  var modeFlags = useSimplifiedMode({
    pendingRole: props.pendingRole,
    embedded: props.embedded,
    fromAtlas: props.fromAtlas,
    hasLensesForTopic: props.hasLensesForTopic,
  });
  var hasPendingRole = modeFlags.hasPendingRole;
  var simplifiedMode = modeFlags.simplifiedMode;
  var hideEnglishLevel = modeFlags.hideEnglishLevelToggle;
  // - lens 节点数: 优先用 effectiveTurns,fallback 12
  var lensTurnCount = (props.effectiveTurns && props.effectiveTurns.length) || 12;
  // 这门课对应的 atlas 地图视图 id：来源(atlasId) > topic.geography > 反向映射(覆盖 32 个无 geography 的 preview topic)
  var atlasViewIdForTopic = (props.fromAtlas && props.fromAtlas.atlasId)
    || (topic.geography && topic.geography.atlasViewId)
    || findViewIdByTopicId(topic.id);
  // 5-5 R2: placeholder profile 表示用户跳过了 setup → 显示 "还没填画像" hint
  var isPlaceholderProfile = !!(hp && hp.placeholder);
  // Companion Notebook — preview section
  var notebookData = (props.topicId && hasNotebook(props.topicId)) ? loadNotebook(props.topicId) : null;
  var [nbOpen, setNbOpen] = useState(false);
  var isEnglish = props.englishLevel === 'high';
  return (
    <div style={{padding: "20px 0"}}>
      {/* ── 已识别的画像 + 课程 banner ── */}
      {/* R2: placeholder profile (跳过了 setup) → 显示 "🎯 还没填画像" hint chip 替代 */}
      {isPlaceholderProfile ? (
        <div style={{
          padding: "8px 14px",
          background: "linear-gradient(135deg, #fef3d2 0%, #fbe8a8 100%)",
          border: "1px dashed #d4a050",
          borderRadius: 10,
          fontSize: 12,
          color: HC.text,
          marginBottom: 8,
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexWrap: "wrap",
        }}>
          <span style={{fontSize: 14}}>🎯</span>
          <span style={{flex: 1, minWidth: 0}}>
            还没填画像 — AI 会用通用方式跟你聊。
          </span>
          {props.onShowProfileSetup && (
            <button onClick={props.onShowProfileSetup} style={{
              background: HC.accent,
              color: "#fff8e8",
              border: "none",
              borderRadius: 999,
              padding: "4px 12px",
              fontSize: 11,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
            }}>30 秒填一下 →</button>
          )}
        </div>
      ) : hp && (
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

      {/* ── 英文比例选择（N3）—— 5-5: lens 模式下 prewritten,这个 toggle 无效,永远隐藏 ── */}
      {!hideEnglishLevel && props.englishLevel !== undefined && (
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

      {/* ── 📒 同伴笔记本预习卡（Companion Notebook preview）── */}
      {notebookData && notebookData.preview && (
        <div style={{
          background: '#fffef9',
          backgroundImage: 'linear-gradient(90deg, transparent 39px, #d4c5a0 39px, #d4c5a0 40px, transparent 40px), repeating-linear-gradient(transparent, transparent 23px, #e8e2d0 23px, #e8e2d0 24px)',
          backgroundSize: '100% 24px',
          border: '1px solid #e0d9bf',
          borderRadius: 8,
          padding: '12px 14px 12px 52px',
          marginBottom: 12,
          position: 'relative',
          boxShadow: '1px 3px 8px rgba(60,50,20,0.06)',
        }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, width: 40,
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 10,
            fontSize: 18, userSelect: 'none',
          }}>📒</div>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6}}>
            <span style={{
              fontSize: 11, fontWeight: 700, letterSpacing: 0.5, color: '#8b6914',
              textTransform: 'uppercase',
            }}>{isEnglish ? "Xiao U's Preview Notes" : "小 U 的预习笔记"}</span>
            <button onClick={function(){ setNbOpen(!nbOpen); }} style={{
              background: 'transparent', border: '1px solid #d4c5a0', borderRadius: 999,
              padding: '2px 10px', fontSize: 11, color: '#8b6914', cursor: 'pointer',
              fontFamily: 'inherit', fontWeight: 600,
            }}>{nbOpen ? (isEnglish ? '▲ Close' : '▲ 收起') : (isEnglish ? '▼ Open' : '▼ 打开预习')}</button>
          </div>
          {!nbOpen && (
            <div style={{fontSize: 12, color: '#6b5a2a', opacity: 0.8, fontStyle: 'italic'}}>
              {isEnglish
                ? 'Study goals, key figures, and big question — open before reading'
                : '学习目标、必认人物、大问题 — 读故事前打开看看'}
            </div>
          )}
          {nbOpen && (
            <div>
              {/* 大问题 */}
              {notebookData.preview.bigQuestion && (
                <div style={{
                  background: 'rgba(200,146,46,0.10)', borderRadius: 6,
                  padding: '7px 10px', marginBottom: 8, fontSize: 13,
                  color: '#5c3d0a', lineHeight: 1.55,
                }}>
                  <strong style={{fontSize: 11, display: 'block', opacity: 0.7, marginBottom: 3}}>
                    {isEnglish ? '🧭 Big Question' : '🧭 大问题'}
                  </strong>
                  {isEnglish ? notebookData.preview.bigQuestion.en : notebookData.preview.bigQuestion.cn}
                </div>
              )}
              {/* 必考人物 */}
              {notebookData.preview.keyFigures && notebookData.preview.keyFigures.length > 0 && (
                <div style={{marginBottom: 8}}>
                  <div style={{fontSize: 11, fontWeight: 700, color: '#8b6914', marginBottom: 4, opacity: 0.8}}>
                    {isEnglish ? '👤 Key Figures' : '👤 必认人物'}
                  </div>
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: 4}}>
                    {notebookData.preview.keyFigures.map(function(fig, i) {
                      return (
                        <div key={i} style={{
                          display: 'inline-flex', alignItems: 'center', gap: 4,
                          background: fig.mustKnow ? 'rgba(196,107,48,0.12)' : 'rgba(0,0,0,0.04)',
                          border: '1px solid ' + (fig.mustKnow ? 'rgba(196,107,48,0.3)' : 'rgba(0,0,0,0.08)'),
                          borderRadius: 999, padding: '2px 8px', fontSize: 11.5,
                          color: fig.mustKnow ? '#7a3a0a' : '#555',
                        }}>
                          {fig.mustKnow && <span style={{fontSize: 9, color: '#c46b30', fontWeight: 700}}>★</span>}
                          <span>{isEnglish ? fig.nameEn : fig.nameCn}</span>
                          {fig.mustKnow && fig.ipa && (
                            <span style={{fontSize: 10, opacity: 0.6, fontFamily: 'monospace'}}>{fig.ipa}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div style={{fontSize: 10, color: '#8b6914', opacity: 0.6, marginTop: 4}}>
                    {isEnglish ? '★ = must know for exam' : '★ = 考试必考'}
                  </div>
                </div>
              )}
              {/* 预习笔记正文 */}
              <div style={{
                fontSize: 12.5, color: '#3d2e10', lineHeight: 1.75,
                whiteSpace: 'pre-wrap', borderTop: '1px dashed #d4c5a0', paddingTop: 8, marginTop: 4,
              }}>
                {isEnglish ? notebookData.preview.en : notebookData.preview.cn}
              </div>
            </div>
          )}
        </div>
      )}

      <div style={{
        background: HC.card, padding: 20, borderRadius: 16, border: "1px solid " + HC.border,
        marginBottom: 14, position: "relative"
      }}>
        {/* 5-5 R11: 重看引导入口改成卡右上角 chip — 不再藏在小字 underline */}
        {props.onShowWalkthrough && (
          <button
            onClick={props.onShowWalkthrough}
            title="重看 30 秒操作引导"
            style={{
              position: "absolute", top: 12, right: 12,
              background: "transparent",
              border: "1px solid " + HC.border,
              borderRadius: 999,
              padding: "3px 10px",
              fontSize: 10.5,
              fontWeight: 600,
              color: HC.textSec,
              cursor: "pointer",
              fontFamily: "inherit",
              opacity: 0.85,
            }}
            onMouseEnter={function(e) { e.currentTarget.style.opacity = 1; e.currentTarget.style.borderColor = HC.accent; }}
            onMouseLeave={function(e) { e.currentTarget.style.opacity = 0.85; e.currentTarget.style.borderColor = HC.border; }}
          >↻ 怎么操作?</button>
        )}
        <h3 style={{margin: "0 0 10px", fontFamily: FONT_DISPLAY, fontSize: 17, color: HC.ink}}>这一章你会经历什么</h3>
        <div style={{
          padding: "8px 12px", marginBottom: 12,
          background: HC.accentLight, borderRadius: 8,
          fontSize: 12, color: HC.text, lineHeight: 1.55,
          borderLeft: "3px solid " + HC.accent
        }}>
          {/* 5-5: simplifiedMode 时 Geography 已隐藏(用户已在 atlas 看过),提示改成 atlas 入口 */}
          {simplifiedMode ? (
            <>📍 <strong>完整地图</strong>已经在 Atlas Lab 那边看过了 — 等下需要随时回去翻 <a href={atlasViewIdForTopic ? "/atlas-lab/" + atlasViewIdForTopic : "/atlas-lab"} target="_blank" rel="noopener noreferrer" style={{color: HC.accent, fontWeight: 600}}>Atlas Lab →</a><br/></>
          ) : (topic.geography ? (
            <>📍 <strong>页面顶部的「Where this happened」</strong>就是地图区 — 任何时候都可以点开看,再翻过来看今天。<br/></>
          ) : atlasViewIdForTopic ? (
            <>📍 想看这段历史的地图? 去 <a href={"/atlas-lab/" + atlasViewIdForTopic} target="_blank" rel="noopener noreferrer" style={{color: HC.accent, fontWeight: 600}}>Atlas Lab →</a> 看完整的因果地图。<br/></>
          ) : null)}
          ⭐ AI 说话里**金色的词**点一下能看 IPA + 听发音;<span style={{color: HC.teal, fontWeight: 600}}>蓝色虚线下划线的人名地名</span>点一下看解释。
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
          ) : topic.id === "crusades-1099" ? (
            <>
              <li>跟 AI 聊 {lensTurnCount} 节 — 走完 1099 占耶路撒冷 → 1187 萨拉丁夺回 → 1291 Acre 陷</li>
              <li>看 1099 年的黎凡特地图 — 君士坦丁堡 = 今天的伊斯坦布尔；耶路撒冷三教共圣</li>
              <li>读 900 年前的真东西 — Pope Urban II 1095 Clermont 演说 + Ibn al-Athir 1099 耶路撒冷陷落记</li>
              <li>过一关核心词汇 + 概念背诵 — <strong>不背不算完成</strong></li>
            </>
          ) : topic.id === "black-death-1347" ? (
            <>
              <li>跟 AI 聊 {lensTurnCount} 节 — 走完 1347 Caffa 围城 → Messina 登陆 → 1349 Strasbourg 屠犹</li>
              <li>看欧亚瘟疫传播路径 — 黑海 → 地中海 → 阿尔卑斯 → 整个欧洲 4 年扫完</li>
              <li>读 700 年前的真东西 — Agnolo di Tura《Cronaca senese》"亲手埋 5 子"那一句</li>
              <li>过一关核心词汇 + 概念背诵 — <strong>不背不算完成</strong></li>
            </>
          ) : topic.id === "magna-carta-1215" ? (
            <>
              <li>跟 AI 聊 {lensTurnCount} 节 — 从校规类比起手,慢慢引到 Magna Carta</li>
              <li>看 1200 年的欧洲地图,翻过来看今天的欧洲（君士坦丁堡 = 伊斯坦布尔！）</li>
              <li>读 800 年前的真东西 — Clause 39 原文 + 中文释义</li>
              <li>过一关核心词汇 + 概念背诵 — <strong>不背不算完成</strong></li>
            </>
          ) : (
            <>
              <li>跟 AI 聊 {lensTurnCount} 节</li>
              <li>看历史地图 + 翻看现代版</li>
              <li>读原始史料</li>
              <li>过一关核心词汇 + 概念背诵 — <strong>不背不算完成</strong></li>
            </>
          )}
        </ol>
        <div style={{marginTop: 12, padding: 10, background: HC.tealLight, borderRadius: 8, fontSize: 12, color: HC.text}}>
          <strong style={{color: HC.teal}}>桥接：</strong>
          {topic.id === "tang-song-china" ? (
            <>这次"反向桥" — 用你已熟的<strong>唐宋历史</strong>对照同时代欧洲，建立『中国 vs 西方』两套不同治理逻辑的认知。</>
          ) : topic.id === "crusades-1099" ? (
            <>这次我们用<strong>唐宋政教关系</strong>作中国锚点 — 同时期（1099）宋神宗变法、王安石主持，中国走的是『皇权统摄宗教』而非欧洲的『教皇 vs 皇帝』之争。</>
          ) : (
            <>这次我们用<strong>唐律疏议 (651 AD)</strong>作中国史锚点 — 比 Magna Carta 早 564 年。</>
          )}
        </div>
      </div>

      {/* 「换一课」已从单课页移除:首页 (/history) 已是 51 门主选课入口,
           顶部 nav 的 History tab 可一键返首页。课内重复入口 = 干扰沉浸,故去掉。*/}

      {/* ── Phase 3: Lens 选择卡（如 Topic 有多个 lens 可选）── */}
      {/* 5-5 R3: atlas → role 进入流程 (hasPendingRole) 时,用户已在 atlas 选过 figure → */}
      {/*         不显示 prominent LensSelector;换成 collapsed details "↻ 换视角" 入口 */}
      {props.hasLensesForTopic && props.topicLenses && props.topicLenses.length > 1 && (
        hasPendingRole ? (
          <details style={{
            marginTop: 8,
            padding: "8px 12px",
            background: HC.parchmentHi,
            border: "1px solid " + HC.border,
            borderRadius: 10,
            fontSize: 12,
          }}>
            <summary style={{
              cursor: "pointer",
              fontWeight: 600,
              color: HC.textSec,
              listStyle: "none",
              userSelect: "none",
            }}>
              ↻ 想换其他视角看这段历史?
            </summary>
            <div style={{ marginTop: 8 }}>
              <LensSelector
                lenses={props.topicLenses}
                selectedLensId={props.selectedLensId}
                onSelect={props.onSelectLens}
                topicId={props.topicId}
              />
            </div>
          </details>
        ) : (
          <LensSelector
            lenses={props.topicLenses}
            selectedLensId={props.selectedLensId}
            onSelect={props.onSelectLens}
            topicId={props.topicId}
          />
        )
      )}

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

// ─── LensSelector — Phase 3 视角选择卡（Story-First Pedagogy v3）──
// 用户在 Topic intro 选择 1 个 lens 进入对话
// 每 lens = 1 个角色视角看同一历史事件——基础事实相同——情绪/角度/局限性不同
// 跑完 1 个 lens 后用户可回 intro 选另一个 lens 重学（DBQ 训练）
function LensSelector(props) {
  var lenses = props.lenses || [];
  var selectedId = props.selectedLensId;
  var onSelect = props.onSelect || function() {};

  // 角色 emoji（匹配每个 lens 的 id）
  var lensIcon = {
    'king-john': '👑',
    'stephen-langton': '✍️',
    'tom-villein': '🐑',
    'roger-toulouse': '⚔️',
    'alexios': '🦅',
    'aisha-jerusalem': '🧕',
    'agnolo-siena': '🪶',
    'konrad-strasbourg': '🪓',
    'devorah-strasbourg': '🕯️',
    'lorenzo-medici': '👑',
    'savonarola': '🔥',
    'lucia-widow': '🪞',
    'martin-luther': '📜',
    'erasmus': '✍️',
    'sister-agnes': '🕊️',
    'columbus': '⛵',
    'las-casas': '⛪',
    'anacaona-jr': '🪶',
    'mansa-musa': '👑',
    'ibn-battuta': '🧭',
    'aisha-1413': '📖',
    'emperor-huizong': '🎨',
    'su-shi': '🍵',
    'li-qingzhao': '📜',
  };

  // 第一次建议哪个 lens（每 Topic 不同——按戏剧强度 / 入门难度）
  var firstChoiceHint = {
    'magna-carta-1215': { id: 'king-john',     reason: '戏剧性最强' },
    'crusades-1099':    { id: 'roger-toulouse', reason: '4 年 + 4 个动机最容易代入' },
    'black-death-1347': { id: 'agnolo-siena',   reason: '5 月 8 日第一笔字最容易切入' },
    'renaissance-1500': { id: 'lucia-widow',    reason: '同龄锚点 + 镜子 micro-detail 情感冲击最深' },
    'reformation-1517': { id: 'sister-agnes',   reason: '字数严控 + 1539 修道院最后看小册子 + N12 谜题钩子' },
    'age-of-exploration-1492': { id: 'anacaona-jr', reason: '12 岁 Taíno 女孩同龄锚点 + 5 年家族灭族最强情感入口 + areíto 文化 carrier (per Sarah audit)' },
    'mali-empire-1235':        { id: 'aisha-1413',  reason: '14 岁 Mande 女孩同龄锚点 + female-literacy-carrier + N5 12,000 enslaved + N12 4-Topic information preservation closing' },
    'tang-song-china':         { id: 'li-qingzhao', reason: '15 岁山东文学世家同龄锚点 + female-literacy-carrier + N5+N6 1126-1129《金石录》文物南运 cross-lens + N12 5 Topic information preservation 五面体 closing' },
  };
  var firstHint = firstChoiceHint[props.topicId];
  var firstLens = firstHint && lenses.find(function(l) { return l.id === firstHint.id; });

  return (
    <div style={{
      background: HC.card,
      padding: 18,
      borderRadius: 16,
      border: "1px solid " + HC.border,
      marginBottom: 14,
    }}>
      <h3 style={{
        margin: "0 0 6px",
        fontFamily: FONT_DISPLAY,
        fontSize: 16,
        color: HC.ink,
      }}>
        🎭 选个视角进入这段历史
      </h3>
      <div style={{
        fontSize: 12,
        color: HC.textSec,
        marginBottom: 12,
        lineHeight: 1.55,
      }}>
        同一事件，不同角色看法不同。基础事实一样，情绪、角度、看到什么、看不到什么完全不同。跑完一个视角还能回来换另一个。
      </div>
      <div style={{display: "flex", flexDirection: "column", gap: 10}}>
        {lenses.map(function(lens) {
          var active = selectedId === lens.id;
          var icon = lensIcon[lens.id] || '🎭';
          var minutes = Math.round(lens.nodeCount * 2.5);
          return (
            <button
              key={lens.id}
              onClick={function() { onSelect(lens.id); }}
              style={{
                textAlign: "left",
                padding: "12px 14px",
                background: active ? HC.accentLight : "transparent",
                border: "2px solid " + (active ? HC.accent : HC.border),
                borderRadius: 12,
                cursor: "pointer",
                fontFamily: "inherit",
                color: HC.text,
                transition: "all 0.15s ease",
              }}
            >
              {/* 5-5: lens 字段升级为 bilingual {cn, en} 后,这里用 helper 提取字符串 */}
              {(() => {
                var nameCn = (lens.name && typeof lens.name === 'object') ? lens.name.cn : (lens.nameCn || lens.name || '');
                var nameEn = (lens.name && typeof lens.name === 'object') ? lens.name.en : (typeof lens.name === 'string' ? lens.name : '');
                var roleStr = (lens.role && typeof lens.role === 'object') ? lens.role.cn : (lens.role || '');
                var descStr = (lens.description && typeof lens.description === 'object') ? lens.description.cn : (lens.description || '');
                return (
                  <>
                    <div style={{display: "flex", alignItems: "center", gap: 8, marginBottom: 4}}>
                      <span style={{fontSize: 22}}>{icon}</span>
                      <strong style={{fontSize: 14.5, color: HC.ink}}>
                        {nameCn}{nameEn && nameEn !== nameCn ? ' · ' + nameEn : ''}
                      </strong>
                      {active && (
                        <span style={{
                          marginLeft: "auto",
                          fontSize: 11,
                          color: HC.accent,
                          fontWeight: 600,
                        }}>已选 ✓</span>
                      )}
                    </div>
                    <div style={{fontSize: 12, color: HC.teal, marginBottom: 4, fontWeight: 500}}>
                      {roleStr}
                    </div>
                    <div style={{fontSize: 12.5, color: HC.text, lineHeight: 1.55, marginBottom: 6}}>
                      {descStr}
                    </div>
                  </>
                );
              })()}
              <div style={{fontSize: 11, color: HC.textSec, opacity: 0.85}}>
                {lens.nodeCount} 节 · 约 {minutes} 分钟
              </div>
            </button>
          );
        })}
      </div>
      {firstLens && (
        <div style={{
          marginTop: 10,
          fontSize: 11,
          color: HC.textSec,
          fontStyle: "italic",
          opacity: 0.85,
        }}>
          💡 第一次建议从 {(firstLens.name && typeof firstLens.name === 'object') ? firstLens.name.cn : (firstLens.nameCn || firstLens.name || '')}（{firstHint.reason}）开始，之后换其他角度。
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
      body: "AI 跟你聊 10-12 节走完一段历史,从你熟悉的事情起手——不是讲课,是聊天。",
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
      title: "顶部 Where this happened",
      body: "页面顶部有地图区,任何时候都能展开看历史地图,有的还能翻到今天对比。Atlas Lab 还有更深的地图。",
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
      {/* 5-26 (用户反馈): 浮动按钮改胶囊形 + 文字暗示「问小 U」 — 之前圆形 🤔 emoji 不知是 AI 提问入口 */}
      <button
        onClick={props.onToggle}
        style={{
          position: "fixed",
          bottom: "max(110px, calc(env(safe-area-inset-bottom) + 110px))",  // B7: 输入栏上方，避开 iOS 安全区
          right: 16,
          height: 48,
          minWidth: 48,
          padding: isOpen ? "0" : "0 18px 0 14px",
          width: isOpen ? 48 : "auto",
          borderRadius: 999,
          background: isOpen ? HC.pinFill : HC.accent,
          color: "#fff8e8",
          border: "none",
          fontSize: 15,
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 4px 18px rgba(196,107,48,0.45)",
          zIndex: 100,
          fontFamily: "inherit",
          transition: "all 0.2s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
        title={isOpen ? "关闭" : "有问题？问小 U(不影响主对话)"}
        aria-label={isOpen ? "Close Xiao U" : "Ask Xiao U"}
      >
        {isOpen ? (
          <span style={{fontSize: 18}}>✕</span>
        ) : (
          <>
            <span style={{fontSize: 19, lineHeight: 1}}>🤔</span>
            <span style={{whiteSpace: "nowrap"}}>问小 U</span>
          </>
        )}
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

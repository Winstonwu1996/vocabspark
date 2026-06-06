// lib/atlas-views.js
//
// Single source of truth — 所有 view recipe 在这里集中导入。
// 路由层（pages/atlas-lab/[viewId].js）+ 页面组件（components/AtlasLabPage.js）共用。

import { VIEW as MAGNA_VIEW }              from '../data/atlas/views/magna-carta.js';
import { VIEW as TANG_VIEW }               from '../data/atlas/views/tang-song.js';
import { VIEW as DEATH_VIEW }              from '../data/atlas/views/black-death.js';
import { VIEW as REVOLUTION_VIEW }         from '../data/atlas/views/american-revolution.js';
import { VIEW as CIVILWAR_VIEW }           from '../data/atlas/views/civil-war.js';
import { VIEW as ROMAN_VIEW }              from '../data/atlas/views/roman-peak.js';
import { VIEW as GREECE_VIEW }             from '../data/atlas/views/ancient-greece.js';
import { VIEW as RENAISSANCE_VIEW }        from '../data/atlas/views/renaissance.js';
import { VIEW as INDUSTRIAL_VIEW }         from '../data/atlas/views/industrial-revolution.js';
import { VIEW as REFORMATION_VIEW }        from '../data/atlas/views/reformation.js';
import { VIEW as MONGOL_VIEW }             from '../data/atlas/views/mongol-empire.js';
import { VIEW as CONSTITUTION_VIEW }       from '../data/atlas/views/us-constitution.js';
import { VIEW as HAN_VIEW }                from '../data/atlas/views/han-china.js';
import { VIEW as EGYPT_VIEW }              from '../data/atlas/views/ancient-egypt.js';
import { VIEW as EXPLORATION_VIEW }        from '../data/atlas/views/age-of-exploration.js';
import { VIEW as WWI_VIEW }                from '../data/atlas/views/great-war.js';
import { VIEW as MAURYA_VIEW }             from '../data/atlas/views/maurya-india.js';
import { VIEW as ENLIGHTEN_VIEW }          from '../data/atlas/views/enlightenment.js';
import { VIEW as WWII_VIEW }               from '../data/atlas/views/wwii.js';
import { VIEW as FR_REVOLUTION_VIEW }      from '../data/atlas/views/french-revolution.js';
import { VIEW as BYZANTINE_VIEW }          from '../data/atlas/views/byzantine-rise.js';
import { VIEW as ISLAMIC_VIEW }            from '../data/atlas/views/islamic-rise.js';
import { VIEW as JAPAN_VIEW }              from '../data/atlas/views/medieval-japan.js';
import { VIEW as NATIVE_AMERICANS_VIEW }   from '../data/atlas/views/native-americans.js';
import { VIEW as THIRTEEN_COLONIES_VIEW }  from '../data/atlas/views/thirteen-colonies.js';
import { VIEW as WESTWARD_VIEW }           from '../data/atlas/views/westward-expansion.js';
import { VIEW as SLAVERY_VIEW }            from '../data/atlas/views/slavery-divisions.js';
import { VIEW as MESOPOTAMIA_VIEW }        from '../data/atlas/views/mesopotamia.js';
import { VIEW as HEBREWS_VIEW }            from '../data/atlas/views/ancient-hebrews.js';
import { VIEW as MALI_VIEW }               from '../data/atlas/views/mali-empire.js';
import { VIEW as PRE_COLUMBIAN_VIEW }      from '../data/atlas/views/pre-columbian.js';
import { VIEW as SCIREV_VIEW }             from '../data/atlas/views/scientific-revolution.js';
import { VIEW as GUNPOWDER_VIEW }          from '../data/atlas/views/gunpowder-empires.js';
import { VIEW as JACKSONIAN_VIEW }         from '../data/atlas/views/jacksonian-era.js';
import { VIEW as MANIFEST_DESTINY_VIEW }   from '../data/atlas/views/manifest-destiny.js';
import { VIEW as REFORM_VIEW }             from '../data/atlas/views/reform-movements.js';
import { VIEW as CRUSADES_VIEW }           from '../data/atlas/views/crusades.js';
import { VIEW as COLDWAR_VIEW }            from '../data/atlas/views/cold-war.js';
import { VIEW as GLOBALIZATION_VIEW }      from '../data/atlas/views/globalization.js';
import { VIEW as CIVIL_RIGHTS_VIEW }       from '../data/atlas/views/civil-rights.js';
// ── 2026-05-26 补 11 门孤儿课 Atlas view (创始人方向: 首页选课 → 走 Atlas 预热再学习) ──
import { VIEW as QIN_VIEW }                from '../data/atlas/views/qin-china.js';
import { VIEW as ROMAN_REPUBLIC_VIEW }     from '../data/atlas/views/roman-republic-fall.js';
import { VIEW as HAMILTON_VIEW }           from '../data/atlas/views/hamilton-jefferson.js';
import { VIEW as RECONSTRUCTION_VIEW }     from '../data/atlas/views/reconstruction.js';
import { VIEW as CHINESE_EXCLUSION_VIEW }  from '../data/atlas/views/chinese-exclusion.js';
import { VIEW as GILDED_AGE_VIEW }         from '../data/atlas/views/gilded-age.js';
import { VIEW as PROGRESSIVE_VIEW }        from '../data/atlas/views/progressive-era.js';
import { VIEW as SUFFRAGE_VIEW }           from '../data/atlas/views/womens-suffrage.js';
import { VIEW as DEPRESSION_VIEW }         from '../data/atlas/views/great-depression.js';
import { VIEW as SCRAMBLE_AFRICA_VIEW }    from '../data/atlas/views/scramble-for-africa.js';
import { VIEW as DECOLONIZATION_VIEW }     from '../data/atlas/views/decolonization.js';
import { VIEW as HAITIAN_VIEW }            from '../data/atlas/views/haitian-revolution.js';
import { VIEW as MEIJI_VIEW }              from '../data/atlas/views/meiji-restoration.js';
import { VIEW as RUSSIAN_REV_VIEW }        from '../data/atlas/views/russian-revolution.js';
import { VIEW as CONTEMPORARY_US_VIEW }    from '../data/atlas/views/contemporary-us.js';
// ── 2026-06 World 缺口新课 ──
import { VIEW as SUMER_VIEW }              from '../data/atlas/views/sumer.js';
import { VIEW as INDUS_VALLEY_VIEW }       from '../data/atlas/views/indus-valley.js';
import { VIEW as EARLY_HUMANS_VIEW }       from '../data/atlas/views/early-humans.js';
import { VIEW as ANCIENT_ISRAEL_VIEW }     from '../data/atlas/views/ancient-israel.js';
import { VIEW as TRADE_NETWORKS_VIEW }     from '../data/atlas/views/trade-networks.js';
import { VIEW as ASIAN_IMPERIALISM_VIEW }  from '../data/atlas/views/asian-imperialism.js';
import { VIEW as GUPTA_INDIA_VIEW }        from '../data/atlas/views/gupta-india.js';
import { VIEW as PERSIAN_EMPIRE_VIEW }     from '../data/atlas/views/persian-empire.js';
import { VIEW as LATIN_AMER_INDEP_VIEW }   from '../data/atlas/views/latin-american-independence.js';
import { VIEW as INTERWAR_TOTALITARIAN_VIEW } from '../data/atlas/views/interwar-totalitarianism.js';

export const ALL_VIEWS = [
  // G5 (5 topics)
  NATIVE_AMERICANS_VIEW, THIRTEEN_COLONIES_VIEW, REVOLUTION_VIEW, CONSTITUTION_VIEW, WESTWARD_VIEW,
  // G6 (13 topics — 加 qin / roman-republic-fall 2026-05-26; 加 sumer/indus/early-humans/ancient-israel 2026-06)
  MESOPOTAMIA_VIEW, HEBREWS_VIEW, EGYPT_VIEW, GREECE_VIEW, MAURYA_VIEW, HAN_VIEW,
  QIN_VIEW, ROMAN_REPUBLIC_VIEW, ROMAN_VIEW,
  SUMER_VIEW, INDUS_VALLEY_VIEW, EARLY_HUMANS_VIEW, ANCIENT_ISRAEL_VIEW,
  GUPTA_INDIA_VIEW, PERSIAN_EMPIRE_VIEW,
  // G7 (17 topics — 时间顺序)
  BYZANTINE_VIEW, ISLAMIC_VIEW, TANG_VIEW, CRUSADES_VIEW, JAPAN_VIEW, MAGNA_VIEW, MONGOL_VIEW, MALI_VIEW,
  DEATH_VIEW, PRE_COLUMBIAN_VIEW, EXPLORATION_VIEW, RENAISSANCE_VIEW, REFORMATION_VIEW,
  GUNPOWDER_VIEW, SCIREV_VIEW, ENLIGHTEN_VIEW, FR_REVOLUTION_VIEW, TRADE_NETWORKS_VIEW,
  // G8 (18 topics — 加 hamilton / reconstruction / chinese-exclusion / gilded-age / progressive / suffrage / depression, 2026-05-26)
  HAMILTON_VIEW, JACKSONIAN_VIEW, MANIFEST_DESTINY_VIEW, REFORM_VIEW, SLAVERY_VIEW,
  CIVILWAR_VIEW, RECONSTRUCTION_VIEW, INDUSTRIAL_VIEW, CHINESE_EXCLUSION_VIEW, GILDED_AGE_VIEW,
  PROGRESSIVE_VIEW, SUFFRAGE_VIEW, WWI_VIEW, DEPRESSION_VIEW, WWII_VIEW,
  COLDWAR_VIEW, CIVIL_RIGHTS_VIEW, GLOBALIZATION_VIEW,
  // HS 世界史 (3 topics — 2026-05-26 加 2; 2026-06-02 加 haitian)
  SCRAMBLE_AFRICA_VIEW, DECOLONIZATION_VIEW, HAITIAN_VIEW, MEIJI_VIEW, RUSSIAN_REV_VIEW, CONTEMPORARY_US_VIEW,
  ASIAN_IMPERIALISM_VIEW,
  LATIN_AMER_INDEP_VIEW, INTERWAR_TOTALITARIAN_VIEW,
];

// 默认登录页 — G7 第一个核心 Topic（拜占庭兴起 500AD，世界史枢纽节点）
export const DEFAULT_VIEW_ID = 'byzantine-rise';

// 轻量元数据列表：chip bar 只需要 id/title/year/grade/topicTier，不需要完整 polities/events
export function lightMetaList() {
  return ALL_VIEWS.map(v => ({
    id: v.id,
    title: v.title,
    year: v.year,
    grade: v.grade,
    topicTier: v.topicTier,
    tierType: v.tierType || null,  // 'extended' | 'extended-ap' | null
    deepLearnEnabled: !!v.deepLearnEnabled,  // 是否有完整 conversation engine 深度学
  }));
}

export function findView(id) {
  return ALL_VIEWS.find(v => v.id === id) || null;
}

// 反向映射：history topicId → atlas view id（用 deepLearnUrl 的路径/旧 query 形式提取）。
// 让单课页（含 32 个无 topic.geography 的 preview topic）直接给出"在地图上看"入口，
// 不必依赖 topic.geography.atlasViewId。无对应地图视图则返回 null。
export function findViewIdByTopicId(topicId) {
  if (!topicId) return null;
  for (var i = 0; i < ALL_VIEWS.length; i++) {
    var v = ALL_VIEWS[i];
    if (!v.deepLearnUrl) continue;
    var m = v.deepLearnUrl.match(/\/history\/([^/?&]+)/) || v.deepLearnUrl.match(/topicId=([^&]+)/);
    if (m && m[1] === topicId) return v.id;
  }
  return null;
}

// ─── 5-5 加：lens 是 single source of truth，atlas keyFigures 自动派生 ──
//
// 机制原则：deepLearnEnabled = true 的 Topic，其 keyFigures 必须从 history lens 派生，
// 不允许 atlas 自己写一套 (避免 atlas 5 角色 vs lens 3 角色不通信的事故)。
//
// 适用范围：当前 3 Topic (Magna Carta / Crusades / Black Death)。未来更多 Topic
// 接入 lens 系统时同样适用。
//
// 不适用：deepLearnEnabled = false 的 Topic（35 个），仍用 atlas 自带 keyFigures。
//
// 用法（在 AtlasLabPage 渲染 keyFigures 之前）：
//   import { getEffectiveKeyFigures } from '../lib/atlas-views';
//   const figures = await getEffectiveKeyFigures(meta);
//   <KeyFiguresRow figures={figures} ... />

export async function getEffectiveKeyFigures(view) {
  if (!view) return [];

  // 非 deepLearn Topic — 用 atlas 自带 keyFigures (legacy)
  if (!view.deepLearnEnabled || !view.deepLearnUrl) {
    return view.keyFigures || [];
  }

  // 提取 history topicId（路径形式 /history/<id> 优先，兼容旧 query ?topicId=）
  var match = view.deepLearnUrl.match(/\/history\/([^/?&]+)/) || view.deepLearnUrl.match(/topicId=([^&]+)/);
  if (!match) return view.keyFigures || [];
  var historyTopicId = match[1];

  // 动态 import history-storyboards (避免 SSR 时 circular dep)
  try {
    var mod = await import('./history-storyboards/index.js');
    var storyboardModule = mod.STORYBOARDS && mod.STORYBOARDS[historyTopicId];
    if (!storyboardModule || !storyboardModule.lenses) {
      // Topic 注册了 deepLearn 但没找到 lens 文件 — fallback atlas keyFigures + warn
      if (typeof console !== 'undefined') {
        console.warn('[atlas-views] ' + view.id + ' deepLearnEnabled but no lenses for ' + historyTopicId);
      }
      return view.keyFigures || [];
    }

    // 从 lens 派生 keyFigures
    var lensList = storyboardModule.lenses;
    return Object.values(lensList).map(function (lens) {
      // 兼容 bilingual schema (新) + 老 string schema (fallback)
      var nameField = (lens.name && typeof lens.name === 'object') ? lens.name : { cn: lens.nameCn || lens.name, en: lens.name };
      var roleField = (lens.role && typeof lens.role === 'object') ? lens.role : { cn: lens.role || '', en: lens.role || '' };
      var descField = (lens.description && typeof lens.description === 'object') ? lens.description : { cn: lens.description || '', en: lens.description || '' };
      return {
        emoji: lens.icon || '🎭',
        name: nameField,
        role: roleField,
        bio: descField,         // atlas 字段叫 bio，lens 字段叫 description——映射
        hook: null,             // 不再单独写 hook，N1 节点的 hook 即此处
        lensId: lens.id,        // 关键：让 atlas 直接绑定 lens
      };
    });
  } catch (e) {
    if (typeof console !== 'undefined') {
      console.warn('[atlas-views] getEffectiveKeyFigures failed for ' + view.id + ': ' + e.message);
    }
    return view.keyFigures || [];
  }
}

// 同步版 (没 await，给已经预加载 storyboardModule 的场景用)
// 注：当前 getStaticProps 异步，preferred async 版本
export function getEffectiveKeyFiguresSync(view, storyboardModule) {
  if (!view) return [];
  if (!view.deepLearnEnabled) return view.keyFigures || [];
  if (!storyboardModule || !storyboardModule.lenses) return view.keyFigures || [];

  return Object.values(storyboardModule.lenses).map(function (lens) {
    var nameField = (lens.name && typeof lens.name === 'object') ? lens.name : { cn: lens.nameCn || lens.name, en: lens.name };
    var roleField = (lens.role && typeof lens.role === 'object') ? lens.role : { cn: lens.role || '', en: lens.role || '' };
    var descField = (lens.description && typeof lens.description === 'object') ? lens.description : { cn: lens.description || '', en: lens.description || '' };
    return {
      emoji: lens.icon || '🎭',
      name: nameField,
      role: roleField,
      bio: descField,
      hook: null,
      lensId: lens.id,
    };
  });
}

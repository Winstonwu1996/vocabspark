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

export const ALL_VIEWS = [
  // G5 (5 topics)
  NATIVE_AMERICANS_VIEW, THIRTEEN_COLONIES_VIEW, REVOLUTION_VIEW, CONSTITUTION_VIEW, WESTWARD_VIEW,
  // G6 (7 topics)
  MESOPOTAMIA_VIEW, HEBREWS_VIEW, EGYPT_VIEW, GREECE_VIEW, MAURYA_VIEW, HAN_VIEW, ROMAN_VIEW,
  // G7 (17 topics — 时间顺序)
  BYZANTINE_VIEW, ISLAMIC_VIEW, TANG_VIEW, CRUSADES_VIEW, JAPAN_VIEW, MAGNA_VIEW, MONGOL_VIEW, MALI_VIEW,
  DEATH_VIEW, PRE_COLUMBIAN_VIEW, EXPLORATION_VIEW, RENAISSANCE_VIEW, REFORMATION_VIEW,
  GUNPOWDER_VIEW, SCIREV_VIEW, ENLIGHTEN_VIEW, FR_REVOLUTION_VIEW,
  // G8 (11 topics)
  JACKSONIAN_VIEW, MANIFEST_DESTINY_VIEW, REFORM_VIEW, SLAVERY_VIEW,
  CIVILWAR_VIEW, INDUSTRIAL_VIEW, WWI_VIEW, WWII_VIEW,
  COLDWAR_VIEW, CIVIL_RIGHTS_VIEW, GLOBALIZATION_VIEW,
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

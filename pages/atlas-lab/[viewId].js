// pages/atlas-lab/[viewId].js
//
// 单 Topic 动态路由 — 每个 view 独立 SSR，每页 ~700KB（替代之前 23MB 单页）。
// 切换 Topic 通过 Next.js Link 路由跳转，prefetch 自动启动。

import { ALL_VIEWS, findView, lightMetaList, getEffectiveKeyFiguresSync } from '../../lib/atlas-views';
import { STORYBOARDS } from '../../lib/history-storyboards/index.js';
import { renderView, renderWorldOverview, projectViewToWorld } from '../../lib/atlas-renderer';
import AtlasLabPage from '../../components/AtlasLabPage';

export async function getStaticPaths() {
  return {
    paths: ALL_VIEWS.map(v => ({ params: { viewId: v.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const view = findView(params.viewId);
  if (!view) return { notFound: true };

  // 只渲染当前 view × 2 mode（不再预渲染 32 × 2）
  const rendered = {
    historical: renderView(view, 'historical'),
    modern:     renderView(view, 'modern'),
  };
  const worldLocation = projectViewToWorld(view);
  const worldOverview = renderWorldOverview();

  // 轻量元数据列表 — chip bar 用，不含路径数据
  const allMeta = lightMetaList();

  // 5-5: lens 是 single source of truth; deepLearn Topic 的 keyFigures 自动从 lens 派生
  // (避免 atlas keyFigures 跟 history lens 不一致的事故)
  let storyboardModule = null;
  if (view.deepLearnEnabled && view.deepLearnUrl) {
    const m = view.deepLearnUrl.match(/\/history\/([^/?&]+)/) || view.deepLearnUrl.match(/topicId=([^&]+)/);
    const histId = m ? m[1] : null;
    storyboardModule = histId ? STORYBOARDS[histId] : null;
  }
  const effectiveKeyFigures = getEffectiveKeyFiguresSync(view, storyboardModule);

  // 把派生的 keyFigures 注入 view，覆盖原 keyFigures（如有）
  const enhancedView = { ...view, keyFigures: effectiveKeyFigures };

  return {
    props: {
      activeViewId: params.viewId,
      meta: enhancedView,
      rendered,
      worldLocation,
      worldOverview,
      allMeta,
    },
  };
}

export default function AtlasLabViewPage(props) {
  return <AtlasLabPage {...props} />;
}

// pages/atlas-lab/[viewId].js
//
// 单 Topic 动态路由 — 每个 view 独立 SSR，每页 ~700KB（替代之前 23MB 单页）。
// 切换 Topic 通过 Next.js Link 路由跳转，prefetch 自动启动。

import { ALL_VIEWS, findView, lightMetaList } from '../../lib/atlas-views';
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

  return {
    props: {
      activeViewId: params.viewId,
      meta: view,
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

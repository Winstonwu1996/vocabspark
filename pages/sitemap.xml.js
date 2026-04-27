const SITE = 'https://knowulearning.com';

function generateSiteMap(lastmod) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE}/</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>${SITE}/home</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>${SITE}/plan</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>${SITE}/privacy</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.5</priority></url>
  <url><loc>${SITE}/terms</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>0.5</priority></url>
</urlset>`;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const sitemap = generateSiteMap(lastmod);
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default SiteMap;

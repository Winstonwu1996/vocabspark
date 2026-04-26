# Atlas Module · Data Sources & Attribution

历史模块 (`/atlas-lab` 及未来正式产品) 使用以下开放数据源。本文件记录所有外部数据来源、授权和使用说明，确保合规。

---

## 1. 历史政治边界 — historical-basemaps

- **来源**：[github.com/aourednik/historical-basemaps](https://github.com/aourednik/historical-basemaps)
- **作者**：Andre Ourednik
- **授权**：GPL-3.0
- **使用**：`data/atlas/historical-basemaps/world_*.geojson`（年快照 1000 / 1200 / 1300 / 1500 / 1783 / 1880）
- **整合**：渲染时按 view.yearSnapshot 加载对应年份，按政体名（NAME 字段）查询多边形

**版权遵守**：
- 数据文件保留原始 GeoJSON 格式（未修改）
- 在产品 UI 显著位置标注「政治边界数据 © Andre Ourednik · GPL-3.0」
- 历史模块代码同步 GPL-3.0 开源（在独立部署 / 独立 repo 时确保）

---

## 2. 现代国家 + 海岸线 — Natural Earth

- **来源**：[Natural Earth](https://www.naturalearthdata.com/) (via [world-atlas](https://github.com/topojson/world-atlas))
- **授权**：Public Domain
- **使用**：`data/atlas/raw/land-110m.json`、`countries-110m.json`
- **整合**：底图 + 现代版图 mode

无版权限制。

---

## 3. 字体 / 视觉资源

- **DK Children's Illustrated Atlas 美学风格**：仅设计灵感，无代码 / 数据复用
- **羊皮纸纹理**：自制 SVG filter，无外部资源

---

## 计划接入（待整合）

| 数据源 | 授权 | 用途 |
|---|---|---|
| Wikidata SPARQL | CC0 | 事件 / 人物 / 因果链自动生成 |
| Smithsonian Open Access | CC0 | 11 轮对话视觉素材 |
| Metropolitan Museum | CC0 | 同上 |
| Library of Congress | 多为公共领域 | 美国史素材 |
| OpenStax World History | CC BY 4.0 | 章节 + 词汇表 |
| AP CED (College Board) | 教学使用允许 | AP 单元结构 |
| Common Standards Project | MIT | K-12 标准 JSON |
| Yale Avalon Project | 公共领域 | 历史一手文献 |
| Pelagios / Pleiades | CC BY | 古代地名 |
| Maddison Project | CC BY | 历史 GDP / 人口 |

接入时本文件同步更新。

---

## 商用许可策略

历史模块定位为**免费教育资源**，独立部署或独立 repo（与 Vocab 等付费模块解耦）。

- **CC0 / 公共领域**：商用 / 免费均无限制
- **CC BY**：注明出处即可
- **CC BY-SA**：衍生数据需同许可
- **GPL-3.0**：历史模块代码同 GPL 开源
- **CC BY-NC**（CK-12 / MIT OCW / World History Encyclopedia）：**不接入** — 即使免费产品，作为商业实体的子模块仍可能被解读为商用

主线策略：用 CC0 / CC BY / 公共领域 数据源，避开 NC 限制。

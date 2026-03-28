# Arcaya Living B2B 转型行动计划（保留电商能力）

## 0) 目标与约束

- 目标：在保留现有 Shopify 电商交易能力（产品、搜索、购物车、结账）的前提下，将站点升级为面向美国/欧洲高端建材家居的 B2B 增长型官网。
- 业务重点：
  - 承接多角色专业客户（Developer/Investor、Designer/Architect、GC、Owner's Rep、Realtor、Staging 等）。
  - 建立大量可投放广告的高转化登录页（Landing Pages）。
  - 构建高端一致性的视觉系统（Quiet Luxury）与可扩展 SVG 图标体系。
- 强约束（来自规则）：
  - 技术栈：Next.js + Shopify 后台。
  - 主市场：美国/欧洲；主客群：$3M-$10M 豪宅相关 B2B 决策链条。
  - 菜单与页面结构遵循 `.agent/rules/menu_pages.md` 的核心框架。

## 1) 总体策略：双轨架构（B2B 增长轨 + 电商交易轨）

- 轨道 A（B2B 增长轨）：
  - 新增 `PARTNERS & PROFESSIONALS`、`THE STUDIO`、`DELIVERY & SUPPORT` 等内容与转化中枢。
  - 广告登录页按角色、场景、州/城市、意图关键词进行工厂化生成。
- 轨道 B（电商交易轨，保留并增强）：
  - 继续保留现有 `product/search/cart/checkout` 流程。
  - 将 B2B 页面中的“Request Quote / Start Project / Apply / Sign In”与产品详情页互相打通。

一句话：不删电商，只在其上叠加 B2B 的分流、留资、报价与项目协作能力。

## 2) 信息架构与路由规划

### 2.1 顶部主导航（三核架构）

- 一级：`PARTNERS & PROFESSIONALS`
- 一级：`THE STUDIO`
- 一级：`COLLECTIONS`
- 一级：`DELIVERY & SUPPORT`
- 右侧 Utility Actions（常驻）：
  - `Start a Project / Apply`
  - `Sign In`
  - `Request Spec Pack`（可选）

### 2.2 页面族群（按优先级）

- P0（必须先上，承接流量与销售线索）
  - 角色核心页：
    - Developers & Investors
    - Interior Designers & Architects（含 Architect / Designer 双 Track）
    - General Contractors
  - 核心支持页：
    - Logistics & Warehousing
    - Order Tracking（Portal 落地页）
    - Compliance & Documentation
  - 全站统一转化页：
    - Start a Project / Apply
    - Sign In（Portal 登录）
- P1（第二波提升成交与交付信任）
  - Installation Network
  - Punch List & Aftercare
  - Partner With Us
  - The Manufacturing Scale
- P2（规模化增长）
  - 按州/城市投放页
  - 按关键词意图投放页
  - 按角色 x 场景组合页（如 Spec Home、Model Home、Luxury Condo）

### 2.3 推荐路由骨架（示例）

- `/partners/developers-investors`
- `/partners/designers-architects`
- `/partners/general-contractors`
- `/studio/room-planner`
- `/studio/curated-projects`
- `/studio/assets`
- `/support/logistics-warehousing`
- `/support/order-tracking`
- `/support/installation-network`
- `/support/punch-list-aftercare`
- `/support/compliance-docs`
- `/support/partner-with-us`
- `/support/manufacturing-scale`
- `/apply`
- `/signin`
- `/lp/{role}/{intent}/{geo}`（广告落地页工厂）

## 3) 菜单增强实施方案（多角色、多入口）

- 建立“角色映射表”：
  - 每个角色绑定：主诉求、证据模块、CTA、表单字段、SEO 关键词。
- 菜单组件改造：
  - 支持 Mega Menu 分组、角色卡片、动态推荐模块（案例/资料包/Demo）。
  - 支持桌面端多列 + 移动端分组折叠，保证可达性。
- 权限与状态感知：
  - 未登录：展示 `Apply / Sign In / Request Spec Pack`。
  - 已登录：展示 `Portal / Projects / Tickets / Docs` 快捷入口。

## 4) 广告登录页（Landing Page）规模化策略

### 4.1 Landing Page Factory（模板工厂）

- 建 1 套可配置模板，避免手工做几十上百页：
  - Hero（角色化标题 + 证据条）
  - Problem/Solution
  - Capability Blocks
  - Case Evidence
  - FAQ
  - Sticky CTA + 表单
- 页面变量化：
  - 角色变量：Developer/Designer/GC/Procurement…
  - 意图变量：bulk sourcing、trade discount、logistics、spec pack…
  - 地理变量：州/城市（US/EU）

### 4.2 转化链路设计

- 每页仅 1 主目标 CTA（其余为次目标）。
- 表单分层：
  - 轻表单（广告点击后 20-40 秒可提交）
  - 深表单（BOQ/RFQ 上传、预算/交付时间）
- 感谢页与自动分流：
  - 提交后进入角色专属下一步（预约会议/资料下载/注册 Portal）。

### 4.3 SEO + SEM 协同

- 每个 Landing Page 拥有独立：Title、Meta、H1、Schema、内部链接。
- 建立关键词集群：
  - 角色词、场景词、供应链词、合规词、材料词。
- 避免页面互相竞争：
  - 明确 Canonical、关键词映射唯一性、URL 命名规范。

## 5) 设计系统与 SVG 图标体系计划

### 5.1 视觉方向（按规则）

- 风格：Quiet Luxury + Architectural Minimalism。
- 颜色：黑白灰主导，极少量低饱和点缀。
- 版式：大留白、强层级、克制动效（Fade/Parallax 轻量）。

### 5.2 组件与令牌（Design Tokens）

- 建立 Token：颜色、字体、间距、圆角、阴影、动效时长、栅格。
- 建立核心组件库：
  - MegaMenu
  - RoleHero
  - EvidenceStrip（SLA/Compliance 指标条）
  - CTAForm（可配置字段）
  - CaseModule
  - DocsIndex

### 5.3 SVG 图标体系

- 先定义图标风格规范：线宽、圆角、视口、填充策略、命名规则。
- 建立 `icons` 目录与索引导出，统一通过 React SVG 组件使用。
- 图标分域：
  - 角色（Developer/Architect/GC…）
  - 物流交付（DDP/DDU/Tracking/Warehouse）
  - 文档合规（Spec/Test/CSI/Download）
  - 项目协作（RFQ/RFI/Ticket/SLA）
- 质量要求：
  - 所有 SVG 可主题化（颜色继承）、可访问（aria-label）、可压缩（SVGO）。

## 6) 保留并增强电商能力（关键）

- 永久保留现有核心链路：
  - `/product/[handle]`
  - `/search` 与 `/search/[collection]`
  - cart / checkout
- B2B 与电商打通策略：
  - 产品页新增 `Add to Project / Request Quote / Download Tear Sheet`（不替代 Add to Cart）。
  - 搜索结果支持“零售购买”和“项目采购”双入口。
  - 针对 B2B 账号展示批量采购提示与资料下载入口。

## 7) 分阶段执行路线（建议 8-10 周）

- Phase 1（第 1-2 周）：架构与基础能力
  - 完成新 IA、路由、菜单框架、Design Tokens、内容模型（角色/证据/CTA）。
- Phase 2（第 3-4 周）：P0 页面与转化系统
  - 上线 3 大角色核心页 + 3 大支持页 + Apply/SignIn + 表单追踪。
- Phase 3（第 5-6 周）：Landing Factory 与广告就绪
  - 上线模板化落地页系统，首批 20-40 页（按角色 x 意图 x 地域）。
- Phase 4（第 7-8 周）：P1 交付信任页 + Portal 对接
  - 安装、售后、合作伙伴、制造能力页。
- Phase 5（第 9-10 周）：优化与扩量
  - A/B 测试、SEO 扩展、图标与组件复用率优化、性能/可访问性打磨。

## 8) 指标与验收标准

- 增长指标：
  - 广告落地页 CVR、MQL 数、预约会话数、表单完整率。
- 销售指标：
  - 角色线索占比、报价请求量、项目立项率。
- 体验指标：
  - 首屏性能（LCP/INP）、移动端可用性、菜单点击到达率。
- 设计一致性：
  - Token 覆盖率、组件复用率、SVG 图标规范通过率。

## 9) 风险与规避

- 风险：页面数量激增导致质量不一致。
  - 规避：模板工厂 + 内容模型 + 组件化强约束。
- 风险：B2B 内容与电商链路割裂。
  - 规避：每个角色页都提供产品/资料/报价三向链接。
- 风险：团队在视觉上偏离“静奢克制”。
  - 规避：设计评审清单（颜色、留白、动效、排版）与上线门禁。

## 10) 立即执行清单（本周）

- 确认最终菜单与路由命名（英文 slug 一次定稿）。
- 定义角色内容模型（角色诉求、证据、CTA、表单字段）。
- 搭建 Landing Page 模板与数据驱动渲染骨架。
- 搭建 SVG 图标基线（命名规范 + 20 个核心图标首包）。
- 先上线 P0 的 Developers 页面作为第一支广告承接页。


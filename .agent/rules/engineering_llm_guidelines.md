# Arcaya Living 工程与 LLM 开发规范

> 目的：提醒所有后续 LLM/开发者在“新增功能或修改现有功能”时，必须遵守统一架构与业务约束，避免破坏现有电商链路与可扩展性。

## 1. 项目现状（必须先理解）

- 技术栈：Next.js App Router + React Server Components + Shopify Storefront API。
- 当前是“电商模板 + 业务扩展”结构：
  - 页面层：`app/`
  - 组件层：`components/`
  - 数据与后端适配层：`lib/shopify/`
- 当前并不是典型 IoC 容器式依赖注入，而是“Provider Adapter（提供方适配层）”模式：
  - UI 与业务主要依赖 `lib/shopify` 暴露的函数与类型。
  - 更换电商后端时，应该替换/新增 provider 适配层，而不是把 provider SDK 散落到页面和组件。

## 2. 不可破坏的核心原则（MUST）

- MUST 保留现有电商主链路可用：
  - `app/product/[handle]/page.tsx`
  - `app/search/page.tsx`
  - `app/search/[collection]/page.tsx`
  - 购物车与结账（`components/cart/*` + `checkoutUrl`）
- MUST 把 B2B 功能作为“叠加层”，不能以删减电商能力为代价。
- MUST 遵循 `.agent/rules/menu_pages.md` 和 `design_system_guidelines.md`。

## 3. 数据访问与可替换后端规范（MUST）

- MUST 将 provider 相关 API 调用集中在 `lib/<provider>/` 目录。
- MUST 禁止在 `app/*`、`components/*` 直接写 provider GraphQL/REST 请求。
- MUST 保持“统一领域函数接口”思路：`getProduct/getProducts/getCollections/getMenu/addToCart...`。
- SHOULD 在后续版本引入统一门面层（例如 `lib/commerce`）来解耦 `lib/shopify` 的直接引用。
- MUST 维持数据 reshape/normalize 逻辑集中管理（参考 `lib/shopify/index.ts` 中 `reshape*` 系列）。

## 4. 缓存与失效策略规范（MUST）

- MUST 使用 `next/cache` 的 tag 策略管理缓存：
  - 统一复用 `lib/constants.ts` 的 `TAGS`。
- MUST 在购物车写操作后更新 cart tag（参考 `components/cart/actions.ts` 的 `updateTag(TAGS.cart)`）。
- MUST 在 webhook revalidate 中只处理白名单 topic，并校验 `SHOPIFY_REVALIDATION_SECRET`。
- MUST 避免“无 tag 的裸 fetch”导致缓存行为不可控。

## 5. Server/Client 组件边界（MUST）

- MUST 默认优先 Server Components（数据获取在服务端）。
- MUST 仅在确需交互时使用 `"use client"`（例如购物车状态、移动菜单）。
- MUST 保持 Server Action 在 `components/cart/actions.ts` 这类集中位置管理，避免分散。
- MUST 不要把 secret/env 暴露到 client 组件。

## 6. 路由、菜单与页面扩展规范（MUST）

- MUST 所有新增菜单与角色落地页遵循 `menu_pages.md` 的信息架构。
- MUST 对大量投放页采用“模板化 + 数据驱动”，禁止复制粘贴几十个近似页面。
- MUST 新增页面时同时补齐 metadata（title/description/openGraph）。
- SHOULD 保持 URL 语义化、稳定、可 SEO（避免频繁改 slug）。

## 7. 设计系统与 SVG 规范（MUST）

- MUST 遵循 Quiet Luxury / Architectural Minimalism：克制色彩、大留白、低干扰动效。
- MUST 统一 SVG 图标规范（尺寸、线宽、命名、可访问性）。
- MUST 图标组件可复用、可继承颜色（避免硬编码颜色）。
- MUST 在移动端和桌面端都保持导航与关键 CTA 可用。

## 8. 类型、安全与错误处理规范（MUST）

- MUST 保持 TypeScript strict 兼容，新增类型放在合适的 `types` 层。
- MUST 对外部数据做类型收敛和容错（参考 `isShopifyError`、`reshape*`）。
- MUST 对关键失败路径给出稳定回退（空数组、undefined、错误日志）。
- MUST 不在日志中打印敏感信息（token、secret、客户私密信息）。

## 9. 提交前检查清单（LLM 自检）

每次改动必须自检以下项目：

- [ ] 未破坏现有电商流程（搜索/商品/购物车/结账）
- [ ] 未在 UI 层直接耦合 provider API
- [ ] 缓存 tag 与 revalidate 逻辑一致
- [ ] 新页面补齐 metadata 与可访问性
- [ ] 样式符合设计规范（非通用模板风）
- [ ] 通过 `pnpm prettier:check`

## 10. 禁止事项（MUST NOT）

- MUST NOT 直接删除或绕过现有购物车与结账能力。
- MUST NOT 在多个页面重复 hardcode 相同业务逻辑。
- MUST NOT 将 provider 细节泄漏到菜单、展示组件、表单组件。
- MUST NOT 引入与当前规范冲突的重型 UI 风格（破坏既定设计语言）。

## 11. 推荐目录演进（供后续迭代）

- 建议逐步形成以下结构（不要求本次一次完成）：

```text
lib/
  commerce/          # provider 无关门面（建议新增）
  shopify/           # Shopify 适配实现（现有）
  b2b/               # 报价、项目、资料包等领域逻辑

components/
  b2b/               # B2B 模块组件（RoleHero/EvidenceStrip/CTAForm 等）
  commerce/          # 电商通用组件
```

该演进目标用于保持“B2B 增长能力”和“电商交易能力”长期并存且可维护。

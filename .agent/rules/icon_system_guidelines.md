# Icon System Guidelines

## 目标

为 Arcaya Living 建立“可规模化、风格统一、可维护”的专业图标体系，支撑 B2B 多角色页面和大量投放落地页。

## 方案选择（已定）

- 主方案：第三方图标库 + 少量业务定制 SVG。
- 当前选型：`lucide-react` 作为基础库。
- 定制入口：`components/icons/custom/*`。
- 统一渲染入口：`components/icons/icon.tsx`。

## 为什么不用纯 AI 自动画图标

- 批量一致性差，容易出现线条粗细与视觉节奏不统一。
- 生成的 SVG 结构经常不干净，维护与性能不稳定。
- 商业项目里可追溯性与风格治理成本更高。

## 目录规范

```text
components/icons/
  icon.tsx            # 统一 Icon 入口（第三方 + custom）
  logo.tsx            # 品牌 logo
  custom/
    index.ts          # custom icon registry
    rfq.tsx
    spec-pack.tsx
```

## 设计与工程规范

- 统一画板：`24 x 24`。
- 默认线宽：`1.75`。
- 统一风格：`stroke="currentColor"`、`fill="none"`。
- 命名规范：kebab-case（如 `hard-hat`、`spec-pack`）。
- 可访问性：
  - 装饰图标：`decorative=true`（默认）。
  - 信息图标：必须提供 `label`。

## 开发规范（MUST）

- MUST 通过 `Icon` 组件使用图标，禁止在页面中散落直接 import 多套图标库。
- MUST 新增业务图标时先放入 `custom` 并在 `custom/index.ts` 注册。
- MUST 新增图标保持与现有视觉参数一致（线宽、端点、圆角）。
- SHOULD 优先复用 Lucide 图标，仅在业务语义缺失时才新增 custom。

## 首批推荐图标集合（B2B）

- 导航与通用：`menu` `x` `search` `chevron-down` `arrow-left` `arrow-right`
- 电商基础：`shopping-cart` `plus` `minus` `package`
- 角色与协作：`building` `users` `user-cog` `hard-hat` `layers`
- 交付与支持：`truck` `warehouse` `calendar-clock` `shield-check` `wrench`
- 文档与合规：`file-text` `file-check` `download` `upload` `spec-pack` `rfq`

## 代码示例

```tsx
import { Icon } from "components/icons/icon";

<Icon name="truck" className="text-neutral-700" />
<Icon name="spec-pack" decorative={false} label="Request spec pack" />
```

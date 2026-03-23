# 项目规范（Claude Code / 协作者必读）

## 技术栈

- **框架**：Next.js App Router（`src/app/`）
- **样式**：Tailwind CSS v4（语义 Token 在 `src/components/design-system/theme.css`，由 `globals.css` 引入）
- **语言**：TypeScript，路径别名 `@/*` → `src/*`

## 目录约定

| 路径 | 用途 |
|------|------|
| `src/app/` | 路由、`layout.tsx`、`page.tsx`、路由组 `(group)/` |
| `src/components/ui/` | 无业务耦合的可复用 UI |
| `src/components/layout/` | 全站/区域布局（Header、Footer、Shell） |
| `src/features/` | 按业务域划分的模块 |
| `src/lib/` | 工具函数、纯逻辑 |
| `src/components/design-system/` | 设计 Token：`theme.css`、`tokens.ts` |

## 设计系统（UntitledUI · 橙色品牌）

**字体**：DM Sans（400 / 500 / 600 / 700），CSS 变量 `--font-dm-sans`。

**品牌色**：橙色系，主色 `brand-500 = #fb6011`，悬停 `brand-600 = #ec470a`。

### Tailwind 类速查

| 场景 | 推荐写法 |
|------|----------|
| 文字大小 | `text-md`（16px）、`text-sm`（14px）、`text-display-lg`（48px） |
| 主要按钮 | `bg-brand-500 text-white hover:bg-brand-600 rounded-md shadow-xs` |
| 卡片 | `rounded-xl shadow-sm` |
| 模态框 | `rounded-2xl shadow-lg` |
| 标签 | `rounded-full` |
| 聚焦环 | `shadow-focus-ring` |
| 间距 | `p-xl`（16px）、`gap-lg`（12px）、`mt-4xl`（32px） |

### CSS 变量（语义化，在 `src/styles/tokens.css`）

```css
/* 文字 */
color: var(--color-text-primary);      /* 主要文字 #1c1917 */
color: var(--color-text-secondary);    /* 次要文字 #44403c */
color: var(--color-text-brand-tertiary); /* 品牌橙 */

/* 背景 */
background: var(--color-bg-primary);   /* 白底 */
background: var(--color-bg-secondary); /* 浅灰底 */
background: var(--color-bg-brand-solid); /* 橙色实心 */

/* 边框 */
border-color: var(--color-border-primary);
```

### 规则

1. **优先使用 Tailwind 类**（原始色盘或命名间距），避免随意写 hex。
2. **组件内可用语义 CSS 变量**，写法 `var(--color-text-primary)` 自动适配未来暗色模式。
3. **修改主题**：同步更新 `src/components/design-system/theme.css`（`@theme`）与 `tokens.ts`；同步更新 `src/styles/tokens.css`（语义变量）。
4. **类名合并**：使用 `@/lib/cn`（`clsx` + `tailwind-merge`）。

## 代码风格

- 新页面：在 `src/app/` 下建目录 + `page.tsx`；需要 SEO 时导出 `metadata` 或 `generateMetadata`。
- 客户端组件：文件首行 `"use client"`，默认服务端组件。
- 不引入未要求的依赖；不为了「整洁」做无关大重构。

## 参考文档

- 根目录 `CLAUDE.md`、`AGENTS.md`
- `.claude/prompts/` 下可复制到对话中的提示模板

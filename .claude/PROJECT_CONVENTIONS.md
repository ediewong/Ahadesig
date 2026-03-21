# 项目规范（Claude Code / 协作者必读）

## 技术栈

- **框架**：Next.js App Router（`src/app/`）
- **样式**：Tailwind CSS v4（`src/app/globals.css` 中 `@theme` 与语义 Token）
- **语言**：TypeScript，路径别名 `@/*` → `src/*`

## 目录约定

| 路径 | 用途 |
|------|------|
| `src/app/` | 路由、`layout.tsx`、`page.tsx`、路由组 `(group)/` |
| `src/components/ui/` | 无业务耦合的可复用 UI |
| `src/components/layout/` | 全站/区域布局（Header、Footer、Shell） |
| `src/features/` | 按业务域划分的模块 |
| `src/lib/` | 工具函数、纯逻辑、与 `tokens.ts` 等共享常量 |

## 设计系统

1. **优先使用语义 Token**：`bg-surface-page`、`text-text-muted`、`border-border-default`、`bg-brand-600` 等，避免随意写 hex。
2. **修改主题**：同步更新 `src/app/globals.css`（`:root` / `.dark`）与 `src/lib/tokens.ts`。
3. **类名合并**：使用 `@/lib/cn`（`clsx` + `tailwind-merge`）。

## 代码风格

- 新页面：在 `src/app/` 下建目录 + `page.tsx`；需要 SEO 时导出 `metadata` 或 `generateMetadata`。
- 客户端组件：文件首行 `"use client"`，默认服务端组件。
- 不引入未要求的依赖；不为了「整洁」做无关大重构。

## 参考文档

- 根目录 `CLAUDE.md`、`AGENTS.md`
- `.claude/prompts/` 下可复制到对话中的提示模板

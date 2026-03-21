<!-- BEGIN:nextjs-agent-rules -->
# Next.js 版本说明

本仓库使用的 Next.js 可能与训练数据中的 API 有差异。编写路由、缓存、`next/image` 等逻辑前，请查阅 `node_modules/next/dist/docs/` 或 [Next.js 官方文档](https://nextjs.org/docs)。

<!-- END:nextjs-agent-rules -->

## 仓库结构速览

| 区域 | 说明 |
|------|------|
| `src/app/` | App Router：`page.tsx`、`layout.tsx`、API 路由 |
| `src/components/ui/` | 通用 UI |
| `src/components/layout/` | 布局（Header / Footer） |
| `src/features/` | 业务模块 |
| `src/lib/` | `cn()`、`tokens.ts` 等 |
| `src/app/globals.css` | Tailwind v4 `@theme` 与设计 Token |
| `.claude/` | 规范与提示模板 |

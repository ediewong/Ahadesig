# 提示模板：新建页面

请在本仓库中按现有约定新增一个 Next.js App Router 页面：

1. **路由**：`src/app/<路径>/page.tsx`（说明 URL 与目录名）。
2. **样式**：仅使用 `src/components/design-system/theme.css` 中已有语义 Token（`bg-surface-*`、`text-text-*`、`border-border-*`、`brand-*`），需要时用 `@/lib/cn`。
3. **布局**：沿用根 `layout.tsx`；若需独立布局，在该路由段添加 `layout.tsx`。
4. **元数据**：导出 `metadata`（title、description）。
5. **导航**：若需入口，更新 `src/components/layout/SiteHeader.tsx` 的 `nav` 数组。

完成后运行 `npm run lint` 与 `npm run build` 确保通过。

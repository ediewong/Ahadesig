# 提示模板：新建 UI 组件

请新增一个可复用 UI 组件到 `src/components/ui/`：

1. **命名**：PascalCase 文件名，与导出组件名一致。
2. **类型**：为 props 定义明确 TypeScript 接口；优先使用 `Readonly<>` 包裹 children。
3. **样式**：使用设计 Token 类名；合并类名使用 `@/lib/cn`。
4. **客户端**：仅在需要事件、浏览器 API、React 状态时加 `"use client"`，否则保持服务端组件。
5. **可访问性**：按钮/链接使用语义元素；交互组件补充 `aria-*` 与键盘支持（如适用）。

完成后运行 `npm run lint`。

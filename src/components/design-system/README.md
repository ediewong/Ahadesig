# Design system

| 文件 | 说明 |
|------|------|
| `theme.css` | CSS 变量、`@theme` 与 `body` 基础样式（由 `src/app/globals.css` 引入） |
| `tokens.ts` | TS 侧镜像，供非 Tailwind 场景使用 |
| `index.ts` | 导出 `tokens` |

修改主题时同步更新 **theme.css** 与 **tokens.ts**。

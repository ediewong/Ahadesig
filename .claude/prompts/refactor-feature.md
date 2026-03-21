# 提示模板：在 feature 内迭代

请在 `src/features/<领域>/` 下实现或重构功能：

1. **边界**：该目录内可含组件、hooks、局部类型；跨 feature 共享逻辑抽到 `src/lib/`。
2. **路由**：页面仍放在 `src/app/`，通过 import 引用 feature 内模块。
3. **数据**：服务端数据获取优先在 Server Component 或 Route Handler（`src/app/api/`）中完成。
4. **不破坏**：保持与 `PROJECT_CONVENTIONS.md` 一致；不删除既有设计 Token 约定。

变更后执行 `npm run lint` 与 `npm run build`。

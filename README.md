# 前端项目模板（Next.js + Tailwind）

标准化目录、设计 Token、Claude 规范与 CI/CD，便于在 Claude Code 等工具中按统一结构生成代码。

## 本地开发

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

## 脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发服务器 |
| `npm run build` | 生产构建 |
| `npm run start` | 启动生产构建 |
| `npm run lint` | ESLint |

## 目录与 Token

- **路由**：`src/app/`（示例：`/`、`/about`）
- **组件**：`src/components/ui/`、`src/components/layout/`
- **业务模块**：`src/features/`
- **设计 Token**：`src/app/globals.css`（`@theme`）；JS 侧镜像见 `src/lib/tokens.ts`

## Claude / 协作者

- 规范：`.claude/PROJECT_CONVENTIONS.md`
- 提示模板：`.claude/prompts/*.md`
- 根目录：`CLAUDE.md`、`AGENTS.md`

## CI/CD

### 1. GitHub Actions（本仓库已包含）

- **`.github/workflows/ci.yml`**：在 Push / Pull Request 上执行 `lint` + `build`。
- **`.github/workflows/preview-deploy.yml`**：通过 Vercel 部署（**默认不运行**）。

若要用 Actions 部署，在 GitHub **Settings → Secrets and variables → Actions** 中：

| 类型 | 名称 | 说明 |
|------|------|------|
| Variable | `ENABLE_VERCEL_ACTION` | 设为 `true` 才会执行部署 job |
| Secret | `VERCEL_TOKEN` | [Vercel → Tokens](https://vercel.com/account/tokens) |
| Secret | `VERCEL_ORG_ID` | `npx vercel link` 后见 `.vercel/project.json` |
| Secret | `VERCEL_PROJECT_ID` | 同上 |

**勿提交** `.vercel/` 目录。

### 2. 仅连接 Vercel + GitHub（推荐零配置预览）

在 [Vercel](https://vercel.com) 导入该 GitHub 仓库：每次 Push / PR 会自动生成 **Preview URL**，无需填写上述 Secrets。若已使用 Vercel 托管，可删除或禁用 `preview-deploy.yml`，仅保留 `ci.yml`。

## 许可证

私有模板可自由修改；若开源请自行选择许可证。

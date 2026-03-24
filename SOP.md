# 设计稿生成 & 发布 SOP

> 适用对象：新入职设计师 / 协作成员
> 最后更新：2026-03-23

---

## 概述

本项目使用 **Claude Code + Next.js + Vercel** 的工作流，让设计师可以直接生成可在浏览器中查看的真实页面，并通过链接分享给任何人（包括不懂代码的同事、客户）。

```
Figma 设计稿
    ↓ 描述需求
Claude Code（AI 生成代码）
    ↓ 一键部署
Vercel（线上预览链接）
    ↓ 分享
同事 / 客户 / PM 在浏览器直接查看
```

---

## 第一部分：环境配置（入职只需做一次）

### 步骤 1：安装必要软件

打开电脑上的**终端（Terminal）**，逐条粘贴以下命令运行：

**安装 Homebrew（Mac 包管理工具）：**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**安装 Node.js：**
```bash
brew install node
```

**安装 GitHub CLI（用于推送代码）：**
```bash
brew install gh
```

**安装 Vercel CLI（用于部署）：**
```bash
npm install -g vercel
```

完成后验证安装是否成功（每条命令应该输出版本号）：
```bash
node --version
gh --version
vercel --version
```

---

### 步骤 2：登录 GitHub 账号

在终端运行：
```bash
gh auth login
```

出现选项时按以下方式选择：
1. `? What account do you want to log into?` → 选 **GitHub.com** → 回车
2. `? What is your preferred protocol?` → 选 **HTTPS** → 回车
3. `? How would you like to authenticate?` → 选 **Login with a web browser** → 回车
4. 终端会显示一个 **8位验证码**（如 `ABCD-1234`），复制它
5. 浏览器自动打开 `https://github.com/login/device`
6. 粘贴验证码 → 点 **Authorize GitHub CLI**

看到 `✓ Logged in as ediewong` 表示成功。

---

### 步骤 3：登录 Vercel 账号

在终端运行：
```bash
vercel login
```

选择 **Continue with GitHub** → 浏览器弹出授权页面 → 点 **Authorize** → 完成。

---

### 步骤 4：下载项目到本地

在终端运行：
```bash
cd ~/Desktop
git clone https://github.com/ediewong/Ahadesig.git
cd Ahadesig
```

**安装项目依赖：**
```bash
npm install
```

**将项目连接到 Vercel：**
```bash
vercel link --yes
```

完成后本地项目配置好了，以后每次直接在这个文件夹里工作。

---

### 步骤 5：安装 Claude Code

打开终端运行：
```bash
npm install -g @anthropic-ai/claude-code
```

安装完成后，进入项目文件夹打开 Claude Code：
```bash
cd ~/Desktop/Ahadesig
claude
```

第一次运行需要输入 Anthropic API Key（找管理员获取），输入后回车即可。

---

## 第二部分：日常工作流（每次设计时使用）

### 完整流程图

```
1. 打开 Claude Code
      ↓
2. 告诉 AI 要生成什么页面（用中文描述即可）
      ↓
3. AI 生成代码，本地预览确认效果
      ↓
4. 运行一键部署脚本
      ↓
5. 拿到线上链接，发给同事 / 客户
```

---

### 步骤 1：打开项目

每次工作前，在终端运行：
```bash
cd ~/Desktop/Ahadesig
claude
```

---

### 步骤 2：描述需求，让 AI 生成页面

在 Claude Code 对话框里用中文描述你想要的页面，例如：

**示例 1 — 新页面：**
> 帮我生成一个用户登录页面，包含邮箱输入框、密码输入框、登录按钮，品牌色用橙色，风格简洁现代

**示例 2 — 修改现有页面：**
> 把首页的 Hero 区域的标题改成「让设计更高效」，副标题改成「AI 驱动的设计工作流」，背景改为浅橙色

**示例 3 — 新组件：**
> 帮我做一个价格卡片组件，包含标题、价格、功能列表、立即购买按钮，做三个档位：免费版、专业版、企业版

> **设计规范说明：** AI 会自动遵循公司的 UntitledUI 设计规范（橙色品牌色 `#fb6011`、DM Sans 字体、标准间距和圆角），不需要额外说明。

---

### 步骤 3：本地预览效果

AI 生成代码后，在 Claude Code 里运行：
```
! npm run dev
```

然后打开浏览器访问 `http://localhost:3000` 查看效果。

如果需要调整，继续在 Claude Code 里描述修改内容即可。

---

### 步骤 4：部署到线上

效果确认满意后，在 Claude Code 里运行（替换引号里的内容为本次设计说明）：
```
! ./deploy.sh "feat: 登录页设计"
```

等待约 30 秒，终端会输出一个线上网址，例如：
```
✅ 完成！
Production: https://ahadesig.vercel.app
```

---

### 步骤 5：分享链接

将网址发给同事、PM 或客户，对方直接在浏览器打开即可查看，无需安装任何软件。

---

## 第三部分：分支管理（多个设计方案并行时使用）

当需要同时做多个方案，或者不想影响主版本时，使用分支：

### 创建新分支
```
! git checkout -b feat/方案名称
```

例如：
```
! git checkout -b feat/login-v2
```

### 在新分支上部署预览
```
! vercel --yes
```

这会生成一个**临时预览链接**（不影响正式网站），可以发给客户对比方案。

### 方案确认后合并到主版本
```
! git checkout main
! git merge feat/login-v2
! ./deploy.sh "feat: 合并登录页 v2 方案"
```

---

## 第四部分：常用命令速查

| 场景 | 命令 |
|------|------|
| 打开 Claude Code | `claude` |
| 本地预览 | `npm run dev` |
| 一键推送并部署 | `./deploy.sh "说明文字"` |
| 仅推送到 GitHub | `git push origin main` |
| 仅部署到 Vercel | `vercel --prod --yes` |
| 新建分支 | `git checkout -b feat/名称` |
| 查看当前分支 | `git branch` |
| 切回主分支 | `git checkout main` |

---

## 第五部分：设计规范速查

> 本项目使用 **UntitledUI 设计系统**，告诉 AI 需求时无需重复说明这些规范，AI 会自动遵守。

| 元素 | 规范 |
|------|------|
| 字体 | DM Sans（正文 16px，小字 14px） |
| 品牌主色 | 橙色 `#fb6011` |
| 品牌悬停色 | `#ec470a` |
| 按钮圆角 | 8px |
| 卡片圆角 | 12px |
| 弹窗圆角 | 16px |

---

## 第六部分：常见问题

**Q: 运行命令没有反应或报错？**
A: 检查是否在正确的文件夹里。在终端运行 `cd ~/Desktop/Ahadesig`，再重试。

**Q: 本地预览打不开？**
A: 确认运行了 `npm run dev`，然后浏览器访问 `http://localhost:3000`（注意不是 https）。

**Q: 部署失败？**
A: 检查是否登录了 Vercel。在终端运行 `vercel whoami`，如果没有显示账号名，运行 `vercel login` 重新登录。

**Q: 推送 GitHub 失败？**
A: 检查是否登录了 GitHub。在终端运行 `gh auth status`，如果未登录，运行 `gh auth login` 重新登录。

**Q: 想撤销 AI 生成的代码？**
A: 在 Claude Code 里说「撤销上一步的修改」，或者运行 `git checkout -- .` 恢复到上次提交的状态。

---

## 联系方式

遇到本文档未覆盖的问题，联系：**王怡迪**

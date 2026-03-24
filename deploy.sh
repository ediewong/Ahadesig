#!/bin/sh
# 推送代码到 GitHub + 部署到 Vercel
# 用法: ./deploy.sh "提交说明"

MSG=${1:-"update"}

echo "📦 提交并推送到 GitHub..."
git add -A
git commit -m "$MSG" 2>/dev/null || echo "（无新改动，跳过 commit）"
git push origin main

echo "🚀 部署到 Vercel..."
vercel --prod --yes

echo "✅ 完成！"

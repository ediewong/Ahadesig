/**
 * 与 globals.css 中语义 Token 对齐，供图表、Canvas、内联 style 等非 Tailwind 场景使用。
 * 修改设计 Token 时请同步更新此文件与 globals.css。
 */
export const tokens = {
  radius: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    full: "var(--radius-full)",
  },
  spacing: {
    sectionY: "var(--space-section-y)",
    stack: "var(--space-stack)",
    inline: "var(--space-inline)",
  },
  color: {
    surfacePage: "var(--surface-page)",
    surfaceElevated: "var(--surface-elevated)",
    surfaceMuted: "var(--surface-muted)",
    borderDefault: "var(--border-default)",
    textPrimary: "var(--text-primary)",
    textMuted: "var(--text-muted)",
    brand600: "var(--palette-brand-600)",
  },
} as const;

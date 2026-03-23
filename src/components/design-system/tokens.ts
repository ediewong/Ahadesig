/**
 * UntitledUI Design Token JS 引用
 * 与 theme.css (@theme) 和 src/styles/tokens.css 对齐。
 * 供图表、Canvas、内联 style 等非 Tailwind 场景使用。
 */
export const tokens = {
  /** 圆角 */
  radius: {
    none: "var(--radius-none)",
    xxs:  "var(--radius-xxs)",
    xs:   "var(--radius-xs)",
    sm:   "var(--radius-sm)",
    md:   "var(--radius-md)",
    lg:   "var(--radius-lg)",
    xl:   "var(--radius-xl)",
    "2xl": "var(--radius-2xl)",
    "3xl": "var(--radius-3xl)",
    "4xl": "var(--radius-4xl)",
    full: "var(--radius-full)",
  },

  /** 语义化文字颜色 */
  text: {
    primary:   "var(--color-text-primary)",
    secondary:  "var(--color-text-secondary)",
    tertiary:  "var(--color-text-tertiary)",
    disabled:  "var(--color-text-disabled)",
    placeholder: "var(--color-text-placeholder)",
    brand:     "var(--color-text-brand-tertiary)",
    error:     "var(--color-text-error-primary)",
    white:     "var(--color-text-white)",
  },

  /** 语义化背景颜色 */
  bg: {
    primary:   "var(--color-bg-primary)",
    secondary:  "var(--color-bg-secondary)",
    tertiary:  "var(--color-bg-tertiary)",
    brand:     "var(--color-bg-brand-solid)",
    brandHover: "var(--color-bg-brand-solid-hover)",
    error:     "var(--color-bg-error-primary)",
    warning:   "var(--color-bg-warning-primary)",
    success:   "var(--color-bg-success-primary)",
  },

  /** 语义化边框颜色 */
  border: {
    primary:  "var(--color-border-primary)",
    secondary: "var(--color-border-secondary)",
    brand:    "var(--color-border-brand)",
    error:    "var(--color-border-error)",
  },

  /** 品牌色原始色阶（橙色） */
  brand: {
    25:  "#fff9f2",
    50:  "#fff6ed",
    100: "#ffead5",
    200: "#ffd1a9",
    300: "#feb073",
    400: "#fd843a",
    500: "#fb6011",
    600: "#ec470a",
    700: "#c4330a",
    800: "#9b2911",
    900: "#7d2511",
    950: "#441006",
  },
} as const;

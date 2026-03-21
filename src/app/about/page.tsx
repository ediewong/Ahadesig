import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-section-y sm:px-6">
      <article className="max-w-3xl">
        <h1 className="text-3xl font-semibold text-text-primary">关于此模板</h1>
        <p className="mt-4 leading-relaxed text-text-secondary">
          本页为 App Router 路由示例（
          <code className="rounded bg-surface-muted px-1 font-mono text-sm">
            src/app/about/page.tsx
          </code>
          ）。新增页面时在{" "}
          <code className="rounded bg-surface-muted px-1 font-mono text-sm">
            src/app/
          </code>{" "}
          下创建目录与{" "}
          <code className="rounded bg-surface-muted px-1 font-mono text-sm">
            page.tsx
          </code>{" "}
          即可。
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-text-secondary">
          <li>
            <strong className="text-text-primary">设计 Token</strong>：见{" "}
            <code className="font-mono text-sm">src/app/globals.css</code> 与{" "}
            <code className="font-mono text-sm">src/lib/tokens.ts</code>
          </li>
          <li>
            <strong className="text-text-primary">组件</strong>：通用 UI 放{" "}
            <code className="font-mono text-sm">components/ui</code>
            ，布局放{" "}
            <code className="font-mono text-sm">components/layout</code>
          </li>
          <li>
            <strong className="text-text-primary">Claude</strong>：规范与提示模板在{" "}
            <code className="font-mono text-sm">.claude/</code>
          </li>
        </ul>
      </article>
    </main>
  );
}

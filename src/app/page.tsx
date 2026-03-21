import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 py-section-y sm:px-6">
      <div className="rounded-xl border border-border-default bg-surface-elevated p-8 shadow-sm md:p-12">
        <p className="text-sm font-medium text-brand-600">标准化模板</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
          Next.js + Tailwind 项目骨架
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-secondary">
          已预置路由、组件目录、设计 Token，以及{" "}
          <code className="rounded bg-surface-muted px-1.5 py-0.5 font-mono text-sm text-text-primary">
            .claude/
          </code>{" "}
          下的提示与规范。推送至 GitHub 可触发 CI 与预览部署（需配置
          Secrets）。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-medium text-text-inverse transition hover:bg-brand-700"
          >
            查看示例页
          </Link>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-border-strong bg-surface-page px-5 py-2.5 text-sm font-medium text-text-primary transition hover:bg-surface-muted"
          >
            Next.js 文档
          </a>
        </div>
      </div>
    </main>
  );
}

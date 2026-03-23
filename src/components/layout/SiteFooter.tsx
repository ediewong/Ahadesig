export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border-default bg-surface-elevated">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>© {new Date().getFullYear()} 项目模板 · Next.js + Tailwind</p>
        <p className="text-text-secondary">
          Design system：src/components/design-system/
        </p>
      </div>
    </footer>
  );
}

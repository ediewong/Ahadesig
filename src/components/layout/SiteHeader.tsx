import Link from "next/link";

import { cn } from "@/lib/cn";

const nav = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-default bg-surface-elevated/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-text-primary"
        >
          App
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="主导航">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm text-text-secondary transition-colors",
                "hover:bg-surface-muted hover:text-text-primary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

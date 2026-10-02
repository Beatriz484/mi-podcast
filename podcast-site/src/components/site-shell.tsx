import Link from "next/link";
import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/episodes", label: "Episodes" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1117]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-sm font-medium tracking-[0.22em] text-[#f2efe7] uppercase">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d7a84e]/60 bg-[#d7a84e]/10 text-base text-[#f7d589]">
            P
          </span>
          Podcadst
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-[#dfe4ea] md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/episodes"
          className="inline-flex items-center justify-center rounded-full border border-[#d7a84e]/60 bg-[#d7a84e]/10 px-4 py-2 text-sm font-medium text-[#f7d589] transition hover:bg-[#d7a84e]/20"
        >
          Listen now
        </Link>
      </div>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div style={{ maxWidth: "42rem" }} className="space-y-4">
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d7a84e]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="text-base leading-7 text-[#b5c0cc]">{description}</p> : null}
    </div>
  );
}

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0b1016] text-[#edf3f9]">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#101822]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-[#b5c0cc] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 Podcadst.</p>
        <div className="flex items-center gap-6">
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/episodes" className="transition hover:text-white">
            Episodes
          </Link>
          <Link href="/faq" className="transition hover:text-white">
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
}

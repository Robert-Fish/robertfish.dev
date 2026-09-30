import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="shell flex items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-foreground"
          aria-label="Robert Fish, home"
        >
          RF
        </Link>
        <nav aria-label="Sections" className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

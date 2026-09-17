import { Link } from "@tanstack/react-router";
import { NAV_LINKS } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-navy/10 bg-mist/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid size-8 place-items-center rounded-md bg-electric font-display font-bold text-primary-foreground">
            N
          </div>
          <div className="leading-none">
            <span className="font-display text-lg font-semibold tracking-tight text-ink">NexaTech</span>
            <span className="font-display text-lg font-light text-ink/60"> Solutions</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-navy/70 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-ink" }}
              className="transition hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-mist transition hover:bg-navy sm:inline-flex"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}

import { Link, Outlet } from "@tanstack/react-router";
import type { ReactNode } from "react";

function Header() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="w-9 h-9 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-serif text-xl font-bold">A</span>
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition">
            American Classics Library
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link to="/" className="hover:text-primary transition [&.active]:text-primary">Home</Link>
          <Link to="/books" className="hover:text-primary transition [&.active]:text-primary">Library</Link>
          <Link to="/about" className="hover:text-primary transition [&.active]:text-primary">About</Link>
          <Link to="/contact" className="hover:text-primary transition [&.active]:text-primary">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border mt-24 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2">American Classics Library</h3>
          <p className="text-muted-foreground leading-relaxed">
            Free public-domain American literature. Read online or download the PDF — no signup, no paywall.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2">Explore</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li><Link to="/books" className="hover:text-primary">Browse Library</Link></li>
            <li><Link to="/about" className="hover:text-primary">About the Project</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2">Public Domain</h4>
          <p className="text-muted-foreground leading-relaxed">
            All texts are in the U.S. public domain, sourced from Project Gutenberg. You are free to read, download, and share.
          </p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} American Classics Library. Texts courtesy of Project Gutenberg.
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children ?? <Outlet />}</main>
      <Footer />
    </div>
  );
}
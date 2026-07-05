import { createFileRoute, Link } from "@tanstack/react-router";
import { books } from "../lib/books";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const featured = books.filter((b) => b.featured);
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-secondary/40 to-background">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-foreground mb-4">
            Free · Public Domain · No Signup
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.05]">
            The great American novels,<br />
            <span className="italic text-primary">free forever.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Fitzgerald. Twain. Melville. Hawthorne. Whitman. Read the books that shaped
            American literature — online in your browser, or as clean PDFs on your phone.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/books"
              className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              Browse the Library →
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition"
            >
              What is this?
            </Link>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">Featured this month</h2>
            <p className="text-muted-foreground mt-1">Three American masterpieces, ready to read.</p>
          </div>
          <Link to="/books" className="hidden md:inline text-sm font-semibold text-primary hover:underline">
            See all {books.length} books →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((b) => (
            <Link
              key={b.slug}
              to="/books/$slug"
              params={{ slug: b.slug }}
              className="group rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition"
            >
              <div
                className="aspect-[3/4] flex flex-col justify-end p-6 text-white"
                style={{ background: b.coverGradient }}
              >
                <div className="font-serif text-2xl font-semibold leading-tight">{b.title}</div>
                <div className="mt-2 text-sm opacity-80">{b.author} · {b.year}</div>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground leading-relaxed">{b.summary}</p>
                <div className="mt-4 text-sm font-semibold text-primary group-hover:underline">
                  Read more →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-3">
          {[
            { t: "Zero paywalls", d: "Every book here has entered the U.S. public domain. Reading them is your right." },
            { t: "Clean PDFs", d: "Download-ready files that look good on a Kindle, iPad, or laptop screen." },
            { t: "Curated selection", d: "Not a giant search index — a hand-picked shelf of the American canon." },
          ].map((f) => (
            <div key={f.t}>
              <h3 className="font-serif text-xl font-semibold text-foreground">{f.t}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

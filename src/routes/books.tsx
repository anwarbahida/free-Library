import { createFileRoute } from "@tanstack/react-router";
import { books, genres } from "../lib/books";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "The Library — American Classics Library" },
      {
        name: "description",
        content:
          "Browse our full collection of free American classic novels, memoirs, and poetry. Download PDFs or read online.",
      },
      { property: "og:title", content: "The Library — American Classics Library" },
      {
        property: "og:description",
        content: "Every free American classic in our collection, in one place.",
      },
    ],
  }),
  component: BooksIndex,
});

function BooksIndex() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent-foreground mb-3">
          The Library
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
          {books.length} American classics, free to read.
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          The full collection. Every book is in the U.S. public domain — download the PDF, read it
          in your browser, or send it to your Kindle.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {genres.map((g) => (
            <span
              key={g}
              className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {g}
            </span>
          ))}
        </div>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((b) => (
          <article
            key={b.slug}
            className="group rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition flex flex-col"
          >
            <div
              className="aspect-[3/4] flex flex-col justify-end p-5 text-white"
              style={{ background: b.coverGradient }}
            >
              <div className="font-serif text-xl font-semibold leading-tight">{b.title}</div>
              <div className="mt-1 text-xs opacity-80">
                {b.author} · {b.year}
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {b.genre}
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {b.summary}
              </p>
              <a
                href={b.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:underline"
                aria-label={`Open the PDF of ${b.title} in a new tab`}
              >
                Open PDF
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

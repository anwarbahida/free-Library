import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getBook, books } from "../lib/books";

export const Route = createFileRoute("/books/$slug")({
  loader: ({ params }) => {
    const book = getBook(params.slug);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ loaderData }) => {
    const b = loaderData?.book;
    if (!b) return { meta: [{ title: "Book not found" }] };
    return {
      meta: [
        { title: `${b.title} by ${b.author} — Free PDF & Online Read` },
        {
          name: "description",
          content: `Read ${b.title} by ${b.author} (${b.year}) free online, or download the public-domain PDF. ${b.summary}`,
        },
        { property: "og:title", content: `${b.title} by ${b.author}` },
        { property: "og:description", content: b.summary },
        { property: "og:type", content: "book" },
      ],
    };
  },
  notFoundComponent: NotFound,
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-serif text-3xl font-semibold">Something went wrong</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
      <Link to="/books" className="mt-6 inline-block text-primary font-semibold">
        ← Back to library
      </Link>
    </div>
  ),
  component: BookDetail,
});

function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-serif text-3xl font-semibold">Book not found</h1>
      <p className="mt-2 text-muted-foreground">We couldn't find that book in our library.</p>
      <Link to="/books" className="mt-6 inline-block text-primary font-semibold">
        ← Back to library
      </Link>
    </div>
  );
}

function BookDetail() {
  const { book } = Route.useLoaderData();
  const related = books.filter((b) => b.slug !== book.slug && b.genre === book.genre).slice(0, 3);

  return (
    <article className="mx-auto max-w-5xl px-6 py-12">
      <nav className="text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/books" className="hover:text-primary">
          Library
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{book.title}</span>
      </nav>

      <div className="grid gap-10 md:grid-cols-[280px_1fr] items-start">
        <div
          className="aspect-[3/4] rounded-lg flex flex-col justify-end p-6 text-white shadow-xl"
          style={{ background: book.coverGradient }}
        >
          <div className="font-serif text-2xl font-semibold leading-tight">{book.title}</div>
          <div className="mt-2 text-sm opacity-80">{book.author}</div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-widest text-accent-foreground font-semibold">
            {book.genre} · {book.year}
          </div>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            {book.title}
          </h1>
          <div className="mt-2 text-lg text-muted-foreground">by {book.author}</div>

          <p className="mt-6 text-lg text-foreground leading-relaxed">{book.summary}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">{book.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={book.readOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              Read Online →
            </a>
            <a
              href={book.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition"
            >
              ↓ Download PDF
            </a>
            <a
              href={book.epubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition"
            >
              ↓ Download EPUB
            </a>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Files hosted by Project Gutenberg. Public domain in the United States.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-border pt-10">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
            More {book.genre}
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/books/$slug"
                params={{ slug: r.slug }}
                className="group rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition"
              >
                <div
                  className="aspect-[3/4] flex flex-col justify-end p-4 text-white"
                  style={{ background: r.coverGradient }}
                >
                  <div className="font-serif text-lg font-semibold leading-tight">{r.title}</div>
                  <div className="mt-1 text-xs opacity-80">{r.author}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

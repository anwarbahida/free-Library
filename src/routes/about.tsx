import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — American Classics Library" },
      {
        name: "description",
        content:
          "American Classics Library is a free, ad-supported home for public-domain American literature. Learn what we do and why.",
      },
      { property: "og:title", content: "About American Classics Library" },
      {
        property: "og:description",
        content: "Why we built a free home for public-domain American literature.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent-foreground mb-3">
        About
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight">
        A quiet home for the American canon.
      </h1>
      <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          American Classics Library exists to make the great works of American literature — the ones
          that helped invent what "American writing" even means — as easy as possible to pick up and
          read.
        </p>
        <p>
          Every book in the collection has entered the U.S. public domain. That means anyone,
          anywhere, has the legal right to read, download, print, and share these texts. We don't
          lock anything behind an account, a subscription, or a paywall. We don't try to guess what
          you want to read next. We just keep a small, hand-picked shelf, and we try to make each
          book easy to open.
        </p>
        <p>
          The files themselves are courtesy of{" "}
          <a
            href="https://www.gutenberg.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Project Gutenberg
          </a>
          , the volunteer-run digital library that has been preserving public-domain texts since
          1971.
        </p>
        <p>
          This site is supported by unobtrusive advertising. That's how the servers stay on and the
          books stay free.
        </p>
      </div>
      <div className="mt-10">
        <Link
          to="/books"
          className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
        >
          Browse the Library →
        </Link>
      </div>
    </div>
  );
}

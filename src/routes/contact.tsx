import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — American Classics Library" },
      {
        name: "description",
        content:
          "Get in touch with American Classics Library — suggest a book, report a broken link, or say hello.",
      },
      { property: "og:title", content: "Contact American Classics Library" },
      {
        property: "og:description",
        content: "Suggest a book, report a broken link, or say hello.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent-foreground mb-3">Contact</p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight">
        Say hello.
      </h1>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Have a book you'd love to see on the shelf? Found a broken download link?
        Want to correct something? We'd love to hear from you.
      </p>
      <div className="mt-8 rounded-lg border border-border bg-card p-8">
        <div className="text-sm font-semibold text-foreground">Email</div>
        <a
          href="mailto:hello@americanclassicslibrary.com"
          className="mt-1 block font-serif text-2xl text-primary hover:underline break-all"
        >
          hello@americanclassicslibrary.com
        </a>
        <p className="mt-4 text-sm text-muted-foreground">
          We read every message, and reply to most within a few days.
        </p>
      </div>
    </div>
  );
}
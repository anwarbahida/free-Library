import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — American Classics Library" },
      {
        name: "description",
        content:
          "How American Classics Library handles your data, cookies, and advertising through Google AdSense.",
      },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-4xl font-semibold text-foreground">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
      <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
        <p>
          American Classics Library ("we", "our", "the site") is committed to protecting your
          privacy. This page explains what information we collect and how it is used.
        </p>
        <h2 className="font-serif text-2xl font-semibold text-foreground pt-4">Information We Collect</h2>
        <p>
          We do not require you to create an account. We do not collect names, email
          addresses, or payment information. Standard server logs may record anonymized
          data such as browser type, referring page, and approximate location for analytics.
        </p>
        <h2 className="font-serif text-2xl font-semibold text-foreground pt-4">Cookies & Advertising</h2>
        <p>
          This site uses Google AdSense to display advertisements. Google, as a
          third-party vendor, uses cookies to serve ads based on your prior visits to
          this and other websites. You may opt out of personalized advertising by
          visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Google Ads Settings
          </a>
          .
        </p>
        <h2 className="font-serif text-2xl font-semibold text-foreground pt-4">Downloadable Books</h2>
        <p>
          All books offered on this site are U.S. public-domain works, hosted by{" "}
          <a
            href="https://www.gutenberg.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Project Gutenberg
          </a>
          . Downloads happen directly from their servers.
        </p>
        <h2 className="font-serif text-2xl font-semibold text-foreground pt-4">Contact</h2>
        <p>Questions? Email hello@americanclassicslibrary.com.</p>
      </div>
    </div>
  );
}
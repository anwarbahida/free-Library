import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MessageSquare, Send, User } from "lucide-react";

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

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name (at least 2 characters)."),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Please add a short subject."),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters.")
    .max(2000, "Message is too long (max 2000 characters)."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? `Request failed (${response.status}).`);
      }

      setStatus("success");
      reset();
    } catch (err) {
      console.error(err);
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "We couldn't send your message. Please email us directly at americanclassicslibrary@gmail.com.",
      );
      setStatus("error");
    }
  });

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent-foreground mb-3">
        Contact
      </p>
      <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground leading-tight">
        Say hello.
      </h1>
      <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
        Have a book you'd love to see on the shelf? Found a broken download link? Want to correct
        something? We'd love to hear from you.
      </p>

      <form
        onSubmit={onSubmit}
        noValidate
        className="mt-10 space-y-5 rounded-lg border border-border bg-card p-6 sm:p-8"
      >
        <div>
          <label htmlFor="contact-name" className="block text-sm font-semibold text-foreground">
            Name
          </label>
          <div className="relative mt-2">
            <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              {...register("name")}
            />
          </div>
          {errors.name && (
            <p id="contact-name-error" className="mt-1 text-xs text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-semibold text-foreground">
            Email
          </label>
          <div className="relative mt-2">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p id="contact-email-error" className="mt-1 text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-subject" className="block text-sm font-semibold text-foreground">
            Subject
          </label>
          <div className="relative mt-2">
            <MessageSquare className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="contact-subject"
              type="text"
              placeholder="Book suggestion, broken link, feedback..."
              aria-invalid={errors.subject ? "true" : "false"}
              aria-describedby={errors.subject ? "contact-subject-error" : undefined}
              className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              {...register("subject")}
            />
          </div>
          {errors.subject && (
            <p id="contact-subject-error" className="mt-1 text-xs text-destructive">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-semibold text-foreground">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={6}
            placeholder="Tell us a bit more..."
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            {...register("message")}
          />
          {errors.message && (
            <p id="contact-message-error" className="mt-1 text-xs text-destructive">
              {errors.message.message}
            </p>
          )}
        </div>

        {status === "success" && (
          <p className="rounded-md border border-primary/30 bg-primary/10 px-3 py-2 text-sm text-foreground">
            Thanks! Your message has been sent. We read every message and reply within a few days.
          </p>
        )}
        {status === "error" && errorMessage && (
          <p className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
            {errorMessage}
          </p>
        )}

        <div className="flex flex-col-reverse items-stretch gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            Or email us directly at{" "}
            <a
              href="mailto:americanclassicslibrary@gmail.com"
              className="font-medium text-primary hover:underline"
            >
              americanclassicslibrary@gmail.com
            </a>
            .
          </p>
          <button
            type="submit"
            disabled={isSubmitting || status === "submitting"}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {isSubmitting || status === "submitting" ? "Sending..." : "Send message"}
          </button>
        </div>
      </form>
    </div>
  );
}

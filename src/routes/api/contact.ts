import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  subject: z.string().trim().min(3).max(200),
  message: z.string().trim().min(10).max(2000),
});

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value || value.length === 0) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ ok: false, error: "Invalid JSON payload." }, { status: 400 });
        }

        const parsed = contactSchema.safeParse(payload);
        if (!parsed.success) {
          return Response.json(
            {
              ok: false,
              error: "Validation failed.",
              issues: parsed.error.issues.map((i) => ({
                path: i.path.join("."),
                message: i.message,
              })),
            },
            { status: 422 },
          );
        }

        const { name, email, subject, message } = parsed.data;

        const host = getRequiredEnv("SMTP_HOST");
        const port = Number.parseInt(process.env.SMTP_PORT ?? "465", 10);
        const user = getRequiredEnv("SMTP_USER");
        const pass = getRequiredEnv("SMTP_PASSWORD");
        const fromAddress = getRequiredEnv("MAIL_FROM");
        const toAddress = getRequiredEnv("MAIL_TO");

        if (!Number.isFinite(port)) {
          return Response.json({ ok: false, error: "Invalid SMTP_PORT." }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
          host,
          port,
          secure: port === 465,
          auth: { user, pass },
        });

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeSubject = escapeHtml(subject);
        const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

        const text = [`Name: ${name}`, `Email: ${email}`, "", "Message:", message].join("\n");

        const html = `
      <div style="font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height: 1.5; color: #1f2937;">
        <h2 style="font-family: Georgia, serif; margin: 0 0 16px;">New contact message</h2>
        <table cellpadding="6" style="border-collapse: collapse;">
          <tr><td style="font-weight: bold;">Name</td><td>${safeName}</td></tr>
          <tr><td style="font-weight: bold;">Email</td><td>${safeEmail}</td></tr>
          <tr><td style="font-weight: bold;">Subject</td><td>${safeSubject}</td></tr>
        </table>
        <h3 style="margin-top: 24px;">Message</h3>
        <p style="white-space: pre-wrap;">${safeMessage}</p>
      </div>
    `;

        try {
          await transporter.sendMail({
            from: fromAddress,
            to: toAddress,
            replyTo: `${name} <${email}>`,
            subject: `[Contact] ${subject}`,
            text,
            html,
          });
          return Response.json({ ok: true });
        } catch (err) {
          console.error("[contact] SMTP send failed:", err);
          return Response.json(
            {
              ok: false,
              error: "We couldn't send your message right now. Please try again later.",
            },
            { status: 500 },
          );
        }
      },
    },
  },
});

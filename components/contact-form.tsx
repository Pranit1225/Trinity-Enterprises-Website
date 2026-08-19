"use client";
import { FormEvent, useState } from "react";
import { Check, Loader2, Send, TriangleAlert } from "lucide-react";
function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="field-label" htmlFor={`contact-${name}`}>
        {label}
      </label>
      <input
        id={`contact-${name}`}
        name={name}
        type={type}
        required={required}
        autoComplete={name === "company" ? "organization" : name}
        className="field-input"
        placeholder={placeholder}
      />
    </div>
  );
}
export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const d = (await r.json()) as { message?: string };
      if (!r.ok)
        throw new Error(d.message || "We could not send your enquiry.");
      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }
  if (status === "success")
    return (
      <div className="rounded-[2rem] bg-[#0b1821] p-6 text-white shadow-2xl md:p-9">
        <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d9a62e] text-[#0b1821]">
            <Check size={28} />
          </div>
          <p className="mt-6 text-[10px] font-bold uppercase tracking-[.2em] text-[#d9a62e]">
            Enquiry sent
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-.04em]">
            Thanks — Trinity has your message.
          </h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/45">
            Your enquiry has been handed to the website email delivery layer.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-7 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  return (
    <form
      onSubmit={submit}
      className="rounded-[2rem] bg-[#0b1821] p-6 text-white shadow-2xl md:p-9"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#d9a62e]">
            Enquiry form
          </p>
          <p className="mt-2 text-sm text-white/40">
            Short, direct and connected to the site backend.
          </p>
        </div>
        <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 sm:flex">
          <Send size={15} className="text-[#d9a62e]" />
        </div>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your name" />
        <Field label="Company" name="company" placeholder="Company name" />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@company.com"
        />
        <Field label="Phone" name="phone" placeholder="+91" required={false} />
      </div>
      <div className="mt-5">
        <label className="field-label" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          minLength={10}
          placeholder="Tell us briefly about your requirement..."
          className="field-input resize-none"
        />
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      {status === "error" && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-3 rounded-2xl border border-[#ef765b]/30 bg-[#ef765b]/10 px-4 py-3 text-sm text-white/75"
        >
          <TriangleAlert size={17} className="mt-0.5 shrink-0 text-[#ef765b]" />
          <span>{error}</span>
        </div>
      )}
      <button
        disabled={status === "sending"}
        className="mt-6 flex w-full items-center justify-center rounded-full bg-[#d9a62e] px-6 py-4 text-sm font-bold text-[#0b1821] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="mr-2 animate-spin" size={16} />
            Sending enquiry...
          </>
        ) : (
          <>
            Send enquiry <Send className="ml-2" size={16} />
          </>
        )}
      </button>
      <p className="mt-3 text-center text-[10px] leading-5 text-white/25">
        Your message is sent securely through the site API.
      </p>
    </form>
  );
}

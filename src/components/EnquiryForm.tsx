"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

// TODO: Replace this with your real Formspree form endpoint.
// 1. Create a free form at https://formspree.io (set it to deliver to
//    thearkhomeschooling@gmail.com).
// 2. Copy the endpoint it gives you, e.g. "https://formspree.io/f/abcdwxyz".
// 3. Paste it below.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "sending" | "success" | "error";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card-panel flex flex-col items-center gap-3 bg-white p-9 text-center">
        <CheckCircle2 size={40} className="text-teal" />
        <h3 className="font-display text-xl text-teal-dark">
          Enquiry Sent!
        </h3>
        <p className="font-body text-sm text-ink/70">
          Thank you for reaching out. Teacher Farida will get back to you by
          email shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-2 !py-2.5 text-sm"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-panel bg-white p-7 md:p-9">
      <h3 className="font-display text-xl text-teal-dark">Send an Enquiry</h3>
      <p className="mt-2 font-body text-sm text-ink/70">
        Prefer email? Fill this in and it&apos;ll go straight to our inbox.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="font-body text-sm font-bold text-ink/80">
            Parent / Guardian Name
          </label>
          <input
            name="name"
            required
            className="mt-1.5 w-full rounded-xl border-2 border-teal/20 bg-cream px-4 py-3 font-body text-ink outline-none focus:border-coral"
            placeholder="e.g. Jane Wanjiru"
          />
        </div>
        <div>
          <label className="font-body text-sm font-bold text-ink/80">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            className="mt-1.5 w-full rounded-xl border-2 border-teal/20 bg-cream px-4 py-3 font-body text-ink outline-none focus:border-coral"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="font-body text-sm font-bold text-ink/80">
            Phone (optional)
          </label>
          <input
            name="phone"
            className="mt-1.5 w-full rounded-xl border-2 border-teal/20 bg-cream px-4 py-3 font-body text-ink outline-none focus:border-coral"
            placeholder="e.g. 07XX XXX XXX"
          />
        </div>
        <div>
          <label className="font-body text-sm font-bold text-ink/80">
            Child&apos;s Age
          </label>
          <input
            name="child_age"
            className="mt-1.5 w-full rounded-xl border-2 border-teal/20 bg-cream px-4 py-3 font-body text-ink outline-none focus:border-coral"
            placeholder="e.g. 7"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="font-body text-sm font-bold text-ink/80">
          Your Enquiry
        </label>
        <textarea
          name="message"
          required
          rows={4}
          className="mt-1.5 w-full rounded-xl border-2 border-teal/20 bg-cream px-4 py-3 font-body text-ink outline-none focus:border-coral"
          placeholder="Tell us a bit about your child's learning needs..."
        />
      </div>

      {status === "error" && (
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-coral/10 px-4 py-3 font-body text-sm text-coral-dark">
          <AlertCircle size={18} />
          Something went wrong sending your enquiry. Please try again, or
          reach us directly on WhatsApp.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary mt-6 w-full justify-center disabled:opacity-60"
      >
        <Send size={18} />
        {status === "sending" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}

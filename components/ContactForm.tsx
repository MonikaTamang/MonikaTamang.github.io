"use client";

import { useState, useEffect } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  //  auto-hide success/error message
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //  spam protection (honeypot)
    if (form.website) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "", website: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-xl">
      <form onSubmit={handleSubmit} className="space-y-4">

        {/*  Hidden spam field */}
        <input
          type="text"
          className="hidden"
          value={form.website}
          onChange={(e) =>
            setForm({ ...form, website: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-blue-500"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-blue-500"
          required
        />

        <textarea
          placeholder="Your Message"
          rows={4}
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          className="w-full p-3 rounded-lg bg-white/5 border border-white/10 outline-none focus:border-blue-500"
          required
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg flex items-center justify-center hover:scale-[1.02] active:scale-[0.98]"
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>

      </form>

      {/*  Success / Error Message */}
      {status !== "idle" && (
        <div
          className={`mt-4 p-4 rounded-lg transition-opacity duration-500 ${
            status === "success"
              ? "bg-green-500/10 border border-green-500/20 text-green-400"
              : "bg-red-500/10 border border-red-500/20 text-red-400"
          }`}
        >
          {status === "success"
            ? "Message sent successfully "
            : "Something went wrong. Try again."}
        </div>
      )}
    </div>
  );
}
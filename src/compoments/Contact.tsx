"use client";

import { useState } from "react";
import { Mail, User, MessageSquare, Send } from "lucide-react";
import DitherShader from "./bgContact2";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: brancher ici ta server action / API route d'envoi
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="grid w-full grid-cols-1 lg:grid-cols-2">
      {/* Colonne visuelle */}
      <div className="relative min-h-[40vh] lg:min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <DitherShader
            src="/bgcontact.jpg"
            gridSize={2}
            ditherMode="bayer"
            colorMode="custom"
            customPalette={["#4a5340", "#7a6a4a", "#c98a5e", "#e8dcc4", "#FFE9D4"]}
            customDitherAmount={0.8}
            contrast={1.15}
            threshold={0.5}
            invert={false}
            className="h-full w-full"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Citation flottante */}
        <div className="absolute bottom-8 left-6 right-6 rounded-3xl bg-[#794022]/90 p-8 shadow-xl backdrop-blur-md md:bottom-12 md:left-12 md:right-auto md:max-w-md">
          <p className="font-ma-police-2 text-xl leading-relaxed text-[#FFE9D4] md:text-2xl">
            « Une bougie ne se contente pas d'éclairer une pièce — elle y dépose
            une âme. »
          </p>
          <span className="mt-4 block text-sm uppercase tracking-[0.2em] text-[#FFE9D4]/70">
            Leila Benali — Fondatrice
          </span>
        </div>
      </div>

      {/* Colonne formulaire */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start justify-center gap-8 bg-[#794022] px-6 py-16 sm:px-12 lg:px-16"
      >
        <header className="w-full">
          <span className="mb-3 inline-block text-sm uppercase tracking-[0.2em] text-[#FFE9D4]/70">
            Contact
          </span>
          <h1 className="font-ma-police-2 text-4xl tracking-tight text-[#FFE9D4] sm:text-5xl">
            Écrivez-nous
          </h1>
          <p className="mt-4 max-w-md text-base text-[#FFE9D4]/80">
            Une question, une commande spéciale ou une collaboration ? Notre
            équipe vous répond avec plaisir.
          </p>
        </header>

        <div className="flex w-full max-w-lg flex-col gap-5">
          {/* Nom */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-[#FFE9D4]">
              Nom
            </label>
            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#794022]/50"
              />
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Karim Hacane"
                className="w-full rounded-xl border border-[#FFE9D4]/30 bg-white/90 py-3 pl-11 pr-4 text-neutral-800 placeholder:text-neutral-400 focus:border-[#FFE9D4] focus:outline-none focus:ring-2 focus:ring-[#FFE9D4]/30 transition"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-[#FFE9D4]">
              Email
            </label>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#794022]/50"
              />
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="karimhacane@example.com"
                className="w-full rounded-xl border border-[#FFE9D4]/30 bg-white/90 py-3 pl-11 pr-4 text-neutral-800 placeholder:text-neutral-400 focus:border-[#FFE9D4] focus:outline-none focus:ring-2 focus:ring-[#FFE9D4]/30 transition"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-[#FFE9D4]">
              Message
            </label>
            <div className="relative">
              <MessageSquare
                size={18}
                className="absolute left-4 top-4 text-[#794022]/50"
              />
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Votre message..."
                className="w-full resize-none rounded-xl border border-[#FFE9D4]/30 bg-white/90 py-3 pl-11 pr-4 text-neutral-800 placeholder:text-neutral-400 focus:border-[#FFE9D4] focus:outline-none focus:ring-2 focus:ring-[#FFE9D4]/30 transition"
              />
            </div>
          </div>

          {/* Bouton */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="group mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFE9D4] px-6 py-3.5 font-semibold text-[#794022] transition hover:bg-[#f5d9bd] focus:outline-none focus:ring-2 focus:ring-[#FFE9D4]/40 disabled:opacity-60"
          >
            {status === "sending"
              ? "Envoi en cours..."
              : status === "sent"
              ? "Message envoyé ✓"
              : "Envoyer le message"}
            {status === "idle" && (
              <Send
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
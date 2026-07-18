"use client";

import { useState } from "react";

export default function StanContact({ aptType }: { aptType: string }) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border border-gold-dark/40 bg-gold-light/10 px-6 py-10 text-center">
        <p className="font-serif text-2xl text-navy-950">Hvala Vam!</p>
        <p className="font-sans text-sm text-navy-800/70 mt-2">
          Vaš upit za {aptType} je zaprimljen. Kontaktirat ćemo vas uskoro.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="font-sans text-xs tracking-wide uppercase text-navy-800/60">
            Ime i prezime *
          </label>
          <input
            required
            type="text"
            className="w-full mt-2 bg-transparent border-b border-navy-950/25 py-2 font-sans text-navy-950 focus:outline-none focus:border-gold-dark transition-colors"
          />
        </div>
        <div>
          <label className="font-sans text-xs tracking-wide uppercase text-navy-800/60">
            Telefon
          </label>
          <input
            type="tel"
            className="w-full mt-2 bg-transparent border-b border-navy-950/25 py-2 font-sans text-navy-950 focus:outline-none focus:border-gold-dark transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="font-sans text-xs tracking-wide uppercase text-navy-800/60">
          E-mail *
        </label>
        <input
          required
          type="email"
          className="w-full mt-2 bg-transparent border-b border-navy-950/25 py-2 font-sans text-navy-950 focus:outline-none focus:border-gold-dark transition-colors"
        />
      </div>
      <div>
        <label className="font-sans text-xs tracking-wide uppercase text-navy-800/60">
          Interes
        </label>
        <input
          type="text"
          defaultValue={`${aptType} – Toni Residence`}
          readOnly
          className="w-full mt-2 bg-transparent border-b border-navy-950/15 py-2 font-sans text-navy-800/60 focus:outline-none cursor-default"
        />
      </div>
      <div>
        <label className="font-sans text-xs tracking-wide uppercase text-navy-800/60">
          Poruka (opcionalno)
        </label>
        <textarea
          rows={3}
          className="w-full mt-2 bg-transparent border-b border-navy-950/25 py-2 font-sans text-navy-950 focus:outline-none focus:border-gold-dark transition-colors resize-none"
        />
      </div>
      <button type="submit" className="btn-primary mt-3 self-start">
        Pošaljite upit
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";

export default function StanContact({ aptType }: { aptType: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "6b50da96-2e0d-4d18-9f4c-1e22cc885cf3");
    formData.append("subject", "Novi upit sa Svibje Residence weba");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
            name="name"
            type="text"
            className="w-full mt-2 bg-transparent border-b border-navy-950/25 py-2 font-sans text-navy-950 focus:outline-none focus:border-gold-dark transition-colors"
          />
        </div>
        <div>
          <label className="font-sans text-xs tracking-wide uppercase text-navy-800/60">
            Telefon
          </label>
          <input
            name="phone"
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
          name="email"
          type="email"
          className="w-full mt-2 bg-transparent border-b border-navy-950/25 py-2 font-sans text-navy-950 focus:outline-none focus:border-gold-dark transition-colors"
        />
      </div>
      <div>
        <label className="font-sans text-xs tracking-wide uppercase text-navy-800/60">
          Interes
        </label>
        <input
          name="interes"
          type="text"
          defaultValue={`${aptType} – Svibje Residence`}
          readOnly
          className="w-full mt-2 bg-transparent border-b border-navy-950/15 py-2 font-sans text-navy-800/60 focus:outline-none cursor-default"
        />
      </div>
      <div>
        <label className="font-sans text-xs tracking-wide uppercase text-navy-800/60">
          Poruka (opcionalno)
        </label>
        <textarea
          name="message"
          rows={3}
          className="w-full mt-2 bg-transparent border-b border-navy-950/25 py-2 font-sans text-navy-950 focus:outline-none focus:border-gold-dark transition-colors resize-none"
        />
      </div>
      {status === "error" && (
        <p className="font-sans text-sm text-red-600">
          Došlo je do greške. Molimo pokušajte ponovno ili nas kontaktirajte telefonski.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary mt-3 self-start disabled:opacity-60"
      >
        {status === "sending" ? "Slanje..." : "Pošaljite upit"}
      </button>
    </form>
  );
}

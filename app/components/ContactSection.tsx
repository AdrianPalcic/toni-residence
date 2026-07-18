"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <section id="lokacija" className="relative bg-navy-950 py-24 lg:py-32 scroll-mt-20">
      <div className="container-px max-w-8xl mx-auto grid lg:grid-cols-2 gap-16">
        <Reveal>
          <p className="section-heading-eyebrow text-gold-light">Lokacija</p>
          <h2 className="section-heading !text-gold-light">
            Mirno susjedstvo, <span className="italic text-gold-light">odlična povezanost</span>
          </h2>
          <p className="font-sans text-cream/70 leading-relaxed mt-5 max-w-lg">
            Zgrada Toni Residence smještena je u mirnom stambenom naselju s
            dobrom prometnom povezanošću, blizinom trgovina, škola i javnog
            prijevoza.
          </p>

          <div className="relative mt-8 aspect-[4/3] rounded-sm overflow-hidden border border-cream/10 bg-navy-900 flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,theme(colors.cream)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.cream)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="relative flex flex-col items-center gap-3 text-center px-6">
              <span className="w-3 h-3 rounded-full bg-gold-light shadow-[0_0_0_8px_rgba(203,169,93,0.2)]" />
              <p className="font-sans text-sm text-cream/60 max-w-xs">
                Točna adresa i interaktivna karta dodaju se naknadno &mdash;
                mjesto za Google Maps prikaz lokacije zgrade.
              </p>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <dt className="font-sans text-xs tracking-widest2 uppercase text-cream/45">Adresa</dt>
              <dd className="font-sans text-cream/85 mt-1">Ulica i broj, Grad</dd>
            </div>
            <div>
              <dt className="font-sans text-xs tracking-widest2 uppercase text-cream/45">Telefon</dt>
              <dd className="font-sans text-cream/85 mt-1">+385 XX XXX XXXX</dd>
            </div>
            <div>
              <dt className="font-sans text-xs tracking-widest2 uppercase text-cream/45">E-mail</dt>
              <dd className="font-sans text-cream/85 mt-1">info@toniresidence.hr</dd>
            </div>
            <div>
              <dt className="font-sans text-xs tracking-widest2 uppercase text-cream/45">Investitor</dt>
              <dd className="font-sans text-cream/85 mt-1">AC Mišković d.o.o.</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={120} className="scroll-mt-20" id="kontakt">
          <div className="bg-cream p-8 sm:p-10">
            <p className="section-heading-eyebrow">Kontakt</p>
            <h3 className="font-serif text-3xl text-navy-950 mt-3">
              Zatražite <span className="italic text-gold-dark">informacije</span>
            </h3>
            <p className="font-sans text-sm text-navy-800/70 mt-3">
              Ispunite obrazac i javit ćemo vam se u najkraćem mogućem roku.
            </p>

            {status === "sent" ? (
              <div className="mt-8 border border-gold-dark/40 bg-gold-light/10 px-6 py-8 text-center">
                <p className="font-serif text-xl text-navy-950">Hvala Vam!</p>
                <p className="font-sans text-sm text-navy-800/70 mt-2">
                  Vaš upit je zaprimljen. Kontaktirat ćemo vas uskoro.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-xs tracking-wide uppercase text-navy-800/60">
                      Ime i prezime
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
                    E-mail
                  </label>
                  <input
                    required
                    type="email"
                    className="w-full mt-2 bg-transparent border-b border-navy-950/25 py-2 font-sans text-navy-950 focus:outline-none focus:border-gold-dark transition-colors"
                  />
                </div>
                <div>
                  <label className="font-sans text-xs tracking-wide uppercase text-navy-800/60">
                    Za koji tip stana ste zainteresirani?
                  </label>
                  <select className="w-full mt-2 bg-transparent border-b border-navy-950/25 py-2 font-sans text-navy-950 focus:outline-none focus:border-gold-dark transition-colors">
                    <option>Nisam siguran/na</option>
                    <option>Tip A</option>
                    <option>Tip B</option>
                    <option>Tip C</option>
                    <option>Tip D</option>
                    <option>Tip E</option>
                  </select>
                </div>
                <div>
                  <label className="font-sans text-xs tracking-wide uppercase text-navy-800/60">
                    Poruka
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
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

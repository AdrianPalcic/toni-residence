import Image from "next/image";
import { buildingFacts } from "@/app/data/building";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-navy-950">
      <Image
        src="/images/vanjski-1.jpeg"
        alt="Toni Residence — vanjski izgled zgrade"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-navy-950/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-transparent to-navy-950/40" />

      <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="container-px max-w-8xl mx-auto w-full pb-16 lg:pb-20">
          <p className="fade-in-up section-heading-eyebrow text-gold-light">
            Novogradnja &middot; Useljivo odmah
          </p>
          <h1
            className="fade-in-up font-serif text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.05] text-cream mt-4 max-w-3xl"
            style={{ animationDelay: "120ms" }}
          >
            Toni <span className="italic text-gold-light">Residence</span>
          </h1>
          <p
            className="fade-in-up font-sans text-cream/75 text-base sm:text-lg mt-6 max-w-xl leading-relaxed"
            style={{ animationDelay: "240ms" }}
          >
            Suvremena rezidencijalna zgrada s pažljivo osmišljenim stanovima,
            plemenitim materijalima i mirnim susjedstvom — prizemlje i tri
            kata, ukupno 17 stanova.
          </p>

          <div
            className="fade-in-up flex flex-wrap gap-4 mt-9"
            style={{ animationDelay: "360ms" }}
          >
            <a href="#stanovi" className="btn-primary">
              Pogledajte stanove
            </a>
            <a href="#kontakt" className="btn-outline">
              Zakažite razgled
            </a>
          </div>

          <div
            className="fade-in-up grid grid-cols-2 sm:grid-cols-5 gap-x-8 gap-y-6 mt-14 pt-8 border-t border-cream/15"
            style={{ animationDelay: "480ms" }}
          >
            {buildingFacts.map((fact) => (
              <div key={fact.label}>
                <p className="font-serif text-xl sm:text-2xl text-gold-light">{fact.value}</p>
                <p className="font-sans text-[11px] sm:text-xs tracking-wider uppercase text-cream/55 mt-1">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 lg:right-16 z-10 hidden sm:flex items-center gap-2 text-cream/60">
        <span className="font-sans text-[11px] tracking-widest2 uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="h-10 w-px bg-cream/40" />
      </div>
    </section>
  );
}

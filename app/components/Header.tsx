"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#o-projektu", label: "O projektu" },
  { href: "#galerija", label: "Galerija" },
  { href: "#virtualna-setnja", label: "360° šetnja" },
  { href: "#stanovi", label: "Tipovi stanova" },
  { href: "#tlocrti", label: "Tlocrti" },
  { href: "#lokacija", label: "Lokacija" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-navy-950/95 backdrop-blur-md shadow-[0_4px_30px_-10px_rgba(0,0,0,0.4)]"
          : "bg-gradient-to-b from-navy-950/70 to-transparent"
      }`}
    >
      <div className="container-px max-w-8xl mx-auto flex items-center justify-between h-20 lg:h-24">
        <a href="#" className="flex items-center gap-3 group">
          <span className="shrink-0 bg-cream rounded-sm p-1.5 shadow-sm">
            <Image
              src="/images/ac-miskovic-logo.svg"
              alt="AC Mišković d.o.o."
              width={648}
              height={547}
              className="h-9 w-auto lg:h-11"
              priority
            />
          </span>
          <span className="flex flex-col leading-none whitespace-nowrap">
            <span className="font-serif text-xl lg:text-2xl xl:text-3xl tracking-wide text-cream">
              Toni <span className="text-gold-light italic">Residence</span>
            </span>
            <span className="hidden xl:block font-sans text-[10px] tracking-widest2 uppercase text-cream/50 mt-1">
              Novogradnja &mdash; Prizemlje + 3 kata
            </span>
          </span>
        </a>

        <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-sm tracking-wide text-cream/80 hover:text-gold-light transition-colors duration-300 whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#kontakt" className="hidden xl:inline-flex btn-primary !py-3 !px-6 text-xs whitespace-nowrap">
          Zakažite razgled
        </a>

        <button
          aria-label="Izbornik"
          onClick={() => setOpen((v) => !v)}
          className="xl:hidden relative w-9 h-9 flex flex-col justify-center items-center gap-[6px]"
        >
          <span
            className={`block h-[1.5px] w-7 bg-cream transition-transform duration-300 ${
              open ? "translate-y-[7.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-7 bg-cream transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[1.5px] w-7 bg-cream transition-transform duration-300 ${
              open ? "-translate-y-[7.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`xl:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 pb-8 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-sans text-base py-3 border-b border-cream/10 text-cream/85"
            >
              {l.label}
            </a>
          ))}
          <a href="#kontakt" onClick={() => setOpen(false)} className="btn-primary mt-5 w-full">
            Zakažite razgled
          </a>
        </nav>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StanHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-[0_4px_30px_-10px_rgba(0,0,0,0.4)]"
          : "bg-gradient-to-b from-navy-950/80 to-transparent"
      }`}
    >
      <div className="container-px max-w-8xl mx-auto flex items-center justify-between h-20 lg:h-24">
        <Link href="/" className="flex items-center gap-3 group">
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
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/#stanovi"
            className="font-sans text-sm text-cream/70 hover:text-gold-light transition-colors whitespace-nowrap hidden sm:inline"
          >
            ← Svi stanovi
          </Link>
          <a
            href="#kontakt"
            className="btn-primary !py-3 !px-5 sm:!px-6 text-xs whitespace-nowrap"
          >
            Zakažite razgled
          </a>
        </div>
      </div>
    </header>
  );
}

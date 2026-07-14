"use client";

import Image from "next/image";
import { useState } from "react";
import { exteriorImages, interiorImages } from "@/app/data/building";
import Reveal from "./Reveal";

type Tab = "eksterijer" | "interijer";

export default function Gallery() {
  const [tab, setTab] = useState<Tab>("eksterijer");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const images = tab === "eksterijer" ? exteriorImages : interiorImages;

  return (
    <section id="galerija" className="relative bg-navy-950 py-24 lg:py-32">
      <div className="container-px max-w-8xl mx-auto">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <p className="section-heading-eyebrow text-gold-light">Galerija</p>
            <h2 className="section-heading text-cream">
              Pogled na <span className="italic text-gold-light">zgradu i zajedničke prostore</span>
            </h2>
          </div>

          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => setTab("eksterijer")}
              className={`font-sans text-sm tracking-wide px-6 py-3 border transition-colors duration-300 ${
                tab === "eksterijer"
                  ? "bg-gold-gradient text-navy-950 border-transparent"
                  : "border-cream/25 text-cream/70 hover:border-gold-light/60 hover:text-gold-light"
              }`}
            >
              Eksterijer
            </button>
            <button
              onClick={() => setTab("interijer")}
              className={`font-sans text-sm tracking-wide px-6 py-3 border transition-colors duration-300 ${
                tab === "interijer"
                  ? "bg-gold-gradient text-navy-950 border-transparent"
                  : "border-cream/25 text-cream/70 hover:border-gold-light/60 hover:text-gold-light"
              }`}
            >
              Stubište i hodnik
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-14 auto-rows-[220px]">
          {images.map((src, i) => (
            <Reveal
              key={src}
              delay={(i % 4) * 80}
              className={`${i === 0 ? "col-span-2 row-span-2" : ""} h-full`}
            >
              <button
                onClick={() => setLightbox(src)}
                className="group relative block h-full w-full overflow-hidden rounded-sm"
              >
                <Image
                  src={src}
                  alt={`${tab === "eksterijer" ? "Vanjski izgled" : "Stubište i hodnik"} ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/20 transition-colors duration-500" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-navy-950/95 flex items-center justify-center p-6 lg:p-16"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream/70 hover:text-gold-light font-sans text-sm tracking-widest2 uppercase"
            onClick={() => setLightbox(null)}
          >
            Zatvori ✕
          </button>
          <div className="relative w-full h-full max-w-5xl">
            <Image src={lightbox} alt="" fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}

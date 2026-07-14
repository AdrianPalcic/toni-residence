"use client";

import Image from "next/image";
import { useState } from "react";
import { apartmentTypes } from "@/app/data/building";
import Reveal from "./Reveal";

export default function ApartmentTypes() {
  const [activeId, setActiveId] = useState(apartmentTypes[0].id);
  const [imgIndex, setImgIndex] = useState(0);
  const [zoom, setZoom] = useState<string | null>(null);
  const [showSchema, setShowSchema] = useState(false);
  const active = apartmentTypes.find((t) => t.id === activeId)!;
  const activeImage = active.floorplans[imgIndex] ?? active.floorplans[0];

  function selectType(id: string) {
    setActiveId(id);
    setImgIndex(0);
    setShowSchema(false);
  }

  return (
    <section id="stanovi" className="relative bg-cream py-24 lg:py-32">
      <div className="container-px max-w-8xl mx-auto">
        <Reveal className="max-w-2xl">
          <p className="section-heading-eyebrow">Tipovi stanova</p>
          <h2 className="section-heading">
            Pet tipova stanova na <span className="italic text-gold-dark">svakom katu</span>
          </h2>
          <p className="font-sans text-navy-800/75 leading-relaxed mt-5">
            Raspored kata s pet stanova (Tip A&ndash;E) ponavlja se identično
            na 1., 2. i 3. katu zgrade. Odaberite tip stana kako biste vidjeli
            detaljan tlocrt i karakteristike.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 mt-14 items-start">
          <Reveal>
            <button
              onClick={() => setZoom(showSchema ? "/images/tipovi-stanova-objasnjenje.jpeg" : activeImage)}
              className="relative block w-full aspect-[16/10] rounded-sm overflow-hidden bg-stone-100 shadow-xl group"
            >
              <Image
                key={showSchema ? "schema" : activeImage}
                src={showSchema ? "/images/tipovi-stanova-objasnjenje.jpeg" : activeImage}
                alt={showSchema ? "Raspored tipova stanova na katu" : `Tlocrt - ${active.name}`}
                fill
                sizes="(min-width: 1024px) 55vw, 90vw"
                className="object-cover transition-opacity duration-500"
              />
              <span className="absolute bottom-4 right-4 bg-navy-950/80 text-cream text-xs font-sans px-3 py-2 tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                Kliknite za uvećanje
              </span>
            </button>

            <div className="flex items-center justify-between mt-3 flex-wrap gap-3">
              {active.floorplans.length > 1 ? (
                <div className="flex gap-2">
                  {active.floorplans.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => {
                        setImgIndex(i);
                        setShowSchema(false);
                      }}
                      className={`relative w-16 h-12 rounded-sm overflow-hidden border-2 transition-colors ${
                        !showSchema && imgIndex === i ? "border-gold-dark" : "border-transparent"
                      }`}
                    >
                      <Image src={src} alt={`${active.name} - varijanta ${i + 1}`} fill sizes="64px" className="object-cover" />
                    </button>
                  ))}
                </div>
              ) : (
                <span />
              )}

              <button
                onClick={() => setShowSchema((v) => !v)}
                className="font-sans text-xs text-navy-800/60 border-b border-navy-800/30 hover:border-gold-dark hover:text-gold-dark pb-0.5 transition-colors whitespace-nowrap"
              >
                {showSchema ? `← Natrag na tlocrt ${active.id}` : "Prikaži poziciju na katu"}
              </button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex flex-wrap gap-2">
              {apartmentTypes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => selectType(t.id)}
                  className={`font-serif text-lg w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${
                    activeId === t.id
                      ? "bg-navy-950 text-gold-light border-navy-950"
                      : "border-navy-950/20 text-navy-950/70 hover:border-gold-dark hover:text-gold-dark"
                  }`}
                >
                  {t.id}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex items-baseline gap-3 flex-wrap">
                <h3 className="font-serif text-3xl text-navy-950">{active.name}</h3>
                <span className="font-sans text-sm text-gold-dark tracking-wide">
                  {active.rooms}
                </span>
                <span className="font-sans text-sm text-navy-800/50">{active.areaApprox}</span>
              </div>
              <p className="font-sans text-navy-800/75 leading-relaxed mt-4">
                {active.description}
              </p>

              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                {active.highlights.map((h) => (
                  <li
                    key={h}
                    className="font-sans text-sm text-navy-800/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href="#tlocrti"
                className="inline-flex mt-8 font-sans text-sm tracking-wide text-navy-950 border-b border-gold-dark pb-1 hover:text-gold-dark transition-colors"
              >
                Pogledajte dostupnost stana →
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {zoom && (
        <div
          className="fixed inset-0 z-[100] bg-navy-950/95 flex items-center justify-center p-6 lg:p-16"
          onClick={() => setZoom(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream/70 hover:text-gold-light font-sans text-sm tracking-widest2 uppercase"
            onClick={() => setZoom(null)}
          >
            Zatvori ✕
          </button>
          <div className="relative w-full h-full max-w-4xl">
            <Image src={zoom} alt="" fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}

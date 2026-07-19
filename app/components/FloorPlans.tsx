"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { floors, apartmentTypes } from "@/app/data/building";
import type { UnitStatus } from "@/app/data/building";
import Reveal from "./Reveal";

const statusLabel: Record<UnitStatus, string> = {
  available: "Slobodno",
  reserved: "Rezervirano",
  sold: "Prodano",
};

const statusClasses: Record<UnitStatus, string> = {
  available: "bg-emerald-600/15 text-emerald-800 border-emerald-600/30",
  reserved: "bg-amber-500/15 text-amber-800 border-amber-500/30",
  sold: "bg-navy-950/10 text-navy-950/50 border-navy-950/15",
};

export default function FloorPlans() {
  const [floorId, setFloorId] = useState(floors[1].id);
  const [zoom, setZoom] = useState<string | null>(null);
  const floor = floors.find((f) => f.id === floorId)!;

  return (
    <section id="tlocrti" className="relative bg-stone-100 py-24 lg:py-32">
      <div className="container-px max-w-8xl mx-auto">
        <Reveal className="max-w-2xl">
          <p className="section-heading-eyebrow">Tlocrti i dostupnost</p>
          <h2 className="section-heading">
            Odaberite <span className="italic text-gold-dark">kat zgrade</span>
          </h2>
        </Reveal>

        <Reveal delay={100} className="flex flex-wrap gap-2 mt-10">
          {floors.map((f) => (
            <button
              key={f.id}
              onClick={() => setFloorId(f.id)}
              className={`font-sans text-sm tracking-wide px-6 py-3.5 border transition-colors duration-300 ${
                floorId === f.id
                  ? "bg-navy-950 text-cream border-navy-950"
                  : "border-navy-950/20 text-navy-950/70 hover:border-navy-950/50"
              }`}
            >
              {f.name}
            </button>
          ))}
        </Reveal>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 mt-12 items-start">
          <Reveal className="order-2 lg:order-1">
            <button
              onClick={() => setZoom(floor.planImage)}
              className="relative block w-full aspect-[16/11] rounded-sm overflow-hidden bg-white shadow-xl group"
            >
              <Image
                src={floor.planImage}
                alt={`Tlocrt - ${floor.name}`}
                fill
                sizes="(min-width: 1024px) 55vw, 90vw"
                className="object-cover"
              />
              <span className="absolute bottom-4 right-4 bg-navy-950/80 text-cream text-xs font-sans px-3 py-2 tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                Kliknite za uvećanje
              </span>
            </button>
            <p className="font-sans text-sm text-navy-800/70 leading-relaxed mt-5">
              {floor.description}
            </p>
            <p className="font-sans text-xs text-navy-800/45 leading-relaxed mt-4 italic">
              * Materijali i oprema prikazani na tlocrtima su prijedlog završne
              izvedbe. Moguće je dogovoriti individualna rješenja i izbor
              materijala prema željama kupca.
            </p>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <h3 className="font-serif text-2xl text-navy-950 mb-5">
              Stanovi &mdash; {floor.name}
            </h3>
            <div className="flex flex-col gap-3">
              {floor.units.map((unit, idx) => {
                const type = apartmentTypes.find((t) => t.id === unit.typeId)!;
                return (
                  <div
                    key={`${unit.typeId}-${idx}`}
                    className="flex items-center justify-between gap-4 bg-white border border-navy-950/10 px-5 py-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-xl w-10 h-10 rounded-full bg-cream flex items-center justify-center text-navy-950">
                        {type.id}
                      </span>
                      <div>
                        <p className="font-sans text-sm font-medium text-navy-950">
                          {type.name} &middot; {type.rooms}
                        </p>
                        <p className="font-sans text-xs text-navy-800/50">{type.areaApprox}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className={`font-sans text-xs px-3 py-1.5 rounded-full border whitespace-nowrap ${statusClasses[unit.status]}`}
                      >
                        {statusLabel[unit.status]}
                      </span>
                      <Link
                        href={`/stanovi/${type.id.toLowerCase()}`}
                        className="font-sans text-xs text-gold-dark border-b border-gold-dark/60 hover:border-gold-dark pb-0.5 whitespace-nowrap transition-colors"
                      >
                        Detalji →
                      </Link>
                    </div>
                  </div>
                );
              })}
              {floor.extra && (
                <div className="flex items-center justify-between gap-4 bg-navy-950 px-5 py-4">
                  <p className="font-sans text-sm text-cream/85">Dodatno na katu</p>
                  <span className="font-sans text-xs px-3 py-1.5 rounded-full border border-gold-light/40 text-gold-light">
                    {floor.extra}
                  </span>
                </div>
              )}
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
            <Image src={zoom} alt="Tlocrt" fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}

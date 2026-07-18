"use client";

import Image from "next/image";
import { useState } from "react";

export default function StanFloorPlan({
  floorplans,
  aptName,
}: {
  floorplans: string[];
  aptName: string;
}) {
  const [imgIndex, setImgIndex] = useState(0);
  const [showSchema, setShowSchema] = useState(false);
  const [zoom, setZoom] = useState<string | null>(null);

  const activeImage = showSchema
    ? "/images/tipovi-stanova-objasnjenje.jpeg"
    : (floorplans[imgIndex] ?? floorplans[0]);

  return (
    <>
      <button
        onClick={() => setZoom(activeImage)}
        className="relative block w-full aspect-[16/10] rounded-sm overflow-hidden bg-stone-100 shadow-xl group"
      >
        <Image
          key={activeImage}
          src={activeImage}
          alt={showSchema ? "Raspored tipova stanova na katu" : `Tlocrt – ${aptName}`}
          fill
          sizes="(min-width: 1024px) 55vw, 90vw"
          className="object-cover transition-opacity duration-500"
        />
        <span className="absolute bottom-4 right-4 bg-navy-950/80 text-cream text-xs font-sans px-3 py-2 tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
          Kliknite za uvećanje
        </span>
      </button>

      <div className="flex items-center justify-between mt-3 flex-wrap gap-3">
        {floorplans.length > 1 ? (
          <div className="flex gap-2">
            {floorplans.map((src, i) => (
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
                <Image
                  src={src}
                  alt={`${aptName} – varijanta ${i + 1}`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
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
          {showSchema ? "← Natrag na tlocrt" : "Prikaži poziciju na katu"}
        </button>
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
    </>
  );
}

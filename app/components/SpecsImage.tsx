"use client";

import Image from "next/image";
import { useState } from "react";

export default function SpecsImage({ src, aptName }: { src: string; aptName: string }) {
  const [zoom, setZoom] = useState(false);

  return (
    <>
      <button
        onClick={() => setZoom(true)}
        className="relative block w-full overflow-hidden rounded-sm shadow-xl group bg-stone-100"
      >
        <Image
          src={src}
          alt={`Specifikacije – ${aptName}`}
          width={1200}
          height={900}
          className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
        />
        <span className="absolute bottom-4 right-4 bg-navy-950/80 text-cream text-xs font-sans px-3 py-2 tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
          Kliknite za uvećanje
        </span>
      </button>

      {zoom && (
        <div
          className="fixed inset-0 z-[100] bg-navy-950/95 flex items-center justify-center p-4 lg:p-12"
          onClick={() => setZoom(false)}
        >
          <button
            className="absolute top-6 right-6 text-cream/70 hover:text-gold-light font-sans text-sm tracking-widest2 uppercase"
            onClick={() => setZoom(false)}
          >
            Zatvori ✕
          </button>
          <div className="relative w-full h-full max-w-5xl">
            <Image
              src={src}
              alt={`Specifikacije – ${aptName}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

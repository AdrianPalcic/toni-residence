"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const INITIAL_COUNT = 8;

export default function StanGallery({
  images,
  aptName,
}: {
  images: string[];
  aptName: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const hasMore = images.length > INITIAL_COUNT;
  const visibleImages = expanded ? images : images.slice(0, INITIAL_COUNT);

  useEffect(() => {
    if (activeIndex === null) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, images.length]);

  if (images.length === 0) return null;

  return (
    <section className="bg-stone-100 py-24 lg:py-32">
      <div className="container-px max-w-8xl mx-auto">
        <Reveal className="max-w-2xl mb-14">
          <p className="section-heading-eyebrow">Galerija</p>
          <h2 className="section-heading">
            Fotografije <span className="italic text-gold-dark">stana {aptName}</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {visibleImages.map((src, i) => {
            const isLastVisible = !expanded && hasMore && i === visibleImages.length - 1;
            return (
              <Reveal key={src} delay={(i % 8) * 60}>
                <button
                  onClick={() => (isLastVisible ? setExpanded(true) : setActiveIndex(i))}
                  className="group relative block aspect-[4/3] w-full overflow-hidden rounded-sm"
                >
                  <Image
                    src={src}
                    alt={`${aptName} — fotografija ${i + 1}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 transition-colors duration-500 ${
                      isLastVisible
                        ? "bg-navy-950/60 group-hover:bg-navy-950/70 flex items-center justify-center"
                        : "bg-navy-950/0 group-hover:bg-navy-950/20"
                    }`}
                  >
                    {isLastVisible && (
                      <span className="font-sans text-cream text-center">
                        <span className="block text-2xl sm:text-3xl font-serif text-gold-light">
                          +{images.length - visibleImages.length + 1}
                        </span>
                        <span className="block text-xs tracking-widest2 uppercase mt-1">
                          Prikaži sve
                        </span>
                      </span>
                    )}
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

        {hasMore && expanded && (
          <Reveal className="mt-8 flex justify-center">
            <button
              onClick={() => setExpanded(false)}
              className="font-sans text-sm tracking-widest2 uppercase text-navy-800/60 hover:text-gold-dark border-b border-navy-800/20 hover:border-gold-dark pb-1 transition-colors"
            >
              Prikaži manje ↑
            </button>
          </Reveal>
        )}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-navy-950/95 flex items-center justify-center p-6 lg:p-16"
          onClick={() => setActiveIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream/70 hover:text-gold-light font-sans text-sm tracking-widest2 uppercase"
            onClick={() => setActiveIndex(null)}
          >
            Zatvori ✕
          </button>

          <p className="absolute top-6 left-6 text-cream/50 font-sans text-sm tracking-widest2">
            {activeIndex + 1} / {images.length}
          </p>

          {images.length > 1 && (
            <>
              <button
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-cream/70 hover:text-gold-light p-3"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
                }}
                aria-label="Prethodna fotografija"
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-cream/70 hover:text-gold-light p-3"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));
                }}
                aria-label="Sljedeća fotografija"
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}

          <div className="relative w-full h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[activeIndex]}
              alt={`${aptName} — fotografija ${activeIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}

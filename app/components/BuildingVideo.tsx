"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function BuildingVideo() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    function onLoadedMetadata() {
      video!.currentTime = 5;
    }

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    return () => video.removeEventListener("loadedmetadata", onLoadedMetadata);
  }, []);

  function handlePlayClick() {
    setPlaying(true);
    // Must call play() synchronously within the click handler — the video is
    // already mounted (just hidden) so the ref exists here. Calling it later,
    // e.g. from the async 'loadedmetadata' handler, loses the user-gesture
    // association and browsers silently block autoplay-with-sound.
    videoRef.current?.play().catch(() => {});
  }

  return (
    <section className="relative bg-navy-950 py-24 lg:py-32">
      <div className="container-px max-w-8xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="section-heading-eyebrow text-gold-light">Video zgrade</p>
          <h2 className="section-heading !text-cream">
            Pogledajte <span className="italic text-gold-light">Svibje Residence uživo</span>
          </h2>
        </div>

        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm aspect-[9/16] rounded-sm overflow-hidden shadow-2xl">
          <Image
            src="/images/vanjski-1.jpeg"
            alt="Svibje Residence — video zgrade"
            fill
            sizes="(min-width: 640px) 384px, 320px"
            className={`object-cover transition-opacity duration-300 ${playing ? "opacity-0" : "opacity-100"}`}
          />

          <video
            ref={videoRef}
            src="/videos/residence-video.mp4"
            preload="none"
            playsInline
            controls
            className={`absolute inset-0 h-full w-full object-cover bg-navy-950 ${
              playing ? "" : "invisible pointer-events-none"
            }`}
          />

          {!playing && (
            <>
              <div className="absolute inset-0 bg-navy-950/45" />
              <button
                type="button"
                onClick={handlePlayClick}
                aria-label="Pokreni video zgrade"
                className="group absolute inset-0 flex items-center justify-center"
              >
                <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-cream/15 backdrop-blur-sm border border-cream/40 transition-all duration-300 group-hover:bg-gold-gradient group-hover:border-transparent group-hover:scale-110">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 sm:h-7 sm:w-7 translate-x-0.5 text-cream transition-colors duration-300 group-hover:text-navy-950"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

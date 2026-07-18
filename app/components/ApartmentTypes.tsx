import Image from "next/image";
import Link from "next/link";
import { apartmentTypes, floors } from "@/app/data/building";
import Reveal from "./Reveal";

function availabilityForType(typeId: string) {
  let available = 0;
  let total = 0;
  for (const floor of floors) {
    const unit = floor.units.find((u) => u.typeId === typeId);
    if (unit) {
      total++;
      if (unit.status === "available") available++;
    }
  }
  return { available, total };
}

export default function ApartmentTypes() {
  return (
    <section id="stanovi" className="relative bg-cream py-24 lg:py-32">
      <div className="container-px max-w-8xl mx-auto">
        <Reveal className="max-w-2xl mb-14">
          <p className="section-heading-eyebrow">Tipovi stanova</p>
          <h2 className="section-heading">
            Pet tipova stanova na{" "}
            <span className="italic text-gold-dark">svakom katu</span>
          </h2>
          <p className="font-sans text-navy-800/75 leading-relaxed mt-5">
            Odaberite tip koji vam odgovara i saznajte sve detalje — tlocrt,
            karakteristike, dostupnost i specifikacije gradnje.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {apartmentTypes.map((apt, i) => {
            const { available } = availabilityForType(apt.id);
            const soldOut = available === 0;

            return (
              <Reveal key={apt.id} delay={i * 70}>
                <Link
                  href={`/stanovi/${apt.id.toLowerCase()}`}
                  className="group relative flex flex-col overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={apt.floorplans[0]}
                      alt={`Tlocrt – ${apt.name}`}
                      fill
                      sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-transparent" />

                    {/* Type badge */}
                    <div className="absolute top-4 left-4">
                      <span className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center font-serif text-xl text-navy-950 font-semibold shadow-md">
                        {apt.id}
                      </span>
                    </div>

                    {/* Availability badge */}
                    <div className="absolute top-4 right-4">
                      {soldOut ? (
                        <span className="font-sans text-[11px] bg-navy-950/70 text-stone-400 px-2.5 py-1 rounded-full backdrop-blur-sm">
                          Prodano
                        </span>
                      ) : (
                        <span className="font-sans text-[11px] bg-emerald-500/90 text-white px-2.5 py-1 rounded-full backdrop-blur-sm font-medium">
                          {available}{" "}
                          {available === 1 ? "slobodan" : "slobodna"}
                        </span>
                      )}
                    </div>

                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <p className="font-serif text-lg sm:text-xl text-cream leading-snug">
                        {apt.name}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-sans text-xs text-cream/65">
                          {apt.rooms}
                        </span>
                        <span className="w-0.5 h-0.5 rounded-full bg-cream/40" />
                        <span className="font-sans text-xs text-cream/65">
                          {apt.areaApprox}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1 mt-3 font-sans text-xs tracking-wide text-gold-light translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        Detalji stana →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

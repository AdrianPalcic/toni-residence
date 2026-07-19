import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { apartmentTypes, getAvailabilityForType, buildingFeatures } from "@/app/data/building";
import Header from "@/app/components/Header";
import StanFooter from "@/app/components/StanFooter";
import StanContact from "@/app/components/StanContact";
import StanFloorPlan from "@/app/components/StanFloorPlan";
import Reveal from "@/app/components/Reveal";

export function generateStaticParams() {
  return apartmentTypes.map((t) => ({ tip: t.id.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: { tip: string };
}): Promise<Metadata> {
  const apt = apartmentTypes.find((t) => t.id === params.tip.toUpperCase());
  if (!apt) return {};
  return {
    title: `${apt.name} – ${apt.rooms} ${apt.areaApprox} | Svibje Residence`,
    description: apt.description,
  };
}

function StatusBadge({ status }: { status: string }) {
  if (status === "available")
    return (
      <span className="font-sans text-xs bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full font-medium">
        Slobodno
      </span>
    );
  if (status === "reserved")
    return (
      <span className="font-sans text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-medium">
        Rezervirano
      </span>
    );
  return (
    <span className="font-sans text-xs bg-stone-100 text-stone-500 px-2.5 py-1 rounded-full font-medium">
      Prodano
    </span>
  );
}

export default async function StanPage({ params }: { params: { tip: string } }) {
  const apt = apartmentTypes.find((t) => t.id === params.tip.toUpperCase());
  if (!apt) notFound();

  const availability = await getAvailabilityForType(apt.id);

  const availableCount = availability.filter(
    (x) => x.unit.status === "available"
  ).length;

  const otherTypes = apartmentTypes.filter((t) => t.id !== apt.id);

  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* ── Hero ── */}
      <section className="relative h-[85vh] min-h-[560px] flex items-end">
        <Image
          src={apt.heroImage}
          alt={`Svibje Residence – ${apt.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/20" />

        <div className="relative container-px max-w-8xl mx-auto pb-16 lg:pb-24 w-full">
          <div className="flex items-center gap-4 mb-5">
            <span className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center font-serif text-3xl text-navy-950 font-semibold shadow-lg">
              {apt.id}
            </span>
            <span className="font-sans text-xs tracking-widest2 uppercase text-gold-light">
              Svibje Residence · Tip stana
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream leading-tight">
            {apt.name} &mdash;{" "}
            <span className="italic text-gold-light">{apt.rooms}</span>
          </h1>

          <p className="font-sans text-cream/70 mt-3 text-base sm:text-lg">
            {apt.areaApprox}
            {availableCount > 0 && (
              <>
                &ensp;·&ensp;
                <span className="text-gold-light font-medium">
                  {availableCount}{" "}
                  {availableCount === 1 ? "stan slobodan" : "stana slobodna"}
                </span>
              </>
            )}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#tlocrt" className="btn-primary">
              Pogledajte tlocrt ↓
            </a>
            <a href="#kontakt" className="btn-outline">
              Zakažite razgled
            </a>
          </div>
        </div>
      </section>

      {/* ── Quick stats strip ── */}
      <section className="bg-navy-900 py-6 border-y border-cream/10">
        <div className="container-px max-w-8xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { label: "Broj soba", value: apt.rooms },
            { label: "Površina", value: apt.areaApprox },
            {
              label: "Slobodnih stanova",
              value: availableCount > 0 ? `${availableCount} / ${availability.length}` : "Na upitu",
            },
            { label: "Status", value: "U izgradnji" },
          ].map(({ label, value }) => (
            <div key={label} className="text-center sm:text-left">
              <p className="font-sans text-xs tracking-widest2 uppercase text-cream/40">
                {label}
              </p>
              <p className="font-serif text-xl sm:text-2xl text-cream mt-1">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Floor plan + description ── */}
      <section id="tlocrt" className="bg-cream py-24 lg:py-32 scroll-mt-20">
        <div className="container-px max-w-8xl mx-auto">
          <Reveal className="max-w-2xl mb-14">
            <p className="section-heading-eyebrow">Tlocrt stana</p>
            <h2 className="section-heading">
              Detaljan prikaz
            </h2>
            <p className="font-sans text-navy-800/75 leading-relaxed mt-5">
              {apt.description}
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <Reveal>
              <StanFloorPlan floorplans={apt.floorplans} aptName={apt.name} />
            </Reveal>

            <Reveal delay={120}>
              <p className="section-heading-eyebrow">Karakteristike</p>
              <h3 className="font-serif text-2xl sm:text-3xl text-navy-950 mt-3">
                Što uključuje ovaj stan?
              </h3>

              <ul className="mt-8 flex flex-col gap-4">
                {apt.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-gold-gradient flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-2.5 h-2.5 text-navy-950"
                        viewBox="0 0 10 8"
                        fill="none"
                      >
                        <path
                          d="M1 4l3 3 5-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-sans text-navy-800/85 leading-snug">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 bg-navy-950/5 border border-navy-950/10 rounded-sm">
                <p className="font-sans text-xs tracking-widest2 uppercase text-navy-800/50 mb-2">
                  Napomena
                </p>
                <p className="font-sans text-sm text-navy-800/70 leading-relaxed">
                  Svi stanovi mogu se vidjeti uživo. Kontaktirajte nas za termin
                  razgleda i detaljne informacije o cijeni i uvjetima kupnje.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Gallery strip ── */}
      <section className="bg-stone-100 py-6">
        <div className="container-px max-w-8xl mx-auto grid grid-cols-3 gap-3 sm:gap-4">
          {apt.galleryImages.map((src, i) => (
            <div
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-sm"
            >
              <Image
                src={src}
                alt={`Svibje Residence – fotografija ${i + 1}`}
                fill
                sizes="(min-width: 1024px) 30vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Specifikacije ── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="container-px max-w-8xl mx-auto">
          <Reveal className="max-w-2xl mb-12">
            <p className="section-heading-eyebrow">Specifikacije</p>
            <h2 className="section-heading">
              Tehnički list <span className="italic text-gold-dark">{apt.name}</span>
            </h2>
            <p className="font-sans text-navy-800/70 leading-relaxed mt-4">
              Točne neto kvadrature svih prostorija bez koeficijenata.
            </p>
          </Reveal>

          <Reveal className="max-w-lg">
            <div className="border border-navy-950/10 overflow-hidden">
              <div className="bg-navy-950 px-4 sm:px-6 py-4">
                <p className="font-sans text-xs tracking-widest2 uppercase text-gold-light">
                  {apt.name} — površine prostorija (neto)
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[380px]">
                  <thead>
                    <tr className="border-b border-navy-950/10 bg-stone-50">
                      <th className="text-left font-sans text-xs tracking-widest2 uppercase text-navy-800/50 px-4 sm:px-6 py-3">
                        Prostorija
                      </th>
                      <th className="text-right font-sans text-xs tracking-widest2 uppercase text-navy-800/50 px-4 sm:px-6 py-3">
                        Površina
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {apt.roomSpecs.map((spec, i) => (
                      <tr
                        key={i}
                        className={`border-b border-navy-950/8 ${spec.isOutdoor ? "bg-gold-light/10" : "bg-white"}`}
                      >
                        <td className="font-sans text-sm text-navy-800/85 px-4 sm:px-6 py-3.5">
                          {spec.isOutdoor && (
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-dark mr-2 mb-0.5 align-middle" />
                          )}
                          {spec.room}
                        </td>
                        <td className="font-sans text-sm text-navy-950 font-medium text-right px-4 sm:px-6 py-3.5 whitespace-nowrap">
                          {spec.area}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-navy-950">
                      <td className="font-sans text-sm font-semibold text-cream px-4 sm:px-6 py-4">
                        Ukupno
                      </td>
                      <td className="font-sans text-sm font-semibold text-gold-light text-right px-4 sm:px-6 py-4 whitespace-nowrap">
                        {apt.areaTotal}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <p className="font-sans text-xs text-navy-800/40 italic px-4 sm:px-6 py-3 bg-stone-50 border-t border-navy-950/8">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-dark mr-1.5 mb-0.5 align-middle" />
                Označeno = natkriveni vanjski prostor (terasa/balkon)
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Building quality ── */}
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="container-px max-w-8xl mx-auto">
          <Reveal className="max-w-2xl mb-14">
            <p className="section-heading-eyebrow text-gold-light">
              Kvaliteta gradnje
            </p>
            <h2 className="section-heading !text-gold-light">
              Iznadprosječna kvaliteta
            </h2>
            <p className="font-sans text-cream/65 leading-relaxed mt-5">
              Svaki detalj Svibje Residencea odražava predanost kvaliteti —
              od konstrukcije do završnih radova, koristimo isključivo provjerene
              materijale i brendove renomiranih proizvođača.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0">
              {buildingFeatures.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 py-4 border-b border-cream/10"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2" />
                  <span className="font-sans text-sm text-cream/80 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160} className="mt-14">
            <div className="bg-gold-gradient p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-sm">
              <div>
                <p className="font-sans text-xs tracking-widest2 uppercase text-navy-950/60">
                  Svibje Residence
                </p>
                <p className="font-serif text-2xl sm:text-3xl text-navy-950 mt-2">
                  U izgradnji — rezervirajte svoj stan na vrijeme
                </p>
              </div>
              <a href="#kontakt" className="btn-outline-dark whitespace-nowrap shrink-0">
                Zakažite razgled →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Availability ── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="container-px max-w-8xl mx-auto">
          <Reveal className="max-w-2xl mb-14">
            <p className="section-heading-eyebrow">Dostupnost</p>
            <h2 className="section-heading">
              {apt.name} po{" "}
              <span className="italic text-gold-dark">katovima</span>
            </h2>
            <p className="font-sans text-navy-800/75 leading-relaxed mt-5">
              Isti tip stana dostupan je na više katova. Odaberite preferirani
              kat i kontaktirajte nas za rezervaciju.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {availability.map(({ floor, unit }) => {
                const isAvailable = unit.status === "available";
                return (
                  <div
                    key={floor.id}
                    className={`p-6 border rounded-sm transition-shadow ${
                      isAvailable
                        ? "border-gold-dark/30 bg-white shadow-sm hover:shadow-md"
                        : "border-stone-200 bg-stone-50 opacity-60"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-4">
                      <p className="font-serif text-xl text-navy-950">
                        {floor.name}
                      </p>
                      <StatusBadge status={unit.status} />
                    </div>
                    <p className="font-sans text-sm text-navy-800/60 mb-4">
                      {apt.rooms} · {apt.areaApprox}
                    </p>
                    {isAvailable && (
                      <a
                        href="#kontakt"
                        className="font-sans text-xs text-gold-dark border-b border-gold-dark/40 hover:border-gold-dark pb-0.5 transition-colors"
                      >
                        Zainteresirani ste? →
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </Reveal>

          {availableCount > 0 && (
            <Reveal delay={120} className="mt-8">
              <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 px-6 py-4 rounded-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <p className="font-sans text-sm text-emerald-800">
                  <strong>{availableCount}</strong>{" "}
                  {availableCount === 1
                    ? "stan ovog tipa je slobodan"
                    : "stana ovog tipa su slobodna"}{" "}
                  — ne čekajte previše
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── Other apartment types ── */}
      <section className="bg-stone-100 py-20 lg:py-28 border-y border-stone-200">
        <div className="container-px max-w-8xl mx-auto">
          <Reveal className="mb-12">
            <p className="section-heading-eyebrow">Ostali tipovi</p>
            <h2 className="section-heading">
              Pogledajte i{" "}
              <span className="italic text-gold-dark">druge stanove</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {otherTypes.map((t) => (
              <Link
                key={t.id}
                href={`/stanovi/${t.id.toLowerCase()}`}
                className="group relative aspect-[3/4] overflow-hidden rounded-sm shadow-sm hover:shadow-lg transition-shadow"
              >
                <Image
                  src={t.heroImage}
                  alt={t.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <span className="font-serif text-2xl text-gold-light">
                    {t.id}
                  </span>
                  <p className="font-sans text-xs text-cream/75 mt-1">
                    {t.rooms} · {t.areaApprox}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="kontakt" className="bg-cream py-24 lg:py-32 scroll-mt-20">
        <div className="container-px max-w-8xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <p className="section-heading-eyebrow">Kontaktirajte nas</p>
            <h2 className="section-heading">
              Zainteresirani ste za{" "}
              <span className="italic text-gold-dark">{apt.name}?</span>
            </h2>
            <p className="font-sans text-navy-800/75 leading-relaxed mt-5">
              Ispunite obrazac ili nas kontaktirajte direktno — odgovaramo u
              najkraćem mogućem roku i uredimo termin razgleda prema vašim
              željama.
            </p>

            <dl className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <dt className="font-sans text-xs tracking-widest2 uppercase text-navy-800/45">
                  Telefon
                </dt>
                <dd className="mt-1">
                  <a href="tel:+385997530159" className="font-sans text-navy-950 hover:text-gold-dark transition-colors">
                    +385 99 7530 159
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-sans text-xs tracking-widest2 uppercase text-navy-800/45">
                  E-mail
                </dt>
                <dd className="mt-1">
                  <a href="mailto:ac@acmiskovic.hr" className="font-sans text-navy-950 hover:text-gold-dark transition-colors">
                    ac@acmiskovic.hr
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-sans text-xs tracking-widest2 uppercase text-navy-800/45">
                  Adresa
                </dt>
                <dd className="font-sans text-navy-950 mt-1">Savska ul. 29, 10361 Trstenik Nartski</dd>
              </div>
              <div>
                <dt className="font-sans text-xs tracking-widest2 uppercase text-navy-800/45">
                  Investitor
                </dt>
                <dd className="font-sans text-navy-950 mt-1">AC Mišković d.o.o.</dd>
              </div>
              <div>
                <dt className="font-sans text-xs tracking-widest2 uppercase text-navy-800/45">
                  Status
                </dt>
                <dd className="font-sans text-navy-950 mt-1">U izgradnji</dd>
              </div>
            </dl>

          </Reveal>

          <Reveal delay={120}>
            <div className="bg-white p-8 sm:p-10 shadow-sm border border-stone-200">
              <p className="section-heading-eyebrow">Upit za stan</p>
              <h3 className="font-serif text-2xl sm:text-3xl text-navy-950 mt-3">
                Pošaljite{" "}
                <span className="italic text-gold-dark">upit</span>
              </h3>
              <p className="font-sans text-sm text-navy-800/65 mt-3 mb-8">
                Javit ćemo vam se u najkraćem mogućem roku.
              </p>
              <StanContact aptType={apt.name} />
            </div>
          </Reveal>
        </div>
      </section>

      <StanFooter />
    </main>
  );
}

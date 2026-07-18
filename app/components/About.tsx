import Image from "next/image";
import Reveal from "./Reveal";

const features = [
  {
    title: "Prizemlje + 3 kata",
    text: "Kompaktna i mirna zgrada bez nepotrebne visine — svaki kat s po pet stanova.",
  },
  {
    title: "17 spremišta",
    text: "Svaki stan raspolaže vlastitim spremištem smještenim u prizemlju zgrade.",
  },
  {
    title: "5 tipova stanova",
    text: "Od kompaktnih jednosobnih do prostranih trosobnih stanova — tip za svaku potrebu.",
  },
  {
    title: "Lift i uređeno stubište",
    text: "Reprezentativno stubište i hodnici, izvedeni u toplim, prirodnim materijalima.",
  },
];

export default function About() {
  return (
    <section id="o-projektu" className="relative bg-cream py-24 lg:py-32">
      <div className="container-px max-w-8xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <p className="section-heading-eyebrow">O projektu</p>
          <h2 className="section-heading">
            Život osmišljen do <span className="italic text-gold-dark">posljednjeg detalja</span>
          </h2>
          <p className="font-sans text-navy-800/80 leading-relaxed mt-6 max-w-xl">
            Svibje Residence je novoizgrađena rezidencijalna zgrada koja spaja
            modernu arhitekturu, kvalitetnu gradnju i mirnu lokaciju. Svaki
            stan pažljivo je projektiran kako bi pružio maksimalnu
            funkcionalnost prostora, prirodno svjetlo i osjećaj privatnosti.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {features.map((f) => (
              <div key={f.title} className="border-l-2 border-gold pl-5">
                <h3 className="font-serif text-lg text-navy-950">{f.title}</h3>
                <p className="font-sans text-sm text-navy-800/70 mt-1.5 leading-relaxed">
                  {f.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-navy-950/10" />
            <p className="font-sans text-xs tracking-widest2 uppercase text-navy-800/50 whitespace-nowrap">
              Investitor i izvođač
            </p>
          </div>
          <div className="mt-4">
            <Image
              src="/images/ac-miskovic-logo.svg"
              alt="AC Mišković d.o.o. — za graditeljstvo i usluge"
              width={160}
              height={135}
              className="h-24 w-auto"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden translate-y-8">
              <Image
                src="/images/vanjski-2.jpeg"
                alt="Vanjski izgled zgrade Svibje Residence"
                fill
                sizes="(min-width: 1024px) 25vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
              <Image
                src="/images/stubiste-i-hodnik-2.jpeg"
                alt="Uređeno stubište Svibje Residence"
                fill
                sizes="(min-width: 1024px) 25vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-navy-950 text-cream px-8 py-6 shadow-2xl w-[85%] text-center">
              <p className="font-serif text-3xl text-gold-light">17</p>
              <p className="font-sans text-[11px] tracking-widest2 uppercase text-cream/60 mt-1">
                Stanova u zgradi
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

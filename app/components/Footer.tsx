import Image from "next/image";
import { getAvailableCount, getFloors, getTotalCount } from "@/app/data/building";

const navLinks = [
  { href: "#o-projektu", label: "O projektu" },
  { href: "#galerija", label: "Galerija" },
  { href: "#virtualna-setnja", label: "360° šetnja" },
  { href: "#stanovi", label: "Tipovi stanova" },
  { href: "#tlocrti", label: "Tlocrti" },
  { href: "#lokacija", label: "Lokacija" },
  { href: "#kontakt", label: "Kontakt" },
];

export default async function Footer() {
  const floors = await getFloors();
  const availableCount = getAvailableCount(floors);
  const totalCount = getTotalCount(floors);

  return (
    <footer className="bg-navy-950">
      <div className="h-px bg-gold-gradient opacity-40" />

      <div className="container-px max-w-8xl mx-auto pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 lg:gap-20">

          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="shrink-0 bg-cream rounded-sm p-1.5">
                <Image
                  src="/images/ac-miskovic-logo.svg"
                  alt="AC Mišković d.o.o."
                  width={648}
                  height={547}
                  className="h-9 w-auto"
                />
              </span>
              <span className="font-serif text-2xl text-cream">
                Svibje <span className="italic text-gold-light">Residence</span>
              </span>
            </div>
            <p className="font-sans text-sm text-cream/50 leading-relaxed">
              Novogradnja s pet tipova stanova — armirano betonska konstrukcija,
              podno grijanje, Vaillant dizalice topline i prvoklasna keramika.
              U izgradnji.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <p className="font-sans text-xs text-cream/45">
                {availableCount} stanova dostupno · U izgradnji
              </p>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="font-sans text-[10px] tracking-widest2 uppercase text-gold-dark mb-5">
              Navigacija
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-sans text-sm text-cream/60 hover:text-gold-light transition-colors w-fit"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[10px] tracking-widest2 uppercase text-gold-dark mb-5">
              Kontakt
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-sans text-[10px] tracking-widest2 uppercase text-cream/35 mb-1">
                  Telefon
                </p>
                <a
                  href="tel:+385997530159"
                  className="font-sans text-sm text-cream/75 hover:text-gold-light transition-colors"
                >
                  +385 99 7530 159
                </a>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-widest2 uppercase text-cream/35 mb-1">
                  E-mail
                </p>
                <a
                  href="mailto:ac@acmiskovic.hr"
                  className="font-sans text-sm text-cream/75 hover:text-gold-light transition-colors"
                >
                  ac@acmiskovic.hr
                </a>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-widest2 uppercase text-cream/35 mb-1">
                  Adresa
                </p>
                <p className="font-sans text-sm text-cream/75">
                  Savska ul. 29, 10361 Trstenik Nartski
                </p>
              </div>
              <div>
                <p className="font-sans text-[10px] tracking-widest2 uppercase text-cream/35 mb-1">
                  Investitor
                </p>
                <p className="font-sans text-sm text-cream/75">
                  AC Mišković d.o.o.
                </p>
              </div>
              <a href="#kontakt" className="btn-primary !py-3 !px-5 text-xs mt-2 w-fit">
                Zakažite razgled
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-px max-w-8xl mx-auto py-5 flex flex-col sm:flex-row justify-between gap-2 items-center">
          <p className="font-sans text-xs text-cream/35">
            © {new Date().getFullYear()} Svibje Residence · AC Mišković d.o.o. Sva prava pridržana.
          </p>
          <p className="font-sans text-xs text-cream/25">
            Novogradnja · Prizemlje + 3 kata{totalCount > 0 ? ` · ${totalCount} stanova` : ""}
          </p>
        </div>
      </div>
    </footer>
  );
}

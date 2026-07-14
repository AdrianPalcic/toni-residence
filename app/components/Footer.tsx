import Image from "next/image";

const links = [
  { href: "#o-projektu", label: "O projektu" },
  { href: "#galerija", label: "Galerija" },
  { href: "#virtualna-setnja", label: "Virtualna šetnja" },
  { href: "#stanovi", label: "Tipovi stanova" },
  { href: "#tlocrti", label: "Tlocrti" },
  { href: "#lokacija", label: "Lokacija" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-cream/10">
      <div className="container-px max-w-8xl mx-auto py-14 grid sm:grid-cols-3 gap-10 items-start">
        <div>
          <span className="font-serif text-2xl text-cream">
            Toni <span className="text-gold-light italic">Residence</span>
          </span>
          <p className="font-sans text-sm text-cream/50 mt-3 max-w-xs leading-relaxed">
            Novogradnja s pet tipova stanova na prizemlju i tri kata &mdash;
            moderan dizajn, kvalitetna izvedba, mirna lokacija.
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-sm text-cream/60 hover:text-gold-light transition-colors w-fit"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="sm:justify-self-end">
          <p className="font-sans text-xs tracking-widest2 uppercase text-cream/40 mb-3">
            Investitor i izvođač
          </p>
          <Image
            src="/images/ac-miskovic-logo.svg"
            alt="AC Mišković d.o.o."
            width={130}
            height={110}
            className="h-16 w-auto opacity-90"
          />
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-px max-w-8xl mx-auto py-6 flex flex-col sm:flex-row justify-between gap-2">
          <p className="font-sans text-xs text-cream/40">
            © {new Date().getFullYear()} Toni Residence. Sva prava pridržana.
          </p>
          <p className="font-sans text-xs text-cream/40">Investitor: AC Mišković d.o.o.</p>
        </div>
      </div>
    </footer>
  );
}

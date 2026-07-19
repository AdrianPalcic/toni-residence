import Image from "next/image";

const TOUR_URL = "https://kuula.co/profile/mp_vizualizacija12/collections";

export default function VirtualTour() {
  return (
    <section id="virtualna-setnja" className="relative bg-cream py-24 lg:py-32">
      <div className="container-px max-w-8xl mx-auto">
        <div className="relative rounded-sm overflow-hidden">
          <div className="relative aspect-[3/4] min-h-[520px] sm:aspect-[16/10] sm:min-h-[420px] lg:aspect-[21/9] lg:min-h-[360px]">
            <Image
              src="/images/stubiste-i-hodnik-3.jpeg"
              alt="Virtualna šetnja kroz Svibje Residence"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-navy-950/30" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="px-6 sm:px-14 lg:px-20 max-w-2xl">
              <p className="section-heading-eyebrow text-gold-light">360° Virtualna šetnja</p>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-cream mt-3 leading-tight">
                Prošećite kroz <span className="italic text-gold-light">Svibje Residence</span>{" "}
                iz naslonjača
              </h2>
              <p className="font-sans text-sm sm:text-base text-cream/75 mt-4 sm:mt-5 max-w-lg leading-relaxed">
                Istražite hodnike, stubište i okoliš zgrade u interaktivnoj
                360° virtualnoj šetnji — bez potrebe za fizičkim posjetom.
              </p>
              <a
                href={TOUR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-6 sm:mt-8 w-fit"
              >
                Pokrenite virtualnu šetnju
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 5.5a.75.75 0 0 0-.75.75v9a.75.75 0 0 0 .75.75h9a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 13.25 17.5h-9A2.25 2.25 0 0 1 2 15.25v-9A2.25 2.25 0 0 1 4.25 4h4a.75.75 0 0 1 0 1.5h-4Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M12.5 2.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V4.56l-6.22 6.22a.75.75 0 1 1-1.06-1.06L15.44 3.5h-2.19a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { getStanovi, getStanoviByTip, mapDostupnost } from "@/sanity/lib/queries";

export type UnitStatus = "available" | "sold" | "reserved";

export interface RoomSpec {
  room: string;
  area: string;
  isOutdoor?: boolean;
}

export interface ApartmentType {
  id: string;
  label: string;
  name: string;
  rooms: string;
  areaApprox: string;
  areaTotal: string;
  description: string;
  floorplans: string[];
  highlights: string[];
  heroImage: string;
  specsImage: string;
  /** Sve fotografije stana (interijer), prikazane u galeriji na stranici tipa stana. */
  images: string[];
  roomSpecs: RoomSpec[];
}

export interface FloorUnit {
  typeId: string;
  status: UnitStatus;
  label?: string;
}

export interface FloorMeta {
  id: string;
  level: number;
  name: string;
  shortName: string;
  description: string;
  planImage: string;
  extra?: string;
}

export interface Floor extends FloorMeta {
  units: FloorUnit[];
}

export const buildingFeatures: string[] = [
  "Armirano betonska konstrukcija",
  "Stolarija s troslojnim Low-E punjenim staklom sa 7 komora",
  "Električne rolete",
  "Lift Schindler (namijenjen i za nepokretne osobe)",
  "Iznadprosječno jak priključak struje za svaki stan",
  "Priprema za elektro punjače na parkingu",
  "Podno grijanje – svaka soba u stanu ima vlastiti termostat za regulaciju topline",
  "Urmet portafon za svaki stan",
  "Pristup za invalide",
  "Mineralni i akustični materijali u završnim radovima",
  "Prvoklasna keramika i sanitarije",
  "Sobna vrata po mjeri sa skrivenim pantima",
  "Vaillant dizalice topline",
  "Sika i PCI hidroizolacije krova, terasa i kupaonica",
  "STO-etics fasadni sustav s dvoslojnom samoperivom fasadnom bojom na bazi Lotusa",
];

export const apartmentTypes: ApartmentType[] = [
  {
    id: "A",
    label: "Tip A",
    name: "Tip A",
    rooms: "3-sobni",
    areaApprox: "63.89 m²",
    areaTotal: "63.89 m²",
    description:
      "Prostrani trosobni stan s dvije spavaće sobe, izdvojenim dnevnim boravkom s blagovaonicom i velikom terasom okrenutom prema jugu.",
    floorplans: ["/images/tlocrt-3.jpeg"],
    highlights: ["2 spavaće sobe", "Velika terasa prema jugu", "Odvojena kuhinja", "Prostrani dnevni boravak"],
    heroImage: "/images/tip-a-hero.jpeg",
    specsImage: "/images/specs-tip-a.jpeg",
    images: [
      "/images/tip-a/s2-soba-1.webp",
      "/images/tip-a/s2-soba-2.webp",
      "/images/tip-a/s2-soba-3.webp",
      "/images/tip-a/s2-soba-4.webp",
      "/images/tip-a/s2-soba-5.webp",
      "/images/tip-a/s2-soba-6.webp",
      "/images/tip-a/s2-soba-7.webp",
      "/images/tip-a/s2soba1.webp",
      "/images/tip-a/s2soba2.webp",
      "/images/tip-a/s2soba3.webp",
      "/images/tip-a/s2soba4.webp",
      "/images/tip-a/s2soba5.webp",
      "/images/tip-a/s2soba6.webp",
      "/images/tip-a/s2borav1.webp",
      "/images/tip-a/s2borav2.webp",
      "/images/tip-a/s2borav3.webp",
      "/images/tip-a/s2borav4.webp",
      "/images/tip-a/s2borav5.webp",
      "/images/tip-a/s2borav6.webp",
      "/images/tip-a/s2borav7.webp",
      "/images/tip-a/s2borav8.webp",
      "/images/tip-a/s2borav9.webp",
      "/images/tip-a/s2borav10.webp",
      "/images/tip-a/s2borav11.webp",
      "/images/tip-a/s2borav12.webp",
      "/images/tip-a/s2borav13.webp",
      "/images/tip-a/s2k1.webp",
      "/images/tip-a/s2k2.webp",
      "/images/tip-a/s2k3.webp",
      "/images/tip-a/s2k4.webp",
      "/images/tip-a/s2k5.webp",
      "/images/tip-a/s2k6.webp",
      "/images/tip-a/s2-tera-1.webp",
      "/images/tip-a/s2-tera-2.webp",
      "/images/tip-a/s2-tera-3.webp",
      "/images/tip-a/s2-tera-4.webp",
    ],
    roomSpecs: [
      { room: "Hodnik", area: "9.40 m²" },
      { room: "Kupaonica", area: "6.55 m²" },
      { room: "Soba", area: "10.37 m²" },
      { room: "Soba", area: "7.23 m²" },
      { room: "Dnevni boravak, kuhinja i blagovaonica", area: "25.82 m²" },
      { room: "Natkrivena terasa", area: "4.53 m²", isOutdoor: true },
    ],
  },
  {
    id: "B",
    label: "Tip B",
    name: "Tip B",
    rooms: "3-sobni",
    areaApprox: "63.89 m²",
    areaTotal: "63.89 m²",
    description:
      "Zrcalna verzija Tipa A na suprotnoj strani zgrade — dvije spavaće sobe, garderoba i prostran dnevni boravak s pristupom balkonu.",
    floorplans: ["/images/tlocrt-4.jpeg"],
    highlights: ["Garderoba", "Balkon", "Puno prirodnog svjetla", "2 spavaće sobe"],
    heroImage: "/images/tip-b-hero.jpeg",
    specsImage: "/images/specs-tip-b.jpeg",
    images: [
      "/images/tip-b/s2-soba-1.webp",
      "/images/tip-b/s2-soba-2.webp",
      "/images/tip-b/s2-soba-3.webp",
      "/images/tip-b/s2-soba-4.webp",
      "/images/tip-b/s2-soba-5.webp",
      "/images/tip-b/s2-soba-6.webp",
      "/images/tip-b/s2-soba-7.webp",
      "/images/tip-b/s2soba1.webp",
      "/images/tip-b/s2soba2.webp",
      "/images/tip-b/s2soba3.webp",
      "/images/tip-b/s2soba4.webp",
      "/images/tip-b/s2soba5.webp",
      "/images/tip-b/s2soba6.webp",
      "/images/tip-b/s2borav1.webp",
      "/images/tip-b/s2borav2.webp",
      "/images/tip-b/s2borav3.webp",
      "/images/tip-b/s2borav4.webp",
      "/images/tip-b/s2borav5.webp",
      "/images/tip-b/s2borav6.webp",
      "/images/tip-b/s2borav7.webp",
      "/images/tip-b/s2borav8.webp",
      "/images/tip-b/s2borav9.webp",
      "/images/tip-b/s2borav10.webp",
      "/images/tip-b/s2borav11.webp",
      "/images/tip-b/s2borav12.webp",
      "/images/tip-b/s2borav13.webp",
      "/images/tip-b/s2k1.webp",
      "/images/tip-b/s2k2.webp",
      "/images/tip-b/s2k3.webp",
      "/images/tip-b/s2k4.webp",
      "/images/tip-b/s2k5.webp",
      "/images/tip-b/s2k6.webp",
      "/images/tip-b/s2-tera-1.webp",
      "/images/tip-b/s2-tera-2.webp",
      "/images/tip-b/s2-tera-3.webp",
      "/images/tip-b/s2-tera-4.webp",
    ],
    roomSpecs: [
      { room: "Hodnik", area: "9.40 m²" },
      { room: "Kupaonica", area: "6.55 m²" },
      { room: "Soba", area: "10.37 m²" },
      { room: "Soba", area: "7.23 m²" },
      { room: "Dnevni boravak, kuhinja i blagovaonica", area: "25.82 m²" },
      { room: "Natkrivena terasa", area: "4.53 m²", isOutdoor: true },
    ],
  },
  {
    id: "C",
    label: "Tip C",
    name: "Tip C",
    rooms: "2-sobni",
    areaApprox: "67.77 m²",
    areaTotal: "67.77 m²",
    description:
      "Funkcionalan dvosobni stan s odvojenom spavaćom sobom, radnim kutom i dnevnim boravkom otvorenim prema kuhinji.",
    floorplans: ["/images/tlocrt-5.jpeg"],
    highlights: ["Radni kutak", "Otvoreni dnevni boravak", "Balkon", "Funkcionalan raspored"],
    heroImage: "/images/tip-c-hero.jpeg",
    specsImage: "/images/specs-tip-c.jpeg",
    images: [
      "/images/tip-c/s3-soba-1.webp",
      "/images/tip-c/s3-soba-2.webp",
      "/images/tip-c/s3-soba-3.webp",
      "/images/tip-c/s3-soba-4.webp",
      "/images/tip-c/s3-soba-5.webp",
      "/images/tip-c/s3-soba-6.webp",
      "/images/tip-c/s3-soba-7.webp",
      "/images/tip-c/s3-soba-8.webp",
      "/images/tip-c/s3-soba-9.webp",
      "/images/tip-c/s3-djsoba1.webp",
      "/images/tip-c/s3-djsoba2.webp",
      "/images/tip-c/s3-djsoba3.webp",
      "/images/tip-c/s3-djsoba4.webp",
      "/images/tip-c/s3-djsoba5.webp",
      "/images/tip-c/s3-djsoba6.webp",
      "/images/tip-c/s3-boravak1.webp",
      "/images/tip-c/s3-boravak2.webp",
      "/images/tip-c/s3-boravak3.webp",
      "/images/tip-c/s3-boravak4.webp",
      "/images/tip-c/s3-boravak5.webp",
      "/images/tip-c/s3-boravak6.webp",
      "/images/tip-c/s3-boravak7.webp",
      "/images/tip-c/s3-boravak8.webp",
      "/images/tip-c/s3-boravak9.webp",
      "/images/tip-c/s3-boravak10.webp",
      "/images/tip-c/s3-boravak11.webp",
      "/images/tip-c/s3-boravak12.webp",
      "/images/tip-c/s3-boravak13.webp",
      "/images/tip-c/s3-boravak14.webp",
      "/images/tip-c/s3-boravak15.webp",
      "/images/tip-c/s3kup-1.webp",
      "/images/tip-c/s3kup-2.webp",
      "/images/tip-c/s3kup-3.webp",
      "/images/tip-c/s3kup-4.webp",
      "/images/tip-c/s3kup-5.webp",
      "/images/tip-c/s3kup-6.webp",
      "/images/tip-c/s3kup-7.webp",
      "/images/tip-c/s3-teras-1.webp",
      "/images/tip-c/s3-teras-2.webp",
      "/images/tip-c/s3-teras-3.webp",
      "/images/tip-c/s3-teras-4.webp",
      "/images/tip-c/s3-teras-5.webp",
    ],
    roomSpecs: [
      { room: "Hodnik", area: "10.02 m²" },
      { room: "Kupaonica", area: "5.74 m²" },
      { room: "Soba", area: "11.55 m²" },
      { room: "Soba", area: "9.24 m²" },
      { room: "Dnevni boravak, kuhinja i blagovaonica", area: "26.53 m²" },
      { room: "Natkriveni balkon", area: "4.68 m²", isOutdoor: true },
    ],
  },
  {
    id: "D",
    label: "Tip D",
    name: "Tip D",
    rooms: "1-sobni",
    areaApprox: "51.84 m²",
    areaTotal: "51.84 m²",
    description:
      "Kompaktan i praktičan jednosobni stan, idealan za investiciju ili mlade parove — spavaća soba, dnevni boravak i vlastita terasa.",
    floorplans: ["/images/tlocrt-6.jpeg"],
    highlights: ["Kompaktan raspored", "Vlastita terasa", "Idealno za najam", "Niža cijena ulaza"],
    heroImage: "/images/tip-d-hero.jpeg",
    specsImage: "/images/specs-tip-d.jpeg",
    images: [
      "/images/tip-d/soba-s2.webp",
      "/images/tip-d/soba-s3.webp",
      "/images/tip-d/soba-s7.webp",
      "/images/tip-d/soba-s8.webp",
      "/images/tip-d/bor-1.webp",
      "/images/tip-d/bor-2.webp",
      "/images/tip-d/bor-3.webp",
      "/images/tip-d/bor-4.webp",
      "/images/tip-d/bor-5.webp",
      "/images/tip-d/bor6.webp",
      "/images/tip-d/bor7.webp",
      "/images/tip-d/bor8.webp",
      "/images/tip-d/bor9.webp",
      "/images/tip-d/kupaona-s1-1.webp",
      "/images/tip-d/kupaona-s1-2-2.webp",
      "/images/tip-d/kupaona-s1-3.webp",
      "/images/tip-d/kupaona-s1-4.webp",
      "/images/tip-d/kupaona-s1-5.webp",
      "/images/tip-d/kupaona-s1-6.webp",
      "/images/tip-d/s1-teras-1.webp",
      "/images/tip-d/s1-teras-2.webp",
      "/images/tip-d/s1-teras-3.webp",
      "/images/tip-d/s1-teras-5.webp",
    ],
    roomSpecs: [
      { room: "Hodnik", area: "4.03 m²" },
      { room: "Kupaonica", area: "4.49 m²" },
      { room: "Soba", area: "9.96 m²" },
      { room: "Dnevni boravak, kuhinja i blagovaonica", area: "24.02 m²" },
      { room: "Garderoba", area: "3.81 m²" },
      { room: "Natkriveni balkon", area: "5.53 m²", isOutdoor: true },
    ],
  },
  {
    id: "E",
    label: "Tip E",
    name: "Tip E",
    rooms: "3-sobni",
    areaApprox: "67.77 m²",
    areaTotal: "67.77 m²",
    description:
      "Najveći tip stana na katu — tri sobe, prostrani dnevni boravak s blagovaonicom i dvostruko orijentiran pogled.",
    floorplans: ["/images/tlocrt-7.jpeg", "/images/tlocrt-8.jpeg"],
    highlights: ["3 sobe", "Dvostruka orijentacija", "Najveća kvadratura", "Prostrana blagovaonica"],
    heroImage: "/images/tip-e-hero.jpeg",
    specsImage: "/images/specs-tip-e.jpeg",
    images: [
      "/images/tip-e/s3-soba-1.webp",
      "/images/tip-e/s3-soba-2.webp",
      "/images/tip-e/s3-soba-3.webp",
      "/images/tip-e/s3-soba-4.webp",
      "/images/tip-e/s3-soba-5.webp",
      "/images/tip-e/s3-soba-6.webp",
      "/images/tip-e/s3-soba-7.webp",
      "/images/tip-e/s3-soba-8.webp",
      "/images/tip-e/s3-soba-9.webp",
      "/images/tip-e/s3-djsoba1.webp",
      "/images/tip-e/s3-djsoba2.webp",
      "/images/tip-e/s3-djsoba3.webp",
      "/images/tip-e/s3-djsoba4.webp",
      "/images/tip-e/s3-djsoba5.webp",
      "/images/tip-e/s3-djsoba6.webp",
      "/images/tip-e/s3-boravak1.webp",
      "/images/tip-e/s3-boravak2.webp",
      "/images/tip-e/s3-boravak3.webp",
      "/images/tip-e/s3-boravak4.webp",
      "/images/tip-e/s3-boravak5.webp",
      "/images/tip-e/s3-boravak6.webp",
      "/images/tip-e/s3-boravak7.webp",
      "/images/tip-e/s3-boravak8.webp",
      "/images/tip-e/s3-boravak9.webp",
      "/images/tip-e/s3-boravak10.webp",
      "/images/tip-e/s3-boravak11.webp",
      "/images/tip-e/s3-boravak12.webp",
      "/images/tip-e/s3-boravak13.webp",
      "/images/tip-e/s3-boravak14.webp",
      "/images/tip-e/s3-boravak15.webp",
      "/images/tip-e/s3kup-1.webp",
      "/images/tip-e/s3kup-2.webp",
      "/images/tip-e/s3kup-3.webp",
      "/images/tip-e/s3kup-4.webp",
      "/images/tip-e/s3kup-5.webp",
      "/images/tip-e/s3kup-6.webp",
      "/images/tip-e/s3kup-7.webp",
      "/images/tip-e/s3-teras-1.webp",
      "/images/tip-e/s3-teras-2.webp",
      "/images/tip-e/s3-teras-3.webp",
      "/images/tip-e/s3-teras-4.webp",
      "/images/tip-e/s3-teras-5.webp",
    ],
    roomSpecs: [
      { room: "Hodnik", area: "10.02 m²" },
      { room: "Kupaonica", area: "5.74 m²" },
      { room: "Soba", area: "11.55 m²" },
      { room: "Soba", area: "9.24 m²" },
      { room: "Dnevni boravak, kuhinja i blagovaonica", area: "26.53 m²" },
      { room: "Natkriveni balkon", area: "4.68 m²", isOutdoor: true },
    ],
  },
];

// Struktura katova (opis, tlocrt kata, dodatni sadržaj) ostaje definirana u kodu —
// mijenja se rijetko. Koji je stan (tip + dostupnost) stvarno na kojem katu dohvaća
// se dinamički iz Sanityja preko getFloors().
export const floorsMeta: FloorMeta[] = [
  {
    id: "prizemlje",
    level: 0,
    name: "Prizemlje",
    shortName: "Prizemlje",
    description:
      "U prizemlju zgrade nalaze se dva stana te 17 spremišta namijenjenih stanarima svih katova.",
    planImage: "/images/tlocrt-1.jpeg",
    extra: "17 spremišta",
  },
  {
    id: "kat-1",
    level: 1,
    name: "1. kat",
    shortName: "1. kat",
    description: "Prvi kat donosi svih pet tipova stanova u zrcaljenom rasporedu oko središnjeg stubišta.",
    planImage: "/images/tipovi-stanova.jpeg",
  },
  {
    id: "kat-2",
    level: 2,
    name: "2. kat",
    shortName: "2. kat",
    description: "Drugi kat ponavlja identičan raspored stanova kao i prvi kat.",
    planImage: "/images/tipovi-stanova.jpeg",
  },
  {
    id: "kat-3",
    level: 3,
    name: "3. kat",
    shortName: "3. kat",
    description: "Treći, najviši kat zgrade — identičan raspored uz dodatnu visinu i pogled.",
    planImage: "/images/tipovi-stanova.jpeg",
  },
];

const typeOrder = apartmentTypes.map((t) => t.id);

/** Dohvaća stanove iz Sanityja i spaja ih s katovima. Poziva se iz server komponenti. */
export async function getFloors(): Promise<Floor[]> {
  const stanovi = await getStanovi();
  return floorsMeta.map((meta) => ({
    ...meta,
    units: stanovi
      .filter((s) => s.kat === meta.id)
      .sort((a, b) => typeOrder.indexOf(a.tip) - typeOrder.indexOf(b.tip))
      .map((s) => ({
        typeId: s.tip,
        status: mapDostupnost(s.dostupnost),
        label: s.oznaka,
      })),
  }));
}

/** Dohvaća samo stanove danog tipa (Sanity upit filtriran po tipu), po katovima. */
export async function getAvailabilityForType(
  typeId: string
): Promise<{ floor: FloorMeta; unit: FloorUnit }[]> {
  const stanovi = await getStanoviByTip(typeId);
  return floorsMeta.flatMap((floor) => {
    const stan = stanovi.find((s) => s.kat === floor.id);
    if (!stan) return [];
    return [
      {
        floor,
        unit: { typeId, status: mapDostupnost(stan.dostupnost), label: stan.oznaka },
      },
    ];
  });
}

export function getAvailableCount(floors: Floor[]): number {
  return floors.flatMap((f) => f.units).filter((u) => u.status === "available").length;
}

export function getTotalCount(floors: Floor[]): number {
  return floors.flatMap((f) => f.units).length;
}

export function getBuildingFacts(floors: Floor[]) {
  const available = getAvailableCount(floors);
  const total = getTotalCount(floors);
  return [
    { label: "Etaže", value: "Prizemlje + 3 kata" },
    { label: "Slobodnih stanova", value: total > 0 ? `${available} / ${total}` : "Na upitu" },
    { label: "Spremišta", value: "17" },
    { label: "Tipova stanova", value: "5 (A–E)" },
    { label: "Dostupnost", value: "U izgradnji" },
  ];
}

export const exteriorImages = [
  "/images/vanjski-1.jpeg",
  "/images/vanjski-2.jpeg",
  "/images/vanjski-3.jpeg",
  "/images/vanjski-4.jpeg",
  "/images/vanjski-5.jpeg",
  "/images/vanjski-6.jpeg",
  "/images/vanjski-7.jpeg",
  "/images/vanjski-8.jpeg",
  "/images/vanjski-9.jpeg",
];

export const interiorImages = [
  "/images/stubiste-i-hodnik-1.jpeg",
  "/images/stubiste-i-hodnik-2.jpeg",
  "/images/stubiste-i-hodnik-3.jpeg",
  "/images/stubiste-i-hodnik-4.jpeg",
  "/images/stubiste-i-hodnik-5.jpeg",
];

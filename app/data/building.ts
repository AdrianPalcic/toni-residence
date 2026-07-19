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
  galleryImages: string[];
  specsImage: string;
  roomSpecs: RoomSpec[];
}

export interface FloorUnit {
  typeId: string;
  status: UnitStatus;
}

export interface Floor {
  id: string;
  level: number;
  name: string;
  shortName: string;
  description: string;
  planImage: string;
  units: FloorUnit[];
  extra?: string;
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
    galleryImages: ["/images/vanjski-1.jpeg", "/images/vanjski-3.jpeg", "/images/stubiste-i-hodnik-1.jpeg"],
    specsImage: "/images/specs-tip-a.jpeg",
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
    galleryImages: ["/images/vanjski-3.jpeg", "/images/vanjski-5.jpeg", "/images/stubiste-i-hodnik-2.jpeg"],
    specsImage: "/images/specs-tip-b.jpeg",
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
    galleryImages: ["/images/vanjski-6.jpeg", "/images/vanjski-7.jpeg", "/images/stubiste-i-hodnik-3.jpeg"],
    specsImage: "/images/specs-tip-c.jpeg",
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
    galleryImages: ["/images/vanjski-8.jpeg", "/images/vanjski-9.jpeg", "/images/stubiste-i-hodnik-4.jpeg"],
    specsImage: "/images/specs-tip-d.jpeg",
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
    galleryImages: ["/images/vanjski-1.jpeg", "/images/vanjski-8.jpeg", "/images/stubiste-i-hodnik-5.jpeg"],
    specsImage: "/images/specs-tip-e.jpeg",
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

export const floors: Floor[] = [
  {
    id: "prizemlje",
    level: 0,
    name: "Prizemlje",
    shortName: "Prizemlje",
    description:
      "U prizemlju zgrade nalaze se dva stana te 17 spremišta namijenjenih stanarima svih katova.",
    planImage: "/images/tlocrt-1.jpeg",
    units: [
      { typeId: "A", status: "sold" },
      { typeId: "B", status: "sold" },
    ],
    extra: "17 spremišta",
  },
  {
    id: "kat-1",
    level: 1,
    name: "1. kat",
    shortName: "1. kat",
    description: "Prvi kat donosi svih pet tipova stanova u zrcaljenom rasporedu oko središnjeg stubišta.",
    planImage: "/images/tipovi-stanova.jpeg",
    units: [
      { typeId: "A", status: "sold" },
      { typeId: "B", status: "available" },
      { typeId: "C", status: "available" },
      { typeId: "D", status: "sold" },
      { typeId: "E", status: "available" },
    ],
  },
  {
    id: "kat-2",
    level: 2,
    name: "2. kat",
    shortName: "2. kat",
    description: "Drugi kat ponavlja identičan raspored stanova kao i prvi kat.",
    planImage: "/images/tipovi-stanova.jpeg",
    units: [
      { typeId: "A", status: "sold" },
      { typeId: "B", status: "available" },
      { typeId: "C", status: "available" },
      { typeId: "D", status: "sold" },
      { typeId: "E", status: "available" },
    ],
  },
  {
    id: "kat-3",
    level: 3,
    name: "3. kat",
    shortName: "3. kat",
    description: "Treći, najviši kat zgrade — identičan raspored uz dodatnu visinu i pogled.",
    planImage: "/images/tipovi-stanova.jpeg",
    units: [
      { typeId: "A", status: "available" },
      { typeId: "B", status: "available" },
      { typeId: "C", status: "available" },
      { typeId: "D", status: "available" },
      { typeId: "E", status: "available" },
    ],
  },
];

export function getAvailableCount(): number {
  return floors.flatMap((f) => f.units).filter((u) => u.status === "available").length;
}

export function getBuildingFacts() {
  const available = getAvailableCount();
  return [
    { label: "Etaže", value: "Prizemlje + 3 kata" },
    { label: "Slobodnih stanova", value: `${available} / 17` },
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

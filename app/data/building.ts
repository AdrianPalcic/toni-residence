export type UnitStatus = "available" | "sold" | "reserved";

export interface ApartmentType {
  id: string;
  label: string;
  name: string;
  rooms: string;
  areaApprox: string;
  description: string;
  floorplans: string[];
  highlights: string[];
  heroImage: string;
  galleryImages: string[];
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
    areaApprox: "~75 m²",
    description:
      "Prostrani trosobni stan s dvije spavaće sobe, izdvojenim dnevnim boravkom s blagovaonicom i velikom terasom okrenutom prema jugu.",
    floorplans: ["/images/tlocrt-3.jpeg"],
    highlights: ["2 spavaće sobe", "Velika terasa prema jugu", "Odvojena kuhinja", "Prostrani dnevni boravak"],
    heroImage: "/images/vanjski-2.jpeg",
    galleryImages: ["/images/vanjski-1.jpeg", "/images/vanjski-3.jpeg", "/images/stubiste-i-hodnik-1.jpeg"],
  },
  {
    id: "B",
    label: "Tip B",
    name: "Tip B",
    rooms: "3-sobni",
    areaApprox: "~72 m²",
    description:
      "Zrcalna verzija Tipa A na suprotnoj strani zgrade — dvije spavaće sobe, garderoba i prostran dnevni boravak s pristupom balkonu.",
    floorplans: ["/images/tlocrt-4.jpeg"],
    highlights: ["Garderoba", "Balkon", "Puno prirodnog svjetla", "2 spavaće sobe"],
    heroImage: "/images/vanjski-4.jpeg",
    galleryImages: ["/images/vanjski-3.jpeg", "/images/vanjski-5.jpeg", "/images/stubiste-i-hodnik-2.jpeg"],
  },
  {
    id: "C",
    label: "Tip C",
    name: "Tip C",
    rooms: "2-sobni",
    areaApprox: "~64 m²",
    description:
      "Funkcionalan dvosobni stan s odvojenom spavaćom sobom, radnim kutom i dnevnim boravkom otvorenim prema kuhinji.",
    floorplans: ["/images/tlocrt-5.jpeg"],
    highlights: ["Radni kutak", "Otvoreni dnevni boravak", "Balkon", "Funkcionalan raspored"],
    heroImage: "/images/vanjski-5.jpeg",
    galleryImages: ["/images/vanjski-6.jpeg", "/images/vanjski-7.jpeg", "/images/stubiste-i-hodnik-3.jpeg"],
  },
  {
    id: "D",
    label: "Tip D",
    name: "Tip D",
    rooms: "1-sobni",
    areaApprox: "~48 m²",
    description:
      "Kompaktan i praktičan jednosobni stan, idealan za investiciju ili mlade parove — spavaća soba, dnevni boravak i vlastita terasa.",
    floorplans: ["/images/tlocrt-6.jpeg"],
    highlights: ["Kompaktan raspored", "Vlastita terasa", "Idealno za najam", "Niža cijena ulaza"],
    heroImage: "/images/vanjski-7.jpeg",
    galleryImages: ["/images/vanjski-8.jpeg", "/images/vanjski-9.jpeg", "/images/stubiste-i-hodnik-4.jpeg"],
  },
  {
    id: "E",
    label: "Tip E",
    name: "Tip E",
    rooms: "3-sobni",
    areaApprox: "~80 m²",
    description:
      "Najveći tip stana na katu — tri sobe, prostrani dnevni boravak s blagovaonicom i dvostruko orijentiran pogled.",
    floorplans: ["/images/tlocrt-7.jpeg", "/images/tlocrt-8.jpeg"],
    highlights: ["3 sobe", "Dvostruka orijentacija", "Najveća kvadratura", "Prostrana blagovaonica"],
    heroImage: "/images/vanjski-9.jpeg",
    galleryImages: ["/images/vanjski-1.jpeg", "/images/vanjski-8.jpeg", "/images/stubiste-i-hodnik-5.jpeg"],
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
      { typeId: "A", status: "available" },
      { typeId: "B", status: "available" },
      { typeId: "C", status: "available" },
      { typeId: "D", status: "available" },
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
      { typeId: "A", status: "available" },
      { typeId: "B", status: "available" },
      { typeId: "C", status: "available" },
      { typeId: "D", status: "available" },
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

export const buildingFacts = [
  { label: "Etaže", value: "Prizemlje + 3 kata" },
  { label: "Stanova ukupno", value: "17" },
  { label: "Spremišta", value: "17" },
  { label: "Tipova stanova", value: "5 (A–E)" },
  { label: "Dostupnost", value: "Useljivo odmah" },
];

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

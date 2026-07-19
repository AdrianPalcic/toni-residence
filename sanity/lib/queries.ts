import { client } from "./client";
import type { UnitStatus } from "@/app/data/building";

export type SanityDostupnost = "dostupno" | "rezervirano" | "prodano";

export interface SanityStan {
  _id: string;
  tip: string;
  ime: string;
  kat: string;
  dostupnost: SanityDostupnost;
  oznaka?: string;
}

const STANOVI_QUERY = `*[_type == "stan"]{_id, tip, ime, kat, dostupnost, oznaka}`;
const STANOVI_BY_TIP_QUERY = `*[_type == "stan" && tip == $tip]{_id, tip, ime, kat, dostupnost, oznaka}`;

const dostupnostToStatus: Record<SanityDostupnost, UnitStatus> = {
  dostupno: "available",
  rezervirano: "reserved",
  prodano: "sold",
};

export function mapDostupnost(value: SanityDostupnost): UnitStatus {
  return dostupnostToStatus[value] ?? "available";
}

export async function getStanovi(): Promise<SanityStan[]> {
  return client.fetch(STANOVI_QUERY, {}, { next: { revalidate: 60 } });
}

export async function getStanoviByTip(tip: string): Promise<SanityStan[]> {
  return client.fetch(STANOVI_BY_TIP_QUERY, { tip }, { next: { revalidate: 60 } });
}

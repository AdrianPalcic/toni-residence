import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";

for (const line of readFileSync(".env.local", "utf8").split("\n")) {
  const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (match && !process.env[match[1]]) {
    process.env[match[1]] = match[2].trim();
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !token) {
  console.error("Nedostaje NEXT_PUBLIC_SANITY_PROJECT_ID ili SANITY_API_TOKEN u .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// Stanje kakvo je bilo prije migracije na Sanity (app/data/building.ts, floors[]).
const stanovi = [
  { kat: "prizemlje", units: [["A", "prodano"], ["B", "prodano"]] },
  {
    kat: "kat-1",
    units: [
      ["A", "prodano"],
      ["B", "dostupno"],
      ["C", "dostupno"],
      ["D", "prodano"],
      ["E", "dostupno"],
    ],
  },
  {
    kat: "kat-2",
    units: [
      ["A", "prodano"],
      ["B", "dostupno"],
      ["C", "dostupno"],
      ["D", "prodano"],
      ["E", "dostupno"],
    ],
  },
  {
    kat: "kat-3",
    units: [
      ["A", "dostupno"],
      ["B", "dostupno"],
      ["C", "dostupno"],
      ["D", "dostupno"],
      ["E", "dostupno"],
    ],
  },
];

const docs = stanovi.flatMap(({ kat, units }) =>
  units.map(([tip, dostupnost], idx) => ({
    _id: `stan-${kat}-${tip.toLowerCase()}`,
    _type: "stan",
    tip,
    ime: `Tip ${tip}`,
    kat,
    dostupnost,
    oznaka: `${tip}-${kat === "prizemlje" ? "P" : kat.replace("kat-", "")}`,
  }))
);

const tx = client.transaction();
for (const doc of docs) {
  tx.createOrReplace(doc);
}

const result = await tx.commit();
console.log(`Kreirano/ažurirano ${docs.length} stanova u Sanityju.`);
console.log(result);

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

const stanovi = await client.fetch(`*[_type == "stan"]{_id, tip}`);

const tx = client.transaction();
for (const stan of stanovi) {
  tx.patch(stan._id, (p) => p.set({ ime: `Tip ${stan.tip}` }));
}

const result = await tx.commit();
console.log(`Ažurirano ${stanovi.length} stanova s poljem 'ime'.`);
console.log(result.results ?? result);

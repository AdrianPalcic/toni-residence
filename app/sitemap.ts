import type { MetadataRoute } from "next";
import { apartmentTypes } from "./data/building";

const siteUrl = "https://svibje-residence.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...apartmentTypes.map((t) => ({
      url: `${siteUrl}/stanovi/${t.id.toLowerCase()}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}

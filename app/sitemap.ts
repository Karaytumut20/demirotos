import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

const BASE_URL = "https://www.demiroto.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/hakkimizda`, priority: 0.8 },
    { url: `${BASE_URL}/hizmetler`, priority: 0.9 },
    { url: `${BASE_URL}/hizmet-bolgeleri`, priority: 0.9 },
    { url: `${BASE_URL}/yorumlar`, priority: 0.7 },
    { url: `${BASE_URL}/iletisim`, priority: 0.8 },
    { url: `${BASE_URL}/sikca-sorulan-sorular`, priority: 0.7 },
    { url: `${BASE_URL}/gizlilik`, priority: 0.5 },
    { url: `${BASE_URL}/kvkk`, priority: 0.5 },
  ].map((p) => ({
    url: p.url,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p.priority,
  }));

  const servicePages = services.map((s) => ({
    url: `${BASE_URL}/hizmetler/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const locationPages = locations.map((l) => ({
    url: `${BASE_URL}/hizmet-bolgeleri/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}

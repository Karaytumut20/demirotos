import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { absoluteUrl, siteConfig } from "@/app/seo";

const imageFor = (slug: string, fallback: string) =>
  absoluteUrl(`/images/${slug || fallback}.png`);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: siteConfig.url, priority: 1.0, images: [absoluteUrl(siteConfig.defaultImage)] },
    { url: absoluteUrl("/hakkimizda"), priority: 0.8, images: [absoluteUrl("/why-us.png")] },
    { url: absoluteUrl("/hizmetler"), priority: 0.9, images: [absoluteUrl("/images/oto-cekici.png")] },
    { url: absoluteUrl("/hizmet-bolgeleri"), priority: 0.9, images: [absoluteUrl("/images/cayirova.png")] },
    { url: absoluteUrl("/yorumlar"), priority: 0.7, images: [absoluteUrl(siteConfig.logo)] },
    { url: absoluteUrl("/iletisim"), priority: 0.8, images: [absoluteUrl(siteConfig.logo)] },
    { url: absoluteUrl("/sikca-sorulan-sorular"), priority: 0.7, images: [absoluteUrl(siteConfig.defaultImage)] },
    { url: absoluteUrl("/gizlilik"), priority: 0.4 },
    { url: absoluteUrl("/kvkk"), priority: 0.4 },
  ].map((p) => ({
    url: p.url,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p.priority,
    images: p.images,
  }));

  const servicePages = services.map((s) => ({
    url: absoluteUrl(`/hizmetler/${s.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
    images: [imageFor(s.fallbackImage || s.slug, "oto-cekici")],
  }));

  const locationPages = locations.map((l) => ({
    url: absoluteUrl(`/hizmet-bolgeleri/${l.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
    images: [imageFor(l.fallbackImage || l.slug, "gebze")],
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}

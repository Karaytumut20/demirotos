import { MetadataRoute } from "next";
import { siteConfig } from "@/app/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description:
      "Çayırova, Şekerpınar ve Gebze bölgesinde 7/24 oto çekici ve araç kurtarma hizmeti.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#102A43",
    lang: "tr",
    categories: ["business", "navigation", "utilities"],
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

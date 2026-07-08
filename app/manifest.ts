import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Demir Oto Kurtarma",
    short_name: "Demir Oto",
    description:
      "Çayırova, Şekerpınar ve Gebze bölgesinde 7/24 oto çekici ve araç kurtarma",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#102A43",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

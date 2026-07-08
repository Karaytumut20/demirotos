import type { Metadata } from "next";
import { business } from "@/data/business";

export const siteConfig = {
  name: business.name,
  shortName: business.shortName,
  url: "https://www.demiroto.com",
  locale: "tr_TR",
  language: "tr",
  defaultImage: "/hero-truck.png",
  logo: "/images/demir-logo-black-clean.png",
  phone: business.phone,
  phoneLink: business.phoneLink,
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

type SeoMetadataInput = {
  title: Metadata["title"];
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
};

function titleToText(title: Metadata["title"]) {
  if (typeof title === "string") return title;
  if (title && typeof title === "object") {
    if ("absolute" in title && title.absolute) return String(title.absolute);
    if ("default" in title && title.default) return String(title.default);
  }

  return siteConfig.name;
}

export function buildSeoMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.defaultImage,
  keywords,
  noIndex = false,
}: SeoMetadataInput): Metadata {
  const imageUrl = absoluteUrl(image);
  const socialTitle = titleToText(title);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: path,
      siteName: siteConfig.name,
      title: socialTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - 7/24 oto çekici ve yol yardım`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileContactBar from "@/components/ui/MobileContactBar";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";
import {
  absoluteUrl,
  buildSeoMetadata,
  safeJsonLd,
  siteConfig,
} from "@/app/seo";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});


export const metadata: Metadata = {
  ...buildSeoMetadata({
    title: {
      default:
        "Demir Oto Kurtarma - Çayırova, Gebze Çekici ve Yol Yardım | 0546 151 77 41",
      template: "%s | Demir Oto Kurtarma",
    },
    description:
      "Çayırova, Şekerpınar, Gebze ve çevresinde 7/24 oto çekici, araç kurtarma ve yol yardım hizmeti. Hızlı, güvenli ve profesyonel destek için hemen arayın: 0546 151 77 41.",
    keywords: [
      "oto çekici",
      "araç kurtarma",
      "yol yardım",
      "çayırova çekici",
      "gebze çekici",
      "şekerpınar çekici",
      "kocaeli oto kurtarma",
      "7/24 çekici",
      "en yakın çekici",
    ],
  }),
  metadataBase: new URL(siteConfig.url),
  applicationName: business.name,
  category: "automotive",
  referrer: "origin-when-cross-origin",
  title: {
    default:
      "Demir Oto Kurtarma - Çayırova, Gebze Çekici ve Yol Yardım | 0546 151 77 41",
    template: "%s | Demir Oto Kurtarma",
  },
  authors: [{ name: "Demir Oto Kurtarma" }],
  creator: "Demir Oto Kurtarma",
  publisher: "Demir Oto Kurtarma",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  verification: {
    google: "",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#business`,
      name: business.name,
      description: business.description,
      url: siteConfig.url,
      image: absoluteUrl(siteConfig.defaultImage),
      logo: absoluteUrl(siteConfig.logo),
      telephone: business.phoneLink.replace("tel:", ""),
      priceRange: "₺₺",
      address: {
        "@type": "PostalAddress",
        streetAddress: `${business.address.building}, ${business.address.neighborhood}, ${business.address.street}`,
        addressLocality: business.address.district,
        addressRegion: business.address.city,
        postalCode: business.address.postalCode,
        addressCountry: "TR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: business.phoneLink.replace("tel:", ""),
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: "tr",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 40.7978,
        longitude: 29.6634,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: business.rating.toFixed(1),
        reviewCount: String(business.ratingCount),
        bestRating: "5",
        worstRating: "1",
      },
      review: reviews.map((review) => ({
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.name,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: String(review.rating),
          bestRating: "5",
          worstRating: "1",
        },
        reviewBody: review.text,
      })),
      areaServed: [
        "Çayırova",
        "Gebze",
        "Darıca",
        "Dilovası",
        "Şekerpınar",
        "Kocaeli",
      ],
      serviceType: [
        "Oto Çekici",
        "Oto Kurtarma",
        "Yol Yardım",
        "Motosiklet Çekici",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Oto çekici ve yol yardım hizmetleri",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            url: absoluteUrl(`/hizmetler/${service.slug}`),
            description: service.shortDescription,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: business.name,
      publisher: {
        "@id": `${siteConfig.url}/#business`,
      },
      inLanguage: "tr",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}

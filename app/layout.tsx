import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileContactBar from "@/components/ui/MobileContactBar";
import { business } from "@/data/business";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "Demir Oto Kurtarma – Çayırova, Gebze Çekici ve Yol Yardım | 0546 151 77 41",
    template: "%s | Demir Oto Kurtarma",
  },
  description:
    "Çayırova, Şekerpınar, Gebze ve çevresinde 7/24 oto çekici, araç kurtarma ve yol yardım hizmeti. Hızlı, güvenli ve profesyonel. Hemen arayın: 0546 151 77 41",
  keywords: [
    "oto çekici",
    "araç kurtarma",
    "yol yardım",
    "çayırova çekici",
    "gebze çekici",
    "şekerpınar çekici",
    "kocaeli oto kurtarma",
  ],
  authors: [{ name: "Demir Oto Kurtarma" }],
  creator: "Demir Oto Kurtarma",
  publisher: "Demir Oto Kurtarma",
  metadataBase: new URL("https://www.demiroto.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: business.name,
    title: "Demir Oto Kurtarma – Çayırova, Gebze Çekici ve Yol Yardım",
    description:
      "Çayırova, Şekerpınar, Gebze ve çevresinde 7/24 oto çekici ve araç kurtarma hizmeti.",
    images: [
      {
        url: "/hero-truck.png",
        width: 1200,
        height: 630,
        alt: "Demir Oto Kurtarma – Profesyonel Çekici Hizmeti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Demir Oto Kurtarma – Çayırova, Gebze Çekici",
    description:
      "Çayırova, Şekerpınar, Gebze ve çevresinde 7/24 oto çekici ve araç kurtarma hizmeti.",
    images: ["/hero-truck.png"],
  },
  robots: {
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
  verification: {
    google: "",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.demiroto.com/#business",
      name: business.name,
      description: business.description,
      url: "https://www.demiroto.com",
      telephone: business.phoneLink.replace("tel:", ""),
      address: {
        "@type": "PostalAddress",
        streetAddress: `${business.address.building}, ${business.address.neighborhood}, ${business.address.street}`,
        addressLocality: business.address.district,
        addressRegion: business.address.city,
        postalCode: business.address.postalCode,
        addressCountry: "TR",
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
        ratingValue: "5.0",
        reviewCount: "3",
        bestRating: "5",
        worstRating: "1",
      },
      priceRange: "₺₺",
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
    },
    {
      "@type": "WebSite",
      "@id": "https://www.demiroto.com/#website",
      url: "https://www.demiroto.com",
      name: business.name,
      publisher: {
        "@id": "https://www.demiroto.com/#business",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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

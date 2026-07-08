"use client";

import { business } from "@/data/business";

type ServiceSchemaData = {
  title: string;
  locationName?: string;
  description: string;
};

type FAQSchemaData = Array<{
  question: string;
  answer: string;
}>;

interface SchemaMarkupProps {
  type: "LocalBusiness" | "Service" | "FAQPage";
  data?: ServiceSchemaData | FAQSchemaData;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  let schemaData = {};

  if (type === "LocalBusiness") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      "name": business.name,
      "image": "https://www.demiroto.com/images/demir-logo-black-clean.png",
      "@id": "https://www.demirotokurtarma.com",
      "url": "https://www.demirotokurtarma.com",
      "telephone": business.phone,
      "priceRange": "₺₺",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Çayırova, Gebze, Şekerpınar Bölgesi",
        "addressLocality": "Kocaeli",
        "addressRegion": "TR",
        "addressCountry": "TR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.8242,
        "longitude": 29.3789
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    };
  } else if (type === "Service" && data && !Array.isArray(data)) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": data.title,
      "provider": {
        "@type": "AutoRepair",
        "name": business.name
      },
      "areaServed": {
        "@type": "City",
        "name": data.locationName || "Kocaeli"
      },
      "description": data.description
    };
  } else if (type === "FAQPage" && Array.isArray(data)) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

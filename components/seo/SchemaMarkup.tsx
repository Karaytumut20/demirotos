import { business } from "@/data/business";
import { absoluteUrl, safeJsonLd, siteConfig } from "@/app/seo";

type ServiceSchemaData = {
  title: string;
  slug?: string;
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
  let schemaData: Record<string, unknown> | null = null;

  if (type === "LocalBusiness") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "AutomotiveBusiness"],
      "@id": `${siteConfig.url}/#business`,
      name: business.name,
      description: business.description,
      image: absoluteUrl(siteConfig.logo),
      logo: absoluteUrl(siteConfig.logo),
      url: siteConfig.url,
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
          "Sunday"
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
      areaServed: business.serviceArea,
    };
  } else if (type === "Service" && data && !Array.isArray(data)) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": data.slug ? absoluteUrl(`/hizmetler/${data.slug}#service`) : undefined,
      name: data.title,
      serviceType: data.title,
      url: data.slug ? absoluteUrl(`/hizmetler/${data.slug}`) : absoluteUrl("/hizmetler"),
      provider: {
        "@id": `${siteConfig.url}/#business`,
        "@type": ["LocalBusiness", "AutomotiveBusiness"],
        name: business.name,
      },
      areaServed: {
        "@type": "City",
        name: data.locationName || business.serviceArea,
      },
      description: data.description,
    };
  } else if (type === "FAQPage" && Array.isArray(data)) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };
  }

  if (!schemaData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schemaData) }}
    />
  );
}

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { absoluteUrl, safeJsonLd } from "@/app/seo";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ label: "Ana Sayfa", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };

  return (
    <nav aria-label="Sayfa konumu (breadcrumb)">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-slate-500 font-medium">
        {allItems.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <ChevronRight
                size={12}
                strokeWidth={2.5}
                className="text-slate-350"
                aria-hidden="true"
              />
            )}
            {i === 0 && (
              <Home
                size={12.5}
                strokeWidth={2.5}
                className="text-slate-500"
                aria-hidden="true"
              />
            )}
            {item.href && i < allItems.length - 1 ? (
              <Link
                href={item.href}
                className="hover:text-slate-900 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-800 font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

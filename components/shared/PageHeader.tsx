import { Phone } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { business } from "@/data/business";

interface PageHeaderProps {
  breadcrumbs: { label: string; href?: string }[];
  label?: string;
  title: string;
  description?: string;
  showCta?: boolean;
}

export default function PageHeader({
  breadcrumbs,
  label,
  title,
  description,
  showCta = true,
}: PageHeaderProps) {
  return (
    <section className="bg-white border-b border-[#000000]/10 pt-28 pb-12 lg:pt-36 lg:pb-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="mb-6">
          <Breadcrumb items={breadcrumbs} />
        </div>
        {label && (
          <p className="text-[11px] font-bold text-[#09090b] uppercase tracking-widest mb-3 bg-[#f4f4f5] px-3 py-1 rounded-full w-fit">
            {label}
          </p>
        )}
        <h1 className="text-[34px] lg:text-[46px] font-black text-[#000000] leading-tight tracking-tighter mb-4 max-w-[800px]">
          {title}
        </h1>
        {description && (
          <p className="text-[#71717a] text-[15.5px] leading-relaxed max-w-[620px] mb-6">
            {description}
          </p>
        )}
        {showCta && (
          <div className="flex flex-wrap gap-3">
            <a
              href={business.phoneLink}
              className="inline-flex items-center gap-2 px-6 py-4 bg-[#09090b] text-white text-[14px] font-bold rounded-full hover:bg-[#0A1128] transition-colors shadow-sm"
              aria-label={`Ara: ${business.phone}`}
            >
              <Phone size={15} aria-hidden="true" />
              {business.phone}
            </a>
            <a
              href={business.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white text-[13.5px] font-bold rounded-xl hover:bg-[#128c7e] transition-colors shadow-sm"
              aria-label="WhatsApp'tan konum gönder"
            >
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

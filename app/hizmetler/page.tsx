import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, Wrench, Zap, Bike, Package, AlertTriangle } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import { services } from "@/data/services";
import { buildSeoMetadata } from "@/app/seo";
import fs from "fs";
import path from "path";

export const metadata: Metadata = buildSeoMetadata({
  title: "Hizmetlerimiz - Oto Çekici ve Araç Kurtarma",
  description:
    "Çayırova, Gebze ve Şekerpınar bölgesinde oto çekici, oto kurtarma, yol yardım, motosiklet çekici ve araç taşıma hizmetleri. 0546 151 77 41",
  path: "/hizmetler",
  image: "/images/oto-cekici.png",
  keywords: ["oto çekici hizmetleri", "araç kurtarma", "yol yardım"],
});

const iconMap: Record<string, React.ElementType> = {
  Truck,
  Wrench,
  Zap,
  Bike,
  Package,
  AlertTriangle,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Hizmetler" }]}
        label="Hizmetlerimiz"
        title="İhtiyacınız Olan Yol Yardım Hizmeti"
        description="Aracınız arıza yaptığında, kazaya karıştığında veya hareket edemediğinde uygun çekici ve kurtarma desteği sağlıyoruz."
      />

      <section className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] ?? Truck;
              const specificImagePath = path.join(process.cwd(), "public", "images", `${service.slug}.png`);
              const hasSpecificImage = fs.existsSync(specificImagePath);
              const imageSrc = hasSpecificImage 
                ? `/images/${service.slug}.png` 
                : `/images/${service.fallbackImage || "oto-cekici"}.png`;

              return (
                <Link
                  key={service.id}
                  href={`/hizmetler/${service.slug}`}
                  className="group flex flex-col h-full bg-[#f8fafc] border border-[#000000]/5 rounded-[2rem] overflow-hidden hover:bg-[#09090b] transition-colors duration-500"
                  aria-label={`${service.title} hakkında detaylı bilgi`}
                >
                  {/* Card Image */}
                  <div className="relative w-full h-[240px] overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s]"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500" />
                    
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#18181b] transition-colors duration-500">
                      <Icon size={20} strokeWidth={2} className="text-[#09090b] group-hover:text-white transition-colors duration-500" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8 flex flex-col flex-1 relative z-10">
                    <h2 className="text-[24px] font-black text-[#000000] group-hover:text-white transition-colors duration-500 mb-3 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-[15px] text-[#71717a] group-hover:text-[#a1a1aa] transition-colors duration-500 leading-relaxed flex-1 mb-8">
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-[14px] font-bold text-[#09090b] group-hover:text-white transition-all">
                      Detayları incele
                      <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

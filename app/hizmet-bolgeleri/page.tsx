import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import { locations } from "@/data/locations";
import { buildSeoMetadata } from "@/app/seo";
import fs from "fs";
import path from "path";

export const metadata: Metadata = buildSeoMetadata({
  title: "Hizmet Bölgeleri - Gebze, Çayırova, Tuzla, Pendik, Körfez ve Çevresi",
  description:
    "Gebze, Çayırova, Darıca, Dilovası, Tuzla, Şekerpınar, Pendik, Körfez ve Kocaeli genelinde 7/24 oto çekici ve yol yardım hizmeti. Bölgenizi seçin.",
  path: "/hizmet-bolgeleri",
  image: "/images/cayirova.png",
  keywords: [
    "Çayırova çekici",
    "Gebze çekici",
    "Darıca çekici",
    "Dilovası çekici",
    "Şekerpınar çekici",
    "Tuzla çekici",
    "Pendik çekici",
    "Körfez çekici",
  ],
});

export default function ServiceAreasPage() {
  const ilceler = locations.filter((l) => l.type === "ilce");
  const mahalleler = locations.filter((l) => l.type !== "ilce");

  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Hizmet Bölgeleri" }]}
        label="Kapsama Alanı"
        title="Size Yakın Bölgelerde Hizmet"
        description="Çayırova, Gebze, Darıca ve çevre tüm ilçe ve mahallelerde oto çekici, araç kurtarma ve yol yardım hizmeti sunuyoruz."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Districts (with images) */}
          <div className="mb-20">
            <h2 className="text-[32px] lg:text-[40px] font-black text-[#000000] tracking-tighter mb-4">
              Ana Oto Çekici Hizmet Bölgelerimiz
            </h2>
            <p className="text-[#71717a] text-[16px] mb-10 max-w-[600px] leading-relaxed font-medium">
              Aşağıdaki ilçelerde 7/24 oto kurtarma ve çekici hizmetimiz en hızlı şekilde (ortalama 20 dk) mevcuttur.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {ilceler.map((loc) => {
                const specificImagePath = path.join(process.cwd(), "public", "images", `${loc.slug}.png`);
                const hasSpecificImage = fs.existsSync(specificImagePath);
                const imageSrc = hasSpecificImage 
                  ? `/images/${loc.slug}.png` 
                  : `/images/${loc.fallbackImage || "gebze"}.png`;

                return (
                  <Link
                    key={loc.id}
                    href={`/hizmet-bolgeleri/${loc.slug}`}
                    className="group flex flex-col h-full bg-[#f8fafc] border border-[#000000]/5 rounded-[2rem] overflow-hidden hover:bg-[#09090b] transition-colors duration-500"
                    aria-label={`${loc.name} hizmet bölgesi detayları`}
                  >
                    <div className="relative w-full h-[240px] overflow-hidden">
                      <Image
                        src={imageSrc}
                      alt={loc.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:bg-black/60 transition-colors duration-500" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                        <MapPin size={18} className="text-white" />
                      </div>
                      <h3 className="text-[24px] font-black text-white tracking-tight">
                        {loc.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1 relative z-10">
                    <p className="text-[15px] text-[#71717a] group-hover:text-[#a1a1aa] transition-colors duration-500 leading-relaxed flex-1 mb-8">
                      {loc.intro}
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

          {/* Neighborhoods (Pills style) */}
          <div className="bg-[#f8fafc] rounded-[2rem] p-8 lg:p-12 border border-[#000000]/5">
            <h2 className="text-[28px] lg:text-[32px] font-black text-[#000000] tracking-tighter mb-4">
              Mahalle ve Diğer Bölgeler
            </h2>
            <p className="text-[#71717a] text-[16px] mb-8 font-medium">
              Aşağıdaki alt mahallelere de doğrudan ve kesintisiz hizmet sağlıyoruz.
            </p>
            <div className="flex flex-wrap gap-3">
              {mahalleler.map((loc) => (
                <Link
                  key={loc.id}
                  href={`/hizmet-bolgeleri/${loc.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-[#000000]/10 rounded-full text-[15px] font-bold text-[#09090b] hover:border-[#000000] hover:shadow-sm transition-all duration-300 group"
                  aria-label={`${loc.name} hizmet bölgesi`}
                >
                  <MapPin size={16} className="text-[#000000]/40 group-hover:text-[#000000] transition-colors" />
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

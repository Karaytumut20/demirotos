import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, ArrowUpRight, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import FAQSection from "@/components/sections/FAQ";
import { locations, getLocationBySlug } from "@/data/locations";
import { services } from "@/data/services";
import { business } from "@/data/business";
import { faqs } from "@/data/faqs";
import { buildSeoMetadata } from "@/app/seo";
import fs from "fs";
import path from "path";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

function getLocationImage(location: (typeof locations)[number]) {
  const specificImagePath = path.join(process.cwd(), "public", "images", `${location.slug}.png`);
  const hasSpecificImage = fs.existsSync(specificImagePath);

  return hasSpecificImage
    ? `/images/${location.slug}.png`
    : `/images/${location.fallbackImage || "gebze"}.png`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return buildSeoMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/hizmet-bolgeleri/${slug}`,
    image: getLocationImage(location),
    keywords: [`${location.name} çekici`, `${location.name} oto kurtarma`, `${location.name} yol yardım`],
  });
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const nearby = location.nearbyLocations
    .map((id) => locations.find((l) => l.id === id))
    .filter(Boolean) as typeof locations;

  const locationFaqs = faqs.slice(0, 5);

  const imageSrc = getLocationImage(location);

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Hizmet Bölgeleri", href: "/hizmet-bolgeleri" },
          { label: location.name },
        ]}
        label="Hizmet Bölgesi"
        title={location.h1}
        description={location.intro}
      />

      {/* Main Content Area */}
      <div className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Banner Image for the Location */}
          <div className="relative w-full h-[300px] lg:h-[500px] rounded-[2rem] overflow-hidden mb-16 lg:mb-24 shadow-bento group">
            <Image
              src={imageSrc}
              alt={`${location.name} Oto Çekici`}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s]"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                <MapPin size={28} className="text-[#09090b]" />
              </div>
              <div>
                <p className="text-white font-black text-[28px] lg:text-[40px] leading-none tracking-tighter shadow-sm">{location.name}</p>
                <p className="text-white/80 font-medium text-[16px] lg:text-[18px] mt-1">7/24 Kesintisiz Operasyon</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-20">
            {/* Main Article */}
            <div className="space-y-16">
              
              {/* Description */}
              <section aria-labelledby="location-desc-heading">
                <h2
                  id="location-desc-heading"
                  className="text-[32px] lg:text-[40px] font-black text-[#000000] leading-tight tracking-tighter mb-6"
                >
                  {location.name} Oto Çekici Hizmeti
                </h2>
                <div className="prose prose-lg prose-slate max-w-none text-[#27272a] leading-relaxed font-medium mb-8">
                  <p>{location.description}</p>
                </div>

                {location.seoBody && (
                  <div 
                    className="prose prose-lg prose-headings:font-black prose-headings:text-[#000000] prose-headings:tracking-tight prose-p:text-[#27272a] prose-p:font-medium prose-p:leading-relaxed max-w-none"
                    dangerouslySetInnerHTML={{ __html: location.seoBody }}
                  />
                )}
              </section>

              {/* Extra Section: Process Cards */}
              <section aria-labelledby="process-heading" className="bg-[#f8fafc] rounded-[2rem] p-8 lg:p-12 border border-[#000000]/5">
                <h2
                  id="process-heading"
                  className="text-[28px] lg:text-[32px] font-black text-[#000000] leading-tight tracking-tighter mb-8"
                >
                  Sürecimiz Nasıl İşler?
                </h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {[
                    { title: "1. Konum Bildirimi", desc: "WhatsApp üzerinden konumunuzu saniyeler içinde bize iletin." },
                    { title: "2. Hızlı Yönlendirme", desc: "Size en yakın olan hazır kıta çekicimiz derhal yola çıkar." },
                    { title: "3. Güvenli Taşıma", desc: "Aracınız kaskolu bir şekilde istediğiniz noktaya teslim edilir." }
                  ].map((step, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 shadow-super-subtle">
                      <p className="font-black text-[#000000] text-[18px] mb-3 tracking-tight">{step.title}</p>
                      <p className="text-[#71717a] font-medium text-[15px]">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Services offered */}
              <section aria-labelledby="location-services-heading">
                <h2
                  id="location-services-heading"
                  className="text-[32px] lg:text-[40px] font-black text-[#000000] leading-tight tracking-tighter mb-8"
                >
                  {location.name}&apos;da Sunduğumuz Hizmetler
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/hizmetler/${service.slug}`}
                      className="group flex items-center justify-between px-6 py-5 bg-white border border-[#000000]/10 rounded-[1.5rem] hover:border-[#000000] hover:shadow-bento transition-all duration-300"
                      aria-label={`${service.title} detayları`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#000000]" aria-hidden="true" />
                        <span className="text-[16px] font-bold text-[#09090b]">{service.title}</span>
                      </div>
                      <ArrowUpRight size={18} className="text-[#000000]/40 group-hover:text-[#000000] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </section>

              {/* Nearby */}
              {nearby.length > 0 && (
                <section aria-labelledby="nearby-heading">
                  <h2
                    id="nearby-heading"
                    className="text-[24px] lg:text-[28px] font-black text-[#000000] leading-tight tracking-tighter mb-6"
                  >
                    Yakındaki Diğer Bölgeler
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {nearby.map((loc) => (
                      <Link
                        key={loc.id}
                        href={`/hizmet-bolgeleri/${loc.slug}`}
                        className="inline-flex items-center px-6 py-3 bg-[#f8fafc] rounded-full text-[15px] font-bold text-[#71717a] hover:bg-[#09090b] hover:text-white transition-colors"
                      >
                        {loc.name}
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Premium Sidebar */}
            <aside aria-label="İletişim bilgileri" className="relative">
              <div className="sticky top-32">
                <div className="bg-[#09090b] rounded-[2rem] p-8 lg:p-10 shadow-bento relative overflow-hidden">
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#0A1128] rounded-full blur-[80px] pointer-events-none opacity-60" />
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
                      <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                      <span className="text-[11px] font-bold text-white tracking-widest uppercase">7/24 Aktif</span>
                    </div>

                    <h3 className="text-[28px] font-black text-white leading-tight tracking-tighter mb-4">
                      {location.name} İçin <br />Hemen Ulaşın
                    </h3>
                    <p className="text-[15px] text-[#a1a1aa] font-medium mb-10 leading-relaxed">
                      Dakikalar içinde yanınızda olmak için hazır bekliyoruz. Bizi arayın veya konum atın.
                    </p>
                    
                    <div className="space-y-4">
                      <a
                        href={business.phoneLink}
                        className="group flex items-center justify-between w-full p-5 bg-white text-[#09090b] rounded-2xl hover:bg-[#e4e4e7] transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Phone size={20} />
                          <span className="text-[16px] font-bold">Telefonla Ara</span>
                        </div>
                        <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                      
                      <a
                        href={business.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between w-full p-5 bg-[#25D366] text-white rounded-2xl hover:bg-[#128c7e] transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[16px] font-bold">WhatsApp&apos;tan Yaz</span>
                        </div>
                        <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <FAQSection items={locationFaqs} />

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-[#000000] relative overflow-hidden" aria-labelledby="service-cta-heading">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2
            id="service-cta-heading"
            className="text-[40px] lg:text-[60px] font-black text-white tracking-tighter mb-6"
          >
            {location.name} Bölgesinde Yolda Mı Kaldınız?
          </h2>
          <p className="text-[#a1a1aa] text-[18px] lg:text-[22px] font-medium mb-12">
            Zaman kaybetmeyin. Konumunuzu gönderin, en hızlı şekilde yanınıza gelelim.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={business.phoneLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-white text-[#09090b] text-[16px] font-bold rounded-full hover:bg-[#e4e4e7] transition-colors w-full sm:w-auto"
            >
              <Phone size={18} />
              {business.phone}
            </a>
            <a
              href={business.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-[#25D366] text-white text-[16px] font-bold rounded-full hover:bg-[#128c7e] transition-colors w-full sm:w-auto"
            >
              Konum Gönder
              <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* SEO Schema Injection */}
      <SchemaMarkup type="LocalBusiness" />
    </>
  );
}

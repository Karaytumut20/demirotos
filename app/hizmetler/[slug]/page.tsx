import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, Check, ChevronRight, ArrowUpRight, Wrench } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import FAQSection from "@/components/sections/FAQ";
import { services, getServiceBySlug } from "@/data/services";
import { business } from "@/data/business";
import { faqs } from "@/data/faqs";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { buildSeoMetadata } from "@/app/seo";
import fs from "fs";
import path from "path";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

function getServiceImage(service: (typeof services)[number]) {
  const specificImagePath = path.join(process.cwd(), "public", "images", `${service.slug}.png`);
  const hasSpecificImage = fs.existsSync(specificImagePath);

  return hasSpecificImage
    ? `/images/${service.slug}.png`
    : `/images/${service.fallbackImage || "oto-cekici"}.png`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildSeoMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/hizmetler/${slug}`,
    image: getServiceImage(service),
    keywords: [service.title, `${service.title} Çayırova`, `${service.title} Gebze`],
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceFaqs = service.faqs.length > 0 ? service.faqs : faqs.slice(0, 4);

  const imageSrc = getServiceImage(service);

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Hizmetler", href: "/hizmetler" },
          { label: service.title },
        ]}
        label="Hizmet Detayı"
        title={service.title}
        description={service.shortDescription}
      />

      {/* Main Content */}
      <div className="py-16 lg:py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Banner Image for the Service */}
          <div className="relative w-full h-[300px] lg:h-[500px] rounded-[2rem] overflow-hidden mb-16 lg:mb-24 shadow-bento group">
            <Image
              src={imageSrc}
              alt={`${service.title} - Demir Oto Kurtarma`}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s]"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                <Wrench size={28} className="text-[#09090b]" />
              </div>
              <div>
                <p className="text-white font-black text-[28px] lg:text-[40px] leading-none tracking-tighter shadow-sm">{service.title}</p>
                <p className="text-white/80 font-medium text-[16px] lg:text-[18px] mt-1">Profesyonel Müdahale</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-20">
            {/* Content */}
            <div className="space-y-16">
              {/* Description */}
              <section aria-labelledby="service-desc-heading">
                <h2
                  id="service-desc-heading"
                  className="text-[32px] lg:text-[40px] font-black text-[#000000] leading-tight tracking-tighter mb-6"
                >
                  {service.title} Nedir?
                </h2>
                <div className="prose prose-lg prose-slate max-w-none text-[#27272a] leading-relaxed font-medium mb-8">
                  <p>{service.description}</p>
                </div>

                {service.seoBody && (
                  <div 
                    className="prose prose-lg prose-headings:font-black prose-headings:text-[#000000] prose-headings:tracking-tight prose-p:text-[#27272a] prose-p:font-medium prose-p:leading-relaxed max-w-none"
                    dangerouslySetInnerHTML={{ __html: service.seoBody }}
                  />
                )}
              </section>

              {/* Use Cases - Premium List */}
              {service.useCases.length > 0 && (
                <section aria-labelledby="use-cases-heading">
                  <h2
                    id="use-cases-heading"
                    className="text-[28px] lg:text-[32px] font-black text-[#000000] leading-tight tracking-tighter mb-8"
                  >
                    Hangi Durumlarda Gerekir?
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.useCases.map((uc, i) => (
                      <div key={i} className="flex items-start gap-4 p-5 bg-[#f8fafc] rounded-2xl border border-[#000000]/5">
                        <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check size={16} strokeWidth={3} className="text-[#000000]" aria-hidden="true" />
                        </div>
                        <span className="text-[15px] font-semibold text-[#27272a] pt-1">{uc}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* How it works - Numbered Giant Cards */}
              {service.howItWorks.length > 0 && (
                <section aria-labelledby="how-works-heading">
                  <h2
                    id="how-works-heading"
                    className="text-[28px] lg:text-[32px] font-black text-[#000000] leading-tight tracking-tighter mb-8"
                  >
                    Nasıl Çalışır?
                  </h2>
                  <div className="space-y-4">
                    {service.howItWorks.map((step, i) => (
                      <div key={i} className="flex items-start gap-6 p-6 bg-white border border-[#000000]/10 rounded-[1.5rem] hover:shadow-bento transition-shadow">
                        <div className="text-[40px] font-black text-[#e4e4e7] leading-none tracking-tighter mt-1">
                          0{i + 1}
                        </div>
                        <p className="text-[16px] font-semibold text-[#09090b] leading-relaxed pt-3">{step}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Service Areas for this service */}
              <section aria-labelledby="service-areas-heading" className="bg-[#f8fafc] rounded-[2rem] p-8 lg:p-10 border border-[#000000]/5">
                <h2
                  id="service-areas-heading"
                  className="text-[24px] lg:text-[28px] font-black text-[#000000] leading-tight tracking-tighter mb-4"
                >
                  Hizmet Bölgeleri
                </h2>
                <p className="text-[#71717a] text-[15px] font-medium leading-relaxed mb-6">
                  Bu hizmetimiz başta Çayırova, Şekerpınar ve Gebze olmak üzere çevre tüm ilçe ve mahallelerde 7/24 sunulmaktadır.
                </p>
                <Link
                  href="/hizmet-bolgeleri"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#09090b] text-white text-[14px] font-bold rounded-full hover:bg-[#0A1128] transition-colors"
                >
                  Tüm Bölgeleri Gör
                  <ArrowUpRight size={16} />
                </Link>
              </section>
            </div>

            {/* Premium Sidebar */}
            <aside aria-label="İletişim bilgileri" className="relative">
              <div className="sticky top-32">
                <div className="bg-[#09090b] rounded-[2rem] p-8 lg:p-10 shadow-bento relative overflow-hidden">
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#0A1128] rounded-full blur-[80px] pointer-events-none opacity-60" />
                  
                  <div className="relative z-10">
                    <h3 className="text-[28px] font-black text-white leading-tight tracking-tighter mb-4">
                      Hemen<br />Yardım Alın
                    </h3>
                    <p className="text-[15px] text-[#a1a1aa] font-medium mb-8 leading-relaxed">
                      Aracınız için 7/24 hizmetinizdeyiz. Profesyonel ekibimiz bir telefon uzağınızda.
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

                {/* Other Services Link block */}
                <div className="mt-8 bg-[#f8fafc] rounded-[2rem] p-8 border border-[#000000]/5">
                  <p className="text-[12px] font-bold text-[#71717a] uppercase tracking-widest mb-4">
                    Diğer Hizmetler
                  </p>
                  <ul className="space-y-3">
                    {services
                      .filter((s) => s.id !== service.id)
                      .map((s) => (
                        <li key={s.id}>
                          <Link
                            href={`/hizmetler/${s.slug}`}
                            className="group flex items-center justify-between text-[14px] font-semibold text-[#27272a] hover:text-[#09090b] transition-colors"
                          >
                            <span>{s.title}</span>
                            <ChevronRight size={16} className="text-[#a1a1aa] group-hover:text-[#09090b] transition-colors" />
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* FAQ for service */}
      {serviceFaqs.length > 0 && (
        <FAQSection items={serviceFaqs} />
      )}

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-[#000000] relative overflow-hidden" aria-labelledby="service-cta-heading">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2
            id="service-cta-heading"
            className="text-[40px] lg:text-[60px] font-black text-white tracking-tighter mb-6"
          >
            {service.title} İçin Bize Ulaşın
          </h2>
          <p className="text-[#a1a1aa] text-[18px] lg:text-[22px] font-medium mb-12">
            7/24 hizmetinizdeyiz. Konumunuzu paylaşın, en hızlı şekilde yardımcı olalım.
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
      <SchemaMarkup type="Service" data={service} />
      <SchemaMarkup type="FAQPage" data={serviceFaqs} />
    </>
  );
}

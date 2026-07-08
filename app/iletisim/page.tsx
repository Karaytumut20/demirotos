import type { Metadata } from "next";
import { Phone, MapPin, Clock } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import { business } from "@/data/business";
import { buildSeoMetadata } from "@/app/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "İletişim - Demir Oto Kurtarma | 0546 151 77 41",
  description:
    "Demir Oto Kurtarma iletişim bilgileri. 7/24 oto çekici için hemen arayın: 0546 151 77 41. Çayırova, Şekerpınar, Gebze hizmet bölgesi.",
  path: "/iletisim",
  image: "/images/demir-logo-black-clean.png",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "İletişim" }]}
        label="İletişim"
        title="Bize Ulaşın"
        description="7/24 telefon veya WhatsApp üzerinden ulaşabilirsiniz. Aracınızın konumunu ve durumunu paylaşın, size en hızlı şekilde yardımcı olalım."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8">
              <h2 className="text-[22px] font-bold text-[#0A0A0A] mb-7">
                {business.name}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#F6F6F6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={18} strokeWidth={1.75} className="text-[#102A43]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[12px] text-[#5F6368] mb-1.5 font-medium uppercase tracking-wide">
                      Telefon
                    </p>
                    <a
                      href={business.phoneLink}
                      className="text-[18px] font-bold text-[#0A0A0A] hover:text-[#102A43] transition-colors"
                      aria-label={`Ara: ${business.phone}`}
                    >
                      {business.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#F6F6F6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} strokeWidth={1.75} className="text-[#102A43]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[12px] text-[#5F6368] mb-1.5 font-medium uppercase tracking-wide">
                      Adres
                    </p>
                    <address className="text-[15px] text-[#0A0A0A] not-italic leading-relaxed">
                      {business.address.full}
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-[#F6F6F6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={18} strokeWidth={1.75} className="text-[#102A43]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[12px] text-[#5F6368] mb-1.5 font-medium uppercase tracking-wide">
                      Çalışma Saatleri
                    </p>
                    <p className="text-[16px] font-bold text-[#0A0A0A]">
                      {business.workingHours}
                    </p>
                    <p className="text-[13px] text-[#5F6368] mt-0.5">
                      Pazartesi – Pazar dahil her gün
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 mt-8 pt-8 border-t border-[#E5E5E5]">
                <a
                  href={business.phoneLink}
                  id="contact-page-call-btn"
                  className="flex items-center justify-center gap-2.5 py-4 bg-[#0A0A0A] text-white text-[15px] font-semibold rounded-xl hover:bg-[#171717] transition-colors"
                  aria-label={`Ara: ${business.phone}`}
                >
                  <Phone size={16} aria-hidden="true" />
                  Şimdi Ara
                </a>
                <a
                  href={business.whatsappLink}
                  id="contact-page-whatsapp-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 py-4 bg-[#25D366] text-white text-[15px] font-semibold rounded-xl hover:bg-[#1eb558] transition-colors"
                  aria-label="WhatsApp'tan mesaj gönder"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp&apos;tan Yaz
                </a>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 py-4 bg-white border border-[#E5E5E5] text-[#0A0A0A] text-[15px] font-semibold rounded-xl hover:bg-[#F6F6F6] transition-colors"
                  aria-label="Google Haritalar'da yol tarifi al"
                >
                  <MapPin size={16} aria-hidden="true" />
                  Yol Tarifi Al
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-[#E5E5E5] min-h-[500px] bg-[#F6F6F6]">
              <iframe
                src={business.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ minHeight: "500px", border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Demir Oto Kurtarma Konumu"
                aria-label="Demir Oto Kurtarma harita konumu"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

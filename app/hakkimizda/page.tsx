import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Check } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import { business } from "@/data/business";
import { buildSeoMetadata } from "@/app/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Hakkımızda - Demir Oto Kurtarma",
  description:
    "Demir Oto Kurtarma hakkında bilgi. Çayırova, Şekerpınar ve Gebze bölgesinde güvenilir oto çekici ve araç kurtarma hizmeti.",
  path: "/hakkimizda",
  image: "/why-us.png",
});

const values = [
  "Her araç için güvenli yükleme ve taşıma",
  "Açık ve hızlı iletişim",
  "Bölge yollarına hâkim hizmet",
  "Telefon ve WhatsApp üzerinden kolay erişim",
  "Araç türüne uygun yönlendirme",
  "Kaza ve acil durumlarda hızlı müdahale",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Hakkımızda" }]}
        label="Hakkımızda"
        title="Çayırova ve Gebze'de Güvenilir Oto Kurtarma"
        description="Demir Oto Kurtarma olarak Şekerpınar, Çayırova, Gebze ve çevre bölgelerde profesyonel oto çekici ve araç kurtarma hizmeti sunuyoruz."
        showCta={false}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#F6F6F6] relative">
              <Image
                src="/why-us.png"
                alt="Demir Oto Kurtarma ekibi – profesyonel yol yardım"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-[28px] lg:text-[36px] font-extrabold text-[#0A0A0A] leading-tight tracking-tight mb-5">
                Aracınıza Kendi Aracımız Gibi Yaklaşıyoruz
              </h2>
              <p className="text-[#5F6368] text-[16px] leading-relaxed mb-6">
                Demir Oto Kurtarma; Şekerpınar, Çayırova, Gebze ve çevre
                bölgelerde oto çekici, araç kurtarma ve yol yardım hizmeti
                sunar. Aracınızın güvenli şekilde alınması ve uygun noktaya
                taşınması için telefon veya WhatsApp üzerinden kolayca
                iletişim kurabilirsiniz.
              </p>
              <p className="text-[#5F6368] text-[16px] leading-relaxed mb-8">
                Her müşteri için güven, şeffaflık ve hız ilkesiyle hareket
                ediyoruz. Araç türü ve durumuna göre doğru hizmeti sunmak
                için gerekli ekipman ve deneyime sahibiz.
              </p>

              <ul className="space-y-3 mb-8">
                {values.map((v) => (
                  <li key={v} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#102A43] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} className="text-white" aria-hidden="true" />
                    </div>
                    <span className="text-[15px] text-[#0A0A0A]">{v}</span>
                  </li>
                ))}
              </ul>

              <a
                href={business.phoneLink}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0A0A0A] text-white text-[14px] font-semibold rounded-xl hover:bg-[#171717] transition-colors"
                aria-label={`Ara: ${business.phone}`}
              >
                <Phone size={15} aria-hidden="true" />
                {business.phone}&apos;i Ara
              </a>
            </div>
          </div>

          {/* Service Area Info */}
          <div className="bg-[#F6F6F6] border border-[#E5E5E5] rounded-2xl p-8 lg:p-10">
            <div className="max-w-[700px]">
              <h2 className="text-[24px] font-bold text-[#0A0A0A] mb-4">
                Hizmet Bölgemiz
              </h2>
              <p className="text-[#5F6368] text-[15px] leading-relaxed">
                Merkezimiz Şekerpınar&apos;da bulunmaktadır. Başta Çayırova,
                Gebze, Darıca ve Dilovası olmak üzere Kocaeli&apos;nin geniş
                bir bölgesine hizmet veriyoruz. Kuzey Marmara Otoyolu
                güzergahındaki noktalara da ulaşım sağlıyoruz. Hizmet
                verdiğimiz tüm bölgeleri incelemek için{" "}
                <Link
                  href="/hizmet-bolgeleri"
                  className="text-[#102A43] font-semibold hover:underline"
                >
                  Hizmet Bölgelerimiz
                </Link>{" "}
                sayfasını ziyaret edebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

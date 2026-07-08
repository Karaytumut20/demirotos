import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni – Demir Oto Kurtarma",
  description:
    "Demir Oto Kurtarma KVKK aydınlatma metni. Kişisel verilerin korunması kanunu kapsamında haklarınız ve bilgilendirme.",
  alternates: { canonical: "/kvkk" },
};

export default function KvkkPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "KVKK" }]}
        label="Sözleşmeler"
        title="KVKK Aydınlatma Metni"
        description="6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca kişisel verilerinizin işlenme amaçları ve haklarınız hakkında bilgilendirme."
        showCta={false}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="prose prose-slate max-w-none space-y-8 text-[#2D3748]">
            <div>
              <h2 className="text-[22px] font-bold text-[#0A0A0A] mb-3">1. Veri Sorumlusu</h2>
              <p className="leading-relaxed">
                6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) uyarınca, kişisel verileriniz veri sorumlusu olarak <strong>{business.name}</strong> tarafından aşağıda açıklanan kapsamda işlenebilecektir.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-[#0A0A0A] mb-3">2. Kişisel Verilerin İşlenme Amacı</h2>
              <p className="leading-relaxed">
                Toplanan kişisel verileriniz (ad-soyad, telefon numarası, konum bilgisi); yol yardım, oto kurtarma, araç çekici faaliyetlerinin yürütülmesi ve acil yardım süreçlerinin kesintisiz yönetilmesi amacıyla KVKK&apos;nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları dahilinde işlenmektedir.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-[#0A0A0A] mb-3">3. İşlenen Kişisel Verilerin Aktarılması</h2>
              <p className="leading-relaxed">
                Kişisel verileriniz; çekici ve acil yardım hizmetinin ifası için gerekli olan operasyonel iş ortaklarımız (yönlendirilen yedek çekici şoförleri vb.) ve yasal yükümlülüklerin yerine getirilmesi amacıyla yetkili kamu kurum ve kuruluşları dışında hiçbir üçüncü tarafa aktarılmamaktadır.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-[#0A0A0A] mb-3">4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
              <p className="leading-relaxed">
                Kişisel verileriniz, web sitemiz üzerindeki butonlar, iletişim formları, telefon aramaları veya WhatsApp yazışmaları aracılığıyla tamamen sözleşmenin kurulması ve ifası hukuki sebebine dayalı olarak elektronik ortamda toplanmaktadır.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-[#0A0A0A] mb-3">5. Kişisel Veri Sahibinin Hakları</h2>
              <p className="leading-relaxed">
                KVKK&apos;nın 11. maddesi uyarınca veri sahibi olarak; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt ikinci derece aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini isteme ve verilerinizin silinmesini talep etme haklarına sahipsiniz.
              </p>
              <p className="leading-relaxed mt-2">
                Bu haklarınızı kullanmak için taleplerinizi yazılı olarak veya kayıtlı telefon numaramız üzerinden veri sorumlusuna iletebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

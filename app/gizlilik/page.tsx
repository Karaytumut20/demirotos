import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Gizlilik Politikası – Demir Oto Kurtarma",
  description:
    "Demir Oto Kurtarma gizlilik politikası. Kullanıcı verilerinin nasıl işlendiği, korunduğu ve kullanıldığı hakkında bilgiler.",
  alternates: { canonical: "/gizlilik" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Gizlilik Politikası" }]}
        label="Sözleşmeler"
        title="Gizlilik Politikası"
        description="Demir Oto Kurtarma olarak kişisel verilerinizin gizliliğine ve güvenliğine önem veriyoruz. Bu politika, web sitemizi ziyaret ettiğinizde toplanan verileri açıklar."
        showCta={false}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="prose prose-slate max-w-none space-y-8 text-[#2D3748]">
            <div>
              <h2 className="text-[22px] font-bold text-[#0A0A0A] mb-3">1. Toplanan Veriler</h2>
              <p className="leading-relaxed">
                Demir Oto Kurtarma olarak, size daha iyi yol yardım ve çekici hizmeti sunabilmek adına web sitemiz üzerinden bazı kişisel bilgileri talep edebiliriz. Bu bilgiler şunları içerebilir:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Adınız ve soyadınız (iletişim formu doldurulduğunda veya doğrudan aramalarda)</li>
                <li>Telefon numaranız (hizmet talebi için)</li>
                <li>Konum bilginiz (çekici gönderimi için WhatsApp veya tarayıcı üzerinden paylaştığınızda)</li>
                <li>E-posta adresiniz</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-[#0A0A0A] mb-3">2. Verilerin Kullanım Amacı</h2>
              <p className="leading-relaxed">
                Toplanan kişisel verileriniz yalnızca aşağıdaki amaçlarla kullanılmaktadır:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Oto çekici, araç kurtarma ve yol yardım taleplerinizi yanıtlamak ve yönetmek,</li>
                <li>Size en yakın çekici aracını yönlendirebilmek için konum tespiti yapmak,</li>
                <li>Acil durumlarda sizinle doğrudan telefon veya mesaj yoluyla iletişim kurmak.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-[#0A0A0A] mb-3">3. Veri Güvenliği</h2>
              <p className="leading-relaxed">
                Kişisel verilerinizin güvenliğini sağlamak amacıyla gerekli teknik ve idari tedbirler alınmaktadır. Verileriniz, yasal zorunluluklar haricinde hiçbir şekilde üçüncü şahıslarla paylaşılmaz veya satılmaz.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-[#0A0A0A] mb-3">4. Çerezler (Cookies)</h2>
              <p className="leading-relaxed">
                Web sitemizde, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek amacıyla çerezler kullanılmaktadır. Tarayıcı ayarlarınız üzerinden çerez kullanımını kısıtlayabilir veya engelleyebilirsiniz.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-[#0A0A0A] mb-3">5. İletişim</h2>
              <p className="leading-relaxed">
                Gizlilik politikamız hakkında sorularınız veya verilerinizin güncellenmesi talepleriniz için bizimle her zaman iletişime geçebilirsiniz:
              </p>
              <p className="mt-3 font-semibold text-[#0A0A0A]">
                {business.name} <br />
                Telefon: <a href={business.phoneLink} className="text-[#102A43] hover:underline">{business.phone}</a> <br />
                Adres: {business.address.full}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

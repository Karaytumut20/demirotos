import type { Metadata } from "next";
import { Star } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import { reviews } from "@/data/reviews";
import { buildSeoMetadata } from "@/app/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Müşteri Yorumları - Demir Oto Kurtarma",
  description:
    "Demir Oto Kurtarma müşteri yorumları. 5,0 Google puanı. Çayırova, Gebze ve Şekerpınar bölgesindeki gerçek müşteri deneyimleri.",
  path: "/yorumlar",
  image: "/images/demir-logo-black-clean.png",
});

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Yorumlar" }]}
        label="Müşteri Yorumları"
        title="Müşterilerimiz Ne Diyor?"
        description="Gerçek müşteri yorumları. Çayırova, Gebze ve çevresinde hizmet verdiğimiz kişilerin deneyimleri."
        showCta={false}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Rating Summary */}
          <div className="flex items-center gap-6 mb-12 p-6 bg-[#F6F6F6] border border-[#E5E5E5] rounded-2xl w-fit">
            <div className="text-center">
              <p className="text-[48px] font-extrabold text-[#0A0A0A] leading-none">5,0</p>
              <div className="flex gap-0.5 mt-2 justify-center" aria-label="5 yıldız">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#F59E0B" stroke="none" aria-hidden="true" />
                ))}
              </div>
              <p className="text-[12px] text-[#5F6368] mt-1">Google Puanı</p>
            </div>
            <div className="w-px h-16 bg-[#E5E5E5]" aria-hidden="true" />
            <div>
              <p className="text-[15px] font-semibold text-[#0A0A0A]">
                {reviews.length} Değerlendirme
              </p>
              <p className="text-[13px] text-[#5F6368]">Gerçek müşteri yorumları</p>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review) => (
              <article
                key={review.id}
                className="bg-white border border-[#E5E5E5] rounded-xl p-6"
                aria-label={`${review.name} yorumu`}
              >
                <div className="flex gap-0.5 mb-4" aria-label={`${review.rating} yıldız`}>
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={14} fill="#F59E0B" stroke="none" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-[14px] text-[#0A0A0A] leading-relaxed mb-5 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#F6F6F6]">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full bg-[#102A43] flex items-center justify-center text-white text-[13px] font-bold"
                      aria-hidden="true"
                    >
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-[#0A0A0A]">
                        {review.name}
                      </p>
                      {review.location && (
                        <p className="text-[11px] text-[#5F6368]">{review.location}</p>
                      )}
                    </div>
                  </div>
                  <span className="text-[11px] text-[#5F6368]">{review.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

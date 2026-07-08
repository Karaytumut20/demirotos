import Link from "next/link";
import { Phone, Home } from "lucide-react";
import { business } from "@/data/business";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-[480px]">
        <div className="w-16 h-16 bg-[#F6F6F6] border border-[#E5E5E5] rounded-2xl flex items-center justify-center mx-auto mb-6">
          <span className="text-[28px] font-extrabold text-[#102A43]">404</span>
        </div>
        <h1 className="text-[32px] font-extrabold text-[#0A0A0A] mb-3 tracking-tight">
          Sayfa Bulunamadı
        </h1>
        <p className="text-[#5F6368] text-[16px] leading-relaxed mb-8">
          Aradığınız sayfa mevcut değil. Ana sayfaya dönebilir ya da bize
          ulaşabilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0A0A0A] text-white text-[14px] font-semibold rounded-xl hover:bg-[#171717] transition-colors"
          >
            <Home size={15} aria-hidden="true" />
            Ana Sayfaya Dön
          </Link>
          <a
            href={business.phoneLink}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#E5E5E5] text-[#0A0A0A] text-[14px] font-semibold rounded-xl hover:bg-[#F6F6F6] transition-colors"
            aria-label={`Ara: ${business.phone}`}
          >
            <Phone size={15} aria-hidden="true" />
            Bizi Ara
          </a>
        </div>
      </div>
    </div>
  );
}

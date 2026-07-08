import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { footerLocations } from "@/data/locations";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            {/* Custom Designed Tow Truck Logo in Footer */}
            <Link href="/" className="inline-block" aria-label="Ana Sayfa">
              <div className="flex items-center gap-2.5 animate-pulse-subtle">
                <img
                  src="/images/logo.png"
                  alt="Demir Oto Kurtarma Logo"
                  className="w-11 h-11 object-contain"
                />
                <div className="flex flex-col text-left">
                  <span className="text-white font-black text-[18px] tracking-tight leading-none uppercase">
                    DEMİR
                  </span>
                  <span className="text-[10px] font-bold text-white tracking-[0.2em] leading-none mt-1">
                    OTO KURTARMA
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-white/60 text-[14px] leading-relaxed mb-6">
              Yılların tecrübesiyle, aracınızla yolda kaldığınız her an yanınızdayız. Hızlı, güvenilir ve uygun fiyatlı çekici hizmeti.
            </p>
            <div className="space-y-3">
              <a
                href={business.phoneLink}
                className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors text-[14px] group"
                aria-label={`Telefon: ${business.phone}`}
              >
                <Phone size={14} className="text-white/40 group-hover:text-white/70 transition-colors" />
                {business.phone}
              </a>
              <div className="flex items-start gap-2.5 text-white/60 text-[13px]">
                <MapPin size={14} className="text-white/40 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{business.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/60 text-[13px]">
                <Clock size={14} className="text-white/40 flex-shrink-0" aria-hidden="true" />
                <span>{business.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold text-[13px] uppercase tracking-wider mb-5">
              Hizmetler
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="text-white/60 hover:text-white text-[14px] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="text-white font-semibold text-[13px] uppercase tracking-wider mb-5">
              Hizmet Bölgeleri
            </h3>
            <ul className="space-y-2.5">
              {footerLocations.map((loc) => (
                <li key={loc.id}>
                  <Link
                    href={`/hizmet-bolgeleri/${loc.slug}`}
                    className="text-white/60 hover:text-white text-[14px] transition-colors"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/hizmet-bolgeleri"
                  className="text-[#102A43] hover:text-white text-[14px] transition-colors font-medium"
                  style={{ color: "#6BA3BE" }}
                >
                  Tüm Hizmet Bölgeleri →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold text-[13px] uppercase tracking-wider mb-5">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: "Hakkımızda", href: "/hakkimizda" },
                { label: "Yorumlar", href: "/yorumlar" },
                { label: "SSS", href: "/sikca-sorulan-sorular" },
                { label: "İletişim", href: "/iletisim" },
                { label: "Gizlilik Politikası", href: "/gizlilik" },
                { label: "KVKK", href: "/kvkk" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-[14px] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] text-white/60 hover:text-white transition-colors"
              aria-label="Google Haritalar'da görüntüle"
            >
              <MapPin size={14} aria-hidden="true" />
              Google Haritalar
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-[13px]">
            © {new Date().getFullYear()} {business.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-1 text-white/40 text-[13px]">
            <span>Çayırova • Gebze • Şekerpınar • Kocaeli</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { locations } from "@/data/locations";

export default function ServiceAreas() {
  const ilceler = locations.filter((l) => l.type === "ilce");
  const mahalleler = locations.filter((l) => l.type !== "ilce");

  return (
    <section
      id="hizmet-bolgeleri"
      className="py-20 lg:py-28 bg-slate-50/50 border-y border-slate-100"
      aria-labelledby="areas-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 lg:items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-12 lg:mb-0 lg:sticky lg:top-28"
          >
            <p className="text-[11px] font-bold text-[#102A43] uppercase tracking-widest mb-3 bg-white border border-slate-200/80 px-3 py-1 rounded-full w-fit">
              Hizmet Bölgelerimiz
            </p>
            <h2
              id="areas-heading"
              className="text-[32px] lg:text-[40px] font-extrabold text-slate-900 leading-tight tracking-tight mb-4"
            >
              Size Yakın Bölgelerde Hizmet
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
              Çayırova, Gebze, Darıca, Şekerpınar ve çevre ilçelerde 7/24 oto çekici, araç kurtarma ve yol yardım desteği sunuyoruz.
            </p>
            <Link
              href="/hizmet-bolgeleri"
              className="inline-flex items-center gap-2 text-[14px] font-bold text-[#102A43] hover:gap-3 transition-all duration-200 group"
              aria-label="Tüm hizmet bölgelerini görüntüle"
            >
              <span>Tüm Bölgeleri Gör</span>
              <ArrowRight size={15} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </Link>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="space-y-10"
          >
            {/* Districts Grid */}
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-5 flex items-center gap-2">
                <MapPin size={12} className="text-[#102A43]" />
                Ana Hizmet Noktaları
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {ilceler.map((loc) => (
                  <Link
                    key={loc.id}
                    href={`/hizmet-bolgeleri/${loc.slug}`}
                    className="group flex items-center justify-between p-4 bg-white border border-slate-200/60 rounded-xl text-[14px] font-bold text-slate-900 hover:border-[#102A43] hover:shadow-sm transition-all duration-200"
                    aria-label={`${loc.name} hizmet bölgesi`}
                  >
                    <span>{loc.name}</span>
                    <Navigation size={12} className="text-slate-300 group-hover:text-[#102A43] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Neighborhoods list */}
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-5 flex items-center gap-2">
                <Navigation size={12} className="text-[#102A43]" />
                Diğer Mahalle & Çevre Bölgeler
              </p>
              <div className="flex flex-wrap gap-2">
                {mahalleler.map((loc) => (
                  <Link
                    key={loc.id}
                    href={`/hizmet-bolgeleri/${loc.slug}`}
                    className="inline-flex items-center px-4 py-2 bg-white border border-slate-200/50 rounded-xl text-[13px] font-semibold text-slate-600 hover:border-[#102A43] hover:text-[#102A43] hover:bg-slate-50 transition-all duration-200"
                    aria-label={`${loc.name} hizmet bölgesi`}
                  >
                    <span>{loc.name}</span>
                    {loc.parent && (
                      <span className="text-slate-300 text-[10px] ml-1 font-normal">
                        ({locations.find((l) => l.id === loc.parent)?.name})
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { business } from "@/data/business";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-[#f8fafc] flex flex-col justify-center overflow-hidden pt-28 pb-12 lg:pt-32 lg:pb-12" aria-label="Hero">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 lg:gap-16">
        
        {/* Left Side: Dramatic Typography */}
        <div className="flex flex-col items-start z-10 lg:py-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#000000]/10 rounded-full mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0A1128] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0A1128]"></span>
              </span>
              <span className="text-[12px] font-bold text-[#09090b] tracking-widest uppercase">7/24 Kesintisiz Hizmet</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[46px] sm:text-[60px] md:text-[80px] lg:text-[85px] xl:text-[100px] font-black text-[#000000] leading-[0.9] tracking-tighter mb-6 lg:mb-10"
          >
            Hızlı.<br />
            Güvenilir.<br />
            <span className="text-[#0A1128]">Kurtarıcı.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#71717a] text-[18px] lg:text-[22px] font-medium leading-relaxed max-w-[540px] mb-10 lg:mb-14"
          >
            Çayırova ve Gebze&apos;de yolda kalan aracınız için profesyonel çekici ve yol yardım operasyonu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href={business.phoneLink}
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 bg-[#000000] text-white text-[16px] font-bold rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#0A1128] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <Phone size={18} className="relative z-10" />
              <span className="relative z-10">{business.phone}&apos;i Ara</span>
            </a>
            
            <a
              href={business.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-5 bg-white border border-[#000000]/10 text-[#09090b] text-[16px] font-bold rounded-full hover:border-[#000000] hover:bg-white transition-colors duration-300"
            >
              <span>Konum Paylaş</span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Architectural Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-square lg:aspect-[3/4] lg:h-[85vh] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-bento group"
        >
          <div className="absolute inset-0 bg-black/5 z-10" /> {/* Subtle darkening overlay */}
          <Image
            src="/hero-truck.png"
            alt="Demir Oto Kurtarma - Çekici"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          
          {/* Glassmorphic floating card */}
          <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 z-20 glass-card rounded-[1.5rem] p-5 lg:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex items-center justify-between">
            <div>
              <p className="text-[#09090b] font-black text-[24px] leading-none mb-1">20DK</p>
              <p className="text-[#71717a] font-semibold text-[13px] uppercase tracking-wider">Maksimum Süre</p>
            </div>
            <div className="w-px h-10 bg-[#000000]/10" />
            <div className="text-right">
              <p className="text-[#09090b] font-black text-[24px] leading-none mb-1">5.0</p>
              <p className="text-[#71717a] font-semibold text-[13px] uppercase tracking-wider">Google Puanı</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

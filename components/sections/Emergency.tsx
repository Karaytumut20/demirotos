"use client";

import { motion } from "framer-motion";
import { business } from "@/data/business";
import { Phone, ArrowUpRight } from "lucide-react";

export default function Emergency() {
  return (
    <section className="bg-[#000000] py-24 lg:py-32 relative overflow-hidden" aria-labelledby="emergency-heading">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
      
      {/* Subtle glowing spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0A1128] rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-[900px] mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-10">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-[12px] font-bold text-white tracking-widest uppercase">Acil Destek Hattı</span>
          </div>

          <h2
            id="emergency-heading"
            className="text-[40px] sm:text-[60px] lg:text-[80px] font-black text-white leading-[0.95] tracking-tighter mb-8"
          >
            Aracınız yolda mı kaldı?
          </h2>
          
          <p className="text-[#a1a1aa] text-[18px] lg:text-[22px] font-medium leading-relaxed max-w-[600px] mb-12">
            Panik yapmayın. WhatsApp üzerinden konumunuzu gönderin veya bizi arayın, en yakın ekibimizi saniyeler içinde size yönlendirelim.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href={business.phoneLink}
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 bg-white text-[#000000] text-[16px] font-bold rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#e4e4e7] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <Phone size={18} className="relative z-10" />
              <span className="relative z-10">{business.phone}</span>
            </a>
            
            <a
              href={business.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-5 bg-[#25D366] text-white text-[16px] font-bold rounded-full hover:bg-[#128c7e] transition-colors duration-300"
            >
              <span>WhatsApp İle Konum Gönder</span>
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

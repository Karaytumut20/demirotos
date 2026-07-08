"use client";

import { Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { business } from "@/data/business";

export default function Contact() {
  return (
    <section id="iletisim" className="py-24 lg:py-32 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-10">
          
          {/* Left Column - Contact Info (Dark Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#09090b] text-white rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-14 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Abstract Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0A1128] rounded-full blur-[80px] pointer-events-none opacity-60" />
            
            <div className="relative z-10">
              <h2
                id="contact-heading"
                className="text-[40px] lg:text-[50px] font-black leading-[1] tracking-tighter mb-10"
              >
                İletişime <br />
                Geçin.
              </h2>
              
              <div className="space-y-10">
                {/* Phone */}
                <div>
                  <p className="text-[12px] font-bold text-[#a1a1aa] uppercase tracking-widest mb-3">Telefon</p>
                  <a
                    href={business.phoneLink}
                    className="group inline-flex items-center gap-3 text-[24px] lg:text-[28px] font-black hover:text-[#a1a1aa] transition-colors"
                  >
                    <span>{business.phone}</span>
                    <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

                {/* Address */}
                <div>
                  <p className="text-[12px] font-bold text-[#a1a1aa] uppercase tracking-widest mb-3">Adres</p>
                  <address className="text-[16px] lg:text-[18px] font-medium leading-relaxed not-italic max-w-[300px]">
                    {business.address.full}
                  </address>
                </div>

                {/* Hours */}
                <div>
                  <p className="text-[12px] font-bold text-[#a1a1aa] uppercase tracking-widest mb-3">Çalışma Saatleri</p>
                  <p className="text-[16px] lg:text-[18px] font-medium">
                    {business.workingHours}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-16 pt-8 border-t border-white/10">
              <a
                href={business.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full py-5 bg-[#25D366] text-white text-[16px] font-bold rounded-full hover:bg-[#128c7e] transition-colors duration-300"
              >
                WhatsApp İle Yazın
              </a>
            </div>
          </motion.div>

          {/* Right Column - Map (Sleek container) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2rem] lg:rounded-[3rem] overflow-hidden min-h-[500px] bg-[#f8fafc] border border-[#000000]/5 relative"
          >
            <iframe
              src={business.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ minHeight: "100%", position: "absolute", inset: 0, border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Konum Haritası"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

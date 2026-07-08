"use client";

import Link from "next/link";
import { ArrowUpRight, Truck, Wrench, Zap, Bike, Package, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Truck,
  Wrench,
  Zap,
  Bike,
  Package,
  AlertTriangle,
};

export default function Services() {
  return (
    <section
      id="hizmetler"
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Massive Typography Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[800px] mb-16 lg:mb-24"
        >
          <h2
            id="services-heading"
            className="text-[40px] sm:text-[50px] lg:text-[70px] font-black text-[#000000] leading-[0.95] tracking-tighter mb-6"
          >
            Oto Çekici ve <br className="hidden sm:block" />
            <span className="text-[#a1a1aa]">Yol Yardım Hizmetleri.</span>
          </h2>
          <p className="text-[#71717a] text-[18px] lg:text-[20px] font-medium leading-relaxed max-w-[600px]">
            Aracınız arıza yaptığında veya hareket edemediğinde her duruma özel, güvenli ve ultra hızlı çekici filomuz yanınızda.
          </p>
        </motion.div>

        {/* Grid - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services
            .filter((service) => service.id !== "kazali-arac-kurtarma")
            .map((service, i) => {
            const Icon = iconMap[service.icon] ?? Truck;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="col-span-1"
              >
                <Link
                  href={`/hizmetler/${service.slug}`}
                  className="group block h-full bg-[#f8fafc] rounded-[2rem] p-8 hover:bg-[#09090b] transition-colors duration-500 relative overflow-hidden"
                  aria-label={`${service.title} detayları`}
                >
                  <div className="flex flex-col h-full z-10 relative">
                    <div className="flex items-start justify-between mb-16">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-[#18181b] transition-colors duration-500">
                        <Icon size={24} strokeWidth={2} className="text-[#09090b] group-hover:text-white transition-colors duration-500" />
                      </div>
                      
                      <div className="w-10 h-10 rounded-full border border-[#000000]/10 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white transition-all duration-500">
                        <ArrowUpRight size={18} className="text-[#000000]/30 group-hover:text-[#000000] transition-colors duration-500" />
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <h3 className="font-black text-[#000000] group-hover:text-white transition-colors duration-500 tracking-tight leading-none mb-4 text-[24px]">
                        {service.title}
                      </h3>
                      <p className="text-[#71717a] group-hover:text-[#a1a1aa] transition-colors duration-500 font-medium text-[15px] leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover background abstract shape */}
                  <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#0A1128] rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

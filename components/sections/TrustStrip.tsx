"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "7/24", label: "Kesintisiz Hizmet", sub: "Her an yollardayız" },
  { value: "20DK", label: "Ortalama Varış", sub: "Bölgedeki en hızlı ekip" },
  { value: "100%", label: "Hasarsız Taşıma", sub: "Araç kasko güvencesi" },
  { value: "5.0", label: "Google Puanı", sub: "Müşteri memnuniyeti" },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#000000] py-20 lg:py-32" aria-label="Güven Unsurları">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <span className="text-[48px] sm:text-[60px] lg:text-[80px] font-black text-white leading-none tracking-tighter mb-4">
                {item.value}
              </span>
              <div className="h-px w-full bg-white/20 mb-4" />
              <p className="text-[16px] lg:text-[18px] font-bold text-white mb-1">
                {item.label}
              </p>
              <p className="text-[14px] text-[#a1a1aa] font-medium">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  "Her araç tipine uygun, sıfır hasar garantili yükleme",
  "Net fiyatlandırma politikası, sürpriz maliyet yok",
  "Çayırova, Gebze ve Şekerpınar'da dakikalar içinde erişim",
  "Kaskolu ve sigortalı taşıma ile tam güvence",
  "Son teknoloji donanımlı araç filosu",
];

export default function WhyUs() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="why-us-heading">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left - Massive Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 relative h-[500px] lg:h-[700px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden"
          >
            <Image
              src="/why-us.png"
              alt="Demir Oto Kurtarma Operasyon"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass-card rounded-2xl p-6 border-white/20">
                <p className="text-white font-bold text-[18px]">Müşteri Güveni</p>
                <p className="text-white/80 text-[14px]">Yüzlerce başarılı kurtarma operasyonu.</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2
                id="why-us-heading"
                className="text-[40px] sm:text-[50px] lg:text-[60px] font-black text-[#000000] leading-[1.05] tracking-tighter mb-8"
              >
                Bizim işimiz <br className="hidden sm:block" />
                sadece çekmek <br className="hidden sm:block" />
                <span className="text-[#a1a1aa]">değil, korumaktır.</span>
              </h2>
              <p className="text-[#71717a] text-[18px] lg:text-[20px] font-medium leading-relaxed mb-10">
                Aracınıza kendi aracımız gibi yaklaşıyoruz. İşimizi ciddiyetle yapıyor, mağduriyetinizi en kısa sürede, en güvenli yoldan çözüyoruz.
              </p>

              <div className="space-y-5" aria-label="Neden Demir Oto Kurtarma?">
                {reasons.map((reason, i) => (
                  <motion.div
                    key={reason}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#f4f4f5] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={16} strokeWidth={3} className="text-[#09090b]" aria-hidden="true" />
                    </div>
                    <span className="text-[17px] text-[#27272a] font-semibold leading-relaxed">
                      {reason}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

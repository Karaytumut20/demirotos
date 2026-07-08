"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Bizi Arayın",
    description: "Telefon veya WhatsApp üzerinden ekibimizle anında iletişime geçin.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Konumunuzu Paylaşın",
    description: "WhatsApp aracılığıyla mevcut konumunuzu hızlıca bize iletin.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Aracınız Güvenle Taşınsın",
    description: "Çekici ekibimiz kısa sürede gelir ve aracınızı gideceği yere taşır.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-bold text-[#102A43] uppercase tracking-widest mb-3 bg-slate-100 px-3 py-1 rounded-full w-fit mx-auto">
            Nasıl Çalışır?
          </p>
          <h2
            id="how-it-works-heading"
            className="text-[32px] lg:text-[42px] font-extrabold text-slate-900 leading-tight tracking-tight"
          >
            Üç Adımda Çekici Desteği Alın
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connector line for desktop */}
          <div
            className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-slate-100"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative flex flex-col items-center text-center px-4"
                >
                  {/* Step Icon & Number Badge */}
                  <div className="relative z-10 w-22 h-22 bg-white border border-slate-200/80 rounded-2xl flex items-center justify-center mb-6 shadow-sm group hover:border-[#102A43] transition-colors">
                    <Icon size={24} className="text-[#102A43]" />
                    <span className="absolute -top-2 -right-2 bg-[#102A43] text-white text-[11px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-extrabold text-slate-900 mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed max-w-[280px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="py-24 lg:py-32 bg-white"
      aria-labelledby="about-short-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[1000px] mx-auto bg-[#09090b] p-10 lg:p-20 rounded-[2rem] lg:rounded-[3rem] shadow-bento relative overflow-hidden flex flex-col items-center text-center"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[30%] -right-[10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px]" />
            <div className="absolute -bottom-[30%] -left-[10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px]" />
          </div>

          <div className="relative z-10">
            <p className="text-[12px] font-black text-white/70 uppercase tracking-[0.3em] mb-6 inline-block border border-white/20 px-4 py-2 rounded-full">
              Hakkımızda
            </p>
            
            <h2
              id="about-short-heading"
              className="text-[32px] lg:text-[48px] font-black text-white leading-tight tracking-tighter mb-8"
            >
              Gebze ve Çayırova&apos;nın<br/>En Güvenilir Oto Kurtarma Filosu
            </h2>
            
            <div className="space-y-6 text-[16px] lg:text-[18px] text-[#a1a1aa] leading-relaxed font-medium max-w-[800px] mx-auto">
              <p>
                Yılların getirdiği sektörel tecrübe ile <strong>Demir Oto Kurtarma</strong> olarak; Gebze, Çayırova, Darıca, Tuzla ve Dilovası başta olmak üzere tüm Kocaeli ve İstanbul Anadolu Yakası sınırlarında 7/24 kesintisiz, kaskolu ve profesyonel araç taşıma hizmeti sunuyoruz.
              </p>
              <p>
                Sadece bir çekici çağırmış olmuyorsunuz; aynı zamanda yolda kaldığınız stresli anlarda size güven veren, modern araç filosu ve uzman personeliyle mağduriyetinizi dakikalar içinde çözen bir çözüm ortağı kazanıyorsunuz. <strong>Gebze oto çekici</strong>, <strong>Çayırova yol yardım</strong> veya otoyol acil kurtarma gibi tüm ihtiyaçlarınızda, en zorlu hava ve yol koşullarında bile söz verdiğimiz sürede yanınızdayız.
              </p>
              <p>
                Binek otomobillerden hafif ticari araçlara, motosikletlerden ağır hasarlı kazalı araçlara kadar her tür operasyon için özel olarak donatılmış kayar kasa (flatbed) ve ahtapot vinç sistemli araçlarımızla hizmetinizdeyiz. Hızlı müdahale, şeffaf fiyatlandırma ve %100 müşteri memnuniyeti ilkemizden asla taviz vermiyoruz.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

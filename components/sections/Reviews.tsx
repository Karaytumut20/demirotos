"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  return (
    <section className="py-24 lg:py-32 bg-[#f8fafc]" aria-labelledby="reviews-heading">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              id="reviews-heading"
              className="text-[40px] sm:text-[50px] lg:text-[70px] font-black text-[#000000] leading-[0.95] tracking-tighter"
            >
              Müşterilerimiz<br />
              <span className="text-[#a1a1aa]">ne diyor?</span>
            </h2>
          </motion.div>
          
          {/* Aggregate Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6 bg-white p-6 rounded-[2rem] shadow-bento"
          >
            <div className="text-center">
              <p className="text-[42px] font-black text-[#000000] leading-none tracking-tighter">5.0</p>
            </div>
            <div className="w-px h-12 bg-[#000000]/10" aria-hidden="true" />
            <div className="flex flex-col justify-center">
              <div className="flex gap-1 mb-1" aria-label="5 yıldız">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#09090b" stroke="none" aria-hidden="true" />
                ))}
              </div>
              <span className="text-[13px] font-bold text-[#71717a] uppercase tracking-wider">
                Google Puanı
              </span>
            </div>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[2rem] p-8 lg:p-10 shadow-super-subtle flex flex-col h-full hover:shadow-bento transition-shadow duration-500"
              aria-label={`${review.name} yorumu`}
            >
              <div className="flex gap-1 mb-8" aria-label={`${review.rating} yıldız`}>
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={16} fill="#09090b" stroke="none" aria-hidden="true" />
                ))}
              </div>

              <p className="text-[16px] lg:text-[18px] text-[#27272a] font-medium leading-relaxed mb-10 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-[#f4f4f5] flex items-center justify-center text-[#000000] text-[16px] font-black uppercase"
                  aria-hidden="true"
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[15px] font-bold text-[#000000]">
                    {review.name}
                  </p>
                  <p className="text-[13px] font-semibold text-[#a1a1aa] mt-0.5">
                    {review.date}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs, FAQ } from "@/data/faqs";

interface FAQAccordionProps {
  items?: FAQ[];
}

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;

  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        id={`${id}-btn`}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left transition-colors group"
      >
        <span className="text-[15px] font-bold text-slate-800 group-hover:text-[#102A43] transition-colors leading-snug">
          {faq.question}
        </span>
        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 border border-slate-200 rounded-xl group-hover:border-[#102A43] group-hover:bg-[#102A43]/5 transition-all">
          {open ? (
            <Minus size={14} strokeWidth={2.5} className="text-[#102A43]" aria-hidden="true" />
          ) : (
            <Plus size={14} strokeWidth={2.5} className="text-slate-500 group-hover:text-[#102A43]" aria-hidden="true" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-btn`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="text-[14px] text-slate-500 leading-relaxed pb-5">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection({ items }: FAQAccordionProps) {
  const faqList = items ?? faqs;

  return (
    <section
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-10 text-center"
          >
            <p className="text-[11px] font-bold text-[#102A43] uppercase tracking-widest mb-3 bg-slate-100 px-3 py-1 rounded-full w-fit mx-auto">
              Merak Edilenler
            </p>
            <h2
              id="faq-heading"
              className="text-[32px] lg:text-[40px] font-extrabold text-slate-900 leading-tight tracking-tight"
            >
              Sıkça Sorulan Sorular
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-slate-50 border border-slate-200/50 p-6 lg:p-10 rounded-3xl"
          >
            {faqList.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

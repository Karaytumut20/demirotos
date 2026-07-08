"use client";
import Image from "next/image";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { business } from "@/data/business";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Bölgeler", href: "/hizmet-bolgeleri" },
  { label: "Kurumsal", href: "/hakkimizda" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-black border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.3)] rounded-[2rem] ${
              scrolled
                ? "px-5 py-3 lg:px-8 lg:py-3.5"
                : "px-6 py-4 lg:px-8 lg:py-5"
            }`}
          >
            {/* Custom Designed Tow Truck Logo */}
            <Link href="/" className="flex items-center gap-3 group" aria-label="Ana Sayfa">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/images/logo.png"
                  alt="Demir Oto Kurtarma Logo"
                  width={44}
                  height={44}
                  className="w-11 h-11 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col">
                  <span className="text-white font-black text-[18px] tracking-tight leading-none uppercase">
                    DEMİR
                  </span>
                  <span className="text-[10px] font-bold text-white tracking-[0.2em] leading-none mt-1">
                    OTO KURTARMA
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Centered Pill */}
            <nav className="hidden lg:flex items-center gap-1.5" aria-label="Ana Navigasyon">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-5 py-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 text-[14px] font-extrabold transition-all duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA - Magnetic Feel */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={business.phoneLink}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black text-[14px] font-bold rounded-full hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
                aria-label="Hemen Ara"
              >
                <Phone size={15} strokeWidth={2.5} />
                <span>{business.phone}</span>
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-black border border-white/20 hover:bg-white/10 transition-colors shadow-sm"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menü"
            >
              {mobileOpen ? <X size={18} strokeWidth={2.5} className="text-white"/> : <Menu size={18} strokeWidth={2.5} className="text-white" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-48 bg-[#f8fafc] flex flex-col pt-24 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-2 mt-4">
              {navItems.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                  key={item.href}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-[32px] font-black tracking-tighter text-[#09090b] hover:text-[#0A1128] py-2"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-auto flex flex-col gap-3"
              style={{ paddingBottom: "calc(2rem + env(safe-area-inset-bottom))" }}
            >
              <a
                href={business.phoneLink}
                className="flex items-center justify-center gap-3 w-full py-4.5 bg-[#09090b] text-white text-[16px] font-bold rounded-2xl"
              >
                <Phone size={18} /> {business.phone}
              </a>
              <a
                href={business.whatsappLink}
                className="flex items-center justify-center gap-3 w-full py-4.5 bg-[#25D366] text-white text-[16px] font-bold rounded-2xl"
              >
                WhatsApp İle Ulaş
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



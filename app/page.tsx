import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Services from "@/components/sections/Services";
import Emergency from "@/components/sections/Emergency";
import ServiceAreas from "@/components/sections/ServiceAreas";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyUs from "@/components/sections/WhyUs";
import Reviews from "@/components/sections/Reviews";
import About from "@/components/sections/About";
import FAQSection from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import { buildSeoMetadata } from "@/app/seo";

export const metadata: Metadata = buildSeoMetadata({
  title:
    "Demir Oto Kurtarma - Çayırova, Gebze Çekici ve Yol Yardım | 0546 151 77 41",
  description:
    "Çayırova, Gebze ve çevresinde 7/24 oto çekici, araç kurtarma ve yol yardım. Hızlı ve güvenli destek için arayın: 0546 151 77 41.",
  keywords: [
    "Çayırova çekici",
    "Gebze çekici",
    "Şekerpınar çekici",
    "oto kurtarma",
    "yol yardım",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Emergency />
      <ServiceAreas />
      <HowItWorks />
      <WhyUs />
      <Reviews />
      <About />
      <FAQSection />
      <Contact />
    </>
  );
}

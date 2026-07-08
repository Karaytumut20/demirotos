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

export const metadata: Metadata = {
  title: "Demir Oto Kurtarma – Çayırova, Gebze Çekici ve Yol Yardım | 0546 151 77 41",
  description:
    "Çayırova, Şekerpınar, Gebze ve çevresinde 7/24 oto çekici, araç kurtarma ve yol yardım hizmeti. Hızlı, güvenli ve profesyonel. Hemen arayın: 0546 151 77 41",
  alternates: {
    canonical: "/",
  },
};

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

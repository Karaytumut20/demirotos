import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import FAQSection from "@/components/sections/FAQ";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { faqs } from "@/data/faqs";
import { buildSeoMetadata } from "@/app/seo";

export const metadata: Metadata = buildSeoMetadata({
  title: "Sıkça Sorulan Sorular - Demir Oto Kurtarma",
  description:
    "Oto çekici ve araç kurtarma hakkında sıkça sorulan sorular. Çayırova, Gebze ve Şekerpınar bölgesinde hizmet bilgileri.",
  path: "/sikca-sorulan-sorular",
});

export default function FAQPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Sıkça Sorulan Sorular" }]}
        label="SSS"
        title="Sıkça Sorulan Sorular"
        description="Oto çekici ve araç kurtarma hizmetimiz hakkında en çok sorulan soruları ve yanıtlarını aşağıda bulabilirsiniz."
        showCta={false}
      />
      <FAQSection />
      <SchemaMarkup type="FAQPage" data={faqs} />
    </>
  );
}

import { AdvantagesSection } from "@/components/advantages-section";
import { CompanyIntro } from "@/components/company-intro";
import { CtaBanner } from "@/components/cta-banner";
import { DomainsSection } from "@/components/domains-section";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { JsonLd } from "@/components/json-ld";
import { RealisationsPreview } from "@/components/realisations-preview";
import { ServicesOverview } from "@/components/services-overview";
import { TestimonialsSection } from "@/components/testimonials-section";
import { faqs } from "@/lib/data";
import { buildMetadata, getFaqSchema, getServicesSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Réparation de pompes et injecteurs diesel au Cameroun",
  description:
    "SEF SARL, spécialiste en injection diesel à Yaoundé et Douala, assure diagnostic fiable, réparation de pompes d’injection, injecteurs toutes marques, intervention technique et vente de pièces.",
  path: "/",
  keywords: [
    "réparation pompe injection Yaoundé",
    "spécialiste injection diesel Yaoundé",
    "diagnostic injection diesel Douala"
  ]
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={getServicesSchema()} />
      <JsonLd data={getFaqSchema(faqs)} />
      <HeroSection />
      <CompanyIntro />
      <ServicesOverview />
      <AdvantagesSection />
      <DomainsSection />
      <RealisationsPreview />
      <TestimonialsSection />
      <FaqSection
        eyebrow="FAQ SEO"
        title="Vos questions les plus fréquentes sur la réparation et le diagnostic injection diesel."
        description="Cette FAQ aide les visiteurs à comprendre rapidement l’étendue de nos services, les types de véhicules concernés et la meilleure manière de contacter SEF SARL."
        items={faqs}
      />
      <CtaBanner />
    </>
  );
}


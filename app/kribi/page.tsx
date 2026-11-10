import { ActionLink } from "@/components/action-link";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { company, kribiFaqs, services } from "@/lib/data";
import {
  buildMetadata,
  getBreadcrumbSchema,
  getFaqSchema,
  getLocationBusinessSchema,
  getWebPageSchema
} from "@/lib/seo";

const kribiLocation = company.locations[2];
const featuredServices = services.slice(0, 5);

const pageDescription =
  "SEF SARL vous accueille à Kribi, au lieu-dit Antenne Orange, pour le diagnostic et la réparation des pompes, injecteurs et circuits d’injection diesel.";

export const metadata = buildMetadata({
  title: "Spécialiste injection diesel à Kribi",
  description: pageDescription,
  path: "/kribi",
  imagePath: "/images/injections-3.jpg",
  imageAlt: "Diagnostic et réparation injection diesel SEF SARL à Kribi",
  keywords: [
    "réparation pompe injection Kribi",
    "spécialiste injection diesel Kribi",
    "diagnostic injection diesel Kribi",
    "garage injection diesel Kribi",
    "réparation injecteurs Kribi",
    "pièces injection diesel Kribi",
    "SEF SARL Antenne Orange Kribi"
  ]
});

export default function KribiPage() {
  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          title: "Spécialiste injection diesel à Kribi",
          description: pageDescription,
          path: "/kribi",
          imagePath: "/images/injections-3.jpg",
          imageAlt: "Service d’injection diesel SEF SARL à Kribi"
        })}
      />
      <JsonLd data={getLocationBusinessSchema(kribiLocation, "/kribi")} />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "SEF SARL à Kribi", path: "/kribi" }
        ])}
      />
      <JsonLd data={getFaqSchema(kribiFaqs, "/kribi")} />

      <PageHero
        eyebrow="SEF SARL à Kribi"
        title="Spécialiste de l’injection diesel à Kribi"
        description="Diagnostic fiable, réparation de pompes et injecteurs diesel, intervention technique et pièces adaptées : retrouvez SEF SARL à Kribi, au lieu-dit Antenne Orange."
        highlights={["Lieu-dit Antenne Orange", "Pompes et injecteurs diesel", "Contact WhatsApp direct"]}
        image="/images/injections-3.jpg"
        imageAlt="Équipement de diagnostic pour circuit d’injection diesel à Kribi"
      />

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Implantation de Kribi"
              title="Une expertise diesel plus proche des conducteurs, transporteurs et exploitants de Kribi."
              description="SEF SARL accompagne les propriétaires de véhicules diesel, les professionnels du transport et les exploitants d’engins qui recherchent un diagnostic précis et une intervention technique fiable à Kribi."
            />
            <p className="mt-8 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
              Avant toute réparation, nous analysons les symptômes et l’état du circuit afin d’orienter la solution la plus pertinente. Cette méthode aide à limiter les remplacements inutiles et à préparer une remise en service plus durable.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="panel p-8 md:p-10">
            <p className="eyebrow">Adresse à Kribi</p>
            <h2 className="mt-5 text-3xl leading-tight text-slate-950">{kribiLocation.area}</h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Contactez-nous avant votre déplacement pour décrire votre panne, confirmer votre passage et préparer les premières informations techniques utiles.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ActionLink href={company.whatsappHref} newTab>
                Écrire sur WhatsApp
              </ActionLink>
              <ActionLink href={company.phonePrimaryHref} variant="outline">
                Appeler SEF SARL
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-divider section-space bg-[#EDF3F1]">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Services à Kribi"
              title="Des solutions pour diagnostiquer, réparer et fiabiliser votre circuit d’injection diesel."
              description="Chaque prestation est adaptée au type de véhicule, à la technologie d’injection et aux symptômes observés."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.04}>
                <article className="panel h-full p-7">
                  <p className="eyebrow">Service {service.step}</p>
                  <h3 className="mt-5 text-2xl leading-tight text-slate-950">{service.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{service.shortDescription}</p>
                  <div className="mt-7">
                    <ActionLink href={`/services#${service.id}`} variant="outline">
                      Découvrir ce service
                    </ActionLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        eyebrow="FAQ Kribi"
        title="Les informations utiles avant de contacter SEF SARL à Kribi."
        description="Adresse, véhicules pris en charge et préparation du diagnostic : retrouvez les réponses essentielles pour organiser votre demande."
        items={kribiFaqs}
      />

      <CtaBanner />
    </>
  );
}

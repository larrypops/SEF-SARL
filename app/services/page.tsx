import Image from "next/image";

import { ActionLink } from "@/components/action-link";
import { CtaBanner } from "@/components/cta-banner";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { company, services } from "@/lib/data";
import { buildMetadata, getBreadcrumbSchema, getServicesSchema, getWebPageSchema } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Services de réparation, location et reprogrammation véhicule",
  description:
    "Découvrez les services SEF SARL : réparation de pompes d’injection, injecteurs mécaniques et électroniques, diagnostic fiable, intervention technique, vente de pièces, location de véhicule et reprogrammation des calculateurs et des clés au Cameroun.",
  path: "/services",
  imagePath: "/images/injections-3.jpg",
  imageAlt: "Pompe d’injection diesel contrôlée dans l’atelier SEF SARL",
  keywords: [
    "réparation injecteurs électroniques Cameroun",
    "maintenance circuit injection diesel",
    "réparation pompe injection camion Cameroun",
    "location de véhicule Cameroun",
    "reprogrammation calculateur véhicule Cameroun"
  ]
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          title: "Services de réparation, location et reprogrammation véhicule",
          description:
            "Découvrez les services SEF SARL : réparation de pompes d’injection, injecteurs mécaniques et électroniques, diagnostic fiable, intervention technique, vente de pièces, location de véhicule et reprogrammation des calculateurs et des clés au Cameroun.",
          path: "/services",
          type: "CollectionPage",
          imagePath: "/images/injections-3.jpg",
          imageAlt: "Pompe d’injection diesel remise en état chez SEF SARL"
        })}
      />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Services", path: "/services" }
        ])}
      />
      <JsonLd data={getServicesSchema()} />
      <PageHero
        eyebrow="Services SEF SARL"
        title="Des prestations techniques et pratiques pour l’injection diesel, la mobilité et l’électronique véhicule."
        description="De la réparation de pompe d’injection au diagnostic diesel, de la location de véhicule à la reprogrammation des calculateurs et des clés, SEF SARL propose un accompagnement clair, utile et réactif selon le besoin du client."
        highlights={[
          "Pompes d’injection pour camions et engins",
          "Injecteurs mécaniques et électroniques toutes marques",
          "Diagnostic fiable, location de véhicule, intervention technique et électronique"
        ]}
        image="/images/injections-3.jpg"
        imageAlt="Pompe d’injection remise en état dans l’atelier SEF SARL"
      />

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-10">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.05}>
                <article
                  id={service.id}
                  className="grid gap-8 border-t border-slate-200 py-10 first:border-t-0 first:pt-0 lg:grid-cols-[minmax(300px,0.9fr)_minmax(0,1.1fr)] lg:items-center"
                >
                  <div className={cn(index % 2 === 1 && "lg:order-2")}>
                    <div className="panel overflow-hidden p-3">
                      <div className="image-card-tall lg:min-h-[360px]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 38vw"
                          className="image-fill-portrait"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,21,0.08),rgba(7,16,21,0.66))]" />
                        <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                          Service {service.step}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={cn(index % 2 === 1 && "lg:order-1")}>
                    <p className="eyebrow">{service.benefitTitle}</p>
                    <h2 className="mt-5 text-3xl leading-tight text-balance text-slate-950 md:text-5xl">
                      {service.title}
                    </h2>
                    <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                      {service.longDescription}
                    </p>

                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="rounded-[1.5rem] border border-slate-200 bg-white/70 p-5">
                          <p className="text-base leading-7 text-slate-600">{benefit}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Véhicules ou équipements concernés
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {service.equipment.map((item) => (
                          <li key={item} className="rounded-full border border-slate-200 px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                      <ActionLink href={company.whatsappHref} newTab>
                        Contacter sur WhatsApp
                      </ActionLink>
                      <ActionLink href={company.phonePrimaryHref} variant="outline">
                        Appeler maintenant
                      </ActionLink>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

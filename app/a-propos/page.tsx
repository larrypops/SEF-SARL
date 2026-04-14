import Image from "next/image";

import { ActionLink } from "@/components/action-link";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { aboutStory, company, companyPillars, values } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "À propos de SEF SARL",
  description:
    "Découvrez l’histoire, la mission, la vision et les engagements qualité de SEF SARL, spécialiste de l’injection diesel à Yaoundé et Douala.",
  path: "/a-propos",
  keywords: ["spécialiste injection diesel Yaoundé", "garage injection diesel Douala"]
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Une entreprise construite autour du sérieux technique, de la confiance client et de la garantie assurée."
        description="SEF SARL développe une expertise dédiée aux circuits d’injection diesel avec une ambition claire : fournir une intervention crédible, expliquée et durable pour les véhicules et équipements qui comptent dans l’activité de ses clients."
        highlights={["Mission claire", "Garantie assurée", "Présence à Yaoundé et Douala"]}
        image="/images/hero-image.jpg"
        imageAlt="Atelier et intervention technique SEF SARL"
      />

      <section className="section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Présentation"
              title="SEF SARL place l’expertise diesel au service d’une relation client claire et rassurante."
              description="Nous croyons qu’un atelier de qualité doit être capable d’expliquer, de diagnostiquer et d’assumer ses interventions avec précision. Cette exigence guide notre manière de travailler au quotidien."
            />

            <div className="mt-10 space-y-6">
              {aboutStory.map((paragraph) => (
                <p key={paragraph} className="max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="panel overflow-hidden p-3">
            <div className="relative min-h-[460px] overflow-hidden rounded-[1.65rem] bg-midnight">
              <Image
                src="/images/hero-image.jpg"
                alt="Atelier injection diesel SEF SARL"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,21,0.2),rgba(7,16,21,0.78))]" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="dark-panel p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#8FE7C4]">Présence locale</p>
                  <p className="mt-4 text-sm leading-7 text-slate-200">
                    Yaoundé : {company.locations[0].area}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    Douala : {company.locations[1].area}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-divider section-space bg-[#EDF3F1]">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-3">
            {companyPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.05}>
                <article className="panel h-full p-8">
                  <p className="eyebrow">{pillar.title}</p>
                  <p className="mt-5 text-2xl leading-tight text-slate-950">{pillar.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <Reveal>
            <SectionHeading
              eyebrow="Valeurs"
              title="Une culture d’atelier fondée sur la précision, la responsabilité et l’écoute."
              description="Le niveau de confiance que nous voulons créer passe autant par la qualité de l’intervention que par la manière d’accompagner le client avant, pendant et après la réparation."
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value} delay={index * 0.04}>
                <div className="panel p-6">
                  <p className="text-lg font-semibold text-slate-900">{value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="container-shell mt-12">
          <Reveal className="panel grid gap-8 p-8 md:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">Engagement qualité</p>
              <h2 className="mt-5 text-3xl leading-tight text-balance text-slate-950 md:text-5xl">
                Garantie assurée, sérieux de l’équipe et suivi attentif jusqu’à la remise en route.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
                Chez SEF SARL, la garantie assurée ne se limite pas à une formule. Elle reflète une volonté de travailler proprement, d’annoncer clairement ce qui est constaté et de sécuriser la réparation pour inspirer confiance dès le premier contact.
              </p>
            </div>
            <div>
              <ActionLink href="/contact" variant="dark">
                Prendre contact
              </ActionLink>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

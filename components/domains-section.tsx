import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { company, interventionDomains } from "@/lib/data";

export function DomainsSection() {
  return (
    <section className="section-divider section-space">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Domaines d’intervention"
            title="Des solutions adaptées aux réalités du transport, des engins et des véhicules diesel du quotidien."
            description="SEF SARL intervient sur des usages très différents, mais avec la même exigence : comprendre rapidement la panne, préserver la fiabilité mécanique et remettre le véhicule au travail dans de bonnes conditions."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(320px,0.85fr)_minmax(0,1.15fr)]">
          <Reveal className="panel overflow-hidden p-3">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.65rem] sm:aspect-square lg:min-h-[440px] lg:aspect-auto">
              <Image
                src="/images/image-03.jpeg"
                alt="Pièces et éléments de circuit d’injection diesel préparés pour une intervention"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,21,0.1),rgba(7,16,21,0.76))]" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="dark-panel p-5">
                  <p className="text-xs uppercase tracking-[0.32em] text-[#8FE7C4]">
                    Yaoundé | Douala
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    {company.locations[0].city} : {company.locations[0].area}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    {company.locations[1].city} : {company.locations[1].area}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {interventionDomains.map((domain, index) => (
              <Reveal key={domain.title} delay={index * 0.05}>
                <article className="panel p-6 md:p-8">
                  <h3 className="text-2xl leading-tight text-slate-950">{domain.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{domain.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

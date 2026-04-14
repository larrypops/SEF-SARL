import Image from "next/image";

import { ActionLink } from "@/components/action-link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { company } from "@/lib/data";

const commitments = [
  "Réparation de pompes et d’injecteurs diesel avec méthode",
  "Diagnostic injection diesel fiable avant toute décision technique",
  "Présence à Yaoundé et Douala pour un contact plus direct"
];

export function CompanyIntro() {
  return (
    <section className="section-space">
      <div className="container-shell grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Entreprise"
            title="Une expertise diesel pensée pour la fiabilité du véhicule et la tranquillité du client."
            description="SEF SARL s’adresse aux conducteurs, exploitants de flotte, ateliers partenaires et propriétaires d’engins qui ont besoin d’un spécialiste injection diesel capable d’analyser la panne avec rigueur, d’intervenir proprement et de proposer une solution crédible."
          />

          <ul className="mt-10 space-y-5">
            {commitments.map((commitment) => (
              <li key={commitment} className="flex gap-4 border-t border-slate-200 pt-5">
                <span className="mt-2 h-2 w-2 rounded-full bg-teal" />
                <span className="max-w-2xl text-base leading-8 text-slate-600">{commitment}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ActionLink href="/services" variant="dark">
              Découvrir les services
            </ActionLink>
            <ActionLink href={company.phonePrimaryHref} variant="outline">
              Appeler SEF SARL
            </ActionLink>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="panel overflow-hidden p-3">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.65rem] sm:aspect-square lg:min-h-[440px] lg:aspect-auto">
            <Image
              src="/images/injections-1.jpg"
              alt="Pompe d’injection et injecteurs diesel préparés en atelier"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,21,0.08),rgba(7,16,21,0.72))]" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="dark-panel p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#8FE7C4]">
                  Spécialiste injection diesel au Cameroun
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-200">{company.description}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

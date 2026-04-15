import Image from "next/image";

import { ActionLink } from "@/components/action-link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { company, repairShowcase } from "@/lib/data";

export function RepairSection() {
  return (
    <section className="section-space bg-midnight text-white">
      <div className="container-shell grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Rubrique réparation"
            title="Des exemples de pompes prises en charge dans un cadre de réparation atelier."
            description="Cette rubrique met en avant quelques ensembles liés aux pompes d’injection que SEF SARL peut traiter selon la panne, l’état de la pièce et la faisabilité technique. L’objectif reste toujours le même : orienter une réparation crédible et utile avant tout remplacement inutile."
            invert
          />

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm md:p-8">
            <p className="eyebrow text-[#8FE7C4]">Approche atelier</p>
            <p className="mt-5 text-2xl leading-tight text-white">
              Contrôle, diagnostic et remise en état sur des organes sensibles du circuit diesel.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Envoyez la photo de la pompe, la référence ou le modèle moteur pour vérifier rapidement si l’intervention entre dans le champ de réparation pris en charge.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ActionLink href={company.whatsappHref} newTab>
                Demander une réparation
              </ActionLink>
              <ActionLink href="/services#pompes-injection" variant="secondary">
                Voir le service
              </ActionLink>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {repairShowcase.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 0.05}
              className={index === 0 ? "sm:col-span-2" : undefined}
            >
              <article className="h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                <div
                  className={
                    index === 0
                      ? "relative overflow-hidden rounded-[1.6rem] aspect-[16/10] sm:aspect-[16/9]"
                      : "image-card-tall lg:min-h-[280px]"
                  }
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 52vw"
                        : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 26vw"
                    }
                    className={index === 0 ? "object-cover object-center" : "image-fill-portrait"}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,21,0.04),rgba(7,16,21,0.62))]" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                    {item.label}
                  </div>
                </div>

                <div className="px-3 pb-4 pt-6">
                  <h3 className="text-2xl leading-tight text-white">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-300">{item.description}</p>

                  <ul className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-slate-300">
                    {item.applications.map((application) => (
                      <li
                        key={application}
                        className="rounded-full border border-white/10 px-3 py-2"
                      >
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

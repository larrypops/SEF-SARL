import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/data";

export function ServicesOverview() {
  return (
    <section className="section-divider section-space">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Réparation, diagnostic et accompagnement technique pour les circuits d’injection diesel."
            description="Chaque prestation répond à un besoin concret : remettre un moteur en état, fiabiliser une pompe d’injection, corriger un défaut d’injecteurs ou sécuriser une intervention technique sur véhicule diesel."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.06}>
              <article className="panel h-full p-8 md:p-10">
                <div className="flex items-start justify-between gap-6">
                  <span className="font-display text-sm uppercase tracking-[0.3em] text-teal">
                    {service.step}
                  </span>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm uppercase tracking-[0.16em] text-slate-500 transition hover:text-midnight"
                  >
                    Voir le détail
                  </Link>
                </div>

                <h3 className="mt-8 text-2xl leading-tight text-slate-950 md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-slate-600">{service.shortDescription}</p>

                <ul className="mt-8 flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                  {service.equipment.map((item) => (
                    <li key={item} className="rounded-full border border-slate-200 px-3 py-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


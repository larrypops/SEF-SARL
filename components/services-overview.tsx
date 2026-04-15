import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { homeServices } from "@/lib/data";

export function ServicesOverview() {
  return (
    <section className="section-divider section-space">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Réparation, diagnostic, mobilité et assistance électronique pour vos véhicules."
            description="La page d’accueil met en avant le cœur du savoir-faire SEF SARL, avec les services d’injection diesel, la location de véhicule et la reprogrammation des calculateurs et des clés selon les besoins exprimés par le client."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {homeServices.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.06}>
              <article className="panel h-full p-8 md:p-10">
                <div className="flex items-start justify-between gap-6">
                  <span className="font-display text-sm uppercase tracking-[0.3em] text-teal">
                    {service.step}
                  </span>
                  <Link
                    href={"href" in service ? service.href : `/services#${service.id}`}
                    className="text-sm uppercase tracking-[0.16em] text-slate-500 transition hover:text-midnight"
                  >
                    {index < 5 ? "Voir le détail" : "Nouveau service"}
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

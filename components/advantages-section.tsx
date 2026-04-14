import { Reveal } from "@/components/reveal";
import { reasons } from "@/lib/data";

export function AdvantagesSection() {
  return (
    <section className="section-space bg-midnight text-white">
      <div className="container-shell grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <Reveal>
          <p className="eyebrow text-[#8FE7C4]">Pourquoi choisir SEF SARL</p>
          <h2 className="mt-5 text-3xl leading-tight text-balance md:text-5xl">
            Une approche atelier sérieuse, structurée et tournée vers la remise en service durable.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
            Notre valeur ne se limite pas à la réparation. Elle repose sur la capacité à identifier la panne, expliquer les options et intervenir avec un niveau d’exigence rassurant pour des véhicules souvent indispensables à l’activité du client.
          </p>
        </Reveal>

        <div className="space-y-4">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 0.06}>
              <article className="dark-panel grid gap-5 p-6 md:grid-cols-[84px_minmax(0,1fr)] md:items-start md:p-8">
                <div className="font-display text-3xl text-[#8FE7C4] md:text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-2xl text-white">{reason.title}</h3>
                  <p className="mt-3 text-base leading-8 text-slate-300">{reason.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


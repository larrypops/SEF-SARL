import Image from "next/image";

import { ActionLink } from "@/components/action-link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { realisations } from "@/lib/data";

export function RealisationsPreview() {
  return (
    <section className="section-divider section-space">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Réalisations"
            title="Des cas d’intervention concrets pour illustrer la précision de notre travail."
            description="Même lorsque la panne semble incertaine, nous privilégions une lecture technique claire du problème afin de conduire une intervention utile, cohérente et crédible pour le client."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {realisations.slice(0, 3).map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="panel h-full overflow-hidden p-3">
                <div className="image-card-tall lg:min-h-[280px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="image-fill-portrait transition duration-500 hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,21,0),rgba(7,16,21,0.62))]" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                    {item.category}
                  </div>
                </div>

                <div className="px-3 pb-4 pt-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{item.location}</p>
                  <h3 className="mt-3 text-2xl leading-tight text-slate-950">{item.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{item.description}</p>
                  <p className="mt-5 border-t border-slate-200 pt-5 text-sm leading-7 text-slate-500">
                    Résultat : {item.result}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <ActionLink href="/realisations" variant="dark">
            Voir toutes les réalisations
          </ActionLink>
        </Reveal>
      </div>
    </section>
  );
}

import Image from "next/image";

import { ActionLink } from "@/components/action-link";
import { CtaBanner } from "@/components/cta-banner";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { realisations } from "@/lib/data";
import { buildMetadata, getBreadcrumbSchema, getRealisationsSchema, getWebPageSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Réalisations et cas d’intervention en injection diesel",
  description:
    "Explorez des réalisations SEF SARL autour des pompes d’injection, injecteurs diesel, diagnostics fiables, pièces liées au circuit et interventions techniques à Yaoundé et Douala.",
  path: "/realisations",
  imagePath: "/images/hero-image.jpg",
  imageAlt: "Intervention injection diesel SEF SARL à Yaoundé et Douala",
  keywords: ["garage injection diesel Douala", "injecteur diesel Cameroun"]
});

export default function RealisationsPage() {
  return (
    <>
      <JsonLd
        data={getWebPageSchema({
          title: "Réalisations et cas d’intervention en injection diesel",
          description:
            "Explorez des réalisations SEF SARL autour des pompes d’injection, injecteurs diesel, diagnostics fiables, pièces liées au circuit et interventions techniques à Yaoundé et Douala.",
          path: "/realisations",
          type: "CollectionPage",
          imagePath: "/images/hero-image.jpg",
          imageAlt: "Intervention diesel documentée par SEF SARL"
        })}
      />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Accueil", path: "/" },
          { name: "Réalisations", path: "/realisations" }
        ])}
      />
      <JsonLd data={getRealisationsSchema()} />
      <PageHero
        eyebrow="Réalisations"
        title="Des interventions documentées pour montrer la qualité du diagnostic et de la remise en état."
        description="Cette page illustre le type de situations prises en charge par SEF SARL, depuis la pompe d’injection pour camion jusqu’aux injecteurs toutes marques, avec une lecture métier claire de la panne et du résultat attendu."
        highlights={[
          "Pompes d’injection",
          "Injecteurs diesel",
          "Diagnostic, pièces et intervention technique"
        ]}
        image="/images/hero-image.jpg"
        imageAlt="Atelier SEF SARL en intervention sur une pompe d’injection diesel"
      />

      <section className="section-space">
        <div className="container-shell">
          <div className="flex flex-wrap gap-3">
            {["Pompes d’injection", "Injecteurs", "Diagnostic", "Pièces", "Intervention"].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {realisations.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="panel h-full overflow-hidden p-3">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] sm:aspect-square lg:min-h-[310px] lg:aspect-auto">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 46vw"
                      className="object-cover object-center transition duration-500 hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,21,0.06),rgba(7,16,21,0.7))]" />
                    <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                      {item.category}
                    </div>
                    <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                      {item.location}
                    </div>
                  </div>

                  <div className="px-3 pb-5 pt-6">
                    <h2 className="text-3xl leading-tight text-slate-950">{item.title}</h2>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <div className="rounded-[1.4rem] border border-slate-200 bg-white/80 p-5">
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Type de panne ou intervention</p>
                        <p className="mt-3 text-base leading-7 text-slate-600">{item.issue}</p>
                      </div>
                      <div className="rounded-[1.4rem] border border-slate-200 bg-white/80 p-5">
                        <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Résultat obtenu</p>
                        <p className="mt-3 text-base leading-7 text-slate-600">{item.result}</p>
                      </div>
                    </div>

                    <p className="mt-6 text-base leading-8 text-slate-600">{item.description}</p>

                    <div className="mt-6">
                      <ActionLink href="/contact#formulaire" variant="dark">
                        Demander un diagnostic similaire
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

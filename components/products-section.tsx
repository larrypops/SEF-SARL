import Image from "next/image";

import { ActionLink } from "@/components/action-link";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { company } from "@/lib/data";
import { products } from "@/lib/products";

export function ProductsSection() {
  return (
    <section className="section-divider section-space bg-[#EDF3F1]">
      <div className="container-shell grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Produits disponibles"
            title="Quelques références présentées pour les circuits d’injection diesel et les moteurs à forte sollicitation."
            description="SEF SARL met aussi à disposition certaines pièces et références liées à l’injection diesel. La disponibilité se confirme directement par WhatsApp ou téléphone selon le modèle recherché, la référence et le besoin réel du client."
          />

          <div className="mt-10 panel p-7 md:p-8">
            <p className="eyebrow">Disponibilité sur demande</p>
            <p className="mt-5 text-2xl leading-tight text-slate-950">
              Vérifiez rapidement la référence, la compatibilité et la possibilité de mise à disposition.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Envoyez la photo, la référence ou le modèle moteur pour recevoir une réponse plus utile avant déplacement.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ActionLink href={company.whatsappHref} newTab>
                Demander la disponibilité
              </ActionLink>
              <ActionLink href={company.phonePrimaryHref} variant="outline">
                Appeler maintenant
              </ActionLink>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.05}>
              <article className="panel h-full overflow-hidden p-3">
                <div className="image-card-tall lg:min-h-[290px]">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 28vw"
                    className="image-fill-portrait"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,21,0.04),rgba(7,16,21,0.54))]" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                    {product.reference}
                  </div>
                </div>

                <div className="px-3 pb-4 pt-6">
                  <h3 className="text-2xl leading-tight text-slate-950">{product.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{product.description}</p>

                  <ul className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-slate-500">
                    {product.applications.map((item) => (
                      <li key={item} className="rounded-full border border-slate-200 px-3 py-2">
                        {item}
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

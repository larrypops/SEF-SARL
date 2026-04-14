import { ActionLink } from "@/components/action-link";
import { ContactForm } from "@/components/contact-form";
import { CtaBanner } from "@/components/cta-banner";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { company, contactFaqs } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact SEF SARL",
  description:
    "Contactez SEF SARL par téléphone, e-mail ou WhatsApp pour une réparation de pompe d’injection, un diagnostic injecteur diesel ou une intervention technique à Yaoundé et Douala.",
  path: "/contact",
  keywords: ["diagnostic injection diesel Douala", "réparation pompe injection Yaoundé"]
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Un échange direct pour préparer votre diagnostic, votre réparation ou votre intervention technique."
        description="Décrivez votre panne, votre type de véhicule et votre localisation. Nous pourrons vous orienter rapidement vers la solution la plus pertinente pour votre circuit d’injection diesel."
        highlights={["WhatsApp direct", "Téléphone", "Yaoundé et Douala"]}
        image="/images/injections-1.jpg"
        imageAlt="Injecteurs et pompe d’injection diesel en préparation"
      />

      <section className="section-space">
        <div className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Reveal>
            <div className="panel h-full p-7">
              <p className="eyebrow">Téléphone 1</p>
              <a href={company.phonePrimaryHref} className="mt-5 block text-2xl text-slate-950">
                {company.phonePrimary}
              </a>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Contact principal pour la prise d’informations et les demandes WhatsApp.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="panel h-full p-7">
              <p className="eyebrow">Téléphone 2</p>
              <a href={company.phoneSecondaryHref} className="mt-5 block text-2xl text-slate-950">
                {company.phoneSecondary}
              </a>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Ligne complémentaire pour organiser un passage à l’atelier ou un suivi.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="panel h-full p-7">
              <p className="eyebrow">E-mail</p>
              <a href={company.emailHref} className="mt-5 block break-all text-2xl text-slate-950">
                {company.email}
              </a>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Idéal pour transmettre des détails techniques ou préparer une demande complète.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="panel h-full p-7">
              <p className="eyebrow">WhatsApp</p>
              <p className="mt-5 text-2xl text-slate-950">Réponse rapide</p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Envoyez vos symptômes, votre ville et le type de véhicule pour un premier retour utile.
              </p>
              <div className="mt-6">
                <ActionLink href={company.whatsappHref} newTab>
                  Contacter sur WhatsApp
                </ActionLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-divider section-space bg-[#EDF3F1]">
        <div className="container-shell grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.08}>
              <aside className="panel p-7 md:p-8">
                <p className="eyebrow">Zones d’intervention</p>
                <div className="mt-6 space-y-5">
                  {company.locations.map((location) => (
                    <div key={location.label} className="border-t border-slate-200 pt-5 first:border-t-0 first:pt-0">
                      <p className="text-xl text-slate-950">{location.city}</p>
                      <p className="mt-2 text-base leading-8 text-slate-600">{location.area}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </Reveal>

            <Reveal delay={0.12}>
              <aside className="panel p-7 md:p-8">
                <p className="eyebrow">Horaires</p>
                <p className="mt-6 text-2xl leading-tight text-slate-950">
                  Organisation des passages et interventions sur confirmation.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600">{company.hoursNote}</p>
                <div className="mt-6">
                  <ActionLink href={company.phonePrimaryHref} variant="dark">
                    Appeler maintenant
                  </ActionLink>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="panel h-full overflow-hidden p-3">
              <div className="relative min-h-[320px] rounded-[1.65rem] bg-[linear-gradient(135deg,#071015,#0B5FFF_70%,#14A06F)] p-8 text-white">
                <div className="absolute inset-0 opacity-25">
                  <div className="subtle-grid absolute inset-0" />
                </div>
                <div className="relative">
                  <p className="eyebrow text-[#8FE7C4]">Carte de localisation</p>
                  <h2 className="mt-5 text-3xl leading-tight md:text-4xl">
                    Repères d’accès à Yaoundé et à Douala
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-8 text-slate-100">
                    Yaoundé, Tropicana, à environ 20 m de l’Institut Universitaire NDI Samba. Douala, Nyalla Pariso. Les indications précises peuvent être confirmées par téléphone ou WhatsApp selon votre ville.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="panel h-full p-8">
              <p className="eyebrow">Préparer votre demande</p>
              <h2 className="mt-5 text-3xl leading-tight text-slate-950 md:text-4xl">
                Les informations utiles pour un premier diagnostic plus rapide.
              </h2>
              <ul className="mt-8 space-y-5">
                {[
                  "Le type de véhicule ou d’équipement concerné",
                  "Les symptômes observés : démarrage difficile, fumée, perte de puissance, ralenti instable",
                  "La ville où se trouve le véhicule",
                  "Les interventions déjà réalisées, si vous en avez"
                ].map((item) => (
                  <li key={item} className="flex gap-4 border-t border-slate-200 pt-5">
                    <span className="mt-2 h-2 w-2 rounded-full bg-teal" />
                    <span className="text-base leading-8 text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection
        eyebrow="Mini FAQ contact"
        title="Les réponses utiles avant de nous appeler ou de nous écrire."
        description="Quelques repères simples pour choisir le bon canal de contact et préparer les informations qui nous aideront à vous orienter rapidement."
        items={contactFaqs}
      />

      <CtaBanner />
    </>
  );
}

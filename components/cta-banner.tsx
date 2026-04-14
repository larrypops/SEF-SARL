import { ActionLink } from "@/components/action-link";
import { Reveal } from "@/components/reveal";
import { company, finalCta } from "@/lib/data";

export function CtaBanner() {
  return (
    <section className="section-space bg-midnight text-white">
      <div className="container-shell">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 px-8 py-10 md:px-12 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,95,255,0.24),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(20,160,111,0.26),transparent_28%)]" />
          <div className="subtle-grid absolute inset-0 opacity-40" />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow text-[#8FE7C4]">Contact direct</p>
              <h2 className="mt-5 text-3xl leading-tight text-balance md:text-5xl">
                {finalCta.title}
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
                {finalCta.description}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <ActionLink href={company.whatsappHref} newTab>
                Contacter sur WhatsApp
              </ActionLink>
              <ActionLink href={company.phonePrimaryHref} variant="secondary">
                Appeler maintenant
              </ActionLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


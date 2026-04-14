import Image from "next/image";

import { ActionLink } from "@/components/action-link";
import { Reveal } from "@/components/reveal";
import { company } from "@/lib/data";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  highlights,
  image,
  imageAlt
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-midnight text-white">
      <div className="absolute inset-0 opacity-60">
        <div className="subtle-grid absolute inset-0" />
        <div className="absolute inset-0 bg-soft-radial" />
      </div>

      <div className="container-shell relative grid gap-12 py-16 md:py-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:items-center">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-[#8FE7C4]">{eyebrow}</p>
          <h1 className="mt-5 text-4xl leading-tight text-balance md:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ActionLink href={company.whatsappHref} newTab>
              Contacter sur WhatsApp
            </ActionLink>
            <ActionLink href={company.phonePrimaryHref} variant="secondary">
              Appeler maintenant
            </ActionLink>
          </div>

          <ul className="mt-10 grid gap-3 text-sm uppercase tracking-[0.18em] text-slate-300 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <li key={highlight} className="border-t border-white/10 pt-3">
                {highlight}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12} className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,21,0.08),rgba(7,16,21,0.68))]" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="dark-panel p-5">
              <p className="text-xs uppercase tracking-[0.32em] text-[#8FE7C4]">SEF SARL</p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-slate-200">
                Intervention fiable à Yaoundé, Douala et pour les besoins diesel professionnels au Cameroun.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


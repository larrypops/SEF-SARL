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
    <section className="relative isolate overflow-hidden bg-midnight text-white">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(7,16,21,0.92)_14%,rgba(7,16,21,0.72)_44%,rgba(7,16,21,0.54)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,95,255,0.24),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(20,160,111,0.2),transparent_24%)]" />
        <div className="subtle-grid absolute inset-0 opacity-[0.28]" />
      </div>

      <div className="container-shell relative flex min-h-[calc(76svh-5rem)] items-end py-16 md:py-20">
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
      </div>
    </section>
  );
}

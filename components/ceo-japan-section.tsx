import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ceoJapanJourney } from "@/lib/data";

export function CeoJapanSection() {
  return (
    <section className="section-divider section-space bg-[#EDF3F1]">
      <div className="container-shell grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Parcours du dirigeant"
            title={ceoJapanJourney.title}
            description={ceoJapanJourney.description}
          />

          <div className="mt-10 space-y-5">
            {ceoJapanJourney.highlights.map((highlight, index) => (
              <Reveal key={highlight} delay={index * 0.05}>
                <div className="panel p-6 md:p-7">
                  <p className="text-base leading-8 text-slate-600">{highlight}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {ceoJapanJourney.gallery.map((item, index) => (
            <Reveal
              key={item.image}
              delay={index * 0.05}
              className={index === 0 ? "sm:col-span-2" : undefined}
            >
              <article className="panel h-full overflow-hidden p-3">
                <div
                  className={
                    index === 0
                      ? "relative overflow-hidden rounded-[1.65rem] aspect-[4/3] sm:aspect-[16/10]"
                      : "image-card-tall lg:min-h-[300px]"
                  }
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 52vw"
                        : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 26vw"
                    }
                    className={index === 0 ? "object-cover object-center" : "image-fill-portrait"}
                  />
                </div>

                <div className="px-3 pb-4 pt-5">
                  <p className="text-sm leading-7 text-slate-600">{item.caption}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

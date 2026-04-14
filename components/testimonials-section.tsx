import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  return (
    <section className="section-space bg-[#EDF3F1]">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Retours clients"
            title="Ce que nos clients apprécient le plus chez SEF SARL."
            description="Nous ne cherchons pas à promettre plus que nécessaire. Ce qui revient le plus souvent, c’est la clarté du diagnostic, la qualité de l’intervention et le sérieux dans le suivi."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="panel h-full p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-teal">{item.audience}</p>
                <h3 className="mt-5 text-2xl leading-tight text-slate-950">{item.title}</h3>
                <p className="mt-5 text-base leading-8 text-slate-600">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


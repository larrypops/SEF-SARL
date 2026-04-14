import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly FaqItem[];
  invert?: boolean;
};

export function FaqSection({
  eyebrow,
  title,
  description,
  items,
  invert = false
}: FaqSectionProps) {
  return (
    <section className={cn("section-divider section-space", invert && "border-white/10 bg-midnight text-white")}>
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            invert={invert}
          />
        </Reveal>

        <div className="mt-14 grid gap-4">
          {items.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.04}>
              <details
                className={cn(
                  "rounded-[1.6rem] border p-6 md:p-8",
                  invert ? "border-white/10 bg-white/5" : "border-slate-200 bg-white/80"
                )}
              >
                <summary className="cursor-pointer list-none pr-8 text-lg font-semibold leading-8 text-balance">
                  {item.question}
                </summary>
                <p className={cn("mt-4 max-w-4xl text-base leading-8", invert ? "text-slate-300" : "text-slate-600")}>
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


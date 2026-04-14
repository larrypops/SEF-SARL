import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        invert && "text-white",
        className
      )}
    >
      <p className={cn("eyebrow", invert && "text-[#8FE7C4]")}>{eyebrow}</p>
      <h2
        className={cn(
          "mt-4 text-3xl leading-tight text-balance md:text-5xl",
          invert ? "text-white" : "text-slate-950"
        )}
      >
        {title}
      </h2>
      <p className={cn("mt-5 text-base leading-8 md:text-lg", invert ? "text-slate-300" : "text-slate-600")}>
        {description}
      </p>
    </div>
  );
}

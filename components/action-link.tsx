import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "outline";
  newTab?: boolean;
};

const variants = {
  primary: "button-primary",
  secondary: "button-secondary",
  dark: "button-dark",
  outline: "button-outline"
} as const;

export function ActionLink({
  href,
  children,
  className,
  variant = "primary",
  newTab = false
}: ActionLinkProps) {
  const classes = cn(variants[variant], className);
  const isWhatsAppLink = href.includes("wa.me/");
  const content = (
    <>
      {isWhatsAppLink ? <WhatsAppIcon className="h-[1.05rem] w-[1.05rem]" /> : null}
      <span>{children}</span>
    </>
  );
  const externalProps = {
    className: classes,
    target: newTab ? "_blank" : undefined,
    rel: newTab ? "noreferrer noopener" : undefined
  };

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} {...externalProps}>
      {content}
    </a>
  );
}

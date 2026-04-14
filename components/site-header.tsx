"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ActionLink } from "@/components/action-link";
import { company, navigation } from "@/lib/data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        isScrolled || isMenuOpen
          ? "border-white/10 bg-midnight/[0.92] shadow-[0_18px_45px_rgba(7,16,21,0.35)] backdrop-blur-xl"
          : "border-white/5 bg-midnight/70 backdrop-blur-md"
      )}
    >
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="min-w-0">
          <span className="block font-display text-[1.45rem] uppercase tracking-[0.28em] text-white sm:text-[1.65rem]">
            SEF SARL
          </span>
          <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.34em] text-slate-300 sm:text-[0.72rem]">
            Injection diesel | Cameroun
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm uppercase tracking-[0.16em] transition-colors",
                  isActive ? "text-white" : "text-slate-300 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.phonePrimaryHref}
            className="hidden text-sm font-medium text-slate-200 transition hover:text-white xl:inline-flex"
          >
            {company.phonePrimary}
          </a>
          <ActionLink href={company.whatsappHref} newTab className="px-5 py-3">
            Contacter sur WhatsApp
          </ActionLink>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-white/30 lg:hidden"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "h-0.5 w-5 bg-white transition-transform duration-300",
                isMenuOpen && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 bg-white transition-opacity duration-300",
                isMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-5 bg-white transition-transform duration-300",
                isMenuOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 lg:hidden"
          >
            <div className="container-shell flex flex-col gap-5 py-5">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-sm uppercase tracking-[0.18em]",
                        isActive ? "text-white" : "text-slate-300"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="glow-line" />

              <div className="flex flex-col gap-3">
                <a href={company.phonePrimaryHref} className="text-sm text-slate-200">
                  {company.phonePrimary}
                </a>
                <a href={company.phoneSecondaryHref} className="text-sm text-slate-200">
                  {company.phoneSecondary}
                </a>
                <ActionLink href={company.whatsappHref} newTab className="w-full">
                  Contacter sur WhatsApp
                </ActionLink>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

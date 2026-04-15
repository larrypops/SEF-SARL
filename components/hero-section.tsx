"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ActionLink } from "@/components/action-link";
import { company, homeHighlights } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 }
};

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-midnight text-white">
      <motion.div
        aria-hidden
        className="absolute inset-0"
        initial={reduceMotion ? undefined : { scale: 1.06 }}
        animate={reduceMotion ? undefined : { scale: 1 }}
        transition={reduceMotion ? undefined : { duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/hero-mobile.jpeg" />
          <img
            src="/images/hero-image.jpg"
            alt=""
            className="h-full w-full object-cover object-top md:object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,16,21,0.92)_16%,rgba(7,16,21,0.68)_44%,rgba(7,16,21,0.36)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(11,95,255,0.24),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(20,160,111,0.22),transparent_20%)]" />
        <div className="subtle-grid absolute inset-0 opacity-[0.35]" />
      </motion.div>

      <div className="container-shell relative flex min-h-[calc(100svh-5rem)] items-end py-16 md:py-20">
        <motion.div
          className="max-w-3xl"
          initial={reduceMotion ? undefined : "hidden"}
          animate={reduceMotion ? undefined : "visible"}
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-lg uppercase tracking-[0.34em] text-[#8FE7C4] md:text-xl"
          >
            SEF SARL
          </motion.p>

          <motion.h1
            variants={itemVariants}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-4xl leading-[1.02] text-balance md:max-w-3xl md:text-7xl"
          >
            Spécialiste en injection diesel à Yaoundé et Douala
          </motion.h1>

          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg"
          >
            SEF SARL vous accompagne pour la réparation des pompes d’injection, la remise en état des injecteurs mécaniques et électroniques, le diagnostic fiable et la vente de pièces liées aux circuits d’injection diesel.
          </motion.p>

          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <ActionLink href="/contact#formulaire">Demander un diagnostic</ActionLink>
            <ActionLink href={company.whatsappHref} variant="secondary" newTab>
              Contacter sur WhatsApp
            </ActionLink>
          </motion.div>

          <motion.ul
            variants={itemVariants}
            transition={{ duration: 0.74, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid gap-4 border-t border-white/10 pt-6 text-sm uppercase tracking-[0.16em] text-slate-200 sm:grid-cols-3"
          >
            {homeHighlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-teal" />
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="absolute bottom-10 right-6 hidden max-w-sm border-l border-white/[0.15] pl-6 text-right lg:block">
          <p className="text-xs uppercase tracking-[0.32em] text-[#8FE7C4]">Présence locale</p>
          <p className="mt-3 text-sm leading-7 text-slate-200">
            Yaoundé, Tropicana, à environ 20 m de l’Institut Universitaire NDI Samba.
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-200">Douala, Nyalla Pariso.</p>
        </div>
      </div>
    </section>
  );
}

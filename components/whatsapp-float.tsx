"use client";

import { motion, useReducedMotion } from "framer-motion";

import { company } from "@/lib/data";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function WhatsAppFloat() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={company.whatsappHref}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Contacter SEF SARL sur WhatsApp"
      initial={reduceMotion ? undefined : { opacity: 0, y: 22, scale: 0.94 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-3 rounded-full bg-teal px-4 py-3 text-sm font-semibold tracking-[0.08em] text-white shadow-[0_18px_40px_rgba(20,160,111,0.35)] transition hover:bg-[#10875F]"
    >
      <motion.span
        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-teal"
        animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 2.8, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1.2, ease: "easeInOut" }
        }
      >
        <WhatsAppIcon className="h-5 w-5" />
      </motion.span>
      <span>WhatsApp</span>
    </motion.a>
  );
}

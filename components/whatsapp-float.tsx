import { company } from "@/lib/data";
import { WhatsAppIcon } from "@/components/whatsapp-icon";

export function WhatsAppFloat() {
  return (
    <a
      href={company.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter SEF SARL sur WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-3 rounded-full bg-teal px-4 py-3 text-sm font-semibold tracking-[0.08em] text-white shadow-[0_18px_40px_rgba(20,160,111,0.35)] transition hover:-translate-y-0.5 hover:bg-[#10875F]"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-teal">
        <WhatsAppIcon className="h-5 w-5" />
      </span>
      <span>WhatsApp</span>
    </a>
  );
}

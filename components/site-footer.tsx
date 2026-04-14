import Image from "next/image";
import Link from "next/link";

import { ActionLink } from "@/components/action-link";
import { company, navigation, services } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-midnight text-white">
      <div className="absolute inset-0 opacity-70">
        <div className="subtle-grid absolute inset-0" />
        <div className="absolute inset-0 bg-soft-radial" />
      </div>

      <div className="container-shell relative py-14 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,0.75fr))]">
          <div className="max-w-xl">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
              <Image
                src="/images/logo.jpg"
                alt="Logo SEF SARL"
                width={820}
                height={200}
                className="h-auto w-full object-contain"
              />
            </div>
            <p className="mt-6 text-base leading-8 text-slate-300">{company.longDescription}</p>
            <div className="mt-6">
              <ActionLink href={company.whatsappHref} newTab>
                Contacter sur WhatsApp
              </ActionLink>
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#8FE7C4]">Navigation</p>
            <ul className="mt-5 space-y-3 text-slate-300">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#8FE7C4]">Services</p>
            <ul className="mt-5 space-y-3 text-slate-300">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`} className="transition hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#8FE7C4]">Contacts</p>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li>
                <a href={company.phonePrimaryHref} className="transition hover:text-white">
                  {company.phonePrimary}
                </a>
              </li>
              <li>
                <a href={company.phoneSecondaryHref} className="transition hover:text-white">
                  {company.phoneSecondary}
                </a>
              </li>
              <li>
                <a href={company.emailHref} className="transition hover:text-white">
                  {company.email}
                </a>
              </li>
              {company.locations.map((location) => (
                <li key={location.label}>
                  {location.city} - {location.area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} SEF SARL. Tous droits réservés.</p>
          <p>Villes desservies : Yaoundé, Douala, Cameroun.</p>
        </div>
      </div>
    </footer>
  );
}

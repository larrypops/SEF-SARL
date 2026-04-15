import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { getLocalBusinessSchema, getWebsiteSchema, rootMetadata } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = rootMetadata;
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071015",
  colorScheme: "light"
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr-CM">
      <body className="min-h-screen overflow-x-clip">
        <JsonLd data={getWebsiteSchema()} />
        <JsonLd data={getLocalBusinessSchema()} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

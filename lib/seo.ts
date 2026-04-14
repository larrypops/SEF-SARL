import type { Metadata } from "next";

import { company, faqs, services } from "@/lib/data";
import { siteUrl } from "@/lib/site-url";

const ogImage = "/images/hero-image.jpg";

const baseKeywords = [
  "réparation pompe injection Yaoundé",
  "injecteur diesel Cameroun",
  "spécialiste injection diesel Yaoundé",
  "diagnostic injection diesel Douala",
  "réparation injecteurs électroniques Cameroun",
  "maintenance circuit injection diesel",
  "pièces injection diesel Yaoundé",
  "réparation pompe injection camion Cameroun",
  "garage injection diesel Douala",
  "réparation injecteurs toutes marques"
];

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Injection diesel à Yaoundé et Douala`,
    template: `%s | ${company.name}`
  },
  description: company.longDescription,
  applicationName: company.name,
  keywords: baseKeywords,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "fr_CM",
    url: "/",
    title: `${company.name} | Injection diesel à Yaoundé et Douala`,
    description: company.longDescription,
    siteName: company.name,
    images: [
      {
        url: ogImage,
        width: 1365,
        height: 768,
        alt: `${company.name} - atelier injection diesel`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Injection diesel à Yaoundé et Douala`,
    description: company.longDescription,
    images: [ogImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1
    }
  }
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = []
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    keywords: [...baseKeywords, ...keywords],
    alternates: {
      canonical: path
    },
    openGraph: {
      type: "website",
      locale: "fr_CM",
      url: path,
      siteName: company.name,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1365,
          height: 768,
          alt: `${company.name} - spécialiste injection diesel`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage]
    }
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: company.legalName,
    description: company.longDescription,
    image: absoluteUrl(ogImage),
    url: siteUrl,
    telephone: company.phonePrimary,
    email: company.email,
    areaServed: company.serviceAreas.map((area) => ({
      "@type": area === "Cameroun" ? "Country" : "City",
      name: area
    })),
    address: company.locations.map((location) => ({
      "@type": "PostalAddress",
      streetAddress: location.area,
      addressLocality: location.city,
      addressCountry: "CM"
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: company.phonePrimary,
        contactType: "customer service",
        areaServed: "CM",
        availableLanguage: ["fr"]
      },
      {
        "@type": "ContactPoint",
        telephone: company.phoneSecondary,
        contactType: "customer service",
        areaServed: "CM",
        availableLanguage: ["fr"]
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services injection diesel",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription
        }
      }))
    }
  };
}

export function getFaqSchema(items = faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function getServicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services SEF SARL",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.longDescription,
        areaServed: company.serviceAreas
      }
    }))
  };
}

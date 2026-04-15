import type { Metadata } from "next";

import { company, faqs, realisations, services } from "@/lib/data";
import { siteUrl } from "@/lib/site-url";

const defaultShareImage = "/images/hero-image.jpg";
const generatedOgImage = "/opengraph-image";

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
  imagePath?: string;
  imageAlt?: string;
};

type SchemaPageInput = {
  title: string;
  description: string;
  path: string;
  type?: "WebPage" | "CollectionPage" | "AboutPage" | "ContactPage";
  imagePath?: string;
  imageAlt?: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

function getShareImages(
  imagePath = defaultShareImage,
  imageAlt = `${company.name} - spécialiste injection diesel au Cameroun`
) {
  return [
    {
      url: absoluteUrl(imagePath),
      width: 1365,
      height: 768,
      alt: imageAlt
    },
    {
      url: absoluteUrl(generatedOgImage),
      width: 1200,
      height: 630,
      alt: `${company.name} - réparation de pompes et injecteurs diesel au Cameroun`
    }
  ];
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Injection diesel à Yaoundé et Douala`,
    template: `%s | ${company.name}`
  },
  description: company.longDescription,
  applicationName: company.name,
  manifest: "/manifest.webmanifest",
  category: "Automotive",
  creator: company.name,
  publisher: company.legalName,
  keywords: baseKeywords,
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: ["/icon.svg"]
  },
  openGraph: {
    type: "website",
    locale: "fr_CM",
    url: "/",
    title: `${company.name} | Injection diesel à Yaoundé et Douala`,
    description: company.longDescription,
    siteName: company.name,
    images: getShareImages(defaultShareImage, `${company.name} - atelier injection diesel au Cameroun`)
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Injection diesel à Yaoundé et Douala`,
    description: company.longDescription,
    images: [absoluteUrl(defaultShareImage), absoluteUrl(generatedOgImage)]
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
  keywords = [],
  imagePath = defaultShareImage,
  imageAlt = `${company.name} - spécialiste injection diesel`
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
      images: getShareImages(imagePath, imageAlt)
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(imagePath), absoluteUrl(generatedOgImage)]
    }
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: company.name,
    alternateName: company.legalName,
    url: siteUrl,
    description: company.longDescription,
    inLanguage: "fr-CM",
    publisher: {
      "@id": absoluteUrl("/#localbusiness")
    },
    image: absoluteUrl(defaultShareImage)
  };
}

export function getLocalBusinessSchema() {
  const [primaryLocation] = company.locations;
  const businessImages = Array.from(
    new Set([defaultShareImage, "/images/hero-mobile.jpeg", ...services.map((service) => service.image)])
  ).map((image) => absoluteUrl(image));

  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": absoluteUrl("/#localbusiness"),
    name: company.legalName,
    alternateName: company.name,
    description: company.longDescription,
    slogan: company.tagline,
    image: businessImages,
    logo: absoluteUrl("/images/logo.jpg"),
    url: siteUrl,
    telephone: company.phonePrimary,
    email: company.email,
    priceRange: "$$",
    currenciesAccepted: "XAF",
    areaServed: company.serviceAreas.map((area) => ({
      "@type": area === "Cameroun" ? "Country" : "City",
      name: area
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: primaryLocation.area,
      addressLocality: primaryLocation.city,
      addressCountry: "CM"
    },
    location: company.locations.map((location) => ({
      "@type": "Place",
      name: location.label,
      address: {
        "@type": "PostalAddress",
        streetAddress: location.area,
        addressLocality: location.city,
        addressCountry: "CM"
      }
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
    serviceType: services.map((service) => service.title),
    knowsAbout: baseKeywords,
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

export function getFaqSchema(items: readonly FaqItem[] = faqs, path = "/") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": absoluteUrl(`${path}#faq`),
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
    "@id": absoluteUrl("/services#services"),
    name: "Services SEF SARL",
    url: absoluteUrl("/services"),
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.longDescription,
        url: absoluteUrl(`/services#${service.id}`),
        image: absoluteUrl(service.image),
        areaServed: company.serviceAreas,
        provider: {
          "@id": absoluteUrl("/#localbusiness")
        }
      }
    }))
  };
}

export function getRealisationsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": absoluteUrl("/realisations#cases"),
    name: "Réalisations SEF SARL",
    url: absoluteUrl("/realisations"),
    itemListElement: realisations.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: item.title,
        image: absoluteUrl(item.image),
        description: `${item.issue}. ${item.result}`,
        contentLocation: item.location
      }
    }))
  };
}

export function getWebPageSchema({
  title,
  description,
  path,
  type = "WebPage",
  imagePath,
  imageAlt
}: SchemaPageInput) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": absoluteUrl(`${path}#webpage`),
    url: absoluteUrl(path),
    name: title,
    description,
    inLanguage: "fr-CM",
    isPartOf: {
      "@id": absoluteUrl("/#website")
    },
    about: {
      "@id": absoluteUrl("/#localbusiness")
    },
    ...(imagePath
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: absoluteUrl(imagePath),
            caption: imageAlt || title
          }
        }
      : {})
  };
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

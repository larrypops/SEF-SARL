import type { MetadataRoute } from "next";

import { realisations, services } from "@/lib/data";
import { absoluteUrl } from "@/lib/seo";
import { siteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const uniqueServiceImages = Array.from(new Set(services.map((service) => service.image))).slice(0, 4);
  const uniqueCaseImages = Array.from(new Set(realisations.map((item) => item.image))).slice(0, 4);
  const routes = [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly" as const,
      priority: 1,
      images: [
        absoluteUrl("/images/hero-image.jpg"),
        absoluteUrl("/images/hero-mobile.jpeg"),
        ...uniqueServiceImages.map((image) => absoluteUrl(image))
      ]
    },
    {
      url: `${siteUrl}/services`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: uniqueServiceImages.map((image) => absoluteUrl(image))
    },
    {
      url: `${siteUrl}/realisations`,
      changeFrequency: "monthly" as const,
      priority: 0.82,
      images: uniqueCaseImages.map((image) => absoluteUrl(image))
    },
    {
      url: `${siteUrl}/a-propos`,
      changeFrequency: "monthly" as const,
      priority: 0.78,
      images: [absoluteUrl("/images/image-01.jpeg"), absoluteUrl("/images/logo.jpg")]
    },
    {
      url: `${siteUrl}/contact`,
      changeFrequency: "monthly" as const,
      priority: 0.86,
      images: [absoluteUrl("/images/injections-1.jpg"), absoluteUrl("/images/logo.jpg")]
    }
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images: route.images
  }));
}

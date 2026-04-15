import type { MetadataRoute } from "next";

import { company } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.name} | Injection diesel au Cameroun`,
    short_name: company.name,
    description: company.longDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#071015",
    theme_color: "#071015",
    lang: "fr-CM",
    categories: ["automotive", "business", "services"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      }
    ]
  };
}

const FALLBACK_SITE_URL = "https://www.sefsarl.cm";

function normalizeSiteUrl(value: string) {
  const trimmed = value.trim().replace(/\/+$/, "");

  if (!trimmed) {
    return FALLBACK_SITE_URL;
  }

  return trimmed.startsWith("http://") || trimmed.startsWith("https://")
    ? trimmed
    : `https://${trimmed}`;
}

export function getSiteUrl() {
  const explicitSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const vercelPreviewUrl = process.env.VERCEL_URL;

  return normalizeSiteUrl(
    explicitSiteUrl || vercelProductionUrl || vercelPreviewUrl || FALLBACK_SITE_URL
  );
}

export const siteUrl = getSiteUrl();

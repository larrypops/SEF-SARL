export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function sanitizePhone(phone: string) {
  return phone.replace(/[^\d+]/g, "");
}

export function createTelHref(phone: string) {
  return `tel:${sanitizePhone(phone)}`;
}

export function createMailHref(email: string) {
  return `mailto:${email}`;
}

export function createWhatsAppHref(phone: string, message: string) {
  const numericPhone = phone.replace(/[^\d]/g, "");
  return `https://wa.me/${numericPhone}?text=${encodeURIComponent(message)}`;
}


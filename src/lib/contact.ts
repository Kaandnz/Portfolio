import { personalInfo } from "@/data/portfolioData";

export const mailtoHref = `mailto:${personalInfo.email}`;

/** wa.me link with a localized prefilled greeting; the number is never shown as text. */
export function whatsappHref(greeting: string): string {
  return `https://wa.me/${personalInfo.phone.replace(/\D/g, "")}?text=${encodeURIComponent(greeting)}`;
}

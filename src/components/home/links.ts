export const EMAIL = "hello@vetra.co.in";
export const PHONE = "+91 90219 61058";
const WHATSAPP = "919021961058";

export const mail = (subject: string) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
export const whatsapp = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

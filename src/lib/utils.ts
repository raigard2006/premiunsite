import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 11) {
    return `+${cleaned[0]} (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + "...";
}

export function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export const SITE_CONFIG = {
  name: "Elite Dental & Wellness",
  tagline: "Where Excellence Meets Care",
  phone: "+1 (416) 555-0123",
  email: "hello@eliteclinic.com",
  address: "200 Bay Street, Suite 2800, Toronto, ON M5J 2J2",
  hours: "Mon–Fri: 8am–6pm | Sat: 9am–4pm",
  social: {
    instagram: "https://instagram.com/eliteclinic",
    facebook: "https://facebook.com/eliteclinic",
    twitter: "https://twitter.com/eliteclinic",
    linkedin: "https://linkedin.com/company/eliteclinic",
  },
};

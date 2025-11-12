import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const openWhatsapp = function (message: string) {
  const url = `https://wa.me/966535934992?text=${message}`;
};

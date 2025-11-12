import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { managerInfo } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleWhatsApp = (message?: string) => {
  const defaultMessage = encodeURIComponent(
    "Hi! I need laundry service in Makkah. Please send pickup details."
  );

  const number = Number(managerInfo.onlyNumber.whatsApp);
  window.open(
    `https://wa.me/${number}?text=${message || defaultMessage}`,
    "_blank"
  );
};

export const handleCall = () => {
  const number = Number(managerInfo.onlyNumber.phoneNumber);
  window.open(`tel:+${number}`, "_blank");
};

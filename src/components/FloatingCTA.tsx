import WhatsAppIcon from "./icons/Whatsapp";
import { handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";
export default function FloatingCTA() {
  return (
    <button
      id="generate_lead"
      onClick={() => handleWhatsApp(whatsappMessages.pickup, true)}
      className="fixed z-50 bottom-4 right-4 md:bottom-10 md:right-10 w-[70px] h-[70px] bg-gradient-to-r from-primary/85 via-primary to-secondary rounded-full flex items-center justify-center cursor-pointer hover:from-primary hover:via-primary hover:to-secondary/90 shadow-lg shadow-primary/30 transition-all duration-200"
    >
      <WhatsAppIcon size={30} className="text-white pointer-events-none" />
    </button>
  );
}

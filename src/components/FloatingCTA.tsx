import WhatsAppIcon from "./icons/Whatsapp";
import { handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";
export default function FloatingCTA() {
  return (
    <button
      id="generate_lead"
      onClick={() => handleWhatsApp(whatsappMessages.pickup, true)}
      className="fixed z-50 bottom-4 right-4 md:bottom-10 md:right-10 w-[70px] h-[70px] bg-gradient-to-r from-emerald-400 via-emerald-500 to-green-500 rounded-full flex items-center justify-center cursor-pointer hover:from-emerald-500 hover:via-emerald-600 hover:to-green-600 shadow-lg shadow-emerald-500/25 transition-all duration-200"
    >
      <WhatsAppIcon size={30} className="text-white pointer-events-none" />
    </button>
  );
}

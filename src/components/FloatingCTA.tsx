import { Button } from "./ui/button";
import WhatsAppIcon from "./icons/Whatsapp";
export default function FloatingCTA() {
  return (
    <div className="fixed z-50 bottom-4 right-4 md:bottom-10 md:right-10 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 duration-200">
      <WhatsAppIcon size={30} className="text-white" />
    </div>
  );
}

import { handleWhatsApp } from "@/lib/utils";
import WhatsAppIcon from "./icons/Whatsapp";
import { whatsappMessages } from "@/constants/messages";
import {
  Shirt,
  UserCheck,
  Clock,
  Package,
  DollarSign,
  Wind,
  CheckCircle,
} from "lucide-react";
import { Button } from "./ui/button";

const guideItems = [
  {
    icon: <Shirt className="h-7 w-7 text-primary" />,
    title: "Keeping White Garments Bright",
    content:
      "White garments need gentle washing and the right drying process to stay fresh, soft, and presentable during your stay.",
    tips: [
      "Use a gentle wash cycle for delicate white fabrics.",
      "Choose mild detergent when fabric sensitivity matters.",
      "Dry carefully to help garments keep their clean look.",
    ],
  },
  {
    icon: <UserCheck className="h-7 w-7 text-primary" />,
    title: "Abaya and Thobe Finishing",
    content:
      "Traditional garments look best when washing, steaming, and pressing are handled with extra attention to shape and drape.",
    tips: [
      "Separate embellished pieces from everyday items.",
      "Ask for pressing if you need a sharper finish.",
      "Use express handling when a return time matters.",
    ],
  },
  {
    icon: <Clock className="h-7 w-7 text-primary" />,
    title: "Timing Your Laundry Well",
    content:
      "Good timing helps you avoid running short on clean clothes during busy days, hotel checkouts, or late arrivals.",
    tips: [
      "Request pickup before heading out for the day.",
      "Use express service when you need a fast return.",
      "Keep one spare outfit ready while the order is away.",
    ],
  },
  {
    icon: <Package className="h-7 w-7 text-primary" />,
    title: "Packing Less, Washing Smarter",
    content:
      "Laundry becomes easier when you pack versatile clothes and rely on washing support instead of carrying extra heavy bags.",
    tips: [
      "Bring repeat-wear pieces that wash well.",
      "Choose fabrics that dry and press neatly.",
      "Keep one small bag ready for urgent laundry.",
    ],
  },
  {
    icon: <DollarSign className="h-7 w-7 text-primary" />,
    title: "Planning Your Laundry Budget",
    content:
      "Knowing your likely laundry costs early helps you avoid expensive hotel markups and choose the service speed you actually need.",
    tips: [
      "Compare hotel rates with pickup laundry prices.",
      "Group everyday items into one practical load.",
      "Reserve rush service for the garments that truly need it.",
    ],
  },
  {
    icon: <Wind className="h-7 w-7 text-primary" />,
    title: "Staying Ready Between Washes",
    content:
      "Freshness lasts longer when you rotate garments, air items properly, and book laundry before everything becomes urgent.",
    tips: [
      "Let lightly used clothing air out before rewashing.",
      "Separate daily wear from special garments.",
      "Book pickup before your spare outfits run low.",
    ],
  },
];

export default function PilgrimGuide() {
  return (
    <section
      className="py-16 sm:py-20 bg-gradient-to-br from-white to-primary/5"
      aria-labelledby="guide-heading"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-10 sm:mb-16">
          <h2
            id="guide-heading"
            className="text-3xl sm:text-4xl font-bold mb-4 text-foreground"
          >
            Helpful Laundry Tips for Staying Near Haram
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            A few smart laundry habits can make your stay lighter, cleaner, and
            easier to manage.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {guideItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-sm overflow-hidden border border-primary/10 transition-all hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              {/* Card Header */}
              <div className="bg-primary/5 p-6 border-b border-primary/10">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-muted-foreground mb-5">{item.content}</p>
                <ul className="space-y-3">
                  {item.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-card border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
              Need Advice Before Booking?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Message us anytime if you want help choosing the right service
              speed, garment care option, or pickup time.
            </p>
            <Button
              onClick={() => handleWhatsApp(whatsappMessages.faq)}
              className="bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg hover:shadow-xl transition-all h-12 px-6 text-base font-semibold"
            >
              <WhatsAppIcon className="mr-2" />
              Ask on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

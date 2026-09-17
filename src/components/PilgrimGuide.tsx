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
    title: "Gentle Care for Ihram",
    content:
      "Your Ihram deserves special treatment. Wash it gently with unscented detergent and dry it in the shade to keep it pure and bright.",
    tips: [
      "Use a soft machine cycle or rinse by hand.",
      "Choose mild, fragrance-free detergent.",
      "Dry away from direct sunlight.",
    ],
  },
  {
    icon: <UserCheck className="h-7 w-7 text-primary" />,
    title: "Preserving Abayas & Thobes",
    content:
      "Delicate stitching and fine fabrics call for a careful touch. Dry cleaning suits embellished pieces, while regular pressing keeps thobes sharp.",
    tips: [
      "Dry clean embroidered or delicate abayas.",
      "Steam press thobes after washing.",
      "Call on our express service when time is short.",
    ],
  },
  {
    icon: <Clock className="h-7 w-7 text-primary" />,
    title: "Plan Around Your Routine",
    content:
      "Shape your laundry around your worship schedule. Booking pickups between activities lets you focus on your rituals without the chore.",
    tips: [
      "Use same-day care (orders before 10 AM).",
      "The 3-hour express fits between rituals.",
      "We run pickups all day and night.",
    ],
  },
  {
    icon: <Package className="h-7 w-7 text-primary" />,
    title: "Pack Light & Right",
    content:
      "A lighter bag means less laundry stress. Seasoned travelers suggest moisture-wicking, easy-dry fabrics that match the local climate.",
    tips: [
      "Carry just a few sets, not too many.",
      "Pack 2-3 comfortable thobes or abayas.",
      "Choose quick-drying undergarments.",
    ],
  },
  {
    icon: <DollarSign className="h-7 w-7 text-primary" />,
    title: "Understand the Costs",
    content:
      "Know what fair laundry pricing looks like so you can budget ahead. In-house hotel laundry often charges several times more than a dedicated service.",
    tips: [
      "Budget about 20-25 SAR per kg.",
      "A 3-5 kg load typically runs 60-100 SAR.",
      "Skip hotel upcharges and save up to 70%.",
    ],
  },
  {
    icon: <Wind className="h-7 w-7 text-primary" />,
    title: "Stay Fresh in the Heat",
    content:
      "Makkah's warm climate demands regular washing. Airing garments between uses and planning ahead keeps everything smelling great.",
    tips: [
      "Change Ihram after Tawaf or Sa'i.",
      "Air garments out between wears.",
      "Arrange pickup before heading toward the Haram.",
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
            The Smart Pilgrim's Laundry Guide
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Keep your visit focused and your wardrobe fresh — practical fabric
            care tips for Hajj &amp; Umrah.
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
                      <CheckCircle className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
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
              Curious About Something?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              We understand what visitors to Makkah need. Message us any time
              for honest, personal laundry advice.
            </p>
            <Button
              onClick={() => handleWhatsApp(whatsappMessages.faq)}
              className="bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg hover:shadow-xl transition-all h-12 px-6 text-base font-semibold"
            >
              <WhatsAppIcon className="mr-2" />
              Ask Us on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

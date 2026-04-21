import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { whatsappMessages } from "@/constants/messages";
import { handleWhatsApp } from "@/lib/utils";

const pricePlan = {
  basic: {
    title: "Everyday",
    price: 20,
    feature: [
      "Regular clothes wash & dry",
      "Free pickup and return",
      "Standard same-day handling",
      "Simple fold or hanger finish",
      "Suitable for daily clothing",
    ],
  },
  premium: {
    title: "Express Care",
    price: 25,
    feature: [
      "Everything in Everyday",
      "Professional pressing finish",
      "Spot treatment for visible marks",
      "Fabric-softening care",
      "Neat protective packaging",
      "Faster express turnaround",
    ],
  },
  vip: {
    title: "Priority Plus",
    price: 30,
    feature: [
      "Everything in Express Care",
      "Priority garment handling",
      "Detailed finishing and pressing",
      "Rush support for urgent loads",
      "Extra care for special items",
      "Flexible return coordination",
    ],
  },
};

export default function PricingSection() {
  const handlePlanBooking = (price: number, plan: string) => {
    const message = whatsappMessages.pricePlan
      .replace("<price>", String(price))
      .replace("<plan>", plan);

    handleWhatsApp(message, true);
  };

  return (
    <section className="py-16 sm:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-foreground">
            Pick a Laundry Plan That Matches Your Schedule
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            From everyday washing to priority garment care, each plan is built
            around turnaround speed and finishing detail.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="w-full lg:w-1/3 flex flex-col p-8 bg-card rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground">{pricePlan.basic.title}</h3>
              <p className="mt-2">
                <span className="text-4xl font-bold text-primary">{pricePlan.basic.price} SAR</span>
                <span className="text-lg text-muted-foreground">/kg</span>
              </p>
            </div>
            <hr className="border-border" />
            <ul className="mt-6 space-y-4 text-muted-foreground flex-grow">
              {pricePlan.basic.feature.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <Button
                id="generate_lead"
                onClick={() => handlePlanBooking(pricePlan.basic.price, pricePlan.basic.title)}
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                Choose Everyday
              </Button>
            </div>
          </div>

          {/* Premium Plan (Featured) */}
          <div className="w-full lg:w-1/3 flex flex-col p-8 bg-primary text-primary-foreground rounded-2xl shadow-2xl relative">
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xs font-semibold px-4 py-1 rounded-full uppercase">
                Most Requested
              </div>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold">{pricePlan.premium.title}</h3>
              <p className="mt-2">
                <span className="text-4xl font-bold">{pricePlan.premium.price} SAR</span>
                <span className="text-lg opacity-80">/kg</span>
              </p>
            </div>
            <hr className="border-primary-foreground/30" />
            <ul className="mt-6 space-y-4 opacity-90 flex-grow">
              {pricePlan.premium.feature.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <Button
                id="generate_lead"
                onClick={() => handlePlanBooking(pricePlan.premium.price, pricePlan.premium.title)}
                className="w-full bg-background text-foreground hover:bg-background/90"
              >
                Choose Express Care
              </Button>
            </div>
          </div>

          {/* VIP Plan */}
          <div className="w-full lg:w-1/3 flex flex-col p-8 bg-card rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground">{pricePlan.vip.title}</h3>
              <p className="mt-2">
                <span className="text-4xl font-bold text-primary">{pricePlan.vip.price} SAR</span>
                <span className="text-lg text-muted-foreground">/kg</span>
              </p>
            </div>
            <hr className="border-border" />
            <ul className="mt-6 space-y-4 text-muted-foreground flex-grow">
              {pricePlan.vip.feature.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <Button
                id="generate_lead"
                onClick={() => handlePlanBooking(pricePlan.vip.price, pricePlan.vip.title)}
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                Choose Priority Plus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { handleWhatsApp } from "@/lib/utils";

const pricePlan = {
  basic: {
    title: "Per Kg Laundry",
    price: "Main format",
    feature: [
      "Wash, iron & fold per kg",
      "Express: 2-3 hours",
      "Premium same-day: 7-12 hours",
      "One-day regular / low-cost: 18-24 hours",
      "Wash + dry + fold also available",
    ],
  },
  premium: {
    title: "Per Piece with Hanger",
    price: "Piece-based format",
    feature: [
      "Press / iron with hanger",
      "Press / iron and fold",
      "Express: 2-3 hours",
      "Premium same-day: 7-12 hours",
      "One-day regular: 18-24 hours",
      "Timing depends on garment count and type",
    ],
  },
  vip: {
    title: "VIP Service",
    price: "Handled after review",
    feature: [
      "Special handling support",
      "Suitable for selected garments and requests",
      "Pickup and delivery arranged by area",
      "Delivery timing confirmed with the team",
      "Final price depends on cloth type",
      "Payment details shared when order is confirmed",
    ],
  },
};

export default function PricingSection() {
  const handlePlanBooking = (plan: string) => {
    const message = `Hello,
I would like to choose the *${plan}* option.
Please confirm the pickup details, expected timing, and final price based on cloth type.

Thank you.`;

    handleWhatsApp(message, true);
  };

  return (
    <section className="py-16 sm:py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-foreground">
            Choose the Format That Matches Your Order
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Instead of fixed public prices, the website now shows the real
            service formats and timing options you provided.
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto items-stretch">
          {/* Basic Plan */}
          <div className="flex flex-col p-6 sm:p-8 bg-card rounded-[2rem] border border-border shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-8">
              <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary mb-4">
                Main Option
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                {pricePlan.basic.title}
              </h3>
              <p className="mt-3 text-2xl font-bold text-primary">
                {pricePlan.basic.price}
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Best for customers sending standard laundry by weight with a
                choice of express, same-day, or regular timing.
              </p>
            </div>
            <div className="h-px bg-border mb-6" />
            <ul className="space-y-4 text-muted-foreground flex-grow">
              {pricePlan.basic.feature.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <Button
                id="generate_lead"
                onClick={() => handlePlanBooking(pricePlan.basic.title)}
                size="lg"
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                Ask About Per Kg Laundry
              </Button>
            </div>
          </div>

          {/* Premium Plan (Featured) */}
          <div className="flex flex-col p-6 sm:p-8 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground rounded-[2rem] shadow-2xl relative xl:scale-[1.03]">
            <div className="mb-8 pt-3">
              <div className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] mb-4">
                Featured Format
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold">
                {pricePlan.premium.title}
              </h3>
              <p className="mt-3 text-2xl font-bold">
                {pricePlan.premium.price}
              </p>
              <p className="mt-2 text-sm text-primary-foreground/80 leading-relaxed">
                A clearer option for piece-based finishing when garments need
                hanger return or fold finishing with fixed timing windows.
              </p>
            </div>
            <div className="h-px bg-primary-foreground/20 mb-6" />
            <ul className="space-y-4 opacity-95 flex-grow">
              {pricePlan.premium.feature.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <Button
                id="generate_lead"
                onClick={() => handlePlanBooking(pricePlan.premium.title)}
                size="lg"
                className="w-full bg-background text-foreground hover:bg-background/90 shadow-lg"
              >
                Ask About Piece Service
              </Button>
            </div>
          </div>

          {/* VIP Plan */}
          <div className="flex flex-col p-6 sm:p-8 bg-card rounded-[2rem] border border-border shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-8">
              <div className="inline-flex rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-foreground mb-4">
                Special Handling
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                {pricePlan.vip.title}
              </h3>
              <p className="mt-3 text-2xl font-bold text-primary">
                {pricePlan.vip.price}
              </p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Suitable for selected garments, custom handling requests, and
                orders that need manual confirmation before processing.
              </p>
            </div>
            <div className="h-px bg-border mb-6" />
            <ul className="space-y-4 text-muted-foreground flex-grow">
              {pricePlan.vip.feature.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <Button
                id="generate_lead"
                onClick={() => handlePlanBooking(pricePlan.vip.title)}
                size="lg"
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                Ask About VIP Service
              </Button>
            </div>
          </div>
        </div>
        <p className="text-sm text-center text-muted-foreground max-w-3xl mx-auto mt-8 sm:mt-10 leading-relaxed">
          Final pricing depends on cloth type, garment category, and selected
          return time. Delivery timing is confirmed properly when the order is
          arranged.
        </p>
      </div>
    </section>
  );
}

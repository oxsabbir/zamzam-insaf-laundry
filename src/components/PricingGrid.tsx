import { ArrowRight, Crown, Package, Shirt, Sparkles, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { handleWhatsApp } from "@/lib/utils";

const timingTiers = [
  {
    label: "Express",
    window: "2-3 Hours",
    note: "Wash, iron & fold per kg",
  },
  {
    label: "Premium Same-Day",
    window: "7-12 Hours",
    note: "Balanced timing with same-day return",
  },
  {
    label: "One-Day Regular",
    window: "18-24 Hours",
    note: "Low-cost regular service",
  },
];

const pieceServiceWindows = [
  "Express: 2-3 hours",
  "Premium same-day: 7-12 hours",
  "One-day regular: 18-24 hours",
];

const helperCards = [
  {
    icon: Package,
    title: "Wash + Dry + Fold",
    subtitle: "Per kg service format",
    details: [
      "Good for everyday clothing loads",
      "Timing confirmed when booked",
      "Final price depends on cloth type",
    ],
  },
  {
    icon: Shirt,
    title: "Press / Iron and Fold",
    subtitle: "Per piece finishing option",
    details: [
      "Neat folded return after finishing",
      "Available in the main timing windows",
      "Best confirmed with garment count",
    ],
  },
];

const PricingGrid = () => {
  const handleOrder = (serviceName: string, serviceDetail: string) => {
    const message = `Hello,
I would like to ask about the *${serviceName}* option.
Please confirm the final price, pickup details, and expected return time for *${serviceDetail}*.

Thank you.`;

    handleWhatsApp(message, true);
  };

  return (
    <section className="py-16 sm:py-20 bg-muted/60">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2
            id="services-heading"
            className="text-2xl sm:text-4xl font-bold mb-4 text-foreground"
          >
            Service Formats and Return Windows
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            A cleaner view of the laundry options we currently offer near Haram,
            grouped by timing, garment format, and service level.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-5 sm:gap-6 max-w-6xl mx-auto">
          <div className="lg:col-span-7 rounded-[2rem] border border-primary/15 bg-gradient-to-br from-card via-card to-primary/5 p-5 sm:p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4">
                  <Timer className="h-4 w-4" />
                  Per Kg Laundry
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Wash, Iron & Fold by Timing Tier
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mt-3 max-w-2xl leading-relaxed">
                  The main per kg format is now presented by return window, so
                  customers can immediately see the difference between express,
                  same-day, and regular service.
                </p>
              </div>
              <div className="rounded-2xl bg-background/90 border border-border px-4 py-3 sm:min-w-[180px] sm:self-start">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">
                  Format
                </div>
                <div className="text-lg font-bold text-foreground">
                  Wash, Iron & Fold
                </div>
                <div className="text-sm text-primary font-medium">Per kg</div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {timingTiers.map((tier) => (
                <div
                  key={tier.label}
                  className="h-full rounded-[1.5rem] border border-primary/10 bg-background/90 p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold mb-3">
                    {tier.label}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {tier.window}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tier.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-dashed border-primary/20 bg-primary/5 p-5 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-foreground">
                  Extra per kg format
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Wash + Dry + Fold is also available, with final timing and
                  pricing confirmed when the order is reviewed.
                </p>
              </div>
              <Button
                id="generate_lead"
                onClick={() => handleOrder("Wash, Iron & Fold per kg", "timing tiers")}
                className="bg-primary text-white hover:bg-primary/90 sm:w-auto w-full sm:min-w-[220px]"
              >
                Ask About Per Kg Laundry
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-[2rem] border border-primary/15 bg-gradient-to-br from-primary/10 via-card to-primary/15 p-5 sm:p-8 shadow-lg flex flex-col">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4 self-start">
              <Sparkles className="h-4 w-4" />
              Per Piece
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Press / Iron with Hanger
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
              This block handles the piece-based finishing options, with hanger
              support and clear return windows for customers sending individual
              garments.
            </p>

            <div className="space-y-3 mb-6">
              {pieceServiceWindows.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-primary/10 bg-white/80 px-4 py-3 text-sm font-medium text-foreground"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-[1.5rem] bg-white/75 border border-primary/10 p-4 mb-6">
              <div className="text-sm uppercase tracking-[0.16em] text-primary mb-2">
                Finishing Options
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Press / iron with hanger</li>
                <li>Press / iron and fold</li>
                <li>Final price depends on garment count and cloth type</li>
              </ul>
            </div>

            <Button
              id="generate_lead"
              onClick={() =>
                handleOrder("Per piece with hanger", "2-3 / 7-12 / 18-24 hour windows")
              }
              className="w-full mt-auto bg-primary text-white hover:bg-primary/90 font-semibold"
            >
              Ask About Piece Service
            </Button>
          </div>

          {helperCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="lg:col-span-4 rounded-[1.75rem] border border-border bg-card p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-4">
                  {card.subtitle}
                </p>
                <ul className="space-y-3 mb-6">
                  {card.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-sm text-muted-foreground flex items-start gap-3"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary/70" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  id="generate_lead"
                  onClick={() => handleOrder(card.title, card.subtitle)}
                  variant="outline"
                  className="w-full mt-auto border-primary/20 text-foreground hover:bg-primary/5"
                >
                  Ask About This Option
                </Button>
              </div>
            );
          })}

          <div className="lg:col-span-4 rounded-[1.75rem] border border-amber-200/70 bg-gradient-to-br from-amber-50 via-white to-amber-100/60 p-5 sm:p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-5">
              <Crown className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              VIP Service
            </h3>
            <p className="text-sm font-medium text-amber-700 mb-4">
              Special handling support
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-sm text-muted-foreground flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                <span>Useful for selected garments and special requests</span>
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                <span>Timing is confirmed after the team reviews the order</span>
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                <span>Final pricing depends on cloth type and handling needs</span>
              </li>
            </ul>
            <Button
              id="generate_lead"
              onClick={() => handleOrder("VIP Service", "special handling support")}
              className="w-full mt-auto bg-foreground text-background hover:bg-foreground/90"
            >
              Ask About VIP Service
            </Button>
          </div>
        </div>

        <div className="mt-8 max-w-6xl mx-auto rounded-[1.75rem] border border-primary/15 bg-background/90 px-5 sm:px-6 py-5 sm:py-6 shadow-sm flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-primary font-semibold mb-1">
              Important Note
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl">
              Public timing is shown here, but final pricing is still confirmed
              after checking cloth type, service format, and pickup area.
            </p>
          </div>
          <Button
            id="generate_lead"
            onClick={() => handleOrder("Laundry service", "price and timing confirmation")}
            variant="outline"
            className="border-primary/20 bg-primary/5 hover:bg-primary/10 sm:w-auto w-full"
          >
            Confirm My Order Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingGrid;

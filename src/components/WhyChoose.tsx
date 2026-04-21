import { Zap, DollarSign, Clock, Shield, Languages, Users } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Quick Collection Flow",
    description: "Fast pickup planning keeps your order moving early, which helps us return fresh garments sooner.",
  },
  {
    icon: DollarSign,
    title: "Honest Laundry Pricing",
    description: "Straightforward rates and free collection make it easier to budget for washing, pressing, and folding.",
  },
  {
    icon: Clock,
    title: "Flexible Service Hours",
    description: "Our team works around changing schedules, late arrivals, and urgent garment needs throughout the day.",
  },
  {
    icon: Shield,
    title: "Professional Garment Care",
    description: "Each order is handled with attention to fabric type, finishing quality, and clean presentation on return.",
  },
  {
    icon: Languages,
    title: "Simple Communication",
    description: "Pickup updates, timing, and service notes are shared clearly so booking your order feels easy.",
  },
  {
    icon: Users,
    title: "Built for Busy Guests",
    description: "We serve travelers, families, and residents who want their laundry collected and returned without hassle.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why This Laundry Service Fits Life Near Haram
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fresh copy, fast service, and dependable garment care for short stays and daily needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-border group hover:border-primary"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;

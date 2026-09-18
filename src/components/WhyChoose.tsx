import { Zap, DollarSign, Clock, Shield, Languages, Users } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Speed You Can Rely On",
    description: "Pickup in around 15 minutes. Where others take hours, we're already at your door.",
  },
  {
    icon: DollarSign,
    title: "Fair, Local Pricing",
    description: "Rates from just 20 SAR/kg with FREE pickup and delivery, genuine savings versus hotel laundry.",
  },
  {
    icon: Clock,
    title: "Always on Call",
    description: "Midnight emergency? No problem. We're the neighbourhood service that never closes.",
  },
  {
    icon: Shield,
    title: "Safe & Sound Handling",
    description: "Your garments are tracked, handled gently, and fully protected by our satisfaction promise.",
  },
  {
    icon: Languages,
    title: "Speaks Your Language",
    description: "Arabic, English, or Urdu. Our team communicates the way you feel most comfortable.",
  },
  {
    icon: Users,
    title: "6,000+ Guests Served",
    description: "Guests from across the globe choose us. A 4.9-star rating says it all.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Guests Pick Makkah Laundry HS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional, dependable service, trusted by thousands across the city
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

import {
  Award,
  Check,
  Clock,
  DollarSign,
  Shield,
  Users,
  X,
  Zap,
} from "lucide-react";

const comparisonData = [
  {
    feature: "Pickup Time",
    us: "5-25 Minutes by Area",
    others: "Often Slower or Unclear",
  },
  {
    feature: "Service Times",
    us: "1 Hour to 24 Hours",
    others: "Fewer Timing Choices",
  },
  {
    feature: "Service Types",
    us: "Urgent, Same-Day, Regular",
    others: "Not Always Clearly Listed",
  },
  {
    feature: "Formats Offered",
    us: "Per Kg, Per Piece, VIP",
    others: "More Limited Choices",
  },
  {
    feature: "Delivery Charge",
    us: "Free within 24 Hours",
    others: "May Cost Extra",
  },
  {
    feature: "Price Confirmation",
    us: "Depends on Cloth Type",
    others: "May Be Less Clear Upfront",
  },
];

const Comparison = () => {
  return (
    <section className="py-8 sm:py-16" aria-labelledby="benefits-heading">
      <div className="container mx-auto px-3 sm:px-4">
        <header className="text-center mb-8 sm:mb-12">
          <h2
            id="benefits-heading"
            className="text-2xl sm:text-4xl font-bold mb-4 text-foreground"
          >
            Why Guests Near Haram Switch to Our Laundry Service
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Compare the speed, convenience, and garment care you receive with
            Makkah Laundry Near Haram against typical citywide laundry options.
          </p>
        </header>
        <div className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-8 mb-8 sm:mb-12 max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white">
            Makkah Laundry Near Haram vs. Standard Laundry Shops
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center font-bold text-sm sm:text-base text-slate-300">
              <div>Feature</div>
              <div>Our Service</div>
              <div>Other Services</div>
            </div>
            {comparisonData.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-2 sm:gap-4 items-center text-center border-t border-slate-600 pt-4"
              >
                <div className="text-sm font-semibold text-left text-slate-100">
                  {item.feature}
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-primary-foreground/80 font-bold text-xs sm:text-sm">
                  <Check size={16} className="shrink-0" />
                  <span>{item.us}</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-red-400 font-semibold text-xs sm:text-sm">
                  <X size={16} className="shrink-0" />
                  <span>{item.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Fast Dispatch From the Start
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Pickup timing now follows the area windows you provided, from
                5-10 minutes in the closest hotel routes up to 10-25 minutes
                in extended areas.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Clear Service Structure
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                The site now separates urgent, same-day, regular, per kg, per
                piece, and VIP options so customers can choose the right fit.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Timing Choices for Different Needs
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                The service covers 1 hour emergency, 2-3 hour express, 7-12
                hour premium same-day, 12 hour same-day, and 18-24 hour regular
                processing.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Useful Finishing Options
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Customers can request wash, iron and fold, wash plus dry plus
                fold, press with hanger, or press and fold depending on the
                order.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Free Pickup and Delivery
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Collection and return are included within 24 hours for covered
                areas, which makes hotel and apartment laundry more convenient.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all hover:-translate-y-1 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 sm:mb-4">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Price Checked by Garment Type
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Instead of showing fake fixed prices, the site now explains that
                final price depends on cloth type and selected service timing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;

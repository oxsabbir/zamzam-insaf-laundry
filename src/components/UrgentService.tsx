import { whatsappMessages } from "@/constants/messages";
import { handleWhatsApp } from "@/lib/utils";
import { Zap, Rocket, Sparkles } from "lucide-react";

const services = [
  {
    icon: Zap,
    hour: "1 Hour",
    title: "Rush-Hour Service",
    description: "Critical, last-minute needs",
    bookingHour: "1 Hour",
    featured: false,
  },
  {
    icon: Rocket,
    hour: "5 Hours",
    title: "Quick-Turn Service",
    description: "Ideal between appointments",
    bookingHour: "5 Hour",
    featured: true,
  },
  {
    icon: Sparkles,
    hour: "12 Hours",
    title: "All-Day Service",
    description: "Convenient standard turnaround",
    bookingHour: "12 Hour",
    featured: false,
  },
];

export default function UrgentService() {
  const handleBooking = (hourDetails: string, service: string) => {
    const message = whatsappMessages.booking
      .replace("<bookingHour>", hourDetails)
      .replace("<bookingService>", service);
    handleWhatsApp(message, true);
  };

  return (
    <section
      className="py-8 sm:py-16 bg-muted/50"
      aria-labelledby="emergency-times-heading"
    >
      <div className="container mx-auto px-3 sm:px-4">
        <header className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 mb-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm px-4 py-2 shadow-lg shadow-primary/20">
            ⚡ FAST-TRACK LAUNDRY SERVICE
          </div>
          <h2
            id="emergency-times-heading"
            className="text-2xl sm:text-4xl font-bold mb-4 text-foreground"
          >
            Clean Clothes on Short Notice? Got It!
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Round-the-clock express and same-day laundry care, served to every
            district of Makkah.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {services.map(
            ({ icon: Icon, hour, title, description, bookingHour, featured }) => (
              <div
                key={hour}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group ${
                  featured
                    ? "bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-xl shadow-primary/20 border border-primary-700"
                    : "bg-card text-card-foreground border border-border hover:border-primary/30 hover:shadow-primary/10 shadow-sm"
                }`}
              >
                {featured && (
                  <div className="absolute top-4 right-4 rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1">
                    Most Popular
                  </div>
                )}

                <div className="p-6 sm:p-7 text-center flex flex-col h-full">
                  <div
                    className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${
                      featured
                        ? "bg-white/15 border border-white/20"
                        : "bg-primary-50 border border-primary-100"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 ${
                        featured ? "text-white" : "text-primary-600"
                      }`}
                    />
                  </div>

                  <div
                    className={`text-4xl sm:text-5xl font-bold mb-1 tracking-tight ${
                      featured ? "text-white" : "text-foreground"
                    }`}
                  >
                    {hour}
                  </div>
                  <h3
                    className={`text-lg font-bold mb-2 ${
                      featured ? "text-primary-50" : "text-foreground"
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${
                      featured ? "text-primary-100/90" : "text-muted-foreground"
                    }`}
                  >
                    {description}
                  </p>

                  <div className="mt-auto">
                    <button
                      id="generate_lead"
                      onClick={() => handleBooking(bookingHour, title)}
                      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-6 py-2 w-full ${
                        featured
                          ? "bg-white text-primary-700 hover:bg-primary-50 shadow-lg"
                          : "bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg"
                      }`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
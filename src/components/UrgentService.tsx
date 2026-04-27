import { whatsappMessages } from "@/constants/messages";
import { handleWhatsApp } from "@/lib/utils";

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
          <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 mb-4 bg-blue-500 text-white text-sm px-4 py-2 animate-pulse">
            ⚡ FAST TURNAROUND OPTIONS
          </div>
          <h2
            id="emergency-times-heading"
            className="text-2xl sm:text-4xl font-bold mb-4 text-foreground"
          >
            Choose the Exact Laundry Timing You Need
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            These are the main timing windows now offered for urgent, express,
            same-day, and regular laundry service near Haram.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
          <div className="rounded-lg text-card-foreground shadow-sm p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-blue-300 bg-blue-50 dark:bg-blue-900/10 hover:opacity-90">
            <div className="text-5xl mb-4">⚡</div>
            <div className="text-3xl font-bold mb-2 text-foreground">
              1 Hour
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">
              Emergency Service
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              For urgent situations
            </p>
            <button
              id="generate_lead"
              onClick={() => handleBooking("1 Hour", "Emergency Service")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white hover:bg-blue-600 h-10 px-4 py-2 w-full"
            >
              Choose This Option
            </button>
          </div>
          <div className="rounded-lg text-card-foreground shadow-sm p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-blue-300 bg-blue-50 dark:bg-blue-900/10 hover:opacity-90">
            <div className="text-5xl mb-4">🚀</div>
            <div className="text-3xl font-bold mb-2 text-foreground">
              2-3 Hours
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">
              Express Service
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Fast return for urgent daily laundry
            </p>
            <button
              id="generate_lead"
              onClick={() => handleBooking("2-3 Hours", "Express Service")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white hover:bg-blue-600 h-10 px-4 py-2 w-full"
            >
              Choose This Option
            </button>
          </div>
          <div className="rounded-lg text-card-foreground shadow-sm p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-blue-300 bg-blue-50 dark:bg-blue-900/10 hover:opacity-90">
            <div className="text-5xl mb-4">🌟</div>
            <div className="text-3xl font-bold mb-2 text-foreground">
              7-12 Hours
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">
              Premium Same-Day
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Same-day return with more time for finishing
            </p>
            <button
              id="generate_lead"
              onClick={() => handleBooking("7-12 Hours", "Premium Same-Day Service")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white hover:bg-blue-600 h-10 px-4 py-2 w-full"
            >
              Choose This Option
            </button>
          </div>
          <div className="rounded-lg text-card-foreground shadow-sm p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-blue-300 bg-blue-50 dark:bg-blue-900/10 hover:opacity-90">
            <div className="text-5xl mb-4">✨</div>
            <div className="text-3xl font-bold mb-2 text-foreground">
              12 Hours
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">
              Same-Day Service
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Standard same-day return window
            </p>
            <button
              id="generate_lead"
              onClick={() => handleBooking("12 Hours", "Same-Day Service")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white hover:bg-blue-600 h-10 px-4 py-2 w-full"
            >
              Choose This Option
            </button>
          </div>
          <div className="rounded-lg text-card-foreground shadow-sm p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-blue-300 bg-blue-50 dark:bg-blue-900/10 hover:opacity-90">
            <div className="text-5xl mb-4">🧺</div>
            <div className="text-3xl font-bold mb-2 text-foreground">
              18-24 Hours
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground">
              One-Day Regular
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Low-cost regular service
            </p>
            <button
              id="generate_lead"
              onClick={() => handleBooking("18-24 Hours", "One-Day Regular Service")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white hover:bg-blue-600 h-10 px-4 py-2 w-full"
            >
              Choose This Option
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

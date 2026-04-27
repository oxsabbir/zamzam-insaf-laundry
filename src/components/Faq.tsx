import { handleCall, handleWhatsApp } from "@/lib/utils";
import WhatsAppIcon from "./icons/Whatsapp";
import { whatsappMessages } from "@/constants/messages";

export default function Faq() {
  return (
    <section className="py-8 sm:py-16 bg-muted">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-foreground">
            Common Questions About Pickup, Washing, and Delivery
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are quick answers to the questions customers usually ask
            before booking their first order.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-lg bg-card text-card-foreground shadow-md p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/10 transform hover:-translate-y-1">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Q: How fast can you usually collect an order?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                A: Pickup timing depends on the area. The closest Haram hotels
                can be 5-10 minutes, while some extended routes can be up to
                10-25 minutes.
              </p>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-md p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/10 transform hover:-translate-y-1">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Q: Is collection and return included?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                A: Yes. Pickup and delivery are free within 24 hours for the
                covered service areas listed on the website.
              </p>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-md p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/10 transform hover:-translate-y-1">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Q: What timing options do you offer?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                A: The main options are 1 hour emergency, 2-3 hours express,
                7-12 hours premium same-day, 12 hours same-day, and 18-24
                hours one-day regular service.
              </p>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-md p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/10 transform hover:-translate-y-1">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Q: How is the final price decided?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                A: Final price depends on cloth type, garment category, and the
                timing option you choose. The team confirms it when arranging
                the order.
              </p>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-md p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/10 transform hover:-translate-y-1">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Q: Do you offer both per kg and per piece service?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                A: Yes. We offer wash, iron and fold per kg, wash plus dry plus
                fold, per piece with hanger, press / iron with hanger, and
                press / iron and fold.
              </p>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-md p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/10 transform hover:-translate-y-1">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Q: Do you have VIP service?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                A: Yes. VIP service is available for orders that need special
                handling, with timing and final price confirmed after review.
              </p>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-md p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/10 transform hover:-translate-y-1">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Q: Can I message late at night?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                A: Yes. The service includes urgent and 24/7 support, so you
                can message for late-night updates or emergency requests.
              </p>
            </div>
            <div className="rounded-lg bg-card text-card-foreground shadow-md p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/10 transform hover:-translate-y-1">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-foreground">
                Q: Can I ask about a special item before booking?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                A: Absolutely. Send a photo or short description on WhatsApp
                and we will guide you on the best service option.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground shadow-sm mt-8 sm:mt-12 bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/30">
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">
                💬 Need a Quick Answer?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Message or call us if you want help choosing the right pickup
                time or laundry option.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => handleWhatsApp(whatsappMessages.faq)}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg hover:shadow-xl transition-all h-10 px-4 py-2 w-full"
                >
                  <WhatsAppIcon />
                  Ask on WhatsApp
                </button>
                <button
                  onClick={handleCall}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone w-4 h-4 mr-2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Call for Help
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

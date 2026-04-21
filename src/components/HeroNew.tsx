import { Zap, Clock, Quote, CircleDollarSign } from "lucide-react";
import heroImage from "@/assets/hero_background.webp";
import WhatsAppIcon from "./icons/Whatsapp";
import { useEffect, useState } from "react";
import { handleWhatsApp } from "@/lib/utils";
import { whatsappMessages } from "@/constants/messages";
import FloatingCTA from "./FloatingCTA";
import { siteInfo } from "@/constants";

const HeroNew = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "15 Minutes";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-emerald-950 to-gray-900 min-h-screen flex items-center pt-16"
    >
      <FloatingCTA />

      <img
        src={heroImage}
        alt="Laundry pickup and delivery service near Haram in Makkah"
        className="absolute inset-0 w-full h-full object-cover opacity-30 "
        loading="eager"
        width="1920"
        height="1080"
      />
      <div className="relative container mx-auto px-3 py-6 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 mb-4 sm:mb-6 bg-red-500 text-white text-xs sm:text-base px-3 sm:px-4 py-2 animate-pulse">
            <Zap size={20} className="mr-1" />
            FRESH CLOTHES RETURN FAST NEAR HARAM
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-primary-foreground mb-3 sm:mb-6 leading-tight">
            <span className="block text-xl sm:text-2xl lg:text-3xl mb-1 sm:mb-2 text-accent">
              {siteInfo.name} <br /> <span>Makkah</span>
            </span>
            <span className="text-accent inline-block ">15 Minutes</span>{" "}
            Pickup for Wash, Fold, Press, and Delivery
          </h1>
          <div className="bg-black/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 mb-4 sm:mb-8">
            <div className="flex items-center justify-center mb-2 sm:mb-3">
              <div className="flex text-yellow-400 text-sm sm:text-xl">
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
                  className="lucide lucide-star w-4 h-4 sm:w-5 sm:h-5 fill-current"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
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
                  className="lucide lucide-star w-4 h-4 sm:w-5 sm:h-5 fill-current"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
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
                  className="lucide lucide-star w-4 h-4 sm:w-5 sm:h-5 fill-current"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
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
                  className="lucide lucide-star w-4 h-4 sm:w-5 sm:h-5 fill-current"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
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
                  className="lucide lucide-star w-4 h-4 sm:w-5 sm:h-5 fill-current"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
              </div>
              <span className="text-primary-foreground ml-2 font-bold text-sm sm:text-base">
                Trusted by hotel guests and visitors across central Makkah
              </span>
            </div>
            <p className="text-sm sm:text-xl text-primary-foreground/95 font-medium mb-3 sm:mb-4 px-2">
              "Excellent turnaround, neatly packed garments, and a pickup team
              that understood exactly when we needed everything returned.
              <span className="text-accent font-bold">
                {" "}A smooth laundry solution near Haram."
              </span>
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
              <div className="bg-accent/20 rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-2xl font-bold text-accent">
                  Urgent
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/80">
                  Pickup Window
                </div>
              </div>
              <div className="bg-accent/20 rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-2xl font-bold text-accent">
                  15 Min
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/80">
                  Dispatch Target
                </div>
              </div>
              <div className="bg-accent/20 rounded-lg p-2 sm:p-3">
                <div className="text-lg sm:text-2xl font-bold text-accent">
                  FREE
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/80">
                  Collection & Return
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4 px-2">
            <button
              id="generate_lead"
              onClick={() => handleWhatsApp(whatsappMessages.pickup, true)}
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-xl transition-all w-full text-base sm:text-xl px-6 py-4 sm:py-6 h-auto rounded-xl font-bold shadow-lg"
            >
              <WhatsAppIcon size={24} />
              WhatsApp for Fast Pickup
            </button>

            <div className="text-primary-foreground/90 flex flex-wrap pt-4 items-center justify-center gap-4 text-xs sm:text-base">
              <span className="flex items-center gap-2">
                <Clock size={18} /> Day & Night Service
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <Quote size={18} /> Instant Quotes
              </span>
              <span>|</span>
              <span className="flex items-center gap-2">
                <CircleDollarSign size={18} />
                Clear Pricing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;

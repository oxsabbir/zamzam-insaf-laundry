import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, MessageCircleMore } from "lucide-react";
import { Input } from "./ui/input";
import WhatsAppIcon from "./icons/Whatsapp";
import { useState } from "react";
import { whatsappMessages } from "@/constants/messages";
import { handleWhatsApp } from "@/lib/utils";

const areas = [
  {
    emoji: "🕌",
    title: "Haram Ring & Makkah Towers",
    description:
      "Express laundry visits for stays within steps of Masjid al-Haram, built around pilgrims' busy schedules.",
    locations: [
      { name: "Anjum Hotels (Towers)", time: "5-10 min" },
      { name: "Al Marwa Hotels", time: "5-10 min" },
      { name: "Hilton Convention", time: "8-12 min" },
    ],
  },
  {
    emoji: "🏨",
    title: "Jabal Omar & King Abdul Aziz Endowment",
    description:
      "Dedicated cover for the premium hotel district with round-the-clock priority pickup windows.",
    locations: [
      { name: "Jabal Omar Residences", time: "10-15 min" },
      { name: "Swissotel Al Maqam", time: "10-15 min" },
      { name: "Ghaza District", time: "12-18 min" },
    ],
  },

  {
    emoji: "🌆",
    title: "Al-Shisha & Jarwal",
    description:
      "Budget-friendly service for neighborhoods near the holy gates, with dependable fast turnaround.",
    locations: [
      { name: "Al-Shisha Hotels", time: "15-20 min" },
      { name: "Jarwal Villas", time: "15-20 min" },
    ],
  },
  {
    emoji: "🏨",
    title: "Hilton Suites & Business Hotels",
    description:
      "Tailored laundry care for business travelers, with rapid pickup and scheduled delivery for a smooth stay.",
    locations: [
      { name: "Hilton Suites Makkah", time: "10-20 min" },
      { name: "Souq Al Omrah Area", time: "15-25 min" },
    ],
  },
  {
    emoji: "🏘️",
    title: "Aziziyah, Rusaifah & Al Taif Road",
    description:
      "Wide-reaching residential service across Makkah's outer neighborhoods, complete with same-day delivery.",
    locations: [
      { name: "Aziziyah District", time: "15-25 min" },
      { name: "Al Rusaifah & Taif Rd", time: "20-30 min" },
    ],
  },
];

const AreaCoverage = () => {
  const [location, setLocation] = useState("");
  const handleCheckArea = () => {
    const message = whatsappMessages.checkPickUpTime.replace(
      "<location>",
      location,
    );

    handleWhatsApp(message, false);
  };

  return (
    <section className="py-20  bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-12">
          <h2
            id="areas-heading"
            className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground"
          >
            Full-City Laundry Coverage in Makkah
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
            From busy hotel zones to family residences, our express pickup
            network spans every corner of Makkah, so fresh laundry is never far
            away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-card flex flex-col  rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all border border-border"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl sm:text-5xl">{area.emoji}</div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </div>
              </div>
              <div className="space-y-3 mt-6">
                {area.locations.map((location, idx) => (
                  <div
                    key={idx}
                    className="flex flex-wrap items-center justify-between gap-2 bg-muted/50 rounded-lg p-3"
                  >
                    <span className="text-sm sm:text-base font-medium text-foreground">
                      {location.name}
                    </span>
                    <Badge className="bg-success text-white">
                      ⏰ {location.time} Pickup
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="text-center mt-auto pt-6">
                <Button
                  onClick={() =>
                    handleWhatsApp(
                      `Hi I need laundry service in ${encodeURIComponent(
                        area.title,
                      )}. Could you please share the pickup details and timing? Thank you! `,
                      true,
                    )
                  }
                  id="generate_lead"
                  className=" bg-success"
                >
                  Book Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-card text-card-foreground max-w-2xl mx-auto shadow-xl border-2 border-primary/50 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="p-4 py-6 sm:p-6 text-center">
            <h3 className="text-lg md:text-xl font-bold mb-5 text-primary">
              Don't See Your Spot? Get Instant Pickup Confirmation!
            </h3>
            <div className="space-y-4 ">
              <input
                value={location}
                type="text"
                minLength={1}
                onChange={(e) => setLocation(e.target.value)}
                className="flex w-full border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 sm:h-14 text-base border-2 focus:border-accent rounded-xl"
                placeholder="Enter your hotel/location name"
              />
              <button
                onClick={handleCheckArea}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none  bg-primary-600 text-white hover:bg-primary-700 shadow-primary px-4 py-2 w-full h-12 sm:h-14 text-base sm:text-lg font-bold rounded-xl"
              >
                <WhatsAppIcon size={24} />
                Check My Pickup Time - FREE
              </button>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3">
              ✅ Instant Reply | ✅ No Obligation | ✅ Always Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaCoverage;

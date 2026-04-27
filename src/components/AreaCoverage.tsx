import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "./icons/Whatsapp";
import { useState } from "react";
import { whatsappMessages } from "@/constants/messages";
import { handleWhatsApp } from "@/lib/utils";

const areas = [
  {
    emoji: "🕌",
    title: "Around Haram Area",
    description:
      "These are the closest hotel and tower routes around Haram with the pickup windows you provided.",
    locations: [
      { name: "Clock Tower / All Hotels", time: "5-10 min" },
      { name: "Al Safwah Tower", time: "5-10 min" },
      { name: "Hilton Makkah", time: "7-10 min" },
      { name: "Anjum Hotel", time: "10-15 min" },
      { name: "Dar Al Tawhid Makkah", time: "5-10 min" },
      { name: "Jabal Omar Area", time: "10-15 min" },
      { name: "Ajyad / Misfalah Area", time: "15-20 min" },
    ],
  },
  {
    emoji: "🏨",
    title: "Additional Areas",
    description:
      "These extra pickup routes are also covered with timing that depends on the exact location.",
    locations: [
      { name: "Ajyad Area", time: "10-15 min" },
      { name: "Aziziah Street Area", time: "10-25 min" },
      { name: "Jabal Al Kaaba Area", time: "10-15 min" },
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
            Service Areas and Pickup Timing Near Haram
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
            The list below now follows your exact coverage notes, including the
            closest Haram hotels and the additional surrounding areas.
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
                      `Hi I need laundry service in ${area.title}. Please share the next pickup time and available service options. Thank you!`,
                      true,
                    )
                  }
                  id="generate_lead"
                  className=" bg-success"
                >
                  Request Pickup
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-lg bg-card text-card-foreground max-w-2xl mx-auto shadow-xl border-2 border-primary/50 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="p-4 py-6 sm:p-6 text-center">
            <h3 className="text-lg md:text-xl font-bold mb-5 text-primary">
              Not Sure About Coverage? Ask for a Live Pickup Time
            </h3>
            <div className="space-y-4 ">
              <input
                value={location}
                type="text"
                minLength={1}
                onChange={(e) => setLocation(e.target.value)}
                className="flex w-full border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 sm:h-14 text-base border-2 focus:border-accent rounded-xl"
                placeholder="Enter your hotel, tower, or area name"
              />
              <button
                onClick={handleCheckArea}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none bg-primary text-white hover:bg-primary/90 shadow-primary px-4 py-2 w-full h-12 sm:h-14 text-base sm:text-lg font-bold rounded-xl"
              >
                <WhatsAppIcon size={24} />
                Check My Pickup Time
              </button>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3">
              ✅ Pickup time by area | ✅ Free pickup & delivery | ✅ Reply on WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaCoverage;

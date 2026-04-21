import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { whatsappMessages } from "@/constants/messages";
import { handleWhatsApp } from "@/lib/utils";

const pricingItems = [
  {
    emoji: "👕",
    title: "Everyday Wear",
    subtitle: "Shirts, trousers, and daily essentials",
    price: "20 SAR/kg",
    time: "Same day",
  },
  {
    emoji: "👔",
    title: "Pressed Occasion Wear",
    subtitle: "Suits, dress shirts, and event clothing",
    price: "25 SAR/kg",
    time: "Same day",
  },
  {
    emoji: "🕋",
    title: "Ihram Garments",
    subtitle: "Gentle cleaning for white worship wear",
    price: "20 SAR/piece",
    time: "3 hours",
  },
  {
    emoji: "🧥",
    title: "Bulky Laundry",
    subtitle: "Jackets, blankets, and larger fabric items",
    price: "28 SAR/kg",
    time: "Next day",
  },
  {
    emoji: "👟",
    title: "Shoe Refresh",
    subtitle: "Careful cleaning for daily footwear",
    price: "25 SAR/pair",
    time: "4 hours",
  },
  {
    emoji: "🔧",
    title: "Minor Garment Fixes",
    subtitle: "Simple repairs and finishing touches",
    price: "From 20 SAR",
    time: "Same day",
  },
];

const PricingGrid = () => {
  const handleOrder = (packageName: string, price: string) => {
    const message = whatsappMessages.package
      .replace("<package>", packageName)
      .replace("<price>", price);

    handleWhatsApp(message, true);
  };

  return (
    <section className="py-20 bg-muted/60">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="services-heading"
            className="text-2xl sm:text-4xl font-bold mb-4 text-foreground"
          >
            Pricing That Matches Real Laundry Needs
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Pick the item type you need cleaned and see how quickly it can be
            returned. Service starts from{" "}
            <span className="text-primary ml-1 font-semibold">20 SAR/kg!</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pricingItems.map((item, index) => (
            <Card
              key={index}
              className={`border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group ${
                item.title === "Ihram Clothes" || item.title === "Regular Clothes"
                  ? "card-pulse-effect"
                  : ""
              }`}
            >
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{item.emoji}</div>
                <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                <CardDescription className="text-base">
                  {item.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {item.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Ready in {item.time}
                  </div>
                </div>
                <Button
                  id="generate_lead"
                  onClick={() => handleOrder(item.title, item.price)}
                  className="w-full bg-success hover:bg-success/90"
                >
                  Select Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingGrid;

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Clock, MapPin, UtensilsCrossed, ArrowRight } from "lucide-react";
import { managerInfo } from "@/constants";
import deliveryImage from "@/assets/food-delivery.webp";
import broastImg from "@/assets/food-broast.webp";
import burgerImg from "@/assets/food-burger.webp";
import shawarmaImg from "@/assets/food-shawarma.webp";
import friesImg from "@/assets/food-fries.webp";
import kabsaImg from "@/assets/food-kabsa.webp";
import chickenImg from "@/assets/food-chiken-fry.webp";
import sambousaImg from "@/assets/food-sambousa.webp";
import pizzaImg from "@/assets/food-pizza.webp";
import brandKfcImg from "@/assets/brand-kfc.webp";
import brandAlTazajImg from "@/assets/brand-Al_Tazaj.webp";
import brandAlbaikImg from "@/assets/brand-albaik.webp";
import brandAlromansiahImg from "@/assets/brand-alromansiah.webp";
import brandBurgerKingImg from "@/assets/brand-burgerking.webp";
import whopperImg from "@/assets/food-Crunchy-Whopper.webp";
import frenchFriesImg from "@/assets/food-French-Fries.webp";
import haveItYourWayImg from "@/assets/food-Have-It-Your-Way-Box.webp";
import onionRingsImg from "@/assets/food-Onion-Rings.webp";
import veggieBurgerImg from "@/assets/food-Veggie-Burger.webp";

const FOOD_WHATSAPP = managerInfo.onlyNumber.whatsApp;

const foodItems = [
  {
    image: kabsaImg,
    title: "Chicken Kabsa",
    description: "Saudi rice & meat feast, rich with spices",
  },
  {
    image: broastImg,
    title: "Crispy Broast",
    description: "Golden fried chicken & garlic sauce",
  },
  {
    image: burgerImg,
    title: "Gourmet Burgers",
    description: "Juicy patties with melted cheese",
  },
  {
    image: shawarmaImg,
    title: "Express Shawarma",
    description: "Toasted wraps packed with meat",
  },
  {
    image: sambousaImg,
    title: "Sambousa",
    description: "Crisp golden pastries, stuffed & spiced",
  },
  {
    image: pizzaImg,
    title: "Hot Crust Pizza",
    description: "Cheesy, oven-baked pizzas, fresh slices",
  },
  {
    image: friesImg,
    title: "Crispy Fries",
    description: "Hot, salted golden potato fries",
  },
  {
    image: chickenImg,
    title: "Golden Fried Chicken",
    description: "Crispy, juicy fried chicken pieces",
  },
  {
    image: whopperImg,
    title: "Crunchy Whopper",
    description: "Flame-grilled patty, crisp & loaded",
  },
  {
    image: frenchFriesImg,
    title: "French Fries",
    description: "Golden, salted fries, perfectly crispy",
  },
  {
    image: haveItYourWayImg,
    title: "Have It Your Way Box",
    description: "Combo box built around your cravings",
  },
  {
    image: onionRingsImg,
    title: "Onion Rings",
    description: "Golden-battered, crunchy onion rings",
  },
  {
    image: veggieBurgerImg,
    title: "Veggie Burger",
    description: "Hearty plant-based patty in a soft bun",
  },
];

const FoodDeliverySection = () => {
  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-base mb-3">
            <UtensilsCrossed size={18} />
            Makkah Laundry HS Express Fast Food
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            Hungry After Umrah?{" "}
            <span className="text-primary-600">Fast Food, Delivered.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skip the street lines outside your hotel. Our riders bring hot,
            crispy favorites straight to your room in 35-45 minutes.
          </p>
        </motion.div>

        {/* Food Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {foodItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden aspect-[4/5] shadow-md group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-950/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <b className="block text-lg font-bold mb-1">{item.title}</b>
                <span className="text-sm text-white/85">
                  {item.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="pt-10 pb-2 sm:pt-14 sm:pb-4 max-w-6xl mx-auto"
        >
          <div className="text-center mb-6">
            <span className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-[0.2em]">
              We Deliver From Top Brands
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
            {[
              {
                image: brandKfcImg,
                name: "KFC",
                glow: "group-hover:shadow-red-500/40",
                base: "from-red-600 to-red-500",
              },
              {
                image: brandAlTazajImg,
                name: "Al Tazaj",
                glow: "group-hover:shadow-emerald-500/40",
                base: "from-emerald-700 to-emerald-500",
              },
              {
                image: brandAlbaikImg,
                name: "Al Baik",
                glow: "group-hover:shadow-orange-500/40",
                base: "from-orange-600 to-amber-500",
              },
              {
                image: brandAlromansiahImg,
                name: "Al Romansiah",
                glow: "group-hover:shadow-primary-500/40",
                base: "from-primary-700 to-primary-500",
              },
              {
                image: brandBurgerKingImg,
                name: "Burger King",
                glow: "group-hover:shadow-orange-500/40",
                base: "from-red-600 to-orange-500",
              },
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-white dark:bg-card border border-border/60 shadow-md hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 flex flex-col items-center gap-3"
              >
                <div
                  className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${brand.base} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white border border-border/60 p-2 shadow-inner flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                  <img
                    src={brand.image}
                    alt={`${brand.name} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="relative text-sm sm:text-base font-extrabold text-foreground tracking-tight">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Delivery Info + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center bg-card rounded-2xl shadow-sm border border-border p-8 lg:p-12 max-w-6xl mx-auto mt-16"
        >
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-base mb-4">
              <MapPin size={16} />
              Direct To Your Hotel Room.
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-5">
              Hot Meals Delivered{" "}
              <span className="text-primary-600">Straight to Your Door.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              We know how crowded the streets around the Haram can get. Our
              professional delivery riders navigate through Makkah's hotel zones
              efficiently to ensure your fast food arrives crisp, hot, and
              within 45 minutes.
            </p>
            <div className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm tracking-wide mb-6">
              <Clock size={16} />
              Hotel Zone Delivery: 35-45 Mins
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${FOOD_WHATSAPP}?text=${encodeURIComponent(
                  "Hello! I'd like to order fast food delivered to my hotel. Please share the menu and available items. Thank you!",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-lg text-base hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                Order Hotel Delivery
                <ArrowRight size={18} />
              </a>
              <Link
                to="/food-delivery"
                className="inline-flex items-center gap-2.5 border border-primary-600/50 text-primary-700 font-bold px-8 py-4 rounded-lg text-base hover:bg-primary-50 hover:-translate-y-0.5 transition-all"
              >
                View Full Menu
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 rounded-xl overflow-hidden aspect-[1.1/1] shadow-lg">
            <img
              src={deliveryImage}
              alt="Fast food delivery rider in Makkah"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-900 rounded-2xl px-6 py-16 sm:px-12 text-center shadow-2xl shadow-primary-700/30 max-w-6xl mx-auto mt-16"
        >
          <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-primary-950/40 blur-3xl" />

          <div className="relative flex flex-col lg:flex-row gap-8 items-center lg:justify-between text-center lg:text-left">
            <div className="max-w-xl">
              <h2 className="relative text-3xl md:text-4xl font-extrabold text-white mb-4">
                Hungry After a Long Day of{" "}
                <span className="text-accent">Ibadah?</span>
              </h2>
              <p className="relative text-primary-50/90 text-lg">
                Relax in your room, message us on WhatsApp, and let us take care
                of dinner. Premium fast food packages ready to dispatch right
                now.
              </p>
            </div>
            <a
              href={`https://wa.me/${FOOD_WHATSAPP}?text=${encodeURIComponent(
                "Hello! I'd like to order fast food. Please share today's menu and let me know the delivery time. Thank you!",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 rounded-lg text-base sm:text-lg shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto"
            >
              Order Fast Food
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FoodDeliverySection;

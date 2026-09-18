import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import { Clock, MapPin, Zap, UtensilsCrossed, ArrowRight } from "lucide-react";
import { managerInfo } from "@/constants";
import foodBanner from "@/assets/food-banner.webp";
import deliveryImage from "@/assets/food-delivery.webp";
import broastImg from "@/assets/food-broast.webp";
import burgerImg from "@/assets/food-burger.webp";
import shawarmaImg from "@/assets/food-shawarma.webp";
import friesImg from "@/assets/food-fries.webp";

const FOOD_WHATSAPP = managerInfo.onlyNumber.whatsApp;

const foodItems = [
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
    image: friesImg,
    title: "Crispy Fries & Sides",
    description: "Hot, salted golden potato fries",
  },
];

const FoodDelivery = () => {
  return (
    <main className="min-h-screen bg-muted/50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-gradient-to-br from-primary-950 via-primary-800 to-primary-600">
        <div className="pointer-events-none absolute -top-32 -right-24 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 w-[500px] h-[500px] rounded-full bg-primary-500/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl" />
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-primary-200 font-semibold text-base mb-4">
                <Zap size={16} className="text-white" />
                Makkah Laundry HS — Express Fast Food Delivery
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-5">
                Tired After Umrah? Get Fast Food{" "}
                <span className="text-primary-100">Delivered Instantly.</span>
              </h1>
              <p className="text-primary-50/90 text-lg mb-6 leading-relaxed max-w-xl">
                Skip the exhausting street lines outside your hotel.{" "}
                <strong className="text-white">
                  Makkah Laundry HS Fast Food
                </strong>{" "}
                delivers your favorite crispy fast food meals directly to your
                room. Hot, fresh, and lightning fast — so you can rest and
                recharge comfortably.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/${FOOD_WHATSAPP}?text=${encodeURIComponent(
                    "Hello Makkah Laundry HS! I'd like to see the Fast Food menu and order.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-lg text-base hover:-translate-y-0.5 hover:shadow-xl transition-all shadow-lg"
                >
                  Order via WhatsApp
                  <ArrowRight size={18} />
                </a>
                <a
                  href={`https://wa.me/${FOOD_WHATSAPP}?text=${encodeURIComponent(
                    "Hello! I'd like to track my recent fast food order.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-primary-900/60 border border-white/20 text-white font-bold px-8 py-4 rounded-lg text-base hover:bg-primary-900 hover:-translate-y-0.5 transition-all"
                >
                  Track My Order
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-xl overflow-hidden shadow-2xl shadow-black/30 aspect-[1.1/1]"
            >
              <img
                src={foodBanner}
                alt="Fast food delivery in Makkah"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Food Menu Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-base mb-3">
              <UtensilsCrossed size={18} />
              HOT & FRESH IN 45 MINUTES
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Most Popular Pilgrim Favorites
            </h2>
          </motion.div>

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
        </div>
      </section>

      {/* Speed Delivery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center bg-card rounded-2xl shadow-sm border border-border p-8 lg:p-12 max-w-6xl mx-auto"
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
                professional delivery riders navigate through Makkah's hotel
                zones efficiently to ensure your fast food arrives crisp, hot,
                and within 45 minutes.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href={`https://wa.me/${FOOD_WHATSAPP}?text=${encodeURIComponent(
                    "Hello! Send me the fast food menu. I want express delivery to my hotel.",
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-lg text-base hover:-translate-y-0.5 hover:shadow-lg transition-all"
                >
                  Order Hotel Delivery
                  <ArrowRight size={18} />
                </a>
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-600 to-primary-900 rounded-2xl px-6 py-16 sm:px-12 text-center shadow-2xl shadow-primary-700/30 max-w-5xl mx-auto"
          >
            <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-primary-950/40 blur-3xl" />

            <h2 className="relative text-3xl md:text-4xl font-extrabold text-white mb-4">
              Hungry After a Long Day of{" "}
              <span className="text-accent">Ibadah?</span>
            </h2>
            <p className="relative text-primary-50/90 text-lg mb-8 max-w-xl mx-auto">
              Relax in your room, message us on WhatsApp, and let us take care
              of dinner. Premium fast food packages ready to dispatch right now.
            </p>
            <div className="flex flex-col items-center justify-center">
              <div className="relative  inline-flex items-center gap-2 text-primary-100 font-semibold text-sm tracking-wide">
                <Clock size={16} />
                FAST HOTEL ZONE DELIVERY: 35-45 MINS
              </div>
              <a
                href={`https://wa.me/${FOOD_WHATSAPP}?text=${encodeURIComponent(
                  "I'm ready to order fast food to my hotel now!",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2.5 bg-accent hover:bg-accent/90 text-accent-foreground font-bold mt-6 px-10 py-4 rounded-lg text-lg shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Order Your Fast Food Now
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FoodDelivery;

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Clock, MapPin, UtensilsCrossed, ArrowRight } from "lucide-react";
import { managerInfo } from "@/constants";
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
            MAKKAH LAUNDRY HS — EXPRESS FAST FOOD
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            Hungry After Umrah?{" "}
            <span className="text-primary-600">Get Fast Food Delivered.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skip the street lines outside your hotel — our riders deliver hot,
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
              FAST HOTEL ZONE DELIVERY: 35-45 MINS
            </div>
            <div className="flex flex-wrap gap-4">
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

          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center text-left lg:text-center">
            <div className="text-center lg:text-left">
              <h2 className="relative text-3xl md:text-4xl font-extrabold text-white mb-4">
                Hungry After a Long Day of{" "}
                <span className="text-accent">Ibadah?</span>
              </h2>
              <p className="relative text-primary-50/90 text-lg max-w-xl lg:mx-0 mx-auto">
                Relax in your room, message us on WhatsApp, and let us take care
                of dinner. Premium fast food packages ready to dispatch right
                now.
              </p>
            </div>
            <a
              href={`https://wa.me/${FOOD_WHATSAPP}?text=${encodeURIComponent(
                "I'm ready to order fast food to my hotel now!",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2.5 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-4 rounded-lg text-lg shadow-lg hover:-translate-y-0.5 transition-all whitespace-nowrap"
            >
              Order Fast Food via WhatsApp
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FoodDeliverySection;

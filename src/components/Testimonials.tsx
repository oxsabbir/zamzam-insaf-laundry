import { Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { managerInfo } from "@/constants";

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    location: "Jeddah",
    country: "Saudi Arabia",
    rating: 5,
    service: "Ihram Care",
    review:
      "I come to Makkah every Ramadan and always bring my laundry to Makkah Laundry HS. My Ihram was handled with such respect and came back spotless the same day.",
    avatar: "AR",
    flag: "🇸🇦",
  },
  {
    name: "Mariam Tarek",
    location: "Cairo",
    country: "Egypt",
    rating: 5,
    service: "Regular Service",

    review:
      "Booked through WhatsApp in two minutes. The driver arrived within ten and everything came back neatly pressed overnight. Far better than my hotel's own service.",
    avatar: "MT",
    flag: "🇪🇬",
  },
  {
    name: "Imran Qureshi",
    location: "Karachi",
    country: "Pakistan",
    service: "Business Wear",

    rating: 5,
    review:
      "Had a week of meetings in Jeddah then Umrah, so time was tight. My dress shirts came back crisp and spotless exactly when promised. Nobody else offered that.",
    avatar: "IQ",
    flag: "🇵🇰",
  },
  {
    name: "Lucas van der Meer",
    location: "Rotterdam",
    country: "Netherlands",
    service: "Bulky Items",
    rating: 5,
    review:
      "Family towels and kids' jackets cleaned after Hajj before our flight home. They even stayed open late for our pickup. Friendly staff and honest prices.",
    avatar: "LV",
    flag: "🇳🇱",
  },
  {
    name: "Ridwan Sulaiman",
    location: "Jakarta",
    country: "Indonesia",
    service: "Regular Service",
    rating: 5,
    review:
      "Fair prices and same-day returns, every single time. I stayed a month in Makkah and used them weekly. My clothes always smelled fresh and folded perfectly.",
    avatar: "RS",
    flag: "🇮🇩",
  },
  {
    name: "Siti Aminah",
    location: "Kuala Lumpur",
    country: "Malaysia",
    service: "Abaya Care",

    rating: 5,
    review:
      "They treated my delicate abayas with amazing care, gentle on the embroidery and beads. Neat pickup, lovely finish, and delivered right to my hotel.",
    avatar: "SA",
    flag: "🇲🇾",
  },
  {
    name: "Claire Dubois",
    location: "Paris",
    country: "France",
    rating: 5,
    service: "Delicate Items",
    review:
      "First time in Makkah and I was worried about my silks and shawls. Makkah Laundry HS handled everything with real care and returned them wrinkle-free.",
    avatar: "CD",
    flag: "🇫🇷",
  },
  {
    name: "Emre Yılmaz",
    location: "Istanbul",
    country: "Türkiye",
    rating: 5,
    service: "Ihram Care",
    review:
      "After a long journey I had no clean clothes left. They picked up within the hour and returned my laundered Ihram before Maghrib. Absolute lifesaver.",
    avatar: "EY",
    flag: "🇹🇷",
  },
  {
    name: "Tanvir Ahmed",
    location: "Dhaka",
    country: "Bangladesh",
    rating: 5,
    service: "Regular Service",
    review:
      "I've used laundry services in many countries and Makkah Laundry HS stands out for consistency. Friendly team, fair prices, and spot-on delivery times.",
    avatar: "TA",
    flag: "🇧🇩",
  },
  {
    name: "Aisha Begum",
    location: "London",
    country: "United Kingdom",
    rating: 5,
    service: "Food Delivery",
    review:
      "After a long day in the Haram, ordering a Zinger meal through them on WhatsApp was a lifesaver. Hot, crunchy, and at my hotel door in 40 minutes.",
    avatar: "AB",
    flag: "🇬🇧",
  },
  {
    name: "Fatima Noor",
    location: "Karachi",
    country: "Pakistan",
    rating: 5,
    service: "Food Delivery",
    review:
      "We ordered broast and shawarma for the whole family. Everything arrived warm and crispy, the portions were generous, and the prices were fair. Highly recommend!",
    avatar: "FN",
    flag: "🇵🇰",
  },
  {
    name: "Omar Al-Harbi",
    location: "Riyadh",
    country: "Saudi Arabia",
    rating: 5,
    service: "Food Delivery",
    review:
      "Craved Kabsa late at night and they delivered it hot in under 45 minutes. The delivery rider was polite and the food tasted freshly made. Will order again.",
    avatar: "OH",
    flag: "🇸🇦",
  },
];

const Testimonials = () => {
  const plugin = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-4xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={
              isInView
                ? { opacity: 1, filter: "blur(0px)" }
                : { opacity: 0, filter: "blur(10px)" }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Thousands of happy customers across Makkah trust Makkah Laundry HS
            with their wardrobe and their meals
          </motion.p>
          <motion.div
            className="flex items-center justify-center gap-2 mt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-xl font-bold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">(3000+ reviews)</span>
          </motion.div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {testimonials.map((review, i) => (
              <div
                key={i}
                className="rounded-lg bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-lg transition-all border border-primary/20"
              >
                <div className="mb-3">
                  <div className="flex text-yellow-400  mb-2">
                    <Star fill="rgb(250, 204, 21)" size={24} />
                    <Star fill="rgb(250, 204, 21)" size={24} />
                    <Star fill="rgb(250, 204, 21)" size={24} />
                    <Star fill="rgb(250, 204, 21)" size={24} />
                    <Star fill="rgb(250, 204, 21)" size={24} />
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground italic mb-3">
                    {review.review}
                  </p>
                </div>
                <div className="border-t pt-3">
                  <div className="font-semibold text-foreground">
                    {review.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {review.flag} {review.location}, {review.country}
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 mt-1 text-xs bg-primary/10 text-primary">
                    {review.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-xl text-foreground font-semibold mb-4">
            Experience the difference. Join the guests who trust us with their
            laundry!
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent(
                "Hi! I'd like to book your highly rated laundry service."
              );
              window.open(
                `https://wa.me/${managerInfo.onlyNumber.whatsApp}?text=${message}`,
                "_blank"
              );
            }}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-success hover:bg-success/90 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Book Your Service Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

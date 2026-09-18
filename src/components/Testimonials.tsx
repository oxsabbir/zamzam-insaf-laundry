import { Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { managerInfo } from "@/constants";

const testimonials = [
  {
    name: "Khalid Al-Otaibi",
    location: "Jabal Omar, Makkah",
    country: "Saudi Arabia",
    rating: 5,
    service: "Ihram Care",
    review:
      "Booked Makkah Laundry HS in the morning and my clothes were back by afternoon. Just what a busy guest in Makkah needs. Polite, quick, and well-priced.",
    avatar: "KA",
    flag: "🇸🇦",
  },
  {
    name: "Mariam Tarek",
    location: "Aziziyah, Makkah",
    country: "Egypt",
    rating: 5,
    service: "Regular Service",

    review:
      "Great value for money! Makkah Laundry HS picked up in under ten minutes and everything came back neatly pressed. Far better than what my hotel offered.",
    avatar: "MT",
    flag: "🇪🇬",
  },
  {
    name: "Imran Qureshi",
    location: "Al-Shisha, Makkah",
    country: "Pakistan",
    service: "Business Wear",

    rating: 5,
    review:
      "Makkah Laundry HS returned my dress shirts crisp and spotless for a work event. They understood the timeline and delivered without delays. Highly satisfied.",
    avatar: "IQ",
    flag: "🇵🇰",
  },
  {
    name: "Layla Khalifa",
    location: "Ghaza District, Makkah",
    country: "UAE",
    service: "Bulky Items",
    rating: 5,
    review:
      "Makkah Laundry HS handled my blankets and curtains beautifully. Available late at night too, a real lifesaver when I needed help at short notice. Thank you!",
    avatar: "LK",
    flag: "🇦🇪",
  },
  {
    name: "Ridwan Sulaiman",
    location: "Al-Rusaifah, Makkah",
    country: "Indonesia",
    service: "Regular Service",
    rating: 5,
    review:
      "Easy WhatsApp booking with Makkah Laundry HS and very fair prices. My clothes smelled fresh and were returned the same day. I recommend them to every guest in Makkah.",
    avatar: "RS",
    flag: "🇮🇩",
  },
  {
    name: "Siti Aminah",
    location: "Al-Safwah, Makkah",
    country: "Malaysia",
    service: "Abaya Care",

    rating: 5,
    review:
      "They cared for my delicate abayas with real attention to detail. Quick pickup, gentle handling, and lovely results each time. Makkah Laundry HS is my go-to!",
    avatar: "SA",
    flag: "🇲🇾",
  },
  {
    name: "Yusuf Patel",
    location: "Jarwal, Makkah",
    country: "UK",
    rating: 5,
    service: "Ihram Care",
    review:
      "During Umrah Makkah Laundry HS made things effortless. They took care of my Ihram with great respect and returned it spotless. Truly helpful team.",
    avatar: "YP",
    flag: "🇬🇧",
  },
  {
    name: "Noor Al-Zoubi",
    location: "Souq Al Omrah, Makkah",
    country: "Jordan",
    rating: 5,
    service: "Delicate Items",
    review:
      "I was impressed by how carefully Makkah Laundry HS handled every item. The pickups are prompt and the communication is clear. I trust them fully with my clothes.",
    avatar: "NZ",
    flag: "🇯🇴",
  },
  {
    name: "Tanvir Ahmed",
    location: "Aziziyah, Makkah",
    country: "Bangladesh",
    rating: 5,
    service: "Regular Service",
    review:
      "I've used many laundry services over the years. Makkah Laundry HS stands out for consistency and care. Friendly team, fair prices, and always on time.",
    avatar: "TA",
    flag: "🇧🇩",
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
            with their wardrobe
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
                    {review.flag} {review.location}
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

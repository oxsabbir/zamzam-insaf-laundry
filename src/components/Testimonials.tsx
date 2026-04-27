import { Star } from "lucide-react";
import { useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { managerInfo } from "@/constants";

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    location: "Abraj Al Bait, Makkah",
    rating: 5,
    service: "Ihram Cleaning",
    review:
      "Makkah Laundry Near Haram made pickup easy for our hotel stay. The clothes came back clean, folded well, and right on time.",
    avatar: "AR",
  },
  {
    name: "Fatima Hassan",
    location: "Hilton Makkah",
    rating: 5,
    service: "Regular Customer",
    review:
      "They replied quickly on WhatsApp, collected from the lobby, and returned everything fresh without the high hotel laundry cost.",
    avatar: "FH",
  },
  {
    name: "Muhammad Khan",
    location: "Jabal Omar Towers",
    service: "Formal Wear",
    rating: 5,
    review:
      "Their timing fit our schedule well, and my white garments came back clean, soft, and handled with care.",
    avatar: "MK",
  },
  {
    name: "Aisha Abdullah",
    location: "Swissotel Makkah",
    service: "Urgent Order",
    rating: 5,
    review:
      "I needed a late-night urgent order, and Makkah Laundry Near Haram still arranged the pickup smoothly and returned it faster than expected.",
    avatar: "AA",
  },
  {
    name: "Ibrahim Yusuf",
    location: "Aziziyah District",
    service: "Regular Customer",
    rating: 5,
    review:
      "Booking on WhatsApp was simple, the service felt organized, and the order came back packed neatly and ready to use.",
    avatar: "IY",
  },
  {
    name: "Mariam Ali",
    location: "Al Safwah Towers",
    service: "Abaya Care",
    rating: 5,
    review:
      "My abayas came back pressed nicely, and the fabric still felt properly cared for. I would book this service again.",
    avatar: "MA",
  },
  {
    name: "Omar Farooq",
    location: "Elaf Kinda Hotel, Makkah",
    rating: 5,
    service: "Ihram Cleaning",
    review:
      "During Umrah, this service made laundry one less thing to think about. The team stayed responsive and careful with every item.",
    avatar: "OF",
  },
  {
    name: "Hajar Bint Abdullah",
    location: "Makkah Hotel",
    rating: 5,
    service: "Abaya Cleaning",
    review:
      "The collection arrived on time, the garments looked very clean on return, and the whole process felt smooth from start to finish.",
    avatar: "HB",
  },
  {
    name: "Dr. Faisal Rahman",
    location: "Hilton Suites Makkah",
    rating: 5,
    service: "Regular Customer",
    review:
      "I have tried several laundry services in Makkah, and Makkah Laundry Near Haram stands out for clear communication and dependable timing.",
    avatar: "FR",
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
            What Guests Say After Using Our Service
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Feedback from travelers and residents who wanted fast pickup and a clean return
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
            <span className="text-muted-foreground">(customer feedback)</span>
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
                    {review.location}
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
            Book a pickup and see how simple laundry near Haram can feel.
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent(
                "Hi! I would like to arrange a pickup with Makkah Laundry Near Haram."
              );
              window.open(
                `https://wa.me/${managerInfo.onlyNumber.whatsApp}?text=${message}`,
                "_blank"
              );
            }}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-success hover:bg-success/90 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            Request Your Pickup
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import ServiceCard from "./ServiceCard";
const urgentServices = [
  {
    title: "Professional Press & Fold",
    price: "20 Riyals",
    unit: "Kg",
    description:
      "Immaculate pressing, ironing, and folding, delivered within hours or at a time that suits you best.",
    highlight: "Free Pickup & Delivery Included",
    deliveryTime: "Up to 5 Hours",
  },
  {
    title: "Rush Wash, Dry & Iron",
    price: "35 Riyals",
    unit: "Kg",
    description:
      "Priority wash, dry, and finish with your choice of folding or hanger — rushed straight back to you.",
    highlight: "Priority Service – Makkah Wide",
    deliveryTime: "Within 1 Hour",
  },
  {
    title: "Standard 12-Hour Service",
    price: "22 Riyals",
    unit: "Kg",
    description:
      "Dependable wash, dry, and fold-or-hanger service with guaranteed same-day drop-off.",
    highlight: "Free Pickup & Delivery Included",
    deliveryTime: "12 Hours",
  },
  {
    title: "Express 5-Hour Service",
    price: "30 Riyals",
    unit: "Kg",
    description:
      "Wash, dry, and finished garments back within just five hours, folded or on hangers.",
    highlight: "Free Pickup & Delivery Included",
    deliveryTime: "5 Hours",
  },
  {
    title: "Ihram & Holy Garment Care",
    price: "25 Riyals",
    unit: "Kg",
    description:
      "Gentle, fragrance-free washing and expert care for Ihram, preserving both purity and fabric quality.",
    highlight: "Pilgrim-Safe & Tender Care",
    deliveryTime: "Same Day",
  },
  {
    title: "Advanced Stain Removal",
    price: "25 Riyals",
    unit: "Kg",
    description:
      "Targeted treatment for stubborn marks, protecting your fabric while restoring a fresh, clean look.",
    highlight: "Deep-Clean Specialists",
    deliveryTime: "Up to 24 Hours",
  },
];

export default function OurServices() {
  return (
    <section className="py-20  bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-12">
          <h2
            id="areas-heading"
            className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground"
          >
            Complete Laundry Care in Makkah
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
            Wherever you happen to be in Makkah, our fast{" "}
            <strong className="text-primary font-semibold">
              pickup and delivery
            </strong>{" "}
            cover hotels, apartments, and every neighborhood near the Haram —
            making laundry effortless and worry-free.
          </p>
        </div>

        <div className=" grid grid-cols-1  md:grid-cols-3 gap-8">
          {urgentServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              price={service.price}
              unit={service.unit}
              description={service.description}
              highlight={service.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

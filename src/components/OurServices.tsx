import ServiceCard from "./ServiceCard";
const urgentServices = [
  {
    title: "Urgent Laundry Service",
    detail: "24/7 support near Haram",
    description:
      "Built for urgent situations when garments need fast pickup coordination and the quickest available return option.",
    highlight: "Includes 1 hour emergency and 2-3 hour express choices",
  },
  {
    title: "Same-Day Laundry Service",
    detail: "7-12 hours or 12 hours",
    description:
      "A practical same-day option for guests and residents who want garments returned before the day is over.",
    highlight: "Premium same-day and standard same-day windows available",
  },
  {
    title: "Free Pick-up & Delivery",
    detail: "Within 24 hours",
    description:
      "Collection and return are arranged for covered hotels and nearby districts so customers do not need to travel.",
    highlight: "Free pickup and delivery service for covered areas",
  },
  {
    title: "Wash, Iron & Fold",
    detail: "Per kg service",
    description:
      "This is one of the main per kg service formats and can be arranged in express, premium same-day, or one-day regular timing.",
    highlight: "Available in 2-3, 7-12, and 18-24 hour windows",
  },
  {
    title: "Wash + Dry + Fold",
    detail: "Per kg service",
    description:
      "Suitable for everyday clothing loads that need a clean wash, proper drying, and neat fold return.",
    highlight: "Good for regular garments and travel laundry",
  },
  {
    title: "VIP Service",
    detail: "Special handling support",
    description:
      "For orders that need extra attention, final confirmation, and more careful coordination before processing and delivery.",
    highlight: "Final timing and price are confirmed after review",
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
            Main Laundry Services Available Near Haram
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
            These are the main service types currently offered.
            <br />
            <span className="">
              They cover urgent orders, same-day laundry, regular laundry, and{" "}
              <strong className="text-primary font-semibold">
                free pickup and delivery
              </strong>{" "}
              for covered hotels and nearby districts.
            </span>
          </p>
        </div>

        <div className=" grid grid-cols-1  md:grid-cols-3 gap-8">
          {urgentServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              detail={service.detail}
              description={service.description}
              highlight={service.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

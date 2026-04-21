import ServiceCard from "./ServiceCard";
const urgentServices = [
  {
    title: "Steam Press & Fold",
    price: "20 Riyals",
    unit: "Kg",
    description:
      "Neat pressing and crisp folding for everyday garments, uniforms, and travel wear that need a polished finish.",
    highlight: "Great for same-day presentation",
    deliveryTime: "Up to 5 Hours",
  },
  {
    title: "Rush Wash, Dry & Press",
    price: "35 Riyals",
    unit: "Kg",
    description:
      "Priority processing for loads that must be washed, dried, and returned quickly with a ready-to-wear finish.",
    highlight: "Priority queue for urgent orders",
    deliveryTime: "Within 1 Hour",
  },
  {
    title: "12-Hour Wash & Return",
    price: "22 Riyals",
    unit: "Kg",
    description:
      "A balanced option for regular laundry loads with dependable washing, drying, and clean folding.",
    highlight: "Popular for hotel guests",
    deliveryTime: "12 Hours",
  },
  {
    title: "5-Hour Express Laundry",
    price: "30 Riyals",
    unit: "Kg",
    description:
      "A quicker wash-and-fold plan when you want fresh garments back before the day is over.",
    highlight: "Express turnaround available",
    deliveryTime: "5 Hours",
  },
  {
    title: "Ihram & White Garment Care",
    price: "25 Riyals",
    unit: "Kg",
    description:
      "Gentle washing for white garments and Ihram wear with attention to cleanliness, softness, and careful finishing.",
    highlight: "Soft-touch care for sensitive fabrics",
    deliveryTime: "Same Day",
  },
  {
    title: "Targeted Stain Treatment",
    price: "25 Riyals",
    unit: "Kg",
    description:
      "Focused spotting and stain treatment for marks that need extra work before standard cleaning and pressing.",
    highlight: "Detailed pre-treatment included",
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
            Laundry Services Built for Fast Pickups and Clean Returns
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8">
            Choose the service speed and garment care level that matches your
            schedule.
            <br />
            <span className="">
              With quick{" "}
              <strong className="text-primary font-semibold">
                pickup and delivery
              </strong>{" "}
              for hotels, apartments, and nearby districts, laundry becomes one
              less thing to manage during your stay.
            </span>
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

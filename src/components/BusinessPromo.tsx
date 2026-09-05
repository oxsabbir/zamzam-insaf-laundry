import promoMain from "@/assets/promo/imagepromo.webp";
import promoDetail from "@/assets/promo/imagepromo2.webp";
import promoSeparate from "@/assets/promo/imagepromo3.webp";

const promoImages = [
  {
    src: promoMain,
    alt: "Makkah Laundry washed separately business promo",
  },
  {
    src: promoDetail,
    alt: "Makkah Laundry service details promo",
  },
  {
    src: promoSeparate,
    alt: "Makkah Laundry separate clothes wash promo",
  },
];

const BusinessPromo = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-muted/40 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {promoImages.map((image, index) => (
            <div
              key={image.src}
              className={`rounded-lg border border-border bg-white p-2 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[4/3] w-full rounded-md object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessPromo;

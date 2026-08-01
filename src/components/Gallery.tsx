import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

import aboutNasir from "@/assets/gallery/about-nasir.webp";
import aboutNew from "@/assets/gallery/about-new.webp";
import aboutNew1 from "@/assets/gallery/about-new-1.webp";
import aboutNew2 from "@/assets/gallery/about-new-2.webp";
import ctaImage from "@/assets/gallery/cta.webp";
import organizingImage from "@/assets/gallery/organizing.png";
import specialtyImage from "@/assets/gallery/specialty.webp";
import specialtyNew1 from "@/assets/gallery/our-speciality-new-1.webp";
import specialtyNew2 from "@/assets/gallery/our-speciality-new (1).webp";
import stainRemoval from "@/assets/gallery/stain-removal-point.webp";
import teamNearHaram from "@/assets/gallery/team-near-haram.webp";
import washAndFold from "@/assets/gallery/wash-and-fold.png";

const rowImages = [
  [
    aboutNew1,
    organizingImage,
    aboutNasir,
    washAndFold,
    aboutNew,
    specialtyNew1,
  ],
  [
    aboutNew2,
    ctaImage,
    stainRemoval,
    specialtyImage,
    teamNearHaram,
    specialtyNew2,
  ],
];

const cardClasses =
  "w-[280px] h-[200px] md:w-[300px] md:h-[240px] lg:w-[380px] lg:h-[300px] flex-shrink-0 rounded-[32px] overflow-hidden relative shadow-md";

const GalleryRow = ({
  images,
  x,
  padding,
  draggable,
  constraintsRef,
}: {
  images: string[];
  x: ReturnType<typeof useTransform<string, string>>;
  padding: string;
  draggable?: boolean;
  constraintsRef?: React.RefObject<HTMLElement>;
}) => (
  <motion.div
    style={{ x }}
    drag={draggable ? "x" : false}
    dragConstraints={constraintsRef}
    dragElastic={0.1}
    className={`flex gap-6 lg:gap-8 w-max cursor-grab active:cursor-grabbing ${padding}`}
  >
    {[...images, ...images].map((src, idx) => (
      <div key={`gallery-${idx}`} className={cardClasses}>
        <img
          src={src}
          alt="Laundry Service Gallery"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
    ))}
  </motion.div>
);

export const Gallery = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handleChange = () => setIsMobile(mq.matches);
    handleChange();
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "0.5 start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
    mass: 1,
  });

  // Row 1 moves left, row 2 moves right for a parallax effect
  const x1 = useTransform(smoothProgress, [0, 1], ["0%", "-10%"]);
  const x2 = useTransform(smoothProgress, [0, 1], ["-10%", "0%"]);

  return (
    <section
      ref={containerRef}
      className="w-full py-12 lg:py-24 bg-white overflow-hidden flex flex-col gap-6 lg:gap-8"
    >
      <GalleryRow
        images={rowImages[0]}
        x={x1}
        padding="pl-4"
        draggable={isMobile}
        constraintsRef={containerRef}
      />
      <GalleryRow
        images={rowImages[1]}
        x={x2}
        padding="pr-4"
        draggable={isMobile}
        constraintsRef={containerRef}
      />
    </section>
  );
};

export default Gallery;

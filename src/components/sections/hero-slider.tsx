"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ManPhoneSlide } from "./man-phone-slide";
import { ServicesCardsSlide } from "./services-cards-slide";
// import { AgibPromoSlide } from "./agib-promo-slide";

const SLIDES = [
  { id: "slide-1", node: <ManPhoneSlide />, className: "mt-[20px]" },
  { id: "slide-2", node: <ServicesCardsSlide />, className: "" },
  // { id: "slide-3", node: <AgibPromoSlide />, className: "mt-[20px]" },
];
const INTERVAL_MS = 20000;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "40%" : "-40%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-40%" : "40%",
    opacity: 0,
  }),
};

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const goNext = () => {
    const next = (activeIndex + 1) % SLIDES.length;
    setDirection(1);
    setActiveIndex(next);
  };

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(goNext, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, paused]);

  return (
    <div
      className="relative w-full overflow-visible"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* Keep overflow fully visible so floating phone top is never clipped */}
      <div className="w-full overflow-visible">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            className="w-full overflow-visible"
          >
            <div className={SLIDES[activeIndex].className}>
              {SLIDES[activeIndex].node}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex
                ? "w-6 bg-[#67b748]"
                : "w-2 bg-[#67b748]/30 hover:bg-[#67b748]/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

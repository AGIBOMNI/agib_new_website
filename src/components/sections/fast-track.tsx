"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/layout/container";

type FastTrackCard = {
  title: string;
  image: string;
  backgroundImage?: string;
  dark?: boolean;
};

const cards: FastTrackCard[] = [
  {
    title: "Open Individual Account",
    image: "/images/hijab_girl_1.png",
  },
  {
    title: "Open an investment Account",
    image: "/images/man_receiving_money.png",
  },
  {
    title: "Request for an ATM Card",
    image: "/images/hand_to_hand_atm_card.png",
    backgroundImage: "/images/background_image for _hand_to_hand.png",
    dark: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function FastTrack() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((i) => Math.min(i + 1, Math.max(0, cards.length - 1)));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <section className="py-14 md:py-20">
      <Container>
        {/* Pill label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="mb-5 inline-flex items-center rounded-full bg-[#e7f6dd] px-4 py-1.5"
        >
          <span className="text-[13px] font-medium text-[#5da63e] md:text-[14px]">
            Fast Track
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0 }}
          style={{
            fontFamily:
              '"Canela Black", "Canela Black Placeholder", sans-serif',
            wordSpacing: "0.08em",
          }}
          className="mb-10 max-w-[28ch] text-[32px] font-black leading-[1.35] tracking-normal text-[#1a1a1a] md:mb-14 md:text-[52px] md:leading-[1.25]"
        >
          <span className="text-[#67b748]">Start your journey with us</span>{" "}
          now, or request for an ATM card below and more!
        </motion.h2>
      </Container>

      {/* Cards carousel */}
      <div className="relative">
        {/* Prev arrow */}
        <button
          type="button"
          aria-label="Previous card"
          onClick={prev}
          className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8ddd0] bg-white shadow-md transition-colors hover:border-[#67b748] hover:bg-[#f0faea] md:left-4 md:h-11 md:w-11"
        >
          <ChevronLeft className="h-5 w-5 text-[#67b748]" />
        </button>

        {/* Next arrow */}
        <button
          type="button"
          aria-label="Next card"
          onClick={next}
          className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e8ddd0] bg-white shadow-md transition-colors hover:border-[#67b748] hover:bg-[#f0faea] md:right-4 md:h-11 md:w-11"
        >
          <ChevronRight className="h-5 w-5 text-[#67b748]" />
        </button>

        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.18 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3"
          >
            {cards.map((card, i) => (
              <motion.article
                key={card.title}
                variants={fadeUp}
                transition={{ duration: 0.9, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className={`group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm ${
                  i === index ? "ring-2 ring-[#67b748]/40" : ""
                }`}
                style={{
                  backgroundColor: card.dark ? "#0a0a0a" : "#f4f4f4",
                }}
              >
                {/* Optional decorative background pattern */}
                {card.backgroundImage && (
                  <Image
                    src={card.backgroundImage}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center opacity-60"
                  />
                )}

                {/* Main foreground image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Bottom gradient for text legibility */}
                <div
                  className={`absolute inset-0 ${
                    card.dark
                      ? "bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                      : "bg-gradient-to-t from-black/60 via-black/10 to-transparent"
                  }`}
                />

                {/* Top-left chip */}
                <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-sm">
                  <span className="text-[12px] font-medium text-[#1a1a1a] md:text-[13px]">
                    Self Service form
                  </span>
                </div>

                {/* Top-right arrow button */}
                <a
                  href="#"
                  aria-label={`Open ${card.title}`}
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm transition-transform hover:scale-105 md:h-10 md:w-10"
                >
                  <ArrowUpRight className="h-4 w-4 text-[#1a1a1a] md:h-5 md:w-5" />
                </a>

                {/* Title */}
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <h3 className="max-w-[14ch] text-[22px] font-bold leading-tight text-white md:text-[26px]">
                    {card.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Dots indicator */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {cards.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to card ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-[#67b748]" : "w-2 bg-[#d4d4d4]"
                }`}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

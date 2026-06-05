"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function AgibPromoSlide() {
  return (
    <div className="relative w-full overflow-hidden rounded-[24px] bg-white shadow-lg md:h-[560px]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative grid h-full grid-cols-1 md:grid-cols-2">
        {/* LEFT SIDE CONTENT */}
        <div className="relative z-20 flex flex-col justify-center p-8 md:p-12">
          {/* Headline */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1, delay: 0.2 }}
          >
            <motion.span
              variants={fadeUp}
              className="block text-[42px] leading-none text-[#1a1a1a]"
              style={{ fontFamily: "cursive, sans-serif" }}
            >
              We are
            </motion.span>
            <motion.span
              variants={fadeUp}
              className="mt-2 block text-[44px] font-black leading-[1.05] text-[#67b748] md:text-[56px]"
            >
              The First Islamic Bank
            </motion.span>
            <motion.span
              variants={fadeUp}
              className="block text-[44px] font-black leading-[1.05] text-[#1a1a1a] md:text-[56px]"
            >
              in The Gambia
            </motion.span>
            <motion.div
              variants={fadeUp}
              className="mt-4 h-1 w-20 bg-[#67b748]"
            />
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative min-h-[400px] md:min-h-full">
          {/* The Large Circular Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute -left-[20%] bottom-[10%] top-[10%] right-[-10%] overflow-hidden rounded-full shadow-2xl md:-left-[35%] md:bottom-[-5%] md:top-[-5%] md:right-[-20%]"
          >
            <Image
              src="/images/agib_building.png"
              alt="AGIB Service"
              fill
              className="object-contain object-center scale-90"
              priority
              unoptimized
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}


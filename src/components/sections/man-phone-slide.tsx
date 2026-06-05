"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.18 } },
};

export function ManPhoneSlide() {
  return (
    <div className="relative w-full" style={{ marginTop: "20px" }}>
      {/* Main Background Image (Man on Sofa) — shifted right to leave room for phone */}
      <div className="overflow-hidden rounded-[20px] md:rounded-[24px] md:ml-[240px]">
        <Image
          src="/images/man.png"
          alt="Person banking from home"
          width={1400}
          height={600}
          priority
          className="h-[200px] w-full object-cover md:h-[420px]"
        />
      </div>

      {/* Phone Container
          - overflow-visible so the phone top is VISIBLE when floating up
          - Height matches man image so phone bottom aligns at the same level
          - A separate gradient overlay (higher z) covers the phone bottom
      */}
      <div
        className="absolute left-0 top-0 z-[2] hidden w-[260px] overflow-visible md:block md:h-[420px]"
      >
        {/* Entrance + float animation */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "circOut" }}
          className="absolute inset-x-0 bottom-0 translate-y-[10%]"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.2, ease: "easeInOut", repeat: Infinity }}
            style={{
              WebkitMaskImage:
                "linear-gradient(to top, transparent 0%, transparent calc(20% - 60px), black calc(34% - 60px), black 100%)",
              maskImage:
                "linear-gradient(to top, transparent 0%, transparent calc(20% - 60px), black calc(34% - 60px), black 100%)",
            }}
          >
            <Image
              src="/images/phone.png"
              alt="AGIB mobile banking app"
              width={420}
              height={840}
              priority
              className="h-auto w-full object-contain object-bottom"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Pills Container */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-1.5 md:bottom-5 md:gap-3 md:left-[280px] md:right-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex w-full items-center justify-center gap-1.5 md:gap-3"
        >
          {[
            "Transfer up to GMD100,000.00",
            "Secure your account",
            "Request for ATM cards",
          ].map((text, index) => (
            <motion.div
              key={text}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex w-auto items-center gap-1 rounded-full bg-[#67b748] px-2.5 py-1.5 text-center text-white md:px-5 md:py-2"
            >
              <span className="flex h-3 w-3 items-center justify-center rounded-[1px] bg-white/20 text-[5px] md:h-4.5 md:w-4.5 md:text-[10px]">
                ✓
              </span>
              <span className="text-[9px] font-bold leading-tight md:text-[13px]">
                {text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

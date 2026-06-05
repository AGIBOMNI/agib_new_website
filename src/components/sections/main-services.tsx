"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/container";

type Service = {
  title: string;
  image: string;
  features: string[];
};

const services: Service[] = [
  {
    title: "Retail Banking",
    image: "/images/man_holding_phone.png",
    features: ["Current Account", "Savings Account", "Deposit Account"],
  },
  {
    title: "Corporate Banking",
    image: "/images/girl_holding_phone.png",
    features: ["Cash Collections", "Contract financing", "Investment Services"],
  },
  {
    title: "Trade Finance",
    image: "/images/old_man_assistance.png",
    features: ["Letters of credit", "Bid Security", "Bank Guarantees"],
  },
  {
    title: "Foreign Dealings",
    image: "/images/man_suite.png",
    features: [
      "Int'l Money Transfers",
      "Foreign Exchange",
      "Portfolio Issuance",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const CYCLE_INTERVAL = 3000;

export function MainServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (hoverIndex !== null) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, CYCLE_INTERVAL);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [hoverIndex]);

  const displayedIndex = hoverIndex ?? activeIndex;

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
            Main Services
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
          
          <span className="text-[#67b748]">4 core services we offer</span>,
          among many more.
        </motion.h2>

        {/* Cards grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.18 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4"
        >
          {services.map((service, index) => {
            const isActive = displayedIndex === index;
            return (
              <motion.article
                key={service.title}
                variants={fadeUp}
                transition={{ duration: 0.9, ease: "easeOut" }}
                animate={{ y: isActive ? -8 : 0 }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-sm transition-shadow duration-500"
                style={{
                  boxShadow: isActive
                    ? "0 20px 40px -12px rgba(103, 183, 72, 0.45)"
                    : "0 4px 10px -4px rgba(0, 0, 0, 0.15)",
                }}
              >
                {/* Background image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`object-cover object-center transition-transform duration-700 ease-out ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Green tint overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-[#67b74833] via-[#67b74866] to-[#2d5a1fcc] transition-opacity duration-500"
                  style={{ opacity: isActive ? 0.75 : 1 }}
                />

                {/* Bottom content: features + title */}
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <div className="mb-5 flex flex-col gap-2">
                    {service.features.map((feature, fIdx) => (
                      <motion.div
                        key={feature}
                        animate={{
                          x: isActive ? 0 : -6,
                          opacity: isActive ? 1 : 0.85,
                        }}
                        transition={{
                          duration: 0.4,
                          delay: isActive ? fIdx * 0.08 : 0,
                          ease: "easeOut",
                        }}
                        className="flex items-center gap-2 self-start rounded-full bg-white/85 px-3 py-1.5 backdrop-blur-sm"
                      >
                        <Check
                          className="h-3.5 w-3.5 text-[#67b748]"
                          strokeWidth={3}
                        />
                        <span className="text-[12px] font-medium text-[#1a1a1a] md:text-[13px]">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.h3
                    animate={{ scale: isActive ? 1.05 : 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="origin-left text-[22px] font-bold leading-tight text-white md:text-[24px]"
                  >
                    {service.title}
                  </motion.h3>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

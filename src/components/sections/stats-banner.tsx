"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { Users, CreditCard, ShieldCheck, MapPin } from "lucide-react";

type Stat = {
  value: string;
  label: string;
  icon: any;
};

const stats: Stat[] = [
  { value: "28+", label: "Years of Trust", icon: ShieldCheck },
  { value: "50k+", label: "Happy Customers", icon: Users },
  { value: "7", label: "Branches Nationwide", icon: MapPin },
  { value: "13+", label: "ATM Locations", icon: CreditCard },
];

const tags: string[] = [
  "Islamic Banking",
  "Retail Banking",
  "Corporate",
  "Trade Finance",
  "Investment",
  "Foreign Exchange",
  "Mobile Banking",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CYCLE_INTERVAL = 3000;

function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0L14.39 9.61L24 12L14.39 14.39L12 24L9.61 14.39L0 12L9.61 9.61L12 0Z" />
    </svg>
  );
}

export function StatsBanner() {
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
      setActiveIndex((prev) => (prev + 1) % stats.length);
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
    <section className="relative z-30 bg-white py-14 md:py-44">
      <Container>
        {/* Stats grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.18, delayChildren: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8 mb-10 md:mb-16"
        >
          {stats.map((stat, index) => {
            const isActive = displayedIndex === index;
            return (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
                animate={{
                  y: isActive ? -10 : 0,
                  scale: isActive ? 1.02 : 1,
                  backgroundColor: isActive ? "#ffffff" : "#f8fafc",
                  borderColor: isActive ? "rgba(103, 183, 72, 0.2)" : "rgba(0, 0, 0, 0.05)",
                  boxShadow: isActive 
                    ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    : "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className="group relative overflow-hidden rounded-[32px] border p-8 text-center transition-all duration-500 md:p-10 lg:p-12"
              >
                {/* Decorative background element */}
                <div 
                  className={`absolute -right-4 -top-4 h-24 w-24 rounded-full transition-transform duration-700 ${
                    isActive ? "scale-150 bg-[#67b748]/10" : "bg-[#67b748]/5"
                  }`} 
                />
                
                {/* Icon */}
                <div 
                  className={`relative mb-6 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-all duration-300 md:h-16 md:w-16 ${
                    isActive ? "bg-[#67b748]" : "bg-white"
                  }`}
                >
                  <stat.icon 
                    className={`h-6 w-6 transition-colors duration-300 md:h-8 md:w-8 ${
                      isActive ? "text-white" : "text-[#67b748]"
                    }`} 
                  />
                </div>

                <div
                  style={{
                    fontFamily:
                      '"Canela Black", "Canela Black Placeholder", sans-serif',
                  }}
                  className={`relative mb-3 text-[42px] font-black leading-none tracking-tight transition-colors duration-300 md:text-[54px] lg:text-[64px] ${
                    isActive ? "text-[#1a1a1a]" : "text-[#1a1a1a]/80"
                  }`}
                >
                  {stat.value}
                </div>
                <div 
                  className={`relative text-[14px] font-bold uppercase tracking-wider transition-colors duration-300 md:text-[15px] ${
                    isActive ? "text-[#67b748]" : "text-[#737373]"
                  }`}
                >
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>

      {/* Diagonal green banner */}
      <div className="relative z-50 mt-20 md:mt-28">
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: -5 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="relative -mx-[8%] origin-center bg-[#67b748] py-5 shadow-lg md:py-7"
        >
          {/* Scrolling tags row */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{
                x: ["0%", "-33.333%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex items-center gap-16 whitespace-nowrap md:gap-24"
            >
              {[...tags, ...tags, ...tags].map((tag, i) => (
                <div
                  key={`${tag}-${i}`}
                  className="flex items-center gap-16 md:gap-24"
                >
                  <span
                    style={{
                      fontFamily:
                        '"Canela Black", "Canela Black Placeholder", sans-serif',
                    }}
                    className="text-[22px] font-black leading-none text-white md:text-[32px]"
                  >
                    {tag}
                  </span>
                  <Sparkle className="h-5 w-5 shrink-0 text-white md:h-6 md:w-6" />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

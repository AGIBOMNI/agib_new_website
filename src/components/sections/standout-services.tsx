"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/container";

import { useEffect, useRef, useState } from "react";

type StandoutService = {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  layout: "vertical" | "horizontal";
};

const services: StandoutService[] = [
  {
    id: 1,
    category: "School Fee",
    title: "School Fee",
    description:
      "Easily handle and pay for school fees and tuition right here!",
    image: "/images/school_fee.png",
    layout: "vertical",
  },
  {
    id: 2,
    category: "Government Payment",
    title: "Number Plate Payment",
    description: "Effortlessly handle your number plate payments.",
    image: "/images/car.png",
    layout: "horizontal",
  },
  {
    id: 3,
    category: "GRA Bills",
    title: "GRA Payments",
    description:
      "Simplify your GRA payments with AGIB Bank—fast, secure, and hassle-free!",
    image: "/images/card_3_new.png",
    layout: "vertical",
  },
  {
    id: 4,
    category: "Non Tax Bills",
    title: "Payments of MR Passport",
    description:
      "Easily oversee all your financial accounts through one unified platform.",
    image: "/images/card_4.png",
    layout: "vertical",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CYCLE_INTERVAL = 3000;

export function StandoutServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.2 });

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
    <section className="py-14 md:py-20 bg-white">
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
            Standout Services
          </span>
        </motion.div>

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
          className="mb-10 text-[32px] font-black leading-[1.35] tracking-normal text-[#1a1a1a] md:mb-14 md:text-[52px] md:leading-[1.25]"
        >
          Explore our <span className="text-[#67b748]">Standout Services</span>,
          and many more.
        </motion.h2>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
          {/* CARD 1 - narrower (2/5) */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? (displayedIndex === 0 ? -8 : 0) : 30,
              backgroundColor: displayedIndex === 0 ? "#eff7ea" : "#f4f4f4",
              borderColor:
                displayedIndex === 0
                  ? "rgba(103, 183, 72, 0.3)"
                  : "rgba(0, 0, 0, 0.05)",
              boxShadow:
                displayedIndex === 0
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            }}
            transition={{
              opacity: { duration: 1.0, delay: 0 },
              y: { duration: 1.0, ease: "easeOut" },
              backgroundColor: { duration: 1.0 },
              borderColor: { duration: 1.0 },
              boxShadow: { duration: 1.0 },
            }}
            onMouseEnter={() => setHoverIndex(0)}
            onMouseLeave={() => setHoverIndex(null)}
            className="group relative overflow-hidden rounded-[24px] bg-[#f4f4f4] p-6 md:p-8 shadow-sm border border-black/5 md:col-span-2 transition-colors duration-300"
          >
            <div className="mb-6 inline-block rounded-full bg-white px-4 py-1.5 shadow-sm border border-black/5">
              <span className="text-[12px] font-bold text-[#1a1a1a]">
                {services[0].category}
              </span>
            </div>
            <div className="relative mb-6 aspect-[16/7] w-full overflow-hidden rounded-2xl bg-[#f4f4f4]">
              <Image
                src={services[0].image}
                alt=""
                fill
                className="object-cover object-center"
              />
            </div>
            <h3 className="text-[24px] font-black text-[#1a1a1a] mb-2">
              {services[0].title}
            </h3>
            <p className="text-[15px] text-[#525252] mb-4 leading-relaxed">
              {services[0].description}
            </p>
            <a
              href="#"
              className="text-[14px] font-bold text-[#737373] hover:text-[#67b748] transition-colors"
            >
              Learn more ↗
            </a>
          </motion.article>

          {/* CARD 2 - wider (3/5), car bleeds edge-to-edge on left half */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? (displayedIndex === 1 ? -8 : 0) : 30,
              backgroundColor: displayedIndex === 1 ? "#eff7ea" : "#f4f4f4",
              borderColor:
                displayedIndex === 1
                  ? "rgba(103, 183, 72, 0.3)"
                  : "rgba(0, 0, 0, 0.05)",
              boxShadow:
                displayedIndex === 1
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            }}
            transition={{
              opacity: { duration: 1.0, delay: 0.1 },
              y: { duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 },
              backgroundColor: { duration: 1.0 },
              borderColor: { duration: 1.0 },
              boxShadow: { duration: 1.0 },
            }}
            onMouseEnter={() => setHoverIndex(1)}
            onMouseLeave={() => setHoverIndex(null)}
            className="group relative overflow-hidden rounded-[24px] bg-[#f4f4f4] shadow-sm border border-black/5 md:col-span-3 min-h-[208px] md:min-h-[272px] transition-colors duration-300"
          >
            <div className="absolute inset-y-0 left-0 w-[55%] md:w-1/2">
              <Image
                src={services[1].image}
                alt=""
                fill
                className="object-cover object-right scale-[1.25] md:scale-[1.3]"
              />
            </div>

            <div className="absolute top-6 left-6 z-10 inline-block rounded-full bg-white px-4 py-1.5 shadow-sm border border-black/5">
              <span className="text-[12px] font-bold text-[#1a1a1a]">
                {services[1].category}
              </span>
            </div>

            <div className="relative ml-[55%] md:ml-[50%] flex h-full flex-col justify-center p-6 md:p-8">
              <h3 className="text-[24px] font-black text-[#1a1a1a] mb-2">
                {services[1].title}
              </h3>
              <p className="text-[15px] text-[#525252] mb-4 leading-relaxed">
                {services[1].description}
              </p>
              <a
                href="#"
                className="text-[14px] font-bold text-[#737373] hover:text-[#67b748] transition-colors"
              >
                Learn more ↗
              </a>
            </div>
          </motion.article>

          {/* CARD 3 - wider (3/5) */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? (displayedIndex === 2 ? -8 : 0) : 30,
              backgroundColor: displayedIndex === 2 ? "#eff7ea" : "#f4f4f4",
              borderColor:
                displayedIndex === 2
                  ? "rgba(103, 183, 72, 0.3)"
                  : "rgba(0, 0, 0, 0.05)",
              boxShadow:
                displayedIndex === 2
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            }}
            transition={{
              opacity: { duration: 1.0, delay: 0.2 },
              y: { duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
              backgroundColor: { duration: 1.0 },
              borderColor: { duration: 1.0 },
              boxShadow: { duration: 1.0 },
            }}
            onMouseEnter={() => setHoverIndex(2)}
            onMouseLeave={() => setHoverIndex(null)}
            className="group relative overflow-hidden rounded-[24px] bg-[#f4f4f4] p-6 md:p-8 shadow-sm border border-black/5 md:col-span-3 transition-colors duration-300"
          >
            <div className="mb-6 inline-block rounded-full bg-white px-4 py-1.5 shadow-sm border border-black/5">
              <span className="text-[12px] font-bold text-[#1a1a1a]">
                {services[2].category}
              </span>
            </div>
            <h3 className="text-[24px] font-black text-[#1a1a1a] mb-2">
              {services[2].title}
            </h3>
            <p className="text-[15px] text-[#525252] mb-4 leading-relaxed">
              {services[2].description}
            </p>
            <a
              href="#"
              className="text-[14px] font-bold text-[#737373] hover:text-[#67b748] transition-colors mb-6 inline-block"
            >
              Learn more ↗
            </a>
            <div className="relative -mx-6 -mb-6 mt-4 aspect-[16/5] w-[calc(100%+3rem)] overflow-visible rounded-t-2xl bg-[#f4f4f4] md:-mx-8 md:-mb-8 md:w-[calc(100%+4rem)]">
              <Image
                src={services[2].image}
                alt=""
                width={1200}
                height={300}
                className="pointer-events-none absolute bottom-0 left-0 w-full h-[220px] md:h-[260px]  origin-bottom object-cover object-[center_30%]"
              />
            </div>
          </motion.article>

          {/* CARD 4 - narrower (2/5) */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? (displayedIndex === 3 ? -8 : 0) : 30,
              backgroundColor: displayedIndex === 3 ? "#eff7ea" : "#f4f4f4",
              borderColor:
                displayedIndex === 3
                  ? "rgba(103, 183, 72, 0.3)"
                  : "rgba(0, 0, 0, 0.05)",
              boxShadow:
                displayedIndex === 3
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            }}
            transition={{
              opacity: { duration: 1.0, delay: 0.3 },
              y: { duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.45 },
              backgroundColor: { duration: 1.0 },
              borderColor: { duration: 1.0 },
              boxShadow: { duration: 1.0 },
            }}
            onMouseEnter={() => setHoverIndex(3)}
            onMouseLeave={() => setHoverIndex(null)}
            className="group relative flex flex-col overflow-hidden rounded-[24px] bg-[#f4f4f4] p-6 md:p-8 shadow-sm border border-black/5 md:col-span-2 transition-colors duration-300"
          >
            <div className="mb-6 inline-block self-start rounded-full bg-white px-4 py-1.5 shadow-sm border border-black/5">
              <span className="text-[12px] font-bold text-[#1a1a1a]">
                {services[3].category}
              </span>
            </div>
            <h3 className="text-[24px] font-black text-[#1a1a1a] mb-2">
              {services[3].title}
            </h3>
            <p className="text-[15px] text-[#525252] mb-4 leading-relaxed">
              {services[3].description}
            </p>
            <a
              href="#"
              className="text-[14px] font-bold text-[#737373] hover:text-[#67b748] transition-colors mb-6 inline-block self-start"
            >
              Learn more ↗
            </a>
            <div className="relative -mx-6 -mb-6 flex flex-1 min-h-[180px] w-[calc(100%+3rem)] items-center overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#67b748] to-[#5da63e] p-4 md:-mx-8 md:-mb-8 md:w-[calc(100%+4rem)] md:p-6">
              <div className="flex flex-col gap-2 relative z-10 w-1/2 md:w-[60%]">
                {[
                  "No waiting in lines",
                  "Near-instant confirmation",
                  "Pay from anywhere",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg bg-black/10 px-3 py-2 border border-white/10 backdrop-blur-sm"
                  >
                    <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white/40">
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 4L3.5 6.5L9 1"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-[11px] font-medium text-white md:text-[13px] whitespace-nowrap">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="absolute right-0 bottom-0 top-0 w-1/2 md:w-[50%]">
                <Image
                  src={services[3].image}
                  alt=""
                  fill
                  className="object-contain object-bottom scale-110 translate-y-4"
                />
              </div>
            </div>
          </motion.article>
        </div>
      </Container>
    </section>
  );
}

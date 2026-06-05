"use client";

import { useCallback, useEffect, useRef } from "react";
import { Container } from "@/components/layout/container";
import {
  Landmark,
  Factory,
  Monitor,
  ShoppingCart,
  Briefcase,
  Building2,
  Wallet,
  Truck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  { label: "Capital Financing", icon: Landmark },
  { label: "Manufacturing & Construction", icon: Factory },
  { label: "Fixed Asset Financing", icon: Monitor },
  { label: "Consumer Goods Financing", icon: ShoppingCart },
  { label: "Corporate Banking", icon: Briefcase },
  { label: "Real Estate Financing", icon: Building2 },
  { label: "Personal Banking", icon: Wallet },
  { label: "Trade Financing", icon: Truck },
];

const ITEMS_PER_CLICK = 3;
const AUTO_SPEED = 60; // px per second

export function ServicesMarquee() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const scrollingRef = useRef(false);
  const positionRef = useRef(0);

  // Continuous auto-scroll via requestAnimationFrame
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    // Start in the middle copy so we can scroll either direction
    const third = el.scrollWidth / 3;
    el.scrollLeft = third;
    positionRef.current = third;

    let raf: number;
    let lastTime = performance.now();

    const step = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      if (!pausedRef.current && !scrollingRef.current && el.scrollWidth > 0) {
        const sectionWidth = el.scrollWidth / 3;
        positionRef.current += AUTO_SPEED * delta;

        // Seamless loop: stay within the middle third
        if (positionRef.current >= sectionWidth * 2) {
          positionRef.current -= sectionWidth;
        }

        el.scrollLeft = positionRef.current;
      } else {
        // Keep the float tracker in sync when paused or during manual scroll
        positionRef.current = el.scrollLeft;
      }

      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const getItemWidth = useCallback(() => {
    const el = wrapperRef.current;
    if (!el) return 220;
    const firstChild = el.querySelector("a");
    if (!firstChild) return 220;
    const gap = 16; // gap-4 = 16px
    return firstChild.offsetWidth + gap;
  }, []);

  const scroll = useCallback(
    (direction: "left" | "right") => {
      const el = wrapperRef.current;
      if (!el) return;

      scrollingRef.current = true;
      const step = getItemWidth() * ITEMS_PER_CLICK;
      const target =
        el.scrollLeft + (direction === "right" ? step : -step);

      el.scrollTo({ left: target, behavior: "smooth" });

      setTimeout(() => {
        const sectionWidth = el.scrollWidth / 3;
        if (el.scrollLeft >= sectionWidth * 2) {
          el.scrollLeft -= sectionWidth;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += sectionWidth;
        }
        positionRef.current = el.scrollLeft;
        scrollingRef.current = false;
      }, 500);
    },
    [getItemWidth]
  );

  const handleMouseEnter = () => {
    pausedRef.current = true;
  };

  const handleMouseLeave = () => {
    pausedRef.current = false;
  };

  return (
    <section className="py-10 md:py-14">
      <Container>
        <h2
          style={{
            fontFamily:
              '"Canela Black", "Canela Black Placeholder", sans-serif',
          }}
          className="mb-8 text-center text-[24px] font-black tracking-tight text-[#1a1a1a] md:mb-10 md:text-[36px]"
        >
          How can we help you?
        </h2>
      </Container>

      <div className="relative flex items-center">
        {/* Left arrow */}
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scroll("left")}
          className="z-20 ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e8ddd0] bg-white shadow-sm transition-colors hover:border-[#d39a59] hover:bg-[#fdf6ef] md:ml-4 md:h-10 md:w-10"
        >
          <ChevronLeft className="h-5 w-5 text-[#d39a59]" />
        </button>

        {/* Track wrapper */}
        <div className="relative flex-1 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--background)] to-transparent md:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--background)] to-transparent md:w-20" />

          <div
            ref={wrapperRef}
            className="no-scrollbar flex gap-4 overflow-x-auto px-2 py-1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Render list 3× for enough runway in both directions */}
            {[...services, ...services, ...services].map((service, i) => (
              <a
                key={`${service.label}-${i}`}
                href="#"
                className="group flex shrink-0 items-center gap-2.5 rounded-full border border-[#e8ddd0] bg-white px-5 py-3 shadow-sm transition-colors hover:border-[#d39a59] hover:bg-[#fdf6ef] md:px-6 md:py-3.5"
              >
                <service.icon className="h-5 w-5 text-[#d39a59] md:h-6 md:w-6" />
                <span className="whitespace-nowrap text-[14px] font-medium text-[#1a1a1a] md:text-[16px]">
                  {service.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scroll("right")}
          className="z-20 mr-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e8ddd0] bg-white shadow-sm transition-colors hover:border-[#d39a59] hover:bg-[#fdf6ef] md:mr-4 md:h-10 md:w-10"
        >
          <ChevronRight className="h-5 w-5 text-[#d39a59]" />
        </button>
      </div>
    </section>
  );
}

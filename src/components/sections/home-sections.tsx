"use client";

import { Container } from "@/components/layout/container";
import { motion } from "framer-motion";
import { RoughNotation } from "react-rough-notation";
import { User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { HeroSlider } from "./hero-slider";
import { QrDownloadCard } from "./qr-download-card";

export function HomeSections() {
  const [showHighlight, setShowHighlight] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    if (triggered.current) return;
    triggered.current = true;
    const id = setTimeout(() => {
      setShowHighlight(true);
    }, 600);
    return () => clearTimeout(id);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.0, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="pt-4 pb-10 md:pt-6 md:pb-12" style={{ backgroundColor: "#74bf5112" }}>
      <Container overflowVisible>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid gap-y-8 md:gap-x-10 md:gap-y-8 md:grid-cols-[1.1fr_0.9fr] md:items-start"
        >
          {/* Left Side: Headline */}
          <motion.div variants={fadeInUp} className="relative z-10 pt-2">
            <h1 
              style={{ fontFamily: '"Canela Black", "Canela Black Placeholder", sans-serif' }}
              className="text-[48px] font-black leading-[1.08] tracking-tight text-[#1a1a1a] md:text-[72px] md:max-w-[12ch]"
            >
              <span className="inline-block mb-6">The first </span><br/>
              <RoughNotation 
                type="highlight" 
                color="#74bf51" 
                show={showHighlight}
                strokeWidth={2}
                padding={[3, 4]}
                iterations={1}
                animationDuration={800}
                multiline={true}
              >
                <span className="text-[#f8f8f8] inline-block">
                  <span className="inline-block mb-6">Islamic</span> Bank
                </span>
              </RoughNotation> <br/>
              <span className="inline-block m-2">In the Gambia</span>
            </h1>
          </motion.div>

          {/* Right Side: CTA Area */}
          <motion.div variants={fadeInUp} className="flex flex-col md:pt-4">
            <div className="w-full max-w-full md:max-w-[420px]">
              {/* <div className="flex items-start gap-2">
                <p className="text-[22px] leading-[1.2] tracking-tight text-[#1a1a1a] md:text-[32px]">
                  Click <span className="inline-block translate-y-1 text-[24px] md:text-[36px]">👇🏼</span> to access <br/>Your internet banking
                </p>
              </div> */}
              
              <div className="mt-6 flex flex-col gap-3 md:gap-3.5">
                <motion.a
                  href="https://omnimax.agib.gm/omni_web_portal/#/omni"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#67b748] px-6 shadow-sm transition hover:bg-[#5da63e] md:h-[58px]"
                >
                  <User className="w-[20px] h-[20px] md:w-[28px] md:h-[28px] text-white" />
                  <span className="leading-none text-[18px] font-semibold text-white md:text-[22px]">Personal Banking</span>
                </motion.a>
                
                <motion.a
                  href="https://omnimax.agib.gm/omni_corporate_web_portal/#/omni"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#fdf2e9] px-6 shadow-sm transition hover:bg-[#fae5d3] md:h-[58px]"
                >
                  <span className="leading-none text-[20px] md:text-[28px]">🏢</span>
                  <span className="leading-none text-[18px] font-semibold text-[#d39a59] md:text-[22px]">Coporate Banking</span>
                </motion.a>

                <QrDownloadCard />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Slider — replaces the static man+phone image block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative z-20 mt-10 md:mt-16 w-full" style={{ paddingTop: "20px" }}
        >
          <HeroSlider />
        </motion.div>
      </Container>
    </section>
  );
}

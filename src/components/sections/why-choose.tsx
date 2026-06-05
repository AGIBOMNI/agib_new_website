"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";

const features = [
  {
    side: "left",
    title: "Local Experts",
    subtitle: "Local Knowledge That Matters",
    description: "Our team has deep understanding of The Gambia's banking and Islamic finance landscape.",
  },
  {
    side: "right",
    title: "Shariah Compliant",
    subtitle: "Faith-Aligned Banking",
    description: "Every product we offer is fully Shariah-compliant and ethically structured.",
  },
  {
    side: "left",
    title: "Personalized Service",
    subtitle: "Tailored To Your Needs",
    description: "We provide customized banking solutions to meet each customer's unique financial goals.",
  },
  {
    side: "right",
    title: "Industry Recognition",
    subtitle: "Trusted By Many",
    description: "AGIB is a trusted institution serving thousands of individuals and businesses across The Gambia.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const FeatureBlock = ({ title, subtitle, description, side }: { title: string; subtitle: string; description: string; side: string }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -5 }}
    className={`group relative flex flex-col pt-8 ${
      side === "left" ? "md:items-end md:text-right" : "items-start text-left"
    }`}
  >
    {/* The Cut-out Shape Card */}
    <div className={`relative w-full rounded-[32px] bg-white/10 p-8 backdrop-blur-md transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl ${
      side === "left" ? "rounded-tr-none" : "rounded-tl-none"
    }`}>
      {/* The "Cut-out" Circle with Arrow */}
      <div className={`absolute -top-3 flex h-12 w-12 items-center justify-center ${
        side === "left" ? "-right-3" : "-left-3"
      }`}
      style={{ 
        background: '#ffffff',
        borderRadius: '50%',
        boxShadow: `0 0 0 6px #67b748` // Smaller cut-out shadow
      }}>
        <ArrowRight className="h-5 w-5 rotate-[-45deg] text-[#67b748]" />
      </div>

      <h3 className="mb-2 text-[22px] font-bold text-white md:text-[24px]">
        {title}
      </h3>
      <p className="mb-4 text-[14px] font-semibold text-[#e7f6dd] md:text-[16px]">
        {subtitle}
      </p>
      <p className="text-[14px] leading-relaxed text-white/80 md:text-[15px]">
        {description}
      </p>
    </div>
  </motion.div>
);

export function WhyChoose() {
  return (
    <section
      className="relative overflow-hidden py-14 md:py-20"
      style={{ backgroundColor: "#67b748" }}
    >
      <Container>
        {/* Header row */}
        <div className="mb-8 grid grid-cols-1 items-end gap-6 md:mb-12 md:grid-cols-2 md:gap-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0 }}
            style={{
              fontFamily: '"Canela Black", "Canela Black Placeholder", sans-serif',
              wordSpacing: "0.08em",
            }}
            className="text-[32px] font-black leading-[1.2] tracking-normal text-white md:text-[52px]"
          >
            Why Choose <br />
            <span className="text-[#e7f6dd]">Islamic Banking</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0, delay: 0.1 }}
            className="max-w-[480px] text-[15px] leading-relaxed text-white/85 md:text-[17px]"
          >
            We combine traditional values with modern Islamic banking to provide 
            ethical, transparent, and innovative financial solutions for our community.
          </motion.p>
        </div>

        {/* Curved decorative SVG line */}
        <div className="mb-12 md:mb-16">
          <svg viewBox="0 0 1200 60" className="w-full" preserveAspectRatio="none">
            <path
              d="M 0 50 Q 600 0 1200 50"
              fill="none"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
          </svg>
        </div>

        {/* Main grid */}
        <div className="relative mb-16 grid grid-cols-1 items-center gap-12 md:mb-20 md:grid-cols-[1fr_auto_1fr] md:gap-8 lg:gap-16">
          {/* Left features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
            className="flex flex-col gap-6 md:gap-8"
          >
            <FeatureBlock {...features[0]} />
            <FeatureBlock {...features[2]} />
          </motion.div>

          {/* Center building image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[340px] md:max-w-[420px]"
          >
            {/* Soft glow behind building */}
            <div className="absolute inset-0 -z-10 rounded-full bg-white/20 blur-[100px]" />
            
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/agib_building.png"
                alt="AGIB Bank Building"
                width={500}
                height={800}
                className="h-auto w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.1 }}
            className="flex flex-col gap-6 md:gap-8"
          >
            <FeatureBlock {...features[1]} />
            <FeatureBlock {...features[3]} />
          </motion.div>
        </div>

        {/* Explore button with horizontal lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="hidden h-[1px] flex-1 bg-white/30 md:block" />
          <button
            type="button"
            className="group flex items-center gap-2 rounded-full border border-white/40 bg-white px-8 py-3 text-[15px] font-medium text-[#1a1a1a] transition-all hover:bg-[#f5f5f5] hover:shadow-md"
          >
            Explore
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <div className="hidden h-[1px] flex-1 bg-white/30 md:block" />
        </motion.div>
      </Container>
    </section>
  );
}

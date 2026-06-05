"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { QrDownloadCard } from "./qr-download-card";

type Feature = {
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    title: "Instant Transfers",
    description: "Make instant bank transfers to both local and other banks.",
  },
  {
    title: "24/7 Banking",
    description: "Check your balances, transactions and transfer funds easily.",
  },
  {
    title: "Multi-Accounts",
    description:
      "Manage all your accounts from a single, centralized platform.",
  },
  {
    title: "Bills Payment",
    description: "Airtime, Cashpower, School Fees, GovPay and more.",
  },
];

export function MobileApp() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-[#f4f4f4] p-6 md:p-12 lg:p-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-8 lg:gap-16">
            {/* Left: copy */}
            <div>
              {/* Pill label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9 }}
                className="mb-6 inline-flex items-center rounded-full bg-[#e7f6dd] px-4 py-1.5"
              >
                <span className="text-[13px] font-medium text-[#5da63e] md:text-[14px]">
                  Mobile App
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
                className="mb-8 text-[36px] font-black leading-[1.15] tracking-normal text-[#1a1a1a] md:mb-10 md:text-[56px]"
              >
                Tap. Bank. <span className="text-[#67b748]">Smile.</span>
              </motion.h2>

              {/* Feature list */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.18 }}
                className="flex flex-col gap-6 md:gap-7"
              >
                {features.map((feature, idx) => (
                  <motion.div
                    key={feature.title}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="max-w-[460px]"
                  >
                    <h3 className="mb-2 text-[20px] font-bold text-[#1a1a1a] md:text-[22px]">
                      {feature.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#525252] md:text-[16px]">
                      {feature.description}
                    </p>
                    {idx === 0 && (
                      <div className="mt-4 h-[2px] w-full overflow-hidden rounded-full bg-[#e5e5e5]">
                        <motion.div
                          initial={{ width: "0%" }}
                          whileInView={{ width: "40%" }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.4,
                            ease: "easeOut",
                          }}
                          className="h-full bg-[#67b748]"
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              <QrDownloadCard className="mt-10 md:w-full md:max-w-none" />
            </div>

            {/* Right: phone illustration */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex items-center justify-center md:justify-end"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-[420px] md:max-w-[480px] lg:max-w-[560px]"
              >
                <Image
                  src="/images/hand_holding_phone.png"
                  alt="AGIB mobile banking app"
                  width={800}
                  height={900}
                  className="h-auto w-full object-contain"
                  priority={false}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

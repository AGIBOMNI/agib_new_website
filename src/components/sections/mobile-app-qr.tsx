"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function MobileAppQr() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="mt-10 overflow-hidden rounded-[28px] bg-gradient-to-r from-[#67b748] via-[#5da63e] to-[#4f9333] p-[1px] shadow-lg"
    >
      <div className="grid gap-5 rounded-[27px] bg-gradient-to-r from-[#6fbe51] via-[#67b748] to-[#5aa23c] p-5 md:grid-cols-[132px_1fr] md:items-center md:gap-6 md:p-6">
        <div className="flex justify-center md:justify-start">
          <div className="rounded-[18px] bg-white p-3 shadow-sm">
            <Image
              src="/agib_qr.png"
              alt="QR code for AGIB Bank Mobile App"
              width={108}
              height={108}
              className="h-[108px] w-[108px] rounded-[10px]"
            />
          </div>
        </div>

        <div>
          <p className="max-w-[40ch] text-[18px] font-semibold leading-[1.25] text-white md:text-[20px]">
            Scan to download AGIB Bank Mobile App.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="#"
              aria-label="Download AGIB Bank Mobile App on the App Store"
              className="inline-block transition-transform hover:scale-[1.03]"
            >
              <Image
                src="/images/apple_store_logo.png"
                alt="Download on the App Store"
                width={160}
                height={48}
                className="h-11 w-auto rounded-xl md:h-12"
              />
            </a>
            <a
              href="#"
              aria-label="Download AGIB Bank Mobile App on Google Play"
              className="inline-block transition-transform hover:scale-[1.03]"
            >
              <Image
                src="/images/play_store_logo.png"
                alt="Get it on Google Play"
                width={160}
                height={48}
                className="h-11 w-auto rounded-xl md:h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

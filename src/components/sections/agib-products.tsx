"use client";

import { Container } from "@/components/layout/container";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

type Product = {
  title: string;
  formLabel: string;
  image: string;
  featured?: boolean;
};

const products: Product[] = [
  {
    title: "Manufacturing & Construction",
    formLabel: "Murabaha Form",
    image: "/images/construction_man.png",
  },
  {
    title: "Agricultural Financing",
    formLabel: "Salam & Istisna Form",
    image: "/images/farmer_woman.png",
    featured: true,
  },
  {
    title: "Vehicular Financing",
    formLabel: "Ijarah (Islamic Leasing) Form",
    image: "/images/vehicule_man.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function AgibProducts() {
  return (
    <section className="bg-white py-14 md:py-20">
      <Container overflowVisible>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-5 inline-flex items-center rounded-full bg-[#e7f6dd] px-4 py-1.5"
        >
          <span className="text-[13px] font-medium text-[#5da63e] md:text-[14px]">
            AGIB Products
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
          className="mb-10 max-w-[29ch] text-[32px] font-black leading-[1.2] tracking-normal text-[#1a1a1a] md:mb-14 md:text-[52px] md:leading-[1.25]"
        >
          <span className="text-[#67b748]">AGIB Bank </span> offers
          Sharia-compliant products and services that{" "}
          <span className="text-[#67b748]">you don&apos;t need an account</span>{" "}
          to get started with.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.16 }}
          className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5"
        >
          {products.map((product) => (
            <motion.article
              key={product.title}
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className={`group relative min-h-[320px] overflow-hidden rounded-[20px] bg-[#1a1a1a] shadow-sm md:min-h-[360px] ${
                product.featured ? "lg:col-span-6" : "lg:col-span-3"
              }`}
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes={
                  product.featured
                    ? "(max-width: 1024px) 100vw, 50vw"
                    : "(max-width: 1024px) 100vw, 25vw"
                }
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-[#67b74833] to-[#2d5a1fcc]" />

              <div className="absolute left-4 right-4 top-4 z-10 flex items-start justify-between gap-3">
                <span className="rounded-full bg-white/90 px-4 py-2 text-[12px] font-semibold text-[#1a1a1a] shadow-sm backdrop-blur-sm md:text-[13px]">
                  {product.formLabel}
                </span>
                <button
                  type="button"
                  aria-label={`Open ${product.title}`}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#1a1a1a] shadow-sm transition group-hover:rotate-45 group-hover:bg-[#67b748] group-hover:text-white"
                >
                  <ArrowUpRight className="h-5 w-5" strokeWidth={2.4} />
                </button>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
                <h3 className="max-w-[12ch] text-[28px] font-bold leading-[1.05] tracking-tight text-white md:text-[32px]">
                  {product.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

"use client";

import { Container } from "@/components/layout/container";
import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FormEvent, useState } from "react";

const contactActions = [
  {
    eyebrow: "Give us a call",
    value: "+220 327 7777",
    icon: Phone,
  },
  {
    eyebrow: "Send us an email",
    value: "info@agib.gm",
    icon: Mail,
  },
  {
    eyebrow: "Visit our location at",
    value: "19 Kairaba Avenue, KSMD, The Gambia",
    icon: MapPin,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function CustomerSupport() {
  const [submitMessage, setSubmitMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitMessage("Feature coming soon");
  }

  return (
    <section className="bg-white py-14 md:py-20">
      <Container overflowVisible>
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                fontFamily:
                  '"Canela Black", "Canela Black Placeholder", sans-serif',
                wordSpacing: "0.08em",
              }}
              className="mb-7 max-w-[13ch] text-[38px] font-black leading-[1.35] tracking-normal text-[#1a1a1a] md:text-[58px]"
            >
              Get in touch with our sales experts 👨🏾‍💻
            </motion.h2>

            <motion.form
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
              onSubmit={handleSubmit}
              className="rounded-[24px] bg-[#f4f4f4] p-5 shadow-sm md:rounded-[28px] md:p-10"
            >
              <div className="space-y-7">
                <div>
                  <label
                    htmlFor="support-name"
                    className="mb-3 block text-[16px] font-medium text-[#1a1a1a]"
                  >
                    Full Name
                  </label>
                  <input
                    id="support-name"
                    name="name"
                    type="text"
                    placeholder="Ex. Alioune Badara Keita"
                    className="h-11 w-full rounded-md border-0 bg-white px-4 text-[14px] text-[#1a1a1a] outline-none transition placeholder:text-[#b7b7b7] focus:ring-2 focus:ring-[#67b748]/40"
                  />
                </div>

                <div className="grid gap-7 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="support-email"
                      className="mb-3 block text-[16px] font-medium text-[#1a1a1a]"
                    >
                      Email Address
                    </label>
                    <input
                      id="support-email"
                      name="email"
                      type="email"
                      placeholder="Ex. aliouneb@gmail.com"
                      className="h-11 w-full rounded-md border-0 bg-white px-4 text-[14px] text-[#1a1a1a] outline-none transition placeholder:text-[#b7b7b7] focus:ring-2 focus:ring-[#67b748]/40"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="support-phone"
                      className="mb-3 block text-[16px] font-medium text-[#1a1a1a]"
                    >
                      Phone Number
                    </label>
                    <input
                      id="support-phone"
                      name="phone"
                      type="tel"
                      placeholder="Ex. 3512596"
                      className="h-11 w-full rounded-md border-0 bg-white px-4 text-[14px] text-[#1a1a1a] outline-none transition placeholder:text-[#b7b7b7] focus:ring-2 focus:ring-[#67b748]/40"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="support-address"
                    className="mb-3 block text-[16px] font-medium text-[#1a1a1a]"
                  >
                    Address
                  </label>
                  <input
                    id="support-address"
                    name="address"
                    type="text"
                    placeholder="Ex. Alioune Badara Keita"
                    className="h-11 w-full rounded-md border-0 bg-white px-4 text-[14px] text-[#1a1a1a] outline-none transition placeholder:text-[#b7b7b7] focus:ring-2 focus:ring-[#67b748]/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="support-message"
                    className="mb-3 block text-[16px] font-medium text-[#1a1a1a]"
                  >
                    Tell us your message
                  </label>
                  <textarea
                    id="support-message"
                    name="message"
                    rows={6}
                    placeholder="Write your message here"
                    className="w-full resize-none rounded-md border-0 bg-white px-4 py-4 text-[14px] text-[#1a1a1a] outline-none transition placeholder:text-[#b7b7b7] focus:ring-2 focus:ring-[#67b748]/40"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 flex h-12 w-full items-center justify-center gap-3 rounded-full bg-[#67b748] px-6 text-[15px] font-medium text-white transition hover:bg-[#5da63e]"
              >
                <Send className="h-4 w-4 fill-white" />
                Send Message
              </button>

              {submitMessage && (
                <p className="mt-4 rounded-full bg-white px-4 py-3 text-center text-[14px] font-semibold text-[#67b748]">
                  {submitMessage}
                </p>
              )}
            </motion.form>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ staggerChildren: 0.14, delayChildren: 0.12 }}
            className="flex flex-col gap-5 lg:pt-0"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative min-h-[363px] overflow-hidden rounded-[20px] bg-[#dff2d8] md:min-h-[506px]"
            >
              <Image
                src="/images/costumer_service.png"
                alt="AGIB customer support"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </motion.div>

            <div className="grid gap-4">
              {contactActions.map((action) => {
                const Icon = action.icon;

                return (
                  <motion.a
                    key={action.value}
                    href="#"
                    variants={fadeUp}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="group flex min-h-[92px] items-center gap-5 rounded-[18px] bg-[#f4f4f4] px-5 py-4 shadow-sm transition hover:bg-[#eff7ea]"
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#1a1a1a] shadow-sm transition group-hover:text-[#67b748]">
                      <Icon className="h-8 w-8" strokeWidth={2.4} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[13px] font-medium text-[#a0a0a0]">
                        {action.eyebrow}
                      </span>
                      <span className="mt-1 block text-[16px] font-semibold leading-tight text-[#1a1a1a] md:text-[18px]">
                        {action.value}
                      </span>
                    </span>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#67b748] text-white transition group-hover:rotate-45">
                      <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

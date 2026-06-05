import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const badges = ["Murabaha", "Mudarabah", "Ijarah", "Sukuk", "Salam"];

const cards = [
  {
    bg: "bg-white",
    textColor: "text-[#1a1a1a]",
    descColor: "text-slate-500",
    image: "/images/cso_personal.png",
    title: "Account Opening, Fast and Secure",
    description:
      "Our dedicated account officers support you at every step, ensuring your account opening process is simple, secure, and completed without delays.",
    tagBg: "bg-[#67b748]/10",
    tagColor: "text-[#67b748]",
  },
  {
    bg: "bg-[#67b748]",
    textColor: "text-white",
    descColor: "text-white/90",
    image: "/images/user_with_phone.png",
    title: "A Modern Mobile App",
    description:
      "AGIB is driven by new technology, giving you fast, secure, and convenient banking from your phone anytime, anywhere.",
    tagBg: "bg-black/20",
    tagColor: "text-white",
  },
  {
    bg: "bg-[#1a1a2e]",
    textColor: "text-white",
    descColor: "text-white/70",
    image: "/images/investment.png",
    title: "Just arrive and pay",
    description:
      "As soon as you arrive you can pay, for any and all available government bills.",
    tagBg: "bg-[#67b748]/20",
    tagColor: "text-[#67b748]",
  },
];

const cardsContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55 },
  },
};

export function ServicesCardsSlide() {
  return (
    <div className="w-full">
      {/* Top badge strip */}
      <div className="flex items-center justify-center gap-3 pb-8 md:gap-8">
        {badges.map((badge, i) => (
          <div key={badge} className="flex items-center gap-1.5 md:gap-3">
            {i > 0 && (
              <div className="hidden h-4 w-px bg-slate-300 md:block" />
            )}
            <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#67b748] md:gap-2 md:text-[16px]">
              <CheckCircle size={16} className="shrink-0" />
              <span>{badge}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 3 Cards */}
      <motion.div
        variants={cardsContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            variants={cardVariants}
            className={`relative flex h-[400px] flex-col overflow-hidden rounded-[24px] p-6 md:h-[440px] ${card.bg}`}
          >
            {/* AGIB Services badge */}
            <div className={`z-10 w-fit rounded-full px-3 py-1 ${card.tagBg}`}>
              <span className={`text-[11px] font-semibold ${card.tagColor}`}>
                AGIB Services
              </span>
            </div>

            {/* Title + description */}
            <h3
              className={`z-10 mt-4 text-[22px] font-bold leading-tight md:text-[28px] ${card.textColor}`}
            >
              {card.title}
            </h3>
            <p className={`z-10 mt-3 text-[14px] leading-relaxed md:text-[15px] ${card.descColor}`}>
              {card.description}
            </p>

            {/* Background image fills the lower portion with a gradient fade */}
            <div className="absolute inset-x-0 bottom-0 h-[50%]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 668px) 100vw, 33vw"
              />
              {/* Fade from card color to transparent at the top of the image area */}
              <div
                className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${
                  card.bg === "bg-white"
                    ? "from-white"
                    : card.bg === "bg-[#67b748]"
                    ? "from-[#67b748]"
                    : "from-[#1a1a2e]"
                } to-transparent`}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

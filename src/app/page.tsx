import { HomeSections } from "@/components/sections/home-sections";
import { ServicesMarquee } from "@/components/sections/services-marquee";
import { MainServices } from "@/components/sections/main-services";
import { AgibProducts } from "@/components/sections/agib-products";
import { MobileApp } from "@/components/sections/mobile-app";
import { FastTrack } from "@/components/sections/fast-track";
import { WhyChoose } from "@/components/sections/why-choose";
import { StatsBanner } from "@/components/sections/stats-banner";
import { StandoutServices } from "@/components/sections/standout-services";
import { CustomerSupport } from "@/components/sections/customer-support";

export default function Home() {
  return (
    <>
      <HomeSections />
      <ServicesMarquee />
      <MainServices />
      <AgibProducts />
      <MobileApp />
      <FastTrack />
      <WhyChoose />
      <StatsBanner />
      <StandoutServices />
      <CustomerSupport />
    </>
  );
}

import HeroSection from "@/components/HeroSection";
import InfoBlock from "@/components/InfoBlock";
import PrizeShowcase from "@/components/PrizeShowcase";
import SponsorGrid from "@/components/SponsorGrid";
import JudgesPanel from "@/components/JudgesPanel";
import Footer from "@/components/Footer";
import React from "react";
import { Hero } from "@/components/demo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <Hero />
      <InfoBlock />
      <PrizeShowcase />
      <SponsorGrid />
      <JudgesPanel />
      <Footer />
    </main>
  );
}

"use client";
import AboutSection from "@/components/AboutSection";
import BannerSection from "@/components/BannerSection";
import FastMarquee from "@/components/FastMarquee";

export default function Home() {
  return (
    <main>
      <BannerSection />
      <FastMarquee />
      <AboutSection />
    </main>
  );
}

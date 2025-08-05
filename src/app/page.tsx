// src/app/page.tsx

import AboutSection from "@/components/homePage/AboutSection";
import CTASection from "@/components/homePage/CTASection";
import FeaturedProjectsSection from "@/components/homePage/FeaturedProjectsSection";
import HeroSection from "@/components/homePage/HeroSection";
import TestimonialsSection from "@/components/homePage/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedProjectsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

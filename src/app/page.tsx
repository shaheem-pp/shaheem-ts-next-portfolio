// src/app/page.tsx

import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import HeroSection from "@/components/sections/HeroSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

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

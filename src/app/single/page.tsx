"use client";

import { Separator } from "@/components/ui/separator";
import ContactSection from "./ContactsSection";
import EducationSection from "./EducationSection";
import FeaturedProjectsSection from "./FeaturedProjectsSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navigation from "./Navigation";
import ScrollToTop from "./ScrollToTop";
import SkillsSection from "./SkillsSection";
import TestimonialsSection from "./TestimonialsSection";
import WorkExperienceSection from "./WorkExperienceSection";

// Main Single Page Component
export default function SinglePage() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<Navigation />
			<main>
				<HeroSection />
				<Separator />
				<FeaturedProjectsSection />
				<Separator />
				<WorkExperienceSection />
				<Separator />
				<EducationSection />
				<Separator />
				<SkillsSection />
				<Separator />
				<TestimonialsSection />
				<Separator />
				<ContactSection />
			</main>
			<Footer />
			<ScrollToTop />
		</div>
	);
}

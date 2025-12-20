// src/app/page.tsx

import {
	AboutSection,
	CTASection,
	FeaturedProjectsSection,
	HeroSection,
	TestimonialsSection,
} from "@/components/homePage";

export default function Home() {
	return (
		<>
			{/* <SinglePage /> */}
			<HeroSection />
			<AboutSection />
			<FeaturedProjectsSection />
			<TestimonialsSection />
			<CTASection />
		</>
	);
}

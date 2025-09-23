"use client";

import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

// Scroll To Top Component
const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<Button
			className={`fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 ${
				isVisible
					? "opacity-100 translate-y-0 pointer-events-auto"
					: "opacity-0 translate-y-4 pointer-events-none"
			}`}
			size="icon"
			onClick={scrollToTop}
			aria-label="Scroll to top"
		>
			<ChevronUp className="h-5 w-5 transition-transform duration-200 hover:scale-110" />
		</Button>
	);
};

export default ScrollToTop;

"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

// Navigation Component
const Navigation = () => {
	const [isSheetOpen, setIsSheetOpen] = useState(false);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleMobileNavClick = (sectionId: string) => {
		scrollToSection(sectionId);
		setIsSheetOpen(false);
	};

	const navItems = [
		{ label: "Home", id: "home" },
		{ label: "Projects", id: "projects" },
		{ label: "Experience", id: "experience" },
		{ label: "Education", id: "education" },
		{ label: "Skills", id: "skills" },
		{ label: "Testimonials", id: "testimonials" },
		{ label: "Contact", id: "contact" },
	];

	return (
		<nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container max-w-6xl mx-auto flex h-14 items-center justify-between px-4 md:px-6">
				<div className="flex items-center">
					<Button
						variant="ghost"
						className="text-lg font-bold"
						onClick={() => scrollToSection("home")}
					>
						shaheem.dev
					</Button>
				</div>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center space-x-6">
					{navItems.slice(1).map(item => (
						<Button
							key={item.id}
							variant="ghost"
							size="sm"
							onClick={() => scrollToSection(item.id)}
							className="text-sm font-medium transition-colors hover:text-primary"
						>
							{item.label}
						</Button>
					))}
				</div>

				{/* Mobile Navigation */}
				<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
					<SheetTrigger asChild className="md:hidden">
						<Button variant="ghost" size="sm">
							<Menu className="h-5 w-5" />
						</Button>
					</SheetTrigger>
					<SheetContent side="right">
						<SheetHeader>
							<SheetTitle>Navigation</SheetTitle>
							<SheetDescription>Navigate to different sections</SheetDescription>
						</SheetHeader>
						<div className="grid gap-4 py-4">
							{navItems.map(item => (
								<Button
									key={item.id}
									variant="ghost"
									onClick={() => handleMobileNavClick(item.id)}
									className="justify-start"
								>
									{item.label}
								</Button>
							))}
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
};

export default Navigation;

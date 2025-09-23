"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CONTACT_INFO } from "./constants";

// Hero Section Component
const HeroSection = () => {
	return (
		<section id="home" className="py-20 px-4 md:px-6">
			<div className="container max-w-6xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
					{/* Image Section - First on mobile, last on desktop */}
					<div className="flex justify-center lg:justify-end lg:order-2">
						<Avatar className="w-48 h-48 md:w-64 md:h-64">
							<AvatarImage src="/image/sLogo.svg" alt="Shaheem" />
							<AvatarFallback>SP</AvatarFallback>
						</Avatar>
					</div>

					{/* Content Section - Second on mobile, first on desktop */}
					<div className="lg:col-span-2 lg:order-1 space-y-6">
						<div className="space-y-4">
							<h1 className="text-4xl md:text-6xl font-bold tracking-tight">Shaheem</h1>
							<p className="text-xl md:text-2xl text-muted-foreground">
								Product Engineer & Full-Stack Developer
							</p>
							<p className="text-lg text-muted-foreground max-w-2xl">
								Building scalable web applications and AI-powered tools with 2+ years of experience.
								Passionate about clean code, user-centered design, and technology for good.
							</p>
						</div>

						<div className="flex flex-wrap gap-2">
							{CONTACT_INFO.map((contact, index) => (
								<Button key={index} variant="outline" size="sm" asChild>
									{contact.link ? (
										<Link
											href={contact.link}
											target={contact.link.startsWith("http") ? "_blank" : undefined}
										>
											{contact.icon}
											<span className="ml-2">{contact.title}</span>
										</Link>
									) : (
										<span className="flex items-center">
											{contact.icon}
											<span className="ml-2">{contact.title}</span>
										</span>
									)}
								</Button>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;

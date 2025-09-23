"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CONTACT_INFO } from "./constants";

// Footer Component
const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t bg-background">
			<div className="container max-w-6xl mx-auto px-4 md:px-6 py-8">
				<div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
					<div className="text-center md:text-left">
						<p className="text-sm text-muted-foreground">
							© {currentYear} shaheem.dev. All rights reserved.
						</p>
					</div>

					<div className="flex items-center space-x-4">
						{CONTACT_INFO.filter(contact => contact.link).map((contact, index) => (
							<Button key={index} variant="ghost" size="sm" asChild>
								<Link
									href={contact.link!}
									target={contact.link!.startsWith("http") ? "_blank" : undefined}
									rel={contact.link!.startsWith("http") ? "noopener noreferrer" : undefined}
								>
									{contact.icon}
									<span className="sr-only">{contact.title}</span>
								</Link>
							</Button>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import emailjs from "@emailjs/browser";
import {
	Building,
	Calendar,
	ChevronUp,
	ExternalLink,
	Github,
	Linkedin,
	Mail,
	MapPin,
	Menu,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { topSkills } from "../about/constants";
import { projects, type Project } from "../projects/constants";
import { education, experiences, type Experience } from "../resume/constants";
import { testimonials } from "../testimonials/constants";

// Types
interface ContactInfo {
	icon: React.ReactNode;
	title: string;
	value: string;
	link: string | null;
}

// Constants
const CONTACT_INFO: ContactInfo[] = [
	{
		icon: <Mail className="h-4 w-4" />,
		title: "Email",
		value: "mail@shaheem.dev",
		link: "mailto:mail@shaheem.dev",
	},
	{
		icon: <Linkedin className="h-4 w-4" />,
		title: "LinkedIn",
		value: "linkedin.com/in/shaheem-pp",
		link: "https://www.linkedin.com/in/shaheem-pp/",
	},
	{
		icon: <Github className="h-4 w-4" />,
		title: "GitHub",
		value: "github.com/shaheem-pp",
		link: "https://github.com/shaheem-pp",
	},
	// {
	// 	icon: <MapPin className="h-4 w-4" />,
	// 	title: "Location",
	// 	value: "Toronto, ON, Canada",
	// 	link: null,
	// },
];

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

// Project Card Component
const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<Card className="overflow-hidden">
			<div className="flex flex-col md:flex-row h-full">
				{/* Image Section */}
				<div className="w-full md:w-1/3 lg:w-2/5 relative min-h-[200px] md:min-h-[200px]">
					<Image
						src={`/${project.image}`}
						alt={project.title}
						fill
						className="object-cover hover:scale-105 transition-transform duration-300"
					/>
				</div>

				{/* Content Section */}
				<div className="flex-1 flex flex-col">
					<CardHeader className="pb-3">
						<div className="flex items-start justify-between gap-4">
							<div className="space-y-2 flex-1">
								<CardTitle className="text-lg md:text-xl leading-tight">{project.title}</CardTitle>
								<Badge variant="secondary" className="w-fit">
									{project.category}
								</Badge>
							</div>
							{Object.keys(project.links).length > 0 && (
								<div className="flex gap-1 flex-shrink-0">
									{Object.entries(project.links).map(
										([icon, url], linkIndex) =>
											url && (
												<Button key={linkIndex} variant="ghost" size="sm" asChild>
													<Link href={url} target="_blank">
														<ExternalLink className="h-4 w-4" />
													</Link>
												</Button>
											)
									)}
								</div>
							)}
						</div>
					</CardHeader>

					<CardContent className="pt-0 flex-1 flex flex-col justify-between">
						<div className="space-y-3">
							<CardDescription className="text-sm leading-relaxed line-clamp-3">
								{project.shortContent}
							</CardDescription>

							<div className="flex flex-wrap gap-1.5">
								{project.stack.slice(0, 5).map((tech, techIndex) => (
									<Badge key={techIndex} variant="outline" className="text-xs px-2 py-0.5">
										{tech}
									</Badge>
								))}
								{project.stack.length > 5 && (
									<Badge variant="outline" className="text-xs px-2 py-0.5">
										+{project.stack.length - 5}
									</Badge>
								)}
							</div>
						</div>
					</CardContent>
				</div>
			</div>
		</Card>
	);
};

// Featured Projects Section Component
const FeaturedProjectsSection = () => {
	const featuredProjects = projects.filter(project => project.featured);

	return (
		<section id="projects" className="py-16 px-4 md:px-6">
			<div className="container max-w-6xl mx-auto">
				<div className="space-y-8">
					<div className="text-center space-y-4">
						<h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							A selection of projects showcasing my experience in full-stack development, AI
							integration, and scalable systems.
						</p>
					</div>

					<div className="space-y-6">
						{featuredProjects.slice(0, 4).map((project, index) => (
							<ProjectCard key={index} project={project} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

// Experience Card Component
const ExperienceCard = ({ experience }: { experience: Experience }) => {
	return (
		<Card>
			<CardHeader>
				<div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
					<div>
						<CardTitle className="text-xl">{experience.title}</CardTitle>
						<div className="flex items-center gap-2 text-muted-foreground">
							<Building className="h-4 w-4" />
							<span>{experience.company}</span>
							{experience.role && (
								<>
									<span>•</span>
									<span>{experience.role}</span>
								</>
							)}
						</div>
					</div>
					<div className="flex flex-col md:items-end text-sm text-muted-foreground">
						<div className="flex items-center gap-2">
							<Calendar className="h-4 w-4" />
							<span>{experience.duration}</span>
						</div>
						<div className="flex items-center gap-2">
							<MapPin className="h-4 w-4" />
							<span>{experience.location}</span>
						</div>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				{experience.responsibilities && (
					<ul className="space-y-2 text-muted-foreground">
						{experience.responsibilities.map((resp, respIndex) => (
							<li key={respIndex} className="flex items-start gap-2">
								<span className="text-primary mt-1.5">•</span>
								<span>{resp}</span>
							</li>
						))}
					</ul>
				)}
			</CardContent>
		</Card>
	);
};

// Work Experience Section Component
const WorkExperienceSection = () => {
	const [showAll, setShowAll] = useState(false);
	const visibleExperiences = showAll ? experiences : experiences.slice(0, 2);
	const hasMoreExperiences = experiences.length > 2;

	return (
		<section id="experience" className="py-16 px-4 md:px-6">
			<div className="container max-w-6xl mx-auto">
				<div className="space-y-8">
					<div className="text-center space-y-4">
						<h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
						<p className="text-muted-foreground">
							Professional journey building scalable applications and leading technical initiatives.
						</p>
					</div>

					<div className="space-y-6">
						{visibleExperiences.map((exp, index) => (
							<ExperienceCard key={index} experience={exp} />
						))}
					</div>

					{hasMoreExperiences && (
						<div className="text-center">
							<Button
								variant="outline"
								onClick={() => setShowAll(!showAll)}
								className="min-w-[140px]"
							>
								{showAll ? "Show Less" : `Show ${experiences.length - 2} More`}
							</Button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

// Education Section Component
const EducationSection = () => {
	return (
		<section id="education" className="py-16 px-4 md:px-6">
			<div className="container max-w-6xl mx-auto">
				<div className="space-y-8">
					<div className="text-center space-y-4">
						<h2 className="text-3xl md:text-4xl font-bold">Education</h2>
						<p className="text-muted-foreground">
							Academic foundation in computer science and software development.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{education.map((edu, index) => (
							<Dialog key={index}>
								<DialogTrigger asChild>
									<Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200">
										<CardHeader>
											<CardTitle className="text-xl">{edu.degree}</CardTitle>
											<CardDescription className="text-lg font-medium">{edu.field}</CardDescription>
											<div className="flex flex-col space-y-1 text-sm text-muted-foreground">
												<div className="flex items-center gap-2">
													<Building className="h-4 w-4" />
													<span>{edu.institution}</span>
												</div>
												<div className="flex items-center gap-2">
													<Calendar className="h-4 w-4" />
													<span>{edu.duration}</span>
												</div>
												<div className="flex items-center gap-2">
													<MapPin className="h-4 w-4" />
													<span>{edu.location}</span>
												</div>
											</div>
										</CardHeader>
									</Card>
								</DialogTrigger>
								<DialogContent className="max-w-2xl">
									<DialogHeader>
										<DialogTitle className="text-2xl">{edu.degree}</DialogTitle>
										<DialogDescription className="text-lg font-medium">
											{edu.field}
										</DialogDescription>
									</DialogHeader>
									<div className="space-y-4">
										<div className="flex flex-col space-y-2 text-sm text-muted-foreground">
											<div className="flex items-center gap-2">
												<Building className="h-4 w-4" />
												<span className="font-medium">Institution:</span>
												<span>{edu.institution}</span>
											</div>
											<div className="flex items-center gap-2">
												<Calendar className="h-4 w-4" />
												<span className="font-medium">Duration:</span>
												<span>{edu.duration}</span>
											</div>
											<div className="flex items-center gap-2">
												<MapPin className="h-4 w-4" />
												<span className="font-medium">Location:</span>
												<span>{edu.location}</span>
											</div>
										</div>
										<Separator />
										<div>
											<h4 className="font-semibold mb-3">Highlights</h4>
											<ul className="space-y-2">
												{edu.highlights.map((highlight, highlightIndex) => (
													<li key={highlightIndex} className="flex items-start gap-2 text-sm">
														<span className="text-primary mt-1.5">•</span>
														<span>{highlight}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								</DialogContent>
							</Dialog>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

// Skills Section Component
const SkillsSection = () => {
	return (
		<section id="skills" className="py-16 px-4 md:px-6">
			<div className="container max-w-6xl mx-auto">
				<div className="space-y-8">
					<div className="text-center space-y-4">
						<h2 className="text-3xl md:text-4xl font-bold">Top Skills</h2>
						<p className="text-muted-foreground">
							Core technologies and tools I use to build scalable applications.
						</p>
					</div>

					{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
					{/* {skills.map((skillCategory, index) => (
							<Card key={index}>
								<CardHeader>
									<CardTitle className="text-lg flex items-center gap-2">
										<Code className="h-5 w-5" />
										{skillCategory.category}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										{skillCategory.items.map((skill, skillIndex) => (
											<Badge
												key={skillIndex}
												variant={topSkills.includes(skill) ? "default" : "secondary"}
												className="text-xs"
											>
												{skill}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						))} */}
					{/* </div> */}
					<div className="flex flex-wrap justify-center gap-3 pt-6">
						{topSkills.map((skill, index) => (
							<Badge
								key={index}
								variant="secondary"
								className="transition-transform hover:scale-105 duration-200"
							>
								{skill}
							</Badge>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

// Contact Form Component
const ContactForm = () => {
	const form = useRef<HTMLFormElement>(null);
	const [sending, setSending] = useState(false);

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.current) return;

		setSending(true);

		emailjs.sendForm("service_w1fc4zl", "template_r4z66c8", form.current, "qos1lBDOpcRud0d5E").then(
			() => {
				alert("Message sent successfully!");
				form.current?.reset();
				setSending(false);
			},
			error => {
				alert("Failed to send message: " + error.text);
				setSending(false);
			}
		);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Send Me a Message</CardTitle>
				<CardDescription>
					Fill out the form below and I'll get back to you as soon as possible.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form ref={form} onSubmit={sendEmail} className="space-y-4">
					<div className="space-y-2">
						<label htmlFor="name" className="text-sm font-medium">
							Name <span className="text-red-500">*</span>
						</label>
						<input
							id="name"
							name="name"
							type="text"
							className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
							placeholder="Your name"
							required
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor="email" className="text-sm font-medium">
							Email <span className="text-red-500">*</span>
						</label>
						<input
							id="email"
							name="email"
							type="email"
							className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
							placeholder="your.email@example.com"
							required
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor="phone" className="text-sm font-medium">
							Phone number
						</label>
						<input
							id="phone"
							name="phone"
							type="text"
							className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
							placeholder="Phone number (include country code)"
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor="subject" className="text-sm font-medium">
							Subject <span className="text-red-500">*</span>
						</label>
						<input
							id="subject"
							name="subject"
							type="text"
							className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
							placeholder="Subject"
							required
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor="message" className="text-sm font-medium">
							Message <span className="text-red-500">*</span>
						</label>
						<textarea
							id="message"
							name="message"
							className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
							placeholder="Your message"
							required
						/>
					</div>

					<Button type="submit" className="w-full" disabled={sending}>
						{sending ? "Sending..." : "Send Message"}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
};

// Testimonials Section Component
const TestimonialsSection = () => {
	return (
		<section id="testimonials" className="py-12 md:py-16 px-4 md:px-6">
			<div className="container max-w-4xl mx-auto">
				<div className="space-y-6 md:space-y-8">
					<div className="text-center space-y-2 md:space-y-4">
						<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Testimonials</h2>
						<p className="text-sm md:text-base text-muted-foreground">
							What colleagues and clients say about working with me.
						</p>
					</div>

					<Carousel
						className="w-full"
						opts={{
							loop: true,
						}}
					>
						<CarouselContent>
							{testimonials.map((testimonial, index) => (
								<CarouselItem key={index}>
									<Card>
										<CardContent className="p-4 md:p-6">
											<div className="space-y-3 md:space-y-4">
												<blockquote className="text-sm md:text-lg leading-relaxed">
													"{testimonial.quote}"
												</blockquote>
												<div className="border-t pt-3 md:pt-4">
													<div className="font-semibold text-sm md:text-base">
														{testimonial.author}
													</div>
													<div className="text-xs md:text-sm text-muted-foreground">
														{testimonial.position} at {testimonial.company}
													</div>
												</div>
											</div>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious className="-left-8 sm:-left-12" />
						<CarouselNext className="-right-8 sm:-right-12" />
					</Carousel>
				</div>
			</div>
		</section>
	);
};

// Contact Section Component
const ContactSection = () => {
	return (
		<section id="contact" className="py-16 px-4 md:px-6">
			<div className="container max-w-5xl mx-auto">
				<div className="space-y-8">
					<div className="text-center space-y-4">
						<h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
						<p className="text-muted-foreground">
							Let's discuss how we can work together. I'm always open to discussing new projects,
							creative ideas, or opportunities to be part of your vision.
						</p>
					</div>

					<ContactForm />
				</div>
			</div>
		</section>
	);
};

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

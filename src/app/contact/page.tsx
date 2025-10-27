// src/app/contact/page.tsx

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function ContactPage() {
	const contactInfo = [
		{
			icon: <Mail className="h-5 w-5" />,
			title: "Email",
			value: "mail@shaheem.dev",
			link: "mailto:mail@shaheem.dev",
		},
		{
			icon: <Linkedin className="h-5 w-5" />,
			title: "LinkedIn",
			value: "linkedin.com/in/shaheem-pp",
			link: "https://www.linkedin.com/in/shaheem-pp/",
		},
		{
			icon: <Github className="h-5 w-5" />,
			title: "GitHub",
			value: "github.com/shaheem-pp",
			link: "https://github.com/shaheem-pp",
		},
		{
			icon: <MapPin className="h-5 w-5" />,
			title: "Location",
			value: "Toronto, ON, Canada",
			link: null,
		},
	];

	const form = useRef<HTMLFormElement>(null);
	const [sending, setSending] = useState(false);
	const [status, setStatus] = useState<"success" | "error" | null>(null);

	const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.current) return;

		setSending(true);
		setStatus(null);

		// Get form data
		const formData = new FormData(form.current);
		const data = {
			name: formData.get("name") as string,
			email: formData.get("email") as string,
			phone: formData.get("phone") as string,
			subject: formData.get("subject") as string,
			message: formData.get("message") as string,
		};

		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (response.ok) {
				setStatus("success");
				form.current.reset();
			} else {
				setStatus("error");
				console.error("Error sending email:", result.error);
			}
		} catch (error) {
			setStatus("error");
			console.error("Error sending email:", error);
		} finally {
			setSending(false);
		}
	};

	return (
		<>
			<section className="py-12 md:py-16 bg-muted/30">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Get In Touch
							</h1>
							<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Let's discuss how we can work together
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-12 md:py-16">
				<div className="container px-4 md:px-6">
					<div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-2">
						<div className="grid gap-6">
							<div>
								<h2 className="text-2xl font-bold tracking-tighter mb-4">Contact Information</h2>
								<p className="text-muted-foreground mb-8">
									Feel free to reach out to me through any of these channels. I'm always open to
									discussing new projects, creative ideas, or opportunities to be part of your
									vision.
								</p>
							</div>
							<div className="grid gap-4">
								{contactInfo.map((contact, index) => (
									<Card key={index}>
										<CardContent className="p-6 flex items-center gap-4">
											<div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
												{contact.icon}
											</div>
											<div>
												<div className="font-medium">{contact.title}</div>
												{contact.link ? (
													<Link
														href={contact.link}
														target={contact.link.startsWith("http") ? "_blank" : undefined}
														rel={
															contact.link.startsWith("http") ? "noopener noreferrer" : undefined
														}
														className="text-sm text-primary hover:underline"
													>
														{contact.value}
													</Link>
												) : (
													<div className="text-sm text-muted-foreground">{contact.value}</div>
												)}
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</div>

						<div>
							<Card>
								<CardHeader>
									<CardTitle>Send Me a Message</CardTitle>
									<CardDescription>
										Fill out the form below and I'll get back to you as soon as possible.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<form ref={form} onSubmit={sendEmail} className="grid gap-4">
										<div className="grid gap-2">
											<label htmlFor="name" className="text-sm font-medium leading-none">
												Name <span className="text-red-500">&#42;</span>
											</label>
											<input
												id="name"
												name="name"
												type="text"
												className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
												placeholder="Your name"
												required={true}
											/>
										</div>
										<div className="grid gap-2">
											<label htmlFor="email" className="text-sm font-medium leading-none">
												Email <span className="text-red-500">&#42;</span>
											</label>
											<input
												id="email"
												name="email"
												type="email"
												className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
												placeholder="your.email@example.com"
												required={true}
											/>
										</div>
										<div className="grid gap-2">
											<label htmlFor="phone" className="text-sm font-medium leading-none">
												Phone number
											</label>
											<input
												id="phone"
												name="phone"
												type="text"
												className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
												placeholder="Phone number (include country code)"
											/>
										</div>
										<div className="grid gap-2">
											<label htmlFor="subject" className="text-sm font-medium leading-none">
												Subject <span className="text-red-500">&#42;</span>
											</label>
											<input
												id="subject"
												name="subject"
												type="text"
												className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
												placeholder="Subject"
												required={true}
											/>
										</div>
										<div className="grid gap-2">
											<label htmlFor="message" className="text-sm font-medium leading-none">
												Message <span className="text-red-500">&#42;</span>
											</label>
											<textarea
												id="message"
												name="message"
												className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
												placeholder="Your message"
												required={true}
											/>
										</div>
										{status === "success" && (
											<div className="p-4 rounded-md bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800">
												<p className="text-sm text-green-800 dark:text-green-200">
													✓ Message sent successfully! I'll get back to you soon.
												</p>
											</div>
										)}
										{status === "error" && (
											<div className="p-4 rounded-md bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
												<p className="text-sm text-red-800 dark:text-red-200">
													✗ Failed to send message. Please try again or contact me directly at
													mail@shaheem.dev
												</p>
											</div>
										)}
										<Button type="submit" className="w-full" disabled={sending}>
											{sending ? "Sending..." : "Send Message"}
										</Button>
									</form>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

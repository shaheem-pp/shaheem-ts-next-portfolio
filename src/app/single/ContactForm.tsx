"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

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

export default ContactForm;

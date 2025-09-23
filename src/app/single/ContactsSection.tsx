"use client";

import ContactForm from "./ContactForm";

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

export default ContactSection;

import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

// Types
interface ContactInfo {
	icon: React.ReactNode;
	title: string;
	value: string;
	link: string | null;
}

// Constants
export const CONTACT_INFO: ContactInfo[] = [
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

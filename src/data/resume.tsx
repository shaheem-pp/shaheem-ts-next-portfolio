import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
	name: "Shaheem PP",
	initials: "SP",
	url: "https://shaheem.dev",
	location: "Toronto, ON",
	locationLink: "https://www.google.com/maps/place/toronto",
	description:
		"Product Engineer with 2 years of experience building real-world web applications and internal tools. I specialize in backend-first product development.",
	summary:
		"I'm a Product Engineer with 2 years of experience turning technical complexity into real-world impact - through scalable systems, human-centric tools, and fast-moving prototypes. I specialize in backend-first product development - designing APIs, integrating AI, and building systems that scale. Currently based in Toronto, pursuing a Post Graduate program in [Full Stack Software Development at Lambton College](/#education) while actively working on AI-integrated tools and internal platforms. I believe product engineers should build with purpose - focusing on fast feedback loops, clean abstractions, and delivering value, not just code.",
	avatarUrl: "image/me2.png",
	skills: [
		"Python",
		"JavaScript",
		"Swift",
		"Django",
		"FastAPI",
		"Flask",
		"React.js",
		"SwiftUI",
		"Tailwind CSS",
		"PostgreSQL",
		"MySQL",
		"MongoDB",
		"DigitalOcean",
		"Azure",
		"Git",
	],
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "/blog", icon: NotebookIcon, label: "Blog" },
	],
	contact: {
		email: "mail@shaheem.dev",
		tel: "",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/shaheem-pp",
				icon: Icons.github,
				navbar: true,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/shaheem-pp/",
				icon: Icons.linkedin,
				navbar: true,
			},
			X: {
				name: "X",
				url: "https://x.com/the_codeholic",
				icon: Icons.x,
				navbar: true,
			},
			email: {
				name: "Send Email",
				url: "mailto:mail@shaheem.dev",
				icon: Icons.email,
				navbar: true,
			},
		},
	},

	work: [
		{
			company: "Paayatech Inc.",
			href: "https://paayatech.com",
			badges: [],
			location: "Mississauga, ON, Canada",
			title: "Junior Developer",
			logoUrl: "/work/paayatech.svg",
			start: "Sept 2025",
			end: "Present",
			description:
				"Build features in React and Blazor and connect them to the .NET backend. Add or fix backend logic and database changes. Find and fix bugs, writing test codes, and learn from team code reviews.",
		},
		{
			company: "Unit Villa",
			badges: ["Remote"],
			href: "https://unitvilla.com",
			location: "Vancouver, BC, Canada",
			title: "Product Engineer",
			logoUrl: "/work/unitvilla.svg",
			start: "May 2025",
			end: "Present",
			description:
				"Building and maintaining full-stack applications across web and mobile platforms using React Native, Next.js, Node.js, and Python. Designing and implementing scalable backend systems, APIs, and database schemas with MongoDB for efficient data handling and business logic. Integrating AI-powered features to enhance product functionality and deliver intelligent user experiences.",
		},
		{
			company: "Agua India",
			href: "https://aguaindia.in",
			badges: [],
			location: "Kochi, Kerala, India",
			title: "Backend Developer",
			logoUrl: "/work/agua.svg",
			start: "Sept 2023",
			end: "Jan 2024",
			description:
				"Built and maintained the backend for an app serving 20,000+ users across 4 major cities. Optimized delivery workflows, reducing processing time by 20% and boosting customer satisfaction by 25%. Developed a real-time vendor dashboard, increasing sales productivity by 40%. Maintained 99% uptime by resolving critical issues in the Agua Web Panels. Collaborated with cross-functional teams to deliver scalable, user-focused systems.",
		},
		{
			company: "Cynbus",
			href: "https://cynbus.com",
			badges: [],
			location: "Kochi, Kerala, India",
			title: "Junior Backend Developer",
			logoUrl: "/work/cynbus.svg",
			start: "Aug 2022",
			end: "Aug 2023",
			description:
				"Built scalable backend systems and REST APIs using Django for logistics and e-commerce platforms. Deployed and maintained applications on AWS and DigitalOcean with CI/CD pipelines. Created responsive CMS tools using HTML, CSS, Bootstrap, jQuery, and AJAX. Improved user engagement across platforms serving 13,000+ users in Kerala.",
		},
		{
			company: "TinkerHub Foundation",
			href: "https://tinkerhub.org",
			badges: ["Internship"],
			location: "Remote, Kerala",
			title: "Campus Community Manager",
			logoUrl: "/work/tinkerhub.svg",
			start: "Jun 2021",
			end: "Dec 2021",
			description:
				"Onboarded 15+ campuses and managed 60+ student-led tech communities. Led initiatives that boosted student engagement by 40% and student-led projects by 25%. Mentored 100+ students on technology careers and peer learning practices.",
		},
	],
	education: [
		{
			school: "Lambton College",
			href: "https://www.lambtoncollege.ca",
			degree: "Post Graduate in Full Stack Software Development",
			logoUrl: "/education/lambton.svg",
			start: "2024",
			end: "Present",
		},
		{
			school: "Safi Institute of Advanced Study",
			href: "https://sias.edu.in",
			degree: "Bachelor's in Computer Application (BCA)",
			logoUrl: "/education/sias.svg",
			start: "2019",
			end: "2022",
		},
	],
	projects: [
		{
			title: "Grocify.ai",
			href: "",
			dates: "2025 - Present",
			active: true,
			description:
				"A WhatsApp-based AI assistant that helps users plan meals, manage groceries, and reduce food waste intelligently. Core modules for registration, meal planning, and Gemini-powered suggestions are live. 10+ users actively planning 21+ meals/week through a conversational flow.",
			technologies: ["Gemini AI", "WhatsApp Cloud API", "FastAPI", "MySQL"],
			links: [],
			image: "/Project/images/grocery/wa9.png",
			video: "",
		},
		{
			title: "Agua India App",
			href: "https://aguaindia.in",
			dates: "2023 - 2024",
			active: false,
			description:
				"Built and maintained backend for premium water delivery app serving 20,000+ users across 4 major cities. Optimized delivery workflows reducing processing time by 20% and boosting customer satisfaction by 25%. Developed real-time vendor dashboard increasing sales productivity by 40%.",
			technologies: [
				"PostGIS",
				"Google Maps Matrix API",
				"Django",
				"Python",
				"PostgreSQL",
				"HTML",
				"CSS",
				"JavaScript",
			],
			links: [
				{
					type: "iOS",
					href: "https://apps.apple.com/in/app/agua-india/id1503679371",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Android",
					href: "https://play.google.com/store/apps/details?id=appu.agua",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/Project/images/agua/aguaGPTgen.png",
			video: "",
		},
		{
			title: "Carro App",
			href: "#",
			dates: "2022 - 2023",
			active: false,
			description:
				"Comprehensive car care app offering services like car wash booking, used car valuation, and service comparison. Built with Django backend and PostGIS for location-based services.",
			technologies: ["PostGIS", "Django", "Python", "HTML", "CSS", "JavaScript", "Bootstrap"],
			links: [
				{
					type: "iOS",
					href: "https://apps.apple.com/in/app/carro-your-car-app/id6475821919",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Android",
					href: "https://play.google.com/store/apps/details?id=com.findandpark.app",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "/Project/images/Cynbus/carro2.png",
			video: "",
		},
		{
			title: "Web Builder",
			href: "#",
			dates: "2022 - 2023",
			active: false,
			description:
				"A Shopify alternative for Kerala businesses, offering custom domains, themes, and e-commerce management. Empowers small and medium-sized businesses to launch online stores with just a few clicks.",
			technologies: ["Django", "Python", "PostgreSQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
			links: [],
			image: "/Project/images/web%20builder/build3.png",
			video: "",
		},
		{
			title: "Food For All",
			href: "https://github.com/AkshayBenny/food-surplus-detection",
			dates: "Hackathon 2023",
			active: false,
			description:
				"Platform connecting food donors with NGOs and volunteers to minimize food waste. Built during Fosshack 3, uses PostGIS for location-based matching within 5-10 km radius.",
			technologies: ["Django", "Next.js", "REST API", "PostGIS"],
			links: [
				{
					type: "Source",
					href: "https://github.com/AkshayBenny/food-surplus-detection",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/Project/images/foodforall/ffa.png",
			video: "",
		},
		{
			title: "Routine Pro",
			href: "https://github.com/shaheem-pp/Routine-Pro-swiftui",
			dates: "2024 - Present",
			active: true,
			description:
				"SwiftUI habit and todo tracker with streak tracking, flexible schedules, and profile insights. Built using SwiftData for local storage with iCloud sync planned for future releases.",
			technologies: ["Swift", "SwiftUI", "SwiftData"],
			links: [
				{
					type: "Source",
					href: "https://github.com/shaheem-pp/Routine-Pro-swiftui",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/Project/images/routine-pro/cover.png",
			video: "",
		},
	],
	// hackathons: [
	// 	{
	// 		title: "Fosshack 3 - Food For All",
	// 		dates: "2023",
	// 		location: "Kerala, India",
	// 		description:
	// 			"Built Food For All platform connecting food donors with NGOs and volunteers to minimize food waste. Uses PostGIS for location-based matching within 5-10 km radius.",
	// 		image: "/Project/images/foodforall/ffa.png",
	// 		links: [
	// 			{
	// 				title: "Source",
	// 				icon: <Icons.github className="h-4 w-4" />,
	// 				href: "https://github.com/AkshayBenny/food-surplus-detection",
	// 			},
	// 		],
	// 	},
	// ],
} as const;

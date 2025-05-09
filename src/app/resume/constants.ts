export type Achievement = {
    title: string;
    role?: string;
    organization?: string;
    description: string;
    link?: string;
    image: string;
};

export type Experience = {
    title: string;
    company: string;
    duration: string;
    location: string;
    role?: string;
    responsibilities?: string[];
};


export const experiences: Experience[] = [
    {
        title: "Product Engineer",
        company: "Unit Villa",
        duration: "May 2025 - Present",
        location: "Vancouver, British Columbia, Canada",
        role: "Remote",
        responsibilities: [
            "Building and maintaining full-stack applications across web and mobile platforms using React Native, Next.js, Node.js, and Python.",
            "Designing and implementing scalable backend systems, APIs, and database schemas with MongoDB for efficient data handling and business logic.",
            "Integrating AI-powered features to enhance product functionality and deliver intelligent user experiences.",
        ],
    },
    {
        title: "Backend Developer",
        company: "Agua India",
        duration: "Sept 2023 - Jan 2024",
        location: "Kochi, Kerala, India",
        role: "Full-time",
        responsibilities: [
            "Built and maintained the backend for an app serving 20,000+ users across 4 major cities.",
            "Optimized delivery workflows, reducing processing time by 20% and boosting customer satisfaction by 25%.",
            "Developed a real-time vendor dashboard, increasing sales productivity by 40%.",
            "Maintained 99% uptime by resolving critical issues in the Agua Web Panels.",
            "Collaborated with cross-functional teams to deliver scalable, user-focused systems."
        ],
    },
    {
        title: "Junior Backend Developer",
        company: "Cynbus",
        duration: "Aug 2022 - Aug 2023",
        location: "Kochi, Kerala, India",
        role: "Full-time",
        responsibilities: [
            "Built scalable backend systems and REST APIs using Django for logistics and e-commerce platforms.",
            "Deployed and maintained applications on AWS and DigitalOcean with CI/CD pipelines.",
            "Created responsive CMS tools using HTML, CSS, Bootstrap, jQuery, and AJAX.",
            "Improved user engagement across platforms serving 13,000+ users in Kerala."
        ],
    },
    {
        title: "Campus Community Manager",
        company: "TinkerHub Foundation",
        duration: "Jun 2021 - Dec 2021",
        role: "Internship",
        location: "Remote, Kerala",
        responsibilities: [
            "Onboarded 15+ campuses and managed 60+ student-led tech communities.",
            "Led initiatives that boosted student engagement by 40% and student-led projects by 25%.",
            "Mentored 100+ students on technology careers and peer learning practices."
        ],
    },
];

export const education = [
    {
        degree: "Post Graduation",
        field: "Full Stack Software Development",
        institution: "Lambton College",
        duration: "May 2024 – Present",
        location: "Toronto, ON",
        highlights: [
            "GPA: 3.35",
            "Focused on Django, React, REST APIs, and cloud infrastructure.",
            "Built scalable applications with a focus on system architecture and code quality.",
            "Student Council Member: led non-academic workshops and student engagement activities."
        ],
    },
    {
        degree: "Bachelor's",
        field: "Computer Application (BCA)",
        institution: "Safi Institute of Advanced Study",
        duration: "June 2019 – April 2022",
        location: "Kerala, India",
        highlights: [
            "Strong foundation in DSA, Networking, Web Development, and Machine Learning.",
            "Proficient in C, Python, and Java.",
            "Co-founded TinkerHub SIAS and TechSIAS to promote tech in non-CS streams.",
            "Active roles in IEDC, NSS, Pygrammers, and Microsoft Learn Student Ambassadors."
        ],
    },
];

export const skills = [
    {
        category: "Backend Development",
        items: [
            "Node.js",
            "Express.js",
            "Django",
            "Python",
            "REST APIs",
            "Microservices",
            "System Design",
            "JWT Authentication"
        ]
    },
    {
        category: "Frontend & Mobile Development",
        items: [
            "React.js",
            "React Native",
            "Next.js",
            "JavaScript",
            "HTML/CSS",
            "Tailwind CSS",
            "Bootstrap",
            "Swift",
            "SwiftUI",
            "UIKit"
        ]
    },
    {
        category: "Cloud & DevOps",
        items: [
            "AWS (EC2, S3, RDS)",
            "DigitalOcean",
            "Vercel",
            "Docker",
            "CI/CD",
            "Git",
            "GitHub"
        ]
    },
    {
        category: "Databases & GIS",
        items: [
            "MongoDB",
            "PostgreSQL",
            "PostGIS",
            "MySQL",
            "SQLite"
        ]
    },
    {
        category: "AI & Automation",
        items: [
            "OpenAI API",
            "N8N",
            "Prompt Engineering",
            "LangChain (Beginner)",
            "Agent-based Systems (Exploring)"
        ]
    },
    {
        category: "Tools & Collaboration",
        items: [
            "Postman",
            "Figma",
            "Notion",
            "Chrome DevTools",
            "Slack",
            "Trello",
            "Discord"
        ]
    }
];

export const achievements: Achievement[] = [
    {
        title: "Pygrammers",
        role: "Social Media Manager",
        description: `Led digital outreach for a 5,000+ member Python community. Promoted events through strategic campaigns and content creation, significantly growing engagement and reach.`,
        link: "https://pygrammers.org",
        image: "image/heropylogo.png",
    },
    {
        title: "Microsoft Learn Student Ambassador",
        organization: "Microsoft",
        description: `Hosted workshops, hackathons, and tech events to empower student developers. Helped bridge academia and industry by supporting skill development and peer learning.`,
        link: "https://studentambassadors.microsoft.com/",
        image: "https://ext.same-assets.com/3659750609/735369775.png",
    },
    {
        title: "TinkerHub SIAS",
        role: "Founder",
        description: `Founded the campus chapter to introduce students to peer learning, open-source culture, and industry tools. Mentored 100+ students and hosted multiple hands-on events and tech talks.`,
        link: "https://tinkerhub.org/",
        image: "https://ext.same-assets.com/3659750609/1752658581.png",
    },
    {
        title: "TechSIAS",
        role: "Co-Founder",
        description: `Built a student-led tech community for non-CS majors. Led bootcamps and hackathons that encouraged students to explore and apply technology in their fields.`,
        link: "https://sias.edu.in/stdzone/techsias.html",
        image: "https://ext.same-assets.com/3659750609/3095196975.jpeg",
    },
];
// src/app/resume/constants.ts

export type Achievement = {
    title: string;
    role?: string;
    organization?: string;
    description: string;
    link?: string;
    image: string;
};

export const experiences = [
    {
        title: "Backend Developer",
        company: "Agua India",
        duration: "Sept 2023 - Jan 2024",
        location: "Kochi, Kerala, India",
        role: "Full-time",
        responsibilities: [
            "Built and maintained the backend for an app serving 20,000+ users across Kochi, Chennai, Hyderabad, and Bangalore.",
            "Optimized order processing and delivery workflows, reducing delivery time by 20% and increasing user satisfaction by 25%.",
            "Developed a vendor dashboard with real-time analytics, improving sales productivity by 40%.",
            "Ensured 99% uptime by promptly resolving issues in Agua Web Panels.",
            "Worked closely with cross-functional teams to deliver high-quality, user-focused applications."
        ],
    },
    {
        title: "Junior Backend Developer",
        company: "Cynbus",
        duration: "Aug 2023 - Aug 2024",
        location: "Kochi, Kerala, India",
        role: "Full-time",
        responsibilities: [
            "Developed Django-based backend systems and REST APIs for commercial products.",
            "Deployed apps on AWS & DigitalOcean, ensuring scalability and performance.",
            "Built CMS solutions using HTML, CSS, Bootstrap, jQuery, and AJAX to enhance user experience.",
            "Contributed to products impacting 13,000+ users across Kerala, improving engagement."
        ],
    },
    {
        title: "Campus Community Manager",
        company: "Tinkerub Foundation",
        duration: "Jun 2021 - Dec 2021",
        role: "Internship",
        location: "Remote, Kerala",
        responsibilities: [
            "Onboarded 15+ campuses and managed 60+ tech communities across Kerala.",
            "Organized events that increased student engagement by 40% and led to 25% more student-led initiatives.",
            "Mentored 100+ students, helping them build strong campus tech communities."
        ],
    },
];

export const education = [
    {
        degree: "Post Graduation",
        field: "Full Stack Software Development",
        institution: "Lambton College",
        duration: "2024 - Present",
        location: "Toronto, ON",
        highlights: [
            "GPA: 3.35",
            "Enhancing expertise in full-stack web development, specializing in Django, React, REST APIs, and Cloud Computing.",
            "Building scalable web applications and exploring software architecture best practices.",
            "Serving as a Student Council Member — collaborating with peers to organize non-academic workshops, events, and activities, while acting as a liaison between students and college management."
        ],
    },
    {
        degree: "Bachelor's",
        field: "Computer Application (BCA)",
        institution: "Safi Institute of Advanced Study",
        duration: "2019 - 2022",
        location: "Kerala, India",
        highlights: [
            "Developed a solid foundation in Data Structures, Algorithms, Networking, Web Development, and Machine Learning.",
            "Proficiency in C, Python, and Java.",
            "Co-founded TinkerHub SIAS and TechSIAS, bridging academia and industry.",
            "Contributed to the Innovation Entrepreneurship Development Centre (IEDC) and volunteered with NSS.",
            "Organized tech events as a Microsoft Learn Student Ambassador and managed community outreach for Pygrammers."
        ],
    },
];

export const skills = [
    {
        category: "Backend Development",
        items: ["Django", "REST APIs", "Python", "System Design", "JWT Authentication"]
    },
    {
        category: "Frontend & UI Development",
        items: ["React", "JavaScript", "HTML/CSS", "Bootstrap", "Tailwind CSS", "AJAX", "jQuery", "Next.js"]
    },
    {
        category: "Mobile Development",
        items: ["Swift", "SwiftUI", "UIKit", "Xcode"]
    },
    {
        category: "Cloud & DevOps",
        items: ["AWS (EC2, S3, RDS)", "DigitalOcean", "Docker", "CI/CD", "Git", "GitHub", "Vercel"]
    },
    {
        category: "Database & GIS",
        items: ["PostgreSQL", "PostGIS", "MySQL", "SQLite"]
    },
    {
        category: "Developer Tools & Collaboration",
        items: ["Postman", "Chrome DevTools", "Figma", "Notion"]
    }
];

export const achievements: Achievement[] = [
    {
        title: "Pygrammers",
        role: "Social Media Manager",
        description: `Pygrammers is a community of passionate Python enthusiasts dedicated to connecting students and developers who are learning or working with Python. We organize a range of online and offline events—including workshops, hackathons, and community meetups—to foster skill development and collaboration.

As a Social Media Manager and Marketing Lead, I focused on expanding our digital presence and promoting events to a wider audience through strategic online campaigns, content creation, and platform engagement.`,
        link: "https://pygrammers.org",
        image: "image/heropylogo.png",
    },
    {
        title: "Microsoft Learn Student Ambassador",
        organization: "Microsoft",
        description: `Microsoft Learn Student Ambassadors is a global community of student leaders passionate about technology and empowering their peers. As an ambassador, I organized tech events, workshops, and hackathons to help students develop their technical skills and connect with industry professionals.

I actively contributed to my campus community by hosting hands-on learning sessions and knowledge-sharing meetups, supporting fellow students who were eager to explore and grow in the tech ecosystem.`,
        link: "https://studentambassadors.microsoft.com/",
        image: "https://ext.same-assets.com/3659750609/735369775.png",
    },
    {
        title: "TinkerHub SIAS",
        role: "Founder",
        description: `TinkerHub SIAS is the official campus chapter of the TinkerHub Foundation at the Safi Institute of Advanced Study. As Founder, I established this community to introduce non-engineering students to the world of technology through peer-to-peer learning, mentorship, and industry-focused events.

Our goal was to bridge the gap between academics and the tech industry by fostering a self-sustaining learning ecosystem. I mentored over 100+ students in areas such as choosing career paths, learning emerging technologies, and building leadership skills. Under my leadership, we organized workshops, tech talks, and in-person sessions that significantly boosted campus tech engagement.`,
        link: "https://tinkerhub.org/",
        image: "https://ext.same-assets.com/3659750609/1752658581.png",
    },
    {
        title: "TechSIAS",
        role: "Co-Founder",
        description: `TechSIAS is a student-led tech community at the Safi Institute of Advanced Study (SIAS), dedicated to bridging the gap between academics and industry. The initiative empowers students—especially those from non-technical backgrounds—to explore the world of technology beyond the curriculum through peer-to-peer learning, workshops, and hands-on experiences.

As a Co-Founder, I established the community to introduce students to digital tools and technologies, helping them apply tech in their respective fields. I led cross-functional teams and organized impactful events such as 7-Day Bootcamps and Mini Hackathons, fostering a vibrant tech learning environment driven by collaboration and innovation.`,
        link: "https://sias.edu.in/stdzone/techsias.html",
        image: "https://ext.same-assets.com/3659750609/3095196975.jpeg",
    },
];
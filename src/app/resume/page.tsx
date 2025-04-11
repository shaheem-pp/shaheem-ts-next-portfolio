import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Download, ExternalLink} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Resume | Shaheem PP",
    description: "View my professional resume including experience, education, and skills.",
};

export default function ResumePage() {
    const experiences = [
        {
            title: "Backend Developer",
            company: "Agua India",
            duration: "Sept 2023 - Jan 2024",
            location: "Kochi, Kerala, India",
            responsibilities: [
                "Built and maintained the backend for an app serving 20,000+ users across Kochi, Chennai, Hyderabad, and Bangalore.",
                "Optimized order processing and delivery workflows, reducing delivery time by 20% and increasing user satisfaction by 25%.",
                "Developed a vendor dashboard with real-time analytics, improving sales productivity by 40%.",
                "Ensured 99% uptime by promptly resolving issues in Agua Web Panels.",
                "Worked closely with cross-functional teams to deliver high-quality, user-focused applications.",
            ],
        },
        {
            title: "Junior Backend Developer",
            company: "Cynbus",
            duration: "Aug 2023 - Aug 2024",
            location: "Kochi, Kerala, India",
            responsibilities: [
                "Developed Django-based backend systems and REST APIs for commercial products.",
                "Deployed apps on AWS & DigitalOcean, ensuring scalability and performance.",
                "Built CMS solutions using HTML, CSS, Bootstrap, jQuery, and AJAX to enhance user experience.",
                "Contributed to products impacting 13,000+ users across Kerala, improving engagement.",
            ],
        },
        {
            title: "Campus Community Manager",
            company: "Tinkerub Foundation",
            duration: "Jun 2021 - Dec 2021",
            location: "Remote, Kerala",
            responsibilities: [
                "Onboarded 15+ campuses and managed 60+ tech communities across Kerala.",
                "Organized events that increased student engagement by 40% and led to 25% more student-led initiatives.",
                "Mentored 100+ students, helping them build strong campus tech communities.",
            ],
        },
    ];

    const education = [
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
                "Organized tech events as a Microsoft Learn Student Ambassador and managed community outreach for Pygrammers.",
            ],
        },
    ];

    const skills = [
        {
            category: "Backend Development",
            items: ["Django", "REST APIs", "Python", "Server-Side Logic"],
        },
        {
            category: "Frontend Development",
            items: ["React.js", "HTML/CSS", "Bootstrap", "JavaScript"],
        },
        {
            category: "Database Management",
            items: ["PostgreSQL", "PostGIS", "SQL Optimization"],
        },
        {
            category: "DevOps & Cloud Infrastructure",
            items: ["AWS", "DigitalOcean", "Docker", "CI/CD"],
        },
        {
            category: "Leadership & Mentorship",
            items: ["Leadership", "Mentoring", "Team Collaboration"],
        },
        {
            category: "Problem-Solving & Communication",
            items: ["Adaptability", "Time Management", "Problem-Solving"],
        },
    ];

    const achievements = [
        {
            title: "Microsoft Learn Student Ambassador",
            organization: "Microsoft",
            description: "Organized tech events, workshops, and hackathons to help students build their tech skills and connect with industry professionals.",
            link: "https://studentambassadors.microsoft.com/",
            image: "https://ext.same-assets.com/3659750609/735369775.png",
        },
        {
            title: "TinkerHub SIAS",
            role: "Founder",
            description: "Created a student community at our campus, affiliated with the TinkerHub Foundation. Our goal was to bring more tech opportunities to a non-engineering college through peer-to-peer learning and networking events.",
            link: "https://tinkerhub.org/",
            image: "https://ext.same-assets.com/3659750609/1752658581.png",
        },
        {
            title: "TechSIAS",
            role: "Co-Founder",
            description: "Established a tech community at Safi College focused on introducing non-technical students to digital tools and technologies, helping them excel in their fields through tech integration.",
            link: "https://sias.edu.in",
            image: "https://ext.same-assets.com/3659750609/3095196975.jpeg",
        },
    ];

    return (
        <>
            <section className="py-12 md:py-16 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Resume
                            </h1>
                            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                My professional experience, education, and skills
                            </p>
                        </div>
                        <div className="mx-auto w-full max-w-sm">
                            <Button className="w-full" size="lg">
                                <Download className="mr-2 h-4 w-4"/> Download Resume
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto max-w-4xl grid gap-10">
                        {/* Experience Section */}
                        <div>
                            <h2 className="text-2xl font-bold tracking-tighter mb-6">
                                Experience
                            </h2>
                            <div className="grid gap-6">
                                {experiences.map((exp, index) => (
                                    <Card key={index}>
                                        <CardHeader>
                                            <div
                                                className="flex flex-col md:flex-row md:items-center md:justify-between">
                                                <CardTitle>{exp.title}</CardTitle>
                                                <span className="text-sm text-muted-foreground">
                          {exp.duration}
                        </span>
                                            </div>
                                            <div className="text-base text-primary font-medium">
                                                {exp.company}
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {exp.location}
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="list-disc pl-5 space-y-2">
                                                {exp.responsibilities.map((item, itemIndex) => (
                                                    <li key={itemIndex}>{item}</li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <Separator/>

                        {/* Education Section */}
                        <div>
                            <h2 className="text-2xl font-bold tracking-tighter mb-6">
                                Education
                            </h2>
                            <div className="grid gap-6">
                                {education.map((edu, index) => (
                                    <Card key={index}>
                                        <CardHeader>
                                            <div
                                                className="flex flex-col md:flex-row md:items-center md:justify-between">
                                                <CardTitle>
                                                    {edu.degree} in {edu.field}
                                                </CardTitle>
                                                <span className="text-sm text-muted-foreground">
                          {edu.duration}
                        </span>
                                            </div>
                                            <div className="text-base text-primary font-medium">
                                                {edu.institution}
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {edu.location}
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="list-disc pl-5 space-y-2">
                                                {edu.highlights.map((item, itemIndex) => (
                                                    <li key={itemIndex}>{item}</li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <Separator/>

                        {/* Skills Section */}
                        <div>
                            <h2 className="text-2xl font-bold tracking-tighter mb-6">
                                Skills
                            </h2>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {skills.map((skill, index) => (
                                    <Card key={index}>
                                        <CardHeader>
                                            <CardTitle className="text-lg">{skill.category}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-wrap gap-2">
                                                {skill.items.map((item, itemIndex) => (
                                                    <Badge key={itemIndex} variant="secondary">
                                                        {item}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <Separator/>

                        {/* Achievements Section */}
                        <div>
                            <h2 className="text-2xl font-bold tracking-tighter mb-6">
                                Achievements
                            </h2>
                            <div className="grid gap-6 md:grid-cols-3">
                                {achievements.map((achievement, index) => (
                                    <Card key={index} className="overflow-hidden">
                                        <div
                                            className="aspect-video w-full overflow-hidden bg-muted flex items-center justify-center p-4">
                                            <img
                                                src={achievement.image}
                                                alt={achievement.title}
                                                className="object-contain h-full max-h-[100px]"
                                            />
                                        </div>
                                        <CardHeader>
                                            <CardTitle className="text-lg">{achievement.title}</CardTitle>
                                            {achievement.role && (
                                                <div className="text-sm font-medium text-primary">
                                                    {achievement.role}
                                                </div>
                                            )}
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground mb-4">
                                                {achievement.description}
                                            </p>
                                            {achievement.link && (
                                                <Link
                                                    href={achievement.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-xs text-primary hover:underline"
                                                >
                                                    Learn more <ExternalLink className="ml-1 h-3 w-3"/>
                                                </Link>
                                            )}
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

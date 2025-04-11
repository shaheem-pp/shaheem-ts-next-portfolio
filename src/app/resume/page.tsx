"use client";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Download, ExternalLink} from "lucide-react";
import Link from "next/link";
import {useState} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";


type Achievement = {
    title: string;
    role?: string;
    organization?: string;
    description: string;
    link?: string;
    image: string;
};

export default function ResumePage() {

    const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

    const experiences = [
        {
            title: "Backend Developer",
            company: "Agua India",
            duration: "Sept 2023 - Jan 2024",
            location: "Kochi, Kerala, India",
            role:"Full-time",
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
            role:"Full-time",
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
            role:"Internship",
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
                "Serving as a Student Council Member — collaborating with peers to organize non-academic workshops, events, and activities, while acting as a liaison between students and college management.",
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
            category: "Database Management",
            items: ["PostgreSQL", "PostGIS", "SQL Optimization"],
        },
        {
            category: "DevOps & Cloud Infrastructure",
            items: ["AWS", "DigitalOcean", "Docker", "CI/CD"],
        },
        {
            category: "Frontend Development",
            items: ["React.js", "HTML/CSS", "Bootstrap", "JavaScript"],
        },
        {
            category: "Teamwork & Leadership",
            items: ["Leadership", "Mentoring", "Team Collaboration"],
        },
        {
            category: "Core Competencies",
            items: ["Problem-Solving", "Adaptability", "Time Management"],
        },
    ];

    const achievements: Achievement[] = [
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
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                <Button className="w-full" size="lg">
                                    <Download className="mr-2 h-4 w-4"/> Download Resume
                                </Button>
                            </a>
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
                                                <CardTitle>{exp.title} <span className="text-sm text-muted-foreground font-normal">({exp.role})</span></CardTitle>
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
                            <h2 className="text-2xl font-bold tracking-tighter mb-6">Achievements</h2>
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {achievements.map((achievement, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedAchievement(achievement)}
                                        className="text-left"
                                    >
                                        <Card
                                            className="overflow-hidden hover:shadow-lg transition-shadow duration-200 h-full">
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
                                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                                    {achievement.description}
                                                </p>
                                                <span
                                                    className="text-xs text-primary hover:underline inline-flex items-center">
                            Read more <ExternalLink className="ml-1 h-3 w-3"/>
                        </span>
                                            </CardContent>
                                        </Card>
                                    </button>
                                ))}
                            </div>

                            {/* Modal */}
                            {selectedAchievement && (
                                <Dialog open={!!selectedAchievement} onOpenChange={() => setSelectedAchievement(null)}>
                                    <DialogContent className="max-w-md">
                                        <div
                                            className="aspect-video w-full overflow-hidden bg-muted flex items-center justify-center p-4 rounded-md mb-4">
                                            <img
                                                src={selectedAchievement.image}
                                                alt={selectedAchievement.title}
                                                className="object-contain h-full max-h-[150px]"
                                            />
                                        </div>
                                        <DialogHeader>
                                            <DialogTitle>{selectedAchievement.title}</DialogTitle>
                                        </DialogHeader>
                                        {selectedAchievement.role && (
                                            <div className="text-sm text-primary font-medium mb-1">
                                                {selectedAchievement.role}
                                            </div>
                                        )}
                                        <p className="text-sm text-muted-foreground whitespace-pre-line mb-4">
                                            {selectedAchievement.description}
                                        </p>
                                        {selectedAchievement.link && (
                                            <Link
                                                href={selectedAchievement.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-primary hover:underline inline-flex items-center"
                                            >
                                                Visit Website <ExternalLink className="ml-1 h-4 w-4"/>
                                            </Link>
                                        )}
                                    </DialogContent>
                                </Dialog>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ArrowRight, CheckCircle2} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "About | Shaheem PP",
    description: "Learn more about Shaheem PP, a backend-focused full-stack developer specializing in Django, React, and cloud technologies.",
};

export default function AboutPage() {
    const highlights = [
        "Backend-focused full-stack developer with 1.6+ years of experience",
        "Specializing in Django and building high-performance web applications",
        "Passionate about creating scalable and efficient solutions",
        "Continuously learning and expanding skills in modern web technologies",
        "Experience with both commercial and academic projects",
    ];

    const values = [
        {
            title: "Clean Code",
            description: "I believe in writing clean, maintainable code that follows best practices and is easy to understand."
        },
        {
            title: "User-Focused",
            description: "I develop applications with the end user in mind, ensuring a seamless and intuitive experience."
        },
        {
            title: "Continuous Learning",
            description: "I'm constantly expanding my knowledge and skills to stay up-to-date with the latest technologies."
        },
        {
            title: "Problem Solving",
            description: "I enjoy tackling complex problems and finding efficient solutions."
        },
        {
            title: "Collaboration",
            description: "I value teamwork and believe that the best results come from effective collaboration."
        },
        {
            title: "Adaptability",
            description: "I'm quick to adapt to new technologies, environments, and challenges."
        },
    ];

    const skills = [
        {name: "Django", level: "Advanced"},
        {name: "Python", level: "Advanced"},
        {name: "REST APIs", level: "Advanced"},
        {name: "JavaScript", level: "Intermediate"},
        {name: "React", level: "Intermediate"},
        {name: "PostgreSQL", level: "Advanced"},
        {name: "AWS", level: "Intermediate"},
        {name: "Docker", level: "Intermediate"},
        {name: "Git", level: "Advanced"},
        {name: "HTML/CSS", level: "Intermediate"},
        {name: "Bootstrap", level: "Intermediate"},
        {name: "CI/CD", level: "Intermediate"},
    ];

    return (
        <>
            <section className="py-12 md:py-20 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-8 xl:grid-cols-[1fr_500px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    About Me
                                </h1>
                                <p className="text-muted-foreground md:text-xl">
                                    Hi, I'm Shaheem PP - a passionate developer building web solutions that make an
                                    impact.
                                </p>
                            </div>
                            <div className="space-y-5 text-muted-foreground">
                                <p>
                                    I specialize in Django and enjoy developing secure, high-performance systems that
                                    solve real-world problems.
                                    My journey in tech began with a fascination for building things that work
                                    efficiently and help people.
                                </p>
                                <p>
                                    Currently, I'm pursuing a Post Graduate program in Full Stack Software Development
                                    in Toronto,
                                    constantly learning and refining my skills in backend architecture, API development,
                                    and cloud deployment.
                                </p>
                                <p>
                                    I love optimizing workflows, designing intuitive dashboards, and collaborating with
                                    teams to build
                                    solutions that make an impact. I'm looking for opportunities where I can apply my
                                    expertise,
                                    tackle new challenges, and grow alongside a great team.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 pt-4">
                                <h3 className="text-xl font-bold">My Highlights</h3>
                                <ul className="grid gap-2">
                                    {highlights.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5"/>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mx-auto flex w-full max-w-sm items-center justify-center lg:max-w-none">
                            <div className="space-y-4 w-full">
                                <div
                                    className="aspect-square overflow-hidden rounded-xl bg-gradient-to-b from-purple-600/20 to-pink-600/20 p-2">
                                    <img
                                        src="https://ext.same-assets.com/3659750609/2569368412.png"
                                        alt="Shaheem PP"
                                        width={500}
                                        height={500}
                                        className="aspect-square rounded-lg object-cover"
                                    />
                                </div>
                                <div className="flex justify-center gap-4">
                                    <Link
                                        href="/resume"
                                        className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        Resume
                                    </Link>
                                    <Link
                                        href="/projects"
                                        className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        Projects
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                My Values
                            </h2>
                            <p className="text-muted-foreground md:text-xl">
                                These principles guide my work and approach to development
                            </p>
                        </div>
                    </div>
                    <div
                        className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-8 md:pt-12">
                        {values.map((value, index) => (
                            <Card key={index} className="flex flex-col">
                                <CardHeader>
                                    <CardTitle>{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                Technical Skills
                            </h2>
                            <p className="text-muted-foreground md:text-xl">
                                My technical expertise and proficiency levels
                            </p>
                        </div>
                    </div>
                    <div
                        className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 pt-8 md:pt-12">
                        {skills.map((skill, index) => (
                            <Card key={index} className="flex flex-col items-center justify-center p-4 text-center">
                                <CardContent className="p-2">
                                    <h3 className="font-bold">{skill.name}</h3>
                                    <Badge
                                        variant={skill.level === "Advanced" ? "default" : "secondary"} className="mt-2">
                                        {skill.level}
                                    </Badge>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2 max-w-3xl">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                Let's Connect
                            </h2>
                            <p className="text-muted-foreground md:text-xl">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part
                                of your vision.
                            </p>
                        </div>
                        <div className="mx-auto w-full max-w-sm space-y-2">
                            <Link href="/contact">
                                <Button className="w-full" size="lg">
                                    Get in Touch <ArrowRight className="ml-2 h-4 w-4"/>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

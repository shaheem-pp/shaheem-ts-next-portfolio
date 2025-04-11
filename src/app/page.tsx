// src/app/page.tsx

"use client";

import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";
import {ArrowRight, Code, Github, Linkedin, Mail} from "lucide-react";

import {useState} from "react";
import ProjectModal from "@/components/modal"; // ✅ import your array
import {Project, projects} from "@/app/projects/constants";

export default function Home() {
    const skills = [
        {name: "Django", category: "Backend"},
        {name: "Python", category: "Backend"},
        {name: "REST APIs", category: "Backend"},
        {name: "PostgreSQL", category: "Database"},
        {name: "React", category: "Frontend"},
        {name: "AWS", category: "DevOps"},
        {name: "Docker", category: "DevOps"},
        {name: "Git", category: "Tools"},
    ];

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const featuredProjects = projects.filter((project) => project.featured); // ✅ define it here
    const openProject = (project: Project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <>
            {/* Hero Section */}
            <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <Badge variant="outline" className="text-sm">
                                    Backend-focused Full Stack Developer
                                </Badge>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                                    Helping businesses to{" "}
                                    <span
                                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">get online and grow fast
                                    </span>
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    I'm Shaheem, a full-stack developer specializing in Django, React, and cloud
                                    technologies. I build scalable and efficient web applications that solve real-world
                                    problems.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link href="/projects">
                                    <Button className="w-full">
                                        View Projects <ArrowRight className="ml-2 h-4 w-4"/>
                                    </Button>
                                </Link>
                                <Link href="/contact">
                                    <Button variant="outline" className="w-full">
                                        Contact Me
                                    </Button>
                                </Link>
                            </div>
                            <div className="flex items-center gap-4 mt-4">
                                <Link
                                    href="https://github.com/shaheem-pp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    <Github className="h-5 w-5"/>
                                    <span className="sr-only">GitHub</span>
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/shaheem-pp/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    <Linkedin className="h-5 w-5"/>
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                                <Link
                                    href="mailto:mail@shaheem.dev"
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    <Mail className="h-5 w-5"/>
                                    <span className="sr-only">Email</span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div
                                className="relative aspect-square overflow-hidden rounded-full border p-2">
                                {/*className="relative aspect-square overflow-hidden rounded-full border bg-gradient-to-b from-purple-600/20 to-pink-600/20 p-2">*/}
                                <img
                                    src="/image/linkedin-profile.png"
                                    alt="Shaheem PP"
                                    width={400}
                                    height={400}
                                    className="aspect-square rounded-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Me Section */}
            <section className="py-16 md:py-24">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            About Me
                        </h2>
                        <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            I'm a backend-focused full-stack developer with 1.6+ years of experience building scalable
                            and efficient web applications.
                        </p>
                        <Separator className="my-4"/>
                        <div className="flex flex-col gap-8 md:gap-12 text-left">
                            <div>
                                <h3 className="text-xl font-bold mb-3">My Expertise</h3>
                                <p className="text-muted-foreground mb-4">
                                    I specialize in Django and enjoy developing secure, high-performance systems that
                                    solve real-world problems.
                                    I'm currently pursuing a Post Graduate program in Full Stack Software Development in
                                    Toronto,
                                    constantly learning and refining my skills in backend architecture, API development,
                                    and cloud deployment.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {skills.map((skill, index) => (
                                        <Badge key={index} variant="secondary">
                                            {skill.name}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3">My Approach</h3>
                                <p className="text-muted-foreground">
                                    I love optimizing workflows, designing intuitive dashboards, and collaborating with
                                    teams to build
                                    solutions that make an impact. I'm looking for opportunities where I can apply my
                                    expertise,
                                    tackle new challenges, and grow alongside a great team.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Link href="/resume">
                                <Button variant="outline">
                                    View Full Resume <ArrowRight className="ml-2 h-4 w-4"/>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-16 md:py-24 bg-muted/40">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Featured Projects
                        </h2>
                        <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Here are some of the key projects I've worked on
                        </p>
                    </div>
                    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 py-8">
                        {featuredProjects.map((project, index) => (
                            <Card key={index} className="flex flex-col overflow-hidden">
                                <div className="aspect-video w-full overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="object-cover w-full h-full"
                                        width={300}
                                        height={170}
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <div className="flex flex-wrap gap-1 pt-1">
                                        {[project.category, ...project.stack.slice(0, 2)].map((tag, tagIndex) => (
                                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <CardDescription className="text-base line-clamp-2">
                                        {project.shortContent}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full"
                                        onClick={() => openProject(project)}
                                    >
                                        <Code className="mr-2 h-4 w-4"/> View Details
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>

                    {/* 🔥 Modal for full details */}
                    {selectedProject && (
                        <ProjectModal
                            isOpen={!!selectedProject}
                            closeModal={closeModal}
                            project={selectedProject}
                        />
                    )}
                    <div className="flex justify-center mt-8">
                        <Link href="/projects">
                            <Button>
                                View All Projects <ArrowRight className="ml-2 h-4 w-4"/>
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-purple-700 to-pink-700 text-white">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto max-w-[85%]">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                What People Say
                            </h2>
                        </div>
                        <blockquote className="mx-auto max-w-3xl text-center">
                            <p className="text-xl md:text-2xl italic leading-relaxed">
                                "I've had the pleasure of working with Shaheem, and he's been an invaluable part of our
                                team.
                                His expertise in Django, problem-solving mindset, and dedication to writing clean,
                                efficient code
                                make him a standout developer. Beyond his technical skills, he's a great team player
                                who's always
                                proactive and eager to improve."
                            </p>
                            <footer className="mt-6">
                                <div className="font-semibold">Shahin Abdulla</div>
                                <div className="text-white/80 text-sm">Co-Founder and CPO of Agua India</div>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Let's Build Something Together
                            </h2>
                            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part
                                of your vision.
                            </p>
                        </div>
                        <div className="mx-auto w-full max-w-sm space-y-2">
                            <Link href="/contact">
                                <Button className="w-full" size="lg">
                                    Get in Touch
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

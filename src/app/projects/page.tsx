"use client";

import {useState} from "react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Code} from "lucide-react";
import ProjectModal from "@/components/modal";
import {Project, projects} from "@/app/projects/constants";


export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState(null);
    const openProject = (project:Project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <>
            <section className="py-16 md:py-24 bg-muted/40">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Projects
                        </h2>
                        <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Here are some of the key projects I've worked on
                        </p>
                    </div>
                    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 py-8">
                        {projects.map((project, index) => (
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
                </div>
            </section>

            {/* 🔥 Modal for full details */}
            {selectedProject && (
                <ProjectModal
                    isOpen={!!selectedProject}
                    closeModal={closeModal}
                    project={selectedProject}
                />
            )}
        </>
    );
}
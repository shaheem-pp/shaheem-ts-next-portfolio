// src/app/projects/page.tsx

"use client";

import {useEffect, useState} from "react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Code, Filter} from "lucide-react";
import ProjectModal from "@/components/modal";
import {Project, projects} from "@/app/projects/constants";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
const statuses = ["All", ...Array.from(new Set(projects.map(p => p.status)))];

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [filterCategory, setFilterCategory] = useState("All");
    const [filterStatus, setFilterStatus] = useState("All");
    const [isMobile, setIsMobile] = useState(false);
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const openProject = (project: Project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    const filteredProjects = projects.filter(project => {
        const matchCategory = filterCategory === "All" || project.category === filterCategory;
        const matchStatus = filterStatus === "All" || project.status === filterStatus;
        return matchCategory && matchStatus;
    });

    const isFiltered = filterCategory !== "All" || filterStatus !== "All";

    return (
        <>
            <section className="py-16 md:py-24 bg-muted/40">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Projects
                        </h2>
                        <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Real-world platforms I've built — spanning professional systems, hackathons, and academic projects.
                        </p>
                    </div>

                    {/* Filter Button for All Screens */}
                    <div className="flex justify-end my-4">
                        <Sheet open={showFilters} onOpenChange={setShowFilters}>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="sm" className="relative">
                                    <Filter className="w-4 h-4 mr-2" /> Filters
                                    {isFiltered && (
                                        <span className="absolute -top-2 -right-2">
                                            <Badge variant="default" className="rounded-full px-2 py-0.5 text-[10px] h-auto">●</Badge>
                                        </span>
                                    )}
                                </Button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className={`${isMobile ? "w-screen" : "w-[90vw] max-w-sm md:max-w-md lg:max-w-lg"}`}
                            >
                                <SheetHeader>
                                    <SheetTitle>Filter Projects</SheetTitle>
                                </SheetHeader>
                                <div className="py-4 space-y-6">
                                    <div>
                                        <p className="text-sm font-medium mb-1">Category</p>
                                        <div className="flex flex-wrap gap-2">
                                            {categories.map((cat, i) => (
                                                <Button
                                                    key={i}
                                                    variant={cat === filterCategory ? "default" : "outline"}
                                                    size="sm"
                                                    onClick={() => setFilterCategory(cat)}
                                                >
                                                    {cat}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium mb-1">Status</p>
                                        <div className="flex flex-wrap gap-2">
                                            {statuses.map((status, i) => (
                                                <Button
                                                    key={i}
                                                    variant={status === filterStatus ? "default" : "outline"}
                                                    size="sm"
                                                    onClick={() => setFilterStatus(status)}
                                                >
                                                    {status}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="text-sm text-muted-foreground mt-2">
                                        Showing <strong>{filteredProjects.length}</strong> project{filteredProjects.length !== 1 && "s"}
                                    </div>

                                    <div className="flex gap-2 mt-4">
                                        <Button className="flex-1" onClick={() => setShowFilters(false)}>Apply Filters</Button>
                                        <Button variant="secondary" className="flex-1" onClick={() => {
                                            setFilterCategory("All");
                                            setFilterStatus("All");
                                            setShowFilters(false);
                                        }}>Reset</Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Projects Grid */}
                    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 py-8">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <Card
                                    key={index}
                                    className="flex flex-col overflow-hidden cursor-pointer transition-shadow duration-200 hover:shadow-lg hover:dark:shadow-lg hover:dark:shadow-accent"
                                    onClick={() => openProject(project)}
                                >
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
                                    <CardFooter className="justify-between">
                                        <Badge variant="outline" className="text-xs">
                                            {project.status}
                                        </Badge>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="pointer-events-none"
                                        >
                                            <Code className="mr-2 h-4 w-4 text-primary"/> View Details
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))
                        ) : (
                            <div className="col-span-full text-center text-muted-foreground">
                                <p className="text-lg">No projects match your filter.</p>
                            </div>
                        )}
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
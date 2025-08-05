// src/components/sections/FeaturedProjectsSection.tsx

"use client";

import { Project, projects } from "@/app/projects/constants";
import ProjectModal from "@/components/modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function FeaturedProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = projects.filter((project) => project.featured);

  const openProject = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
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
            <Card
              key={index}
              className="flex flex-col overflow-hidden cursor-pointer transition-shadow duration-200 hover:shadow-lg hover:dark:shadow-lg hover:dark:shadow-accent"
              onClick={() => openProject(project)}
            >
              <div className="aspect-video w-full overflow-hidden">
                <Image
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
                  {[project.category, ...project.stack.slice(0, 2)].map(
                    (tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    )
                  )}
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
                  <Code className="mr-2 h-4 w-4 text-primary" /> View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Modal for full details */}
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
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

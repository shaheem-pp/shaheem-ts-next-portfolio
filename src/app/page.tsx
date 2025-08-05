// src/app/page.tsx

"use client";

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
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Code,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Quote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { topSkills } from "@/app/about/constants";
import { Project, projects } from "@/app/projects/constants";
import { testimonials } from "@/app/testimonials/constants";
import ProjectModal from "@/components/modal"; // ✅ import your array
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const featuredProjects = projects.filter((project) => project.featured); // ✅ define it here
  const openProject = (project: Project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  // Navigation functions for testimonials
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // Auto-rotate testimonials every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000); // 8 seconds - enough time to read each testimonial

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge variant="outline" className="text-sm">
                  Product Engineer • AI & Systems
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                  Building systems that power{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                    {" "}
                    real products
                  </span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm Shaheem - a Product Engineer who blends backend
                  architecture, AI integration, and product thinking to build
                  software that scales and solves real problems.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/projects">
                  <Button className="w-full">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
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
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/shaheem-pp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="mailto:mail@shaheem.dev"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
                <Link
                  href="https://socials.shaheem.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span className="sr-only">Socials</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square overflow-hidden rounded-full border p-2">
                <Image
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
              I’m a Product Engineer with 2 years of experience turning
              technical complexity into real-world impact - through scalable
              systems, human-centric tools, and fast-moving prototypes.
            </p>
            <Separator className="my-4" />
            <div className="flex flex-col gap-8 md:gap-12 text-left">
              <div>
                <h3 className="text-xl font-bold mb-3">My Expertise</h3>
                <p className="text-muted-foreground mb-4">
                  I specialize in backend-first product development - designing
                  APIs, integrating AI, and building systems that scale. I'm
                  currently based in Toronto, pursuing a Post Graduate program
                  in Full Stack Software Development while actively working on
                  AI-integrated tools and internal platforms.
                </p>
                <div className="flex flex-wrap justify-center gap-3 pt-6">
                  {topSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="transition-transform hover:scale-105 duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground pt-4">
                  For my full tech stack and proficiencies, check out the{" "}
                  <Link
                    href="/resume#skills"
                    className="text-primary underline"
                  >
                    Resume
                  </Link>{" "}
                  page.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">My Approach</h3>
                <p className="text-muted-foreground">
                  I believe product engineers should build with purpose. Whether
                  it's launching MVPs or refining production systems, I focus on
                  fast feedback loops, clean abstractions, and delivering value
                  - not just code.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/resume">
                <Button variant="outline">
                  View Full Resume <ArrowRight className="ml-2 h-4 w-4" />
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
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-purple-700 via-purple-800 to-pink-700 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 md:w-72 md:h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-6xl">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-3 md:mb-4">
                <Quote className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm font-medium">
                  Testimonials
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mb-2 md:mb-4">
                What Leadership Says
              </h2>
              <p className="text-white/80 text-sm md:text-base lg:text-lg max-w-xl md:max-w-2xl mx-auto px-4">
                Hear from the leaders who've worked closely with me on building
                impactful products
              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative">
              {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
              <button
                onClick={prevTestimonial}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full items-center justify-center transition-all duration-200 hover:scale-110 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:-translate-x-0.5" />
              </button>

              <button
                onClick={nextTestimonial}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full items-center justify-center transition-all duration-200 hover:scale-110 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* Testimonials Container */}
              <div className="mx-auto max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl px-0 md:px-8 lg:px-12">
                <div className="relative min-h-[500px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[450px] xl:min-h-[400px]">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        index === currentTestimonial
                          ? "opacity-100 transform translate-x-0 scale-100"
                          : index < currentTestimonial
                          ? "opacity-0 transform -translate-x-4 md:-translate-x-8 scale-95"
                          : "opacity-0 transform translate-x-4 md:translate-x-8 scale-95"
                      }`}
                    >
                      {/* Testimonial Card */}
                      <div className="bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 border border-white/20 shadow-2xl h-full flex flex-col justify-center overflow-hidden">
                        {/* Quote Icon */}
                        <div className="flex justify-center mb-4 md:mb-6 flex-shrink-0">
                          <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center">
                            <Quote className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                          </div>
                        </div>

                        {/* Quote Text */}
                        <blockquote className="text-center flex-1 flex items-center justify-center">
                          <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl leading-relaxed mb-4 md:mb-6 lg:mb-8 text-white/95 font-light max-w-full">
                            "{testimonial.quote}"
                          </p>
                        </blockquote>

                        {/* Author Info */}
                        <div className="text-center flex-shrink-0">
                          <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center">
                            <span className="text-lg md:text-xl lg:text-2xl font-bold">
                              {testimonial.author
                                .split(" ")
                                .map((name) => name[0])
                                .join("")}
                            </span>
                          </div>
                          <div className="font-semibold text-base md:text-lg lg:text-xl text-white mb-1">
                            {testimonial.author}
                          </div>
                          <div className="text-white/70 text-xs md:text-sm">
                            {testimonial.position}
                          </div>
                          <div className="text-white/60 text-xs md:text-sm font-medium">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Navigation Buttons */}
              <div className="flex md:hidden justify-center space-x-4 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="flex justify-center mt-6 md:mt-8">
                <div className="flex space-x-1.5 md:space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className="group relative"
                      aria-label={`View testimonial ${index + 1}`}
                    >
                      <div
                        className={`w-8 md:w-12 h-1 rounded-full transition-all duration-300 ${
                          index === currentTestimonial
                            ? "bg-white"
                            : "bg-white/30 hover:bg-white/50"
                        }`}
                      />
                      {index === currentTestimonial && (
                        <div className="absolute inset-0 w-8 md:w-12 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Testimonial Counter */}
              <div className="text-center mt-3 md:mt-4">
                <span className="text-white/60 text-xs md:text-sm">
                  {currentTestimonial + 1} / {testimonials.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Let's Build Something Together
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Let’s collaborate on something meaningful - whether it’s a new
                product, a challenging backend system, or a passion project.
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

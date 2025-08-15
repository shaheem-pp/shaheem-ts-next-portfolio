"use client";

import { Download, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  type Achievement,
  achievements,
  education,
  experiences,
  skills,
} from "./constants";

export default function ResumePage() {
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null);

  return (
    <>
      {/* Header Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Resume
            </h1>
            <p className="text-muted-foreground md:text-xl">
              My professional experience, education, and technical skills.
            </p>
            <div className="max-w-sm mx-auto pt-2">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">
              Experience
            </h2>
            <div className="grid gap-6">
              {experiences.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <CardTitle>
                        {exp.title}
                        {exp.role && (
                          <span className="text-sm font-normal text-muted-foreground">
                            ({exp.role})
                          </span>
                        )}
                      </CardTitle>
                      <span className="text-sm text-muted-foreground">
                        {exp.duration}
                      </span>
                    </div>
                    <div className="text-primary font-medium">
                      {exp.company}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {exp.location}
                    </div>
                  </CardHeader>
                  <CardContent>
                    {exp.responsibilities && (
                      <ul className="list-disc pl-5 space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">
              Education
            </h2>
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <CardTitle>
                        {edu.degree} in {edu.field}
                      </CardTitle>
                      <span className="text-sm text-muted-foreground">
                        {edu.duration}
                      </span>
                    </div>
                    <div className="text-primary font-medium">
                      {edu.institution}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {edu.location}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {edu.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Technical Skills
              </h2>
              <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">
                Technologies and tools I work with professionally
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="space-y-4 p-6 rounded-lg border bg-card hover:bg-card/80 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-gray-900/20 dark:hover:shadow-gray-900/40"
                >
                  <h3 className="font-semibold text-lg text-foreground border-b border-border/30 pb-2">
                    {skill.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="text-sm font-normal hover:bg-muted transition-colors duration-200"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto space-y-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Achievements
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAchievement(achievement)}
                  className="text-left"
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200 h-full">
                    <div className="aspect-video bg-muted flex items-center justify-center p-4">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        className="object-contain h-full max-h-[100px]"
                        width={100}
                        height={100}
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {achievement.title}
                      </CardTitle>
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
                      <span className="text-xs text-primary hover:underline inline-flex items-center">
                        Read more <ExternalLink className="ml-1 h-3 w-3" />
                      </span>
                    </CardContent>
                  </Card>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedAchievement && (
        <Dialog
          open={!!selectedAchievement}
          onOpenChange={() => setSelectedAchievement(null)}
        >
          <DialogContent className="max-w-md">
            <div className="aspect-video bg-muted flex items-center justify-center p-4 rounded-md mb-4">
              <Image
                src={selectedAchievement.image}
                alt={selectedAchievement.title}
                className="object-contain h-full max-h-[150px]"
                width={150}
                height={150}
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
                Visit Website <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            )}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

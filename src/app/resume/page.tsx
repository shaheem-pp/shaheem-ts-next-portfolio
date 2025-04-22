// src/app/resume/page.tsx

"use client";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Download, ExternalLink} from "lucide-react";
import Link from "next/link";
import {useState} from "react";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";

import {type Achievement, achievements, education, experiences, skills} from "./constants";


export default function ResumePage() {

    const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);


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
                                                <CardTitle>{exp.title} <span
                                                    className="text-sm text-muted-foreground font-normal">({exp.role})</span></CardTitle>
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

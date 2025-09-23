"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Building, Calendar, MapPin } from "lucide-react";
import { education } from "../resume/constants";

// Education Section Component
const EducationSection = () => {
	return (
		<section id="education" className="py-16 px-4 md:px-6">
			<div className="container max-w-6xl mx-auto">
				<div className="space-y-8">
					<div className="text-center space-y-4">
						<h2 className="text-3xl md:text-4xl font-bold">Education</h2>
						<p className="text-muted-foreground">
							Academic foundation in computer science and software development.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{education.map((edu, index) => (
							<Dialog key={index}>
								<DialogTrigger asChild>
									<Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200">
										<CardHeader>
											<CardTitle className="text-xl">{edu.degree}</CardTitle>
											<CardDescription className="text-lg font-medium">{edu.field}</CardDescription>
											<div className="flex flex-col space-y-1 text-sm text-muted-foreground">
												<div className="flex items-center gap-2">
													<Building className="h-4 w-4" />
													<span>{edu.institution}</span>
												</div>
												<div className="flex items-center gap-2">
													<Calendar className="h-4 w-4" />
													<span>{edu.duration}</span>
												</div>
												<div className="flex items-center gap-2">
													<MapPin className="h-4 w-4" />
													<span>{edu.location}</span>
												</div>
											</div>
										</CardHeader>
									</Card>
								</DialogTrigger>
								<DialogContent className="max-w-2xl">
									<DialogHeader>
										<DialogTitle className="text-2xl">{edu.degree}</DialogTitle>
										<DialogDescription className="text-lg font-medium">
											{edu.field}
										</DialogDescription>
									</DialogHeader>
									<div className="space-y-4">
										<div className="flex flex-col space-y-2 text-sm text-muted-foreground">
											<div className="flex items-center gap-2">
												<Building className="h-4 w-4" />
												<span className="font-medium">Institution:</span>
												<span>{edu.institution}</span>
											</div>
											<div className="flex items-center gap-2">
												<Calendar className="h-4 w-4" />
												<span className="font-medium">Duration:</span>
												<span>{edu.duration}</span>
											</div>
											<div className="flex items-center gap-2">
												<MapPin className="h-4 w-4" />
												<span className="font-medium">Location:</span>
												<span>{edu.location}</span>
											</div>
										</div>
										<Separator />
										<div>
											<h4 className="font-semibold mb-3">Highlights</h4>
											<ul className="space-y-2">
												{edu.highlights.map((highlight, highlightIndex) => (
													<li key={highlightIndex} className="flex items-start gap-2 text-sm">
														<span className="text-primary mt-1.5">•</span>
														<span>{highlight}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								</DialogContent>
							</Dialog>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default EducationSection;

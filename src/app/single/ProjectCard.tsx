"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type Project } from "../projects/constants";

// Project Card Component
const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<Card className="overflow-hidden">
			<div className="flex flex-col md:flex-row h-full">
				{/* Image Section */}
				<div className="w-full md:w-1/3 lg:w-2/5 relative min-h-[200px] md:min-h-[200px]">
					<Image
						src={`/${project.image}`}
						alt={project.title}
						fill
						className="object-cover hover:scale-105 transition-transform duration-300"
					/>
				</div>

				{/* Content Section */}
				<div className="flex-1 flex flex-col">
					<CardHeader className="pb-3">
						<div className="flex items-start justify-between gap-4">
							<div className="space-y-2 flex-1">
								<CardTitle className="text-lg md:text-xl leading-tight">{project.title}</CardTitle>
								<Badge variant="secondary" className="w-fit">
									{project.category}
								</Badge>
							</div>
							{Object.keys(project.links).length > 0 && (
								<div className="flex gap-1 flex-shrink-0">
									{Object.entries(project.links).map(
										([icon, url], linkIndex) =>
											url && (
												<Button key={linkIndex} variant="ghost" size="sm" asChild>
													<Link href={url} target="_blank">
														<ExternalLink className="h-4 w-4" />
													</Link>
												</Button>
											)
									)}
								</div>
							)}
						</div>
					</CardHeader>

					<CardContent className="pt-0 flex-1 flex flex-col justify-between">
						<div className="space-y-3">
							<CardDescription className="text-sm leading-relaxed line-clamp-3">
								{project.shortContent}
							</CardDescription>

							<div className="flex flex-wrap gap-1.5">
								{project.stack.slice(0, 5).map((tech, techIndex) => (
									<Badge key={techIndex} variant="outline" className="text-xs px-2 py-0.5">
										{tech}
									</Badge>
								))}
								{project.stack.length > 5 && (
									<Badge variant="outline" className="text-xs px-2 py-0.5">
										+{project.stack.length - 5}
									</Badge>
								)}
							</div>
						</div>
					</CardContent>
				</div>
			</div>
		</Card>
	);
};

export { ProjectCard };
export default ProjectCard;

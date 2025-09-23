"use client";

import { projects } from "../projects/constants";
import { ProjectCard } from "./ProjectCard";

// Featured Projects Section Component
const FeaturedProjectsSection = () => {
	const featuredProjects = projects.filter(project => project.featured);

	return (
		<section id="projects" className="py-16 px-4 md:px-6">
			<div className="container max-w-6xl mx-auto">
				<div className="space-y-8">
					<div className="text-center space-y-4">
						<h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							A selection of projects showcasing my experience in full-stack development, AI
							integration, and scalable systems.
						</p>
					</div>

					<div className="space-y-6">
						{featuredProjects.slice(0, 4).map((project, index) => (
							<ProjectCard key={index} project={project} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProjectsSection;

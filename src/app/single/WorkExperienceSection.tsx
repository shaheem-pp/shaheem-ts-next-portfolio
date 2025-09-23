"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { experiences } from "../resume/constants";
import ExperienceCard from "./ExperienceCard";
// Work Experience Section Component
const WorkExperienceSection = () => {
	const [showAll, setShowAll] = useState(false);
	const visibleExperiences = showAll ? experiences : experiences.slice(0, 2);
	const hasMoreExperiences = experiences.length > 2;

	return (
		<section id="experience" className="py-16 px-4 md:px-6">
			<div className="container max-w-6xl mx-auto">
				<div className="space-y-8">
					<div className="text-center space-y-4">
						<h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
						<p className="text-muted-foreground">
							Professional journey building scalable applications and leading technical initiatives.
						</p>
					</div>

					<div className="space-y-6">
						{visibleExperiences.map((exp, index) => (
							<ExperienceCard key={index} experience={exp} />
						))}
					</div>

					{hasMoreExperiences && (
						<div className="text-center">
							<Button
								variant="outline"
								onClick={() => setShowAll(!showAll)}
								className="min-w-[140px]"
							>
								{showAll ? "Show Less" : `Show ${experiences.length - 2} More`}
							</Button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default WorkExperienceSection;

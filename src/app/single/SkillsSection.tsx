"use client";

import { Badge } from "@/components/ui/badge";
import { topSkills } from "../about/constants";

// Skills Section Component
const SkillsSection = () => {
	return (
		<section id="skills" className="py-16 px-4 md:px-6">
			<div className="container max-w-6xl mx-auto">
				<div className="space-y-8">
					<div className="text-center space-y-4">
						<h2 className="text-3xl md:text-4xl font-bold">Top Skills</h2>
						<p className="text-muted-foreground">
							Core technologies and tools I use to build scalable applications.
						</p>
					</div>

					{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
					{/* {skills.map((skillCategory, index) => (
							<Card key={index}>
								<CardHeader>
									<CardTitle className="text-lg flex items-center gap-2">
										<Code className="h-5 w-5" />
										{skillCategory.category}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="flex flex-wrap gap-2">
										{skillCategory.items.map((skill, skillIndex) => (
											<Badge
												key={skillIndex}
												variant={topSkills.includes(skill) ? "default" : "secondary"}
												className="text-xs"
											>
												{skill}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
						))} */}
					{/* </div> */}
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
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;

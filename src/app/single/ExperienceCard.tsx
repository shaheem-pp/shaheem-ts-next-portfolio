"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar, MapPin } from "lucide-react";
import { type Experience } from "../resume/constants";

// Experience Card Component
const ExperienceCard = ({ experience }: { experience: Experience }) => {
	return (
		<Card>
			<CardHeader>
				<div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
					<div>
						<CardTitle className="text-xl">{experience.title}</CardTitle>
						<div className="flex items-center gap-2 text-muted-foreground">
							<Building className="h-4 w-4" />
							<span>{experience.company}</span>
							{experience.role && (
								<>
									<span>•</span>
									<span>{experience.role}</span>
								</>
							)}
						</div>
					</div>
					<div className="flex flex-col md:items-end text-sm text-muted-foreground">
						<div className="flex items-center gap-2">
							<Calendar className="h-4 w-4" />
							<span>{experience.duration}</span>
						</div>
						<div className="flex items-center gap-2">
							<MapPin className="h-4 w-4" />
							<span>{experience.location}</span>
						</div>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				{experience.responsibilities && (
					<ul className="space-y-2 text-muted-foreground">
						{experience.responsibilities.map((resp, respIndex) => (
							<li key={respIndex} className="flex items-start gap-2">
								<span className="text-primary mt-1.5">•</span>
								<span>{resp}</span>
							</li>
						))}
					</ul>
				)}
			</CardContent>
		</Card>
	);
};

export default ExperienceCard;

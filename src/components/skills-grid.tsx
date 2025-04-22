// src/components/skills-grid.tsx

"use client";

import {useState} from "react";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

type Skill = {
    name: string;
    level: string;
};

type Props = {
    groupedSkills: Record<string, Skill[]>;
};

const SkillGrid = ({groupedSkills}: Props) => {
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

    const toggleCategory = (category: string) => {
        setExpandedCategories(prev => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    const sortLevel = (level: string) => {
        const order: Record<string, number> = {
            "Advanced": 3,
            "Intermediate-Advanced": 2.5,
            "Intermediate": 2,
            "Beginner-Intermediate": 1.5,
            "Beginner": 1,
        };
        return order[level.replace("–", "-")] ?? 0;
    };

    return (
        <div className="space-y-10">
            {Object.entries(groupedSkills).map(([category, skills]) => {
                const isExpanded = expandedCategories[category];
                const visibleSkills = [...skills]
                    .sort((a, b) => sortLevel(b.level) - sortLevel(a.level))
                    .slice(0, isExpanded ? skills.length : 4);

                return (
                    <div key={category}>
                        <h3 className="text-xl font-semibold mb-4">{category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {visibleSkills.map((skill, index) => (
                                <Card key={index} className="flex flex-col items-center justify-center p-4 text-center">
                                    <CardContent className="p-2">
                                        <h4 className="font-semibold">{skill.name}</h4>
                                        <Badge
                                            variant={skill.level.includes("Advanced") ? "default" : "secondary"}
                                            className="mt-2"
                                        >
                                            {skill.level}
                                        </Badge>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        {skills.length > 4 && (
                            <div className="mt-4 text-center">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => toggleCategory(category)}
                                    className="text-sm text-muted-foreground"
                                >
                                    {isExpanded ? "Show less" : "Show more"}
                                </Button>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default SkillGrid;
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ArrowRight, CheckCircle2} from "lucide-react";
import Link from "next/link";
import {groupedSkills, highlights, myvalues} from "@/app/about/constants";

export const metadata = {
    title: "About | Shaheem PP",
    description: "Learn more about Shaheem PP, a backend-focused full-stack developer specializing in Django, React, and cloud technologies.",
};

export default function AboutPage() {

    return (
        <>
            <section className="py-12 md:py-20 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-8 xl:grid-cols-[1fr_500px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    About Me
                                </h1>
                                <p className="text-muted-foreground md:text-xl">
                                    Hi, I'm Shaheem PP - a passionate developer building web solutions that make an
                                    impact.
                                </p>
                            </div>
                            <div className="space-y-5 text-muted-foreground">
                                <p>
                                    I specialize in Django and enjoy developing secure, high-performance systems that
                                    solve real-world problems.
                                    My journey in tech began with a fascination for building things that work
                                    efficiently and help people.
                                </p>
                                <p>
                                    Currently, I'm pursuing a Post Graduate program in Full Stack Software Development
                                    in Toronto,
                                    constantly learning and refining my skills in backend architecture, API development,
                                    and cloud deployment.
                                </p>
                                <p>
                                    I love optimizing workflows, designing intuitive dashboards, and collaborating with
                                    teams to build
                                    solutions that make an impact. I'm looking for opportunities where I can apply my
                                    expertise,
                                    tackle new challenges, and grow alongside a great team.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 pt-4">
                                <h3 className="text-xl font-bold">My Highlights</h3>
                                <ul className="grid gap-2">
                                    {highlights.map((item, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5"/>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mx-auto flex w-full max-w-sm items-center justify-center lg:max-w-none">
                            <div className="space-y-4 w-full">
                                <div
                                    className="aspect-square overflow-hidden rounded-xl bg-gradient-to-b from-purple-600/20 to-pink-600/20 p-2">
                                    <img
                                        src="https://ext.same-assets.com/3659750609/2569368412.png"
                                        alt="Shaheem PP"
                                        width={500}
                                        height={500}
                                        className="aspect-square rounded-lg object-cover"
                                    />
                                </div>
                                <div className="flex justify-center gap-4">
                                    <Link
                                        href="/resume"
                                        className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        Resume
                                    </Link>
                                    <Link
                                        href="/projects"
                                        className="inline-flex items-center justify-center rounded-md border border-input bg-background px-8 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        Projects
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                My Values
                            </h2>
                            <p className="text-muted-foreground md:text-xl">
                                These principles guide my work and approach to development
                            </p>
                        </div>
                    </div>
                    <div
                        className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-8 md:pt-12">
                        {myvalues.map((value, index) => (
                            <Card key={index} className="flex flex-col">
                                <CardHeader>
                                    <CardTitle>{value.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                Technical Skills
                            </h2>
                            <p className="text-muted-foreground md:text-xl">
                                My technical expertise and proficiency levels
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto max-w-6xl pt-10 space-y-10">
                        {Object.entries(groupedSkills).map(([category, skills]) => (
                            <div key={category}>
                                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                    {[...skills]
                                        .sort((a, b) => {
                                            const order: Record<string, number> = {
                                                "Advanced": 3,
                                                "Intermediate-Advanced": 2.5,
                                                "Intermediate": 2,
                                                "Beginner-Intermediate": 1.5,
                                                "Beginner": 1
                                            };
                                            const levelA = order[a.level.replace("–", "-")] ?? 0;
                                            const levelB = order[b.level.replace("–", "-")] ?? 0;
                                            return levelB - levelA;
                                        })
                                        .map((skill, index) => (
                                            <Card
                                                key={index}
                                                className="flex flex-col items-center justify-center p-4 text-center">
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-20">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2 max-w-3xl">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                Let's Connect
                            </h2>
                            <p className="text-muted-foreground md:text-xl">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part
                                of your vision.
                            </p>
                        </div>
                        <div className="mx-auto w-full max-w-sm space-y-2">
                            <Link href="/contact">
                                <Button className="w-full" size="lg">
                                    Get in Touch <ArrowRight className="ml-2 h-4 w-4"/>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

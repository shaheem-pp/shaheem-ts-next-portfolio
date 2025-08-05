// src/components/homePage/AboutSection.tsx

import { topSkills } from "@/app/about/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I'm a Product Engineer with 2 years of experience turning technical
            complexity into real-world impact - through scalable systems,
            human-centric tools, and fast-moving prototypes.
          </p>
          <Separator className="my-4" />
          <div className="flex flex-col gap-8 md:gap-12 text-left">
            <div>
              <h3 className="text-xl font-bold mb-3">My Expertise</h3>
              <p className="text-muted-foreground mb-4">
                I specialize in backend-first product development - designing
                APIs, integrating AI, and building systems that scale. I'm
                currently based in Toronto, pursuing a Post Graduate program in
                Full Stack Software Development while actively working on
                AI-integrated tools and internal platforms.
              </p>
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
              <p className="text-sm text-muted-foreground pt-4">
                For my full tech stack and proficiencies, check out the{" "}
                <Link href="/resume#skills" className="text-primary underline">
                  Resume
                </Link>{" "}
                page.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">My Approach</h3>
              <p className="text-muted-foreground">
                I believe product engineers should build with purpose. Whether
                it's launching MVPs or refining production systems, I focus on
                fast feedback loops, clean abstractions, and delivering value -
                not just code.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/resume">
              <Button variant="outline">
                View Full Resume <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// src/components/homePage/HeroSection.tsx

import SocialLinks from "@/components/SocialLinks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge variant="outline" className="text-sm">
                Product Engineer • AI & Systems
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                Building systems that power{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                  {" "}
                  real products
                </span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm Shaheem - a Product Engineer who blends backend
                architecture, AI integration, and product thinking to build
                software that scales and solves real problems.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/projects">
                <Button className="w-full">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Contact Me
                </Button>
              </Link>
            </div>
            <SocialLinks />
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-full border p-2">
              <Image
                src="/image/linkedin-profile.png"
                alt="Shaheem PP"
                width={400}
                height={400}
                className="aspect-square rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            <span className="text-primary">Hello, I'm </span>
            <span className="bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
              Yixin (Charles) Zhang
            </span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl text-center">
            Dynamic Full Stack Developer with a proven track record at Comactivity, 
            specializing in .NET and Node.js. Enhanced UI consistency and 
            streamlined workflows, significantly reducing setup time by 20%. Adept 
            in Agile methodologies and committed to cross-functional collaboration, 
            leveraging skills in cloud technologies and microservices to drive 
            impactful results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button onClick={scrollToProjects} size="lg">
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>

      {/* Background decoration - optional */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
      </div>
    </section>
  );
}

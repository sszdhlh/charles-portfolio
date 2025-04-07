"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CodeIcon, GraduationCap, Briefcase, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  details: string[];
}

const experiences: Experience[] = [
  {
    title: "Junior Developer",
    company: "Comactivity",
    location: "Brisbane, QLD",
    period: "February 2024 - February 2025",
    description: "Maintained .NET Xamarin product and contributed to .NET MAUI migration. Built Node.js APIs and developed AngularJS portal application for internal workflows.",
    details: [
      "Maintained .NET Xamarin product; contributed to .NET MAUI migration, improving UI consistency",
      "Built Node.js (Express) APIs for file uploads & user data, streamlining internal workflows",
      "Developed and maintained a portal application using AngularJS for internal workflows, with a focus on optimizing front-end performance and creating modular components",
      "Created AWS Lambda functions & optimized databases, enhancing system reliability",
      "Reduced environment setup time by ~20% with standardized deployment scripts"
    ]
  },
  {
    title: "Portal Developer Volunteer",
    company: "Advancing Communities Australia",
    location: "Brisbane, QLD",
    period: "June 2023 - November 2024",
    description: "Developed a microservices-based portal with React + Node.js for data APIs and PHP for image manipulation. Created a 'Canva-like' module for design work.",
    details: [
      "Developed a microservices-based portal with React + Node.js (data APIs) & PHP (image manipulation)",
      "Created a 'Canva-like' module (GD/Imagick) for text/shape overlays & exports, cutting design time ~20%",
      "Implemented responsive design principles using Vue.js, ensuring the platform's accessibility and usability on both desktop and mobile devices",
      "Integrated RESTful APIs for front-end data interaction, ensuring smooth communication between user interfaces and back-end services",
      "Improved maintainability & deployment speed by decoupling services; boosted user adoption across groups"
    ]
  },
  {
    title: "AI Python Developer (Intern)",
    company: "Sam",
    location: "Sydney",
    period: "September 2023 - January 2024",
    description: "Built AI-powered tools using OpenAI API for predictive analytics. Transitioned into full-stack development with C# services and video conferencing integration.",
    details: [
      "Built AI-powered tools (OpenAI API) for predictive analytics, raising sales follow-up efficiency by 15%",
      "Transitioned into full-stack (C# services + Zoom/Teams integration); reduced load times by 30% via optimized code"
    ]
  },
  {
    title: "IT Support Technician (Intern)",
    company: "T & R Sports",
    location: "Sydney, NSW",
    period: "August 2023 - September 2023",
    description: "Deployed servers and wrote Python scripts for label printing and stock updates across multiple warehouses. Managed databases and automated synchronization processes.",
    details: [
      "Deployed servers & wrote Python scripts for label printing, stock updates across multiple warehouses",
      "Managed databases & automated synchronization to Excel/third-party platforms, cutting manual entry by 25%"
    ]
  },
  {
    title: "Full Stack Developer Intern",
    company: "Zhu Zuo Ji Company",
    location: "TianJin, TIANJIN",
    period: "October 2020 - January 2023",
    description: "Analyzed business requirements and developed responsive user interfaces using Java, React, Node.js, Spring Boot, and Vue.js. Enhanced system performance through optimization.",
    details: [
      "Analyzed business requirements and modeled data structures using Java, React, Node.js, and Spring Boot, ensuring scalable system design",
      "Developed responsive user interfaces for various projects using Vue.js, improving front-end development efficiency and maintainability through component-based development",
      "Integrated Vue Router and Vuex to manage application routing and global state, ensuring consistency in data flow and page navigation",
      "Configured projects using Vue CLI and Webpack, optimizing the front-end build process and enhancing development efficiency and code quality",
      "Maintained modular codebases, integrating microservices for key features and services",
      "Enhanced system performance by ~15% by optimizing RESTful APIs, database queries, and caching strategies"
    ]
  }
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-12 md:py-24 lg:py-32 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get to know more about my background and what drives my passion for development.
            </p>
          </div>
          <Separator className="my-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="border border-border bg-background/60 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Who I Am</h3>
              </div>
              <p className="text-muted-foreground">
                Dynamic Full-Stack Developer with expertise in AI integration and automation. Specializing in React, Node.js, and AWS cloud solutions. Currently developing a B2B ticket management system with AI-driven features for startups. Experienced in AI agent workflows using MCP for task automation. Published researcher in AI image recognition with a paper on Citrus Yellow Shoot Disease Detection using YOLOV5. Committed to creating intelligent, efficient solutions that enhance productivity and user experience.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border bg-background/60 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <CodeIcon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Development Journey</h3>
              </div>
              <p className="text-muted-foreground">
                My development journey encompasses full-stack development, AI integration, and automation solutions. I've built AI-driven systems including a B2B ticket management platform with intelligent task automation and a social media content publishing platform that integrates Claude for text optimization and Midjourney for image generation. I'm experienced with React, Express.js, Node.js, and AWS cloud services, with a focus on creating RESTful APIs and implementing Kafka + WebSocket for real-time applications. I'm passionate about leveraging AI agents with MCP workflows to create intelligent, efficient solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border bg-background/60 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="grid gap-4">
                <div>
                  <h4 className="font-semibold">Master of Information Technology in Computer Science</h4>
                  <p className="text-sm text-muted-foreground">The University of Queensland, Brisbane (Jul 2023)</p>
                  <p className="text-sm text-muted-foreground mt-1">Published research: "Citrus Yellow Shoot Disease Detection based on YOLOV5" in Highlights in Science, Engineering and Technology (2023)</p>
                </div>
                <div>
                  <h4 className="font-semibold">Bachelor of Arts (B.A.) in Modern Languages</h4>
                  <p className="text-sm text-muted-foreground">Tianjin University Renai College, China (Jul 2020)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-border bg-background/60 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <div className="grid gap-6">
                {experiences.map((exp, index) => (
                  <Dialog key={index}>
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{exp.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {exp.company}, {exp.location} ({exp.period})
                          </p>
                        </div>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm">
                            Details
                          </Button>
                        </DialogTrigger>
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{exp.title}</DialogTitle>
                        <DialogDescription>
                          {exp.company}, {exp.location} • {exp.period}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <ul className="list-disc list-inside space-y-2">
                          {exp.details.map((detail, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

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
    title: "Junior Developer - .NET MAUI & AWS",
    company: "Comactivity",
    location: "Brisbane",
    period: "Feb 2024 - Feb 2025",
    description: "Maintained .NET Xamarin product and migrated to .NET MAUI. Created AWS Lambda functions, performed database optimizations, and developed secure login flows.",
    details: [
      "Maintained .NET Xamarin product and migrated to .NET MAUI",
      "Created AWS Lambda functions and performed database optimizations",
      "Developed secure login flows",
      "Reduced environment setup time by ~20%",
      "Improved data retrieval speeds by ~15%"
    ]
  },
  {
    title: "Portal Development Volunteer",
    company: "Advancing Communities Australia",
    location: "Brisbane",
    period: "Jun 2023 - Nov 2024",
    description: "Developed microservices architecture for 'Climate Action Nurses Impact Portal' using Node.js for data APIs and PHP for image manipulation.",
    details: [
      "Developed microservices architecture using Node.js and PHP",
      "Created a 'Canva-like' module with GD/Imagick libraries",
      "Improved maintainability through containerization",
      "Reduced design turnaround times by ~20%"
    ]
  },
  {
    title: "Web Developer Intern - Node.js & PHP",
    company: "WebTech Solutions",
    location: "Remote",
    period: "May 2023 - Dec 2023",
    description: "Developed web applications using Node.js (Express) and PHP Laravel, implementing REST APIs and database integrations.",
    details: [
      "Built web applications with Node.js (Express) and PHP Laravel",
      "Implemented REST APIs and database integrations",
      "Streamlined internal workflows for client data processing"
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "Sam",
    location: "Sydney",
    period: "Sep 2023 - Jan 2024",
    description: "Built AI-powered tools using OpenAI API for predictive analytics and implemented C# backend services.",
    details: [
      "Built AI tools using OpenAI API for predictive analytics",
      "Implemented C# backend services",
      "Integrated with video conferencing platforms",
      "Improved sales follow-up efficiency by ~15%"
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
                Dynamic Junior Developer with a proven track record at Comactivity, specializing in .NET and Node.js. Enhanced UI consistency and streamlined workflows, significantly reducing setup time by 20%. Adept in Agile methodologies and committed to cross-functional collaboration, leveraging skills in cloud technologies and microservices to drive impactful results.
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
                My development journey encompasses full-stack development, cloud computing, and mobile applications. I've worked with modern technologies like React, Node.js, and PHP for web development, AWS services for cloud solutions, and .NET MAUI for cross-platform mobile applications. I'm passionate about creating scalable solutions that enhance system performance and reliability.
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

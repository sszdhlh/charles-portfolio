"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CodeIcon, GraduationCap, Briefcase, User } from "lucide-react";

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
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
                I'm a Junior Developer at Comactivity with expertise in .NET MAUI and AWS. I enjoy working with
                modern technologies to create efficient and reliable software solutions. I'm passionate about
                developing secure applications, optimizing database performance, and applying Agile methodologies
                to deliver high-quality software that meets client needs.
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
                My software development journey spans from creating AI-powered tools using OpenAI API to
                developing full-stack applications with React, Node.js, and PHP. I've worked on database management
                and optimization, cloud-based solutions with AWS Lambda and CloudFormation, and cross-platform
                mobile applications using .NET MAUI and Xamarin. I focus on creating efficient, scalable,
                and reliable software solutions with expertise in both backend and frontend technologies.
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
              <ul className="space-y-3">
                <li className="space-y-1">
                  <div className="font-medium">Master of Information Technology in Computer Science</div>
                  <div className="text-sm text-muted-foreground">The University of Queensland, Brisbane (Jul 2023)</div>
                </li>
                <li className="space-y-1">
                  <div className="font-medium">Bachelor of Arts (B.A.) in Modern Languages</div>
                  <div className="text-sm text-muted-foreground">Tianjin University Renai College, China (Jul 2020)</div>
                </li>
                <li className="space-y-1">
                  <div className="font-medium">AWS Cloud Technical Essentials</div>
                  <div className="text-sm text-muted-foreground">Certificate in Cloud Services</div>
                </li>
                <li className="space-y-1">
                  <div className="font-medium">PHP Laravel Developer Certification</div>
                  <div className="text-sm text-muted-foreground">Web Development Institute (2023)</div>
                </li>
                <li className="space-y-1">
                  <div className="font-medium">Node.js Application Development</div>
                  <div className="text-sm text-muted-foreground">OpenJS Foundation Certification (2023)</div>
                </li>
              </ul>
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
              <ul className="space-y-3">
                <li className="space-y-1">
                  <div className="font-medium">Junior Developer - .NET MAUI & AWS</div>
                  <div className="text-sm text-muted-foreground">Comactivity, Brisbane (Feb 2024 - Feb 2025)</div>
                  <div className="text-xs text-muted-foreground mt-1">Maintained .NET Xamarin product and migrated to .NET MAUI. Created AWS Lambda functions, performed database optimizations, and developed secure login flows. Reduced environment setup time by ~20% and improved data retrieval speeds by ~15%.</div>
                </li>
                <li className="space-y-1">
                  <div className="font-medium">Portal Development Volunteer</div>
                  <div className="text-sm text-muted-foreground">Advancing Communities Australia, Brisbane (Jun 2023 - Nov 2024)</div>
                  <div className="text-xs text-muted-foreground mt-1">Developed microservices architecture for "Climate Action Nurses Impact Portal" using Node.js for data APIs and PHP for image manipulation. Created a "Canva-like" module with GD/Imagick libraries. Reduced design turnaround times by ~20% and improved maintainability through containerization.</div>
                </li>
                <li className="space-y-1">
                  <div className="font-medium">Web Developer Intern - Node.js & PHP</div>
                  <div className="text-sm text-muted-foreground">WebTech Solutions, Remote (May 2023 - Dec 2023)</div>
                  <div className="text-xs text-muted-foreground mt-1">Developed web applications using Node.js (Express) and PHP Laravel, implementing REST APIs and database integrations. Streamlined internal workflows for collecting and processing client submissions.</div>
                </li>
                <li className="space-y-1">
                  <div className="font-medium">Software Engineering Intern</div>
                  <div className="text-sm text-muted-foreground">Sam, Sydney (Sep 2023 - Jan 2024)</div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

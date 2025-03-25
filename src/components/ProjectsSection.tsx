"use client";

import { useState } from "react";
import Image from "next/image";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

// Projects data based on Charles's resume
const projects: Project[] = [
  {
    id: "net-maui-migration",
    title: ".NET MAUI Product Migration",
    description: "Maintained existing .NET Xamarin product and contributed to migration to .NET MAUI.",
    longDescription: "As part of my work at Comactivity, I maintained an existing .NET Xamarin product while contributing to the ongoing migration to .NET MAUI. I completed the new UI design phase and worked closely with my mentor to ensure a smooth transition. The project involved modernizing the UI/UX while maintaining backward compatibility with existing features.",
    image: "https://same-assets.com/api/v1/unsplash/J5yoGZLdpSI/download",
    technologies: [".NET MAUI", "Xamarin", "C#", "UI/UX Design", "Mobile Development"],
    featured: true,
  },
  {
    id: "aws-cloud-deployment",
    title: "AWS Cloud Deployment",
    description: "Oversaw development and deployment of applications to cloud servers, enabling efficient client onboarding.",
    longDescription: "Managed development, QA, and production environments for cloud deployments at Comactivity. I assisted in production deployments to new cloud servers, which significantly improved the client onboarding process. I implemented standardized deployment scripts and cloud templates that reduced environment setup time by approximately 20%.",
    image: "https://same-assets.com/api/v1/unsplash/dpbXgTh0Lac/download",
    technologies: ["AWS", "CloudFormation", "CI/CD", "DevOps", "Deployment Automation"],
    featured: true,
  },
  {
    id: "aws-lambda-functions",
    title: "AWS Lambda Functions & DB Optimization",
    description: "Created AWS Lambda functions and performed database optimizations to enhance system performance.",
    longDescription: "Developed AWS Lambda functions to improve system reliability and performance at Comactivity. I also implemented database optimization techniques that improved data retrieval speeds in QA environments by approximately 15%. The project involved writing efficient SQL queries and implementing proper indexing strategies.",
    image: "https://same-assets.com/api/v1/unsplash/1tnS_BVy9Jk/download",
    technologies: ["AWS Lambda", "Database Optimization", "SQL", "Performance Tuning"],
    featured: true,
  },
  {
    id: "secure-login-flow",
    title: "Secure Login Flow",
    description: "Developed a secure login flow using AngularJS with AWS Cognito authentication and authorization.",
    longDescription: "Created a robust and secure user authentication and authorization system using AngularJS frontend with AWS Cognito as the backend authentication service. This project implemented best practices for secure user management, including multi-factor authentication options, secure password policies, and proper role-based access control.",
    image: "https://same-assets.com/api/v1/unsplash/JpF58ANavoc/download",
    technologies: ["AngularJS", "AWS Cognito", "Authentication", "Security", "Frontend Development"],
    featured: true,
  },
  {
    id: "climate-action-portal",
    title: "Climate Action Nurses Impact Portal",
    description: "React + Node.js application for data sharing and community engagement in climate action.",
    longDescription: "As a volunteer for Advancing Communities Australia, I developed the Climate Action Nurses Impact Portal using React and Node.js. This portal facilitates data sharing and community engagement focused on climate action initiatives. I designed robust architectural solutions tailored to community needs with future scalability in mind. The project involved close collaboration with stakeholders to define project scope, timelines, and community outcomes.",
    image: "https://same-assets.com/api/v1/unsplash/v_2FRXEba94/download",
    technologies: ["React", "Node.js", "Community Engagement", "Full-Stack Development"],
    featured: false,
  },
  {
    id: "ai-predictive-tools",
    title: "AI-Powered Predictive Analytics",
    description: "Built AI tools using OpenAI API for predictive analytics to inform business decisions.",
    longDescription: "During my internship at Sam, I built AI-powered tools using the OpenAI API for predictive analytics, such as sales order closure likelihood assessment. These tools helped inform business decisions and improved sales follow-up efficiency by approximately 15%. I later transitioned into a full-stack role, implementing C# backend services integrated with video conferencing platforms like Zoom, Teams, and Google Meet.",
    image: "https://same-assets.com/api/v1/unsplash/vTL_qy03D1I/download",
    technologies: ["Python", "OpenAI API", "AI/ML", "Predictive Analytics", "C#"],
    featured: false,
  },
  {
    id: "data-automation",
    title: "Warehouse Automation System",
    description: "Created automation scripts for warehouse management and label printing across multiple locations.",
    longDescription: "During my internship at T & R Sports, I developed Python scripts for automating critical warehouse operations, including label printing, stock updates, and warehouse distribution across three cities. I managed company databases and automated data synchronization to online Excel sheets and third-party platforms. The automation scripts reduced manual data entry workload by approximately 25% and significantly improved fulfillment tracking while minimizing shipping errors.",
    image: "https://same-assets.com/api/v1/unsplash/nuzKWzbs4Jk/download",
    technologies: ["Python", "Automation", "Data Management", "Warehouse Systems"],
    featured: false,
  },
  {
    id: "ci-cd-pipelines",
    title: "CI/CD Implementation",
    description: "Implemented CI/CD pipelines using Jenkins and GitLab CI for rapid and reliable software releases.",
    longDescription: "As part of my internship at Zhu Zuo Ji Company, I implemented CI/CD pipelines using Jenkins and GitLab CI, enabling rapid and reliable software releases. This implementation decreased deployment-related errors by approximately 40%. I also enhanced system performance by around 15% through optimized RESTful APIs and effective caching strategies.",
    image: "https://same-assets.com/api/v1/unsplash/xG8IQMqMITM/download",
    technologies: ["Jenkins", "GitLab CI", "CI/CD", "DevOps", "Software Engineering"],
    featured: false,
  },
];

export function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              My Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent work. Each project represents my passion for creating
              reliable, high-performance solutions.
            </p>
          </div>
          <Separator className="my-4" />

          <div className="flex gap-4 mb-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              All Projects
            </Button>
            <Button
              variant={filter === "featured" ? "default" : "outline"}
              onClick={() => setFilter("featured")}
            >
              Featured
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform hover:scale-105"
          priority
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">View Details</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>
                {project.technologies.join(" • ")}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-end gap-2 mt-4">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <div className="flex gap-2">
          {project.githubUrl && (
            <Button variant="ghost" size="icon" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="ghost" size="icon" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

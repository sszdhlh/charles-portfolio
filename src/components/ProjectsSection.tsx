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
    image: "/images/projects/maui-development.jpg",
    technologies: [".NET MAUI", "Xamarin", "C#", "UI/UX Design", "Mobile Development"],
    featured: true,
  },
  {
    id: "nodejs-backend-api",
    title: "Node.js REST API Backend",
    description: "Developed a scalable REST API backend using Node.js, Express and MongoDB for a client management system.",
    longDescription: "Designed and implemented a comprehensive backend solution using Node.js and Express.js with a MongoDB database. The API included JWT authentication, role-based permissions, complex data aggregation, and real-time notifications via WebSockets. Achieved high performance with proper indexing and caching strategies, reducing response times by approximately 40% compared to the previous solution.",
    image: "/images/projects/api-development.jpg",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "WebSockets", "API Design"],
    featured: true,
  },
  {
    id: "php-laravel-cms",
    title: "PHP Laravel Content Management System",
    description: "Built a custom content management system using PHP Laravel framework with MySQL database.",
    longDescription: "Developed a flexible content management system for a media company using PHP Laravel, featuring a custom templating engine, role-based content editing workflows, media library with automatic image optimization, and integration with third-party analytics tools. The system reduced content publishing time by approximately 30% and improved site performance through efficient caching and database optimization techniques.",
    image: "/images/projects/cms-development.jpg",
    technologies: ["PHP", "Laravel", "MySQL", "Redis", "JavaScript", "Performance Optimization"],
    featured: true,
  },
  {
    id: "aws-cloud-deployment",
    title: "AWS Cloud Deployment",
    description: "Oversaw development and deployment of applications to cloud servers, enabling efficient client onboarding.",
    longDescription: "Managed development, QA, and production environments for cloud deployments at Comactivity. I assisted in production deployments to new cloud servers, which significantly improved the client onboarding process. I implemented standardized deployment scripts and cloud templates that reduced environment setup time by approximately 20%.",
    image: "/images/projects/cloud-deployment.jpg",
    technologies: ["AWS", "CloudFormation", "CI/CD", "DevOps", "Deployment Automation"],
    featured: true,
  },
  {
    id: "aws-lambda-functions",
    title: "AWS Lambda Functions & DB Optimization",
    description: "Created AWS Lambda functions and performed database optimizations to enhance system performance.",
    longDescription: "Developed AWS Lambda functions to improve system reliability and performance at Comactivity. I also implemented database optimization techniques that improved data retrieval speeds in QA environments by approximately 15%. The project involved writing efficient SQL queries and implementing proper indexing strategies.",
    image: "/images/projects/database-optimization.jpg",
    technologies: ["AWS Lambda", "Database Optimization", "SQL", "Performance Tuning"],
    featured: false,
  },
  {
    id: "secure-login-flow",
    title: "Secure Login Flow",
    description: "Developed a secure login flow using AngularJS with AWS Cognito authentication and authorization.",
    longDescription: "Created a robust and secure user authentication and authorization system using AngularJS frontend with AWS Cognito as the backend authentication service. This project implemented best practices for secure user management, including multi-factor authentication options, secure password policies, and proper role-based access control.",
    image: "/images/projects/secure-auth.jpg",
    technologies: ["AngularJS", "AWS Cognito", "Authentication", "Security", "Frontend Development"],
    featured: false,
  },
  {
    id: "climate-action-portal",
    title: "Climate Action Nurses Impact Portal",
    description: "Microservices architecture with Node.js APIs and PHP image manipulation services.",
    longDescription: "As a volunteer for Advancing Communities Australia, I developed the 'Climate Action Nurses Impact Portal' using a microservices architecture. I split core functionality across separate Node.js (data APIs) and PHP (image manipulation) services, with a React frontend for community data sharing and engagement. I created a 'Canva-like' module in PHP using GD/Imagick libraries that enabled users to overlay text and shapes onto images for customized graphics. The containerized approach (using Docker) allowed for easy deployment and independent updates of each service. This reduced design turnaround times by approximately 20% and increased user adoption rates across multiple community groups.",
    image: "/images/projects/microservices.jpg",
    technologies: ["React", "Node.js", "Express.js", "PHP", "Docker", "Microservices", "GD/Imagick"],
    featured: true,
  },
  {
    id: "ai-predictive-tools",
    title: "AI-Powered Predictive Analytics",
    description: "Built AI tools using OpenAI API for predictive analytics to inform business decisions.",
    longDescription: "During my internship at Sam, I built AI-powered tools using the OpenAI API for predictive analytics, such as sales order closure likelihood assessment. These tools helped inform business decisions and improved sales follow-up efficiency by approximately 15%. I later transitioned into a full-stack role, implementing C# backend services integrated with video conferencing platforms like Zoom, Teams, and Google Meet.",
    image: "/images/projects/nodejs-api.jpg",
    technologies: ["Python", "OpenAI API", "AI/ML", "Predictive Analytics", "C#"],
    featured: false,
  },
  {
    id: "data-automation",
    title: "Warehouse Automation System",
    description: "Created automation scripts for warehouse management and label printing across multiple locations.",
    longDescription: "During my internship at T & R Sports, I developed Python scripts for automating critical warehouse operations, including label printing, stock updates, and warehouse distribution across three cities. I managed company databases and automated data synchronization to online Excel sheets and third-party platforms. The automation scripts reduced manual data entry workload by approximately 25% and significantly improved fulfillment tracking while minimizing shipping errors.",
    image: "/images/projects/php-laravel.jpg",
    technologies: ["Python", "Automation", "Data Management", "Warehouse Systems"],
    featured: false,
  },
  {
    id: "ci-cd-pipelines",
    title: "CI/CD Implementation",
    description: "Implemented CI/CD pipelines using Jenkins and GitLab CI for rapid and reliable software releases.",
    longDescription: "As part of my internship at Zhu Zuo Ji Company, I implemented CI/CD pipelines using Jenkins and GitLab CI, enabling rapid and reliable software releases. This implementation decreased deployment-related errors by approximately 40%. I also enhanced system performance by around 15% through optimized RESTful APIs and effective caching strategies.",
    image: "/images/projects/microservices.jpg",
    technologies: ["Jenkins", "GitLab CI", "CI/CD", "DevOps", "Software Engineering"],
    featured: false,
  },
  {
    id: "nodejs-express-api",
    title: "Node.js Express API Integration",
    description: "Built RESTful APIs with Node.js/Express for client data processing and file uploads.",
    longDescription: "Implemented additional Node.js (Express) APIs to handle user data and file uploads, integrating with existing front-end components. The system included secure JWT authentication, middleware for request validation, and cloud storage integration for uploaded files. The API endpoints supported complex filtering and sorting options, pagination, and comprehensive error handling. This streamlined internal workflows for collecting and processing client submissions, reducing manual data entry by approximately 30% and accelerating the client onboarding process significantly.",
    image: "/images/projects/nodejs-api.jpg",
    technologies: ["Node.js", "Express.js", "REST API", "JWT", "MongoDB", "File Processing"],
    featured: true,
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

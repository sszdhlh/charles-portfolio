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
    id: "healthypet",
    title: "HealthyPet Application",
    description: "Developed a React-based pet application with features for pet information display, boarding, marketplace, and blog functionality.",
    longDescription: "Created a comprehensive pet management application using React and Vite that allows users to view detailed pet information cards, book pet boarding services, browse a pet-related marketplace, and access blog content. The application features a responsive design, secure login flows, and integration with AWS Lambda functions for backend processing. Database optimizations were implemented to improve data retrieval speeds by approximately 15%.",
    image: "/images/projects/cms-development.jpg",
    technologies: ["React", "Vite", "AWS Lambda", "Database Optimization", "Secure Authentication"],
    githubUrl: "https://github.com/sszdhlh/healthypet",
    featured: true,
  },
  {
    id: "ai-ticket-management",
    title: "AI-Driven Ticket Management System",
    description: "Developed a B2B ticket management system with AI assistant capabilities for startups.",
    longDescription: "Currently developing a comprehensive B2B ticket management system specifically designed for startups. The platform features AI-driven capabilities that function as an intelligent assistant, helping users find relevant tickets, automatically prioritize tasks, and send notifications. The system can understand natural language requests like 'find tickets related to payment issues' or 'set this as low priority and notify the team', streamlining workflow management and improving productivity for small teams with limited resources.",
    image: "/images/projects/api-development.jpg",
    technologies: ["React", "Express.js", "Node.js", "AI Integration", "RESTful API", "AWS"],
    githubUrl: "https://github.com/sszdhlh/sociamatic-crm",
    featured: true,
  },
  {
    id: "sociamatic-platform",
    title: "Sociamatic - Automated Content Publishing Platform",
    description: "Built a platform for automated content creation and publishing across multiple social media platforms.",
    longDescription: "Developed Sociamatic, an innovative platform that automates the creation and distribution of content across various social media channels. The system integrates Claude AI for text optimization and Midjourney for automated image generation. Users can create content once and have it automatically formatted and published to multiple platforms including Instagram, Twitter, Facebook, and LinkedIn. The platform handles scheduling, analytics tracking, and content performance optimization, significantly reducing the time and effort required for maintaining a consistent social media presence.",
    image: "/images/projects/cms-development.jpg",
    technologies: ["React", "Node.js", "Claude AI", "Midjourney", "Social Media APIs", "Automation"],
    githubUrl: "https://github.com/sszdhlh/ai-content-platform-temp",
    featured: true,
  },
  {
    id: "pte-reading-analyzer",
    title: "PTE Reading Analysis Tool",
    description: "Created an AI-powered tool for analyzing and providing detailed feedback on PTE reading test answers.",
    longDescription: "Developed a specialized tool that leverages the DeepSeek Open API to provide comprehensive analysis of PTE (Pearson Test of English) reading test answers. The application offers detailed feedback on answer quality, identifies areas for improvement, and provides specific suggestions to enhance performance. This tool helps test-takers understand their strengths and weaknesses, significantly improving their preparation strategy and ultimately their test scores.",
    image: "/images/projects/nodejs-api.jpg",
    technologies: ["DeepSeek API", "React", "Node.js", "NLP", "Educational Technology"],
    githubUrl: "https://github.com/sszdhlh/pte-reading-analyze",
    featured: true,
  },
  {
    id: "crazy-word-guess",
    title: "Crazy Word Guess Game",
    description: "Developed a word guessing game using React Native for cross-platform mobile deployment.",
    longDescription: "Created an engaging word guessing game application using React Native, enabling deployment across both iOS and Android platforms. The game features multiple difficulty levels, hint systems, and a progressive scoring mechanism to keep players engaged. Implemented clean, responsive UI design principles to ensure a smooth user experience across different device sizes and orientations.",
    image: "/images/projects/maui-development.jpg",
    technologies: ["React Native", "JavaScript", "Mobile Development", "Game Design", "Cross-platform"],
    githubUrl: "https://github.com/sszdhlh/CrazyWordGuess-master",
    liveUrl: "https://crazy-word-guess.netlify.app",
    featured: true,
  },
  {
    id: "ai-agent-mcp-workflow",
    title: "AI Agent with MCP Workflow Integration",
    description: "Implemented AI agents with Microsoft Copilot for Business workflow automation.",
    longDescription: "Designed and implemented a system that integrates AI agents with Microsoft Copilot for Business (MCP) to automate complex workflows. The solution enables intelligent task routing, document processing, and decision support based on natural language inputs. By combining the pattern recognition capabilities of AI with structured workflow processes, the system significantly reduces manual intervention requirements while improving accuracy and consistency in business operations.",
    image: "/images/projects/cloud-deployment.jpg",
    technologies: ["AI Agents", "Microsoft Copilot", "Workflow Automation", "Natural Language Processing", "Business Process Optimization"],
    githubUrl: "https://github.com/sszdhlh/cline_test",
    featured: true,
  },
  {
    id: "nodejs-backend-api",
    title: "Node.js REST API Backend",
    description: "Developed a scalable REST API backend using Node.js, Express and MongoDB for a client management system.",
    longDescription: "Designed and implemented a comprehensive backend solution using Node.js and Express.js with a MongoDB database. The API included JWT authentication, role-based permissions, complex data aggregation, and real-time notifications via WebSockets. Achieved high performance with proper indexing and caching strategies, reducing response times by approximately 40% compared to the previous solution.",
    image: "/images/projects/api-development.jpg",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "WebSockets", "API Design"],
    githubUrl: "https://github.com/sszdhlh/sociamatic-crm-api",
    featured: false,
  },
  {
    id: "aws-cloud-deployment",
    title: "AWS Cloud Infrastructure & CI/CD",
    description: "Implemented AWS cloud infrastructure with automated CI/CD pipelines for reliable deployments.",
    longDescription: "Designed and implemented a comprehensive AWS cloud infrastructure including EC2, S3, DynamoDB, and Lambda services. Created automated CI/CD pipelines using GitHub Actions and AWS CodePipeline to enable seamless testing and deployment processes. The infrastructure supported high availability with load balancing and auto-scaling capabilities, while the CI/CD implementation reduced deployment times by approximately 70% and virtually eliminated deployment-related errors.",
    image: "/images/projects/cloud-deployment.jpg",
    technologies: ["AWS", "DynamoDB", "CI/CD", "GitHub Actions", "Infrastructure as Code"],
    githubUrl: "https://github.com/sszdhlh/aws-cloud-infrastructure",
    featured: false,
  },
  {
    id: "ai-image-recognition",
    title: "Citrus Disease Detection with YOLOV5",
    description: "Developed an AI-based image recognition system for detecting citrus yellow shoot disease.",
    longDescription: "Researched and developed an AI-based image recognition system using YOLOV5 for the detection of citrus yellow shoot disease. The project involved collecting and labeling a dataset of citrus plant images, training a custom YOLOV5 model, and optimizing it for high accuracy disease detection. The resulting system achieved over 90% accuracy in identifying infected plants, providing a valuable tool for early disease detection and management in agricultural settings. This research was published in Highlights in Science, Engineering and Technology.",
    image: "/images/projects/microservices.jpg",
    technologies: ["YOLOV5", "Computer Vision", "Python", "Deep Learning", "Image Recognition", "Agricultural Technology"],
    githubUrl: "https://github.com/sszdhlh/ai-content-platform-temp",
    featured: true,
  },
  {
    id: "kafka-websocket-integration",
    title: "Real-time System with Kafka & WebSocket",
    description: "Built a real-time data processing system using Kafka for message queuing and WebSocket for client updates.",
    longDescription: "Designed and implemented a high-performance real-time data processing system that leverages Apache Kafka for reliable message queuing and WebSocket for instant client updates. The system handles high-volume data streams, processes them through configurable pipelines, and delivers real-time updates to connected clients. This architecture enabled handling of thousands of messages per second while maintaining low latency and high reliability, making it suitable for applications requiring immediate data visibility such as monitoring dashboards and collaborative tools.",
    image: "/images/projects/database-optimization.jpg",
    technologies: ["Kafka", "WebSocket", "Node.js", "Real-time Processing", "Distributed Systems"],
    githubUrl: "https://github.com/sszdhlh/realtime-kafka-system",
    featured: false,
  },
  {
    id: "e-commerce-management",
    title: "E-commerce Management System",
    description: "Developed a comprehensive e-commerce management system using Vue.js and RESTful APIs.",
    longDescription: "Created a full-featured e-commerce management system using Vue.js for the frontend and Node.js with Express for the backend. The system includes inventory management, order processing, customer relationship management, and analytics dashboards. Implemented RESTful APIs for all business operations, enabling easy integration with mobile applications and third-party services. The solution streamlined operations for online retailers, reducing order processing time by approximately 35% and improving inventory accuracy.",
    image: "/images/projects/php-laravel.jpg",
    technologies: ["Vue.js", "Node.js", "Express", "RESTful API", "E-commerce", "MySQL"],
    githubUrl: "https://github.com/sszdhlh/ecommerce-management",
    liveUrl: "https://ecommerce-demo.netlify.app",
    featured: false,
  },
  {
    id: "secure-login-flow",
    title: "Secure Authentication System",
    description: "Implemented a secure authentication system with multi-factor authentication and role-based access control.",
    longDescription: "Designed and implemented a robust authentication system featuring multi-factor authentication, secure password policies, and comprehensive role-based access control. The system includes social login options, passwordless authentication flows, and detailed security logging. Implemented using industry best practices for security, including proper encryption, protection against common attack vectors, and compliance with relevant data protection regulations.",
    image: "/images/projects/secure-auth.jpg",
    technologies: ["JWT", "OAuth", "Security", "Node.js", "AWS Cognito", "Access Control"],
    githubUrl: "https://github.com/sszdhlh/luffy-crm",
    featured: false,
  },
  {
    id: "warehouse-management",
    title: "Warehouse Management System",
    description: "Developed a cross-platform warehouse management system using .NET MAUI and Xamarin, integrated with Infor M3 ERP.",
    longDescription: "Led the development of a comprehensive warehouse management system, transitioning from Xamarin to .NET MAUI for enhanced cross-platform capabilities. The system features real-time inventory tracking, barcode scanning integration, and seamless synchronization with Infor M3 ERP. Implemented offline-first architecture for reliable operation in areas with poor connectivity, and optimized warehouse operations resulting in a 30% reduction in picking time. The solution includes advanced features such as batch tracking, expiry date management, and automated replenishment suggestions.",
    image: "/images/projects/maui-development.jpg",
    technologies: [".NET MAUI", "Xamarin", "Infor M3 Integration", "Barcode Scanning", "SQLite", "REST APIs"],
    githubUrl: "https://github.com/sszdhlh/warehouse-management",
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

"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const techStacks = [
  { 
    name: "React", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "A JavaScript library for building user interfaces with powerful component-based architecture and state management"
  },
  { 
    name: "Node.js", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "A JavaScript runtime built on Chrome's V8 engine, perfect for building fast, scalable server-side applications"
  },
  { 
    name: "Vue.js", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    description: "A progressive JavaScript framework that's easy to learn and ideal for building modern user interfaces"
  },
  { 
    name: "TypeScript", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: "A typed superset of JavaScript that enhances code maintainability and reliability"
  },
  { 
    name: ".NET", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    description: "A cross-platform framework developed by Microsoft for building high-performance web applications and services"
  },
  { 
    name: "Next.js", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description: "A React framework offering server-side rendering and static site generation for optimized performance and SEO"
  },
  { 
    name: ".NET MAUI", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    description: "A modern framework for building cross-platform warehouse management systems with native UI and seamless inventory tracking capabilities"
  },
  { 
    name: "Xamarin", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg",
    description: "A robust platform for developing cross-platform warehouse management applications with real-time inventory control and barcode scanning features"
  },
];


export function TechStackCarousel() {
  const [api, setApi] = React.useState<any>();
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (!api || isPaused) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2500);

    return () => clearInterval(interval);
  }, [api, isPaused]);

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      setApi={setApi}
      className="w-full max-w-3xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <CarouselContent className="-ml-1 transition-transform duration-1000 ease-in-out">
        {techStacks.map((tech, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/3">
            <div className="p-2">
              <Card className="h-full">
                <CardContent className="flex flex-col items-center justify-center p-4 h-full">
                  <div className="relative w-16 h-16 mb-2">
                    <Image
                      src={tech.icon}
                      alt={`${tech.name} icon`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <HoverCard openDelay={200} closeDelay={100}>
                    <HoverCardTrigger>
                      <h3 className="text-sm font-medium text-center hover:text-primary cursor-pointer transition-colors duration-200">{tech.name}</h3>
                    </HoverCardTrigger>
                    <HoverCardContent className="text-sm p-2 w-48 bg-black/80 text-white border-none shadow-lg rounded-lg -mt-2">
                      {tech.description}
                    </HoverCardContent>
                  </HoverCard>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
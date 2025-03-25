"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Skills data organized by category
const skillsData = {
  languages: [
    { name: "C#", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "Java", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "HTML5/CSS3", level: "Advanced" },
  ],
  frameworks: [
    { name: ".NET MAUI", level: "Advanced" },
    { name: "Xamarin", level: "Advanced" },
    { name: "AngularJS", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Next.js", level: "Beginner" },
  ],
  tools: [
    { name: "Visual Studio", level: "Advanced" },
    { name: "AWS Lambda", level: "Intermediate" },
    { name: "AWS CloudFormation", level: "Intermediate" },
    { name: "AWS Cognito", level: "Intermediate" },
    { name: "Jira", level: "Advanced" },
    { name: "Confluence", level: "Advanced" },
    { name: "Git", level: "Advanced" },
    { name: "GitHub Actions", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" },
    { name: "Jenkins", level: "Beginner" },
  ],
  databases: [
    { name: "SQL Server", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "MongoDB", level: "Beginner" },
    { name: "Database Optimization", level: "Intermediate" },
  ],
};

type SkillLevel = "Advanced" | "Intermediate" | "Beginner";
type BadgeVariant = "default" | "secondary" | "outline" | "destructive";

// Badge color based on skill level
const getBadgeVariant = (level: SkillLevel): BadgeVariant => {
  switch (level) {
    case "Advanced":
      return "default";
    case "Intermediate":
      return "secondary";
    case "Beginner":
      return "outline";
    default:
      return "default";
  }
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skills & Expertise
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Technologies and tools I work with on a daily basis.
            </p>
          </div>
          <Separator className="my-4" />
        </div>

        <div className="mt-8">
          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
              <TabsTrigger value="tools">Tools & DevOps</TabsTrigger>
              <TabsTrigger value="databases">Databases</TabsTrigger>
            </TabsList>
            {Object.entries(skillsData).map(([category, skills]) => (
              <TabsContent key={category} value={category} className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant={getBadgeVariant(skill.level as SkillLevel)}
                          className="py-2 text-sm"
                        >
                          {skill.name}
                          <span className="ml-1 opacity-70 text-xs">
                            ({skill.level})
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Skill meter section - visual representation */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">.NET Development</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>C# & .NET Core</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>.NET MAUI & Xamarin</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Visual Studio & Tools</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Cloud & DevOps</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>AWS Services</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>CI/CD & GitHub Actions</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Database Optimization</span>
                  <span>70%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

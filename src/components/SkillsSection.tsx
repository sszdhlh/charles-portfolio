"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Skills data organized by category
const skillsData = {
  languages: [
    { name: "JavaScript", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Python", level: "Intermediate" },
    { name: "C#", level: "Intermediate" },
    { name: "PHP", level: "Intermediate" },
    { name: "Java", level: "Intermediate" },
    { name: "HTML5/CSS3", level: "Advanced" },
  ],
  frameworks: [
    { name: "React", level: "Advanced" },
    { name: "Next.js", level: "Advanced" },
    { name: "Node.js", level: "Advanced" },
    { name: "Express.js", level: "Advanced" },
    { name: "Vue.js", level: "Intermediate" },
    { name: "React Native", level: "Intermediate" },
    { name: "Django", level: "Intermediate" },
    { name: ".NET MAUI", level: "Intermediate" },
  ],
  tools: [
    { name: "AWS Services", level: "Advanced" },
    { name: "CI/CD Pipelines", level: "Advanced" },
    { name: "Kafka", level: "Advanced" },
    { name: "WebSocket", level: "Advanced" },
    { name: "AI Agents", level: "Advanced" },
    { name: "Microsoft Copilot", level: "Advanced" },
    { name: "Jira", level: "Advanced" },
    { name: "Confluence", level: "Advanced" },
    { name: "Git/GitHub", level: "Advanced" },
    { name: "Draw.io", level: "Advanced" },
    { name: "Docker", level: "Intermediate" },
    { name: "Jenkins", level: "Intermediate" },
  ],
  databases: [
    { name: "MySQL", level: "Advanced" },
    { name: "PostgreSQL", level: "Advanced" },
    { name: "DynamoDB", level: "Advanced" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Database Optimization", level: "Advanced" },
    { name: "Redis", level: "Intermediate" },
  ],
  ai: [
    { name: "OpenAI API Integration", level: "Advanced" },
    { name: "Claude API Integration", level: "Advanced" },
    { name: "DeepSeek API", level: "Advanced" },
    { name: "AI Workflow Automation", level: "Advanced" },
    { name: "YOLOV5 Image Recognition", level: "Advanced" },
    { name: "Midjourney Integration", level: "Intermediate" },
    { name: "NLP Applications", level: "Intermediate" },
    { name: "AI Agent Development", level: "Advanced" },
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
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="languages">Languages</TabsTrigger>
              <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
              <TabsTrigger value="tools">Tools & DevOps</TabsTrigger>
              <TabsTrigger value="databases">Databases</TabsTrigger>
              <TabsTrigger value="ai">AI & ML</TabsTrigger>
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
            <h3 className="text-xl font-semibold mb-4">AI & Automation</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>AI Integration & Agents</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Workflow Automation</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>AI APIs (OpenAI, Claude, DeepSeek)</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>React & Next.js</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Node.js & Express</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>RESTful API Design</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Cloud & Real-time Systems</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>AWS Cloud Services</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Kafka & WebSocket</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Database Systems (SQL & NoSQL)</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
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
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Mobile & Frontend</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Mobile App Development</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Responsive UI/UX</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Cross-Platform Solutions</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

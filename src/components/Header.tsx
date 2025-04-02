"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll to section and update active section
  const handleScroll = (sectionId: string) => {
    setActiveSection(sectionId.replace("#", ""));
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-bold text-xl mr-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="hidden sm:inline-block">Charles Zhang</span>
            <span className="text-primary text-sm font-normal hidden sm:inline-block">Full Stack Developer</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === link.href.replace("#", "")
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => {
                      handleScroll(link.href);
                      // Close the sheet after clicking a link
                      document.body.click();
                    }}
                    className={`text-sm font-medium transition-colors hover:text-primary p-2 ${
                      activeSection === link.href.replace("#", "")
                        ? "text-primary bg-muted"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

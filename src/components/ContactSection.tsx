"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Github, Linkedin, Mail, MessageSquare, Phone, Twitter } from "lucide-react";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSubmitted(true);
      form.reset();

      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  }

  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>
          <Separator className="my-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Contact Information */}
          <Card className="border border-border bg-background/60 backdrop-blur">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:cicr90177@gmail.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      cicr90177@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+61490892730"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +61 490 892 730
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Social Media</p>
                    <div className="flex gap-2 mt-2">
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href="https://github.com/sszdhlh"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href="https://linkedin.com/in/uqcharles"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium mb-2">Location</h4>
                <p className="text-sm text-muted-foreground">
                  Brisbane, QLD 4109<br />
                  Available for both on-site and remote work
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="border border-border bg-background/60 backdrop-blur">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Send a Message</h3>

              {isSubmitted ? (
                <div className="bg-green-500/10 text-green-500 p-4 rounded-lg flex flex-col items-center justify-center text-center h-[300px]">
                  <h4 className="font-bold text-lg mb-2">Message Sent!</h4>
                  <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject of your message" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message..."
                              className="min-h-[120px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

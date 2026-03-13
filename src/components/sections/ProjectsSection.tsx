"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "AgriSense",
    description: "An intelligent agriculture decision support system using machine learning pipelines to optimize farming practices and yield prediction.",
    stack: ["Python", "Machine Learning", "Node.js"],
    github: "https://github.com/Abhijithmna18/AgriSense",
  },
  {
    title: "Farm AI – Smart Agriculture Assistance",
    description: "An AI-powered application providing smart agricultural insights, crop recommendations, and disease detection.",
    stack: ["Python", "Machine Learning", "Node.js", "REST APIs"],
    github: "https://github.com/Abhijithmna18/farm-dashboard",
  },
  {
    title: "E-commerce Microservices",
    description: "A scalable e-commerce platform built with microservices architecture for handling distributed transactions and services.",
    stack: ["Go", "Microservices", "Docker", "REST APIs"],
    github: "https://github.com/Abhijithmna18/ecommerce-microservices",
  },
  {
    title: "Wikidata",
    description: "A data management and visualization platform for organizing and presenting structured information.",
    stack: ["JavaScript", "Data Visualization", "Web Development"],
    github: "https://github.com/Abhijithmna18/wikidata",
  },
  {
    title: "Java Micro Project",
    description: "LAN-based one-to-one real-time chat application in Java with socket programming and network communication.",
    stack: ["Java", "Socket Programming", "Networking"],
    github: "https://github.com/Abhijithmna18/Java-Micro_project",
  },
  {
    title: "PHP E-commerce Project",
    description: "A full-stack e-commerce web application with product management, shopping cart, and payment integration.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    github: "https://github.com/Abhijithmna18/Php-project",
  },
  {
    title: "AWS Cloud Services",
    description: "Implementation of cloud infrastructure and services on Amazon Web Services platform.",
    stack: ["AWS", "Cloud Computing", "DevOps"],
    github: "https://github.com/Abhijithmna18/AWS",
  },
  {
    title: "Data Structures Micro Project",
    description: "Implementation of various data structures and algorithms in Python for efficient problem solving.",
    stack: ["Python", "Data Structures", "Algorithms"],
    github: "https://github.com/Abhijithmna18/Micro-project-of-Data-structure",
  },
  {
    title: "College Demo Project",
    description: "My first Git repository showcasing foundational web development skills and learning journey.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Abhijithmna18/college-_demo",
  }
];

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="pt-[100px] pb-[100px] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my recent works encompassing web development, backend systems, and AI integrations." 
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group cursor-pointer interactive"
              onClick={() => window.open(project.github, "_blank")}
            >
              <motion.div 
                className="glass rounded-2xl p-8 h-full transition-all duration-500 relative overflow-hidden flex flex-col border border-white/10 hover:border-primary/30 shadow-lg hover:shadow-primary/20"
                animate={{
                  rotateX: hoveredProject === index ? 5 : 0,
                  rotateY: hoveredProject === index ? -5 : 0,
                  scale: hoveredProject === index ? 1.03 : 1,
                  y: hoveredProject === index ? -8 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{ perspective: 1000 }}
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
                
                {/* Glow effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-700" />
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <motion.div 
                    className="p-3 glass-strong rounded-xl transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 interactive"
                    whileHover={{ rotate: 5 }}
                  >
                    <Github className="w-8 h-8 text-white/70 group-hover:text-primary transition-colors" />
                  </motion.div>
                  <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors" />
                </div>

                <h3 className="text-2xl font-bold mb-3 relative z-10 text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/70 text-base mb-8 flex-grow relative z-10 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.stack.map(tech => (
                    <motion.span 
                      key={tech} 
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all cursor-default interactive"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

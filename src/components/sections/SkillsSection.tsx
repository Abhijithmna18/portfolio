"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Code2, Server, Database, Brain, Wrench, Layers, Terminal, Cloud, Shield, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6 text-accent" />,
    skills: ["Node.js", "Express.js", "FastAPI", "Django", "REST APIs", "Microservices"]
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis"]
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6 text-accent" />,
    skills: ["TensorFlow", "PyTorch", "YOLOv8", "LLM Pipelines", "VectorDB", "RAG", "NLP"]
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6 text-primary" />,
    skills: ["Git", "Docker", "AWS", "GCP", "Linux", "CI/CD", "Postman"]
  },
  {
    title: "Concepts & Testing",
    icon: <Layers className="w-6 h-6 text-accent" />,
    skills: [
      "DSA", "System Design", "SDLC", "OOP",
      "API Testing", "Integration Testing", "Debugging"
    ]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="pt-[100px] pb-[100px] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="My toolkit for building modern applications and intelligent systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass rounded-2xl p-8 shadow-lg transition-all duration-500 group relative overflow-hidden hover:scale-[1.05] hover:-translate-y-2 hover:border-primary/30 cursor-default border border-white/10 interactive"
            >
              {/* Animated background glow */}
              <div className="absolute -right-16 -top-16 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-accent/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <motion.div 
                  className="p-3 glass-strong rounded-xl group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skill} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    className="px-4 py-2 bg-primary/5 rounded-full text-sm font-medium text-white/80 group-hover:text-white border border-white/10 group-hover:border-primary/30 transition-all hover:bg-primary/10 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

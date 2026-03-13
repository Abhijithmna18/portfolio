"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "AgriSense",
    description: "An intelligent agriculture decision support system using machine learning pipelines to optimize farming practices and yield prediction.",
    stack: ["Python", "Machine Learning", "Node.js"],
    github: "https://github.com/Abhijithmna18/AgriSense",
    gradient: "from-emerald-500/20 via-cyan-400/15 to-blue-500/20",
    accent: "rgba(16, 185, 129, 0.5)",
  },
  {
    title: "Farm AI – Smart Agriculture Assistance",
    description: "An AI-powered application providing smart agricultural insights, crop recommendations, and disease detection.",
    stack: ["Python", "Machine Learning", "Node.js", "REST APIs"],
    github: "https://github.com/Abhijithmna18/farm-dashboard",
    gradient: "from-blue-500/20 via-indigo-400/15 to-purple-500/20",
    accent: "rgba(37, 99, 235, 0.5)",
  },
  {
    title: "E-commerce Microservices",
    description: "A scalable e-commerce platform built with microservices architecture for handling distributed transactions and services.",
    stack: ["Go", "Microservices", "Docker", "REST APIs"],
    github: "https://github.com/Abhijithmna18/ecommerce-microservices",
    gradient: "from-cyan-500/20 via-teal-400/15 to-emerald-500/20",
    accent: "rgba(6, 182, 212, 0.5)",
  },
  {
    title: "Wikidata",
    description: "A data management and visualization platform for organizing and presenting structured information.",
    stack: ["JavaScript", "Data Visualization", "Web Development"],
    github: "https://github.com/Abhijithmna18/wikidata",
    gradient: "from-purple-500/20 via-pink-400/15 to-rose-500/20",
    accent: "rgba(139, 92, 246, 0.5)",
  },
  {
    title: "Java Micro Project",
    description: "LAN-based one-to-one real-time chat application in Java with socket programming and network communication.",
    stack: ["Java", "Socket Programming", "Networking"],
    github: "https://github.com/Abhijithmna18/Java-Micro_project",
    gradient: "from-orange-500/20 via-amber-400/15 to-yellow-500/20",
    accent: "rgba(249, 115, 22, 0.5)",
  },
  {
    title: "PHP E-commerce Project",
    description: "A full-stack e-commerce web application with product management, shopping cart, and payment integration.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    github: "https://github.com/Abhijithmna18/Php-project",
    gradient: "from-rose-500/20 via-fuchsia-400/15 to-purple-500/20",
    accent: "rgba(244, 63, 94, 0.5)",
  },
  {
    title: "AWS Cloud Services",
    description: "Implementation of cloud infrastructure and services on Amazon Web Services platform.",
    stack: ["AWS", "Cloud Computing", "DevOps"],
    github: "https://github.com/Abhijithmna18/AWS",
    gradient: "from-amber-500/20 via-orange-400/15 to-red-500/20",
    accent: "rgba(245, 158, 11, 0.5)",
  },
  {
    title: "Data Structures Micro Project",
    description: "Implementation of various data structures and algorithms in Python for efficient problem solving.",
    stack: ["Python", "Data Structures", "Algorithms"],
    github: "https://github.com/Abhijithmna18/Micro-project-of-Data-structure",
    gradient: "from-teal-500/20 via-emerald-400/15 to-green-500/20",
    accent: "rgba(20, 184, 166, 0.5)",
  },
  {
    title: "College Demo Project",
    description: "My first Git repository showcasing foundational web development skills and learning journey.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Abhijithmna18/college-_demo",
    gradient: "from-indigo-500/20 via-blue-400/15 to-sky-500/20",
    accent: "rgba(99, 102, 241, 0.5)",
  }
];

function ProjectTiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 180, damping: 20 });
  const glareX = useTransform(mx, [0, 1], [0, 100]);
  const glareY = useTransform(my, [0, 1], [0, 100]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onMouseLeave={() => { mx.set(0.5); my.set(0.5); }}
      style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: "preserve-3d" }}
      className={className}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.07) 0%, transparent 60%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="pt-[100px] pb-[100px] relative overflow-hidden" style={{ perspective: "1200px" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      {/* Ambient orbs */}
      <motion.div
        className="absolute top-[15%] right-[5%] w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.05]"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,1), transparent)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[15%] left-[5%] w-[350px] h-[350px] rounded-full blur-[120px] opacity-[0.05]"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,1), transparent)" }}
        animate={{ scale: [1, 1.3, 1], y: [0, 25, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 3 + Math.random() * 5,
            height: 3 + Math.random() * 5,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(37,99,235,0.5)' : 'rgba(6,182,212,0.5)'}, transparent)`,
          }}
          animate={{
            y: [0, -25, 0, 18, 0],
            opacity: [0.2, 0.6, 0.3, 0.5, 0.2],
          }}
          transition={{ duration: 7 + Math.random() * 3, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
        />
      ))}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my recent works encompassing web development, backend systems, and AI integrations." 
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: -6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="group cursor-pointer"
              onClick={() => window.open(project.github, "_blank")}
            >
              <ProjectTiltCard className="relative h-full">
                <div
                  className="rounded-2xl p-8 h-full transition-all duration-500 relative overflow-hidden flex flex-col border border-white/[0.08] hover:border-white/20"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                    backdropFilter: "blur(20px) saturate(1.3)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Hover gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`} />

                  {/* Shimmer sweep */}
                  <motion.div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <motion.div
                      className="absolute w-[200%] h-full"
                      style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 55%, transparent 100%)" }}
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                    />
                  </motion.div>

                  {/* Accent top line */}
                  <motion.div
                    className="absolute top-0 left-[10%] right-[10%] h-[1px]"
                    style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.06 }}
                    viewport={{ once: true }}
                  />
                  
                  <div className="flex justify-between items-start mb-6 relative z-10" style={{ transformStyle: "preserve-3d", transform: "translateZ(25px)" }}>
                    <motion.div 
                      className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110 border border-white/10"
                      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))" }}
                      whileHover={{ rotate: 5 }}
                    >
                      <Github className="w-8 h-8 text-white/70 group-hover:text-primary transition-colors" />
                    </motion.div>
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors" />
                    </motion.div>
                  </div>

                  <h3
                    className="text-2xl font-bold mb-3 relative z-10 text-white group-hover:text-primary transition-colors"
                    style={{ transformStyle: "preserve-3d", transform: "translateZ(15px)" }}
                  >
                    {project.title}
                  </h3>
                  
                  <p
                    className="text-white/70 text-base mb-8 flex-grow relative z-10 leading-relaxed"
                    style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 relative z-10" style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}>
                    {project.stack.map(tech => (
                      <motion.span 
                        key={tech} 
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 rounded-full text-sm font-medium text-primary border border-primary/20 hover:border-primary/40 transition-all cursor-default"
                        style={{ background: "rgba(37, 99, 235, 0.08)" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </ProjectTiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

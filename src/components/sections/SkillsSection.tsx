"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Code2, Server, Database, Brain, Wrench, Layers } from "lucide-react";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
    gradient: "from-blue-500/20 to-indigo-500/20",
    accent: "rgba(37, 99, 235, 0.5)",
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6 text-accent" />,
    skills: ["Node.js", "Express.js", "FastAPI", "Django", "REST APIs", "Microservices"],
    gradient: "from-cyan-500/20 to-teal-500/20",
    accent: "rgba(6, 182, 212, 0.5)",
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis"],
    gradient: "from-emerald-500/20 to-blue-500/20",
    accent: "rgba(16, 185, 129, 0.5)",
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="w-6 h-6 text-accent" />,
    skills: ["TensorFlow", "PyTorch", "YOLOv8", "LLM Pipelines", "VectorDB", "RAG", "NLP"],
    gradient: "from-purple-500/20 to-pink-500/20",
    accent: "rgba(139, 92, 246, 0.5)",
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6 text-primary" />,
    skills: ["Git", "Docker", "AWS", "GCP", "Linux", "CI/CD", "Postman"],
    gradient: "from-orange-500/20 to-amber-500/20",
    accent: "rgba(249, 115, 22, 0.5)",
  },
  {
    title: "Concepts & Testing",
    icon: <Layers className="w-6 h-6 text-accent" />,
    skills: ["DSA", "System Design", "SDLC", "OOP", "API Testing", "Integration Testing", "Debugging"],
    gradient: "from-rose-500/20 to-fuchsia-500/20",
    accent: "rgba(244, 63, 94, 0.5)",
  }
];

function SkillTiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-10, 10]), { stiffness: 200, damping: 20 });
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
      style={{ rotateX, rotateY, transformPerspective: 800, transformStyle: "preserve-3d" }}
      className={className}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.08) 0%, transparent 60%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="pt-[100px] pb-[100px] relative overflow-hidden" style={{ perspective: "1200px" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      {/* Ambient orbs */}
      <motion.div
        className="absolute top-[30%] left-[10%] w-[350px] h-[350px] rounded-full blur-[120px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,1), transparent)" }}
        animate={{ scale: [1, 1.2, 1], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] right-[15%] w-[300px] h-[300px] rounded-full blur-[100px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,1), transparent)" }}
        animate={{ scale: [1, 1.3, 1], x: [0, -25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 3 + Math.random() * 4,
            height: 3 + Math.random() * 4,
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(139,92,246,0.5)' : 'rgba(6,182,212,0.5)'}, transparent)`,
          }}
          animate={{
            y: [0, -20, 0, 12, 0],
            opacity: [0.2, 0.6, 0.3, 0.5, 0.2],
          }}
          transition={{ duration: 6 + Math.random() * 3, repeat: Infinity, delay: i * 0.9, ease: "easeInOut" }}
        />
      ))}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="My toolkit for building modern applications and intelligent systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <SkillTiltCard className="group relative">
                <div
                  className="rounded-2xl p-8 transition-all duration-500 relative overflow-hidden cursor-default border border-white/[0.08] hover:border-white/20"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                    backdropFilter: "blur(20px) saturate(1.3)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Hover gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`} />

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
                    style={{ background: `linear-gradient(90deg, transparent, ${category.accent}, transparent)` }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
                    viewport={{ once: true }}
                  />
                  
                  <div className="flex items-center gap-4 mb-6 relative z-10" style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}>
                    <motion.div 
                      className="p-3 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors"
                      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))" }}
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 relative z-10" style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}>
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span 
                        key={skill} 
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.3 + skillIndex * 0.05, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 rounded-full text-sm font-medium text-white/80 group-hover:text-white border border-white/10 group-hover:border-primary/30 transition-all cursor-default"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </SkillTiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

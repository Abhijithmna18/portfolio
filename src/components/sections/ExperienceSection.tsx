"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const internships = [
  {
    id: 1,
    role: "Gen AI Intern",
    company: "Jethur",
    date: "2026",
    tasks: [
      "Built LLM evaluation pipeline",
      "Implemented RAG architecture",
      "Used embeddings and vector database"
    ],
    gradient: "from-blue-500/20 via-cyan-400/15 to-purple-500/20",
    accentColor: "rgb(6, 182, 212)",
    glowColor: "rgba(6, 182, 212, 0.4)",
  },
  {
    id: 2,
    role: "Node.js Intern",
    company: "Leopard Tech Labs",
    date: "April 2025",
    tasks: [
      "Developed backend modules",
      "Implemented CRUD APIs",
      "Built routing architecture"
    ],
    gradient: "from-emerald-500/20 via-blue-400/15 to-indigo-500/20",
    accentColor: "rgb(37, 99, 235)",
    glowColor: "rgba(37, 99, 235, 0.4)",
  }
];

/* ── Floating particle decoration ── */
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 4 + Math.random() * 6,
            height: 4 + Math.random() * 6,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(6,182,212,0.6)' : 'rgba(37,99,235,0.6)'}, transparent)`,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [0.3, 0.8, 0.4, 0.7, 0.3],
            scale: [1, 1.4, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ── 3D Tilt Card wrapper ── */
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });
  const glareX = useTransform(mouseX, [0, 1], [0, 100]);
  const glareY = useTransform(mouseY, [0, 1], [0, 100]);

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {/* Glare overlay */}
      <motion.div
        className="absolute inset-0 rounded-[18px] pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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

/* ── Animated timeline line ── */
function AnimatedTimeline() {
  return (
    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 md:-translate-x-1/2">
      <motion.div
        className="w-[2px] h-full"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(6,182,212,0.5) 20%, rgba(37,99,235,0.5) 50%, rgba(6,182,212,0.5) 80%, transparent)",
        }}
        initial={{ scaleY: 0, originY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      {/* Pulsing light traveling down the line */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-[6px] h-[40px] rounded-full"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(6,182,212,0.9), transparent)",
          filter: "blur(2px)",
        }}
        animate={{
          top: ["0%", "100%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1,
        }}
      />
    </div>
  );
}

/* ── Main Section ── */
export function ExperienceSection() {
  return (
    <section id="internships" className="pt-[100px] pb-[100px] relative overflow-hidden" style={{ perspective: "1200px" }}>
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-[0.07]"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,1), transparent)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full blur-[120px] opacity-[0.07]"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,1), transparent)" }}
        animate={{ scale: [1, 1.3, 1], x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <FloatingOrbs />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Internship Timeline" 
          subtitle="My professional journey traversing advanced backend development and AI paradigms."
        />

        <div className="max-w-4xl mx-auto relative pt-8 mt-12">
          <AnimatedTimeline />

          {internships.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative flex flex-col md:flex-row items-center justify-center mb-20 last:mb-0"
              initial={{ opacity: 0, y: 60, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* 3D Timeline Node */}
              <motion.div
                className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full z-20 md:-translate-x-1/2 -translate-x-[7px]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15, type: "spring", stiffness: 300 }}
                viewport={{ once: true }}
              >
                <div
                  className="w-full h-full rounded-full animate-pulse"
                  style={{
                    background: exp.accentColor,
                    boxShadow: `0 0 12px ${exp.glowColor}, 0 0 30px ${exp.glowColor}`,
                  }}
                />
              </motion.div>

              {/* Content Box with 3D Tilt */}
              <div className={`w-full md:w-[55%] pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-28 md:text-right md:mr-auto' : 'md:pl-20 md:ml-auto'}`}>
                <TiltCard className="group relative">
                  <div
                    className="rounded-[18px] p-6 md:p-8 relative overflow-hidden border border-white/[0.08] hover:border-white/20 transition-all duration-500"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                      backdropFilter: "blur(20px) saturate(1.3)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                  >
                    {/* Animated gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[18px]`}
                    />

                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 rounded-[18px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    >
                      <motion.div
                        className="absolute w-[200%] h-full"
                        style={{
                          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 55%, transparent 100%)",
                        }}
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                      />
                    </motion.div>

                    {/* Top accent line */}
                    <motion.div
                      className="absolute top-0 left-[10%] right-[10%] h-[1px]"
                      style={{ background: `linear-gradient(90deg, transparent, ${exp.accentColor}, transparent)` }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 0.5 }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
                      viewport={{ once: true }}
                    />

                    {/* Date badge with 3D depth */}
                    <motion.span
                      className="inline-block font-mono text-sm tracking-widest uppercase mb-3 relative z-10 px-3 py-1 rounded-full border"
                      style={{
                        color: exp.accentColor,
                        borderColor: `${exp.accentColor}33`,
                        background: `${exp.accentColor}0D`,
                        transformStyle: "preserve-3d",
                        transform: "translateZ(20px)",
                      }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                      viewport={{ once: true }}
                    >
                      {exp.date}
                    </motion.span>

                    {/* Role with staggered reveal */}
                    <motion.h3
                      className="text-2xl font-bold mb-1 relative z-10 text-white"
                      style={{ transformStyle: "preserve-3d", transform: "translateZ(15px)" }}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                      viewport={{ once: true }}
                    >
                      {exp.role}
                    </motion.h3>

                    {/* Company with subtle animation */}
                    <motion.h4
                      className="text-lg text-white/60 font-medium mb-6 relative z-10"
                      style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}
                      initial={{ opacity: 0, x: index % 2 === 0 ? 15 : -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                      viewport={{ once: true }}
                    >
                      {exp.company}
                    </motion.h4>
                    
                    {/* Tasks with staggered pop-in */}
                    <ul
                      className={`space-y-3 text-white/70 text-base relative z-10 ${index % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}
                      style={{ transformStyle: "preserve-3d", transform: "translateZ(5px)" }}
                    >
                      {exp.tasks.map((task, i) => (
                        <motion.li
                          key={i}
                          className={`flex items-start gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                          initial={{ opacity: 0, x: index % 2 === 0 ? 25 : -25, y: 10 }}
                          whileInView={{ opacity: 1, x: 0, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.7 + index * 0.15 + i * 0.1,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          viewport={{ once: true }}
                        >
                          <motion.span
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{
                              background: exp.accentColor,
                              boxShadow: `0 0 8px ${exp.glowColor}`,
                            }}
                            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                          />
                          <span className={`${index % 2 === 0 ? 'text-left md:text-right' : 'text-left'} hover:text-white/90 transition-colors duration-300`}>
                            {task}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useRef } from "react";

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 });
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
            ([x, y]) => `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.06) 0%, transparent 60%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}

export function WorkExperienceSection() {
  const tasks = [
    "Worked on content analysis and data processing for UK-based client projects.",
    "Performed structured data validation, quality checks, and reporting using internal ERP systems.",
    "Followed strict accuracy, formatting, and documentation standards for business-critical content.",
    "Coordinated with team leads to meet delivery timelines and quality benchmarks.",
    "Developed strong skills in attention to detail, written communication, and process compliance."
  ];

  return (
    <section id="work-experience" className="pt-[100px] pb-[100px] relative overflow-hidden" style={{ perspective: "1200px" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      {/* Ambient orbs */}
      <motion.div
        className="absolute top-[25%] left-[10%] w-[350px] h-[350px] rounded-full blur-[120px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,1), transparent)" }}
        animate={{ scale: [1, 1.2, 1], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[30%] right-[15%] w-[280px] h-[280px] rounded-full blur-[100px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,1), transparent)" }}
        animate={{ scale: [1, 1.3, 1], x: [0, -20, 0] }}
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
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
            background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(37,99,235,0.5)' : 'rgba(6,182,212,0.5)'}, transparent)`,
          }}
          animate={{
            y: [0, -20, 0, 14, 0],
            opacity: [0.2, 0.6, 0.3, 0.5, 0.2],
          }}
          transition={{ duration: 6 + Math.random() * 3, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
        />
      ))}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Work Experience" 
        />

        <div className="max-w-4xl mx-auto relative pt-8 mt-4">
          {/* Animated vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full overflow-hidden">
            <motion.div
              className="w-full h-full"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(37,99,235,0.4) 20%, rgba(6,182,212,0.4) 80%, transparent)" }}
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>

          <div className="relative flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full text-center"
            >
              <TiltCard className="group relative">
                <div
                  className="rounded-2xl p-8 md:p-10 transition-all relative inline-block text-left w-full border border-white/[0.08] hover:border-white/20 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                    backdropFilter: "blur(20px) saturate(1.3)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-cyan-400/10 to-purple-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />

                  {/* Shimmer */}
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
                    className="absolute top-0 left-[5%] right-[5%] h-[1px]"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.5), rgba(6,182,212,0.5), transparent)" }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Icon badge with 3D depth */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border border-white/10 relative z-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                      transformStyle: "preserve-3d",
                      transform: "translateZ(25px)",
                    }}
                  >
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-accent font-mono text-sm tracking-widest uppercase">
                      Aug 2024 – Jan 2025
                    </span>
                  </motion.div>
                  
                  <motion.h3
                    className="text-3xl font-bold mb-2 relative z-10 text-white text-center"
                    style={{ transformStyle: "preserve-3d", transform: "translateZ(18px)" }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Associate Content Analyst
                  </motion.h3>
                  <motion.h4
                    className="text-lg text-white/60 mb-8 relative z-10 font-medium text-center"
                    style={{ transformStyle: "preserve-3d", transform: "translateZ(12px)" }}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Meta Algorithm Solutions Pvt. Ltd., Kochi
                  </motion.h4>
                  
                  <ul className="space-y-4 text-white/70 relative z-10 max-w-2xl mx-auto" style={{ transformStyle: "preserve-3d", transform: "translateZ(8px)" }}>
                    {tasks.map((task, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -25, y: 10 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.55 + 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4"
                      >
                        <motion.span
                          className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"
                          style={{ boxShadow: "0 0 8px rgba(37,99,235,0.5)" }}
                          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        />
                        <span className="text-base leading-relaxed hover:text-white/90 transition-colors duration-300">{task}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

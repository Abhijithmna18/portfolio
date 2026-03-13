"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { useRef } from "react";

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 });

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
      {children}
    </motion.div>
  );
}

export function EducationSection() {
  const education = [
    {
      degree: "Master of Computer Applications",
      school: "Amal Jyothi College of Engineering",
      years: "2024 – 2026",
      score: "CGPA: 7.49",
      accent: "rgba(37, 99, 235, 0.5)",
      gradient: "from-blue-500/20 to-indigo-500/20",
    },
    {
      degree: "Bachelor of Computer Applications",
      school: "Mar Augusthinose College",
      years: "2020 – 2023",
      score: null,
      accent: "rgba(6, 182, 212, 0.5)",
      gradient: "from-cyan-500/20 to-teal-500/20",
    }
  ];

  return (
    <section id="education" className="relative pt-[100px] pb-[100px] overflow-hidden" style={{ perspective: "1200px" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      {/* Ambient orbs */}
      <motion.div
        className="absolute top-[25%] right-[10%] w-[300px] h-[300px] rounded-full blur-[120px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,1), transparent)" }}
        animate={{ scale: [1, 1.2, 1], y: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
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
            background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(37,99,235,0.5)' : 'rgba(6,182,212,0.5)'}, transparent)`,
          }}
          animate={{
            y: [0, -20, 0, 12, 0],
            opacity: [0.2, 0.6, 0.3, 0.5, 0.2],
          }}
          transition={{ duration: 6 + Math.random() * 3, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Education" 
          subtitle="My academic foundation in theoretical and applied computer science."
        />
        
        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.15 * index, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <TiltCard className="group">
                <div
                  className="rounded-2xl p-8 border border-white/[0.08] hover:border-white/20 transition-all duration-500 flex flex-col md:flex-row gap-6 items-start md:items-center relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                    backdropFilter: "blur(20px) saturate(1.3)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Hover gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`} />

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
                    className="absolute top-0 left-[10%] right-[10%] h-[1px]"
                    style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  />

                  <motion.div
                    className="p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 relative z-10 border border-white/10"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                      transformStyle: "preserve-3d",
                      transform: "translateZ(25px)",
                    }}
                    whileHover={{ rotate: 8 }}
                  >
                    <GraduationCap className={`w-8 h-8 ${index === 0 ? 'text-primary' : 'text-accent'}`} />
                  </motion.div>
                  
                  <div className="flex-grow relative z-10" style={{ transformStyle: "preserve-3d", transform: "translateZ(12px)" }}>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {item.degree}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-white/70">
                      <span className="flex items-center gap-2 font-medium">
                        <MapPin className="w-4 h-4" />
                        {item.school}
                      </span>
                      <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-white/20" />
                      <span className="font-mono text-accent tracking-wide">{item.years}</span>
                    </div>
                  </div>
                  
                  {item.score && (
                    <motion.div
                      className="md:ml-auto px-5 py-2.5 rounded-xl border border-primary/20 text-primary font-bold relative z-10"
                      style={{
                        background: "rgba(37, 99, 235, 0.08)",
                        transformStyle: "preserve-3d",
                        transform: "translateZ(20px)",
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {item.score}
                    </motion.div>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

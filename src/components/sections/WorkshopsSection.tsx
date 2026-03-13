"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { BrainCircuit, Layers, LayoutTemplate, ShieldCheck } from "lucide-react";
import { useRef } from "react";

function WorkshopTiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

export function WorkshopsSection() {
  const workshops = [
    {
      title: "Machine Learning with Google Colab",
      icon: <BrainCircuit className="w-7 h-7 text-primary" />,
      gradient: "from-blue-500/20 to-indigo-500/20",
      accent: "rgba(37, 99, 235, 0.5)",
    },
    {
      title: "Microservices Architecture",
      icon: <Layers className="w-7 h-7 text-accent" />,
      gradient: "from-cyan-500/20 to-teal-500/20",
      accent: "rgba(6, 182, 212, 0.5)",
    },
    {
      title: "React JS",
      icon: <LayoutTemplate className="w-7 h-7 text-primary" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      accent: "rgba(139, 92, 246, 0.5)",
    },
    {
      title: "Cyber Security & Ethical Hacking",
      icon: <ShieldCheck className="w-7 h-7 text-accent" />,
      gradient: "from-emerald-500/20 to-cyan-500/20",
      accent: "rgba(16, 185, 129, 0.5)",
    }
  ];

  return (
    <section id="workshops" className="relative pt-[100px] pb-[100px] overflow-hidden" style={{ perspective: "1200px" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      {/* Ambient orb */}
      <motion.div
        className="absolute top-[30%] left-[15%] w-[280px] h-[280px] rounded-full blur-[110px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,1), transparent)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {[...Array(3)].map((_, i) => (
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
            y: [0, -18, 0, 12, 0],
            opacity: [0.2, 0.6, 0.3, 0.5, 0.2],
          }}
          transition={{ duration: 6 + Math.random() * 3, repeat: Infinity, delay: i * 0.8, ease: "easeInOut" }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Workshops & Seminars" 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.7, delay: 0.12 * index, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <WorkshopTiltCard className="group relative h-full">
                <div
                  className="rounded-2xl p-6 border border-white/[0.08] hover:border-white/20 flex items-center gap-5 transition-all duration-500 relative overflow-hidden h-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                    backdropFilter: "blur(20px) saturate(1.3)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  {/* Hover gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${workshop.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`} />

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
                    style={{ background: `linear-gradient(90deg, transparent, ${workshop.accent}, transparent)` }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  />

                  <motion.div
                    className="p-3 rounded-xl border border-white/10 relative z-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                      transformStyle: "preserve-3d",
                      transform: "translateZ(20px)",
                    }}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {workshop.icon}
                  </motion.div>
                  <h3
                    className="text-lg font-semibold text-white group-hover:text-primary transition-colors relative z-10"
                    style={{ transformStyle: "preserve-3d", transform: "translateZ(12px)" }}
                  >
                    {workshop.title}
                  </h3>
                </div>
              </WorkshopTiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

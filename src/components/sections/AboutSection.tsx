"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Server, Brain, Cpu, Cloud } from "lucide-react";
import { useRef } from "react";

const coreFocusAreas = [
  {
    title: "Scalable Backend Architecture",
    description: "Designing robust systems that handle growth efficiently",
    icon: <Server className="w-8 h-8 text-primary" />,
    gradient: "from-blue-500/20 to-indigo-500/20",
    accentColor: "rgba(37, 99, 235, 0.5)",
  },
  {
    title: "Applied Machine Learning",
    description: "Building intelligent solutions with ML models",
    icon: <Brain className="w-8 h-8 text-accent" />,
    gradient: "from-cyan-500/20 to-teal-500/20",
    accentColor: "rgba(6, 182, 212, 0.5)",
  },
  {
    title: "LLM Systems & RAG",
    description: "Implementing retrieval-augmented generation pipelines",
    icon: <Cpu className="w-8 h-8 text-primary" />,
    gradient: "from-purple-500/20 to-blue-500/20",
    accentColor: "rgba(139, 92, 246, 0.5)",
  },
  {
    title: "SaaS Infrastructure",
    description: "Creating multi-tenant scalable architectures",
    icon: <Cloud className="w-8 h-8 text-accent" />,
    gradient: "from-emerald-500/20 to-cyan-500/20",
    accentColor: "rgba(16, 185, 129, 0.5)",
  }
];

function Tilt3DCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });

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

export function AboutSection() {
  return (
    <section id="about" className="relative pt-[100px] pb-[100px] overflow-hidden" style={{ perspective: "1200px" }}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      {/* Ambient floating blobs */}
      <motion.div
        className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full blur-[120px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,1), transparent)" }}
        animate={{ scale: [1, 1.3, 1], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[5%] w-[250px] h-[250px] rounded-full blur-[100px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,1), transparent)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 3 + Math.random() * 5,
            height: 3 + Math.random() * 5,
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
            background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(37,99,235,0.6)' : 'rgba(6,182,212,0.6)'}, transparent)`,
          }}
          animate={{
            y: [0, -25, 0, 15, 0],
            x: [0, 10, -8, 5, 0],
            opacity: [0.2, 0.7, 0.3, 0.6, 0.2],
            scale: [1, 1.3, 0.9, 1.1, 1],
          }}
          transition={{ duration: 7 + Math.random() * 4, repeat: Infinity, delay: i * 0.7, ease: "easeInOut" }}
        />
      ))}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="About Me" 
          subtitle="Passionate about building scalable backend architectures and integrating intelligent AI workflows." 
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mt-12">
          {/* About text with 3D tilt */}
          <Tilt3DCard className="group">
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6 text-white/80 text-lg leading-relaxed rounded-2xl p-8 md:p-10 border border-white/[0.08] hover:border-white/20 transition-all duration-500 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                backdropFilter: "blur(20px) saturate(1.3)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Shimmer effect */}
              <motion.div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <motion.div
                  className="absolute w-[200%] h-full"
                  style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 55%, transparent 100%)" }}
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                />
              </motion.div>

              {/* Top accent line */}
              <motion.div
                className="absolute top-0 left-[10%] right-[10%] h-[1px]"
                style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.5), transparent)" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                style={{ transformStyle: "preserve-3d", transform: "translateZ(15px)" }}
              >
                I am an <span className="text-primary font-semibold">MCA Student</span> and Backend Developer hailing from Kottayam, Kerala. I specialize in designing robust backend systems and REST APIs with Python and Node.js.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}
              >
                My journey involves building web applications, CRUD platforms, and exploring the fascinating intersections of <span className="text-accent font-semibold">Machine Learning</span> and <span className="text-primary font-semibold">SaaS products</span>.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                style={{ transformStyle: "preserve-3d", transform: "translateZ(5px)" }}
              >
                Currently, I am highly focused on <span className="font-semibold text-foreground">AI Systems</span>—specifically working with LLM pipelines, Vector databases, and RAG architectures to bring autonomous intelligence into enterprise applications.
              </motion.p>
              
              <motion.div
                className="pt-4 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
              >
                {["Python", "Node.js", "AI/ML", "Backend"].map((tag, i) => (
                  <motion.span
                    key={tag}
                    className={`px-4 py-2 rounded-full text-sm border cursor-default ${
                      i === 2 ? "bg-accent/20 text-accent border-accent/30" : "bg-primary/20 text-primary border-primary/30"
                    }`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </Tilt3DCard>

          {/* Focus area cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-full"
          >
             <div className="h-full grid grid-cols-1 gap-4">
               {coreFocusAreas.map((area, index) => (
                 <motion.div
                   key={index}
                   initial={{ opacity: 0, y: 30, rotateX: -5 }}
                   whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                   transition={{ duration: 0.6, delay: 0.15 * index, ease: [0.16, 1, 0.3, 1] }}
                   viewport={{ once: true }}
                   whileHover={{ scale: 1.03, y: -4, rotateY: 3 }}
                   className="rounded-xl p-6 border border-white/[0.08] hover:border-white/20 transition-all duration-500 group relative overflow-hidden cursor-default"
                   style={{
                     background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                     backdropFilter: "blur(16px) saturate(1.2)",
                     boxShadow: "0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.04)",
                     transformStyle: "preserve-3d",
                     perspective: "800px",
                   }}
                 >
                   {/* Hover gradient */}
                   <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl`} />
                   
                   {/* Accent top line */}
                   <motion.div
                     className="absolute top-0 left-[15%] right-[15%] h-[1px]"
                     style={{ background: `linear-gradient(90deg, transparent, ${area.accentColor}, transparent)` }}
                     initial={{ scaleX: 0 }}
                     whileInView={{ scaleX: 1 }}
                     transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                     viewport={{ once: true }}
                   />

                   <div className="flex items-center gap-4 relative z-10">
                     <motion.div 
                       className="p-3 rounded-xl border border-white/10"
                       style={{
                         background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                         transformStyle: "preserve-3d",
                         transform: "translateZ(20px)",
                       }}
                       whileHover={{ scale: 1.15, rotate: 8 }}
                       transition={{ type: "spring", stiffness: 300 }}
                     >
                       {area.icon}
                     </motion.div>
                     <div style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}>
                       <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                         {area.title}
                       </h3>
                       <p className="text-sm text-white/60">
                         {area.description}
                       </p>
                     </div>
                   </div>
                 </motion.div>
               ))}
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

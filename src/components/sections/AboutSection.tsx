"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Server, Brain, Cpu, Cloud } from "lucide-react";

const coreFocusAreas = [
  {
    title: "Scalable Backend Architecture",
    description: "Designing robust systems that handle growth efficiently",
    icon: <Server className="w-8 h-8 text-primary" />
  },
  {
    title: "Applied Machine Learning",
    description: "Building intelligent solutions with ML models",
    icon: <Brain className="w-8 h-8 text-accent" />
  },
  {
    title: "LLM Systems & RAG",
    description: "Implementing retrieval-augmented generation pipelines",
    icon: <Cpu className="w-8 h-8 text-primary" />
  },
  {
    title: "SaaS Infrastructure",
    description: "Creating multi-tenant scalable architectures",
    icon: <Cloud className="w-8 h-8 text-accent" />
  }
];

export function AboutSection() {
  return (
    <section id="about" className="relative pt-[100px] pb-[100px] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="About Me" 
          subtitle="Passionate about building scalable backend architectures and integrating intelligent AI workflows." 
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6 text-white/80 text-lg leading-relaxed glass rounded-2xl p-8 md:p-10 border border-white/10 interactive"
          >
            <p>
              I am an <span className="text-primary font-semibold">MCA Student</span> and Backend Developer hailing from Kottayam, Kerala. I specialize in designing robust backend systems and REST APIs with Python and Node.js.
            </p>
            <p>
              My journey involves building web applications, CRUD platforms, and exploring the fascinating intersections of <span className="text-accent font-semibold">Machine Learning</span> and <span className="text-primary font-semibold">SaaS products</span>.
            </p>
            <p>
              Currently, I am highly focused on <span className="font-semibold text-foreground">AI Systems</span>—specifically working with LLM pipelines, Vector databases, and RAG architectures to bring autonomous intelligence into enterprise applications.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm border border-primary/30 interactive">Python</span>
              <span className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm border border-primary/30 interactive">Node.js</span>
              <span className="px-4 py-2 rounded-full bg-accent/20 text-accent text-sm border border-accent/30 interactive">AI/ML</span>
              <span className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm border border-primary/30 interactive">Backend</span>
            </div>
          </motion.div>

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
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.5, delay: 0.1 * index }}
                   viewport={{ once: true }}
                   className="glass rounded-xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 interactive"
                 >
                   <div className="flex items-center gap-4">
                     <motion.div 
                       className="p-3 glass-strong rounded-xl"
                       whileHover={{ scale: 1.1, rotate: 5 }}
                     >
                       {area.icon}
                     </motion.div>
                     <div>
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

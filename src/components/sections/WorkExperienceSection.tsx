"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function WorkExperienceSection() {
  const tasks = [
    "Worked on content analysis and data processing for UK-based client projects.",
    "Performed structured data validation, quality checks, and reporting using internal ERP systems.",
    "Followed strict accuracy, formatting, and documentation standards for business-critical content.",
    "Coordinated with team leads to meet delivery timelines and quality benchmarks.",
    "Developed strong skills in attention to detail, written communication, and process compliance."
  ];

  return (
    <section id="work-experience" className="pt-[100px] pb-[100px] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Work Experience" 
        />

        <div className="max-w-4xl mx-auto relative pt-8 mt-4">
          <div className="relative flex flex-col items-center justify-center">
            
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30" />
            
            {/* Content Box */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full text-center"
            >
              <div className="glass rounded-2xl p-8 md:p-10 transition-all relative group inline-block text-left w-full border border-white/10 hover:border-primary/30 shadow-xl">
                {/* Animated glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-[60px] group-hover:scale-125 transition-transform duration-700" />
                
                {/* Icon badge */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="inline-flex items-center gap-2 px-4 py-2 glass-strong rounded-full mb-6"
                >
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span className="text-accent font-mono text-sm tracking-widest uppercase">
                    Aug 2024 – Jan 2025
                  </span>
                </motion.div>
                
                <h3 className="text-3xl font-bold mb-2 relative z-10 text-white text-center">
                  Associate Content Analyst
                </h3>
                <h4 className="text-lg text-white/60 mb-8 relative z-10 font-medium text-center">
                  Meta Algorithm Solutions Pvt. Ltd., Kochi
                </h4>
                
                <ul className="space-y-4 text-white/70 relative z-10 max-w-2xl mx-auto">
                  {tasks.map((task, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-start gap-4"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                      <span className="text-base leading-relaxed">{task}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

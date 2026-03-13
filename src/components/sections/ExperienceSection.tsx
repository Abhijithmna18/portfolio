"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Gen AI Intern",
    company: "Jethur",
    date: "2026",
    tasks: [
      "Developed an LLM evaluation framework",
      "Implemented a vector database for embeddings",
      "Built a RAG pipeline",
      "Integrated OpenClaw for automated reasoning"
    ],
  },
  {
    id: 2,
    role: "Node.js Intern",
    company: "Leopard Tech Labs",
    date: "April 2025",
    tasks: [
      "Focused on backend module development",
      "Designed and implemented CRUD APIs",
      "Built scalable routing architectures",
      "Performed API testing with Postman"
    ],
  }
];

export function ExperienceSection() {
  return (
    <section id="internships" className="pt-[100px] pb-[100px] relative bg-[#0F172A]">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Experience & Internships" 
          subtitle="My professional journey traversing advanced backend development and AI paradigms."
        />

        <div className="max-w-4xl mx-auto relative pt-8 mt-12">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-[#2563EB] md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex flex-col md:flex-row items-center justify-center mb-16 last:mb-0">
              
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full z-20 md:-translate-x-1/2 -translate-x-[9px] bg-[#06B6D4] shadow-[0_0_15px_rgba(6,182,212,0.8)]" />

              {/* Content Box */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}
              >
                <div className="bg-[#1E293B] rounded-[16px] p-6 md:p-8 transition-all relative group shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[40px] transition-colors bg-accent/5 group-hover:bg-accent/10" />
                  
                  <span className="text-[#06B6D4] font-mono text-sm tracking-widest uppercase mb-2 block relative z-10">
                    {exp.date}
                  </span>
                  <h3 className="text-[18px] md:text-xl font-bold mb-1 relative z-10 text-white">{exp.role}</h3>
                  <h4 className="text-[15px] text-[#CBD5E1] font-medium mb-6 relative z-10">{exp.company}</h4>
                  
                  <ul className={`space-y-3 text-[#CBD5E1] text-[15px] relative z-10 ${index % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                    {exp.tasks.map((task, i) => (
                      <li key={i} className={`flex items-start gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] mt-2 flex-shrink-0" />
                        <span className={index % 2 === 0 ? 'text-left md:text-right' : 'text-left'}>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Presentation, Cpu, Server, Atom, Shield } from "lucide-react";

const workshops = [
  {
    title: "Machine Learning with Google Colab",
    date: "2024",
    description: "Hands-on workshop covering ML model training and deployment using Google's cloud-based Colab environment.",
    icon: <Cpu className="w-6 h-6 text-primary" />
  },
  {
    title: "Microservices Architecture",
    date: "2024",
    description: "Deep dive into designing and implementing scalable microservices-based systems.",
    icon: <Server className="w-6 h-6 text-accent" />
  },
  {
    title: "React JS",
    date: "2023",
    description: "Comprehensive workshop on modern React development including hooks, context, and component patterns.",
    icon: <Atom className="w-6 h-6 text-primary" />
  },
  {
    title: "Cyber Security & Ethical Hacking",
    date: "2023",
    description: "Introduction to security principles, vulnerability assessment, and ethical hacking methodologies.",
    icon: <Shield className="w-6 h-6 text-accent" />
  }
];

export function WorkshopsSection() {
  return (
    <section id="workshops" className="pt-[100px] pb-[100px] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Workshops & Training" 
          subtitle="Continuous learning through hands-on technical workshops."
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass rounded-xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-500 group hover:-translate-y-1 interactive"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 glass-strong rounded-xl flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {workshop.icon}
                </motion.div>
                
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {workshop.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <Presentation className="w-4 h-4 text-primary" />
                    <span className="text-sm text-white/60">{workshop.date}</span>
                  </div>
                  
                  <p className="text-sm text-white/70 leading-relaxed">
                    {workshop.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

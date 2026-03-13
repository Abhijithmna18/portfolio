"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Amal Jyothi College of Engineering",
    location: "Kottayam, Kerala",
    date: "2024 – 2026",
    grade: "CGPA: 7.49",
    icon: "🎓"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Mar Augusthinose College",
    location: "Kerala",
    date: "2020 – 2023",
    grade: "Completed",
    icon: "📚"
  }
];

export function EducationSection() {
  return (
    <section id="education" className="pt-[100px] pb-[100px] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Education" 
          subtitle="Academic foundation in computer science and applications."
        />

        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Animated background glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-700" />
              
              <div className="flex items-start gap-6 relative z-10">
                <motion.div 
                  className="p-5 glass-strong rounded-xl flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <span className="text-4xl">{edu.icon}</span>
                </motion.div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-white/70">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-base">{edu.institution}</span>
                      <span className="text-white/40">•</span>
                      <span className="text-sm text-white/60">{edu.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-white/70">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm text-white/60">{edu.date}</span>
                      <span className="text-white/40">•</span>
                      <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

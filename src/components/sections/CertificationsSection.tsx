"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Award, BadgeCheck, Cloud, Palette, Globe } from "lucide-react";

const certifications = [
  {
    title: "NPTEL - Cloud Computing",
    issuer: "NPTEL",
    date: "2024",
    description: "Comprehensive course on cloud computing principles and distributed systems.",
    icon: <Cloud className="w-8 h-8 text-primary" />
  },
  {
    title: "NPTEL - Human Computer Interaction (Elite)",
    issuer: "NPTEL",
    date: "2024",
    description: "Advanced study of user interface design and interaction patterns with elite recognition.",
    icon: <Palette className="w-8 h-8 text-accent" />
  },
  {
    title: "NPTEL - Internet of Things (Elite)",
    issuer: "NPTEL",
    date: "2024",
    description: "In-depth exploration of IoT architectures, sensors, and connected device ecosystems.",
    icon: <Globe className="w-8 h-8 text-primary" />
  }
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="pt-[100px] pb-[100px] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Certifications" 
          subtitle="Professional certifications demonstrating expertise in key technologies."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-500 group hover:-translate-y-2 hover:shadow-lg interactive"
            >
              {/* Animated glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-[60px] group-hover:scale-125 transition-transform duration-700" />
              
              <div className="relative z-10">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center gap-2 mb-4"
                >
                  <div className="p-3 glass-strong rounded-xl">
                    {cert.icon}
                  </div>
                  <Award className="w-6 h-6 text-primary" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <BadgeCheck className="w-4 h-4 text-accent" />
                  <span className="text-sm text-white/60">{cert.issuer}</span>
                </div>
                
                <p className="text-sm text-white/70 mb-4 leading-relaxed">
                  {cert.description}
                </p>
                
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                  {cert.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

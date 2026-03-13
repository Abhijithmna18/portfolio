"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Trophy, Users, Calendar } from "lucide-react";

const leadership = [
  {
    title: "Department Association Student Representative",
    organization: "MCA Department",
    date: "2024 – Present",
    description: "Representing student interests and coordinating departmental activities for the MCA program.",
    icon: "🎓"
  },
  {
    title: "AJCECS Charitable Society Representative",
    organization: "Amal Jyothi College",
    date: "2024 – Present",
    description: "Leading charitable initiatives and community service projects under the college society.",
    icon: "❤️"
  },
  {
    title: "Event Coordinator – Pathway to Research",
    organization: "Amal Jyothi College",
    date: "Aug 2025",
    description: "Coordinated research symposium event facilitating student presentations and academic discussions.",
    icon: "📊"
  }
];

export function LeadershipSection() {
  return (
    <section id="leadership" className="pt-[100px] pb-[100px] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Leadership & Extracurriculars" 
          subtitle="Beyond code: leading initiatives and making an impact."
        />

        <div className="max-w-4xl mx-auto mt-12 space-y-6">
          {leadership.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="glass rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Animated background glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-[60px] group-hover:scale-125 transition-transform duration-700" />
              
              <div className="flex items-start gap-6 relative z-10">
                <motion.div 
                  className="p-4 glass-strong rounded-xl flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <span className="text-3xl">{role.icon}</span>
                </motion.div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {role.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-white/50" />
                      <span className="text-sm text-white/60">{role.organization}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-white/50" />
                      <span className="text-sm text-white/60">{role.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-white/70 leading-relaxed">
                    {role.description}
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

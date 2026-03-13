"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Github, Linkedin, Mail, FileText, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="pt-[100px] pb-[100px] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Interested in collaborating on scalable backends or AI systems? Let's connect."
        />

        <div className="max-w-5xl mx-auto glass rounded-3xl p-8 md:p-12 relative border border-white/10 shadow-2xl">
          {/* Animated glow orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-[100px] animate-pulse-glow" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
          
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6 text-white">Contact Information</h3>
              <p className="text-white/70 text-base mb-8 leading-relaxed">
                I am currently looking for new opportunities. Whether you have a question or just want to discuss backend and AI engineering, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <a href="mailto:abhijithmnair2002@gmail.com" className="flex items-center gap-4 text-white/70 hover:text-primary transition-colors group">
                  <motion.div 
                    className="p-3 glass-strong rounded-xl group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Mail className="w-5 h-5" />
                  </motion.div>
                  <span className="text-base">abhijithmnair2002@gmail.com</span>
                </a>
                <a href="tel:+919605262267" className="flex items-center gap-4 text-white/70 hover:text-primary transition-colors group">
                  <motion.div 
                    className="p-3 glass-strong rounded-xl group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FileText className="w-5 h-5" />
                  </motion.div>
                  <span className="text-base">+91 9605262267</span>
                </a>
                <div className="flex items-center gap-4 text-white/70">
                  <motion.div 
                    className="p-3 glass-strong rounded-xl"
                    whileHover={{ scale: 1.1 }}
                  >
                    <MapPin className="w-5 h-5" />
                  </motion.div>
                  <span className="text-base">Kochi, Kerala, India</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-10">
                <motion.a 
                  href="https://github.com/18abhi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 glass-strong rounded-xl hover:bg-primary/20 transition-all text-white/70 hover:text-primary"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/abhijith-m-nair-18abhi/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 glass-strong rounded-xl hover:bg-primary/20 transition-all text-white/70 hover:text-primary"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="/Abhijith M Nair resume (3).pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 glass-strong rounded-xl hover:bg-primary/20 transition-all text-white/70 hover:text-primary"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FileText className="w-5 h-5 transform translate-y-[1px]" />
                </motion.a>
              </div>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6 relative z-10" 
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full glass rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder-white/30 border border-white/10" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full glass rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder-white/30 border border-white/10" 
                  placeholder="johndoe@example.com" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  required
                  className="w-full glass rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder-white/30 border border-white/10 resize-none" 
                  placeholder="Your message..." 
                />
              </div>
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full"
                isLoading={isSubmitting}
              >
                {!isSubmitting && (
                  <>
                    <span>Send Message</span>
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

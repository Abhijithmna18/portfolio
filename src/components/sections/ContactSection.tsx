"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Github, Linkedin, Mail, FileText, MapPin, Send } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, useRef } from "react";

function ContactTiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [4, -4]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-4, 4]), { stiffness: 150, damping: 20 });

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
      style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="pt-[100px] pb-[100px] relative overflow-hidden" style={{ perspective: "1200px" }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      {/* Ambient orbs */}
      <motion.div
        className="absolute top-[20%] right-[10%] w-[350px] h-[350px] rounded-full blur-[130px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,1), transparent)" }}
        animate={{ scale: [1, 1.3, 1], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] rounded-full blur-[110px] opacity-[0.06]"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,1), transparent)" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 25, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 3 + Math.random() * 4,
            height: 3 + Math.random() * 4,
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
            background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(37,99,235,0.5)' : 'rgba(6,182,212,0.5)'}, transparent)`,
          }}
          animate={{
            y: [0, -22, 0, 15, 0],
            opacity: [0.2, 0.6, 0.3, 0.5, 0.2],
          }}
          transition={{ duration: 6 + Math.random() * 3, repeat: Infinity, delay: i * 0.7, ease: "easeInOut" }}
        />
      ))}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Interested in collaborating on scalable backends or AI systems? Let's connect."
        />

        <ContactTiltCard className="max-w-5xl mx-auto group">
          <div
            className="rounded-3xl p-8 md:p-12 relative border border-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              backdropFilter: "blur(24px) saturate(1.3)",
              boxShadow: "0 12px 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Animated glow orbs */}
            <motion.div
              className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-[100px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-[100px]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Shimmer */}
            <motion.div className="absolute inset-0 rounded-3xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <motion.div
                className="absolute w-[200%] h-full"
                style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 45%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.02) 55%, transparent 100%)" }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
              />
            </motion.div>

            {/* Accent top line */}
            <motion.div
              className="absolute top-0 left-[5%] right-[5%] h-[1px]"
              style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.5), rgba(6,182,212,0.5), transparent)" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -40, rotateY: -5 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                style={{ transformStyle: "preserve-3d", transform: "translateZ(15px)" }}
              >
                <h3 className="text-3xl font-bold mb-6 text-white">Contact Information</h3>
                <p className="text-white/70 text-base mb-8 leading-relaxed">
                  I am currently looking for new opportunities. Whether you have a question or just want to discuss backend and AI engineering, I'll try my best to get back to you!
                </p>
                
                <div className="space-y-6">
                  <motion.a
                    href="mailto:abhijithmnair2002@gmail.com"
                    className="flex items-center gap-4 text-white/70 hover:text-primary transition-colors group/link"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="p-3 rounded-xl border border-white/10 group-hover/link:border-primary/30 transition-colors"
                      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))" }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Mail className="w-5 h-5" />
                    </motion.div>
                    <span className="text-base">abhijithmnair2002@gmail.com</span>
                  </motion.a>
                  <motion.a
                    href="tel:+919605262267"
                    className="flex items-center gap-4 text-white/70 hover:text-primary transition-colors group/link"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="p-3 rounded-xl border border-white/10 group-hover/link:border-primary/30 transition-colors"
                      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))" }}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                    >
                      <FileText className="w-5 h-5" />
                    </motion.div>
                    <span className="text-base">+91 9605262267</span>
                  </motion.a>
                  <motion.div
                    className="flex items-center gap-4 text-white/70"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="p-3 rounded-xl border border-white/10"
                      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))" }}
                    >
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-base">Kochi, Kerala, India</span>
                  </motion.div>
                </div>

                <div className="flex items-center gap-4 mt-10">
                  {[
                    { icon: <Github className="w-5 h-5" />, href: "https://github.com/18abhi", rot: 5 },
                    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/abhijith-m-nair-18abhi/", rot: -5 },
                    { icon: <FileText className="w-5 h-5 transform translate-y-[1px]" />, href: "/Abhijith M Nair resume (3).pdf", rot: 5 },
                  ].map((link, i) => (
                    <motion.a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl border border-white/10 hover:border-primary/30 transition-all text-white/70 hover:text-primary"
                      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))" }}
                      whileHover={{ scale: 1.15, rotate: link.rot, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.form 
                initial={{ opacity: 0, x: 40, rotateY: 5 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="space-y-6 relative z-10" 
                onSubmit={handleSubmit}
                style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}
              >
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "John Doe" },
                  { id: "email", label: "Email", type: "email", placeholder: "johndoe@example.com" },
                ].map((field, i) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor={field.id} className="block text-sm font-medium text-white/70 mb-2">{field.label}</label>
                    <input 
                      type={field.type} 
                      id={field.id} 
                      required
                      className="w-full rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder-white/30 border border-white/10 hover:border-white/20 focus:scale-[1.01]"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                        backdropFilter: "blur(12px)",
                      }}
                      placeholder={field.placeholder} 
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    required
                    className="w-full rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-white placeholder-white/30 border border-white/10 hover:border-white/20 resize-none focus:scale-[1.01]"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
                      backdropFilter: "blur(12px)",
                    }}
                    placeholder="Your message..." 
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
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
                </motion.div>
              </motion.form>
            </div>
          </div>
        </ContactTiltCard>
      </div>
    </section>
  );
}

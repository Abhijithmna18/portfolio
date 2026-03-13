"use client";

import { HeroScene } from "@/components/3d/HeroScene";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { MouseEventHandler, useState, useRef, useEffect } from "react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafIdRef = useRef<number | null>(null);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    // Throttle with requestAnimationFrame to prevent infinite loop
    if (rafIdRef.current) return;

    const target = e.currentTarget;
    const clientX = e.clientX;
    const clientY = e.clientY;
    
    if (!target || typeof clientX !== 'number' || typeof clientY !== 'number') return;

    rafIdRef.current = requestAnimationFrame(() => {
      const rect = target.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
      rafIdRef.current = null;
    });
  };

  useEffect(() => {
    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[100px] pb-[100px]"
      onMouseMove={handleMouseMove}
    >
      <HeroScene />
      
      <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: 0,
            x: mousePosition.x * -20,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-12 group"
        >
          {/* Glow effect behind profile */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
          
          <img 
            src="profile.jpeg" 
            alt="Abhijith M Nair" 
            className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full object-cover border-4 border-primary/50 shadow-[0_0_40px_rgba(37,99,235,0.4)] relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:border-accent/50"
            onError={(e) => {
               const target = e.target as HTMLImageElement;
               target.src = "https://ui-avatars.com/api/?name=Abhijith+Nair&background=0F172A&color=2563EB&size=160";
            }}
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[48px] md:text-[64px] font-bold tracking-tight mb-6 text-white leading-tight"
        >
          <span className="gradient-text">Abhijith</span> M Nair
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[18px] md:text-2xl text-primary font-medium mb-8 text-glow"
        >
          AI Developer | Backend Engineer | MCA Student
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-3xl text-[#CBD5E1] text-[16px] md:text-lg mb-12 leading-relaxed"
        >
          Backend-focused developer working on AI systems, machine learning pipelines, 
          and scalable backend architectures. Building intelligent solutions that bridge 
          the gap between data and decision-making.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a href="#projects" className="group">
            <Button variant="primary" className="group">
              <span>View Projects</span>
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </a>
          <a href="/Abhijith M Nair resume (3).pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Download Resume</Button>
          </a>
          <a href="#contact">
            <Button variant="secondary">Contact</Button>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

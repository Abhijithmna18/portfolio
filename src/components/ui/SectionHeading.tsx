"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  variant?: "light" | "dark";
}

export function SectionHeading({ title, subtitle, className, variant = "light" }: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn("text-center mb-16", className)}
    >
      <h2 className="text-[42px] md:text-[56px] font-bold tracking-tight mb-6 relative inline-block">
        <span className={variant === "light" ? "text-white" : "text-text-dark"}>
          {title.split(' ').map((word, index) => (
            <span key={index}>
              {index === 0 ? (
                <span className="gradient-text">{word}</span>
              ) : word}
              {' '}
            </span>
          ))}
        </span>
        <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full transform scale-x-0 hover:scale-x-100 transition-transform duration-500" />
      </h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={cn(
            "text-lg max-w-2xl mx-auto leading-relaxed",
            variant === "light" ? "text-white/70" : "text-text-secondary"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

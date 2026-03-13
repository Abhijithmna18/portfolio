import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "icon";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export function Button({ 
  children, 
  variant = "primary", 
  size = "md",
  isLoading = false,
  className, 
  disabled,
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 relative overflow-hidden group",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        
        // Variants
        variant === "primary" && 
          "bg-gradient-to-r from-primary to-primary/80 text-white hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-primary/50 hover:-translate-y-0.5",
        variant === "secondary" && 
          "bg-transparent text-primary hover:bg-primary/10 border-2 border-primary hover:border-primary/80",
        variant === "outline" && 
          "border border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm",
        variant === "ghost" && 
          "bg-transparent text-white/70 hover:text-white hover:bg-white/5",
        variant === "icon" && 
          "p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:scale-110",
        
        // Sizes
        size === "sm" && "px-4 py-2 text-sm",
        size === "md" && "px-6 py-3 text-base",
        size === "lg" && "px-8 py-4 text-lg",
        
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {/* Shimmer effect on hover */}
      {variant === "primary" && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shimmer" />
      )}
      
      {isLoading ? (
        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        children
      )}
    </button>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [trailParticles, setTrailParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const particleIdRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let hideTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      // Update position immediately for responsive cursor
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Clear any existing hide timeout
      clearTimeout(hideTimeout);
      
      // Hide cursor after 1 second of no movement
      hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
      
      // Create trail particle with unique ID
      const particle = {
        id: ++particleIdRef.current,
        x: e.clientX,
        y: e.clientY,
      };
      
      setTrailParticles(prev => [...prev.slice(-10), particle]);
      
      // Remove particle after animation
      setTimeout(() => {
        setTrailParticles(prev => prev.filter(p => p.id !== particle.id));
      }, 600);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'A' || target.tagName === 'BUTTON' || !!target.closest('.interactive');
      setIsHovering(isInteractive);
    };

    const handleScroll = () => {
      setIsVisible(true);
      clearTimeout(scrollTimeout);
      clearTimeout(hideTimeout);
      scrollTimeout = setTimeout(() => setIsVisible(false), 150);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(scrollTimeout);
      clearTimeout(hideTimeout);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main Cursor Ring with Glow Effect */}
      <div
        className={`custom-cursor ${isHovering ? 'hovered' : ''} ${isVisible ? '' : 'hidden'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      {/* Center Dot with Pulse Animation */}
      <div
        className="custom-cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      {/* Outer Glow Ring */}
      <div
        className={`cursor-glow-ring ${isVisible ? '' : 'hidden'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      
      {/* Trail Particles with Fade Animation */}
      {trailParticles.map((particle) => (
        <div
          key={particle.id}
          className="cursor-trail"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
          }}
        />
      ))}
    </>
  );
}

'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// ===================== ANIMATED GRADIENT BACKGROUND =====================
function AnimatedGradientBackground() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Base gradient layer - matches user's exact gradient */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(110deg, rgba(255, 144, 0, 0.61) 48%, rgba(251, 251, 251, 0.09) 48%)',
        }}
      />
      
      {/* Animated flowing layers */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      >
        {/* Primary flowing gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 20% 40%, rgba(255, 160, 50, 0.5) 0%, transparent 60%)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Secondary flowing gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 70% 60%, rgba(255, 180, 80, 0.4) 0%, transparent 50%)',
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        
        {/* Tertiary accent */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 200, 120, 0.3) 0%, transparent 40%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
        
        {/* Light cream overlay for softness */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(251, 251, 251, 0.3) 100%)',
          }}
        />
      </motion.div>
    </div>
  );
}

// ===================== HERO =====================
interface HeroProps {
  title: string;
  description: string;
  badgeText?: string;
  badgeLabel?: string;
  ctaButtons?: Array<{ text: string; href: string; primary?: boolean }>;
  microDetails?: Array<string>;
}

export default function NeuralNetworkHero({
  title,
  description,
  badgeText = "Solution Hub Technologies",
  badgeLabel = "SOHUB",
  ctaButtons = [
    { text: "Explore ecosystem", href: "#ecosystem", primary: true },
    { text: "Why we exist", href: "#why" }
  ],
  microDetails = ["Discipline", "Transparency", "Results"]
}: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <AnimatedGradientBackground />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex items-center gap-2 rounded-full border border-[#fc9206]/30 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-[#1a1a1a]"
        >
          <span className="rounded-full bg-[#fc9206] px-2 py-0.5 text-xs font-semibold text-white">
            {badgeLabel}
          </span>
          <span className="text-[#1a1a1a]/70">{badgeText}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={isVisible ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-5xl font-bold leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-[#1a1a1a]/70 sm:text-xl"
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {ctaButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={
                button.primary
                  ? "rounded-full bg-[#fc9206] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#fc9206]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#fc9206]/30 hover:-translate-y-0.5"
                  : "rounded-full border-2 border-[#1a1a1a]/20 bg-white/60 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-[#1a1a1a] transition-all duration-300 hover:border-[#1a1a1a]/40 hover:bg-white/80"
              }
            >
              {button.text}
            </a>
          ))}
        </motion.div>

        {/* Micro Details */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex items-center gap-6 text-sm text-[#1a1a1a]/50"
        >
          {microDetails.map((detail, index) => (
            <span
              key={index}
              className="flex items-center gap-2"
            >
              <span className="h-1 w-1 rounded-full bg-[#fc9206]" />
              {detail}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

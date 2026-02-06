'use client';

import { motion } from 'framer-motion';
import { ShaderBackground } from './ShaderBackground';

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
  const words = title.split(' ');

  return (
    <section className="relative w-full h-screen min-h-screen overflow-hidden">
      {/* Shader Background with fade-in */}
      <ShaderBackground 
        className="w-full h-full"
        animate={true}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 md:px-8 text-center max-w-7xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex items-center gap-2 rounded-full border border-foreground/8 bg-white/80 backdrop-blur-md px-4 py-2 text-sm font-medium shadow-sm"
        >
          <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
            {badgeLabel}
          </span>
          <span className="text-foreground/60">{badgeText}</span>
        </motion.div>

        {/* Headline - Apple-style word-by-word animation */}
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {words.map((word, index) => (
            <motion.span 
              key={index} 
              className="inline-block mr-[0.25em] last:mr-0"
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3 + index * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6 max-w-lg text-base leading-relaxed text-foreground/50 sm:text-lg md:text-xl"
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {ctaButtons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={
                button.primary
                  ? "rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                  : "rounded-full border border-primary/20 bg-white/70 backdrop-blur-sm px-7 py-3 text-sm font-medium text-foreground/80 transition-all duration-300 hover:bg-white hover:border-primary/40"
              }
            >
              {button.text}
            </a>
          ))}
        </motion.div>

        {/* Micro details - chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-16"
        >
          <p className="text-xs uppercase tracking-[0.15em] text-foreground/35 mb-4">
            Our focus:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {microDetails.map((detail, index) => (
              <span 
                key={index} 
                className="rounded-full border border-foreground/8 bg-white/60 px-4 py-2 text-xs font-medium text-foreground/60 transition-all duration-300 hover:bg-white hover:border-foreground/15"
              >
                {detail}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

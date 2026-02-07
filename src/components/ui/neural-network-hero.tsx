'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
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

// Spring configuration for natural, Google-style motion
const springConfig = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 1
};

const smoothSpring = {
  type: "spring",
  stiffness: 150,
  damping: 20
};

export default function NeuralNetworkHero({
  title,
  description,
  badgeText = "Solution Hub Technologies",
  badgeLabel = "SOHUB",
  ctaButtons = [
    { text: "Explore initiatives", href: "#initiatives", primary: true },
    { text: "Why we exist", href: "#why" }
  ],
  microDetails = ["Discipline", "Transparency", "Results"]
}: HeroProps) {
  const words = title.split(' ');
  const { scrollY } = useScroll();

  // Parallax transforms
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const badgeY = useTransform(scrollY, [0, 300], [0, -30]);

  return (
    <section className="relative w-full h-screen min-h-screen overflow-hidden bg-background">
      {/* Shader Background */}
      <ShaderBackground className="w-full h-full" animate={true} />

      {/* Animated Gradient Orbs - Softer, more organic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary orb - top right */}
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Secondary orb - bottom left */}
        <motion.div
          className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
      </div>

      {/* Content with Parallax */}
      <motion.div
        className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-6 md:px-8 text-center max-w-6xl mx-auto"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Glass Badge - Google-style frosted effect */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ ...smoothSpring, delay: 0.1 }}
          style={{ y: badgeY }}
          className="mb-10 flex items-center gap-3 rounded-full backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/20 px-5 py-2.5 shadow-lg shadow-black/5"
        >
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground tracking-wide">
            {badgeLabel}
          </span>
          <span className="text-sm font-medium text-foreground/80">{badgeText}</span>
        </motion.div>

        {/* Headline - Larger, bolder, Google-style */}
        <h1 className="max-w-5xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-[-0.04em] text-foreground">
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-[0.2em] last:mr-0"
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                ...springConfig,
                delay: 0.2 + index * 0.1,
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Description - Refined spacing */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.5 }}
          className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-foreground-muted font-normal"
        >
          {description}
        </motion.p>

        {/* CTA Buttons - Enhanced hover states */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springConfig, delay: 0.65 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          {ctaButtons.map((button, index) => (
            <motion.a
              key={index}
              href={button.href}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={smoothSpring}
              className={
                button.primary
                  ? "group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/30"
                  : "inline-flex items-center gap-2 rounded-full backdrop-blur-sm bg-white/60 dark:bg-white/10 border border-border/50 px-8 py-4 text-base font-medium text-foreground transition-all duration-300 hover:bg-white hover:border-border"
              }
            >
              {button.text}
              {button.primary && (
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </motion.a>
          ))}
        </motion.div>

        {/* Focus Chips - Subtle entry */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-foreground-muted/50 mb-5 font-medium">
            Our focus
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {microDetails.map((detail, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...smoothSpring, delay: 1 + index * 0.1 }}
                className="rounded-full backdrop-blur-sm bg-white/40 dark:bg-white/5 border border-border/30 px-5 py-2.5 text-sm font-medium text-foreground-muted transition-all duration-300 hover:bg-white hover:border-border hover:text-foreground"
              >
                {detail}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-foreground-muted/40 font-medium">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-foreground-muted/40" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
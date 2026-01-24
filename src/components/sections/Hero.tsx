import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-24 pb-20 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 grid-dots opacity-40" />
      <div 
        className="absolute top-1/4 -right-[20%] w-[60%] h-[60%] rounded-full blur-3xl opacity-[0.08]"
        style={{ background: 'hsl(32 96% 51%)' }}
      />

      <div className="container-main relative z-10">
        <div className="max-w-[900px]">
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-overline mb-6"
          >
            Solution Hub Technologies
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-display text-foreground mb-8"
          >
            Begin different.
            <br />
            <span className="text-foreground/80">Win different.</span>
          </motion.h1>

          {/* Subtext - Google-style readable paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[580px] mb-12 space-y-5"
          >
            <p className="text-body-xl">
              Bangladesh deserves better. Not more talk — working systems.
            </p>
            <p className="text-body-lg">
              Built with discipline. Measured by results. 
              Open to the people we serve.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a href="#ecosystem" className="btn-primary group">
              Explore the ecosystem
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#why" className="btn-outline">
              Why we exist
            </a>
            <a href="#operate" className="btn-ghost">
              How we operate
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

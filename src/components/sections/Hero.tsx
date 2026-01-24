import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="container-main relative z-10 py-20 md:py-32">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-hero text-foreground mb-8"
          >
            BEGIN DIFFERENT.
            <br />
            WIN DIFFERENT.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-2xl mb-12"
          >
            <p className="text-body-large mb-4">
              Bangladesh deserves better.
            </p>
            <p className="text-body-large mb-4">
              Not more talk — working systems.
            </p>
            <p className="text-body-large">
              Built with discipline. Measured by results. Open to the people we serve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#ecosystem"
              className="btn-primary group"
            >
              Explore the ecosystem
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
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

      {/* Ambient decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute -right-40 top-1/4 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, hsl(32 96% 51%) 0%, transparent 70%)' }}
      />
    </section>
  );
};

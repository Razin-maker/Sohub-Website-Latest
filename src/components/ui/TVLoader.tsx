import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TVLoaderProps {
  onComplete: () => void;
}

export const TVLoader = ({ onComplete }: TVLoaderProps) => {
  const [phase, setPhase] = useState<'off' | 'flicker' | 'text' | 'shrink' | 'done'>('off');

  useEffect(() => {
    // Animation timeline
    const timeline = [
      { phase: 'flicker' as const, delay: 300 },
      { phase: 'text' as const, delay: 800 },
      { phase: 'shrink' as const, delay: 3000 },
      { phase: 'done' as const, delay: 3600 },
    ];

    timeline.forEach(({ phase, delay }) => {
      setTimeout(() => setPhase(phase), delay);
    });

    // Call onComplete when animation finishes
    setTimeout(onComplete, 3800);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#0a0a0a' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* CRT Scanlines overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
            }}
          />

          {/* TV Screen glow */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: phase === 'flicker' ? [0, 0.3, 0.1, 0.4, 0.2, 0.5] : 
                       phase === 'text' ? 0.15 : 
                       phase === 'shrink' ? 0 : 0,
            }}
            transition={{ 
              duration: phase === 'flicker' ? 0.5 : 0.3,
            }}
            style={{
              background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
            }}
          />

          {/* Main TV effect container */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ scaleY: 0.003, scaleX: 0 }}
            animate={{
              scaleY: phase === 'off' ? 0.003 : 
                      phase === 'flicker' ? [0.003, 0.02, 0.003, 1] :
                      phase === 'shrink' ? 0.003 : 1,
              scaleX: phase === 'off' ? 0 : 
                      phase === 'flicker' ? [0, 0.5, 0.3, 1] :
                      phase === 'shrink' ? 0 : 1,
              opacity: phase === 'shrink' ? 0 : 1,
            }}
            transition={{
              duration: phase === 'flicker' ? 0.5 : 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              width: '100vw',
              height: '100vh',
            }}
          >
            {/* White flash on turn-on */}
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ opacity: 0 }}
              animate={{
                opacity: phase === 'flicker' ? [0, 1, 0, 0.8, 0] : 0,
              }}
              transition={{ duration: 0.5 }}
            />

            {/* Horizontal line (TV turn-on effect) */}
            <motion.div
              className="absolute left-0 right-0 h-[2px] bg-white"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              initial={{ opacity: 1, scaleX: 0 }}
              animate={{
                opacity: phase === 'text' || phase === 'shrink' ? 0 : 1,
                scaleX: phase === 'flicker' ? [0, 1, 0.5, 0] : 0,
              }}
              transition={{ duration: 0.5 }}
            />

            {/* Content */}
            <motion.div
              className="relative z-10 text-center px-6"
              initial={{ opacity: 0 }}
              animate={{
                opacity: phase === 'text' ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Static noise effect */}
              <motion.div
                className="absolute inset-0 -m-20"
                animate={{
                  opacity: phase === 'text' ? [0.02, 0.04, 0.02, 0.03] : 0,
                }}
                transition={{ duration: 0.2, repeat: Infinity }}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Main text */}
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: phase === 'text' ? 1 : 0,
                  y: phase === 'text' ? 0 : 20,
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Bangladesh
              </motion.h1>
              
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mt-2 sm:mt-4"
                style={{ color: 'hsl(var(--primary))' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: phase === 'text' ? 1 : 0,
                  y: phase === 'text' ? 0 : 20,
                }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Deserves Better
              </motion.h2>

              {/* Subtle loading indicator */}
              <motion.div
                className="mt-8 sm:mt-12 flex items-center justify-center gap-1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === 'text' ? 0.6 : 0 }}
                transition={{ delay: 0.6 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-white"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* TV turn-off effect - shrinking horizontal line */}
          {phase === 'shrink' && (
            <motion.div
              className="absolute bg-white"
              style={{ 
                height: '2px',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ width: '100vw', opacity: 1 }}
              animate={{ width: '0px', opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 1, 1] }}
            />
          )}

          {/* Final flash */}
          <motion.div
            className="absolute w-4 h-4 rounded-full bg-white"
            style={{ 
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(8px)',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: phase === 'shrink' ? [0, 1, 0] : 0,
              scale: phase === 'shrink' ? [0, 1.5, 0] : 0,
            }}
            transition={{ duration: 0.3, delay: 0.3 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

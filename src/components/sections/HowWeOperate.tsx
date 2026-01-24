import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';

const operatingLoop = [
  { step: 'Observe', num: '01' },
  { step: 'Learn Globally', num: '02' },
  { step: 'Normalize', num: '03' },
  { step: 'Run', num: '04' },
  { step: 'Improve', num: '05' },
];

export const HowWeOperate = () => {
  return (
    <section id="operate" className="section-spacing bg-foreground text-white">
      <div className="container-main">
        <AnimatedSection>
          <div className="max-w-2xl mb-16 lg:mb-20">
            <p className="text-overline mb-4 !text-white/50">Our Approach</p>
            <h2 className="text-headline text-white mb-6">
              How we move from reality to results
            </h2>
            <p className="text-body-xl !text-white/70">
              We don't accept the idea that Bangladesh is "50 years behind". 
              Progress is not about time — it's about starting.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 mb-20">
            {operatingLoop.map((item, index) => (
              <div 
                key={item.step} 
                className="flex items-center gap-4 md:flex-col md:text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm"
              >
                <span className="text-sm font-medium text-white/40">{item.num}</span>
                <span className="text-lg font-semibold text-white">{item.step}</span>
                {index < operatingLoop.length - 1 && (
                  <ArrowRight className="hidden md:block w-4 h-4 text-white/30 absolute -right-6" />
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
            <div className="text-center md:text-left">
              <p className="text-white/50 mb-2 text-sm">While others wait for permission,</p>
              <p className="text-xl font-semibold text-white">we start.</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-white/50 mb-2 text-sm">While others add complexity,</p>
              <p className="text-xl font-semibold text-white">we normalize.</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-white/50 mb-2 text-sm">While others hide behind excuses,</p>
              <p className="text-xl font-semibold text-white">we build.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

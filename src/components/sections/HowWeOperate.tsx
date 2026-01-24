import { AnimatedSection } from '../ui/AnimatedSection';

const operatingLoop = [
  { step: 'Observe', description: 'See the real problem clearly' },
  { step: 'Learn Globally', description: 'Study proven solutions worldwide' },
  { step: 'Normalize', description: 'Adapt for Bangladesh context' },
  { step: 'Run', description: 'Execute with discipline' },
  { step: 'Improve', description: 'Measure and iterate continuously' },
];

export const HowWeOperate = () => {
  return (
    <section id="operate" className="section-spacing bg-background-subtle">
      <div className="container-main">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              Our Approach
            </span>
            <h2 className="text-section-title mb-6">
              How we move from reality to results
            </h2>
            <p className="text-body-large">
              We don't accept the idea that Bangladesh is "50 years behind".
              Progress is not about time — it's about starting.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap justify-center items-center gap-4 mb-16">
            {operatingLoop.map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className="text-center px-6 py-4">
                  <div className="text-xl font-semibold text-foreground mb-1">
                    {item.step}
                  </div>
                  <div className="text-sm text-foreground-muted">
                    {item.description}
                  </div>
                </div>
                {index < operatingLoop.length - 1 && (
                  <div className="hidden md:block w-8 h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-foreground-subtle mb-2 text-sm">While others wait for permission,</p>
                <p className="text-lg font-medium text-foreground">we start.</p>
              </div>
              <div>
                <p className="text-foreground-subtle mb-2 text-sm">While others add complexity,</p>
                <p className="text-lg font-medium text-foreground">we normalize.</p>
              </div>
              <div>
                <p className="text-foreground-subtle mb-2 text-sm">While others hide behind excuses,</p>
                <p className="text-lg font-medium text-foreground">we build.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

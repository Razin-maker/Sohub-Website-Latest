import { AnimatedSection } from '../ui/AnimatedSection';

const standards = [
  {
    title: 'Discipline over motivation',
    description: "Motivation fades. Systems don't. We build habits and processes that work without inspiration.",
  },
  {
    title: 'Goals over noise',
    description: 'Clear objectives, measurable outcomes. No vanity metrics, no distractions.',
  },
  {
    title: 'Reliability by design',
    description: 'Every system is architected to work consistently, not just once, but every time.',
  },
  {
    title: 'Transparency by default',
    description: 'Open documentation, public progress, visible decisions. Trust is earned through visibility.',
  },
];

export const SohubStandard = () => {
  return (
    <section className="section-spacing bg-background-subtle">
      <div className="container-main">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              Our principles
            </span>
            <h2 className="text-section-title">The SOHUB Standard</h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {standards.map((standard, index) => (
            <AnimatedSection key={standard.title} delay={index * 0.1}>
              <div className="card-interactive h-full">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {standard.title}
                </h3>
                <p className="text-body">
                  {standard.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

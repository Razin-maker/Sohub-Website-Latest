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
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-overline mb-4">Our principles</p>
            <h2 className="text-headline">The SOHUB Standard</h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {standards.map((standard, index) => (
            <AnimatedSection key={standard.title} delay={index * 0.1}>
              <div className="card-white h-full">
                <h3 className="text-subtitle mb-4">
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
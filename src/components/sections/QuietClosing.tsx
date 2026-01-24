import { AnimatedSection } from '../ui/AnimatedSection';

export const QuietClosing = () => {
  return (
    <section className="section-spacing bg-foreground">
      <div className="container-main">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-8 tracking-tight">
              BEGIN DIFFERENT.
              <br />
              WIN DIFFERENT.
            </h2>
            <p className="text-lg text-white/70 mb-4">
              We're not here to follow trends.
            </p>
            <p className="text-lg text-white/90 font-medium">
              We're here to raise standards.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

import { AnimatedSection } from '../ui/AnimatedSection';

export const QuietClosing = () => {
  return (
    <section className="py-32 md:py-40 lg:py-48 bg-foreground">
      <div className="container-main">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display text-white mb-10">
              Begin different.
              <br />
              <span className="text-white/60">Win different.</span>
            </h2>
            <p className="text-body-lg !text-white/50 mb-3">
              We're not here to follow trends.
            </p>
            <p className="text-body-xl !text-white font-medium">
              We're here to raise standards.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

import { AnimatedSection } from '../ui/AnimatedSection';

export const People = () => {
  return (
    <section className="section-spacing">
      <div className="container-main">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              Join Us
            </span>
            <h2 className="text-section-title mb-6">
              For people who want to build — not just work.
            </h2>
            <div className="text-body-large space-y-6">
              <p className="text-foreground-subtle">
                If you want shortcuts, this is not for you.
              </p>
              <p className="text-foreground">
                If you want responsibility and growth — <span className="font-medium">welcome.</span>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

import { AnimatedSection } from '../ui/AnimatedSection';

export const WhatSohubIs = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <AnimatedSection>
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
                What we are
              </span>
              <h2 className="text-section-title mb-6">
                An ecosystem of focused systems.
              </h2>
              <div className="text-body space-y-4">
                <p>Each solves one real problem.</p>
                <p>Together, they raise the standard.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div>
              <span className="text-sm font-semibold text-foreground-subtle uppercase tracking-wider mb-4 block">
                What we are not
              </span>
              <h2 className="text-section-title mb-6 text-foreground-muted">
                Not a typical service company.
              </h2>
              <div className="text-body space-y-4 text-foreground-subtle">
                <p>Not random products.</p>
                <p>Not noise.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

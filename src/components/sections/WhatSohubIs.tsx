import { AnimatedSection } from '../ui/AnimatedSection';

export const WhatSohubIs = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="container-main">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* What we are */}
            <div className="card-bento bg-background-subtle">
              <p className="text-overline mb-6">What we are</p>
              <h2 className="text-title mb-6 text-foreground">
                An ecosystem of focused systems.
              </h2>
              <div className="space-y-4">
                <p className="text-body-lg text-foreground/90">
                  Each solves one real problem.
                </p>
                <p className="text-body-lg text-foreground/90">
                  Together, they raise the standard.
                </p>
              </div>
            </div>

            {/* What we are not */}
            <div className="card-bento bg-background border border-border/50">
              <p className="text-overline mb-6 opacity-50">What we are not</p>
              <h2 className="text-title mb-6 text-foreground-muted">
                Not a typical service company.
              </h2>
              <div className="space-y-4">
                <p className="text-body text-foreground-subtle">
                  Not random products.
                </p>
                <p className="text-body text-foreground-subtle">
                  Not noise.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

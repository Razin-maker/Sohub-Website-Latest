import { AnimatedSection } from '../ui/AnimatedSection';

export const WhatSohubIs = () => {
  return (
    <section id="about" className="section-spacing bg-background-subtle">
      <div className="container-main">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* What we are */}
            <div className="card-white">
              <p className="text-overline mb-6">What we are</p>
              <h2 className="text-title mb-6">
                An ecosystem of focused systems.
              </h2>
              <div className="space-y-4">
                <p className="text-body-lg">
                  Each solves one real problem.
                </p>
                <p className="text-body-lg">
                  Together, they raise the standard.
                </p>
              </div>
            </div>

            {/* What we are not */}
            <div className="card-bento">
              <p className="text-overline mb-6 opacity-50">What we are not</p>
              <h2 className="text-title mb-6 text-foreground-muted">
                Not a typical service company.
              </h2>
              <div className="space-y-4">
                <p className="text-body text-foreground-muted/60">
                  Not random products.
                </p>
                <p className="text-body text-foreground-muted/60">
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
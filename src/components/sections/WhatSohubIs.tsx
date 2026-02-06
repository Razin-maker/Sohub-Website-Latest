import { AnimatedSection } from '../ui/AnimatedSection';
import { ShaderBackground } from '../ui/ShaderBackground';

export const WhatSohubIs = () => {
  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      {/* Subtle shader background */}
      <div className="absolute inset-0 opacity-50">
        <ShaderBackground />
      </div>
      
      <div className="container-main relative z-10">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* What we are */}
            <div className="card-bento bg-white/80 backdrop-blur-sm border border-foreground/5">
              <p className="text-overline mb-6">What we are</p>
              <h2 className="text-title mb-6 text-foreground">
                An ecosystem of focused systems.
              </h2>
              <div className="space-y-4">
                <p className="text-body-lg text-foreground/80">
                  Each solves one real problem.
                </p>
                <p className="text-body-lg text-foreground/80">
                  Together, they raise the standard.
                </p>
              </div>
            </div>

            {/* What we are not */}
            <div className="card-bento bg-white/60 backdrop-blur-sm border border-foreground/5">
              <p className="text-overline mb-6 opacity-50">What we are not</p>
              <h2 className="text-title mb-6 text-foreground/60">
                Not a typical service company.
              </h2>
              <div className="space-y-4">
                <p className="text-body text-foreground/40">
                  Not random products.
                </p>
                <p className="text-body text-foreground/40">
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

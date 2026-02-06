import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';

export const People = () => {
  return (
    <section className="section-spacing bg-background-subtle">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <p className="text-overline mb-4">Join Us</p>
          <h2 className="text-headline mb-8">
            For people who want to build — not just work.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-6 mb-10">
            <p className="text-body-xl">
              If you want shortcuts, this is not for you.
            </p>
            <p className="text-body-xl !text-foreground">
              If you want responsibility and growth — <span className="font-semibold">welcome.</span>
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <a href="#contact" className="btn-primary inline-flex">
            Join the team
            <ArrowRight className="w-5 h-5" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};
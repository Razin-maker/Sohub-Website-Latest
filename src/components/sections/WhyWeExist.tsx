import { AnimatedSection } from '../ui/AnimatedSection';

export const WhyWeExist = () => {
  return (
    <section id="why" className="section-spacing bg-background">
      <div className="container-narrow">
        <AnimatedSection>
          <p className="text-overline mb-10 text-center">Why we exist</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-10">
            <p className="text-body-xl text-center prose-width mx-auto">
              Bangladesh is full of challenges — and full of people who can solve them. 
              The gap is not ideas. <span className="text-primary font-medium">The gap is execution.</span>
            </p>

            <h2 className="text-headline text-center text-foreground">
              SOHUB exists to close that gap.
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-16 space-y-8 prose-width mx-auto">
            <p className="text-body-lg">
              We believe problems can be solved in many ways. We chose technology because it is our passion.
            </p>

            <p className="text-body-lg">
              We are a young, technology-enthusiast team who believe that today, technology can address challenges more wisely — when built with discipline.
            </p>

            <p className="text-body-lg">
              Technology is the most scalable, repeatable, and reliable way to make improvement <span className="text-primary font-medium">permanent for everyone.</span>
            </p>

            <p className="text-body">
              This belief is proven globally — and adapted carefully for Bangladesh.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-20 pt-10 border-t border-border">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <p className="text-body">
                We don't chase hype.
              </p>
              <p className="text-body">
                We measure, improve, repeat.
              </p>
              <p className="text-body">
                We publish what we do — because transparency builds trust.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

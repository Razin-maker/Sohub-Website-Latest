import { AnimatedSection } from '../ui/AnimatedSection';

export const WhyWeExist = () => {
  return (
    <section id="why" className="section-spacing bg-background-subtle">
      <div className="container-main">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <div className="editorial-text space-y-8">
              <p>
                Bangladesh is full of challenges — and full of people who can solve them.
              </p>
              <p>
                The gap is not ideas. <span className="editorial-highlight">The gap is execution.</span>
              </p>
              <p className="text-primary font-semibold text-2xl md:text-3xl">
                SOHUB exists to close that gap.
              </p>
              <p>
                We believe problems can be solved in many ways.
                <br />
                We chose technology because it is our passion.
              </p>
              <p>
                We are a young, technology-enthusiast team who believe that today,
                technology can address challenges more wisely — when built with discipline.
              </p>
              <p>
                Technology is the most scalable, repeatable, and reliable way
                to make improvement <span className="editorial-highlight">permanent for everyone.</span>
              </p>
              <p>
                This belief is proven globally — and adapted carefully for Bangladesh.
              </p>
              <div className="pt-8 border-t border-border space-y-4">
                <p className="text-foreground-subtle">
                  We don't chase hype.
                </p>
                <p className="text-foreground-subtle">
                  We measure, improve, repeat.
                </p>
                <p className="text-foreground-subtle">
                  We publish what we do — because transparency builds trust.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

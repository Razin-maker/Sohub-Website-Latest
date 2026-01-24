import { AnimatedSection } from '../ui/AnimatedSection';
import { ArrowRight, BookOpen, Workflow, Award, TrendingUp, FolderOpen } from 'lucide-react';

const resources = [
  { icon: BookOpen, label: 'Vision & Syllabus', href: '#' },
  { icon: Workflow, label: 'Work Model', href: '#' },
  { icon: Award, label: 'Standards', href: '#' },
  { icon: TrendingUp, label: 'Progress', href: '#' },
  { icon: FolderOpen, label: 'Resources', href: '#' },
];

export const Transparency = () => {
  return (
    <section id="transparency" className="section-spacing">
      <div className="container-main">
        <AnimatedSection>
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-overline mb-4">Transparency</p>
            <h2 className="text-headline mb-6">Open by design.</h2>
            <p className="text-body-lg max-w-lg mx-auto">
              We believe trust is built through visibility. Explore how we work.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {resources.map((resource) => (
              <a
                key={resource.label}
                href={resource.href}
                className="group flex items-center gap-4 px-7 py-5 bg-background-subtle rounded-2xl transition-all duration-400 hover:bg-background hover:shadow-lg hover:-translate-y-1"
              >
                <resource.icon className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">
                  {resource.label}
                </span>
                <ArrowRight className="w-4 h-4 text-foreground-muted transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

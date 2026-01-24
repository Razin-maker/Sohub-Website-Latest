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
    <section id="transparency" className="section-spacing bg-background-subtle">
      <div className="container-main">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              Transparency
            </span>
            <h2 className="text-section-title mb-4">
              Open by design.
            </h2>
            <p className="text-body-large max-w-xl mx-auto">
              We believe trust is built through visibility. Explore how we work.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {resources.map((resource) => (
              <a
                key={resource.label}
                href={resource.href}
                className="group flex items-center gap-3 px-6 py-4 bg-background border border-border rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <resource.icon className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">
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

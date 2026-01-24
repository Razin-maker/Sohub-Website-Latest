import { AnimatedSection } from '../ui/AnimatedSection';
import { Building2, Users, Code, GraduationCap, Handshake } from 'lucide-react';

const audiences = [
  {
    icon: Building2,
    title: 'Businesses',
    description: 'Companies seeking reliable technology infrastructure and scalable solutions.',
  },
  {
    icon: Users,
    title: 'Consumers',
    description: 'Individuals who deserve better services and smarter everyday tools.',
  },
  {
    icon: Code,
    title: 'Builders',
    description: 'Developers and creators who want to contribute to meaningful projects.',
  },
  {
    icon: GraduationCap,
    title: 'Teams & Graduates',
    description: 'Fresh talent ready for real challenges and serious growth opportunities.',
  },
  {
    icon: Handshake,
    title: 'Partners',
    description: 'Organizations aligned with our mission to build lasting impact.',
  },
];

export const WhoItsFor = () => {
  return (
    <section className="section-spacing">
      <div className="container-main">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 block">
              Who we serve
            </span>
            <h2 className="text-section-title">
              Built for those who build
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <AnimatedSection key={audience.title} delay={index * 0.08}>
              <div className="card-interactive text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <audience.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm text-foreground-muted">
                  {audience.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

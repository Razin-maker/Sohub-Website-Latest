import { AnimatedSection } from '../ui/AnimatedSection';

const footerSections = [
  {
    title: 'Ecosystem',
    links: [
      { label: 'CONNECT', href: '#' },
      { label: 'O-MAMA', href: '#' },
      { label: 'EMP', href: '#' },
      { label: 'TOLPAR', href: '#' },
      { label: 'AI', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Vision & Syllabus', href: '#' },
      { label: 'Work Model', href: '#' },
      { label: 'Standards', href: '#' },
      { label: 'Progress', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'How We Operate', href: '#operate' },
      { label: 'Transparency', href: '#transparency' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Join the Team', href: '#' },
      { label: 'Partner With Us', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-white py-16 md:py-20">
      <div className="container-main">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
              <span className="text-2xl font-bold tracking-tight">SOHUB</span>
              <p className="text-white/60 mt-4 text-sm max-w-xs">
                Solution Hub Technologies
                <br />
                Building the future of Bangladesh.
              </p>
            </div>
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold mb-4 text-white/90">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} SOHUB — Solution Hub Technologies. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/50">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

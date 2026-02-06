import { AnimatedSection } from '../ui/AnimatedSection';
import logoWhite from '@/assets/logo-white.svg';

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
    <footer id="contact" className="bg-primary text-white py-20 md:py-24">
      <div className="container-main">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
            <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
              <img src={logoWhite} alt="SOHUB" className="h-6 w-auto" />
              <p className="text-white/50 mt-5 text-sm leading-relaxed max-w-xs">
                Solution Hub Technologies
                <br />
                Building the future of Bangladesh.
              </p>
            </div>
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold mb-5 text-white/80 text-sm uppercase tracking-wide">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} SOHUB — Solution Hub Technologies. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-white/40">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms</a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

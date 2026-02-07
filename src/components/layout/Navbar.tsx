import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoOrange from '@/assets/logo-orange.svg';

const navLinks = [
  { label: 'Initiatives', href: '#initiatives' },
  { label: 'How we operate', href: '#operate' },
  { label: 'Transparency', href: '#transparency' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? 'py-3 bg-background/95 backdrop-blur-xl border-b border-border shadow-sm'
            : 'py-4 md:py-5 bg-transparent'
          }`}
      >
        <div className="container-main flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img src={logoOrange} alt="SOHUB" className="h-6 md:h-7 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 font-medium text-[15px] rounded-full transition-all duration-300 text-foreground-muted hover:text-foreground hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button - Primary Orange */}
          <div className="hidden lg:block">
            <a
              href="#initiatives"
              className="px-6 py-2.5 font-semibold text-[15px] rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-primary text-primary-foreground"
            >
              Explore initiatives
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full transition-colors text-foreground hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden pt-20 bg-background"
          >
            <div className="container-main py-8 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="text-foreground text-2xl font-semibold py-3 hover:pl-4 hover:text-primary transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#initiatives"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-6 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full text-center text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Explore initiatives
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
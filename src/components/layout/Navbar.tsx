import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Ecosystem', href: '#ecosystem' },
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
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-3' : 'py-4 md:py-5'
        }`}
        style={{ backgroundColor: '#fc9206' }}
      >
        <div className="container-main flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
              SOHUB
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/90 hover:text-white font-medium text-sm transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#ecosystem"
              className="ml-4 px-5 py-2.5 bg-white text-foreground font-medium text-sm rounded-lg transition-all duration-200 hover:bg-white/90 hover:-translate-y-0.5"
            >
              Explore the ecosystem
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Shadow on scroll */}
        <div
          className={`absolute inset-0 -z-10 transition-shadow duration-300 ${
            isScrolled ? 'shadow-lg' : ''
          }`}
          style={{ backgroundColor: '#fc9206' }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden pt-20"
            style={{ backgroundColor: '#fc9206' }}
          >
            <div className="container-main py-8 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-white text-xl font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#ecosystem"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 px-6 py-3 bg-white text-foreground font-medium rounded-lg text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Explore the ecosystem
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

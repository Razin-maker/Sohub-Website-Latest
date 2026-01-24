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
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-3 bg-[#fc9206]' : 'py-4 md:py-5 bg-transparent'
        }`}
      >
        <div className="container-main flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <span className={`text-xl md:text-2xl font-bold tracking-[-0.02em] transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-[#1a1a1a]'
            }`}>
              SOHUB
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-2 font-medium text-[15px] rounded-full transition-all duration-300 ${
                  isScrolled 
                    ? 'text-white/85 hover:text-white hover:bg-white/10' 
                    : 'text-[#1a1a1a]/70 hover:text-[#1a1a1a] hover:bg-[#1a1a1a]/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#ecosystem"
              className={`px-6 py-2.5 font-semibold text-[15px] rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                isScrolled 
                  ? 'bg-white text-[#1a1a1a]' 
                  : 'bg-[#fc9206] text-white shadow-lg shadow-[#fc9206]/25'
              }`}
            >
              Explore ecosystem
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors ${
              isScrolled 
                ? 'text-white hover:bg-white/10' 
                : 'text-[#1a1a1a] hover:bg-[#1a1a1a]/5'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Shadow on scroll */}
        <motion.div
          initial={false}
          animate={{ 
            opacity: isScrolled ? 1 : 0,
          }}
          className="absolute inset-0 -z-10 shadow-lg bg-[#fc9206]"
        />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden pt-20"
            style={{ backgroundColor: '#fc9206' }}
          >
            <div className="container-main py-8 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="text-white text-2xl font-semibold py-3 hover:pl-4 transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#ecosystem"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="mt-6 px-8 py-4 bg-white text-[#1a1a1a] font-semibold rounded-full text-center text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Explore ecosystem
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

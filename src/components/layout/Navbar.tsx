import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import logoOrange from '@/assets/logo-orange.svg';

// Menu data with images
const menuItems = [
  {
    label: 'Why We Exist',
    href: '#why',
    submenu: [
      { title: 'Our Mission', description: 'Building a better Bangladesh', href: '#why', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=200&fit=crop' },
      { title: 'Our Values', description: 'Transparency & discipline', href: '#approach', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop' },
      { title: 'Our Story', description: 'How SOHUB began', href: '#about', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop' },
    ],
    links: [
      { label: 'Vision 2030', href: '#vision' },
      { label: 'Our Philosophy', href: '#philosophy' },
      { label: 'Leadership', href: '#people' },
    ]
  },
  {
    label: 'Initiatives',
    href: '#initiatives',
    submenu: [
      { title: 'Tech Education', description: 'Empowering the next generation', href: '#initiatives', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=200&fit=crop' },
      { title: 'Digital Infrastructure', description: 'Building digital Bangladesh', href: '#initiatives', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop' },
      { title: 'Startup Ecosystem', description: 'Nurturing innovation', href: '#initiatives', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=200&fit=crop' },
      { title: 'Rural Tech', description: 'Connecting communities', href: '#initiatives', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop' },
    ],
    links: [
      { label: 'All Programs', href: '#programs' },
      { label: 'Impact Report', href: '#impact' },
      { label: 'Partner With Us', href: '#partner' },
    ]
  },
  {
    label: 'Shop',
    href: '#shop',
    submenu: [
      { title: 'Merchandise', description: 'Official SOHUB gear', href: '#shop', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300&h=200&fit=crop' },
      { title: 'Digital Products', description: 'Tools & resources', href: '#shop', image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=300&h=200&fit=crop' },
    ],
    links: [
      { label: 'New Arrivals', href: '#new' },
      { label: 'Best Sellers', href: '#best' },
    ]
  },
  {
    label: 'Tolpar',
    href: '#tolpar',
    submenu: [
      { title: 'What is Tolpar?', description: 'Our flagship platform', href: '#tolpar', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop' },
      { title: 'Features', description: 'Powerful capabilities', href: '#tolpar-features', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop' },
      { title: 'Pricing', description: 'Plans for everyone', href: '#tolpar-pricing', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop' },
    ],
    links: [
      { label: 'Get Started', href: '#get-started' },
      { label: 'Documentation', href: '#docs' },
      { label: 'Support', href: '#support' },
    ]
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || activeMenu
            ? 'py-3 bg-background/95 backdrop-blur-xl border-b border-border shadow-sm'
            : 'py-4 md:py-5 bg-transparent'
        }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container-main flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group z-10">
            <img src={logoOrange} alt="SOHUB" className="h-5 sm:h-6 md:h-7 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
              >
                <a
                  href={item.href}
                  className={`px-4 py-2 font-medium text-[15px] rounded-full transition-all duration-300 ${
                    activeMenu === item.label
                      ? 'text-foreground bg-secondary'
                      : 'text-foreground-muted hover:text-foreground hover:bg-secondary'
                  }`}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block z-10">
            <a
              href="#contact"
              className="px-6 py-2.5 font-semibold text-[15px] rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-primary text-primary-foreground"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full transition-colors text-foreground hover:bg-secondary z-10"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl hidden lg:block"
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="container-main py-10">
                {menuItems
                  .filter((item) => item.label === activeMenu)
                  .map((item) => (
                    <div key={item.label} className="grid grid-cols-12 gap-12">
                      {/* Image Cards */}
                      <div className="col-span-9">
                        <div className={`grid gap-6 ${
                          item.submenu.length === 2 ? 'grid-cols-2' :
                          item.submenu.length === 3 ? 'grid-cols-3' :
                          'grid-cols-4'
                        }`}>
                          {item.submenu.map((subItem, index) => (
                            <motion.a
                              key={subItem.title}
                              href={subItem.href}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="group"
                            >
                              <div className="relative overflow-hidden rounded-xl mb-4 bg-background-subtle">
                                <img
                                  src={subItem.image}
                                  alt={subItem.title}
                                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              </div>
                              <h3 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors">
                                {subItem.title}
                              </h3>
                              <p className="text-sm text-foreground-muted mt-1">
                                {subItem.description}
                              </p>
                            </motion.a>
                          ))}
                        </div>
                      </div>

                      {/* Side Links */}
                      <div className="col-span-3 border-l border-border pl-8">
                        <div className="flex flex-col gap-4">
                          {item.links.map((link, index) => (
                            <motion.a
                              key={link.label}
                              href={link.href}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + index * 0.05 }}
                              className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors"
                            >
                              {link.label}
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu - Full Screen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-background"
          >
            {/* Mobile menu header spacing */}
            <div className="h-16" />
            
            <div className="h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="px-5 py-6 flex flex-col gap-1">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="border-b border-border/50"
                  >
                    <button
                      onClick={() => setExpandedMobileMenu(expandedMobileMenu === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between py-4 text-foreground text-lg font-semibold"
                    >
                      {item.label}
                      <motion.div
                        animate={{ rotate: expandedMobileMenu === item.label ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="w-5 h-5 text-foreground-muted" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {expandedMobileMenu === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 space-y-3">
                            {/* Submenu items with images - horizontal scroll on mobile */}
                            <div className="flex gap-3 overflow-x-auto pb-3 -mx-5 px-5 scrollbar-hide">
                              {item.submenu.map((subItem) => (
                                <a
                                  key={subItem.title}
                                  href={subItem.href}
                                  className="flex-shrink-0 w-40 group"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <div className="relative overflow-hidden rounded-lg mb-2 bg-background-subtle">
                                    <img
                                      src={subItem.image}
                                      alt={subItem.title}
                                      className="w-full aspect-[4/3] object-cover"
                                    />
                                  </div>
                                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                                    {subItem.title}
                                  </span>
                                </a>
                              ))}
                            </div>
                            
                            {/* Quick links */}
                            <div className="flex flex-wrap gap-2 pt-2">
                              {item.links.map((link) => (
                                <a
                                  key={link.label}
                                  href={link.href}
                                  className="text-sm text-foreground-muted hover:text-primary transition-colors"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {link.label}
                                </a>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
                
                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                  className="mt-6 px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

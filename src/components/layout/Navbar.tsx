import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import logoOrange from '@/assets/logo-orange.svg';

import { CompactBackgroundPaths } from '@/components/ui/background-paths';
import ximpulBottleImage from '@/assets/ximpul-bottle.png';

import sohubShopLogo from '@/assets/Asset 13.svg';
import sohubAILogo from '@/assets/sohub-ai-logo.svg';

// Menu data with images
const menuItems = [
  {
    label: 'Initiatives',
    href: '#initiatives',
    submenu: [
      { title: 'CONNECT', description: 'Communication without barriers', href: '#initiatives', image: '/src/assets/WhatsApp_Image_2026-02-03_at_11.55.39-removebg-preview.png' },
      { title: 'O-MAMA', description: 'Hygienic food access', href: '#initiatives', image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"%3E%3Crect width="300" height="200" fill="%23ffffff"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Inter, sans-serif" font-size="48" font-weight="bold" fill="%232dcd70"%3EO-MAMA%3C/text%3E%3C/svg%3E' },
      { title: 'EMP', description: 'Execution & accountability OS', href: '#initiatives', image: '/src/assets/EMP Logo Transparent.png' },
      { title: 'TOLPAR', description: 'The SOHUB superapp', href: '#initiatives', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop' },
      { title: 'AI', description: 'Automation that scales', href: '#initiatives', image: sohubAILogo },
      { title: 'PROTECT', description: 'Safety & trust initiatives', href: '#initiatives', image: '/src/assets/protect-logo.png' },
      { title: 'FILMIC STATION', description: 'Content that moves culture', href: '#initiatives', image: '/src/assets/20.00.jpg.png' },
      { title: 'XIMPUL', description: 'Product experience standards', href: '#initiatives', image: '/src/assets/84aae5ae-dcca-4942-a63a-ee14ebc01c94.png' },
    ],
    links: [
      { label: 'View All Initiatives', href: '#initiatives' },
      { label: 'Our Ecosystem', href: '#ecosystem' },
      { label: 'Partner With Us', href: '#partner' },
    ]
  },
  {
    label: 'Project Hub',
    href: '#project-hub',
    submenu: [
      { title: 'Dashboard', description: 'Manage your projects', href: '#dashboard', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop' },
      { title: 'Active Projects', description: 'Track progress', href: '#projects', image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=300&h=200&fit=crop' },
      { title: 'Archives', description: 'Past initiatives', href: '#archives', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop' },
    ],
    links: [
      { label: 'Login', href: '#login' },
      { label: 'Register', href: '#register' },
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
  {
    label: 'Discover',
    href: '#discover',
    submenu: [
      { title: 'About Us', href: '#about', image: '' },
      { title: 'Careers', href: '#careers', image: '' },
      { title: 'Impact Stories', href: '#impact', image: '' },
      { title: 'Events', href: '#events', image: '' },
      { title: 'Newsroom', href: '#news', image: '' },
      { title: 'Contact', href: '#contact', image: '' },
      { title: 'Help Center', href: '#help', image: '' },
      { title: 'Community', href: '#community', image: '' },
    ],
    links: []
  },
  {
    label: 'Shop',
    href: '#shop',
    submenu: [
      { title: 'Ximpul Shop', description: 'Experience the standard', href: '#ximpul-shop', image: ximpulBottleImage },
      { title: 'SOHUB Shop', description: 'Official merchandise', href: '#sohub-shop', image: sohubShopLogo },
    ],
    links: [
      { label: 'New Arrivals', href: '#new' },
      { label: 'Best Sellers', href: '#best' },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || activeMenu
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
                  className={`px-4 py-1 font-medium text-sm rounded-[4px] transition-all duration-300 ${activeMenu === item.label
                    ? 'text-[#171a20] bg-black/5 dark:bg-white/10 dark:text-white'
                    : 'text-[#171a20] hover:bg-black/5 dark:text-white dark:hover:bg-white/10'
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
                    <div key={item.label} className={`${item.label === 'Discover' ? 'flex justify-center' : 'grid grid-cols-12 gap-12'}`}>
                      {/* Image Cards */}
                      <div className={`${item.label === 'Discover' ? 'w-auto px-12' : 'col-span-9'}`}>
                        {item.label === 'Discover' ? (
                          <div className="grid grid-cols-3 gap-24 pt-2">
                            {/* Column 1: Resources */}
                            <div className="flex flex-col gap-4">
                              <h3 className="text-[#5c5e62] text-sm font-medium mb-3">Resources</h3>
                              <a href="#standard" className="text-sm font-medium text-[#171a20] dark:text-white hover:text-black dark:hover:text-white transition-colors">The SOHUB Standard</a>
                              <a href="#docs" className="text-sm font-medium text-[#171a20] dark:text-white hover:text-black dark:hover:text-white transition-colors">Developer Docs</a>
                              <a href="#reports" className="text-sm font-medium text-[#171a20] dark:text-white hover:text-black dark:hover:text-white transition-colors">Transparency Reports</a>
                              <a href="#brand" className="text-sm font-medium text-[#171a20] dark:text-white hover:text-black dark:hover:text-white transition-colors">Brand Assets</a>
                              <a href="#research" className="text-sm font-medium text-[#171a20] dark:text-white hover:text-black dark:hover:text-white transition-colors">Research & Insights</a>
                            </div>

                            {/* Column 2: Community */}
                            <div className="flex flex-col gap-4">
                              <h3 className="text-[#5c5e62] text-sm font-medium mb-3">Community</h3>
                              <a href="#volunteer" className="text-sm font-medium text-[#171a20] dark:text-white hover:text-black dark:hover:text-white transition-colors">Become a Volunteer</a>
                              <a href="#events" className="text-sm font-medium text-[#171a20] dark:text-white hover:text-black dark:hover:text-white transition-colors">Events & Hackathons</a>
                              <a href="#partners" className="text-sm font-medium text-[#171a20] dark:text-white hover:text-black dark:hover:text-white transition-colors">Partner Ecosystem</a>
                              <a href="#stories" className="text-sm font-medium text-[#171a20] dark:text-white hover:text-black dark:hover:text-white transition-colors">Success Stories</a>
                              <a href="#help" className="text-sm font-medium text-[#171a20] dark:text-white hover:text-black dark:hover:text-white transition-colors">Help Center</a>
                            </div>

                            {/* Column 3: Company */}
                            <div className="flex flex-col gap-4">
                              <h3 className="text-[#5c5e62] text-sm font-medium mb-3">Company</h3>
                              <a href="#mission" className="text-sm font-medium text-[#171a20] dark:text-white hover:text-black dark:hover:text-white transition-colors">Our Mission</a>
                              <a href="#leadership" className="text-sm font-medium text-[#171a20] dark:text-white hover:text-black dark:hover:text-white transition-colors">Leadership</a>
                              <a href="#careers" className="text-sm font-medium text-[#171a20] dark:text-white hover:text-black dark:hover:text-white transition-colors">Careers</a>
                              <a href="#contact" className="text-sm font-medium text-[#171a20] dark:text-white hover:text-black dark:hover:text-white transition-colors">Contact</a>
                            </div>
                          </div>
                        ) : (
                          <div className={`${item.label === 'Shop' ? 'flex justify-center gap-12' : `grid gap-6 ${item.submenu.length === 2 ? 'grid-cols-2' : item.submenu.length === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}`}>
                            {item.submenu.map((subItem, index) => (
                              <motion.a
                                key={subItem.title}
                                href={subItem.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className={`group flex flex-col ${item.label === 'Shop' ? 'items-center text-center' : ''}`}
                              >
                                <div className={`relative overflow-hidden rounded-xl mb-3 ${item.label === 'Shop' ? 'h-32 flex items-end justify-center bg-transparent' : (item.label === 'Initiatives' || subItem.title === 'CONNECT' || subItem.title === 'PROTECT' || subItem.title === 'XIMPUL' || subItem.title === 'EMP' ? 'bg-transparent' : 'bg-background-subtle')}`}>
                                  <img
                                    src={subItem.image}
                                    alt={subItem.title}
                                    className={`${item.label === 'Shop' ? 'w-32 h-32 object-contain mx-auto' : item.label === 'Initiatives' ? 'w-[216px] h-[122px] object-contain' : 'w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-105'} relative z-10 ${item.label !== 'Shop' && item.label !== 'Initiatives' && (subItem.title === 'CONNECT' || subItem.title === 'PROTECT' || subItem.title === 'XIMPUL' || subItem.title === 'EMP') ? 'object-contain' : ''}`}
                                  />
                                </div>
                                <h3 className="font-medium text-[17px] text-[#171a20] dark:text-white group-hover:text-primary transition-colors">
                                  {subItem.title}
                                </h3>
                                {item.label !== 'Shop' && (
                                  <p className="text-sm text-foreground-muted mt-1">
                                    {subItem.description}
                                  </p>
                                )}
                              </motion.a>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Side Links */}
                      <div className={`${item.label === 'Discover' ? 'hidden' : 'col-span-3 border-l border-border pl-8'}`}>
                        <div className="flex flex-col gap-4">
                          {item.links.map((link, index) => (
                            <motion.a
                              key={link.label}
                              href={link.href}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 + index * 0.05 }}
                              className="text-sm font-medium text-[#171a20] dark:text-white hover:underline transition-all"
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

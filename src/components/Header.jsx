import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Header = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  // Handle Scroll and Active Section
  useEffect(() => {
    // 1. Throttle the top scroll check (cheap)
    let scrollTimeout;
    const handleScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        setIsScrolled(window.scrollY > 20);
        scrollTimeout = null;
      }, 50);
    };
    
    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 2. Use highly efficient IntersectionObserver for active section (zero scroll thrashing)
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Trigger when section is in the middle 20% of screen
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []); // Remove links from dependency array as it's static

  // Force Dark Mode Always
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-[#0A0A0A]/70 backdrop-blur-xl border-b border-[#222] shadow-sm' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a
              href="#home"
              className="text-2xl font-bold font-display text-white tracking-tight relative group"
            >
              Sanjeyan
              <span className="text-slate-600">.</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 bg-[#111]/50 p-1.5 rounded-2xl border border-[#222] backdrop-blur-md">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`relative px-5 py-2 text-sm font-medium transition-colors rounded-xl z-10 ${
                    activeSection === link.id 
                      ? 'text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-[#222] rounded-xl shadow-sm border border-[#333] -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center bg-[#111] text-slate-400 border border-[#222] hover:bg-white hover:text-black transition-all duration-300 shadow-sm"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
        
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-white origin-left z-50"
          style={{ scaleX }}
        />
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-xl md:hidden pt-28 px-4"
          >
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-4 rounded-2xl text-lg font-semibold flex items-center justify-between border ${
                    activeSection === link.id
                      ? 'bg-[#151515] border-[#333] text-white'
                      : 'bg-transparent border-transparent text-slate-400'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div layoutId="mobileActiveDot" className="w-2 h-2 rounded-full bg-white" />
                  )}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

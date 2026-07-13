import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-secondary dark:bg-[#0A0A0A] relative overflow-hidden pt-24 pb-8 border-t border-slate-200/60 dark:border-[#222]">
      {/* Massive blurred glow at the bottom center for modern aesthetic */}
      <div className="absolute -bottom-64 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-slate-200 dark:bg-white opacity-20 dark:opacity-[0.03] blur-[120px] rounded-[100%] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Top Section: Fat Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Column 1: Branding (Spans 4) */}
          <div className="md:col-span-4">
            <a href="#home" className="text-2xl font-bold font-display text-slate-900 dark:text-white tracking-tight mb-4 flex items-center gap-2">
              Sanjeyan<span className="text-slate-400 dark:text-slate-600">.</span>
            </a>
            <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm leading-relaxed">
              Engineering digital experiences. A Full Stack Developer dedicated to building robust, scalable, and visually stunning software.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#151515] flex items-center justify-center text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-[#222] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors shadow-sm">
                <i className="fab fa-github text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#151515] flex items-center justify-center text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-[#222] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors shadow-sm">
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#151515] flex items-center justify-center text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-[#222] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors shadow-sm">
                <i className="fab fa-twitter text-lg"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Skills', 'Services', 'Projects'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium flex items-center gap-1 group">
                    {item}
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:sanjeyan98@gmail.com" className="text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium block">
                  sanjeyan98@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+94776119668" className="text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors text-sm font-medium block">
                  +94 77 611 9668
                </a>
              </li>
              <li className="pt-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                Jaffna, Sri Lanka
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright & Scroll to top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-200/60 dark:border-[#222]">
          
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Ravindran Sanjeyan. Designed & Engineered with precision.
          </p>

          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 dark:bg-[#151515] border border-slate-200/60 dark:border-[#222] text-slate-500 dark:text-slate-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-sm group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;

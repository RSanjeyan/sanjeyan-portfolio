import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, GraduationCap, Coffee, Sparkles } from 'lucide-react';

const BentoCard = ({ className, children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, type: "spring", stiffness: 90 }}
    className={`bg-white/60 dark:bg-[#111]/60 backdrop-blur-xl rounded-[32px] p-8 md:p-10 border border-slate-200/60 dark:border-[#222] shadow-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500 relative overflow-hidden group flex flex-col ${className}`}
  >
    {/* Subtle Inner Glow on Hover (Dark Mode) */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent pointer-events-none hidden dark:block"></div>
    {children}
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-32 bg-bg-secondary dark:bg-bg-secondary-dark border-y border-slate-200 dark:border-[#222]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 pb-1">
              Behind the code.
            </h2>
            <div className="w-16 h-1 bg-black dark:bg-white rounded-full"></div>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm font-medium">
            Bridging the gap between beautiful design and robust software architecture.
          </p>
        </motion.div>

        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Main Intro Card (Spans 2x2) */}
          <BentoCard className="md:col-span-2 md:row-span-2 justify-center" delay={0.1}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-[#222] flex items-center justify-center text-slate-900 dark:text-white shadow-sm border border-slate-200/50 dark:border-[#333]">
                <Coffee size={24} />
              </div>
              <h3 className="text-2xl font-bold font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 pb-1">
                Who I am
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-light text-lg">
              I am a Software Engineer who thrives on transforming complex problems into elegant, intuitive, and highly scalable digital solutions. With an eye for modern aesthetics and a deep understanding of robust architectures, I bridge the gap between design and technical excellence.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light text-lg">
              My approach focuses on clean code, seamless user experiences, and maintainable systems. I'm constantly learning and adapting to new technologies to deliver world-class products.
            </p>
          </BentoCard>

          {/* Location Card */}
          <BentoCard className="md:col-span-1 md:row-span-1 justify-between bg-slate-50 dark:bg-[#151515]" delay={0.2}>
            <div className="w-10 h-10 rounded-full bg-white dark:bg-[#222] flex items-center justify-center text-slate-700 dark:text-slate-300 mb-6 shadow-sm border border-slate-200/50 dark:border-[#333] group-hover:scale-110 transition-transform duration-500">
              <MapPin size={18} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 font-semibold mb-2">Based in</div>
              <div className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Jaffna,<br/>Sri Lanka</div>
            </div>
            
            {/* Subtle Map/Grid pattern in background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiM5NDkzQjgiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)] pointer-events-none"></div>
          </BentoCard>

          {/* Education Card */}
          <BentoCard className="md:col-span-1 md:row-span-1 justify-between bg-slate-50 dark:bg-[#151515]" delay={0.3}>
            <div className="w-10 h-10 rounded-full bg-white dark:bg-[#222] flex items-center justify-center text-slate-700 dark:text-slate-300 mb-6 shadow-sm border border-slate-200/50 dark:border-[#333] group-hover:-rotate-12 transition-transform duration-500">
              <GraduationCap size={18} />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-500 font-semibold mb-2">Degree</div>
              <div className="text-lg font-bold text-slate-900 dark:text-white tracking-tight leading-snug">BEng Software Engineering</div>
            </div>
          </BentoCard>

          {/* Stats Card (Spans 2 columns) */}
          <BentoCard className="md:col-span-2 md:row-span-1 border-none justify-center" delay={0.4}>
            {/* Background graphic */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-slate-200 dark:bg-slate-800 blur-[80px] rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-700 transform-gpu will-change-transform"></div>
            
            <div className="grid grid-cols-2 gap-8 relative z-10 w-full">
              <div className="flex flex-col">
                <div className="text-5xl md:text-6xl font-bold font-display tracking-tighter mb-1 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">4+</div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Years Experience</div>
              </div>
              <div className="flex flex-col">
                <div className="text-5xl md:text-6xl font-bold font-display tracking-tighter mb-1 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">20+</div>
                <div className="text-sm font-medium text-slate-500 dark:text-slate-400">Projects Delivered</div>
              </div>
            </div>
          </BentoCard>

          {/* Language/Extra Card */}
          <BentoCard className="md:col-span-4 lg:col-span-4 md:row-span-1 flex-row items-center justify-between py-6 px-8 md:px-10 bg-slate-50 dark:bg-[#111]" delay={0.5}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-[#222] flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-sm border border-slate-200/50 dark:border-[#333]">
                <Sparkles size={20} />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Multilingual Communicator</div>
                <div className="text-xs text-slate-500">Fluent in English and Tamil</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 tracking-wide">Available for new opportunities</span>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const ExperienceItem = ({ role, company, period, description, type, delay, isLeft }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
    className={`relative flex items-center justify-between w-full mb-16 last:mb-0 ${isLeft ? 'md:flex-row-reverse' : ''}`}
  >
    {/* Mobile Timeline Line (Hidden on Desktop) */}
    <div className="md:hidden absolute left-[15px] top-10 bottom-[-64px] w-px bg-gradient-to-b from-black/20 dark:from-white/20 to-transparent"></div>

    {/* Empty space for alternating layout on Desktop */}
    <div className="hidden md:block w-5/12"></div>

    {/* Central Dot with Pulse Animation */}
    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-12 h-12 rounded-full bg-slate-200/50 dark:bg-slate-700/50"
      ></motion.div>
      <div className="w-8 h-8 rounded-full bg-white dark:bg-black border-2 border-slate-900 dark:border-white flex items-center justify-center text-slate-900 dark:text-white z-10 shadow-sm">
        {type === 'education' ? <GraduationCap size={14} /> : <Briefcase size={14} />}
      </div>
    </div>
    
    {/* Content Card */}
    <div className="w-[calc(100%-3rem)] ml-auto md:ml-0 md:w-5/12 relative group">
      <motion.div 
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        className="bg-white dark:bg-[#111] p-8 rounded-3xl border border-slate-200 dark:border-[#333] shadow-sm hover:shadow-card hover:border-black dark:hover:border-white transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{role}</h3>
          <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-[#222] text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-full border border-slate-200 dark:border-[#444] w-fit">
            <Calendar size={12} />
            {period}
          </span>
        </div>
        <div className="text-slate-700 dark:text-slate-300 font-medium mb-4 text-sm flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"></span>
          {company}
        </div>
        
        {description && (
          <div className="text-slate-500 dark:text-slate-400 font-light leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: description }}></div>
        )}
      </motion.div>
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Freelance",
      period: "Present",
      type: "work",
      description: "Architecting and building robust full-stack applications for various clients. Managing everything from database schema design to responsive UI development.",
      delay: 0.1
    },
    {
      role: "Software Engineering Intern",
      company: "Navicode",
      period: "Jan 2025 – Aug 2025",
      type: "work",
      description: "• Designed intuitive web interfaces using Figma.<br/>• Built responsive front-end components with React and Tailwind.<br/>• Performed manual QA testing and resolved critical bugs.",
      delay: 0.2
    },
    {
      role: "BEng (Hons) Software Engineering",
      company: "London Metropolitan University",
      period: "Completed 2025",
      type: "education",
      description: "Graduated with honors, focusing on software architecture, advanced web development, and algorithm design.",
      delay: 0.3
    },
    {
      role: "HND in Computing",
      company: "E-soft Metro Campus (London Metropolitan University)",
      period: "2023 – 2024",
      type: "education",
      description: "Core modules included programming paradigms, database design, and systems analysis.",
      delay: 0.4
    }
  ];

  return (
    <section id="experience" className="py-32 bg-bg-secondary dark:bg-bg-secondary-dark border-y border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-24 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-12 h-1 bg-black dark:bg-white rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Animated Central Timeline line (Desktop) */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute left-1/2 top-4 w-px bg-gradient-to-b from-black/50 via-black/20 dark:from-white/50 dark:via-white/20 to-transparent -translate-x-1/2"
          ></motion.div>
          
          <div className="relative pt-2">
            {experiences.map((exp, idx) => (
              <ExperienceItem 
                key={idx} 
                {...exp} 
                isLeft={idx % 2 === 0} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

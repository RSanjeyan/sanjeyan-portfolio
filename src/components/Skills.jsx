import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Wrench } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
};

const SkillCard = ({ title, icon: Icon, skills, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, type: "spring", stiffness: 90 }}
    className="bg-white/60 dark:bg-[#111]/60 backdrop-blur-xl rounded-[32px] p-8 md:p-10 border border-slate-200/60 dark:border-[#222] shadow-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500 relative overflow-hidden group flex flex-col"
  >
    {/* Subtle Inner Glow on Hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent pointer-events-none hidden dark:block"></div>
    
    {/* Abstract Background Element */}
    <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-slate-800/30 blur-[80px] rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none transform-gpu will-change-transform"></div>
    
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-10 relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-[#222] flex items-center justify-center text-slate-900 dark:text-white shadow-sm border border-slate-200/50 dark:border-[#333] shrink-0 group-hover:scale-110 transition-transform duration-500">
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-bold font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 pb-1">{title}</h3>
    </div>
    
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-wrap gap-3 relative z-10"
    >
      {skills.map((skill, index) => (
        <motion.span 
          variants={itemVariants}
          key={index}
          whileHover={{ scale: 1.05, y: -2 }}
          className="px-4 py-2.5 bg-slate-50 dark:bg-[#1A1A1A] border border-slate-200/60 dark:border-[#333] text-slate-700 dark:text-slate-300 text-sm font-medium rounded-xl hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white transition-all duration-300 cursor-default flex items-center gap-2 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-600"></span>
          {skill}
        </motion.span>
      ))}
    </motion.div>
  </motion.div>
);

const Skills = () => {
  const skillData = [
    {
      title: "Frontend Engineering",
      icon: Layout,
      delay: 0.1,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"]
    },
    {
      title: "Backend Architecture",
      icon: Database,
      delay: 0.2,
      skills: ["C#", "ASP.NET Core", "Node.js", "Express", "SQL Server", "MySQL", "MongoDB", "REST APIs"]
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      delay: 0.3,
      skills: ["Git", "GitHub", "Figma", "Postman", "Firebase", "VS Code", "Vercel"]
    },
    {
      title: "Core Concepts",
      icon: Code,
      delay: 0.4,
      skills: ["System Design", "OOP", "Agile", "UI/UX", "Responsive Design", "Clean Code"]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-background dark:bg-background-dark">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 pb-1">
              Technical Arsenal.
            </h2>
            <div className="w-16 h-1 bg-black dark:bg-white rounded-full"></div>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm font-medium">
            The tools, languages, and frameworks I use to build scalable digital experiences.
          </p>
        </motion.div>

        <div className="relative w-[100vw] ml-[calc(-50vw+50%)] overflow-hidden flex whitespace-nowrap mb-24 opacity-80 border-y border-slate-200/50 dark:border-[#222]/50 py-4 bg-white/30 dark:bg-black/30 backdrop-blur-sm">
          <div className="flex animate-marquee min-w-full">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 px-4 items-center">
                <span className="text-5xl md:text-8xl font-bold font-display text-transparent" style={{ WebkitTextStroke: '1px rgba(150, 150, 150, 0.4)' }}>REACT</span>
                <span className="text-2xl md:text-3xl text-emerald-500">✦</span>
                <span className="text-5xl md:text-8xl font-bold font-display text-transparent" style={{ WebkitTextStroke: '1px rgba(150, 150, 150, 0.4)' }}>NODE</span>
                <span className="text-2xl md:text-3xl text-blue-500">✦</span>
                <span className="text-5xl md:text-8xl font-bold font-display text-transparent" style={{ WebkitTextStroke: '1px rgba(150, 150, 150, 0.4)' }}>TYPESCRIPT</span>
                <span className="text-2xl md:text-3xl text-emerald-500">✦</span>
                <span className="text-5xl md:text-8xl font-bold font-display text-transparent" style={{ WebkitTextStroke: '1px rgba(150, 150, 150, 0.4)' }}>UI/UX</span>
                <span className="text-2xl md:text-3xl text-blue-500">✦</span>
                <span className="text-5xl md:text-8xl font-bold font-display text-transparent" style={{ WebkitTextStroke: '1px rgba(150, 150, 150, 0.4)' }}>NEXT.JS</span>
                <span className="text-2xl md:text-3xl text-emerald-500">✦</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillData.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
};

const ProjectCard = ({ title, description, tags, githubLink, demoLink }) => (
  <motion.div 
    variants={itemVariants}
    className="bg-white dark:bg-[#111] rounded-[32px] p-8 md:p-12 border border-slate-200/60 dark:border-[#222] group hover:border-black dark:hover:border-white hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500 flex flex-col relative overflow-hidden"
  >
    {/* Subtle Inner Glow on Hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent pointer-events-none hidden dark:block"></div>
    
    {/* Abstract Background Element */}
    <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-slate-800/40 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none"></div>

    <div className="flex-1 relative z-10 flex flex-col">
      <div className="flex justify-between items-start mb-8">
        <h3 className="text-3xl font-bold font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 group-hover:from-black group-hover:to-slate-700 dark:group-hover:from-white dark:group-hover:to-slate-300 transition-colors pb-1">{title}</h3>
        <a href={demoLink || '#'} className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-50 dark:bg-[#1A1A1A] border border-slate-200/50 dark:border-[#333] text-slate-500 dark:text-slate-400 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300">
          <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-300" />
        </a>
      </div>
      
      <p className="text-slate-600 dark:text-slate-400 mb-12 font-light leading-relaxed text-lg max-w-xl">
        {description}
      </p>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-3 mb-8">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-slate-50 dark:bg-[#1A1A1A] border border-slate-200/60 dark:border-[#333] text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider rounded-xl cursor-default flex items-center gap-2 shadow-sm"
            >
              <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-slate-600"></span>
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-8 border-t border-slate-100 dark:border-[#222]">
          <a href={githubLink || '#'} className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors">
            <i className="fab fa-github text-lg"></i>
            View Source
          </a>
          <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-[#333]"></div>
          <a href={demoLink || '#'} className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors">
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projectsData = [
    {
      title: "FGC Presenter",
      description: "A highly specialized presentation software designed specifically for church users to display lyrics, verses, and media seamlessly across multiple screens with low latency.",
      tags: ["React", "Tailwind CSS", "Electron"]
    },
    {
      title: "SmartMed Pharmacy",
      description: "Comprehensive pharmacy management software for tracking inventory in real-time, managing sales, processing prescriptions, and generating analytics.",
      tags: ["C#", "SQL Server", ".NET"]
    },
    {
      title: "Tuition Center LMS",
      description: "An interactive Learning Management System tailored for tuition centers to manage students, track grades, host online course materials, and facilitate communication.",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Church Management System",
      description: "A robust internal dashboard to manage church activities, member directories, scalable donation tracking, and automated event scheduling.",
      tags: ["React", "Tailwind CSS", "Firebase"]
    }
  ];

  return (
    <section id="projects" className="py-32 bg-background dark:bg-background-dark">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 pb-1">
                Selected Work.
              </h2>
              <div className="w-16 h-1 bg-black dark:bg-white rounded-full"></div>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors group">
              View Complete Archive 
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>

        {/* Mobile View All Link */}
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white hover:opacity-70 transition-opacity">
            View Complete Archive <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

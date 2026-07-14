import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, PenTool, Bug, Terminal, Server, ArrowUpRight } from 'lucide-react';

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

const ServiceCard = ({ icon: Icon, title, description, isLarge }) => (
  <motion.div 
    variants={itemVariants}
    className={`bg-white/60 dark:bg-[#111]/60 backdrop-blur-xl rounded-[32px] p-8 md:p-10 border border-slate-200/60 dark:border-[#222] shadow-sm hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500 relative overflow-hidden group flex flex-col ${isLarge ? 'md:col-span-2 lg:col-span-2' : ''}`}
  >
    {/* Subtle Inner Glow on Hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent pointer-events-none hidden dark:block"></div>
    
    {/* Abstract Background Element */}
    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-slate-800/40 blur-[80px] rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none transform-gpu will-change-transform"></div>

    <div className="flex justify-between items-start mb-16 relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-[#222] flex items-center justify-center text-slate-900 dark:text-white shadow-sm border border-slate-200/50 dark:border-[#333] group-hover:scale-110 transition-transform duration-500">
        <Icon size={24} />
      </div>
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 dark:bg-[#1A1A1A] border border-slate-200/50 dark:border-[#333] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-slate-500 dark:text-slate-400 group-hover:text-black dark:group-hover:text-white">
        <ArrowUpRight size={18} />
      </div>
    </div>
    
    <div className="relative z-10 mt-auto">
      <h3 className="text-2xl font-bold font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 mb-4 pb-1">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed max-w-md">
        {description}
      </p>
    </div>
  </motion.div>
);

const Services = () => {
  const servicesData = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Responsive, high-performance web applications built with modern frameworks and best practices. Delivering pixel-perfect interfaces.",
      isLarge: true
    },
    {
      icon: Terminal,
      title: "Desktop Apps",
      description: "Robust and secure software solutions tailored for desktop environments and heavy business needs.",
      isLarge: false
    },
    {
      icon: Server,
      title: "API Development",
      description: "Scalable, documented, and secure RESTful APIs designed to power modern applications seamlessly.",
      isLarge: false
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      description: "Clean, intuitive, and user-centric interfaces focused on conversion and user satisfaction.",
      isLarge: true
    },
    {
      icon: Smartphone,
      title: "System Integration",
      description: "Connecting diverse software systems to streamline workflows.",
      isLarge: false
    },
    {
      icon: Bug,
      title: "Quality Assurance",
      description: "Rigorous testing methodologies to identify issues and ensure flawless delivery.",
      isLarge: false
    }
  ];

  return (
    <section id="services" className="py-32 bg-bg-secondary dark:bg-bg-secondary-dark border-y border-slate-200 dark:border-[#222]">
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
              Value Proposition.
            </h2>
            <div className="w-16 h-1 bg-black dark:bg-white rounded-full"></div>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm font-medium">
            Comprehensive software solutions designed to scale, perform, and delight users.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[1fr]"
        >
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, ArrowUpRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', whatsapp: '', subject: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className="py-32 bg-bg-secondary dark:bg-bg-secondary-dark border-t border-slate-200 dark:border-[#222]">
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
              Get In Touch.
            </h2>
            <div className="w-16 h-1 bg-black dark:bg-white rounded-full"></div>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm text-sm font-medium">
            Have a project in mind? Let's build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column - Contact Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <motion.h3 variants={itemVariants} className="text-4xl md:text-5xl font-bold font-display mb-8 tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 pb-2">
                Let's start <br/>a conversation.
              </motion.h3>
              
              <motion.div variants={itemVariants} className="space-y-8 mt-12">
                <a href="#" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-[#111] flex items-center justify-center text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-[#222] group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-1">Location</div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white">Jaffna, Sri Lanka</div>
                  </div>
                </a>

                <a href="mailto:sanjeyan98@gmail.com" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-[#111] flex items-center justify-center text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-[#222] group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-1">Email</div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white">sanjeyan98@gmail.com</div>
                  </div>
                </a>

                <a href="tel:+94776119668" className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-[#111] flex items-center justify-center text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-[#222] group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all duration-300 shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-1">Phone</div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white">+94 77 611 9668</div>
                  </div>
                </a>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="pt-12 mt-12 border-t border-slate-200/60 dark:border-[#222] flex gap-4">
              {['github', 'linkedin-in', 'twitter'].map((network, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full bg-slate-50 dark:bg-[#111] flex items-center justify-center text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-[#222] hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 shadow-sm">
                  <i className={`fab fa-${network} text-lg`}></i>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, type: "spring" }}
            className="lg:col-span-7"
          >
            <div className="bg-white/60 dark:bg-[#111]/60 backdrop-blur-xl rounded-[32px] p-8 md:p-12 border border-slate-200/60 dark:border-[#222] shadow-sm relative overflow-hidden group">
              {/* Subtle Inner Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-white/5 to-transparent pointer-events-none hidden dark:block"></div>
              
              <form onSubmit={handleSubmit} className="flex flex-col h-full relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">Name</label>
                    <input 
                      type="text" id="name" required value={formData.name} onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-[#151515] border border-slate-200 dark:border-[#222] focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all text-slate-900 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">Email</label>
                    <input 
                      type="email" id="email" required value={formData.email} onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-[#151515] border border-slate-200 dark:border-[#222] focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all text-slate-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="whatsapp" className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">WhatsApp <span className="opacity-50">(Optional)</span></label>
                    <input 
                      type="tel" id="whatsapp" value={formData.whatsapp} onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-[#151515] border border-slate-200 dark:border-[#222] focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all text-slate-900 dark:text-white"
                      placeholder="+1234567890"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">Subject</label>
                    <input 
                      type="text" id="subject" required value={formData.subject} onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-[#151515] border border-slate-200 dark:border-[#222] focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all text-slate-900 dark:text-white"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 mb-10">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-500 ml-1">Message</label>
                  <textarea 
                    id="message" required value={formData.message} onChange={handleChange}
                    className="w-full h-40 px-5 py-4 rounded-2xl bg-slate-50 dark:bg-[#151515] border border-slate-200 dark:border-[#222] focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all resize-none text-slate-900 dark:text-white"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full sm:w-auto mt-auto self-end px-10 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-200 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 group shadow-lg shadow-black/10 dark:shadow-white/10 text-base">
                  Send Message
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;

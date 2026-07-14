import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Code2, Database } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';

const Shapes = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 64, 64]} position={[-1.5, 1.5, -5]} scale={1.2}>
          <MeshDistortMaterial 
            color="#3b82f6" 
            attach="material" 
            distort={0.4} 
            speed={2} 
            roughness={0.2} 
            transparent
            opacity={0.3}
          />
        </Sphere>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[1, 64, 64]} position={[1.5, -1.5, -6]} scale={1.4}>
          <MeshDistortMaterial 
            color="#10b981" 
            attach="material" 
            distort={0.6} 
            speed={1.5} 
            roughness={0.2}
            transparent
            opacity={0.2}
          />
        </Sphere>
      </Float>
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
    </>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden bg-background dark:bg-background-dark">
      {/* 3D Interactive Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Shapes />
        </Canvas>
      </div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-2 py-1.5 pr-5 rounded-full bg-slate-100 dark:bg-[#111] border border-slate-200 dark:border-[#222] text-slate-800 dark:text-slate-200 text-sm font-medium hover:bg-slate-200 dark:hover:bg-[#222] transition-colors cursor-default shadow-sm">
            <img 
              src="/assets/profile.jpg" 
              alt="Ravindran Sanjeyan" 
              className="w-7 h-7 rounded-full object-cover"
            />
            <span>Hello, I'm Ravindran Sanjeyan</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1"></span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold font-display leading-[1.05] tracking-tighter mb-8 max-w-4xl mx-auto bg-clip-text text-transparent bg-gradient-to-b from-slate-900 via-slate-800 to-slate-500 dark:from-white dark:via-white dark:to-slate-500 pb-2">
            Engineering digital <br className="hidden md:block"/>
            <span className="text-slate-400 dark:text-slate-500">experiences.</span>
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          A Full Stack Developer focused on creating elegant, efficient, and highly scalable software solutions. Merging modern architecture with world-class minimalist design.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a href="#projects" className="w-full sm:w-auto px-8 py-4 bg-black dark:bg-white text-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-200 rounded-2xl font-medium transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-black/10 dark:shadow-white/10 text-base">
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#" className="w-full sm:w-auto px-8 py-4 bg-white/60 dark:bg-[#111]/60 backdrop-blur-xl hover:bg-slate-50 dark:hover:bg-[#222] text-black dark:text-white border border-slate-200 dark:border-[#333] rounded-2xl font-medium transition-colors flex items-center justify-center gap-2 shadow-sm text-base">
            <Download size={18} />
            Download CV
          </a>
        </motion.div>

        {/* Floating tech background elements */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-12 md:left-0 hidden lg:flex items-center justify-center w-16 h-16 rounded-2xl bg-white/60 dark:bg-[#111]/60 backdrop-blur-xl border border-slate-100 dark:border-[#222] shadow-sm text-slate-400 dark:text-slate-500"
        >
          <Code2 size={24} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 -right-12 md:right-0 hidden lg:flex items-center justify-center w-16 h-16 rounded-2xl bg-white/60 dark:bg-[#111]/60 backdrop-blur-xl border border-slate-100 dark:border-[#222] shadow-sm text-slate-400 dark:text-slate-500 hover:scale-110 transition-transform"
        >
          <Terminal size={24} />
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { resumeData } from "@/data/resumeData";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = resumeData.personal.roles;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-screen w-full flex items-center pt-32 pb-20 overflow-hidden bg-ivory">
      
      {/* Abstract Artistic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Orchid Blob */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-orchid/10 rounded-full blur-[150px]"
        />
        {/* Champagne/Coral Blend */}
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-20%] left-[-10%] w-[900px] h-[900px] bg-coral/5 rounded-full blur-[150px]"
        />
        {/* Subtle ribbon path */}
        <svg className="absolute top-1/4 right-[10%] w-[500px] h-[500px] opacity-[0.03]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#A67CFF" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18.1,95.6,-3.2C94.4,11.7,86,26.1,75.3,37.8C64.6,49.5,51.6,58.5,37.6,65.3C23.6,72.1,8.6,76.7,-6.2,78.2C-21,79.7,-35.8,78.1,-48.6,71.5C-61.4,64.9,-72.2,53.3,-80.6,39.6C-89,25.9,-95,10.1,-93.8,-5.1C-92.6,-20.3,-84.2,-34.9,-73.4,-46.6C-62.6,-58.3,-49.4,-67.1,-35.5,-74.4C-21.6,-81.7,-7,-87.5,6.7,-88.3C20.4,-89.1,40.8,-84.9,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Editorial Layout */}
        <div className="flex flex-col items-start justify-center max-w-4xl">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[72px] md:text-[100px] lg:text-[130px] font-heading font-medium leading-[0.9] text-slate-900 tracking-[-0.03em] flex flex-col mb-8">
              <span className="text-slate-400 font-light text-[40px] md:text-[56px] tracking-tight mb-2">Hi,</span>
              <span className="text-slate-500 font-light text-[40px] md:text-[56px] tracking-tight mb-4">I&apos;m</span>
              <span className="font-semibold text-slate-800">Srimathi S<span className="text-orchid">.</span></span>
            </h1>
          </motion.div>

          {/* Smooth Blur Reveal Roles */}
          <div className="h-[1.5em] text-[24px] md:text-[32px] font-sans font-medium text-slate-600 relative overflow-hidden mb-12 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-start"
              >
                <h2 className="m-0 p-0 whitespace-nowrap tracking-tight text-orchid">
                  {roles[currentRole]}
                </h2>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a
              href="#projects"
              className="group magnetic-btn px-10 py-5 rounded-full bg-slate-900 text-white font-medium text-lg text-center hover:bg-orchid transition-colors duration-500 shadow-xl shadow-slate-900/10"
            >
              Explore Work
            </a>
            <a
              href="#contact"
              className="px-10 py-5 rounded-full bg-transparent text-slate-800 font-medium text-lg text-center border border-slate-200 hover:border-orchid hover:text-orchid transition-all duration-500"
            >
              Get in Touch
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

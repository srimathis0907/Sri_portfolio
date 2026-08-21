"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Education() {
  return (
    <section id="education" className="py-32 md:py-48 w-full relative z-10 bg-base overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-rose-quartz/30 to-transparent rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-lavender-mist/30 to-transparent rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Apple-Style Showcase Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-stone-400 mb-6">
              Academic Showcase
            </h2>
            <h3 className="text-[56px] md:text-[80px] font-heading font-semibold leading-[0.9] text-stone-900 tracking-[-0.04em] mb-6">
              SIMATS Engineering
            </h3>
            <p className="text-2xl font-sans font-light text-stone-500">
              Bachelor of Technology in Information Technology
            </p>
          </motion.div>
        </div>

        {/* Cinematic Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-20">
          
          {/* Left: Illustration Asset */}
          <div className="w-full lg:w-1/2 flex justify-center perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-full max-w-[500px] aspect-square drop-shadow-2xl hover:scale-105 transition-transform duration-700"
            >
              <Image 
                src="/assets/academic_graduation_1787300657416.png" 
                alt="3D Premium Graduation Cap" 
                fill 
                className="object-contain" 
              />
            </motion.div>
          </div>

          {/* Right: Data & Visual Metrics */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12">
            
            {/* The Timeline / Duration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card-premium p-10 flex flex-col gap-4 relative overflow-hidden"
            >
              <div className="absolute right-0 top-0 w-32 h-32 bg-rose-quartz/20 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />
              <span className="text-sm font-sans font-bold tracking-[0.1em] uppercase text-stone-400">
                Academic Duration
              </span>
              <div className="flex items-center gap-6">
                <span className="text-4xl font-heading font-medium text-stone-900">2022</span>
                <div className="flex-1 h-[2px] bg-stone-200 relative">
                  <motion.div 
                    initial={{ scaleX: 0 }} 
                    whileInView={{ scaleX: 1 }} 
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 bg-stone-900 origin-left"
                  />
                </div>
                <span className="text-4xl font-heading font-medium text-stone-900">2026</span>
              </div>
            </motion.div>

            {/* The Animated CGPA Visualizer */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card-premium p-10 flex items-center justify-between bg-stone-900 text-white relative overflow-hidden"
            >
              <div className="absolute left-0 bottom-0 w-48 h-48 bg-stone-800 rounded-full blur-[50px] translate-y-1/2 -translate-x-1/4" />
              
              <div className="relative z-10 flex flex-col">
                <span className="text-sm font-sans font-bold tracking-[0.1em] uppercase text-stone-400 mb-2">
                  Cumulative Performance
                </span>
                <span className="text-[64px] font-heading font-medium leading-none">
                  8.26
                </span>
                <span className="text-stone-500 font-sans mt-1">out of 10.0</span>
              </div>

              {/* SVG Animated Progress Ring */}
              <div className="relative w-32 h-32 z-10">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#292524" strokeWidth="6" />
                  <motion.circle 
                    cx="50" cy="50" r="45" fill="none" stroke="#F4DCD6" strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "283", strokeDashoffset: "283" }}
                    whileInView={{ strokeDashoffset: 283 - (283 * 0.826) }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-heading font-medium text-stone-300">82.6%</span>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

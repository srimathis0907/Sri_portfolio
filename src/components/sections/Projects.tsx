"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { resumeData } from "@/data/resumeData";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const project = resumeData.projects[0];
  const features = project.features;

  // Parallax calculations for the visual assets
  const phoneY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const card1Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return (
    <section id="projects" className="py-32 w-full relative z-10 overflow-hidden bg-white">
      
      {/* Background Layering */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-rose-quartz/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-champagne/30 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        
        {/* Apple Keynote Style Header */}
        <div className="text-center mb-24 md:mb-40" ref={containerRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center justify-center mb-6">
              <span className="text-sm font-sans font-bold tracking-[0.2em] uppercase text-stone-400">
                Signature Case Study
              </span>
            </div>
            <h2 className="text-[56px] md:text-[96px] lg:text-[120px] font-heading font-semibold leading-[0.9] text-stone-900 tracking-[-0.04em] mb-8">
              {project.title.split(' - ')[0]}<span className="text-rose-400">.</span>
            </h2>
            <p className="text-xl md:text-3xl text-stone-500 font-sans font-light max-w-3xl mx-auto leading-relaxed">
              {project.title.split(' - ')[1]}
            </p>
          </motion.div>
        </div>

        {/* Immersive Sticky Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative">
          
          {/* Left Column: Visual Storytelling (Phone Mockup) */}
          <div className="w-full lg:w-1/2 lg:sticky top-40 flex justify-center items-center h-auto lg:h-[80vh] perspective-1000">
            <motion.div 
              style={{ y: phoneY }}
              className="relative w-full max-w-[450px] aspect-[9/19] drop-shadow-2xl"
            >
              <Image 
                src="/assets/destino_app_mockup_1787300623837.png"
                alt="Destino App iPhone Mockup"
                fill
                className="object-contain"
                priority
              />
              
              {/* Floating UI Badges */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] -left-8 px-4 py-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 flex flex-col gap-1"
              >
                <span className="text-xs font-sans font-bold text-stone-400 uppercase tracking-widest">Error Reduction</span>
                <span className="text-xl font-heading font-semibold text-stone-900">85%</span>
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[30%] -right-12 px-4 py-3 bg-stone-900 rounded-2xl shadow-2xl border border-stone-700 flex flex-col gap-1"
              >
                <span className="text-xs font-sans font-bold text-stone-400 uppercase tracking-widest">Tech</span>
                <span className="text-lg font-heading font-semibold text-white">PHP + OpenStreetMap</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Architectural Breakdown */}
          <div className="w-full lg:w-1/2 flex flex-col gap-12 lg:pt-[20vh] pb-[20vh]">
            
            <motion.div style={{ y: card1Y }} className="w-full glass-card-premium p-10 md:p-14 relative overflow-hidden bg-white/60">
              <h4 className="text-3xl md:text-4xl font-heading font-medium text-stone-900 mb-6 relative z-10">Intelligent Routing & Estimation</h4>
              <p className="text-[19px] text-stone-600 font-sans font-light leading-relaxed relative z-10 mb-8">
                {features[0]}
              </p>
              
              {/* Visual Map Interface Abstract */}
              <div className="w-full h-48 bg-stone-100 rounded-[2rem] border border-stone-200 overflow-hidden relative">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E7E5E4" strokeWidth="1"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Route Line */}
                  <motion.path 
                    initial={{ pathLength: 0 }} 
                    whileInView={{ pathLength: 1 }} 
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M 50 150 Q 150 180 200 100 T 350 50" 
                    fill="none" stroke="#1C1917" strokeWidth="4" strokeLinecap="round" 
                  />
                  <circle cx="50" cy="150" r="6" fill="#1C1917" />
                  <circle cx="350" cy="50" r="6" fill="#1C1917" />
                </svg>
              </div>
            </motion.div>

            <motion.div style={{ y: card2Y }} className="w-full glass-card-premium p-10 md:p-14 relative overflow-hidden bg-stone-900 text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-stone-800 rounded-full blur-[80px]" />
              <h4 className="text-3xl md:text-4xl font-heading font-medium text-white mb-6 relative z-10">Custom Backend Architecture</h4>
              <p className="text-[19px] text-stone-400 font-sans font-light leading-relaxed relative z-10 mb-10">
                {features[1]}
              </p>

              {/* Data Flow Visualization */}
              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-sans font-medium text-stone-300">Android Client Request</span>
                  <div className="flex-1 h-[1px] bg-stone-700 mx-4 relative overflow-hidden">
                    <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="w-1/3 h-full bg-rose-400" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-sans font-medium text-stone-300">PHP Application Server</span>
                  <div className="flex-1 h-[1px] bg-stone-700 mx-4 relative overflow-hidden">
                    <motion.div animate={{ x: ["200%", "-100%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-1/3 h-full bg-lavender-mist" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-sans font-medium text-stone-300">MySQL Database Processing</span>
                  <div className="flex-1 h-[1px] bg-stone-700 mx-4" />
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

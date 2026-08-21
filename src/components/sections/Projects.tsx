"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { resumeData } from "@/data/resumeData";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const project = resumeData.projects[0];
  
  const phoneY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const archY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="projects" className="py-32 w-full bg-[#0F172A] relative overflow-hidden text-white border-t border-[rgba(255,255,255,0.05)]">
      
      {/* Subtle Violet Accent Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10" ref={containerRef}>
        
        {/* Apple Keynote Style Header */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
               <div className="w-8 h-[1px] bg-violet-400" />
               <span className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-violet-400">
                 Featured Product
               </span>
               <div className="w-8 h-[1px] bg-violet-400" />
            </div>
            
            <h2 className="text-[50px] md:text-[80px] lg:text-[100px] font-heading font-black leading-[0.9] text-white tracking-[-0.04em] mb-6">
              Destino
            </h2>
            <p className="text-xl md:text-2xl text-[#94A3B8] font-sans font-medium max-w-2xl mx-auto">
              {project.title.split(' - ')[1]}
            </p>
          </motion.div>
        </div>

        {/* Full Viewport Sticky Presentation */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative">
          
          {/* Left: Huge Animated CSS Phone Mockup */}
          <div className="w-full lg:w-1/2 lg:sticky top-32 flex justify-center items-center h-auto lg:h-[70vh] perspective-1000">
            <motion.div 
              style={{ y: phoneY }}
              className="relative w-full max-w-[320px] aspect-[9/19]"
            >
               {/* Phone Hardware (Pure CSS) */}
               <div className="absolute inset-0 bg-[#1E293B] rounded-[3rem] border-[12px] border-[#0F172A] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col items-center">
                  {/* Dynamic Island */}
                  <div className="w-24 h-6 bg-[#0F172A] rounded-full mt-2 z-20 flex justify-between items-center px-3">
                     <div className="w-2 h-2 rounded-full bg-emerald-500 opacity-50" />
                     <div className="w-2 h-2 rounded-full bg-[#1E293B]" />
                  </div>
                  
                  {/* Fake UI Screen */}
                  <div className="absolute inset-0 mt-10 px-6 py-4 flex flex-col gap-6 z-10">
                     <div className="flex justify-between items-center">
                        <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                           <div className="w-5 h-5 rounded-full bg-violet-500" />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#334155]" />
                     </div>
                     
                     <div className="space-y-3">
                        <div className="h-6 w-3/4 bg-[#334155] rounded" />
                        <div className="h-4 w-1/2 bg-[#334155] rounded" />
                     </div>
                     
                     <div className="flex-1 w-full bg-[#334155] rounded-2xl relative overflow-hidden">
                        {/* Map Route Animation */}
                        <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 200 200">
                           <path d="M 20 180 Q 100 100 180 20" fill="none" stroke="#8B5CF6" strokeWidth="4" strokeDasharray="10 10">
                             <animate attributeName="stroke-dashoffset" values="40;0" dur="2s" repeatCount="indefinite" />
                           </path>
                        </svg>
                     </div>
                     
                     <div className="h-16 w-full bg-violet-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-sans font-bold text-sm">Calculate Route</span>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>

          {/* Right: Feature Walkthrough & Architecture */}
          <div className="w-full lg:w-1/2 flex flex-col gap-20 lg:pt-[10vh] pb-[20vh]">
            
            {/* Feature Block 1 */}
            <motion.div style={{ y: archY }} className="w-full">
              <h4 className="text-3xl font-heading font-bold text-white mb-4">Intelligent Routing & Estimation</h4>
              <p className="text-[17px] text-[#94A3B8] font-sans leading-relaxed mb-8">
                {project.features[0]}
              </p>
              
              <div className="flex gap-3 mb-8">
                 {['Android Native', 'PHP Backend', 'MySQL'].map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-[#1E293B] border border-[#334155] text-xs font-sans font-semibold text-violet-300">
                      {tech}
                    </span>
                 ))}
              </div>
              
              {/* Premium GitHub CTA */}
              <a 
                href="https://github.com/srimathis0907/Destino_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Destino source code on GitHub"
                className="group relative inline-flex items-center gap-3 px-6 py-3 bg-[#1E293B] border border-[#334155] rounded-xl hover:border-violet-500 hover:bg-violet-500/10 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-[0_8px_20px_rgba(139,92,246,0.15)]"
              >
                {/* GitHub Icon */}
                <svg className="w-5 h-5 text-[#94A3B8] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-sans font-semibold text-[#94A3B8] group-hover:text-white transition-colors duration-300">
                  View Source Code
                </span>
                {/* External Link Icon */}
                <svg className="w-4 h-4 text-[#94A3B8] group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>

            {/* Architecture Diagram (Pure CSS/SVG) */}
            <motion.div style={{ y: archY }} className="w-full bg-[#1E293B] border border-[#334155] rounded-2xl p-8 relative overflow-hidden">
              <h5 className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#94A3B8] mb-8">System Architecture</h5>
              
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="px-4 py-2 bg-[#0F172A] border border-[#334155] rounded-lg text-sm font-sans font-semibold">Client App</div>
                  <div className="flex-1 h-[1px] bg-[#334155] mx-4 relative overflow-hidden">
                    <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="w-1/3 h-full bg-violet-500" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="px-4 py-2 bg-[#0F172A] border border-violet-500/50 rounded-lg text-sm font-sans font-semibold text-violet-300">PHP API Gateway</div>
                  <div className="flex-1 h-[1px] bg-[#334155] mx-4 relative overflow-hidden">
                    <motion.div animate={{ x: ["200%", "-100%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-1/3 h-full bg-[#94A3B8]" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="px-4 py-2 bg-[#0F172A] border border-[#334155] rounded-lg text-sm font-sans font-semibold">MySQL Cluster</div>
                  <div className="flex-1 h-[1px] bg-transparent mx-4" />
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

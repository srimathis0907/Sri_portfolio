"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { resumeData } from "@/data/resumeData";
import { CheckCircle2, Navigation, Database } from "lucide-react";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const project = resumeData.projects[0];

  return (
    <section id="projects" className="py-32 w-full relative z-10 bg-white" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-6xl relative z-20">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-indigo-500 mb-4">Featured Work</h2>
            <h3 className="text-[40px] md:text-[56px] font-heading font-black leading-[1.1] text-slate-900 tracking-tight">
              Selected <span className="text-gradient-primary">Projects.</span>
            </h3>
          </motion.div>
        </div>

        {/* Apple Style Project Showcase */}
        <div className="flex flex-col gap-32">
          
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative">
            
            {/* Sticky Storytelling Left Side */}
            <div className="w-full lg:w-1/2 lg:sticky top-32 self-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-widest mb-6">
                  {project.duration}
                </div>
                <h4 className="text-[32px] md:text-[48px] font-heading font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                  {project.title.split(' - ')[0]}<span className="text-indigo-600">.</span>
                </h4>
                <p className="text-xl text-slate-500 font-medium mb-8 leading-relaxed">
                  {project.title.split(' - ')[1]}
                </p>
                <p className="text-slate-600 text-lg leading-[1.7] mb-10">
                  {project.overview}
                </p>

                <div className="flex flex-wrap gap-3 mb-12">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 bg-indigo-50 border border-indigo-100 text-indigo-700 rounded-full text-sm font-bold shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Scrolling Features Right Side */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8">
              
              <motion.div style={{ y, opacity }} className="glass-panel p-10 rounded-[32px]">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white mb-6">
                  <Navigation size={24} />
                </div>
                <h5 className="text-2xl font-bold text-slate-900 mb-4">Location & Estimation</h5>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {project.features[0]}
                </p>
              </motion.div>

              <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [150, -150]), opacity }} className="glass-panel p-10 rounded-[32px]">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white mb-6">
                  <Database size={24} />
                </div>
                <h5 className="text-2xl font-bold text-slate-900 mb-4">Custom Backend Architecture</h5>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {project.features[1]}
                </p>
              </motion.div>

              <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [200, -200]), opacity }} className="bg-slate-900 p-10 rounded-[32px] shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6 backdrop-blur-md">
                  <CheckCircle2 size={24} className="text-emerald-400" />
                </div>
                <h5 className="text-2xl font-bold text-white mb-4">The Impact</h5>
                <p className="text-slate-300 text-lg leading-relaxed font-medium">
                  Achieved an incredible milestone by <span className="text-white font-bold">{project.impact}</span> compared to standard manual planning methods.
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

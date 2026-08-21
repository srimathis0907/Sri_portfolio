"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { resumeData } from "@/data/resumeData";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="py-32 w-full relative z-10 overflow-hidden bg-slate-50/50">
      <div className="container mx-auto px-6 max-w-5xl relative z-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-indigo-500 mb-4">Academic Background</h2>
          <h3 className="text-[40px] md:text-[56px] font-heading font-black leading-[1.1] text-slate-900 tracking-tight">
            Formal <span className="text-gradient-primary">Education.</span>
          </h3>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* Static Timeline Line */}
          <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[4px] bg-indigo-100 rounded-full" />
          
          {/* Animated Timeline Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 w-[4px] bg-gradient-to-b from-indigo-500 to-cyan-400 origin-top rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10"
          />

          <div className="flex flex-col gap-12 relative z-20">
            {resumeData.education.map((edu, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  <div className="hidden md:block w-1/2" />

                  {/* Icon Node */}
                  <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white flex items-center justify-center z-30 shadow-xl border-4 border-indigo-50">
                    <div className="w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-inner">
                      <GraduationCap size={24} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}
                  >
                    <div className="glass-panel p-8 md:p-10 rounded-3xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-shadow duration-500 text-left">
                      <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold tracking-widest mb-6">
                        Class of {edu.year}
                      </div>
                      <h4 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-2 leading-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-slate-500 font-medium text-lg mb-6 leading-relaxed">
                        {edu.institution}
                      </p>
                      
                      <div className="inline-flex items-center gap-3 bg-white/80 border border-slate-200 px-5 py-3 rounded-2xl shadow-sm">
                        <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">CGPA</span>
                        <span className="text-2xl font-black text-indigo-600">{edu.cgpa}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

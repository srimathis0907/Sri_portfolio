"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { resumeData } from "@/data/resumeData";
import { Briefcase } from "lucide-react";

function ExperienceItem({ exp, idx, scrollYProgress, totalItems }: { exp: { role: string, duration: string, company: string, location: string, achievements: string[] }, idx: number, scrollYProgress: MotionValue<number>, totalItems: number }) {
  const isEven = idx % 2 === 0;
  const activationPoint = totalItems > 1 ? idx / (totalItems - 1) : 0.5;
  const start = Math.max(0, activationPoint - 0.2);
  const end = Math.min(1, activationPoint + 0.1);
  
  const scale = useTransform(scrollYProgress, [start, end], [1, 1.15]);
  const bgColor = useTransform(scrollYProgress, [start, end], ["#ffffff", "#4F46E5"]);
  const iconColor = useTransform(scrollYProgress, [start, end], ["#94a3b8", "#ffffff"]);
  const borderColor = useTransform(scrollYProgress, [start, end], ["#e2e8f0", "#8B5CF6"]);
  const boxShadow = useTransform(scrollYProgress, [start, end], ["none", "0 0 25px rgba(99, 102, 241, 0.5)"]);

  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      <div className="hidden md:block w-1/2" />
      <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white flex items-center justify-center z-30">
        <motion.div 
          style={{ scale, backgroundColor: bgColor, color: iconColor, borderColor, boxShadow }}
          className="w-full h-full rounded-full border-4 flex items-center justify-center transition-colors duration-300"
        >
          <Briefcase size={24} />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}
      >
        <div className="glass-panel p-8 md:p-10 rounded-3xl hover:-translate-y-2 transition-transform duration-500 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <h4 className="text-2xl font-heading font-black text-slate-900 leading-tight">
              {exp.role}
            </h4>
            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-widest whitespace-nowrap">
              {exp.duration}
            </span>
          </div>
          <h5 className="text-indigo-600 font-bold text-lg mb-6 flex items-center gap-2">
            {exp.company} <span className="text-slate-400 font-medium text-sm">({exp.location})</span>
          </h5>
          <ul className="space-y-4">
            {exp.achievements.map((achievement: string, aIdx: number) => (
              <li key={aIdx} className="text-slate-600 text-base leading-relaxed flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 w-full relative z-10 overflow-hidden bg-slate-50/50">
      <div className="container mx-auto px-6 max-w-5xl relative z-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-indigo-500 mb-4">Professional Journey</h2>
          <h3 className="text-[40px] md:text-[56px] font-heading font-black leading-[1.1] text-slate-900 tracking-tight">
            Work <span className="text-gradient-primary">Experience.</span>
          </h3>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* Static background line */}
          <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[4px] bg-slate-200 rounded-full" />
          
          {/* Animated fill line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 w-[4px] bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-400 origin-top rounded-full shadow-[0_0_15px_rgba(99,102,241,0.6)] z-10 transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
          />

          <div className="flex flex-col gap-24 relative z-20">
            {resumeData.experience.map((exp, idx) => (
              <ExperienceItem 
                key={idx} 
                exp={exp} 
                idx={idx} 
                scrollYProgress={scrollYProgress} 
                totalItems={resumeData.experience.length} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

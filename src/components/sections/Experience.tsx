"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { resumeData } from "@/data/resumeData";

function ExperienceNode({ exp, idx, scrollYProgress, totalItems }: { exp: { role: string, duration: string, company: string, location: string, achievements: string[] }, idx: number, scrollYProgress: MotionValue<number>, totalItems: number }) {
  const activationPoint = totalItems > 1 ? idx / (totalItems - 1) : 0.5;
  const start = Math.max(0, activationPoint - 0.2);
  const end = Math.min(1, activationPoint + 0.1);
  
  const scale = useTransform(scrollYProgress, [start, end], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0.4, 1]);
  const nodeColor = useTransform(scrollYProgress, [start, end], ["#e2e8f0", "#A67CFF"]);

  return (
    <div className="relative pl-8 md:pl-0 w-full mb-24 last:mb-0">
      
      {/* Desktop Curved Path Element (Abstract) */}
      <div className="hidden md:block absolute top-0 left-[-20px] w-10 h-full border-l border-slate-200" />
      
      {/* Animated Node */}
      <motion.div
        style={{ scale, backgroundColor: nodeColor }}
        className="absolute left-[-4px] md:left-[-24px] top-6 w-3 h-3 rounded-full z-20"
      />

      <motion.div
        style={{ opacity }}
        className="editorial-card p-10 relative z-10"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-slate-100 pb-8">
          <div>
            <h4 className="text-2xl font-heading font-medium text-slate-900 tracking-tight mb-2">
              {exp.role}
            </h4>
            <div className="text-lg text-slate-500 font-sans">
              <span className="text-orchid font-medium">{exp.company}</span> &nbsp;&mdash;&nbsp; {exp.location}
            </div>
          </div>
          <div className="text-sm font-semibold tracking-[0.1em] uppercase text-slate-400 bg-slate-50 px-4 py-2 rounded-full">
            {exp.duration}
          </div>
        </div>
        
        <ul className="space-y-4">
          {exp.achievements.map((achievement: string, aIdx: number) => (
            <li key={aIdx} className="text-slate-600 font-sans text-[17px] leading-relaxed flex items-start gap-4">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
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

  return (
    <section id="experience" className="py-32 w-full relative z-10 bg-pearl">
      <div className="container mx-auto px-6 max-w-4xl relative z-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-orchid mb-4">
            Professional History
          </h2>
          <h3 className="text-[40px] md:text-[56px] font-heading font-medium leading-[1.1] text-slate-900 tracking-tight">
            Work Experience
          </h3>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* Animated path line mobile */}
          <div className="absolute left-[1px] md:hidden top-0 bottom-0 w-[1px] bg-slate-200" />
          
          <div className="flex flex-col relative z-20">
            {resumeData.experience.map((exp, idx) => (
              <ExperienceNode 
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

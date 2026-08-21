"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { resumeData } from "@/data/resumeData";

function PathNode({ exp, idx, scrollYProgress, totalItems }: { exp: { role: string, duration: string, company: string, location: string, achievements: string[] }, idx: number, scrollYProgress: MotionValue<number>, totalItems: number }) {
  const isEven = idx % 2 === 0;
  
  const step = 1 / totalItems;
  const start = idx * step;
  const end = start + step;
  
  const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.2, 1, 1, 0.2]);
  const yOffset = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [50, 0, 0, -50]);

  return (
    <div className="relative w-full min-h-[60vh] flex items-center justify-center">
      <motion.div
        style={{ opacity, y: yOffset }}
        className={`w-full max-w-2xl flex flex-col lg:flex-row gap-12 relative z-10 ${isEven ? 'lg:mr-auto lg:ml-[10%]' : 'lg:ml-auto lg:mr-[10%]'}`}
      >
        
        {/* Editorial Text Block */}
        <div className="flex-1 flex flex-col justify-center">
          <span className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-stone-400 block mb-4 border-l border-stone-400 pl-4">
            {exp.duration}
          </span>
          <h4 className="text-4xl font-heading font-medium text-stone-900 leading-[1.1] mb-2">
            {exp.role}
          </h4>
          <div className="text-sm font-sans font-bold uppercase tracking-widest text-stone-500 mb-8">
            {exp.company} &mdash; {exp.location}
          </div>
          
          <div className="space-y-4">
            {exp.achievements.map((achievement: string, aIdx: number) => (
              <p key={aIdx} className="text-stone-600 font-sans text-lg leading-relaxed font-light">
                {achievement}
              </p>
            ))}
          </div>
        </div>

        {/* Minimal Analytics Visualization / Dashboard Graphic */}
        <div className="flex-1 h-[300px] border border-stone-200 bg-white shadow-sm flex flex-col p-6 relative overflow-hidden">
           <h5 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-stone-400 mb-6">Performance Dashboard</h5>
           
           {/* Abstract Bar Chart */}
           <div className="flex-1 flex items-end justify-between gap-2 px-4 border-b border-stone-200 pb-4">
             {[40, 70, 45, 90, 60, 85].map((h, i) => (
               <motion.div 
                 key={i} 
                 initial={{ height: 0 }}
                 whileInView={{ height: `${h}%` }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: i * 0.1 }}
                 className="w-8 bg-stone-900"
               />
             ))}
           </div>
           
           <div className="pt-4 flex justify-between items-center text-[10px] font-sans font-bold uppercase tracking-widest text-stone-500">
             <span>Data Extraction</span>
             <span>Visualization</span>
           </div>
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

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 w-full relative bg-[#F4F1EA] editorial-border">
      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[56px] md:text-[80px] font-heading font-medium leading-[0.9] text-stone-900 tracking-[-0.03em]">
              The <br />Professional <br />Path.
            </h2>
          </motion.div>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Subtle Background SVG Wave */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-stone-300" />
          
          <motion.div 
            style={{ height: pathHeight }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[3px] bg-stone-900 origin-top"
          />
          
          <div className="flex flex-col py-20">
            {resumeData.experience.map((exp, idx) => (
              <PathNode 
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

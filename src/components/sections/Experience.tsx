"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { resumeData } from "@/data/resumeData";

function JourneyNode({ exp, idx, scrollYProgress, totalItems }: { exp: { role: string, duration: string, company: string, location: string, achievements: string[] }, idx: number, scrollYProgress: MotionValue<number>, totalItems: number }) {
  const isEven = idx % 2 === 0;
  
  // Calculate activation based on scroll
  const step = 1 / totalItems;
  const start = idx * step;
  const end = start + step;
  
  const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.9, 1, 1, 0.9]);
  const yOffset = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [50, 0, 0, -50]);
  const dotColor = useTransform(scrollYProgress, [start, start + 0.1], ["#E7E5E4", "#1C1917"]);
  const dotScale = useTransform(scrollYProgress, [start, start + 0.1], [1, 1.5]);

  return (
    <div className="relative w-full min-h-[60vh] flex items-center justify-center">
      
      {/* Center Track Dot */}
      <motion.div 
        style={{ backgroundColor: dotColor, scale: dotScale }}
        className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-20 shadow-sm"
      />

      <motion.div
        style={{ opacity, scale, y: yOffset }}
        className={`w-full max-w-lg p-10 glass-card-premium relative z-10 ${isEven ? 'md:ml-auto md:mr-16 lg:mr-32' : 'md:mr-auto md:ml-16 lg:ml-32'}`}
      >
        <span className="text-sm font-sans font-bold tracking-[0.2em] uppercase text-stone-400 block mb-4">
          {exp.duration}
        </span>
        <h4 className="text-3xl font-heading font-medium text-stone-900 leading-tight mb-2">
          {exp.role}
        </h4>
        <div className="text-lg text-stone-500 font-sans mb-8">
          <span className="font-medium text-stone-800">{exp.company}</span> &nbsp;&middot;&nbsp; {exp.location}
        </div>
        
        <div className="space-y-4">
          {exp.achievements.map((achievement: string, aIdx: number) => (
            <p key={aIdx} className="text-stone-600 font-sans text-lg leading-relaxed font-light">
              {achievement}
            </p>
          ))}
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
    <section id="experience" className="py-32 w-full relative z-10">
      <div className="container mx-auto px-6 max-w-6xl relative z-20">
        
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[40px] md:text-[64px] font-heading font-medium leading-[1] text-stone-900 tracking-tight">
              The <span className="text-stone-400 italic font-light">Journey.</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Background Track */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-stone-200" />
          
          {/* Animated Fill Track */}
          <motion.div 
            style={{ height: pathHeight }}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-stone-900 origin-top"
          />
          
          <div className="flex flex-col relative z-20 py-20">
            {resumeData.experience.map((exp, idx) => (
              <JourneyNode 
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

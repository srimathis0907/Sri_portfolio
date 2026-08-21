"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import { Trophy, Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

function AnimatedCounter({ value, label }: { value: number, label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const totalDuration = 2000;
      const incrementTime = (totalDuration / end);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-5xl md:text-6xl font-black text-slate-900 mb-2">{count}+</span>
      <span className="text-slate-500 font-bold uppercase tracking-widest text-xs">{label}</span>
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 w-full relative z-10 bg-slate-50/50">
      <div className="container mx-auto px-6 max-w-6xl relative z-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-indigo-500 mb-4">Milestones</h2>
          <h3 className="text-[40px] md:text-[56px] font-heading font-black leading-[1.1] text-slate-900 tracking-tight">
            Awards & <span className="text-gradient-primary">Recognition.</span>
          </h3>
        </motion.div>

        {/* Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          <AnimatedCounter value={3} label="Projects Delivered" />
          <AnimatedCounter value={5} label="Tech Stack Mastery" />
          <AnimatedCounter value={8} label="CGPA Maintained" />
          <AnimatedCounter value={1} label="Awards Won" />
        </div>

        {/* Spotlight Cards */}
        <div className="grid md:grid-cols-1 max-w-3xl mx-auto gap-8">
          {resumeData.achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel p-8 md:p-12 rounded-[32px] group relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-orange-500/0 group-hover:via-amber-500/10 transition-colors duration-500 pointer-events-none" />
              
              <div className="w-24 h-24 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 flex-shrink-0 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-orange-500 group-hover:text-white transition-all duration-500 shadow-lg shadow-amber-500/10">
                <Trophy size={40} />
              </div>
              
              <div className="text-center md:text-left z-10">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3 text-amber-500">
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                </div>
                <h4 className="text-2xl md:text-3xl font-heading font-black text-slate-900 mb-3 leading-tight">
                  {achievement.title}
                </h4>
                <p className="text-lg font-medium text-slate-600">
                  {achievement.organization}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

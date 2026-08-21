"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { resumeData } from "@/data/resumeData";

const SKILL_GROUPS = [
  { id: "languages", label: "Languages", items: resumeData.skills.programming },
  { id: "frameworks", label: "Frameworks & Libraries", items: ["React", "Next.js", "Spring Boot", "Express", "Node.js"] },
  { id: "database", label: "Database", items: resumeData.skills.database },
  { id: "tools", label: "Ecosystem & Tools", items: resumeData.skills.tools }
];

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 md:py-32 w-full bg-[#FCFCFA] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-heading font-extrabold text-[#0F172A] tracking-tight mb-4"
          >
            Technology Ecosystem.
          </motion.h2>
          <p className="text-[#475569] font-sans text-lg">
            Vercel-style integration dashboard for technical competencies.
          </p>
        </div>

        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-6 relative">
          
          {/* Left Column: Group Selectors */}
          <div className="w-full md:w-1/3 flex flex-col gap-2">
            {SKILL_GROUPS.map((group) => (
              <div 
                key={group.id}
                onMouseEnter={() => setActiveGroup(group.id)}
                onMouseLeave={() => setActiveGroup(null)}
                className={`p-4 rounded-xl cursor-default transition-all duration-300 border ${activeGroup === group.id ? 'bg-white border-[rgba(15,23,42,0.08)] shadow-sm' : 'bg-transparent border-transparent hover:bg-white/50'}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-sans font-semibold text-sm ${activeGroup === group.id ? 'text-[#0F172A]' : 'text-[#475569]'}`}>
                    {group.label}
                  </span>
                  {activeGroup === group.id && (
                     <motion.div layoutId="tealDot" className="w-2 h-2 rounded-full bg-teal-500" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Interactive Grid (Vercel Style) */}
          <div className="w-full md:w-2/3 bg-white border border-[rgba(15,23,42,0.08)] rounded-2xl p-8 shadow-sm min-h-[300px] relative overflow-hidden flex items-center justify-center">
            
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            {!activeGroup ? (
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-[#F3F4F6] rounded-2xl flex items-center justify-center mb-4 border border-[rgba(15,23,42,0.04)]">
                   <svg className="w-6 h-6 text-[#94A3B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                   </svg>
                </div>
                <p className="text-sm font-sans text-[#475569]">Hover over a category to explore.</p>
              </div>
            ) : (
              <motion.div 
                key={activeGroup}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-wrap justify-center gap-4 relative z-10"
              >
                {SKILL_GROUPS.find(g => g.id === activeGroup)?.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="px-5 py-3 bg-white border border-[rgba(15,23,42,0.08)] rounded-xl shadow-sm hover:border-teal-300 hover:shadow-[0_4px_20px_rgba(20,184,166,0.1)] transition-all duration-300 flex items-center gap-3 cursor-default"
                  >
                    <div className="w-2 h-2 rounded-full bg-teal-400" />
                    <span className="font-sans font-semibold text-sm text-[#0F172A]">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

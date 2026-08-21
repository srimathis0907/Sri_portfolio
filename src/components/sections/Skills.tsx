"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { resumeData } from "@/data/resumeData";

const SKILL_CLUSTERS = [
  {
    id: "core",
    title: "Core Architecture",
    x: "30%",
    y: "40%",
    skills: [...resumeData.skills.programming, ...resumeData.skills.coreConcepts],
  },
  {
    id: "data",
    title: "Data Intelligence",
    x: "70%",
    y: "30%",
    skills: [...resumeData.skills.database, "Analytics", "System Design"],
  },
  {
    id: "ecosystem",
    title: "Ecosystem Tools",
    x: "50%",
    y: "70%",
    skills: resumeData.skills.tools,
  }
];

export default function Skills() {
  const [activeCluster, setActiveCluster] = useState<string | null>(null);

  return (
    <section id="skills" className="py-32 md:py-48 w-full relative overflow-hidden bg-[#F4F1EA] editorial-border">
      
      <div className="container mx-auto px-6 mb-20 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-stone-400 mb-6">
            Technical Constellation
          </h2>
        </motion.div>
      </div>

      {/* Floating Galaxy Area */}
      <div className="relative w-full h-[600px] md:h-[800px] max-w-7xl mx-auto flex items-center justify-center pointer-events-auto">
        
        {/* Minimalist SVG Network Grid Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 1000 800" preserveAspectRatio="none">
           <path d="M 300 320 L 700 240 L 500 560 Z" className="text-stone-300" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 4" />
           <circle cx="300" cy="320" r="100" stroke="#D9D2C5" strokeWidth="1" fill="none" />
           <circle cx="700" cy="240" r="120" stroke="#D9D2C5" strokeWidth="1" fill="none" />
           <circle cx="500" cy="560" r="140" stroke="#D9D2C5" strokeWidth="1" fill="none" />
        </svg>

        {SKILL_CLUSTERS.map((cluster) => {
          const isActive = activeCluster === cluster.id;
          const isFaded = activeCluster !== null && !isActive;

          return (
            <motion.div
              key={cluster.id}
              className="absolute flex flex-col items-center justify-center cursor-pointer group"
              style={{ left: cluster.x, top: cluster.y, x: "-50%", y: "-50%" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              onHoverStart={() => setActiveCluster(cluster.id)}
              onHoverEnd={() => setActiveCluster(null)}
              animate={{
                opacity: isFaded ? 0.2 : 1,
              }}
            >
              {/* Raw Typography Core Node */}
              <div className="relative z-10 flex items-center justify-center p-8 bg-[#F4F1EA] rounded-full border border-stone-200 shadow-[0_0_40px_rgba(0,0,0,0.02)] transition-transform duration-500 hover:scale-105">
                <span className="font-heading font-medium text-xl md:text-2xl tracking-tight text-stone-900">
                  {cluster.title}
                </span>
                
                {/* Active Indicator Ring */}
                {isActive && (
                  <motion.div 
                    layoutId="activeRing"
                    className="absolute inset-[-10px] rounded-full border border-stone-800"
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />
                )}
              </div>

              {/* Orbiting Minimal Skills */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 pointer-events-none"
                  >
                    {cluster.skills.map((skill, idx) => {
                      const angle = (idx / cluster.skills.length) * Math.PI * 2;
                      const radius = 180; 
                      const tx = Math.cos(angle) * radius;
                      const ty = Math.sin(angle) * radius;

                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 0, y: 0 }}
                          animate={{ opacity: 1, x: tx, y: ty }}
                          exit={{ opacity: 0, x: 0, y: 0 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 150, 
                            damping: 15, 
                            delay: idx * 0.05 
                          }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-stone-900 text-[#F4F1EA] whitespace-nowrap font-sans font-medium text-xs tracking-widest uppercase z-20"
                        >
                          {skill}
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { resumeData } from "@/data/resumeData";

const SKILL_CLUSTERS = [
  {
    id: "core",
    title: "Core Programming",
    x: "20%",
    y: "30%",
    skills: [...resumeData.skills.programming, ...resumeData.skills.coreConcepts],
    color: "bg-stone-900",
    textColor: "text-white"
  },
  {
    id: "data",
    title: "Data & Architecture",
    x: "70%",
    y: "20%",
    skills: [...resumeData.skills.database, "Analytics", "System Design"],
    color: "bg-rose-quartz",
    textColor: "text-stone-900"
  },
  {
    id: "tools",
    title: "Development Ecosystem",
    x: "50%",
    y: "60%",
    skills: resumeData.skills.tools,
    color: "bg-lavender-mist",
    textColor: "text-stone-900"
  }
];

export default function Skills() {
  const [activeCluster, setActiveCluster] = useState<string | null>(null);

  return (
    <section id="skills" className="py-32 md:py-48 w-full relative z-10 overflow-hidden">
      
      <div className="container mx-auto px-6 mb-20 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-[40px] md:text-[64px] font-heading font-medium leading-[1] text-stone-900 tracking-tight">
            Technical <span className="text-stone-400 italic font-light">Ecosystem.</span>
          </h2>
        </motion.div>
      </div>

      {/* Floating Galaxy Area */}
      <div className="relative w-full h-[600px] md:h-[800px] max-w-7xl mx-auto flex items-center justify-center">
        
        {/* Subtle connecting lines (Abstract background representation) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" stroke="currentColor" fill="none">
           <path d="M 20% 30% Q 50% 10% 70% 20% T 50% 60% Z" className="text-stone-300" strokeWidth="1" strokeDasharray="4 4" />
        </svg>

        {SKILL_CLUSTERS.map((cluster) => {
          const isActive = activeCluster === cluster.id;
          const isFaded = activeCluster !== null && !isActive;

          return (
            <motion.div
              key={cluster.id}
              className="absolute flex flex-col items-center justify-center cursor-pointer group"
              style={{ left: cluster.x, top: cluster.y, x: "-50%", y: "-50%" }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              onHoverStart={() => setActiveCluster(cluster.id)}
              onHoverEnd={() => setActiveCluster(null)}
              animate={{
                opacity: isFaded ? 0.3 : 1,
                scale: isActive ? 1.05 : 1,
              }}
            >
              {/* Core Node */}
              <div className={`w-32 h-32 md:w-48 md:h-48 rounded-full ${cluster.color} ${cluster.textColor} flex items-center justify-center text-center p-6 shadow-xl transition-all duration-500 relative z-10`}>
                <span className="font-heading font-medium text-lg md:text-xl leading-tight">
                  {cluster.title}
                </span>
              </div>

              {/* Orbiting Skills */}
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
                      // Distribute in a circle around the core node
                      const angle = (idx / cluster.skills.length) * Math.PI * 2;
                      const radius = 140; // Desktop radius
                      const tx = Math.cos(angle) * radius;
                      const ty = Math.sin(angle) * radius;

                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                          animate={{ opacity: 1, x: tx, y: ty, scale: 1 }}
                          exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 200, 
                            damping: 20, 
                            delay: idx * 0.05 
                          }}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-white/80 backdrop-blur-md border border-white rounded-full shadow-lg whitespace-nowrap text-stone-700 font-sans font-medium text-sm z-20"
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

        {/* Floating Particles */}
        <motion.div animate={{ y: [-20, 20, -20], x: [10, -10, 10] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-[20%] left-[40%] w-2 h-2 rounded-full bg-stone-300" />
        <motion.div animate={{ y: [20, -20, 20], x: [-10, 10, -10] }} transition={{ duration: 15, repeat: Infinity }} className="absolute bottom-[30%] right-[40%] w-3 h-3 rounded-full bg-stone-400" />

      </div>
    </section>
  );
}

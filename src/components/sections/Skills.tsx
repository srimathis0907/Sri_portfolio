"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { resumeData } from "@/data/resumeData";
import { Code2, Database, Wrench, Sparkles } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    id: "programming",
    title: "Core Programming",
    icon: <Code2 size={24} />,
    items: [...resumeData.skills.programming, ...resumeData.skills.coreConcepts],
    color: "text-orchid"
  },
  {
    id: "database",
    title: "Database & Analytics",
    icon: <Database size={24} />,
    items: [...resumeData.skills.database, "Data Analytics", "Power BI"],
    color: "text-coral"
  },
  {
    id: "tools",
    title: "Development Tools",
    icon: <Wrench size={24} />,
    items: resumeData.skills.tools,
    color: "text-sky"
  },
  {
    id: "soft",
    title: "Professional Skills",
    icon: <Sparkles size={24} />,
    items: resumeData.skills.softSkills,
    color: "text-rose"
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("programming");

  return (
    <section id="skills" className="py-32 w-full relative z-10 bg-ivory">
      <div className="container mx-auto px-6 max-w-6xl relative z-20">
        
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-orchid mb-4">
              Technical Capabilities
            </h2>
            <h3 className="text-[40px] md:text-[56px] font-heading font-medium leading-[1.1] text-slate-900 tracking-tight">
              Arsenal & Expertise
            </h3>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Category Selector */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group flex items-center gap-6 p-6 rounded-3xl transition-all duration-500 text-left border ${
                  activeCategory === cat.id 
                    ? "bg-white border-slate-200 shadow-[0_20px_40px_rgb(0,0,0,0.03)]" 
                    : "bg-transparent border-transparent hover:bg-slate-50"
                }`}
              >
                <div className={`transition-colors duration-500 ${activeCategory === cat.id ? cat.color : "text-slate-400 group-hover:text-slate-600"}`}>
                  {cat.icon}
                </div>
                <span className={`font-heading font-medium text-lg transition-colors duration-500 ${
                  activeCategory === cat.id ? "text-slate-900" : "text-slate-500 group-hover:text-slate-700"
                }`}>
                  {cat.title}
                </span>
              </button>
            ))}
          </div>

          {/* Items Display */}
          <div className="w-full lg:w-2/3 bg-white border border-slate-100 rounded-3xl p-10 md:p-16 min-h-[400px]">
            <AnimatePresence mode="wait">
              {SKILL_CATEGORIES.map((cat) => (
                cat.id === activeCategory && (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap gap-4"
                  >
                    {cat.items.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                        className="px-6 py-3 rounded-full border border-slate-200 text-slate-700 font-sans font-medium text-lg hover:border-orchid hover:text-orchid transition-colors duration-300 cursor-default shadow-sm"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

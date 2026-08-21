"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import { Lightbulb, Target, Code, Users } from "lucide-react";

const ABOUT_ITEMS = [
  {
    icon: <Lightbulb size={24} />,
    title: "The Passion",
    desc: "Driven by a deep interest in building user-focused applications that bridge the gap between complex logic and seamless digital experiences.",
    color: "text-indigo-600",
    bg: "bg-indigo-100",
  },
  {
    icon: <Code size={24} />,
    title: "The Approach",
    desc: "Approaching problems with an analytical mindset, whether it's optimizing a SQL query or building an Agile Android module from scratch.",
    color: "text-cyan-600",
    bg: "bg-cyan-100",
  },
  {
    icon: <Users size={24} />,
    title: "The Mindset",
    desc: "Strong believer in team collaboration, adaptability, and time management, thriving in Agile and Scrum environments.",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    icon: <Target size={24} />,
    title: "The Vision",
    desc: "Looking to apply core programming skills and data analytics insights to a collaborative software engineering role at a leading product company.",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 w-full relative z-10 overflow-hidden border-t border-slate-200/40">
      <div className="ambient-glow bg-indigo-300/20 w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-12 md:items-end mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-indigo-500 mb-4">
              My Narrative
            </h2>
            <h3 className="text-[40px] md:text-[56px] font-heading font-black leading-[1.1] text-slate-900 tracking-tight">
              Engineering with <br />
              <span className="text-gradient-primary">Clarity.</span>
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:w-1/2"
          >
            <p className="text-slate-600 text-[18px] md:text-[20px] leading-[1.7] font-medium">
              {resumeData.personal.summary}
            </p>
          </motion.div>
        </div>

        {/* Narrative Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {ABOUT_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel p-10 rounded-[32px] group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

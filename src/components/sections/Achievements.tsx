"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import { Star, Trophy, Target } from "lucide-react";

export default function Achievements() {
  const highlights = [
    {
      title: "Oracle Certified Java SE 17 Developer",
      subtitle: "Professional Credential",
      icon: <Target size={28} className="text-coral" strokeWidth={1.5} />,
      bg: "bg-coral/10"
    },
    {
      title: resumeData.achievements[0].title,
      subtitle: resumeData.achievements[0].organization,
      icon: <Trophy size={28} className="text-orchid" strokeWidth={1.5} />,
      bg: "bg-orchid/10"
    },
    {
      title: "Data Analytics Internship",
      subtitle: "CodeFluxz",
      icon: <Star size={28} className="text-sky" strokeWidth={1.5} />,
      bg: "bg-sky/10"
    }
  ];

  return (
    <section id="achievements" className="py-32 w-full relative z-10 bg-pearl">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-orchid mb-4">
              Milestones
            </h2>
            <h3 className="text-[40px] md:text-[56px] font-heading font-medium leading-[1.1] text-slate-900 tracking-tight">
              Key Highlights
            </h3>
          </motion.div>
        </div>

        {/* Real Highlight Cards (No generic counters) */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="editorial-card p-10 flex flex-col items-start gap-8"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${item.bg}`}>
                {item.icon}
              </div>
              
              <div>
                <h4 className="text-2xl font-heading font-medium text-slate-900 mb-2 leading-tight">
                  {item.title}
                </h4>
                <p className="text-sm font-semibold tracking-[0.1em] uppercase text-slate-400">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

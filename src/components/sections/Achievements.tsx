"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export default function Achievements() {
  const highlights = [
    {
      title: "Oracle Certified Java SE 17 Developer",
      subtitle: "Verified Global Credential",
      year: "2024"
    },
    {
      title: resumeData.achievements[0].title,
      subtitle: resumeData.achievements[0].organization,
      year: "2024"
    },
    {
      title: "Data Analytics Intern",
      subtitle: "CodeFluxz - Performance Excellence",
      year: "2023"
    },
    {
      title: "Academic Excellence",
      subtitle: "CGPA 8.26 / 10",
      year: "2026"
    }
  ];

  return (
    <section id="achievements" className="py-32 w-full relative z-10 bg-stone-900 text-white overflow-hidden">
      
      {/* Dark Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-20">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-stone-400 mb-6">
              Recognition Wall
            </h2>
            <h3 className="text-[40px] md:text-[64px] font-heading font-medium leading-[1.1] text-white tracking-tight">
              Professional <br />
              <span className="text-stone-400 italic font-light">Milestones.</span>
            </h3>
          </motion.div>
        </div>

        <div className="flex flex-col border-t border-stone-800">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-stone-800 hover:bg-stone-800/30 transition-colors duration-500 px-8 -mx-8 rounded-2xl cursor-default"
            >
              <div className="flex-1">
                <h4 className="text-2xl md:text-4xl font-heading font-medium text-white mb-2 group-hover:pl-4 transition-all duration-500">
                  {item.title}
                </h4>
                <p className="text-stone-400 font-sans text-lg font-light group-hover:pl-4 transition-all duration-500 delay-75">
                  {item.subtitle}
                </p>
              </div>
              <div className="mt-6 md:mt-0 text-stone-600 font-heading font-light text-2xl md:text-3xl tracking-widest">
                {item.year}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

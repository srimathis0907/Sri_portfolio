"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export default function Achievements() {
  const highlights = [
    {
      title: "Oracle Certified Professional: Java SE 17 Developer",
      subtitle: "Verified Global Credential",
      year: "2025"
    },
    {
      title: resumeData.achievements[0].title,
      subtitle: resumeData.achievements[0].organization,
      year: "2026"
    },
    {
      title: "Data Analytics Intern",
      subtitle: "CodeFluxz - Performance Excellence",
      year: "2025"
    },
    {
      title: "Academic Excellence",
      subtitle: "CGPA 8.25 / 10",
      year: "2026"
    }
  ];

  return (
    <section id="achievements" className="py-32 w-full relative bg-[#F4F1EA] editorial-border">
      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        
        <div className="mb-24 flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-right"
          >
            <h2 className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-stone-400 mb-6">
              Gallery of Distinction
            </h2>
            <h3 className="text-[40px] md:text-[64px] font-heading font-medium leading-[1] text-stone-900 tracking-tight">
              Selected <br />
              <span className="text-stone-400 italic font-light">Honors.</span>
            </h3>
          </motion.div>
        </div>

        <div className="flex flex-col">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row md:items-end justify-between py-12 border-t border-stone-300 hover:border-stone-900 transition-colors duration-700 cursor-default"
            >
              <div className="flex-1 pr-8">
                <span className="block text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-stone-400 mb-4 group-hover:text-stone-900 transition-colors">
                  0{idx + 1}
                </span>
                <h4 className="text-3xl md:text-5xl font-heading font-medium text-stone-900 mb-4 group-hover:opacity-60 transition-opacity duration-500 leading-tight">
                  {item.title}
                </h4>
                <p className="text-stone-500 font-sans text-lg font-light">
                  {item.subtitle}
                </p>
              </div>
              
              <div className="mt-8 md:mt-0">
                <div className="w-16 h-16 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-[#F4F1EA] transition-all duration-700">
                  <span className="text-sm font-sans font-bold tracking-widest">{item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-stone-300" />
        </div>
        
      </div>
    </section>
  );
}

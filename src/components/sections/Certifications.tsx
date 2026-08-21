"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import { BadgeCheck, ArrowUpRight } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 w-full relative z-10 bg-ivory">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-orchid mb-4">
              Credentials
            </h2>
            <h3 className="text-[40px] md:text-[56px] font-heading font-medium leading-[1.1] text-slate-900 tracking-tight">
              Certifications
            </h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {resumeData.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group editorial-card p-10 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[300px] cursor-pointer"
            >
              {/* Animated Ribbon */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orchid/5 rounded-bl-full group-hover:scale-150 transition-transform duration-700 ease-out pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <BadgeCheck size={28} className="text-orchid" strokeWidth={1.5} />
                  <span className="text-sm font-semibold tracking-[0.1em] uppercase text-slate-400">Verified Credential</span>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-heading font-medium text-slate-900 leading-snug max-w-sm group-hover:text-orchid transition-colors duration-300">
                  {cert.title}
                </h4>
              </div>
              
              <div className="relative z-10 flex items-center justify-between mt-12 pt-6 border-t border-slate-100">
                <span className="text-sm font-medium font-sans text-slate-500 uppercase tracking-widest">
                  {cert.date}
                </span>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-orchid group-hover:border-orchid group-hover:text-white group-hover:rotate-45 transition-all duration-500">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 w-full relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-stone-200 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[40px] md:text-[56px] font-heading font-medium leading-[1] text-stone-900 tracking-tight">
              Verified <span className="text-stone-400 italic font-light">Credentials.</span>
            </h2>
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
              className="group relative h-[350px] rounded-[2rem] overflow-hidden bg-white border border-stone-200 p-10 flex flex-col justify-between cursor-pointer"
            >
              {/* Animated Hover Light */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/50 to-stone-100 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-stone-100 rounded-full blur-[50px] group-hover:bg-rose-quartz/40 transition-colors duration-700 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  {/* Luxury Seal */}
                  <div className="w-12 h-12 rounded-full border border-stone-900 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>
                  <span className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-stone-500">Official Certification</span>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-heading font-medium text-stone-900 leading-snug group-hover:text-stone-700 transition-colors duration-500">
                  {cert.title}
                </h4>
              </div>
              
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-sm font-sans font-bold text-stone-400 uppercase tracking-widest">
                  {cert.date}
                </span>
                <div className="overflow-hidden h-6 flex items-center">
                  <span className="text-sm font-sans font-medium text-stone-900 uppercase tracking-widest translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    View Credential
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

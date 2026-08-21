"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 w-full relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-indigo-500 mb-4">Credentials</h2>
          <h3 className="text-[40px] md:text-[56px] font-heading font-black leading-[1.1] text-slate-900 tracking-tight">
            Professional <span className="text-gradient-primary">Certifications.</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {resumeData.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel p-8 rounded-[32px] group relative overflow-hidden flex flex-col justify-between min-h-[250px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-indigo-500/5 group-hover:to-cyan-500/10 transition-colors duration-500" />
              
              <div>
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  <Award size={28} />
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
                  {cert.title}
                </h4>
              </div>
              
              <div className="flex items-center justify-between mt-8 border-t border-slate-100 pt-4">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                  {cert.date}
                </span>
                <ExternalLink size={18} className="text-slate-300 group-hover:text-indigo-600 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

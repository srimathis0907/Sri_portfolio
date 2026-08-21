"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 w-full relative bg-[#F4F1EA] editorial-border">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-24 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <h2 className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-stone-400 mb-6">
              Official Credentials
            </h2>
            <h3 className="text-[56px] md:text-[80px] font-heading font-medium leading-[0.9] text-stone-900 tracking-[-0.03em]">
              Verified <br />Excellence.
            </h3>
          </motion.div>
        </div>

        <div className="flex flex-col gap-16">
          {resumeData.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group relative w-full lg:w-3/4 mx-auto bg-stone-100 p-12 md:p-20 flex flex-col justify-center items-center text-center cursor-default border border-stone-200"
            >
              {/* Premium Paper Texture / Foil Shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] ease-in-out pointer-events-none" />
              
              {/* Gold Seal Graphic */}
              <div className="w-24 h-24 mb-10 relative flex items-center justify-center">
                 <svg viewBox="0 0 100 100" className="w-full h-full absolute animate-spin-slow" style={{ animationDuration: '20s' }}>
                    <polygon points="50,5 61,25 82,25 71,45 82,65 61,65 50,85 39,65 18,65 29,45 18,25 39,25" fill="none" stroke="#C97A7E" strokeWidth="1" />
                    <circle cx="50" cy="45" r="20" fill="none" stroke="#C97A7E" strokeWidth="1" />
                 </svg>
                 <span className="font-heading text-2xl text-[#C97A7E]">1</span>
              </div>
              
              <h4 className="text-3xl md:text-5xl font-heading font-medium text-stone-900 leading-tight mb-8">
                {cert.title}
              </h4>
              
              <div className="flex items-center gap-6">
                 <div className="h-[1px] w-12 bg-stone-300" />
                 <span className="text-sm font-sans font-bold text-stone-500 uppercase tracking-[0.2em]">
                   {cert.date}
                 </span>
                 <div className="h-[1px] w-12 bg-stone-300" />
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

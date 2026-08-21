"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 w-full bg-[#FCFCFA] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-heading font-extrabold text-[#0F172A] tracking-tight mb-4"
          >
            Verified Credentials.
          </motion.h2>
          <p className="text-[#475569] font-sans text-lg">
            Global certifications and professional milestones.
          </p>
        </div>

        {/* Apple Wallet Style Stack */}
        <div className="relative w-full max-w-2xl mx-auto h-[400px] flex justify-center perspective-1000">
           {resumeData.certifications.map((cert, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 50, rotateX: 20 }}
               whileInView={{ opacity: 1, y: idx * 40, rotateX: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: idx * 0.2, type: "spring", stiffness: 100 }}
               whileHover={{ y: idx * 40 - 20, rotateX: 5, scale: 1.02 }}
               className="absolute top-0 w-full bg-white rounded-3xl border border-[rgba(15,23,42,0.08)] p-8 shadow-[0_20px_40px_rgba(15,23,42,0.06)] overflow-hidden cursor-pointer group"
               style={{ zIndex: resumeData.certifications.length - idx }}
             >
                {/* Holographic Reflection (CSS) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out pointer-events-none" />
                
                <div className="flex justify-between items-start mb-12">
                   {/* Gold Seal SVG */}
                   <div className="flex items-center gap-2">
                      <svg viewBox="0 0 100 100" className="w-8 h-8 group-hover:rotate-180 transition-transform duration-1000">
                         <polygon points="50,5 61,25 82,25 71,45 82,65 61,65 50,85 39,65 18,65 29,45 18,25 39,25" fill="#F59E0B" />
                         <circle cx="50" cy="45" r="15" fill="#FCFCFA" />
                         <path d="M45,45 L50,50 L58,40" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#F59E0B]">Verified</span>
                   </div>
                   <div className="text-right">
                      <span className="block text-xs font-sans font-semibold text-[#94A3B8] uppercase tracking-widest mb-1">Issued</span>
                      <span className="font-sans font-bold text-[#0F172A]">{cert.date}</span>
                   </div>
                </div>

                <div>
                   <h3 className="text-2xl font-heading font-extrabold text-[#0F172A] mb-2 leading-tight">
                     {cert.title}
                   </h3>
                   <div className="w-12 h-1 bg-[#F3F4F6] rounded-full mt-6 group-hover:bg-[#F59E0B] transition-colors duration-500" />
                </div>
             </motion.div>
           ))}
        </div>
        
      </div>
    </section>
  );
}

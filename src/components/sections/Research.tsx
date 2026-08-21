"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export default function Research() {
  const research = resumeData.research;

  return (
    <section id="research" className="py-24 md:py-32 w-full bg-[#FAFAF8] relative overflow-hidden border-y border-[rgba(15,23,42,0.06)]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left: DeepMind Style Academic Text */}
          <div className="w-full lg:w-1/2 flex flex-col pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-amber-50 border border-amber-100 rounded-lg text-amber-700 text-xs font-sans font-bold uppercase tracking-widest mb-8">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                 </svg>
                 Published Research
              </div>

              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6">
                {research.title}
              </h2>
              
              <p className="text-[15px] font-sans font-semibold text-[#475569] mb-8">
                Presented at <span className="text-[#0F172A]">{research.event}</span>
              </p>

              <div className="space-y-6 text-[#475569] font-sans text-[15px] leading-relaxed">
                 <p>{research.description}</p>
                 <p>{research.results}</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Pure SVG Animated Graph (Google Research Style) */}
          <div className="w-full lg:w-1/2">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="w-full bg-white border border-[rgba(15,23,42,0.08)] rounded-2xl p-8 shadow-sm"
             >
                <div className="flex items-center justify-between mb-8">
                   <h3 className="font-sans font-bold text-sm uppercase tracking-widest text-[#0F172A]">Efficacy Analysis</h3>
                   <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded bg-amber-500" />
                         <span className="text-xs font-sans text-[#475569]">RNN Model</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded bg-[#E2E8F0]" />
                         <span className="text-xs font-sans text-[#475569]">SVM Baseline</span>
                      </div>
                   </div>
                </div>

                {/* Animated Comparison Chart */}
                <div className="w-full h-64 relative flex items-end gap-8 border-b border-l border-[#E2E8F0] px-6 pb-0 pt-6">
                   {/* Y Axis Labels */}
                   <div className="absolute left-[-30px] top-0 bottom-0 flex flex-col justify-between text-[10px] font-sans text-[#94A3B8] pb-6">
                      <span>100%</span>
                      <span>50%</span>
                      <span>0%</span>
                   </div>

                   {/* SVM Bar */}
                   <div className="flex-1 flex flex-col items-center gap-3 relative h-full justify-end">
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: "84.57%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full max-w-[80px] bg-[#E2E8F0] rounded-t-md relative group"
                      >
                         <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[11px] font-sans font-bold text-[#475569] opacity-0 group-hover:opacity-100 transition-opacity">84.57%</span>
                      </motion.div>
                      <span className="text-[11px] font-sans font-bold text-[#475569] absolute -bottom-6">Baseline (SVM)</span>
                   </div>

                   {/* RNN Bar */}
                   <div className="flex-1 flex flex-col items-center gap-3 relative h-full justify-end">
                      <motion.div 
                        initial={{ height: 0 }}
                        whileInView={{ height: "97.25%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                        className="w-full max-w-[80px] bg-amber-500 rounded-t-md relative group shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                      >
                         <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[11px] font-sans font-bold text-amber-600 opacity-100">97.25%</span>
                      </motion.div>
                      <span className="text-[11px] font-sans font-bold text-[#0F172A] absolute -bottom-6">Proposed (RNN)</span>
                   </div>
                </div>
                
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

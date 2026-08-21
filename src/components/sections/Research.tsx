"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import { FileText, ChevronRight } from "lucide-react";

export default function Research() {
  const research = resumeData.research;

  return (
    <section id="research" className="py-32 w-full relative z-10 bg-champagne">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orchid/10 text-orchid rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-8">
              <FileText size={14} />
              Published Research
            </div>
            <h3 className="text-[32px] md:text-[48px] font-heading font-medium leading-[1.1] text-slate-900 tracking-tight max-w-3xl">
              {research.title}
            </h3>
            <p className="mt-6 text-slate-500 font-sans text-lg uppercase tracking-widest">
              {research.event}
            </p>
          </motion.div>
        </div>

        {/* Paper Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white border border-slate-200 p-10 md:p-20 shadow-[0_30px_60px_rgba(0,0,0,0.03)] relative max-w-4xl mx-auto"
        >
          {/* Subtle paper fold effect */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-transparent via-slate-100 to-slate-200 border-b border-l border-slate-200 shadow-sm" />
          
          <div className="grid md:grid-cols-2 gap-16">
            
            <div className="flex flex-col gap-12">
              <div>
                <h4 className="text-sm font-semibold tracking-[0.1em] uppercase text-slate-400 mb-4 flex items-center gap-2">
                  <ChevronRight size={16} className="text-orchid" />
                  Abstract & Methodology
                </h4>
                <p className="text-slate-600 font-sans leading-relaxed text-lg font-light text-justify">
                  {research.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold tracking-[0.1em] uppercase text-slate-400 mb-4 flex items-center gap-2">
                  <ChevronRight size={16} className="text-orchid" />
                  Key Findings
                </h4>
                <p className="text-slate-600 font-sans leading-relaxed text-lg font-light text-justify">
                  {research.results}
                </p>
              </div>
            </div>

            {/* Model Comparison Graph */}
            <div className="bg-slate-50 border border-slate-100 p-8 flex flex-col justify-center">
              <h4 className="text-sm font-semibold tracking-[0.1em] uppercase text-slate-900 mb-8 text-center">
                Model Accuracy Comparison
              </h4>
              
              <div className="flex flex-col gap-10">
                {/* RNN Stat */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-slate-700 font-medium font-sans">RNN (Proposed)</span>
                    <span className="text-orchid font-heading font-medium text-3xl">{research.stats.rnn}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "97.25%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="h-full bg-orchid"
                    />
                  </div>
                </div>

                {/* SVM Stat */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-slate-500 font-medium font-sans text-sm">SVM (Baseline)</span>
                    <span className="text-slate-600 font-heading font-medium text-xl">{research.stats.svm}</span>
                  </div>
                  <div className="w-full h-1 bg-slate-200 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "84.57%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="h-full bg-slate-400"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-6 border-t border-slate-200 text-center">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">
                  Significant Improvement Validated
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

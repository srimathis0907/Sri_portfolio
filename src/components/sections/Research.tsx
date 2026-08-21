"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { resumeData } from "@/data/resumeData";

export default function Research() {
  const research = resumeData.research;

  return (
    <section id="research" className="py-32 md:py-48 w-full relative z-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Editorial Paper Header */}
        <div className="flex flex-col items-center text-center mb-24 border-b border-stone-200 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center justify-center mb-12">
               {/* Elegant Published Badge */}
               <div className="px-6 py-2 border border-stone-200 bg-stone-50 rounded-full flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-stone-900 animate-pulse" />
                  <span className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-stone-900">Published Research Paper</span>
               </div>
            </div>
            
            <h3 className="text-[48px] md:text-[72px] lg:text-[88px] font-heading font-medium leading-[0.95] text-stone-900 tracking-[-0.03em] max-w-5xl mx-auto mb-10">
              {research.title}
            </h3>
            <p className="text-stone-500 font-sans text-xl tracking-wide font-medium">
              Presented at {research.event}
            </p>
          </motion.div>
        </div>

        {/* Paper Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Visual Assets & Graph */}
          <div className="flex flex-col gap-12 lg:sticky top-40">
            
            {/* AI Neural Network Asset */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full relative aspect-video bg-stone-50 rounded-[2rem] overflow-hidden border border-stone-200 p-8 flex items-center justify-center"
            >
              <Image 
                src="/assets/ai_neural_network_1787300644692.png" 
                alt="AI Neural Network Data Visualization" 
                fill 
                className="object-cover mix-blend-multiply opacity-80 hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-lg shadow-sm">
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-stone-900">Sequential Data Flow Model</span>
              </div>
            </motion.div>

            {/* Live Data Comparison Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full bg-stone-900 text-white rounded-[2rem] p-10 md:p-14"
            >
              <h4 className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-stone-400 mb-12 text-center">
                Efficacy Metrics
              </h4>
              
              <div className="flex flex-col gap-12">
                {/* Proposed RNN */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-white font-sans font-medium text-lg">Proposed RNN Architecture</span>
                    <span className="text-white font-heading font-medium text-5xl leading-none">{research.stats.rnn}</span>
                  </div>
                  <div className="w-full h-4 bg-stone-800 rounded-full overflow-hidden relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "97.25%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-0 left-0 h-full bg-rose-400"
                    />
                  </div>
                </div>

                {/* Baseline SVM */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-stone-400 font-sans font-medium">Baseline SVM</span>
                    <span className="text-stone-400 font-heading font-medium text-2xl leading-none">{research.stats.svm}</span>
                  </div>
                  <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "84.57%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-0 left-0 h-full bg-stone-500"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Text Blocks */}
          <div className="flex flex-col gap-16 lg:pt-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-[28px] font-heading font-medium text-stone-900 mb-8 border-l-4 border-rose-400 pl-6">
                The Objective
              </h4>
              <p className="text-stone-600 font-sans leading-[1.8] text-[20px] font-light text-justify">
                {research.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-[28px] font-heading font-medium text-stone-900 mb-8 border-l-4 border-stone-900 pl-6">
                Methodology & Findings
              </h4>
              <p className="text-stone-600 font-sans leading-[1.8] text-[20px] font-light text-justify">
                {research.results}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card-premium p-10 bg-white"
            >
               <h5 className="text-sm font-sans font-bold tracking-[0.1em] uppercase text-stone-900 mb-4">Conclusion Highlights</h5>
               <ul className="space-y-4">
                 <li className="flex items-start gap-4 text-stone-600 font-sans text-lg font-light">
                   <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                   RNNs demonstrate superior capability in handling sequential emotional data streams.
                 </li>
                 <li className="flex items-start gap-4 text-stone-600 font-sans text-lg font-light">
                   <span className="w-2 h-2 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                   Identified a statistically significant reduction in false negatives compared to traditional SVMs.
                 </li>
               </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

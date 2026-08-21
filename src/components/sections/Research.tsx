"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export default function Research() {
  const research = resumeData.research;

  return (
    <section id="research" className="py-32 md:py-48 w-full relative z-10 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Editorial Paper Header */}
        <div className="flex flex-col items-center text-center mb-32 border-b border-stone-200 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 border border-stone-300 rounded-full text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-stone-500 mb-10">
              Published Academic Research
            </div>
            <h3 className="text-[40px] md:text-[56px] font-heading font-medium leading-[1.1] text-stone-900 tracking-tight max-w-4xl mx-auto mb-8">
              {research.title}
            </h3>
            <p className="text-stone-500 font-sans text-lg uppercase tracking-widest font-medium">
              {research.event}
            </p>
          </motion.div>
        </div>

        {/* Paper Layout */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Abstract & Methodology */}
          <div className="lg:col-span-7 flex flex-col gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-xl font-heading font-medium text-stone-900 mb-6 border-l-2 border-stone-900 pl-4">
                01 &nbsp; Abstract & Methodology
              </h4>
              <p className="text-stone-600 font-sans leading-[1.8] text-[19px] font-light text-justify">
                {research.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-xl font-heading font-medium text-stone-900 mb-6 border-l-2 border-stone-900 pl-4">
                02 &nbsp; Key Findings
              </h4>
              <p className="text-stone-600 font-sans leading-[1.8] text-[19px] font-light text-justify">
                {research.results}
              </p>
            </motion.div>
          </div>

          {/* Right Column: Data Visualization */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-stone-50 border border-stone-200 rounded-[2rem] p-10 flex flex-col sticky top-40"
            >
              <h4 className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-stone-400 mb-12 text-center">
                Model Efficacy Comparison
              </h4>
              
              <div className="flex flex-col gap-12">
                {/* Proposed RNN */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-stone-900 font-heading font-medium text-lg">Proposed RNN</span>
                    <span className="text-stone-900 font-heading font-medium text-4xl leading-none">{research.stats.rnn}</span>
                  </div>
                  <div className="w-full h-3 bg-stone-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "97.25%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-stone-900"
                    />
                  </div>
                </div>

                {/* Baseline SVM */}
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-stone-500 font-heading font-medium">Baseline SVM</span>
                    <span className="text-stone-500 font-heading font-medium text-2xl leading-none">{research.stats.svm}</span>
                  </div>
                  <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "84.57%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-stone-400"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-16 pt-8 border-t border-stone-200 text-center">
                <p className="text-sm font-sans font-medium text-stone-500 leading-relaxed">
                  The recurrent neural network approach yielded a statistically significant improvement in detecting cognitive distortion patterns over traditional support vector machines.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

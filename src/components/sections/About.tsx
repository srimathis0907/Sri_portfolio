"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 w-full relative bg-[#F4F1EA]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          
          {/* Left: The Massive Pull Quote & Philosophy */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center border-l-2 border-stone-800 pl-8 lg:pl-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-[40px] md:text-[64px] font-heading font-light leading-[1.1] text-stone-900 tracking-tight mb-12">
                &quot;Engineering is not writing code. It is structural logic applied to human problems.&quot;
              </h2>
              
              <div className="flex items-center gap-6 text-stone-500 font-sans text-sm tracking-[0.2em] uppercase font-bold">
                <span className="w-12 h-[1px] bg-stone-400" />
                Srimathi S
              </div>
            </motion.div>
          </div>

          {/* Right: Visual Career Map / Highlight Chips (Minimal Text) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-16 justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-heading font-medium text-stone-900 mb-6">01 &mdash; The Foundation</h3>
              <p className="text-stone-600 font-sans text-lg font-light leading-relaxed mb-8 max-w-md">
                Bridging robust native Android architecture with advanced data analytics. I prioritize performance, scalability, and extreme minimalism in logic.
              </p>
              
              {/* Visual Highlight Chips */}
              <div className="flex flex-wrap gap-3">
                {['Architecture', 'Data Science', 'Scalability', 'UI/UX'].map((chip, i) => (
                  <span key={i} className="px-5 py-2 border border-stone-300 rounded-full text-xs font-sans font-bold uppercase tracking-widest text-stone-800 hover:bg-stone-900 hover:text-white transition-colors duration-500 cursor-default">
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="w-full h-[1px] bg-stone-300" />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl font-heading font-medium text-stone-900 mb-6">02 &mdash; The Execution</h3>
              
              {/* Minimal SVG Data Workflow */}
              <div className="flex items-center gap-4 text-stone-400 mb-8 overflow-x-auto pb-4">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center font-heading text-stone-800">1</div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest">Analyze</span>
                </div>
                <div className="w-8 h-[1px] bg-stone-300" />
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center font-heading text-stone-800">2</div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest">Architect</span>
                </div>
                <div className="w-8 h-[1px] bg-stone-300" />
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-stone-900 bg-stone-900 text-white flex items-center justify-center font-heading">3</div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-stone-900">Execute</span>
                </div>
              </div>
              
              <p className="text-stone-600 font-sans text-lg font-light leading-relaxed max-w-md">
                Iterative development driven by real-world data constraints. 
              </p>
            </motion.div>

          </div>
          
        </div>
      </div>
    </section>
  );
}

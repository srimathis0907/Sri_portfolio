"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import { BrainCircuit, LineChart, Cpu } from "lucide-react";

export default function Research() {
  const research = resumeData.research;

  return (
    <section id="research" className="py-32 w-full relative z-10 overflow-hidden bg-indigo-900 text-white rounded-[40px] md:rounded-[80px] mx-4 md:mx-auto max-w-[95%]">
      
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-[inherit] pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-20">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-cyan-400 mb-4">Academic Research</h2>
          <h3 className="text-[32px] md:text-[48px] font-heading font-black leading-[1.2] text-white tracking-tight max-w-4xl mx-auto">
            {research.title}
          </h3>
          <p className="text-indigo-200 mt-6 font-medium text-lg tracking-wide uppercase">
            {research.event}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start gap-6 mb-12">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-cyan-400 flex-shrink-0 backdrop-blur-md border border-white/10">
                <BrainCircuit size={28} />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3 text-white">The Methodology</h4>
                <p className="text-indigo-200 leading-relaxed text-lg">
                  {research.description}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-purple-400 flex-shrink-0 backdrop-blur-md border border-white/10">
                <LineChart size={28} />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-3 text-white">The Impact</h4>
                <p className="text-indigo-200 leading-relaxed text-lg">
                  {research.results}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Animated Statistics Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="glass-panel !bg-white/5 !border-white/10 p-10 rounded-[32px] relative overflow-hidden backdrop-blur-2xl">
              <h4 className="text-xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
                <Cpu size={20} className="text-cyan-400" />
                Model Accuracy Comparison
              </h4>
              
              <div className="flex flex-col gap-8">
                {/* RNN Stat */}
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-white font-bold text-lg">Recurrent Neural Networks (RNN)</span>
                    <span className="text-cyan-400 font-black text-3xl">{research.stats.rnn}</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "97.25%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                    />
                  </div>
                </div>

                {/* SVM Stat */}
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-indigo-200 font-bold text-lg">Support Vector Machines (SVM)</span>
                    <span className="text-indigo-300 font-black text-2xl">{research.stats.svm}</span>
                  </div>
                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "84.57%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="h-full bg-indigo-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

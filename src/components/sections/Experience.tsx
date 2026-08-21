"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 w-full bg-white relative border-y border-[rgba(15,23,42,0.06)]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#0F172A] tracking-tight mb-4">
              Career Journey.
            </h2>
            <p className="text-[#475569] font-sans text-lg">
              Professional milestones and engineering roles.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 px-4 py-2 bg-[#F3F4F6] rounded-lg border border-[rgba(15,23,42,0.04)]"
          >
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[13px] font-sans font-semibold text-[#475569]">System Active</span>
          </motion.div>
        </div>

        <div className="flex flex-col gap-8">
          {resumeData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-[#FCFCFA] border border-[rgba(15,23,42,0.08)] rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12 hover:border-emerald-200 hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)] transition-all duration-500"
            >
              
              {/* Left Column: Branding & Role */}
              <div className="w-full lg:w-1/3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[rgba(15,23,42,0.08)] flex items-center justify-center shadow-sm">
                       <span className="font-heading font-bold text-[#0F172A] text-lg">{exp.company.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#0F172A]">{exp.company}</h3>
                      <p className="text-[13px] font-sans text-[#475569]">{exp.location}</p>
                    </div>
                  </div>
                  
                  <h4 className="font-sans font-semibold text-[#0F172A] text-xl mb-2">{exp.role}</h4>
                  <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-sans font-bold rounded-md border border-emerald-100 mb-6">
                    {exp.duration}
                  </div>
                </div>
                
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'SQL'].map((tech, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 bg-white border border-[rgba(15,23,42,0.08)] rounded-md text-[11px] font-sans font-semibold text-[#475569]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Achievements & Metrics Dashboard */}
              <div className="w-full lg:w-2/3 flex flex-col gap-6 pl-0 lg:pl-12 lg:border-l border-[rgba(15,23,42,0.06)]">
                 <h5 className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#94A3B8]">Key Contributions</h5>
                 
                 <ul className="space-y-4">
                   {exp.achievements.map((ach, aIdx) => (
                     <li key={aIdx} className="flex items-start gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                       <span className="text-[#475569] font-sans text-[15px] leading-relaxed">{ach}</span>
                     </li>
                   ))}
                 </ul>
                 
                 {/* Animated Metric Bar (SaaS style) */}
                 <div className="mt-4 p-4 bg-white rounded-xl border border-[rgba(15,23,42,0.04)] shadow-sm">
                   <div className="flex justify-between items-center mb-3">
                     <span className="text-xs font-sans font-semibold text-[#475569]">Performance Impact</span>
                     <span className="text-xs font-sans font-bold text-emerald-600">85%</span>
                   </div>
                   <div className="h-1.5 w-full bg-[#F3F4F6] rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       whileInView={{ width: "85%" }}
                       viewport={{ once: true }}
                       transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                       className="h-full bg-emerald-500 rounded-full"
                     />
                   </div>
                 </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

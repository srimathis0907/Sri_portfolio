"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { resumeData } from "@/data/resumeData";
import { Navigation, Database, Smartphone } from "lucide-react";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const project = resumeData.projects[0];

  return (
    <section id="projects" className="py-32 w-full relative z-10 bg-pearl" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-6xl relative z-20">
        
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-orchid mb-4">
              Featured Case Study
            </h2>
            <h3 className="text-[40px] md:text-[56px] font-heading font-medium leading-[1.1] text-slate-900 tracking-tight">
              {project.title.split(' - ')[0]}
            </h3>
          </motion.div>
        </div>

        {/* Apple Style Project Showcase */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Sticky Storytelling Left Side */}
          <div className="w-full lg:w-5/12 lg:sticky top-32 self-start pt-4">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h4 className="text-3xl font-heading font-medium text-slate-900 mb-6 tracking-tight">
                {project.title.split(' - ')[1]}
              </h4>
              <p className="text-xl text-slate-600 font-sans font-light leading-relaxed mb-10">
                A comprehensive Android application engineered to optimize travel routes, estimate budgets, and enhance the overall trip planning experience using advanced data analytics and customized backend architectures.
              </p>

              <div className="flex flex-col gap-2 mb-12">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-2">Core Technologies</span>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-5 py-2 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-medium shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-orchid/5 border border-orchid/10 rounded-3xl">
                <h5 className="text-sm font-semibold tracking-[0.1em] uppercase text-orchid mb-3">Measurable Impact</h5>
                <p className="text-lg font-medium text-slate-800">
                  {project.impact}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Scrolling Features Right Side */}
          <div className="w-full lg:w-7/12 flex flex-col gap-8">
            
            <motion.div style={{ y: y1 }} className="editorial-card p-10 md:p-14 bg-white">
              <div className="w-14 h-14 rounded-2xl bg-mist flex items-center justify-center text-slate-800 mb-8">
                <Navigation size={28} strokeWidth={1.5} />
              </div>
              <h5 className="text-2xl font-heading font-medium text-slate-900 mb-4">Location & Estimation</h5>
              <p className="text-slate-600 text-lg leading-relaxed font-sans font-light">
                {project.features[0]}
              </p>
            </motion.div>

            <motion.div style={{ y: y2 }} className="editorial-card p-10 md:p-14 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose/5 rounded-full blur-[80px]" />
              <div className="w-14 h-14 rounded-2xl bg-mist flex items-center justify-center text-slate-800 mb-8 relative z-10">
                <Database size={28} strokeWidth={1.5} />
              </div>
              <h5 className="text-2xl font-heading font-medium text-slate-900 mb-4 relative z-10">Custom Backend Architecture</h5>
              <p className="text-slate-600 text-lg leading-relaxed font-sans font-light relative z-10">
                {project.features[1]}
              </p>
            </motion.div>

            <motion.div className="editorial-card p-10 md:p-14 bg-slate-900 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orchid/20 to-transparent opacity-50" />
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8 relative z-10 backdrop-blur-md">
                <Smartphone size={28} strokeWidth={1.5} />
              </div>
              <h5 className="text-2xl font-heading font-medium text-white mb-4 relative z-10">Seamless User Interface</h5>
              <p className="text-slate-300 text-lg leading-relaxed font-sans font-light relative z-10">
                Developed a responsive, intuitive interface adhering to modern material design principles, ensuring a frictionless user journey from destination selection to complete itinerary generation.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

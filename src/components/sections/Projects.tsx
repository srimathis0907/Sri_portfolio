"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { resumeData } from "@/data/resumeData";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const project = resumeData.projects[0];

  // Parallax elements for the mockups
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section id="projects" className="py-32 w-full relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-stone-400 mb-6">
              Case Study
            </h2>
            <h3 className="text-[56px] md:text-[80px] font-heading font-medium leading-[1] text-stone-900 tracking-tight">
              {project.title.split(' - ')[0]}<span className="text-stone-400">.</span>
            </h3>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24" ref={containerRef}>
          
          {/* Sticky Left: Storytelling */}
          <div className="w-full lg:w-5/12 lg:sticky top-40 self-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h4 className="text-3xl font-heading font-medium text-stone-900 mb-6 tracking-tight">
                {project.title.split(' - ')[1]}
              </h4>
              <p className="text-[22px] text-stone-600 font-sans font-light leading-relaxed mb-10">
                A highly optimized Android application orchestrating seamless route planning, live budget estimations, and intelligent data caching to construct the ultimate travel companion.
              </p>

              <div className="flex flex-wrap gap-3 mb-16">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-5 py-2 glass-card-premium text-stone-700 rounded-full text-sm font-sans font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="p-8 border border-stone-200/50 rounded-[2rem] bg-stone-50/50 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-stone-200/50 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />
                <h5 className="text-xs font-sans font-bold tracking-[0.2em] uppercase text-stone-400 mb-4">Measurable Outcome</h5>
                <p className="text-xl font-heading font-medium text-stone-800 leading-tight">
                  {project.impact}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Scrolling Right: Abstract Mockups & Diagrams */}
          <div className="w-full lg:w-7/12 flex flex-col gap-12 relative pt-10">
            
            {/* Feature 1: Route Optimization (Abstract UI) */}
            <motion.div style={{ y: y1 }} className="w-full glass-card-premium p-10 overflow-hidden relative">
              <h5 className="text-2xl font-heading font-medium text-stone-900 mb-4 relative z-10">Intelligent Routing</h5>
              <p className="text-stone-600 font-sans text-lg font-light relative z-10 mb-8 max-w-md">
                {project.features[0]}
              </p>
              
              {/* Abstract Map UI */}
              <div className="w-full h-48 bg-stone-100 rounded-2xl relative overflow-hidden border border-stone-200/50 mt-8">
                <div className="absolute top-[20%] left-[20%] w-4 h-4 rounded-full bg-stone-900 shadow-lg z-10" />
                <div className="absolute top-[70%] left-[80%] w-4 h-4 rounded-full bg-stone-400 shadow-lg z-10" />
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <path d="M 20% 20% C 50% 20% 50% 70% 80% 70%" stroke="#1C1917" strokeWidth="2" strokeDasharray="6 6" fill="none" className="opacity-40" />
                </svg>
                {/* Floating UI Chips */}
                <div className="absolute bottom-4 left-4 px-4 py-2 bg-white rounded-xl shadow-sm text-xs font-bold font-sans">
                  Optimal Path Found
                </div>
              </div>
            </motion.div>

            {/* Feature 2: Backend Architecture */}
            <motion.div style={{ y: y2 }} className="w-full glass-card-premium p-10 overflow-hidden relative bg-stone-900">
              <div className="absolute top-0 right-0 w-64 h-64 bg-stone-800 rounded-full blur-[80px]" />
              <h5 className="text-2xl font-heading font-medium text-white mb-4 relative z-10">Architecture</h5>
              <p className="text-stone-400 font-sans text-lg font-light relative z-10 mb-8 max-w-md">
                {project.features[1]}
              </p>

              {/* Abstract Architecture Diagram */}
              <div className="flex items-center justify-between mt-8 relative z-10 gap-4">
                <div className="flex-1 h-24 border border-stone-700 rounded-2xl bg-stone-800/50 flex items-center justify-center text-stone-300 font-sans text-sm">Client App</div>
                <div className="w-8 h-[1px] bg-stone-600" />
                <div className="flex-1 h-24 border border-stone-700 rounded-2xl bg-stone-800/50 flex items-center justify-center text-stone-300 font-sans text-sm">Load Balancer</div>
                <div className="w-8 h-[1px] bg-stone-600" />
                <div className="flex-1 h-24 border border-stone-700 rounded-2xl bg-stone-800/50 flex items-center justify-center text-stone-300 font-sans text-sm">PostgreSQL</div>
              </div>
            </motion.div>

            {/* Feature 3: Phone Mockup Frame */}
            <motion.div style={{ y: y3 }} className="w-full glass-card-premium p-10 overflow-hidden relative flex flex-col items-center">
              <h5 className="text-2xl font-heading font-medium text-stone-900 mb-12 self-start relative z-10">Material Design Interface</h5>
              
              {/* Minimal Phone Frame */}
              <div className="w-[280px] h-[580px] rounded-[3rem] border-[8px] border-stone-900 bg-stone-50 relative overflow-hidden shadow-2xl flex flex-col">
                <div className="absolute top-0 inset-x-0 h-6 bg-stone-900 rounded-b-3xl mx-16 z-20" /> {/* Notch */}
                
                {/* Abstract UI Content */}
                <div className="p-6 pt-12 flex-1 flex flex-col gap-6">
                  <div className="w-3/4 h-8 bg-stone-200 rounded-lg" />
                  <div className="w-full h-40 bg-white rounded-2xl shadow-sm border border-stone-100" />
                  <div className="w-full h-16 bg-white rounded-2xl shadow-sm border border-stone-100" />
                  <div className="w-full h-16 bg-white rounded-2xl shadow-sm border border-stone-100" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

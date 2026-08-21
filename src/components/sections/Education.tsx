"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-24 w-full relative z-10 bg-ivory">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="editorial-card p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="flex-1">
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-orchid mb-6">
              Academic Background
            </h2>
            <h3 className="text-3xl md:text-4xl font-heading font-medium leading-tight text-slate-900 tracking-tight mb-2">
              Bachelor of Technology in Information Technology
            </h3>
            <p className="text-xl font-sans text-slate-500 mb-6">
              Saveetha Engineering College, Chennai
            </p>
            <div className="inline-block px-4 py-2 border border-slate-200 rounded-full text-sm font-medium text-slate-600">
              Graduation: May 2026
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto flex flex-col items-center md:items-end md:pl-12 md:border-l border-slate-100">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-2">
              Current CGPA
            </span>
            <span className="text-[64px] md:text-[80px] font-heading font-light text-slate-900 leading-none">
              8.26<span className="text-2xl text-slate-400">/10</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

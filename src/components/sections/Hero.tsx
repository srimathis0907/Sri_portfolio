"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center pt-24 pb-20 bg-[#FCFCFA] overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT: Content */}
        <div className="flex flex-col items-start z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-sans font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Open to Opportunities
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[60px] md:text-[80px] font-heading font-black tracking-[-0.04em] leading-[0.95] text-[#0F172A] mb-6"
          >
            {resumeData.personal.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="h-10 mb-6 overflow-hidden relative w-full"
          >
            <motion.div
              animate={{ y: ["0%", "-25%", "-50%", "-75%", "0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col"
            >
              {resumeData.personal.roles.concat(resumeData.personal.roles[0]).map((role, idx) => (
                <span key={idx} className="h-10 text-2xl md:text-3xl font-heading font-extrabold text-[#2563EB] tracking-tight flex items-center">
                  {role}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#475569] font-sans font-medium leading-relaxed max-w-lg mb-10"
          >
            Software engineer building scalable systems and native mobile experiences. Turning complex logic into elegant architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="px-6 py-3 rounded-xl bg-[#0F172A] text-white font-sans font-semibold text-sm shadow-[0_8px_20px_rgba(15,23,42,0.2)] hover:shadow-[0_12px_24px_rgba(15,23,42,0.3)] hover:-translate-y-0.5 transition-all duration-300">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] font-sans font-semibold text-sm shadow-sm hover:bg-[#F8FAFC] transition-all duration-300">
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT: Pure CSS/SVG Developer Workspace */}
        <div className="relative w-full h-[600px] flex items-center justify-center z-10 perspective-1000">
          
          {/* Central Android Phone Wireframe */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotateX: [5, 10, 5], rotateY: [-5, -10, -5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-20 w-[240px] h-[500px] bg-white rounded-[2.5rem] border-8 border-[#F1F5F9] shadow-[0_30px_60px_rgba(15,23,42,0.1)] flex flex-col p-4 overflow-hidden"
          >
            <div className="w-16 h-4 bg-[#E2E8F0] rounded-full mx-auto mb-6" /> {/* Notch */}
            <div className="flex gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 animate-pulse" />
              <div className="flex-1 space-y-2 py-1">
                <div className="h-3 bg-[#F1F5F9] rounded w-3/4" />
                <div className="h-2 bg-[#F1F5F9] rounded w-1/2" />
              </div>
            </div>
            <div className="w-full h-32 bg-blue-50 rounded-xl mb-4 relative overflow-hidden">
               <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-blue-200/50 to-transparent" />
            </div>
            <div className="space-y-3">
              <div className="h-10 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]" />
              <div className="h-10 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]" />
            </div>
          </motion.div>

          {/* Floating Code Editor Panel */}
          <motion.div 
            animate={{ y: [15, -15, 15], rotateZ: [-2, 2, -2] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-10 -left-10 z-30 w-64 glass-panel p-4 rounded-2xl shadow-xl"
          >
            <div className="flex gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="font-mono text-[10px] leading-relaxed text-[#475569]">
              <span className="text-purple-600">function</span> <span className="text-blue-600">fetchData</span>() {'{'} <br/>
              &nbsp;&nbsp;<span className="text-purple-600">return</span> api.<span className="text-blue-600">get</span>(<span className="text-emerald-600">&apos;/v1/users&apos;</span>);<br/>
              {'}'}
            </div>
          </motion.div>

          {/* Floating Database / Backend Panel */}
          <motion.div 
            animate={{ y: [-15, 15, -15], rotateZ: [2, -2, 2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 -right-10 z-10 w-56 bg-[#0F172A] p-5 rounded-2xl shadow-[0_20px_40px_rgba(15,23,42,0.2)] text-white"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-sans font-bold tracking-widest uppercase text-[#94A3B8]">PostgreSQL</span>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div className="space-y-2">
              <div className="h-1.5 w-full bg-[#1E293B] rounded-full overflow-hidden">
                <motion.div animate={{ width: ["0%", "100%", "0%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="h-full bg-emerald-400" />
              </div>
              <div className="h-1.5 w-4/5 bg-[#1E293B] rounded-full overflow-hidden">
                <motion.div animate={{ width: ["100%", "0%", "100%"] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="h-full bg-blue-400" />
              </div>
            </div>
          </motion.div>

          {/* Background SVG Grid & Animated Connections */}
          <div className="absolute inset-0 z-0 opacity-50">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <defs>
                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E2E8F0" strokeWidth="1" />
                </pattern>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#gridPattern)" />
              
              {/* API Connection Lines */}
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                d="M 50 100 Q 200 50 350 200" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="10 10" 
              />
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1 }}
                d="M 350 100 Q 200 350 50 300" fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="10 10" 
              />
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}

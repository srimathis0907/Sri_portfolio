"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { resumeData } from "@/data/resumeData";
import { FaJava, FaAndroid, FaDatabase } from "react-icons/fa";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = resumeData.personal.roles;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-screen w-full flex items-center pt-32 pb-20 overflow-hidden">
      {/* Abstract Background Blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-indigo-200/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob" />
      <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-purple-200/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-cyan-100/50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        {/* Left Side: Typography */}
        <div className="flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[56px] md:text-[72px] lg:text-[88px] font-heading font-black leading-[1.1] text-slate-900 tracking-tight flex flex-col">
              <span className="block text-slate-500 text-2xl md:text-3xl font-bold tracking-widest uppercase mb-4">
                Hi, I&apos;m
              </span>
              <span className="block">Srimathi S</span>
            </h1>
          </motion.div>

          {/* Fixed Height Rotating Role Area */}
          <div className="h-[1.2em] text-[32px] md:text-[48px] lg:text-[56px] font-heading font-bold leading-[1.1] tracking-tight relative overflow-hidden mb-8 mt-2 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
                className="absolute inset-0 flex items-start"
              >
                <h2 className="text-gradient-primary m-0 p-0 whitespace-nowrap">
                  {roles[currentRole]}
                </h2>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl max-w-[600px] mb-12 leading-[1.8] font-medium"
          >
            {resumeData.personal.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold text-center hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(79,70,229,0.3)] transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white text-slate-800 font-semibold text-center border border-slate-200 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              Let&apos;s Connect
            </a>
          </motion.div>
        </div>

        {/* Right Side: Abstract Floating Composition */}
        <div className="relative w-full h-[500px] lg:h-[700px] flex justify-center items-center perspective-1000 mt-12 lg:mt-0">
          
          {/* Central Glowing Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-indigo-200/40 border-dashed"
          />
          
          <motion.div
            animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-tr from-indigo-100/30 to-purple-100/30 blur-3xl"
          />

          {/* Floating Glass Card 1 - Main Stat */}
          <motion.div
            animate={{ y: [-15, 15, -15], rotateX: [2, -2, 2], rotateY: [-2, 2, -2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-20 w-[240px] glass-panel rounded-3xl p-6 flex flex-col items-center justify-center transform-gpu"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-4 flex items-center justify-center text-white shadow-lg">
              <FaJava size={24} />
            </div>
            <h3 className="text-3xl font-black text-slate-800 mb-1">Oracle</h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center">
              Certified<br />Developer
            </p>
          </motion.div>

          {/* Floating Glass Card 2 - Android */}
          <motion.div
            animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[15%] right-[5%] md:right-[0%] z-30 w-[180px] glass-panel rounded-3xl p-5 transform-gpu"
          >
            <div className="flex items-center gap-3 mb-2">
              <FaAndroid size={20} className="text-emerald-500" />
              <h3 className="text-xl font-bold text-slate-800">85%</h3>
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">
              Error Reduction<br />in Planning
            </p>
          </motion.div>

          {/* Floating Glass Card 3 - Database/Analytics */}
          <motion.div
            animate={{ y: [-10, 10, -10], x: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[15%] left-[5%] md:left-[0%] z-30 w-[190px] glass-panel rounded-3xl p-5 flex items-center gap-4 transform-gpu"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white flex-shrink-0">
              <FaDatabase size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-slate-800 leading-none mb-1">SQL</span>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-tight">Data<br />Analytics</span>
            </div>
          </motion.div>

          {/* Subtle Particles */}
          <motion.div
            animate={{ y: -100, opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[30%] right-[30%] w-2 h-2 rounded-full bg-indigo-400"
          />
          <motion.div
            animate={{ y: -80, opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
            className="absolute top-[40%] left-[30%] w-3 h-3 rounded-full bg-purple-400"
          />

        </div>
      </div>
    </section>
  );
}

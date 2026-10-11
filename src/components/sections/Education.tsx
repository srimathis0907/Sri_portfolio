"use client";

import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Animated Smooth Counter
function AnimatedCounter({ value, duration = 1.6 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState("0.00");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const startVal = 0;
    const endVal = value;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / (duration * 1000);
      const progress = Math.min(elapsed, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = startVal + (endVal - startVal) * easeProgress;
      setDisplayValue(current.toFixed(2));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(endVal.toFixed(2));
      }
    };
    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

export default function Education() {
  // 3D Parallax Tilt Effect for the Credential Card
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section 
      id="education" 
      className="pt-36 pb-28 md:pt-48 md:pb-36 w-full relative z-10 bg-base overflow-hidden scroll-mt-28"
    >
      {/* Ambient Lighting Ornaments */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-rose-200/25 via-amber-100/20 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -left-20 w-[650px] h-[650px] bg-gradient-to-tr from-slate-200/40 via-sky-100/20 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200/80 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-stone-600">
                Academic Showcase
              </span>
            </div>
            
            <h2 className="text-[44px] sm:text-[60px] md:text-[76px] font-heading font-semibold leading-[0.95] text-stone-900 tracking-[-0.035em] mb-5">
              SIMATS Engineering
            </h2>
            <p className="text-xl md:text-2xl font-sans font-light text-stone-500 max-w-2xl mx-auto">
              Bachelor of Technology in Information Technology
            </p>
          </motion.div>
        </div>

        {/* Cinematic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch relative z-20">
          
          {/* Left Column: Refined Digital Credential Card */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{ 
                rotateX: tilt.x, 
                rotateY: tilt.y,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              style={{ transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[32px] bg-stone-950 text-white border border-stone-800 p-8 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.25)] flex flex-col justify-between overflow-hidden flex-1 group"
            >
              {/* Subtle Glowing Background Shimmer */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-500/10 via-rose-500/5 to-transparent rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-sky-500/10 via-emerald-500/5 to-transparent rounded-full blur-[80px] pointer-events-none" />

              {/* Terminal Window Controls */}
              <div className="relative z-10 flex items-center justify-between pb-6 border-b border-stone-800/80 mb-8">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-stone-400 pl-2">
                    academic-record // simats.it
                  </span>
                </div>

                <div className="text-xs font-mono text-amber-400/90 bg-amber-400/10 border border-amber-500/20 px-3 py-1 rounded-full">
                  Official Record
                </div>
              </div>

              {/* Main Credential Content */}
              <div className="relative z-10 flex flex-col gap-8 flex-1 justify-center">
                
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 block mb-2">
                      Academic Degree
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-white tracking-tight mb-1">
                      SIMATS Engineering
                    </h3>
                    <p className="text-sm text-stone-400 font-sans">
                      Saveetha Institute of Medical and Technical Sciences
                    </p>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-300 shadow-inner flex-shrink-0">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a10.993 10.993 0 01-1.25 4.949 1 1 0 101.8 1A8.995 8.995 0 007 10.23V14a1 1 0 001 1h4a1 1 0 001-1v-3.77a8.995 8.995 0 001.2 3.77 1 1 0 101.8-1 10.993 10.993 0 01-1.25-4.949l2.644-1.131a1 1 0 000-1.84l-7-3zM8 12.925V14h4v-1.075a10.978 10.978 0 01-4 0z" />
                    </svg>
                  </div>
                </div>

                {/* Clean Credential Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-800/80">
                  <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800/70">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-1">
                      Major Degree
                    </div>
                    <div className="text-base font-heading font-semibold text-stone-100">
                      B.Tech in IT
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800/70">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-1">
                      Official CGPA
                    </div>
                    <div className="text-base font-heading font-bold text-emerald-400">
                      8.25 / 10.0
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-900/60 border border-stone-800/70">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-1">
                      Academic Tenure
                    </div>
                    <div className="text-base font-heading font-semibold text-stone-100">
                      2022 – 2026
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Subtle Bar */}
              <div className="relative z-10 pt-6 mt-6 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
                <span className="font-sans">Department of Information Technology</span>
                <span className="font-sans text-stone-300">Chennai, Tamil Nadu</span>
              </div>

            </motion.div>
          </div>

          {/* Right Column: Dynamic Performance Visualizers */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* 1. Academic Duration Timeline Card */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="group relative rounded-3xl bg-white border border-stone-200/80 p-7 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute right-0 top-0 w-44 h-44 bg-gradient-to-br from-amber-100/40 to-transparent rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-sans font-bold tracking-[0.15em] uppercase text-stone-400">
                  Academic Duration
                </span>
              </div>

              <div className="flex items-center gap-5 my-2">
                <div className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-heading font-semibold text-stone-900">2022</span>
                  <span className="text-[11px] font-sans text-stone-400 uppercase tracking-wider">Commenced</span>
                </div>

                <div className="flex-1 flex flex-col justify-center px-1">
                  <div className="w-full h-[6px] bg-stone-100 rounded-full relative overflow-hidden">
                    <motion.div 
                      initial={{ scaleX: 0 }} 
                      whileInView={{ scaleX: 1 }} 
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, delay: 0.3, ease: "easeInOut" }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-stone-800 via-stone-900 to-amber-700 rounded-full origin-left w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-3xl sm:text-4xl font-heading font-semibold text-stone-900">2026</span>
                  <span className="text-[11px] font-sans text-stone-400 uppercase tracking-wider">Target Completion</span>
                </div>
              </div>

              <div className="text-xs text-stone-500 font-sans pt-3 mt-1 border-t border-stone-100">
                Specialization: Information Technology
              </div>
            </motion.div>

            {/* 2. Cumulative Performance Visualizer (CGPA 8.25) */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative rounded-3xl bg-stone-900 text-white p-7 sm:p-8 shadow-[0_20px_50px_rgba(28,25,23,0.18)] overflow-hidden"
            >
              {/* Ambient Glowing Backlight */}
              <div className="absolute left-0 bottom-0 w-60 h-60 bg-gradient-to-tr from-stone-800 via-stone-800/40 to-transparent rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />
              <div className="absolute right-0 top-0 w-48 h-48 bg-gradient-to-bl from-amber-500/10 via-rose-500/10 to-transparent rounded-full blur-[50px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
              
              <div className="relative z-10 flex items-center justify-between gap-6">
                
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-xs font-sans font-bold tracking-[0.18em] uppercase text-stone-400">
                      Cumulative Performance
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-[58px] sm:text-[68px] font-heading font-semibold leading-none tracking-tight text-white">
                      <AnimatedCounter value={8.25} />
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-stone-400 font-sans text-sm">out of 10.0 scale</span>
                    <span className="text-stone-600">•</span>
                    <span className="text-amber-300/90 font-sans text-xs font-medium">Top Tier Standing</span>
                  </div>
                </div>

                {/* Animated Radial SVG Progress Ring */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex-shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="#292524" 
                      strokeWidth="7" 
                    />
                    <motion.circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="url(#cgpaGradient)" 
                      strokeWidth="7"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "283", strokeDashoffset: "283" }}
                      whileInView={{ strokeDashoffset: 283 - (283 * 0.825) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="cgpaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FDE68A" />
                        <stop offset="100%" stopColor="#F4DCD6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Percentage in Center */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center"
                  >
                    <span className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
                      82.5%
                    </span>
                    <span className="text-[9px] font-sans uppercase tracking-widest text-stone-400">
                      Score
                    </span>
                  </motion.div>
                </div>

              </div>
            </motion.div>

            {/* 3. Academic Competencies & Highlights Pill Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {[
                { title: "Java SE 17 Certified", desc: "Oracle Global Credential" },
                { title: "Tech Star Summit", desc: "Best Poster Award 2026" },
                { title: "Research & ML", desc: "97.25% RNN Accuracy" }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl bg-white border border-stone-200/70 p-4 shadow-sm hover:border-stone-900 transition-colors duration-300"
                >
                  <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-stone-400 mb-1">
                    {item.desc}
                  </div>
                  <div className="text-xs font-heading font-semibold text-stone-900">
                    {item.title}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

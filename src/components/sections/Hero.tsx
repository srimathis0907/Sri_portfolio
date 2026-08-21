"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { resumeData } from "@/data/resumeData";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mouse follower for the blob
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return;
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 100;
      const yPos = (clientY / window.innerHeight - 0.5) * 100;

      gsap.to(blobRef.current, {
        x: xPos,
        y: yPos,
        duration: 3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const roles = resumeData.personal.roles;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Interactive Depth Blob */}
      <div 
        ref={blobRef}
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-rose-quartz/40 to-lavender-mist/40 mix-blend-multiply filter blur-[100px] opacity-70 pointer-events-none -z-10"
      />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center max-w-5xl"
        >
          <motion.div variants={textVariants} className="mb-6">
            <span className="px-6 py-2 rounded-full border border-stone-200/50 bg-white/30 backdrop-blur-md text-sm font-sans font-medium text-stone-600 tracking-widest uppercase">
              Creative Engineer
            </span>
          </motion.div>

          <motion.h1 
            className="text-[60px] md:text-[90px] lg:text-[140px] font-heading font-medium leading-[0.9] text-stone-900 tracking-[-0.04em] mb-8"
          >
            <motion.span variants={textVariants} className="block text-stone-400 font-light italic mb-2">Designing</motion.span>
            <motion.span variants={textVariants} className="block">Digital Intent.</motion.span>
          </motion.h1>

          <motion.p 
            variants={textVariants}
            className="text-xl md:text-3xl text-stone-500 font-sans font-light max-w-2xl leading-relaxed mb-16"
          >
            I am <span className="font-semibold text-stone-800">Srimathi S.</span> A {roles[0].toLowerCase()} blurring the line between robust architecture and immersive human experiences.
          </motion.p>

          <motion.div variants={textVariants}>
            <a
              href="#projects"
              className="relative overflow-hidden group inline-flex items-center justify-center px-10 py-5 rounded-full bg-stone-900 text-white font-sans font-semibold text-lg transition-transform hover:scale-105 duration-500"
            >
              <span className="relative z-10">Experience the Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-stone-800 to-stone-700 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

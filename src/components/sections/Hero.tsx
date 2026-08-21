"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { resumeData } from "@/data/resumeData";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(imageRef.current, {
        x: xPos,
        y: yPos,
        duration: 2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[110vh] w-full flex items-center justify-center overflow-hidden bg-[#F4F1EA]">
      
      {/* Absolute Architectural Asset */}
      <div 
        ref={imageRef} 
        className="absolute w-[90vw] md:w-[70vw] h-[80vh] top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90"
      >
        <Image 
          src="/assets/minimal_architecture_hero_1787301266317.png"
          alt="Minimalist Architecture"
          fill
          className="object-cover object-center rounded-[3rem] mix-blend-darken grayscale-[20%] contrast-[1.1]"
          priority
        />
      </div>

      {/* Foreground Typography */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center pointer-events-none mt-20">
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h1 className="text-[12vw] font-heading font-medium tracking-tighter leading-[0.8] text-stone-900 mix-blend-overlay">
            {resumeData.personal.name.split(' ')[0]}
          </h1>
        </motion.div>

        {/* Animated Role Ribbon overlaying the architecture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute top-[60%] md:top-[70%] left-0 w-full overflow-hidden flex items-center pointer-events-none"
        >
          <motion.div 
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            {[...Array(6)].map((_, i) => (
              <span key={i} className="text-xl md:text-3xl font-sans font-light tracking-[0.3em] uppercase text-stone-800 px-8">
                {resumeData.personal.roles[0]} &mdash; 
              </span>
            ))}
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}

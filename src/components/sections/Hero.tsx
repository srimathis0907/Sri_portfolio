"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const ribbonRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Advanced mouse parallax for the 3D asset
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return;
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 60;
      const yPos = (clientY / window.innerHeight - 0.5) * 60;

      gsap.to(blobRef.current, {
        x: xPos,
        y: yPos,
        rotationX: yPos * 0.2,
        rotationY: xPos * 0.2,
        duration: 2,
        ease: "power2.out",
      });
      
      if(ribbonRef.current) {
        gsap.to(ribbonRef.current, {
          x: xPos * -0.5,
          y: yPos * -0.5,
          duration: 3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full flex items-center pt-24 pb-12 overflow-hidden perspective-1000">
      
      {/* Immersive SVG Background & Particles */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <svg ref={ribbonRef} className="absolute w-[120vw] h-[120vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" viewBox="0 0 800 600" preserveAspectRatio="none">
           <path d="M-100,300 C150,100 250,500 500,300 S750,100 900,300" fill="none" stroke="#D0BFFF" strokeWidth="1.5" />
           <path d="M-100,320 C200,120 300,520 600,320 S800,120 900,320" fill="none" stroke="#F4DCD6" strokeWidth="1" />
        </svg>
        
        {/* Soft Animated Light Beams */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-gradient-to-tr from-lavender-mist/30 via-transparent to-transparent rounded-full blur-[100px]" />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-gradient-to-bl from-rose-quartz/20 via-transparent to-transparent rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full">
        
        {/* Left Column: Massive Editorial Typography */}
        <div className="flex flex-col items-start z-20 mix-blend-multiply">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 px-4 py-2 border border-stone-300 rounded-full text-xs font-sans font-bold tracking-[0.2em] uppercase text-stone-500 mb-8">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              Srimathi S &mdash; Creative Portfolio
            </span>
            
            <h1 className="text-[64px] md:text-[88px] lg:text-[110px] font-heading font-semibold leading-[0.85] text-stone-900 tracking-[-0.04em]">
              Architecting<br />
              <span className="italic font-light text-stone-400 relative">
                Digital
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orchid-glow to-transparent" />
              </span><br />
              Emotion.
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="text-lg md:text-2xl text-stone-600 font-sans font-light max-w-lg leading-relaxed mb-12"
          >
            I fuse robust Android engineering with high-end data analytics to craft products that perform flawlessly and feel unforgettable.
          </motion.p>
        </div>

        {/* Right Column: 3D Visual Asset */}
        <div className="relative w-full h-[50vh] lg:h-[80vh] flex items-center justify-center z-10 transform-style-3d">
          <motion.div 
            ref={blobRef}
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative w-full max-w-[600px] aspect-square drop-shadow-2xl"
          >
            <Image 
              src="/assets/abstract_aurora_blob_1787300612275.png"
              alt="Premium 3D Abstract Blob"
              fill
              className="object-contain filter saturate-110 hue-rotate-15 contrast-125 hover:scale-105 transition-transform duration-1000"
              priority
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}

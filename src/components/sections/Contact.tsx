"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export default function Contact() {
  const { email, linkedin, github } = resumeData.personal.contact;

  const links = [
    { name: "Email", url: `mailto:${email}` },
    { name: "LinkedIn", url: linkedin },
    { name: "GitHub", url: github }
  ];

  return (
    <section id="contact" className="py-32 md:py-48 w-full bg-[#0F172A] relative overflow-hidden text-white flex flex-col justify-center">
      
      {/* Animated SVG Shapes (Pure Code) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-20">
         <motion.svg viewBox="0 0 400 400" className="w-[800px] h-[800px] absolute" animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }}>
            <circle cx="200" cy="200" r="180" fill="none" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 12" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="#2563EB" strokeWidth="1" opacity="0.5" />
            <rect x="140" y="140" width="120" height="120" fill="none" stroke="#2563EB" strokeWidth="1" transform="rotate(45 200 200)" />
         </motion.svg>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[50px] md:text-[80px] lg:text-[120px] font-heading font-black tracking-[-0.04em] leading-[0.9] text-white mb-8">
            Let&apos;s Build <br /> Something.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-[#0F172A] transition-all duration-500 overflow-hidden flex items-center justify-center"
            >
              <span className="relative z-10 font-sans font-bold text-sm tracking-widest uppercase transition-colors duration-500">
                {link.name}
              </span>
            </a>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}

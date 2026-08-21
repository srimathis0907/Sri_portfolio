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
    <section id="contact" className="py-32 md:py-48 w-full relative z-10 overflow-hidden">
      
      {/* Immersive Contact Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-white">
        <motion.div 
          animate={{ x: [-50, 50, -50], y: [-20, 20, -20], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-tr from-lavender-mist/40 via-transparent to-rose-quartz/30 rounded-full blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-6 max-w-5xl flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-[72px] md:text-[120px] lg:text-[160px] font-heading font-medium text-stone-900 leading-[0.8] tracking-[-0.05em] mb-12">
            Let&apos;s <br />
            <span className="italic font-light text-stone-400">Connect.</span>
          </h2>
          
          <p className="text-xl md:text-3xl text-stone-500 font-sans font-light max-w-2xl mx-auto mb-24">
            Available for new opportunities, collaborations, and architectural discussions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-12 md:gap-20"
        >
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden px-8 py-4 rounded-full border border-stone-200 bg-white/50 backdrop-blur-md transition-colors hover:border-stone-900"
            >
              <span className="relative z-10 text-xl font-sans font-medium text-stone-800 transition-colors group-hover:text-white">
                {link.name}
              </span>
              <div className="absolute inset-0 bg-stone-900 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </a>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}

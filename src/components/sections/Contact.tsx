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
    <section id="contact" className="py-32 md:py-48 w-full relative overflow-hidden bg-[#F4F1EA]">
      
      {/* Editorial Organic Shadows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden mix-blend-multiply opacity-40">
        <motion.div 
          animate={{ x: [-50, 50, -50], y: [-20, 20, -20] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#D9D2C5] via-transparent to-transparent rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <h2 className="text-[18vw] font-heading font-medium text-stone-900 leading-[0.75] tracking-[-0.05em] mb-12 hover:scale-105 transition-transform duration-1000 cursor-default">
            Connect.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-16 md:gap-24 mt-20"
        >
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm font-sans font-bold tracking-[0.2em] uppercase text-stone-500 group-hover:text-stone-900 transition-colors duration-500">
                  {link.name}
                </span>
                <div className="h-[1px] w-0 bg-stone-900 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </a>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}

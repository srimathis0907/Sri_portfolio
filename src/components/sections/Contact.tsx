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
    <section id="contact" className="py-32 md:py-48 w-full relative z-10 bg-ivory">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[64px] md:text-[100px] lg:text-[120px] font-heading font-medium text-slate-900 leading-[0.9] tracking-tight mb-8">
              Let&apos;s build <br />
              <span className="text-slate-400 italic font-light">together.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-500 font-sans font-light max-w-2xl mx-auto mb-20">
              Currently open for collaborative software engineering roles, data analytics projects, and innovative Android application development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-12 md:gap-20"
          >
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-2xl md:text-3xl font-heading font-medium text-slate-800 transition-colors hover:text-orchid"
              >
                {link.name}
                {/* Animated underline */}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-orchid transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 w-full relative z-10 bg-pearl">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Editorial Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-5/12"
          >
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-orchid mb-6">
              The Narrative
            </h2>
            <h3 className="text-[40px] md:text-[56px] font-heading font-medium leading-[1.1] text-slate-900 tracking-tight mb-12">
              Engineering <br /> with Intent.
            </h3>
            
            <div className="pull-quote">
              &quot;I enjoy transforming complex ideas into intuitive digital experiences, bridging the gap between sophisticated logic and human-centric design.&quot;
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-7/12 flex flex-col gap-8 text-lg md:text-xl text-slate-600 font-sans font-light leading-relaxed pt-2 lg:pt-16"
          >
            <p>
              My engineering journey is driven by a desire to build software that simply makes sense. I focus heavily on writing clean, scalable Android applications and robust backend services that operate flawlessly under the hood.
            </p>
            <p>
              Beyond just writing code, I thrive in data-driven environments. Analyzing datasets to extract actionable insights allows me to approach problem-solving not just from a technical perspective, but from a strategic business standpoint.
            </p>
            <p>
              Collaboration and adaptability are core to my work ethic. Whether I&apos;m navigating agile sprints, architecting new features, or presenting research findings, I believe the best products are built when empathy for the user meets technical precision.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

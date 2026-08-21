"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 w-full relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left: Sticky Heading */}
          <div className="w-full lg:w-5/12 lg:sticky top-40">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-sm font-sans font-bold tracking-[0.2em] uppercase text-stone-400 mb-6">
                The Philosophy
              </h2>
              <div className="text-[56px] md:text-[80px] font-heading font-medium leading-[1] text-stone-900 tracking-tight mb-8">
                How I <br />
                <span className="text-stone-400 italic font-light">Think.</span>
              </div>
              
              <div className="w-20 h-[1px] bg-stone-300" />
            </motion.div>
          </div>

          {/* Right: Editorial Storytelling */}
          <div className="w-full lg:w-7/12 flex flex-col gap-12 text-[22px] md:text-[28px] text-stone-600 font-sans font-light leading-[1.6]">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p>
                <span className="text-stone-900 font-medium">Engineering is not just about writing code.</span> It is about solving human problems through structural logic. I believe that the best software is completely invisible to the user—functioning flawlessly beneath a layer of pure simplicity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <p>
                My foundation lies in robust Backend Architecture and Native Android Development. I thrive in the space where data analytics meets product design, ensuring that every architectural decision I make directly enhances the end-user experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="my-8 p-12 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[2rem] shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-quartz/20 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />
              <div className="pull-quote-luxury italic">
                &quot;Curiosity drives my continuous learning. Empathy drives my collaboration.&quot;
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p>
                Whether I am researching advanced machine learning models or optimizing database queries, I maintain a strict standard for quality. I build for scale, I design for emotion, and I collaborate to grow.
              </p>
            </motion.div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}

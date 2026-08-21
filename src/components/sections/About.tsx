"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Problem Solving",
    desc: "Translating ambiguous requirements into strictly typed, scalable logic.",
    icon: (
      <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Android Engineering",
    desc: "Building fluid, native mobile experiences with Kotlin and clean architecture.",
    icon: (
      <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Backend Systems",
    desc: "Designing secure, high-throughput REST APIs using Java and Node.js.",
    icon: (
      <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    )
  },
  {
    title: "Continuous Learning",
    desc: "Constantly expanding into cloud architecture and advanced analytics.",
    icon: (
      <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 w-full bg-[#FCFCFA] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-heading font-extrabold text-[#0F172A] tracking-tight mb-4"
          >
            Engineering Focus.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[#475569] font-sans text-lg max-w-2xl mx-auto"
          >
            Core competencies driving the development of premium software products.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-2xl bg-white border border-[rgba(15,23,42,0.06)] p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* Glass / Gradient Hover Mask */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Animated Border Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                 <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200 mask-image-linear-gradient" style={{ WebkitMaskImage: 'linear-gradient(white, white)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px' }} />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-slate-100 transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-[#0F172A] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#475569] font-sans leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

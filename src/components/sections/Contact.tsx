"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const { email, linkedin, github, location } = resumeData.personal.contact;

  const links = [
    { name: "Email", icon: <Mail size={24} />, url: `mailto:${email}`, value: email },
    { name: "LinkedIn", icon: <FaLinkedin size={24} />, url: linkedin, value: "linkedin.com/in/sri0907" },
    { name: "GitHub", icon: <FaGithub size={24} />, url: github, value: "github.com/srimathis0907" }
  ];

  return (
    <section id="contact" className="py-32 w-full relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-20">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-indigo-900 rounded-[40px] md:rounded-[64px] p-10 md:p-20 overflow-hidden shadow-2xl"
        >
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[inherit]">
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.2, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[30%] -right-[10%] w-[600px] h-[600px] bg-purple-500/40 rounded-full blur-[100px]"
            />
            <motion.div
              animate={{ rotate: -360, scale: [1, 1.5, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-[40%] -left-[10%] w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-[100px]"
            />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-[48px] md:text-[72px] font-heading font-black text-white leading-[1.1] tracking-tight mb-6">
              Let&apos;s Build <br />
              <span className="text-cyan-400">Something Great.</span>
            </h2>
            <p className="text-indigo-200 text-lg md:text-xl max-w-2xl font-medium mb-16 leading-relaxed">
              I&apos;m always open to discussing collaborative software engineering roles, data analytics projects, or innovative Android applications.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col items-center justify-center gap-4 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-indigo-900 transition-all duration-500">
                    {link.icon}
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <span className="text-white font-bold text-lg mb-1">{link.name}</span>
                    <span className="text-indigo-200 text-sm font-medium">{link.value}</span>
                  </div>
                  
                  <div className="absolute top-4 right-4 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 text-cyan-400">
                    <ArrowUpRight size={20} />
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-16 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-indigo-200 font-medium">
              <MapPin size={18} className="text-cyan-400" />
              {location}
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

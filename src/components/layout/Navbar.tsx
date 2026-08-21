"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navY = useTransform(scrollY, [0, 50], [20, 10]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      style={{ y: navY }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none"
    >
      <motion.div
        className={cn(
          "pointer-events-auto flex items-center justify-between px-6 py-3 transition-all duration-500 rounded-2xl w-full max-w-5xl",
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border border-[rgba(15,23,42,0.08)] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            : "bg-transparent border-transparent"
        )}
      >
        <a href="#" className="flex items-center gap-2 text-lg font-heading font-extrabold tracking-tight text-[#0F172A]">
          <div className="w-6 h-6 rounded-md bg-accent-blue text-white flex items-center justify-center text-xs">S</div>
          Srimathi
        </a>

        <nav className="hidden md:flex items-center gap-1 bg-[#F3F4F6] p-1 rounded-xl border border-[rgba(15,23,42,0.04)]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-[13px] font-sans font-medium text-[#475569] hover:text-[#0F172A] hover:bg-white rounded-lg transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex px-5 py-2 text-[13px] font-sans font-bold bg-[#0F172A] text-white rounded-xl hover:bg-[#1E293B] transition-colors shadow-sm shadow-[#0F172A]/20">
          Contact Me
        </a>
      </motion.div>
    </motion.header>
  );
}

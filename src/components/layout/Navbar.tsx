"use client";

import { motion } from "framer-motion";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-8 px-6 md:px-12 flex items-start justify-between mix-blend-multiply pointer-events-none"
    >
      <div className="flex flex-col">
        <a href="#" className="text-xl md:text-2xl font-heading font-medium tracking-tight text-stone-900 pointer-events-auto">
          Srimathi S
        </a>
        <span className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-stone-500 mt-1">
          Full-Stack Android
        </span>
      </div>

      <nav className="hidden lg:flex flex-col items-end gap-2 pointer-events-auto">
        {NAV_LINKS.map((link, idx) => (
          <a
            key={link.name}
            href={link.href}
            className="group flex items-center gap-3 overflow-hidden"
          >
            <span className="text-xs font-sans font-medium text-stone-400 group-hover:text-stone-900 transition-colors duration-500">
              0{idx + 1}
            </span>
            <span className="text-sm font-sans font-medium tracking-widest uppercase text-stone-900 translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
              {link.name}
            </span>
          </a>
        ))}
      </nav>
    </motion.header>
  );
}

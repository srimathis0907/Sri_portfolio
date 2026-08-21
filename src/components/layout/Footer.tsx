"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-16 relative z-10 bg-white border-t border-stone-100">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#" className="text-2xl font-heading font-medium tracking-tight text-stone-900 mb-2">
            Srimathi<span className="text-stone-400">.</span>
          </a>
          <p className="text-sm text-stone-500 font-sans tracking-wide">
            © {new Date().getFullYear()} Crafted with intention. Designed for impact.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="group flex items-center gap-3 px-6 py-3 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-500"
        >
          <span className="text-sm font-sans font-medium uppercase tracking-widest">Back to Top</span>
          <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500" />
        </button>
        
      </div>
    </footer>
  );
}

"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-12 relative z-10 bg-ivory border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="text-xl font-heading font-medium tracking-tight text-slate-800 mb-2">
            Srimathi<span className="text-orchid">.</span>
          </a>
          <p className="text-sm text-slate-400 font-sans tracking-wide">
            © {new Date().getFullYear()} Designed & Engineered with precision.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="group flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 text-slate-400 hover:border-orchid hover:text-orchid transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
        
      </div>
    </footer>
  );
}

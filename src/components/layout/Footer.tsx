"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-12 relative z-10 border-t border-slate-200/60 bg-white">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <a href="#" className="text-xl font-heading font-black tracking-tighter text-slate-900 mb-2">
            Srimathi<span className="text-indigo-600">.</span>
          </a>
          <p className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} Srimathi S. All rights reserved.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="group flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 border border-slate-200 text-slate-500 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 shadow-sm"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
        
      </div>
    </footer>
  );
}

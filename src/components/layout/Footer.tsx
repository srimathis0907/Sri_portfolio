"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-8 bg-[#0F172A] border-t border-white/5 text-white/50">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-[11px] font-sans font-semibold tracking-widest uppercase">
          © {new Date().getFullYear()} Srimathi S. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="text-[11px] font-sans font-semibold uppercase tracking-widest hover:text-white transition-colors"
        >
          Scroll to Top
        </button>
        
      </div>
    </footer>
  );
}

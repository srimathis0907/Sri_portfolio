"use client";



export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full py-12 relative bg-[#F4F1EA] border-t border-stone-300">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-stone-400">
            © {new Date().getFullYear()} Srimathi S. All rights reserved.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="group flex flex-col items-center gap-1"
        >
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-stone-900 group-hover:-translate-y-1 transition-transform duration-500">
            Top
          </span>
          <div className="h-[1px] w-4 bg-stone-900" />
        </button>
        
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Journey", href: "#experience" },
  { name: "Destino", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const navWidth = useTransform(scrollY, [0, 100], ["100%", "85%"]);
  const navY = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const MagneticButton = ({ children, href, isActive }: { children: React.ReactNode, href: string, isActive: boolean }) => {
    const ref = useRef<HTMLAnchorElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!ref.current) return;
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      gsap.to(ref.current, { x: x * 0.3, y: y * 0.3, duration: 0.8, ease: "power3.out" });
    };

    const handleMouseLeave = () => {
      if (!ref.current) return;
      gsap.to(ref.current, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
    };

    return (
      <a
        ref={ref}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative px-4 py-2 text-[14px] font-sans font-semibold tracking-wide transition-colors duration-300 rounded-full",
          isActive ? "text-stone-900" : "text-stone-500 hover:text-stone-900"
        )}
      >
        {children}
        {isActive && (
          <motion.div
            layoutId="navIndicator"
            className="absolute inset-0 bg-stone-100/50 rounded-full -z-10"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </a>
    );
  };

  return (
    <motion.header
      style={{ y: navY }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-0 pointer-events-none"
    >
      <motion.div
        style={{ width: navWidth }}
        className={cn(
          "pointer-events-auto max-w-6xl flex items-center justify-between px-8 py-5 transition-all duration-700",
          isScrolled
            ? "bg-white/40 backdrop-blur-3xl border border-white/40 shadow-[0_20px_40px_rgb(0,0,0,0.03)] rounded-[2rem]"
            : "bg-transparent border-transparent"
        )}
      >
        <a href="#" className="text-2xl font-heading font-medium tracking-tight text-stone-800">
          Srimathi<span className="text-stone-400">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <MagneticButton 
              key={link.name} 
              href={link.href} 
              isActive={activeSection === link.href.substring(1)}
            >
              {link.name}
            </MagneticButton>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-stone-700 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="absolute top-[100px] left-4 right-4 bg-white/80 backdrop-blur-3xl border border-white/40 rounded-[2rem] p-8 shadow-2xl lg:hidden flex flex-col gap-6 pointer-events-auto"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-heading font-medium text-stone-800"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}

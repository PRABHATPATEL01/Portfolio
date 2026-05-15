"use client";

import { useEffect, useState } from "react";
import { scrollToSection } from "@/utils/scroll";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <nav className={`flex justify-between items-center py-4 px-6 md:px-10 lg:px-20 border-b transition-all duration-300 sticky top-0 z-[100] w-full ${
      isScrolled ? "bg-white/60 backdrop-blur-2xl border-white/30 py-3" : "bg-white/40 backdrop-blur-xl border-white/20"
    }`}>
      <div className="font-display font-bold text-xl text-primary uppercase tracking-wide flex items-center gap-2 shrink-0">
        <span className="text-2xl"></span> <span className="hidden sm:inline">Prabhat Patel</span>
      </div>
      
      <div className="flex gap-2 md:gap-6 text-[11px] md:text-sm font-bold text-on-surface-variant overflow-x-auto no-scrollbar py-2 px-2">
        {["projects", "expertise", "experience", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={(e) => handleNavClick(e, item)}
            className="hover:text-primary active:opacity-70 transition-all whitespace-nowrap cursor-pointer py-1 px-3 rounded-full hover:bg-primary/5 capitalize"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <a href="https://linkedin.com/in/prabhat-patel-255432202" target="_blank" className="bg-primary/90 text-on-primary px-4 md:px-6 py-2 md:py-2.5 rounded-2xl font-bold shadow-lg hover:bg-primary active:scale-95 transition-all backdrop-blur-sm text-xs md:text-sm whitespace-nowrap">
          Resume
        </a>
      </div>
    </nav>
  );
}

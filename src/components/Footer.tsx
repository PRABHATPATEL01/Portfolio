"use client";

import { scrollToSection } from "@/utils/scroll";

export default function Footer() {
  return (
    <footer id="contact" className="px-6 md:px-10 lg:px-20 py-16 bg-white/20 backdrop-blur-xl border-t border-white/20 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <div className="font-display font-bold text-on-surface mb-2 text-2xl flex items-center gap-2 justify-center md:justify-start">
             <span className="text-primary"></span> Prabhat Patel
          </div>
          <div className="text-sm text-on-surface-variant font-bold">Delhi, India</div>
          <div className="text-xs text-on-surface-variant font-medium mt-3 opacity-60">© 2024 Prabhat Patel. Built with Passion & Precision.</div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-on-surface-variant">
          <a href="mailto:prabhatpatel301@gmail.com" className="bg-white/40 px-6 py-3 rounded-2xl border border-white/60 hover:bg-white/60 transition-all shadow-sm">Email Me</a>
          <a href="https://linkedin.com/in/prabhat-patel-255432202" target="_blank" className="bg-white/40 px-6 py-3 rounded-2xl border border-white/60 hover:bg-white/60 transition-all shadow-sm">LinkedIn</a>
          <button 
            onClick={() => scrollToSection("home", 0)}
            className="text-primary/60 hover:text-primary transition-all cursor-pointer border-none bg-transparent font-bold"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
